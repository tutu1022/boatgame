var $d=Object.defineProperty;var Jd=(i,t,e)=>t in i?$d(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var C=(i,t,e)=>Jd(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hl="170",Ns={ROTATE:0,DOLLY:1,PAN:2},Ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qd=0,kl=1,tf=2,zu=1,Ou=2,ci=3,Ni=0,on=1,Le=2,Li=0,Fs=1,Vl=2,Hl=3,Gl=4,ef=5,Yi=100,nf=101,sf=102,rf=103,of=104,af=200,cf=201,lf=202,hf=203,cc=204,lc=205,uf=206,df=207,ff=208,pf=209,mf=210,gf=211,_f=212,xf=213,vf=214,hc=0,uc=1,dc=2,Gs=3,fc=4,pc=5,mc=6,gc=7,Bu=0,Mf=1,yf=2,Di=0,Sf=1,Ef=2,wf=3,ku=4,Tf=5,Af=6,bf=7,Vu=300,Ws=301,Xs=302,_c=303,xc=304,na=306,vc=1e3,Ki=1001,Mc=1002,En=1003,Rf=1004,Or=1005,bn=1006,ua=1007,$i=1008,_i=1009,Hu=1010,Gu=1011,Pr=1012,ul=1013,ts=1014,Yn=1015,pi=1016,dl=1017,fl=1018,qs=1020,Wu=35902,Xu=1021,qu=1022,zn=1023,Yu=1024,Zu=1025,zs=1026,Ys=1027,ia=1028,pl=1029,ml=1030,gl=1031,_l=1033,Uo=33776,No=33777,Fo=33778,zo=33779,yc=35840,Sc=35841,Ec=35842,wc=35843,Tc=36196,Ac=37492,bc=37496,Rc=37808,Cc=37809,Pc=37810,Lc=37811,Dc=37812,Ic=37813,Uc=37814,Nc=37815,Fc=37816,zc=37817,Oc=37818,Bc=37819,kc=37820,Vc=37821,Oo=36492,Hc=36494,Gc=36495,ju=36283,Wc=36284,Xc=36285,qc=36286,Cf=3200,Pf=3201,Ku=0,Lf=1,Ci="",Ge="srgb",Js="srgb-linear",sa="linear",fe="srgb",ls=7680,Wl=519,Df=512,If=513,Uf=514,$u=515,Nf=516,Ff=517,zf=518,Of=519,Xl=35044,wr=35048,ql="300 es",mi=2e3,Wo=2001;class ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bo=Math.PI/180,Yc=180/Math.PI;function Qs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function Bf(i,t){return(i%t+t)%t}function da(i,t,e){return(1-e)*i+e*t}function sr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const kf={DEG2RAD:Bo};class wt{constructor(t=0,e=0){wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,n,s,r,o,a,c,l){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],v=s[1],M=s[4],x=s[7],P=s[2],A=s[5],w=s[8];return r[0]=o*_+a*v+c*P,r[3]=o*m+a*M+c*A,r[6]=o*p+a*x+c*w,r[1]=l*_+h*v+u*P,r[4]=l*m+h*M+u*A,r[7]=l*p+h*x+u*w,r[2]=d*_+f*v+g*P,r[5]=d*m+f*M+g*A,r[8]=d*p+f*x+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fa.makeScale(t,e)),this}rotate(t){return this.premultiply(fa.makeRotation(-t)),this}translate(t,e){return this.premultiply(fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fa=new te;function Ju(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vf(){const i=Xo("canvas");return i.style.display="block",i}const Yl={};function vr(i){i in Yl||(Yl[i]=!0,console.warn(i))}function Hf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Gf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(i.r=gi(i.r),i.g=gi(i.g),i.b=gi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(i.r=Os(i.r),i.g=Os(i.g),i.b=Os(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ci?sa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Zl=[.64,.33,.3,.6,.15,.06],jl=[.2126,.7152,.0722],Kl=[.3127,.329],$l=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jl=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[Js]:{primaries:Zl,whitePoint:Kl,transfer:sa,toXYZ:$l,fromXYZ:Jl,luminanceCoefficients:jl,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:Zl,whitePoint:Kl,transfer:fe,toXYZ:$l,fromXYZ:Jl,luminanceCoefficients:jl,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}});let hs;class Xf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hs===void 0&&(hs=Xo("canvas")),hs.width=t.width,hs.height=t.height;const n=hs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qf=0;class Qu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Qs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pa(s[o].image)):r.push(pa(s[o]))}else r=pa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yf=0;class je extends ns{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,n=Ki,s=Ki,r=bn,o=$i,a=zn,c=_i,l=je.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Qs(),this.name="",this.source=new Qu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vc:t.x=t.x-Math.floor(t.x);break;case Ki:t.x=t.x<0?0:1;break;case Mc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vc:t.y=t.y-Math.floor(t.y);break;case Ki:t.y=t.y<0?0:1;break;case Mc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Vu;je.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,n=0,s=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,x=(f+1)/2,P=(p+1)/2,A=(h+d)/4,w=(u+_)/4,L=(g+m)/4;return M>x&&M>P?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=A/n,r=w/n):x>P?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=A/s,r=L/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=w/r,s=L/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zf extends ns{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Qu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends Zf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class td extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jf extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const P=Math.sqrt(M),A=Math.atan2(P,p*v);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}const x=a*v;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(t=0,e=0,n=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ql.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ql.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ma.copy(this).projectOnVector(t),this.sub(ma)}reflect(t){return this.sub(ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new b,Ql=new Kn;class is{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Br.copy(n.boundingBox)),Br.applyMatrix4(t.matrixWorld),this.union(Br)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),kr.subVectors(this.max,rr),us.subVectors(t.a,rr),ds.subVectors(t.b,rr),fs.subVectors(t.c,rr),Si.subVectors(ds,us),Ei.subVectors(fs,ds),Fi.subVectors(us,fs);let e=[0,-Si.z,Si.y,0,-Ei.z,Ei.y,0,-Fi.z,Fi.y,Si.z,0,-Si.x,Ei.z,0,-Ei.x,Fi.z,0,-Fi.x,-Si.y,Si.x,0,-Ei.y,Ei.x,0,-Fi.y,Fi.x,0];return!ga(e,us,ds,fs,kr)||(e=[1,0,0,0,1,0,0,0,1],!ga(e,us,ds,fs,kr))?!1:(Vr.crossVectors(Si,Ei),e=[Vr.x,Vr.y,Vr.z],ga(e,us,ds,fs,kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ei=[new b,new b,new b,new b,new b,new b,new b,new b],Ln=new b,Br=new is,us=new b,ds=new b,fs=new b,Si=new b,Ei=new b,Fi=new b,rr=new b,kr=new b,Vr=new b,zi=new b;function ga(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){zi.fromArray(i,r);const a=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),c=t.dot(zi),l=e.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Kf=new is,or=new b,_a=new b;class ss{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Kf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;or.subVectors(t,this.center);const e=or.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(or,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(or.copy(t.center).add(_a)),this.expandByPoint(or.copy(t.center).sub(_a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new b,xa=new b,Hr=new b,wi=new b,va=new b,Gr=new b,Ma=new b;class ra{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xa.copy(t).add(e).multiplyScalar(.5),Hr.copy(e).sub(t).normalize(),wi.copy(this.origin).sub(xa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Hr),a=wi.dot(this.direction),c=-wi.dot(Hr),l=wi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xa).addScaledVector(Hr,d),f}intersectSphere(t,e){ni.subVectors(t.center,this.origin);const n=ni.dot(this.direction),s=ni.dot(ni)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,s,r){va.subVectors(e,t),Gr.subVectors(n,t),Ma.crossVectors(va,Gr);let o=this.direction.dot(Ma),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,t);const c=a*this.direction.dot(Gr.crossVectors(wi,Gr));if(c<0)return null;const l=a*this.direction.dot(va.cross(wi));if(l<0||c+l>o)return null;const h=-a*wi.dot(Ma);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ps.setFromMatrixColumn(t,0).length(),r=1/ps.setFromMatrixColumn(t,1).length(),o=1/ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($f,t,Jf)}lookAt(t,e,n){const s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ti.crossVectors(n,pn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ti.crossVectors(n,pn)),Ti.normalize(),Wr.crossVectors(pn,Ti),s[0]=Ti.x,s[4]=Wr.x,s[8]=pn.x,s[1]=Ti.y,s[5]=Wr.y,s[9]=pn.y,s[2]=Ti.z,s[6]=Wr.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],M=n[7],x=n[11],P=n[15],A=s[0],w=s[4],L=s[8],E=s[12],S=s[1],I=s[5],N=s[9],z=s[13],W=s[2],H=s[6],q=s[10],Q=s[14],Z=s[3],rt=s[7],dt=s[11],pt=s[15];return r[0]=o*A+a*S+c*W+l*Z,r[4]=o*w+a*I+c*H+l*rt,r[8]=o*L+a*N+c*q+l*dt,r[12]=o*E+a*z+c*Q+l*pt,r[1]=h*A+u*S+d*W+f*Z,r[5]=h*w+u*I+d*H+f*rt,r[9]=h*L+u*N+d*q+f*dt,r[13]=h*E+u*z+d*Q+f*pt,r[2]=g*A+_*S+m*W+p*Z,r[6]=g*w+_*I+m*H+p*rt,r[10]=g*L+_*N+m*q+p*dt,r[14]=g*E+_*z+m*Q+p*pt,r[3]=v*A+M*S+x*W+P*Z,r[7]=v*w+M*I+x*H+P*rt,r[11]=v*L+M*N+x*q+P*dt,r[15]=v*E+M*z+x*Q+P*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,M=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,x=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,P=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,A=e*v+n*M+s*x+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=v*w,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*w,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*w,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*w,t[4]=M*w,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*w,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*w,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*w,t[8]=x*w,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*w,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*w,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*w,t[12]=P*w,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*w,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*w,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,v=c*l,M=c*h,x=c*u,P=n.x,A=n.y,w=n.z;return s[0]=(1-(_+p))*P,s[1]=(f+x)*P,s[2]=(g-M)*P,s[3]=0,s[4]=(f-x)*A,s[5]=(1-(d+p))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(g+M)*w,s[9]=(m-v)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ps.set(s[0],s[1],s[2]).length();const o=ps.set(s[4],s[5],s[6]).length(),a=ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Dn.copy(this);const l=1/r,h=1/o,u=1/a;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,e.setFromRotationMatrix(Dn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=mi){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===mi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Wo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=mi){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let g,_;if(a===mi)g=(o+r)*u,_=-2*u;else if(a===Wo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ps=new b,Dn=new ue,$f=new b(0,0,0),Jf=new b(1,1,1),Ti=new b,Wr=new b,pn=new b,th=new ue,eh=new Kn;class $n{constructor(t=0,e=0,n=0,s=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return th.makeRotationFromQuaternion(t),this.setFromRotationMatrix(th,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return eh.setFromEuler(this),this.setFromQuaternion(eh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class ed{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qf=0;const nh=new b,ms=new Kn,ii=new ue,Xr=new b,ar=new b,t0=new b,e0=new Kn,ih=new b(1,0,0),sh=new b(0,1,0),rh=new b(0,0,1),oh={type:"added"},n0={type:"removed"},gs={type:"childadded",child:null},ya={type:"childremoved",child:null};class Fe extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new b,e=new $n,n=new Kn,s=new b(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new te}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ed,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(ih,t)}rotateY(t){return this.rotateOnAxis(sh,t)}rotateZ(t){return this.rotateOnAxis(rh,t)}translateOnAxis(t,e){return nh.copy(t).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ih,t)}translateY(t){return this.translateOnAxis(sh,t)}translateZ(t){return this.translateOnAxis(rh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xr.copy(t):Xr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(ar,Xr,this.up):ii.lookAt(Xr,ar,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(ii),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oh),gs.child=t,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(n0),ya.child=t,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oh),gs.child=t,this.dispatchEvent(gs),gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,t,t0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new b(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new b,si=new b,Sa=new b,ri=new b,_s=new b,xs=new b,ah=new b,Ea=new b,wa=new b,Ta=new b,Aa=new Ee,ba=new Ee,Ra=new Ee;class Nn{constructor(t=new b,e=new b,n=new b){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),In.subVectors(t,e),s.cross(In);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){In.subVectors(s,e),si.subVectors(n,e),Sa.subVectors(t,e);const o=In.dot(In),a=In.dot(si),c=In.dot(Sa),l=si.dot(si),h=si.dot(Sa),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ri.x),c.addScaledVector(o,ri.y),c.addScaledVector(a,ri.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Aa.setScalar(0),ba.setScalar(0),Ra.setScalar(0),Aa.fromBufferAttribute(t,e),ba.fromBufferAttribute(t,n),Ra.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Aa,r.x),o.addScaledVector(ba,r.y),o.addScaledVector(Ra,r.z),o}static isFrontFacing(t,e,n,s){return In.subVectors(n,e),si.subVectors(t,e),In.cross(si).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),si.subVectors(this.a,this.b),In.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Nn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;_s.subVectors(s,n),xs.subVectors(r,n),Ea.subVectors(t,n);const c=_s.dot(Ea),l=xs.dot(Ea);if(c<=0&&l<=0)return e.copy(n);wa.subVectors(t,s);const h=_s.dot(wa),u=xs.dot(wa);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(_s,o);Ta.subVectors(t,r);const f=_s.dot(Ta),g=xs.dot(Ta);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(xs,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ah.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(ah,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(_s,o).addScaledVector(xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},qr={h:0,s:0,l:0};function Ca(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=Bf(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ca(o,r,t+1/3),this.g=Ca(o,r,t),this.b=Ca(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){const n=nd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return ie.fromWorkingColorSpace(Xe.copy(this),t),Math.round(Ne(Xe.r*255,0,255))*65536+Math.round(Ne(Xe.g*255,0,255))*256+Math.round(Ne(Xe.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Xe.copy(this),e);const n=Xe.r,s=Xe.g,r=Xe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Ge){ie.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,s=Xe.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(qr);const n=da(Ai.h,qr.h,e),s=da(Ai.s,qr.s,e),r=da(Ai.l,qr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new Kt;Kt.NAMES=nd;let i0=0;class rs extends ns{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Qs(),this.name="",this.blending=Fs,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cc,this.blendDst=lc,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(n.blending=this.blending),this.side!==Ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cc&&(n.blendSrc=this.blendSrc),this.blendDst!==lc&&(n.blendDst=this.blendDst),this.blendEquation!==Yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xl extends rs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const di=s0();function s0(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function r0(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Ne(i,-65504,65504),di.floatView[0]=i;const t=di.uint32View[0],e=t>>23&511;return di.baseTable[e]+((t&8388607)>>di.shiftTable[e])}function o0(i){const t=i>>10;return di.uint32View[0]=di.mantissaTable[di.offsetTable[t]+(i&1023)]+di.exponentTable[t],di.floatView[0]}const ch={toHalfFloat:r0,fromHalfFloat:o0},Ce=new b,Yr=new wt;class Ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xl,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yr.fromBufferAttribute(this,e),Yr.applyMatrix3(t),this.setXY(e,Yr.x,Yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=sr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=sr(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=sr(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=sr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=sr(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xl&&(t.usage=this.usage),t}}class id extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class sd extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let a0=0;const Tn=new ue,Pa=new Fe,vs=new b,mn=new is,cr=new is,ke=new b;class be extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ju(t)?sd:id)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,n){return Tn.makeTranslation(t,e,n),this.applyMatrix4(Tn),this}scale(t,e,n){return Tn.makeScale(t,e,n),this.applyMatrix4(Tn),this}lookAt(t){return Pa.lookAt(t),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(mn.min,cr.min),mn.expandByPoint(ke),ke.addVectors(mn.max,cr.max),mn.expandByPoint(ke)):(mn.expandByPoint(cr.min),mn.expandByPoint(cr.max))}mn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ke.fromBufferAttribute(a,l),c&&(vs.fromBufferAttribute(t,l),ke.add(vs)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new b,c[L]=new b;const l=new b,h=new b,u=new b,d=new wt,f=new wt,g=new wt,_=new b,m=new b;function p(L,E,S){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[L].add(_),a[E].add(_),a[S].add(_),c[L].add(m),c[E].add(m),c[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let L=0,E=v.length;L<E;++L){const S=v[L],I=S.start,N=S.count;for(let z=I,W=I+N;z<W;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const M=new b,x=new b,P=new b,A=new b;function w(L){P.fromBufferAttribute(s,L),A.copy(P);const E=a[L];M.copy(E),M.sub(P.multiplyScalar(P.dot(E))).normalize(),x.crossVectors(A,E);const I=x.dot(c[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,I)}for(let L=0,E=v.length;L<E;++L){const S=v[L],I=S.start,N=S.count;for(let z=I,W=I+N;z<W;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new b,r=new b,o=new b,a=new b,c=new b,l=new b,h=new b,u=new b;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Ke(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lh=new ue,Oi=new ra,Zr=new ss,hh=new b,jr=new b,Kr=new b,$r=new b,La=new b,Jr=new b,uh=new b,Qr=new b;class Nt extends Fe{constructor(t=new be,e=new xl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Jr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(La.fromBufferAttribute(u,t),o?Jr.addScaledVector(La,h):Jr.addScaledVector(La.sub(e),h))}e.add(Jr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),Oi.copy(t.ray).recast(t.near),!(Zr.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Zr,hh)===null||Oi.origin.distanceToSquared(hh)>(t.far-t.near)**2))&&(lh.copy(r).invert(),Oi.copy(t.ray).applyMatrix4(lh),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,P=M;x<P;x+=3){const A=a.getX(x),w=a.getX(x+1),L=a.getX(x+2);s=to(this,p,t,n,l,h,u,A,w,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);s=to(this,o,t,n,l,h,u,v,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,P=M;x<P;x+=3){const A=x,w=x+1,L=x+2;s=to(this,p,t,n,l,h,u,A,w,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,M=m+1,x=m+2;s=to(this,o,t,n,l,h,u,v,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function c0(i,t,e,n,s,r,o,a){let c;if(t.side===on?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ni,a),c===null)return null;Qr.copy(a),Qr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Qr);return l<e.near||l>e.far?null:{distance:l,point:Qr.clone(),object:i}}function to(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,jr),i.getVertexPosition(c,Kr),i.getVertexPosition(l,$r);const h=c0(i,t,e,n,jr,Kr,$r,uh);if(h){const u=new b;Nn.getBarycoord(uh,jr,Kr,$r,u),s&&(h.uv=Nn.getInterpolatedAttribute(s,a,c,l,u,new wt)),r&&(h.uv1=Nn.getInterpolatedAttribute(r,a,c,l,u,new wt)),o&&(h.normal=Nn.getInterpolatedAttribute(o,a,c,l,u,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new b,materialIndex:0};Nn.getNormal(jr,Kr,$r,d.normal),h.face=d,h.barycoord=u}return h}class ae extends be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function g(_,m,p,v,M,x,P,A,w,L,E){const S=x/w,I=P/L,N=x/2,z=P/2,W=A/2,H=w+1,q=L+1;let Q=0,Z=0;const rt=new b;for(let dt=0;dt<q;dt++){const pt=dt*I-z;for(let it=0;it<H;it++){const ut=it*S-N;rt[_]=ut*v,rt[m]=pt*M,rt[p]=W,l.push(rt.x,rt.y,rt.z),rt[_]=0,rt[m]=0,rt[p]=A>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(it/w),u.push(1-dt/L),Q+=1}}for(let dt=0;dt<L;dt++)for(let pt=0;pt<w;pt++){const it=d+pt+H*dt,ut=d+pt+H*(dt+1),X=d+(pt+1)+H*(dt+1),U=d+(pt+1)+H*dt;c.push(it,ut,U),c.push(ut,X,U),Z+=6}a.addGroup(f,Z,E),f+=Z,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ae(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function nn(i){const t={};for(let e=0;e<i.length;e++){const n=Zs(i[e]);for(const s in n)t[s]=n[s]}return t}function l0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function rd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const h0={clone:Zs,merge:nn};var u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends rs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=d0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=l0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class od extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new b,dh=new wt,fh=new wt;class Mn extends od{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Yc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yc*2*Math.atan(Math.tan(Bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,dh,fh),e.subVectors(fh,dh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Bo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ms=-90,ys=1;class f0 extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(Ms,ys,t,e);s.layers=this.layers,this.add(s);const r=new Mn(Ms,ys,t,e);r.layers=this.layers,this.add(r);const o=new Mn(Ms,ys,t,e);o.layers=this.layers,this.add(o);const a=new Mn(Ms,ys,t,e);a.layers=this.layers,this.add(a);const c=new Mn(Ms,ys,t,e);c.layers=this.layers,this.add(c);const l=new Mn(Ms,ys,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ad extends je{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ws,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class p0 extends xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ad(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ae(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Li});r.uniforms.tEquirect.value=e;const o=new Nt(s,r),a=e.minFilter;return e.minFilter===$i&&(e.minFilter=bn),new f0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Da=new b,m0=new b,g0=new te;class li{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Da.subVectors(n,e).cross(m0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Da),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||g0.getNormalMatrix(t),s=this.coplanarPoint(Da).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new ss,eo=new b;class vl{constructor(t=new li,e=new li,n=new li,s=new li,r=new li,o=new li){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mi){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],v=s[13],M=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+o,d+h,m+g,x+v).normalize(),n[3].setComponents(c-o,d-h,m-g,x-v).normalize(),n[4].setComponents(c-a,d-u,m-_,x-M).normalize(),e===mi)n[5].setComponents(c+a,d+u,m+_,x+M).normalize();else if(e===Wo)n[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(eo.x=s.normal.x>0?t.max.x:t.min.x,eo.y=s.normal.y>0?t.max.y:t.min.y,eo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(eo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _0(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class jn extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*d-o;for(let M=0;M<l;M++){const x=M*u-r;g.push(x,-v,0),_.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const M=v+l*p,x=v+l*(p+1),P=v+1+l*(p+1),A=v+1+l*p;f.push(M,x,A),f.push(x,P,A)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.width,t.height,t.widthSegments,t.heightSegments)}}var x0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v0=`#ifdef USE_ALPHAHASH
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
#endif`,M0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w0=`#ifdef USE_AOMAP
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
#endif`,T0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A0=`#ifdef USE_BATCHING
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
#endif`,b0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L0=`#ifdef USE_IRIDESCENCE
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
#endif`,D0=`#ifdef USE_BUMPMAP
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,V0=`#define PI 3.141592653589793
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
} // validated`,H0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,G0=`vec3 transformedNormal = objectNormal;
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
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z0="gl_FragColor = linearToOutputTexel( gl_FragColor );",j0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rp=`#ifdef USE_GRADIENTMAP
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
}`,op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lp=`uniform bool receiveShadow;
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
#endif`,hp=`#ifdef USE_ENVMAP
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
#endif`,up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mp=`PhysicalMaterial material;
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
#endif`,gp=`struct PhysicalMaterial {
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
}`,_p=`
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
#endif`,xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,vp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bp=`#if defined( USE_POINTS_UV )
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
#endif`,Rp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ip=`#ifdef USE_MORPHTARGETS
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
#endif`,Up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kp=`#ifdef USE_NORMALMAP
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
#endif`,Vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nm=`float getShadowMask() {
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
}`,im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sm=`#ifdef USE_SKINNING
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
#endif`,rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,um=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#ifdef USE_TRANSMISSION
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xm=`uniform sampler2D t2D;
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`#include <common>
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
}`,wm=`#if DEPTH_PACKING == 3200
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
}`,Tm=`#define DISTANCE
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
}`,Am=`#define DISTANCE
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`uniform float scale;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Lm=`#include <common>
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Im=`#define LAMBERT
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
}`,Um=`#define LAMBERT
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
}`,Nm=`#define MATCAP
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
}`,Fm=`#define MATCAP
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
}`,zm=`#define NORMAL
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
}`,Om=`#define NORMAL
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
}`,Bm=`#define PHONG
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
}`,km=`#define PHONG
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
}`,Vm=`#define STANDARD
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
}`,Hm=`#define STANDARD
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
}`,Gm=`#define TOON
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
}`,Wm=`#define TOON
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
}`,Xm=`uniform float size;
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
}`,qm=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,Zm=`uniform vec3 color;
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
}`,jm=`uniform float rotation;
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
}`,Km=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:x0,alphahash_pars_fragment:v0,alphamap_fragment:M0,alphamap_pars_fragment:y0,alphatest_fragment:S0,alphatest_pars_fragment:E0,aomap_fragment:w0,aomap_pars_fragment:T0,batching_pars_vertex:A0,batching_vertex:b0,begin_vertex:R0,beginnormal_vertex:C0,bsdfs:P0,iridescence_fragment:L0,bumpmap_pars_fragment:D0,clipping_planes_fragment:I0,clipping_planes_pars_fragment:U0,clipping_planes_pars_vertex:N0,clipping_planes_vertex:F0,color_fragment:z0,color_pars_fragment:O0,color_pars_vertex:B0,color_vertex:k0,common:V0,cube_uv_reflection_fragment:H0,defaultnormal_vertex:G0,displacementmap_pars_vertex:W0,displacementmap_vertex:X0,emissivemap_fragment:q0,emissivemap_pars_fragment:Y0,colorspace_fragment:Z0,colorspace_pars_fragment:j0,envmap_fragment:K0,envmap_common_pars_fragment:$0,envmap_pars_fragment:J0,envmap_pars_vertex:Q0,envmap_physical_pars_fragment:hp,envmap_vertex:tp,fog_vertex:ep,fog_pars_vertex:np,fog_fragment:ip,fog_pars_fragment:sp,gradientmap_pars_fragment:rp,lightmap_pars_fragment:op,lights_lambert_fragment:ap,lights_lambert_pars_fragment:cp,lights_pars_begin:lp,lights_toon_fragment:up,lights_toon_pars_fragment:dp,lights_phong_fragment:fp,lights_phong_pars_fragment:pp,lights_physical_fragment:mp,lights_physical_pars_fragment:gp,lights_fragment_begin:_p,lights_fragment_maps:xp,lights_fragment_end:vp,logdepthbuf_fragment:Mp,logdepthbuf_pars_fragment:yp,logdepthbuf_pars_vertex:Sp,logdepthbuf_vertex:Ep,map_fragment:wp,map_pars_fragment:Tp,map_particle_fragment:Ap,map_particle_pars_fragment:bp,metalnessmap_fragment:Rp,metalnessmap_pars_fragment:Cp,morphinstance_vertex:Pp,morphcolor_vertex:Lp,morphnormal_vertex:Dp,morphtarget_pars_vertex:Ip,morphtarget_vertex:Up,normal_fragment_begin:Np,normal_fragment_maps:Fp,normal_pars_fragment:zp,normal_pars_vertex:Op,normal_vertex:Bp,normalmap_pars_fragment:kp,clearcoat_normal_fragment_begin:Vp,clearcoat_normal_fragment_maps:Hp,clearcoat_pars_fragment:Gp,iridescence_pars_fragment:Wp,opaque_fragment:Xp,packing:qp,premultiplied_alpha_fragment:Yp,project_vertex:Zp,dithering_fragment:jp,dithering_pars_fragment:Kp,roughnessmap_fragment:$p,roughnessmap_pars_fragment:Jp,shadowmap_pars_fragment:Qp,shadowmap_pars_vertex:tm,shadowmap_vertex:em,shadowmask_pars_fragment:nm,skinbase_vertex:im,skinning_pars_vertex:sm,skinning_vertex:rm,skinnormal_vertex:om,specularmap_fragment:am,specularmap_pars_fragment:cm,tonemapping_fragment:lm,tonemapping_pars_fragment:hm,transmission_fragment:um,transmission_pars_fragment:dm,uv_pars_fragment:fm,uv_pars_vertex:pm,uv_vertex:mm,worldpos_vertex:gm,background_vert:_m,background_frag:xm,backgroundCube_vert:vm,backgroundCube_frag:Mm,cube_vert:ym,cube_frag:Sm,depth_vert:Em,depth_frag:wm,distanceRGBA_vert:Tm,distanceRGBA_frag:Am,equirect_vert:bm,equirect_frag:Rm,linedashed_vert:Cm,linedashed_frag:Pm,meshbasic_vert:Lm,meshbasic_frag:Dm,meshlambert_vert:Im,meshlambert_frag:Um,meshmatcap_vert:Nm,meshmatcap_frag:Fm,meshnormal_vert:zm,meshnormal_frag:Om,meshphong_vert:Bm,meshphong_frag:km,meshphysical_vert:Vm,meshphysical_frag:Hm,meshtoon_vert:Gm,meshtoon_frag:Wm,points_vert:Xm,points_frag:qm,shadow_vert:Ym,shadow_frag:Zm,sprite_vert:jm,sprite_frag:Km},At={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Xn={basic:{uniforms:nn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:nn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Kt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:nn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:nn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:nn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Kt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:nn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:nn([At.points,At.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:nn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:nn([At.common,At.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:nn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:nn([At.sprite,At.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:nn([At.common,At.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:nn([At.lights,At.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Xn.physical={uniforms:nn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const no={r:0,b:0,g:0},ki=new $n,$m=new ue;function Jm(i,t,e,n,s,r,o){const a=new Kt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function _(v){let M=!1;const x=g(v);x===null?p(a,c):x&&x.isColor&&(p(x,1),M=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,M){const x=g(M);x&&(x.isCubeTexture||x.mapping===na)?(h===void 0&&(h=new Nt(new ae(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Zs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ki.copy(M.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($m.makeRotationFromEuler(ki)),h.material.toneMapped=ie.getTransfer(x.colorSpace)!==fe,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Nt(new jn(2,2),new Cn({name:"BackgroundMaterial",uniforms:Zs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ie.getTransfer(x.colorSpace)!==fe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,M){v.getRGB(no,rd(i)),n.buffers.color.setClear(no.r,no.g,no.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:_,addToRenderList:m}}function Qm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(S,I,N,z,W){let H=!1;const q=u(z,N,I);r!==q&&(r=q,l(r.object)),H=f(S,z,N,W),H&&g(S,z,N,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(S,I,N,z),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,I,N){const z=N.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let H=W[I.id];H===void 0&&(H={},W[I.id]=H);let q=H[z];return q===void 0&&(q=d(c()),H[z]=q),q}function d(S){const I=[],N=[],z=[];for(let W=0;W<e;W++)I[W]=0,N[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:z,object:S,attributes:{},index:null}}function f(S,I,N,z){const W=r.attributes,H=I.attributes;let q=0;const Q=N.getAttributes();for(const Z in Q)if(Q[Z].location>=0){const dt=W[Z];let pt=H[Z];if(pt===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(pt=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(pt=S.instanceColor)),dt===void 0||dt.attribute!==pt||pt&&dt.data!==pt.data)return!0;q++}return r.attributesNum!==q||r.index!==z}function g(S,I,N,z){const W={},H=I.attributes;let q=0;const Q=N.getAttributes();for(const Z in Q)if(Q[Z].location>=0){let dt=H[Z];dt===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(dt=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(dt=S.instanceColor));const pt={};pt.attribute=dt,dt&&dt.data&&(pt.data=dt.data),W[Z]=pt,q++}r.attributes=W,r.attributesNum=q,r.index=z}function _(){const S=r.newAttributes;for(let I=0,N=S.length;I<N;I++)S[I]=0}function m(S){p(S,0)}function p(S,I){const N=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;N[S]=1,z[S]===0&&(i.enableVertexAttribArray(S),z[S]=1),W[S]!==I&&(i.vertexAttribDivisor(S,I),W[S]=I)}function v(){const S=r.newAttributes,I=r.enabledAttributes;for(let N=0,z=I.length;N<z;N++)I[N]!==S[N]&&(i.disableVertexAttribArray(N),I[N]=0)}function M(S,I,N,z,W,H,q){q===!0?i.vertexAttribIPointer(S,I,N,W,H):i.vertexAttribPointer(S,I,N,z,W,H)}function x(S,I,N,z){_();const W=z.attributes,H=N.getAttributes(),q=I.defaultAttributeValues;for(const Q in H){const Z=H[Q];if(Z.location>=0){let rt=W[Q];if(rt===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(rt=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(rt=S.instanceColor)),rt!==void 0){const dt=rt.normalized,pt=rt.itemSize,it=t.get(rt);if(it===void 0)continue;const ut=it.buffer,X=it.type,U=it.bytesPerElement,V=X===i.INT||X===i.UNSIGNED_INT||rt.gpuType===ul;if(rt.isInterleavedBufferAttribute){const k=rt.data,tt=k.stride,ft=rt.offset;if(k.isInstancedInterleavedBuffer){for(let lt=0;lt<Z.locationSize;lt++)p(Z.location+lt,k.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let lt=0;lt<Z.locationSize;lt++)m(Z.location+lt);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let lt=0;lt<Z.locationSize;lt++)M(Z.location+lt,pt/Z.locationSize,X,dt,tt*U,(ft+pt/Z.locationSize*lt)*U,V)}else{if(rt.isInstancedBufferAttribute){for(let k=0;k<Z.locationSize;k++)p(Z.location+k,rt.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let k=0;k<Z.locationSize;k++)m(Z.location+k);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let k=0;k<Z.locationSize;k++)M(Z.location+k,pt/Z.locationSize,X,dt,pt*U,pt/Z.locationSize*k*U,V)}}else if(q!==void 0){const dt=q[Q];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(Z.location,dt);break;case 3:i.vertexAttrib3fv(Z.location,dt);break;case 4:i.vertexAttrib4fv(Z.location,dt);break;default:i.vertexAttrib1fv(Z.location,dt)}}}}v()}function P(){L();for(const S in n){const I=n[S];for(const N in I){const z=I[N];for(const W in z)h(z[W].object),delete z[W];delete I[N]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const N in I){const z=I[N];for(const W in z)h(z[W].object),delete z[W];delete I[N]}delete n[S.id]}function w(S){for(const I in n){const N=n[I];if(N[S.id]===void 0)continue;const z=N[S.id];for(const W in z)h(z[W].object),delete z[W];delete N[S.id]}}function L(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function tg(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function eg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==zn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const L=w===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==_i&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Yn&&!L)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:P,maxSamples:A}}function ng(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new li,a=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const v=r?0:n,M=v*4;let x=p.clippingState||null;c.value=x,x=h(g,d,M,f);for(let P=0;P!==M;++P)x[P]=e[P];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=f;M!==_;++M,x+=4)o.copy(u[M]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function ig(i){let t=new WeakMap;function e(o,a){return a===_c?o.mapping=Ws:a===xc&&(o.mapping=Xs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===_c||a===xc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new p0(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ld extends od{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ls=4,ph=[.125,.215,.35,.446,.526,.582],Zi=20,Ia=new ld,mh=new Kt;let Ua=null,Na=0,Fa=0,za=!1;const Wi=(1+Math.sqrt(5))/2,Ss=1/Wi,gh=[new b(-Wi,Ss,0),new b(Wi,Ss,0),new b(-Ss,0,Wi),new b(Ss,0,Wi),new b(0,Wi,-Ss),new b(0,Wi,Ss),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)];class _h{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ua,Na,Fa),this._renderer.xr.enabled=za,t.scissorTest=!1,io(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ws||t.mapping===Xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:pi,format:zn,colorSpace:Js,depthBuffer:!1},s=xh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sg(r)),this._blurMaterial=rg(r,t,e)}return s}_compileMaterial(t){const e=new Nt(this._lodPlanes[0],t);this._renderer.compile(e,Ia)}_sceneToCubeUV(t,e,n,s){const a=new Mn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(mh),h.toneMapping=Di,h.autoClear=!1;const f=new xl({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new Nt(new ae,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(mh),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;io(s,v*M,p>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ws||t.mapping===Xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;io(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ia)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=gh[(s-r-1)%gh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Nt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Zi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Zi;m>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zi}`);const p=[];let v=0;for(let w=0;w<Zi;++w){const L=w/_,E=Math.exp(-L*L/2);p.push(E),w===0?v+=E:w<m&&(v+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const x=this._sizeLods[s],P=3*x*(s>M-Ls?s-M+Ls:0),A=4*(this._cubeSize-x);io(e,P,A,3*x,2*x),c.setRenderTarget(e),c.render(u,Ia)}}function sg(i){const t=[],e=[],n=[];let s=i;const r=i-Ls+1+ph.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ls?c=ph[o-i+Ls-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),M=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){const w=A%3*2/3-1,L=A>2?0:-1,E=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];v.set(E,_*g*A),M.set(d,m*g*A);const S=[A,A,A,A,A,A];x.set(S,p*g*A)}const P=new be;P.setAttribute("position",new Ke(v,_)),P.setAttribute("uv",new Ke(M,m)),P.setAttribute("faceIndex",new Ke(x,p)),t.push(P),s>Ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xh(i,t,e){const n=new xi(i,t,e);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function io(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function rg(i,t,e){const n=new Float32Array(Zi),s=new b(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function vh(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Mh(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Ml(){return`

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
	`}function og(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===_c||c===xc,h=c===Ws||c===Xs;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new _h(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new _h(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ag(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&vr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cg(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let M=0,x=v.length;M<x;M+=3){const P=v[M+0],A=v[M+1],w=v[M+2];d.push(P,A,A,w,w,P)}}else if(g!==void 0){const v=g.array;_=g.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const P=M+0,A=M+1,w=M+2;d.push(P,A,A,w,w,P)}}else return;const m=new(Ju(d)?sd:id)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function lg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function hg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ug(i,t,e){const n=new WeakMap,s=new Ee;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let P=a.attributes.position.count*x,A=1;P>t.maxTextureSize&&(A=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const w=new Float32Array(P*A*4*u),L=new td(w,P,A,u);L.type=Yn,L.needsUpdate=!0;const E=x*4;for(let I=0;I<u;I++){const N=p[I],z=v[I],W=M[I],H=P*A*4*I;for(let q=0;q<N.count;q++){const Q=q*E;g===!0&&(s.fromBufferAttribute(N,q),w[H+Q+0]=s.x,w[H+Q+1]=s.y,w[H+Q+2]=s.z,w[H+Q+3]=0),_===!0&&(s.fromBufferAttribute(z,q),w[H+Q+4]=s.x,w[H+Q+5]=s.y,w[H+Q+6]=s.z,w[H+Q+7]=0),m===!0&&(s.fromBufferAttribute(W,q),w[H+Q+8]=s.x,w[H+Q+9]=s.y,w[H+Q+10]=s.z,w[H+Q+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:L,size:new wt(P,A)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function dg(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class yl extends je{constructor(t,e,n,s,r,o,a,c,l,h=zs){if(h!==zs&&h!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zs&&(n=ts),n===void 0&&h===Ys&&(n=qs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:En,this.minFilter=c!==void 0?c:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const hd=new je,yh=new yl(1,1),ud=new td,dd=new jf,fd=new ad,Sh=[],Eh=[],wh=new Float32Array(16),Th=new Float32Array(9),Ah=new Float32Array(4);function tr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Sh[s];if(r===void 0&&(r=new Float32Array(s),Sh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function oa(i,t){let e=Eh[t];e===void 0&&(e=new Int32Array(t),Eh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function _g(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(ze(e,n))return;Ah.set(n),i.uniformMatrix2fv(this.addr,!1,Ah),Oe(e,n)}}function xg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(ze(e,n))return;Th.set(n),i.uniformMatrix3fv(this.addr,!1,Th),Oe(e,n)}}function vg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(ze(e,n))return;wh.set(n),i.uniformMatrix4fv(this.addr,!1,wh),Oe(e,n)}}function Mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function Eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function wg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function Ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function Rg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(yh.compareFunction=$u,r=yh):r=hd,e.setTexture2D(t||r,s)}function Cg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||dd,s)}function Pg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||fd,s)}function Lg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ud,s)}function Dg(i){switch(i){case 5126:return fg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return _g;case 35675:return xg;case 35676:return vg;case 5124:case 35670:return Mg;case 35667:case 35671:return yg;case 35668:case 35672:return Sg;case 35669:case 35673:return Eg;case 5125:return wg;case 36294:return Tg;case 36295:return Ag;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Lg}}function Ig(i,t){i.uniform1fv(this.addr,t)}function Ug(i,t){const e=tr(t,this.size,2);i.uniform2fv(this.addr,e)}function Ng(i,t){const e=tr(t,this.size,3);i.uniform3fv(this.addr,e)}function Fg(i,t){const e=tr(t,this.size,4);i.uniform4fv(this.addr,e)}function zg(i,t){const e=tr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Og(i,t){const e=tr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bg(i,t){const e=tr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kg(i,t){i.uniform1iv(this.addr,t)}function Vg(i,t){i.uniform2iv(this.addr,t)}function Hg(i,t){i.uniform3iv(this.addr,t)}function Gg(i,t){i.uniform4iv(this.addr,t)}function Wg(i,t){i.uniform1uiv(this.addr,t)}function Xg(i,t){i.uniform2uiv(this.addr,t)}function qg(i,t){i.uniform3uiv(this.addr,t)}function Yg(i,t){i.uniform4uiv(this.addr,t)}function Zg(i,t,e){const n=this.cache,s=t.length,r=oa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||hd,r[o])}function jg(i,t,e){const n=this.cache,s=t.length,r=oa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||dd,r[o])}function Kg(i,t,e){const n=this.cache,s=t.length,r=oa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||fd,r[o])}function $g(i,t,e){const n=this.cache,s=t.length,r=oa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ud,r[o])}function Jg(i){switch(i){case 5126:return Ig;case 35664:return Ug;case 35665:return Ng;case 35666:return Fg;case 35674:return zg;case 35675:return Og;case 35676:return Bg;case 5124:case 35670:return kg;case 35667:case 35671:return Vg;case 35668:case 35672:return Hg;case 35669:case 35673:return Gg;case 5125:return Wg;case 36294:return Xg;case 36295:return qg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return $g}}class Qg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dg(e.type)}}class t1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jg(e.type)}}class e1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function bh(i,t){i.seq.push(t),i.map[t.id]=t}function n1(i,t,e){const n=i.name,s=n.length;for(Oa.lastIndex=0;;){const r=Oa.exec(n),o=Oa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){bh(e,l===void 0?new Qg(a,i,t):new t1(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new e1(a),bh(e,u)),e=u}}}class ko{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);n1(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Rh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const i1=37297;let s1=0;function r1(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Ch=new te;function o1(i){ie._getMatrix(Ch,ie.workingColorSpace,i);const t=`mat3( ${Ch.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case sa:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ph(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+r1(i.getShaderSource(t),o)}else return s}function a1(i,t){const e=o1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function c1(i,t){let e;switch(t){case Sf:e="Linear";break;case Ef:e="Reinhard";break;case wf:e="Cineon";break;case ku:e="ACESFilmic";break;case Af:e="AgX";break;case bf:e="Neutral";break;case Tf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const so=new b;function l1(){ie.getLuminanceCoefficients(so);const i=so.x.toFixed(4),t=so.y.toFixed(4),e=so.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function u1(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function d1(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Mr(i){return i!==""}function Lh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const f1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(i){return i.replace(f1,m1)}const p1=new Map;function m1(i,t){let e=ee[t];if(e===void 0){const n=p1.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Zc(e)}const g1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ih(i){return i.replace(g1,_1)}function _1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function x1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ou?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ci&&(t="SHADOWMAP_TYPE_VSM"),t}function v1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ws:case Xs:t="ENVMAP_TYPE_CUBE";break;case na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function M1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xs:t="ENVMAP_MODE_REFRACTION";break}return t}function y1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bu:t="ENVMAP_BLENDING_MULTIPLY";break;case Mf:t="ENVMAP_BLENDING_MIX";break;case yf:t="ENVMAP_BLENDING_ADD";break}return t}function S1(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function E1(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=x1(e),l=v1(e),h=M1(e),u=y1(e),d=S1(e),f=h1(e),g=u1(r),_=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mr).join(`
`),p.length>0&&(p+=`
`)):(m=[Uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),p=[Uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Di?"#define TONE_MAPPING":"",e.toneMapping!==Di?ee.tonemapping_pars_fragment:"",e.toneMapping!==Di?c1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,a1("linearToOutputTexel",e.outputColorSpace),l1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mr).join(`
`)),o=Zc(o),o=Lh(o,e),o=Dh(o,e),a=Zc(a),a=Lh(a,e),a=Dh(a,e),o=Ih(o),a=Ih(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=v+m+o,x=v+p+a,P=Rh(s,s.VERTEX_SHADER,M),A=Rh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,P),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(I){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(P).trim(),W=s.getShaderInfoLog(A).trim();let H=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,A);else{const Q=Ph(s,P,"vertex"),Z=Ph(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+Q+`
`+Z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(z===""||W==="")&&(q=!1);q&&(I.diagnostics={runnable:H,programLog:N,vertexShader:{log:z,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(P),s.deleteShader(A),L=new ko(s,_),E=d1(s,_)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,i1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s1++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}let w1=0;class T1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new A1(t),e.set(t,n)),n}}class A1{constructor(t){this.id=w1++,this.code=t,this.usedTimes=0}}function b1(i,t,e,n,s,r,o){const a=new ed,c=new T1,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,S,I,N,z){const W=N.fog,H=z.geometry,q=E.isMeshStandardMaterial?N.environment:null,Q=(E.isMeshStandardMaterial?e:t).get(E.envMap||q),Z=Q&&Q.mapping===na?Q.image.height:null,rt=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const dt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,pt=dt!==void 0?dt.length:0;let it=0;H.morphAttributes.position!==void 0&&(it=1),H.morphAttributes.normal!==void 0&&(it=2),H.morphAttributes.color!==void 0&&(it=3);let ut,X,U,V;if(rt){const ct=Xn[rt];ut=ct.vertexShader,X=ct.fragmentShader}else ut=E.vertexShader,X=E.fragmentShader,c.update(E),U=c.getVertexShaderID(E),V=c.getFragmentShaderID(E);const k=i.getRenderTarget(),tt=i.state.buffers.depth.getReversed(),ft=z.isInstancedMesh===!0,lt=z.isBatchedMesh===!0,It=!!E.map,Ut=!!E.matcap,Wt=!!Q,O=!!E.aoMap,St=!!E.lightMap,Vt=!!E.bumpMap,Gt=!!E.normalMap,Dt=!!E.displacementMap,Et=!!E.emissiveMap,Mt=!!E.metalnessMap,R=!!E.roughnessMap,y=E.anisotropy>0,F=E.clearcoat>0,st=E.dispersion>0,at=E.iridescence>0,j=E.sheen>0,bt=E.transmission>0,_t=y&&!!E.anisotropyMap,yt=F&&!!E.clearcoatMap,Xt=F&&!!E.clearcoatNormalMap,mt=F&&!!E.clearcoatRoughnessMap,Ct=at&&!!E.iridescenceMap,Ht=at&&!!E.iridescenceThicknessMap,ot=j&&!!E.sheenColorMap,K=j&&!!E.sheenRoughnessMap,gt=!!E.specularMap,Tt=!!E.specularColorMap,Pt=!!E.specularIntensityMap,D=bt&&!!E.transmissionMap,nt=bt&&!!E.thicknessMap,Y=!!E.gradientMap,et=!!E.alphaMap,xt=E.alphaTest>0,ht=!!E.alphaHash,Lt=!!E.extensions;let qt=Di;E.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(qt=i.toneMapping);const $t={shaderID:rt,shaderType:E.type,shaderName:E.name,vertexShader:ut,fragmentShader:X,defines:E.defines,customVertexShaderID:U,customFragmentShaderID:V,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:lt,batchingColor:lt&&z._colorsTexture!==null,instancing:ft,instancingColor:ft&&z.instanceColor!==null,instancingMorph:ft&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:k===null?i.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Js,alphaToCoverage:!!E.alphaToCoverage,map:It,matcap:Ut,envMap:Wt,envMapMode:Wt&&Q.mapping,envMapCubeUVHeight:Z,aoMap:O,lightMap:St,bumpMap:Vt,normalMap:Gt,displacementMap:d&&Dt,emissiveMap:Et,normalMapObjectSpace:Gt&&E.normalMapType===Lf,normalMapTangentSpace:Gt&&E.normalMapType===Ku,metalnessMap:Mt,roughnessMap:R,anisotropy:y,anisotropyMap:_t,clearcoat:F,clearcoatMap:yt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:mt,dispersion:st,iridescence:at,iridescenceMap:Ct,iridescenceThicknessMap:Ht,sheen:j,sheenColorMap:ot,sheenRoughnessMap:K,specularMap:gt,specularColorMap:Tt,specularIntensityMap:Pt,transmission:bt,transmissionMap:D,thicknessMap:nt,gradientMap:Y,opaque:E.transparent===!1&&E.blending===Fs&&E.alphaToCoverage===!1,alphaMap:et,alphaTest:xt,alphaHash:ht,combine:E.combine,mapUv:It&&_(E.map.channel),aoMapUv:O&&_(E.aoMap.channel),lightMapUv:St&&_(E.lightMap.channel),bumpMapUv:Vt&&_(E.bumpMap.channel),normalMapUv:Gt&&_(E.normalMap.channel),displacementMapUv:Dt&&_(E.displacementMap.channel),emissiveMapUv:Et&&_(E.emissiveMap.channel),metalnessMapUv:Mt&&_(E.metalnessMap.channel),roughnessMapUv:R&&_(E.roughnessMap.channel),anisotropyMapUv:_t&&_(E.anisotropyMap.channel),clearcoatMapUv:yt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:K&&_(E.sheenRoughnessMap.channel),specularMapUv:gt&&_(E.specularMap.channel),specularColorMapUv:Tt&&_(E.specularColorMap.channel),specularIntensityMapUv:Pt&&_(E.specularIntensityMap.channel),transmissionMapUv:D&&_(E.transmissionMap.channel),thicknessMapUv:nt&&_(E.thicknessMap.channel),alphaMapUv:et&&_(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Gt||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!H.attributes.uv&&(It||et),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:tt,skinning:z.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:it,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:It&&E.map.isVideoTexture===!0&&ie.getTransfer(E.map.colorSpace)===fe,decodeVideoTextureEmissive:Et&&E.emissiveMap.isVideoTexture===!0&&ie.getTransfer(E.emissiveMap.colorSpace)===fe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Le,flipSided:E.side===on,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Lt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&E.extensions.multiDraw===!0||lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return $t.vertexUv1s=l.has(1),$t.vertexUv2s=l.has(2),$t.vertexUv3s=l.has(3),l.clear(),$t}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)S.push(I),S.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(v(S,E),M(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function M(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const S=g[E.type];let I;if(S){const N=Xn[S];I=h0.clone(N.uniforms)}else I=E.uniforms;return I}function P(E,S){let I;for(let N=0,z=h.length;N<z;N++){const W=h[N];if(W.cacheKey===S){I=W,++I.usedTimes;break}}return I===void 0&&(I=new E1(i,S,E,r),h.push(I)),I}function A(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function w(E){c.remove(E)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:L}}function R1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function C1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Nh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||C1),n.length>1&&n.sort(d||Nh),s.length>1&&s.sort(d||Nh)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function P1(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Fh,i.set(n,[o])):s>=r.length?(o=new Fh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function L1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new Kt};break;case"SpotLight":e={position:new b,direction:new b,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new b,halfWidth:new b,halfHeight:new b};break}return i[t.id]=e,e}}}function D1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let I1=0;function U1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function N1(i){const t=new L1,e=D1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new b);const s=new b,r=new ue,o=new ue;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,M=0,x=0,P=0,A=0,w=0;l.sort(U1);for(let E=0,S=l.length;E<S;E++){const I=l[E],N=I.color,z=I.intensity,W=I.distance,H=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=N.r*z,u+=N.g*z,d+=N.b*z;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],z);w++}else if(I.isDirectionalLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,Z=e.get(I);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=I.shadow.matrix,v++}n.directional[f]=q,f++}else if(I.isSpotLight){const q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(N).multiplyScalar(z),q.distance=W,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[_]=q;const Q=I.shadow;if(I.map&&(n.spotLightMap[P]=I.map,P++,Q.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[_]=Q.matrix,I.castShadow){const Z=e.get(I);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=H,x++}_++}else if(I.isRectAreaLight){const q=t.get(I);q.color.copy(N).multiplyScalar(z),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=q,m++}else if(I.isPointLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const Q=I.shadow,Z=e.get(I);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,Z.shadowCameraNear=Q.camera.near,Z.shadowCameraFar=Q.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=I.shadow.matrix,M++}n.point[g]=q,g++}else if(I.isHemisphereLight){const q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(z),q.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==v||L.numPointShadows!==M||L.numSpotShadows!==x||L.numSpotMaps!==P||L.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=v,L.numPointShadows=M,L.numSpotShadows=x,L.numSpotMaps=P,L.numLightProbes=w,n.version=I1++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const M=l[p];if(M.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(M.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function zh(i){const t=new N1(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function F1(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new zh(i),t.set(s,[a])):r>=o.length?(a=new zh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class z1 extends rs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class O1 extends rs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const B1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k1=`uniform sampler2D shadow_pass;
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
}`;function V1(i,t,e){let n=new vl;const s=new wt,r=new wt,o=new Ee,a=new z1({depthPacking:Pf}),c=new O1,l={},h=e.maxTextureSize,u={[Ni]:on,[on]:Ni,[Le]:Le},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:B1,fragmentShader:k1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new be;g.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Nt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zu;let p=this.type;this.render=function(A,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Li),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=p!==ci&&this.type===ci,W=p===ci&&this.type!==ci;for(let H=0,q=A.length;H<q;H++){const Q=A[H],Z=Q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const rt=Z.getFrameExtents();if(s.multiply(rt),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,Z.mapSize.y=r.y)),Z.map===null||z===!0||W===!0){const pt=this.type!==ci?{minFilter:En,magFilter:En}:{};Z.map!==null&&Z.map.dispose(),Z.map=new xi(s.x,s.y,pt),Z.map.texture.name=Q.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();const dt=Z.getViewportCount();for(let pt=0;pt<dt;pt++){const it=Z.getViewport(pt);o.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),N.viewport(o),Z.updateMatrices(Q,pt),n=Z.getFrustum(),x(w,L,Z.camera,Q,this.type)}Z.isPointLightShadow!==!0&&this.type===ci&&v(Z,L),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,S,I)};function v(A,w){const L=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new xi(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,L,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,L,f,_,null)}function M(A,w,L,E){let S=null;const I=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)S=I;else if(S=L.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const N=S.uuid,z=w.uuid;let W=l[N];W===void 0&&(W={},l[N]=W);let H=W[z];H===void 0&&(H=S.clone(),W[z]=H,w.addEventListener("dispose",P)),S=H}if(S.visible=w.visible,S.wireframe=w.wireframe,E===ci?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=i.properties.get(S);N.light=L}return S}function x(A,w,L,E,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===ci)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const z=t.update(A),W=A.material;if(Array.isArray(W)){const H=z.groups;for(let q=0,Q=H.length;q<Q;q++){const Z=H[q],rt=W[Z.materialIndex];if(rt&&rt.visible){const dt=M(A,rt,E,S);A.onBeforeShadow(i,A,w,L,z,dt,Z),i.renderBufferDirect(L,null,z,dt,A,Z),A.onAfterShadow(i,A,w,L,z,dt,Z)}}}else if(W.visible){const H=M(A,W,E,S);A.onBeforeShadow(i,A,w,L,z,H,null),i.renderBufferDirect(L,null,z,H,A,null),A.onAfterShadow(i,A,w,L,z,H,null)}}const N=A.children;for(let z=0,W=N.length;z<W;z++)x(N[z],w,L,E,S)}function P(A){A.target.removeEventListener("dispose",P);for(const L in l){const E=l[L],S=A.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const H1={[hc]:uc,[dc]:mc,[fc]:gc,[Gs]:pc,[uc]:hc,[mc]:dc,[gc]:fc,[pc]:Gs};function G1(i,t){function e(){let D=!1;const nt=new Ee;let Y=null;const et=new Ee(0,0,0,0);return{setMask:function(xt){Y!==xt&&!D&&(i.colorMask(xt,xt,xt,xt),Y=xt)},setLocked:function(xt){D=xt},setClear:function(xt,ht,Lt,qt,$t){$t===!0&&(xt*=qt,ht*=qt,Lt*=qt),nt.set(xt,ht,Lt,qt),et.equals(nt)===!1&&(i.clearColor(xt,ht,Lt,qt),et.copy(nt))},reset:function(){D=!1,Y=null,et.set(-1,0,0,0)}}}function n(){let D=!1,nt=!1,Y=null,et=null,xt=null;return{setReversed:function(ht){if(nt!==ht){const Lt=t.get("EXT_clip_control");nt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);const qt=xt;xt=null,this.setClear(qt)}nt=ht},getReversed:function(){return nt},setTest:function(ht){ht?k(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(ht){Y!==ht&&!D&&(i.depthMask(ht),Y=ht)},setFunc:function(ht){if(nt&&(ht=H1[ht]),et!==ht){switch(ht){case hc:i.depthFunc(i.NEVER);break;case uc:i.depthFunc(i.ALWAYS);break;case dc:i.depthFunc(i.LESS);break;case Gs:i.depthFunc(i.LEQUAL);break;case fc:i.depthFunc(i.EQUAL);break;case pc:i.depthFunc(i.GEQUAL);break;case mc:i.depthFunc(i.GREATER);break;case gc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=ht}},setLocked:function(ht){D=ht},setClear:function(ht){xt!==ht&&(nt&&(ht=1-ht),i.clearDepth(ht),xt=ht)},reset:function(){D=!1,Y=null,et=null,xt=null,nt=!1}}}function s(){let D=!1,nt=null,Y=null,et=null,xt=null,ht=null,Lt=null,qt=null,$t=null;return{setTest:function(ct){D||(ct?k(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(ct){nt!==ct&&!D&&(i.stencilMask(ct),nt=ct)},setFunc:function(ct,Jt,Me){(Y!==ct||et!==Jt||xt!==Me)&&(i.stencilFunc(ct,Jt,Me),Y=ct,et=Jt,xt=Me)},setOp:function(ct,Jt,Me){(ht!==ct||Lt!==Jt||qt!==Me)&&(i.stencilOp(ct,Jt,Me),ht=ct,Lt=Jt,qt=Me)},setLocked:function(ct){D=ct},setClear:function(ct){$t!==ct&&(i.clearStencil(ct),$t=ct)},reset:function(){D=!1,nt=null,Y=null,et=null,xt=null,ht=null,Lt=null,qt=null,$t=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,M=null,x=null,P=null,A=null,w=new Kt(0,0,0),L=0,E=!1,S=null,I=null,N=null,z=null,W=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Q=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=Q>=1):Z.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=Q>=2);let rt=null,dt={};const pt=i.getParameter(i.SCISSOR_BOX),it=i.getParameter(i.VIEWPORT),ut=new Ee().fromArray(pt),X=new Ee().fromArray(it);function U(D,nt,Y,et){const xt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(D,ht),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<Y;Lt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(nt+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return ht}const V={};V[i.TEXTURE_2D]=U(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=U(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=U(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=U(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(i.DEPTH_TEST),o.setFunc(Gs),Vt(!1),Gt(kl),k(i.CULL_FACE),O(Li);function k(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function tt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function ft(D,nt){return u[D]!==nt?(i.bindFramebuffer(D,nt),u[D]=nt,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=nt),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function lt(D,nt){let Y=f,et=!1;if(D){Y=d.get(nt),Y===void 0&&(Y=[],d.set(nt,Y));const xt=D.textures;if(Y.length!==xt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Lt=xt.length;ht<Lt;ht++)Y[ht]=i.COLOR_ATTACHMENT0+ht;Y.length=xt.length,et=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,et=!0);et&&i.drawBuffers(Y)}function It(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const Ut={[Yi]:i.FUNC_ADD,[nf]:i.FUNC_SUBTRACT,[sf]:i.FUNC_REVERSE_SUBTRACT};Ut[rf]=i.MIN,Ut[of]=i.MAX;const Wt={[af]:i.ZERO,[cf]:i.ONE,[lf]:i.SRC_COLOR,[cc]:i.SRC_ALPHA,[mf]:i.SRC_ALPHA_SATURATE,[ff]:i.DST_COLOR,[uf]:i.DST_ALPHA,[hf]:i.ONE_MINUS_SRC_COLOR,[lc]:i.ONE_MINUS_SRC_ALPHA,[pf]:i.ONE_MINUS_DST_COLOR,[df]:i.ONE_MINUS_DST_ALPHA,[gf]:i.CONSTANT_COLOR,[_f]:i.ONE_MINUS_CONSTANT_COLOR,[xf]:i.CONSTANT_ALPHA,[vf]:i.ONE_MINUS_CONSTANT_ALPHA};function O(D,nt,Y,et,xt,ht,Lt,qt,$t,ct){if(D===Li){_===!0&&(tt(i.BLEND),_=!1);return}if(_===!1&&(k(i.BLEND),_=!0),D!==ef){if(D!==m||ct!==E){if((p!==Yi||x!==Yi)&&(i.blendEquation(i.FUNC_ADD),p=Yi,x=Yi),ct)switch(D){case Fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vl:i.blendFunc(i.ONE,i.ONE);break;case Hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,M=null,P=null,A=null,w.set(0,0,0),L=0,m=D,E=ct}return}xt=xt||nt,ht=ht||Y,Lt=Lt||et,(nt!==p||xt!==x)&&(i.blendEquationSeparate(Ut[nt],Ut[xt]),p=nt,x=xt),(Y!==v||et!==M||ht!==P||Lt!==A)&&(i.blendFuncSeparate(Wt[Y],Wt[et],Wt[ht],Wt[Lt]),v=Y,M=et,P=ht,A=Lt),(qt.equals(w)===!1||$t!==L)&&(i.blendColor(qt.r,qt.g,qt.b,$t),w.copy(qt),L=$t),m=D,E=!1}function St(D,nt){D.side===Le?tt(i.CULL_FACE):k(i.CULL_FACE);let Y=D.side===on;nt&&(Y=!Y),Vt(Y),D.blending===Fs&&D.transparent===!1?O(Li):O(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const et=D.stencilWrite;a.setTest(et),et&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Et(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(D){S!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),S=D)}function Gt(D){D!==Qd?(k(i.CULL_FACE),D!==I&&(D===kl?i.cullFace(i.BACK):D===tf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),I=D}function Dt(D){D!==N&&(q&&i.lineWidth(D),N=D)}function Et(D,nt,Y){D?(k(i.POLYGON_OFFSET_FILL),(z!==nt||W!==Y)&&(i.polygonOffset(nt,Y),z=nt,W=Y)):tt(i.POLYGON_OFFSET_FILL)}function Mt(D){D?k(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function R(D){D===void 0&&(D=i.TEXTURE0+H-1),rt!==D&&(i.activeTexture(D),rt=D)}function y(D,nt,Y){Y===void 0&&(rt===null?Y=i.TEXTURE0+H-1:Y=rt);let et=dt[Y];et===void 0&&(et={type:void 0,texture:void 0},dt[Y]=et),(et.type!==D||et.texture!==nt)&&(rt!==Y&&(i.activeTexture(Y),rt=Y),i.bindTexture(D,nt||V[D]),et.type=D,et.texture=nt)}function F(){const D=dt[rt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ht(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(D){ut.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ut.copy(D))}function K(D){X.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function gt(D,nt){let Y=l.get(nt);Y===void 0&&(Y=new WeakMap,l.set(nt,Y));let et=Y.get(D);et===void 0&&(et=i.getUniformBlockIndex(nt,D.name),Y.set(D,et))}function Tt(D,nt){const et=l.get(nt).get(D);c.get(nt)!==et&&(i.uniformBlockBinding(nt,et,D.__bindingPointIndex),c.set(nt,et))}function Pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},rt=null,dt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,M=null,x=null,P=null,A=null,w=new Kt(0,0,0),L=0,E=!1,S=null,I=null,N=null,z=null,W=null,ut.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:k,disable:tt,bindFramebuffer:ft,drawBuffers:lt,useProgram:It,setBlending:O,setMaterial:St,setFlipSided:Vt,setCullFace:Gt,setLineWidth:Dt,setPolygonOffset:Et,setScissorTest:Mt,activeTexture:R,bindTexture:y,unbindTexture:F,compressedTexImage2D:st,compressedTexImage3D:at,texImage2D:Ct,texImage3D:Ht,updateUBOMapping:gt,uniformBlockBinding:Tt,texStorage2D:Xt,texStorage3D:mt,texSubImage2D:j,texSubImage3D:bt,compressedTexSubImage2D:_t,compressedTexSubImage3D:yt,scissor:ot,viewport:K,reset:Pt}}function Oh(i,t,e,n){const s=W1(n);switch(e){case Xu:return i*t;case Yu:return i*t;case Zu:return i*t*2;case ia:return i*t/s.components*s.byteLength;case pl:return i*t/s.components*s.byteLength;case ml:return i*t*2/s.components*s.byteLength;case gl:return i*t*2/s.components*s.byteLength;case qu:return i*t*3/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case _l:return i*t*4/s.components*s.byteLength;case Uo:case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fo:case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sc:case wc:return Math.max(i,16)*Math.max(t,8)/4;case yc:case Ec:return Math.max(i,8)*Math.max(t,8)/2;case Tc:case Ac:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Nc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case zc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case kc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Vc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Oo:case Hc:case Gc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ju:case Wc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xc:case qc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function W1(i){switch(i){case _i:case Hu:return{byteLength:1,components:1};case Pr:case Gu:case pi:return{byteLength:2,components:1};case dl:case fl:return{byteLength:2,components:4};case ts:case ul:case Yn:return{byteLength:4,components:1};case Wu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function X1(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new wt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,y){return f?new OffscreenCanvas(R,y):Xo("canvas")}function _(R,y,F){let st=1;const at=Mt(R);if((at.width>F||at.height>F)&&(st=F/Math.max(at.width,at.height)),st<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(st*at.width),bt=Math.floor(st*at.height);u===void 0&&(u=g(j,bt));const _t=y?g(j,bt):u;return _t.width=j,_t.height=bt,_t.getContext("2d").drawImage(R,0,0,j,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+j+"x"+bt+")."),_t}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,y,F,st,at=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=y;if(y===i.RED&&(F===i.FLOAT&&(j=i.R32F),F===i.HALF_FLOAT&&(j=i.R16F),F===i.UNSIGNED_BYTE&&(j=i.R8)),y===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.R8UI),F===i.UNSIGNED_SHORT&&(j=i.R16UI),F===i.UNSIGNED_INT&&(j=i.R32UI),F===i.BYTE&&(j=i.R8I),F===i.SHORT&&(j=i.R16I),F===i.INT&&(j=i.R32I)),y===i.RG&&(F===i.FLOAT&&(j=i.RG32F),F===i.HALF_FLOAT&&(j=i.RG16F),F===i.UNSIGNED_BYTE&&(j=i.RG8)),y===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RG8UI),F===i.UNSIGNED_SHORT&&(j=i.RG16UI),F===i.UNSIGNED_INT&&(j=i.RG32UI),F===i.BYTE&&(j=i.RG8I),F===i.SHORT&&(j=i.RG16I),F===i.INT&&(j=i.RG32I)),y===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RGB8UI),F===i.UNSIGNED_SHORT&&(j=i.RGB16UI),F===i.UNSIGNED_INT&&(j=i.RGB32UI),F===i.BYTE&&(j=i.RGB8I),F===i.SHORT&&(j=i.RGB16I),F===i.INT&&(j=i.RGB32I)),y===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),F===i.UNSIGNED_INT&&(j=i.RGBA32UI),F===i.BYTE&&(j=i.RGBA8I),F===i.SHORT&&(j=i.RGBA16I),F===i.INT&&(j=i.RGBA32I)),y===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),y===i.RGBA){const bt=at?sa:ie.getTransfer(st);F===i.FLOAT&&(j=i.RGBA32F),F===i.HALF_FLOAT&&(j=i.RGBA16F),F===i.UNSIGNED_BYTE&&(j=bt===fe?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(R,y){let F;return R?y===null||y===ts||y===qs?F=i.DEPTH24_STENCIL8:y===Yn?F=i.DEPTH32F_STENCIL8:y===Pr&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ts||y===qs?F=i.DEPTH_COMPONENT24:y===Yn?F=i.DEPTH_COMPONENT32F:y===Pr&&(F=i.DEPTH_COMPONENT16),F}function P(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==En&&R.minFilter!==bn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function A(R){const y=R.target;y.removeEventListener("dispose",A),L(y),y.isVideoTexture&&h.delete(y)}function w(R){const y=R.target;y.removeEventListener("dispose",w),S(y)}function L(R){const y=n.get(R);if(y.__webglInit===void 0)return;const F=R.source,st=d.get(F);if(st){const at=st[y.__cacheKey];at.usedTimes--,at.usedTimes===0&&E(R),Object.keys(st).length===0&&d.delete(F)}n.remove(R)}function E(R){const y=n.get(R);i.deleteTexture(y.__webglTexture);const F=R.source,st=d.get(F);delete st[y.__cacheKey],o.memory.textures--}function S(R){const y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(y.__webglFramebuffer[st]))for(let at=0;at<y.__webglFramebuffer[st].length;at++)i.deleteFramebuffer(y.__webglFramebuffer[st][at]);else i.deleteFramebuffer(y.__webglFramebuffer[st]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[st])}else{if(Array.isArray(y.__webglFramebuffer))for(let st=0;st<y.__webglFramebuffer.length;st++)i.deleteFramebuffer(y.__webglFramebuffer[st]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let st=0;st<y.__webglColorRenderbuffer.length;st++)y.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[st]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=R.textures;for(let st=0,at=F.length;st<at;st++){const j=n.get(F[st]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(F[st])}n.remove(R)}let I=0;function N(){I=0}function z(){const R=I;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),I+=1,R}function W(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function H(R,y){const F=n.get(R);if(R.isVideoTexture&&Dt(R),R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){const st=R.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(F,R,y);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+y)}function q(R,y){const F=n.get(R);if(R.version>0&&F.__version!==R.version){X(F,R,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+y)}function Q(R,y){const F=n.get(R);if(R.version>0&&F.__version!==R.version){X(F,R,y);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+y)}function Z(R,y){const F=n.get(R);if(R.version>0&&F.__version!==R.version){U(F,R,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+y)}const rt={[vc]:i.REPEAT,[Ki]:i.CLAMP_TO_EDGE,[Mc]:i.MIRRORED_REPEAT},dt={[En]:i.NEAREST,[Rf]:i.NEAREST_MIPMAP_NEAREST,[Or]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[ua]:i.LINEAR_MIPMAP_NEAREST,[$i]:i.LINEAR_MIPMAP_LINEAR},pt={[Df]:i.NEVER,[Of]:i.ALWAYS,[If]:i.LESS,[$u]:i.LEQUAL,[Uf]:i.EQUAL,[zf]:i.GEQUAL,[Nf]:i.GREATER,[Ff]:i.NOTEQUAL};function it(R,y){if(y.type===Yn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===bn||y.magFilter===ua||y.magFilter===Or||y.magFilter===$i||y.minFilter===bn||y.minFilter===ua||y.minFilter===Or||y.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,rt[y.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,rt[y.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,rt[y.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,dt[y.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,dt[y.minFilter]),y.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,pt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===En||y.minFilter!==Or&&y.minFilter!==$i||y.type===Yn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ut(R,y){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",A));const st=y.source;let at=d.get(st);at===void 0&&(at={},d.set(st,at));const j=W(y);if(j!==R.__cacheKey){at[j]===void 0&&(at[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),at[j].usedTimes++;const bt=at[R.__cacheKey];bt!==void 0&&(at[R.__cacheKey].usedTimes--,bt.usedTimes===0&&E(y)),R.__cacheKey=j,R.__webglTexture=at[j].texture}return F}function X(R,y,F){let st=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(st=i.TEXTURE_3D);const at=ut(R,y),j=y.source;e.bindTexture(st,R.__webglTexture,i.TEXTURE0+F);const bt=n.get(j);if(j.version!==bt.__version||at===!0){e.activeTexture(i.TEXTURE0+F);const _t=ie.getPrimaries(ie.workingColorSpace),yt=y.colorSpace===Ci?null:ie.getPrimaries(y.colorSpace),Xt=y.colorSpace===Ci||_t===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let mt=_(y.image,!1,s.maxTextureSize);mt=Et(y,mt);const Ct=r.convert(y.format,y.colorSpace),Ht=r.convert(y.type);let ot=M(y.internalFormat,Ct,Ht,y.colorSpace,y.isVideoTexture);it(st,y);let K;const gt=y.mipmaps,Tt=y.isVideoTexture!==!0,Pt=bt.__version===void 0||at===!0,D=j.dataReady,nt=P(y,mt);if(y.isDepthTexture)ot=x(y.format===Ys,y.type),Pt&&(Tt?e.texStorage2D(i.TEXTURE_2D,1,ot,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,ot,mt.width,mt.height,0,Ct,Ht,null));else if(y.isDataTexture)if(gt.length>0){Tt&&Pt&&e.texStorage2D(i.TEXTURE_2D,nt,ot,gt[0].width,gt[0].height);for(let Y=0,et=gt.length;Y<et;Y++)K=gt[Y],Tt?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,K.width,K.height,Ct,Ht,K.data):e.texImage2D(i.TEXTURE_2D,Y,ot,K.width,K.height,0,Ct,Ht,K.data);y.generateMipmaps=!1}else Tt?(Pt&&e.texStorage2D(i.TEXTURE_2D,nt,ot,mt.width,mt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt.width,mt.height,Ct,Ht,mt.data)):e.texImage2D(i.TEXTURE_2D,0,ot,mt.width,mt.height,0,Ct,Ht,mt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Tt&&Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,ot,gt[0].width,gt[0].height,mt.depth);for(let Y=0,et=gt.length;Y<et;Y++)if(K=gt[Y],y.format!==zn)if(Ct!==null)if(Tt){if(D)if(y.layerUpdates.size>0){const xt=Oh(K.width,K.height,y.format,y.type);for(const ht of y.layerUpdates){const Lt=K.data.subarray(ht*xt/K.data.BYTES_PER_ELEMENT,(ht+1)*xt/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,ht,K.width,K.height,1,Ct,Lt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,K.width,K.height,mt.depth,Ct,K.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,ot,K.width,K.height,mt.depth,0,K.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Tt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,K.width,K.height,mt.depth,Ct,Ht,K.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,ot,K.width,K.height,mt.depth,0,Ct,Ht,K.data)}else{Tt&&Pt&&e.texStorage2D(i.TEXTURE_2D,nt,ot,gt[0].width,gt[0].height);for(let Y=0,et=gt.length;Y<et;Y++)K=gt[Y],y.format!==zn?Ct!==null?Tt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,K.width,K.height,Ct,K.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,ot,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Tt?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,K.width,K.height,Ct,Ht,K.data):e.texImage2D(i.TEXTURE_2D,Y,ot,K.width,K.height,0,Ct,Ht,K.data)}else if(y.isDataArrayTexture)if(Tt){if(Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,ot,mt.width,mt.height,mt.depth),D)if(y.layerUpdates.size>0){const Y=Oh(mt.width,mt.height,y.format,y.type);for(const et of y.layerUpdates){const xt=mt.data.subarray(et*Y/mt.data.BYTES_PER_ELEMENT,(et+1)*Y/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,mt.width,mt.height,1,Ct,Ht,xt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Ct,Ht,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ot,mt.width,mt.height,mt.depth,0,Ct,Ht,mt.data);else if(y.isData3DTexture)Tt?(Pt&&e.texStorage3D(i.TEXTURE_3D,nt,ot,mt.width,mt.height,mt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Ct,Ht,mt.data)):e.texImage3D(i.TEXTURE_3D,0,ot,mt.width,mt.height,mt.depth,0,Ct,Ht,mt.data);else if(y.isFramebufferTexture){if(Pt)if(Tt)e.texStorage2D(i.TEXTURE_2D,nt,ot,mt.width,mt.height);else{let Y=mt.width,et=mt.height;for(let xt=0;xt<nt;xt++)e.texImage2D(i.TEXTURE_2D,xt,ot,Y,et,0,Ct,Ht,null),Y>>=1,et>>=1}}else if(gt.length>0){if(Tt&&Pt){const Y=Mt(gt[0]);e.texStorage2D(i.TEXTURE_2D,nt,ot,Y.width,Y.height)}for(let Y=0,et=gt.length;Y<et;Y++)K=gt[Y],Tt?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Ct,Ht,K):e.texImage2D(i.TEXTURE_2D,Y,ot,Ct,Ht,K);y.generateMipmaps=!1}else if(Tt){if(Pt){const Y=Mt(mt);e.texStorage2D(i.TEXTURE_2D,nt,ot,Y.width,Y.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Ht,mt)}else e.texImage2D(i.TEXTURE_2D,0,ot,Ct,Ht,mt);m(y)&&p(st),bt.__version=j.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function U(R,y,F){if(y.image.length!==6)return;const st=ut(R,y),at=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+F);const j=n.get(at);if(at.version!==j.__version||st===!0){e.activeTexture(i.TEXTURE0+F);const bt=ie.getPrimaries(ie.workingColorSpace),_t=y.colorSpace===Ci?null:ie.getPrimaries(y.colorSpace),yt=y.colorSpace===Ci||bt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Xt=y.isCompressedTexture||y.image[0].isCompressedTexture,mt=y.image[0]&&y.image[0].isDataTexture,Ct=[];for(let et=0;et<6;et++)!Xt&&!mt?Ct[et]=_(y.image[et],!0,s.maxCubemapSize):Ct[et]=mt?y.image[et].image:y.image[et],Ct[et]=Et(y,Ct[et]);const Ht=Ct[0],ot=r.convert(y.format,y.colorSpace),K=r.convert(y.type),gt=M(y.internalFormat,ot,K,y.colorSpace),Tt=y.isVideoTexture!==!0,Pt=j.__version===void 0||st===!0,D=at.dataReady;let nt=P(y,Ht);it(i.TEXTURE_CUBE_MAP,y);let Y;if(Xt){Tt&&Pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,gt,Ht.width,Ht.height);for(let et=0;et<6;et++){Y=Ct[et].mipmaps;for(let xt=0;xt<Y.length;xt++){const ht=Y[xt];y.format!==zn?ot!==null?Tt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,0,0,ht.width,ht.height,ot,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,gt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,0,0,ht.width,ht.height,ot,K,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,gt,ht.width,ht.height,0,ot,K,ht.data)}}}else{if(Y=y.mipmaps,Tt&&Pt){Y.length>0&&nt++;const et=Mt(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,gt,et.width,et.height)}for(let et=0;et<6;et++)if(mt){Tt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ct[et].width,Ct[et].height,ot,K,Ct[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,gt,Ct[et].width,Ct[et].height,0,ot,K,Ct[et].data);for(let xt=0;xt<Y.length;xt++){const Lt=Y[xt].image[et].image;Tt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,0,0,Lt.width,Lt.height,ot,K,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,gt,Lt.width,Lt.height,0,ot,K,Lt.data)}}else{Tt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,ot,K,Ct[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,gt,ot,K,Ct[et]);for(let xt=0;xt<Y.length;xt++){const ht=Y[xt];Tt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,0,0,ot,K,ht.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,gt,ot,K,ht.image[et])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),j.__version=at.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function V(R,y,F,st,at,j){const bt=r.convert(F.format,F.colorSpace),_t=r.convert(F.type),yt=M(F.internalFormat,bt,_t,F.colorSpace),Xt=n.get(y),mt=n.get(F);if(mt.__renderTarget=y,!Xt.__hasExternalTextures){const Ct=Math.max(1,y.width>>j),Ht=Math.max(1,y.height>>j);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,j,yt,Ct,Ht,y.depth,0,bt,_t,null):e.texImage2D(at,j,yt,Ct,Ht,0,bt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Gt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,at,mt.__webglTexture,0,Vt(y)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,at,mt.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function k(R,y,F){if(i.bindRenderbuffer(i.RENDERBUFFER,R),y.depthBuffer){const st=y.depthTexture,at=st&&st.isDepthTexture?st.type:null,j=x(y.stencilBuffer,at),bt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=Vt(y);Gt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,j,y.width,y.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,j,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,R)}else{const st=y.textures;for(let at=0;at<st.length;at++){const j=st[at],bt=r.convert(j.format,j.colorSpace),_t=r.convert(j.type),yt=M(j.internalFormat,bt,_t,j.colorSpace),Xt=Vt(y);F&&Gt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,yt,y.width,y.height):Gt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,yt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,yt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function tt(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=n.get(y.depthTexture);st.__renderTarget=y,(!st.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);const at=st.__webglTexture,j=Vt(y);if(y.depthTexture.format===zs)Gt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(y.depthTexture.format===Ys)Gt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function ft(R){const y=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const st=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),st){const at=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,st.removeEventListener("dispose",at)};st.addEventListener("dispose",at),y.__depthDisposeCallback=at}y.__boundDepthTexture=st}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");tt(y.__webglFramebuffer,R)}else if(F){y.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[st]),y.__webglDepthbuffer[st]===void 0)y.__webglDepthbuffer[st]=i.createRenderbuffer(),k(y.__webglDepthbuffer[st],R,!1);else{const at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),k(y.__webglDepthbuffer,R,!1);else{const st=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(R,y,F){const st=n.get(R);y!==void 0&&V(st.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ft(R)}function It(R){const y=R.texture,F=n.get(R),st=n.get(y);R.addEventListener("dispose",w);const at=R.textures,j=R.isWebGLCubeRenderTarget===!0,bt=at.length>1;if(bt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=y.version,o.memory.textures++),j){F.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[_t]=[];for(let yt=0;yt<y.mipmaps.length;yt++)F.__webglFramebuffer[_t][yt]=i.createFramebuffer()}else F.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let _t=0;_t<y.mipmaps.length;_t++)F.__webglFramebuffer[_t]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(bt)for(let _t=0,yt=at.length;_t<yt;_t++){const Xt=n.get(at[_t]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Gt(R)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let _t=0;_t<at.length;_t++){const yt=at[_t];F.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[_t]);const Xt=r.convert(yt.format,yt.colorSpace),mt=r.convert(yt.type),Ct=M(yt.internalFormat,Xt,mt,yt.colorSpace,R.isXRRenderTarget===!0),Ht=Vt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,Ct,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,F.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),k(F.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),it(i.TEXTURE_CUBE_MAP,y);for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)V(F.__webglFramebuffer[_t][yt],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,yt);else V(F.__webglFramebuffer[_t],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let _t=0,yt=at.length;_t<yt;_t++){const Xt=at[_t],mt=n.get(Xt);e.bindTexture(i.TEXTURE_2D,mt.__webglTexture),it(i.TEXTURE_2D,Xt),V(F.__webglFramebuffer,R,Xt,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),m(Xt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_t=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,st.__webglTexture),it(_t,y),y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)V(F.__webglFramebuffer[yt],R,y,i.COLOR_ATTACHMENT0,_t,yt);else V(F.__webglFramebuffer,R,y,i.COLOR_ATTACHMENT0,_t,0);m(y)&&p(_t),e.unbindTexture()}R.depthBuffer&&ft(R)}function Ut(R){const y=R.textures;for(let F=0,st=y.length;F<st;F++){const at=y[F];if(m(at)){const j=v(R),bt=n.get(at).__webglTexture;e.bindTexture(j,bt),p(j),e.unbindTexture()}}}const Wt=[],O=[];function St(R){if(R.samples>0){if(Gt(R)===!1){const y=R.textures,F=R.width,st=R.height;let at=i.COLOR_BUFFER_BIT;const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(R),_t=y.length>1;if(_t)for(let yt=0;yt<y.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let yt=0;yt<y.length;yt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[yt]);const Xt=n.get(y[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,F,st,0,0,F,st,at,i.NEAREST),c===!0&&(Wt.length=0,O.length=0,Wt.push(i.COLOR_ATTACHMENT0+yt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Wt.push(j),O.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let yt=0;yt<y.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[yt]);const Xt=n.get(y[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Vt(R){return Math.min(s.maxSamples,R.samples)}function Gt(R){const y=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Dt(R){const y=o.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Et(R,y){const F=R.colorSpace,st=R.format,at=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Js&&F!==Ci&&(ie.getTransfer(F)===fe?(st!==zn||at!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function Mt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=H,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=Z,this.rebindTextures=lt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=V,this.useMultisampledRTT=Gt}function q1(i,t){function e(n,s=Ci){let r;const o=ie.getTransfer(s);if(n===_i)return i.UNSIGNED_BYTE;if(n===dl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hu)return i.BYTE;if(n===Gu)return i.SHORT;if(n===Pr)return i.UNSIGNED_SHORT;if(n===ul)return i.INT;if(n===ts)return i.UNSIGNED_INT;if(n===Yn)return i.FLOAT;if(n===pi)return i.HALF_FLOAT;if(n===Xu)return i.ALPHA;if(n===qu)return i.RGB;if(n===zn)return i.RGBA;if(n===Yu)return i.LUMINANCE;if(n===Zu)return i.LUMINANCE_ALPHA;if(n===zs)return i.DEPTH_COMPONENT;if(n===Ys)return i.DEPTH_STENCIL;if(n===ia)return i.RED;if(n===pl)return i.RED_INTEGER;if(n===ml)return i.RG;if(n===gl)return i.RG_INTEGER;if(n===_l)return i.RGBA_INTEGER;if(n===Uo||n===No||n===Fo||n===zo)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yc||n===Sc||n===Ec||n===wc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tc||n===Ac||n===bc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Tc||n===Ac)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Rc||n===Cc||n===Pc||n===Lc||n===Dc||n===Ic||n===Uc||n===Nc||n===Fc||n===zc||n===Oc||n===Bc||n===kc||n===Vc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ic)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oo||n===Hc||n===Gc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Oo)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ju||n===Wc||n===Xc||n===qc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Y1 extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ve extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z1={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Z1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const j1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K1=`
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

}`;class $1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Cn({vertexShader:j1,fragmentShader:K1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nt(new jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class J1 extends ns{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new $1,m=e.getContextAttributes();let p=null,v=null;const M=[],x=[],P=new wt;let A=null;const w=new Mn;w.viewport=new Ee;const L=new Mn;L.viewport=new Ee;const E=[w,L],S=new Y1;let I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let U=M[X];return U===void 0&&(U=new Ba,M[X]=U),U.getTargetRaySpace()},this.getControllerGrip=function(X){let U=M[X];return U===void 0&&(U=new Ba,M[X]=U),U.getGripSpace()},this.getHand=function(X){let U=M[X];return U===void 0&&(U=new Ba,M[X]=U),U.getHandSpace()};function z(X){const U=x.indexOf(X.inputSource);if(U===-1)return;const V=M[U];V!==void 0&&(V.update(X.inputSource,X.frame,l||o),V.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",H);for(let X=0;X<M.length;X++){const U=x[X];U!==null&&(x[X]=null,M[X].disconnect(U))}I=null,N=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,v=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const U={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,U),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new xi(f.framebufferWidth,f.framebufferHeight,{format:zn,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let U=null,V=null,k=null;m.depth&&(k=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,U=m.stencil?Ys:zs,V=m.stencil?qs:ts);const tt={colorFormat:e.RGBA8,depthFormat:k,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(tt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new xi(d.textureWidth,d.textureHeight,{format:zn,type:_i,depthTexture:new yl(d.textureWidth,d.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(X){for(let U=0;U<X.removed.length;U++){const V=X.removed[U],k=x.indexOf(V);k>=0&&(x[k]=null,M[k].disconnect(V))}for(let U=0;U<X.added.length;U++){const V=X.added[U];let k=x.indexOf(V);if(k===-1){for(let ft=0;ft<M.length;ft++)if(ft>=x.length){x.push(V),k=ft;break}else if(x[ft]===null){x[ft]=V,k=ft;break}if(k===-1)break}const tt=M[k];tt&&tt.connect(V)}}const q=new b,Q=new b;function Z(X,U,V){q.setFromMatrixPosition(U.matrixWorld),Q.setFromMatrixPosition(V.matrixWorld);const k=q.distanceTo(Q),tt=U.projectionMatrix.elements,ft=V.projectionMatrix.elements,lt=tt[14]/(tt[10]-1),It=tt[14]/(tt[10]+1),Ut=(tt[9]+1)/tt[5],Wt=(tt[9]-1)/tt[5],O=(tt[8]-1)/tt[0],St=(ft[8]+1)/ft[0],Vt=lt*O,Gt=lt*St,Dt=k/(-O+St),Et=Dt*-O;if(U.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Et),X.translateZ(Dt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),tt[10]===-1)X.projectionMatrix.copy(U.projectionMatrix),X.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const Mt=lt+Dt,R=It+Dt,y=Vt-Et,F=Gt+(k-Et),st=Ut*It/R*Mt,at=Wt*It/R*Mt;X.projectionMatrix.makePerspective(y,F,st,at,Mt,R),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function rt(X,U){U===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(U.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let U=X.near,V=X.far;_.texture!==null&&(_.depthNear>0&&(U=_.depthNear),_.depthFar>0&&(V=_.depthFar)),S.near=L.near=w.near=U,S.far=L.far=w.far=V,(I!==S.near||N!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,N=S.far),w.layers.mask=X.layers.mask|2,L.layers.mask=X.layers.mask|4,S.layers.mask=w.layers.mask|L.layers.mask;const k=X.parent,tt=S.cameras;rt(S,k);for(let ft=0;ft<tt.length;ft++)rt(tt[ft],k);tt.length===2?Z(S,w,L):S.projectionMatrix.copy(w.projectionMatrix),dt(X,S,k)};function dt(X,U,V){V===null?X.matrix.copy(U.matrixWorld):(X.matrix.copy(V.matrixWorld),X.matrix.invert(),X.matrix.multiply(U.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(U.projectionMatrix),X.projectionMatrixInverse.copy(U.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Yc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let pt=null;function it(X,U){if(h=U.getViewerPose(l||o),g=U,h!==null){const V=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let k=!1;V.length!==S.cameras.length&&(S.cameras.length=0,k=!0);for(let ft=0;ft<V.length;ft++){const lt=V[ft];let It=null;if(f!==null)It=f.getViewport(lt);else{const Wt=u.getViewSubImage(d,lt);It=Wt.viewport,ft===0&&(t.setRenderTargetTextures(v,Wt.colorTexture,d.ignoreDepthValues?void 0:Wt.depthStencilTexture),t.setRenderTarget(v))}let Ut=E[ft];Ut===void 0&&(Ut=new Mn,Ut.layers.enable(ft),Ut.viewport=new Ee,E[ft]=Ut),Ut.matrix.fromArray(lt.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(lt.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(It.x,It.y,It.width,It.height),ft===0&&(S.matrix.copy(Ut.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),k===!0&&S.cameras.push(Ut)}const tt=s.enabledFeatures;if(tt&&tt.includes("depth-sensing")){const ft=u.getDepthInformation(V[0]);ft&&ft.isValid&&ft.texture&&_.init(t,ft,s.renderState)}}for(let V=0;V<M.length;V++){const k=x[V],tt=M[V];k!==null&&tt!==void 0&&tt.update(k,U,l||o)}pt&&pt(X,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),g=null}const ut=new cd;ut.setAnimationLoop(it),this.setAnimationLoop=function(X){pt=X},this.dispose=function(){}}}const Vi=new $n,Q1=new ue;function t_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,rd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),M=v.envMap,x=v.envMapRotation;M&&(m.envMap.value=M,Vi.copy(x),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),m.envMapRotation.value.setFromMatrix4(Q1.makeRotationFromEuler(Vi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function e_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const x=M.program;n.uniformBlockBinding(v,x)}function l(v,M){let x=s[v.id];x===void 0&&(g(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",m));const P=M.program;n.updateUBOMapping(v,P);const A=t.render.frame;r[v.id]!==A&&(d(v),r[v.id]=A)}function h(v){const M=u();v.__bindingPointIndex=M;const x=i.createBuffer(),P=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const M=s[v.id],x=v.uniforms,P=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,w=x.length;A<w;A++){const L=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,S=L.length;E<S;E++){const I=L[E];if(f(I,A,E,P)===!0){const N=I.__offset,z=Array.isArray(I.value)?I.value:[I.value];let W=0;for(let H=0;H<z.length;H++){const q=z[H],Q=_(q);typeof q=="number"||typeof q=="boolean"?(I.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,N+W,I.__data)):q.isMatrix3?(I.__data[0]=q.elements[0],I.__data[1]=q.elements[1],I.__data[2]=q.elements[2],I.__data[3]=0,I.__data[4]=q.elements[3],I.__data[5]=q.elements[4],I.__data[6]=q.elements[5],I.__data[7]=0,I.__data[8]=q.elements[6],I.__data[9]=q.elements[7],I.__data[10]=q.elements[8],I.__data[11]=0):(q.toArray(I.__data,W),W+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,M,x,P){const A=v.value,w=M+"_"+x;if(P[w]===void 0)return typeof A=="number"||typeof A=="boolean"?P[w]=A:P[w]=A.clone(),!0;{const L=P[w];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return P[w]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(v){const M=v.uniforms;let x=0;const P=16;for(let w=0,L=M.length;w<L;w++){const E=Array.isArray(M[w])?M[w]:[M[w]];for(let S=0,I=E.length;S<I;S++){const N=E[S],z=Array.isArray(N.value)?N.value:[N.value];for(let W=0,H=z.length;W<H;W++){const q=z[W],Q=_(q),Z=x%P,rt=Z%Q.boundary,dt=Z+rt;x+=rt,dt!==0&&P-dt<Q.storage&&(x+=P-dt),N.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=Q.storage}}}const A=x%P;return A>0&&(x+=P-A),v.__size=x,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class n_{constructor(t={}){const{canvas:e=Vf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ge,this.toneMapping=Di,this.toneMappingExposure=1;const x=this;let P=!1,A=0,w=0,L=null,E=-1,S=null;const I=new Ee,N=new Ee;let z=null;const W=new Kt(0);let H=0,q=e.width,Q=e.height,Z=1,rt=null,dt=null;const pt=new Ee(0,0,q,Q),it=new Ee(0,0,q,Q);let ut=!1;const X=new vl;let U=!1,V=!1;const k=new ue,tt=new ue,ft=new b,lt=new Ee,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function Wt(){return L===null?Z:1}let O=n;function St(T,B){return e.getContext(T,B)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hl}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),O===null){const B="webgl2";if(O=St(B,T),O===null)throw St(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Vt,Gt,Dt,Et,Mt,R,y,F,st,at,j,bt,_t,yt,Xt,mt,Ct,Ht,ot,K,gt,Tt,Pt,D;function nt(){Vt=new ag(O),Vt.init(),Tt=new q1(O,Vt),Gt=new eg(O,Vt,t,Tt),Dt=new G1(O,Vt),Gt.reverseDepthBuffer&&d&&Dt.buffers.depth.setReversed(!0),Et=new hg(O),Mt=new R1,R=new X1(O,Vt,Dt,Mt,Gt,Tt,Et),y=new ig(x),F=new og(x),st=new _0(O),Pt=new Qm(O,st),at=new cg(O,st,Et,Pt),j=new dg(O,at,st,Et),ot=new ug(O,Gt,R),mt=new ng(Mt),bt=new b1(x,y,F,Vt,Gt,Pt,mt),_t=new t_(x,Mt),yt=new P1,Xt=new F1(Vt),Ht=new Jm(x,y,F,Dt,j,f,c),Ct=new V1(x,j,Gt),D=new e_(O,Et,Gt,Dt),K=new tg(O,Vt,Et),gt=new lg(O,Vt,Et),Et.programs=bt.programs,x.capabilities=Gt,x.extensions=Vt,x.properties=Mt,x.renderLists=yt,x.shadowMap=Ct,x.state=Dt,x.info=Et}nt();const Y=new J1(x,O);this.xr=Y,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=Vt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Vt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(q,Q,!1))},this.getSize=function(T){return T.set(q,Q)},this.setSize=function(T,B,$=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,Q=B,e.width=Math.floor(T*Z),e.height=Math.floor(B*Z),$===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(q*Z,Q*Z).floor()},this.setDrawingBufferSize=function(T,B,$){q=T,Q=B,Z=$,e.width=Math.floor(T*$),e.height=Math.floor(B*$),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(pt)},this.setViewport=function(T,B,$,J){T.isVector4?pt.set(T.x,T.y,T.z,T.w):pt.set(T,B,$,J),Dt.viewport(I.copy(pt).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(it)},this.setScissor=function(T,B,$,J){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,B,$,J),Dt.scissor(N.copy(it).multiplyScalar(Z).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(T){Dt.setScissorTest(ut=T)},this.setOpaqueSort=function(T){rt=T},this.setTransparentSort=function(T){dt=T},this.getClearColor=function(T){return T.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(T=!0,B=!0,$=!0){let J=0;if(T){let G=!1;if(L!==null){const vt=L.texture.format;G=vt===_l||vt===gl||vt===pl}if(G){const vt=L.texture.type,Rt=vt===_i||vt===ts||vt===Pr||vt===qs||vt===dl||vt===fl,zt=Ht.getClearColor(),Ot=Ht.getClearAlpha(),Zt=zt.r,Qt=zt.g,Bt=zt.b;Rt?(g[0]=Zt,g[1]=Qt,g[2]=Bt,g[3]=Ot,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Zt,_[1]=Qt,_[2]=Bt,_[3]=Ot,O.clearBufferiv(O.COLOR,0,_))}else J|=O.COLOR_BUFFER_BIT}B&&(J|=O.DEPTH_BUFFER_BIT),$&&(J|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),yt.dispose(),Xt.dispose(),Mt.dispose(),y.dispose(),F.dispose(),j.dispose(),Pt.dispose(),D.dispose(),bt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",ge),Y.removeEventListener("sessionend",ne),me.stop()};function et(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const T=Et.autoReset,B=Ct.enabled,$=Ct.autoUpdate,J=Ct.needsUpdate,G=Ct.type;nt(),Et.autoReset=T,Ct.enabled=B,Ct.autoUpdate=$,Ct.needsUpdate=J,Ct.type=G}function ht(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Lt(T){const B=T.target;B.removeEventListener("dispose",Lt),qt(B)}function qt(T){$t(T),Mt.remove(T)}function $t(T){const B=Mt.get(T).programs;B!==void 0&&(B.forEach(function($){bt.releaseProgram($)}),T.isShaderMaterial&&bt.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,$,J,G,vt){B===null&&(B=It);const Rt=G.isMesh&&G.matrixWorld.determinant()<0,zt=$e(T,B,$,J,G);Dt.setMaterial(J,Rt);let Ot=$.index,Zt=1;if(J.wireframe===!0){if(Ot=at.getWireframeAttribute($),Ot===void 0)return;Zt=2}const Qt=$.drawRange,Bt=$.attributes.position;let re=Qt.start*Zt,ve=(Qt.start+Qt.count)*Zt;vt!==null&&(re=Math.max(re,vt.start*Zt),ve=Math.min(ve,(vt.start+vt.count)*Zt)),Ot!==null?(re=Math.max(re,0),ve=Math.min(ve,Ot.count)):Bt!=null&&(re=Math.max(re,0),ve=Math.min(ve,Bt.count));const ye=ve-re;if(ye<0||ye===1/0)return;Pt.setup(G,J,zt,$,Ot);let cn,ce=K;if(Ot!==null&&(cn=st.get(Ot),ce=gt,ce.setIndex(cn)),G.isMesh)J.wireframe===!0?(Dt.setLineWidth(J.wireframeLinewidth*Wt()),ce.setMode(O.LINES)):ce.setMode(O.TRIANGLES);else if(G.isLine){let kt=J.linewidth;kt===void 0&&(kt=1),Dt.setLineWidth(kt*Wt()),G.isLineSegments?ce.setMode(O.LINES):G.isLineLoop?ce.setMode(O.LINE_LOOP):ce.setMode(O.LINE_STRIP)}else G.isPoints?ce.setMode(O.POINTS):G.isSprite&&ce.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ce.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))ce.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const kt=G._multiDrawStarts,ti=G._multiDrawCounts,le=G._multiDrawCount,Pn=Ot?st.get(Ot).bytesPerElement:1,cs=Mt.get(J).currentProgram.getUniforms();for(let fn=0;fn<le;fn++)cs.setValue(O,"_gl_DrawID",fn),ce.render(kt[fn]/Pn,ti[fn])}else if(G.isInstancedMesh)ce.renderInstances(re,ye,G.count);else if($.isInstancedBufferGeometry){const kt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ti=Math.min($.instanceCount,kt);ce.renderInstances(re,ye,ti)}else ce.render(re,ye)};function ct(T,B,$){T.transparent===!0&&T.side===Le&&T.forceSinglePass===!1?(T.side=on,T.needsUpdate=!0,dn(T,B,$),T.side=Ni,T.needsUpdate=!0,dn(T,B,$),T.side=Le):dn(T,B,$)}this.compile=function(T,B,$=null){$===null&&($=T),p=Xt.get($),p.init(B),M.push(p),$.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),T!==$&&T.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const J=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const vt=G.material;if(vt)if(Array.isArray(vt))for(let Rt=0;Rt<vt.length;Rt++){const zt=vt[Rt];ct(zt,$,G),J.add(zt)}else ct(vt,$,G),J.add(vt)}),M.pop(),p=null,J},this.compileAsync=function(T,B,$=null){const J=this.compile(T,B,$);return new Promise(G=>{function vt(){if(J.forEach(function(Rt){Mt.get(Rt).currentProgram.isReady()&&J.delete(Rt)}),J.size===0){G(T);return}setTimeout(vt,10)}Vt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Jt=null;function Me(T){Jt&&Jt(T)}function ge(){me.stop()}function ne(){me.start()}const me=new cd;me.setAnimationLoop(Me),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(T){Jt=T,Y.setAnimationLoop(T),T===null?me.stop():me.start()},Y.addEventListener("sessionstart",ge),Y.addEventListener("sessionend",ne),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(B),B=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,B,L),p=Xt.get(T,M.length),p.init(B),M.push(p),tt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),X.setFromProjectionMatrix(tt),V=this.localClippingEnabled,U=mt.init(this.clippingPlanes,V),m=yt.get(T,v.length),m.init(),v.push(m),Y.enabled===!0&&Y.isPresenting===!0){const vt=x.xr.getDepthSensingMesh();vt!==null&&Be(vt,B,-1/0,x.sortObjects)}Be(T,B,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(rt,dt),Ut=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Ut&&Ht.addToRenderList(m,T),this.info.render.frame++,U===!0&&mt.beginShadows();const $=p.state.shadowsArray;Ct.render($,T,B),U===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,G=m.transmissive;if(p.setupLights(),B.isArrayCamera){const vt=B.cameras;if(G.length>0)for(let Rt=0,zt=vt.length;Rt<zt;Rt++){const Ot=vt[Rt];Re(J,G,T,Ot)}Ut&&Ht.render(T);for(let Rt=0,zt=vt.length;Rt<zt;Rt++){const Ot=vt[Rt];Te(m,T,Ot,Ot.viewport)}}else G.length>0&&Re(J,G,T,B),Ut&&Ht.render(T),Te(m,T,B);L!==null&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(x,T,B),Pt.resetDefaultState(),E=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],U===!0&&mt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Be(T,B,$,J){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){J&&lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(tt);const Rt=j.update(T),zt=T.material;zt.visible&&m.push(T,Rt,zt,$,lt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){const Rt=j.update(T),zt=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),lt.copy(T.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),lt.copy(Rt.boundingSphere.center)),lt.applyMatrix4(T.matrixWorld).applyMatrix4(tt)),Array.isArray(zt)){const Ot=Rt.groups;for(let Zt=0,Qt=Ot.length;Zt<Qt;Zt++){const Bt=Ot[Zt],re=zt[Bt.materialIndex];re&&re.visible&&m.push(T,Rt,re,$,lt.z,Bt)}}else zt.visible&&m.push(T,Rt,zt,$,lt.z,null)}}const vt=T.children;for(let Rt=0,zt=vt.length;Rt<zt;Rt++)Be(vt[Rt],B,$,J)}function Te(T,B,$,J){const G=T.opaque,vt=T.transmissive,Rt=T.transparent;p.setupLightsView($),U===!0&&mt.setGlobalState(x.clippingPlanes,$),J&&Dt.viewport(I.copy(J)),G.length>0&&_e(G,B,$),vt.length>0&&_e(vt,B,$),Rt.length>0&&_e(Rt,B,$),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function Re(T,B,$,J){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new xi(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?pi:_i,minFilter:$i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const vt=p.state.transmissionRenderTarget[J.id],Rt=J.viewport||I;vt.setSize(Rt.z,Rt.w);const zt=x.getRenderTarget();x.setRenderTarget(vt),x.getClearColor(W),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),Ut&&Ht.render($);const Ot=x.toneMapping;x.toneMapping=Di;const Zt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),U===!0&&mt.setGlobalState(x.clippingPlanes,J),_e(T,$,J),R.updateMultisampleRenderTarget(vt),R.updateRenderTargetMipmap(vt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Bt=0,re=B.length;Bt<re;Bt++){const ve=B[Bt],ye=ve.object,cn=ve.geometry,ce=ve.material,kt=ve.group;if(ce.side===Le&&ye.layers.test(J.layers)){const ti=ce.side;ce.side=on,ce.needsUpdate=!0,Qn(ye,$,J,cn,ce,kt),ce.side=ti,ce.needsUpdate=!0,Qt=!0}}Qt===!0&&(R.updateMultisampleRenderTarget(vt),R.updateRenderTargetMipmap(vt))}x.setRenderTarget(zt),x.setClearColor(W,H),Zt!==void 0&&(J.viewport=Zt),x.toneMapping=Ot}function _e(T,B,$){const J=B.isScene===!0?B.overrideMaterial:null;for(let G=0,vt=T.length;G<vt;G++){const Rt=T[G],zt=Rt.object,Ot=Rt.geometry,Zt=J===null?Rt.material:J,Qt=Rt.group;zt.layers.test($.layers)&&Qn(zt,B,$,Ot,Zt,Qt)}}function Qn(T,B,$,J,G,vt){T.onBeforeRender(x,B,$,J,G,vt),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(x,B,$,J,T,vt),G.transparent===!0&&G.side===Le&&G.forceSinglePass===!1?(G.side=on,G.needsUpdate=!0,x.renderBufferDirect($,B,J,G,T,vt),G.side=Ni,G.needsUpdate=!0,x.renderBufferDirect($,B,J,G,T,vt),G.side=Le):x.renderBufferDirect($,B,J,G,T,vt),T.onAfterRender(x,B,$,J,G,vt)}function dn(T,B,$){B.isScene!==!0&&(B=It);const J=Mt.get(T),G=p.state.lights,vt=p.state.shadowsArray,Rt=G.state.version,zt=bt.getParameters(T,G.state,vt,B,$),Ot=bt.getProgramCacheKey(zt);let Zt=J.programs;J.environment=T.isMeshStandardMaterial?B.environment:null,J.fog=B.fog,J.envMap=(T.isMeshStandardMaterial?F:y).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Zt===void 0&&(T.addEventListener("dispose",Lt),Zt=new Map,J.programs=Zt);let Qt=Zt.get(Ot);if(Qt!==void 0){if(J.currentProgram===Qt&&J.lightsStateVersion===Rt)return Ae(T,zt),Qt}else zt.uniforms=bt.getUniforms(T),T.onBeforeCompile(zt,x),Qt=bt.acquireProgram(zt,Ot),Zt.set(Ot,Qt),J.uniforms=zt.uniforms;const Bt=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Bt.clippingPlanes=mt.uniform),Ae(T,zt),J.needsLights=as(T),J.lightsStateVersion=Rt,J.needsLights&&(Bt.ambientLightColor.value=G.state.ambient,Bt.lightProbe.value=G.state.probe,Bt.directionalLights.value=G.state.directional,Bt.directionalLightShadows.value=G.state.directionalShadow,Bt.spotLights.value=G.state.spot,Bt.spotLightShadows.value=G.state.spotShadow,Bt.rectAreaLights.value=G.state.rectArea,Bt.ltc_1.value=G.state.rectAreaLTC1,Bt.ltc_2.value=G.state.rectAreaLTC2,Bt.pointLights.value=G.state.point,Bt.pointLightShadows.value=G.state.pointShadow,Bt.hemisphereLights.value=G.state.hemi,Bt.directionalShadowMap.value=G.state.directionalShadowMap,Bt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Bt.spotShadowMap.value=G.state.spotShadowMap,Bt.spotLightMatrix.value=G.state.spotLightMatrix,Bt.spotLightMap.value=G.state.spotLightMap,Bt.pointShadowMap.value=G.state.pointShadowMap,Bt.pointShadowMatrix.value=G.state.pointShadowMatrix),J.currentProgram=Qt,J.uniformsList=null,Qt}function xe(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=ko.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Ae(T,B){const $=Mt.get(T);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function $e(T,B,$,J,G){B.isScene!==!0&&(B=It),R.resetTextureUnits();const vt=B.fog,Rt=J.isMeshStandardMaterial?B.environment:null,zt=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Js,Ot=(J.isMeshStandardMaterial?F:y).get(J.envMap||Rt),Zt=J.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Qt=!!$.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Bt=!!$.morphAttributes.position,re=!!$.morphAttributes.normal,ve=!!$.morphAttributes.color;let ye=Di;J.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ye=x.toneMapping);const cn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ce=cn!==void 0?cn.length:0,kt=Mt.get(J),ti=p.state.lights;if(U===!0&&(V===!0||T!==S)){const wn=T===S&&J.id===E;mt.setState(J,T,wn)}let le=!1;J.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==ti.state.version||kt.outputColorSpace!==zt||G.isBatchedMesh&&kt.batching===!1||!G.isBatchedMesh&&kt.batching===!0||G.isBatchedMesh&&kt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&kt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&kt.instancing===!1||!G.isInstancedMesh&&kt.instancing===!0||G.isSkinnedMesh&&kt.skinning===!1||!G.isSkinnedMesh&&kt.skinning===!0||G.isInstancedMesh&&kt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&kt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&kt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&kt.instancingMorph===!1&&G.morphTexture!==null||kt.envMap!==Ot||J.fog===!0&&kt.fog!==vt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==mt.numPlanes||kt.numIntersection!==mt.numIntersection)||kt.vertexAlphas!==Zt||kt.vertexTangents!==Qt||kt.morphTargets!==Bt||kt.morphNormals!==re||kt.morphColors!==ve||kt.toneMapping!==ye||kt.morphTargetsCount!==ce)&&(le=!0):(le=!0,kt.__version=J.version);let Pn=kt.currentProgram;le===!0&&(Pn=dn(J,B,G));let cs=!1,fn=!1,nr=!1;const Se=Pn.getUniforms(),Bn=kt.uniforms;if(Dt.useProgram(Pn.program)&&(cs=!0,fn=!0,nr=!0),J.id!==E&&(E=J.id,fn=!0),cs||S!==T){Dt.buffers.depth.getReversed()?(k.copy(T.projectionMatrix),Gf(k),Wf(k),Se.setValue(O,"projectionMatrix",k)):Se.setValue(O,"projectionMatrix",T.projectionMatrix),Se.setValue(O,"viewMatrix",T.matrixWorldInverse);const Mi=Se.map.cameraPosition;Mi!==void 0&&Mi.setValue(O,ft.setFromMatrixPosition(T.matrixWorld)),Gt.logarithmicDepthBuffer&&Se.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Se.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,fn=!0,nr=!0)}if(G.isSkinnedMesh){Se.setOptional(O,G,"bindMatrix"),Se.setOptional(O,G,"bindMatrixInverse");const wn=G.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Se.setValue(O,"boneTexture",wn.boneTexture,R))}G.isBatchedMesh&&(Se.setOptional(O,G,"batchingTexture"),Se.setValue(O,"batchingTexture",G._matricesTexture,R),Se.setOptional(O,G,"batchingIdTexture"),Se.setValue(O,"batchingIdTexture",G._indirectTexture,R),Se.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&Se.setValue(O,"batchingColorTexture",G._colorsTexture,R));const ir=$.morphAttributes;if((ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0)&&ot.update(G,$,Pn),(fn||kt.receiveShadow!==G.receiveShadow)&&(kt.receiveShadow=G.receiveShadow,Se.setValue(O,"receiveShadow",G.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Bn.envMap.value=Ot,Bn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&B.environment!==null&&(Bn.envMapIntensity.value=B.environmentIntensity),fn&&(Se.setValue(O,"toneMappingExposure",x.toneMappingExposure),kt.needsLights&&os(Bn,nr),vt&&J.fog===!0&&_t.refreshFogUniforms(Bn,vt),_t.refreshMaterialUniforms(Bn,J,Z,Q,p.state.transmissionRenderTarget[T.id]),ko.upload(O,xe(kt),Bn,R)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ko.upload(O,xe(kt),Bn,R),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Se.setValue(O,"center",G.center),Se.setValue(O,"modelViewMatrix",G.modelViewMatrix),Se.setValue(O,"normalMatrix",G.normalMatrix),Se.setValue(O,"modelMatrix",G.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const wn=J.uniformsGroups;for(let Mi=0,yi=wn.length;Mi<yi;Mi++){const Bl=wn[Mi];D.update(Bl,Pn),D.bind(Bl,Pn)}}return Pn}function os(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function as(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,B,$){Mt.get(T.texture).__webglTexture=B,Mt.get(T.depthTexture).__webglTexture=$;const J=Mt.get(T);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=$===void 0,J.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const $=Mt.get(T);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,$=0){L=T,A=B,w=$;let J=!0,G=null,vt=!1,Rt=!1;if(T){const Ot=Mt.get(T);if(Ot.__useDefaultFramebuffer!==void 0)Dt.bindFramebuffer(O.FRAMEBUFFER,null),J=!1;else if(Ot.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Ot.__hasExternalTextures)R.rebindTextures(T,Mt.get(T.texture).__webglTexture,Mt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Bt=T.depthTexture;if(Ot.__boundDepthTexture!==Bt){if(Bt!==null&&Mt.has(Bt)&&(T.width!==Bt.image.width||T.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Zt=T.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Rt=!0);const Qt=Mt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Qt[B])?G=Qt[B][$]:G=Qt[B],vt=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?G=Mt.get(T).__webglMultisampledFramebuffer:Array.isArray(Qt)?G=Qt[$]:G=Qt,I.copy(T.viewport),N.copy(T.scissor),z=T.scissorTest}else I.copy(pt).multiplyScalar(Z).floor(),N.copy(it).multiplyScalar(Z).floor(),z=ut;if(Dt.bindFramebuffer(O.FRAMEBUFFER,G)&&J&&Dt.drawBuffers(T,G),Dt.viewport(I),Dt.scissor(N),Dt.setScissorTest(z),vt){const Ot=Mt.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ot.__webglTexture,$)}else if(Rt){const Ot=Mt.get(T.texture),Zt=B||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ot.__webglTexture,$||0,Zt)}E=-1},this.readRenderTargetPixels=function(T,B,$,J,G,vt,Rt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Mt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(zt=zt[Rt]),zt){Dt.bindFramebuffer(O.FRAMEBUFFER,zt);try{const Ot=T.texture,Zt=Ot.format,Qt=Ot.type;if(!Gt.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-J&&$>=0&&$<=T.height-G&&O.readPixels(B,$,J,G,Tt.convert(Zt),Tt.convert(Qt),vt)}finally{const Ot=L!==null?Mt.get(L).__webglFramebuffer:null;Dt.bindFramebuffer(O.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(T,B,$,J,G,vt,Rt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Mt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(zt=zt[Rt]),zt){const Ot=T.texture,Zt=Ot.format,Qt=Ot.type;if(!Gt.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-J&&$>=0&&$<=T.height-G){Dt.bindFramebuffer(O.FRAMEBUFFER,zt);const Bt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Bt),O.bufferData(O.PIXEL_PACK_BUFFER,vt.byteLength,O.STREAM_READ),O.readPixels(B,$,J,G,Tt.convert(Zt),Tt.convert(Qt),0);const re=L!==null?Mt.get(L).__webglFramebuffer:null;Dt.bindFramebuffer(O.FRAMEBUFFER,re);const ve=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Hf(O,ve,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Bt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,vt),O.deleteBuffer(Bt),O.deleteSync(ve),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,$=0){T.isTexture!==!0&&(vr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const J=Math.pow(2,-$),G=Math.floor(T.image.width*J),vt=Math.floor(T.image.height*J),Rt=B!==null?B.x:0,zt=B!==null?B.y:0;R.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,Rt,zt,G,vt),Dt.unbindTexture()},this.copyTextureToTexture=function(T,B,$=null,J=null,G=0){T.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,T=arguments[1],B=arguments[2],G=arguments[3]||0,$=null);let vt,Rt,zt,Ot,Zt,Qt,Bt,re,ve;const ye=T.isCompressedTexture?T.mipmaps[G]:T.image;$!==null?(vt=$.max.x-$.min.x,Rt=$.max.y-$.min.y,zt=$.isBox3?$.max.z-$.min.z:1,Ot=$.min.x,Zt=$.min.y,Qt=$.isBox3?$.min.z:0):(vt=ye.width,Rt=ye.height,zt=ye.depth||1,Ot=0,Zt=0,Qt=0),J!==null?(Bt=J.x,re=J.y,ve=J.z):(Bt=0,re=0,ve=0);const cn=Tt.convert(B.format),ce=Tt.convert(B.type);let kt;B.isData3DTexture?(R.setTexture3D(B,0),kt=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(R.setTexture2DArray(B,0),kt=O.TEXTURE_2D_ARRAY):(R.setTexture2D(B,0),kt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const ti=O.getParameter(O.UNPACK_ROW_LENGTH),le=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Pn=O.getParameter(O.UNPACK_SKIP_PIXELS),cs=O.getParameter(O.UNPACK_SKIP_ROWS),fn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ye.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ye.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ot),O.pixelStorei(O.UNPACK_SKIP_ROWS,Zt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Qt);const nr=T.isDataArrayTexture||T.isData3DTexture,Se=B.isDataArrayTexture||B.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Bn=Mt.get(T),ir=Mt.get(B),wn=Mt.get(Bn.__renderTarget),Mi=Mt.get(ir.__renderTarget);Dt.bindFramebuffer(O.READ_FRAMEBUFFER,wn.__webglFramebuffer),Dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let yi=0;yi<zt;yi++)nr&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Mt.get(T).__webglTexture,G,Qt+yi),T.isDepthTexture?(Se&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Mt.get(B).__webglTexture,G,ve+yi),O.blitFramebuffer(Ot,Zt,vt,Rt,Bt,re,vt,Rt,O.DEPTH_BUFFER_BIT,O.NEAREST)):Se?O.copyTexSubImage3D(kt,G,Bt,re,ve+yi,Ot,Zt,vt,Rt):O.copyTexSubImage2D(kt,G,Bt,re,ve+yi,Ot,Zt,vt,Rt);Dt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Se?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(kt,G,Bt,re,ve,vt,Rt,zt,cn,ce,ye.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(kt,G,Bt,re,ve,vt,Rt,zt,cn,ye.data):O.texSubImage3D(kt,G,Bt,re,ve,vt,Rt,zt,cn,ce,ye):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,Bt,re,vt,Rt,cn,ce,ye.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,Bt,re,ye.width,ye.height,cn,ye.data):O.texSubImage2D(O.TEXTURE_2D,G,Bt,re,vt,Rt,cn,ce,ye);O.pixelStorei(O.UNPACK_ROW_LENGTH,ti),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,le),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Pn),O.pixelStorei(O.UNPACK_SKIP_ROWS,cs),O.pixelStorei(O.UNPACK_SKIP_IMAGES,fn),G===0&&B.generateMipmaps&&O.generateMipmap(kt),Dt.unbindTexture()},this.copyTextureToTexture3D=function(T,B,$=null,J=null,G=0){return T.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,J=arguments[1]||null,T=arguments[2],B=arguments[3],G=arguments[4]||0),vr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,B,$,J,G)},this.initRenderTarget=function(T){Mt.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Dt.unbindTexture()},this.resetState=function(){A=0,w=0,L=null,Dt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class Sl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new Sl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class i_ extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class jc extends je{constructor(t=null,e=1,n=1,s,r,o,a,c,l=En,h=En,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bh extends Ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Es=new ue,kh=new ue,ro=[],Vh=new is,s_=new ue,lr=new Nt,hr=new ss;class r_ extends Nt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Bh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,s_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new is),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),Vh.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(Vh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ss),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),hr.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(hr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(n),t.ray.intersectsSphere(hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Es),kh.multiplyMatrices(n,Es),lr.matrixWorld=kh,lr.raycast(t,ro);for(let o=0,a=ro.length;o<a;o++){const c=ro[o];c.instanceId=r,c.object=this,e.push(c)}ro.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Bh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new jc(new Float32Array(s*this.count),s,this.count,ia,Yn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class El extends rs{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const qo=new b,Yo=new b,Hh=new ue,ur=new ra,oo=new ss,ka=new b,Gh=new b;class pd extends Fe{constructor(t=new be,e=new El){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)qo.fromBufferAttribute(e,s-1),Yo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=qo.distanceTo(Yo);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,t.ray.intersectsSphere(oo)===!1)return;Hh.copy(s).invert(),ur.copy(t.ray).applyMatrix4(Hh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),v=h.getX(_+1),M=ao(this,t,ur,c,p,v);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=ao(this,t,ur,c,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=ao(this,t,ur,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=ao(this,t,ur,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ao(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(qo.fromBufferAttribute(o,s),Yo.fromBufferAttribute(o,r),e.distanceSqToSegment(qo,Yo,ka,Gh)>n)return;ka.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ka);if(!(c<t.near||c>t.far))return{distance:c,point:Gh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Wh=new b,Xh=new b;class o_ extends pd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Wh.fromBufferAttribute(e,s),Xh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Wh.distanceTo(Xh);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class a_ extends rs{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const qh=new ue,Kc=new ra,co=new ss,lo=new b;class c_ extends Fe{constructor(t=new be,e=new a_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(s),co.radius+=r,t.ray.intersectsSphere(co)===!1)return;qh.copy(s).invert(),Kc.copy(t.ray).applyMatrix4(qh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);lo.fromBufferAttribute(u,m),Yh(lo,m,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)lo.fromBufferAttribute(u,g),Yh(lo,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Yh(i,t,e,n,s,r,o){const a=Kc.distanceSqToPoint(i);if(a<e){const c=new b;Kc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class zr extends je{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new wt:new b);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new b,s=[],r=[],o=[],a=new b,c=new ue;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new b)}r[0]=new b,o[0]=new b;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ne(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ne(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class wl extends Jn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new wt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class l_ extends wl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Tl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const ho=new b,Va=new Tl,Ha=new Tl,Ga=new Tl;class h_ extends Jn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new b){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ho.subVectors(s[0],s[1]).add(s[0]),l=ho);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ho.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ho),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Va.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),Ha.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),Ga.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ha.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ga.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Va.calc(c),Ha.calc(c),Ga.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new b().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Zh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function u_(i,t){const e=1-i;return e*e*t}function d_(i,t){return 2*(1-i)*i*t}function f_(i,t){return i*i*t}function Tr(i,t,e,n){return u_(i,t)+d_(i,e)+f_(i,n)}function p_(i,t){const e=1-i;return e*e*e*t}function m_(i,t){const e=1-i;return 3*e*e*i*t}function g_(i,t){return 3*(1-i)*i*i*t}function __(i,t){return i*i*i*t}function Ar(i,t,e,n,s){return p_(i,t)+m_(i,e)+g_(i,n)+__(i,s)}class md extends Jn{constructor(t=new wt,e=new wt,n=new wt,s=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new wt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ar(t,s.x,r.x,o.x,a.x),Ar(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class x_ extends Jn{constructor(t=new b,e=new b,n=new b,s=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new b){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ar(t,s.x,r.x,o.x,a.x),Ar(t,s.y,r.y,o.y,a.y),Ar(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gd extends Jn{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class v_ extends Jn{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _d extends Jn{constructor(t=new wt,e=new wt,n=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new wt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Tr(t,s.x,r.x,o.x),Tr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class M_ extends Jn{constructor(t=new b,e=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new b){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Tr(t,s.x,r.x,o.x),Tr(t,s.y,r.y,o.y),Tr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xd extends Jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Zh(a,c.x,l.x,h.x,u.x),Zh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new wt().fromArray(s))}return this}}var jh=Object.freeze({__proto__:null,ArcCurve:l_,CatmullRomCurve3:h_,CubicBezierCurve:md,CubicBezierCurve3:x_,EllipseCurve:wl,LineCurve:gd,LineCurve3:v_,QuadraticBezierCurve:_d,QuadraticBezierCurve3:M_,SplineCurve:xd});class y_ extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new jh[s.type]().fromJSON(s))}return this}}class Zo extends y_{constructor(t){super(),this.type="Path",this.currentPoint=new wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new gd(this.currentPoint.clone(),new wt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new _d(this.currentPoint.clone(),new wt(t,e),new wt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new md(this.currentPoint.clone(),new wt(t,e),new wt(n,s),new wt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new xd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new wl(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Al extends be{constructor(t=[new wt(0,-.5),new wt(.5,0),new wt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ne(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new b,d=new wt,f=new b,g=new b,_=new b;let m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let v=0;v<=e;v++){const M=n+v*h*s,x=Math.sin(M),P=Math.cos(M);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*x,u.y=t[A].y,u.z=t[A].x*P,o.push(u.x,u.y,u.z),d.x=v/e,d.y=A/(t.length-1),a.push(d.x,d.y);const w=c[3*A+0]*x,L=c[3*A+1],E=c[3*A+0]*P;l.push(w,L,E)}}for(let v=0;v<e;v++)for(let M=0;M<t.length-1;M++){const x=M+v*t.length,P=x,A=x+t.length,w=x+t.length+1,L=x+1;r.push(P,A,L),r.push(w,L,A)}this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("uv",new se(a,2)),this.setAttribute("normal",new se(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Al(t.points,t.segments,t.phiStart,t.phiLength)}}class bl extends Al{constructor(t=1,e=1,n=4,s=8){const r=new Zo;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new bl(t.radius,t.length,t.capSegments,t.radialSegments)}}class js extends be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new b,h=new wt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new js(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class fi extends be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(f,2));function v(){const x=new b,P=new b;let A=0;const w=(e-t)/n;for(let L=0;L<=r;L++){const E=[],S=L/r,I=S*(e-t)+t;for(let N=0;N<=s;N++){const z=N/s,W=z*c+a,H=Math.sin(W),q=Math.cos(W);P.x=I*H,P.y=-S*n+m,P.z=I*q,u.push(P.x,P.y,P.z),x.set(H,w,q).normalize(),d.push(x.x,x.y,x.z),f.push(z,1-S),E.push(g++)}_.push(E)}for(let L=0;L<s;L++)for(let E=0;E<r;E++){const S=_[E][L],I=_[E+1][L],N=_[E+1][L+1],z=_[E][L+1];(t>0||E!==0)&&(h.push(S,I,z),A+=3),(e>0||E!==r-1)&&(h.push(I,N,z),A+=3)}l.addGroup(p,A,0),p+=A}function M(x){const P=g,A=new wt,w=new b;let L=0;const E=x===!0?t:e,S=x===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const I=g;for(let N=0;N<=s;N++){const W=N/s*c+a,H=Math.cos(W),q=Math.sin(W);w.x=E*q,w.y=m*S,w.z=E*H,u.push(w.x,w.y,w.z),d.push(0,S,0),A.x=H*.5+.5,A.y=q*.5*S+.5,f.push(A.x,A.y),g++}for(let N=0;N<s;N++){const z=P+N,W=I+N;x===!0?h.push(W,W+1,z):h.push(W+1,W,z),L+=3}l.addGroup(p,L,x===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rl extends fi{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Rl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vd extends Zo{constructor(t){super(t),this.uuid=Qs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Zo().fromJSON(s))}return this}}const S_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Md(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=b_(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Lr(r,o,e,a,c,f,0),o}};function Md(i,t,e,n,s){let r,o;if(s===O_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Kh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Kh(r,i[r],i[r+1],o);return o&&aa(o,o.next)&&(Ir(o),o=o.next),o}function es(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(aa(e,e.next)||we(e.prev,e,e.next)===0)){if(Ir(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Lr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&D_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?w_(i,n,s,r):E_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ir(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=T_(es(i),t,e),Lr(i,t,e,n,s,r,2)):o===2&&A_(i,t,e,n,s,r):Lr(es(i),t,e,n,s,r,1);break}}}function E_(i){const t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ds(s,a,r,c,o,l,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function w_(i,t,e,n){const s=i.prev,r=i,o=i.next;if(we(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=$c(f,g,t,e,n),v=$c(_,m,t,e,n);let M=i.prevZ,x=i.nextZ;for(;M&&M.z>=p&&x&&x.z<=v;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Ds(a,h,c,u,l,d,M.x,M.y)&&we(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ds(a,h,c,u,l,d,x.x,x.y)&&we(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Ds(a,h,c,u,l,d,M.x,M.y)&&we(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ds(a,h,c,u,l,d,x.x,x.y)&&we(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function T_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!aa(s,r)&&yd(s,n,n.next,r)&&Dr(s,r)&&Dr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ir(n),Ir(n.next),n=i=r),n=n.next}while(n!==i);return es(n)}function A_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&N_(o,a)){let c=Sd(o,a);o=es(o,o.next),c=es(c,c.next),Lr(o,t,e,n,s,r,0),Lr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function b_(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Md(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(U_(l));for(s.sort(R_),r=0;r<s.length;r++)e=C_(s[r],e);return e}function R_(i,t){return i.x-t.x}function C_(i,t){const e=P_(i,t);if(!e)return t;const n=Sd(e,i);return es(n,n.next),es(e,e.next)}function P_(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ds(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Dr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&L_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function L_(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function D_(i,t,e,n){let s=i;do s.z===0&&(s.z=$c(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,I_(s)}function I_(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function $c(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function U_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ds(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function N_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!F_(i,t)&&(Dr(i,t)&&Dr(t,i)&&z_(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||aa(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function aa(i,t){return i.x===t.x&&i.y===t.y}function yd(i,t,e,n){const s=fo(we(i,t,e)),r=fo(we(i,t,n)),o=fo(we(e,n,i)),a=fo(we(e,n,t));return!!(s!==r&&o!==a||s===0&&uo(i,e,t)||r===0&&uo(i,n,t)||o===0&&uo(e,i,n)||a===0&&uo(e,t,n))}function uo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function fo(i){return i>0?1:i<0?-1:0}function F_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&yd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Dr(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function z_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Sd(i,t){const e=new Jc(i.i,i.x,i.y),n=new Jc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Kh(i,t,e,n){const s=new Jc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ir(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Jc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function O_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class br{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return br.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];$h(t),Jh(n,t);let o=t.length;e.forEach($h);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Jh(n,e[c]);const a=S_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function $h(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Jh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Cl extends be{constructor(t=new vd([new wt(0,.5),new wt(-.5,-.5),new wt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(r,3)),this.setAttribute("uv",new se(o,2));function l(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;br.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const v=g[m];br.isClockWise(v)===!0&&(g[m]=v.reverse())}const _=br.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){const v=f[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=_.length;m<p;m++){const v=_[m],M=v[0]+u,x=v[1]+u,P=v[2]+u;n.push(M,x,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return B_(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Cl(n,t.curveSegments)}}function B_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Ur extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new b,d=new b,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],M=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let P=0;P<=e;P++){const A=P/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+x,1-M),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const M=h[p][v+1],x=h[p][v],P=h[p+1][v],A=h[p+1][v+1];(p!==0||o>0)&&f.push(M,x,A),(p!==n-1||c<Math.PI)&&f.push(x,P,A)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ur(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pl extends be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new b,u=new b,d=new b;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class jt extends rs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ku,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ed extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class k_ extends Ed{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Wa=new ue,Qh=new b,tu=new b;class V_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vl,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Qh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qh),tu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tu),e.updateMatrixWorld(),Wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class H_ extends V_{constructor(){super(new ld(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class G_ extends Ed{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new H_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class wd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=eu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function eu(){return performance.now()}class nu{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class W_ extends o_{constructor(t=10,e=10,n=4473924,s=8947848){n=new Kt(n),s=new Kt(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let d=0,f=0,g=-a;d<=e;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=d===r?n:s;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const h=new be;h.setAttribute("position",new se(c,3)),h.setAttribute("color",new se(l,3));const u=new El({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}let X_=class extends ns{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hl);const iu={type:"change"},Ll={type:"start"},Td={type:"end"},po=new ra,su=new li,q_=Math.cos(70*kf.DEG2RAD),Ie=new b,hn=2*Math.PI,pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xa=1e-6;class Y_ extends X_{constructor(t,e=null){super(t,e),this.state=pe.NONE,this.enabled=!0,this.target=new b,this.cursor=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ns.ROTATE,MIDDLE:Ns.DOLLY,RIGHT:Ns.PAN},this.touches={ONE:Ps.ROTATE,TWO:Ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new b,this._lastQuaternion=new Kn,this._lastTargetPosition=new b,this._quat=new Kn().setFromUnitVectors(t.up,new b(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nu,this._sphericalDelta=new nu,this._scale=1,this._panOffset=new b,this._rotateStart=new wt,this._rotateEnd=new wt,this._rotateDelta=new wt,this._panStart=new wt,this._panEnd=new wt,this._panDelta=new wt,this._dollyStart=new wt,this._dollyEnd=new wt,this._dollyDelta=new wt,this._dollyDirection=new b,this._mouse=new wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=j_.bind(this),this._onPointerDown=Z_.bind(this),this._onPointerUp=K_.bind(this),this._onContextMenu=ix.bind(this),this._onMouseWheel=Q_.bind(this),this._onKeyDown=tx.bind(this),this._onTouchStart=ex.bind(this),this._onTouchMove=nx.bind(this),this._onMouseDown=$_.bind(this),this._onMouseMove=J_.bind(this),this._interceptControlDown=sx.bind(this),this._interceptControlUp=rx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(iu),this.update(),this.state=pe.NONE}update(t=null){const e=this.object.position;Ie.copy(e).sub(this.target),Ie.applyQuaternion(this._quat),this._spherical.setFromVector3(Ie),this.autoRotate&&this.state===pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=hn:n>Math.PI&&(n-=hn),s<-Math.PI?s+=hn:s>Math.PI&&(s-=hn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ie.setFromSpherical(this._spherical),Ie.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ie),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ie.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new b(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new b(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ie.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(po.origin.copy(this.object.position),po.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(po.direction))<q_?this.object.lookAt(this.target):(su.setFromNormalAndCoplanarPoint(this.object.up,this.target),po.intersectPlane(su,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Xa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xa||this._lastTargetPosition.distanceToSquared(this.target)>Xa?(this.dispatchEvent(iu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?hn/60*this.autoRotateSpeed*t:hn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ie.setFromMatrixColumn(e,0),Ie.multiplyScalar(-t),this._panOffset.add(Ie)}_panUp(t,e){this.screenSpacePanning===!0?Ie.setFromMatrixColumn(e,1):(Ie.setFromMatrixColumn(e,0),Ie.crossVectors(this.object.up,Ie)),Ie.multiplyScalar(t),this._panOffset.add(Ie)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ie.copy(s).sub(this.target);let r=Ie.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Z_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function j_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function K_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Td),this.state=pe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ns.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=pe.DOLLY;break;case Ns.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pe.ROTATE}break;case Ns.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pe.PAN}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(Ll)}function J_(i){switch(this.state){case pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Q_(i){this.enabled===!1||this.enableZoom===!1||this.state!==pe.NONE||(i.preventDefault(),this.dispatchEvent(Ll),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Td))}function tx(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function ex(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ps.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=pe.TOUCH_ROTATE;break;case Ps.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=pe.TOUCH_PAN;break;default:this.state=pe.NONE}break;case 2:switch(this.touches.TWO){case Ps.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=pe.TOUCH_DOLLY_PAN;break;case Ps.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=pe.TOUCH_DOLLY_ROTATE;break;default:this.state=pe.NONE}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(Ll)}function nx(i){switch(this._trackPointer(i),this.state){case pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=pe.NONE}}function ix(i){this.enabled!==!1&&i.preventDefault()}function sx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ox=9.81;function ws(i,t,e,n){const s=i*Math.PI/180,r=2*Math.PI/t;return{dirX:Math.sin(s),dirZ:Math.cos(s),amp:e,k:r,omega:Math.sqrt(ox*r),phase:n}}const qa=3;class ax{constructor(){C(this,"waves",[ws(10,7,1,0),ws(40,5,.8,1.3),ws(-30,3.6,.6,2.1),ws(65,2.6,.45,4),ws(-55,2,.32,.7),ws(20,1.6,.22,5.2)]);C(this,"scale",1);let t=0;for(const s of this.waves)t+=s.amp*s.amp;const e=Math.sqrt(t/2),n=qa/100/4/e;for(const s of this.waves)s.amp*=n}setHeightCm(t){this.scale=t/qa}get heightCm(){return this.scale*qa}height(t,e,n){let s=0;for(const r of this.waves)s+=r.amp*Math.sin(r.k*(r.dirX*t+r.dirZ*e)-r.omega*n+r.phase);return s*this.scale}verticalVelocity(t,e,n){let s=0;for(const r of this.waves)s-=r.amp*r.omega*Math.cos(r.k*(r.dirX*t+r.dirZ*e)-r.omega*n+r.phase);return s*this.scale}}const cx=1e3,sn={depth:.3,flowTime:5,airTime:3,spread:.05,sprayAir:0,airWidth:.65,maxVoid:.6};class Qc{constructor(t,e){C(this,"n");C(this,"dx");C(this,"originX",0);C(this,"originZ",0);C(this,"ux");C(this,"uz");C(this,"air");C(this,"t1");C(this,"t2");C(this,"t3");this.n=t,this.dx=e;const n=t*t;this.ux=new Float32Array(n),this.uz=new Float32Array(n),this.air=new Float32Array(n),this.t1=new Float32Array(n),this.t2=new Float32Array(n),this.t3=new Float32Array(n)}clear(){this.ux.fill(0),this.uz.fill(0),this.air.fill(0)}shift(t,e){const n=this.n;for(const s of[this.ux,this.uz,this.air]){const r=s.slice();s.fill(0);for(let o=0;o<n;o++){const a=o+e;if(!(a<0||a>=n))for(let c=0;c<n;c++){const l=c+t;l<0||l>=n||(s[o*n+c]=r[a*n+l])}}}this.originX+=t*this.dx,this.originZ+=e*this.dx}addMomentum(t,e,n,s){const r=1/(cx*sn.depth*this.dx*this.dx);this.splat(this.ux,t,e,n*r),this.splat(this.uz,t,e,s*r)}addAir(t,e,n){n<=0||this.addAirSigned(t,e,n)}addAirSigned(t,e,n){if(n===0)return;const s=this.n,r=(t-this.originX)/this.dx,o=(e-this.originZ)/this.dx,a=Math.max(sn.airWidth/this.dx,.7),c=Math.ceil(a*2),l=Math.max(1,Math.floor(r-c)),h=Math.min(s-2,Math.ceil(r+c)),u=Math.max(1,Math.floor(o-c)),d=Math.min(s-2,Math.ceil(o+c));if(l>h||u>d)return;let f=0;for(let _=u;_<=d;_++)for(let m=l;m<=h;m++)f+=Math.exp(-((m-r)**2+(_-o)**2)/(2*a*a));if(f<=0)return;const g=n/(f*this.dx*this.dx);for(let _=u;_<=d;_++)for(let m=l;m<=h;m++)this.air[_*s+m]+=g*Math.exp(-((m-r)**2+(_-o)**2)/(2*a*a))}splat(t,e,n,s){const r=this.n,o=(e-this.originX)/this.dx,a=(n-this.originZ)/this.dx;if(o<1||a<1||o>=r-2||a>=r-2)return;const c=o|0,l=a|0,h=o-c,u=a-l,d=l*r+c;t[d]+=s*(1-h)*(1-u),t[d+1]+=s*h*(1-u),t[d+r]+=s*(1-h)*u,t[d+r+1]+=s*h*u}at(t,e,n){const s=this.n;if(e<0||n<0||e>=s-1||n>=s-1)return 0;const r=e|0,o=n|0,a=e-r,c=n-o,l=o*s+r;return(t[l]*(1-a)+t[l+1]*a)*(1-c)+(t[l+s]*(1-a)+t[l+s+1]*a)*c}sampleRaw(t,e,n){const s=(t-this.originX)/this.dx,r=(e-this.originZ)/this.dx;n.x=this.at(this.ux,s,r),n.z=this.at(this.uz,s,r),n.w=this.at(this.air,s,r)/sn.depth}sample(t,e,n){const s=(t-this.originX)/this.dx,r=(e-this.originZ)/this.dx;n.x=this.at(this.ux,s,r),n.z=this.at(this.uz,s,r),n.w=Math.min(sn.maxVoid,Math.max(0,this.at(this.air,s,r)/sn.depth))}step(t){const e=this.n,{ux:n,uz:s,air:r,t1:o,t2:a,t3:c}=this,l=t/this.dx;for(let f=0;f<e;f++)for(let g=0;g<e;g++){const _=f*e+g,m=g-n[_]*l,p=f-s[_]*l;o[_]=this.at(n,m,p),a[_]=this.at(s,m,p),c[_]=this.at(r,m,p)}const h=sn.spread*t/(this.dx*this.dx),u=Math.exp(-t/sn.flowTime),d=Math.exp(-t/sn.airTime);for(let f=1;f<e-1;f++)for(let g=1;g<e-1;g++){const _=f*e+g;n[_]=(o[_]+h*(o[_-1]+o[_+1]+o[_-e]+o[_+e]-4*o[_]))*u,s[_]=(a[_]+h*(a[_-1]+a[_+1]+a[_-e]+a[_+e]-4*a[_]))*u,r[_]=(c[_]+h*(c[_-1]+c[_+1]+c[_-e]+c[_+e]-4*c[_]))*d}}}const Ji=-1.5,Rn=1.5,lx=.05,Rs=.12,Sn=.05,jo=.04,Ko=-.91,$o=-.65,Is=.073,hx=.012,Qi=.63,dr=.06,ux=.04;function vi(i){if(i<=dr)return Qi-.005*(dr-i)/(dr-Ji);const t=Math.min(1,(i-dr)/(Rn-dr));return Qi-(Qi-ux)*t**2.3}const dx=.12;function er(i,t=On(i)){return Math.max(.02,qe(i)-t)}const ca=(i,t=On(i))=>Math.min(er(i,t),dx);function Dl(i,t=On(i)){return Math.min(1,Math.max(0,vi(i)-.01)/(ca(i,t)/2))}function la(i,t=On(i)){return vi(i)-Dl(i,t)*ca(i,t)/2}function Jo(i,t,e=On(i)){const n=er(i,e),s=ca(i,e),r=t*n;return{x:r>=s?vi(i):vi(i)-Dl(i,e)*s*(1-r/s)**2/2,y:e+r}}function fx(i,t){const e=ca(i),n=t*er(i);return n>=e?0:Dl(i)*(1-n/e)}const Fn=[{z:-.95,r:Qi},{z:0,r:Qi},{z:.75,r:.5},{z:1.2,r:.27},{z:1.4,r:.1}];function On(i){return i<Sn?jo:i<.5?0:.12*((i-.5)/(Rn-.5))**2}function px(i){return i<.5?0:.24*(i-.5)/(Rn-.5)**2}function qe(i){return i<.4?.2:.2-.07*((i-.4)/(Rn-.4))**1.5}function Ad(i,t){const e=Math.max(vi(i),1e-4),n=Math.min(1,Math.abs(t)/e);return qe(i)+.025*(1-n*n)}const _n=-1.38,Rr=.15,Bs=.57,Ii=.42,Il=(i,t,e,n)=>{if(i<=e)return t;const s=Math.min(1,(i-e)/(n-e));return t*Math.max(0,1-s**2.2)**.55};function kn(i){return Il(i,.44-.02*Math.max(0,Math.min(1,(i-_n)/(0-_n))),0,Bs)}function ru(i){return Il(i,.3,-.05,.48)}function fr(i){return Il(i,.24,-.1,.3)}function Ya(i){if(i<=Rr)return Ii;const t=Math.min(1,(i-Rr)/(Bs-Rr));return Ii+(qe(Bs)-Ii)*Math.sin(t*Math.PI/2)}const mo=1e3,mx=9.81,gx=101325,_x=2340,Vo=8,Za=.2,bd={diameter:.14,pitch:.235,ear:.5,blades:3,cup:.6};function xx(){return{u:new Float32Array(Vo),cav:0,vent:0,loading:0,sigma:10,tipRatio:1,ventLimit:0}}function ou(i){return Math.sqrt(Math.max(0,(i-.12)*(1.03-i)))}function vx(i){const t=2*Math.PI*.72,e=.2,n=Math.abs(i);if(n<=e)return t*i;const s=t*e-1.4*(n-e);return Math.sign(i)*Math.max(.55,s)}function Mx(i,t,e,n,s,r,o,a,c=0){const l=i.diameter/2,h=i.blades,u=2*Math.PI*e,d=(1-Za)/Vo;let f=0;for(let it=0;it<Vo;it++)f+=ou(Za+(it+.5)*d)*d*l;const g=i.ear*Math.PI*l*l/(h*f),_=.017*i.cup,m=.003*i.cup;let p=0,v=0;for(let it=0;it<Vo;it++){const ut=Za+(it+.5)*d,X=ut*l,U=d*l,V=g*ou(ut),k=u*X,tt=Math.atan(i.pitch/(2*Math.PI*X))+_;let ft=t.u[it],lt=0,It=0;for(let Ut=0;Ut<4;Ut++){const Wt=n+ft,O=Math.atan2(Wt,Math.max(k,.001)),St=Wt*Wt+k*k,Vt=vx(tt-O),Gt=.01+.008*Vt*Vt+m,Dt=.5*mo*St*V*h*U,Et=Math.cos(O),Mt=Math.sin(O);lt=Dt*(Vt*Et-Gt*Mt),It=Dt*(Vt*Mt+Gt*Et)*X;const R=h*(1-ut)/(2*ut*Math.max(.05,Mt)),y=Math.max(.05,2/Math.PI*Math.acos(Math.min(1,Math.exp(-R)))),F=Math.max(0,lt)/(4*Math.PI*X*mo*y*U),st=(-n+Math.sqrt(Math.max(0,n*n+4*F)))/2;ft=.5*ft+.5*st}t.u[it]=Number.isFinite(ft)?ft:0,p+=lt,v+=It}const M=i.pitch/i.diameter,x=i.ear*Math.PI*l*l*(1.067-.229*M),P=n*n+(.7*Math.PI*e*i.diameter)**2,A=.5*mo*Math.max(P,1),w=Math.max(.02,(gx+mo*mx*Math.max(0,s)-_x)/A),L=Math.max(0,p)/(A*x),E=.5*w**.5,S=Math.max(0,Math.min(1,(L/E-1)/3));t.cav+=(S-t.cav)*Math.min(1,a*20),t.loading=L,t.sigma=w;const N=(s-l)/i.diameter,z=Math.min(2,L/.5),W=.05-.08*i.cup+Math.min(.6,o),H=Math.max(-.2,W+.25*z),q=Math.max(-.2,W+.25*z*(1-.6*t.vent)+.05);if(t.tipRatio=N,t.ventLimit=H,N<H){const it=Math.min(1,(H-N)/.15);t.vent+=it*(1-t.vent)*Math.min(1,a*10)}else if(N>q){const it=1.5+8*(N-q)+Math.max(0,1-z/.7)*4;t.vent=Math.max(0,t.vent-it*a)}const Q=Math.min(1,c);t.vent<Q&&(t.vent+=(Q-t.vent)*Math.min(1,a*10)),t.vent=Math.max(t.vent,1-r);const Z=t.cav,rt=t.vent,dt=(1-.55*Z*Z)*(1-.75*rt)*r,pt=(1-.3*Z*Z)*(1-.8*rt)*r;return{thrust:p*dt,torque:v*pt+.002*u*(1-r)}}const au=1e3,pr={alpha:.11,b0:.7,emitDt:1/30,handTime:2.5,selfAge:2};class Rd{constructor(){C(this,"parcels",[]);C(this,"em",new Map);C(this,"t",-1);C(this,"retired",[]);C(this,"seq",0)}clear(){this.parcels.length=0,this.em.clear(),this.retired.length=0,this.t=-1}advance(t){if(this.t<0||t<this.t-.5){this.t>=0&&this.clear(),this.t=t;return}const e=t-this.t;if(e<=0)return;this.t=t;const n=this.parcels;let s=0;for(let r=0;r<n.length;r++){const o=n[r];o.age+=e;const a=pr.alpha*o.uc*e,c=o.b+a;if(o.uc*=o.b*o.b/(c*c),o.b=c,o.x+=o.dx*o.uc*.5*e,o.z+=o.dz*o.uc*.5*e,o.age>=pr.handTime||o.uc<.02){const l=au*o.uc*Math.PI*o.b*o.b*o.len;this.retired.push({seq:++this.seq,x:o.x,z:o.z,ix:o.dx*l,iz:o.dz*l});continue}n[s++]=o}n.length=s,this.retired.length>4e3&&this.retired.splice(0,this.retired.length-4e3)}emit(t,e,n,s,r,o,a){let c=this.em.get(t);c||(c={imp:0,acc:0,x:e.x,y:e.y,z:e.z,dx:0,dz:0,px:e.x,pz:e.z,r:a},this.em.set(t,c));const l=Math.hypot(n,s);if(r>0&&l>1e-6&&(c.imp+=r,c.dx+=n/l*r,c.dz+=s/l*r),c.acc+=o,c.x=e.x,c.y=e.y,c.z=e.z,c.r=a,c.acc<pr.emitDt)return;const h=Math.max(.1,Math.hypot(e.x-c.px,e.z-c.pz)),u=Math.hypot(c.dx,c.dz);if(c.imp>0&&u>0){const d=pr.b0*a,f=c.imp/(au*Math.PI*d*d*h);this.parcels.push({x:(e.x+c.px)/2,y:e.y,z:(e.z+c.pz)/2,dx:c.dx/u,dz:c.dz/u,uc:f,b:d,len:h,age:0,owner:t})}c.imp=c.acc=c.dx=c.dz=0,c.px=e.x,c.pz=e.z}near(t,e,n,s,r){r.length=0;for(const o of this.parcels){if(o.owner===s&&o.age<pr.selfAge)continue;const a=n+3*o.b+o.len;Math.abs(o.x-t)<a&&Math.abs(o.z-e)<a&&r.push(o)}return r}static sample(t,e,n,s){for(const r of t){const o=e.x-r.x,a=e.z-r.z,c=o*r.dx+a*r.dz,l=Math.max(r.b,r.len/2);if(Math.abs(c)>3*l)continue;const h=(o-c*r.dx)**2+(a-c*r.dz)**2,u=r.b*r.b;if(h>9*u)continue;const d=e.y-r.y,f=e.y-(2*n-r.y),g=Math.exp(-h/u)*(Math.exp(-(d*d)/u)+Math.exp(-(f*f)/u)),_=r.uc*g*Math.exp(-(c*c)/(2*l*l))*(r.len/(Math.sqrt(2*Math.PI)*l));s.x+=r.dx*_,s.z+=r.dz*_}}}const ks=new Rd,Wn=9.81,Je=1e3,yx=1.2,mr=115,Ui=52,Sx=new b(0,.2,-.55),Ts=new b(140,140,22),vn=new b(0,.55,-.25),Ex=.3,wx=-.2,Tx=Ui*(2*Math.PI*3)**2,Ax=2*.7*Ui*2*Math.PI*3,cu=Ui*Wn*3.2,bx=.03,Ks=new b(0,.38,-1.52),Ul=new b(0,.04,-.1);Ks.clone().add(Ul);const Rx=new b(0,-.57,-.16),Cx=new b(0,-.47,-.12),Px=new b(0,-.44,-.14),Lx=.057,go=2.4,Dx=1.9,_o=[-.5,0,.5,1,1.5,2,3],Qo=1,hi={peakTorque:37,peakRpm:5400,idleRpm:1300,limitRpm:6600,inertia:.015},Ye={planing:.35,friction:.0022,wetSmooth:.008,pressureFetch:.2,pressurePeak:3,stepRise:.035,stepVentSpeed:6,chineCd:1,yawSide:2.5,yawSideStall:.35,yawSideAft:-1,yawSideStallAft:-1,stallDrop:1,sideLift:.4,keelFinSlope:1.8,keelFinStall:.45,keelFinCd0:.008,keelFinVortex:0,sideWalls:!0,wallPlaning:1,windmill:!0,ventSpeed:0,ventSpeedGear:0,plateCn:0,finPlateCn:0,driftStiff:0,driftStiff0:1.45,driftDamp:0,driftDamp0:.9,chineVent:!0,foilVent3d:!0,yawSideNormal:!1,foilVent:!1,foilVentA0:.15,foilVentK:6,wakeSmooth:0,spray:!0,sprayDrop:.003,propAir:.5,propAirFull:.001,jetReach:1.5,plateBack:!1,obliqueFloor:3,obliqueMax:.6,keelFinZ:void 0,heaveDamp:450,airDrag:.62,finDrag:6e-4,finArea:.02,rollDamp:110,pitchDamp:150,yawDamp:30,yawDamp2:0,maxSteer:.42,steerRate:2.2,steerTorque:0,steerFullSpeed:16,yawInertia:140,kickYawArm:0,kickHandArm:0,kickTime:.25,leanUp:void 0,leanSide:.55,planeCop:!1,planeCopK:.17,planeCopPsi:.2,planeCopMix:1,hullComZ:-.7,plateLift:.5,motorHeight:.05},Cd={maxSteer:.5,foilVent:!0,steerTorque:55,yawDamp2:40,plateCn:2,chineCd:.3,obliqueFloor:14,obliqueMax:.15,plateBack:!0,yawSideNormal:!0},Ix={...Ye},Pd="boatgame.turnPhys",Ux={...Cd,yawSide:3,keelFinSlope:1,yawDamp:0,yawDamp2:0};let en=!1,Us="v2";function Nl(i){Us=i,en=i!=="v1";const t=Ye.motorHeight;Object.assign(Ye,Ix,i==="v2"?Cd:i==="drift"?Ux:{},{motorHeight:t})}let tl=null;try{typeof localStorage<"u"&&(tl=localStorage.getItem(Pd))}catch{}var Nu,Fu;const Nx=!!((Fu=(Nu=globalThis.process)==null?void 0:Nu.env)!=null&&Fu.V1);Nl(Nx||tl==="v1"?"v1":tl==="v2"?"v2":"drift");const un=7;function Ld(i,t){return(i-(un-1)/2)*2*la(t)/un}function Fx(){const i=[],t=(s,r,o)=>{for(let a=0;a<o;a++)i.push([s+(r-s)*a/o,s+(r-s)*(a+1)/o])};t(Ji,Sn,6),t(Sn,Rn,11);const e=[],n=[];for(const[s,r]of i){const o=(s+r)/2,a=la(o),c=On(o),l=new b(0,-1,px(o)).normalize();for(let d=0;d<un;d++){const f=d===0?-1:d===un-1?1:0;e.push({p:new b(Ld(d,o),c,o),n:l,area:(r-s)*2*a/un,len:r-s,depthMax:qe(o)-c,side:f,col:d,aft:o<Sn?Sn-o:-1,wall:!1})}const h=c,u=er(o,h);for(const d of[1,-1])for(const f of[.25,.75]){const g=Jo(o,f,h),_=fx(o,f);n.push({p:new b(d*g.x,g.y,o),n:new b(d,-_,0).normalize(),area:(r-s)*(u/2)*Math.hypot(1,_),len:r-s,depthMax:qe(o)-g.y,side:0,col:-1,aft:-1,wall:!0})}}return[...e,...n]}const lu=Array.from({length:un},(i,t)=>new b(Ld(t,Sn),0,Sn)),ja=$o-Ko,hu=new b(0,jo,(Ko+$o)/2);function zx(i){const t=(i-hi.peakRpm)/3200;return Math.max(16,hi.peakTorque*(1-.55*t*t))}function uu(i){const t=Math.sin(Math.min(Math.PI/2,i));return 2*Math.PI*t/(4+Math.PI*t)}function xo(i,t,e){if(!Ye.foilVent3d)return uu(i);const n=2/Math.max(.001,2*Math.PI/t-1);return Math.min(e,uu(i)/(1+1/(2*n)))}function vo(i,t,e,n){return e+n*2*Wn*Math.max(.005,t)/Math.max(1,i*i)}const oe=new b,Qe=new b,Yt=new b,Ox=new b,Vn=new b,oi=new b,Pe=new Kn,Ka=new b(0,1,0),Bx=new b(1,0,0),ji=class ji{constructor(t,e=t){C(this,"prevBeta",NaN);C(this,"gearSteerMoment",0);C(this,"comW",new b);C(this,"vel",new b);C(this,"quat",new Kn);C(this,"angVel",new b);C(this,"origin",new b);C(this,"riderB",vn.clone());C(this,"riderW",new b);C(this,"riderVel",new b);C(this,"legForce",new b);C(this,"legLoad",1);C(this,"kickForce",0);C(this,"legLatAvg",0);C(this,"riderTarget",vn.clone());C(this,"riderTargetVel",new b);C(this,"comB",new b);C(this,"steerAngle",0);C(this,"throttle",0);C(this,"engineOmega",hi.idleRpm/60*2*Math.PI);C(this,"propThrust",0);C(this,"propImmersion",1);C(this,"tilt",0);C(this,"plateImmersion",0);C(this,"finVent",0);C(this,"keelVent",0);C(this,"propDepth",0);C(this,"plateForce",0);C(this,"prop",{...bd});C(this,"propState",xx());C(this,"wetPoints",0);C(this,"keelFinImmersion",0);C(this,"keelFinForce",0);C(this,"edgeY",new Float32Array(un));C(this,"cellT");C(this,"cellX");C(this,"chineAt",new b);C(this,"edgeK",new Float32Array(un));C(this,"hull",Fx());C(this,"pressure",new Float32Array(this.hull.length*4));C(this,"spray",new Float32Array(this.hull.length*7));C(this,"sprayDyn",new b);C(this,"wakeMom",new Float32Array((this.hull.length+5)*5));C(this,"fl",{x:0,z:0,w:0});C(this,"jetId",ji.nextId++);C(this,"jetNear",[]);C(this,"stepT",0);C(this,"hullFx",new Float32Array(this.hull.length*ji.FX_STRIDE));C(this,"impact",new Float32Array(this.hull.length));C(this,"wasWet",new Uint8Array(this.hull.length));C(this,"propPos",new b);C(this,"propAxis",new b(0,0,1));C(this,"propJet",0);C(this,"diag",{planing:0,friction:0,lateral:0,heave:0,fin:0,air:0,thrust:0});C(this,"rollDiag",{});C(this,"rollAxis",new b);C(this,"diagLat",!1);C(this,"diagDrag",!1);C(this,"diagYaw",!1);C(this,"rollDiagOn",!1);C(this,"force",new b);C(this,"torque",new b);C(this,"surface");C(this,"motorSurface");C(this,"extForce",new b);C(this,"sprayHit",0);C(this,"extTorque",new b);this.motorSurface=e;const n=this.hull.filter(s=>!s.wall).length;this.cellT=new Float32Array(n/un),this.cellX=new Float32Array(n/un),this.surface=t,this.updateComB()}roll(t,e,n){this.rollDiagOn&&(Qe.subVectors(n,this.comW),this.rollDiag[t]=(this.rollDiag[t]??0)+(this.diagDrag||this.diagLat?(this.diagDrag?-1:1)*e.dot(this.rollAxis):Vn.crossVectors(Qe,e).dot(this.rollAxis)))}get rpm(){return this.engineOmega*60/(2*Math.PI)}reset(t,e,n,s){this.quat.setFromAxisAngle(Ka,n),this.vel.set(0,0,0),this.angVel.set(0,0,0),this.riderB.copy(vn),this.riderTarget.copy(vn),this.riderTargetVel.set(0,0,0),this.riderVel.set(0,0,0),this.steerAngle=0,this.throttle=0,this.engineOmega=hi.idleRpm/60*2*Math.PI,this.propState.cav=this.propState.vent=0,this.finVent=0,this.keelVent=0,this.legLatAvg=this.kickForce=0,this.propState.u.fill(0),this.extForce.set(0,0,0),this.extTorque.set(0,0,0),this.updateComB();const r=this.surface.height(t,e,s);this.origin.set(t,r-.05,e),this.comW.copy(this.comB).applyQuaternion(this.quat).add(this.origin),this.toWorld(vn,this.riderW)}updateComB(){this.comB.copy(Sx).setZ(Ye.hullComZ)}shift(t,e){this.comW.x+=t,this.comW.z+=e,this.riderW.x+=t,this.riderW.z+=e,this.origin.x+=t,this.origin.z+=e}forward(t){return t.set(0,0,1).applyQuaternion(this.quat)}velocityAt(t,e){return this.pointVel(t,e)}invInertia(t,e){return Pe.copy(this.quat).invert(),e.copy(t).applyQuaternion(Pe),e.set(e.x/Ts.x,e.y/Ye.yawInertia,e.z/Ts.z),e.applyQuaternion(this.quat)}impulseResponse(t,e){const n=Qe.subVectors(e,this.comW),s=this.invInertia(Vn.crossVectors(n,t),oi);return 1/mr+Vn.crossVectors(s,n).dot(t)}applyImpulse(t,e){this.vel.addScaledVector(t,1/mr);const n=Qe.subVectors(e,this.comW);this.angVel.add(this.invInertia(Vn.crossVectors(n,t),oi))}speed(){return this.vel.length()}toWorld(t,e){return e.copy(t).applyQuaternion(this.quat).add(this.origin)}pointVel(t,e){return Qe.subVectors(t,this.comW),e.crossVectors(this.angVel,Qe).add(this.vel)}sampleFlow(t,e){return t.flowAt?t.flowAt(e.x,e.z,this.fl):this.fl.x=this.fl.z=this.fl.w=0,this.jetNear.length&&Rd.sample(this.jetNear,e,t.height(e.x,e.z,this.stepT),this.fl),1-this.fl.w}waterVel(t,e){return this.pointVel(t,e),e.x-=this.fl.x,e.z-=this.fl.z,e}setMom(t,e,n,s,r,o){const a=t*5;this.wakeMom[a]=e,this.wakeMom[a+1]=n,this.wakeMom[a+2]=s,this.wakeMom[a+3]=r,this.wakeMom[a+4]=o}addForce(t,e){this.force.add(t),Qe.subVectors(e,this.comW),this.torque.add(Vn.crossVectors(Qe,t))}step(t,e,n){const s=Ye,r=this.surface,o=this.motorSurface;this.stepT=n,ks.advance(n),ks.near(this.comW.x,this.comW.z,2.5,this.jetId,this.jetNear);const a=Math.max(1,this.vel.length()),c=s.steerTorque>0?1:Math.min(1,(s.steerFullSpeed/a)**2);let h=e.steer*s.maxSteer*c-this.steerAngle;if(s.steerTorque>0){const ot=this.gearSteerMoment,K=ot*Math.sign(this.steerAngle)<0?Math.abs(ot)-s.steerTorque:0;K>0&&(Math.sign(h)===Math.sign(this.steerAngle)&&(h=0),this.steerAngle-=Math.sign(this.steerAngle)*s.steerRate*t*Math.min(1,K/s.steerTorque))}this.steerAngle+=Math.sign(h)*Math.min(Math.abs(h),s.steerRate*t),this.throttle+=(e.throttle-this.throttle)*Math.min(1,t*10),this.updateComB(),this.origin.copy(this.comB).applyQuaternion(this.quat).negate().add(this.comW);const u=oi.set(vn.x-e.leanX*s.leanSide,vn.y+Math.abs(e.leanX)*(s.leanUp??wx),vn.z+e.leanZ*Ex),d=1-Math.exp(-t/bx);this.riderTargetVel.copy(u).sub(this.riderTarget).multiplyScalar(d/t),this.riderTarget.lerp(u,d);const f=this.toWorld(this.riderTarget,new b),g=this.pointVel(f,new b).add(oe.copy(this.riderTargetVel).applyQuaternion(this.quat));this.riderW.distanceToSquared(f)>.8*.8&&(this.riderW.copy(f),this.riderVel.copy(g));const _=this.legForce;_.subVectors(f,this.riderW).multiplyScalar(Tx),_.addScaledVector(g.sub(this.riderVel),Ax),_.y+=Ui*Wn;const m=oe.set(0,1,0).applyQuaternion(this.quat),p=_.dot(m);p<-408.096&&_.addScaledVector(m,-408.096-p);const v=_.length();v>cu&&_.multiplyScalar(cu/v),this.legLoad=Math.max(0,_.dot(m))/(Ui*Wn),this.diagDrag?this.rollAxis.copy(this.vel).normalize():this.diagLat?this.rollAxis.set(this.vel.z,0,-this.vel.x).normalize():this.rollAxis.set(0,this.diagYaw?1:0,this.diagYaw?0:1).applyQuaternion(this.quat);for(const ot in this.rollDiag)this.rollDiag[ot]=0;this.force.set(0,-mr*Wn,0),this.torque.set(0,0,0),this.force.add(this.extForce),this.torque.add(this.extTorque),this.addForce(_.clone().negate(),this.riderW);{const ot=oe.set(1,0,0).applyQuaternion(this.quat),K=-_.dot(ot);this.legLatAvg+=(K-this.legLatAvg)*Math.min(1,t/s.kickTime);const gt=K-this.legLatAvg;this.kickForce=gt,this.pointVel(this.riderW,Qe);const Tt=this.riderVel.dot(ot)-Qe.dot(ot),D=-gt*Tt>0?s.kickYawArm:-s.kickHandArm,nt=Vn.set(0,1,0).applyQuaternion(this.quat);this.torque.addScaledVector(nt,-gt*D),this.rollDiagOn&&this.diagYaw&&(this.rollDiag.蹴り=-gt*D)}this.roll("選手",_.clone().negate(),this.riderW),this.roll("船体の重さ",new b(0,-mr*Wn,0),this.comW);const M=Ox.set(-1,0,0).applyQuaternion(this.quat).clone(),x=this.vel.length(),P=x>.1?this.vel.clone().multiplyScalar(1/x):new b,A=this.diag;A.planing=A.friction=A.lateral=A.heave=A.fin=A.air=0;const w=Math.max(0,Math.min(1,(x-s.stepVentSpeed+2)/4)),L=this.edgeY,E=this.edgeK;for(let ot=0;ot<lu.length;ot++){const K=this.toWorld(lu[ot],Vn),gt=r.height(K.x,K.z,n)-K.y;L[ot]=K.y,E[ot]=w*Math.max(0,Math.min(1,gt/.01))}const S=oi.set(0,1,0).applyQuaternion(this.quat).clone();let I=0;const N=new b,z=new b,W=new b,H=new b,q=M.clone().negate();this.cellT.fill(0),this.wakeMom.fill(0);const Q=this.hull.length;let Z=0,rt=0;for(let ot=0;ot<this.hull.length;ot++){const K=this.hull[ot];this.toWorld(K.p,N);const gt=ot*4;this.pressure[gt]=N.x,this.pressure[gt+1]=N.z,this.pressure[gt+2]=0,this.pressure[gt+3]=s.wakeSmooth,this.spray[ot*7+6]=0;let Tt=r.height(N.x,N.z,n);if(K.aft>0&&E[K.col]>0){const Be=Math.min(Tt,L[K.col]+s.stepRise*K.aft);Tt+=(Be-Tt)*E[K.col]}const Pt=Tt-N.y,D=ot*ji.FX_STRIDE,nt=this.hullFx;if(nt[D]=N.x,nt[D+1]=N.y,nt[D+2]=N.z,nt[D+9]=Pt,Pt<=0){nt[D+10]=nt[D+11]=0,this.wasWet[ot]=0;continue}I++;const Y=ot/un|0;!K.wall&&Pt>this.cellT[Y]&&(this.cellT[Y]=Math.min(Pt,K.depthMax),this.cellX[Y]=K.p.x);const et=Math.min(1,Pt/s.wetSmooth),xt=Math.min(Pt,K.depthMax),ht=this.sampleFlow(r,N);K.wall?Yt.copy(K.n).applyQuaternion(this.quat).multiplyScalar(-Je*ht*Wn*K.area*xt):Yt.set(0,Je*ht*Wn*K.area*xt,0),this.roll("浮力",Yt,N),this.waterVel(N,W),W.y-=r.verticalVelocity(N.x,N.z,n);const Lt=W.length();z.copy(K.n).applyQuaternion(this.quat);const qt=W.dot(z),$t=this.sprayDyn.set(0,0,0);if(nt[D+3]=W.x,nt[D+4]=W.y,nt[D+5]=W.z,nt[D+6]=z.x,nt[D+7]=z.y,nt[D+8]=z.z,nt[D+10]=qt,nt[D+11]=et,!this.wasWet[ot]&&qt>0&&(this.impact[ot]=Math.max(this.impact[ot],qt)),this.wasWet[ot]=1,qt>0){oe.copy(W).addScaledVector(z,-qt);const Be=oe.length();let Te=10,Re=0,_e=0;if(Be>.5&&!K.wall){oe.multiplyScalar(1/Be);const xe=oe.y+(K.aft>0?s.stepRise*E[K.col]:0);xe>.001&&(Te=Pt/xe);const Ae=oe.dot(q);Re=Math.abs(Ae),_e=la(K.p.z)-Math.sign(Ae)*K.p.x}const Qn=K.area/K.len;let dn=K.wall?s.wallPlaning:0;if(!K.wall)for(let xe=0;xe<4;xe++){let Ae=Te;Re>.001&&(Ae=Math.min(Ae,Math.max(0,_e+((xe+.5)/4-.5)*Qn)/Re)),dn+=Math.min(s.pressurePeak,Math.sqrt(s.pressureFetch/Math.max(.005,Ae)))/4}if(H.copy(z).multiplyScalar(-s.planing*dn*Je*ht*K.area*Lt*qt*et),A.planing+=H.dot(P),this.roll("滑走揚力",H,N),!K.wall){const xe=H.dot(S);Z+=xe,rt+=xe*K.p.x}if(Yt.add(H),$t.add(H),Re>.001&&!K.wall){const xe=Math.asin(Math.min(1,Re)),Ae=K.aft>0,$e=Ae&&s.yawSideStallAft>0?s.yawSideStallAft:s.yawSideStall,os=Ae&&s.yawSideAft>=0?s.yawSideAft:s.yawSide,as=s.stallDrop?xe<=$e?xe:Math.max($e*.5,$e-.8*(xe-$e)):$e*Math.tanh(xe/$e),T=H.length(),B=s.yawSideNormal?Qe.copy(q).addScaledVector(z,-q.dot(z)).normalize():Qe.copy(q).addScaledVector(oe,-q.dot(oe)).normalize(),$=Math.sign(oe.dot(q)),J=s.chineVent?Math.min(1,(1-ht)/s.propAirFull):0;H.copy(B).multiplyScalar(-$*os*as*T*(1-J)),A.lateral+=H.dot(P),this.roll("横滑りの横力",H,N),Yt.add(H),$t.add(H)}}const ct=-s.heaveDamp*K.area*W.y*et;Yt.y+=ct,A.heave+=ct*P.y,this.roll("上下の減衰",new b(0,ct,0),N),oe.copy(W).addScaledVector(z,-qt);const Jt=oe.length();H.copy(oe).multiplyScalar(-.5*Je*ht*s.friction*K.area*Jt*et),A.friction+=H.dot(P),this.roll("摩擦",H,N),Yt.add(H);let Me=0,ge=0;if(K.side!==0&&!s.sideWalls){const Be=K.side>0?q:M,Te=W.dot(Be);if(Te>0){const Re=Math.min(Pt,K.depthMax);H.copy(Be).multiplyScalar(-.5*Je*s.chineCd*K.len*Re*Te*Te);const _e=this.chineAt.copy(N).addScaledVector(S,Re*.5);A.lateral+=H.dot(P),this.roll("舷側",H,_e),this.addForce(H,_e),Me+=H.x,ge+=H.z}}this.pressure[gt+2]=Math.max(0,Yt.y);let ne=0,me=0;if(s.spray&&Lt>1){oe.copy(W).addScaledVector(z,-qt);const Be=oe.length();if(Be>.001){oe.multiplyScalar(Lt/Be).add(W);const Te=oe.x*oe.x+oe.z*oe.z,Re=Te>.25?(-$t.x*oe.x-$t.z*oe.z)/Te:0;if(Re>0){const _e=ot*7;this.spray[_e]=N.x,this.spray[_e+1]=N.y,this.spray[_e+2]=N.z,this.spray[_e+3]=oe.x+this.fl.x,this.spray[_e+4]=oe.y+r.verticalVelocity(N.x,N.z,n),this.spray[_e+5]=oe.z+this.fl.z,this.spray[_e+6]=Re,ne=Re*(oe.x+this.fl.x),me=Re*(oe.z+this.fl.z)}}}this.setMom(ot,N.x,N.z,-Yt.x-Me-ne,-Yt.z-ge-me,0),this.addForce(Yt,N)}if(this.wetPoints=I,s.planeCop&&Z>1){const ot=oi.set(0,0,1).applyQuaternion(this.quat),K=this.vel.dot(ot),gt=this.vel.dot(q),Tt=Math.atan2(Math.abs(gt),Math.max(.5,Math.abs(K))),Pt=Math.sign(gt)*s.planeCopK*Math.tanh(Tt/s.planeCopPsi)*2*Qi,D=rt/Z;Yt.copy(ot).multiplyScalar(Z*s.planeCopMix*(Pt-D)),this.torque.add(Yt),this.rollDiagOn&&!this.diagDrag&&!this.diagLat&&(this.rollDiag.滑走の横の中心=Yt.dot(this.rollAxis))}{const ot=oi.set(0,0,1).applyQuaternion(this.quat).clone(),K=Math.max(0,this.vel.dot(ot));let gt=0,Tt=0,Pt=0;const D=this.cellT.length;for(let nt=D-1;nt>=0;nt--){const Y=this.cellT[nt],et=Math.PI/2*Je*Y*Y,xt=et-gt;if(xt<=0||K<1)continue;gt=et;const ht=this.hull[nt*un];this.toWorld(Vn.set(this.cellX[nt],ht.p.y+Y*.5,ht.p.z),N);const Lt=this.sampleFlow(r,N);this.waterVel(N,W);const qt=W.dot(q);H.copy(q).multiplyScalar(-s.sideLift*K*xt*qt*Lt),A.lateral+=H.dot(P),this.roll("サイド",H,N),this.addForce(H,N),Tt-=H.x,Pt-=H.z}this.setMom(Q+4,this.comW.x,this.comW.z,Tt,Pt,0)}{const ot=s.keelFinZ??hu.z,K=this.toWorld(oi.copy(hu).setZ(ot),Vn).clone();let gt=r.height(K.x,K.z,n);const Tt=E[(un-1)/2];if(Tt>0){const Y=Math.min(gt,L[(un-1)/2]+s.stepRise*(Sn-ot));gt+=(Y-gt)*Tt}const Pt=S.y,D=K.y-Is*Pt,nt=Pt>.2?Math.max(0,Math.min(Is,(gt-D)/Pt)):0;if(this.keelFinImmersion=nt/Is,this.keelFinForce=0,nt>.002){const Y=K.addScaledVector(S,-(Is-nt/2)),et=this.sampleFlow(r,Y);this.waterVel(Y,W);const xt=oi.set(0,0,1).applyQuaternion(this.quat).clone(),ht=W.dot(xt),Lt=W.dot(q);if(ht>.5){const qt=Math.atan2(Lt,ht),$t=Math.abs(qt),ct=s.keelFinStall,Jt=s.keelFinSlope*ct,Me=Math.sin(Math.min($t,1.2)),ge=Math.cos(Math.min($t,1.2));let ne=s.keelFinVortex>0?Math.sign(qt)*(s.keelFinSlope*Me*ge*ge+s.keelFinVortex*Me*Me*ge):Math.sign(qt)*(s.stallDrop?$t<=ct?s.keelFinSlope*$t:Math.max(Jt*.5,Jt-1.2*($t-ct)):Jt*Math.tanh(s.keelFinSlope*$t/Jt));s.ventSpeedGear>0&&(ne*=Math.min(1,s.ventSpeedGear**2/Math.max(1e-6,ht*ht+Lt*Lt)));const me=nt*ja,Be=2*nt*nt/me;let Te=s.keelFinCd0+ne*ne/(Math.PI*.8*Be);if(s.finPlateCn>0){const xe=Math.sin($t),Ae=s.finPlateCn*xe;Ae*Math.cos($t)>Math.abs(ne)&&(ne=Math.sign(qt)*Ae*Math.cos($t)),Te=Math.max(Te,s.keelFinCd0+Ae*xe)}if(s.foilVent){const xe=vo(Math.hypot(ht,Lt),nt*.5*Pt,s.foilVentA0,s.foilVentK),Ae=Math.max(0,Math.min(1,($t-xe)/.12),Math.min(1,(1-et)/s.propAirFull));this.keelVent+=(Ae-this.keelVent)*Math.min(1,t*(Ae>this.keelVent?12:1.5));const $e=xo($t,s.keelFinSlope,Math.abs(ne)/Math.max(.1,Math.cos($t)));ne=ne*(1-this.keelVent)+Math.sign(qt)*$e*Math.cos($t)*this.keelVent,Te=Te*(1-this.keelVent)+(s.keelFinCd0+$e*Math.sin($t))*this.keelVent}const Re=ht*ht+Lt*Lt,_e=.5*Je*et*me*Re,Qn=oe.copy(xt).multiplyScalar(ht).addScaledVector(q,Lt).normalize(),dn=Qe.copy(q).multiplyScalar(ht).addScaledVector(xt,-Lt).normalize();H.copy(dn).multiplyScalar(-_e*ne).addScaledVector(Qn,-_e*Te),A.lateral+=H.dot(P),this.roll("中央フィン",H,Y),this.setMom(Q+3,Y.x,Y.z,-H.x,-H.z,0),this.addForce(H,Y),this.keelFinForce=H.dot(q)}else if(s.plateBack&&Math.abs(Lt)>.3){const qt=Math.atan2(Math.abs(Lt),ht),$t=Math.sin(qt),ct=.5*Je*et*nt*ja*(ht*ht+Lt*Lt);let Jt=Math.max(1,s.finPlateCn)*$t;if(s.foilVent){const Me=vo(Math.hypot(ht,Lt),nt*.5*Pt,s.foilVentA0,s.foilVentK),ge=Math.max(0,Math.min(1,(qt-Me)/.12),Math.min(1,(1-et)/s.propAirFull));this.keelVent+=(ge-this.keelVent)*Math.min(1,t*(ge>this.keelVent?12:1.5)),Jt=Jt*(1-this.keelVent)+xo(qt,s.keelFinSlope,Jt)*this.keelVent}H.copy(q).multiplyScalar(-Math.sign(Lt)*ct*Jt).addScaledVector(xt,-.5*Je*et*nt*ja*s.keelFinCd0*ht*Math.abs(ht)),A.lateral+=H.dot(P),this.roll("中央フィン",H,Y),this.setMom(Q+3,Y.x,Y.z,-H.x,-H.z,0),this.addForce(H,Y),this.keelFinForce=H.dot(q)}}}const dt=new Kn().setFromAxisAngle(Bx,(this.tilt-Qo)*Math.PI/180).premultiply(this.quat);Pe.setFromAxisAngle(Ka,this.steerAngle).premultiply(dt);const pt=new b(0,0,1).applyQuaternion(Pe),it=new b(1,0,0).applyQuaternion(Pe),ut=new b(0,1,0).applyQuaternion(Pe),X=oe.copy(Ks).setY(Ks.y+s.motorHeight),U=this.toWorld(X,new b).add(Ul.clone().applyQuaternion(dt)),V=new b().copy(Cx).applyQuaternion(Pe).add(U),k=o.height(V.x,V.z,n)-V.y;if(this.gearSteerMoment=0,k>0){const ot=this.sampleFlow(r,V);this.waterVel(V,W);const K=W.dot(pt),gt=W.dot(it);if(K>.5){const Tt=Math.atan2(gt,K),Pt=Math.abs(Tt);let D=Math.sign(Tt)*(Pt<=.3?go*Pt:Math.max(.35,go*.3-1.2*(Pt-.3)));const nt=Math.max(0,Math.min(1,(.32-k)/.2)),Y=vo(Math.hypot(K,gt),k,s.foilVentA0,s.foilVentK),et=Math.min(1,(1-ot)/s.propAirFull),xt=s.foilVent?Math.max(Math.max(0,Math.min(1,(Pt-Y)/.12)),this.propState.vent*.3,et):Math.max(nt*Math.max(0,Math.min(1,(Pt-.3)/.25)),this.propState.vent*.3);this.finVent+=(xt-this.finVent)*Math.min(1,t*(xt>this.finVent?12:1.5)),s.plateCn>0&&(D=Math.sign(Tt)*Math.max(Math.abs(D),s.plateCn*Math.sin(Pt))),s.foilVent?D=D*(1-this.finVent)+Math.sign(Tt)*xo(Pt,go,Math.abs(D))*this.finVent:D*=1-.6*this.finVent,s.ventSpeed>0&&(D*=Math.min(1,s.ventSpeed**2/Math.max(1e-6,K*K+gt*gt)));const ht=.5*Je*ot*s.finArea*(K*K+gt*gt)*Math.min(1,k/.2);Yt.copy(it).multiplyScalar(-ht*D),Yt.addScaledVector(pt,-.5*Je*ot*s.finDrag*K*K),A.fin+=Yt.dot(P),this.addForce(Yt,V),this.roll("ギアケース",Yt,V),this.setMom(Q+1,V.x,V.z,-Yt.x,-Yt.z,0),this.gearSteerMoment=new b().subVectors(V,U).cross(Yt).dot(ut)}else if(s.plateBack&&Math.abs(gt)>.3){const Tt=Math.atan2(Math.abs(gt),K),Pt=Math.sin(Tt);let D=Math.max(1,s.plateCn)*Pt;if(s.foilVent){const Y=vo(Math.hypot(K,gt),k,s.foilVentA0,s.foilVentK),et=Math.max(0,Math.min(1,(Tt-Y)/.12),Math.min(1,(1-ot)/s.propAirFull));this.finVent+=(et-this.finVent)*Math.min(1,t*(et>this.finVent?12:1.5)),D=D*(1-this.finVent)+xo(Tt,go,D)*this.finVent}s.ventSpeed>0&&(D*=Math.min(1,s.ventSpeed**2/Math.max(1e-6,K*K+gt*gt)));const nt=.5*Je*ot*s.finArea*(K*K+gt*gt)*Math.min(1,k/.2);Yt.copy(it).multiplyScalar(-Math.sign(gt)*nt*D),Yt.addScaledVector(pt,-.5*Je*ot*s.finDrag*K*Math.abs(K)),A.fin+=Yt.dot(P),this.addForce(Yt,V),this.roll("ギアケース",Yt,V),this.setMom(Q+1,V.x,V.z,-Yt.x,-Yt.z,0),this.gearSteerMoment=new b().subVectors(V,U).cross(Yt).dot(ut)}}const tt=new b().copy(Px).applyQuaternion(Pe).add(U),ft=o.height(tt.x,tt.z,n)-tt.y;if(this.plateImmersion=Math.max(0,Math.min(1,(ft+.02)/.05)),this.plateImmersion>0){const ot=this.sampleFlow(r,tt);this.waterVel(tt,W);const K=W.dot(pt);if(K>.5){const gt=W.dot(ut),Tt=Math.atan2(gt,K),Pt=s.plateLift*Dx*Math.max(-.35,Math.min(.35,Tt)),D=.5*Je*ot*Lx*(K*K+gt*gt)*this.plateImmersion;Yt.copy(ut).multiplyScalar(-D*Pt),Yt.addScaledVector(pt,-D*.008),this.plateForce=Yt.dot(Ka),A.fin+=Yt.dot(P),this.addForce(Yt,tt),this.roll("プレート",Yt,tt),this.setMom(Q+2,tt.x,tt.z,-Yt.x,-Yt.z,0)}}else this.plateForce=0;const lt=new b().copy(Rx).applyQuaternion(Pe).add(U),It=o.height(lt.x,lt.z,n)-lt.y;this.propDepth=It;const Ut=this.prop.diameter/2;this.propImmersion=Math.max(0,Math.min(1,(It+Ut)/(2*Ut)));const Wt=this.engineOmega/(2*Math.PI),O=this.sampleFlow(r,lt);this.waterVel(lt,W);const St=Math.max(0,W.dot(pt))*.97,Vt=Math.max(s.obliqueFloor,Math.abs(St)),Gt=(.8*Math.abs(W.dot(ut))+1*Math.abs(W.dot(it)))/Vt,Dt=Mx(this.prop,this.propState,Wt,St,It,this.propImmersion,Math.min(s.obliqueMax,Gt),t,(1-O)/s.propAirFull);this.propPos.copy(lt),this.propAxis.copy(pt);let Et=0;for(const ot of this.propState.u)Et+=ot;this.propJet=Et/this.propState.u.length;const Mt=Dt.thrust*O,R=(s.windmill?Dt.torque:Math.max(0,Dt.torque))*O,y=this.rpm,F=y<hi.idleRpm?Math.min(.25,(hi.idleRpm-y)/200*.25):0,st=y>hi.limitRpm?0:Math.max(this.throttle,F),at=1+8e-4*y,j=zx(y)*st-at;this.engineOmega=Math.max(0,this.engineOmega+(j-R)/hi.inertia*t),this.propThrust=Mt,A.thrust=pt.dot(P)*Mt,this.addForce(Yt.copy(pt).multiplyScalar(Mt),lt),this.roll("推力",Yt,lt);const bt=s.propAir*Math.max(0,Mt)*Math.max(0,this.propJet)/2/(Je*Wn*sn.depth),_t=this.propImmersion>0;_t&&ks.emit(this.jetId,lt,-pt.x,-pt.z,Math.max(0,Mt)*t,t,Ut),this.setMom(Q,lt.x-pt.x*s.jetReach,lt.z-pt.z*s.jetReach,_t?0:-Yt.x,_t?0:-Yt.z,bt+this.propState.vent*Math.PI*Ut*Ut*Math.max(1,St)*this.propImmersion),this.torque.addScaledVector(pt,-R),Yt.copy(this.vel).multiplyScalar(-.5*yx*s.airDrag*x),A.air=Yt.dot(P),this.force.add(Yt),this.riderVel.addScaledVector(_,t/Ui),this.riderVel.y-=Wn*t,this.riderW.addScaledVector(this.riderVel,t),this.vel.addScaledVector(this.force,t/mr),this.comW.addScaledVector(this.vel,t),Pe.copy(this.quat).invert();const yt=Vn.copy(this.angVel).applyQuaternion(Pe),Xt=oi.copy(this.torque).applyQuaternion(Pe),mt=s.yawInertia,Ct=oe.set(Ts.x*yt.x,mt*yt.y,Ts.z*yt.z);if(Xt.sub(Qe.crossVectors(yt,Ct)),Xt.x-=s.pitchDamp*yt.x,Xt.y-=s.yawDamp*yt.y+s.yawDamp2*Math.abs(yt.y)*yt.y,s.driftStiff>0){const ot=Qe.copy(this.vel).setY(0).applyQuaternion(Pe),K=Math.hypot(ot.x,ot.z),gt=Math.atan2(ot.x,ot.z),Tt=Math.max(0,Math.abs(gt)-s.driftStiff0),Pt=Math.min(1,Math.max(0,(K-2)/2));if(Xt.y+=Math.sign(gt)*s.driftStiff*Tt*Pt,s.driftDamp>0){let D=isNaN(this.prevBeta)?0:gt-this.prevBeta;D-=2*Math.PI*Math.round(D/(2*Math.PI));const nt=(Math.abs(gt)-s.driftDamp0)/Math.max(.05,s.driftStiff0+.3-s.driftDamp0),Y=nt<=0?0:nt>=1?1:nt*nt*(3-2*nt);Xt.y+=s.driftDamp*Y*(D/t)*Pt}this.prevBeta=gt}Xt.z-=s.rollDamp*yt.z,yt.x+=Xt.x/Ts.x*t,yt.y+=Xt.y/mt*t,yt.z+=Xt.z/Ts.z*t,this.angVel.copy(yt).applyQuaternion(this.quat);const Ht=this.angVel;Pe.set(Ht.x*t*.5,Ht.y*t*.5,Ht.z*t*.5,0).multiply(this.quat),this.quat.set(this.quat.x+Pe.x,this.quat.y+Pe.y,this.quat.z+Pe.z,this.quat.w+Pe.w).normalize(),this.origin.copy(this.comB).applyQuaternion(this.quat).negate().add(this.comW),Pe.copy(this.quat).invert(),this.riderB.copy(this.riderW).sub(this.origin).applyQuaternion(Pe)}attitude(){const t=new b(0,0,1).applyQuaternion(this.quat),e=new b(-1,0,0).applyQuaternion(this.quat);return{trim:Math.asin(Math.max(-1,Math.min(1,t.y)))*180/Math.PI,heel:Math.asin(Math.max(-1,Math.min(1,-e.y)))*180/Math.PI}}};C(ji,"nextId",1),C(ji,"FX_STRIDE",12);let Nr=ji;const gr=new b;function An(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;gr.copy(t),gr[n]=0,gr.normalize();const l=.5*o/(o+a),h=1-gr.angleTo(i)/c;return Math.sign(gr[e])===1?h*l:a/(o+a)+l+l*(1-h)}class kx extends ae{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new b,c=new b,l=new b(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new b,_=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=An(g,c,"z","y",r,n),d[p+1]=1-An(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-An(g,c,"z","y",r,n),d[p+1]=1-An(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-An(g,c,"x","z",r,t),d[p+1]=An(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-An(g,c,"x","z",r,t),d[p+1]=1-An(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-An(g,c,"x","y",r,t),d[p+1]=1-An(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=An(g,c,"x","y",r,t),d[p+1]=1-An(g,c,"y","x",r,e);break}}}const he=(i,t,e)=>new b(i,t,e);function ai(i){const t=i[0].length,e=[],n=[];for(const r of i)for(const o of r)e.push(o.x,o.y,o.z);for(let r=0;r<i.length-1;r++)for(let o=0;o<t-1;o++){const a=r*t+o,c=a+t;n.push(a,c,a+1,a+1,c,c+1)}const s=new be;return s.setAttribute("position",new se(e,3)),s.setIndex(n),s.computeVertexNormals(),s}function $a(i){const t=new b;for(const r of i)t.add(r);t.multiplyScalar(1/i.length);const e=[t.x,t.y,t.z];for(const r of i)e.push(r.x,r.y,r.z);const n=[];for(let r=0;r<i.length;r++)n.push(0,1+r,1+(r+1)%i.length);const s=new be;return s.setAttribute("position",new se(e,3)),s.setIndex(n),s.computeVertexNormals(),s}function As(i,t,e){const n=[];for(let s=0;s<=e;s++){const r=s/e;n.push(i+(t-i)*(t>=Rn-1e-6?1-(1-r)**1.6:r))}return n}const Vx=.13,du=6;function $s(i,t,e,n,s){const r=[];for(let o=0;o<=du;o++){const a=Jo(i,t+(e-t)*o/du,s);r.push(he(n*a.x,a.y,i))}return r}const Fl=(i,t)=>Math.min(1,Vx/er(i,t));function yr(i,t=On(i)){const e=la(i,t),n=Fl(i,t);return[...$s(i,n,0,1,t),he(e*.5,t,i),he(0,t,i),he(-e*.5,t,i),...$s(i,0,n,-1,t)]}function Hx(i,t){const e=On(i),n=Fl(i,e);return t>0?$s(i,1,n,1,e):$s(i,n,1,-1,e)}function fu(i){const t=On(i),e=Fl(i,t);return[...$s(i,1,e,1,t).slice(0,-1),...yr(i),...$s(i,e,1,-1,t).slice(1)]}function Gx(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#f4f4f2",t.fillRect(0,0,256,256),t.fillStyle="#1f5fbf",t.beginPath(),t.moveTo(40,30),t.lineTo(216,30),t.quadraticCurveTo(200,190,128,236),t.quadraticCurveTo(56,190,40,30),t.fill(),t.fillStyle="#d8262b",t.beginPath(),t.moveTo(84,60),t.lineTo(172,60),t.quadraticCurveTo(160,150,128,180),t.quadraticCurveTo(96,150,84,60),t.fill();const e=new zr(i);return e.colorSpace=Ge,e.anisotropy=4,e}function pu(i){const t=vi(i),e=[];for(let n=0;n<=16;n++){const s=t-2*t*n/16;e.push(he(s,Ad(i,s),i))}return e}function mu(i){const t=i.getAttribute("position"),e=[];for(let n=0;n<t.count;n++)e.push(.5-t.getX(n)/(2*Qi),(t.getZ(n)-Rr)/(Rn-Rr));return i.setAttribute("uv",new se(e,2)),i}const Wx=-.2;function Hi(i,t,e,n){const s=new b().subVectors(t,i),r=new Nt(new bl(e,Math.max(.001,s.length()),4,10),n);return r.position.copy(i).add(t).multiplyScalar(.5),r.quaternion.setFromUnitVectors(new b(0,1,0),s.normalize()),r.castShadow=!0,r}function gu(i,t,e){const n=document.createElement("canvas");n.width=n.height=128;const s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,128,128),s.fillStyle=e,s.font="bold 100px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,64,70);const r=new zr(n);return r.colorSpace=Ge,r}const Dd=["#f4f4f4","#222222","#d8262b","#1f5fbf","#f2c230","#1d9a4a"];function Id(i=3){const t=new Ve,e=Dd[i-1],n=new jt({color:15856110,roughness:.35,side:Le}),s=new jt({color:13208394,roughness:.45,side:Le}),r=new jt({map:Gx(),roughness:.4,side:Le}),o=new jt({color:14165547,roughness:.4,side:Le}),a=new jt({color:10134445,roughness:.8,side:Le}),c=new jt({color:1781596,roughness:.4,side:Le}),l=new jt({color:2302755,roughness:.5,metalness:.2}),h=new jt({color:13164006,transparent:!0,opacity:.3,roughness:.05,metalness:.1,side:Le,depthWrite:!1}),u=new jt({map:gu(String(i),e,i===1||i===5?"#111":"#fff"),roughness:.4}),d=new jt({color:8948880,roughness:.3,metalness:.8}),f=(V,k)=>{const tt=new Nt(V,k);return tt.castShadow=!0,tt.receiveShadow=!0,t.add(tt),tt},g=As(Ji,Sn,16),_=As(Sn,Rn,28),m=V=>On(Math.min(V,Sn-1e-6));f(ai(g.map(V=>yr(V,m(V)))),s),f(ai(_.map(V=>yr(V))),s),f(ai([yr(Sn,jo),yr(Sn,0)]),s);for(const V of[1,-1])f(ai([...g,..._.slice(1)].map(k=>Hx(k,V))),n);f($a([...fu(Ji)]),n),f($a([...fu(Rn),...pu(Rn).reverse()]),n);const p=new Nt(new ae(hx,Is,$o-Ko),new jt({color:3815994,roughness:.5}));p.position.set(0,jo-Is/2,(Ko+$o)/2),t.add(p);const v=As(_n,Bs,48);for(const V of[1,-1]){const k=(St,Vt)=>f(ai(v.map(Gt=>V>0?St(Gt):St(Gt).reverse())),Vt),tt=(St,Vt,Gt)=>{const Dt=[],Et=qe(St),Mt=Ya(St);for(let R=0;R<=4;R++){const y=Gt-(Gt-Vt)*R/4,F=kn(St)+(ru(St)-kn(St))*y**1.6;Dt.push(he(V*F,Et+(Mt-Et)*Math.sqrt(y),St))}return V>0?Dt:Dt.reverse()},ft=St=>St>=Wx?.18:1;k(St=>tt(St,0,ft(St)),n),k(St=>tt(St,ft(St),.82),h),k(St=>tt(St,.82,1),n),k(St=>[he(V*fr(St),Rs,St),he(V*fr(St),Ya(St),St),he(V*ru(St),Ya(St),St)],n),k(St=>[he(V*fr(St),qe(St)+.002,St),he(V*kn(St),qe(St)+.002,St)].reverse(),n),f(mu(ai(As(Ji,Bs,40).map(St=>V>0?[he(vi(St),qe(St),St),he(kn(St),qe(St),St)]:[he(-kn(St),qe(St),St),he(-vi(St),qe(St),St)]))),r);const lt=-1.2,It=-.92,Ut=qe(lt)+.03,Wt=Ii-.03,O=new Nt(new jn(It-lt,Wt-Ut),u);O.position.set(V*(kn((lt+It)/2)+.004),(Ut+Wt)/2,(lt+It)/2),O.rotation.y=V*Math.PI/2,t.add(O)}f(mu(ai(As(Bs-.02,Rn,16).map(pu))),r),f($a([he(kn(_n),qe(_n),_n),he(kn(_n),Ii,_n),he(-kn(_n),Ii,_n),he(-kn(_n),qe(_n),_n)]),n),f(ai(v.map(V=>[he(fr(V),Rs,V),he(-fr(V),Rs,V)])),a);const M=As(Ji,1.3,30);for(const[V,k,tt]of[[c,.004,.05],[o,.058,.07]])for(const ft of[1,-1])f(ai(M.map(lt=>{const It=qe(lt),Ut=On(lt),Wt=er(lt,Ut),O=Jo(lt,1-k/Wt,Ut).x*1.004+.002,St=Jo(lt,1-tt/Wt,Ut).x*1.004+.002;return ft>0?[he(O,It-k,lt),he(St,It-tt,lt)]:[he(-St,It-tt,lt),he(-O,It-k,lt)]})),V);const x=new Ve;x.position.set(0,.56,-.02),x.rotation.x=-.9;const P=new Nt(new Pl(.13,.016,8,24),l);x.add(P);const A=new Nt(new ae(.24,.02,.012),l);x.add(A),t.add(x),t.add(Hi(he(0,Ad(lx,0)-.02,.06),he(0,.55,-.01),.018,l));const w=new Ve;w.position.copy(Ks),t.add(w);const L=new Nt(new ae(.2,.12,.08),d);L.position.set(0,-.02,0),w.add(L);const E=new Nt(new fi(.018,.018,.26,10),d);E.rotation.z=Math.PI/2,w.add(E);const S=new Ve;S.position.copy(Ul),w.add(S);const I=new Nt(new ae(.16,.16,.08),d);I.position.set(0,-.02,.05),S.add(I);const N=new Nt(new kx(.36,.43,.33,4,.07),l);N.position.set(0,.235,-.165),N.castShadow=!0,S.add(N);const z=new jt({map:gu(String(i),e,i===1||i===5?"#111":"#fff"),roughness:.4});for(const V of[1,-1]){const k=new Nt(new jn(.2,.2),z);k.position.set(V*.182,.25,-.165),k.rotation.y=V*Math.PI/2,S.add(k)}const W=new Nt(new ae(.07,.6,.12),l);W.position.set(0,-.27,-.13),S.add(W);const H=new Nt(new ae(.22,.01,.26),l);H.position.set(0,-.44,-.14),S.add(H);const q=Hi(he(0,-.57,0),he(0,-.57,-.24),.045,l);S.add(q);const Q=new Nt(new ae(.014,.12,.12),l);Q.position.set(0,-.66,-.1),S.add(Q);const Z=new Ve;Z.position.set(0,-.57,-.29);for(let V=0;V<3;V++){const k=new Nt(new ae(.06,.12,.008),d);k.position.y=.07;const tt=new Ve;tt.rotation.z=V*Math.PI*2/3,k.rotation.y=.5,tt.add(k),Z.add(tt)}S.add(Z);const rt=new Ve;rt.position.set(0,Rs,-.5),t.add(rt);const dt=new jt({color:e,roughness:.7}),pt=new jt({color:2764602,roughness:.8}),it=new jt({color:16185078,roughness:.25}),ut=(V,k,tt)=>he(V,k-Rs,tt+.5);for(const V of[1,-1])rt.add(Hi(ut(V*.12,.17,-.33),ut(V*.12,.16,-.82),.055,pt)),rt.add(Hi(ut(V*.12,.19,-.33),ut(V*.11,.5,-.66),.075,pt)),rt.add(Hi(ut(V*.19,.9,-.5),ut(V*.22,.72,-.27),.045,dt)),rt.add(Hi(ut(V*.22,.72,-.27),ut(V*.11,.6,-.06),.04,dt));rt.add(Hi(ut(0,.52,-.68),ut(0,.9,-.5),.16,dt));const X=new Nt(new Ur(.135,20,14),it);X.position.copy(ut(0,1.08,-.4)),X.castShadow=!0,rt.add(X);const U=new Nt(new Ur(.137,20,10,Math.PI/2-.9,1.8,1.2,.5),new jt({color:1118481,roughness:.1,metalness:.5}));return U.position.copy(X.position),rt.add(U),{root:t,tilt:w,motor:S,prop:Z,rider:rt,wheel:x}}function Ud(i,t,e){i.root.position.copy(t.origin),i.root.quaternion.copy(t.quat),i.tilt.rotation.x=(t.tilt-Qo)*Math.PI/180,i.tilt.position.y=Ks.y+Ye.motorHeight,i.motor.rotation.y=t.steerAngle,i.prop.rotation.z+=t.engineOmega*e*.06;for(const o of i.wheel.children)o.rotation.z=-t.steerAngle*2.5;const n=t.riderB.x-vn.x,s=t.riderB.y-vn.y,r=t.riderB.z-vn.z;i.rider.position.set(n*.6,Rs+s*.5,-.5+r*.5),i.rider.rotation.set(r*.9,0,-n*.9)}const Ho=220,el=352,Mo=Ho/el,Nd=new Kt(6989532),zl=new Kt(13624306),ha=new b(-.4,.55,.75).normalize(),_u=`
  uniform sampler2D uWake;
  uniform vec2 uWakeOrigin;
  uniform float uWakeDx;
  uniform float uWakeN;
  float wakeAt(vec2 xz) {
    vec2 g = (xz - uWakeOrigin) / uWakeDx;
    if (g.x < 1.0 || g.y < 1.0 || g.x > uWakeN - 2.0 || g.y > uWakeN - 2.0) return 0.0;
    return texture2D(uWake, (g + 0.5) / uWakeN).r;
  }
  // 泡の混ざった割合（g）
  float aerAt(vec2 xz) {
    vec2 g = (xz - uWakeOrigin) / uWakeDx;
    if (g.x < 1.0 || g.y < 1.0 || g.x > uWakeN - 2.0 || g.y > uWakeN - 2.0) return 0.0;
    return texture2D(uWake, (g + 0.5) / uWakeN).g;
  }
  float fhash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float fnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(fhash(i), fhash(i + vec2(1.0, 0.0)), f.x), mix(fhash(i + vec2(0.0, 1.0)), fhash(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  vec2 wakeGrad(vec2 xz) {
    float e = uWakeDx * 0.5;
    return vec2(wakeAt(xz + vec2(e, 0.0)) - wakeAt(xz - vec2(e, 0.0)), wakeAt(xz + vec2(0.0, e)) - wakeAt(xz - vec2(0.0, e))) / (2.0 * e);
  }
`,Xx=new b(.95,.38,.32),qx=new Kt(2382170),xu=.5,Fd="boatgame.waterFx";function Yx(){try{return localStorage.getItem(Fd)!=="0"}catch{return!0}}class zd{constructor(t){C(this,"mesh");C(this,"uniforms");C(this,"reflTarget",new xi(1,1,{type:pi}));C(this,"refrTarget",new xi(1,1,{type:pi,depthTexture:new yl(1,1)}));C(this,"mirror",new Mn);C(this,"hidden",[]);C(this,"size",new wt);C(this,"passes",Yx());C(this,"waves");C(this,"wakeTex",null);C(this,"wakeHalf",null);this.waves=t;const e=t.waves.length,n=new jn(Ho,Ho,el,el);n.rotateX(-Math.PI/2);const s=new jc(new Uint16Array(4),2,2,ia,pi);s.needsUpdate=!0,this.uniforms={uTime:{value:0},uA:{value:Array.from({length:e},()=>new Ee)},uB:{value:Array.from({length:e},()=>new Ee)},uSun:{value:ha},uSkyTop:{value:Nd},uSkyHorizon:{value:zl},uFogFar:{value:Ho*.48},uWake:{value:s},uWakeOrigin:{value:new wt(-1e6,-1e6)},uWakeDx:{value:1},uWakeN:{value:2},uRefl:{value:this.reflTarget.texture},uReflMat:{value:new ue},uReflOn:{value:0},uRefr:{value:this.refrTarget.texture},uRefrDepth:{value:this.refrTarget.depthTexture},uRefrOn:{value:0},uRes:{value:new wt(1,1)},uNear:{value:.1},uFar:{value:1e3},uAbsorb:{value:Xx},uScatter:{value:qx}};const r=new Cn({uniforms:this.uniforms,defines:{NW:e},vertexShader:`
        uniform float uTime;
        uniform vec4 uA[NW]; // dirX, dirZ, amp, k
        uniform vec4 uB[NW]; // omega, phase
        ${_u}
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
        ${_u}
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
          // 泡の混ざった水（水面近くの層）は白い。濃いところほど白く、まだらに
          float aer = aerAt(vWorld.xz);
          // 泡の濃さで白さが変わる（直進の筋 約1% は半透明、旋回の帯 約3% はほぼ真っ白）。まだらに、ゆっくり揺らぐ
          float mott = 0.55 * fnoise(vWorld.xz * 0.9 + uTime * 0.15) + 0.3 * fnoise(vWorld.xz * 2.6 - uTime * 0.25) + 0.15 * fnoise(vWorld.xz * 7.0);
          float fw = smoothstep(0.0003, 0.012, aer * (0.5 + mott));
          col = mix(col, vec3(0.93, 0.96, 0.98), fw * 0.9);
          float fog = smoothstep(uFogFar * 0.35, uFogFar, dist);
          col = mix(col, uSkyHorizon, fog);
          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }
      `});this.mesh=new Nt(n,r),this.mesh.frustumCulled=!1}updateWake(t){var a;const e=t.n;(!this.wakeTex||!this.wakeHalf||this.wakeHalf.length!==e*e*2)&&(this.wakeHalf=new Uint16Array(e*e*2),this.wakeTex=new jc(this.wakeHalf,e,e,ml,pi),this.wakeTex.magFilter=bn,this.wakeTex.minFilter=bn,this.uniforms.uWake.value=this.wakeTex,this.uniforms.uWakeDx.value=t.dx,this.uniforms.uWakeN.value=e);const n=t.h,s=this.wakeHalf,r=(a=t.layer)==null?void 0:a.air,o=1/sn.depth;for(let c=0;c<e*e;c++)s[2*c]=ch.toHalfFloat(n[c]),s[2*c+1]=ch.toHalfFloat(r?Math.min(sn.maxVoid,Math.max(0,r[c]*o)):0);this.wakeTex.needsUpdate=!0,this.uniforms.uWakeOrigin.value.set(t.originX,t.originZ)}hide(...t){this.hidden.push(...t)}renderPasses(t,e,n){const s=this.uniforms;if(!this.passes){s.uReflOn.value=s.uRefrOn.value=0;return}t.getDrawingBufferSize(this.size),s.uRes.value.copy(this.size);const r=Math.max(1,Math.floor(this.size.x*xu)),o=Math.max(1,Math.floor(this.size.y*xu));(this.reflTarget.width!==r||this.reflTarget.height!==o)&&(this.reflTarget.setSize(r,o),this.refrTarget.setSize(r,o));const a=this.hidden.map(u=>u.visible);this.mesh.visible=!1;for(const u of this.hidden)u.visible=!1;const c=t.shadowMap.autoUpdate;t.shadowMap.autoUpdate=!1;const l=t.getRenderTarget();n.updateMatrixWorld(),t.setRenderTarget(this.refrTarget),t.clear(),t.render(e,n),s.uNear.value=n.near,s.uFar.value=n.far,s.uRefrOn.value=1;const h=n.position;if(h.y>.05){const u=this.mirror;u.copy(n,!1),u.position.set(h.x,-h.y,h.z);const d=new b(0,0,-1).applyQuaternion(n.quaternion),f=new b(0,1,0).applyQuaternion(n.quaternion);d.y=-d.y,f.y=-f.y,u.up.copy(f),u.lookAt(u.position.clone().add(d)),u.projectionMatrix.copy(n.projectionMatrix),u.updateMatrixWorld(),u.matrixWorldInverse.copy(u.matrixWorld).invert(),s.uReflMat.value.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse);const g=t.clippingPlanes;t.clippingPlanes=[new li(new b(0,1,0),.05)],t.setRenderTarget(this.reflTarget),t.clear();const _=e.userData.sky,m=_==null?void 0:_.position.clone();_==null||_.position.copy(u.position),t.render(e,u),_&&m&&_.position.copy(m),t.clippingPlanes=g,s.uReflOn.value=1}else s.uReflOn.value=0;t.setRenderTarget(l),t.shadowMap.autoUpdate=c,this.mesh.visible=!0,this.hidden.forEach((u,d)=>u.visible=a[d])}update(t,e){this.uniforms.uTime.value=t;const n=this.uniforms.uA.value,s=this.uniforms.uB.value;this.waves.waves.forEach((r,o)=>{n[o].set(r.dirX,r.dirZ,r.amp*this.waves.scale,r.k),s[o].set(r.omega,r.phase,0,0)}),this.mesh.position.set(Math.round(e.x/Mo)*Mo,0,Math.round(e.z/Mo)*Mo)}}function Od(){const i=new js(1500,48);i.rotateX(-Math.PI/2);const t=new xl({color:new Kt(10470612),fog:!0}),e=new Nt(i,t);return e.position.y=-1.6,e}const yn=[new b(0,0,150),new b(0,0,-150)],nl=0,Ft={x0:-45,x1:85,z0:-215,z1:200},gn=.8,vu=3,Xi=yn[1].z+120,Sr=6,Er=4.5,xn=7,Zx=Sr*Er+1,jx=[16053492,2236962,14165547,2056127,15909424,1940042],Kx=["#f4f4f4","#222222","#d8262b","#1f5fbf","#f2c230","#1d9a4a"];function $x(i,t,e,n,s){const r=document.createElement("canvas");r.width=n,r.height=s;const o=r.getContext("2d");o.fillStyle=t,o.fillRect(0,0,n,s),o.fillStyle=e,o.font=`bold ${Math.floor(s*.72)}px sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillText(i,n/2,s*.54,n*.94);const a=new zr(r);return a.colorSpace=Ge,a.anisotropy=4,a}function Jx(i,t,e){const n=document.createElement("canvas");n.width=256,n.height=256;const s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,256,256),s.fillStyle=e,s.font="bold 120px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,128,80);const r=new zr(n);return r.colorSpace=Ge,r}function Qx(){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d");e.fillStyle="#111",e.fillRect(0,0,512,512),e.translate(512/2,512/2),e.fillStyle="#f2c230";for(let l=0;l<12;l++)e.save(),e.rotate(l/12*Math.PI*2),e.beginPath(),e.moveTo(0,-512*.46),e.lineTo(-512*.035,-512*.38),e.lineTo(512*.035,-512*.38),e.closePath(),e.fill(),e.restore();e.fillStyle="#fff",e.font=`bold ${512*.11}px sans-serif`,e.textAlign="center",e.textBaseline="middle";const n=(l,h)=>[Math.sin((12-l)/12*Math.PI*2)*h,-Math.cos((12-l)/12*Math.PI*2)*h],[s,r]=n(5,512*.27),[o,a]=n(10,512*.27);e.fillText("5",s,r),e.fillText("10",o,a);const c=new zr(t);return c.colorSpace=Ge,c}class Bd{constructor(t){C(this,"group",new Ve);C(this,"floaters",[]);C(this,"floorTime",{value:0});C(this,"clockHand",null);C(this,"waves");this.waves=t;for(const f of yn)this.addMark(f.x,f.z);const e=new jt({color:11117980,roughness:1}),n=new vd;n.moveTo(-1400,-1400),n.lineTo(1400,-1400),n.lineTo(1400,1400),n.lineTo(-1400,1400),n.lineTo(-1400,-1400);const s=new Zo;s.moveTo(Ft.x0,Ft.z0),s.lineTo(Ft.x0,Ft.z1),s.lineTo(Ft.x1,Ft.z1),s.lineTo(Ft.x1,Ft.z0),s.lineTo(Ft.x0,Ft.z0),n.holes.push(s);const r=new Cl(n);r.rotateX(Math.PI/2);const o=new Nt(r,new jt({color:9210498,roughness:1,side:Le}));o.position.y=gn,o.receiveShadow=!0,this.group.add(o);const a=gn+vu,c=[[Ft.x0-.3,(Ft.z0+Ft.z1)/2,.6,Ft.z1-Ft.z0],[Ft.x1+.3,(Ft.z0+Ft.z1)/2,.6,Ft.z1-Ft.z0],[(Ft.x0+Ft.x1)/2,Ft.z0-.3,Ft.x1-Ft.x0,.6],[(Ft.x0+Ft.x1)/2,Ft.z1+.3,Ft.x1-Ft.x0,.6]];for(const[f,g,_,m]of c){const p=new Nt(new ae(_,a,m),e);p.position.set(f,gn-a/2,g),this.group.add(p)}const l=new jt({color:9081227,roughness:1});l.onBeforeCompile=f=>{f.uniforms.uTime=this.floorTime,f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
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
          gl_FragColor.rgb *= 0.8 + 1.1 * causticAt(vFloorW.xz, uTime);`)};const h=new Nt(new jn(Ft.x1-Ft.x0,Ft.z1-Ft.z0),l);h.rotation.x=-Math.PI/2,h.position.set((Ft.x0+Ft.x1)/2,-vu,(Ft.z0+Ft.z1)/2),this.group.add(h);const u=new jt({color:15263976,roughness:.6}),d=new Nt(new ae(.08,.08,Ft.z1-Ft.z0),u);d.position.set(Ft.x0-.5,gn+1.1,(Ft.z0+Ft.z1)/2),this.group.add(d),this.addStand(),this.addPit(),this.addClock(),this.addDistanceSigns(),this.addBoard(),this.addCity()}addStand(){const t=new Ve,e=new jt({color:15000284,roughness:.8}),n=new jt({color:6127513,roughness:.15,metalness:.4}),s=new jt({color:5204874,roughness:.9}),r=new jt({color:13225168,roughness:.6}),o=260;for(let l=0;l<5;l++){const h=new Nt(new ae(1.6,.45,o),l%2?e:s);h.position.set(-48-l*1.6,gn+.22+l*.45,0),t.add(h)}[{x:-58,w:8,h:6},{x:-61,w:14,h:6},{x:-64,w:20,h:6},{x:-67,w:26,h:6}].forEach((l,h)=>{const u=gn+2.2+h*6,d=new Nt(new ae(l.w,l.h,o),e);d.position.set(l.x-l.w/2+4,u+l.h/2,0),d.castShadow=!0,t.add(d);const f=new Nt(new ae(.1,l.h*.6,o-4),n);f.position.set(l.x+4.06,u+l.h*.55,0),t.add(f)});const c=new Nt(new ae(34,.8,o+6),r);c.position.set(-76,gn+2.2+24.4,0),t.add(c),this.group.add(t)}addPit(){const t=new Ve,e=new jt({color:10131600,roughness:1}),n=Ft.x0,s=Sr*Er,r=new Nt(new ae(xn,.5,s+1),e);r.position.set(n+xn/2-2.5,.05,Xi),t.add(r);for(let l=0;l<=Sr;l++){const h=new Nt(new ae(4,.35,.5),e);h.position.set(n+xn-.5,.05,Xi-s/2+l*Er),t.add(h)}for(let l=0;l<Sr;l++){const h=Sr-l,u=jx[h-1],d=new jt({color:u,roughness:.55}),f=Xi-s/2+(l+.5)*Er,g=new Ve,_=Er-.6;for(const M of[-1,1]){const x=new Nt(new ae(xn-2,1.6,.25),d);x.position.set(0,1.1,M*_/2),g.add(x)}const m=new Nt(new fi(_/2,_/2,xn-2,20,1,!0,0,Math.PI),d);m.rotation.set(0,0,Math.PI/2),m.rotation.order="ZYX",m.position.set(0,1.9,0),m.material.side=Le,g.add(m);const p=h===1||h===5?"#111":"#fff",v=new Nt(new js(_/2,24,0,Math.PI),new jt({map:Jx(String(h),Kx[h-1],p),roughness:.6}));v.rotation.y=Math.PI/2,v.position.set((xn-2)/2+.01,1.9,0),g.add(v),g.position.set(n+xn/2-2,.3,f),t.add(g)}const o=new Nt(new ae(xn+1,.3,s+2),new jt({color:4020858,roughness:.6}));o.position.set(n+xn/2-2.5,4.6,Xi),t.add(o);const a=new Nt(new jn(s,1.4),new jt({map:$x("BOAT RACE 住之江　ピット","#3d5a7a","#fff",1024,64),roughness:.6}));a.rotation.y=Math.PI/2,a.position.set(n+xn-1.99,5.3,Xi),t.add(a);const c=new Nt(new ae(.2,1.4,s),new jt({color:2901344}));c.position.set(n+xn-2.1,5.3,Xi),t.add(c);for(const l of t.children)l.castShadow=!0;this.group.add(t)}addClock(){const t=new Ve,e=new jt({color:1973790,roughness:.7}),n=new jt({color:5593695,roughness:.6,metalness:.3});for(const h of[-2.6,2.6]){const u=new Nt(new ae(.5,6,.5),n);u.position.set(0,3,h),t.add(u)}const s=new Nt(new ae(.5,6,6),e);s.position.set(0,8,0),t.add(s);const r=new Nt(new js(2.5,48),new jt({map:Qx(),roughness:.5}));r.rotation.y=-Math.PI/2,r.position.set(-.26,8,0),t.add(r);const o=new Ve,a=new Nt(new ae(.05,2.2,.18),new jt({color:16777215,roughness:.4,emissive:2236962}));a.position.y=1,o.add(a);const c=new Nt(new fi(.2,.2,.08,16),new jt({color:14540253}));c.rotation.z=Math.PI/2,o.add(c),o.position.set(-.32,8,0),t.add(o),this.clockHand=o;const l=new Nt(new ae(.4,2,1.5),new jt({color:14540253,roughness:.4}));l.position.set(0,7.5,4.2),t.add(l),t.position.set(Ft.x1+3,gn,nl+6);for(const h of t.children)h.castShadow=!0;this.group.add(t)}addDistanceSigns(){const t=new jt({color:9080724,roughness:.6,metalness:.3}),e=12,n=3,s=1.5,r=new be;r.setAttribute("position",new se([-.35,0,0,.35,0,0,0,-.75,0],3)),r.setIndex([0,2,1]),r.computeVertexNormals();const o=new jt({roughness:.8,side:Le}),a=Ft.x0-.8,c=Ft.x1+.8,l=gn+e,h=_=>{const m=(_-a)/(c-a);return l-.3-n*4*m*(1-m)},u=Math.floor((c-a)/s)-1,d=new ue,f=new Kt(14165547),g=new Kt(16053492);for(const _ of[50,100,150]){const m=nl-_;for(const M of[a,c]){const x=new Nt(new fi(.12,.16,e,10),t);x.position.set(M,gn+e/2,m),x.castShadow=!0,this.group.add(x)}const p=[];for(let M=0;M<=40;M++){const x=a+(c-a)*M/40;p.push(new b(x,h(x),m))}this.group.add(new pd(new be().setFromPoints(p),new El({color:3355443})));const v=new r_(r,o,u);for(let M=0;M<u;M++){const x=a+s*(M+1),P=(h(x+.1)-h(x-.1))/.2;d.makeRotationZ(Math.atan(P)).setPosition(x,h(x),m),v.setMatrixAt(M,d),v.setColorAt(M,M%2?g:f)}v.castShadow=!0,this.group.add(v)}}setClock(t){if(!this.clockHand)return;const e=(t%12+12)%12/12;this.clockHand.rotation.x=e*Math.PI*2}addBoard(){const t=new Nt(new ae(1.2,14,70),new jt({color:2764083,roughness:.7}));t.position.set(Ft.x1+8,gn+9,0),this.group.add(t);const e=new Nt(new jn(66,11),new jt({color:1318958,emissive:1914192,roughness:.4}));e.rotation.y=-Math.PI/2,e.position.set(Ft.x1+7.35,gn+9.5,0),this.group.add(e)}addCity(){const t=[12040637,13222840,10462893,14079698].map(s=>new jt({color:s,roughness:.9}));let e=12345;const n=()=>(e=e*16807%2147483647)%1e4/1e4;for(let s=0;s<140;s++){const r=n()*Math.PI*2,o=330+n()*700,a=Math.cos(r)*o,c=Math.sin(r)*o,l=12+n()**2*90,h=20+n()*40,u=new Nt(new ae(h,l,20+n()*40),t[s%t.length]);u.position.set(a,gn+l/2,c),u.rotation.y=n()*Math.PI,this.group.add(u)}}addMark(t,e){const n=new Ve,s=new jt({color:15895070,roughness:.5}),r=new jt({color:16119285,roughness:.5}),o=new Nt(new fi(.7,.8,1.8,24),s);o.position.y=.6,n.add(o);const a=new Nt(new fi(.71,.75,.35,24),r);a.position.y=.7,n.add(a);const c=new Nt(new Rl(.7,.5,24),s);c.position.y=1.75,n.add(c);for(const l of n.children)l.castShadow=!0;this.group.add(n),this.floaters.push({obj:n,x:t,z:e,draft:.2})}update(t){this.floorTime.value=t;for(const e of this.floaters)e.obj.position.set(e.x,this.waves.height(e.x,e.z,t)-e.draft,e.z)}}const _r=160,Mu=5,tv=.035;class kd{constructor(t){C(this,"mesh");C(this,"points",[]);C(this,"lastAdd",-1);C(this,"pos");C(this,"across");C(this,"waves");this.waves=t,this.pos=new Float32Array(_r*2*3),this.across=new Float32Array(_r*2*3);const e=[];for(let r=0;r<_r-1;r++){const o=r*2;e.push(o,o+2,o+1,o+1,o+2,o+3)}const n=new be;n.setAttribute("position",new Ke(this.pos,3).setUsage(wr)),n.setAttribute("aWake",new Ke(this.across,3).setUsage(wr)),n.setIndex(e);const s=new Cn({transparent:!0,depthWrite:!1,side:Le,vertexShader:`
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
      `});this.mesh=new Nt(n,s),this.mesh.frustumCulled=!1}add(t,e,n,s){if(t-this.lastAdd<tv)return;this.lastAdd=t;const r=Math.hypot(n.x,n.z)||1;this.points.unshift({x:e.x,z:e.z,sx:n.x/r,sz:n.z/r,born:t,strength:s}),this.points.length>_r&&this.points.pop()}clear(){this.points=[]}update(t){for(;this.points.length&&t-this.points[this.points.length-1].born>Mu;)this.points.pop();const e=this.points.length;for(let s=0;s<_r;s++){const r=s*6;if(e===0){this.across[r+2]=this.across[r+5]=0;continue}const o=this.points[Math.min(s,e-1)],a=Math.min(1,(t-o.born)/Mu),c=.45+Math.sqrt(a)*4.5,l=this.waves.height(o.x,o.z,t)+.03;this.pos[r]=o.x+o.sx*c,this.pos[r+1]=l,this.pos[r+2]=o.z+o.sz*c,this.pos[r+3]=o.x-o.sx*c,this.pos[r+4]=l,this.pos[r+5]=o.z-o.sz*c;const h=s<e?o.strength:0;this.across.set([1,a,h,-1,a,h],r)}const n=this.mesh.geometry;n.attributes.position.needsUpdate=!0,n.attributes.aWake.needsUpdate=!0}}const yo=60,yu=70,ev=30,nv=1.5;class iv{constructor(t){C(this,"input",{steer:0,throttle:0,leanX:0,leanZ:0});C(this,"lever",0);C(this,"tiltActive",!1);C(this,"swap",!1);C(this,"tiltDeg",0);C(this,"touches",new Map);C(this,"keys",new Set);C(this,"layer");C(this,"leanPad");C(this,"leanKnob");C(this,"leverTrack");C(this,"steerPad");C(this,"steerKnob");C(this,"tiltAngle",0);C(this,"tiltZero",0);C(this,"tiltSmoothed",0);C(this,"lastMotion",0);this.layer=t,this.leanPad=document.getElementById("lean-pad"),this.leanKnob=this.leanPad.querySelector(".knob"),this.leverTrack=document.getElementById("lever"),this.steerPad=document.getElementById("steer-pad"),this.steerKnob=this.steerPad.querySelector(".knob"),t.addEventListener("pointerdown",e=>this.down(e)),t.addEventListener("pointermove",e=>this.move(e)),t.addEventListener("pointerup",e=>this.up(e)),t.addEventListener("pointercancel",e=>this.up(e)),window.addEventListener("keydown",e=>this.keys.add(e.code)),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),window.addEventListener("devicemotion",e=>this.onMotion(e))}async enableTilt(){const t=window.DeviceMotionEvent;if(t!=null&&t.requestPermission)try{if(await t.requestPermission()!=="granted")return!1}catch{return!1}for(let e=0;e<15;e++){if(performance.now()-this.lastMotion<500)return this.recenter(),!0;await new Promise(n=>setTimeout(n,100))}return!1}recenter(){this.tiltZero=this.tiltAngle,this.tiltSmoothed=0}onMotion(t){var o;const e=t.accelerationIncludingGravity;if(!e||e.x==null||e.y==null)return;const n=(((o=screen.orientation)==null?void 0:o.angle)??window.orientation??0)*Math.PI/180,s=e.x*Math.cos(n)-e.y*Math.sin(n),r=e.x*Math.sin(n)+e.y*Math.cos(n);Math.hypot(s,r)<2||(this.tiltAngle=Math.atan2(-s,r)*180/Math.PI,this.lastMotion=performance.now())}zoneOf(t){const e=window.innerWidth;return t<e*.38?"lever":this.swap?!this.tiltActive&&t<e*.68?"lean":"steer":!this.tiltActive&&t<e*.68?"steer":"lean"}down(t){t.preventDefault();const e=this.zoneOf(t.clientX);for(const n of this.touches.values())if(n.role===e)return;try{this.layer.setPointerCapture(t.pointerId)}catch{}this.touches.set(t.pointerId,{id:t.pointerId,role:e,x0:t.clientX,y0:t.clientY,x:t.clientX,y:t.clientY,lever0:this.lever}),e==="lean"&&this.placePad(this.leanPad,t.clientX,t.clientY),e==="steer"&&this.placePad(this.steerPad,t.clientX,t.clientY),e==="lever"&&this.leverTrack.classList.add("active")}placePad(t,e,n){t.style.left=`${e}px`,t.style.top=`${n}px`,t.classList.add("active")}move(t){const e=this.touches.get(t.pointerId);if(e&&(e.x=t.clientX,e.y=t.clientY,e.role==="lever")){const n=this.leverTrack.getBoundingClientRect().height||200;this.lever=Math.max(0,Math.min(1,e.lever0-(e.y-e.y0)/n))}}up(t){const e=this.touches.get(t.pointerId);e&&(this.touches.delete(t.pointerId),e.role==="lean"&&this.resetPad(this.leanPad,this.leanKnob),e.role==="steer"&&this.resetPad(this.steerPad,this.steerKnob),e.role==="lever"&&this.leverTrack.classList.remove("active"))}resetPad(t,e){t.classList.remove("active"),t.style.left=t.style.top="",e.style.transform=""}update(t){const e=u=>this.keys.has(u),n=Math.exp(-t/.25);let s=this.input.leanX*n,r=this.input.leanZ*n,o=0;for(const u of this.touches.values()){const d=u.x-u.x0,f=u.y-u.y0;u.role==="lean"?(s=Math.max(-1,Math.min(1,d/yo)),r=Math.max(-1,Math.min(1,-f/yo)),this.leanKnob.style.transform=`translate(${s*yo}px, ${-r*yo}px)`):u.role==="steer"&&(o=Math.max(-1,Math.min(1,d/yu)),this.steerKnob.style.transform=`translateX(${o*yu}px)`)}if(this.tiltActive){let u=this.tiltAngle-this.tiltZero;u=(u+540)%360-180,this.tiltDeg=u,u=Math.sign(u)*Math.max(0,Math.abs(u)-nv);const d=Math.max(-1,Math.min(1,u/ev));this.tiltSmoothed+=(d-this.tiltSmoothed)*(1-Math.exp(-t*20)),this.swap?s=this.tiltSmoothed:o=this.tiltSmoothed}const a=(e("ArrowRight")||e("KeyD")?1:0)-(e("ArrowLeft")||e("KeyA")?1:0),c=(e("KeyE")?1:0)-(e("KeyQ")?1:0),l=(e("KeyR")?1:0)-(e("KeyF")?1:0),h=1-Math.exp(-t*8);a&&(o=this.input.steer+(a-this.input.steer)*h),(c||l)&&(s=this.input.leanX+(c-this.input.leanX)*h,r=this.input.leanZ+(l-this.input.leanZ)*h),(e("ArrowUp")||e("KeyW"))&&(this.lever=Math.min(1,this.lever+t*1.5)),(e("ArrowDown")||e("KeyS"))&&(this.lever=Math.max(0,this.lever-t*1.5)),this.input.steer=o,this.input.leanX=s,this.input.leanZ=r,this.input.throttle=this.lever,this.leverTrack.querySelector(".fill").style.height=`${this.lever*100}%`,this.leverTrack.querySelector(".knob").style.bottom=`${this.lever*100}%`}}const Hn=5e3,Su=9.81,He={Spray:0,Mist:1,Foam:2,Boil:3};class Vd{constructor(t){C(this,"points");C(this,"pos",new Float32Array(Hn*3));C(this,"vel",new Float32Array(Hn*3));C(this,"size",new Float32Array(Hn));C(this,"alpha",new Float32Array(Hn));C(this,"size0",new Float32Array(Hn));C(this,"life",new Float32Array(Hn));C(this,"maxLife",new Float32Array(Hn));C(this,"kind",new Uint8Array(Hn));C(this,"next",0);C(this,"material");C(this,"surface");C(this,"budget",0);C(this,"left",new b);C(this,"tmp",new b);this.surface=t;const e=new be;e.setAttribute("position",new Ke(this.pos,3).setUsage(wr)),e.setAttribute("aSize",new Ke(this.size,1).setUsage(wr)),e.setAttribute("aAlpha",new Ke(this.alpha,1).setUsage(wr)),this.material=new Cn({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:400}},vertexShader:`
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
      `}),this.points=new c_(e,this.material),this.points.frustumCulled=!1}resize(t,e,n){this.material.uniforms.uScale.value=t*n/(2*Math.tan(e*Math.PI/360))}clear(){this.alpha.fill(0),this.life.fill(0)}spawn(t,e,n,s,r,o,a,c,l){if(this.budget<=0)return;this.budget--;const h=this.next;this.next=(this.next+1)%Hn;const u=h*3;this.pos[u]=e,this.pos[u+1]=n,this.pos[u+2]=s,this.vel[u]=r,this.vel[u+1]=o,this.vel[u+2]=a,this.kind[h]=t,this.size0[h]=c,this.size[h]=c,this.life[h]=l,this.maxLife[h]=l,this.alpha[h]=1}count(t){if(!(t>0))return 0;const e=Math.floor(Math.min(t,this.budget));return e+(e<this.budget&&Math.random()<t-e?1:0)}update(t,e,n){this.emit(t,e,n,600),this.step(t,e)}emit(t,e,n,s){this.budget=s,this.emitHull(t,e,n),this.emitProp(t,e,n)}emitHull(t,e,n){const s=n.hullFx,r=Nr.FX_STRIDE;this.left.set(1,0,0).applyQuaternion(n.quat);const o=this.left.x,a=this.left.z,c=Math.hypot(o,a)||1,l=n.vel;for(let h=0;h<n.hull.length;h++){const u=n.hull[h],d=h*r,f=s[d],g=s[d+1],_=s[d+2],m=n.impact[h];m>0&&(n.impact[h]=0,m>.7&&this.splash(f,_,e,m,u.area,l));const p=s[d+11];if(p<=0)continue;const v=s[d+3],M=s[d+4],x=s[d+5],P=s[d+10],A=s[d+6],w=s[d+7],L=s[d+8],E=v-P*A,S=M-P*w,I=x-P*L,N=Math.hypot(E,S,I),z=Math.max(0,P),W=this.surface.height(f,_,e);if(u.side!==0){const H=o/c*u.side,q=a/c*u.side,Q=Math.max(0,v*H+x*q);if(N<2.5&&Q<.8&&z<.6)continue;const Z=1+1.5*(1-p),rt=u.area*p*Z*(.35*N+3*Q+5*z),dt=.16*N+1.1*Q+.6*z,pt=.09*N+.9*Q+1.4*z,it=this.count(rt*t*90),ut=l.x*.04,X=l.z*.04;for(let U=0;U<it;U++){const V=.7+Math.random()*.6,k=(Math.random()-.5)*.2;this.spawn(He.Spray,f+H*.04+this.left.z*k,Math.max(g,W)+.02,_+q*.04-this.left.x*k,H*dt*V+ut+(Math.random()-.5)*.3*dt,pt*(.6+Math.random()*.8),q*dt*V+X+(Math.random()-.5)*.3*dt,.035+Math.random()*.07,1.5),Math.random()<.2&&this.spawn(He.Mist,f+H*.1,Math.max(g,W)+.05,_+q*.1,H*dt*.6,pt*.5,q*dt*.6,.35+Math.random()*.4,.9+Math.random()*.6)}}else if(z>.8){const H=this.count(u.area*z*z*t*40);for(let q=0;q<H;q++){const Q=Math.random()*Math.PI*2,Z=z*(.3+Math.random()*.5);this.spawn(He.Spray,f,Math.max(g,W)+.02,_,Math.cos(Q)*Z+l.x*.1,z*(.8+Math.random()*.8),Math.sin(Q)*Z+l.z*.1,.05+Math.random()*.08,1.5)}}}}splash(t,e,n,s,r,o){const a=this.surface.height(t,e,n),c=Math.min(70,Math.round(s*s*r*45));for(let h=0;h<c;h++){const u=Math.random()*Math.PI*2,d=s*(.35+Math.random()*.75);this.spawn(He.Spray,t+Math.cos(u)*.15,a+.03,e+Math.sin(u)*.15,Math.cos(u)*d+o.x*.15,s*(.5+Math.random()*.8),Math.sin(u)*d+o.z*.15,.05+Math.random()*.1,1.5)}const l=Math.min(8,Math.round(s*r*6));for(let h=0;h<l;h++){const u=Math.random()*Math.PI*2;this.spawn(He.Mist,t,a+.1,e,Math.cos(u)*s*.4+o.x*.1,s*.35,Math.sin(u)*s*.4+o.z*.1,.5+Math.random()*.5,.8+Math.random()*.5)}for(let h=0;h<4;h++){const u=Math.random()*Math.PI*2;this.spawn(He.Foam,t+Math.cos(u)*.3,a,e+Math.sin(u)*.3,Math.cos(u)*.4,0,Math.sin(u)*.4,.35+Math.random()*.3,2+Math.random())}}emitProp(t,e,n){const s=n.propState,r=n.engineOmega/(2*Math.PI);if(r<5)return;const o=n.prop.diameter,a=n.propPos,c=n.propAxis,l=n.vel,h=this.surface.height(a.x,a.z,e),u=Math.PI*r*o,d=Math.max(0,Math.min(1,(.9-s.tipRatio)/.9)),f=n.propJet,g=d*d*r*4*(1+2*s.vent)*Math.min(1,n.throttle+.2),_=this.count(g*t);for(let v=0;v<_;v++){const M=u*.12*d*(.6+Math.random()*.7),x=(Math.random()-.5)*u*.08*d;this.spawn(He.Spray,a.x-c.x*.2,h+.03,a.z-c.z*.2,l.x*.15-c.x*f+c.z*x,M,l.z*.15-c.z*f-c.x*x,.06+Math.random()*.1,2),Math.random()<.15&&this.spawn(He.Mist,a.x-c.x*.4,h+.2,a.z-c.z*.4,l.x*.1,M*.5,l.z*.1,.5+Math.random()*.5,1+Math.random()*.5)}const m=s.cav*70+s.vent*140,p=this.count(m*t*Math.min(1,r/60));for(let v=0;v<p;v++){const M=.3+Math.random()*.6,x=(Math.random()-.5)*.35,P=a.x-c.x*M+c.z*x,A=a.z-c.z*M-c.x*x;this.spawn(He.Boil,P,this.surface.height(P,A,e)+.02,A,-c.x*f*.4,0,-c.z*f*.4,.22+Math.random()*.25,.5+Math.random()*.6)}}step(t,e){const{pos:n,vel:s,life:r,maxLife:o,kind:a,alpha:c,size:l,size0:h}=this;for(let d=0;d<Hn;d++){if(r[d]<=0)continue;r[d]-=t;const f=d*3,g=1-r[d]/o[d];if(r[d]<=0){c[d]=0;continue}const _=a[d];if(_===He.Spray||_===He.Mist){const m=_===He.Spray?.5:2.5,p=Math.exp(-m*t);if(s[f]*=p,s[f+2]*=p,s[f+1]=s[f+1]*p-(_===He.Spray?Su:Su*.15)*t,n[f]+=s[f]*t,n[f+1]+=s[f+1]*t,n[f+2]+=s[f+2]*t,_===He.Spray){if(c[d]=.85*Math.min(1,r[d]/.2),s[f+1]<0){const v=this.surface.height(n[f],n[f+2],e);if(n[f+1]<v){r[d]=0,c[d]=0,Math.random()<.18&&this.spawnFoam(n[f],v,n[f+2]);continue}}}else c[d]=.22*(1-g),l[d]=h[d]*(1+g*1.5)}else{const m=Math.exp(-2*t);s[f]*=m,s[f+2]*=m,n[f]+=s[f]*t,n[f+2]+=s[f+2]*t,n[f+1]=this.surface.height(n[f],n[f+2],e)+.02,l[d]=h[d]*(1+g*(_===He.Boil?1.2:.8)),c[d]=(_===He.Boil?.9:.55)*(1-g)**1.3}}const u=this.points.geometry;u.attributes.position.needsUpdate=!0,u.attributes.aSize.needsUpdate=!0,u.attributes.aAlpha.needsUpdate=!0}spawnFoam(t,e,n){this.budget++,this.spawn(He.Foam,t,e+.02,n,0,0,0,.2+Math.random()*.25,1.5+Math.random()*1.5)}}const Ja=9.81,Qa=1e3;class il{constructor(t={}){C(this,"n");C(this,"dx");C(this,"size");C(this,"dt");C(this,"depth");C(this,"originX",0);C(this,"originZ",0);C(this,"layer",null);C(this,"h");C(this,"q");C(this,"dhdt");C(this,"computeVelocity",!1);C(this,"ux");C(this,"uz");C(this,"modePhi");C(this,"dk",0);C(this,"velRe");C(this,"velIm");C(this,"p");C(this,"pImpact");C(this,"src");C(this,"pSmooth");C(this,"fhx");C(this,"fhz");C(this,"hasH",!1);C(this,"modeHF");C(this,"hRe");C(this,"hIm");C(this,"sRe");C(this,"sIm");C(this,"re");C(this,"im");C(this,"pre");C(this,"pim");C(this,"outRe");C(this,"outIm");C(this,"rowRe");C(this,"rowIm");C(this,"cosT");C(this,"sinT");C(this,"rev");C(this,"modeC");C(this,"modeS");C(this,"modeDamp");C(this,"sponge");const e=this.n=t.n??128;this.dx=t.dx??.5,this.size=e*this.dx,this.dt=t.dt??1/60,this.depth=t.depth??3;const n=e*e;this.h=new Float32Array(n),this.q=new Float32Array(n),this.dhdt=new Float32Array(n),this.ux=new Float32Array(n),this.uz=new Float32Array(n),this.modePhi=new Float32Array(n),this.velRe=new Float32Array(n),this.velIm=new Float32Array(n),this.p=new Float32Array(n),this.pImpact=new Float32Array(n),this.src=new Float32Array(n),this.pSmooth=new Float32Array(n),this.fhx=new Float32Array(n),this.fhz=new Float32Array(n),this.modeHF=new Float32Array(n),this.hRe=new Float32Array(n),this.hIm=new Float32Array(n),this.sRe=new Float32Array(n),this.sIm=new Float32Array(n),this.re=new Float32Array(n),this.im=new Float32Array(n),this.pre=new Float32Array(n),this.pim=new Float32Array(n),this.outRe=new Float32Array(n),this.outIm=new Float32Array(n),this.rowRe=new Float32Array(e),this.rowIm=new Float32Array(e),this.cosT=new Float32Array(e/2),this.sinT=new Float32Array(e/2);for(let c=0;c<e/2;c++)this.cosT[c]=Math.cos(2*Math.PI*c/e),this.sinT[c]=-Math.sin(2*Math.PI*c/e);const s=Math.log2(e);this.rev=new Uint32Array(e);for(let c=0;c<e;c++){let l=0;for(let h=0;h<s;h++)l|=(c>>h&1)<<s-1-h;this.rev[c]=l}this.modeC=new Float32Array(n),this.modeS=new Float32Array(n),this.modeDamp=new Float32Array(n);const r=this.dk=2*Math.PI/this.size,o=Math.PI/this.dx;for(let c=0;c<e;c++){const l=(c<e/2?c:c-e)*r;for(let h=0;h<e;h++){const u=(h<e/2?h:h-e)*r,d=Math.hypot(u,l),f=Math.sqrt(Ja*d*Math.tanh(d*this.depth)),g=c*e+h;this.modeC[g]=Math.cos(f*this.dt),this.modeS[g]=Math.sin(f*this.dt);const _=d/o;this.modeDamp[g]=Math.exp(-(.03+2.5*_**4)*this.dt),this.modePhi[g]=d>0?f/(d*Math.tanh(d*this.depth)):0;const m=Math.min(sn.depth,this.depth);this.modeHF[g]=d>0?(Math.sinh(d*this.depth)-Math.sinh(d*(this.depth-m)))/(d*m*Math.cosh(d*this.depth))*(d/Math.tanh(d*this.depth)):0}}this.sponge=new Float32Array(n);const a=Math.max(4,Math.round(e*.12));for(let c=0;c<e;c++)for(let l=0;l<e;l++){const h=Math.min(l,c,e-1-l,e-1-c),u=Math.max(0,1-h/a);this.sponge[c*e+l]=Math.exp(-6*u*u*this.dt)}}clearPressure(){this.p.fill(0),this.pImpact.fill(0),this.src.fill(0),this.hasH&&(this.fhx.fill(0),this.fhz.fill(0),this.hasH=!1)}addHForce(t,e,n,s){n===0&&s===0||(this.splat(this.fhx,t,e,n,0),this.splat(this.fhz,t,e,s,0),this.hasH=!0)}addForce(t,e,n,s){n>0&&this.splat(this.p,t,e,n,s)}addForceSigned(t,e,n,s){n!==0&&this.splat(this.p,t,e,n,s)}addImpactSigned(t,e,n,s){n!==0&&this.splat(this.pImpact,t,e,n,s)}splatTo(t,e,n,s,r){this.splat(t,e,n,s,r)}sampleArr(t,e,n){return this.sample(t,e,n)}inside(t,e){const n=(t-this.originX)/this.dx,s=(e-this.originZ)/this.dx,r=Math.max(4,Math.round(this.n*.12));return n>=r&&s>=r&&n<this.n-r&&s<this.n-r}addImpact(t,e,n,s){n>0&&this.splat(this.pImpact,t,e,n,s)}addSource(t,e,n,s){n!==0&&this.splat(this.src,t,e,n,s)}splat(t,e,n,s,r){const o=this.n,a=(e-this.originX)/this.dx,c=(n-this.originZ)/this.dx;if(r<=0){if(a<1||c<1||a>=o-2||c>=o-2)return;const p=a|0,v=c|0,M=a-p,x=c-v,P=s/(this.dx*this.dx),A=v*o+p;t[A]+=P*(1-M)*(1-x),t[A+1]+=P*M*(1-x),t[A+o]+=P*(1-M)*x,t[A+o+1]+=P*M*x;return}const l=Math.max(r/this.dx,.7),h=Math.ceil(l*2),u=Math.max(1,Math.floor(a-h)),d=Math.min(o-2,Math.ceil(a+h)),f=Math.max(1,Math.floor(c-h)),g=Math.min(o-2,Math.ceil(c+h));if(u>d||f>g)return;let _=0;for(let p=f;p<=g;p++)for(let v=u;v<=d;v++)_+=Math.exp(-((v-a)**2+(p-c)**2)/(2*l*l));if(_<=0)return;const m=s/(_*this.dx*this.dx);for(let p=f;p<=g;p++)for(let v=u;v<=d;v++)t[p*o+v]+=m*Math.exp(-((v-a)**2+(p-c)**2)/(2*l*l))}step(){const t=this.n,e=t*t,{re:n,im:s,pre:r,pim:o,outRe:a,outIm:c,h:l,q:h}=this;n.set(l),s.set(h),this.fft2(n,s,!1);const u=this.pImpact;for(let m=0;m<e;m++)r[m]=this.p[m]+u[m];o.fill(0),this.fft2(r,o,!1),this.hasH&&this.splitHForce();const d=1/(Qa*Ja);for(let m=0;m<t;m++){const p=m===0?0:t-m;for(let v=0;v<t;v++){const M=v===0?0:t-v,x=m*t+v,P=p*t+M;if(x===0){a[0]=0,this.velRe[0]=0,this.velIm[0]=0,c[0]=0;continue}const A=.5*(n[x]+n[P]),w=.5*(s[x]-s[P]),L=.5*(s[x]+s[P]),E=-.5*(n[x]-n[P]),S=-r[x]*d,I=-o[x]*d,N=this.modeC[x],z=this.modeS[x],W=this.modeDamp[x],H=A-S,q=w-I,Q=(H*N+L*z)*W,Z=(q*N+E*z)*W,rt=(-H*z+L*N)*W,dt=(-q*z+E*N)*W,pt=Q+S,it=Z+I;if(a[x]=pt-dt,c[x]=it+rt,this.computeVelocity){const ut=this.modePhi[x],X=rt*ut,U=dt*ut,V=(v<t/2?v:v-t)*this.dk,k=(m<t/2?m:m-t)*this.dk;this.velRe[x]=-V*U-k*X,this.velIm[x]=V*X-k*U}}}this.fft2(a,c,!0),this.computeVelocity&&(this.fft2(this.velRe,this.velIm,!0),this.ux.set(this.velRe),this.uz.set(this.velIm));const f=this.sponge,g=1/this.dt,_=this.src;for(let m=0;m<e;m++){const p=(a[m]+_[m]*this.dt)*f[m];this.dhdt[m]=(p-l[m])*g,l[m]=p,h[m]=c[m]*f[m]}this.pSmooth.set(this.p)}splitHForce(){const t=this.n,{hRe:e,hIm:n,sRe:s,sIm:r,pre:o,pim:a}=this;e.set(this.fhx),n.set(this.fhz),this.fft2(e,n,!1);for(let h=0;h<t;h++){const u=h===0?0:t-h,d=(h<t/2?h:h-t)*this.dk;for(let f=0;f<t;f++){const g=f===0?0:t-f,_=h*t+f,m=u*t+g,p=(f<t/2?f:f-t)*this.dk,v=p*p+d*d;if(v===0){s[_]=e[_],r[_]=n[_];continue}const M=.5*(e[_]+e[m]),x=.5*(n[_]-n[m]),P=.5*(n[_]+n[m]),A=-.5*(e[_]-e[m]),w=(p*M+d*P)/v,L=(p*x+d*A)/v,E=this.modeHF[_];o[_]+=-L*E,a[_]+=w*E;const S=M-p*w,I=x-p*L,N=P-d*w,z=A-d*L;s[_]=S-z,r[_]=I+N}}const c=this.layer;if(!c)return;this.fft2(s,r,!0);const l=this.dt/(Qa*sn.depth);for(let h=0;h<t*t;h++)c.ux[h]+=s[h]*l,c.uz[h]+=r[h]*l}recenter(t,e){var a;const n=this.n,s=this.size/2,r=Math.round((t-s-this.originX)/this.dx),o=Math.round((e-s-this.originZ)/this.dx);if(!(r===0&&o===0)){for(const c of[this.h,this.q,this.dhdt,this.pSmooth]){const l=c.slice();c.fill(0);for(let h=0;h<n;h++){const u=h+o;if(!(u<0||u>=n))for(let d=0;d<n;d++){const f=d+r;f<0||f>=n||(c[h*n+d]=l[u*n+f])}}}this.originX+=r*this.dx,this.originZ+=o*this.dx,(a=this.layer)==null||a.shift(r,o)}}waveForce(t,e,n,s=1/0){const r=s*s,o=this.n,{p:a,h:c}=this,l=1/(2*this.dx),h=this.dx*this.dx;let u=0,d=0,f=0;for(let g=1;g<o-1;g++){const _=g*o;for(let m=1;m<o-1;m++){const p=_+m,v=a[p];if(v<=0)continue;const M=(c[p+1]-c[p-1])*l,x=(c[p+o]-c[p-o])*l,P=-v*M*h,A=-v*x*h,w=this.originX+m*this.dx-t,L=this.originZ+g*this.dx-e;w*w+L*L>r||(u+=P,d+=A,f+=L*P-w*A)}}n[0]=u,n[1]=d,n[2]=f}sample(t,e,n){const s=this.n,r=(e-this.originX)/this.dx,o=(n-this.originZ)/this.dx;if(r<0||o<0||r>=s-1||o>=s-1)return 0;const a=r|0,c=o|0,l=r-a,h=o-c,u=c*s+a;return(t[u]*(1-l)+t[u+1]*l)*(1-h)+(t[u+s]*(1-l)+t[u+s+1]*l)*h}height(t,e){return this.sample(this.h,t,e)}surfaceVelocity(t,e,n){n.x=this.sample(this.ux,t,e),n.z=this.sample(this.uz,t,e)}verticalVelocity(t,e){return this.sample(this.dhdt,t,e)}staticDepression(t,e){const n=this.sample(this.pSmooth,t,e)/(Qa*Ja);return n>0?Math.min(n,Math.max(0,-this.sample(this.h,t,e))):0}fft2(t,e,n){const s=this.n,{rowRe:r,rowIm:o}=this;for(let a=0;a<s;a++){const c=a*s;for(let l=0;l<s;l++)r[l]=t[c+l],o[l]=e[c+l];this.fft1(r,o,n);for(let l=0;l<s;l++)t[c+l]=r[l],e[c+l]=o[l]}for(let a=0;a<s;a++){for(let c=0;c<s;c++)r[c]=t[c*s+a],o[c]=e[c*s+a];this.fft1(r,o,n);for(let c=0;c<s;c++)t[c*s+a]=r[c],e[c*s+a]=o[c]}if(n){const a=1/(s*s);for(let c=0;c<s*s;c++)t[c]*=a,e[c]*=a}}fft1(t,e,n){const s=this.n,r=this.rev;for(let a=0;a<s;a++){const c=r[a];if(c>a){let l=t[a];t[a]=t[c],t[c]=l,l=e[a],e[a]=e[c],e[c]=l}}const o=n?-1:1;for(let a=2;a<=s;a<<=1){const c=a>>1,l=s/a;for(let h=0;h<s;h+=a)for(let u=0;u<c;u++){const d=this.cosT[u*l],f=o*this.sinT[u*l],g=h+u,_=g+c,m=t[_]*d-e[_]*f,p=t[_]*f+e[_]*d;t[_]=t[g]-m,e[_]=e[g]-p,t[g]+=m,e[g]+=p}}}}class Ol{constructor(t,e){C(this,"waves");C(this,"felt");C(this,"self",null);C(this,"wv",{x:0,z:0});this.waves=t,this.felt=e}height(t,e,n){const s=this.self;if(s){const r=this.felt.height(t,e)-s.height(t,e);return this.waves.height(t,e,n)+r+s.staticDepression(t,e,r)}return this.waves.height(t,e,n)+this.felt.height(t,e)+this.felt.staticDepression(t,e)}verticalVelocity(t,e,n){return this.waves.verticalVelocity(t,e,n)+this.felt.verticalVelocity(t,e)-(this.self?this.self.verticalVelocity(t,e):0)}flowAt(t,e,n){var s;this.felt.layer?this.felt.layer.sample(t,e,n):n.x=n.z=n.w=0,this.felt.surfaceVelocity(t,e,this.wv),n.x+=this.wv.x,n.z+=this.wv.z,(s=this.self)==null||s.subtractFlow(t,e,n)}}class sv{constructor(t,e){C(this,"waves");C(this,"sims");C(this,"selfs");C(this,"tmp",{x:0,z:0,w:0});C(this,"one",{x:0,z:0,w:0});this.waves=t,this.sims=e,this.selfs=e.map(()=>null)}height(t,e,n){let s=this.waves.height(t,e,n);for(let r=0;r<this.sims.length;r++){const o=this.sims[r],a=this.selfs[r];if(a){const c=o.height(t,e)-a.height(t,e);s+=c+a.staticDepression(t,e,c)}else s+=o.height(t,e)+o.staticDepression(t,e)}return s}verticalVelocity(t,e,n){var r;let s=this.waves.verticalVelocity(t,e,n);for(let o=0;o<this.sims.length;o++)s+=this.sims[o].verticalVelocity(t,e)-(((r=this.selfs[o])==null?void 0:r.verticalVelocity(t,e))??0);return s}flowAt(t,e,n){var r;n.x=n.z=n.w=0;const s=this.one;for(let o=0;o<this.sims.length;o++){const a=this.sims[o];s.x=s.z=s.w=0,a.layer&&a.layer.sample(t,e,s),a.surfaceVelocity(t,e,this.tmp),s.x+=this.tmp.x,s.z+=this.tmp.z,(r=this.selfs[o])==null||r.subtractFlow(t,e,s),n.x+=s.x,n.z+=s.z,n.w+=s.w}}}class Hd{constructor(t,e){C(this,"waves");C(this,"render");this.waves=t,this.render=e}height(t,e,n){return this.waves.height(t,e,n)+this.render.height(t,e)}verticalVelocity(t,e,n){return this.waves.verticalVelocity(t,e,n)+this.render.verticalVelocity(t,e)}}const Eu=.3,rv=1e3,ov=9.81;class av{constructor(t,e=32){C(this,"sim");C(this,"layer");C(this,"hist",[]);C(this,"pd");C(this,"host");C(this,"tmp",{x:0,z:0,w:0});C(this,"wv",{x:0,z:0});this.host=t,this.sim=new il({n:e,dx:t.dx,dt:t.dt,depth:t.depth}),this.sim.computeVelocity=!0,this.layer=new Qc(e,t.dx),this.sim.layer=this.layer,this.pd=new Float32Array(e*e)}reset(){this.hist.length=0,this.sim.h.fill(0),this.sim.q.fill(0),this.sim.dhdt.fill(0),this.layer.clear(),this.pd.fill(0)}step(t,e,n,s,r,o,a,c,l){const h=this.sim,u=this.host,d=h.size/2,f=u.originX+Math.round((e-s*3-d-u.originX)/u.dx)*u.dx,g=u.originZ+Math.round((n-r*3-d-u.originZ)/u.dx)*u.dx;for((this.hist.length===0||Math.abs(f-h.originX)>2||Math.abs(g-h.originZ)>2)&&(this.hist.length===0?(h.originX=this.layer.originX=f,h.originZ=this.layer.originZ=g):h.recenter(f+d,g+d)),this.hist.push({t,pressure:o.slice(),mom:a?a.slice():null,events:c.slice()});this.hist.length>1&&this.hist[1].t<=t-Eu;)this.hist.shift();const _=this.hist[0].t<=t-Eu?this.hist[0]:null,m=this.hist[this.hist.length-1];h.clearPressure(),this.pd.fill(0);const p=h.dt,v=(M,x)=>{const P=M.pressure;for(let w=0;w<P.length;w+=4)P[w+2]<=0||!u.inside(P[w],P[w+1])||(h.addForceSigned(P[w],P[w+1],x*P[w+2],P[w+3]),x<0&&h.splatTo(this.pd,P[w],P[w+1],P[w+2],P[w+3]));const A=M.mom;if(A)for(let w=0;w<A.length;w+=5)u.inside(A[w],A[w+1])&&((A[w+2]!==0||A[w+3]!==0)&&h.addHForce(A[w],A[w+1],x*A[w+2],x*A[w+3]),A[w+4]>0&&this.layer.addAirSigned(A[w],A[w+1],x*A[w+4]*p));for(const w of M.events)u.inside(w.x,w.z)&&(h.addSource(w.x,w.z,x*w.vol/p,l),w.imp>0&&h.addImpactSigned(w.x,w.z,x*w.imp/p,l),(w.ix!==0||w.iz!==0)&&h.addHForce(w.x,w.z,x*w.ix/p,x*w.iz/p))};v(m,1),_&&v(_,-1),h.step(),this.layer.step(p)}height(t,e){return this.sim.height(t,e)}verticalVelocity(t,e){return this.sim.verticalVelocity(t,e)}staticDepression(t,e,n){const s=this.sim.sampleArr(this.pd,t,e)/(rv*ov);return s>0?Math.min(s,Math.max(0,-n)):0}subtractFlow(t,e,n){this.layer.sampleRaw(t,e,this.tmp),n.x-=this.tmp.x,n.z-=this.tmp.z,n.w=Math.min(sn.maxVoid,Math.max(0,n.w-this.tmp.w)),this.sim.surfaceVelocity(t,e,this.wv),n.x-=this.wv.x,n.z-=this.wv.z}}const tc=.3,cv=128,lv=.5,So=1e3,hv=1.2,uv=.45,dv=2e4;class Gd{constructor(t=cv,e=lv){C(this,"render");C(this,"felt");C(this,"history",[]);C(this,"drops",[]);C(this,"hitBoats",null);C(this,"selves",null);C(this,"attached",[]);C(this,"pList",[]);C(this,"mList",[]);C(this,"sprayOwner",[]);C(this,"events",[]);C(this,"stepEvents",[]);C(this,"jetSeq",ks.seq);C(this,"sprayOut",0);C(this,"sprayIn",0);C(this,"acc",0);C(this,"time",0);C(this,"stepCount",0);C(this,"lastStepMs",0);C(this,"feltOnly",!1);this.render=new il({n:t,dx:e,dt:1/60}),this.felt=new il({n:t,dx:e,dt:1/30}),this.felt.layer=new Qc(t,e),this.felt.computeVelocity=!0,this.render.layer=new Qc(t,e)}attach(t){this.hitBoats=t,this.attached=t;const e=t.map(()=>new av(this.felt));this.selves=e,t.forEach((n,s)=>{const r=n.surface;if(r instanceof Ol&&r.felt===this.felt)r.self=e[s];else if(r instanceof sv){const o=r.sims.indexOf(this.felt);o>=0&&(r.selfs[o]=e[s])}})}reset(t,e){for(const n of this.selves??[])n.reset();for(const n of[this.render,this.felt])n.h.fill(0),n.q.fill(0),n.dhdt.fill(0),n.originX=t-n.size/2,n.originZ=e-n.size/2;for(const n of[this.felt,this.render])n.layer&&(n.layer.clear(),n.layer.originX=n.originX,n.layer.originZ=n.originZ);this.history=[],this.drops.length=0,this.events=[]}update(t,e,n,s,r,o,a,c){var f,g;const l=Array.isArray(o)?nc(o):o,h=a&&(Array.isArray(a)?nc(a):a);if(this.sprayOwner.length=0,Array.isArray(a))for(const[_,m]of a.entries())this.sprayOwner.push(_,m.length);else a&&this.sprayOwner.push(0,a.length);const u=c?Array.isArray(c)?nc(c):c.slice():null;this.selves&&(this.pList=Array.isArray(o)?o:[o],this.mList=c?Array.isArray(c)?c:[c]:[]),this.acc+=t;let d=!1;for(this.acc>.1&&(this.acc=.1);this.acc>=this.render.dt;){this.acc-=this.render.dt,this.time+=this.render.dt;const _=performance.now();this.history.push({t:this.time,data:l.slice(),mom:u});const m=e-s*10,p=n-r*10;for(const M of this.feltOnly?[this.felt]:[this.render,this.felt]){const x=M.originX+M.size/2,P=M.originZ+M.size/2;Math.hypot(m-x,p-P)>4&&M.recenter(m,p)}this.stepEvents.length=0,h&&this.flySpray(h);for(const M of ks.retired){if(M.seq<=this.jetSeq)continue;const x={t:this.time,x:M.x,z:M.z,vol:0,imp:0,ix:M.ix,iz:M.iz,src:-1};this.stepEvents.push(x),this.events.push(x)}this.jetSeq=ks.seq;const v=Ye.wakeSmooth;if(!this.feltOnly){ic(this.render,l);for(const x of this.stepEvents)ec(this.render,x,v);const M=this.render.layer;if(u&&M)for(let x=0;x<u.length;x+=5)(u[x+2]!==0||u[x+3]!==0)&&this.render.addHForce(u[x],u[x+1],u[x+2],u[x+3]),u[x+4]>0&&M.addAir(u[x],u[x+1],u[x+4]*this.render.dt);this.render.step()}if(++this.stepCount%2===0&&this.selves){const M=this.felt.layer,x=this.felt.dt;if(ic(this.felt,l),u&&M)for(let A=0;A<u.length;A+=5)(u[A+2]!==0||u[A+3]!==0)&&this.felt.addHForce(u[A],u[A+1],u[A+2],u[A+3]),u[A+4]>0&&M.addAir(u[A],u[A+1],u[A+4]*x);const P=this.selves.map(()=>[]);for(const A of this.events)ec(this.felt,A,v),A.src>=0&&A.src<P.length&&P[A.src].push(A);this.events.length=0,this.felt.step(),M==null||M.step(x),this.feltOnly||(f=this.render.layer)==null||f.step(x);for(let A=0;A<this.selves.length;A++){const w=this.attached[A],L=w.quat,E=2*(L.x*L.z+L.w*L.y),S=1-2*(L.x*L.x+L.y*L.y);this.selves[A].step(this.time,w.comW.x,w.comW.z,E,S,this.pList[A]??pv,this.mList[A]??null,P[A],v)}}else if(this.stepCount%2===0){for(;this.history.length>1&&this.history[1].t<=this.time-tc;)this.history.shift();const M=this.history[0],x=this.felt.layer,P=this.felt.dt;if(M&&M.t<=this.time-tc){ic(this.felt,M.data);const w=M.mom;if(w&&x)for(let L=0;L<w.length;L+=5)(w[L+2]!==0||w[L+3]!==0)&&this.felt.addHForce(w[L],w[L+1],w[L+2],w[L+3]),w[L+4]>0&&x.addAir(w[L],w[L+1],w[L+4]*P)}else this.felt.clearPressure();let A=0;for(;A<this.events.length&&this.events[A].t<=this.time-tc;)ec(this.felt,this.events[A++],v);A&&this.events.splice(0,A),this.felt.step(),x==null||x.step(P),this.feltOnly||(g=this.render.layer)==null||g.step(P)}this.lastStepMs=performance.now()-_,d=!0}return d}flySpray(t){const e=this.render.dt,n=this.feltOnly?this.felt:this.render;let s=0,r=0,o=0,a=this.sprayOwner[1]??t.length;for(let u=0;u<t.length;u+=7){for(;u>=a&&o+2<this.sprayOwner.length;)o+=2,a+=this.sprayOwner[o+1];const d=t[u+6];if(d<=0)continue;const f=d*e;s+=d;const g=this.sprayOwner.length?this.sprayOwner[o]:-1;this.addEvent(t[u],t[u+2],-f/So,0,0,0,g),this.drops.length<dv&&this.drops.push({x:t[u],y:t[u+1],z:t[u+2],vx:t[u+3],vy:t[u+4],vz:t[u+5],m:f,age:0,src:this.sprayOwner.length?this.sprayOwner[o]:-1})}const c=this.hitBoats;if(c)for(let u=0;u<c.length;u++){const d=c[u];Vs[u*3]=d.comW.x,Vs[u*3+1]=d.comW.y,Vs[u*3+2]=d.comW.z,Wd[u]=d.quat.clone().invert()}const l=.75*(hv/So)*uv/Ye.sprayDrop;let h=0;for(let u=0;u<this.drops.length;u++){const d=this.drops[u],f=Math.hypot(d.vx,d.vy,d.vz),g=l*f;if(d.vx-=g*d.vx*e,d.vy-=(g*d.vy+9.81)*e,d.vz-=g*d.vz*e,d.x+=d.vx*e,d.y+=d.vy*e,d.z+=d.vz*e,d.age+=e,c&&fv(d,c,e)){this.addEvent(d.x,d.z,d.m/So,0,0,0,d.src),r+=d.m/e;continue}if(d.vy<0&&d.y<=n.height(d.x,d.z)){this.addEvent(d.x,d.z,d.m/So,d.m*-d.vy,d.m*d.vx,d.m*d.vz,d.src),r+=d.m/e;continue}d.age<5&&(this.drops[h++]=d)}this.drops.length=h,this.sprayOut=s,this.sprayIn=r}addEvent(t,e,n,s,r,o,a=-1){const c={t:this.time,x:t,z:e,vol:n,imp:s,ix:r,iz:o,src:a};this.stepEvents.push(c),this.events.push(c)}}function ec(i,t,e){i.addSource(t.x,t.z,t.vol/i.dt,e),t.imp>0&&i.addImpact(t.x,t.z,t.imp/i.dt,e),(t.ix!==0||t.iz!==0)&&i.addHForce(t.x,t.z,t.ix/i.dt,t.iz/i.dt),i.layer&&t.vol>0&&i.layer.addAir(t.x,t.z,t.vol*sn.sprayAir)}const Vs=new Float64Array(64*3),Wd=[],xr=new b,Eo=new b,wu=new b;function fv(i,t,e){for(let n=0;n<t.length;n++){if(n===i.src&&i.age<.4)continue;const s=Vs[n*3],r=Vs[n*3+1],o=Vs[n*3+2];if(Math.abs(i.x-s)>2.5||Math.abs(i.z-o)>2.5||i.y-r>1.5)continue;const a=t[n];xr.set(i.x,i.y,i.z).sub(a.origin).applyQuaternion(Wd[n]);const{x:c,y:l,z:h}=xr,u=h>Ji&&h<Rn&&l>-.05&&l<Ii&&Math.abs(c)<vi(h),d=h>-1.25&&h<-.05&&l>=Ii&&l<1.15&&Math.abs(c)<.38;if(!(!u&&!d))return xr.set(i.x-i.vx*e,i.y-i.vy*e,i.z-i.vz*e),a.velocityAt(xr,Eo),wu.set(i.vx-Eo.x,i.vy-Eo.y,i.vz-Eo.z).multiplyScalar(i.m),a.applyImpulse(wu,xr),a.sprayHit+=i.m,!0}return!1}const pv=new Float32Array(0);function nc(i){let t=0;for(const s of i)t+=s.length;const e=new Float32Array(t);let n=0;for(const s of i)e.set(s,n),n+=s.length;return e}function ic(i,t){i.clearPressure();for(let e=0;e<t.length;e+=4)t[e+2]>0&&i.addForce(t[e],t[e+1],t[e+2],t[e+3])}const Xd=32,wo=48,To=32,Go=4,Tu=.1;function mv(i,t,e,n,s){const r=new Float32Array(wo),o=new Float32Array(To);let a=0;for(let l=0;l<wo;l++){let h=0;for(let u=0;u<Xd;u++)h+=i[a++]*t[u];r[l]=h}for(let l=0;l<wo;l++)r[l]=Math.tanh(r[l]+i[a++]);for(let l=0;l<To;l++){let h=0;for(let u=0;u<wo;u++)h+=i[a++]*r[u];o[l]=h}for(let l=0;l<To;l++)o[l]=Math.tanh(o[l]+i[a++]);const c=new Array(Go);for(let l=0;l<Go;l++){let h=0;for(let u=0;u<To;u++)h+=i[a++]*o[u];c[l]=h}for(let l=0;l<Go;l++){const h=c[l]+i[a++];s&&(s[l]=h),c[l]=Math.tanh(h)}return c}const gv=2.5;function _v(i){let t=0;for(let e=0;e<Go;e++){const n=Math.abs(i[e])-gv;n>0&&(t+=n*n)}return t}function xv(i){return{steer:i[0],throttle:.5+.5*i[1],leanX:i[2],leanZ:i[3]}}const vv=26,Ao=24,sc=9,Mv=["逃げ","差し","まくり","まくり差し"];function yv(i){const t=[i.mark,i.turn/6,i.lat/30,i.speed/25,i.toMark/60,i.rank/5],e=[...i.rivals].sort((n,s)=>n.dLat-s.dLat).slice(0,5);for(let n=0;n<5;n++){const s=e[n];s?t.push(s.ahead/25,s.dLat/20,s.dSpeed/10,1):t.push(0,0,0,0)}return t}function Sv(i,t){let e=0;const n=new Array(Ao);for(let r=0;r<Ao;r++){let o=0;for(let a=0;a<vv;a++)o+=i[e++]*t[a];n[r]=o}for(let r=0;r<Ao;r++)n[r]=Math.tanh(n[r]+i[e++]);const s=new Array(sc);for(let r=0;r<sc;r++){let o=0;for(let a=0;a<Ao;a++)o+=i[e++]*n[a];s[r]=o}for(let r=0;r<sc;r++)s[r]+=i[e++];return s}const bo=i=>1/(1+Math.exp(-i));function Ev(i,t){const e=Sv(i,yv(t));let n=0;for(let s=1;s<4;s++)e[s]>e[n]&&(n=s);return{tactic:Mv[n],R:12+12*bo(e[4]),clear:1.8+5*bo(e[5]),dv:16*Math.tanh(e[6]),brake:.15+.6*bo(e[7]),wait:2*bo(e[8]-2)}}const Fr={t:[-2,-1.7,-1.5,-1.2,-1,-.7,-.5,-.2,0,.3,.5,.8,1,1.3,1.5,1.8,2,2.3,2.5,2.8,3,3.3,3.5,3.8,4,4.3,4.5,4.8,5,5.3,5.5,5.8,6,6.3,6.5,6.8,7,7.3,7.5,7.8,8,8.3,8.5,8.8,9,9.3,9.5,9.8,10,10.3,10.5,10.8,11],x:[-82.5,-77.2,-71.9,-66.4,-61,-55.5,-49.8,-44.6,-39.2,-34,-29.1,-24.6,-20.3,-16.4,-12.8,-9.5,-6.8,-4.1,-2,0,1.7,3,3.7,4.3,4.8,4.6,4,3,1.8,.2,-1.5,-3.7,-5.7,-7.9,-10.7,-13.3,-16.1,-19.6,-22.9,-26.7,-30.7,-34.9,-39.6,-44.6,-49.6,-54.9,-60,-65.1,-70.4,-75.6,-80.6,-86,-91.7],y:[-35.4,-35.2,-35.1,-35,-34.8,-34.5,-34,-33.4,-32.3,-31.4,-30.3,-29.2,-28,-27,-26,-24.8,-23.3,-21.4,-19.8,-17.6,-15.4,-13.2,-10.7,-8.1,-5.5,-2.6,.7,3.7,6.3,8.7,11.1,13.7,16.3,18.5,20.7,23,25.1,27.2,28.7,30,31.1,32,32.7,33.5,34.1,35.3,35.8,36.2,36.3,36.5,36.7,37,37.3],th:[0,.5,.8,1.2,1,1.5,1.5,2.5,3.4,5.4,7.9,9.7,12,13.6,17.5,20.9,25.5,30.1,36.1,42.6,50.6,59,68.5,77.5,87.5,96.6,103.7,109.3,113.9,118.6,123.6,126.6,130.4,135.1,139,143.6,148.1,153,156.7,159.8,161.6,163.5,164.7,166,166.8,168.2,168.9,169.7,170.5,170.7,172,172.2,172.2]},ui=32,qd=27,wv=yn[0],Tv=yn[1],sl=wv.z-qd,Hs=Tv.z+qd,rn=sl-Hs,Zn=Math.PI*ui,ta=yn[0].x,ea=ta-ui,Yd=ta+ui,qn=2*rn+2*Zn,rl=nl,ol=3,Zd=rl-Hs;function Cs(i,t){if(i<0)return t.x=ea,t.z=Hs+i,t.ox=-1,t.oz=0,t.tx=0,t.tz=1,t.turn=!1,t;let e=i%qn;if(e<rn)return t.x=ea,t.z=Hs+e,t.ox=-1,t.oz=0,t.tx=0,t.tz=1,t.turn=!1,t;if(e-=rn,e<Zn){const s=e/ui;return t.ox=-Math.cos(s),t.oz=Math.sin(s),t.x=ta+ui*t.ox,t.z=sl+ui*t.oz,t.tx=Math.sin(s),t.tz=Math.cos(s),t.turn=!0,t}if(e-=Zn,e<rn)return t.x=Yd,t.z=sl-e,t.ox=1,t.oz=0,t.tx=0,t.tz=-1,t.turn=!1,t;e-=rn;const n=e/ui;return t.ox=Math.cos(n),t.oz=-Math.sin(n),t.x=ta+ui*t.ox,t.z=Hs+ui*t.oz,t.tx=-Math.sin(n),t.tz=-Math.cos(n),t.turn=!0,t}function Av(i,t,e){const n={x:0,z:0,ox:0,oz:0,tx:0,tz:0,turn:!1};let s=e,r=1/0;for(let o=-2;o<=40;o+=.5){Cs(e+o,n);const a=(n.x-i)**2+(n.z-t)**2;a<r&&(r=a,s=e+o)}return s}function bv(i){if(i<0)return-i+rn;const t=i%qn,e=[rn,rn+Zn+rn,qn+rn];for(const n of e)if(n>t)return n-t;return 0}const rc=4.5,Rv={逃げ:{R:17,clear:2.2,dv:0,brake:.3,hold:1,aim:3,exit:0},差し:{R:15,clear:3.2,dv:-4,brake:.2,hold:1,aim:rc,exit:-6},まくり:{R:22,clear:5.5,dv:4,brake:.5,hold:1,aim:rc,exit:6},まくり差し:{R:15,clear:3.2,dv:0,brake:.3,hold:1,aim:rc,exit:-3}},Au=1.8,Cv=4,Pv=-19.3,bu=-10,oc=37,Lv=6,Dv=1.2,Iv=2,Ue=()=>globalThis.__raceTune??{},al=()=>Ue().lane??Cv,Ro=i=>(Ue().laneBase??Pv)+(i-1)*al(),Uv={R:19,exit:3},Nv={逃げ:-3.5,差し:1,まくり:-2.5,まくり差し:-.5},Fv=9.5,zv=14,Ov=45*Math.PI/180,Ru=3.5,tn={x:0,z:0,ox:0,oz:0,tx:0,tz:0,turn:!1},Cu=Fr.t.length,Pu=Fr.t.findIndex(i=>i>=0);function Co(i,t,e){const n=Fr.y[t];return e.x=Fr.x[t]+i.rxs,e.y=n<0?n*i.rys:n*i.rye,e}function Bv(i,t){const s=a=>28*a-(28-t)*5.5*(1-Math.exp(-a/5.5));let r=0,o=30;for(let a=0;a<30;a++){const c=(r+o)/2;s(c)<i?r=c:o=c}return o}function Lu(i){return cl(i)===1?Yd+ea:0}function cl(i){return i<0||i%qn<rn+Zn?0:1}class kv{constructor(t,e){C(this,"lane");C(this,"skill");C(this,"s",0);C(this,"laps",0);C(this,"finished",!1);C(this,"finishTime",0);C(this,"flying",!1);C(this,"capsized",!1);C(this,"tactics",[]);C(this,"tactic",null);C(this,"lat",0);C(this,"policy",null);C(this,"control",null);C(this,"ctrlPre",[0,0,0,0]);C(this,"ctrlSat",0);C(this,"ctrlN",0);C(this,"ctrlT",0);C(this,"rounded",[!0,!0]);C(this,"ctrlHold",{steer:0,throttle:1,leanX:0,leanZ:0});C(this,"apexAt",null);C(this,"apexInside",[]);C(this,"dMin",1/0);C(this,"dMinTime",0);C(this,"labelPending",!1);C(this,"lastPlanS",-1/0);C(this,"bias",0);C(this,"upsideTime",0);C(this,"offset");C(this,"turnTime",0);C(this,"steerTime",0);C(this,"leanX",0);C(this,"plan",null);C(this,"armed",!0);C(this,"launched",!1);C(this,"input",{steer:0,throttle:0,leanX:0,leanZ:0});this.lane=t,this.skill=e,this.offset=Ro(t)}startPos(){return{x:ea+1-Ro(this.lane),z:rl-85}}get progress(){return this.s-Zd}get turnPlan(){return this.plan}reset(){const t=this.startPos();this.s=t.z-Hs,this.laps=0,this.finished=!1,this.flying=!1,this.capsized=!1,this.upsideTime=0,this.turnTime=this.steerTime=this.leanX=0,this.offset=Ro(this.lane),this.plan=null,this.armed=!0,this.launched=!1,this.tactics=[],this.tactic=null,this.apexAt=null,this.labelPending=!1,this.lastPlanS=-1/0,this.dMin=1/0}makePlan(t,e,n,s,r){const o=yn[t],a=0,c=t===0?1:-1,l=c,h=0,u=(it,ut)=>-((it-o.x)*l+(ut-o.z)*h),d=u(e.x,e.z),f=[];for(const it of r){if(it.cpu===this||it.cpu.capsized||it.cpu.finished)continue;const ut=it.ph.comW,X=(ut.x-e.x)*a+(ut.z-e.z)*c;if(Math.abs(X)>25)continue;const U=u(ut.x,ut.z);U<d-1&&f.push({lat:U,ahead:X})}const g=this.skill;let _;if(f.length===0)_="逃げ";else{const it=Math.max(...f.map(U=>U.ahead)),ut=f.reduce((U,V)=>V.lat>U.lat?V:U),X=7-g.aggression*3;it<-X-3?_="逃げ":it<-X?_="まくり":f.length>=2&&ut.ahead<-X*.6?_="まくり差し":_="差し",this.tactics.length===0&&t===0&&(this.lane===3||this.lane===5)&&_==="差し"&&it<4&&(_=it<-X*.5?"まくり":"まくり差し")}globalThis.__cpuDebug&&console.log(`[${this.lane}] mark${t} lat${d.toFixed(1)} inside:${f.map(it=>it.lat.toFixed(1)+"/"+it.ahead.toFixed(1)).join(" ")} → ${_}`);const m={...Rv[_]};if(_==="逃げ"&&r.some(ut=>{if(ut.cpu===this||ut.cpu.capsized||ut.cpu.finished)return!1;const X=ut.ph.comW,U=(X.x-e.x)*a+(X.z-e.z)*c,V=u(X.x,X.z)-d;return U>-1&&U<10&&V>0&&V<12})&&Object.assign(m,Uv),_==="逃げ"){const it=Ue();it.nigeDv!==void 0&&(m.dv=it.nigeDv),it.nigeAim!==void 0&&(m.aim=it.nigeAim),it.nigeBrake!==void 0&&(m.brake=it.nigeBrake),it.nigeR!==void 0&&(m.R=it.nigeR)}const p=Ue().aimScale??(en?0:1);m.aim*=p;let v=null;if(this.policy){const it=[];let ut=0;for(const X of r){if(X.cpu===this||X.cpu.capsized||X.cpu.finished)continue;const U=X.ph.comW;X.cpu.s>this.s&&ut++,it.push({ahead:(U.x-e.x)*a+(U.z-e.z)*c,dLat:u(U.x,U.z)-d,dSpeed:X.ph.speed()-n})}v=Ev(this.policy,{mark:t,turn:this.tactics.length,lat:d,speed:n,toMark:(o.x-e.x)*a+(o.z-e.z)*c,rank:ut,rivals:it}),_=v.tactic,Object.assign(m,{R:v.R,clear:v.clear,dv:v.dv,brake:v.brake,aim:0})}g.seed=g.seed*16807%2147483647;const M=!v&&g.seed%1e3/1e3<g.slip?2.5+(g.seed>>10)%1e3/250:0;let x=v?v.clear:Math.max(2,m.clear-(g.tight-.5)*1.6)+M+(en?Ue().v2Clear??1:0);const P=(o.x-e.x)*a+(o.z-e.z)*c,A=s+Math.max(0,P)/Math.max(8,n),w=r.filter(it=>{var ut;return it.cpu!==this&&((ut=it.cpu.turnPlan)==null?void 0:ut.mark)===t});let L=v?v.wait:0;if(!v&&_==="差し"){let it=null,ut=-1/0;for(const X of w){const U=u(X.ph.comW.x,X.ph.comW.z);U<d&&U>ut&&(it=X,ut=U)}it&&(L=Math.max(0,it.cpu.turnPlan.apexTime+1.6-A))}if(v){const it=[];for(const U of r){if(U.cpu===this||U.cpu.capsized||U.cpu.finished)continue;const V=U.ph.comW,k=(V.x-e.x)*a+(V.z-e.z)*c;if(Math.abs(k)>25||u(V.x,V.z)>=d-1)continue;const tt=U.cpu.turnPlan,ft=(o.x-V.x)*a+(o.z-V.z)*c;it.push(tt&&tt.mark===t?tt.apexTime:s+Math.max(0,ft)/Math.max(8,U.ph.speed()))}const ut=A+L;this.apexInside=r.filter(U=>{if(U.cpu===this||U.cpu.capsized||U.cpu.finished)return!1;const V=U.ph.comW;return Math.abs((V.x-e.x)*a+(V.z-e.z)*c)<=25&&u(V.x,V.z)<d-1}).map(U=>U.cpu),this.labelPending=!0;const X=it.filter(U=>U<ut-.3).length;_=it.length===0?"逃げ":X===0?Math.max(...f.map(U=>U.ahead))<-10?"逃げ":"まくり":X===it.length?"差し":"まくり差し",globalThis.__cpuDebug&&console.log(`[${this.lane}] ${t+1}M ${_} R${v.R.toFixed(1)} 間隔${v.clear.toFixed(1)} 速さ${v.dv.toFixed(1)} レバー${v.brake.toFixed(2)} 待つ${v.wait.toFixed(2)} 頂点${(ut-s).toFixed(2)}s 内の艇${it.map(U=>(U-s).toFixed(2)).join(",")}`)}if(!v)for(const it of w){const ut=it.cpu.turnPlan;Math.abs(A+L-ut.apexTime)<.9&&u(it.ph.comW.x,it.ph.comW.z)<d+1&&(x=Math.max(x,ut.clear+2.8))}const E=Math.max(.5,d);let S=x-m.aim;const I=en&&!v&&this.tactics.length>0;let N=m.R,z=0;for(let it=0;it<2;it++){N=I?Math.max(12,(E+oc+m.exit)/2,(E+S)/2+.5):Math.max(m.R,(E+S)/2+.5),z=Math.acos(Math.max(-1,Math.min(1,(N-E)/(N-S))));const ut=m.aim-(m.aim-1.5)*Math.max(0,Math.min(1,(z-Math.PI/3)/(Math.PI/3)));S=x-ut}const W=-Math.cos(z)*l+Math.sin(z)*a,H=-Math.cos(z)*h+Math.sin(z)*c,q=I?60+(g.entrySpeed-49)+m.dv-Math.min(10,L*12):Math.sqrt((Ue().turnAcc??(en?zv:Fv))*N)*3.6+(v?0:g.entrySpeed-49)+m.dv-Math.min(10,L*12);this.tactics.push(_),this.tactic=v?null:_;const Q=v?v.brake:m.brake+(.8-m.brake)*g.grip*.6,Z=_==="逃げ"?(Ue().nigeEarly??Iv)*p:0,rt=Math.max(.15,E/32),dt=Math.max(.3,Math.min(oc,Math.max(Ue().exitMin??25,E+oc-32))+m.exit)/37,pt=Nv[_]+Math.min(4,x-3.2)+Math.min(4,L*3);return{mark:t,tactic:_,cx:o.x-(N-S)*W-Z*a,cz:o.z-(N-S)*H-Z*c,R:N,dx:a,dz:c,lx:l,lz:h,entry:q,clear:x,apexTime:A+L,brake:Q,hold:m.hold,real:I,rys:rt,rye:dt,rxs:pt,ri:0}}planTarget(t,e,n,s,r){if(t.real)return this.realTarget(t,e,n,s*(Ue().realLook??1),r);const o=Math.max(6,t.R+this.bias),a=e-t.cx,c=n-t.cz,l=a*t.dx+c*t.dz,h=-(a*t.lx+c*t.lz);let u,d;l<0&&h>0?(u=l,d=l/o):(d=Math.atan2(l,h),d<-Math.PI/2&&(d+=2*Math.PI),u=d*o);const f=u+s;if(f<=0)r.x=t.cx-o*t.lx+f*t.dx,r.z=t.cz-o*t.lz+f*t.dz;else if(f<=Math.PI*o){const g=f/o;r.x=t.cx+o*(-Math.cos(g)*t.lx+Math.sin(g)*t.dx),r.z=t.cz+o*(-Math.cos(g)*t.lz+Math.sin(g)*t.dz)}else{const g=f-Math.PI*o;r.x=t.cx+o*t.lx-g*t.dx,r.z=t.cz+o*t.lz-g*t.dz}return d}realTarget(t,e,n,s,r){const o=yn[t.mark],a=(e-o.x)*t.dx+(n-o.z)*t.dz,c=(e-o.x)*t.lx+(n-o.z)*t.lz,l={...t,rys:t.rys+this.bias/32,rye:t.rye+this.bias/37},h={x:0,y:0},u={x:0,y:0};let d=t.ri,f=1/0;for(let v=t.ri;v<Math.min(Cu,t.ri+12);v++){Co(l,v,h);const M=(h.x-a)**2+(h.y-c)**2;M<f&&(f=M,d=v)}t.ri=d;let g=s,_=d;Co(l,_,h);let m=h.x,p=h.y;for(;g>0&&_<Cu-1;){Co(l,_+1,u);const v=Math.hypot(u.x-m,u.y-p);v>=g?(m+=(u.x-m)*g/v,p+=(u.y-p)*g/v,g=0):(g-=v,m=u.x,p=u.y,_++)}return g>0&&(m-=g),r.x=o.x+m*t.dx+p*t.lx,r.z=o.z+m*t.dz+p*t.lz,d<Pu?(Co(l,Pu,u),-Math.hypot(u.x-a,u.y-c)/30):Fr.th[d]*Math.PI/180}squeezed(t,e,n){for(const s of n){if(s.cpu===this||s.cpu.capsized)continue;const r=s.ph.comW.x-t.x,o=s.ph.comW.z-t.z,a=r*e.x+o*e.z,c=r*e.z-o*e.x;if(Math.abs(a)<4&&c>.5&&c<3.2)return!0}return!1}controlObs(t,e){const n=new Array(Xd).fill(0),s=t.forward(new b),r=s.x,o=s.z,a=Math.hypot(r,o)||1,c=r/a,l=o/a,h=(w,L)=>[w*c+L*l,w*l-L*c],u=t.comW,[d,f]=h(t.vel.x,t.vel.z),g=t.attitude();n[0]=d/25,n[1]=f/10,n[2]=t.angVel.y/2,n[3]=g.heel/30,n[4]=g.trim/10,n[5]=t.rpm/6600,n[6]=t.throttle,n[7]=t.steerAngle/.5,n[8]=(t.riderB.x-vn.x)/.55,n[9]=(t.riderB.z-vn.z)/.3;const _={x:0,z:0,ox:0,oz:0,tx:0,tz:0,turn:!1};let m=10;for(const w of[10,25,50]){Cs(this.s+w,_);const[L,E]=h(_.x-u.x,_.z-u.z);n[m++]=L/50,n[m++]=E/50}Cs(this.s+25,_);const[p,v]=h(_.tx,_.tz);n[16]=p,n[17]=v;const M=yn[cl(this.s)],[x,P]=h(M.x-u.x,M.z-u.z);n[18]=x/100,n[19]=P/100,n[20]=Math.hypot(x,P)/100,n[21]=this.lat/30;const A=e.filter(w=>w.cpu!==this&&!w.cpu.capsized).map(w=>({o:w,d:Math.hypot(w.ph.comW.x-u.x,w.ph.comW.z-u.z)})).filter(w=>w.d<40).sort((w,L)=>w.d-L.d).slice(0,2);m=22;for(let w=0;w<2;w++){const L=A[w];if(L){const[E,S]=h(L.o.ph.comW.x-u.x,L.o.ph.comW.z-u.z),[I]=h(L.o.ph.vel.x-t.vel.x,L.o.ph.vel.z-t.vel.z);n[m++]=E/30,n[m++]=S/30,n[m++]=I/10,n[m++]=1}else m+=4}return n[30]=this.s%qn/qn,n[31]=1,n}update(t,e,n,s=[]){var X;const r=this.skill,o=this.input,a=1-2*(e.quat.x*e.quat.x+e.quat.z*e.quat.z);if(this.upsideTime=a<.15?this.upsideTime+t:0,this.upsideTime>1&&(this.capsized=!0),this.capsized){o.steer=o.throttle=o.leanX=o.leanZ=0;return}const c=e.comW;if(this.s=Av(c.x,c.z,this.s),this.s>=0){const U=this.s%qn,V=this.s-U;for(const[k,tt]of[[0,rn],[1,2*rn+Zn]]){const ft=yn[k],lt=k===0?c.z>=ft.z:c.z<=ft.z;U>=tt-30&&U<tt&&(this.rounded[k]=!1),lt&&(this.rounded[k]=!0);const It=V+tt+Zn/2;U>=tt+Zn/2&&U<tt+Zn+rn*.5&&!this.rounded[k]&&(this.s=Math.min(this.s,It))}}Cs(this.s,tn),this.lat=(c.x-tn.x)*tn.ox+(c.z-tn.z)*tn.oz;const l=e.speed()*3.6;if(n<0&&this.progress>0&&(this.flying=!0),this.laps=Math.max(0,Math.floor(this.progress/qn)),!this.finished&&this.progress>=ol*qn&&(this.finished=!0,this.finishTime=n),!this.launched&&n<0){o.throttle=.12;const U=rl-c.z;-n+r.st<=Bv(U,e.speed())&&(this.launched=!0)}n>=0&&(this.launched=!0);const h=bv(this.s);if(h>60&&this.s>this.lastPlanS+150&&(this.armed=!0),!this.plan&&this.armed&&h<50&&n>0&&!this.finished&&(this.dMin=1/0,this.labelPending=!1,this.plan=this.makePlan(cl(this.s),c,e.speed(),n,s),this.lastPlanS=this.s,this.armed=!1,this.turnTime=0),this.plan){const U=yn[this.plan.mark],V=Math.hypot(c.x-U.x,c.z-U.z);if(V<this.dMin)this.dMin=V,this.dMinTime=n;else if(V>this.dMin+1&&((!this.apexAt||this.apexAt.time!==this.dMinTime)&&(this.apexAt={mark:this.plan.mark,time:this.dMinTime}),this.labelPending)){this.labelPending=!1;const k=this.apexInside.filter(lt=>!lt.capsized),tt=k.filter(lt=>lt.apexAt&&lt.apexAt.mark===this.plan.mark&&Math.abs(lt.apexAt.time-this.dMinTime)<8&&lt.apexAt.time<this.dMinTime-.2).length,ft=k.length===0?"逃げ":tt===0?"まくり":tt===k.length?"差し":"まくり差し";this.tactic=ft,this.tactics[this.tactics.length-1]=ft}}const u=6+e.speed()*.35,d={x:0,z:0};let f=-1;const g=this.plan;if(g){f=this.planTarget(g,c.x,c.z,u,d);const U=Math.abs(Math.atan2(-(e.vel.x*g.lx+e.vel.z*g.lz),e.vel.x*g.dx+e.vel.z*g.dz));(f>165*Math.PI/180||e.speed()>3&&U>165*Math.PI/180)&&(Cs(this.s,tn),this.offset=Math.max(bu-Lu(this.s),(c.x-tn.x)*tn.ox+(c.z-tn.z)*tn.oz),this.plan=null,this.tactic=null)}if(!this.plan){let U=this.tactics.length===0?Ro(this.lane):this.offset;const V=Lu(this.s);if(n>3){let k=null,tt=35;for(const ft of s){if(ft.cpu===this||ft.cpu.capsized)continue;const lt=ft.cpu.s-this.s;lt>2&&lt<tt&&Math.abs(ft.cpu.lat-this.lat)<2.5&&(k=ft,tt=lt)}if(!k&&h<300)U=-V;else if(k){const ft=k.cpu.lat-al(),lt=k.cpu.lat+al(),It=Ut=>s.some(Wt=>Wt.cpu!==this&&!Wt.cpu.capsized&&Math.abs(Wt.cpu.s-this.s)<10&&Math.abs(Wt.cpu.lat-Ut)<3);U=ft>bu-V&&!It(ft)?ft:It(lt)?this.lat:lt}}for(const k of s){const tt=k.cpu.s-this.s;k.cpu===this||k.cpu.capsized||tt>8||tt<-4||(U<this.lat&&k.cpu.lat<this.lat&&k.cpu.lat>U-3.5&&(U=Math.max(U,k.cpu.lat+3.5)),U>this.lat&&k.cpu.lat>this.lat&&k.cpu.lat<U+3.5&&(U=Math.min(U,k.cpu.lat-3.5)))}this.offset+=(U-this.offset)*Math.min(1,t*.3),Cs(this.s+u,tn),d.x=tn.x+tn.ox*this.offset,d.z=tn.z+tn.oz*this.offset}const _=!!this.plan&&f>=0,m=this.plan&&f<0?-f*(this.plan.real?30:this.plan.R):0,p=e.forward(new b);let v=0,M=0,x=!1;if(this.plan){const U=[];for(const k of s){if(k.cpu===this||k.cpu.capsized)continue;const tt=k.ph.comW.x-c.x,ft=k.ph.comW.z-c.z,lt=tt*p.x+ft*p.z,It=tt*p.z-ft*p.x;Math.abs(lt)<14&&Math.abs(It)<6&&U.push({o:k,a:lt,l:It})}const V=!U.some(k=>k.l>.5&&k.l<4&&Math.abs(k.a)<6);for(const{o:k,a:tt,l:ft}of U){const lt=(e.vel.x-k.ph.vel.x)*p.x+(e.vel.z-k.ph.vel.z)*p.z;if(tt>1&&tt<12&&Math.abs(ft)<2.6&&(_?v=V?Math.min(v,-2):Math.max(v,2.8):M=Math.max(M,(lt>0?1:.3)*(1-tt/12))),_&&Math.abs(tt)<3.5&&ft>.5&&ft<4.5)if(this.plan.real)v=Math.max(v,3);else{const It=Math.hypot(k.ph.comW.x-this.plan.cx,k.ph.comW.z-this.plan.cz);v=Math.max(v,It+2.8-this.plan.R)}tt>.5&&tt<4&&ft<-.5&&ft>-4.5&&(x=!0)}}v=Math.max(-3,Math.min(6,v)),this.bias+=(v-this.bias)*Math.min(1,t*2),this.plan||(this.bias=0),this.plan&&!_&&this.squeezed(c,p,s)&&(d.x=c.x+this.plan.dx*u,d.z=c.z+this.plan.dz*u);for(const U of yn){const V=d.x-c.x,k=d.z-c.z,tt=Math.hypot(V,k),ft=U.x-c.x,lt=U.z-c.z,It=Math.hypot(ft,lt),Ut=en?Ue().v2ClearM??Au:Au;if(Ut<=0||tt<.001||It<.001||It>tt+Ut)continue;const Wt=Math.atan2(V,k),O=Math.atan2(ft,lt);let St=Wt-O;if(St>Math.PI&&(St-=2*Math.PI),St<-Math.PI&&(St+=2*Math.PI),Math.abs(St)>Math.PI/2)continue;const Vt=It<=Ut?Math.PI/2:Math.asin(Ut/It);if(St>-Vt){const Gt=O-Vt;d.x=c.x+Math.sin(Gt)*tt,d.z=c.z+Math.cos(Gt)*tt}}const P=e.forward(new b),A=d.x-c.x,w=d.z-c.z;let E=Math.atan2(P.x*w-P.z*A,P.x*A+P.z*w)/.4+.3*e.angVel.y;const S=e.vel,I=en&&e.speed()>5?Math.atan2(P.x*S.z-P.z*S.x,P.x*S.x+P.z*S.z):0,N=en&&e.speed()>5&&(!!this.plan||I>.26);if(N){const U=Math.atan2(S.x*w-S.z*A,S.x*A+S.z*w),V=!!((X=this.plan)!=null&&X.real);E=U/(Ue().slideGain??(V?.55:.4))+(Ue().slideDamp??(V?.4:.15))*e.angVel.y,E=Math.max(E,-((Ue().driftMax??Ov*(180/Math.PI))*(Math.PI/180)-I)/.2)}if(_&&this.plan&&!this.plan.real){const U=Math.hypot(c.x-this.plan.cx,c.z-this.plan.cz)-(this.plan.R+this.bias);(!en||U>0)&&(E-=.15*U)}if(E=Math.max(-1,Math.min(1,E)),en&&this.plan&&l>this.plan.entry+6){const U=Math.max(.3,1-(l-this.plan.entry-6)/12);E=Math.max(-U,Math.min(U,E))}let z=0,W=0;for(const U of s){if(U.ph===e||U.cpu.capsized)continue;const V=U.ph.comW.x-c.x,k=U.ph.comW.z-c.z,tt=Math.hypot(V,k);if(tt>8||tt<.1||(V*P.x+k*P.z)/tt<Math.cos(.6))continue;const lt=(P.x*k-P.z*V)/tt;z=Math.max(z,1-tt/8),W+=lt>0?-1:1}z>0&&!_&&(E=Math.max(-1,Math.min(1,E+Math.sign(W)*.35*z))),!this.plan&&!N&&(E=Math.max(-.45,Math.min(.45,E)));const H=E<0||N?e.attitude().heel:-e.attitude().heel,q=en?Math.max(0,Math.min(1,(H-5)/10)):Math.max(0,Math.min(1,(H-8)/12));q>0&&(E*=1-.7*q);const Q=Math.max(0,Math.min(1,(-H-(Ue().rescueInHeel??6))/10));Q>0&&(E*=1-.5*Q),en&&(this.plan||N)&&(E=Math.min(E,.4));const Z=2.5*t;if(o.steer=this.launched?o.steer+Math.max(-Z,Math.min(Z,E-o.steer)):0,this.launched){_&&(this.turnTime+=t);let U=1;const V=e.speed(),k=g?g.entry/3.6:0,tt=g?en&&!this.policy?Math.min(g.brake,.3):g.brake:1,ft=g?Ru*Math.max(.25,(1-tt)/.65):Ru,lt=(V*V-k*k)/(2*ft)+r.brakeMargin;if(g!=null&&g.real){const It=(Ue().liftThr??.2)+.25*r.grip;!_&&m<(Ue().liftLead??Lv)*(l/80)+r.brakeMargin&&(U=It);const Ut=Math.atan2(-(S.x*g.lx+S.z*g.lz),S.x*g.dx+S.z*g.dz);_&&(U=Math.abs(Ut)<(Ue().liftPsi??Dv)&&this.turnTime<4?It:g.hold)}else g&&!_&&m<lt&&l>g.entry&&(U=tt),g&&_&&(U=Ue().fullTurn||this.turnTime>=r.regrip*(1-.5*r.grip)?g.hold:.55+.3*r.grip);g&&!_&&M>0&&(U=Math.min(U,1-.7*M)),g&&_&&x&&this.turnTime>r.regrip*.5&&(U=Math.max(U,.75)),z>0&&(U=Math.min(U,1-.6*z)),q>0&&!(en&&Ue().rescueKeep!==0)&&(U=Math.min(U,1-.6*q)),o.throttle=U}const rt=(Math.abs(E)>.45||N&&I>.26)&&l>25;this.steerTime=rt?this.steerTime+t:0;const dt=Math.max(0,Math.min(1,(l-25)/25));let pt=rt&&this.steerTime>r.leanDelay?(N&&I>.26?-1:Math.sign(E))*dt:0;en&&this.plan&&(pt=Math.min(0,pt));const it=t/Math.max(.05,pt!==0?r.leanSpeed:.8);this.leanX+=Math.max(-it,Math.min(it,pt-this.leanX)),Q>0&&(this.leanX*=1-Math.min(1,t*8*Q)),o.leanX=this.leanX,o.leanZ=!rt&&l<50&&this.launched?.4:0;const ut=globalThis.__ctrlRecord;if((this.control||ut)&&this.launched&&n>0&&!this.finished){if(this.ctrlT+=t,this.ctrlT>=Tu){this.ctrlT-=Tu;const U=this.controlObs(e,s);ut&&ut(this,U,o),this.control&&(Object.assign(this.ctrlHold,xv(mv(this.control,U,void 0,void 0,this.ctrlPre))),this.ctrlSat+=_v(this.ctrlPre),this.ctrlN++)}this.control&&(o.steer=this.ctrlHold.steer,o.throttle=this.ctrlHold.throttle,o.leanX=this.ctrlHold.leanX,o.leanZ=this.ctrlHold.leanZ)}this.finished&&(o.throttle=.25,o.leanX=this.leanX=0)}}function Du(i){let t=i;const e=()=>(t=t*16807%2147483647,t%1e4/1e4);return["白","黒","赤","青","黄","緑"].map(s=>({name:s,entrySpeed:46+e()*6,brakeMargin:-2+e()*6,leanDelay:.15+e()*.3,leanSpeed:.15+e()*.3,tight:e(),aggression:e(),regrip:.3+e()*.6,grip:e(),slip:.08+e()*.17,seed:1+Math.floor(e()*1e5),st:.05+e()*.15+(e()<.15?.1+e()*.15:0)}))}function Vv(i,t){return t?i.tactics[0]??"逃げ":"抜き"}const Hv=rn+Zn+40-Zd,Pi=Fn.map(()=>new b),Po=Fn.map(()=>new b),ll=new b;function Gv(i,t){for(let a=0;a<Fn.length;a++)i.toWorld(ll.set(0,0,Fn[a].z),Pi[a]),t.toWorld(ll.set(0,0,Fn[a].z),Po[a]);let e=-1/0,n=0,s=0,r=0,o=0;for(let a=0;a<Pi.length;a++)for(let c=0;c<Po.length;c++){const l=Po[c].x-Pi[a].x,h=Po[c].z-Pi[a].z,u=Math.hypot(l,h),d=Fn[a].r+Fn[c].r-u;d>e&&u>1e-4&&(e=d,n=a,s=c,r=l/u,o=h/u)}return{pen:e,ia:n,ib:s,nx:r,nz:o}}const Wv=.3,Xv=.15,Gi=new b,Gn=new b,qv=new b,Yv=new b,ac=new b,bs=new b,Lo=new b;function Zv(i){for(let t=0;t<i.length;t++)for(let e=t+1;e<i.length;e++){const n=i[t],s=i[e];if((s.comW.x-n.comW.x)**2+(s.comW.z-n.comW.z)**2>16)continue;const{pen:r,ia:o,nx:a,nz:c}=Gv(n,s);if(r<=0)continue;n.shift(-a*r/2,-c*r/2),s.shift(a*r/2,c*r/2),Gi.set(a,0,c),Gn.copy(Pi[o]).addScaledVector(Gi,Fn[o].r-r/2),Gn.y=(n.comW.y+s.comW.y)/2+Xv;const l=n.velocityAt(Gn,qv),h=s.velocityAt(Gn,Yv);ac.subVectors(h,l).setY(0);const u=ac.dot(Gi);if(u<0){const d=-1.1*u/(n.impulseResponse(Gi,Gn)+s.impulseResponse(Gi,Gn));bs.copy(ac).addScaledVector(Gi,-u);const f=bs.length();if(Lo.copy(Gi).multiplyScalar(d),f>1e-4){bs.multiplyScalar(1/f);const g=Math.min(f/(n.impulseResponse(bs,Gn)+s.impulseResponse(bs,Gn)),Wv*d);Lo.addScaledVector(bs,-g)}s.applyImpulse(Lo,Gn),n.applyImpulse(Lo.negate(),Gn)}}}const jv=.8;function jd(i,t){let e=0;return i.forEach((n,s)=>{for(const r of yn){if((n.comW.x-r.x)**2+(n.comW.z-r.z)**2>16)continue;let o=0,a=0,c=0;for(let h=0;h<Fn.length;h++){n.toWorld(ll.set(0,0,Fn[h].z),Pi[h]);const u=Pi[h].x-r.x,d=Pi[h].z-r.z,f=Math.hypot(u,d),g=Fn[h].r+jv-f;g>o&&f>1e-4&&(o=g,a=u/f,c=d/f)}if(o<=0)continue;e++,n.shift(a*o,c*o);const l=n.vel.x*a+n.vel.z*c;l<0&&(n.vel.x-=1.3*l*a,n.vel.z-=1.3*l*c),n.vel.x*=.97,n.vel.z*=.97}}),e}const Kv=null,Do=[.052,.0997,.231,-.1143,-.175,.6666,-.499,.0873,-.1632,.8984,-.1323,.5702,-.282,-.2235,-.0382,-.3422,-.3185,.0523,.0247,-.1684,-.0017,-.4133,-.1026,-.1327,-.0668,.5865,-.3303,-.1661,-.0576,.1936,.0687,-.0026,.0321,.4142,.4337,-.1153,-.0872,.3042,-.6619,-.4158,.1265,-.2871,.2592,-.0856,.0601,-.4948,.6116,-.1181,-.042,-.2351,-.1286,.2861,-.6119,-.0596,.2283,.3153,-.2817,-.1506,.2308,.4206,.0741,.2604,-.4846,.0888,.0767,.3585,.5338,.3782,.5554,-.1931,.5802,.245,.405,-.9903,.2055,-.1705,-.4457,.5419,.5135,.1167,.2262,-.084,.0331,-.3187,.1588,.1275,.2788,-.5228,.0708,.3689,-.4066,.4077,-.1061,.1509,.4231,-.4063,.3307,.3403,-.4305,.0281,-.1194,-.4826,-.3678,-.3218,-.2604,.3042,-.4773,.3658,-.1965,-.1331,.4471,-.5171,.3936,-.1716,-.2606,-.0857,.0369,.1021,.14,.4167,.1314,-.2006,.0881,-.0302,.2586,-.4817,.5619,-.2001,-.7112,-.4329,.2802,.0089,.4236,.1088,-.2846,-.1715,-.45,-.6475,-.5522,.2536,.2363,-.3843,-.1321,.7895,-.0271,-.3704,-.3347,-.2678,.1464,.1948,.3526,.1343,-.3239,-.2979,-.0828,-.0451,.0768,.0181,-.1169,.6105,.1814,-.0757,.1014,.1766,.1003,-.1019,.9835,-.2359,.2571,-.6839,-.084,.1474,.2959,.0351,-.3272,-.4187,.1053,.3775,-.2421,.2637,-.0033,-.0682,-.1738,-.5343,-.5889,-.2683,-.0883,.1331,.2526,-.4153,.4462,.1263,.3668,-.2107,-.0885,.2508,-.0559,.1141,-.635,-.3418,.8984,.3487,.0508,-.1137,6e-4,-.7202,-.0792,-.4068,.2886,-.5114,.5678,-.1565,-.0151,-.1196,-.1593,-.5727,-.006,.0183,.1108,.5116,.6194,-.0854,-.1029,-.2788,.065,-.2551,-.3439,.8162,-.2377,-.349,-1.1229,-.2055,-.027,1.9249,.3799,.1238,.056,-.0109,-.2773,.1483,.0712,.358,.7057,.2863,.4698,-.5934,.042,.3183,-.1588,.0221,.0158,.1488,.5364,.3557,-.1323,-.0506,.0308,-.9642,-.1148,-.1128,-.2995,-.2655,-2e-4,-.5829,.3511,-.4927,-.3595,.2342,-.1132,.0447,.1226,-.381,.1796,.0894,.3452,.2766,.2673,.5201,-.4049,.5122,.0029,-.4114,-.1559,-.0578,.3699,-.1332,.2787,-.7246,.4333,-.0244,.1957,-.4146,-.1378,.0501,1.0671,.0701,-.3447,-.0711,.1009,.2412,-.113,-.4029,-.0179,-.738,.2483,-.3954,-.2855,.7506,.6918,.0551,-.1887,-.1023,-.3846,.6399,-.0109,-.0964,.141,.5216,-.5942,.0348,-.4817,-.2327,-.4028,.7591,-.2468,.2009,-.1774,.1197,-.3172,-.1404,-.2402,.3878,-.3104,.2214,.1088,.6206,.0851,.2873,-.1467,-.4685,-.3169,.5633,-.4154,.0485,-.1369,-.0225,-.2121,.2044,-.4771,.0254,-.1038,.2728,-.0421,-.4729,-.312,-.1316,-.4117,.6361,-.1426,.4142,.6772,-.3992,-.3202,-.8695,.7777,-1.2139,.2714,-.3047,-.2544,-.1117,.1073,-.3812,-.0603,-.171,-.1961,.3452,-.0967,.085,.1572,.0459,-.103,-.5148,-.0785,-.2341,-.1868,-.1774,.2191,.1175,.3075,.4841,-.6704,.2546,.3314,-.2043,-.3859,.2243,-.3981,.126,.0357,.4084,.3808,.3199,.0745,-.5649,-.0976,-.6978,.333,-.2144,.186,-.247,-.5046,-.1724,.7239,-.5072,.3998,-.3318,.4399,.4277,-.1372,-.2482,.6847,.3216,-.1234,.1529,.1985,-.3892,-.4398,-.2881,-.606,-.0558,-.7712,.2519,.0047,-.6685,-.6848,-.0139,.7692,.4293,.0275,-.1583,-.1051,.0203,.5727,.0802,.47,.1878,.1703,-.2436,.0731,-.5632,-.1596,.5132,-.026,-.1029,.8127,.1594,-.2191,-.2784,-.2109,.3542,.1423,-.0495,.442,-.6351,.5285,.0475,.2724,-.087,.1471,-.2859,.1844,.1817,-.2602,.1172,-.0428,.3567,.2933,.1368,-.3135,.1325,.0396,.4265,-.5779,-1.1922,-.145,.0129,.1079,-.3696,-.3048,1.5474,-.4613,.0163,.4113,-.1835,.3638,-.2288,.5679,-.0572,-.2678,.0068,.163,.1649,.1736,.0304,.0585,.0457,.6145,-.4811,.1568,-.0295,.4733,.3979,-.1858,.2044,-.1929,-.924,.1527,.4967,-.5126,-.5057,.1497,-.6537,.9451,.6643,.3278,-.2865,-.4449,.1968,-.0342,-.1797,-.1542,.0654,.0803,-.0516,-.1106,.1955,-.1107,.3665,-.0294,-.0955,-.016,.1627,.0929,.2152,-.0618,.2553,.0413,-.4269,-.2711,.2213,-.2145,-.2213,-.4893,-.2273,-.5373,-.099,-.4433,-.1134,.3586,.6052,.1796,.0566,-.4495,.3873,.3785,.2001,.135,-.4199,.2747,-.1365,.0907,-.0191,-.2737,-.3843,.316,.1043,.276,.3436,-.1463,.2053,.441,-.479,.5476,.6268,.1891,-1.3481,.4047,.6808,-.0848,.3568,.2251,-.0447,.0687,.2835,.1414,-.2898,.0955,-.5114,.0776,.2459,.0374,-.1761,.0569,-.0145,.045,-.2291,-.487,.0319,-.283,.2396,-.2227,.0581,-.32,-.292,-.2895,.2986,.1757,-.1862,-.584,-.2406,-.0832,.1672,-.1324,.2425,-.2814,-.1039,.1095,-.6131,-.0731,-.0159,-.0352,-.0677,-.1396,-.2746,.1586,-.3343,-.3195,-.2645,-.3797,5e-4,.2589,-.1049,-.2202,-.4728,.0123,.0495,.71,.1224,-.3532,-.3228,-.3862,-.0503,.922,.1458,.0858,-.3686,.2349,-.4032,.4435,.0591,-.0964,-7e-4,-.1947,-.1611,-.6652,-.1292,-.2841,-.0694,-.6001,.1825,-.2726,.2627,-.0344,-.0522,-.3168,-.5161,-.3049,.4995,.132,.3041,-.0695,-1.1841,.2182,.1666,-.0648,-.2666,-.1887,.1203,-.1155,-.6803,.144,.111,-.0725,.0204,-.2671,.3756,.1031,.2319,.4522,.2167,-.3818,-.2223,-.0966,-.3107,-.1267,.0248,.3396,.5899,.2333,.0898,.311,.1142,.0765,-.5099,-.0366,-.0246,.2309,.1016,.1748,-.6352,-.0479,-.512,-.284,.0623,-.0584,.3757,-.1092,.073,-.3849,.0227,-.4374,.2388,.025,-.4051,-.043,-.1208,-.221,.2416,.1565,.3462,.07,-.0246,.277,.4125,.4292,-.1497,.2061,.0865,-.0644,-.0834,-.1182,.2751,.2219,.3219,.1801,-.9628,-.4324,.4286,.0454,-.0558,.023,-.2394,.2956,.1327,-.2615,-.1269,.0049,.2147,-.4716,-.4335,.4392,.0233,-.2001,-.591,-.8212,-.3987,-.0829,-.7877,.4864,-.2471,-.233,-.3962,.0699,.3527,.481,.0992,-.5672,-1.011,-.2619,-.217,.0644,.4567,-.0268,-.1333,.2884,.251,.3015,.1426,-.1438,.0589,.2394,-.1196,.2333,-.3488,-.0608,.0484,-.7022,-.3467,.3815,.3789,-.1232,-.0838,-.0733,.2179,.2016,.6439,-.1066,.5327,-.1077,-.1565,-.4864,.0687,.0367,.162,-.1575,-.3575,.081,.6327,-.0292,.1415,-.1529,-.0758,.1031,.0096,.3764,.296,.2013,-.0718,-.3736,-.2065,.2292,.9768,.0045,-.9101,.2422,-.6023,-.4177,-.4299,-.0258,.1208,.2232,-.5278,-.3058,-.9871,.2846,.0011,.2042,.0957,-.0635,.365,.3906,.2648,-.2504,-.0961,-.2735,-.6281,-.046,.1189,.1421,-.2842,1.0248,.326,-.3862,.4084,.3225,.3716,.2612,.3616,-.1261,-.1613,.4809,-.289,-.0634,-.0273,-.1348,-.87,-.4725,-.1633,.0612,.0377,-.3295,-.2445,-.3462,-.0805,-.0766,-.3754,-.1793,.3887,.1437,-1.9589,.6477,.2822,.1703,-.0087,-1.1367,-.7572,.2821,-.2431,.2382,-.6279,.0196,.078,-.2484,.1857,.3661,-.3874,.0084,.5295,.281,.0024,-.1153,-.0853,-.1669,-.4078,-.1517,-.1301,-.2895,.0775,.1255,-.1263,-.1459,-.8451,-.5161,-.3861,-.0075,-.179,-.6323,-.2755,.1175,-.2706,-.0331,.2047,.1666,-.7547,.7428,-.4035,-.0032,-.3558,.066,.2953,.0329,.0022,.1395,.0713,-.6444,-.5167,-.0751,.1313,-.2226,.4725,-.0724,.5012,.2784,.0446,-.585,-.41,.4368,.0079,.0547,.0282,.3236,.0135,-.4057,.0746,.1215,.7113,.0878,.1112,-.0335,.1564,-.2915,.2629,.1751,.5323,-.3519,-.01,-.1565,.2921,.1925,-.0362,-.3778,-.0478,-.3319,.2985,.0278,-1.053,-.0681,-.1847,.6325,.3759,-.5508,-.7435,-.3051,.2569,.0837,1.2698,.2625,-.1407,.055,-.0862,.6329,.5608,1.052,-.0063,.1724,-.3593,.1431,-.0756,.1505,-.0964,.2594,-.2204,-.0981,-.7232,-.0904,-.129,.9487,.1385,.0068,.0839,.8062,-.1957,-.119,-.241,.1865,-.3248,.404,-.1844,-.3592,-.5018,.1338,-.3269,-.0158,.209,.0532,.4373,-.1134,.7622,-.2956,-.2481,.1906,.1978,-.3811,-.0574,-.2095,.3393,-.1862,.5993,-.3355,.1445,-.7159,.4638,-.6774,-.2122,-.19,-.2392,.4405,.0075,.3119,-.2582,.0064,.2877,.0855,-.6802,.1778,-.2949,.0589,-.2949,-.0723,-.2604,-.021,-.141,.0086,.1602,-.3001,.2512,-.3422,.0621,.5211,.0024,-8e-4,.6603,-.1006,-.1693,.8769,.5795,.142,-.2938,.5659,-.1392,-.4236,.4407,.2783,-.3554,-.0224,.3737,.3921,.0826,.4492,-.1246,.083,.2712,-.027,-.0141,-.0246,-.183,-.395,-.35,-.1803,.2724,.1609,-.6046,-.3821,.607,.1009,.1139,-.3261,.5859,.2749,-.2944,-.1816,-.2813,-.3026,-.2648,.6157,.8085,.2289,.0374,.2406,-9e-4,-.1444,-.2523,-.0811,.3336,.1758,-.4895,.0696,.1649,.1229,-.0015,.0509,.1198,.0938,.0314,.5291,-.0587,-.4182,-.1657,1.1404,.1351,-.1914,.1254,-.004,.395,.245,-.1145,-.3986,-.5032,-.3532,.387,.2311,-.2801,-.1573,.1619,.1826,-.4461,.1085,.1026,-.0674,.1428,-.1776,.0134,.2951,.1401,.2635,-.6989,-.2298,-.5897,.1319,.5534,.3868,.1844,.0309,.2558,.2712,-.2001,.0302,-.2268,-.4805,.2781,-.2269,.3974,.3366,-.0463,-.2306,.2539,.196,.0824,-.5515,-.1863,-.3108,.1267,.417,.5251,-.0258,-.3174,-.0224,-.3395,-.1836,.7094,.3805,.5182,-.6559,.5873,-.1391,.1994,.4046,.3153,.1883,-.4973,.157,-.3797,-.1673,-.3901,.4507,.1702,.2514,-.0662,.0697,-.0414,-.3472,.2097,-.33,-.1905,.1042,.2624,.1578,.284,.4274,-.4089,-.8719,-.0994,-.3891,.9647,-.2335,.2236,.1925,3.5521,-.1215,-.7586,-.1047,-.5242,-.3038,.4599,.0955,.366,.5031,-.3636,1.3842,.4996,.117,.3163,-.2983,-.1067,-.0409,-.157,-.1513,-.1327,-.1339,-.7409,.3663,.7091,.5933,-1.59,.0971,1.0508,1.0302,.8056,-.9898,-.4384,-.2211,.4804,.0508,-.4163,.3402,-.174,-.742,-.2887,-.1884,.5021,.2935,-.2781,-.1999,-1.2534,.1801,.3927,.3099,.0469,-.3148,.0692,.1517,.4101,.1882,-.3762,-.0936,.3145,.0227,.1142,.6335,-.8461,.2619,.1527,-.0918,-.2006,.3136,.0669,.2202,-.2043,-.2608,-.5152,.1729,.3033,-.5295,-.1391,.1681,.1595,-.0991,-.0526,-.372,-.2602,.2498,.3066,-.4253,-.164,-.3975,.5268,.8221,1.2134,-.4528,.1683,.469,-.162,-.3394,-.3091,.0952,.6132,.3578,.1926,-.0316,.0288,-.2843,-.4664,-.2885,.3285,-.1234,-.4629,-.8228,.1211,-.1355,-.2733,-.1412,-.1103,.1099,-.0182,-.2166,.1555,.1089,.0807,.0106,1.1544,.0169,.1919,.2818,-.3606,-.3549,.8679,-.112,-.3042,-.1574,-.2721,.1089,-.2906,.044,-.3368,.1875,.2099,-.331,-.9379,-.2697,-.0888,-.0578,-.3449,-.139,-.1151,-.1874,.3073,.2625,-.6414,-.2764,-.3718,.0649,-.2246,.1304,.061,-.6725,-.2076,-.264,-.1635,-.0969,-.4193,.2651,-.4148,.1395,-.1298,-.2298,-.1379,-.1562,.0856,-.0288,.1951,.013,-.1387,-.1712,-.0659,.3174,.3785,.495,-.0692,.2168,-.2104,.8001,-.1063,.5467,-.0091,-.6176,-.0177,-.3649,.1613,-.9656,.5652,-.3815,.0074,-.1838,-.0085,-.0776,-.5776,.1884,.3405,.0156,-.1324,-.4291,.0594,.1048,.4619,.0356,.0173,.0073,-.202,.0094,.0734,-.0139,-.1352,.6491,.3182,.123,.6079,.3966,-.9562,-.2832,-.4544,-.6285,-1.9115,-.2214,.0383,.5285,.0741,.308,.1488,-.1362,.4517,-.1289,.3888,-.2296,.0374,-.1409,-.0188,-.0546,-.1468,.2691,-.1681,-.1623,.0666,-.1568,-.1258,-.2069,-.0885,-.1051,-.7527,.1964,.9022,-.2131,.7978,-.2168,-.2335,.4588,-.0825,.2323,-.6424,-.0036,.2369,-.4063,-.0212,.3776,-.0567,.2093,.0114,.2683,.1928,.2075,-.0723,.2429,.028,-.2144,.3902,-.4138,.6219,-.3522,-.0222,-.1301,.5402,.0089,-.0485,.6468,.4754,-.5039,-.3111,.2805,-.0129,.2677,.2019,.3108,.0869,-.5134,.0122,-.1804,-.2145,.2511,-.2405,-.3863,-.5546,-.1726,.3016,-.2703,-.1331,.3888,.4747,.1149,-.9438,.25,-.1335,.17,.1711,.0296,.1275,.5744,.1459,.2584,-.1428,.1114,-.0366,.6437,-.0163,-.0434,-.1148,.0873,.4805,.8033,.2361,-.0013,.2465,.3107,.001,-.6975,.2092,-.9051,.3146,.1923,.1441,.3917,-.2707,.0532,-.2671,.0939,.1561,.1547,.249,.2347,-.1583,-.4239,-.1541,.1901,.2185,-.072,-.3068,-.1485,-.1089,-.0026,-.3477,.1124,.2658,.0265,-.2378,.0948,.0293,-.0805,.2793,-.2773,.0737,-.0189,-.1776,-.3171,-.0985,-.1258,-.3637,-.0281,-.1064,-.2192,.0251,-.0653,.8856,.187,.2358,-.2028,.3576,-.5036,.0739,.3592,.0582,.1666,-.4862,-.3861,-.1209,.0227,-.0066,.8257,.097,.2762,.2356,.0725,.11,-.1472,-.4132,-.089,-.2098,-.0846,.1482,.0407,.118,-.3419,-.1258,-.4932,.313,.3439,-.4942,-.3338,.023,-.1686,-.121,.1242,.882,-.7103,-.1648,.773,-.1793,.0823,.6959,.0037,-.0094,-.0716,.182,-.0572,.4505,-.3631,.0259,-.2248,.0903,-.2318,-.2154,-.0147,-.2703,.8673,-.2281,-.0162,.0761,-.326,-.326,-.1849,.1138,.3599,.8139,.4428,-.2123,.1976,-.243,-.0569,-.0781,.1767,.2648,-.8904,-.3469,.4828,.2859,-.437,-.2321,-.1383,.1606,-.5224,-.2217,.0119,.1781,.2026,-.2512,.2681,-.6045,-.0054,.073,.0312,.3313,.0133,-.0981,.0671,-.3051,-.2863,.0507,.04,.3669,-.0827,-.0126,-.1021,.1457,-.005,.3315,.5452,-.0118,-.4011,-.3596,-.0761,-.6483,-.6658,-.2013,-.2397,-.8923,-.0252,.3449,-.0574,.1405,.0425,.1287,-.0223,-.25,-.2744,-.788,-.6204,-.4565,-.1018,-.56,.2643,.379,-.6082,-.3166,.1911,.3102,.5127,.2232,.3322,.5461,-.0913,.1687,.4256,-.6428,.2942,.332,-.1613,.0983,-.214,-.3468,.3338,-.0224,-.0469,.0851,-.7055,.1965,.3108,.3523,.4283,-.0212,-.2246,.3577,.0511,-.0796,-.4558,.0541,-.149,-.0306,.4389,.1678,.0469,-.0293,-.0278,.1033,-.2123,.322,-.2686,.8027,-.0586,-.4421,.0156,-.0282,.5324,.0482,.2089,-.1169,-.0086,.2122,-.2149,-.4654,.0571,-.3724,.2699,-.3591,.1036,-.0505,-.2712,-.4515,.0967,-.5219,-.13,.2281,.01,-.1952,-.2014,.4526,-.2634,-.1825,.2364,.0815,-.279,.0389,.291,-.1027,.2748,-.2454,-.121,-.1526,-.2433,.024,.0191,.1111,-.2334,-.6841,-.0526,-.0663,-.2088,.1094,-.3137,.2422,.1288,-.2149,.4576,.7965,-.0225,-.1745,.1064,.5877,.0208,.3371,.1121,-.3982,.7517,.5048,.0092,-.5255,-.5058,-.1102,-.7647,.1812,-.1372,.3289,-.2326,-.4982,.3696,-.0175,-.1987,-.6928,-.1173,-.1429,-.8951,.0304,-1.4156,-.6906,.6704,-.1326,.1001,-.491,-.5881,.0724,.663,.294,.2255,.2737,.6178,.512,.7429,-.1253,.1001,-.352,.3098,-.0329,.197,-.3186,.2395,-.7625,.1188,.2349,.04,-.6888,.2593,.2293,.0977,.1855,-.1708,-.4098,.1396,-.5514,.0424,.3181,.2909,.084,.0171,-.6662,-.1844,.2179,.222,-.2096,-.1437,-.248,-.1035,-.2922,.1372,-.1329,-.5988,.6353,-.2868,.869,-.2227,.0244,.0737,.2303,-.0518,-.0044,-.2207,-.2894,.1949,.0531,-.3724,-.1217,-.137,.1381,.3033,-.0821,.4182,.2551,.6095,.3453,-.1562,.2427,.2083,.0861,-.1626,-.0873,-.3271,-.5715,-.063,.4876,-.4836,.0675,-.2935,-.651,-.0618,.0838,-.1896,.1265,.1361,-.4742,-.1329,.0882,.3024,-.0111,.3124,.1419,-.2783,.1589,-.0519,-.3129,-.119,-.3343,-.5123,-.6732,-.022,-.4646,-.4815,.0136,.0748,1.1355,.2413,-.0146,.0088,-.2543,-.7049,-.2675,-.0503,.3121,-.307,-.2244,-.6264,-.4911,.5626,-.8021,-.1174,-.3203,-.1775,-.2819,.0248,-.3185,-.1249,-.188,-.1332,.211,.2009,-.0666,-.3341,-.3597,-.1863,-.1017,-.2569,.4711,-.5582,-.992,-.3588,.043,-.446,-.189,.2178,.0863,.3692,.5748,-.2849,.0708,.6535,-.3171,.2154,-.2173,.1432,-.1539,-.0302,.6423,.3532,-.139,.0967,-.3317,-.4026,.1873,-.3968,-.0483,-.1357,.1812,.3791,.5375,.5191,.2405,.1881,-.0887,.3432,-.1681,.0592,-.1626,.1298,-.0993,-.0121,.26,-.2867,.0313,.7075,.4635,.0043,.2245,.0176,-.438,-.1917,-.6555,-.0774,.3205,-.036,.3271,-.7148,.1273,-.0629,-.0194,-.2316,-.1683,-.2284,.2263,.3796,-.4399,-.6172,.3871,.2128,.3324,.3297,-.0967,-.2311,-.0502,-.1469,-.1184,-.2156,.466,-.4767,-.4721,.1225,-.4121,.4408,.0496,-.429,.3484,-.0844,-.0151,.1111,-.5519,.188,-.0578,-.3456,.2017,-.2986,-.1201,.7339,.2685,-.3181,-.0487,-.0839,-.3447,.1009,-.1218,.0277,-.5832,-.3892,.5058,-.3129,-.512,-.3638,.0217,.3232,.1649,.1993,.0994,.1247,.0573,-.5313,-.2902,.3342,-.0324,.8602,-.248,.5021,.0643,-.1433,-.222,-.1775,-.5285,-.2956,-.0354,.1131,-.0392,-.5743,-.1739,.158,-.0387,.0828,.4249,.1493,.8358,.104,.0141,-.544,.1357,-.3403,-.0341,-.0438,-.4998,-.1333,1.2136,-1.5387,.9153,.9665,-1.0827,.3513,.7089,-.4864,-.0419,.7395,.3907,.6538,.9214,-.4492,.2358,-.2859,1.2136,-.6522,.26,-1.9116,.0145,-.6973,-.1324,.0807,.5862,.3077,-1.3091,.2753,-.0481,-.5456,-.7341,.1624,.0274,-1.1716,.402,-.89,-.2779,1.7532,.035,.4523,-1.0632,-.0171,-.9538,1.5488,-.8749,.6998,.8665,.3983,-.0561,.1762,.2505,-.1206,.1708,-.6786,-.7502,.1819,-.41,.1047,.6802,.2911,.366,-.2574,.17,.2437,.1215,.8035,-.1758,.0789,.3126,.1417,.2262,.4783,.2098,.3198,.0225,.2047,-.478,-.1782,.1915,.0955,.0734,-.0197,.5354,-.079,-.4161,-.7687,-.54,-.0312,.3499,.5308,.6669,-.4375,-.2451,.3311,-.2378,.1741,-.1519,-.2517,.4493,-.0816,-.3328,-.1613,.1132,.1013,-.2018,.5291,.778,-.0594,.2037,-.1495,.1942,.6523,-.1178,-.2838,-.0087,-1.0884,-.0642,-.294,.6651,.1292,.3167,-.2116,-.0251,.1446,.0718,-.0475,-.0465,-.3231,-.5785,.1433,.2402,-.5848,.0108,.1171,.8043,.2446,.6811,-.1643,.0803,.0602,.1799,-.6303,-.112,.1281,-.0716,.9977,-.2419,.0902,-.0593,.8918,.0482,.0482,-.2663,-1.0042,.0193,.6765,.7522,.1467,-1.5459,.8423,-.868,.7037,.461,.3745,-.2316,1.6575,-.4708,-.9171,.6716,-.2026,-.4751,-.2105,-1.0631,.0995,.1777,-.7882,.3664,-.4353,-.0771,.1899,-.4669,-.296,.9955,-.5341,.8462,-.7411,-.0903,-.0495,-1.5383,-.7518,.2938,-.1207,-.0977,-.3196,-.3081,-.2627,-.3068,.1416,.2334,-.5416,-.1115,.0576,-.0278,-.5778,.1044,.0999,.3749,.0735,.173,-.4189,-.3794,-.2424,.2014,.0032,.2234,.0448,.1381,.0608,-.038,.0941,.3175,.1824,-.568,-.1615,-.2103,.1405,.3769,-.3415,.033,-.1477,-.1282,-.0232,.0478,.341,.3608,-.2513,.1277,.184,.2757,-.3148,-.2585,-.0962,-.1266,-.0632,-.0218,-.4506,.4116,-.1629,.1988,-.0846,-.725,.3107,-.0877,-.0328,-.2813,.207,.1387,.2078,-.102,-.2051,.2562,-.4523,-.3973,-.2282,.1482,-.1832,-.3949,.1105,-.425,-.3311,-.0624,-.0624,-.3527,-.2214,.4838,-.2144,.6003,-.443,.2135,.1486,-.488,.2301,.3145,-.8641,.1618,-.2929,.053,-.2989,-.3443,-.0103,-.2997,.3481,.8935,.038,.1008,.4171,-.1023,.3439,.0989,-.1995,-.7214,.7228,.4788,.3737,-.3421,-.1691,-.5252,.6436,.0838,.7023,-.638,-.0119,-.223,-.1118,-.746,-.3002,.3504,-.17,-.1857,.2374,-.3755,.6044,-.1214,.7472,.2475,.2501,-.2449,.3443,-.1465,.074,.8647,-.7288,-.1583,-.362,-.3078,-.3895,.0595,-.5246,.1601,-.0129,.1922,-.3256,-.4007,-.5406,-.1679,-.0166,.3741,.1036,-.046,.3447,-.0646,-.2203,-.2395,-.2879,.116,-.1694,-.1973,.4204,.1484,-.0178,.063,-.4215,.4206,.2773,.4305,.1971,-.4637,.0864,.5578,-.0125,.1426,.1699,.1223,.5515,.1136,-.1998,.4654,.157,.1797,.0324,-.0646,-.0633,.4125,-.1418,-.3976,.5447,-.0165,.5202,.247,-.0486,.8432,.2815,.0648,.4974,-.2737,-.4945,-.2111,.1998,-.4268,.4595,-.4539,-.1262,-.1038,.3081,.2099,.2535,.2783,.4136,.0564,-.186,.11,.1691,-.0355,-.2624,-.1113,.2637,-.0583,.3676,.4148,-.4564,.1176,-.1756,-.035,-.4468,-.1262,-.1919,-.0858,-.1053,.5023,.0936,.0744,.1304,-.7501,-.6001,-.1479,-.297,-.3975,.3105,.4425,.0166,-.0504,.2847,.3771,-.3695,.0765,-.0743,-.2093,-.0296,.0059,-.1058,-.0935,.3658,-.0053,.2167,-.7225,-.1773,.0811,.1065,.0111,.0991,.0137,-.1931,-.5379,.3012,8e-4,-.5339,-.5304,.1084,.4395,-.0658,.5139,.222,-.1782,-.2841,-.0555,.2452,-.0858,.4977,.1901,1.1591,-.3255,-.4773,.0608,-.1262,-.1863,-.0757,.6818,.2672,-.5933,.1351,1.2284,.1126,.5602,-.6585,-.2243,.1134,.1895,-.5411,-.0919,-.7274,.0797,-.8626,-.6789,-.6835,.7376,-.2637,.5158,-.0448,-.2526,-.879,.1449,-.2842,-.2786,-.0235,.0035,-.8596,.2808,.4225,1.9425,.1865,.1474,-.6539,.4511,1.0151,.5314,-.5853,.0705,-.0431,-.3733,-.0057,.5275,-.1447,.2799,-.1409,-.6389,.0446,.1214,.1688,-.3542,-.8495,.4014,-.4298,-.5624,-.1416,.1333,-.1737,.5181,.0224,.3729,.4401,.0992,-.1691,-.3335,.0017,-.0702,.6641,.6164,-.2278,-.0892,-.0108,-.3175,.3102,.1694,.3961,-.0644,.1573,.1901,.1668,.3019,-.2625,.0534,.5168,.1454,-.172,-.4499,.9646,.5952,-.4134,.5039,.4318,-.0056,.366,.5739,.28,-.4388,-.5119,.3709,.008,.1176,-.4619,-.0825,.1948,.2744,-.414,.0122,-.7244,-.2893,-.1587,.1623,.1407,.4715,.3685,-.6406,-.2397,-.0599,-.1411,-.1212,-.1279,.1418,-.1094,-.2956,-.6667,-.4204,.1399,.0318,-.1626,.2044,.2144,.0117,.5117,-.1716,.1583,-.1121,.0331,-.334,.2198,-.3694,.3834,.156,-.3385,-.2045,.1787,-.3775,.3144,.0269,.4886,-.2729,-.375,.0016,-.2092,-.3233,.2622,.0118,.1475,-.1026,-.3797,.1155,.3201,.3123,-.3252,-.3579,.2267,.0782,-.1021,.1279,.0775,.0658,.0448,.2271,-.0419,-.102,-.4625,-.064,-.0442,.3935,-.0408,-.1698,.15,-.8708,-.3788,-.189,.2791,.4827,-.3855,.1648,.7597,-.8587,1.4752,-.0348,-.0378,.4385,.1036,1.1975,.1775,-.0139,-.2238,.5871,-.1753,.6488,-1.1056,-.6094,-1.3496,-.0491,-1.464,.241,-.0302,.6925,-.4754,-1.5749,.2688,-.3666,-.6593,-.9184,.5315,.1008,-.7579,.3333,-1.467,-.0382,1.2943,.1052,-.0204,-.8542,-.065,-.4071,1.0003,.0152,-.3233,.4338,-.2682,-.3275,-.0754,.0513,-.4123,-.6243,-.3569,.5592,-.1874,.0816,.4877,.466,.4637,.0619,-.2962,-.1971,-.385,-.0859,-.2407,-.0256,-1.5852,.5031,-.6328,.2414,-.1553,.4107,-.2167,-.4407,-.4341,.15,-.4675,.2037,-.1191,-.1023,-.2751,.1317,-.402,.368,.8351,.5278,.4069,.0483,-.0231,.2355,.4514,-.0589,-.4141,-.3175,.5955,.5472,.1922,-.0529,.1374,-.135,.3567,.3675,1.2816,-.2273,.6025,-.1695,.2555,1.3649,-.0455,-.8496,.7003,.7545,.7892,.0782,-.9928,-.042,.5828,-.0427,.3988,.214,.1146,.3206,.3463,-.4842,.519,-.0547,-.4423,.2403,-.6529,-.9016,-.6256,.7087,-2.1985,.4938,-.7186,.6819,-.0762,-.2355,-.2688,-.1384,-.3304,-.5917,-.4335,.297,.0166,.1855,.6121,.0413,.5163,.1246,.352,-.2308,-.0438,.4469,-.0196,-.3592,-.2391,.0073,.6638,.9851,.1752,.3263,-.3145,.4402,.5343,-.0552,.5096,-.2836,.668,.2274,-.2531,-.2283,.0665,-.2482,.2776,.6944,.1236,-.0125,-.686,-.3817,.2319,-.4372,-.5635,.0891,.6987,-.0165,.0073,.4953,-.1985,-.3436,.1207,-.2119,.2283,.2095,-.869,.056,-.0383,-.1347,-.0749,-.2724,.0457,.1741,-.2235,.4824,-.1568,-.0579,-.5898,-.2195,-.0479,-.14,-.5816,.1593,-.173,.1027,.1829,-.2993,-.3327,.7608,-.172,-.5499,-.2076,-.1409,-.1689,-.0809,-.0027,-.2239,-.1708,.4915,.523,.1513,.801,.1197,.5277,-.0048,-.0114,.0287,.1682,.0986,-.1369,.0663,.4944,.2018,-.355,-.1025,-.1181,-.1721,-.0507,.2,.4797,-.2173,.2034,.0818,.3183,-.3387,-.4901,-.6403,.5599,-.4074,-.4381,.3499,.2097,-.0767,-.2172,-.1487,-.1007,.3441,-.0811,-.4295,.0026,-.0351,-.0137,.039,-.2811,-.0746,-.1461,-.3059,.2695,-.2243,-.8003,.0306,.1389,-.223,.0745,.0028,.0165,-.1697,-.259,-.6412,-.33,-.3826,.0306,-.4731,.5063,-.0401,.049,-.3251,-.254,-.1239,-.0444,-.9509,-.1242,-.1633,-.3753,-.0091,.636,-.1005,.6273,-.1379,-.2861,-.2767,-.1377,.5263,-.0708,-.421,-.1934,-.8239,-.3288,-.3044,-.1284,-.3955,-.447,.1341,-.353,-.2153,.0597,-.8707,-.5222,-.5474,.0211,-.4666,-.75,-.0468,-.3584,.1802,-.3357,-.0576,.0742,-.4303,-.4034,-.2875,-.4132,-.399,.1272,-.1398,.229,.1817,.1005,.0043,.4207,-.3008,-.5483,-.0258,-.3413,-.2149,-.3656,-.4178,.3268,.1793,.0014,.547,-.3357,.2259,.0948,-.0761,.3839,.1434,-.1438,.4146,-.2405,.1757,-.0178,-.3064,.1576,-.1092,-.1735,.4856,.1185,.4395,.2703,-.3625,.0637,-.1403,.1617,.056,-.481,-.306,-.1129,-.1209,.2957,-.5646,-.169,.247,-.2256,-.1775,-.1653,-.1072,.0638,.4882,-.6038,.2596,-.5289,-.2283],Un=yn[0],Iu=-14,Io=1/240;function $v({renderer:i,scene:t,camera:e,sun:n,waves:s}){var Dt;Us!=="drift"&&Nl("drift");for(const Et of["hud","lever","lean-pad","steer-pad","wheel","start","touch","b-prop","b-center","prop-panel","rotate"])(Dt=document.getElementById(Et))==null||Dt.setAttribute("hidden","");const r=document.createElement("div");r.id="race-hud",r.innerHTML='<div class="r-clock" id="r-clock"></div><div class="r-lap" id="r-lap"></div><ol class="r-order" id="r-order"></ol>',document.body.appendChild(r);const o=document.getElementById("r-clock"),a=document.getElementById("r-lap"),c=document.getElementById("r-order"),l=document.getElementById("banner"),h=new Gd,u=new Hd(s,h.render),d=new zd(s),f=Od();t.add(d.mesh,f);const g=new Bd(u);t.add(g.group);const _=new Vd(u);t.add(_.points),d.hide(f,_.points);const m=()=>_.resize(window.innerHeight,e.fov,i.getPixelRatio());window.addEventListener("resize",m);let p=Math.floor(Math.random()*1e5)+1,v=Du(p);const M=[];for(let Et=0;Et<6;Et++){const Mt=new Nr(new Ol(s,h.felt),u),R=new kv(Et+1,v[Et]),y=Id(Et+1);t.add(y.root);const F=new kd(u);t.add(F.mesh),d.hide(F.mesh),M.push({ph:Mt,cpu:R,view:y,foam:F})}let x=0,P=Iu,A=0,w=!1,L=null;function E(){p=Math.floor(Math.random()*1e5)+1,v=Du(p),M.forEach((Et,Mt)=>{Et.cpu.skill=v[Mt],Et.cpu.reset();const R=Et.cpu.startPos();Et.ph.reset(R.x,R.z,0,x),Et.foam.clear()}),h.reset(Un.x,Un.z+5),_.clear(),P=Iu,w=!1,L=null,l.classList.remove("show")}E();const S=["1マーク観客席","中継","上空","先頭追従"];let I=0;const N=document.getElementById("b-cam"),z=()=>N.textContent=`視点:${S[I]}`;z(),N.onclick=()=>{I=(I+1)%S.length,z()};const W=document.getElementById("b-reset");W.textContent="もう一度",W.onclick=E;const H="boatgame.cpuBrain";let q=!1;try{localStorage.getItem(H)==="rule"&&(q=!1)}catch{}const Q=document.createElement("button");(()=>{const Et=q?Kv:null;M.forEach(Mt=>Mt.cpu.policy=Et),Q.textContent=`CPU:${q?"学習":"ルール"}`})(),Q.onclick=()=>{};const rt="boatgame.cpuControl";let dt=!!Do;try{localStorage.getItem(rt)==="rule"&&(dt=!1)}catch{}const pt=document.createElement("button"),it=()=>{const Et=dt?Do:null;M.forEach(Mt=>Mt.cpu.control=Et),pt.textContent=`操作:${dt?"学習":"ルール"}`};it(),pt.onclick=()=>{if(Do){dt=!dt;try{localStorage.setItem(rt,dt?"learned":"rule")}catch{}it(),E()}},Do&&document.getElementById("buttons").appendChild(pt);const ut=document.createElement("button");ut.textContent="自分で走る",ut.onclick=()=>{location.hash="",location.reload()},document.getElementById("buttons").appendChild(ut);const X=new Float32Array(3),U=new b,V=new b,k=new b,tt=new b(0,0,1),ft=new b,lt=new b(0,0,-1.75),It=new b,Ut=new wd;let Wt=!0;function O(){return[...M].sort((Et,Mt)=>Et.cpu.capsized!==Mt.cpu.capsized?Et.cpu.capsized?1:-1:Et.cpu.finished&&Mt.cpu.finished?Et.cpu.finishTime-Mt.cpu.finishTime:Et.cpu.finished?-1:Mt.cpu.finished?1:Mt.cpu.progress-Et.cpu.progress)}const St=Number(new URLSearchParams(location.search).get("ff")??NaN);i.setAnimationLoop(()=>{if(P<St){for(;P<St;)Vt(1/60);Ut.getDelta()}const Et=Math.min(Ut.getDelta(),.05);Vt(Et),Gt(Et)});function Vt(Et){var y;const Mt=M.filter(F=>!F.cpu.capsized);for(const F of M)F.cpu.update(Et,F.ph,P,Mt);A+=Et;let R=0;for(;A>=Io&&R<16;){for(const F of M)F.cpu.capsized||F.ph.step(Io,F.cpu.input,x);x+=Io,A-=Io,R++}if(R>=16&&(A=0),Zv(M.filter(F=>!F.cpu.capsized).map(F=>F.ph)),jd(M.filter(F=>!F.cpu.capsized).map(F=>F.ph)),P+=Et,((y=h.hitBoats)==null?void 0:y.length)!==M.length&&h.attach(M.map(F=>F.ph)),h.update(Et,Un.x,Un.z+5,0,0,M.map(F=>F.ph.pressure),M.map(F=>F.ph.spray),M.map(F=>F.ph.wakeMom))){d.updateWake(h.render);for(const F of M)h.render.waveForce(F.ph.comW.x,F.ph.comW.z,X,3.5),F.ph.extForce.set(X[0],0,X[1]),F.ph.extTorque.set(0,X[2],0)}}function Gt(Et){var at;for(const j of M){Ud(j.view,j.ph,Et),ft.set(-1,0,0).applyQuaternion(j.ph.quat),j.ph.toWorld(lt,It);const bt=j.ph.speed(),_t=1+.8*Math.max(j.ph.propState.cav,j.ph.propState.vent);j.ph.propImmersion>.2&&bt>1&&j.foam.add(x,It,ft,Math.min(1,bt/8)*_t),j.foam.update(x),_.emit(Et,x,j.ph,110)}_.step(Et,x),d.update(x,e.position),g.update(x),g.setClock(P);const Mt=O(),R=Mt[0];if(!L&&R.cpu.progress>Hv&&(L=R),P<0)o.textContent=`大時計 ${(-P).toFixed(1)}`,o.classList.toggle("near",P>-5);else{const j=Math.floor(P/60),bt=P-j*60;o.textContent=`${j}:${bt.toFixed(1).padStart(4,"0")}`,o.classList.remove("near")}if(a.textContent=R.cpu.finished?"ゴール":`${Math.min(ol,Math.max(1,R.cpu.laps+1))}周目 / ${ol}周`,c.innerHTML=Mt.map((j,bt)=>{const _t=j.cpu.lane,yt=_t===1||_t===5?"#111":"#fff",Xt=j.cpu.capsized?"<em>転覆</em>":j.cpu.flying?"<em>F</em>":j.cpu.finished?`<small>${j.cpu.finishTime.toFixed(1)}s</small>`:`<small>${Math.max(0,j.cpu.progress/qn).toFixed(1)}周${j.cpu.tactic?" "+j.cpu.tactic:""}</small>`;return`<li><b>${bt+1}</b><span class="lane" style="background:${Dd[_t-1]};color:${yt}">${_t}</span>${Xt}</li>`}).join(""),!w&&M.every(j=>j.cpu.finished||j.cpu.capsized)){w=!0;const j=Mt.filter(_t=>_t.cpu.finished),bt=j.length?Vv(j[0].cpu,j[0]===L):"";l.textContent=`${j.map(_t=>_t.cpu.lane).join("-")}　${bt}`,l.classList.add("show"),l.classList.remove("small")}let y=40;const F=R.ph.origin;if(I===0)y=30,U.set(-58,16,Un.z-22),V.set(Un.x-4,0,Un.z+4);else if(I===1){U.set(-55,31,Math.max(-150,Math.min(150,F.z*.75))),V.copy(F);const j=e.position.distanceTo(F);y=Math.max(5,Math.min(50,2*Math.atan(10/Math.max(1,j))*180/Math.PI))}else if(I===2)U.set(Un.x,120,Un.z-60),V.set(Un.x,0,Un.z-12),y=50;else{const j=R.ph.vel,bt=Math.hypot(j.x,j.z);bt>2&&tt.lerp(new b(j.x/bt,0,j.z/bt),1-Math.exp(-Et*3)).normalize(),U.copy(F).addScaledVector(tt,-9).add(new b(0,3.2,0)),V.copy(F).addScaledVector(tt,3),y=window.innerWidth<window.innerHeight?75:60}const st=Wt?1:1-Math.exp(-Et*3);e.position.lerp(U,st),k.lerp(V,Wt?1:1-Math.exp(-Et*5)),e.lookAt(k),Math.abs(e.fov-y)>.01&&(e.fov+=(y-e.fov)*(Wt?1:1-Math.exp(-Et*4)),e.updateProjectionMatrix(),m()),Wt=!1,n.position.copy(k).addScaledVector(ha,30),n.target.position.copy(k),n.shadow.camera.left=n.shadow.camera.bottom=-14,n.shadow.camera.right=n.shadow.camera.top=14,n.shadow.camera.updateProjectionMatrix(),(at=t.userData.sky)==null||at.position.copy(e.position),d.renderPasses(i,t,e),i.render(t,e)}}const qi=new URLSearchParams(location.search),Jv=qi.get("view")==="model",Ze=new n_({antialias:!0});Ze.setPixelRatio(Math.min(window.devicePixelRatio,2));Ze.toneMapping=ku;Ze.toneMappingExposure=1;Ze.shadowMap.enabled=!0;Ze.shadowMap.type=Ou;document.getElementById("app").appendChild(Ze.domElement);const De=new i_;De.fog=new Sl(zl,250,1500);const de=new Mn(60,1,.1,3e3);{const i=new Nt(new Ur(2e3,32,16),new Cn({side:on,depthWrite:!1,fog:!1,uniforms:{uTop:{value:Nd},uHorizon:{value:zl},uSun:{value:ha}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 uTop; uniform vec3 uHorizon; uniform vec3 uSun; varying vec3 vDir;
        void main(){ float h = clamp(vDir.y, 0.0, 1.0); vec3 c = mix(uHorizon, uTop, pow(h, 0.45));
          c += vec3(1.0, 0.93, 0.8) * pow(max(dot(normalize(vDir), uSun), 0.0), 64.0) * 0.6;
          gl_FragColor = vec4(c, 1.0);
          #include <colorspace_fragment>
        }`}));i.renderOrder=-1,De.add(i),De.userData.sky=i}De.add(new k_(14478591,2905440,1.1));const an=new G_(16774112,2.4);an.castShadow=!0;an.shadow.mapSize.set(1024,1024);an.shadow.camera.left=an.shadow.camera.bottom=-4;an.shadow.camera.right=an.shadow.camera.top=4;an.shadow.camera.near=1;an.shadow.camera.far=40;an.shadow.bias=-5e-4;De.add(an,an.target);for(const i of De.children)i.userData.keep=!0;const Ri=new ax,Cr=Id(3);De.add(Cr.root);function Kd(){const i=window.innerWidth,t=window.innerHeight;Ze.setSize(i,t),de.aspect=i/t,de.fov=i<t?75:60,de.updateProjectionMatrix()}window.addEventListener("resize",Kd);Kd();Jv?Qv():location.hash==="#race"?Uu():(tM(),document.getElementById("b-watch").onclick=()=>{location.hash="race",Uu()});function Uu(){Ze.setAnimationLoop(null);for(const i of[...De.children])i.userData.keep||De.remove(i);$v({renderer:Ze,scene:De,camera:de,sun:an,waves:Ri})}function Qv(){document.body.classList.add("model-view");for(const r of["hud","buttons","touch","start","lean-pad","lever","wheel"])document.getElementById(r).hidden=!0;const i=new Nt(new js(8,48),new jt({color:6262691,roughness:.9}));i.rotation.x=-Math.PI/2,i.position.y=-.7,i.receiveShadow=!0,De.add(i);const t=new W_(6,12,16777215,10470356);t.position.y=-.69,De.add(t);const e=new Y_(de,Ze.domElement);e.target.set(0,.35,-.2);const n={persp:[3.2,2,3.6],side:[5.5,.4,-.2],front:[0,.5,5.5],back:[0,.8,-5.5],top:[.001,6,-.2],rear34:[-3.2,1.6,-3.8],under:[2.6,-1.6,1.8]};qi.get("cam")==="under"&&(i.visible=t.visible=!1);const s=n[qi.get("cam")??"persp"]??n.persp;de.position.set(...s),qi.get("ortho")!==null&&(de.fov=20,de.position.multiplyScalar(3),de.updateProjectionMatrix()),de.position.multiplyScalar(Number(qi.get("d")??1)),e.update(),an.position.set(4,8,6),Cr.motor.rotation.y=Number(qi.get("steer")??0),Cr.tilt.rotation.x=(Number(qi.get("tilt")??Qo)-Qo)*Math.PI/180,Cr.tilt.position.y=Ks.y+Ye.motorHeight,Ze.setAnimationLoop(()=>{e.update(),Ze.render(De,de)})}function tM(){const i=new Gd,t=new Hd(Ri,i.render),e=new Nr(new Ol(Ri,i.felt),t),n=new Float32Array(3),s=new zd(Ri),r=Od();De.add(s.mesh,r);const o=new Bd(t);De.add(o.group);const a=new kd(t);De.add(a.mesh);const c=new Vd(t);De.add(c.points),s.hide(r,a.mesh,c.points);const l=document.getElementById("wfx"),h=()=>l.textContent=s.passes?"オン":"オフ";h(),l.onclick=()=>{s.passes=!s.passes;try{localStorage.setItem(Fd,s.passes?"1":"0")}catch{}h()};const u=document.getElementById("tphys"),d={v1:"従来",v2:"標準",drift:"ドリフト"},f=()=>u.textContent=d[Us];f(),u.onclick=()=>{Nl(Us==="v1"?"v2":Us==="v2"?"drift":"v1");try{localStorage.setItem(Pd,Us)}catch{}f()};const g=()=>c.resize(window.innerHeight,de.fov,Ze.getPixelRatio());g(),window.addEventListener("resize",g);const _=new iv(document.getElementById("touch")),m=document.getElementById("banner");function p(ct){m.textContent=ct,m.classList.toggle("show",!!ct),m.classList.toggle("small",ct.length>6)}let v=0;const M={x:-18,z:-100,heading:0},x=()=>{i.reset(M.x,M.z),e.reset(M.x,M.z,M.heading,v),a.clear(),c.clear(),P=0,p("")};let P=0;x();const A=["追従","低い追従","真横","上から","中継"];let w=0;const L=document.getElementById("b-cam");L.onclick=()=>{w=(w+1)%A.length,L.textContent=`視点:${A[w]}`},L.textContent=`視点:${A[w]}`;const E=[1,3,5,10,0];let S=1;const I=document.getElementById("b-wave"),N=()=>I.textContent=Ri.heightCm>0?`波高 ${Ri.heightCm}cm`:"波なし";Ri.setHeightCm(E[S]),N(),I.onclick=()=>{S=(S+1)%E.length,Ri.setHeightCm(E[S]),N()},document.getElementById("b-reset").onclick=()=>{_.lever=0,x()};const z=document.getElementById("prop-panel");document.getElementById("b-prop").onclick=()=>z.hidden=!z.hidden,document.getElementById("pp-close").onclick=()=>z.hidden=!0;const W=[{key:"diameter",id:"diameter",scale:100,fmt:ct=>`${ct.toFixed(1)} cm`},{key:"pitch",id:"pitch",scale:100,fmt:ct=>`${ct.toFixed(1)} cm`},{key:"ear",id:"ear",scale:1,fmt:ct=>ct.toFixed(2)},{key:"cup",id:"cup",scale:1,fmt:ct=>`${ct.toFixed(2)} mm`}],H="boatgame.prop";try{Object.assign(e.prop,JSON.parse(localStorage.getItem(H)??"{}"))}catch{}const q=document.getElementById("pp-note");function Q(){for(const ct of W){const Jt=e.prop[ct.key]*ct.scale;document.getElementById(`s-${ct.id}`).value=String(Jt),document.getElementById(`o-${ct.id}`).textContent=ct.fmt(Jt)}q.textContent=`ピッチ比 ${(e.prop.pitch/e.prop.diameter).toFixed(2)}　${e.prop.blades}枚羽根`;try{localStorage.setItem(H,JSON.stringify(e.prop))}catch{}}for(const ct of W)document.getElementById(`s-${ct.id}`).addEventListener("input",Jt=>{e.prop[ct.key]=Number(Jt.target.value)/ct.scale,Q()});document.getElementById("pp-reset").onclick=()=>{Object.assign(e.prop,bd),Q()},Q();const Z="boatgame.tilt";let rt=0;try{const ct=Number(localStorage.getItem(Z));_o.includes(ct)&&(rt=ct)}catch{}e.tilt=rt;const dt=document.getElementById("o-tilt"),pt=document.getElementById("tilt-note"),it=pt.textContent??"";function ut(){dt.textContent=`${rt.toFixed(1)}°`;const ct=rt!==e.tilt;pt.textContent=ct?`走行中は変えられません。止まると ${rt.toFixed(1)}° になります`:it,pt.classList.toggle("pending",ct)}function X(ct){const Jt=_o.indexOf(rt);rt=_o[Math.max(0,Math.min(_o.length-1,Jt+ct))];try{localStorage.setItem(Z,String(rt))}catch{}ut()}const U="boatgame.motorHeight",V=.05;let k=Ye.motorHeight;try{const ct=Number(localStorage.getItem(U));localStorage.getItem(U)!==null&&ct>=0&&ct<=.1&&(k=ct)}catch{}Ye.motorHeight=k;const tt=document.getElementById("o-mh"),ft=document.getElementById("mh-note"),lt=ft.textContent??"";function It(){const ct=Math.round((k-V)*100);tt.textContent=ct===0?"±0 cm":`${ct>0?"+":""}${ct} cm`;const Jt=Math.abs(k-Ye.motorHeight)>1e-4;ft.textContent=Jt?"走行中は変えられません。止まると反映されます":lt,ft.classList.toggle("pending",Jt)}function Ut(ct){k=Math.max(0,Math.min(.1,Math.round((k+ct*.01)*100)/100));try{localStorage.setItem(U,String(k))}catch{}It()}document.getElementById("mh-dn").onclick=()=>Ut(-1),document.getElementById("mh-up").onclick=()=>Ut(1),It(),document.getElementById("tilt-dn").onclick=()=>X(-1),document.getElementById("tilt-up").onclick=()=>X(1),ut();const Wt=document.getElementById("b-center");Wt.onclick=()=>_.recenter();for(const ct of document.querySelectorAll("button"))ct.addEventListener("pointerdown",Jt=>Jt.stopPropagation());let O=!1;const St=document.getElementById("start"),Vt=document.getElementById("b-start");Vt.onclick=async()=>{Vt.disabled=!0,Vt.textContent="準備中…",_.tiltActive=await _.enableTilt(),Wt.hidden=!_.tiltActive,Ct(),St.hidden=!0,O=!0,x(),_.tiltActive||p(_.swap?"傾きが使えないので、中央のパッドで体重":"傾きが使えないので、下のスライダーでハンドル"),_.tiltActive||setTimeout(()=>p(""),2500)};const Gt=document.getElementById("speed"),Dt=document.getElementById("rpm"),Et=document.getElementById("m-rpm"),Mt=document.getElementById("tach"),R=document.getElementById("chip-cav"),y=document.getElementById("lean-pad"),F=document.getElementById("chip-vent"),st=document.getElementById("meta"),at=document.getElementById("wheel"),j=document.getElementById("wheel-rot"),bt=document.getElementById("wheel-fill"),_t=document.getElementById("wheel-label"),yt="boatgame.ctrlSwap";try{_.swap=localStorage.getItem(yt)==="1"}catch{}const Xt=document.getElementById("steer-pad"),mt=document.getElementById("ctrlswap");function Ct(){const ct=_.swap;Xt.classList.toggle("swap",ct),y.classList.toggle("swap",ct),Xt.hidden=ct?!1:_.tiltActive,y.hidden=ct&&_.tiltActive,at.hidden=ct,mt.textContent=ct?"入れ替え":"標準"}Ct(),mt.onclick=()=>{_.swap=!_.swap;try{localStorage.setItem(yt,_.swap?"1":"0")}catch{}Ct()};function Ht(ct){const Jt=ct*90;j.setAttribute("transform",`rotate(${Jt.toFixed(1)} 60 60)`);const Me=Jt*Math.PI/180,ge=60+54*Math.sin(Me),ne=60-54*Math.cos(Me);bt.setAttribute("d",`M 60 6 A 54 54 0 0 ${Jt>=0?1:0} ${ge.toFixed(2)} ${ne.toFixed(2)}`),at.classList.toggle("full",Math.abs(ct)>.98);const me=ct>.02?"右":ct<-.02?"左":"";_t.textContent=_.tiltActive?`${me} ${Math.abs(_.tiltDeg).toFixed(0)}°`.trim():`${me} ${Math.round(Math.abs(ct)*100)}%`.trim()}const ot=new b,K=new b(0,0,1),gt=new b,Tt=new b,Pt=new b,D=new b,nt=new b,Y=new b,et=new b(0,0,-1.75),xt=new b,ht=new wd,Lt=1/240;let qt=0,$t=!0;Ze.setAnimationLoop(()=>{const ct=Math.min(ht.getDelta(),.05);_.update(ct);const Jt=O?_.input:{steer:0,throttle:0,leanX:0,leanZ:0};qt+=ct;let Me=0;for(;qt>=Lt&&Me<16;)e.step(Lt,P>0?{steer:0,throttle:0,leanX:0,leanZ:0}:Jt,v),v+=Lt,qt-=Lt,Me++;Me>=16&&(qt=0);const ge=e.comW,ne=e.vel,me=1.2;jd([e]),ge.x<Ft.x0+xn-2+me&&Math.abs(ge.z-Xi)<Zx/2&&(e.shift(Ft.x0+xn-2+me-ge.x,0),ne.x=Math.abs(ne.x)*.3,ne.multiplyScalar(.6)),ge.x<Ft.x0+me&&(e.shift(Ft.x0+me-ge.x,0),ne.x=Math.abs(ne.x)*.3,ne.multiplyScalar(.6)),ge.x>Ft.x1-me&&(e.shift(Ft.x1-me-ge.x,0),ne.x=-Math.abs(ne.x)*.3,ne.multiplyScalar(.6)),ge.z<Ft.z0+me&&(e.shift(0,Ft.z0+me-ge.z),ne.z=Math.abs(ne.z)*.3,ne.multiplyScalar(.6)),ge.z>Ft.z1-me&&(e.shift(0,Ft.z1-me-ge.z),ne.z=-Math.abs(ne.z)*.3,ne.multiplyScalar(.6)),e.forward(Pt),i.update(ct,e.origin.x,e.origin.z,Pt.x,Pt.z,e.pressure,e.spray,e.wakeMom)&&(s.updateWake(i.render),i.render.waveForce(e.comW.x,e.comW.z,n),e.extForce.set(n[0],0,n[1]),e.extTorque.set(0,n[2],0)),nt.set(0,1,0).applyQuaternion(e.quat),nt.y<.15&&(P===0&&p("転覆"),P+=ct,P>2.5&&x());const Be=Cr;e.tilt!==rt&&e.speed()<1&&(e.tilt=rt,ut()),Math.abs(Ye.motorHeight-k)>1e-4&&e.speed()<1&&(Ye.motorHeight=k,It()),Ud(Be,e,ct),D.set(-1,0,0).applyQuaternion(e.quat),e.toWorld(et,xt);const Te=e.speed(),Re=1+.8*Math.max(e.propState.cav,e.propState.vent);e.propImmersion>.2&&Te>1&&a.add(v,xt,D,Math.min(1,Te/8)*Re),a.update(v),s.update(v,de.position),o.update(v),o.setClock(v),c.update(ct,v,e),Y.set(Pt.x,0,Pt.z).normalize();const _e=Math.hypot(e.vel.x,e.vel.z),Qn=Math.min(.7,Math.max(0,(_e-2)/4)*.7);gt.copy(Y).multiplyScalar(1-Qn),_e>.1&&gt.add(new b(e.vel.x/_e,0,e.vel.z/_e).multiplyScalar(Qn)),gt.normalize(),$t?K.copy(gt):K.lerp(gt,1-Math.exp(-ct*3)).normalize(),ot.copy(e.origin).add(new b(0,.6,0));let dn=1-Math.exp(-ct*4),xe=window.innerWidth<window.innerHeight?75:60;if(w===0)Tt.copy(ot).addScaledVector(K,-7).add(new b(0,2.6,0));else if(w===1)Tt.copy(ot).addScaledVector(K,-4.2).add(new b(0,.9,0));else if(w===2)Tt.copy(ot).add(new b(-K.z,0,K.x).multiplyScalar(-7)).add(new b(0,1.2,0));else if(w===3)Tt.copy(ot).add(new b(0,22,0)).addScaledVector(K,-6),dn=1-Math.exp(-ct*3);else{Tt.set(-55,31,Math.max(-150,Math.min(150,e.origin.z*.75))),dn=1-Math.exp(-ct*2);const J=de.position.distanceTo(ot);xe=Math.max(5,Math.min(50,2*Math.atan(5.5/Math.max(1,J))*180/Math.PI))}Math.abs(de.fov-xe)>.01&&(de.fov+=(xe-de.fov)*(1-Math.exp(-ct*4)),de.updateProjectionMatrix(),g()),$t?(de.position.copy(Tt),$t=!1):de.position.lerp(Tt,dn);const Ae=t.height(de.position.x,de.position.z,v)+.4;de.position.y<Ae&&(de.position.y=Ae),w===4?de.lookAt(ot):de.lookAt(Y.copy(K).multiplyScalar(w===3?4:2.5).add(ot)),an.position.copy(e.origin).addScaledVector(ha,20),an.target.position.copy(e.origin),De.userData.sky.position.copy(de.position),Gt.textContent=(Te*3.6).toFixed(0);const $e=e.rpm;Dt.textContent=(Math.round($e/50)*50).toFixed(0),Et.style.width=`${Math.min(100,$e/7500*100)}%`,Mt.classList.toggle("limit",$e>hi.limitRpm-150);const os=e.propState.cav,as=e.propState.vent;R.textContent=`キャビ ${Math.round(os*100)}%`,F.textContent=`吸い込み ${Math.round(as*100)}%`,R.classList.toggle("on",os>.08),F.classList.toggle("on",as>.08);const T=e.attitude();st.textContent=`トリム ${T.trim.toFixed(1)}°　傾き ${T.heel.toFixed(1)}°　チルト ${e.tilt.toFixed(1)}°`,Ht(Jt.steer);const B=e.legForce,$=Math.min(1,Math.hypot(B.x,B.y-Ui*9.81,B.z)/(Ui*9.81*2));y.style.setProperty("--kick",$.toFixed(2)),s.renderPasses(Ze,De,de),Ze.render(De,de)})}
