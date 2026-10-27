var Dp=Object.defineProperty;var Np=(i,t,e)=>t in i?Dp(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var S=(i,t,e)=>Np(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wh="170",bo={ROTATE:0,DOLLY:1,PAN:2},xo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zp=0,Cu=1,Up=2,nf=1,sf=2,ki=3,fs=0,bn=1,ze=2,ls=0,Eo=1,Pu=2,Lu=3,Iu=4,Fp=5,Ps=100,Op=101,kp=102,Bp=103,Vp=104,Hp=200,Gp=201,Wp=202,Xp=203,Nl=204,zl=205,$p=206,qp=207,Yp=208,jp=209,Zp=210,Kp=211,Jp=212,Qp=213,tm=214,Ul=0,Fl=1,Ol=2,Io=3,kl=4,Bl=5,Vl=6,Hl=7,of=0,em=1,nm=2,hs=0,im=1,sm=2,om=3,rf=4,rm=5,am=6,cm=7,af=300,Do=301,No=302,Gl=303,Wl=304,uc=306,Ka=1e3,Ds=1001,Xl=1002,Wn=1003,lm=1004,Vr=1005,In=1006,Ac=1007,Ns=1008,Zi=1009,cf=1010,lf=1011,Pr=1012,Xh=1013,Bs=1014,wi=1015,qi=1016,$h=1017,qh=1018,zo=1020,hf=35902,uf=1021,df=1022,li=1023,ff=1024,pf=1025,To=1026,Uo=1027,dc=1028,Yh=1029,jh=1030,Zh=1031,Kh=1033,ka=33776,Ba=33777,Va=33778,Ha=33779,$l=35840,ql=35841,Yl=35842,jl=35843,Zl=36196,Kl=37492,Jl=37496,Ql=37808,th=37809,eh=37810,nh=37811,ih=37812,sh=37813,oh=37814,rh=37815,ah=37816,ch=37817,lh=37818,hh=37819,uh=37820,dh=37821,Ga=36492,fh=36494,ph=36495,mf=36283,mh=36284,gh=36285,xh=36286,hm=3200,um=3201,gf=0,dm=1,as="",Be="srgb",Go="srgb-linear",fc="linear",Ee="srgb",Ys=7680,Du=519,fm=512,pm=513,mm=514,xf=515,gm=516,xm=517,vm=518,_m=519,Nu=35044,Sr=35048,zu="300 es",Yi=2e3,Ja=2001;class Gs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wa=Math.PI/180,vh=180/Math.PI;function Wo(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function Ze(i,t,e){return Math.max(t,Math.min(e,i))}function Mm(i,t){return(i%t+t)%t}function Rc(i,t,e){return(1-e)*i+e*t}function jo(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ym={DEG2RAD:Wa};class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,e,n,s,o,r,a,c,l){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l)}set(t,e,n,s,o,r,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=o,u[5]=c,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],x=s[0],g=s[3],m=s[6],v=s[1],y=s[4],_=s[7],L=s[2],T=s[5],M=s[8];return o[0]=r*x+a*v+c*L,o[3]=r*g+a*y+c*T,o[6]=r*m+a*_+c*M,o[1]=l*x+u*v+h*L,o[4]=l*g+u*y+h*T,o[7]=l*m+u*_+h*M,o[2]=d*x+f*v+p*L,o[5]=d*g+f*y+p*T,o[8]=d*m+f*_+p*M,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*r*u-e*a*l-n*o*u+n*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*r-a*l,d=a*c-u*o,f=l*o-r*c,p=e*h+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=h*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*r)*x,t[3]=d*x,t[4]=(u*e-s*c)*x,t[5]=(s*o-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Cc.makeScale(t,e)),this}rotate(t){return this.premultiply(Cc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Cc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Cc=new ce;function vf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sm(){const i=Qa("canvas");return i.style.display="block",i}const Uu={};function mr(i){i in Uu||(Uu[i]=!0,console.warn(i))}function wm(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function bm(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Em(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const me={enabled:!0,workingColorSpace:Go,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ee&&(i.r=ji(i.r),i.g=ji(i.g),i.b=ji(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ee&&(i.r=Ao(i.r),i.g=Ao(i.g),i.b=Ao(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===as?fc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ao(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Fu=[.64,.33,.3,.6,.15,.06],Ou=[.2126,.7152,.0722],ku=[.3127,.329],Bu=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vu=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);me.define({[Go]:{primaries:Fu,whitePoint:ku,transfer:fc,toXYZ:Bu,fromXYZ:Vu,luminanceCoefficients:Ou,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:Fu,whitePoint:ku,transfer:Ee,toXYZ:Bu,fromXYZ:Vu,luminanceCoefficients:Ou,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}});let js;class Tm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{js===void 0&&(js=Qa("canvas")),js.width=t.width,js.height=t.height;const n=js.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=js}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=ji(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ji(e[n]/255)*255):e[n]=ji(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Am=0;class _f{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Wo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Pc(s[r].image)):o.push(Pc(s[r]))}else o=Pc(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Pc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rm=0;class xn extends Gs{constructor(t=xn.DEFAULT_IMAGE,e=xn.DEFAULT_MAPPING,n=Ds,s=Ds,o=In,r=Ns,a=li,c=Zi,l=xn.DEFAULT_ANISOTROPY,u=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Wo(),this.name="",this.source=new _f(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==af)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ka:t.x=t.x-Math.floor(t.x);break;case Ds:t.x=t.x<0?0:1;break;case Xl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ka:t.y=t.y-Math.floor(t.y);break;case Ds:t.y=t.y<0?0:1;break;case Xl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=af;xn.DEFAULT_ANISOTROPY=1;class Ue{constructor(t=0,e=0,n=0,s=1){Ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,_=(f+1)/2,L=(m+1)/2,T=(u+d)/4,M=(h+x)/4,P=(p+g)/4;return y>_&&y>L?y<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(y),s=T/n,o=M/n):_>L?_<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(_),n=T/s,o=P/s):L<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(L),n=M/o,s=P/o),this.set(n,s,o,e),this}let v=Math.sqrt((g-p)*(g-p)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(h-x)/v,this.z=(d-u)/v,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cm extends Gs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new xn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _f(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends Cm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Mf extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pm extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=o[r+0],f=o[r+1],p=o[r+2],x=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=x;return}if(h!==x||c!==d||l!==f||u!==p){let g=1-a;const m=c*d+l*f+u*p+h*x,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const L=Math.sqrt(y),T=Math.atan2(L,m*v);g=Math.sin(g*T)/L,a=Math.sin(a*T)/L}const _=a*v;if(c=c*g+d*_,l=l*g+f*_,u=u*g+p*_,h=h*g+x*_,g===1-a){const L=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=L,l*=L,u*=L,h*=L}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=o[r],d=o[r+1],f=o[r+2],p=o[r+3];return t[e]=a*p+u*h+c*f-l*d,t[e+1]=c*p+u*d+l*h-a*f,t[e+2]=l*p+u*f+a*d-c*h,t[e+3]=u*p-a*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(o/2),d=c(n/2),f=c(s/2),p=c(o/2);switch(r){case"XYZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"YZX":this._x=d*u*h+l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h-d*f*p;break;case"XZY":this._x=d*u*h-l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(o-l)*f,this._z=(r-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(o-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(r-s)/f,this._x=(o+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+r*a+s*l-o*c,this._y=s*u+r*c+o*a-n*l,this._z=o*u+r*l+n*c-s*a,this._w=r*u-n*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=r*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*n),u=2*(a*e-o*s),h=2*(o*n-r*e);return this.x=e+c*l+r*h-a*u,this.y=n+c*u+a*l-o*h,this.z=s+c*h+o*u-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Lc.copy(this).projectOnVector(t),this.sub(Lc)}reflect(t){return this.sub(Lc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lc=new A,Hu=new Xn;class ps{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,ni):ni.fromBufferAttribute(o,r),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zo),Gr.subVectors(this.max,Zo),Zs.subVectors(t.a,Zo),Ks.subVectors(t.b,Zo),Js.subVectors(t.c,Zo),es.subVectors(Ks,Zs),ns.subVectors(Js,Ks),ms.subVectors(Zs,Js);let e=[0,-es.z,es.y,0,-ns.z,ns.y,0,-ms.z,ms.y,es.z,0,-es.x,ns.z,0,-ns.x,ms.z,0,-ms.x,-es.y,es.x,0,-ns.y,ns.x,0,-ms.y,ms.x,0];return!Ic(e,Zs,Ks,Js,Gr)||(e=[1,0,0,0,1,0,0,0,1],!Ic(e,Zs,Ks,Js,Gr))?!1:(Wr.crossVectors(es,ns),e=[Wr.x,Wr.y,Wr.z],Ic(e,Zs,Ks,Js,Gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ii=[new A,new A,new A,new A,new A,new A,new A,new A],ni=new A,Hr=new ps,Zs=new A,Ks=new A,Js=new A,es=new A,ns=new A,ms=new A,Zo=new A,Gr=new A,Wr=new A,gs=new A;function Ic(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){gs.fromArray(i,o);const a=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),c=t.dot(gs),l=e.dot(gs),u=n.dot(gs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Lm=new ps,Ko=new A,Dc=new A;class Ws{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lm.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ko.subVectors(t,this.center);const e=Ko.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ko,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ko.copy(t.center).add(Dc)),this.expandByPoint(Ko.copy(t.center).sub(Dc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new A,Nc=new A,Xr=new A,is=new A,zc=new A,$r=new A,Uc=new A;class pc{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Nc.copy(t).add(e).multiplyScalar(.5),Xr.copy(e).sub(t).normalize(),is.copy(this.origin).sub(Nc);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Xr),a=is.dot(this.direction),c=-is.dot(Xr),l=is.lengthSq(),u=Math.abs(1-r*r);let h,d,f,p;if(u>0)if(h=r*c-a,d=r*a-c,p=o*u,h>=0)if(d>=-p)if(d<=p){const x=1/u;h*=x,d*=x,f=h*(h+r*d+2*a)+d*(r*h+d+2*c)+l}else d=o,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*c)+l;else d=-o,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-p?(h=Math.max(0,-(-r*o+a)),d=h>0?-o:Math.min(Math.max(-o,-c),o),f=-h*h+d*(d+2*c)+l):d<=p?(h=0,d=Math.min(Math.max(-o,-c),o),f=d*(d+2*c)+l):(h=Math.max(0,-(r*o+a)),d=h>0?o:Math.min(Math.max(-o,-c),o),f=-h*h+d*(d+2*c)+l);else d=r>0?-o:o,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Nc).addScaledVector(Xr,d),f}intersectSphere(t,e){Di.subVectors(t.center,this.origin);const n=Di.dot(this.direction),s=Di.dot(Di)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(o=(t.min.y-d.y)*u,r=(t.max.y-d.y)*u):(o=(t.max.y-d.y)*u,r=(t.min.y-d.y)*u),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,n,s,o){zc.subVectors(e,t),$r.subVectors(n,t),Uc.crossVectors(zc,$r);let r=this.direction.dot(Uc),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;is.subVectors(this.origin,t);const c=a*this.direction.dot($r.crossVectors(is,$r));if(c<0)return null;const l=a*this.direction.dot(zc.cross(is));if(l<0||c+l>r)return null;const u=-a*is.dot(Uc);return u<0?null:this.at(u/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,s,o,r,a,c,l,u,h,d,f,p,x,g){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l,u,h,d,f,p,x,g)}set(t,e,n,s,o,r,a,c,l,u,h,d,f,p,x,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Qs.setFromMatrixColumn(t,0).length(),o=1/Qs.setFromMatrixColumn(t,1).length(),r=1/Qs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(o),h=Math.sin(o);if(t.order==="XYZ"){const d=r*u,f=r*h,p=a*u,x=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+p*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=p+f*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,p=l*u,x=l*h;e[0]=d+x*a,e[4]=p*a-f,e[8]=r*l,e[1]=r*h,e[5]=r*u,e[9]=-a,e[2]=f*a-p,e[6]=x+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,p=l*u,x=l*h;e[0]=d-x*a,e[4]=-r*h,e[8]=p+f*a,e[1]=f+p*a,e[5]=r*u,e[9]=x-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*u,f=r*h,p=a*u,x=a*h;e[0]=c*u,e[4]=p*l-f,e[8]=d*l+x,e[1]=c*h,e[5]=x*l+d,e[9]=f*l-p,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,f=r*l,p=a*c,x=a*l;e[0]=c*u,e[4]=x-d*h,e[8]=p*h+f,e[1]=h,e[5]=r*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*h+p,e[10]=d-x*h}else if(t.order==="XZY"){const d=r*c,f=r*l,p=a*c,x=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+x,e[5]=r*u,e[9]=f*h-p,e[2]=p*h-f,e[6]=a*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Im,t,Dm)}lookAt(t,e,n){const s=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),ss.crossVectors(n,Fn),ss.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),ss.crossVectors(n,Fn)),ss.normalize(),qr.crossVectors(Fn,ss),s[0]=ss.x,s[4]=qr.x,s[8]=Fn.x,s[1]=ss.y,s[5]=qr.y,s[9]=Fn.y,s[2]=ss.z,s[6]=qr.z,s[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],v=n[3],y=n[7],_=n[11],L=n[15],T=s[0],M=s[4],P=s[8],b=s[12],w=s[1],N=s[5],O=s[9],U=s[13],V=s[2],B=s[6],X=s[10],Q=s[14],j=s[3],pt=s[7],vt=s[11],Mt=s[15];return o[0]=r*T+a*w+c*V+l*j,o[4]=r*M+a*N+c*B+l*pt,o[8]=r*P+a*O+c*X+l*vt,o[12]=r*b+a*U+c*Q+l*Mt,o[1]=u*T+h*w+d*V+f*j,o[5]=u*M+h*N+d*B+f*pt,o[9]=u*P+h*O+d*X+f*vt,o[13]=u*b+h*U+d*Q+f*Mt,o[2]=p*T+x*w+g*V+m*j,o[6]=p*M+x*N+g*B+m*pt,o[10]=p*P+x*O+g*X+m*vt,o[14]=p*b+x*U+g*Q+m*Mt,o[3]=v*T+y*w+_*V+L*j,o[7]=v*M+y*N+_*B+L*pt,o[11]=v*P+y*O+_*X+L*vt,o[15]=v*b+y*U+_*Q+L*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15];return p*(+o*c*h-s*l*h-o*a*d+n*l*d+s*a*f-n*c*f)+x*(+e*c*f-e*l*d+o*r*d-s*r*f+s*l*u-o*c*u)+g*(+e*l*h-e*a*f-o*r*h+n*r*f+o*a*u-n*l*u)+m*(-s*a*u-e*c*h+e*a*d+s*r*h-n*r*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],v=h*g*l-x*d*l+x*c*f-a*g*f-h*c*m+a*d*m,y=p*d*l-u*g*l-p*c*f+r*g*f+u*c*m-r*d*m,_=u*x*l-p*h*l+p*a*f-r*x*f-u*a*m+r*h*m,L=p*h*c-u*x*c-p*a*d+r*x*d+u*a*g-r*h*g,T=e*v+n*y+s*_+o*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/T;return t[0]=v*M,t[1]=(x*d*o-h*g*o-x*s*f+n*g*f+h*s*m-n*d*m)*M,t[2]=(a*g*o-x*c*o+x*s*l-n*g*l-a*s*m+n*c*m)*M,t[3]=(h*c*o-a*d*o-h*s*l+n*d*l+a*s*f-n*c*f)*M,t[4]=y*M,t[5]=(u*g*o-p*d*o+p*s*f-e*g*f-u*s*m+e*d*m)*M,t[6]=(p*c*o-r*g*o-p*s*l+e*g*l+r*s*m-e*c*m)*M,t[7]=(r*d*o-u*c*o+u*s*l-e*d*l-r*s*f+e*c*f)*M,t[8]=_*M,t[9]=(p*h*o-u*x*o-p*n*f+e*x*f+u*n*m-e*h*m)*M,t[10]=(r*x*o-p*a*o+p*n*l-e*x*l-r*n*m+e*a*m)*M,t[11]=(u*a*o-r*h*o-u*n*l+e*h*l+r*n*f-e*a*f)*M,t[12]=L*M,t[13]=(u*x*s-p*h*s+p*n*d-e*x*d-u*n*g+e*h*g)*M,t[14]=(p*a*s-r*x*s-p*n*c+e*x*c+r*n*g-e*a*g)*M,t[15]=(r*h*s-u*a*s+u*n*c-e*h*c-r*n*d+e*a*d)*M,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,u=o*a;return this.set(l*r+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*r,0,l*c-s*a,u*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,u=r+r,h=a+a,d=o*l,f=o*u,p=o*h,x=r*u,g=r*h,m=a*h,v=c*l,y=c*u,_=c*h,L=n.x,T=n.y,M=n.z;return s[0]=(1-(x+m))*L,s[1]=(f+_)*L,s[2]=(p-y)*L,s[3]=0,s[4]=(f-_)*T,s[5]=(1-(d+m))*T,s[6]=(g+v)*T,s[7]=0,s[8]=(p+y)*M,s[9]=(g-v)*M,s[10]=(1-(d+x))*M,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Qs.set(s[0],s[1],s[2]).length();const r=Qs.set(s[4],s[5],s[6]).length(),a=Qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],ii.copy(this);const l=1/o,u=1/r,h=1/a;return ii.elements[0]*=l,ii.elements[1]*=l,ii.elements[2]*=l,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=h,ii.elements[9]*=h,ii.elements[10]*=h,e.setFromRotationMatrix(ii),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Yi){const c=this.elements,l=2*o/(e-t),u=2*o/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let f,p;if(a===Yi)f=-(r+o)/(r-o),p=-2*r*o/(r-o);else if(a===Ja)f=-r/(r-o),p=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Yi){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(r-o),d=(e+t)*l,f=(n+s)*u;let p,x;if(a===Yi)p=(r+o)*h,x=-2*h;else if(a===Ja)p=o*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qs=new A,ii=new re,Im=new A(0,0,0),Dm=new A(1,1,1),ss=new A,qr=new A,Fn=new A,Gu=new re,Wu=new Xn;class ui{constructor(t=0,e=0,n=0,s=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ze(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wu.setFromEuler(this),this.setFromQuaternion(Wu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class yf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Nm=0;const Xu=new A,to=new Xn,Ni=new re,Yr=new A,Jo=new A,zm=new A,Um=new Xn,$u=new A(1,0,0),qu=new A(0,1,0),Yu=new A(0,0,1),ju={type:"added"},Fm={type:"removed"},eo={type:"childadded",child:null},Fc={type:"childremoved",child:null};class Ke extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ke.DEFAULT_UP.clone();const t=new A,e=new ui,n=new Xn,s=new A(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new ce}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return to.setFromAxisAngle(t,e),this.quaternion.multiply(to),this}rotateOnWorldAxis(t,e){return to.setFromAxisAngle(t,e),this.quaternion.premultiply(to),this}rotateX(t){return this.rotateOnAxis($u,t)}rotateY(t){return this.rotateOnAxis(qu,t)}rotateZ(t){return this.rotateOnAxis(Yu,t)}translateOnAxis(t,e){return Xu.copy(t).applyQuaternion(this.quaternion),this.position.add(Xu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($u,t)}translateY(t){return this.translateOnAxis(qu,t)}translateZ(t){return this.translateOnAxis(Yu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yr.copy(t):Yr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Jo,Yr,this.up):Ni.lookAt(Yr,Jo,this.up),this.quaternion.setFromRotationMatrix(Ni),s&&(Ni.extractRotation(s.matrixWorld),to.setFromRotationMatrix(Ni),this.quaternion.premultiply(to.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ju),eo.child=t,this.dispatchEvent(eo),eo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fm),Fc.child=t,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ju),eo.child=t,this.dispatchEvent(eo),eo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,t,zm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,Um,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];o(t.shapes,h)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),u=r(t.images),h=r(t.shapes),d=r(t.skeletons),f=r(t.animations),p=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ke.DEFAULT_UP=new A(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new A,zi=new A,Oc=new A,Ui=new A,no=new A,io=new A,Zu=new A,kc=new A,Bc=new A,Vc=new A,Hc=new Ue,Gc=new Ue,Wc=new Ue;class ai{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),si.subVectors(t,e),s.cross(si);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){si.subVectors(s,e),zi.subVectors(n,e),Oc.subVectors(t,e);const r=si.dot(si),a=si.dot(zi),c=si.dot(Oc),l=zi.dot(zi),u=zi.dot(Oc),h=r*l-a*a;if(h===0)return o.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,p=(r*u-a*c)*d;return o.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(t,e,n,s,o,r,a,c){return this.getBarycoord(t,e,n,s,Ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Ui.x),c.addScaledVector(r,Ui.y),c.addScaledVector(a,Ui.z),c)}static getInterpolatedAttribute(t,e,n,s,o,r){return Hc.setScalar(0),Gc.setScalar(0),Wc.setScalar(0),Hc.fromBufferAttribute(t,e),Gc.fromBufferAttribute(t,n),Wc.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Hc,o.x),r.addScaledVector(Gc,o.y),r.addScaledVector(Wc,o.z),r}static isFrontFacing(t,e,n,s){return si.subVectors(n,e),zi.subVectors(t,e),si.cross(zi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),si.cross(zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ai.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return ai.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;no.subVectors(s,n),io.subVectors(o,n),kc.subVectors(t,n);const c=no.dot(kc),l=io.dot(kc);if(c<=0&&l<=0)return e.copy(n);Bc.subVectors(t,s);const u=no.dot(Bc),h=io.dot(Bc);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return r=c/(c-u),e.copy(n).addScaledVector(no,r);Vc.subVectors(t,o);const f=no.dot(Vc),p=io.dot(Vc);if(p>=0&&f<=p)return e.copy(o);const x=f*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(io,a);const g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return Zu.subVectors(o,s),a=(h-u)/(h-u+(f-p)),e.copy(s).addScaledVector(Zu,a);const m=1/(g+x+d);return r=x*m,a=d*m,e.copy(n).addScaledVector(no,r).addScaledVector(io,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},jr={h:0,s:0,l:0};function Xc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=Mm(t,1),e=Ze(e,0,1),n=Ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Xc(r,o,t+1/3),this.g=Xc(r,o,t),this.b=Xc(r,o,t-1/3)}return me.toWorkingColorSpace(this,s),this}setStyle(t,e=Be){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=Sf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}copyLinearToSRGB(t){return this.r=Ao(t.r),this.g=Ao(t.g),this.b=Ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return me.fromWorkingColorSpace(hn.copy(this),t),Math.round(Ze(hn.r*255,0,255))*65536+Math.round(Ze(hn.g*255,0,255))*256+Math.round(Ze(hn.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,s=hn.g,o=hn.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let c,l;const u=(a+r)/2;if(a===r)c=0,l=0;else{const h=r-a;switch(l=u<=.5?h/(r+a):h/(2-r-a),r){case n:c=(s-o)/h+(s<o?6:0);break;case s:c=(o-n)/h+2;break;case o:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Be){me.fromWorkingColorSpace(hn.copy(this),t);const e=hn.r,n=hn.g,s=hn.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(os),this.setHSL(os.h+t,os.s+e,os.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(os),t.getHSL(jr);const n=Rc(os.h,jr.h,e),s=Rc(os.s,jr.s,e),o=Rc(os.l,jr.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Jt;Jt.NAMES=Sf;let Om=0;class Xs extends Gs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Wo(),this.name="",this.blending=Eo,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=zl,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Eo&&(n.blending=this.blending),this.side!==fs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nl&&(n.blendSrc=this.blendSrc),this.blendDst!==zl&&(n.blendDst=this.blendDst),this.blendEquation!==Ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Io&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Du&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class bi extends Xs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Wi=km();function km(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}const o=new Uint32Array(2048),r=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,o[c]=l|u}for(let c=1024;c<2048;++c)o[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)r[c]=c<<23;r[31]=1199570944,r[32]=2147483648;for(let c=33;c<63;++c)r[c]=2147483648+(c-32<<23);r[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:o,exponentTable:r,offsetTable:a}}function Bm(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Ze(i,-65504,65504),Wi.floatView[0]=i;const t=Wi.uint32View[0],e=t>>23&511;return Wi.baseTable[e]+((t&8388607)>>Wi.shiftTable[e])}function Vm(i){const t=i>>10;return Wi.uint32View[0]=Wi.mantissaTable[Wi.offsetTable[t]+(i&1023)]+Wi.exponentTable[t],Wi.floatView[0]}const Ku={toHalfFloat:Bm,fromHalfFloat:Vm},He=new A,Zr=new Ct;class Je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Nu,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zr.fromBufferAttribute(this,e),Zr.applyMatrix3(t),this.setXY(e,Zr.x,Zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=jo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),n=Tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),n=Tn(n,this.array),s=Tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),n=Tn(n,this.array),s=Tn(s,this.array),o=Tn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nu&&(t.usage=this.usage),t}}class wf extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bf extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hm=0;const qn=new re,$c=new Ke,so=new A,On=new ps,Qo=new ps,en=new A;class Le extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vf(t)?bf:wf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ce().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,n){return qn.makeTranslation(t,e,n),this.applyMatrix4(qn),this}scale(t,e,n){return qn.makeScale(t,e,n),this.applyMatrix4(qn),this}lookAt(t){return $c.lookAt(t),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new he(n,3))}else{for(let n=0,s=e.count;n<s;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];On.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Qo.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(On.min,Qo.min),On.expandByPoint(en),en.addVectors(On.max,Qo.max),On.expandByPoint(en)):(On.expandByPoint(Qo.min),On.expandByPoint(Qo.max))}On.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)en.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(en));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)en.fromBufferAttribute(a,l),c&&(so.fromBufferAttribute(t,l),en.add(so)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new A,c[P]=new A;const l=new A,u=new A,h=new A,d=new Ct,f=new Ct,p=new Ct,x=new A,g=new A;function m(P,b,w){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,w),d.fromBufferAttribute(o,P),f.fromBufferAttribute(o,b),p.fromBufferAttribute(o,w),u.sub(l),h.sub(l),f.sub(d),p.sub(d);const N=1/(f.x*p.y-p.x*f.y);isFinite(N)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(N),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(N),a[P].add(x),a[b].add(x),a[w].add(x),c[P].add(g),c[b].add(g),c[w].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,b=v.length;P<b;++P){const w=v[P],N=w.start,O=w.count;for(let U=N,V=N+O;U<V;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const y=new A,_=new A,L=new A,T=new A;function M(P){L.fromBufferAttribute(s,P),T.copy(L);const b=a[P];y.copy(b),y.sub(L.multiplyScalar(L.dot(b))).normalize(),_.crossVectors(T,b);const N=_.dot(c[P])<0?-1:1;r.setXYZW(P,y.x,y.y,y.z,N)}for(let P=0,b=v.length;P<b;++P){const w=v[P],N=w.start,O=w.count;for(let U=N,V=N+O;U<V;U+=3)M(t.getX(U+0)),M(t.getX(U+1)),M(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new A,o=new A,r=new A,a=new A,c=new A,l=new A,u=new A,h=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,p=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let m=0;m<u;m++)d[p++]=l[f++]}return new Je(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const o=t.morphAttributes;for(const l in o){const u=[],h=o[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,u=r.length;l<u;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ju=new re,xs=new pc,Kr=new Ws,Qu=new A,Jr=new A,Qr=new A,ta=new A,qc=new A,ea=new A,td=new A,na=new A;class Nt extends Ke{constructor(t=new Le,e=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){ea.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],h=o[c];u!==0&&(qc.fromBufferAttribute(h,t),r?ea.addScaledVector(qc,u):ea.addScaledVector(qc.sub(e),u))}e.add(ea)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(o),xs.copy(t.ray).recast(t.near),!(Kr.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Kr,Qu)===null||xs.origin.distanceToSquared(Qu)>(t.far-t.near)**2))&&(Ju.copy(o).invert(),xs.copy(t.ray).applyMatrix4(Ju),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xs)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,x=d.length;p<x;p++){const g=d[p],m=r[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,L=y;_<L;_+=3){const T=a.getX(_),M=a.getX(_+1),P=a.getX(_+2);s=ia(this,m,t,n,l,u,h,T,M,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const v=a.getX(g),y=a.getX(g+1),_=a.getX(g+2);s=ia(this,r,t,n,l,u,h,v,y,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let p=0,x=d.length;p<x;p++){const g=d[p],m=r[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,L=y;_<L;_+=3){const T=_,M=_+1,P=_+2;s=ia(this,m,t,n,l,u,h,T,M,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const v=g,y=g+1,_=g+2;s=ia(this,r,t,n,l,u,h,v,y,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Gm(i,t,e,n,s,o,r,a){let c;if(t.side===bn?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,t.side===fs,a),c===null)return null;na.copy(a),na.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(na);return l<e.near||l>e.far?null:{distance:l,point:na.clone(),object:i}}function ia(i,t,e,n,s,o,r,a,c,l){i.getVertexPosition(a,Jr),i.getVertexPosition(c,Qr),i.getVertexPosition(l,ta);const u=Gm(i,t,e,n,Jr,Qr,ta,td);if(u){const h=new A;ai.getBarycoord(td,Jr,Qr,ta,h),s&&(u.uv=ai.getInterpolatedAttribute(s,a,c,l,h,new Ct)),o&&(u.uv1=ai.getInterpolatedAttribute(o,a,c,l,h,new Ct)),r&&(u.normal=ai.getInterpolatedAttribute(r,a,c,l,h,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new A,materialIndex:0};ai.getNormal(Jr,Qr,ta,d.normal),u.face=d,u.barycoord=h}return u}class oe extends Le{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,n,e,t,r,o,0),p("z","y","x",1,-1,n,e,-t,r,o,1),p("x","z","y",1,1,t,n,e,s,r,2),p("x","z","y",1,-1,t,n,-e,s,r,3),p("x","y","z",1,-1,t,e,n,s,o,4),p("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(h,2));function p(x,g,m,v,y,_,L,T,M,P,b){const w=_/M,N=L/P,O=_/2,U=L/2,V=T/2,B=M+1,X=P+1;let Q=0,j=0;const pt=new A;for(let vt=0;vt<X;vt++){const Mt=vt*N-U;for(let lt=0;lt<B;lt++){const ht=lt*w-O;pt[x]=ht*v,pt[g]=Mt*y,pt[m]=V,l.push(pt.x,pt.y,pt.z),pt[x]=0,pt[g]=0,pt[m]=T>0?1:-1,u.push(pt.x,pt.y,pt.z),h.push(lt/M),h.push(1-vt/P),Q+=1}}for(let vt=0;vt<P;vt++)for(let Mt=0;Mt<M;Mt++){const lt=d+Mt+B*vt,ht=d+Mt+B*(vt+1),Y=d+(Mt+1)+B*(vt+1),I=d+(Mt+1)+B*vt;c.push(lt,ht,I),c.push(ht,Y,I),j+=6}a.addGroup(f,j,b),f+=j,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fo(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function yn(i){const t={};for(let e=0;e<i.length;e++){const n=Fo(i[e]);for(const s in n)t[s]=n[s]}return t}function Wm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ef(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}const Xm={clone:Fo,merge:yn};var $m=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends Xs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$m,this.fragmentShader=qm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fo(t.uniforms),this.uniformsGroups=Wm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Tf extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rs=new A,ed=new Ct,nd=new Ct;class Ln extends Tf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vh*2*Math.atan(Math.tan(Wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,e){return this.getViewBounds(t,ed,nd),e.subVectors(nd,ed)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Wa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const oo=-90,ro=1;class Ym extends Ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ln(oo,ro,t,e);s.layers=this.layers,this.add(s);const o=new Ln(oo,ro,t,e);o.layers=this.layers,this.add(o);const r=new Ln(oo,ro,t,e);r.layers=this.layers,this.add(r);const a=new Ln(oo,ro,t,e);a.layers=this.layers,this.add(a);const c=new Ln(oo,ro,t,e);c.layers=this.layers,this.add(c);const l=new Ln(oo,ro,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Yi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ja)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Af extends xn{constructor(t,e,n,s,o,r,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Do,super(t,e,n,s,o,r,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jm extends Ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Af(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:In}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new oe(5,5,5),o=new Qn({name:"CubemapFromEquirect",uniforms:Fo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:ls});o.uniforms.tEquirect.value=e;const r=new Nt(s,o),a=e.minFilter;return e.minFilter===Ns&&(e.minFilter=In),new Ym(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const Yc=new A,Zm=new A,Km=new ce;class Vi{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Yc.subVectors(n,e).cross(Zm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Yc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Km.getNormalMatrix(t),s=this.coplanarPoint(Yc).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new Ws,sa=new A;class mc{constructor(t=new Vi,e=new Vi,n=new Vi,s=new Vi,o=new Vi,r=new Vi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yi){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],p=s[9],x=s[10],g=s[11],m=s[12],v=s[13],y=s[14],_=s[15];if(n[0].setComponents(c-o,d-l,g-f,_-m).normalize(),n[1].setComponents(c+o,d+l,g+f,_+m).normalize(),n[2].setComponents(c+r,d+u,g+p,_+v).normalize(),n[3].setComponents(c-r,d-u,g-p,_-v).normalize(),n[4].setComponents(c-a,d-h,g-x,_-y).normalize(),e===Yi)n[5].setComponents(c+a,d+h,g+x,_+y).normalize();else if(e===Ja)n[5].setComponents(a,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(sa.x=s.normal.x>0?t.max.x:t.min.x,sa.y=s.normal.y>0?t.max.y:t.min.y,sa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rf(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Jm(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){const p=h[d],x=h[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){const x=h[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class Xe extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,f=[],p=[],x=[],g=[];for(let m=0;m<u;m++){const v=m*d-r;for(let y=0;y<l;y++){const _=y*h-o;p.push(_,-v,0),x.push(0,0,1),g.push(y/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){const y=v+l*m,_=v+l*(m+1),L=v+1+l*(m+1),T=v+1+l*m;f.push(y,_,T),f.push(_,L,T)}this.setIndex(f),this.setAttribute("position",new he(p,3)),this.setAttribute("normal",new he(x,3)),this.setAttribute("uv",new he(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.width,t.height,t.widthSegments,t.heightSegments)}}var Qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tg=`#ifdef USE_ALPHAHASH
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
#endif`,eg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ng=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ig=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,og=`#ifdef USE_AOMAP
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
#endif`,rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ag=`#ifdef USE_BATCHING
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
#endif`,cg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ug=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dg=`#ifdef USE_IRIDESCENCE
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
#endif`,fg=`#ifdef USE_BUMPMAP
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
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sg=`#define PI 3.141592653589793
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
} // validated`,wg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bg=`vec3 transformedNormal = objectNormal;
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
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lg=`#ifdef USE_ENVMAP
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
#endif`,Ig=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Ng=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
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
#endif`,Ug=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Og=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bg=`#ifdef USE_GRADIENTMAP
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
}`,Vg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wg=`uniform bool receiveShadow;
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
#endif`,Xg=`#ifdef USE_ENVMAP
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
#endif`,$g=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zg=`PhysicalMaterial material;
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
#endif`,Kg=`struct PhysicalMaterial {
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
}`,Jg=`
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
#endif`,Qg=`#if defined( RE_IndirectDiffuse )
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
#endif`,t1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,c1=`#if defined( USE_POINTS_UV )
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
#endif`,l1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p1=`#ifdef USE_MORPHTARGETS
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
#endif`,m1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y1=`#ifdef USE_NORMALMAP
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
#endif`,S1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,R1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,F1=`float getShadowMask() {
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
}`,O1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k1=`#ifdef USE_SKINNING
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
#endif`,B1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V1=`#ifdef USE_SKINNING
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
#endif`,H1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$1=`#ifdef USE_TRANSMISSION
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
#endif`,q1=`#ifdef USE_TRANSMISSION
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
#endif`,Y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q1=`uniform sampler2D t2D;
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
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ex=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`#include <common>
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
}`,ox=`#if DEPTH_PACKING == 3200
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
}`,rx=`#define DISTANCE
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
}`,ax=`#define DISTANCE
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`uniform float scale;
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
}`,ux=`uniform vec3 diffuse;
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
}`,dx=`#include <common>
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
}`,fx=`uniform vec3 diffuse;
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
}`,px=`#define LAMBERT
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
}`,mx=`#define LAMBERT
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
}`,gx=`#define MATCAP
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
}`,xx=`#define MATCAP
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
}`,vx=`#define NORMAL
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
}`,_x=`#define NORMAL
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
}`,Mx=`#define PHONG
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
}`,yx=`#define PHONG
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
}`,Sx=`#define STANDARD
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
}`,wx=`#define STANDARD
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
}`,bx=`#define TOON
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
}`,Ex=`#define TOON
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
}`,Tx=`uniform float size;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Rx=`#include <common>
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
}`,Cx=`uniform vec3 color;
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
}`,Px=`uniform float rotation;
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
}`,Lx=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:Qm,alphahash_pars_fragment:tg,alphamap_fragment:eg,alphamap_pars_fragment:ng,alphatest_fragment:ig,alphatest_pars_fragment:sg,aomap_fragment:og,aomap_pars_fragment:rg,batching_pars_vertex:ag,batching_vertex:cg,begin_vertex:lg,beginnormal_vertex:hg,bsdfs:ug,iridescence_fragment:dg,bumpmap_pars_fragment:fg,clipping_planes_fragment:pg,clipping_planes_pars_fragment:mg,clipping_planes_pars_vertex:gg,clipping_planes_vertex:xg,color_fragment:vg,color_pars_fragment:_g,color_pars_vertex:Mg,color_vertex:yg,common:Sg,cube_uv_reflection_fragment:wg,defaultnormal_vertex:bg,displacementmap_pars_vertex:Eg,displacementmap_vertex:Tg,emissivemap_fragment:Ag,emissivemap_pars_fragment:Rg,colorspace_fragment:Cg,colorspace_pars_fragment:Pg,envmap_fragment:Lg,envmap_common_pars_fragment:Ig,envmap_pars_fragment:Dg,envmap_pars_vertex:Ng,envmap_physical_pars_fragment:Xg,envmap_vertex:zg,fog_vertex:Ug,fog_pars_vertex:Fg,fog_fragment:Og,fog_pars_fragment:kg,gradientmap_pars_fragment:Bg,lightmap_pars_fragment:Vg,lights_lambert_fragment:Hg,lights_lambert_pars_fragment:Gg,lights_pars_begin:Wg,lights_toon_fragment:$g,lights_toon_pars_fragment:qg,lights_phong_fragment:Yg,lights_phong_pars_fragment:jg,lights_physical_fragment:Zg,lights_physical_pars_fragment:Kg,lights_fragment_begin:Jg,lights_fragment_maps:Qg,lights_fragment_end:t1,logdepthbuf_fragment:e1,logdepthbuf_pars_fragment:n1,logdepthbuf_pars_vertex:i1,logdepthbuf_vertex:s1,map_fragment:o1,map_pars_fragment:r1,map_particle_fragment:a1,map_particle_pars_fragment:c1,metalnessmap_fragment:l1,metalnessmap_pars_fragment:h1,morphinstance_vertex:u1,morphcolor_vertex:d1,morphnormal_vertex:f1,morphtarget_pars_vertex:p1,morphtarget_vertex:m1,normal_fragment_begin:g1,normal_fragment_maps:x1,normal_pars_fragment:v1,normal_pars_vertex:_1,normal_vertex:M1,normalmap_pars_fragment:y1,clearcoat_normal_fragment_begin:S1,clearcoat_normal_fragment_maps:w1,clearcoat_pars_fragment:b1,iridescence_pars_fragment:E1,opaque_fragment:T1,packing:A1,premultiplied_alpha_fragment:R1,project_vertex:C1,dithering_fragment:P1,dithering_pars_fragment:L1,roughnessmap_fragment:I1,roughnessmap_pars_fragment:D1,shadowmap_pars_fragment:N1,shadowmap_pars_vertex:z1,shadowmap_vertex:U1,shadowmask_pars_fragment:F1,skinbase_vertex:O1,skinning_pars_vertex:k1,skinning_vertex:B1,skinnormal_vertex:V1,specularmap_fragment:H1,specularmap_pars_fragment:G1,tonemapping_fragment:W1,tonemapping_pars_fragment:X1,transmission_fragment:$1,transmission_pars_fragment:q1,uv_pars_fragment:Y1,uv_pars_vertex:j1,uv_vertex:Z1,worldpos_vertex:K1,background_vert:J1,background_frag:Q1,backgroundCube_vert:tx,backgroundCube_frag:ex,cube_vert:nx,cube_frag:ix,depth_vert:sx,depth_frag:ox,distanceRGBA_vert:rx,distanceRGBA_frag:ax,equirect_vert:cx,equirect_frag:lx,linedashed_vert:hx,linedashed_frag:ux,meshbasic_vert:dx,meshbasic_frag:fx,meshlambert_vert:px,meshlambert_frag:mx,meshmatcap_vert:gx,meshmatcap_frag:xx,meshnormal_vert:vx,meshnormal_frag:_x,meshphong_vert:Mx,meshphong_frag:yx,meshphysical_vert:Sx,meshphysical_frag:wx,meshtoon_vert:bx,meshtoon_frag:Ex,points_vert:Tx,points_frag:Ax,shadow_vert:Rx,shadow_frag:Cx,sprite_vert:Px,sprite_frag:Lx},Lt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},yi={basic:{uniforms:yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:yn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:yn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:yn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:yn([Lt.points,Lt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:yn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:yn([Lt.common,Lt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:yn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:yn([Lt.sprite,Lt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:yn([Lt.common,Lt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:yn([Lt.lights,Lt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};yi.physical={uniforms:yn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const oa={r:0,b:0,g:0},_s=new ui,Ix=new re;function Dx(i,t,e,n,s,o,r){const a=new Jt(0);let c=o===!0?0:1,l,u,h=null,d=0,f=null;function p(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function x(v){let y=!1;const _=p(v);_===null?m(a,c):_&&_.isColor&&(m(_,1),y=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,y){const _=p(y);_&&(_.isCubeTexture||_.mapping===uc)?(u===void 0&&(u=new Nt(new oe(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Fo(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,T,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),_s.copy(y.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ix.makeRotationFromEuler(_s)),u.material.toneMapped=me.getTransfer(_.colorSpace)!==Ee,(h!==_||d!==_.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Nt(new Xe(2,2),new Qn({name:"BackgroundMaterial",uniforms:Fo(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=me.getTransfer(_.colorSpace)!==Ee,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,y){v.getRGB(oa,Ef(i)),n.buffers.color.setClear(oa.r,oa.g,oa.b,y,r)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,m(a,c)},render:x,addToRenderList:g}}function Nx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,r=!1;function a(w,N,O,U,V){let B=!1;const X=h(U,O,N);o!==X&&(o=X,l(o.object)),B=f(w,U,O,V),B&&p(w,U,O,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(B||r)&&(r=!1,_(w,N,O,U),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function u(w){return i.deleteVertexArray(w)}function h(w,N,O){const U=O.wireframe===!0;let V=n[w.id];V===void 0&&(V={},n[w.id]=V);let B=V[N.id];B===void 0&&(B={},V[N.id]=B);let X=B[U];return X===void 0&&(X=d(c()),B[U]=X),X}function d(w){const N=[],O=[],U=[];for(let V=0;V<e;V++)N[V]=0,O[V]=0,U[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:U,object:w,attributes:{},index:null}}function f(w,N,O,U){const V=o.attributes,B=N.attributes;let X=0;const Q=O.getAttributes();for(const j in Q)if(Q[j].location>=0){const vt=V[j];let Mt=B[j];if(Mt===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor)),vt===void 0||vt.attribute!==Mt||Mt&&vt.data!==Mt.data)return!0;X++}return o.attributesNum!==X||o.index!==U}function p(w,N,O,U){const V={},B=N.attributes;let X=0;const Q=O.getAttributes();for(const j in Q)if(Q[j].location>=0){let vt=B[j];vt===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(vt=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(vt=w.instanceColor));const Mt={};Mt.attribute=vt,vt&&vt.data&&(Mt.data=vt.data),V[j]=Mt,X++}o.attributes=V,o.attributesNum=X,o.index=U}function x(){const w=o.newAttributes;for(let N=0,O=w.length;N<O;N++)w[N]=0}function g(w){m(w,0)}function m(w,N){const O=o.newAttributes,U=o.enabledAttributes,V=o.attributeDivisors;O[w]=1,U[w]===0&&(i.enableVertexAttribArray(w),U[w]=1),V[w]!==N&&(i.vertexAttribDivisor(w,N),V[w]=N)}function v(){const w=o.newAttributes,N=o.enabledAttributes;for(let O=0,U=N.length;O<U;O++)N[O]!==w[O]&&(i.disableVertexAttribArray(O),N[O]=0)}function y(w,N,O,U,V,B,X){X===!0?i.vertexAttribIPointer(w,N,O,V,B):i.vertexAttribPointer(w,N,O,U,V,B)}function _(w,N,O,U){x();const V=U.attributes,B=O.getAttributes(),X=N.defaultAttributeValues;for(const Q in B){const j=B[Q];if(j.location>=0){let pt=V[Q];if(pt===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(pt=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(pt=w.instanceColor)),pt!==void 0){const vt=pt.normalized,Mt=pt.itemSize,lt=t.get(pt);if(lt===void 0)continue;const ht=lt.buffer,Y=lt.type,I=lt.bytesPerElement,z=Y===i.INT||Y===i.UNSIGNED_INT||pt.gpuType===Xh;if(pt.isInterleavedBufferAttribute){const k=pt.data,Z=k.stride,rt=pt.offset;if(k.isInstancedInterleavedBuffer){for(let ct=0;ct<j.locationSize;ct++)m(j.location+ct,k.meshPerAttribute);w.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ct=0;ct<j.locationSize;ct++)g(j.location+ct);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let ct=0;ct<j.locationSize;ct++)y(j.location+ct,Mt/j.locationSize,Y,vt,Z*I,(rt+Mt/j.locationSize*ct)*I,z)}else{if(pt.isInstancedBufferAttribute){for(let k=0;k<j.locationSize;k++)m(j.location+k,pt.meshPerAttribute);w.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let k=0;k<j.locationSize;k++)g(j.location+k);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let k=0;k<j.locationSize;k++)y(j.location+k,Mt/j.locationSize,Y,vt,Mt*I,Mt/j.locationSize*k*I,z)}}else if(X!==void 0){const vt=X[Q];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(j.location,vt);break;case 3:i.vertexAttrib3fv(j.location,vt);break;case 4:i.vertexAttrib4fv(j.location,vt);break;default:i.vertexAttrib1fv(j.location,vt)}}}}v()}function L(){P();for(const w in n){const N=n[w];for(const O in N){const U=N[O];for(const V in U)u(U[V].object),delete U[V];delete N[O]}delete n[w]}}function T(w){if(n[w.id]===void 0)return;const N=n[w.id];for(const O in N){const U=N[O];for(const V in U)u(U[V].object),delete U[V];delete N[O]}delete n[w.id]}function M(w){for(const N in n){const O=n[N];if(O[w.id]===void 0)continue;const U=O[w.id];for(const V in U)u(U[V].object),delete U[V];delete O[w.id]}}function P(){b(),r=!0,o!==s&&(o=s,l(o.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:M,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function zx(i,t,e){let n;function s(l){n=l}function o(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function r(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];e.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)r(l[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x]*d[x];e.update(p,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Ux(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const M=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(M){return!(M!==li&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const P=M===qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==Zi&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==wi&&!P)}function c(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=p>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:L,maxSamples:T}}function Fx(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new Vi,a=new ce,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!s||p===null||p.length===0||o&&!g)o?u(null):l();else{const v=o?0:n,y=v*4;let _=m.clippingState||null;c.value=_,_=u(p,d,y,f);for(let L=0;L!==y;++L)_[L]=e[L];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,p){const x=h!==null?h.length:0;let g=null;if(x!==0){if(g=c.value,p!==!0||g===null){const m=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,_=f;y!==x;++y,_+=4)r.copy(h[y]).applyMatrix4(v,a),r.normal.toArray(g,_),g[_+3]=r.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Ox(i){let t=new WeakMap;function e(r,a){return a===Gl?r.mapping=Do:a===Wl&&(r.mapping=No),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Gl||a===Wl)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new jm(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Cf extends Tf{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vo=4,id=[.125,.215,.35,.446,.526,.582],Ls=20,jc=new Cf,sd=new Jt;let Zc=null,Kc=0,Jc=0,Qc=!1;const Ts=(1+Math.sqrt(5))/2,ao=1/Ts,od=[new A(-Ts,ao,0),new A(Ts,ao,0),new A(-ao,0,Ts),new A(ao,0,Ts),new A(0,Ts,-ao),new A(0,Ts,ao),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class rd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Zc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zc,Kc,Jc),this._renderer.xr.enabled=Qc,t.scissorTest=!1,ra(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Do||t.mapping===No?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:qi,format:li,colorSpace:Go,depthBuffer:!1},s=ad(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ad(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kx(o)),this._blurMaterial=Bx(o,t,e)}return s}_compileMaterial(t){const e=new Nt(this._lodPlanes[0],t);this._renderer.compile(e,jc)}_sceneToCubeUV(t,e,n,s){const a=new Ln(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(sd),u.toneMapping=hs,u.autoClear=!1;const f=new bi({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),p=new Nt(new oe,f);let x=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(sd),x=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):v===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const y=this._cubeSize;ra(s,v*y,m>2?y:0,y,y),u.setRenderTarget(s),x&&u.render(p,a),u.render(t,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Do||t.mapping===No;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cd());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Nt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;ra(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,jc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=od[(s-o-1)%od.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Nt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Ls-1),x=o/p,g=isFinite(o)?1+Math.floor(u*x):Ls;g>Ls&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ls}`);const m=[];let v=0;for(let M=0;M<Ls;++M){const P=M/x,b=Math.exp(-P*P/2);m.push(b),M===0?v+=b:M<g&&(v+=2*b)}for(let M=0;M<m.length;M++)m[M]=m[M]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-n;const _=this._sizeLods[s],L=3*_*(s>y-vo?s-y+vo:0),T=4*(this._cubeSize-_);ra(e,L,T,3*_,2*_),c.setRenderTarget(e),c.render(h,jc)}}function kx(i){const t=[],e=[],n=[];let s=i;const o=i-vo+1+id.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>i-vo?c=id[r-i+vo-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,x=3,g=2,m=1,v=new Float32Array(x*p*f),y=new Float32Array(g*p*f),_=new Float32Array(m*p*f);for(let T=0;T<f;T++){const M=T%3*2/3-1,P=T>2?0:-1,b=[M,P,0,M+2/3,P,0,M+2/3,P+1,0,M,P,0,M+2/3,P+1,0,M,P+1,0];v.set(b,x*p*T),y.set(d,g*p*T);const w=[T,T,T,T,T,T];_.set(w,m*p*T)}const L=new Le;L.setAttribute("position",new Je(v,x)),L.setAttribute("uv",new Je(y,g)),L.setAttribute("faceIndex",new Je(_,m)),t.push(L),s>vo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ad(i,t,e){const n=new Ri(i,t,e);return n.texture.mapping=uc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ra(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Bx(i,t,e){const n=new Float32Array(Ls),s=new A(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function cd(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function ld(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function Jh(){return`

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
	`}function Vx(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Gl||c===Wl,u=c===Do||c===No;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new rd(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new rd(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Hx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&mr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Gx(i,t,e,n){const s={},o=new WeakMap;function r(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);for(const p in d.morphAttributes){const x=d.morphAttributes[p];for(let g=0,m=x.length;g<m;g++)t.remove(x[g])}d.removeEventListener("dispose",r),delete s[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const p in f){const x=f[p];for(let g=0,m=x.length;g<m;g++)t.update(x[g],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,p=h.attributes.position;let x=0;if(f!==null){const v=f.array;x=f.version;for(let y=0,_=v.length;y<_;y+=3){const L=v[y+0],T=v[y+1],M=v[y+2];d.push(L,T,T,M,M,L)}}else if(p!==void 0){const v=p.array;x=p.version;for(let y=0,_=v.length/3-1;y<_;y+=3){const L=y+0,T=y+1,M=y+2;d.push(L,T,T,M,M,L)}}else return;const g=new(vf(d)?bf:wf)(d,1);g.version=x;const m=o.get(h);m&&t.remove(m),o.set(h,g)}function u(h){const d=o.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return o.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Wx(i,t,e){let n;function s(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,f){i.drawElements(n,f,o,d*r),e.update(f,n,1)}function l(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,o,d*r,p),e.update(f,n,p))}function u(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,n,1)}function h(d,f,p,x){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)l(d[m]/r,f[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,o,d,0,x,0,p);let m=0;for(let v=0;v<p;v++)m+=f[v]*x[v];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Xx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $x(i,t,e){const n=new WeakMap,s=new Ue;function o(r,a,c){const l=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let w=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",w)};var f=w;d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;p===!0&&(_=1),x===!0&&(_=2),g===!0&&(_=3);let L=a.attributes.position.count*_,T=1;L>t.maxTextureSize&&(T=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const M=new Float32Array(L*T*4*h),P=new Mf(M,L,T,h);P.type=wi,P.needsUpdate=!0;const b=_*4;for(let N=0;N<h;N++){const O=m[N],U=v[N],V=y[N],B=L*T*4*N;for(let X=0;X<O.count;X++){const Q=X*b;p===!0&&(s.fromBufferAttribute(O,X),M[B+Q+0]=s.x,M[B+Q+1]=s.y,M[B+Q+2]=s.z,M[B+Q+3]=0),x===!0&&(s.fromBufferAttribute(U,X),M[B+Q+4]=s.x,M[B+Q+5]=s.y,M[B+Q+6]=s.z,M[B+Q+7]=0),g===!0&&(s.fromBufferAttribute(V,X),M[B+Q+8]=s.x,M[B+Q+9]=s.y,M[B+Q+10]=s.z,M[B+Q+11]=V.itemSize===4?s.w:1)}}d={count:h,texture:P,size:new Ct(L,T)},n.set(a,d),a.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const x=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function qx(i,t,e,n){let s=new WeakMap;function o(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class Qh extends xn{constructor(t,e,n,s,o,r,a,c,l,u=To){if(u!==To&&u!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===To&&(n=Bs),n===void 0&&u===Uo&&(n=zo),super(null,s,o,r,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Wn,this.minFilter=c!==void 0?c:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Pf=new xn,hd=new Qh(1,1),Lf=new Mf,If=new Pm,Df=new Af,ud=[],dd=[],fd=new Float32Array(16),pd=new Float32Array(9),md=new Float32Array(4);function Xo(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=ud[s];if(o===void 0&&(o=new Float32Array(s),ud[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function tn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function gc(i,t){let e=dd[t];e===void 0&&(e=new Int32Array(t),dd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Yx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2fv(this.addr,t),tn(e,t)}}function Zx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;i.uniform3fv(this.addr,t),tn(e,t)}}function Kx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4fv(this.addr,t),tn(e,t)}}function Jx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;md.set(n),i.uniformMatrix2fv(this.addr,!1,md),tn(e,n)}}function Qx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;pd.set(n),i.uniformMatrix3fv(this.addr,!1,pd),tn(e,n)}}function tv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;fd.set(n),i.uniformMatrix4fv(this.addr,!1,fd),tn(e,n)}}function ev(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function nv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2iv(this.addr,t),tn(e,t)}}function iv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3iv(this.addr,t),tn(e,t)}}function sv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4iv(this.addr,t),tn(e,t)}}function ov(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2uiv(this.addr,t),tn(e,t)}}function av(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3uiv(this.addr,t),tn(e,t)}}function cv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4uiv(this.addr,t),tn(e,t)}}function lv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(hd.compareFunction=xf,o=hd):o=Pf,e.setTexture2D(t||o,s)}function hv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||If,s)}function uv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Df,s)}function dv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Lf,s)}function fv(i){switch(i){case 5126:return Yx;case 35664:return jx;case 35665:return Zx;case 35666:return Kx;case 35674:return Jx;case 35675:return Qx;case 35676:return tv;case 5124:case 35670:return ev;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return sv;case 5125:return ov;case 36294:return rv;case 36295:return av;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return uv;case 36289:case 36303:case 36311:case 36292:return dv}}function pv(i,t){i.uniform1fv(this.addr,t)}function mv(i,t){const e=Xo(t,this.size,2);i.uniform2fv(this.addr,e)}function gv(i,t){const e=Xo(t,this.size,3);i.uniform3fv(this.addr,e)}function xv(i,t){const e=Xo(t,this.size,4);i.uniform4fv(this.addr,e)}function vv(i,t){const e=Xo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _v(i,t){const e=Xo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Mv(i,t){const e=Xo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yv(i,t){i.uniform1iv(this.addr,t)}function Sv(i,t){i.uniform2iv(this.addr,t)}function wv(i,t){i.uniform3iv(this.addr,t)}function bv(i,t){i.uniform4iv(this.addr,t)}function Ev(i,t){i.uniform1uiv(this.addr,t)}function Tv(i,t){i.uniform2uiv(this.addr,t)}function Av(i,t){i.uniform3uiv(this.addr,t)}function Rv(i,t){i.uniform4uiv(this.addr,t)}function Cv(i,t,e){const n=this.cache,s=t.length,o=gc(e,s);Qe(n,o)||(i.uniform1iv(this.addr,o),tn(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Pf,o[r])}function Pv(i,t,e){const n=this.cache,s=t.length,o=gc(e,s);Qe(n,o)||(i.uniform1iv(this.addr,o),tn(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||If,o[r])}function Lv(i,t,e){const n=this.cache,s=t.length,o=gc(e,s);Qe(n,o)||(i.uniform1iv(this.addr,o),tn(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Df,o[r])}function Iv(i,t,e){const n=this.cache,s=t.length,o=gc(e,s);Qe(n,o)||(i.uniform1iv(this.addr,o),tn(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Lf,o[r])}function Dv(i){switch(i){case 5126:return pv;case 35664:return mv;case 35665:return gv;case 35666:return xv;case 35674:return vv;case 35675:return _v;case 35676:return Mv;case 5124:case 35670:return yv;case 35667:case 35671:return Sv;case 35668:case 35672:return wv;case 35669:case 35673:return bv;case 5125:return Ev;case 36294:return Tv;case 36295:return Av;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return Cv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Lv;case 36289:case 36303:case 36311:case 36292:return Iv}}class Nv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fv(e.type)}}class zv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dv(e.type)}}class Uv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const tl=/(\w+)(\])?(\[|\.)?/g;function gd(i,t){i.seq.push(t),i.map[t.id]=t}function Fv(i,t,e){const n=i.name,s=n.length;for(tl.lastIndex=0;;){const o=tl.exec(n),r=tl.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){gd(e,l===void 0?new Nv(a,i,t):new zv(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Uv(a),gd(e,h)),e=h}}}class Xa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);Fv(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function xd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Ov=37297;let kv=0;function Bv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const vd=new ce;function Vv(i){me._getMatrix(vd,me.workingColorSpace,i);const t=`mat3( ${vd.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case fc:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function _d(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Bv(i.getShaderSource(t),r)}else return s}function Hv(i,t){const e=Vv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Gv(i,t){let e;switch(t){case im:e="Linear";break;case sm:e="Reinhard";break;case om:e="Cineon";break;case rf:e="ACESFilmic";break;case am:e="AgX";break;case cm:e="Neutral";break;case rm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const aa=new A;function Wv(){me.getLuminanceCoefficients(aa);const i=aa.x.toFixed(4),t=aa.y.toFixed(4),e=aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function $v(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function gr(i){return i!==""}function Md(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Yv=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(i){return i.replace(Yv,Zv)}const jv=new Map;function Zv(i,t){let e=le[t];if(e===void 0){const n=jv.get(t);if(n!==void 0)e=le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _h(e)}const Kv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sd(i){return i.replace(Kv,Jv)}function Jv(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function wd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Qv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===sf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ki&&(t="SHADOWMAP_TYPE_VSM"),t}function t_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Do:case No:t="ENVMAP_TYPE_CUBE";break;case uc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function e_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case No:t="ENVMAP_MODE_REFRACTION";break}return t}function n_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case of:t="ENVMAP_BLENDING_MULTIPLY";break;case em:t="ENVMAP_BLENDING_MIX";break;case nm:t="ENVMAP_BLENDING_ADD";break}return t}function i_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function s_(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=Qv(e),l=t_(e),u=e_(e),h=n_(e),d=i_(e),f=Xv(e),p=$v(o),x=s.createProgram();let g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(gr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(gr).join(`
`),m.length>0&&(m+=`
`)):(g=[wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),m=[wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hs?"#define TONE_MAPPING":"",e.toneMapping!==hs?le.tonemapping_pars_fragment:"",e.toneMapping!==hs?Gv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,Hv("linearToOutputTexel",e.outputColorSpace),Wv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gr).join(`
`)),r=_h(r),r=Md(r,e),r=yd(r,e),a=_h(a),a=Md(a,e),a=yd(a,e),r=Sd(r),a=Sd(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=v+g+r,_=v+m+a,L=xd(s,s.VERTEX_SHADER,y),T=xd(s,s.FRAGMENT_SHADER,_);s.attachShader(x,L),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function M(N){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(x).trim(),U=s.getShaderInfoLog(L).trim(),V=s.getShaderInfoLog(T).trim();let B=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,L,T);else{const Q=_d(s,L,"vertex"),j=_d(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+O+`
`+Q+`
`+j)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(U===""||V==="")&&(X=!1);X&&(N.diagnostics={runnable:B,programLog:O,vertexShader:{log:U,prefix:g},fragmentShader:{log:V,prefix:m}})}s.deleteShader(L),s.deleteShader(T),P=new Xa(s,x),b=qv(s,x)}let P;this.getUniforms=function(){return P===void 0&&M(this),P};let b;this.getAttributes=function(){return b===void 0&&M(this),b};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(x,Ov)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=T,this}let o_=0;class r_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new a_(t),e.set(t,n)),n}}class a_{constructor(t){this.id=o_++,this.code=t,this.usedTimes=0}}function c_(i,t,e,n,s,o,r){const a=new yf,c=new r_,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,w,N,O,U){const V=O.fog,B=U.geometry,X=b.isMeshStandardMaterial?O.environment:null,Q=(b.isMeshStandardMaterial?e:t).get(b.envMap||X),j=Q&&Q.mapping===uc?Q.image.height:null,pt=p[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const vt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Mt=vt!==void 0?vt.length:0;let lt=0;B.morphAttributes.position!==void 0&&(lt=1),B.morphAttributes.normal!==void 0&&(lt=2),B.morphAttributes.color!==void 0&&(lt=3);let ht,Y,I,z;if(pt){const Rt=yi[pt];ht=Rt.vertexShader,Y=Rt.fragmentShader}else ht=b.vertexShader,Y=b.fragmentShader,c.update(b),I=c.getVertexShaderID(b),z=c.getFragmentShaderID(b);const k=i.getRenderTarget(),Z=i.state.buffers.depth.getReversed(),rt=U.isInstancedMesh===!0,ct=U.isBatchedMesh===!0,dt=!!b.map,ot=!!b.matcap,wt=!!Q,F=!!b.aoMap,St=!!b.lightMap,Gt=!!b.bumpMap,Yt=!!b.normalMap,zt=!!b.displacementMap,se=!!b.emissiveMap,Ut=!!b.metalnessMap,D=!!b.roughnessMap,E=b.anisotropy>0,q=b.clearcoat>0,ft=b.dispersion>0,mt=b.iridescence>0,ut=b.sheen>0,Vt=b.transmission>0,At=E&&!!b.anisotropyMap,yt=q&&!!b.clearcoatMap,Zt=q&&!!b.clearcoatNormalMap,xt=q&&!!b.clearcoatRoughnessMap,It=mt&&!!b.iridescenceMap,Ht=mt&&!!b.iridescenceThicknessMap,gt=ut&&!!b.sheenColorMap,tt=ut&&!!b.sheenRoughnessMap,bt=!!b.specularMap,Dt=!!b.specularColorMap,kt=!!b.specularIntensityMap,C=Vt&&!!b.transmissionMap,at=Vt&&!!b.thicknessMap,$=!!b.gradientMap,st=!!b.alphaMap,_t=b.alphaTest>0,K=!!b.alphaHash,Et=!!b.extensions;let Wt=hs;b.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Wt=i.toneMapping);const ee={shaderID:pt,shaderType:b.type,shaderName:b.name,vertexShader:ht,fragmentShader:Y,defines:b.defines,customVertexShaderID:I,customFragmentShaderID:z,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ct,batchingColor:ct&&U._colorsTexture!==null,instancing:rt,instancingColor:rt&&U.instanceColor!==null,instancingMorph:rt&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:k===null?i.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Go,alphaToCoverage:!!b.alphaToCoverage,map:dt,matcap:ot,envMap:wt,envMapMode:wt&&Q.mapping,envMapCubeUVHeight:j,aoMap:F,lightMap:St,bumpMap:Gt,normalMap:Yt,displacementMap:d&&zt,emissiveMap:se,normalMapObjectSpace:Yt&&b.normalMapType===dm,normalMapTangentSpace:Yt&&b.normalMapType===gf,metalnessMap:Ut,roughnessMap:D,anisotropy:E,anisotropyMap:At,clearcoat:q,clearcoatMap:yt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:xt,dispersion:ft,iridescence:mt,iridescenceMap:It,iridescenceThicknessMap:Ht,sheen:ut,sheenColorMap:gt,sheenRoughnessMap:tt,specularMap:bt,specularColorMap:Dt,specularIntensityMap:kt,transmission:Vt,transmissionMap:C,thicknessMap:at,gradientMap:$,opaque:b.transparent===!1&&b.blending===Eo&&b.alphaToCoverage===!1,alphaMap:st,alphaTest:_t,alphaHash:K,combine:b.combine,mapUv:dt&&x(b.map.channel),aoMapUv:F&&x(b.aoMap.channel),lightMapUv:St&&x(b.lightMap.channel),bumpMapUv:Gt&&x(b.bumpMap.channel),normalMapUv:Yt&&x(b.normalMap.channel),displacementMapUv:zt&&x(b.displacementMap.channel),emissiveMapUv:se&&x(b.emissiveMap.channel),metalnessMapUv:Ut&&x(b.metalnessMap.channel),roughnessMapUv:D&&x(b.roughnessMap.channel),anisotropyMapUv:At&&x(b.anisotropyMap.channel),clearcoatMapUv:yt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:tt&&x(b.sheenRoughnessMap.channel),specularMapUv:bt&&x(b.specularMap.channel),specularColorMapUv:Dt&&x(b.specularColorMap.channel),specularIntensityMapUv:kt&&x(b.specularIntensityMap.channel),transmissionMapUv:C&&x(b.transmissionMap.channel),thicknessMapUv:at&&x(b.thicknessMap.channel),alphaMapUv:st&&x(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Yt||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(dt||st),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Z,skinning:U.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:lt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:dt&&b.map.isVideoTexture===!0&&me.getTransfer(b.map.colorSpace)===Ee,decodeVideoTextureEmissive:se&&b.emissiveMap.isVideoTexture===!0&&me.getTransfer(b.emissiveMap.colorSpace)===Ee,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ze,flipSided:b.side===bn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Et&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&b.extensions.multiDraw===!0||ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ee.vertexUv1s=l.has(1),ee.vertexUv2s=l.has(2),ee.vertexUv3s=l.has(3),l.clear(),ee}function m(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const N in b.defines)w.push(N),w.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(v(w,b),y(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function v(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function y(b,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){const w=p[b.type];let N;if(w){const O=yi[w];N=Xm.clone(O.uniforms)}else N=b.uniforms;return N}function L(b,w){let N;for(let O=0,U=u.length;O<U;O++){const V=u[O];if(V.cacheKey===w){N=V,++N.usedTimes;break}}return N===void 0&&(N=new s_(i,w,b,o),u.push(N)),N}function T(b){if(--b.usedTimes===0){const w=u.indexOf(b);u[w]=u[u.length-1],u.pop(),b.destroy()}}function M(b){c.remove(b)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:L,releaseProgram:T,releaseShaderCache:M,programs:u,dispose:P}}function l_(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,c){i.get(r)[a]=c}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function h_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function bd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ed(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(h,d,f,p,x,g){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:x,group:g},i[t]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=x,m.group=g),t++,m}function a(h,d,f,p,x,g){const m=r(h,d,f,p,x,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function c(h,d,f,p,x,g){const m=r(h,d,f,p,x,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function l(h,d){e.length>1&&e.sort(h||h_),n.length>1&&n.sort(d||bd),s.length>1&&s.sort(d||bd)}function u(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:c,finish:u,sort:l}}function u_(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Ed,i.set(n,[r])):s>=o.length?(r=new Ed,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function d_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Jt};break;case"SpotLight":e={position:new A,direction:new A,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function f_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let p_=0;function m_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function g_(i){const t=new d_,e=f_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const s=new A,o=new re,r=new re;function a(l){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,v=0,y=0,_=0,L=0,T=0,M=0;l.sort(m_);for(let b=0,w=l.length;b<w;b++){const N=l[b],O=N.color,U=N.intensity,V=N.distance,B=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=O.r*U,h+=O.g*U,d+=O.b*U;else if(N.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(N.sh.coefficients[X],U);M++}else if(N.isDirectionalLight){const X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,j=e.get(N);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=N.shadow.matrix,v++}n.directional[f]=X,f++}else if(N.isSpotLight){const X=t.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(O).multiplyScalar(U),X.distance=V,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,n.spot[x]=X;const Q=N.shadow;if(N.map&&(n.spotLightMap[L]=N.map,L++,Q.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[x]=Q.matrix,N.castShadow){const j=e.get(N);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=B,_++}x++}else if(N.isRectAreaLight){const X=t.get(N);X.color.copy(O).multiplyScalar(U),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),n.rectArea[g]=X,g++}else if(N.isPointLight){const X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),X.distance=N.distance,X.decay=N.decay,N.castShadow){const Q=N.shadow,j=e.get(N);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=B,n.pointShadowMatrix[p]=N.shadow.matrix,y++}n.point[p]=X,p++}else if(N.isHemisphereLight){const X=t.get(N);X.skyColor.copy(N.color).multiplyScalar(U),X.groundColor.copy(N.groundColor).multiplyScalar(U),n.hemi[m]=X,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==p||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==m||P.numDirectionalShadows!==v||P.numPointShadows!==y||P.numSpotShadows!==_||P.numSpotMaps!==L||P.numLightProbes!==M)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=M,P.directionalLength=f,P.pointLength=p,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=m,P.numDirectionalShadows=v,P.numPointShadows=y,P.numSpotShadows=_,P.numSpotMaps=L,P.numLightProbes=M,n.version=p_++)}function c(l,u){let h=0,d=0,f=0,p=0,x=0;const g=u.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){const y=l[m];if(y.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),h++}else if(y.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const _=n.rectArea[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),r.identity(),o.copy(y.matrixWorld),o.premultiply(g),r.extractRotation(o),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),p++}else if(y.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function Td(i){const t=new g_(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function o(u){e.push(u)}function r(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function x_(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Td(i),t.set(s,[a])):o>=r.length?(a=new Td(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class v_ extends Xs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class __ extends Xs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const M_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y_=`uniform sampler2D shadow_pass;
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
}`;function S_(i,t,e){let n=new mc;const s=new Ct,o=new Ct,r=new Ue,a=new v_({depthPacking:um}),c=new __,l={},u=e.maxTextureSize,h={[fs]:bn,[bn]:fs,[ze]:ze},d=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:M_,fragmentShader:y_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Le;p.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Nt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nf;let m=this.type;this.render=function(T,M,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const b=i.getRenderTarget(),w=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(ls),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=m!==ki&&this.type===ki,V=m===ki&&this.type!==ki;for(let B=0,X=T.length;B<X;B++){const Q=T[B],j=Q.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const pt=j.getFrameExtents();if(s.multiply(pt),o.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/pt.x),s.x=o.x*pt.x,j.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/pt.y),s.y=o.y*pt.y,j.mapSize.y=o.y)),j.map===null||U===!0||V===!0){const Mt=this.type!==ki?{minFilter:Wn,magFilter:Wn}:{};j.map!==null&&j.map.dispose(),j.map=new Ri(s.x,s.y,Mt),j.map.texture.name=Q.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const vt=j.getViewportCount();for(let Mt=0;Mt<vt;Mt++){const lt=j.getViewport(Mt);r.set(o.x*lt.x,o.y*lt.y,o.x*lt.z,o.y*lt.w),O.viewport(r),j.updateMatrices(Q,Mt),n=j.getFrustum(),_(M,P,j.camera,Q,this.type)}j.isPointLightShadow!==!0&&this.type===ki&&v(j,P),j.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(b,w,N)};function v(T,M){const P=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ri(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(M,null,P,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(M,null,P,f,x,null)}function y(T,M,P,b){let w=null;const N=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)w=N;else if(w=P.isPointLight===!0?c:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const O=w.uuid,U=M.uuid;let V=l[O];V===void 0&&(V={},l[O]=V);let B=V[U];B===void 0&&(B=w.clone(),V[U]=B,M.addEventListener("dispose",L)),w=B}if(w.visible=M.visible,w.wireframe=M.wireframe,b===ki?w.side=M.shadowSide!==null?M.shadowSide:M.side:w.side=M.shadowSide!==null?M.shadowSide:h[M.side],w.alphaMap=M.alphaMap,w.alphaTest=M.alphaTest,w.map=M.map,w.clipShadows=M.clipShadows,w.clippingPlanes=M.clippingPlanes,w.clipIntersection=M.clipIntersection,w.displacementMap=M.displacementMap,w.displacementScale=M.displacementScale,w.displacementBias=M.displacementBias,w.wireframeLinewidth=M.wireframeLinewidth,w.linewidth=M.linewidth,P.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const O=i.properties.get(w);O.light=P}return w}function _(T,M,P,b,w){if(T.visible===!1)return;if(T.layers.test(M.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===ki)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const U=t.update(T),V=T.material;if(Array.isArray(V)){const B=U.groups;for(let X=0,Q=B.length;X<Q;X++){const j=B[X],pt=V[j.materialIndex];if(pt&&pt.visible){const vt=y(T,pt,b,w);T.onBeforeShadow(i,T,M,P,U,vt,j),i.renderBufferDirect(P,null,U,vt,T,j),T.onAfterShadow(i,T,M,P,U,vt,j)}}}else if(V.visible){const B=y(T,V,b,w);T.onBeforeShadow(i,T,M,P,U,B,null),i.renderBufferDirect(P,null,U,B,T,null),T.onAfterShadow(i,T,M,P,U,B,null)}}const O=T.children;for(let U=0,V=O.length;U<V;U++)_(O[U],M,P,b,w)}function L(T){T.target.removeEventListener("dispose",L);for(const P in l){const b=l[P],w=T.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}const w_={[Ul]:Fl,[Ol]:Vl,[kl]:Hl,[Io]:Bl,[Fl]:Ul,[Vl]:Ol,[Hl]:kl,[Bl]:Io};function b_(i,t){function e(){let C=!1;const at=new Ue;let $=null;const st=new Ue(0,0,0,0);return{setMask:function(_t){$!==_t&&!C&&(i.colorMask(_t,_t,_t,_t),$=_t)},setLocked:function(_t){C=_t},setClear:function(_t,K,Et,Wt,ee){ee===!0&&(_t*=Wt,K*=Wt,Et*=Wt),at.set(_t,K,Et,Wt),st.equals(at)===!1&&(i.clearColor(_t,K,Et,Wt),st.copy(at))},reset:function(){C=!1,$=null,st.set(-1,0,0,0)}}}function n(){let C=!1,at=!1,$=null,st=null,_t=null;return{setReversed:function(K){if(at!==K){const Et=t.get("EXT_clip_control");at?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT);const Wt=_t;_t=null,this.setClear(Wt)}at=K},getReversed:function(){return at},setTest:function(K){K?k(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(K){$!==K&&!C&&(i.depthMask(K),$=K)},setFunc:function(K){if(at&&(K=w_[K]),st!==K){switch(K){case Ul:i.depthFunc(i.NEVER);break;case Fl:i.depthFunc(i.ALWAYS);break;case Ol:i.depthFunc(i.LESS);break;case Io:i.depthFunc(i.LEQUAL);break;case kl:i.depthFunc(i.EQUAL);break;case Bl:i.depthFunc(i.GEQUAL);break;case Vl:i.depthFunc(i.GREATER);break;case Hl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=K}},setLocked:function(K){C=K},setClear:function(K){_t!==K&&(at&&(K=1-K),i.clearDepth(K),_t=K)},reset:function(){C=!1,$=null,st=null,_t=null,at=!1}}}function s(){let C=!1,at=null,$=null,st=null,_t=null,K=null,Et=null,Wt=null,ee=null;return{setTest:function(Rt){C||(Rt?k(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(Rt){at!==Rt&&!C&&(i.stencilMask(Rt),at=Rt)},setFunc:function(Rt,ue,ge){($!==Rt||st!==ue||_t!==ge)&&(i.stencilFunc(Rt,ue,ge),$=Rt,st=ue,_t=ge)},setOp:function(Rt,ue,ge){(K!==Rt||Et!==ue||Wt!==ge)&&(i.stencilOp(Rt,ue,ge),K=Rt,Et=ue,Wt=ge)},setLocked:function(Rt){C=Rt},setClear:function(Rt){ee!==Rt&&(i.clearStencil(Rt),ee=Rt)},reset:function(){C=!1,at=null,$=null,st=null,_t=null,K=null,Et=null,Wt=null,ee=null}}}const o=new e,r=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,v=null,y=null,_=null,L=null,T=null,M=new Jt(0,0,0),P=0,b=!1,w=null,N=null,O=null,U=null,V=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Q=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=Q>=1):j.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=Q>=2);let pt=null,vt={};const Mt=i.getParameter(i.SCISSOR_BOX),lt=i.getParameter(i.VIEWPORT),ht=new Ue().fromArray(Mt),Y=new Ue().fromArray(lt);function I(C,at,$,st){const _t=new Uint8Array(4),K=i.createTexture();i.bindTexture(C,K),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<$;Et++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(at+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return K}const z={};z[i.TEXTURE_2D]=I(i.TEXTURE_2D,i.TEXTURE_2D,1),z[i.TEXTURE_CUBE_MAP]=I(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[i.TEXTURE_2D_ARRAY]=I(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),z[i.TEXTURE_3D]=I(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),k(i.DEPTH_TEST),r.setFunc(Io),Gt(!1),Yt(Cu),k(i.CULL_FACE),F(ls);function k(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function Z(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function rt(C,at){return h[C]!==at?(i.bindFramebuffer(C,at),h[C]=at,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=at),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=at),!0):!1}function ct(C,at){let $=f,st=!1;if(C){$=d.get(at),$===void 0&&($=[],d.set(at,$));const _t=C.textures;if($.length!==_t.length||$[0]!==i.COLOR_ATTACHMENT0){for(let K=0,Et=_t.length;K<Et;K++)$[K]=i.COLOR_ATTACHMENT0+K;$.length=_t.length,st=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,st=!0);st&&i.drawBuffers($)}function dt(C){return p!==C?(i.useProgram(C),p=C,!0):!1}const ot={[Ps]:i.FUNC_ADD,[Op]:i.FUNC_SUBTRACT,[kp]:i.FUNC_REVERSE_SUBTRACT};ot[Bp]=i.MIN,ot[Vp]=i.MAX;const wt={[Hp]:i.ZERO,[Gp]:i.ONE,[Wp]:i.SRC_COLOR,[Nl]:i.SRC_ALPHA,[Zp]:i.SRC_ALPHA_SATURATE,[Yp]:i.DST_COLOR,[$p]:i.DST_ALPHA,[Xp]:i.ONE_MINUS_SRC_COLOR,[zl]:i.ONE_MINUS_SRC_ALPHA,[jp]:i.ONE_MINUS_DST_COLOR,[qp]:i.ONE_MINUS_DST_ALPHA,[Kp]:i.CONSTANT_COLOR,[Jp]:i.ONE_MINUS_CONSTANT_COLOR,[Qp]:i.CONSTANT_ALPHA,[tm]:i.ONE_MINUS_CONSTANT_ALPHA};function F(C,at,$,st,_t,K,Et,Wt,ee,Rt){if(C===ls){x===!0&&(Z(i.BLEND),x=!1);return}if(x===!1&&(k(i.BLEND),x=!0),C!==Fp){if(C!==g||Rt!==b){if((m!==Ps||_!==Ps)&&(i.blendEquation(i.FUNC_ADD),m=Ps,_=Ps),Rt)switch(C){case Eo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pu:i.blendFunc(i.ONE,i.ONE);break;case Lu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Iu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Eo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Iu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}v=null,y=null,L=null,T=null,M.set(0,0,0),P=0,g=C,b=Rt}return}_t=_t||at,K=K||$,Et=Et||st,(at!==m||_t!==_)&&(i.blendEquationSeparate(ot[at],ot[_t]),m=at,_=_t),($!==v||st!==y||K!==L||Et!==T)&&(i.blendFuncSeparate(wt[$],wt[st],wt[K],wt[Et]),v=$,y=st,L=K,T=Et),(Wt.equals(M)===!1||ee!==P)&&(i.blendColor(Wt.r,Wt.g,Wt.b,ee),M.copy(Wt),P=ee),g=C,b=!1}function St(C,at){C.side===ze?Z(i.CULL_FACE):k(i.CULL_FACE);let $=C.side===bn;at&&($=!$),Gt($),C.blending===Eo&&C.transparent===!1?F(ls):F(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),o.setMask(C.colorWrite);const st=C.stencilWrite;a.setTest(st),st&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),se(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(C){w!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),w=C)}function Yt(C){C!==zp?(k(i.CULL_FACE),C!==N&&(C===Cu?i.cullFace(i.BACK):C===Up?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),N=C}function zt(C){C!==O&&(X&&i.lineWidth(C),O=C)}function se(C,at,$){C?(k(i.POLYGON_OFFSET_FILL),(U!==at||V!==$)&&(i.polygonOffset(at,$),U=at,V=$)):Z(i.POLYGON_OFFSET_FILL)}function Ut(C){C?k(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function D(C){C===void 0&&(C=i.TEXTURE0+B-1),pt!==C&&(i.activeTexture(C),pt=C)}function E(C,at,$){$===void 0&&(pt===null?$=i.TEXTURE0+B-1:$=pt);let st=vt[$];st===void 0&&(st={type:void 0,texture:void 0},vt[$]=st),(st.type!==C||st.texture!==at)&&(pt!==$&&(i.activeTexture($),pt=$),i.bindTexture(C,at||z[C]),st.type=C,st.texture=at)}function q(){const C=vt[pt];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ft(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ut(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Vt(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function At(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xt(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function It(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ht(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function gt(C){ht.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),ht.copy(C))}function tt(C){Y.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Y.copy(C))}function bt(C,at){let $=l.get(at);$===void 0&&($=new WeakMap,l.set(at,$));let st=$.get(C);st===void 0&&(st=i.getUniformBlockIndex(at,C.name),$.set(C,st))}function Dt(C,at){const st=l.get(at).get(C);c.get(at)!==st&&(i.uniformBlockBinding(at,st,C.__bindingPointIndex),c.set(at,st))}function kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},pt=null,vt={},h={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,v=null,y=null,_=null,L=null,T=null,M=new Jt(0,0,0),P=0,b=!1,w=null,N=null,O=null,U=null,V=null,ht.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:k,disable:Z,bindFramebuffer:rt,drawBuffers:ct,useProgram:dt,setBlending:F,setMaterial:St,setFlipSided:Gt,setCullFace:Yt,setLineWidth:zt,setPolygonOffset:se,setScissorTest:Ut,activeTexture:D,bindTexture:E,unbindTexture:q,compressedTexImage2D:ft,compressedTexImage3D:mt,texImage2D:It,texImage3D:Ht,updateUBOMapping:bt,uniformBlockBinding:Dt,texStorage2D:Zt,texStorage3D:xt,texSubImage2D:ut,texSubImage3D:Vt,compressedTexSubImage2D:At,compressedTexSubImage3D:yt,scissor:gt,viewport:tt,reset:kt}}function Ad(i,t,e,n){const s=E_(n);switch(e){case uf:return i*t;case ff:return i*t;case pf:return i*t*2;case dc:return i*t/s.components*s.byteLength;case Yh:return i*t/s.components*s.byteLength;case jh:return i*t*2/s.components*s.byteLength;case Zh:return i*t*2/s.components*s.byteLength;case df:return i*t*3/s.components*s.byteLength;case li:return i*t*4/s.components*s.byteLength;case Kh:return i*t*4/s.components*s.byteLength;case ka:case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Va:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ql:case jl:return Math.max(i,16)*Math.max(t,8)/4;case $l:case Yl:return Math.max(i,8)*Math.max(t,8)/2;case Zl:case Kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case th:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case eh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case nh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ih:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case sh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case oh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case rh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ah:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ch:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case lh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case hh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case uh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case dh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ga:case fh:case ph:return Math.ceil(i/4)*Math.ceil(t/4)*16;case mf:case mh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case gh:case xh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function E_(i){switch(i){case Zi:case cf:return{byteLength:1,components:1};case Pr:case lf:case qi:return{byteLength:2,components:1};case $h:case qh:return{byteLength:2,components:4};case Bs:case Xh:case wi:return{byteLength:4,components:1};case hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function T_(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ct,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(D,E){return f?new OffscreenCanvas(D,E):Qa("canvas")}function x(D,E,q){let ft=1;const mt=Ut(D);if((mt.width>q||mt.height>q)&&(ft=q/Math.max(mt.width,mt.height)),ft<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ut=Math.floor(ft*mt.width),Vt=Math.floor(ft*mt.height);h===void 0&&(h=p(ut,Vt));const At=E?p(ut,Vt):h;return At.width=ut,At.height=Vt,At.getContext("2d").drawImage(D,0,0,ut,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ut+"x"+Vt+")."),At}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),D;return D}function g(D){return D.generateMipmaps}function m(D){i.generateMipmap(D)}function v(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(D,E,q,ft,mt=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ut=E;if(E===i.RED&&(q===i.FLOAT&&(ut=i.R32F),q===i.HALF_FLOAT&&(ut=i.R16F),q===i.UNSIGNED_BYTE&&(ut=i.R8)),E===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ut=i.R8UI),q===i.UNSIGNED_SHORT&&(ut=i.R16UI),q===i.UNSIGNED_INT&&(ut=i.R32UI),q===i.BYTE&&(ut=i.R8I),q===i.SHORT&&(ut=i.R16I),q===i.INT&&(ut=i.R32I)),E===i.RG&&(q===i.FLOAT&&(ut=i.RG32F),q===i.HALF_FLOAT&&(ut=i.RG16F),q===i.UNSIGNED_BYTE&&(ut=i.RG8)),E===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ut=i.RG8UI),q===i.UNSIGNED_SHORT&&(ut=i.RG16UI),q===i.UNSIGNED_INT&&(ut=i.RG32UI),q===i.BYTE&&(ut=i.RG8I),q===i.SHORT&&(ut=i.RG16I),q===i.INT&&(ut=i.RG32I)),E===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ut=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ut=i.RGB16UI),q===i.UNSIGNED_INT&&(ut=i.RGB32UI),q===i.BYTE&&(ut=i.RGB8I),q===i.SHORT&&(ut=i.RGB16I),q===i.INT&&(ut=i.RGB32I)),E===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ut=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ut=i.RGBA16UI),q===i.UNSIGNED_INT&&(ut=i.RGBA32UI),q===i.BYTE&&(ut=i.RGBA8I),q===i.SHORT&&(ut=i.RGBA16I),q===i.INT&&(ut=i.RGBA32I)),E===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(ut=i.RGB9_E5),E===i.RGBA){const Vt=mt?fc:me.getTransfer(ft);q===i.FLOAT&&(ut=i.RGBA32F),q===i.HALF_FLOAT&&(ut=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ut=Vt===Ee?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function _(D,E){let q;return D?E===null||E===Bs||E===zo?q=i.DEPTH24_STENCIL8:E===wi?q=i.DEPTH32F_STENCIL8:E===Pr&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Bs||E===zo?q=i.DEPTH_COMPONENT24:E===wi?q=i.DEPTH_COMPONENT32F:E===Pr&&(q=i.DEPTH_COMPONENT16),q}function L(D,E){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Wn&&D.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function T(D){const E=D.target;E.removeEventListener("dispose",T),P(E),E.isVideoTexture&&u.delete(E)}function M(D){const E=D.target;E.removeEventListener("dispose",M),w(E)}function P(D){const E=n.get(D);if(E.__webglInit===void 0)return;const q=D.source,ft=d.get(q);if(ft){const mt=ft[E.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&b(D),Object.keys(ft).length===0&&d.delete(q)}n.remove(D)}function b(D){const E=n.get(D);i.deleteTexture(E.__webglTexture);const q=D.source,ft=d.get(q);delete ft[E.__cacheKey],r.memory.textures--}function w(D){const E=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(E.__webglFramebuffer[ft]))for(let mt=0;mt<E.__webglFramebuffer[ft].length;mt++)i.deleteFramebuffer(E.__webglFramebuffer[ft][mt]);else i.deleteFramebuffer(E.__webglFramebuffer[ft]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ft])}else{if(Array.isArray(E.__webglFramebuffer))for(let ft=0;ft<E.__webglFramebuffer.length;ft++)i.deleteFramebuffer(E.__webglFramebuffer[ft]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ft=0;ft<E.__webglColorRenderbuffer.length;ft++)E.__webglColorRenderbuffer[ft]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ft]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=D.textures;for(let ft=0,mt=q.length;ft<mt;ft++){const ut=n.get(q[ft]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),r.memory.textures--),n.remove(q[ft])}n.remove(D)}let N=0;function O(){N=0}function U(){const D=N;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),N+=1,D}function V(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function B(D,E){const q=n.get(D);if(D.isVideoTexture&&zt(D),D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){const ft=D.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(q,D,E);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+E)}function X(D,E){const q=n.get(D);if(D.version>0&&q.__version!==D.version){Y(q,D,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+E)}function Q(D,E){const q=n.get(D);if(D.version>0&&q.__version!==D.version){Y(q,D,E);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+E)}function j(D,E){const q=n.get(D);if(D.version>0&&q.__version!==D.version){I(q,D,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+E)}const pt={[Ka]:i.REPEAT,[Ds]:i.CLAMP_TO_EDGE,[Xl]:i.MIRRORED_REPEAT},vt={[Wn]:i.NEAREST,[lm]:i.NEAREST_MIPMAP_NEAREST,[Vr]:i.NEAREST_MIPMAP_LINEAR,[In]:i.LINEAR,[Ac]:i.LINEAR_MIPMAP_NEAREST,[Ns]:i.LINEAR_MIPMAP_LINEAR},Mt={[fm]:i.NEVER,[_m]:i.ALWAYS,[pm]:i.LESS,[xf]:i.LEQUAL,[mm]:i.EQUAL,[vm]:i.GEQUAL,[gm]:i.GREATER,[xm]:i.NOTEQUAL};function lt(D,E){if(E.type===wi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===Ac||E.magFilter===Vr||E.magFilter===Ns||E.minFilter===In||E.minFilter===Ac||E.minFilter===Vr||E.minFilter===Ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,pt[E.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,pt[E.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,pt[E.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,vt[E.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,vt[E.minFilter]),E.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Mt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Wn||E.minFilter!==Vr&&E.minFilter!==Ns||E.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ht(D,E){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",T));const ft=E.source;let mt=d.get(ft);mt===void 0&&(mt={},d.set(ft,mt));const ut=V(E);if(ut!==D.__cacheKey){mt[ut]===void 0&&(mt[ut]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,q=!0),mt[ut].usedTimes++;const Vt=mt[D.__cacheKey];Vt!==void 0&&(mt[D.__cacheKey].usedTimes--,Vt.usedTimes===0&&b(E)),D.__cacheKey=ut,D.__webglTexture=mt[ut].texture}return q}function Y(D,E,q){let ft=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ft=i.TEXTURE_3D);const mt=ht(D,E),ut=E.source;e.bindTexture(ft,D.__webglTexture,i.TEXTURE0+q);const Vt=n.get(ut);if(ut.version!==Vt.__version||mt===!0){e.activeTexture(i.TEXTURE0+q);const At=me.getPrimaries(me.workingColorSpace),yt=E.colorSpace===as?null:me.getPrimaries(E.colorSpace),Zt=E.colorSpace===as||At===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let xt=x(E.image,!1,s.maxTextureSize);xt=se(E,xt);const It=o.convert(E.format,E.colorSpace),Ht=o.convert(E.type);let gt=y(E.internalFormat,It,Ht,E.colorSpace,E.isVideoTexture);lt(ft,E);let tt;const bt=E.mipmaps,Dt=E.isVideoTexture!==!0,kt=Vt.__version===void 0||mt===!0,C=ut.dataReady,at=L(E,xt);if(E.isDepthTexture)gt=_(E.format===Uo,E.type),kt&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,gt,xt.width,xt.height):e.texImage2D(i.TEXTURE_2D,0,gt,xt.width,xt.height,0,It,Ht,null));else if(E.isDataTexture)if(bt.length>0){Dt&&kt&&e.texStorage2D(i.TEXTURE_2D,at,gt,bt[0].width,bt[0].height);for(let $=0,st=bt.length;$<st;$++)tt=bt[$],Dt?C&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,tt.width,tt.height,It,Ht,tt.data):e.texImage2D(i.TEXTURE_2D,$,gt,tt.width,tt.height,0,It,Ht,tt.data);E.generateMipmaps=!1}else Dt?(kt&&e.texStorage2D(i.TEXTURE_2D,at,gt,xt.width,xt.height),C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt.width,xt.height,It,Ht,xt.data)):e.texImage2D(i.TEXTURE_2D,0,gt,xt.width,xt.height,0,It,Ht,xt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Dt&&kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,gt,bt[0].width,bt[0].height,xt.depth);for(let $=0,st=bt.length;$<st;$++)if(tt=bt[$],E.format!==li)if(It!==null)if(Dt){if(C)if(E.layerUpdates.size>0){const _t=Ad(tt.width,tt.height,E.format,E.type);for(const K of E.layerUpdates){const Et=tt.data.subarray(K*_t/tt.data.BYTES_PER_ELEMENT,(K+1)*_t/tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,K,tt.width,tt.height,1,It,Et)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,tt.width,tt.height,xt.depth,It,tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,gt,tt.width,tt.height,xt.depth,0,tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,tt.width,tt.height,xt.depth,It,Ht,tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,gt,tt.width,tt.height,xt.depth,0,It,Ht,tt.data)}else{Dt&&kt&&e.texStorage2D(i.TEXTURE_2D,at,gt,bt[0].width,bt[0].height);for(let $=0,st=bt.length;$<st;$++)tt=bt[$],E.format!==li?It!==null?Dt?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,tt.width,tt.height,It,tt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,gt,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?C&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,tt.width,tt.height,It,Ht,tt.data):e.texImage2D(i.TEXTURE_2D,$,gt,tt.width,tt.height,0,It,Ht,tt.data)}else if(E.isDataArrayTexture)if(Dt){if(kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,gt,xt.width,xt.height,xt.depth),C)if(E.layerUpdates.size>0){const $=Ad(xt.width,xt.height,E.format,E.type);for(const st of E.layerUpdates){const _t=xt.data.subarray(st*$/xt.data.BYTES_PER_ELEMENT,(st+1)*$/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,xt.width,xt.height,1,It,Ht,_t)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,It,Ht,xt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,gt,xt.width,xt.height,xt.depth,0,It,Ht,xt.data);else if(E.isData3DTexture)Dt?(kt&&e.texStorage3D(i.TEXTURE_3D,at,gt,xt.width,xt.height,xt.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,It,Ht,xt.data)):e.texImage3D(i.TEXTURE_3D,0,gt,xt.width,xt.height,xt.depth,0,It,Ht,xt.data);else if(E.isFramebufferTexture){if(kt)if(Dt)e.texStorage2D(i.TEXTURE_2D,at,gt,xt.width,xt.height);else{let $=xt.width,st=xt.height;for(let _t=0;_t<at;_t++)e.texImage2D(i.TEXTURE_2D,_t,gt,$,st,0,It,Ht,null),$>>=1,st>>=1}}else if(bt.length>0){if(Dt&&kt){const $=Ut(bt[0]);e.texStorage2D(i.TEXTURE_2D,at,gt,$.width,$.height)}for(let $=0,st=bt.length;$<st;$++)tt=bt[$],Dt?C&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,It,Ht,tt):e.texImage2D(i.TEXTURE_2D,$,gt,It,Ht,tt);E.generateMipmaps=!1}else if(Dt){if(kt){const $=Ut(xt);e.texStorage2D(i.TEXTURE_2D,at,gt,$.width,$.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,It,Ht,xt)}else e.texImage2D(i.TEXTURE_2D,0,gt,It,Ht,xt);g(E)&&m(ft),Vt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function I(D,E,q){if(E.image.length!==6)return;const ft=ht(D,E),mt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+q);const ut=n.get(mt);if(mt.version!==ut.__version||ft===!0){e.activeTexture(i.TEXTURE0+q);const Vt=me.getPrimaries(me.workingColorSpace),At=E.colorSpace===as?null:me.getPrimaries(E.colorSpace),yt=E.colorSpace===as||Vt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Zt=E.isCompressedTexture||E.image[0].isCompressedTexture,xt=E.image[0]&&E.image[0].isDataTexture,It=[];for(let st=0;st<6;st++)!Zt&&!xt?It[st]=x(E.image[st],!0,s.maxCubemapSize):It[st]=xt?E.image[st].image:E.image[st],It[st]=se(E,It[st]);const Ht=It[0],gt=o.convert(E.format,E.colorSpace),tt=o.convert(E.type),bt=y(E.internalFormat,gt,tt,E.colorSpace),Dt=E.isVideoTexture!==!0,kt=ut.__version===void 0||ft===!0,C=mt.dataReady;let at=L(E,Ht);lt(i.TEXTURE_CUBE_MAP,E);let $;if(Zt){Dt&&kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,bt,Ht.width,Ht.height);for(let st=0;st<6;st++){$=It[st].mipmaps;for(let _t=0;_t<$.length;_t++){const K=$[_t];E.format!==li?gt!==null?Dt?C&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t,0,0,K.width,K.height,gt,K.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t,bt,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t,0,0,K.width,K.height,gt,tt,K.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t,bt,K.width,K.height,0,gt,tt,K.data)}}}else{if($=E.mipmaps,Dt&&kt){$.length>0&&at++;const st=Ut(It[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,bt,st.width,st.height)}for(let st=0;st<6;st++)if(xt){Dt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,It[st].width,It[st].height,gt,tt,It[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,bt,It[st].width,It[st].height,0,gt,tt,It[st].data);for(let _t=0;_t<$.length;_t++){const Et=$[_t].image[st].image;Dt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t+1,0,0,Et.width,Et.height,gt,tt,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t+1,bt,Et.width,Et.height,0,gt,tt,Et.data)}}else{Dt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,gt,tt,It[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,bt,gt,tt,It[st]);for(let _t=0;_t<$.length;_t++){const K=$[_t];Dt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t+1,0,0,gt,tt,K.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t+1,bt,gt,tt,K.image[st])}}}g(E)&&m(i.TEXTURE_CUBE_MAP),ut.__version=mt.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function z(D,E,q,ft,mt,ut){const Vt=o.convert(q.format,q.colorSpace),At=o.convert(q.type),yt=y(q.internalFormat,Vt,At,q.colorSpace),Zt=n.get(E),xt=n.get(q);if(xt.__renderTarget=E,!Zt.__hasExternalTextures){const It=Math.max(1,E.width>>ut),Ht=Math.max(1,E.height>>ut);mt===i.TEXTURE_3D||mt===i.TEXTURE_2D_ARRAY?e.texImage3D(mt,ut,yt,It,Ht,E.depth,0,Vt,At,null):e.texImage2D(mt,ut,yt,It,Ht,0,Vt,At,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),Yt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,mt,xt.__webglTexture,0,Gt(E)):(mt===i.TEXTURE_2D||mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ft,mt,xt.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function k(D,E,q){if(i.bindRenderbuffer(i.RENDERBUFFER,D),E.depthBuffer){const ft=E.depthTexture,mt=ft&&ft.isDepthTexture?ft.type:null,ut=_(E.stencilBuffer,mt),Vt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=Gt(E);Yt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,ut,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,ut,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ut,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Vt,i.RENDERBUFFER,D)}else{const ft=E.textures;for(let mt=0;mt<ft.length;mt++){const ut=ft[mt],Vt=o.convert(ut.format,ut.colorSpace),At=o.convert(ut.type),yt=y(ut.internalFormat,Vt,At,ut.colorSpace),Zt=Gt(E);q&&Yt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,yt,E.width,E.height):Yt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt,yt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,yt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Z(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=n.get(E.depthTexture);ft.__renderTarget=E,(!ft.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),B(E.depthTexture,0);const mt=ft.__webglTexture,ut=Gt(E);if(E.depthTexture.format===To)Yt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,mt,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,mt,0);else if(E.depthTexture.format===Uo)Yt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,mt,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function rt(D){const E=n.get(D),q=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const ft=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ft){const mt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ft.removeEventListener("dispose",mt)};ft.addEventListener("dispose",mt),E.__depthDisposeCallback=mt}E.__boundDepthTexture=ft}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Z(E.__webglFramebuffer,D)}else if(q){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]===void 0)E.__webglDepthbuffer[ft]=i.createRenderbuffer(),k(E.__webglDepthbuffer[ft],D,!1);else{const mt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[ft];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,ut)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),k(E.__webglDepthbuffer,D,!1);else{const ft=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(D,E,q){const ft=n.get(D);E!==void 0&&z(ft.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&rt(D)}function dt(D){const E=D.texture,q=n.get(D),ft=n.get(E);D.addEventListener("dispose",M);const mt=D.textures,ut=D.isWebGLCubeRenderTarget===!0,Vt=mt.length>1;if(Vt||(ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture()),ft.__version=E.version,r.memory.textures++),ut){q.__webglFramebuffer=[];for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[At]=[];for(let yt=0;yt<E.mipmaps.length;yt++)q.__webglFramebuffer[At][yt]=i.createFramebuffer()}else q.__webglFramebuffer[At]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let At=0;At<E.mipmaps.length;At++)q.__webglFramebuffer[At]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Vt)for(let At=0,yt=mt.length;At<yt;At++){const Zt=n.get(mt[At]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),r.memory.textures++)}if(D.samples>0&&Yt(D)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let At=0;At<mt.length;At++){const yt=mt[At];q.__webglColorRenderbuffer[At]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[At]);const Zt=o.convert(yt.format,yt.colorSpace),xt=o.convert(yt.type),It=y(yt.internalFormat,Zt,xt,yt.colorSpace,D.isXRRenderTarget===!0),Ht=Gt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,It,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,q.__webglColorRenderbuffer[At])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),k(q.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,ft.__webglTexture),lt(i.TEXTURE_CUBE_MAP,E);for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0)for(let yt=0;yt<E.mipmaps.length;yt++)z(q.__webglFramebuffer[At][yt],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+At,yt);else z(q.__webglFramebuffer[At],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);g(E)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Vt){for(let At=0,yt=mt.length;At<yt;At++){const Zt=mt[At],xt=n.get(Zt);e.bindTexture(i.TEXTURE_2D,xt.__webglTexture),lt(i.TEXTURE_2D,Zt),z(q.__webglFramebuffer,D,Zt,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,0),g(Zt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let At=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(At=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,ft.__webglTexture),lt(At,E),E.mipmaps&&E.mipmaps.length>0)for(let yt=0;yt<E.mipmaps.length;yt++)z(q.__webglFramebuffer[yt],D,E,i.COLOR_ATTACHMENT0,At,yt);else z(q.__webglFramebuffer,D,E,i.COLOR_ATTACHMENT0,At,0);g(E)&&m(At),e.unbindTexture()}D.depthBuffer&&rt(D)}function ot(D){const E=D.textures;for(let q=0,ft=E.length;q<ft;q++){const mt=E[q];if(g(mt)){const ut=v(D),Vt=n.get(mt).__webglTexture;e.bindTexture(ut,Vt),m(ut),e.unbindTexture()}}}const wt=[],F=[];function St(D){if(D.samples>0){if(Yt(D)===!1){const E=D.textures,q=D.width,ft=D.height;let mt=i.COLOR_BUFFER_BIT;const ut=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Vt=n.get(D),At=E.length>1;if(At)for(let yt=0;yt<E.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let yt=0;yt<E.length;yt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(mt|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(mt|=i.STENCIL_BUFFER_BIT)),At){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Vt.__webglColorRenderbuffer[yt]);const Zt=n.get(E[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,q,ft,0,0,q,ft,mt,i.NEAREST),c===!0&&(wt.length=0,F.length=0,wt.push(i.COLOR_ATTACHMENT0+yt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(wt.push(ut),F.push(ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),At)for(let yt=0;yt<E.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Vt.__webglColorRenderbuffer[yt]);const Zt=n.get(E[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const E=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Gt(D){return Math.min(s.maxSamples,D.samples)}function Yt(D){const E=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function zt(D){const E=r.render.frame;u.get(D)!==E&&(u.set(D,E),D.update())}function se(D,E){const q=D.colorSpace,ft=D.format,mt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==Go&&q!==as&&(me.getTransfer(q)===Ee?(ft!==li||mt!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}function Ut(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=B,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=j,this.rebindTextures=ct,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=z,this.useMultisampledRTT=Yt}function A_(i,t){function e(n,s=as){let o;const r=me.getTransfer(s);if(n===Zi)return i.UNSIGNED_BYTE;if(n===$h)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cf)return i.BYTE;if(n===lf)return i.SHORT;if(n===Pr)return i.UNSIGNED_SHORT;if(n===Xh)return i.INT;if(n===Bs)return i.UNSIGNED_INT;if(n===wi)return i.FLOAT;if(n===qi)return i.HALF_FLOAT;if(n===uf)return i.ALPHA;if(n===df)return i.RGB;if(n===li)return i.RGBA;if(n===ff)return i.LUMINANCE;if(n===pf)return i.LUMINANCE_ALPHA;if(n===To)return i.DEPTH_COMPONENT;if(n===Uo)return i.DEPTH_STENCIL;if(n===dc)return i.RED;if(n===Yh)return i.RED_INTEGER;if(n===jh)return i.RG;if(n===Zh)return i.RG_INTEGER;if(n===Kh)return i.RGBA_INTEGER;if(n===ka||n===Ba||n===Va||n===Ha)if(r===Ee)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ka)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ba)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ka)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ba)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Va)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ha)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$l||n===ql||n===Yl||n===jl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===$l)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ql)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zl||n===Kl||n===Jl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Zl||n===Kl)return r===Ee?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Jl)return r===Ee?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ql||n===th||n===eh||n===nh||n===ih||n===sh||n===oh||n===rh||n===ah||n===ch||n===lh||n===hh||n===uh||n===dh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ql)return r===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===th)return r===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eh)return r===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nh)return r===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ih)return r===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sh)return r===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oh)return r===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rh)return r===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ah)return r===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ch)return r===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lh)return r===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hh)return r===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uh)return r===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dh)return r===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ga||n===fh||n===ph)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Ga)return r===Ee?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ph)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mf||n===mh||n===gh||n===xh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Ga)return o.COMPRESSED_RED_RGTC1_EXT;if(n===mh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class R_ extends Ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ve extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const C_={type:"move"};class el{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(C_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const P_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L_=`
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

}`;class I_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new xn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Qn({vertexShader:P_,fragmentShader:L_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nt(new Xe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class D_ extends Gs{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,p=null;const x=new I_,g=e.getContextAttributes();let m=null,v=null;const y=[],_=[],L=new Ct;let T=null;const M=new Ln;M.viewport=new Ue;const P=new Ln;P.viewport=new Ue;const b=[M,P],w=new R_;let N=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let I=y[Y];return I===void 0&&(I=new el,y[Y]=I),I.getTargetRaySpace()},this.getControllerGrip=function(Y){let I=y[Y];return I===void 0&&(I=new el,y[Y]=I),I.getGripSpace()},this.getHand=function(Y){let I=y[Y];return I===void 0&&(I=new el,y[Y]=I),I.getHandSpace()};function U(Y){const I=_.indexOf(Y.inputSource);if(I===-1)return;const z=y[I];z!==void 0&&(z.update(Y.inputSource,Y.frame,l||r),z.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",B);for(let Y=0;Y<y.length;Y++){const I=_[Y];I!==null&&(_[Y]=null,y[Y].disconnect(I))}N=null,O=null,x.reset(),t.setRenderTarget(m),f=null,d=null,h=null,s=null,v=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",V),s.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const I={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,I),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ri(f.framebufferWidth,f.framebufferHeight,{format:li,type:Zi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let I=null,z=null,k=null;g.depth&&(k=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,I=g.stencil?Uo:To,z=g.stencil?zo:Bs);const Z={colorFormat:e.RGBA8,depthFormat:k,scaleFactor:o};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Z),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Ri(d.textureWidth,d.textureHeight,{format:li,type:Zi,depthTexture:new Qh(d.textureWidth,d.textureHeight,z,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),ht.setContext(s),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function B(Y){for(let I=0;I<Y.removed.length;I++){const z=Y.removed[I],k=_.indexOf(z);k>=0&&(_[k]=null,y[k].disconnect(z))}for(let I=0;I<Y.added.length;I++){const z=Y.added[I];let k=_.indexOf(z);if(k===-1){for(let rt=0;rt<y.length;rt++)if(rt>=_.length){_.push(z),k=rt;break}else if(_[rt]===null){_[rt]=z,k=rt;break}if(k===-1)break}const Z=y[k];Z&&Z.connect(z)}}const X=new A,Q=new A;function j(Y,I,z){X.setFromMatrixPosition(I.matrixWorld),Q.setFromMatrixPosition(z.matrixWorld);const k=X.distanceTo(Q),Z=I.projectionMatrix.elements,rt=z.projectionMatrix.elements,ct=Z[14]/(Z[10]-1),dt=Z[14]/(Z[10]+1),ot=(Z[9]+1)/Z[5],wt=(Z[9]-1)/Z[5],F=(Z[8]-1)/Z[0],St=(rt[8]+1)/rt[0],Gt=ct*F,Yt=ct*St,zt=k/(-F+St),se=zt*-F;if(I.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(se),Y.translateZ(zt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Z[10]===-1)Y.projectionMatrix.copy(I.projectionMatrix),Y.projectionMatrixInverse.copy(I.projectionMatrixInverse);else{const Ut=ct+zt,D=dt+zt,E=Gt-se,q=Yt+(k-se),ft=ot*dt/D*Ut,mt=wt*dt/D*Ut;Y.projectionMatrix.makePerspective(E,q,ft,mt,Ut,D),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function pt(Y,I){I===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(I.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let I=Y.near,z=Y.far;x.texture!==null&&(x.depthNear>0&&(I=x.depthNear),x.depthFar>0&&(z=x.depthFar)),w.near=P.near=M.near=I,w.far=P.far=M.far=z,(N!==w.near||O!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),N=w.near,O=w.far),M.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,w.layers.mask=M.layers.mask|P.layers.mask;const k=Y.parent,Z=w.cameras;pt(w,k);for(let rt=0;rt<Z.length;rt++)pt(Z[rt],k);Z.length===2?j(w,M,P):w.projectionMatrix.copy(M.projectionMatrix),vt(Y,w,k)};function vt(Y,I,z){z===null?Y.matrix.copy(I.matrixWorld):(Y.matrix.copy(z.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(I.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(I.projectionMatrix),Y.projectionMatrixInverse.copy(I.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=vh*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(w)};let Mt=null;function lt(Y,I){if(u=I.getViewerPose(l||r),p=I,u!==null){const z=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let k=!1;z.length!==w.cameras.length&&(w.cameras.length=0,k=!0);for(let rt=0;rt<z.length;rt++){const ct=z[rt];let dt=null;if(f!==null)dt=f.getViewport(ct);else{const wt=h.getViewSubImage(d,ct);dt=wt.viewport,rt===0&&(t.setRenderTargetTextures(v,wt.colorTexture,d.ignoreDepthValues?void 0:wt.depthStencilTexture),t.setRenderTarget(v))}let ot=b[rt];ot===void 0&&(ot=new Ln,ot.layers.enable(rt),ot.viewport=new Ue,b[rt]=ot),ot.matrix.fromArray(ct.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(ct.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(dt.x,dt.y,dt.width,dt.height),rt===0&&(w.matrix.copy(ot.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),k===!0&&w.cameras.push(ot)}const Z=s.enabledFeatures;if(Z&&Z.includes("depth-sensing")){const rt=h.getDepthInformation(z[0]);rt&&rt.isValid&&rt.texture&&x.init(t,rt,s.renderState)}}for(let z=0;z<y.length;z++){const k=_[z],Z=y[z];k!==null&&Z!==void 0&&Z.update(k,I,l||r)}Mt&&Mt(Y,I),I.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:I}),p=null}const ht=new Rf;ht.setAnimationLoop(lt),this.setAnimationLoop=function(Y){Mt=Y},this.dispose=function(){}}}const Ms=new ui,N_=new re;function z_(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Ef(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,y,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(g,m):m.isMeshToonMaterial?(o(g,m),h(g,m)):m.isMeshPhongMaterial?(o(g,m),u(g,m)):m.isMeshStandardMaterial?(o(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(o(g,m),p(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),x(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,v,y):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===bn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===bn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=t.get(m),y=v.envMap,_=v.envMapRotation;y&&(g.envMap.value=y,Ms.copy(_),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),g.envMapRotation.value.setFromMatrix4(N_.makeRotationFromEuler(Ms)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,v,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===bn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function U_(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const _=y.program;n.uniformBlockBinding(v,_)}function l(v,y){let _=s[v.id];_===void 0&&(p(v),_=u(v),s[v.id]=_,v.addEventListener("dispose",g));const L=y.program;n.updateUBOMapping(v,L);const T=t.render.frame;o[v.id]!==T&&(d(v),o[v.id]=T)}function u(v){const y=h();v.__bindingPointIndex=y;const _=i.createBuffer(),L=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function h(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=s[v.id],_=v.uniforms,L=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,M=_.length;T<M;T++){const P=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,w=P.length;b<w;b++){const N=P[b];if(f(N,T,b,L)===!0){const O=N.__offset,U=Array.isArray(N.value)?N.value:[N.value];let V=0;for(let B=0;B<U.length;B++){const X=U[B],Q=x(X);typeof X=="number"||typeof X=="boolean"?(N.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,O+V,N.__data)):X.isMatrix3?(N.__data[0]=X.elements[0],N.__data[1]=X.elements[1],N.__data[2]=X.elements[2],N.__data[3]=0,N.__data[4]=X.elements[3],N.__data[5]=X.elements[4],N.__data[6]=X.elements[5],N.__data[7]=0,N.__data[8]=X.elements[6],N.__data[9]=X.elements[7],N.__data[10]=X.elements[8],N.__data[11]=0):(X.toArray(N.__data,V),V+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,_,L){const T=v.value,M=y+"_"+_;if(L[M]===void 0)return typeof T=="number"||typeof T=="boolean"?L[M]=T:L[M]=T.clone(),!0;{const P=L[M];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return L[M]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function p(v){const y=v.uniforms;let _=0;const L=16;for(let M=0,P=y.length;M<P;M++){const b=Array.isArray(y[M])?y[M]:[y[M]];for(let w=0,N=b.length;w<N;w++){const O=b[w],U=Array.isArray(O.value)?O.value:[O.value];for(let V=0,B=U.length;V<B;V++){const X=U[V],Q=x(X),j=_%L,pt=j%Q.boundary,vt=j+pt;_+=pt,vt!==0&&L-vt<Q.storage&&(_+=L-vt),O.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=Q.storage}}}const T=_%L;return T>0&&(_+=L-T),v.__size=_,v.__cache={},this}function x(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const _=r.indexOf(y.__bindingPointIndex);r.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete o[y.id]}function m(){for(const v in s)i.deleteBuffer(s[v]);r=[],s={},o={}}return{bind:c,update:l,dispose:m}}class F_{constructor(t={}){const{canvas:e=Sm(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const p=new Uint32Array(4),x=new Int32Array(4);let g=null,m=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=hs,this.toneMappingExposure=1;const _=this;let L=!1,T=0,M=0,P=null,b=-1,w=null;const N=new Ue,O=new Ue;let U=null;const V=new Jt(0);let B=0,X=e.width,Q=e.height,j=1,pt=null,vt=null;const Mt=new Ue(0,0,X,Q),lt=new Ue(0,0,X,Q);let ht=!1;const Y=new mc;let I=!1,z=!1;const k=new re,Z=new re,rt=new A,ct=new Ue,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function wt(){return P===null?j:1}let F=n;function St(R,G){return e.getContext(R,G)}try{const R={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wh}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",K,!1),F===null){const G="webgl2";if(F=St(G,R),F===null)throw St(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Gt,Yt,zt,se,Ut,D,E,q,ft,mt,ut,Vt,At,yt,Zt,xt,It,Ht,gt,tt,bt,Dt,kt,C;function at(){Gt=new Hx(F),Gt.init(),Dt=new A_(F,Gt),Yt=new Ux(F,Gt,t,Dt),zt=new b_(F,Gt),Yt.reverseDepthBuffer&&d&&zt.buffers.depth.setReversed(!0),se=new Xx(F),Ut=new l_,D=new T_(F,Gt,zt,Ut,Yt,Dt,se),E=new Ox(_),q=new Vx(_),ft=new Jm(F),kt=new Nx(F,ft),mt=new Gx(F,ft,se,kt),ut=new qx(F,mt,ft,se),gt=new $x(F,Yt,D),xt=new Fx(Ut),Vt=new c_(_,E,q,Gt,Yt,kt,xt),At=new z_(_,Ut),yt=new u_,Zt=new x_(Gt),Ht=new Dx(_,E,q,zt,ut,f,c),It=new S_(_,ut,Yt),C=new U_(F,se,Yt,zt),tt=new zx(F,Gt,se),bt=new Wx(F,Gt,se),se.programs=Vt.programs,_.capabilities=Yt,_.extensions=Gt,_.properties=Ut,_.renderLists=yt,_.shadowMap=It,_.state=zt,_.info=se}at();const $=new D_(_,F);this.xr=$,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=Gt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Gt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(X,Q,!1))},this.getSize=function(R){return R.set(X,Q)},this.setSize=function(R,G,et=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=R,Q=G,e.width=Math.floor(R*j),e.height=Math.floor(G*j),et===!0&&(e.style.width=R+"px",e.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(X*j,Q*j).floor()},this.setDrawingBufferSize=function(R,G,et){X=R,Q=G,j=et,e.width=Math.floor(R*et),e.height=Math.floor(G*et),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(Mt)},this.setViewport=function(R,G,et,nt){R.isVector4?Mt.set(R.x,R.y,R.z,R.w):Mt.set(R,G,et,nt),zt.viewport(N.copy(Mt).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(lt)},this.setScissor=function(R,G,et,nt){R.isVector4?lt.set(R.x,R.y,R.z,R.w):lt.set(R,G,et,nt),zt.scissor(O.copy(lt).multiplyScalar(j).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(R){zt.setScissorTest(ht=R)},this.setOpaqueSort=function(R){pt=R},this.setTransparentSort=function(R){vt=R},this.getClearColor=function(R){return R.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(R=!0,G=!0,et=!0){let nt=0;if(R){let W=!1;if(P!==null){const Tt=P.texture.format;W=Tt===Kh||Tt===Zh||Tt===Yh}if(W){const Tt=P.texture.type,Ft=Tt===Zi||Tt===Bs||Tt===Pr||Tt===zo||Tt===$h||Tt===qh,Xt=Ht.getClearColor(),$t=Ht.getClearAlpha(),ie=Xt.r,ae=Xt.g,qt=Xt.b;Ft?(p[0]=ie,p[1]=ae,p[2]=qt,p[3]=$t,F.clearBufferuiv(F.COLOR,0,p)):(x[0]=ie,x[1]=ae,x[2]=qt,x[3]=$t,F.clearBufferiv(F.COLOR,0,x))}else nt|=F.COLOR_BUFFER_BIT}G&&(nt|=F.DEPTH_BUFFER_BIT),et&&(nt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",K,!1),yt.dispose(),Zt.dispose(),Ut.dispose(),E.dispose(),q.dispose(),ut.dispose(),kt.dispose(),C.dispose(),Vt.dispose(),$.dispose(),$.removeEventListener("sessionstart",Pt),$.removeEventListener("sessionend",ne),Me.stop()};function st(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const R=se.autoReset,G=It.enabled,et=It.autoUpdate,nt=It.needsUpdate,W=It.type;at(),se.autoReset=R,It.enabled=G,It.autoUpdate=et,It.needsUpdate=nt,It.type=W}function K(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Et(R){const G=R.target;G.removeEventListener("dispose",Et),Wt(G)}function Wt(R){ee(R),Ut.remove(R)}function ee(R){const G=Ut.get(R).programs;G!==void 0&&(G.forEach(function(et){Vt.releaseProgram(et)}),R.isShaderMaterial&&Vt.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,et,nt,W,Tt){G===null&&(G=dt);const Ft=W.isMesh&&W.matrixWorld.determinant()<0,Xt=ti(R,G,et,nt,W);zt.setMaterial(nt,Ft);let $t=et.index,ie=1;if(nt.wireframe===!0){if($t=mt.getWireframeAttribute(et),$t===void 0)return;ie=2}const ae=et.drawRange,qt=et.attributes.position;let xe=ae.start*ie,Ae=(ae.start+ae.count)*ie;Tt!==null&&(xe=Math.max(xe,Tt.start*ie),Ae=Math.min(Ae,(Tt.start+Tt.count)*ie)),$t!==null?(xe=Math.max(xe,0),Ae=Math.min(Ae,$t.count)):qt!=null&&(xe=Math.max(xe,0),Ae=Math.min(Ae,qt.count));const Ce=Ae-xe;if(Ce<0||Ce===1/0)return;kt.setup(W,nt,Xt,et,$t);let En,ye=tt;if($t!==null&&(En=ft.get($t),ye=bt,ye.setIndex(En)),W.isMesh)nt.wireframe===!0?(zt.setLineWidth(nt.wireframeLinewidth*wt()),ye.setMode(F.LINES)):ye.setMode(F.TRIANGLES);else if(W.isLine){let jt=nt.linewidth;jt===void 0&&(jt=1),zt.setLineWidth(jt*wt()),W.isLineSegments?ye.setMode(F.LINES):W.isLineLoop?ye.setMode(F.LINE_LOOP):ye.setMode(F.LINE_STRIP)}else W.isPoints?ye.setMode(F.POINTS):W.isSprite&&ye.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ye.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))ye.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const jt=W._multiDrawStarts,Li=W._multiDrawCounts,Se=W._multiDrawCount,ei=$t?ft.get($t).bytesPerElement:1,qs=Ut.get(nt).currentProgram.getUniforms();for(let Un=0;Un<Se;Un++)qs.setValue(F,"_gl_DrawID",Un),ye.render(jt[Un]/ei,Li[Un])}else if(W.isInstancedMesh)ye.renderInstances(xe,Ce,W.count);else if(et.isInstancedBufferGeometry){const jt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Li=Math.min(et.instanceCount,jt);ye.renderInstances(xe,Ce,Li)}else ye.render(xe,Ce)};function Rt(R,G,et){R.transparent===!0&&R.side===ze&&R.forceSinglePass===!1?(R.side=bn,R.needsUpdate=!0,zn(R,G,et),R.side=fs,R.needsUpdate=!0,zn(R,G,et),R.side=ze):zn(R,G,et)}this.compile=function(R,G,et=null){et===null&&(et=R),m=Zt.get(et),m.init(G),y.push(m),et.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),R!==et&&R.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();const nt=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Tt=W.material;if(Tt)if(Array.isArray(Tt))for(let Ft=0;Ft<Tt.length;Ft++){const Xt=Tt[Ft];Rt(Xt,et,W),nt.add(Xt)}else Rt(Tt,et,W),nt.add(Tt)}),y.pop(),m=null,nt},this.compileAsync=function(R,G,et=null){const nt=this.compile(R,G,et);return new Promise(W=>{function Tt(){if(nt.forEach(function(Ft){Ut.get(Ft).currentProgram.isReady()&&nt.delete(Ft)}),nt.size===0){W(R);return}setTimeout(Tt,10)}Gt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let ue=null;function ge(R){ue&&ue(R)}function Pt(){Me.stop()}function ne(){Me.start()}const Me=new Rf;Me.setAnimationLoop(ge),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(R){ue=R,$.setAnimationLoop(R),R===null?Me.stop():Me.start()},$.addEventListener("sessionstart",Pt),$.addEventListener("sessionend",ne),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(G),G=$.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,G,P),m=Zt.get(R,y.length),m.init(G),y.push(m),Z.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Y.setFromProjectionMatrix(Z),z=this.localClippingEnabled,I=xt.init(this.clippingPlanes,z),g=yt.get(R,v.length),g.init(),v.push(g),$.enabled===!0&&$.isPresenting===!0){const Tt=_.xr.getDepthSensingMesh();Tt!==null&&fe(Tt,G,-1/0,_.sortObjects)}fe(R,G,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(pt,vt),ot=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ot&&Ht.addToRenderList(g,R),this.info.render.frame++,I===!0&&xt.beginShadows();const et=m.state.shadowsArray;It.render(et,R,G),I===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=g.opaque,W=g.transmissive;if(m.setupLights(),G.isArrayCamera){const Tt=G.cameras;if(W.length>0)for(let Ft=0,Xt=Tt.length;Ft<Xt;Ft++){const $t=Tt[Ft];Ie(nt,W,R,$t)}ot&&Ht.render(R);for(let Ft=0,Xt=Tt.length;Ft<Xt;Ft++){const $t=Tt[Ft];pe(g,R,$t,$t.viewport)}}else W.length>0&&Ie(nt,W,R,G),ot&&Ht.render(R),pe(g,R,G);P!==null&&(D.updateMultisampleRenderTarget(P),D.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(_,R,G),kt.resetDefaultState(),b=-1,w=null,y.pop(),y.length>0?(m=y[y.length-1],I===!0&&xt.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function fe(R,G,et,nt){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)et=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Y.intersectsSprite(R)){nt&&ct.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Z);const Ft=ut.update(R),Xt=R.material;Xt.visible&&g.push(R,Ft,Xt,et,ct.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Y.intersectsObject(R))){const Ft=ut.update(R),Xt=R.material;if(nt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ct.copy(R.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),ct.copy(Ft.boundingSphere.center)),ct.applyMatrix4(R.matrixWorld).applyMatrix4(Z)),Array.isArray(Xt)){const $t=Ft.groups;for(let ie=0,ae=$t.length;ie<ae;ie++){const qt=$t[ie],xe=Xt[qt.materialIndex];xe&&xe.visible&&g.push(R,Ft,xe,et,ct.z,qt)}}else Xt.visible&&g.push(R,Ft,Xt,et,ct.z,null)}}const Tt=R.children;for(let Ft=0,Xt=Tt.length;Ft<Xt;Ft++)fe(Tt[Ft],G,et,nt)}function pe(R,G,et,nt){const W=R.opaque,Tt=R.transmissive,Ft=R.transparent;m.setupLightsView(et),I===!0&&xt.setGlobalState(_.clippingPlanes,et),nt&&zt.viewport(N.copy(nt)),W.length>0&&De(W,G,et),Tt.length>0&&De(Tt,G,et),Ft.length>0&&De(Ft,G,et),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function Ie(R,G,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[nt.id]===void 0&&(m.state.transmissionRenderTarget[nt.id]=new Ri(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?qi:Zi,minFilter:Ns,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));const Tt=m.state.transmissionRenderTarget[nt.id],Ft=nt.viewport||N;Tt.setSize(Ft.z,Ft.w);const Xt=_.getRenderTarget();_.setRenderTarget(Tt),_.getClearColor(V),B=_.getClearAlpha(),B<1&&_.setClearColor(16777215,.5),_.clear(),ot&&Ht.render(et);const $t=_.toneMapping;_.toneMapping=hs;const ie=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),m.setupLightsView(nt),I===!0&&xt.setGlobalState(_.clippingPlanes,nt),De(R,et,nt),D.updateMultisampleRenderTarget(Tt),D.updateRenderTargetMipmap(Tt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let qt=0,xe=G.length;qt<xe;qt++){const Ae=G[qt],Ce=Ae.object,En=Ae.geometry,ye=Ae.material,jt=Ae.group;if(ye.side===ze&&Ce.layers.test(nt.layers)){const Li=ye.side;ye.side=bn,ye.needsUpdate=!0,Pi(Ce,et,nt,En,ye,jt),ye.side=Li,ye.needsUpdate=!0,ae=!0}}ae===!0&&(D.updateMultisampleRenderTarget(Tt),D.updateRenderTargetMipmap(Tt))}_.setRenderTarget(Xt),_.setClearColor(V,B),ie!==void 0&&(nt.viewport=ie),_.toneMapping=$t}function De(R,G,et){const nt=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Tt=R.length;W<Tt;W++){const Ft=R[W],Xt=Ft.object,$t=Ft.geometry,ie=nt===null?Ft.material:nt,ae=Ft.group;Xt.layers.test(et.layers)&&Pi(Xt,G,et,$t,ie,ae)}}function Pi(R,G,et,nt,W,Tt){R.onBeforeRender(_,G,et,nt,W,Tt),R.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(_,G,et,nt,R,Tt),W.transparent===!0&&W.side===ze&&W.forceSinglePass===!1?(W.side=bn,W.needsUpdate=!0,_.renderBufferDirect(et,G,nt,W,R,Tt),W.side=fs,W.needsUpdate=!0,_.renderBufferDirect(et,G,nt,W,R,Tt),W.side=ze):_.renderBufferDirect(et,G,nt,W,R,Tt),R.onAfterRender(_,G,et,nt,W,Tt)}function zn(R,G,et){G.isScene!==!0&&(G=dt);const nt=Ut.get(R),W=m.state.lights,Tt=m.state.shadowsArray,Ft=W.state.version,Xt=Vt.getParameters(R,W.state,Tt,G,et),$t=Vt.getProgramCacheKey(Xt);let ie=nt.programs;nt.environment=R.isMeshStandardMaterial?G.environment:null,nt.fog=G.fog,nt.envMap=(R.isMeshStandardMaterial?q:E).get(R.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,ie===void 0&&(R.addEventListener("dispose",Et),ie=new Map,nt.programs=ie);let ae=ie.get($t);if(ae!==void 0){if(nt.currentProgram===ae&&nt.lightsStateVersion===Ft)return ke(R,Xt),ae}else Xt.uniforms=Vt.getUniforms(R),R.onBeforeCompile(Xt,_),ae=Vt.acquireProgram(Xt,$t),ie.set($t,ae),nt.uniforms=Xt.uniforms;const qt=nt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qt.clippingPlanes=xt.uniform),ke(R,Xt),nt.needsLights=Tc(R),nt.lightsStateVersion=Ft,nt.needsLights&&(qt.ambientLightColor.value=W.state.ambient,qt.lightProbe.value=W.state.probe,qt.directionalLights.value=W.state.directional,qt.directionalLightShadows.value=W.state.directionalShadow,qt.spotLights.value=W.state.spot,qt.spotLightShadows.value=W.state.spotShadow,qt.rectAreaLights.value=W.state.rectArea,qt.ltc_1.value=W.state.rectAreaLTC1,qt.ltc_2.value=W.state.rectAreaLTC2,qt.pointLights.value=W.state.point,qt.pointLightShadows.value=W.state.pointShadow,qt.hemisphereLights.value=W.state.hemi,qt.directionalShadowMap.value=W.state.directionalShadowMap,qt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,qt.spotShadowMap.value=W.state.spotShadowMap,qt.spotLightMatrix.value=W.state.spotLightMatrix,qt.spotLightMap.value=W.state.spotLightMap,qt.pointShadowMap.value=W.state.pointShadowMap,qt.pointShadowMatrix.value=W.state.pointShadowMatrix),nt.currentProgram=ae,nt.uniformsList=null,ae}function Ne(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=Xa.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function ke(R,G){const et=Ut.get(R);et.outputColorSpace=G.outputColorSpace,et.batching=G.batching,et.batchingColor=G.batchingColor,et.instancing=G.instancing,et.instancingColor=G.instancingColor,et.instancingMorph=G.instancingMorph,et.skinning=G.skinning,et.morphTargets=G.morphTargets,et.morphNormals=G.morphNormals,et.morphColors=G.morphColors,et.morphTargetsCount=G.morphTargetsCount,et.numClippingPlanes=G.numClippingPlanes,et.numIntersection=G.numClipIntersection,et.vertexAlphas=G.vertexAlphas,et.vertexTangents=G.vertexTangents,et.toneMapping=G.toneMapping}function ti(R,G,et,nt,W){G.isScene!==!0&&(G=dt),D.resetTextureUnits();const Tt=G.fog,Ft=nt.isMeshStandardMaterial?G.environment:null,Xt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Go,$t=(nt.isMeshStandardMaterial?q:E).get(nt.envMap||Ft),ie=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ae=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),qt=!!et.morphAttributes.position,xe=!!et.morphAttributes.normal,Ae=!!et.morphAttributes.color;let Ce=hs;nt.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ce=_.toneMapping);const En=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ye=En!==void 0?En.length:0,jt=Ut.get(nt),Li=m.state.lights;if(I===!0&&(z===!0||R!==w)){const $n=R===w&&nt.id===b;xt.setState(nt,R,$n)}let Se=!1;nt.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Li.state.version||jt.outputColorSpace!==Xt||W.isBatchedMesh&&jt.batching===!1||!W.isBatchedMesh&&jt.batching===!0||W.isBatchedMesh&&jt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&jt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&jt.instancing===!1||!W.isInstancedMesh&&jt.instancing===!0||W.isSkinnedMesh&&jt.skinning===!1||!W.isSkinnedMesh&&jt.skinning===!0||W.isInstancedMesh&&jt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&jt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&jt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&jt.instancingMorph===!1&&W.morphTexture!==null||jt.envMap!==$t||nt.fog===!0&&jt.fog!==Tt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==xt.numPlanes||jt.numIntersection!==xt.numIntersection)||jt.vertexAlphas!==ie||jt.vertexTangents!==ae||jt.morphTargets!==qt||jt.morphNormals!==xe||jt.morphColors!==Ae||jt.toneMapping!==Ce||jt.morphTargetsCount!==ye)&&(Se=!0):(Se=!0,jt.__version=nt.version);let ei=jt.currentProgram;Se===!0&&(ei=zn(nt,G,W));let qs=!1,Un=!1,qo=!1;const Pe=ei.getUniforms(),fi=jt.uniforms;if(zt.useProgram(ei.program)&&(qs=!0,Un=!0,qo=!0),nt.id!==b&&(b=nt.id,Un=!0),qs||w!==R){zt.buffers.depth.getReversed()?(k.copy(R.projectionMatrix),bm(k),Em(k),Pe.setValue(F,"projectionMatrix",k)):Pe.setValue(F,"projectionMatrix",R.projectionMatrix),Pe.setValue(F,"viewMatrix",R.matrixWorldInverse);const Qi=Pe.map.cameraPosition;Qi!==void 0&&Qi.setValue(F,rt.setFromMatrixPosition(R.matrixWorld)),Yt.logarithmicDepthBuffer&&Pe.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Pe.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Un=!0,qo=!0)}if(W.isSkinnedMesh){Pe.setOptional(F,W,"bindMatrix"),Pe.setOptional(F,W,"bindMatrixInverse");const $n=W.skeleton;$n&&($n.boneTexture===null&&$n.computeBoneTexture(),Pe.setValue(F,"boneTexture",$n.boneTexture,D))}W.isBatchedMesh&&(Pe.setOptional(F,W,"batchingTexture"),Pe.setValue(F,"batchingTexture",W._matricesTexture,D),Pe.setOptional(F,W,"batchingIdTexture"),Pe.setValue(F,"batchingIdTexture",W._indirectTexture,D),Pe.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&Pe.setValue(F,"batchingColorTexture",W._colorsTexture,D));const Yo=et.morphAttributes;if((Yo.position!==void 0||Yo.normal!==void 0||Yo.color!==void 0)&&gt.update(W,et,ei),(Un||jt.receiveShadow!==W.receiveShadow)&&(jt.receiveShadow=W.receiveShadow,Pe.setValue(F,"receiveShadow",W.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(fi.envMap.value=$t,fi.flipEnvMap.value=$t.isCubeTexture&&$t.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&G.environment!==null&&(fi.envMapIntensity.value=G.environmentIntensity),Un&&(Pe.setValue(F,"toneMappingExposure",_.toneMappingExposure),jt.needsLights&&Ec(fi,qo),Tt&&nt.fog===!0&&At.refreshFogUniforms(fi,Tt),At.refreshMaterialUniforms(fi,nt,j,Q,m.state.transmissionRenderTarget[R.id]),Xa.upload(F,Ne(jt),fi,D)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Xa.upload(F,Ne(jt),fi,D),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Pe.setValue(F,"center",W.center),Pe.setValue(F,"modelViewMatrix",W.modelViewMatrix),Pe.setValue(F,"normalMatrix",W.normalMatrix),Pe.setValue(F,"modelMatrix",W.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const $n=nt.uniformsGroups;for(let Qi=0,ts=$n.length;Qi<ts;Qi++){const Ru=$n[Qi];C.update(Ru,ei),C.bind(Ru,ei)}}return ei}function Ec(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Tc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,G,et){Ut.get(R.texture).__webglTexture=G,Ut.get(R.depthTexture).__webglTexture=et;const nt=Ut.get(R);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=et===void 0,nt.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,G){const et=Ut.get(R);et.__webglFramebuffer=G,et.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,et=0){P=R,T=G,M=et;let nt=!0,W=null,Tt=!1,Ft=!1;if(R){const $t=Ut.get(R);if($t.__useDefaultFramebuffer!==void 0)zt.bindFramebuffer(F.FRAMEBUFFER,null),nt=!1;else if($t.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if($t.__hasExternalTextures)D.rebindTextures(R,Ut.get(R.texture).__webglTexture,Ut.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const qt=R.depthTexture;if($t.__boundDepthTexture!==qt){if(qt!==null&&Ut.has(qt)&&(R.width!==qt.image.width||R.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const ie=R.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Ft=!0);const ae=Ut.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ae[G])?W=ae[G][et]:W=ae[G],Tt=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?W=Ut.get(R).__webglMultisampledFramebuffer:Array.isArray(ae)?W=ae[et]:W=ae,N.copy(R.viewport),O.copy(R.scissor),U=R.scissorTest}else N.copy(Mt).multiplyScalar(j).floor(),O.copy(lt).multiplyScalar(j).floor(),U=ht;if(zt.bindFramebuffer(F.FRAMEBUFFER,W)&&nt&&zt.drawBuffers(R,W),zt.viewport(N),zt.scissor(O),zt.setScissorTest(U),Tt){const $t=Ut.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,$t.__webglTexture,et)}else if(Ft){const $t=Ut.get(R.texture),ie=G||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,$t.__webglTexture,et||0,ie)}b=-1},this.readRenderTargetPixels=function(R,G,et,nt,W,Tt,Ft){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=Ut.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Xt=Xt[Ft]),Xt){zt.bindFramebuffer(F.FRAMEBUFFER,Xt);try{const $t=R.texture,ie=$t.format,ae=$t.type;if(!Yt.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-nt&&et>=0&&et<=R.height-W&&F.readPixels(G,et,nt,W,Dt.convert(ie),Dt.convert(ae),Tt)}finally{const $t=P!==null?Ut.get(P).__webglFramebuffer:null;zt.bindFramebuffer(F.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(R,G,et,nt,W,Tt,Ft){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=Ut.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Xt=Xt[Ft]),Xt){const $t=R.texture,ie=$t.format,ae=$t.type;if(!Yt.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=R.width-nt&&et>=0&&et<=R.height-W){zt.bindFramebuffer(F.FRAMEBUFFER,Xt);const qt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,qt),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),F.readPixels(G,et,nt,W,Dt.convert(ie),Dt.convert(ae),0);const xe=P!==null?Ut.get(P).__webglFramebuffer:null;zt.bindFramebuffer(F.FRAMEBUFFER,xe);const Ae=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await wm(F,Ae,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,qt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.deleteBuffer(qt),F.deleteSync(Ae),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,G=null,et=0){R.isTexture!==!0&&(mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,R=arguments[1]);const nt=Math.pow(2,-et),W=Math.floor(R.image.width*nt),Tt=Math.floor(R.image.height*nt),Ft=G!==null?G.x:0,Xt=G!==null?G.y:0;D.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,et,0,0,Ft,Xt,W,Tt),zt.unbindTexture()},this.copyTextureToTexture=function(R,G,et=null,nt=null,W=0){R.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,R=arguments[1],G=arguments[2],W=arguments[3]||0,et=null);let Tt,Ft,Xt,$t,ie,ae,qt,xe,Ae;const Ce=R.isCompressedTexture?R.mipmaps[W]:R.image;et!==null?(Tt=et.max.x-et.min.x,Ft=et.max.y-et.min.y,Xt=et.isBox3?et.max.z-et.min.z:1,$t=et.min.x,ie=et.min.y,ae=et.isBox3?et.min.z:0):(Tt=Ce.width,Ft=Ce.height,Xt=Ce.depth||1,$t=0,ie=0,ae=0),nt!==null?(qt=nt.x,xe=nt.y,Ae=nt.z):(qt=0,xe=0,Ae=0);const En=Dt.convert(G.format),ye=Dt.convert(G.type);let jt;G.isData3DTexture?(D.setTexture3D(G,0),jt=F.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(D.setTexture2DArray(G,0),jt=F.TEXTURE_2D_ARRAY):(D.setTexture2D(G,0),jt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const Li=F.getParameter(F.UNPACK_ROW_LENGTH),Se=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ei=F.getParameter(F.UNPACK_SKIP_PIXELS),qs=F.getParameter(F.UNPACK_SKIP_ROWS),Un=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ce.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ce.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$t),F.pixelStorei(F.UNPACK_SKIP_ROWS,ie),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ae);const qo=R.isDataArrayTexture||R.isData3DTexture,Pe=G.isDataArrayTexture||G.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const fi=Ut.get(R),Yo=Ut.get(G),$n=Ut.get(fi.__renderTarget),Qi=Ut.get(Yo.__renderTarget);zt.bindFramebuffer(F.READ_FRAMEBUFFER,$n.__webglFramebuffer),zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let ts=0;ts<Xt;ts++)qo&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ut.get(R).__webglTexture,W,ae+ts),R.isDepthTexture?(Pe&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ut.get(G).__webglTexture,W,Ae+ts),F.blitFramebuffer($t,ie,Tt,Ft,qt,xe,Tt,Ft,F.DEPTH_BUFFER_BIT,F.NEAREST)):Pe?F.copyTexSubImage3D(jt,W,qt,xe,Ae+ts,$t,ie,Tt,Ft):F.copyTexSubImage2D(jt,W,qt,xe,Ae+ts,$t,ie,Tt,Ft);zt.bindFramebuffer(F.READ_FRAMEBUFFER,null),zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Pe?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(jt,W,qt,xe,Ae,Tt,Ft,Xt,En,ye,Ce.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(jt,W,qt,xe,Ae,Tt,Ft,Xt,En,Ce.data):F.texSubImage3D(jt,W,qt,xe,Ae,Tt,Ft,Xt,En,ye,Ce):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,W,qt,xe,Tt,Ft,En,ye,Ce.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,W,qt,xe,Ce.width,Ce.height,En,Ce.data):F.texSubImage2D(F.TEXTURE_2D,W,qt,xe,Tt,Ft,En,ye,Ce);F.pixelStorei(F.UNPACK_ROW_LENGTH,Li),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Se),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ei),F.pixelStorei(F.UNPACK_SKIP_ROWS,qs),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Un),W===0&&G.generateMipmaps&&F.generateMipmap(jt),zt.unbindTexture()},this.copyTextureToTexture3D=function(R,G,et=null,nt=null,W=0){return R.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,nt=arguments[1]||null,R=arguments[2],G=arguments[3],W=arguments[4]||0),mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,G,et,nt,W)},this.initRenderTarget=function(R){Ut.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),zt.unbindTexture()},this.resetState=function(){T=0,M=0,P=null,zt.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}}class tu{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Jt(t),this.near=e,this.far=n}clone(){return new tu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class O_ extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Mh extends xn{constructor(t=null,e=1,n=1,s,o,r,a,c,l=Wn,u=Wn,h,d){super(null,r,a,c,l,u,s,o,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rd extends Je{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const co=new re,Cd=new re,ca=[],Pd=new ps,k_=new re,tr=new Nt,er=new Ws;class Ti extends Nt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Rd(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,k_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ps),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,co),Pd.copy(t.boundingBox).applyMatrix4(co),this.boundingBox.union(Pd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ws),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,co),er.copy(t.boundingSphere).applyMatrix4(co),this.boundingSphere.union(er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),t.ray.intersectsSphere(er)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,co),Cd.multiplyMatrices(n,co),tr.matrixWorld=Cd,tr.raycast(t,ca);for(let r=0,a=ca.length;r<a;r++){const c=ca[r];c.instanceId=o,c.object=this,e.push(c)}ca.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Rd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mh(new Float32Array(s*this.count),s,this.count,dc,wi));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class eu extends Xs{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const tc=new A,ec=new A,Ld=new re,nr=new pc,la=new Ws,nl=new A,Id=new A;class Nf extends Ke{constructor(t=new Le,e=new eu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)tc.fromBufferAttribute(e,s-1),ec.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=tc.distanceTo(ec);t.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(s),la.radius+=o,t.ray.intersectsSphere(la)===!1)return;Ld.copy(s).invert(),nr.copy(t.ray).applyMatrix4(Ld);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let x=f,g=p-1;x<g;x+=l){const m=u.getX(x),v=u.getX(x+1),y=ha(this,t,nr,c,m,v);y&&e.push(y)}if(this.isLineLoop){const x=u.getX(p-1),g=u.getX(f),m=ha(this,t,nr,c,x,g);m&&e.push(m)}}else{const f=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let x=f,g=p-1;x<g;x+=l){const m=ha(this,t,nr,c,x,x+1);m&&e.push(m)}if(this.isLineLoop){const x=ha(this,t,nr,c,p-1,f);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function ha(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(tc.fromBufferAttribute(r,s),ec.fromBufferAttribute(r,o),e.distanceSqToSegment(tc,ec,nl,Id)>n)return;nl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(nl);if(!(c<t.near||c>t.far))return{distance:c,point:Id.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Dd=new A,Nd=new A;class B_ extends Nf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)Dd.fromBufferAttribute(e,s),Nd.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Dd.distanceTo(Nd);t.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class V_ extends Xs{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const zd=new re,yh=new pc,ua=new Ws,da=new A;class H_ extends Ke{constructor(t=new Le,e=new V_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(s),ua.radius+=o,t.ray.intersectsSphere(ua)===!1)return;zd.copy(s).invert(),yh.copy(t.ray).applyMatrix4(zd);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let p=d,x=f;p<x;p++){const g=l.getX(p);da.fromBufferAttribute(h,g),Ud(da,g,c,s,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let p=d,x=f;p<x;p++)da.fromBufferAttribute(h,p),Ud(da,p,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ud(i,t,e,n,s,o,r){const a=yh.distanceSqToPoint(i);if(a<e){const c=new A;yh.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Ji extends xn{constructor(t,e,n,s,o,r,a,c,l){super(t,e,n,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(o-1);const u=n[s],d=n[s+1]-u,f=(r-u)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new Ct:new A);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,s=[],o=[],r=[],a=new A,c=new re;for(let f=0;f<=t;f++){const p=f/t;s[f]=this.getTangentAt(p,new A)}o[0]=new A,r[0]=new A;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Ze(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,p))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(Ze(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let p=1;p<=t;p++)o[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),r[p].crossVectors(s[p],o[p])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class nu extends Ci{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Ct){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class G_ extends nu{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function iu(){let i=0,t=0,e=0,n=0;function s(o,r,a,c){i=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,u,h){let d=(r-o)/l-(a-o)/(l+u)+(a-r)/u,f=(a-r)/u-(c-r)/(u+h)+(c-a)/h;d*=u,f*=u,s(r,a,d,f)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const fa=new A,il=new iu,sl=new iu,ol=new iu;class W_ extends Ci{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%o]:(fa.subVectors(s[0],s[1]).add(s[0]),l=fa);const h=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?u=s[(a+2)%o]:(fa.subVectors(s[o-1],s[o-2]).add(s[o-1]),u=fa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),il.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,p,x,g),sl.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,p,x,g),ol.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(il.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),sl.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),ol.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(il.calc(c),sl.calc(c),ol.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Fd(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*i+e}function X_(i,t){const e=1-i;return e*e*t}function $_(i,t){return 2*(1-i)*i*t}function q_(i,t){return i*i*t}function wr(i,t,e,n){return X_(i,t)+$_(i,e)+q_(i,n)}function Y_(i,t){const e=1-i;return e*e*e*t}function j_(i,t){const e=1-i;return 3*e*e*i*t}function Z_(i,t){return 3*(1-i)*i*i*t}function K_(i,t){return i*i*i*t}function br(i,t,e,n,s){return Y_(i,t)+j_(i,e)+Z_(i,n)+K_(i,s)}class zf extends Ci{constructor(t=new Ct,e=new Ct,n=new Ct,s=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ct){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(br(t,s.x,o.x,r.x,a.x),br(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class J_ extends Ci{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(br(t,s.x,o.x,r.x,a.x),br(t,s.y,o.y,r.y,a.y),br(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Uf extends Ci{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Q_ extends Ci{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ff extends Ci{constructor(t=new Ct,e=new Ct,n=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ct){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(wr(t,s.x,o.x,r.x),wr(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class t2 extends Ci{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(wr(t,s.x,o.x,r.x),wr(t,s.y,o.y,r.y),wr(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Of extends Ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],u=s[r>s.length-2?s.length-1:r+1],h=s[r>s.length-3?s.length-1:r+2];return n.set(Fd(a,c.x,l.x,u.x,h.x),Fd(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Ct().fromArray(s))}return this}}var Od=Object.freeze({__proto__:null,ArcCurve:G_,CatmullRomCurve3:W_,CubicBezierCurve:zf,CubicBezierCurve3:J_,EllipseCurve:nu,LineCurve:Uf,LineCurve3:Q_,QuadraticBezierCurve:Ff,QuadraticBezierCurve3:t2,SplineCurve:Of});class e2 extends Ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Od[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Od[s.type]().fromJSON(s))}return this}}let nc=class extends e2{constructor(t){super(),this.type="Path",this.currentPoint=new Ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Uf(this.currentPoint.clone(),new Ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new Ff(this.currentPoint.clone(),new Ct(t,e),new Ct(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new zf(this.currentPoint.clone(),new Ct(t,e),new Ct(n,s),new Ct(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Of(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,o,r,a,c),this}absellipse(t,e,n,s,o,r,a,c){const l=new nu(t,e,n,s,o,r,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};class su extends Le{constructor(t=[new Ct(0,-.5),new Ct(.5,0),new Ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ze(s,0,Math.PI*2);const o=[],r=[],a=[],c=[],l=[],u=1/e,h=new A,d=new Ct,f=new A,p=new A,x=new A;let g=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(p)}for(let v=0;v<=e;v++){const y=n+v*u*s,_=Math.sin(y),L=Math.cos(y);for(let T=0;T<=t.length-1;T++){h.x=t[T].x*_,h.y=t[T].y,h.z=t[T].x*L,r.push(h.x,h.y,h.z),d.x=v/e,d.y=T/(t.length-1),a.push(d.x,d.y);const M=c[3*T+0]*_,P=c[3*T+1],b=c[3*T+0]*L;l.push(M,P,b)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){const _=y+v*t.length,L=_,T=_+t.length,M=_+t.length+1,P=_+1;o.push(L,T,P),o.push(M,P,T)}this.setIndex(o),this.setAttribute("position",new he(r,3)),this.setAttribute("uv",new he(a,2)),this.setAttribute("normal",new he(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new su(t.points,t.segments,t.phiStart,t.phiLength)}}class ou extends su{constructor(t=1,e=1,n=4,s=8){const o=new nc;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new ou(t.radius,t.length,t.capSegments,t.radialSegments)}}class Oo extends Le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new A,u=new Ct;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(r[d]/t+1)/2,u.y=(r[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(a,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class mn extends Le{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const u=[],h=[],d=[],f=[];let p=0;const x=[],g=n/2;let m=0;v(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new he(h,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(f,2));function v(){const _=new A,L=new A;let T=0;const M=(e-t)/n;for(let P=0;P<=o;P++){const b=[],w=P/o,N=w*(e-t)+t;for(let O=0;O<=s;O++){const U=O/s,V=U*c+a,B=Math.sin(V),X=Math.cos(V);L.x=N*B,L.y=-w*n+g,L.z=N*X,h.push(L.x,L.y,L.z),_.set(B,M,X).normalize(),d.push(_.x,_.y,_.z),f.push(U,1-w),b.push(p++)}x.push(b)}for(let P=0;P<s;P++)for(let b=0;b<o;b++){const w=x[b][P],N=x[b+1][P],O=x[b+1][P+1],U=x[b][P+1];(t>0||b!==0)&&(u.push(w,N,U),T+=3),(e>0||b!==o-1)&&(u.push(N,O,U),T+=3)}l.addGroup(m,T,0),m+=T}function y(_){const L=p,T=new Ct,M=new A;let P=0;const b=_===!0?t:e,w=_===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),p++;const N=p;for(let O=0;O<=s;O++){const V=O/s*c+a,B=Math.cos(V),X=Math.sin(V);M.x=b*X,M.y=g*w,M.z=b*B,h.push(M.x,M.y,M.z),d.push(0,w,0),T.x=B*.5+.5,T.y=X*.5*w+.5,f.push(T.x,T.y),p++}for(let O=0;O<s;O++){const U=L+O,V=N+O;_===!0?u.push(V,V+1,U):u.push(V+1,V,U),P+=3}l.addGroup(m,P,_===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ru extends mn{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new ru(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class kf extends nc{constructor(t){super(t),this.uuid=Wo(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new nc().fromJSON(s))}return this}}const n2={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=Bf(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,u,h,d,f;if(n&&(o=a2(i,t,o,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let p=e;p<s;p+=e)h=i[p],d=i[p+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return Lr(o,r,e,a,c,f,0),r}};function Bf(i,t,e,n,s){let o,r;if(s===v2(i,t,e,n)>0)for(o=t;o<e;o+=n)r=kd(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=kd(o,i[o],i[o+1],r);return r&&xc(r,r.next)&&(Dr(r),r=r.next),r}function Vs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(xc(e,e.next)||Oe(e.prev,e,e.next)===0)){if(Dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Lr(i,t,e,n,s,o,r){if(!i)return;!r&&o&&d2(i,n,s,o);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,o?s2(i,n,s,o):i2(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Dr(i),i=l.next,a=l.next;continue}if(i=l,i===a){r?r===1?(i=o2(Vs(i),t,e),Lr(i,t,e,n,s,o,2)):r===2&&r2(i,t,e,n,s,o):Lr(Vs(i),t,e,n,s,o,1);break}}}function i2(i){const t=i.prev,e=i,n=i.next;if(Oe(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,u=s<o?s<r?s:r:o<r?o:r,h=a<c?a<l?a:l:c<l?c:l,d=s>o?s>r?s:r:o>r?o:r,f=a>c?a>l?a:l:c>l?c:l;let p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&_o(s,a,o,c,r,l,p.x,p.y)&&Oe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function s2(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Oe(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,u=s.y,h=o.y,d=r.y,f=a<c?a<l?a:l:c<l?c:l,p=u<h?u<d?u:d:h<d?h:d,x=a>c?a>l?a:l:c>l?c:l,g=u>h?u>d?u:d:h>d?h:d,m=Sh(f,p,t,e,n),v=Sh(x,g,t,e,n);let y=i.prevZ,_=i.nextZ;for(;y&&y.z>=m&&_&&_.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==r&&_o(a,u,c,h,l,d,y.x,y.y)&&Oe(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==r&&_o(a,u,c,h,l,d,_.x,_.y)&&Oe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==r&&_o(a,u,c,h,l,d,y.x,y.y)&&Oe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==r&&_o(a,u,c,h,l,d,_.x,_.y)&&Oe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function o2(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!xc(s,o)&&Vf(s,n,n.next,o)&&Ir(s,o)&&Ir(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Dr(n),Dr(n.next),n=i=o),n=n.next}while(n!==i);return Vs(n)}function r2(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&m2(r,a)){let c=Hf(r,a);r=Vs(r,r.next),c=Vs(c,c.next),Lr(r,t,e,n,s,o,0),Lr(c,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function a2(i,t,e,n){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:i.length,l=Bf(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(p2(l));for(s.sort(c2),o=0;o<s.length;o++)e=l2(s[o],e);return e}function c2(i,t){return i.x-t.x}function l2(i,t){const e=h2(i,t);if(!e)return t;const n=Hf(e,i);return Vs(n,n.next),Vs(e,e.next)}function h2(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&_o(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(h=Math.abs(r-e.y)/(o-e.x),Ir(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&u2(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function u2(i,t){return Oe(i.prev,i,t.prev)<0&&Oe(t.next,i,i.next)<0}function d2(i,t,e,n){let s=i;do s.z===0&&(s.z=Sh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,f2(s)}function f2(i){let t,e,n,s,o,r,a,c,l=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,l*=2}while(r>1);return i}function Sh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function p2(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function _o(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function m2(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!g2(i,t)&&(Ir(i,t)&&Ir(t,i)&&x2(i,t)&&(Oe(i.prev,i,t.prev)||Oe(i,t.prev,t))||xc(i,t)&&Oe(i.prev,i,i.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function xc(i,t){return i.x===t.x&&i.y===t.y}function Vf(i,t,e,n){const s=ma(Oe(i,t,e)),o=ma(Oe(i,t,n)),r=ma(Oe(e,n,i)),a=ma(Oe(e,n,t));return!!(s!==o&&r!==a||s===0&&pa(i,e,t)||o===0&&pa(i,n,t)||r===0&&pa(e,i,n)||a===0&&pa(e,t,n))}function pa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ma(i){return i>0?1:i<0?-1:0}function g2(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Vf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ir(i,t){return Oe(i.prev,i,i.next)<0?Oe(i,t,i.next)>=0&&Oe(i,i.prev,t)>=0:Oe(i,t,i.prev)<0||Oe(i,i.next,t)<0}function x2(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Hf(i,t){const e=new wh(i.i,i.x,i.y),n=new wh(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function kd(i,t,e,n){const s=new wh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function v2(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Er{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Er.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];Bd(t),Vd(n,t);let r=t.length;e.forEach(Bd);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,Vd(n,e[c]);const a=n2.triangulate(n,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Bd(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Vd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class au extends Le{constructor(t=new kf([new Ct(0,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new he(s,3)),this.setAttribute("normal",new he(o,3)),this.setAttribute("uv",new he(r,2));function l(u){const h=s.length/3,d=u.extractPoints(e);let f=d.shape;const p=d.holes;Er.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const v=p[g];Er.isClockWise(v)===!0&&(p[g]=v.reverse())}const x=Er.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const v=p[g];f=f.concat(v)}for(let g=0,m=f.length;g<m;g++){const v=f[g];s.push(v.x,v.y,0),o.push(0,0,1),r.push(v.x,v.y)}for(let g=0,m=x.length;g<m;g++){const v=x[g],y=v[0]+h,_=v[1]+h,L=v[2]+h;n.push(y,_,L),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return _2(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new au(n,t.curveSegments)}}function _2(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Hs extends Le{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const u=[],h=new A,d=new A,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){const v=[],y=m/n;let _=0;m===0&&r===0?_=.5/e:m===n&&c===Math.PI&&(_=-.5/e);for(let L=0;L<=e;L++){const T=L/e;h.x=-t*Math.cos(s+T*o)*Math.sin(r+y*a),h.y=t*Math.cos(r+y*a),h.z=t*Math.sin(s+T*o)*Math.sin(r+y*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(T+_,1-y),v.push(l++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){const y=u[m][v+1],_=u[m][v],L=u[m+1][v],T=u[m+1][v+1];(m!==0||r>0)&&f.push(y,_,T),(m!==n-1||c<Math.PI)&&f.push(_,L,T)}this.setIndex(f),this.setAttribute("position",new he(p,3)),this.setAttribute("normal",new he(x,3)),this.setAttribute("uv",new he(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class vc extends Le{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],c=[],l=[],u=new A,h=new A,d=new A;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){const x=p/s*o,g=f/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(x),h.y=(t+e*Math.cos(g))*Math.sin(x),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(p/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){const x=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,v=(s+1)*f+p;r.push(x,g,v),r.push(g,m,v)}this.setIndex(r),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Kt extends Xs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gf,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gf extends Ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class M2 extends Gf{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const rl=new re,Hd=new A,Gd=new A;class y2{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mc,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Hd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hd),Gd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gd),e.updateMatrixWorld(),rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class S2 extends y2{constructor(){super(new Cf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class w2 extends Gf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new S2}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Wd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Wd(){return performance.now()}class Xd{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ze(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class b2 extends B_{constructor(t=10,e=10,n=4473924,s=8947848){n=new Jt(n),s=new Jt(s);const o=e/2,r=t/e,a=t/2,c=[],l=[];for(let d=0,f=0,p=-a;d<=e;d++,p+=r){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const x=d===o?n:s;x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3}const u=new Le;u.setAttribute("position",new he(c,3)),u.setAttribute("color",new he(l,3));const h=new eu({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}let E2=class extends Gs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wh);const $d={type:"change"},lu={type:"start"},Wf={type:"end"},ga=new pc,qd=new Vi,T2=Math.cos(70*ym.DEG2RAD),qe=new A,An=2*Math.PI,Te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},al=1e-6;class A2 extends E2{constructor(t,e=null){super(t,e),this.state=Te.NONE,this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bo.ROTATE,MIDDLE:bo.DOLLY,RIGHT:bo.PAN},this.touches={ONE:xo.ROTATE,TWO:xo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new Xn,this._lastTargetPosition=new A,this._quat=new Xn().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xd,this._sphericalDelta=new Xd,this._scale=1,this._panOffset=new A,this._rotateStart=new Ct,this._rotateEnd=new Ct,this._rotateDelta=new Ct,this._panStart=new Ct,this._panEnd=new Ct,this._panDelta=new Ct,this._dollyStart=new Ct,this._dollyEnd=new Ct,this._dollyDelta=new Ct,this._dollyDirection=new A,this._mouse=new Ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=C2.bind(this),this._onPointerDown=R2.bind(this),this._onPointerUp=P2.bind(this),this._onContextMenu=F2.bind(this),this._onMouseWheel=D2.bind(this),this._onKeyDown=N2.bind(this),this._onTouchStart=z2.bind(this),this._onTouchMove=U2.bind(this),this._onMouseDown=L2.bind(this),this._onMouseMove=I2.bind(this),this._interceptControlDown=O2.bind(this),this._interceptControlUp=k2.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($d),this.update(),this.state=Te.NONE}update(t=null){const e=this.object.position;qe.copy(e).sub(this.target),qe.applyQuaternion(this._quat),this._spherical.setFromVector3(qe),this.autoRotate&&this.state===Te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=An:n>Math.PI&&(n-=An),s<-Math.PI?s+=An:s>Math.PI&&(s-=An),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(qe.setFromSpherical(this._spherical),qe.applyQuaternion(this._quatInverse),e.copy(this.target).add(qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=qe.length();r=this._clampDistance(a*this._scale);const c=a-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){const a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;const l=new A(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(ga.origin.copy(this.object.position),ga.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ga.direction))<T2?this.object.lookAt(this.target):(qd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ga.intersectPlane(qd,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>al||8*(1-this._lastQuaternion.dot(this.object.quaternion))>al||this._lastTargetPosition.distanceToSquared(this.target)>al?(this.dispatchEvent($d),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?An/60*this.autoRotateSpeed*t:An/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){qe.setFromMatrixColumn(e,0),qe.multiplyScalar(-t),this._panOffset.add(qe)}_panUp(t,e){this.screenSpacePanning===!0?qe.setFromMatrixColumn(e,1):(qe.setFromMatrixColumn(e,0),qe.crossVectors(this.object.up,qe)),qe.multiplyScalar(t),this._panOffset.add(qe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;qe.copy(s).sub(this.target);let o=qe.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(An*this._rotateDelta.x/e.clientHeight),this._rotateUp(An*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(An*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-An*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(An*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-An*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(An*this._rotateDelta.x/e.clientHeight),this._rotateUp(An*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function R2(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function C2(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function P2(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wf),this.state=Te.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function L2(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case bo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Te.DOLLY;break;case bo.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}break;case bo.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(lu)}function I2(i){switch(this.state){case Te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function D2(i){this.enabled===!1||this.enableZoom===!1||this.state!==Te.NONE||(i.preventDefault(),this.dispatchEvent(lu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Wf))}function N2(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function z2(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case xo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Te.TOUCH_ROTATE;break;case xo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Te.TOUCH_PAN;break;default:this.state=Te.NONE}break;case 2:switch(this.touches.TWO){case xo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Te.TOUCH_DOLLY_PAN;break;case xo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Te.TOUCH_DOLLY_ROTATE;break;default:this.state=Te.NONE}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(lu)}function U2(i){switch(this._trackPointer(i),this.state){case Te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Te.NONE}}function F2(i){this.enabled!==!1&&i.preventDefault()}function O2(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function k2(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const B2=9.81;function lo(i,t,e,n){const s=i*Math.PI/180,o=2*Math.PI/t;return{dirX:Math.sin(s),dirZ:Math.cos(s),amp:e,k:o,omega:Math.sqrt(B2*o),phase:n}}const cl=3;class V2{constructor(){S(this,"waves",[lo(10,7,1,0),lo(40,5,.8,1.3),lo(-30,3.6,.6,2.1),lo(65,2.6,.45,4),lo(-55,2,.32,.7),lo(20,1.6,.22,5.2)]);S(this,"scale",1);let t=0;for(const s of this.waves)t+=s.amp*s.amp;const e=Math.sqrt(t/2),n=cl/100/4/e;for(const s of this.waves)s.amp*=n}setHeightCm(t){this.scale=t/cl}get heightCm(){return this.scale*cl}height(t,e,n){let s=0;for(const o of this.waves)s+=o.amp*Math.sin(o.k*(o.dirX*t+o.dirZ*e)-o.omega*n+o.phase);return s*this.scale}verticalVelocity(t,e,n){let s=0;for(const o of this.waves)s-=o.amp*o.omega*Math.cos(o.k*(o.dirX*t+o.dirZ*e)-o.omega*n+o.phase);return s*this.scale}}const H2=1e3,Sn={depth:.3,flowTime:5,airTime:3,spread:.05,sprayAir:0,airWidth:.65,maxVoid:.6};class bh{constructor(t,e){S(this,"n");S(this,"dx");S(this,"originX",0);S(this,"originZ",0);S(this,"ux");S(this,"uz");S(this,"air");S(this,"t1");S(this,"t2");S(this,"t3");this.n=t,this.dx=e;const n=t*t;this.ux=new Float32Array(n),this.uz=new Float32Array(n),this.air=new Float32Array(n),this.t1=new Float32Array(n),this.t2=new Float32Array(n),this.t3=new Float32Array(n)}clear(){this.ux.fill(0),this.uz.fill(0),this.air.fill(0)}shift(t,e){const n=this.n;for(const s of[this.ux,this.uz,this.air]){const o=s.slice();s.fill(0);for(let r=0;r<n;r++){const a=r+e;if(!(a<0||a>=n))for(let c=0;c<n;c++){const l=c+t;l<0||l>=n||(s[r*n+c]=o[a*n+l])}}}this.originX+=t*this.dx,this.originZ+=e*this.dx}addMomentum(t,e,n,s){const o=1/(H2*Sn.depth*this.dx*this.dx);this.splat(this.ux,t,e,n*o),this.splat(this.uz,t,e,s*o)}addAir(t,e,n){n<=0||this.addAirSigned(t,e,n)}addAirSigned(t,e,n){if(n===0)return;const s=this.n,o=(t-this.originX)/this.dx,r=(e-this.originZ)/this.dx,a=Math.max(Sn.airWidth/this.dx,.7),c=Math.ceil(a*2),l=Math.max(1,Math.floor(o-c)),u=Math.min(s-2,Math.ceil(o+c)),h=Math.max(1,Math.floor(r-c)),d=Math.min(s-2,Math.ceil(r+c));if(l>u||h>d)return;let f=0;for(let x=h;x<=d;x++)for(let g=l;g<=u;g++)f+=Math.exp(-((g-o)**2+(x-r)**2)/(2*a*a));if(f<=0)return;const p=n/(f*this.dx*this.dx);for(let x=h;x<=d;x++)for(let g=l;g<=u;g++)this.air[x*s+g]+=p*Math.exp(-((g-o)**2+(x-r)**2)/(2*a*a))}splat(t,e,n,s){const o=this.n,r=(e-this.originX)/this.dx,a=(n-this.originZ)/this.dx;if(r<1||a<1||r>=o-2||a>=o-2)return;const c=r|0,l=a|0,u=r-c,h=a-l,d=l*o+c;t[d]+=s*(1-u)*(1-h),t[d+1]+=s*u*(1-h),t[d+o]+=s*(1-u)*h,t[d+o+1]+=s*u*h}at(t,e,n){const s=this.n;if(e<0||n<0||e>=s-1||n>=s-1)return 0;const o=e|0,r=n|0,a=e-o,c=n-r,l=r*s+o;return(t[l]*(1-a)+t[l+1]*a)*(1-c)+(t[l+s]*(1-a)+t[l+s+1]*a)*c}sampleRaw(t,e,n){const s=(t-this.originX)/this.dx,o=(e-this.originZ)/this.dx;n.x=this.at(this.ux,s,o),n.z=this.at(this.uz,s,o),n.w=this.at(this.air,s,o)/Sn.depth}sample(t,e,n){const s=(t-this.originX)/this.dx,o=(e-this.originZ)/this.dx;n.x=this.at(this.ux,s,o),n.z=this.at(this.uz,s,o),n.w=Math.min(Sn.maxVoid,Math.max(0,this.at(this.air,s,o)/Sn.depth))}step(t){const e=this.n,{ux:n,uz:s,air:o,t1:r,t2:a,t3:c}=this,l=t/this.dx;for(let f=0;f<e;f++)for(let p=0;p<e;p++){const x=f*e+p,g=p-n[x]*l,m=f-s[x]*l;r[x]=this.at(n,g,m),a[x]=this.at(s,g,m),c[x]=this.at(o,g,m)}const u=Sn.spread*t/(this.dx*this.dx),h=Math.exp(-t/Sn.flowTime),d=Math.exp(-t/Sn.airTime);for(let f=1;f<e-1;f++)for(let p=1;p<e-1;p++){const x=f*e+p;n[x]=(r[x]+u*(r[x-1]+r[x+1]+r[x-e]+r[x+e]-4*r[x]))*h,s[x]=(a[x]+u*(a[x-1]+a[x+1]+a[x-e]+a[x+e]-4*a[x]))*h,o[x]=(c[x]+u*(c[x-1]+c[x+1]+c[x-e]+c[x+e]-4*c[x]))*d}}}const zs=-1.5,Dn=1.5,G2=.05,go=.12,Hn=.05,ic=.04,sc=-.91,oc=-.65,Mo=.073,W2=.012,Os=.63,ir=.06,X2=.04;function Ki(i){if(i<=ir)return Os-.005*(ir-i)/(ir-zs);const t=Math.min(1,(i-ir)/(Dn-ir));return Os-(Os-X2)*t**2.3}const $2=.12;function $o(i,t=di(i)){return Math.max(.02,dn(i)-t)}const _c=(i,t=di(i))=>Math.min($o(i,t),$2);function hu(i,t=di(i)){return Math.min(1,Math.max(0,Ki(i)-.01)/(_c(i,t)/2))}function Mc(i,t=di(i)){return Ki(i)-hu(i,t)*_c(i,t)/2}function rc(i,t,e=di(i)){const n=$o(i,e),s=_c(i,e),o=t*n;return{x:o>=s?Ki(i):Ki(i)-hu(i,e)*s*(1-o/s)**2/2,y:e+o}}function q2(i,t){const e=_c(i),n=t*$o(i);return n>=e?0:hu(i)*(1-n/e)}const ci=[{z:-.95,r:Os},{z:0,r:Os},{z:.75,r:.5},{z:1.2,r:.27},{z:1.4,r:.1}];function di(i){return i<Hn?ic:i<.5?0:.12*((i-.5)/(Dn-.5))**2}function Y2(i){return i<.5?0:.24*(i-.5)/(Dn-.5)**2}function dn(i){return i<.4?.2:.2-.07*((i-.4)/(Dn-.4))**1.5}function Xf(i,t){const e=Math.max(Ki(i),1e-4),n=Math.min(1,Math.abs(t)/e);return dn(i)+.025*(1-n*n)}const Bn=-1.38,Tr=.15,Ro=.57,us=.42,uu=(i,t,e,n)=>{if(i<=e)return t;const s=Math.min(1,(i-e)/(n-e));return t*Math.max(0,1-s**2.2)**.55};function pi(i){return uu(i,.44-.02*Math.max(0,Math.min(1,(i-Bn)/(0-Bn))),0,Ro)}function Yd(i){return uu(i,.3,-.05,.48)}function sr(i){return uu(i,.24,-.1,.3)}function ll(i){if(i<=Tr)return us;const t=Math.min(1,(i-Tr)/(Ro-Tr));return us+(dn(Ro)-us)*Math.sin(t*Math.PI/2)}const xa=1e3,j2=9.81,Z2=101325,K2=2340,$a=8,hl=.2,$f={diameter:.14,pitch:.235,ear:.5,blades:3,cup:.6};function J2(){return{u:new Float32Array($a),cav:0,vent:0,loading:0,sigma:10,tipRatio:1,ventLimit:0}}function jd(i){return Math.sqrt(Math.max(0,(i-.12)*(1.03-i)))}function Q2(i){const t=2*Math.PI*.72,e=.2,n=Math.abs(i);if(n<=e)return t*i;const s=t*e-1.4*(n-e);return Math.sign(i)*Math.max(.55,s)}function tM(i,t,e,n,s,o,r,a,c=0){const l=i.diameter/2,u=i.blades,h=2*Math.PI*e,d=(1-hl)/$a;let f=0;for(let lt=0;lt<$a;lt++)f+=jd(hl+(lt+.5)*d)*d*l;const p=i.ear*Math.PI*l*l/(u*f),x=.017*i.cup,g=.003*i.cup;let m=0,v=0;for(let lt=0;lt<$a;lt++){const ht=hl+(lt+.5)*d,Y=ht*l,I=d*l,z=p*jd(ht),k=h*Y,Z=Math.atan(i.pitch/(2*Math.PI*Y))+x;let rt=t.u[lt],ct=0,dt=0;for(let ot=0;ot<4;ot++){const wt=n+rt,F=Math.atan2(wt,Math.max(k,.001)),St=wt*wt+k*k,Gt=Q2(Z-F),Yt=.01+.008*Gt*Gt+g,zt=.5*xa*St*z*u*I,se=Math.cos(F),Ut=Math.sin(F);ct=zt*(Gt*se-Yt*Ut),dt=zt*(Gt*Ut+Yt*se)*Y;const D=u*(1-ht)/(2*ht*Math.max(.05,Ut)),E=Math.max(.05,2/Math.PI*Math.acos(Math.min(1,Math.exp(-D)))),q=Math.max(0,ct)/(4*Math.PI*Y*xa*E*I),ft=(-n+Math.sqrt(Math.max(0,n*n+4*q)))/2;rt=.5*rt+.5*ft}t.u[lt]=Number.isFinite(rt)?rt:0,m+=ct,v+=dt}const y=i.pitch/i.diameter,_=i.ear*Math.PI*l*l*(1.067-.229*y),L=n*n+(.7*Math.PI*e*i.diameter)**2,T=.5*xa*Math.max(L,1),M=Math.max(.02,(Z2+xa*j2*Math.max(0,s)-K2)/T),P=Math.max(0,m)/(T*_),b=.5*M**.5,w=Math.max(0,Math.min(1,(P/b-1)/3));t.cav+=(w-t.cav)*Math.min(1,a*20),t.loading=P,t.sigma=M;const O=(s-l)/i.diameter,U=Math.min(2,P/.5),V=.05-.08*i.cup+Math.min(.6,r),B=Math.max(-.2,V+.25*U),X=Math.max(-.2,V+.25*U*(1-.6*t.vent)+.05);if(t.tipRatio=O,t.ventLimit=B,O<B){const lt=Math.min(1,(B-O)/.15);t.vent+=lt*(1-t.vent)*Math.min(1,a*10)}else if(O>X){const lt=1.5+8*(O-X)+Math.max(0,1-U/.7)*4;t.vent=Math.max(0,t.vent-lt*a)}const Q=Math.min(1,c);t.vent<Q&&(t.vent+=(Q-t.vent)*Math.min(1,a*10)),t.vent=Math.max(t.vent,1-o);const j=t.cav,pt=t.vent,vt=(1-.55*j*j)*(1-.75*pt)*o,Mt=(1-.3*j*j)*(1-.8*pt)*o;return{thrust:m*vt,torque:v*Mt+.002*h*(1-o)}}const Zd=1e3,or={alpha:.11,b0:.7,emitDt:1/30,handTime:2.5,selfAge:2};class qf{constructor(){S(this,"parcels",[]);S(this,"em",new Map);S(this,"t",-1);S(this,"retired",[]);S(this,"seq",0)}clear(){this.parcels.length=0,this.em.clear(),this.retired.length=0,this.t=-1}advance(t){if(this.t<0||t<this.t-.5){this.t>=0&&this.clear(),this.t=t;return}const e=t-this.t;if(e<=0)return;this.t=t;const n=this.parcels;let s=0;for(let o=0;o<n.length;o++){const r=n[o];r.age+=e;const a=or.alpha*r.uc*e,c=r.b+a;if(r.uc*=r.b*r.b/(c*c),r.b=c,r.x+=r.dx*r.uc*.5*e,r.z+=r.dz*r.uc*.5*e,r.age>=or.handTime||r.uc<.02){const l=Zd*r.uc*Math.PI*r.b*r.b*r.len;this.retired.push({seq:++this.seq,x:r.x,z:r.z,ix:r.dx*l,iz:r.dz*l});continue}n[s++]=r}n.length=s,this.retired.length>4e3&&this.retired.splice(0,this.retired.length-4e3)}emit(t,e,n,s,o,r,a){let c=this.em.get(t);c||(c={imp:0,acc:0,x:e.x,y:e.y,z:e.z,dx:0,dz:0,px:e.x,pz:e.z,r:a},this.em.set(t,c));const l=Math.hypot(n,s);if(o>0&&l>1e-6&&(c.imp+=o,c.dx+=n/l*o,c.dz+=s/l*o),c.acc+=r,c.x=e.x,c.y=e.y,c.z=e.z,c.r=a,c.acc<or.emitDt)return;const u=Math.max(.1,Math.hypot(e.x-c.px,e.z-c.pz)),h=Math.hypot(c.dx,c.dz);if(c.imp>0&&h>0){const d=or.b0*a,f=c.imp/(Zd*Math.PI*d*d*u);this.parcels.push({x:(e.x+c.px)/2,y:e.y,z:(e.z+c.pz)/2,dx:c.dx/h,dz:c.dz/h,uc:f,b:d,len:u,age:0,owner:t})}c.imp=c.acc=c.dx=c.dz=0,c.px=e.x,c.pz=e.z}near(t,e,n,s,o){o.length=0;for(const r of this.parcels){if(r.owner===s&&r.age<or.selfAge)continue;const a=n+3*r.b+r.len;Math.abs(r.x-t)<a&&Math.abs(r.z-e)<a&&o.push(r)}return o}static sample(t,e,n,s){for(const o of t){const r=e.x-o.x,a=e.z-o.z,c=r*o.dx+a*o.dz,l=Math.max(o.b,o.len/2);if(Math.abs(c)>3*l)continue;const u=(r-c*o.dx)**2+(a-c*o.dz)**2,h=o.b*o.b;if(u>9*h)continue;const d=e.y-o.y,f=e.y-(2*n-o.y),p=Math.exp(-u/h)*(Math.exp(-(d*d)/h)+Math.exp(-(f*f)/h)),x=o.uc*p*Math.exp(-(c*c)/(2*l*l))*(o.len/(Math.sqrt(2*Math.PI)*l));s.x+=o.dx*x,s.z+=o.dz*x}}}const Co=new qf,vi=9.81,vn=1e3,eM=1.2,rr=115,Ai=52,nM=new A(0,.2,-.55),ho=new A(140,140,22),Vn=new A(0,.55,-.25),iM=.3,sM=-.2,oM=Ai*(2*Math.PI*3)**2,rM=2*.7*Ai*2*Math.PI*3,Kd=Ai*vi*3.2,aM=.03,ko=new A(0,.38,-1.52),du=new A(0,.04,-.1);ko.clone().add(du);const cM=new A(0,-.57,-.16),lM=new A(0,-.47,-.12),hM=new A(0,-.44,-.14),uM=.057,va=2.4,dM=1.9,xr=[-.5,0,.5,1,1.5,2,3],ac=1,Hi={peakTorque:37,peakRpm:5400,idleRpm:1300,limitRpm:6600,inertia:.015},gn={planing:.35,friction:.0022,wetSmooth:.008,pressureFetch:.2,pressurePeak:3,stepRise:.035,stepVentSpeed:6,chineCd:1,yawSide:2.5,yawSideStall:.35,yawSideAft:-1,yawSideStallAft:-1,stallDrop:1,sideLift:.4,keelFinSlope:1.8,keelFinStall:.45,keelFinCd0:.008,keelFinVortex:0,sideWalls:!0,wallPlaning:1,windmill:!0,ventSpeed:0,ventSpeedGear:0,plateCn:0,finPlateCn:0,driftStiff:0,driftStiff0:1.45,driftDamp:0,driftDamp0:.9,chineVent:!0,foilVent3d:!0,yawSideNormal:!1,foilVent:!1,foilVentA0:.15,foilVentK:6,wakeSmooth:0,spray:!0,sprayDrop:.003,propAir:.5,propAirFull:.001,jetReach:1.5,plateBack:!1,obliqueFloor:3,obliqueMax:.6,keelFinZ:void 0,heaveDamp:450,airDrag:.62,finDrag:6e-4,finArea:.02,rollDamp:110,pitchDamp:150,yawDamp:30,yawDamp2:0,maxSteer:.42,steerRate:2.2,steerTorque:0,steerFullSpeed:16,yawInertia:140,kickYawArm:0,kickHandArm:0,kickTime:.25,leanUp:void 0,leanSide:.55,planeCop:!1,planeCopK:.17,planeCopPsi:.2,planeCopMix:1,hullComZ:-.7,plateLift:.5,motorHeight:.05},Yf={maxSteer:.5,foilVent:!0,steerTorque:55,yawDamp2:40,plateCn:2,chineCd:.3,obliqueFloor:14,obliqueMax:.15,plateBack:!0,yawSideNormal:!0},fM={...gn},jf="boatgame.turnPhys",pM={...Yf,yawSide:3,keelFinSlope:1,yawDamp:0,yawDamp2:0};let Mn=!1,Us="v2";function yc(i){Us=i,Mn=i!=="v1";const t=gn.motorHeight;Object.assign(gn,fM,i==="v2"?Yf:i==="drift"?pM:{},{motorHeight:t})}let Eh=null;try{typeof localStorage<"u"&&(Eh=localStorage.getItem(jf))}catch{}var tf,ef;const mM=!!((ef=(tf=globalThis.process)==null?void 0:tf.env)!=null&&ef.V1);yc(mM||Eh==="v1"?"v1":Eh==="v2"?"v2":"drift");const Rn=7;function Zf(i,t){return(i-(Rn-1)/2)*2*Mc(t)/Rn}function gM(){const i=[],t=(s,o,r)=>{for(let a=0;a<r;a++)i.push([s+(o-s)*a/r,s+(o-s)*(a+1)/r])};t(zs,Hn,6),t(Hn,Dn,11);const e=[],n=[];for(const[s,o]of i){const r=(s+o)/2,a=Mc(r),c=di(r),l=new A(0,-1,Y2(r)).normalize();for(let d=0;d<Rn;d++){const f=d===0?-1:d===Rn-1?1:0;e.push({p:new A(Zf(d,r),c,r),n:l,area:(o-s)*2*a/Rn,len:o-s,depthMax:dn(r)-c,side:f,col:d,aft:r<Hn?Hn-r:-1,wall:!1})}const u=c,h=$o(r,u);for(const d of[1,-1])for(const f of[.25,.75]){const p=rc(r,f,u),x=q2(r,f);n.push({p:new A(d*p.x,p.y,r),n:new A(d,-x,0).normalize(),area:(o-s)*(h/2)*Math.hypot(1,x),len:o-s,depthMax:dn(r)-p.y,side:0,col:-1,aft:-1,wall:!0})}}return[...e,...n]}const Jd=Array.from({length:Rn},(i,t)=>new A(Zf(t,Hn),0,Hn)),ul=oc-sc,Qd=new A(0,ic,(sc+oc)/2);function xM(i){const t=(i-Hi.peakRpm)/3200;return Math.max(16,Hi.peakTorque*(1-.55*t*t))}function t0(i){const t=Math.sin(Math.min(Math.PI/2,i));return 2*Math.PI*t/(4+Math.PI*t)}function _a(i,t,e){if(!gn.foilVent3d)return t0(i);const n=2/Math.max(.001,2*Math.PI/t-1);return Math.min(e,t0(i)/(1+1/(2*n)))}function Ma(i,t,e,n){return e+n*2*vi*Math.max(.005,t)/Math.max(1,i*i)}const ve=new A,_n=new A,te=new A,vM=new A,mi=new A,Fi=new A,Ge=new Xn,dl=new A(0,1,0),_M=new A(1,0,0),Is=class Is{constructor(t,e=t){S(this,"prevBeta",NaN);S(this,"gearSteerMoment",0);S(this,"comW",new A);S(this,"vel",new A);S(this,"quat",new Xn);S(this,"angVel",new A);S(this,"origin",new A);S(this,"riderB",Vn.clone());S(this,"riderW",new A);S(this,"riderVel",new A);S(this,"legForce",new A);S(this,"legLoad",1);S(this,"kickForce",0);S(this,"legLatAvg",0);S(this,"riderTarget",Vn.clone());S(this,"riderTargetVel",new A);S(this,"comB",new A);S(this,"steerAngle",0);S(this,"throttle",0);S(this,"engineOmega",Hi.idleRpm/60*2*Math.PI);S(this,"propThrust",0);S(this,"propImmersion",1);S(this,"tilt",0);S(this,"plateImmersion",0);S(this,"finVent",0);S(this,"keelVent",0);S(this,"propDepth",0);S(this,"plateForce",0);S(this,"prop",{...$f});S(this,"propState",J2());S(this,"wetPoints",0);S(this,"keelFinImmersion",0);S(this,"keelFinForce",0);S(this,"edgeY",new Float32Array(Rn));S(this,"cellT");S(this,"cellX");S(this,"chineAt",new A);S(this,"edgeK",new Float32Array(Rn));S(this,"hull",gM());S(this,"pressure",new Float32Array(this.hull.length*4));S(this,"spray",new Float32Array(this.hull.length*7));S(this,"sprayDyn",new A);S(this,"wakeMom",new Float32Array((this.hull.length+5)*5));S(this,"fl",{x:0,z:0,w:0});S(this,"jetId",Is.nextId++);S(this,"jetNear",[]);S(this,"stepT",0);S(this,"hullFx",new Float32Array(this.hull.length*Is.FX_STRIDE));S(this,"impact",new Float32Array(this.hull.length));S(this,"wasWet",new Uint8Array(this.hull.length));S(this,"propPos",new A);S(this,"propAxis",new A(0,0,1));S(this,"propJet",0);S(this,"diag",{planing:0,friction:0,lateral:0,heave:0,fin:0,air:0,thrust:0});S(this,"rollDiag",{});S(this,"rollAxis",new A);S(this,"diagLat",!1);S(this,"diagDrag",!1);S(this,"diagYaw",!1);S(this,"rollDiagOn",!1);S(this,"force",new A);S(this,"torque",new A);S(this,"surface");S(this,"motorSurface");S(this,"extForce",new A);S(this,"sprayHit",0);S(this,"extTorque",new A);this.motorSurface=e;const n=this.hull.filter(s=>!s.wall).length;this.cellT=new Float32Array(n/Rn),this.cellX=new Float32Array(n/Rn),this.surface=t,this.updateComB()}roll(t,e,n){this.rollDiagOn&&(_n.subVectors(n,this.comW),this.rollDiag[t]=(this.rollDiag[t]??0)+(this.diagDrag||this.diagLat?(this.diagDrag?-1:1)*e.dot(this.rollAxis):mi.crossVectors(_n,e).dot(this.rollAxis)))}get rpm(){return this.engineOmega*60/(2*Math.PI)}reset(t,e,n,s){this.quat.setFromAxisAngle(dl,n),this.vel.set(0,0,0),this.angVel.set(0,0,0),this.riderB.copy(Vn),this.riderTarget.copy(Vn),this.riderTargetVel.set(0,0,0),this.riderVel.set(0,0,0),this.steerAngle=0,this.throttle=0,this.engineOmega=Hi.idleRpm/60*2*Math.PI,this.propState.cav=this.propState.vent=0,this.finVent=0,this.keelVent=0,this.legLatAvg=this.kickForce=0,this.propState.u.fill(0),this.extForce.set(0,0,0),this.extTorque.set(0,0,0),this.updateComB();const o=this.surface.height(t,e,s);this.origin.set(t,o-.05,e),this.comW.copy(this.comB).applyQuaternion(this.quat).add(this.origin),this.toWorld(Vn,this.riderW)}updateComB(){this.comB.copy(nM).setZ(gn.hullComZ)}shift(t,e){this.comW.x+=t,this.comW.z+=e,this.riderW.x+=t,this.riderW.z+=e,this.origin.x+=t,this.origin.z+=e}forward(t){return t.set(0,0,1).applyQuaternion(this.quat)}velocityAt(t,e){return this.pointVel(t,e)}invInertia(t,e){return Ge.copy(this.quat).invert(),e.copy(t).applyQuaternion(Ge),e.set(e.x/ho.x,e.y/gn.yawInertia,e.z/ho.z),e.applyQuaternion(this.quat)}impulseResponse(t,e){const n=_n.subVectors(e,this.comW),s=this.invInertia(mi.crossVectors(n,t),Fi);return 1/rr+mi.crossVectors(s,n).dot(t)}applyImpulse(t,e){this.vel.addScaledVector(t,1/rr);const n=_n.subVectors(e,this.comW);this.angVel.add(this.invInertia(mi.crossVectors(n,t),Fi))}speed(){return this.vel.length()}toWorld(t,e){return e.copy(t).applyQuaternion(this.quat).add(this.origin)}pointVel(t,e){return _n.subVectors(t,this.comW),e.crossVectors(this.angVel,_n).add(this.vel)}sampleFlow(t,e){return t.flowAt?t.flowAt(e.x,e.z,this.fl):this.fl.x=this.fl.z=this.fl.w=0,this.jetNear.length&&qf.sample(this.jetNear,e,t.height(e.x,e.z,this.stepT),this.fl),1-this.fl.w}waterVel(t,e){return this.pointVel(t,e),e.x-=this.fl.x,e.z-=this.fl.z,e}setMom(t,e,n,s,o,r){const a=t*5;this.wakeMom[a]=e,this.wakeMom[a+1]=n,this.wakeMom[a+2]=s,this.wakeMom[a+3]=o,this.wakeMom[a+4]=r}addForce(t,e){this.force.add(t),_n.subVectors(e,this.comW),this.torque.add(mi.crossVectors(_n,t))}step(t,e,n){const s=gn,o=this.surface,r=this.motorSurface;this.stepT=n,Co.advance(n),Co.near(this.comW.x,this.comW.z,2.5,this.jetId,this.jetNear);const a=Math.max(1,this.vel.length()),c=s.steerTorque>0?1:Math.min(1,(s.steerFullSpeed/a)**2);let u=e.steer*s.maxSteer*c-this.steerAngle;if(s.steerTorque>0){const gt=this.gearSteerMoment,tt=gt*Math.sign(this.steerAngle)<0?Math.abs(gt)-s.steerTorque:0;tt>0&&(Math.sign(u)===Math.sign(this.steerAngle)&&(u=0),this.steerAngle-=Math.sign(this.steerAngle)*s.steerRate*t*Math.min(1,tt/s.steerTorque))}this.steerAngle+=Math.sign(u)*Math.min(Math.abs(u),s.steerRate*t),this.throttle+=(e.throttle-this.throttle)*Math.min(1,t*10),this.updateComB(),this.origin.copy(this.comB).applyQuaternion(this.quat).negate().add(this.comW);const h=Fi.set(Vn.x-e.leanX*s.leanSide,Vn.y+Math.abs(e.leanX)*(s.leanUp??sM),Vn.z+e.leanZ*iM),d=1-Math.exp(-t/aM);this.riderTargetVel.copy(h).sub(this.riderTarget).multiplyScalar(d/t),this.riderTarget.lerp(h,d);const f=this.toWorld(this.riderTarget,new A),p=this.pointVel(f,new A).add(ve.copy(this.riderTargetVel).applyQuaternion(this.quat));this.riderW.distanceToSquared(f)>.8*.8&&(this.riderW.copy(f),this.riderVel.copy(p));const x=this.legForce;x.subVectors(f,this.riderW).multiplyScalar(oM),x.addScaledVector(p.sub(this.riderVel),rM),x.y+=Ai*vi;const g=ve.set(0,1,0).applyQuaternion(this.quat),m=x.dot(g);m<-408.096&&x.addScaledVector(g,-408.096-m);const v=x.length();v>Kd&&x.multiplyScalar(Kd/v),this.legLoad=Math.max(0,x.dot(g))/(Ai*vi),this.diagDrag?this.rollAxis.copy(this.vel).normalize():this.diagLat?this.rollAxis.set(this.vel.z,0,-this.vel.x).normalize():this.rollAxis.set(0,this.diagYaw?1:0,this.diagYaw?0:1).applyQuaternion(this.quat);for(const gt in this.rollDiag)this.rollDiag[gt]=0;this.force.set(0,-rr*vi,0),this.torque.set(0,0,0),this.force.add(this.extForce),this.torque.add(this.extTorque),this.addForce(x.clone().negate(),this.riderW);{const gt=ve.set(1,0,0).applyQuaternion(this.quat),tt=-x.dot(gt);this.legLatAvg+=(tt-this.legLatAvg)*Math.min(1,t/s.kickTime);const bt=tt-this.legLatAvg;this.kickForce=bt,this.pointVel(this.riderW,_n);const Dt=this.riderVel.dot(gt)-_n.dot(gt),C=-bt*Dt>0?s.kickYawArm:-s.kickHandArm,at=mi.set(0,1,0).applyQuaternion(this.quat);this.torque.addScaledVector(at,-bt*C),this.rollDiagOn&&this.diagYaw&&(this.rollDiag.蹴り=-bt*C)}this.roll("選手",x.clone().negate(),this.riderW),this.roll("船体の重さ",new A(0,-rr*vi,0),this.comW);const y=vM.set(-1,0,0).applyQuaternion(this.quat).clone(),_=this.vel.length(),L=_>.1?this.vel.clone().multiplyScalar(1/_):new A,T=this.diag;T.planing=T.friction=T.lateral=T.heave=T.fin=T.air=0;const M=Math.max(0,Math.min(1,(_-s.stepVentSpeed+2)/4)),P=this.edgeY,b=this.edgeK;for(let gt=0;gt<Jd.length;gt++){const tt=this.toWorld(Jd[gt],mi),bt=o.height(tt.x,tt.z,n)-tt.y;P[gt]=tt.y,b[gt]=M*Math.max(0,Math.min(1,bt/.01))}const w=Fi.set(0,1,0).applyQuaternion(this.quat).clone();let N=0;const O=new A,U=new A,V=new A,B=new A,X=y.clone().negate();this.cellT.fill(0),this.wakeMom.fill(0);const Q=this.hull.length;let j=0,pt=0;for(let gt=0;gt<this.hull.length;gt++){const tt=this.hull[gt];this.toWorld(tt.p,O);const bt=gt*4;this.pressure[bt]=O.x,this.pressure[bt+1]=O.z,this.pressure[bt+2]=0,this.pressure[bt+3]=s.wakeSmooth,this.spray[gt*7+6]=0;let Dt=o.height(O.x,O.z,n);if(tt.aft>0&&b[tt.col]>0){const fe=Math.min(Dt,P[tt.col]+s.stepRise*tt.aft);Dt+=(fe-Dt)*b[tt.col]}const kt=Dt-O.y,C=gt*Is.FX_STRIDE,at=this.hullFx;if(at[C]=O.x,at[C+1]=O.y,at[C+2]=O.z,at[C+9]=kt,kt<=0){at[C+10]=at[C+11]=0,this.wasWet[gt]=0;continue}N++;const $=gt/Rn|0;!tt.wall&&kt>this.cellT[$]&&(this.cellT[$]=Math.min(kt,tt.depthMax),this.cellX[$]=tt.p.x);const st=Math.min(1,kt/s.wetSmooth),_t=Math.min(kt,tt.depthMax),K=this.sampleFlow(o,O);tt.wall?te.copy(tt.n).applyQuaternion(this.quat).multiplyScalar(-vn*K*vi*tt.area*_t):te.set(0,vn*K*vi*tt.area*_t,0),this.roll("浮力",te,O),this.waterVel(O,V),V.y-=o.verticalVelocity(O.x,O.z,n);const Et=V.length();U.copy(tt.n).applyQuaternion(this.quat);const Wt=V.dot(U),ee=this.sprayDyn.set(0,0,0);if(at[C+3]=V.x,at[C+4]=V.y,at[C+5]=V.z,at[C+6]=U.x,at[C+7]=U.y,at[C+8]=U.z,at[C+10]=Wt,at[C+11]=st,!this.wasWet[gt]&&Wt>0&&(this.impact[gt]=Math.max(this.impact[gt],Wt)),this.wasWet[gt]=1,Wt>0){ve.copy(V).addScaledVector(U,-Wt);const fe=ve.length();let pe=10,Ie=0,De=0;if(fe>.5&&!tt.wall){ve.multiplyScalar(1/fe);const Ne=ve.y+(tt.aft>0?s.stepRise*b[tt.col]:0);Ne>.001&&(pe=kt/Ne);const ke=ve.dot(X);Ie=Math.abs(ke),De=Mc(tt.p.z)-Math.sign(ke)*tt.p.x}const Pi=tt.area/tt.len;let zn=tt.wall?s.wallPlaning:0;if(!tt.wall)for(let Ne=0;Ne<4;Ne++){let ke=pe;Ie>.001&&(ke=Math.min(ke,Math.max(0,De+((Ne+.5)/4-.5)*Pi)/Ie)),zn+=Math.min(s.pressurePeak,Math.sqrt(s.pressureFetch/Math.max(.005,ke)))/4}if(B.copy(U).multiplyScalar(-s.planing*zn*vn*K*tt.area*Et*Wt*st),T.planing+=B.dot(L),this.roll("滑走揚力",B,O),!tt.wall){const Ne=B.dot(w);j+=Ne,pt+=Ne*tt.p.x}if(te.add(B),ee.add(B),Ie>.001&&!tt.wall){const Ne=Math.asin(Math.min(1,Ie)),ke=tt.aft>0,ti=ke&&s.yawSideStallAft>0?s.yawSideStallAft:s.yawSideStall,Ec=ke&&s.yawSideAft>=0?s.yawSideAft:s.yawSide,Tc=s.stallDrop?Ne<=ti?Ne:Math.max(ti*.5,ti-.8*(Ne-ti)):ti*Math.tanh(Ne/ti),R=B.length(),G=s.yawSideNormal?_n.copy(X).addScaledVector(U,-X.dot(U)).normalize():_n.copy(X).addScaledVector(ve,-X.dot(ve)).normalize(),et=Math.sign(ve.dot(X)),nt=s.chineVent?Math.min(1,(1-K)/s.propAirFull):0;B.copy(G).multiplyScalar(-et*Ec*Tc*R*(1-nt)),T.lateral+=B.dot(L),this.roll("横滑りの横力",B,O),te.add(B),ee.add(B)}}const Rt=-s.heaveDamp*tt.area*V.y*st;te.y+=Rt,T.heave+=Rt*L.y,this.roll("上下の減衰",new A(0,Rt,0),O),ve.copy(V).addScaledVector(U,-Wt);const ue=ve.length();B.copy(ve).multiplyScalar(-.5*vn*K*s.friction*tt.area*ue*st),T.friction+=B.dot(L),this.roll("摩擦",B,O),te.add(B);let ge=0,Pt=0;if(tt.side!==0&&!s.sideWalls){const fe=tt.side>0?X:y,pe=V.dot(fe);if(pe>0){const Ie=Math.min(kt,tt.depthMax);B.copy(fe).multiplyScalar(-.5*vn*s.chineCd*tt.len*Ie*pe*pe);const De=this.chineAt.copy(O).addScaledVector(w,Ie*.5);T.lateral+=B.dot(L),this.roll("舷側",B,De),this.addForce(B,De),ge+=B.x,Pt+=B.z}}this.pressure[bt+2]=Math.max(0,te.y);let ne=0,Me=0;if(s.spray&&Et>1){ve.copy(V).addScaledVector(U,-Wt);const fe=ve.length();if(fe>.001){ve.multiplyScalar(Et/fe).add(V);const pe=ve.x*ve.x+ve.z*ve.z,Ie=pe>.25?(-ee.x*ve.x-ee.z*ve.z)/pe:0;if(Ie>0){const De=gt*7;this.spray[De]=O.x,this.spray[De+1]=O.y,this.spray[De+2]=O.z,this.spray[De+3]=ve.x+this.fl.x,this.spray[De+4]=ve.y+o.verticalVelocity(O.x,O.z,n),this.spray[De+5]=ve.z+this.fl.z,this.spray[De+6]=Ie,ne=Ie*(ve.x+this.fl.x),Me=Ie*(ve.z+this.fl.z)}}}this.setMom(gt,O.x,O.z,-te.x-ge-ne,-te.z-Pt-Me,0),this.addForce(te,O)}if(this.wetPoints=N,s.planeCop&&j>1){const gt=Fi.set(0,0,1).applyQuaternion(this.quat),tt=this.vel.dot(gt),bt=this.vel.dot(X),Dt=Math.atan2(Math.abs(bt),Math.max(.5,Math.abs(tt))),kt=Math.sign(bt)*s.planeCopK*Math.tanh(Dt/s.planeCopPsi)*2*Os,C=pt/j;te.copy(gt).multiplyScalar(j*s.planeCopMix*(kt-C)),this.torque.add(te),this.rollDiagOn&&!this.diagDrag&&!this.diagLat&&(this.rollDiag.滑走の横の中心=te.dot(this.rollAxis))}{const gt=Fi.set(0,0,1).applyQuaternion(this.quat).clone(),tt=Math.max(0,this.vel.dot(gt));let bt=0,Dt=0,kt=0;const C=this.cellT.length;for(let at=C-1;at>=0;at--){const $=this.cellT[at],st=Math.PI/2*vn*$*$,_t=st-bt;if(_t<=0||tt<1)continue;bt=st;const K=this.hull[at*Rn];this.toWorld(mi.set(this.cellX[at],K.p.y+$*.5,K.p.z),O);const Et=this.sampleFlow(o,O);this.waterVel(O,V);const Wt=V.dot(X);B.copy(X).multiplyScalar(-s.sideLift*tt*_t*Wt*Et),T.lateral+=B.dot(L),this.roll("サイド",B,O),this.addForce(B,O),Dt-=B.x,kt-=B.z}this.setMom(Q+4,this.comW.x,this.comW.z,Dt,kt,0)}{const gt=s.keelFinZ??Qd.z,tt=this.toWorld(Fi.copy(Qd).setZ(gt),mi).clone();let bt=o.height(tt.x,tt.z,n);const Dt=b[(Rn-1)/2];if(Dt>0){const $=Math.min(bt,P[(Rn-1)/2]+s.stepRise*(Hn-gt));bt+=($-bt)*Dt}const kt=w.y,C=tt.y-Mo*kt,at=kt>.2?Math.max(0,Math.min(Mo,(bt-C)/kt)):0;if(this.keelFinImmersion=at/Mo,this.keelFinForce=0,at>.002){const $=tt.addScaledVector(w,-(Mo-at/2)),st=this.sampleFlow(o,$);this.waterVel($,V);const _t=Fi.set(0,0,1).applyQuaternion(this.quat).clone(),K=V.dot(_t),Et=V.dot(X);if(K>.5){const Wt=Math.atan2(Et,K),ee=Math.abs(Wt),Rt=s.keelFinStall,ue=s.keelFinSlope*Rt,ge=Math.sin(Math.min(ee,1.2)),Pt=Math.cos(Math.min(ee,1.2));let ne=s.keelFinVortex>0?Math.sign(Wt)*(s.keelFinSlope*ge*Pt*Pt+s.keelFinVortex*ge*ge*Pt):Math.sign(Wt)*(s.stallDrop?ee<=Rt?s.keelFinSlope*ee:Math.max(ue*.5,ue-1.2*(ee-Rt)):ue*Math.tanh(s.keelFinSlope*ee/ue));s.ventSpeedGear>0&&(ne*=Math.min(1,s.ventSpeedGear**2/Math.max(1e-6,K*K+Et*Et)));const Me=at*ul,fe=2*at*at/Me;let pe=s.keelFinCd0+ne*ne/(Math.PI*.8*fe);if(s.finPlateCn>0){const Ne=Math.sin(ee),ke=s.finPlateCn*Ne;ke*Math.cos(ee)>Math.abs(ne)&&(ne=Math.sign(Wt)*ke*Math.cos(ee)),pe=Math.max(pe,s.keelFinCd0+ke*Ne)}if(s.foilVent){const Ne=Ma(Math.hypot(K,Et),at*.5*kt,s.foilVentA0,s.foilVentK),ke=Math.max(0,Math.min(1,(ee-Ne)/.12),Math.min(1,(1-st)/s.propAirFull));this.keelVent+=(ke-this.keelVent)*Math.min(1,t*(ke>this.keelVent?12:1.5));const ti=_a(ee,s.keelFinSlope,Math.abs(ne)/Math.max(.1,Math.cos(ee)));ne=ne*(1-this.keelVent)+Math.sign(Wt)*ti*Math.cos(ee)*this.keelVent,pe=pe*(1-this.keelVent)+(s.keelFinCd0+ti*Math.sin(ee))*this.keelVent}const Ie=K*K+Et*Et,De=.5*vn*st*Me*Ie,Pi=ve.copy(_t).multiplyScalar(K).addScaledVector(X,Et).normalize(),zn=_n.copy(X).multiplyScalar(K).addScaledVector(_t,-Et).normalize();B.copy(zn).multiplyScalar(-De*ne).addScaledVector(Pi,-De*pe),T.lateral+=B.dot(L),this.roll("中央フィン",B,$),this.setMom(Q+3,$.x,$.z,-B.x,-B.z,0),this.addForce(B,$),this.keelFinForce=B.dot(X)}else if(s.plateBack&&Math.abs(Et)>.3){const Wt=Math.atan2(Math.abs(Et),K),ee=Math.sin(Wt),Rt=.5*vn*st*at*ul*(K*K+Et*Et);let ue=Math.max(1,s.finPlateCn)*ee;if(s.foilVent){const ge=Ma(Math.hypot(K,Et),at*.5*kt,s.foilVentA0,s.foilVentK),Pt=Math.max(0,Math.min(1,(Wt-ge)/.12),Math.min(1,(1-st)/s.propAirFull));this.keelVent+=(Pt-this.keelVent)*Math.min(1,t*(Pt>this.keelVent?12:1.5)),ue=ue*(1-this.keelVent)+_a(Wt,s.keelFinSlope,ue)*this.keelVent}B.copy(X).multiplyScalar(-Math.sign(Et)*Rt*ue).addScaledVector(_t,-.5*vn*st*at*ul*s.keelFinCd0*K*Math.abs(K)),T.lateral+=B.dot(L),this.roll("中央フィン",B,$),this.setMom(Q+3,$.x,$.z,-B.x,-B.z,0),this.addForce(B,$),this.keelFinForce=B.dot(X)}}}const vt=new Xn().setFromAxisAngle(_M,(this.tilt-ac)*Math.PI/180).premultiply(this.quat);Ge.setFromAxisAngle(dl,this.steerAngle).premultiply(vt);const Mt=new A(0,0,1).applyQuaternion(Ge),lt=new A(1,0,0).applyQuaternion(Ge),ht=new A(0,1,0).applyQuaternion(Ge),Y=ve.copy(ko).setY(ko.y+s.motorHeight),I=this.toWorld(Y,new A).add(du.clone().applyQuaternion(vt)),z=new A().copy(lM).applyQuaternion(Ge).add(I),k=r.height(z.x,z.z,n)-z.y;if(this.gearSteerMoment=0,k>0){const gt=this.sampleFlow(o,z);this.waterVel(z,V);const tt=V.dot(Mt),bt=V.dot(lt);if(tt>.5){const Dt=Math.atan2(bt,tt),kt=Math.abs(Dt);let C=Math.sign(Dt)*(kt<=.3?va*kt:Math.max(.35,va*.3-1.2*(kt-.3)));const at=Math.max(0,Math.min(1,(.32-k)/.2)),$=Ma(Math.hypot(tt,bt),k,s.foilVentA0,s.foilVentK),st=Math.min(1,(1-gt)/s.propAirFull),_t=s.foilVent?Math.max(Math.max(0,Math.min(1,(kt-$)/.12)),this.propState.vent*.3,st):Math.max(at*Math.max(0,Math.min(1,(kt-.3)/.25)),this.propState.vent*.3);this.finVent+=(_t-this.finVent)*Math.min(1,t*(_t>this.finVent?12:1.5)),s.plateCn>0&&(C=Math.sign(Dt)*Math.max(Math.abs(C),s.plateCn*Math.sin(kt))),s.foilVent?C=C*(1-this.finVent)+Math.sign(Dt)*_a(kt,va,Math.abs(C))*this.finVent:C*=1-.6*this.finVent,s.ventSpeed>0&&(C*=Math.min(1,s.ventSpeed**2/Math.max(1e-6,tt*tt+bt*bt)));const K=.5*vn*gt*s.finArea*(tt*tt+bt*bt)*Math.min(1,k/.2);te.copy(lt).multiplyScalar(-K*C),te.addScaledVector(Mt,-.5*vn*gt*s.finDrag*tt*tt),T.fin+=te.dot(L),this.addForce(te,z),this.roll("ギアケース",te,z),this.setMom(Q+1,z.x,z.z,-te.x,-te.z,0),this.gearSteerMoment=new A().subVectors(z,I).cross(te).dot(ht)}else if(s.plateBack&&Math.abs(bt)>.3){const Dt=Math.atan2(Math.abs(bt),tt),kt=Math.sin(Dt);let C=Math.max(1,s.plateCn)*kt;if(s.foilVent){const $=Ma(Math.hypot(tt,bt),k,s.foilVentA0,s.foilVentK),st=Math.max(0,Math.min(1,(Dt-$)/.12),Math.min(1,(1-gt)/s.propAirFull));this.finVent+=(st-this.finVent)*Math.min(1,t*(st>this.finVent?12:1.5)),C=C*(1-this.finVent)+_a(Dt,va,C)*this.finVent}s.ventSpeed>0&&(C*=Math.min(1,s.ventSpeed**2/Math.max(1e-6,tt*tt+bt*bt)));const at=.5*vn*gt*s.finArea*(tt*tt+bt*bt)*Math.min(1,k/.2);te.copy(lt).multiplyScalar(-Math.sign(bt)*at*C),te.addScaledVector(Mt,-.5*vn*gt*s.finDrag*tt*Math.abs(tt)),T.fin+=te.dot(L),this.addForce(te,z),this.roll("ギアケース",te,z),this.setMom(Q+1,z.x,z.z,-te.x,-te.z,0),this.gearSteerMoment=new A().subVectors(z,I).cross(te).dot(ht)}}const Z=new A().copy(hM).applyQuaternion(Ge).add(I),rt=r.height(Z.x,Z.z,n)-Z.y;if(this.plateImmersion=Math.max(0,Math.min(1,(rt+.02)/.05)),this.plateImmersion>0){const gt=this.sampleFlow(o,Z);this.waterVel(Z,V);const tt=V.dot(Mt);if(tt>.5){const bt=V.dot(ht),Dt=Math.atan2(bt,tt),kt=s.plateLift*dM*Math.max(-.35,Math.min(.35,Dt)),C=.5*vn*gt*uM*(tt*tt+bt*bt)*this.plateImmersion;te.copy(ht).multiplyScalar(-C*kt),te.addScaledVector(Mt,-C*.008),this.plateForce=te.dot(dl),T.fin+=te.dot(L),this.addForce(te,Z),this.roll("プレート",te,Z),this.setMom(Q+2,Z.x,Z.z,-te.x,-te.z,0)}}else this.plateForce=0;const ct=new A().copy(cM).applyQuaternion(Ge).add(I),dt=r.height(ct.x,ct.z,n)-ct.y;this.propDepth=dt;const ot=this.prop.diameter/2;this.propImmersion=Math.max(0,Math.min(1,(dt+ot)/(2*ot)));const wt=this.engineOmega/(2*Math.PI),F=this.sampleFlow(o,ct);this.waterVel(ct,V);const St=Math.max(0,V.dot(Mt))*.97,Gt=Math.max(s.obliqueFloor,Math.abs(St)),Yt=(.8*Math.abs(V.dot(ht))+1*Math.abs(V.dot(lt)))/Gt,zt=tM(this.prop,this.propState,wt,St,dt,this.propImmersion,Math.min(s.obliqueMax,Yt),t,(1-F)/s.propAirFull);this.propPos.copy(ct),this.propAxis.copy(Mt);let se=0;for(const gt of this.propState.u)se+=gt;this.propJet=se/this.propState.u.length;const Ut=zt.thrust*F,D=(s.windmill?zt.torque:Math.max(0,zt.torque))*F,E=this.rpm,q=E<Hi.idleRpm?Math.min(.25,(Hi.idleRpm-E)/200*.25):0,ft=E>Hi.limitRpm?0:Math.max(this.throttle,q),mt=1+8e-4*E,ut=xM(E)*ft-mt;this.engineOmega=Math.max(0,this.engineOmega+(ut-D)/Hi.inertia*t),this.propThrust=Ut,T.thrust=Mt.dot(L)*Ut,this.addForce(te.copy(Mt).multiplyScalar(Ut),ct),this.roll("推力",te,ct);const Vt=s.propAir*Math.max(0,Ut)*Math.max(0,this.propJet)/2/(vn*vi*Sn.depth),At=this.propImmersion>0;At&&Co.emit(this.jetId,ct,-Mt.x,-Mt.z,Math.max(0,Ut)*t,t,ot),this.setMom(Q,ct.x-Mt.x*s.jetReach,ct.z-Mt.z*s.jetReach,At?0:-te.x,At?0:-te.z,Vt+this.propState.vent*Math.PI*ot*ot*Math.max(1,St)*this.propImmersion),this.torque.addScaledVector(Mt,-D),te.copy(this.vel).multiplyScalar(-.5*eM*s.airDrag*_),T.air=te.dot(L),this.force.add(te),this.riderVel.addScaledVector(x,t/Ai),this.riderVel.y-=vi*t,this.riderW.addScaledVector(this.riderVel,t),this.vel.addScaledVector(this.force,t/rr),this.comW.addScaledVector(this.vel,t),Ge.copy(this.quat).invert();const yt=mi.copy(this.angVel).applyQuaternion(Ge),Zt=Fi.copy(this.torque).applyQuaternion(Ge),xt=s.yawInertia,It=ve.set(ho.x*yt.x,xt*yt.y,ho.z*yt.z);if(Zt.sub(_n.crossVectors(yt,It)),Zt.x-=s.pitchDamp*yt.x,Zt.y-=s.yawDamp*yt.y+s.yawDamp2*Math.abs(yt.y)*yt.y,s.driftStiff>0){const gt=_n.copy(this.vel).setY(0).applyQuaternion(Ge),tt=Math.hypot(gt.x,gt.z),bt=Math.atan2(gt.x,gt.z),Dt=Math.max(0,Math.abs(bt)-s.driftStiff0),kt=Math.min(1,Math.max(0,(tt-2)/2));if(Zt.y+=Math.sign(bt)*s.driftStiff*Dt*kt,s.driftDamp>0){let C=isNaN(this.prevBeta)?0:bt-this.prevBeta;C-=2*Math.PI*Math.round(C/(2*Math.PI));const at=(Math.abs(bt)-s.driftDamp0)/Math.max(.05,s.driftStiff0+.3-s.driftDamp0),$=at<=0?0:at>=1?1:at*at*(3-2*at);Zt.y+=s.driftDamp*$*(C/t)*kt}this.prevBeta=bt}Zt.z-=s.rollDamp*yt.z,yt.x+=Zt.x/ho.x*t,yt.y+=Zt.y/xt*t,yt.z+=Zt.z/ho.z*t,this.angVel.copy(yt).applyQuaternion(this.quat);const Ht=this.angVel;Ge.set(Ht.x*t*.5,Ht.y*t*.5,Ht.z*t*.5,0).multiply(this.quat),this.quat.set(this.quat.x+Ge.x,this.quat.y+Ge.y,this.quat.z+Ge.z,this.quat.w+Ge.w).normalize(),this.origin.copy(this.comB).applyQuaternion(this.quat).negate().add(this.comW),Ge.copy(this.quat).invert(),this.riderB.copy(this.riderW).sub(this.origin).applyQuaternion(Ge)}attitude(){const t=new A(0,0,1).applyQuaternion(this.quat),e=new A(-1,0,0).applyQuaternion(this.quat);return{trim:Math.asin(Math.max(-1,Math.min(1,t.y)))*180/Math.PI,heel:Math.asin(Math.max(-1,Math.min(1,-e.y)))*180/Math.PI}}};S(Is,"nextId",1),S(Is,"FX_STRIDE",12);let Nr=Is;const ar=new A;function Yn(i,t,e,n,s,o){const r=2*Math.PI*s/4,a=Math.max(o-2*s,0),c=Math.PI/4;ar.copy(t),ar[n]=0,ar.normalize();const l=.5*r/(r+a),u=1-ar.angleTo(i)/c;return Math.sign(ar[e])===1?u*l:a/(r+a)+l+l*(1-u)}class MM extends oe{constructor(t=1,e=1,n=1,s=2,o=.1){if(s=s*2+1,o=Math.min(t/2,e/2,n/2,o),super(1,1,1,s,s,s),s===1)return;const r=this.toNonIndexed();this.index=null,this.attributes.position=r.attributes.position,this.attributes.normal=r.attributes.normal,this.attributes.uv=r.attributes.uv;const a=new A,c=new A,l=new A(t,e,n).divideScalar(2).subScalar(o),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,f=u.length/6,p=new A,x=.5/s;for(let g=0,m=0;g<u.length;g+=3,m+=2)switch(a.fromArray(u,g),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),u[g+0]=l.x*Math.sign(a.x)+c.x*o,u[g+1]=l.y*Math.sign(a.y)+c.y*o,u[g+2]=l.z*Math.sign(a.z)+c.z*o,h[g+0]=c.x,h[g+1]=c.y,h[g+2]=c.z,Math.floor(g/f)){case 0:p.set(1,0,0),d[m+0]=Yn(p,c,"z","y",o,n),d[m+1]=1-Yn(p,c,"y","z",o,e);break;case 1:p.set(-1,0,0),d[m+0]=1-Yn(p,c,"z","y",o,n),d[m+1]=1-Yn(p,c,"y","z",o,e);break;case 2:p.set(0,1,0),d[m+0]=1-Yn(p,c,"x","z",o,t),d[m+1]=Yn(p,c,"z","x",o,n);break;case 3:p.set(0,-1,0),d[m+0]=1-Yn(p,c,"x","z",o,t),d[m+1]=1-Yn(p,c,"z","x",o,n);break;case 4:p.set(0,0,1),d[m+0]=1-Yn(p,c,"x","y",o,t),d[m+1]=1-Yn(p,c,"y","x",o,e);break;case 5:p.set(0,0,-1),d[m+0]=Yn(p,c,"x","y",o,t),d[m+1]=1-Yn(p,c,"y","x",o,e);break}}}const be=(i,t,e)=>new A(i,t,e);function Oi(i){const t=i[0].length,e=[],n=[];for(const o of i)for(const r of o)e.push(r.x,r.y,r.z);for(let o=0;o<i.length-1;o++)for(let r=0;r<t-1;r++){const a=o*t+r,c=a+t;n.push(a,c,a+1,a+1,c,c+1)}const s=new Le;return s.setAttribute("position",new he(e,3)),s.setIndex(n),s.computeVertexNormals(),s}function fl(i){const t=new A;for(const o of i)t.add(o);t.multiplyScalar(1/i.length);const e=[t.x,t.y,t.z];for(const o of i)e.push(o.x,o.y,o.z);const n=[];for(let o=0;o<i.length;o++)n.push(0,1+o,1+(o+1)%i.length);const s=new Le;return s.setAttribute("position",new he(e,3)),s.setIndex(n),s.computeVertexNormals(),s}function uo(i,t,e){const n=[];for(let s=0;s<=e;s++){const o=s/e;n.push(i+(t-i)*(t>=Dn-1e-6?1-(1-o)**1.6:o))}return n}const yM=.13,e0=6;function Bo(i,t,e,n,s){const o=[];for(let r=0;r<=e0;r++){const a=rc(i,t+(e-t)*r/e0,s);o.push(be(n*a.x,a.y,i))}return o}const fu=(i,t)=>Math.min(1,yM/$o(i,t));function vr(i,t=di(i)){const e=Mc(i,t),n=fu(i,t);return[...Bo(i,n,0,1,t),be(e*.5,t,i),be(0,t,i),be(-e*.5,t,i),...Bo(i,0,n,-1,t)]}function SM(i,t){const e=di(i),n=fu(i,e);return t>0?Bo(i,1,n,1,e):Bo(i,n,1,-1,e)}function n0(i){const t=di(i),e=fu(i,t);return[...Bo(i,1,e,1,t).slice(0,-1),...vr(i),...Bo(i,e,1,-1,t).slice(1)]}function wM(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#f4f4f2",t.fillRect(0,0,256,256),t.fillStyle="#1f5fbf",t.beginPath(),t.moveTo(40,30),t.lineTo(216,30),t.quadraticCurveTo(200,190,128,236),t.quadraticCurveTo(56,190,40,30),t.fill(),t.fillStyle="#d8262b",t.beginPath(),t.moveTo(84,60),t.lineTo(172,60),t.quadraticCurveTo(160,150,128,180),t.quadraticCurveTo(96,150,84,60),t.fill();const e=new Ji(i);return e.colorSpace=Be,e.anisotropy=4,e}function i0(i){const t=Ki(i),e=[];for(let n=0;n<=16;n++){const s=t-2*t*n/16;e.push(be(s,Xf(i,s),i))}return e}function s0(i){const t=i.getAttribute("position"),e=[];for(let n=0;n<t.count;n++)e.push(.5-t.getX(n)/(2*Os),(t.getZ(n)-Tr)/(Dn-Tr));return i.setAttribute("uv",new he(e,2)),i}const bM=-.2;function ys(i,t,e,n){const s=new A().subVectors(t,i),o=new Nt(new ou(e,Math.max(.001,s.length()),4,10),n);return o.position.copy(i).add(t).multiplyScalar(.5),o.quaternion.setFromUnitVectors(new A(0,1,0),s.normalize()),o.castShadow=!0,o}function o0(i,t,e){const n=document.createElement("canvas");n.width=n.height=128;const s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,128,128),s.fillStyle=e,s.font="bold 100px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,64,70);const o=new Ji(n);return o.colorSpace=Be,o}const Sc=["#f4f4f4","#222222","#d8262b","#1f5fbf","#f2c230","#1d9a4a"];function pu(i=3){const t=new Ve,e=Sc[i-1],n=new Kt({color:15856110,roughness:.35,side:ze}),s=new Kt({color:13208394,roughness:.45,side:ze}),o=new Kt({map:wM(),roughness:.4,side:ze}),r=new Kt({color:14165547,roughness:.4,side:ze}),a=new Kt({color:10134445,roughness:.8,side:ze}),c=new Kt({color:1781596,roughness:.4,side:ze}),l=new Kt({color:2302755,roughness:.5,metalness:.2}),u=new Kt({color:13164006,transparent:!0,opacity:.3,roughness:.05,metalness:.1,side:ze,depthWrite:!1}),h=new Kt({map:o0(String(i),e,i===1||i===5?"#111":"#fff"),roughness:.4}),d=new Kt({color:8948880,roughness:.3,metalness:.8}),f=(z,k)=>{const Z=new Nt(z,k);return Z.castShadow=!0,Z.receiveShadow=!0,t.add(Z),Z},p=uo(zs,Hn,16),x=uo(Hn,Dn,28),g=z=>di(Math.min(z,Hn-1e-6));f(Oi(p.map(z=>vr(z,g(z)))),s),f(Oi(x.map(z=>vr(z))),s),f(Oi([vr(Hn,ic),vr(Hn,0)]),s);for(const z of[1,-1])f(Oi([...p,...x.slice(1)].map(k=>SM(k,z))),n);f(fl([...n0(zs)]),n),f(fl([...n0(Dn),...i0(Dn).reverse()]),n);const m=new Nt(new oe(W2,Mo,oc-sc),new Kt({color:3815994,roughness:.5}));m.position.set(0,ic-Mo/2,(sc+oc)/2),t.add(m);const v=uo(Bn,Ro,48);for(const z of[1,-1]){const k=(St,Gt)=>f(Oi(v.map(Yt=>z>0?St(Yt):St(Yt).reverse())),Gt),Z=(St,Gt,Yt)=>{const zt=[],se=dn(St),Ut=ll(St);for(let D=0;D<=4;D++){const E=Yt-(Yt-Gt)*D/4,q=pi(St)+(Yd(St)-pi(St))*E**1.6;zt.push(be(z*q,se+(Ut-se)*Math.sqrt(E),St))}return z>0?zt:zt.reverse()},rt=St=>St>=bM?.18:1;k(St=>Z(St,0,rt(St)),n),k(St=>Z(St,rt(St),.82),u),k(St=>Z(St,.82,1),n),k(St=>[be(z*sr(St),go,St),be(z*sr(St),ll(St),St),be(z*Yd(St),ll(St),St)],n),k(St=>[be(z*sr(St),dn(St)+.002,St),be(z*pi(St),dn(St)+.002,St)].reverse(),n),f(s0(Oi(uo(zs,Ro,40).map(St=>z>0?[be(Ki(St),dn(St),St),be(pi(St),dn(St),St)]:[be(-pi(St),dn(St),St),be(-Ki(St),dn(St),St)]))),o);const ct=-1.2,dt=-.92,ot=dn(ct)+.03,wt=us-.03,F=new Nt(new Xe(dt-ct,wt-ot),h);F.position.set(z*(pi((ct+dt)/2)+.004),(ot+wt)/2,(ct+dt)/2),F.rotation.y=z*Math.PI/2,t.add(F)}f(s0(Oi(uo(Ro-.02,Dn,16).map(i0))),o),f(fl([be(pi(Bn),dn(Bn),Bn),be(pi(Bn),us,Bn),be(-pi(Bn),us,Bn),be(-pi(Bn),dn(Bn),Bn)]),n),f(Oi(v.map(z=>[be(sr(z),go,z),be(-sr(z),go,z)])),a);const y=uo(zs,1.3,30);for(const[z,k,Z]of[[c,.004,.05],[r,.058,.07]])for(const rt of[1,-1])f(Oi(y.map(ct=>{const dt=dn(ct),ot=di(ct),wt=$o(ct,ot),F=rc(ct,1-k/wt,ot).x*1.004+.002,St=rc(ct,1-Z/wt,ot).x*1.004+.002;return rt>0?[be(F,dt-k,ct),be(St,dt-Z,ct)]:[be(-St,dt-Z,ct),be(-F,dt-k,ct)]})),z);const _=new Ve;_.position.set(0,.56,-.02),_.rotation.x=-.9;const L=new Nt(new vc(.13,.016,8,24),l);_.add(L);const T=new Nt(new oe(.24,.02,.012),l);_.add(T),t.add(_),t.add(ys(be(0,Xf(G2,0)-.02,.06),be(0,.55,-.01),.018,l));const M=new Ve;M.position.copy(ko),t.add(M);const P=new Nt(new oe(.2,.12,.08),d);P.position.set(0,-.02,0),M.add(P);const b=new Nt(new mn(.018,.018,.26,10),d);b.rotation.z=Math.PI/2,M.add(b);const w=new Ve;w.position.copy(du),M.add(w);const N=new Nt(new oe(.16,.16,.08),d);N.position.set(0,-.02,.05),w.add(N);const O=new Nt(new MM(.36,.43,.33,4,.07),l);O.position.set(0,.235,-.165),O.castShadow=!0,w.add(O);const U=new Kt({map:o0(String(i),e,i===1||i===5?"#111":"#fff"),roughness:.4});for(const z of[1,-1]){const k=new Nt(new Xe(.2,.2),U);k.position.set(z*.182,.25,-.165),k.rotation.y=z*Math.PI/2,w.add(k)}const V=new Nt(new oe(.07,.6,.12),l);V.position.set(0,-.27,-.13),w.add(V);const B=new Nt(new oe(.22,.01,.26),l);B.position.set(0,-.44,-.14),w.add(B);const X=ys(be(0,-.57,0),be(0,-.57,-.24),.045,l);w.add(X);const Q=new Nt(new oe(.014,.12,.12),l);Q.position.set(0,-.66,-.1),w.add(Q);const j=new Ve;j.position.set(0,-.57,-.29);for(let z=0;z<3;z++){const k=new Nt(new oe(.06,.12,.008),d);k.position.y=.07;const Z=new Ve;Z.rotation.z=z*Math.PI*2/3,k.rotation.y=.5,Z.add(k),j.add(Z)}w.add(j);const pt=new Ve;pt.position.set(0,go,-.5),t.add(pt);const vt=new Kt({color:e,roughness:.7}),Mt=new Kt({color:2764602,roughness:.8}),lt=new Kt({color:16185078,roughness:.25}),ht=(z,k,Z)=>be(z,k-go,Z+.5);for(const z of[1,-1])pt.add(ys(ht(z*.12,.17,-.33),ht(z*.12,.16,-.82),.055,Mt)),pt.add(ys(ht(z*.12,.19,-.33),ht(z*.11,.5,-.66),.075,Mt)),pt.add(ys(ht(z*.19,.9,-.5),ht(z*.22,.72,-.27),.045,vt)),pt.add(ys(ht(z*.22,.72,-.27),ht(z*.11,.6,-.06),.04,vt));pt.add(ys(ht(0,.52,-.68),ht(0,.9,-.5),.16,vt));const Y=new Nt(new Hs(.135,20,14),lt);Y.position.copy(ht(0,1.08,-.4)),Y.castShadow=!0,pt.add(Y);const I=new Nt(new Hs(.137,20,10,Math.PI/2-.9,1.8,1.2,.5),new Kt({color:1118481,roughness:.1,metalness:.5}));return I.position.copy(Y.position),pt.add(I),{root:t,tilt:M,motor:w,prop:j,rider:pt,wheel:_}}function mu(i,t,e){i.root.position.copy(t.origin),i.root.quaternion.copy(t.quat),i.tilt.rotation.x=(t.tilt-ac)*Math.PI/180,i.tilt.position.y=ko.y+gn.motorHeight,i.motor.rotation.y=t.steerAngle,i.prop.rotation.z+=t.engineOmega*e*.06;for(const r of i.wheel.children)r.rotation.z=-t.steerAngle*2.5;const n=t.riderB.x-Vn.x,s=t.riderB.y-Vn.y,o=t.riderB.z-Vn.z;i.rider.position.set(n*.6,go+s*.5,-.5+o*.5),i.rider.rotation.set(o*.9,0,-n*.9)}const qa=220,Th=352,ya=qa/Th,Kf=new Jt(6989532),gu=new Jt(13624306),kr=new A(-.4,.55,.75).normalize(),r0=`
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
`,EM=new A(.95,.38,.32),TM=new Jt(2382170),a0=.5,Jf="boatgame.waterFx";function AM(){try{return localStorage.getItem(Jf)!=="0"}catch{return!0}}class xu{constructor(t){S(this,"mesh");S(this,"uniforms");S(this,"reflTarget",new Ri(1,1,{type:qi}));S(this,"refrTarget",new Ri(1,1,{type:qi,depthTexture:new Qh(1,1)}));S(this,"mirror",new Ln);S(this,"hidden",[]);S(this,"size",new Ct);S(this,"passes",AM());S(this,"waves");S(this,"wakeTex",null);S(this,"wakeHalf",null);this.waves=t;const e=t.waves.length,n=new Xe(qa,qa,Th,Th);n.rotateX(-Math.PI/2);const s=new Mh(new Uint16Array(4),2,2,dc,qi);s.needsUpdate=!0,this.uniforms={uTime:{value:0},uA:{value:Array.from({length:e},()=>new Ue)},uB:{value:Array.from({length:e},()=>new Ue)},uSun:{value:kr},uSkyTop:{value:Kf},uSkyHorizon:{value:gu},uFogFar:{value:qa*.48},uWake:{value:s},uWakeOrigin:{value:new Ct(-1e6,-1e6)},uWakeDx:{value:1},uWakeN:{value:2},uRefl:{value:this.reflTarget.texture},uReflMat:{value:new re},uReflOn:{value:0},uRefr:{value:this.refrTarget.texture},uRefrDepth:{value:this.refrTarget.depthTexture},uRefrOn:{value:0},uRes:{value:new Ct(1,1)},uNear:{value:.1},uFar:{value:1e3},uAbsorb:{value:EM},uScatter:{value:TM}};const o=new Qn({uniforms:this.uniforms,defines:{NW:e},vertexShader:`
        uniform float uTime;
        uniform vec4 uA[NW]; // dirX, dirZ, amp, k
        uniform vec4 uB[NW]; // omega, phase
        ${r0}
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
        ${r0}
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
      `});this.mesh=new Nt(n,o),this.mesh.frustumCulled=!1}updateWake(t){var a;const e=t.n;(!this.wakeTex||!this.wakeHalf||this.wakeHalf.length!==e*e*2)&&(this.wakeHalf=new Uint16Array(e*e*2),this.wakeTex=new Mh(this.wakeHalf,e,e,jh,qi),this.wakeTex.magFilter=In,this.wakeTex.minFilter=In,this.uniforms.uWake.value=this.wakeTex,this.uniforms.uWakeDx.value=t.dx,this.uniforms.uWakeN.value=e);const n=t.h,s=this.wakeHalf,o=(a=t.layer)==null?void 0:a.air,r=1/Sn.depth;for(let c=0;c<e*e;c++)s[2*c]=Ku.toHalfFloat(n[c]),s[2*c+1]=Ku.toHalfFloat(o?Math.min(Sn.maxVoid,Math.max(0,o[c]*r)):0);this.wakeTex.needsUpdate=!0,this.uniforms.uWakeOrigin.value.set(t.originX,t.originZ)}hide(...t){this.hidden.push(...t)}renderPasses(t,e,n){const s=this.uniforms;if(!this.passes){s.uReflOn.value=s.uRefrOn.value=0;return}t.getDrawingBufferSize(this.size),s.uRes.value.copy(this.size);const o=Math.max(1,Math.floor(this.size.x*a0)),r=Math.max(1,Math.floor(this.size.y*a0));(this.reflTarget.width!==o||this.reflTarget.height!==r)&&(this.reflTarget.setSize(o,r),this.refrTarget.setSize(o,r));const a=this.hidden.map(h=>h.visible);this.mesh.visible=!1;for(const h of this.hidden)h.visible=!1;const c=t.shadowMap.autoUpdate;t.shadowMap.autoUpdate=!1;const l=t.getRenderTarget();n.updateMatrixWorld(),t.setRenderTarget(this.refrTarget),t.clear(),t.render(e,n),s.uNear.value=n.near,s.uFar.value=n.far,s.uRefrOn.value=1;const u=n.position;if(u.y>.05){const h=this.mirror;h.copy(n,!1),h.position.set(u.x,-u.y,u.z);const d=new A(0,0,-1).applyQuaternion(n.quaternion),f=new A(0,1,0).applyQuaternion(n.quaternion);d.y=-d.y,f.y=-f.y,h.up.copy(f),h.lookAt(h.position.clone().add(d)),h.projectionMatrix.copy(n.projectionMatrix),h.updateMatrixWorld(),h.matrixWorldInverse.copy(h.matrixWorld).invert(),s.uReflMat.value.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse);const p=t.clippingPlanes;t.clippingPlanes=[new Vi(new A(0,1,0),.05)],t.setRenderTarget(this.reflTarget),t.clear();const x=e.userData.sky,g=x==null?void 0:x.position.clone();x==null||x.position.copy(h.position),t.render(e,h),x&&g&&x.position.copy(g),t.clippingPlanes=p,s.uReflOn.value=1}else s.uReflOn.value=0;t.setRenderTarget(l),t.shadowMap.autoUpdate=c,this.mesh.visible=!0,this.hidden.forEach((h,d)=>h.visible=a[d])}update(t,e){this.uniforms.uTime.value=t;const n=this.uniforms.uA.value,s=this.uniforms.uB.value;this.waves.waves.forEach((o,r)=>{n[r].set(o.dirX,o.dirZ,o.amp*this.waves.scale,o.k),s[r].set(o.omega,o.phase,0,0)}),this.mesh.position.set(Math.round(e.x/ya)*ya,0,Math.round(e.z/ya)*ya)}}function vu(){const i=new Oo(1500,48);i.rotateX(-Math.PI/2);const t=new bi({color:new Jt(10470612),fog:!0}),e=new Nt(i,t);return e.position.y=-1.6,e}function Qf(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,c=new Le;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(const u in o){const h=c0(o[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in r){const h=r[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let x=0;x<r[u].length;++x)f.push(r[u][x][d]);const p=c0(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}return c}function c0(i){let t,e,n,s=-1,o=0;for(let l=0;l<i.length;++l){const u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=u.count*e}const r=new t(o),a=new Je(r,e,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<e;p++){const x=u.getComponent(d,p);a.setComponent(d+h,p,x)}}else r.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}class tp{constructor(){S(this,"parts",new Map);S(this,"m",new re)}add(t,e,n){const s=e.index?e.toNonIndexed():e.clone();n&&s.applyMatrix4(n);for(const r of Object.keys(s.attributes))r!=="position"&&r!=="normal"&&r!=="uv"&&s.deleteAttribute(r);s.attributes.uv||s.setAttribute("uv",new he(new Float32Array(s.attributes.position.count*2),2)),s.attributes.normal||s.computeVertexNormals();let o=this.parts.get(t);o||this.parts.set(t,o=[]),o.push(s)}box(t,e,n,s,o,r,a){const c=Math.abs(n-e),l=Math.abs(o-s),u=Math.abs(a-r);c<1e-4||l<1e-4||u<1e-4||(this.m.makeTranslation((e+n)/2,(s+o)/2,(r+a)/2),this.add(t,new oe(c,l,u),this.m))}boxAt(t,e,n,s,o,r,a,c=0,l=0){const u=new ui(l,c,0,"YXZ");this.m.makeRotationFromEuler(u).setPosition(e,n,s),this.add(t,new oe(o,r,a),this.m)}bar(t,e,n,s){const o=e.distanceTo(n),r=e.clone().add(n).multiplyScalar(.5),a=new Xn().setFromUnitVectors(new A(0,0,1),n.clone().sub(e).normalize());this.m.compose(r,a,new A(1,1,1)),this.add(t,new oe(s,s,o),this.m)}build(t,e={}){const n=[];for(const[s,o]of this.parts){const r=Qf(o,!1);if(!r)continue;const a=s.userData.uvScale;a&&RM(r,a[0],a[1]),r.computeBoundingSphere();const c=new Nt(r,s);c.castShadow=e.cast??!0,c.receiveShadow=e.receive??!0,e.name&&(c.name=`${e.name}:${s.name}`),c.matrixAutoUpdate=!1,c.updateMatrix(),t.add(c),n.push(c);for(const l of o)l.dispose()}return this.parts.clear(),n}}function RM(i,t,e){const n=i.attributes.position,s=i.attributes.normal,o=i.attributes.uv;for(let r=0;r<n.count;r++){const a=Math.abs(s.getX(r)),c=Math.abs(s.getY(r)),l=Math.abs(s.getZ(r)),u=n.getX(r),h=n.getY(r),d=n.getZ(r);c>=a&&c>=l?o.setXY(r,u/t,d/t):a>=l?o.setXY(r,d/t,h/e):o.setXY(r,u/t,h/e)}o.needsUpdate=!0}function _i(i,t,e,n=!0){const s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"));const o=new Ji(s);return o.colorSpace=Be,o.anisotropy=4,n&&(o.wrapS=o.wrapT=Ka),o}function yo(i,t,e,n=1024,s=128,o){return _i(n,s,r=>{r.fillStyle=t,r.fillRect(0,0,n,s),r.fillStyle=e,r.textAlign="center",r.textBaseline="middle";const a=Math.floor(s*(o?.5:.66));r.font=`bold ${a}px sans-serif`,r.fillText(i,n/2,o?s*.36:s*.54,n*.94),o&&(r.font=`${Math.floor(s*.26)}px sans-serif`,r.fillText(o,n/2,s*.78,n*.94))},!1)}function on(i,t={}){const{uv:e,name:n,...s}=t,o=new Kt({color:i,roughness:.85,...s});return e&&(o.userData.uvScale=e),n&&(o.name=n),o}function CM(){const i=_i(256,256,c=>{c.fillStyle="#a7774a",c.fillRect(0,0,256,256);for(let l=0;l<8;l++){const u=l*32,h=.88+l*37%7*.03;c.fillStyle=`rgba(${Math.round(167*h)},${Math.round(119*h)},${Math.round(74*h)},1)`,c.fillRect(u+1,0,30,256),c.fillStyle="rgba(60,35,15,0.55)",c.fillRect(u,0,1.5,256),c.fillRect(u,l*97%256,32,1.5)}}),t=_i(256,256,c=>{c.fillStyle="#d9d6cf",c.fillRect(0,0,256,256),c.fillStyle="rgba(0,0,0,0.12)";for(let l=0;l<=4;l++)c.fillRect(l*64-1,0,2,256),c.fillRect(0,l*64-1,256,2)}),e=_i(256,256,c=>{c.fillStyle="#b9ada0",c.fillRect(0,0,256,256);for(let l=0;l<8;l++)for(let u=0;u<5;u++){const h=u*64+l%2*32;c.fillStyle=["#c2b4a4","#b3a493","#bcae9d"][(l*3+u)%3],c.fillRect(h+1,l*32+1,62,30),c.fillRect(h-256+1,l*32+1,62,30)}}),n=_i(128,256,c=>{const l=c.createLinearGradient(0,0,0,256);l.addColorStop(0,"#6f97b8"),l.addColorStop(1,"#3d6585"),c.fillStyle=l,c.fillRect(0,0,128,256),c.fillStyle="rgba(255,255,255,0.08)",c.beginPath(),c.moveTo(20,0),c.lineTo(70,0),c.lineTo(30,256),c.lineTo(0,256),c.fill(),c.fillStyle="#c9ccd0",c.fillRect(0,0,4,256),c.fillRect(63,0,2,256),c.fillRect(0,116,128,4)}),s=_i(256,192,c=>{c.fillStyle="#e6e4de",c.fillRect(0,0,256,192),c.fillStyle="rgba(0,0,0,0.10)",c.fillRect(0,0,256,2),c.fillRect(0,0,2,192)}),o=_i(256,256,c=>{c.fillStyle="#efefec",c.fillRect(0,0,256,256),c.fillStyle="#5f7f97",c.fillRect(20,90,216,90),c.fillStyle="rgba(255,255,255,0.18)",c.fillRect(20,90,216,14),c.fillStyle="#d8d8d4",c.fillRect(126,90,4,90)}),r=_i(256,256,c=>{c.fillStyle="#e9ecef",c.fillRect(0,0,256,256),c.strokeStyle="#3a4a6a",c.lineWidth=6,c.strokeRect(0,0,256,256),c.lineWidth=3,c.beginPath(),c.moveTo(0,0),c.lineTo(256,256),c.moveTo(256,0),c.lineTo(0,256),c.stroke()}),a=_i(64,64,c=>{c.fillStyle="#c9c6bf",c.fillRect(0,0,64,64),c.fillStyle="rgba(0,0,0,0.08)",c.fillRect(0,0,64,2)});return{wood:on(16777215,{map:i,uv:[2.4,2.4],roughness:.9,name:"wood"}),tile:on(16777215,{map:t,uv:[2.4,2.4],roughness:.5,name:"tile"}),paving:on(16777215,{map:e,uv:[3.2,3.2],name:"paving"}),curtain:on(16777215,{map:n,uv:[3,6],roughness:.25,metalness:.15,name:"curtain"}),panel:on(16777215,{map:s,uv:[4,3],name:"panel"}),windows:on(16777215,{map:o,uv:[4,4],name:"windows"}),lattice:on(16777215,{map:r,uv:[3,3],side:ze,name:"lattice"}),step:on(16777215,{map:a,uv:[1,1],name:"step"}),concrete:on(12433841,{name:"concrete"}),ceiling:on(14210768,{name:"ceiling"}),roof:on(5006936,{roughness:.7,name:"roof"}),navy:on(1912661,{roughness:.5,metalness:.3,name:"navy"}),steel:on(12896460,{roughness:.45,name:"steel"}),dark:on(2764083,{roughness:.6,name:"dark"}),seat:on(15760666,{roughness:.55,name:"seat"}),glass:new Kt({name:"glass",color:10473702,transparent:!0,opacity:.22,roughness:.05,metalness:.1,depthWrite:!1,side:ze}),light:new Kt({name:"light",color:16777215,emissive:16773840,emissiveIntensity:1.2,roughness:.4}),station:on(12041410,{name:"station"}),tower:on(4610414,{roughness:.3,metalness:.3,name:"tower"})}}let PM=null;function ep(){return PM??(PM=CM())}const cc="水都",LM=`ボートレース${cc}`,Ah=`BOAT RACE ${cc}`,J=.8,Sa=6,Ot=[J,J+Sa,J+2*Sa,J+3*Sa,J+4*Sa],As=.5,it={fence:-45.6,front2:-50.2,rows2:-51.6,col:-55.5,deckBack:-58,upperS:-62,concBack:-86,buildS:-92,plazaW:-100,c2:-60,c3:-63,c4:-66,cTop:-74,buildC:-125,buildN:-105,frontN:-50},H={stationN:262,plazaS:250,gate:238,gateLine:232,standS:205,seat2S:201,seat2N:118,wingN:112,concN:60,deckN:-20,centralN:-70,northN:-262},Cn={n:11,depth:(it.rows2-it.upperS)/11,rise:.42},Xi=[-54.6,-50.6],np=[{name:"南階段",zBottom:219,zTop:H.seat2S+6},{name:"北階段",zBottom:100,zTop:H.seat2N-6}],Ya=35,fo={rows:[-48.6,-49.6,-50.6,-51.6,-52.6],z0:H.wingN+1.5,z1:H.standS-1,pitch:.52,block:24,aisle:1.4},an={xs:[-65,-79],z0:66,dz:12,n:12,size:.8},Kn={x:it.col,z0:H.wingN+6,dz:12,n:8,size:.6},_r=.95,ip=[{kind:"sell",z:76.5,n:8},{kind:"payout",z:90,n:6},{kind:"sell",z:131,n:8},{kind:"payout",z:145,n:6},{kind:"sell",z:167,n:8},{kind:"sell",z:184,n:8},{kind:"payout",z:199,n:4}],hi={w:.86,d:.7},de={x:-72,zs:[84,108,132,156,180],len:3.2,w:.9,h:1.05},Rh=[68,96,124,150,176,198],l0=[[-47.4,128],[-80,134],[-56.5,140],[-51.3,22],[-75,H.plazaS-3]];function IM(){const i=new Ve;i.name="stand";const t=ep(),e=new tp,n=Ot[1]-As;e.box(t.wood,it.deckBack,it.fence,J-.3,J+.03,H.deckN,H.standS),e.box(t.paving,it.plazaW,it.fence,J-.3,J+.02,H.standS,H.plazaS+12),e.box(t.tile,it.concBack,it.deckBack,J-.3,J+.02,H.concN,H.standS),e.box(t.glass,it.fence-.04,it.fence+.04,J,J+1.05,H.deckN,H.plazaS),e.box(t.steel,it.fence-.05,it.fence+.05,J+1.05,J+1.12,H.deckN,H.plazaS);for(let r=H.deckN;r<=H.plazaS;r+=3)e.box(t.steel,it.fence-.04,it.fence+.04,J,J+1.05,r-.03,r+.03);e.box(t.glass,it.deckBack,it.fence,J,J+1.05,H.deckN-.04,H.deckN+.04),e.box(t.steel,it.deckBack,it.fence,J+1.05,J+1.12,H.deckN-.05,H.deckN+.05),e.box(t.panel,it.buildS,it.concBack,J,n,H.wingN,H.standS),e.box(t.panel,it.buildS,-82,J,n,H.standS,H.standS+.4),e.box(t.panel,-62,it.deckBack,J,n,H.standS,H.standS+.4),e.box(t.panel,-82,-62,J+4.2,n,H.standS,H.standS+.4),e.box(t.ceiling,it.buildS,it.front2,n,Ot[1],H.wingN,H.seat2S+6);for(let r=0;r<Cn.n;r++){const a=it.rows2-(r+1)*Cn.depth;e.box(t.step,a,a+Cn.depth,Ot[1],Ot[1]+(r+1)*Cn.rise,H.seat2N,H.seat2S)}e.box(t.glass,it.front2,it.front2+.08,Ot[1],Ot[1]+1.05,H.wingN,H.seat2S+6),e.box(t.steel,it.front2-.02,it.front2+.1,Ot[1]+1.05,Ot[1]+1.12,H.wingN,H.seat2S+6),e.box(t.panel,it.front2-.02,it.front2+.1,n-.6,Ot[1],H.wingN,H.seat2S+6);for(const r of[H.seat2S+6,H.wingN])e.box(t.glass,it.upperS,Xi[0],Ot[1],Ot[1]+1.05,r-.04,r+.04),e.box(t.steel,it.upperS,Xi[0],Ot[1]+1.05,Ot[1]+1.12,r-.05,r+.05);e.box(t.panel,it.buildS,it.upperS,Ot[1],Ot[2]-As,H.wingN,H.seat2S+6);for(let r=H.seat2N+8;r<H.seat2S;r+=16)e.box(t.dark,it.upperS+.01,it.upperS+.05,Ot[1]+Cn.n*Cn.rise,Ot[1]+Cn.n*Cn.rise+2.2,r-1.2,r+1.2);e.box(t.panel,it.buildS,it.upperS-.4,Ot[2]-As,Ot[4],H.wingN,H.standS),e.box(t.curtain,it.upperS-.4,it.upperS,Ot[2],Ot[4],H.wingN+.3,H.standS-.3);for(const r of[Ot[2],Ot[3]])e.box(t.panel,it.buildS,it.upperS+.4,r-As,r+.2,H.wingN,H.standS);e.box(t.curtain,it.buildS+2,it.upperS-1,Ot[2],Ot[4]-.4,H.standS,H.standS+.3);for(const r of[Ot[3]])e.box(t.panel,it.buildS+2,it.upperS-1,r-As,r+.2,H.standS+.25,H.standS+.45);e.box(t.roof,-84,-60,J+4.3,J+4.6,H.standS,H.standS+4),e.box(t.roof,it.buildS,-53,Ot[4]-.6,Ot[4],H.wingN-1,H.standS+1),e.box(t.panel,-53.4,-53,Ot[4]-1.3,Ot[4]+.3,H.wingN-1,H.standS+1);for(let r=H.wingN+2;r<=H.standS;r+=12)e.box(t.dark,it.upperS-.2,-53.4,Ot[4]-1.5,Ot[4]-.6,r-.25,r+.25);for(let r=H.wingN+4;r<H.standS;r+=8)e.box(t.dark,-53.6,-53,Ot[4]+.3,Ot[4]+2.2,r-.1,r+.1),e.box(t.light,-53.7,-53.2,Ot[4]+1.4,Ot[4]+2.2,r-.7,r+.7);for(let r=0;r<Kn.n;r++){const a=Kn.z0+r*Kn.dz,c=Kn.size/2;e.box(t.panel,Kn.x-c,Kn.x+c,J,n,a-c,a+c)}{let r=H.standS;for(const a of[...Rh].sort((c,l)=>l-c))e.box(t.glass,it.deckBack-.05,it.deckBack+.05,J,n,a+2,r),e.box(t.panel,it.deckBack-.15,it.deckBack+.15,J+3.2,n,a-2,a+2),r=a-2;e.box(t.glass,it.deckBack-.05,it.deckBack+.05,J,n,H.concN,r);for(let a=H.concN;a<=H.standS;a+=4)Rh.some(c=>Math.abs(c-a)<2.1)||e.box(t.steel,it.deckBack-.08,it.deckBack+.08,J,n,a-.06,a+.06);e.box(t.steel,it.deckBack-.08,it.deckBack+.08,J+3.1,J+3.2,H.concN,H.standS)}for(const r of an.xs)for(let a=0;a<an.n;a++){const c=an.z0+a*an.dz,l=an.size/2;e.box(t.panel,r-l,r+l,J,n,c-l,c+l),e.box(t.dark,r-l-.02,r+l+.02,J,J+.12,c-l-.02,c+l+.02)}e.box(t.panel,it.buildC,it.deckBack-.4,J,n,H.centralN,H.concN),e.box(t.panel,it.buildC,it.concBack,J,n,H.concN,H.wingN),e.box(t.curtain,it.deckBack-.4,it.deckBack,J,n,H.centralN+.3,H.concN),e.box(t.ceiling,it.buildC,it.deckBack,n,Ot[1],H.centralN,H.wingN);const s=[it.c2,it.c3,it.c4];for(let r=0;r<3;r++){const a=Ot[r+1],c=Ot[r+2]-As,l=s[r];e.box(t.panel,it.buildC,l-.4,a,c,H.centralN,H.wingN),e.box(t.curtain,l-.4,l,a,c,H.centralN+.3,H.wingN-.3),e.box(t.panel,it.buildC,l+.4,c,Ot[r+2]+.2,H.centralN,H.wingN)}e.box(t.panel,it.buildC,it.c2+.4,Ot[1]-.1,Ot[1]+1,H.centralN,H.wingN),e.box(t.roof,it.buildC,it.upperS,Ot[4]-.6,Ot[4],H.centralN-1,H.wingN),e.box(t.panel,it.upperS-.4,it.upperS,Ot[4]-1.3,Ot[4]+.3,H.centralN-1,H.wingN);for(let r=H.centralN+4;r<H.wingN;r+=8)e.box(t.dark,it.upperS-.6,it.upperS,Ot[4]+.3,Ot[4]+2.2,r-.1,r+.1),e.box(t.light,it.upperS-.7,it.upperS-.2,Ot[4]+1.4,Ot[4]+2.2,r-.7,r+.7);const o=J+34;e.box(t.panel,it.buildC+7,it.cTop,Ot[4],o,H.centralN+20,H.wingN-20),e.box(t.roof,it.buildC+6,it.cTop+1,o,o+.5,H.centralN+19,H.wingN-19);for(let r=H.centralN+24;r<H.wingN-20;r+=10)e.box(t.light,it.cTop+.1,it.cTop+.6,o+.5,o+1.3,r-.6,r+.6);e.box(t.windows,it.buildN,it.frontN,J,J+22,H.northN,H.centralN),e.box(t.roof,it.buildN-.5,it.frontN+.5,J+22,J+22.6,H.northN-.5,H.centralN+.5),e.box(t.panel,it.frontN-.6,it.frontN,J,J+4,H.northN+10,H.centralN-10);for(const r of np){const a=Math.sign(r.zTop-r.zBottom),c=Math.abs(r.zTop-r.zBottom)/Ya,l=(Ot[1]-J)/Ya;for(let u=0;u<Ya;u++){const h=r.zBottom+a*u*c,d=h+a*c;e.box(t.concrete,Xi[0],Xi[1],Math.max(J,J+(u+1)*l-.6),J+(u+1)*l,Math.min(h,d),Math.max(h,d))}for(const u of Xi){const h=new A(u,J+1,r.zBottom),d=new A(u,Ot[1]+1,r.zTop);e.bar(t.steel,h,d,.06);for(let f=0;f<=6;f++){const p=f/6,x=r.zBottom+(r.zTop-r.zBottom)*p,g=J+(Ot[1]-J)*p;e.box(t.steel,u-.03,u+.03,g,g+1,x-.03,x+.03)}e.add(t.glass,DM(u,r.zBottom,r.zTop))}}for(let r=0;r<11;r++){const a=-61-r*2.6;e.box(t.steel,a-.15,a+.15,J,J+1,H.gateLine-.6,H.gateLine+.6),e.box(t.dark,a-.16,a+.16,J+1,J+1.06,H.gateLine-.6,H.gateLine+.6)}for(const[r,a]of[[-60,it.fence],[it.plazaW,-89.5]]){e.box(t.steel,Math.min(r,a),Math.max(r,a),J+1,J+1.08,H.gateLine-.04,H.gateLine+.04);for(let c=Math.min(r,a);c<=Math.max(r,a);c+=1.5)e.box(t.steel,c-.03,c+.03,J,J+1,H.gateLine-.03,H.gateLine+.03)}e.box(t.panel,it.plazaW-.6,it.plazaW,J,J+1.2,H.standS,H.plazaS);{const c=41.285714285714285,l=J+15-c,u=-75,h=Math.asin(23/c),d=new mn(c,c,16,32,1,!0,Math.PI-h,2*h);d.rotateX(Math.PI/2),e.add(t.lattice,d,new re().makeTranslation(u,l,H.gate));for(const f of[-8,8]){const p=new vc(c,.5,6,40,2*h);p.rotateZ(Math.PI/2-h),e.add(t.navy,p,new re().makeTranslation(u,l,H.gate+f));for(const x of[-23,23])e.box(t.navy,u+x-.5,u+x+.5,J,l+Math.sqrt(c*c-23*23),H.gate+f-.5,H.gate+f+.5)}}e.box(t.roof,-80,-70,J+3.6,J+3.9,H.gate+8,H.stationN);for(let r=H.gate+10;r<H.stationN;r+=6)for(const a of[-79.7,-70.3])e.box(t.steel,a-.1,a+.1,J,J+3.6,r-.1,r+.1);e.box(t.station,-140,-55,J,J+12,H.stationN,H.stationN+38),e.box(t.station,-320,220,J+7,J+8.2,H.stationN+14,H.stationN+20);for(let r=-300;r<=200;r+=30)e.box(t.station,r-.8,r+.8,J,J+7,H.stationN+15.5,H.stationN+18.5);e.box(t.tower,-185,-155,J,J+86,340,370),e.box(t.dark,-183,-157,J+86,J+89,342,368),e.build(i,{name:"stand"}),i.add(NM(t.seat));{const r=new Nt(new Xe(72,6.5),new Kt({map:yo(Ah,"#1d2f55","#ffffff",2048,180),emissive:16777215,emissiveIntensity:.25,roughness:.5}));r.material.emissiveMap=r.material.map,r.rotation.y=Math.PI/2,r.position.set(it.cTop+.06,Ot[4]+6,(H.centralN+H.wingN)/2),r.name="sign:roof",i.add(r);const a=new Nt(new Xe(24,2.6),new Kt({map:yo(Ah,"#1d2f55","#ffffff",1024,112),emissive:16777215,emissiveIntensity:.35,roughness:.5}));a.material.emissiveMap=a.material.map,a.position.set(-75,J+12.6,H.gate+8.6),a.name="sign:gate",i.add(a);const c=a.clone();c.rotation.y=Math.PI,c.position.z=H.gate-8.6,i.add(c);const l=a.clone();l.scale.setScalar(.9),l.position.set(-76,Ot[1]+2.6,H.standS+.06),i.add(l)}return i}function DM(i,t,e){const n=J,s=Ot[1],o=.95,r=new Le,a=[i,n+.05,t,i,s+.05,e,i,s+o,e,i,n+o,t];return r.setAttribute("position",new he(a,3)),r.setIndex([0,1,2,0,2,3]),r.computeVertexNormals(),r}function sp(){const i=[],t=(e,n,s)=>{let o=e;for(;o<n;){for(let r=0;r<fo.block&&o<n;r++,o+=fo.pitch)s(o);o+=fo.aisle}};for(const e of fo.rows)t(fo.z0,fo.z1,n=>i.push({x:e,y:J,z:n}));for(let e=0;e<Cn.n;e++){const n=it.rows2-(e+.62)*Cn.depth,s=Ot[1]+(e+1)*Cn.rise;t(H.seat2N+.6,H.seat2S-.3,o=>i.push({x:n,y:s,z:o}))}return i}function NM(i){const t=[],e=(a,c,l,u,h,d,f=0)=>{const p=new oe(a,c,l).toNonIndexed();p.applyMatrix4(new re().makeRotationZ(f).setPosition(u,h,d)),t.push(p)};e(.42,.06,.44,.02,.43,0),e(.06,.46,.44,-.2,.7,0,-.18),e(.08,.4,.08,-.02,.2,0);const n=zr(t),s=sp(),o=new Ti(n,i,s.length),r=new re;return s.forEach((a,c)=>{r.makeTranslation(a.x,a.y+.02,a.z),o.setMatrixAt(c,r)}),o.castShadow=!0,o.receiveShadow=!0,o.name="seats",o.computeBoundingSphere(),o}function zr(i){let t=0;for(const r of i)t+=r.attributes.position.count;const e=new Float32Array(t*3),n=new Float32Array(t*3);let s=0;for(const r of i)e.set(r.attributes.position.array,s*3),n.set(r.attributes.normal.array,s*3),s+=r.attributes.position.count;const o=new Le;return o.setAttribute("position",new Je(e,3)),o.setAttribute("normal",new Je(n,3)),o}const zM={big:"中継・出走表・オッズ",board:"オッズ・払戻",odds:"オッズ",deck:"中継"};function So(i,t,e,n,s,o){const r=new bi({map:FM(t,zM[e],o),toneMapped:!1}),a=new Nt(new Xe(n,s),r);return a.name=`screen:${i}`,{id:i,name:t,kind:e,mesh:a,size:{w:n,h:s},px:o}}function UM(i,t){const e=i.mesh.material.map;i.mesh.material.map=t,i.mesh.material.needsUpdate=!0,e&&e!==t&&e.userData.placeholder&&e.dispose()}function FM(i,t,e){const n=Math.min(512,e.w),s=Math.max(32,Math.round(n*e.h/e.w)),o=document.createElement("canvas");o.width=n,o.height=s;const r=o.getContext("2d"),a=r.createLinearGradient(0,0,0,s);a.addColorStop(0,"#13304f"),a.addColorStop(1,"#0a1a2c"),r.fillStyle=a,r.fillRect(0,0,n,s),r.strokeStyle="#2f6db5",r.lineWidth=Math.max(2,s*.03),r.strokeRect(0,0,n,s),r.fillStyle="#fff",r.textAlign="center",r.textBaseline="middle",r.font=`bold ${Math.floor(s*.2)}px sans-serif`,r.fillText(LM,n/2,s*.3,n*.9),r.fillStyle="#ffd34d",r.font=`${Math.floor(s*.15)}px sans-serif`,r.fillText(`${i}（${t}）`,n/2,s*.62,n*.92);const c=new Ji(o);return c.colorSpace=Be,c.userData.placeholder=!0,c}const sn=[new A(0,0,150),new A(0,0,-150)],Gn=0,Bt={x0:-45,x1:85,z0:sn[1].z-120,z1:sn[0].z+70},kn=.8,OM=H.deckN,h0=3,kM=Bt.z0,_u=-18,Ar=6,Fs=4.5,jn=7,BM=Ar*Fs+1,Ur=kM+jn-2.5;function VM(i){return{x:_u+Ar*Fs/2-(i-.5)*Fs,z:Ur+2.3,heading:0}}const HM=[16053492,2236962,14165547,2056127,15909424,1940042],GM=["#f4f4f4","#222222","#d8262b","#1f5fbf","#f2c230","#1d9a4a"];function WM(i,t,e,n,s){const o=document.createElement("canvas");o.width=n,o.height=s;const r=o.getContext("2d");r.fillStyle=t,r.fillRect(0,0,n,s),r.fillStyle=e,r.font=`bold ${Math.floor(s*.72)}px sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(i,n/2,s*.54,n*.94);const a=new Ji(o);return a.colorSpace=Be,a.anisotropy=4,a}function XM(i,t,e){const n=document.createElement("canvas");n.width=256,n.height=256;const s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,256,256),s.fillStyle=e,s.font="bold 120px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,128,80);const o=new Ji(n);return o.colorSpace=Be,o}function $M(){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d");e.fillStyle="#111",e.fillRect(0,0,512,512),e.translate(512/2,512/2),e.fillStyle="#f2c230";for(let l=0;l<12;l++)e.save(),e.rotate(l/12*Math.PI*2),e.beginPath(),e.moveTo(0,-512*.46),e.lineTo(-512*.035,-512*.38),e.lineTo(512*.035,-512*.38),e.closePath(),e.fill(),e.restore();e.fillStyle="#fff",e.font=`bold ${512*.11}px sans-serif`,e.textAlign="center",e.textBaseline="middle";const n=(l,u)=>[Math.sin((12-l)/12*Math.PI*2)*u,-Math.cos((12-l)/12*Math.PI*2)*u],[s,o]=n(5,512*.27),[r,a]=n(10,512*.27);e.fillText("5",s,o),e.fillText("10",r,a);const c=new Ji(t);return c.colorSpace=Be,c}class Mu{constructor(t){S(this,"group",new Ve);S(this,"floaters",[]);S(this,"floorTime",{value:0});S(this,"clockHand",null);S(this,"waves");S(this,"screens",[]);this.waves=t;for(const x of sn)this.addMark(x.x,x.z);const e=new Kt({color:11117980,roughness:1}),n=new kf;n.moveTo(-1400,-1400),n.lineTo(1400,-1400),n.lineTo(1400,1400),n.lineTo(-1400,1400),n.lineTo(-1400,-1400);const s=new nc;s.moveTo(Bt.x0,Bt.z0),s.lineTo(Bt.x0,Bt.z1),s.lineTo(Bt.x1,Bt.z1),s.lineTo(Bt.x1,Bt.z0),s.lineTo(Bt.x0,Bt.z0),n.holes.push(s);const o=new au(n);o.rotateX(Math.PI/2);const r=new Nt(o,new Kt({color:9210498,roughness:1,side:ze}));r.position.y=kn,r.receiveShadow=!0,this.group.add(r);const a=kn+h0,c=[[Bt.x0-.3,(Bt.z0+Bt.z1)/2,.6,Bt.z1-Bt.z0],[Bt.x1+.3,(Bt.z0+Bt.z1)/2,.6,Bt.z1-Bt.z0],[(Bt.x0+Bt.x1)/2,Bt.z0-.3,Bt.x1-Bt.x0,.6],[(Bt.x0+Bt.x1)/2,Bt.z1+.3,Bt.x1-Bt.x0,.6]];for(const[x,g,m,v]of c){const y=new Nt(new oe(m,a,v),e);y.position.set(x,kn-a/2,g),this.group.add(y)}const l=new Kt({color:9081227,roughness:1});l.onBeforeCompile=x=>{x.uniforms.uTime=this.floorTime,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
          varying vec3 vFloorW;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
          vFloorW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
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
          gl_FragColor.rgb *= 0.8 + 1.1 * causticAt(vFloorW.xz, uTime);`)};const u=new Nt(new Xe(Bt.x1-Bt.x0,Bt.z1-Bt.z0),l);u.rotation.x=-Math.PI/2,u.position.set((Bt.x0+Bt.x1)/2,-h0,(Bt.z0+Bt.z1)/2),this.group.add(u);const h=new Kt({color:15263976,roughness:.6}),d=OM-Bt.z0,f=new Nt(new oe(.08,.08,d),h);f.position.set(Bt.x0-.5,kn+1.1,Bt.z0+d/2),this.group.add(f);const p=new Ti(new oe(.06,1.1,.06),h,Math.floor(d/3));for(let x=0;x<p.count;x++)p.setMatrixAt(x,new re().makeTranslation(Bt.x0-.5,kn+.55,Bt.z0+1.5+x*3));this.group.add(p),this.addStand(),this.addPit(),this.addClock(),this.addDistanceSigns(),this.addBoard(),this.addCity()}addStand(){this.group.add(IM())}addPit(){const t=new Ve,e=new Kt({color:10131600,roughness:1}),n=0,s=0,o=Ar*Fs,r=new Nt(new oe(jn,.5,o+1),e);r.position.set(n+jn/2-2.5,.05,s),t.add(r);for(let u=0;u<=Ar;u++){const h=new Nt(new oe(4,.35,.5),e);h.position.set(n+jn-.5,.05,s-o/2+u*Fs),t.add(h)}for(let u=0;u<Ar;u++){const h=u+1,d=HM[h-1],f=new Kt({color:d,roughness:.55}),p=s-o/2+(u+.5)*Fs,x=new Ve,g=Fs-.6;for(const _ of[-1,1]){const L=new Nt(new oe(jn-2,1.6,.25),f);L.position.set(0,1.1,_*g/2),x.add(L)}const m=new Nt(new mn(g/2,g/2,jn-2,20,1,!0,0,Math.PI),f);m.rotation.set(0,0,Math.PI/2),m.rotation.order="ZYX",m.position.set(0,1.9,0),m.material.side=ze,x.add(m);const v=h===1||h===5?"#111":"#fff",y=new Nt(new Oo(g/2,24,0,Math.PI),new Kt({map:XM(String(h),GM[h-1],v),roughness:.6}));y.rotation.y=Math.PI/2,y.position.set((jn-2)/2+.01,1.9,0),x.add(y),x.position.set(n+jn/2-2,.3,p),t.add(x)}const a=new Nt(new oe(jn+1,.3,o+2),new Kt({color:4020858,roughness:.6}));a.position.set(n+jn/2-2.5,4.6,s),t.add(a);const c=new Nt(new Xe(o,1.4),new Kt({map:WM(`${Ah}　ピット`,"#3d5a7a","#fff",1024,64),roughness:.6}));c.rotation.y=Math.PI/2,c.position.set(n+jn-1.99,5.3,s),t.add(c);const l=new Nt(new oe(.2,1.4,o),new Kt({color:2901344}));l.position.set(n+jn-2.1,5.3,s),t.add(l);for(const u of t.children)u.castShadow=!0;t.rotation.y=-Math.PI/2,t.position.set(_u,0,Bt.z0),this.group.add(t)}addClock(){const t=new Ve,e=new Kt({color:1973790,roughness:.7}),n=new Kt({color:5593695,roughness:.6,metalness:.3});for(const u of[-2.6,2.6]){const h=new Nt(new oe(.5,6,.5),n);h.position.set(0,3,u),t.add(h)}const s=new Nt(new oe(.5,6,6),e);s.position.set(0,8,0),t.add(s);const o=new Nt(new Oo(2.5,48),new Kt({map:$M(),roughness:.5}));o.rotation.y=-Math.PI/2,o.position.set(-.26,8,0),t.add(o);const r=new Ve,a=new Nt(new oe(.05,2.2,.18),new Kt({color:16777215,roughness:.4,emissive:2236962}));a.position.y=1,r.add(a);const c=new Nt(new mn(.2,.2,.08,16),new Kt({color:14540253}));c.rotation.z=Math.PI/2,r.add(c),r.position.set(-.32,8,0),t.add(r),this.clockHand=r;const l=new Nt(new oe(.4,2,1.5),new Kt({color:14540253,roughness:.4}));l.position.set(0,7.5,4.2),t.add(l),t.position.set(Bt.x1+3,kn,Gn+6);for(const u of t.children)u.castShadow=!0;this.group.add(t)}addDistanceSigns(){const t=new Kt({color:9080724,roughness:.6,metalness:.3}),e=12,n=3,s=1.5,o=new Le;o.setAttribute("position",new he([-.35,0,0,.35,0,0,0,-.75,0],3)),o.setIndex([0,2,1]),o.computeVertexNormals();const r=new Kt({roughness:.8,side:ze}),a=Bt.x0-.8,c=Bt.x1+.8,l=kn+e,u=x=>{const g=(x-a)/(c-a);return l-.3-n*4*g*(1-g)},h=Math.floor((c-a)/s)-1,d=new re,f=new Jt(14165547),p=new Jt(16053492);for(const x of[50,100,150]){const g=Gn-x;for(const y of[a,c]){const _=new Nt(new mn(.12,.16,e,10),t);_.position.set(y,kn+e/2,g),_.castShadow=!0,this.group.add(_)}const m=[];for(let y=0;y<=40;y++){const _=a+(c-a)*y/40;m.push(new A(_,u(_),g))}this.group.add(new Nf(new Le().setFromPoints(m),new eu({color:3355443})));const v=new Ti(o,r,h);for(let y=0;y<h;y++){const _=a+s*(y+1),L=(u(_+.1)-u(_-.1))/.2;d.makeRotationZ(Math.atan(L)).setPosition(_,u(_),g),v.setMatrixAt(y,d),v.setColorAt(y,y%2?p:f)}v.castShadow=!0,this.group.add(v)}}setClock(t){if(!this.clockHand)return;const e=(t%12+12)%12/12;this.clockHand.rotation.x=e*Math.PI*2}addBoard(){const t=Bt.x1+8,e=new Kt({color:2369325,roughness:.7}),n=new Nt(new oe(2,28,96),e);n.position.set(t+1,kn+14,0),n.castShadow=!0,this.group.add(n);const s=new Nt(new oe(6,1.2,96),e);s.position.set(t+3,kn+.6,0),this.group.add(s);const o=So("big","対岸大型映像","big",58,14.5,{w:2048,h:512});o.mesh.rotation.y=-Math.PI/2,o.mesh.position.set(t-.02,kn+12+7.25,0),this.group.add(o.mesh),this.screens.push(o);for(const[r,a,c]of[["board-s","表示盤（南）",39],["board-n","表示盤（北）",-39]]){const l=So(r,a,"board",16,10,{w:1024,h:640});l.mesh.rotation.y=-Math.PI/2,l.mesh.position.set(t-.02,kn+12+7.25,c),this.group.add(l.mesh),this.screens.push(l)}}addCity(){const t=[12040637,13222840,10462893,14079698].map(r=>new Kt({color:r,roughness:.9})),e=t.map(()=>[]);let n=12345;const s=()=>(n=n*16807%2147483647)%1e4/1e4,o=new re;for(let r=0;r<140;r++){const a=s()*Math.PI*2,c=330+s()*700,l=Math.cos(a)*c,u=Math.sin(a)*c,h=12+s()**2*90,d=20+s()*40,f=new oe(d,h,20+s()*40);o.makeRotationY(s()*Math.PI).setPosition(l,kn+h/2,u),f.applyMatrix4(o),!(Math.hypot(l+170,u-355)<60||u>250&&u<330&&l>-350&&l<250)&&e[r%t.length].push(f)}e.forEach((r,a)=>{const c=Qf(r,!1);c&&this.group.add(new Nt(c,t[a]))})}addMark(t,e){const n=new Ve,s=new Kt({color:15895070,roughness:.5}),o=new Kt({color:16119285,roughness:.5}),r=new Nt(new mn(.7,.8,1.8,24),s);r.position.y=.6,n.add(r);const a=new Nt(new mn(.71,.75,.35,24),o);a.position.y=.7,n.add(a);const c=new Nt(new ru(.7,.5,24),s);c.position.y=1.75,n.add(c);for(const l of n.children)l.castShadow=!0;this.group.add(n),this.floaters.push({obj:n,x:t,z:e,draft:.2})}update(t){this.floorTime.value=t;for(const e of this.floaters)e.obj.position.set(e.x,this.waves.height(e.x,e.z,t)-e.draft,e.z)}}const cr=160,u0=5,qM=.035;class yu{constructor(t){S(this,"mesh");S(this,"points",[]);S(this,"lastAdd",-1);S(this,"pos");S(this,"across");S(this,"waves");this.waves=t,this.pos=new Float32Array(cr*2*3),this.across=new Float32Array(cr*2*3);const e=[];for(let o=0;o<cr-1;o++){const r=o*2;e.push(r,r+2,r+1,r+1,r+2,r+3)}const n=new Le;n.setAttribute("position",new Je(this.pos,3).setUsage(Sr)),n.setAttribute("aWake",new Je(this.across,3).setUsage(Sr)),n.setIndex(e);const s=new Qn({transparent:!0,depthWrite:!1,side:ze,vertexShader:`
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
      `});this.mesh=new Nt(n,s),this.mesh.frustumCulled=!1}add(t,e,n,s){if(t-this.lastAdd<qM)return;this.lastAdd=t;const o=Math.hypot(n.x,n.z)||1;this.points.unshift({x:e.x,z:e.z,sx:n.x/o,sz:n.z/o,born:t,strength:s}),this.points.length>cr&&this.points.pop()}clear(){this.points=[]}update(t){for(;this.points.length&&t-this.points[this.points.length-1].born>u0;)this.points.pop();const e=this.points.length;for(let s=0;s<cr;s++){const o=s*6;if(e===0){this.across[o+2]=this.across[o+5]=0;continue}const r=this.points[Math.min(s,e-1)],a=Math.min(1,(t-r.born)/u0),c=.45+Math.sqrt(a)*4.5,l=this.waves.height(r.x,r.z,t)+.03;this.pos[o]=r.x+r.sx*c,this.pos[o+1]=l,this.pos[o+2]=r.z+r.sz*c,this.pos[o+3]=r.x-r.sx*c,this.pos[o+4]=l,this.pos[o+5]=r.z-r.sz*c;const u=s<e?r.strength:0;this.across.set([1,a,u,-1,a,u],o)}const n=this.mesh.geometry;n.attributes.position.needsUpdate=!0,n.attributes.aWake.needsUpdate=!0}}const wa=60,d0=70,YM=30,jM=1.5;class op{constructor(t){S(this,"input",{steer:0,throttle:0,leanX:0,leanZ:0});S(this,"lever",0);S(this,"tiltActive",!1);S(this,"swap",!1);S(this,"tiltDeg",0);S(this,"touches",new Map);S(this,"keys",new Set);S(this,"layer");S(this,"leanPad");S(this,"leanKnob");S(this,"leverTrack");S(this,"steerPad");S(this,"steerKnob");S(this,"tiltAngle",0);S(this,"tiltZero",0);S(this,"tiltSmoothed",0);S(this,"lastMotion",0);this.layer=t,this.leanPad=document.getElementById("lean-pad"),this.leanKnob=this.leanPad.querySelector(".knob"),this.leverTrack=document.getElementById("lever"),this.steerPad=document.getElementById("steer-pad"),this.steerKnob=this.steerPad.querySelector(".knob"),t.addEventListener("pointerdown",e=>this.down(e)),t.addEventListener("pointermove",e=>this.move(e)),t.addEventListener("pointerup",e=>this.up(e)),t.addEventListener("pointercancel",e=>this.up(e)),window.addEventListener("keydown",e=>this.keys.add(e.code)),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),window.addEventListener("devicemotion",e=>this.onMotion(e))}async enableTilt(){const t=window.DeviceMotionEvent;if(t!=null&&t.requestPermission)try{if(await t.requestPermission()!=="granted")return!1}catch{return!1}for(let e=0;e<15;e++){if(performance.now()-this.lastMotion<500)return this.recenter(),!0;await new Promise(n=>setTimeout(n,100))}return!1}recenter(){this.tiltZero=this.tiltAngle,this.tiltSmoothed=0}onMotion(t){var r;const e=t.accelerationIncludingGravity;if(!e||e.x==null||e.y==null)return;const n=(((r=screen.orientation)==null?void 0:r.angle)??window.orientation??0)*Math.PI/180,s=e.x*Math.cos(n)-e.y*Math.sin(n),o=e.x*Math.sin(n)+e.y*Math.cos(n);Math.hypot(s,o)<2||(this.tiltAngle=Math.atan2(-s,o)*180/Math.PI,this.lastMotion=performance.now())}zoneOf(t){const e=window.innerWidth;return t<e*.38?"lever":this.swap?!this.tiltActive&&t<e*.68?"lean":"steer":!this.tiltActive&&t<e*.68?"steer":"lean"}down(t){t.preventDefault();const e=this.zoneOf(t.clientX);for(const n of this.touches.values())if(n.role===e)return;try{this.layer.setPointerCapture(t.pointerId)}catch{}this.touches.set(t.pointerId,{id:t.pointerId,role:e,x0:t.clientX,y0:t.clientY,x:t.clientX,y:t.clientY,lever0:this.lever}),e==="lean"&&this.placePad(this.leanPad,t.clientX,t.clientY),e==="steer"&&this.placePad(this.steerPad,t.clientX,t.clientY),e==="lever"&&this.leverTrack.classList.add("active")}placePad(t,e,n){t.style.left=`${e}px`,t.style.top=`${n}px`,t.classList.add("active")}move(t){const e=this.touches.get(t.pointerId);if(e&&(e.x=t.clientX,e.y=t.clientY,e.role==="lever")){const n=this.leverTrack.getBoundingClientRect().height||200;this.lever=Math.max(0,Math.min(1,e.lever0-(e.y-e.y0)/n))}}up(t){const e=this.touches.get(t.pointerId);e&&(this.touches.delete(t.pointerId),e.role==="lean"&&this.resetPad(this.leanPad,this.leanKnob),e.role==="steer"&&this.resetPad(this.steerPad,this.steerKnob),e.role==="lever"&&this.leverTrack.classList.remove("active"))}resetPad(t,e){t.classList.remove("active"),t.style.left=t.style.top="",e.style.transform=""}update(t){const e=h=>this.keys.has(h),n=Math.exp(-t/.25);let s=this.input.leanX*n,o=this.input.leanZ*n,r=0;for(const h of this.touches.values()){const d=h.x-h.x0,f=h.y-h.y0;h.role==="lean"?(s=Math.max(-1,Math.min(1,d/wa)),o=Math.max(-1,Math.min(1,-f/wa)),this.leanKnob.style.transform=`translate(${s*wa}px, ${-o*wa}px)`):h.role==="steer"&&(r=Math.max(-1,Math.min(1,d/d0)),this.steerKnob.style.transform=`translateX(${r*d0}px)`)}if(this.tiltActive){let h=this.tiltAngle-this.tiltZero;h=(h+540)%360-180,this.tiltDeg=h,h=Math.sign(h)*Math.max(0,Math.abs(h)-jM);const d=Math.max(-1,Math.min(1,h/YM));this.tiltSmoothed+=(d-this.tiltSmoothed)*(1-Math.exp(-t*20)),this.swap?s=this.tiltSmoothed:r=this.tiltSmoothed}const a=(e("ArrowRight")||e("KeyD")?1:0)-(e("ArrowLeft")||e("KeyA")?1:0),c=(e("KeyE")?1:0)-(e("KeyQ")?1:0),l=(e("KeyR")?1:0)-(e("KeyF")?1:0),u=1-Math.exp(-t*8);a&&(r=this.input.steer+(a-this.input.steer)*u),(c||l)&&(s=this.input.leanX+(c-this.input.leanX)*u,o=this.input.leanZ+(l-this.input.leanZ)*u),(e("ArrowUp")||e("KeyW"))&&(this.lever=Math.min(1,this.lever+t*1.5)),(e("ArrowDown")||e("KeyS"))&&(this.lever=Math.max(0,this.lever-t*1.5)),this.input.steer=r,this.input.leanX=s,this.input.leanZ=o,this.input.throttle=this.lever,this.leverTrack.querySelector(".fill").style.height=`${this.lever*100}%`,this.leverTrack.querySelector(".knob").style.bottom=`${this.lever*100}%`}}function rp(i){const t=i.swap,e=document.getElementById("steer-pad"),n=document.getElementById("lean-pad");e.classList.toggle("swap",t),n.classList.toggle("swap",t),e.hidden=t?!1:i.tiltActive,n.hidden=t&&i.tiltActive,document.getElementById("wheel").hidden=t}function ap(i,t){const e=document.getElementById("wheel"),n=t*90;document.getElementById("wheel-rot").setAttribute("transform",`rotate(${n.toFixed(1)} 60 60)`);const s=n*Math.PI/180,o=60+54*Math.sin(s),r=60-54*Math.cos(s);document.getElementById("wheel-fill").setAttribute("d",`M 60 6 A 54 54 0 0 ${n>=0?1:0} ${o.toFixed(2)} ${r.toFixed(2)}`),e.classList.toggle("full",Math.abs(t)>.98);const a=t>.02?"右":t<-.02?"左":"";document.getElementById("wheel-label").textContent=i.tiltActive?`${a} ${Math.abs(i.tiltDeg).toFixed(0)}°`.trim():`${a} ${Math.round(Math.abs(t)*100)}%`.trim()}function cp(i){const t=i.comW,e=i.vel,n=1.2;t.z<Ur+n&&Math.abs(t.x-_u)<BM/2&&(i.shift(0,Ur+n-t.z),e.z=Math.abs(e.z)*.3,e.multiplyScalar(.6)),t.x<Bt.x0+n&&(i.shift(Bt.x0+n-t.x,0),e.x=Math.abs(e.x)*.3,e.multiplyScalar(.6)),t.x>Bt.x1-n&&(i.shift(Bt.x1-n-t.x,0),e.x=-Math.abs(e.x)*.3,e.multiplyScalar(.6)),t.z<Bt.z0+n&&(i.shift(0,Bt.z0+n-t.z),e.z=Math.abs(e.z)*.3,e.multiplyScalar(.6)),t.z>Bt.z1-n&&(i.shift(0,Bt.z1-n-t.z),e.z=-Math.abs(e.z)*.3,e.multiplyScalar(.6))}const Ch="boatgame.prop",Ph="boatgame.tilt";function ZM(i){try{Object.assign(i.prop,JSON.parse(localStorage.getItem(Ch)??"{}"));const t=Number(localStorage.getItem(Ph));xr.includes(t)&&(i.tilt=t)}catch{}}const gi=5e3,f0=9.81,rn={Spray:0,Mist:1,Foam:2,Boil:3};class Su{constructor(t){S(this,"points");S(this,"pos",new Float32Array(gi*3));S(this,"vel",new Float32Array(gi*3));S(this,"size",new Float32Array(gi));S(this,"alpha",new Float32Array(gi));S(this,"size0",new Float32Array(gi));S(this,"life",new Float32Array(gi));S(this,"maxLife",new Float32Array(gi));S(this,"kind",new Uint8Array(gi));S(this,"next",0);S(this,"material");S(this,"surface");S(this,"budget",0);S(this,"left",new A);S(this,"tmp",new A);this.surface=t;const e=new Le;e.setAttribute("position",new Je(this.pos,3).setUsage(Sr)),e.setAttribute("aSize",new Je(this.size,1).setUsage(Sr)),e.setAttribute("aAlpha",new Je(this.alpha,1).setUsage(Sr)),this.material=new Qn({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:400}},vertexShader:`
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
      `}),this.points=new H_(e,this.material),this.points.frustumCulled=!1}resize(t,e,n){this.material.uniforms.uScale.value=t*n/(2*Math.tan(e*Math.PI/360))}clear(){this.alpha.fill(0),this.life.fill(0)}spawn(t,e,n,s,o,r,a,c,l){if(this.budget<=0)return;this.budget--;const u=this.next;this.next=(this.next+1)%gi;const h=u*3;this.pos[h]=e,this.pos[h+1]=n,this.pos[h+2]=s,this.vel[h]=o,this.vel[h+1]=r,this.vel[h+2]=a,this.kind[u]=t,this.size0[u]=c,this.size[u]=c,this.life[u]=l,this.maxLife[u]=l,this.alpha[u]=1}count(t){if(!(t>0))return 0;const e=Math.floor(Math.min(t,this.budget));return e+(e<this.budget&&Math.random()<t-e?1:0)}update(t,e,n){this.emit(t,e,n,600),this.step(t,e)}emit(t,e,n,s){this.budget=s,this.emitHull(t,e,n),this.emitProp(t,e,n)}emitHull(t,e,n){const s=n.hullFx,o=Nr.FX_STRIDE;this.left.set(1,0,0).applyQuaternion(n.quat);const r=this.left.x,a=this.left.z,c=Math.hypot(r,a)||1,l=n.vel;for(let u=0;u<n.hull.length;u++){const h=n.hull[u],d=u*o,f=s[d],p=s[d+1],x=s[d+2],g=n.impact[u];g>0&&(n.impact[u]=0,g>.7&&this.splash(f,x,e,g,h.area,l));const m=s[d+11];if(m<=0)continue;const v=s[d+3],y=s[d+4],_=s[d+5],L=s[d+10],T=s[d+6],M=s[d+7],P=s[d+8],b=v-L*T,w=y-L*M,N=_-L*P,O=Math.hypot(b,w,N),U=Math.max(0,L),V=this.surface.height(f,x,e);if(h.side!==0){const B=r/c*h.side,X=a/c*h.side,Q=Math.max(0,v*B+_*X);if(O<2.5&&Q<.8&&U<.6)continue;const j=1+1.5*(1-m),pt=h.area*m*j*(.35*O+3*Q+5*U),vt=.16*O+1.1*Q+.6*U,Mt=.09*O+.9*Q+1.4*U,lt=this.count(pt*t*90),ht=l.x*.04,Y=l.z*.04;for(let I=0;I<lt;I++){const z=.7+Math.random()*.6,k=(Math.random()-.5)*.2;this.spawn(rn.Spray,f+B*.04+this.left.z*k,Math.max(p,V)+.02,x+X*.04-this.left.x*k,B*vt*z+ht+(Math.random()-.5)*.3*vt,Mt*(.6+Math.random()*.8),X*vt*z+Y+(Math.random()-.5)*.3*vt,.035+Math.random()*.07,1.5),Math.random()<.2&&this.spawn(rn.Mist,f+B*.1,Math.max(p,V)+.05,x+X*.1,B*vt*.6,Mt*.5,X*vt*.6,.35+Math.random()*.4,.9+Math.random()*.6)}}else if(U>.8){const B=this.count(h.area*U*U*t*40);for(let X=0;X<B;X++){const Q=Math.random()*Math.PI*2,j=U*(.3+Math.random()*.5);this.spawn(rn.Spray,f,Math.max(p,V)+.02,x,Math.cos(Q)*j+l.x*.1,U*(.8+Math.random()*.8),Math.sin(Q)*j+l.z*.1,.05+Math.random()*.08,1.5)}}}}splash(t,e,n,s,o,r){const a=this.surface.height(t,e,n),c=Math.min(70,Math.round(s*s*o*45));for(let u=0;u<c;u++){const h=Math.random()*Math.PI*2,d=s*(.35+Math.random()*.75);this.spawn(rn.Spray,t+Math.cos(h)*.15,a+.03,e+Math.sin(h)*.15,Math.cos(h)*d+r.x*.15,s*(.5+Math.random()*.8),Math.sin(h)*d+r.z*.15,.05+Math.random()*.1,1.5)}const l=Math.min(8,Math.round(s*o*6));for(let u=0;u<l;u++){const h=Math.random()*Math.PI*2;this.spawn(rn.Mist,t,a+.1,e,Math.cos(h)*s*.4+r.x*.1,s*.35,Math.sin(h)*s*.4+r.z*.1,.5+Math.random()*.5,.8+Math.random()*.5)}for(let u=0;u<4;u++){const h=Math.random()*Math.PI*2;this.spawn(rn.Foam,t+Math.cos(h)*.3,a,e+Math.sin(h)*.3,Math.cos(h)*.4,0,Math.sin(h)*.4,.35+Math.random()*.3,2+Math.random())}}emitProp(t,e,n){const s=n.propState,o=n.engineOmega/(2*Math.PI);if(o<5)return;const r=n.prop.diameter,a=n.propPos,c=n.propAxis,l=n.vel,u=this.surface.height(a.x,a.z,e),h=Math.PI*o*r,d=Math.max(0,Math.min(1,(.9-s.tipRatio)/.9)),f=n.propJet,p=d*d*o*4*(1+2*s.vent)*Math.min(1,n.throttle+.2),x=this.count(p*t);for(let v=0;v<x;v++){const y=h*.12*d*(.6+Math.random()*.7),_=(Math.random()-.5)*h*.08*d;this.spawn(rn.Spray,a.x-c.x*.2,u+.03,a.z-c.z*.2,l.x*.15-c.x*f+c.z*_,y,l.z*.15-c.z*f-c.x*_,.06+Math.random()*.1,2),Math.random()<.15&&this.spawn(rn.Mist,a.x-c.x*.4,u+.2,a.z-c.z*.4,l.x*.1,y*.5,l.z*.1,.5+Math.random()*.5,1+Math.random()*.5)}const g=s.cav*70+s.vent*140,m=this.count(g*t*Math.min(1,o/60));for(let v=0;v<m;v++){const y=.3+Math.random()*.6,_=(Math.random()-.5)*.35,L=a.x-c.x*y+c.z*_,T=a.z-c.z*y-c.x*_;this.spawn(rn.Boil,L,this.surface.height(L,T,e)+.02,T,-c.x*f*.4,0,-c.z*f*.4,.22+Math.random()*.25,.5+Math.random()*.6)}}step(t,e){const{pos:n,vel:s,life:o,maxLife:r,kind:a,alpha:c,size:l,size0:u}=this;for(let d=0;d<gi;d++){if(o[d]<=0)continue;o[d]-=t;const f=d*3,p=1-o[d]/r[d];if(o[d]<=0){c[d]=0;continue}const x=a[d];if(x===rn.Spray||x===rn.Mist){const g=x===rn.Spray?.5:2.5,m=Math.exp(-g*t);if(s[f]*=m,s[f+2]*=m,s[f+1]=s[f+1]*m-(x===rn.Spray?f0:f0*.15)*t,n[f]+=s[f]*t,n[f+1]+=s[f+1]*t,n[f+2]+=s[f+2]*t,x===rn.Spray){if(c[d]=.85*Math.min(1,o[d]/.2),s[f+1]<0){const v=this.surface.height(n[f],n[f+2],e);if(n[f+1]<v){o[d]=0,c[d]=0,Math.random()<.18&&this.spawnFoam(n[f],v,n[f+2]);continue}}}else c[d]=.22*(1-p),l[d]=u[d]*(1+p*1.5)}else{const g=Math.exp(-2*t);s[f]*=g,s[f+2]*=g,n[f]+=s[f]*t,n[f+2]+=s[f+2]*t,n[f+1]=this.surface.height(n[f],n[f+2],e)+.02,l[d]=u[d]*(1+p*(x===rn.Boil?1.2:.8)),c[d]=(x===rn.Boil?.9:.55)*(1-p)**1.3}}const h=this.points.geometry;h.attributes.position.needsUpdate=!0,h.attributes.aSize.needsUpdate=!0,h.attributes.aAlpha.needsUpdate=!0}spawnFoam(t,e,n){this.budget++,this.spawn(rn.Foam,t,e+.02,n,0,0,0,.2+Math.random()*.25,1.5+Math.random()*1.5)}}const lp=32,ba=48,Ea=32,ja=4,p0=.1;function KM(i,t,e,n,s){const o=new Float32Array(ba),r=new Float32Array(Ea);let a=0;for(let l=0;l<ba;l++){let u=0;for(let h=0;h<lp;h++)u+=i[a++]*t[h];o[l]=u}for(let l=0;l<ba;l++)o[l]=Math.tanh(o[l]+i[a++]);for(let l=0;l<Ea;l++){let u=0;for(let h=0;h<ba;h++)u+=i[a++]*o[h];r[l]=u}for(let l=0;l<Ea;l++)r[l]=Math.tanh(r[l]+i[a++]);const c=new Array(ja);for(let l=0;l<ja;l++){let u=0;for(let h=0;h<Ea;h++)u+=i[a++]*r[h];c[l]=u}for(let l=0;l<ja;l++){const u=c[l]+i[a++];s&&(s[l]=u),c[l]=Math.tanh(u)}return c}const JM=2.5;function QM(i){let t=0;for(let e=0;e<ja;e++){const n=Math.abs(i[e])-JM;n>0&&(t+=n*n)}return t}function ty(i){return{steer:i[0],throttle:.5+.5*i[1],leanX:i[2],leanZ:i[3]}}const ey=26,Ta=24,pl=9,ny=["逃げ","差し","まくり","まくり差し"];function iy(i){const t=[i.mark,i.turn/6,i.lat/30,i.speed/25,i.toMark/60,i.rank/5],e=[...i.rivals].sort((n,s)=>n.dLat-s.dLat).slice(0,5);for(let n=0;n<5;n++){const s=e[n];s?t.push(s.ahead/25,s.dLat/20,s.dSpeed/10,1):t.push(0,0,0,0)}return t}function sy(i,t){let e=0;const n=new Array(Ta);for(let o=0;o<Ta;o++){let r=0;for(let a=0;a<ey;a++)r+=i[e++]*t[a];n[o]=r}for(let o=0;o<Ta;o++)n[o]=Math.tanh(n[o]+i[e++]);const s=new Array(pl);for(let o=0;o<pl;o++){let r=0;for(let a=0;a<Ta;a++)r+=i[e++]*n[a];s[o]=r}for(let o=0;o<pl;o++)s[o]+=i[e++];return s}const Aa=i=>1/(1+Math.exp(-i));function oy(i,t){const e=sy(i,iy(t));let n=0;for(let s=1;s<4;s++)e[s]>e[n]&&(n=s);return{tactic:ny[n],R:12+12*Aa(e[4]),clear:1.8+5*Aa(e[5]),dv:16*Math.tanh(e[6]),brake:.15+.6*Aa(e[7]),wait:2*Aa(e[8]-2)}}const Fr={t:[-2,-1.7,-1.5,-1.2,-1,-.7,-.5,-.2,0,.3,.5,.8,1,1.3,1.5,1.8,2,2.3,2.5,2.8,3,3.3,3.5,3.8,4,4.3,4.5,4.8,5,5.3,5.5,5.8,6,6.3,6.5,6.8,7,7.3,7.5,7.8,8,8.3,8.5,8.8,9,9.3,9.5,9.8,10,10.3,10.5,10.8,11],x:[-82.5,-77.2,-71.9,-66.4,-61,-55.5,-49.8,-44.6,-39.2,-34,-29.1,-24.6,-20.3,-16.4,-12.8,-9.5,-6.8,-4.1,-2,0,1.7,3,3.7,4.3,4.8,4.6,4,3,1.8,.2,-1.5,-3.7,-5.7,-7.9,-10.7,-13.3,-16.1,-19.6,-22.9,-26.7,-30.7,-34.9,-39.6,-44.6,-49.6,-54.9,-60,-65.1,-70.4,-75.6,-80.6,-86,-91.7],y:[-35.4,-35.2,-35.1,-35,-34.8,-34.5,-34,-33.4,-32.3,-31.4,-30.3,-29.2,-28,-27,-26,-24.8,-23.3,-21.4,-19.8,-17.6,-15.4,-13.2,-10.7,-8.1,-5.5,-2.6,.7,3.7,6.3,8.7,11.1,13.7,16.3,18.5,20.7,23,25.1,27.2,28.7,30,31.1,32,32.7,33.5,34.1,35.3,35.8,36.2,36.3,36.5,36.7,37,37.3],th:[0,.5,.8,1.2,1,1.5,1.5,2.5,3.4,5.4,7.9,9.7,12,13.6,17.5,20.9,25.5,30.1,36.1,42.6,50.6,59,68.5,77.5,87.5,96.6,103.7,109.3,113.9,118.6,123.6,126.6,130.4,135.1,139,143.6,148.1,153,156.7,159.8,161.6,163.5,164.7,166,166.8,168.2,168.9,169.7,170.5,170.7,172,172.2,172.2]},Gi=32,hp=27,ry=sn[0],ay=sn[1],Lh=ry.z-hp,ks=ay.z+hp,wn=Lh-ks,Ei=Math.PI*Gi,lc=sn[0].x,Or=lc-Gi,up=lc+Gi,Si=2*wn+2*Ei,Ih=Gn,Vo=3,dp=Ih-ks;function Rs(i,t){if(i<0)return t.x=Or,t.z=ks+i,t.ox=-1,t.oz=0,t.tx=0,t.tz=1,t.turn=!1,t;let e=i%Si;if(e<wn)return t.x=Or,t.z=ks+e,t.ox=-1,t.oz=0,t.tx=0,t.tz=1,t.turn=!1,t;if(e-=wn,e<Ei){const s=e/Gi;return t.ox=-Math.cos(s),t.oz=Math.sin(s),t.x=lc+Gi*t.ox,t.z=Lh+Gi*t.oz,t.tx=Math.sin(s),t.tz=Math.cos(s),t.turn=!0,t}if(e-=Ei,e<wn)return t.x=up,t.z=Lh-e,t.ox=1,t.oz=0,t.tx=0,t.tz=-1,t.turn=!1,t;e-=wn;const n=e/Gi;return t.ox=Math.cos(n),t.oz=-Math.sin(n),t.x=lc+Gi*t.ox,t.z=ks+Gi*t.oz,t.tx=-Math.sin(n),t.tz=-Math.cos(n),t.turn=!0,t}function cy(i,t,e){const n={x:0,z:0,ox:0,oz:0,tx:0,tz:0,turn:!1};let s=e,o=1/0;for(let r=-2;r<=40;r+=.5){Rs(e+r,n);const a=(n.x-i)**2+(n.z-t)**2;a<o&&(o=a,s=e+r)}return s}function ly(i){if(i<0)return-i+wn;const t=i%Si,e=[wn,wn+Ei+wn,Si+wn];for(const n of e)if(n>t)return n-t;return 0}const ml=4.5,hy={逃げ:{R:17,clear:2.2,dv:0,brake:.3,hold:1,aim:3,exit:0},差し:{R:15,clear:3.2,dv:-4,brake:.2,hold:1,aim:ml,exit:-6},まくり:{R:22,clear:5.5,dv:4,brake:.5,hold:1,aim:ml,exit:6},まくり差し:{R:15,clear:3.2,dv:0,brake:.3,hold:1,aim:ml,exit:-3}},m0=1.8,uy=4,dy=-19.3,g0=-10,gl=37,fy=6,py=1.2,my=2,je=()=>globalThis.__raceTune??{},Dh=()=>je().lane??uy,Mr=i=>(je().laneBase??dy)+(i-1)*Dh(),Ra=i=>Or+1-Mr(i),gy={R:19,exit:3},xy={逃げ:-3.5,差し:1,まくり:-2.5,まくり差し:-.5},vy=9.5,_y=14,My=45*Math.PI/180,x0=3.5,We={x:0,z:0,ox:0,oz:0,tx:0,tz:0,turn:!1},v0=Fr.t.length,_0=Fr.t.findIndex(i=>i>=0);function Ca(i,t,e){const n=Fr.y[t];return e.x=Fr.x[t]+i.rxs,e.y=n<0?n*i.rys:n*i.rye,e}function yy(i,t){const s=a=>28*a-(28-t)*5.5*(1-Math.exp(-a/5.5));let o=0,r=30;for(let a=0;a<30;a++){const c=(o+r)/2;s(c)<i?o=c:r=c}return r}function M0(i){return Nh(i)===1?up+Or:0}function Nh(i){return i<0||i%Si<wn+Ei?0:1}class Sy{constructor(t,e){S(this,"lane");S(this,"course");S(this,"skill");S(this,"s",0);S(this,"laps",0);S(this,"finished",!1);S(this,"finishTime",0);S(this,"flying",!1);S(this,"capsized",!1);S(this,"tactics",[]);S(this,"tactic",null);S(this,"lat",0);S(this,"policy",null);S(this,"control",null);S(this,"ctrlPre",[0,0,0,0]);S(this,"ctrlSat",0);S(this,"ctrlN",0);S(this,"ctrlT",0);S(this,"rounded",[!0,!0]);S(this,"ctrlHold",{steer:0,throttle:1,leanX:0,leanZ:0});S(this,"apexAt",null);S(this,"apexInside",[]);S(this,"dMin",1/0);S(this,"dMinTime",0);S(this,"labelPending",!1);S(this,"lastPlanS",-1/0);S(this,"bias",0);S(this,"upsideTime",0);S(this,"offset");S(this,"turnTime",0);S(this,"steerTime",0);S(this,"leanX",0);S(this,"plan",null);S(this,"armed",!0);S(this,"launched",!1);S(this,"input",{steer:0,throttle:0,leanX:0,leanZ:0});this.lane=t,this.course=t,this.skill=e,this.offset=Mr(t)}startPos(){return{x:Or+1-Mr(this.lane),z:Ih-85}}beginRace(t,e,n){this.course=n,this.s=e-ks,Rs(this.s,We),this.offset=(t-We.x)*We.ox+(e-We.z)*We.oz,this.launched=!0}get progress(){return this.s-dp}get turnPlan(){return this.plan}reset(){const t=this.startPos();this.s=t.z-ks,this.laps=0,this.finished=!1,this.flying=!1,this.capsized=!1,this.upsideTime=0,this.turnTime=this.steerTime=this.leanX=0,this.course=this.lane,this.offset=Mr(this.course),this.plan=null,this.armed=!0,this.launched=!1,this.tactics=[],this.tactic=null,this.apexAt=null,this.labelPending=!1,this.lastPlanS=-1/0,this.dMin=1/0}makePlan(t,e,n,s,o){const r=sn[t],a=0,c=t===0?1:-1,l=c,u=0,h=(lt,ht)=>-((lt-r.x)*l+(ht-r.z)*u),d=h(e.x,e.z),f=[];for(const lt of o){if(lt.cpu===this||lt.cpu.capsized||lt.cpu.finished)continue;const ht=lt.ph.comW,Y=(ht.x-e.x)*a+(ht.z-e.z)*c;if(Math.abs(Y)>25)continue;const I=h(ht.x,ht.z);I<d-1&&f.push({lat:I,ahead:Y})}const p=this.skill;let x;if(f.length===0)x="逃げ";else{const lt=Math.max(...f.map(I=>I.ahead)),ht=f.reduce((I,z)=>z.lat>I.lat?z:I),Y=7-p.aggression*3;lt<-Y-3?x="逃げ":lt<-Y?x="まくり":f.length>=2&&ht.ahead<-Y*.6?x="まくり差し":x="差し",this.tactics.length===0&&t===0&&(this.course===3||this.course===5)&&x==="差し"&&lt<4&&(x=lt<-Y*.5?"まくり":"まくり差し")}globalThis.__cpuDebug&&console.log(`[${this.lane}] mark${t} lat${d.toFixed(1)} inside:${f.map(lt=>lt.lat.toFixed(1)+"/"+lt.ahead.toFixed(1)).join(" ")} → ${x}`);const g={...hy[x]};if(x==="逃げ"&&o.some(ht=>{if(ht.cpu===this||ht.cpu.capsized||ht.cpu.finished)return!1;const Y=ht.ph.comW,I=(Y.x-e.x)*a+(Y.z-e.z)*c,z=h(Y.x,Y.z)-d;return I>-1&&I<10&&z>0&&z<12})&&Object.assign(g,gy),x==="逃げ"){const lt=je();lt.nigeDv!==void 0&&(g.dv=lt.nigeDv),lt.nigeAim!==void 0&&(g.aim=lt.nigeAim),lt.nigeBrake!==void 0&&(g.brake=lt.nigeBrake),lt.nigeR!==void 0&&(g.R=lt.nigeR)}const m=je().aimScale??(Mn?0:1);g.aim*=m;let v=null;if(this.policy){const lt=[];let ht=0;for(const Y of o){if(Y.cpu===this||Y.cpu.capsized||Y.cpu.finished)continue;const I=Y.ph.comW;Y.cpu.s>this.s&&ht++,lt.push({ahead:(I.x-e.x)*a+(I.z-e.z)*c,dLat:h(I.x,I.z)-d,dSpeed:Y.ph.speed()-n})}v=oy(this.policy,{mark:t,turn:this.tactics.length,lat:d,speed:n,toMark:(r.x-e.x)*a+(r.z-e.z)*c,rank:ht,rivals:lt}),x=v.tactic,Object.assign(g,{R:v.R,clear:v.clear,dv:v.dv,brake:v.brake,aim:0})}p.seed=p.seed*16807%2147483647;const y=!v&&p.seed%1e3/1e3<p.slip?2.5+(p.seed>>10)%1e3/250:0;let _=v?v.clear:Math.max(2,g.clear-(p.tight-.5)*1.6)+y+(Mn?je().v2Clear??1:0);const L=(r.x-e.x)*a+(r.z-e.z)*c,T=s+Math.max(0,L)/Math.max(8,n),M=o.filter(lt=>{var ht;return lt.cpu!==this&&((ht=lt.cpu.turnPlan)==null?void 0:ht.mark)===t});let P=v?v.wait:0;if(!v&&x==="差し"){let lt=null,ht=-1/0;for(const Y of M){const I=h(Y.ph.comW.x,Y.ph.comW.z);I<d&&I>ht&&(lt=Y,ht=I)}lt&&(P=Math.max(0,lt.cpu.turnPlan.apexTime+1.6-T))}if(v){const lt=[];for(const I of o){if(I.cpu===this||I.cpu.capsized||I.cpu.finished)continue;const z=I.ph.comW,k=(z.x-e.x)*a+(z.z-e.z)*c;if(Math.abs(k)>25||h(z.x,z.z)>=d-1)continue;const Z=I.cpu.turnPlan,rt=(r.x-z.x)*a+(r.z-z.z)*c;lt.push(Z&&Z.mark===t?Z.apexTime:s+Math.max(0,rt)/Math.max(8,I.ph.speed()))}const ht=T+P;this.apexInside=o.filter(I=>{if(I.cpu===this||I.cpu.capsized||I.cpu.finished)return!1;const z=I.ph.comW;return Math.abs((z.x-e.x)*a+(z.z-e.z)*c)<=25&&h(z.x,z.z)<d-1}).map(I=>I.cpu),this.labelPending=!0;const Y=lt.filter(I=>I<ht-.3).length;x=lt.length===0?"逃げ":Y===0?Math.max(...f.map(I=>I.ahead))<-10?"逃げ":"まくり":Y===lt.length?"差し":"まくり差し",globalThis.__cpuDebug&&console.log(`[${this.lane}] ${t+1}M ${x} R${v.R.toFixed(1)} 間隔${v.clear.toFixed(1)} 速さ${v.dv.toFixed(1)} レバー${v.brake.toFixed(2)} 待つ${v.wait.toFixed(2)} 頂点${(ht-s).toFixed(2)}s 内の艇${lt.map(I=>(I-s).toFixed(2)).join(",")}`)}if(!v)for(const lt of M){const ht=lt.cpu.turnPlan;Math.abs(T+P-ht.apexTime)<.9&&h(lt.ph.comW.x,lt.ph.comW.z)<d+1&&(_=Math.max(_,ht.clear+2.8))}const b=Math.max(.5,d);let w=_-g.aim;const N=Mn&&!v&&this.tactics.length>0;let O=g.R,U=0;for(let lt=0;lt<2;lt++){O=N?Math.max(12,(b+gl+g.exit)/2,(b+w)/2+.5):Math.max(g.R,(b+w)/2+.5),U=Math.acos(Math.max(-1,Math.min(1,(O-b)/(O-w))));const ht=g.aim-(g.aim-1.5)*Math.max(0,Math.min(1,(U-Math.PI/3)/(Math.PI/3)));w=_-ht}const V=-Math.cos(U)*l+Math.sin(U)*a,B=-Math.cos(U)*u+Math.sin(U)*c,X=N?60+(p.entrySpeed-49)+g.dv-Math.min(10,P*12):Math.sqrt((je().turnAcc??(Mn?_y:vy))*O)*3.6+(v?0:p.entrySpeed-49)+g.dv-Math.min(10,P*12);this.tactics.push(x),this.tactic=v?null:x;const Q=v?v.brake:g.brake+(.8-g.brake)*p.grip*.6,j=x==="逃げ"?(je().nigeEarly??my)*m:0,pt=Math.max(.15,b/32),vt=Math.max(.3,Math.min(gl,Math.max(je().exitMin??25,b+gl-32))+g.exit)/37,Mt=xy[x]+Math.min(4,_-3.2)+Math.min(4,P*3);return{mark:t,tactic:x,cx:r.x-(O-w)*V-j*a,cz:r.z-(O-w)*B-j*c,R:O,dx:a,dz:c,lx:l,lz:u,entry:X,clear:_,apexTime:T+P,brake:Q,hold:g.hold,real:N,rys:pt,rye:vt,rxs:Mt,ri:0}}planTarget(t,e,n,s,o){if(t.real)return this.realTarget(t,e,n,s*(je().realLook??1),o);const r=Math.max(6,t.R+this.bias),a=e-t.cx,c=n-t.cz,l=a*t.dx+c*t.dz,u=-(a*t.lx+c*t.lz);let h,d;l<0&&u>0?(h=l,d=l/r):(d=Math.atan2(l,u),d<-Math.PI/2&&(d+=2*Math.PI),h=d*r);const f=h+s;if(f<=0)o.x=t.cx-r*t.lx+f*t.dx,o.z=t.cz-r*t.lz+f*t.dz;else if(f<=Math.PI*r){const p=f/r;o.x=t.cx+r*(-Math.cos(p)*t.lx+Math.sin(p)*t.dx),o.z=t.cz+r*(-Math.cos(p)*t.lz+Math.sin(p)*t.dz)}else{const p=f-Math.PI*r;o.x=t.cx+r*t.lx-p*t.dx,o.z=t.cz+r*t.lz-p*t.dz}return d}realTarget(t,e,n,s,o){const r=sn[t.mark],a=(e-r.x)*t.dx+(n-r.z)*t.dz,c=(e-r.x)*t.lx+(n-r.z)*t.lz,l={...t,rys:t.rys+this.bias/32,rye:t.rye+this.bias/37},u={x:0,y:0},h={x:0,y:0};let d=t.ri,f=1/0;for(let v=t.ri;v<Math.min(v0,t.ri+12);v++){Ca(l,v,u);const y=(u.x-a)**2+(u.y-c)**2;y<f&&(f=y,d=v)}t.ri=d;let p=s,x=d;Ca(l,x,u);let g=u.x,m=u.y;for(;p>0&&x<v0-1;){Ca(l,x+1,h);const v=Math.hypot(h.x-g,h.y-m);v>=p?(g+=(h.x-g)*p/v,m+=(h.y-m)*p/v,p=0):(p-=v,g=h.x,m=h.y,x++)}return p>0&&(g-=p),o.x=r.x+g*t.dx+m*t.lx,o.z=r.z+g*t.dz+m*t.lz,d<_0?(Ca(l,_0,h),-Math.hypot(h.x-a,h.y-c)/30):Fr.th[d]*Math.PI/180}squeezed(t,e,n){for(const s of n){if(s.cpu===this||s.cpu.capsized)continue;const o=s.ph.comW.x-t.x,r=s.ph.comW.z-t.z,a=o*e.x+r*e.z,c=o*e.z-r*e.x;if(Math.abs(a)<4&&c>.5&&c<3.2)return!0}return!1}controlObs(t,e){const n=new Array(lp).fill(0),s=t.forward(new A),o=s.x,r=s.z,a=Math.hypot(o,r)||1,c=o/a,l=r/a,u=(M,P)=>[M*c+P*l,M*l-P*c],h=t.comW,[d,f]=u(t.vel.x,t.vel.z),p=t.attitude();n[0]=d/25,n[1]=f/10,n[2]=t.angVel.y/2,n[3]=p.heel/30,n[4]=p.trim/10,n[5]=t.rpm/6600,n[6]=t.throttle,n[7]=t.steerAngle/.5,n[8]=(t.riderB.x-Vn.x)/.55,n[9]=(t.riderB.z-Vn.z)/.3;const x={x:0,z:0,ox:0,oz:0,tx:0,tz:0,turn:!1};let g=10;for(const M of[10,25,50]){Rs(this.s+M,x);const[P,b]=u(x.x-h.x,x.z-h.z);n[g++]=P/50,n[g++]=b/50}Rs(this.s+25,x);const[m,v]=u(x.tx,x.tz);n[16]=m,n[17]=v;const y=sn[Nh(this.s)],[_,L]=u(y.x-h.x,y.z-h.z);n[18]=_/100,n[19]=L/100,n[20]=Math.hypot(_,L)/100,n[21]=this.lat/30;const T=e.filter(M=>M.cpu!==this&&!M.cpu.capsized).map(M=>({o:M,d:Math.hypot(M.ph.comW.x-h.x,M.ph.comW.z-h.z)})).filter(M=>M.d<40).sort((M,P)=>M.d-P.d).slice(0,2);g=22;for(let M=0;M<2;M++){const P=T[M];if(P){const[b,w]=u(P.o.ph.comW.x-h.x,P.o.ph.comW.z-h.z),[N]=u(P.o.ph.vel.x-t.vel.x,P.o.ph.vel.z-t.vel.z);n[g++]=b/30,n[g++]=w/30,n[g++]=N/10,n[g++]=1}else g+=4}return n[30]=this.s%Si/Si,n[31]=1,n}update(t,e,n,s=[]){var Y;const o=this.skill,r=this.input,a=1-2*(e.quat.x*e.quat.x+e.quat.z*e.quat.z);if(this.upsideTime=a<.15?this.upsideTime+t:0,this.upsideTime>1&&(this.capsized=!0),this.capsized){r.steer=r.throttle=r.leanX=r.leanZ=0;return}const c=e.comW;if(this.s=cy(c.x,c.z,this.s),this.s>=0){const I=this.s%Si,z=this.s-I;for(const[k,Z]of[[0,wn],[1,2*wn+Ei]]){const rt=sn[k],ct=k===0?c.z>=rt.z:c.z<=rt.z;I>=Z-30&&I<Z&&(this.rounded[k]=!1),ct&&(this.rounded[k]=!0);const dt=z+Z+Ei/2;I>=Z+Ei/2&&I<Z+Ei+wn*.5&&!this.rounded[k]&&(this.s=Math.min(this.s,dt))}}Rs(this.s,We),this.lat=(c.x-We.x)*We.ox+(c.z-We.z)*We.oz;const l=e.speed()*3.6;if(n<0&&this.progress>0&&(this.flying=!0),this.laps=Math.max(0,Math.floor(this.progress/Si)),!this.finished&&this.progress>=Vo*Si&&(this.finished=!0,this.finishTime=n),!this.launched&&n<0){r.throttle=.12;const I=Ih-c.z;-n+o.st<=yy(I,e.speed())&&(this.launched=!0)}n>=0&&(this.launched=!0);const u=ly(this.s);if(u>60&&this.s>this.lastPlanS+150&&(this.armed=!0),!this.plan&&this.armed&&u<50&&n>0&&!this.finished&&(this.dMin=1/0,this.labelPending=!1,this.plan=this.makePlan(Nh(this.s),c,e.speed(),n,s),this.lastPlanS=this.s,this.armed=!1,this.turnTime=0),this.plan){const I=sn[this.plan.mark],z=Math.hypot(c.x-I.x,c.z-I.z);if(z<this.dMin)this.dMin=z,this.dMinTime=n;else if(z>this.dMin+1&&((!this.apexAt||this.apexAt.time!==this.dMinTime)&&(this.apexAt={mark:this.plan.mark,time:this.dMinTime}),this.labelPending)){this.labelPending=!1;const k=this.apexInside.filter(ct=>!ct.capsized),Z=k.filter(ct=>ct.apexAt&&ct.apexAt.mark===this.plan.mark&&Math.abs(ct.apexAt.time-this.dMinTime)<8&&ct.apexAt.time<this.dMinTime-.2).length,rt=k.length===0?"逃げ":Z===0?"まくり":Z===k.length?"差し":"まくり差し";this.tactic=rt,this.tactics[this.tactics.length-1]=rt}}const h=6+e.speed()*.35,d={x:0,z:0};let f=-1;const p=this.plan;if(p){f=this.planTarget(p,c.x,c.z,h,d);const I=Math.abs(Math.atan2(-(e.vel.x*p.lx+e.vel.z*p.lz),e.vel.x*p.dx+e.vel.z*p.dz));(f>165*Math.PI/180||e.speed()>3&&I>165*Math.PI/180)&&(Rs(this.s,We),this.offset=Math.max(g0-M0(this.s),(c.x-We.x)*We.ox+(c.z-We.z)*We.oz),this.plan=null,this.tactic=null)}if(!this.plan){let I=this.tactics.length===0?Mr(this.course):this.offset;const z=M0(this.s);if(n>3){let k=null,Z=35;for(const rt of s){if(rt.cpu===this||rt.cpu.capsized)continue;const ct=rt.cpu.s-this.s;ct>2&&ct<Z&&Math.abs(rt.cpu.lat-this.lat)<2.5&&(k=rt,Z=ct)}if(!k&&u<300)I=-z;else if(k){const rt=k.cpu.lat-Dh(),ct=k.cpu.lat+Dh(),dt=ot=>s.some(wt=>wt.cpu!==this&&!wt.cpu.capsized&&Math.abs(wt.cpu.s-this.s)<10&&Math.abs(wt.cpu.lat-ot)<3);I=rt>g0-z&&!dt(rt)?rt:dt(ct)?this.lat:ct}}for(const k of s){const Z=k.cpu.s-this.s;k.cpu===this||k.cpu.capsized||Z>8||Z<-4||(I<this.lat&&k.cpu.lat<this.lat&&k.cpu.lat>I-3.5&&(I=Math.max(I,k.cpu.lat+3.5)),I>this.lat&&k.cpu.lat>this.lat&&k.cpu.lat<I+3.5&&(I=Math.min(I,k.cpu.lat-3.5)))}this.offset+=(I-this.offset)*Math.min(1,t*.3),Rs(this.s+h,We),d.x=We.x+We.ox*this.offset,d.z=We.z+We.oz*this.offset}const x=!!this.plan&&f>=0,g=this.plan&&f<0?-f*(this.plan.real?30:this.plan.R):0,m=e.forward(new A);let v=0,y=0,_=!1;if(this.plan){const I=[];for(const k of s){if(k.cpu===this||k.cpu.capsized)continue;const Z=k.ph.comW.x-c.x,rt=k.ph.comW.z-c.z,ct=Z*m.x+rt*m.z,dt=Z*m.z-rt*m.x;Math.abs(ct)<14&&Math.abs(dt)<6&&I.push({o:k,a:ct,l:dt})}const z=!I.some(k=>k.l>.5&&k.l<4&&Math.abs(k.a)<6);for(const{o:k,a:Z,l:rt}of I){const ct=(e.vel.x-k.ph.vel.x)*m.x+(e.vel.z-k.ph.vel.z)*m.z;if(Z>1&&Z<12&&Math.abs(rt)<2.6&&(x?v=z?Math.min(v,-2):Math.max(v,2.8):y=Math.max(y,(ct>0?1:.3)*(1-Z/12))),x&&Math.abs(Z)<3.5&&rt>.5&&rt<4.5)if(this.plan.real)v=Math.max(v,3);else{const dt=Math.hypot(k.ph.comW.x-this.plan.cx,k.ph.comW.z-this.plan.cz);v=Math.max(v,dt+2.8-this.plan.R)}Z>.5&&Z<4&&rt<-.5&&rt>-4.5&&(_=!0)}}v=Math.max(-3,Math.min(6,v)),this.bias+=(v-this.bias)*Math.min(1,t*2),this.plan||(this.bias=0),this.plan&&!x&&this.squeezed(c,m,s)&&(d.x=c.x+this.plan.dx*h,d.z=c.z+this.plan.dz*h);for(const I of sn){const z=d.x-c.x,k=d.z-c.z,Z=Math.hypot(z,k),rt=I.x-c.x,ct=I.z-c.z,dt=Math.hypot(rt,ct),ot=Mn?je().v2ClearM??m0:m0;if(ot<=0||Z<.001||dt<.001||dt>Z+ot)continue;const wt=Math.atan2(z,k),F=Math.atan2(rt,ct);let St=wt-F;if(St>Math.PI&&(St-=2*Math.PI),St<-Math.PI&&(St+=2*Math.PI),Math.abs(St)>Math.PI/2)continue;const Gt=dt<=ot?Math.PI/2:Math.asin(ot/dt);if(St>-Gt){const Yt=F-Gt;d.x=c.x+Math.sin(Yt)*Z,d.z=c.z+Math.cos(Yt)*Z}}const L=e.forward(new A),T=d.x-c.x,M=d.z-c.z;let b=Math.atan2(L.x*M-L.z*T,L.x*T+L.z*M)/.4+.3*e.angVel.y;const w=e.vel,N=Mn&&e.speed()>5?Math.atan2(L.x*w.z-L.z*w.x,L.x*w.x+L.z*w.z):0,O=Mn&&e.speed()>5&&(!!this.plan||N>.26);if(O){const I=Math.atan2(w.x*M-w.z*T,w.x*T+w.z*M),z=!!((Y=this.plan)!=null&&Y.real);b=I/(je().slideGain??(z?.55:.4))+(je().slideDamp??(z?.4:.15))*e.angVel.y,b=Math.max(b,-((je().driftMax??My*(180/Math.PI))*(Math.PI/180)-N)/.2)}if(x&&this.plan&&!this.plan.real){const I=Math.hypot(c.x-this.plan.cx,c.z-this.plan.cz)-(this.plan.R+this.bias);(!Mn||I>0)&&(b-=.15*I)}if(b=Math.max(-1,Math.min(1,b)),Mn&&this.plan&&l>this.plan.entry+6){const I=Math.max(.3,1-(l-this.plan.entry-6)/12);b=Math.max(-I,Math.min(I,b))}let U=0,V=0;for(const I of s){if(I.ph===e||I.cpu.capsized)continue;const z=I.ph.comW.x-c.x,k=I.ph.comW.z-c.z,Z=Math.hypot(z,k);if(Z>8||Z<.1||(z*L.x+k*L.z)/Z<Math.cos(.6))continue;const ct=(L.x*k-L.z*z)/Z;U=Math.max(U,1-Z/8),V+=ct>0?-1:1}U>0&&!x&&(b=Math.max(-1,Math.min(1,b+Math.sign(V)*.35*U))),!this.plan&&!O&&(b=Math.max(-.45,Math.min(.45,b)));const B=b<0||O?e.attitude().heel:-e.attitude().heel,X=Mn?Math.max(0,Math.min(1,(B-5)/10)):Math.max(0,Math.min(1,(B-8)/12));X>0&&(b*=1-.7*X);const Q=Math.max(0,Math.min(1,(-B-(je().rescueInHeel??6))/10));Q>0&&(b*=1-.5*Q),Mn&&(this.plan||O)&&(b=Math.min(b,.4));const j=2.5*t;if(r.steer=this.launched?r.steer+Math.max(-j,Math.min(j,b-r.steer)):0,this.launched){x&&(this.turnTime+=t);let I=1;const z=e.speed(),k=p?p.entry/3.6:0,Z=p?Mn&&!this.policy?Math.min(p.brake,.3):p.brake:1,rt=p?x0*Math.max(.25,(1-Z)/.65):x0,ct=(z*z-k*k)/(2*rt)+o.brakeMargin;if(p!=null&&p.real){const dt=(je().liftThr??.2)+.25*o.grip;!x&&g<(je().liftLead??fy)*(l/80)+o.brakeMargin&&(I=dt);const ot=Math.atan2(-(w.x*p.lx+w.z*p.lz),w.x*p.dx+w.z*p.dz);x&&(I=Math.abs(ot)<(je().liftPsi??py)&&this.turnTime<4?dt:p.hold)}else p&&!x&&g<ct&&l>p.entry&&(I=Z),p&&x&&(I=je().fullTurn||this.turnTime>=o.regrip*(1-.5*o.grip)?p.hold:.55+.3*o.grip);p&&!x&&y>0&&(I=Math.min(I,1-.7*y)),p&&x&&_&&this.turnTime>o.regrip*.5&&(I=Math.max(I,.75)),U>0&&(I=Math.min(I,1-.6*U)),X>0&&!(Mn&&je().rescueKeep!==0)&&(I=Math.min(I,1-.6*X)),r.throttle=I}const pt=(Math.abs(b)>.45||O&&N>.26)&&l>25;this.steerTime=pt?this.steerTime+t:0;const vt=Math.max(0,Math.min(1,(l-25)/25));let Mt=pt&&this.steerTime>o.leanDelay?(O&&N>.26?-1:Math.sign(b))*vt:0;Mn&&this.plan&&(Mt=Math.min(0,Mt));const lt=t/Math.max(.05,Mt!==0?o.leanSpeed:.8);this.leanX+=Math.max(-lt,Math.min(lt,Mt-this.leanX)),Q>0&&(this.leanX*=1-Math.min(1,t*8*Q)),r.leanX=this.leanX,r.leanZ=!pt&&l<50&&this.launched?.4:0;const ht=globalThis.__ctrlRecord;if((this.control||ht)&&this.launched&&n>0&&!this.finished){if(this.ctrlT+=t,this.ctrlT>=p0){this.ctrlT-=p0;const I=this.controlObs(e,s);ht&&ht(this,I,r),this.control&&(Object.assign(this.ctrlHold,ty(KM(this.control,I,void 0,void 0,this.ctrlPre))),this.ctrlSat+=QM(this.ctrlPre),this.ctrlN++)}this.control&&(r.steer=this.ctrlHold.steer,r.throttle=this.ctrlHold.throttle,r.leanX=this.ctrlHold.leanX,r.leanZ=this.ctrlHold.leanZ)}this.finished&&(r.throttle=.25,r.leanX=this.leanX=0)}}function zh(i){let t=i;const e=()=>(t=t*16807%2147483647,t%1e4/1e4);return["白","黒","赤","青","黄","緑"].map(s=>({name:s,entrySpeed:46+e()*6,brakeMargin:-2+e()*6,leanDelay:.15+e()*.3,leanSpeed:.15+e()*.3,tight:e(),aggression:e(),regrip:.3+e()*.6,grip:e(),slip:.08+e()*.17,seed:1+Math.floor(e()*1e5),st:.05+e()*.15+(e()<.15?.1+e()*.15:0)}))}function fp(i,t){return t?i.tactics[0]??"逃げ":"抜き"}const y0=wn+Ei+40-dp,cs=ci.map(()=>new A),Pa=ci.map(()=>new A),Uh=new A;function wy(i,t){for(let a=0;a<ci.length;a++)i.toWorld(Uh.set(0,0,ci[a].z),cs[a]),t.toWorld(Uh.set(0,0,ci[a].z),Pa[a]);let e=-1/0,n=0,s=0,o=0,r=0;for(let a=0;a<cs.length;a++)for(let c=0;c<Pa.length;c++){const l=Pa[c].x-cs[a].x,u=Pa[c].z-cs[a].z,h=Math.hypot(l,u),d=ci[a].r+ci[c].r-h;d>e&&h>1e-4&&(e=d,n=a,s=c,o=l/h,r=u/h)}return{pen:e,ia:n,ib:s,nx:o,nz:r}}const by=.3,Ey=.15,Ss=new A,xi=new A,Ty=new A,Ay=new A,xl=new A,po=new A,La=new A;function Ry(i){for(let t=0;t<i.length;t++)for(let e=t+1;e<i.length;e++){const n=i[t],s=i[e];if((s.comW.x-n.comW.x)**2+(s.comW.z-n.comW.z)**2>16)continue;const{pen:o,ia:r,nx:a,nz:c}=wy(n,s);if(o<=0)continue;n.shift(-a*o/2,-c*o/2),s.shift(a*o/2,c*o/2),Ss.set(a,0,c),xi.copy(cs[r]).addScaledVector(Ss,ci[r].r-o/2),xi.y=(n.comW.y+s.comW.y)/2+Ey;const l=n.velocityAt(xi,Ty),u=s.velocityAt(xi,Ay);xl.subVectors(u,l).setY(0);const h=xl.dot(Ss);if(h<0){const d=-1.1*h/(n.impulseResponse(Ss,xi)+s.impulseResponse(Ss,xi));po.copy(xl).addScaledVector(Ss,-h);const f=po.length();if(La.copy(Ss).multiplyScalar(d),f>1e-4){po.multiplyScalar(1/f);const p=Math.min(f/(n.impulseResponse(po,xi)+s.impulseResponse(po,xi)),by*d);La.addScaledVector(po,-p)}s.applyImpulse(La,xi),n.applyImpulse(La.negate(),xi)}}}const Cy=.8;function pp(i,t){let e=0;return i.forEach((n,s)=>{for(const o of sn){if((n.comW.x-o.x)**2+(n.comW.z-o.z)**2>16)continue;let r=0,a=0,c=0;for(let u=0;u<ci.length;u++){n.toWorld(Uh.set(0,0,ci[u].z),cs[u]);const h=cs[u].x-o.x,d=cs[u].z-o.z,f=Math.hypot(h,d),p=ci[u].r+Cy-f;p>r&&f>1e-4&&(r=p,a=h/f,c=d/f)}if(r<=0)continue;e++,n.shift(a*r,c*r);const l=n.vel.x*a+n.vel.z*c;l<0&&(n.vel.x-=1.3*l*a,n.vel.z-=1.3*l*c),n.vel.x*=.97,n.vel.z*=.97}}),e}const vl=9.81,_l=1e3;class Fh{constructor(t={}){S(this,"n");S(this,"dx");S(this,"size");S(this,"dt");S(this,"depth");S(this,"originX",0);S(this,"originZ",0);S(this,"layer",null);S(this,"h");S(this,"q");S(this,"dhdt");S(this,"computeVelocity",!1);S(this,"ux");S(this,"uz");S(this,"modePhi");S(this,"dk",0);S(this,"velRe");S(this,"velIm");S(this,"p");S(this,"pImpact");S(this,"src");S(this,"pSmooth");S(this,"fhx");S(this,"fhz");S(this,"hasH",!1);S(this,"modeHF");S(this,"hRe");S(this,"hIm");S(this,"sRe");S(this,"sIm");S(this,"re");S(this,"im");S(this,"pre");S(this,"pim");S(this,"outRe");S(this,"outIm");S(this,"rowRe");S(this,"rowIm");S(this,"cosT");S(this,"sinT");S(this,"rev");S(this,"modeC");S(this,"modeS");S(this,"modeDamp");S(this,"sponge");const e=this.n=t.n??128;this.dx=t.dx??.5,this.size=e*this.dx,this.dt=t.dt??1/60,this.depth=t.depth??3;const n=e*e;this.h=new Float32Array(n),this.q=new Float32Array(n),this.dhdt=new Float32Array(n),this.ux=new Float32Array(n),this.uz=new Float32Array(n),this.modePhi=new Float32Array(n),this.velRe=new Float32Array(n),this.velIm=new Float32Array(n),this.p=new Float32Array(n),this.pImpact=new Float32Array(n),this.src=new Float32Array(n),this.pSmooth=new Float32Array(n),this.fhx=new Float32Array(n),this.fhz=new Float32Array(n),this.modeHF=new Float32Array(n),this.hRe=new Float32Array(n),this.hIm=new Float32Array(n),this.sRe=new Float32Array(n),this.sIm=new Float32Array(n),this.re=new Float32Array(n),this.im=new Float32Array(n),this.pre=new Float32Array(n),this.pim=new Float32Array(n),this.outRe=new Float32Array(n),this.outIm=new Float32Array(n),this.rowRe=new Float32Array(e),this.rowIm=new Float32Array(e),this.cosT=new Float32Array(e/2),this.sinT=new Float32Array(e/2);for(let c=0;c<e/2;c++)this.cosT[c]=Math.cos(2*Math.PI*c/e),this.sinT[c]=-Math.sin(2*Math.PI*c/e);const s=Math.log2(e);this.rev=new Uint32Array(e);for(let c=0;c<e;c++){let l=0;for(let u=0;u<s;u++)l|=(c>>u&1)<<s-1-u;this.rev[c]=l}this.modeC=new Float32Array(n),this.modeS=new Float32Array(n),this.modeDamp=new Float32Array(n);const o=this.dk=2*Math.PI/this.size,r=Math.PI/this.dx;for(let c=0;c<e;c++){const l=(c<e/2?c:c-e)*o;for(let u=0;u<e;u++){const h=(u<e/2?u:u-e)*o,d=Math.hypot(h,l),f=Math.sqrt(vl*d*Math.tanh(d*this.depth)),p=c*e+u;this.modeC[p]=Math.cos(f*this.dt),this.modeS[p]=Math.sin(f*this.dt);const x=d/r;this.modeDamp[p]=Math.exp(-(.03+2.5*x**4)*this.dt),this.modePhi[p]=d>0?f/(d*Math.tanh(d*this.depth)):0;const g=Math.min(Sn.depth,this.depth);this.modeHF[p]=d>0?(Math.sinh(d*this.depth)-Math.sinh(d*(this.depth-g)))/(d*g*Math.cosh(d*this.depth))*(d/Math.tanh(d*this.depth)):0}}this.sponge=new Float32Array(n);const a=Math.max(4,Math.round(e*.12));for(let c=0;c<e;c++)for(let l=0;l<e;l++){const u=Math.min(l,c,e-1-l,e-1-c),h=Math.max(0,1-u/a);this.sponge[c*e+l]=Math.exp(-6*h*h*this.dt)}}clearPressure(){this.p.fill(0),this.pImpact.fill(0),this.src.fill(0),this.hasH&&(this.fhx.fill(0),this.fhz.fill(0),this.hasH=!1)}addHForce(t,e,n,s){n===0&&s===0||(this.splat(this.fhx,t,e,n,0),this.splat(this.fhz,t,e,s,0),this.hasH=!0)}addForce(t,e,n,s){n>0&&this.splat(this.p,t,e,n,s)}addForceSigned(t,e,n,s){n!==0&&this.splat(this.p,t,e,n,s)}addImpactSigned(t,e,n,s){n!==0&&this.splat(this.pImpact,t,e,n,s)}splatTo(t,e,n,s,o){this.splat(t,e,n,s,o)}sampleArr(t,e,n){return this.sample(t,e,n)}inside(t,e){const n=(t-this.originX)/this.dx,s=(e-this.originZ)/this.dx,o=Math.max(4,Math.round(this.n*.12));return n>=o&&s>=o&&n<this.n-o&&s<this.n-o}addImpact(t,e,n,s){n>0&&this.splat(this.pImpact,t,e,n,s)}addSource(t,e,n,s){n!==0&&this.splat(this.src,t,e,n,s)}splat(t,e,n,s,o){const r=this.n,a=(e-this.originX)/this.dx,c=(n-this.originZ)/this.dx;if(o<=0){if(a<1||c<1||a>=r-2||c>=r-2)return;const m=a|0,v=c|0,y=a-m,_=c-v,L=s/(this.dx*this.dx),T=v*r+m;t[T]+=L*(1-y)*(1-_),t[T+1]+=L*y*(1-_),t[T+r]+=L*(1-y)*_,t[T+r+1]+=L*y*_;return}const l=Math.max(o/this.dx,.7),u=Math.ceil(l*2),h=Math.max(1,Math.floor(a-u)),d=Math.min(r-2,Math.ceil(a+u)),f=Math.max(1,Math.floor(c-u)),p=Math.min(r-2,Math.ceil(c+u));if(h>d||f>p)return;let x=0;for(let m=f;m<=p;m++)for(let v=h;v<=d;v++)x+=Math.exp(-((v-a)**2+(m-c)**2)/(2*l*l));if(x<=0)return;const g=s/(x*this.dx*this.dx);for(let m=f;m<=p;m++)for(let v=h;v<=d;v++)t[m*r+v]+=g*Math.exp(-((v-a)**2+(m-c)**2)/(2*l*l))}step(){const t=this.n,e=t*t,{re:n,im:s,pre:o,pim:r,outRe:a,outIm:c,h:l,q:u}=this;n.set(l),s.set(u),this.fft2(n,s,!1);const h=this.pImpact;for(let g=0;g<e;g++)o[g]=this.p[g]+h[g];r.fill(0),this.fft2(o,r,!1),this.hasH&&this.splitHForce();const d=1/(_l*vl);for(let g=0;g<t;g++){const m=g===0?0:t-g;for(let v=0;v<t;v++){const y=v===0?0:t-v,_=g*t+v,L=m*t+y;if(_===0){a[0]=0,this.velRe[0]=0,this.velIm[0]=0,c[0]=0;continue}const T=.5*(n[_]+n[L]),M=.5*(s[_]-s[L]),P=.5*(s[_]+s[L]),b=-.5*(n[_]-n[L]),w=-o[_]*d,N=-r[_]*d,O=this.modeC[_],U=this.modeS[_],V=this.modeDamp[_],B=T-w,X=M-N,Q=(B*O+P*U)*V,j=(X*O+b*U)*V,pt=(-B*U+P*O)*V,vt=(-X*U+b*O)*V,Mt=Q+w,lt=j+N;if(a[_]=Mt-vt,c[_]=lt+pt,this.computeVelocity){const ht=this.modePhi[_],Y=pt*ht,I=vt*ht,z=(v<t/2?v:v-t)*this.dk,k=(g<t/2?g:g-t)*this.dk;this.velRe[_]=-z*I-k*Y,this.velIm[_]=z*Y-k*I}}}this.fft2(a,c,!0),this.computeVelocity&&(this.fft2(this.velRe,this.velIm,!0),this.ux.set(this.velRe),this.uz.set(this.velIm));const f=this.sponge,p=1/this.dt,x=this.src;for(let g=0;g<e;g++){const m=(a[g]+x[g]*this.dt)*f[g];this.dhdt[g]=(m-l[g])*p,l[g]=m,u[g]=c[g]*f[g]}this.pSmooth.set(this.p)}splitHForce(){const t=this.n,{hRe:e,hIm:n,sRe:s,sIm:o,pre:r,pim:a}=this;e.set(this.fhx),n.set(this.fhz),this.fft2(e,n,!1);for(let u=0;u<t;u++){const h=u===0?0:t-u,d=(u<t/2?u:u-t)*this.dk;for(let f=0;f<t;f++){const p=f===0?0:t-f,x=u*t+f,g=h*t+p,m=(f<t/2?f:f-t)*this.dk,v=m*m+d*d;if(v===0){s[x]=e[x],o[x]=n[x];continue}const y=.5*(e[x]+e[g]),_=.5*(n[x]-n[g]),L=.5*(n[x]+n[g]),T=-.5*(e[x]-e[g]),M=(m*y+d*L)/v,P=(m*_+d*T)/v,b=this.modeHF[x];r[x]+=-P*b,a[x]+=M*b;const w=y-m*M,N=_-m*P,O=L-d*M,U=T-d*P;s[x]=w-U,o[x]=N+O}}const c=this.layer;if(!c)return;this.fft2(s,o,!0);const l=this.dt/(_l*Sn.depth);for(let u=0;u<t*t;u++)c.ux[u]+=s[u]*l,c.uz[u]+=o[u]*l}recenter(t,e){var a;const n=this.n,s=this.size/2,o=Math.round((t-s-this.originX)/this.dx),r=Math.round((e-s-this.originZ)/this.dx);if(!(o===0&&r===0)){for(const c of[this.h,this.q,this.dhdt,this.pSmooth]){const l=c.slice();c.fill(0);for(let u=0;u<n;u++){const h=u+r;if(!(h<0||h>=n))for(let d=0;d<n;d++){const f=d+o;f<0||f>=n||(c[u*n+d]=l[h*n+f])}}}this.originX+=o*this.dx,this.originZ+=r*this.dx,(a=this.layer)==null||a.shift(o,r)}}waveForce(t,e,n,s=1/0){const o=s*s,r=this.n,{p:a,h:c}=this,l=1/(2*this.dx),u=this.dx*this.dx;let h=0,d=0,f=0;for(let p=1;p<r-1;p++){const x=p*r;for(let g=1;g<r-1;g++){const m=x+g,v=a[m];if(v<=0)continue;const y=(c[m+1]-c[m-1])*l,_=(c[m+r]-c[m-r])*l,L=-v*y*u,T=-v*_*u,M=this.originX+g*this.dx-t,P=this.originZ+p*this.dx-e;M*M+P*P>o||(h+=L,d+=T,f+=P*L-M*T)}}n[0]=h,n[1]=d,n[2]=f}sample(t,e,n){const s=this.n,o=(e-this.originX)/this.dx,r=(n-this.originZ)/this.dx;if(o<0||r<0||o>=s-1||r>=s-1)return 0;const a=o|0,c=r|0,l=o-a,u=r-c,h=c*s+a;return(t[h]*(1-l)+t[h+1]*l)*(1-u)+(t[h+s]*(1-l)+t[h+s+1]*l)*u}height(t,e){return this.sample(this.h,t,e)}surfaceVelocity(t,e,n){n.x=this.sample(this.ux,t,e),n.z=this.sample(this.uz,t,e)}verticalVelocity(t,e){return this.sample(this.dhdt,t,e)}staticDepression(t,e){const n=this.sample(this.pSmooth,t,e)/(_l*vl);return n>0?Math.min(n,Math.max(0,-this.sample(this.h,t,e))):0}fft2(t,e,n){const s=this.n,{rowRe:o,rowIm:r}=this;for(let a=0;a<s;a++){const c=a*s;for(let l=0;l<s;l++)o[l]=t[c+l],r[l]=e[c+l];this.fft1(o,r,n);for(let l=0;l<s;l++)t[c+l]=o[l],e[c+l]=r[l]}for(let a=0;a<s;a++){for(let c=0;c<s;c++)o[c]=t[c*s+a],r[c]=e[c*s+a];this.fft1(o,r,n);for(let c=0;c<s;c++)t[c*s+a]=o[c],e[c*s+a]=r[c]}if(n){const a=1/(s*s);for(let c=0;c<s*s;c++)t[c]*=a,e[c]*=a}}fft1(t,e,n){const s=this.n,o=this.rev;for(let a=0;a<s;a++){const c=o[a];if(c>a){let l=t[a];t[a]=t[c],t[c]=l,l=e[a],e[a]=e[c],e[c]=l}}const r=n?-1:1;for(let a=2;a<=s;a<<=1){const c=a>>1,l=s/a;for(let u=0;u<s;u+=a)for(let h=0;h<c;h++){const d=this.cosT[h*l],f=r*this.sinT[h*l],p=u+h,x=p+c,g=t[x]*d-e[x]*f,m=t[x]*f+e[x]*d;t[x]=t[p]-g,e[x]=e[p]-m,t[p]+=g,e[p]+=m}}}}class wu{constructor(t,e){S(this,"waves");S(this,"felt");S(this,"self",null);S(this,"wv",{x:0,z:0});this.waves=t,this.felt=e}height(t,e,n){const s=this.self;if(s){const o=this.felt.height(t,e)-s.height(t,e);return this.waves.height(t,e,n)+o+s.staticDepression(t,e,o)}return this.waves.height(t,e,n)+this.felt.height(t,e)+this.felt.staticDepression(t,e)}verticalVelocity(t,e,n){return this.waves.verticalVelocity(t,e,n)+this.felt.verticalVelocity(t,e)-(this.self?this.self.verticalVelocity(t,e):0)}flowAt(t,e,n){var s;this.felt.layer?this.felt.layer.sample(t,e,n):n.x=n.z=n.w=0,this.felt.surfaceVelocity(t,e,this.wv),n.x+=this.wv.x,n.z+=this.wv.z,(s=this.self)==null||s.subtractFlow(t,e,n)}}class Py{constructor(t,e){S(this,"waves");S(this,"sims");S(this,"selfs");S(this,"tmp",{x:0,z:0,w:0});S(this,"one",{x:0,z:0,w:0});this.waves=t,this.sims=e,this.selfs=e.map(()=>null)}height(t,e,n){let s=this.waves.height(t,e,n);for(let o=0;o<this.sims.length;o++){const r=this.sims[o],a=this.selfs[o];if(a){const c=r.height(t,e)-a.height(t,e);s+=c+a.staticDepression(t,e,c)}else s+=r.height(t,e)+r.staticDepression(t,e)}return s}verticalVelocity(t,e,n){var o;let s=this.waves.verticalVelocity(t,e,n);for(let r=0;r<this.sims.length;r++)s+=this.sims[r].verticalVelocity(t,e)-(((o=this.selfs[r])==null?void 0:o.verticalVelocity(t,e))??0);return s}flowAt(t,e,n){var o;n.x=n.z=n.w=0;const s=this.one;for(let r=0;r<this.sims.length;r++){const a=this.sims[r];s.x=s.z=s.w=0,a.layer&&a.layer.sample(t,e,s),a.surfaceVelocity(t,e,this.tmp),s.x+=this.tmp.x,s.z+=this.tmp.z,(o=this.selfs[r])==null||o.subtractFlow(t,e,s),n.x+=s.x,n.z+=s.z,n.w+=s.w}}}class mp{constructor(t,e){S(this,"waves");S(this,"render");this.waves=t,this.render=e}height(t,e,n){return this.waves.height(t,e,n)+this.render.height(t,e)}verticalVelocity(t,e,n){return this.waves.verticalVelocity(t,e,n)+this.render.verticalVelocity(t,e)}}const S0=.3,Ly=1e3,Iy=9.81;class Dy{constructor(t,e=32){S(this,"sim");S(this,"layer");S(this,"hist",[]);S(this,"pd");S(this,"host");S(this,"tmp",{x:0,z:0,w:0});S(this,"wv",{x:0,z:0});this.host=t,this.sim=new Fh({n:e,dx:t.dx,dt:t.dt,depth:t.depth}),this.sim.computeVelocity=!0,this.layer=new bh(e,t.dx),this.sim.layer=this.layer,this.pd=new Float32Array(e*e)}reset(){this.hist.length=0,this.sim.h.fill(0),this.sim.q.fill(0),this.sim.dhdt.fill(0),this.layer.clear(),this.pd.fill(0)}step(t,e,n,s,o,r,a,c,l){const u=this.sim,h=this.host,d=u.size/2,f=h.originX+Math.round((e-s*3-d-h.originX)/h.dx)*h.dx,p=h.originZ+Math.round((n-o*3-d-h.originZ)/h.dx)*h.dx;for((this.hist.length===0||Math.abs(f-u.originX)>2||Math.abs(p-u.originZ)>2)&&(this.hist.length===0?(u.originX=this.layer.originX=f,u.originZ=this.layer.originZ=p):u.recenter(f+d,p+d)),this.hist.push({t,pressure:r.slice(),mom:a?a.slice():null,events:c.slice()});this.hist.length>1&&this.hist[1].t<=t-S0;)this.hist.shift();const x=this.hist[0].t<=t-S0?this.hist[0]:null,g=this.hist[this.hist.length-1];u.clearPressure(),this.pd.fill(0);const m=u.dt,v=(y,_)=>{const L=y.pressure;for(let M=0;M<L.length;M+=4)L[M+2]<=0||!h.inside(L[M],L[M+1])||(u.addForceSigned(L[M],L[M+1],_*L[M+2],L[M+3]),_<0&&u.splatTo(this.pd,L[M],L[M+1],L[M+2],L[M+3]));const T=y.mom;if(T)for(let M=0;M<T.length;M+=5)h.inside(T[M],T[M+1])&&((T[M+2]!==0||T[M+3]!==0)&&u.addHForce(T[M],T[M+1],_*T[M+2],_*T[M+3]),T[M+4]>0&&this.layer.addAirSigned(T[M],T[M+1],_*T[M+4]*m));for(const M of y.events)h.inside(M.x,M.z)&&(u.addSource(M.x,M.z,_*M.vol/m,l),M.imp>0&&u.addImpactSigned(M.x,M.z,_*M.imp/m,l),(M.ix!==0||M.iz!==0)&&u.addHForce(M.x,M.z,_*M.ix/m,_*M.iz/m))};v(g,1),x&&v(x,-1),u.step(),this.layer.step(m)}height(t,e){return this.sim.height(t,e)}verticalVelocity(t,e){return this.sim.verticalVelocity(t,e)}staticDepression(t,e,n){const s=this.sim.sampleArr(this.pd,t,e)/(Ly*Iy);return s>0?Math.min(s,Math.max(0,-n)):0}subtractFlow(t,e,n){this.layer.sampleRaw(t,e,this.tmp),n.x-=this.tmp.x,n.z-=this.tmp.z,n.w=Math.min(Sn.maxVoid,Math.max(0,n.w-this.tmp.w)),this.sim.surfaceVelocity(t,e,this.wv),n.x-=this.wv.x,n.z-=this.wv.z}}const Ml=.3,Ny=128,zy=.5,Ia=1e3,Uy=1.2,Fy=.45,Oy=2e4;class gp{constructor(t=Ny,e=zy){S(this,"render");S(this,"felt");S(this,"history",[]);S(this,"drops",[]);S(this,"hitBoats",null);S(this,"selves",null);S(this,"attached",[]);S(this,"pList",[]);S(this,"mList",[]);S(this,"sprayOwner",[]);S(this,"events",[]);S(this,"stepEvents",[]);S(this,"jetSeq",Co.seq);S(this,"sprayOut",0);S(this,"sprayIn",0);S(this,"acc",0);S(this,"time",0);S(this,"stepCount",0);S(this,"lastStepMs",0);S(this,"feltOnly",!1);this.render=new Fh({n:t,dx:e,dt:1/60}),this.felt=new Fh({n:t,dx:e,dt:1/30}),this.felt.layer=new bh(t,e),this.felt.computeVelocity=!0,this.render.layer=new bh(t,e)}attach(t){this.hitBoats=t,this.attached=t;const e=t.map(()=>new Dy(this.felt));this.selves=e,t.forEach((n,s)=>{const o=n.surface;if(o instanceof wu&&o.felt===this.felt)o.self=e[s];else if(o instanceof Py){const r=o.sims.indexOf(this.felt);r>=0&&(o.selfs[r]=e[s])}})}reset(t,e){for(const n of this.selves??[])n.reset();for(const n of[this.render,this.felt])n.h.fill(0),n.q.fill(0),n.dhdt.fill(0),n.originX=t-n.size/2,n.originZ=e-n.size/2;for(const n of[this.felt,this.render])n.layer&&(n.layer.clear(),n.layer.originX=n.originX,n.layer.originZ=n.originZ);this.history=[],this.drops.length=0,this.events=[]}update(t,e,n,s,o,r,a,c){var f,p;const l=Array.isArray(r)?Sl(r):r,u=a&&(Array.isArray(a)?Sl(a):a);if(this.sprayOwner.length=0,Array.isArray(a))for(const[x,g]of a.entries())this.sprayOwner.push(x,g.length);else a&&this.sprayOwner.push(0,a.length);const h=c?Array.isArray(c)?Sl(c):c.slice():null;this.selves&&(this.pList=Array.isArray(r)?r:[r],this.mList=c?Array.isArray(c)?c:[c]:[]),this.acc+=t;let d=!1;for(this.acc>.1&&(this.acc=.1);this.acc>=this.render.dt;){this.acc-=this.render.dt,this.time+=this.render.dt;const x=performance.now();this.selves||this.history.push({t:this.time,data:l.slice(),mom:h});const g=e-s*10,m=n-o*10;for(const y of this.feltOnly?[this.felt]:[this.render,this.felt]){const _=y.originX+y.size/2,L=y.originZ+y.size/2;Math.hypot(g-_,m-L)>4&&y.recenter(g,m)}this.stepEvents.length=0,u&&this.flySpray(u);for(const y of Co.retired){if(y.seq<=this.jetSeq)continue;const _={t:this.time,x:y.x,z:y.z,vol:0,imp:0,ix:y.ix,iz:y.iz,src:-1};this.stepEvents.push(_),this.events.push(_)}this.jetSeq=Co.seq;const v=gn.wakeSmooth;if(!this.feltOnly){wl(this.render,l);for(const _ of this.stepEvents)yl(this.render,_,v);const y=this.render.layer;if(h&&y)for(let _=0;_<h.length;_+=5)(h[_+2]!==0||h[_+3]!==0)&&this.render.addHForce(h[_],h[_+1],h[_+2],h[_+3]),h[_+4]>0&&y.addAir(h[_],h[_+1],h[_+4]*this.render.dt);this.render.step()}if(++this.stepCount%2===0&&this.selves){const y=this.felt.layer,_=this.felt.dt;if(wl(this.felt,l),h&&y)for(let T=0;T<h.length;T+=5)(h[T+2]!==0||h[T+3]!==0)&&this.felt.addHForce(h[T],h[T+1],h[T+2],h[T+3]),h[T+4]>0&&y.addAir(h[T],h[T+1],h[T+4]*_);const L=this.selves.map(()=>[]);for(const T of this.events)yl(this.felt,T,v),T.src>=0&&T.src<L.length&&L[T.src].push(T);this.events.length=0,this.felt.step(),y==null||y.step(_),this.feltOnly||(f=this.render.layer)==null||f.step(_);for(let T=0;T<this.selves.length;T++){const M=this.attached[T],P=M.quat,b=2*(P.x*P.z+P.w*P.y),w=1-2*(P.x*P.x+P.y*P.y);this.selves[T].step(this.time,M.comW.x,M.comW.z,b,w,this.pList[T]??By,this.mList[T]??null,L[T],v)}}else if(this.stepCount%2===0){for(;this.history.length>1&&this.history[1].t<=this.time-Ml;)this.history.shift();const y=this.history[0],_=this.felt.layer,L=this.felt.dt;if(y&&y.t<=this.time-Ml){wl(this.felt,y.data);const M=y.mom;if(M&&_)for(let P=0;P<M.length;P+=5)(M[P+2]!==0||M[P+3]!==0)&&this.felt.addHForce(M[P],M[P+1],M[P+2],M[P+3]),M[P+4]>0&&_.addAir(M[P],M[P+1],M[P+4]*L)}else this.felt.clearPressure();let T=0;for(;T<this.events.length&&this.events[T].t<=this.time-Ml;)yl(this.felt,this.events[T++],v);T&&this.events.splice(0,T),this.felt.step(),_==null||_.step(L),this.feltOnly||(p=this.render.layer)==null||p.step(L)}this.lastStepMs=performance.now()-x,d=!0}return d}flySpray(t){const e=this.render.dt,n=this.feltOnly?this.felt:this.render;let s=0,o=0,r=0,a=this.sprayOwner[1]??t.length;for(let h=0;h<t.length;h+=7){for(;h>=a&&r+2<this.sprayOwner.length;)r+=2,a+=this.sprayOwner[r+1];const d=t[h+6];if(d<=0)continue;const f=d*e;s+=d;const p=this.sprayOwner.length?this.sprayOwner[r]:-1;this.addEvent(t[h],t[h+2],-f/Ia,0,0,0,p),this.drops.length<Oy&&this.drops.push({x:t[h],y:t[h+1],z:t[h+2],vx:t[h+3],vy:t[h+4],vz:t[h+5],m:f,age:0,src:this.sprayOwner.length?this.sprayOwner[r]:-1})}const c=this.hitBoats;if(c)for(let h=0;h<c.length;h++){const d=c[h];Po[h*3]=d.comW.x,Po[h*3+1]=d.comW.y,Po[h*3+2]=d.comW.z,xp[h]=d.quat.clone().invert()}const l=.75*(Uy/Ia)*Fy/gn.sprayDrop;let u=0;for(let h=0;h<this.drops.length;h++){const d=this.drops[h],f=Math.hypot(d.vx,d.vy,d.vz),p=l*f;if(d.vx-=p*d.vx*e,d.vy-=(p*d.vy+9.81)*e,d.vz-=p*d.vz*e,d.x+=d.vx*e,d.y+=d.vy*e,d.z+=d.vz*e,d.age+=e,c&&ky(d,c,e)){this.addEvent(d.x,d.z,d.m/Ia,0,0,0,d.src),o+=d.m/e;continue}if(d.vy<0&&d.y<=n.height(d.x,d.z)){this.addEvent(d.x,d.z,d.m/Ia,d.m*-d.vy,d.m*d.vx,d.m*d.vz,d.src),o+=d.m/e;continue}d.age<5&&(this.drops[u++]=d)}this.drops.length=u,this.sprayOut=s,this.sprayIn=o}addEvent(t,e,n,s,o,r,a=-1){const c={t:this.time,x:t,z:e,vol:n,imp:s,ix:o,iz:r,src:a};this.stepEvents.push(c),this.events.push(c)}}function yl(i,t,e){i.addSource(t.x,t.z,t.vol/i.dt,e),t.imp>0&&i.addImpact(t.x,t.z,t.imp/i.dt,e),(t.ix!==0||t.iz!==0)&&i.addHForce(t.x,t.z,t.ix/i.dt,t.iz/i.dt),i.layer&&t.vol>0&&i.layer.addAir(t.x,t.z,t.vol*Sn.sprayAir)}const Po=new Float64Array(64*3),xp=[],lr=new A,Da=new A,w0=new A;function ky(i,t,e){for(let n=0;n<t.length;n++){if(n===i.src&&i.age<.4)continue;const s=Po[n*3],o=Po[n*3+1],r=Po[n*3+2];if(Math.abs(i.x-s)>2.5||Math.abs(i.z-r)>2.5||i.y-o>1.5)continue;const a=t[n];lr.set(i.x,i.y,i.z).sub(a.origin).applyQuaternion(xp[n]);const{x:c,y:l,z:u}=lr,h=u>zs&&u<Dn&&l>-.05&&l<us&&Math.abs(c)<Ki(u),d=u>-1.25&&u<-.05&&l>=us&&l<1.15&&Math.abs(c)<.38;if(!(!h&&!d))return lr.set(i.x-i.vx*e,i.y-i.vy*e,i.z-i.vz*e),a.velocityAt(lr,Da),w0.set(i.vx-Da.x,i.vy-Da.y,i.vz-Da.z).multiplyScalar(i.m),a.applyImpulse(w0,lr),a.sprayHit+=i.m,!0}return!1}const By=new Float32Array(0);function Sl(i){let t=0;for(const s of i)t+=s.length;const e=new Float32Array(t);let n=0;for(const s of i)e.set(s,n),n+=s.length;return e}function wl(i,t){i.clearPressure();for(let e=0;e<t.length;e+=4)t[e+2]>0&&i.addForce(t[e],t[e+1],t[e+2],t[e+3])}const Pn=sn[1],we=Math.sign(sn[0].z-Pn.z),vp=-105,Vy=-112,b0=-110,bl=-60,hr=-15,hc=1,$i={x:Pn.x,z:Pn.z+we*20},ur=Gn-we*150,Za=Gn-we*200,_p=3,Hy=2*_p,Gy=Pn.x-12,Wy=4.5,oi=7,El=5,Xy=2.6,yr=2.75,E0=-29,T0=1.5,A0=-17,R0=1,$y=18,Lo=[0,3.4,11,22.6,37.3,54.5,73.5,93.8,114.9,136.7,158.8,181.1,203.6],Tl=[2.8,5.2,9.75,13.3,16,18.2,19.75,20.8,21.5,21.9,22.25,22.4,22.5],Mp=22.6;function bu(i,t,e){if(e<=i[0])return t[0];for(let n=1;n<i.length;n++)if(e<=i[n])return t[n-1]+(t[n]-t[n-1])*(e-i[n-1])/(i[n]-i[n-1]);return NaN}const Eu=Lo.map((i,t)=>t),qy=i=>i<=12?bu(Eu,Lo,i):Lo[12]+Mp*(i-12),Yy=i=>i<=Lo[12]?bu(Lo,Eu,i):12+(i-Lo[12])/Mp,jy=i=>i>=Tl[12]?12:bu(Tl,Eu,Math.max(Tl[0],i));function Al(i,t){const e=jy(t);return Yy(qy(e)+Math.max(0,i))-e}function yp(i){let t=(Math.abs(Math.floor(i))*7919+104729)%2147483647||1;return()=>(t=t*16807%2147483647,t%1000003/1000003)}function C0(i){return Math.sqrt(-2*Math.log(Math.max(1e-9,i())))*Math.cos(2*Math.PI*i())}function P0(i){const t=yp(i*31+7);return Array.from({length:6},()=>({react:.15+t()*.35+(t()<.1?.4+t()*.5:0),maeduke:t()**3,deep:t(),stMean:.125+t()*.08,stSd:.03+t()*.03,adjust:.4+t()*.6}))}class L0{constructor(){S(this,"segs",[]);S(this,"len",0)}line(t,e,n,s){const o=Math.hypot(n-t,s-e);return this.segs.push({line:!0,x0:t,z0:e,x1:n,z1:s,len:o}),this.len+=o,this}arc(t,e,n,s,o){const r=n*(o-s);return this.segs.push({line:!1,cx:t,cz:e,r:n,a0:s,a1:o,len:r}),this.len+=r,this}at(t,e){let n=0;for(;n<this.segs.length-1&&t>this.segs[n].len;)t-=this.segs[n++].len;const s=this.segs[n];if(s.line){const o=s.len>0?t/s.len:0;e.x=s.x0+(s.x1-s.x0)*o,e.z=s.z0+(s.z1-s.z0)*o}else{const o=s.a0+t/s.r;e.x=s.cx+s.r*Math.sin(o),e.z=s.cz+s.r*Math.cos(o)}return e}project(t,e,n){let s=n,o=1/0;const r={x:0,z:0};for(let a=Math.max(0,n-3);a<=Math.min(this.len,n+30);a+=.5){this.at(a,r);const c=(r.x-t)**2+(r.z-e)**2;c<o&&(o=c,s=a)}return s}}const Rr=new A,Rl=new A(0,0,Dn);function Zy(i,t,e,n,s=0){const o=i.ph,r=o.forward(Rr),a=o.comW,c=Math.cos(s),l=Math.sin(s),u=t-a.x,h=e-a.z,d=u*c+h*l,f=h*c-u*l;let p;if(o.speed()>6){const y=o.vel,_=Math.atan2(y.x*f-y.z*d,y.x*d+y.z*f),L=o.speed(),T=Math.max(.35,Math.min(1,1-(L-6)/12));p=Math.max(-T,Math.min(T,_/.6+.2*o.angVel.y))}else p=Math.atan2(r.x*f-r.z*d,r.x*d+r.z*f)/.4+.3*o.angVel.y;p=Math.max(-1,Math.min(1,p));const x=2.5*n;i.input.steer+=Math.max(-x,Math.min(x,p-i.input.steer));const g=o.speed()*3.6,m=Math.max(0,Math.min(1,(g-25)/25)),v=i.input.steer<-.4?-m:0;i.input.leanX+=Math.max(-n*3,Math.min(n*3,v-i.input.leanX)),i.input.leanZ=0}function Ky(i,t){return t<=yr+.1||i>t+.3?0:Math.max(.3,Math.min(1,.3+(t-i)*.25+t*.03))}class Jy{constructor(t,e,n=vp){S(this,"boats");S(this,"mode");S(this,"pitOut");S(this,"nSlow",3);S(this,"violations",[]);S(this,"finalCourse",null);S(this,"negotiated",0);S(this,"retreated",new Set);S(this,"slowT0",E0);S(this,"slowDt",T0);S(this,"dashT0",A0);S(this,"dashDt",R0);S(this,"order",[]);S(this,"humanIdx",5);S(this,"humanIdxCand",5);S(this,"humanIdxT",0);S(this,"rnd",Math.random);this.mode=e,this.pitOut=n,this.boats=t.map(s=>({lane:s.lane,ph:s.ph,human:s.human,skill:P0(1)[s.lane-1],input:{steer:0,throttle:0,leanX:0,leanZ:0},phase:"moored",course:s.lane,slow:s.lane<=3,want:s.lane,stTarget:.15,launched:!1,zTurn:Pn.z-we*40,path:null,u:0,visitedBack:!1,cross150:null,st:null,flying:!1,late:!1,rightAcc:0,rightTurns:0,rightArmed:!0,prevBowZ:0,weave:0,need:yr,waitD:.5}))}reset(t){const e=P0(t);this.rnd=yp(t*131+17),this.violations=[],this.finalCourse=null,this.negotiated=0,this.retreated.clear(),this.nSlow=3,this.order=this.boats.map(n=>n.lane),this.humanIdx=this.humanIdxCand=-1,this.slowT0=E0-2+this.rnd()*4,this.slowDt=T0*(.7+this.rnd()*.8),this.dashT0=A0-2+this.rnd()*4,this.dashDt=R0*(.7+this.rnd()*.8),this.humanIdxT=0;for(const n of this.boats){const s=VM(n.lane);n.ph.reset(s.x,s.z,s.heading,0),n.skill=e[n.lane-1],Object.assign(n.input,{steer:0,throttle:0,leanX:0,leanZ:0}),n.phase="moored",n.course=n.lane,n.slow=n.lane<=3,n.launched=!1,n.path=null,n.u=0,n.visitedBack=!1,n.cross150=null,n.st=null,n.flying=n.late=!1,n.rightAcc=0,n.rightTurns=0,n.rightArmed=!0,n.weave=0,n.prevBowZ=n.ph.toWorld(Rl,Rr).z;const o=n.skill;n.waitD=this.rnd(),n.stTarget=o.stMean+o.stSd*C0(this.rnd)+(this.rnd()<.025?.11*C0(this.rnd):0);let r=0;this.mode==="free"&&n.lane>1&&!n.human&&(this.rnd()<o.maeduke*.6&&(r=1),r&&this.rnd()<o.maeduke*.5&&r++,r===2&&n.lane>=5&&this.rnd()<o.maeduke*.4&&r++),n.want=Math.max(1,n.lane-r)}this.assign()}get(t){return this.boats[t-1]}moored(t){return t<this.pitOut}humanIndexNow(t,e){const n=this.order.filter(r=>!this.get(r).human),s=t.ph.comW;if(e<this.pitOut+1||(s.z-Ur)*we<8)return n.length;if(!t.visitedBack)return n.filter(r=>r<t.lane).length;let o=0;return n.forEach((r,a)=>{const c=a+1,l=this.get(r),u=l.phase==="uturn"||l.phase==="approach"?l.course:c;s.x>Pn.x?o+=dr(u)<s.x?1:0:o+=Ra(u)>s.x?1:0}),o}assign(){this.order.forEach((t,e)=>{const n=this.get(t);n.phase==="uturn"||n.phase==="approach"||n.phase==="race"||(n.course=e+1,n.slow=e+1<=this.nSlow)})}negotiate(){if(this.negotiated++,this.mode!=="free")return;const t=[...this.order],e=s=>this.get(s).ph.comW.z*we;for(const s of[...t]){const o=this.get(s);if(o.human)continue;let r=t.indexOf(s);for(;r>o.want-1&&r>0;){const a=this.get(t[r-1]);if(a.human||e(s)-e(a.lane)<(a.lane===1?3:1)*_p)break;t[r]=a.lane,t[r-1]=s,r--}}if(t.some((s,o)=>s!==this.order[o])){for(const o of[...t]){const r=this.get(o);if(r.human||r.lane>3||this.retreated.has(o))continue;const a=t.indexOf(o);a>r.lane-1&&r.skill.deep>.7&&(t.splice(a,1),t.push(o),this.retreated.add(o))}const s=this.get(t[3]);t.slice(0,3).some(o=>o>=4)&&!s.human&&s.lane<=3&&s.skill.deep<.3&&(this.nSlow=4)}this.order=t,this.assign()}control(t,e){if(e<this.pitOut)return;this.negotiated<3&&e>=this.pitOut+3.5+1.5*this.negotiated&&this.negotiate();const n=this.boats.find(r=>r.human);if(n){const r=this.humanIndexNow(n,e);if(r!==this.humanIdxCand?(this.humanIdxCand=r,this.humanIdxT=0):this.humanIdxT+=t,this.humanIdxT>1&&r!==this.humanIdx&&(this.humanIdx=r,this.mode==="free")){const a=this.order.filter(c=>c!==n.lane);a.splice(Math.min(r,a.length),0,n.lane),this.order=a,this.assign()}this.mode==="fixed"&&(n.course=this.humanIdx+1)}let s=1/0;const o=[...this.boats].sort((r,a)=>r.course-a.course);for(const r of o)r.human||(s=this.planTurn(r,e,s));for(const r of this.boats)r.human||this.drive(r,t,e)}planTurn(t,e,n){const s=t.course,o=t.slow?this.slowT0+this.slowDt*(s-1):this.dashT0+this.dashDt*(s-this.nSlow-1),r=Math.max(.1,o-e);if(t.phase==="uturn"||t.phase==="approach"||t.phase==="race"){const v=t.phase==="uturn"&&t.path?t.path.len-t.u+(t.slow?Math.max(0,(ur-t.zTurn)*we):0):t.slow?Math.max(0,(ur-t.ph.comW.z)*we):0;return t.need=o-e>.5?v/r:v>0?8:0,(t.zTurn-we*El)*we}const a=dr(s),c=Ra(s),l=Math.PI*oi+Math.max(0,a-c-2*oi),u=t.ph.comW;let h=0,d=u.z*we;if(t.phase==="rush"||t.phase==="buoy"||t.phase==="moored"){const v=(a-I0(s))/2;h=Math.max(0,($i.z-u.z)*we)+Math.PI*v,d=$i.z*we}const f=v=>h+Math.max(0,d-v)+l+(t.slow?Math.max(0,ur*we-v):0),p=Ur*we+$y+oi+El*(6-s),x=Math.min(t.slow?Pn.z*we+3:Za*we-5,n,d),g=Xy*r;let m;if(f(x)>=g)m=x;else if(f(p)<=g)m=p;else{let v=p,y=x;for(let _=0;_<30;_++){const L=(v+y)/2;f(L)>g?v=L:y=L}m=(v+y)/2}return m=Math.max(p,Math.min(x,m)),t.zTurn=m*we,t.need=f(m)/r,m-El}drive(t,e,n){const s=t.ph,o=s.comW,r=s.speed(),a=t.input,c=t.course,l=5+r*.4,u={x:0,z:0};let h=yr,d=0;if(t.phase==="moored"&&(t.phase="rush"),t.phase==="rush"){const f=I0(c),p=(dr(c)-f)/2,x=Math.max(l,10);u.x=o.x+Math.max(-x/4,Math.min(x/4,f-o.x)),u.z=o.z+we*x;const g=Math.sqrt(5*p),m=($i.z-o.z)*we;h=n<this.pitOut+t.skill.react?0:m<(r*r-g*g)/(2*2.2)+5?g:30,m<=.5&&(t.phase="buoy",t.path=new L0().arc((f+dr(c))/2,$i.z,p,-Math.PI/2,Math.PI/2),t.u=0)}if(t.phase==="buoy"&&t.path){t.u=t.path.project(o.x,o.z,t.u),t.path.at(t.u+3+r*.3,u);const f=t.path.segs[0].r;h=Math.sqrt(5*f),t.u>=t.path.len-1.5&&(t.phase="back")}if(t.phase==="back"){const f=dr(c);if(u.x=f,u.z=o.z-we*l,h=t.need,d=Math.max(0,Math.min(1,(yr-.1-t.need)/.5)),(o.z-t.zTurn)*we<=.5){const p=Ra(c),g=t.zTurn;t.path=new L0().arc(f-oi,g,oi,Math.PI/2,Math.PI).line(f-oi,g-we*oi,p+oi,g-we*oi).arc(p+oi,g,oi,Math.PI,1.5*Math.PI),t.u=0,t.phase="uturn"}}if(t.phase==="uturn"&&t.path&&(t.u=t.path.project(o.x,o.z,t.u),t.path.at(t.u+Math.max(4,l),u),h=Math.min(7,t.need),t.u>=t.path.len-1&&(t.phase="approach")),t.phase==="approach"){const f=Ra(c),p=s.toWorld(Rl,Rr).z,x=(Gn-p)*we;h=t.slow&&t.cross150===null?Math.min(6,t.need):yr;const g=t.stTarget-(!t.slow&&c===this.nSlow+1?.03:0);if(!t.launched){const m=t.slow?92+18*t.waitD+2.3*Math.max(0,-8-n):200+20*t.waitD+2.3*Math.max(0,-12-n);d=Math.max(0,Math.min(1,(m-x)/6)),g-n-Al(x,r)<2.5&&(d=0),u.x=f,u.z=o.z+we*Math.max(l,8),(Al(x,r)>=g-n||n>-2.5)&&(t.launched=!0)}if(t.launched){u.x=f,u.z=o.z+we*l,h=40;const m=g-n-Al(x,r);m>.02?a.throttle=Math.max(.35,1-t.skill.adjust*m*3):a.throttle=1}}d>0&&(t.weave+=e*2*Math.PI/5),Zy(t,u.x,u.z,e,d*(25*Math.PI/180)*Math.sin(t.weave)),t.phase==="approach"&&t.launched||(a.throttle=Ky(r,h))}observe(t,e,n){for(const s of this.boats){if(e<this.pitOut)continue;const o=s.ph.comW,r=s.ph.toWorld(Rl,Rr).z,a=l=>(s.prevBowZ-l)*we<0&&(r-l)*we>=0,c=l=>t+(e-t)*(l-s.prevBowZ)/(r-s.prevBowZ||1e-6);if(!s.visitedBack&&o.x>Pn.x+2&&(s.visitedBack=!0,(o.z-$i.z)*we<-1&&e<0&&this.violations.push({lane:s.lane,kind:"小回り防止ブイの内側を通過",clock:e})),s.visitedBack&&s.cross150===null&&o.x<Pn.x&&a(ur)&&e<0&&(s.cross150=c(ur),this.boats.some(u=>u!==s&&u.cross150!==null&&u.cross150<s.cross150-1&&u.ph.comW.x<o.x-2)&&this.violations.push({lane:s.lane,kind:"150m見透し線の割り込み",clock:e})),s.st===null&&o.x<Pn.x+10&&a(Gn)&&e>this.pitOut+5&&e<-5?this.violations.push({lane:s.lane,kind:"スタートラインを早く越えた",clock:e}):s.st===null&&o.x<Pn.x+10&&a(Gn)&&e>this.pitOut+5&&e<10&&(s.st=Math.round(c(Gn)*100)/100,s.st===0&&c(Gn)<0&&(s.st=-.01),s.st<0?s.flying=!0:s.st>=hc&&(s.late=!0)),s.st===null&&e>=hc&&!s.flying&&(s.late=!0),s.visitedBack&&e<0){const l=s.ph.angVel.y;l<-.17&&s.ph.speed()<30/3.6?s.rightAcc+=-l*n:l>.17&&(s.rightAcc=0,s.rightArmed=!0),s.rightArmed&&s.rightAcc>Math.PI/3&&(s.rightArmed=!1,s.rightTurns++,s.rightTurns>1&&this.violations.push({lane:s.lane,kind:"右転舵",clock:e}))}s.prevBowZ=r}}decideCourses(){const t=n=>n.visitedBack&&n.ph.comW.x<Pn.x,e=[...this.boats].sort((n,s)=>t(n)!==t(s)?t(n)?-1:1:t(n)?s.ph.comW.x-n.ph.comW.x:n.lane-s.lane);if(e.forEach((n,s)=>{n.course=s+1,n.phase="race"}),this.finalCourse=e.map(n=>n.lane),this.mode==="fixed")for(const n of e)n.human&&n.course!==n.lane&&this.violations.push({lane:n.lane,kind:"進入固定違反（枠番と違うコース）",clock:0});return this.finalCourse}}function I0(i){return Gy-Wy*(i-1)}function dr(i){return Pn.x+Hy*i}function Qy(i,t,e){const n=i.comW,s=i.forward(Rr),r=n.x>Pn.x?Bt.x1-8:Bt.x0+8,a=n.z+(s.z>=0?12:-12),c=r-n.x,l=a-n.z,u=Math.atan2(s.x*l-s.z*c,s.x*c+s.z*l),h=Math.max(-.5,Math.min(.5,u/.4+.3*i.angVel.y));t.steer+=Math.max(-2.5*e,Math.min(2.5*e,h-t.steer)),t.throttle=0,t.leanX*=1-Math.min(1,e*3),t.leanZ=0}function Cl(i,t=!1){return i==null?t?"L":"":i<0?"F"+(-i).toFixed(2).replace(/^0/,""):i>=hc?"L"+i.toFixed(2):i.toFixed(2).replace(/^0/,"")}const Na=sn[0],D0=-14,za=1/240,tS={steer:0,throttle:0,leanX:0,leanZ:0},eS=10;class Sp{constructor(t,e={}){S(this,"wake",new gp);S(this,"visual");S(this,"boats",[]);S(this,"prestart");S(this,"entry");S(this,"humanInput",null);S(this,"clock",D0);S(this,"t",0);S(this,"result",null);S(this,"onFinish",null);S(this,"st",{});S(this,"acc",0);S(this,"firstTurnLeader",null);S(this,"buf",new Float32Array(3));S(this,"started",!1);S(this,"withdrawT",new Map);S(this,"prevBow",new Map);S(this,"useWake");this.visual=new mp(t,this.wake.render),this.useWake=e.wake??!0,this.entry=e.entry??"free";const n=zh(1);for(let s=0;s<6;s++){const o=new Nr(new wu(t,this.wake.felt),this.visual),r=e.humanLane===s+1;r&&ZM(o),this.boats.push({lane:s+1,ph:o,cpu:new Sy(s+1,n[s]),human:r,retired:!1,removed:!1})}this.prestart=e.prestart??!0?new Jy(this.boats,this.entry,e.pitOut??vp):null,this.wake.attach(this.boats.map(s=>s.ph)),this.reset()}get me(){return this.boats.find(t=>t.human)??null}setPolicy(t){for(const e of this.boats)e.cpu.policy=t}setControl(t){for(const e of this.boats)e.cpu.control=t}reset(t=Math.floor(Math.random()*1e5)+1){const e=zh(t);this.boats.forEach((n,s)=>{n.cpu.skill=e[s],n.cpu.reset(),n.retired=n.removed=!1;const o=n.cpu.startPos();n.ph.reset(o.x,o.z,0,this.t)}),this.prestart&&this.prestart.reset(t),this.wake.reset(Na.x,Na.z+5),this.clock=this.prestart?Math.min(Vy,this.prestart.pitOut-7):D0,this.acc=0,this.result=null,this.firstTurnLeader=null,this.started=!this.prestart,this.st={},this.withdrawT.clear(),this.prevBow.clear()}get inPrestart(){return!!this.prestart&&!this.started}order(){return this.inPrestart?[...this.boats].sort((t,e)=>this.prestart.get(t.lane).course-this.prestart.get(e.lane).course):[...this.boats].sort((t,e)=>{const n=t.cpu.capsized||t.retired,s=e.cpu.capsized||e.retired;return n!==s?n?1:-1:t.cpu.finished&&e.cpu.finished?t.cpu.finishTime-e.cpu.finishTime:t.cpu.finished?-1:e.cpu.finished?1:e.cpu.progress-t.cpu.progress})}step(t){var f;const e=this.boats,n=this.prestart,s=this.clock;if(n&&!this.started&&this.clock>=0){this.started=!0,n.decideCourses();for(const p of e)p.cpu.beginRace(p.ph.comW.x,p.ph.comW.z,n.get(p.lane).course)}const o=!!n&&n.moored(this.clock),r=e.filter(p=>!p.cpu.capsized&&!p.removed);if(!this.started)n.control(t,this.clock);else for(const p of e){if(p.removed)continue;const x=this.withdrawT.get(p);p.retired&&!p.human&&(x!==void 0||p.cpu.progress>y0)?(x===void 0&&this.withdrawT.set(p,this.clock),Qy(p.ph,p.cpu.input,t),this.clock-(x??this.clock)>eS&&(p.removed=!0)):p.cpu.update(t,p.ph,this.clock,r)}const a=p=>p.human&&!(this.started&&p.cpu.finished)?this.humanInput??tS:this.started?p.cpu.input:n.get(p.lane).input;for(const p of e)this.prevBow.set(p,p.ph.toWorld(z0,N0).z);this.acc+=t;let c=0;for(;this.acc>=za&&c<16;){if(!o)for(const p of e)!p.cpu.capsized&&!p.removed&&p.ph.step(za,a(p),this.t);this.t+=za,this.acc-=za,c++}c>=16&&(this.acc=0);const l=e.filter(p=>!p.cpu.capsized&&!p.removed);Ry(l.map(p=>p.ph)),pp(l.map(p=>p.ph));for(const p of e)p.human&&cp(p.ph);if(this.clock+=t,n){n.observe(s,this.clock,t);for(const p of e){const x=n.get(p.lane);x.st!==null&&(this.st[p.lane]=x.st),(x.flying||x.late)&&!p.retired&&(p.retired=!0,x.flying&&(p.cpu.flying=!0))}}else for(const p of e){if(this.st[p.lane]!==void 0)continue;const x=this.prevBow.get(p),g=p.ph.toWorld(z0,N0).z;x<Gn&&g>=Gn&&(this.st[p.lane]=s+(this.clock-s)*(Gn-x)/(g-x))}const u=this.useWake&&this.wake.update(t,Na.x,Na.z+5,0,0,e.map(p=>p.ph.pressure),e.map(p=>p.ph.spray),e.map(p=>p.ph.wakeMom));if(u)for(const p of e)this.wake.render.waveForce(p.ph.comW.x,p.ph.comW.z,this.buf,3.5),p.ph.extForce.set(this.buf[0],0,this.buf[1]),p.ph.extTorque.set(0,this.buf[2],0);if(!this.started)return u;const h=this.order();!this.firstTurnLeader&&h[0].cpu.progress>y0&&!h[0].retired&&(this.firstTurnLeader=h[0]);const d=!n||this.clock>=hc;if(!this.result&&d&&e.every(p=>p.cpu.finished||p.cpu.capsized||p.retired||p.removed)){const p=h.filter(m=>m.cpu.finished&&!m.retired),x=n?n.boats:[],g=x.filter(m=>m.flying||m.late).length;this.result={order:p.map(m=>m.lane),move:p.length?fp(p[0].cpu,p[0]===this.firstTurnLeader):"",flying:e.filter(m=>m.cpu.flying).map(m=>m.lane),capsized:e.filter(m=>m.cpu.capsized).map(m=>m.lane),late:x.filter(m=>m.late&&!m.flying).map(m=>m.lane),st:{...this.st},course:Object.fromEntries(e.map(m=>[m.lane,m.cpu.course])),cancelled:g>=5,violations:n?[...n.violations]:[]},(f=this.onFinish)==null||f.call(this,this.result)}return u}}const N0=new A,z0=new A(0,0,Dn),Pl=.8;function nS(i){const t=document.createElement("canvas");t.width=256,t.height=128;const e=t.getContext("2d");e.fillStyle="#f6f6f2",e.fillRect(0,0,256,128),e.strokeStyle="#d8262b",e.lineWidth=10,e.strokeRect(5,5,246,118),e.fillStyle="#d8262b",e.font="bold 84px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(i,128,70);const n=new Ji(t);return n.colorSpace=Be,n}class iS{constructor(t){S(this,"group",new Ve);S(this,"buoy",new Ve);S(this,"surface");this.surface=t;const e=new Kt({color:16742930,roughness:.45}),n=new Kt({color:16119285,roughness:.5}),s=new Nt(new Hs(.6,24,16),e);s.scale.set(1,.85,1),s.position.y=.3,this.buoy.add(s);const o=new Nt(new mn(.61,.61,.14,24,1,!0),n);o.position.y=.3,this.buoy.add(o);const r=new Nt(new mn(.03,.03,1.1,8),n);r.position.y=1.2,this.buoy.add(r);const a=new Nt(new Xe(.45,.3),new Kt({color:16742930,roughness:.7,side:ze}));a.position.set(0,1.6,.24),a.rotation.y=Math.PI/2,this.buoy.add(a);for(const u of this.buoy.children)u.castShadow=!0;this.group.add(this.buoy);const c=new Kt({color:9080724,roughness:.6,metalness:.3}),l=new Kt({map:nS("200"),roughness:.6});for(const[u,h]of[[Bt.x0-1.2,1],[Bt.x1+1.2,-1]]){const d=new Nt(new mn(.1,.12,4,8),c);d.position.set(u,Pl+2,Za),this.group.add(d);const f=new Nt(new Xe(3,1.5),l);f.position.set(u+h*.06,Pl+3.6,Za),f.rotation.y=h*Math.PI/2,this.group.add(f);const p=new Nt(new oe(.08,1.5,3),new Kt({color:4473924}));p.position.set(u,Pl+3.6,Za),this.group.add(p)}}update(t){this.buoy.position.set($i.x,this.surface.height($i.x,$i.z,t)-.15,$i.z)}}const wp=null,wo=[.052,.0997,.231,-.1143,-.175,.6666,-.499,.0873,-.1632,.8984,-.1323,.5702,-.282,-.2235,-.0382,-.3422,-.3185,.0523,.0247,-.1684,-.0017,-.4133,-.1026,-.1327,-.0668,.5865,-.3303,-.1661,-.0576,.1936,.0687,-.0026,.0321,.4142,.4337,-.1153,-.0872,.3042,-.6619,-.4158,.1265,-.2871,.2592,-.0856,.0601,-.4948,.6116,-.1181,-.042,-.2351,-.1286,.2861,-.6119,-.0596,.2283,.3153,-.2817,-.1506,.2308,.4206,.0741,.2604,-.4846,.0888,.0767,.3585,.5338,.3782,.5554,-.1931,.5802,.245,.405,-.9903,.2055,-.1705,-.4457,.5419,.5135,.1167,.2262,-.084,.0331,-.3187,.1588,.1275,.2788,-.5228,.0708,.3689,-.4066,.4077,-.1061,.1509,.4231,-.4063,.3307,.3403,-.4305,.0281,-.1194,-.4826,-.3678,-.3218,-.2604,.3042,-.4773,.3658,-.1965,-.1331,.4471,-.5171,.3936,-.1716,-.2606,-.0857,.0369,.1021,.14,.4167,.1314,-.2006,.0881,-.0302,.2586,-.4817,.5619,-.2001,-.7112,-.4329,.2802,.0089,.4236,.1088,-.2846,-.1715,-.45,-.6475,-.5522,.2536,.2363,-.3843,-.1321,.7895,-.0271,-.3704,-.3347,-.2678,.1464,.1948,.3526,.1343,-.3239,-.2979,-.0828,-.0451,.0768,.0181,-.1169,.6105,.1814,-.0757,.1014,.1766,.1003,-.1019,.9835,-.2359,.2571,-.6839,-.084,.1474,.2959,.0351,-.3272,-.4187,.1053,.3775,-.2421,.2637,-.0033,-.0682,-.1738,-.5343,-.5889,-.2683,-.0883,.1331,.2526,-.4153,.4462,.1263,.3668,-.2107,-.0885,.2508,-.0559,.1141,-.635,-.3418,.8984,.3487,.0508,-.1137,6e-4,-.7202,-.0792,-.4068,.2886,-.5114,.5678,-.1565,-.0151,-.1196,-.1593,-.5727,-.006,.0183,.1108,.5116,.6194,-.0854,-.1029,-.2788,.065,-.2551,-.3439,.8162,-.2377,-.349,-1.1229,-.2055,-.027,1.9249,.3799,.1238,.056,-.0109,-.2773,.1483,.0712,.358,.7057,.2863,.4698,-.5934,.042,.3183,-.1588,.0221,.0158,.1488,.5364,.3557,-.1323,-.0506,.0308,-.9642,-.1148,-.1128,-.2995,-.2655,-2e-4,-.5829,.3511,-.4927,-.3595,.2342,-.1132,.0447,.1226,-.381,.1796,.0894,.3452,.2766,.2673,.5201,-.4049,.5122,.0029,-.4114,-.1559,-.0578,.3699,-.1332,.2787,-.7246,.4333,-.0244,.1957,-.4146,-.1378,.0501,1.0671,.0701,-.3447,-.0711,.1009,.2412,-.113,-.4029,-.0179,-.738,.2483,-.3954,-.2855,.7506,.6918,.0551,-.1887,-.1023,-.3846,.6399,-.0109,-.0964,.141,.5216,-.5942,.0348,-.4817,-.2327,-.4028,.7591,-.2468,.2009,-.1774,.1197,-.3172,-.1404,-.2402,.3878,-.3104,.2214,.1088,.6206,.0851,.2873,-.1467,-.4685,-.3169,.5633,-.4154,.0485,-.1369,-.0225,-.2121,.2044,-.4771,.0254,-.1038,.2728,-.0421,-.4729,-.312,-.1316,-.4117,.6361,-.1426,.4142,.6772,-.3992,-.3202,-.8695,.7777,-1.2139,.2714,-.3047,-.2544,-.1117,.1073,-.3812,-.0603,-.171,-.1961,.3452,-.0967,.085,.1572,.0459,-.103,-.5148,-.0785,-.2341,-.1868,-.1774,.2191,.1175,.3075,.4841,-.6704,.2546,.3314,-.2043,-.3859,.2243,-.3981,.126,.0357,.4084,.3808,.3199,.0745,-.5649,-.0976,-.6978,.333,-.2144,.186,-.247,-.5046,-.1724,.7239,-.5072,.3998,-.3318,.4399,.4277,-.1372,-.2482,.6847,.3216,-.1234,.1529,.1985,-.3892,-.4398,-.2881,-.606,-.0558,-.7712,.2519,.0047,-.6685,-.6848,-.0139,.7692,.4293,.0275,-.1583,-.1051,.0203,.5727,.0802,.47,.1878,.1703,-.2436,.0731,-.5632,-.1596,.5132,-.026,-.1029,.8127,.1594,-.2191,-.2784,-.2109,.3542,.1423,-.0495,.442,-.6351,.5285,.0475,.2724,-.087,.1471,-.2859,.1844,.1817,-.2602,.1172,-.0428,.3567,.2933,.1368,-.3135,.1325,.0396,.4265,-.5779,-1.1922,-.145,.0129,.1079,-.3696,-.3048,1.5474,-.4613,.0163,.4113,-.1835,.3638,-.2288,.5679,-.0572,-.2678,.0068,.163,.1649,.1736,.0304,.0585,.0457,.6145,-.4811,.1568,-.0295,.4733,.3979,-.1858,.2044,-.1929,-.924,.1527,.4967,-.5126,-.5057,.1497,-.6537,.9451,.6643,.3278,-.2865,-.4449,.1968,-.0342,-.1797,-.1542,.0654,.0803,-.0516,-.1106,.1955,-.1107,.3665,-.0294,-.0955,-.016,.1627,.0929,.2152,-.0618,.2553,.0413,-.4269,-.2711,.2213,-.2145,-.2213,-.4893,-.2273,-.5373,-.099,-.4433,-.1134,.3586,.6052,.1796,.0566,-.4495,.3873,.3785,.2001,.135,-.4199,.2747,-.1365,.0907,-.0191,-.2737,-.3843,.316,.1043,.276,.3436,-.1463,.2053,.441,-.479,.5476,.6268,.1891,-1.3481,.4047,.6808,-.0848,.3568,.2251,-.0447,.0687,.2835,.1414,-.2898,.0955,-.5114,.0776,.2459,.0374,-.1761,.0569,-.0145,.045,-.2291,-.487,.0319,-.283,.2396,-.2227,.0581,-.32,-.292,-.2895,.2986,.1757,-.1862,-.584,-.2406,-.0832,.1672,-.1324,.2425,-.2814,-.1039,.1095,-.6131,-.0731,-.0159,-.0352,-.0677,-.1396,-.2746,.1586,-.3343,-.3195,-.2645,-.3797,5e-4,.2589,-.1049,-.2202,-.4728,.0123,.0495,.71,.1224,-.3532,-.3228,-.3862,-.0503,.922,.1458,.0858,-.3686,.2349,-.4032,.4435,.0591,-.0964,-7e-4,-.1947,-.1611,-.6652,-.1292,-.2841,-.0694,-.6001,.1825,-.2726,.2627,-.0344,-.0522,-.3168,-.5161,-.3049,.4995,.132,.3041,-.0695,-1.1841,.2182,.1666,-.0648,-.2666,-.1887,.1203,-.1155,-.6803,.144,.111,-.0725,.0204,-.2671,.3756,.1031,.2319,.4522,.2167,-.3818,-.2223,-.0966,-.3107,-.1267,.0248,.3396,.5899,.2333,.0898,.311,.1142,.0765,-.5099,-.0366,-.0246,.2309,.1016,.1748,-.6352,-.0479,-.512,-.284,.0623,-.0584,.3757,-.1092,.073,-.3849,.0227,-.4374,.2388,.025,-.4051,-.043,-.1208,-.221,.2416,.1565,.3462,.07,-.0246,.277,.4125,.4292,-.1497,.2061,.0865,-.0644,-.0834,-.1182,.2751,.2219,.3219,.1801,-.9628,-.4324,.4286,.0454,-.0558,.023,-.2394,.2956,.1327,-.2615,-.1269,.0049,.2147,-.4716,-.4335,.4392,.0233,-.2001,-.591,-.8212,-.3987,-.0829,-.7877,.4864,-.2471,-.233,-.3962,.0699,.3527,.481,.0992,-.5672,-1.011,-.2619,-.217,.0644,.4567,-.0268,-.1333,.2884,.251,.3015,.1426,-.1438,.0589,.2394,-.1196,.2333,-.3488,-.0608,.0484,-.7022,-.3467,.3815,.3789,-.1232,-.0838,-.0733,.2179,.2016,.6439,-.1066,.5327,-.1077,-.1565,-.4864,.0687,.0367,.162,-.1575,-.3575,.081,.6327,-.0292,.1415,-.1529,-.0758,.1031,.0096,.3764,.296,.2013,-.0718,-.3736,-.2065,.2292,.9768,.0045,-.9101,.2422,-.6023,-.4177,-.4299,-.0258,.1208,.2232,-.5278,-.3058,-.9871,.2846,.0011,.2042,.0957,-.0635,.365,.3906,.2648,-.2504,-.0961,-.2735,-.6281,-.046,.1189,.1421,-.2842,1.0248,.326,-.3862,.4084,.3225,.3716,.2612,.3616,-.1261,-.1613,.4809,-.289,-.0634,-.0273,-.1348,-.87,-.4725,-.1633,.0612,.0377,-.3295,-.2445,-.3462,-.0805,-.0766,-.3754,-.1793,.3887,.1437,-1.9589,.6477,.2822,.1703,-.0087,-1.1367,-.7572,.2821,-.2431,.2382,-.6279,.0196,.078,-.2484,.1857,.3661,-.3874,.0084,.5295,.281,.0024,-.1153,-.0853,-.1669,-.4078,-.1517,-.1301,-.2895,.0775,.1255,-.1263,-.1459,-.8451,-.5161,-.3861,-.0075,-.179,-.6323,-.2755,.1175,-.2706,-.0331,.2047,.1666,-.7547,.7428,-.4035,-.0032,-.3558,.066,.2953,.0329,.0022,.1395,.0713,-.6444,-.5167,-.0751,.1313,-.2226,.4725,-.0724,.5012,.2784,.0446,-.585,-.41,.4368,.0079,.0547,.0282,.3236,.0135,-.4057,.0746,.1215,.7113,.0878,.1112,-.0335,.1564,-.2915,.2629,.1751,.5323,-.3519,-.01,-.1565,.2921,.1925,-.0362,-.3778,-.0478,-.3319,.2985,.0278,-1.053,-.0681,-.1847,.6325,.3759,-.5508,-.7435,-.3051,.2569,.0837,1.2698,.2625,-.1407,.055,-.0862,.6329,.5608,1.052,-.0063,.1724,-.3593,.1431,-.0756,.1505,-.0964,.2594,-.2204,-.0981,-.7232,-.0904,-.129,.9487,.1385,.0068,.0839,.8062,-.1957,-.119,-.241,.1865,-.3248,.404,-.1844,-.3592,-.5018,.1338,-.3269,-.0158,.209,.0532,.4373,-.1134,.7622,-.2956,-.2481,.1906,.1978,-.3811,-.0574,-.2095,.3393,-.1862,.5993,-.3355,.1445,-.7159,.4638,-.6774,-.2122,-.19,-.2392,.4405,.0075,.3119,-.2582,.0064,.2877,.0855,-.6802,.1778,-.2949,.0589,-.2949,-.0723,-.2604,-.021,-.141,.0086,.1602,-.3001,.2512,-.3422,.0621,.5211,.0024,-8e-4,.6603,-.1006,-.1693,.8769,.5795,.142,-.2938,.5659,-.1392,-.4236,.4407,.2783,-.3554,-.0224,.3737,.3921,.0826,.4492,-.1246,.083,.2712,-.027,-.0141,-.0246,-.183,-.395,-.35,-.1803,.2724,.1609,-.6046,-.3821,.607,.1009,.1139,-.3261,.5859,.2749,-.2944,-.1816,-.2813,-.3026,-.2648,.6157,.8085,.2289,.0374,.2406,-9e-4,-.1444,-.2523,-.0811,.3336,.1758,-.4895,.0696,.1649,.1229,-.0015,.0509,.1198,.0938,.0314,.5291,-.0587,-.4182,-.1657,1.1404,.1351,-.1914,.1254,-.004,.395,.245,-.1145,-.3986,-.5032,-.3532,.387,.2311,-.2801,-.1573,.1619,.1826,-.4461,.1085,.1026,-.0674,.1428,-.1776,.0134,.2951,.1401,.2635,-.6989,-.2298,-.5897,.1319,.5534,.3868,.1844,.0309,.2558,.2712,-.2001,.0302,-.2268,-.4805,.2781,-.2269,.3974,.3366,-.0463,-.2306,.2539,.196,.0824,-.5515,-.1863,-.3108,.1267,.417,.5251,-.0258,-.3174,-.0224,-.3395,-.1836,.7094,.3805,.5182,-.6559,.5873,-.1391,.1994,.4046,.3153,.1883,-.4973,.157,-.3797,-.1673,-.3901,.4507,.1702,.2514,-.0662,.0697,-.0414,-.3472,.2097,-.33,-.1905,.1042,.2624,.1578,.284,.4274,-.4089,-.8719,-.0994,-.3891,.9647,-.2335,.2236,.1925,3.5521,-.1215,-.7586,-.1047,-.5242,-.3038,.4599,.0955,.366,.5031,-.3636,1.3842,.4996,.117,.3163,-.2983,-.1067,-.0409,-.157,-.1513,-.1327,-.1339,-.7409,.3663,.7091,.5933,-1.59,.0971,1.0508,1.0302,.8056,-.9898,-.4384,-.2211,.4804,.0508,-.4163,.3402,-.174,-.742,-.2887,-.1884,.5021,.2935,-.2781,-.1999,-1.2534,.1801,.3927,.3099,.0469,-.3148,.0692,.1517,.4101,.1882,-.3762,-.0936,.3145,.0227,.1142,.6335,-.8461,.2619,.1527,-.0918,-.2006,.3136,.0669,.2202,-.2043,-.2608,-.5152,.1729,.3033,-.5295,-.1391,.1681,.1595,-.0991,-.0526,-.372,-.2602,.2498,.3066,-.4253,-.164,-.3975,.5268,.8221,1.2134,-.4528,.1683,.469,-.162,-.3394,-.3091,.0952,.6132,.3578,.1926,-.0316,.0288,-.2843,-.4664,-.2885,.3285,-.1234,-.4629,-.8228,.1211,-.1355,-.2733,-.1412,-.1103,.1099,-.0182,-.2166,.1555,.1089,.0807,.0106,1.1544,.0169,.1919,.2818,-.3606,-.3549,.8679,-.112,-.3042,-.1574,-.2721,.1089,-.2906,.044,-.3368,.1875,.2099,-.331,-.9379,-.2697,-.0888,-.0578,-.3449,-.139,-.1151,-.1874,.3073,.2625,-.6414,-.2764,-.3718,.0649,-.2246,.1304,.061,-.6725,-.2076,-.264,-.1635,-.0969,-.4193,.2651,-.4148,.1395,-.1298,-.2298,-.1379,-.1562,.0856,-.0288,.1951,.013,-.1387,-.1712,-.0659,.3174,.3785,.495,-.0692,.2168,-.2104,.8001,-.1063,.5467,-.0091,-.6176,-.0177,-.3649,.1613,-.9656,.5652,-.3815,.0074,-.1838,-.0085,-.0776,-.5776,.1884,.3405,.0156,-.1324,-.4291,.0594,.1048,.4619,.0356,.0173,.0073,-.202,.0094,.0734,-.0139,-.1352,.6491,.3182,.123,.6079,.3966,-.9562,-.2832,-.4544,-.6285,-1.9115,-.2214,.0383,.5285,.0741,.308,.1488,-.1362,.4517,-.1289,.3888,-.2296,.0374,-.1409,-.0188,-.0546,-.1468,.2691,-.1681,-.1623,.0666,-.1568,-.1258,-.2069,-.0885,-.1051,-.7527,.1964,.9022,-.2131,.7978,-.2168,-.2335,.4588,-.0825,.2323,-.6424,-.0036,.2369,-.4063,-.0212,.3776,-.0567,.2093,.0114,.2683,.1928,.2075,-.0723,.2429,.028,-.2144,.3902,-.4138,.6219,-.3522,-.0222,-.1301,.5402,.0089,-.0485,.6468,.4754,-.5039,-.3111,.2805,-.0129,.2677,.2019,.3108,.0869,-.5134,.0122,-.1804,-.2145,.2511,-.2405,-.3863,-.5546,-.1726,.3016,-.2703,-.1331,.3888,.4747,.1149,-.9438,.25,-.1335,.17,.1711,.0296,.1275,.5744,.1459,.2584,-.1428,.1114,-.0366,.6437,-.0163,-.0434,-.1148,.0873,.4805,.8033,.2361,-.0013,.2465,.3107,.001,-.6975,.2092,-.9051,.3146,.1923,.1441,.3917,-.2707,.0532,-.2671,.0939,.1561,.1547,.249,.2347,-.1583,-.4239,-.1541,.1901,.2185,-.072,-.3068,-.1485,-.1089,-.0026,-.3477,.1124,.2658,.0265,-.2378,.0948,.0293,-.0805,.2793,-.2773,.0737,-.0189,-.1776,-.3171,-.0985,-.1258,-.3637,-.0281,-.1064,-.2192,.0251,-.0653,.8856,.187,.2358,-.2028,.3576,-.5036,.0739,.3592,.0582,.1666,-.4862,-.3861,-.1209,.0227,-.0066,.8257,.097,.2762,.2356,.0725,.11,-.1472,-.4132,-.089,-.2098,-.0846,.1482,.0407,.118,-.3419,-.1258,-.4932,.313,.3439,-.4942,-.3338,.023,-.1686,-.121,.1242,.882,-.7103,-.1648,.773,-.1793,.0823,.6959,.0037,-.0094,-.0716,.182,-.0572,.4505,-.3631,.0259,-.2248,.0903,-.2318,-.2154,-.0147,-.2703,.8673,-.2281,-.0162,.0761,-.326,-.326,-.1849,.1138,.3599,.8139,.4428,-.2123,.1976,-.243,-.0569,-.0781,.1767,.2648,-.8904,-.3469,.4828,.2859,-.437,-.2321,-.1383,.1606,-.5224,-.2217,.0119,.1781,.2026,-.2512,.2681,-.6045,-.0054,.073,.0312,.3313,.0133,-.0981,.0671,-.3051,-.2863,.0507,.04,.3669,-.0827,-.0126,-.1021,.1457,-.005,.3315,.5452,-.0118,-.4011,-.3596,-.0761,-.6483,-.6658,-.2013,-.2397,-.8923,-.0252,.3449,-.0574,.1405,.0425,.1287,-.0223,-.25,-.2744,-.788,-.6204,-.4565,-.1018,-.56,.2643,.379,-.6082,-.3166,.1911,.3102,.5127,.2232,.3322,.5461,-.0913,.1687,.4256,-.6428,.2942,.332,-.1613,.0983,-.214,-.3468,.3338,-.0224,-.0469,.0851,-.7055,.1965,.3108,.3523,.4283,-.0212,-.2246,.3577,.0511,-.0796,-.4558,.0541,-.149,-.0306,.4389,.1678,.0469,-.0293,-.0278,.1033,-.2123,.322,-.2686,.8027,-.0586,-.4421,.0156,-.0282,.5324,.0482,.2089,-.1169,-.0086,.2122,-.2149,-.4654,.0571,-.3724,.2699,-.3591,.1036,-.0505,-.2712,-.4515,.0967,-.5219,-.13,.2281,.01,-.1952,-.2014,.4526,-.2634,-.1825,.2364,.0815,-.279,.0389,.291,-.1027,.2748,-.2454,-.121,-.1526,-.2433,.024,.0191,.1111,-.2334,-.6841,-.0526,-.0663,-.2088,.1094,-.3137,.2422,.1288,-.2149,.4576,.7965,-.0225,-.1745,.1064,.5877,.0208,.3371,.1121,-.3982,.7517,.5048,.0092,-.5255,-.5058,-.1102,-.7647,.1812,-.1372,.3289,-.2326,-.4982,.3696,-.0175,-.1987,-.6928,-.1173,-.1429,-.8951,.0304,-1.4156,-.6906,.6704,-.1326,.1001,-.491,-.5881,.0724,.663,.294,.2255,.2737,.6178,.512,.7429,-.1253,.1001,-.352,.3098,-.0329,.197,-.3186,.2395,-.7625,.1188,.2349,.04,-.6888,.2593,.2293,.0977,.1855,-.1708,-.4098,.1396,-.5514,.0424,.3181,.2909,.084,.0171,-.6662,-.1844,.2179,.222,-.2096,-.1437,-.248,-.1035,-.2922,.1372,-.1329,-.5988,.6353,-.2868,.869,-.2227,.0244,.0737,.2303,-.0518,-.0044,-.2207,-.2894,.1949,.0531,-.3724,-.1217,-.137,.1381,.3033,-.0821,.4182,.2551,.6095,.3453,-.1562,.2427,.2083,.0861,-.1626,-.0873,-.3271,-.5715,-.063,.4876,-.4836,.0675,-.2935,-.651,-.0618,.0838,-.1896,.1265,.1361,-.4742,-.1329,.0882,.3024,-.0111,.3124,.1419,-.2783,.1589,-.0519,-.3129,-.119,-.3343,-.5123,-.6732,-.022,-.4646,-.4815,.0136,.0748,1.1355,.2413,-.0146,.0088,-.2543,-.7049,-.2675,-.0503,.3121,-.307,-.2244,-.6264,-.4911,.5626,-.8021,-.1174,-.3203,-.1775,-.2819,.0248,-.3185,-.1249,-.188,-.1332,.211,.2009,-.0666,-.3341,-.3597,-.1863,-.1017,-.2569,.4711,-.5582,-.992,-.3588,.043,-.446,-.189,.2178,.0863,.3692,.5748,-.2849,.0708,.6535,-.3171,.2154,-.2173,.1432,-.1539,-.0302,.6423,.3532,-.139,.0967,-.3317,-.4026,.1873,-.3968,-.0483,-.1357,.1812,.3791,.5375,.5191,.2405,.1881,-.0887,.3432,-.1681,.0592,-.1626,.1298,-.0993,-.0121,.26,-.2867,.0313,.7075,.4635,.0043,.2245,.0176,-.438,-.1917,-.6555,-.0774,.3205,-.036,.3271,-.7148,.1273,-.0629,-.0194,-.2316,-.1683,-.2284,.2263,.3796,-.4399,-.6172,.3871,.2128,.3324,.3297,-.0967,-.2311,-.0502,-.1469,-.1184,-.2156,.466,-.4767,-.4721,.1225,-.4121,.4408,.0496,-.429,.3484,-.0844,-.0151,.1111,-.5519,.188,-.0578,-.3456,.2017,-.2986,-.1201,.7339,.2685,-.3181,-.0487,-.0839,-.3447,.1009,-.1218,.0277,-.5832,-.3892,.5058,-.3129,-.512,-.3638,.0217,.3232,.1649,.1993,.0994,.1247,.0573,-.5313,-.2902,.3342,-.0324,.8602,-.248,.5021,.0643,-.1433,-.222,-.1775,-.5285,-.2956,-.0354,.1131,-.0392,-.5743,-.1739,.158,-.0387,.0828,.4249,.1493,.8358,.104,.0141,-.544,.1357,-.3403,-.0341,-.0438,-.4998,-.1333,1.2136,-1.5387,.9153,.9665,-1.0827,.3513,.7089,-.4864,-.0419,.7395,.3907,.6538,.9214,-.4492,.2358,-.2859,1.2136,-.6522,.26,-1.9116,.0145,-.6973,-.1324,.0807,.5862,.3077,-1.3091,.2753,-.0481,-.5456,-.7341,.1624,.0274,-1.1716,.402,-.89,-.2779,1.7532,.035,.4523,-1.0632,-.0171,-.9538,1.5488,-.8749,.6998,.8665,.3983,-.0561,.1762,.2505,-.1206,.1708,-.6786,-.7502,.1819,-.41,.1047,.6802,.2911,.366,-.2574,.17,.2437,.1215,.8035,-.1758,.0789,.3126,.1417,.2262,.4783,.2098,.3198,.0225,.2047,-.478,-.1782,.1915,.0955,.0734,-.0197,.5354,-.079,-.4161,-.7687,-.54,-.0312,.3499,.5308,.6669,-.4375,-.2451,.3311,-.2378,.1741,-.1519,-.2517,.4493,-.0816,-.3328,-.1613,.1132,.1013,-.2018,.5291,.778,-.0594,.2037,-.1495,.1942,.6523,-.1178,-.2838,-.0087,-1.0884,-.0642,-.294,.6651,.1292,.3167,-.2116,-.0251,.1446,.0718,-.0475,-.0465,-.3231,-.5785,.1433,.2402,-.5848,.0108,.1171,.8043,.2446,.6811,-.1643,.0803,.0602,.1799,-.6303,-.112,.1281,-.0716,.9977,-.2419,.0902,-.0593,.8918,.0482,.0482,-.2663,-1.0042,.0193,.6765,.7522,.1467,-1.5459,.8423,-.868,.7037,.461,.3745,-.2316,1.6575,-.4708,-.9171,.6716,-.2026,-.4751,-.2105,-1.0631,.0995,.1777,-.7882,.3664,-.4353,-.0771,.1899,-.4669,-.296,.9955,-.5341,.8462,-.7411,-.0903,-.0495,-1.5383,-.7518,.2938,-.1207,-.0977,-.3196,-.3081,-.2627,-.3068,.1416,.2334,-.5416,-.1115,.0576,-.0278,-.5778,.1044,.0999,.3749,.0735,.173,-.4189,-.3794,-.2424,.2014,.0032,.2234,.0448,.1381,.0608,-.038,.0941,.3175,.1824,-.568,-.1615,-.2103,.1405,.3769,-.3415,.033,-.1477,-.1282,-.0232,.0478,.341,.3608,-.2513,.1277,.184,.2757,-.3148,-.2585,-.0962,-.1266,-.0632,-.0218,-.4506,.4116,-.1629,.1988,-.0846,-.725,.3107,-.0877,-.0328,-.2813,.207,.1387,.2078,-.102,-.2051,.2562,-.4523,-.3973,-.2282,.1482,-.1832,-.3949,.1105,-.425,-.3311,-.0624,-.0624,-.3527,-.2214,.4838,-.2144,.6003,-.443,.2135,.1486,-.488,.2301,.3145,-.8641,.1618,-.2929,.053,-.2989,-.3443,-.0103,-.2997,.3481,.8935,.038,.1008,.4171,-.1023,.3439,.0989,-.1995,-.7214,.7228,.4788,.3737,-.3421,-.1691,-.5252,.6436,.0838,.7023,-.638,-.0119,-.223,-.1118,-.746,-.3002,.3504,-.17,-.1857,.2374,-.3755,.6044,-.1214,.7472,.2475,.2501,-.2449,.3443,-.1465,.074,.8647,-.7288,-.1583,-.362,-.3078,-.3895,.0595,-.5246,.1601,-.0129,.1922,-.3256,-.4007,-.5406,-.1679,-.0166,.3741,.1036,-.046,.3447,-.0646,-.2203,-.2395,-.2879,.116,-.1694,-.1973,.4204,.1484,-.0178,.063,-.4215,.4206,.2773,.4305,.1971,-.4637,.0864,.5578,-.0125,.1426,.1699,.1223,.5515,.1136,-.1998,.4654,.157,.1797,.0324,-.0646,-.0633,.4125,-.1418,-.3976,.5447,-.0165,.5202,.247,-.0486,.8432,.2815,.0648,.4974,-.2737,-.4945,-.2111,.1998,-.4268,.4595,-.4539,-.1262,-.1038,.3081,.2099,.2535,.2783,.4136,.0564,-.186,.11,.1691,-.0355,-.2624,-.1113,.2637,-.0583,.3676,.4148,-.4564,.1176,-.1756,-.035,-.4468,-.1262,-.1919,-.0858,-.1053,.5023,.0936,.0744,.1304,-.7501,-.6001,-.1479,-.297,-.3975,.3105,.4425,.0166,-.0504,.2847,.3771,-.3695,.0765,-.0743,-.2093,-.0296,.0059,-.1058,-.0935,.3658,-.0053,.2167,-.7225,-.1773,.0811,.1065,.0111,.0991,.0137,-.1931,-.5379,.3012,8e-4,-.5339,-.5304,.1084,.4395,-.0658,.5139,.222,-.1782,-.2841,-.0555,.2452,-.0858,.4977,.1901,1.1591,-.3255,-.4773,.0608,-.1262,-.1863,-.0757,.6818,.2672,-.5933,.1351,1.2284,.1126,.5602,-.6585,-.2243,.1134,.1895,-.5411,-.0919,-.7274,.0797,-.8626,-.6789,-.6835,.7376,-.2637,.5158,-.0448,-.2526,-.879,.1449,-.2842,-.2786,-.0235,.0035,-.8596,.2808,.4225,1.9425,.1865,.1474,-.6539,.4511,1.0151,.5314,-.5853,.0705,-.0431,-.3733,-.0057,.5275,-.1447,.2799,-.1409,-.6389,.0446,.1214,.1688,-.3542,-.8495,.4014,-.4298,-.5624,-.1416,.1333,-.1737,.5181,.0224,.3729,.4401,.0992,-.1691,-.3335,.0017,-.0702,.6641,.6164,-.2278,-.0892,-.0108,-.3175,.3102,.1694,.3961,-.0644,.1573,.1901,.1668,.3019,-.2625,.0534,.5168,.1454,-.172,-.4499,.9646,.5952,-.4134,.5039,.4318,-.0056,.366,.5739,.28,-.4388,-.5119,.3709,.008,.1176,-.4619,-.0825,.1948,.2744,-.414,.0122,-.7244,-.2893,-.1587,.1623,.1407,.4715,.3685,-.6406,-.2397,-.0599,-.1411,-.1212,-.1279,.1418,-.1094,-.2956,-.6667,-.4204,.1399,.0318,-.1626,.2044,.2144,.0117,.5117,-.1716,.1583,-.1121,.0331,-.334,.2198,-.3694,.3834,.156,-.3385,-.2045,.1787,-.3775,.3144,.0269,.4886,-.2729,-.375,.0016,-.2092,-.3233,.2622,.0118,.1475,-.1026,-.3797,.1155,.3201,.3123,-.3252,-.3579,.2267,.0782,-.1021,.1279,.0775,.0658,.0448,.2271,-.0419,-.102,-.4625,-.064,-.0442,.3935,-.0408,-.1698,.15,-.8708,-.3788,-.189,.2791,.4827,-.3855,.1648,.7597,-.8587,1.4752,-.0348,-.0378,.4385,.1036,1.1975,.1775,-.0139,-.2238,.5871,-.1753,.6488,-1.1056,-.6094,-1.3496,-.0491,-1.464,.241,-.0302,.6925,-.4754,-1.5749,.2688,-.3666,-.6593,-.9184,.5315,.1008,-.7579,.3333,-1.467,-.0382,1.2943,.1052,-.0204,-.8542,-.065,-.4071,1.0003,.0152,-.3233,.4338,-.2682,-.3275,-.0754,.0513,-.4123,-.6243,-.3569,.5592,-.1874,.0816,.4877,.466,.4637,.0619,-.2962,-.1971,-.385,-.0859,-.2407,-.0256,-1.5852,.5031,-.6328,.2414,-.1553,.4107,-.2167,-.4407,-.4341,.15,-.4675,.2037,-.1191,-.1023,-.2751,.1317,-.402,.368,.8351,.5278,.4069,.0483,-.0231,.2355,.4514,-.0589,-.4141,-.3175,.5955,.5472,.1922,-.0529,.1374,-.135,.3567,.3675,1.2816,-.2273,.6025,-.1695,.2555,1.3649,-.0455,-.8496,.7003,.7545,.7892,.0782,-.9928,-.042,.5828,-.0427,.3988,.214,.1146,.3206,.3463,-.4842,.519,-.0547,-.4423,.2403,-.6529,-.9016,-.6256,.7087,-2.1985,.4938,-.7186,.6819,-.0762,-.2355,-.2688,-.1384,-.3304,-.5917,-.4335,.297,.0166,.1855,.6121,.0413,.5163,.1246,.352,-.2308,-.0438,.4469,-.0196,-.3592,-.2391,.0073,.6638,.9851,.1752,.3263,-.3145,.4402,.5343,-.0552,.5096,-.2836,.668,.2274,-.2531,-.2283,.0665,-.2482,.2776,.6944,.1236,-.0125,-.686,-.3817,.2319,-.4372,-.5635,.0891,.6987,-.0165,.0073,.4953,-.1985,-.3436,.1207,-.2119,.2283,.2095,-.869,.056,-.0383,-.1347,-.0749,-.2724,.0457,.1741,-.2235,.4824,-.1568,-.0579,-.5898,-.2195,-.0479,-.14,-.5816,.1593,-.173,.1027,.1829,-.2993,-.3327,.7608,-.172,-.5499,-.2076,-.1409,-.1689,-.0809,-.0027,-.2239,-.1708,.4915,.523,.1513,.801,.1197,.5277,-.0048,-.0114,.0287,.1682,.0986,-.1369,.0663,.4944,.2018,-.355,-.1025,-.1181,-.1721,-.0507,.2,.4797,-.2173,.2034,.0818,.3183,-.3387,-.4901,-.6403,.5599,-.4074,-.4381,.3499,.2097,-.0767,-.2172,-.1487,-.1007,.3441,-.0811,-.4295,.0026,-.0351,-.0137,.039,-.2811,-.0746,-.1461,-.3059,.2695,-.2243,-.8003,.0306,.1389,-.223,.0745,.0028,.0165,-.1697,-.259,-.6412,-.33,-.3826,.0306,-.4731,.5063,-.0401,.049,-.3251,-.254,-.1239,-.0444,-.9509,-.1242,-.1633,-.3753,-.0091,.636,-.1005,.6273,-.1379,-.2861,-.2767,-.1377,.5263,-.0708,-.421,-.1934,-.8239,-.3288,-.3044,-.1284,-.3955,-.447,.1341,-.353,-.2153,.0597,-.8707,-.5222,-.5474,.0211,-.4666,-.75,-.0468,-.3584,.1802,-.3357,-.0576,.0742,-.4303,-.4034,-.2875,-.4132,-.399,.1272,-.1398,.229,.1817,.1005,.0043,.4207,-.3008,-.5483,-.0258,-.3413,-.2149,-.3656,-.4178,.3268,.1793,.0014,.547,-.3357,.2259,.0948,-.0761,.3839,.1434,-.1438,.4146,-.2405,.1757,-.0178,-.3064,.1576,-.1092,-.1735,.4856,.1185,.4395,.2703,-.3625,.0637,-.1403,.1617,.056,-.481,-.306,-.1129,-.1209,.2957,-.5646,-.169,.247,-.2256,-.1775,-.1653,-.1072,.0638,.4882,-.6038,.2596,-.5289,-.2283],ws=sn[0],Ua=sn[1],sS={moored:"ピット",rush:"ピット離れ",buoy:"ブイ",back:"バック",uturn:"回り込み",approach:"進入",race:""},oS=`
#race-hud .r-top { display: flex; align-items: center; gap: 8px; }
#race-hud .r-dial { width: 54px; height: 54px; flex: none; filter: drop-shadow(0 1px 3px rgba(0,0,0,.5)); }
#race-hud .r-pre { font-size: 13px; font-weight: 800; margin: 2px 0 4px; }
#race-hud .r-pre.hot { color: #ffd34d; }
#race-hud .r-me { font-size: 15px; font-weight: 900; margin: 0 0 4px; }
#race-hud .r-me small { font-size: 12px; font-weight: 700; opacity: .9; }
#race-hud .r-warn { font-size: 13px; font-weight: 900; color: #ff6a4d; margin: 0 0 4px; }
#race-hud .r-entry { display: flex; align-items: center; gap: 2px; margin: 0 0 6px; font-size: 11px; font-weight: 800; }
#race-hud .r-entry .lane { display: inline-grid; place-items: center; width: 18px; height: 18px; border-radius: 3px; font-weight: 900; font-size: 11px; text-shadow: none; border: 1px solid rgba(255,255,255,.5); }
#race-hud .r-entry i { font-style: normal; opacity: .8; margin: 0 3px; }
#race-hud .r-order small.st { opacity: 1; font-weight: 800; }
#r-announce { position: fixed; z-index: 4; left: 50%; top: 22%; transform: translateX(-50%); font-size: 18px; font-weight: 900; white-space: nowrap;
  background: rgba(0,0,0,.5); padding: 6px 14px; border-radius: 12px; text-shadow: 0 1px 3px rgba(0,0,0,.6); pointer-events: none; opacity: 0; transition: opacity .3s; }
#r-announce.show { opacity: 1; }
`;function rS(){let i="";for(let t=0;t<12;t++){const e=t/12*Math.PI*2;i+=`<line x1="${(50+Math.sin(e)*36).toFixed(1)}" y1="${(50-Math.cos(e)*36).toFixed(1)}" x2="${(50+Math.sin(e)*42).toFixed(1)}" y2="${(50-Math.cos(e)*42).toFixed(1)}" stroke="#f2c230" stroke-width="${t%3?2:4}"/>`}return`<svg class="r-dial" viewBox="0 0 100 112" aria-hidden="true">
  <circle cx="22" cy="5" r="4" class="lamp2" fill="#444"/><circle cx="78" cy="5" r="4" class="lamp2" fill="#444"/>
  <circle cx="50" cy="56" r="46" fill="#111" stroke="#555" stroke-width="3"/>
  <g transform="translate(0 6)">${i}
    <text x="80" y="35" font-size="13" font-weight="900" fill="#fff" text-anchor="middle">10</text>
    <text x="28" y="83" font-size="13" font-weight="900" fill="#fff" text-anchor="middle">5</text>
    <line class="h60" x1="50" y1="50" x2="50" y2="14" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M50 50 L50 4 A46 46 0 0 0 4 50 Z" fill="#2a2a2a"/>
    <line class="h12" x1="50" y1="50" x2="50" y2="10" stroke="#ffcc22" stroke-width="4" stroke-linecap="round"/>
    <circle cx="50" cy="50" r="4" fill="#ddd"/>
  </g>
  <rect x="36" y="104" width="12" height="7" rx="2" class="sigw" fill="#333"/><rect x="52" y="104" width="12" height="7" rx="2" class="sigb" fill="#333"/>
</svg>`}function bp({renderer:i,scene:t,camera:e,sun:n,waves:s,player:o}){var kt;Us!=="drift"&&yc("drift");const r=o?["hud","start","b-prop","b-wave","prop-panel","rotate"]:["hud","lever","lean-pad","steer-pad","wheel","start","touch","b-prop","b-wave","b-center","prop-panel","rotate"];for(const C of r)(kt=document.getElementById(C))==null||kt.setAttribute("hidden","");const a=document.createElement("style");a.textContent=oS,document.head.appendChild(a);const c=document.createElement("div");c.id="race-hud",c.innerHTML=`<div class="r-top">${rS()}<div><div class="r-clock" id="r-clock"></div><div class="r-pre" id="r-pre"></div></div></div><div class="r-me" id="r-me" hidden></div><div class="r-warn" id="r-warn" hidden></div><div class="r-entry" id="r-entry"></div><div class="r-lap" id="r-lap"></div><div class="r-speed" id="r-speed" hidden></div><ol class="r-order" id="r-order"></ol>`,document.body.appendChild(c);const l=document.createElement("div");l.id="r-announce",document.body.appendChild(l);const u=document.getElementById("r-clock"),h=document.getElementById("r-pre"),d=document.getElementById("r-me"),f=document.getElementById("r-warn"),p=document.getElementById("r-entry"),x=document.getElementById("r-lap"),g=document.getElementById("r-speed"),m=document.getElementById("r-order"),v=c.querySelector(".r-dial"),y=v.querySelector(".h60"),_=v.querySelector(".h12"),L=v.querySelectorAll(".lamp2"),T=v.querySelector(".sigw"),M=v.querySelector(".sigb"),P=document.getElementById("banner"),b=o==null?void 0:o.controls;b&&(c.classList.add("playing"),g.hidden=!1,d.hidden=!1,document.getElementById("touch").hidden=!1,document.getElementById("lever").hidden=!1,document.getElementById("b-center").hidden=!b.tiltActive,document.getElementById("b-center").onclick=()=>b.recenter(),rp(b));const w=new URLSearchParams(location.search),N=w.get("entry")==="fixed"?"fixed":"free",O=w.get("pitout")?Number(w.get("pitout")):void 0,U=new Sp(s,{humanLane:o==null?void 0:o.lane,entry:N,pitOut:O}),V=U.prestart,B=U.visual,X=new xu(s),Q=vu();t.add(X.mesh,Q);const j=new Mu(B);t.add(j.group);const pt=new iS(B);t.add(pt.group);const vt=new Su(B);t.add(vt.points),X.hide(Q,vt.points);const Mt=()=>vt.resize(window.innerHeight,e.fov,i.getPixelRatio());window.addEventListener("resize",Mt);const lt=U.boats.map(C=>{const at=pu(C.lane);t.add(at.root);const $=new yu(B);return t.add($.mesh),X.hide($.mesh),Object.assign(C,{view:at,foam:$})}),ht=lt.find(C=>C.human)??null;let Y=new Set,I=0;function z(C){l.textContent=C,l.classList.add("show"),I=4}function k(){U.reset();for(const C of lt)C.foam.clear();vt.clear(),P.classList.remove("show"),l.classList.remove("show"),Y=new Set,b&&(b.lever=0)}k(),U.onFinish=C=>{const at=C.late??[],$=ht?ht.cpu.flying?"　あなた: F（返還欠場）":at.includes(ht.lane)?"　あなた: L（返還欠場）":ht.cpu.capsized?"　あなた: 転覆":`　あなた: ${C.order.indexOf(ht.lane)+1}着`:"",st=[...C.flying.map(_t=>`F${_t}`),...at.map(_t=>`L${_t}`)].join(" ");P.textContent=C.cancelled?`レース不成立（${st}）${$}`:`${C.order.join("-")}　${C.move}${st?`　${st}`:""}${$}`,P.classList.add("show"),P.classList.toggle("small",!!ht||!!st)};const Z=ht?["追従","低い追従","1マーク観客席","中継","上空","2マーク上空"]:["オート","1マーク観客席","中継","上空","2マーク上空","先頭追従"];let rt=0;const ct=document.getElementById("b-cam"),dt=()=>ct.textContent=`視点:${Z[rt]}`;dt(),ct.onclick=()=>{rt=(rt+1)%Z.length,dt()};const ot=document.getElementById("b-reset");ot.textContent="もう一度",ot.onclick=k;const wt="boatgame.cpuBrain";let F=!1;try{localStorage.getItem(wt)==="rule"&&(F=!1)}catch{}const St=document.createElement("button");(()=>{U.setPolicy(F?wp:null),St.textContent=`CPU:${F?"学習":"ルール"}`})(),St.onclick=()=>{};const Yt="boatgame.cpuControl";let zt=!!wo;try{localStorage.getItem(Yt)==="rule"&&(zt=!1)}catch{}const se=document.createElement("button"),Ut=()=>{U.setControl(zt?wo:null),se.textContent=`操作:${zt?"学習":"ルール"}`};Ut(),se.onclick=()=>{if(wo){zt=!zt;try{localStorage.setItem(Yt,zt?"learned":"rule")}catch{}Ut(),k()}},wo&&document.getElementById("buttons").appendChild(se);const D=document.createElement("button");D.textContent=ht?"メニュー":"自分で走る",D.onclick=()=>{location.hash="",location.reload()},document.getElementById("buttons").appendChild(D);for(const C of document.querySelectorAll("#buttons button"))C.addEventListener("pointerdown",at=>at.stopPropagation());const E=new A,q=new A,ft=new A,mt=new A(0,0,1),ut=new A,Vt=new A(0,0,-1.75),At=new A,yt=new A,Zt=new cu;let xt=!0;const It=Number(w.get("ff")??NaN);i.setAnimationLoop(()=>{if(U.clock<It){for(;U.clock<It;)Ht(1/60);Zt.getDelta()}const C=Math.min(Zt.getDelta(),.05);b==null||b.update(C),Ht(C),Dt(C)});function Ht(C){U.humanInput=(b==null?void 0:b.input)??null,U.step(C)&&X.updateWake(U.wake.render)}const gt=C=>`<span class="lane" style="background:${Sc[C-1]};color:${C===1||C===5?"#111":"#fff"}">${C}</span>`,tt=C=>`${Math.floor(C/60)}:${(C%60).toFixed(1).padStart(4,"0")}`;function bt(C,at){const $=C<bl?0:Math.min(1,(C-bl)/60)*360;y.setAttribute("transform",`rotate(${$.toFixed(1)} 50 50)`),y.style.display=C>hr||C>0?"none":"";const st=Math.min(0,Math.max(C,hr));_.setAttribute("transform",`rotate(${((st%12+12)%12/12*360).toFixed(1)} 50 50)`);for(const Rt of L)Rt.setAttribute("fill",C<bl?"#ff5a3d":"#444");const _t=C>=hr&&C<0&&C*2%1>-.5;T.setAttribute("fill",_t?"#fff":"#333"),M.setAttribute("fill",_t?"#3d8bff":"#333"),j.setClock(st),C<V.pitOut?(u.textContent=`ピットアウトまで ${(V.pitOut-C).toFixed(1)}`,u.classList.toggle("near",C>V.pitOut-5),h.textContent=C>=b0?"♪ ファンファーレ":"係留中",h.classList.toggle("hot",C>=b0)):C<0?(u.textContent=C<-15?`スタートまで ${tt(-C)}`:`大時計 ${(-C).toFixed(1)}`,u.classList.toggle("near",C>-5),h.textContent=C<V.pitOut+4?"ピットアウト！":C<hr?"待機行動":"起こし",h.classList.toggle("hot",C<V.pitOut+4||C>=hr)):(u.textContent=tt(C),u.classList.remove("near"),h.textContent="");const K=[...V.boats].sort((Rt,ue)=>Rt.course-ue.course),Et=C<0?K.filter(Rt=>Rt.slow).length:V.nSlow,Wt=V.finalCourse,ee=Wt??K.map(Rt=>Rt.lane);if(p.innerHTML=C>=V.pitOut+4&&C<25?`進入${Wt?"":"（予定）"}&nbsp;`+ee.map((Rt,ue)=>(ue===Et?"<i>/</i>":"")+gt(Rt)).join(""):"",ht){const Rt=V.get(ht.lane),ue=Wt?Wt.indexOf(ht.lane)+1:Rt.course,ge=!Wt&&C>V.pitOut?Rt.course<=Et?"スロー":"ダッシュ":"",Pt=Rt.st!==null||Rt.late?`　ST ${Cl(Rt.st,Rt.late)}`:"";d.innerHTML=C<V.pitOut?`あなた: ${ht.lane}号艇 <small>合図まで動けません</small>`:`あなた: ${ue}コース${Wt?"":"（予定）"}<small>${ge?" "+ge:""}</small>${Pt}${Rt.flying||Rt.late?" <small>返還欠場</small>":""}`;const ne=V.violations.filter(Me=>Me.lane===ht.lane&&C-Me.clock<4).at(-1);f.hidden=!ne,ne&&(f.textContent=`待機行動違反: ${ne.kind}`)}for(const Rt of V.boats){const ue=`${Rt.lane}${Rt.flying?"F":Rt.late?"L":""}`;if((Rt.flying||Rt.late)&&!Y.has(ue)){Y.add(ue);const ge=V.boats.filter(Pt=>Pt.flying||Pt.late);z(ge.map(Pt=>`${Pt.lane}号艇 ${Pt.flying?"フライング":"出遅れ"}`).join("・")+"　返還欠場"+(ge.length>=5?"　レース不成立":""))}}I>0&&(I-=at)<=0&&l.classList.remove("show")}function Dt(C){var ge;const at=U.t,$=U.clock;for(const Pt of lt){if(Pt.view.root.visible=Pt.foam.mesh.visible=!Pt.removed,Pt.removed)continue;mu(Pt.view,Pt.ph,C),ut.set(-1,0,0).applyQuaternion(Pt.ph.quat),Pt.ph.toWorld(Vt,At);const ne=Pt.ph.speed(),Me=1+.8*Math.max(Pt.ph.propState.cav,Pt.ph.propState.vent);Pt.ph.propImmersion>.2&&ne>1&&Pt.foam.add(at,At,ut,Math.min(1,ne/8)*Me),Pt.foam.update(at),vt.emit(C,at,Pt.ph,110)}vt.step(C,at),X.update(at,e.position),j.update(at),pt.update(at),bt($,C);const st=U.order(),_t=st[0];if(x.textContent=U.inPrestart?"":_t.cpu.finished?"ゴール":`${Math.min(Vo,Math.max(1,_t.cpu.laps+1))}周目 / ${Vo}周`,m.innerHTML=st.map((Pt,ne)=>{const Me=Pt.lane,fe=V.get(Me);let pe;return U.inPrestart?pe=`<small>${fe.course}コース ${$>V.pitOut?sS[fe.phase]+(fe.launched?" 起こし":""):""}</small>`:Pt.cpu.capsized?pe="<em>転覆</em>":fe.flying||fe.late?pe=`<em>${Cl(fe.st,fe.late).slice(0,1)} 欠場</em>`:Pt.cpu.finished?pe=`<small>${Pt.cpu.finishTime.toFixed(1)}s</small>`:$<12&&fe.st!==null?pe=`<small class="st">ST ${Cl(fe.st)}</small>`:pe=`<small>${Math.max(0,Pt.cpu.progress/Si).toFixed(1)}周${Pt.cpu.tactic?" "+Pt.cpu.tactic:""}</small>`,`<li${Pt===ht?' class="me"':""}><b>${U.inPrestart?fe.course:ne+1}</b>${gt(Me)}${pe}</li>`}).join(""),ht&&b){g.textContent=`${(ht.ph.speed()*3.6).toFixed(0)} km/h`,ap(b,b.input.steer);const Pt=ht.ph.legForce,ne=Math.min(1,Math.hypot(Pt.x,Pt.y-Ai*9.81,Pt.z)/(Ai*9.81*2));document.getElementById("lean-pad").style.setProperty("--kick",ne.toFixed(2))}let K=40;const Et=_t.ph.origin,Wt=lt.filter(Pt=>!Pt.removed);yt.set(0,0,0);for(const Pt of Wt)yt.add(Pt.ph.origin);yt.multiplyScalar(1/Math.max(1,Wt.length));const ee=Math.max(12,...Wt.map(Pt=>Math.hypot(Pt.ph.origin.x-yt.x,Pt.ph.origin.z-yt.z)+6));let Rt=Z[rt];if(Rt==="オート"&&(Rt=$<-14?"2マーク上空":$<6?"中継":"1マーク観客席"),ht&&(Rt==="追従"||Rt==="低い追従")){const Pt=ht.ph.vel,ne=Math.hypot(Pt.x,Pt.z);ht.ph.forward(ut);const Me=new A(ut.x,0,ut.z).normalize(),fe=Math.min(.7,Math.max(0,(ne-2)/4)*.7);ne>.1&&Me.multiplyScalar(1-fe).add(new A(Pt.x/ne,0,Pt.z/ne).multiplyScalar(fe)).normalize(),mt.lerp(Me,xt?1:1-Math.exp(-C*3)).normalize();const pe=Rt==="低い追従",Ie=ht.ph.origin;E.copy(Ie).addScaledVector(mt,pe?-4.2:-7).add(new A(0,pe?1.5:3.2,0)),q.copy(Ie).addScaledVector(mt,2.5).add(new A(0,.6,0)),K=window.innerWidth<window.innerHeight?75:60}else if(Rt==="1マーク観客席")K=30,E.set(-58,16,ws.z-22),q.set(ws.x-4,0,ws.z+4);else if(Rt==="中継"){const Pt=U.inPrestart||$<3,ne=Pt?yt:Et;Pt?E.set(-44,38,Math.max(-230,Math.min(150,ne.z+45))):E.set(-55,31,Math.max(-150,Math.min(150,ne.z*.75))),q.copy(ne);const Me=e.position.distanceTo(ne);K=Math.max(5,Math.min(60,2*Math.atan((Pt?ee:10)/Math.max(1,Me))*180/Math.PI))}else if(Rt==="上空")E.set(ws.x,120,ws.z-60),q.set(ws.x,0,ws.z-12),K=50;else if(Rt==="2マーク上空"){const Pt=Math.max(Ua.z-75,Math.min(Ua.z+30,yt.z));E.set(Ua.x-48,70,Pt+50),q.set(Ua.x+8,0,Pt-8),K=50}else{const Pt=_t.ph.vel,ne=Math.hypot(Pt.x,Pt.z);ne>2&&mt.lerp(new A(Pt.x/ne,0,Pt.z/ne),1-Math.exp(-C*3)).normalize(),E.copy(Et).addScaledVector(mt,-9).add(new A(0,3.2,0)),q.copy(Et).addScaledVector(mt,3),K=window.innerWidth<window.innerHeight?75:60}const ue=xt?1:1-Math.exp(-C*3);e.position.lerp(E,ue),ft.lerp(q,xt?1:1-Math.exp(-C*5)),e.lookAt(ft),Math.abs(e.fov-K)>.01&&(e.fov+=(K-e.fov)*(xt?1:1-Math.exp(-C*4)),e.updateProjectionMatrix(),Mt()),xt=!1,n.position.copy(ft).addScaledVector(kr,30),n.target.position.copy(ft),n.shadow.camera.left=n.shadow.camera.bottom=-14,n.shadow.camera.right=n.shadow.camera.top=14,n.shadow.camera.updateProjectionMatrix(),(ge=t.userData.sky)==null||ge.position.copy(e.position),X.renderPasses(i,t,e),i.render(t,e)}}class aS{constructor(t,e,n){S(this,"water");S(this,"farWater");S(this,"course");S(this,"effects");S(this,"boats");S(this,"session");S(this,"right",new A);S(this,"stern",new A(0,0,-1.75));S(this,"sternW",new A);S(this,"center",new A);S(this,"fwd",new A);this.session=e;const s=e.visual;this.water=new xu(n),this.farWater=vu(),t.add(this.water.mesh,this.farWater),this.course=new Mu(s),t.add(this.course.group),this.effects=new Su(s),t.add(this.effects.points),this.water.hide(this.farWater,this.effects.points),this.boats=e.boats.map(o=>{const r=pu(o.lane);t.add(r.root);const a=new yu(s);return t.add(a.mesh),this.water.hide(a.mesh),{race:o,view:r,foam:a}})}resize(t,e,n){this.effects.resize(t,e,n)}clear(){for(const t of this.boats)t.foam.clear();this.effects.clear()}wakeUpdated(){this.water.updateWake(this.session.wake.render)}update(t,e){const n=this.session.t;for(const o of this.boats){const r=o.race.ph;mu(o.view,r,t),this.right.set(-1,0,0).applyQuaternion(r.quat),r.toWorld(this.stern,this.sternW);const a=r.speed(),c=1+.8*Math.max(r.propState.cav,r.propState.vent);r.propImmersion>.2&&a>1&&o.foam.add(n,this.sternW,this.right,Math.min(1,a/8)*c),o.foam.update(n),this.effects.emit(t,n,r,110)}this.effects.step(t,n),e.getWorldDirection(this.fwd);const s=Math.hypot(this.fwd.x,this.fwd.z)||1;this.center.set(e.position.x+this.fwd.x/s*60,0,e.position.z+this.fwd.z/s*60),this.center.x=Math.max(Bt.x0+40,Math.min(Bt.x1-20,this.center.x)),this.center.z=Math.max(Bt.z0+20,Math.min(Bt.z1-20,this.center.z)),this.water.update(n,this.center),this.course.update(n),this.course.setClock(this.session.clock)}aimSun(t,e,n,s=80){t.position.copy(e).addScaledVector(kr,s),t.target.position.copy(e);const o=t.shadow.camera;(o.right!==n||o.far!==s*2)&&(o.left=o.bottom=-n,o.right=o.top=n,o.far=s*2,o.updateProjectionMatrix())}render(t,e,n){this.water.renderPasses(t,e,n),t.render(e,n)}}const U0=1.6,F0=1.4,cS=3,lS=.3,O0=1.8;class hS{constructor(t,e){S(this,"pos",new A);S(this,"yaw",0);S(this,"pitch",0);S(this,"enabled",!0);S(this,"speed",0);S(this,"eyeY",0);S(this,"bob",0);S(this,"vel",new Ct);S(this,"keys",new Set);S(this,"stick",{id:-1,ox:0,oy:0,x:0,y:0});S(this,"look",{id:-1,x:0,y:0,moved:0,mouse:!1});S(this,"el");S(this,"stickBase");S(this,"stickKnob");S(this,"world");S(this,"off",[]);this.el=t,this.world=e,t.style.touchAction="none",this.stickBase=document.createElement("div"),this.stickBase.className="av-stick",this.stickKnob=document.createElement("div"),this.stickKnob.className="av-knob",this.stickBase.appendChild(this.stickKnob),t.appendChild(this.stickBase),this.showStick(!1);const n=(s,o,r,a)=>{s.addEventListener(o,r,a),this.off.push(()=>s.removeEventListener(o,r,a))};n(t,"pointerdown",s=>this.down(s)),n(window,"pointermove",s=>this.moveP(s)),n(window,"pointerup",s=>this.up(s)),n(window,"pointercancel",s=>this.up(s)),n(document,"mousemove",s=>{document.pointerLockElement!==t||!this.enabled||this.turn(s.movementX*.0025,s.movementY*.0025)}),n(window,"keydown",s=>{uS(s)||(this.keys.add(s.code),(s.code.startsWith("Arrow")||s.code==="Space")&&s.preventDefault())}),n(window,"keyup",s=>this.keys.delete(s.code)),n(window,"blur",()=>this.keys.clear())}dispose(){for(const t of this.off)t();this.stickBase.remove(),document.pointerLockElement===this.el&&document.exitPointerLock()}place(t,e,n,s,o=0){this.pos.set(t,e,n),this.yaw=s,this.pitch=o,this.eyeY=e+U0,this.vel.set(0,0)}update(t){let e=0,n=0,s=!1;if(this.enabled){const m=this.keys;(m.has("KeyW")||m.has("ArrowUp"))&&(e+=1),(m.has("KeyS")||m.has("ArrowDown"))&&(e-=1),m.has("KeyD")&&(n+=1),m.has("KeyA")&&(n-=1),m.has("ArrowLeft")&&(this.yaw+=O0*t),m.has("ArrowRight")&&(this.yaw-=O0*t),s=m.has("ShiftLeft")||m.has("ShiftRight");const v=Math.hypot(e,n);if(v>1&&(e/=v,n/=v),this.stick.id>=0){const _=this.stick.x/55,L=-this.stick.y/55,T=Math.hypot(_,L);if(T>.12){const M=Math.min(1,T);n=_/T*M,e=L/T*M,s=T>1.5}}}const o=s?cS:F0,r=Math.sin(this.yaw),a=Math.cos(this.yaw),c=(-r*e+a*n)*o,l=(-a*e-r*n)*o,u=1-Math.exp(-t/.15);this.vel.x+=(c-this.vel.x)*u,this.vel.y+=(l-this.vel.y)*u;let h=this.vel.x*t,d=this.vel.y*t;const f=this.pos.clone(),p=Math.max(1,Math.ceil(Math.hypot(h,d)/.2));h/=p,d/=p;for(let m=0;m<p;m++)this.world.move(this.pos,h,d,lS);const x=Math.hypot(this.pos.x-f.x,this.pos.z-f.z);this.speed=x/Math.max(t,1e-4),x<Math.hypot(h*p,d*p)*.5&&this.vel.multiplyScalar(.5),this.bob+=x*1.6*Math.PI;const g=this.pos.y+U0+Math.sin(this.bob)*.018*Math.min(1,this.speed/F0);this.eyeY+=(g-this.eyeY)*(1-Math.exp(-t*14))}apply(t){t.position.set(this.pos.x,this.eyeY,this.pos.z),t.rotation.set(this.pitch,this.yaw,0,"YXZ")}turn(t,e){this.yaw-=t,this.pitch=Math.max(-1.35,Math.min(1.35,this.pitch-e))}showStick(t,e=0,n=0){this.stickBase.style.display=t?"block":"none",t&&(this.stickBase.style.left=`${e}px`,this.stickBase.style.top=`${n}px`,this.stickKnob.style.transform="translate(-50%, -50%)")}down(t){if(!this.enabled)return;const e=window.innerWidth,n=window.innerHeight,s=t.pointerType!=="mouse";if(s&&this.stick.id<0&&t.clientX<e*.45&&t.clientY>n*.3)this.stick={id:t.pointerId,ox:t.clientX,oy:t.clientY,x:0,y:0},this.showStick(!0,t.clientX,t.clientY);else if(this.look.id<0){if(!s&&t.button!==0)return;this.look={id:t.pointerId,x:t.clientX,y:t.clientY,moved:0,mouse:!s}}t.preventDefault()}moveP(t){if(t.pointerId===this.stick.id){this.stick.x=t.clientX-this.stick.ox,this.stick.y=t.clientY-this.stick.oy;const e=55,n=Math.hypot(this.stick.x,this.stick.y),s=n>e?e/n:1;this.stickKnob.style.transform=`translate(calc(-50% + ${this.stick.x*s}px), calc(-50% + ${this.stick.y*s}px))`,this.stickBase.classList.toggle("run",n>e*1.5)}else if(t.pointerId===this.look.id){const e=t.clientX-this.look.x,n=t.clientY-this.look.y;this.look.x=t.clientX,this.look.y=t.clientY,this.look.moved+=Math.abs(e)+Math.abs(n),this.enabled&&this.turn(e*(this.look.mouse?.004:.006),n*(this.look.mouse?.004:.006))}}up(t){var e,n;if(t.pointerId===this.stick.id)this.stick.id=-1,this.stick.x=this.stick.y=0,this.showStick(!1);else if(t.pointerId===this.look.id){if(this.look.mouse&&this.look.moved<4&&this.enabled&&document.pointerLockElement!==this.el)try{(n=(e=this.el.requestPointerLock())==null?void 0:e.catch)==null||n.call(e,()=>{})}catch{}this.look.id=-1}}}function uS(i){const t=i.target;return!!t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable)}const dS=`
.av-stick { position: absolute; width: 110px; height: 110px; margin: -55px 0 0 -55px; border-radius: 50%;
  background: rgba(255,255,255,.12); border: 2px solid rgba(255,255,255,.45); pointer-events: none; }
.av-stick.run { border-color: #ffd34d; }
.av-knob { position: absolute; left: 50%; top: 50%; width: 46px; height: 46px; border-radius: 50%;
  background: rgba(255,255,255,.55); transform: translate(-50%, -50%); }
`;function fS(){const i=new Ve;i.name="venue-interior";const t=ep(),e=new tp,n=[],s=[],o=Ot[1]-As,r=[];let a=0,c=0;for(const h of ip){for(let g=0;g<h.n;g++){const m=h.z+g*_r,v=h.kind==="sell"?`S${String(++a).padStart(2,"0")}`:`P${String(++c).padStart(2,"0")}`,y=it.concBack+hi.d;r.push({id:v,kind:h.kind,pos:new A(y,J,m),stand:new A(y+.55,J,m),normal:new A(1,0,0),lookYaw:Math.PI/2})}const d=(h.n-1)*_r+hi.w,f=h.kind==="sell"?"舟券発売":"払戻",p=h.kind==="sell"?"#1f5fbf":"#1d8a4a",x=new Nt(new Xe(d,.55),new bi({map:yo(f,p,"#fff",512,64),toneMapped:!1}));x.rotation.y=Math.PI/2,x.position.set(it.concBack+.03,J+2.25,h.z+(h.n-1)*_r/2),i.add(x);for(let g=0;g<2;g++){const m=h.z+(h.n-1)*_r*(g===0?.25:.75),v=So(`odds-${String(n.length+1).padStart(2,"0")}`,`コンコース吊りモニター ${n.length+1}`,"odds",1.6,.9,{w:512,h:288});v.mesh.rotation.y=Math.PI/2,v.mesh.position.set(it.concBack+1.06,J+3.5,m),i.add(v.mesh),n.push(v),e.box(t.dark,it.concBack+.94,it.concBack+1.04,J+2.98,J+4.02,m-.86,m+.86);for(const y of[-.5,.5])e.box(t.steel,it.concBack+.97,it.concBack+1.01,J+4.02,o,m+y-.02,m+y+.02)}}i.add(...gS(r));for(const h of[108,168]){const d=So(`odds-${String(n.length+1).padStart(2,"0")}`,`コンコース大型オッズ板 ${h===108?"北":"南"}`,"odds",3.2,1.8,{w:1024,h:576});d.mesh.rotation.y=-Math.PI/2,d.mesh.position.set(an.xs[0]-.12,J+3.6,h),i.add(d.mesh),n.push(d),e.box(t.dark,an.xs[0]-.1,an.xs[0]+.05,J+2.6,J+4.6,h-1.7,h+1.7);for(const p of[-1.2,1.2])e.box(t.steel,an.xs[0]-.05,an.xs[0],J+4.6,o,h+p-.02,h+p+.02);const f=So(`odds-${String(n.length+1).padStart(2,"0")}`,`コンコース大型オッズ板 ${h===108?"北":"南"}（裏）`,"odds",3.2,1.8,{w:1024,h:576});f.mesh.rotation.y=Math.PI/2,f.mesh.position.set(an.xs[0]+.07,J+3.6,h),i.add(f.mesh),n.push(f)}for(const h of[125,145,165,185]){const d=So(`deck-${String(n.filter(f=>f.kind==="deck").length+1).padStart(2,"0")}`,`デッキ吊りモニター z${h}`,"deck",1.8,1,{w:512,h:288});d.mesh.rotation.y=-Math.PI/2,d.mesh.position.set(it.front2-.42,J+4.5,h),i.add(d.mesh),n.push(d),e.box(t.dark,it.front2-.4,it.front2-.25,J+3.92,J+5.08,h-.96,h+.96);for(const f of[-.5,.5])e.box(t.steel,it.front2-.34,it.front2-.3,J+5.08,o,h+f-.02,h+f+.02)}for(const h of de.zs){const d=de.x-de.w/2,f=de.x+de.w/2;e.box(t.panel,d+.1,f-.1,J,J+de.h-.1,h-de.len/2+.1,h+de.len/2-.1),e.boxAt(t.wood,de.x,J+de.h-.05,h,de.w,.05,de.len,0,0),e.box(t.dark,de.x-.08,de.x+.08,J+de.h,J+de.h+.32,h-de.len/2+.2,h+de.len/2-.2),e.box(t.light,de.x-.06,de.x+.06,J+de.h+.32,J+de.h+.36,h-de.len/2+.2,h+de.len/2-.2)}e.box(t.wood,-69,-64,J,J+1.1,196,201),e.box(t.panel,-68.8,-64.2,J+1.1,J+1.15,196.2,200.8);{const h=new Nt(new Xe(3,.6),new bi({map:yo("総合案内","#c9a227","#1a1a1a",256,52),toneMapped:!1}));h.rotation.y=Math.PI/2,h.position.set(-63.95,J+2.6,198.5),i.add(h)}const l=(h,d,f,p,x=4,g="#1d2f55")=>{const m=new Nt(new Xe(x,.6),new bi({map:yo(h,g,"#fff",512,64),toneMapped:!1,side:ze}));m.rotation.y=p,m.position.set(d,J+3.9,f),i.add(m),e.box(t.steel,d-.02,d+.02,J+4.2,o,f-.02,f+.02)};l("← 1マーク 水際デッキ",-60.5,140,Math.PI/2,4.4),l("← ふらっとデッキ",-60.5,80,Math.PI/2,4.4),l("南入場門 →",-72,203,0,4),l("2F 屋外席は外の階段から",-72,62,Math.PI,5);{const h=new Nt(new Xe(10,1.2),new bi({map:yo("中央ホール","#1d2f55","#fff",512,64,"イベント開催時のみ"),toneMapped:!1}));h.position.set(-72,J+3.2,H.concN+.03),i.add(h)}for(const h of[-62.5,-70,-77,-83])for(let d=H.concN+3;d<H.standS-1;d+=6)e.box(t.light,h-.15,h+.15,o-.04,o,d-2,d+2);for(let h=H.wingN+3;h<H.standS;h+=6)e.box(t.light,-54.3,-53.9,o-.04,o,h-1.5,h+1.5);const u=[];for(let h=H.deckN+4;h<=96;h+=4)for(const d of[-49,-53.5])u.push({x:d,z:h});{const h=new mn(.42,.42,.04,20).toNonIndexed().translate(0,.74,0),d=new mn(.04,.04,.72,8).toNonIndexed().translate(0,.37,0),f=new mn(.25,.28,.03,16).toNonIndexed().translate(0,.015,0),p=new Ti(zr([h,d,f]),t.dark,u.length),x=[new oe(.4,.04,.4).toNonIndexed().translate(0,.45,0),new oe(.04,.42,.4).toNonIndexed().translate(-.19,.68,0),new oe(.04,.45,.04).toNonIndexed().translate(.16,.22,.16),new oe(.04,.45,.04).toNonIndexed().translate(.16,.22,-.16),new oe(.04,.45,.04).toNonIndexed().translate(-.16,.22,.16),new oe(.04,.45,.04).toNonIndexed().translate(-.16,.22,-.16)],g=new Ti(zr(x),t.dark,u.length*3),m=new re,v=new Xn,y=new A(1,1,1);u.forEach((_,L)=>{p.setMatrixAt(L,m.makeTranslation(_.x,J,_.z));for(let T=0;T<3;T++){const M=Math.PI+(T-1)*1.1,P=_.x+Math.cos(M)*.72,b=_.z+Math.sin(M)*.72;v.setFromAxisAngle(new A(0,1,0),-M+Math.PI),g.setMatrixAt(L*3+T,m.compose(new A(P,J,b),v,y))}s.push({x0:_.x-.45,x1:_.x+.45,z0:_.z-.45,z1:_.z+.45,y0:J,y1:J+.78})});for(const _ of[p,g])_.castShadow=_.receiveShadow=!0,_.computeBoundingSphere(),i.add(_)}return i.add(...xS(r)),e.build(i,{name:"interior"}),{group:i,machines:r,screens:n,walls:s}}function pS(i){const t=[],e=[],n=(l,u,h,d,f,p,x,g=0)=>{const m=new oe(h,u,l).toNonIndexed();m.applyMatrix4(new re().makeRotationZ(g).setPosition(d,f,p)),t.push(m);for(let v=0;v<m.attributes.position.count;v++)e.push(x.r,x.g,x.b)},s=new Jt(14278114),o=new Jt(2369582),r=hi.w,a=hi.d;n(r,1.15,a,0,.575,0,s),n(r,.45,a*.55,-a*.22,1.37,0,s),n(r*.96,.05,.42,a*.18,1.3,0,o,-.9),n(r,.1,a+.02,0,1,0,i),n(r*.5,.04,.02,a/2+.005,.86,0,o),n(r*.3,.06,.02,a/2+.005,.74,-r*.2,o),n(r*.12,.08,.02,a/2+.005,.74,r*.25,o),n(r*.4,.06,.02,a/2+.005,.6,0,i),n(r*.3,.14,.06,a/2+.02,.35,0,o),n(r,.1,a,0,.05,0,o),n(r,.12,a*.55,-a*.22,1.66,0,i);const c=zr(t);return c.setAttribute("color",new he(e,3)),c}function mS(i){return _i(256,192,t=>{t.fillStyle=i==="sell"?"#0f3a75":"#0f5a35",t.fillRect(0,0,256,192),t.fillStyle="#fff",t.font="bold 30px sans-serif",t.textAlign="center",t.fillText(i==="sell"?"舟券 発売":"払 戻",128,44),t.font="16px sans-serif",t.fillText(i==="sell"?"マークカードを入れてください":"舟券を入れてください",128,76);for(let e=0;e<6;e++)t.fillStyle=["#f4f4f4","#222","#d8262b","#1f5fbf","#f2c230","#1d9a4a"][e],t.fillRect(20+e*38,100,32,32),t.fillStyle=e===0||e===4?"#111":"#fff",t.font="bold 22px sans-serif",t.fillText(String(e+1),36+e*38,124);t.fillStyle="#ffd34d",t.fillRect(70,148,116,30),t.fillStyle="#111",t.font="bold 18px sans-serif",t.fillText(i==="sell"?"発 行":"支払い",128,169)},!1)}function gS(i){const t=[],e=new re;for(const n of["sell","payout"]){const s=i.filter(l=>l.kind===n);if(!s.length)continue;const o=pS(new Jt(n==="sell"?2056127:1935946)),r=new Ti(o,new Kt({vertexColors:!0,roughness:.5,metalness:.1}),s.length),a=new Xe(hi.w*.8,.34);a.rotateY(Math.PI/2),a.rotateZ(Math.PI/2-.9);const c=new Ti(a,new bi({map:mS(n),toneMapped:!1}),s.length);s.forEach((l,u)=>{e.makeTranslation(l.pos.x-hi.d/2,J,l.pos.z),r.setMatrixAt(u,e),e.makeTranslation(l.pos.x-hi.d/2+hi.d*.18+.024,J+1.32,l.pos.z),c.setMatrixAt(u,e)}),r.castShadow=r.receiveShadow=!0,r.name=`machines:${n}`;for(const l of[r,c])l.computeBoundingSphere();t.push(r,c)}return t}function xS(i){let t=2024;const e=()=>(t=t*16807%2147483647)%1e5/1e5,n=[2832981,4868682,9055019,3104570,14209732,2039586,7035450,3891082,11053224,8011626].map(M=>new Jt(M)),s=[],o=[];for(const M of sp()){if(!l0.every(([w,N])=>Math.hypot(M.x-w,M.z-N)>1.5))continue;const P=(M.z-H.wingN)/(H.standS-H.wingN),b=(M.y<J+1?.18:.1)+.18*P;e()<b&&s.push({x:M.x,y:M.y,z:M.z,yaw:0})}const r=(M,P)=>l0.every(([b,w])=>Math.hypot(M-b,P-w)>4);for(const M of i)e()<.2&&r(M.stand.x,M.stand.z)&&o.push({x:M.stand.x+1.6+e()*1.2,y:J,z:M.pos.z+(e()-.5),yaw:Math.PI+(e()-.5)*.6});for(const M of de.zs)for(const P of[-1,1])e()<.7&&r(de.x+P*.85,M)&&o.push({x:de.x+P*.85,y:J,z:M+(e()-.5)*2.4,yaw:P>0?Math.PI:0});for(let M=0;M<70;M++){const P=H.deckN+10+e()*(H.standS-H.deckN-12),b=it.fence-.5-e()*1.2;r(b,P)&&o.push({x:b,y:J,z:P,yaw:(e()-.5)*.8})}for(let M=0;M<40;M++){const P=-60-e()*22,b=H.concN+4+e()*(H.standS-H.concN-8);!an.xs.some(N=>Math.abs(N-P)<.9)&&r(P,b)&&o.push({x:P,y:J,z:b,yaw:e()*Math.PI*2})}for(let M=0;M<25;M++){const P=-50-e()*45,b=H.standS+3+e()*24;r(P,b)&&o.push({x:P,y:J,z:b,yaw:e()*Math.PI*2})}const a=M=>{const P=[],b=[];for(const[N,O,U,V,B,X,Q]of M){const j=new oe(U,O,N).toNonIndexed().translate(V,B,X);P.push(j);for(let pt=0;pt<j.attributes.position.count;pt++)b.push(Q,Q,Q)}const w=zr(P);return w.setAttribute("color",new he(b,3)),w},c=a([[.4,.56,.24,-.1,.76,0,1],[.34,.14,.42,.1,.5,0,.35],[.3,.46,.12,.3,.24,0,.3]]),l=a([[.32,.84,.2,0,.42,0,.3],[.42,.6,.26,0,1.14,0,1]]),u=new Hs(.11,7,5).toNonIndexed();{const M=u.attributes.position,P=[],b=new Jt(1907224),w=new Jt(14266508);for(let N=0;N<M.count;N++){const U=M.getX(N)>.02&&M.getY(N)<.05?w:b;P.push(U.r,U.g,U.b)}u.setAttribute("color",new he(P,3)),u.deleteAttribute("uv")}const h=new Kt({vertexColors:!0,roughness:.9}),d=new Kt({vertexColors:!0,roughness:.8}),f=[...s.map(M=>({...M,sit:!0})),...o.map(M=>({...M,sit:!1}))],p=new Ti(c,h,Math.max(1,s.length)),x=new Ti(l,h,Math.max(1,o.length)),g=new Ti(u,d,Math.max(1,f.length));p.count=s.length,x.count=o.length,g.count=f.length;const m=new re,v=new Xn,y=new A(1,1,1),_=new A(0,1,0);let L=0,T=0;f.forEach((M,P)=>{const b=M.yaw;v.setFromAxisAngle(_,b);const w=n[Math.floor(e()*n.length)],N=.94+e()*.12,O=new A(N,N,N);if(M.sit){p.setMatrixAt(L,m.compose(new A(M.x,M.y+.06,M.z),v,O)),p.setColorAt(L++,w);const U=new A(-.1,1.17,0).multiplyScalar(N).applyQuaternion(v).add(new A(M.x,M.y+.06,M.z));g.setMatrixAt(P,m.compose(U,v,y))}else x.setMatrixAt(T,m.compose(new A(M.x,M.y,M.z),v,O)),x.setColorAt(T++,w),g.setMatrixAt(P,m.compose(new A(M.x,M.y+1.58*N,M.z),v,y))});for(const M of[p,x,g])M.castShadow=!0,M.computeBoundingSphere(),M.name="crowd";return[p,x,g]}const vS=.55,k0=.6;class _S{constructor(){S(this,"floors",[]);S(this,"walls",[])}heightAt(t,e,n){let s=null;for(const o of this.floors){if(t<o.x0||t>o.x1||e<o.z0||e>o.z1)continue;const r=MS(o,t,e);r>n+vS||(s===null||r>s)&&(s=r)}return s}move(t,e,n,s){const o=(r,a)=>{let c=t.x+r,l=t.z+a;for(let h=0;h<2;h++)for(const d of this.walls){if(d.y1<t.y+.3||d.y0>t.y+1.8)continue;const f=Math.max(d.x0,Math.min(d.x1,c)),p=Math.max(d.z0,Math.min(d.z1,l)),x=c-f,g=l-p,m=x*x+g*g;if(!(m>=s*s))if(m>1e-10){const v=Math.sqrt(m);c=f+x/v*s,l=p+g/v*s}else{const v=[[d.x0-s-c,0],[d.x1+s-c,0],[0,d.z0-s-l],[0,d.z1+s-l]];v.sort((y,_)=>Math.abs(y[0])+Math.abs(y[1])-Math.abs(_[0])-Math.abs(_[1])),c+=v[0][0],l+=v[0][1]}}const u=this.heightAt(c,l,t.y);if(u===null||u<t.y-k0)return!1;for(const[h,d]of[[s,0],[-s,0],[0,s],[0,-s]]){const f=this.heightAt(c+h,l+d,u);if(f===null||f<u-k0)return!1}return t.x=c,t.z=l,t.y=u,!0};o(e,n)||Math.abs(e)>1e-6&&o(e,0)||Math.abs(n)>1e-6&&o(0,n)}settle(t){const e=this.heightAt(t.x,t.z,t.y+.3);e!==null&&(t.y=e)}}function MS(i,t,e){if(i.kind==="flat")return i.y;const s=((i.axis==="x"?t:e)-i.a0)/(i.a1-i.a0);if(s<=0)return i.y0;const o=Math.min(i.n,Math.floor(s*i.n)+1);return i.y0+(i.y1-i.y0)*o/i.n}const mo=(i,t,e,n,s)=>({kind:"flat",x0:Math.min(i,t),x1:Math.max(i,t),z0:Math.min(e,n),z1:Math.max(e,n),y:s}),un=(i,t,e,n,s,o)=>({x0:Math.min(i,t),x1:Math.max(i,t),z0:Math.min(e,n),z1:Math.max(e,n),y0:s,y1:o});function yS(i=[]){const t=new _S,e=t.floors,n=t.walls,s=Ot[1]-.5;e.push(mo(it.deckBack,it.fence,H.deckN,H.standS,J)),e.push(mo(it.plazaW,it.fence,H.standS,H.plazaS,J)),e.push(mo(it.concBack,it.deckBack,H.concN,H.standS,J)),e.push(mo(it.rows2,it.front2,H.wingN,H.seat2S+6,Ot[1])),e.push(mo(it.upperS,it.front2,H.seat2S,H.seat2S+6,Ot[1])),e.push(mo(it.upperS,it.front2,H.wingN,H.seat2N,Ot[1])),e.push({kind:"steps",x0:it.upperS,x1:it.rows2,z0:H.seat2N,z1:H.seat2S,axis:"x",a0:it.rows2,a1:it.upperS,y0:Ot[1],y1:Ot[1]+Cn.n*Cn.rise,n:Cn.n});for(const r of np){e.push({kind:"steps",x0:Xi[0],x1:Xi[1],z0:Math.min(r.zBottom,r.zTop),z1:Math.max(r.zBottom,r.zTop),axis:"z",a0:r.zBottom,a1:r.zTop,y0:J,y1:Ot[1],n:Ya});const a=Math.sign(r.zTop-r.zBottom),c=r.zBottom+a*Math.abs(r.zTop-r.zBottom)*(1.4/(Ot[1]-J));n.push(un(Xi[0],Xi[1],c,r.zTop,J,J+1.4))}let o=H.standS;for(const r of[...Rh].sort((a,c)=>c-a))n.push(un(it.deckBack-.1,it.deckBack+.1,r+2,o,J,s)),o=r-2;n.push(un(it.deckBack-.1,it.deckBack+.1,H.concN,o,J,s)),n.push(un(it.concBack,-82,H.standS-.2,H.standS+.4,J,s)),n.push(un(-62,it.deckBack,H.standS-.2,H.standS+.4,J,s));for(const r of an.xs)for(let a=0;a<an.n;a++){const c=an.z0+a*an.dz,l=an.size/2;n.push(un(r-l,r+l,c-l,c+l,J,s))}for(let r=0;r<Kn.n;r++){const a=Kn.z0+r*Kn.dz,c=Kn.size/2;n.push(un(Kn.x-c,Kn.x+c,a-c,a+c,J,s))}for(const r of ip)n.push(un(it.concBack,it.concBack+hi.d,r.z-hi.w/2,r.z+(r.n-1)*_r+hi.w/2,J,J+2));for(const r of de.zs)n.push(un(de.x-de.w/2,de.x+de.w/2,r-de.len/2,r+de.len/2,J,J+de.h));n.push(un(-69,-64,196,201,J,J+1.1));for(let r=0;r<11;r++){const a=-61-r*2.6;n.push(un(a-.15,a+.15,H.gateLine-.6,H.gateLine+.6,J,J+1))}n.push(un(-60,it.fence,H.gateLine-.05,H.gateLine+.05,J,J+1.1)),n.push(un(it.plazaW,-89.5,H.gateLine-.05,H.gateLine+.05,J,J+1.1));for(const r of[-8,8])for(const a of[-98,-52])n.push(un(a-.5,a+.5,H.gate+r-.5,H.gate+r+.5,J,J+8));for(let r=H.gate+10;r<H.plazaS;r+=6)for(const a of[-79.7,-70.3])n.push(un(a-.12,a+.12,r-.12,r+.12,J,J+3.6));return n.push(un(it.upperS-.3,it.upperS,H.wingN,H.seat2S+6,Ot[1],Ot[2])),n.push(...i),t}const Ll=(i,t,e,n)=>Math.atan2(-(e-i),-(n-t));function SS(i){const t=fS(),e=yS(t.walls),n={deck1m:{name:"1マーク前デッキ",x:-47.4,y:J,z:128,yaw:Ll(-47.4,128,0,150),pitch:-.04},machines:{name:"券売機",x:-80,y:J,z:134,yaw:Math.PI/2,pitch:-.08},seats2f:{name:"2F 屋外席",x:-56.5,y:Ot[1]+3,z:140,yaw:Ll(-56.5,140,0,150),pitch:-.18},flat:{name:"ふらっとデッキ",x:-51.3,y:J,z:22,yaw:Ll(-51.3,22,90,0),pitch:.06},gate:{name:"南入場門",x:-75,y:J,z:H.plazaS-3,yaw:0,pitch:.05}};for(const s of Object.values(n)){const o={x:s.x,y:s.y+.5,z:s.z};e.settle(o),s.y=o.y}return{group:t.group,world:e,machines:t.machines,screens:[...i.screens,...t.screens],spots:n}}const ri=[1,2,3,4,5,6];function Zn(i,t){return i.ordered?t.join("-"):[...t].sort((e,n)=>e-n).join("=")}function $s(i){return i.split(/[-=]/).map(Number)}function wS(i,t=ri){const e=[],n=s=>{if(s.length===i.picks){e.push(Zn(i,s));return}for(const o of t)s.includes(o)||!i.ordered&&s.length&&o<s[s.length-1]||n([...s,o])};return n([]),e}function bS(i,t){const e=new Set,n=(s,o)=>{if(s===i.picks){e.add(Zn(i,o));return}for(const r of t[s]??[])o.includes(r)||n(s+1,[...o,r])};return n(0,[]),[...e]}const ES=i=>{const t=[];for(let e=0;e<i.length;e++)for(let n=e+1;n<i.length;n++)t.push([i[e],i[n]]);return t},bs=(i,t)=>{const e={...i};return e.winners=n=>n.length<e.need?[]:t(n,e),e},fn={win:bs({id:"win",name:"単勝式",short:"単勝",picks:1,ordered:!0,need:1,enabled:!0},(i,t)=>[Zn(t,[i[0]])]),exacta:bs({id:"exacta",name:"2連勝単式",short:"2連単",picks:2,ordered:!0,need:2,enabled:!0},(i,t)=>[Zn(t,i.slice(0,2))]),trifecta:bs({id:"trifecta",name:"3連勝単式",short:"3連単",picks:3,ordered:!0,need:3,enabled:!0},(i,t)=>[Zn(t,i.slice(0,3))]),quinella:bs({id:"quinella",name:"2連勝複式",short:"2連複",picks:2,ordered:!1,need:2,enabled:!1},(i,t)=>[Zn(t,i.slice(0,2))]),trio:bs({id:"trio",name:"3連勝複式",short:"3連複",picks:3,ordered:!1,need:3,enabled:!1},(i,t)=>[Zn(t,i.slice(0,3))]),wide:bs({id:"wide",name:"拡大2連勝複式",short:"拡連複",picks:2,ordered:!1,need:2,enabled:!1},(i,t)=>ES(i.slice(0,3)).map(e=>Zn(t,e))),place:bs({id:"place",name:"複勝式",short:"複勝",picks:1,ordered:!0,need:1,enabled:!1},(i,t)=>i.slice(0,2).map(e=>Zn(t,[e])))},TS=Object.keys(fn).filter(i=>fn[i].enabled),Fe=100,Ep=.75,AS=.7;function Oh(i){return Number.isFinite(i)?Math.max(Fe,Math.floor(i/10+1e-9)*10):Fe}function Tp(i,t=()=>!0){let e=0;for(const[n,s]of i)t(n)&&(e+=s);return e}function RS(i,t,e=[]){const n=r=>!$s(r).some(a=>e.includes(a)),s=Tp(t,n)*Fe*Ep,o=new Map;for(const[r,a]of t)o.set(r,n(r)&&a>0?Oh(s/a/Fe*Fe)/Fe:null);return o}function CS(i,t,e){const n=fn[i],s={type:i,winners:[],specialPer100:0,returned:e.returned};if(e.order.length<n.need)return{...s,status:"void",netVotes:0};const o=f=>!$s(f).some(p=>e.returned.includes(p)),r=Tp(t,o),a=r*Fe*Ep,c=n.winners(e.order).filter(o),l=c.map(f=>t.get(f)??0),u=l.reduce((f,p)=>f+p,0);if(u===0)return{...s,status:"special",specialPer100:AS*Fe,netVotes:r};const h=c.map((f,p)=>({key:f,votes:l[p]})).filter(f=>f.votes>0);let d;if(h.length===1)d=[{...h[0],per100:Oh(a/u/Fe*Fe)}];else{const f=a-u*Fe;d=h.map(p=>({...p,per100:Oh(Fe+f/h.length/p.votes)}))}return{...s,status:"ok",winners:d,netVotes:r}}function PS(i,t){if(i.status==="void"||$s(t).some(n=>i.returned.includes(n)))return{kind:"refund",per100:Fe};if(i.status==="special")return{kind:"special",per100:i.specialPer100};const e=i.winners.find(n=>n.key===t);return e?{kind:"hit",per100:e.per100}:{kind:"miss",per100:0}}const Ap=100,Tu=120;function LS(i,t=[]){const e=[...new Set([...i.flying,...i.late??[],...t])].sort((n,s)=>n-s);return i.cancelled?{order:[],returned:e}:{order:i.order.filter(n=>!e.includes(n)),returned:e}}class IS{constructor(t){S(this,"id");S(this,"title");S(this,"types");S(this,"pool");S(this,"closeAt");S(this,"state","open");S(this,"tickets",[]);S(this,"settlement",null);S(this,"nextId",1);S(this,"listeners",new Set);this.id=t.id,this.title=t.title,this.pool=t.pool,this.types=t.types??TS,this.closeAt=t.closeAt??null}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}changed(){for(const t of this.listeners)t(this)}tick(t,e){if(!(this.state!=="open"||this.closeAt==null)){if(t>=this.closeAt){this.close();return}e!=null&&this.pool.setProgress&&(this.pool.setProgress((t-e)/Math.max(1,this.closeAt-e)),this.changed())}}remaining(t){return this.state==="open"&&this.closeAt!=null?Math.max(0,this.closeAt-t):null}odds(t){var e;return RS(t,this.pool.votes(t),((e=this.settlement)==null?void 0:e.outcome.returned)??[])}buy(t,e,n,s){if(this.state!=="open")return"closed";if(!this.types.includes(e)||!fn[e])return"type";const o=[...new Set(n)];if(!o.length)return"empty";if(o.length>Tu)return"too-many";if(!Number.isInteger(s)||s<1||s>Ap)return"units";const r=o.length*s*Fe;if(!t.spendFree(r))return"funds";for(const c of o)this.pool.add(e,c,s);const a={id:this.nextId++,type:e,picks:o.map(c=>({key:c,units:s})),cost:r,payout:0,claimed:!1};return this.tickets.push(a),this.changed(),a}close(){var t,e;this.state==="open"&&((e=(t=this.pool).setProgress)==null||e.call(t,1),this.state="closed",this.changed())}settle(t,e=[]){if(this.state==="open"&&this.close(),this.settlement)return this.settlement;const n=LS(t,e),s={};for(const o of this.types)s[o]=CS(o,this.pool.votes(o),n);for(const o of this.tickets){const r=s[o.type];o.payout=0;for(const a of o.picks){const c=PS(r,a.key);a.kind=c.kind,a.payout=c.per100*a.units,o.payout+=a.payout}}return this.settlement={outcome:n,result:t,types:s},this.state="settled",this.changed(),this.settlement}unclaimed(){return this.tickets.reduce((t,e)=>t+(e.claimed?0:e.payout),0)}claim(t){if(this.state!=="settled")return 0;let e=0;for(const n of this.tickets)n.claimed||(n.claimed=!0,e+=n.payout);return e>0&&t.addFree(e),this.changed(),e}}const kh=[.55,.14,.12,.11,.06,.02],fr=i=>Math.min(1,Math.max(0,i));function DS(i,t){const e=1-fr((i.st-.05)/.4),n=fr((i.entrySpeed-46)/6),s=1-fr((i.brakeMargin+2)/6),o=1-fr((i.leanDelay+i.leanSpeed-.3)/.6),r=1-fr((i.slip-.08)/.17),a=t>=3?i.aggression:.5;return .3*e+.15*n+.1*s+.1*o+.1*i.tight+.1*i.grip+.1*r+.05*a-.5}function NS(i,t=6){const e=i.slice(0,6).map((s,o)=>kh[o]*Math.exp(t*DS(s,o+1))),n=e.reduce((s,o)=>s+o,0);return e.map(s=>s/n)}function Il(i,t){let e=1,n=1;for(const s of t){const o=i[s-1];if(e<=1e-12)return 0;n*=o/e,e-=o}return n}function Rp(i){let t=i>>>0||1;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const zS=i=>Math.sqrt(-2*Math.log(i()+1e-12))*Math.cos(2*Math.PI*i()),US={win:1500,exacta:5e3,trifecta:25e3,quinella:1500,trio:3e3,wide:1500,place:800},Fa={read:.7,lane:.27,flat:.03};function FS(i,t){const e=fn[i],n=wS(e),s=kh.map(l=>l/kh.reduce((u,h)=>u+h,0)),o=(l,u)=>{const h=$s(u);if(e.ordered&&e.picks===h.length&&i!=="place")return Il(l,h);if(i==="place"){const p=h[0];let x=l[p-1];for(let g=1;g<=6;g++)g!==p&&(x+=Il(l,[g,p]));return x}let d=0;const f=(p,x)=>{x.length||(d+=Il(l,p));for(const g of x)f([...p,g],x.filter(m=>m!==g))};return f([],h),d},r=n.map(l=>Fa.read*o(t,l)**.85+Fa.lane*o(s,l)**.85),a=r.reduce((l,u)=>l+u,0),c=new Map;return n.forEach((l,u)=>c.set(l,(1-Fa.flat)*(r[u]/a)+Fa.flat/n.length)),c}function B0(i,t,e){var a;const n=Rp(e.seed*7919+i.length*104729+i.charCodeAt(0)),s=((a=e.total)==null?void 0:a[i])??US[i],o=e.noise??.3,r=new Map;for(const[c,l]of FS(i,t))r.set(c,Math.max(1,Math.round(s*l*Math.exp(o*zS(n)-o*o/2))));return r}class OS{constructor(t,e){S(this,"chances");S(this,"early",new Map);S(this,"late",new Map);S(this,"mine",new Map);S(this,"progress",.35);S(this,"opts");this.chances=NS(t),this.opts=e}setProgress(t){this.progress=Math.min(1,Math.max(this.progress,t))}crowd(t){return this.early.has(t)||(this.early.set(t,B0(t,this.chances,{...this.opts,seed:this.opts.seed*2+1})),this.late.set(t,B0(t,this.chances,{...this.opts,seed:this.opts.seed*2+2}))),{a:this.early.get(t),b:this.late.get(t)}}votes(t){const{a:e,b:n}=this.crowd(t),s=this.progress,o=Math.min(1,s/.6)*.5,r=s*s*.5,a=this.mine.get(t),c=new Map;for(const[l,u]of e)c.set(l,Math.max(1,Math.round(u*o+(n.get(l)??0)*r))+((a==null?void 0:a.get(l))??0));return c}add(t,e,n){let s=this.mine.get(t);s||this.mine.set(t,s=new Map),s.set(e,(s.get(e)??0)+n)}}const V0=12,kS=180,BS=30,VS=10,HS=40,GS=60,WS=300,XS=2,H0=["山田","佐藤","鈴木","高橋","田中","渡辺","伊藤","中村","小林","加藤","吉田","山本","松本","井上","木村","林","清水","森","池田","橋本","石川","前田","藤田","岡田","後藤","長谷川","村上","近藤","坂本","遠藤"],G0=["翔太","大輔","健太","拓也","直樹","和也","誠","亮","剛","隆","浩二","慎吾","雄一","勇気","蓮","颯","陸","優","学","修"];function $S(i){const t=Rp(i*7919+13),e=new Set,n=[];for(;n.length<6;){const s=`${H0[Math.floor(t()*H0.length)]} ${G0[Math.floor(t()*G0.length)]}`;e.has(s)||(e.add(s),n.push(s))}return n}class qS{constructor(t,e={}){S(this,"session");S(this,"daySeed");S(this,"phase","open");S(this,"raceNo");S(this,"day",1);S(this,"sale");S(this,"seed",0);S(this,"skills",[]);S(this,"racers",[]);S(this,"result",null);S(this,"scratched",[]);S(this,"history",[]);S(this,"t",0);S(this,"phaseAt",0);S(this,"opensAt",0);S(this,"closeAt",0);S(this,"oddsVer",0);S(this,"oddsT",0);S(this,"firstFinishAt",-1);S(this,"listeners",new Set);S(this,"saleSec");S(this,"closeToPitOut");S(this,"judgeSec");S(this,"resultSec");S(this,"grade");S(this,"now",()=>this.nowMs);this.session=t,this.daySeed=e.seed??Math.floor(Math.random()*1e6)+1,this.saleSec=e.saleSec??kS,this.closeToPitOut=e.closeToPitOut??BS,this.judgeSec=e.judgeSec??VS,this.resultSec=e.resultSec??HS,this.grade=e.grade??"一般戦",this.raceNo=Math.min(V0,Math.max(1,e.firstRace??1)),this.beginRace()}on(t){return this.listeners.add(t),()=>this.listeners.delete(t)}emit(t){for(const e of this.listeners)e(t)}get nowMs(){return Math.round(this.t*1e3)}get title(){return`第${this.raceNo}R ${this.grade}`}get toClose(){return this.phase==="open"?Math.max(0,this.closeAt-this.t):null}get inPhase(){return this.t-this.phaseAt}get phaseLeft(){return this.phase==="open"?this.toClose:this.phase==="closed"?Math.max(0,this.holdSec-this.inPhase):this.phase==="judging"?Math.max(0,this.judgeSec-this.inPhase):this.phase==="settled"?Math.max(0,this.resultSec-this.inPhase):null}get holdSec(){const t=this.session.prestart,e=t?t.pitOut-this.session.clock:0;return Math.max(0,this.closeToPitOut-e)}statusText(){const t=`第${this.raceNo}R`;switch(this.phase){case"open":{const e=Math.max(0,Math.ceil((this.toClose??0)-.001));return`${t} 締切まで ${Math.floor(e/60)}分${String(e%60).padStart(2,"0")}秒`}case"closed":return`${t} 発売締切`;case"race":{const e=this.session.clock,n=this.session.prestart;return n&&e<n.pitOut?`${t} 発売締切 まもなくピットアウト`:this.session.inPrestart?`${t} 待機行動`:`${t} レース中`}case"judging":return`${t} 確定待ち`;case"settled":return`${t} 確定 ${this.orderText()}`}}orderText(){const t=this.sale.settlement;return t?t.result.cancelled?"レース不成立":t.outcome.order.slice(0,3).join("-")||"ゴール艇なし":""}update(t){this.t+=t;let e=!1;switch(this.phase){case"open":this.oddsT+=t,(this.oddsT>=XS||this.t>=this.closeAt)&&(this.oddsT=0,this.sale.tick(this.nowMs,Math.round(this.opensAt*1e3)),this.sale.state==="open"&&(this.oddsVer++,this.emit({type:"odds"}))),this.sale.state!=="open"&&this.setPhase("closed");break;case"closed":this.inPhase>=this.holdSec&&this.setPhase("race");break;case"race":{e=this.session.step(t);const n=this.session;if(n.inPrestart)for(const s of n.boats)s.cpu.capsized&&!this.scratched.includes(s.lane)&&this.scratched.push(s.lane);this.firstFinishAt<0&&n.boats.some(s=>s.cpu.finished)&&(this.firstFinishAt=this.t),n.result?this.result=n.result:(this.firstFinishAt>=0&&this.t-this.firstFinishAt>GS||n.clock>WS)&&(this.result=this.cutOff()),this.result&&this.setPhase("judging");break}case"judging":if(e=this.session.step(t),this.inPhase>=this.judgeSec){const n=this.sale.settle(this.result,this.scratched);this.history.unshift(this.sale),this.history.length>24&&this.history.pop(),this.setPhase("settled"),this.emit({type:"result",settlement:n})}break;case"settled":e=this.session.step(t),this.inPhase>=this.resultSec&&this.nextRace();break}return e}skip(t){let e=!1;const n=1/30;for(let s=0;s<t;s+=n)e=this.update(n)||e;return e}next(){const t=this.phase,e=this.phaseLeft;if(e!=null)return this.skip(e+1/30);let n=!1;for(let s=0;s<30*600&&this.phase===t;s++)n=this.update(1/30)||n;return n}closeNow(){this.phase==="open"&&(this.sale.close(),this.setPhase("closed"))}unclaimed(){return this.history.reduce((t,e)=>t+e.unclaimed(),0)}claimAll(t){return this.history.reduce((e,n)=>e+n.claim(t),0)}pendingTickets(){return this.sale.state==="settled"?[]:this.sale.tickets}setPhase(t){if(t===this.phase)return;const e=this.phase;this.phase=t,this.phaseAt=this.t,this.emit({type:"phase",phase:t,prev:e})}nextRace(){this.raceNo++,this.raceNo>V0&&(this.raceNo=1,this.day++);const t=this.phase;this.phase="open",this.phaseAt=this.t,this.beginRace(),this.emit({type:"phase",phase:"open",prev:t})}beginRace(){this.seed=(this.daySeed*131+this.day*977+this.raceNo*7919)%99991+1,this.skills=zh(this.seed),this.racers=$S(this.seed),this.session.reset(this.seed),this.result=null,this.scratched=[],this.firstFinishAt=-1,this.opensAt=this.t,this.closeAt=this.t+this.saleSec,this.oddsT=0,this.sale=new IS({id:`d${this.daySeed}-${this.day}-${this.raceNo}`,title:this.title,pool:new OS(this.skills,{seed:this.seed}),closeAt:this.nowMs+this.saleSec*1e3}),this.oddsVer++,this.emit({type:"race",raceNo:this.raceNo})}cutOff(){const t=this.session,e=t.prestart?t.prestart.boats:[],n=t.boats.filter(o=>o.cpu.finished&&!o.retired).sort((o,r)=>o.cpu.finishTime-r.cpu.finishTime),s=e.filter(o=>o.flying||o.late).length;return{order:n.map(o=>o.lane),move:n.length?fp(n[0].cpu,!0):"",flying:t.boats.filter(o=>o.cpu.flying).map(o=>o.lane),capsized:t.boats.filter(o=>o.cpu.capsized).map(o=>o.lane),late:e.filter(o=>o.late&&!o.flying).map(o=>o.lane),st:{...t.st},course:Object.fromEntries(t.boats.map(o=>[o.lane,o.cpu.course])),cancelled:s>=5,violations:t.prestart?[...t.prestart.violations]:[]}}}const W0={small:[512,288],big:[1024,256],odds:[1024,576],odds3:[768,480],card:[768,480]},Cp=25.78/58,YS="#0b1c2e",Bh="#123a58",Nn="#ffd34d",Vh="#ff5a4d",nn="#8fb3cc",jS=i=>i===1||i===5?"#111":"#fff";class pr{constructor(t){S(this,"kind");S(this,"canvas");S(this,"texture");S(this,"g");S(this,"key","");S(this,"draws",0);this.kind=t;const[e,n]=W0[t];this.canvas=document.createElement("canvas"),this.canvas.width=e,this.canvas.height=n,this.g=this.canvas.getContext("2d"),this.texture=new Ji(this.canvas),this.texture.colorSpace=Be,this.texture.anisotropy=4}update(t,e,n){const s=ZS(this.kind,t,e,n);if(s===this.key)return;this.key=s,this.draws++;const o=this.g,[r,a]=W0[this.kind];o.setTransform(1,0,0,1,0,0),o.fillStyle=YS,o.fillRect(0,0,r,a),o.textBaseline="middle",this.kind==="small"?KS(o,r,a,t,e):this.kind==="big"?JS(o,r,a,t,e,n):this.kind==="odds"?QS(o,r,a,t):this.kind==="odds3"?tw(o,r,a,t):ew(o,r,a,t),this.texture.needsUpdate=!0}dispose(){this.texture.dispose()}}function ZS(i,t,e,n){const s=t.phaseLeft,o=s==null?"":Math.ceil(s-.001);let r="";if((i==="big"||i==="small")&&(t.phase==="race"||t.phase==="judging")){const c=t.session;r=`${c.inPrestart?"pre":"run"}|${Math.floor(c.clock)}|${c.order().map(l=>l.lane).join("")}`}const a=t.phase==="open"||i==="odds"||i==="odds3"?t.oddsVer:0;return`${t.raceNo}|${t.phase}|${a}|${o}|${e}|${n}|${r}`}function Jn(i,t,e,n,s){i.fillStyle=Sc[t-1],i.fillRect(e,n-s/2,s,s),i.strokeStyle="rgba(255,255,255,.55)",i.lineWidth=Math.max(1,s*.05),i.strokeRect(e+.5,n-s/2+.5,s-1,s-1),i.fillStyle=jS(t),i.font=`900 ${Math.round(s*.72)}px sans-serif`,i.textAlign="center",i.fillText(String(t),e+s/2,n+s*.03),i.textAlign="left"}function wc(i,t,e,n,s){const o=t.split(/[-=]/).map(Number);return o.forEach((r,a)=>Jn(i,r,e+a*(s+s*.18),n,s)),o.length*(s+s*.18)}function Qt(i,t,e,n,s,o="#fff",r="left",a=700,c){i.font=`${a} ${Math.round(s)}px sans-serif`,i.fillStyle=o,i.textAlign=r,i.fillText(t,e,n,c),i.textAlign="left"}const ds=i=>i==null?"欠":i>=1e3?String(Math.floor(i)):i.toFixed(1),X0=i=>i.toLocaleString("ja-JP"),Hh=i=>{const t=Math.max(0,Math.ceil(i-.001));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`};function Br(i,t,e){return[...i.sale.odds(t).entries()].filter(n=>n[1]!=null).sort((n,s)=>n[1]-s[1]).slice(0,e)}function bc(i,t,e){const s=Br(i,t,999).findIndex(o=>o[0]===e);return s<0?null:s+1}function Ho(i,t,e,n,s){i.fillStyle=Bh,i.fillRect(0,0,t,e),Qt(i,`${n.raceNo}R`,e*.25,e/2,e*.62,"#fff","left",900);const[o,r]=Gh(n);Qt(i,o,e*1.6,e/2,e*.5,r,"left",900),Qt(i,s,t-e*.25,e/2,e*.42,nn,"right",700)}function Gh(i){switch(i.phase){case"open":{const t=i.toClose??0;return[`締切まで ${Hh(t)}`,t<60?Vh:Nn]}case"closed":return["発売締切",Vh];case"race":return[i.session.inPrestart?"待機行動":"レース中","#7fe0ff"];case"judging":return["確定待ち",Nn];case"settled":return["確定",Nn]}}function KS(i,t,e,n,s){if(n.phase==="settled"){Ho(i,t,48,n,"確定・払戻金"),Au(i,0,48,t,e-48,n,!1);return}const r=s%3;Ho(i,t,48,n,["単勝オッズ","2連単 人気順","出走表"][r]);const a=56,c=(e-a-6)/6;if(r===0){const l=n.sale.odds("win");for(let u=1;u<=6;u++){const h=a+c*(u-.5);Jn(i,u,14,h,c*.78),Qt(i,n.racers[u-1]??"",14+c,h,c*.5,"#fff","left",700,220);const d=bc(n,"win",String(u));Qt(i,ds(l.get(String(u))),t-110,h,c*.62,d===1?Nn:"#fff","right",900),Qt(i,d?`${d}番人気`:"",t-14,h,c*.4,nn,"right")}}else if(r===1)Br(n,"exacta",10).forEach(([u,h],d)=>{const f=d<5?0:1,p=a+c*(d%5+.5)*1.18,x=14+f*(t/2);Qt(i,`${d+1}`,x+18,p,c*.48,nn,"right"),wc(i,u,x+28,p,c*.7),Qt(i,ds(h),x+t/2-34,p,c*.62,d===0?Nn:"#fff","right",900)});else for(let l=1;l<=6;l++){const u=a+c*(l-.5);Jn(i,l,14,u,c*.78),Qt(i,n.racers[l-1]??"",14+c,u,c*.6,"#fff","left",800)}}function Au(i,t,e,n,s,o,r){const a=o.sale.settlement;if(!a)return;const c=a.outcome,l=r?s*.36:s*.2;let u=e+(r?s*.27:l*.75);if(a.result.cancelled||!c.order.length){Qt(i,a.result.cancelled?"レース不成立 全舟券返還":"ゴール艇なし 全舟券返還",t+n/2,e+s/2,l*.6,Nn,"center",900);return}let h=t+14;for(let v=0;v<Math.min(3,c.order.length);v++)Qt(i,`${v+1}着`,h,u,l*.42,nn),Jn(i,c.order[v],h+l*.9,u,l),h+=l*2.25;const d=[a.result.move?`決まり手 ${a.result.move}`:"",c.returned.length?`返還 ${c.returned.join("・")}号艇`:""].filter(Boolean).join("　");r&&Qt(i,d,h+10,u,l*.42,"#fff","left",800);const f=["win","exacta","trifecta"],p=r?e:u+l*.85,x=r?t+n*.5:t+14,g=r?n*.48:n-28,m=r?s/3:(e+s-p)/(f.length+(d?1:0));!r&&d&&Qt(i,d,t+14,p+m*.5,m*.5,"#fff","left",800),f.forEach((v,y)=>{const _=a.types[v];if(!_)return;const L=p+m*(y+(!r&&d?1:0)+.5);if(Qt(i,fn[v].short,x,L,m*.5,nn,"left",800),_.status==="void")return void Qt(i,"不成立（返還）",x+g,L,m*.5,Nn,"right",800);if(_.status==="special")return void Qt(i,`特払い ${X0(_.specialPer100)}`,x+g,L,m*.5,Nn,"right",800);const T=_.winners[0];if(!T)return;wc(i,T.key,x+m*1.9,L,m*.62);const M=bc(o,v,T.key);Qt(i,X0(T.per100),x+g-(r?m*1.9:m*2.1),L,m*.62,Nn,"right",900),Qt(i,M?`${M}番人気`:"",x+g,L,m*.36,nn,"right")})}function JS(i,t,e,n,s,o){if(n.phase==="settled"){i.fillStyle=Bh,i.fillRect(0,0,t,e*.2),Qt(i,`${cc} 第${n.raceNo}R 確定`,16,e*.1,e*.13,"#fff","left",900),Qt(i,"払戻金（100コインあたり）",t-16,e*.1,e*.1,nn,"right"),Au(i,0,e*.2,t,e*.8,n,!0);return}if(o){const d=Math.ceil(t*Cp)+12,f=t-d-12,[p,x]=Gh(n);Qt(i,`第${n.raceNo}R`,d,e*.14,e*.15,"#fff","left",900),Qt(i,p,d+e*.62,e*.14,e*.13,x,"left",900);const g=n.session,m=g.clock,v=g.prestart;let y="";if(v&&m<v.pitOut)y=`ピットアウトまで ${Math.ceil(v.pitOut-m)}秒`;else if(g.inPrestart)y=m>-60?`スタートまで ${Math.ceil(-m)}秒`:`スタートまで ${Hh(-m)}`;else if(n.phase==="judging")y="全艇ゴール";else{const M=g.order()[0];y=M.cpu.finished?"ゴール":`${Math.min(Vo,Math.max(1,M.cpu.laps+1))}周目 / ${Vo}周`}Qt(i,y,d+f,e*.14,e*.11,"#fff","right",800);const _=g.order(),L=Math.min((f-e*.3)/6.9,e*.36);Qt(i,g.inPrestart?"進入":"順位",d,e*.5,e*.09,nn,"left",800),_.forEach((M,P)=>{const b=d+e*.3+P*L*1.12;Jn(i,M.lane,b,e*.5,L);const w=v==null?void 0:v.get(M.lane),N=M.cpu.capsized?"転":w!=null&&w.flying?"F":w!=null&&w.late?"L":"";N&&Qt(i,N,b+L/2,e*.5+L*.7,L*.34,Vh,"center",900)});const T=n.sale.odds("win");Qt(i,"単勝",d,e*.86,e*.09,nn,"left",800);for(let M=1;M<=6;M++){const P=d+e*.3+(M-1)*L*1.12;Jn(i,M,P,e*.86,L*.42),Qt(i,ds(T.get(String(M))),P+L*.48,e*.86,L*.3,"#fff","left",800)}return}const r=t*.27;i.fillStyle=Bh,i.fillRect(0,0,r,e),Qt(i,cc,r/2,e*.13,e*.1,nn,"center",800),Qt(i,`第${n.raceNo}R`,r/2,e*.36,e*.22,"#fff","center",900);const[a,c]=Gh(n);n.phase==="open"?(Qt(i,"締切まで",r/2,e*.6,e*.1,"#fff","center",800),Qt(i,Hh(n.toClose??0),r/2,e*.8,e*.24,c,"center",900)):Qt(i,a,r/2,e*.7,e*.16,c,"center",900);const l=r+16,u=t-l-16,h=s%3;if(h===0){Qt(i,"出走表",l,e*.1,e*.09,nn,"left",800);for(let d=1;d<=6;d++){const f=(d-1)%2,p=Math.floor((d-1)/2),x=l+f*(u/2),g=e*(.32+p*.27);Jn(i,d,x,g,e*.2),Qt(i,n.racers[d-1]??"",x+e*.26,g,e*.15,"#fff","left",800,u/2-e*.3)}}else if(h===1){Qt(i,"単勝オッズ",l,e*.1,e*.09,nn,"left",800);const d=n.sale.odds("win");for(let f=1;f<=6;f++){const p=(f-1)%3,x=Math.floor((f-1)/3),g=l+p*(u/3),m=e*(.4+x*.38);Jn(i,f,g,m,e*.24);const v=bc(n,"win",String(f));Qt(i,ds(d.get(String(f))),g+u/3-24,m,e*.22,v===1?Nn:"#fff","right",900)}}else Qt(i,"2連単 人気順",l,e*.1,e*.09,nn,"left",800),Br(n,"exacta",6).forEach(([d,f],p)=>{const x=p%3,g=Math.floor(p/3),m=l+x*(u/3),v=e*(.4+g*.38);Qt(i,`${p+1}`,m+14,v,e*.12,nn,"right",800),wc(i,d,m+22,v,e*.2),Qt(i,ds(f),m+u/3-24,v,e*.2,p===0?Nn:"#fff","right",900)})}function QS(i,t,e,n){Ho(i,t,64,n,n.phase==="open"?"オッズ":n.phase==="settled"?"確定時のオッズ":"締切時のオッズ");const o=78,r=250,a=(e-o-50)/6;Qt(i,"単勝",20,o+14,26,nn,"left",800);const c=n.sale.odds("win");for(let f=1;f<=6;f++){const p=o+50+a*(f-.5);Jn(i,f,20,p,a*.7),Qt(i,ds(c.get(String(f))),r-10,p,a*.55,bc(n,"win",String(f))===1?Nn:"#fff","right",900)}const l=n.sale.odds("exacta"),u=new Set(Br(n,"exacta",3).map(f=>f[0])),h=r+40,d=(t-h-20)/7;Qt(i,"2連単（縦 1着 × 横 2着）",h,o+14,26,nn,"left",800);for(let f=1;f<=6;f++)Jn(i,f,h+d*f+d/2-18,o+50+a*.5-4,36);for(let f=1;f<=6;f++){const p=o+50+a*(f+.5)-a*.15;if(p>e-10)break;Jn(i,f,h+d/2-18,p,36);for(let x=1;x<=6;x++){if(f===x)continue;const g=`${f}-${x}`;Qt(i,ds(l.get(g)),h+d*(x+1)-12,p,30,u.has(g)?Nn:"#fff","right",800)}}}function tw(i,t,e,n){Ho(i,t,60,n,"3連単 人気順");const o=Br(n,"trifecta",10),r=(e-60-16)/5;o.forEach(([a,c],l)=>{const h=16+(l<5?0:1)*(t/2),d=68+r*(l%5+.5);Qt(i,String(l+1),h+26,d,r*.42,nn,"right",800),wc(i,a,h+36,d,r*.56),Qt(i,ds(c),h+t/2-30,d,r*.5,l===0?Nn:"#fff","right",900)})}function ew(i,t,e,n){var r;if(n.phase==="settled"){Ho(i,t,60,n,"払戻金"),Au(i,0,60,t,e-60,n,!1);return}Ho(i,t,60,n,"出走表");const o=(e-60-12)/6;for(let a=1;a<=6;a++){const c=66+o*(a-.5);Jn(i,a,20,c,o*.8),Qt(i,n.racers[a-1]??"",30+o,c,o*.55,"#fff","left",800);const l=n.session.st[a],u=(r=n.session.prestart)==null?void 0:r.get(a).course,h=n.phase==="race"||n.phase==="judging"?`${u??""}コース${l!=null?`  ST ${l<0?"F":""}.${String(Math.round(Math.abs(l)*100)).padStart(2,"0")}`:""}`:"";Qt(i,h,t-20,c,o*.4,nn,"right",800)}}const $0=512,q0=288,Y0=15,nw=["closed","race","judging"],iw=.22,sw=8;class ow{constructor(){S(this,"camera",new Ln(30,$0/q0,1,2500));S(this,"target");S(this,"hidden",[]);S(this,"users",[]);S(this,"stats",{calls:0,triangles:0,frames:0});S(this,"acc",1);S(this,"first",!0);S(this,"pos",new A);S(this,"look",new A);S(this,"lookNow",new A);S(this,"goalPos",new A);S(this,"center",new A);S(this,"fov",30);S(this,"waterHorizon",new Jt);this.target=new Ri($0,q0,{depthBuffer:!0,generateMipmaps:!1,minFilter:In,magFilter:In}),this.target.texture.name="live"}get texture(){return this.target.texture}aim(t,e){const n=e.boats.filter(h=>!h.removed);this.center.set(0,0,0);for(const h of n)this.center.add(h.ph.origin);this.center.multiplyScalar(1/Math.max(1,n.length));const s=Math.max(12,...n.map(h=>Math.hypot(h.ph.origin.x-this.center.x,h.ph.origin.z-this.center.z)+6)),o=e.inPrestart||e.clock<3,r=o?this.center:e.order()[0].ph.origin;o?this.goalPos.set(-44,38,Math.max(-230,Math.min(150,r.z+45))):this.goalPos.set(-55,31,Math.max(-150,Math.min(150,r.z*.75)));const a=this.goalPos.distanceTo(r),l=Math.max(5,Math.min(60,2*Math.atan((o?s:10)/Math.max(1,a))*180/Math.PI)),u=this.first?1:1-Math.exp(-t*3);this.pos.lerp(this.goalPos,u),this.look.copy(r),this.lookNow.lerp(this.look,this.first?1:1-Math.exp(-t*5)),this.fov+=(l-this.fov)*(this.first?1:1-Math.exp(-t*4)),this.first=!1}cut(){this.first=!0}render(t,e,n,s){var _,L,T;if(this.acc+=t,this.acc<1/Y0)return!1;this.acc%=1/Y0;const o=this.camera;o.position.copy(this.pos),o.lookAt(this.lookNow),Math.abs(o.fov-this.fov)>.01&&(o.fov=this.fov,o.updateProjectionMatrix()),o.updateMatrixWorld();const r=[...this.hidden,...this.users].map(M=>M.visible);for(const M of this.hidden)M.visible=!1;for(const M of this.users)M.visible=!1;const a=s.uniforms,c=(_=a==null?void 0:a.uReflOn)==null?void 0:_.value,l=(L=a==null?void 0:a.uRefrOn)==null?void 0:L.value;a!=null&&a.uReflOn&&(a.uReflOn.value=0),a!=null&&a.uRefrOn&&(a.uRefrOn.value=0);const u=(T=a==null?void 0:a.uSkyHorizon)==null?void 0:T.value;a!=null&&a.uSkyHorizon&&u instanceof Jt&&(a.uSkyHorizon.value=this.waterHorizon.copy(u).multiplyScalar(iw));const h=e.shadowMap.autoUpdate;e.shadowMap.autoUpdate=!1;const d=n.userData.sky,f=d==null?void 0:d.position.clone();d==null||d.position.copy(o.position);const p=e.getRenderTarget(),x=e.info,g=x.render.calls,m=x.render.triangles,v=x.autoReset;return x.autoReset=!1,e.setRenderTarget(this.target),e.clear(),e.render(n,o),this.stats={calls:x.render.calls-g,triangles:x.render.triangles-m,frames:this.stats.frames+1},x.autoReset=v,e.setRenderTarget(p),e.shadowMap.autoUpdate=h,f&&d.position.copy(f),a!=null&&a.uReflOn&&(a.uReflOn.value=c),a!=null&&a.uRefrOn&&(a.uRefrOn.value=l),a!=null&&a.uSkyHorizon&&u&&(a.uSkyHorizon.value=u),[...this.hidden,...this.users].forEach((M,P)=>M.visible=r[P]),!0}dispose(){this.target.dispose()}}class rw{constructor(t,e,n){S(this,"broadcast");S(this,"boards",[]);S(this,"slots",[]);S(this,"bigOverlay",null);S(this,"bigBoard",null);S(this,"program");S(this,"t",0);S(this,"paintT",0);S(this,"frustum",new mc);S(this,"m",new re);S(this,"box",new ps);S(this,"liveShown",!1);this.program=t,this.broadcast=n;const s=new pr("small"),o=new pr("odds");this.boards.push(s,o);let r=0;for(const a of e)if(a.kind==="big"){const c=new pr("big");if(this.boards.push(c),this.bigBoard=c,this.slots.push({screen:a,board:c,live:!1,current:null}),n){const l=a.size.w*Cp,u=new bi({map:n.texture,toneMapped:!0}),h=new Nt(new Xe(l,a.size.h),u);h.name="screen:big-live",h.position.set(-a.size.w/2+l/2,0,.03),h.visible=!1,a.mesh.add(h),this.bigOverlay=h,n.users.push(h)}}else if(a.id==="board-s"){const c=new pr("odds3");this.boards.push(c),this.slots.push({screen:a,board:c,live:!1,current:null})}else if(a.id==="board-n"){const c=new pr("card");this.boards.push(c),this.slots.push({screen:a,board:c,live:!1,current:null})}else a.kind==="deck"?this.slots.push({screen:a,board:s,live:!!n,current:null}):a.kind==="odds"&&(a.px.w>=1024?this.slots.push({screen:a,board:o,live:!1,current:null}):this.slots.push({screen:a,board:s,live:!!n&&r++%2===1,current:null}));if(n)for(const a of this.slots)a.live&&n.users.push(a.screen.mesh);this.apply(!0)}get isLive(){return!!this.broadcast&&nw.includes(this.program.phase)}apply(t=!1){var n;const e=this.isLive;for(const s of this.slots){const o=s.live&&e?this.broadcast.texture:s.board.texture;if(o===s.current&&!t)continue;s.current=o,UM(s.screen,o);const r=s.screen.mesh.material,a=o===((n=this.broadcast)==null?void 0:n.texture);r.toneMapped!==a&&(r.toneMapped=a,r.needsUpdate=!0)}this.bigOverlay&&(this.bigOverlay.visible=e)}update(t,e,n,s,o){this.t+=t,this.apply();const r=this.isLive;if(this.paintT-=t,this.paintT<=0){this.paintT=.25;const a=Math.floor(this.t/sw);for(const c of this.boards)c.update(this.program,a,c===this.bigBoard&&r)}this.liveShown=!1,!(!this.broadcast||!r)&&(this.broadcast.aim(t,this.program.session),this.anyLiveVisible(s)&&(this.liveShown=this.broadcast.render(t,e,n,o)||this.liveShown))}cut(){var t;(t=this.broadcast)==null||t.cut()}anyLiveVisible(t){t.updateMatrixWorld(),this.m.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.m);for(const e of this.broadcast.users)if(!(!e.visible&&e!==this.bigOverlay)&&(this.box.setFromObject(e),this.frustum.intersectsBox(this.box)))return!0;return!1}dispose(){var t;for(const e of this.boards)e.dispose();(t=this.broadcast)==null||t.dispose()}}const pn="コイン",j0=1e4,Pp="boatgame.wallet.v1";function aw(){var i;try{const t=(i=globalThis.localStorage)==null?void 0:i.getItem(Pp);if(!t)return null;const e=JSON.parse(t);return typeof e.free!="number"||typeof e.paid!="number"?null:{free:Math.max(0,Math.floor(e.free)),paid:Math.max(0,Math.floor(e.paid))}}catch{return null}}class cw{constructor(t={}){S(this,"_free");S(this,"_paid");S(this,"persist");S(this,"listeners",new Set);this.persist=t.persist??!0;const e=this.persist?aw():null;this._free=(e==null?void 0:e.free)??t.free??j0,this._paid=(e==null?void 0:e.paid)??t.paid??0}get free(){return this._free}get paid(){return this._paid}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}spendFree(t){return!(t>0)||!Number.isInteger(t)||t>this._free?!1:(this._free-=t,this.changed(),!0)}addFree(t){!(t>0)||!Number.isInteger(t)||(this._free+=t,this.changed())}addPaid(t){!(t>0)||!Number.isInteger(t)||(this._paid+=t,this.changed())}spendPaid(t){return!(t>0)||!Number.isInteger(t)||t>this._paid?!1:(this._paid-=t,this.changed(),!0)}reset(){this._free=j0,this._paid=0,this.changed()}changed(){var t;if(this.persist)try{(t=globalThis.localStorage)==null||t.setItem(Pp,JSON.stringify({free:this._free,paid:this._paid}))}catch{}for(const e of this.listeners)e(this)}}const Z0=[{id:"type",label:"式別"},{id:"lanes",label:"艇番"},{id:"amount",label:"金額"},{id:"confirm",label:"確認"},{id:"issued",label:"発券"}],lw=["1着","2着","3着"],hw=[1,2,5,10,50],Dl={closed:"締切ました",empty:"艇番を選んでください",units:"金額が正しくありません","too-many":`1枚 ${Tu}点までです`,funds:"残高が足りません",type:"この式別は発売していません"},Ye=i=>i.toLocaleString("ja-JP"),K0=i=>i==null?"-":i>=1e3?String(Math.floor(i)):i.toFixed(1),Bi=(i,t="")=>`<span class="tm-lane l${i}${t}">${i}</span>`,Oa=i=>{const t=i.includes("=")?"=":"-";return $s(i).map(e=>Bi(e)).join(`<i class="tm-sep">${t}</i>`)},uw=i=>{const t=Math.ceil(i/1e3);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`};function dw(i){var Y;const{sale:t,wallet:e}=i,n=i.now??Date.now,s=document.createElement("div");s.className="tm-overlay",s.innerHTML=`
    <div class="tm" role="dialog" aria-label="舟券の券売機">
      <header class="tm-head">
        <b class="tm-title"></b>
        <span class="tm-state"></span>
        <span class="tm-bal"></span>
        <button class="tm-close" data-act="close" aria-label="閉じる">閉じる</button>
      </header>
      <div class="tm-body">
        <section class="tm-main"></section>
        <section class="tm-side">
          <nav class="tm-tabs"></nav>
          <div class="tm-sidebody tm-scroll"></div>
        </section>
      </div>
    </div>`,(i.parent??document.body).appendChild(s);const o=I=>s.querySelector(I);let r="type",a=t.types[0],c=[new Set,new Set,new Set],l=1,u="odds",h=1,d=a,f=null,p="";const x=()=>fn[a],g=()=>bS(x(),c.slice(0,x().picks).map(I=>[...I].sort((z,k)=>z-k))),m=()=>{c=[new Set,new Set,new Set],p=""};function v(){o(".tm-title").textContent=t.title;const I=t.remaining(n()),z=o(".tm-state");z.className=`tm-state s-${t.state}`,z.textContent=t.state==="open"?I==null?"発売中":`発売中 締切まで ${uw(I)}`:t.state==="closed"?"締切":"確定",z.classList.toggle("soon",I!=null&&I<6e4),o(".tm-bal").innerHTML=`残高 <b>${Ye(e.free)}</b> ${pn}`}function y(){const I=Z0.findIndex(z=>z.id===r);return`<ol class="tm-steps">${Z0.map((z,k)=>`<li class="${k===I?"on":k<I?"done":""}">${z.label}</li>`).join("")}</ol>`}function _(){const I=o(".tm-main");if(t.state==="settled")return void(I.innerHTML=M());if(t.state==="closed"){I.innerHTML=`<div class="tm-closed"><b>締切ました</b><p>レースの結果が確定すると、ここで払戻を受け取れます。</p><p>購入した舟券 ${t.tickets.length}枚 ／ ${Ye(t.tickets.reduce((rt,ct)=>rt+ct.cost,0))} ${pn}</p></div>`;return}const z=g().length;let k="",Z="";if(r==="type")k=`<p class="tm-ask">式別を選んでください</p><div class="tm-types">${t.types.map(rt=>`<button data-act="type" data-v="${rt}" class="${rt===a?"on":""}"><b>${fn[rt].short}</b><small>${fn[rt].name}</small><small>${L(rt)}</small></button>`).join("")}</div>`;else if(r==="lanes"){const rt=x();k=`<p class="tm-ask"><b>${rt.short}</b> 艇番を選んでください<small>（複数選ぶとフォーメーション）</small></p><div class="tm-grid">${Array.from({length:rt.picks},(ct,dt)=>{const ot=c[dt].size===6;return`<div class="tm-row"><span class="tm-place">${rt.ordered?lw[dt]:""}</span>${ri.map(wt=>`<button data-act="lane" data-r="${dt}" data-v="${wt}" class="tm-lane l${wt} ${c[dt].has(wt)?"on":""}">${wt}</button>`).join("")}<button data-act="all" data-r="${dt}" class="tm-all ${ot?"on":""}">全</button></div>`}).join("")}</div>`,Z=`<span class="tm-pts">${z}点</span><button data-act="back">戻る</button><button data-act="next" class="tm-go" ${z?"":"disabled"}>金額へ</button>`}else if(r==="amount")k=`<p class="tm-ask">1点あたりの金額</p>
        <div class="tm-amount"><button data-act="units" data-v="-1" aria-label="減らす">−</button><output><b>${Ye(l*Fe)}</b> ${pn}</output><button data-act="units" data-v="1" aria-label="増やす">＋</button></div>
        <div class="tm-chips">${hw.map(rt=>`<button data-act="setunits" data-v="${rt}" class="${rt===l?"on":""}">${Ye(rt*Fe)}</button>`).join("")}</div>
        <p class="tm-sum">${z}点 × ${Ye(l*Fe)} ＝ <b>${Ye(z*l*Fe)}</b> ${pn}</p>`,Z='<button data-act="back">戻る</button><button data-act="next" class="tm-go">確認へ</button>';else if(r==="confirm"){const rt=g(),ct=t.odds(a),dt=rt.length*l*Fe;k=`<p class="tm-ask">この内容で発券します</p>
        <div class="tm-confirm"><div class="tm-ctype">${x().name}</div>${rt.map(ot=>`<div class="tm-cline">${Oa(ot)}<span class="tm-codds">${K0(ct.get(ot))}倍</span><span>${Ye(l*Fe)}</span></div>`).join("")}</div>`,Z=`<span class="tm-pts tm-total">${rt.length}点 合計 <b>${Ye(dt)}</b><small>購入後の残高 ${Ye(e.free-dt)}</small></span><button data-act="back">戻る</button><button data-act="buy" class="tm-go" ${dt>e.free?"disabled":""}>発券</button>`}else k=f?`<p class="tm-ask">お取りください</p><div class="tm-slot"></div>${T(f)}`:"",Z='<button data-act="again" class="tm-go">続けて買う</button>';I.innerHTML=`${y()}<div class="tm-step tm-scroll">${k}</div>${p?`<p class="tm-msg">${p}</p>`:""}${Z?`<div class="tm-foot">${Z}</div>`:""}`}const L=I=>{const z=fn[I];return z.picks===1?"1着を当てる":z.ordered?`1〜${z.picks}着を順番どおり`:`1〜${z.picks}着の組（順不同）`};function T(I){return`<div class="tm-paper"><div class="tm-ph"><b>舟券</b><span>${t.title}</span></div><div class="tm-pt">${fn[I.type].name}</div><div class="tm-pk">${I.picks.slice(0,4).map(z=>`<div>${Oa(z.key)}<span>${Ye(z.units*Fe)}</span></div>`).join("")}${I.picks.length>4?`<div class="tm-more">ほか ${I.picks.length-4}点</div>`:""}</div><div class="tm-pf">${I.picks.length}点 合計 ${Ye(I.cost)} ${pn}<small>No.${String(I.id).padStart(4,"0")}</small></div></div>`}function M(){const I=t.settlement,z=I.outcome,k=t.unclaimed(),Z=t.types.map(dt=>{const ot=I.types[dt];if(!ot)return"";const wt=ot.status==="void"?'<span class="tm-void">不成立（返還）</span>':ot.status==="special"?`<span class="tm-void">特払い ${Ye(ot.specialPer100)}</span>`:ot.winners.map(F=>`<span class="tm-win">${Oa(F.key)}<b>${Ye(F.per100)}</b></span>`).join("");return`<div class="tm-rrow"><span class="tm-rt">${fn[dt].short}</span>${wt}</div>`}).join(""),rt=z.order.length?z.order.map((dt,ot)=>`<span class="tm-ord"><small>${ot+1}着</small>${Bi(dt)}</span>`).join(""):'<span class="tm-void">ゴール艇なし（レース不成立）</span>',ct=[z.returned.length?`返還: ${z.returned.map(dt=>Bi(dt," sm")).join("")}（フライング・出遅れ・欠場）`:"",I.result.capsized.length?`転覆: ${I.result.capsized.map(dt=>Bi(dt," sm")).join("")}（失格・返還なし）`:"",I.result.move?`決まり手: ${I.result.move}`:""].filter(Boolean);return`<div class="tm-result tm-scroll">
      <p class="tm-ask">レース結果（確定）</p>
      <div class="tm-orders">${rt}</div>
      ${ct.map(dt=>`<p class="tm-note">${dt}</p>`).join("")}
      <div class="tm-rtable"><div class="tm-rhead">払戻金（100${pn}あたり）</div>${Z}</div>
      </div>
      <div class="tm-foot">${k>0?`<button data-act="claim" class="tm-go tm-claim">払戻を受け取る <b>${Ye(k)}</b> ${pn}</button>`:`<span class="tm-pts">${t.tickets.some(dt=>dt.payout>0)?"払戻を受け取りました":t.tickets.length?"的中した舟券はありません":""}</span>`}</div>`}function P(){const I=t.tickets.length;o(".tm-tabs").innerHTML=`<button data-act="tab" data-v="odds" class="${u==="odds"?"on":""}">オッズ</button><button data-act="tab" data-v="tickets" class="${u==="tickets"?"on":""}">購入した舟券${I?` <i>${I}</i>`:""}</button>`,o(".tm-sidebody").innerHTML=u==="odds"?N():O()}function b(I){const z=new Map;return[...I.entries()].filter(k=>k[1]!=null).sort((k,Z)=>k[1]-Z[1]).forEach(([k],Z)=>z.set(k,Z+1)),z}const w=(I,z,k)=>{const Z=k.get(I)??999,rt=Z<=3?"hot":Z<=10?"warm":"",ct=d===a&&g().includes(I)?" sel":"";return`<button data-act="pick" data-v="${I}" class="tm-odd ${rt}${ct}">${K0(z.get(I))}</button>`};function N(){const I=`<div class="tm-otypes">${t.types.map(dt=>`<button data-act="otype" data-v="${dt}" class="${dt===d?"on":""}">${fn[dt].short}</button>`).join("")}</div>`,z=fn[d],k=t.odds(d),Z=b(k);let rt="";if(z.picks===1)rt=`<table class="tm-otable tm-win"><tr><th>艇</th><th>選手</th><th>オッズ</th><th>人気</th></tr>${ri.map(dt=>{var wt;const ot=Zn(z,[dt]);return`<tr><td>${Bi(dt)}</td><td class="tm-name">${((wt=i.racers)==null?void 0:wt[dt-1])??""}</td><td>${w(ot,k,Z)}</td><td class="tm-rank">${Z.get(ot)??"-"}</td></tr>`}).join("")}</table>`;else if(z.picks===2)rt=`<table class="tm-otable"><tr><th class="tm-corner">1着＼2着</th>${ri.map(dt=>`<th>${Bi(dt)}</th>`).join("")}</tr>${ri.map(dt=>`<tr><th>${Bi(dt)}</th>${ri.map(ot=>dt===ot?'<td class="tm-x"></td>':z.ordered||dt<ot?`<td>${w(Zn(z,[dt,ot]),k,Z)}</td>`:'<td class="tm-x"></td>').join("")}</tr>`).join("")}</table>`;else{const dt=h;rt=`<div class="tm-firsts"><span>1着</span>${ri.map(ot=>`<button data-act="first" data-v="${ot}" class="tm-lane l${ot} ${ot===dt?"on":""}">${ot}</button>`).join("")}</div>
        <table class="tm-otable"><tr><th class="tm-corner">2着＼3着</th>${ri.map(ot=>`<th>${Bi(ot)}</th>`).join("")}</tr>${ri.filter(ot=>ot!==dt).map(ot=>`<tr><th>${Bi(ot)}</th>${ri.map(wt=>wt===dt||wt===ot?'<td class="tm-x"></td>':`<td>${w(Zn(z,[dt,ot,wt]),k,Z)}</td>`).join("")}</tr>`).join("")}</table>`}const ct=t.state==="open"?"締切まで変わります。数字を押すとその買い目を選びます":t.state==="closed"?"締切時のオッズ":"確定時のオッズ";return`${I}${rt}<p class="tm-onote">${ct}</p>`}function O(){if(!t.tickets.length)return'<p class="tm-empty">まだ購入していません</p>';const I=t.state==="settled",z={hit:"的中",miss:"",refund:"返還",special:"特払い"},k=[...t.tickets].reverse().map(ct=>`<div class="tm-tk ${I?ct.payout>0?"win":"lose":""}">
        <div class="tm-tkh"><b>${fn[ct.type].short}</b><span>No.${String(ct.id).padStart(4,"0")}</span><span>${ct.picks.length}点 ${Ye(ct.cost)}</span>${I?`<b class="tm-tkp">${ct.payout?`払戻 ${Ye(ct.payout)}`:"はずれ"}${ct.claimed&&ct.payout?"（受取済）":""}</b>`:""}</div>
        <div class="tm-tkb">${ct.picks.map(dt=>`<span class="tm-tkk ${dt.kind??""}">${Oa(dt.key)}<small>${Ye(dt.units*Fe)}</small>${dt.kind&&z[dt.kind]?`<em>${z[dt.kind]}</em>`:""}</span>`).join("")}</div></div>`).join(""),Z=t.tickets.reduce((ct,dt)=>ct+dt.cost,0),rt=t.tickets.reduce((ct,dt)=>ct+dt.payout,0);return`<p class="tm-tsum">購入 ${Ye(Z)} ${pn}${I?` ／ 払戻 ${Ye(rt)} ${pn}`:""}</p>${k}`}function U(){v(),_(),P()}function V(I,z,k){switch(p="",I){case"close":return ht();case"type":a!==z&&m(),a=z,d=a,r="lanes";break;case"lane":{const Z=Number(z);c[k].has(Z)?c[k].delete(Z):c[k].add(Z);break}case"all":c[k]=c[k].size===6?new Set:new Set(ri);break;case"units":l=Math.min(Ap,Math.max(1,l+Number(z)));break;case"setunits":l=Number(z);break;case"next":if(r==="lanes"){const Z=g().length;Z?Z>Tu?p=Dl["too-many"]:r="amount":p=Dl.empty}else r==="amount"&&(r="confirm");break;case"back":r=r==="confirm"?"amount":r==="amount"?"lanes":"type";break;case"buy":{t.tick(n());const Z=t.buy(e,a,g(),l);typeof Z=="string"?p=Dl[Z]:(f=Z,r="issued");break}case"again":m(),f=null,r="type";break;case"claim":t.claim(e),u="tickets";break;case"tab":u=z;break;case"otype":d=z;break;case"first":h=Number(z);break;case"pick":{if(t.state!=="open"||!z)break;a=d,m(),$s(z).forEach((Z,rt)=>c[rt].add(Z)),r="amount";break}}U()}s.addEventListener("click",I=>{const z=I.target.closest("[data-act]");!z||!s.contains(z)||z.disabled||V(z.dataset.act,z.dataset.v,Number(z.dataset.r??0))}),s.addEventListener("pointerdown",I=>{I.target===s&&ht()});const B=I=>{I.key==="Escape"&&ht()};window.addEventListener("keydown",B);let X=t.state,Q=!1,j=0;const pt=t.onChange(()=>{t.state!==X?(X=t.state,t.state!=="open"&&(r="type"),U()):Q=!0}),vt=(Y=e.onChange)==null?void 0:Y.call(e,()=>v()),Mt=window.setInterval(()=>{t.tick(n()),v();const I=n();Q&&I-j>2e3&&(Q=!1,j=I,P())},250);let lt=!1;function ht(){var I;lt||(lt=!0,window.clearInterval(Mt),window.removeEventListener("keydown",B),pt(),vt==null||vt(),s.remove(),(I=i.onClose)==null||I.call(i))}return U(),{el:s,close:ht,refresh:U}}const Es=i=>i.toLocaleString("ja-JP"),fw=i=>`<span class="tm-lane l${i}">${i}</span>`,pw=i=>{const t=i.includes("=")?"=":"-";return $s(i).map(e=>fw(e)).join(`<i class="tm-sep">${t}</i>`)};function mw(i){var p;const{wallet:t}=i,e=document.createElement("div");e.className="tm-overlay",e.innerHTML=`
    <div class="tm pm" role="dialog" aria-label="払戻機">
      <header class="tm-head">
        <b class="tm-title">払戻機${i.machineId?` ${i.machineId}`:""}</b>
        <span class="tm-state s-settled">払戻</span>
        <span class="tm-bal"></span>
        <button class="tm-close" data-act="close" aria-label="閉じる">閉じる</button>
      </header>
      <div class="pm-body tm-scroll"></div>
      <div class="tm-foot pm-foot"></div>
    </div>`,(i.parent??document.body).appendChild(e);const n=x=>e.querySelector(x);let s="insert",o=0;function r(){const x=[];for(const g of i.sales())for(const m of g.tickets)(!m.claimed||m.payout===0)&&x.push({sale:g,t:m});return x}function a(){var L;n(".tm-bal").innerHTML=`残高 <b>${Es(t.free)}</b> ${pn}`;const x=r(),g=x.reduce((T,M)=>T+(M.t.claimed?0:M.t.payout),0),m=(((L=i.pending)==null?void 0:L.call(i))??[]).filter(T=>T.tickets.length),v=m.length?`<p class="pm-pend">未確定の舟券: ${m.map(T=>`${T.title} ${T.tickets.length}枚`).join("、")}（確定してから払い戻せます）</p>`:"";let y="",_="";if(s==="insert")y=`<div class="tm-closed pm-insert"><b>舟券を入れてください</b><p>的中した舟券・返還の舟券を払い戻します</p>${v}</div>`,_='<button data-act="insert" class="tm-go">舟券を入れる</button>';else if(s==="show"){const T=x.filter(P=>P.t.payout>0&&!P.t.claimed),M=x.filter(P=>P.t.payout===0);y=T.length?`<p class="tm-ask">払戻金額</p>${T.map(P=>c(P.sale,P.t)).join("")}`:`<div class="tm-closed pm-insert"><b>払戻はありません</b><p>${M.length?`はずれの舟券 ${M.length}枚`:"確定した舟券がありません"}</p>${v}</div>`,T.length&&M.length&&(y+=`<p class="tm-tsum">はずれ ${M.length}枚</p>`),T.length&&(y+=v),_=g>0?`<span class="tm-pts">合計 <b>${Es(g)}</b> ${pn}</span><button data-act="pay" class="tm-go tm-claim">支払 <b>${Es(g)}</b> ${pn}</button>`:'<button data-act="close" class="tm-go">閉じる</button>'}else y=`<div class="tm-closed pm-insert"><b>お受け取りください</b><p>${Es(o)} ${pn} を残高に入れました</p></div>`,_='<button data-act="close" class="tm-go">閉じる</button>';n(".pm-body").innerHTML=y,n(".pm-foot").innerHTML=_}function c(x,g){const m={hit:"的中",miss:"",refund:"返還",special:"特払い"};return`<div class="tm-tk win"><div class="tm-tkh"><b>${fn[g.type].short}</b><span>${x.title}</span><span>No.${String(g.id).padStart(4,"0")}</span><b class="tm-tkp">払戻 ${Es(g.payout)}</b></div>
      <div class="tm-tkb">${g.picks.filter(v=>(v.payout??0)>0).map(v=>`<span class="tm-tkk ${v.kind??""}">${pw(v.key)}<small>${Es(v.units*Fe)}</small>${v.kind&&m[v.kind]?`<em>${m[v.kind]}</em>`:""}</span>`).join("")}</div></div>`}function l(x){if(x==="close")return f();x==="insert"&&(s="show"),x==="pay"&&(o=i.sales().reduce((g,m)=>g+m.claim(t),0),s="paid"),a()}e.addEventListener("click",x=>{const g=x.target.closest("[data-act]");!g||!e.contains(g)||g.disabled||l(g.dataset.act)}),e.addEventListener("pointerdown",x=>{x.target===e&&f()});const u=x=>{x.key==="Escape"&&f()};window.addEventListener("keydown",u);const h=(p=t.onChange)==null?void 0:p.call(t,()=>n(".tm-bal").innerHTML=`残高 <b>${Es(t.free)}</b> ${pn}`);let d=!1;function f(){var x;d||(d=!0,window.removeEventListener("keydown",u),h==null||h(),e.remove(),(x=i.onClose)==null||x.call(i))}return a(),{el:e,close:f,refresh:a}}const gw=1.3;function xw(i){var dt;const{renderer:t,scene:e,camera:n,sun:s,waves:o}=i;Us!=="drift"&&yc("drift");for(const ot of["hud","lever","lean-pad","steer-pad","wheel","start","touch","buttons","prop-panel","rotate","banner"])(dt=document.getElementById(ot))==null||dt.setAttribute("hidden","");const r=document.createElement("style");r.textContent=vw+dS,document.head.appendChild(r);const a=new Sp(o);let c=!1,l=!!wo;try{localStorage.getItem("boatgame.cpuBrain")==="rule"&&(c=!1),localStorage.getItem("boatgame.cpuControl")==="rule"&&(l=!1)}catch{}a.setPolicy(c?wp:null),a.setControl(l?wo:null);const u=new aS(e,a,o),h=SS(u.course);e.add(h.group),u.water.hide(h.group);const d=u.course.group.getObjectByName("seats");d&&u.water.hide(d);const f=new qS(a),p=new cw,x=new ow;x.hidden.push(h.group),d&&x.hidden.push(d);const g=new rw(f,h.screens,x),m=rt("div","vn-touch"),v=rt("div","vn-hud");v.innerHTML='<div class="vn-race"><b id="vn-rno"></b><span id="vn-clock"></span><span id="vn-lap"></span></div><div class="vn-wallet" id="vn-wallet"></div><ol class="vn-order" id="vn-order"></ol>';const y=rt("div","vn-bar"),_=ct("移動",y),L=ct("メニュー",y),T=rt("div","vn-menu");T.hidden=!0;const M=rt("button","vn-use");M.hidden=!0;const P=rt("div","vn-toast"),b=rt("div","vn-help"),w=matchMedia("(pointer: coarse)").matches;b.textContent=w?"左下を触って動かすと歩く（端まで引くと早歩き）・右側をドラッグで見回す":"WASD / ↑↓ で歩く・← → で向き・Shift で早歩き・ドラッグで見回す（クリックでマウス視点、Esc で解除）",setTimeout(()=>b.classList.add("fade"),6e3);for(const ot of[_,L,M,...T.querySelectorAll("button")])ot.addEventListener("pointerdown",wt=>wt.stopPropagation());const N=new hS(m,h.world),O=h.spots.deck1m;N.place(O.x,O.y,O.z,O.yaw,O.pitch);for(const ot of Object.values(h.spots)){const wt=ct(ot.name,T);wt.addEventListener("pointerdown",F=>F.stopPropagation()),wt.onclick=()=>{N.place(ot.x,ot.y,ot.z,ot.yaw,ot.pitch),T.hidden=!0}}_.onclick=()=>T.hidden=!T.hidden,L.onclick=()=>{location.hash="",location.reload()};const U={session:a,program:f,wallet:p,feed:g,venue:h,avatar:N,render:u,onUseTicketMachine:i.onUseTicketMachine??null,setInputEnabled(ot){N.enabled=ot},nearMachine:()=>V,stop(){t.setAnimationLoop(null),N.dispose(),B==null||B.close();for(const ot of[m,v,y,T,M,P,b,r])ot.remove();g.dispose(),window.removeEventListener("resize",Mt)}};let V=null;M.addEventListener("pointerdown",ot=>ot.stopPropagation()),M.onclick=()=>{V&&(document.pointerLockElement&&document.exitPointerLock(),U.onUseTicketMachine?U.onUseTicketMachine(V.id,V):X(V))};let B=null;function X(ot){B==null||B.close(),U.setInputEnabled(!1),M.hidden=!0;const wt=()=>{B=null,U.setInputEnabled(!0),V=null},F=ot.kind==="sell"?dw({sale:f.sale,wallet:p,racers:f.racers,now:f.now,onClose:wt}):mw({sales:()=>f.history,pending:()=>f.sale.state==="settled"?[]:[f.sale],wallet:p,machineId:ot.id,onClose:wt});B={close:()=>F.close(),spot:ot}}let Q=0;function j(ot,wt=2.5){P.textContent=ot,P.classList.add("show"),clearTimeout(Q),Q=window.setTimeout(()=>P.classList.remove("show"),wt*1e3)}const pt=new A;function vt(){if(!N.enabled||Math.abs(N.pos.y-J)>.3)return null;n.getWorldDirection(pt);let ot=null,wt=gw;for(const F of h.machines){const St=Math.hypot(N.pos.x-F.stand.x,N.pos.z-F.stand.z);if(St>=wt)continue;const Gt=Math.hypot(pt.x,pt.z)||1;-pt.x/Gt*F.normal.x+-pt.z/Gt*F.normal.z<.2||(ot=F,wt=St)}return ot}function Mt(){n.fov=window.innerWidth<window.innerHeight?72:55,n.near=.08,n.far=3e3,n.updateProjectionMatrix(),u.resize(window.innerHeight,n.fov,t.getPixelRatio())}window.addEventListener("resize",Mt),Mt(),f.on(ot=>{if(ot.type==="race"){if(u.clear(),g.cut(),(B==null?void 0:B.spot.kind)==="sell"){const wt=B.spot;B.close(),X(wt)}j(`${f.title} 発売開始`)}else if(ot.type==="phase"&&ot.phase==="closed")j(`第${f.raceNo}R 発売締切`);else if(ot.type==="result"){const wt=f.sale.unclaimed(),F=f.sale.tickets.length?wt>0?`　払戻 ${wt.toLocaleString()} ${pn}（払戻機へ）`:"　はずれ":"";j(`第${f.raceNo}R 確定 ${f.orderText()}${ot.settlement.result.move?"　"+ot.settlement.result.move:""}${F}`,6)}});const lt=new cu,ht=v.querySelector("#vn-clock"),Y=v.querySelector("#vn-lap"),I=v.querySelector("#vn-order"),z=v.querySelector("#vn-rno"),k=v.querySelector("#vn-wallet");let Z=0;return t.setAnimationLoop(()=>{var F,St;const ot=Math.min(lt.getDelta(),.05);f.update(ot)&&u.wakeUpdated(),N.update(ot),N.apply(n),n.updateMatrixWorld(),u.update(ot,n),g.update(ot,t,e,n,u.water),u.aimSun(s,N.pos,32),(F=e.userData.sky)==null||F.position.copy(n.position);const wt=vt();if(wt!==V&&!B&&(V=wt,M.hidden=!wt,wt&&(M.textContent=wt.kind==="sell"?`券売機を使う（${wt.id}）`:`払戻機を使う（${wt.id}）${f.unclaimed()>0?" 払戻あり":""}`)),Z-=ot,Z<=0){Z=.2,z.textContent=f.statusText();const Gt=a.clock,Yt=f.phase==="race"||f.phase==="judging",zt=((St=a.prestart)==null?void 0:St.pitOut)??-1/0;ht.textContent=!Yt||Gt<zt?"":Gt<0?`スタートまで ${(-Gt).toFixed(0)}秒`:`${Math.floor(Gt/60)}:${String(Math.floor(Gt%60)).padStart(2,"0")}`;const se=a.order(),Ut=se[0];Y.textContent=!Yt||Gt<0?"":Ut.cpu.finished?"ゴール":`${Math.min(Vo,Math.max(1,Ut.cpu.laps+1))}周目`;const D=f.pendingTickets().length,E=f.unclaimed();k.textContent=`残高 ${p.free.toLocaleString()} ${pn}${D?`　舟券 ${D}枚`:""}${E?`　払戻 ${E.toLocaleString()}`:""}`,I.innerHTML=se.map(q=>{const ft=q.lane===1||q.lane===5?"#111":"#fff",mt=q.cpu.capsized?"<em>転</em>":q.cpu.flying?"<em>F</em>":"";return`<li style="background:${Sc[q.lane-1]};color:${ft}">${q.lane}${mt}</li>`}).join("")}u.render(t,e,n)}),U;function rt(ot,wt){const F=document.createElement(ot);return F.className=wt,document.body.appendChild(F),F}function ct(ot,wt){const F=document.createElement("button");return F.textContent=ot,wt.appendChild(F),F}}const vw=`
.vn-touch { position: fixed; inset: 0; z-index: 2; touch-action: none; -webkit-user-select: none; user-select: none; }
.vn-hud { position: fixed; z-index: 3; pointer-events: none; left: calc(12px + env(safe-area-inset-left)); top: calc(8px + env(safe-area-inset-top));
  color: #fff; font-family: system-ui, sans-serif; text-shadow: 0 1px 2px rgba(0,0,0,.6); }
.vn-race { display: flex; gap: 8px; align-items: baseline; font-size: 13px; background: rgba(8,28,44,.45); border-radius: 8px; padding: 3px 8px; width: max-content; }
.vn-race b { font-size: 14px; }
.vn-wallet { margin-top: 3px; font-size: 12px; font-weight: 700; background: rgba(8,28,44,.45); border-radius: 8px; padding: 2px 8px; width: max-content; }
.vn-order { list-style: none; margin: 4px 0 0; padding: 0; display: flex; gap: 3px; }
.vn-order li { width: 20px; height: 20px; display: grid; place-items: center; border-radius: 4px; font: 900 12px system-ui, sans-serif; text-shadow: none; border: 1px solid rgba(255,255,255,.5); position: relative; }
.vn-order em { position: absolute; top: -9px; right: -5px; font-size: 9px; color: #ff6a4d; font-style: normal; text-shadow: 0 1px 2px #000; }
.vn-bar { position: fixed; z-index: 4; right: calc(12px + env(safe-area-inset-right)); top: calc(8px + env(safe-area-inset-top)); display: flex; gap: 8px; }
.vn-bar button, .vn-menu button { font: 700 13px system-ui, sans-serif; color: #fff; background: rgba(10,30,50,.5); border: 1px solid rgba(255,255,255,.5); border-radius: 10px; padding: 7px 12px; }
.vn-menu { position: fixed; z-index: 4; right: calc(12px + env(safe-area-inset-right)); top: calc(48px + env(safe-area-inset-top)); display: flex; flex-direction: column; gap: 6px; }
.vn-menu[hidden] { display: none; }
.vn-use { position: fixed; z-index: 4; left: 50%; bottom: calc(22px + env(safe-area-inset-bottom)); transform: translateX(-50%);
  font: 800 16px system-ui, sans-serif; color: #111; background: #ffd34d; border: 0; border-radius: 14px; padding: 12px 22px; box-shadow: 0 3px 12px rgba(0,0,0,.35); }
.vn-use[hidden] { display: none; }
.vn-toast { position: fixed; z-index: 5; left: 50%; top: 22%; transform: translate(-50%, -50%); font: 800 17px system-ui, sans-serif; color: #fff;
  background: rgba(0,0,0,.5); padding: 8px 16px; border-radius: 12px; opacity: 0; transition: opacity .3s; pointer-events: none; white-space: nowrap; }
.vn-toast.show { opacity: 1; }
.vn-help { position: fixed; z-index: 3; left: 50%; bottom: calc(8px + env(safe-area-inset-bottom)); transform: translateX(-50%); font: 12px system-ui, sans-serif;
  color: #fff; background: rgba(0,0,0,.35); padding: 4px 10px; border-radius: 8px; pointer-events: none; transition: opacity 1s; white-space: nowrap; }
.vn-help.fade { opacity: 0; }
`,Cs=new URLSearchParams(location.search),_w=Cs.get("view")==="model",$e=new F_({antialias:!0});$e.setPixelRatio(Math.min(window.devicePixelRatio,2));$e.toneMapping=rf;$e.toneMappingExposure=1;$e.shadowMap.enabled=!0;$e.shadowMap.type=sf;document.getElementById("app").appendChild($e.domElement);const Re=new O_;Re.fog=new tu(gu,250,1500);const _e=new Ln(60,1,.1,3e3);{const i=new Nt(new Hs(2e3,32,16),new Qn({side:bn,depthWrite:!1,fog:!1,uniforms:{uTop:{value:Kf},uHorizon:{value:gu},uSun:{value:kr}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 uTop; uniform vec3 uHorizon; uniform vec3 uSun; varying vec3 vDir;
        void main(){ float h = clamp(vDir.y, 0.0, 1.0); vec3 c = mix(uHorizon, uTop, pow(h, 0.45));
          c += vec3(1.0, 0.93, 0.8) * pow(max(dot(normalize(vDir), uSun), 0.0), 64.0) * 0.6;
          gl_FragColor = vec4(c, 1.0);
          #include <colorspace_fragment>
        }`}));i.renderOrder=-1,Re.add(i),Re.userData.sky=i}Re.add(new M2(14478591,2905440,1.1));const cn=new w2(16774112,2.4);cn.castShadow=!0;cn.shadow.mapSize.set(1024,1024);cn.shadow.camera.left=cn.shadow.camera.bottom=-4;cn.shadow.camera.right=cn.shadow.camera.top=4;cn.shadow.camera.near=1;cn.shadow.camera.far=40;cn.shadow.bias=-5e-4;Re.add(cn,cn.target);for(const i of Re.children)i.userData.keep=!0;const Mi=new V2,Cr=pu(3);Re.add(Cr.root);function Lp(){const i=window.innerWidth,t=window.innerHeight;$e.setSize(i,t),_e.aspect=i/t,_e.fov=i<t?75:60,_e.updateProjectionMatrix()}window.addEventListener("resize",Lp);Lp();_w?Mw():location.hash==="#race"?Q0():location.hash.startsWith("#match")?Ip(Number(location.hash.slice(6)),new op(document.getElementById("touch"))):location.hash==="#venue"?J0():(yw(),document.getElementById("b-watch").onclick=()=>{location.hash="race",Q0()},document.getElementById("b-venue").onclick=()=>{location.hash="venue",J0()});function J0(){$e.setAnimationLoop(null);for(const i of[...Re.children])i.userData.keep||Re.remove(i);xw({renderer:$e,scene:Re,camera:_e,sun:cn,waves:Mi})}function Q0(){$e.setAnimationLoop(null);for(const i of[...Re.children])i.userData.keep||Re.remove(i);bp({renderer:$e,scene:Re,camera:_e,sun:cn,waves:Mi})}function Ip(i,t){const e=i>=1&&i<=6?i:1+Math.floor(Math.random()*6);$e.setAnimationLoop(null);for(const n of[...Re.children])n.userData.keep||Re.remove(n);bp({renderer:$e,scene:Re,camera:_e,sun:cn,waves:Mi,player:{lane:e,controls:t}})}function Mw(){document.body.classList.add("model-view");for(const o of["hud","buttons","touch","start","lean-pad","lever","wheel"])document.getElementById(o).hidden=!0;const i=new Nt(new Oo(8,48),new Kt({color:6262691,roughness:.9}));i.rotation.x=-Math.PI/2,i.position.y=-.7,i.receiveShadow=!0,Re.add(i);const t=new b2(6,12,16777215,10470356);t.position.y=-.69,Re.add(t);const e=new A2(_e,$e.domElement);e.target.set(0,.35,-.2);const n={persp:[3.2,2,3.6],side:[5.5,.4,-.2],front:[0,.5,5.5],back:[0,.8,-5.5],top:[.001,6,-.2],rear34:[-3.2,1.6,-3.8],under:[2.6,-1.6,1.8]};Cs.get("cam")==="under"&&(i.visible=t.visible=!1);const s=n[Cs.get("cam")??"persp"]??n.persp;_e.position.set(...s),Cs.get("ortho")!==null&&(_e.fov=20,_e.position.multiplyScalar(3),_e.updateProjectionMatrix()),_e.position.multiplyScalar(Number(Cs.get("d")??1)),e.update(),cn.position.set(4,8,6),Cr.motor.rotation.y=Number(Cs.get("steer")??0),Cr.tilt.rotation.x=(Number(Cs.get("tilt")??ac)-ac)*Math.PI/180,Cr.tilt.position.y=ko.y+gn.motorHeight,$e.setAnimationLoop(()=>{e.update(),$e.render(Re,_e)})}function yw(){const i=new gp,t=new mp(Mi,i.render),e=new Nr(new wu(Mi,i.felt),t),n=new Float32Array(3),s=new xu(Mi),o=vu();Re.add(s.mesh,o);const r=new Mu(t);Re.add(r.group);const a=new yu(t);Re.add(a.mesh);const c=new Su(t);Re.add(c.points),s.hide(o,a.mesh,c.points);const l=document.getElementById("wfx"),u=()=>l.textContent=s.passes?"オン":"オフ";u(),l.onclick=()=>{s.passes=!s.passes;try{localStorage.setItem(Jf,s.passes?"1":"0")}catch{}u()};const h=document.getElementById("tphys"),d={v1:"従来",v2:"標準",drift:"ドリフト"},f=()=>h.textContent=d[Us];f(),h.onclick=()=>{yc(Us==="v1"?"v2":Us==="v2"?"drift":"v1");try{localStorage.setItem(jf,Us)}catch{}f()};const p=()=>c.resize(window.innerHeight,_e.fov,$e.getPixelRatio());p(),window.addEventListener("resize",p);const x=new op(document.getElementById("touch")),g=document.getElementById("banner");function m(K){g.textContent=K,g.classList.toggle("show",!!K),g.classList.toggle("small",K.length>6)}let v=0;const y={x:-18,z:-100,heading:0},_=()=>{i.reset(y.x,y.z),e.reset(y.x,y.z,y.heading,v),a.clear(),c.clear(),L=0,m("")};let L=0;_();const T=["追従","低い追従","真横","上から","中継"];let M=0;const P=document.getElementById("b-cam");P.onclick=()=>{M=(M+1)%T.length,P.textContent=`視点:${T[M]}`},P.textContent=`視点:${T[M]}`;const b=[1,3,5,10,0];let w=1;const N=document.getElementById("b-wave"),O=()=>N.textContent=Mi.heightCm>0?`波高 ${Mi.heightCm}cm`:"波なし";Mi.setHeightCm(b[w]),O(),N.onclick=()=>{w=(w+1)%b.length,Mi.setHeightCm(b[w]),O()},document.getElementById("b-reset").onclick=()=>{x.lever=0,_()};const U=document.getElementById("prop-panel");document.getElementById("b-prop").onclick=()=>U.hidden=!U.hidden,document.getElementById("pp-close").onclick=()=>U.hidden=!0;const V=[{key:"diameter",id:"diameter",scale:100,fmt:K=>`${K.toFixed(1)} cm`},{key:"pitch",id:"pitch",scale:100,fmt:K=>`${K.toFixed(1)} cm`},{key:"ear",id:"ear",scale:1,fmt:K=>K.toFixed(2)},{key:"cup",id:"cup",scale:1,fmt:K=>`${K.toFixed(2)} mm`}];try{Object.assign(e.prop,JSON.parse(localStorage.getItem(Ch)??"{}"))}catch{}const B=document.getElementById("pp-note");function X(){for(const K of V){const Et=e.prop[K.key]*K.scale;document.getElementById(`s-${K.id}`).value=String(Et),document.getElementById(`o-${K.id}`).textContent=K.fmt(Et)}B.textContent=`ピッチ比 ${(e.prop.pitch/e.prop.diameter).toFixed(2)}　${e.prop.blades}枚羽根`;try{localStorage.setItem(Ch,JSON.stringify(e.prop))}catch{}}for(const K of V)document.getElementById(`s-${K.id}`).addEventListener("input",Et=>{e.prop[K.key]=Number(Et.target.value)/K.scale,X()});document.getElementById("pp-reset").onclick=()=>{Object.assign(e.prop,$f),X()},X();let Q=0;try{const K=Number(localStorage.getItem(Ph));xr.includes(K)&&(Q=K)}catch{}e.tilt=Q;const j=document.getElementById("o-tilt"),pt=document.getElementById("tilt-note"),vt=pt.textContent??"";function Mt(){j.textContent=`${Q.toFixed(1)}°`;const K=Q!==e.tilt;pt.textContent=K?`走行中は変えられません。止まると ${Q.toFixed(1)}° になります`:vt,pt.classList.toggle("pending",K)}function lt(K){const Et=xr.indexOf(Q);Q=xr[Math.max(0,Math.min(xr.length-1,Et+K))];try{localStorage.setItem(Ph,String(Q))}catch{}Mt()}const ht="boatgame.motorHeight",Y=.05;let I=gn.motorHeight;try{const K=Number(localStorage.getItem(ht));localStorage.getItem(ht)!==null&&K>=0&&K<=.1&&(I=K)}catch{}gn.motorHeight=I;const z=document.getElementById("o-mh"),k=document.getElementById("mh-note"),Z=k.textContent??"";function rt(){const K=Math.round((I-Y)*100);z.textContent=K===0?"±0 cm":`${K>0?"+":""}${K} cm`;const Et=Math.abs(I-gn.motorHeight)>1e-4;k.textContent=Et?"走行中は変えられません。止まると反映されます":Z,k.classList.toggle("pending",Et)}function ct(K){I=Math.max(0,Math.min(.1,Math.round((I+K*.01)*100)/100));try{localStorage.setItem(ht,String(I))}catch{}rt()}document.getElementById("mh-dn").onclick=()=>ct(-1),document.getElementById("mh-up").onclick=()=>ct(1),rt(),document.getElementById("tilt-dn").onclick=()=>lt(-1),document.getElementById("tilt-up").onclick=()=>lt(1),Mt();const dt=document.getElementById("b-center");dt.onclick=()=>x.recenter();for(const K of document.querySelectorAll("button"))K.addEventListener("pointerdown",Et=>Et.stopPropagation());let ot=!1;const wt=document.getElementById("start"),F=document.getElementById("b-start");F.onclick=async()=>{F.disabled=!0,F.textContent="準備中…",x.tiltActive=await x.enableTilt(),dt.hidden=!x.tiltActive,yt(),wt.hidden=!0,ot=!0,_(),x.tiltActive||m(x.swap?"傾きが使えないので、中央のパッドで体重":"傾きが使えないので、下のスライダーでハンドル"),x.tiltActive||setTimeout(()=>m(""),2500)};let St=0;const Yt=[...document.getElementById("lane-pick").querySelectorAll("button")];for(const K of Yt)K.onclick=()=>{St=Number(K.dataset.lane);for(const Et of Yt)Et.classList.toggle("on",Et===K)};const zt=document.getElementById("b-match");zt.onclick=async()=>{zt.disabled=!0,zt.textContent="準備中…",x.tiltActive=await x.enableTilt(),Ip(St,x)};const se=document.getElementById("speed"),Ut=document.getElementById("rpm"),D=document.getElementById("m-rpm"),E=document.getElementById("tach"),q=document.getElementById("chip-cav"),ft=document.getElementById("lean-pad"),mt=document.getElementById("chip-vent"),ut=document.getElementById("meta"),Vt="boatgame.ctrlSwap";try{x.swap=localStorage.getItem(Vt)==="1"}catch{}const At=document.getElementById("ctrlswap");function yt(){rp(x),At.textContent=x.swap?"入れ替え":"標準"}yt(),At.onclick=()=>{x.swap=!x.swap;try{localStorage.setItem(Vt,x.swap?"1":"0")}catch{}yt()};const Zt=new A,xt=new A(0,0,1),It=new A,Ht=new A,gt=new A,tt=new A,bt=new A,Dt=new A,kt=new A(0,0,-1.75),C=new A,at=new cu,$=1/240;let st=0,_t=!0;$e.setAnimationLoop(()=>{const K=Math.min(at.getDelta(),.05);x.update(K);const Et=ot?x.input:{steer:0,throttle:0,leanX:0,leanZ:0};st+=K;let Wt=0;for(;st>=$&&Wt<16;)e.step($,L>0?{steer:0,throttle:0,leanX:0,leanZ:0}:Et,v),v+=$,st-=$,Wt++;Wt>=16&&(st=0),pp([e]),cp(e),e.forward(gt),i.update(K,e.origin.x,e.origin.z,gt.x,gt.z,e.pressure,e.spray,e.wakeMom)&&(s.updateWake(i.render),i.render.waveForce(e.comW.x,e.comW.z,n),e.extForce.set(n[0],0,n[1]),e.extTorque.set(0,n[2],0)),bt.set(0,1,0).applyQuaternion(e.quat),bt.y<.15&&(L===0&&m("転覆"),L+=K,L>2.5&&_());const ee=Cr;e.tilt!==Q&&e.speed()<1&&(e.tilt=Q,Mt()),Math.abs(gn.motorHeight-I)>1e-4&&e.speed()<1&&(gn.motorHeight=I,rt()),mu(ee,e,K),tt.set(-1,0,0).applyQuaternion(e.quat),e.toWorld(kt,C);const Rt=e.speed(),ue=1+.8*Math.max(e.propState.cav,e.propState.vent);e.propImmersion>.2&&Rt>1&&a.add(v,C,tt,Math.min(1,Rt/8)*ue),a.update(v),s.update(v,_e.position),r.update(v),r.setClock(v),c.update(K,v,e),Dt.set(gt.x,0,gt.z).normalize();const ge=Math.hypot(e.vel.x,e.vel.z),Pt=Math.min(.7,Math.max(0,(ge-2)/4)*.7);It.copy(Dt).multiplyScalar(1-Pt),ge>.1&&It.add(new A(e.vel.x/ge,0,e.vel.z/ge).multiplyScalar(Pt)),It.normalize(),_t?xt.copy(It):xt.lerp(It,1-Math.exp(-K*3)).normalize(),Zt.copy(e.origin).add(new A(0,.6,0));let ne=1-Math.exp(-K*4),Me=window.innerWidth<window.innerHeight?75:60;if(M===0)Ht.copy(Zt).addScaledVector(xt,-7).add(new A(0,2.6,0));else if(M===1)Ht.copy(Zt).addScaledVector(xt,-4.2).add(new A(0,.9,0));else if(M===2)Ht.copy(Zt).add(new A(-xt.z,0,xt.x).multiplyScalar(-7)).add(new A(0,1.2,0));else if(M===3)Ht.copy(Zt).add(new A(0,22,0)).addScaledVector(xt,-6),ne=1-Math.exp(-K*3);else{Ht.set(-55,31,Math.max(-150,Math.min(150,e.origin.z*.75))),ne=1-Math.exp(-K*2);const ke=_e.position.distanceTo(Zt);Me=Math.max(5,Math.min(50,2*Math.atan(5.5/Math.max(1,ke))*180/Math.PI))}Math.abs(_e.fov-Me)>.01&&(_e.fov+=(Me-_e.fov)*(1-Math.exp(-K*4)),_e.updateProjectionMatrix(),p()),_t?(_e.position.copy(Ht),_t=!1):_e.position.lerp(Ht,ne);const fe=t.height(_e.position.x,_e.position.z,v)+.4;_e.position.y<fe&&(_e.position.y=fe),M===4?_e.lookAt(Zt):_e.lookAt(Dt.copy(xt).multiplyScalar(M===3?4:2.5).add(Zt)),cn.position.copy(e.origin).addScaledVector(kr,20),cn.target.position.copy(e.origin),Re.userData.sky.position.copy(_e.position),se.textContent=(Rt*3.6).toFixed(0);const pe=e.rpm;Ut.textContent=(Math.round(pe/50)*50).toFixed(0),D.style.width=`${Math.min(100,pe/7500*100)}%`,E.classList.toggle("limit",pe>Hi.limitRpm-150);const Ie=e.propState.cav,De=e.propState.vent;q.textContent=`キャビ ${Math.round(Ie*100)}%`,mt.textContent=`吸い込み ${Math.round(De*100)}%`,q.classList.toggle("on",Ie>.08),mt.classList.toggle("on",De>.08);const Pi=e.attitude();ut.textContent=`トリム ${Pi.trim.toFixed(1)}°　傾き ${Pi.heel.toFixed(1)}°　チルト ${e.tilt.toFixed(1)}°`,ap(x,Et.steer);const zn=e.legForce,Ne=Math.min(1,Math.hypot(zn.x,zn.y-Ai*9.81,zn.z)/(Ai*9.81*2));ft.style.setProperty("--kick",Ne.toFixed(2)),s.renderPasses($e,Re,_e),$e.render(Re,_e)})}
