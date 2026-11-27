const byId=id=>document.getElementById(id)
const make=(tag,value)=>{const e=document.createElement(tag);if(value!=null)e.textContent=String(value);return e}
const option=(value,text)=>new Option(text,String(value))
const mean=n=>Number(n).toFixed(2)
const label=s=>s.replace('-',' Lv.')
function driverName(id){
  if(id==='initial')return '初期CPU'
  if(id.startsWith('es-'))return id.includes('-r')?'対戦学習の候補':'対戦学習の採用値'
  if(id.startsWith('helm-'))return '操縦判断の学習艇'
  if(id.startsWith('route-'))return '旋回ラインの学習艇'
  if(id.startsWith('start-'))return 'スタート判断の学習艇'
  return '対戦学習艇'
}
const st=v=>v==null?'—':Number(v).toFixed(2)
let data,level,request=0
function table(id,head,rows){
  const t=make('table'),tr=make('tr'),thead=make('thead'),tbody=make('tbody')
  for(const value of head){const h=make('th',value);h.scope='col';tr.append(h)}
  thead.append(tr);t.append(thead,tbody)
  for(const values of rows){
    const r=make('tr')
    for(const value of values){const cell=make('td');if(value instanceof Node)cell.append(value);else cell.textContent=String(value);r.append(cell)}
    tbody.append(r)
  }
  byId(id).replaceChildren(t)
}
function showLevels(){
  table('tiers',['級・レベル','学習世代','下限','着順点合計','勝率','1着','完走','不良航法（件）','二次勝率'],data.levels.map(v=>{
    const s=v.primary.summary,b=make('button',label(v.tier))
    b.type='button';b.setAttribute('aria-current',String(v===level))
    b.onclick=()=>{selectLevel(v);byId('detail').scrollIntoView({block:'start'})}
    return [b,v.sourceGeneration,v.minimum.toFixed(4),s.points,mean(s.rate),s.firsts,s.finishes,v.primary.violations,
      v.confirmation?mean(v.confirmation.summary.rate):'—']
  }))
}
function opponents(row){
  const d=make('details'),ul=make('ul')
  d.append(make('summary',row.opponents.map(([seat,id])=>seat+'枠 G'+data.opponents[id].g).join(' / ')),ul)
  for(const [seat,id] of row.opponents){
    const m=data.opponents[id]
    ul.append(make('li',seat+'号艇　G'+m.g+' '+driverName(id)+'（'+id+'）'+(m.rate==null?'':'　今回の勝率 '+mean(m.rate))))
  }
  return d
}
function detail(){
  const panel=byId('phase').value==='confirmation'?level.confirmation:level.primary
  const s=panel.summary
  byId('selected').textContent=(level.tier?label(level.tier):'受験CPU')+' の対戦記録'
  byId('record').textContent='第'+level.sourceGeneration+'世代 '+level.source+'。着順点 '+s.points+' ÷ '+s.starts+'走 ＝ 勝率 '+mean(s.rate)+
    '。不良航法 '+panel.violations+'件。対戦相手は'+panel.distinctOpponents+'人で、初期・中盤・最近の順に '+panel.bands.join('・')+' 枠。'
  if(level.firstPeak)byId('record').textContent+=' Lv.5初認定は第'+level.firstPeak.generation+'世代、一次'+level.firstPeak.primaryPoints+'点・二次'+level.firstPeak.confirmationPoints+'点。'
  table('lanes',['枠','出走','着順点','勝率','1〜6着の回数','完走','F','L','不良航法','平均ST'],panel.byLane.map((v,i)=>
    [i+1,v.starts,v.points,mean(v.rate),v.placeCounts.join(' / '),v.finishes,v.flying,v.late,v.violationCount??v.foulPoints/10,st(v.meanST)]))
  const lane=Number(byId('lane').value)
  table('races',['走','自枠','着','点','不良航法','目標ST','実ST','波高','対戦相手'],panel.rows.flatMap((r,i)=>{
    if(lane&&r.lane!==lane)return []
    return [[i+1,r.lane,r.flying?'F':r.late?'L':r.place||'着外',r.points,r.violations,st(r.target),st(r.st),r.waveCm+' cm',opponents(r)]]
  }))
}
function selectLevel(v){
  level=v
  byId('contender').value=v.source
  byId('phase').replaceChildren(option('primary','一次・60走'))
  if(v.confirmation)byId('phase').append(option('confirmation','二次・別抽選60走'))
  byId('lane').value='0';showLevels();detail()
}
async function json(file){
  const r=await fetch(file)
  if(!r.ok)throw Error('認定記録を取得できませんでした')
  return r.json()
}
async function openRound(){
  const token=++request
  const g=Number(byId('round').value),next=await json('./g'+String(g).padStart(3,'0')+'.json')
  if(token!==request)return
  byId('download').href='./g'+String(g).padStart(3,'0')+'.json'
  data=next;byId('state').textContent='第'+g+'世代の認定。各艇は1〜6枠を10走ずつ、対戦相手を替えて3周します。今回の初期CPUは勝率 '+mean(data.floor)+'。'
  byId('contender').replaceChildren(...data.candidates.map(c=>option(c.id,(c.selected?label(c.selected)+'・':'')+'G'+c.g+' '+c.id+'・'+mean(c.rate))))
  byId('content').hidden=false;selectLevel(data.levels[0])
}
try{
  const history=await json('./rounds.json')
  for(const g of history.rounds)byId('round').append(option(g,'第'+g+'世代'))
  const requested=Number(new URLSearchParams(location.search).get('g'))
  if(history.rounds.includes(requested))byId('round').value=String(requested)
  for(let i=1;i<=6;i++)byId('lane').append(option(i,i+'号艇'))
  byId('history').textContent='旧方式の初期CPUの記録は '+history.historical.points+'点 / '+history.historical.starts+'走、勝率 '+mean(history.historical.rate)+'。'
  const old=make('a','旧方式の60走を確認');old.href='./initial-legacy.json';byId('history').append(old)
  byId('round').onchange=()=>openRound().catch(e=>{byId('state').textContent=e.message})
  byId('contender').onchange=async()=>{
    const id=byId('contender').value,g=data.generation
    try{
      const v=data.levels.find(x=>x.source===id)??await json('./g'+String(g).padStart(3,'0')+'-cards/'+encodeURIComponent(id)+'.json')
      if(data.generation===g&&byId('contender').value===id)selectLevel(v)
    }catch(e){byId('state').textContent=e.message}
  }
  byId('phase').onchange=detail;byId('lane').onchange=detail
  await openRound()
}catch(e){byId('state').textContent=e.message}
