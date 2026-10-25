var hd=Object.defineProperty;var ud=(i,t,e)=>t in i?hd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var O=(i,t,e)=>ud(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cc="170",ys={ROTATE:0,DOLLY:1,PAN:2},gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dd=0,nl=1,fd=2,Zh=1,Kh=2,qn=3,Si=0,Xe=1,ye=2,vi=0,Ss=1,il=2,sl=3,rl=4,pd=5,Fi=100,md=101,gd=102,_d=103,xd=104,vd=200,Md=201,yd=202,Sd=203,La=204,Da=205,Ed=206,wd=207,Td=208,Ad=209,bd=210,Rd=211,Cd=212,Pd=213,Ld=214,Ia=0,Ua=1,Na=2,bs=3,Fa=4,Oa=5,za=6,Ba=7,$h=0,Dd=1,Id=2,Mi=0,Ud=1,Nd=2,Fd=3,jh=4,Od=5,zd=6,Bd=7,Jh=300,Rs=301,Cs=302,ka=303,Va=304,Uo=306,Ha=1e3,Bi=1001,Ga=1002,on=1003,kd=1004,wr=1005,fn=1006,Go=1007,ki=1008,ii=1009,Qh=1010,tu=1011,gr=1012,Pc=1013,Wi=1014,Dn=1015,Jn=1016,Lc=1017,Dc=1018,Ps=1020,eu=35902,nu=1021,iu=1022,An=1023,su=1024,ru=1025,Es=1026,Ls=1027,_r=1028,Ic=1029,ou=1030,Uc=1031,Nc=1033,uo=33776,fo=33777,po=33778,mo=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,Za=36196,Ka=37492,$a=37496,ja=37808,Ja=37809,Qa=37810,tc=37811,ec=37812,nc=37813,ic=37814,sc=37815,rc=37816,oc=37817,ac=37818,cc=37819,lc=37820,hc=37821,go=36492,uc=36494,dc=36495,au=36283,fc=36284,pc=36285,mc=36286,Vd=3200,Hd=3201,cu=0,Gd=1,xi="",Ue="srgb",Os="srgb-linear",No="linear",le="srgb",Qi=7680,ol=519,Wd=512,Xd=513,qd=514,lu=515,Yd=516,Zd=517,Kd=518,$d=519,al=35044,lr=35048,cl="300 es",Qn=2e3,So=2001;class Yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_o=Math.PI/180,gc=180/Math.PI;function zs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function jd(i,t){return(i%t+t)%t}function Wo(i,t,e){return(1-e)*i+e*t}function qs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Jd={DEG2RAD:_o};class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,s,r,o,a,c,l){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],S=s[4],x=s[7],P=s[2],b=s[5],R=s[8];return r[0]=o*_+a*y+c*P,r[3]=o*m+a*S+c*b,r[6]=o*p+a*x+c*R,r[1]=l*_+h*y+u*P,r[4]=l*m+h*S+u*b,r[7]=l*p+h*x+u*R,r[2]=d*_+f*y+g*P,r[5]=d*m+f*S+g*b,r[8]=d*p+f*x+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Xo.makeScale(t,e)),this}rotate(t){return this.premultiply(Xo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xo=new Zt;function hu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qd(){const i=Eo("canvas");return i.style.display="block",i}const ll={};function sr(i){i in ll||(ll[i]=!0,console.warn(i))}function tf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ef(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function nf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ee={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(i.r=ei(i.r),i.g=ei(i.g),i.b=ei(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(i.r=ws(i.r),i.g=ws(i.g),i.b=ws(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xi?No:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const hl=[.64,.33,.3,.6,.15,.06],ul=[.2126,.7152,.0722],dl=[.3127,.329],fl=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pl=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[Os]:{primaries:hl,whitePoint:dl,transfer:No,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:ul,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:hl,whitePoint:dl,transfer:le,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:ul,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}});let ts;class sf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ts===void 0&&(ts=Eo("canvas")),ts.width=t.width,ts.height=t.height;const n=ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Eo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ei(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ei(e[n]/255)*255):e[n]=ei(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rf=0;class uu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=zs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qo(s[o].image)):r.push(qo(s[o]))}else r=qo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function qo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let of=0;class ke extends Yi{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=Bi,s=Bi,r=fn,o=ki,a=An,c=ii,l=ke.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=zs(),this.name="",this.source=new uu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ha:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case Ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ha:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case Ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Jh;ke.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,x=(f+1)/2,P=(p+1)/2,b=(h+d)/4,R=(u+_)/4,D=(g+m)/4;return S>x&&S>P?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=b/n,r=R/n):x>P?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=D/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=R/r,s=D/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class af extends Yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new uu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends af{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class du extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cf extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,y=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const P=Math.sqrt(S),b=Math.atan2(P,p*y);m=Math.sin(m*b)/P,a=Math.sin(a*b)/P}const x=a*y;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ml.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ml.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yo.copy(this).projectOnVector(t),this.sub(Yo)}reflect(t){return this.sub(Yo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yo=new A,ml=new Nn;class Zi{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),Ar.subVectors(this.max,Ys),es.subVectors(t.a,Ys),ns.subVectors(t.b,Ys),is.subVectors(t.c,Ys),hi.subVectors(ns,es),ui.subVectors(is,ns),Ti.subVectors(es,is);let e=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Ti.z,Ti.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Ti.z,0,-Ti.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Ti.y,Ti.x,0];return!Zo(e,es,ns,is,Ar)||(e=[1,0,0,0,1,0,0,0,1],!Zo(e,es,ns,is,Ar))?!1:(br.crossVectors(hi,ui),e=[br.x,br.y,br.z],Zo(e,es,ns,is,Ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const kn=[new A,new A,new A,new A,new A,new A,new A,new A],_n=new A,Tr=new Zi,es=new A,ns=new A,is=new A,hi=new A,ui=new A,Ti=new A,Ys=new A,Ar=new A,br=new A,Ai=new A;function Zo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ai.fromArray(i,r);const a=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),c=t.dot(Ai),l=e.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const lf=new Zi,Zs=new A,Ko=new A;class Ki{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):lf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);const e=Zs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(Ko)),this.expandByPoint(Zs.copy(t.center).sub(Ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new A,$o=new A,Rr=new A,di=new A,jo=new A,Cr=new A,Jo=new A;class Fo{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$o.copy(t).add(e).multiplyScalar(.5),Rr.copy(e).sub(t).normalize(),di.copy(this.origin).sub($o);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Rr),a=di.dot(this.direction),c=-di.dot(Rr),l=di.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($o).addScaledVector(Rr,d),f}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,s,r){jo.subVectors(e,t),Cr.subVectors(n,t),Jo.crossVectors(jo,Cr);let o=this.direction.dot(Jo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,t);const c=a*this.direction.dot(Cr.crossVectors(di,Cr));if(c<0)return null;const l=a*this.direction.dot(jo.cross(di));if(l<0||c+l>o)return null;const h=-a*di.dot(Jo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),o=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hf,t,uf)}lookAt(t,e,n){const s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),fi.crossVectors(n,Qe),fi.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),fi.crossVectors(n,Qe)),fi.normalize(),Pr.crossVectors(Qe,fi),s[0]=fi.x,s[4]=Pr.x,s[8]=Qe.x,s[1]=fi.y,s[5]=Pr.y,s[9]=Qe.y,s[2]=fi.z,s[6]=Pr.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],S=n[7],x=n[11],P=n[15],b=s[0],R=s[4],D=s[8],w=s[12],M=s[1],C=s[5],N=s[9],F=s[13],V=s[2],G=s[6],H=s[10],nt=s[14],L=s[3],J=s[7],Q=s[11],st=s[15];return r[0]=o*b+a*M+c*V+l*L,r[4]=o*R+a*C+c*G+l*J,r[8]=o*D+a*N+c*H+l*Q,r[12]=o*w+a*F+c*nt+l*st,r[1]=h*b+u*M+d*V+f*L,r[5]=h*R+u*C+d*G+f*J,r[9]=h*D+u*N+d*H+f*Q,r[13]=h*w+u*F+d*nt+f*st,r[2]=g*b+_*M+m*V+p*L,r[6]=g*R+_*C+m*G+p*J,r[10]=g*D+_*N+m*H+p*Q,r[14]=g*w+_*F+m*nt+p*st,r[3]=y*b+S*M+x*V+P*L,r[7]=y*R+S*C+x*G+P*J,r[11]=y*D+S*N+x*H+P*Q,r[15]=y*w+S*F+x*nt+P*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,S=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,x=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,P=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,b=e*y+n*S+s*x+r*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=y*R,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*R,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*R,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*R,t[4]=S*R,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*R,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*R,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*R,t[8]=x*R,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*R,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*R,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*R,t[12]=P*R,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*R,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*R,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,y=c*l,S=c*h,x=c*u,P=n.x,b=n.y,R=n.z;return s[0]=(1-(_+p))*P,s[1]=(f+x)*P,s[2]=(g-S)*P,s[3]=0,s[4]=(f-x)*b,s[5]=(1-(d+p))*b,s[6]=(m+y)*b,s[7]=0,s[8]=(g+S)*R,s[9]=(m-y)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ss.set(s[0],s[1],s[2]).length();const o=ss.set(s[4],s[5],s[6]).length(),a=ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);const l=1/r,h=1/o,u=1/a;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,e.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Qn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===Qn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===So)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Qn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let g,_;if(a===Qn)g=(o+r)*u,_=-2*u;else if(a===So)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ss=new A,xn=new ae,hf=new A(0,0,0),uf=new A(1,1,1),fi=new A,Pr=new A,Qe=new A,gl=new ae,_l=new Nn;class Fn{constructor(t=0,e=0,n=0,s=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(we(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _l.setFromEuler(this),this.setFromQuaternion(_l,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class fu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let df=0;const xl=new A,rs=new Nn,Hn=new ae,Lr=new A,Ks=new A,ff=new A,pf=new Nn,vl=new A(1,0,0),Ml=new A(0,1,0),yl=new A(0,0,1),Sl={type:"added"},mf={type:"removed"},os={type:"childadded",child:null},Qo={type:"childremoved",child:null};class Te extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new A,e=new Fn,n=new Nn,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Zt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(vl,t)}rotateY(t){return this.rotateOnAxis(Ml,t)}rotateZ(t){return this.rotateOnAxis(yl,t)}translateOnAxis(t,e){return xl.copy(t).applyQuaternion(this.quaternion),this.position.add(xl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vl,t)}translateY(t){return this.translateOnAxis(Ml,t)}translateZ(t){return this.translateOnAxis(yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lr.copy(t):Lr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Ks,Lr,this.up):Hn.lookAt(Lr,Ks,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(Hn),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sl),os.child=t,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mf),Qo.child=t,this.dispatchEvent(Qo),Qo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sl),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,ff),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,pf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Te.DEFAULT_UP=new A(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new A,Gn=new A,ta=new A,Wn=new A,as=new A,cs=new A,El=new A,ea=new A,na=new A,ia=new A,sa=new ge,ra=new ge,oa=new ge;class Tn{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),Gn.subVectors(n,e),ta.subVectors(t,e);const o=vn.dot(vn),a=vn.dot(Gn),c=vn.dot(ta),l=Gn.dot(Gn),h=Gn.dot(ta),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Wn.x),c.addScaledVector(o,Wn.y),c.addScaledVector(a,Wn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return sa.setScalar(0),ra.setScalar(0),oa.setScalar(0),sa.fromBufferAttribute(t,e),ra.fromBufferAttribute(t,n),oa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(sa,r.x),o.addScaledVector(ra,r.y),o.addScaledVector(oa,r.z),o}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),Gn.subVectors(t,e),vn.cross(Gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),vn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;as.subVectors(s,n),cs.subVectors(r,n),ea.subVectors(t,n);const c=as.dot(ea),l=cs.dot(ea);if(c<=0&&l<=0)return e.copy(n);na.subVectors(t,s);const h=as.dot(na),u=cs.dot(na);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(as,o);ia.subVectors(t,r);const f=as.dot(ia),g=cs.dot(ia);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(cs,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return El.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(El,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(as,o).addScaledVector(cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function aa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=jd(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=aa(o,r,t+1/3),this.g=aa(o,r,t),this.b=aa(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=pu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return ee.fromWorkingColorSpace(Fe.copy(this),t),Math.round(we(Fe.r*255,0,255))*65536+Math.round(we(Fe.g*255,0,255))*256+Math.round(we(Fe.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Fe.copy(this),e);const n=Fe.r,s=Fe.g,r=Fe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Ue){ee.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,s=Fe.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(Dr);const n=Wo(pi.h,Dr.h,e),s=Wo(pi.s,Dr.s,e),r=Wo(pi.l,Dr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Xt;Xt.NAMES=pu;let gf=0;class $i extends Yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=zs(),this.name="",this.blending=Ss,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Da,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==La&&(n.blendSrc=this.blendSrc),this.blendDst!==Da&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ol&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fc extends $i{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=$h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $n=_f();function _f(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function xf(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=we(i,-65504,65504),$n.floatView[0]=i;const t=$n.uint32View[0],e=t>>23&511;return $n.baseTable[e]+((t&8388607)>>$n.shiftTable[e])}function vf(i){const t=i>>10;return $n.uint32View[0]=$n.mantissaTable[$n.offsetTable[t]+(i&1023)]+$n.exponentTable[t],$n.floatView[0]}const Mf={toHalfFloat:xf,fromHalfFloat:vf},Me=new A,Ir=new yt;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=al,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ir.fromBufferAttribute(this,e),Ir.applyMatrix3(t),this.setXY(e,Ir.x,Ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==al&&(t.usage=this.usage),t}}class mu extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class gu extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yf=0;const cn=new ae,ca=new Te,ls=new A,tn=new Zi,$s=new Zi,Re=new A;class ve extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hu(t)?gu:mu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return ca.lookAt(t),ca.updateMatrix(),this.applyMatrix4(ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(tn.min,$s.min),tn.expandByPoint(Re),Re.addVectors(tn.max,$s.max),tn.expandByPoint(Re)):(tn.expandByPoint($s.min),tn.expandByPoint($s.max))}tn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Re.fromBufferAttribute(a,l),c&&(ls.fromBufferAttribute(t,l),Re.add(ls)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new A,c[D]=new A;const l=new A,h=new A,u=new A,d=new yt,f=new yt,g=new yt,_=new A,m=new A;function p(D,w,M){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[D].add(_),a[w].add(_),a[M].add(_),c[D].add(m),c[w].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let D=0,w=y.length;D<w;++D){const M=y[D],C=M.start,N=M.count;for(let F=C,V=C+N;F<V;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const S=new A,x=new A,P=new A,b=new A;function R(D){P.fromBufferAttribute(s,D),b.copy(P);const w=a[D];S.copy(w),S.sub(P.multiplyScalar(P.dot(w))).normalize(),x.crossVectors(b,w);const C=x.dot(c[D])<0?-1:1;o.setXYZW(D,S.x,S.y,S.z,C)}for(let D=0,w=y.length;D<w;++D){const M=y[D],C=M.start,N=M.count;for(let F=C,V=C+N;F<V;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new A,r=new A,o=new A,a=new A,c=new A,l=new A,h=new A,u=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wl=new ae,bi=new Fo,Ur=new Ki,Tl=new A,Nr=new A,Fr=new A,Or=new A,la=new A,zr=new A,Al=new A,Br=new A;class Rt extends Te{constructor(t=new ve,e=new Fc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){zr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(la.fromBufferAttribute(u,t),o?zr.addScaledVector(la,h):zr.addScaledVector(la.sub(e),h))}e.add(zr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(r),bi.copy(t.ray).recast(t.near),!(Ur.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Ur,Tl)===null||bi.origin.distanceToSquared(Tl)>(t.far-t.near)**2))&&(wl.copy(r).invert(),bi.copy(t.ray).applyMatrix4(wl),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,P=S;x<P;x+=3){const b=a.getX(x),R=a.getX(x+1),D=a.getX(x+2);s=kr(this,p,t,n,l,h,u,b,R,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);s=kr(this,o,t,n,l,h,u,y,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,P=S;x<P;x+=3){const b=x,R=x+1,D=x+2;s=kr(this,p,t,n,l,h,u,b,R,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,S=m+1,x=m+2;s=kr(this,o,t,n,l,h,u,y,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Sf(i,t,e,n,s,r,o,a){let c;if(t.side===Xe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Si,a),c===null)return null;Br.copy(a),Br.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Br);return l<e.near||l>e.far?null:{distance:l,point:Br.clone(),object:i}}function kr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Nr),i.getVertexPosition(c,Fr),i.getVertexPosition(l,Or);const h=Sf(i,t,e,n,Nr,Fr,Or,Al);if(h){const u=new A;Tn.getBarycoord(Al,Nr,Fr,Or,u),s&&(h.uv=Tn.getInterpolatedAttribute(s,a,c,l,u,new yt)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,a,c,l,u,new yt)),o&&(h.normal=Tn.getInterpolatedAttribute(o,a,c,l,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new A,materialIndex:0};Tn.getNormal(Nr,Fr,Or,d.normal),h.face=d,h.barycoord=u}return h}class se extends ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function g(_,m,p,y,S,x,P,b,R,D,w){const M=x/R,C=P/D,N=x/2,F=P/2,V=b/2,G=R+1,H=D+1;let nt=0,L=0;const J=new A;for(let Q=0;Q<H;Q++){const st=Q*C-F;for(let gt=0;gt<G;gt++){const lt=gt*M-N;J[_]=lt*y,J[m]=st*S,J[p]=V,l.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[p]=b>0?1:-1,h.push(J.x,J.y,J.z),u.push(gt/R),u.push(1-Q/D),nt+=1}}for(let Q=0;Q<D;Q++)for(let st=0;st<R;st++){const gt=d+st+G*Q,lt=d+st+G*(Q+1),W=d+(st+1)+G*(Q+1),X=d+(st+1)+G*Q;c.push(gt,lt,X),c.push(lt,W,X),L+=6}a.addGroup(f,L,w),f+=L,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new se(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ds(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function We(i){const t={};for(let e=0;e<i.length;e++){const n=Ds(i[e]);for(const s in n)t[s]=n[s]}return t}function Ef(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _u(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const wf={clone:Ds,merge:We};var Tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends $i{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tf,this.fragmentShader=Af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=Ef(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class xu extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new A,bl=new yt,Rl=new yt;class sn extends xu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gc*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,bl,Rl),e.subVectors(Rl,bl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_o*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hs=-90,us=1;class bf extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(hs,us,t,e);s.layers=this.layers,this.add(s);const r=new sn(hs,us,t,e);r.layers=this.layers,this.add(r);const o=new sn(hs,us,t,e);o.layers=this.layers,this.add(o);const a=new sn(hs,us,t,e);a.layers=this.layers,this.add(a);const c=new sn(hs,us,t,e);c.layers=this.layers,this.add(c);const l=new sn(hs,us,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===So)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class vu extends ke{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Rs,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rf extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new vu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new se(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:vi});r.uniforms.tEquirect.value=e;const o=new Rt(s,r),a=e.minFilter;return e.minFilter===ki&&(e.minFilter=fn),new bf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const ha=new A,Cf=new A,Pf=new Zt;class Zn{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ha.subVectors(n,e).cross(Cf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ha),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Pf.getNormalMatrix(t),s=this.coplanarPoint(ha).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Ki,Vr=new A;class Oc{constructor(t=new Zn,e=new Zn,n=new Zn,s=new Zn,r=new Zn,o=new Zn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],y=s[13],S=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+o,d+h,m+g,x+y).normalize(),n[3].setComponents(c-o,d-h,m-g,x-y).normalize(),n[4].setComponents(c-a,d-u,m-_,x-S).normalize(),e===Qn)n[5].setComponents(c+a,d+u,m+_,x+S).normalize();else if(e===So)n[5].setComponents(a,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Vr.x=s.normal.x>0?t.max.x:t.min.x,Vr.y=s.normal.y>0?t.max.y:t.min.y,Vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Lf(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ni extends ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*d-o;for(let S=0;S<l;S++){const x=S*u-r;g.push(x,-y,0),_.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const S=y+l*p,x=y+l*(p+1),P=y+1+l*(p+1),b=y+1+l*p;f.push(S,x,b),f.push(x,P,b)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.width,t.height,t.widthSegments,t.heightSegments)}}var Df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,If=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Uf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ff=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ep=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,np=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ip=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",lp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_p=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ep=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ap=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Up=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Np=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$p=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,om=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_m=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Am=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,km=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$m=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,n0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,l0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:Df,alphahash_pars_fragment:If,alphamap_fragment:Uf,alphamap_pars_fragment:Nf,alphatest_fragment:Ff,alphatest_pars_fragment:Of,aomap_fragment:zf,aomap_pars_fragment:Bf,batching_pars_vertex:kf,batching_vertex:Vf,begin_vertex:Hf,beginnormal_vertex:Gf,bsdfs:Wf,iridescence_fragment:Xf,bumpmap_pars_fragment:qf,clipping_planes_fragment:Yf,clipping_planes_pars_fragment:Zf,clipping_planes_pars_vertex:Kf,clipping_planes_vertex:$f,color_fragment:jf,color_pars_fragment:Jf,color_pars_vertex:Qf,color_vertex:tp,common:ep,cube_uv_reflection_fragment:np,defaultnormal_vertex:ip,displacementmap_pars_vertex:sp,displacementmap_vertex:rp,emissivemap_fragment:op,emissivemap_pars_fragment:ap,colorspace_fragment:cp,colorspace_pars_fragment:lp,envmap_fragment:hp,envmap_common_pars_fragment:up,envmap_pars_fragment:dp,envmap_pars_vertex:fp,envmap_physical_pars_fragment:wp,envmap_vertex:pp,fog_vertex:mp,fog_pars_vertex:gp,fog_fragment:_p,fog_pars_fragment:xp,gradientmap_pars_fragment:vp,lightmap_pars_fragment:Mp,lights_lambert_fragment:yp,lights_lambert_pars_fragment:Sp,lights_pars_begin:Ep,lights_toon_fragment:Tp,lights_toon_pars_fragment:Ap,lights_phong_fragment:bp,lights_phong_pars_fragment:Rp,lights_physical_fragment:Cp,lights_physical_pars_fragment:Pp,lights_fragment_begin:Lp,lights_fragment_maps:Dp,lights_fragment_end:Ip,logdepthbuf_fragment:Up,logdepthbuf_pars_fragment:Np,logdepthbuf_pars_vertex:Fp,logdepthbuf_vertex:Op,map_fragment:zp,map_pars_fragment:Bp,map_particle_fragment:kp,map_particle_pars_fragment:Vp,metalnessmap_fragment:Hp,metalnessmap_pars_fragment:Gp,morphinstance_vertex:Wp,morphcolor_vertex:Xp,morphnormal_vertex:qp,morphtarget_pars_vertex:Yp,morphtarget_vertex:Zp,normal_fragment_begin:Kp,normal_fragment_maps:$p,normal_pars_fragment:jp,normal_pars_vertex:Jp,normal_vertex:Qp,normalmap_pars_fragment:tm,clearcoat_normal_fragment_begin:em,clearcoat_normal_fragment_maps:nm,clearcoat_pars_fragment:im,iridescence_pars_fragment:sm,opaque_fragment:rm,packing:om,premultiplied_alpha_fragment:am,project_vertex:cm,dithering_fragment:lm,dithering_pars_fragment:hm,roughnessmap_fragment:um,roughnessmap_pars_fragment:dm,shadowmap_pars_fragment:fm,shadowmap_pars_vertex:pm,shadowmap_vertex:mm,shadowmask_pars_fragment:gm,skinbase_vertex:_m,skinning_pars_vertex:xm,skinning_vertex:vm,skinnormal_vertex:Mm,specularmap_fragment:ym,specularmap_pars_fragment:Sm,tonemapping_fragment:Em,tonemapping_pars_fragment:wm,transmission_fragment:Tm,transmission_pars_fragment:Am,uv_pars_fragment:bm,uv_pars_vertex:Rm,uv_vertex:Cm,worldpos_vertex:Pm,background_vert:Lm,background_frag:Dm,backgroundCube_vert:Im,backgroundCube_frag:Um,cube_vert:Nm,cube_frag:Fm,depth_vert:Om,depth_frag:zm,distanceRGBA_vert:Bm,distanceRGBA_frag:km,equirect_vert:Vm,equirect_frag:Hm,linedashed_vert:Gm,linedashed_frag:Wm,meshbasic_vert:Xm,meshbasic_frag:qm,meshlambert_vert:Ym,meshlambert_frag:Zm,meshmatcap_vert:Km,meshmatcap_frag:$m,meshnormal_vert:jm,meshnormal_frag:Jm,meshphong_vert:Qm,meshphong_frag:t0,meshphysical_vert:e0,meshphysical_frag:n0,meshtoon_vert:i0,meshtoon_frag:s0,points_vert:r0,points_frag:o0,shadow_vert:a0,shadow_frag:c0,sprite_vert:l0,sprite_frag:h0},Et={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Pn={basic:{uniforms:We([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:We([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:We([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:We([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:We([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:We([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:We([Et.points,Et.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:We([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:We([Et.common,Et.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:We([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:We([Et.sprite,Et.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:We([Et.common,Et.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:We([Et.lights,Et.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Pn.physical={uniforms:We([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Hr={r:0,b:0,g:0},Ci=new Fn,u0=new ae;function d0(i,t,e,n,s,r,o){const a=new Xt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function _(y){let S=!1;const x=g(y);x===null?p(a,c):x&&x.isColor&&(p(x,1),S=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,S){const x=g(S);x&&(x.isCubeTexture||x.mapping===Uo)?(h===void 0&&(h=new Rt(new se(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Ds(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ci.copy(S.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(u0.makeRotationFromEuler(Ci)),h.material.toneMapped=ee.getTransfer(x.colorSpace)!==le,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Rt(new ni(2,2),new pn({name:"BackgroundMaterial",uniforms:Ds(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ee.getTransfer(x.colorSpace)!==le,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,S){y.getRGB(Hr,_u(i)),n.buffers.color.setClear(Hr.r,Hr.g,Hr.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),c=S,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:m}}function f0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,C,N,F,V){let G=!1;const H=u(F,N,C);r!==H&&(r=H,l(r.object)),G=f(M,F,N,V),G&&g(M,F,N,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,x(M,C,N,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,C,N){const F=N.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let G=V[C.id];G===void 0&&(G={},V[C.id]=G);let H=G[F];return H===void 0&&(H=d(c()),G[F]=H),H}function d(M){const C=[],N=[],F=[];for(let V=0;V<e;V++)C[V]=0,N[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,C,N,F){const V=r.attributes,G=C.attributes;let H=0;const nt=N.getAttributes();for(const L in nt)if(nt[L].location>=0){const Q=V[L];let st=G[L];if(st===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),Q===void 0||Q.attribute!==st||st&&Q.data!==st.data)return!0;H++}return r.attributesNum!==H||r.index!==F}function g(M,C,N,F){const V={},G=C.attributes;let H=0;const nt=N.getAttributes();for(const L in nt)if(nt[L].location>=0){let Q=G[L];Q===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor));const st={};st.attribute=Q,Q&&Q.data&&(st.data=Q.data),V[L]=st,H++}r.attributes=V,r.attributesNum=H,r.index=F}function _(){const M=r.newAttributes;for(let C=0,N=M.length;C<N;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){const N=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;N[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),V[M]!==C&&(i.vertexAttribDivisor(M,C),V[M]=C)}function y(){const M=r.newAttributes,C=r.enabledAttributes;for(let N=0,F=C.length;N<F;N++)C[N]!==M[N]&&(i.disableVertexAttribArray(N),C[N]=0)}function S(M,C,N,F,V,G,H){H===!0?i.vertexAttribIPointer(M,C,N,V,G):i.vertexAttribPointer(M,C,N,F,V,G)}function x(M,C,N,F){_();const V=F.attributes,G=N.getAttributes(),H=C.defaultAttributeValues;for(const nt in G){const L=G[nt];if(L.location>=0){let J=V[nt];if(J===void 0&&(nt==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),nt==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){const Q=J.normalized,st=J.itemSize,gt=t.get(J);if(gt===void 0)continue;const lt=gt.buffer,W=gt.type,X=gt.bytesPerElement,q=W===i.INT||W===i.UNSIGNED_INT||J.gpuType===Pc;if(J.isInterleavedBufferAttribute){const Y=J.data,tt=Y.stride,St=J.offset;if(Y.isInstancedInterleavedBuffer){for(let _t=0;_t<L.locationSize;_t++)p(L.location+_t,Y.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let _t=0;_t<L.locationSize;_t++)m(L.location+_t);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let _t=0;_t<L.locationSize;_t++)S(L.location+_t,st/L.locationSize,W,Q,tt*X,(St+st/L.locationSize*_t)*X,q)}else{if(J.isInstancedBufferAttribute){for(let Y=0;Y<L.locationSize;Y++)p(L.location+Y,J.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Y=0;Y<L.locationSize;Y++)m(L.location+Y);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let Y=0;Y<L.locationSize;Y++)S(L.location+Y,st/L.locationSize,W,Q,st*X,st/L.locationSize*Y*X,q)}}else if(H!==void 0){const Q=H[nt];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(L.location,Q);break;case 3:i.vertexAttrib3fv(L.location,Q);break;case 4:i.vertexAttrib4fv(L.location,Q);break;default:i.vertexAttrib1fv(L.location,Q)}}}}y()}function P(){D();for(const M in n){const C=n[M];for(const N in C){const F=C[N];for(const V in F)h(F[V].object),delete F[V];delete C[N]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const N in C){const F=C[N];for(const V in F)h(F[V].object),delete F[V];delete C[N]}delete n[M.id]}function R(M){for(const C in n){const N=n[C];if(N[M.id]===void 0)continue;const F=N[M.id];for(const V in F)h(F[V].object),delete F[V];delete N[M.id]}}function D(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function p0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function m0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==An&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===Jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ii&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Dn&&!D)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:P,maxSamples:b}}function g0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Zn,a=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,S=y*4;let x=p.clippingState||null;c.value=x,x=h(g,d,S,f);for(let P=0;P!==S;++P)x[P]=e[P];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==_;++S,x+=4)o.copy(u[S]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function _0(i){let t=new WeakMap;function e(o,a){return a===ka?o.mapping=Rs:a===Va&&(o.mapping=Cs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ka||a===Va)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Rf(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class yu extends xu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const _s=4,Cl=[.125,.215,.35,.446,.526,.582],Oi=20,ua=new yu,Pl=new Xt;let da=null,fa=0,pa=0,ma=!1;const Ii=(1+Math.sqrt(5))/2,ds=1/Ii,Ll=[new A(-Ii,ds,0),new A(Ii,ds,0),new A(-ds,0,Ii),new A(ds,0,Ii),new A(0,Ii,-ds),new A(0,Ii,ds),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class Dl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){da=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),pa=this._renderer.getActiveMipmapLevel(),ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(da,fa,pa),this._renderer.xr.enabled=ma,t.scissorTest=!1,Gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rs||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),da=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),pa=this._renderer.getActiveMipmapLevel(),ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Jn,format:An,colorSpace:Os,depthBuffer:!1},s=Il(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Il(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x0(r)),this._blurMaterial=v0(r,t,e)}return s}_compileMaterial(t){const e=new Rt(this._lodPlanes[0],t);this._renderer.compile(e,ua)}_sceneToCubeUV(t,e,n,s){const a=new sn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Pl),h.toneMapping=Mi,h.autoClear=!1;const f=new Fc({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),g=new Rt(new se,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Pl),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const S=this._cubeSize;Gr(s,y*S,p>2?S:0,S,S),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Rs||t.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ul());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Gr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ua)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ll[(s-r-1)%Ll.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Rt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Oi;m>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const p=[];let y=0;for(let R=0;R<Oi;++R){const D=R/_,w=Math.exp(-D*D/2);p.push(w),R===0?y+=w:R<m&&(y+=2*w)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const x=this._sizeLods[s],P=3*x*(s>S-_s?s-S+_s:0),b=4*(this._cubeSize-x);Gr(e,P,b,3*x,2*x),c.setRenderTarget(e),c.render(u,ua)}}function x0(i){const t=[],e=[],n=[];let s=i;const r=i-_s+1+Cl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-_s?c=Cl[o-i+_s-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),S=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let b=0;b<f;b++){const R=b%3*2/3-1,D=b>2?0:-1,w=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];y.set(w,_*g*b),S.set(d,m*g*b);const M=[b,b,b,b,b,b];x.set(M,p*g*b)}const P=new ve;P.setAttribute("position",new Ve(y,_)),P.setAttribute("uv",new Ve(S,m)),P.setAttribute("faceIndex",new Ve(x,p)),t.push(P),s>_s&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Il(i,t,e){const n=new si(i,t,e);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function v0(i,t,e){const n=new Float32Array(Oi),s=new A(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Ul(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Nl(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function M0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ka||c===Va,h=c===Rs||c===Cs;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Dl(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Dl(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function y0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&sr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function S0(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let S=0,x=y.length;S<x;S+=3){const P=y[S+0],b=y[S+1],R=y[S+2];d.push(P,b,b,R,R,P)}}else if(g!==void 0){const y=g.array;_=g.version;for(let S=0,x=y.length/3-1;S<x;S+=3){const P=S+0,b=S+1,R=S+2;d.push(P,b,b,R,R,P)}}else return;const m=new(hu(d)?gu:mu)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function E0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function w0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function T0(i,t,e){const n=new WeakMap,s=new ge;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let P=a.attributes.position.count*x,b=1;P>t.maxTextureSize&&(b=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const R=new Float32Array(P*b*4*u),D=new du(R,P,b,u);D.type=Dn,D.needsUpdate=!0;const w=x*4;for(let C=0;C<u;C++){const N=p[C],F=y[C],V=S[C],G=P*b*4*C;for(let H=0;H<N.count;H++){const nt=H*w;g===!0&&(s.fromBufferAttribute(N,H),R[G+nt+0]=s.x,R[G+nt+1]=s.y,R[G+nt+2]=s.z,R[G+nt+3]=0),_===!0&&(s.fromBufferAttribute(F,H),R[G+nt+4]=s.x,R[G+nt+5]=s.y,R[G+nt+6]=s.z,R[G+nt+7]=0),m===!0&&(s.fromBufferAttribute(V,H),R[G+nt+8]=s.x,R[G+nt+9]=s.y,R[G+nt+10]=s.z,R[G+nt+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new yt(P,b)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function A0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Bc extends ke{constructor(t,e,n,s,r,o,a,c,l,h=Es){if(h!==Es&&h!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Es&&(n=Wi),n===void 0&&h===Ls&&(n=Ps),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:on,this.minFilter=c!==void 0?c:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Su=new ke,Fl=new Bc(1,1),Eu=new du,wu=new cf,Tu=new vu,Ol=[],zl=[],Bl=new Float32Array(16),kl=new Float32Array(9),Vl=new Float32Array(4);function Bs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ol[s];if(r===void 0&&(r=new Float32Array(s),Ol[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Oo(i,t){let e=zl[t];e===void 0&&(e=new Int32Array(t),zl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function b0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function R0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function C0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function L0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Ae(e,n))return;Vl.set(n),i.uniformMatrix2fv(this.addr,!1,Vl),be(e,n)}}function D0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Ae(e,n))return;kl.set(n),i.uniformMatrix3fv(this.addr,!1,kl),be(e,n)}}function I0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Ae(e,n))return;Bl.set(n),i.uniformMatrix4fv(this.addr,!1,Bl),be(e,n)}}function U0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function N0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function F0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function O0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function z0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function B0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function k0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function V0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function H0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fl.compareFunction=lu,r=Fl):r=Su,e.setTexture2D(t||r,s)}function G0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||wu,s)}function W0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Tu,s)}function X0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Eu,s)}function q0(i){switch(i){case 5126:return b0;case 35664:return R0;case 35665:return C0;case 35666:return P0;case 35674:return L0;case 35675:return D0;case 35676:return I0;case 5124:case 35670:return U0;case 35667:case 35671:return N0;case 35668:case 35672:return F0;case 35669:case 35673:return O0;case 5125:return z0;case 36294:return B0;case 36295:return k0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}function Y0(i,t){i.uniform1fv(this.addr,t)}function Z0(i,t){const e=Bs(t,this.size,2);i.uniform2fv(this.addr,e)}function K0(i,t){const e=Bs(t,this.size,3);i.uniform3fv(this.addr,e)}function $0(i,t){const e=Bs(t,this.size,4);i.uniform4fv(this.addr,e)}function j0(i,t){const e=Bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function J0(i,t){const e=Bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Q0(i,t){const e=Bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function tg(i,t){i.uniform1iv(this.addr,t)}function eg(i,t){i.uniform2iv(this.addr,t)}function ng(i,t){i.uniform3iv(this.addr,t)}function ig(i,t){i.uniform4iv(this.addr,t)}function sg(i,t){i.uniform1uiv(this.addr,t)}function rg(i,t){i.uniform2uiv(this.addr,t)}function og(i,t){i.uniform3uiv(this.addr,t)}function ag(i,t){i.uniform4uiv(this.addr,t)}function cg(i,t,e){const n=this.cache,s=t.length,r=Oo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Su,r[o])}function lg(i,t,e){const n=this.cache,s=t.length,r=Oo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||wu,r[o])}function hg(i,t,e){const n=this.cache,s=t.length,r=Oo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Tu,r[o])}function ug(i,t,e){const n=this.cache,s=t.length,r=Oo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Eu,r[o])}function dg(i){switch(i){case 5126:return Y0;case 35664:return Z0;case 35665:return K0;case 35666:return $0;case 35674:return j0;case 35675:return J0;case 35676:return Q0;case 5124:case 35670:return tg;case 35667:case 35671:return eg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return sg;case 36294:return rg;case 36295:return og;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return ug}}class fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=q0(e.type)}}class pg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dg(e.type)}}class mg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ga=/(\w+)(\])?(\[|\.)?/g;function Hl(i,t){i.seq.push(t),i.map[t.id]=t}function gg(i,t,e){const n=i.name,s=n.length;for(ga.lastIndex=0;;){const r=ga.exec(n),o=ga.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Hl(e,l===void 0?new fg(a,i,t):new pg(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new mg(a),Hl(e,u)),e=u}}}class xo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);gg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Gl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const _g=37297;let xg=0;function vg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Wl=new Zt;function Mg(i){ee._getMatrix(Wl,ee.workingColorSpace,i);const t=`mat3( ${Wl.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case No:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+vg(i.getShaderSource(t),o)}else return s}function yg(i,t){const e=Mg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sg(i,t){let e;switch(t){case Ud:e="Linear";break;case Nd:e="Reinhard";break;case Fd:e="Cineon";break;case jh:e="ACESFilmic";break;case zd:e="AgX";break;case Bd:e="Neutral";break;case Od:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Wr=new A;function Eg(){ee.getLuminanceCoefficients(Wr);const i=Wr.x.toFixed(4),t=Wr.y.toFixed(4),e=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function Tg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ag(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function rr(i){return i!==""}function ql(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(i){return i.replace(bg,Cg)}const Rg=new Map;function Cg(i,t){let e=Kt[t];if(e===void 0){const n=Rg.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _c(e)}const Pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zl(i){return i.replace(Pg,Lg)}function Lg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Dg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ig(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rs:case Cs:t="ENVMAP_TYPE_CUBE";break;case Uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ug(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Cs:t="ENVMAP_MODE_REFRACTION";break}return t}function Ng(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $h:t="ENVMAP_BLENDING_MULTIPLY";break;case Dd:t="ENVMAP_BLENDING_MIX";break;case Id:t="ENVMAP_BLENDING_ADD";break}return t}function Fg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Og(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Dg(e),l=Ig(e),h=Ug(e),u=Ng(e),d=Fg(e),f=wg(e),g=Tg(r),_=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rr).join(`
`),p.length>0&&(p+=`
`)):(m=[Kl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),p=[Kl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mi?"#define TONE_MAPPING":"",e.toneMapping!==Mi?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Mi?Sg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,yg("linearToOutputTexel",e.outputColorSpace),Eg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rr).join(`
`)),o=_c(o),o=ql(o,e),o=Yl(o,e),a=_c(a),a=ql(a,e),a=Yl(a,e),o=Zl(o),a=Zl(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=y+m+o,x=y+p+a,P=Gl(s,s.VERTEX_SHADER,S),b=Gl(s,s.FRAGMENT_SHADER,x);s.attachShader(_,P),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(C){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(P).trim(),V=s.getShaderInfoLog(b).trim();let G=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,b);else{const nt=Xl(s,P,"vertex"),L=Xl(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+nt+`
`+L)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||V==="")&&(H=!1);H&&(C.diagnostics={runnable:G,programLog:N,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(P),s.deleteShader(b),D=new xo(s,_),w=Ag(s,_)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,_g)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=b,this}let zg=0;class Bg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new kg(t),e.set(t,n)),n}}class kg{constructor(t){this.id=zg++,this.code=t,this.usedTimes=0}}function Vg(i,t,e,n,s,r,o){const a=new fu,c=new Bg,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,M,C,N,F){const V=N.fog,G=F.geometry,H=w.isMeshStandardMaterial?N.environment:null,nt=(w.isMeshStandardMaterial?e:t).get(w.envMap||H),L=nt&&nt.mapping===Uo?nt.image.height:null,J=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const Q=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,st=Q!==void 0?Q.length:0;let gt=0;G.morphAttributes.position!==void 0&&(gt=1),G.morphAttributes.normal!==void 0&&(gt=2),G.morphAttributes.color!==void 0&&(gt=3);let lt,W,X,q;if(J){const Lt=Pn[J];lt=Lt.vertexShader,W=Lt.fragmentShader}else lt=w.vertexShader,W=w.fragmentShader,c.update(w),X=c.getVertexShaderID(w),q=c.getFragmentShaderID(w);const Y=i.getRenderTarget(),tt=i.state.buffers.depth.getReversed(),St=F.isInstancedMesh===!0,_t=F.isBatchedMesh===!0,Ht=!!w.map,mt=!!w.matcap,Bt=!!nt,I=!!w.aoMap,Qt=!!w.lightMap,Ot=!!w.bumpMap,Vt=!!w.normalMap,At=!!w.displacementMap,te=!!w.emissiveMap,Ct=!!w.metalnessMap,E=!!w.roughnessMap,v=w.anisotropy>0,z=w.clearcoat>0,rt=w.dispersion>0,ht=w.iridescence>0,ot=w.sheen>0,bt=w.transmission>0,at=v&&!!w.anisotropyMap,et=z&&!!w.clearcoatMap,Tt=z&&!!w.clearcoatNormalMap,ct=z&&!!w.clearcoatRoughnessMap,dt=ht&&!!w.iridescenceMap,vt=ht&&!!w.iridescenceThicknessMap,Mt=ot&&!!w.sheenColorMap,xt=ot&&!!w.sheenRoughnessMap,kt=!!w.specularMap,zt=!!w.specularColorMap,Jt=!!w.specularIntensityMap,U=bt&&!!w.transmissionMap,ft=bt&&!!w.thicknessMap,j=!!w.gradientMap,it=!!w.alphaMap,$=w.alphaTest>0,ut=!!w.alphaHash,Pt=!!w.extensions;let qt=Mi;w.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(qt=i.toneMapping);const jt={shaderID:J,shaderType:w.type,shaderName:w.name,vertexShader:lt,fragmentShader:W,defines:w.defines,customVertexShaderID:X,customFragmentShaderID:q,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:_t,batchingColor:_t&&F._colorsTexture!==null,instancing:St,instancingColor:St&&F.instanceColor!==null,instancingMorph:St&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Os,alphaToCoverage:!!w.alphaToCoverage,map:Ht,matcap:mt,envMap:Bt,envMapMode:Bt&&nt.mapping,envMapCubeUVHeight:L,aoMap:I,lightMap:Qt,bumpMap:Ot,normalMap:Vt,displacementMap:d&&At,emissiveMap:te,normalMapObjectSpace:Vt&&w.normalMapType===Gd,normalMapTangentSpace:Vt&&w.normalMapType===cu,metalnessMap:Ct,roughnessMap:E,anisotropy:v,anisotropyMap:at,clearcoat:z,clearcoatMap:et,clearcoatNormalMap:Tt,clearcoatRoughnessMap:ct,dispersion:rt,iridescence:ht,iridescenceMap:dt,iridescenceThicknessMap:vt,sheen:ot,sheenColorMap:Mt,sheenRoughnessMap:xt,specularMap:kt,specularColorMap:zt,specularIntensityMap:Jt,transmission:bt,transmissionMap:U,thicknessMap:ft,gradientMap:j,opaque:w.transparent===!1&&w.blending===Ss&&w.alphaToCoverage===!1,alphaMap:it,alphaTest:$,alphaHash:ut,combine:w.combine,mapUv:Ht&&_(w.map.channel),aoMapUv:I&&_(w.aoMap.channel),lightMapUv:Qt&&_(w.lightMap.channel),bumpMapUv:Ot&&_(w.bumpMap.channel),normalMapUv:Vt&&_(w.normalMap.channel),displacementMapUv:At&&_(w.displacementMap.channel),emissiveMapUv:te&&_(w.emissiveMap.channel),metalnessMapUv:Ct&&_(w.metalnessMap.channel),roughnessMapUv:E&&_(w.roughnessMap.channel),anisotropyMapUv:at&&_(w.anisotropyMap.channel),clearcoatMapUv:et&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(w.sheenRoughnessMap.channel),specularMapUv:kt&&_(w.specularMap.channel),specularColorMapUv:zt&&_(w.specularColorMap.channel),specularIntensityMapUv:Jt&&_(w.specularIntensityMap.channel),transmissionMapUv:U&&_(w.transmissionMap.channel),thicknessMapUv:ft&&_(w.thicknessMap.channel),alphaMapUv:it&&_(w.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Vt||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(Ht||it),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:tt,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:gt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:Ht&&w.map.isVideoTexture===!0&&ee.getTransfer(w.map.colorSpace)===le,decodeVideoTextureEmissive:te&&w.emissiveMap.isVideoTexture===!0&&ee.getTransfer(w.emissiveMap.colorSpace)===le,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ye,flipSided:w.side===Xe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Pt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&w.extensions.multiDraw===!0||_t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return jt.vertexUv1s=l.has(1),jt.vertexUv2s=l.has(2),jt.vertexUv3s=l.has(3),l.clear(),jt}function p(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const C in w.defines)M.push(C),M.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(y(M,w),S(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function y(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function S(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const M=g[w.type];let C;if(M){const N=Pn[M];C=wf.clone(N.uniforms)}else C=w.uniforms;return C}function P(w,M){let C;for(let N=0,F=h.length;N<F;N++){const V=h[N];if(V.cacheKey===M){C=V,++C.usedTimes;break}}return C===void 0&&(C=new Og(i,M,w,r),h.push(C)),C}function b(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function R(w){c.remove(w)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:b,releaseShaderCache:R,programs:h,dispose:D}}function Hg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Gg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $l(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Gg),n.length>1&&n.sort(d||$l),s.length>1&&s.sort(d||$l)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Wg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new jl,i.set(n,[o])):s>=r.length?(o=new jl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Xg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Xt};break;case"SpotLight":e={position:new A,direction:new A,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function qg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Yg=0;function Zg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Kg(i){const t=new Xg,e=qg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const s=new A,r=new ae,o=new ae;function a(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,S=0,x=0,P=0,b=0,R=0;l.sort(Zg);for(let w=0,M=l.length;w<M;w++){const C=l[w],N=C.color,F=C.intensity,V=C.distance,G=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=N.r*F,u+=N.g*F,d+=N.b*F;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],F);R++}else if(C.isDirectionalLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const nt=C.shadow,L=e.get(C);L.shadowIntensity=nt.intensity,L.shadowBias=nt.bias,L.shadowNormalBias=nt.normalBias,L.shadowRadius=nt.radius,L.shadowMapSize=nt.mapSize,n.directionalShadow[f]=L,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=C.shadow.matrix,y++}n.directional[f]=H,f++}else if(C.isSpotLight){const H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(N).multiplyScalar(F),H.distance=V,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[_]=H;const nt=C.shadow;if(C.map&&(n.spotLightMap[P]=C.map,P++,nt.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[_]=nt.matrix,C.castShadow){const L=e.get(C);L.shadowIntensity=nt.intensity,L.shadowBias=nt.bias,L.shadowNormalBias=nt.normalBias,L.shadowRadius=nt.radius,L.shadowMapSize=nt.mapSize,n.spotShadow[_]=L,n.spotShadowMap[_]=G,x++}_++}else if(C.isRectAreaLight){const H=t.get(C);H.color.copy(N).multiplyScalar(F),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=H,m++}else if(C.isPointLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const nt=C.shadow,L=e.get(C);L.shadowIntensity=nt.intensity,L.shadowBias=nt.bias,L.shadowNormalBias=nt.normalBias,L.shadowRadius=nt.radius,L.shadowMapSize=nt.mapSize,L.shadowCameraNear=nt.camera.near,L.shadowCameraFar=nt.camera.far,n.pointShadow[g]=L,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=H,g++}else if(C.isHemisphereLight){const H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(F),H.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==y||D.numPointShadows!==S||D.numSpotShadows!==x||D.numSpotMaps!==P||D.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+P-b,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=y,D.numPointShadows=S,D.numSpotShadows=x,D.numSpotMaps=P,D.numLightProbes=R,n.version=Yg++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const S=l[p];if(S.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(S.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Jl(i){const t=new Kg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function $g(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Jl(i),t.set(s,[a])):r>=o.length?(a=new Jl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class jg extends $i{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jg extends $i{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function e_(i,t,e){let n=new Oc;const s=new yt,r=new yt,o=new ge,a=new jg({depthPacking:Hd}),c=new Jg,l={},h=e.maxTextureSize,u={[Si]:Xe,[Xe]:Si,[ye]:ye},d=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:Qg,fragmentShader:t_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ve;g.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Rt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zh;let p=this.type;this.render=function(b,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const w=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(vi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=p!==qn&&this.type===qn,V=p===qn&&this.type!==qn;for(let G=0,H=b.length;G<H;G++){const nt=b[G],L=nt.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);const J=L.getFrameExtents();if(s.multiply(J),r.copy(L.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,L.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,L.mapSize.y=r.y)),L.map===null||F===!0||V===!0){const st=this.type!==qn?{minFilter:on,magFilter:on}:{};L.map!==null&&L.map.dispose(),L.map=new si(s.x,s.y,st),L.map.texture.name=nt.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();const Q=L.getViewportCount();for(let st=0;st<Q;st++){const gt=L.getViewport(st);o.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),N.viewport(o),L.updateMatrices(nt,st),n=L.getFrustum(),x(R,D,L.camera,nt,this.type)}L.isPointLightShadow!==!0&&this.type===qn&&y(L,D),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,M,C)};function y(b,R){const D=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new si(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,D,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,D,f,_,null)}function S(b,R,D,w){let M=null;const C=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)M=C;else if(M=D.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const N=M.uuid,F=R.uuid;let V=l[N];V===void 0&&(V={},l[N]=V);let G=V[F];G===void 0&&(G=M.clone(),V[F]=G,R.addEventListener("dispose",P)),M=G}if(M.visible=R.visible,M.wireframe=R.wireframe,w===qn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=i.properties.get(M);N.light=D}return M}function x(b,R,D,w,M){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===qn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const F=t.update(b),V=b.material;if(Array.isArray(V)){const G=F.groups;for(let H=0,nt=G.length;H<nt;H++){const L=G[H],J=V[L.materialIndex];if(J&&J.visible){const Q=S(b,J,w,M);b.onBeforeShadow(i,b,R,D,F,Q,L),i.renderBufferDirect(D,null,F,Q,b,L),b.onAfterShadow(i,b,R,D,F,Q,L)}}}else if(V.visible){const G=S(b,V,w,M);b.onBeforeShadow(i,b,R,D,F,G,null),i.renderBufferDirect(D,null,F,G,b,null),b.onAfterShadow(i,b,R,D,F,G,null)}}const N=b.children;for(let F=0,V=N.length;F<V;F++)x(N[F],R,D,w,M)}function P(b){b.target.removeEventListener("dispose",P);for(const D in l){const w=l[D],M=b.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const n_={[Ia]:Ua,[Na]:za,[Fa]:Ba,[bs]:Oa,[Ua]:Ia,[za]:Na,[Ba]:Fa,[Oa]:bs};function i_(i,t){function e(){let U=!1;const ft=new ge;let j=null;const it=new ge(0,0,0,0);return{setMask:function($){j!==$&&!U&&(i.colorMask($,$,$,$),j=$)},setLocked:function($){U=$},setClear:function($,ut,Pt,qt,jt){jt===!0&&($*=qt,ut*=qt,Pt*=qt),ft.set($,ut,Pt,qt),it.equals(ft)===!1&&(i.clearColor($,ut,Pt,qt),it.copy(ft))},reset:function(){U=!1,j=null,it.set(-1,0,0,0)}}}function n(){let U=!1,ft=!1,j=null,it=null,$=null;return{setReversed:function(ut){if(ft!==ut){const Pt=t.get("EXT_clip_control");ft?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT);const qt=$;$=null,this.setClear(qt)}ft=ut},getReversed:function(){return ft},setTest:function(ut){ut?Y(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(ut){j!==ut&&!U&&(i.depthMask(ut),j=ut)},setFunc:function(ut){if(ft&&(ut=n_[ut]),it!==ut){switch(ut){case Ia:i.depthFunc(i.NEVER);break;case Ua:i.depthFunc(i.ALWAYS);break;case Na:i.depthFunc(i.LESS);break;case bs:i.depthFunc(i.LEQUAL);break;case Fa:i.depthFunc(i.EQUAL);break;case Oa:i.depthFunc(i.GEQUAL);break;case za:i.depthFunc(i.GREATER);break;case Ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}it=ut}},setLocked:function(ut){U=ut},setClear:function(ut){$!==ut&&(ft&&(ut=1-ut),i.clearDepth(ut),$=ut)},reset:function(){U=!1,j=null,it=null,$=null,ft=!1}}}function s(){let U=!1,ft=null,j=null,it=null,$=null,ut=null,Pt=null,qt=null,jt=null;return{setTest:function(Lt){U||(Lt?Y(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(Lt){ft!==Lt&&!U&&(i.stencilMask(Lt),ft=Lt)},setFunc:function(Lt,de,_e){(j!==Lt||it!==de||$!==_e)&&(i.stencilFunc(Lt,de,_e),j=Lt,it=de,$=_e)},setOp:function(Lt,de,_e){(ut!==Lt||Pt!==de||qt!==_e)&&(i.stencilOp(Lt,de,_e),ut=Lt,Pt=de,qt=_e)},setLocked:function(Lt){U=Lt},setClear:function(Lt){jt!==Lt&&(i.clearStencil(Lt),jt=Lt)},reset:function(){U=!1,ft=null,j=null,it=null,$=null,ut=null,Pt=null,qt=null,jt=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,S=null,x=null,P=null,b=null,R=new Xt(0,0,0),D=0,w=!1,M=null,C=null,N=null,F=null,V=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,nt=0;const L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(L)[1]),H=nt>=1):L.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),H=nt>=2);let J=null,Q={};const st=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),lt=new ge().fromArray(st),W=new ge().fromArray(gt);function X(U,ft,j,it){const $=new Uint8Array(4),ut=i.createTexture();i.bindTexture(U,ut),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<j;Pt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,it,0,i.RGBA,i.UNSIGNED_BYTE,$):i.texImage2D(ft+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,$);return ut}const q={};q[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(i.DEPTH_TEST),o.setFunc(bs),Ot(!1),Vt(nl),Y(i.CULL_FACE),I(vi);function Y(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function tt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function St(U,ft){return u[U]!==ft?(i.bindFramebuffer(U,ft),u[U]=ft,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function _t(U,ft){let j=f,it=!1;if(U){j=d.get(ft),j===void 0&&(j=[],d.set(ft,j));const $=U.textures;if(j.length!==$.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Pt=$.length;ut<Pt;ut++)j[ut]=i.COLOR_ATTACHMENT0+ut;j.length=$.length,it=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,it=!0);it&&i.drawBuffers(j)}function Ht(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const mt={[Fi]:i.FUNC_ADD,[md]:i.FUNC_SUBTRACT,[gd]:i.FUNC_REVERSE_SUBTRACT};mt[_d]=i.MIN,mt[xd]=i.MAX;const Bt={[vd]:i.ZERO,[Md]:i.ONE,[yd]:i.SRC_COLOR,[La]:i.SRC_ALPHA,[bd]:i.SRC_ALPHA_SATURATE,[Td]:i.DST_COLOR,[Ed]:i.DST_ALPHA,[Sd]:i.ONE_MINUS_SRC_COLOR,[Da]:i.ONE_MINUS_SRC_ALPHA,[Ad]:i.ONE_MINUS_DST_COLOR,[wd]:i.ONE_MINUS_DST_ALPHA,[Rd]:i.CONSTANT_COLOR,[Cd]:i.ONE_MINUS_CONSTANT_COLOR,[Pd]:i.CONSTANT_ALPHA,[Ld]:i.ONE_MINUS_CONSTANT_ALPHA};function I(U,ft,j,it,$,ut,Pt,qt,jt,Lt){if(U===vi){_===!0&&(tt(i.BLEND),_=!1);return}if(_===!1&&(Y(i.BLEND),_=!0),U!==pd){if(U!==m||Lt!==w){if((p!==Fi||x!==Fi)&&(i.blendEquation(i.FUNC_ADD),p=Fi,x=Fi),Lt)switch(U){case Ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case il:i.blendFunc(i.ONE,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case il:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,S=null,P=null,b=null,R.set(0,0,0),D=0,m=U,w=Lt}return}$=$||ft,ut=ut||j,Pt=Pt||it,(ft!==p||$!==x)&&(i.blendEquationSeparate(mt[ft],mt[$]),p=ft,x=$),(j!==y||it!==S||ut!==P||Pt!==b)&&(i.blendFuncSeparate(Bt[j],Bt[it],Bt[ut],Bt[Pt]),y=j,S=it,P=ut,b=Pt),(qt.equals(R)===!1||jt!==D)&&(i.blendColor(qt.r,qt.g,qt.b,jt),R.copy(qt),D=jt),m=U,w=!1}function Qt(U,ft){U.side===ye?tt(i.CULL_FACE):Y(i.CULL_FACE);let j=U.side===Xe;ft&&(j=!j),Ot(j),U.blending===Ss&&U.transparent===!1?I(vi):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const it=U.stencilWrite;a.setTest(it),it&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),te(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function Vt(U){U!==dd?(Y(i.CULL_FACE),U!==C&&(U===nl?i.cullFace(i.BACK):U===fd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),C=U}function At(U){U!==N&&(H&&i.lineWidth(U),N=U)}function te(U,ft,j){U?(Y(i.POLYGON_OFFSET_FILL),(F!==ft||V!==j)&&(i.polygonOffset(ft,j),F=ft,V=j)):tt(i.POLYGON_OFFSET_FILL)}function Ct(U){U?Y(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function E(U){U===void 0&&(U=i.TEXTURE0+G-1),J!==U&&(i.activeTexture(U),J=U)}function v(U,ft,j){j===void 0&&(J===null?j=i.TEXTURE0+G-1:j=J);let it=Q[j];it===void 0&&(it={type:void 0,texture:void 0},Q[j]=it),(it.type!==U||it.texture!==ft)&&(J!==j&&(i.activeTexture(j),J=j),i.bindTexture(U,ft||q[U]),it.type=U,it.texture=ft)}function z(){const U=Q[J];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(U){lt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),lt.copy(U))}function xt(U){W.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),W.copy(U))}function kt(U,ft){let j=l.get(ft);j===void 0&&(j=new WeakMap,l.set(ft,j));let it=j.get(U);it===void 0&&(it=i.getUniformBlockIndex(ft,U.name),j.set(U,it))}function zt(U,ft){const it=l.get(ft).get(U);c.get(ft)!==it&&(i.uniformBlockBinding(ft,it,U.__bindingPointIndex),c.set(ft,it))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},J=null,Q={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,S=null,x=null,P=null,b=null,R=new Xt(0,0,0),D=0,w=!1,M=null,C=null,N=null,F=null,V=null,lt.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Y,disable:tt,bindFramebuffer:St,drawBuffers:_t,useProgram:Ht,setBlending:I,setMaterial:Qt,setFlipSided:Ot,setCullFace:Vt,setLineWidth:At,setPolygonOffset:te,setScissorTest:Ct,activeTexture:E,bindTexture:v,unbindTexture:z,compressedTexImage2D:rt,compressedTexImage3D:ht,texImage2D:dt,texImage3D:vt,updateUBOMapping:kt,uniformBlockBinding:zt,texStorage2D:Tt,texStorage3D:ct,texSubImage2D:ot,texSubImage3D:bt,compressedTexSubImage2D:at,compressedTexSubImage3D:et,scissor:Mt,viewport:xt,reset:Jt}}function Ql(i,t,e,n){const s=s_(n);switch(e){case nu:return i*t;case su:return i*t;case ru:return i*t*2;case _r:return i*t/s.components*s.byteLength;case Ic:return i*t/s.components*s.byteLength;case ou:return i*t*2/s.components*s.byteLength;case Uc:return i*t*2/s.components*s.byteLength;case iu:return i*t*3/s.components*s.byteLength;case An:return i*t*4/s.components*s.byteLength;case Nc:return i*t*4/s.components*s.byteLength;case uo:case fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case po:case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:case Ya:return Math.max(i,16)*Math.max(t,8)/4;case Wa:case qa:return Math.max(i,8)*Math.max(t,8)/2;case Za:case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case nc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ic:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case sc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ac:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case lc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case go:case uc:case dc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case au:case fc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case pc:case mc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function s_(i){switch(i){case ii:case Qh:return{byteLength:1,components:1};case gr:case tu:case Jn:return{byteLength:2,components:1};case Lc:case Dc:return{byteLength:2,components:4};case Wi:case Pc:case Dn:return{byteLength:4,components:1};case eu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function r_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new yt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return f?new OffscreenCanvas(E,v):Eo("canvas")}function _(E,v,z){let rt=1;const ht=Ct(E);if((ht.width>z||ht.height>z)&&(rt=z/Math.max(ht.width,ht.height)),rt<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ot=Math.floor(rt*ht.width),bt=Math.floor(rt*ht.height);u===void 0&&(u=g(ot,bt));const at=v?g(ot,bt):u;return at.width=ot,at.height=bt,at.getContext("2d").drawImage(E,0,0,ot,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+ot+"x"+bt+")."),at}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,v,z,rt,ht=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ot=v;if(v===i.RED&&(z===i.FLOAT&&(ot=i.R32F),z===i.HALF_FLOAT&&(ot=i.R16F),z===i.UNSIGNED_BYTE&&(ot=i.R8)),v===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(ot=i.R8UI),z===i.UNSIGNED_SHORT&&(ot=i.R16UI),z===i.UNSIGNED_INT&&(ot=i.R32UI),z===i.BYTE&&(ot=i.R8I),z===i.SHORT&&(ot=i.R16I),z===i.INT&&(ot=i.R32I)),v===i.RG&&(z===i.FLOAT&&(ot=i.RG32F),z===i.HALF_FLOAT&&(ot=i.RG16F),z===i.UNSIGNED_BYTE&&(ot=i.RG8)),v===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(ot=i.RG8UI),z===i.UNSIGNED_SHORT&&(ot=i.RG16UI),z===i.UNSIGNED_INT&&(ot=i.RG32UI),z===i.BYTE&&(ot=i.RG8I),z===i.SHORT&&(ot=i.RG16I),z===i.INT&&(ot=i.RG32I)),v===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),z===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),z===i.UNSIGNED_INT&&(ot=i.RGB32UI),z===i.BYTE&&(ot=i.RGB8I),z===i.SHORT&&(ot=i.RGB16I),z===i.INT&&(ot=i.RGB32I)),v===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),z===i.UNSIGNED_INT&&(ot=i.RGBA32UI),z===i.BYTE&&(ot=i.RGBA8I),z===i.SHORT&&(ot=i.RGBA16I),z===i.INT&&(ot=i.RGBA32I)),v===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),v===i.RGBA){const bt=ht?No:ee.getTransfer(rt);z===i.FLOAT&&(ot=i.RGBA32F),z===i.HALF_FLOAT&&(ot=i.RGBA16F),z===i.UNSIGNED_BYTE&&(ot=bt===le?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function x(E,v){let z;return E?v===null||v===Wi||v===Ps?z=i.DEPTH24_STENCIL8:v===Dn?z=i.DEPTH32F_STENCIL8:v===gr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Wi||v===Ps?z=i.DEPTH_COMPONENT24:v===Dn?z=i.DEPTH_COMPONENT32F:v===gr&&(z=i.DEPTH_COMPONENT16),z}function P(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==on&&E.minFilter!==fn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function b(E){const v=E.target;v.removeEventListener("dispose",b),D(v),v.isVideoTexture&&h.delete(v)}function R(E){const v=E.target;v.removeEventListener("dispose",R),M(v)}function D(E){const v=n.get(E);if(v.__webglInit===void 0)return;const z=E.source,rt=d.get(z);if(rt){const ht=rt[v.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&w(E),Object.keys(rt).length===0&&d.delete(z)}n.remove(E)}function w(E){const v=n.get(E);i.deleteTexture(v.__webglTexture);const z=E.source,rt=d.get(z);delete rt[v.__cacheKey],o.memory.textures--}function M(E){const v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(v.__webglFramebuffer[rt]))for(let ht=0;ht<v.__webglFramebuffer[rt].length;ht++)i.deleteFramebuffer(v.__webglFramebuffer[rt][ht]);else i.deleteFramebuffer(v.__webglFramebuffer[rt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[rt])}else{if(Array.isArray(v.__webglFramebuffer))for(let rt=0;rt<v.__webglFramebuffer.length;rt++)i.deleteFramebuffer(v.__webglFramebuffer[rt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let rt=0;rt<v.__webglColorRenderbuffer.length;rt++)v.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[rt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const z=E.textures;for(let rt=0,ht=z.length;rt<ht;rt++){const ot=n.get(z[rt]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),o.memory.textures--),n.remove(z[rt])}n.remove(E)}let C=0;function N(){C=0}function F(){const E=C;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),C+=1,E}function V(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function G(E,v){const z=n.get(E);if(E.isVideoTexture&&At(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){const rt=E.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(z,E,v);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+v)}function H(E,v){const z=n.get(E);if(E.version>0&&z.__version!==E.version){W(z,E,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+v)}function nt(E,v){const z=n.get(E);if(E.version>0&&z.__version!==E.version){W(z,E,v);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+v)}function L(E,v){const z=n.get(E);if(E.version>0&&z.__version!==E.version){X(z,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+v)}const J={[Ha]:i.REPEAT,[Bi]:i.CLAMP_TO_EDGE,[Ga]:i.MIRRORED_REPEAT},Q={[on]:i.NEAREST,[kd]:i.NEAREST_MIPMAP_NEAREST,[wr]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[Go]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},st={[Wd]:i.NEVER,[$d]:i.ALWAYS,[Xd]:i.LESS,[lu]:i.LEQUAL,[qd]:i.EQUAL,[Kd]:i.GEQUAL,[Yd]:i.GREATER,[Zd]:i.NOTEQUAL};function gt(E,v){if(v.type===Dn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===fn||v.magFilter===Go||v.magFilter===wr||v.magFilter===ki||v.minFilter===fn||v.minFilter===Go||v.minFilter===wr||v.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,J[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,J[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,J[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Q[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Q[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,st[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===on||v.minFilter!==wr&&v.minFilter!==ki||v.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function lt(E,v){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",b));const rt=v.source;let ht=d.get(rt);ht===void 0&&(ht={},d.set(rt,ht));const ot=V(v);if(ot!==E.__cacheKey){ht[ot]===void 0&&(ht[ot]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ht[ot].usedTimes++;const bt=ht[E.__cacheKey];bt!==void 0&&(ht[E.__cacheKey].usedTimes--,bt.usedTimes===0&&w(v)),E.__cacheKey=ot,E.__webglTexture=ht[ot].texture}return z}function W(E,v,z){let rt=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(rt=i.TEXTURE_3D);const ht=lt(E,v),ot=v.source;e.bindTexture(rt,E.__webglTexture,i.TEXTURE0+z);const bt=n.get(ot);if(ot.version!==bt.__version||ht===!0){e.activeTexture(i.TEXTURE0+z);const at=ee.getPrimaries(ee.workingColorSpace),et=v.colorSpace===xi?null:ee.getPrimaries(v.colorSpace),Tt=v.colorSpace===xi||at===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let ct=_(v.image,!1,s.maxTextureSize);ct=te(v,ct);const dt=r.convert(v.format,v.colorSpace),vt=r.convert(v.type);let Mt=S(v.internalFormat,dt,vt,v.colorSpace,v.isVideoTexture);gt(rt,v);let xt;const kt=v.mipmaps,zt=v.isVideoTexture!==!0,Jt=bt.__version===void 0||ht===!0,U=ot.dataReady,ft=P(v,ct);if(v.isDepthTexture)Mt=x(v.format===Ls,v.type),Jt&&(zt?e.texStorage2D(i.TEXTURE_2D,1,Mt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Mt,ct.width,ct.height,0,dt,vt,null));else if(v.isDataTexture)if(kt.length>0){zt&&Jt&&e.texStorage2D(i.TEXTURE_2D,ft,Mt,kt[0].width,kt[0].height);for(let j=0,it=kt.length;j<it;j++)xt=kt[j],zt?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,xt.width,xt.height,dt,vt,xt.data):e.texImage2D(i.TEXTURE_2D,j,Mt,xt.width,xt.height,0,dt,vt,xt.data);v.generateMipmaps=!1}else zt?(Jt&&e.texStorage2D(i.TEXTURE_2D,ft,Mt,ct.width,ct.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,dt,vt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Mt,ct.width,ct.height,0,dt,vt,ct.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){zt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Mt,kt[0].width,kt[0].height,ct.depth);for(let j=0,it=kt.length;j<it;j++)if(xt=kt[j],v.format!==An)if(dt!==null)if(zt){if(U)if(v.layerUpdates.size>0){const $=Ql(xt.width,xt.height,v.format,v.type);for(const ut of v.layerUpdates){const Pt=xt.data.subarray(ut*$/xt.data.BYTES_PER_ELEMENT,(ut+1)*$/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ut,xt.width,xt.height,1,dt,Pt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,xt.width,xt.height,ct.depth,dt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Mt,xt.width,xt.height,ct.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,xt.width,xt.height,ct.depth,dt,vt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Mt,xt.width,xt.height,ct.depth,0,dt,vt,xt.data)}else{zt&&Jt&&e.texStorage2D(i.TEXTURE_2D,ft,Mt,kt[0].width,kt[0].height);for(let j=0,it=kt.length;j<it;j++)xt=kt[j],v.format!==An?dt!==null?zt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,xt.width,xt.height,dt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Mt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,xt.width,xt.height,dt,vt,xt.data):e.texImage2D(i.TEXTURE_2D,j,Mt,xt.width,xt.height,0,dt,vt,xt.data)}else if(v.isDataArrayTexture)if(zt){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Mt,ct.width,ct.height,ct.depth),U)if(v.layerUpdates.size>0){const j=Ql(ct.width,ct.height,v.format,v.type);for(const it of v.layerUpdates){const $=ct.data.subarray(it*j/ct.data.BYTES_PER_ELEMENT,(it+1)*j/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,ct.width,ct.height,1,dt,vt,$)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,dt,vt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,ct.width,ct.height,ct.depth,0,dt,vt,ct.data);else if(v.isData3DTexture)zt?(Jt&&e.texStorage3D(i.TEXTURE_3D,ft,Mt,ct.width,ct.height,ct.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,dt,vt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,ct.width,ct.height,ct.depth,0,dt,vt,ct.data);else if(v.isFramebufferTexture){if(Jt)if(zt)e.texStorage2D(i.TEXTURE_2D,ft,Mt,ct.width,ct.height);else{let j=ct.width,it=ct.height;for(let $=0;$<ft;$++)e.texImage2D(i.TEXTURE_2D,$,Mt,j,it,0,dt,vt,null),j>>=1,it>>=1}}else if(kt.length>0){if(zt&&Jt){const j=Ct(kt[0]);e.texStorage2D(i.TEXTURE_2D,ft,Mt,j.width,j.height)}for(let j=0,it=kt.length;j<it;j++)xt=kt[j],zt?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,dt,vt,xt):e.texImage2D(i.TEXTURE_2D,j,Mt,dt,vt,xt);v.generateMipmaps=!1}else if(zt){if(Jt){const j=Ct(ct);e.texStorage2D(i.TEXTURE_2D,ft,Mt,j.width,j.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,vt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Mt,dt,vt,ct);m(v)&&p(rt),bt.__version=ot.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function X(E,v,z){if(v.image.length!==6)return;const rt=lt(E,v),ht=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+z);const ot=n.get(ht);if(ht.version!==ot.__version||rt===!0){e.activeTexture(i.TEXTURE0+z);const bt=ee.getPrimaries(ee.workingColorSpace),at=v.colorSpace===xi?null:ee.getPrimaries(v.colorSpace),et=v.colorSpace===xi||bt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const Tt=v.isCompressedTexture||v.image[0].isCompressedTexture,ct=v.image[0]&&v.image[0].isDataTexture,dt=[];for(let it=0;it<6;it++)!Tt&&!ct?dt[it]=_(v.image[it],!0,s.maxCubemapSize):dt[it]=ct?v.image[it].image:v.image[it],dt[it]=te(v,dt[it]);const vt=dt[0],Mt=r.convert(v.format,v.colorSpace),xt=r.convert(v.type),kt=S(v.internalFormat,Mt,xt,v.colorSpace),zt=v.isVideoTexture!==!0,Jt=ot.__version===void 0||rt===!0,U=ht.dataReady;let ft=P(v,vt);gt(i.TEXTURE_CUBE_MAP,v);let j;if(Tt){zt&&Jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,kt,vt.width,vt.height);for(let it=0;it<6;it++){j=dt[it].mipmaps;for(let $=0;$<j.length;$++){const ut=j[$];v.format!==An?Mt!==null?zt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,$,0,0,ut.width,ut.height,Mt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,$,kt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,$,0,0,ut.width,ut.height,Mt,xt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,$,kt,ut.width,ut.height,0,Mt,xt,ut.data)}}}else{if(j=v.mipmaps,zt&&Jt){j.length>0&&ft++;const it=Ct(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,kt,it.width,it.height)}for(let it=0;it<6;it++)if(ct){zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,dt[it].width,dt[it].height,Mt,xt,dt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,kt,dt[it].width,dt[it].height,0,Mt,xt,dt[it].data);for(let $=0;$<j.length;$++){const Pt=j[$].image[it].image;zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,$+1,0,0,Pt.width,Pt.height,Mt,xt,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,$+1,kt,Pt.width,Pt.height,0,Mt,xt,Pt.data)}}else{zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Mt,xt,dt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,kt,Mt,xt,dt[it]);for(let $=0;$<j.length;$++){const ut=j[$];zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,$+1,0,0,Mt,xt,ut.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,$+1,kt,Mt,xt,ut.image[it])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),ot.__version=ht.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function q(E,v,z,rt,ht,ot){const bt=r.convert(z.format,z.colorSpace),at=r.convert(z.type),et=S(z.internalFormat,bt,at,z.colorSpace),Tt=n.get(v),ct=n.get(z);if(ct.__renderTarget=v,!Tt.__hasExternalTextures){const dt=Math.max(1,v.width>>ot),vt=Math.max(1,v.height>>ot);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,ot,et,dt,vt,v.depth,0,bt,at,null):e.texImage2D(ht,ot,et,dt,vt,0,bt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Vt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,ht,ct.__webglTexture,0,Ot(v)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,ht,ct.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Y(E,v,z){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){const rt=v.depthTexture,ht=rt&&rt.isDepthTexture?rt.type:null,ot=x(v.stencilBuffer,ht),bt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Ot(v);Vt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,ot,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,ot,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ot,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,E)}else{const rt=v.textures;for(let ht=0;ht<rt.length;ht++){const ot=rt[ht],bt=r.convert(ot.format,ot.colorSpace),at=r.convert(ot.type),et=S(ot.internalFormat,bt,at,ot.colorSpace),Tt=Ot(v);z&&Vt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,et,v.width,v.height):Vt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,et,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,et,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function tt(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=n.get(v.depthTexture);rt.__renderTarget=v,(!rt.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);const ht=rt.__webglTexture,ot=Ot(v);if(v.depthTexture.format===Es)Vt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(v.depthTexture.format===Ls)Vt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function St(E){const v=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const rt=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),rt){const ht=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,rt.removeEventListener("dispose",ht)};rt.addEventListener("dispose",ht),v.__depthDisposeCallback=ht}v.__boundDepthTexture=rt}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");tt(v.__webglFramebuffer,E)}else if(z){v.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[rt]),v.__webglDepthbuffer[rt]===void 0)v.__webglDepthbuffer[rt]=i.createRenderbuffer(),Y(v.__webglDepthbuffer[rt],E,!1);else{const ht=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=v.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,ot)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Y(v.__webglDepthbuffer,E,!1);else{const rt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(E,v,z){const rt=n.get(E);v!==void 0&&q(rt.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&St(E)}function Ht(E){const v=E.texture,z=n.get(E),rt=n.get(v);E.addEventListener("dispose",R);const ht=E.textures,ot=E.isWebGLCubeRenderTarget===!0,bt=ht.length>1;if(bt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=v.version,o.memory.textures++),ot){z.__webglFramebuffer=[];for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[at]=[];for(let et=0;et<v.mipmaps.length;et++)z.__webglFramebuffer[at][et]=i.createFramebuffer()}else z.__webglFramebuffer[at]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)z.__webglFramebuffer[at]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(bt)for(let at=0,et=ht.length;at<et;at++){const Tt=n.get(ht[at]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&Vt(E)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let at=0;at<ht.length;at++){const et=ht[at];z.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[at]);const Tt=r.convert(et.format,et.colorSpace),ct=r.convert(et.type),dt=S(et.internalFormat,Tt,ct,et.colorSpace,E.isXRRenderTarget===!0),vt=Ot(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,dt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,z.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Y(z.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),gt(i.TEXTURE_CUBE_MAP,v);for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0)for(let et=0;et<v.mipmaps.length;et++)q(z.__webglFramebuffer[at][et],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,et);else q(z.__webglFramebuffer[at],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let at=0,et=ht.length;at<et;at++){const Tt=ht[at],ct=n.get(Tt);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),gt(i.TEXTURE_2D,Tt),q(z.__webglFramebuffer,E,Tt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m(Tt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(at=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,rt.__webglTexture),gt(at,v),v.mipmaps&&v.mipmaps.length>0)for(let et=0;et<v.mipmaps.length;et++)q(z.__webglFramebuffer[et],E,v,i.COLOR_ATTACHMENT0,at,et);else q(z.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,at,0);m(v)&&p(at),e.unbindTexture()}E.depthBuffer&&St(E)}function mt(E){const v=E.textures;for(let z=0,rt=v.length;z<rt;z++){const ht=v[z];if(m(ht)){const ot=y(E),bt=n.get(ht).__webglTexture;e.bindTexture(ot,bt),p(ot),e.unbindTexture()}}}const Bt=[],I=[];function Qt(E){if(E.samples>0){if(Vt(E)===!1){const v=E.textures,z=E.width,rt=E.height;let ht=i.COLOR_BUFFER_BIT;const ot=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(E),at=v.length>1;if(at)for(let et=0;et<v.length;et++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let et=0;et<v.length;et++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[et]);const Tt=n.get(v[et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Tt,0)}i.blitFramebuffer(0,0,z,rt,0,0,z,rt,ht,i.NEAREST),c===!0&&(Bt.length=0,I.length=0,Bt.push(i.COLOR_ATTACHMENT0+et),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Bt.push(ot),I.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let et=0;et<v.length;et++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,bt.__webglColorRenderbuffer[et]);const Tt=n.get(v[et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,Tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ot(E){return Math.min(s.maxSamples,E.samples)}function Vt(E){const v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function At(E){const v=o.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function te(E,v){const z=E.colorSpace,rt=E.format,ht=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==Os&&z!==xi&&(ee.getTransfer(z)===le?(rt!==An||ht!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),v}function Ct(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=nt,this.setTextureCube=L,this.rebindTextures=_t,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=q,this.useMultisampledRTT=Vt}function o_(i,t){function e(n,s=xi){let r;const o=ee.getTransfer(s);if(n===ii)return i.UNSIGNED_BYTE;if(n===Lc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===eu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qh)return i.BYTE;if(n===tu)return i.SHORT;if(n===gr)return i.UNSIGNED_SHORT;if(n===Pc)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===Jn)return i.HALF_FLOAT;if(n===nu)return i.ALPHA;if(n===iu)return i.RGB;if(n===An)return i.RGBA;if(n===su)return i.LUMINANCE;if(n===ru)return i.LUMINANCE_ALPHA;if(n===Es)return i.DEPTH_COMPONENT;if(n===Ls)return i.DEPTH_STENCIL;if(n===_r)return i.RED;if(n===Ic)return i.RED_INTEGER;if(n===ou)return i.RG;if(n===Uc)return i.RG_INTEGER;if(n===Nc)return i.RGBA_INTEGER;if(n===uo||n===fo||n===po||n===mo)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===qa||n===Ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ka||n===$a)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Za||n===Ka)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$a)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ja||n===Ja||n===Qa||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===hc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ja)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ja)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ec)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ic)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ac)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===go||n===uc||n===dc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===go)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===au||n===fc||n===pc||n===mc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class a_ extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Pe extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const c_={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(c_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const l_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class u_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new pn({vertexShader:l_,fragmentShader:h_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rt(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class d_ extends Yi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new u_,m=e.getContextAttributes();let p=null,y=null;const S=[],x=[],P=new yt;let b=null;const R=new sn;R.viewport=new ge;const D=new sn;D.viewport=new ge;const w=[R,D],M=new a_;let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let X=S[W];return X===void 0&&(X=new _a,S[W]=X),X.getTargetRaySpace()},this.getControllerGrip=function(W){let X=S[W];return X===void 0&&(X=new _a,S[W]=X),X.getGripSpace()},this.getHand=function(W){let X=S[W];return X===void 0&&(X=new _a,S[W]=X),X.getHandSpace()};function F(W){const X=x.indexOf(W.inputSource);if(X===-1)return;const q=S[X];q!==void 0&&(q.update(W.inputSource,W.frame,l||o),q.dispatchEvent({type:W.type,data:W.inputSource}))}function V(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",G);for(let W=0;W<S.length;W++){const X=x[W];X!==null&&(x[W]=null,S[W].disconnect(X))}C=null,N=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",V),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const X={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,X),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new si(f.framebufferWidth,f.framebufferHeight,{format:An,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let X=null,q=null,Y=null;m.depth&&(Y=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=m.stencil?Ls:Es,q=m.stencil?Ps:Wi);const tt={colorFormat:e.RGBA8,depthFormat:Y,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(tt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new si(d.textureWidth,d.textureHeight,{format:An,type:ii,depthTexture:new Bc(d.textureWidth,d.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(W){for(let X=0;X<W.removed.length;X++){const q=W.removed[X],Y=x.indexOf(q);Y>=0&&(x[Y]=null,S[Y].disconnect(q))}for(let X=0;X<W.added.length;X++){const q=W.added[X];let Y=x.indexOf(q);if(Y===-1){for(let St=0;St<S.length;St++)if(St>=x.length){x.push(q),Y=St;break}else if(x[St]===null){x[St]=q,Y=St;break}if(Y===-1)break}const tt=S[Y];tt&&tt.connect(q)}}const H=new A,nt=new A;function L(W,X,q){H.setFromMatrixPosition(X.matrixWorld),nt.setFromMatrixPosition(q.matrixWorld);const Y=H.distanceTo(nt),tt=X.projectionMatrix.elements,St=q.projectionMatrix.elements,_t=tt[14]/(tt[10]-1),Ht=tt[14]/(tt[10]+1),mt=(tt[9]+1)/tt[5],Bt=(tt[9]-1)/tt[5],I=(tt[8]-1)/tt[0],Qt=(St[8]+1)/St[0],Ot=_t*I,Vt=_t*Qt,At=Y/(-I+Qt),te=At*-I;if(X.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(te),W.translateZ(At),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),tt[10]===-1)W.projectionMatrix.copy(X.projectionMatrix),W.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const Ct=_t+At,E=Ht+At,v=Ot-te,z=Vt+(Y-te),rt=mt*Ht/E*Ct,ht=Bt*Ht/E*Ct;W.projectionMatrix.makePerspective(v,z,rt,ht,Ct,E),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function J(W,X){X===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(X.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let X=W.near,q=W.far;_.texture!==null&&(_.depthNear>0&&(X=_.depthNear),_.depthFar>0&&(q=_.depthFar)),M.near=D.near=R.near=X,M.far=D.far=R.far=q,(C!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,N=M.far),R.layers.mask=W.layers.mask|2,D.layers.mask=W.layers.mask|4,M.layers.mask=R.layers.mask|D.layers.mask;const Y=W.parent,tt=M.cameras;J(M,Y);for(let St=0;St<tt.length;St++)J(tt[St],Y);tt.length===2?L(M,R,D):M.projectionMatrix.copy(R.projectionMatrix),Q(W,M,Y)};function Q(W,X,q){q===null?W.matrix.copy(X.matrixWorld):(W.matrix.copy(q.matrixWorld),W.matrix.invert(),W.matrix.multiply(X.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(X.projectionMatrix),W.projectionMatrixInverse.copy(X.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=gc*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let st=null;function gt(W,X){if(h=X.getViewerPose(l||o),g=X,h!==null){const q=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Y=!1;q.length!==M.cameras.length&&(M.cameras.length=0,Y=!0);for(let St=0;St<q.length;St++){const _t=q[St];let Ht=null;if(f!==null)Ht=f.getViewport(_t);else{const Bt=u.getViewSubImage(d,_t);Ht=Bt.viewport,St===0&&(t.setRenderTargetTextures(y,Bt.colorTexture,d.ignoreDepthValues?void 0:Bt.depthStencilTexture),t.setRenderTarget(y))}let mt=w[St];mt===void 0&&(mt=new sn,mt.layers.enable(St),mt.viewport=new ge,w[St]=mt),mt.matrix.fromArray(_t.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(_t.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),St===0&&(M.matrix.copy(mt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Y===!0&&M.cameras.push(mt)}const tt=s.enabledFeatures;if(tt&&tt.includes("depth-sensing")){const St=u.getDepthInformation(q[0]);St&&St.isValid&&St.texture&&_.init(t,St,s.renderState)}}for(let q=0;q<S.length;q++){const Y=x[q],tt=S[q];Y!==null&&tt!==void 0&&tt.update(Y,X,l||o)}st&&st(W,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),g=null}const lt=new Mu;lt.setAnimationLoop(gt),this.setAnimationLoop=function(W){st=W},this.dispose=function(){}}}const Pi=new Fn,f_=new ae;function p_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,_u(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),S=y.envMap,x=y.envMapRotation;S&&(m.envMap.value=S,Pi.copy(x),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),m.envMapRotation.value.setFromMatrix4(f_.makeRotationFromEuler(Pi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function m_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){const x=S.program;n.uniformBlockBinding(y,x)}function l(y,S){let x=s[y.id];x===void 0&&(g(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",m));const P=S.program;n.updateUBOMapping(y,P);const b=t.render.frame;r[y.id]!==b&&(d(y),r[y.id]=b)}function h(y){const S=u();y.__bindingPointIndex=S;const x=i.createBuffer(),P=y.__size,b=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=s[y.id],x=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let b=0,R=x.length;b<R;b++){const D=Array.isArray(x[b])?x[b]:[x[b]];for(let w=0,M=D.length;w<M;w++){const C=D[w];if(f(C,b,w,P)===!0){const N=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let V=0;for(let G=0;G<F.length;G++){const H=F[G],nt=_(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,N+V,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,V),V+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,S,x,P){const b=y.value,R=S+"_"+x;if(P[R]===void 0)return typeof b=="number"||typeof b=="boolean"?P[R]=b:P[R]=b.clone(),!0;{const D=P[R];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return P[R]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function g(y){const S=y.uniforms;let x=0;const P=16;for(let R=0,D=S.length;R<D;R++){const w=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,C=w.length;M<C;M++){const N=w[M],F=Array.isArray(N.value)?N.value:[N.value];for(let V=0,G=F.length;V<G;V++){const H=F[V],nt=_(H),L=x%P,J=L%nt.boundary,Q=L+J;x+=J,Q!==0&&P-Q<nt.storage&&(x+=P-Q),N.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=nt.storage}}}const b=x%P;return b>0&&(x+=P-b),y.__size=x,y.__cache={},this}function _(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class g_{constructor(t={}){const{canvas:e=Qd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this.toneMapping=Mi,this.toneMappingExposure=1;const x=this;let P=!1,b=0,R=0,D=null,w=-1,M=null;const C=new ge,N=new ge;let F=null;const V=new Xt(0);let G=0,H=e.width,nt=e.height,L=1,J=null,Q=null;const st=new ge(0,0,H,nt),gt=new ge(0,0,H,nt);let lt=!1;const W=new Oc;let X=!1,q=!1;const Y=new ae,tt=new ae,St=new A,_t=new ge,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Bt(){return D===null?L:1}let I=n;function Qt(T,B){return e.getContext(T,B)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Cc}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",$,!1),e.addEventListener("webglcontextcreationerror",ut,!1),I===null){const B="webgl2";if(I=Qt(B,T),I===null)throw Qt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ot,Vt,At,te,Ct,E,v,z,rt,ht,ot,bt,at,et,Tt,ct,dt,vt,Mt,xt,kt,zt,Jt,U;function ft(){Ot=new y0(I),Ot.init(),zt=new o_(I,Ot),Vt=new m0(I,Ot,t,zt),At=new i_(I,Ot),Vt.reverseDepthBuffer&&d&&At.buffers.depth.setReversed(!0),te=new w0(I),Ct=new Hg,E=new r_(I,Ot,At,Ct,Vt,zt,te),v=new _0(x),z=new M0(x),rt=new Lf(I),Jt=new f0(I,rt),ht=new S0(I,rt,te,Jt),ot=new A0(I,ht,rt,te),Mt=new T0(I,Vt,E),ct=new g0(Ct),bt=new Vg(x,v,z,Ot,Vt,Jt,ct),at=new p_(x,Ct),et=new Wg,Tt=new $g(Ot),vt=new d0(x,v,z,At,ot,f,c),dt=new e_(x,ot,Vt),U=new m_(I,te,Vt,At),xt=new p0(I,Ot,te),kt=new E0(I,Ot,te),te.programs=bt.programs,x.capabilities=Vt,x.extensions=Ot,x.properties=Ct,x.renderLists=et,x.shadowMap=dt,x.state=At,x.info=te}ft();const j=new d_(x,I);this.xr=j,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=Ot.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ot.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(T){T!==void 0&&(L=T,this.setSize(H,nt,!1))},this.getSize=function(T){return T.set(H,nt)},this.setSize=function(T,B,Z=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,nt=B,e.width=Math.floor(T*L),e.height=Math.floor(B*L),Z===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(H*L,nt*L).floor()},this.setDrawingBufferSize=function(T,B,Z){H=T,nt=B,L=Z,e.width=Math.floor(T*Z),e.height=Math.floor(B*Z),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(st)},this.setViewport=function(T,B,Z,K){T.isVector4?st.set(T.x,T.y,T.z,T.w):st.set(T,B,Z,K),At.viewport(C.copy(st).multiplyScalar(L).round())},this.getScissor=function(T){return T.copy(gt)},this.setScissor=function(T,B,Z,K){T.isVector4?gt.set(T.x,T.y,T.z,T.w):gt.set(T,B,Z,K),At.scissor(N.copy(gt).multiplyScalar(L).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(T){At.setScissorTest(lt=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){Q=T},this.getClearColor=function(T){return T.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor.apply(vt,arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha.apply(vt,arguments)},this.clear=function(T=!0,B=!0,Z=!0){let K=0;if(T){let k=!1;if(D!==null){const pt=D.texture.format;k=pt===Nc||pt===Uc||pt===Ic}if(k){const pt=D.texture.type,wt=pt===ii||pt===Wi||pt===gr||pt===Ps||pt===Lc||pt===Dc,It=vt.getClearColor(),Ut=vt.getClearAlpha(),Gt=It.r,Yt=It.g,Nt=It.b;wt?(g[0]=Gt,g[1]=Yt,g[2]=Nt,g[3]=Ut,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Gt,_[1]=Yt,_[2]=Nt,_[3]=Ut,I.clearBufferiv(I.COLOR,0,_))}else K|=I.COLOR_BUFFER_BIT}B&&(K|=I.DEPTH_BUFFER_BIT),Z&&(K|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",$,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),et.dispose(),Tt.dispose(),Ct.dispose(),v.dispose(),z.dispose(),ot.dispose(),Jt.dispose(),U.dispose(),bt.dispose(),j.dispose(),j.removeEventListener("sessionstart",ri),j.removeEventListener("sessionend",mn),He.stop()};function it(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const T=te.autoReset,B=dt.enabled,Z=dt.autoUpdate,K=dt.needsUpdate,k=dt.type;ft(),te.autoReset=T,dt.enabled=B,dt.autoUpdate=Z,dt.needsUpdate=K,dt.type=k}function ut(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pt(T){const B=T.target;B.removeEventListener("dispose",Pt),qt(B)}function qt(T){jt(T),Ct.remove(T)}function jt(T){const B=Ct.get(T).programs;B!==void 0&&(B.forEach(function(Z){bt.releaseProgram(Z)}),T.isShaderMaterial&&bt.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,Z,K,k,pt){B===null&&(B=Ht);const wt=k.isMesh&&k.matrixWorld.determinant()<0,It=Vo(T,B,Z,K,k);At.setMaterial(K,wt);let Ut=Z.index,Gt=1;if(K.wireframe===!0){if(Ut=ht.getWireframeAttribute(Z),Ut===void 0)return;Gt=2}const Yt=Z.drawRange,Nt=Z.attributes.position;let ie=Yt.start*Gt,ue=(Yt.start+Yt.count)*Gt;pt!==null&&(ie=Math.max(ie,pt.start*Gt),ue=Math.min(ue,(pt.start+pt.count)*Gt)),Ut!==null?(ie=Math.max(ie,0),ue=Math.min(ue,Ut.count)):Nt!=null&&(ie=Math.max(ie,0),ue=Math.min(ue,Nt.count));const fe=ue-ie;if(fe<0||fe===1/0)return;Jt.setup(k,K,It,Z,Ut);let Ye,re=xt;if(Ut!==null&&(Ye=rt.get(Ut),re=kt,re.setIndex(Ye)),k.isMesh)K.wireframe===!0?(At.setLineWidth(K.wireframeLinewidth*Bt()),re.setMode(I.LINES)):re.setMode(I.TRIANGLES);else if(k.isLine){let Ft=K.linewidth;Ft===void 0&&(Ft=1),At.setLineWidth(Ft*Bt()),k.isLineSegments?re.setMode(I.LINES):k.isLineLoop?re.setMode(I.LINE_LOOP):re.setMode(I.LINE_STRIP)}else k.isPoints?re.setMode(I.POINTS):k.isSprite&&re.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)re.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))re.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ft=k._multiDrawStarts,Bn=k._multiDrawCounts,oe=k._multiDrawCount,gn=Ut?rt.get(Ut).bytesPerElement:1,Ji=Ct.get(K).currentProgram.getUniforms();for(let Je=0;Je<oe;Je++)Ji.setValue(I,"_gl_DrawID",Je),re.render(Ft[Je]/gn,Bn[Je])}else if(k.isInstancedMesh)re.renderInstances(ie,fe,k.count);else if(Z.isInstancedBufferGeometry){const Ft=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Bn=Math.min(Z.instanceCount,Ft);re.renderInstances(ie,fe,Bn)}else re.render(ie,fe)};function Lt(T,B,Z){T.transparent===!0&&T.side===ye&&T.forceSinglePass===!1?(T.side=Xe,T.needsUpdate=!0,wi(T,B,Z),T.side=Si,T.needsUpdate=!0,wi(T,B,Z),T.side=ye):wi(T,B,Z)}this.compile=function(T,B,Z=null){Z===null&&(Z=T),p=Tt.get(Z),p.init(B),S.push(p),Z.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==Z&&T.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const K=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const pt=k.material;if(pt)if(Array.isArray(pt))for(let wt=0;wt<pt.length;wt++){const It=pt[wt];Lt(It,Z,k),K.add(It)}else Lt(pt,Z,k),K.add(pt)}),S.pop(),p=null,K},this.compileAsync=function(T,B,Z=null){const K=this.compile(T,B,Z);return new Promise(k=>{function pt(){if(K.forEach(function(wt){Ct.get(wt).currentProgram.isReady()&&K.delete(wt)}),K.size===0){k(T);return}setTimeout(pt,10)}Ot.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let de=null;function _e(T){de&&de(T)}function ri(){He.stop()}function mn(){He.start()}const He=new Mu;He.setAnimationLoop(_e),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(T){de=T,j.setAnimationLoop(T),T===null?He.stop():He.start()},j.addEventListener("sessionstart",ri),j.addEventListener("sessionend",mn),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(B),B=j.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,B,D),p=Tt.get(T,S.length),p.init(B),S.push(p),tt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),W.setFromProjectionMatrix(tt),q=this.localClippingEnabled,X=ct.init(this.clippingPlanes,q),m=et.get(T,y.length),m.init(),y.push(m),j.enabled===!0&&j.isPresenting===!0){const pt=x.xr.getDepthSensingMesh();pt!==null&&je(pt,B,-1/0,x.sortObjects)}je(T,B,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(J,Q),mt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,mt&&vt.addToRenderList(m,T),this.info.render.frame++,X===!0&&ct.beginShadows();const Z=p.state.shadowsArray;dt.render(Z,T,B),X===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,k=m.transmissive;if(p.setupLights(),B.isArrayCamera){const pt=B.cameras;if(k.length>0)for(let wt=0,It=pt.length;wt<It;wt++){const Ut=pt[wt];Vs(K,k,T,Ut)}mt&&vt.render(T);for(let wt=0,It=pt.length;wt<It;wt++){const Ut=pt[wt];oi(m,T,Ut,Ut.viewport)}}else k.length>0&&Vs(K,k,T,B),mt&&vt.render(T),oi(m,T,B);D!==null&&(E.updateMultisampleRenderTarget(D),E.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(x,T,B),Jt.resetDefaultState(),w=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],X===!0&&ct.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function je(T,B,Z,K){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){K&&_t.setFromMatrixPosition(T.matrixWorld).applyMatrix4(tt);const wt=ot.update(T),It=T.material;It.visible&&m.push(T,wt,It,Z,_t.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||W.intersectsObject(T))){const wt=ot.update(T),It=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),_t.copy(T.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),_t.copy(wt.boundingSphere.center)),_t.applyMatrix4(T.matrixWorld).applyMatrix4(tt)),Array.isArray(It)){const Ut=wt.groups;for(let Gt=0,Yt=Ut.length;Gt<Yt;Gt++){const Nt=Ut[Gt],ie=It[Nt.materialIndex];ie&&ie.visible&&m.push(T,wt,ie,Z,_t.z,Nt)}}else It.visible&&m.push(T,wt,It,Z,_t.z,null)}}const pt=T.children;for(let wt=0,It=pt.length;wt<It;wt++)je(pt[wt],B,Z,K)}function oi(T,B,Z,K){const k=T.opaque,pt=T.transmissive,wt=T.transparent;p.setupLightsView(Z),X===!0&&ct.setGlobalState(x.clippingPlanes,Z),K&&At.viewport(C.copy(K)),k.length>0&&ai(k,B,Z),pt.length>0&&ai(pt,B,Z),wt.length>0&&ai(wt,B,Z),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Vs(T,B,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new si(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Jn:ii,minFilter:ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const pt=p.state.transmissionRenderTarget[K.id],wt=K.viewport||C;pt.setSize(wt.z,wt.w);const It=x.getRenderTarget();x.setRenderTarget(pt),x.getClearColor(V),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),mt&&vt.render(Z);const Ut=x.toneMapping;x.toneMapping=Mi;const Gt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),X===!0&&ct.setGlobalState(x.clippingPlanes,K),ai(T,Z,K),E.updateMultisampleRenderTarget(pt),E.updateRenderTargetMipmap(pt),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Nt=0,ie=B.length;Nt<ie;Nt++){const ue=B[Nt],fe=ue.object,Ye=ue.geometry,re=ue.material,Ft=ue.group;if(re.side===ye&&fe.layers.test(K.layers)){const Bn=re.side;re.side=Xe,re.needsUpdate=!0,Hs(fe,Z,K,Ye,re,Ft),re.side=Bn,re.needsUpdate=!0,Yt=!0}}Yt===!0&&(E.updateMultisampleRenderTarget(pt),E.updateRenderTargetMipmap(pt))}x.setRenderTarget(It),x.setClearColor(V,G),Gt!==void 0&&(K.viewport=Gt),x.toneMapping=Ut}function ai(T,B,Z){const K=B.isScene===!0?B.overrideMaterial:null;for(let k=0,pt=T.length;k<pt;k++){const wt=T[k],It=wt.object,Ut=wt.geometry,Gt=K===null?wt.material:K,Yt=wt.group;It.layers.test(Z.layers)&&Hs(It,B,Z,Ut,Gt,Yt)}}function Hs(T,B,Z,K,k,pt){T.onBeforeRender(x,B,Z,K,k,pt),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(x,B,Z,K,T,pt),k.transparent===!0&&k.side===ye&&k.forceSinglePass===!1?(k.side=Xe,k.needsUpdate=!0,x.renderBufferDirect(Z,B,K,k,T,pt),k.side=Si,k.needsUpdate=!0,x.renderBufferDirect(Z,B,K,k,T,pt),k.side=ye):x.renderBufferDirect(Z,B,K,k,T,pt),T.onAfterRender(x,B,Z,K,k,pt)}function wi(T,B,Z){B.isScene!==!0&&(B=Ht);const K=Ct.get(T),k=p.state.lights,pt=p.state.shadowsArray,wt=k.state.version,It=bt.getParameters(T,k.state,pt,B,Z),Ut=bt.getProgramCacheKey(It);let Gt=K.programs;K.environment=T.isMeshStandardMaterial?B.environment:null,K.fog=B.fog,K.envMap=(T.isMeshStandardMaterial?z:v).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Gt===void 0&&(T.addEventListener("dispose",Pt),Gt=new Map,K.programs=Gt);let Yt=Gt.get(Ut);if(Yt!==void 0){if(K.currentProgram===Yt&&K.lightsStateVersion===wt)return ji(T,It),Yt}else It.uniforms=bt.getUniforms(T),T.onBeforeCompile(It,x),Yt=bt.acquireProgram(It,Ut),Gt.set(Ut,Yt),K.uniforms=It.uniforms;const Nt=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Nt.clippingPlanes=ct.uniform),ji(T,It),K.needsLights=ld(T),K.lightsStateVersion=wt,K.needsLights&&(Nt.ambientLightColor.value=k.state.ambient,Nt.lightProbe.value=k.state.probe,Nt.directionalLights.value=k.state.directional,Nt.directionalLightShadows.value=k.state.directionalShadow,Nt.spotLights.value=k.state.spot,Nt.spotLightShadows.value=k.state.spotShadow,Nt.rectAreaLights.value=k.state.rectArea,Nt.ltc_1.value=k.state.rectAreaLTC1,Nt.ltc_2.value=k.state.rectAreaLTC2,Nt.pointLights.value=k.state.point,Nt.pointLightShadows.value=k.state.pointShadow,Nt.hemisphereLights.value=k.state.hemi,Nt.directionalShadowMap.value=k.state.directionalShadowMap,Nt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Nt.spotShadowMap.value=k.state.spotShadowMap,Nt.spotLightMatrix.value=k.state.spotLightMatrix,Nt.spotLightMap.value=k.state.spotLightMap,Nt.pointShadowMap.value=k.state.pointShadowMap,Nt.pointShadowMatrix.value=k.state.pointShadowMatrix),K.currentProgram=Yt,K.uniformsList=null,Yt}function Gs(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=xo.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function ji(T,B){const Z=Ct.get(T);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function Vo(T,B,Z,K,k){B.isScene!==!0&&(B=Ht),E.resetTextureUnits();const pt=B.fog,wt=K.isMeshStandardMaterial?B.environment:null,It=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Os,Ut=(K.isMeshStandardMaterial?z:v).get(K.envMap||wt),Gt=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Yt=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Nt=!!Z.morphAttributes.position,ie=!!Z.morphAttributes.normal,ue=!!Z.morphAttributes.color;let fe=Mi;K.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(fe=x.toneMapping);const Ye=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,re=Ye!==void 0?Ye.length:0,Ft=Ct.get(K),Bn=p.state.lights;if(X===!0&&(q===!0||T!==M)){const an=T===M&&K.id===w;ct.setState(K,T,an)}let oe=!1;K.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Bn.state.version||Ft.outputColorSpace!==It||k.isBatchedMesh&&Ft.batching===!1||!k.isBatchedMesh&&Ft.batching===!0||k.isBatchedMesh&&Ft.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ft.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ft.instancing===!1||!k.isInstancedMesh&&Ft.instancing===!0||k.isSkinnedMesh&&Ft.skinning===!1||!k.isSkinnedMesh&&Ft.skinning===!0||k.isInstancedMesh&&Ft.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ft.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ft.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ft.instancingMorph===!1&&k.morphTexture!==null||Ft.envMap!==Ut||K.fog===!0&&Ft.fog!==pt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ct.numPlanes||Ft.numIntersection!==ct.numIntersection)||Ft.vertexAlphas!==Gt||Ft.vertexTangents!==Yt||Ft.morphTargets!==Nt||Ft.morphNormals!==ie||Ft.morphColors!==ue||Ft.toneMapping!==fe||Ft.morphTargetsCount!==re)&&(oe=!0):(oe=!0,Ft.__version=K.version);let gn=Ft.currentProgram;oe===!0&&(gn=wi(K,B,k));let Ji=!1,Je=!1,Ws=!1;const pe=gn.getUniforms(),bn=Ft.uniforms;if(At.useProgram(gn.program)&&(Ji=!0,Je=!0,Ws=!0),K.id!==w&&(w=K.id,Je=!0),Ji||M!==T){At.buffers.depth.getReversed()?(Y.copy(T.projectionMatrix),ef(Y),nf(Y),pe.setValue(I,"projectionMatrix",Y)):pe.setValue(I,"projectionMatrix",T.projectionMatrix),pe.setValue(I,"viewMatrix",T.matrixWorldInverse);const ci=pe.map.cameraPosition;ci!==void 0&&ci.setValue(I,St.setFromMatrixPosition(T.matrixWorld)),Vt.logarithmicDepthBuffer&&pe.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&pe.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Je=!0,Ws=!0)}if(k.isSkinnedMesh){pe.setOptional(I,k,"bindMatrix"),pe.setOptional(I,k,"bindMatrixInverse");const an=k.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),pe.setValue(I,"boneTexture",an.boneTexture,E))}k.isBatchedMesh&&(pe.setOptional(I,k,"batchingTexture"),pe.setValue(I,"batchingTexture",k._matricesTexture,E),pe.setOptional(I,k,"batchingIdTexture"),pe.setValue(I,"batchingIdTexture",k._indirectTexture,E),pe.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&pe.setValue(I,"batchingColorTexture",k._colorsTexture,E));const Xs=Z.morphAttributes;if((Xs.position!==void 0||Xs.normal!==void 0||Xs.color!==void 0)&&Mt.update(k,Z,gn),(Je||Ft.receiveShadow!==k.receiveShadow)&&(Ft.receiveShadow=k.receiveShadow,pe.setValue(I,"receiveShadow",k.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(bn.envMap.value=Ut,bn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&B.environment!==null&&(bn.envMapIntensity.value=B.environmentIntensity),Je&&(pe.setValue(I,"toneMappingExposure",x.toneMappingExposure),Ft.needsLights&&Ho(bn,Ws),pt&&K.fog===!0&&at.refreshFogUniforms(bn,pt),at.refreshMaterialUniforms(bn,K,L,nt,p.state.transmissionRenderTarget[T.id]),xo.upload(I,Gs(Ft),bn,E)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(xo.upload(I,Gs(Ft),bn,E),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&pe.setValue(I,"center",k.center),pe.setValue(I,"modelViewMatrix",k.modelViewMatrix),pe.setValue(I,"normalMatrix",k.normalMatrix),pe.setValue(I,"modelMatrix",k.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const an=K.uniformsGroups;for(let ci=0,li=an.length;ci<li;ci++){const el=an[ci];U.update(el,gn),U.bind(el,gn)}}return gn}function Ho(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function ld(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,B,Z){Ct.get(T.texture).__webglTexture=B,Ct.get(T.depthTexture).__webglTexture=Z;const K=Ct.get(T);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const Z=Ct.get(T);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,Z=0){D=T,b=B,R=Z;let K=!0,k=null,pt=!1,wt=!1;if(T){const Ut=Ct.get(T);if(Ut.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(I.FRAMEBUFFER,null),K=!1;else if(Ut.__webglFramebuffer===void 0)E.setupRenderTarget(T);else if(Ut.__hasExternalTextures)E.rebindTextures(T,Ct.get(T.texture).__webglTexture,Ct.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Nt=T.depthTexture;if(Ut.__boundDepthTexture!==Nt){if(Nt!==null&&Ct.has(Nt)&&(T.width!==Nt.image.width||T.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(T)}}const Gt=T.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(wt=!0);const Yt=Ct.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Yt[B])?k=Yt[B][Z]:k=Yt[B],pt=!0):T.samples>0&&E.useMultisampledRTT(T)===!1?k=Ct.get(T).__webglMultisampledFramebuffer:Array.isArray(Yt)?k=Yt[Z]:k=Yt,C.copy(T.viewport),N.copy(T.scissor),F=T.scissorTest}else C.copy(st).multiplyScalar(L).floor(),N.copy(gt).multiplyScalar(L).floor(),F=lt;if(At.bindFramebuffer(I.FRAMEBUFFER,k)&&K&&At.drawBuffers(T,k),At.viewport(C),At.scissor(N),At.setScissorTest(F),pt){const Ut=Ct.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ut.__webglTexture,Z)}else if(wt){const Ut=Ct.get(T.texture),Gt=B||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ut.__webglTexture,Z||0,Gt)}w=-1},this.readRenderTargetPixels=function(T,B,Z,K,k,pt,wt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Ct.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It){At.bindFramebuffer(I.FRAMEBUFFER,It);try{const Ut=T.texture,Gt=Ut.format,Yt=Ut.type;if(!Vt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-K&&Z>=0&&Z<=T.height-k&&I.readPixels(B,Z,K,k,zt.convert(Gt),zt.convert(Yt),pt)}finally{const Ut=D!==null?Ct.get(D).__webglFramebuffer:null;At.bindFramebuffer(I.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(T,B,Z,K,k,pt,wt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Ct.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It){const Ut=T.texture,Gt=Ut.format,Yt=Ut.type;if(!Vt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-K&&Z>=0&&Z<=T.height-k){At.bindFramebuffer(I.FRAMEBUFFER,It);const Nt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Nt),I.bufferData(I.PIXEL_PACK_BUFFER,pt.byteLength,I.STREAM_READ),I.readPixels(B,Z,K,k,zt.convert(Gt),zt.convert(Yt),0);const ie=D!==null?Ct.get(D).__webglFramebuffer:null;At.bindFramebuffer(I.FRAMEBUFFER,ie);const ue=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await tf(I,ue,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Nt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,pt),I.deleteBuffer(Nt),I.deleteSync(ue),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,Z=0){T.isTexture!==!0&&(sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const K=Math.pow(2,-Z),k=Math.floor(T.image.width*K),pt=Math.floor(T.image.height*K),wt=B!==null?B.x:0,It=B!==null?B.y:0;E.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,Z,0,0,wt,It,k,pt),At.unbindTexture()},this.copyTextureToTexture=function(T,B,Z=null,K=null,k=0){T.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,T=arguments[1],B=arguments[2],k=arguments[3]||0,Z=null);let pt,wt,It,Ut,Gt,Yt,Nt,ie,ue;const fe=T.isCompressedTexture?T.mipmaps[k]:T.image;Z!==null?(pt=Z.max.x-Z.min.x,wt=Z.max.y-Z.min.y,It=Z.isBox3?Z.max.z-Z.min.z:1,Ut=Z.min.x,Gt=Z.min.y,Yt=Z.isBox3?Z.min.z:0):(pt=fe.width,wt=fe.height,It=fe.depth||1,Ut=0,Gt=0,Yt=0),K!==null?(Nt=K.x,ie=K.y,ue=K.z):(Nt=0,ie=0,ue=0);const Ye=zt.convert(B.format),re=zt.convert(B.type);let Ft;B.isData3DTexture?(E.setTexture3D(B,0),Ft=I.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(E.setTexture2DArray(B,0),Ft=I.TEXTURE_2D_ARRAY):(E.setTexture2D(B,0),Ft=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const Bn=I.getParameter(I.UNPACK_ROW_LENGTH),oe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),gn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ji=I.getParameter(I.UNPACK_SKIP_ROWS),Je=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,fe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ut),I.pixelStorei(I.UNPACK_SKIP_ROWS,Gt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Yt);const Ws=T.isDataArrayTexture||T.isData3DTexture,pe=B.isDataArrayTexture||B.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const bn=Ct.get(T),Xs=Ct.get(B),an=Ct.get(bn.__renderTarget),ci=Ct.get(Xs.__renderTarget);At.bindFramebuffer(I.READ_FRAMEBUFFER,an.__webglFramebuffer),At.bindFramebuffer(I.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let li=0;li<It;li++)Ws&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ct.get(T).__webglTexture,k,Yt+li),T.isDepthTexture?(pe&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ct.get(B).__webglTexture,k,ue+li),I.blitFramebuffer(Ut,Gt,pt,wt,Nt,ie,pt,wt,I.DEPTH_BUFFER_BIT,I.NEAREST)):pe?I.copyTexSubImage3D(Ft,k,Nt,ie,ue+li,Ut,Gt,pt,wt):I.copyTexSubImage2D(Ft,k,Nt,ie,ue+li,Ut,Gt,pt,wt);At.bindFramebuffer(I.READ_FRAMEBUFFER,null),At.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else pe?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Ft,k,Nt,ie,ue,pt,wt,It,Ye,re,fe.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(Ft,k,Nt,ie,ue,pt,wt,It,Ye,fe.data):I.texSubImage3D(Ft,k,Nt,ie,ue,pt,wt,It,Ye,re,fe):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,k,Nt,ie,pt,wt,Ye,re,fe.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,k,Nt,ie,fe.width,fe.height,Ye,fe.data):I.texSubImage2D(I.TEXTURE_2D,k,Nt,ie,pt,wt,Ye,re,fe);I.pixelStorei(I.UNPACK_ROW_LENGTH,Bn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,oe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,gn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ji),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Je),k===0&&B.generateMipmaps&&I.generateMipmap(Ft),At.unbindTexture()},this.copyTextureToTexture3D=function(T,B,Z=null,K=null,k=0){return T.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,K=arguments[1]||null,T=arguments[2],B=arguments[3],k=arguments[4]||0),sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,B,Z,K,k)},this.initRenderTarget=function(T){Ct.get(T).__webglFramebuffer===void 0&&E.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?E.setTextureCube(T,0):T.isData3DTexture?E.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?E.setTexture2DArray(T,0):E.setTexture2D(T,0),At.unbindTexture()},this.resetState=function(){b=0,R=0,D=null,At.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class kc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xt(t),this.near=e,this.far=n}clone(){return new kc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class __ extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class xc extends ke{constructor(t=null,e=1,n=1,s,r,o,a,c,l=on,h=on,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class th extends Ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const fs=new ae,eh=new ae,Xr=[],nh=new Zi,x_=new ae,js=new Rt,Js=new Ki;class v_ extends Rt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new th(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,x_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fs),nh.copy(t.boundingBox).applyMatrix4(fs),this.boundingBox.union(nh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fs),Js.copy(t.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(Js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),t.ray.intersectsSphere(Js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fs),eh.multiplyMatrices(n,fs),js.matrixWorld=eh,js.raycast(t,Xr);for(let o=0,a=Xr.length;o<a;o++){const c=Xr[o];c.instanceId=r,c.object=this,e.push(c)}Xr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new th(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new xc(new Float32Array(s*this.count),s,this.count,_r,Dn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Vc extends $i{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wo=new A,To=new A,ih=new ae,Qs=new Fo,qr=new Ki,xa=new A,sh=new A;class Au extends Te{constructor(t=new ve,e=new Vc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)wo.fromBufferAttribute(e,s-1),To.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=wo.distanceTo(To);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(s),qr.radius+=r,t.ray.intersectsSphere(qr)===!1)return;ih.copy(s).invert(),Qs.copy(t.ray).applyMatrix4(ih);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),y=h.getX(_+1),S=Yr(this,t,Qs,c,p,y);S&&e.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Yr(this,t,Qs,c,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=Yr(this,t,Qs,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Yr(this,t,Qs,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Yr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(wo.fromBufferAttribute(o,s),To.fromBufferAttribute(o,r),e.distanceSqToSegment(wo,To,xa,sh)>n)return;xa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(xa);if(!(c<t.near||c>t.far))return{distance:c,point:sh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const rh=new A,oh=new A;class M_ extends Au{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)rh.fromBufferAttribute(e,s),oh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+rh.distanceTo(oh);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class y_ extends $i{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ah=new ae,vc=new Fo,Zr=new Ki,Kr=new A;class S_ extends Te{constructor(t=new ve,e=new y_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=r,t.ray.intersectsSphere(Zr)===!1)return;ah.copy(s).invert(),vc.copy(t.ray).applyMatrix4(ah);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Kr.fromBufferAttribute(u,m),ch(Kr,m,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Kr.fromBufferAttribute(u,g),ch(Kr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ch(i,t,e,n,s,r,o){const a=vc.distanceSqToPoint(i);if(a<e){const c=new A;vc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Er extends ke{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new yt:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,s=[],r=[],o=[],a=new A,c=new ae;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(we(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(we(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Hc extends zn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new yt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class E_ extends Hc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Gc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const $r=new A,va=new Gc,Ma=new Gc,ya=new Gc;class w_ extends zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:($r.subVectors(s[0],s[1]).add(s[0]),l=$r);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:($r.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$r),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),va.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),Ma.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),ya.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(va.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ma.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ya.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(va.calc(c),Ma.calc(c),ya.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function lh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function T_(i,t){const e=1-i;return e*e*t}function A_(i,t){return 2*(1-i)*i*t}function b_(i,t){return i*i*t}function hr(i,t,e,n){return T_(i,t)+A_(i,e)+b_(i,n)}function R_(i,t){const e=1-i;return e*e*e*t}function C_(i,t){const e=1-i;return 3*e*e*i*t}function P_(i,t){return 3*(1-i)*i*i*t}function L_(i,t){return i*i*i*t}function ur(i,t,e,n,s){return R_(i,t)+C_(i,e)+P_(i,n)+L_(i,s)}class bu extends zn{constructor(t=new yt,e=new yt,n=new yt,s=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new yt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(t,s.x,r.x,o.x,a.x),ur(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class D_ extends zn{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(t,s.x,r.x,o.x,a.x),ur(t,s.y,r.y,o.y,a.y),ur(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ru extends zn{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class I_ extends zn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cu extends zn{constructor(t=new yt,e=new yt,n=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new yt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(hr(t,s.x,r.x,o.x),hr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class U_ extends zn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(hr(t,s.x,r.x,o.x),hr(t,s.y,r.y,o.y),hr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pu extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(lh(a,c.x,l.x,h.x,u.x),lh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new yt().fromArray(s))}return this}}var hh=Object.freeze({__proto__:null,ArcCurve:E_,CatmullRomCurve3:w_,CubicBezierCurve:bu,CubicBezierCurve3:D_,EllipseCurve:Hc,LineCurve:Ru,LineCurve3:I_,QuadraticBezierCurve:Cu,QuadraticBezierCurve3:U_,SplineCurve:Pu});class N_ extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new hh[s.type]().fromJSON(s))}return this}}class Ao extends N_{constructor(t){super(),this.type="Path",this.currentPoint=new yt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ru(this.currentPoint.clone(),new yt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Cu(this.currentPoint.clone(),new yt(t,e),new yt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new bu(this.currentPoint.clone(),new yt(t,e),new yt(n,s),new yt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Pu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Hc(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Wc extends ve{constructor(t=[new yt(0,-.5),new yt(.5,0),new yt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=we(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new A,d=new yt,f=new A,g=new A,_=new A;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let y=0;y<=e;y++){const S=n+y*h*s,x=Math.sin(S),P=Math.cos(S);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*x,u.y=t[b].y,u.z=t[b].x*P,o.push(u.x,u.y,u.z),d.x=y/e,d.y=b/(t.length-1),a.push(d.x,d.y);const R=c[3*b+0]*x,D=c[3*b+1],w=c[3*b+0]*P;l.push(R,D,w)}}for(let y=0;y<e;y++)for(let S=0;S<t.length-1;S++){const x=S+y*t.length,P=x,b=x+t.length,R=x+t.length+1,D=x+1;r.push(P,b,D),r.push(R,D,b)}this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("uv",new ne(a,2)),this.setAttribute("normal",new ne(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wc(t.points,t.segments,t.phiStart,t.phiLength)}}class Xc extends Wc{constructor(t=1,e=1,n=4,s=8){const r=new Ao;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Xc(t.radius,t.length,t.capSegments,t.radialSegments)}}class Is extends ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new A,h=new yt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class jn extends ve{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function y(){const x=new A,P=new A;let b=0;const R=(e-t)/n;for(let D=0;D<=r;D++){const w=[],M=D/r,C=M*(e-t)+t;for(let N=0;N<=s;N++){const F=N/s,V=F*c+a,G=Math.sin(V),H=Math.cos(V);P.x=C*G,P.y=-M*n+m,P.z=C*H,u.push(P.x,P.y,P.z),x.set(G,R,H).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-M),w.push(g++)}_.push(w)}for(let D=0;D<s;D++)for(let w=0;w<r;w++){const M=_[w][D],C=_[w+1][D],N=_[w+1][D+1],F=_[w][D+1];(t>0||w!==0)&&(h.push(M,C,F),b+=3),(e>0||w!==r-1)&&(h.push(C,N,F),b+=3)}l.addGroup(p,b,0),p+=b}function S(x){const P=g,b=new yt,R=new A;let D=0;const w=x===!0?t:e,M=x===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const C=g;for(let N=0;N<=s;N++){const V=N/s*c+a,G=Math.cos(V),H=Math.sin(V);R.x=w*H,R.y=m*M,R.z=w*G,u.push(R.x,R.y,R.z),d.push(0,M,0),b.x=G*.5+.5,b.y=H*.5*M+.5,f.push(b.x,b.y),g++}for(let N=0;N<s;N++){const F=P+N,V=C+N;x===!0?h.push(V,V+1,F):h.push(V+1,V,F),D+=3}l.addGroup(p,D,x===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qc extends jn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new qc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Lu extends Ao{constructor(t){super(t),this.uuid=zs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ao().fromJSON(s))}return this}}const F_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Du(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=V_(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return xr(r,o,e,a,c,f,0),o}};function Du(i,t,e,n,s){let r,o;if(s===J_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=uh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=uh(r,i[r],i[r+1],o);return o&&zo(o,o.next)&&(Mr(o),o=o.next),o}function Xi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(zo(e,e.next)||xe(e.prev,e,e.next)===0)){if(Mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function xr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&q_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?z_(i,n,s,r):O_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Mr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=B_(Xi(i),t,e),xr(i,t,e,n,s,r,2)):o===2&&k_(i,t,e,n,s,r):xr(Xi(i),t,e,n,s,r,1);break}}}function O_(i){const t=i.prev,e=i,n=i.next;if(xe(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&xs(s,a,r,c,o,l,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function z_(i,t,e,n){const s=i.prev,r=i,o=i.next;if(xe(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Mc(f,g,t,e,n),y=Mc(_,m,t,e,n);let S=i.prevZ,x=i.nextZ;for(;S&&S.z>=p&&x&&x.z<=y;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&xs(a,h,c,u,l,d,S.x,S.y)&&xe(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&xs(a,h,c,u,l,d,x.x,x.y)&&xe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&xs(a,h,c,u,l,d,S.x,S.y)&&xe(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&xs(a,h,c,u,l,d,x.x,x.y)&&xe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function B_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!zo(s,r)&&Iu(s,n,n.next,r)&&vr(s,r)&&vr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Mr(n),Mr(n.next),n=i=r),n=n.next}while(n!==i);return Xi(n)}function k_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&K_(o,a)){let c=Uu(o,a);o=Xi(o,o.next),c=Xi(c,c.next),xr(o,t,e,n,s,r,0),xr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function V_(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Du(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Z_(l));for(s.sort(H_),r=0;r<s.length;r++)e=G_(s[r],e);return e}function H_(i,t){return i.x-t.x}function G_(i,t){const e=W_(i,t);if(!e)return t;const n=Uu(e,i);return Xi(n,n.next),Xi(e,e.next)}function W_(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&xs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),vr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&X_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function X_(i,t){return xe(i.prev,i,t.prev)<0&&xe(t.next,i,i.next)<0}function q_(i,t,e,n){let s=i;do s.z===0&&(s.z=Mc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Y_(s)}function Y_(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Mc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Z_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function xs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function K_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!$_(i,t)&&(vr(i,t)&&vr(t,i)&&j_(i,t)&&(xe(i.prev,i,t.prev)||xe(i,t.prev,t))||zo(i,t)&&xe(i.prev,i,i.next)>0&&xe(t.prev,t,t.next)>0)}function xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function zo(i,t){return i.x===t.x&&i.y===t.y}function Iu(i,t,e,n){const s=Jr(xe(i,t,e)),r=Jr(xe(i,t,n)),o=Jr(xe(e,n,i)),a=Jr(xe(e,n,t));return!!(s!==r&&o!==a||s===0&&jr(i,e,t)||r===0&&jr(i,n,t)||o===0&&jr(e,i,n)||a===0&&jr(e,t,n))}function jr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Jr(i){return i>0?1:i<0?-1:0}function $_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Iu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function vr(i,t){return xe(i.prev,i,i.next)<0?xe(i,t,i.next)>=0&&xe(i,i.prev,t)>=0:xe(i,t,i.prev)<0||xe(i,i.next,t)<0}function j_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Uu(i,t){const e=new yc(i.i,i.x,i.y),n=new yc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function uh(i,t,e,n){const s=new yc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Mr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function yc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function J_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class dr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return dr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];dh(t),fh(n,t);let o=t.length;e.forEach(dh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,fh(n,e[c]);const a=F_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function dh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function fh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Yc extends ve{constructor(t=new Lu([new yt(0,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ne(s,3)),this.setAttribute("normal",new ne(r,3)),this.setAttribute("uv",new ne(o,2));function l(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;dr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];dr.isClockWise(y)===!0&&(g[m]=y.reverse())}const _=dr.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){const y=f[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=_.length;m<p;m++){const y=_[m],S=y[0]+u,x=y[1]+u,P=y[2]+u;n.push(S,x,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Q_(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Yc(n,t.curveSegments)}}function Q_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class yr extends ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new A,d=new A,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],S=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let P=0;P<=e;P++){const b=P/e;u.x=-t*Math.cos(s+b*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(s+b*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(b+x,1-S),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const S=h[p][y+1],x=h[p][y],P=h[p+1][y],b=h[p+1][y+1];(p!==0||o>0)&&f.push(S,x,b),(p!==n-1||c<Math.PI)&&f.push(x,P,b)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Zc extends ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new A,u=new A,d=new A;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Wt extends $i{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cu,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nu extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class tx extends Nu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Sa=new ae,ph=new A,mh=new A;class ex{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oc,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ph.setFromMatrixPosition(t.matrixWorld),e.position.copy(ph),mh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mh),e.updateMatrixWorld(),Sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class nx extends ex{constructor(){super(new yu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ix extends Nu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new nx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Fu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=gh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function gh(){return performance.now()}class _h{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class sx extends M_{constructor(t=10,e=10,n=4473924,s=8947848){n=new Xt(n),s=new Xt(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let d=0,f=0,g=-a;d<=e;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=d===r?n:s;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const h=new ve;h.setAttribute("position",new ne(c,3)),h.setAttribute("color",new ne(l,3));const u=new Vc({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}let rx=class extends Yi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cc);const xh={type:"change"},Kc={type:"start"},Ou={type:"end"},Qr=new Fo,vh=new Zn,ox=Math.cos(70*Jd.DEG2RAD),Ee=new A,Ke=2*Math.PI,he={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ea=1e-6;class ax extends rx{constructor(t,e=null){super(t,e),this.state=he.NONE,this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ys.ROTATE,MIDDLE:ys.DOLLY,RIGHT:ys.PAN},this.touches={ONE:gs.ROTATE,TWO:gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new Nn,this._lastTargetPosition=new A,this._quat=new Nn().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _h,this._sphericalDelta=new _h,this._scale=1,this._panOffset=new A,this._rotateStart=new yt,this._rotateEnd=new yt,this._rotateDelta=new yt,this._panStart=new yt,this._panEnd=new yt,this._panDelta=new yt,this._dollyStart=new yt,this._dollyEnd=new yt,this._dollyDelta=new yt,this._dollyDirection=new A,this._mouse=new yt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lx.bind(this),this._onPointerDown=cx.bind(this),this._onPointerUp=hx.bind(this),this._onContextMenu=_x.bind(this),this._onMouseWheel=fx.bind(this),this._onKeyDown=px.bind(this),this._onTouchStart=mx.bind(this),this._onTouchMove=gx.bind(this),this._onMouseDown=ux.bind(this),this._onMouseMove=dx.bind(this),this._interceptControlDown=xx.bind(this),this._interceptControlUp=vx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xh),this.update(),this.state=he.NONE}update(t=null){const e=this.object.position;Ee.copy(e).sub(this.target),Ee.applyQuaternion(this._quat),this._spherical.setFromVector3(Ee),this.autoRotate&&this.state===he.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ke:n>Math.PI&&(n-=Ke),s<-Math.PI?s+=Ke:s>Math.PI&&(s-=Ke),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ee.setFromSpherical(this._spherical),Ee.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ee),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ee.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new A(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ee.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Qr.origin.copy(this.object.position),Qr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qr.direction))<ox?this.object.lookAt(this.target):(vh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qr.intersectPlane(vh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ea||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ea||this._lastTargetPosition.distanceToSquared(this.target)>Ea?(this.dispatchEvent(xh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ke/60*this.autoRotateSpeed*t:Ke/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ee.setFromMatrixColumn(e,0),Ee.multiplyScalar(-t),this._panOffset.add(Ee)}_panUp(t,e){this.screenSpacePanning===!0?Ee.setFromMatrixColumn(e,1):(Ee.setFromMatrixColumn(e,0),Ee.crossVectors(this.object.up,Ee)),Ee.multiplyScalar(t),this._panOffset.add(Ee)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ee.copy(s).sub(this.target);let r=Ee.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new yt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function cx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function lx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function hx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ou),this.state=he.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function ux(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=he.DOLLY;break;case ys.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=he.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=he.ROTATE}break;case ys.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=he.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=he.PAN}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(Kc)}function dx(i){switch(this.state){case he.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case he.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function fx(i){this.enabled===!1||this.enableZoom===!1||this.state!==he.NONE||(i.preventDefault(),this.dispatchEvent(Kc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ou))}function px(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function mx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case gs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=he.TOUCH_ROTATE;break;case gs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=he.TOUCH_PAN;break;default:this.state=he.NONE}break;case 2:switch(this.touches.TWO){case gs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=he.TOUCH_DOLLY_PAN;break;case gs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=he.TOUCH_DOLLY_ROTATE;break;default:this.state=he.NONE}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(Kc)}function gx(i){switch(this._trackPointer(i),this.state){case he.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case he.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case he.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case he.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=he.NONE}}function _x(i){this.enabled!==!1&&i.preventDefault()}function xx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Mx=9.81;function ps(i,t,e,n){const s=i*Math.PI/180,r=2*Math.PI/t;return{dirX:Math.sin(s),dirZ:Math.cos(s),amp:e,k:r,omega:Math.sqrt(Mx*r),phase:n}}const wa=3;class yx{constructor(){O(this,"waves",[ps(10,7,1,0),ps(40,5,.8,1.3),ps(-30,3.6,.6,2.1),ps(65,2.6,.45,4),ps(-55,2,.32,.7),ps(20,1.6,.22,5.2)]);O(this,"scale",1);let t=0;for(const s of this.waves)t+=s.amp*s.amp;const e=Math.sqrt(t/2),n=wa/100/4/e;for(const s of this.waves)s.amp*=n}setHeightCm(t){this.scale=t/wa}get heightCm(){return this.scale*wa}height(t,e,n){let s=0;for(const r of this.waves)s+=r.amp*Math.sin(r.k*(r.dirX*t+r.dirZ*e)-r.omega*n+r.phase);return s*this.scale}verticalVelocity(t,e,n){let s=0;for(const r of this.waves)s-=r.amp*r.omega*Math.cos(r.k*(r.dirX*t+r.dirZ*e)-r.omega*n+r.phase);return s*this.scale}}const vs=-1.5,In=1.5,ti=.05,Vi=.12,zu=.12,rn=-.3,bo=.03,Ro=-1.02,Co=-.78,Ms=.06,Sx=.012,Ts=.63,tr=.06,Ex=.04;function Ei(i){if(i<=tr)return Ts-.005*(tr-i)/(tr-vs);const t=Math.min(1,(i-tr)/(In-tr));return Ts-(Ts-Ex)*t**2.3}function ks(i,t=On(i)){return Math.max(.05,ze(i)-t)}function $c(i,t=On(i)){return Math.min(1,Math.max(0,Ei(i)-.01)/(ks(i,t)/2))}function Bo(i,t=On(i)){return Ei(i)-$c(i,t)*ks(i,t)/2}function Po(i,t,e=On(i)){const n=ks(i,e);return{x:Ei(i)-$c(i,e)*n*(1-t)**2/2,y:e+t*n}}function wx(i,t){return $c(i)*(1-t)}const Ln=[{z:-.95,r:Ts},{z:0,r:Ts},{z:.75,r:.5},{z:1.2,r:.27},{z:1.4,r:.1}];function On(i){return i<rn?bo:i<.5?0:.12*((i-.5)/(In-.5))**2}function Tx(i){return i<.5?0:.24*(i-.5)/(In-.5)**2}function ze(i){return i<.4?.2:.2-.07*((i-.4)/(In-.4))**1.5}function Bu(i,t){const e=Math.max(Ei(i),1e-4),n=Math.min(1,Math.abs(t)/e);return ze(i)+.025*(1-n*n)}const ln=-1.38,Hi=.8,fr=.48,Ax=.05;function zi(i){if(i<=ti)return fr;const t=Math.min(1,(i-ti)/(Hi-ti));return fr+(ze(Hi)-fr)*(1-Math.cos(t*Math.PI/2))}const to=1e3,bx=9.81,Rx=101325,Cx=2340,vo=8,Ta=.2,ku={diameter:.14,pitch:.235,ear:.5,blades:3,cup:.6};function Px(){return{u:new Float32Array(vo),cav:0,vent:0,loading:0,sigma:10,tipRatio:1,ventLimit:0}}function Mh(i){return Math.sqrt(Math.max(0,(i-.12)*(1.03-i)))}function Lx(i){const t=2*Math.PI*.72,e=.2,n=Math.abs(i);if(n<=e)return t*i;const s=t*e-1.4*(n-e);return Math.sign(i)*Math.max(.55,s)}function Dx(i,t,e,n,s,r,o,a){const c=i.diameter/2,l=i.blades,h=2*Math.PI*e,u=(1-Ta)/vo;let d=0;for(let Q=0;Q<vo;Q++)d+=Mh(Ta+(Q+.5)*u)*u*c;const f=i.ear*Math.PI*c*c/(l*d),g=.017*i.cup,_=.003*i.cup;let m=0,p=0;for(let Q=0;Q<vo;Q++){const st=Ta+(Q+.5)*u,gt=st*c,lt=u*c,W=f*Mh(st),X=h*gt,q=Math.atan(i.pitch/(2*Math.PI*gt))+g;let Y=t.u[Q],tt=0,St=0;for(let _t=0;_t<4;_t++){const Ht=n+Y,mt=Math.atan2(Ht,Math.max(X,.001)),Bt=Ht*Ht+X*X,I=Lx(q-mt),Qt=.01+.008*I*I+_,Ot=.5*to*Bt*W*l*lt,Vt=Math.cos(mt),At=Math.sin(mt);tt=Ot*(I*Vt-Qt*At),St=Ot*(I*At+Qt*Vt)*gt;const te=l*(1-st)/(2*st*Math.max(.05,At)),Ct=Math.max(.05,2/Math.PI*Math.acos(Math.min(1,Math.exp(-te)))),E=Math.max(0,tt)/(4*Math.PI*gt*to*Ct*lt),v=(-n+Math.sqrt(Math.max(0,n*n+4*E)))/2;Y=.5*Y+.5*v}t.u[Q]=Number.isFinite(Y)?Y:0,m+=tt,p+=St}const y=i.pitch/i.diameter,S=i.ear*Math.PI*c*c*(1.067-.229*y),x=n*n+(.7*Math.PI*e*i.diameter)**2,P=.5*to*Math.max(x,1),b=Math.max(.02,(Rx+to*bx*Math.max(0,s)-Cx)/P),R=Math.max(0,m)/(P*S),D=.5*b**.5,w=Math.max(0,Math.min(1,(R/D-1)/3));t.cav+=(w-t.cav)*Math.min(1,a*20),t.loading=R,t.sigma=b;const C=(s-c)/i.diameter,N=Math.min(2,R/.5),F=.05-.08*i.cup+Math.min(.6,o),V=Math.max(-.2,F+.25*N),G=Math.max(-.2,F+.25*N*(1-.6*t.vent)+.05);if(t.tipRatio=C,t.ventLimit=V,C<V){const Q=Math.min(1,(V-C)/.15);t.vent+=Q*(1-t.vent)*Math.min(1,a*10)}else if(C>G){const Q=1.5+8*(C-G)+Math.max(0,1-N/.7)*4;t.vent=Math.max(0,t.vent-Q*a)}t.vent=Math.max(t.vent,1-r);const H=t.cav,nt=t.vent,L=(1-.55*H*H)*(1-.75*nt)*r,J=(1-.3*H*H)*(1-.8*nt)*r;return{thrust:m*L,torque:p*J+.002*h*(1-r)}}const gi=9.81,Rn=1e3,Ix=1.2,Aa=115,yi=52,Ux=new A(0,.2,-.55),eo=new A(140,140,22),En=new A(0,.55,-.6),Nx=.3,Fx=.2,Ox=yi*(2*Math.PI*3)**2,zx=2*.7*yi*2*Math.PI*3,yh=yi*gi*3.2,Bx=.03,Us=new A(0,.38,-1.52),jc=new A(0,.04,-.1);Us.clone().add(jc);const kx=new A(0,-.57,-.16),Vx=new A(0,-.47,-.12),Hx=new A(0,-.44,-.14),Gx=.057,Sh=2.4,Wx=1.9,no=[-.5,0,.5,1,1.5,2,3],Lo=1,Kn={peakTorque:37,peakRpm:5400,idleRpm:1300,limitRpm:6600,inertia:.015},un={planing:.35,friction:.0032,wetSmooth:.008,pressureFetch:.2,pressurePeak:3,stepRise:.035,stepVentSpeed:6,chineCd:1,yawSide:2.5,yawSideStall:.35,yawSideAft:-1,yawSideStallAft:-1,stallDrop:1,sideLift:.4,keelFinSlope:1.8,keelFinStall:.45,keelFinCd0:.02,keelFinVortex:0,sideWalls:!0,wallPlaning:1,windmill:!0,plateCn:0,finPlateCn:0,obliqueFloor:3,obliqueMax:.6,keelFinZ:void 0,heaveDamp:450,airDrag:.45,finDrag:6e-4,finArea:.02,rollDamp:110,pitchDamp:150,yawDamp:30,yawDamp2:0,maxSteer:.42,steerRate:2.2,steerFullSpeed:16,yawInertia:140,kickYawArm:.4,kickHandArm:.5,kickTime:.25,leanSide:.55,hullComZ:-.7,plateLift:.5,motorHeight:.05},Xx={keelFinZ:-.8,maxSteer:.5,plateCn:2,chineCd:.3,obliqueFloor:14,obliqueMax:.4},qx={...un},Vu="boatgame.turnPhys";let Oe=!1;function Hu(i){Oe=i;const t=un.motorHeight;Object.assign(un,qx,i?Xx:{},{motorHeight:t})}let Gu=null;try{typeof localStorage<"u"&&(Gu=localStorage.getItem(Vu))}catch{}var qh,Yh;const Yx=!!((Yh=(qh=globalThis.process)==null?void 0:qh.env)!=null&&Yh.V1);Hu(Gu!=="v1"&&!Yx);const $e=7;function Wu(i,t){return(i-($e-1)/2)*2*Bo(t)/$e}function Zx(){const i=[],t=(s,r,o)=>{for(let a=0;a<o;a++)i.push([s+(r-s)*a/o,s+(r-s)*(a+1)/o])};t(vs,rn,6),t(rn,In,11);const e=[],n=[];for(const[s,r]of i){const o=(s+r)/2,a=Bo(o),c=On(o),l=new A(0,-1,Tx(o)).normalize();for(let d=0;d<$e;d++){const f=d===0?-1:d===$e-1?1:0;e.push({p:new A(Wu(d,o),c,o),n:l,area:(r-s)*2*a/$e,len:r-s,depthMax:ze(o)-c,side:f,col:d,aft:o<rn?rn-o:-1,wall:!1})}const h=c,u=ks(o,h);for(const d of[1,-1])for(const f of[.25,.75]){const g=Po(o,f,h),_=wx(o,f);n.push({p:new A(d*g.x,g.y,o),n:new A(d,-_,0).normalize(),area:(r-s)*(u/2)*Math.hypot(1,_),len:r-s,depthMax:ze(o)-g.y,side:0,col:-1,aft:-1,wall:!0})}}return[...e,...n]}const Eh=Array.from({length:$e},(i,t)=>new A(Wu(t,rn),0,rn)),Kx=Co-Ro,wh=new A(0,bo,(Ro+Co)/2);function $x(i){const t=(i-Kn.peakRpm)/3200;return Math.max(16,Kn.peakTorque*(1-.55*t*t))}const Le=new A,Mn=new A,me=new A,jx=new A,Li=new A,ms=new A,De=new Nn,ba=new A(0,1,0),Jx=new A(1,0,0),mr=class mr{constructor(t,e=t){O(this,"comW",new A);O(this,"vel",new A);O(this,"quat",new Nn);O(this,"angVel",new A);O(this,"origin",new A);O(this,"riderB",En.clone());O(this,"riderW",new A);O(this,"riderVel",new A);O(this,"legForce",new A);O(this,"legLoad",1);O(this,"kickForce",0);O(this,"legLatAvg",0);O(this,"riderTarget",En.clone());O(this,"riderTargetVel",new A);O(this,"comB",new A);O(this,"steerAngle",0);O(this,"throttle",0);O(this,"engineOmega",Kn.idleRpm/60*2*Math.PI);O(this,"propThrust",0);O(this,"propImmersion",1);O(this,"tilt",0);O(this,"plateImmersion",0);O(this,"finVent",0);O(this,"propDepth",0);O(this,"plateForce",0);O(this,"prop",{...ku});O(this,"propState",Px());O(this,"wetPoints",0);O(this,"keelFinImmersion",0);O(this,"keelFinForce",0);O(this,"edgeY",new Float32Array($e));O(this,"cellT");O(this,"cellX");O(this,"chineAt",new A);O(this,"edgeK",new Float32Array($e));O(this,"hull",Zx());O(this,"pressure",new Float32Array(this.hull.length*4));O(this,"hullFx",new Float32Array(this.hull.length*mr.FX_STRIDE));O(this,"impact",new Float32Array(this.hull.length));O(this,"wasWet",new Uint8Array(this.hull.length));O(this,"propPos",new A);O(this,"propAxis",new A(0,0,1));O(this,"propJet",0);O(this,"diag",{planing:0,friction:0,lateral:0,heave:0,fin:0,air:0,thrust:0});O(this,"rollDiag",{});O(this,"rollAxis",new A);O(this,"diagDrag",!1);O(this,"diagYaw",!1);O(this,"rollDiagOn",!1);O(this,"force",new A);O(this,"torque",new A);O(this,"surface");O(this,"motorSurface");O(this,"extForce",new A);O(this,"extTorque",new A);this.motorSurface=e;const n=this.hull.filter(s=>!s.wall).length;this.cellT=new Float32Array(n/$e),this.cellX=new Float32Array(n/$e),this.surface=t,this.updateComB()}roll(t,e,n){this.rollDiagOn&&(Mn.subVectors(n,this.comW),this.rollDiag[t]=(this.rollDiag[t]??0)+(this.diagDrag?-e.dot(this.rollAxis):Li.crossVectors(Mn,e).dot(this.rollAxis)))}get rpm(){return this.engineOmega*60/(2*Math.PI)}reset(t,e,n,s){this.quat.setFromAxisAngle(ba,n),this.vel.set(0,0,0),this.angVel.set(0,0,0),this.riderB.copy(En),this.riderTarget.copy(En),this.riderTargetVel.set(0,0,0),this.riderVel.set(0,0,0),this.steerAngle=0,this.throttle=0,this.engineOmega=Kn.idleRpm/60*2*Math.PI,this.propState.cav=this.propState.vent=0,this.finVent=0,this.legLatAvg=this.kickForce=0,this.propState.u.fill(0),this.extForce.set(0,0,0),this.extTorque.set(0,0,0),this.updateComB();const r=this.surface.height(t,e,s);this.origin.set(t,r-.05,e),this.comW.copy(this.comB).applyQuaternion(this.quat).add(this.origin),this.toWorld(En,this.riderW)}updateComB(){this.comB.copy(Ux).setZ(un.hullComZ)}shift(t,e){this.comW.x+=t,this.comW.z+=e,this.riderW.x+=t,this.riderW.z+=e,this.origin.x+=t,this.origin.z+=e}forward(t){return t.set(0,0,1).applyQuaternion(this.quat)}speed(){return this.vel.length()}toWorld(t,e){return e.copy(t).applyQuaternion(this.quat).add(this.origin)}pointVel(t,e){return Mn.subVectors(t,this.comW),e.crossVectors(this.angVel,Mn).add(this.vel)}addForce(t,e){this.force.add(t),Mn.subVectors(e,this.comW),this.torque.add(Li.crossVectors(Mn,t))}step(t,e,n){const s=un,r=this.surface,o=this.motorSurface,a=Math.max(1,this.vel.length()),c=Math.min(1,(s.steerFullSpeed/a)**2),h=e.steer*s.maxSteer*c-this.steerAngle;this.steerAngle+=Math.sign(h)*Math.min(Math.abs(h),s.steerRate*t),this.throttle+=(e.throttle-this.throttle)*Math.min(1,t*10),this.updateComB(),this.origin.copy(this.comB).applyQuaternion(this.quat).negate().add(this.comW);const u=ms.set(En.x-e.leanX*s.leanSide,En.y+Math.abs(e.leanX)*Fx,En.z+e.leanZ*Nx),d=1-Math.exp(-t/Bx);this.riderTargetVel.copy(u).sub(this.riderTarget).multiplyScalar(d/t),this.riderTarget.lerp(u,d);const f=this.toWorld(this.riderTarget,new A),g=this.pointVel(f,new A).add(Le.copy(this.riderTargetVel).applyQuaternion(this.quat));this.riderW.distanceToSquared(f)>.8*.8&&(this.riderW.copy(f),this.riderVel.copy(g));const _=this.legForce;_.subVectors(f,this.riderW).multiplyScalar(Ox),_.addScaledVector(g.sub(this.riderVel),zx),_.y+=yi*gi;const m=Le.set(0,1,0).applyQuaternion(this.quat),p=_.dot(m);p<-408.096&&_.addScaledVector(m,-408.096-p);const y=_.length();y>yh&&_.multiplyScalar(yh/y),this.legLoad=Math.max(0,_.dot(m))/(yi*gi),this.diagDrag?this.rollAxis.copy(this.vel).normalize():this.rollAxis.set(0,this.diagYaw?1:0,this.diagYaw?0:1).applyQuaternion(this.quat);for(const at in this.rollDiag)this.rollDiag[at]=0;this.force.set(0,-Aa*gi,0),this.torque.set(0,0,0),this.force.add(this.extForce),this.torque.add(this.extTorque),this.addForce(_.clone().negate(),this.riderW);{const at=Le.set(1,0,0).applyQuaternion(this.quat),et=-_.dot(at);this.legLatAvg+=(et-this.legLatAvg)*Math.min(1,t/s.kickTime);const Tt=et-this.legLatAvg;this.kickForce=Tt,this.pointVel(this.riderW,Mn);const ct=this.riderVel.dot(at)-Mn.dot(at),vt=-Tt*ct>0?s.kickYawArm:-s.kickHandArm,Mt=Li.set(0,1,0).applyQuaternion(this.quat);this.torque.addScaledVector(Mt,-Tt*vt),this.rollDiagOn&&this.diagYaw&&(this.rollDiag.蹴り=-Tt*vt)}this.roll("選手",_.clone().negate(),this.riderW),this.roll("船体の重さ",new A(0,-Aa*gi,0),this.comW);const S=jx.set(-1,0,0).applyQuaternion(this.quat).clone(),x=this.vel.length(),P=x>.1?this.vel.clone().multiplyScalar(1/x):new A,b=this.diag;b.planing=b.friction=b.lateral=b.heave=b.fin=b.air=0;const R=Math.max(0,Math.min(1,(x-s.stepVentSpeed+2)/4)),D=this.edgeY,w=this.edgeK;for(let at=0;at<Eh.length;at++){const et=this.toWorld(Eh[at],Li),Tt=r.height(et.x,et.z,n)-et.y;D[at]=et.y,w[at]=R*Math.max(0,Math.min(1,Tt/.01))}const M=ms.set(0,1,0).applyQuaternion(this.quat).clone();let C=0;const N=new A,F=new A,V=new A,G=new A,H=S.clone().negate();this.cellT.fill(0);for(let at=0;at<this.hull.length;at++){const et=this.hull[at];this.toWorld(et.p,N);const Tt=at*4;this.pressure[Tt]=N.x,this.pressure[Tt+1]=N.z,this.pressure[Tt+2]=0,this.pressure[Tt+3]=Math.sqrt(et.area)*.5;let ct=r.height(N.x,N.z,n);if(et.aft>0&&w[et.col]>0){const it=Math.min(ct,D[et.col]+s.stepRise*et.aft);ct+=(it-ct)*w[et.col]}const dt=ct-N.y,vt=at*mr.FX_STRIDE,Mt=this.hullFx;if(Mt[vt]=N.x,Mt[vt+1]=N.y,Mt[vt+2]=N.z,Mt[vt+9]=dt,dt<=0){Mt[vt+10]=Mt[vt+11]=0,this.wasWet[at]=0;continue}C++;const xt=at/$e|0;!et.wall&&dt>this.cellT[xt]&&(this.cellT[xt]=Math.min(dt,et.depthMax),this.cellX[xt]=et.p.x);const kt=Math.min(1,dt/s.wetSmooth),zt=Math.min(dt,et.depthMax);et.wall?me.copy(et.n).applyQuaternion(this.quat).multiplyScalar(-Rn*gi*et.area*zt):me.set(0,Rn*gi*et.area*zt,0),this.roll("浮力",me,N),this.pointVel(N,V),V.y-=r.verticalVelocity(N.x,N.z,n);const Jt=V.length();F.copy(et.n).applyQuaternion(this.quat);const U=V.dot(F);if(Mt[vt+3]=V.x,Mt[vt+4]=V.y,Mt[vt+5]=V.z,Mt[vt+6]=F.x,Mt[vt+7]=F.y,Mt[vt+8]=F.z,Mt[vt+10]=U,Mt[vt+11]=kt,!this.wasWet[at]&&U>0&&(this.impact[at]=Math.max(this.impact[at],U)),this.wasWet[at]=1,U>0){Le.copy(V).addScaledVector(F,-U);const it=Le.length();let $=10,ut=0,Pt=0;if(it>.5&&!et.wall){Le.multiplyScalar(1/it);const Lt=Le.y+(et.aft>0?s.stepRise*w[et.col]:0);Lt>.001&&($=dt/Lt);const de=Le.dot(H);ut=Math.abs(de),Pt=Bo(et.p.z)-Math.sign(de)*et.p.x}const qt=et.area/et.len;let jt=et.wall?s.wallPlaning:0;if(!et.wall)for(let Lt=0;Lt<4;Lt++){let de=$;ut>.001&&(de=Math.min(de,Math.max(0,Pt+((Lt+.5)/4-.5)*qt)/ut)),jt+=Math.min(s.pressurePeak,Math.sqrt(s.pressureFetch/Math.max(.005,de)))/4}if(G.copy(F).multiplyScalar(-s.planing*jt*Rn*et.area*Jt*U*kt),b.planing+=G.dot(P),this.roll("滑走揚力",G,N),me.add(G),ut>.001&&!et.wall){const Lt=Math.asin(Math.min(1,ut)),de=et.aft>0,_e=de&&s.yawSideStallAft>0?s.yawSideStallAft:s.yawSideStall,ri=de&&s.yawSideAft>=0?s.yawSideAft:s.yawSide,mn=s.stallDrop?Lt<=_e?Lt:Math.max(_e*.5,_e-.8*(Lt-_e)):_e*Math.tanh(Lt/_e),He=G.length(),je=Mn.copy(H).addScaledVector(Le,-H.dot(Le)).normalize(),oi=Math.sign(Le.dot(H));G.copy(je).multiplyScalar(-oi*ri*mn*He),b.lateral+=G.dot(P),this.roll("横滑りの横力",G,N),me.add(G)}}const ft=-s.heaveDamp*et.area*V.y*kt;me.y+=ft,b.heave+=ft*P.y,this.roll("上下の減衰",new A(0,ft,0),N),Le.copy(V).addScaledVector(F,-U);const j=Le.length();if(G.copy(Le).multiplyScalar(-.5*Rn*s.friction*et.area*j*kt),b.friction+=G.dot(P),this.roll("摩擦",G,N),me.add(G),et.side!==0&&!s.sideWalls){const it=et.side>0?H:S,$=V.dot(it);if($>0){const ut=Math.min(dt,et.depthMax);G.copy(it).multiplyScalar(-.5*Rn*s.chineCd*et.len*ut*$*$);const Pt=this.chineAt.copy(N).addScaledVector(M,ut*.5);b.lateral+=G.dot(P),this.roll("舷側",G,Pt),this.addForce(G,Pt)}}this.pressure[Tt+2]=Math.max(0,me.y),this.addForce(me,N)}this.wetPoints=C;{const at=ms.set(0,0,1).applyQuaternion(this.quat).clone(),et=Math.max(0,this.vel.dot(at));let Tt=0;const ct=this.cellT.length;for(let dt=ct-1;dt>=0;dt--){const vt=this.cellT[dt],Mt=Math.PI/2*Rn*vt*vt,xt=Mt-Tt;if(xt<=0||et<1)continue;Tt=Mt;const kt=this.hull[dt*$e];this.toWorld(Li.set(this.cellX[dt],kt.p.y+vt*.5,kt.p.z),N),this.pointVel(N,V);const zt=V.dot(H);G.copy(H).multiplyScalar(-s.sideLift*et*xt*zt),b.lateral+=G.dot(P),this.roll("サイド",G,N),this.addForce(G,N)}}{const at=s.keelFinZ??wh.z,et=this.toWorld(ms.copy(wh).setZ(at),Li).clone();let Tt=r.height(et.x,et.z,n);const ct=w[($e-1)/2];if(ct>0){const xt=Math.min(Tt,D[($e-1)/2]+s.stepRise*(rn-at));Tt+=(xt-Tt)*ct}const dt=M.y,vt=et.y-Ms*dt,Mt=dt>.2?Math.max(0,Math.min(Ms,(Tt-vt)/dt)):0;if(this.keelFinImmersion=Mt/Ms,this.keelFinForce=0,Mt>.002){const xt=et.addScaledVector(M,-(Ms-Mt/2));this.pointVel(xt,V);const kt=ms.set(0,0,1).applyQuaternion(this.quat).clone(),zt=V.dot(kt),Jt=V.dot(H);if(zt>.5){const U=Math.atan2(Jt,zt),ft=Math.abs(U),j=s.keelFinStall,it=s.keelFinSlope*j,$=Math.sin(Math.min(ft,1.2)),ut=Math.cos(Math.min(ft,1.2));let Pt=s.keelFinVortex>0?Math.sign(U)*(s.keelFinSlope*$*ut*ut+s.keelFinVortex*$*$*ut):Math.sign(U)*(s.stallDrop?ft<=j?s.keelFinSlope*ft:Math.max(it*.5,it-1.2*(ft-j)):it*Math.tanh(s.keelFinSlope*ft/it));const qt=Mt*Kx,jt=2*Mt*Mt/qt;let Lt=s.keelFinCd0+Pt*Pt/(Math.PI*.8*jt);if(s.finPlateCn>0){const He=Math.sin(ft),je=s.finPlateCn*He;je*Math.cos(ft)>Math.abs(Pt)&&(Pt=Math.sign(U)*je*Math.cos(ft)),Lt=Math.max(Lt,s.keelFinCd0+je*He)}const de=zt*zt+Jt*Jt,_e=.5*Rn*qt*de,ri=Le.copy(kt).multiplyScalar(zt).addScaledVector(H,Jt).normalize(),mn=Mn.copy(H).multiplyScalar(zt).addScaledVector(kt,-Jt).normalize();G.copy(mn).multiplyScalar(-_e*Pt).addScaledVector(ri,-_e*Lt),b.lateral+=G.dot(P),this.roll("中央フィン",G,xt),this.addForce(G,xt),this.keelFinForce=G.dot(H)}}}const nt=new Nn().setFromAxisAngle(Jx,(this.tilt-Lo)*Math.PI/180).premultiply(this.quat);De.setFromAxisAngle(ba,this.steerAngle).premultiply(nt);const L=new A(0,0,1).applyQuaternion(De),J=new A(1,0,0).applyQuaternion(De),Q=new A(0,1,0).applyQuaternion(De),st=Le.copy(Us).setY(Us.y+s.motorHeight),gt=this.toWorld(st,new A).add(jc.clone().applyQuaternion(nt)),lt=new A().copy(Vx).applyQuaternion(De).add(gt),W=o.height(lt.x,lt.z,n)-lt.y;if(W>0){this.pointVel(lt,V);const at=V.dot(L),et=V.dot(J);if(at>.5){const Tt=Math.atan2(et,at),ct=Math.abs(Tt);let dt=Math.sign(Tt)*(ct<=.3?Sh*ct:Math.max(.35,Sh*.3-1.2*(ct-.3)));const vt=Math.max(0,Math.min(1,(.32-W)/.2)),Mt=Math.max(vt*Math.max(0,Math.min(1,(ct-.3)/.25)),this.propState.vent*.3);this.finVent+=(Mt-this.finVent)*Math.min(1,t*(Mt>this.finVent?12:1.5)),s.plateCn>0&&(dt=Math.sign(Tt)*Math.max(Math.abs(dt),s.plateCn*Math.sin(ct))),dt*=1-.6*this.finVent;const xt=.5*Rn*s.finArea*(at*at+et*et)*Math.min(1,W/.2);me.copy(J).multiplyScalar(-xt*dt),me.addScaledVector(L,-.5*Rn*s.finDrag*at*at),b.fin+=me.dot(P),this.addForce(me,lt),this.roll("ギアケース",me,lt)}}const X=new A().copy(Hx).applyQuaternion(De).add(gt),q=o.height(X.x,X.z,n)-X.y;if(this.plateImmersion=Math.max(0,Math.min(1,(q+.02)/.05)),this.plateImmersion>0){this.pointVel(X,V);const at=V.dot(L);if(at>.5){const et=V.dot(Q),Tt=Math.atan2(et,at),ct=s.plateLift*Wx*Math.max(-.35,Math.min(.35,Tt)),dt=.5*Rn*Gx*(at*at+et*et)*this.plateImmersion;me.copy(Q).multiplyScalar(-dt*ct),me.addScaledVector(L,-dt*.008),this.plateForce=me.dot(ba),b.fin+=me.dot(P),this.addForce(me,X),this.roll("プレート",me,X)}}else this.plateForce=0;const Y=new A().copy(kx).applyQuaternion(De).add(gt),tt=o.height(Y.x,Y.z,n)-Y.y;this.propDepth=tt;const St=this.prop.diameter/2;this.propImmersion=Math.max(0,Math.min(1,(tt+St)/(2*St)));const _t=this.engineOmega/(2*Math.PI);this.pointVel(Y,V);const Ht=Math.max(0,V.dot(L))*.97,mt=Math.max(s.obliqueFloor,Math.abs(Ht)),Bt=(.8*Math.abs(V.dot(Q))+1*Math.abs(V.dot(J)))/mt,I=Dx(this.prop,this.propState,_t,Ht,tt,this.propImmersion,Math.min(s.obliqueMax,Bt),t);this.propPos.copy(Y),this.propAxis.copy(L);let Qt=0;for(const at of this.propState.u)Qt+=at;this.propJet=Qt/this.propState.u.length;const Ot=I.thrust,Vt=s.windmill?I.torque:Math.max(0,I.torque),At=this.rpm,te=At<Kn.idleRpm?Math.min(.25,(Kn.idleRpm-At)/200*.25):0,Ct=At>Kn.limitRpm?0:Math.max(this.throttle,te),E=1+8e-4*At,v=$x(At)*Ct-E;this.engineOmega=Math.max(0,this.engineOmega+(v-Vt)/Kn.inertia*t),this.propThrust=Ot,b.thrust=L.dot(P)*Ot,this.addForce(me.copy(L).multiplyScalar(Ot),Y),this.roll("推力",me,Y),this.torque.addScaledVector(L,-Vt),me.copy(this.vel).multiplyScalar(-.5*Ix*s.airDrag*x),b.air=me.dot(P),this.force.add(me),this.riderVel.addScaledVector(_,t/yi),this.riderVel.y-=gi*t,this.riderW.addScaledVector(this.riderVel,t),this.vel.addScaledVector(this.force,t/Aa),this.comW.addScaledVector(this.vel,t),De.copy(this.quat).invert();const z=Li.copy(this.angVel).applyQuaternion(De),rt=ms.copy(this.torque).applyQuaternion(De),ht=s.yawInertia,ot=Le.set(eo.x*z.x,ht*z.y,eo.z*z.z);rt.sub(Mn.crossVectors(z,ot)),rt.x-=s.pitchDamp*z.x,rt.y-=s.yawDamp*z.y+s.yawDamp2*Math.abs(z.y)*z.y,rt.z-=s.rollDamp*z.z,z.x+=rt.x/eo.x*t,z.y+=rt.y/ht*t,z.z+=rt.z/eo.z*t,this.angVel.copy(z).applyQuaternion(this.quat);const bt=this.angVel;De.set(bt.x*t*.5,bt.y*t*.5,bt.z*t*.5,0).multiply(this.quat),this.quat.set(this.quat.x+De.x,this.quat.y+De.y,this.quat.z+De.z,this.quat.w+De.w).normalize(),this.origin.copy(this.comB).applyQuaternion(this.quat).negate().add(this.comW),De.copy(this.quat).invert(),this.riderB.copy(this.riderW).sub(this.origin).applyQuaternion(De)}attitude(){const t=new A(0,0,1).applyQuaternion(this.quat),e=new A(-1,0,0).applyQuaternion(this.quat);return{trim:Math.asin(Math.max(-1,Math.min(1,t.y)))*180/Math.PI,heel:Math.asin(Math.max(-1,Math.min(1,-e.y)))*180/Math.PI}}};O(mr,"FX_STRIDE",12);let Sr=mr;const er=new A;function hn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;er.copy(t),er[n]=0,er.normalize();const l=.5*o/(o+a),h=1-er.angleTo(i)/c;return Math.sign(er[e])===1?h*l:a/(o+a)+l+l*(1-h)}class Qx extends se{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new A,c=new A,l=new A(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new A,_=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=hn(g,c,"z","y",r,n),d[p+1]=1-hn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-hn(g,c,"z","y",r,n),d[p+1]=1-hn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-hn(g,c,"x","z",r,t),d[p+1]=hn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-hn(g,c,"x","z",r,t),d[p+1]=1-hn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-hn(g,c,"x","y",r,t),d[p+1]=1-hn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=hn(g,c,"x","y",r,t),d[p+1]=1-hn(g,c,"y","x",r,e);break}}}const $t=(i,t,e)=>new A(i,t,e);function yn(i){const t=i[0].length,e=[],n=[];for(const r of i)for(const o of r)e.push(o.x,o.y,o.z);for(let r=0;r<i.length-1;r++)for(let o=0;o<t-1;o++){const a=r*t+o,c=a+t;n.push(a,c,a+1,a+1,c,c+1)}const s=new ve;return s.setAttribute("position",new ne(e,3)),s.setIndex(n),s.computeVertexNormals(),s}function io(i){const t=new A;for(const r of i)t.add(r);t.multiplyScalar(1/i.length);const e=[t.x,t.y,t.z];for(const r of i)e.push(r.x,r.y,r.z);const n=[];for(let r=0;r<i.length;r++)n.push(0,1+r,1+(r+1)%i.length);const s=new ve;return s.setAttribute("position",new ne(e,3)),s.setIndex(n),s.computeVertexNormals(),s}function Xn(i,t,e){const n=[];for(let s=0;s<=e;s++){const r=s/e;n.push(i+(t-i)*(t>=In-1e-6?1-(1-r)**1.6:r))}return n}const tv=.13,Th=6;function Ns(i,t,e,n,s){const r=[];for(let o=0;o<=Th;o++){const a=Po(i,t+(e-t)*o/Th,s);r.push($t(n*a.x,a.y,i))}return r}const Jc=(i,t)=>Math.min(1,tv/ks(i,t));function or(i,t=On(i)){const e=Bo(i,t),n=Jc(i,t);return[...Ns(i,n,0,1,t),$t(e*.5,t,i),$t(0,t,i),$t(-e*.5,t,i),...Ns(i,0,n,-1,t)]}function ev(i,t){const e=On(i),n=Jc(i,e);return t>0?Ns(i,1,n,1,e):Ns(i,n,1,-1,e)}function Ah(i){const t=On(i),e=Jc(i,t);return[...Ns(i,1,e,1,t).slice(0,-1),...or(i),...Ns(i,e,1,-1,t).slice(1)]}function nv(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#f4f4f2",t.fillRect(0,0,256,256),t.fillStyle="#1f5fbf",t.beginPath(),t.moveTo(40,30),t.lineTo(216,30),t.quadraticCurveTo(200,190,128,236),t.quadraticCurveTo(56,190,40,30),t.fill(),t.fillStyle="#d8262b",t.beginPath(),t.moveTo(84,60),t.lineTo(172,60),t.quadraticCurveTo(160,150,128,180),t.quadraticCurveTo(96,150,84,60),t.fill();const e=new Er(i);return e.colorSpace=Ue,e.anisotropy=4,e}function bh(i){const t=Ei(i),e=[];for(let n=0;n<=16;n++){const s=t-2*t*n/16;e.push($t(s,Bu(i,s),i))}return e}function iv(i){const t=i.getAttribute("position"),e=[];for(let n=0;n<t.count;n++)e.push(.5-t.getX(n)/(2*Ts),(t.getZ(n)-ti)/(Hi-ti));return i.setAttribute("uv",new ne(e,2)),i}const Ce=i=>Math.max(.02,Ei(i)-Ax);function sv(i){const t=Ce(i),e=zi(i),n=t-zu;return[$t(t,e,i),$t(n,e,i),$t(n,Vi,i),$t(-n,Vi,i),$t(-n,e,i),$t(-t,e,i)]}function rv(i){const t=Ce(i),e=[];for(let n=0;n<=12;n++){const s=t-2*t*n/12,r=s/t;e.push($t(s,zi(i)+.03*(1-r*r),i))}return e}function Di(i,t,e,n){const s=new A().subVectors(t,i),r=new Rt(new Xc(e,Math.max(.001,s.length()),4,10),n);return r.position.copy(i).add(t).multiplyScalar(.5),r.quaternion.setFromUnitVectors(new A(0,1,0),s.normalize()),r.castShadow=!0,r}function ov(i,t,e){const n=document.createElement("canvas");n.width=n.height=128;const s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,128,128),s.fillStyle=e,s.font="bold 100px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,64,70);const r=new Er(n);return r.colorSpace=Ue,r}const Xu=["#f4f4f4","#222222","#d8262b","#1f5fbf","#f2c230","#1d9a4a"];function qu(i=3){const t=new Pe,e=Xu[i-1],n=new Wt({color:15856110,roughness:.35,side:ye}),s=new Wt({color:13208394,roughness:.45,side:ye}),r=new Wt({map:nv(),roughness:.4,side:ye}),o=new Wt({color:14165547,roughness:.4,side:ye}),a=new Wt({color:10134445,roughness:.8,side:ye}),c=new Wt({color:1781596,roughness:.4,side:ye}),l=new Wt({color:2302755,roughness:.5,metalness:.2}),h=new Wt({color:2898502,roughness:.15,metalness:.3,side:ye}),u=new Wt({color:8948880,roughness:.3,metalness:.8}),d=(q,Y)=>{const tt=new Rt(q,Y);return tt.castShadow=!0,tt.receiveShadow=!0,t.add(tt),tt},f=Xn(vs,rn,16),g=Xn(rn,In,28),_=q=>On(Math.min(q,rn-1e-6));d(yn(f.map(q=>or(q,_(q)))),s),d(yn(g.map(q=>or(q))),s),d(yn([or(rn,bo),or(rn,0)]),s);for(const q of[1,-1])d(yn([...f,...g.slice(1)].map(Y=>ev(Y,q))),n);d(io([...Ah(vs)]),n),d(io([...Ah(In),...bh(In).reverse()]),n),d(yn(Xn(Hi-.05,In,16).map(bh)),n);const m=new Rt(new se(Sx,Ms,Co-Ro),new Wt({color:3815994,roughness:.5}));m.position.set(0,bo-Ms/2,(Ro+Co)/2),t.add(m);const p=Xn(ln,Hi,30);for(const q of[1,-1]){d(yn(p.map(tt=>q>0?[$t(Ce(tt),zi(tt),tt),$t(Ce(tt),ze(tt),tt)]:[$t(-Ce(tt),ze(tt),tt),$t(-Ce(tt),zi(tt),tt)])),n),d(yn(Xn(vs,Hi,30).map(tt=>q>0?[$t(Ei(tt),ze(tt),tt),$t(Ce(tt),ze(tt),tt)]:[$t(-Ce(tt),ze(tt),tt),$t(-Ei(tt),ze(tt),tt)])),n);const Y=(tt,St)=>yn(Xn(tt,St,6).map(_t=>q>0?[$t(Ce(_t)+.003,zi(_t)-.05,_t),$t(Ce(_t)+.003,ze(_t)+.1,_t)]:[$t(-Ce(_t)-.003,ze(_t)+.1,_t),$t(-Ce(_t)-.003,zi(_t)-.05,_t)]));d(Y(-1,-.45),h),d(Y(-.35,.3),h)}d(io([$t(Ce(ln),ze(ln),ln),$t(Ce(ln),fr,ln),$t(-Ce(ln),fr,ln),$t(-Ce(ln),ze(ln),ln)]),n);const y=Xn(ln,ti,16);d(yn(y.map(sv)),a),d(iv(yn(Xn(ti,Hi,20).map(rv))),r);{const q=ti,Y=Ce(q)-zu,tt=[$t(Y,Vi,q),$t(-Y,Vi,q)];for(let St=0;St<=8;St++){const _t=-Y+2*Y*St/8;tt.push($t(_t,zi(q)+.03*(1-(_t/Ce(q))**2)-.002,q))}d(io(tt),a)}const S=Xn(vs,1.3,30);for(const[q,Y,tt]of[[c,.004,.05],[o,.058,.07]])for(const St of[1,-1])d(yn(S.map(_t=>{const Ht=ze(_t),mt=On(_t),Bt=ks(_t,mt),I=Po(_t,1-Y/Bt,mt).x*1.004+.002,Qt=Po(_t,1-tt/Bt,mt).x*1.004+.002;return St>0?[$t(I,Ht-Y,_t),$t(Qt,Ht-tt,_t)]:[$t(-Qt,Ht-tt,_t),$t(-I,Ht-Y,_t)]})),q);const x=new Pe;x.position.set(0,.56,-.02),x.rotation.x=-.9;const P=new Rt(new Zc(.13,.016,8,24),l);x.add(P);const b=new Rt(new se(.24,.02,.012),l);x.add(b),t.add(x),t.add(Di($t(0,Bu(ti,0)-.02,.06),$t(0,.55,-.01),.018,l));const R=new Pe;R.position.copy(Us),t.add(R);const D=new Rt(new se(.2,.12,.08),u);D.position.set(0,-.02,0),R.add(D);const w=new Rt(new jn(.018,.018,.26,10),u);w.rotation.z=Math.PI/2,R.add(w);const M=new Pe;M.position.copy(jc),R.add(M);const C=new Rt(new se(.16,.16,.08),u);C.position.set(0,-.02,.05),M.add(C);const N=new Rt(new Qx(.36,.43,.33,4,.07),l);N.position.set(0,.235,-.165),N.castShadow=!0,M.add(N);const F=new Wt({map:ov(String(i),e,i===1||i===5?"#111":"#fff"),roughness:.4});for(const q of[1,-1]){const Y=new Rt(new ni(.2,.2),F);Y.position.set(q*.182,.25,-.165),Y.rotation.y=q*Math.PI/2,M.add(Y)}const V=new Rt(new se(.07,.6,.12),l);V.position.set(0,-.27,-.13),M.add(V);const G=new Rt(new se(.22,.01,.26),l);G.position.set(0,-.44,-.14),M.add(G);const H=Di($t(0,-.57,0),$t(0,-.57,-.24),.045,l);M.add(H);const nt=new Rt(new se(.014,.12,.12),l);nt.position.set(0,-.66,-.1),M.add(nt);const L=new Pe;L.position.set(0,-.57,-.29);for(let q=0;q<3;q++){const Y=new Rt(new se(.06,.12,.008),u);Y.position.y=.07;const tt=new Pe;tt.rotation.z=q*Math.PI*2/3,Y.rotation.y=.5,tt.add(Y),L.add(tt)}M.add(L);const J=new Pe;J.position.set(0,Vi,-.5),t.add(J);const Q=new Wt({color:e,roughness:.7}),st=new Wt({color:2764602,roughness:.8}),gt=new Wt({color:16185078,roughness:.25}),lt=(q,Y,tt)=>$t(q,Y-Vi,tt+.5);for(const q of[1,-1])J.add(Di(lt(q*.12,.17,-.33),lt(q*.12,.16,-.82),.055,st)),J.add(Di(lt(q*.12,.19,-.33),lt(q*.11,.5,-.66),.075,st)),J.add(Di(lt(q*.19,.9,-.5),lt(q*.22,.72,-.27),.045,Q)),J.add(Di(lt(q*.22,.72,-.27),lt(q*.11,.6,-.06),.04,Q));J.add(Di(lt(0,.52,-.68),lt(0,.9,-.5),.16,Q));const W=new Rt(new yr(.135,20,14),gt);W.position.copy(lt(0,1.08,-.4)),W.castShadow=!0,J.add(W);const X=new Rt(new yr(.137,20,10,Math.PI/2-.9,1.8,1.2,.5),new Wt({color:1118481,roughness:.1,metalness:.5}));return X.position.copy(W.position),J.add(X),{root:t,tilt:R,motor:M,prop:L,rider:J,wheel:x}}function Yu(i,t,e){i.root.position.copy(t.origin),i.root.quaternion.copy(t.quat),i.tilt.rotation.x=(t.tilt-Lo)*Math.PI/180,i.tilt.position.y=Us.y+un.motorHeight,i.motor.rotation.y=t.steerAngle,i.prop.rotation.z+=t.engineOmega*e*.06;for(const o of i.wheel.children)o.rotation.z=-t.steerAngle*2.5;const n=t.riderB.x-En.x,s=t.riderB.y-En.y,r=t.riderB.z-En.z;i.rider.position.set(n*.6,Vi+s*.5,-.5+r*.5),i.rider.rotation.set(r*.9,0,-n*.9)}const Mo=220,Sc=352,so=Mo/Sc,Zu=new Xt(6989532),Qc=new Xt(13624306),ko=new A(-.4,.55,.75).normalize(),Rh=`
  uniform sampler2D uWake;
  uniform vec2 uWakeOrigin;
  uniform float uWakeDx;
  uniform float uWakeN;
  float wakeAt(vec2 xz) {
    vec2 g = (xz - uWakeOrigin) / uWakeDx;
    if (g.x < 1.0 || g.y < 1.0 || g.x > uWakeN - 2.0 || g.y > uWakeN - 2.0) return 0.0;
    return texture2D(uWake, (g + 0.5) / uWakeN).r;
  }
  vec2 wakeGrad(vec2 xz) {
    float e = uWakeDx * 0.5;
    return vec2(wakeAt(xz + vec2(e, 0.0)) - wakeAt(xz - vec2(e, 0.0)), wakeAt(xz + vec2(0.0, e)) - wakeAt(xz - vec2(0.0, e))) / (2.0 * e);
  }
`,av=new A(.95,.38,.32),cv=new Xt(2382170),Ch=.5,Ku="boatgame.waterFx";function lv(){try{return localStorage.getItem(Ku)!=="0"}catch{return!0}}class $u{constructor(t){O(this,"mesh");O(this,"uniforms");O(this,"reflTarget",new si(1,1,{type:Jn}));O(this,"refrTarget",new si(1,1,{type:Jn,depthTexture:new Bc(1,1)}));O(this,"mirror",new sn);O(this,"hidden",[]);O(this,"size",new yt);O(this,"passes",lv());O(this,"waves");O(this,"wakeTex",null);O(this,"wakeHalf",null);this.waves=t;const e=t.waves.length,n=new ni(Mo,Mo,Sc,Sc);n.rotateX(-Math.PI/2);const s=new xc(new Uint16Array(4),2,2,_r,Jn);s.needsUpdate=!0,this.uniforms={uTime:{value:0},uA:{value:Array.from({length:e},()=>new ge)},uB:{value:Array.from({length:e},()=>new ge)},uSun:{value:ko},uSkyTop:{value:Zu},uSkyHorizon:{value:Qc},uFogFar:{value:Mo*.48},uWake:{value:s},uWakeOrigin:{value:new yt(-1e6,-1e6)},uWakeDx:{value:1},uWakeN:{value:2},uRefl:{value:this.reflTarget.texture},uReflMat:{value:new ae},uReflOn:{value:0},uRefr:{value:this.refrTarget.texture},uRefrDepth:{value:this.refrTarget.depthTexture},uRefrOn:{value:0},uRes:{value:new yt(1,1)},uNear:{value:.1},uFar:{value:1e3},uAbsorb:{value:av},uScatter:{value:cv}};const r=new pn({uniforms:this.uniforms,defines:{NW:e},vertexShader:`
        uniform float uTime;
        uniform vec4 uA[NW]; // dirX, dirZ, amp, k
        uniform vec4 uB[NW]; // omega, phase
        ${Rh}
        varying vec3 vWorld;
        varying vec2 vGrad; // 風波の傾き
        varying float vViewZ;
        void main() {
          vec3 p = (modelMatrix * vec4(position, 1.0)).xyz;
          float h = 0.0;
          vec2 d = vec2(0.0);
          for (int i = 0; i < NW; i++) {
            float th = uA[i].w * dot(uA[i].xy, p.xz) - uB[i].x * uTime + uB[i].y;
            h += uA[i].z * sin(th);
            d += uA[i].z * uA[i].w * cos(th) * uA[i].xy;
          }
          p.y += h + wakeAt(p.xz);
          vGrad = d;
          vWorld = p;
          vec4 vp = viewMatrix * vec4(p, 1.0);
          vViewZ = vp.z;
          gl_Position = projectionMatrix * vp;
        }
      `,fragmentShader:`
        #include <packing>
        uniform float uTime;
        uniform sampler2D uRefl;
        uniform mat4 uReflMat;
        uniform float uReflOn;
        uniform sampler2D uRefr;
        uniform sampler2D uRefrDepth;
        uniform float uRefrOn;
        uniform vec2 uRes;
        uniform float uNear;
        uniform float uFar;
        uniform vec3 uAbsorb;
        uniform vec3 uScatter;
        varying float vViewZ;
        uniform vec3 uSun;
        uniform vec3 uSkyTop;
        uniform vec3 uSkyHorizon;
        uniform float uFogFar;
        ${Rh}
        varying vec3 vWorld;
        varying vec2 vGrad;

        // 見た目だけの細かいさざ波
        vec2 ripple(vec2 p, float t) {
          vec2 g = vec2(0.0);
          g += vec2(0.8, 0.6) * cos(dot(p, vec2(2.1, 1.6)) + t * 2.3) * 0.05;
          g += vec2(-0.5, 0.9) * cos(dot(p, vec2(-1.7, 3.1)) - t * 2.9) * 0.04;
          g += vec2(0.95, -0.3) * cos(dot(p, vec2(4.3, -1.2)) + t * 3.7) * 0.03;
          g += vec2(0.2, 1.0) * cos(dot(p, vec2(0.9, 5.6)) - t * 4.1) * 0.025;
          return g;
        }

        void main() {
          float dist = length(cameraPosition - vWorld);
          vec2 wg = wakeGrad(vWorld.xz);
          vec2 grad = vGrad + wg + ripple(vWorld.xz, uTime) * 0.45 * clamp(1.0 - dist / 60.0, 0.15, 1.0);
          vec3 N = normalize(vec3(-grad.x, 1.0, -grad.y));
          vec3 V = normalize(cameraPosition - vWorld);
          vec3 R = reflect(-V, N);
          R.y = abs(R.y);
          vec3 sky = mix(uSkyHorizon, uSkyTop, pow(clamp(R.y, 0.0, 1.0), 0.5));
          float fres = 0.02 + 0.98 * pow(1.0 - clamp(dot(N, V), 0.0, 1.0), 5.0);
          // 波の傾き（水面の法線の横向き成分）。近くほど強く揺らす
          vec2 tilt = N.xz * clamp(1.0 - dist / 120.0, 0.2, 1.0);

          // 反射: 鏡のカメラで描いた絵を、水面の傾きで揺らして読む（反射の絵がなければ空の色）
          vec3 refl = sky;
          if (uReflOn > 0.5) {
            vec4 rc = uReflMat * vec4(vWorld.x, 0.0, vWorld.z, 1.0);
            vec2 ruv = rc.xy / rc.w * 0.5 + 0.5 + tilt * 0.12;
            refl = texture2D(uRefl, clamp(ruv, 0.001, 0.999)).rgb;
          }

          // 透過: 水の下に見えるもの。水の中を通る距離だけ光が吸われ、濁りの色に近づく
          vec3 deep = vec3(0.03, 0.17, 0.22);
          vec3 shallow = vec3(0.08, 0.32, 0.36);
          float facing = clamp(dot(N, uSun) * 0.5 + 0.5, 0.0, 1.0);
          vec3 body = mix(deep, shallow, facing * 0.6);
          if (uRefrOn > 0.5) {
            vec2 suv = gl_FragCoord.xy / uRes;
            float waterD = -vViewZ;
            vec2 off = tilt * 0.06;
            float sceneD = -perspectiveDepthToViewZ(texture2D(uRefrDepth, suv + off).r, uNear, uFar);
            // ずらした先が水より手前の物（水面より上の船体など）なら、ずらさずに読む
            if (sceneD < waterD) {
              off = vec2(0.0);
              sceneD = -perspectiveDepthToViewZ(texture2D(uRefrDepth, suv).r, uNear, uFar);
            }
            float thick = clamp(sceneD - waterD, 0.0, 40.0);
            vec3 under = texture2D(uRefr, suv + off).rgb;
            vec3 keep = exp(-thick * uAbsorb);
            body = under * keep + uScatter * (1.0 - exp(-thick * 0.8));
            // 太陽に向いた波は少し明るく（水の中で散る光）
            body *= 0.85 + 0.3 * facing;
          }
          vec3 col = mix(body, refl, fres);
          float spec = pow(max(dot(R, uSun), 0.0), 300.0) * 1.4 + pow(max(dot(R, uSun), 0.0), 24.0) * 0.08;
          col += vec3(1.0, 0.96, 0.88) * spec;
          // 引き波の急な斜面は白く砕ける
          float foam = smoothstep(0.07, 0.2, length(wg));
          col = mix(col, vec3(0.9, 0.95, 0.97), foam * 0.55);
          float fog = smoothstep(uFogFar * 0.35, uFogFar, dist);
          col = mix(col, uSkyHorizon, fog);
          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }
      `});this.mesh=new Rt(n,r),this.mesh.frustumCulled=!1}updateWake(t){const e=t.n;(!this.wakeTex||!this.wakeHalf||this.wakeHalf.length!==e*e)&&(this.wakeHalf=new Uint16Array(e*e),this.wakeTex=new xc(this.wakeHalf,e,e,_r,Jn),this.wakeTex.magFilter=fn,this.wakeTex.minFilter=fn,this.uniforms.uWake.value=this.wakeTex,this.uniforms.uWakeDx.value=t.dx,this.uniforms.uWakeN.value=e);const n=t.h,s=this.wakeHalf;for(let r=0;r<s.length;r++)s[r]=Mf.toHalfFloat(n[r]);this.wakeTex.needsUpdate=!0,this.uniforms.uWakeOrigin.value.set(t.originX,t.originZ)}hide(...t){this.hidden.push(...t)}renderPasses(t,e,n){const s=this.uniforms;if(!this.passes){s.uReflOn.value=s.uRefrOn.value=0;return}t.getDrawingBufferSize(this.size),s.uRes.value.copy(this.size);const r=Math.max(1,Math.floor(this.size.x*Ch)),o=Math.max(1,Math.floor(this.size.y*Ch));(this.reflTarget.width!==r||this.reflTarget.height!==o)&&(this.reflTarget.setSize(r,o),this.refrTarget.setSize(r,o));const a=this.hidden.map(u=>u.visible);this.mesh.visible=!1;for(const u of this.hidden)u.visible=!1;const c=t.shadowMap.autoUpdate;t.shadowMap.autoUpdate=!1;const l=t.getRenderTarget();n.updateMatrixWorld(),t.setRenderTarget(this.refrTarget),t.clear(),t.render(e,n),s.uNear.value=n.near,s.uFar.value=n.far,s.uRefrOn.value=1;const h=n.position;if(h.y>.05){const u=this.mirror;u.copy(n,!1),u.position.set(h.x,-h.y,h.z);const d=new A(0,0,-1).applyQuaternion(n.quaternion),f=new A(0,1,0).applyQuaternion(n.quaternion);d.y=-d.y,f.y=-f.y,u.up.copy(f),u.lookAt(u.position.clone().add(d)),u.projectionMatrix.copy(n.projectionMatrix),u.updateMatrixWorld(),u.matrixWorldInverse.copy(u.matrixWorld).invert(),s.uReflMat.value.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse);const g=t.clippingPlanes;t.clippingPlanes=[new Zn(new A(0,1,0),.05)],t.setRenderTarget(this.reflTarget),t.clear();const _=e.userData.sky,m=_==null?void 0:_.position.clone();_==null||_.position.copy(u.position),t.render(e,u),_&&m&&_.position.copy(m),t.clippingPlanes=g,s.uReflOn.value=1}else s.uReflOn.value=0;t.setRenderTarget(l),t.shadowMap.autoUpdate=c,this.mesh.visible=!0,this.hidden.forEach((u,d)=>u.visible=a[d])}update(t,e){this.uniforms.uTime.value=t;const n=this.uniforms.uA.value,s=this.uniforms.uB.value;this.waves.waves.forEach((r,o)=>{n[o].set(r.dirX,r.dirZ,r.amp*this.waves.scale,r.k),s[o].set(r.omega,r.phase,0,0)}),this.mesh.position.set(Math.round(e.x/so)*so,0,Math.round(e.z/so)*so)}}function ju(){const i=new Is(1500,48);i.rotateX(-Math.PI/2);const t=new Fc({color:new Xt(10470612),fog:!0}),e=new Rt(i,t);return e.position.y=-1.6,e}const Un=[new A(0,0,150),new A(0,0,-150)],Ec=0,Dt={x0:-45,x1:85,z0:-215,z1:200},en=.8,Ph=3,Ui=Un[1].z+120,ar=6,cr=4.5,nn=7,hv=ar*cr+1,uv=[16053492,2236962,14165547,2056127,15909424,1940042],dv=["#f4f4f4","#222222","#d8262b","#1f5fbf","#f2c230","#1d9a4a"];function fv(i,t,e,n,s){const r=document.createElement("canvas");r.width=n,r.height=s;const o=r.getContext("2d");o.fillStyle=t,o.fillRect(0,0,n,s),o.fillStyle=e,o.font=`bold ${Math.floor(s*.72)}px sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillText(i,n/2,s*.54,n*.94);const a=new Er(r);return a.colorSpace=Ue,a.anisotropy=4,a}function pv(i,t,e){const n=document.createElement("canvas");n.width=256,n.height=256;const s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,256,256),s.fillStyle=e,s.font="bold 120px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,128,80);const r=new Er(n);return r.colorSpace=Ue,r}function mv(){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d");e.fillStyle="#111",e.fillRect(0,0,512,512),e.translate(512/2,512/2),e.fillStyle="#f2c230";for(let l=0;l<12;l++)e.save(),e.rotate(l/12*Math.PI*2),e.beginPath(),e.moveTo(0,-512*.46),e.lineTo(-512*.035,-512*.38),e.lineTo(512*.035,-512*.38),e.closePath(),e.fill(),e.restore();e.fillStyle="#fff",e.font=`bold ${512*.11}px sans-serif`,e.textAlign="center",e.textBaseline="middle";const n=(l,h)=>[Math.sin((12-l)/12*Math.PI*2)*h,-Math.cos((12-l)/12*Math.PI*2)*h],[s,r]=n(5,512*.27),[o,a]=n(10,512*.27);e.fillText("5",s,r),e.fillText("10",o,a);const c=new Er(t);return c.colorSpace=Ue,c}class Ju{constructor(t){O(this,"group",new Pe);O(this,"floaters",[]);O(this,"floorTime",{value:0});O(this,"clockHand",null);O(this,"waves");this.waves=t;for(const f of Un)this.addMark(f.x,f.z);const e=new Wt({color:11117980,roughness:1}),n=new Lu;n.moveTo(-1400,-1400),n.lineTo(1400,-1400),n.lineTo(1400,1400),n.lineTo(-1400,1400),n.lineTo(-1400,-1400);const s=new Ao;s.moveTo(Dt.x0,Dt.z0),s.lineTo(Dt.x0,Dt.z1),s.lineTo(Dt.x1,Dt.z1),s.lineTo(Dt.x1,Dt.z0),s.lineTo(Dt.x0,Dt.z0),n.holes.push(s);const r=new Yc(n);r.rotateX(Math.PI/2);const o=new Rt(r,new Wt({color:9210498,roughness:1,side:ye}));o.position.y=en,o.receiveShadow=!0,this.group.add(o);const a=en+Ph,c=[[Dt.x0-.3,(Dt.z0+Dt.z1)/2,.6,Dt.z1-Dt.z0],[Dt.x1+.3,(Dt.z0+Dt.z1)/2,.6,Dt.z1-Dt.z0],[(Dt.x0+Dt.x1)/2,Dt.z0-.3,Dt.x1-Dt.x0,.6],[(Dt.x0+Dt.x1)/2,Dt.z1+.3,Dt.x1-Dt.x0,.6]];for(const[f,g,_,m]of c){const p=new Rt(new se(_,a,m),e);p.position.set(f,en-a/2,g),this.group.add(p)}const l=new Wt({color:9081227,roughness:1});l.onBeforeCompile=f=>{f.uniforms.uTime=this.floorTime,f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
          varying vec3 vFloorW;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
          vFloorW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
          uniform float uTime;
          varying vec3 vFloorW;
          // 3つの波模様を重ねた明るい網目
          float causticAt(vec2 p, float t) {
            float c = 0.0;
            for (int i = 0; i < 3; i++) {
              float fi = float(i);
              vec2 q = p * (0.55 + fi * 0.37) + vec2(sin(t * 0.6 + fi * 1.7), cos(t * 0.5 + fi * 2.3)) * 1.3;
              c += pow(abs(sin(q.x + sin(q.y * 1.3 + t)) * sin(q.y + sin(q.x * 1.1 - t * 0.8))), 6.0);
            }
            return c;
          }`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
          gl_FragColor.rgb *= 0.8 + 1.1 * causticAt(vFloorW.xz, uTime);`)};const h=new Rt(new ni(Dt.x1-Dt.x0,Dt.z1-Dt.z0),l);h.rotation.x=-Math.PI/2,h.position.set((Dt.x0+Dt.x1)/2,-Ph,(Dt.z0+Dt.z1)/2),this.group.add(h);const u=new Wt({color:15263976,roughness:.6}),d=new Rt(new se(.08,.08,Dt.z1-Dt.z0),u);d.position.set(Dt.x0-.5,en+1.1,(Dt.z0+Dt.z1)/2),this.group.add(d),this.addStand(),this.addPit(),this.addClock(),this.addDistanceSigns(),this.addBoard(),this.addCity()}addStand(){const t=new Pe,e=new Wt({color:15000284,roughness:.8}),n=new Wt({color:6127513,roughness:.15,metalness:.4}),s=new Wt({color:5204874,roughness:.9}),r=new Wt({color:13225168,roughness:.6}),o=260;for(let l=0;l<5;l++){const h=new Rt(new se(1.6,.45,o),l%2?e:s);h.position.set(-48-l*1.6,en+.22+l*.45,0),t.add(h)}[{x:-58,w:8,h:6},{x:-61,w:14,h:6},{x:-64,w:20,h:6},{x:-67,w:26,h:6}].forEach((l,h)=>{const u=en+2.2+h*6,d=new Rt(new se(l.w,l.h,o),e);d.position.set(l.x-l.w/2+4,u+l.h/2,0),d.castShadow=!0,t.add(d);const f=new Rt(new se(.1,l.h*.6,o-4),n);f.position.set(l.x+4.06,u+l.h*.55,0),t.add(f)});const c=new Rt(new se(34,.8,o+6),r);c.position.set(-76,en+2.2+24.4,0),t.add(c),this.group.add(t)}addPit(){const t=new Pe,e=new Wt({color:10131600,roughness:1}),n=Dt.x0,s=ar*cr,r=new Rt(new se(nn,.5,s+1),e);r.position.set(n+nn/2-2.5,.05,Ui),t.add(r);for(let l=0;l<=ar;l++){const h=new Rt(new se(4,.35,.5),e);h.position.set(n+nn-.5,.05,Ui-s/2+l*cr),t.add(h)}for(let l=0;l<ar;l++){const h=ar-l,u=uv[h-1],d=new Wt({color:u,roughness:.55}),f=Ui-s/2+(l+.5)*cr,g=new Pe,_=cr-.6;for(const S of[-1,1]){const x=new Rt(new se(nn-2,1.6,.25),d);x.position.set(0,1.1,S*_/2),g.add(x)}const m=new Rt(new jn(_/2,_/2,nn-2,20,1,!0,0,Math.PI),d);m.rotation.set(0,0,Math.PI/2),m.rotation.order="ZYX",m.position.set(0,1.9,0),m.material.side=ye,g.add(m);const p=h===1||h===5?"#111":"#fff",y=new Rt(new Is(_/2,24,0,Math.PI),new Wt({map:pv(String(h),dv[h-1],p),roughness:.6}));y.rotation.y=Math.PI/2,y.position.set((nn-2)/2+.01,1.9,0),g.add(y),g.position.set(n+nn/2-2,.3,f),t.add(g)}const o=new Rt(new se(nn+1,.3,s+2),new Wt({color:4020858,roughness:.6}));o.position.set(n+nn/2-2.5,4.6,Ui),t.add(o);const a=new Rt(new ni(s,1.4),new Wt({map:fv("BOAT RACE 住之江　ピット","#3d5a7a","#fff",1024,64),roughness:.6}));a.rotation.y=Math.PI/2,a.position.set(n+nn-1.99,5.3,Ui),t.add(a);const c=new Rt(new se(.2,1.4,s),new Wt({color:2901344}));c.position.set(n+nn-2.1,5.3,Ui),t.add(c);for(const l of t.children)l.castShadow=!0;this.group.add(t)}addClock(){const t=new Pe,e=new Wt({color:1973790,roughness:.7}),n=new Wt({color:5593695,roughness:.6,metalness:.3});for(const h of[-2.6,2.6]){const u=new Rt(new se(.5,6,.5),n);u.position.set(0,3,h),t.add(u)}const s=new Rt(new se(.5,6,6),e);s.position.set(0,8,0),t.add(s);const r=new Rt(new Is(2.5,48),new Wt({map:mv(),roughness:.5}));r.rotation.y=-Math.PI/2,r.position.set(-.26,8,0),t.add(r);const o=new Pe,a=new Rt(new se(.05,2.2,.18),new Wt({color:16777215,roughness:.4,emissive:2236962}));a.position.y=1,o.add(a);const c=new Rt(new jn(.2,.2,.08,16),new Wt({color:14540253}));c.rotation.z=Math.PI/2,o.add(c),o.position.set(-.32,8,0),t.add(o),this.clockHand=o;const l=new Rt(new se(.4,2,1.5),new Wt({color:14540253,roughness:.4}));l.position.set(0,7.5,4.2),t.add(l),t.position.set(Dt.x1+3,en,Ec+6);for(const h of t.children)h.castShadow=!0;this.group.add(t)}addDistanceSigns(){const t=new Wt({color:9080724,roughness:.6,metalness:.3}),e=12,n=3,s=1.5,r=new ve;r.setAttribute("position",new ne([-.35,0,0,.35,0,0,0,-.75,0],3)),r.setIndex([0,2,1]),r.computeVertexNormals();const o=new Wt({roughness:.8,side:ye}),a=Dt.x0-.8,c=Dt.x1+.8,l=en+e,h=_=>{const m=(_-a)/(c-a);return l-.3-n*4*m*(1-m)},u=Math.floor((c-a)/s)-1,d=new ae,f=new Xt(14165547),g=new Xt(16053492);for(const _ of[50,100,150]){const m=Ec-_;for(const S of[a,c]){const x=new Rt(new jn(.12,.16,e,10),t);x.position.set(S,en+e/2,m),x.castShadow=!0,this.group.add(x)}const p=[];for(let S=0;S<=40;S++){const x=a+(c-a)*S/40;p.push(new A(x,h(x),m))}this.group.add(new Au(new ve().setFromPoints(p),new Vc({color:3355443})));const y=new v_(r,o,u);for(let S=0;S<u;S++){const x=a+s*(S+1),P=(h(x+.1)-h(x-.1))/.2;d.makeRotationZ(Math.atan(P)).setPosition(x,h(x),m),y.setMatrixAt(S,d),y.setColorAt(S,S%2?g:f)}y.castShadow=!0,this.group.add(y)}}setClock(t){if(!this.clockHand)return;const e=(t%12+12)%12/12;this.clockHand.rotation.x=e*Math.PI*2}addBoard(){const t=new Rt(new se(1.2,14,70),new Wt({color:2764083,roughness:.7}));t.position.set(Dt.x1+8,en+9,0),this.group.add(t);const e=new Rt(new ni(66,11),new Wt({color:1318958,emissive:1914192,roughness:.4}));e.rotation.y=-Math.PI/2,e.position.set(Dt.x1+7.35,en+9.5,0),this.group.add(e)}addCity(){const t=[12040637,13222840,10462893,14079698].map(s=>new Wt({color:s,roughness:.9}));let e=12345;const n=()=>(e=e*16807%2147483647)%1e4/1e4;for(let s=0;s<140;s++){const r=n()*Math.PI*2,o=330+n()*700,a=Math.cos(r)*o,c=Math.sin(r)*o,l=12+n()**2*90,h=20+n()*40,u=new Rt(new se(h,l,20+n()*40),t[s%t.length]);u.position.set(a,en+l/2,c),u.rotation.y=n()*Math.PI,this.group.add(u)}}addMark(t,e){const n=new Pe,s=new Wt({color:15895070,roughness:.5}),r=new Wt({color:16119285,roughness:.5}),o=new Rt(new jn(.7,.8,1.8,24),s);o.position.y=.6,n.add(o);const a=new Rt(new jn(.71,.75,.35,24),r);a.position.y=.7,n.add(a);const c=new Rt(new qc(.7,.5,24),s);c.position.y=1.75,n.add(c);for(const l of n.children)l.castShadow=!0;this.group.add(n),this.floaters.push({obj:n,x:t,z:e,draft:.2})}update(t){this.floorTime.value=t;for(const e of this.floaters)e.obj.position.set(e.x,this.waves.height(e.x,e.z,t)-e.draft,e.z)}}const nr=160,Lh=5,gv=.035;class Qu{constructor(t){O(this,"mesh");O(this,"points",[]);O(this,"lastAdd",-1);O(this,"pos");O(this,"across");O(this,"waves");this.waves=t,this.pos=new Float32Array(nr*2*3),this.across=new Float32Array(nr*2*3);const e=[];for(let r=0;r<nr-1;r++){const o=r*2;e.push(o,o+2,o+1,o+1,o+2,o+3)}const n=new ve;n.setAttribute("position",new Ve(this.pos,3).setUsage(lr)),n.setAttribute("aWake",new Ve(this.across,3).setUsage(lr)),n.setIndex(e);const s=new pn({transparent:!0,depthWrite:!1,side:ye,vertexShader:`
        attribute vec3 aWake;
        varying vec3 vWake;
        varying vec2 vXZ;
        void main() {
          vWake = aWake;
          vXZ = position.xz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vWake;
        varying vec2 vXZ;
        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p) {
          vec2 i = floor(p), f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
        }
        void main() {
          float u = abs(vWake.x);
          float age = vWake.y;
          float n = noise(vXZ * 3.0) * 0.6 + noise(vXZ * 9.0) * 0.4;
          // 両端の白波（年齢とともに細く薄く）
          float edgeW = mix(0.12, 0.05, age);
          float edge = smoothstep(1.0, 1.0 - edgeW * 0.5, u) * smoothstep(1.0 - edgeW * 1.6, 1.0 - edgeW * 0.6, u);
          // 中央のプロペラ流（若いうちだけ）
          float center = smoothstep(0.16, 0.0, u / max(0.3, 1.0 - age)) * (1.0 - age);
          float foam = max(edge * 0.9, center * 0.8) * smoothstep(0.25, 0.65, n + 0.25 * (1.0 - age));
          float a = foam * pow(1.0 - age, 1.3) * vWake.z;
          gl_FragColor = vec4(vec3(0.96, 0.98, 1.0), a * 0.7);
        }
      `});this.mesh=new Rt(n,s),this.mesh.frustumCulled=!1}add(t,e,n,s){if(t-this.lastAdd<gv)return;this.lastAdd=t;const r=Math.hypot(n.x,n.z)||1;this.points.unshift({x:e.x,z:e.z,sx:n.x/r,sz:n.z/r,born:t,strength:s}),this.points.length>nr&&this.points.pop()}clear(){this.points=[]}update(t){for(;this.points.length&&t-this.points[this.points.length-1].born>Lh;)this.points.pop();const e=this.points.length;for(let s=0;s<nr;s++){const r=s*6;if(e===0){this.across[r+2]=this.across[r+5]=0;continue}const o=this.points[Math.min(s,e-1)],a=Math.min(1,(t-o.born)/Lh),c=.45+Math.sqrt(a)*4.5,l=this.waves.height(o.x,o.z,t)+.03;this.pos[r]=o.x+o.sx*c,this.pos[r+1]=l,this.pos[r+2]=o.z+o.sz*c,this.pos[r+3]=o.x-o.sx*c,this.pos[r+4]=l,this.pos[r+5]=o.z-o.sz*c;const h=s<e?o.strength:0;this.across.set([1,a,h,-1,a,h],r)}const n=this.mesh.geometry;n.attributes.position.needsUpdate=!0,n.attributes.aWake.needsUpdate=!0}}const ro=60,Dh=70,_v=30,xv=1.5;class vv{constructor(t){O(this,"input",{steer:0,throttle:0,leanX:0,leanZ:0});O(this,"lever",0);O(this,"tiltActive",!1);O(this,"tiltDeg",0);O(this,"touches",new Map);O(this,"keys",new Set);O(this,"layer");O(this,"leanPad");O(this,"leanKnob");O(this,"leverTrack");O(this,"steerPad");O(this,"steerKnob");O(this,"tiltAngle",0);O(this,"tiltZero",0);O(this,"tiltSmoothed",0);O(this,"lastMotion",0);this.layer=t,this.leanPad=document.getElementById("lean-pad"),this.leanKnob=this.leanPad.querySelector(".knob"),this.leverTrack=document.getElementById("lever"),this.steerPad=document.getElementById("steer-pad"),this.steerKnob=this.steerPad.querySelector(".knob"),t.addEventListener("pointerdown",e=>this.down(e)),t.addEventListener("pointermove",e=>this.move(e)),t.addEventListener("pointerup",e=>this.up(e)),t.addEventListener("pointercancel",e=>this.up(e)),window.addEventListener("keydown",e=>this.keys.add(e.code)),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),window.addEventListener("devicemotion",e=>this.onMotion(e))}async enableTilt(){const t=window.DeviceMotionEvent;if(t!=null&&t.requestPermission)try{if(await t.requestPermission()!=="granted")return!1}catch{return!1}for(let e=0;e<15;e++){if(performance.now()-this.lastMotion<500)return this.recenter(),!0;await new Promise(n=>setTimeout(n,100))}return!1}recenter(){this.tiltZero=this.tiltAngle,this.tiltSmoothed=0}onMotion(t){var o;const e=t.accelerationIncludingGravity;if(!e||e.x==null||e.y==null)return;const n=(((o=screen.orientation)==null?void 0:o.angle)??window.orientation??0)*Math.PI/180,s=e.x*Math.cos(n)-e.y*Math.sin(n),r=e.x*Math.sin(n)+e.y*Math.cos(n);Math.hypot(s,r)<2||(this.tiltAngle=Math.atan2(-s,r)*180/Math.PI,this.lastMotion=performance.now())}zoneOf(t){const e=window.innerWidth;return t<e*.38?"lever":!this.tiltActive&&t<e*.68?"steer":"lean"}down(t){t.preventDefault();const e=this.zoneOf(t.clientX);for(const n of this.touches.values())if(n.role===e)return;try{this.layer.setPointerCapture(t.pointerId)}catch{}this.touches.set(t.pointerId,{id:t.pointerId,role:e,x0:t.clientX,y0:t.clientY,x:t.clientX,y:t.clientY,lever0:this.lever}),e==="lean"&&this.placePad(this.leanPad,t.clientX,t.clientY),e==="steer"&&this.placePad(this.steerPad,t.clientX,t.clientY),e==="lever"&&this.leverTrack.classList.add("active")}placePad(t,e,n){t.style.left=`${e}px`,t.style.top=`${n}px`,t.classList.add("active")}move(t){const e=this.touches.get(t.pointerId);if(e&&(e.x=t.clientX,e.y=t.clientY,e.role==="lever")){const n=this.leverTrack.getBoundingClientRect().height||200;this.lever=Math.max(0,Math.min(1,e.lever0-(e.y-e.y0)/n))}}up(t){const e=this.touches.get(t.pointerId);e&&(this.touches.delete(t.pointerId),e.role==="lean"&&this.resetPad(this.leanPad,this.leanKnob),e.role==="steer"&&this.resetPad(this.steerPad,this.steerKnob),e.role==="lever"&&this.leverTrack.classList.remove("active"))}resetPad(t,e){t.classList.remove("active"),t.style.left=t.style.top="",e.style.transform=""}update(t){const e=u=>this.keys.has(u),n=Math.exp(-t/.25);let s=this.input.leanX*n,r=this.input.leanZ*n,o=0;for(const u of this.touches.values()){const d=u.x-u.x0,f=u.y-u.y0;u.role==="lean"?(s=Math.max(-1,Math.min(1,d/ro)),r=Math.max(-1,Math.min(1,-f/ro)),this.leanKnob.style.transform=`translate(${s*ro}px, ${-r*ro}px)`):u.role==="steer"&&(o=Math.max(-1,Math.min(1,d/Dh)),this.steerKnob.style.transform=`translateX(${o*Dh}px)`)}if(this.tiltActive){let u=this.tiltAngle-this.tiltZero;u=(u+540)%360-180,this.tiltDeg=u,u=Math.sign(u)*Math.max(0,Math.abs(u)-xv);const d=Math.max(-1,Math.min(1,u/_v));this.tiltSmoothed+=(d-this.tiltSmoothed)*(1-Math.exp(-t*20)),o=this.tiltSmoothed}const a=(e("ArrowRight")||e("KeyD")?1:0)-(e("ArrowLeft")||e("KeyA")?1:0),c=(e("KeyE")?1:0)-(e("KeyQ")?1:0),l=(e("KeyR")?1:0)-(e("KeyF")?1:0),h=1-Math.exp(-t*8);a&&(o=this.input.steer+(a-this.input.steer)*h),(c||l)&&(s=this.input.leanX+(c-this.input.leanX)*h,r=this.input.leanZ+(l-this.input.leanZ)*h),(e("ArrowUp")||e("KeyW"))&&(this.lever=Math.min(1,this.lever+t*1.5)),(e("ArrowDown")||e("KeyS"))&&(this.lever=Math.max(0,this.lever-t*1.5)),this.input.steer=o,this.input.leanX=s,this.input.leanZ=r,this.input.throttle=this.lever,this.leverTrack.querySelector(".fill").style.height=`${this.lever*100}%`,this.leverTrack.querySelector(".knob").style.bottom=`${this.lever*100}%`}}const Cn=5e3,Ih=9.81,Ie={Spray:0,Mist:1,Foam:2,Boil:3};class td{constructor(t){O(this,"points");O(this,"pos",new Float32Array(Cn*3));O(this,"vel",new Float32Array(Cn*3));O(this,"size",new Float32Array(Cn));O(this,"alpha",new Float32Array(Cn));O(this,"size0",new Float32Array(Cn));O(this,"life",new Float32Array(Cn));O(this,"maxLife",new Float32Array(Cn));O(this,"kind",new Uint8Array(Cn));O(this,"next",0);O(this,"material");O(this,"surface");O(this,"budget",0);O(this,"left",new A);O(this,"tmp",new A);this.surface=t;const e=new ve;e.setAttribute("position",new Ve(this.pos,3).setUsage(lr)),e.setAttribute("aSize",new Ve(this.size,1).setUsage(lr)),e.setAttribute("aAlpha",new Ve(this.alpha,1).setUsage(lr)),this.material=new pn({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:400}},vertexShader:`
        uniform float uScale;
        attribute float aSize;
        attribute float aAlpha;
        varying float vAlpha;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = aAlpha > 0.0 ? min(256.0, aSize * uScale / max(0.1, -mv.z)) : 0.0;
          vAlpha = aAlpha;
        }
      `,fragmentShader:`
        varying float vAlpha;
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0;
          float a = smoothstep(1.0, 0.35, d) * vAlpha;
          if (a < 0.01) discard;
          gl_FragColor = vec4(0.95, 0.98, 1.0, a);
          #include <colorspace_fragment>
        }
      `}),this.points=new S_(e,this.material),this.points.frustumCulled=!1}resize(t,e,n){this.material.uniforms.uScale.value=t*n/(2*Math.tan(e*Math.PI/360))}clear(){this.alpha.fill(0),this.life.fill(0)}spawn(t,e,n,s,r,o,a,c,l){if(this.budget<=0)return;this.budget--;const h=this.next;this.next=(this.next+1)%Cn;const u=h*3;this.pos[u]=e,this.pos[u+1]=n,this.pos[u+2]=s,this.vel[u]=r,this.vel[u+1]=o,this.vel[u+2]=a,this.kind[h]=t,this.size0[h]=c,this.size[h]=c,this.life[h]=l,this.maxLife[h]=l,this.alpha[h]=1}count(t){if(!(t>0))return 0;const e=Math.floor(Math.min(t,this.budget));return e+(e<this.budget&&Math.random()<t-e?1:0)}update(t,e,n){this.emit(t,e,n,600),this.step(t,e)}emit(t,e,n,s){this.budget=s,this.emitHull(t,e,n),this.emitProp(t,e,n)}emitHull(t,e,n){const s=n.hullFx,r=Sr.FX_STRIDE;this.left.set(1,0,0).applyQuaternion(n.quat);const o=this.left.x,a=this.left.z,c=Math.hypot(o,a)||1,l=n.vel;for(let h=0;h<n.hull.length;h++){const u=n.hull[h],d=h*r,f=s[d],g=s[d+1],_=s[d+2],m=n.impact[h];m>0&&(n.impact[h]=0,m>.7&&this.splash(f,_,e,m,u.area,l));const p=s[d+11];if(p<=0)continue;const y=s[d+3],S=s[d+4],x=s[d+5],P=s[d+10],b=s[d+6],R=s[d+7],D=s[d+8],w=y-P*b,M=S-P*R,C=x-P*D,N=Math.hypot(w,M,C),F=Math.max(0,P),V=this.surface.height(f,_,e);if(u.side!==0){const G=o/c*u.side,H=a/c*u.side,nt=Math.max(0,y*G+x*H);if(N<2.5&&nt<.8&&F<.6)continue;const L=1+1.5*(1-p),J=u.area*p*L*(.35*N+3*nt+5*F),Q=.16*N+1.1*nt+.6*F,st=.09*N+.9*nt+1.4*F,gt=this.count(J*t*90),lt=l.x*.04,W=l.z*.04;for(let X=0;X<gt;X++){const q=.7+Math.random()*.6,Y=(Math.random()-.5)*.2;this.spawn(Ie.Spray,f+G*.04+this.left.z*Y,Math.max(g,V)+.02,_+H*.04-this.left.x*Y,G*Q*q+lt+(Math.random()-.5)*.3*Q,st*(.6+Math.random()*.8),H*Q*q+W+(Math.random()-.5)*.3*Q,.035+Math.random()*.07,1.5),Math.random()<.2&&this.spawn(Ie.Mist,f+G*.1,Math.max(g,V)+.05,_+H*.1,G*Q*.6,st*.5,H*Q*.6,.35+Math.random()*.4,.9+Math.random()*.6)}}else if(F>.8){const G=this.count(u.area*F*F*t*40);for(let H=0;H<G;H++){const nt=Math.random()*Math.PI*2,L=F*(.3+Math.random()*.5);this.spawn(Ie.Spray,f,Math.max(g,V)+.02,_,Math.cos(nt)*L+l.x*.1,F*(.8+Math.random()*.8),Math.sin(nt)*L+l.z*.1,.05+Math.random()*.08,1.5)}}}}splash(t,e,n,s,r,o){const a=this.surface.height(t,e,n),c=Math.min(70,Math.round(s*s*r*45));for(let h=0;h<c;h++){const u=Math.random()*Math.PI*2,d=s*(.35+Math.random()*.75);this.spawn(Ie.Spray,t+Math.cos(u)*.15,a+.03,e+Math.sin(u)*.15,Math.cos(u)*d+o.x*.15,s*(.5+Math.random()*.8),Math.sin(u)*d+o.z*.15,.05+Math.random()*.1,1.5)}const l=Math.min(8,Math.round(s*r*6));for(let h=0;h<l;h++){const u=Math.random()*Math.PI*2;this.spawn(Ie.Mist,t,a+.1,e,Math.cos(u)*s*.4+o.x*.1,s*.35,Math.sin(u)*s*.4+o.z*.1,.5+Math.random()*.5,.8+Math.random()*.5)}for(let h=0;h<4;h++){const u=Math.random()*Math.PI*2;this.spawn(Ie.Foam,t+Math.cos(u)*.3,a,e+Math.sin(u)*.3,Math.cos(u)*.4,0,Math.sin(u)*.4,.35+Math.random()*.3,2+Math.random())}}emitProp(t,e,n){const s=n.propState,r=n.engineOmega/(2*Math.PI);if(r<5)return;const o=n.prop.diameter,a=n.propPos,c=n.propAxis,l=n.vel,h=this.surface.height(a.x,a.z,e),u=Math.PI*r*o,d=Math.max(0,Math.min(1,(.9-s.tipRatio)/.9)),f=n.propJet,g=d*d*r*4*(1+2*s.vent)*Math.min(1,n.throttle+.2),_=this.count(g*t);for(let y=0;y<_;y++){const S=u*.12*d*(.6+Math.random()*.7),x=(Math.random()-.5)*u*.08*d;this.spawn(Ie.Spray,a.x-c.x*.2,h+.03,a.z-c.z*.2,l.x*.15-c.x*f+c.z*x,S,l.z*.15-c.z*f-c.x*x,.06+Math.random()*.1,2),Math.random()<.15&&this.spawn(Ie.Mist,a.x-c.x*.4,h+.2,a.z-c.z*.4,l.x*.1,S*.5,l.z*.1,.5+Math.random()*.5,1+Math.random()*.5)}const m=s.cav*70+s.vent*140,p=this.count(m*t*Math.min(1,r/60));for(let y=0;y<p;y++){const S=.3+Math.random()*.6,x=(Math.random()-.5)*.35,P=a.x-c.x*S+c.z*x,b=a.z-c.z*S-c.x*x;this.spawn(Ie.Boil,P,this.surface.height(P,b,e)+.02,b,-c.x*f*.4,0,-c.z*f*.4,.22+Math.random()*.25,.5+Math.random()*.6)}}step(t,e){const{pos:n,vel:s,life:r,maxLife:o,kind:a,alpha:c,size:l,size0:h}=this;for(let d=0;d<Cn;d++){if(r[d]<=0)continue;r[d]-=t;const f=d*3,g=1-r[d]/o[d];if(r[d]<=0){c[d]=0;continue}const _=a[d];if(_===Ie.Spray||_===Ie.Mist){const m=_===Ie.Spray?.5:2.5,p=Math.exp(-m*t);if(s[f]*=p,s[f+2]*=p,s[f+1]=s[f+1]*p-(_===Ie.Spray?Ih:Ih*.15)*t,n[f]+=s[f]*t,n[f+1]+=s[f+1]*t,n[f+2]+=s[f+2]*t,_===Ie.Spray){if(c[d]=.85*Math.min(1,r[d]/.2),s[f+1]<0){const y=this.surface.height(n[f],n[f+2],e);if(n[f+1]<y){r[d]=0,c[d]=0,Math.random()<.18&&this.spawnFoam(n[f],y,n[f+2]);continue}}}else c[d]=.22*(1-g),l[d]=h[d]*(1+g*1.5)}else{const m=Math.exp(-2*t);s[f]*=m,s[f+2]*=m,n[f]+=s[f]*t,n[f+2]+=s[f+2]*t,n[f+1]=this.surface.height(n[f],n[f+2],e)+.02,l[d]=h[d]*(1+g*(_===Ie.Boil?1.2:.8)),c[d]=(_===Ie.Boil?.9:.55)*(1-g)**1.3}}const u=this.points.geometry;u.attributes.position.needsUpdate=!0,u.attributes.aSize.needsUpdate=!0,u.attributes.aAlpha.needsUpdate=!0}spawnFoam(t,e,n){this.budget++,this.spawn(Ie.Foam,t,e+.02,n,0,0,0,.2+Math.random()*.25,1.5+Math.random()*1.5)}}const Ra=9.81,Uh=1e3;class Nh{constructor(t={}){O(this,"n");O(this,"dx");O(this,"size");O(this,"dt");O(this,"depth");O(this,"originX",0);O(this,"originZ",0);O(this,"h");O(this,"q");O(this,"dhdt");O(this,"p");O(this,"pSmooth");O(this,"re");O(this,"im");O(this,"pre");O(this,"pim");O(this,"outRe");O(this,"outIm");O(this,"rowRe");O(this,"rowIm");O(this,"cosT");O(this,"sinT");O(this,"rev");O(this,"modeC");O(this,"modeS");O(this,"modeDamp");O(this,"sponge");const e=this.n=t.n??128;this.dx=t.dx??.5,this.size=e*this.dx,this.dt=t.dt??1/60,this.depth=t.depth??3;const n=e*e;this.h=new Float32Array(n),this.q=new Float32Array(n),this.dhdt=new Float32Array(n),this.p=new Float32Array(n),this.pSmooth=new Float32Array(n),this.re=new Float32Array(n),this.im=new Float32Array(n),this.pre=new Float32Array(n),this.pim=new Float32Array(n),this.outRe=new Float32Array(n),this.outIm=new Float32Array(n),this.rowRe=new Float32Array(e),this.rowIm=new Float32Array(e),this.cosT=new Float32Array(e/2),this.sinT=new Float32Array(e/2);for(let c=0;c<e/2;c++)this.cosT[c]=Math.cos(2*Math.PI*c/e),this.sinT[c]=-Math.sin(2*Math.PI*c/e);const s=Math.log2(e);this.rev=new Uint32Array(e);for(let c=0;c<e;c++){let l=0;for(let h=0;h<s;h++)l|=(c>>h&1)<<s-1-h;this.rev[c]=l}this.modeC=new Float32Array(n),this.modeS=new Float32Array(n),this.modeDamp=new Float32Array(n);const r=2*Math.PI/this.size,o=Math.PI/this.dx;for(let c=0;c<e;c++){const l=(c<e/2?c:c-e)*r;for(let h=0;h<e;h++){const u=(h<e/2?h:h-e)*r,d=Math.hypot(u,l),f=Math.sqrt(Ra*d*Math.tanh(d*this.depth)),g=c*e+h;this.modeC[g]=Math.cos(f*this.dt),this.modeS[g]=Math.sin(f*this.dt);const _=d/o;this.modeDamp[g]=Math.exp(-(.03+2.5*_**4)*this.dt)}}this.sponge=new Float32Array(n);const a=Math.max(4,Math.round(e*.12));for(let c=0;c<e;c++)for(let l=0;l<e;l++){const h=Math.min(l,c,e-1-l,e-1-c),u=Math.max(0,1-h/a);this.sponge[c*e+l]=Math.exp(-6*u*u*this.dt)}}clearPressure(){this.p.fill(0)}addForce(t,e,n,s){if(n<=0)return;const r=this.n,o=(t-this.originX)/this.dx,a=(e-this.originZ)/this.dx,c=Math.max(s/this.dx,.7),l=Math.ceil(c*2),h=Math.max(1,Math.floor(o-l)),u=Math.min(r-2,Math.ceil(o+l)),d=Math.max(1,Math.floor(a-l)),f=Math.min(r-2,Math.ceil(a+l));if(h>u||d>f)return;let g=0;for(let m=d;m<=f;m++)for(let p=h;p<=u;p++)g+=Math.exp(-((p-o)**2+(m-a)**2)/(2*c*c));if(g<=0)return;const _=n/(g*this.dx*this.dx);for(let m=d;m<=f;m++)for(let p=h;p<=u;p++)this.p[m*r+p]+=_*Math.exp(-((p-o)**2+(m-a)**2)/(2*c*c))}step(){const t=this.n,e=t*t,{re:n,im:s,pre:r,pim:o,outRe:a,outIm:c,h:l,q:h}=this;n.set(l),s.set(h),this.fft2(n,s,!1),r.set(this.p),o.fill(0),this.fft2(r,o,!1);const u=1/(Uh*Ra);for(let g=0;g<t;g++){const _=g===0?0:t-g;for(let m=0;m<t;m++){const p=m===0?0:t-m,y=g*t+m,S=_*t+p;if(y===0){a[0]=0,c[0]=0;continue}const x=.5*(n[y]+n[S]),P=.5*(s[y]-s[S]),b=.5*(s[y]+s[S]),R=-.5*(n[y]-n[S]),D=-r[y]*u,w=-o[y]*u,M=this.modeC[y],C=this.modeS[y],N=this.modeDamp[y],F=x-D,V=P-w,G=(F*M+b*C)*N,H=(V*M+R*C)*N,nt=(-F*C+b*M)*N,L=(-V*C+R*M)*N,J=G+D,Q=H+w;a[y]=J-L,c[y]=Q+nt}}this.fft2(a,c,!0);const d=this.sponge,f=1/this.dt;for(let g=0;g<e;g++){const _=a[g]*d[g];this.dhdt[g]=(_-l[g])*f,l[g]=_,h[g]=c[g]*d[g]}this.pSmooth.set(this.p)}recenter(t,e){const n=this.n,s=this.size/2,r=Math.round((t-s-this.originX)/this.dx),o=Math.round((e-s-this.originZ)/this.dx);if(!(r===0&&o===0)){for(const a of[this.h,this.q,this.dhdt,this.pSmooth]){const c=a.slice();a.fill(0);for(let l=0;l<n;l++){const h=l+o;if(!(h<0||h>=n))for(let u=0;u<n;u++){const d=u+r;d<0||d>=n||(a[l*n+u]=c[h*n+d])}}}this.originX+=r*this.dx,this.originZ+=o*this.dx}}waveForce(t,e,n,s=1/0){const r=s*s,o=this.n,{p:a,h:c}=this,l=1/(2*this.dx),h=this.dx*this.dx;let u=0,d=0,f=0;for(let g=1;g<o-1;g++){const _=g*o;for(let m=1;m<o-1;m++){const p=_+m,y=a[p];if(y<=0)continue;const S=(c[p+1]-c[p-1])*l,x=(c[p+o]-c[p-o])*l,P=-y*S*h,b=-y*x*h,R=this.originX+m*this.dx-t,D=this.originZ+g*this.dx-e;R*R+D*D>r||(u+=P,d+=b,f+=D*P-R*b)}}n[0]=u,n[1]=d,n[2]=f}sample(t,e,n){const s=this.n,r=(e-this.originX)/this.dx,o=(n-this.originZ)/this.dx;if(r<0||o<0||r>=s-1||o>=s-1)return 0;const a=r|0,c=o|0,l=r-a,h=o-c,u=c*s+a;return(t[u]*(1-l)+t[u+1]*l)*(1-h)+(t[u+s]*(1-l)+t[u+s+1]*l)*h}height(t,e){return this.sample(this.h,t,e)}verticalVelocity(t,e){return this.sample(this.dhdt,t,e)}staticDepression(t,e){return this.sample(this.pSmooth,t,e)/(Uh*Ra)}fft2(t,e,n){const s=this.n,{rowRe:r,rowIm:o}=this;for(let a=0;a<s;a++){const c=a*s;for(let l=0;l<s;l++)r[l]=t[c+l],o[l]=e[c+l];this.fft1(r,o,n);for(let l=0;l<s;l++)t[c+l]=r[l],e[c+l]=o[l]}for(let a=0;a<s;a++){for(let c=0;c<s;c++)r[c]=t[c*s+a],o[c]=e[c*s+a];this.fft1(r,o,n);for(let c=0;c<s;c++)t[c*s+a]=r[c],e[c*s+a]=o[c]}if(n){const a=1/(s*s);for(let c=0;c<s*s;c++)t[c]*=a,e[c]*=a}}fft1(t,e,n){const s=this.n,r=this.rev;for(let a=0;a<s;a++){const c=r[a];if(c>a){let l=t[a];t[a]=t[c],t[c]=l,l=e[a],e[a]=e[c],e[c]=l}}const o=n?-1:1;for(let a=2;a<=s;a<<=1){const c=a>>1,l=s/a;for(let h=0;h<s;h+=a)for(let u=0;u<c;u++){const d=this.cosT[u*l],f=o*this.sinT[u*l],g=h+u,_=g+c,m=t[_]*d-e[_]*f,p=t[_]*f+e[_]*d;t[_]=t[g]-m,e[_]=e[g]-p,t[g]+=m,e[g]+=p}}}}class ed{constructor(t,e){O(this,"waves");O(this,"felt");this.waves=t,this.felt=e}height(t,e,n){return this.waves.height(t,e,n)+this.felt.height(t,e)+this.felt.staticDepression(t,e)}verticalVelocity(t,e,n){return this.waves.verticalVelocity(t,e,n)+this.felt.verticalVelocity(t,e)}}class nd{constructor(t,e){O(this,"waves");O(this,"render");this.waves=t,this.render=e}height(t,e,n){return this.waves.height(t,e,n)+this.render.height(t,e)}verticalVelocity(t,e,n){return this.waves.verticalVelocity(t,e,n)+this.render.verticalVelocity(t,e)}}const Fh=.3,Oh=128,zh=.5;class id{constructor(){O(this,"render",new Nh({n:Oh,dx:zh,dt:1/60}));O(this,"felt",new Nh({n:Oh,dx:zh,dt:1/30}));O(this,"history",[]);O(this,"acc",0);O(this,"time",0);O(this,"stepCount",0);O(this,"lastStepMs",0)}reset(t,e){for(const n of[this.render,this.felt])n.h.fill(0),n.q.fill(0),n.dhdt.fill(0),n.originX=t-n.size/2,n.originZ=e-n.size/2;this.history=[]}update(t,e,n,s,r,o){const a=Array.isArray(o)?Mv(o):o;this.acc+=t;let c=!1;for(this.acc>.1&&(this.acc=.1);this.acc>=this.render.dt;){this.acc-=this.render.dt,this.time+=this.render.dt;const l=performance.now();this.history.push({t:this.time,data:a.slice()});const h=e-s*10,u=n-r*10;for(const d of[this.render,this.felt]){const f=d.originX+d.size/2,g=d.originZ+d.size/2;Math.hypot(h-f,u-g)>4&&d.recenter(h,u)}if(Bh(this.render,a),this.render.step(),++this.stepCount%2===0){for(;this.history.length>1&&this.history[1].t<=this.time-Fh;)this.history.shift();const d=this.history[0];d&&d.t<=this.time-Fh?Bh(this.felt,d.data):this.felt.clearPressure(),this.felt.step()}this.lastStepMs=performance.now()-l,c=!0}return c}}function Mv(i){let t=0;for(const s of i)t+=s.length;const e=new Float32Array(t);let n=0;for(const s of i)e.set(s,n),n+=s.length;return e}function Bh(i,t){i.clearPressure();for(let e=0;e<t.length;e+=4)t[e+2]>0&&i.addForce(t[e],t[e+1],t[e+2],t[e+3])}const yv=26,oo=24,Ca=9,Sv=["逃げ","差し","まくり","まくり差し"];function Ev(i){const t=[i.mark,i.turn/6,i.lat/30,i.speed/25,i.toMark/60,i.rank/5],e=[...i.rivals].sort((n,s)=>n.dLat-s.dLat).slice(0,5);for(let n=0;n<5;n++){const s=e[n];s?t.push(s.ahead/25,s.dLat/20,s.dSpeed/10,1):t.push(0,0,0,0)}return t}function wv(i,t){let e=0;const n=new Array(oo);for(let r=0;r<oo;r++){let o=0;for(let a=0;a<yv;a++)o+=i[e++]*t[a];n[r]=o}for(let r=0;r<oo;r++)n[r]=Math.tanh(n[r]+i[e++]);const s=new Array(Ca);for(let r=0;r<Ca;r++){let o=0;for(let a=0;a<oo;a++)o+=i[e++]*n[a];s[r]=o}for(let r=0;r<Ca;r++)s[r]+=i[e++];return s}const ao=i=>1/(1+Math.exp(-i));function Tv(i,t){const e=wv(i,Ev(t));let n=0;for(let s=1;s<4;s++)e[s]>e[n]&&(n=s);return{tactic:Sv[n],R:12+12*ao(e[4]),clear:1.8+5*ao(e[5]),dv:16*Math.tanh(e[6]),brake:.15+.6*ao(e[7]),wait:2*ao(e[8]-2)}}const wn=11,Av=2.5,tl=9,bv=Un[0],Rv=Un[1],wc=bv.z-tl,As=Rv.z+tl,dn=wc-As,Fs=Math.PI*wn,Do=Un[0].x-Av+wn*Math.cos(Math.asin(Math.min(1,tl/wn))),Io=Do-wn,sd=Do+wn,qi=2*dn+2*Fs,Tc=Ec,Ac=3,rd=Tc-As;function yo(i,t){if(i<0)return t.x=Io,t.z=As+i,t.ox=-1,t.oz=0,t.tx=0,t.tz=1,t.turn=!1,t;let e=i%qi;if(e<dn)return t.x=Io,t.z=As+e,t.ox=-1,t.oz=0,t.tx=0,t.tz=1,t.turn=!1,t;if(e-=dn,e<Fs){const s=e/wn;return t.ox=-Math.cos(s),t.oz=Math.sin(s),t.x=Do+wn*t.ox,t.z=wc+wn*t.oz,t.tx=Math.sin(s),t.tz=Math.cos(s),t.turn=!0,t}if(e-=Fs,e<dn)return t.x=sd,t.z=wc-e,t.ox=1,t.oz=0,t.tx=0,t.tz=-1,t.turn=!1,t;e-=dn;const n=e/wn;return t.ox=Math.cos(n),t.oz=-Math.sin(n),t.x=Do+wn*t.ox,t.z=As+wn*t.oz,t.tx=-Math.sin(n),t.tz=-Math.cos(n),t.turn=!0,t}function Cv(i,t,e){const n={x:0,z:0,ox:0,oz:0,tx:0,tz:0,turn:!1};let s=e,r=1/0;for(let o=-2;o<=40;o+=.5){yo(e+o,n);const a=(n.x-i)**2+(n.z-t)**2;a<r&&(r=a,s=e+o)}return s}function Pv(i){if(i<0)return-i+dn;const t=i%qi,e=[dn,dn+Fs+dn,qi+dn];for(const n of e)if(n>t)return n-t;return 0}const Pa=4.5,Lv={逃げ:{R:17,clear:2.2,dv:0,brake:.3,hold:1,aim:3},差し:{R:15,clear:3.2,dv:-4,brake:.2,hold:1,aim:Pa},まくり:{R:22,clear:5.5,dv:4,brake:.5,hold:1,aim:Pa},まくり差し:{R:15,clear:3.2,dv:0,brake:.3,hold:1,aim:Pa}},kh=1.8,Dv=4,Iv=5.5,Uv=2,Yn=()=>globalThis.__raceTune??{},bc=()=>Yn().lane??Dv,ir=i=>(Yn().laneBase??Iv)+(i-1)*bc(),Nv={R:19},Fv=9.5,Ov=45*Math.PI/180,Vh=3.5,Ge={x:0,z:0,ox:0,oz:0,tx:0,tz:0,turn:!1};function zv(i,t){const s=a=>22*a-(22-t)*4.1*(1-Math.exp(-a/4.1));let r=0,o=30;for(let a=0;a<30;a++){const c=(r+o)/2;s(c)<i?r=c:o=c}return o}function Hh(i){return od(i)===1?sd+Io:0}function od(i){return i<0||i%qi<dn+Fs?0:1}class Bv{constructor(t,e){O(this,"lane");O(this,"skill");O(this,"s",0);O(this,"laps",0);O(this,"finished",!1);O(this,"finishTime",0);O(this,"flying",!1);O(this,"capsized",!1);O(this,"tactics",[]);O(this,"tactic",null);O(this,"lat",0);O(this,"policy",null);O(this,"apexAt",null);O(this,"apexInside",[]);O(this,"dMin",1/0);O(this,"dMinTime",0);O(this,"labelPending",!1);O(this,"lastPlanS",-1/0);O(this,"bias",0);O(this,"upsideTime",0);O(this,"offset");O(this,"turnTime",0);O(this,"steerTime",0);O(this,"leanX",0);O(this,"plan",null);O(this,"armed",!0);O(this,"launched",!1);O(this,"input",{steer:0,throttle:0,leanX:0,leanZ:0});this.lane=t,this.skill=e,this.offset=ir(t)}startPos(){return{x:Io+1-ir(this.lane),z:Tc-85}}get progress(){return this.s-rd}get turnPlan(){return this.plan}reset(){const t=this.startPos();this.s=t.z-As,this.laps=0,this.finished=!1,this.flying=!1,this.capsized=!1,this.upsideTime=0,this.turnTime=this.steerTime=this.leanX=0,this.offset=ir(this.lane),this.plan=null,this.armed=!0,this.launched=!1,this.tactics=[],this.tactic=null,this.apexAt=null,this.labelPending=!1,this.lastPlanS=-1/0,this.dMin=1/0}makePlan(t,e,n,s,r){const o=Un[t],a=0,c=t===0?1:-1,l=c,h=0,u=(L,J)=>-((L-o.x)*l+(J-o.z)*h),d=u(e.x,e.z),f=[];for(const L of r){if(L.cpu===this||L.cpu.capsized||L.cpu.finished)continue;const J=L.ph.comW,Q=(J.x-e.x)*a+(J.z-e.z)*c;if(Math.abs(Q)>25)continue;const st=u(J.x,J.z);st<d-1&&f.push({lat:st,ahead:Q})}const g=this.skill;let _;if(f.length===0)_="逃げ";else{const L=Math.max(...f.map(st=>st.ahead)),J=f.reduce((st,gt)=>gt.lat>st.lat?gt:st),Q=7-g.aggression*3;L<-Q-3?_="逃げ":L<-Q?_="まくり":f.length>=2&&J.ahead<-Q*.6?_="まくり差し":_="差し",this.tactics.length===0&&t===0&&(this.lane===3||this.lane===5)&&_==="差し"&&L<4&&(_=L<-Q*.5?"まくり":"まくり差し")}globalThis.__cpuDebug&&console.log(`[${this.lane}] mark${t} lat${d.toFixed(1)} inside:${f.map(L=>L.lat.toFixed(1)+"/"+L.ahead.toFixed(1)).join(" ")} → ${_}`);const m={...Lv[_]};if(_==="逃げ"&&r.some(J=>{if(J.cpu===this||J.cpu.capsized||J.cpu.finished)return!1;const Q=J.ph.comW,st=(Q.x-e.x)*a+(Q.z-e.z)*c,gt=u(Q.x,Q.z)-d;return st>-1&&st<10&&gt>0&&gt<12})&&Object.assign(m,Nv),_==="逃げ"){const L=Yn();L.nigeDv!==void 0&&(m.dv=L.nigeDv),L.nigeAim!==void 0&&(m.aim=L.nigeAim),L.nigeBrake!==void 0&&(m.brake=L.nigeBrake),L.nigeR!==void 0&&(m.R=L.nigeR)}const p=Yn().aimScale??(Oe?0:1);m.aim*=p;let y=null;if(this.policy){const L=[];let J=0;for(const Q of r){if(Q.cpu===this||Q.cpu.capsized||Q.cpu.finished)continue;const st=Q.ph.comW;Q.cpu.s>this.s&&J++,L.push({ahead:(st.x-e.x)*a+(st.z-e.z)*c,dLat:u(st.x,st.z)-d,dSpeed:Q.ph.speed()-n})}y=Tv(this.policy,{mark:t,turn:this.tactics.length,lat:d,speed:n,toMark:(o.x-e.x)*a+(o.z-e.z)*c,rank:J,rivals:L}),_=y.tactic,Object.assign(m,{R:y.R,clear:y.clear,dv:y.dv,brake:y.brake,aim:0})}g.seed=g.seed*16807%2147483647;const S=!y&&g.seed%1e3/1e3<g.slip?2.5+(g.seed>>10)%1e3/250:0;let x=y?y.clear:Math.max(2,m.clear-(g.tight-.5)*1.6)+S+(Oe?Yn().v2Clear??1:0);const P=(o.x-e.x)*a+(o.z-e.z)*c,b=s+Math.max(0,P)/Math.max(8,n),R=r.filter(L=>{var J;return L.cpu!==this&&((J=L.cpu.turnPlan)==null?void 0:J.mark)===t});let D=y?y.wait:0;if(!y&&_==="差し"){let L=null,J=-1/0;for(const Q of R){const st=u(Q.ph.comW.x,Q.ph.comW.z);st<d&&st>J&&(L=Q,J=st)}L&&(D=Math.max(0,L.cpu.turnPlan.apexTime+1.6-b))}if(y){const L=[];for(const st of r){if(st.cpu===this||st.cpu.capsized||st.cpu.finished)continue;const gt=st.ph.comW,lt=(gt.x-e.x)*a+(gt.z-e.z)*c;if(Math.abs(lt)>25||u(gt.x,gt.z)>=d-1)continue;const W=st.cpu.turnPlan,X=(o.x-gt.x)*a+(o.z-gt.z)*c;L.push(W&&W.mark===t?W.apexTime:s+Math.max(0,X)/Math.max(8,st.ph.speed()))}const J=b+D;this.apexInside=r.filter(st=>{if(st.cpu===this||st.cpu.capsized||st.cpu.finished)return!1;const gt=st.ph.comW;return Math.abs((gt.x-e.x)*a+(gt.z-e.z)*c)<=25&&u(gt.x,gt.z)<d-1}).map(st=>st.cpu),this.labelPending=!0;const Q=L.filter(st=>st<J-.3).length;_=L.length===0?"逃げ":Q===0?Math.max(...f.map(st=>st.ahead))<-10?"逃げ":"まくり":Q===L.length?"差し":"まくり差し",globalThis.__cpuDebug&&console.log(`[${this.lane}] ${t+1}M ${_} R${y.R.toFixed(1)} 間隔${y.clear.toFixed(1)} 速さ${y.dv.toFixed(1)} レバー${y.brake.toFixed(2)} 待つ${y.wait.toFixed(2)} 頂点${(J-s).toFixed(2)}s 内の艇${L.map(st=>(st-s).toFixed(2)).join(",")}`)}if(!y)for(const L of R){const J=L.cpu.turnPlan;Math.abs(b+D-J.apexTime)<.9&&u(L.ph.comW.x,L.ph.comW.z)<d+1&&(x=Math.max(x,J.clear+2.8))}const w=Math.max(.5,d);let M=x-m.aim,C=m.R,N=0;for(let L=0;L<2;L++){C=Math.max(m.R,(w+M)/2+.5),N=Math.acos(Math.max(-1,Math.min(1,(C-w)/(C-M))));const J=m.aim-(m.aim-1.5)*Math.max(0,Math.min(1,(N-Math.PI/3)/(Math.PI/3)));M=x-J}const F=-Math.cos(N)*l+Math.sin(N)*a,V=-Math.cos(N)*h+Math.sin(N)*c,G=Math.sqrt(Fv*C)*3.6+(y?0:g.entrySpeed-49)+m.dv-Math.min(10,D*12);this.tactics.push(_),this.tactic=y?null:_;const H=y?y.brake:m.brake+(.8-m.brake)*g.grip*.6,nt=_==="逃げ"?(Yn().nigeEarly??Uv)*p:0;return{mark:t,tactic:_,cx:o.x-(C-M)*F-nt*a,cz:o.z-(C-M)*V-nt*c,R:C,dx:a,dz:c,lx:l,lz:h,entry:G,clear:x,apexTime:b+D,brake:H,hold:m.hold}}planTarget(t,e,n,s,r){const o=Math.max(6,t.R+this.bias),a=e-t.cx,c=n-t.cz,l=a*t.dx+c*t.dz,h=-(a*t.lx+c*t.lz);let u,d;l<0&&h>0?(u=l,d=l/o):(d=Math.atan2(l,h),d<-Math.PI/2&&(d+=2*Math.PI),u=d*o);const f=u+s;if(f<=0)r.x=t.cx-o*t.lx+f*t.dx,r.z=t.cz-o*t.lz+f*t.dz;else if(f<=Math.PI*o){const g=f/o;r.x=t.cx+o*(-Math.cos(g)*t.lx+Math.sin(g)*t.dx),r.z=t.cz+o*(-Math.cos(g)*t.lz+Math.sin(g)*t.dz)}else{const g=f-Math.PI*o;r.x=t.cx+o*t.lx-g*t.dx,r.z=t.cz+o*t.lz-g*t.dz}return d}squeezed(t,e,n){for(const s of n){if(s.cpu===this||s.cpu.capsized)continue;const r=s.ph.comW.x-t.x,o=s.ph.comW.z-t.z,a=r*e.x+o*e.z,c=r*e.z-o*e.x;if(Math.abs(a)<4&&c>.5&&c<3.2)return!0}return!1}update(t,e,n,s=[]){const r=this.skill,o=this.input,a=1-2*(e.quat.x*e.quat.x+e.quat.z*e.quat.z);if(this.upsideTime=a<.15?this.upsideTime+t:0,this.upsideTime>1&&(this.capsized=!0),this.capsized){o.steer=o.throttle=o.leanX=o.leanZ=0;return}const c=e.comW;this.s=Cv(c.x,c.z,this.s),yo(this.s,Ge),this.lat=(c.x-Ge.x)*Ge.ox+(c.z-Ge.z)*Ge.oz;const l=e.speed()*3.6;if(n<0&&this.progress>0&&(this.flying=!0),this.laps=Math.max(0,Math.floor(this.progress/qi)),!this.finished&&this.progress>=Ac*qi&&(this.finished=!0,this.finishTime=n),!this.launched&&n<0){o.throttle=.12;const lt=Tc-c.z;-n+r.st<=zv(lt,e.speed())&&(this.launched=!0)}n>=0&&(this.launched=!0);const h=Pv(this.s);if(h>60&&this.s>this.lastPlanS+150&&(this.armed=!0),!this.plan&&this.armed&&h<50&&n>0&&!this.finished&&(this.dMin=1/0,this.labelPending=!1,this.plan=this.makePlan(od(this.s),c,e.speed(),n,s),this.lastPlanS=this.s,this.armed=!1,this.turnTime=0),this.plan){const lt=Un[this.plan.mark],W=Math.hypot(c.x-lt.x,c.z-lt.z);if(W<this.dMin)this.dMin=W,this.dMinTime=n;else if(W>this.dMin+1&&((!this.apexAt||this.apexAt.time!==this.dMinTime)&&(this.apexAt={mark:this.plan.mark,time:this.dMinTime}),this.labelPending)){this.labelPending=!1;const X=this.apexInside.filter(tt=>!tt.capsized),q=X.filter(tt=>tt.apexAt&&tt.apexAt.mark===this.plan.mark&&Math.abs(tt.apexAt.time-this.dMinTime)<8&&tt.apexAt.time<this.dMinTime-.2).length,Y=X.length===0?"逃げ":q===0?"まくり":q===X.length?"差し":"まくり差し";this.tactic=Y,this.tactics[this.tactics.length-1]=Y}}const u=6+e.speed()*.35,d={x:0,z:0};let f=-1;const g=this.plan;if(g&&(f=this.planTarget(g,c.x,c.z,u,d),f>165*Math.PI/180&&(yo(this.s,Ge),this.offset=Math.max(.5-Hh(this.s),(c.x-Ge.x)*Ge.ox+(c.z-Ge.z)*Ge.oz),this.plan=null,this.tactic=null)),!this.plan){let lt=this.tactics.length===0?ir(this.lane):this.offset;const W=Hh(this.s);if(n>3){let X=null,q=35;for(const Y of s){if(Y.cpu===this||Y.cpu.capsized)continue;const tt=Y.cpu.s-this.s;tt>2&&tt<q&&Math.abs(Y.cpu.lat-this.lat)<2.5&&(X=Y,q=tt)}if(!X&&h<300)lt=ir(1)-W;else if(X){const Y=X.cpu.lat-bc(),tt=X.cpu.lat+bc(),St=_t=>s.some(Ht=>Ht.cpu!==this&&!Ht.cpu.capsized&&Math.abs(Ht.cpu.s-this.s)<10&&Math.abs(Ht.cpu.lat-_t)<3);lt=Y>.8-W&&!St(Y)?Y:St(tt)?this.lat:tt}}for(const X of s){const q=X.cpu.s-this.s;X.cpu===this||X.cpu.capsized||q>8||q<-4||(lt<this.lat&&X.cpu.lat<this.lat&&X.cpu.lat>lt-3.5&&(lt=Math.max(lt,X.cpu.lat+3.5)),lt>this.lat&&X.cpu.lat>this.lat&&X.cpu.lat<lt+3.5&&(lt=Math.min(lt,X.cpu.lat-3.5)))}this.offset+=(lt-this.offset)*Math.min(1,t*.3),yo(this.s+u,Ge),d.x=Ge.x+Ge.ox*this.offset,d.z=Ge.z+Ge.oz*this.offset}const _=!!this.plan&&f>=0,m=this.plan&&f<0?-f*this.plan.R:0,p=e.forward(new A);let y=0,S=0,x=!1;if(this.plan){const lt=[];for(const X of s){if(X.cpu===this||X.cpu.capsized)continue;const q=X.ph.comW.x-c.x,Y=X.ph.comW.z-c.z,tt=q*p.x+Y*p.z,St=q*p.z-Y*p.x;Math.abs(tt)<14&&Math.abs(St)<6&&lt.push({o:X,a:tt,l:St})}const W=!lt.some(X=>X.l>.5&&X.l<4&&Math.abs(X.a)<6);for(const{o:X,a:q,l:Y}of lt){const tt=(e.vel.x-X.ph.vel.x)*p.x+(e.vel.z-X.ph.vel.z)*p.z;if(q>1&&q<12&&Math.abs(Y)<2.6&&(_?y=W?Math.min(y,-2):Math.max(y,2.8):S=Math.max(S,(tt>0?1:.3)*(1-q/12))),_&&Math.abs(q)<3.5&&Y>.5&&Y<4.5){const St=Math.hypot(X.ph.comW.x-this.plan.cx,X.ph.comW.z-this.plan.cz);y=Math.max(y,St+2.8-this.plan.R)}q>.5&&q<4&&Y<-.5&&Y>-4.5&&(x=!0)}}y=Math.max(-3,Math.min(6,y)),this.bias+=(y-this.bias)*Math.min(1,t*2),this.plan||(this.bias=0),this.plan&&!_&&this.squeezed(c,p,s)&&(d.x=c.x+this.plan.dx*u,d.z=c.z+this.plan.dz*u);for(const lt of Un){const W=d.x-c.x,X=d.z-c.z,q=Math.hypot(W,X),Y=lt.x-c.x,tt=lt.z-c.z,St=Math.hypot(Y,tt),_t=Oe?Yn().v2ClearM??kh:kh;if(_t<=0||q<.001||St<.001||St>q+_t)continue;const Ht=Math.atan2(W,X),mt=Math.atan2(Y,tt);let Bt=Ht-mt;if(Bt>Math.PI&&(Bt-=2*Math.PI),Bt<-Math.PI&&(Bt+=2*Math.PI),Math.abs(Bt)>Math.PI/2)continue;const I=St<=_t?Math.PI/2:Math.asin(_t/St);if(Bt>-I){const Qt=mt-I;d.x=c.x+Math.sin(Qt)*q,d.z=c.z+Math.cos(Qt)*q}}const P=e.forward(new A),b=d.x-c.x,R=d.z-c.z;let w=Math.atan2(P.x*R-P.z*b,P.x*b+P.z*R)/.4+.3*e.angVel.y;const M=e.vel,C=Oe&&e.speed()>5?Math.atan2(P.x*M.z-P.z*M.x,P.x*M.x+P.z*M.z):0,N=Oe&&e.speed()>5&&(!!this.plan||C>.26);if(N&&(w=Math.atan2(M.x*R-M.z*b,M.x*b+M.z*R)/.4+.3*e.angVel.y*.5,w=Math.max(w,-(Ov-C)/.2)),_&&this.plan){const lt=Math.hypot(c.x-this.plan.cx,c.z-this.plan.cz)-(this.plan.R+this.bias);(!Oe||lt>0)&&(w-=.15*lt)}if(w=Math.max(-1,Math.min(1,w)),Oe&&this.plan&&l>this.plan.entry+6){const lt=Math.max(.3,1-(l-this.plan.entry-6)/12);w=Math.max(-lt,Math.min(lt,w))}let F=0,V=0;for(const lt of s){if(lt.ph===e||lt.cpu.capsized)continue;const W=lt.ph.comW.x-c.x,X=lt.ph.comW.z-c.z,q=Math.hypot(W,X);if(q>8||q<.1||(W*P.x+X*P.z)/q<Math.cos(.6))continue;const tt=(P.x*X-P.z*W)/q;F=Math.max(F,1-q/8),V+=tt>0?-1:1}F>0&&!_&&(w=Math.max(-1,Math.min(1,w+Math.sign(V)*.35*F))),!this.plan&&!N&&(w=Math.max(-.45,Math.min(.45,w)));const G=w<0||N?e.attitude().heel:-e.attitude().heel,H=Oe?Math.max(0,Math.min(1,(G-5)/10)):Math.max(0,Math.min(1,(G-8)/12));H>0&&(w*=1-.7*H);const nt=Math.max(0,Math.min(1,(-G-6)/10));nt>0&&(w*=1-.5*nt),Oe&&(this.plan||N)&&(w=Math.min(w,.4));const L=2.5*t;if(o.steer=this.launched?o.steer+Math.max(-L,Math.min(L,w-o.steer)):0,this.launched){_&&(this.turnTime+=t);let lt=1;const W=e.speed(),X=g?g.entry/3.6:0,q=g?Oe&&!this.policy?Math.min(g.brake,.3):g.brake:1,Y=g?Vh*Math.max(.25,(1-q)/.65):Vh,tt=(W*W-X*X)/(2*Y)+r.brakeMargin;g&&!_&&m<tt&&l>g.entry&&(lt=q),g&&_&&(lt=Yn().fullTurn||this.turnTime>=r.regrip*(1-.5*r.grip)?g.hold:.55+.3*r.grip),g&&!_&&S>0&&(lt=Math.min(lt,1-.7*S)),g&&_&&x&&this.turnTime>r.regrip*.5&&(lt=Math.max(lt,.75)),F>0&&(lt=Math.min(lt,1-.6*F)),H>0&&!(Oe&&Yn().rescueKeep!==0)&&(lt=Math.min(lt,1-.6*H)),o.throttle=lt}const J=(Math.abs(w)>.45||N&&C>.26)&&l>25;this.steerTime=J?this.steerTime+t:0;const Q=Math.max(0,Math.min(1,(l-25)/25));let st=J&&this.steerTime>r.leanDelay?(N&&C>.26?-1:Math.sign(w))*Q:0;Oe&&this.plan&&(st=Math.min(0,st));const gt=t/Math.max(.05,st!==0?r.leanSpeed:.8);this.leanX+=Math.max(-gt,Math.min(gt,st-this.leanX)),nt>0&&(this.leanX*=1-Math.min(1,t*8*nt)),o.leanX=this.leanX,o.leanZ=!J&&l<50&&this.launched?.4:0,this.finished&&(o.throttle=.25,o.leanX=this.leanX=0)}}function Gh(i){let t=i;const e=()=>(t=t*16807%2147483647,t%1e4/1e4);return["白","黒","赤","青","黄","緑"].map(s=>({name:s,entrySpeed:46+e()*6,brakeMargin:-2+e()*6,leanDelay:.15+e()*.3,leanSpeed:.15+e()*.3,tight:e(),aggression:e(),regrip:.3+e()*.6,grip:e(),slip:.08+e()*.17,seed:1+Math.floor(e()*1e5),st:.05+e()*.15+(e()<.15?.1+e()*.15:0)}))}function kv(i,t){return t?i.tactics[0]??"逃げ":"抜き"}const Vv=dn+Fs+40-rd,Gi=Ln.map(()=>new A),co=Ln.map(()=>new A),Rc=new A;function Hv(i,t){for(let a=0;a<Ln.length;a++)i.toWorld(Rc.set(0,0,Ln[a].z),Gi[a]),t.toWorld(Rc.set(0,0,Ln[a].z),co[a]);let e=-1/0,n=0,s=0,r=0,o=0;for(let a=0;a<Gi.length;a++)for(let c=0;c<co.length;c++){const l=co[c].x-Gi[a].x,h=co[c].z-Gi[a].z,u=Math.hypot(l,h),d=Ln[a].r+Ln[c].r-u;d>e&&u>1e-4&&(e=d,n=a,s=c,r=l/u,o=h/u)}return{pen:e,ia:n,ib:s,nx:r,nz:o}}function Gv(i){for(let t=0;t<i.length;t++)for(let e=t+1;e<i.length;e++){const n=i[t],s=i[e];if((s.comW.x-n.comW.x)**2+(s.comW.z-n.comW.z)**2>16)continue;const{pen:r,nx:o,nz:a}=Hv(n,s);if(r<=0)continue;n.shift(-o*r/2,-a*r/2),s.shift(o*r/2,a*r/2);const c=(s.vel.x-n.vel.x)*o+(s.vel.z-n.vel.z)*a;if(c<0){const l=-c/2;n.vel.x-=l*o,n.vel.z-=l*a,s.vel.x+=l*o,s.vel.z+=l*a}}}const Wv=.8;function ad(i,t){let e=0;return i.forEach((n,s)=>{for(const r of Un){if((n.comW.x-r.x)**2+(n.comW.z-r.z)**2>16)continue;let o=0,a=0,c=0;for(let h=0;h<Ln.length;h++){n.toWorld(Rc.set(0,0,Ln[h].z),Gi[h]);const u=Gi[h].x-r.x,d=Gi[h].z-r.z,f=Math.hypot(u,d),g=Ln[h].r+Wv-f;g>o&&f>1e-4&&(o=g,a=u/f,c=d/f)}if(o<=0)continue;e++,n.shift(a*o,c*o);const l=n.vel.x*a+n.vel.z*c;l<0&&(n.vel.x-=1.3*l*a,n.vel.z-=1.3*l*c),n.vel.x*=.97,n.vel.z*=.97}}),e}const lo=[-.01849,-.03952,-.28512,.46786,-.35821,-.28342,-.61889,.24405,-.47224,-.24289,-.32289,.09218,.32521,.66219,.59741,-.20435,.66557,-.27751,-.06518,-.28321,-.34737,.49682,.27461,-.38498,.37397,-.4581,.1477,-.12597,.22107,.0677,-.09933,.24233,-.4147,-.61497,-.42152,.11473,-.52293,-.24993,-.95397,.4818,.25224,-.25623,-.54228,-.38424,.31912,-.28412,.5147,-.00504,-.31675,-.31301,.09034,.05316,.07209,-.73389,.53642,.77157,-1.39724,.2635,-.14866,.16884,-.46195,.22,.27379,-.23157,-.70185,.63689,-.12618,.41331,.19285,-.88984,-.2578,-.18278,.15566,-.22466,-.63964,-.19138,.05052,.27133,.06728,.26673,-.46896,-.52921,-.37214,-.08075,-.83849,.42905,-.4191,.50702,.24846,.72421,.00979,-.64204,.3192,-.15608,.70705,.79508,-.25159,.0718,.0287,.48587,-.7148,.31925,-.39128,-.74393,-.51646,.7247,-.21758,.18858,-.61537,-.21307,.80912,.33347,.23749,-.42065,-.24907,.63808,.53611,.09214,-.05044,-.22624,.32757,.58982,.28961,.74147,.33219,-.49939,.22871,.59287,-.55297,-.41461,.33782,.19115,.40273,.19835,.08542,.07874,.93453,.18259,-.5663,.52241,-.04343,.10208,.40257,.80895,.08078,.18575,-.5725,-.23252,.14055,-.45389,-.22268,.09673,-.37246,-.58821,-1.11285,.48439,-.04968,.33593,.49441,-.90885,.00253,.6298,.30695,.06651,.07159,.35149,-.24354,-.40381,-.05329,-.67519,.34019,-.15271,-.62383,.14755,.38414,-.03265,-.06108,.27246,.94213,-.26086,.01221,-.11514,-.45398,.39832,.16942,.58956,-.20302,.87643,.00132,-.02502,-.07337,-.18635,-.06994,-.66629,-.25093,-.46753,-.03204,.28395,-.84038,.007,.02375,-.42715,-.45952,-.03907,.07261,.21099,-.53991,-.29889,.54181,-.24938,.81923,-.33941,-.9427,-.58754,-.02747,-.38829,-.61451,.22736,.34036,-.3589,-.36509,-.30334,.33261,-.01989,-.03049,-.01959,.65416,.66368,.54693,-.02888,.3603,-.47855,.11831,-.49668,.44093,-.07473,-.13244,-.5368,.21224,.27058,.22472,-.56492,.16112,.52665,.31264,.08338,-.30092,-.57366,.05434,-.06339,.1058,-.61032,.34615,.6518,.24427,.22499,-.07609,-.4969,.11566,-.65684,.30127,-.90203,.08787,.37356,-.20324,-.44312,-.15211,.30933,.34247,-.43733,-.46622,-.00974,-.27854,-.11589,.20502,-.00813,.39785,-.77604,.09899,-.49975,-.51739,-.16259,-.30581,.05771,.42425,.20507,-.31686,.03165,.78209,-.43683,-.20602,-.48597,-.27924,-.48473,-.22379,-1.24421,.1425,1.09638,.05694,.36037,.40746,.07448,-.63481,-.90812,-.31115,-.48852,.01228,.48993,.48923,.32683,-.61155,-.91381,-.05332,.68747,.19831,.16032,.12493,-.71543,-.08937,-.27927,-.142,.38435,-.20904,-.31377,.10978,-.52699,-.14326,-.46059,-.5732,-.81841,.79264,.23143,-.12115,-.2501,.3131,.55493,-.3517,-.41517,-.1547,.21723,-.16651,-.52641,-.25469,-.06344,-.02272,.83237,.41761,-.23904,.32671,-.44774,-.09725,-.06563,-.09254,-.09333,-.63378,.00598,-.02043,-.05428,-.14725,.49144,.64712,.77785,-.82209,-.08293,.42281,.35463,-.28295,-.14303,-.41682,-.20431,.58011,-.24295,.08398,-.67696,.43402,.0767,-.4661,.39609,.26882,.0159,-.60748,-.40338,-1.00304,.14887,-.03092,-.15949,-.85325,.3527,-.46901,-.04202,.54102,-.67577,.49271,-.4348,.09706,-.35206,.56391,.60629,-.45438,-.43332,-.1282,.57245,.62076,-.03515,.40854,.14403,-.76611,-.63109,-.61013,.57922,.60671,-.90502,.38087,-.02676,.3751,.19183,-.64336,-.7751,1.00844,.25059,-.19574,.35853,-.07371,-.06695,-.36221,-.20104,-.10677,-.25049,.06208,-.2015,.39134,-.11658,-.27358,.02562,-.45956,-.3404,.1219,.29747,.24683,.9457,.77757,-.49541,.24559,-1.13732,.74179,-.50091,.32989,-.31767,-.43429,.22883,-.41241,-.6045,-.81892,.73037,.05696,.36666,-.63512,-.38466,-.88956,-.0465,.52941,.23987,-.22659,.3686,.29621,-.36943,-.11872,-.03211,.04574,-.26801,-.42533,-.42725,-.42557,.33811,.27185,-.57667,.02933,-.03448,.1475,-.13689,-11e-5,.83555,-.07584,-.43383,.20958,.49749,.33838,.02763,-.14063,-.88234,-.16194,-.86656,-.14477,-.09059,-.70455,-.65404,-.03126,.16915,-.78697,.16566,-.64891,.40553,-.19127,.07884,.3769,.41976,.34984,.36617,-.13748,.23546,-.81604,.09319,-.02577,-.31408,.58095,-.35699,.22933,-.30282,.07627,.02097,-.32509,.49548,-.42418,.27607,-.26888,-.43765,-.28023,.20129,.42074,-.58153,-.37608,-.48557,1.27545,-.47769,.66142,.08887,-.41581,-.82225,-.06548,.17546,.14295,.05545,-.21666,.72257,-.38135,.7281,-.35737,-.06194,-.30915,.0846,.51613,-.14425,.32816,-.05537,.43232,-.99042,.22574,.18296,-.27337,.99925,.29086,.49994,.19224,-.15384,-.43845,.3431,-.29852,-.61853,.08399,.07406,.79013,-.91928,1.02399,-.04158,-.2834,-.3237,.15734,.27815,-.47246,-.01396,.33223,1.33101,.15964,-.23765,.88086,.68728,-.27546,.3678,.1818,-.24643,-.08531,-.06458,.38886,-.09989,-.03015,.03308,-.35752,.01564,.54517,.66053,.20888,-.75975,.24283,.30305,-1.19031,-.50583,.14718,-.24263,.44923,.02834,-.34578,.43448,.40247,.0324,-.44899,-.01533,-.54011,.93477,.44788,-.28496,.63682,.73505,-.2546,.2796,-.20883,.56708,.43081,.74161,1.08399,-.85398,.28312,.81175,-.40897,-1.07174,-.59283,.12752,.08031,.22272,-.37466,-.21325,.0776,-.82719,.23743,.41102,.50168,-.1318,.76596,-.22856,.35756,.55126,-.51566,.22067,.29727,-.28656,.13318,.27251,-.15032,-.42994,-.35151,-.24255,.09332,.01341,.21994,-.11695,.22679,.09983,.15864,.00634,.63562,.35942,.50353,.00545,-.11886,.28646,-.44673,-.26422,-.24809,-.73351,.14577,-.60897,.29418,-.34343,.48438,.49961,.23816,.17539,-.34397,-.72253,-.17586,.22582,.23832,-.41592,.23825,.30614,.46117,.29153,.56157,-.17963,.98641,.24702,-.48863,.16507,.4685,-.10725,-.491,-.35254,1.03702,.01213,-1.3652,.51563,-.34464,.10212,-.9147,-.55535,-.44127,-.29052,-.68346,.21846,.1628,.12439,.63595,-.66344,.63287,.42728,-.19032,-.14071,.10804,.02415,.23431,.04361,-.53164,.79249,.32965,.33098,-.51171,.48899,-.06335,-.02951,.07994,-.34044,.40156,-.42408,.2675,-.0751,-.25598,-.08399,-.74843,-.55024,-.32873,-.14423,.68069,-.51196,.09616,.82967,-.18913,-.58127,.02005,.01867,.38232,91e-5,.5586,.40676,-.36869,.79679,.5464,-.23185,.02741,.05382,.74751,-.15337,.58907,-.69112,-.15621,.39739,.27552,-.66418,-.14159,.33258,.45895,.29425,.0955,.19937,-.21147,.54875,.50261,-.6737,.49074,.02972,-.06467,.54248,-.55312,-.08726,-.25175,-.27958,.40873,.23411,.64688,.40017,-.6922,.38771,-.10638,-.51362,-.09647,-.40899,-.24993,-.05626,.12522,.01836,-.0267,.06126,-.34177,-.33005,-.18393,-.32386,.48714,.30483,.78419,-.3771,.61039,-.45604,.04415,-.51977,.89967,.68736,-.33055,.08177,.60679,.27191,.1488,.24789,-.24649,.73312,.09221,-.26181,.1542,.18838,.05936,.02596,-.56392,-.90107,-.38656,.52714,.3554,.33085,.2861,.01545,-.5763,-.57883,-.45392,-.35225,.70686,.5786,-.00164,-.36361,-.20965,-.00422,.42145,-.11269,.23247,.2334,-.34467,.063,.07202,.34592,.61998,-.8788,-.69427,.64191,-.54072,-.61983,.29153,.275,.84376],Sn=Un[0],Wh=-14,ho=1/240;function Xv({renderer:i,scene:t,camera:e,sun:n,waves:s}){var Ht;for(const mt of["hud","lever","lean-pad","steer-pad","wheel","start","touch","b-prop","b-center","prop-panel","rotate"])(Ht=document.getElementById(mt))==null||Ht.setAttribute("hidden","");const r=document.createElement("div");r.id="race-hud",r.innerHTML='<div class="r-clock" id="r-clock"></div><div class="r-lap" id="r-lap"></div><ol class="r-order" id="r-order"></ol>',document.body.appendChild(r);const o=document.getElementById("r-clock"),a=document.getElementById("r-lap"),c=document.getElementById("r-order"),l=document.getElementById("banner"),h=new id,u=new nd(s,h.render),d=new $u(s),f=ju();t.add(d.mesh,f);const g=new Ju(u);t.add(g.group);const _=new td(u);t.add(_.points),d.hide(f,_.points);const m=()=>_.resize(window.innerHeight,e.fov,i.getPixelRatio());window.addEventListener("resize",m);let p=Math.floor(Math.random()*1e5)+1,y=Gh(p);const S=[];for(let mt=0;mt<6;mt++){const Bt=new Sr(new ed(s,h.felt),u),I=new Bv(mt+1,y[mt]),Qt=qu(mt+1);t.add(Qt.root);const Ot=new Qu(u);t.add(Ot.mesh),d.hide(Ot.mesh),S.push({ph:Bt,cpu:I,view:Qt,foam:Ot})}let x=0,P=Wh,b=0,R=!1,D=null;function w(){p=Math.floor(Math.random()*1e5)+1,y=Gh(p),S.forEach((mt,Bt)=>{mt.cpu.skill=y[Bt],mt.cpu.reset();const I=mt.cpu.startPos();mt.ph.reset(I.x,I.z,0,x),mt.foam.clear()}),h.reset(Sn.x,Sn.z+5),_.clear(),P=Wh,R=!1,D=null,l.classList.remove("show")}w();const M=["1マーク観客席","中継","上空","先頭追従"];let C=0;const N=document.getElementById("b-cam"),F=()=>N.textContent=`視点:${M[C]}`;F(),N.onclick=()=>{C=(C+1)%M.length,F()};const V=document.getElementById("b-reset");V.textContent="もう一度",V.onclick=w;const G="boatgame.cpuBrain";let H=!!lo;try{localStorage.getItem(G)==="rule"&&(H=!1)}catch{}const nt=document.createElement("button"),L=()=>{const mt=H?lo:null;S.forEach(Bt=>Bt.cpu.policy=mt),nt.textContent=`CPU:${H?"学習":"ルール"}`};L(),nt.onclick=()=>{if(lo){H=!H;try{localStorage.setItem(G,H?"learned":"rule")}catch{}L(),w()}},lo&&document.getElementById("buttons").appendChild(nt);const J=document.createElement("button");J.textContent="自分で走る",J.onclick=()=>{location.hash="",location.reload()},document.getElementById("buttons").appendChild(J);const Q=new Float32Array(3),st=new A,gt=new A,lt=new A,W=new A(0,0,1),X=new A,q=new A(0,0,-1.75),Y=new A,tt=new Fu;let St=!0;function _t(){return[...S].sort((mt,Bt)=>mt.cpu.capsized!==Bt.cpu.capsized?mt.cpu.capsized?1:-1:mt.cpu.finished&&Bt.cpu.finished?mt.cpu.finishTime-Bt.cpu.finishTime:mt.cpu.finished?-1:Bt.cpu.finished?1:Bt.cpu.progress-mt.cpu.progress)}i.setAnimationLoop(()=>{var Ct;const mt=Math.min(tt.getDelta(),.05),Bt=S.filter(E=>!E.cpu.capsized);for(const E of S)E.cpu.update(mt,E.ph,P,Bt);b+=mt;let I=0;for(;b>=ho&&I<16;){for(const E of S)E.cpu.capsized||E.ph.step(ho,E.cpu.input,x);x+=ho,b-=ho,I++}if(I>=16&&(b=0),Gv(S.filter(E=>!E.cpu.capsized).map(E=>E.ph)),ad(S.filter(E=>!E.cpu.capsized).map(E=>E.ph)),P+=mt,h.update(mt,Sn.x,Sn.z+5,0,0,S.map(E=>E.ph.pressure))){d.updateWake(h.render);for(const E of S)h.render.waveForce(E.ph.comW.x,E.ph.comW.z,Q,3.5),E.ph.extForce.set(Q[0],0,Q[1]),E.ph.extTorque.set(0,Q[2],0)}for(const E of S){Yu(E.view,E.ph,mt),X.set(-1,0,0).applyQuaternion(E.ph.quat),E.ph.toWorld(q,Y);const v=E.ph.speed(),z=1+.8*Math.max(E.ph.propState.cav,E.ph.propState.vent);E.ph.propImmersion>.2&&v>1&&E.foam.add(x,Y,X,Math.min(1,v/8)*z),E.foam.update(x),_.emit(mt,x,E.ph,110)}_.step(mt,x),d.update(x,e.position),g.update(x),g.setClock(P);const Qt=_t(),Ot=Qt[0];if(!D&&Ot.cpu.progress>Vv&&(D=Ot),P<0)o.textContent=`大時計 ${(-P).toFixed(1)}`,o.classList.toggle("near",P>-5);else{const E=Math.floor(P/60),v=P-E*60;o.textContent=`${E}:${v.toFixed(1).padStart(4,"0")}`,o.classList.remove("near")}if(a.textContent=Ot.cpu.finished?"ゴール":`${Math.min(Ac,Math.max(1,Ot.cpu.laps+1))}周目 / ${Ac}周`,c.innerHTML=Qt.map((E,v)=>{const z=E.cpu.lane,rt=z===1||z===5?"#111":"#fff",ht=E.cpu.capsized?"<em>転覆</em>":E.cpu.flying?"<em>F</em>":E.cpu.finished?`<small>${E.cpu.finishTime.toFixed(1)}s</small>`:`<small>${Math.max(0,E.cpu.progress/qi).toFixed(1)}周${E.cpu.tactic?" "+E.cpu.tactic:""}</small>`;return`<li><b>${v+1}</b><span class="lane" style="background:${Xu[z-1]};color:${rt}">${z}</span>${ht}</li>`}).join(""),!R&&S.every(E=>E.cpu.finished||E.cpu.capsized)){R=!0;const E=Qt.filter(z=>z.cpu.finished),v=E.length?kv(E[0].cpu,E[0]===D):"";l.textContent=`${E.map(z=>z.cpu.lane).join("-")}　${v}`,l.classList.add("show"),l.classList.remove("small")}let Vt=40;const At=Ot.ph.origin;if(C===0)Vt=30,st.set(-58,16,Sn.z-22),gt.set(Sn.x-4,0,Sn.z+4);else if(C===1){st.set(-55,31,Math.max(-150,Math.min(150,At.z*.75))),gt.copy(At);const E=e.position.distanceTo(At);Vt=Math.max(5,Math.min(50,2*Math.atan(10/Math.max(1,E))*180/Math.PI))}else if(C===2)st.set(Sn.x-6,75,Sn.z-35),gt.set(Sn.x,0,Sn.z+5),Vt=45;else{const E=Ot.ph.vel,v=Math.hypot(E.x,E.z);v>2&&W.lerp(new A(E.x/v,0,E.z/v),1-Math.exp(-mt*3)).normalize(),st.copy(At).addScaledVector(W,-9).add(new A(0,3.2,0)),gt.copy(At).addScaledVector(W,3),Vt=window.innerWidth<window.innerHeight?75:60}const te=St?1:1-Math.exp(-mt*3);e.position.lerp(st,te),lt.lerp(gt,St?1:1-Math.exp(-mt*5)),e.lookAt(lt),Math.abs(e.fov-Vt)>.01&&(e.fov+=(Vt-e.fov)*(St?1:1-Math.exp(-mt*4)),e.updateProjectionMatrix(),m()),St=!1,n.position.copy(lt).addScaledVector(ko,30),n.target.position.copy(lt),n.shadow.camera.left=n.shadow.camera.bottom=-14,n.shadow.camera.right=n.shadow.camera.top=14,n.shadow.camera.updateProjectionMatrix(),(Ct=t.userData.sky)==null||Ct.position.copy(e.position),d.renderPasses(i,t,e),i.render(t,e)})}const Ni=new URLSearchParams(location.search),qv=Ni.get("view")==="model",Be=new g_({antialias:!0});Be.setPixelRatio(Math.min(window.devicePixelRatio,2));Be.toneMapping=jh;Be.toneMappingExposure=1;Be.shadowMap.enabled=!0;Be.shadowMap.type=Kh;document.getElementById("app").appendChild(Be.domElement);const Se=new __;Se.fog=new kc(Qc,250,1500);const ce=new sn(60,1,.1,3e3);{const i=new Rt(new yr(2e3,32,16),new pn({side:Xe,depthWrite:!1,fog:!1,uniforms:{uTop:{value:Zu},uHorizon:{value:Qc},uSun:{value:ko}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 uTop; uniform vec3 uHorizon; uniform vec3 uSun; varying vec3 vDir;
        void main(){ float h = clamp(vDir.y, 0.0, 1.0); vec3 c = mix(uHorizon, uTop, pow(h, 0.45));
          c += vec3(1.0, 0.93, 0.8) * pow(max(dot(normalize(vDir), uSun), 0.0), 64.0) * 0.6;
          gl_FragColor = vec4(c, 1.0);
          #include <colorspace_fragment>
        }`}));i.renderOrder=-1,Se.add(i),Se.userData.sky=i}Se.add(new tx(14478591,2905440,1.1));const qe=new ix(16774112,2.4);qe.castShadow=!0;qe.shadow.mapSize.set(1024,1024);qe.shadow.camera.left=qe.shadow.camera.bottom=-4;qe.shadow.camera.right=qe.shadow.camera.top=4;qe.shadow.camera.near=1;qe.shadow.camera.far=40;qe.shadow.bias=-5e-4;Se.add(qe,qe.target);for(const i of Se.children)i.userData.keep=!0;const _i=new yx,pr=qu(3);Se.add(pr.root);function cd(){const i=window.innerWidth,t=window.innerHeight;Be.setSize(i,t),ce.aspect=i/t,ce.fov=i<t?75:60,ce.updateProjectionMatrix()}window.addEventListener("resize",cd);cd();qv?Yv():location.hash==="#race"?Xh():(Zv(),document.getElementById("b-watch").onclick=()=>{location.hash="race",Xh()});function Xh(){Be.setAnimationLoop(null);for(const i of[...Se.children])i.userData.keep||Se.remove(i);Xv({renderer:Be,scene:Se,camera:ce,sun:qe,waves:_i})}function Yv(){document.body.classList.add("model-view");for(const r of["hud","buttons","touch","start","lean-pad","lever","wheel"])document.getElementById(r).hidden=!0;const i=new Rt(new Is(8,48),new Wt({color:6262691,roughness:.9}));i.rotation.x=-Math.PI/2,i.position.y=-.7,i.receiveShadow=!0,Se.add(i);const t=new sx(6,12,16777215,10470356);t.position.y=-.69,Se.add(t);const e=new ax(ce,Be.domElement);e.target.set(0,.35,-.2);const n={persp:[3.2,2,3.6],side:[5.5,.4,-.2],front:[0,.5,5.5],back:[0,.8,-5.5],top:[.001,6,-.2],rear34:[-3.2,1.6,-3.8],under:[2.6,-1.6,1.8]};Ni.get("cam")==="under"&&(i.visible=t.visible=!1);const s=n[Ni.get("cam")??"persp"]??n.persp;ce.position.set(...s),Ni.get("ortho")!==null&&(ce.fov=20,ce.position.multiplyScalar(3),ce.updateProjectionMatrix()),ce.position.multiplyScalar(Number(Ni.get("d")??1)),e.update(),qe.position.set(4,8,6),pr.motor.rotation.y=Number(Ni.get("steer")??0),pr.tilt.rotation.x=(Number(Ni.get("tilt")??Lo)-Lo)*Math.PI/180,pr.tilt.position.y=Us.y+un.motorHeight,Be.setAnimationLoop(()=>{e.update(),Be.render(Se,ce)})}function Zv(){const i=new id,t=new nd(_i,i.render),e=new Sr(new ed(_i,i.felt),t),n=new Float32Array(3),s=new $u(_i),r=ju();Se.add(s.mesh,r);const o=new Ju(t);Se.add(o.group);const a=new Qu(t);Se.add(a.mesh);const c=new td(t);Se.add(c.points),s.hide(r,a.mesh,c.points);const l=document.getElementById("wfx"),h=()=>l.textContent=s.passes?"オン":"オフ";h(),l.onclick=()=>{s.passes=!s.passes;try{localStorage.setItem(Ku,s.passes?"1":"0")}catch{}h()};const u=document.getElementById("tphys"),d=()=>u.textContent=Oe?"試作":"従来";d(),u.onclick=()=>{Hu(!Oe);try{localStorage.setItem(Vu,Oe?"v2":"v1")}catch{}d()};const f=()=>c.resize(window.innerHeight,ce.fov,Be.getPixelRatio());f(),window.addEventListener("resize",f);const g=new vv(document.getElementById("touch")),_=document.getElementById("banner");function m($){_.textContent=$,_.classList.toggle("show",!!$),_.classList.toggle("small",$.length>6)}let p=0;const y={x:-18,z:-100,heading:0},S=()=>{i.reset(y.x,y.z),e.reset(y.x,y.z,y.heading,p),a.clear(),c.clear(),x=0,m("")};let x=0;S();const P=["追従","低い追従","真横","上から","中継"];let b=0;const R=document.getElementById("b-cam");R.onclick=()=>{b=(b+1)%P.length,R.textContent=`視点:${P[b]}`},R.textContent=`視点:${P[b]}`;const D=[1,3,5,10,0];let w=1;const M=document.getElementById("b-wave"),C=()=>M.textContent=_i.heightCm>0?`波高 ${_i.heightCm}cm`:"波なし";_i.setHeightCm(D[w]),C(),M.onclick=()=>{w=(w+1)%D.length,_i.setHeightCm(D[w]),C()},document.getElementById("b-reset").onclick=()=>{g.lever=0,S()};const N=document.getElementById("prop-panel");document.getElementById("b-prop").onclick=()=>N.hidden=!N.hidden,document.getElementById("pp-close").onclick=()=>N.hidden=!0;const F=[{key:"diameter",id:"diameter",scale:100,fmt:$=>`${$.toFixed(1)} cm`},{key:"pitch",id:"pitch",scale:100,fmt:$=>`${$.toFixed(1)} cm`},{key:"ear",id:"ear",scale:1,fmt:$=>$.toFixed(2)},{key:"cup",id:"cup",scale:1,fmt:$=>`${$.toFixed(2)} mm`}],V="boatgame.prop";try{Object.assign(e.prop,JSON.parse(localStorage.getItem(V)??"{}"))}catch{}const G=document.getElementById("pp-note");function H(){for(const $ of F){const ut=e.prop[$.key]*$.scale;document.getElementById(`s-${$.id}`).value=String(ut),document.getElementById(`o-${$.id}`).textContent=$.fmt(ut)}G.textContent=`ピッチ比 ${(e.prop.pitch/e.prop.diameter).toFixed(2)}　${e.prop.blades}枚羽根`;try{localStorage.setItem(V,JSON.stringify(e.prop))}catch{}}for(const $ of F)document.getElementById(`s-${$.id}`).addEventListener("input",ut=>{e.prop[$.key]=Number(ut.target.value)/$.scale,H()});document.getElementById("pp-reset").onclick=()=>{Object.assign(e.prop,ku),H()},H();const nt="boatgame.tilt";let L=0;try{const $=Number(localStorage.getItem(nt));no.includes($)&&(L=$)}catch{}e.tilt=L;const J=document.getElementById("o-tilt"),Q=document.getElementById("tilt-note"),st=Q.textContent??"";function gt(){J.textContent=`${L.toFixed(1)}°`;const $=L!==e.tilt;Q.textContent=$?`走行中は変えられません。止まると ${L.toFixed(1)}° になります`:st,Q.classList.toggle("pending",$)}function lt($){const ut=no.indexOf(L);L=no[Math.max(0,Math.min(no.length-1,ut+$))];try{localStorage.setItem(nt,String(L))}catch{}gt()}const W="boatgame.motorHeight",X=.05;let q=un.motorHeight;try{const $=Number(localStorage.getItem(W));localStorage.getItem(W)!==null&&$>=0&&$<=.1&&(q=$)}catch{}un.motorHeight=q;const Y=document.getElementById("o-mh"),tt=document.getElementById("mh-note"),St=tt.textContent??"";function _t(){const $=Math.round((q-X)*100);Y.textContent=$===0?"±0 cm":`${$>0?"+":""}${$} cm`;const ut=Math.abs(q-un.motorHeight)>1e-4;tt.textContent=ut?"走行中は変えられません。止まると反映されます":St,tt.classList.toggle("pending",ut)}function Ht($){q=Math.max(0,Math.min(.1,Math.round((q+$*.01)*100)/100));try{localStorage.setItem(W,String(q))}catch{}_t()}document.getElementById("mh-dn").onclick=()=>Ht(-1),document.getElementById("mh-up").onclick=()=>Ht(1),_t(),document.getElementById("tilt-dn").onclick=()=>lt(-1),document.getElementById("tilt-up").onclick=()=>lt(1),gt();const mt=document.getElementById("b-center");mt.onclick=()=>g.recenter();for(const $ of document.querySelectorAll("button"))$.addEventListener("pointerdown",ut=>ut.stopPropagation());let Bt=!1;const I=document.getElementById("start"),Qt=document.getElementById("b-start");Qt.onclick=async()=>{Qt.disabled=!0,Qt.textContent="準備中…",g.tiltActive=await g.enableTilt(),mt.hidden=!g.tiltActive,document.getElementById("steer-pad").hidden=g.tiltActive,I.hidden=!0,Bt=!0,S(),g.tiltActive||m("傾きが使えないので、下のスライダーでハンドル"),g.tiltActive||setTimeout(()=>m(""),2500)};const Ot=document.getElementById("speed"),Vt=document.getElementById("rpm"),At=document.getElementById("m-rpm"),te=document.getElementById("tach"),Ct=document.getElementById("chip-cav"),E=document.getElementById("lean-pad"),v=document.getElementById("chip-vent"),z=document.getElementById("meta"),rt=document.getElementById("wheel"),ht=document.getElementById("wheel-rot"),ot=document.getElementById("wheel-fill"),bt=document.getElementById("wheel-label");function at($){const ut=$*90;ht.setAttribute("transform",`rotate(${ut.toFixed(1)} 60 60)`);const Pt=ut*Math.PI/180,qt=60+54*Math.sin(Pt),jt=60-54*Math.cos(Pt);ot.setAttribute("d",`M 60 6 A 54 54 0 0 ${ut>=0?1:0} ${qt.toFixed(2)} ${jt.toFixed(2)}`),rt.classList.toggle("full",Math.abs($)>.98);const Lt=$>.02?"右":$<-.02?"左":"";bt.textContent=g.tiltActive?`${Lt} ${Math.abs(g.tiltDeg).toFixed(0)}°`.trim():`${Lt} ${Math.round(Math.abs($)*100)}%`.trim()}const et=new A,Tt=new A(0,0,1),ct=new A,dt=new A,vt=new A,Mt=new A,xt=new A,kt=new A,zt=new A(0,0,-1.75),Jt=new A,U=new Fu,ft=1/240;let j=0,it=!0;Be.setAnimationLoop(()=>{const $=Math.min(U.getDelta(),.05);g.update($);const ut=Bt?g.input:{steer:0,throttle:0,leanX:0,leanZ:0};j+=$;let Pt=0;for(;j>=ft&&Pt<16;)e.step(ft,x>0?{steer:0,throttle:0,leanX:0,leanZ:0}:ut,p),p+=ft,j-=ft,Pt++;Pt>=16&&(j=0);const qt=e.comW,jt=e.vel,Lt=1.2;ad([e]),qt.x<Dt.x0+nn-2+Lt&&Math.abs(qt.z-Ui)<hv/2&&(e.shift(Dt.x0+nn-2+Lt-qt.x,0),jt.x=Math.abs(jt.x)*.3,jt.multiplyScalar(.6)),qt.x<Dt.x0+Lt&&(e.shift(Dt.x0+Lt-qt.x,0),jt.x=Math.abs(jt.x)*.3,jt.multiplyScalar(.6)),qt.x>Dt.x1-Lt&&(e.shift(Dt.x1-Lt-qt.x,0),jt.x=-Math.abs(jt.x)*.3,jt.multiplyScalar(.6)),qt.z<Dt.z0+Lt&&(e.shift(0,Dt.z0+Lt-qt.z),jt.z=Math.abs(jt.z)*.3,jt.multiplyScalar(.6)),qt.z>Dt.z1-Lt&&(e.shift(0,Dt.z1-Lt-qt.z),jt.z=-Math.abs(jt.z)*.3,jt.multiplyScalar(.6)),e.forward(vt),i.update($,e.origin.x,e.origin.z,vt.x,vt.z,e.pressure)&&(s.updateWake(i.render),i.render.waveForce(e.comW.x,e.comW.z,n),e.extForce.set(n[0],0,n[1]),e.extTorque.set(0,n[2],0)),xt.set(0,1,0).applyQuaternion(e.quat),xt.y<.15&&(x===0&&m("転覆"),x+=$,x>2.5&&S());const de=pr;e.tilt!==L&&e.speed()<1&&(e.tilt=L,gt()),Math.abs(un.motorHeight-q)>1e-4&&e.speed()<1&&(un.motorHeight=q,_t()),Yu(de,e,$),Mt.set(-1,0,0).applyQuaternion(e.quat),e.toWorld(zt,Jt);const _e=e.speed(),ri=1+.8*Math.max(e.propState.cav,e.propState.vent);e.propImmersion>.2&&_e>1&&a.add(p,Jt,Mt,Math.min(1,_e/8)*ri),a.update(p),s.update(p,ce.position),o.update(p),o.setClock(p),c.update($,p,e),kt.set(vt.x,0,vt.z).normalize();const mn=Math.hypot(e.vel.x,e.vel.z),He=Math.min(.7,Math.max(0,(mn-2)/4)*.7);ct.copy(kt).multiplyScalar(1-He),mn>.1&&ct.add(new A(e.vel.x/mn,0,e.vel.z/mn).multiplyScalar(He)),ct.normalize(),it?Tt.copy(ct):Tt.lerp(ct,1-Math.exp(-$*3)).normalize(),et.copy(e.origin).add(new A(0,.6,0));let je=1-Math.exp(-$*4),oi=window.innerWidth<window.innerHeight?75:60;if(b===0)dt.copy(et).addScaledVector(Tt,-7).add(new A(0,2.6,0));else if(b===1)dt.copy(et).addScaledVector(Tt,-4.2).add(new A(0,.9,0));else if(b===2)dt.copy(et).add(new A(-Tt.z,0,Tt.x).multiplyScalar(-7)).add(new A(0,1.2,0));else if(b===3)dt.copy(et).add(new A(0,22,0)).addScaledVector(Tt,-6),je=1-Math.exp(-$*3);else{dt.set(-55,31,Math.max(-150,Math.min(150,e.origin.z*.75))),je=1-Math.exp(-$*2);const Ho=ce.position.distanceTo(et);oi=Math.max(5,Math.min(50,2*Math.atan(5.5/Math.max(1,Ho))*180/Math.PI))}Math.abs(ce.fov-oi)>.01&&(ce.fov+=(oi-ce.fov)*(1-Math.exp(-$*4)),ce.updateProjectionMatrix(),f()),it?(ce.position.copy(dt),it=!1):ce.position.lerp(dt,je);const Vs=t.height(ce.position.x,ce.position.z,p)+.4;ce.position.y<Vs&&(ce.position.y=Vs),b===4?ce.lookAt(et):ce.lookAt(kt.copy(Tt).multiplyScalar(b===3?4:2.5).add(et)),qe.position.copy(e.origin).addScaledVector(ko,20),qe.target.position.copy(e.origin),Se.userData.sky.position.copy(ce.position),Ot.textContent=(_e*3.6).toFixed(0);const ai=e.rpm;Vt.textContent=(Math.round(ai/50)*50).toFixed(0),At.style.width=`${Math.min(100,ai/7500*100)}%`,te.classList.toggle("limit",ai>Kn.limitRpm-150);const Hs=e.propState.cav,wi=e.propState.vent;Ct.textContent=`キャビ ${Math.round(Hs*100)}%`,v.textContent=`吸い込み ${Math.round(wi*100)}%`,Ct.classList.toggle("on",Hs>.08),v.classList.toggle("on",wi>.08);const Gs=e.attitude();z.textContent=`トリム ${Gs.trim.toFixed(1)}°　傾き ${Gs.heel.toFixed(1)}°　チルト ${e.tilt.toFixed(1)}°`,at(ut.steer);const ji=e.legForce,Vo=Math.min(1,Math.hypot(ji.x,ji.y-yi*9.81,ji.z)/(yi*9.81*2));E.style.setProperty("--kick",Vo.toFixed(2)),s.renderPasses(Be,Se,ce),Be.render(Se,ce)})}
