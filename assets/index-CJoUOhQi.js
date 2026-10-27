var Bp=Object.defineProperty;var Vp=(s,t,e)=>t in s?Bp(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var S=(s,t,e)=>Vp(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $h="170",bo={ROTATE:0,DOLLY:1,PAN:2},xo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hp=0,Lu=1,Gp=2,of=1,rf=2,Oi=3,fs=0,Tn=1,Ue=2,ls=0,Eo=1,Iu=2,Du=3,Nu=4,Wp=5,Ps=100,Xp=101,$p=102,qp=103,Yp=104,jp=200,Zp=201,Kp=202,Jp=203,Ul=204,Fl=205,Qp=206,tm=207,em=208,nm=209,im=210,sm=211,om=212,rm=213,am=214,kl=0,Ol=1,Bl=2,Io=3,Vl=4,Hl=5,Gl=6,Wl=7,af=0,cm=1,lm=2,hs=0,hm=1,um=2,dm=3,cf=4,fm=5,pm=6,mm=7,lf=300,Do=301,No=302,Xl=303,$l=304,fc=306,Qa=1e3,Ds=1001,ql=1002,Xn=1003,gm=1004,Vr=1005,Nn=1006,Cc=1007,Ns=1008,Zi=1009,hf=1010,uf=1011,Pr=1012,qh=1013,Bs=1014,bi=1015,qi=1016,Yh=1017,jh=1018,zo=1020,df=35902,ff=1021,pf=1022,hi=1023,mf=1024,gf=1025,To=1026,Uo=1027,pc=1028,Zh=1029,Kh=1030,Jh=1031,Qh=1033,Va=33776,Ha=33777,Ga=33778,Wa=33779,Yl=35840,jl=35841,Zl=35842,Kl=35843,Jl=36196,Ql=37492,th=37496,eh=37808,nh=37809,ih=37810,sh=37811,oh=37812,rh=37813,ah=37814,ch=37815,lh=37816,hh=37817,uh=37818,dh=37819,fh=37820,ph=37821,Xa=36492,mh=36494,gh=36495,xf=36283,xh=36284,vh=36285,_h=36286,xm=3200,vm=3201,vf=0,_m=1,as="",Ve="srgb",Go="srgb-linear",mc="linear",Te="srgb",Ys=7680,zu=519,Mm=512,ym=513,Sm=514,_f=515,wm=516,bm=517,Em=518,Tm=519,Uu=35044,Sr=35048,Fu="300 es",Yi=2e3,tc=2001;class Gs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$a=Math.PI/180,Mh=180/Math.PI;function Wo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function Je(s,t,e){return Math.max(t,Math.min(e,s))}function Am(s,t){return(s%t+t)%t}function Pc(s,t,e){return(1-e)*s+e*t}function jo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Rm={DEG2RAD:$a};class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,e,n,i,o,r,a,c,l){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l)}set(t,e,n,i,o,r,a,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=o,u[5]=c,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],x=i[0],g=i[3],m=i[6],_=i[1],y=i[4],v=i[7],P=i[2],T=i[5],M=i[8];return o[0]=r*x+a*_+c*P,o[3]=r*g+a*y+c*T,o[6]=r*m+a*v+c*M,o[1]=l*x+u*_+h*P,o[4]=l*g+u*y+h*T,o[7]=l*m+u*v+h*M,o[2]=d*x+f*_+p*P,o[5]=d*g+f*y+p*T,o[8]=d*m+f*v+p*M,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*r*u-e*a*l-n*o*u+n*a*c+i*o*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*r-a*l,d=a*c-u*o,f=l*o-r*c,p=e*h+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=h*x,t[1]=(i*l-u*n)*x,t[2]=(a*n-i*r)*x,t[3]=d*x,t[4]=(u*e-i*c)*x,t[5]=(i*o-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-i*l,i*c,-i*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Lc.makeScale(t,e)),this}rotate(t){return this.premultiply(Lc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Lc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Lc=new le;function Mf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ec(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Cm(){const s=ec("canvas");return s.style.display="block",s}const ku={};function mr(s){s in ku||(ku[s]=!0,console.warn(s))}function Pm(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Lm(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Im(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const me={enabled:!0,workingColorSpace:Go,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Te&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Te&&(s.r=Ao(s.r),s.g=Ao(s.g),s.b=Ao(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===as?mc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ji(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ao(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ou=[.64,.33,.3,.6,.15,.06],Bu=[.2126,.7152,.0722],Vu=[.3127,.329],Hu=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gu=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);me.define({[Go]:{primaries:Ou,whitePoint:Vu,transfer:mc,toXYZ:Hu,fromXYZ:Gu,luminanceCoefficients:Bu,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:Ou,whitePoint:Vu,transfer:Te,toXYZ:Hu,fromXYZ:Gu,luminanceCoefficients:Bu,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}});let js;class Dm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{js===void 0&&(js=ec("canvas")),js.width=t.width,js.height=t.height;const n=js.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=js}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ec("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=ji(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ji(e[n]/255)*255):e[n]=ji(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Nm=0;class yf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Wo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Ic(i[r].image)):o.push(Ic(i[r]))}else o=Ic(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Ic(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Dm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zm=0;class _n extends Gs{constructor(t=_n.DEFAULT_IMAGE,e=_n.DEFAULT_MAPPING,n=Ds,i=Ds,o=Nn,r=Ns,a=hi,c=Zi,l=_n.DEFAULT_ANISOTROPY,u=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Wo(),this.name="",this.source=new yf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qa:t.x=t.x-Math.floor(t.x);break;case Ds:t.x=t.x<0?0:1;break;case ql:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qa:t.y=t.y-Math.floor(t.y);break;case Ds:t.y=t.y<0?0:1;break;case ql:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=lf;_n.DEFAULT_ANISOTROPY=1;class Fe{constructor(t=0,e=0,n=0,i=1){Fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,v=(f+1)/2,P=(m+1)/2,T=(u+d)/4,M=(h+x)/4,C=(p+g)/4;return y>v&&y>P?y<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(y),i=T/n,o=M/n):v>P?v<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(v),n=T/i,o=C/i):P<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(P),n=M/o,i=C/o),this.set(n,i,o,e),this}let _=Math.sqrt((g-p)*(g-p)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(h-x)/_,this.z=(d-u)/_,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Um extends Gs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new _n(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new yf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends Um{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Sf extends _n{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fm extends _n{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $n{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=o[r+0],f=o[r+1],p=o[r+2],x=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=x;return}if(h!==x||c!==d||l!==f||u!==p){let g=1-a;const m=c*d+l*f+u*p+h*x,_=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const P=Math.sqrt(y),T=Math.atan2(P,m*_);g=Math.sin(g*T)/P,a=Math.sin(a*T)/P}const v=a*_;if(c=c*g+d*v,l=l*g+f*v,u=u*g+p*v,h=h*g+x*v,g===1-a){const P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=o[r],d=o[r+1],f=o[r+2],p=o[r+3];return t[e]=a*p+u*h+c*f-l*d,t[e+1]=c*p+u*d+l*h-a*f,t[e+2]=l*p+u*f+a*d-c*h,t[e+3]=u*p-a*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(o/2),d=c(n/2),f=c(i/2),p=c(o/2);switch(r){case"XYZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"YZX":this._x=d*u*h+l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h-d*f*p;break;case"XZY":this._x=d*u*h-l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(o-l)*f,this._z=(r-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(o+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(o-l)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(r-i)/f,this._x=(o+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+r*a+i*l-o*c,this._y=i*u+r*c+o*a-n*l,this._z=o*u+r*l+n*c-i*a,this._w=r*u-n*a-i*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=r*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*i-a*n),u=2*(a*e-o*i),h=2*(o*n-r*e);return this.x=e+c*l+r*h-a*u,this.y=n+c*u+a*l-o*h,this.z=i+c*h+o*u-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-o*a,this.y=o*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dc.copy(this).projectOnVector(t),this.sub(Dc)}reflect(t){return this.sub(Dc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dc=new A,Wu=new $n;class ps{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,ii):ii.fromBufferAttribute(o,r),ii.applyMatrix4(t.matrixWorld),this.expandByPoint(ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ii),ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zo),Gr.subVectors(this.max,Zo),Zs.subVectors(t.a,Zo),Ks.subVectors(t.b,Zo),Js.subVectors(t.c,Zo),es.subVectors(Ks,Zs),ns.subVectors(Js,Ks),ms.subVectors(Zs,Js);let e=[0,-es.z,es.y,0,-ns.z,ns.y,0,-ms.z,ms.y,es.z,0,-es.x,ns.z,0,-ns.x,ms.z,0,-ms.x,-es.y,es.x,0,-ns.y,ns.x,0,-ms.y,ms.x,0];return!Nc(e,Zs,Ks,Js,Gr)||(e=[1,0,0,0,1,0,0,0,1],!Nc(e,Zs,Ks,Js,Gr))?!1:(Wr.crossVectors(es,ns),e=[Wr.x,Wr.y,Wr.z],Nc(e,Zs,Ks,Js,Gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ii=[new A,new A,new A,new A,new A,new A,new A,new A],ii=new A,Hr=new ps,Zs=new A,Ks=new A,Js=new A,es=new A,ns=new A,ms=new A,Zo=new A,Gr=new A,Wr=new A,gs=new A;function Nc(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){gs.fromArray(s,o);const a=i.x*Math.abs(gs.x)+i.y*Math.abs(gs.y)+i.z*Math.abs(gs.z),c=t.dot(gs),l=e.dot(gs),u=n.dot(gs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const km=new ps,Ko=new A,zc=new A;class Ws{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):km.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ko.subVectors(t,this.center);const e=Ko.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ko,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ko.copy(t.center).add(zc)),this.expandByPoint(Ko.copy(t.center).sub(zc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new A,Uc=new A,Xr=new A,is=new A,Fc=new A,$r=new A,kc=new A;class gc{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Uc.copy(t).add(e).multiplyScalar(.5),Xr.copy(e).sub(t).normalize(),is.copy(this.origin).sub(Uc);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Xr),a=is.dot(this.direction),c=-is.dot(Xr),l=is.lengthSq(),u=Math.abs(1-r*r);let h,d,f,p;if(u>0)if(h=r*c-a,d=r*a-c,p=o*u,h>=0)if(d>=-p)if(d<=p){const x=1/u;h*=x,d*=x,f=h*(h+r*d+2*a)+d*(r*h+d+2*c)+l}else d=o,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*c)+l;else d=-o,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-p?(h=Math.max(0,-(-r*o+a)),d=h>0?-o:Math.min(Math.max(-o,-c),o),f=-h*h+d*(d+2*c)+l):d<=p?(h=0,d=Math.min(Math.max(-o,-c),o),f=d*(d+2*c)+l):(h=Math.max(0,-(r*o+a)),d=h>0?o:Math.min(Math.max(-o,-c),o),f=-h*h+d*(d+2*c)+l);else d=r>0?-o:o,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Uc).addScaledVector(Xr,d),f}intersectSphere(t,e){Di.subVectors(t.center,this.origin);const n=Di.dot(this.direction),i=Di.dot(Di)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),u>=0?(o=(t.min.y-d.y)*u,r=(t.max.y-d.y)*u):(o=(t.max.y-d.y)*u,r=(t.min.y-d.y)*u),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,n,i,o){Fc.subVectors(e,t),$r.subVectors(n,t),kc.crossVectors(Fc,$r);let r=this.direction.dot(kc),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;is.subVectors(this.origin,t);const c=a*this.direction.dot($r.crossVectors(is,$r));if(c<0)return null;const l=a*this.direction.dot(Fc.cross(is));if(l<0||c+l>r)return null;const u=-a*is.dot(kc);return u<0?null:this.at(u/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,i,o,r,a,c,l,u,h,d,f,p,x,g){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l,u,h,d,f,p,x,g)}set(t,e,n,i,o,r,a,c,l,u,h,d,f,p,x,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=o,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Qs.setFromMatrixColumn(t,0).length(),o=1/Qs.setFromMatrixColumn(t,1).length(),r=1/Qs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(o),h=Math.sin(o);if(t.order==="XYZ"){const d=r*u,f=r*h,p=a*u,x=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+p*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=p+f*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,p=l*u,x=l*h;e[0]=d+x*a,e[4]=p*a-f,e[8]=r*l,e[1]=r*h,e[5]=r*u,e[9]=-a,e[2]=f*a-p,e[6]=x+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,p=l*u,x=l*h;e[0]=d-x*a,e[4]=-r*h,e[8]=p+f*a,e[1]=f+p*a,e[5]=r*u,e[9]=x-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*u,f=r*h,p=a*u,x=a*h;e[0]=c*u,e[4]=p*l-f,e[8]=d*l+x,e[1]=c*h,e[5]=x*l+d,e[9]=f*l-p,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,f=r*l,p=a*c,x=a*l;e[0]=c*u,e[4]=x-d*h,e[8]=p*h+f,e[1]=h,e[5]=r*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*h+p,e[10]=d-x*h}else if(t.order==="XZY"){const d=r*c,f=r*l,p=a*c,x=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+x,e[5]=r*u,e[9]=f*h-p,e[2]=p*h-f,e[6]=a*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Om,t,Bm)}lookAt(t,e,n){const i=this.elements;return kn.subVectors(t,e),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),ss.crossVectors(n,kn),ss.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),ss.crossVectors(n,kn)),ss.normalize(),qr.crossVectors(kn,ss),i[0]=ss.x,i[4]=qr.x,i[8]=kn.x,i[1]=ss.y,i[5]=qr.y,i[9]=kn.y,i[2]=ss.z,i[6]=qr.z,i[10]=kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],_=n[3],y=n[7],v=n[11],P=n[15],T=i[0],M=i[4],C=i[8],b=i[12],w=i[1],D=i[5],k=i[9],O=i[13],V=i[2],B=i[6],Y=i[10],H=i[14],K=i[3],ut=i[7],yt=i[11],_t=i[15];return o[0]=r*T+a*w+c*V+l*K,o[4]=r*M+a*D+c*B+l*ut,o[8]=r*C+a*k+c*Y+l*yt,o[12]=r*b+a*O+c*H+l*_t,o[1]=u*T+h*w+d*V+f*K,o[5]=u*M+h*D+d*B+f*ut,o[9]=u*C+h*k+d*Y+f*yt,o[13]=u*b+h*O+d*H+f*_t,o[2]=p*T+x*w+g*V+m*K,o[6]=p*M+x*D+g*B+m*ut,o[10]=p*C+x*k+g*Y+m*yt,o[14]=p*b+x*O+g*H+m*_t,o[3]=_*T+y*w+v*V+P*K,o[7]=_*M+y*D+v*B+P*ut,o[11]=_*C+y*k+v*Y+P*yt,o[15]=_*b+y*O+v*H+P*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15];return p*(+o*c*h-i*l*h-o*a*d+n*l*d+i*a*f-n*c*f)+x*(+e*c*f-e*l*d+o*r*d-i*r*f+i*l*u-o*c*u)+g*(+e*l*h-e*a*f-o*r*h+n*r*f+o*a*u-n*l*u)+m*(-i*a*u-e*c*h+e*a*d+i*r*h-n*r*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],_=h*g*l-x*d*l+x*c*f-a*g*f-h*c*m+a*d*m,y=p*d*l-u*g*l-p*c*f+r*g*f+u*c*m-r*d*m,v=u*x*l-p*h*l+p*a*f-r*x*f-u*a*m+r*h*m,P=p*h*c-u*x*c-p*a*d+r*x*d+u*a*g-r*h*g,T=e*_+n*y+i*v+o*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/T;return t[0]=_*M,t[1]=(x*d*o-h*g*o-x*i*f+n*g*f+h*i*m-n*d*m)*M,t[2]=(a*g*o-x*c*o+x*i*l-n*g*l-a*i*m+n*c*m)*M,t[3]=(h*c*o-a*d*o-h*i*l+n*d*l+a*i*f-n*c*f)*M,t[4]=y*M,t[5]=(u*g*o-p*d*o+p*i*f-e*g*f-u*i*m+e*d*m)*M,t[6]=(p*c*o-r*g*o-p*i*l+e*g*l+r*i*m-e*c*m)*M,t[7]=(r*d*o-u*c*o+u*i*l-e*d*l-r*i*f+e*c*f)*M,t[8]=v*M,t[9]=(p*h*o-u*x*o-p*n*f+e*x*f+u*n*m-e*h*m)*M,t[10]=(r*x*o-p*a*o+p*n*l-e*x*l-r*n*m+e*a*m)*M,t[11]=(u*a*o-r*h*o-u*n*l+e*h*l+r*n*f-e*a*f)*M,t[12]=P*M,t[13]=(u*x*i-p*h*i+p*n*d-e*x*d-u*n*g+e*h*g)*M,t[14]=(p*a*i-r*x*i-p*n*c+e*x*c+r*n*g-e*a*g)*M,t[15]=(r*h*i-u*a*i+u*n*c-e*h*c-r*n*d+e*a*d)*M,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,u=o*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*r,0,l*c-i*a,u*c+i*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,u=r+r,h=a+a,d=o*l,f=o*u,p=o*h,x=r*u,g=r*h,m=a*h,_=c*l,y=c*u,v=c*h,P=n.x,T=n.y,M=n.z;return i[0]=(1-(x+m))*P,i[1]=(f+v)*P,i[2]=(p-y)*P,i[3]=0,i[4]=(f-v)*T,i[5]=(1-(d+m))*T,i[6]=(g+_)*T,i[7]=0,i[8]=(p+y)*M,i[9]=(g-_)*M,i[10]=(1-(d+x))*M,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=Qs.set(i[0],i[1],i[2]).length();const r=Qs.set(i[4],i[5],i[6]).length(),a=Qs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],si.copy(this);const l=1/o,u=1/r,h=1/a;return si.elements[0]*=l,si.elements[1]*=l,si.elements[2]*=l,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=h,si.elements[9]*=h,si.elements[10]*=h,e.setFromRotationMatrix(si),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=Yi){const c=this.elements,l=2*o/(e-t),u=2*o/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let f,p;if(a===Yi)f=-(r+o)/(r-o),p=-2*r*o/(r-o);else if(a===tc)f=-r/(r-o),p=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=Yi){const c=this.elements,l=1/(e-t),u=1/(n-i),h=1/(r-o),d=(e+t)*l,f=(n+i)*u;let p,x;if(a===Yi)p=(r+o)*h,x=-2*h;else if(a===tc)p=o*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qs=new A,si=new ae,Om=new A(0,0,0),Bm=new A(1,1,1),ss=new A,qr=new A,kn=new A,Xu=new ae,$u=new $n;class di{constructor(t=0,e=0,n=0,i=di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Je(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $u.setFromEuler(this),this.setFromQuaternion($u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class wf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vm=0;const qu=new A,to=new $n,Ni=new ae,Yr=new A,Jo=new A,Hm=new A,Gm=new $n,Yu=new A(1,0,0),ju=new A(0,1,0),Zu=new A(0,0,1),Ku={type:"added"},Wm={type:"removed"},eo={type:"childadded",child:null},Oc={type:"childremoved",child:null};class Qe extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DEFAULT_UP.clone();const t=new A,e=new di,n=new $n,i=new A(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new le}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return to.setFromAxisAngle(t,e),this.quaternion.multiply(to),this}rotateOnWorldAxis(t,e){return to.setFromAxisAngle(t,e),this.quaternion.premultiply(to),this}rotateX(t){return this.rotateOnAxis(Yu,t)}rotateY(t){return this.rotateOnAxis(ju,t)}rotateZ(t){return this.rotateOnAxis(Zu,t)}translateOnAxis(t,e){return qu.copy(t).applyQuaternion(this.quaternion),this.position.add(qu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yu,t)}translateY(t){return this.translateOnAxis(ju,t)}translateZ(t){return this.translateOnAxis(Zu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yr.copy(t):Yr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Jo,Yr,this.up):Ni.lookAt(Yr,Jo,this.up),this.quaternion.setFromRotationMatrix(Ni),i&&(Ni.extractRotation(i.matrixWorld),to.setFromRotationMatrix(Ni),this.quaternion.premultiply(to.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ku),eo.child=t,this.dispatchEvent(eo),eo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wm),Oc.child=t,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ku),eo.child=t,this.dispatchEvent(eo),eo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,t,Hm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,Gm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];o(t.shapes,h)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),u=r(t.images),h=r(t.shapes),d=r(t.skeletons),f=r(t.animations),p=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Qe.DEFAULT_UP=new A(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new A,zi=new A,Bc=new A,Ui=new A,no=new A,io=new A,Ju=new A,Vc=new A,Hc=new A,Gc=new A,Wc=new Fe,Xc=new Fe,$c=new Fe;class ci{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),oi.subVectors(t,e),i.cross(oi);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){oi.subVectors(i,e),zi.subVectors(n,e),Bc.subVectors(t,e);const r=oi.dot(oi),a=oi.dot(zi),c=oi.dot(Bc),l=zi.dot(zi),u=zi.dot(Bc),h=r*l-a*a;if(h===0)return o.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,p=(r*u-a*c)*d;return o.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(t,e,n,i,o,r,a,c){return this.getBarycoord(t,e,n,i,Ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Ui.x),c.addScaledVector(r,Ui.y),c.addScaledVector(a,Ui.z),c)}static getInterpolatedAttribute(t,e,n,i,o,r){return Wc.setScalar(0),Xc.setScalar(0),$c.setScalar(0),Wc.fromBufferAttribute(t,e),Xc.fromBufferAttribute(t,n),$c.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Wc,o.x),r.addScaledVector(Xc,o.y),r.addScaledVector($c,o.z),r}static isFrontFacing(t,e,n,i){return oi.subVectors(n,e),zi.subVectors(t,e),oi.cross(zi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return oi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),oi.cross(zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ci.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return ci.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;no.subVectors(i,n),io.subVectors(o,n),Vc.subVectors(t,n);const c=no.dot(Vc),l=io.dot(Vc);if(c<=0&&l<=0)return e.copy(n);Hc.subVectors(t,i);const u=no.dot(Hc),h=io.dot(Hc);if(u>=0&&h<=u)return e.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return r=c/(c-u),e.copy(n).addScaledVector(no,r);Gc.subVectors(t,o);const f=no.dot(Gc),p=io.dot(Gc);if(p>=0&&f<=p)return e.copy(o);const x=f*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(io,a);const g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return Ju.subVectors(o,i),a=(h-u)/(h-u+(f-p)),e.copy(i).addScaledVector(Ju,a);const m=1/(g+x+d);return r=x*m,a=d*m,e.copy(n).addScaledVector(no,r).addScaledVector(io,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},jr={h:0,s:0,l:0};function qc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class te{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=me.workingColorSpace){if(t=Am(t,1),e=Je(e,0,1),n=Je(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=qc(r,o,t+1/3),this.g=qc(r,o,t),this.b=qc(r,o,t-1/3)}return me.toWorkingColorSpace(this,i),this}setStyle(t,e=Ve){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=bf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}copyLinearToSRGB(t){return this.r=Ao(t.r),this.g=Ao(t.g),this.b=Ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return me.fromWorkingColorSpace(fn.copy(this),t),Math.round(Je(fn.r*255,0,255))*65536+Math.round(Je(fn.g*255,0,255))*256+Math.round(Je(fn.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,i=fn.g,o=fn.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let c,l;const u=(a+r)/2;if(a===r)c=0,l=0;else{const h=r-a;switch(l=u<=.5?h/(r+a):h/(2-r-a),r){case n:c=(i-o)/h+(i<o?6:0);break;case i:c=(o-n)/h+2;break;case o:c=(n-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=Ve){me.fromWorkingColorSpace(fn.copy(this),t);const e=fn.r,n=fn.g,i=fn.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(os),this.setHSL(os.h+t,os.s+e,os.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(os),t.getHSL(jr);const n=Pc(os.h,jr.h,e),i=Pc(os.s,jr.s,e),o=Pc(os.l,jr.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new te;te.NAMES=bf;let Xm=0;class Xs extends Gs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Wo(),this.name="",this.blending=Eo,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Fl,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Eo&&(n.blending=this.blending),this.side!==fs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ul&&(n.blendSrc=this.blendSrc),this.blendDst!==Fl&&(n.blendDst=this.blendDst),this.blendEquation!==Ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Io&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ei extends Xs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Wi=$m();function $m(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const o=new Uint32Array(2048),r=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,o[c]=l|u}for(let c=1024;c<2048;++c)o[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)r[c]=c<<23;r[31]=1199570944,r[32]=2147483648;for(let c=33;c<63;++c)r[c]=2147483648+(c-32<<23);r[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:o,exponentTable:r,offsetTable:a}}function qm(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Je(s,-65504,65504),Wi.floatView[0]=s;const t=Wi.uint32View[0],e=t>>23&511;return Wi.baseTable[e]+((t&8388607)>>Wi.shiftTable[e])}function Ym(s){const t=s>>10;return Wi.uint32View[0]=Wi.mantissaTable[Wi.offsetTable[t]+(s&1023)]+Wi.exponentTable[t],Wi.floatView[0]}const Qu={toHalfFloat:qm,fromHalfFloat:Ym},Ge=new A,Zr=new Ct;class tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Uu,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zr.fromBufferAttribute(this,e),Zr.applyMatrix3(t),this.setXY(e,Zr.x,Zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=jo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Rn(e,this.array),n=Rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Rn(e,this.array),n=Rn(n,this.array),i=Rn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=Rn(e,this.array),n=Rn(n,this.array),i=Rn(i,this.array),o=Rn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Uu&&(t.usage=this.usage),t}}class Ef extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Tf extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let jm=0;const Yn=new ae,Yc=new Qe,so=new A,On=new ps,Qo=new ps,sn=new A;class De extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mf(t)?Tf:Ef)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new le().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Yn.makeRotationFromQuaternion(t),this.applyMatrix4(Yn),this}rotateX(t){return Yn.makeRotationX(t),this.applyMatrix4(Yn),this}rotateY(t){return Yn.makeRotationY(t),this.applyMatrix4(Yn),this}rotateZ(t){return Yn.makeRotationZ(t),this.applyMatrix4(Yn),this}translate(t,e,n){return Yn.makeTranslation(t,e,n),this.applyMatrix4(Yn),this}scale(t,e,n){return Yn.makeScale(t,e,n),this.applyMatrix4(Yn),this}lookAt(t){return Yc.lookAt(t),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ue(n,3))}else{for(let n=0,i=e.count;n<i;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];On.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Qo.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(On.min,Qo.min),On.expandByPoint(sn),sn.addVectors(On.max,Qo.max),On.expandByPoint(sn)):(On.expandByPoint(Qo.min),On.expandByPoint(Qo.max))}On.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)sn.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(sn));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)sn.fromBufferAttribute(a,l),c&&(so.fromBufferAttribute(t,l),sn.add(so)),i=Math.max(i,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new A,c[C]=new A;const l=new A,u=new A,h=new A,d=new Ct,f=new Ct,p=new Ct,x=new A,g=new A;function m(C,b,w){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,w),d.fromBufferAttribute(o,C),f.fromBufferAttribute(o,b),p.fromBufferAttribute(o,w),u.sub(l),h.sub(l),f.sub(d),p.sub(d);const D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(D),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(D),a[C].add(x),a[b].add(x),a[w].add(x),c[C].add(g),c[b].add(g),c[w].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let C=0,b=_.length;C<b;++C){const w=_[C],D=w.start,k=w.count;for(let O=D,V=D+k;O<V;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new A,v=new A,P=new A,T=new A;function M(C){P.fromBufferAttribute(i,C),T.copy(P);const b=a[C];y.copy(b),y.sub(P.multiplyScalar(P.dot(b))).normalize(),v.crossVectors(T,b);const D=v.dot(c[C])<0?-1:1;r.setXYZW(C,y.x,y.y,y.z,D)}for(let C=0,b=_.length;C<b;++C){const w=_[C],D=w.start,k=w.count;for(let O=D,V=D+k;O<V;O+=3)M(t.getX(O+0)),M(t.getX(O+1)),M(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new A,o=new A,r=new A,a=new A,c=new A,l=new A,u=new A,h=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,p),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),u.subVectors(r,o),h.subVectors(i,o),u.cross(h),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),u.subVectors(r,o),h.subVectors(i,o),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,p=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let m=0;m<u;m++)d[p++]=l[f++]}return new tn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(i[c]=u,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const o=t.morphAttributes;for(const l in o){const u=[],h=o[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,u=r.length;l<u;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const td=new ae,xs=new gc,Kr=new Ws,ed=new A,Jr=new A,Qr=new A,ta=new A,jc=new A,ea=new A,nd=new A,na=new A;class Dt extends Qe{constructor(t=new De,e=new Ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){ea.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],h=o[c];u!==0&&(jc.fromBufferAttribute(h,t),r?ea.addScaledVector(jc,u):ea.addScaledVector(jc.sub(e),u))}e.add(ea)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(o),xs.copy(t.ray).recast(t.near),!(Kr.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Kr,ed)===null||xs.origin.distanceToSquared(ed)>(t.far-t.near)**2))&&(td.copy(o).invert(),xs.copy(t.ray).applyMatrix4(td),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xs)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,x=d.length;p<x;p++){const g=d[p],m=r[g.materialIndex],_=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=_,P=y;v<P;v+=3){const T=a.getX(v),M=a.getX(v+1),C=a.getX(v+2);i=ia(this,m,t,n,l,u,h,T,M,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const _=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);i=ia(this,r,t,n,l,u,h,_,y,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let p=0,x=d.length;p<x;p++){const g=d[p],m=r[g.materialIndex],_=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=_,P=y;v<P;v+=3){const T=v,M=v+1,C=v+2;i=ia(this,m,t,n,l,u,h,T,M,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const _=g,y=g+1,v=g+2;i=ia(this,r,t,n,l,u,h,_,y,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Zm(s,t,e,n,i,o,r,a){let c;if(t.side===Tn?c=n.intersectTriangle(r,o,i,!0,a):c=n.intersectTriangle(i,o,r,t.side===fs,a),c===null)return null;na.copy(a),na.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(na);return l<e.near||l>e.far?null:{distance:l,point:na.clone(),object:s}}function ia(s,t,e,n,i,o,r,a,c,l){s.getVertexPosition(a,Jr),s.getVertexPosition(c,Qr),s.getVertexPosition(l,ta);const u=Zm(s,t,e,n,Jr,Qr,ta,nd);if(u){const h=new A;ci.getBarycoord(nd,Jr,Qr,ta,h),i&&(u.uv=ci.getInterpolatedAttribute(i,a,c,l,h,new Ct)),o&&(u.uv1=ci.getInterpolatedAttribute(o,a,c,l,h,new Ct)),r&&(u.normal=ci.getInterpolatedAttribute(r,a,c,l,h,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new A,materialIndex:0};ci.getNormal(Jr,Qr,ta,d.normal),u.face=d,u.barycoord=h}return u}class re extends De{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,n,e,t,r,o,0),p("z","y","x",1,-1,n,e,-t,r,o,1),p("x","z","y",1,1,t,n,e,i,r,2),p("x","z","y",1,-1,t,n,-e,i,r,3),p("x","y","z",1,-1,t,e,n,i,o,4),p("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(h,2));function p(x,g,m,_,y,v,P,T,M,C,b){const w=v/M,D=P/C,k=v/2,O=P/2,V=T/2,B=M+1,Y=C+1;let H=0,K=0;const ut=new A;for(let yt=0;yt<Y;yt++){const _t=yt*D-O;for(let lt=0;lt<B;lt++){const xt=lt*w-k;ut[x]=xt*_,ut[g]=_t*y,ut[m]=V,l.push(ut.x,ut.y,ut.z),ut[x]=0,ut[g]=0,ut[m]=T>0?1:-1,u.push(ut.x,ut.y,ut.z),h.push(lt/M),h.push(1-yt/C),H+=1}}for(let yt=0;yt<C;yt++)for(let _t=0;_t<M;_t++){const lt=d+_t+B*yt,xt=d+_t+B*(yt+1),j=d+(_t+1)+B*(yt+1),L=d+(_t+1)+B*yt;c.push(lt,xt,L),c.push(xt,j,L),K+=6}a.addGroup(f,K,b),f+=K,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fo(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function wn(s){const t={};for(let e=0;e<s.length;e++){const n=Fo(s[e]);for(const i in n)t[i]=n[i]}return t}function Km(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Af(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}const Jm={clone:Fo,merge:wn};var Qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends Xs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qm,this.fragmentShader=tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fo(t.uniforms),this.uniformsGroups=Km(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Rf extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rs=new A,id=new Ct,sd=new Ct;class Dn extends Rf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Mh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($a*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mh*2*Math.atan(Math.tan($a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,e){return this.getViewBounds(t,id,sd),e.subVectors(sd,id)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($a*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const oo=-90,ro=1;class eg extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Dn(oo,ro,t,e);i.layers=this.layers,this.add(i);const o=new Dn(oo,ro,t,e);o.layers=this.layers,this.add(o);const r=new Dn(oo,ro,t,e);r.layers=this.layers,this.add(r);const a=new Dn(oo,ro,t,e);a.layers=this.layers,this.add(a);const c=new Dn(oo,ro,t,e);c.layers=this.layers,this.add(c);const l=new Dn(oo,ro,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Yi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===tc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Cf extends _n{constructor(t,e,n,i,o,r,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Do,super(t,e,n,i,o,r,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ng extends Ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Cf(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new re(5,5,5),o=new ti({name:"CubemapFromEquirect",uniforms:Fo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:ls});o.uniforms.tEquirect.value=e;const r=new Dt(i,o),a=e.minFilter;return e.minFilter===Ns&&(e.minFilter=Nn),new eg(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}const Zc=new A,ig=new A,sg=new le;class Vi{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Zc.subVectors(n,e).cross(ig.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Zc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sg.getNormalMatrix(t),i=this.coplanarPoint(Zc).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new Ws,sa=new A;class xc{constructor(t=new Vi,e=new Vi,n=new Vi,i=new Vi,o=new Vi,r=new Vi){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yi){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],f=i[8],p=i[9],x=i[10],g=i[11],m=i[12],_=i[13],y=i[14],v=i[15];if(n[0].setComponents(c-o,d-l,g-f,v-m).normalize(),n[1].setComponents(c+o,d+l,g+f,v+m).normalize(),n[2].setComponents(c+r,d+u,g+p,v+_).normalize(),n[3].setComponents(c-r,d-u,g-p,v-_).normalize(),n[4].setComponents(c-a,d-h,g-x,v-y).normalize(),e===Yi)n[5].setComponents(c+a,d+h,g+x,v+y).normalize();else if(e===tc)n[5].setComponents(a,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(sa.x=i.normal.x>0?t.max.x:t.min.x,sa.y=i.normal.y>0?t.max.y:t.min.y,sa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(sa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pf(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function og(s){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(s.bindBuffer(l,a),h.length===0)s.bufferSubData(l,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){const p=h[d],x=h[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){const x=h[f];s.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:o,update:r}}class $e extends De{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=t/a,d=e/c,f=[],p=[],x=[],g=[];for(let m=0;m<u;m++){const _=m*d-r;for(let y=0;y<l;y++){const v=y*h-o;p.push(v,-_,0),x.push(0,0,1),g.push(y/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<a;_++){const y=_+l*m,v=_+l*(m+1),P=_+1+l*(m+1),T=_+1+l*m;f.push(y,v,T),f.push(v,P,T)}this.setIndex(f),this.setAttribute("position",new ue(p,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.width,t.height,t.widthSegments,t.heightSegments)}}var rg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ag=`#ifdef USE_ALPHAHASH
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
#endif`,cg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dg=`#ifdef USE_AOMAP
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
#endif`,fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pg=`#ifdef USE_BATCHING
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
#endif`,mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_g=`#ifdef USE_IRIDESCENCE
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
#endif`,Mg=`#ifdef USE_BUMPMAP
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
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cg=`#define PI 3.141592653589793
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
} // validated`,Pg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lg=`vec3 transformedNormal = objectNormal;
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
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ng=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ug="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kg=`#ifdef USE_ENVMAP
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
#endif`,Og=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qg=`#ifdef USE_GRADIENTMAP
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
}`,Yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kg=`uniform bool receiveShadow;
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
#endif`,Jg=`#ifdef USE_ENVMAP
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
#endif`,Qg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i1=`PhysicalMaterial material;
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
#endif`,s1=`struct PhysicalMaterial {
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
}`,o1=`
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
#endif`,r1=`#if defined( RE_IndirectDiffuse )
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
#endif`,a1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m1=`#if defined( USE_POINTS_UV )
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
#endif`,g1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y1=`#ifdef USE_MORPHTARGETS
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
#endif`,S1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,b1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,E1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R1=`#ifdef USE_NORMALMAP
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
#endif`,C1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W1=`float getShadowMask() {
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
}`,X1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$1=`#ifdef USE_SKINNING
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
#endif`,q1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y1=`#ifdef USE_SKINNING
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
#endif`,j1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q1=`#ifdef USE_TRANSMISSION
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
#endif`,tx=`#ifdef USE_TRANSMISSION
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rx=`uniform sampler2D t2D;
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
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`#include <common>
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
}`,dx=`#if DEPTH_PACKING == 3200
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
}`,fx=`#define DISTANCE
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
}`,px=`#define DISTANCE
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
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`uniform float scale;
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
}`,vx=`uniform vec3 diffuse;
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
}`,_x=`#include <common>
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
}`,Mx=`uniform vec3 diffuse;
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
}`,yx=`#define LAMBERT
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
}`,Sx=`#define LAMBERT
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
}`,wx=`#define MATCAP
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
}`,bx=`#define MATCAP
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
}`,Ex=`#define NORMAL
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
}`,Tx=`#define NORMAL
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
}`,Ax=`#define PHONG
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
}`,Rx=`#define PHONG
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
}`,Cx=`#define STANDARD
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
}`,Px=`#define STANDARD
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
}`,Lx=`#define TOON
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
}`,Ix=`#define TOON
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
}`,Dx=`uniform float size;
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
}`,Nx=`uniform vec3 diffuse;
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
}`,zx=`#include <common>
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
}`,Ux=`uniform vec3 color;
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
}`,Fx=`uniform float rotation;
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
}`,kx=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:rg,alphahash_pars_fragment:ag,alphamap_fragment:cg,alphamap_pars_fragment:lg,alphatest_fragment:hg,alphatest_pars_fragment:ug,aomap_fragment:dg,aomap_pars_fragment:fg,batching_pars_vertex:pg,batching_vertex:mg,begin_vertex:gg,beginnormal_vertex:xg,bsdfs:vg,iridescence_fragment:_g,bumpmap_pars_fragment:Mg,clipping_planes_fragment:yg,clipping_planes_pars_fragment:Sg,clipping_planes_pars_vertex:wg,clipping_planes_vertex:bg,color_fragment:Eg,color_pars_fragment:Tg,color_pars_vertex:Ag,color_vertex:Rg,common:Cg,cube_uv_reflection_fragment:Pg,defaultnormal_vertex:Lg,displacementmap_pars_vertex:Ig,displacementmap_vertex:Dg,emissivemap_fragment:Ng,emissivemap_pars_fragment:zg,colorspace_fragment:Ug,colorspace_pars_fragment:Fg,envmap_fragment:kg,envmap_common_pars_fragment:Og,envmap_pars_fragment:Bg,envmap_pars_vertex:Vg,envmap_physical_pars_fragment:Jg,envmap_vertex:Hg,fog_vertex:Gg,fog_pars_vertex:Wg,fog_fragment:Xg,fog_pars_fragment:$g,gradientmap_pars_fragment:qg,lightmap_pars_fragment:Yg,lights_lambert_fragment:jg,lights_lambert_pars_fragment:Zg,lights_pars_begin:Kg,lights_toon_fragment:Qg,lights_toon_pars_fragment:t1,lights_phong_fragment:e1,lights_phong_pars_fragment:n1,lights_physical_fragment:i1,lights_physical_pars_fragment:s1,lights_fragment_begin:o1,lights_fragment_maps:r1,lights_fragment_end:a1,logdepthbuf_fragment:c1,logdepthbuf_pars_fragment:l1,logdepthbuf_pars_vertex:h1,logdepthbuf_vertex:u1,map_fragment:d1,map_pars_fragment:f1,map_particle_fragment:p1,map_particle_pars_fragment:m1,metalnessmap_fragment:g1,metalnessmap_pars_fragment:x1,morphinstance_vertex:v1,morphcolor_vertex:_1,morphnormal_vertex:M1,morphtarget_pars_vertex:y1,morphtarget_vertex:S1,normal_fragment_begin:w1,normal_fragment_maps:b1,normal_pars_fragment:E1,normal_pars_vertex:T1,normal_vertex:A1,normalmap_pars_fragment:R1,clearcoat_normal_fragment_begin:C1,clearcoat_normal_fragment_maps:P1,clearcoat_pars_fragment:L1,iridescence_pars_fragment:I1,opaque_fragment:D1,packing:N1,premultiplied_alpha_fragment:z1,project_vertex:U1,dithering_fragment:F1,dithering_pars_fragment:k1,roughnessmap_fragment:O1,roughnessmap_pars_fragment:B1,shadowmap_pars_fragment:V1,shadowmap_pars_vertex:H1,shadowmap_vertex:G1,shadowmask_pars_fragment:W1,skinbase_vertex:X1,skinning_pars_vertex:$1,skinning_vertex:q1,skinnormal_vertex:Y1,specularmap_fragment:j1,specularmap_pars_fragment:Z1,tonemapping_fragment:K1,tonemapping_pars_fragment:J1,transmission_fragment:Q1,transmission_pars_fragment:tx,uv_pars_fragment:ex,uv_pars_vertex:nx,uv_vertex:ix,worldpos_vertex:sx,background_vert:ox,background_frag:rx,backgroundCube_vert:ax,backgroundCube_frag:cx,cube_vert:lx,cube_frag:hx,depth_vert:ux,depth_frag:dx,distanceRGBA_vert:fx,distanceRGBA_frag:px,equirect_vert:mx,equirect_frag:gx,linedashed_vert:xx,linedashed_frag:vx,meshbasic_vert:_x,meshbasic_frag:Mx,meshlambert_vert:yx,meshlambert_frag:Sx,meshmatcap_vert:wx,meshmatcap_frag:bx,meshnormal_vert:Ex,meshnormal_frag:Tx,meshphong_vert:Ax,meshphong_frag:Rx,meshphysical_vert:Cx,meshphysical_frag:Px,meshtoon_vert:Lx,meshtoon_frag:Ix,points_vert:Dx,points_frag:Nx,shadow_vert:zx,shadow_frag:Ux,sprite_vert:Fx,sprite_frag:kx},Lt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Si={basic:{uniforms:wn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:wn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new te(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:wn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:wn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:wn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new te(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:wn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:wn([Lt.points,Lt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:wn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:wn([Lt.common,Lt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:wn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:wn([Lt.sprite,Lt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:wn([Lt.common,Lt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:wn([Lt.lights,Lt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Si.physical={uniforms:wn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const oa={r:0,b:0,g:0},_s=new di,Ox=new ae;function Bx(s,t,e,n,i,o,r){const a=new te(0);let c=o===!0?0:1,l,u,h=null,d=0,f=null;function p(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function x(_){let y=!1;const v=p(_);v===null?m(a,c):v&&v.isColor&&(m(v,1),y=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(_,y){const v=p(y);v&&(v.isCubeTexture||v.mapping===fc)?(u===void 0&&(u=new Dt(new re(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:Fo(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,T,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),_s.copy(y.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ox.makeRotationFromEuler(_s)),u.material.toneMapped=me.getTransfer(v.colorSpace)!==Te,(h!==v||d!==v.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Dt(new $e(2,2),new ti({name:"BackgroundMaterial",uniforms:Fo(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=me.getTransfer(v.colorSpace)!==Te,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,y){_.getRGB(oa,Af(s)),n.buffers.color.setClear(oa.r,oa.g,oa.b,y,r)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),c=y,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,m(a,c)},render:x,addToRenderList:g}}function Vx(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let o=i,r=!1;function a(w,D,k,O,V){let B=!1;const Y=h(O,k,D);o!==Y&&(o=Y,l(o.object)),B=f(w,O,k,V),B&&p(w,O,k,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(B||r)&&(r=!1,v(w,D,k,O),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return s.createVertexArray()}function l(w){return s.bindVertexArray(w)}function u(w){return s.deleteVertexArray(w)}function h(w,D,k){const O=k.wireframe===!0;let V=n[w.id];V===void 0&&(V={},n[w.id]=V);let B=V[D.id];B===void 0&&(B={},V[D.id]=B);let Y=B[O];return Y===void 0&&(Y=d(c()),B[O]=Y),Y}function d(w){const D=[],k=[],O=[];for(let V=0;V<e;V++)D[V]=0,k[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:O,object:w,attributes:{},index:null}}function f(w,D,k,O){const V=o.attributes,B=D.attributes;let Y=0;const H=k.getAttributes();for(const K in H)if(H[K].location>=0){const yt=V[K];let _t=B[K];if(_t===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(_t=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(_t=w.instanceColor)),yt===void 0||yt.attribute!==_t||_t&&yt.data!==_t.data)return!0;Y++}return o.attributesNum!==Y||o.index!==O}function p(w,D,k,O){const V={},B=D.attributes;let Y=0;const H=k.getAttributes();for(const K in H)if(H[K].location>=0){let yt=B[K];yt===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor));const _t={};_t.attribute=yt,yt&&yt.data&&(_t.data=yt.data),V[K]=_t,Y++}o.attributes=V,o.attributesNum=Y,o.index=O}function x(){const w=o.newAttributes;for(let D=0,k=w.length;D<k;D++)w[D]=0}function g(w){m(w,0)}function m(w,D){const k=o.newAttributes,O=o.enabledAttributes,V=o.attributeDivisors;k[w]=1,O[w]===0&&(s.enableVertexAttribArray(w),O[w]=1),V[w]!==D&&(s.vertexAttribDivisor(w,D),V[w]=D)}function _(){const w=o.newAttributes,D=o.enabledAttributes;for(let k=0,O=D.length;k<O;k++)D[k]!==w[k]&&(s.disableVertexAttribArray(k),D[k]=0)}function y(w,D,k,O,V,B,Y){Y===!0?s.vertexAttribIPointer(w,D,k,V,B):s.vertexAttribPointer(w,D,k,O,V,B)}function v(w,D,k,O){x();const V=O.attributes,B=k.getAttributes(),Y=D.defaultAttributeValues;for(const H in B){const K=B[H];if(K.location>=0){let ut=V[H];if(ut===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(ut=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(ut=w.instanceColor)),ut!==void 0){const yt=ut.normalized,_t=ut.itemSize,lt=t.get(ut);if(lt===void 0)continue;const xt=lt.buffer,j=lt.type,L=lt.bytesPerElement,N=j===s.INT||j===s.UNSIGNED_INT||ut.gpuType===qh;if(ut.isInterleavedBufferAttribute){const U=ut.data,J=U.stride,rt=ut.offset;if(U.isInstancedInterleavedBuffer){for(let ct=0;ct<K.locationSize;ct++)m(K.location+ct,U.meshPerAttribute);w.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ct=0;ct<K.locationSize;ct++)g(K.location+ct);s.bindBuffer(s.ARRAY_BUFFER,xt);for(let ct=0;ct<K.locationSize;ct++)y(K.location+ct,_t/K.locationSize,j,yt,J*L,(rt+_t/K.locationSize*ct)*L,N)}else{if(ut.isInstancedBufferAttribute){for(let U=0;U<K.locationSize;U++)m(K.location+U,ut.meshPerAttribute);w.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let U=0;U<K.locationSize;U++)g(K.location+U);s.bindBuffer(s.ARRAY_BUFFER,xt);for(let U=0;U<K.locationSize;U++)y(K.location+U,_t/K.locationSize,j,yt,_t*L,_t/K.locationSize*U*L,N)}}else if(Y!==void 0){const yt=Y[H];if(yt!==void 0)switch(yt.length){case 2:s.vertexAttrib2fv(K.location,yt);break;case 3:s.vertexAttrib3fv(K.location,yt);break;case 4:s.vertexAttrib4fv(K.location,yt);break;default:s.vertexAttrib1fv(K.location,yt)}}}}_()}function P(){C();for(const w in n){const D=n[w];for(const k in D){const O=D[k];for(const V in O)u(O[V].object),delete O[V];delete D[k]}delete n[w]}}function T(w){if(n[w.id]===void 0)return;const D=n[w.id];for(const k in D){const O=D[k];for(const V in O)u(O[V].object),delete O[V];delete D[k]}delete n[w.id]}function M(w){for(const D in n){const k=n[D];if(k[w.id]===void 0)continue;const O=k[w.id];for(const V in O)u(O[V].object),delete O[V];delete k[w.id]}}function C(){b(),r=!0,o!==i&&(o=i,l(o.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:M,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function Hx(s,t,e){let n;function i(l){n=l}function o(l,u){s.drawArrays(n,l,u),e.update(u,n,1)}function r(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];e.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)r(l[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x]*d[x];e.update(p,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Gx(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const M=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(M){return!(M!==hi&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const C=M===qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==Zi&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==bi&&!C)}function c(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=p>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:P,maxSamples:T}}function Wx(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new Vi,a=new le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=s.get(h);if(!i||p===null||p.length===0||o&&!g)o?u(null):l();else{const _=o?0:n,y=_*4;let v=m.clippingState||null;c.value=v,v=u(p,d,y,f);for(let P=0;P!==y;++P)v[P]=e[P];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,p){const x=h!==null?h.length:0;let g=null;if(x!==0){if(g=c.value,p!==!0||g===null){const m=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,v=f;y!==x;++y,v+=4)r.copy(h[y]).applyMatrix4(_,a),r.normal.toArray(g,v),g[v+3]=r.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Xx(s){let t=new WeakMap;function e(r,a){return a===Xl?r.mapping=Do:a===$l&&(r.mapping=No),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Xl||a===$l)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new ng(c.height);return l.fromEquirectangularTexture(s,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Lf extends Rf{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vo=4,od=[.125,.215,.35,.446,.526,.582],Ls=20,Kc=new Lf,rd=new te;let Jc=null,Qc=0,tl=0,el=!1;const Ts=(1+Math.sqrt(5))/2,ao=1/Ts,ad=[new A(-Ts,ao,0),new A(Ts,ao,0),new A(-ao,0,Ts),new A(ao,0,Ts),new A(0,Ts,-ao),new A(0,Ts,ao),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class cd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Jc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jc,Qc,tl),this._renderer.xr.enabled=el,t.scissorTest=!1,ra(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Do||t.mapping===No?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:qi,format:hi,colorSpace:Go,depthBuffer:!1},i=ld(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ld(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$x(o)),this._blurMaterial=qx(o,t,e)}return i}_compileMaterial(t){const e=new Dt(this._lodPlanes[0],t);this._renderer.compile(e,Kc)}_sceneToCubeUV(t,e,n,i){const a=new Dn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(rd),u.toneMapping=hs,u.autoClear=!1;const f=new Ei({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),p=new Dt(new re,f);let x=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(rd),x=!0);for(let m=0;m<6;m++){const _=m%3;_===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):_===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const y=this._cubeSize;ra(i,_*y,m>2?y:0,y,y),u.setRenderTarget(i),x&&u.render(p,a),u.render(t,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Do||t.mapping===No;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hd());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new Dt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;ra(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,Kc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=ad[(i-o-1)%ad.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Dt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Ls-1),x=o/p,g=isFinite(o)?1+Math.floor(u*x):Ls;g>Ls&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ls}`);const m=[];let _=0;for(let M=0;M<Ls;++M){const C=M/x,b=Math.exp(-C*C/2);m.push(b),M===0?_+=b:M<g&&(_+=2*b)}for(let M=0;M<m.length;M++)m[M]=m[M]/_;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-n;const v=this._sizeLods[i],P=3*v*(i>y-vo?i-y+vo:0),T=4*(this._cubeSize-v);ra(e,P,T,3*v,2*v),c.setRenderTarget(e),c.render(h,Kc)}}function $x(s){const t=[],e=[],n=[];let i=s;const o=s-vo+1+od.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let c=1/a;r>s-vo?c=od[r-s+vo-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,x=3,g=2,m=1,_=new Float32Array(x*p*f),y=new Float32Array(g*p*f),v=new Float32Array(m*p*f);for(let T=0;T<f;T++){const M=T%3*2/3-1,C=T>2?0:-1,b=[M,C,0,M+2/3,C,0,M+2/3,C+1,0,M,C,0,M+2/3,C+1,0,M,C+1,0];_.set(b,x*p*T),y.set(d,g*p*T);const w=[T,T,T,T,T,T];v.set(w,m*p*T)}const P=new De;P.setAttribute("position",new tn(_,x)),P.setAttribute("uv",new tn(y,g)),P.setAttribute("faceIndex",new tn(v,m)),t.push(P),i>vo&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ld(s,t,e){const n=new Ci(s,t,e);return n.texture.mapping=fc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ra(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function qx(s,t,e){const n=new Float32Array(Ls),i=new A(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:tu(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function hd(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function ud(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function tu(){return`

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
	`}function Yx(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Xl||c===$l,u=c===Do||c===No;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new cd(s)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new cd(s)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function jx(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&mr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zx(s,t,e,n){const i={},o=new WeakMap;function r(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);for(const p in d.morphAttributes){const x=d.morphAttributes[p];for(let g=0,m=x.length;g<m;g++)t.remove(x[g])}d.removeEventListener("dispose",r),delete i[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)t.update(d[p],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const p in f){const x=f[p];for(let g=0,m=x.length;g<m;g++)t.update(x[g],s.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,p=h.attributes.position;let x=0;if(f!==null){const _=f.array;x=f.version;for(let y=0,v=_.length;y<v;y+=3){const P=_[y+0],T=_[y+1],M=_[y+2];d.push(P,T,T,M,M,P)}}else if(p!==void 0){const _=p.array;x=p.version;for(let y=0,v=_.length/3-1;y<v;y+=3){const P=y+0,T=y+1,M=y+2;d.push(P,T,T,M,M,P)}}else return;const g=new(Mf(d)?Tf:Ef)(d,1);g.version=x;const m=o.get(h);m&&t.remove(m),o.set(h,g)}function u(h){const d=o.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return o.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Kx(s,t,e){let n;function i(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,f){s.drawElements(n,f,o,d*r),e.update(f,n,1)}function l(d,f,p){p!==0&&(s.drawElementsInstanced(n,f,o,d*r,p),e.update(f,n,p))}function u(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,n,1)}function h(d,f,p,x){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)l(d[m]/r,f[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,o,d,0,x,0,p);let m=0;for(let _=0;_<p;_++)m+=f[_]*x[_];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Jx(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Qx(s,t,e){const n=new WeakMap,i=new Fe;function o(r,a,c){const l=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let w=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",w)};var f=w;d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),x===!0&&(v=2),g===!0&&(v=3);let P=a.attributes.position.count*v,T=1;P>t.maxTextureSize&&(T=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const M=new Float32Array(P*T*4*h),C=new Sf(M,P,T,h);C.type=bi,C.needsUpdate=!0;const b=v*4;for(let D=0;D<h;D++){const k=m[D],O=_[D],V=y[D],B=P*T*4*D;for(let Y=0;Y<k.count;Y++){const H=Y*b;p===!0&&(i.fromBufferAttribute(k,Y),M[B+H+0]=i.x,M[B+H+1]=i.y,M[B+H+2]=i.z,M[B+H+3]=0),x===!0&&(i.fromBufferAttribute(O,Y),M[B+H+4]=i.x,M[B+H+5]=i.y,M[B+H+6]=i.z,M[B+H+7]=0),g===!0&&(i.fromBufferAttribute(V,Y),M[B+H+8]=i.x,M[B+H+9]=i.y,M[B+H+10]=i.z,M[B+H+11]=V.itemSize===4?i.w:1)}}d={count:h,texture:C,size:new Ct(P,T)},n.set(a,d),a.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const x=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:o}}function tv(s,t,e,n){let i=new WeakMap;function o(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(i.get(h)!==l&&(t.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function r(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class eu extends _n{constructor(t,e,n,i,o,r,a,c,l,u=To){if(u!==To&&u!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===To&&(n=Bs),n===void 0&&u===Uo&&(n=zo),super(null,i,o,r,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Xn,this.minFilter=c!==void 0?c:Xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const If=new _n,dd=new eu(1,1),Df=new Sf,Nf=new Fm,zf=new Cf,fd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),xd=new Float32Array(4);function Xo(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=fd[i];if(o===void 0&&(o=new Float32Array(i),fd[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function en(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function nn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function vc(s,t){let e=pd[t];e===void 0&&(e=new Int32Array(t),pd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ev(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function nv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;s.uniform2fv(this.addr,t),nn(e,t)}}function iv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;s.uniform3fv(this.addr,t),nn(e,t)}}function sv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;s.uniform4fv(this.addr,t),nn(e,t)}}function ov(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;xd.set(n),s.uniformMatrix2fv(this.addr,!1,xd),nn(e,n)}}function rv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;gd.set(n),s.uniformMatrix3fv(this.addr,!1,gd),nn(e,n)}}function av(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;md.set(n),s.uniformMatrix4fv(this.addr,!1,md),nn(e,n)}}function cv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function lv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;s.uniform2iv(this.addr,t),nn(e,t)}}function hv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;s.uniform3iv(this.addr,t),nn(e,t)}}function uv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;s.uniform4iv(this.addr,t),nn(e,t)}}function dv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function fv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;s.uniform2uiv(this.addr,t),nn(e,t)}}function pv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;s.uniform3uiv(this.addr,t),nn(e,t)}}function mv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;s.uniform4uiv(this.addr,t),nn(e,t)}}function gv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(dd.compareFunction=_f,o=dd):o=If,e.setTexture2D(t||o,i)}function xv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Nf,i)}function vv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||zf,i)}function _v(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Df,i)}function Mv(s){switch(s){case 5126:return ev;case 35664:return nv;case 35665:return iv;case 35666:return sv;case 35674:return ov;case 35675:return rv;case 35676:return av;case 5124:case 35670:return cv;case 35667:case 35671:return lv;case 35668:case 35672:return hv;case 35669:case 35673:return uv;case 5125:return dv;case 36294:return fv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return _v}}function yv(s,t){s.uniform1fv(this.addr,t)}function Sv(s,t){const e=Xo(t,this.size,2);s.uniform2fv(this.addr,e)}function wv(s,t){const e=Xo(t,this.size,3);s.uniform3fv(this.addr,e)}function bv(s,t){const e=Xo(t,this.size,4);s.uniform4fv(this.addr,e)}function Ev(s,t){const e=Xo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Tv(s,t){const e=Xo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Av(s,t){const e=Xo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Rv(s,t){s.uniform1iv(this.addr,t)}function Cv(s,t){s.uniform2iv(this.addr,t)}function Pv(s,t){s.uniform3iv(this.addr,t)}function Lv(s,t){s.uniform4iv(this.addr,t)}function Iv(s,t){s.uniform1uiv(this.addr,t)}function Dv(s,t){s.uniform2uiv(this.addr,t)}function Nv(s,t){s.uniform3uiv(this.addr,t)}function zv(s,t){s.uniform4uiv(this.addr,t)}function Uv(s,t,e){const n=this.cache,i=t.length,o=vc(e,i);en(n,o)||(s.uniform1iv(this.addr,o),nn(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||If,o[r])}function Fv(s,t,e){const n=this.cache,i=t.length,o=vc(e,i);en(n,o)||(s.uniform1iv(this.addr,o),nn(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Nf,o[r])}function kv(s,t,e){const n=this.cache,i=t.length,o=vc(e,i);en(n,o)||(s.uniform1iv(this.addr,o),nn(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||zf,o[r])}function Ov(s,t,e){const n=this.cache,i=t.length,o=vc(e,i);en(n,o)||(s.uniform1iv(this.addr,o),nn(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Df,o[r])}function Bv(s){switch(s){case 5126:return yv;case 35664:return Sv;case 35665:return wv;case 35666:return bv;case 35674:return Ev;case 35675:return Tv;case 35676:return Av;case 5124:case 35670:return Rv;case 35667:case 35671:return Cv;case 35668:case 35672:return Pv;case 35669:case 35673:return Lv;case 5125:return Iv;case 36294:return Dv;case 36295:return Nv;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Uv;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return Ov}}class Vv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Mv(e.type)}}class Hv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bv(e.type)}}class Gv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const nl=/(\w+)(\])?(\[|\.)?/g;function vd(s,t){s.seq.push(t),s.map[t.id]=t}function Wv(s,t,e){const n=s.name,i=n.length;for(nl.lastIndex=0;;){const o=nl.exec(n),r=nl.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){vd(e,l===void 0?new Vv(a,s,t):new Hv(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new Gv(a),vd(e,h)),e=h}}}class qa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);Wv(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function _d(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Xv=37297;let $v=0;function qv(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Md=new le;function Yv(s){me._getMatrix(Md,me.workingColorSpace,s);const t=`mat3( ${Md.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(s)){case mc:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function yd(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+qv(s.getShaderSource(t),r)}else return i}function jv(s,t){const e=Yv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Zv(s,t){let e;switch(t){case hm:e="Linear";break;case um:e="Reinhard";break;case dm:e="Cineon";break;case cf:e="ACESFilmic";break;case pm:e="AgX";break;case mm:e="Neutral";break;case fm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const aa=new A;function Kv(){me.getLuminanceCoefficients(aa);const s=aa.x.toFixed(4),t=aa.y.toFixed(4),e=aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function Qv(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function t_(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function gr(s){return s!==""}function Sd(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const e_=/^[ \t]*#include +<([\w\d./]+)>/gm;function yh(s){return s.replace(e_,i_)}const n_=new Map;function i_(s,t){let e=he[t];if(e===void 0){const n=n_.get(t);if(n!==void 0)e=he[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return yh(e)}const s_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bd(s){return s.replace(s_,o_)}function o_(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Ed(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function r_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===of?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===rf?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(t="SHADOWMAP_TYPE_VSM"),t}function a_(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Do:case No:t="ENVMAP_TYPE_CUBE";break;case fc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function c_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case No:t="ENVMAP_MODE_REFRACTION";break}return t}function l_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case af:t="ENVMAP_BLENDING_MULTIPLY";break;case cm:t="ENVMAP_BLENDING_MIX";break;case lm:t="ENVMAP_BLENDING_ADD";break}return t}function h_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function u_(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=r_(e),l=a_(e),u=c_(e),h=l_(e),d=h_(e),f=Jv(e),p=Qv(o),x=i.createProgram();let g,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(gr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(gr).join(`
`),m.length>0&&(m+=`
`)):(g=[Ed(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),m=[Ed(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hs?"#define TONE_MAPPING":"",e.toneMapping!==hs?he.tonemapping_pars_fragment:"",e.toneMapping!==hs?Zv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,jv("linearToOutputTexel",e.outputColorSpace),Kv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gr).join(`
`)),r=yh(r),r=Sd(r,e),r=wd(r,e),a=yh(a),a=Sd(a,e),a=wd(a,e),r=bd(r),a=bd(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=_+g+r,v=_+m+a,P=_d(i,i.VERTEX_SHADER,y),T=_d(i,i.FRAGMENT_SHADER,v);i.attachShader(x,P),i.attachShader(x,T),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function M(D){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(x).trim(),O=i.getShaderInfoLog(P).trim(),V=i.getShaderInfoLog(T).trim();let B=!0,Y=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,P,T);else{const H=yd(i,P,"vertex"),K=yd(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+H+`
`+K)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||V==="")&&(Y=!1);Y&&(D.diagnostics={runnable:B,programLog:k,vertexShader:{log:O,prefix:g},fragmentShader:{log:V,prefix:m}})}i.deleteShader(P),i.deleteShader(T),C=new qa(i,x),b=t_(i,x)}let C;this.getUniforms=function(){return C===void 0&&M(this),C};let b;this.getAttributes=function(){return b===void 0&&M(this),b};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(x,Xv)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$v++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=T,this}let d_=0;class f_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new p_(t),e.set(t,n)),n}}class p_{constructor(t){this.id=d_++,this.code=t,this.usedTimes=0}}function m_(s,t,e,n,i,o,r){const a=new wf,c=new f_,l=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,w,D,k,O){const V=k.fog,B=O.geometry,Y=b.isMeshStandardMaterial?k.environment:null,H=(b.isMeshStandardMaterial?e:t).get(b.envMap||Y),K=H&&H.mapping===fc?H.image.height:null,ut=p[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const yt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,_t=yt!==void 0?yt.length:0;let lt=0;B.morphAttributes.position!==void 0&&(lt=1),B.morphAttributes.normal!==void 0&&(lt=2),B.morphAttributes.color!==void 0&&(lt=3);let xt,j,L,N;if(ut){const qt=Si[ut];xt=qt.vertexShader,j=qt.fragmentShader}else xt=b.vertexShader,j=b.fragmentShader,c.update(b),L=c.getVertexShaderID(b),N=c.getFragmentShaderID(b);const U=s.getRenderTarget(),J=s.state.buffers.depth.getReversed(),rt=O.isInstancedMesh===!0,ct=O.isBatchedMesh===!0,dt=!!b.map,it=!!b.matcap,St=!!H,F=!!b.aoMap,bt=!!b.lightMap,Vt=!!b.bumpMap,Kt=!!b.normalMap,Nt=!!b.displacementMap,oe=!!b.emissiveMap,kt=!!b.metalnessMap,I=!!b.roughnessMap,E=b.anisotropy>0,Z=b.clearcoat>0,pt=b.dispersion>0,mt=b.iridescence>0,ht=b.sheen>0,Ft=b.transmission>0,At=E&&!!b.anisotropyMap,Et=Z&&!!b.clearcoatMap,$t=Z&&!!b.clearcoatNormalMap,Mt=Z&&!!b.clearcoatRoughnessMap,It=mt&&!!b.iridescenceMap,Ot=mt&&!!b.iridescenceThicknessMap,gt=ht&&!!b.sheenColorMap,et=ht&&!!b.sheenRoughnessMap,wt=!!b.specularMap,Pt=!!b.specularColorMap,Bt=!!b.specularIntensityMap,z=Ft&&!!b.transmissionMap,ft=Ft&&!!b.thicknessMap,Q=!!b.gradientMap,at=!!b.alphaMap,$=b.alphaTest>0,X=!!b.alphaHash,vt=!!b.extensions;let Gt=hs;b.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Gt=s.toneMapping);const Wt={shaderID:ut,shaderType:b.type,shaderName:b.name,vertexShader:xt,fragmentShader:j,defines:b.defines,customVertexShaderID:L,customFragmentShaderID:N,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ct,batchingColor:ct&&O._colorsTexture!==null,instancing:rt,instancingColor:rt&&O.instanceColor!==null,instancingMorph:rt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:U===null?s.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Go,alphaToCoverage:!!b.alphaToCoverage,map:dt,matcap:it,envMap:St,envMapMode:St&&H.mapping,envMapCubeUVHeight:K,aoMap:F,lightMap:bt,bumpMap:Vt,normalMap:Kt,displacementMap:d&&Nt,emissiveMap:oe,normalMapObjectSpace:Kt&&b.normalMapType===_m,normalMapTangentSpace:Kt&&b.normalMapType===vf,metalnessMap:kt,roughnessMap:I,anisotropy:E,anisotropyMap:At,clearcoat:Z,clearcoatMap:Et,clearcoatNormalMap:$t,clearcoatRoughnessMap:Mt,dispersion:pt,iridescence:mt,iridescenceMap:It,iridescenceThicknessMap:Ot,sheen:ht,sheenColorMap:gt,sheenRoughnessMap:et,specularMap:wt,specularColorMap:Pt,specularIntensityMap:Bt,transmission:Ft,transmissionMap:z,thicknessMap:ft,gradientMap:Q,opaque:b.transparent===!1&&b.blending===Eo&&b.alphaToCoverage===!1,alphaMap:at,alphaTest:$,alphaHash:X,combine:b.combine,mapUv:dt&&x(b.map.channel),aoMapUv:F&&x(b.aoMap.channel),lightMapUv:bt&&x(b.lightMap.channel),bumpMapUv:Vt&&x(b.bumpMap.channel),normalMapUv:Kt&&x(b.normalMap.channel),displacementMapUv:Nt&&x(b.displacementMap.channel),emissiveMapUv:oe&&x(b.emissiveMap.channel),metalnessMapUv:kt&&x(b.metalnessMap.channel),roughnessMapUv:I&&x(b.roughnessMap.channel),anisotropyMapUv:At&&x(b.anisotropyMap.channel),clearcoatMapUv:Et&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:$t&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:et&&x(b.sheenRoughnessMap.channel),specularMapUv:wt&&x(b.specularMap.channel),specularColorMapUv:Pt&&x(b.specularColorMap.channel),specularIntensityMapUv:Bt&&x(b.specularIntensityMap.channel),transmissionMapUv:z&&x(b.transmissionMap.channel),thicknessMapUv:ft&&x(b.thicknessMap.channel),alphaMapUv:at&&x(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Kt||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!B.attributes.uv&&(dt||at),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:J,skinning:O.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:lt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Gt,decodeVideoTexture:dt&&b.map.isVideoTexture===!0&&me.getTransfer(b.map.colorSpace)===Te,decodeVideoTextureEmissive:oe&&b.emissiveMap.isVideoTexture===!0&&me.getTransfer(b.emissiveMap.colorSpace)===Te,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ue,flipSided:b.side===Tn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:vt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&b.extensions.multiDraw===!0||ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Wt.vertexUv1s=l.has(1),Wt.vertexUv2s=l.has(2),Wt.vertexUv3s=l.has(3),l.clear(),Wt}function m(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)w.push(D),w.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(_(w,b),y(w,b),w.push(s.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function _(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function y(b,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const w=p[b.type];let D;if(w){const k=Si[w];D=Jm.clone(k.uniforms)}else D=b.uniforms;return D}function P(b,w){let D;for(let k=0,O=u.length;k<O;k++){const V=u[k];if(V.cacheKey===w){D=V,++D.usedTimes;break}}return D===void 0&&(D=new u_(s,w,b,o),u.push(D)),D}function T(b){if(--b.usedTimes===0){const w=u.indexOf(b);u[w]=u[u.length-1],u.pop(),b.destroy()}}function M(b){c.remove(b)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:P,releaseProgram:T,releaseShaderCache:M,programs:u,dispose:C}}function g_(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,c){s.get(r)[a]=c}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function x_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Td(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ad(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(h,d,f,p,x,g){let m=s[t];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:x,group:g},s[t]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=x,m.group=g),t++,m}function a(h,d,f,p,x,g){const m=r(h,d,f,p,x,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function c(h,d,f,p,x,g){const m=r(h,d,f,p,x,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function l(h,d){e.length>1&&e.sort(h||x_),n.length>1&&n.sort(d||Td),i.length>1&&i.sort(d||Td)}function u(){for(let h=t,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:c,finish:u,sort:l}}function v_(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new Ad,s.set(n,[r])):i>=o.length?(r=new Ad,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function __(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new te};break;case"SpotLight":e={position:new A,direction:new A,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function M_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let y_=0;function S_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function w_(s){const t=new __,e=M_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const i=new A,o=new ae,r=new ae;function a(l){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,_=0,y=0,v=0,P=0,T=0,M=0;l.sort(S_);for(let b=0,w=l.length;b<w;b++){const D=l[b],k=D.color,O=D.intensity,V=D.distance,B=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=k.r*O,h+=k.g*O,d+=k.b*O;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],O);M++}else if(D.isDirectionalLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const H=D.shadow,K=e.get(D);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,n.directionalShadow[f]=K,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=D.shadow.matrix,_++}n.directional[f]=Y,f++}else if(D.isSpotLight){const Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(k).multiplyScalar(O),Y.distance=V,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[x]=Y;const H=D.shadow;if(D.map&&(n.spotLightMap[P]=D.map,P++,H.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[x]=H.matrix,D.castShadow){const K=e.get(D);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,n.spotShadow[x]=K,n.spotShadowMap[x]=B,v++}x++}else if(D.isRectAreaLight){const Y=t.get(D);Y.color.copy(k).multiplyScalar(O),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=Y,g++}else if(D.isPointLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const H=D.shadow,K=e.get(D);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,K.shadowCameraNear=H.camera.near,K.shadowCameraFar=H.camera.far,n.pointShadow[p]=K,n.pointShadowMap[p]=B,n.pointShadowMatrix[p]=D.shadow.matrix,y++}n.point[p]=Y,p++}else if(D.isHemisphereLight){const Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(O),Y.groundColor.copy(D.groundColor).multiplyScalar(O),n.hemi[m]=Y,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==p||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==m||C.numDirectionalShadows!==_||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==P||C.numLightProbes!==M)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=M,C.directionalLength=f,C.pointLength=p,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=m,C.numDirectionalShadows=_,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=P,C.numLightProbes=M,n.version=y_++)}function c(l,u){let h=0,d=0,f=0,p=0,x=0;const g=u.matrixWorldInverse;for(let m=0,_=l.length;m<_;m++){const y=l[m];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),h++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),r.identity(),o.copy(y.matrixWorld),o.premultiply(g),r.extractRotation(o),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),p++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function Rd(s){const t=new w_(s),e=[],n=[];function i(u){l.camera=u,e.length=0,n.length=0}function o(u){e.push(u)}function r(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function b_(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new Rd(s),t.set(i,[a])):o>=r.length?(a=new Rd(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class E_ extends Xs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class T_ extends Xs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const A_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R_=`uniform sampler2D shadow_pass;
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
}`;function C_(s,t,e){let n=new xc;const i=new Ct,o=new Ct,r=new Fe,a=new E_({depthPacking:vm}),c=new T_,l={},u=e.maxTextureSize,h={[fs]:Tn,[Tn]:fs,[Ue]:Ue},d=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:A_,fragmentShader:R_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new De;p.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Dt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=of;let m=this.type;this.render=function(T,M,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const b=s.getRenderTarget(),w=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),k=s.state;k.setBlending(ls),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=m!==Oi&&this.type===Oi,V=m===Oi&&this.type!==Oi;for(let B=0,Y=T.length;B<Y;B++){const H=T[B],K=H.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const ut=K.getFrameExtents();if(i.multiply(ut),o.copy(K.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(o.x=Math.floor(u/ut.x),i.x=o.x*ut.x,K.mapSize.x=o.x),i.y>u&&(o.y=Math.floor(u/ut.y),i.y=o.y*ut.y,K.mapSize.y=o.y)),K.map===null||O===!0||V===!0){const _t=this.type!==Oi?{minFilter:Xn,magFilter:Xn}:{};K.map!==null&&K.map.dispose(),K.map=new Ci(i.x,i.y,_t),K.map.texture.name=H.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const yt=K.getViewportCount();for(let _t=0;_t<yt;_t++){const lt=K.getViewport(_t);r.set(o.x*lt.x,o.y*lt.y,o.x*lt.z,o.y*lt.w),k.viewport(r),K.updateMatrices(H,_t),n=K.getFrustum(),v(M,C,K.camera,H,this.type)}K.isPointLightShadow!==!0&&this.type===Oi&&_(K,C),K.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(b,w,D)};function _(T,M){const C=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ci(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(M,null,C,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(M,null,C,f,x,null)}function y(T,M,C,b){let w=null;const D=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)w=D;else if(w=C.isPointLight===!0?c:a,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const k=w.uuid,O=M.uuid;let V=l[k];V===void 0&&(V={},l[k]=V);let B=V[O];B===void 0&&(B=w.clone(),V[O]=B,M.addEventListener("dispose",P)),w=B}if(w.visible=M.visible,w.wireframe=M.wireframe,b===Oi?w.side=M.shadowSide!==null?M.shadowSide:M.side:w.side=M.shadowSide!==null?M.shadowSide:h[M.side],w.alphaMap=M.alphaMap,w.alphaTest=M.alphaTest,w.map=M.map,w.clipShadows=M.clipShadows,w.clippingPlanes=M.clippingPlanes,w.clipIntersection=M.clipIntersection,w.displacementMap=M.displacementMap,w.displacementScale=M.displacementScale,w.displacementBias=M.displacementBias,w.wireframeLinewidth=M.wireframeLinewidth,w.linewidth=M.linewidth,C.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const k=s.properties.get(w);k.light=C}return w}function v(T,M,C,b,w){if(T.visible===!1)return;if(T.layers.test(M.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Oi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const O=t.update(T),V=T.material;if(Array.isArray(V)){const B=O.groups;for(let Y=0,H=B.length;Y<H;Y++){const K=B[Y],ut=V[K.materialIndex];if(ut&&ut.visible){const yt=y(T,ut,b,w);T.onBeforeShadow(s,T,M,C,O,yt,K),s.renderBufferDirect(C,null,O,yt,T,K),T.onAfterShadow(s,T,M,C,O,yt,K)}}}else if(V.visible){const B=y(T,V,b,w);T.onBeforeShadow(s,T,M,C,O,B,null),s.renderBufferDirect(C,null,O,B,T,null),T.onAfterShadow(s,T,M,C,O,B,null)}}const k=T.children;for(let O=0,V=k.length;O<V;O++)v(k[O],M,C,b,w)}function P(T){T.target.removeEventListener("dispose",P);for(const C in l){const b=l[C],w=T.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}const P_={[kl]:Ol,[Bl]:Gl,[Vl]:Wl,[Io]:Hl,[Ol]:kl,[Gl]:Bl,[Wl]:Vl,[Hl]:Io};function L_(s,t){function e(){let z=!1;const ft=new Fe;let Q=null;const at=new Fe(0,0,0,0);return{setMask:function($){Q!==$&&!z&&(s.colorMask($,$,$,$),Q=$)},setLocked:function($){z=$},setClear:function($,X,vt,Gt,Wt){Wt===!0&&($*=Gt,X*=Gt,vt*=Gt),ft.set($,X,vt,Gt),at.equals(ft)===!1&&(s.clearColor($,X,vt,Gt),at.copy(ft))},reset:function(){z=!1,Q=null,at.set(-1,0,0,0)}}}function n(){let z=!1,ft=!1,Q=null,at=null,$=null;return{setReversed:function(X){if(ft!==X){const vt=t.get("EXT_clip_control");ft?vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.ZERO_TO_ONE_EXT):vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.NEGATIVE_ONE_TO_ONE_EXT);const Gt=$;$=null,this.setClear(Gt)}ft=X},getReversed:function(){return ft},setTest:function(X){X?U(s.DEPTH_TEST):J(s.DEPTH_TEST)},setMask:function(X){Q!==X&&!z&&(s.depthMask(X),Q=X)},setFunc:function(X){if(ft&&(X=P_[X]),at!==X){switch(X){case kl:s.depthFunc(s.NEVER);break;case Ol:s.depthFunc(s.ALWAYS);break;case Bl:s.depthFunc(s.LESS);break;case Io:s.depthFunc(s.LEQUAL);break;case Vl:s.depthFunc(s.EQUAL);break;case Hl:s.depthFunc(s.GEQUAL);break;case Gl:s.depthFunc(s.GREATER);break;case Wl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}at=X}},setLocked:function(X){z=X},setClear:function(X){$!==X&&(ft&&(X=1-X),s.clearDepth(X),$=X)},reset:function(){z=!1,Q=null,at=null,$=null,ft=!1}}}function i(){let z=!1,ft=null,Q=null,at=null,$=null,X=null,vt=null,Gt=null,Wt=null;return{setTest:function(qt){z||(qt?U(s.STENCIL_TEST):J(s.STENCIL_TEST))},setMask:function(qt){ft!==qt&&!z&&(s.stencilMask(qt),ft=qt)},setFunc:function(qt,ge,pe){(Q!==qt||at!==ge||$!==pe)&&(s.stencilFunc(qt,ge,pe),Q=qt,at=ge,$=pe)},setOp:function(qt,ge,pe){(X!==qt||vt!==ge||Gt!==pe)&&(s.stencilOp(qt,ge,pe),X=qt,vt=ge,Gt=pe)},setLocked:function(qt){z=qt},setClear:function(qt){Wt!==qt&&(s.clearStencil(qt),Wt=qt)},reset:function(){z=!1,ft=null,Q=null,at=null,$=null,X=null,vt=null,Gt=null,Wt=null}}}const o=new e,r=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,_=null,y=null,v=null,P=null,T=null,M=new te(0,0,0),C=0,b=!1,w=null,D=null,k=null,O=null,V=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,H=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=H>=1):K.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=H>=2);let ut=null,yt={};const _t=s.getParameter(s.SCISSOR_BOX),lt=s.getParameter(s.VIEWPORT),xt=new Fe().fromArray(_t),j=new Fe().fromArray(lt);function L(z,ft,Q,at){const $=new Uint8Array(4),X=s.createTexture();s.bindTexture(z,X),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let vt=0;vt<Q;vt++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,at,0,s.RGBA,s.UNSIGNED_BYTE,$):s.texImage2D(ft+vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,$);return X}const N={};N[s.TEXTURE_2D]=L(s.TEXTURE_2D,s.TEXTURE_2D,1),N[s.TEXTURE_CUBE_MAP]=L(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[s.TEXTURE_2D_ARRAY]=L(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),N[s.TEXTURE_3D]=L(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),U(s.DEPTH_TEST),r.setFunc(Io),Vt(!1),Kt(Lu),U(s.CULL_FACE),F(ls);function U(z){u[z]!==!0&&(s.enable(z),u[z]=!0)}function J(z){u[z]!==!1&&(s.disable(z),u[z]=!1)}function rt(z,ft){return h[z]!==ft?(s.bindFramebuffer(z,ft),h[z]=ft,z===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ft),z===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function ct(z,ft){let Q=f,at=!1;if(z){Q=d.get(ft),Q===void 0&&(Q=[],d.set(ft,Q));const $=z.textures;if(Q.length!==$.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let X=0,vt=$.length;X<vt;X++)Q[X]=s.COLOR_ATTACHMENT0+X;Q.length=$.length,at=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,at=!0);at&&s.drawBuffers(Q)}function dt(z){return p!==z?(s.useProgram(z),p=z,!0):!1}const it={[Ps]:s.FUNC_ADD,[Xp]:s.FUNC_SUBTRACT,[$p]:s.FUNC_REVERSE_SUBTRACT};it[qp]=s.MIN,it[Yp]=s.MAX;const St={[jp]:s.ZERO,[Zp]:s.ONE,[Kp]:s.SRC_COLOR,[Ul]:s.SRC_ALPHA,[im]:s.SRC_ALPHA_SATURATE,[em]:s.DST_COLOR,[Qp]:s.DST_ALPHA,[Jp]:s.ONE_MINUS_SRC_COLOR,[Fl]:s.ONE_MINUS_SRC_ALPHA,[nm]:s.ONE_MINUS_DST_COLOR,[tm]:s.ONE_MINUS_DST_ALPHA,[sm]:s.CONSTANT_COLOR,[om]:s.ONE_MINUS_CONSTANT_COLOR,[rm]:s.CONSTANT_ALPHA,[am]:s.ONE_MINUS_CONSTANT_ALPHA};function F(z,ft,Q,at,$,X,vt,Gt,Wt,qt){if(z===ls){x===!0&&(J(s.BLEND),x=!1);return}if(x===!1&&(U(s.BLEND),x=!0),z!==Wp){if(z!==g||qt!==b){if((m!==Ps||v!==Ps)&&(s.blendEquation(s.FUNC_ADD),m=Ps,v=Ps),qt)switch(z){case Eo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Iu:s.blendFunc(s.ONE,s.ONE);break;case Du:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Eo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Iu:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Du:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}_=null,y=null,P=null,T=null,M.set(0,0,0),C=0,g=z,b=qt}return}$=$||ft,X=X||Q,vt=vt||at,(ft!==m||$!==v)&&(s.blendEquationSeparate(it[ft],it[$]),m=ft,v=$),(Q!==_||at!==y||X!==P||vt!==T)&&(s.blendFuncSeparate(St[Q],St[at],St[X],St[vt]),_=Q,y=at,P=X,T=vt),(Gt.equals(M)===!1||Wt!==C)&&(s.blendColor(Gt.r,Gt.g,Gt.b,Wt),M.copy(Gt),C=Wt),g=z,b=!1}function bt(z,ft){z.side===Ue?J(s.CULL_FACE):U(s.CULL_FACE);let Q=z.side===Tn;ft&&(Q=!Q),Vt(Q),z.blending===Eo&&z.transparent===!1?F(ls):F(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),o.setMask(z.colorWrite);const at=z.stencilWrite;a.setTest(at),at&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),oe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?U(s.SAMPLE_ALPHA_TO_COVERAGE):J(s.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(z){w!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),w=z)}function Kt(z){z!==Hp?(U(s.CULL_FACE),z!==D&&(z===Lu?s.cullFace(s.BACK):z===Gp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):J(s.CULL_FACE),D=z}function Nt(z){z!==k&&(Y&&s.lineWidth(z),k=z)}function oe(z,ft,Q){z?(U(s.POLYGON_OFFSET_FILL),(O!==ft||V!==Q)&&(s.polygonOffset(ft,Q),O=ft,V=Q)):J(s.POLYGON_OFFSET_FILL)}function kt(z){z?U(s.SCISSOR_TEST):J(s.SCISSOR_TEST)}function I(z){z===void 0&&(z=s.TEXTURE0+B-1),ut!==z&&(s.activeTexture(z),ut=z)}function E(z,ft,Q){Q===void 0&&(ut===null?Q=s.TEXTURE0+B-1:Q=ut);let at=yt[Q];at===void 0&&(at={type:void 0,texture:void 0},yt[Q]=at),(at.type!==z||at.texture!==ft)&&(ut!==Q&&(s.activeTexture(Q),ut=Q),s.bindTexture(z,ft||N[z]),at.type=z,at.texture=ft)}function Z(){const z=yt[ut];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function pt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function mt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ft(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Et(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $t(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function It(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ot(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function gt(z){xt.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),xt.copy(z))}function et(z){j.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),j.copy(z))}function wt(z,ft){let Q=l.get(ft);Q===void 0&&(Q=new WeakMap,l.set(ft,Q));let at=Q.get(z);at===void 0&&(at=s.getUniformBlockIndex(ft,z.name),Q.set(z,at))}function Pt(z,ft){const at=l.get(ft).get(z);c.get(ft)!==at&&(s.uniformBlockBinding(ft,at,z.__bindingPointIndex),c.set(ft,at))}function Bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},ut=null,yt={},h={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,_=null,y=null,v=null,P=null,T=null,M=new te(0,0,0),C=0,b=!1,w=null,D=null,k=null,O=null,V=null,xt.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:U,disable:J,bindFramebuffer:rt,drawBuffers:ct,useProgram:dt,setBlending:F,setMaterial:bt,setFlipSided:Vt,setCullFace:Kt,setLineWidth:Nt,setPolygonOffset:oe,setScissorTest:kt,activeTexture:I,bindTexture:E,unbindTexture:Z,compressedTexImage2D:pt,compressedTexImage3D:mt,texImage2D:It,texImage3D:Ot,updateUBOMapping:wt,uniformBlockBinding:Pt,texStorage2D:$t,texStorage3D:Mt,texSubImage2D:ht,texSubImage3D:Ft,compressedTexSubImage2D:At,compressedTexSubImage3D:Et,scissor:gt,viewport:et,reset:Bt}}function Cd(s,t,e,n){const i=I_(n);switch(e){case ff:return s*t;case mf:return s*t;case gf:return s*t*2;case pc:return s*t/i.components*i.byteLength;case Zh:return s*t/i.components*i.byteLength;case Kh:return s*t*2/i.components*i.byteLength;case Jh:return s*t*2/i.components*i.byteLength;case pf:return s*t*3/i.components*i.byteLength;case hi:return s*t*4/i.components*i.byteLength;case Qh:return s*t*4/i.components*i.byteLength;case Va:case Ha:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ga:case Wa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jl:case Kl:return Math.max(s,16)*Math.max(t,8)/4;case Yl:case Zl:return Math.max(s,8)*Math.max(t,8)/2;case Jl:case Ql:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case th:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case eh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ih:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case sh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case oh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case rh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ah:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ch:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case lh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case hh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case uh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case dh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case fh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ph:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Xa:case mh:case gh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case xf:case xh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case vh:case _h:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function I_(s){switch(s){case Zi:case hf:return{byteLength:1,components:1};case Pr:case uf:case qi:return{byteLength:2,components:1};case Yh:case jh:return{byteLength:2,components:4};case Bs:case qh:case bi:return{byteLength:4,components:1};case df:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function D_(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ct,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,E){return f?new OffscreenCanvas(I,E):ec("canvas")}function x(I,E,Z){let pt=1;const mt=kt(I);if((mt.width>Z||mt.height>Z)&&(pt=Z/Math.max(mt.width,mt.height)),pt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ht=Math.floor(pt*mt.width),Ft=Math.floor(pt*mt.height);h===void 0&&(h=p(ht,Ft));const At=E?p(ht,Ft):h;return At.width=ht,At.height=Ft,At.getContext("2d").drawImage(I,0,0,ht,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ht+"x"+Ft+")."),At}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),I;return I}function g(I){return I.generateMipmaps}function m(I){s.generateMipmap(I)}function _(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(I,E,Z,pt,mt=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ht=E;if(E===s.RED&&(Z===s.FLOAT&&(ht=s.R32F),Z===s.HALF_FLOAT&&(ht=s.R16F),Z===s.UNSIGNED_BYTE&&(ht=s.R8)),E===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ht=s.R8UI),Z===s.UNSIGNED_SHORT&&(ht=s.R16UI),Z===s.UNSIGNED_INT&&(ht=s.R32UI),Z===s.BYTE&&(ht=s.R8I),Z===s.SHORT&&(ht=s.R16I),Z===s.INT&&(ht=s.R32I)),E===s.RG&&(Z===s.FLOAT&&(ht=s.RG32F),Z===s.HALF_FLOAT&&(ht=s.RG16F),Z===s.UNSIGNED_BYTE&&(ht=s.RG8)),E===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ht=s.RG8UI),Z===s.UNSIGNED_SHORT&&(ht=s.RG16UI),Z===s.UNSIGNED_INT&&(ht=s.RG32UI),Z===s.BYTE&&(ht=s.RG8I),Z===s.SHORT&&(ht=s.RG16I),Z===s.INT&&(ht=s.RG32I)),E===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ht=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(ht=s.RGB16UI),Z===s.UNSIGNED_INT&&(ht=s.RGB32UI),Z===s.BYTE&&(ht=s.RGB8I),Z===s.SHORT&&(ht=s.RGB16I),Z===s.INT&&(ht=s.RGB32I)),E===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ht=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(ht=s.RGBA16UI),Z===s.UNSIGNED_INT&&(ht=s.RGBA32UI),Z===s.BYTE&&(ht=s.RGBA8I),Z===s.SHORT&&(ht=s.RGBA16I),Z===s.INT&&(ht=s.RGBA32I)),E===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(ht=s.RGB9_E5),E===s.RGBA){const Ft=mt?mc:me.getTransfer(pt);Z===s.FLOAT&&(ht=s.RGBA32F),Z===s.HALF_FLOAT&&(ht=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(ht=Ft===Te?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function v(I,E){let Z;return I?E===null||E===Bs||E===zo?Z=s.DEPTH24_STENCIL8:E===bi?Z=s.DEPTH32F_STENCIL8:E===Pr&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Bs||E===zo?Z=s.DEPTH_COMPONENT24:E===bi?Z=s.DEPTH_COMPONENT32F:E===Pr&&(Z=s.DEPTH_COMPONENT16),Z}function P(I,E){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Xn&&I.minFilter!==Nn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function T(I){const E=I.target;E.removeEventListener("dispose",T),C(E),E.isVideoTexture&&u.delete(E)}function M(I){const E=I.target;E.removeEventListener("dispose",M),w(E)}function C(I){const E=n.get(I);if(E.__webglInit===void 0)return;const Z=I.source,pt=d.get(Z);if(pt){const mt=pt[E.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&b(I),Object.keys(pt).length===0&&d.delete(Z)}n.remove(I)}function b(I){const E=n.get(I);s.deleteTexture(E.__webglTexture);const Z=I.source,pt=d.get(Z);delete pt[E.__cacheKey],r.memory.textures--}function w(I){const E=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(E.__webglFramebuffer[pt]))for(let mt=0;mt<E.__webglFramebuffer[pt].length;mt++)s.deleteFramebuffer(E.__webglFramebuffer[pt][mt]);else s.deleteFramebuffer(E.__webglFramebuffer[pt]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[pt])}else{if(Array.isArray(E.__webglFramebuffer))for(let pt=0;pt<E.__webglFramebuffer.length;pt++)s.deleteFramebuffer(E.__webglFramebuffer[pt]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pt=0;pt<E.__webglColorRenderbuffer.length;pt++)E.__webglColorRenderbuffer[pt]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[pt]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=I.textures;for(let pt=0,mt=Z.length;pt<mt;pt++){const ht=n.get(Z[pt]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),r.memory.textures--),n.remove(Z[pt])}n.remove(I)}let D=0;function k(){D=0}function O(){const I=D;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),D+=1,I}function V(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function B(I,E){const Z=n.get(I);if(I.isVideoTexture&&Nt(I),I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){const pt=I.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(Z,I,E);return}}e.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+E)}function Y(I,E){const Z=n.get(I);if(I.version>0&&Z.__version!==I.version){j(Z,I,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+E)}function H(I,E){const Z=n.get(I);if(I.version>0&&Z.__version!==I.version){j(Z,I,E);return}e.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+E)}function K(I,E){const Z=n.get(I);if(I.version>0&&Z.__version!==I.version){L(Z,I,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+E)}const ut={[Qa]:s.REPEAT,[Ds]:s.CLAMP_TO_EDGE,[ql]:s.MIRRORED_REPEAT},yt={[Xn]:s.NEAREST,[gm]:s.NEAREST_MIPMAP_NEAREST,[Vr]:s.NEAREST_MIPMAP_LINEAR,[Nn]:s.LINEAR,[Cc]:s.LINEAR_MIPMAP_NEAREST,[Ns]:s.LINEAR_MIPMAP_LINEAR},_t={[Mm]:s.NEVER,[Tm]:s.ALWAYS,[ym]:s.LESS,[_f]:s.LEQUAL,[Sm]:s.EQUAL,[Em]:s.GEQUAL,[wm]:s.GREATER,[bm]:s.NOTEQUAL};function lt(I,E){if(E.type===bi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Nn||E.magFilter===Cc||E.magFilter===Vr||E.magFilter===Ns||E.minFilter===Nn||E.minFilter===Cc||E.minFilter===Vr||E.minFilter===Ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,ut[E.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,ut[E.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,ut[E.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,yt[E.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,yt[E.minFilter]),E.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,_t[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Xn||E.minFilter!==Vr&&E.minFilter!==Ns||E.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function xt(I,E){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",T));const pt=E.source;let mt=d.get(pt);mt===void 0&&(mt={},d.set(pt,mt));const ht=V(E);if(ht!==I.__cacheKey){mt[ht]===void 0&&(mt[ht]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,Z=!0),mt[ht].usedTimes++;const Ft=mt[I.__cacheKey];Ft!==void 0&&(mt[I.__cacheKey].usedTimes--,Ft.usedTimes===0&&b(E)),I.__cacheKey=ht,I.__webglTexture=mt[ht].texture}return Z}function j(I,E,Z){let pt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pt=s.TEXTURE_3D);const mt=xt(I,E),ht=E.source;e.bindTexture(pt,I.__webglTexture,s.TEXTURE0+Z);const Ft=n.get(ht);if(ht.version!==Ft.__version||mt===!0){e.activeTexture(s.TEXTURE0+Z);const At=me.getPrimaries(me.workingColorSpace),Et=E.colorSpace===as?null:me.getPrimaries(E.colorSpace),$t=E.colorSpace===as||At===Et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let Mt=x(E.image,!1,i.maxTextureSize);Mt=oe(E,Mt);const It=o.convert(E.format,E.colorSpace),Ot=o.convert(E.type);let gt=y(E.internalFormat,It,Ot,E.colorSpace,E.isVideoTexture);lt(pt,E);let et;const wt=E.mipmaps,Pt=E.isVideoTexture!==!0,Bt=Ft.__version===void 0||mt===!0,z=ht.dataReady,ft=P(E,Mt);if(E.isDepthTexture)gt=v(E.format===Uo,E.type),Bt&&(Pt?e.texStorage2D(s.TEXTURE_2D,1,gt,Mt.width,Mt.height):e.texImage2D(s.TEXTURE_2D,0,gt,Mt.width,Mt.height,0,It,Ot,null));else if(E.isDataTexture)if(wt.length>0){Pt&&Bt&&e.texStorage2D(s.TEXTURE_2D,ft,gt,wt[0].width,wt[0].height);for(let Q=0,at=wt.length;Q<at;Q++)et=wt[Q],Pt?z&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,et.width,et.height,It,Ot,et.data):e.texImage2D(s.TEXTURE_2D,Q,gt,et.width,et.height,0,It,Ot,et.data);E.generateMipmaps=!1}else Pt?(Bt&&e.texStorage2D(s.TEXTURE_2D,ft,gt,Mt.width,Mt.height),z&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Mt.width,Mt.height,It,Ot,Mt.data)):e.texImage2D(s.TEXTURE_2D,0,gt,Mt.width,Mt.height,0,It,Ot,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Pt&&Bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,gt,wt[0].width,wt[0].height,Mt.depth);for(let Q=0,at=wt.length;Q<at;Q++)if(et=wt[Q],E.format!==hi)if(It!==null)if(Pt){if(z)if(E.layerUpdates.size>0){const $=Cd(et.width,et.height,E.format,E.type);for(const X of E.layerUpdates){const vt=et.data.subarray(X*$/et.data.BYTES_PER_ELEMENT,(X+1)*$/et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,X,et.width,et.height,1,It,vt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,et.width,et.height,Mt.depth,It,et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,gt,et.width,et.height,Mt.depth,0,et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?z&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,et.width,et.height,Mt.depth,It,Ot,et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,gt,et.width,et.height,Mt.depth,0,It,Ot,et.data)}else{Pt&&Bt&&e.texStorage2D(s.TEXTURE_2D,ft,gt,wt[0].width,wt[0].height);for(let Q=0,at=wt.length;Q<at;Q++)et=wt[Q],E.format!==hi?It!==null?Pt?z&&e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,et.width,et.height,It,et.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,gt,et.width,et.height,0,et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?z&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,et.width,et.height,It,Ot,et.data):e.texImage2D(s.TEXTURE_2D,Q,gt,et.width,et.height,0,It,Ot,et.data)}else if(E.isDataArrayTexture)if(Pt){if(Bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,gt,Mt.width,Mt.height,Mt.depth),z)if(E.layerUpdates.size>0){const Q=Cd(Mt.width,Mt.height,E.format,E.type);for(const at of E.layerUpdates){const $=Mt.data.subarray(at*Q/Mt.data.BYTES_PER_ELEMENT,(at+1)*Q/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,at,Mt.width,Mt.height,1,It,Ot,$)}E.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,It,Ot,Mt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,gt,Mt.width,Mt.height,Mt.depth,0,It,Ot,Mt.data);else if(E.isData3DTexture)Pt?(Bt&&e.texStorage3D(s.TEXTURE_3D,ft,gt,Mt.width,Mt.height,Mt.depth),z&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,It,Ot,Mt.data)):e.texImage3D(s.TEXTURE_3D,0,gt,Mt.width,Mt.height,Mt.depth,0,It,Ot,Mt.data);else if(E.isFramebufferTexture){if(Bt)if(Pt)e.texStorage2D(s.TEXTURE_2D,ft,gt,Mt.width,Mt.height);else{let Q=Mt.width,at=Mt.height;for(let $=0;$<ft;$++)e.texImage2D(s.TEXTURE_2D,$,gt,Q,at,0,It,Ot,null),Q>>=1,at>>=1}}else if(wt.length>0){if(Pt&&Bt){const Q=kt(wt[0]);e.texStorage2D(s.TEXTURE_2D,ft,gt,Q.width,Q.height)}for(let Q=0,at=wt.length;Q<at;Q++)et=wt[Q],Pt?z&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,It,Ot,et):e.texImage2D(s.TEXTURE_2D,Q,gt,It,Ot,et);E.generateMipmaps=!1}else if(Pt){if(Bt){const Q=kt(Mt);e.texStorage2D(s.TEXTURE_2D,ft,gt,Q.width,Q.height)}z&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,It,Ot,Mt)}else e.texImage2D(s.TEXTURE_2D,0,gt,It,Ot,Mt);g(E)&&m(pt),Ft.__version=ht.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function L(I,E,Z){if(E.image.length!==6)return;const pt=xt(I,E),mt=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+Z);const ht=n.get(mt);if(mt.version!==ht.__version||pt===!0){e.activeTexture(s.TEXTURE0+Z);const Ft=me.getPrimaries(me.workingColorSpace),At=E.colorSpace===as?null:me.getPrimaries(E.colorSpace),Et=E.colorSpace===as||Ft===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const $t=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,It=[];for(let at=0;at<6;at++)!$t&&!Mt?It[at]=x(E.image[at],!0,i.maxCubemapSize):It[at]=Mt?E.image[at].image:E.image[at],It[at]=oe(E,It[at]);const Ot=It[0],gt=o.convert(E.format,E.colorSpace),et=o.convert(E.type),wt=y(E.internalFormat,gt,et,E.colorSpace),Pt=E.isVideoTexture!==!0,Bt=ht.__version===void 0||pt===!0,z=mt.dataReady;let ft=P(E,Ot);lt(s.TEXTURE_CUBE_MAP,E);let Q;if($t){Pt&&Bt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,wt,Ot.width,Ot.height);for(let at=0;at<6;at++){Q=It[at].mipmaps;for(let $=0;$<Q.length;$++){const X=Q[$];E.format!==hi?gt!==null?Pt?z&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,$,0,0,X.width,X.height,gt,X.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,$,wt,X.width,X.height,0,X.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,$,0,0,X.width,X.height,gt,et,X.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,$,wt,X.width,X.height,0,gt,et,X.data)}}}else{if(Q=E.mipmaps,Pt&&Bt){Q.length>0&&ft++;const at=kt(It[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,wt,at.width,at.height)}for(let at=0;at<6;at++)if(Mt){Pt?z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,It[at].width,It[at].height,gt,et,It[at].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,wt,It[at].width,It[at].height,0,gt,et,It[at].data);for(let $=0;$<Q.length;$++){const vt=Q[$].image[at].image;Pt?z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,$+1,0,0,vt.width,vt.height,gt,et,vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,$+1,wt,vt.width,vt.height,0,gt,et,vt.data)}}else{Pt?z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,gt,et,It[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,wt,gt,et,It[at]);for(let $=0;$<Q.length;$++){const X=Q[$];Pt?z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,$+1,0,0,gt,et,X.image[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,$+1,wt,gt,et,X.image[at])}}}g(E)&&m(s.TEXTURE_CUBE_MAP),ht.__version=mt.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function N(I,E,Z,pt,mt,ht){const Ft=o.convert(Z.format,Z.colorSpace),At=o.convert(Z.type),Et=y(Z.internalFormat,Ft,At,Z.colorSpace),$t=n.get(E),Mt=n.get(Z);if(Mt.__renderTarget=E,!$t.__hasExternalTextures){const It=Math.max(1,E.width>>ht),Ot=Math.max(1,E.height>>ht);mt===s.TEXTURE_3D||mt===s.TEXTURE_2D_ARRAY?e.texImage3D(mt,ht,Et,It,Ot,E.depth,0,Ft,At,null):e.texImage2D(mt,ht,Et,It,Ot,0,Ft,At,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),Kt(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,mt,Mt.__webglTexture,0,Vt(E)):(mt===s.TEXTURE_2D||mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pt,mt,Mt.__webglTexture,ht),e.bindFramebuffer(s.FRAMEBUFFER,null)}function U(I,E,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,I),E.depthBuffer){const pt=E.depthTexture,mt=pt&&pt.isDepthTexture?pt.type:null,ht=v(E.stencilBuffer,mt),Ft=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=Vt(E);Kt(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At,ht,E.width,E.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,At,ht,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ht,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ft,s.RENDERBUFFER,I)}else{const pt=E.textures;for(let mt=0;mt<pt.length;mt++){const ht=pt[mt],Ft=o.convert(ht.format,ht.colorSpace),At=o.convert(ht.type),Et=y(ht.internalFormat,Ft,At,ht.colorSpace),$t=Vt(E);Z&&Kt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,Et,E.width,E.height):Kt(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t,Et,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Et,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function J(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=n.get(E.depthTexture);pt.__renderTarget=E,(!pt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),B(E.depthTexture,0);const mt=pt.__webglTexture,ht=Vt(E);if(E.depthTexture.format===To)Kt(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,mt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,mt,0);else if(E.depthTexture.format===Uo)Kt(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,mt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function rt(I){const E=n.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const pt=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pt){const mt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pt.removeEventListener("dispose",mt)};pt.addEventListener("dispose",mt),E.__depthDisposeCallback=mt}E.__boundDepthTexture=pt}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");J(E.__webglFramebuffer,I)}else if(Z){E.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[pt]),E.__webglDepthbuffer[pt]===void 0)E.__webglDepthbuffer[pt]=s.createRenderbuffer(),U(E.__webglDepthbuffer[pt],I,!1);else{const mt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer[pt];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,ht)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),U(E.__webglDepthbuffer,I,!1);else{const pt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,mt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(I,E,Z){const pt=n.get(I);E!==void 0&&N(pt.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&rt(I)}function dt(I){const E=I.texture,Z=n.get(I),pt=n.get(E);I.addEventListener("dispose",M);const mt=I.textures,ht=I.isWebGLCubeRenderTarget===!0,Ft=mt.length>1;if(Ft||(pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture()),pt.__version=E.version,r.memory.textures++),ht){Z.__webglFramebuffer=[];for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[At]=[];for(let Et=0;Et<E.mipmaps.length;Et++)Z.__webglFramebuffer[At][Et]=s.createFramebuffer()}else Z.__webglFramebuffer[At]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let At=0;At<E.mipmaps.length;At++)Z.__webglFramebuffer[At]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Ft)for(let At=0,Et=mt.length;At<Et;At++){const $t=n.get(mt[At]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),r.memory.textures++)}if(I.samples>0&&Kt(I)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let At=0;At<mt.length;At++){const Et=mt[At];Z.__webglColorRenderbuffer[At]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[At]);const $t=o.convert(Et.format,Et.colorSpace),Mt=o.convert(Et.type),It=y(Et.internalFormat,$t,Mt,Et.colorSpace,I.isXRRenderTarget===!0),Ot=Vt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot,It,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,Z.__webglColorRenderbuffer[At])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),U(Z.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){e.bindTexture(s.TEXTURE_CUBE_MAP,pt.__webglTexture),lt(s.TEXTURE_CUBE_MAP,E);for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0)for(let Et=0;Et<E.mipmaps.length;Et++)N(Z.__webglFramebuffer[At][Et],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,Et);else N(Z.__webglFramebuffer[At],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);g(E)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let At=0,Et=mt.length;At<Et;At++){const $t=mt[At],Mt=n.get($t);e.bindTexture(s.TEXTURE_2D,Mt.__webglTexture),lt(s.TEXTURE_2D,$t),N(Z.__webglFramebuffer,I,$t,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,0),g($t)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let At=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(At=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(At,pt.__webglTexture),lt(At,E),E.mipmaps&&E.mipmaps.length>0)for(let Et=0;Et<E.mipmaps.length;Et++)N(Z.__webglFramebuffer[Et],I,E,s.COLOR_ATTACHMENT0,At,Et);else N(Z.__webglFramebuffer,I,E,s.COLOR_ATTACHMENT0,At,0);g(E)&&m(At),e.unbindTexture()}I.depthBuffer&&rt(I)}function it(I){const E=I.textures;for(let Z=0,pt=E.length;Z<pt;Z++){const mt=E[Z];if(g(mt)){const ht=_(I),Ft=n.get(mt).__webglTexture;e.bindTexture(ht,Ft),m(ht),e.unbindTexture()}}}const St=[],F=[];function bt(I){if(I.samples>0){if(Kt(I)===!1){const E=I.textures,Z=I.width,pt=I.height;let mt=s.COLOR_BUFFER_BIT;const ht=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ft=n.get(I),At=E.length>1;if(At)for(let Et=0;Et<E.length;Et++)e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Et=0;Et<E.length;Et++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(mt|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(mt|=s.STENCIL_BUFFER_BIT)),At){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ft.__webglColorRenderbuffer[Et]);const $t=n.get(E[Et]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$t,0)}s.blitFramebuffer(0,0,Z,pt,0,0,Z,pt,mt,s.NEAREST),c===!0&&(St.length=0,F.length=0,St.push(s.COLOR_ATTACHMENT0+Et),I.depthBuffer&&I.resolveDepthBuffer===!1&&(St.push(ht),F.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,St))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),At)for(let Et=0;Et<E.length;Et++){e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,Ft.__webglColorRenderbuffer[Et]);const $t=n.get(E[Et]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.TEXTURE_2D,$t,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const E=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Vt(I){return Math.min(i.maxSamples,I.samples)}function Kt(I){const E=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Nt(I){const E=r.render.frame;u.get(I)!==E&&(u.set(I,E),I.update())}function oe(I,E){const Z=I.colorSpace,pt=I.format,mt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==Go&&Z!==as&&(me.getTransfer(Z)===Te?(pt!==hi||mt!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function kt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.setTexture2D=B,this.setTexture2DArray=Y,this.setTexture3D=H,this.setTextureCube=K,this.rebindTextures=ct,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=N,this.useMultisampledRTT=Kt}function N_(s,t){function e(n,i=as){let o;const r=me.getTransfer(i);if(n===Zi)return s.UNSIGNED_BYTE;if(n===Yh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===jh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===df)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===hf)return s.BYTE;if(n===uf)return s.SHORT;if(n===Pr)return s.UNSIGNED_SHORT;if(n===qh)return s.INT;if(n===Bs)return s.UNSIGNED_INT;if(n===bi)return s.FLOAT;if(n===qi)return s.HALF_FLOAT;if(n===ff)return s.ALPHA;if(n===pf)return s.RGB;if(n===hi)return s.RGBA;if(n===mf)return s.LUMINANCE;if(n===gf)return s.LUMINANCE_ALPHA;if(n===To)return s.DEPTH_COMPONENT;if(n===Uo)return s.DEPTH_STENCIL;if(n===pc)return s.RED;if(n===Zh)return s.RED_INTEGER;if(n===Kh)return s.RG;if(n===Jh)return s.RG_INTEGER;if(n===Qh)return s.RGBA_INTEGER;if(n===Va||n===Ha||n===Ga||n===Wa)if(r===Te)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Va)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Va)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ha)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ga)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yl||n===jl||n===Zl||n===Kl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Yl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jl||n===Ql||n===th)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Jl||n===Ql)return r===Te?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===th)return r===Te?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===eh||n===nh||n===ih||n===sh||n===oh||n===rh||n===ah||n===ch||n===lh||n===hh||n===uh||n===dh||n===fh||n===ph)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===eh)return r===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nh)return r===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ih)return r===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sh)return r===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oh)return r===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rh)return r===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ah)return r===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ch)return r===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lh)return r===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hh)return r===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uh)return r===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dh)return r===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fh)return r===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ph)return r===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xa||n===mh||n===gh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Xa)return r===Te?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xf||n===xh||n===vh||n===_h)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Xa)return o.COMPRESSED_RED_RGTC1_EXT;if(n===xh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_h)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class z_ extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class He extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const U_={type:"move"};class il{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(U_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new He;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const F_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k_=`
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

}`;class O_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new _n,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ti({vertexShader:F_,fragmentShader:k_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dt(new $e(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B_ extends Gs{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,p=null;const x=new O_,g=e.getContextAttributes();let m=null,_=null;const y=[],v=[],P=new Ct;let T=null;const M=new Dn;M.viewport=new Fe;const C=new Dn;C.viewport=new Fe;const b=[M,C],w=new z_;let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let L=y[j];return L===void 0&&(L=new il,y[j]=L),L.getTargetRaySpace()},this.getControllerGrip=function(j){let L=y[j];return L===void 0&&(L=new il,y[j]=L),L.getGripSpace()},this.getHand=function(j){let L=y[j];return L===void 0&&(L=new il,y[j]=L),L.getHandSpace()};function O(j){const L=v.indexOf(j.inputSource);if(L===-1)return;const N=y[L];N!==void 0&&(N.update(j.inputSource,j.frame,l||r),N.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",B);for(let j=0;j<y.length;j++){const L=v[j];L!==null&&(v[j]=null,y[j].disconnect(L))}D=null,k=null,x.reset(),t.setRenderTarget(m),f=null,d=null,h=null,i=null,_=null,xt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",V),i.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){const L={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(i,e,L),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Ci(f.framebufferWidth,f.framebufferHeight,{format:hi,type:Zi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let L=null,N=null,U=null;g.depth&&(U=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,L=g.stencil?Uo:To,N=g.stencil?zo:Bs);const J={colorFormat:e.RGBA8,depthFormat:U,scaleFactor:o};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(J),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new Ci(d.textureWidth,d.textureHeight,{format:hi,type:Zi,depthTexture:new eu(d.textureWidth,d.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),xt.setContext(i),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function B(j){for(let L=0;L<j.removed.length;L++){const N=j.removed[L],U=v.indexOf(N);U>=0&&(v[U]=null,y[U].disconnect(N))}for(let L=0;L<j.added.length;L++){const N=j.added[L];let U=v.indexOf(N);if(U===-1){for(let rt=0;rt<y.length;rt++)if(rt>=v.length){v.push(N),U=rt;break}else if(v[rt]===null){v[rt]=N,U=rt;break}if(U===-1)break}const J=y[U];J&&J.connect(N)}}const Y=new A,H=new A;function K(j,L,N){Y.setFromMatrixPosition(L.matrixWorld),H.setFromMatrixPosition(N.matrixWorld);const U=Y.distanceTo(H),J=L.projectionMatrix.elements,rt=N.projectionMatrix.elements,ct=J[14]/(J[10]-1),dt=J[14]/(J[10]+1),it=(J[9]+1)/J[5],St=(J[9]-1)/J[5],F=(J[8]-1)/J[0],bt=(rt[8]+1)/rt[0],Vt=ct*F,Kt=ct*bt,Nt=U/(-F+bt),oe=Nt*-F;if(L.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(oe),j.translateZ(Nt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),J[10]===-1)j.projectionMatrix.copy(L.projectionMatrix),j.projectionMatrixInverse.copy(L.projectionMatrixInverse);else{const kt=ct+Nt,I=dt+Nt,E=Vt-oe,Z=Kt+(U-oe),pt=it*dt/I*kt,mt=St*dt/I*kt;j.projectionMatrix.makePerspective(E,Z,pt,mt,kt,I),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ut(j,L){L===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(L.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let L=j.near,N=j.far;x.texture!==null&&(x.depthNear>0&&(L=x.depthNear),x.depthFar>0&&(N=x.depthFar)),w.near=C.near=M.near=L,w.far=C.far=M.far=N,(D!==w.near||k!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),D=w.near,k=w.far),M.layers.mask=j.layers.mask|2,C.layers.mask=j.layers.mask|4,w.layers.mask=M.layers.mask|C.layers.mask;const U=j.parent,J=w.cameras;ut(w,U);for(let rt=0;rt<J.length;rt++)ut(J[rt],U);J.length===2?K(w,M,C):w.projectionMatrix.copy(M.projectionMatrix),yt(j,w,U)};function yt(j,L,N){N===null?j.matrix.copy(L.matrixWorld):(j.matrix.copy(N.matrixWorld),j.matrix.invert(),j.matrix.multiply(L.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(L.projectionMatrix),j.projectionMatrixInverse.copy(L.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Mh*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(w)};let _t=null;function lt(j,L){if(u=L.getViewerPose(l||r),p=L,u!==null){const N=u.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let U=!1;N.length!==w.cameras.length&&(w.cameras.length=0,U=!0);for(let rt=0;rt<N.length;rt++){const ct=N[rt];let dt=null;if(f!==null)dt=f.getViewport(ct);else{const St=h.getViewSubImage(d,ct);dt=St.viewport,rt===0&&(t.setRenderTargetTextures(_,St.colorTexture,d.ignoreDepthValues?void 0:St.depthStencilTexture),t.setRenderTarget(_))}let it=b[rt];it===void 0&&(it=new Dn,it.layers.enable(rt),it.viewport=new Fe,b[rt]=it),it.matrix.fromArray(ct.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(ct.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(dt.x,dt.y,dt.width,dt.height),rt===0&&(w.matrix.copy(it.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),U===!0&&w.cameras.push(it)}const J=i.enabledFeatures;if(J&&J.includes("depth-sensing")){const rt=h.getDepthInformation(N[0]);rt&&rt.isValid&&rt.texture&&x.init(t,rt,i.renderState)}}for(let N=0;N<y.length;N++){const U=v[N],J=y[N];U!==null&&J!==void 0&&J.update(U,L,l||r)}_t&&_t(j,L),L.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:L}),p=null}const xt=new Pf;xt.setAnimationLoop(lt),this.setAnimationLoop=function(j){_t=j},this.dispose=function(){}}}const Ms=new di,V_=new ae;function H_(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Af(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,_,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(g,m):m.isMeshToonMaterial?(o(g,m),h(g,m)):m.isMeshPhongMaterial?(o(g,m),u(g,m)):m.isMeshStandardMaterial?(o(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(o(g,m),p(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),x(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,_,y):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Tn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Tn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const _=t.get(m),y=_.envMap,v=_.envMapRotation;y&&(g.envMap.value=y,Ms.copy(v),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),g.envMapRotation.value.setFromMatrix4(V_.makeRotationFromEuler(Ms)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,_,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Tn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const _=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function G_(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,y){const v=y.program;n.uniformBlockBinding(_,v)}function l(_,y){let v=i[_.id];v===void 0&&(p(_),v=u(_),i[_.id]=v,_.addEventListener("dispose",g));const P=y.program;n.updateUBOMapping(_,P);const T=t.render.frame;o[_.id]!==T&&(d(_),o[_.id]=T)}function u(_){const y=h();_.__bindingPointIndex=y;const v=s.createBuffer(),P=_.__size,T=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,P,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function h(){for(let _=0;_<a;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=i[_.id],v=_.uniforms,P=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let T=0,M=v.length;T<M;T++){const C=Array.isArray(v[T])?v[T]:[v[T]];for(let b=0,w=C.length;b<w;b++){const D=C[b];if(f(D,T,b,P)===!0){const k=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let B=0;B<O.length;B++){const Y=O[B],H=x(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,k+V,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,V),V+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,y,v,P){const T=_.value,M=y+"_"+v;if(P[M]===void 0)return typeof T=="number"||typeof T=="boolean"?P[M]=T:P[M]=T.clone(),!0;{const C=P[M];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return P[M]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function p(_){const y=_.uniforms;let v=0;const P=16;for(let M=0,C=y.length;M<C;M++){const b=Array.isArray(y[M])?y[M]:[y[M]];for(let w=0,D=b.length;w<D;w++){const k=b[w],O=Array.isArray(k.value)?k.value:[k.value];for(let V=0,B=O.length;V<B;V++){const Y=O[V],H=x(Y),K=v%P,ut=K%H.boundary,yt=K+ut;v+=ut,yt!==0&&P-yt<H.storage&&(v+=P-yt),k.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=H.storage}}}const T=v%P;return T>0&&(v+=P-T),_.__size=v,_.__cache={},this}function x(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function g(_){const y=_.target;y.removeEventListener("dispose",g);const v=r.indexOf(y.__bindingPointIndex);r.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete o[y.id]}function m(){for(const _ in i)s.deleteBuffer(i[_]);r=[],i={},o={}}return{bind:c,update:l,dispose:m}}class W_{constructor(t={}){const{canvas:e=Cm(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const p=new Uint32Array(4),x=new Int32Array(4);let g=null,m=null;const _=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=hs,this.toneMappingExposure=1;const v=this;let P=!1,T=0,M=0,C=null,b=-1,w=null;const D=new Fe,k=new Fe;let O=null;const V=new te(0);let B=0,Y=e.width,H=e.height,K=1,ut=null,yt=null;const _t=new Fe(0,0,Y,H),lt=new Fe(0,0,Y,H);let xt=!1;const j=new xc;let L=!1,N=!1;const U=new ae,J=new ae,rt=new A,ct=new Fe,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function St(){return C===null?K:1}let F=n;function bt(R,W){return e.getContext(R,W)}try{const R={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$h}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",$,!1),e.addEventListener("webglcontextcreationerror",X,!1),F===null){const W="webgl2";if(F=bt(W,R),F===null)throw bt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Vt,Kt,Nt,oe,kt,I,E,Z,pt,mt,ht,Ft,At,Et,$t,Mt,It,Ot,gt,et,wt,Pt,Bt,z;function ft(){Vt=new jx(F),Vt.init(),Pt=new N_(F,Vt),Kt=new Gx(F,Vt,t,Pt),Nt=new L_(F,Vt),Kt.reverseDepthBuffer&&d&&Nt.buffers.depth.setReversed(!0),oe=new Jx(F),kt=new g_,I=new D_(F,Vt,Nt,kt,Kt,Pt,oe),E=new Xx(v),Z=new Yx(v),pt=new og(F),Bt=new Vx(F,pt),mt=new Zx(F,pt,oe,Bt),ht=new tv(F,mt,pt,oe),gt=new Qx(F,Kt,I),Mt=new Wx(kt),Ft=new m_(v,E,Z,Vt,Kt,Bt,Mt),At=new H_(v,kt),Et=new v_,$t=new b_(Vt),Ot=new Bx(v,E,Z,Nt,ht,f,c),It=new C_(v,ht,Kt),z=new G_(F,oe,Kt,Nt),et=new Hx(F,Vt,oe),wt=new Kx(F,Vt,oe),oe.programs=Ft.programs,v.capabilities=Kt,v.extensions=Vt,v.properties=kt,v.renderLists=Et,v.shadowMap=It,v.state=Nt,v.info=oe}ft();const Q=new B_(v,F);this.xr=Q,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=Vt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Vt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(Y,H,!1))},this.getSize=function(R){return R.set(Y,H)},this.setSize=function(R,W,nt=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,H=W,e.width=Math.floor(R*K),e.height=Math.floor(W*K),nt===!0&&(e.style.width=R+"px",e.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(Y*K,H*K).floor()},this.setDrawingBufferSize=function(R,W,nt){Y=R,H=W,K=nt,e.width=Math.floor(R*nt),e.height=Math.floor(W*nt),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(_t)},this.setViewport=function(R,W,nt,st){R.isVector4?_t.set(R.x,R.y,R.z,R.w):_t.set(R,W,nt,st),Nt.viewport(D.copy(_t).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(lt)},this.setScissor=function(R,W,nt,st){R.isVector4?lt.set(R.x,R.y,R.z,R.w):lt.set(R,W,nt,st),Nt.scissor(k.copy(lt).multiplyScalar(K).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(R){Nt.setScissorTest(xt=R)},this.setOpaqueSort=function(R){ut=R},this.setTransparentSort=function(R){yt=R},this.getClearColor=function(R){return R.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(R=!0,W=!0,nt=!0){let st=0;if(R){let q=!1;if(C!==null){const Tt=C.texture.format;q=Tt===Qh||Tt===Jh||Tt===Zh}if(q){const Tt=C.texture.type,zt=Tt===Zi||Tt===Bs||Tt===Pr||Tt===zo||Tt===Yh||Tt===jh,Yt=Ot.getClearColor(),jt=Ot.getClearAlpha(),se=Yt.r,ce=Yt.g,Zt=Yt.b;zt?(p[0]=se,p[1]=ce,p[2]=Zt,p[3]=jt,F.clearBufferuiv(F.COLOR,0,p)):(x[0]=se,x[1]=ce,x[2]=Zt,x[3]=jt,F.clearBufferiv(F.COLOR,0,x))}else st|=F.COLOR_BUFFER_BIT}W&&(st|=F.DEPTH_BUFFER_BIT),nt&&(st|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",$,!1),e.removeEventListener("webglcontextcreationerror",X,!1),Et.dispose(),$t.dispose(),kt.dispose(),E.dispose(),Z.dispose(),ht.dispose(),Bt.dispose(),z.dispose(),Ft.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Ye),Q.removeEventListener("sessionend",Xt),be.stop()};function at(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const R=oe.autoReset,W=It.enabled,nt=It.autoUpdate,st=It.needsUpdate,q=It.type;ft(),oe.autoReset=R,It.enabled=W,It.autoUpdate=nt,It.needsUpdate=st,It.type=q}function X(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function vt(R){const W=R.target;W.removeEventListener("dispose",vt),Gt(W)}function Gt(R){Wt(R),kt.remove(R)}function Wt(R){const W=kt.get(R).programs;W!==void 0&&(W.forEach(function(nt){Ft.releaseProgram(nt)}),R.isShaderMaterial&&Ft.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,nt,st,q,Tt){W===null&&(W=dt);const zt=q.isMesh&&q.matrixWorld.determinant()<0,Yt=ei(R,W,nt,st,q);Nt.setMaterial(st,zt);let jt=nt.index,se=1;if(st.wireframe===!0){if(jt=mt.getWireframeAttribute(nt),jt===void 0)return;se=2}const ce=nt.drawRange,Zt=nt.attributes.position;let xe=ce.start*se,Ce=(ce.start+ce.count)*se;Tt!==null&&(xe=Math.max(xe,Tt.start*se),Ce=Math.min(Ce,(Tt.start+Tt.count)*se)),jt!==null?(xe=Math.max(xe,0),Ce=Math.min(Ce,jt.count)):Zt!=null&&(xe=Math.max(xe,0),Ce=Math.min(Ce,Zt.count));const Le=Ce-xe;if(Le<0||Le===1/0)return;Bt.setup(q,st,Yt,nt,jt);let An,Me=et;if(jt!==null&&(An=pt.get(jt),Me=wt,Me.setIndex(An)),q.isMesh)st.wireframe===!0?(Nt.setLineWidth(st.wireframeLinewidth*St()),Me.setMode(F.LINES)):Me.setMode(F.TRIANGLES);else if(q.isLine){let Jt=st.linewidth;Jt===void 0&&(Jt=1),Nt.setLineWidth(Jt*St()),q.isLineSegments?Me.setMode(F.LINES):q.isLineLoop?Me.setMode(F.LINE_LOOP):Me.setMode(F.LINE_STRIP)}else q.isPoints?Me.setMode(F.POINTS):q.isSprite&&Me.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Me.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))Me.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Jt=q._multiDrawStarts,Li=q._multiDrawCounts,ye=q._multiDrawCount,ni=jt?pt.get(jt).bytesPerElement:1,qs=kt.get(st).currentProgram.getUniforms();for(let Fn=0;Fn<ye;Fn++)qs.setValue(F,"_gl_DrawID",Fn),Me.render(Jt[Fn]/ni,Li[Fn])}else if(q.isInstancedMesh)Me.renderInstances(xe,Le,q.count);else if(nt.isInstancedBufferGeometry){const Jt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Li=Math.min(nt.instanceCount,Jt);Me.renderInstances(xe,Le,Li)}else Me.render(xe,Le)};function qt(R,W,nt){R.transparent===!0&&R.side===Ue&&R.forceSinglePass===!1?(R.side=Tn,R.needsUpdate=!0,ze(R,W,nt),R.side=fs,R.needsUpdate=!0,ze(R,W,nt),R.side=Ue):ze(R,W,nt)}this.compile=function(R,W,nt=null){nt===null&&(nt=R),m=$t.get(nt),m.init(W),y.push(m),nt.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),R!==nt&&R.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights();const st=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Tt=q.material;if(Tt)if(Array.isArray(Tt))for(let zt=0;zt<Tt.length;zt++){const Yt=Tt[zt];qt(Yt,nt,q),st.add(Yt)}else qt(Tt,nt,q),st.add(Tt)}),y.pop(),m=null,st},this.compileAsync=function(R,W,nt=null){const st=this.compile(R,W,nt);return new Promise(q=>{function Tt(){if(st.forEach(function(zt){kt.get(zt).currentProgram.isReady()&&st.delete(zt)}),st.size===0){q(R);return}setTimeout(Tt,10)}Vt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let ge=null;function pe(R){ge&&ge(R)}function Ye(){be.stop()}function Xt(){be.start()}const be=new Pf;be.setAnimationLoop(pe),typeof self<"u"&&be.setContext(self),this.setAnimationLoop=function(R){ge=R,Q.setAnimationLoop(R),R===null?be.stop():be.start()},Q.addEventListener("sessionstart",Ye),Q.addEventListener("sessionend",Xt),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(W),W=Q.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,W,C),m=$t.get(R,y.length),m.init(W),y.push(m),J.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),j.setFromProjectionMatrix(J),N=this.localClippingEnabled,L=Mt.init(this.clippingPlanes,N),g=Et.get(R,_.length),g.init(),_.push(g),Q.enabled===!0&&Q.isPresenting===!0){const Tt=v.xr.getDepthSensingMesh();Tt!==null&&Ee(Tt,W,-1/0,v.sortObjects)}Ee(R,W,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ut,yt),it=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,it&&Ot.addToRenderList(g,R),this.info.render.frame++,L===!0&&Mt.beginShadows();const nt=m.state.shadowsArray;It.render(nt,R,W),L===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=g.opaque,q=g.transmissive;if(m.setupLights(),W.isArrayCamera){const Tt=W.cameras;if(q.length>0)for(let zt=0,Yt=Tt.length;zt<Yt;zt++){const jt=Tt[zt];ne(st,q,R,jt)}it&&Ot.render(R);for(let zt=0,Yt=Tt.length;zt<Yt;zt++){const jt=Tt[zt];Rt(g,R,jt,jt.viewport)}}else q.length>0&&ne(st,q,R,W),it&&Ot.render(R),Rt(g,R,W);C!==null&&(I.updateMultisampleRenderTarget(C),I.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(v,R,W),Bt.resetDefaultState(),b=-1,w=null,y.pop(),y.length>0?(m=y[y.length-1],L===!0&&Mt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function Ee(R,W,nt,st){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)nt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||j.intersectsSprite(R)){st&&ct.setFromMatrixPosition(R.matrixWorld).applyMatrix4(J);const zt=ht.update(R),Yt=R.material;Yt.visible&&g.push(R,zt,Yt,nt,ct.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||j.intersectsObject(R))){const zt=ht.update(R),Yt=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ct.copy(R.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),ct.copy(zt.boundingSphere.center)),ct.applyMatrix4(R.matrixWorld).applyMatrix4(J)),Array.isArray(Yt)){const jt=zt.groups;for(let se=0,ce=jt.length;se<ce;se++){const Zt=jt[se],xe=Yt[Zt.materialIndex];xe&&xe.visible&&g.push(R,zt,xe,nt,ct.z,Zt)}}else Yt.visible&&g.push(R,zt,Yt,nt,ct.z,null)}}const Tt=R.children;for(let zt=0,Yt=Tt.length;zt<Yt;zt++)Ee(Tt[zt],W,nt,st)}function Rt(R,W,nt,st){const q=R.opaque,Tt=R.transmissive,zt=R.transparent;m.setupLightsView(nt),L===!0&&Mt.setGlobalState(v.clippingPlanes,nt),st&&Nt.viewport(D.copy(st)),q.length>0&&de(q,W,nt),Tt.length>0&&de(Tt,W,nt),zt.length>0&&de(zt,W,nt),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function ne(R,W,nt,st){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[st.id]===void 0&&(m.state.transmissionRenderTarget[st.id]=new Ci(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?qi:Zi,minFilter:Ns,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));const Tt=m.state.transmissionRenderTarget[st.id],zt=st.viewport||D;Tt.setSize(zt.z,zt.w);const Yt=v.getRenderTarget();v.setRenderTarget(Tt),v.getClearColor(V),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),it&&Ot.render(nt);const jt=v.toneMapping;v.toneMapping=hs;const se=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),m.setupLightsView(st),L===!0&&Mt.setGlobalState(v.clippingPlanes,st),de(R,nt,st),I.updateMultisampleRenderTarget(Tt),I.updateRenderTargetMipmap(Tt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Zt=0,xe=W.length;Zt<xe;Zt++){const Ce=W[Zt],Le=Ce.object,An=Ce.geometry,Me=Ce.material,Jt=Ce.group;if(Me.side===Ue&&Le.layers.test(st.layers)){const Li=Me.side;Me.side=Tn,Me.needsUpdate=!0,Ne(Le,nt,st,An,Me,Jt),Me.side=Li,Me.needsUpdate=!0,ce=!0}}ce===!0&&(I.updateMultisampleRenderTarget(Tt),I.updateRenderTargetMipmap(Tt))}v.setRenderTarget(Yt),v.setClearColor(V,B),se!==void 0&&(st.viewport=se),v.toneMapping=jt}function de(R,W,nt){const st=W.isScene===!0?W.overrideMaterial:null;for(let q=0,Tt=R.length;q<Tt;q++){const zt=R[q],Yt=zt.object,jt=zt.geometry,se=st===null?zt.material:st,ce=zt.group;Yt.layers.test(nt.layers)&&Ne(Yt,W,nt,jt,se,ce)}}function Ne(R,W,nt,st,q,Tt){R.onBeforeRender(v,W,nt,st,q,Tt),R.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(v,W,nt,st,R,Tt),q.transparent===!0&&q.side===Ue&&q.forceSinglePass===!1?(q.side=Tn,q.needsUpdate=!0,v.renderBufferDirect(nt,W,st,q,R,Tt),q.side=fs,q.needsUpdate=!0,v.renderBufferDirect(nt,W,st,q,R,Tt),q.side=Ue):v.renderBufferDirect(nt,W,st,q,R,Tt),R.onAfterRender(v,W,nt,st,q,Tt)}function ze(R,W,nt){W.isScene!==!0&&(W=dt);const st=kt.get(R),q=m.state.lights,Tt=m.state.shadowsArray,zt=q.state.version,Yt=Ft.getParameters(R,q.state,Tt,W,nt),jt=Ft.getProgramCacheKey(Yt);let se=st.programs;st.environment=R.isMeshStandardMaterial?W.environment:null,st.fog=W.fog,st.envMap=(R.isMeshStandardMaterial?Z:E).get(R.envMap||st.environment),st.envMapRotation=st.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,se===void 0&&(R.addEventListener("dispose",vt),se=new Map,st.programs=se);let ce=se.get(jt);if(ce!==void 0){if(st.currentProgram===ce&&st.lightsStateVersion===zt)return Be(R,Yt),ce}else Yt.uniforms=Ft.getUniforms(R),R.onBeforeCompile(Yt,v),ce=Ft.acquireProgram(Yt,jt),se.set(jt,ce),st.uniforms=Yt.uniforms;const Zt=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Zt.clippingPlanes=Mt.uniform),Be(R,Yt),st.needsLights=Rc(R),st.lightsStateVersion=zt,st.needsLights&&(Zt.ambientLightColor.value=q.state.ambient,Zt.lightProbe.value=q.state.probe,Zt.directionalLights.value=q.state.directional,Zt.directionalLightShadows.value=q.state.directionalShadow,Zt.spotLights.value=q.state.spot,Zt.spotLightShadows.value=q.state.spotShadow,Zt.rectAreaLights.value=q.state.rectArea,Zt.ltc_1.value=q.state.rectAreaLTC1,Zt.ltc_2.value=q.state.rectAreaLTC2,Zt.pointLights.value=q.state.point,Zt.pointLightShadows.value=q.state.pointShadow,Zt.hemisphereLights.value=q.state.hemi,Zt.directionalShadowMap.value=q.state.directionalShadowMap,Zt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Zt.spotShadowMap.value=q.state.spotShadowMap,Zt.spotLightMatrix.value=q.state.spotLightMatrix,Zt.spotLightMap.value=q.state.spotLightMap,Zt.pointShadowMap.value=q.state.pointShadowMap,Zt.pointShadowMatrix.value=q.state.pointShadowMatrix),st.currentProgram=ce,st.uniformsList=null,ce}function Re(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=qa.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Be(R,W){const nt=kt.get(R);nt.outputColorSpace=W.outputColorSpace,nt.batching=W.batching,nt.batchingColor=W.batchingColor,nt.instancing=W.instancing,nt.instancingColor=W.instancingColor,nt.instancingMorph=W.instancingMorph,nt.skinning=W.skinning,nt.morphTargets=W.morphTargets,nt.morphNormals=W.morphNormals,nt.morphColors=W.morphColors,nt.morphTargetsCount=W.morphTargetsCount,nt.numClippingPlanes=W.numClippingPlanes,nt.numIntersection=W.numClipIntersection,nt.vertexAlphas=W.vertexAlphas,nt.vertexTangents=W.vertexTangents,nt.toneMapping=W.toneMapping}function ei(R,W,nt,st,q){W.isScene!==!0&&(W=dt),I.resetTextureUnits();const Tt=W.fog,zt=st.isMeshStandardMaterial?W.environment:null,Yt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Go,jt=(st.isMeshStandardMaterial?Z:E).get(st.envMap||zt),se=st.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,ce=!!nt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Zt=!!nt.morphAttributes.position,xe=!!nt.morphAttributes.normal,Ce=!!nt.morphAttributes.color;let Le=hs;st.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Le=v.toneMapping);const An=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Me=An!==void 0?An.length:0,Jt=kt.get(st),Li=m.state.lights;if(L===!0&&(N===!0||R!==w)){const qn=R===w&&st.id===b;Mt.setState(st,R,qn)}let ye=!1;st.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Li.state.version||Jt.outputColorSpace!==Yt||q.isBatchedMesh&&Jt.batching===!1||!q.isBatchedMesh&&Jt.batching===!0||q.isBatchedMesh&&Jt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Jt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Jt.instancing===!1||!q.isInstancedMesh&&Jt.instancing===!0||q.isSkinnedMesh&&Jt.skinning===!1||!q.isSkinnedMesh&&Jt.skinning===!0||q.isInstancedMesh&&Jt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Jt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Jt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Jt.instancingMorph===!1&&q.morphTexture!==null||Jt.envMap!==jt||st.fog===!0&&Jt.fog!==Tt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Mt.numPlanes||Jt.numIntersection!==Mt.numIntersection)||Jt.vertexAlphas!==se||Jt.vertexTangents!==ce||Jt.morphTargets!==Zt||Jt.morphNormals!==xe||Jt.morphColors!==Ce||Jt.toneMapping!==Le||Jt.morphTargetsCount!==Me)&&(ye=!0):(ye=!0,Jt.__version=st.version);let ni=Jt.currentProgram;ye===!0&&(ni=ze(st,W,q));let qs=!1,Fn=!1,qo=!1;const Ie=ni.getUniforms(),pi=Jt.uniforms;if(Nt.useProgram(ni.program)&&(qs=!0,Fn=!0,qo=!0),st.id!==b&&(b=st.id,Fn=!0),qs||w!==R){Nt.buffers.depth.getReversed()?(U.copy(R.projectionMatrix),Lm(U),Im(U),Ie.setValue(F,"projectionMatrix",U)):Ie.setValue(F,"projectionMatrix",R.projectionMatrix),Ie.setValue(F,"viewMatrix",R.matrixWorldInverse);const Qi=Ie.map.cameraPosition;Qi!==void 0&&Qi.setValue(F,rt.setFromMatrixPosition(R.matrixWorld)),Kt.logarithmicDepthBuffer&&Ie.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Ie.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Fn=!0,qo=!0)}if(q.isSkinnedMesh){Ie.setOptional(F,q,"bindMatrix"),Ie.setOptional(F,q,"bindMatrixInverse");const qn=q.skeleton;qn&&(qn.boneTexture===null&&qn.computeBoneTexture(),Ie.setValue(F,"boneTexture",qn.boneTexture,I))}q.isBatchedMesh&&(Ie.setOptional(F,q,"batchingTexture"),Ie.setValue(F,"batchingTexture",q._matricesTexture,I),Ie.setOptional(F,q,"batchingIdTexture"),Ie.setValue(F,"batchingIdTexture",q._indirectTexture,I),Ie.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&Ie.setValue(F,"batchingColorTexture",q._colorsTexture,I));const Yo=nt.morphAttributes;if((Yo.position!==void 0||Yo.normal!==void 0||Yo.color!==void 0)&&gt.update(q,nt,ni),(Fn||Jt.receiveShadow!==q.receiveShadow)&&(Jt.receiveShadow=q.receiveShadow,Ie.setValue(F,"receiveShadow",q.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(pi.envMap.value=jt,pi.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&W.environment!==null&&(pi.envMapIntensity.value=W.environmentIntensity),Fn&&(Ie.setValue(F,"toneMappingExposure",v.toneMappingExposure),Jt.needsLights&&Ac(pi,qo),Tt&&st.fog===!0&&At.refreshFogUniforms(pi,Tt),At.refreshMaterialUniforms(pi,st,K,H,m.state.transmissionRenderTarget[R.id]),qa.upload(F,Re(Jt),pi,I)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(qa.upload(F,Re(Jt),pi,I),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Ie.setValue(F,"center",q.center),Ie.setValue(F,"modelViewMatrix",q.modelViewMatrix),Ie.setValue(F,"normalMatrix",q.normalMatrix),Ie.setValue(F,"modelMatrix",q.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const qn=st.uniformsGroups;for(let Qi=0,ts=qn.length;Qi<ts;Qi++){const Pu=qn[Qi];z.update(Pu,ni),z.bind(Pu,ni)}}return ni}function Ac(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Rc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,W,nt){kt.get(R.texture).__webglTexture=W,kt.get(R.depthTexture).__webglTexture=nt;const st=kt.get(R);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=nt===void 0,st.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const nt=kt.get(R);nt.__webglFramebuffer=W,nt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,nt=0){C=R,T=W,M=nt;let st=!0,q=null,Tt=!1,zt=!1;if(R){const jt=kt.get(R);if(jt.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(F.FRAMEBUFFER,null),st=!1;else if(jt.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(jt.__hasExternalTextures)I.rebindTextures(R,kt.get(R.texture).__webglTexture,kt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Zt=R.depthTexture;if(jt.__boundDepthTexture!==Zt){if(Zt!==null&&kt.has(Zt)&&(R.width!==Zt.image.width||R.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}const se=R.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(zt=!0);const ce=kt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ce[W])?q=ce[W][nt]:q=ce[W],Tt=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?q=kt.get(R).__webglMultisampledFramebuffer:Array.isArray(ce)?q=ce[nt]:q=ce,D.copy(R.viewport),k.copy(R.scissor),O=R.scissorTest}else D.copy(_t).multiplyScalar(K).floor(),k.copy(lt).multiplyScalar(K).floor(),O=xt;if(Nt.bindFramebuffer(F.FRAMEBUFFER,q)&&st&&Nt.drawBuffers(R,q),Nt.viewport(D),Nt.scissor(k),Nt.setScissorTest(O),Tt){const jt=kt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,jt.__webglTexture,nt)}else if(zt){const jt=kt.get(R.texture),se=W||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,jt.__webglTexture,nt||0,se)}b=-1},this.readRenderTargetPixels=function(R,W,nt,st,q,Tt,zt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Yt=Yt[zt]),Yt){Nt.bindFramebuffer(F.FRAMEBUFFER,Yt);try{const jt=R.texture,se=jt.format,ce=jt.type;if(!Kt.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-st&&nt>=0&&nt<=R.height-q&&F.readPixels(W,nt,st,q,Pt.convert(se),Pt.convert(ce),Tt)}finally{const jt=C!==null?kt.get(C).__webglFramebuffer:null;Nt.bindFramebuffer(F.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(R,W,nt,st,q,Tt,zt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Yt=Yt[zt]),Yt){const jt=R.texture,se=jt.format,ce=jt.type;if(!Kt.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-st&&nt>=0&&nt<=R.height-q){Nt.bindFramebuffer(F.FRAMEBUFFER,Yt);const Zt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Zt),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),F.readPixels(W,nt,st,q,Pt.convert(se),Pt.convert(ce),0);const xe=C!==null?kt.get(C).__webglFramebuffer:null;Nt.bindFramebuffer(F.FRAMEBUFFER,xe);const Ce=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Pm(F,Ce,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Zt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.deleteBuffer(Zt),F.deleteSync(Ce),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,W=null,nt=0){R.isTexture!==!0&&(mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);const st=Math.pow(2,-nt),q=Math.floor(R.image.width*st),Tt=Math.floor(R.image.height*st),zt=W!==null?W.x:0,Yt=W!==null?W.y:0;I.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,nt,0,0,zt,Yt,q,Tt),Nt.unbindTexture()},this.copyTextureToTexture=function(R,W,nt=null,st=null,q=0){R.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,R=arguments[1],W=arguments[2],q=arguments[3]||0,nt=null);let Tt,zt,Yt,jt,se,ce,Zt,xe,Ce;const Le=R.isCompressedTexture?R.mipmaps[q]:R.image;nt!==null?(Tt=nt.max.x-nt.min.x,zt=nt.max.y-nt.min.y,Yt=nt.isBox3?nt.max.z-nt.min.z:1,jt=nt.min.x,se=nt.min.y,ce=nt.isBox3?nt.min.z:0):(Tt=Le.width,zt=Le.height,Yt=Le.depth||1,jt=0,se=0,ce=0),st!==null?(Zt=st.x,xe=st.y,Ce=st.z):(Zt=0,xe=0,Ce=0);const An=Pt.convert(W.format),Me=Pt.convert(W.type);let Jt;W.isData3DTexture?(I.setTexture3D(W,0),Jt=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(I.setTexture2DArray(W,0),Jt=F.TEXTURE_2D_ARRAY):(I.setTexture2D(W,0),Jt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Li=F.getParameter(F.UNPACK_ROW_LENGTH),ye=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ni=F.getParameter(F.UNPACK_SKIP_PIXELS),qs=F.getParameter(F.UNPACK_SKIP_ROWS),Fn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Le.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Le.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,jt),F.pixelStorei(F.UNPACK_SKIP_ROWS,se),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ce);const qo=R.isDataArrayTexture||R.isData3DTexture,Ie=W.isDataArrayTexture||W.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const pi=kt.get(R),Yo=kt.get(W),qn=kt.get(pi.__renderTarget),Qi=kt.get(Yo.__renderTarget);Nt.bindFramebuffer(F.READ_FRAMEBUFFER,qn.__webglFramebuffer),Nt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let ts=0;ts<Yt;ts++)qo&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,kt.get(R).__webglTexture,q,ce+ts),R.isDepthTexture?(Ie&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,kt.get(W).__webglTexture,q,Ce+ts),F.blitFramebuffer(jt,se,Tt,zt,Zt,xe,Tt,zt,F.DEPTH_BUFFER_BIT,F.NEAREST)):Ie?F.copyTexSubImage3D(Jt,q,Zt,xe,Ce+ts,jt,se,Tt,zt):F.copyTexSubImage2D(Jt,q,Zt,xe,Ce+ts,jt,se,Tt,zt);Nt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ie?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Jt,q,Zt,xe,Ce,Tt,zt,Yt,An,Me,Le.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(Jt,q,Zt,xe,Ce,Tt,zt,Yt,An,Le.data):F.texSubImage3D(Jt,q,Zt,xe,Ce,Tt,zt,Yt,An,Me,Le):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,q,Zt,xe,Tt,zt,An,Me,Le.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,q,Zt,xe,Le.width,Le.height,An,Le.data):F.texSubImage2D(F.TEXTURE_2D,q,Zt,xe,Tt,zt,An,Me,Le);F.pixelStorei(F.UNPACK_ROW_LENGTH,Li),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ye),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ni),F.pixelStorei(F.UNPACK_SKIP_ROWS,qs),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Fn),q===0&&W.generateMipmaps&&F.generateMipmap(Jt),Nt.unbindTexture()},this.copyTextureToTexture3D=function(R,W,nt=null,st=null,q=0){return R.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),nt=arguments[0]||null,st=arguments[1]||null,R=arguments[2],W=arguments[3],q=arguments[4]||0),mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,nt,st,q)},this.initRenderTarget=function(R){kt.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),Nt.unbindTexture()},this.resetState=function(){T=0,M=0,C=null,Nt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}}class nu{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new te(t),this.near=e,this.far=n}clone(){return new nu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class X_ extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Sh extends _n{constructor(t=null,e=1,n=1,i,o,r,a,c,l=Xn,u=Xn,h,d){super(null,r,a,c,l,u,i,o,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pd extends tn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const co=new ae,Ld=new ae,ca=[],Id=new ps,$_=new ae,tr=new Dt,er=new Ws;class Ai extends Dt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Pd(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,$_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ps),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,co),Id.copy(t.boundingBox).applyMatrix4(co),this.boundingBox.union(Id)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ws),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,co),er.copy(t.boundingSphere).applyMatrix4(co),this.boundingSphere.union(er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),t.ray.intersectsSphere(er)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,co),Ld.multiplyMatrices(n,co),tr.matrixWorld=Ld,tr.raycast(t,ca);for(let r=0,a=ca.length;r<a;r++){const c=ca[r];c.instanceId=o,c.object=this,e.push(c)}ca.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Pd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sh(new Float32Array(i*this.count),i,this.count,pc,bi));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=i*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class iu extends Xs{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const nc=new A,ic=new A,Dd=new ae,nr=new gc,la=new Ws,sl=new A,Nd=new A;class Uf extends Qe{constructor(t=new De,e=new iu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)nc.fromBufferAttribute(e,i-1),ic.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=nc.distanceTo(ic);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(i),la.radius+=o,t.ray.intersectsSphere(la)===!1)return;Dd.copy(i).invert(),nr.copy(t.ray).applyMatrix4(Dd);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let x=f,g=p-1;x<g;x+=l){const m=u.getX(x),_=u.getX(x+1),y=ha(this,t,nr,c,m,_);y&&e.push(y)}if(this.isLineLoop){const x=u.getX(p-1),g=u.getX(f),m=ha(this,t,nr,c,x,g);m&&e.push(m)}}else{const f=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let x=f,g=p-1;x<g;x+=l){const m=ha(this,t,nr,c,x,x+1);m&&e.push(m)}if(this.isLineLoop){const x=ha(this,t,nr,c,p-1,f);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function ha(s,t,e,n,i,o){const r=s.geometry.attributes.position;if(nc.fromBufferAttribute(r,i),ic.fromBufferAttribute(r,o),e.distanceSqToSegment(nc,ic,sl,Nd)>n)return;sl.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(sl);if(!(c<t.near||c>t.far))return{distance:c,point:Nd.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const zd=new A,Ud=new A;class q_ extends Uf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,o=e.count;i<o;i+=2)zd.fromBufferAttribute(e,i),Ud.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+zd.distanceTo(Ud);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Y_ extends Xs{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Fd=new ae,wh=new gc,ua=new Ws,da=new A;class j_ extends Qe{constructor(t=new De,e=new Y_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(i),ua.radius+=o,t.ray.intersectsSphere(ua)===!1)return;Fd.copy(i).invert(),wh.copy(t.ray).applyMatrix4(Fd);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let p=d,x=f;p<x;p++){const g=l.getX(p);da.fromBufferAttribute(h,g),kd(da,g,c,i,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let p=d,x=f;p<x;p++)da.fromBufferAttribute(h,p),kd(da,p,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function kd(s,t,e,n,i,o,r){const a=wh.distanceSqToPoint(s);if(a<e){const c=new A;wh.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Ji extends _n{constructor(t,e,n,i,o,r,a,c,l){super(t,e,n,i,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(o-1);const u=n[i],d=n[i+1]-u,f=(r-u)/d;return(i+f)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const r=this.getPoint(i),a=this.getPoint(o),c=e||(r.isVector2?new Ct:new A);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,i=[],o=[],r=[],a=new A,c=new ae;for(let f=0;f<=t;f++){const p=f/t;i[f]=this.getTangentAt(p,new A)}o[0]=new A,r[0]=new A;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Je(i[f-1].dot(i[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,p))}r[f].crossVectors(i[f],o[f])}if(e===!0){let f=Math.acos(Je(o[0].dot(o[t]),-1,1));f/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let p=1;p<=t;p++)o[p].applyMatrix4(c.makeRotationAxis(i[p],f*p)),r[p].crossVectors(i[p],o[p])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class su extends Pi{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Ct){const n=e,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Z_ extends su{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function ou(){let s=0,t=0,e=0,n=0;function i(o,r,a,c){s=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){i(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,u,h){let d=(r-o)/l-(a-o)/(l+u)+(a-r)/u,f=(a-r)/u-(c-r)/(u+h)+(c-a)/h;d*=u,f*=u,i(r,a,d,f)},calc:function(o){const r=o*o,a=r*o;return s+t*o+e*r+n*a}}}const fa=new A,ol=new ou,rl=new ou,al=new ou;class K_ extends Pi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){const n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%o]:(fa.subVectors(i[0],i[1]).add(i[0]),l=fa);const h=i[a%o],d=i[(a+1)%o];if(this.closed||a+2<o?u=i[(a+2)%o]:(fa.subVectors(i[o-1],i[o-2]).add(i[o-1]),u=fa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),ol.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,p,x,g),rl.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,p,x,g),al.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(ol.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),rl.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),al.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(ol.calc(c),rl.calc(c),al.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Od(s,t,e,n,i){const o=(n-t)*.5,r=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*s+e}function J_(s,t){const e=1-s;return e*e*t}function Q_(s,t){return 2*(1-s)*s*t}function t2(s,t){return s*s*t}function wr(s,t,e,n){return J_(s,t)+Q_(s,e)+t2(s,n)}function e2(s,t){const e=1-s;return e*e*e*t}function n2(s,t){const e=1-s;return 3*e*e*s*t}function i2(s,t){return 3*(1-s)*s*s*t}function s2(s,t){return s*s*s*t}function br(s,t,e,n,i){return e2(s,t)+n2(s,e)+i2(s,n)+s2(s,i)}class Ff extends Pi{constructor(t=new Ct,e=new Ct,n=new Ct,i=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Ct){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(br(t,i.x,o.x,r.x,a.x),br(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class o2 extends Pi{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(br(t,i.x,o.x,r.x,a.x),br(t,i.y,o.y,r.y,a.y),br(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class kf extends Pi{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class r2 extends Pi{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Of extends Pi{constructor(t=new Ct,e=new Ct,n=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ct){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(wr(t,i.x,o.x,r.x),wr(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class a2 extends Pi{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(wr(t,i.x,o.x,r.x),wr(t,i.y,o.y,r.y),wr(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bf extends Pi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){const n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,c=i[r===0?r:r-1],l=i[r],u=i[r>i.length-2?i.length-1:r+1],h=i[r>i.length-3?i.length-1:r+2];return n.set(Od(a,c.x,l.x,u.x,h.x),Od(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Ct().fromArray(i))}return this}}var Bd=Object.freeze({__proto__:null,ArcCurve:Z_,CatmullRomCurve3:K_,CubicBezierCurve:Ff,CubicBezierCurve3:o2,EllipseCurve:su,LineCurve:kf,LineCurve3:r2,QuadraticBezierCurve:Of,QuadraticBezierCurve3:a2,SplineCurve:Bf});class c2 extends Pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bd[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const r=i[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Bd[i.type]().fromJSON(i))}return this}}let sc=class extends c2{constructor(t){super(),this.type="Path",this.currentPoint=new Ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new kf(this.currentPoint.clone(),new Ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new Of(this.currentPoint.clone(),new Ct(t,e),new Ct(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){const a=new Ff(this.currentPoint.clone(),new Ct(t,e),new Ct(n,i),new Ct(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Bf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,i,o,r,a,c),this}absellipse(t,e,n,i,o,r,a,c){const l=new su(t,e,n,i,o,r,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};class ru extends De{constructor(t=[new Ct(0,-.5),new Ct(.5,0),new Ct(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Je(i,0,Math.PI*2);const o=[],r=[],a=[],c=[],l=[],u=1/e,h=new A,d=new Ct,f=new A,p=new A,x=new A;let g=0,m=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(p)}for(let _=0;_<=e;_++){const y=n+_*u*i,v=Math.sin(y),P=Math.cos(y);for(let T=0;T<=t.length-1;T++){h.x=t[T].x*v,h.y=t[T].y,h.z=t[T].x*P,r.push(h.x,h.y,h.z),d.x=_/e,d.y=T/(t.length-1),a.push(d.x,d.y);const M=c[3*T+0]*v,C=c[3*T+1],b=c[3*T+0]*P;l.push(M,C,b)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){const v=y+_*t.length,P=v,T=v+t.length,M=v+t.length+1,C=v+1;o.push(P,T,C),o.push(M,C,T)}this.setIndex(o),this.setAttribute("position",new ue(r,3)),this.setAttribute("uv",new ue(a,2)),this.setAttribute("normal",new ue(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ru(t.points,t.segments,t.phiStart,t.phiLength)}}class au extends ru{constructor(t=1,e=1,n=4,i=8){const o=new sc;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new au(t.radius,t.length,t.capSegments,t.radialSegments)}}class ko extends De{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new A,u=new Ct;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(r[d]/t+1)/2,u.y=(r[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(a,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class xn extends De{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),o=Math.floor(o);const u=[],h=[],d=[],f=[];let p=0;const x=[],g=n/2;let m=0;_(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ue(h,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(f,2));function _(){const v=new A,P=new A;let T=0;const M=(e-t)/n;for(let C=0;C<=o;C++){const b=[],w=C/o,D=w*(e-t)+t;for(let k=0;k<=i;k++){const O=k/i,V=O*c+a,B=Math.sin(V),Y=Math.cos(V);P.x=D*B,P.y=-w*n+g,P.z=D*Y,h.push(P.x,P.y,P.z),v.set(B,M,Y).normalize(),d.push(v.x,v.y,v.z),f.push(O,1-w),b.push(p++)}x.push(b)}for(let C=0;C<i;C++)for(let b=0;b<o;b++){const w=x[b][C],D=x[b+1][C],k=x[b+1][C+1],O=x[b][C+1];(t>0||b!==0)&&(u.push(w,D,O),T+=3),(e>0||b!==o-1)&&(u.push(D,k,O),T+=3)}l.addGroup(m,T,0),m+=T}function y(v){const P=p,T=new Ct,M=new A;let C=0;const b=v===!0?t:e,w=v===!0?1:-1;for(let k=1;k<=i;k++)h.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),p++;const D=p;for(let k=0;k<=i;k++){const V=k/i*c+a,B=Math.cos(V),Y=Math.sin(V);M.x=b*Y,M.y=g*w,M.z=b*B,h.push(M.x,M.y,M.z),d.push(0,w,0),T.x=B*.5+.5,T.y=Y*.5*w+.5,f.push(T.x,T.y),p++}for(let k=0;k<i;k++){const O=P+k,V=D+k;v===!0?u.push(V,V+1,O):u.push(V+1,V,O),C+=3}l.addGroup(m,C,v===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cu extends xn{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new cu(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vf extends sc{constructor(t){super(t),this.uuid=Wo(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new sc().fromJSON(i))}return this}}const l2={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=Hf(s,0,i,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,u,h,d,f;if(n&&(o=p2(s,t,o,e)),s.length>80*e){a=l=s[0],c=u=s[1];for(let p=e;p<i;p+=e)h=s[p],d=s[p+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return Lr(o,r,e,a,c,f,0),r}};function Hf(s,t,e,n,i){let o,r;if(i===E2(s,t,e,n)>0)for(o=t;o<e;o+=n)r=Vd(o,s[o],s[o+1],r);else for(o=e-n;o>=t;o-=n)r=Vd(o,s[o],s[o+1],r);return r&&_c(r,r.next)&&(Dr(r),r=r.next),r}function Vs(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(_c(e,e.next)||Oe(e.prev,e,e.next)===0)){if(Dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Lr(s,t,e,n,i,o,r){if(!s)return;!r&&o&&_2(s,n,i,o);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,o?u2(s,n,i,o):h2(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Dr(s),s=l.next,a=l.next;continue}if(s=l,s===a){r?r===1?(s=d2(Vs(s),t,e),Lr(s,t,e,n,i,o,2)):r===2&&f2(s,t,e,n,i,o):Lr(Vs(s),t,e,n,i,o,1);break}}}function h2(s){const t=s.prev,e=s,n=s.next;if(Oe(t,e,n)>=0)return!1;const i=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,u=i<o?i<r?i:r:o<r?o:r,h=a<c?a<l?a:l:c<l?c:l,d=i>o?i>r?i:r:o>r?o:r,f=a>c?a>l?a:l:c>l?c:l;let p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&_o(i,a,o,c,r,l,p.x,p.y)&&Oe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function u2(s,t,e,n){const i=s.prev,o=s,r=s.next;if(Oe(i,o,r)>=0)return!1;const a=i.x,c=o.x,l=r.x,u=i.y,h=o.y,d=r.y,f=a<c?a<l?a:l:c<l?c:l,p=u<h?u<d?u:d:h<d?h:d,x=a>c?a>l?a:l:c>l?c:l,g=u>h?u>d?u:d:h>d?h:d,m=bh(f,p,t,e,n),_=bh(x,g,t,e,n);let y=s.prevZ,v=s.nextZ;for(;y&&y.z>=m&&v&&v.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==r&&_o(a,u,c,h,l,d,y.x,y.y)&&Oe(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==r&&_o(a,u,c,h,l,d,v.x,v.y)&&Oe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==r&&_o(a,u,c,h,l,d,y.x,y.y)&&Oe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==r&&_o(a,u,c,h,l,d,v.x,v.y)&&Oe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function d2(s,t,e){let n=s;do{const i=n.prev,o=n.next.next;!_c(i,o)&&Gf(i,n,n.next,o)&&Ir(i,o)&&Ir(o,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Dr(n),Dr(n.next),n=s=o),n=n.next}while(n!==s);return Vs(n)}function f2(s,t,e,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&S2(r,a)){let c=Wf(r,a);r=Vs(r,r.next),c=Vs(c,c.next),Lr(r,t,e,n,i,o,0),Lr(c,t,e,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function p2(s,t,e,n){const i=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:s.length,l=Hf(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(y2(l));for(i.sort(m2),o=0;o<i.length;o++)e=g2(i[o],e);return e}function m2(s,t){return s.x-t.x}function g2(s,t){const e=x2(s,t);if(!e)return t;const n=Wf(e,s);return Vs(n,n.next),Vs(e,e.next)}function x2(s,t){let e=t,n=-1/0,i;const o=s.x,r=s.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===o))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let u=1/0,h;e=i;do o>=e.x&&e.x>=c&&o!==e.x&&_o(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(h=Math.abs(r-e.y)/(o-e.x),Ir(e,s)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&v2(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function v2(s,t){return Oe(s.prev,s,t.prev)<0&&Oe(t.next,s,s.next)<0}function _2(s,t,e,n){let i=s;do i.z===0&&(i.z=bh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,M2(i)}function M2(s){let t,e,n,i,o,r,a,c,l=1;do{for(e=s,s=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;e=n}o.nextZ=null,l*=2}while(r>1);return s}function bh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function y2(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function _o(s,t,e,n,i,o,r,a){return(i-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(i-r)*(n-a)}function S2(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!w2(s,t)&&(Ir(s,t)&&Ir(t,s)&&b2(s,t)&&(Oe(s.prev,s,t.prev)||Oe(s,t.prev,t))||_c(s,t)&&Oe(s.prev,s,s.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function _c(s,t){return s.x===t.x&&s.y===t.y}function Gf(s,t,e,n){const i=ma(Oe(s,t,e)),o=ma(Oe(s,t,n)),r=ma(Oe(e,n,s)),a=ma(Oe(e,n,t));return!!(i!==o&&r!==a||i===0&&pa(s,e,t)||o===0&&pa(s,n,t)||r===0&&pa(e,s,n)||a===0&&pa(e,t,n))}function pa(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ma(s){return s>0?1:s<0?-1:0}function w2(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Gf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ir(s,t){return Oe(s.prev,s,s.next)<0?Oe(s,t,s.next)>=0&&Oe(s,s.prev,t)>=0:Oe(s,t,s.prev)<0||Oe(s,s.next,t)<0}function b2(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Wf(s,t){const e=new Eh(s.i,s.x,s.y),n=new Eh(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Vd(s,t,e,n){const i=new Eh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Dr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Eh(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function E2(s,t,e,n){let i=0;for(let o=t,r=e-n;o<e;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}class Er{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return Er.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];Hd(t),Gd(n,t);let r=t.length;e.forEach(Hd);for(let c=0;c<e.length;c++)i.push(r),r+=e[c].length,Gd(n,e[c]);const a=l2.triangulate(n,i);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Hd(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Gd(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class lu extends De{constructor(t=new Vf([new Ct(0,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ue(i,3)),this.setAttribute("normal",new ue(o,3)),this.setAttribute("uv",new ue(r,2));function l(u){const h=i.length/3,d=u.extractPoints(e);let f=d.shape;const p=d.holes;Er.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const _=p[g];Er.isClockWise(_)===!0&&(p[g]=_.reverse())}const x=Er.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const _=p[g];f=f.concat(_)}for(let g=0,m=f.length;g<m;g++){const _=f[g];i.push(_.x,_.y,0),o.push(0,0,1),r.push(_.x,_.y)}for(let g=0,m=x.length;g<m;g++){const _=x[g],y=_[0]+h,v=_[1]+h,P=_[2]+h;n.push(y,v,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return T2(e,t)}static fromJSON(t,e){const n=[];for(let i=0,o=t.shapes.length;i<o;i++){const r=e[t.shapes[i]];n.push(r)}return new lu(n,t.curveSegments)}}function T2(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class Hs extends De{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const u=[],h=new A,d=new A,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){const _=[],y=m/n;let v=0;m===0&&r===0?v=.5/e:m===n&&c===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){const T=P/e;h.x=-t*Math.cos(i+T*o)*Math.sin(r+y*a),h.y=t*Math.cos(r+y*a),h.z=t*Math.sin(i+T*o)*Math.sin(r+y*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(T+v,1-y),_.push(l++)}u.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){const y=u[m][_+1],v=u[m][_],P=u[m+1][_],T=u[m+1][_+1];(m!==0||r>0)&&f.push(y,v,T),(m!==n-1||c<Math.PI)&&f.push(v,P,T)}this.setIndex(f),this.setAttribute("position",new ue(p,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Mc extends De{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],c=[],l=[],u=new A,h=new A,d=new A;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){const x=p/i*o,g=f/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(x),h.y=(t+e*Math.cos(g))*Math.sin(x),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(p/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){const x=(i+1)*f+p-1,g=(i+1)*(f-1)+p-1,m=(i+1)*(f-1)+p,_=(i+1)*f+p;r.push(x,g,_),r.push(g,m,_)}this.setIndex(r),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Qt extends Xs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vf,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xf extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class A2 extends Xf{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const cl=new ae,Wd=new A,Xd=new A;class R2{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xc,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Wd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wd),Xd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xd),e.updateMatrixWorld(),cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class C2 extends R2{constructor(){super(new Lf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class P2 extends Xf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new C2}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class hu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$d(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=$d();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function $d(){return performance.now()}class qd{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Je(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class L2 extends q_{constructor(t=10,e=10,n=4473924,i=8947848){n=new te(n),i=new te(i);const o=e/2,r=t/e,a=t/2,c=[],l=[];for(let d=0,f=0,p=-a;d<=e;d++,p+=r){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const x=d===o?n:i;x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3}const u=new De;u.setAttribute("position",new ue(c,3)),u.setAttribute("color",new ue(l,3));const h=new iu({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}let I2=class extends Gs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$h);const Yd={type:"change"},uu={type:"start"},$f={type:"end"},ga=new gc,jd=new Vi,D2=Math.cos(70*Rm.DEG2RAD),je=new A,Cn=2*Math.PI,Ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ll=1e-6;class N2 extends I2{constructor(t,e=null){super(t,e),this.state=Ae.NONE,this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bo.ROTATE,MIDDLE:bo.DOLLY,RIGHT:bo.PAN},this.touches={ONE:xo.ROTATE,TWO:xo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new $n,this._lastTargetPosition=new A,this._quat=new $n().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qd,this._sphericalDelta=new qd,this._scale=1,this._panOffset=new A,this._rotateStart=new Ct,this._rotateEnd=new Ct,this._rotateDelta=new Ct,this._panStart=new Ct,this._panEnd=new Ct,this._panDelta=new Ct,this._dollyStart=new Ct,this._dollyEnd=new Ct,this._dollyDelta=new Ct,this._dollyDirection=new A,this._mouse=new Ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=U2.bind(this),this._onPointerDown=z2.bind(this),this._onPointerUp=F2.bind(this),this._onContextMenu=W2.bind(this),this._onMouseWheel=B2.bind(this),this._onKeyDown=V2.bind(this),this._onTouchStart=H2.bind(this),this._onTouchMove=G2.bind(this),this._onMouseDown=k2.bind(this),this._onMouseMove=O2.bind(this),this._interceptControlDown=X2.bind(this),this._interceptControlUp=$2.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yd),this.update(),this.state=Ae.NONE}update(t=null){const e=this.object.position;je.copy(e).sub(this.target),je.applyQuaternion(this._quat),this._spherical.setFromVector3(je),this.autoRotate&&this.state===Ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Cn:n>Math.PI&&(n-=Cn),i<-Math.PI?i+=Cn:i>Math.PI&&(i-=Cn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(je.setFromSpherical(this._spherical),je.applyQuaternion(this._quatInverse),e.copy(this.target).add(je),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=je.length();r=this._clampDistance(a*this._scale);const c=a-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){const a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;const l=new A(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=je.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(ga.origin.copy(this.object.position),ga.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ga.direction))<D2?this.object.lookAt(this.target):(jd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ga.intersectPlane(jd,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>ll||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ll||this._lastTargetPosition.distanceToSquared(this.target)>ll?(this.dispatchEvent(Yd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Cn/60*this.autoRotateSpeed*t:Cn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){je.setFromMatrixColumn(e,0),je.multiplyScalar(-t),this._panOffset.add(je)}_panUp(t,e){this.screenSpacePanning===!0?je.setFromMatrixColumn(e,1):(je.setFromMatrixColumn(e,0),je.crossVectors(this.object.up,je)),je.multiplyScalar(t),this._panOffset.add(je)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;je.copy(i).sub(this.target);let o=je.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=i/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,o=Math.sqrt(n*n+i*i);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(i,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,o=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function z2(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function U2(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function F2(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($f),this.state=Ae.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function k2(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case bo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ae.DOLLY;break;case bo.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ae.ROTATE}break;case bo.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ae.PAN}break;default:this.state=Ae.NONE}this.state!==Ae.NONE&&this.dispatchEvent(uu)}function O2(s){switch(this.state){case Ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function B2(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ae.NONE||(s.preventDefault(),this.dispatchEvent(uu),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent($f))}function V2(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function H2(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case xo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ae.TOUCH_ROTATE;break;case xo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ae.TOUCH_PAN;break;default:this.state=Ae.NONE}break;case 2:switch(this.touches.TWO){case xo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ae.TOUCH_DOLLY_PAN;break;case xo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ae.TOUCH_DOLLY_ROTATE;break;default:this.state=Ae.NONE}break;default:this.state=Ae.NONE}this.state!==Ae.NONE&&this.dispatchEvent(uu)}function G2(s){switch(this._trackPointer(s),this.state){case Ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ae.NONE}}function W2(s){this.enabled!==!1&&s.preventDefault()}function X2(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $2(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const q2=9.81;function lo(s,t,e,n){const i=s*Math.PI/180,o=2*Math.PI/t;return{dirX:Math.sin(i),dirZ:Math.cos(i),amp:e,k:o,omega:Math.sqrt(q2*o),phase:n}}const hl=3;class Y2{constructor(){S(this,"waves",[lo(10,7,1,0),lo(40,5,.8,1.3),lo(-30,3.6,.6,2.1),lo(65,2.6,.45,4),lo(-55,2,.32,.7),lo(20,1.6,.22,5.2)]);S(this,"scale",1);let t=0;for(const i of this.waves)t+=i.amp*i.amp;const e=Math.sqrt(t/2),n=hl/100/4/e;for(const i of this.waves)i.amp*=n}setHeightCm(t){this.scale=t/hl}get heightCm(){return this.scale*hl}height(t,e,n){let i=0;for(const o of this.waves)i+=o.amp*Math.sin(o.k*(o.dirX*t+o.dirZ*e)-o.omega*n+o.phase);return i*this.scale}verticalVelocity(t,e,n){let i=0;for(const o of this.waves)i-=o.amp*o.omega*Math.cos(o.k*(o.dirX*t+o.dirZ*e)-o.omega*n+o.phase);return i*this.scale}}const j2=1e3,bn={depth:.3,flowTime:5,airTime:3,spread:.05,sprayAir:0,airWidth:.65,maxVoid:.6};class Th{constructor(t,e){S(this,"n");S(this,"dx");S(this,"originX",0);S(this,"originZ",0);S(this,"ux");S(this,"uz");S(this,"air");S(this,"t1");S(this,"t2");S(this,"t3");this.n=t,this.dx=e;const n=t*t;this.ux=new Float32Array(n),this.uz=new Float32Array(n),this.air=new Float32Array(n),this.t1=new Float32Array(n),this.t2=new Float32Array(n),this.t3=new Float32Array(n)}clear(){this.ux.fill(0),this.uz.fill(0),this.air.fill(0)}shift(t,e){const n=this.n;for(const i of[this.ux,this.uz,this.air]){const o=i.slice();i.fill(0);for(let r=0;r<n;r++){const a=r+e;if(!(a<0||a>=n))for(let c=0;c<n;c++){const l=c+t;l<0||l>=n||(i[r*n+c]=o[a*n+l])}}}this.originX+=t*this.dx,this.originZ+=e*this.dx}addMomentum(t,e,n,i){const o=1/(j2*bn.depth*this.dx*this.dx);this.splat(this.ux,t,e,n*o),this.splat(this.uz,t,e,i*o)}addAir(t,e,n){n<=0||this.addAirSigned(t,e,n)}addAirSigned(t,e,n){if(n===0)return;const i=this.n,o=(t-this.originX)/this.dx,r=(e-this.originZ)/this.dx,a=Math.max(bn.airWidth/this.dx,.7),c=Math.ceil(a*2),l=Math.max(1,Math.floor(o-c)),u=Math.min(i-2,Math.ceil(o+c)),h=Math.max(1,Math.floor(r-c)),d=Math.min(i-2,Math.ceil(r+c));if(l>u||h>d)return;let f=0;for(let x=h;x<=d;x++)for(let g=l;g<=u;g++)f+=Math.exp(-((g-o)**2+(x-r)**2)/(2*a*a));if(f<=0)return;const p=n/(f*this.dx*this.dx);for(let x=h;x<=d;x++)for(let g=l;g<=u;g++)this.air[x*i+g]+=p*Math.exp(-((g-o)**2+(x-r)**2)/(2*a*a))}splat(t,e,n,i){const o=this.n,r=(e-this.originX)/this.dx,a=(n-this.originZ)/this.dx;if(r<1||a<1||r>=o-2||a>=o-2)return;const c=r|0,l=a|0,u=r-c,h=a-l,d=l*o+c;t[d]+=i*(1-u)*(1-h),t[d+1]+=i*u*(1-h),t[d+o]+=i*(1-u)*h,t[d+o+1]+=i*u*h}at(t,e,n){const i=this.n;if(e<0||n<0||e>=i-1||n>=i-1)return 0;const o=e|0,r=n|0,a=e-o,c=n-r,l=r*i+o;return(t[l]*(1-a)+t[l+1]*a)*(1-c)+(t[l+i]*(1-a)+t[l+i+1]*a)*c}sampleRaw(t,e,n){const i=(t-this.originX)/this.dx,o=(e-this.originZ)/this.dx;n.x=this.at(this.ux,i,o),n.z=this.at(this.uz,i,o),n.w=this.at(this.air,i,o)/bn.depth}sample(t,e,n){const i=(t-this.originX)/this.dx,o=(e-this.originZ)/this.dx;n.x=this.at(this.ux,i,o),n.z=this.at(this.uz,i,o),n.w=Math.min(bn.maxVoid,Math.max(0,this.at(this.air,i,o)/bn.depth))}step(t){const e=this.n,{ux:n,uz:i,air:o,t1:r,t2:a,t3:c}=this,l=t/this.dx;for(let f=0;f<e;f++)for(let p=0;p<e;p++){const x=f*e+p,g=p-n[x]*l,m=f-i[x]*l;r[x]=this.at(n,g,m),a[x]=this.at(i,g,m),c[x]=this.at(o,g,m)}const u=bn.spread*t/(this.dx*this.dx),h=Math.exp(-t/bn.flowTime),d=Math.exp(-t/bn.airTime);for(let f=1;f<e-1;f++)for(let p=1;p<e-1;p++){const x=f*e+p;n[x]=(r[x]+u*(r[x-1]+r[x+1]+r[x-e]+r[x+e]-4*r[x]))*h,i[x]=(a[x]+u*(a[x-1]+a[x+1]+a[x-e]+a[x+e]-4*a[x]))*h,o[x]=(c[x]+u*(c[x-1]+c[x+1]+c[x-e]+c[x+e]-4*c[x]))*d}}}const zs=-1.5,zn=1.5,Z2=.05,go=.12,Gn=.05,oc=.04,rc=-.91,ac=-.65,Mo=.073,K2=.012,ks=.63,ir=.06,J2=.04;function Ki(s){if(s<=ir)return ks-.005*(ir-s)/(ir-zs);const t=Math.min(1,(s-ir)/(zn-ir));return ks-(ks-J2)*t**2.3}const Q2=.12;function $o(s,t=fi(s)){return Math.max(.02,mn(s)-t)}const yc=(s,t=fi(s))=>Math.min($o(s,t),Q2);function du(s,t=fi(s)){return Math.min(1,Math.max(0,Ki(s)-.01)/(yc(s,t)/2))}function Sc(s,t=fi(s)){return Ki(s)-du(s,t)*yc(s,t)/2}function cc(s,t,e=fi(s)){const n=$o(s,e),i=yc(s,e),o=t*n;return{x:o>=i?Ki(s):Ki(s)-du(s,e)*i*(1-o/i)**2/2,y:e+o}}function tM(s,t){const e=yc(s),n=t*$o(s);return n>=e?0:du(s)*(1-n/e)}const li=[{z:-.95,r:ks},{z:0,r:ks},{z:.75,r:.5},{z:1.2,r:.27},{z:1.4,r:.1}];function fi(s){return s<Gn?oc:s<.5?0:.12*((s-.5)/(zn-.5))**2}function eM(s){return s<.5?0:.24*(s-.5)/(zn-.5)**2}function mn(s){return s<.4?.2:.2-.07*((s-.4)/(zn-.4))**1.5}function qf(s,t){const e=Math.max(Ki(s),1e-4),n=Math.min(1,Math.abs(t)/e);return mn(s)+.025*(1-n*n)}const Vn=-1.38,Tr=.15,Ro=.57,us=.42,fu=(s,t,e,n)=>{if(s<=e)return t;const i=Math.min(1,(s-e)/(n-e));return t*Math.max(0,1-i**2.2)**.55};function mi(s){return fu(s,.44-.02*Math.max(0,Math.min(1,(s-Vn)/(0-Vn))),0,Ro)}function Zd(s){return fu(s,.3,-.05,.48)}function sr(s){return fu(s,.24,-.1,.3)}function ul(s){if(s<=Tr)return us;const t=Math.min(1,(s-Tr)/(Ro-Tr));return us+(mn(Ro)-us)*Math.sin(t*Math.PI/2)}const xa=1e3,nM=9.81,iM=101325,sM=2340,Ya=8,dl=.2,Yf={diameter:.14,pitch:.235,ear:.5,blades:3,cup:.6};function oM(){return{u:new Float32Array(Ya),cav:0,vent:0,loading:0,sigma:10,tipRatio:1,ventLimit:0}}function Kd(s){return Math.sqrt(Math.max(0,(s-.12)*(1.03-s)))}function rM(s){const t=2*Math.PI*.72,e=.2,n=Math.abs(s);if(n<=e)return t*s;const i=t*e-1.4*(n-e);return Math.sign(s)*Math.max(.55,i)}function aM(s,t,e,n,i,o,r,a,c=0){const l=s.diameter/2,u=s.blades,h=2*Math.PI*e,d=(1-dl)/Ya;let f=0;for(let lt=0;lt<Ya;lt++)f+=Kd(dl+(lt+.5)*d)*d*l;const p=s.ear*Math.PI*l*l/(u*f),x=.017*s.cup,g=.003*s.cup;let m=0,_=0;for(let lt=0;lt<Ya;lt++){const xt=dl+(lt+.5)*d,j=xt*l,L=d*l,N=p*Kd(xt),U=h*j,J=Math.atan(s.pitch/(2*Math.PI*j))+x;let rt=t.u[lt],ct=0,dt=0;for(let it=0;it<4;it++){const St=n+rt,F=Math.atan2(St,Math.max(U,.001)),bt=St*St+U*U,Vt=rM(J-F),Kt=.01+.008*Vt*Vt+g,Nt=.5*xa*bt*N*u*L,oe=Math.cos(F),kt=Math.sin(F);ct=Nt*(Vt*oe-Kt*kt),dt=Nt*(Vt*kt+Kt*oe)*j;const I=u*(1-xt)/(2*xt*Math.max(.05,kt)),E=Math.max(.05,2/Math.PI*Math.acos(Math.min(1,Math.exp(-I)))),Z=Math.max(0,ct)/(4*Math.PI*j*xa*E*L),pt=(-n+Math.sqrt(Math.max(0,n*n+4*Z)))/2;rt=.5*rt+.5*pt}t.u[lt]=Number.isFinite(rt)?rt:0,m+=ct,_+=dt}const y=s.pitch/s.diameter,v=s.ear*Math.PI*l*l*(1.067-.229*y),P=n*n+(.7*Math.PI*e*s.diameter)**2,T=.5*xa*Math.max(P,1),M=Math.max(.02,(iM+xa*nM*Math.max(0,i)-sM)/T),C=Math.max(0,m)/(T*v),b=.5*M**.5,w=Math.max(0,Math.min(1,(C/b-1)/3));t.cav+=(w-t.cav)*Math.min(1,a*20),t.loading=C,t.sigma=M;const k=(i-l)/s.diameter,O=Math.min(2,C/.5),V=.05-.08*s.cup+Math.min(.6,r),B=Math.max(-.2,V+.25*O),Y=Math.max(-.2,V+.25*O*(1-.6*t.vent)+.05);if(t.tipRatio=k,t.ventLimit=B,k<B){const lt=Math.min(1,(B-k)/.15);t.vent+=lt*(1-t.vent)*Math.min(1,a*10)}else if(k>Y){const lt=1.5+8*(k-Y)+Math.max(0,1-O/.7)*4;t.vent=Math.max(0,t.vent-lt*a)}const H=Math.min(1,c);t.vent<H&&(t.vent+=(H-t.vent)*Math.min(1,a*10)),t.vent=Math.max(t.vent,1-o);const K=t.cav,ut=t.vent,yt=(1-.55*K*K)*(1-.75*ut)*o,_t=(1-.3*K*K)*(1-.8*ut)*o;return{thrust:m*yt,torque:_*_t+.002*h*(1-o)}}const Jd=1e3,or={alpha:.11,b0:.7,emitDt:1/30,handTime:2.5,selfAge:2};class jf{constructor(){S(this,"parcels",[]);S(this,"em",new Map);S(this,"t",-1);S(this,"retired",[]);S(this,"seq",0)}clear(){this.parcels.length=0,this.em.clear(),this.retired.length=0,this.t=-1}advance(t){if(this.t<0||t<this.t-.5){this.t>=0&&this.clear(),this.t=t;return}const e=t-this.t;if(e<=0)return;this.t=t;const n=this.parcels;let i=0;for(let o=0;o<n.length;o++){const r=n[o];r.age+=e;const a=or.alpha*r.uc*e,c=r.b+a;if(r.uc*=r.b*r.b/(c*c),r.b=c,r.x+=r.dx*r.uc*.5*e,r.z+=r.dz*r.uc*.5*e,r.age>=or.handTime||r.uc<.02){const l=Jd*r.uc*Math.PI*r.b*r.b*r.len;this.retired.push({seq:++this.seq,x:r.x,z:r.z,ix:r.dx*l,iz:r.dz*l});continue}n[i++]=r}n.length=i,this.retired.length>4e3&&this.retired.splice(0,this.retired.length-4e3)}emit(t,e,n,i,o,r,a){let c=this.em.get(t);c||(c={imp:0,acc:0,x:e.x,y:e.y,z:e.z,dx:0,dz:0,px:e.x,pz:e.z,r:a},this.em.set(t,c));const l=Math.hypot(n,i);if(o>0&&l>1e-6&&(c.imp+=o,c.dx+=n/l*o,c.dz+=i/l*o),c.acc+=r,c.x=e.x,c.y=e.y,c.z=e.z,c.r=a,c.acc<or.emitDt)return;const u=Math.max(.1,Math.hypot(e.x-c.px,e.z-c.pz)),h=Math.hypot(c.dx,c.dz);if(c.imp>0&&h>0){const d=or.b0*a,f=c.imp/(Jd*Math.PI*d*d*u);this.parcels.push({x:(e.x+c.px)/2,y:e.y,z:(e.z+c.pz)/2,dx:c.dx/h,dz:c.dz/h,uc:f,b:d,len:u,age:0,owner:t})}c.imp=c.acc=c.dx=c.dz=0,c.px=e.x,c.pz=e.z}near(t,e,n,i,o){o.length=0;for(const r of this.parcels){if(r.owner===i&&r.age<or.selfAge)continue;const a=n+3*r.b+r.len;Math.abs(r.x-t)<a&&Math.abs(r.z-e)<a&&o.push(r)}return o}static sample(t,e,n,i){for(const o of t){const r=e.x-o.x,a=e.z-o.z,c=r*o.dx+a*o.dz,l=Math.max(o.b,o.len/2);if(Math.abs(c)>3*l)continue;const u=(r-c*o.dx)**2+(a-c*o.dz)**2,h=o.b*o.b;if(u>9*h)continue;const d=e.y-o.y,f=e.y-(2*n-o.y),p=Math.exp(-u/h)*(Math.exp(-(d*d)/h)+Math.exp(-(f*f)/h)),x=o.uc*p*Math.exp(-(c*c)/(2*l*l))*(o.len/(Math.sqrt(2*Math.PI)*l));i.x+=o.dx*x,i.z+=o.dz*x}}}const Co=new jf,_i=9.81,Mn=1e3,cM=1.2,rr=115,Ri=52,lM=new A(0,.2,-.55),ho=new A(140,140,22),Hn=new A(0,.55,-.25),hM=.3,uM=-.2,dM=Ri*(2*Math.PI*3)**2,fM=2*.7*Ri*2*Math.PI*3,Qd=Ri*_i*3.2,pM=.03,Oo=new A(0,.38,-1.52),pu=new A(0,.04,-.1);Oo.clone().add(pu);const mM=new A(0,-.57,-.16),gM=new A(0,-.47,-.12),xM=new A(0,-.44,-.14),vM=.057,va=2.4,_M=1.9,xr=[-.5,0,.5,1,1.5,2,3],lc=1,Hi={peakTorque:37,peakRpm:5400,idleRpm:1300,limitRpm:6600,inertia:.015},vn={planing:.35,friction:.0022,wetSmooth:.008,pressureFetch:.2,pressurePeak:3,stepRise:.035,stepVentSpeed:6,chineCd:1,yawSide:2.5,yawSideStall:.35,yawSideAft:-1,yawSideStallAft:-1,stallDrop:1,sideLift:.4,keelFinSlope:1.8,keelFinStall:.45,keelFinCd0:.008,keelFinVortex:0,sideWalls:!0,wallPlaning:1,windmill:!0,ventSpeed:0,ventSpeedGear:0,plateCn:0,finPlateCn:0,driftStiff:0,driftStiff0:1.45,driftDamp:0,driftDamp0:.9,chineVent:!0,foilVent3d:!0,yawSideNormal:!1,foilVent:!1,foilVentA0:.15,foilVentK:6,wakeSmooth:0,spray:!0,sprayDrop:.003,propAir:.5,propAirFull:.001,jetReach:1.5,plateBack:!1,obliqueFloor:3,obliqueMax:.6,keelFinZ:void 0,heaveDamp:450,airDrag:.62,finDrag:6e-4,finArea:.02,rollDamp:110,pitchDamp:150,yawDamp:30,yawDamp2:0,maxSteer:.42,steerRate:2.2,steerTorque:0,steerFullSpeed:16,yawInertia:140,kickYawArm:0,kickHandArm:0,kickTime:.25,leanUp:void 0,leanSide:.55,planeCop:!1,planeCopK:.17,planeCopPsi:.2,planeCopMix:1,hullComZ:-.7,plateLift:.5,motorHeight:.05},Zf={maxSteer:.5,foilVent:!0,steerTorque:55,yawDamp2:40,plateCn:2,chineCd:.3,obliqueFloor:14,obliqueMax:.15,plateBack:!0,yawSideNormal:!0},MM={...vn},Kf="boatgame.turnPhys",yM={...Zf,yawSide:3,keelFinSlope:1,yawDamp:0,yawDamp2:0};let Sn=!1,Us="v2";function wc(s){Us=s,Sn=s!=="v1";const t=vn.motorHeight;Object.assign(vn,MM,s==="v2"?Zf:s==="drift"?yM:{},{motorHeight:t})}let Ah=null;try{typeof localStorage<"u"&&(Ah=localStorage.getItem(Kf))}catch{}var nf,sf;const SM=!!((sf=(nf=globalThis.process)==null?void 0:nf.env)!=null&&sf.V1);wc(SM||Ah==="v1"?"v1":Ah==="v2"?"v2":"drift");const Pn=7;function Jf(s,t){return(s-(Pn-1)/2)*2*Sc(t)/Pn}function wM(){const s=[],t=(i,o,r)=>{for(let a=0;a<r;a++)s.push([i+(o-i)*a/r,i+(o-i)*(a+1)/r])};t(zs,Gn,6),t(Gn,zn,11);const e=[],n=[];for(const[i,o]of s){const r=(i+o)/2,a=Sc(r),c=fi(r),l=new A(0,-1,eM(r)).normalize();for(let d=0;d<Pn;d++){const f=d===0?-1:d===Pn-1?1:0;e.push({p:new A(Jf(d,r),c,r),n:l,area:(o-i)*2*a/Pn,len:o-i,depthMax:mn(r)-c,side:f,col:d,aft:r<Gn?Gn-r:-1,wall:!1})}const u=c,h=$o(r,u);for(const d of[1,-1])for(const f of[.25,.75]){const p=cc(r,f,u),x=tM(r,f);n.push({p:new A(d*p.x,p.y,r),n:new A(d,-x,0).normalize(),area:(o-i)*(h/2)*Math.hypot(1,x),len:o-i,depthMax:mn(r)-p.y,side:0,col:-1,aft:-1,wall:!0})}}return[...e,...n]}const t0=Array.from({length:Pn},(s,t)=>new A(Jf(t,Gn),0,Gn)),fl=ac-rc,e0=new A(0,oc,(rc+ac)/2);function bM(s){const t=(s-Hi.peakRpm)/3200;return Math.max(16,Hi.peakTorque*(1-.55*t*t))}function n0(s){const t=Math.sin(Math.min(Math.PI/2,s));return 2*Math.PI*t/(4+Math.PI*t)}function _a(s,t,e){if(!vn.foilVent3d)return n0(s);const n=2/Math.max(.001,2*Math.PI/t-1);return Math.min(e,n0(s)/(1+1/(2*n)))}function Ma(s,t,e,n){return e+n*2*_i*Math.max(.005,t)/Math.max(1,s*s)}const ve=new A,yn=new A,ie=new A,EM=new A,gi=new A,Fi=new A,We=new $n,pl=new A(0,1,0),TM=new A(1,0,0),Is=class Is{constructor(t,e=t){S(this,"prevBeta",NaN);S(this,"gearSteerMoment",0);S(this,"comW",new A);S(this,"vel",new A);S(this,"quat",new $n);S(this,"angVel",new A);S(this,"origin",new A);S(this,"riderB",Hn.clone());S(this,"riderW",new A);S(this,"riderVel",new A);S(this,"legForce",new A);S(this,"legLoad",1);S(this,"kickForce",0);S(this,"legLatAvg",0);S(this,"riderTarget",Hn.clone());S(this,"riderTargetVel",new A);S(this,"comB",new A);S(this,"steerAngle",0);S(this,"throttle",0);S(this,"engineOmega",Hi.idleRpm/60*2*Math.PI);S(this,"propThrust",0);S(this,"propImmersion",1);S(this,"tilt",0);S(this,"plateImmersion",0);S(this,"finVent",0);S(this,"keelVent",0);S(this,"propDepth",0);S(this,"plateForce",0);S(this,"prop",{...Yf});S(this,"propState",oM());S(this,"wetPoints",0);S(this,"keelFinImmersion",0);S(this,"keelFinForce",0);S(this,"edgeY",new Float32Array(Pn));S(this,"cellT");S(this,"cellX");S(this,"chineAt",new A);S(this,"edgeK",new Float32Array(Pn));S(this,"hull",wM());S(this,"pressure",new Float32Array(this.hull.length*4));S(this,"spray",new Float32Array(this.hull.length*7));S(this,"sprayDyn",new A);S(this,"wakeMom",new Float32Array((this.hull.length+5)*5));S(this,"fl",{x:0,z:0,w:0});S(this,"jetId",Is.nextId++);S(this,"jetNear",[]);S(this,"stepT",0);S(this,"hullFx",new Float32Array(this.hull.length*Is.FX_STRIDE));S(this,"impact",new Float32Array(this.hull.length));S(this,"wasWet",new Uint8Array(this.hull.length));S(this,"propPos",new A);S(this,"propAxis",new A(0,0,1));S(this,"propJet",0);S(this,"diag",{planing:0,friction:0,lateral:0,heave:0,fin:0,air:0,thrust:0});S(this,"rollDiag",{});S(this,"rollAxis",new A);S(this,"diagLat",!1);S(this,"diagDrag",!1);S(this,"diagYaw",!1);S(this,"rollDiagOn",!1);S(this,"force",new A);S(this,"torque",new A);S(this,"surface");S(this,"motorSurface");S(this,"extForce",new A);S(this,"sprayHit",0);S(this,"extTorque",new A);this.motorSurface=e;const n=this.hull.filter(i=>!i.wall).length;this.cellT=new Float32Array(n/Pn),this.cellX=new Float32Array(n/Pn),this.surface=t,this.updateComB()}roll(t,e,n){this.rollDiagOn&&(yn.subVectors(n,this.comW),this.rollDiag[t]=(this.rollDiag[t]??0)+(this.diagDrag||this.diagLat?(this.diagDrag?-1:1)*e.dot(this.rollAxis):gi.crossVectors(yn,e).dot(this.rollAxis)))}get rpm(){return this.engineOmega*60/(2*Math.PI)}reset(t,e,n,i){this.quat.setFromAxisAngle(pl,n),this.vel.set(0,0,0),this.angVel.set(0,0,0),this.riderB.copy(Hn),this.riderTarget.copy(Hn),this.riderTargetVel.set(0,0,0),this.riderVel.set(0,0,0),this.steerAngle=0,this.throttle=0,this.engineOmega=Hi.idleRpm/60*2*Math.PI,this.propState.cav=this.propState.vent=0,this.finVent=0,this.keelVent=0,this.legLatAvg=this.kickForce=0,this.propState.u.fill(0),this.extForce.set(0,0,0),this.extTorque.set(0,0,0),this.updateComB();const o=this.surface.height(t,e,i);this.origin.set(t,o-.05,e),this.comW.copy(this.comB).applyQuaternion(this.quat).add(this.origin),this.toWorld(Hn,this.riderW)}updateComB(){this.comB.copy(lM).setZ(vn.hullComZ)}shift(t,e){this.comW.x+=t,this.comW.z+=e,this.riderW.x+=t,this.riderW.z+=e,this.origin.x+=t,this.origin.z+=e}forward(t){return t.set(0,0,1).applyQuaternion(this.quat)}velocityAt(t,e){return this.pointVel(t,e)}invInertia(t,e){return We.copy(this.quat).invert(),e.copy(t).applyQuaternion(We),e.set(e.x/ho.x,e.y/vn.yawInertia,e.z/ho.z),e.applyQuaternion(this.quat)}impulseResponse(t,e){const n=yn.subVectors(e,this.comW),i=this.invInertia(gi.crossVectors(n,t),Fi);return 1/rr+gi.crossVectors(i,n).dot(t)}applyImpulse(t,e){this.vel.addScaledVector(t,1/rr);const n=yn.subVectors(e,this.comW);this.angVel.add(this.invInertia(gi.crossVectors(n,t),Fi))}speed(){return this.vel.length()}toWorld(t,e){return e.copy(t).applyQuaternion(this.quat).add(this.origin)}pointVel(t,e){return yn.subVectors(t,this.comW),e.crossVectors(this.angVel,yn).add(this.vel)}sampleFlow(t,e){return t.flowAt?t.flowAt(e.x,e.z,this.fl):this.fl.x=this.fl.z=this.fl.w=0,this.jetNear.length&&jf.sample(this.jetNear,e,t.height(e.x,e.z,this.stepT),this.fl),1-this.fl.w}waterVel(t,e){return this.pointVel(t,e),e.x-=this.fl.x,e.z-=this.fl.z,e}setMom(t,e,n,i,o,r){const a=t*5;this.wakeMom[a]=e,this.wakeMom[a+1]=n,this.wakeMom[a+2]=i,this.wakeMom[a+3]=o,this.wakeMom[a+4]=r}addForce(t,e){this.force.add(t),yn.subVectors(e,this.comW),this.torque.add(gi.crossVectors(yn,t))}step(t,e,n){const i=vn,o=this.surface,r=this.motorSurface;this.stepT=n,Co.advance(n),Co.near(this.comW.x,this.comW.z,2.5,this.jetId,this.jetNear);const a=Math.max(1,this.vel.length()),c=i.steerTorque>0?1:Math.min(1,(i.steerFullSpeed/a)**2);let u=e.steer*i.maxSteer*c-this.steerAngle;if(i.steerTorque>0){const gt=this.gearSteerMoment,et=gt*Math.sign(this.steerAngle)<0?Math.abs(gt)-i.steerTorque:0;et>0&&(Math.sign(u)===Math.sign(this.steerAngle)&&(u=0),this.steerAngle-=Math.sign(this.steerAngle)*i.steerRate*t*Math.min(1,et/i.steerTorque))}this.steerAngle+=Math.sign(u)*Math.min(Math.abs(u),i.steerRate*t),this.throttle+=(e.throttle-this.throttle)*Math.min(1,t*10),this.updateComB(),this.origin.copy(this.comB).applyQuaternion(this.quat).negate().add(this.comW);const h=Fi.set(Hn.x-e.leanX*i.leanSide,Hn.y+Math.abs(e.leanX)*(i.leanUp??uM),Hn.z+e.leanZ*hM),d=1-Math.exp(-t/pM);this.riderTargetVel.copy(h).sub(this.riderTarget).multiplyScalar(d/t),this.riderTarget.lerp(h,d);const f=this.toWorld(this.riderTarget,new A),p=this.pointVel(f,new A).add(ve.copy(this.riderTargetVel).applyQuaternion(this.quat));this.riderW.distanceToSquared(f)>.8*.8&&(this.riderW.copy(f),this.riderVel.copy(p));const x=this.legForce;x.subVectors(f,this.riderW).multiplyScalar(dM),x.addScaledVector(p.sub(this.riderVel),fM),x.y+=Ri*_i;const g=ve.set(0,1,0).applyQuaternion(this.quat),m=x.dot(g);m<-408.096&&x.addScaledVector(g,-408.096-m);const _=x.length();_>Qd&&x.multiplyScalar(Qd/_),this.legLoad=Math.max(0,x.dot(g))/(Ri*_i),this.diagDrag?this.rollAxis.copy(this.vel).normalize():this.diagLat?this.rollAxis.set(this.vel.z,0,-this.vel.x).normalize():this.rollAxis.set(0,this.diagYaw?1:0,this.diagYaw?0:1).applyQuaternion(this.quat);for(const gt in this.rollDiag)this.rollDiag[gt]=0;this.force.set(0,-rr*_i,0),this.torque.set(0,0,0),this.force.add(this.extForce),this.torque.add(this.extTorque),this.addForce(x.clone().negate(),this.riderW);{const gt=ve.set(1,0,0).applyQuaternion(this.quat),et=-x.dot(gt);this.legLatAvg+=(et-this.legLatAvg)*Math.min(1,t/i.kickTime);const wt=et-this.legLatAvg;this.kickForce=wt,this.pointVel(this.riderW,yn);const Pt=this.riderVel.dot(gt)-yn.dot(gt),z=-wt*Pt>0?i.kickYawArm:-i.kickHandArm,ft=gi.set(0,1,0).applyQuaternion(this.quat);this.torque.addScaledVector(ft,-wt*z),this.rollDiagOn&&this.diagYaw&&(this.rollDiag.蹴り=-wt*z)}this.roll("選手",x.clone().negate(),this.riderW),this.roll("船体の重さ",new A(0,-rr*_i,0),this.comW);const y=EM.set(-1,0,0).applyQuaternion(this.quat).clone(),v=this.vel.length(),P=v>.1?this.vel.clone().multiplyScalar(1/v):new A,T=this.diag;T.planing=T.friction=T.lateral=T.heave=T.fin=T.air=0;const M=Math.max(0,Math.min(1,(v-i.stepVentSpeed+2)/4)),C=this.edgeY,b=this.edgeK;for(let gt=0;gt<t0.length;gt++){const et=this.toWorld(t0[gt],gi),wt=o.height(et.x,et.z,n)-et.y;C[gt]=et.y,b[gt]=M*Math.max(0,Math.min(1,wt/.01))}const w=Fi.set(0,1,0).applyQuaternion(this.quat).clone();let D=0;const k=new A,O=new A,V=new A,B=new A,Y=y.clone().negate();this.cellT.fill(0),this.wakeMom.fill(0);const H=this.hull.length;let K=0,ut=0;for(let gt=0;gt<this.hull.length;gt++){const et=this.hull[gt];this.toWorld(et.p,k);const wt=gt*4;this.pressure[wt]=k.x,this.pressure[wt+1]=k.z,this.pressure[wt+2]=0,this.pressure[wt+3]=i.wakeSmooth,this.spray[gt*7+6]=0;let Pt=o.height(k.x,k.z,n);if(et.aft>0&&b[et.col]>0){const Ee=Math.min(Pt,C[et.col]+i.stepRise*et.aft);Pt+=(Ee-Pt)*b[et.col]}const Bt=Pt-k.y,z=gt*Is.FX_STRIDE,ft=this.hullFx;if(ft[z]=k.x,ft[z+1]=k.y,ft[z+2]=k.z,ft[z+9]=Bt,Bt<=0){ft[z+10]=ft[z+11]=0,this.wasWet[gt]=0;continue}D++;const Q=gt/Pn|0;!et.wall&&Bt>this.cellT[Q]&&(this.cellT[Q]=Math.min(Bt,et.depthMax),this.cellX[Q]=et.p.x);const at=Math.min(1,Bt/i.wetSmooth),$=Math.min(Bt,et.depthMax),X=this.sampleFlow(o,k);et.wall?ie.copy(et.n).applyQuaternion(this.quat).multiplyScalar(-Mn*X*_i*et.area*$):ie.set(0,Mn*X*_i*et.area*$,0),this.roll("浮力",ie,k),this.waterVel(k,V),V.y-=o.verticalVelocity(k.x,k.z,n);const vt=V.length();O.copy(et.n).applyQuaternion(this.quat);const Gt=V.dot(O),Wt=this.sprayDyn.set(0,0,0);if(ft[z+3]=V.x,ft[z+4]=V.y,ft[z+5]=V.z,ft[z+6]=O.x,ft[z+7]=O.y,ft[z+8]=O.z,ft[z+10]=Gt,ft[z+11]=at,!this.wasWet[gt]&&Gt>0&&(this.impact[gt]=Math.max(this.impact[gt],Gt)),this.wasWet[gt]=1,Gt>0){ve.copy(V).addScaledVector(O,-Gt);const Ee=ve.length();let Rt=10,ne=0,de=0;if(Ee>.5&&!et.wall){ve.multiplyScalar(1/Ee);const Re=ve.y+(et.aft>0?i.stepRise*b[et.col]:0);Re>.001&&(Rt=Bt/Re);const Be=ve.dot(Y);ne=Math.abs(Be),de=Sc(et.p.z)-Math.sign(Be)*et.p.x}const Ne=et.area/et.len;let ze=et.wall?i.wallPlaning:0;if(!et.wall)for(let Re=0;Re<4;Re++){let Be=Rt;ne>.001&&(Be=Math.min(Be,Math.max(0,de+((Re+.5)/4-.5)*Ne)/ne)),ze+=Math.min(i.pressurePeak,Math.sqrt(i.pressureFetch/Math.max(.005,Be)))/4}if(B.copy(O).multiplyScalar(-i.planing*ze*Mn*X*et.area*vt*Gt*at),T.planing+=B.dot(P),this.roll("滑走揚力",B,k),!et.wall){const Re=B.dot(w);K+=Re,ut+=Re*et.p.x}if(ie.add(B),Wt.add(B),ne>.001&&!et.wall){const Re=Math.asin(Math.min(1,ne)),Be=et.aft>0,ei=Be&&i.yawSideStallAft>0?i.yawSideStallAft:i.yawSideStall,Ac=Be&&i.yawSideAft>=0?i.yawSideAft:i.yawSide,Rc=i.stallDrop?Re<=ei?Re:Math.max(ei*.5,ei-.8*(Re-ei)):ei*Math.tanh(Re/ei),R=B.length(),W=i.yawSideNormal?yn.copy(Y).addScaledVector(O,-Y.dot(O)).normalize():yn.copy(Y).addScaledVector(ve,-Y.dot(ve)).normalize(),nt=Math.sign(ve.dot(Y)),st=i.chineVent?Math.min(1,(1-X)/i.propAirFull):0;B.copy(W).multiplyScalar(-nt*Ac*Rc*R*(1-st)),T.lateral+=B.dot(P),this.roll("横滑りの横力",B,k),ie.add(B),Wt.add(B)}}const qt=-i.heaveDamp*et.area*V.y*at;ie.y+=qt,T.heave+=qt*P.y,this.roll("上下の減衰",new A(0,qt,0),k),ve.copy(V).addScaledVector(O,-Gt);const ge=ve.length();B.copy(ve).multiplyScalar(-.5*Mn*X*i.friction*et.area*ge*at),T.friction+=B.dot(P),this.roll("摩擦",B,k),ie.add(B);let pe=0,Ye=0;if(et.side!==0&&!i.sideWalls){const Ee=et.side>0?Y:y,Rt=V.dot(Ee);if(Rt>0){const ne=Math.min(Bt,et.depthMax);B.copy(Ee).multiplyScalar(-.5*Mn*i.chineCd*et.len*ne*Rt*Rt);const de=this.chineAt.copy(k).addScaledVector(w,ne*.5);T.lateral+=B.dot(P),this.roll("舷側",B,de),this.addForce(B,de),pe+=B.x,Ye+=B.z}}this.pressure[wt+2]=Math.max(0,ie.y);let Xt=0,be=0;if(i.spray&&vt>1){ve.copy(V).addScaledVector(O,-Gt);const Ee=ve.length();if(Ee>.001){ve.multiplyScalar(vt/Ee).add(V);const Rt=ve.x*ve.x+ve.z*ve.z,ne=Rt>.25?(-Wt.x*ve.x-Wt.z*ve.z)/Rt:0;if(ne>0){const de=gt*7;this.spray[de]=k.x,this.spray[de+1]=k.y,this.spray[de+2]=k.z,this.spray[de+3]=ve.x+this.fl.x,this.spray[de+4]=ve.y+o.verticalVelocity(k.x,k.z,n),this.spray[de+5]=ve.z+this.fl.z,this.spray[de+6]=ne,Xt=ne*(ve.x+this.fl.x),be=ne*(ve.z+this.fl.z)}}}this.setMom(gt,k.x,k.z,-ie.x-pe-Xt,-ie.z-Ye-be,0),this.addForce(ie,k)}if(this.wetPoints=D,i.planeCop&&K>1){const gt=Fi.set(0,0,1).applyQuaternion(this.quat),et=this.vel.dot(gt),wt=this.vel.dot(Y),Pt=Math.atan2(Math.abs(wt),Math.max(.5,Math.abs(et))),Bt=Math.sign(wt)*i.planeCopK*Math.tanh(Pt/i.planeCopPsi)*2*ks,z=ut/K;ie.copy(gt).multiplyScalar(K*i.planeCopMix*(Bt-z)),this.torque.add(ie),this.rollDiagOn&&!this.diagDrag&&!this.diagLat&&(this.rollDiag.滑走の横の中心=ie.dot(this.rollAxis))}{const gt=Fi.set(0,0,1).applyQuaternion(this.quat).clone(),et=Math.max(0,this.vel.dot(gt));let wt=0,Pt=0,Bt=0;const z=this.cellT.length;for(let ft=z-1;ft>=0;ft--){const Q=this.cellT[ft],at=Math.PI/2*Mn*Q*Q,$=at-wt;if($<=0||et<1)continue;wt=at;const X=this.hull[ft*Pn];this.toWorld(gi.set(this.cellX[ft],X.p.y+Q*.5,X.p.z),k);const vt=this.sampleFlow(o,k);this.waterVel(k,V);const Gt=V.dot(Y);B.copy(Y).multiplyScalar(-i.sideLift*et*$*Gt*vt),T.lateral+=B.dot(P),this.roll("サイド",B,k),this.addForce(B,k),Pt-=B.x,Bt-=B.z}this.setMom(H+4,this.comW.x,this.comW.z,Pt,Bt,0)}{const gt=i.keelFinZ??e0.z,et=this.toWorld(Fi.copy(e0).setZ(gt),gi).clone();let wt=o.height(et.x,et.z,n);const Pt=b[(Pn-1)/2];if(Pt>0){const Q=Math.min(wt,C[(Pn-1)/2]+i.stepRise*(Gn-gt));wt+=(Q-wt)*Pt}const Bt=w.y,z=et.y-Mo*Bt,ft=Bt>.2?Math.max(0,Math.min(Mo,(wt-z)/Bt)):0;if(this.keelFinImmersion=ft/Mo,this.keelFinForce=0,ft>.002){const Q=et.addScaledVector(w,-(Mo-ft/2)),at=this.sampleFlow(o,Q);this.waterVel(Q,V);const $=Fi.set(0,0,1).applyQuaternion(this.quat).clone(),X=V.dot($),vt=V.dot(Y);if(X>.5){const Gt=Math.atan2(vt,X),Wt=Math.abs(Gt),qt=i.keelFinStall,ge=i.keelFinSlope*qt,pe=Math.sin(Math.min(Wt,1.2)),Ye=Math.cos(Math.min(Wt,1.2));let Xt=i.keelFinVortex>0?Math.sign(Gt)*(i.keelFinSlope*pe*Ye*Ye+i.keelFinVortex*pe*pe*Ye):Math.sign(Gt)*(i.stallDrop?Wt<=qt?i.keelFinSlope*Wt:Math.max(ge*.5,ge-1.2*(Wt-qt)):ge*Math.tanh(i.keelFinSlope*Wt/ge));i.ventSpeedGear>0&&(Xt*=Math.min(1,i.ventSpeedGear**2/Math.max(1e-6,X*X+vt*vt)));const be=ft*fl,Ee=2*ft*ft/be;let Rt=i.keelFinCd0+Xt*Xt/(Math.PI*.8*Ee);if(i.finPlateCn>0){const Re=Math.sin(Wt),Be=i.finPlateCn*Re;Be*Math.cos(Wt)>Math.abs(Xt)&&(Xt=Math.sign(Gt)*Be*Math.cos(Wt)),Rt=Math.max(Rt,i.keelFinCd0+Be*Re)}if(i.foilVent){const Re=Ma(Math.hypot(X,vt),ft*.5*Bt,i.foilVentA0,i.foilVentK),Be=Math.max(0,Math.min(1,(Wt-Re)/.12),Math.min(1,(1-at)/i.propAirFull));this.keelVent+=(Be-this.keelVent)*Math.min(1,t*(Be>this.keelVent?12:1.5));const ei=_a(Wt,i.keelFinSlope,Math.abs(Xt)/Math.max(.1,Math.cos(Wt)));Xt=Xt*(1-this.keelVent)+Math.sign(Gt)*ei*Math.cos(Wt)*this.keelVent,Rt=Rt*(1-this.keelVent)+(i.keelFinCd0+ei*Math.sin(Wt))*this.keelVent}const ne=X*X+vt*vt,de=.5*Mn*at*be*ne,Ne=ve.copy($).multiplyScalar(X).addScaledVector(Y,vt).normalize(),ze=yn.copy(Y).multiplyScalar(X).addScaledVector($,-vt).normalize();B.copy(ze).multiplyScalar(-de*Xt).addScaledVector(Ne,-de*Rt),T.lateral+=B.dot(P),this.roll("中央フィン",B,Q),this.setMom(H+3,Q.x,Q.z,-B.x,-B.z,0),this.addForce(B,Q),this.keelFinForce=B.dot(Y)}else if(i.plateBack&&Math.abs(vt)>.3){const Gt=Math.atan2(Math.abs(vt),X),Wt=Math.sin(Gt),qt=.5*Mn*at*ft*fl*(X*X+vt*vt);let ge=Math.max(1,i.finPlateCn)*Wt;if(i.foilVent){const pe=Ma(Math.hypot(X,vt),ft*.5*Bt,i.foilVentA0,i.foilVentK),Ye=Math.max(0,Math.min(1,(Gt-pe)/.12),Math.min(1,(1-at)/i.propAirFull));this.keelVent+=(Ye-this.keelVent)*Math.min(1,t*(Ye>this.keelVent?12:1.5)),ge=ge*(1-this.keelVent)+_a(Gt,i.keelFinSlope,ge)*this.keelVent}B.copy(Y).multiplyScalar(-Math.sign(vt)*qt*ge).addScaledVector($,-.5*Mn*at*ft*fl*i.keelFinCd0*X*Math.abs(X)),T.lateral+=B.dot(P),this.roll("中央フィン",B,Q),this.setMom(H+3,Q.x,Q.z,-B.x,-B.z,0),this.addForce(B,Q),this.keelFinForce=B.dot(Y)}}}const yt=new $n().setFromAxisAngle(TM,(this.tilt-lc)*Math.PI/180).premultiply(this.quat);We.setFromAxisAngle(pl,this.steerAngle).premultiply(yt);const _t=new A(0,0,1).applyQuaternion(We),lt=new A(1,0,0).applyQuaternion(We),xt=new A(0,1,0).applyQuaternion(We),j=ve.copy(Oo).setY(Oo.y+i.motorHeight),L=this.toWorld(j,new A).add(pu.clone().applyQuaternion(yt)),N=new A().copy(gM).applyQuaternion(We).add(L),U=r.height(N.x,N.z,n)-N.y;if(this.gearSteerMoment=0,U>0){const gt=this.sampleFlow(o,N);this.waterVel(N,V);const et=V.dot(_t),wt=V.dot(lt);if(et>.5){const Pt=Math.atan2(wt,et),Bt=Math.abs(Pt);let z=Math.sign(Pt)*(Bt<=.3?va*Bt:Math.max(.35,va*.3-1.2*(Bt-.3)));const ft=Math.max(0,Math.min(1,(.32-U)/.2)),Q=Ma(Math.hypot(et,wt),U,i.foilVentA0,i.foilVentK),at=Math.min(1,(1-gt)/i.propAirFull),$=i.foilVent?Math.max(Math.max(0,Math.min(1,(Bt-Q)/.12)),this.propState.vent*.3,at):Math.max(ft*Math.max(0,Math.min(1,(Bt-.3)/.25)),this.propState.vent*.3);this.finVent+=($-this.finVent)*Math.min(1,t*($>this.finVent?12:1.5)),i.plateCn>0&&(z=Math.sign(Pt)*Math.max(Math.abs(z),i.plateCn*Math.sin(Bt))),i.foilVent?z=z*(1-this.finVent)+Math.sign(Pt)*_a(Bt,va,Math.abs(z))*this.finVent:z*=1-.6*this.finVent,i.ventSpeed>0&&(z*=Math.min(1,i.ventSpeed**2/Math.max(1e-6,et*et+wt*wt)));const X=.5*Mn*gt*i.finArea*(et*et+wt*wt)*Math.min(1,U/.2);ie.copy(lt).multiplyScalar(-X*z),ie.addScaledVector(_t,-.5*Mn*gt*i.finDrag*et*et),T.fin+=ie.dot(P),this.addForce(ie,N),this.roll("ギアケース",ie,N),this.setMom(H+1,N.x,N.z,-ie.x,-ie.z,0),this.gearSteerMoment=new A().subVectors(N,L).cross(ie).dot(xt)}else if(i.plateBack&&Math.abs(wt)>.3){const Pt=Math.atan2(Math.abs(wt),et),Bt=Math.sin(Pt);let z=Math.max(1,i.plateCn)*Bt;if(i.foilVent){const Q=Ma(Math.hypot(et,wt),U,i.foilVentA0,i.foilVentK),at=Math.max(0,Math.min(1,(Pt-Q)/.12),Math.min(1,(1-gt)/i.propAirFull));this.finVent+=(at-this.finVent)*Math.min(1,t*(at>this.finVent?12:1.5)),z=z*(1-this.finVent)+_a(Pt,va,z)*this.finVent}i.ventSpeed>0&&(z*=Math.min(1,i.ventSpeed**2/Math.max(1e-6,et*et+wt*wt)));const ft=.5*Mn*gt*i.finArea*(et*et+wt*wt)*Math.min(1,U/.2);ie.copy(lt).multiplyScalar(-Math.sign(wt)*ft*z),ie.addScaledVector(_t,-.5*Mn*gt*i.finDrag*et*Math.abs(et)),T.fin+=ie.dot(P),this.addForce(ie,N),this.roll("ギアケース",ie,N),this.setMom(H+1,N.x,N.z,-ie.x,-ie.z,0),this.gearSteerMoment=new A().subVectors(N,L).cross(ie).dot(xt)}}const J=new A().copy(xM).applyQuaternion(We).add(L),rt=r.height(J.x,J.z,n)-J.y;if(this.plateImmersion=Math.max(0,Math.min(1,(rt+.02)/.05)),this.plateImmersion>0){const gt=this.sampleFlow(o,J);this.waterVel(J,V);const et=V.dot(_t);if(et>.5){const wt=V.dot(xt),Pt=Math.atan2(wt,et),Bt=i.plateLift*_M*Math.max(-.35,Math.min(.35,Pt)),z=.5*Mn*gt*vM*(et*et+wt*wt)*this.plateImmersion;ie.copy(xt).multiplyScalar(-z*Bt),ie.addScaledVector(_t,-z*.008),this.plateForce=ie.dot(pl),T.fin+=ie.dot(P),this.addForce(ie,J),this.roll("プレート",ie,J),this.setMom(H+2,J.x,J.z,-ie.x,-ie.z,0)}}else this.plateForce=0;const ct=new A().copy(mM).applyQuaternion(We).add(L),dt=r.height(ct.x,ct.z,n)-ct.y;this.propDepth=dt;const it=this.prop.diameter/2;this.propImmersion=Math.max(0,Math.min(1,(dt+it)/(2*it)));const St=this.engineOmega/(2*Math.PI),F=this.sampleFlow(o,ct);this.waterVel(ct,V);const bt=Math.max(0,V.dot(_t))*.97,Vt=Math.max(i.obliqueFloor,Math.abs(bt)),Kt=(.8*Math.abs(V.dot(xt))+1*Math.abs(V.dot(lt)))/Vt,Nt=aM(this.prop,this.propState,St,bt,dt,this.propImmersion,Math.min(i.obliqueMax,Kt),t,(1-F)/i.propAirFull);this.propPos.copy(ct),this.propAxis.copy(_t);let oe=0;for(const gt of this.propState.u)oe+=gt;this.propJet=oe/this.propState.u.length;const kt=Nt.thrust*F,I=(i.windmill?Nt.torque:Math.max(0,Nt.torque))*F,E=this.rpm,Z=E<Hi.idleRpm?Math.min(.25,(Hi.idleRpm-E)/200*.25):0,pt=E>Hi.limitRpm?0:Math.max(this.throttle,Z),mt=1+8e-4*E,ht=bM(E)*pt-mt;this.engineOmega=Math.max(0,this.engineOmega+(ht-I)/Hi.inertia*t),this.propThrust=kt,T.thrust=_t.dot(P)*kt,this.addForce(ie.copy(_t).multiplyScalar(kt),ct),this.roll("推力",ie,ct);const Ft=i.propAir*Math.max(0,kt)*Math.max(0,this.propJet)/2/(Mn*_i*bn.depth),At=this.propImmersion>0;At&&Co.emit(this.jetId,ct,-_t.x,-_t.z,Math.max(0,kt)*t,t,it),this.setMom(H,ct.x-_t.x*i.jetReach,ct.z-_t.z*i.jetReach,At?0:-ie.x,At?0:-ie.z,Ft+this.propState.vent*Math.PI*it*it*Math.max(1,bt)*this.propImmersion),this.torque.addScaledVector(_t,-I),ie.copy(this.vel).multiplyScalar(-.5*cM*i.airDrag*v),T.air=ie.dot(P),this.force.add(ie),this.riderVel.addScaledVector(x,t/Ri),this.riderVel.y-=_i*t,this.riderW.addScaledVector(this.riderVel,t),this.vel.addScaledVector(this.force,t/rr),this.comW.addScaledVector(this.vel,t),We.copy(this.quat).invert();const Et=gi.copy(this.angVel).applyQuaternion(We),$t=Fi.copy(this.torque).applyQuaternion(We),Mt=i.yawInertia,It=ve.set(ho.x*Et.x,Mt*Et.y,ho.z*Et.z);if($t.sub(yn.crossVectors(Et,It)),$t.x-=i.pitchDamp*Et.x,$t.y-=i.yawDamp*Et.y+i.yawDamp2*Math.abs(Et.y)*Et.y,i.driftStiff>0){const gt=yn.copy(this.vel).setY(0).applyQuaternion(We),et=Math.hypot(gt.x,gt.z),wt=Math.atan2(gt.x,gt.z),Pt=Math.max(0,Math.abs(wt)-i.driftStiff0),Bt=Math.min(1,Math.max(0,(et-2)/2));if($t.y+=Math.sign(wt)*i.driftStiff*Pt*Bt,i.driftDamp>0){let z=isNaN(this.prevBeta)?0:wt-this.prevBeta;z-=2*Math.PI*Math.round(z/(2*Math.PI));const ft=(Math.abs(wt)-i.driftDamp0)/Math.max(.05,i.driftStiff0+.3-i.driftDamp0),Q=ft<=0?0:ft>=1?1:ft*ft*(3-2*ft);$t.y+=i.driftDamp*Q*(z/t)*Bt}this.prevBeta=wt}$t.z-=i.rollDamp*Et.z,Et.x+=$t.x/ho.x*t,Et.y+=$t.y/Mt*t,Et.z+=$t.z/ho.z*t,this.angVel.copy(Et).applyQuaternion(this.quat);const Ot=this.angVel;We.set(Ot.x*t*.5,Ot.y*t*.5,Ot.z*t*.5,0).multiply(this.quat),this.quat.set(this.quat.x+We.x,this.quat.y+We.y,this.quat.z+We.z,this.quat.w+We.w).normalize(),this.origin.copy(this.comB).applyQuaternion(this.quat).negate().add(this.comW),We.copy(this.quat).invert(),this.riderB.copy(this.riderW).sub(this.origin).applyQuaternion(We)}attitude(){const t=new A(0,0,1).applyQuaternion(this.quat),e=new A(-1,0,0).applyQuaternion(this.quat);return{trim:Math.asin(Math.max(-1,Math.min(1,t.y)))*180/Math.PI,heel:Math.asin(Math.max(-1,Math.min(1,-e.y)))*180/Math.PI}}};S(Is,"nextId",1),S(Is,"FX_STRIDE",12);let Nr=Is;const ar=new A;function jn(s,t,e,n,i,o){const r=2*Math.PI*i/4,a=Math.max(o-2*i,0),c=Math.PI/4;ar.copy(t),ar[n]=0,ar.normalize();const l=.5*r/(r+a),u=1-ar.angleTo(s)/c;return Math.sign(ar[e])===1?u*l:a/(r+a)+l+l*(1-u)}class AM extends re{constructor(t=1,e=1,n=1,i=2,o=.1){if(i=i*2+1,o=Math.min(t/2,e/2,n/2,o),super(1,1,1,i,i,i),i===1)return;const r=this.toNonIndexed();this.index=null,this.attributes.position=r.attributes.position,this.attributes.normal=r.attributes.normal,this.attributes.uv=r.attributes.uv;const a=new A,c=new A,l=new A(t,e,n).divideScalar(2).subScalar(o),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,f=u.length/6,p=new A,x=.5/i;for(let g=0,m=0;g<u.length;g+=3,m+=2)switch(a.fromArray(u,g),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),u[g+0]=l.x*Math.sign(a.x)+c.x*o,u[g+1]=l.y*Math.sign(a.y)+c.y*o,u[g+2]=l.z*Math.sign(a.z)+c.z*o,h[g+0]=c.x,h[g+1]=c.y,h[g+2]=c.z,Math.floor(g/f)){case 0:p.set(1,0,0),d[m+0]=jn(p,c,"z","y",o,n),d[m+1]=1-jn(p,c,"y","z",o,e);break;case 1:p.set(-1,0,0),d[m+0]=1-jn(p,c,"z","y",o,n),d[m+1]=1-jn(p,c,"y","z",o,e);break;case 2:p.set(0,1,0),d[m+0]=1-jn(p,c,"x","z",o,t),d[m+1]=jn(p,c,"z","x",o,n);break;case 3:p.set(0,-1,0),d[m+0]=1-jn(p,c,"x","z",o,t),d[m+1]=1-jn(p,c,"z","x",o,n);break;case 4:p.set(0,0,1),d[m+0]=1-jn(p,c,"x","y",o,t),d[m+1]=1-jn(p,c,"y","x",o,e);break;case 5:p.set(0,0,-1),d[m+0]=jn(p,c,"x","y",o,t),d[m+1]=1-jn(p,c,"y","x",o,e);break}}}const we=(s,t,e)=>new A(s,t,e);function ki(s){const t=s[0].length,e=[],n=[];for(const o of s)for(const r of o)e.push(r.x,r.y,r.z);for(let o=0;o<s.length-1;o++)for(let r=0;r<t-1;r++){const a=o*t+r,c=a+t;n.push(a,c,a+1,a+1,c,c+1)}const i=new De;return i.setAttribute("position",new ue(e,3)),i.setIndex(n),i.computeVertexNormals(),i}function ml(s){const t=new A;for(const o of s)t.add(o);t.multiplyScalar(1/s.length);const e=[t.x,t.y,t.z];for(const o of s)e.push(o.x,o.y,o.z);const n=[];for(let o=0;o<s.length;o++)n.push(0,1+o,1+(o+1)%s.length);const i=new De;return i.setAttribute("position",new ue(e,3)),i.setIndex(n),i.computeVertexNormals(),i}function uo(s,t,e){const n=[];for(let i=0;i<=e;i++){const o=i/e;n.push(s+(t-s)*(t>=zn-1e-6?1-(1-o)**1.6:o))}return n}const RM=.13,i0=6;function Bo(s,t,e,n,i){const o=[];for(let r=0;r<=i0;r++){const a=cc(s,t+(e-t)*r/i0,i);o.push(we(n*a.x,a.y,s))}return o}const mu=(s,t)=>Math.min(1,RM/$o(s,t));function vr(s,t=fi(s)){const e=Sc(s,t),n=mu(s,t);return[...Bo(s,n,0,1,t),we(e*.5,t,s),we(0,t,s),we(-e*.5,t,s),...Bo(s,0,n,-1,t)]}function CM(s,t){const e=fi(s),n=mu(s,e);return t>0?Bo(s,1,n,1,e):Bo(s,n,1,-1,e)}function s0(s){const t=fi(s),e=mu(s,t);return[...Bo(s,1,e,1,t).slice(0,-1),...vr(s),...Bo(s,e,1,-1,t).slice(1)]}function PM(){const s=document.createElement("canvas");s.width=s.height=256;const t=s.getContext("2d");t.fillStyle="#f4f4f2",t.fillRect(0,0,256,256),t.fillStyle="#1f5fbf",t.beginPath(),t.moveTo(40,30),t.lineTo(216,30),t.quadraticCurveTo(200,190,128,236),t.quadraticCurveTo(56,190,40,30),t.fill(),t.fillStyle="#d8262b",t.beginPath(),t.moveTo(84,60),t.lineTo(172,60),t.quadraticCurveTo(160,150,128,180),t.quadraticCurveTo(96,150,84,60),t.fill();const e=new Ji(s);return e.colorSpace=Ve,e.anisotropy=4,e}function o0(s){const t=Ki(s),e=[];for(let n=0;n<=16;n++){const i=t-2*t*n/16;e.push(we(i,qf(s,i),s))}return e}function r0(s){const t=s.getAttribute("position"),e=[];for(let n=0;n<t.count;n++)e.push(.5-t.getX(n)/(2*ks),(t.getZ(n)-Tr)/(zn-Tr));return s.setAttribute("uv",new ue(e,2)),s}const LM=-.2;function ys(s,t,e,n){const i=new A().subVectors(t,s),o=new Dt(new au(e,Math.max(.001,i.length()),4,10),n);return o.position.copy(s).add(t).multiplyScalar(.5),o.quaternion.setFromUnitVectors(new A(0,1,0),i.normalize()),o.castShadow=!0,o}function a0(s,t,e){const n=document.createElement("canvas");n.width=n.height=128;const i=n.getContext("2d");i.fillStyle=t,i.fillRect(0,0,128,128),i.fillStyle=e,i.font="bold 100px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(s,64,70);const o=new Ji(n);return o.colorSpace=Ve,o}const bc=["#f4f4f4","#222222","#d8262b","#1f5fbf","#f2c230","#1d9a4a"];function gu(s=3){const t=new He,e=bc[s-1],n=new Qt({color:15856110,roughness:.35,side:Ue}),i=new Qt({color:13208394,roughness:.45,side:Ue}),o=new Qt({map:PM(),roughness:.4,side:Ue}),r=new Qt({color:14165547,roughness:.4,side:Ue}),a=new Qt({color:10134445,roughness:.8,side:Ue}),c=new Qt({color:1781596,roughness:.4,side:Ue}),l=new Qt({color:2302755,roughness:.5,metalness:.2}),u=new Qt({color:13164006,transparent:!0,opacity:.3,roughness:.05,metalness:.1,side:Ue,depthWrite:!1}),h=new Qt({map:a0(String(s),e,s===1||s===5?"#111":"#fff"),roughness:.4}),d=new Qt({color:8948880,roughness:.3,metalness:.8}),f=(N,U)=>{const J=new Dt(N,U);return J.castShadow=!0,J.receiveShadow=!0,t.add(J),J},p=uo(zs,Gn,16),x=uo(Gn,zn,28),g=N=>fi(Math.min(N,Gn-1e-6));f(ki(p.map(N=>vr(N,g(N)))),i),f(ki(x.map(N=>vr(N))),i),f(ki([vr(Gn,oc),vr(Gn,0)]),i);for(const N of[1,-1])f(ki([...p,...x.slice(1)].map(U=>CM(U,N))),n);f(ml([...s0(zs)]),n),f(ml([...s0(zn),...o0(zn).reverse()]),n);const m=new Dt(new re(K2,Mo,ac-rc),new Qt({color:3815994,roughness:.5}));m.position.set(0,oc-Mo/2,(rc+ac)/2),t.add(m);const _=uo(Vn,Ro,48);for(const N of[1,-1]){const U=(bt,Vt)=>f(ki(_.map(Kt=>N>0?bt(Kt):bt(Kt).reverse())),Vt),J=(bt,Vt,Kt)=>{const Nt=[],oe=mn(bt),kt=ul(bt);for(let I=0;I<=4;I++){const E=Kt-(Kt-Vt)*I/4,Z=mi(bt)+(Zd(bt)-mi(bt))*E**1.6;Nt.push(we(N*Z,oe+(kt-oe)*Math.sqrt(E),bt))}return N>0?Nt:Nt.reverse()},rt=bt=>bt>=LM?.18:1;U(bt=>J(bt,0,rt(bt)),n),U(bt=>J(bt,rt(bt),.82),u),U(bt=>J(bt,.82,1),n),U(bt=>[we(N*sr(bt),go,bt),we(N*sr(bt),ul(bt),bt),we(N*Zd(bt),ul(bt),bt)],n),U(bt=>[we(N*sr(bt),mn(bt)+.002,bt),we(N*mi(bt),mn(bt)+.002,bt)].reverse(),n),f(r0(ki(uo(zs,Ro,40).map(bt=>N>0?[we(Ki(bt),mn(bt),bt),we(mi(bt),mn(bt),bt)]:[we(-mi(bt),mn(bt),bt),we(-Ki(bt),mn(bt),bt)]))),o);const ct=-1.2,dt=-.92,it=mn(ct)+.03,St=us-.03,F=new Dt(new $e(dt-ct,St-it),h);F.position.set(N*(mi((ct+dt)/2)+.004),(it+St)/2,(ct+dt)/2),F.rotation.y=N*Math.PI/2,t.add(F)}f(r0(ki(uo(Ro-.02,zn,16).map(o0))),o),f(ml([we(mi(Vn),mn(Vn),Vn),we(mi(Vn),us,Vn),we(-mi(Vn),us,Vn),we(-mi(Vn),mn(Vn),Vn)]),n),f(ki(_.map(N=>[we(sr(N),go,N),we(-sr(N),go,N)])),a);const y=uo(zs,1.3,30);for(const[N,U,J]of[[c,.004,.05],[r,.058,.07]])for(const rt of[1,-1])f(ki(y.map(ct=>{const dt=mn(ct),it=fi(ct),St=$o(ct,it),F=cc(ct,1-U/St,it).x*1.004+.002,bt=cc(ct,1-J/St,it).x*1.004+.002;return rt>0?[we(F,dt-U,ct),we(bt,dt-J,ct)]:[we(-bt,dt-J,ct),we(-F,dt-U,ct)]})),N);const v=new He;v.position.set(0,.56,-.02),v.rotation.x=-.9;const P=new Dt(new Mc(.13,.016,8,24),l);v.add(P);const T=new Dt(new re(.24,.02,.012),l);v.add(T),t.add(v),t.add(ys(we(0,qf(Z2,0)-.02,.06),we(0,.55,-.01),.018,l));const M=new He;M.position.copy(Oo),t.add(M);const C=new Dt(new re(.2,.12,.08),d);C.position.set(0,-.02,0),M.add(C);const b=new Dt(new xn(.018,.018,.26,10),d);b.rotation.z=Math.PI/2,M.add(b);const w=new He;w.position.copy(pu),M.add(w);const D=new Dt(new re(.16,.16,.08),d);D.position.set(0,-.02,.05),w.add(D);const k=new Dt(new AM(.36,.43,.33,4,.07),l);k.position.set(0,.235,-.165),k.castShadow=!0,w.add(k);const O=new Qt({map:a0(String(s),e,s===1||s===5?"#111":"#fff"),roughness:.4});for(const N of[1,-1]){const U=new Dt(new $e(.2,.2),O);U.position.set(N*.182,.25,-.165),U.rotation.y=N*Math.PI/2,w.add(U)}const V=new Dt(new re(.07,.6,.12),l);V.position.set(0,-.27,-.13),w.add(V);const B=new Dt(new re(.22,.01,.26),l);B.position.set(0,-.44,-.14),w.add(B);const Y=ys(we(0,-.57,0),we(0,-.57,-.24),.045,l);w.add(Y);const H=new Dt(new re(.014,.12,.12),l);H.position.set(0,-.66,-.1),w.add(H);const K=new He;K.position.set(0,-.57,-.29);for(let N=0;N<3;N++){const U=new Dt(new re(.06,.12,.008),d);U.position.y=.07;const J=new He;J.rotation.z=N*Math.PI*2/3,U.rotation.y=.5,J.add(U),K.add(J)}w.add(K);const ut=new He;ut.position.set(0,go,-.5),t.add(ut);const yt=new Qt({color:e,roughness:.7}),_t=new Qt({color:2764602,roughness:.8}),lt=new Qt({color:16185078,roughness:.25}),xt=(N,U,J)=>we(N,U-go,J+.5);for(const N of[1,-1])ut.add(ys(xt(N*.12,.17,-.33),xt(N*.12,.16,-.82),.055,_t)),ut.add(ys(xt(N*.12,.19,-.33),xt(N*.11,.5,-.66),.075,_t)),ut.add(ys(xt(N*.19,.9,-.5),xt(N*.22,.72,-.27),.045,yt)),ut.add(ys(xt(N*.22,.72,-.27),xt(N*.11,.6,-.06),.04,yt));ut.add(ys(xt(0,.52,-.68),xt(0,.9,-.5),.16,yt));const j=new Dt(new Hs(.135,20,14),lt);j.position.copy(xt(0,1.08,-.4)),j.castShadow=!0,ut.add(j);const L=new Dt(new Hs(.137,20,10,Math.PI/2-.9,1.8,1.2,.5),new Qt({color:1118481,roughness:.1,metalness:.5}));return L.position.copy(j.position),ut.add(L),{root:t,tilt:M,motor:w,prop:K,rider:ut,wheel:v}}function xu(s,t,e){s.root.position.copy(t.origin),s.root.quaternion.copy(t.quat),s.tilt.rotation.x=(t.tilt-lc)*Math.PI/180,s.tilt.position.y=Oo.y+vn.motorHeight,s.motor.rotation.y=t.steerAngle,s.prop.rotation.z+=t.engineOmega*e*.06;for(const r of s.wheel.children)r.rotation.z=-t.steerAngle*2.5;const n=t.riderB.x-Hn.x,i=t.riderB.y-Hn.y,o=t.riderB.z-Hn.z;s.rider.position.set(n*.6,go+i*.5,-.5+o*.5),s.rider.rotation.set(o*.9,0,-n*.9)}const ja=220,Rh=352,ya=ja/Rh,Qf=new te(6989532),vu=new te(13624306),Or=new A(-.4,.55,.75).normalize(),c0=`
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
`,IM=new A(.95,.38,.32),DM=new te(2382170),l0=.5,tp="boatgame.waterFx";function NM(){try{return localStorage.getItem(tp)!=="0"}catch{return!0}}class _u{constructor(t){S(this,"mesh");S(this,"uniforms");S(this,"reflTarget",new Ci(1,1,{type:qi}));S(this,"refrTarget",new Ci(1,1,{type:qi,depthTexture:new eu(1,1)}));S(this,"mirror",new Dn);S(this,"hidden",[]);S(this,"size",new Ct);S(this,"passes",NM());S(this,"waves");S(this,"wakeTex",null);S(this,"wakeHalf",null);this.waves=t;const e=t.waves.length,n=new $e(ja,ja,Rh,Rh);n.rotateX(-Math.PI/2);const i=new Sh(new Uint16Array(4),2,2,pc,qi);i.needsUpdate=!0,this.uniforms={uTime:{value:0},uA:{value:Array.from({length:e},()=>new Fe)},uB:{value:Array.from({length:e},()=>new Fe)},uSun:{value:Or},uSkyTop:{value:Qf},uSkyHorizon:{value:vu},uFogFar:{value:ja*.48},uWake:{value:i},uWakeOrigin:{value:new Ct(-1e6,-1e6)},uWakeDx:{value:1},uWakeN:{value:2},uRefl:{value:this.reflTarget.texture},uReflMat:{value:new ae},uReflOn:{value:0},uRefr:{value:this.refrTarget.texture},uRefrDepth:{value:this.refrTarget.depthTexture},uRefrOn:{value:0},uRes:{value:new Ct(1,1)},uNear:{value:.1},uFar:{value:1e3},uAbsorb:{value:IM},uScatter:{value:DM}};const o=new ti({uniforms:this.uniforms,defines:{NW:e},vertexShader:`
        uniform float uTime;
        uniform vec4 uA[NW]; // dirX, dirZ, amp, k
        uniform vec4 uB[NW]; // omega, phase
        ${c0}
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
        ${c0}
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
      `});this.mesh=new Dt(n,o),this.mesh.frustumCulled=!1}updateWake(t){var a;const e=t.n;(!this.wakeTex||!this.wakeHalf||this.wakeHalf.length!==e*e*2)&&(this.wakeHalf=new Uint16Array(e*e*2),this.wakeTex=new Sh(this.wakeHalf,e,e,Kh,qi),this.wakeTex.magFilter=Nn,this.wakeTex.minFilter=Nn,this.uniforms.uWake.value=this.wakeTex,this.uniforms.uWakeDx.value=t.dx,this.uniforms.uWakeN.value=e);const n=t.h,i=this.wakeHalf,o=(a=t.layer)==null?void 0:a.air,r=1/bn.depth;for(let c=0;c<e*e;c++)i[2*c]=Qu.toHalfFloat(n[c]),i[2*c+1]=Qu.toHalfFloat(o?Math.min(bn.maxVoid,Math.max(0,o[c]*r)):0);this.wakeTex.needsUpdate=!0,this.uniforms.uWakeOrigin.value.set(t.originX,t.originZ)}hide(...t){this.hidden.push(...t)}renderPasses(t,e,n){const i=this.uniforms;if(!this.passes){i.uReflOn.value=i.uRefrOn.value=0;return}t.getDrawingBufferSize(this.size),i.uRes.value.copy(this.size);const o=Math.max(1,Math.floor(this.size.x*l0)),r=Math.max(1,Math.floor(this.size.y*l0));(this.reflTarget.width!==o||this.reflTarget.height!==r)&&(this.reflTarget.setSize(o,r),this.refrTarget.setSize(o,r));const a=this.hidden.map(h=>h.visible);this.mesh.visible=!1;for(const h of this.hidden)h.visible=!1;const c=t.shadowMap.autoUpdate;t.shadowMap.autoUpdate=!1;const l=t.getRenderTarget();n.updateMatrixWorld(),t.setRenderTarget(this.refrTarget),t.clear(),t.render(e,n),i.uNear.value=n.near,i.uFar.value=n.far,i.uRefrOn.value=1;const u=n.position;if(u.y>.05){const h=this.mirror;h.copy(n,!1),h.position.set(u.x,-u.y,u.z);const d=new A(0,0,-1).applyQuaternion(n.quaternion),f=new A(0,1,0).applyQuaternion(n.quaternion);d.y=-d.y,f.y=-f.y,h.up.copy(f),h.lookAt(h.position.clone().add(d)),h.projectionMatrix.copy(n.projectionMatrix),h.updateMatrixWorld(),h.matrixWorldInverse.copy(h.matrixWorld).invert(),i.uReflMat.value.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse);const p=t.clippingPlanes;t.clippingPlanes=[new Vi(new A(0,1,0),.05)],t.setRenderTarget(this.reflTarget),t.clear();const x=e.userData.sky,g=x==null?void 0:x.position.clone();x==null||x.position.copy(h.position),t.render(e,h),x&&g&&x.position.copy(g),t.clippingPlanes=p,i.uReflOn.value=1}else i.uReflOn.value=0;t.setRenderTarget(l),t.shadowMap.autoUpdate=c,this.mesh.visible=!0,this.hidden.forEach((h,d)=>h.visible=a[d])}update(t,e){this.uniforms.uTime.value=t;const n=this.uniforms.uA.value,i=this.uniforms.uB.value;this.waves.waves.forEach((o,r)=>{n[r].set(o.dirX,o.dirZ,o.amp*this.waves.scale,o.k),i[r].set(o.omega,o.phase,0,0)}),this.mesh.position.set(Math.round(e.x/ya)*ya,0,Math.round(e.z/ya)*ya)}}function Mu(){const s=new ko(1500,48);s.rotateX(-Math.PI/2);const t=new Ei({color:new te(10470612),fog:!0}),e=new Dt(s,t);return e.position.y=-1.6,e}function ep(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),o={},r={},a=s[0].morphTargetsRelative,c=new De;let l=0;for(let u=0;u<s.length;++u){const h=s[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0;const h=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=s[d].attributes.position.count}c.setIndex(h)}for(const u in o){const h=h0(o[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in r){const h=r[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let x=0;x<r[u].length;++x)f.push(r[u][x][d]);const p=h0(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}return c}function h0(s){let t,e,n,i=-1,o=0;for(let l=0;l<s.length;++l){const u=s[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=u.count*e}const r=new t(o),a=new tn(r,e,n);let c=0;for(let l=0;l<s.length;++l){const u=s[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<e;p++){const x=u.getComponent(d,p);a.setComponent(d+h,p,x)}}else r.set(u.array,c);c+=u.count*e}return i!==void 0&&(a.gpuType=i),a}class np{constructor(){S(this,"parts",new Map);S(this,"m",new ae)}add(t,e,n){const i=e.index?e.toNonIndexed():e.clone();n&&i.applyMatrix4(n);for(const r of Object.keys(i.attributes))r!=="position"&&r!=="normal"&&r!=="uv"&&i.deleteAttribute(r);i.attributes.uv||i.setAttribute("uv",new ue(new Float32Array(i.attributes.position.count*2),2)),i.attributes.normal||i.computeVertexNormals();let o=this.parts.get(t);o||this.parts.set(t,o=[]),o.push(i)}box(t,e,n,i,o,r,a){const c=Math.abs(n-e),l=Math.abs(o-i),u=Math.abs(a-r);c<1e-4||l<1e-4||u<1e-4||(this.m.makeTranslation((e+n)/2,(i+o)/2,(r+a)/2),this.add(t,new re(c,l,u),this.m))}boxAt(t,e,n,i,o,r,a,c=0,l=0){const u=new di(l,c,0,"YXZ");this.m.makeRotationFromEuler(u).setPosition(e,n,i),this.add(t,new re(o,r,a),this.m)}bar(t,e,n,i){const o=e.distanceTo(n),r=e.clone().add(n).multiplyScalar(.5),a=new $n().setFromUnitVectors(new A(0,0,1),n.clone().sub(e).normalize());this.m.compose(r,a,new A(1,1,1)),this.add(t,new re(i,i,o),this.m)}build(t,e={}){const n=[];for(const[i,o]of this.parts){const r=ep(o,!1);if(!r)continue;const a=i.userData.uvScale;a&&zM(r,a[0],a[1]),r.computeBoundingSphere();const c=new Dt(r,i);c.castShadow=e.cast??!0,c.receiveShadow=e.receive??!0,e.name&&(c.name=`${e.name}:${i.name}`),c.matrixAutoUpdate=!1,c.updateMatrix(),t.add(c),n.push(c);for(const l of o)l.dispose()}return this.parts.clear(),n}}function zM(s,t,e){const n=s.attributes.position,i=s.attributes.normal,o=s.attributes.uv;for(let r=0;r<n.count;r++){const a=Math.abs(i.getX(r)),c=Math.abs(i.getY(r)),l=Math.abs(i.getZ(r)),u=n.getX(r),h=n.getY(r),d=n.getZ(r);c>=a&&c>=l?o.setXY(r,u/t,d/t):a>=l?o.setXY(r,d/t,h/e):o.setXY(r,u/t,h/e)}o.needsUpdate=!0}function Mi(s,t,e,n=!0){const i=document.createElement("canvas");i.width=s,i.height=t,e(i.getContext("2d"));const o=new Ji(i);return o.colorSpace=Ve,o.anisotropy=4,n&&(o.wrapS=o.wrapT=Qa),o}function yo(s,t,e,n=1024,i=128,o){return Mi(n,i,r=>{r.fillStyle=t,r.fillRect(0,0,n,i),r.fillStyle=e,r.textAlign="center",r.textBaseline="middle";const a=Math.floor(i*(o?.5:.66));r.font=`bold ${a}px sans-serif`,r.fillText(s,n/2,o?i*.36:i*.54,n*.94),o&&(r.font=`${Math.floor(i*.26)}px sans-serif`,r.fillText(o,n/2,i*.78,n*.94))},!1)}function cn(s,t={}){const{uv:e,name:n,...i}=t,o=new Qt({color:s,roughness:.85,...i});return e&&(o.userData.uvScale=e),n&&(o.name=n),o}function UM(){const s=Mi(256,256,c=>{c.fillStyle="#a7774a",c.fillRect(0,0,256,256);for(let l=0;l<8;l++){const u=l*32,h=.88+l*37%7*.03;c.fillStyle=`rgba(${Math.round(167*h)},${Math.round(119*h)},${Math.round(74*h)},1)`,c.fillRect(u+1,0,30,256),c.fillStyle="rgba(60,35,15,0.55)",c.fillRect(u,0,1.5,256),c.fillRect(u,l*97%256,32,1.5)}}),t=Mi(256,256,c=>{c.fillStyle="#d9d6cf",c.fillRect(0,0,256,256),c.fillStyle="rgba(0,0,0,0.12)";for(let l=0;l<=4;l++)c.fillRect(l*64-1,0,2,256),c.fillRect(0,l*64-1,256,2)}),e=Mi(256,256,c=>{c.fillStyle="#b9ada0",c.fillRect(0,0,256,256);for(let l=0;l<8;l++)for(let u=0;u<5;u++){const h=u*64+l%2*32;c.fillStyle=["#c2b4a4","#b3a493","#bcae9d"][(l*3+u)%3],c.fillRect(h+1,l*32+1,62,30),c.fillRect(h-256+1,l*32+1,62,30)}}),n=Mi(128,256,c=>{const l=c.createLinearGradient(0,0,0,256);l.addColorStop(0,"#6f97b8"),l.addColorStop(1,"#3d6585"),c.fillStyle=l,c.fillRect(0,0,128,256),c.fillStyle="rgba(255,255,255,0.08)",c.beginPath(),c.moveTo(20,0),c.lineTo(70,0),c.lineTo(30,256),c.lineTo(0,256),c.fill(),c.fillStyle="#c9ccd0",c.fillRect(0,0,4,256),c.fillRect(63,0,2,256),c.fillRect(0,116,128,4)}),i=Mi(256,192,c=>{c.fillStyle="#e6e4de",c.fillRect(0,0,256,192),c.fillStyle="rgba(0,0,0,0.10)",c.fillRect(0,0,256,2),c.fillRect(0,0,2,192)}),o=Mi(256,256,c=>{c.fillStyle="#efefec",c.fillRect(0,0,256,256),c.fillStyle="#5f7f97",c.fillRect(20,90,216,90),c.fillStyle="rgba(255,255,255,0.18)",c.fillRect(20,90,216,14),c.fillStyle="#d8d8d4",c.fillRect(126,90,4,90)}),r=Mi(256,256,c=>{c.fillStyle="#e9ecef",c.fillRect(0,0,256,256),c.strokeStyle="#3a4a6a",c.lineWidth=6,c.strokeRect(0,0,256,256),c.lineWidth=3,c.beginPath(),c.moveTo(0,0),c.lineTo(256,256),c.moveTo(256,0),c.lineTo(0,256),c.stroke()}),a=Mi(64,64,c=>{c.fillStyle="#c9c6bf",c.fillRect(0,0,64,64),c.fillStyle="rgba(0,0,0,0.08)",c.fillRect(0,0,64,2)});return{wood:cn(16777215,{map:s,uv:[2.4,2.4],roughness:.9,name:"wood"}),tile:cn(16777215,{map:t,uv:[2.4,2.4],roughness:.5,name:"tile"}),paving:cn(16777215,{map:e,uv:[3.2,3.2],name:"paving"}),curtain:cn(16777215,{map:n,uv:[3,6],roughness:.25,metalness:.15,name:"curtain"}),panel:cn(16777215,{map:i,uv:[4,3],name:"panel"}),windows:cn(16777215,{map:o,uv:[4,4],name:"windows"}),lattice:cn(16777215,{map:r,uv:[3,3],side:Ue,name:"lattice"}),step:cn(16777215,{map:a,uv:[1,1],name:"step"}),concrete:cn(12433841,{name:"concrete"}),ceiling:cn(14210768,{name:"ceiling"}),roof:cn(5006936,{roughness:.7,name:"roof"}),navy:cn(1912661,{roughness:.5,metalness:.3,name:"navy"}),steel:cn(12896460,{roughness:.45,name:"steel"}),dark:cn(2764083,{roughness:.6,name:"dark"}),seat:cn(15760666,{roughness:.55,name:"seat"}),glass:new Qt({name:"glass",color:10473702,transparent:!0,opacity:.22,roughness:.05,metalness:.1,depthWrite:!1,side:Ue}),light:new Qt({name:"light",color:16777215,emissive:16773840,emissiveIntensity:1.2,roughness:.4}),station:cn(12041410,{name:"station"}),tower:cn(4610414,{roughness:.3,metalness:.3,name:"tower"})}}let FM=null;function ip(){return FM??(FM=UM())}const hc="水都",kM=`ボートレース${hc}`,Ch=`BOAT RACE ${hc}`,tt=.8,Sa=6,Ut=[tt,tt+Sa,tt+2*Sa,tt+3*Sa,tt+4*Sa],As=.5,ot={fence:-45.6,front2:-50.2,rows2:-51.6,col:-55.5,deckBack:-58,upperS:-62,concBack:-86,buildS:-92,plazaW:-100,c2:-60,c3:-63,c4:-66,cTop:-74,buildC:-125,buildN:-105,frontN:-50},G={stationN:262,plazaS:250,gate:238,gateLine:232,standS:205,seat2S:201,seat2N:118,wingN:112,concN:60,deckN:-20,centralN:-70,northN:-262},Ln={n:11,depth:(ot.rows2-ot.upperS)/11,rise:.42},Xi=[-54.6,-50.6],sp=[{name:"南階段",zBottom:219,zTop:G.seat2S+6},{name:"北階段",zBottom:100,zTop:G.seat2N-6}],Za=35,fo={rows:[-48.6,-49.6,-50.6,-51.6,-52.6],z0:G.wingN+1.5,z1:G.standS-1,pitch:.52,block:24,aisle:1.4},hn={xs:[-65,-79],z0:66,dz:12,n:12,size:.8},Jn={x:ot.col,z0:G.wingN+6,dz:12,n:8,size:.6},_r=.95,op=[{kind:"sell",z:76.5,n:8},{kind:"payout",z:90,n:6},{kind:"sell",z:131,n:8},{kind:"payout",z:145,n:6},{kind:"sell",z:167,n:8},{kind:"sell",z:184,n:8},{kind:"payout",z:199,n:4}],ui={w:.86,d:.7},fe={x:-72,zs:[84,108,132,156,180],len:3.2,w:.9,h:1.05},Ph=[68,96,124,150,176,198],u0=[[-47.4,128],[-80,134],[-56.5,140],[-51.3,22],[-75,G.plazaS-3]];function OM(){const s=new He;s.name="stand";const t=ip(),e=new np,n=Ut[1]-As;e.box(t.wood,ot.deckBack,ot.fence,tt-.3,tt+.03,G.deckN,G.standS),e.box(t.paving,ot.plazaW,ot.fence,tt-.3,tt+.02,G.standS,G.plazaS+12),e.box(t.tile,ot.concBack,ot.deckBack,tt-.3,tt+.02,G.concN,G.standS),e.box(t.glass,ot.fence-.04,ot.fence+.04,tt,tt+1.05,G.deckN,G.plazaS),e.box(t.steel,ot.fence-.05,ot.fence+.05,tt+1.05,tt+1.12,G.deckN,G.plazaS);for(let r=G.deckN;r<=G.plazaS;r+=3)e.box(t.steel,ot.fence-.04,ot.fence+.04,tt,tt+1.05,r-.03,r+.03);e.box(t.glass,ot.deckBack,ot.fence,tt,tt+1.05,G.deckN-.04,G.deckN+.04),e.box(t.steel,ot.deckBack,ot.fence,tt+1.05,tt+1.12,G.deckN-.05,G.deckN+.05),e.box(t.panel,ot.buildS,ot.concBack,tt,n,G.wingN,G.standS),e.box(t.panel,ot.buildS,-82,tt,n,G.standS,G.standS+.4),e.box(t.panel,-62,ot.deckBack,tt,n,G.standS,G.standS+.4),e.box(t.panel,-82,-62,tt+4.2,n,G.standS,G.standS+.4),e.box(t.ceiling,ot.buildS,ot.front2,n,Ut[1],G.wingN,G.seat2S+6);for(let r=0;r<Ln.n;r++){const a=ot.rows2-(r+1)*Ln.depth;e.box(t.step,a,a+Ln.depth,Ut[1],Ut[1]+(r+1)*Ln.rise,G.seat2N,G.seat2S)}e.box(t.glass,ot.front2,ot.front2+.08,Ut[1],Ut[1]+1.05,G.wingN,G.seat2S+6),e.box(t.steel,ot.front2-.02,ot.front2+.1,Ut[1]+1.05,Ut[1]+1.12,G.wingN,G.seat2S+6),e.box(t.panel,ot.front2-.02,ot.front2+.1,n-.6,Ut[1],G.wingN,G.seat2S+6);for(const r of[G.seat2S+6,G.wingN])e.box(t.glass,ot.upperS,Xi[0],Ut[1],Ut[1]+1.05,r-.04,r+.04),e.box(t.steel,ot.upperS,Xi[0],Ut[1]+1.05,Ut[1]+1.12,r-.05,r+.05);e.box(t.panel,ot.buildS,ot.upperS,Ut[1],Ut[2]-As,G.wingN,G.seat2S+6);for(let r=G.seat2N+8;r<G.seat2S;r+=16)e.box(t.dark,ot.upperS+.01,ot.upperS+.05,Ut[1]+Ln.n*Ln.rise,Ut[1]+Ln.n*Ln.rise+2.2,r-1.2,r+1.2);e.box(t.panel,ot.buildS,ot.upperS-.4,Ut[2]-As,Ut[4],G.wingN,G.standS),e.box(t.curtain,ot.upperS-.4,ot.upperS,Ut[2],Ut[4],G.wingN+.3,G.standS-.3);for(const r of[Ut[2],Ut[3]])e.box(t.panel,ot.buildS,ot.upperS+.4,r-As,r+.2,G.wingN,G.standS);e.box(t.curtain,ot.buildS+2,ot.upperS-1,Ut[2],Ut[4]-.4,G.standS,G.standS+.3);for(const r of[Ut[3]])e.box(t.panel,ot.buildS+2,ot.upperS-1,r-As,r+.2,G.standS+.25,G.standS+.45);e.box(t.roof,-84,-60,tt+4.3,tt+4.6,G.standS,G.standS+4),e.box(t.roof,ot.buildS,-53,Ut[4]-.6,Ut[4],G.wingN-1,G.standS+1),e.box(t.panel,-53.4,-53,Ut[4]-1.3,Ut[4]+.3,G.wingN-1,G.standS+1);for(let r=G.wingN+2;r<=G.standS;r+=12)e.box(t.dark,ot.upperS-.2,-53.4,Ut[4]-1.5,Ut[4]-.6,r-.25,r+.25);for(let r=G.wingN+4;r<G.standS;r+=8)e.box(t.dark,-53.6,-53,Ut[4]+.3,Ut[4]+2.2,r-.1,r+.1),e.box(t.light,-53.7,-53.2,Ut[4]+1.4,Ut[4]+2.2,r-.7,r+.7);for(let r=0;r<Jn.n;r++){const a=Jn.z0+r*Jn.dz,c=Jn.size/2;e.box(t.panel,Jn.x-c,Jn.x+c,tt,n,a-c,a+c)}{let r=G.standS;for(const a of[...Ph].sort((c,l)=>l-c))e.box(t.glass,ot.deckBack-.05,ot.deckBack+.05,tt,n,a+2,r),e.box(t.panel,ot.deckBack-.15,ot.deckBack+.15,tt+3.2,n,a-2,a+2),r=a-2;e.box(t.glass,ot.deckBack-.05,ot.deckBack+.05,tt,n,G.concN,r);for(let a=G.concN;a<=G.standS;a+=4)Ph.some(c=>Math.abs(c-a)<2.1)||e.box(t.steel,ot.deckBack-.08,ot.deckBack+.08,tt,n,a-.06,a+.06);e.box(t.steel,ot.deckBack-.08,ot.deckBack+.08,tt+3.1,tt+3.2,G.concN,G.standS)}for(const r of hn.xs)for(let a=0;a<hn.n;a++){const c=hn.z0+a*hn.dz,l=hn.size/2;e.box(t.panel,r-l,r+l,tt,n,c-l,c+l),e.box(t.dark,r-l-.02,r+l+.02,tt,tt+.12,c-l-.02,c+l+.02)}e.box(t.panel,ot.buildC,ot.deckBack-.4,tt,n,G.centralN,G.concN),e.box(t.panel,ot.buildC,ot.concBack,tt,n,G.concN,G.wingN),e.box(t.curtain,ot.deckBack-.4,ot.deckBack,tt,n,G.centralN+.3,G.concN),e.box(t.ceiling,ot.buildC,ot.deckBack,n,Ut[1],G.centralN,G.wingN);const i=[ot.c2,ot.c3,ot.c4];for(let r=0;r<3;r++){const a=Ut[r+1],c=Ut[r+2]-As,l=i[r];e.box(t.panel,ot.buildC,l-.4,a,c,G.centralN,G.wingN),e.box(t.curtain,l-.4,l,a,c,G.centralN+.3,G.wingN-.3),e.box(t.panel,ot.buildC,l+.4,c,Ut[r+2]+.2,G.centralN,G.wingN)}e.box(t.panel,ot.buildC,ot.c2+.4,Ut[1]-.1,Ut[1]+1,G.centralN,G.wingN),e.box(t.roof,ot.buildC,ot.upperS,Ut[4]-.6,Ut[4],G.centralN-1,G.wingN),e.box(t.panel,ot.upperS-.4,ot.upperS,Ut[4]-1.3,Ut[4]+.3,G.centralN-1,G.wingN);for(let r=G.centralN+4;r<G.wingN;r+=8)e.box(t.dark,ot.upperS-.6,ot.upperS,Ut[4]+.3,Ut[4]+2.2,r-.1,r+.1),e.box(t.light,ot.upperS-.7,ot.upperS-.2,Ut[4]+1.4,Ut[4]+2.2,r-.7,r+.7);const o=tt+34;e.box(t.panel,ot.buildC+7,ot.cTop,Ut[4],o,G.centralN+20,G.wingN-20),e.box(t.roof,ot.buildC+6,ot.cTop+1,o,o+.5,G.centralN+19,G.wingN-19);for(let r=G.centralN+24;r<G.wingN-20;r+=10)e.box(t.light,ot.cTop+.1,ot.cTop+.6,o+.5,o+1.3,r-.6,r+.6);e.box(t.windows,ot.buildN,ot.frontN,tt,tt+22,G.northN,G.centralN),e.box(t.roof,ot.buildN-.5,ot.frontN+.5,tt+22,tt+22.6,G.northN-.5,G.centralN+.5),e.box(t.panel,ot.frontN-.6,ot.frontN,tt,tt+4,G.northN+10,G.centralN-10);for(const r of sp){const a=Math.sign(r.zTop-r.zBottom),c=Math.abs(r.zTop-r.zBottom)/Za,l=(Ut[1]-tt)/Za;for(let u=0;u<Za;u++){const h=r.zBottom+a*u*c,d=h+a*c;e.box(t.concrete,Xi[0],Xi[1],Math.max(tt,tt+(u+1)*l-.6),tt+(u+1)*l,Math.min(h,d),Math.max(h,d))}for(const u of Xi){const h=new A(u,tt+1,r.zBottom),d=new A(u,Ut[1]+1,r.zTop);e.bar(t.steel,h,d,.06);for(let f=0;f<=6;f++){const p=f/6,x=r.zBottom+(r.zTop-r.zBottom)*p,g=tt+(Ut[1]-tt)*p;e.box(t.steel,u-.03,u+.03,g,g+1,x-.03,x+.03)}e.add(t.glass,BM(u,r.zBottom,r.zTop))}}for(let r=0;r<11;r++){const a=-61-r*2.6;e.box(t.steel,a-.15,a+.15,tt,tt+1,G.gateLine-.6,G.gateLine+.6),e.box(t.dark,a-.16,a+.16,tt+1,tt+1.06,G.gateLine-.6,G.gateLine+.6)}for(const[r,a]of[[-60,ot.fence],[ot.plazaW,-89.5]]){e.box(t.steel,Math.min(r,a),Math.max(r,a),tt+1,tt+1.08,G.gateLine-.04,G.gateLine+.04);for(let c=Math.min(r,a);c<=Math.max(r,a);c+=1.5)e.box(t.steel,c-.03,c+.03,tt,tt+1,G.gateLine-.03,G.gateLine+.03)}e.box(t.panel,ot.plazaW-.6,ot.plazaW,tt,tt+1.2,G.standS,G.plazaS);{const c=41.285714285714285,l=tt+15-c,u=-75,h=Math.asin(23/c),d=new xn(c,c,16,32,1,!0,Math.PI-h,2*h);d.rotateX(Math.PI/2),e.add(t.lattice,d,new ae().makeTranslation(u,l,G.gate));for(const f of[-8,8]){const p=new Mc(c,.5,6,40,2*h);p.rotateZ(Math.PI/2-h),e.add(t.navy,p,new ae().makeTranslation(u,l,G.gate+f));for(const x of[-23,23])e.box(t.navy,u+x-.5,u+x+.5,tt,l+Math.sqrt(c*c-23*23),G.gate+f-.5,G.gate+f+.5)}}e.box(t.roof,-80,-70,tt+3.6,tt+3.9,G.gate+8,G.stationN);for(let r=G.gate+10;r<G.stationN;r+=6)for(const a of[-79.7,-70.3])e.box(t.steel,a-.1,a+.1,tt,tt+3.6,r-.1,r+.1);e.box(t.station,-140,-55,tt,tt+12,G.stationN,G.stationN+38),e.box(t.station,-320,220,tt+7,tt+8.2,G.stationN+14,G.stationN+20);for(let r=-300;r<=200;r+=30)e.box(t.station,r-.8,r+.8,tt,tt+7,G.stationN+15.5,G.stationN+18.5);e.box(t.tower,-185,-155,tt,tt+86,340,370),e.box(t.dark,-183,-157,tt+86,tt+89,342,368),e.build(s,{name:"stand"}),s.add(VM(t.seat));{const r=new Dt(new $e(72,6.5),new Qt({map:yo(Ch,"#1d2f55","#ffffff",2048,180),emissive:16777215,emissiveIntensity:.25,roughness:.5}));r.material.emissiveMap=r.material.map,r.rotation.y=Math.PI/2,r.position.set(ot.cTop+.06,Ut[4]+6,(G.centralN+G.wingN)/2),r.name="sign:roof",s.add(r);const a=new Dt(new $e(24,2.6),new Qt({map:yo(Ch,"#1d2f55","#ffffff",1024,112),emissive:16777215,emissiveIntensity:.35,roughness:.5}));a.material.emissiveMap=a.material.map,a.position.set(-75,tt+12.6,G.gate+8.6),a.name="sign:gate",s.add(a);const c=a.clone();c.rotation.y=Math.PI,c.position.z=G.gate-8.6,s.add(c);const l=a.clone();l.scale.setScalar(.9),l.position.set(-76,Ut[1]+2.6,G.standS+.06),s.add(l)}return s}function BM(s,t,e){const n=tt,i=Ut[1],o=.95,r=new De,a=[s,n+.05,t,s,i+.05,e,s,i+o,e,s,n+o,t];return r.setAttribute("position",new ue(a,3)),r.setIndex([0,1,2,0,2,3]),r.computeVertexNormals(),r}function rp(){const s=[],t=(e,n,i)=>{let o=e;for(;o<n;){for(let r=0;r<fo.block&&o<n;r++,o+=fo.pitch)i(o);o+=fo.aisle}};for(const e of fo.rows)t(fo.z0,fo.z1,n=>s.push({x:e,y:tt,z:n}));for(let e=0;e<Ln.n;e++){const n=ot.rows2-(e+.62)*Ln.depth,i=Ut[1]+(e+1)*Ln.rise;t(G.seat2N+.6,G.seat2S-.3,o=>s.push({x:n,y:i,z:o}))}return s}function VM(s){const t=[],e=(a,c,l,u,h,d,f=0)=>{const p=new re(a,c,l).toNonIndexed();p.applyMatrix4(new ae().makeRotationZ(f).setPosition(u,h,d)),t.push(p)};e(.42,.06,.44,.02,.43,0),e(.06,.46,.44,-.2,.7,0,-.18),e(.08,.4,.08,-.02,.2,0);const n=zr(t),i=rp(),o=new Ai(n,s,i.length),r=new ae;return i.forEach((a,c)=>{r.makeTranslation(a.x,a.y+.02,a.z),o.setMatrixAt(c,r)}),o.castShadow=!0,o.receiveShadow=!0,o.name="seats",o.computeBoundingSphere(),o}function zr(s){let t=0;for(const r of s)t+=r.attributes.position.count;const e=new Float32Array(t*3),n=new Float32Array(t*3);let i=0;for(const r of s)e.set(r.attributes.position.array,i*3),n.set(r.attributes.normal.array,i*3),i+=r.attributes.position.count;const o=new De;return o.setAttribute("position",new tn(e,3)),o.setAttribute("normal",new tn(n,3)),o}const HM={big:"中継・出走表・オッズ",board:"オッズ・払戻",odds:"オッズ",deck:"中継"};function So(s,t,e,n,i,o){const r=new Ei({map:WM(t,HM[e],o),toneMapped:!1}),a=new Dt(new $e(n,i),r);return a.name=`screen:${s}`,{id:s,name:t,kind:e,mesh:a,size:{w:n,h:i},px:o}}function GM(s,t){const e=s.mesh.material.map;s.mesh.material.map=t,s.mesh.material.needsUpdate=!0,e&&e!==t&&e.userData.placeholder&&e.dispose()}function WM(s,t,e){const n=Math.min(512,e.w),i=Math.max(32,Math.round(n*e.h/e.w)),o=document.createElement("canvas");o.width=n,o.height=i;const r=o.getContext("2d"),a=r.createLinearGradient(0,0,0,i);a.addColorStop(0,"#13304f"),a.addColorStop(1,"#0a1a2c"),r.fillStyle=a,r.fillRect(0,0,n,i),r.strokeStyle="#2f6db5",r.lineWidth=Math.max(2,i*.03),r.strokeRect(0,0,n,i),r.fillStyle="#fff",r.textAlign="center",r.textBaseline="middle",r.font=`bold ${Math.floor(i*.2)}px sans-serif`,r.fillText(kM,n/2,i*.3,n*.9),r.fillStyle="#ffd34d",r.font=`${Math.floor(i*.15)}px sans-serif`,r.fillText(`${s}（${t}）`,n/2,i*.62,n*.92);const c=new Ji(o);return c.colorSpace=Ve,c.userData.placeholder=!0,c}const an=[new A(0,0,150),new A(0,0,-150)],Wn=0,Ht={x0:-45,x1:85,z0:an[1].z-120,z1:an[0].z+70},Bn=.8,XM=G.deckN,d0=3,$M=Ht.z0,yu=-18,Ar=6,Fs=4.5,Zn=7,qM=Ar*Fs+1,Ur=$M+Zn-2.5;function YM(s){return{x:yu+Ar*Fs/2-(s-.5)*Fs,z:Ur+2.3,heading:0}}const jM=[16053492,2236962,14165547,2056127,15909424,1940042],ZM=["#f4f4f4","#222222","#d8262b","#1f5fbf","#f2c230","#1d9a4a"];function KM(s,t,e,n,i){const o=document.createElement("canvas");o.width=n,o.height=i;const r=o.getContext("2d");r.fillStyle=t,r.fillRect(0,0,n,i),r.fillStyle=e,r.font=`bold ${Math.floor(i*.72)}px sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(s,n/2,i*.54,n*.94);const a=new Ji(o);return a.colorSpace=Ve,a.anisotropy=4,a}function JM(s,t,e){const n=document.createElement("canvas");n.width=256,n.height=256;const i=n.getContext("2d");i.fillStyle=t,i.fillRect(0,0,256,256),i.fillStyle=e,i.font="bold 120px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(s,128,80);const o=new Ji(n);return o.colorSpace=Ve,o}function QM(){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d");e.fillStyle="#111",e.fillRect(0,0,512,512),e.translate(512/2,512/2),e.fillStyle="#f2c230";for(let l=0;l<12;l++)e.save(),e.rotate(l/12*Math.PI*2),e.beginPath(),e.moveTo(0,-512*.46),e.lineTo(-512*.035,-512*.38),e.lineTo(512*.035,-512*.38),e.closePath(),e.fill(),e.restore();e.fillStyle="#fff",e.font=`bold ${512*.11}px sans-serif`,e.textAlign="center",e.textBaseline="middle";const n=(l,u)=>[Math.sin((12-l)/12*Math.PI*2)*u,-Math.cos((12-l)/12*Math.PI*2)*u],[i,o]=n(5,512*.27),[r,a]=n(10,512*.27);e.fillText("5",i,o),e.fillText("10",r,a);const c=new Ji(t);return c.colorSpace=Ve,c}class Su{constructor(t){S(this,"group",new He);S(this,"floaters",[]);S(this,"floorTime",{value:0});S(this,"clockHand",null);S(this,"waves");S(this,"screens",[]);this.waves=t;for(const x of an)this.addMark(x.x,x.z);const e=new Qt({color:11117980,roughness:1}),n=new Vf;n.moveTo(-1400,-1400),n.lineTo(1400,-1400),n.lineTo(1400,1400),n.lineTo(-1400,1400),n.lineTo(-1400,-1400);const i=new sc;i.moveTo(Ht.x0,Ht.z0),i.lineTo(Ht.x0,Ht.z1),i.lineTo(Ht.x1,Ht.z1),i.lineTo(Ht.x1,Ht.z0),i.lineTo(Ht.x0,Ht.z0),n.holes.push(i);const o=new lu(n);o.rotateX(Math.PI/2);const r=new Dt(o,new Qt({color:9210498,roughness:1,side:Ue}));r.position.y=Bn,r.receiveShadow=!0,this.group.add(r);const a=Bn+d0,c=[[Ht.x0-.3,(Ht.z0+Ht.z1)/2,.6,Ht.z1-Ht.z0],[Ht.x1+.3,(Ht.z0+Ht.z1)/2,.6,Ht.z1-Ht.z0],[(Ht.x0+Ht.x1)/2,Ht.z0-.3,Ht.x1-Ht.x0,.6],[(Ht.x0+Ht.x1)/2,Ht.z1+.3,Ht.x1-Ht.x0,.6]];for(const[x,g,m,_]of c){const y=new Dt(new re(m,a,_),e);y.position.set(x,Bn-a/2,g),this.group.add(y)}const l=new Qt({color:9081227,roughness:1});l.onBeforeCompile=x=>{x.uniforms.uTime=this.floorTime,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
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
          gl_FragColor.rgb *= 0.8 + 1.1 * causticAt(vFloorW.xz, uTime);`)};const u=new Dt(new $e(Ht.x1-Ht.x0,Ht.z1-Ht.z0),l);u.rotation.x=-Math.PI/2,u.position.set((Ht.x0+Ht.x1)/2,-d0,(Ht.z0+Ht.z1)/2),this.group.add(u);const h=new Qt({color:15263976,roughness:.6}),d=XM-Ht.z0,f=new Dt(new re(.08,.08,d),h);f.position.set(Ht.x0-.5,Bn+1.1,Ht.z0+d/2),this.group.add(f);const p=new Ai(new re(.06,1.1,.06),h,Math.floor(d/3));for(let x=0;x<p.count;x++)p.setMatrixAt(x,new ae().makeTranslation(Ht.x0-.5,Bn+.55,Ht.z0+1.5+x*3));this.group.add(p),this.addStand(),this.addPit(),this.addClock(),this.addDistanceSigns(),this.addBoard(),this.addCity()}addStand(){this.group.add(OM())}addPit(){const t=new He,e=new Qt({color:10131600,roughness:1}),n=0,i=0,o=Ar*Fs,r=new Dt(new re(Zn,.5,o+1),e);r.position.set(n+Zn/2-2.5,.05,i),t.add(r);for(let u=0;u<=Ar;u++){const h=new Dt(new re(4,.35,.5),e);h.position.set(n+Zn-.5,.05,i-o/2+u*Fs),t.add(h)}for(let u=0;u<Ar;u++){const h=u+1,d=jM[h-1],f=new Qt({color:d,roughness:.55}),p=i-o/2+(u+.5)*Fs,x=new He,g=Fs-.6;for(const v of[-1,1]){const P=new Dt(new re(Zn-2,1.6,.25),f);P.position.set(0,1.1,v*g/2),x.add(P)}const m=new Dt(new xn(g/2,g/2,Zn-2,20,1,!0,0,Math.PI),f);m.rotation.set(0,0,Math.PI/2),m.rotation.order="ZYX",m.position.set(0,1.9,0),m.material.side=Ue,x.add(m);const _=h===1||h===5?"#111":"#fff",y=new Dt(new ko(g/2,24,0,Math.PI),new Qt({map:JM(String(h),ZM[h-1],_),roughness:.6}));y.rotation.y=Math.PI/2,y.position.set((Zn-2)/2+.01,1.9,0),x.add(y),x.position.set(n+Zn/2-2,.3,p),t.add(x)}const a=new Dt(new re(Zn+1,.3,o+2),new Qt({color:4020858,roughness:.6}));a.position.set(n+Zn/2-2.5,4.6,i),t.add(a);const c=new Dt(new $e(o,1.4),new Qt({map:KM(`${Ch}　ピット`,"#3d5a7a","#fff",1024,64),roughness:.6}));c.rotation.y=Math.PI/2,c.position.set(n+Zn-1.99,5.3,i),t.add(c);const l=new Dt(new re(.2,1.4,o),new Qt({color:2901344}));l.position.set(n+Zn-2.1,5.3,i),t.add(l);for(const u of t.children)u.castShadow=!0;t.rotation.y=-Math.PI/2,t.position.set(yu,0,Ht.z0),this.group.add(t)}addClock(){const t=new He,e=new Qt({color:1973790,roughness:.7}),n=new Qt({color:5593695,roughness:.6,metalness:.3});for(const u of[-2.6,2.6]){const h=new Dt(new re(.5,6,.5),n);h.position.set(0,3,u),t.add(h)}const i=new Dt(new re(.5,6,6),e);i.position.set(0,8,0),t.add(i);const o=new Dt(new ko(2.5,48),new Qt({map:QM(),roughness:.5}));o.rotation.y=-Math.PI/2,o.position.set(-.26,8,0),t.add(o);const r=new He,a=new Dt(new re(.05,2.2,.18),new Qt({color:16777215,roughness:.4,emissive:2236962}));a.position.y=1,r.add(a);const c=new Dt(new xn(.2,.2,.08,16),new Qt({color:14540253}));c.rotation.z=Math.PI/2,r.add(c),r.position.set(-.32,8,0),t.add(r),this.clockHand=r;const l=new Dt(new re(.4,2,1.5),new Qt({color:14540253,roughness:.4}));l.position.set(0,7.5,4.2),t.add(l),t.position.set(Ht.x1+3,Bn,Wn+6);for(const u of t.children)u.castShadow=!0;this.group.add(t)}addDistanceSigns(){const t=new Qt({color:9080724,roughness:.6,metalness:.3}),e=12,n=3,i=1.5,o=new De;o.setAttribute("position",new ue([-.35,0,0,.35,0,0,0,-.75,0],3)),o.setIndex([0,2,1]),o.computeVertexNormals();const r=new Qt({roughness:.8,side:Ue}),a=Ht.x0-.8,c=Ht.x1+.8,l=Bn+e,u=x=>{const g=(x-a)/(c-a);return l-.3-n*4*g*(1-g)},h=Math.floor((c-a)/i)-1,d=new ae,f=new te(14165547),p=new te(16053492);for(const x of[50,100,150]){const g=Wn-x;for(const y of[a,c]){const v=new Dt(new xn(.12,.16,e,10),t);v.position.set(y,Bn+e/2,g),v.castShadow=!0,this.group.add(v)}const m=[];for(let y=0;y<=40;y++){const v=a+(c-a)*y/40;m.push(new A(v,u(v),g))}this.group.add(new Uf(new De().setFromPoints(m),new iu({color:3355443})));const _=new Ai(o,r,h);for(let y=0;y<h;y++){const v=a+i*(y+1),P=(u(v+.1)-u(v-.1))/.2;d.makeRotationZ(Math.atan(P)).setPosition(v,u(v),g),_.setMatrixAt(y,d),_.setColorAt(y,y%2?p:f)}_.castShadow=!0,this.group.add(_)}}setClock(t){if(!this.clockHand)return;const e=(t%12+12)%12/12;this.clockHand.rotation.x=e*Math.PI*2}addBoard(){const t=Ht.x1+8,e=new Qt({color:2369325,roughness:.7}),n=new Dt(new re(2,28,96),e);n.position.set(t+1,Bn+14,0),n.castShadow=!0,this.group.add(n);const i=new Dt(new re(6,1.2,96),e);i.position.set(t+3,Bn+.6,0),this.group.add(i);const o=So("big","対岸大型映像","big",58,14.5,{w:2048,h:512});o.mesh.rotation.y=-Math.PI/2,o.mesh.position.set(t-.02,Bn+12+7.25,0),this.group.add(o.mesh),this.screens.push(o);for(const[r,a,c]of[["board-s","表示盤（南）",39],["board-n","表示盤（北）",-39]]){const l=So(r,a,"board",16,10,{w:1024,h:640});l.mesh.rotation.y=-Math.PI/2,l.mesh.position.set(t-.02,Bn+12+7.25,c),this.group.add(l.mesh),this.screens.push(l)}}addCity(){const t=[12040637,13222840,10462893,14079698].map(r=>new Qt({color:r,roughness:.9})),e=t.map(()=>[]);let n=12345;const i=()=>(n=n*16807%2147483647)%1e4/1e4,o=new ae;for(let r=0;r<140;r++){const a=i()*Math.PI*2,c=330+i()*700,l=Math.cos(a)*c,u=Math.sin(a)*c,h=12+i()**2*90,d=20+i()*40,f=new re(d,h,20+i()*40);o.makeRotationY(i()*Math.PI).setPosition(l,Bn+h/2,u),f.applyMatrix4(o),!(Math.hypot(l+170,u-355)<60||u>250&&u<330&&l>-350&&l<250)&&e[r%t.length].push(f)}e.forEach((r,a)=>{const c=ep(r,!1);c&&this.group.add(new Dt(c,t[a]))})}addMark(t,e){const n=new He,i=new Qt({color:15895070,roughness:.5}),o=new Qt({color:16119285,roughness:.5}),r=new Dt(new xn(.7,.8,1.8,24),i);r.position.y=.6,n.add(r);const a=new Dt(new xn(.71,.75,.35,24),o);a.position.y=.7,n.add(a);const c=new Dt(new cu(.7,.5,24),i);c.position.y=1.75,n.add(c);for(const l of n.children)l.castShadow=!0;this.group.add(n),this.floaters.push({obj:n,x:t,z:e,draft:.2})}update(t){this.floorTime.value=t;for(const e of this.floaters)e.obj.position.set(e.x,this.waves.height(e.x,e.z,t)-e.draft,e.z)}}const cr=160,f0=5,ty=.035;class wu{constructor(t){S(this,"mesh");S(this,"points",[]);S(this,"lastAdd",-1);S(this,"pos");S(this,"across");S(this,"waves");this.waves=t,this.pos=new Float32Array(cr*2*3),this.across=new Float32Array(cr*2*3);const e=[];for(let o=0;o<cr-1;o++){const r=o*2;e.push(r,r+2,r+1,r+1,r+2,r+3)}const n=new De;n.setAttribute("position",new tn(this.pos,3).setUsage(Sr)),n.setAttribute("aWake",new tn(this.across,3).setUsage(Sr)),n.setIndex(e);const i=new ti({transparent:!0,depthWrite:!1,side:Ue,vertexShader:`
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
      `});this.mesh=new Dt(n,i),this.mesh.frustumCulled=!1}add(t,e,n,i){if(t-this.lastAdd<ty)return;this.lastAdd=t;const o=Math.hypot(n.x,n.z)||1;this.points.unshift({x:e.x,z:e.z,sx:n.x/o,sz:n.z/o,born:t,strength:i}),this.points.length>cr&&this.points.pop()}clear(){this.points=[]}update(t){for(;this.points.length&&t-this.points[this.points.length-1].born>f0;)this.points.pop();const e=this.points.length;for(let i=0;i<cr;i++){const o=i*6;if(e===0){this.across[o+2]=this.across[o+5]=0;continue}const r=this.points[Math.min(i,e-1)],a=Math.min(1,(t-r.born)/f0),c=.45+Math.sqrt(a)*4.5,l=this.waves.height(r.x,r.z,t)+.03;this.pos[o]=r.x+r.sx*c,this.pos[o+1]=l,this.pos[o+2]=r.z+r.sz*c,this.pos[o+3]=r.x-r.sx*c,this.pos[o+4]=l,this.pos[o+5]=r.z-r.sz*c;const u=i<e?r.strength:0;this.across.set([1,a,u,-1,a,u],o)}const n=this.mesh.geometry;n.attributes.position.needsUpdate=!0,n.attributes.aWake.needsUpdate=!0}}const wa=60,p0=70,ey=30,ny=1.5;class ap{constructor(t){S(this,"input",{steer:0,throttle:0,leanX:0,leanZ:0});S(this,"lever",0);S(this,"tiltActive",!1);S(this,"swap",!1);S(this,"tiltDeg",0);S(this,"touches",new Map);S(this,"keys",new Set);S(this,"layer");S(this,"leanPad");S(this,"leanKnob");S(this,"leverTrack");S(this,"steerPad");S(this,"steerKnob");S(this,"tiltAngle",0);S(this,"tiltZero",0);S(this,"tiltSmoothed",0);S(this,"lastMotion",0);this.layer=t,this.leanPad=document.getElementById("lean-pad"),this.leanKnob=this.leanPad.querySelector(".knob"),this.leverTrack=document.getElementById("lever"),this.steerPad=document.getElementById("steer-pad"),this.steerKnob=this.steerPad.querySelector(".knob"),t.addEventListener("pointerdown",e=>this.down(e)),t.addEventListener("pointermove",e=>this.move(e)),t.addEventListener("pointerup",e=>this.up(e)),t.addEventListener("pointercancel",e=>this.up(e)),window.addEventListener("keydown",e=>this.keys.add(e.code)),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),window.addEventListener("devicemotion",e=>this.onMotion(e))}async enableTilt(){const t=window.DeviceMotionEvent;if(t!=null&&t.requestPermission)try{if(await t.requestPermission()!=="granted")return!1}catch{return!1}for(let e=0;e<15;e++){if(performance.now()-this.lastMotion<500)return this.recenter(),!0;await new Promise(n=>setTimeout(n,100))}return!1}recenter(){this.tiltZero=this.tiltAngle,this.tiltSmoothed=0}onMotion(t){var r;const e=t.accelerationIncludingGravity;if(!e||e.x==null||e.y==null)return;const n=(((r=screen.orientation)==null?void 0:r.angle)??window.orientation??0)*Math.PI/180,i=e.x*Math.cos(n)-e.y*Math.sin(n),o=e.x*Math.sin(n)+e.y*Math.cos(n);Math.hypot(i,o)<2||(this.tiltAngle=Math.atan2(-i,o)*180/Math.PI,this.lastMotion=performance.now())}zoneOf(t){const e=window.innerWidth;return t<e*.38?"lever":this.swap?!this.tiltActive&&t<e*.68?"lean":"steer":!this.tiltActive&&t<e*.68?"steer":"lean"}down(t){t.preventDefault();const e=this.zoneOf(t.clientX);for(const n of this.touches.values())if(n.role===e)return;try{this.layer.setPointerCapture(t.pointerId)}catch{}this.touches.set(t.pointerId,{id:t.pointerId,role:e,x0:t.clientX,y0:t.clientY,x:t.clientX,y:t.clientY,lever0:this.lever}),e==="lean"&&this.placePad(this.leanPad,t.clientX,t.clientY),e==="steer"&&this.placePad(this.steerPad,t.clientX,t.clientY),e==="lever"&&this.leverTrack.classList.add("active")}placePad(t,e,n){t.style.left=`${e}px`,t.style.top=`${n}px`,t.classList.add("active")}move(t){const e=this.touches.get(t.pointerId);if(e&&(e.x=t.clientX,e.y=t.clientY,e.role==="lever")){const n=this.leverTrack.getBoundingClientRect().height||200;this.lever=Math.max(0,Math.min(1,e.lever0-(e.y-e.y0)/n))}}up(t){const e=this.touches.get(t.pointerId);e&&(this.touches.delete(t.pointerId),e.role==="lean"&&this.resetPad(this.leanPad,this.leanKnob),e.role==="steer"&&this.resetPad(this.steerPad,this.steerKnob),e.role==="lever"&&this.leverTrack.classList.remove("active"))}resetPad(t,e){t.classList.remove("active"),t.style.left=t.style.top="",e.style.transform=""}update(t){const e=h=>this.keys.has(h),n=Math.exp(-t/.25);let i=this.input.leanX*n,o=this.input.leanZ*n,r=0;for(const h of this.touches.values()){const d=h.x-h.x0,f=h.y-h.y0;h.role==="lean"?(i=Math.max(-1,Math.min(1,d/wa)),o=Math.max(-1,Math.min(1,-f/wa)),this.leanKnob.style.transform=`translate(${i*wa}px, ${-o*wa}px)`):h.role==="steer"&&(r=Math.max(-1,Math.min(1,d/p0)),this.steerKnob.style.transform=`translateX(${r*p0}px)`)}if(this.tiltActive){let h=this.tiltAngle-this.tiltZero;h=(h+540)%360-180,this.tiltDeg=h,h=Math.sign(h)*Math.max(0,Math.abs(h)-ny);const d=Math.max(-1,Math.min(1,h/ey));this.tiltSmoothed+=(d-this.tiltSmoothed)*(1-Math.exp(-t*20)),this.swap?i=this.tiltSmoothed:r=this.tiltSmoothed}const a=(e("ArrowRight")||e("KeyD")?1:0)-(e("ArrowLeft")||e("KeyA")?1:0),c=(e("KeyE")?1:0)-(e("KeyQ")?1:0),l=(e("KeyR")?1:0)-(e("KeyF")?1:0),u=1-Math.exp(-t*8);a&&(r=this.input.steer+(a-this.input.steer)*u),(c||l)&&(i=this.input.leanX+(c-this.input.leanX)*u,o=this.input.leanZ+(l-this.input.leanZ)*u),(e("ArrowUp")||e("KeyW"))&&(this.lever=Math.min(1,this.lever+t*1.5)),(e("ArrowDown")||e("KeyS"))&&(this.lever=Math.max(0,this.lever-t*1.5)),this.input.steer=r,this.input.leanX=i,this.input.leanZ=o,this.input.throttle=this.lever,this.leverTrack.querySelector(".fill").style.height=`${this.lever*100}%`,this.leverTrack.querySelector(".knob").style.bottom=`${this.lever*100}%`}}function cp(s){const t=s.swap,e=document.getElementById("steer-pad"),n=document.getElementById("lean-pad");e.classList.toggle("swap",t),n.classList.toggle("swap",t),e.hidden=t?!1:s.tiltActive,n.hidden=t&&s.tiltActive,document.getElementById("wheel").hidden=t}function lp(s,t){const e=document.getElementById("wheel"),n=t*90;document.getElementById("wheel-rot").setAttribute("transform",`rotate(${n.toFixed(1)} 60 60)`);const i=n*Math.PI/180,o=60+54*Math.sin(i),r=60-54*Math.cos(i);document.getElementById("wheel-fill").setAttribute("d",`M 60 6 A 54 54 0 0 ${n>=0?1:0} ${o.toFixed(2)} ${r.toFixed(2)}`),e.classList.toggle("full",Math.abs(t)>.98);const a=t>.02?"右":t<-.02?"左":"";document.getElementById("wheel-label").textContent=s.tiltActive?`${a} ${Math.abs(s.tiltDeg).toFixed(0)}°`.trim():`${a} ${Math.round(Math.abs(t)*100)}%`.trim()}function hp(s){const t=s.comW,e=s.vel,n=1.2;t.z<Ur+n&&Math.abs(t.x-yu)<qM/2&&(s.shift(0,Ur+n-t.z),e.z=Math.abs(e.z)*.3,e.multiplyScalar(.6)),t.x<Ht.x0+n&&(s.shift(Ht.x0+n-t.x,0),e.x=Math.abs(e.x)*.3,e.multiplyScalar(.6)),t.x>Ht.x1-n&&(s.shift(Ht.x1-n-t.x,0),e.x=-Math.abs(e.x)*.3,e.multiplyScalar(.6)),t.z<Ht.z0+n&&(s.shift(0,Ht.z0+n-t.z),e.z=Math.abs(e.z)*.3,e.multiplyScalar(.6)),t.z>Ht.z1-n&&(s.shift(0,Ht.z1-n-t.z),e.z=-Math.abs(e.z)*.3,e.multiplyScalar(.6))}const Lh="boatgame.prop",Ih="boatgame.tilt";function iy(s){try{Object.assign(s.prop,JSON.parse(localStorage.getItem(Lh)??"{}"));const t=Number(localStorage.getItem(Ih));xr.includes(t)&&(s.tilt=t)}catch{}}const xi=5e3,m0=9.81,ln={Spray:0,Mist:1,Foam:2,Boil:3};class bu{constructor(t){S(this,"points");S(this,"pos",new Float32Array(xi*3));S(this,"vel",new Float32Array(xi*3));S(this,"size",new Float32Array(xi));S(this,"alpha",new Float32Array(xi));S(this,"size0",new Float32Array(xi));S(this,"life",new Float32Array(xi));S(this,"maxLife",new Float32Array(xi));S(this,"kind",new Uint8Array(xi));S(this,"next",0);S(this,"material");S(this,"surface");S(this,"budget",0);S(this,"left",new A);S(this,"tmp",new A);this.surface=t;const e=new De;e.setAttribute("position",new tn(this.pos,3).setUsage(Sr)),e.setAttribute("aSize",new tn(this.size,1).setUsage(Sr)),e.setAttribute("aAlpha",new tn(this.alpha,1).setUsage(Sr)),this.material=new ti({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:400}},vertexShader:`
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
      `}),this.points=new j_(e,this.material),this.points.frustumCulled=!1}resize(t,e,n){this.material.uniforms.uScale.value=t*n/(2*Math.tan(e*Math.PI/360))}clear(){this.alpha.fill(0),this.life.fill(0)}spawn(t,e,n,i,o,r,a,c,l){if(this.budget<=0)return;this.budget--;const u=this.next;this.next=(this.next+1)%xi;const h=u*3;this.pos[h]=e,this.pos[h+1]=n,this.pos[h+2]=i,this.vel[h]=o,this.vel[h+1]=r,this.vel[h+2]=a,this.kind[u]=t,this.size0[u]=c,this.size[u]=c,this.life[u]=l,this.maxLife[u]=l,this.alpha[u]=1}count(t){if(!(t>0))return 0;const e=Math.floor(Math.min(t,this.budget));return e+(e<this.budget&&Math.random()<t-e?1:0)}update(t,e,n){this.emit(t,e,n,600),this.step(t,e)}emit(t,e,n,i){this.budget=i,this.emitHull(t,e,n),this.emitProp(t,e,n)}emitHull(t,e,n){const i=n.hullFx,o=Nr.FX_STRIDE;this.left.set(1,0,0).applyQuaternion(n.quat);const r=this.left.x,a=this.left.z,c=Math.hypot(r,a)||1,l=n.vel;for(let u=0;u<n.hull.length;u++){const h=n.hull[u],d=u*o,f=i[d],p=i[d+1],x=i[d+2],g=n.impact[u];g>0&&(n.impact[u]=0,g>.7&&this.splash(f,x,e,g,h.area,l));const m=i[d+11];if(m<=0)continue;const _=i[d+3],y=i[d+4],v=i[d+5],P=i[d+10],T=i[d+6],M=i[d+7],C=i[d+8],b=_-P*T,w=y-P*M,D=v-P*C,k=Math.hypot(b,w,D),O=Math.max(0,P),V=this.surface.height(f,x,e);if(h.side!==0){const B=r/c*h.side,Y=a/c*h.side,H=Math.max(0,_*B+v*Y);if(k<2.5&&H<.8&&O<.6)continue;const K=1+1.5*(1-m),ut=h.area*m*K*(.35*k+3*H+5*O),yt=.16*k+1.1*H+.6*O,_t=.09*k+.9*H+1.4*O,lt=this.count(ut*t*90),xt=l.x*.04,j=l.z*.04;for(let L=0;L<lt;L++){const N=.7+Math.random()*.6,U=(Math.random()-.5)*.2;this.spawn(ln.Spray,f+B*.04+this.left.z*U,Math.max(p,V)+.02,x+Y*.04-this.left.x*U,B*yt*N+xt+(Math.random()-.5)*.3*yt,_t*(.6+Math.random()*.8),Y*yt*N+j+(Math.random()-.5)*.3*yt,.035+Math.random()*.07,1.5),Math.random()<.2&&this.spawn(ln.Mist,f+B*.1,Math.max(p,V)+.05,x+Y*.1,B*yt*.6,_t*.5,Y*yt*.6,.35+Math.random()*.4,.9+Math.random()*.6)}}else if(O>.8){const B=this.count(h.area*O*O*t*40);for(let Y=0;Y<B;Y++){const H=Math.random()*Math.PI*2,K=O*(.3+Math.random()*.5);this.spawn(ln.Spray,f,Math.max(p,V)+.02,x,Math.cos(H)*K+l.x*.1,O*(.8+Math.random()*.8),Math.sin(H)*K+l.z*.1,.05+Math.random()*.08,1.5)}}}}splash(t,e,n,i,o,r){const a=this.surface.height(t,e,n),c=Math.min(70,Math.round(i*i*o*45));for(let u=0;u<c;u++){const h=Math.random()*Math.PI*2,d=i*(.35+Math.random()*.75);this.spawn(ln.Spray,t+Math.cos(h)*.15,a+.03,e+Math.sin(h)*.15,Math.cos(h)*d+r.x*.15,i*(.5+Math.random()*.8),Math.sin(h)*d+r.z*.15,.05+Math.random()*.1,1.5)}const l=Math.min(8,Math.round(i*o*6));for(let u=0;u<l;u++){const h=Math.random()*Math.PI*2;this.spawn(ln.Mist,t,a+.1,e,Math.cos(h)*i*.4+r.x*.1,i*.35,Math.sin(h)*i*.4+r.z*.1,.5+Math.random()*.5,.8+Math.random()*.5)}for(let u=0;u<4;u++){const h=Math.random()*Math.PI*2;this.spawn(ln.Foam,t+Math.cos(h)*.3,a,e+Math.sin(h)*.3,Math.cos(h)*.4,0,Math.sin(h)*.4,.35+Math.random()*.3,2+Math.random())}}emitProp(t,e,n){const i=n.propState,o=n.engineOmega/(2*Math.PI);if(o<5)return;const r=n.prop.diameter,a=n.propPos,c=n.propAxis,l=n.vel,u=this.surface.height(a.x,a.z,e),h=Math.PI*o*r,d=Math.max(0,Math.min(1,(.9-i.tipRatio)/.9)),f=n.propJet,p=d*d*o*4*(1+2*i.vent)*Math.min(1,n.throttle+.2),x=this.count(p*t);for(let _=0;_<x;_++){const y=h*.12*d*(.6+Math.random()*.7),v=(Math.random()-.5)*h*.08*d;this.spawn(ln.Spray,a.x-c.x*.2,u+.03,a.z-c.z*.2,l.x*.15-c.x*f+c.z*v,y,l.z*.15-c.z*f-c.x*v,.06+Math.random()*.1,2),Math.random()<.15&&this.spawn(ln.Mist,a.x-c.x*.4,u+.2,a.z-c.z*.4,l.x*.1,y*.5,l.z*.1,.5+Math.random()*.5,1+Math.random()*.5)}const g=i.cav*70+i.vent*140,m=this.count(g*t*Math.min(1,o/60));for(let _=0;_<m;_++){const y=.3+Math.random()*.6,v=(Math.random()-.5)*.35,P=a.x-c.x*y+c.z*v,T=a.z-c.z*y-c.x*v;this.spawn(ln.Boil,P,this.surface.height(P,T,e)+.02,T,-c.x*f*.4,0,-c.z*f*.4,.22+Math.random()*.25,.5+Math.random()*.6)}}step(t,e){const{pos:n,vel:i,life:o,maxLife:r,kind:a,alpha:c,size:l,size0:u}=this;for(let d=0;d<xi;d++){if(o[d]<=0)continue;o[d]-=t;const f=d*3,p=1-o[d]/r[d];if(o[d]<=0){c[d]=0;continue}const x=a[d];if(x===ln.Spray||x===ln.Mist){const g=x===ln.Spray?.5:2.5,m=Math.exp(-g*t);if(i[f]*=m,i[f+2]*=m,i[f+1]=i[f+1]*m-(x===ln.Spray?m0:m0*.15)*t,n[f]+=i[f]*t,n[f+1]+=i[f+1]*t,n[f+2]+=i[f+2]*t,x===ln.Spray){if(c[d]=.85*Math.min(1,o[d]/.2),i[f+1]<0){const _=this.surface.height(n[f],n[f+2],e);if(n[f+1]<_){o[d]=0,c[d]=0,Math.random()<.18&&this.spawnFoam(n[f],_,n[f+2]);continue}}}else c[d]=.22*(1-p),l[d]=u[d]*(1+p*1.5)}else{const g=Math.exp(-2*t);i[f]*=g,i[f+2]*=g,n[f]+=i[f]*t,n[f+2]+=i[f+2]*t,n[f+1]=this.surface.height(n[f],n[f+2],e)+.02,l[d]=u[d]*(1+p*(x===ln.Boil?1.2:.8)),c[d]=(x===ln.Boil?.9:.55)*(1-p)**1.3}}const h=this.points.geometry;h.attributes.position.needsUpdate=!0,h.attributes.aSize.needsUpdate=!0,h.attributes.aAlpha.needsUpdate=!0}spawnFoam(t,e,n){this.budget++,this.spawn(ln.Foam,t,e+.02,n,0,0,0,.2+Math.random()*.25,1.5+Math.random()*1.5)}}const up=32,ba=48,Ea=32,Ka=4,g0=.1;function sy(s,t,e,n,i){const o=new Float32Array(ba),r=new Float32Array(Ea);let a=0;for(let l=0;l<ba;l++){let u=0;for(let h=0;h<up;h++)u+=s[a++]*t[h];o[l]=u}for(let l=0;l<ba;l++)o[l]=Math.tanh(o[l]+s[a++]);for(let l=0;l<Ea;l++){let u=0;for(let h=0;h<ba;h++)u+=s[a++]*o[h];r[l]=u}for(let l=0;l<Ea;l++)r[l]=Math.tanh(r[l]+s[a++]);const c=new Array(Ka);for(let l=0;l<Ka;l++){let u=0;for(let h=0;h<Ea;h++)u+=s[a++]*r[h];c[l]=u}for(let l=0;l<Ka;l++){const u=c[l]+s[a++];i&&(i[l]=u),c[l]=Math.tanh(u)}return c}const oy=2.5;function ry(s){let t=0;for(let e=0;e<Ka;e++){const n=Math.abs(s[e])-oy;n>0&&(t+=n*n)}return t}function ay(s){return{steer:s[0],throttle:.5+.5*s[1],leanX:s[2],leanZ:s[3]}}const cy=26,Ta=24,gl=9,ly=["逃げ","差し","まくり","まくり差し"];function hy(s){const t=[s.mark,s.turn/6,s.lat/30,s.speed/25,s.toMark/60,s.rank/5],e=[...s.rivals].sort((n,i)=>n.dLat-i.dLat).slice(0,5);for(let n=0;n<5;n++){const i=e[n];i?t.push(i.ahead/25,i.dLat/20,i.dSpeed/10,1):t.push(0,0,0,0)}return t}function uy(s,t){let e=0;const n=new Array(Ta);for(let o=0;o<Ta;o++){let r=0;for(let a=0;a<cy;a++)r+=s[e++]*t[a];n[o]=r}for(let o=0;o<Ta;o++)n[o]=Math.tanh(n[o]+s[e++]);const i=new Array(gl);for(let o=0;o<gl;o++){let r=0;for(let a=0;a<Ta;a++)r+=s[e++]*n[a];i[o]=r}for(let o=0;o<gl;o++)i[o]+=s[e++];return i}const Aa=s=>1/(1+Math.exp(-s));function dy(s,t){const e=uy(s,hy(t));let n=0;for(let i=1;i<4;i++)e[i]>e[n]&&(n=i);return{tactic:ly[n],R:12+12*Aa(e[4]),clear:1.8+5*Aa(e[5]),dv:16*Math.tanh(e[6]),brake:.15+.6*Aa(e[7]),wait:2*Aa(e[8]-2)}}const Fr={t:[-2,-1.7,-1.5,-1.2,-1,-.7,-.5,-.2,0,.3,.5,.8,1,1.3,1.5,1.8,2,2.3,2.5,2.8,3,3.3,3.5,3.8,4,4.3,4.5,4.8,5,5.3,5.5,5.8,6,6.3,6.5,6.8,7,7.3,7.5,7.8,8,8.3,8.5,8.8,9,9.3,9.5,9.8,10,10.3,10.5,10.8,11],x:[-82.5,-77.2,-71.9,-66.4,-61,-55.5,-49.8,-44.6,-39.2,-34,-29.1,-24.6,-20.3,-16.4,-12.8,-9.5,-6.8,-4.1,-2,0,1.7,3,3.7,4.3,4.8,4.6,4,3,1.8,.2,-1.5,-3.7,-5.7,-7.9,-10.7,-13.3,-16.1,-19.6,-22.9,-26.7,-30.7,-34.9,-39.6,-44.6,-49.6,-54.9,-60,-65.1,-70.4,-75.6,-80.6,-86,-91.7],y:[-35.4,-35.2,-35.1,-35,-34.8,-34.5,-34,-33.4,-32.3,-31.4,-30.3,-29.2,-28,-27,-26,-24.8,-23.3,-21.4,-19.8,-17.6,-15.4,-13.2,-10.7,-8.1,-5.5,-2.6,.7,3.7,6.3,8.7,11.1,13.7,16.3,18.5,20.7,23,25.1,27.2,28.7,30,31.1,32,32.7,33.5,34.1,35.3,35.8,36.2,36.3,36.5,36.7,37,37.3],th:[0,.5,.8,1.2,1,1.5,1.5,2.5,3.4,5.4,7.9,9.7,12,13.6,17.5,20.9,25.5,30.1,36.1,42.6,50.6,59,68.5,77.5,87.5,96.6,103.7,109.3,113.9,118.6,123.6,126.6,130.4,135.1,139,143.6,148.1,153,156.7,159.8,161.6,163.5,164.7,166,166.8,168.2,168.9,169.7,170.5,170.7,172,172.2,172.2]},Gi=32,dp=27,fy=an[0],py=an[1],Dh=fy.z-dp,Os=py.z+dp,En=Dh-Os,Ti=Math.PI*Gi,uc=an[0].x,kr=uc-Gi,fp=uc+Gi,wi=2*En+2*Ti,Nh=Wn,Vo=3,pp=Nh-Os;function Rs(s,t){if(s<0)return t.x=kr,t.z=Os+s,t.ox=-1,t.oz=0,t.tx=0,t.tz=1,t.turn=!1,t;let e=s%wi;if(e<En)return t.x=kr,t.z=Os+e,t.ox=-1,t.oz=0,t.tx=0,t.tz=1,t.turn=!1,t;if(e-=En,e<Ti){const i=e/Gi;return t.ox=-Math.cos(i),t.oz=Math.sin(i),t.x=uc+Gi*t.ox,t.z=Dh+Gi*t.oz,t.tx=Math.sin(i),t.tz=Math.cos(i),t.turn=!0,t}if(e-=Ti,e<En)return t.x=fp,t.z=Dh-e,t.ox=1,t.oz=0,t.tx=0,t.tz=-1,t.turn=!1,t;e-=En;const n=e/Gi;return t.ox=Math.cos(n),t.oz=-Math.sin(n),t.x=uc+Gi*t.ox,t.z=Os+Gi*t.oz,t.tx=-Math.sin(n),t.tz=-Math.cos(n),t.turn=!0,t}function my(s,t,e){const n={x:0,z:0,ox:0,oz:0,tx:0,tz:0,turn:!1};let i=e,o=1/0;for(let r=-2;r<=40;r+=.5){Rs(e+r,n);const a=(n.x-s)**2+(n.z-t)**2;a<o&&(o=a,i=e+r)}return i}function gy(s){if(s<0)return-s+En;const t=s%wi,e=[En,En+Ti+En,wi+En];for(const n of e)if(n>t)return n-t;return 0}const xl=4.5,xy={逃げ:{R:17,clear:2.2,dv:0,brake:.3,hold:1,aim:3,exit:0},差し:{R:15,clear:3.2,dv:-4,brake:.2,hold:1,aim:xl,exit:-6},まくり:{R:22,clear:5.5,dv:4,brake:.5,hold:1,aim:xl,exit:6},まくり差し:{R:15,clear:3.2,dv:0,brake:.3,hold:1,aim:xl,exit:-3}},x0=1.8,vy=4,_y=-19.3,v0=-10,vl=37,My=6,yy=1.2,Sy=2,Ke=()=>globalThis.__raceTune??{},zh=()=>Ke().lane??vy,Mr=s=>(Ke().laneBase??_y)+(s-1)*zh(),Ra=s=>kr+1-Mr(s),wy={R:19,exit:3},by={逃げ:-3.5,差し:1,まくり:-2.5,まくり差し:-.5},Ey=9.5,Ty=14,Ay=45*Math.PI/180,_0=3.5,Xe={x:0,z:0,ox:0,oz:0,tx:0,tz:0,turn:!1},M0=Fr.t.length,y0=Fr.t.findIndex(s=>s>=0);function Ca(s,t,e){const n=Fr.y[t];return e.x=Fr.x[t]+s.rxs,e.y=n<0?n*s.rys:n*s.rye,e}function Ry(s,t){const i=a=>28*a-(28-t)*5.5*(1-Math.exp(-a/5.5));let o=0,r=30;for(let a=0;a<30;a++){const c=(o+r)/2;i(c)<s?o=c:r=c}return r}function S0(s){return Uh(s)===1?fp+kr:0}function Uh(s){return s<0||s%wi<En+Ti?0:1}class Cy{constructor(t,e){S(this,"lane");S(this,"course");S(this,"skill");S(this,"s",0);S(this,"laps",0);S(this,"finished",!1);S(this,"finishTime",0);S(this,"flying",!1);S(this,"capsized",!1);S(this,"tactics",[]);S(this,"tactic",null);S(this,"lat",0);S(this,"policy",null);S(this,"control",null);S(this,"ctrlPre",[0,0,0,0]);S(this,"ctrlSat",0);S(this,"ctrlN",0);S(this,"ctrlT",0);S(this,"rounded",[!0,!0]);S(this,"ctrlHold",{steer:0,throttle:1,leanX:0,leanZ:0});S(this,"apexAt",null);S(this,"apexInside",[]);S(this,"dMin",1/0);S(this,"dMinTime",0);S(this,"labelPending",!1);S(this,"lastPlanS",-1/0);S(this,"bias",0);S(this,"upsideTime",0);S(this,"offset");S(this,"turnTime",0);S(this,"steerTime",0);S(this,"leanX",0);S(this,"plan",null);S(this,"armed",!0);S(this,"launched",!1);S(this,"input",{steer:0,throttle:0,leanX:0,leanZ:0});this.lane=t,this.course=t,this.skill=e,this.offset=Mr(t)}startPos(){return{x:kr+1-Mr(this.lane),z:Nh-85}}beginRace(t,e,n){this.course=n,this.s=e-Os,Rs(this.s,Xe),this.offset=(t-Xe.x)*Xe.ox+(e-Xe.z)*Xe.oz,this.launched=!0}get progress(){return this.s-pp}get turnPlan(){return this.plan}reset(){const t=this.startPos();this.s=t.z-Os,this.laps=0,this.finished=!1,this.flying=!1,this.capsized=!1,this.upsideTime=0,this.turnTime=this.steerTime=this.leanX=0,this.course=this.lane,this.offset=Mr(this.course),this.plan=null,this.armed=!0,this.launched=!1,this.tactics=[],this.tactic=null,this.apexAt=null,this.labelPending=!1,this.lastPlanS=-1/0,this.dMin=1/0}makePlan(t,e,n,i,o){const r=an[t],a=0,c=t===0?1:-1,l=c,u=0,h=(lt,xt)=>-((lt-r.x)*l+(xt-r.z)*u),d=h(e.x,e.z),f=[];for(const lt of o){if(lt.cpu===this||lt.cpu.capsized||lt.cpu.finished)continue;const xt=lt.ph.comW,j=(xt.x-e.x)*a+(xt.z-e.z)*c;if(Math.abs(j)>25)continue;const L=h(xt.x,xt.z);L<d-1&&f.push({lat:L,ahead:j})}const p=this.skill;let x;if(f.length===0)x="逃げ";else{const lt=Math.max(...f.map(L=>L.ahead)),xt=f.reduce((L,N)=>N.lat>L.lat?N:L),j=7-p.aggression*3;lt<-j-3?x="逃げ":lt<-j?x="まくり":f.length>=2&&xt.ahead<-j*.6?x="まくり差し":x="差し",this.tactics.length===0&&t===0&&(this.course===3||this.course===5)&&x==="差し"&&lt<4&&(x=lt<-j*.5?"まくり":"まくり差し")}globalThis.__cpuDebug&&console.log(`[${this.lane}] mark${t} lat${d.toFixed(1)} inside:${f.map(lt=>lt.lat.toFixed(1)+"/"+lt.ahead.toFixed(1)).join(" ")} → ${x}`);const g={...xy[x]};if(x==="逃げ"&&o.some(xt=>{if(xt.cpu===this||xt.cpu.capsized||xt.cpu.finished)return!1;const j=xt.ph.comW,L=(j.x-e.x)*a+(j.z-e.z)*c,N=h(j.x,j.z)-d;return L>-1&&L<10&&N>0&&N<12})&&Object.assign(g,wy),x==="逃げ"){const lt=Ke();lt.nigeDv!==void 0&&(g.dv=lt.nigeDv),lt.nigeAim!==void 0&&(g.aim=lt.nigeAim),lt.nigeBrake!==void 0&&(g.brake=lt.nigeBrake),lt.nigeR!==void 0&&(g.R=lt.nigeR)}const m=Ke().aimScale??(Sn?0:1);g.aim*=m;let _=null;if(this.policy){const lt=[];let xt=0;for(const j of o){if(j.cpu===this||j.cpu.capsized||j.cpu.finished)continue;const L=j.ph.comW;j.cpu.s>this.s&&xt++,lt.push({ahead:(L.x-e.x)*a+(L.z-e.z)*c,dLat:h(L.x,L.z)-d,dSpeed:j.ph.speed()-n})}_=dy(this.policy,{mark:t,turn:this.tactics.length,lat:d,speed:n,toMark:(r.x-e.x)*a+(r.z-e.z)*c,rank:xt,rivals:lt}),x=_.tactic,Object.assign(g,{R:_.R,clear:_.clear,dv:_.dv,brake:_.brake,aim:0})}p.seed=p.seed*16807%2147483647;const y=!_&&p.seed%1e3/1e3<p.slip?2.5+(p.seed>>10)%1e3/250:0;let v=_?_.clear:Math.max(2,g.clear-(p.tight-.5)*1.6)+y+(Sn?Ke().v2Clear??1:0);const P=(r.x-e.x)*a+(r.z-e.z)*c,T=i+Math.max(0,P)/Math.max(8,n),M=o.filter(lt=>{var xt;return lt.cpu!==this&&((xt=lt.cpu.turnPlan)==null?void 0:xt.mark)===t});let C=_?_.wait:0;if(!_&&x==="差し"){let lt=null,xt=-1/0;for(const j of M){const L=h(j.ph.comW.x,j.ph.comW.z);L<d&&L>xt&&(lt=j,xt=L)}lt&&(C=Math.max(0,lt.cpu.turnPlan.apexTime+1.6-T))}if(_){const lt=[];for(const L of o){if(L.cpu===this||L.cpu.capsized||L.cpu.finished)continue;const N=L.ph.comW,U=(N.x-e.x)*a+(N.z-e.z)*c;if(Math.abs(U)>25||h(N.x,N.z)>=d-1)continue;const J=L.cpu.turnPlan,rt=(r.x-N.x)*a+(r.z-N.z)*c;lt.push(J&&J.mark===t?J.apexTime:i+Math.max(0,rt)/Math.max(8,L.ph.speed()))}const xt=T+C;this.apexInside=o.filter(L=>{if(L.cpu===this||L.cpu.capsized||L.cpu.finished)return!1;const N=L.ph.comW;return Math.abs((N.x-e.x)*a+(N.z-e.z)*c)<=25&&h(N.x,N.z)<d-1}).map(L=>L.cpu),this.labelPending=!0;const j=lt.filter(L=>L<xt-.3).length;x=lt.length===0?"逃げ":j===0?Math.max(...f.map(L=>L.ahead))<-10?"逃げ":"まくり":j===lt.length?"差し":"まくり差し",globalThis.__cpuDebug&&console.log(`[${this.lane}] ${t+1}M ${x} R${_.R.toFixed(1)} 間隔${_.clear.toFixed(1)} 速さ${_.dv.toFixed(1)} レバー${_.brake.toFixed(2)} 待つ${_.wait.toFixed(2)} 頂点${(xt-i).toFixed(2)}s 内の艇${lt.map(L=>(L-i).toFixed(2)).join(",")}`)}if(!_)for(const lt of M){const xt=lt.cpu.turnPlan;Math.abs(T+C-xt.apexTime)<.9&&h(lt.ph.comW.x,lt.ph.comW.z)<d+1&&(v=Math.max(v,xt.clear+2.8))}const b=Math.max(.5,d);let w=v-g.aim;const D=Sn&&!_&&this.tactics.length>0;let k=g.R,O=0;for(let lt=0;lt<2;lt++){k=D?Math.max(12,(b+vl+g.exit)/2,(b+w)/2+.5):Math.max(g.R,(b+w)/2+.5),O=Math.acos(Math.max(-1,Math.min(1,(k-b)/(k-w))));const xt=g.aim-(g.aim-1.5)*Math.max(0,Math.min(1,(O-Math.PI/3)/(Math.PI/3)));w=v-xt}const V=-Math.cos(O)*l+Math.sin(O)*a,B=-Math.cos(O)*u+Math.sin(O)*c,Y=D?60+(p.entrySpeed-49)+g.dv-Math.min(10,C*12):Math.sqrt((Ke().turnAcc??(Sn?Ty:Ey))*k)*3.6+(_?0:p.entrySpeed-49)+g.dv-Math.min(10,C*12);this.tactics.push(x),this.tactic=_?null:x;const H=_?_.brake:g.brake+(.8-g.brake)*p.grip*.6,K=x==="逃げ"?(Ke().nigeEarly??Sy)*m:0,ut=Math.max(.15,b/32),yt=Math.max(.3,Math.min(vl,Math.max(Ke().exitMin??25,b+vl-32))+g.exit)/37,_t=by[x]+Math.min(4,v-3.2)+Math.min(4,C*3);return{mark:t,tactic:x,cx:r.x-(k-w)*V-K*a,cz:r.z-(k-w)*B-K*c,R:k,dx:a,dz:c,lx:l,lz:u,entry:Y,clear:v,apexTime:T+C,brake:H,hold:g.hold,real:D,rys:ut,rye:yt,rxs:_t,ri:0}}planTarget(t,e,n,i,o){if(t.real)return this.realTarget(t,e,n,i*(Ke().realLook??1),o);const r=Math.max(6,t.R+this.bias),a=e-t.cx,c=n-t.cz,l=a*t.dx+c*t.dz,u=-(a*t.lx+c*t.lz);let h,d;l<0&&u>0?(h=l,d=l/r):(d=Math.atan2(l,u),d<-Math.PI/2&&(d+=2*Math.PI),h=d*r);const f=h+i;if(f<=0)o.x=t.cx-r*t.lx+f*t.dx,o.z=t.cz-r*t.lz+f*t.dz;else if(f<=Math.PI*r){const p=f/r;o.x=t.cx+r*(-Math.cos(p)*t.lx+Math.sin(p)*t.dx),o.z=t.cz+r*(-Math.cos(p)*t.lz+Math.sin(p)*t.dz)}else{const p=f-Math.PI*r;o.x=t.cx+r*t.lx-p*t.dx,o.z=t.cz+r*t.lz-p*t.dz}return d}realTarget(t,e,n,i,o){const r=an[t.mark],a=(e-r.x)*t.dx+(n-r.z)*t.dz,c=(e-r.x)*t.lx+(n-r.z)*t.lz,l={...t,rys:t.rys+this.bias/32,rye:t.rye+this.bias/37},u={x:0,y:0},h={x:0,y:0};let d=t.ri,f=1/0;for(let _=t.ri;_<Math.min(M0,t.ri+12);_++){Ca(l,_,u);const y=(u.x-a)**2+(u.y-c)**2;y<f&&(f=y,d=_)}t.ri=d;let p=i,x=d;Ca(l,x,u);let g=u.x,m=u.y;for(;p>0&&x<M0-1;){Ca(l,x+1,h);const _=Math.hypot(h.x-g,h.y-m);_>=p?(g+=(h.x-g)*p/_,m+=(h.y-m)*p/_,p=0):(p-=_,g=h.x,m=h.y,x++)}return p>0&&(g-=p),o.x=r.x+g*t.dx+m*t.lx,o.z=r.z+g*t.dz+m*t.lz,d<y0?(Ca(l,y0,h),-Math.hypot(h.x-a,h.y-c)/30):Fr.th[d]*Math.PI/180}squeezed(t,e,n){for(const i of n){if(i.cpu===this||i.cpu.capsized)continue;const o=i.ph.comW.x-t.x,r=i.ph.comW.z-t.z,a=o*e.x+r*e.z,c=o*e.z-r*e.x;if(Math.abs(a)<4&&c>.5&&c<3.2)return!0}return!1}controlObs(t,e){const n=new Array(up).fill(0),i=t.forward(new A),o=i.x,r=i.z,a=Math.hypot(o,r)||1,c=o/a,l=r/a,u=(M,C)=>[M*c+C*l,M*l-C*c],h=t.comW,[d,f]=u(t.vel.x,t.vel.z),p=t.attitude();n[0]=d/25,n[1]=f/10,n[2]=t.angVel.y/2,n[3]=p.heel/30,n[4]=p.trim/10,n[5]=t.rpm/6600,n[6]=t.throttle,n[7]=t.steerAngle/.5,n[8]=(t.riderB.x-Hn.x)/.55,n[9]=(t.riderB.z-Hn.z)/.3;const x={x:0,z:0,ox:0,oz:0,tx:0,tz:0,turn:!1};let g=10;for(const M of[10,25,50]){Rs(this.s+M,x);const[C,b]=u(x.x-h.x,x.z-h.z);n[g++]=C/50,n[g++]=b/50}Rs(this.s+25,x);const[m,_]=u(x.tx,x.tz);n[16]=m,n[17]=_;const y=an[Uh(this.s)],[v,P]=u(y.x-h.x,y.z-h.z);n[18]=v/100,n[19]=P/100,n[20]=Math.hypot(v,P)/100,n[21]=this.lat/30;const T=e.filter(M=>M.cpu!==this&&!M.cpu.capsized).map(M=>({o:M,d:Math.hypot(M.ph.comW.x-h.x,M.ph.comW.z-h.z)})).filter(M=>M.d<40).sort((M,C)=>M.d-C.d).slice(0,2);g=22;for(let M=0;M<2;M++){const C=T[M];if(C){const[b,w]=u(C.o.ph.comW.x-h.x,C.o.ph.comW.z-h.z),[D]=u(C.o.ph.vel.x-t.vel.x,C.o.ph.vel.z-t.vel.z);n[g++]=b/30,n[g++]=w/30,n[g++]=D/10,n[g++]=1}else g+=4}return n[30]=this.s%wi/wi,n[31]=1,n}update(t,e,n,i=[]){var j;const o=this.skill,r=this.input,a=1-2*(e.quat.x*e.quat.x+e.quat.z*e.quat.z);if(this.upsideTime=a<.15?this.upsideTime+t:0,this.upsideTime>1&&(this.capsized=!0),this.capsized){r.steer=r.throttle=r.leanX=r.leanZ=0;return}const c=e.comW;if(this.s=my(c.x,c.z,this.s),this.s>=0){const L=this.s%wi,N=this.s-L;for(const[U,J]of[[0,En],[1,2*En+Ti]]){const rt=an[U],ct=U===0?c.z>=rt.z:c.z<=rt.z;L>=J-30&&L<J&&(this.rounded[U]=!1),ct&&(this.rounded[U]=!0);const dt=N+J+Ti/2;L>=J+Ti/2&&L<J+Ti+En*.5&&!this.rounded[U]&&(this.s=Math.min(this.s,dt))}}Rs(this.s,Xe),this.lat=(c.x-Xe.x)*Xe.ox+(c.z-Xe.z)*Xe.oz;const l=e.speed()*3.6;if(n<0&&this.progress>0&&(this.flying=!0),this.laps=Math.max(0,Math.floor(this.progress/wi)),!this.finished&&this.progress>=Vo*wi&&(this.finished=!0,this.finishTime=n),!this.launched&&n<0){r.throttle=.12;const L=Nh-c.z;-n+o.st<=Ry(L,e.speed())&&(this.launched=!0)}n>=0&&(this.launched=!0);const u=gy(this.s);if(u>60&&this.s>this.lastPlanS+150&&(this.armed=!0),!this.plan&&this.armed&&u<50&&n>0&&!this.finished&&(this.dMin=1/0,this.labelPending=!1,this.plan=this.makePlan(Uh(this.s),c,e.speed(),n,i),this.lastPlanS=this.s,this.armed=!1,this.turnTime=0),this.plan){const L=an[this.plan.mark],N=Math.hypot(c.x-L.x,c.z-L.z);if(N<this.dMin)this.dMin=N,this.dMinTime=n;else if(N>this.dMin+1&&((!this.apexAt||this.apexAt.time!==this.dMinTime)&&(this.apexAt={mark:this.plan.mark,time:this.dMinTime}),this.labelPending)){this.labelPending=!1;const U=this.apexInside.filter(ct=>!ct.capsized),J=U.filter(ct=>ct.apexAt&&ct.apexAt.mark===this.plan.mark&&Math.abs(ct.apexAt.time-this.dMinTime)<8&&ct.apexAt.time<this.dMinTime-.2).length,rt=U.length===0?"逃げ":J===0?"まくり":J===U.length?"差し":"まくり差し";this.tactic=rt,this.tactics[this.tactics.length-1]=rt}}const h=6+e.speed()*.35,d={x:0,z:0};let f=-1;const p=this.plan;if(p){f=this.planTarget(p,c.x,c.z,h,d);const L=Math.abs(Math.atan2(-(e.vel.x*p.lx+e.vel.z*p.lz),e.vel.x*p.dx+e.vel.z*p.dz));(f>165*Math.PI/180||e.speed()>3&&L>165*Math.PI/180)&&(Rs(this.s,Xe),this.offset=Math.max(v0-S0(this.s),(c.x-Xe.x)*Xe.ox+(c.z-Xe.z)*Xe.oz),this.plan=null,this.tactic=null)}if(!this.plan){let L=this.tactics.length===0?Mr(this.course):this.offset;const N=S0(this.s);if(n>3){let U=null,J=35;for(const rt of i){if(rt.cpu===this||rt.cpu.capsized)continue;const ct=rt.cpu.s-this.s;ct>2&&ct<J&&Math.abs(rt.cpu.lat-this.lat)<2.5&&(U=rt,J=ct)}if(!U&&u<300)L=-N;else if(U){const rt=U.cpu.lat-zh(),ct=U.cpu.lat+zh(),dt=it=>i.some(St=>St.cpu!==this&&!St.cpu.capsized&&Math.abs(St.cpu.s-this.s)<10&&Math.abs(St.cpu.lat-it)<3);L=rt>v0-N&&!dt(rt)?rt:dt(ct)?this.lat:ct}}for(const U of i){const J=U.cpu.s-this.s;U.cpu===this||U.cpu.capsized||J>8||J<-4||(L<this.lat&&U.cpu.lat<this.lat&&U.cpu.lat>L-3.5&&(L=Math.max(L,U.cpu.lat+3.5)),L>this.lat&&U.cpu.lat>this.lat&&U.cpu.lat<L+3.5&&(L=Math.min(L,U.cpu.lat-3.5)))}this.offset+=(L-this.offset)*Math.min(1,t*.3),Rs(this.s+h,Xe),d.x=Xe.x+Xe.ox*this.offset,d.z=Xe.z+Xe.oz*this.offset}const x=!!this.plan&&f>=0,g=this.plan&&f<0?-f*(this.plan.real?30:this.plan.R):0,m=e.forward(new A);let _=0,y=0,v=!1;if(this.plan){const L=[];for(const U of i){if(U.cpu===this||U.cpu.capsized)continue;const J=U.ph.comW.x-c.x,rt=U.ph.comW.z-c.z,ct=J*m.x+rt*m.z,dt=J*m.z-rt*m.x;Math.abs(ct)<14&&Math.abs(dt)<6&&L.push({o:U,a:ct,l:dt})}const N=!L.some(U=>U.l>.5&&U.l<4&&Math.abs(U.a)<6);for(const{o:U,a:J,l:rt}of L){const ct=(e.vel.x-U.ph.vel.x)*m.x+(e.vel.z-U.ph.vel.z)*m.z;if(J>1&&J<12&&Math.abs(rt)<2.6&&(x?_=N?Math.min(_,-2):Math.max(_,2.8):y=Math.max(y,(ct>0?1:.3)*(1-J/12))),x&&Math.abs(J)<3.5&&rt>.5&&rt<4.5)if(this.plan.real)_=Math.max(_,3);else{const dt=Math.hypot(U.ph.comW.x-this.plan.cx,U.ph.comW.z-this.plan.cz);_=Math.max(_,dt+2.8-this.plan.R)}J>.5&&J<4&&rt<-.5&&rt>-4.5&&(v=!0)}}_=Math.max(-3,Math.min(6,_)),this.bias+=(_-this.bias)*Math.min(1,t*2),this.plan||(this.bias=0),this.plan&&!x&&this.squeezed(c,m,i)&&(d.x=c.x+this.plan.dx*h,d.z=c.z+this.plan.dz*h);for(const L of an){const N=d.x-c.x,U=d.z-c.z,J=Math.hypot(N,U),rt=L.x-c.x,ct=L.z-c.z,dt=Math.hypot(rt,ct),it=Sn?Ke().v2ClearM??x0:x0;if(it<=0||J<.001||dt<.001||dt>J+it)continue;const St=Math.atan2(N,U),F=Math.atan2(rt,ct);let bt=St-F;if(bt>Math.PI&&(bt-=2*Math.PI),bt<-Math.PI&&(bt+=2*Math.PI),Math.abs(bt)>Math.PI/2)continue;const Vt=dt<=it?Math.PI/2:Math.asin(it/dt);if(bt>-Vt){const Kt=F-Vt;d.x=c.x+Math.sin(Kt)*J,d.z=c.z+Math.cos(Kt)*J}}const P=e.forward(new A),T=d.x-c.x,M=d.z-c.z;let b=Math.atan2(P.x*M-P.z*T,P.x*T+P.z*M)/.4+.3*e.angVel.y;const w=e.vel,D=Sn&&e.speed()>5?Math.atan2(P.x*w.z-P.z*w.x,P.x*w.x+P.z*w.z):0,k=Sn&&e.speed()>5&&(!!this.plan||D>.26);if(k){const L=Math.atan2(w.x*M-w.z*T,w.x*T+w.z*M),N=!!((j=this.plan)!=null&&j.real);b=L/(Ke().slideGain??(N?.55:.4))+(Ke().slideDamp??(N?.4:.15))*e.angVel.y,b=Math.max(b,-((Ke().driftMax??Ay*(180/Math.PI))*(Math.PI/180)-D)/.2)}if(x&&this.plan&&!this.plan.real){const L=Math.hypot(c.x-this.plan.cx,c.z-this.plan.cz)-(this.plan.R+this.bias);(!Sn||L>0)&&(b-=.15*L)}if(b=Math.max(-1,Math.min(1,b)),Sn&&this.plan&&l>this.plan.entry+6){const L=Math.max(.3,1-(l-this.plan.entry-6)/12);b=Math.max(-L,Math.min(L,b))}let O=0,V=0;for(const L of i){if(L.ph===e||L.cpu.capsized)continue;const N=L.ph.comW.x-c.x,U=L.ph.comW.z-c.z,J=Math.hypot(N,U);if(J>8||J<.1||(N*P.x+U*P.z)/J<Math.cos(.6))continue;const ct=(P.x*U-P.z*N)/J;O=Math.max(O,1-J/8),V+=ct>0?-1:1}O>0&&!x&&(b=Math.max(-1,Math.min(1,b+Math.sign(V)*.35*O))),!this.plan&&!k&&(b=Math.max(-.45,Math.min(.45,b)));const B=b<0||k?e.attitude().heel:-e.attitude().heel,Y=Sn?Math.max(0,Math.min(1,(B-5)/10)):Math.max(0,Math.min(1,(B-8)/12));Y>0&&(b*=1-.7*Y);const H=Math.max(0,Math.min(1,(-B-(Ke().rescueInHeel??6))/10));H>0&&(b*=1-.5*H),Sn&&(this.plan||k)&&(b=Math.min(b,.4));const K=2.5*t;if(r.steer=this.launched?r.steer+Math.max(-K,Math.min(K,b-r.steer)):0,this.launched){x&&(this.turnTime+=t);let L=1;const N=e.speed(),U=p?p.entry/3.6:0,J=p?Sn&&!this.policy?Math.min(p.brake,.3):p.brake:1,rt=p?_0*Math.max(.25,(1-J)/.65):_0,ct=(N*N-U*U)/(2*rt)+o.brakeMargin;if(p!=null&&p.real){const dt=(Ke().liftThr??.2)+.25*o.grip;!x&&g<(Ke().liftLead??My)*(l/80)+o.brakeMargin&&(L=dt);const it=Math.atan2(-(w.x*p.lx+w.z*p.lz),w.x*p.dx+w.z*p.dz);x&&(L=Math.abs(it)<(Ke().liftPsi??yy)&&this.turnTime<4?dt:p.hold)}else p&&!x&&g<ct&&l>p.entry&&(L=J),p&&x&&(L=Ke().fullTurn||this.turnTime>=o.regrip*(1-.5*o.grip)?p.hold:.55+.3*o.grip);p&&!x&&y>0&&(L=Math.min(L,1-.7*y)),p&&x&&v&&this.turnTime>o.regrip*.5&&(L=Math.max(L,.75)),O>0&&(L=Math.min(L,1-.6*O)),Y>0&&!(Sn&&Ke().rescueKeep!==0)&&(L=Math.min(L,1-.6*Y)),r.throttle=L}const ut=(Math.abs(b)>.45||k&&D>.26)&&l>25;this.steerTime=ut?this.steerTime+t:0;const yt=Math.max(0,Math.min(1,(l-25)/25));let _t=ut&&this.steerTime>o.leanDelay?(k&&D>.26?-1:Math.sign(b))*yt:0;Sn&&this.plan&&(_t=Math.min(0,_t));const lt=t/Math.max(.05,_t!==0?o.leanSpeed:.8);this.leanX+=Math.max(-lt,Math.min(lt,_t-this.leanX)),H>0&&(this.leanX*=1-Math.min(1,t*8*H)),r.leanX=this.leanX,r.leanZ=!ut&&l<50&&this.launched?.4:0;const xt=globalThis.__ctrlRecord;if((this.control||xt)&&this.launched&&n>0&&!this.finished){if(this.ctrlT+=t,this.ctrlT>=g0){this.ctrlT-=g0;const L=this.controlObs(e,i);xt&&xt(this,L,r),this.control&&(Object.assign(this.ctrlHold,ay(sy(this.control,L,void 0,void 0,this.ctrlPre))),this.ctrlSat+=ry(this.ctrlPre),this.ctrlN++)}this.control&&(r.steer=this.ctrlHold.steer,r.throttle=this.ctrlHold.throttle,r.leanX=this.ctrlHold.leanX,r.leanZ=this.ctrlHold.leanZ)}this.finished&&(r.throttle=.25,r.leanX=this.leanX=0)}}function Fh(s){let t=s;const e=()=>(t=t*16807%2147483647,t%1e4/1e4);return["白","黒","赤","青","黄","緑"].map(i=>({name:i,entrySpeed:46+e()*6,brakeMargin:-2+e()*6,leanDelay:.15+e()*.3,leanSpeed:.15+e()*.3,tight:e(),aggression:e(),regrip:.3+e()*.6,grip:e(),slip:.08+e()*.17,seed:1+Math.floor(e()*1e5),st:.05+e()*.15+(e()<.15?.1+e()*.15:0)}))}function mp(s,t){return t?s.tactics[0]??"逃げ":"抜き"}const w0=En+Ti+40-pp,cs=li.map(()=>new A),Pa=li.map(()=>new A),kh=new A;function Py(s,t){for(let a=0;a<li.length;a++)s.toWorld(kh.set(0,0,li[a].z),cs[a]),t.toWorld(kh.set(0,0,li[a].z),Pa[a]);let e=-1/0,n=0,i=0,o=0,r=0;for(let a=0;a<cs.length;a++)for(let c=0;c<Pa.length;c++){const l=Pa[c].x-cs[a].x,u=Pa[c].z-cs[a].z,h=Math.hypot(l,u),d=li[a].r+li[c].r-h;d>e&&h>1e-4&&(e=d,n=a,i=c,o=l/h,r=u/h)}return{pen:e,ia:n,ib:i,nx:o,nz:r}}const Ly=.3,Iy=.15,Ss=new A,vi=new A,Dy=new A,Ny=new A,_l=new A,po=new A,La=new A;function zy(s){for(let t=0;t<s.length;t++)for(let e=t+1;e<s.length;e++){const n=s[t],i=s[e];if((i.comW.x-n.comW.x)**2+(i.comW.z-n.comW.z)**2>16)continue;const{pen:o,ia:r,nx:a,nz:c}=Py(n,i);if(o<=0)continue;n.shift(-a*o/2,-c*o/2),i.shift(a*o/2,c*o/2),Ss.set(a,0,c),vi.copy(cs[r]).addScaledVector(Ss,li[r].r-o/2),vi.y=(n.comW.y+i.comW.y)/2+Iy;const l=n.velocityAt(vi,Dy),u=i.velocityAt(vi,Ny);_l.subVectors(u,l).setY(0);const h=_l.dot(Ss);if(h<0){const d=-1.1*h/(n.impulseResponse(Ss,vi)+i.impulseResponse(Ss,vi));po.copy(_l).addScaledVector(Ss,-h);const f=po.length();if(La.copy(Ss).multiplyScalar(d),f>1e-4){po.multiplyScalar(1/f);const p=Math.min(f/(n.impulseResponse(po,vi)+i.impulseResponse(po,vi)),Ly*d);La.addScaledVector(po,-p)}i.applyImpulse(La,vi),n.applyImpulse(La.negate(),vi)}}}const Uy=.8;function gp(s,t){let e=0;return s.forEach((n,i)=>{for(const o of an){if((n.comW.x-o.x)**2+(n.comW.z-o.z)**2>16)continue;let r=0,a=0,c=0;for(let u=0;u<li.length;u++){n.toWorld(kh.set(0,0,li[u].z),cs[u]);const h=cs[u].x-o.x,d=cs[u].z-o.z,f=Math.hypot(h,d),p=li[u].r+Uy-f;p>r&&f>1e-4&&(r=p,a=h/f,c=d/f)}if(r<=0)continue;e++,n.shift(a*r,c*r);const l=n.vel.x*a+n.vel.z*c;l<0&&(n.vel.x-=1.3*l*a,n.vel.z-=1.3*l*c),n.vel.x*=.97,n.vel.z*=.97}}),e}const Ml=9.81,yl=1e3;class Oh{constructor(t={}){S(this,"n");S(this,"dx");S(this,"size");S(this,"dt");S(this,"depth");S(this,"originX",0);S(this,"originZ",0);S(this,"layer",null);S(this,"h");S(this,"q");S(this,"dhdt");S(this,"computeVelocity",!1);S(this,"ux");S(this,"uz");S(this,"modePhi");S(this,"dk",0);S(this,"velRe");S(this,"velIm");S(this,"p");S(this,"pImpact");S(this,"src");S(this,"pSmooth");S(this,"fhx");S(this,"fhz");S(this,"hasH",!1);S(this,"modeHF");S(this,"hRe");S(this,"hIm");S(this,"sRe");S(this,"sIm");S(this,"re");S(this,"im");S(this,"pre");S(this,"pim");S(this,"outRe");S(this,"outIm");S(this,"rowRe");S(this,"rowIm");S(this,"cosT");S(this,"sinT");S(this,"rev");S(this,"modeC");S(this,"modeS");S(this,"modeDamp");S(this,"sponge");const e=this.n=t.n??128;this.dx=t.dx??.5,this.size=e*this.dx,this.dt=t.dt??1/60,this.depth=t.depth??3;const n=e*e;this.h=new Float32Array(n),this.q=new Float32Array(n),this.dhdt=new Float32Array(n),this.ux=new Float32Array(n),this.uz=new Float32Array(n),this.modePhi=new Float32Array(n),this.velRe=new Float32Array(n),this.velIm=new Float32Array(n),this.p=new Float32Array(n),this.pImpact=new Float32Array(n),this.src=new Float32Array(n),this.pSmooth=new Float32Array(n),this.fhx=new Float32Array(n),this.fhz=new Float32Array(n),this.modeHF=new Float32Array(n),this.hRe=new Float32Array(n),this.hIm=new Float32Array(n),this.sRe=new Float32Array(n),this.sIm=new Float32Array(n),this.re=new Float32Array(n),this.im=new Float32Array(n),this.pre=new Float32Array(n),this.pim=new Float32Array(n),this.outRe=new Float32Array(n),this.outIm=new Float32Array(n),this.rowRe=new Float32Array(e),this.rowIm=new Float32Array(e),this.cosT=new Float32Array(e/2),this.sinT=new Float32Array(e/2);for(let c=0;c<e/2;c++)this.cosT[c]=Math.cos(2*Math.PI*c/e),this.sinT[c]=-Math.sin(2*Math.PI*c/e);const i=Math.log2(e);this.rev=new Uint32Array(e);for(let c=0;c<e;c++){let l=0;for(let u=0;u<i;u++)l|=(c>>u&1)<<i-1-u;this.rev[c]=l}this.modeC=new Float32Array(n),this.modeS=new Float32Array(n),this.modeDamp=new Float32Array(n);const o=this.dk=2*Math.PI/this.size,r=Math.PI/this.dx;for(let c=0;c<e;c++){const l=(c<e/2?c:c-e)*o;for(let u=0;u<e;u++){const h=(u<e/2?u:u-e)*o,d=Math.hypot(h,l),f=Math.sqrt(Ml*d*Math.tanh(d*this.depth)),p=c*e+u;this.modeC[p]=Math.cos(f*this.dt),this.modeS[p]=Math.sin(f*this.dt);const x=d/r;this.modeDamp[p]=Math.exp(-(.03+2.5*x**4)*this.dt),this.modePhi[p]=d>0?f/(d*Math.tanh(d*this.depth)):0;const g=Math.min(bn.depth,this.depth);this.modeHF[p]=d>0?(Math.sinh(d*this.depth)-Math.sinh(d*(this.depth-g)))/(d*g*Math.cosh(d*this.depth))*(d/Math.tanh(d*this.depth)):0}}this.sponge=new Float32Array(n);const a=Math.max(4,Math.round(e*.12));for(let c=0;c<e;c++)for(let l=0;l<e;l++){const u=Math.min(l,c,e-1-l,e-1-c),h=Math.max(0,1-u/a);this.sponge[c*e+l]=Math.exp(-6*h*h*this.dt)}}clearPressure(){this.p.fill(0),this.pImpact.fill(0),this.src.fill(0),this.hasH&&(this.fhx.fill(0),this.fhz.fill(0),this.hasH=!1)}addHForce(t,e,n,i){n===0&&i===0||(this.splat(this.fhx,t,e,n,0),this.splat(this.fhz,t,e,i,0),this.hasH=!0)}addForce(t,e,n,i){n>0&&this.splat(this.p,t,e,n,i)}addForceSigned(t,e,n,i){n!==0&&this.splat(this.p,t,e,n,i)}addImpactSigned(t,e,n,i){n!==0&&this.splat(this.pImpact,t,e,n,i)}splatTo(t,e,n,i,o){this.splat(t,e,n,i,o)}sampleArr(t,e,n){return this.sample(t,e,n)}inside(t,e){const n=(t-this.originX)/this.dx,i=(e-this.originZ)/this.dx,o=Math.max(4,Math.round(this.n*.12));return n>=o&&i>=o&&n<this.n-o&&i<this.n-o}addImpact(t,e,n,i){n>0&&this.splat(this.pImpact,t,e,n,i)}addSource(t,e,n,i){n!==0&&this.splat(this.src,t,e,n,i)}splat(t,e,n,i,o){const r=this.n,a=(e-this.originX)/this.dx,c=(n-this.originZ)/this.dx;if(o<=0){if(a<1||c<1||a>=r-2||c>=r-2)return;const m=a|0,_=c|0,y=a-m,v=c-_,P=i/(this.dx*this.dx),T=_*r+m;t[T]+=P*(1-y)*(1-v),t[T+1]+=P*y*(1-v),t[T+r]+=P*(1-y)*v,t[T+r+1]+=P*y*v;return}const l=Math.max(o/this.dx,.7),u=Math.ceil(l*2),h=Math.max(1,Math.floor(a-u)),d=Math.min(r-2,Math.ceil(a+u)),f=Math.max(1,Math.floor(c-u)),p=Math.min(r-2,Math.ceil(c+u));if(h>d||f>p)return;let x=0;for(let m=f;m<=p;m++)for(let _=h;_<=d;_++)x+=Math.exp(-((_-a)**2+(m-c)**2)/(2*l*l));if(x<=0)return;const g=i/(x*this.dx*this.dx);for(let m=f;m<=p;m++)for(let _=h;_<=d;_++)t[m*r+_]+=g*Math.exp(-((_-a)**2+(m-c)**2)/(2*l*l))}step(){const t=this.n,e=t*t,{re:n,im:i,pre:o,pim:r,outRe:a,outIm:c,h:l,q:u}=this;n.set(l),i.set(u),this.fft2(n,i,!1);const h=this.pImpact;for(let g=0;g<e;g++)o[g]=this.p[g]+h[g];r.fill(0),this.fft2(o,r,!1),this.hasH&&this.splitHForce();const d=1/(yl*Ml);for(let g=0;g<t;g++){const m=g===0?0:t-g;for(let _=0;_<t;_++){const y=_===0?0:t-_,v=g*t+_,P=m*t+y;if(v===0){a[0]=0,this.velRe[0]=0,this.velIm[0]=0,c[0]=0;continue}const T=.5*(n[v]+n[P]),M=.5*(i[v]-i[P]),C=.5*(i[v]+i[P]),b=-.5*(n[v]-n[P]),w=-o[v]*d,D=-r[v]*d,k=this.modeC[v],O=this.modeS[v],V=this.modeDamp[v],B=T-w,Y=M-D,H=(B*k+C*O)*V,K=(Y*k+b*O)*V,ut=(-B*O+C*k)*V,yt=(-Y*O+b*k)*V,_t=H+w,lt=K+D;if(a[v]=_t-yt,c[v]=lt+ut,this.computeVelocity){const xt=this.modePhi[v],j=ut*xt,L=yt*xt,N=(_<t/2?_:_-t)*this.dk,U=(g<t/2?g:g-t)*this.dk;this.velRe[v]=-N*L-U*j,this.velIm[v]=N*j-U*L}}}this.fft2(a,c,!0),this.computeVelocity&&(this.fft2(this.velRe,this.velIm,!0),this.ux.set(this.velRe),this.uz.set(this.velIm));const f=this.sponge,p=1/this.dt,x=this.src;for(let g=0;g<e;g++){const m=(a[g]+x[g]*this.dt)*f[g];this.dhdt[g]=(m-l[g])*p,l[g]=m,u[g]=c[g]*f[g]}this.pSmooth.set(this.p)}splitHForce(){const t=this.n,{hRe:e,hIm:n,sRe:i,sIm:o,pre:r,pim:a}=this;e.set(this.fhx),n.set(this.fhz),this.fft2(e,n,!1);for(let u=0;u<t;u++){const h=u===0?0:t-u,d=(u<t/2?u:u-t)*this.dk;for(let f=0;f<t;f++){const p=f===0?0:t-f,x=u*t+f,g=h*t+p,m=(f<t/2?f:f-t)*this.dk,_=m*m+d*d;if(_===0){i[x]=e[x],o[x]=n[x];continue}const y=.5*(e[x]+e[g]),v=.5*(n[x]-n[g]),P=.5*(n[x]+n[g]),T=-.5*(e[x]-e[g]),M=(m*y+d*P)/_,C=(m*v+d*T)/_,b=this.modeHF[x];r[x]+=-C*b,a[x]+=M*b;const w=y-m*M,D=v-m*C,k=P-d*M,O=T-d*C;i[x]=w-O,o[x]=D+k}}const c=this.layer;if(!c)return;this.fft2(i,o,!0);const l=this.dt/(yl*bn.depth);for(let u=0;u<t*t;u++)c.ux[u]+=i[u]*l,c.uz[u]+=o[u]*l}recenter(t,e){var a;const n=this.n,i=this.size/2,o=Math.round((t-i-this.originX)/this.dx),r=Math.round((e-i-this.originZ)/this.dx);if(!(o===0&&r===0)){for(const c of[this.h,this.q,this.dhdt,this.pSmooth]){const l=c.slice();c.fill(0);for(let u=0;u<n;u++){const h=u+r;if(!(h<0||h>=n))for(let d=0;d<n;d++){const f=d+o;f<0||f>=n||(c[u*n+d]=l[h*n+f])}}}this.originX+=o*this.dx,this.originZ+=r*this.dx,(a=this.layer)==null||a.shift(o,r)}}waveForce(t,e,n,i=1/0){const o=i*i,r=this.n,{p:a,h:c}=this,l=1/(2*this.dx),u=this.dx*this.dx;let h=0,d=0,f=0;for(let p=1;p<r-1;p++){const x=p*r;for(let g=1;g<r-1;g++){const m=x+g,_=a[m];if(_<=0)continue;const y=(c[m+1]-c[m-1])*l,v=(c[m+r]-c[m-r])*l,P=-_*y*u,T=-_*v*u,M=this.originX+g*this.dx-t,C=this.originZ+p*this.dx-e;M*M+C*C>o||(h+=P,d+=T,f+=C*P-M*T)}}n[0]=h,n[1]=d,n[2]=f}sample(t,e,n){const i=this.n,o=(e-this.originX)/this.dx,r=(n-this.originZ)/this.dx;if(o<0||r<0||o>=i-1||r>=i-1)return 0;const a=o|0,c=r|0,l=o-a,u=r-c,h=c*i+a;return(t[h]*(1-l)+t[h+1]*l)*(1-u)+(t[h+i]*(1-l)+t[h+i+1]*l)*u}height(t,e){return this.sample(this.h,t,e)}surfaceVelocity(t,e,n){n.x=this.sample(this.ux,t,e),n.z=this.sample(this.uz,t,e)}verticalVelocity(t,e){return this.sample(this.dhdt,t,e)}staticDepression(t,e){const n=this.sample(this.pSmooth,t,e)/(yl*Ml);return n>0?Math.min(n,Math.max(0,-this.sample(this.h,t,e))):0}fft2(t,e,n){const i=this.n,{rowRe:o,rowIm:r}=this;for(let a=0;a<i;a++){const c=a*i;for(let l=0;l<i;l++)o[l]=t[c+l],r[l]=e[c+l];this.fft1(o,r,n);for(let l=0;l<i;l++)t[c+l]=o[l],e[c+l]=r[l]}for(let a=0;a<i;a++){for(let c=0;c<i;c++)o[c]=t[c*i+a],r[c]=e[c*i+a];this.fft1(o,r,n);for(let c=0;c<i;c++)t[c*i+a]=o[c],e[c*i+a]=r[c]}if(n){const a=1/(i*i);for(let c=0;c<i*i;c++)t[c]*=a,e[c]*=a}}fft1(t,e,n){const i=this.n,o=this.rev;for(let a=0;a<i;a++){const c=o[a];if(c>a){let l=t[a];t[a]=t[c],t[c]=l,l=e[a],e[a]=e[c],e[c]=l}}const r=n?-1:1;for(let a=2;a<=i;a<<=1){const c=a>>1,l=i/a;for(let u=0;u<i;u+=a)for(let h=0;h<c;h++){const d=this.cosT[h*l],f=r*this.sinT[h*l],p=u+h,x=p+c,g=t[x]*d-e[x]*f,m=t[x]*f+e[x]*d;t[x]=t[p]-g,e[x]=e[p]-m,t[p]+=g,e[p]+=m}}}}class Eu{constructor(t,e){S(this,"waves");S(this,"felt");S(this,"self",null);S(this,"wv",{x:0,z:0});this.waves=t,this.felt=e}height(t,e,n){const i=this.self;if(i){const o=this.felt.height(t,e)-i.height(t,e);return this.waves.height(t,e,n)+o+i.staticDepression(t,e,o)}return this.waves.height(t,e,n)+this.felt.height(t,e)+this.felt.staticDepression(t,e)}verticalVelocity(t,e,n){return this.waves.verticalVelocity(t,e,n)+this.felt.verticalVelocity(t,e)-(this.self?this.self.verticalVelocity(t,e):0)}flowAt(t,e,n){var i;this.felt.layer?this.felt.layer.sample(t,e,n):n.x=n.z=n.w=0,this.felt.surfaceVelocity(t,e,this.wv),n.x+=this.wv.x,n.z+=this.wv.z,(i=this.self)==null||i.subtractFlow(t,e,n)}}class Fy{constructor(t,e){S(this,"waves");S(this,"sims");S(this,"selfs");S(this,"tmp",{x:0,z:0,w:0});S(this,"one",{x:0,z:0,w:0});this.waves=t,this.sims=e,this.selfs=e.map(()=>null)}height(t,e,n){let i=this.waves.height(t,e,n);for(let o=0;o<this.sims.length;o++){const r=this.sims[o],a=this.selfs[o];if(a){const c=r.height(t,e)-a.height(t,e);i+=c+a.staticDepression(t,e,c)}else i+=r.height(t,e)+r.staticDepression(t,e)}return i}verticalVelocity(t,e,n){var o;let i=this.waves.verticalVelocity(t,e,n);for(let r=0;r<this.sims.length;r++)i+=this.sims[r].verticalVelocity(t,e)-(((o=this.selfs[r])==null?void 0:o.verticalVelocity(t,e))??0);return i}flowAt(t,e,n){var o;n.x=n.z=n.w=0;const i=this.one;for(let r=0;r<this.sims.length;r++){const a=this.sims[r];i.x=i.z=i.w=0,a.layer&&a.layer.sample(t,e,i),a.surfaceVelocity(t,e,this.tmp),i.x+=this.tmp.x,i.z+=this.tmp.z,(o=this.selfs[r])==null||o.subtractFlow(t,e,i),n.x+=i.x,n.z+=i.z,n.w+=i.w}}}class xp{constructor(t,e){S(this,"waves");S(this,"render");this.waves=t,this.render=e}height(t,e,n){return this.waves.height(t,e,n)+this.render.height(t,e)}verticalVelocity(t,e,n){return this.waves.verticalVelocity(t,e,n)+this.render.verticalVelocity(t,e)}}const b0=.3,ky=1e3,Oy=9.81;class By{constructor(t,e=32){S(this,"sim");S(this,"layer");S(this,"hist",[]);S(this,"pd");S(this,"host");S(this,"tmp",{x:0,z:0,w:0});S(this,"wv",{x:0,z:0});this.host=t,this.sim=new Oh({n:e,dx:t.dx,dt:t.dt,depth:t.depth}),this.sim.computeVelocity=!0,this.layer=new Th(e,t.dx),this.sim.layer=this.layer,this.pd=new Float32Array(e*e)}reset(){this.hist.length=0,this.sim.h.fill(0),this.sim.q.fill(0),this.sim.dhdt.fill(0),this.layer.clear(),this.pd.fill(0)}step(t,e,n,i,o,r,a,c,l){const u=this.sim,h=this.host,d=u.size/2,f=h.originX+Math.round((e-i*3-d-h.originX)/h.dx)*h.dx,p=h.originZ+Math.round((n-o*3-d-h.originZ)/h.dx)*h.dx;for((this.hist.length===0||Math.abs(f-u.originX)>2||Math.abs(p-u.originZ)>2)&&(this.hist.length===0?(u.originX=this.layer.originX=f,u.originZ=this.layer.originZ=p):u.recenter(f+d,p+d)),this.hist.push({t,pressure:r.slice(),mom:a?a.slice():null,events:c.slice()});this.hist.length>1&&this.hist[1].t<=t-b0;)this.hist.shift();const x=this.hist[0].t<=t-b0?this.hist[0]:null,g=this.hist[this.hist.length-1];u.clearPressure(),this.pd.fill(0);const m=u.dt,_=(y,v)=>{const P=y.pressure;for(let M=0;M<P.length;M+=4)P[M+2]<=0||!h.inside(P[M],P[M+1])||(u.addForceSigned(P[M],P[M+1],v*P[M+2],P[M+3]),v<0&&u.splatTo(this.pd,P[M],P[M+1],P[M+2],P[M+3]));const T=y.mom;if(T)for(let M=0;M<T.length;M+=5)h.inside(T[M],T[M+1])&&((T[M+2]!==0||T[M+3]!==0)&&u.addHForce(T[M],T[M+1],v*T[M+2],v*T[M+3]),T[M+4]>0&&this.layer.addAirSigned(T[M],T[M+1],v*T[M+4]*m));for(const M of y.events)h.inside(M.x,M.z)&&(u.addSource(M.x,M.z,v*M.vol/m,l),M.imp>0&&u.addImpactSigned(M.x,M.z,v*M.imp/m,l),(M.ix!==0||M.iz!==0)&&u.addHForce(M.x,M.z,v*M.ix/m,v*M.iz/m))};_(g,1),x&&_(x,-1),u.step(),this.layer.step(m)}height(t,e){return this.sim.height(t,e)}verticalVelocity(t,e){return this.sim.verticalVelocity(t,e)}staticDepression(t,e,n){const i=this.sim.sampleArr(this.pd,t,e)/(ky*Oy);return i>0?Math.min(i,Math.max(0,-n)):0}subtractFlow(t,e,n){this.layer.sampleRaw(t,e,this.tmp),n.x-=this.tmp.x,n.z-=this.tmp.z,n.w=Math.min(bn.maxVoid,Math.max(0,n.w-this.tmp.w)),this.sim.surfaceVelocity(t,e,this.wv),n.x-=this.wv.x,n.z-=this.wv.z}}const Sl=.3,Vy=128,Hy=.5,Ia=1e3,Gy=1.2,Wy=.45,Xy=2e4;class vp{constructor(t=Vy,e=Hy){S(this,"render");S(this,"felt");S(this,"history",[]);S(this,"drops",[]);S(this,"hitBoats",null);S(this,"selves",null);S(this,"attached",[]);S(this,"pList",[]);S(this,"mList",[]);S(this,"sprayOwner",[]);S(this,"events",[]);S(this,"stepEvents",[]);S(this,"jetSeq",Co.seq);S(this,"sprayOut",0);S(this,"sprayIn",0);S(this,"acc",0);S(this,"time",0);S(this,"stepCount",0);S(this,"lastStepMs",0);S(this,"feltOnly",!1);this.render=new Oh({n:t,dx:e,dt:1/60}),this.felt=new Oh({n:t,dx:e,dt:1/30}),this.felt.layer=new Th(t,e),this.felt.computeVelocity=!0,this.render.layer=new Th(t,e)}attach(t){this.hitBoats=t,this.attached=t;const e=t.map(()=>new By(this.felt));this.selves=e,t.forEach((n,i)=>{const o=n.surface;if(o instanceof Eu&&o.felt===this.felt)o.self=e[i];else if(o instanceof Fy){const r=o.sims.indexOf(this.felt);r>=0&&(o.selfs[r]=e[i])}})}reset(t,e){for(const n of this.selves??[])n.reset();for(const n of[this.render,this.felt])n.h.fill(0),n.q.fill(0),n.dhdt.fill(0),n.originX=t-n.size/2,n.originZ=e-n.size/2;for(const n of[this.felt,this.render])n.layer&&(n.layer.clear(),n.layer.originX=n.originX,n.layer.originZ=n.originZ);this.history=[],this.drops.length=0,this.events=[]}update(t,e,n,i,o,r,a,c){var f,p;const l=Array.isArray(r)?bl(r):r,u=a&&(Array.isArray(a)?bl(a):a);if(this.sprayOwner.length=0,Array.isArray(a))for(const[x,g]of a.entries())this.sprayOwner.push(x,g.length);else a&&this.sprayOwner.push(0,a.length);const h=c?Array.isArray(c)?bl(c):c.slice():null;this.selves&&(this.pList=Array.isArray(r)?r:[r],this.mList=c?Array.isArray(c)?c:[c]:[]),this.acc+=t;let d=!1;for(this.acc>.1&&(this.acc=.1);this.acc>=this.render.dt;){this.acc-=this.render.dt,this.time+=this.render.dt;const x=performance.now();this.selves||this.history.push({t:this.time,data:l.slice(),mom:h});const g=e-i*10,m=n-o*10;for(const y of this.feltOnly?[this.felt]:[this.render,this.felt]){const v=y.originX+y.size/2,P=y.originZ+y.size/2;Math.hypot(g-v,m-P)>4&&y.recenter(g,m)}this.stepEvents.length=0,u&&this.flySpray(u);for(const y of Co.retired){if(y.seq<=this.jetSeq)continue;const v={t:this.time,x:y.x,z:y.z,vol:0,imp:0,ix:y.ix,iz:y.iz,src:-1};this.stepEvents.push(v),this.events.push(v)}this.jetSeq=Co.seq;const _=vn.wakeSmooth;if(!this.feltOnly){El(this.render,l);for(const v of this.stepEvents)wl(this.render,v,_);const y=this.render.layer;if(h&&y)for(let v=0;v<h.length;v+=5)(h[v+2]!==0||h[v+3]!==0)&&this.render.addHForce(h[v],h[v+1],h[v+2],h[v+3]),h[v+4]>0&&y.addAir(h[v],h[v+1],h[v+4]*this.render.dt);this.render.step()}if(++this.stepCount%2===0&&this.selves){const y=this.felt.layer,v=this.felt.dt;if(El(this.felt,l),h&&y)for(let T=0;T<h.length;T+=5)(h[T+2]!==0||h[T+3]!==0)&&this.felt.addHForce(h[T],h[T+1],h[T+2],h[T+3]),h[T+4]>0&&y.addAir(h[T],h[T+1],h[T+4]*v);const P=this.selves.map(()=>[]);for(const T of this.events)wl(this.felt,T,_),T.src>=0&&T.src<P.length&&P[T.src].push(T);this.events.length=0,this.felt.step(),y==null||y.step(v),this.feltOnly||(f=this.render.layer)==null||f.step(v);for(let T=0;T<this.selves.length;T++){const M=this.attached[T],C=M.quat,b=2*(C.x*C.z+C.w*C.y),w=1-2*(C.x*C.x+C.y*C.y);this.selves[T].step(this.time,M.comW.x,M.comW.z,b,w,this.pList[T]??qy,this.mList[T]??null,P[T],_)}}else if(this.stepCount%2===0){for(;this.history.length>1&&this.history[1].t<=this.time-Sl;)this.history.shift();const y=this.history[0],v=this.felt.layer,P=this.felt.dt;if(y&&y.t<=this.time-Sl){El(this.felt,y.data);const M=y.mom;if(M&&v)for(let C=0;C<M.length;C+=5)(M[C+2]!==0||M[C+3]!==0)&&this.felt.addHForce(M[C],M[C+1],M[C+2],M[C+3]),M[C+4]>0&&v.addAir(M[C],M[C+1],M[C+4]*P)}else this.felt.clearPressure();let T=0;for(;T<this.events.length&&this.events[T].t<=this.time-Sl;)wl(this.felt,this.events[T++],_);T&&this.events.splice(0,T),this.felt.step(),v==null||v.step(P),this.feltOnly||(p=this.render.layer)==null||p.step(P)}this.lastStepMs=performance.now()-x,d=!0}return d}flySpray(t){const e=this.render.dt,n=this.feltOnly?this.felt:this.render;let i=0,o=0,r=0,a=this.sprayOwner[1]??t.length;for(let h=0;h<t.length;h+=7){for(;h>=a&&r+2<this.sprayOwner.length;)r+=2,a+=this.sprayOwner[r+1];const d=t[h+6];if(d<=0)continue;const f=d*e;i+=d;const p=this.sprayOwner.length?this.sprayOwner[r]:-1;this.addEvent(t[h],t[h+2],-f/Ia,0,0,0,p),this.drops.length<Xy&&this.drops.push({x:t[h],y:t[h+1],z:t[h+2],vx:t[h+3],vy:t[h+4],vz:t[h+5],m:f,age:0,src:this.sprayOwner.length?this.sprayOwner[r]:-1})}const c=this.hitBoats;if(c)for(let h=0;h<c.length;h++){const d=c[h];Po[h*3]=d.comW.x,Po[h*3+1]=d.comW.y,Po[h*3+2]=d.comW.z,_p[h]=d.quat.clone().invert()}const l=.75*(Gy/Ia)*Wy/vn.sprayDrop;let u=0;for(let h=0;h<this.drops.length;h++){const d=this.drops[h],f=Math.hypot(d.vx,d.vy,d.vz),p=l*f;if(d.vx-=p*d.vx*e,d.vy-=(p*d.vy+9.81)*e,d.vz-=p*d.vz*e,d.x+=d.vx*e,d.y+=d.vy*e,d.z+=d.vz*e,d.age+=e,c&&$y(d,c,e)){this.addEvent(d.x,d.z,d.m/Ia,0,0,0,d.src),o+=d.m/e;continue}if(d.vy<0&&d.y<=n.height(d.x,d.z)){this.addEvent(d.x,d.z,d.m/Ia,d.m*-d.vy,d.m*d.vx,d.m*d.vz,d.src),o+=d.m/e;continue}d.age<5&&(this.drops[u++]=d)}this.drops.length=u,this.sprayOut=i,this.sprayIn=o}addEvent(t,e,n,i,o,r,a=-1){const c={t:this.time,x:t,z:e,vol:n,imp:i,ix:o,iz:r,src:a};this.stepEvents.push(c),this.events.push(c)}}function wl(s,t,e){s.addSource(t.x,t.z,t.vol/s.dt,e),t.imp>0&&s.addImpact(t.x,t.z,t.imp/s.dt,e),(t.ix!==0||t.iz!==0)&&s.addHForce(t.x,t.z,t.ix/s.dt,t.iz/s.dt),s.layer&&t.vol>0&&s.layer.addAir(t.x,t.z,t.vol*bn.sprayAir)}const Po=new Float64Array(64*3),_p=[],lr=new A,Da=new A,E0=new A;function $y(s,t,e){for(let n=0;n<t.length;n++){if(n===s.src&&s.age<.4)continue;const i=Po[n*3],o=Po[n*3+1],r=Po[n*3+2];if(Math.abs(s.x-i)>2.5||Math.abs(s.z-r)>2.5||s.y-o>1.5)continue;const a=t[n];lr.set(s.x,s.y,s.z).sub(a.origin).applyQuaternion(_p[n]);const{x:c,y:l,z:u}=lr,h=u>zs&&u<zn&&l>-.05&&l<us&&Math.abs(c)<Ki(u),d=u>-1.25&&u<-.05&&l>=us&&l<1.15&&Math.abs(c)<.38;if(!(!h&&!d))return lr.set(s.x-s.vx*e,s.y-s.vy*e,s.z-s.vz*e),a.velocityAt(lr,Da),E0.set(s.vx-Da.x,s.vy-Da.y,s.vz-Da.z).multiplyScalar(s.m),a.applyImpulse(E0,lr),a.sprayHit+=s.m,!0}return!1}const qy=new Float32Array(0);function bl(s){let t=0;for(const i of s)t+=i.length;const e=new Float32Array(t);let n=0;for(const i of s)e.set(i,n),n+=i.length;return e}function El(s,t){s.clearPressure();for(let e=0;e<t.length;e+=4)t[e+2]>0&&s.addForce(t[e],t[e+1],t[e+2],t[e+3])}const In=an[1],Se=Math.sign(an[0].z-In.z),Mp=-105,Yy=-112,T0=-110,Tl=-60,hr=-15,dc=1,$i={x:In.x,z:In.z+Se*20},ur=Wn-Se*150,Ja=Wn-Se*200,yp=3,jy=2*yp,Zy=In.x-12,Ky=4.5,ri=7,Al=5,Jy=2.6,yr=2.75,A0=-29,R0=1.5,C0=-17,P0=1,Qy=18,Lo=[0,3.4,11,22.6,37.3,54.5,73.5,93.8,114.9,136.7,158.8,181.1,203.6],Rl=[2.8,5.2,9.75,13.3,16,18.2,19.75,20.8,21.5,21.9,22.25,22.4,22.5],Sp=22.6;function Tu(s,t,e){if(e<=s[0])return t[0];for(let n=1;n<s.length;n++)if(e<=s[n])return t[n-1]+(t[n]-t[n-1])*(e-s[n-1])/(s[n]-s[n-1]);return NaN}const Au=Lo.map((s,t)=>t),tS=s=>s<=12?Tu(Au,Lo,s):Lo[12]+Sp*(s-12),eS=s=>s<=Lo[12]?Tu(Lo,Au,s):12+(s-Lo[12])/Sp,nS=s=>s>=Rl[12]?12:Tu(Rl,Au,Math.max(Rl[0],s));function Cl(s,t){const e=nS(t);return eS(tS(e)+Math.max(0,s))-e}function wp(s){let t=(Math.abs(Math.floor(s))*7919+104729)%2147483647||1;return()=>(t=t*16807%2147483647,t%1000003/1000003)}function L0(s){return Math.sqrt(-2*Math.log(Math.max(1e-9,s())))*Math.cos(2*Math.PI*s())}function I0(s){const t=wp(s*31+7);return Array.from({length:6},()=>({react:.15+t()*.35+(t()<.1?.4+t()*.5:0),maeduke:t()**3,deep:t(),stMean:.125+t()*.08,stSd:.03+t()*.03,adjust:.4+t()*.6}))}class D0{constructor(){S(this,"segs",[]);S(this,"len",0)}line(t,e,n,i){const o=Math.hypot(n-t,i-e);return this.segs.push({line:!0,x0:t,z0:e,x1:n,z1:i,len:o}),this.len+=o,this}arc(t,e,n,i,o){const r=n*(o-i);return this.segs.push({line:!1,cx:t,cz:e,r:n,a0:i,a1:o,len:r}),this.len+=r,this}at(t,e){let n=0;for(;n<this.segs.length-1&&t>this.segs[n].len;)t-=this.segs[n++].len;const i=this.segs[n];if(i.line){const o=i.len>0?t/i.len:0;e.x=i.x0+(i.x1-i.x0)*o,e.z=i.z0+(i.z1-i.z0)*o}else{const o=i.a0+t/i.r;e.x=i.cx+i.r*Math.sin(o),e.z=i.cz+i.r*Math.cos(o)}return e}project(t,e,n){let i=n,o=1/0;const r={x:0,z:0};for(let a=Math.max(0,n-3);a<=Math.min(this.len,n+30);a+=.5){this.at(a,r);const c=(r.x-t)**2+(r.z-e)**2;c<o&&(o=c,i=a)}return i}}const Rr=new A,Pl=new A(0,0,zn);function iS(s,t,e,n,i=0){const o=s.ph,r=o.forward(Rr),a=o.comW,c=Math.cos(i),l=Math.sin(i),u=t-a.x,h=e-a.z,d=u*c+h*l,f=h*c-u*l;let p;if(o.speed()>6){const y=o.vel,v=Math.atan2(y.x*f-y.z*d,y.x*d+y.z*f),P=o.speed(),T=Math.max(.35,Math.min(1,1-(P-6)/12));p=Math.max(-T,Math.min(T,v/.6+.2*o.angVel.y))}else p=Math.atan2(r.x*f-r.z*d,r.x*d+r.z*f)/.4+.3*o.angVel.y;p=Math.max(-1,Math.min(1,p));const x=2.5*n;s.input.steer+=Math.max(-x,Math.min(x,p-s.input.steer));const g=o.speed()*3.6,m=Math.max(0,Math.min(1,(g-25)/25)),_=s.input.steer<-.4?-m:0;s.input.leanX+=Math.max(-n*3,Math.min(n*3,_-s.input.leanX)),s.input.leanZ=0}function sS(s,t){return t<=yr+.1||s>t+.3?0:Math.max(.3,Math.min(1,.3+(t-s)*.25+t*.03))}class oS{constructor(t,e,n=Mp){S(this,"boats");S(this,"mode");S(this,"pitOut");S(this,"nSlow",3);S(this,"violations",[]);S(this,"finalCourse",null);S(this,"negotiated",0);S(this,"retreated",new Set);S(this,"slowT0",A0);S(this,"slowDt",R0);S(this,"dashT0",C0);S(this,"dashDt",P0);S(this,"order",[]);S(this,"humanIdx",5);S(this,"humanIdxCand",5);S(this,"humanIdxT",0);S(this,"rnd",Math.random);this.mode=e,this.pitOut=n,this.boats=t.map(i=>({lane:i.lane,ph:i.ph,human:i.human,skill:I0(1)[i.lane-1],input:{steer:0,throttle:0,leanX:0,leanZ:0},phase:"moored",course:i.lane,slow:i.lane<=3,want:i.lane,stTarget:.15,launched:!1,zTurn:In.z-Se*40,path:null,u:0,visitedBack:!1,cross150:null,st:null,flying:!1,late:!1,rightAcc:0,rightTurns:0,rightArmed:!0,prevBowZ:0,weave:0,need:yr,waitD:.5}))}reset(t){const e=I0(t);this.rnd=wp(t*131+17),this.violations=[],this.finalCourse=null,this.negotiated=0,this.retreated.clear(),this.nSlow=3,this.order=this.boats.map(n=>n.lane),this.humanIdx=this.humanIdxCand=-1,this.slowT0=A0-2+this.rnd()*4,this.slowDt=R0*(.7+this.rnd()*.8),this.dashT0=C0-2+this.rnd()*4,this.dashDt=P0*(.7+this.rnd()*.8),this.humanIdxT=0;for(const n of this.boats){const i=YM(n.lane);n.ph.reset(i.x,i.z,i.heading,0),n.skill=e[n.lane-1],Object.assign(n.input,{steer:0,throttle:0,leanX:0,leanZ:0}),n.phase="moored",n.course=n.lane,n.slow=n.lane<=3,n.launched=!1,n.path=null,n.u=0,n.visitedBack=!1,n.cross150=null,n.st=null,n.flying=n.late=!1,n.rightAcc=0,n.rightTurns=0,n.rightArmed=!0,n.weave=0,n.prevBowZ=n.ph.toWorld(Pl,Rr).z;const o=n.skill;n.waitD=this.rnd(),n.stTarget=o.stMean+o.stSd*L0(this.rnd)+(this.rnd()<.025?.11*L0(this.rnd):0);let r=0;this.mode==="free"&&n.lane>1&&!n.human&&(this.rnd()<o.maeduke*.6&&(r=1),r&&this.rnd()<o.maeduke*.5&&r++,r===2&&n.lane>=5&&this.rnd()<o.maeduke*.4&&r++),n.want=Math.max(1,n.lane-r)}this.assign()}get(t){return this.boats[t-1]}moored(t){return t<this.pitOut}humanIndexNow(t,e){const n=this.order.filter(r=>!this.get(r).human),i=t.ph.comW;if(e<this.pitOut+1||(i.z-Ur)*Se<8)return n.length;if(!t.visitedBack)return n.filter(r=>r<t.lane).length;let o=0;return n.forEach((r,a)=>{const c=a+1,l=this.get(r),u=l.phase==="uturn"||l.phase==="approach"?l.course:c;i.x>In.x?o+=dr(u)<i.x?1:0:o+=Ra(u)>i.x?1:0}),o}assign(){this.order.forEach((t,e)=>{const n=this.get(t);n.phase==="uturn"||n.phase==="approach"||n.phase==="race"||(n.course=e+1,n.slow=e+1<=this.nSlow)})}negotiate(){if(this.negotiated++,this.mode!=="free")return;const t=[...this.order],e=i=>this.get(i).ph.comW.z*Se;for(const i of[...t]){const o=this.get(i);if(o.human)continue;let r=t.indexOf(i);for(;r>o.want-1&&r>0;){const a=this.get(t[r-1]);if(a.human||e(i)-e(a.lane)<(a.lane===1?3:1)*yp)break;t[r]=a.lane,t[r-1]=i,r--}}if(t.some((i,o)=>i!==this.order[o])){for(const o of[...t]){const r=this.get(o);if(r.human||r.lane>3||this.retreated.has(o))continue;const a=t.indexOf(o);a>r.lane-1&&r.skill.deep>.7&&(t.splice(a,1),t.push(o),this.retreated.add(o))}const i=this.get(t[3]);t.slice(0,3).some(o=>o>=4)&&!i.human&&i.lane<=3&&i.skill.deep<.3&&(this.nSlow=4)}this.order=t,this.assign()}control(t,e){if(e<this.pitOut)return;this.negotiated<3&&e>=this.pitOut+3.5+1.5*this.negotiated&&this.negotiate();const n=this.boats.find(r=>r.human);if(n){const r=this.humanIndexNow(n,e);if(r!==this.humanIdxCand?(this.humanIdxCand=r,this.humanIdxT=0):this.humanIdxT+=t,this.humanIdxT>1&&r!==this.humanIdx&&(this.humanIdx=r,this.mode==="free")){const a=this.order.filter(c=>c!==n.lane);a.splice(Math.min(r,a.length),0,n.lane),this.order=a,this.assign()}this.mode==="fixed"&&(n.course=this.humanIdx+1)}let i=1/0;const o=[...this.boats].sort((r,a)=>r.course-a.course);for(const r of o)r.human||(i=this.planTurn(r,e,i));for(const r of this.boats)r.human||this.drive(r,t,e)}planTurn(t,e,n){const i=t.course,o=t.slow?this.slowT0+this.slowDt*(i-1):this.dashT0+this.dashDt*(i-this.nSlow-1),r=Math.max(.1,o-e);if(t.phase==="uturn"||t.phase==="approach"||t.phase==="race"){const _=t.phase==="uturn"&&t.path?t.path.len-t.u+(t.slow?Math.max(0,(ur-t.zTurn)*Se):0):t.slow?Math.max(0,(ur-t.ph.comW.z)*Se):0;return t.need=o-e>.5?_/r:_>0?8:0,(t.zTurn-Se*Al)*Se}const a=dr(i),c=Ra(i),l=Math.PI*ri+Math.max(0,a-c-2*ri),u=t.ph.comW;let h=0,d=u.z*Se;if(t.phase==="rush"||t.phase==="buoy"||t.phase==="moored"){const _=(a-N0(i))/2;h=Math.max(0,($i.z-u.z)*Se)+Math.PI*_,d=$i.z*Se}const f=_=>h+Math.max(0,d-_)+l+(t.slow?Math.max(0,ur*Se-_):0),p=Ur*Se+Qy+ri+Al*(6-i),x=Math.min(t.slow?In.z*Se+3:Ja*Se-5,n,d),g=Jy*r;let m;if(f(x)>=g)m=x;else if(f(p)<=g)m=p;else{let _=p,y=x;for(let v=0;v<30;v++){const P=(_+y)/2;f(P)>g?_=P:y=P}m=(_+y)/2}return m=Math.max(p,Math.min(x,m)),t.zTurn=m*Se,t.need=f(m)/r,m-Al}drive(t,e,n){const i=t.ph,o=i.comW,r=i.speed(),a=t.input,c=t.course,l=5+r*.4,u={x:0,z:0};let h=yr,d=0;if(t.phase==="moored"&&(t.phase="rush"),t.phase==="rush"){const f=N0(c),p=(dr(c)-f)/2,x=Math.max(l,10);u.x=o.x+Math.max(-x/4,Math.min(x/4,f-o.x)),u.z=o.z+Se*x;const g=Math.sqrt(5*p),m=($i.z-o.z)*Se;h=n<this.pitOut+t.skill.react?0:m<(r*r-g*g)/(2*2.2)+5?g:30,m<=.5&&(t.phase="buoy",t.path=new D0().arc((f+dr(c))/2,$i.z,p,-Math.PI/2,Math.PI/2),t.u=0)}if(t.phase==="buoy"&&t.path){t.u=t.path.project(o.x,o.z,t.u),t.path.at(t.u+3+r*.3,u);const f=t.path.segs[0].r;h=Math.sqrt(5*f),t.u>=t.path.len-1.5&&(t.phase="back")}if(t.phase==="back"){const f=dr(c);if(u.x=f,u.z=o.z-Se*l,h=t.need,d=Math.max(0,Math.min(1,(yr-.1-t.need)/.5)),(o.z-t.zTurn)*Se<=.5){const p=Ra(c),g=t.zTurn;t.path=new D0().arc(f-ri,g,ri,Math.PI/2,Math.PI).line(f-ri,g-Se*ri,p+ri,g-Se*ri).arc(p+ri,g,ri,Math.PI,1.5*Math.PI),t.u=0,t.phase="uturn"}}if(t.phase==="uturn"&&t.path&&(t.u=t.path.project(o.x,o.z,t.u),t.path.at(t.u+Math.max(4,l),u),h=Math.min(7,t.need),t.u>=t.path.len-1&&(t.phase="approach")),t.phase==="approach"){const f=Ra(c),p=i.toWorld(Pl,Rr).z,x=(Wn-p)*Se;h=t.slow&&t.cross150===null?Math.min(6,t.need):yr;const g=t.stTarget-(!t.slow&&c===this.nSlow+1?.03:0);if(!t.launched){const m=t.slow?92+18*t.waitD+2.3*Math.max(0,-8-n):200+20*t.waitD+2.3*Math.max(0,-12-n);d=Math.max(0,Math.min(1,(m-x)/6)),g-n-Cl(x,r)<2.5&&(d=0),u.x=f,u.z=o.z+Se*Math.max(l,8),(Cl(x,r)>=g-n||n>-2.5)&&(t.launched=!0)}if(t.launched){u.x=f,u.z=o.z+Se*l,h=40;const m=g-n-Cl(x,r);m>.02?a.throttle=Math.max(.35,1-t.skill.adjust*m*3):a.throttle=1}}d>0&&(t.weave+=e*2*Math.PI/5),iS(t,u.x,u.z,e,d*(25*Math.PI/180)*Math.sin(t.weave)),t.phase==="approach"&&t.launched||(a.throttle=sS(r,h))}observe(t,e,n){for(const i of this.boats){if(e<this.pitOut)continue;const o=i.ph.comW,r=i.ph.toWorld(Pl,Rr).z,a=l=>(i.prevBowZ-l)*Se<0&&(r-l)*Se>=0,c=l=>t+(e-t)*(l-i.prevBowZ)/(r-i.prevBowZ||1e-6);if(!i.visitedBack&&o.x>In.x+2&&(i.visitedBack=!0,(o.z-$i.z)*Se<-1&&e<0&&this.violations.push({lane:i.lane,kind:"小回り防止ブイの内側を通過",clock:e})),i.visitedBack&&i.cross150===null&&o.x<In.x&&a(ur)&&e<0&&(i.cross150=c(ur),this.boats.some(u=>u!==i&&u.cross150!==null&&u.cross150<i.cross150-1&&u.ph.comW.x<o.x-2)&&this.violations.push({lane:i.lane,kind:"150m見透し線の割り込み",clock:e})),i.st===null&&o.x<In.x+10&&a(Wn)&&e>this.pitOut+5&&e<-5?this.violations.push({lane:i.lane,kind:"スタートラインを早く越えた",clock:e}):i.st===null&&o.x<In.x+10&&a(Wn)&&e>this.pitOut+5&&e<10&&(i.st=Math.round(c(Wn)*100)/100,i.st===0&&c(Wn)<0&&(i.st=-.01),i.st<0?i.flying=!0:i.st>=dc&&(i.late=!0)),i.st===null&&e>=dc&&!i.flying&&(i.late=!0),i.visitedBack&&e<0){const l=i.ph.angVel.y;l<-.17&&i.ph.speed()<30/3.6?i.rightAcc+=-l*n:l>.17&&(i.rightAcc=0,i.rightArmed=!0),i.rightArmed&&i.rightAcc>Math.PI/3&&(i.rightArmed=!1,i.rightTurns++,i.rightTurns>1&&this.violations.push({lane:i.lane,kind:"右転舵",clock:e}))}i.prevBowZ=r}}decideCourses(){const t=n=>n.visitedBack&&n.ph.comW.x<In.x,e=[...this.boats].sort((n,i)=>t(n)!==t(i)?t(n)?-1:1:t(n)?i.ph.comW.x-n.ph.comW.x:n.lane-i.lane);if(e.forEach((n,i)=>{n.course=i+1,n.phase="race"}),this.finalCourse=e.map(n=>n.lane),this.mode==="fixed")for(const n of e)n.human&&n.course!==n.lane&&this.violations.push({lane:n.lane,kind:"進入固定違反（枠番と違うコース）",clock:0});return this.finalCourse}}function N0(s){return Zy-Ky*(s-1)}function dr(s){return In.x+jy*s}function rS(s,t,e){const n=s.comW,i=s.forward(Rr),r=n.x>In.x?Ht.x1-8:Ht.x0+8,a=n.z+(i.z>=0?12:-12),c=r-n.x,l=a-n.z,u=Math.atan2(i.x*l-i.z*c,i.x*c+i.z*l),h=Math.max(-.5,Math.min(.5,u/.4+.3*s.angVel.y));t.steer+=Math.max(-2.5*e,Math.min(2.5*e,h-t.steer)),t.throttle=0,t.leanX*=1-Math.min(1,e*3),t.leanZ=0}function Ll(s,t=!1){return s==null?t?"L":"":s<0?"F"+(-s).toFixed(2).replace(/^0/,""):s>=dc?"L"+s.toFixed(2):s.toFixed(2).replace(/^0/,"")}const Na=an[0],z0=-14,za=1/240,aS={steer:0,throttle:0,leanX:0,leanZ:0},cS=10;class bp{constructor(t,e={}){S(this,"wake",new vp);S(this,"visual");S(this,"boats",[]);S(this,"prestart");S(this,"entry");S(this,"humanInput",null);S(this,"clock",z0);S(this,"t",0);S(this,"result",null);S(this,"onFinish",null);S(this,"st",{});S(this,"acc",0);S(this,"firstTurnLeader",null);S(this,"buf",new Float32Array(3));S(this,"started",!1);S(this,"withdrawT",new Map);S(this,"prevBow",new Map);S(this,"useWake");this.visual=new xp(t,this.wake.render),this.useWake=e.wake??!0,this.entry=e.entry??"free";const n=Fh(1);for(let i=0;i<6;i++){const o=new Nr(new Eu(t,this.wake.felt),this.visual),r=e.humanLane===i+1;r&&iy(o),this.boats.push({lane:i+1,ph:o,cpu:new Cy(i+1,n[i]),human:r,retired:!1,removed:!1})}this.prestart=e.prestart??!0?new oS(this.boats,this.entry,e.pitOut??Mp):null,this.wake.attach(this.boats.map(i=>i.ph)),this.reset()}get me(){return this.boats.find(t=>t.human)??null}setPolicy(t){for(const e of this.boats)e.cpu.policy=t}setControl(t){for(const e of this.boats)e.cpu.control=t}reset(t=Math.floor(Math.random()*1e5)+1){const e=Fh(t);this.boats.forEach((n,i)=>{n.cpu.skill=e[i],n.cpu.reset(),n.retired=n.removed=!1;const o=n.cpu.startPos();n.ph.reset(o.x,o.z,0,this.t)}),this.prestart&&this.prestart.reset(t),this.wake.reset(Na.x,Na.z+5),this.clock=this.prestart?Math.min(Yy,this.prestart.pitOut-7):z0,this.acc=0,this.result=null,this.firstTurnLeader=null,this.started=!this.prestart,this.st={},this.withdrawT.clear(),this.prevBow.clear()}get inPrestart(){return!!this.prestart&&!this.started}order(){return this.inPrestart?[...this.boats].sort((t,e)=>this.prestart.get(t.lane).course-this.prestart.get(e.lane).course):[...this.boats].sort((t,e)=>{const n=t.cpu.capsized||t.retired,i=e.cpu.capsized||e.retired;return n!==i?n?1:-1:t.cpu.finished&&e.cpu.finished?t.cpu.finishTime-e.cpu.finishTime:t.cpu.finished?-1:e.cpu.finished?1:e.cpu.progress-t.cpu.progress})}step(t){var f;const e=this.boats,n=this.prestart,i=this.clock;if(n&&!this.started&&this.clock>=0){this.started=!0,n.decideCourses();for(const p of e)p.cpu.beginRace(p.ph.comW.x,p.ph.comW.z,n.get(p.lane).course)}const o=!!n&&n.moored(this.clock),r=e.filter(p=>!p.cpu.capsized&&!p.removed);if(!this.started)n.control(t,this.clock);else for(const p of e){if(p.removed)continue;const x=this.withdrawT.get(p);p.retired&&!p.human&&(x!==void 0||p.cpu.progress>w0)?(x===void 0&&this.withdrawT.set(p,this.clock),rS(p.ph,p.cpu.input,t),this.clock-(x??this.clock)>cS&&(p.removed=!0)):p.cpu.update(t,p.ph,this.clock,r)}const a=p=>p.human&&!(this.started&&p.cpu.finished)?this.humanInput??aS:this.started?p.cpu.input:n.get(p.lane).input;for(const p of e)this.prevBow.set(p,p.ph.toWorld(F0,U0).z);this.acc+=t;let c=0;for(;this.acc>=za&&c<16;){if(!o)for(const p of e)!p.cpu.capsized&&!p.removed&&p.ph.step(za,a(p),this.t);this.t+=za,this.acc-=za,c++}c>=16&&(this.acc=0);const l=e.filter(p=>!p.cpu.capsized&&!p.removed);zy(l.map(p=>p.ph)),gp(l.map(p=>p.ph));for(const p of e)p.human&&hp(p.ph);if(this.clock+=t,n){n.observe(i,this.clock,t);for(const p of e){const x=n.get(p.lane);x.st!==null&&(this.st[p.lane]=x.st),(x.flying||x.late)&&!p.retired&&(p.retired=!0,x.flying&&(p.cpu.flying=!0))}}else for(const p of e){if(this.st[p.lane]!==void 0)continue;const x=this.prevBow.get(p),g=p.ph.toWorld(F0,U0).z;x<Wn&&g>=Wn&&(this.st[p.lane]=i+(this.clock-i)*(Wn-x)/(g-x))}const u=this.useWake&&this.wake.update(t,Na.x,Na.z+5,0,0,e.map(p=>p.ph.pressure),e.map(p=>p.ph.spray),e.map(p=>p.ph.wakeMom));if(u)for(const p of e)this.wake.render.waveForce(p.ph.comW.x,p.ph.comW.z,this.buf,3.5),p.ph.extForce.set(this.buf[0],0,this.buf[1]),p.ph.extTorque.set(0,this.buf[2],0);if(!this.started)return u;const h=this.order();!this.firstTurnLeader&&h[0].cpu.progress>w0&&!h[0].retired&&(this.firstTurnLeader=h[0]);const d=!n||this.clock>=dc;if(!this.result&&d&&e.every(p=>p.cpu.finished||p.cpu.capsized||p.retired||p.removed)){const p=h.filter(m=>m.cpu.finished&&!m.retired),x=n?n.boats:[],g=x.filter(m=>m.flying||m.late).length;this.result={order:p.map(m=>m.lane),move:p.length?mp(p[0].cpu,p[0]===this.firstTurnLeader):"",flying:e.filter(m=>m.cpu.flying).map(m=>m.lane),capsized:e.filter(m=>m.cpu.capsized).map(m=>m.lane),late:x.filter(m=>m.late&&!m.flying).map(m=>m.lane),st:{...this.st},course:Object.fromEntries(e.map(m=>[m.lane,m.cpu.course])),cancelled:g>=5,violations:n?[...n.violations]:[]},(f=this.onFinish)==null||f.call(this,this.result)}return u}}const U0=new A,F0=new A(0,0,zn),Il=.8;function lS(s){const t=document.createElement("canvas");t.width=256,t.height=128;const e=t.getContext("2d");e.fillStyle="#f6f6f2",e.fillRect(0,0,256,128),e.strokeStyle="#d8262b",e.lineWidth=10,e.strokeRect(5,5,246,118),e.fillStyle="#d8262b",e.font="bold 84px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(s,128,70);const n=new Ji(t);return n.colorSpace=Ve,n}class hS{constructor(t){S(this,"group",new He);S(this,"buoy",new He);S(this,"surface");this.surface=t;const e=new Qt({color:16742930,roughness:.45}),n=new Qt({color:16119285,roughness:.5}),i=new Dt(new Hs(.6,24,16),e);i.scale.set(1,.85,1),i.position.y=.3,this.buoy.add(i);const o=new Dt(new xn(.61,.61,.14,24,1,!0),n);o.position.y=.3,this.buoy.add(o);const r=new Dt(new xn(.03,.03,1.1,8),n);r.position.y=1.2,this.buoy.add(r);const a=new Dt(new $e(.45,.3),new Qt({color:16742930,roughness:.7,side:Ue}));a.position.set(0,1.6,.24),a.rotation.y=Math.PI/2,this.buoy.add(a);for(const u of this.buoy.children)u.castShadow=!0;this.group.add(this.buoy);const c=new Qt({color:9080724,roughness:.6,metalness:.3}),l=new Qt({map:lS("200"),roughness:.6});for(const[u,h]of[[Ht.x0-1.2,1],[Ht.x1+1.2,-1]]){const d=new Dt(new xn(.1,.12,4,8),c);d.position.set(u,Il+2,Ja),this.group.add(d);const f=new Dt(new $e(3,1.5),l);f.position.set(u+h*.06,Il+3.6,Ja),f.rotation.y=h*Math.PI/2,this.group.add(f);const p=new Dt(new re(.08,1.5,3),new Qt({color:4473924}));p.position.set(u,Il+3.6,Ja),this.group.add(p)}}update(t){this.buoy.position.set($i.x,this.surface.height($i.x,$i.z,t)-.15,$i.z)}}const Ep=null,wo=[.052,.0997,.231,-.1143,-.175,.6666,-.499,.0873,-.1632,.8984,-.1323,.5702,-.282,-.2235,-.0382,-.3422,-.3185,.0523,.0247,-.1684,-.0017,-.4133,-.1026,-.1327,-.0668,.5865,-.3303,-.1661,-.0576,.1936,.0687,-.0026,.0321,.4142,.4337,-.1153,-.0872,.3042,-.6619,-.4158,.1265,-.2871,.2592,-.0856,.0601,-.4948,.6116,-.1181,-.042,-.2351,-.1286,.2861,-.6119,-.0596,.2283,.3153,-.2817,-.1506,.2308,.4206,.0741,.2604,-.4846,.0888,.0767,.3585,.5338,.3782,.5554,-.1931,.5802,.245,.405,-.9903,.2055,-.1705,-.4457,.5419,.5135,.1167,.2262,-.084,.0331,-.3187,.1588,.1275,.2788,-.5228,.0708,.3689,-.4066,.4077,-.1061,.1509,.4231,-.4063,.3307,.3403,-.4305,.0281,-.1194,-.4826,-.3678,-.3218,-.2604,.3042,-.4773,.3658,-.1965,-.1331,.4471,-.5171,.3936,-.1716,-.2606,-.0857,.0369,.1021,.14,.4167,.1314,-.2006,.0881,-.0302,.2586,-.4817,.5619,-.2001,-.7112,-.4329,.2802,.0089,.4236,.1088,-.2846,-.1715,-.45,-.6475,-.5522,.2536,.2363,-.3843,-.1321,.7895,-.0271,-.3704,-.3347,-.2678,.1464,.1948,.3526,.1343,-.3239,-.2979,-.0828,-.0451,.0768,.0181,-.1169,.6105,.1814,-.0757,.1014,.1766,.1003,-.1019,.9835,-.2359,.2571,-.6839,-.084,.1474,.2959,.0351,-.3272,-.4187,.1053,.3775,-.2421,.2637,-.0033,-.0682,-.1738,-.5343,-.5889,-.2683,-.0883,.1331,.2526,-.4153,.4462,.1263,.3668,-.2107,-.0885,.2508,-.0559,.1141,-.635,-.3418,.8984,.3487,.0508,-.1137,6e-4,-.7202,-.0792,-.4068,.2886,-.5114,.5678,-.1565,-.0151,-.1196,-.1593,-.5727,-.006,.0183,.1108,.5116,.6194,-.0854,-.1029,-.2788,.065,-.2551,-.3439,.8162,-.2377,-.349,-1.1229,-.2055,-.027,1.9249,.3799,.1238,.056,-.0109,-.2773,.1483,.0712,.358,.7057,.2863,.4698,-.5934,.042,.3183,-.1588,.0221,.0158,.1488,.5364,.3557,-.1323,-.0506,.0308,-.9642,-.1148,-.1128,-.2995,-.2655,-2e-4,-.5829,.3511,-.4927,-.3595,.2342,-.1132,.0447,.1226,-.381,.1796,.0894,.3452,.2766,.2673,.5201,-.4049,.5122,.0029,-.4114,-.1559,-.0578,.3699,-.1332,.2787,-.7246,.4333,-.0244,.1957,-.4146,-.1378,.0501,1.0671,.0701,-.3447,-.0711,.1009,.2412,-.113,-.4029,-.0179,-.738,.2483,-.3954,-.2855,.7506,.6918,.0551,-.1887,-.1023,-.3846,.6399,-.0109,-.0964,.141,.5216,-.5942,.0348,-.4817,-.2327,-.4028,.7591,-.2468,.2009,-.1774,.1197,-.3172,-.1404,-.2402,.3878,-.3104,.2214,.1088,.6206,.0851,.2873,-.1467,-.4685,-.3169,.5633,-.4154,.0485,-.1369,-.0225,-.2121,.2044,-.4771,.0254,-.1038,.2728,-.0421,-.4729,-.312,-.1316,-.4117,.6361,-.1426,.4142,.6772,-.3992,-.3202,-.8695,.7777,-1.2139,.2714,-.3047,-.2544,-.1117,.1073,-.3812,-.0603,-.171,-.1961,.3452,-.0967,.085,.1572,.0459,-.103,-.5148,-.0785,-.2341,-.1868,-.1774,.2191,.1175,.3075,.4841,-.6704,.2546,.3314,-.2043,-.3859,.2243,-.3981,.126,.0357,.4084,.3808,.3199,.0745,-.5649,-.0976,-.6978,.333,-.2144,.186,-.247,-.5046,-.1724,.7239,-.5072,.3998,-.3318,.4399,.4277,-.1372,-.2482,.6847,.3216,-.1234,.1529,.1985,-.3892,-.4398,-.2881,-.606,-.0558,-.7712,.2519,.0047,-.6685,-.6848,-.0139,.7692,.4293,.0275,-.1583,-.1051,.0203,.5727,.0802,.47,.1878,.1703,-.2436,.0731,-.5632,-.1596,.5132,-.026,-.1029,.8127,.1594,-.2191,-.2784,-.2109,.3542,.1423,-.0495,.442,-.6351,.5285,.0475,.2724,-.087,.1471,-.2859,.1844,.1817,-.2602,.1172,-.0428,.3567,.2933,.1368,-.3135,.1325,.0396,.4265,-.5779,-1.1922,-.145,.0129,.1079,-.3696,-.3048,1.5474,-.4613,.0163,.4113,-.1835,.3638,-.2288,.5679,-.0572,-.2678,.0068,.163,.1649,.1736,.0304,.0585,.0457,.6145,-.4811,.1568,-.0295,.4733,.3979,-.1858,.2044,-.1929,-.924,.1527,.4967,-.5126,-.5057,.1497,-.6537,.9451,.6643,.3278,-.2865,-.4449,.1968,-.0342,-.1797,-.1542,.0654,.0803,-.0516,-.1106,.1955,-.1107,.3665,-.0294,-.0955,-.016,.1627,.0929,.2152,-.0618,.2553,.0413,-.4269,-.2711,.2213,-.2145,-.2213,-.4893,-.2273,-.5373,-.099,-.4433,-.1134,.3586,.6052,.1796,.0566,-.4495,.3873,.3785,.2001,.135,-.4199,.2747,-.1365,.0907,-.0191,-.2737,-.3843,.316,.1043,.276,.3436,-.1463,.2053,.441,-.479,.5476,.6268,.1891,-1.3481,.4047,.6808,-.0848,.3568,.2251,-.0447,.0687,.2835,.1414,-.2898,.0955,-.5114,.0776,.2459,.0374,-.1761,.0569,-.0145,.045,-.2291,-.487,.0319,-.283,.2396,-.2227,.0581,-.32,-.292,-.2895,.2986,.1757,-.1862,-.584,-.2406,-.0832,.1672,-.1324,.2425,-.2814,-.1039,.1095,-.6131,-.0731,-.0159,-.0352,-.0677,-.1396,-.2746,.1586,-.3343,-.3195,-.2645,-.3797,5e-4,.2589,-.1049,-.2202,-.4728,.0123,.0495,.71,.1224,-.3532,-.3228,-.3862,-.0503,.922,.1458,.0858,-.3686,.2349,-.4032,.4435,.0591,-.0964,-7e-4,-.1947,-.1611,-.6652,-.1292,-.2841,-.0694,-.6001,.1825,-.2726,.2627,-.0344,-.0522,-.3168,-.5161,-.3049,.4995,.132,.3041,-.0695,-1.1841,.2182,.1666,-.0648,-.2666,-.1887,.1203,-.1155,-.6803,.144,.111,-.0725,.0204,-.2671,.3756,.1031,.2319,.4522,.2167,-.3818,-.2223,-.0966,-.3107,-.1267,.0248,.3396,.5899,.2333,.0898,.311,.1142,.0765,-.5099,-.0366,-.0246,.2309,.1016,.1748,-.6352,-.0479,-.512,-.284,.0623,-.0584,.3757,-.1092,.073,-.3849,.0227,-.4374,.2388,.025,-.4051,-.043,-.1208,-.221,.2416,.1565,.3462,.07,-.0246,.277,.4125,.4292,-.1497,.2061,.0865,-.0644,-.0834,-.1182,.2751,.2219,.3219,.1801,-.9628,-.4324,.4286,.0454,-.0558,.023,-.2394,.2956,.1327,-.2615,-.1269,.0049,.2147,-.4716,-.4335,.4392,.0233,-.2001,-.591,-.8212,-.3987,-.0829,-.7877,.4864,-.2471,-.233,-.3962,.0699,.3527,.481,.0992,-.5672,-1.011,-.2619,-.217,.0644,.4567,-.0268,-.1333,.2884,.251,.3015,.1426,-.1438,.0589,.2394,-.1196,.2333,-.3488,-.0608,.0484,-.7022,-.3467,.3815,.3789,-.1232,-.0838,-.0733,.2179,.2016,.6439,-.1066,.5327,-.1077,-.1565,-.4864,.0687,.0367,.162,-.1575,-.3575,.081,.6327,-.0292,.1415,-.1529,-.0758,.1031,.0096,.3764,.296,.2013,-.0718,-.3736,-.2065,.2292,.9768,.0045,-.9101,.2422,-.6023,-.4177,-.4299,-.0258,.1208,.2232,-.5278,-.3058,-.9871,.2846,.0011,.2042,.0957,-.0635,.365,.3906,.2648,-.2504,-.0961,-.2735,-.6281,-.046,.1189,.1421,-.2842,1.0248,.326,-.3862,.4084,.3225,.3716,.2612,.3616,-.1261,-.1613,.4809,-.289,-.0634,-.0273,-.1348,-.87,-.4725,-.1633,.0612,.0377,-.3295,-.2445,-.3462,-.0805,-.0766,-.3754,-.1793,.3887,.1437,-1.9589,.6477,.2822,.1703,-.0087,-1.1367,-.7572,.2821,-.2431,.2382,-.6279,.0196,.078,-.2484,.1857,.3661,-.3874,.0084,.5295,.281,.0024,-.1153,-.0853,-.1669,-.4078,-.1517,-.1301,-.2895,.0775,.1255,-.1263,-.1459,-.8451,-.5161,-.3861,-.0075,-.179,-.6323,-.2755,.1175,-.2706,-.0331,.2047,.1666,-.7547,.7428,-.4035,-.0032,-.3558,.066,.2953,.0329,.0022,.1395,.0713,-.6444,-.5167,-.0751,.1313,-.2226,.4725,-.0724,.5012,.2784,.0446,-.585,-.41,.4368,.0079,.0547,.0282,.3236,.0135,-.4057,.0746,.1215,.7113,.0878,.1112,-.0335,.1564,-.2915,.2629,.1751,.5323,-.3519,-.01,-.1565,.2921,.1925,-.0362,-.3778,-.0478,-.3319,.2985,.0278,-1.053,-.0681,-.1847,.6325,.3759,-.5508,-.7435,-.3051,.2569,.0837,1.2698,.2625,-.1407,.055,-.0862,.6329,.5608,1.052,-.0063,.1724,-.3593,.1431,-.0756,.1505,-.0964,.2594,-.2204,-.0981,-.7232,-.0904,-.129,.9487,.1385,.0068,.0839,.8062,-.1957,-.119,-.241,.1865,-.3248,.404,-.1844,-.3592,-.5018,.1338,-.3269,-.0158,.209,.0532,.4373,-.1134,.7622,-.2956,-.2481,.1906,.1978,-.3811,-.0574,-.2095,.3393,-.1862,.5993,-.3355,.1445,-.7159,.4638,-.6774,-.2122,-.19,-.2392,.4405,.0075,.3119,-.2582,.0064,.2877,.0855,-.6802,.1778,-.2949,.0589,-.2949,-.0723,-.2604,-.021,-.141,.0086,.1602,-.3001,.2512,-.3422,.0621,.5211,.0024,-8e-4,.6603,-.1006,-.1693,.8769,.5795,.142,-.2938,.5659,-.1392,-.4236,.4407,.2783,-.3554,-.0224,.3737,.3921,.0826,.4492,-.1246,.083,.2712,-.027,-.0141,-.0246,-.183,-.395,-.35,-.1803,.2724,.1609,-.6046,-.3821,.607,.1009,.1139,-.3261,.5859,.2749,-.2944,-.1816,-.2813,-.3026,-.2648,.6157,.8085,.2289,.0374,.2406,-9e-4,-.1444,-.2523,-.0811,.3336,.1758,-.4895,.0696,.1649,.1229,-.0015,.0509,.1198,.0938,.0314,.5291,-.0587,-.4182,-.1657,1.1404,.1351,-.1914,.1254,-.004,.395,.245,-.1145,-.3986,-.5032,-.3532,.387,.2311,-.2801,-.1573,.1619,.1826,-.4461,.1085,.1026,-.0674,.1428,-.1776,.0134,.2951,.1401,.2635,-.6989,-.2298,-.5897,.1319,.5534,.3868,.1844,.0309,.2558,.2712,-.2001,.0302,-.2268,-.4805,.2781,-.2269,.3974,.3366,-.0463,-.2306,.2539,.196,.0824,-.5515,-.1863,-.3108,.1267,.417,.5251,-.0258,-.3174,-.0224,-.3395,-.1836,.7094,.3805,.5182,-.6559,.5873,-.1391,.1994,.4046,.3153,.1883,-.4973,.157,-.3797,-.1673,-.3901,.4507,.1702,.2514,-.0662,.0697,-.0414,-.3472,.2097,-.33,-.1905,.1042,.2624,.1578,.284,.4274,-.4089,-.8719,-.0994,-.3891,.9647,-.2335,.2236,.1925,3.5521,-.1215,-.7586,-.1047,-.5242,-.3038,.4599,.0955,.366,.5031,-.3636,1.3842,.4996,.117,.3163,-.2983,-.1067,-.0409,-.157,-.1513,-.1327,-.1339,-.7409,.3663,.7091,.5933,-1.59,.0971,1.0508,1.0302,.8056,-.9898,-.4384,-.2211,.4804,.0508,-.4163,.3402,-.174,-.742,-.2887,-.1884,.5021,.2935,-.2781,-.1999,-1.2534,.1801,.3927,.3099,.0469,-.3148,.0692,.1517,.4101,.1882,-.3762,-.0936,.3145,.0227,.1142,.6335,-.8461,.2619,.1527,-.0918,-.2006,.3136,.0669,.2202,-.2043,-.2608,-.5152,.1729,.3033,-.5295,-.1391,.1681,.1595,-.0991,-.0526,-.372,-.2602,.2498,.3066,-.4253,-.164,-.3975,.5268,.8221,1.2134,-.4528,.1683,.469,-.162,-.3394,-.3091,.0952,.6132,.3578,.1926,-.0316,.0288,-.2843,-.4664,-.2885,.3285,-.1234,-.4629,-.8228,.1211,-.1355,-.2733,-.1412,-.1103,.1099,-.0182,-.2166,.1555,.1089,.0807,.0106,1.1544,.0169,.1919,.2818,-.3606,-.3549,.8679,-.112,-.3042,-.1574,-.2721,.1089,-.2906,.044,-.3368,.1875,.2099,-.331,-.9379,-.2697,-.0888,-.0578,-.3449,-.139,-.1151,-.1874,.3073,.2625,-.6414,-.2764,-.3718,.0649,-.2246,.1304,.061,-.6725,-.2076,-.264,-.1635,-.0969,-.4193,.2651,-.4148,.1395,-.1298,-.2298,-.1379,-.1562,.0856,-.0288,.1951,.013,-.1387,-.1712,-.0659,.3174,.3785,.495,-.0692,.2168,-.2104,.8001,-.1063,.5467,-.0091,-.6176,-.0177,-.3649,.1613,-.9656,.5652,-.3815,.0074,-.1838,-.0085,-.0776,-.5776,.1884,.3405,.0156,-.1324,-.4291,.0594,.1048,.4619,.0356,.0173,.0073,-.202,.0094,.0734,-.0139,-.1352,.6491,.3182,.123,.6079,.3966,-.9562,-.2832,-.4544,-.6285,-1.9115,-.2214,.0383,.5285,.0741,.308,.1488,-.1362,.4517,-.1289,.3888,-.2296,.0374,-.1409,-.0188,-.0546,-.1468,.2691,-.1681,-.1623,.0666,-.1568,-.1258,-.2069,-.0885,-.1051,-.7527,.1964,.9022,-.2131,.7978,-.2168,-.2335,.4588,-.0825,.2323,-.6424,-.0036,.2369,-.4063,-.0212,.3776,-.0567,.2093,.0114,.2683,.1928,.2075,-.0723,.2429,.028,-.2144,.3902,-.4138,.6219,-.3522,-.0222,-.1301,.5402,.0089,-.0485,.6468,.4754,-.5039,-.3111,.2805,-.0129,.2677,.2019,.3108,.0869,-.5134,.0122,-.1804,-.2145,.2511,-.2405,-.3863,-.5546,-.1726,.3016,-.2703,-.1331,.3888,.4747,.1149,-.9438,.25,-.1335,.17,.1711,.0296,.1275,.5744,.1459,.2584,-.1428,.1114,-.0366,.6437,-.0163,-.0434,-.1148,.0873,.4805,.8033,.2361,-.0013,.2465,.3107,.001,-.6975,.2092,-.9051,.3146,.1923,.1441,.3917,-.2707,.0532,-.2671,.0939,.1561,.1547,.249,.2347,-.1583,-.4239,-.1541,.1901,.2185,-.072,-.3068,-.1485,-.1089,-.0026,-.3477,.1124,.2658,.0265,-.2378,.0948,.0293,-.0805,.2793,-.2773,.0737,-.0189,-.1776,-.3171,-.0985,-.1258,-.3637,-.0281,-.1064,-.2192,.0251,-.0653,.8856,.187,.2358,-.2028,.3576,-.5036,.0739,.3592,.0582,.1666,-.4862,-.3861,-.1209,.0227,-.0066,.8257,.097,.2762,.2356,.0725,.11,-.1472,-.4132,-.089,-.2098,-.0846,.1482,.0407,.118,-.3419,-.1258,-.4932,.313,.3439,-.4942,-.3338,.023,-.1686,-.121,.1242,.882,-.7103,-.1648,.773,-.1793,.0823,.6959,.0037,-.0094,-.0716,.182,-.0572,.4505,-.3631,.0259,-.2248,.0903,-.2318,-.2154,-.0147,-.2703,.8673,-.2281,-.0162,.0761,-.326,-.326,-.1849,.1138,.3599,.8139,.4428,-.2123,.1976,-.243,-.0569,-.0781,.1767,.2648,-.8904,-.3469,.4828,.2859,-.437,-.2321,-.1383,.1606,-.5224,-.2217,.0119,.1781,.2026,-.2512,.2681,-.6045,-.0054,.073,.0312,.3313,.0133,-.0981,.0671,-.3051,-.2863,.0507,.04,.3669,-.0827,-.0126,-.1021,.1457,-.005,.3315,.5452,-.0118,-.4011,-.3596,-.0761,-.6483,-.6658,-.2013,-.2397,-.8923,-.0252,.3449,-.0574,.1405,.0425,.1287,-.0223,-.25,-.2744,-.788,-.6204,-.4565,-.1018,-.56,.2643,.379,-.6082,-.3166,.1911,.3102,.5127,.2232,.3322,.5461,-.0913,.1687,.4256,-.6428,.2942,.332,-.1613,.0983,-.214,-.3468,.3338,-.0224,-.0469,.0851,-.7055,.1965,.3108,.3523,.4283,-.0212,-.2246,.3577,.0511,-.0796,-.4558,.0541,-.149,-.0306,.4389,.1678,.0469,-.0293,-.0278,.1033,-.2123,.322,-.2686,.8027,-.0586,-.4421,.0156,-.0282,.5324,.0482,.2089,-.1169,-.0086,.2122,-.2149,-.4654,.0571,-.3724,.2699,-.3591,.1036,-.0505,-.2712,-.4515,.0967,-.5219,-.13,.2281,.01,-.1952,-.2014,.4526,-.2634,-.1825,.2364,.0815,-.279,.0389,.291,-.1027,.2748,-.2454,-.121,-.1526,-.2433,.024,.0191,.1111,-.2334,-.6841,-.0526,-.0663,-.2088,.1094,-.3137,.2422,.1288,-.2149,.4576,.7965,-.0225,-.1745,.1064,.5877,.0208,.3371,.1121,-.3982,.7517,.5048,.0092,-.5255,-.5058,-.1102,-.7647,.1812,-.1372,.3289,-.2326,-.4982,.3696,-.0175,-.1987,-.6928,-.1173,-.1429,-.8951,.0304,-1.4156,-.6906,.6704,-.1326,.1001,-.491,-.5881,.0724,.663,.294,.2255,.2737,.6178,.512,.7429,-.1253,.1001,-.352,.3098,-.0329,.197,-.3186,.2395,-.7625,.1188,.2349,.04,-.6888,.2593,.2293,.0977,.1855,-.1708,-.4098,.1396,-.5514,.0424,.3181,.2909,.084,.0171,-.6662,-.1844,.2179,.222,-.2096,-.1437,-.248,-.1035,-.2922,.1372,-.1329,-.5988,.6353,-.2868,.869,-.2227,.0244,.0737,.2303,-.0518,-.0044,-.2207,-.2894,.1949,.0531,-.3724,-.1217,-.137,.1381,.3033,-.0821,.4182,.2551,.6095,.3453,-.1562,.2427,.2083,.0861,-.1626,-.0873,-.3271,-.5715,-.063,.4876,-.4836,.0675,-.2935,-.651,-.0618,.0838,-.1896,.1265,.1361,-.4742,-.1329,.0882,.3024,-.0111,.3124,.1419,-.2783,.1589,-.0519,-.3129,-.119,-.3343,-.5123,-.6732,-.022,-.4646,-.4815,.0136,.0748,1.1355,.2413,-.0146,.0088,-.2543,-.7049,-.2675,-.0503,.3121,-.307,-.2244,-.6264,-.4911,.5626,-.8021,-.1174,-.3203,-.1775,-.2819,.0248,-.3185,-.1249,-.188,-.1332,.211,.2009,-.0666,-.3341,-.3597,-.1863,-.1017,-.2569,.4711,-.5582,-.992,-.3588,.043,-.446,-.189,.2178,.0863,.3692,.5748,-.2849,.0708,.6535,-.3171,.2154,-.2173,.1432,-.1539,-.0302,.6423,.3532,-.139,.0967,-.3317,-.4026,.1873,-.3968,-.0483,-.1357,.1812,.3791,.5375,.5191,.2405,.1881,-.0887,.3432,-.1681,.0592,-.1626,.1298,-.0993,-.0121,.26,-.2867,.0313,.7075,.4635,.0043,.2245,.0176,-.438,-.1917,-.6555,-.0774,.3205,-.036,.3271,-.7148,.1273,-.0629,-.0194,-.2316,-.1683,-.2284,.2263,.3796,-.4399,-.6172,.3871,.2128,.3324,.3297,-.0967,-.2311,-.0502,-.1469,-.1184,-.2156,.466,-.4767,-.4721,.1225,-.4121,.4408,.0496,-.429,.3484,-.0844,-.0151,.1111,-.5519,.188,-.0578,-.3456,.2017,-.2986,-.1201,.7339,.2685,-.3181,-.0487,-.0839,-.3447,.1009,-.1218,.0277,-.5832,-.3892,.5058,-.3129,-.512,-.3638,.0217,.3232,.1649,.1993,.0994,.1247,.0573,-.5313,-.2902,.3342,-.0324,.8602,-.248,.5021,.0643,-.1433,-.222,-.1775,-.5285,-.2956,-.0354,.1131,-.0392,-.5743,-.1739,.158,-.0387,.0828,.4249,.1493,.8358,.104,.0141,-.544,.1357,-.3403,-.0341,-.0438,-.4998,-.1333,1.2136,-1.5387,.9153,.9665,-1.0827,.3513,.7089,-.4864,-.0419,.7395,.3907,.6538,.9214,-.4492,.2358,-.2859,1.2136,-.6522,.26,-1.9116,.0145,-.6973,-.1324,.0807,.5862,.3077,-1.3091,.2753,-.0481,-.5456,-.7341,.1624,.0274,-1.1716,.402,-.89,-.2779,1.7532,.035,.4523,-1.0632,-.0171,-.9538,1.5488,-.8749,.6998,.8665,.3983,-.0561,.1762,.2505,-.1206,.1708,-.6786,-.7502,.1819,-.41,.1047,.6802,.2911,.366,-.2574,.17,.2437,.1215,.8035,-.1758,.0789,.3126,.1417,.2262,.4783,.2098,.3198,.0225,.2047,-.478,-.1782,.1915,.0955,.0734,-.0197,.5354,-.079,-.4161,-.7687,-.54,-.0312,.3499,.5308,.6669,-.4375,-.2451,.3311,-.2378,.1741,-.1519,-.2517,.4493,-.0816,-.3328,-.1613,.1132,.1013,-.2018,.5291,.778,-.0594,.2037,-.1495,.1942,.6523,-.1178,-.2838,-.0087,-1.0884,-.0642,-.294,.6651,.1292,.3167,-.2116,-.0251,.1446,.0718,-.0475,-.0465,-.3231,-.5785,.1433,.2402,-.5848,.0108,.1171,.8043,.2446,.6811,-.1643,.0803,.0602,.1799,-.6303,-.112,.1281,-.0716,.9977,-.2419,.0902,-.0593,.8918,.0482,.0482,-.2663,-1.0042,.0193,.6765,.7522,.1467,-1.5459,.8423,-.868,.7037,.461,.3745,-.2316,1.6575,-.4708,-.9171,.6716,-.2026,-.4751,-.2105,-1.0631,.0995,.1777,-.7882,.3664,-.4353,-.0771,.1899,-.4669,-.296,.9955,-.5341,.8462,-.7411,-.0903,-.0495,-1.5383,-.7518,.2938,-.1207,-.0977,-.3196,-.3081,-.2627,-.3068,.1416,.2334,-.5416,-.1115,.0576,-.0278,-.5778,.1044,.0999,.3749,.0735,.173,-.4189,-.3794,-.2424,.2014,.0032,.2234,.0448,.1381,.0608,-.038,.0941,.3175,.1824,-.568,-.1615,-.2103,.1405,.3769,-.3415,.033,-.1477,-.1282,-.0232,.0478,.341,.3608,-.2513,.1277,.184,.2757,-.3148,-.2585,-.0962,-.1266,-.0632,-.0218,-.4506,.4116,-.1629,.1988,-.0846,-.725,.3107,-.0877,-.0328,-.2813,.207,.1387,.2078,-.102,-.2051,.2562,-.4523,-.3973,-.2282,.1482,-.1832,-.3949,.1105,-.425,-.3311,-.0624,-.0624,-.3527,-.2214,.4838,-.2144,.6003,-.443,.2135,.1486,-.488,.2301,.3145,-.8641,.1618,-.2929,.053,-.2989,-.3443,-.0103,-.2997,.3481,.8935,.038,.1008,.4171,-.1023,.3439,.0989,-.1995,-.7214,.7228,.4788,.3737,-.3421,-.1691,-.5252,.6436,.0838,.7023,-.638,-.0119,-.223,-.1118,-.746,-.3002,.3504,-.17,-.1857,.2374,-.3755,.6044,-.1214,.7472,.2475,.2501,-.2449,.3443,-.1465,.074,.8647,-.7288,-.1583,-.362,-.3078,-.3895,.0595,-.5246,.1601,-.0129,.1922,-.3256,-.4007,-.5406,-.1679,-.0166,.3741,.1036,-.046,.3447,-.0646,-.2203,-.2395,-.2879,.116,-.1694,-.1973,.4204,.1484,-.0178,.063,-.4215,.4206,.2773,.4305,.1971,-.4637,.0864,.5578,-.0125,.1426,.1699,.1223,.5515,.1136,-.1998,.4654,.157,.1797,.0324,-.0646,-.0633,.4125,-.1418,-.3976,.5447,-.0165,.5202,.247,-.0486,.8432,.2815,.0648,.4974,-.2737,-.4945,-.2111,.1998,-.4268,.4595,-.4539,-.1262,-.1038,.3081,.2099,.2535,.2783,.4136,.0564,-.186,.11,.1691,-.0355,-.2624,-.1113,.2637,-.0583,.3676,.4148,-.4564,.1176,-.1756,-.035,-.4468,-.1262,-.1919,-.0858,-.1053,.5023,.0936,.0744,.1304,-.7501,-.6001,-.1479,-.297,-.3975,.3105,.4425,.0166,-.0504,.2847,.3771,-.3695,.0765,-.0743,-.2093,-.0296,.0059,-.1058,-.0935,.3658,-.0053,.2167,-.7225,-.1773,.0811,.1065,.0111,.0991,.0137,-.1931,-.5379,.3012,8e-4,-.5339,-.5304,.1084,.4395,-.0658,.5139,.222,-.1782,-.2841,-.0555,.2452,-.0858,.4977,.1901,1.1591,-.3255,-.4773,.0608,-.1262,-.1863,-.0757,.6818,.2672,-.5933,.1351,1.2284,.1126,.5602,-.6585,-.2243,.1134,.1895,-.5411,-.0919,-.7274,.0797,-.8626,-.6789,-.6835,.7376,-.2637,.5158,-.0448,-.2526,-.879,.1449,-.2842,-.2786,-.0235,.0035,-.8596,.2808,.4225,1.9425,.1865,.1474,-.6539,.4511,1.0151,.5314,-.5853,.0705,-.0431,-.3733,-.0057,.5275,-.1447,.2799,-.1409,-.6389,.0446,.1214,.1688,-.3542,-.8495,.4014,-.4298,-.5624,-.1416,.1333,-.1737,.5181,.0224,.3729,.4401,.0992,-.1691,-.3335,.0017,-.0702,.6641,.6164,-.2278,-.0892,-.0108,-.3175,.3102,.1694,.3961,-.0644,.1573,.1901,.1668,.3019,-.2625,.0534,.5168,.1454,-.172,-.4499,.9646,.5952,-.4134,.5039,.4318,-.0056,.366,.5739,.28,-.4388,-.5119,.3709,.008,.1176,-.4619,-.0825,.1948,.2744,-.414,.0122,-.7244,-.2893,-.1587,.1623,.1407,.4715,.3685,-.6406,-.2397,-.0599,-.1411,-.1212,-.1279,.1418,-.1094,-.2956,-.6667,-.4204,.1399,.0318,-.1626,.2044,.2144,.0117,.5117,-.1716,.1583,-.1121,.0331,-.334,.2198,-.3694,.3834,.156,-.3385,-.2045,.1787,-.3775,.3144,.0269,.4886,-.2729,-.375,.0016,-.2092,-.3233,.2622,.0118,.1475,-.1026,-.3797,.1155,.3201,.3123,-.3252,-.3579,.2267,.0782,-.1021,.1279,.0775,.0658,.0448,.2271,-.0419,-.102,-.4625,-.064,-.0442,.3935,-.0408,-.1698,.15,-.8708,-.3788,-.189,.2791,.4827,-.3855,.1648,.7597,-.8587,1.4752,-.0348,-.0378,.4385,.1036,1.1975,.1775,-.0139,-.2238,.5871,-.1753,.6488,-1.1056,-.6094,-1.3496,-.0491,-1.464,.241,-.0302,.6925,-.4754,-1.5749,.2688,-.3666,-.6593,-.9184,.5315,.1008,-.7579,.3333,-1.467,-.0382,1.2943,.1052,-.0204,-.8542,-.065,-.4071,1.0003,.0152,-.3233,.4338,-.2682,-.3275,-.0754,.0513,-.4123,-.6243,-.3569,.5592,-.1874,.0816,.4877,.466,.4637,.0619,-.2962,-.1971,-.385,-.0859,-.2407,-.0256,-1.5852,.5031,-.6328,.2414,-.1553,.4107,-.2167,-.4407,-.4341,.15,-.4675,.2037,-.1191,-.1023,-.2751,.1317,-.402,.368,.8351,.5278,.4069,.0483,-.0231,.2355,.4514,-.0589,-.4141,-.3175,.5955,.5472,.1922,-.0529,.1374,-.135,.3567,.3675,1.2816,-.2273,.6025,-.1695,.2555,1.3649,-.0455,-.8496,.7003,.7545,.7892,.0782,-.9928,-.042,.5828,-.0427,.3988,.214,.1146,.3206,.3463,-.4842,.519,-.0547,-.4423,.2403,-.6529,-.9016,-.6256,.7087,-2.1985,.4938,-.7186,.6819,-.0762,-.2355,-.2688,-.1384,-.3304,-.5917,-.4335,.297,.0166,.1855,.6121,.0413,.5163,.1246,.352,-.2308,-.0438,.4469,-.0196,-.3592,-.2391,.0073,.6638,.9851,.1752,.3263,-.3145,.4402,.5343,-.0552,.5096,-.2836,.668,.2274,-.2531,-.2283,.0665,-.2482,.2776,.6944,.1236,-.0125,-.686,-.3817,.2319,-.4372,-.5635,.0891,.6987,-.0165,.0073,.4953,-.1985,-.3436,.1207,-.2119,.2283,.2095,-.869,.056,-.0383,-.1347,-.0749,-.2724,.0457,.1741,-.2235,.4824,-.1568,-.0579,-.5898,-.2195,-.0479,-.14,-.5816,.1593,-.173,.1027,.1829,-.2993,-.3327,.7608,-.172,-.5499,-.2076,-.1409,-.1689,-.0809,-.0027,-.2239,-.1708,.4915,.523,.1513,.801,.1197,.5277,-.0048,-.0114,.0287,.1682,.0986,-.1369,.0663,.4944,.2018,-.355,-.1025,-.1181,-.1721,-.0507,.2,.4797,-.2173,.2034,.0818,.3183,-.3387,-.4901,-.6403,.5599,-.4074,-.4381,.3499,.2097,-.0767,-.2172,-.1487,-.1007,.3441,-.0811,-.4295,.0026,-.0351,-.0137,.039,-.2811,-.0746,-.1461,-.3059,.2695,-.2243,-.8003,.0306,.1389,-.223,.0745,.0028,.0165,-.1697,-.259,-.6412,-.33,-.3826,.0306,-.4731,.5063,-.0401,.049,-.3251,-.254,-.1239,-.0444,-.9509,-.1242,-.1633,-.3753,-.0091,.636,-.1005,.6273,-.1379,-.2861,-.2767,-.1377,.5263,-.0708,-.421,-.1934,-.8239,-.3288,-.3044,-.1284,-.3955,-.447,.1341,-.353,-.2153,.0597,-.8707,-.5222,-.5474,.0211,-.4666,-.75,-.0468,-.3584,.1802,-.3357,-.0576,.0742,-.4303,-.4034,-.2875,-.4132,-.399,.1272,-.1398,.229,.1817,.1005,.0043,.4207,-.3008,-.5483,-.0258,-.3413,-.2149,-.3656,-.4178,.3268,.1793,.0014,.547,-.3357,.2259,.0948,-.0761,.3839,.1434,-.1438,.4146,-.2405,.1757,-.0178,-.3064,.1576,-.1092,-.1735,.4856,.1185,.4395,.2703,-.3625,.0637,-.1403,.1617,.056,-.481,-.306,-.1129,-.1209,.2957,-.5646,-.169,.247,-.2256,-.1775,-.1653,-.1072,.0638,.4882,-.6038,.2596,-.5289,-.2283],ai=[1,2,3,4,5,6];function Kn(s,t){return s.ordered?t.join("-"):[...t].sort((e,n)=>e-n).join("=")}function $s(s){return s.split(/[-=]/).map(Number)}function uS(s,t=ai){const e=[],n=i=>{if(i.length===s.picks){e.push(Kn(s,i));return}for(const o of t)i.includes(o)||!s.ordered&&i.length&&o<i[i.length-1]||n([...i,o])};return n([]),e}function dS(s,t){const e=new Set,n=(i,o)=>{if(i===s.picks){e.add(Kn(s,o));return}for(const r of t[i]??[])o.includes(r)||n(i+1,[...o,r])};return n(0,[]),[...e]}const fS=s=>{const t=[];for(let e=0;e<s.length;e++)for(let n=e+1;n<s.length;n++)t.push([s[e],s[n]]);return t},ws=(s,t)=>{const e={...s};return e.winners=n=>n.length<e.need?[]:t(n,e),e},gn={win:ws({id:"win",name:"単勝式",short:"単勝",picks:1,ordered:!0,need:1,enabled:!0},(s,t)=>[Kn(t,[s[0]])]),exacta:ws({id:"exacta",name:"2連勝単式",short:"2連単",picks:2,ordered:!0,need:2,enabled:!0},(s,t)=>[Kn(t,s.slice(0,2))]),trifecta:ws({id:"trifecta",name:"3連勝単式",short:"3連単",picks:3,ordered:!0,need:3,enabled:!0},(s,t)=>[Kn(t,s.slice(0,3))]),quinella:ws({id:"quinella",name:"2連勝複式",short:"2連複",picks:2,ordered:!1,need:2,enabled:!1},(s,t)=>[Kn(t,s.slice(0,2))]),trio:ws({id:"trio",name:"3連勝複式",short:"3連複",picks:3,ordered:!1,need:3,enabled:!1},(s,t)=>[Kn(t,s.slice(0,3))]),wide:ws({id:"wide",name:"拡大2連勝複式",short:"拡連複",picks:2,ordered:!1,need:2,enabled:!1},(s,t)=>fS(s.slice(0,3)).map(e=>Kn(t,e))),place:ws({id:"place",name:"複勝式",short:"複勝",picks:1,ordered:!0,need:1,enabled:!1},(s,t)=>s.slice(0,2).map(e=>Kn(t,[e])))},pS=Object.keys(gn).filter(s=>gn[s].enabled),ke=100,Tp=.75,mS=.7;function Bh(s){return Number.isFinite(s)?Math.max(ke,Math.floor(s/10+1e-9)*10):ke}function Ap(s,t=()=>!0){let e=0;for(const[n,i]of s)t(n)&&(e+=i);return e}function gS(s,t,e=[]){const n=r=>!$s(r).some(a=>e.includes(a)),i=Ap(t,n)*ke*Tp,o=new Map;for(const[r,a]of t)o.set(r,n(r)&&a>0?Bh(i/a/ke*ke)/ke:null);return o}function xS(s,t,e){const n=gn[s],i={type:s,winners:[],specialPer100:0,returned:e.returned};if(e.order.length<n.need)return{...i,status:"void",netVotes:0};const o=f=>!$s(f).some(p=>e.returned.includes(p)),r=Ap(t,o),a=r*ke*Tp,c=n.winners(e.order).filter(o),l=c.map(f=>t.get(f)??0),u=l.reduce((f,p)=>f+p,0);if(u===0)return{...i,status:"special",specialPer100:mS*ke,netVotes:r};const h=c.map((f,p)=>({key:f,votes:l[p]})).filter(f=>f.votes>0);let d;if(h.length===1)d=[{...h[0],per100:Bh(a/u/ke*ke)}];else{const f=a-u*ke;d=h.map(p=>({...p,per100:Bh(ke+f/h.length/p.votes)}))}return{...i,status:"ok",winners:d,netVotes:r}}function vS(s,t){if(s.status==="void"||$s(t).some(n=>s.returned.includes(n)))return{kind:"refund",per100:ke};if(s.status==="special")return{kind:"special",per100:s.specialPer100};const e=s.winners.find(n=>n.key===t);return e?{kind:"hit",per100:e.per100}:{kind:"miss",per100:0}}const Rp=100,Ru=120;function _S(s,t=[]){const e=[...new Set([...s.flying,...s.late??[],...t])].sort((n,i)=>n-i);return s.cancelled?{order:[],returned:e}:{order:s.order.filter(n=>!e.includes(n)),returned:e}}class MS{constructor(t){S(this,"id");S(this,"title");S(this,"types");S(this,"pool");S(this,"closeAt");S(this,"state","open");S(this,"tickets",[]);S(this,"settlement",null);S(this,"nextId",1);S(this,"listeners",new Set);this.id=t.id,this.title=t.title,this.pool=t.pool,this.types=t.types??pS,this.closeAt=t.closeAt??null}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}changed(){for(const t of this.listeners)t(this)}tick(t,e){if(!(this.state!=="open"||this.closeAt==null)){if(t>=this.closeAt){this.close();return}e!=null&&this.pool.setProgress&&(this.pool.setProgress((t-e)/Math.max(1,this.closeAt-e)),this.changed())}}remaining(t){return this.state==="open"&&this.closeAt!=null?Math.max(0,this.closeAt-t):null}odds(t){var e;return gS(t,this.pool.votes(t),((e=this.settlement)==null?void 0:e.outcome.returned)??[])}buy(t,e,n,i){if(this.state!=="open")return"closed";if(!this.types.includes(e)||!gn[e])return"type";const o=[...new Set(n)];if(!o.length)return"empty";if(o.length>Ru)return"too-many";if(!Number.isInteger(i)||i<1||i>Rp)return"units";const r=o.length*i*ke;if(!t.spendFree(r))return"funds";for(const c of o)this.pool.add(e,c,i);const a={id:this.nextId++,type:e,picks:o.map(c=>({key:c,units:i})),cost:r,payout:0,claimed:!1};return this.tickets.push(a),this.changed(),a}close(){var t,e;this.state==="open"&&((e=(t=this.pool).setProgress)==null||e.call(t,1),this.state="closed",this.changed())}settle(t,e=[]){if(this.state==="open"&&this.close(),this.settlement)return this.settlement;const n=_S(t,e),i={};for(const o of this.types)i[o]=xS(o,this.pool.votes(o),n);for(const o of this.tickets){const r=i[o.type];o.payout=0;for(const a of o.picks){const c=vS(r,a.key);a.kind=c.kind,a.payout=c.per100*a.units,o.payout+=a.payout}}return this.settlement={outcome:n,result:t,types:i},this.state="settled",this.changed(),this.settlement}unclaimed(){return this.tickets.reduce((t,e)=>t+(e.claimed?0:e.payout),0)}claim(t){if(this.state!=="settled")return 0;let e=0;for(const n of this.tickets)n.claimed||(n.claimed=!0,e+=n.payout);return e>0&&t.addFree(e),this.changed(),e}}const Vh=[.55,.14,.12,.11,.06,.02],fr=s=>Math.min(1,Math.max(0,s));function yS(s,t){const e=1-fr((s.st-.05)/.4),n=fr((s.entrySpeed-46)/6),i=1-fr((s.brakeMargin+2)/6),o=1-fr((s.leanDelay+s.leanSpeed-.3)/.6),r=1-fr((s.slip-.08)/.17),a=t>=3?s.aggression:.5;return .3*e+.15*n+.1*i+.1*o+.1*s.tight+.1*s.grip+.1*r+.05*a-.5}function SS(s,t=6){const e=s.slice(0,6).map((i,o)=>Vh[o]*Math.exp(t*yS(i,o+1))),n=e.reduce((i,o)=>i+o,0);return e.map(i=>i/n)}function Dl(s,t){let e=1,n=1;for(const i of t){const o=s[i-1];if(e<=1e-12)return 0;n*=o/e,e-=o}return n}function Cp(s){let t=s>>>0||1;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const wS=s=>Math.sqrt(-2*Math.log(s()+1e-12))*Math.cos(2*Math.PI*s()),bS={win:1500,exacta:5e3,trifecta:25e3,quinella:1500,trio:3e3,wide:1500,place:800},Ua={read:.7,lane:.27,flat:.03};function ES(s,t){const e=gn[s],n=uS(e),i=Vh.map(l=>l/Vh.reduce((u,h)=>u+h,0)),o=(l,u)=>{const h=$s(u);if(e.ordered&&e.picks===h.length&&s!=="place")return Dl(l,h);if(s==="place"){const p=h[0];let x=l[p-1];for(let g=1;g<=6;g++)g!==p&&(x+=Dl(l,[g,p]));return x}let d=0;const f=(p,x)=>{x.length||(d+=Dl(l,p));for(const g of x)f([...p,g],x.filter(m=>m!==g))};return f([],h),d},r=n.map(l=>Ua.read*o(t,l)**.85+Ua.lane*o(i,l)**.85),a=r.reduce((l,u)=>l+u,0),c=new Map;return n.forEach((l,u)=>c.set(l,(1-Ua.flat)*(r[u]/a)+Ua.flat/n.length)),c}function k0(s,t,e){var a;const n=Cp(e.seed*7919+s.length*104729+s.charCodeAt(0)),i=((a=e.total)==null?void 0:a[s])??bS[s],o=e.noise??.3,r=new Map;for(const[c,l]of ES(s,t))r.set(c,Math.max(1,Math.round(i*l*Math.exp(o*wS(n)-o*o/2))));return r}class TS{constructor(t,e){S(this,"chances");S(this,"early",new Map);S(this,"late",new Map);S(this,"mine",new Map);S(this,"progress",.35);S(this,"opts");this.chances=SS(t),this.opts=e}setProgress(t){this.progress=Math.min(1,Math.max(this.progress,t))}crowd(t){return this.early.has(t)||(this.early.set(t,k0(t,this.chances,{...this.opts,seed:this.opts.seed*2+1})),this.late.set(t,k0(t,this.chances,{...this.opts,seed:this.opts.seed*2+2}))),{a:this.early.get(t),b:this.late.get(t)}}votes(t){const{a:e,b:n}=this.crowd(t),i=this.progress,o=Math.min(1,i/.6)*.5,r=i*i*.5,a=this.mine.get(t),c=new Map;for(const[l,u]of e)c.set(l,Math.max(1,Math.round(u*o+(n.get(l)??0)*r))+((a==null?void 0:a.get(l))??0));return c}add(t,e,n){let i=this.mine.get(t);i||this.mine.set(t,i=new Map),i.set(e,(i.get(e)??0)+n)}}const O0=12,AS=180,RS=30,CS=10,PS=40,LS=60,IS=300,DS=2,B0=["山田","佐藤","鈴木","高橋","田中","渡辺","伊藤","中村","小林","加藤","吉田","山本","松本","井上","木村","林","清水","森","池田","橋本","石川","前田","藤田","岡田","後藤","長谷川","村上","近藤","坂本","遠藤"],V0=["翔太","大輔","健太","拓也","直樹","和也","誠","亮","剛","隆","浩二","慎吾","雄一","勇気","蓮","颯","陸","優","学","修"];function NS(s){const t=Cp(s*7919+13),e=new Set,n=[];for(;n.length<6;){const i=`${B0[Math.floor(t()*B0.length)]} ${V0[Math.floor(t()*V0.length)]}`;e.has(i)||(e.add(i),n.push(i))}return n}class Pp{constructor(t,e={}){S(this,"session");S(this,"daySeed");S(this,"phase","open");S(this,"raceNo");S(this,"day",1);S(this,"sale");S(this,"seed",0);S(this,"skills",[]);S(this,"racers",[]);S(this,"result",null);S(this,"scratched",[]);S(this,"history",[]);S(this,"t",0);S(this,"phaseAt",0);S(this,"opensAt",0);S(this,"closeAt",0);S(this,"oddsVer",0);S(this,"oddsT",0);S(this,"firstFinishAt",-1);S(this,"listeners",new Set);S(this,"saleSec");S(this,"closeToPitOut");S(this,"judgeSec");S(this,"resultSec");S(this,"grade");S(this,"now",()=>this.nowMs);this.session=t,this.daySeed=e.seed??Math.floor(Math.random()*1e6)+1,this.saleSec=e.saleSec??AS,this.closeToPitOut=e.closeToPitOut??RS,this.judgeSec=e.judgeSec??CS,this.resultSec=e.resultSec??PS,this.grade=e.grade??"一般戦",this.raceNo=Math.min(O0,Math.max(1,e.firstRace??1)),this.beginRace()}on(t){return this.listeners.add(t),()=>this.listeners.delete(t)}emit(t){for(const e of this.listeners)e(t)}get nowMs(){return Math.round(this.t*1e3)}get title(){return`第${this.raceNo}R ${this.grade}`}get toClose(){return this.phase==="open"?Math.max(0,this.closeAt-this.t):null}get inPhase(){return this.t-this.phaseAt}get phaseLeft(){return this.phase==="open"?this.toClose:this.phase==="closed"?Math.max(0,this.holdSec-this.inPhase):this.phase==="judging"?Math.max(0,this.judgeSec-this.inPhase):this.phase==="settled"?Math.max(0,this.resultSec-this.inPhase):null}get holdSec(){const t=this.session.prestart,e=t?t.pitOut-this.session.clock:0;return Math.max(0,this.closeToPitOut-e)}statusText(){const t=`第${this.raceNo}R`;switch(this.phase){case"open":{const e=Math.max(0,Math.ceil((this.toClose??0)-.001));return`${t} 締切まで ${Math.floor(e/60)}分${String(e%60).padStart(2,"0")}秒`}case"closed":return`${t} 発売締切`;case"race":{const e=this.session.clock,n=this.session.prestart;return n&&e<n.pitOut?`${t} 発売締切 まもなくピットアウト`:this.session.inPrestart?`${t} 待機行動`:`${t} レース中`}case"judging":return`${t} 確定待ち`;case"settled":return`${t} 確定 ${this.orderText()}`}}orderText(){const t=this.sale.settlement;return t?t.result.cancelled?"レース不成立":t.outcome.order.slice(0,3).join("-")||"ゴール艇なし":""}update(t){this.t+=t;let e=!1;switch(this.phase){case"open":this.oddsT+=t,(this.oddsT>=DS||this.t>=this.closeAt)&&(this.oddsT=0,this.sale.tick(this.nowMs,Math.round(this.opensAt*1e3)),this.sale.state==="open"&&(this.oddsVer++,this.emit({type:"odds"}))),this.sale.state!=="open"&&this.setPhase("closed");break;case"closed":this.inPhase>=this.holdSec&&this.setPhase("race");break;case"race":{e=this.session.step(t);const n=this.session;if(n.inPrestart)for(const i of n.boats)i.cpu.capsized&&!this.scratched.includes(i.lane)&&this.scratched.push(i.lane);this.firstFinishAt<0&&n.boats.some(i=>i.cpu.finished)&&(this.firstFinishAt=this.t),n.result?this.result=n.result:(this.firstFinishAt>=0&&this.t-this.firstFinishAt>LS||n.clock>IS)&&(this.result=this.cutOff()),this.result&&this.setPhase("judging");break}case"judging":if(e=this.session.step(t),this.inPhase>=this.judgeSec){const n=this.sale.settle(this.result,this.scratched);this.history.unshift(this.sale),this.history.length>24&&this.history.pop(),this.setPhase("settled"),this.emit({type:"result",settlement:n})}break;case"settled":e=this.session.step(t),this.inPhase>=this.resultSec&&this.nextRace();break}return e}skip(t){let e=!1;const n=1/30;for(let i=0;i<t;i+=n)e=this.update(n)||e;return e}next(){const t=this.phase,e=this.phaseLeft;if(e!=null)return this.skip(e+1/30);let n=!1;for(let i=0;i<30*600&&this.phase===t;i++)n=this.update(1/30)||n;return n}closeNow(){this.phase==="open"&&(this.sale.close(),this.setPhase("closed"))}unclaimed(){return this.history.reduce((t,e)=>t+e.unclaimed(),0)}claimAll(t){return this.history.reduce((e,n)=>e+n.claim(t),0)}pendingTickets(){return this.sale.state==="settled"?[]:this.sale.tickets}setPhase(t){if(t===this.phase)return;const e=this.phase;this.phase=t,this.phaseAt=this.t,this.emit({type:"phase",phase:t,prev:e})}nextRace(){this.raceNo++,this.raceNo>O0&&(this.raceNo=1,this.day++);const t=this.phase;this.phase="open",this.phaseAt=this.t,this.beginRace(),this.emit({type:"phase",phase:"open",prev:t})}beginRace(){this.seed=(this.daySeed*131+this.day*977+this.raceNo*7919)%99991+1,this.skills=Fh(this.seed),this.racers=NS(this.seed),this.session.reset(this.seed),this.result=null,this.scratched=[],this.firstFinishAt=-1,this.opensAt=this.t,this.closeAt=this.t+this.saleSec,this.oddsT=0,this.sale=new MS({id:`d${this.daySeed}-${this.day}-${this.raceNo}`,title:this.title,pool:new TS(this.skills,{seed:this.seed}),closeAt:this.nowMs+this.saleSec*1e3}),this.oddsVer++,this.emit({type:"race",raceNo:this.raceNo})}cutOff(){const t=this.session,e=t.prestart?t.prestart.boats:[],n=t.boats.filter(o=>o.cpu.finished&&!o.retired).sort((o,r)=>o.cpu.finishTime-r.cpu.finishTime),i=e.filter(o=>o.flying||o.late).length;return{order:n.map(o=>o.lane),move:n.length?mp(n[0].cpu,!0):"",flying:t.boats.filter(o=>o.cpu.flying).map(o=>o.lane),capsized:t.boats.filter(o=>o.cpu.capsized).map(o=>o.lane),late:e.filter(o=>o.late&&!o.flying).map(o=>o.lane),st:{...t.st},course:Object.fromEntries(t.boats.map(o=>[o.lane,o.cpu.course])),cancelled:i>=5,violations:t.prestart?[...t.prestart.violations]:[]}}}const H0={small:[512,288],big:[1024,256],odds:[1024,576],odds3:[768,480],card:[768,480]},Lp=25.78/58,zS="#0b1c2e",Hh="#123a58",Un="#ffd34d",Gh="#ff5a4d",rn="#8fb3cc",US=s=>s===1||s===5?"#111":"#fff";class pr{constructor(t){S(this,"kind");S(this,"canvas");S(this,"texture");S(this,"g");S(this,"key","");S(this,"draws",0);this.kind=t;const[e,n]=H0[t];this.canvas=document.createElement("canvas"),this.canvas.width=e,this.canvas.height=n,this.g=this.canvas.getContext("2d"),this.texture=new Ji(this.canvas),this.texture.colorSpace=Ve,this.texture.anisotropy=4}update(t,e,n){const i=FS(this.kind,t,e,n);if(i===this.key)return;this.key=i,this.draws++;const o=this.g,[r,a]=H0[this.kind];o.setTransform(1,0,0,1,0,0),o.fillStyle=zS,o.fillRect(0,0,r,a),o.textBaseline="middle",this.kind==="small"?kS(o,r,a,t,e):this.kind==="big"?OS(o,r,a,t,e,n):this.kind==="odds"?BS(o,r,a,t):this.kind==="odds3"?VS(o,r,a,t):HS(o,r,a,t),this.texture.needsUpdate=!0}dispose(){this.texture.dispose()}}function FS(s,t,e,n){const i=t.phaseLeft,o=i==null?"":Math.ceil(i-.001);let r="";if((s==="big"||s==="small")&&(t.phase==="race"||t.phase==="judging")){const c=t.session;r=`${c.inPrestart?"pre":"run"}|${Math.floor(c.clock)}|${c.order().map(l=>l.lane).join("")}`}const a=t.phase==="open"||s==="odds"||s==="odds3"?t.oddsVer:0;return`${t.raceNo}|${t.phase}|${a}|${o}|${e}|${n}|${r}`}function Qn(s,t,e,n,i){s.fillStyle=bc[t-1],s.fillRect(e,n-i/2,i,i),s.strokeStyle="rgba(255,255,255,.55)",s.lineWidth=Math.max(1,i*.05),s.strokeRect(e+.5,n-i/2+.5,i-1,i-1),s.fillStyle=US(t),s.font=`900 ${Math.round(i*.72)}px sans-serif`,s.textAlign="center",s.fillText(String(t),e+i/2,n+i*.03),s.textAlign="left"}function Ec(s,t,e,n,i){const o=t.split(/[-=]/).map(Number);return o.forEach((r,a)=>Qn(s,r,e+a*(i+i*.18),n,i)),o.length*(i+i*.18)}function ee(s,t,e,n,i,o="#fff",r="left",a=700,c){s.font=`${a} ${Math.round(i)}px sans-serif`,s.fillStyle=o,s.textAlign=r,s.fillText(t,e,n,c),s.textAlign="left"}const ds=s=>s==null?"欠":s>=1e3?String(Math.floor(s)):s.toFixed(1),G0=s=>s.toLocaleString("ja-JP"),Wh=s=>{const t=Math.max(0,Math.ceil(s-.001));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`};function Br(s,t,e){return[...s.sale.odds(t).entries()].filter(n=>n[1]!=null).sort((n,i)=>n[1]-i[1]).slice(0,e)}function Tc(s,t,e){const i=Br(s,t,999).findIndex(o=>o[0]===e);return i<0?null:i+1}function Ho(s,t,e,n,i){s.fillStyle=Hh,s.fillRect(0,0,t,e),ee(s,`${n.raceNo}R`,e*.25,e/2,e*.62,"#fff","left",900);const[o,r]=Xh(n);ee(s,o,e*1.6,e/2,e*.5,r,"left",900),ee(s,i,t-e*.25,e/2,e*.42,rn,"right",700)}function Xh(s){switch(s.phase){case"open":{const t=s.toClose??0;return[`締切まで ${Wh(t)}`,t<60?Gh:Un]}case"closed":return["発売締切",Gh];case"race":return[s.session.inPrestart?"待機行動":"レース中","#7fe0ff"];case"judging":return["確定待ち",Un];case"settled":return["確定",Un]}}function kS(s,t,e,n,i){if(n.phase==="settled"){Ho(s,t,48,n,"確定・払戻金"),Cu(s,0,48,t,e-48,n,!1);return}const r=i%3;Ho(s,t,48,n,["単勝オッズ","2連単 人気順","出走表"][r]);const a=56,c=(e-a-6)/6;if(r===0){const l=n.sale.odds("win");for(let u=1;u<=6;u++){const h=a+c*(u-.5);Qn(s,u,14,h,c*.78),ee(s,n.racers[u-1]??"",14+c,h,c*.5,"#fff","left",700,220);const d=Tc(n,"win",String(u));ee(s,ds(l.get(String(u))),t-110,h,c*.62,d===1?Un:"#fff","right",900),ee(s,d?`${d}番人気`:"",t-14,h,c*.4,rn,"right")}}else if(r===1)Br(n,"exacta",10).forEach(([u,h],d)=>{const f=d<5?0:1,p=a+c*(d%5+.5)*1.18,x=14+f*(t/2);ee(s,`${d+1}`,x+18,p,c*.48,rn,"right"),Ec(s,u,x+28,p,c*.7),ee(s,ds(h),x+t/2-34,p,c*.62,d===0?Un:"#fff","right",900)});else for(let l=1;l<=6;l++){const u=a+c*(l-.5);Qn(s,l,14,u,c*.78),ee(s,n.racers[l-1]??"",14+c,u,c*.6,"#fff","left",800)}}function Cu(s,t,e,n,i,o,r){const a=o.sale.settlement;if(!a)return;const c=a.outcome;if(a.result.cancelled||!c.order.length){ee(s,a.result.cancelled?"レース不成立 全舟券返還":"ゴール艇なし 全舟券返還",t+n/2,e+i/2,i*.14,Un,"center",900);return}const l=[a.result.move?`決まり手 ${a.result.move}`:"",c.returned.length?`返還 ${c.returned.join("・")}号艇`:""].filter(Boolean).join("　"),u=r?n*.45:n,h=r?i*.34:i*.17,d=e+(r?i*.36:h*.72),f=(u-28)/3;for(let P=0;P<Math.min(3,c.order.length);P++){const T=t+14+P*f;ee(s,`${P+1}着`,T,d,h*.4,rn,"left",800),Qn(s,c.order[P],T+h*.85,d,h)}r&&l&&ee(s,l,t+14,e+i*.8,i*.13,"#fff","left",800,u-28);const p=["win","exacta","trifecta"],x=r?e+i*.04:d+h*.7,g=r?t+u+10:t+14,m=r?n-u-24:n-28,_=p.length+(!r&&l?1:0),y=(e+i-x-(r?i*.04:4))/_;!r&&l&&ee(s,l,g,x+y*.5,y*.48,"#fff","left",800,m);const v=Math.min(y*.62,m*.075);p.forEach((P,T)=>{const M=a.types[P];if(!M)return;const C=x+y*(T+(!r&&l?1:0)+.5);if(ee(s,gn[P].short,g,C,v*.72,rn,"left",800),M.status==="void")return void ee(s,"不成立（返還）",g+m,C,v*.8,Un,"right",800);if(M.status==="special")return void ee(s,`特払い ${G0(M.specialPer100)}`,g+m,C,v*.8,Un,"right",800);const b=M.winners[0];if(!b)return;Ec(s,b.key,g+v*2.3,C,v*.85);const w=Tc(o,P,b.key);ee(s,G0(b.per100),g+m-v*3.4,C,v,Un,"right",900),ee(s,w?`${w}番人気`:"",g+m,C,v*.55,rn,"right",700)})}function OS(s,t,e,n,i,o){if(n.phase==="settled"){s.fillStyle=Hh,s.fillRect(0,0,t,e*.2),ee(s,`${hc} 第${n.raceNo}R 確定`,16,e*.1,e*.13,"#fff","left",900),ee(s,"払戻金（100コインあたり）",t-16,e*.1,e*.1,rn,"right"),Cu(s,0,e*.2,t,e*.8,n,!0);return}if(o){const d=Math.ceil(t*Lp)+12,f=t-d-12,[p,x]=Xh(n);ee(s,`第${n.raceNo}R`,d,e*.14,e*.15,"#fff","left",900),ee(s,p,d+e*.62,e*.14,e*.13,x,"left",900);const g=n.session,m=g.clock,_=g.prestart;let y="";if(_&&m<_.pitOut)y=`ピットアウトまで ${Math.ceil(_.pitOut-m)}秒`;else if(g.inPrestart)y=m>-60?`スタートまで ${Math.ceil(-m)}秒`:`スタートまで ${Wh(-m)}`;else if(n.phase==="judging")y="全艇ゴール";else{const M=g.order()[0];y=M.cpu.finished?"ゴール":`${Math.min(Vo,Math.max(1,M.cpu.laps+1))}周目 / ${Vo}周`}ee(s,y,d+f,e*.14,e*.11,"#fff","right",800);const v=g.order(),P=Math.min((f-e*.3)/6.9,e*.36);ee(s,g.inPrestart?"進入":"順位",d,e*.5,e*.09,rn,"left",800),v.forEach((M,C)=>{const b=d+e*.3+C*P*1.12;Qn(s,M.lane,b,e*.5,P);const w=_==null?void 0:_.get(M.lane),D=M.cpu.capsized?"転":w!=null&&w.flying?"F":w!=null&&w.late?"L":"";D&&ee(s,D,b+P/2,e*.5+P*.7,P*.34,Gh,"center",900)});const T=n.sale.odds("win");ee(s,"単勝",d,e*.86,e*.09,rn,"left",800);for(let M=1;M<=6;M++){const C=d+e*.3+(M-1)*P*1.12;Qn(s,M,C,e*.86,P*.42),ee(s,ds(T.get(String(M))),C+P*.48,e*.86,P*.3,"#fff","left",800)}return}const r=t*.27;s.fillStyle=Hh,s.fillRect(0,0,r,e),ee(s,hc,r/2,e*.13,e*.1,rn,"center",800),ee(s,`第${n.raceNo}R`,r/2,e*.36,e*.22,"#fff","center",900);const[a,c]=Xh(n);n.phase==="open"?(ee(s,"締切まで",r/2,e*.6,e*.1,"#fff","center",800),ee(s,Wh(n.toClose??0),r/2,e*.8,e*.24,c,"center",900)):ee(s,a,r/2,e*.7,e*.16,c,"center",900);const l=r+16,u=t-l-16,h=i%3;if(h===0){ee(s,"出走表",l,e*.1,e*.09,rn,"left",800);for(let d=1;d<=6;d++){const f=(d-1)%2,p=Math.floor((d-1)/2),x=l+f*(u/2),g=e*(.32+p*.27);Qn(s,d,x,g,e*.2),ee(s,n.racers[d-1]??"",x+e*.26,g,e*.15,"#fff","left",800,u/2-e*.3)}}else if(h===1){ee(s,"単勝オッズ",l,e*.1,e*.09,rn,"left",800);const d=n.sale.odds("win");for(let f=1;f<=6;f++){const p=(f-1)%3,x=Math.floor((f-1)/3),g=l+p*(u/3),m=e*(.4+x*.38);Qn(s,f,g,m,e*.24);const _=Tc(n,"win",String(f));ee(s,ds(d.get(String(f))),g+u/3-24,m,e*.22,_===1?Un:"#fff","right",900)}}else ee(s,"2連単 人気順",l,e*.1,e*.09,rn,"left",800),Br(n,"exacta",6).forEach(([d,f],p)=>{const x=p%3,g=Math.floor(p/3),m=l+x*(u/3),_=e*(.4+g*.38);ee(s,`${p+1}`,m+14,_,e*.12,rn,"right",800),Ec(s,d,m+22,_,e*.2),ee(s,ds(f),m+u/3-24,_,e*.2,p===0?Un:"#fff","right",900)})}function BS(s,t,e,n){Ho(s,t,64,n,n.phase==="open"?"オッズ":n.phase==="settled"?"確定時のオッズ":"締切時のオッズ");const o=78,r=250,a=(e-o-50)/6;ee(s,"単勝",20,o+14,26,rn,"left",800);const c=n.sale.odds("win");for(let f=1;f<=6;f++){const p=o+50+a*(f-.5);Qn(s,f,20,p,a*.7),ee(s,ds(c.get(String(f))),r-10,p,a*.55,Tc(n,"win",String(f))===1?Un:"#fff","right",900)}const l=n.sale.odds("exacta"),u=new Set(Br(n,"exacta",3).map(f=>f[0])),h=r+40,d=(t-h-20)/7;ee(s,"2連単（縦 1着 × 横 2着）",h,o+14,26,rn,"left",800);for(let f=1;f<=6;f++)Qn(s,f,h+d*f+d/2-18,o+50+a*.5-4,36);for(let f=1;f<=6;f++){const p=o+50+a*(f+.5)-a*.15;if(p>e-10)break;Qn(s,f,h+d/2-18,p,36);for(let x=1;x<=6;x++){if(f===x)continue;const g=`${f}-${x}`;ee(s,ds(l.get(g)),h+d*(x+1)-12,p,30,u.has(g)?Un:"#fff","right",800)}}}function VS(s,t,e,n){Ho(s,t,60,n,"3連単 人気順");const o=Br(n,"trifecta",10),r=(e-60-16)/5;o.forEach(([a,c],l)=>{const h=16+(l<5?0:1)*(t/2),d=68+r*(l%5+.5);ee(s,String(l+1),h+26,d,r*.42,rn,"right",800),Ec(s,a,h+36,d,r*.56),ee(s,ds(c),h+t/2-30,d,r*.5,l===0?Un:"#fff","right",900)})}function HS(s,t,e,n){var r;if(n.phase==="settled"){Ho(s,t,60,n,"払戻金"),Cu(s,0,60,t,e-60,n,!1);return}Ho(s,t,60,n,"出走表");const o=(e-60-12)/6;for(let a=1;a<=6;a++){const c=66+o*(a-.5);Qn(s,a,20,c,o*.8),ee(s,n.racers[a-1]??"",30+o,c,o*.55,"#fff","left",800);const l=n.session.st[a],u=(r=n.session.prestart)==null?void 0:r.get(a).course,h=n.phase==="race"||n.phase==="judging"?`${u??""}コース${l!=null?`  ST ${l<0?"F":""}.${String(Math.round(Math.abs(l)*100)).padStart(2,"0")}`:""}`:"";ee(s,h,t-20,c,o*.4,rn,"right",800)}}const W0=512,X0=288,$0=15,GS=["closed","race","judging"],Fa=220/352,WS=.22,XS=8;class $S{constructor(){S(this,"camera",new Dn(30,W0/X0,1,2500));S(this,"target");S(this,"hidden",[]);S(this,"users",[]);S(this,"stats",{calls:0,triangles:0,frames:0});S(this,"acc",1);S(this,"first",!0);S(this,"pos",new A);S(this,"look",new A);S(this,"lookNow",new A);S(this,"goalPos",new A);S(this,"center",new A);S(this,"fov",30);S(this,"waterHorizon",new te);this.target=new Ci(W0,X0,{depthBuffer:!0,generateMipmaps:!1,minFilter:Nn,magFilter:Nn}),this.target.texture.name="live"}hideSmall(t,e){t.updateMatrixWorld(!0);const n=new A;t.traverse(i=>{const o=i;!o.isMesh||!o.geometry||(o.geometry.boundingSphere||o.geometry.computeBoundingSphere(),o.getWorldScale(n),o.geometry.boundingSphere.radius*Math.max(n.x,n.y,n.z)<e&&this.hidden.push(o))})}get texture(){return this.target.texture}aim(t,e){const n=e.boats.filter(h=>!h.removed);this.center.set(0,0,0);for(const h of n)this.center.add(h.ph.origin);this.center.multiplyScalar(1/Math.max(1,n.length));const i=Math.max(12,...n.map(h=>Math.hypot(h.ph.origin.x-this.center.x,h.ph.origin.z-this.center.z)+6)),o=e.inPrestart||e.clock<3,r=o?this.center:e.order()[0].ph.origin;o?this.goalPos.set(-44,38,Math.max(-230,Math.min(150,r.z+45))):this.goalPos.set(-55,31,Math.max(-150,Math.min(150,r.z*.75)));const a=this.goalPos.distanceTo(r),l=Math.max(5,Math.min(60,2*Math.atan((o?i:10)/Math.max(1,a))*180/Math.PI)),u=this.first?1:1-Math.exp(-t*3);this.pos.lerp(this.goalPos,u),this.look.copy(r),this.lookNow.lerp(this.look,this.first?1:1-Math.exp(-t*5)),this.fov+=(l-this.fov)*(this.first?1:1-Math.exp(-t*4)),this.first=!1}cut(){this.first=!0}render(t,e,n,i){var T,M,C;if(this.acc+=t,this.acc<1/$0)return!1;this.acc%=1/$0;const o=this.camera;o.position.copy(this.pos),o.lookAt(this.lookNow),Math.abs(o.fov-this.fov)>.01&&(o.fov=this.fov,o.updateProjectionMatrix()),o.updateMatrixWorld();const r=[...this.hidden,...this.users].map(b=>b.visible);for(const b of this.hidden)b.visible=!1;for(const b of this.users)b.visible=!1;const a=i.uniforms,c=(T=a==null?void 0:a.uReflOn)==null?void 0:T.value,l=(M=a==null?void 0:a.uRefrOn)==null?void 0:M.value;a!=null&&a.uReflOn&&(a.uReflOn.value=0),a!=null&&a.uRefrOn&&(a.uRefrOn.value=0);const u=(C=a==null?void 0:a.uSkyHorizon)==null?void 0:C.value;a!=null&&a.uSkyHorizon&&u instanceof te&&(a.uSkyHorizon.value=this.waterHorizon.copy(u).multiplyScalar(WS));const h=i.mesh,d=h==null?void 0:h.position.clone();h&&h.position.set(Math.round(this.lookNow.x/Fa)*Fa,0,Math.round(this.lookNow.z/Fa)*Fa);const f=e.shadowMap.autoUpdate;e.shadowMap.autoUpdate=!1;const p=n.userData.sky,x=p==null?void 0:p.position.clone();p==null||p.position.copy(o.position);const g=e.getRenderTarget(),m=e.info,_=m.render.calls,y=m.render.triangles,v=m.autoReset;return m.autoReset=!1,e.setRenderTarget(this.target),e.clear(),e.render(n,o),this.stats={calls:m.render.calls-_,triangles:m.render.triangles-y,frames:this.stats.frames+1},m.autoReset=v,e.setRenderTarget(g),e.shadowMap.autoUpdate=f,x&&p.position.copy(x),h&&d&&h.position.copy(d),a!=null&&a.uReflOn&&(a.uReflOn.value=c),a!=null&&a.uRefrOn&&(a.uRefrOn.value=l),a!=null&&a.uSkyHorizon&&u&&(a.uSkyHorizon.value=u),[...this.hidden,...this.users].forEach((b,w)=>b.visible=r[w]),!0}dispose(){this.target.dispose()}}class Ip{constructor(t,e,n){S(this,"broadcast");S(this,"boards",[]);S(this,"slots",[]);S(this,"bigOverlay",null);S(this,"bigBoard",null);S(this,"program");S(this,"t",0);S(this,"paintT",0);S(this,"frustum",new xc);S(this,"m",new ae);S(this,"box",new ps);S(this,"liveShown",!1);this.program=t,this.broadcast=n;const i=new pr("small"),o=new pr("odds");this.boards.push(i,o);let r=0;for(const a of e)if(a.kind==="big"){const c=new pr("big");if(this.boards.push(c),this.bigBoard=c,this.slots.push({screen:a,board:c,live:!1,current:null}),n){const l=a.size.w*Lp,u=new Ei({map:n.texture,toneMapped:!0}),h=new Dt(new $e(l,a.size.h),u);h.name="screen:big-live",h.position.set(-a.size.w/2+l/2,0,.03),h.visible=!1,a.mesh.add(h),this.bigOverlay=h,n.users.push(h)}}else if(a.id==="board-s"){const c=new pr("odds3");this.boards.push(c),this.slots.push({screen:a,board:c,live:!1,current:null})}else if(a.id==="board-n"){const c=new pr("card");this.boards.push(c),this.slots.push({screen:a,board:c,live:!1,current:null})}else a.kind==="deck"?this.slots.push({screen:a,board:i,live:!!n,current:null}):a.kind==="odds"&&(a.px.w>=1024?this.slots.push({screen:a,board:o,live:!1,current:null}):this.slots.push({screen:a,board:i,live:!!n&&r++%2===1,current:null}));if(n)for(const a of this.slots)a.live&&n.users.push(a.screen.mesh);this.apply(!0)}get isLive(){return!!this.broadcast&&GS.includes(this.program.phase)}apply(t=!1){var n;const e=this.isLive;for(const i of this.slots){const o=i.live&&e?this.broadcast.texture:i.board.texture;if(o===i.current&&!t)continue;i.current=o,GM(i.screen,o);const r=i.screen.mesh.material,a=o===((n=this.broadcast)==null?void 0:n.texture);r.toneMapped!==a&&(r.toneMapped=a,r.needsUpdate=!0)}this.bigOverlay&&(this.bigOverlay.visible=e)}update(t,e,n,i,o){this.t+=t,this.apply();const r=this.isLive;if(this.paintT-=t,this.paintT<=0){this.paintT=.25;const a=Math.floor(this.t/XS);for(const c of this.boards)c.update(this.program,a,c===this.bigBoard&&r)}this.liveShown=!1,!(!this.broadcast||!r)&&(this.broadcast.aim(t,this.program.session),this.anyLiveVisible(i)&&(this.liveShown=this.broadcast.render(t,e,n,o)||this.liveShown))}cut(){var t;(t=this.broadcast)==null||t.cut()}anyLiveVisible(t){t.updateMatrixWorld(),this.m.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.m);for(const e of this.broadcast.users)if(!(!e.visible&&e!==this.bigOverlay)&&(this.box.setFromObject(e),this.frustum.intersectsBox(this.box)))return!0;return!1}dispose(){var t;for(const e of this.boards)e.dispose();(t=this.broadcast)==null||t.dispose()}}const on="コイン",q0=1e4,Dp="boatgame.wallet.v1";function qS(){var s;try{const t=(s=globalThis.localStorage)==null?void 0:s.getItem(Dp);if(!t)return null;const e=JSON.parse(t);return typeof e.free!="number"||typeof e.paid!="number"?null:{free:Math.max(0,Math.floor(e.free)),paid:Math.max(0,Math.floor(e.paid))}}catch{return null}}class Np{constructor(t={}){S(this,"_free");S(this,"_paid");S(this,"persist");S(this,"listeners",new Set);this.persist=t.persist??!0;const e=this.persist?qS():null;this._free=(e==null?void 0:e.free)??t.free??q0,this._paid=(e==null?void 0:e.paid)??t.paid??0}get free(){return this._free}get paid(){return this._paid}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}spendFree(t){return!(t>0)||!Number.isInteger(t)||t>this._free?!1:(this._free-=t,this.changed(),!0)}addFree(t){!(t>0)||!Number.isInteger(t)||(this._free+=t,this.changed())}addPaid(t){!(t>0)||!Number.isInteger(t)||(this._paid+=t,this.changed())}spendPaid(t){return!(t>0)||!Number.isInteger(t)||t>this._paid?!1:(this._paid-=t,this.changed(),!0)}reset(){this._free=q0,this._paid=0,this.changed()}changed(){var t;if(this.persist)try{(t=globalThis.localStorage)==null||t.setItem(Dp,JSON.stringify({free:this._free,paid:this._paid}))}catch{}for(const e of this.listeners)e(this)}}const Y0=[{id:"type",label:"式別"},{id:"lanes",label:"艇番"},{id:"amount",label:"金額"},{id:"confirm",label:"確認"},{id:"issued",label:"発券"}],YS=["1着","2着","3着"],jS=[1,2,5,10,50],Nl={closed:"締切ました",empty:"艇番を選んでください",units:"金額が正しくありません","too-many":`1枚 ${Ru}点までです`,funds:"残高が足りません",type:"この式別は発売していません"},Ze=s=>s.toLocaleString("ja-JP"),j0=s=>s==null?"-":s>=1e3?String(Math.floor(s)):s.toFixed(1),Bi=(s,t="")=>`<span class="tm-lane l${s}${t}">${s}</span>`,ka=s=>{const t=s.includes("=")?"=":"-";return $s(s).map(e=>Bi(e)).join(`<i class="tm-sep">${t}</i>`)},ZS=s=>{const t=Math.ceil(s/1e3);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`};function zp(s){var j;const{sale:t,wallet:e}=s,n=s.now??Date.now,i=document.createElement("div");i.className="tm-overlay",i.innerHTML=`
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
    </div>`,(s.parent??document.body).appendChild(i);const o=L=>i.querySelector(L);let r="type",a=t.types[0],c=[new Set,new Set,new Set],l=1,u="odds",h=1,d=a,f=null,p="";const x=()=>gn[a],g=()=>dS(x(),c.slice(0,x().picks).map(L=>[...L].sort((N,U)=>N-U))),m=()=>{c=[new Set,new Set,new Set],p=""};function _(){o(".tm-title").textContent=t.title;const L=t.remaining(n()),N=o(".tm-state");N.className=`tm-state s-${t.state}`,N.textContent=t.state==="open"?L==null?"発売中":`発売中 締切まで ${ZS(L)}`:t.state==="closed"?"締切":"確定",N.classList.toggle("soon",L!=null&&L<6e4),o(".tm-bal").innerHTML=`残高 <b>${Ze(e.free)}</b> ${on}`}function y(){const L=Y0.findIndex(N=>N.id===r);return`<ol class="tm-steps">${Y0.map((N,U)=>`<li class="${U===L?"on":U<L?"done":""}">${N.label}</li>`).join("")}</ol>`}function v(){const L=o(".tm-main");if(t.state==="settled")return void(L.innerHTML=M());if(t.state==="closed"){L.innerHTML=`<div class="tm-closed"><b>締切ました</b><p>レースの結果が確定すると、ここで払戻を受け取れます。</p><p>購入した舟券 ${t.tickets.length}枚 ／ ${Ze(t.tickets.reduce((rt,ct)=>rt+ct.cost,0))} ${on}</p></div>`;return}const N=g().length;let U="",J="";if(r==="type")U=`<p class="tm-ask">式別を選んでください</p><div class="tm-types">${t.types.map(rt=>`<button data-act="type" data-v="${rt}" class="${rt===a?"on":""}"><b>${gn[rt].short}</b><small>${gn[rt].name}</small><small>${P(rt)}</small></button>`).join("")}</div>`;else if(r==="lanes"){const rt=x();U=`<p class="tm-ask"><b>${rt.short}</b> 艇番を選んでください<small>（複数選ぶとフォーメーション）</small></p><div class="tm-grid">${Array.from({length:rt.picks},(ct,dt)=>{const it=c[dt].size===6;return`<div class="tm-row"><span class="tm-place">${rt.ordered?YS[dt]:""}</span>${ai.map(St=>`<button data-act="lane" data-r="${dt}" data-v="${St}" class="tm-lane l${St} ${c[dt].has(St)?"on":""}">${St}</button>`).join("")}<button data-act="all" data-r="${dt}" class="tm-all ${it?"on":""}">全</button></div>`}).join("")}</div>`,J=`<span class="tm-pts">${N}点</span><button data-act="back">戻る</button><button data-act="next" class="tm-go" ${N?"":"disabled"}>金額へ</button>`}else if(r==="amount")U=`<p class="tm-ask">1点あたりの金額</p>
        <div class="tm-amount"><button data-act="units" data-v="-1" aria-label="減らす">−</button><output><b>${Ze(l*ke)}</b> ${on}</output><button data-act="units" data-v="1" aria-label="増やす">＋</button></div>
        <div class="tm-chips">${jS.map(rt=>`<button data-act="setunits" data-v="${rt}" class="${rt===l?"on":""}">${Ze(rt*ke)}</button>`).join("")}</div>
        <p class="tm-sum">${N}点 × ${Ze(l*ke)} ＝ <b>${Ze(N*l*ke)}</b> ${on}</p>`,J='<button data-act="back">戻る</button><button data-act="next" class="tm-go">確認へ</button>';else if(r==="confirm"){const rt=g(),ct=t.odds(a),dt=rt.length*l*ke;U=`<p class="tm-ask">この内容で発券します</p>
        <div class="tm-confirm"><div class="tm-ctype">${x().name}</div>${rt.map(it=>`<div class="tm-cline">${ka(it)}<span class="tm-codds">${j0(ct.get(it))}倍</span><span>${Ze(l*ke)}</span></div>`).join("")}</div>`,J=`<span class="tm-pts tm-total">${rt.length}点 合計 <b>${Ze(dt)}</b><small>購入後の残高 ${Ze(e.free-dt)}</small></span><button data-act="back">戻る</button><button data-act="buy" class="tm-go" ${dt>e.free?"disabled":""}>発券</button>`}else U=f?`<p class="tm-ask">お取りください</p><div class="tm-slot"></div>${T(f)}`:"",J='<button data-act="again" class="tm-go">続けて買う</button>';L.innerHTML=`${y()}<div class="tm-step tm-scroll">${U}</div>${p?`<p class="tm-msg">${p}</p>`:""}${J?`<div class="tm-foot">${J}</div>`:""}`}const P=L=>{const N=gn[L];return N.picks===1?"1着を当てる":N.ordered?`1〜${N.picks}着を順番どおり`:`1〜${N.picks}着の組（順不同）`};function T(L){return`<div class="tm-paper"><div class="tm-ph"><b>舟券</b><span>${t.title}</span></div><div class="tm-pt">${gn[L.type].name}</div><div class="tm-pk">${L.picks.slice(0,4).map(N=>`<div>${ka(N.key)}<span>${Ze(N.units*ke)}</span></div>`).join("")}${L.picks.length>4?`<div class="tm-more">ほか ${L.picks.length-4}点</div>`:""}</div><div class="tm-pf">${L.picks.length}点 合計 ${Ze(L.cost)} ${on}<small>No.${String(L.id).padStart(4,"0")}</small></div></div>`}function M(){const L=t.settlement,N=L.outcome,U=t.unclaimed(),J=t.types.map(dt=>{const it=L.types[dt];if(!it)return"";const St=it.status==="void"?'<span class="tm-void">不成立（返還）</span>':it.status==="special"?`<span class="tm-void">特払い ${Ze(it.specialPer100)}</span>`:it.winners.map(F=>`<span class="tm-win">${ka(F.key)}<b>${Ze(F.per100)}</b></span>`).join("");return`<div class="tm-rrow"><span class="tm-rt">${gn[dt].short}</span>${St}</div>`}).join(""),rt=N.order.length?N.order.map((dt,it)=>`<span class="tm-ord"><small>${it+1}着</small>${Bi(dt)}</span>`).join(""):'<span class="tm-void">ゴール艇なし（レース不成立）</span>',ct=[N.returned.length?`返還: ${N.returned.map(dt=>Bi(dt," sm")).join("")}（フライング・出遅れ・欠場）`:"",L.result.capsized.length?`転覆: ${L.result.capsized.map(dt=>Bi(dt," sm")).join("")}（失格・返還なし）`:"",L.result.move?`決まり手: ${L.result.move}`:""].filter(Boolean);return`<div class="tm-result tm-scroll">
      <p class="tm-ask">レース結果（確定）</p>
      <div class="tm-orders">${rt}</div>
      ${ct.map(dt=>`<p class="tm-note">${dt}</p>`).join("")}
      <div class="tm-rtable"><div class="tm-rhead">払戻金（100${on}あたり）</div>${J}</div>
      </div>
      <div class="tm-foot">${U>0?`<button data-act="claim" class="tm-go tm-claim">払戻を受け取る <b>${Ze(U)}</b> ${on}</button>`:`<span class="tm-pts">${t.tickets.some(dt=>dt.payout>0)?"払戻を受け取りました":t.tickets.length?"的中した舟券はありません":""}</span>`}</div>`}function C(){const L=t.tickets.length;o(".tm-tabs").innerHTML=`<button data-act="tab" data-v="odds" class="${u==="odds"?"on":""}">オッズ</button><button data-act="tab" data-v="tickets" class="${u==="tickets"?"on":""}">購入した舟券${L?` <i>${L}</i>`:""}</button>`,o(".tm-sidebody").innerHTML=u==="odds"?D():k()}function b(L){const N=new Map;return[...L.entries()].filter(U=>U[1]!=null).sort((U,J)=>U[1]-J[1]).forEach(([U],J)=>N.set(U,J+1)),N}const w=(L,N,U)=>{const J=U.get(L)??999,rt=J<=3?"hot":J<=10?"warm":"",ct=d===a&&g().includes(L)?" sel":"";return`<button data-act="pick" data-v="${L}" class="tm-odd ${rt}${ct}">${j0(N.get(L))}</button>`};function D(){const L=`<div class="tm-otypes">${t.types.map(dt=>`<button data-act="otype" data-v="${dt}" class="${dt===d?"on":""}">${gn[dt].short}</button>`).join("")}</div>`,N=gn[d],U=t.odds(d),J=b(U);let rt="";if(N.picks===1)rt=`<table class="tm-otable tm-win"><tr><th>艇</th><th>選手</th><th>オッズ</th><th>人気</th></tr>${ai.map(dt=>{var St;const it=Kn(N,[dt]);return`<tr><td>${Bi(dt)}</td><td class="tm-name">${((St=s.racers)==null?void 0:St[dt-1])??""}</td><td>${w(it,U,J)}</td><td class="tm-rank">${J.get(it)??"-"}</td></tr>`}).join("")}</table>`;else if(N.picks===2)rt=`<table class="tm-otable"><tr><th class="tm-corner">1着＼2着</th>${ai.map(dt=>`<th>${Bi(dt)}</th>`).join("")}</tr>${ai.map(dt=>`<tr><th>${Bi(dt)}</th>${ai.map(it=>dt===it?'<td class="tm-x"></td>':N.ordered||dt<it?`<td>${w(Kn(N,[dt,it]),U,J)}</td>`:'<td class="tm-x"></td>').join("")}</tr>`).join("")}</table>`;else{const dt=h;rt=`<div class="tm-firsts"><span>1着</span>${ai.map(it=>`<button data-act="first" data-v="${it}" class="tm-lane l${it} ${it===dt?"on":""}">${it}</button>`).join("")}</div>
        <table class="tm-otable"><tr><th class="tm-corner">2着＼3着</th>${ai.map(it=>`<th>${Bi(it)}</th>`).join("")}</tr>${ai.filter(it=>it!==dt).map(it=>`<tr><th>${Bi(it)}</th>${ai.map(St=>St===dt||St===it?'<td class="tm-x"></td>':`<td>${w(Kn(N,[dt,it,St]),U,J)}</td>`).join("")}</tr>`).join("")}</table>`}const ct=t.state==="open"?"締切まで変わります。数字を押すとその買い目を選びます":t.state==="closed"?"締切時のオッズ":"確定時のオッズ";return`${L}${rt}<p class="tm-onote">${ct}</p>`}function k(){if(!t.tickets.length)return'<p class="tm-empty">まだ購入していません</p>';const L=t.state==="settled",N={hit:"的中",miss:"",refund:"返還",special:"特払い"},U=[...t.tickets].reverse().map(ct=>`<div class="tm-tk ${L?ct.payout>0?"win":"lose":""}">
        <div class="tm-tkh"><b>${gn[ct.type].short}</b><span>No.${String(ct.id).padStart(4,"0")}</span><span>${ct.picks.length}点 ${Ze(ct.cost)}</span>${L?`<b class="tm-tkp">${ct.payout?`払戻 ${Ze(ct.payout)}`:"はずれ"}${ct.claimed&&ct.payout?"（受取済）":""}</b>`:""}</div>
        <div class="tm-tkb">${ct.picks.map(dt=>`<span class="tm-tkk ${dt.kind??""}">${ka(dt.key)}<small>${Ze(dt.units*ke)}</small>${dt.kind&&N[dt.kind]?`<em>${N[dt.kind]}</em>`:""}</span>`).join("")}</div></div>`).join(""),J=t.tickets.reduce((ct,dt)=>ct+dt.cost,0),rt=t.tickets.reduce((ct,dt)=>ct+dt.payout,0);return`<p class="tm-tsum">購入 ${Ze(J)} ${on}${L?` ／ 払戻 ${Ze(rt)} ${on}`:""}</p>${U}`}function O(){_(),v(),C()}function V(L,N,U){switch(p="",L){case"close":return xt();case"type":a!==N&&m(),a=N,d=a,r="lanes";break;case"lane":{const J=Number(N);c[U].has(J)?c[U].delete(J):c[U].add(J);break}case"all":c[U]=c[U].size===6?new Set:new Set(ai);break;case"units":l=Math.min(Rp,Math.max(1,l+Number(N)));break;case"setunits":l=Number(N);break;case"next":if(r==="lanes"){const J=g().length;J?J>Ru?p=Nl["too-many"]:r="amount":p=Nl.empty}else r==="amount"&&(r="confirm");break;case"back":r=r==="confirm"?"amount":r==="amount"?"lanes":"type";break;case"buy":{t.tick(n());const J=t.buy(e,a,g(),l);typeof J=="string"?p=Nl[J]:(f=J,r="issued");break}case"again":m(),f=null,r="type";break;case"claim":t.claim(e),u="tickets";break;case"tab":u=N;break;case"otype":d=N;break;case"first":h=Number(N);break;case"pick":{if(t.state!=="open"||!N)break;a=d,m(),$s(N).forEach((J,rt)=>c[rt].add(J)),r="amount";break}}O()}i.addEventListener("click",L=>{const N=L.target.closest("[data-act]");!N||!i.contains(N)||N.disabled||V(N.dataset.act,N.dataset.v,Number(N.dataset.r??0))}),i.addEventListener("pointerdown",L=>{L.target===i&&xt()});const B=L=>{L.key==="Escape"&&xt()};window.addEventListener("keydown",B);let Y=t.state,H=!1,K=0;const ut=t.onChange(()=>{t.state!==Y?(Y=t.state,t.state!=="open"&&(r="type"),O()):H=!0}),yt=(j=e.onChange)==null?void 0:j.call(e,()=>_()),_t=window.setInterval(()=>{t.tick(n()),_();const L=n();H&&L-K>2e3&&(H=!1,K=L,C())},250);let lt=!1;function xt(){var L;lt||(lt=!0,window.clearInterval(_t),window.removeEventListener("keydown",B),ut(),yt==null||yt(),i.remove(),(L=s.onClose)==null||L.call(s))}return O(),{el:i,close:xt,refresh:O}}const bs=s=>s.toLocaleString("ja-JP"),KS=s=>`<span class="tm-lane l${s}">${s}</span>`,JS=s=>{const t=s.includes("=")?"=":"-";return $s(s).map(e=>KS(e)).join(`<i class="tm-sep">${t}</i>`)};function Up(s){var p;const{wallet:t}=s,e=document.createElement("div");e.className="tm-overlay",e.innerHTML=`
    <div class="tm pm" role="dialog" aria-label="払戻機">
      <header class="tm-head">
        <b class="tm-title">払戻機${s.machineId?` ${s.machineId}`:""}</b>
        <span class="tm-state s-settled">払戻</span>
        <span class="tm-bal"></span>
        <button class="tm-close" data-act="close" aria-label="閉じる">閉じる</button>
      </header>
      <div class="pm-body tm-scroll"></div>
      <div class="tm-foot pm-foot"></div>
    </div>`,(s.parent??document.body).appendChild(e);const n=x=>e.querySelector(x);let i="insert",o=0;function r(){const x=[];for(const g of s.sales())for(const m of g.tickets)(!m.claimed||m.payout===0)&&x.push({sale:g,t:m});return x}function a(){var P;n(".tm-bal").innerHTML=`残高 <b>${bs(t.free)}</b> ${on}`;const x=r(),g=x.reduce((T,M)=>T+(M.t.claimed?0:M.t.payout),0),m=(((P=s.pending)==null?void 0:P.call(s))??[]).filter(T=>T.tickets.length),_=m.length?`<p class="pm-pend">未確定の舟券: ${m.map(T=>`${T.title} ${T.tickets.length}枚`).join("、")}（確定してから払い戻せます）</p>`:"";let y="",v="";if(i==="insert")y=`<div class="tm-closed pm-insert"><b>舟券を入れてください</b><p>的中した舟券・返還の舟券を払い戻します</p>${_}</div>`,v='<button data-act="insert" class="tm-go">舟券を入れる</button>';else if(i==="show"){const T=x.filter(C=>C.t.payout>0&&!C.t.claimed),M=x.filter(C=>C.t.payout===0);y=T.length?`<p class="tm-ask">払戻金額</p>${T.map(C=>c(C.sale,C.t)).join("")}`:`<div class="tm-closed pm-insert"><b>払戻はありません</b><p>${M.length?`はずれの舟券 ${M.length}枚`:"確定した舟券がありません"}</p>${_}</div>`,T.length&&M.length&&(y+=`<p class="tm-tsum">はずれ ${M.length}枚</p>`),T.length&&(y+=_),v=g>0?`<span class="tm-pts">合計 <b>${bs(g)}</b> ${on}</span><button data-act="pay" class="tm-go tm-claim">支払 <b>${bs(g)}</b> ${on}</button>`:'<button data-act="close" class="tm-go">閉じる</button>'}else y=`<div class="tm-closed pm-insert"><b>お受け取りください</b><p>${bs(o)} ${on} を残高に入れました</p></div>`,v='<button data-act="close" class="tm-go">閉じる</button>';n(".pm-body").innerHTML=y,n(".pm-foot").innerHTML=v}function c(x,g){const m={hit:"的中",miss:"",refund:"返還",special:"特払い"};return`<div class="tm-tk win"><div class="tm-tkh"><b>${gn[g.type].short}</b><span>${x.title}</span><span>No.${String(g.id).padStart(4,"0")}</span><b class="tm-tkp">払戻 ${bs(g.payout)}</b></div>
      <div class="tm-tkb">${g.picks.filter(_=>(_.payout??0)>0).map(_=>`<span class="tm-tkk ${_.kind??""}">${JS(_.key)}<small>${bs(_.units*ke)}</small>${_.kind&&m[_.kind]?`<em>${m[_.kind]}</em>`:""}</span>`).join("")}</div></div>`}function l(x){if(x==="close")return f();x==="insert"&&(i="show"),x==="pay"&&(o=s.sales().reduce((g,m)=>g+m.claim(t),0),i="paid"),a()}e.addEventListener("click",x=>{const g=x.target.closest("[data-act]");!g||!e.contains(g)||g.disabled||l(g.dataset.act)}),e.addEventListener("pointerdown",x=>{x.target===e&&f()});const u=x=>{x.key==="Escape"&&f()};window.addEventListener("keydown",u);const h=(p=t.onChange)==null?void 0:p.call(t,()=>n(".tm-bal").innerHTML=`残高 <b>${bs(t.free)}</b> ${on}`);let d=!1;function f(){var x;d||(d=!0,window.removeEventListener("keydown",u),h==null||h(),e.remove(),(x=s.onClose)==null||x.call(s))}return a(),{el:e,close:f,refresh:a}}const Es=an[0],Oa=an[1],QS={moored:"ピット",rush:"ピット離れ",buoy:"ブイ",back:"バック",uturn:"回り込み",approach:"進入",race:""},tw=`
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
#race-hud .r-prog { font-size: 13px; font-weight: 800; margin: 0 0 4px; background: rgba(8,28,44,.45); border-radius: 8px; padding: 2px 8px; width: max-content; }
#race-hud .r-prog small { font-weight: 700; opacity: .9; margin-left: 6px; }
#r-announce { position: fixed; z-index: 4; left: 50%; top: 22%; transform: translateX(-50%); font-size: 18px; font-weight: 900; white-space: nowrap;
  background: rgba(0,0,0,.5); padding: 6px 14px; border-radius: 12px; text-shadow: 0 1px 3px rgba(0,0,0,.6); pointer-events: none; opacity: 0; transition: opacity .3s; }
#r-announce.show { opacity: 1; }
`;function ew(){let s="";for(let t=0;t<12;t++){const e=t/12*Math.PI*2;s+=`<line x1="${(50+Math.sin(e)*36).toFixed(1)}" y1="${(50-Math.cos(e)*36).toFixed(1)}" x2="${(50+Math.sin(e)*42).toFixed(1)}" y2="${(50-Math.cos(e)*42).toFixed(1)}" stroke="#f2c230" stroke-width="${t%3?2:4}"/>`}return`<svg class="r-dial" viewBox="0 0 100 112" aria-hidden="true">
  <circle cx="22" cy="5" r="4" class="lamp2" fill="#444"/><circle cx="78" cy="5" r="4" class="lamp2" fill="#444"/>
  <circle cx="50" cy="56" r="46" fill="#111" stroke="#555" stroke-width="3"/>
  <g transform="translate(0 6)">${s}
    <text x="80" y="35" font-size="13" font-weight="900" fill="#fff" text-anchor="middle">10</text>
    <text x="28" y="83" font-size="13" font-weight="900" fill="#fff" text-anchor="middle">5</text>
    <line class="h60" x1="50" y1="50" x2="50" y2="14" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M50 50 L50 4 A46 46 0 0 0 4 50 Z" fill="#2a2a2a"/>
    <line class="h12" x1="50" y1="50" x2="50" y2="10" stroke="#ffcc22" stroke-width="4" stroke-linecap="round"/>
    <circle cx="50" cy="50" r="4" fill="#ddd"/>
  </g>
  <rect x="36" y="104" width="12" height="7" rx="2" class="sigw" fill="#333"/><rect x="52" y="104" width="12" height="7" rx="2" class="sigb" fill="#333"/>
</svg>`}const nw=60;let Ba=null;function Fp({renderer:s,scene:t,camera:e,sun:n,waves:i,player:o}){var at;Us!=="drift"&&wc("drift");const r=o?["hud","start","b-prop","b-wave","prop-panel","rotate"]:["hud","lever","lean-pad","steer-pad","wheel","start","touch","b-prop","b-wave","b-center","prop-panel","rotate"];for(const $ of r)(at=document.getElementById($))==null||at.setAttribute("hidden","");const a=document.createElement("style");a.textContent=tw,document.head.appendChild(a);const c=document.createElement("div");c.id="race-hud",c.innerHTML=`<div class="r-prog" id="r-prog" hidden></div><div class="r-top">${ew()}<div><div class="r-clock" id="r-clock"></div><div class="r-pre" id="r-pre"></div></div></div><div class="r-me" id="r-me" hidden></div><div class="r-warn" id="r-warn" hidden></div><div class="r-entry" id="r-entry"></div><div class="r-lap" id="r-lap"></div><div class="r-speed" id="r-speed" hidden></div><ol class="r-order" id="r-order"></ol>`,document.body.appendChild(c);const l=document.createElement("div");l.id="r-announce",document.body.appendChild(l);const u=document.getElementById("r-clock"),h=document.getElementById("r-prog"),d=document.getElementById("r-pre"),f=document.getElementById("r-me"),p=document.getElementById("r-warn"),x=document.getElementById("r-entry"),g=document.getElementById("r-lap"),m=document.getElementById("r-speed"),_=document.getElementById("r-order"),y=c.querySelector(".r-dial"),v=y.querySelector(".h60"),P=y.querySelector(".h12"),T=y.querySelectorAll(".lamp2"),M=y.querySelector(".sigw"),C=y.querySelector(".sigb"),b=document.getElementById("banner"),w=o==null?void 0:o.controls;w&&(c.classList.add("playing"),m.hidden=!1,f.hidden=!1,document.getElementById("touch").hidden=!1,document.getElementById("lever").hidden=!1,document.getElementById("b-center").hidden=!w.tiltActive,document.getElementById("b-center").onclick=()=>w.recenter(),cp(w));const D=new URLSearchParams(location.search),k=D.get("entry")==="fixed"?"fixed":"free",O=D.get("pitout")?Number(D.get("pitout")):void 0,V=new bp(i,{humanLane:o==null?void 0:o.lane,entry:k,pitOut:O}),B=V.prestart,Y=V.visual,H=o?null:new Pp(V,{saleSec:nw}),K=H?new Np:null,ut=new _u(i),yt=Mu();t.add(ut.mesh,yt);const _t=new Su(Y);t.add(_t.group);const lt=H?new Ip(H,_t.screens,null):null,xt=new hS(Y);t.add(xt.group);const j=new bu(Y);t.add(j.points),ut.hide(yt,j.points);const L=()=>j.resize(window.innerHeight,e.fov,s.getPixelRatio());window.addEventListener("resize",L);const N=V.boats.map($=>{const X=gu($.lane);t.add(X.root);const vt=new wu(Y);return t.add(vt.mesh),ut.hide(vt.mesh),Object.assign($,{view:X,foam:vt})}),U=N.find($=>$.human)??null;let J=new Set,rt=0;function ct($){l.textContent=$,l.classList.add("show"),rt=4}function dt(){H||V.reset();for(const $ of N)$.foam.clear();j.clear(),b.classList.remove("show"),l.classList.remove("show"),J=new Set,w&&(w.lever=0)}dt(),V.onFinish=$=>{const X=$.late??[],vt=U?U.cpu.flying?"　あなた: F（返還欠場）":X.includes(U.lane)?"　あなた: L（返還欠場）":U.cpu.capsized?"　あなた: 転覆":`　あなた: ${$.order.indexOf(U.lane)+1}着`:"",Gt=[...$.flying.map(Wt=>`F${Wt}`),...X.map(Wt=>`L${Wt}`)].join(" ");b.textContent=$.cancelled?`レース不成立（${Gt}）${vt}`:`${$.order.join("-")}　${$.move}${Gt?`　${Gt}`:""}${vt}`,b.classList.add("show"),b.classList.toggle("small",!!U||!!Gt)};const it=U?["追従","低い追従","1マーク観客席","中継","上空","2マーク上空"]:["オート","1マーク観客席","中継","上空","2マーク上空","先頭追従"];let St=0;const F=document.getElementById("b-cam"),bt=()=>F.textContent=`視点:${it[St]}`;bt(),F.onclick=()=>{St=(St+1)%it.length,bt()};const Vt=document.getElementById("b-reset");if(Vt.textContent="もう一度",Vt.onclick=dt,H){H.on(Gt=>{if(Gt.type==="race"&&dt(),Gt.type==="result"){const Wt=H.sale.unclaimed();H.sale.tickets.length&&ct(Wt>0?`的中！ 払戻 ${Wt.toLocaleString()} ${on}（「払戻」で受け取り）`:"舟券ははずれ")}}),Vt.onclick=()=>{H.phase==="open"?H.closeNow():(H.phase==="closed"||H.phase==="judging"||H.phase==="settled")&&H.next()&&ut.updateWake(V.wake.render)};let $=null;const X=document.createElement("button");X.textContent="舟券",X.onclick=()=>{$==null||$.close(),$=zp({sale:H.sale,wallet:K,racers:H.racers,now:H.now,onClose:()=>$=null})};const vt=document.createElement("button");vt.textContent="払戻",vt.hidden=!0,vt.onclick=()=>{$==null||$.close(),$=Up({sales:()=>H.history,pending:()=>H.sale.state==="settled"?[]:[H.sale],wallet:K,onClose:()=>$=null})},document.getElementById("buttons").append(X,vt),Ba=()=>{const Gt=H.unclaimed();vt.hidden=Gt<=0,vt.textContent=`払戻 ${Gt.toLocaleString()}`;const Wt=H.phase;Vt.textContent=Wt==="open"?"締切へ":Wt==="closed"?"ピットアウトへ":Wt==="settled"||Wt==="judging"?"次のレースへ":"レース中",Vt.disabled=Wt==="race";const qt=H.pendingTickets().length;h.hidden=!1,h.innerHTML=`${H.statusText()}<small>残高 ${K.free.toLocaleString()} ${on}${qt?`　舟券 ${qt}枚`:""}</small>`}}const Kt="boatgame.cpuBrain";let Nt=!1;try{localStorage.getItem(Kt)==="rule"&&(Nt=!1)}catch{}const oe=document.createElement("button");(()=>{V.setPolicy(Nt?Ep:null),oe.textContent=`CPU:${Nt?"学習":"ルール"}`})(),oe.onclick=()=>{};const I="boatgame.cpuControl";let E=!!wo;try{localStorage.getItem(I)==="rule"&&(E=!1)}catch{}const Z=document.createElement("button"),pt=()=>{V.setControl(E?wo:null),Z.textContent=`操作:${E?"学習":"ルール"}`};pt(),Z.onclick=()=>{if(wo){E=!E;try{localStorage.setItem(I,E?"learned":"rule")}catch{}pt(),dt()}},wo&&document.getElementById("buttons").appendChild(Z);const mt=document.createElement("button");mt.textContent=U?"メニュー":"自分で走る",mt.onclick=()=>{location.hash="",location.reload()},document.getElementById("buttons").appendChild(mt);for(const $ of document.querySelectorAll("#buttons button"))$.addEventListener("pointerdown",X=>X.stopPropagation());const ht=new A,Ft=new A,At=new A,Et=new A(0,0,1),$t=new A,Mt=new A(0,0,-1.75),It=new A,Ot=new A,gt=new hu;let et=!0;const wt=Number(D.get("ff")??NaN);H&&Number.isFinite(wt)&&(H.closeNow(),H.next()),s.setAnimationLoop(()=>{if(V.clock<wt){for(;V.clock<wt;)Pt(1/60);gt.getDelta()}const $=Math.min(gt.getDelta(),.05);w==null||w.update($),Pt($),Q($)});function Pt($){V.humanInput=(w==null?void 0:w.input)??null,(H?H.update($):V.step($))&&ut.updateWake(V.wake.render)}const Bt=$=>`<span class="lane" style="background:${bc[$-1]};color:${$===1||$===5?"#111":"#fff"}">${$}</span>`,z=$=>`${Math.floor($/60)}:${($%60).toFixed(1).padStart(4,"0")}`;function ft($,X){const vt=$<Tl?0:Math.min(1,($-Tl)/60)*360;v.setAttribute("transform",`rotate(${vt.toFixed(1)} 50 50)`),v.style.display=$>hr||$>0?"none":"";const Gt=Math.min(0,Math.max($,hr));P.setAttribute("transform",`rotate(${((Gt%12+12)%12/12*360).toFixed(1)} 50 50)`);for(const Xt of T)Xt.setAttribute("fill",$<Tl?"#ff5a3d":"#444");const Wt=$>=hr&&$<0&&$*2%1>-.5;if(M.setAttribute("fill",Wt?"#fff":"#333"),C.setAttribute("fill",Wt?"#3d8bff":"#333"),_t.setClock(Gt),H&&(H.phase==="open"||H.phase==="closed")){const Xt=H.phaseLeft??0;u.textContent=H.phase==="open"?`締切まで ${Math.floor(Math.ceil(Xt-.001)/60)}:${String(Math.ceil(Xt-.001)%60).padStart(2,"0")}`:`ピットアウトまで ${(Xt+B.pitOut-$).toFixed(0)}`,u.classList.toggle("near",H.phase==="open"&&Xt<60),d.textContent=H.phase==="open"?"発売中（係留中）":"発売締切",d.classList.toggle("hot",H.phase==="closed")}else $<B.pitOut?(u.textContent=`ピットアウトまで ${(B.pitOut-$).toFixed(1)}`,u.classList.toggle("near",$>B.pitOut-5),d.textContent=$>=T0?"♪ ファンファーレ":"係留中",d.classList.toggle("hot",$>=T0)):$<0?(u.textContent=$<-15?`スタートまで ${z(-$)}`:`大時計 ${(-$).toFixed(1)}`,u.classList.toggle("near",$>-5),d.textContent=$<B.pitOut+4?"ピットアウト！":$<hr?"待機行動":"起こし",d.classList.toggle("hot",$<B.pitOut+4||$>=hr)):(u.textContent=z($),u.classList.remove("near"),d.textContent="");const qt=[...B.boats].sort((Xt,be)=>Xt.course-be.course),ge=$<0?qt.filter(Xt=>Xt.slow).length:B.nSlow,pe=B.finalCourse,Ye=pe??qt.map(Xt=>Xt.lane);if(x.innerHTML=$>=B.pitOut+4&&$<25?`進入${pe?"":"（予定）"}&nbsp;`+Ye.map((Xt,be)=>(be===ge?"<i>/</i>":"")+Bt(Xt)).join(""):"",U){const Xt=B.get(U.lane),be=pe?pe.indexOf(U.lane)+1:Xt.course,Ee=!pe&&$>B.pitOut?Xt.course<=ge?"スロー":"ダッシュ":"",Rt=Xt.st!==null||Xt.late?`　ST ${Ll(Xt.st,Xt.late)}`:"";f.innerHTML=$<B.pitOut?`あなた: ${U.lane}号艇 <small>合図まで動けません</small>`:`あなた: ${be}コース${pe?"":"（予定）"}<small>${Ee?" "+Ee:""}</small>${Rt}${Xt.flying||Xt.late?" <small>返還欠場</small>":""}`;const ne=B.violations.filter(de=>de.lane===U.lane&&$-de.clock<4).at(-1);p.hidden=!ne,ne&&(p.textContent=`待機行動違反: ${ne.kind}`)}for(const Xt of B.boats){const be=`${Xt.lane}${Xt.flying?"F":Xt.late?"L":""}`;if((Xt.flying||Xt.late)&&!J.has(be)){J.add(be);const Ee=B.boats.filter(Rt=>Rt.flying||Rt.late);ct(Ee.map(Rt=>`${Rt.lane}号艇 ${Rt.flying?"フライング":"出遅れ"}`).join("・")+"　返還欠場"+(Ee.length>=5?"　レース不成立":""))}}rt>0&&(rt-=X)<=0&&l.classList.remove("show")}function Q($){var Ee;const X=V.t,vt=V.clock;for(const Rt of N){if(Rt.view.root.visible=Rt.foam.mesh.visible=!Rt.removed,Rt.removed)continue;xu(Rt.view,Rt.ph,$),$t.set(-1,0,0).applyQuaternion(Rt.ph.quat),Rt.ph.toWorld(Mt,It);const ne=Rt.ph.speed(),de=1+.8*Math.max(Rt.ph.propState.cav,Rt.ph.propState.vent);Rt.ph.propImmersion>.2&&ne>1&&Rt.foam.add(X,It,$t,Math.min(1,ne/8)*de),Rt.foam.update(X),j.emit($,X,Rt.ph,110)}j.step($,X),ut.update(X,e.position),_t.update(X),xt.update(X),ft(vt,$),Ba==null||Ba(),lt==null||lt.update($,s,t,e,ut);const Gt=V.order(),Wt=Gt[0];if(g.textContent=V.inPrestart?"":Wt.cpu.finished?"ゴール":`${Math.min(Vo,Math.max(1,Wt.cpu.laps+1))}周目 / ${Vo}周`,_.innerHTML=Gt.map((Rt,ne)=>{const de=Rt.lane,Ne=B.get(de);let ze;return V.inPrestart?ze=`<small>${Ne.course}コース ${vt>B.pitOut?QS[Ne.phase]+(Ne.launched?" 起こし":""):""}</small>`:Rt.cpu.capsized?ze="<em>転覆</em>":Ne.flying||Ne.late?ze=`<em>${Ll(Ne.st,Ne.late).slice(0,1)} 欠場</em>`:Rt.cpu.finished?ze=`<small>${Rt.cpu.finishTime.toFixed(1)}s</small>`:vt<12&&Ne.st!==null?ze=`<small class="st">ST ${Ll(Ne.st)}</small>`:ze=`<small>${Math.max(0,Rt.cpu.progress/wi).toFixed(1)}周${Rt.cpu.tactic?" "+Rt.cpu.tactic:""}</small>`,`<li${Rt===U?' class="me"':""}><b>${V.inPrestart?Ne.course:ne+1}</b>${Bt(de)}${ze}</li>`}).join(""),U&&w){m.textContent=`${(U.ph.speed()*3.6).toFixed(0)} km/h`,lp(w,w.input.steer);const Rt=U.ph.legForce,ne=Math.min(1,Math.hypot(Rt.x,Rt.y-Ri*9.81,Rt.z)/(Ri*9.81*2));document.getElementById("lean-pad").style.setProperty("--kick",ne.toFixed(2))}let qt=40;const ge=Wt.ph.origin,pe=N.filter(Rt=>!Rt.removed);Ot.set(0,0,0);for(const Rt of pe)Ot.add(Rt.ph.origin);Ot.multiplyScalar(1/Math.max(1,pe.length));const Ye=Math.max(12,...pe.map(Rt=>Math.hypot(Rt.ph.origin.x-Ot.x,Rt.ph.origin.z-Ot.z)+6));let Xt=it[St];if(Xt==="オート"&&(Xt=vt<-14?"2マーク上空":vt<6?"中継":"1マーク観客席"),U&&(Xt==="追従"||Xt==="低い追従")){const Rt=U.ph.vel,ne=Math.hypot(Rt.x,Rt.z);U.ph.forward($t);const de=new A($t.x,0,$t.z).normalize(),Ne=Math.min(.7,Math.max(0,(ne-2)/4)*.7);ne>.1&&de.multiplyScalar(1-Ne).add(new A(Rt.x/ne,0,Rt.z/ne).multiplyScalar(Ne)).normalize(),Et.lerp(de,et?1:1-Math.exp(-$*3)).normalize();const ze=Xt==="低い追従",Re=U.ph.origin;ht.copy(Re).addScaledVector(Et,ze?-4.2:-7).add(new A(0,ze?1.5:3.2,0)),Ft.copy(Re).addScaledVector(Et,2.5).add(new A(0,.6,0)),qt=window.innerWidth<window.innerHeight?75:60}else if(Xt==="1マーク観客席")qt=30,ht.set(-58,16,Es.z-22),Ft.set(Es.x-4,0,Es.z+4);else if(Xt==="中継"){const Rt=V.inPrestart||vt<3,ne=Rt?Ot:ge;Rt?ht.set(-44,38,Math.max(-230,Math.min(150,ne.z+45))):ht.set(-55,31,Math.max(-150,Math.min(150,ne.z*.75))),Ft.copy(ne);const de=e.position.distanceTo(ne);qt=Math.max(5,Math.min(60,2*Math.atan((Rt?Ye:10)/Math.max(1,de))*180/Math.PI))}else if(Xt==="上空")ht.set(Es.x,120,Es.z-60),Ft.set(Es.x,0,Es.z-12),qt=50;else if(Xt==="2マーク上空"){const Rt=Math.max(Oa.z-75,Math.min(Oa.z+30,Ot.z));ht.set(Oa.x-48,70,Rt+50),Ft.set(Oa.x+8,0,Rt-8),qt=50}else{const Rt=Wt.ph.vel,ne=Math.hypot(Rt.x,Rt.z);ne>2&&Et.lerp(new A(Rt.x/ne,0,Rt.z/ne),1-Math.exp(-$*3)).normalize(),ht.copy(ge).addScaledVector(Et,-9).add(new A(0,3.2,0)),Ft.copy(ge).addScaledVector(Et,3),qt=window.innerWidth<window.innerHeight?75:60}const be=et?1:1-Math.exp(-$*3);e.position.lerp(ht,be),At.lerp(Ft,et?1:1-Math.exp(-$*5)),e.lookAt(At),Math.abs(e.fov-qt)>.01&&(e.fov+=(qt-e.fov)*(et?1:1-Math.exp(-$*4)),e.updateProjectionMatrix(),L()),et=!1,n.position.copy(At).addScaledVector(Or,30),n.target.position.copy(At),n.shadow.camera.left=n.shadow.camera.bottom=-14,n.shadow.camera.right=n.shadow.camera.top=14,n.shadow.camera.updateProjectionMatrix(),(Ee=t.userData.sky)==null||Ee.position.copy(e.position),ut.renderPasses(s,t,e),s.render(t,e)}}class iw{constructor(t,e,n){S(this,"water");S(this,"farWater");S(this,"course");S(this,"effects");S(this,"boats");S(this,"session");S(this,"right",new A);S(this,"stern",new A(0,0,-1.75));S(this,"sternW",new A);S(this,"center",new A);S(this,"fwd",new A);this.session=e;const i=e.visual;this.water=new _u(n),this.farWater=Mu(),t.add(this.water.mesh,this.farWater),this.course=new Su(i),t.add(this.course.group),this.effects=new bu(i),t.add(this.effects.points),this.water.hide(this.farWater,this.effects.points),this.boats=e.boats.map(o=>{const r=gu(o.lane);t.add(r.root);const a=new wu(i);return t.add(a.mesh),this.water.hide(a.mesh),{race:o,view:r,foam:a}})}resize(t,e,n){this.effects.resize(t,e,n)}clear(){for(const t of this.boats)t.foam.clear();this.effects.clear()}wakeUpdated(){this.water.updateWake(this.session.wake.render)}update(t,e){const n=this.session.t;for(const o of this.boats){const r=o.race.ph;xu(o.view,r,t),this.right.set(-1,0,0).applyQuaternion(r.quat),r.toWorld(this.stern,this.sternW);const a=r.speed(),c=1+.8*Math.max(r.propState.cav,r.propState.vent);r.propImmersion>.2&&a>1&&o.foam.add(n,this.sternW,this.right,Math.min(1,a/8)*c),o.foam.update(n),this.effects.emit(t,n,r,110)}this.effects.step(t,n),e.getWorldDirection(this.fwd);const i=Math.hypot(this.fwd.x,this.fwd.z)||1;this.center.set(e.position.x+this.fwd.x/i*60,0,e.position.z+this.fwd.z/i*60),this.center.x=Math.max(Ht.x0+40,Math.min(Ht.x1-20,this.center.x)),this.center.z=Math.max(Ht.z0+20,Math.min(Ht.z1-20,this.center.z)),this.water.update(n,this.center),this.course.update(n),this.course.setClock(this.session.clock)}aimSun(t,e,n,i=80){t.position.copy(e).addScaledVector(Or,i),t.target.position.copy(e);const o=t.shadow.camera;(o.right!==n||o.far!==i*2)&&(o.left=o.bottom=-n,o.right=o.top=n,o.far=i*2,o.updateProjectionMatrix())}render(t,e,n){this.water.renderPasses(t,e,n),t.render(e,n)}}const Z0=1.6,K0=1.4,sw=3,ow=.3,J0=1.8;class rw{constructor(t,e){S(this,"pos",new A);S(this,"yaw",0);S(this,"pitch",0);S(this,"enabled",!0);S(this,"speed",0);S(this,"eyeY",0);S(this,"bob",0);S(this,"vel",new Ct);S(this,"keys",new Set);S(this,"stick",{id:-1,ox:0,oy:0,x:0,y:0});S(this,"look",{id:-1,x:0,y:0,moved:0,mouse:!1});S(this,"el");S(this,"stickBase");S(this,"stickKnob");S(this,"world");S(this,"off",[]);this.el=t,this.world=e,t.style.touchAction="none",this.stickBase=document.createElement("div"),this.stickBase.className="av-stick",this.stickKnob=document.createElement("div"),this.stickKnob.className="av-knob",this.stickBase.appendChild(this.stickKnob),t.appendChild(this.stickBase),this.showStick(!1);const n=(i,o,r,a)=>{i.addEventListener(o,r,a),this.off.push(()=>i.removeEventListener(o,r,a))};n(t,"pointerdown",i=>this.down(i)),n(window,"pointermove",i=>this.moveP(i)),n(window,"pointerup",i=>this.up(i)),n(window,"pointercancel",i=>this.up(i)),n(document,"mousemove",i=>{document.pointerLockElement!==t||!this.enabled||this.turn(i.movementX*.0025,i.movementY*.0025)}),n(window,"keydown",i=>{aw(i)||(this.keys.add(i.code),(i.code.startsWith("Arrow")||i.code==="Space")&&i.preventDefault())}),n(window,"keyup",i=>this.keys.delete(i.code)),n(window,"blur",()=>this.keys.clear())}dispose(){for(const t of this.off)t();this.stickBase.remove(),document.pointerLockElement===this.el&&document.exitPointerLock()}place(t,e,n,i,o=0){this.pos.set(t,e,n),this.yaw=i,this.pitch=o,this.eyeY=e+Z0,this.vel.set(0,0)}update(t){let e=0,n=0,i=!1;if(this.enabled){const m=this.keys;(m.has("KeyW")||m.has("ArrowUp"))&&(e+=1),(m.has("KeyS")||m.has("ArrowDown"))&&(e-=1),m.has("KeyD")&&(n+=1),m.has("KeyA")&&(n-=1),m.has("ArrowLeft")&&(this.yaw+=J0*t),m.has("ArrowRight")&&(this.yaw-=J0*t),i=m.has("ShiftLeft")||m.has("ShiftRight");const _=Math.hypot(e,n);if(_>1&&(e/=_,n/=_),this.stick.id>=0){const v=this.stick.x/55,P=-this.stick.y/55,T=Math.hypot(v,P);if(T>.12){const M=Math.min(1,T);n=v/T*M,e=P/T*M,i=T>1.5}}}const o=i?sw:K0,r=Math.sin(this.yaw),a=Math.cos(this.yaw),c=(-r*e+a*n)*o,l=(-a*e-r*n)*o,u=1-Math.exp(-t/.15);this.vel.x+=(c-this.vel.x)*u,this.vel.y+=(l-this.vel.y)*u;let h=this.vel.x*t,d=this.vel.y*t;const f=this.pos.clone(),p=Math.max(1,Math.ceil(Math.hypot(h,d)/.2));h/=p,d/=p;for(let m=0;m<p;m++)this.world.move(this.pos,h,d,ow);const x=Math.hypot(this.pos.x-f.x,this.pos.z-f.z);this.speed=x/Math.max(t,1e-4),x<Math.hypot(h*p,d*p)*.5&&this.vel.multiplyScalar(.5),this.bob+=x*1.6*Math.PI;const g=this.pos.y+Z0+Math.sin(this.bob)*.018*Math.min(1,this.speed/K0);this.eyeY+=(g-this.eyeY)*(1-Math.exp(-t*14))}apply(t){t.position.set(this.pos.x,this.eyeY,this.pos.z),t.rotation.set(this.pitch,this.yaw,0,"YXZ")}turn(t,e){this.yaw-=t,this.pitch=Math.max(-1.35,Math.min(1.35,this.pitch-e))}showStick(t,e=0,n=0){this.stickBase.style.display=t?"block":"none",t&&(this.stickBase.style.left=`${e}px`,this.stickBase.style.top=`${n}px`,this.stickKnob.style.transform="translate(-50%, -50%)")}down(t){if(!this.enabled)return;const e=window.innerWidth,n=window.innerHeight,i=t.pointerType!=="mouse";if(i&&this.stick.id<0&&t.clientX<e*.45&&t.clientY>n*.3)this.stick={id:t.pointerId,ox:t.clientX,oy:t.clientY,x:0,y:0},this.showStick(!0,t.clientX,t.clientY);else if(this.look.id<0){if(!i&&t.button!==0)return;this.look={id:t.pointerId,x:t.clientX,y:t.clientY,moved:0,mouse:!i}}t.preventDefault()}moveP(t){if(t.pointerId===this.stick.id){this.stick.x=t.clientX-this.stick.ox,this.stick.y=t.clientY-this.stick.oy;const e=55,n=Math.hypot(this.stick.x,this.stick.y),i=n>e?e/n:1;this.stickKnob.style.transform=`translate(calc(-50% + ${this.stick.x*i}px), calc(-50% + ${this.stick.y*i}px))`,this.stickBase.classList.toggle("run",n>e*1.5)}else if(t.pointerId===this.look.id){const e=t.clientX-this.look.x,n=t.clientY-this.look.y;this.look.x=t.clientX,this.look.y=t.clientY,this.look.moved+=Math.abs(e)+Math.abs(n),this.enabled&&this.turn(e*(this.look.mouse?.004:.006),n*(this.look.mouse?.004:.006))}}up(t){var e,n;if(t.pointerId===this.stick.id)this.stick.id=-1,this.stick.x=this.stick.y=0,this.showStick(!1);else if(t.pointerId===this.look.id){if(this.look.mouse&&this.look.moved<4&&this.enabled&&document.pointerLockElement!==this.el)try{(n=(e=this.el.requestPointerLock())==null?void 0:e.catch)==null||n.call(e,()=>{})}catch{}this.look.id=-1}}}function aw(s){const t=s.target;return!!t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable)}const cw=`
.av-stick { position: absolute; width: 110px; height: 110px; margin: -55px 0 0 -55px; border-radius: 50%;
  background: rgba(255,255,255,.12); border: 2px solid rgba(255,255,255,.45); pointer-events: none; }
.av-stick.run { border-color: #ffd34d; }
.av-knob { position: absolute; left: 50%; top: 50%; width: 46px; height: 46px; border-radius: 50%;
  background: rgba(255,255,255,.55); transform: translate(-50%, -50%); }
`;function lw(){const s=new He;s.name="venue-interior";const t=ip(),e=new np,n=[],i=[],o=Ut[1]-As,r=[];let a=0,c=0;for(const h of op){for(let g=0;g<h.n;g++){const m=h.z+g*_r,_=h.kind==="sell"?`S${String(++a).padStart(2,"0")}`:`P${String(++c).padStart(2,"0")}`,y=ot.concBack+ui.d;r.push({id:_,kind:h.kind,pos:new A(y,tt,m),stand:new A(y+.55,tt,m),normal:new A(1,0,0),lookYaw:Math.PI/2})}const d=(h.n-1)*_r+ui.w,f=h.kind==="sell"?"舟券発売":"払戻",p=h.kind==="sell"?"#1f5fbf":"#1d8a4a",x=new Dt(new $e(d,.55),new Ei({map:yo(f,p,"#fff",512,64),toneMapped:!1}));x.rotation.y=Math.PI/2,x.position.set(ot.concBack+.03,tt+2.25,h.z+(h.n-1)*_r/2),s.add(x);for(let g=0;g<2;g++){const m=h.z+(h.n-1)*_r*(g===0?.25:.75),_=So(`odds-${String(n.length+1).padStart(2,"0")}`,`コンコース吊りモニター ${n.length+1}`,"odds",1.6,.9,{w:512,h:288});_.mesh.rotation.y=Math.PI/2,_.mesh.position.set(ot.concBack+1.06,tt+3.5,m),s.add(_.mesh),n.push(_),e.box(t.dark,ot.concBack+.94,ot.concBack+1.04,tt+2.98,tt+4.02,m-.86,m+.86);for(const y of[-.5,.5])e.box(t.steel,ot.concBack+.97,ot.concBack+1.01,tt+4.02,o,m+y-.02,m+y+.02)}}s.add(...dw(r));for(const h of[108,168]){const d=So(`odds-${String(n.length+1).padStart(2,"0")}`,`コンコース大型オッズ板 ${h===108?"北":"南"}`,"odds",3.2,1.8,{w:1024,h:576});d.mesh.rotation.y=-Math.PI/2,d.mesh.position.set(hn.xs[0]-.12,tt+3.6,h),s.add(d.mesh),n.push(d),e.box(t.dark,hn.xs[0]-.1,hn.xs[0]+.05,tt+2.6,tt+4.6,h-1.7,h+1.7);for(const p of[-1.2,1.2])e.box(t.steel,hn.xs[0]-.05,hn.xs[0],tt+4.6,o,h+p-.02,h+p+.02);const f=So(`odds-${String(n.length+1).padStart(2,"0")}`,`コンコース大型オッズ板 ${h===108?"北":"南"}（裏）`,"odds",3.2,1.8,{w:1024,h:576});f.mesh.rotation.y=Math.PI/2,f.mesh.position.set(hn.xs[0]+.07,tt+3.6,h),s.add(f.mesh),n.push(f)}for(const h of[125,145,165,185]){const d=So(`deck-${String(n.filter(f=>f.kind==="deck").length+1).padStart(2,"0")}`,`デッキ吊りモニター z${h}`,"deck",1.8,1,{w:512,h:288});d.mesh.rotation.y=-Math.PI/2,d.mesh.position.set(ot.front2-.42,tt+4.5,h),s.add(d.mesh),n.push(d),e.box(t.dark,ot.front2-.4,ot.front2-.25,tt+3.92,tt+5.08,h-.96,h+.96);for(const f of[-.5,.5])e.box(t.steel,ot.front2-.34,ot.front2-.3,tt+5.08,o,h+f-.02,h+f+.02)}for(const h of fe.zs){const d=fe.x-fe.w/2,f=fe.x+fe.w/2;e.box(t.panel,d+.1,f-.1,tt,tt+fe.h-.1,h-fe.len/2+.1,h+fe.len/2-.1),e.boxAt(t.wood,fe.x,tt+fe.h-.05,h,fe.w,.05,fe.len,0,0),e.box(t.dark,fe.x-.08,fe.x+.08,tt+fe.h,tt+fe.h+.32,h-fe.len/2+.2,h+fe.len/2-.2),e.box(t.light,fe.x-.06,fe.x+.06,tt+fe.h+.32,tt+fe.h+.36,h-fe.len/2+.2,h+fe.len/2-.2)}e.box(t.wood,-69,-64,tt,tt+1.1,196,201),e.box(t.panel,-68.8,-64.2,tt+1.1,tt+1.15,196.2,200.8);{const h=new Dt(new $e(3,.6),new Ei({map:yo("総合案内","#c9a227","#1a1a1a",256,52),toneMapped:!1}));h.rotation.y=Math.PI/2,h.position.set(-63.95,tt+2.6,198.5),s.add(h)}const l=(h,d,f,p,x=4,g="#1d2f55")=>{const m=new Dt(new $e(x,.6),new Ei({map:yo(h,g,"#fff",512,64),toneMapped:!1,side:Ue}));m.rotation.y=p,m.position.set(d,tt+3.9,f),s.add(m),e.box(t.steel,d-.02,d+.02,tt+4.2,o,f-.02,f+.02)};l("← 1マーク 水際デッキ",-60.5,140,Math.PI/2,4.4),l("← ふらっとデッキ",-60.5,80,Math.PI/2,4.4),l("南入場門 →",-72,203,0,4),l("2F 屋外席は外の階段から",-72,62,Math.PI,5);{const h=new Dt(new $e(10,1.2),new Ei({map:yo("中央ホール","#1d2f55","#fff",512,64,"イベント開催時のみ"),toneMapped:!1}));h.position.set(-72,tt+3.2,G.concN+.03),s.add(h)}for(const h of[-62.5,-70,-77,-83])for(let d=G.concN+3;d<G.standS-1;d+=6)e.box(t.light,h-.15,h+.15,o-.04,o,d-2,d+2);for(let h=G.wingN+3;h<G.standS;h+=6)e.box(t.light,-54.3,-53.9,o-.04,o,h-1.5,h+1.5);const u=[];for(let h=G.deckN+4;h<=96;h+=4)for(const d of[-49,-53.5])u.push({x:d,z:h});{const h=new xn(.42,.42,.04,20).toNonIndexed().translate(0,.74,0),d=new xn(.04,.04,.72,8).toNonIndexed().translate(0,.37,0),f=new xn(.25,.28,.03,16).toNonIndexed().translate(0,.015,0),p=new Ai(zr([h,d,f]),t.dark,u.length),x=[new re(.4,.04,.4).toNonIndexed().translate(0,.45,0),new re(.04,.42,.4).toNonIndexed().translate(-.19,.68,0),new re(.04,.45,.04).toNonIndexed().translate(.16,.22,.16),new re(.04,.45,.04).toNonIndexed().translate(.16,.22,-.16),new re(.04,.45,.04).toNonIndexed().translate(-.16,.22,.16),new re(.04,.45,.04).toNonIndexed().translate(-.16,.22,-.16)],g=new Ai(zr(x),t.dark,u.length*3),m=new ae,_=new $n,y=new A(1,1,1);u.forEach((v,P)=>{p.setMatrixAt(P,m.makeTranslation(v.x,tt,v.z));for(let T=0;T<3;T++){const M=Math.PI+(T-1)*1.1,C=v.x+Math.cos(M)*.72,b=v.z+Math.sin(M)*.72;_.setFromAxisAngle(new A(0,1,0),-M+Math.PI),g.setMatrixAt(P*3+T,m.compose(new A(C,tt,b),_,y))}i.push({x0:v.x-.45,x1:v.x+.45,z0:v.z-.45,z1:v.z+.45,y0:tt,y1:tt+.78})});for(const v of[p,g])v.castShadow=v.receiveShadow=!0,v.computeBoundingSphere(),s.add(v)}return s.add(...fw(r)),e.build(s,{name:"interior"}),{group:s,machines:r,screens:n,walls:i}}function hw(s){const t=[],e=[],n=(l,u,h,d,f,p,x,g=0)=>{const m=new re(h,u,l).toNonIndexed();m.applyMatrix4(new ae().makeRotationZ(g).setPosition(d,f,p)),t.push(m);for(let _=0;_<m.attributes.position.count;_++)e.push(x.r,x.g,x.b)},i=new te(14278114),o=new te(2369582),r=ui.w,a=ui.d;n(r,1.15,a,0,.575,0,i),n(r,.45,a*.55,-a*.22,1.37,0,i),n(r*.96,.05,.42,a*.18,1.3,0,o,-.9),n(r,.1,a+.02,0,1,0,s),n(r*.5,.04,.02,a/2+.005,.86,0,o),n(r*.3,.06,.02,a/2+.005,.74,-r*.2,o),n(r*.12,.08,.02,a/2+.005,.74,r*.25,o),n(r*.4,.06,.02,a/2+.005,.6,0,s),n(r*.3,.14,.06,a/2+.02,.35,0,o),n(r,.1,a,0,.05,0,o),n(r,.12,a*.55,-a*.22,1.66,0,s);const c=zr(t);return c.setAttribute("color",new ue(e,3)),c}function uw(s){return Mi(256,192,t=>{t.fillStyle=s==="sell"?"#0f3a75":"#0f5a35",t.fillRect(0,0,256,192),t.fillStyle="#fff",t.font="bold 30px sans-serif",t.textAlign="center",t.fillText(s==="sell"?"舟券 発売":"払 戻",128,44),t.font="16px sans-serif",t.fillText(s==="sell"?"マークカードを入れてください":"舟券を入れてください",128,76);for(let e=0;e<6;e++)t.fillStyle=["#f4f4f4","#222","#d8262b","#1f5fbf","#f2c230","#1d9a4a"][e],t.fillRect(20+e*38,100,32,32),t.fillStyle=e===0||e===4?"#111":"#fff",t.font="bold 22px sans-serif",t.fillText(String(e+1),36+e*38,124);t.fillStyle="#ffd34d",t.fillRect(70,148,116,30),t.fillStyle="#111",t.font="bold 18px sans-serif",t.fillText(s==="sell"?"発 行":"支払い",128,169)},!1)}function dw(s){const t=[],e=new ae;for(const n of["sell","payout"]){const i=s.filter(l=>l.kind===n);if(!i.length)continue;const o=hw(new te(n==="sell"?2056127:1935946)),r=new Ai(o,new Qt({vertexColors:!0,roughness:.5,metalness:.1}),i.length),a=new $e(ui.w*.8,.34);a.rotateY(Math.PI/2),a.rotateZ(Math.PI/2-.9);const c=new Ai(a,new Ei({map:uw(n),toneMapped:!1}),i.length);i.forEach((l,u)=>{e.makeTranslation(l.pos.x-ui.d/2,tt,l.pos.z),r.setMatrixAt(u,e),e.makeTranslation(l.pos.x-ui.d/2+ui.d*.18+.024,tt+1.32,l.pos.z),c.setMatrixAt(u,e)}),r.castShadow=r.receiveShadow=!0,r.name=`machines:${n}`;for(const l of[r,c])l.computeBoundingSphere();t.push(r,c)}return t}function fw(s){let t=2024;const e=()=>(t=t*16807%2147483647)%1e5/1e5,n=[2832981,4868682,9055019,3104570,14209732,2039586,7035450,3891082,11053224,8011626].map(M=>new te(M)),i=[],o=[];for(const M of rp()){if(!u0.every(([w,D])=>Math.hypot(M.x-w,M.z-D)>1.5))continue;const C=(M.z-G.wingN)/(G.standS-G.wingN),b=(M.y<tt+1?.18:.1)+.18*C;e()<b&&i.push({x:M.x,y:M.y,z:M.z,yaw:0})}const r=(M,C)=>u0.every(([b,w])=>Math.hypot(M-b,C-w)>4);for(const M of s)e()<.2&&r(M.stand.x,M.stand.z)&&o.push({x:M.stand.x+1.6+e()*1.2,y:tt,z:M.pos.z+(e()-.5),yaw:Math.PI+(e()-.5)*.6});for(const M of fe.zs)for(const C of[-1,1])e()<.7&&r(fe.x+C*.85,M)&&o.push({x:fe.x+C*.85,y:tt,z:M+(e()-.5)*2.4,yaw:C>0?Math.PI:0});for(let M=0;M<70;M++){const C=G.deckN+10+e()*(G.standS-G.deckN-12),b=ot.fence-.5-e()*1.2;r(b,C)&&o.push({x:b,y:tt,z:C,yaw:(e()-.5)*.8})}for(let M=0;M<40;M++){const C=-60-e()*22,b=G.concN+4+e()*(G.standS-G.concN-8);!hn.xs.some(D=>Math.abs(D-C)<.9)&&r(C,b)&&o.push({x:C,y:tt,z:b,yaw:e()*Math.PI*2})}for(let M=0;M<25;M++){const C=-50-e()*45,b=G.standS+3+e()*24;r(C,b)&&o.push({x:C,y:tt,z:b,yaw:e()*Math.PI*2})}const a=M=>{const C=[],b=[];for(const[D,k,O,V,B,Y,H]of M){const K=new re(O,k,D).toNonIndexed().translate(V,B,Y);C.push(K);for(let ut=0;ut<K.attributes.position.count;ut++)b.push(H,H,H)}const w=zr(C);return w.setAttribute("color",new ue(b,3)),w},c=a([[.4,.56,.24,-.1,.76,0,1],[.34,.14,.42,.1,.5,0,.35],[.3,.46,.12,.3,.24,0,.3]]),l=a([[.32,.84,.2,0,.42,0,.3],[.42,.6,.26,0,1.14,0,1]]),u=new Hs(.11,7,5).toNonIndexed();{const M=u.attributes.position,C=[],b=new te(1907224),w=new te(14266508);for(let D=0;D<M.count;D++){const O=M.getX(D)>.02&&M.getY(D)<.05?w:b;C.push(O.r,O.g,O.b)}u.setAttribute("color",new ue(C,3)),u.deleteAttribute("uv")}const h=new Qt({vertexColors:!0,roughness:.9}),d=new Qt({vertexColors:!0,roughness:.8}),f=[...i.map(M=>({...M,sit:!0})),...o.map(M=>({...M,sit:!1}))],p=new Ai(c,h,Math.max(1,i.length)),x=new Ai(l,h,Math.max(1,o.length)),g=new Ai(u,d,Math.max(1,f.length));p.count=i.length,x.count=o.length,g.count=f.length;const m=new ae,_=new $n,y=new A(1,1,1),v=new A(0,1,0);let P=0,T=0;f.forEach((M,C)=>{const b=M.yaw;_.setFromAxisAngle(v,b);const w=n[Math.floor(e()*n.length)],D=.94+e()*.12,k=new A(D,D,D);if(M.sit){p.setMatrixAt(P,m.compose(new A(M.x,M.y+.06,M.z),_,k)),p.setColorAt(P++,w);const O=new A(-.1,1.17,0).multiplyScalar(D).applyQuaternion(_).add(new A(M.x,M.y+.06,M.z));g.setMatrixAt(C,m.compose(O,_,y))}else x.setMatrixAt(T,m.compose(new A(M.x,M.y,M.z),_,k)),x.setColorAt(T++,w),g.setMatrixAt(C,m.compose(new A(M.x,M.y+1.58*D,M.z),_,y))});for(const M of[p,x,g])M.castShadow=!0,M.computeBoundingSphere(),M.name="crowd";return[p,x,g]}const pw=.55,Q0=.6;class mw{constructor(){S(this,"floors",[]);S(this,"walls",[])}heightAt(t,e,n){let i=null;for(const o of this.floors){if(t<o.x0||t>o.x1||e<o.z0||e>o.z1)continue;const r=gw(o,t,e);r>n+pw||(i===null||r>i)&&(i=r)}return i}move(t,e,n,i){const o=(r,a)=>{let c=t.x+r,l=t.z+a;for(let h=0;h<2;h++)for(const d of this.walls){if(d.y1<t.y+.3||d.y0>t.y+1.8)continue;const f=Math.max(d.x0,Math.min(d.x1,c)),p=Math.max(d.z0,Math.min(d.z1,l)),x=c-f,g=l-p,m=x*x+g*g;if(!(m>=i*i))if(m>1e-10){const _=Math.sqrt(m);c=f+x/_*i,l=p+g/_*i}else{const _=[[d.x0-i-c,0],[d.x1+i-c,0],[0,d.z0-i-l],[0,d.z1+i-l]];_.sort((y,v)=>Math.abs(y[0])+Math.abs(y[1])-Math.abs(v[0])-Math.abs(v[1])),c+=_[0][0],l+=_[0][1]}}const u=this.heightAt(c,l,t.y);if(u===null||u<t.y-Q0)return!1;for(const[h,d]of[[i,0],[-i,0],[0,i],[0,-i]]){const f=this.heightAt(c+h,l+d,u);if(f===null||f<u-Q0)return!1}return t.x=c,t.z=l,t.y=u,!0};o(e,n)||Math.abs(e)>1e-6&&o(e,0)||Math.abs(n)>1e-6&&o(0,n)}settle(t){const e=this.heightAt(t.x,t.z,t.y+.3);e!==null&&(t.y=e)}}function gw(s,t,e){if(s.kind==="flat")return s.y;const i=((s.axis==="x"?t:e)-s.a0)/(s.a1-s.a0);if(i<=0)return s.y0;const o=Math.min(s.n,Math.floor(i*s.n)+1);return s.y0+(s.y1-s.y0)*o/s.n}const mo=(s,t,e,n,i)=>({kind:"flat",x0:Math.min(s,t),x1:Math.max(s,t),z0:Math.min(e,n),z1:Math.max(e,n),y:i}),pn=(s,t,e,n,i,o)=>({x0:Math.min(s,t),x1:Math.max(s,t),z0:Math.min(e,n),z1:Math.max(e,n),y0:i,y1:o});function xw(s=[]){const t=new mw,e=t.floors,n=t.walls,i=Ut[1]-.5;e.push(mo(ot.deckBack,ot.fence,G.deckN,G.standS,tt)),e.push(mo(ot.plazaW,ot.fence,G.standS,G.plazaS,tt)),e.push(mo(ot.concBack,ot.deckBack,G.concN,G.standS,tt)),e.push(mo(ot.rows2,ot.front2,G.wingN,G.seat2S+6,Ut[1])),e.push(mo(ot.upperS,ot.front2,G.seat2S,G.seat2S+6,Ut[1])),e.push(mo(ot.upperS,ot.front2,G.wingN,G.seat2N,Ut[1])),e.push({kind:"steps",x0:ot.upperS,x1:ot.rows2,z0:G.seat2N,z1:G.seat2S,axis:"x",a0:ot.rows2,a1:ot.upperS,y0:Ut[1],y1:Ut[1]+Ln.n*Ln.rise,n:Ln.n});for(const r of sp){e.push({kind:"steps",x0:Xi[0],x1:Xi[1],z0:Math.min(r.zBottom,r.zTop),z1:Math.max(r.zBottom,r.zTop),axis:"z",a0:r.zBottom,a1:r.zTop,y0:tt,y1:Ut[1],n:Za});const a=Math.sign(r.zTop-r.zBottom),c=r.zBottom+a*Math.abs(r.zTop-r.zBottom)*(1.4/(Ut[1]-tt));n.push(pn(Xi[0],Xi[1],c,r.zTop,tt,tt+1.4))}let o=G.standS;for(const r of[...Ph].sort((a,c)=>c-a))n.push(pn(ot.deckBack-.1,ot.deckBack+.1,r+2,o,tt,i)),o=r-2;n.push(pn(ot.deckBack-.1,ot.deckBack+.1,G.concN,o,tt,i)),n.push(pn(ot.concBack,-82,G.standS-.2,G.standS+.4,tt,i)),n.push(pn(-62,ot.deckBack,G.standS-.2,G.standS+.4,tt,i));for(const r of hn.xs)for(let a=0;a<hn.n;a++){const c=hn.z0+a*hn.dz,l=hn.size/2;n.push(pn(r-l,r+l,c-l,c+l,tt,i))}for(let r=0;r<Jn.n;r++){const a=Jn.z0+r*Jn.dz,c=Jn.size/2;n.push(pn(Jn.x-c,Jn.x+c,a-c,a+c,tt,i))}for(const r of op)n.push(pn(ot.concBack,ot.concBack+ui.d,r.z-ui.w/2,r.z+(r.n-1)*_r+ui.w/2,tt,tt+2));for(const r of fe.zs)n.push(pn(fe.x-fe.w/2,fe.x+fe.w/2,r-fe.len/2,r+fe.len/2,tt,tt+fe.h));n.push(pn(-69,-64,196,201,tt,tt+1.1));for(let r=0;r<11;r++){const a=-61-r*2.6;n.push(pn(a-.15,a+.15,G.gateLine-.6,G.gateLine+.6,tt,tt+1))}n.push(pn(-60,ot.fence,G.gateLine-.05,G.gateLine+.05,tt,tt+1.1)),n.push(pn(ot.plazaW,-89.5,G.gateLine-.05,G.gateLine+.05,tt,tt+1.1));for(const r of[-8,8])for(const a of[-98,-52])n.push(pn(a-.5,a+.5,G.gate+r-.5,G.gate+r+.5,tt,tt+8));for(let r=G.gate+10;r<G.plazaS;r+=6)for(const a of[-79.7,-70.3])n.push(pn(a-.12,a+.12,r-.12,r+.12,tt,tt+3.6));return n.push(pn(ot.upperS-.3,ot.upperS,G.wingN,G.seat2S+6,Ut[1],Ut[2])),n.push(...s),t}const zl=(s,t,e,n)=>Math.atan2(-(e-s),-(n-t));function vw(s){const t=lw(),e=xw(t.walls),n={deck1m:{name:"1マーク前デッキ",x:-47.4,y:tt,z:128,yaw:zl(-47.4,128,0,150),pitch:-.04},machines:{name:"券売機",x:-80,y:tt,z:134,yaw:Math.PI/2,pitch:-.08},seats2f:{name:"2F 屋外席",x:-56.5,y:Ut[1]+3,z:140,yaw:zl(-56.5,140,0,150),pitch:-.18},flat:{name:"ふらっとデッキ",x:-51.3,y:tt,z:22,yaw:zl(-51.3,22,90,0),pitch:.06},gate:{name:"南入場門",x:-75,y:tt,z:G.plazaS-3,yaw:0,pitch:.05}};for(const i of Object.values(n)){const o={x:i.x,y:i.y+.5,z:i.z};e.settle(o),i.y=o.y}return{group:t.group,world:e,machines:t.machines,screens:[...s.screens,...t.screens],spots:n}}const _w=1.3;function Mw(s){var dt;const{renderer:t,scene:e,camera:n,sun:i,waves:o}=s;Us!=="drift"&&wc("drift");for(const it of["hud","lever","lean-pad","steer-pad","wheel","start","touch","buttons","prop-panel","rotate","banner"])(dt=document.getElementById(it))==null||dt.setAttribute("hidden","");const r=document.createElement("style");r.textContent=yw+cw,document.head.appendChild(r);const a=new bp(o);let c=!1,l=!!wo;try{localStorage.getItem("boatgame.cpuBrain")==="rule"&&(c=!1),localStorage.getItem("boatgame.cpuControl")==="rule"&&(l=!1)}catch{}a.setPolicy(c?Ep:null),a.setControl(l?wo:null);const u=new iw(e,a,o),h=vw(u.course);e.add(h.group),u.water.hide(h.group);const d=u.course.group.getObjectByName("seats");d&&u.water.hide(d);const f=new Pp(a),p=new Np,x=new $S;x.hidden.push(h.group),d&&x.hidden.push(d);for(const it of u.boats)x.hideSmall(it.view.root,.35);const g=new Ip(f,h.screens,x),m=rt("div","vn-touch"),_=rt("div","vn-hud");_.innerHTML='<div class="vn-race"><b id="vn-rno"></b><span id="vn-clock"></span><span id="vn-lap"></span></div><div class="vn-wallet" id="vn-wallet"></div><ol class="vn-order" id="vn-order"></ol>';const y=rt("div","vn-bar"),v=ct("移動",y),P=ct("メニュー",y),T=rt("div","vn-menu");T.hidden=!0;const M=rt("button","vn-use");M.hidden=!0;const C=rt("div","vn-toast"),b=rt("div","vn-help"),w=matchMedia("(pointer: coarse)").matches;b.textContent=w?"左下を触って動かすと歩く（端まで引くと早歩き）・右側をドラッグで見回す":"WASD / ↑↓ で歩く・← → で向き・Shift で早歩き・ドラッグで見回す（クリックでマウス視点、Esc で解除）",setTimeout(()=>b.classList.add("fade"),6e3);for(const it of[v,P,M,...T.querySelectorAll("button")])it.addEventListener("pointerdown",St=>St.stopPropagation());const D=new rw(m,h.world),k=h.spots.deck1m;D.place(k.x,k.y,k.z,k.yaw,k.pitch);for(const it of Object.values(h.spots)){const St=ct(it.name,T);St.addEventListener("pointerdown",F=>F.stopPropagation()),St.onclick=()=>{D.place(it.x,it.y,it.z,it.yaw,it.pitch),T.hidden=!0}}v.onclick=()=>T.hidden=!T.hidden,P.onclick=()=>{location.hash="",location.reload()};const O={session:a,program:f,wallet:p,feed:g,venue:h,avatar:D,render:u,onUseTicketMachine:s.onUseTicketMachine??null,setInputEnabled(it){D.enabled=it},nearMachine:()=>V,stop(){t.setAnimationLoop(null),D.dispose(),B==null||B.close();for(const it of[m,_,y,T,M,C,b,r])it.remove();g.dispose(),window.removeEventListener("resize",_t)}};let V=null;M.addEventListener("pointerdown",it=>it.stopPropagation()),M.onclick=()=>{V&&(document.pointerLockElement&&document.exitPointerLock(),O.onUseTicketMachine?O.onUseTicketMachine(V.id,V):Y(V))};let B=null;function Y(it){B==null||B.close(),O.setInputEnabled(!1),M.hidden=!0;const St=()=>{B=null,O.setInputEnabled(!0),V=null},F=it.kind==="sell"?zp({sale:f.sale,wallet:p,racers:f.racers,now:f.now,onClose:St}):Up({sales:()=>f.history,pending:()=>f.sale.state==="settled"?[]:[f.sale],wallet:p,machineId:it.id,onClose:St});B={close:()=>F.close(),spot:it}}let H=0;function K(it,St=2.5){C.textContent=it,C.classList.add("show"),clearTimeout(H),H=window.setTimeout(()=>C.classList.remove("show"),St*1e3)}const ut=new A;function yt(){if(!D.enabled||Math.abs(D.pos.y-tt)>.3)return null;n.getWorldDirection(ut);let it=null,St=_w;for(const F of h.machines){const bt=Math.hypot(D.pos.x-F.stand.x,D.pos.z-F.stand.z);if(bt>=St)continue;const Vt=Math.hypot(ut.x,ut.z)||1;-ut.x/Vt*F.normal.x+-ut.z/Vt*F.normal.z<.2||(it=F,St=bt)}return it}function _t(){n.fov=window.innerWidth<window.innerHeight?72:55,n.near=.08,n.far=3e3,n.updateProjectionMatrix(),u.resize(window.innerHeight,n.fov,t.getPixelRatio())}window.addEventListener("resize",_t),_t(),f.on(it=>{if(it.type==="race"){if(u.clear(),g.cut(),(B==null?void 0:B.spot.kind)==="sell"){const St=B.spot;B.close(),Y(St)}K(`${f.title} 発売開始`)}else if(it.type==="phase"&&it.phase==="closed")K(`第${f.raceNo}R 発売締切`);else if(it.type==="result"){const St=f.sale.unclaimed(),F=f.sale.tickets.length?St>0?`　払戻 ${St.toLocaleString()} ${on}（払戻機へ）`:"　はずれ":"";K(`第${f.raceNo}R 確定 ${f.orderText()}${it.settlement.result.move?"　"+it.settlement.result.move:""}${F}`,6)}});const lt=new hu,xt=_.querySelector("#vn-clock"),j=_.querySelector("#vn-lap"),L=_.querySelector("#vn-order"),N=_.querySelector("#vn-rno"),U=_.querySelector("#vn-wallet");let J=0;return t.setAnimationLoop(()=>{var F,bt;const it=Math.min(lt.getDelta(),.05);f.update(it)&&u.wakeUpdated(),D.update(it),D.apply(n),n.updateMatrixWorld(),u.update(it,n),g.update(it,t,e,n,u.water),u.aimSun(i,D.pos,32),(F=e.userData.sky)==null||F.position.copy(n.position);const St=yt();if(St!==V&&!B&&(V=St,M.hidden=!St,St&&(M.textContent=St.kind==="sell"?`券売機を使う（${St.id}）`:`払戻機を使う（${St.id}）${f.unclaimed()>0?" 払戻あり":""}`)),J-=it,J<=0){J=.2,N.textContent=f.statusText();const Vt=a.clock,Kt=f.phase==="race"||f.phase==="judging",Nt=((bt=a.prestart)==null?void 0:bt.pitOut)??-1/0;xt.textContent=!Kt||Vt<Nt?"":Vt<0?`スタートまで ${(-Vt).toFixed(0)}秒`:`${Math.floor(Vt/60)}:${String(Math.floor(Vt%60)).padStart(2,"0")}`;const oe=a.order(),kt=oe[0];j.textContent=!Kt||Vt<0?"":kt.cpu.finished?"ゴール":`${Math.min(Vo,Math.max(1,kt.cpu.laps+1))}周目`;const I=f.pendingTickets().length,E=f.unclaimed();U.textContent=`残高 ${p.free.toLocaleString()} ${on}${I?`　舟券 ${I}枚`:""}${E?`　払戻 ${E.toLocaleString()}`:""}`,L.innerHTML=oe.map(Z=>{const pt=Z.lane===1||Z.lane===5?"#111":"#fff",mt=Z.cpu.capsized?"<em>転</em>":Z.cpu.flying?"<em>F</em>":"";return`<li style="background:${bc[Z.lane-1]};color:${pt}">${Z.lane}${mt}</li>`}).join("")}u.render(t,e,n)}),O;function rt(it,St){const F=document.createElement(it);return F.className=St,document.body.appendChild(F),F}function ct(it,St){const F=document.createElement("button");return F.textContent=it,St.appendChild(F),F}}const yw=`
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
`,Cs=new URLSearchParams(location.search),Sw=Cs.get("view")==="model",qe=new W_({antialias:!0});qe.setPixelRatio(Math.min(window.devicePixelRatio,2));qe.toneMapping=cf;qe.toneMappingExposure=1;qe.shadowMap.enabled=!0;qe.shadowMap.type=rf;document.getElementById("app").appendChild(qe.domElement);const Pe=new X_;Pe.fog=new nu(vu,250,1500);const _e=new Dn(60,1,.1,3e3);{const s=new Dt(new Hs(2e3,32,16),new ti({side:Tn,depthWrite:!1,fog:!1,uniforms:{uTop:{value:Qf},uHorizon:{value:vu},uSun:{value:Or}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 uTop; uniform vec3 uHorizon; uniform vec3 uSun; varying vec3 vDir;
        void main(){ float h = clamp(vDir.y, 0.0, 1.0); vec3 c = mix(uHorizon, uTop, pow(h, 0.45));
          c += vec3(1.0, 0.93, 0.8) * pow(max(dot(normalize(vDir), uSun), 0.0), 64.0) * 0.6;
          gl_FragColor = vec4(c, 1.0);
          #include <colorspace_fragment>
        }`}));s.renderOrder=-1,Pe.add(s),Pe.userData.sky=s}Pe.add(new A2(14478591,2905440,1.1));const un=new P2(16774112,2.4);un.castShadow=!0;un.shadow.mapSize.set(1024,1024);un.shadow.camera.left=un.shadow.camera.bottom=-4;un.shadow.camera.right=un.shadow.camera.top=4;un.shadow.camera.near=1;un.shadow.camera.far=40;un.shadow.bias=-5e-4;Pe.add(un,un.target);for(const s of Pe.children)s.userData.keep=!0;const yi=new Y2,Cr=gu(3);Pe.add(Cr.root);function kp(){const s=window.innerWidth,t=window.innerHeight;qe.setSize(s,t),_e.aspect=s/t,_e.fov=s<t?75:60,_e.updateProjectionMatrix()}window.addEventListener("resize",kp);kp();Sw?ww():location.hash==="#race"?ef():location.hash.startsWith("#match")?Op(Number(location.hash.slice(6)),new ap(document.getElementById("touch"))):location.hash==="#venue"?tf():(bw(),document.getElementById("b-watch").onclick=()=>{location.hash="race",ef()},document.getElementById("b-venue").onclick=()=>{location.hash="venue",tf()});function tf(){qe.setAnimationLoop(null);for(const s of[...Pe.children])s.userData.keep||Pe.remove(s);Mw({renderer:qe,scene:Pe,camera:_e,sun:un,waves:yi})}function ef(){qe.setAnimationLoop(null);for(const s of[...Pe.children])s.userData.keep||Pe.remove(s);Fp({renderer:qe,scene:Pe,camera:_e,sun:un,waves:yi})}function Op(s,t){const e=s>=1&&s<=6?s:1+Math.floor(Math.random()*6);qe.setAnimationLoop(null);for(const n of[...Pe.children])n.userData.keep||Pe.remove(n);Fp({renderer:qe,scene:Pe,camera:_e,sun:un,waves:yi,player:{lane:e,controls:t}})}function ww(){document.body.classList.add("model-view");for(const o of["hud","buttons","touch","start","lean-pad","lever","wheel"])document.getElementById(o).hidden=!0;const s=new Dt(new ko(8,48),new Qt({color:6262691,roughness:.9}));s.rotation.x=-Math.PI/2,s.position.y=-.7,s.receiveShadow=!0,Pe.add(s);const t=new L2(6,12,16777215,10470356);t.position.y=-.69,Pe.add(t);const e=new N2(_e,qe.domElement);e.target.set(0,.35,-.2);const n={persp:[3.2,2,3.6],side:[5.5,.4,-.2],front:[0,.5,5.5],back:[0,.8,-5.5],top:[.001,6,-.2],rear34:[-3.2,1.6,-3.8],under:[2.6,-1.6,1.8]};Cs.get("cam")==="under"&&(s.visible=t.visible=!1);const i=n[Cs.get("cam")??"persp"]??n.persp;_e.position.set(...i),Cs.get("ortho")!==null&&(_e.fov=20,_e.position.multiplyScalar(3),_e.updateProjectionMatrix()),_e.position.multiplyScalar(Number(Cs.get("d")??1)),e.update(),un.position.set(4,8,6),Cr.motor.rotation.y=Number(Cs.get("steer")??0),Cr.tilt.rotation.x=(Number(Cs.get("tilt")??lc)-lc)*Math.PI/180,Cr.tilt.position.y=Oo.y+vn.motorHeight,qe.setAnimationLoop(()=>{e.update(),qe.render(Pe,_e)})}function bw(){const s=new vp,t=new xp(yi,s.render),e=new Nr(new Eu(yi,s.felt),t),n=new Float32Array(3),i=new _u(yi),o=Mu();Pe.add(i.mesh,o);const r=new Su(t);Pe.add(r.group);const a=new wu(t);Pe.add(a.mesh);const c=new bu(t);Pe.add(c.points),i.hide(o,a.mesh,c.points);const l=document.getElementById("wfx"),u=()=>l.textContent=i.passes?"オン":"オフ";u(),l.onclick=()=>{i.passes=!i.passes;try{localStorage.setItem(tp,i.passes?"1":"0")}catch{}u()};const h=document.getElementById("tphys"),d={v1:"従来",v2:"標準",drift:"ドリフト"},f=()=>h.textContent=d[Us];f(),h.onclick=()=>{wc(Us==="v1"?"v2":Us==="v2"?"drift":"v1");try{localStorage.setItem(Kf,Us)}catch{}f()};const p=()=>c.resize(window.innerHeight,_e.fov,qe.getPixelRatio());p(),window.addEventListener("resize",p);const x=new ap(document.getElementById("touch")),g=document.getElementById("banner");function m(X){g.textContent=X,g.classList.toggle("show",!!X),g.classList.toggle("small",X.length>6)}let _=0;const y={x:-18,z:-100,heading:0},v=()=>{s.reset(y.x,y.z),e.reset(y.x,y.z,y.heading,_),a.clear(),c.clear(),P=0,m("")};let P=0;v();const T=["追従","低い追従","真横","上から","中継"];let M=0;const C=document.getElementById("b-cam");C.onclick=()=>{M=(M+1)%T.length,C.textContent=`視点:${T[M]}`},C.textContent=`視点:${T[M]}`;const b=[1,3,5,10,0];let w=1;const D=document.getElementById("b-wave"),k=()=>D.textContent=yi.heightCm>0?`波高 ${yi.heightCm}cm`:"波なし";yi.setHeightCm(b[w]),k(),D.onclick=()=>{w=(w+1)%b.length,yi.setHeightCm(b[w]),k()},document.getElementById("b-reset").onclick=()=>{x.lever=0,v()};const O=document.getElementById("prop-panel");document.getElementById("b-prop").onclick=()=>O.hidden=!O.hidden,document.getElementById("pp-close").onclick=()=>O.hidden=!0;const V=[{key:"diameter",id:"diameter",scale:100,fmt:X=>`${X.toFixed(1)} cm`},{key:"pitch",id:"pitch",scale:100,fmt:X=>`${X.toFixed(1)} cm`},{key:"ear",id:"ear",scale:1,fmt:X=>X.toFixed(2)},{key:"cup",id:"cup",scale:1,fmt:X=>`${X.toFixed(2)} mm`}];try{Object.assign(e.prop,JSON.parse(localStorage.getItem(Lh)??"{}"))}catch{}const B=document.getElementById("pp-note");function Y(){for(const X of V){const vt=e.prop[X.key]*X.scale;document.getElementById(`s-${X.id}`).value=String(vt),document.getElementById(`o-${X.id}`).textContent=X.fmt(vt)}B.textContent=`ピッチ比 ${(e.prop.pitch/e.prop.diameter).toFixed(2)}　${e.prop.blades}枚羽根`;try{localStorage.setItem(Lh,JSON.stringify(e.prop))}catch{}}for(const X of V)document.getElementById(`s-${X.id}`).addEventListener("input",vt=>{e.prop[X.key]=Number(vt.target.value)/X.scale,Y()});document.getElementById("pp-reset").onclick=()=>{Object.assign(e.prop,Yf),Y()},Y();let H=0;try{const X=Number(localStorage.getItem(Ih));xr.includes(X)&&(H=X)}catch{}e.tilt=H;const K=document.getElementById("o-tilt"),ut=document.getElementById("tilt-note"),yt=ut.textContent??"";function _t(){K.textContent=`${H.toFixed(1)}°`;const X=H!==e.tilt;ut.textContent=X?`走行中は変えられません。止まると ${H.toFixed(1)}° になります`:yt,ut.classList.toggle("pending",X)}function lt(X){const vt=xr.indexOf(H);H=xr[Math.max(0,Math.min(xr.length-1,vt+X))];try{localStorage.setItem(Ih,String(H))}catch{}_t()}const xt="boatgame.motorHeight",j=.05;let L=vn.motorHeight;try{const X=Number(localStorage.getItem(xt));localStorage.getItem(xt)!==null&&X>=0&&X<=.1&&(L=X)}catch{}vn.motorHeight=L;const N=document.getElementById("o-mh"),U=document.getElementById("mh-note"),J=U.textContent??"";function rt(){const X=Math.round((L-j)*100);N.textContent=X===0?"±0 cm":`${X>0?"+":""}${X} cm`;const vt=Math.abs(L-vn.motorHeight)>1e-4;U.textContent=vt?"走行中は変えられません。止まると反映されます":J,U.classList.toggle("pending",vt)}function ct(X){L=Math.max(0,Math.min(.1,Math.round((L+X*.01)*100)/100));try{localStorage.setItem(xt,String(L))}catch{}rt()}document.getElementById("mh-dn").onclick=()=>ct(-1),document.getElementById("mh-up").onclick=()=>ct(1),rt(),document.getElementById("tilt-dn").onclick=()=>lt(-1),document.getElementById("tilt-up").onclick=()=>lt(1),_t();const dt=document.getElementById("b-center");dt.onclick=()=>x.recenter();for(const X of document.querySelectorAll("button"))X.addEventListener("pointerdown",vt=>vt.stopPropagation());let it=!1;const St=document.getElementById("start"),F=document.getElementById("b-start");F.onclick=async()=>{F.disabled=!0,F.textContent="準備中…",x.tiltActive=await x.enableTilt(),dt.hidden=!x.tiltActive,Et(),St.hidden=!0,it=!0,v(),x.tiltActive||m(x.swap?"傾きが使えないので、中央のパッドで体重":"傾きが使えないので、下のスライダーでハンドル"),x.tiltActive||setTimeout(()=>m(""),2500)};let bt=0;const Kt=[...document.getElementById("lane-pick").querySelectorAll("button")];for(const X of Kt)X.onclick=()=>{bt=Number(X.dataset.lane);for(const vt of Kt)vt.classList.toggle("on",vt===X)};const Nt=document.getElementById("b-match");Nt.onclick=async()=>{Nt.disabled=!0,Nt.textContent="準備中…",x.tiltActive=await x.enableTilt(),Op(bt,x)};const oe=document.getElementById("speed"),kt=document.getElementById("rpm"),I=document.getElementById("m-rpm"),E=document.getElementById("tach"),Z=document.getElementById("chip-cav"),pt=document.getElementById("lean-pad"),mt=document.getElementById("chip-vent"),ht=document.getElementById("meta"),Ft="boatgame.ctrlSwap";try{x.swap=localStorage.getItem(Ft)==="1"}catch{}const At=document.getElementById("ctrlswap");function Et(){cp(x),At.textContent=x.swap?"入れ替え":"標準"}Et(),At.onclick=()=>{x.swap=!x.swap;try{localStorage.setItem(Ft,x.swap?"1":"0")}catch{}Et()};const $t=new A,Mt=new A(0,0,1),It=new A,Ot=new A,gt=new A,et=new A,wt=new A,Pt=new A,Bt=new A(0,0,-1.75),z=new A,ft=new hu,Q=1/240;let at=0,$=!0;qe.setAnimationLoop(()=>{const X=Math.min(ft.getDelta(),.05);x.update(X);const vt=it?x.input:{steer:0,throttle:0,leanX:0,leanZ:0};at+=X;let Gt=0;for(;at>=Q&&Gt<16;)e.step(Q,P>0?{steer:0,throttle:0,leanX:0,leanZ:0}:vt,_),_+=Q,at-=Q,Gt++;Gt>=16&&(at=0),gp([e]),hp(e),e.forward(gt),s.update(X,e.origin.x,e.origin.z,gt.x,gt.z,e.pressure,e.spray,e.wakeMom)&&(i.updateWake(s.render),s.render.waveForce(e.comW.x,e.comW.z,n),e.extForce.set(n[0],0,n[1]),e.extTorque.set(0,n[2],0)),wt.set(0,1,0).applyQuaternion(e.quat),wt.y<.15&&(P===0&&m("転覆"),P+=X,P>2.5&&v());const Wt=Cr;e.tilt!==H&&e.speed()<1&&(e.tilt=H,_t()),Math.abs(vn.motorHeight-L)>1e-4&&e.speed()<1&&(vn.motorHeight=L,rt()),xu(Wt,e,X),et.set(-1,0,0).applyQuaternion(e.quat),e.toWorld(Bt,z);const qt=e.speed(),ge=1+.8*Math.max(e.propState.cav,e.propState.vent);e.propImmersion>.2&&qt>1&&a.add(_,z,et,Math.min(1,qt/8)*ge),a.update(_),i.update(_,_e.position),r.update(_),r.setClock(_),c.update(X,_,e),Pt.set(gt.x,0,gt.z).normalize();const pe=Math.hypot(e.vel.x,e.vel.z),Ye=Math.min(.7,Math.max(0,(pe-2)/4)*.7);It.copy(Pt).multiplyScalar(1-Ye),pe>.1&&It.add(new A(e.vel.x/pe,0,e.vel.z/pe).multiplyScalar(Ye)),It.normalize(),$?Mt.copy(It):Mt.lerp(It,1-Math.exp(-X*3)).normalize(),$t.copy(e.origin).add(new A(0,.6,0));let Xt=1-Math.exp(-X*4),be=window.innerWidth<window.innerHeight?75:60;if(M===0)Ot.copy($t).addScaledVector(Mt,-7).add(new A(0,2.6,0));else if(M===1)Ot.copy($t).addScaledVector(Mt,-4.2).add(new A(0,.9,0));else if(M===2)Ot.copy($t).add(new A(-Mt.z,0,Mt.x).multiplyScalar(-7)).add(new A(0,1.2,0));else if(M===3)Ot.copy($t).add(new A(0,22,0)).addScaledVector(Mt,-6),Xt=1-Math.exp(-X*3);else{Ot.set(-55,31,Math.max(-150,Math.min(150,e.origin.z*.75))),Xt=1-Math.exp(-X*2);const Be=_e.position.distanceTo($t);be=Math.max(5,Math.min(50,2*Math.atan(5.5/Math.max(1,Be))*180/Math.PI))}Math.abs(_e.fov-be)>.01&&(_e.fov+=(be-_e.fov)*(1-Math.exp(-X*4)),_e.updateProjectionMatrix(),p()),$?(_e.position.copy(Ot),$=!1):_e.position.lerp(Ot,Xt);const Ee=t.height(_e.position.x,_e.position.z,_)+.4;_e.position.y<Ee&&(_e.position.y=Ee),M===4?_e.lookAt($t):_e.lookAt(Pt.copy(Mt).multiplyScalar(M===3?4:2.5).add($t)),un.position.copy(e.origin).addScaledVector(Or,20),un.target.position.copy(e.origin),Pe.userData.sky.position.copy(_e.position),oe.textContent=(qt*3.6).toFixed(0);const Rt=e.rpm;kt.textContent=(Math.round(Rt/50)*50).toFixed(0),I.style.width=`${Math.min(100,Rt/7500*100)}%`,E.classList.toggle("limit",Rt>Hi.limitRpm-150);const ne=e.propState.cav,de=e.propState.vent;Z.textContent=`キャビ ${Math.round(ne*100)}%`,mt.textContent=`吸い込み ${Math.round(de*100)}%`,Z.classList.toggle("on",ne>.08),mt.classList.toggle("on",de>.08);const Ne=e.attitude();ht.textContent=`トリム ${Ne.trim.toFixed(1)}°　傾き ${Ne.heel.toFixed(1)}°　チルト ${e.tilt.toFixed(1)}°`,lp(x,vt.steer);const ze=e.legForce,Re=Math.min(1,Math.hypot(ze.x,ze.y-Ri*9.81,ze.z)/(Ri*9.81*2));pt.style.setProperty("--kick",Re.toFixed(2)),i.renderPasses(qe,Pe,_e),qe.render(Pe,_e)})}
