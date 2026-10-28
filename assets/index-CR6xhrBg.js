var em=Object.defineProperty;var nm=(s,t,e)=>t in s?em(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var M=(s,t,e)=>nm(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tu="170",Co={ROTATE:0,DOLLY:1,PAN:2},So={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},im=0,Vu=1,sm=2,x0=1,v0=2,Hi=3,_s=0,Ln=1,ke=2,ps=0,Po=1,Hu=2,Gu=3,Wu=4,om=5,Us=100,rm=101,am=102,cm=103,lm=104,hm=200,um=201,dm=202,fm=203,Gl=204,Wl=205,pm=206,mm=207,gm=208,xm=209,vm=210,_m=211,Mm=212,ym=213,Sm=214,Xl=0,$l=1,ql=2,Fo=3,Yl=4,jl=5,Zl=6,Kl=7,_0=0,wm=1,bm=2,ms=0,Em=1,Tm=2,Am=3,M0=4,Rm=5,Cm=6,Pm=7,y0=300,ko=301,Oo=302,Jl=303,Ql=304,wc=306,lc=1e3,Os=1001,th=1002,jn=1003,Lm=1004,Yr=1005,On=1006,Uc=1007,Bs=1008,Qi=1009,S0=1010,w0=1011,Ur=1012,eu=1013,Xs=1014,Ai=1015,Zi=1016,nu=1017,iu=1018,Bo=1020,b0=35902,E0=1021,T0=1022,fi=1023,A0=1024,R0=1025,Lo=1026,Vo=1027,bc=1028,su=1029,ou=1030,ru=1031,au=1033,Ka=33776,Ja=33777,Qa=33778,tc=33779,eh=35840,nh=35841,ih=35842,sh=35843,oh=36196,rh=37492,ah=37496,ch=37808,lh=37809,hh=37810,uh=37811,dh=37812,fh=37813,ph=37814,mh=37815,gh=37816,xh=37817,vh=37818,_h=37819,Mh=37820,yh=37821,ec=36492,Sh=36494,wh=36495,C0=36283,bh=36284,Eh=36285,Th=36286,Im=3200,Dm=3201,P0=0,Nm=1,us="",Xe="srgb",Yo="srgb-linear",Ec="linear",Ae="srgb",Qs=7680,Xu=519,zm=512,Um=513,Fm=514,L0=515,km=516,Om=517,Bm=518,Vm=519,$u=35044,Ar=35048,qu="300 es",Ki=2e3,hc=2001;class Ys{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nc=Math.PI/180,Ah=180/Math.PI;function jo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function tn(s,t,e){return Math.max(t,Math.min(e,s))}function Hm(s,t){return(s%t+t)%t}function Fc(s,t,e){return(1-e)*s+e*t}function tr(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Dn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Gm={DEG2RAD:nc};class Pt{constructor(t=0,e=0){Pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,e,n,i,o,r,a,c,l){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l)}set(t,e,n,i,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=i[0],g=i[3],m=i[6],_=i[1],y=i[4],v=i[7],P=i[2],E=i[5],S=i[8];return o[0]=r*x+a*_+c*P,o[3]=r*g+a*y+c*E,o[6]=r*m+a*v+c*S,o[1]=l*x+h*_+u*P,o[4]=l*g+h*y+u*E,o[7]=l*m+h*v+u*S,o[2]=d*x+f*_+p*P,o[5]=d*g+f*y+p*E,o[8]=d*m+f*v+p*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+i*o*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,d=a*c-h*o,f=l*o-r*c,p=e*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=u*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*r)*x,t[3]=d*x,t[4]=(h*e-i*c)*x,t[5]=(i*o-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-i*l,i*c,-i*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(kc.makeScale(t,e)),this}rotate(t){return this.premultiply(kc.makeRotation(-t)),this}translate(t,e){return this.premultiply(kc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kc=new ue;function I0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function uc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Wm(){const s=uc("canvas");return s.style.display="block",s}const Yu={};function Mr(s){s in Yu||(Yu[s]=!0,console.warn(s))}function Xm(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function $m(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qm(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ge={enabled:!0,workingColorSpace:Yo,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ae&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ae&&(s.r=Io(s.r),s.g=Io(s.g),s.b=Io(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===us?Ec:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Ji(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Io(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ju=[.64,.33,.3,.6,.15,.06],Zu=[.2126,.7152,.0722],Ku=[.3127,.329],Ju=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qu=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ge.define({[Yo]:{primaries:ju,whitePoint:Ku,transfer:Ec,toXYZ:Ju,fromXYZ:Qu,luminanceCoefficients:Zu,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:ju,whitePoint:Ku,transfer:Ae,toXYZ:Ju,fromXYZ:Qu,luminanceCoefficients:Zu,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}});let to;class Ym{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{to===void 0&&(to=uc("canvas")),to.width=t.width,to.height=t.height;const n=to.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=to}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=uc("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=Ji(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ji(e[n]/255)*255):e[n]=Ji(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jm=0;class D0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=jo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Oc(i[r].image)):o.push(Oc(i[r]))}else o=Oc(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Oc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ym.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zm=0;class wn extends Ys{constructor(t=wn.DEFAULT_IMAGE,e=wn.DEFAULT_MAPPING,n=Os,i=Os,o=On,r=Bs,a=fi,c=Qi,l=wn.DEFAULT_ANISOTROPY,h=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=jo(),this.name="",this.source=new D0(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==y0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lc:t.x=t.x-Math.floor(t.x);break;case Os:t.x=t.x<0?0:1;break;case th:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lc:t.y=t.y-Math.floor(t.y);break;case Os:t.y=t.y<0?0:1;break;case th:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=y0;wn.DEFAULT_ANISOTROPY=1;class Oe{constructor(t=0,e=0,n=0,i=1){Oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,v=(f+1)/2,P=(m+1)/2,E=(h+d)/4,S=(u+x)/4,C=(p+g)/4;return y>v&&y>P?y<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(y),i=E/n,o=S/n):v>P?v<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(v),n=E/i,o=C/i):P<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(P),n=S/o,i=C/o),this.set(n,i,o,e),this}let _=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Km extends Ys{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new wn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new D0(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends Km{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class N0 extends wn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=jn,this.minFilter=jn,this.wrapR=Os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jm extends wn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=jn,this.minFilter=jn,this.wrapR=Os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=o[r+0],f=o[r+1],p=o[r+2],x=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==p){let g=1-a;const m=c*d+l*f+h*p+u*x,_=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const P=Math.sqrt(y),E=Math.atan2(P,m*_);g=Math.sin(g*E)/P,a=Math.sin(a*E)/P}const v=a*_;if(c=c*g+d*v,l=l*g+f*v,h=h*g+p*v,u=u*g+x*v,g===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=o[r],d=o[r+1],f=o[r+2],p=o[r+3];return t[e]=a*p+h*u+c*f-l*d,t[e+1]=c*p+h*d+l*u-a*f,t[e+2]=l*p+h*f+a*d-c*u,t[e+3]=h*p-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(o/2),d=c(n/2),f=c(i/2),p=c(o/2);switch(r){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(o-l)*f,this._z=(r-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(o+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(o-l)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(r-i)/f,this._x=(o+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+i*l-o*c,this._y=i*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-i*a,this._w=r*h-n*a-i*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(td.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(td.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*i-a*n),h=2*(a*e-o*i),u=2*(o*n-r*e);return this.x=e+c*l+r*u-a*h,this.y=n+c*h+a*l-o*u,this.z=i+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-o*a,this.y=o*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bc.copy(this).projectOnVector(t),this.sub(Bc)}reflect(t){return this.sub(Bc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bc=new A,td=new bn;class Ms{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,ri):ri.fromBufferAttribute(o,r),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),jr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jr.copy(n.boundingBox)),jr.applyMatrix4(t.matrixWorld),this.union(jr)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(er),Zr.subVectors(this.max,er),eo.subVectors(t.a,er),no.subVectors(t.b,er),io.subVectors(t.c,er),ss.subVectors(no,eo),os.subVectors(io,no),ys.subVectors(eo,io);let e=[0,-ss.z,ss.y,0,-os.z,os.y,0,-ys.z,ys.y,ss.z,0,-ss.x,os.z,0,-os.x,ys.z,0,-ys.x,-ss.y,ss.x,0,-os.y,os.x,0,-ys.y,ys.x,0];return!Vc(e,eo,no,io,Zr)||(e=[1,0,0,0,1,0,0,0,1],!Vc(e,eo,no,io,Zr))?!1:(Kr.crossVectors(ss,os),e=[Kr.x,Kr.y,Kr.z],Vc(e,eo,no,io,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const zi=[new A,new A,new A,new A,new A,new A,new A,new A],ri=new A,jr=new Ms,eo=new A,no=new A,io=new A,ss=new A,os=new A,ys=new A,er=new A,Zr=new A,Kr=new A,Ss=new A;function Vc(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){Ss.fromArray(s,o);const a=i.x*Math.abs(Ss.x)+i.y*Math.abs(Ss.y)+i.z*Math.abs(Ss.z),c=t.dot(Ss),l=e.dot(Ss),h=n.dot(Ss);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Qm=new Ms,nr=new A,Hc=new A;class js{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qm.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nr.subVectors(t,this.center);const e=nr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(nr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nr.copy(t.center).add(Hc)),this.expandByPoint(nr.copy(t.center).sub(Hc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new A,Gc=new A,Jr=new A,rs=new A,Wc=new A,Qr=new A,Xc=new A;class Tc{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ui.copy(this.origin).addScaledVector(this.direction,e),Ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Gc.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),rs.copy(this.origin).sub(Gc);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Jr),a=rs.dot(this.direction),c=-rs.dot(Jr),l=rs.lengthSq(),h=Math.abs(1-r*r);let u,d,f,p;if(h>0)if(u=r*c-a,d=r*a-c,p=o*h,u>=0)if(d>=-p)if(d<=p){const x=1/h;u*=x,d*=x,f=u*(u+r*d+2*a)+d*(r*u+d+2*c)+l}else d=o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d=-o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-c),o),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-o,-c),o),f=d*(d+2*c)+l):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-c),o),f=-u*u+d*(d+2*c)+l);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Gc).addScaledVector(Jr,d),f}intersectSphere(t,e){Ui.subVectors(t.center,this.origin);const n=Ui.dot(this.direction),i=Ui.dot(Ui)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ui)!==null}intersectTriangle(t,e,n,i,o){Wc.subVectors(e,t),Qr.subVectors(n,t),Xc.crossVectors(Wc,Qr);let r=this.direction.dot(Xc),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;rs.subVectors(this.origin,t);const c=a*this.direction.dot(Qr.crossVectors(rs,Qr));if(c<0)return null;const l=a*this.direction.dot(Wc.cross(rs));if(l<0||c+l>r)return null;const h=-a*rs.dot(Xc);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,i,o,r,a,c,l,h,u,d,f,p,x,g){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l,h,u,d,f,p,x,g)}set(t,e,n,i,o,r,a,c,l,h,u,d,f,p,x,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=o,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/so.setFromMatrixColumn(t,0).length(),o=1/so.setFromMatrixColumn(t,1).length(),r=1/so.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,f=r*u,p=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+p*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=p+f*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,p=l*h,x=l*u;e[0]=d+x*a,e[4]=p*a-f,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-p,e[6]=x+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,p=l*h,x=l*u;e[0]=d-x*a,e[4]=-r*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=r*h,e[9]=x-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*h,f=r*u,p=a*h,x=a*u;e[0]=c*h,e[4]=p*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-p,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,f=r*l,p=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){const d=r*c,f=r*l,p=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=r*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tg,t,eg)}lookAt(t,e,n){const i=this.elements;return Gn.subVectors(t,e),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),as.crossVectors(n,Gn),as.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),as.crossVectors(n,Gn)),as.normalize(),ta.crossVectors(Gn,as),i[0]=as.x,i[4]=ta.x,i[8]=Gn.x,i[1]=as.y,i[5]=ta.y,i[9]=Gn.y,i[2]=as.z,i[6]=ta.z,i[10]=Gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],_=n[3],y=n[7],v=n[11],P=n[15],E=i[0],S=i[4],C=i[8],b=i[12],w=i[1],D=i[5],F=i[9],k=i[13],B=i[2],V=i[6],$=i[10],st=i[14],H=i[3],ft=i[7],vt=i[11],Mt=i[15];return o[0]=r*E+a*w+c*B+l*H,o[4]=r*S+a*D+c*V+l*ft,o[8]=r*C+a*F+c*$+l*vt,o[12]=r*b+a*k+c*st+l*Mt,o[1]=h*E+u*w+d*B+f*H,o[5]=h*S+u*D+d*V+f*ft,o[9]=h*C+u*F+d*$+f*vt,o[13]=h*b+u*k+d*st+f*Mt,o[2]=p*E+x*w+g*B+m*H,o[6]=p*S+x*D+g*V+m*ft,o[10]=p*C+x*F+g*$+m*vt,o[14]=p*b+x*k+g*st+m*Mt,o[3]=_*E+y*w+v*B+P*H,o[7]=_*S+y*D+v*V+P*ft,o[11]=_*C+y*F+v*$+P*vt,o[15]=_*b+y*k+v*st+P*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15];return p*(+o*c*u-i*l*u-o*a*d+n*l*d+i*a*f-n*c*f)+x*(+e*c*f-e*l*d+o*r*d-i*r*f+i*l*h-o*c*h)+g*(+e*l*u-e*a*f-o*r*u+n*r*f+o*a*h-n*l*h)+m*(-i*a*h-e*c*u+e*a*d+i*r*u-n*r*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],_=u*g*l-x*d*l+x*c*f-a*g*f-u*c*m+a*d*m,y=p*d*l-h*g*l-p*c*f+r*g*f+h*c*m-r*d*m,v=h*x*l-p*u*l+p*a*f-r*x*f-h*a*m+r*u*m,P=p*u*c-h*x*c-p*a*d+r*x*d+h*a*g-r*u*g,E=e*_+n*y+i*v+o*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/E;return t[0]=_*S,t[1]=(x*d*o-u*g*o-x*i*f+n*g*f+u*i*m-n*d*m)*S,t[2]=(a*g*o-x*c*o+x*i*l-n*g*l-a*i*m+n*c*m)*S,t[3]=(u*c*o-a*d*o-u*i*l+n*d*l+a*i*f-n*c*f)*S,t[4]=y*S,t[5]=(h*g*o-p*d*o+p*i*f-e*g*f-h*i*m+e*d*m)*S,t[6]=(p*c*o-r*g*o-p*i*l+e*g*l+r*i*m-e*c*m)*S,t[7]=(r*d*o-h*c*o+h*i*l-e*d*l-r*i*f+e*c*f)*S,t[8]=v*S,t[9]=(p*u*o-h*x*o-p*n*f+e*x*f+h*n*m-e*u*m)*S,t[10]=(r*x*o-p*a*o+p*n*l-e*x*l-r*n*m+e*a*m)*S,t[11]=(h*a*o-r*u*o-h*n*l+e*u*l+r*n*f-e*a*f)*S,t[12]=P*S,t[13]=(h*x*i-p*u*i+p*n*d-e*x*d-h*n*g+e*u*g)*S,t[14]=(p*a*i-r*x*i-p*n*c+e*x*c+r*n*g-e*a*g)*S,t[15]=(r*u*i-h*a*i+h*n*c-e*u*c-r*n*d+e*a*d)*S,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*r,0,l*c-i*a,h*c+i*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,d=o*l,f=o*h,p=o*u,x=r*h,g=r*u,m=a*u,_=c*l,y=c*h,v=c*u,P=n.x,E=n.y,S=n.z;return i[0]=(1-(x+m))*P,i[1]=(f+v)*P,i[2]=(p-y)*P,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(d+m))*E,i[6]=(g+_)*E,i[7]=0,i[8]=(p+y)*S,i[9]=(g-_)*S,i[10]=(1-(d+x))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=so.set(i[0],i[1],i[2]).length();const r=so.set(i[4],i[5],i[6]).length(),a=so.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],ai.copy(this);const l=1/o,h=1/r,u=1/a;return ai.elements[0]*=l,ai.elements[1]*=l,ai.elements[2]*=l,ai.elements[4]*=h,ai.elements[5]*=h,ai.elements[6]*=h,ai.elements[8]*=u,ai.elements[9]*=u,ai.elements[10]*=u,e.setFromRotationMatrix(ai),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=Ki){const c=this.elements,l=2*o/(e-t),h=2*o/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,p;if(a===Ki)f=-(r+o)/(r-o),p=-2*r*o/(r-o);else if(a===hc)f=-r/(r-o),p=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=Ki){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(r-o),d=(e+t)*l,f=(n+i)*h;let p,x;if(a===Ki)p=(r+o)*u,x=-2*u;else if(a===hc)p=o*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const so=new A,ai=new ce,tg=new A(0,0,0),eg=new A(1,1,1),as=new A,ta=new A,Gn=new A,ed=new ce,nd=new bn;class mi{constructor(t=0,e=0,n=0,i=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-tn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ed.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ed,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nd.setFromEuler(this),this.setFromQuaternion(nd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class z0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ng=0;const id=new A,oo=new bn,Fi=new ce,ea=new A,ir=new A,ig=new A,sg=new bn,sd=new A(1,0,0),od=new A(0,1,0),rd=new A(0,0,1),ad={type:"added"},og={type:"removed"},ro={type:"childadded",child:null},$c={type:"childremoved",child:null};class en extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const t=new A,e=new mi,n=new bn,i=new A(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ce},normalMatrix:{value:new ue}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new z0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return oo.setFromAxisAngle(t,e),this.quaternion.multiply(oo),this}rotateOnWorldAxis(t,e){return oo.setFromAxisAngle(t,e),this.quaternion.premultiply(oo),this}rotateX(t){return this.rotateOnAxis(sd,t)}rotateY(t){return this.rotateOnAxis(od,t)}rotateZ(t){return this.rotateOnAxis(rd,t)}translateOnAxis(t,e){return id.copy(t).applyQuaternion(this.quaternion),this.position.add(id.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sd,t)}translateY(t){return this.translateOnAxis(od,t)}translateZ(t){return this.translateOnAxis(rd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ea.copy(t):ea.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(ir,ea,this.up):Fi.lookAt(ea,ir,this.up),this.quaternion.setFromRotationMatrix(Fi),i&&(Fi.extractRotation(i.matrixWorld),oo.setFromRotationMatrix(Fi),this.quaternion.premultiply(oo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ad),ro.child=t,this.dispatchEvent(ro),ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(og),$c.child=t,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ad),ro.child=t,this.dispatchEvent(ro),ro.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t,ig),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,sg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),p=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}en.DEFAULT_UP=new A(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new A,ki=new A,qc=new A,Oi=new A,ao=new A,co=new A,cd=new A,Yc=new A,jc=new A,Zc=new A,Kc=new Oe,Jc=new Oe,Qc=new Oe;class ui{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ci.subVectors(t,e),i.cross(ci);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){ci.subVectors(i,e),ki.subVectors(n,e),qc.subVectors(t,e);const r=ci.dot(ci),a=ci.dot(ki),c=ci.dot(qc),l=ki.dot(ki),h=ki.dot(qc),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,p=(r*h-a*c)*d;return o.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(t,e,n,i,o,r,a,c){return this.getBarycoord(t,e,n,i,Oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Oi.x),c.addScaledVector(r,Oi.y),c.addScaledVector(a,Oi.z),c)}static getInterpolatedAttribute(t,e,n,i,o,r){return Kc.setScalar(0),Jc.setScalar(0),Qc.setScalar(0),Kc.fromBufferAttribute(t,e),Jc.fromBufferAttribute(t,n),Qc.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Kc,o.x),r.addScaledVector(Jc,o.y),r.addScaledVector(Qc,o.z),r}static isFrontFacing(t,e,n,i){return ci.subVectors(n,e),ki.subVectors(t,e),ci.cross(ki).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ci.cross(ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ui.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return ui.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;ao.subVectors(i,n),co.subVectors(o,n),Yc.subVectors(t,n);const c=ao.dot(Yc),l=co.dot(Yc);if(c<=0&&l<=0)return e.copy(n);jc.subVectors(t,i);const h=ao.dot(jc),u=co.dot(jc);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(ao,r);Zc.subVectors(t,o);const f=ao.dot(Zc),p=co.dot(Zc);if(p>=0&&f<=p)return e.copy(o);const x=f*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(co,a);const g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return cd.subVectors(o,i),a=(u-h)/(u-h+(f-p)),e.copy(i).addScaledVector(cd,a);const m=1/(g+x+d);return r=x*m,a=d*m,e.copy(n).addScaledVector(ao,r).addScaledVector(co,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const U0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},na={h:0,s:0,l:0};function tl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class te{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ge.workingColorSpace){if(t=Hm(t,1),e=tn(e,0,1),n=tn(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=tl(r,o,t+1/3),this.g=tl(r,o,t),this.b=tl(r,o,t-1/3)}return ge.toWorkingColorSpace(this,i),this}setStyle(t,e=Xe){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const n=U0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}copyLinearToSRGB(t){return this.r=Io(t.r),this.g=Io(t.g),this.b=Io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return ge.fromWorkingColorSpace(vn.copy(this),t),Math.round(tn(vn.r*255,0,255))*65536+Math.round(tn(vn.g*255,0,255))*256+Math.round(tn(vn.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.fromWorkingColorSpace(vn.copy(this),e);const n=vn.r,i=vn.g,o=vn.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case n:c=(i-o)/u+(i<o?6:0);break;case i:c=(o-n)/u+2;break;case o:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.fromWorkingColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=Xe){ge.fromWorkingColorSpace(vn.copy(this),t);const e=vn.r,n=vn.g,i=vn.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(cs),this.setHSL(cs.h+t,cs.s+e,cs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(cs),t.getHSL(na);const n=Fc(cs.h,na.h,e),i=Fc(cs.s,na.s,e),o=Fc(cs.l,na.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new te;te.NAMES=U0;let rg=0;class Zs extends Ys{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=jo(),this.name="",this.blending=Po,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Wl,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Po&&(n.blending=this.blending),this.side!==_s&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gl&&(n.blendSrc=this.blendSrc),this.blendDst!==Wl&&(n.blendDst=this.blendDst),this.blendEquation!==Us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ri extends Zs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=_0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const qi=ag();function ag(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const o=new Uint32Array(2048),r=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,o[c]=l|h}for(let c=1024;c<2048;++c)o[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)r[c]=c<<23;r[31]=1199570944,r[32]=2147483648;for(let c=33;c<63;++c)r[c]=2147483648+(c-32<<23);r[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:o,exponentTable:r,offsetTable:a}}function cg(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=tn(s,-65504,65504),qi.floatView[0]=s;const t=qi.uint32View[0],e=t>>23&511;return qi.baseTable[e]+((t&8388607)>>qi.shiftTable[e])}function lg(s){const t=s>>10;return qi.uint32View[0]=qi.mantissaTable[qi.offsetTable[t]+(s&1023)]+qi.exponentTable[t],qi.floatView[0]}const ld={toHalfFloat:cg,fromHalfFloat:lg},qe=new A,ia=new Pt;class nn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$u,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ia.fromBufferAttribute(this,e),ia.applyMatrix3(t),this.setXY(e,ia.x,ia.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=tr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=tr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=tr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=tr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=tr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Dn(e,this.array),n=Dn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Dn(e,this.array),n=Dn(n,this.array),i=Dn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=Dn(e,this.array),n=Dn(n,this.array),i=Dn(i,this.array),o=Dn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$u&&(t.usage=this.usage),t}}class F0 extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class k0 extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let hg=0;const Kn=new ce,el=new en,lo=new A,Wn=new Ms,sr=new Ms,rn=new A;class ze extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(I0(t)?k0:F0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ue().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Kn.makeRotationFromQuaternion(t),this.applyMatrix4(Kn),this}rotateX(t){return Kn.makeRotationX(t),this.applyMatrix4(Kn),this}rotateY(t){return Kn.makeRotationY(t),this.applyMatrix4(Kn),this}rotateZ(t){return Kn.makeRotationZ(t),this.applyMatrix4(Kn),this}translate(t,e,n){return Kn.makeTranslation(t,e,n),this.applyMatrix4(Kn),this}scale(t,e,n){return Kn.makeScale(t,e,n),this.applyMatrix4(Kn),this}lookAt(t){return el.lookAt(t),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new fe(n,3))}else{for(let n=0,i=e.count;n<i;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];Wn.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Wn.min,sr.min),Wn.expandByPoint(rn),rn.addVectors(Wn.max,sr.max),Wn.expandByPoint(rn)):(Wn.expandByPoint(sr.min),Wn.expandByPoint(sr.max))}Wn.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)rn.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(rn));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)rn.fromBufferAttribute(a,l),c&&(lo.fromBufferAttribute(t,l),rn.add(lo)),i=Math.max(i,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new A,c[C]=new A;const l=new A,h=new A,u=new A,d=new Pt,f=new Pt,p=new Pt,x=new A,g=new A;function m(C,b,w){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,w),d.fromBufferAttribute(o,C),f.fromBufferAttribute(o,b),p.fromBufferAttribute(o,w),h.sub(l),u.sub(l),f.sub(d),p.sub(d);const D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(D),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(D),a[C].add(x),a[b].add(x),a[w].add(x),c[C].add(g),c[b].add(g),c[w].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let C=0,b=_.length;C<b;++C){const w=_[C],D=w.start,F=w.count;for(let k=D,B=D+F;k<B;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const y=new A,v=new A,P=new A,E=new A;function S(C){P.fromBufferAttribute(i,C),E.copy(P);const b=a[C];y.copy(b),y.sub(P.multiplyScalar(P.dot(b))).normalize(),v.crossVectors(E,b);const D=v.dot(c[C])<0?-1:1;r.setXYZW(C,y.x,y.y,y.z,D)}for(let C=0,b=_.length;C<b;++C){const w=_[C],D=w.start,F=w.count;for(let k=D,B=D+F;k<B;k+=3)S(t.getX(k+0)),S(t.getX(k+1)),S(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new A,o=new A,r=new A,a=new A,c=new A,l=new A,h=new A,u=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,p),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,p=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let m=0;m<h;m++)d[p++]=l[f++]}return new nn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hd=new ce,ws=new Tc,sa=new js,ud=new A,oa=new A,ra=new A,aa=new A,nl=new A,ca=new A,dd=new A,la=new A;class zt extends en{constructor(t=new ze,e=new Ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){ca.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(nl.fromBufferAttribute(u,t),r?ca.addScaledVector(nl,h):ca.addScaledVector(nl.sub(e),h))}e.add(ca)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(o),ws.copy(t.ray).recast(t.near),!(sa.containsPoint(ws.origin)===!1&&(ws.intersectSphere(sa,ud)===null||ws.origin.distanceToSquared(ud)>(t.far-t.near)**2))&&(hd.copy(o).invert(),ws.copy(t.ray).applyMatrix4(hd),!(n.boundingBox!==null&&ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ws)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,x=d.length;p<x;p++){const g=d[p],m=r[g.materialIndex],_=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=_,P=y;v<P;v+=3){const E=a.getX(v),S=a.getX(v+1),C=a.getX(v+2);i=ha(this,m,t,n,l,h,u,E,S,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const _=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);i=ha(this,r,t,n,l,h,u,_,y,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let p=0,x=d.length;p<x;p++){const g=d[p],m=r[g.materialIndex],_=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=_,P=y;v<P;v+=3){const E=v,S=v+1,C=v+2;i=ha(this,m,t,n,l,h,u,E,S,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const _=g,y=g+1,v=g+2;i=ha(this,r,t,n,l,h,u,_,y,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function ug(s,t,e,n,i,o,r,a){let c;if(t.side===Ln?c=n.intersectTriangle(r,o,i,!0,a):c=n.intersectTriangle(i,o,r,t.side===_s,a),c===null)return null;la.copy(a),la.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(la);return l<e.near||l>e.far?null:{distance:l,point:la.clone(),object:s}}function ha(s,t,e,n,i,o,r,a,c,l){s.getVertexPosition(a,oa),s.getVertexPosition(c,ra),s.getVertexPosition(l,aa);const h=ug(s,t,e,n,oa,ra,aa,dd);if(h){const u=new A;ui.getBarycoord(dd,oa,ra,aa,u),i&&(h.uv=ui.getInterpolatedAttribute(i,a,c,l,u,new Pt)),o&&(h.uv1=ui.getInterpolatedAttribute(o,a,c,l,u,new Pt)),r&&(h.normal=ui.getInterpolatedAttribute(r,a,c,l,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new A,materialIndex:0};ui.getNormal(oa,ra,aa,d.normal),h.face=d,h.barycoord=u}return h}class re extends ze{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,e,t,r,o,0),p("z","y","x",1,-1,n,e,-t,r,o,1),p("x","z","y",1,1,t,n,e,i,r,2),p("x","z","y",1,-1,t,n,-e,i,r,3),p("x","y","z",1,-1,t,e,n,i,o,4),p("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function p(x,g,m,_,y,v,P,E,S,C,b){const w=v/S,D=P/C,F=v/2,k=P/2,B=E/2,V=S+1,$=C+1;let st=0,H=0;const ft=new A;for(let vt=0;vt<$;vt++){const Mt=vt*D-k;for(let at=0;at<V;at++){const xt=at*w-F;ft[x]=xt*_,ft[g]=Mt*y,ft[m]=B,l.push(ft.x,ft.y,ft.z),ft[x]=0,ft[g]=0,ft[m]=E>0?1:-1,h.push(ft.x,ft.y,ft.z),u.push(at/S),u.push(1-vt/C),st+=1}}for(let vt=0;vt<C;vt++)for(let Mt=0;Mt<S;Mt++){const at=d+Mt+V*vt,xt=d+Mt+V*(vt+1),K=d+(Mt+1)+V*(vt+1),L=d+(Mt+1)+V*vt;c.push(at,xt,L),c.push(xt,K,L),H+=6}a.addGroup(f,H,b),f+=H,d+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ho(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Rn(s){const t={};for(let e=0;e<s.length;e++){const n=Ho(s[e]);for(const i in n)t[i]=n[i]}return t}function dg(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function O0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const fg={clone:Ho,merge:Rn};var pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends Zs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pg,this.fragmentShader=mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ho(t.uniforms),this.uniformsGroups=dg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class B0 extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Ki}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new A,fd=new Pt,pd=new Pt;class Fn extends B0{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ah*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ah*2*Math.atan(Math.tan(nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,e){return this.getViewBounds(t,fd,pd),e.subVectors(pd,fd)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(nc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ho=-90,uo=1;class gg extends en{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Fn(ho,uo,t,e);i.layers=this.layers,this.add(i);const o=new Fn(ho,uo,t,e);o.layers=this.layers,this.add(o);const r=new Fn(ho,uo,t,e);r.layers=this.layers,this.add(r);const a=new Fn(ho,uo,t,e);a.layers=this.layers,this.add(a);const c=new Fn(ho,uo,t,e);c.layers=this.layers,this.add(c);const l=new Fn(ho,uo,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Ki)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===hc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class V0 extends wn{constructor(t,e,n,i,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ko,super(t,e,n,i,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xg extends Ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new V0(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:On}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new re(5,5,5),o=new si({name:"CubemapFromEquirect",uniforms:Ho(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ln,blending:ps});o.uniforms.tEquirect.value=e;const r=new zt(i,o),a=e.minFilter;return e.minFilter===Bs&&(e.minFilter=On),new gg(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}const il=new A,vg=new A,_g=new ue;class Wi{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=il.subVectors(n,e).cross(vg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(il),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||_g.getNormalMatrix(t),i=this.coplanarPoint(il).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new js,ua=new A;class Ac{constructor(t=new Wi,e=new Wi,n=new Wi,i=new Wi,o=new Wi,r=new Wi){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ki){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],p=i[9],x=i[10],g=i[11],m=i[12],_=i[13],y=i[14],v=i[15];if(n[0].setComponents(c-o,d-l,g-f,v-m).normalize(),n[1].setComponents(c+o,d+l,g+f,v+m).normalize(),n[2].setComponents(c+r,d+h,g+p,v+_).normalize(),n[3].setComponents(c-r,d-h,g-p,v-_).normalize(),n[4].setComponents(c-a,d-u,g-x,v-y).normalize(),e===Ki)n[5].setComponents(c+a,d+u,g+x,v+y).normalize();else if(e===hc)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(t){return bs.center.set(0,0,0),bs.radius=.7071067811865476,bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ua.x=i.normal.x>0?t.max.x:t.min.x,ua.y=i.normal.y>0?t.max.y:t.min.y,ua.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ua)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function H0(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function Mg(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const x=u[f];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:o,update:r}}class je extends ze{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){const _=m*d-r;for(let y=0;y<l;y++){const v=y*u-o;p.push(v,-_,0),x.push(0,0,1),g.push(y/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<a;_++){const y=_+l*m,v=_+l*(m+1),P=_+1+l*(m+1),E=_+1+l*m;f.push(y,v,E),f.push(v,P,E)}this.setIndex(f),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(x,3)),this.setAttribute("uv",new fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.width,t.height,t.widthSegments,t.heightSegments)}}var yg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sg=`#ifdef USE_ALPHAHASH
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
#endif`,wg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ag=`#ifdef USE_AOMAP
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
#endif`,Rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cg=`#ifdef USE_BATCHING
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
#endif`,Pg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ig=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ng=`#ifdef USE_IRIDESCENCE
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
#endif`,zg=`#ifdef USE_BUMPMAP
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
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wg=`#define PI 3.141592653589793
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
} // validated`,Xg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$g=`vec3 transformedNormal = objectNormal;
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
#endif`,qg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qg=`#ifdef USE_ENVMAP
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
#endif`,t1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,e1=`#ifdef USE_ENVMAP
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
#endif`,n1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i1=`#ifdef USE_ENVMAP
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
#endif`,s1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c1=`#ifdef USE_GRADIENTMAP
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
}`,l1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d1=`uniform bool receiveShadow;
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
#endif`,f1=`#ifdef USE_ENVMAP
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
#endif`,p1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v1=`PhysicalMaterial material;
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
#endif`,_1=`struct PhysicalMaterial {
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
}`,M1=`
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
#endif`,y1=`#if defined( RE_IndirectDiffuse )
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
#endif`,S1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,P1=`#if defined( USE_POINTS_UV )
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
#endif`,L1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U1=`#ifdef USE_MORPHTARGETS
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
#endif`,F1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G1=`#ifdef USE_NORMALMAP
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
#endif`,W1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ex=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ox=`float getShadowMask() {
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
}`,rx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ax=`#ifdef USE_SKINNING
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
#endif`,cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lx=`#ifdef USE_SKINNING
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
#endif`,hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ux=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,px=`#ifdef USE_TRANSMISSION
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
#endif`,mx=`#ifdef USE_TRANSMISSION
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
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yx=`uniform sampler2D t2D;
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
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ex=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`#include <common>
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
}`,Ax=`#if DEPTH_PACKING == 3200
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
}`,Rx=`#define DISTANCE
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
}`,Cx=`#define DISTANCE
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
}`,Px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`uniform float scale;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Nx=`#include <common>
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
}`,zx=`uniform vec3 diffuse;
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
}`,Ux=`#define LAMBERT
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
}`,Fx=`#define LAMBERT
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
}`,kx=`#define MATCAP
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
}`,Ox=`#define MATCAP
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
}`,Bx=`#define NORMAL
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
}`,Vx=`#define NORMAL
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
}`,Hx=`#define PHONG
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
}`,Gx=`#define PHONG
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
}`,Wx=`#define STANDARD
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
}`,Xx=`#define STANDARD
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
}`,$x=`#define TOON
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
}`,qx=`#define TOON
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
}`,Yx=`uniform float size;
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
}`,jx=`uniform vec3 diffuse;
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
}`,Zx=`#include <common>
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
}`,Kx=`uniform vec3 color;
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
}`,Jx=`uniform float rotation;
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
}`,Qx=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:yg,alphahash_pars_fragment:Sg,alphamap_fragment:wg,alphamap_pars_fragment:bg,alphatest_fragment:Eg,alphatest_pars_fragment:Tg,aomap_fragment:Ag,aomap_pars_fragment:Rg,batching_pars_vertex:Cg,batching_vertex:Pg,begin_vertex:Lg,beginnormal_vertex:Ig,bsdfs:Dg,iridescence_fragment:Ng,bumpmap_pars_fragment:zg,clipping_planes_fragment:Ug,clipping_planes_pars_fragment:Fg,clipping_planes_pars_vertex:kg,clipping_planes_vertex:Og,color_fragment:Bg,color_pars_fragment:Vg,color_pars_vertex:Hg,color_vertex:Gg,common:Wg,cube_uv_reflection_fragment:Xg,defaultnormal_vertex:$g,displacementmap_pars_vertex:qg,displacementmap_vertex:Yg,emissivemap_fragment:jg,emissivemap_pars_fragment:Zg,colorspace_fragment:Kg,colorspace_pars_fragment:Jg,envmap_fragment:Qg,envmap_common_pars_fragment:t1,envmap_pars_fragment:e1,envmap_pars_vertex:n1,envmap_physical_pars_fragment:f1,envmap_vertex:i1,fog_vertex:s1,fog_pars_vertex:o1,fog_fragment:r1,fog_pars_fragment:a1,gradientmap_pars_fragment:c1,lightmap_pars_fragment:l1,lights_lambert_fragment:h1,lights_lambert_pars_fragment:u1,lights_pars_begin:d1,lights_toon_fragment:p1,lights_toon_pars_fragment:m1,lights_phong_fragment:g1,lights_phong_pars_fragment:x1,lights_physical_fragment:v1,lights_physical_pars_fragment:_1,lights_fragment_begin:M1,lights_fragment_maps:y1,lights_fragment_end:S1,logdepthbuf_fragment:w1,logdepthbuf_pars_fragment:b1,logdepthbuf_pars_vertex:E1,logdepthbuf_vertex:T1,map_fragment:A1,map_pars_fragment:R1,map_particle_fragment:C1,map_particle_pars_fragment:P1,metalnessmap_fragment:L1,metalnessmap_pars_fragment:I1,morphinstance_vertex:D1,morphcolor_vertex:N1,morphnormal_vertex:z1,morphtarget_pars_vertex:U1,morphtarget_vertex:F1,normal_fragment_begin:k1,normal_fragment_maps:O1,normal_pars_fragment:B1,normal_pars_vertex:V1,normal_vertex:H1,normalmap_pars_fragment:G1,clearcoat_normal_fragment_begin:W1,clearcoat_normal_fragment_maps:X1,clearcoat_pars_fragment:$1,iridescence_pars_fragment:q1,opaque_fragment:Y1,packing:j1,premultiplied_alpha_fragment:Z1,project_vertex:K1,dithering_fragment:J1,dithering_pars_fragment:Q1,roughnessmap_fragment:tx,roughnessmap_pars_fragment:ex,shadowmap_pars_fragment:nx,shadowmap_pars_vertex:ix,shadowmap_vertex:sx,shadowmask_pars_fragment:ox,skinbase_vertex:rx,skinning_pars_vertex:ax,skinning_vertex:cx,skinnormal_vertex:lx,specularmap_fragment:hx,specularmap_pars_fragment:ux,tonemapping_fragment:dx,tonemapping_pars_fragment:fx,transmission_fragment:px,transmission_pars_fragment:mx,uv_pars_fragment:gx,uv_pars_vertex:xx,uv_vertex:vx,worldpos_vertex:_x,background_vert:Mx,background_frag:yx,backgroundCube_vert:Sx,backgroundCube_frag:wx,cube_vert:bx,cube_frag:Ex,depth_vert:Tx,depth_frag:Ax,distanceRGBA_vert:Rx,distanceRGBA_frag:Cx,equirect_vert:Px,equirect_frag:Lx,linedashed_vert:Ix,linedashed_frag:Dx,meshbasic_vert:Nx,meshbasic_frag:zx,meshlambert_vert:Ux,meshlambert_frag:Fx,meshmatcap_vert:kx,meshmatcap_frag:Ox,meshnormal_vert:Bx,meshnormal_frag:Vx,meshphong_vert:Hx,meshphong_frag:Gx,meshphysical_vert:Wx,meshphysical_frag:Xx,meshtoon_vert:$x,meshtoon_frag:qx,points_vert:Yx,points_frag:jx,shadow_vert:Zx,shadow_frag:Kx,sprite_vert:Jx,sprite_frag:Qx},Dt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Ei={basic:{uniforms:Rn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Rn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new te(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Rn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Rn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Rn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new te(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Rn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Rn([Dt.points,Dt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Rn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Rn([Dt.common,Dt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Rn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Rn([Dt.sprite,Dt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:Rn([Dt.common,Dt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:Rn([Dt.lights,Dt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Ei.physical={uniforms:Rn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const da={r:0,b:0,g:0},Es=new mi,tv=new ce;function ev(s,t,e,n,i,o,r){const a=new te(0);let c=o===!0?0:1,l,h,u=null,d=0,f=null;function p(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function x(_){let y=!1;const v=p(_);v===null?m(a,c):v&&v.isColor&&(m(v,1),y=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(_,y){const v=p(y);v&&(v.isCubeTexture||v.mapping===wc)?(h===void 0&&(h=new zt(new re(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Ho(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Es.copy(y.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tv.makeRotationFromEuler(Es)),h.material.toneMapped=ge.getTransfer(v.colorSpace)!==Ae,(u!==v||d!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new zt(new je(2,2),new si({name:"BackgroundMaterial",uniforms:Ho(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ge.getTransfer(v.colorSpace)!==Ae,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,y){_.getRGB(da,O0(s)),n.buffers.color.setClear(da.r,da.g,da.b,y,r)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),c=y,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,m(a,c)},render:x,addToRenderList:g}}function nv(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let o=i,r=!1;function a(w,D,F,k,B){let V=!1;const $=u(k,F,D);o!==$&&(o=$,l(o.object)),V=f(w,k,F,B),V&&p(w,k,F,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(V||r)&&(r=!1,v(w,D,F,k),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return s.createVertexArray()}function l(w){return s.bindVertexArray(w)}function h(w){return s.deleteVertexArray(w)}function u(w,D,F){const k=F.wireframe===!0;let B=n[w.id];B===void 0&&(B={},n[w.id]=B);let V=B[D.id];V===void 0&&(V={},B[D.id]=V);let $=V[k];return $===void 0&&($=d(c()),V[k]=$),$}function d(w){const D=[],F=[],k=[];for(let B=0;B<e;B++)D[B]=0,F[B]=0,k[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:k,object:w,attributes:{},index:null}}function f(w,D,F,k){const B=o.attributes,V=D.attributes;let $=0;const st=F.getAttributes();for(const H in st)if(st[H].location>=0){const vt=B[H];let Mt=V[H];if(Mt===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor)),vt===void 0||vt.attribute!==Mt||Mt&&vt.data!==Mt.data)return!0;$++}return o.attributesNum!==$||o.index!==k}function p(w,D,F,k){const B={},V=D.attributes;let $=0;const st=F.getAttributes();for(const H in st)if(st[H].location>=0){let vt=V[H];vt===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(vt=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(vt=w.instanceColor));const Mt={};Mt.attribute=vt,vt&&vt.data&&(Mt.data=vt.data),B[H]=Mt,$++}o.attributes=B,o.attributesNum=$,o.index=k}function x(){const w=o.newAttributes;for(let D=0,F=w.length;D<F;D++)w[D]=0}function g(w){m(w,0)}function m(w,D){const F=o.newAttributes,k=o.enabledAttributes,B=o.attributeDivisors;F[w]=1,k[w]===0&&(s.enableVertexAttribArray(w),k[w]=1),B[w]!==D&&(s.vertexAttribDivisor(w,D),B[w]=D)}function _(){const w=o.newAttributes,D=o.enabledAttributes;for(let F=0,k=D.length;F<k;F++)D[F]!==w[F]&&(s.disableVertexAttribArray(F),D[F]=0)}function y(w,D,F,k,B,V,$){$===!0?s.vertexAttribIPointer(w,D,F,B,V):s.vertexAttribPointer(w,D,F,k,B,V)}function v(w,D,F,k){x();const B=k.attributes,V=F.getAttributes(),$=D.defaultAttributeValues;for(const st in V){const H=V[st];if(H.location>=0){let ft=B[st];if(ft===void 0&&(st==="instanceMatrix"&&w.instanceMatrix&&(ft=w.instanceMatrix),st==="instanceColor"&&w.instanceColor&&(ft=w.instanceColor)),ft!==void 0){const vt=ft.normalized,Mt=ft.itemSize,at=t.get(ft);if(at===void 0)continue;const xt=at.buffer,K=at.type,L=at.bytesPerElement,N=K===s.INT||K===s.UNSIGNED_INT||ft.gpuType===eu;if(ft.isInterleavedBufferAttribute){const O=ft.data,X=O.stride,ot=ft.offset;if(O.isInstancedInterleavedBuffer){for(let rt=0;rt<H.locationSize;rt++)m(H.location+rt,O.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let rt=0;rt<H.locationSize;rt++)g(H.location+rt);s.bindBuffer(s.ARRAY_BUFFER,xt);for(let rt=0;rt<H.locationSize;rt++)y(H.location+rt,Mt/H.locationSize,K,vt,X*L,(ot+Mt/H.locationSize*rt)*L,N)}else{if(ft.isInstancedBufferAttribute){for(let O=0;O<H.locationSize;O++)m(H.location+O,ft.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let O=0;O<H.locationSize;O++)g(H.location+O);s.bindBuffer(s.ARRAY_BUFFER,xt);for(let O=0;O<H.locationSize;O++)y(H.location+O,Mt/H.locationSize,K,vt,Mt*L,Mt/H.locationSize*O*L,N)}}else if($!==void 0){const vt=$[st];if(vt!==void 0)switch(vt.length){case 2:s.vertexAttrib2fv(H.location,vt);break;case 3:s.vertexAttrib3fv(H.location,vt);break;case 4:s.vertexAttrib4fv(H.location,vt);break;default:s.vertexAttrib1fv(H.location,vt)}}}}_()}function P(){C();for(const w in n){const D=n[w];for(const F in D){const k=D[F];for(const B in k)h(k[B].object),delete k[B];delete D[F]}delete n[w]}}function E(w){if(n[w.id]===void 0)return;const D=n[w.id];for(const F in D){const k=D[F];for(const B in k)h(k[B].object),delete k[B];delete D[F]}delete n[w.id]}function S(w){for(const D in n){const F=n[D];if(F[w.id]===void 0)continue;const k=F[w.id];for(const B in k)h(k[B].object),delete k[B];delete F[w.id]}}function C(){b(),r=!0,o!==i&&(o=i,l(o.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function iv(s,t,e){let n;function i(l){n=l}function o(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)r(l[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*d[x];e.update(p,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function sv(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(S){return!(S!==fi&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const C=S===Zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Qi&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Ai&&!C)}function c(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=p>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:P,maxSamples:E}}function ov(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new Wi,a=new ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||o&&!g)o?h(null):l();else{const _=o?0:n,y=_*4;let v=m.clippingState||null;c.value=v,v=h(p,d,y,f);for(let P=0;P!==y;++P)v[P]=e[P];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=c.value,p!==!0||g===null){const m=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,v=f;y!==x;++y,v+=4)r.copy(u[y]).applyMatrix4(_,a),r.normal.toArray(g,v),g[v+3]=r.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function rv(s){let t=new WeakMap;function e(r,a){return a===Jl?r.mapping=ko:a===Ql&&(r.mapping=Oo),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Jl||a===Ql)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new xg(c.height);return l.fromEquirectangularTexture(s,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class G0 extends B0{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const wo=4,md=[.125,.215,.35,.446,.526,.582],Fs=20,sl=new G0,gd=new te;let ol=null,rl=0,al=0,cl=!1;const Is=(1+Math.sqrt(5))/2,fo=1/Is,xd=[new A(-Is,fo,0),new A(Is,fo,0),new A(-fo,0,Is),new A(fo,0,Is),new A(0,Is,-fo),new A(0,Is,fo),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class vd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ol=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ol,rl,al),this._renderer.xr.enabled=cl,t.scissorTest=!1,fa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ko||t.mapping===Oo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ol=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:On,minFilter:On,generateMipmaps:!1,type:Zi,format:fi,colorSpace:Yo,depthBuffer:!1},i=_d(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_d(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=av(o)),this._blurMaterial=cv(o,t,e)}return i}_compileMaterial(t){const e=new zt(this._lodPlanes[0],t);this._renderer.compile(e,sl)}_sceneToCubeUV(t,e,n,i){const a=new Fn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(gd),h.toneMapping=ms,h.autoClear=!1;const f=new Ri({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),p=new zt(new re,f);let x=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(gd),x=!0);for(let m=0;m<6;m++){const _=m%3;_===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):_===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const y=this._cubeSize;fa(i,_*y,m>2?y:0,y,y),h.setRenderTarget(i),x&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ko||t.mapping===Oo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Md());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new zt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;fa(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,sl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=xd[(i-o-1)%xd.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new zt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Fs-1),x=o/p,g=isFinite(o)?1+Math.floor(h*x):Fs;g>Fs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fs}`);const m=[];let _=0;for(let S=0;S<Fs;++S){const C=S/x,b=Math.exp(-C*C/2);m.push(b),S===0?_+=b:S<g&&(_+=2*b)}for(let S=0;S<m.length;S++)m[S]=m[S]/_;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-n;const v=this._sizeLods[i],P=3*v*(i>y-wo?i-y+wo:0),E=4*(this._cubeSize-v);fa(e,P,E,3*v,2*v),c.setRenderTarget(e),c.render(u,sl)}}function av(s){const t=[],e=[],n=[];let i=s;const o=s-wo+1+md.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let c=1/a;r>s-wo?c=md[r-s+wo-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,x=3,g=2,m=1,_=new Float32Array(x*p*f),y=new Float32Array(g*p*f),v=new Float32Array(m*p*f);for(let E=0;E<f;E++){const S=E%3*2/3-1,C=E>2?0:-1,b=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];_.set(b,x*p*E),y.set(d,g*p*E);const w=[E,E,E,E,E,E];v.set(w,m*p*E)}const P=new ze;P.setAttribute("position",new nn(_,x)),P.setAttribute("uv",new nn(y,g)),P.setAttribute("faceIndex",new nn(v,m)),t.push(P),i>wo&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _d(s,t,e){const n=new Ii(s,t,e);return n.texture.mapping=wc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fa(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function cv(s,t,e){const n=new Float32Array(Fs),i=new A(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:cu(),fragmentShader:`

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
		`,blending:ps,depthTest:!1,depthWrite:!1})}function Md(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

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
		`,blending:ps,depthTest:!1,depthWrite:!1})}function yd(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function cu(){return`

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
	`}function lv(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Jl||c===Ql,h=c===ko||c===Oo;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new vd(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new vd(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function hv(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Mr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function uv(s,t,e,n){const i={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);for(const p in d.morphAttributes){const x=d.morphAttributes[p];for(let g=0,m=x.length;g<m;g++)t.remove(x[g])}d.removeEventListener("dispose",r),delete i[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const p in d)t.update(d[p],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const p in f){const x=f[p];for(let g=0,m=x.length;g<m;g++)t.update(x[g],s.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,p=u.attributes.position;let x=0;if(f!==null){const _=f.array;x=f.version;for(let y=0,v=_.length;y<v;y+=3){const P=_[y+0],E=_[y+1],S=_[y+2];d.push(P,E,E,S,S,P)}}else if(p!==void 0){const _=p.array;x=p.version;for(let y=0,v=_.length/3-1;y<v;y+=3){const P=y+0,E=y+1,S=y+2;d.push(P,E,E,S,S,P)}}else return;const g=new(I0(d)?k0:F0)(d,1);g.version=x;const m=o.get(u);m&&t.remove(m),o.set(u,g)}function h(u){const d=o.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function dv(s,t,e){let n;function i(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,f){s.drawElements(n,f,o,d*r),e.update(f,n,1)}function l(d,f,p){p!==0&&(s.drawElementsInstanced(n,f,o,d*r,p),e.update(f,n,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,n,1)}function u(d,f,p,x){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)l(d[m]/r,f[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,o,d,0,x,0,p);let m=0;for(let _=0;_<p;_++)m+=f[_]*x[_];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function fv(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function pv(s,t,e){const n=new WeakMap,i=new Oe;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),p===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,P=1;v>t.maxTextureSize&&(P=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const E=new Float32Array(v*P*4*u),S=new N0(E,v,P,u);S.type=Ai,S.needsUpdate=!0;const C=y*4;for(let w=0;w<u;w++){const D=g[w],F=m[w],k=_[w],B=v*P*4*w;for(let V=0;V<D.count;V++){const $=V*C;f===!0&&(i.fromBufferAttribute(D,V),E[B+$+0]=i.x,E[B+$+1]=i.y,E[B+$+2]=i.z,E[B+$+3]=0),p===!0&&(i.fromBufferAttribute(F,V),E[B+$+4]=i.x,E[B+$+5]=i.y,E[B+$+6]=i.z,E[B+$+7]=0),x===!0&&(i.fromBufferAttribute(k,V),E[B+$+8]=i.x,E[B+$+9]=i.y,E[B+$+10]=i.z,E[B+$+11]=k.itemSize===4?i.w:1)}}d={count:u,texture:S,size:new Pt(v,P)},n.set(a,d),a.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];const p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:o}}function mv(s,t,e,n){let i=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function r(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class lu extends wn{constructor(t,e,n,i,o,r,a,c,l,h=Lo){if(h!==Lo&&h!==Vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Lo&&(n=Xs),n===void 0&&h===Vo&&(n=Bo),super(null,i,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:jn,this.minFilter=c!==void 0?c:jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const W0=new wn,Sd=new lu(1,1),X0=new N0,$0=new Jm,q0=new V0,wd=[],bd=[],Ed=new Float32Array(16),Td=new Float32Array(9),Ad=new Float32Array(4);function Zo(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=wd[i];if(o===void 0&&(o=new Float32Array(i),wd[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function sn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function on(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Rc(s,t){let e=bd[t];e===void 0&&(e=new Int32Array(t),bd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function gv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function xv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2fv(this.addr,t),on(e,t)}}function vv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;s.uniform3fv(this.addr,t),on(e,t)}}function _v(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4fv(this.addr,t),on(e,t)}}function Mv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(sn(e,n))return;Ad.set(n),s.uniformMatrix2fv(this.addr,!1,Ad),on(e,n)}}function yv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(sn(e,n))return;Td.set(n),s.uniformMatrix3fv(this.addr,!1,Td),on(e,n)}}function Sv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(sn(e,n))return;Ed.set(n),s.uniformMatrix4fv(this.addr,!1,Ed),on(e,n)}}function wv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function bv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2iv(this.addr,t),on(e,t)}}function Ev(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;s.uniform3iv(this.addr,t),on(e,t)}}function Tv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4iv(this.addr,t),on(e,t)}}function Av(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Rv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2uiv(this.addr,t),on(e,t)}}function Cv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;s.uniform3uiv(this.addr,t),on(e,t)}}function Pv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4uiv(this.addr,t),on(e,t)}}function Lv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(Sd.compareFunction=L0,o=Sd):o=W0,e.setTexture2D(t||o,i)}function Iv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||$0,i)}function Dv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||q0,i)}function Nv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||X0,i)}function zv(s){switch(s){case 5126:return gv;case 35664:return xv;case 35665:return vv;case 35666:return _v;case 35674:return Mv;case 35675:return yv;case 35676:return Sv;case 5124:case 35670:return wv;case 35667:case 35671:return bv;case 35668:case 35672:return Ev;case 35669:case 35673:return Tv;case 5125:return Av;case 36294:return Rv;case 36295:return Cv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Iv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Nv}}function Uv(s,t){s.uniform1fv(this.addr,t)}function Fv(s,t){const e=Zo(t,this.size,2);s.uniform2fv(this.addr,e)}function kv(s,t){const e=Zo(t,this.size,3);s.uniform3fv(this.addr,e)}function Ov(s,t){const e=Zo(t,this.size,4);s.uniform4fv(this.addr,e)}function Bv(s,t){const e=Zo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Vv(s,t){const e=Zo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Hv(s,t){const e=Zo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Gv(s,t){s.uniform1iv(this.addr,t)}function Wv(s,t){s.uniform2iv(this.addr,t)}function Xv(s,t){s.uniform3iv(this.addr,t)}function $v(s,t){s.uniform4iv(this.addr,t)}function qv(s,t){s.uniform1uiv(this.addr,t)}function Yv(s,t){s.uniform2uiv(this.addr,t)}function jv(s,t){s.uniform3uiv(this.addr,t)}function Zv(s,t){s.uniform4uiv(this.addr,t)}function Kv(s,t,e){const n=this.cache,i=t.length,o=Rc(e,i);sn(n,o)||(s.uniform1iv(this.addr,o),on(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||W0,o[r])}function Jv(s,t,e){const n=this.cache,i=t.length,o=Rc(e,i);sn(n,o)||(s.uniform1iv(this.addr,o),on(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||$0,o[r])}function Qv(s,t,e){const n=this.cache,i=t.length,o=Rc(e,i);sn(n,o)||(s.uniform1iv(this.addr,o),on(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||q0,o[r])}function t_(s,t,e){const n=this.cache,i=t.length,o=Rc(e,i);sn(n,o)||(s.uniform1iv(this.addr,o),on(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||X0,o[r])}function e_(s){switch(s){case 5126:return Uv;case 35664:return Fv;case 35665:return kv;case 35666:return Ov;case 35674:return Bv;case 35675:return Vv;case 35676:return Hv;case 5124:case 35670:return Gv;case 35667:case 35671:return Wv;case 35668:case 35672:return Xv;case 35669:case 35673:return $v;case 5125:return qv;case 36294:return Yv;case 36295:return jv;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return t_}}class n_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zv(e.type)}}class i_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=e_(e.type)}}class s_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const ll=/(\w+)(\])?(\[|\.)?/g;function Rd(s,t){s.seq.push(t),s.map[t.id]=t}function o_(s,t,e){const n=s.name,i=n.length;for(ll.lastIndex=0;;){const o=ll.exec(n),r=ll.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){Rd(e,l===void 0?new n_(a,s,t):new i_(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new s_(a),Rd(e,u)),e=u}}}class ic{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);o_(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Cd(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const r_=37297;let a_=0;function c_(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Pd=new ue;function l_(s){ge._getMatrix(Pd,ge.workingColorSpace,s);const t=`mat3( ${Pd.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(s)){case Ec:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ld(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+c_(s.getShaderSource(t),r)}else return i}function h_(s,t){const e=l_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function u_(s,t){let e;switch(t){case Em:e="Linear";break;case Tm:e="Reinhard";break;case Am:e="Cineon";break;case M0:e="ACESFilmic";break;case Cm:e="AgX";break;case Pm:e="Neutral";break;case Rm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const pa=new A;function d_(){ge.getLuminanceCoefficients(pa);const s=pa.x.toFixed(4),t=pa.y.toFixed(4),e=pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function p_(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function m_(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function yr(s){return s!==""}function Id(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const g_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(s){return s.replace(g_,v_)}const x_=new Map;function v_(s,t){let e=de[t];if(e===void 0){const n=x_.get(t);if(n!==void 0)e=de[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Rh(e)}const __=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nd(s){return s.replace(__,M_)}function M_(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function zd(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function y_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===x0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===v0?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hi&&(t="SHADOWMAP_TYPE_VSM"),t}function S_(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ko:case Oo:t="ENVMAP_TYPE_CUBE";break;case wc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function w_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Oo:t="ENVMAP_MODE_REFRACTION";break}return t}function b_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _0:t="ENVMAP_BLENDING_MULTIPLY";break;case wm:t="ENVMAP_BLENDING_MIX";break;case bm:t="ENVMAP_BLENDING_ADD";break}return t}function E_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function T_(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=y_(e),l=S_(e),h=w_(e),u=b_(e),d=E_(e),f=f_(e),p=p_(o),x=i.createProgram();let g,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(yr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(yr).join(`
`),m.length>0&&(m+=`
`)):(g=[zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),m=[zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ms?"#define TONE_MAPPING":"",e.toneMapping!==ms?de.tonemapping_pars_fragment:"",e.toneMapping!==ms?u_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,h_("linearToOutputTexel",e.outputColorSpace),d_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yr).join(`
`)),r=Rh(r),r=Id(r,e),r=Dd(r,e),a=Rh(a),a=Id(a,e),a=Dd(a,e),r=Nd(r),a=Nd(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=_+g+r,v=_+m+a,P=Cd(i,i.VERTEX_SHADER,y),E=Cd(i,i.FRAGMENT_SHADER,v);i.attachShader(x,P),i.attachShader(x,E),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function S(D){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(x).trim(),k=i.getShaderInfoLog(P).trim(),B=i.getShaderInfoLog(E).trim();let V=!0,$=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,P,E);else{const st=Ld(i,P,"vertex"),H=Ld(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+st+`
`+H)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(k===""||B==="")&&($=!1);$&&(D.diagnostics={runnable:V,programLog:F,vertexShader:{log:k,prefix:g},fragmentShader:{log:B,prefix:m}})}i.deleteShader(P),i.deleteShader(E),C=new ic(i,x),b=m_(i,x)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(x,r_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=a_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=E,this}let A_=0;class R_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new C_(t),e.set(t,n)),n}}class C_{constructor(t){this.id=A_++,this.code=t,this.usedTimes=0}}function P_(s,t,e,n,i,o,r){const a=new z0,c=new R_,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,w,D,F,k){const B=F.fog,V=k.geometry,$=b.isMeshStandardMaterial?F.environment:null,st=(b.isMeshStandardMaterial?e:t).get(b.envMap||$),H=st&&st.mapping===wc?st.image.height:null,ft=p[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const vt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Mt=vt!==void 0?vt.length:0;let at=0;V.morphAttributes.position!==void 0&&(at=1),V.morphAttributes.normal!==void 0&&(at=2),V.morphAttributes.color!==void 0&&(at=3);let xt,K,L,N;if(ft){const Vt=Ei[ft];xt=Vt.vertexShader,K=Vt.fragmentShader}else xt=b.vertexShader,K=b.fragmentShader,c.update(b),L=c.getVertexShaderID(b),N=c.getFragmentShaderID(b);const O=s.getRenderTarget(),X=s.state.buffers.depth.getReversed(),ot=k.isInstancedMesh===!0,rt=k.isBatchedMesh===!0,ut=!!b.map,tt=!!b.matcap,wt=!!st,U=!!b.aoMap,Et=!!b.lightMap,Wt=!!b.bumpMap,$t=!!b.normalMap,Bt=!!b.displacementMap,oe=!!b.emissiveMap,Ut=!!b.metalnessMap,I=!!b.roughnessMap,T=b.anisotropy>0,j=b.clearcoat>0,pt=b.dispersion>0,gt=b.iridescence>0,dt=b.sheen>0,Ft=b.transmission>0,Tt=T&&!!b.anisotropyMap,At=j&&!!b.clearcoatMap,Jt=j&&!!b.clearcoatNormalMap,_t=j&&!!b.clearcoatRoughnessMap,It=gt&&!!b.iridescenceMap,Gt=gt&&!!b.iridescenceThicknessMap,mt=dt&&!!b.sheenColorMap,Q=dt&&!!b.sheenRoughnessMap,yt=!!b.specularMap,Nt=!!b.specularColorMap,Xt=!!b.specularIntensityMap,z=Ft&&!!b.transmissionMap,ht=Ft&&!!b.thicknessMap,Z=!!b.gradientMap,ct=!!b.alphaMap,St=b.alphaTest>0,G=!!b.alphaHash,bt=!!b.extensions;let lt=ms;b.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(lt=s.toneMapping);const Lt={shaderID:ft,shaderType:b.type,shaderName:b.name,vertexShader:xt,fragmentShader:K,defines:b.defines,customVertexShaderID:L,customFragmentShaderID:N,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:rt,batchingColor:rt&&k._colorsTexture!==null,instancing:ot,instancingColor:ot&&k.instanceColor!==null,instancingMorph:ot&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:O===null?s.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Yo,alphaToCoverage:!!b.alphaToCoverage,map:ut,matcap:tt,envMap:wt,envMapMode:wt&&st.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:Et,bumpMap:Wt,normalMap:$t,displacementMap:d&&Bt,emissiveMap:oe,normalMapObjectSpace:$t&&b.normalMapType===Nm,normalMapTangentSpace:$t&&b.normalMapType===P0,metalnessMap:Ut,roughnessMap:I,anisotropy:T,anisotropyMap:Tt,clearcoat:j,clearcoatMap:At,clearcoatNormalMap:Jt,clearcoatRoughnessMap:_t,dispersion:pt,iridescence:gt,iridescenceMap:It,iridescenceThicknessMap:Gt,sheen:dt,sheenColorMap:mt,sheenRoughnessMap:Q,specularMap:yt,specularColorMap:Nt,specularIntensityMap:Xt,transmission:Ft,transmissionMap:z,thicknessMap:ht,gradientMap:Z,opaque:b.transparent===!1&&b.blending===Po&&b.alphaToCoverage===!1,alphaMap:ct,alphaTest:St,alphaHash:G,combine:b.combine,mapUv:ut&&x(b.map.channel),aoMapUv:U&&x(b.aoMap.channel),lightMapUv:Et&&x(b.lightMap.channel),bumpMapUv:Wt&&x(b.bumpMap.channel),normalMapUv:$t&&x(b.normalMap.channel),displacementMapUv:Bt&&x(b.displacementMap.channel),emissiveMapUv:oe&&x(b.emissiveMap.channel),metalnessMapUv:Ut&&x(b.metalnessMap.channel),roughnessMapUv:I&&x(b.roughnessMap.channel),anisotropyMapUv:Tt&&x(b.anisotropyMap.channel),clearcoatMapUv:At&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Q&&x(b.sheenRoughnessMap.channel),specularMapUv:yt&&x(b.specularMap.channel),specularColorMapUv:Nt&&x(b.specularColorMap.channel),specularIntensityMapUv:Xt&&x(b.specularIntensityMap.channel),transmissionMapUv:z&&x(b.transmissionMap.channel),thicknessMapUv:ht&&x(b.thicknessMap.channel),alphaMapUv:ct&&x(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&($t||T),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!V.attributes.uv&&(ut||ct),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:X,skinning:k.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:at,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,decodeVideoTexture:ut&&b.map.isVideoTexture===!0&&ge.getTransfer(b.map.colorSpace)===Ae,decodeVideoTextureEmissive:oe&&b.emissiveMap.isVideoTexture===!0&&ge.getTransfer(b.emissiveMap.colorSpace)===Ae,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ke,flipSided:b.side===Ln,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:bt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&b.extensions.multiDraw===!0||rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function m(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)w.push(D),w.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(_(w,b),y(w,b),w.push(s.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function _(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function y(b,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const w=p[b.type];let D;if(w){const F=Ei[w];D=fg.clone(F.uniforms)}else D=b.uniforms;return D}function P(b,w){let D;for(let F=0,k=h.length;F<k;F++){const B=h[F];if(B.cacheKey===w){D=B,++D.usedTimes;break}}return D===void 0&&(D=new T_(s,w,b,o),h.push(D)),D}function E(b){if(--b.usedTimes===0){const w=h.indexOf(b);h[w]=h[h.length-1],h.pop(),b.destroy()}}function S(b){c.remove(b)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:P,releaseProgram:E,releaseShaderCache:S,programs:h,dispose:C}}function L_(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,c){s.get(r)[a]=c}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function I_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ud(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Fd(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(u,d,f,p,x,g){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},s[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),t++,m}function a(u,d,f,p,x,g){const m=r(u,d,f,p,x,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function c(u,d,f,p,x,g){const m=r(u,d,f,p,x,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||I_),n.length>1&&n.sort(d||Ud),i.length>1&&i.sort(d||Ud)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:c,finish:h,sort:l}}function D_(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new Fd,s.set(n,[r])):i>=o.length?(r=new Fd,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function N_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new te};break;case"SpotLight":e={position:new A,direction:new A,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function z_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let U_=0;function F_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function k_(s){const t=new N_,e=z_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const i=new A,o=new ce,r=new ce;function a(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,_=0,y=0,v=0,P=0,E=0,S=0;l.sort(F_);for(let b=0,w=l.length;b<w;b++){const D=l[b],F=D.color,k=D.intensity,B=D.distance,V=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=F.r*k,u+=F.g*k,d+=F.b*k;else if(D.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(D.sh.coefficients[$],k);S++}else if(D.isDirectionalLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const st=D.shadow,H=e.get(D);H.shadowIntensity=st.intensity,H.shadowBias=st.bias,H.shadowNormalBias=st.normalBias,H.shadowRadius=st.radius,H.shadowMapSize=st.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=D.shadow.matrix,_++}n.directional[f]=$,f++}else if(D.isSpotLight){const $=t.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(F).multiplyScalar(k),$.distance=B,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,n.spot[x]=$;const st=D.shadow;if(D.map&&(n.spotLightMap[P]=D.map,P++,st.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[x]=st.matrix,D.castShadow){const H=e.get(D);H.shadowIntensity=st.intensity,H.shadowBias=st.bias,H.shadowNormalBias=st.normalBias,H.shadowRadius=st.radius,H.shadowMapSize=st.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=V,v++}x++}else if(D.isRectAreaLight){const $=t.get(D);$.color.copy(F).multiplyScalar(k),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=$,g++}else if(D.isPointLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const st=D.shadow,H=e.get(D);H.shadowIntensity=st.intensity,H.shadowBias=st.bias,H.shadowNormalBias=st.normalBias,H.shadowRadius=st.radius,H.shadowMapSize=st.mapSize,H.shadowCameraNear=st.camera.near,H.shadowCameraFar=st.camera.far,n.pointShadow[p]=H,n.pointShadowMap[p]=V,n.pointShadowMatrix[p]=D.shadow.matrix,y++}n.point[p]=$,p++}else if(D.isHemisphereLight){const $=t.get(D);$.skyColor.copy(D.color).multiplyScalar(k),$.groundColor.copy(D.groundColor).multiplyScalar(k),n.hemi[m]=$,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==p||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==m||C.numDirectionalShadows!==_||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==P||C.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+P-E,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=S,C.directionalLength=f,C.pointLength=p,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=m,C.numDirectionalShadows=_,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=P,C.numLightProbes=S,n.version=U_++)}function c(l,h){let u=0,d=0,f=0,p=0,x=0;const g=h.matrixWorldInverse;for(let m=0,_=l.length;m<_;m++){const y=l[m];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),r.identity(),o.copy(y.matrixWorld),o.premultiply(g),r.extractRotation(o),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),p++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function kd(s){const t=new k_(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function O_(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new kd(s),t.set(i,[a])):o>=r.length?(a=new kd(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class B_ extends Zs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Im,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class V_ extends Zs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const H_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G_=`uniform sampler2D shadow_pass;
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
}`;function W_(s,t,e){let n=new Ac;const i=new Pt,o=new Pt,r=new Oe,a=new B_({depthPacking:Dm}),c=new V_,l={},h=e.maxTextureSize,u={[_s]:Ln,[Ln]:_s,[ke]:ke},d=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:H_,fragmentShader:G_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new ze;p.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new zt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=x0;let m=this.type;this.render=function(E,S,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const b=s.getRenderTarget(),w=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),F=s.state;F.setBlending(ps),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=m!==Hi&&this.type===Hi,B=m===Hi&&this.type!==Hi;for(let V=0,$=E.length;V<$;V++){const st=E[V],H=st.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ft=H.getFrameExtents();if(i.multiply(ft),o.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/ft.x),i.x=o.x*ft.x,H.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/ft.y),i.y=o.y*ft.y,H.mapSize.y=o.y)),H.map===null||k===!0||B===!0){const Mt=this.type!==Hi?{minFilter:jn,magFilter:jn}:{};H.map!==null&&H.map.dispose(),H.map=new Ii(i.x,i.y,Mt),H.map.texture.name=st.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const vt=H.getViewportCount();for(let Mt=0;Mt<vt;Mt++){const at=H.getViewport(Mt);r.set(o.x*at.x,o.y*at.y,o.x*at.z,o.y*at.w),F.viewport(r),H.updateMatrices(st,Mt),n=H.getFrustum(),v(S,C,H.camera,st,this.type)}H.isPointLightShadow!==!0&&this.type===Hi&&_(H,C),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(b,w,D)};function _(E,S){const C=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ii(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(S,null,C,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(S,null,C,f,x,null)}function y(E,S,C,b){let w=null;const D=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)w=D;else if(w=C.isPointLight===!0?c:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const F=w.uuid,k=S.uuid;let B=l[F];B===void 0&&(B={},l[F]=B);let V=B[k];V===void 0&&(V=w.clone(),B[k]=V,S.addEventListener("dispose",P)),w=V}if(w.visible=S.visible,w.wireframe=S.wireframe,b===Hi?w.side=S.shadowSide!==null?S.shadowSide:S.side:w.side=S.shadowSide!==null?S.shadowSide:u[S.side],w.alphaMap=S.alphaMap,w.alphaTest=S.alphaTest,w.map=S.map,w.clipShadows=S.clipShadows,w.clippingPlanes=S.clippingPlanes,w.clipIntersection=S.clipIntersection,w.displacementMap=S.displacementMap,w.displacementScale=S.displacementScale,w.displacementBias=S.displacementBias,w.wireframeLinewidth=S.wireframeLinewidth,w.linewidth=S.linewidth,C.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const F=s.properties.get(w);F.light=C}return w}function v(E,S,C,b,w){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Hi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const k=t.update(E),B=E.material;if(Array.isArray(B)){const V=k.groups;for(let $=0,st=V.length;$<st;$++){const H=V[$],ft=B[H.materialIndex];if(ft&&ft.visible){const vt=y(E,ft,b,w);E.onBeforeShadow(s,E,S,C,k,vt,H),s.renderBufferDirect(C,null,k,vt,E,H),E.onAfterShadow(s,E,S,C,k,vt,H)}}}else if(B.visible){const V=y(E,B,b,w);E.onBeforeShadow(s,E,S,C,k,V,null),s.renderBufferDirect(C,null,k,V,E,null),E.onAfterShadow(s,E,S,C,k,V,null)}}const F=E.children;for(let k=0,B=F.length;k<B;k++)v(F[k],S,C,b,w)}function P(E){E.target.removeEventListener("dispose",P);for(const C in l){const b=l[C],w=E.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}const X_={[Xl]:$l,[ql]:Zl,[Yl]:Kl,[Fo]:jl,[$l]:Xl,[Zl]:ql,[Kl]:Yl,[jl]:Fo};function $_(s,t){function e(){let z=!1;const ht=new Oe;let Z=null;const ct=new Oe(0,0,0,0);return{setMask:function(St){Z!==St&&!z&&(s.colorMask(St,St,St,St),Z=St)},setLocked:function(St){z=St},setClear:function(St,G,bt,lt,Lt){Lt===!0&&(St*=lt,G*=lt,bt*=lt),ht.set(St,G,bt,lt),ct.equals(ht)===!1&&(s.clearColor(St,G,bt,lt),ct.copy(ht))},reset:function(){z=!1,Z=null,ct.set(-1,0,0,0)}}}function n(){let z=!1,ht=!1,Z=null,ct=null,St=null;return{setReversed:function(G){if(ht!==G){const bt=t.get("EXT_clip_control");ht?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT);const lt=St;St=null,this.setClear(lt)}ht=G},getReversed:function(){return ht},setTest:function(G){G?O(s.DEPTH_TEST):X(s.DEPTH_TEST)},setMask:function(G){Z!==G&&!z&&(s.depthMask(G),Z=G)},setFunc:function(G){if(ht&&(G=X_[G]),ct!==G){switch(G){case Xl:s.depthFunc(s.NEVER);break;case $l:s.depthFunc(s.ALWAYS);break;case ql:s.depthFunc(s.LESS);break;case Fo:s.depthFunc(s.LEQUAL);break;case Yl:s.depthFunc(s.EQUAL);break;case jl:s.depthFunc(s.GEQUAL);break;case Zl:s.depthFunc(s.GREATER);break;case Kl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ct=G}},setLocked:function(G){z=G},setClear:function(G){St!==G&&(ht&&(G=1-G),s.clearDepth(G),St=G)},reset:function(){z=!1,Z=null,ct=null,St=null,ht=!1}}}function i(){let z=!1,ht=null,Z=null,ct=null,St=null,G=null,bt=null,lt=null,Lt=null;return{setTest:function(Vt){z||(Vt?O(s.STENCIL_TEST):X(s.STENCIL_TEST))},setMask:function(Vt){ht!==Vt&&!z&&(s.stencilMask(Vt),ht=Vt)},setFunc:function(Vt,ae,Te){(Z!==Vt||ct!==ae||St!==Te)&&(s.stencilFunc(Vt,ae,Te),Z=Vt,ct=ae,St=Te)},setOp:function(Vt,ae,Te){(G!==Vt||bt!==ae||lt!==Te)&&(s.stencilOp(Vt,ae,Te),G=Vt,bt=ae,lt=Te)},setLocked:function(Vt){z=Vt},setClear:function(Vt){Lt!==Vt&&(s.clearStencil(Vt),Lt=Vt)},reset:function(){z=!1,ht=null,Z=null,ct=null,St=null,G=null,bt=null,lt=null,Lt=null}}}const o=new e,r=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,_=null,y=null,v=null,P=null,E=null,S=new te(0,0,0),C=0,b=!1,w=null,D=null,F=null,k=null,B=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,st=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(H)[1]),$=st>=1):H.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),$=st>=2);let ft=null,vt={};const Mt=s.getParameter(s.SCISSOR_BOX),at=s.getParameter(s.VIEWPORT),xt=new Oe().fromArray(Mt),K=new Oe().fromArray(at);function L(z,ht,Z,ct){const St=new Uint8Array(4),G=s.createTexture();s.bindTexture(z,G),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let bt=0;bt<Z;bt++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,ct,0,s.RGBA,s.UNSIGNED_BYTE,St):s.texImage2D(ht+bt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,St);return G}const N={};N[s.TEXTURE_2D]=L(s.TEXTURE_2D,s.TEXTURE_2D,1),N[s.TEXTURE_CUBE_MAP]=L(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[s.TEXTURE_2D_ARRAY]=L(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),N[s.TEXTURE_3D]=L(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),O(s.DEPTH_TEST),r.setFunc(Fo),Wt(!1),$t(Vu),O(s.CULL_FACE),U(ps);function O(z){h[z]!==!0&&(s.enable(z),h[z]=!0)}function X(z){h[z]!==!1&&(s.disable(z),h[z]=!1)}function ot(z,ht){return u[z]!==ht?(s.bindFramebuffer(z,ht),u[z]=ht,z===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ht),z===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function rt(z,ht){let Z=f,ct=!1;if(z){Z=d.get(ht),Z===void 0&&(Z=[],d.set(ht,Z));const St=z.textures;if(Z.length!==St.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let G=0,bt=St.length;G<bt;G++)Z[G]=s.COLOR_ATTACHMENT0+G;Z.length=St.length,ct=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,ct=!0);ct&&s.drawBuffers(Z)}function ut(z){return p!==z?(s.useProgram(z),p=z,!0):!1}const tt={[Us]:s.FUNC_ADD,[rm]:s.FUNC_SUBTRACT,[am]:s.FUNC_REVERSE_SUBTRACT};tt[cm]=s.MIN,tt[lm]=s.MAX;const wt={[hm]:s.ZERO,[um]:s.ONE,[dm]:s.SRC_COLOR,[Gl]:s.SRC_ALPHA,[vm]:s.SRC_ALPHA_SATURATE,[gm]:s.DST_COLOR,[pm]:s.DST_ALPHA,[fm]:s.ONE_MINUS_SRC_COLOR,[Wl]:s.ONE_MINUS_SRC_ALPHA,[xm]:s.ONE_MINUS_DST_COLOR,[mm]:s.ONE_MINUS_DST_ALPHA,[_m]:s.CONSTANT_COLOR,[Mm]:s.ONE_MINUS_CONSTANT_COLOR,[ym]:s.CONSTANT_ALPHA,[Sm]:s.ONE_MINUS_CONSTANT_ALPHA};function U(z,ht,Z,ct,St,G,bt,lt,Lt,Vt){if(z===ps){x===!0&&(X(s.BLEND),x=!1);return}if(x===!1&&(O(s.BLEND),x=!0),z!==om){if(z!==g||Vt!==b){if((m!==Us||v!==Us)&&(s.blendEquation(s.FUNC_ADD),m=Us,v=Us),Vt)switch(z){case Po:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hu:s.blendFunc(s.ONE,s.ONE);break;case Gu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Po:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hu:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Gu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}_=null,y=null,P=null,E=null,S.set(0,0,0),C=0,g=z,b=Vt}return}St=St||ht,G=G||Z,bt=bt||ct,(ht!==m||St!==v)&&(s.blendEquationSeparate(tt[ht],tt[St]),m=ht,v=St),(Z!==_||ct!==y||G!==P||bt!==E)&&(s.blendFuncSeparate(wt[Z],wt[ct],wt[G],wt[bt]),_=Z,y=ct,P=G,E=bt),(lt.equals(S)===!1||Lt!==C)&&(s.blendColor(lt.r,lt.g,lt.b,Lt),S.copy(lt),C=Lt),g=z,b=!1}function Et(z,ht){z.side===ke?X(s.CULL_FACE):O(s.CULL_FACE);let Z=z.side===Ln;ht&&(Z=!Z),Wt(Z),z.blending===Po&&z.transparent===!1?U(ps):U(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),o.setMask(z.colorWrite);const ct=z.stencilWrite;a.setTest(ct),ct&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),oe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?O(s.SAMPLE_ALPHA_TO_COVERAGE):X(s.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(z){w!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),w=z)}function $t(z){z!==im?(O(s.CULL_FACE),z!==D&&(z===Vu?s.cullFace(s.BACK):z===sm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):X(s.CULL_FACE),D=z}function Bt(z){z!==F&&($&&s.lineWidth(z),F=z)}function oe(z,ht,Z){z?(O(s.POLYGON_OFFSET_FILL),(k!==ht||B!==Z)&&(s.polygonOffset(ht,Z),k=ht,B=Z)):X(s.POLYGON_OFFSET_FILL)}function Ut(z){z?O(s.SCISSOR_TEST):X(s.SCISSOR_TEST)}function I(z){z===void 0&&(z=s.TEXTURE0+V-1),ft!==z&&(s.activeTexture(z),ft=z)}function T(z,ht,Z){Z===void 0&&(ft===null?Z=s.TEXTURE0+V-1:Z=ft);let ct=vt[Z];ct===void 0&&(ct={type:void 0,texture:void 0},vt[Z]=ct),(ct.type!==z||ct.texture!==ht)&&(ft!==Z&&(s.activeTexture(Z),ft=Z),s.bindTexture(z,ht||N[z]),ct.type=z,ct.texture=ht)}function j(){const z=vt[ft];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function pt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function gt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ft(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Tt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Jt(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _t(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function It(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Gt(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function mt(z){xt.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),xt.copy(z))}function Q(z){K.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),K.copy(z))}function yt(z,ht){let Z=l.get(ht);Z===void 0&&(Z=new WeakMap,l.set(ht,Z));let ct=Z.get(z);ct===void 0&&(ct=s.getUniformBlockIndex(ht,z.name),Z.set(z,ct))}function Nt(z,ht){const ct=l.get(ht).get(z);c.get(ht)!==ct&&(s.uniformBlockBinding(ht,ct,z.__bindingPointIndex),c.set(ht,ct))}function Xt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ft=null,vt={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,_=null,y=null,v=null,P=null,E=null,S=new te(0,0,0),C=0,b=!1,w=null,D=null,F=null,k=null,B=null,xt.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:O,disable:X,bindFramebuffer:ot,drawBuffers:rt,useProgram:ut,setBlending:U,setMaterial:Et,setFlipSided:Wt,setCullFace:$t,setLineWidth:Bt,setPolygonOffset:oe,setScissorTest:Ut,activeTexture:I,bindTexture:T,unbindTexture:j,compressedTexImage2D:pt,compressedTexImage3D:gt,texImage2D:It,texImage3D:Gt,updateUBOMapping:yt,uniformBlockBinding:Nt,texStorage2D:Jt,texStorage3D:_t,texSubImage2D:dt,texSubImage3D:Ft,compressedTexSubImage2D:Tt,compressedTexSubImage3D:At,scissor:mt,viewport:Q,reset:Xt}}function Od(s,t,e,n){const i=q_(n);switch(e){case E0:return s*t;case A0:return s*t;case R0:return s*t*2;case bc:return s*t/i.components*i.byteLength;case su:return s*t/i.components*i.byteLength;case ou:return s*t*2/i.components*i.byteLength;case ru:return s*t*2/i.components*i.byteLength;case T0:return s*t*3/i.components*i.byteLength;case fi:return s*t*4/i.components*i.byteLength;case au:return s*t*4/i.components*i.byteLength;case Ka:case Ja:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Qa:case tc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nh:case sh:return Math.max(s,16)*Math.max(t,8)/4;case eh:case ih:return Math.max(s,8)*Math.max(t,8)/2;case oh:case rh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ah:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ch:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case hh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case uh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case dh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case fh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ph:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case mh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case gh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case xh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case vh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case _h:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Mh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case yh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ec:case Sh:case wh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case C0:case bh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Eh:case Th:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function q_(s){switch(s){case Qi:case S0:return{byteLength:1,components:1};case Ur:case w0:case Zi:return{byteLength:2,components:1};case nu:case iu:return{byteLength:2,components:4};case Xs:case eu:case Ai:return{byteLength:4,components:1};case b0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Y_(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Pt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,T){return f?new OffscreenCanvas(I,T):uc("canvas")}function x(I,T,j){let pt=1;const gt=Ut(I);if((gt.width>j||gt.height>j)&&(pt=j/Math.max(gt.width,gt.height)),pt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const dt=Math.floor(pt*gt.width),Ft=Math.floor(pt*gt.height);u===void 0&&(u=p(dt,Ft));const Tt=T?p(dt,Ft):u;return Tt.width=dt,Tt.height=Ft,Tt.getContext("2d").drawImage(I,0,0,dt,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+dt+"x"+Ft+")."),Tt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),I;return I}function g(I){return I.generateMipmaps}function m(I){s.generateMipmap(I)}function _(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(I,T,j,pt,gt=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let dt=T;if(T===s.RED&&(j===s.FLOAT&&(dt=s.R32F),j===s.HALF_FLOAT&&(dt=s.R16F),j===s.UNSIGNED_BYTE&&(dt=s.R8)),T===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(dt=s.R8UI),j===s.UNSIGNED_SHORT&&(dt=s.R16UI),j===s.UNSIGNED_INT&&(dt=s.R32UI),j===s.BYTE&&(dt=s.R8I),j===s.SHORT&&(dt=s.R16I),j===s.INT&&(dt=s.R32I)),T===s.RG&&(j===s.FLOAT&&(dt=s.RG32F),j===s.HALF_FLOAT&&(dt=s.RG16F),j===s.UNSIGNED_BYTE&&(dt=s.RG8)),T===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(dt=s.RG8UI),j===s.UNSIGNED_SHORT&&(dt=s.RG16UI),j===s.UNSIGNED_INT&&(dt=s.RG32UI),j===s.BYTE&&(dt=s.RG8I),j===s.SHORT&&(dt=s.RG16I),j===s.INT&&(dt=s.RG32I)),T===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(dt=s.RGB8UI),j===s.UNSIGNED_SHORT&&(dt=s.RGB16UI),j===s.UNSIGNED_INT&&(dt=s.RGB32UI),j===s.BYTE&&(dt=s.RGB8I),j===s.SHORT&&(dt=s.RGB16I),j===s.INT&&(dt=s.RGB32I)),T===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(dt=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(dt=s.RGBA16UI),j===s.UNSIGNED_INT&&(dt=s.RGBA32UI),j===s.BYTE&&(dt=s.RGBA8I),j===s.SHORT&&(dt=s.RGBA16I),j===s.INT&&(dt=s.RGBA32I)),T===s.RGB&&j===s.UNSIGNED_INT_5_9_9_9_REV&&(dt=s.RGB9_E5),T===s.RGBA){const Ft=gt?Ec:ge.getTransfer(pt);j===s.FLOAT&&(dt=s.RGBA32F),j===s.HALF_FLOAT&&(dt=s.RGBA16F),j===s.UNSIGNED_BYTE&&(dt=Ft===Ae?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(dt=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(dt=s.RGB5_A1)}return(dt===s.R16F||dt===s.R32F||dt===s.RG16F||dt===s.RG32F||dt===s.RGBA16F||dt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function v(I,T){let j;return I?T===null||T===Xs||T===Bo?j=s.DEPTH24_STENCIL8:T===Ai?j=s.DEPTH32F_STENCIL8:T===Ur&&(j=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Xs||T===Bo?j=s.DEPTH_COMPONENT24:T===Ai?j=s.DEPTH_COMPONENT32F:T===Ur&&(j=s.DEPTH_COMPONENT16),j}function P(I,T){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==jn&&I.minFilter!==On?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function E(I){const T=I.target;T.removeEventListener("dispose",E),C(T),T.isVideoTexture&&h.delete(T)}function S(I){const T=I.target;T.removeEventListener("dispose",S),w(T)}function C(I){const T=n.get(I);if(T.__webglInit===void 0)return;const j=I.source,pt=d.get(j);if(pt){const gt=pt[T.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&b(I),Object.keys(pt).length===0&&d.delete(j)}n.remove(I)}function b(I){const T=n.get(I);s.deleteTexture(T.__webglTexture);const j=I.source,pt=d.get(j);delete pt[T.__cacheKey],r.memory.textures--}function w(I){const T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(T.__webglFramebuffer[pt]))for(let gt=0;gt<T.__webglFramebuffer[pt].length;gt++)s.deleteFramebuffer(T.__webglFramebuffer[pt][gt]);else s.deleteFramebuffer(T.__webglFramebuffer[pt]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[pt])}else{if(Array.isArray(T.__webglFramebuffer))for(let pt=0;pt<T.__webglFramebuffer.length;pt++)s.deleteFramebuffer(T.__webglFramebuffer[pt]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pt=0;pt<T.__webglColorRenderbuffer.length;pt++)T.__webglColorRenderbuffer[pt]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[pt]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const j=I.textures;for(let pt=0,gt=j.length;pt<gt;pt++){const dt=n.get(j[pt]);dt.__webglTexture&&(s.deleteTexture(dt.__webglTexture),r.memory.textures--),n.remove(j[pt])}n.remove(I)}let D=0;function F(){D=0}function k(){const I=D;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),D+=1,I}function B(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function V(I,T){const j=n.get(I);if(I.isVideoTexture&&Bt(I),I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){const pt=I.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(j,I,T);return}}e.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+T)}function $(I,T){const j=n.get(I);if(I.version>0&&j.__version!==I.version){K(j,I,T);return}e.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+T)}function st(I,T){const j=n.get(I);if(I.version>0&&j.__version!==I.version){K(j,I,T);return}e.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+T)}function H(I,T){const j=n.get(I);if(I.version>0&&j.__version!==I.version){L(j,I,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+T)}const ft={[lc]:s.REPEAT,[Os]:s.CLAMP_TO_EDGE,[th]:s.MIRRORED_REPEAT},vt={[jn]:s.NEAREST,[Lm]:s.NEAREST_MIPMAP_NEAREST,[Yr]:s.NEAREST_MIPMAP_LINEAR,[On]:s.LINEAR,[Uc]:s.LINEAR_MIPMAP_NEAREST,[Bs]:s.LINEAR_MIPMAP_LINEAR},Mt={[zm]:s.NEVER,[Vm]:s.ALWAYS,[Um]:s.LESS,[L0]:s.LEQUAL,[Fm]:s.EQUAL,[Bm]:s.GEQUAL,[km]:s.GREATER,[Om]:s.NOTEQUAL};function at(I,T){if(T.type===Ai&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===On||T.magFilter===Uc||T.magFilter===Yr||T.magFilter===Bs||T.minFilter===On||T.minFilter===Uc||T.minFilter===Yr||T.minFilter===Bs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,ft[T.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,ft[T.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,ft[T.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,vt[T.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,vt[T.minFilter]),T.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Mt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===jn||T.minFilter!==Yr&&T.minFilter!==Bs||T.type===Ai&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function xt(I,T){let j=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",E));const pt=T.source;let gt=d.get(pt);gt===void 0&&(gt={},d.set(pt,gt));const dt=B(T);if(dt!==I.__cacheKey){gt[dt]===void 0&&(gt[dt]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,j=!0),gt[dt].usedTimes++;const Ft=gt[I.__cacheKey];Ft!==void 0&&(gt[I.__cacheKey].usedTimes--,Ft.usedTimes===0&&b(T)),I.__cacheKey=dt,I.__webglTexture=gt[dt].texture}return j}function K(I,T,j){let pt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pt=s.TEXTURE_3D);const gt=xt(I,T),dt=T.source;e.bindTexture(pt,I.__webglTexture,s.TEXTURE0+j);const Ft=n.get(dt);if(dt.version!==Ft.__version||gt===!0){e.activeTexture(s.TEXTURE0+j);const Tt=ge.getPrimaries(ge.workingColorSpace),At=T.colorSpace===us?null:ge.getPrimaries(T.colorSpace),Jt=T.colorSpace===us||Tt===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let _t=x(T.image,!1,i.maxTextureSize);_t=oe(T,_t);const It=o.convert(T.format,T.colorSpace),Gt=o.convert(T.type);let mt=y(T.internalFormat,It,Gt,T.colorSpace,T.isVideoTexture);at(pt,T);let Q;const yt=T.mipmaps,Nt=T.isVideoTexture!==!0,Xt=Ft.__version===void 0||gt===!0,z=dt.dataReady,ht=P(T,_t);if(T.isDepthTexture)mt=v(T.format===Vo,T.type),Xt&&(Nt?e.texStorage2D(s.TEXTURE_2D,1,mt,_t.width,_t.height):e.texImage2D(s.TEXTURE_2D,0,mt,_t.width,_t.height,0,It,Gt,null));else if(T.isDataTexture)if(yt.length>0){Nt&&Xt&&e.texStorage2D(s.TEXTURE_2D,ht,mt,yt[0].width,yt[0].height);for(let Z=0,ct=yt.length;Z<ct;Z++)Q=yt[Z],Nt?z&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,Q.width,Q.height,It,Gt,Q.data):e.texImage2D(s.TEXTURE_2D,Z,mt,Q.width,Q.height,0,It,Gt,Q.data);T.generateMipmaps=!1}else Nt?(Xt&&e.texStorage2D(s.TEXTURE_2D,ht,mt,_t.width,_t.height),z&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t.width,_t.height,It,Gt,_t.data)):e.texImage2D(s.TEXTURE_2D,0,mt,_t.width,_t.height,0,It,Gt,_t.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Nt&&Xt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,mt,yt[0].width,yt[0].height,_t.depth);for(let Z=0,ct=yt.length;Z<ct;Z++)if(Q=yt[Z],T.format!==fi)if(It!==null)if(Nt){if(z)if(T.layerUpdates.size>0){const St=Od(Q.width,Q.height,T.format,T.type);for(const G of T.layerUpdates){const bt=Q.data.subarray(G*St/Q.data.BYTES_PER_ELEMENT,(G+1)*St/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,G,Q.width,Q.height,1,It,bt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Q.width,Q.height,_t.depth,It,Q.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,mt,Q.width,Q.height,_t.depth,0,Q.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?z&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Q.width,Q.height,_t.depth,It,Gt,Q.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Z,mt,Q.width,Q.height,_t.depth,0,It,Gt,Q.data)}else{Nt&&Xt&&e.texStorage2D(s.TEXTURE_2D,ht,mt,yt[0].width,yt[0].height);for(let Z=0,ct=yt.length;Z<ct;Z++)Q=yt[Z],T.format!==fi?It!==null?Nt?z&&e.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,Q.width,Q.height,It,Q.data):e.compressedTexImage2D(s.TEXTURE_2D,Z,mt,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?z&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,Q.width,Q.height,It,Gt,Q.data):e.texImage2D(s.TEXTURE_2D,Z,mt,Q.width,Q.height,0,It,Gt,Q.data)}else if(T.isDataArrayTexture)if(Nt){if(Xt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,mt,_t.width,_t.height,_t.depth),z)if(T.layerUpdates.size>0){const Z=Od(_t.width,_t.height,T.format,T.type);for(const ct of T.layerUpdates){const St=_t.data.subarray(ct*Z/_t.data.BYTES_PER_ELEMENT,(ct+1)*Z/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ct,_t.width,_t.height,1,It,Gt,St)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,It,Gt,_t.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,mt,_t.width,_t.height,_t.depth,0,It,Gt,_t.data);else if(T.isData3DTexture)Nt?(Xt&&e.texStorage3D(s.TEXTURE_3D,ht,mt,_t.width,_t.height,_t.depth),z&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,It,Gt,_t.data)):e.texImage3D(s.TEXTURE_3D,0,mt,_t.width,_t.height,_t.depth,0,It,Gt,_t.data);else if(T.isFramebufferTexture){if(Xt)if(Nt)e.texStorage2D(s.TEXTURE_2D,ht,mt,_t.width,_t.height);else{let Z=_t.width,ct=_t.height;for(let St=0;St<ht;St++)e.texImage2D(s.TEXTURE_2D,St,mt,Z,ct,0,It,Gt,null),Z>>=1,ct>>=1}}else if(yt.length>0){if(Nt&&Xt){const Z=Ut(yt[0]);e.texStorage2D(s.TEXTURE_2D,ht,mt,Z.width,Z.height)}for(let Z=0,ct=yt.length;Z<ct;Z++)Q=yt[Z],Nt?z&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,It,Gt,Q):e.texImage2D(s.TEXTURE_2D,Z,mt,It,Gt,Q);T.generateMipmaps=!1}else if(Nt){if(Xt){const Z=Ut(_t);e.texStorage2D(s.TEXTURE_2D,ht,mt,Z.width,Z.height)}z&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,It,Gt,_t)}else e.texImage2D(s.TEXTURE_2D,0,mt,It,Gt,_t);g(T)&&m(pt),Ft.__version=dt.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function L(I,T,j){if(T.image.length!==6)return;const pt=xt(I,T),gt=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+j);const dt=n.get(gt);if(gt.version!==dt.__version||pt===!0){e.activeTexture(s.TEXTURE0+j);const Ft=ge.getPrimaries(ge.workingColorSpace),Tt=T.colorSpace===us?null:ge.getPrimaries(T.colorSpace),At=T.colorSpace===us||Ft===Tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Jt=T.isCompressedTexture||T.image[0].isCompressedTexture,_t=T.image[0]&&T.image[0].isDataTexture,It=[];for(let ct=0;ct<6;ct++)!Jt&&!_t?It[ct]=x(T.image[ct],!0,i.maxCubemapSize):It[ct]=_t?T.image[ct].image:T.image[ct],It[ct]=oe(T,It[ct]);const Gt=It[0],mt=o.convert(T.format,T.colorSpace),Q=o.convert(T.type),yt=y(T.internalFormat,mt,Q,T.colorSpace),Nt=T.isVideoTexture!==!0,Xt=dt.__version===void 0||pt===!0,z=gt.dataReady;let ht=P(T,Gt);at(s.TEXTURE_CUBE_MAP,T);let Z;if(Jt){Nt&&Xt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,yt,Gt.width,Gt.height);for(let ct=0;ct<6;ct++){Z=It[ct].mipmaps;for(let St=0;St<Z.length;St++){const G=Z[St];T.format!==fi?mt!==null?Nt?z&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St,0,0,G.width,G.height,mt,G.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St,yt,G.width,G.height,0,G.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St,0,0,G.width,G.height,mt,Q,G.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St,yt,G.width,G.height,0,mt,Q,G.data)}}}else{if(Z=T.mipmaps,Nt&&Xt){Z.length>0&&ht++;const ct=Ut(It[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,yt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(_t){Nt?z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,It[ct].width,It[ct].height,mt,Q,It[ct].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,yt,It[ct].width,It[ct].height,0,mt,Q,It[ct].data);for(let St=0;St<Z.length;St++){const bt=Z[St].image[ct].image;Nt?z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St+1,0,0,bt.width,bt.height,mt,Q,bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St+1,yt,bt.width,bt.height,0,mt,Q,bt.data)}}else{Nt?z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,mt,Q,It[ct]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,yt,mt,Q,It[ct]);for(let St=0;St<Z.length;St++){const G=Z[St];Nt?z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St+1,0,0,mt,Q,G.image[ct]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St+1,yt,mt,Q,G.image[ct])}}}g(T)&&m(s.TEXTURE_CUBE_MAP),dt.__version=gt.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function N(I,T,j,pt,gt,dt){const Ft=o.convert(j.format,j.colorSpace),Tt=o.convert(j.type),At=y(j.internalFormat,Ft,Tt,j.colorSpace),Jt=n.get(T),_t=n.get(j);if(_t.__renderTarget=T,!Jt.__hasExternalTextures){const It=Math.max(1,T.width>>dt),Gt=Math.max(1,T.height>>dt);gt===s.TEXTURE_3D||gt===s.TEXTURE_2D_ARRAY?e.texImage3D(gt,dt,At,It,Gt,T.depth,0,Ft,Tt,null):e.texImage2D(gt,dt,At,It,Gt,0,Ft,Tt,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),$t(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,gt,_t.__webglTexture,0,Wt(T)):(gt===s.TEXTURE_2D||gt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pt,gt,_t.__webglTexture,dt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function O(I,T,j){if(s.bindRenderbuffer(s.RENDERBUFFER,I),T.depthBuffer){const pt=T.depthTexture,gt=pt&&pt.isDepthTexture?pt.type:null,dt=v(T.stencilBuffer,gt),Ft=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=Wt(T);$t(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt,dt,T.width,T.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,dt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,dt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ft,s.RENDERBUFFER,I)}else{const pt=T.textures;for(let gt=0;gt<pt.length;gt++){const dt=pt[gt],Ft=o.convert(dt.format,dt.colorSpace),Tt=o.convert(dt.type),At=y(dt.internalFormat,Ft,Tt,dt.colorSpace),Jt=Wt(T);j&&$t(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,At,T.width,T.height):$t(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt,At,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,At,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function X(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=n.get(T.depthTexture);pt.__renderTarget=T,(!pt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),V(T.depthTexture,0);const gt=pt.__webglTexture,dt=Wt(T);if(T.depthTexture.format===Lo)$t(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,gt,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,gt,0);else if(T.depthTexture.format===Vo)$t(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,gt,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,gt,0);else throw new Error("Unknown depthTexture format")}function ot(I){const T=n.get(I),j=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const pt=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pt){const gt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pt.removeEventListener("dispose",gt)};pt.addEventListener("dispose",gt),T.__depthDisposeCallback=gt}T.__boundDepthTexture=pt}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");X(T.__webglFramebuffer,I)}else if(j){T.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[pt]),T.__webglDepthbuffer[pt]===void 0)T.__webglDepthbuffer[pt]=s.createRenderbuffer(),O(T.__webglDepthbuffer[pt],I,!1);else{const gt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[pt];s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,dt)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),O(T.__webglDepthbuffer,I,!1);else{const pt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,gt),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,gt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(I,T,j){const pt=n.get(I);T!==void 0&&N(pt.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&ot(I)}function ut(I){const T=I.texture,j=n.get(I),pt=n.get(T);I.addEventListener("dispose",S);const gt=I.textures,dt=I.isWebGLCubeRenderTarget===!0,Ft=gt.length>1;if(Ft||(pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture()),pt.__version=T.version,r.memory.textures++),dt){j.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[Tt]=[];for(let At=0;At<T.mipmaps.length;At++)j.__webglFramebuffer[Tt][At]=s.createFramebuffer()}else j.__webglFramebuffer[Tt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let Tt=0;Tt<T.mipmaps.length;Tt++)j.__webglFramebuffer[Tt]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(Ft)for(let Tt=0,At=gt.length;Tt<At;Tt++){const Jt=n.get(gt[Tt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=s.createTexture(),r.memory.textures++)}if(I.samples>0&&$t(I)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Tt=0;Tt<gt.length;Tt++){const At=gt[Tt];j.__webglColorRenderbuffer[Tt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[Tt]);const Jt=o.convert(At.format,At.colorSpace),_t=o.convert(At.type),It=y(At.internalFormat,Jt,_t,At.colorSpace,I.isXRRenderTarget===!0),Gt=Wt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt,It,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,j.__webglColorRenderbuffer[Tt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),O(j.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(dt){e.bindTexture(s.TEXTURE_CUBE_MAP,pt.__webglTexture),at(s.TEXTURE_CUBE_MAP,T);for(let Tt=0;Tt<6;Tt++)if(T.mipmaps&&T.mipmaps.length>0)for(let At=0;At<T.mipmaps.length;At++)N(j.__webglFramebuffer[Tt][At],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,At);else N(j.__webglFramebuffer[Tt],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);g(T)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let Tt=0,At=gt.length;Tt<At;Tt++){const Jt=gt[Tt],_t=n.get(Jt);e.bindTexture(s.TEXTURE_2D,_t.__webglTexture),at(s.TEXTURE_2D,Jt),N(j.__webglFramebuffer,I,Jt,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,0),g(Jt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let Tt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Tt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Tt,pt.__webglTexture),at(Tt,T),T.mipmaps&&T.mipmaps.length>0)for(let At=0;At<T.mipmaps.length;At++)N(j.__webglFramebuffer[At],I,T,s.COLOR_ATTACHMENT0,Tt,At);else N(j.__webglFramebuffer,I,T,s.COLOR_ATTACHMENT0,Tt,0);g(T)&&m(Tt),e.unbindTexture()}I.depthBuffer&&ot(I)}function tt(I){const T=I.textures;for(let j=0,pt=T.length;j<pt;j++){const gt=T[j];if(g(gt)){const dt=_(I),Ft=n.get(gt).__webglTexture;e.bindTexture(dt,Ft),m(dt),e.unbindTexture()}}}const wt=[],U=[];function Et(I){if(I.samples>0){if($t(I)===!1){const T=I.textures,j=I.width,pt=I.height;let gt=s.COLOR_BUFFER_BIT;const dt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ft=n.get(I),Tt=T.length>1;if(Tt)for(let At=0;At<T.length;At++)e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let At=0;At<T.length;At++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(gt|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(gt|=s.STENCIL_BUFFER_BIT)),Tt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ft.__webglColorRenderbuffer[At]);const Jt=n.get(T[At]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Jt,0)}s.blitFramebuffer(0,0,j,pt,0,0,j,pt,gt,s.NEAREST),c===!0&&(wt.length=0,U.length=0,wt.push(s.COLOR_ATTACHMENT0+At),I.depthBuffer&&I.resolveDepthBuffer===!1&&(wt.push(dt),U.push(dt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,wt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Tt)for(let At=0;At<T.length;At++){e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,Ft.__webglColorRenderbuffer[At]);const Jt=n.get(T[At]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,Jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const T=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Wt(I){return Math.min(i.maxSamples,I.samples)}function $t(I){const T=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Bt(I){const T=r.render.frame;h.get(I)!==T&&(h.set(I,T),I.update())}function oe(I,T){const j=I.colorSpace,pt=I.format,gt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||j!==Yo&&j!==us&&(ge.getTransfer(j)===Ae?(pt!==fi||gt!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),T}function Ut(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=V,this.setTexture2DArray=$,this.setTexture3D=st,this.setTextureCube=H,this.rebindTextures=rt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=N,this.useMultisampledRTT=$t}function j_(s,t){function e(n,i=us){let o;const r=ge.getTransfer(i);if(n===Qi)return s.UNSIGNED_BYTE;if(n===nu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===iu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===b0)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===S0)return s.BYTE;if(n===w0)return s.SHORT;if(n===Ur)return s.UNSIGNED_SHORT;if(n===eu)return s.INT;if(n===Xs)return s.UNSIGNED_INT;if(n===Ai)return s.FLOAT;if(n===Zi)return s.HALF_FLOAT;if(n===E0)return s.ALPHA;if(n===T0)return s.RGB;if(n===fi)return s.RGBA;if(n===A0)return s.LUMINANCE;if(n===R0)return s.LUMINANCE_ALPHA;if(n===Lo)return s.DEPTH_COMPONENT;if(n===Vo)return s.DEPTH_STENCIL;if(n===bc)return s.RED;if(n===su)return s.RED_INTEGER;if(n===ou)return s.RG;if(n===ru)return s.RG_INTEGER;if(n===au)return s.RGBA_INTEGER;if(n===Ka||n===Ja||n===Qa||n===tc)if(r===Ae)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ka)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ja)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ka)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ja)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eh||n===nh||n===ih||n===sh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===eh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ih)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oh||n===rh||n===ah)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===oh||n===rh)return r===Ae?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===ah)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ch||n===lh||n===hh||n===uh||n===dh||n===fh||n===ph||n===mh||n===gh||n===xh||n===vh||n===_h||n===Mh||n===yh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ch)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lh)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hh)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uh)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dh)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fh)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ph)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mh)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gh)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xh)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vh)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_h)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mh)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yh)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ec||n===Sh||n===wh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===ec)return r===Ae?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===C0||n===bh||n===Eh||n===Th)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===ec)return o.COMPRESSED_RED_RGTC1_EXT;if(n===bh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Th)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Z_ extends Fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ge extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K_={type:"move"};class hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(K_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const J_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q_=`
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

}`;class t2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new wn,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new si({vertexShader:J_,fragmentShader:Q_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new zt(new je(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e2 extends Ys{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,p=null;const x=new t2,g=e.getContextAttributes();let m=null,_=null;const y=[],v=[],P=new Pt;let E=null;const S=new Fn;S.viewport=new Oe;const C=new Fn;C.viewport=new Oe;const b=[S,C],w=new Z_;let D=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let L=y[K];return L===void 0&&(L=new hl,y[K]=L),L.getTargetRaySpace()},this.getControllerGrip=function(K){let L=y[K];return L===void 0&&(L=new hl,y[K]=L),L.getGripSpace()},this.getHand=function(K){let L=y[K];return L===void 0&&(L=new hl,y[K]=L),L.getHandSpace()};function k(K){const L=v.indexOf(K.inputSource);if(L===-1)return;const N=y[L];N!==void 0&&(N.update(K.inputSource,K.frame,l||r),N.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",V);for(let K=0;K<y.length;K++){const L=v[K];L!==null&&(v[K]=null,y[K].disconnect(L))}D=null,F=null,x.reset(),t.setRenderTarget(m),f=null,d=null,u=null,i=null,_=null,xt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",B),i.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){const L={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(i,e,L),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Ii(f.framebufferWidth,f.framebufferHeight,{format:fi,type:Qi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let L=null,N=null,O=null;g.depth&&(O=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,L=g.stencil?Vo:Lo,N=g.stencil?Bo:Xs);const X={colorFormat:e.RGBA8,depthFormat:O,scaleFactor:o};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(X),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new Ii(d.textureWidth,d.textureHeight,{format:fi,type:Qi,depthTexture:new lu(d.textureWidth,d.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),xt.setContext(i),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(K){for(let L=0;L<K.removed.length;L++){const N=K.removed[L],O=v.indexOf(N);O>=0&&(v[O]=null,y[O].disconnect(N))}for(let L=0;L<K.added.length;L++){const N=K.added[L];let O=v.indexOf(N);if(O===-1){for(let ot=0;ot<y.length;ot++)if(ot>=v.length){v.push(N),O=ot;break}else if(v[ot]===null){v[ot]=N,O=ot;break}if(O===-1)break}const X=y[O];X&&X.connect(N)}}const $=new A,st=new A;function H(K,L,N){$.setFromMatrixPosition(L.matrixWorld),st.setFromMatrixPosition(N.matrixWorld);const O=$.distanceTo(st),X=L.projectionMatrix.elements,ot=N.projectionMatrix.elements,rt=X[14]/(X[10]-1),ut=X[14]/(X[10]+1),tt=(X[9]+1)/X[5],wt=(X[9]-1)/X[5],U=(X[8]-1)/X[0],Et=(ot[8]+1)/ot[0],Wt=rt*U,$t=rt*Et,Bt=O/(-U+Et),oe=Bt*-U;if(L.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(oe),K.translateZ(Bt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),X[10]===-1)K.projectionMatrix.copy(L.projectionMatrix),K.projectionMatrixInverse.copy(L.projectionMatrixInverse);else{const Ut=rt+Bt,I=ut+Bt,T=Wt-oe,j=$t+(O-oe),pt=tt*ut/I*Ut,gt=wt*ut/I*Ut;K.projectionMatrix.makePerspective(T,j,pt,gt,Ut,I),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ft(K,L){L===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(L.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let L=K.near,N=K.far;x.texture!==null&&(x.depthNear>0&&(L=x.depthNear),x.depthFar>0&&(N=x.depthFar)),w.near=C.near=S.near=L,w.far=C.far=S.far=N,(D!==w.near||F!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),D=w.near,F=w.far),S.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,w.layers.mask=S.layers.mask|C.layers.mask;const O=K.parent,X=w.cameras;ft(w,O);for(let ot=0;ot<X.length;ot++)ft(X[ot],O);X.length===2?H(w,S,C):w.projectionMatrix.copy(S.projectionMatrix),vt(K,w,O)};function vt(K,L,N){N===null?K.matrix.copy(L.matrixWorld):(K.matrix.copy(N.matrixWorld),K.matrix.invert(),K.matrix.multiply(L.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(L.projectionMatrix),K.projectionMatrixInverse.copy(L.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ah*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(w)};let Mt=null;function at(K,L){if(h=L.getViewerPose(l||r),p=L,h!==null){const N=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let O=!1;N.length!==w.cameras.length&&(w.cameras.length=0,O=!0);for(let ot=0;ot<N.length;ot++){const rt=N[ot];let ut=null;if(f!==null)ut=f.getViewport(rt);else{const wt=u.getViewSubImage(d,rt);ut=wt.viewport,ot===0&&(t.setRenderTargetTextures(_,wt.colorTexture,d.ignoreDepthValues?void 0:wt.depthStencilTexture),t.setRenderTarget(_))}let tt=b[ot];tt===void 0&&(tt=new Fn,tt.layers.enable(ot),tt.viewport=new Oe,b[ot]=tt),tt.matrix.fromArray(rt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(rt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(ut.x,ut.y,ut.width,ut.height),ot===0&&(w.matrix.copy(tt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),O===!0&&w.cameras.push(tt)}const X=i.enabledFeatures;if(X&&X.includes("depth-sensing")){const ot=u.getDepthInformation(N[0]);ot&&ot.isValid&&ot.texture&&x.init(t,ot,i.renderState)}}for(let N=0;N<y.length;N++){const O=v[N],X=y[N];O!==null&&X!==void 0&&X.update(O,L,l||r)}Mt&&Mt(K,L),L.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:L}),p=null}const xt=new H0;xt.setAnimationLoop(at),this.setAnimationLoop=function(K){Mt=K},this.dispose=function(){}}}const Ts=new mi,n2=new ce;function i2(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,O0(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,_,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(g,m):m.isMeshToonMaterial?(o(g,m),u(g,m)):m.isMeshPhongMaterial?(o(g,m),h(g,m)):m.isMeshStandardMaterial?(o(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(o(g,m),p(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),x(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,_,y):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ln&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ln&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const _=t.get(m),y=_.envMap,v=_.envMapRotation;y&&(g.envMap.value=y,Ts.copy(v),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),g.envMapRotation.value.setFromMatrix4(n2.makeRotationFromEuler(Ts)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,_,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ln&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const _=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function s2(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,y){const v=y.program;n.uniformBlockBinding(_,v)}function l(_,y){let v=i[_.id];v===void 0&&(p(_),v=h(_),i[_.id]=v,_.addEventListener("dispose",g));const P=y.program;n.updateUBOMapping(_,P);const E=t.render.frame;o[_.id]!==E&&(d(_),o[_.id]=E)}function h(_){const y=u();_.__bindingPointIndex=y;const v=s.createBuffer(),P=_.__size,E=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,P,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function u(){for(let _=0;_<a;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=i[_.id],v=_.uniforms,P=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let E=0,S=v.length;E<S;E++){const C=Array.isArray(v[E])?v[E]:[v[E]];for(let b=0,w=C.length;b<w;b++){const D=C[b];if(f(D,E,b,P)===!0){const F=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let B=0;for(let V=0;V<k.length;V++){const $=k[V],st=x($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,F+B,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,B),B+=st.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,y,v,P){const E=_.value,S=y+"_"+v;if(P[S]===void 0)return typeof E=="number"||typeof E=="boolean"?P[S]=E:P[S]=E.clone(),!0;{const C=P[S];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return P[S]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function p(_){const y=_.uniforms;let v=0;const P=16;for(let S=0,C=y.length;S<C;S++){const b=Array.isArray(y[S])?y[S]:[y[S]];for(let w=0,D=b.length;w<D;w++){const F=b[w],k=Array.isArray(F.value)?F.value:[F.value];for(let B=0,V=k.length;B<V;B++){const $=k[B],st=x($),H=v%P,ft=H%st.boundary,vt=H+ft;v+=ft,vt!==0&&P-vt<st.storage&&(v+=P-vt),F.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=st.storage}}}const E=v%P;return E>0&&(v+=P-E),_.__size=v,_.__cache={},this}function x(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function g(_){const y=_.target;y.removeEventListener("dispose",g);const v=r.indexOf(y.__bindingPointIndex);r.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete o[y.id]}function m(){for(const _ in i)s.deleteBuffer(i[_]);r=[],i={},o={}}return{bind:c,update:l,dispose:m}}class o2{constructor(t={}){const{canvas:e=Wm(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const p=new Uint32Array(4),x=new Int32Array(4);let g=null,m=null;const _=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this.toneMapping=ms,this.toneMappingExposure=1;const v=this;let P=!1,E=0,S=0,C=null,b=-1,w=null;const D=new Oe,F=new Oe;let k=null;const B=new te(0);let V=0,$=e.width,st=e.height,H=1,ft=null,vt=null;const Mt=new Oe(0,0,$,st),at=new Oe(0,0,$,st);let xt=!1;const K=new Ac;let L=!1,N=!1;const O=new ce,X=new ce,ot=new A,rt=new Oe,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function wt(){return C===null?H:1}let U=n;function Et(R,q){return e.getContext(R,q)}try{const R={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tu}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",G,!1),U===null){const q="webgl2";if(U=Et(q,R),U===null)throw Et(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Wt,$t,Bt,oe,Ut,I,T,j,pt,gt,dt,Ft,Tt,At,Jt,_t,It,Gt,mt,Q,yt,Nt,Xt,z;function ht(){Wt=new hv(U),Wt.init(),Nt=new j_(U,Wt),$t=new sv(U,Wt,t,Nt),Bt=new $_(U,Wt),$t.reverseDepthBuffer&&d&&Bt.buffers.depth.setReversed(!0),oe=new fv(U),Ut=new L_,I=new Y_(U,Wt,Bt,Ut,$t,Nt,oe),T=new rv(v),j=new lv(v),pt=new Mg(U),Xt=new nv(U,pt),gt=new uv(U,pt,oe,Xt),dt=new mv(U,gt,pt,oe),mt=new pv(U,$t,I),_t=new ov(Ut),Ft=new P_(v,T,j,Wt,$t,Xt,_t),Tt=new i2(v,Ut),At=new D_,Jt=new O_(Wt),Gt=new ev(v,T,j,Bt,dt,f,c),It=new W_(v,dt,$t),z=new s2(U,oe,$t,Bt),Q=new iv(U,Wt,oe),yt=new dv(U,Wt,oe),oe.programs=Ft.programs,v.capabilities=$t,v.extensions=Wt,v.properties=Ut,v.renderLists=At,v.shadowMap=It,v.state=Bt,v.info=oe}ht();const Z=new e2(v,U);this.xr=Z,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=Wt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Wt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize($,st,!1))},this.getSize=function(R){return R.set($,st)},this.setSize=function(R,q,et=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=R,st=q,e.width=Math.floor(R*H),e.height=Math.floor(q*H),et===!0&&(e.style.width=R+"px",e.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set($*H,st*H).floor()},this.setDrawingBufferSize=function(R,q,et){$=R,st=q,H=et,e.width=Math.floor(R*et),e.height=Math.floor(q*et),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(Mt)},this.setViewport=function(R,q,et,nt){R.isVector4?Mt.set(R.x,R.y,R.z,R.w):Mt.set(R,q,et,nt),Bt.viewport(D.copy(Mt).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(at)},this.setScissor=function(R,q,et,nt){R.isVector4?at.set(R.x,R.y,R.z,R.w):at.set(R,q,et,nt),Bt.scissor(F.copy(at).multiplyScalar(H).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(R){Bt.setScissorTest(xt=R)},this.setOpaqueSort=function(R){ft=R},this.setTransparentSort=function(R){vt=R},this.getClearColor=function(R){return R.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(R=!0,q=!0,et=!0){let nt=0;if(R){let Y=!1;if(C!==null){const Ct=C.texture.format;Y=Ct===au||Ct===ru||Ct===su}if(Y){const Ct=C.texture.type,kt=Ct===Qi||Ct===Xs||Ct===Ur||Ct===Bo||Ct===nu||Ct===iu,qt=Gt.getClearColor(),Yt=Gt.getClearAlpha(),se=qt.r,le=qt.g,jt=qt.b;kt?(p[0]=se,p[1]=le,p[2]=jt,p[3]=Yt,U.clearBufferuiv(U.COLOR,0,p)):(x[0]=se,x[1]=le,x[2]=jt,x[3]=Yt,U.clearBufferiv(U.COLOR,0,x))}else nt|=U.COLOR_BUFFER_BIT}q&&(nt|=U.DEPTH_BUFFER_BIT),et&&(nt|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",G,!1),At.dispose(),Jt.dispose(),Ut.dispose(),T.dispose(),j.dispose(),dt.dispose(),Xt.dispose(),z.dispose(),Ft.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Ie),Z.removeEventListener("sessionend",Ue),Zt.stop()};function ct(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const R=oe.autoReset,q=It.enabled,et=It.autoUpdate,nt=It.needsUpdate,Y=It.type;ht(),oe.autoReset=R,It.enabled=q,It.autoUpdate=et,It.needsUpdate=nt,It.type=Y}function G(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function bt(R){const q=R.target;q.removeEventListener("dispose",bt),lt(q)}function lt(R){Lt(R),Ut.remove(R)}function Lt(R){const q=Ut.get(R).programs;q!==void 0&&(q.forEach(function(et){Ft.releaseProgram(et)}),R.isShaderMaterial&&Ft.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,et,nt,Y,Ct){q===null&&(q=ut);const kt=Y.isMesh&&Y.matrixWorld.determinant()<0,qt=gn(R,q,et,nt,Y);Bt.setMaterial(nt,kt);let Yt=et.index,se=1;if(nt.wireframe===!0){if(Yt=gt.getWireframeAttribute(et),Yt===void 0)return;se=2}const le=et.drawRange,jt=et.attributes.position;let ve=le.start*se,Pe=(le.start+le.count)*se;Ct!==null&&(ve=Math.max(ve,Ct.start*se),Pe=Math.min(Pe,(Ct.start+Ct.count)*se)),Yt!==null?(ve=Math.max(ve,0),Pe=Math.min(Pe,Yt.count)):jt!=null&&(ve=Math.max(ve,0),Pe=Math.min(Pe,jt.count));const De=Pe-ve;if(De<0||De===1/0)return;Xt.setup(Y,nt,qt,et,Yt);let In,Se=Q;if(Yt!==null&&(In=pt.get(Yt),Se=yt,Se.setIndex(In)),Y.isMesh)nt.wireframe===!0?(Bt.setLineWidth(nt.wireframeLinewidth*wt()),Se.setMode(U.LINES)):Se.setMode(U.TRIANGLES);else if(Y.isLine){let Kt=nt.linewidth;Kt===void 0&&(Kt=1),Bt.setLineWidth(Kt*wt()),Y.isLineSegments?Se.setMode(U.LINES):Y.isLineLoop?Se.setMode(U.LINE_LOOP):Se.setMode(U.LINE_STRIP)}else Y.isPoints?Se.setMode(U.POINTS):Y.isSprite&&Se.setMode(U.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Se.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))Se.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Kt=Y._multiDrawStarts,Ni=Y._multiDrawCounts,we=Y._multiDrawCount,oi=Yt?pt.get(Yt).bytesPerElement:1,Js=Ut.get(nt).currentProgram.getUniforms();for(let Hn=0;Hn<we;Hn++)Js.setValue(U,"_gl_DrawID",Hn),Se.render(Kt[Hn]/oi,Ni[Hn])}else if(Y.isInstancedMesh)Se.renderInstances(ve,De,Y.count);else if(et.isInstancedBufferGeometry){const Kt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Ni=Math.min(et.instanceCount,Kt);Se.renderInstances(ve,De,Ni)}else Se.render(ve,De)};function Vt(R,q,et){R.transparent===!0&&R.side===ke&&R.forceSinglePass===!1?(R.side=Ln,R.needsUpdate=!0,Ce(R,q,et),R.side=_s,R.needsUpdate=!0,Ce(R,q,et),R.side=ke):Ce(R,q,et)}this.compile=function(R,q,et=null){et===null&&(et=R),m=Jt.get(et),m.init(q),y.push(m),et.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),R!==et&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights();const nt=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ct=Y.material;if(Ct)if(Array.isArray(Ct))for(let kt=0;kt<Ct.length;kt++){const qt=Ct[kt];Vt(qt,et,Y),nt.add(qt)}else Vt(Ct,et,Y),nt.add(Ct)}),y.pop(),m=null,nt},this.compileAsync=function(R,q,et=null){const nt=this.compile(R,q,et);return new Promise(Y=>{function Ct(){if(nt.forEach(function(kt){Ut.get(kt).currentProgram.isReady()&&nt.delete(kt)}),nt.size===0){Y(R);return}setTimeout(Ct,10)}Wt.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let ae=null;function Te(R){ae&&ae(R)}function Ie(){Zt.stop()}function Ue(){Zt.start()}const Zt=new H0;Zt.setAnimationLoop(Te),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(R){ae=R,Z.setAnimationLoop(R),R===null?Zt.stop():Zt.start()},Z.addEventListener("sessionstart",Ie),Z.addEventListener("sessionend",Ue),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(q),q=Z.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,q,C),m=Jt.get(R,y.length),m.init(q),y.push(m),X.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),K.setFromProjectionMatrix(X),N=this.localClippingEnabled,L=_t.init(this.clippingPlanes,N),g=At.get(R,_.length),g.init(),_.push(g),Z.enabled===!0&&Z.isPresenting===!0){const Ct=v.xr.getDepthSensingMesh();Ct!==null&&Be(Ct,q,-1/0,v.sortObjects)}Be(R,q,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ft,vt),tt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,tt&&Gt.addToRenderList(g,R),this.info.render.frame++,L===!0&&_t.beginShadows();const et=m.state.shadowsArray;It.render(et,R,q),L===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=g.opaque,Y=g.transmissive;if(m.setupLights(),q.isArrayCamera){const Ct=q.cameras;if(Y.length>0)for(let kt=0,qt=Ct.length;kt<qt;kt++){const Yt=Ct[kt];Rt(nt,Y,R,Yt)}tt&&Gt.render(R);for(let kt=0,qt=Ct.length;kt<qt;kt++){const Yt=Ct[kt];xe(g,R,Yt,Yt.viewport)}}else Y.length>0&&Rt(nt,Y,R,q),tt&&Gt.render(R),xe(g,R,q);C!==null&&(I.updateMultisampleRenderTarget(C),I.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(v,R,q),Xt.resetDefaultState(),b=-1,w=null,y.pop(),y.length>0?(m=y[y.length-1],L===!0&&_t.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function Be(R,q,et,nt){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)et=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){nt&&rt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(X);const kt=dt.update(R),qt=R.material;qt.visible&&g.push(R,kt,qt,et,rt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||K.intersectsObject(R))){const kt=dt.update(R),qt=R.material;if(nt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),rt.copy(R.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),rt.copy(kt.boundingSphere.center)),rt.applyMatrix4(R.matrixWorld).applyMatrix4(X)),Array.isArray(qt)){const Yt=kt.groups;for(let se=0,le=Yt.length;se<le;se++){const jt=Yt[se],ve=qt[jt.materialIndex];ve&&ve.visible&&g.push(R,kt,ve,et,rt.z,jt)}}else qt.visible&&g.push(R,kt,qt,et,rt.z,null)}}const Ct=R.children;for(let kt=0,qt=Ct.length;kt<qt;kt++)Be(Ct[kt],q,et,nt)}function xe(R,q,et,nt){const Y=R.opaque,Ct=R.transmissive,kt=R.transparent;m.setupLightsView(et),L===!0&&_t.setGlobalState(v.clippingPlanes,et),nt&&Bt.viewport(D.copy(nt)),Y.length>0&&ee(Y,q,et),Ct.length>0&&ee(Ct,q,et),kt.length>0&&ee(kt,q,et),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function Rt(R,q,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[nt.id]===void 0&&(m.state.transmissionRenderTarget[nt.id]=new Ii(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?Zi:Qi,minFilter:Bs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace}));const Ct=m.state.transmissionRenderTarget[nt.id],kt=nt.viewport||D;Ct.setSize(kt.z,kt.w);const qt=v.getRenderTarget();v.setRenderTarget(Ct),v.getClearColor(B),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),tt&&Gt.render(et);const Yt=v.toneMapping;v.toneMapping=ms;const se=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),m.setupLightsView(nt),L===!0&&_t.setGlobalState(v.clippingPlanes,nt),ee(R,et,nt),I.updateMultisampleRenderTarget(Ct),I.updateRenderTargetMipmap(Ct),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let jt=0,ve=q.length;jt<ve;jt++){const Pe=q[jt],De=Pe.object,In=Pe.geometry,Se=Pe.material,Kt=Pe.group;if(Se.side===ke&&De.layers.test(nt.layers)){const Ni=Se.side;Se.side=Ln,Se.needsUpdate=!0,me(De,et,nt,In,Se,Kt),Se.side=Ni,Se.needsUpdate=!0,le=!0}}le===!0&&(I.updateMultisampleRenderTarget(Ct),I.updateRenderTargetMipmap(Ct))}v.setRenderTarget(qt),v.setClearColor(B,V),se!==void 0&&(nt.viewport=se),v.toneMapping=Yt}function ee(R,q,et){const nt=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,Ct=R.length;Y<Ct;Y++){const kt=R[Y],qt=kt.object,Yt=kt.geometry,se=nt===null?kt.material:nt,le=kt.group;qt.layers.test(et.layers)&&me(qt,q,et,Yt,se,le)}}function me(R,q,et,nt,Y,Ct){R.onBeforeRender(v,q,et,nt,Y,Ct),R.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(v,q,et,nt,R,Ct),Y.transparent===!0&&Y.side===ke&&Y.forceSinglePass===!1?(Y.side=Ln,Y.needsUpdate=!0,v.renderBufferDirect(et,q,nt,Y,R,Ct),Y.side=_s,Y.needsUpdate=!0,v.renderBufferDirect(et,q,nt,Y,R,Ct),Y.side=ke):v.renderBufferDirect(et,q,nt,Y,R,Ct),R.onAfterRender(v,q,et,nt,Y,Ct)}function Ce(R,q,et){q.isScene!==!0&&(q=ut);const nt=Ut.get(R),Y=m.state.lights,Ct=m.state.shadowsArray,kt=Y.state.version,qt=Ft.getParameters(R,Y.state,Ct,q,et),Yt=Ft.getProgramCacheKey(qt);let se=nt.programs;nt.environment=R.isMeshStandardMaterial?q.environment:null,nt.fog=q.fog,nt.envMap=(R.isMeshStandardMaterial?j:T).get(R.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,se===void 0&&(R.addEventListener("dispose",bt),se=new Map,nt.programs=se);let le=se.get(Yt);if(le!==void 0){if(nt.currentProgram===le&&nt.lightsStateVersion===kt)return _e(R,qt),le}else qt.uniforms=Ft.getUniforms(R),R.onBeforeCompile(qt,v),le=Ft.acquireProgram(qt,Yt),se.set(Yt,le),nt.uniforms=qt.uniforms;const jt=nt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(jt.clippingPlanes=_t.uniform),_e(R,qt),nt.needsLights=zc(R),nt.lightsStateVersion=kt,nt.needsLights&&(jt.ambientLightColor.value=Y.state.ambient,jt.lightProbe.value=Y.state.probe,jt.directionalLights.value=Y.state.directional,jt.directionalLightShadows.value=Y.state.directionalShadow,jt.spotLights.value=Y.state.spot,jt.spotLightShadows.value=Y.state.spotShadow,jt.rectAreaLights.value=Y.state.rectArea,jt.ltc_1.value=Y.state.rectAreaLTC1,jt.ltc_2.value=Y.state.rectAreaLTC2,jt.pointLights.value=Y.state.point,jt.pointLightShadows.value=Y.state.pointShadow,jt.hemisphereLights.value=Y.state.hemi,jt.directionalShadowMap.value=Y.state.directionalShadowMap,jt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,jt.spotShadowMap.value=Y.state.spotShadowMap,jt.spotLightMatrix.value=Y.state.spotLightMatrix,jt.spotLightMap.value=Y.state.spotLightMap,jt.pointShadowMap.value=Y.state.pointShadowMap,jt.pointShadowMatrix.value=Y.state.pointShadowMatrix),nt.currentProgram=le,nt.uniformsList=null,le}function Fe(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=ic.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function _e(R,q){const et=Ut.get(R);et.outputColorSpace=q.outputColorSpace,et.batching=q.batching,et.batchingColor=q.batchingColor,et.instancing=q.instancing,et.instancingColor=q.instancingColor,et.instancingMorph=q.instancingMorph,et.skinning=q.skinning,et.morphTargets=q.morphTargets,et.morphNormals=q.morphNormals,et.morphColors=q.morphColors,et.morphTargetsCount=q.morphTargetsCount,et.numClippingPlanes=q.numClippingPlanes,et.numIntersection=q.numClipIntersection,et.vertexAlphas=q.vertexAlphas,et.vertexTangents=q.vertexTangents,et.toneMapping=q.toneMapping}function gn(R,q,et,nt,Y){q.isScene!==!0&&(q=ut),I.resetTextureUnits();const Ct=q.fog,kt=nt.isMeshStandardMaterial?q.environment:null,qt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Yo,Yt=(nt.isMeshStandardMaterial?j:T).get(nt.envMap||kt),se=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,le=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),jt=!!et.morphAttributes.position,ve=!!et.morphAttributes.normal,Pe=!!et.morphAttributes.color;let De=ms;nt.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(De=v.toneMapping);const In=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Se=In!==void 0?In.length:0,Kt=Ut.get(nt),Ni=m.state.lights;if(L===!0&&(N===!0||R!==w)){const Zn=R===w&&nt.id===b;_t.setState(nt,R,Zn)}let we=!1;nt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ni.state.version||Kt.outputColorSpace!==qt||Y.isBatchedMesh&&Kt.batching===!1||!Y.isBatchedMesh&&Kt.batching===!0||Y.isBatchedMesh&&Kt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Kt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Kt.instancing===!1||!Y.isInstancedMesh&&Kt.instancing===!0||Y.isSkinnedMesh&&Kt.skinning===!1||!Y.isSkinnedMesh&&Kt.skinning===!0||Y.isInstancedMesh&&Kt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Kt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Kt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Kt.instancingMorph===!1&&Y.morphTexture!==null||Kt.envMap!==Yt||nt.fog===!0&&Kt.fog!==Ct||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==_t.numPlanes||Kt.numIntersection!==_t.numIntersection)||Kt.vertexAlphas!==se||Kt.vertexTangents!==le||Kt.morphTargets!==jt||Kt.morphNormals!==ve||Kt.morphColors!==Pe||Kt.toneMapping!==De||Kt.morphTargetsCount!==Se)&&(we=!0):(we=!0,Kt.__version=nt.version);let oi=Kt.currentProgram;we===!0&&(oi=Ce(nt,q,Y));let Js=!1,Hn=!1,Jo=!1;const Ne=oi.getUniforms(),vi=Kt.uniforms;if(Bt.useProgram(oi.program)&&(Js=!0,Hn=!0,Jo=!0),nt.id!==b&&(b=nt.id,Hn=!0),Js||w!==R){Bt.buffers.depth.getReversed()?(O.copy(R.projectionMatrix),$m(O),qm(O),Ne.setValue(U,"projectionMatrix",O)):Ne.setValue(U,"projectionMatrix",R.projectionMatrix),Ne.setValue(U,"viewMatrix",R.matrixWorldInverse);const ns=Ne.map.cameraPosition;ns!==void 0&&ns.setValue(U,ot.setFromMatrixPosition(R.matrixWorld)),$t.logarithmicDepthBuffer&&Ne.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ne.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Hn=!0,Jo=!0)}if(Y.isSkinnedMesh){Ne.setOptional(U,Y,"bindMatrix"),Ne.setOptional(U,Y,"bindMatrixInverse");const Zn=Y.skeleton;Zn&&(Zn.boneTexture===null&&Zn.computeBoneTexture(),Ne.setValue(U,"boneTexture",Zn.boneTexture,I))}Y.isBatchedMesh&&(Ne.setOptional(U,Y,"batchingTexture"),Ne.setValue(U,"batchingTexture",Y._matricesTexture,I),Ne.setOptional(U,Y,"batchingIdTexture"),Ne.setValue(U,"batchingIdTexture",Y._indirectTexture,I),Ne.setOptional(U,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ne.setValue(U,"batchingColorTexture",Y._colorsTexture,I));const Qo=et.morphAttributes;if((Qo.position!==void 0||Qo.normal!==void 0||Qo.color!==void 0)&&mt.update(Y,et,oi),(Hn||Kt.receiveShadow!==Y.receiveShadow)&&(Kt.receiveShadow=Y.receiveShadow,Ne.setValue(U,"receiveShadow",Y.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(vi.envMap.value=Yt,vi.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&q.environment!==null&&(vi.envMapIntensity.value=q.environmentIntensity),Hn&&(Ne.setValue(U,"toneMappingExposure",v.toneMappingExposure),Kt.needsLights&&xi(vi,Jo),Ct&&nt.fog===!0&&Tt.refreshFogUniforms(vi,Ct),Tt.refreshMaterialUniforms(vi,nt,H,st,m.state.transmissionRenderTarget[R.id]),ic.upload(U,Fe(Kt),vi,I)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(ic.upload(U,Fe(Kt),vi,I),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ne.setValue(U,"center",Y.center),Ne.setValue(U,"modelViewMatrix",Y.modelViewMatrix),Ne.setValue(U,"normalMatrix",Y.normalMatrix),Ne.setValue(U,"modelMatrix",Y.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const Zn=nt.uniformsGroups;for(let ns=0,is=Zn.length;ns<is;ns++){const Bu=Zn[ns];z.update(Bu,oi),z.bind(Bu,oi)}}return oi}function xi(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function zc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,q,et){Ut.get(R.texture).__webglTexture=q,Ut.get(R.depthTexture).__webglTexture=et;const nt=Ut.get(R);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=et===void 0,nt.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,q){const et=Ut.get(R);et.__webglFramebuffer=q,et.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,et=0){C=R,E=q,S=et;let nt=!0,Y=null,Ct=!1,kt=!1;if(R){const Yt=Ut.get(R);if(Yt.__useDefaultFramebuffer!==void 0)Bt.bindFramebuffer(U.FRAMEBUFFER,null),nt=!1;else if(Yt.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(Yt.__hasExternalTextures)I.rebindTextures(R,Ut.get(R.texture).__webglTexture,Ut.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const jt=R.depthTexture;if(Yt.__boundDepthTexture!==jt){if(jt!==null&&Ut.has(jt)&&(R.width!==jt.image.width||R.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}const se=R.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(kt=!0);const le=Ut.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(le[q])?Y=le[q][et]:Y=le[q],Ct=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?Y=Ut.get(R).__webglMultisampledFramebuffer:Array.isArray(le)?Y=le[et]:Y=le,D.copy(R.viewport),F.copy(R.scissor),k=R.scissorTest}else D.copy(Mt).multiplyScalar(H).floor(),F.copy(at).multiplyScalar(H).floor(),k=xt;if(Bt.bindFramebuffer(U.FRAMEBUFFER,Y)&&nt&&Bt.drawBuffers(R,Y),Bt.viewport(D),Bt.scissor(F),Bt.setScissorTest(k),Ct){const Yt=Ut.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+q,Yt.__webglTexture,et)}else if(kt){const Yt=Ut.get(R.texture),se=q||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Yt.__webglTexture,et||0,se)}b=-1},this.readRenderTargetPixels=function(R,q,et,nt,Y,Ct,kt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=Ut.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&kt!==void 0&&(qt=qt[kt]),qt){Bt.bindFramebuffer(U.FRAMEBUFFER,qt);try{const Yt=R.texture,se=Yt.format,le=Yt.type;if(!$t.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-nt&&et>=0&&et<=R.height-Y&&U.readPixels(q,et,nt,Y,Nt.convert(se),Nt.convert(le),Ct)}finally{const Yt=C!==null?Ut.get(C).__webglFramebuffer:null;Bt.bindFramebuffer(U.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(R,q,et,nt,Y,Ct,kt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=Ut.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&kt!==void 0&&(qt=qt[kt]),qt){const Yt=R.texture,se=Yt.format,le=Yt.type;if(!$t.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=R.width-nt&&et>=0&&et<=R.height-Y){Bt.bindFramebuffer(U.FRAMEBUFFER,qt);const jt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,jt),U.bufferData(U.PIXEL_PACK_BUFFER,Ct.byteLength,U.STREAM_READ),U.readPixels(q,et,nt,Y,Nt.convert(se),Nt.convert(le),0);const ve=C!==null?Ut.get(C).__webglFramebuffer:null;Bt.bindFramebuffer(U.FRAMEBUFFER,ve);const Pe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Xm(U,Pe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,jt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ct),U.deleteBuffer(jt),U.deleteSync(Pe),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,q=null,et=0){R.isTexture!==!0&&(Mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,R=arguments[1]);const nt=Math.pow(2,-et),Y=Math.floor(R.image.width*nt),Ct=Math.floor(R.image.height*nt),kt=q!==null?q.x:0,qt=q!==null?q.y:0;I.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,et,0,0,kt,qt,Y,Ct),Bt.unbindTexture()},this.copyTextureToTexture=function(R,q,et=null,nt=null,Y=0){R.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,R=arguments[1],q=arguments[2],Y=arguments[3]||0,et=null);let Ct,kt,qt,Yt,se,le,jt,ve,Pe;const De=R.isCompressedTexture?R.mipmaps[Y]:R.image;et!==null?(Ct=et.max.x-et.min.x,kt=et.max.y-et.min.y,qt=et.isBox3?et.max.z-et.min.z:1,Yt=et.min.x,se=et.min.y,le=et.isBox3?et.min.z:0):(Ct=De.width,kt=De.height,qt=De.depth||1,Yt=0,se=0,le=0),nt!==null?(jt=nt.x,ve=nt.y,Pe=nt.z):(jt=0,ve=0,Pe=0);const In=Nt.convert(q.format),Se=Nt.convert(q.type);let Kt;q.isData3DTexture?(I.setTexture3D(q,0),Kt=U.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(I.setTexture2DArray(q,0),Kt=U.TEXTURE_2D_ARRAY):(I.setTexture2D(q,0),Kt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,q.unpackAlignment);const Ni=U.getParameter(U.UNPACK_ROW_LENGTH),we=U.getParameter(U.UNPACK_IMAGE_HEIGHT),oi=U.getParameter(U.UNPACK_SKIP_PIXELS),Js=U.getParameter(U.UNPACK_SKIP_ROWS),Hn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,De.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,De.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Yt),U.pixelStorei(U.UNPACK_SKIP_ROWS,se),U.pixelStorei(U.UNPACK_SKIP_IMAGES,le);const Jo=R.isDataArrayTexture||R.isData3DTexture,Ne=q.isDataArrayTexture||q.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const vi=Ut.get(R),Qo=Ut.get(q),Zn=Ut.get(vi.__renderTarget),ns=Ut.get(Qo.__renderTarget);Bt.bindFramebuffer(U.READ_FRAMEBUFFER,Zn.__webglFramebuffer),Bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,ns.__webglFramebuffer);for(let is=0;is<qt;is++)Jo&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ut.get(R).__webglTexture,Y,le+is),R.isDepthTexture?(Ne&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ut.get(q).__webglTexture,Y,Pe+is),U.blitFramebuffer(Yt,se,Ct,kt,jt,ve,Ct,kt,U.DEPTH_BUFFER_BIT,U.NEAREST)):Ne?U.copyTexSubImage3D(Kt,Y,jt,ve,Pe+is,Yt,se,Ct,kt):U.copyTexSubImage2D(Kt,Y,jt,ve,Pe+is,Yt,se,Ct,kt);Bt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ne?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(Kt,Y,jt,ve,Pe,Ct,kt,qt,In,Se,De.data):q.isCompressedArrayTexture?U.compressedTexSubImage3D(Kt,Y,jt,ve,Pe,Ct,kt,qt,In,De.data):U.texSubImage3D(Kt,Y,jt,ve,Pe,Ct,kt,qt,In,Se,De):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Y,jt,ve,Ct,kt,In,Se,De.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Y,jt,ve,De.width,De.height,In,De.data):U.texSubImage2D(U.TEXTURE_2D,Y,jt,ve,Ct,kt,In,Se,De);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ni),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,we),U.pixelStorei(U.UNPACK_SKIP_PIXELS,oi),U.pixelStorei(U.UNPACK_SKIP_ROWS,Js),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Hn),Y===0&&q.generateMipmaps&&U.generateMipmap(Kt),Bt.unbindTexture()},this.copyTextureToTexture3D=function(R,q,et=null,nt=null,Y=0){return R.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,nt=arguments[1]||null,R=arguments[2],q=arguments[3],Y=arguments[4]||0),Mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,et,nt,Y)},this.initRenderTarget=function(R){Ut.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),Bt.unbindTexture()},this.resetState=function(){E=0,S=0,C=null,Bt.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}}class hu{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new te(t),this.near=e,this.far=n}clone(){return new hu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class r2 extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ch extends wn{constructor(t=null,e=1,n=1,i,o,r,a,c,l=jn,h=jn,u,d){super(null,r,a,c,l,h,i,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bd extends nn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const po=new ce,Vd=new ce,ma=[],Hd=new Ms,a2=new ce,or=new zt,rr=new js;class Pi extends zt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Bd(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,a2)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ms),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,po),Hd.copy(t.boundingBox).applyMatrix4(po),this.boundingBox.union(Hd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new js),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,po),rr.copy(t.boundingSphere).applyMatrix4(po),this.boundingSphere.union(rr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(n),t.ray.intersectsSphere(rr)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,po),Vd.multiplyMatrices(n,po),or.matrixWorld=Vd,or.raycast(t,ma);for(let r=0,a=ma.length;r<a;r++){const c=ma[r];c.instanceId=o,c.object=this,e.push(c)}ma.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Bd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ch(new Float32Array(i*this.count),i,this.count,bc,Ai));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=i*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class uu extends Zs{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const dc=new A,fc=new A,Gd=new ce,ar=new Tc,ga=new js,ul=new A,Wd=new A;class Y0 extends en{constructor(t=new ze,e=new uu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)dc.fromBufferAttribute(e,i-1),fc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=dc.distanceTo(fc);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(i),ga.radius+=o,t.ray.intersectsSphere(ga)===!1)return;Gd.copy(i).invert(),ar.copy(t.ray).applyMatrix4(Gd);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let x=f,g=p-1;x<g;x+=l){const m=h.getX(x),_=h.getX(x+1),y=xa(this,t,ar,c,m,_);y&&e.push(y)}if(this.isLineLoop){const x=h.getX(p-1),g=h.getX(f),m=xa(this,t,ar,c,x,g);m&&e.push(m)}}else{const f=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let x=f,g=p-1;x<g;x+=l){const m=xa(this,t,ar,c,x,x+1);m&&e.push(m)}if(this.isLineLoop){const x=xa(this,t,ar,c,p-1,f);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function xa(s,t,e,n,i,o){const r=s.geometry.attributes.position;if(dc.fromBufferAttribute(r,i),fc.fromBufferAttribute(r,o),e.distanceSqToSegment(dc,fc,ul,Wd)>n)return;ul.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ul);if(!(c<t.near||c>t.far))return{distance:c,point:Wd.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Xd=new A,$d=new A;class c2 extends Y0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,o=e.count;i<o;i+=2)Xd.fromBufferAttribute(e,i),$d.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Xd.distanceTo($d);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class l2 extends Zs{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const qd=new ce,Ph=new Tc,va=new js,_a=new A;class h2 extends en{constructor(t=new ze,e=new l2){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(i),va.radius+=o,t.ray.intersectsSphere(va)===!1)return;qd.copy(i).invert(),Ph.copy(t.ray).applyMatrix4(qd);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let p=d,x=f;p<x;p++){const g=l.getX(p);_a.fromBufferAttribute(u,g),Yd(_a,g,c,i,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let p=d,x=f;p<x;p++)_a.fromBufferAttribute(u,p),Yd(_a,p,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Yd(s,t,e,n,i,o,r){const a=Ph.distanceSqToPoint(s);if(a<e){const c=new A;Ph.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class es extends wn{constructor(t,e,n,i,o,r,a,c,l){super(t,e,n,i,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Di{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(o-1);const h=n[i],d=n[i+1]-h,f=(r-h)/d;return(i+f)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const r=this.getPoint(i),a=this.getPoint(o),c=e||(r.isVector2?new Pt:new A);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,i=[],o=[],r=[],a=new A,c=new ce;for(let f=0;f<=t;f++){const p=f/t;i[f]=this.getTangentAt(p,new A)}o[0]=new A,r[0]=new A;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(tn(i[f-1].dot(i[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,p))}r[f].crossVectors(i[f],o[f])}if(e===!0){let f=Math.acos(tn(o[0].dot(o[t]),-1,1));f/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let p=1;p<=t;p++)o[p].applyMatrix4(c.makeRotationAxis(i[p],f*p)),r[p].crossVectors(i[p],o[p])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class du extends Di{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Pt){const n=e,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class u2 extends du{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function fu(){let s=0,t=0,e=0,n=0;function i(o,r,a,c){s=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){i(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let d=(r-o)/l-(a-o)/(l+h)+(a-r)/h,f=(a-r)/h-(c-r)/(h+u)+(c-a)/u;d*=h,f*=h,i(r,a,d,f)},calc:function(o){const r=o*o,a=r*o;return s+t*o+e*r+n*a}}}const Ma=new A,dl=new fu,fl=new fu,pl=new fu;class d2 extends Di{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){const n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%o]:(Ma.subVectors(i[0],i[1]).add(i[0]),l=Ma);const u=i[a%o],d=i[(a+1)%o];if(this.closed||a+2<o?h=i[(a+2)%o]:(Ma.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=Ma),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),dl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,x,g),fl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,x,g),pl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(dl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),fl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),pl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(dl.calc(c),fl.calc(c),pl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function jd(s,t,e,n,i){const o=(n-t)*.5,r=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*s+e}function f2(s,t){const e=1-s;return e*e*t}function p2(s,t){return 2*(1-s)*s*t}function m2(s,t){return s*s*t}function Rr(s,t,e,n){return f2(s,t)+p2(s,e)+m2(s,n)}function g2(s,t){const e=1-s;return e*e*e*t}function x2(s,t){const e=1-s;return 3*e*e*s*t}function v2(s,t){return 3*(1-s)*s*s*t}function _2(s,t){return s*s*s*t}function Cr(s,t,e,n,i){return g2(s,t)+x2(s,e)+v2(s,n)+_2(s,i)}class j0 extends Di{constructor(t=new Pt,e=new Pt,n=new Pt,i=new Pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Pt){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Cr(t,i.x,o.x,r.x,a.x),Cr(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class M2 extends Di{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Cr(t,i.x,o.x,r.x,a.x),Cr(t,i.y,o.y,r.y,a.y),Cr(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Z0 extends Di{constructor(t=new Pt,e=new Pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class y2 extends Di{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class K0 extends Di{constructor(t=new Pt,e=new Pt,n=new Pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Pt){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(Rr(t,i.x,o.x,r.x),Rr(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class S2 extends Di{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(Rr(t,i.x,o.x,r.x),Rr(t,i.y,o.y,r.y),Rr(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class J0 extends Di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Pt){const n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(jd(a,c.x,l.x,h.x,u.x),jd(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Pt().fromArray(i))}return this}}var Zd=Object.freeze({__proto__:null,ArcCurve:u2,CatmullRomCurve3:d2,CubicBezierCurve:j0,CubicBezierCurve3:M2,EllipseCurve:du,LineCurve:Z0,LineCurve3:y2,QuadraticBezierCurve:K0,QuadraticBezierCurve3:S2,SplineCurve:J0});class w2 extends Di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zd[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const r=i[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Zd[i.type]().fromJSON(i))}return this}}let pc=class extends w2{constructor(t){super(),this.type="Path",this.currentPoint=new Pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Z0(this.currentPoint.clone(),new Pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new K0(this.currentPoint.clone(),new Pt(t,e),new Pt(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){const a=new j0(this.currentPoint.clone(),new Pt(t,e),new Pt(n,i),new Pt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new J0(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,o,r,a,c),this}absellipse(t,e,n,i,o,r,a,c){const l=new du(t,e,n,i,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};class pu extends ze{constructor(t=[new Pt(0,-.5),new Pt(.5,0),new Pt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=tn(i,0,Math.PI*2);const o=[],r=[],a=[],c=[],l=[],h=1/e,u=new A,d=new Pt,f=new A,p=new A,x=new A;let g=0,m=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(p)}for(let _=0;_<=e;_++){const y=n+_*h*i,v=Math.sin(y),P=Math.cos(y);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*v,u.y=t[E].y,u.z=t[E].x*P,r.push(u.x,u.y,u.z),d.x=_/e,d.y=E/(t.length-1),a.push(d.x,d.y);const S=c[3*E+0]*v,C=c[3*E+1],b=c[3*E+0]*P;l.push(S,C,b)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){const v=y+_*t.length,P=v,E=v+t.length,S=v+t.length+1,C=v+1;o.push(P,E,C),o.push(S,C,E)}this.setIndex(o),this.setAttribute("position",new fe(r,3)),this.setAttribute("uv",new fe(a,2)),this.setAttribute("normal",new fe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pu(t.points,t.segments,t.phiStart,t.phiLength)}}class mu extends pu{constructor(t=1,e=1,n=4,i=8){const o=new pc;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new mu(t.radius,t.length,t.capSegments,t.radialSegments)}}class Go extends ze{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new A,h=new Pt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Go(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Sn extends ze{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),o=Math.floor(o);const h=[],u=[],d=[],f=[];let p=0;const x=[],g=n/2;let m=0;_(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function _(){const v=new A,P=new A;let E=0;const S=(e-t)/n;for(let C=0;C<=o;C++){const b=[],w=C/o,D=w*(e-t)+t;for(let F=0;F<=i;F++){const k=F/i,B=k*c+a,V=Math.sin(B),$=Math.cos(B);P.x=D*V,P.y=-w*n+g,P.z=D*$,u.push(P.x,P.y,P.z),v.set(V,S,$).normalize(),d.push(v.x,v.y,v.z),f.push(k,1-w),b.push(p++)}x.push(b)}for(let C=0;C<i;C++)for(let b=0;b<o;b++){const w=x[b][C],D=x[b+1][C],F=x[b+1][C+1],k=x[b][C+1];(t>0||b!==0)&&(h.push(w,D,k),E+=3),(e>0||b!==o-1)&&(h.push(D,F,k),E+=3)}l.addGroup(m,E,0),m+=E}function y(v){const P=p,E=new Pt,S=new A;let C=0;const b=v===!0?t:e,w=v===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),p++;const D=p;for(let F=0;F<=i;F++){const B=F/i*c+a,V=Math.cos(B),$=Math.sin(B);S.x=b*$,S.y=g*w,S.z=b*V,u.push(S.x,S.y,S.z),d.push(0,w,0),E.x=V*.5+.5,E.y=$*.5*w+.5,f.push(E.x,E.y),p++}for(let F=0;F<i;F++){const k=P+F,B=D+F;v===!0?h.push(B,B+1,k):h.push(B+1,B,k),C+=3}l.addGroup(m,C,v===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gu extends Sn{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new gu(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Q0 extends pc{constructor(t){super(t),this.uuid=jo(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new pc().fromJSON(i))}return this}}const b2={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=tp(s,0,i,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,u,d,f;if(n&&(o=C2(s,t,o,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let p=e;p<i;p+=e)u=s[p],d=s[p+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Fr(o,r,e,a,c,f,0),r}};function tp(s,t,e,n,i){let o,r;if(i===B2(s,t,e,n)>0)for(o=t;o<e;o+=n)r=Kd(o,s[o],s[o+1],r);else for(o=e-n;o>=t;o-=n)r=Kd(o,s[o],s[o+1],r);return r&&Cc(r,r.next)&&(Or(r),r=r.next),r}function $s(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Cc(e,e.next)||He(e.prev,e,e.next)===0)){if(Or(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Fr(s,t,e,n,i,o,r){if(!s)return;!r&&o&&N2(s,n,i,o);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,o?T2(s,n,i,o):E2(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Or(s),s=l.next,a=l.next;continue}if(s=l,s===a){r?r===1?(s=A2($s(s),t,e),Fr(s,t,e,n,i,o,2)):r===2&&R2(s,t,e,n,i,o):Fr($s(s),t,e,n,i,o,1);break}}}function E2(s){const t=s.prev,e=s,n=s.next;if(He(t,e,n)>=0)return!1;const i=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=i<o?i<r?i:r:o<r?o:r,u=a<c?a<l?a:l:c<l?c:l,d=i>o?i>r?i:r:o>r?o:r,f=a>c?a>l?a:l:c>l?c:l;let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&bo(i,a,o,c,r,l,p.x,p.y)&&He(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function T2(s,t,e,n){const i=s.prev,o=s,r=s.next;if(He(i,o,r)>=0)return!1;const a=i.x,c=o.x,l=r.x,h=i.y,u=o.y,d=r.y,f=a<c?a<l?a:l:c<l?c:l,p=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,m=Lh(f,p,t,e,n),_=Lh(x,g,t,e,n);let y=s.prevZ,v=s.nextZ;for(;y&&y.z>=m&&v&&v.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==r&&bo(a,h,c,u,l,d,y.x,y.y)&&He(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==r&&bo(a,h,c,u,l,d,v.x,v.y)&&He(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==r&&bo(a,h,c,u,l,d,y.x,y.y)&&He(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==r&&bo(a,h,c,u,l,d,v.x,v.y)&&He(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function A2(s,t,e){let n=s;do{const i=n.prev,o=n.next.next;!Cc(i,o)&&ep(i,n,n.next,o)&&kr(i,o)&&kr(o,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Or(n),Or(n.next),n=s=o),n=n.next}while(n!==s);return $s(n)}function R2(s,t,e,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&F2(r,a)){let c=np(r,a);r=$s(r,r.next),c=$s(c,c.next),Fr(r,t,e,n,i,o,0),Fr(c,t,e,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function C2(s,t,e,n){const i=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:s.length,l=tp(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(U2(l));for(i.sort(P2),o=0;o<i.length;o++)e=L2(i[o],e);return e}function P2(s,t){return s.x-t.x}function L2(s,t){const e=I2(s,t);if(!e)return t;const n=np(e,s);return $s(n,n.next),$s(e,e.next)}function I2(s,t){let e=t,n=-1/0,i;const o=s.x,r=s.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===o))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;e=i;do o>=e.x&&e.x>=c&&o!==e.x&&bo(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),kr(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&D2(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function D2(s,t){return He(s.prev,s,t.prev)<0&&He(t.next,s,s.next)<0}function N2(s,t,e,n){let i=s;do i.z===0&&(i.z=Lh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,z2(i)}function z2(s){let t,e,n,i,o,r,a,c,l=1;do{for(e=s,s=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;e=n}o.nextZ=null,l*=2}while(r>1);return s}function Lh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function U2(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function bo(s,t,e,n,i,o,r,a){return(i-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(i-r)*(n-a)}function F2(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!k2(s,t)&&(kr(s,t)&&kr(t,s)&&O2(s,t)&&(He(s.prev,s,t.prev)||He(s,t.prev,t))||Cc(s,t)&&He(s.prev,s,s.next)>0&&He(t.prev,t,t.next)>0)}function He(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Cc(s,t){return s.x===t.x&&s.y===t.y}function ep(s,t,e,n){const i=Sa(He(s,t,e)),o=Sa(He(s,t,n)),r=Sa(He(e,n,s)),a=Sa(He(e,n,t));return!!(i!==o&&r!==a||i===0&&ya(s,e,t)||o===0&&ya(s,n,t)||r===0&&ya(e,s,n)||a===0&&ya(e,t,n))}function ya(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Sa(s){return s>0?1:s<0?-1:0}function k2(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&ep(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function kr(s,t){return He(s.prev,s,s.next)<0?He(s,t,s.next)>=0&&He(s,s.prev,t)>=0:He(s,t,s.prev)<0||He(s,s.next,t)<0}function O2(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function np(s,t){const e=new Ih(s.i,s.x,s.y),n=new Ih(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Kd(s,t,e,n){const i=new Ih(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Or(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ih(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function B2(s,t,e,n){let i=0;for(let o=t,r=e-n;o<e;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}class Pr{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return Pr.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];Jd(t),Qd(n,t);let r=t.length;e.forEach(Jd);for(let c=0;c<e.length;c++)i.push(r),r+=e[c].length,Qd(n,e[c]);const a=b2.triangulate(n,i);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Jd(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Qd(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class xu extends ze{constructor(t=new Q0([new Pt(0,.5),new Pt(-.5,-.5),new Pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new fe(i,3)),this.setAttribute("normal",new fe(o,3)),this.setAttribute("uv",new fe(r,2));function l(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const p=d.holes;Pr.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const _=p[g];Pr.isClockWise(_)===!0&&(p[g]=_.reverse())}const x=Pr.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const _=p[g];f=f.concat(_)}for(let g=0,m=f.length;g<m;g++){const _=f[g];i.push(_.x,_.y,0),o.push(0,0,1),r.push(_.x,_.y)}for(let g=0,m=x.length;g<m;g++){const _=x[g],y=_[0]+u,v=_[1]+u,P=_[2]+u;n.push(y,v,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return V2(e,t)}static fromJSON(t,e){const n=[];for(let i=0,o=t.shapes.length;i<o;i++){const r=e[t.shapes[i]];n.push(r)}return new xu(n,t.curveSegments)}}function V2(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class qs extends ze{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new A,d=new A,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){const _=[],y=m/n;let v=0;m===0&&r===0?v=.5/e:m===n&&c===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){const E=P/e;u.x=-t*Math.cos(i+E*o)*Math.sin(r+y*a),u.y=t*Math.cos(r+y*a),u.z=t*Math.sin(i+E*o)*Math.sin(r+y*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(E+v,1-y),_.push(l++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){const y=h[m][_+1],v=h[m][_],P=h[m+1][_],E=h[m+1][_+1];(m!==0||r>0)&&f.push(y,v,E),(m!==n-1||c<Math.PI)&&f.push(v,P,E)}this.setIndex(f),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(x,3)),this.setAttribute("uv",new fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pc extends ze{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],c=[],l=[],h=new A,u=new A,d=new A;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){const x=p/i*o,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(p/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){const x=(i+1)*f+p-1,g=(i+1)*(f-1)+p-1,m=(i+1)*(f-1)+p,_=(i+1)*f+p;r.push(x,g,_),r.push(g,m,_)}this.setIndex(r),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Qt extends Zs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=P0,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ip extends en{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class H2 extends ip{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ml=new ce,tf=new A,ef=new A;class G2{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ac,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;tf.setFromMatrixPosition(t.matrixWorld),e.position.copy(tf),ef.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ef),e.updateMatrixWorld(),ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class W2 extends G2{constructor(){super(new G0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class X2 extends ip{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new W2}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=nf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function nf(){return performance.now()}class sf{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(tn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $2 extends c2{constructor(t=10,e=10,n=4473924,i=8947848){n=new te(n),i=new te(i);const o=e/2,r=t/e,a=t/2,c=[],l=[];for(let d=0,f=0,p=-a;d<=e;d++,p+=r){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const x=d===o?n:i;x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3}const h=new ze;h.setAttribute("position",new fe(c,3)),h.setAttribute("color",new fe(l,3));const u=new uu({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}let q2=class extends Ys{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tu);const of={type:"change"},_u={type:"start"},sp={type:"end"},wa=new Tc,rf=new Wi,Y2=Math.cos(70*Gm.DEG2RAD),Ke=new A,Nn=2*Math.PI,Re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gl=1e-6;class j2 extends q2{constructor(t,e=null){super(t,e),this.state=Re.NONE,this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Co.ROTATE,MIDDLE:Co.DOLLY,RIGHT:Co.PAN},this.touches={ONE:So.ROTATE,TWO:So.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new bn,this._lastTargetPosition=new A,this._quat=new bn().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sf,this._sphericalDelta=new sf,this._scale=1,this._panOffset=new A,this._rotateStart=new Pt,this._rotateEnd=new Pt,this._rotateDelta=new Pt,this._panStart=new Pt,this._panEnd=new Pt,this._panDelta=new Pt,this._dollyStart=new Pt,this._dollyEnd=new Pt,this._dollyDelta=new Pt,this._dollyDirection=new A,this._mouse=new Pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=K2.bind(this),this._onPointerDown=Z2.bind(this),this._onPointerUp=J2.bind(this),this._onContextMenu=oM.bind(this),this._onMouseWheel=eM.bind(this),this._onKeyDown=nM.bind(this),this._onTouchStart=iM.bind(this),this._onTouchMove=sM.bind(this),this._onMouseDown=Q2.bind(this),this._onMouseMove=tM.bind(this),this._interceptControlDown=rM.bind(this),this._interceptControlUp=aM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(of),this.update(),this.state=Re.NONE}update(t=null){const e=this.object.position;Ke.copy(e).sub(this.target),Ke.applyQuaternion(this._quat),this._spherical.setFromVector3(Ke),this.autoRotate&&this.state===Re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Nn:n>Math.PI&&(n-=Nn),i<-Math.PI?i+=Nn:i>Math.PI&&(i-=Nn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Ke.setFromSpherical(this._spherical),Ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Ke.length();r=this._clampDistance(a*this._scale);const c=a-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){const a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;const l=new A(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=Ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(wa.origin.copy(this.object.position),wa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wa.direction))<Y2?this.object.lookAt(this.target):(rf.setFromNormalAndCoplanarPoint(this.object.up,this.target),wa.intersectPlane(rf,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>gl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gl||this._lastTargetPosition.distanceToSquared(this.target)>gl?(this.dispatchEvent(of),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Nn/60*this.autoRotateSpeed*t:Nn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ke.setFromMatrixColumn(e,0),Ke.multiplyScalar(-t),this._panOffset.add(Ke)}_panUp(t,e){this.screenSpacePanning===!0?Ke.setFromMatrixColumn(e,1):(Ke.setFromMatrixColumn(e,0),Ke.crossVectors(this.object.up,Ke)),Ke.multiplyScalar(t),this._panOffset.add(Ke)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ke.copy(i).sub(this.target);let o=Ke.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=i/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,o=Math.sqrt(n*n+i*i);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(i,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,o=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Z2(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function K2(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function J2(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sp),this.state=Re.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Q2(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Co.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Re.DOLLY;break;case Co.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Re.ROTATE}break;case Co.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Re.PAN}break;default:this.state=Re.NONE}this.state!==Re.NONE&&this.dispatchEvent(_u)}function tM(s){switch(this.state){case Re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function eM(s){this.enabled===!1||this.enableZoom===!1||this.state!==Re.NONE||(s.preventDefault(),this.dispatchEvent(_u),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(sp))}function nM(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function iM(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case So.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Re.TOUCH_ROTATE;break;case So.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Re.TOUCH_PAN;break;default:this.state=Re.NONE}break;case 2:switch(this.touches.TWO){case So.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Re.TOUCH_DOLLY_PAN;break;case So.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Re.TOUCH_DOLLY_ROTATE;break;default:this.state=Re.NONE}break;default:this.state=Re.NONE}this.state!==Re.NONE&&this.dispatchEvent(_u)}function sM(s){switch(this._trackPointer(s),this.state){case Re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Re.NONE}}function oM(s){this.enabled!==!1&&s.preventDefault()}function rM(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function aM(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const cM=9.81;function mo(s,t,e,n){const i=s*Math.PI/180,o=2*Math.PI/t;return{dirX:Math.sin(i),dirZ:Math.cos(i),amp:e,k:o,omega:Math.sqrt(cM*o),phase:n}}const xl=3;class op{constructor(){M(this,"waves",[mo(10,7,1,0),mo(40,5,.8,1.3),mo(-30,3.6,.6,2.1),mo(65,2.6,.45,4),mo(-55,2,.32,.7),mo(20,1.6,.22,5.2)]);M(this,"scale",1);let t=0;for(const i of this.waves)t+=i.amp*i.amp;const e=Math.sqrt(t/2),n=xl/100/4/e;for(const i of this.waves)i.amp*=n}setHeightCm(t){this.scale=t/xl}get heightCm(){return this.scale*xl}height(t,e,n){let i=0;for(const o of this.waves)i+=o.amp*Math.sin(o.k*(o.dirX*t+o.dirZ*e)-o.omega*n+o.phase);return i*this.scale}verticalVelocity(t,e,n){let i=0;for(const o of this.waves)i-=o.amp*o.omega*Math.cos(o.k*(o.dirX*t+o.dirZ*e)-o.omega*n+o.phase);return i*this.scale}}const lM=1e3,Cn={depth:.3,flowTime:5,airTime:3,spread:.05,sprayAir:0,airWidth:.65,maxVoid:.6};class Dh{constructor(t,e){M(this,"n");M(this,"dx");M(this,"originX",0);M(this,"originZ",0);M(this,"ux");M(this,"uz");M(this,"air");M(this,"t1");M(this,"t2");M(this,"t3");this.n=t,this.dx=e;const n=t*t;this.ux=new Float32Array(n),this.uz=new Float32Array(n),this.air=new Float32Array(n),this.t1=new Float32Array(n),this.t2=new Float32Array(n),this.t3=new Float32Array(n)}clear(){this.ux.fill(0),this.uz.fill(0),this.air.fill(0)}shift(t,e){const n=this.n;for(const i of[this.ux,this.uz,this.air]){const o=i.slice();i.fill(0);for(let r=0;r<n;r++){const a=r+e;if(!(a<0||a>=n))for(let c=0;c<n;c++){const l=c+t;l<0||l>=n||(i[r*n+c]=o[a*n+l])}}}this.originX+=t*this.dx,this.originZ+=e*this.dx}addMomentum(t,e,n,i){const o=1/(lM*Cn.depth*this.dx*this.dx);this.splat(this.ux,t,e,n*o),this.splat(this.uz,t,e,i*o)}addAir(t,e,n){n<=0||this.addAirSigned(t,e,n)}addAirSigned(t,e,n){if(n===0)return;const i=this.n,o=(t-this.originX)/this.dx,r=(e-this.originZ)/this.dx,a=Math.max(Cn.airWidth/this.dx,.7),c=Math.ceil(a*2),l=Math.max(1,Math.floor(o-c)),h=Math.min(i-2,Math.ceil(o+c)),u=Math.max(1,Math.floor(r-c)),d=Math.min(i-2,Math.ceil(r+c));if(l>h||u>d)return;let f=0;for(let x=u;x<=d;x++)for(let g=l;g<=h;g++)f+=Math.exp(-((g-o)**2+(x-r)**2)/(2*a*a));if(f<=0)return;const p=n/(f*this.dx*this.dx);for(let x=u;x<=d;x++)for(let g=l;g<=h;g++)this.air[x*i+g]+=p*Math.exp(-((g-o)**2+(x-r)**2)/(2*a*a))}splat(t,e,n,i){const o=this.n,r=(e-this.originX)/this.dx,a=(n-this.originZ)/this.dx;if(r<1||a<1||r>=o-2||a>=o-2)return;const c=r|0,l=a|0,h=r-c,u=a-l,d=l*o+c;t[d]+=i*(1-h)*(1-u),t[d+1]+=i*h*(1-u),t[d+o]+=i*(1-h)*u,t[d+o+1]+=i*h*u}at(t,e,n){const i=this.n;if(e<0||n<0||e>=i-1||n>=i-1)return 0;const o=e|0,r=n|0,a=e-o,c=n-r,l=r*i+o;return(t[l]*(1-a)+t[l+1]*a)*(1-c)+(t[l+i]*(1-a)+t[l+i+1]*a)*c}sampleRaw(t,e,n){const i=(t-this.originX)/this.dx,o=(e-this.originZ)/this.dx;n.x=this.at(this.ux,i,o),n.z=this.at(this.uz,i,o),n.w=this.at(this.air,i,o)/Cn.depth}sample(t,e,n){const i=(t-this.originX)/this.dx,o=(e-this.originZ)/this.dx;n.x=this.at(this.ux,i,o),n.z=this.at(this.uz,i,o),n.w=Math.min(Cn.maxVoid,Math.max(0,this.at(this.air,i,o)/Cn.depth))}step(t){const e=this.n,{ux:n,uz:i,air:o,t1:r,t2:a,t3:c}=this,l=t/this.dx;for(let f=0;f<e;f++)for(let p=0;p<e;p++){const x=f*e+p,g=p-n[x]*l,m=f-i[x]*l;r[x]=this.at(n,g,m),a[x]=this.at(i,g,m),c[x]=this.at(o,g,m)}const h=Cn.spread*t/(this.dx*this.dx),u=Math.exp(-t/Cn.flowTime),d=Math.exp(-t/Cn.airTime);for(let f=1;f<e-1;f++)for(let p=1;p<e-1;p++){const x=f*e+p;n[x]=(r[x]+h*(r[x-1]+r[x+1]+r[x-e]+r[x+e]-4*r[x]))*u,i[x]=(a[x]+h*(a[x-1]+a[x+1]+a[x-e]+a[x+e]-4*a[x]))*u,o[x]=(c[x]+h*(c[x-1]+c[x+1]+c[x-e]+c[x+e]-4*c[x]))*d}}}const Vs=-1.5,Bn=1.5,hM=.05,yo=.12,kn=.05,mc=.04,gc=-.91,xc=-.65,Eo=.073,uM=.012,Gs=.63,cr=.06,dM=.04;function ts(s){if(s<=cr)return Gs-.005*(cr-s)/(cr-Vs);const t=Math.min(1,(s-cr)/(Bn-cr));return Gs-(Gs-dM)*t**2.3}const fM=.12;function Ko(s,t=gi(s)){return Math.max(.02,Mn(s)-t)}const Lc=(s,t=gi(s))=>Math.min(Ko(s,t),fM);function Mu(s,t=gi(s)){return Math.min(1,Math.max(0,ts(s)-.01)/(Lc(s,t)/2))}function Br(s,t=gi(s)){return ts(s)-Mu(s,t)*Lc(s,t)/2}function vc(s,t,e=gi(s)){const n=Ko(s,e),i=Lc(s,e),o=t*n;return{x:o>=i?ts(s):ts(s)-Mu(s,e)*i*(1-o/i)**2/2,y:e+o}}function pM(s,t){const e=Lc(s),n=t*Ko(s);return n>=e?0:Mu(s)*(1-n/e)}const di=[{z:-.95,r:Gs},{z:0,r:Gs},{z:.75,r:.5},{z:1.2,r:.27},{z:1.4,r:.1}];function gi(s){return s<kn?mc:s<.5?0:.12*((s-.5)/(Bn-.5))**2}function mM(s){return s<.5?0:.24*(s-.5)/(Bn-.5)**2}function Mn(s){return s<.4?.2:.2-.07*((s-.4)/(Bn-.4))**1.5}function rp(s,t){const e=Math.max(ts(s),1e-4),n=Math.min(1,Math.abs(t)/e);return Mn(s)+.025*(1-n*n)}const $n=-1.38,Lr=.15,Do=.57,gs=.42,yu=(s,t,e,n)=>{if(s<=e)return t;const i=Math.min(1,(s-e)/(n-e));return t*Math.max(0,1-i**2.2)**.55};function _i(s){return yu(s,.44-.02*Math.max(0,Math.min(1,(s-$n)/(0-$n))),0,Do)}function af(s){return yu(s,.3,-.05,.48)}function lr(s){return yu(s,.24,-.1,.3)}function vl(s){if(s<=Lr)return gs;const t=Math.min(1,(s-Lr)/(Do-Lr));return gs+(Mn(Do)-gs)*Math.sin(t*Math.PI/2)}const ba=1e3,gM=9.81,xM=101325,vM=2340,sc=8,_l=.2,ap={diameter:.14,pitch:.235,ear:.5,blades:3,cup:.6};function _M(){return{u:new Float32Array(sc),cav:0,vent:0,loading:0,sigma:10,tipRatio:1,ventLimit:0}}function cf(s){return Math.sqrt(Math.max(0,(s-.12)*(1.03-s)))}function MM(s){const t=2*Math.PI*.72,e=.2,n=Math.abs(s);if(n<=e)return t*s;const i=t*e-1.4*(n-e);return Math.sign(s)*Math.max(.55,i)}function yM(s,t,e,n,i,o,r,a,c=0){const l=s.diameter/2,h=s.blades,u=2*Math.PI*e,d=(1-_l)/sc;let f=0;for(let at=0;at<sc;at++)f+=cf(_l+(at+.5)*d)*d*l;const p=s.ear*Math.PI*l*l/(h*f),x=.017*s.cup,g=.003*s.cup;let m=0,_=0;for(let at=0;at<sc;at++){const xt=_l+(at+.5)*d,K=xt*l,L=d*l,N=p*cf(xt),O=u*K,X=Math.atan(s.pitch/(2*Math.PI*K))+x;let ot=t.u[at],rt=0,ut=0;for(let tt=0;tt<4;tt++){const wt=n+ot,U=Math.atan2(wt,Math.max(O,.001)),Et=wt*wt+O*O,Wt=MM(X-U),$t=.01+.008*Wt*Wt+g,Bt=.5*ba*Et*N*h*L,oe=Math.cos(U),Ut=Math.sin(U);rt=Bt*(Wt*oe-$t*Ut),ut=Bt*(Wt*Ut+$t*oe)*K;const I=h*(1-xt)/(2*xt*Math.max(.05,Ut)),T=Math.max(.05,2/Math.PI*Math.acos(Math.min(1,Math.exp(-I)))),j=Math.max(0,rt)/(4*Math.PI*K*ba*T*L),pt=(-n+Math.sqrt(Math.max(0,n*n+4*j)))/2;ot=.5*ot+.5*pt}t.u[at]=Number.isFinite(ot)?ot:0,m+=rt,_+=ut}const y=s.pitch/s.diameter,v=s.ear*Math.PI*l*l*(1.067-.229*y),P=n*n+(.7*Math.PI*e*s.diameter)**2,E=.5*ba*Math.max(P,1),S=Math.max(.02,(xM+ba*gM*Math.max(0,i)-vM)/E),C=Math.max(0,m)/(E*v),b=.5*S**.5,w=Math.max(0,Math.min(1,(C/b-1)/3));t.cav+=(w-t.cav)*Math.min(1,a*20),t.loading=C,t.sigma=S;const F=(i-l)/s.diameter,k=Math.min(2,C/.5),B=.05-.08*s.cup+Math.min(.6,r),V=Math.max(-.2,B+.25*k),$=Math.max(-.2,B+.25*k*(1-.6*t.vent)+.05);if(t.tipRatio=F,t.ventLimit=V,F<V){const at=Math.min(1,(V-F)/.15);t.vent+=at*(1-t.vent)*Math.min(1,a*10)}else if(F>$){const at=1.5+8*(F-$)+Math.max(0,1-k/.7)*4;t.vent=Math.max(0,t.vent-at*a)}const st=Math.min(1,c);t.vent<st&&(t.vent+=(st-t.vent)*Math.min(1,a*10)),t.vent=Math.max(t.vent,1-o);const H=t.cav,ft=t.vent,vt=(1-.55*H*H)*(1-.75*ft)*o,Mt=(1-.3*H*H)*(1-.8*ft)*o;return{thrust:m*vt,torque:_*Mt+.002*u*(1-o)}}const lf=1e3,hr={alpha:.11,b0:.7,emitDt:1/30,handTime:2.5,selfAge:2};class cp{constructor(){M(this,"parcels",[]);M(this,"em",new Map);M(this,"t",-1);M(this,"retired",[]);M(this,"seq",0)}clear(){this.parcels.length=0,this.em.clear(),this.retired.length=0,this.t=-1}advance(t){if(this.t<0||t<this.t-.5){this.t>=0&&this.clear(),this.t=t;return}const e=t-this.t;if(e<=0)return;this.t=t;const n=this.parcels;let i=0;for(let o=0;o<n.length;o++){const r=n[o];r.age+=e;const a=hr.alpha*r.uc*e,c=r.b+a;if(r.uc*=r.b*r.b/(c*c),r.b=c,r.x+=r.dx*r.uc*.5*e,r.z+=r.dz*r.uc*.5*e,r.age>=hr.handTime||r.uc<.02){const l=lf*r.uc*Math.PI*r.b*r.b*r.len;this.retired.push({seq:++this.seq,x:r.x,z:r.z,ix:r.dx*l,iz:r.dz*l});continue}n[i++]=r}n.length=i,this.retired.length>4e3&&this.retired.splice(0,this.retired.length-4e3)}emit(t,e,n,i,o,r,a){let c=this.em.get(t);c||(c={imp:0,acc:0,x:e.x,y:e.y,z:e.z,dx:0,dz:0,px:e.x,pz:e.z,r:a},this.em.set(t,c));const l=Math.hypot(n,i);if(o>0&&l>1e-6&&(c.imp+=o,c.dx+=n/l*o,c.dz+=i/l*o),c.acc+=r,c.x=e.x,c.y=e.y,c.z=e.z,c.r=a,c.acc<hr.emitDt)return;const h=Math.max(.1,Math.hypot(e.x-c.px,e.z-c.pz)),u=Math.hypot(c.dx,c.dz);if(c.imp>0&&u>0){const d=hr.b0*a,f=c.imp/(lf*Math.PI*d*d*h);this.parcels.push({x:(e.x+c.px)/2,y:e.y,z:(e.z+c.pz)/2,dx:c.dx/u,dz:c.dz/u,uc:f,b:d,len:h,age:0,owner:t})}c.imp=c.acc=c.dx=c.dz=0,c.px=e.x,c.pz=e.z}near(t,e,n,i,o){o.length=0;for(const r of this.parcels){if(r.owner===i&&r.age<hr.selfAge)continue;const a=n+3*r.b+r.len;Math.abs(r.x-t)<a&&Math.abs(r.z-e)<a&&o.push(r)}return o}static sample(t,e,n,i){for(const o of t){const r=e.x-o.x,a=e.z-o.z,c=r*o.dx+a*o.dz,l=Math.max(o.b,o.len/2);if(Math.abs(c)>3*l)continue;const h=(r-c*o.dx)**2+(a-c*o.dz)**2,u=o.b*o.b;if(h>9*u)continue;const d=e.y-o.y,f=e.y-(2*n-o.y),p=Math.exp(-h/u)*(Math.exp(-(d*d)/u)+Math.exp(-(f*f)/u)),x=o.uc*p*Math.exp(-(c*c)/(2*l*l))*(o.len/(Math.sqrt(2*Math.PI)*l));i.x+=o.dx*x,i.z+=o.dz*x}}}const No=new cp,Si=9.81,En=1e3,SM=1.2,ur=115,Li=52,wM=new A(0,.2,-.55),go=new A(140,140,22),qn=new A(0,.55,-.25),bM=.3,EM=-.2,TM=Li*(2*Math.PI*3)**2,AM=2*.7*Li*2*Math.PI*3,hf=Li*Si*3.2,RM=.03,Wo=new A(0,.38,-1.52),Su=new A(0,.04,-.1);Wo.clone().add(Su);const CM=new A(0,-.57,-.16),PM=new A(0,-.47,-.12),LM=new A(0,-.44,-.14),IM=.057,Ea=2.4,DM=1.9,Sr=[-.5,0,.5,1,1.5,2,3],_c=1,Xi={peakTorque:37,peakRpm:5400,idleRpm:1300,limitRpm:6600,inertia:.015},$e={planing:.35,friction:.0022,wetSmooth:.008,pressureFetch:.2,pressurePeak:3,stepRise:.035,stepVentSpeed:6,stepTrace:1,chineCd:1,yawSide:2.5,yawSideStall:.35,yawSideAft:-1,yawSideStallAft:-1,stallDrop:1,sideLift:.4,keelFinSlope:1.8,keelFinStall:.45,keelFinCd0:.008,keelFinVortex:0,sideWalls:!0,wallPlaning:1,windmill:!0,ventSpeed:0,ventSpeedGear:0,plateCn:0,finPlateCn:0,driftStiff:0,driftStiff0:1.45,driftDamp:0,driftDamp0:.9,chineVent:!0,foilVent3d:!0,yawSideNormal:!1,foilVent:!1,foilVentA0:.15,foilVentK:6,wakeSmooth:0,spray:!0,sprayDrop:.003,propAir:.5,propAirFull:.001,jetReach:1.5,plateBack:!1,obliqueFloor:3,obliqueMax:.6,keelFinZ:void 0,heaveDamp:450,airDrag:.62,finDrag:6e-4,finArea:.02,rollDamp:110,pitchDamp:150,yawDamp:30,yawDamp2:0,maxSteer:.42,steerRate:2.2,steerTorque:0,steerFullSpeed:16,yawInertia:140,kickYawArm:0,kickHandArm:0,kickTime:.25,leanUp:void 0,leanSide:.55,planeCop:!1,planeCopK:.17,planeCopPsi:.2,planeCopMix:1,hullComZ:-.7,plateLift:.5,motorHeight:.05},lp={maxSteer:.5,foilVent:!0,steerTorque:55,yawDamp2:40,plateCn:2,chineCd:.3,obliqueFloor:14,obliqueMax:.15,plateBack:!0,yawSideNormal:!0},NM={...$e},hp="boatgame.turnPhys",zM={...lp,yawSide:0,keelFinSlope:1,yawDamp:0,yawDamp2:0};let An=!1,ds="v2";function Xr(s){ds=s,An=s!=="v1";const t=$e.motorHeight;Object.assign($e,NM,s==="v2"?lp:s==="drift"?zM:{},{motorHeight:t})}let Nh=null;try{typeof localStorage<"u"&&(Nh=localStorage.getItem(hp))}catch{}var m0,g0;const UM=!!((g0=(m0=globalThis.process)==null?void 0:m0.env)!=null&&g0.V1);Xr(UM||Nh==="v1"?"v1":Nh==="v2"?"v2":"drift");const fn=7;function up(s,t){return(s-(fn-1)/2)*2*Br(t)/fn}function FM(){const s=[],t=(i,o,r)=>{for(let a=0;a<r;a++)s.push([i+(o-i)*a/r,i+(o-i)*(a+1)/r])};t(Vs,kn,6),t(kn,Bn,11);const e=[],n=[];for(const[i,o]of s){const r=(i+o)/2,a=Br(r),c=gi(r),l=new A(0,-1,mM(r)).normalize();for(let d=0;d<fn;d++){const f=d===0?-1:d===fn-1?1:0;e.push({p:new A(up(d,r),c,r),n:l,area:(o-i)*2*a/fn,len:o-i,depthMax:Mn(r)-c,side:f,col:d,aft:r<kn?kn-r:-1,wall:!1})}const h=c,u=Ko(r,h);for(const d of[1,-1])for(const f of[.25,.75]){const p=vc(r,f,h),x=pM(r,f);n.push({p:new A(d*p.x,p.y,r),n:new A(d,-x,0).normalize(),area:(o-i)*(u/2)*Math.hypot(1,x),len:o-i,depthMax:Mn(r)-p.y,side:0,col:-1,aft:-1,wall:!0})}}return[...e,...n]}const uf=Array.from({length:fn},(s,t)=>new A(up(t,kn),0,kn)),Ml=xc-gc,df=new A(0,mc,(gc+xc)/2);function kM(s){const t=(s-Xi.peakRpm)/3200;return Math.max(16,Xi.peakTorque*(1-.55*t*t))}function ff(s){const t=Math.sin(Math.min(Math.PI/2,s));return 2*Math.PI*t/(4+Math.PI*t)}function Ta(s,t,e){if(!$e.foilVent3d)return ff(s);const n=2/Math.max(.001,2*Math.PI/t-1);return Math.min(e,ff(s)/(1+1/(2*n)))}function Aa(s,t,e,n){return e+n*2*Si*Math.max(.005,t)/Math.max(1,s*s)}const Me=new A,Tn=new A,ie=new A,OM=new A,an=new A,Bi=new A,We=new bn,yl=new A(0,1,0),BM=new A(1,0,0),ks=class ks{constructor(t,e=t){M(this,"prevBeta",NaN);M(this,"gearSteerMoment",0);M(this,"comW",new A);M(this,"vel",new A);M(this,"quat",new bn);M(this,"angVel",new A);M(this,"origin",new A);M(this,"riderB",qn.clone());M(this,"riderW",new A);M(this,"riderVel",new A);M(this,"legForce",new A);M(this,"legLoad",1);M(this,"kickForce",0);M(this,"legLatAvg",0);M(this,"riderTarget",qn.clone());M(this,"riderTargetVel",new A);M(this,"comB",new A);M(this,"steerAngle",0);M(this,"throttle",0);M(this,"engineOmega",Xi.idleRpm/60*2*Math.PI);M(this,"propThrust",0);M(this,"propImmersion",1);M(this,"tilt",0);M(this,"plateImmersion",0);M(this,"finVent",0);M(this,"keelVent",0);M(this,"propDepth",0);M(this,"plateForce",0);M(this,"prop",{...ap});M(this,"propState",_M());M(this,"wetPoints",0);M(this,"keelFinImmersion",0);M(this,"keelFinForce",0);M(this,"edgeY",new Float32Array(fn));M(this,"cellT");M(this,"cellX");M(this,"chineAt",new A);M(this,"edgeK",new Float32Array(fn));M(this,"hull",FM());M(this,"pressure",new Float32Array(this.hull.length*4));M(this,"spray",new Float32Array(this.hull.length*7));M(this,"sprayDyn",new A);M(this,"wakeMom",new Float32Array((this.hull.length+5)*5));M(this,"fl",{x:0,z:0,w:0});M(this,"jetId",ks.nextId++);M(this,"jetNear",[]);M(this,"stepT",0);M(this,"hullFx",new Float32Array(this.hull.length*ks.FX_STRIDE));M(this,"impact",new Float32Array(this.hull.length));M(this,"wasWet",new Uint8Array(this.hull.length));M(this,"propPos",new A);M(this,"propAxis",new A(0,0,1));M(this,"propJet",0);M(this,"diag",{planing:0,friction:0,lateral:0,heave:0,fin:0,air:0,thrust:0});M(this,"rollDiag",{});M(this,"rollAxis",new A);M(this,"diagLat",!1);M(this,"diagDrag",!1);M(this,"diagYaw",!1);M(this,"rollDiagOn",!1);M(this,"force",new A);M(this,"torque",new A);M(this,"surface");M(this,"motorSurface");M(this,"extForce",new A);M(this,"sprayHit",0);M(this,"extTorque",new A);M(this,"cavY",0);this.motorSurface=e;const n=this.hull.filter(i=>!i.wall).length;this.cellT=new Float32Array(n/fn),this.cellX=new Float32Array(n/fn),this.surface=t,this.updateComB()}roll(t,e,n){this.rollDiagOn&&(Tn.subVectors(n,this.comW),this.rollDiag[t]=(this.rollDiag[t]??0)+(this.diagDrag||this.diagLat?(this.diagDrag?-1:1)*e.dot(this.rollAxis):an.crossVectors(Tn,e).dot(this.rollAxis)))}get rpm(){return this.engineOmega*60/(2*Math.PI)}reset(t,e,n,i){this.quat.setFromAxisAngle(yl,n),this.vel.set(0,0,0),this.angVel.set(0,0,0),this.riderB.copy(qn),this.riderTarget.copy(qn),this.riderTargetVel.set(0,0,0),this.riderVel.set(0,0,0),this.steerAngle=0,this.throttle=0,this.engineOmega=Xi.idleRpm/60*2*Math.PI,this.propState.cav=this.propState.vent=0,this.finVent=0,this.keelVent=0,this.legLatAvg=this.kickForce=0,this.propState.u.fill(0),this.extForce.set(0,0,0),this.extTorque.set(0,0,0),this.updateComB();const o=this.surface.height(t,e,i);this.origin.set(t,o-.05,e),this.comW.copy(this.comB).applyQuaternion(this.quat).add(this.origin),this.toWorld(qn,this.riderW)}updateComB(){this.comB.copy(wM).setZ($e.hullComZ)}shift(t,e){this.comW.x+=t,this.comW.z+=e,this.riderW.x+=t,this.riderW.z+=e,this.origin.x+=t,this.origin.z+=e}forward(t){return t.set(0,0,1).applyQuaternion(this.quat)}velocityAt(t,e){return this.pointVel(t,e)}invInertia(t,e){return We.copy(this.quat).invert(),e.copy(t).applyQuaternion(We),e.set(e.x/go.x,e.y/$e.yawInertia,e.z/go.z),e.applyQuaternion(this.quat)}impulseResponse(t,e){const n=Tn.subVectors(e,this.comW),i=this.invInertia(an.crossVectors(n,t),Bi);return 1/ur+an.crossVectors(i,n).dot(t)}applyImpulse(t,e){this.vel.addScaledVector(t,1/ur);const n=Tn.subVectors(e,this.comW);this.angVel.add(this.invInertia(an.crossVectors(n,t),Bi))}speed(){return this.vel.length()}toWorld(t,e){return e.copy(t).applyQuaternion(this.quat).add(this.origin)}pointVel(t,e){return Tn.subVectors(t,this.comW),e.crossVectors(this.angVel,Tn).add(this.vel)}sampleFlow(t,e){return t.flowAt?t.flowAt(e.x,e.z,this.fl):this.fl.x=this.fl.z=this.fl.w=0,this.jetNear.length&&cp.sample(this.jetNear,e,t.height(e.x,e.z,this.stepT),this.fl),1-this.fl.w}waterVel(t,e){return this.pointVel(t,e),e.x-=this.fl.x,e.z-=this.fl.z,e}traceStep(t,e,n,i){if(!$e.stepTrace)return this.cavY=this.edgeY[i]+$e.stepRise*e,this.edgeK[i];let o=t,r=e;{this.pointVel(n,an),an.applyQuaternion(We.copy(this.quat).invert());const d=Math.hypot(an.x,an.z);if(d<.5||an.z<.1*d)return 0;o=t+e*an.x/an.z,r=e*d/an.z}const a=Br(kn),c=Math.max(0,Math.min(1,(a-Math.abs(o))/.05));if(c<=0)return 0;const l=Math.max(0,Math.min(fn-1,o/(2*a/fn)+(fn-1)/2)),h=Math.min(fn-2,Math.floor(l)),u=l-h;return this.cavY=this.edgeY[h]*(1-u)+this.edgeY[h+1]*u+$e.stepRise*r,c*(this.edgeK[h]*(1-u)+this.edgeK[h+1]*u)}setMom(t,e,n,i,o,r){const a=t*5;this.wakeMom[a]=e,this.wakeMom[a+1]=n,this.wakeMom[a+2]=i,this.wakeMom[a+3]=o,this.wakeMom[a+4]=r}addForce(t,e){this.force.add(t),Tn.subVectors(e,this.comW),this.torque.add(an.crossVectors(Tn,t))}step(t,e,n){const i=$e,o=this.surface,r=this.motorSurface;this.stepT=n,No.advance(n),No.near(this.comW.x,this.comW.z,2.5,this.jetId,this.jetNear);const a=Math.max(1,this.vel.length()),c=i.steerTorque>0?1:Math.min(1,(i.steerFullSpeed/a)**2);let h=e.steer*i.maxSteer*c-this.steerAngle;if(i.steerTorque>0){const mt=this.gearSteerMoment,Q=mt*Math.sign(this.steerAngle)<0?Math.abs(mt)-i.steerTorque:0;Q>0&&(Math.sign(h)===Math.sign(this.steerAngle)&&(h=0),this.steerAngle-=Math.sign(this.steerAngle)*i.steerRate*t*Math.min(1,Q/i.steerTorque))}this.steerAngle+=Math.sign(h)*Math.min(Math.abs(h),i.steerRate*t),this.throttle+=(e.throttle-this.throttle)*Math.min(1,t*10),this.updateComB(),this.origin.copy(this.comB).applyQuaternion(this.quat).negate().add(this.comW);const u=Bi.set(qn.x-e.leanX*i.leanSide,qn.y+Math.abs(e.leanX)*(i.leanUp??EM),qn.z+e.leanZ*bM),d=1-Math.exp(-t/RM);this.riderTargetVel.copy(u).sub(this.riderTarget).multiplyScalar(d/t),this.riderTarget.lerp(u,d);const f=this.toWorld(this.riderTarget,new A),p=this.pointVel(f,new A).add(Me.copy(this.riderTargetVel).applyQuaternion(this.quat));this.riderW.distanceToSquared(f)>.8*.8&&(this.riderW.copy(f),this.riderVel.copy(p));const x=this.legForce;x.subVectors(f,this.riderW).multiplyScalar(TM),x.addScaledVector(p.sub(this.riderVel),AM),x.y+=Li*Si;const g=Me.set(0,1,0).applyQuaternion(this.quat),m=x.dot(g);m<-408.096&&x.addScaledVector(g,-408.096-m);const _=x.length();_>hf&&x.multiplyScalar(hf/_),this.legLoad=Math.max(0,x.dot(g))/(Li*Si),this.diagDrag?this.rollAxis.copy(this.vel).normalize():this.diagLat?this.rollAxis.set(this.vel.z,0,-this.vel.x).normalize():this.rollAxis.set(0,this.diagYaw?1:0,this.diagYaw?0:1).applyQuaternion(this.quat);for(const mt in this.rollDiag)this.rollDiag[mt]=0;this.force.set(0,-ur*Si,0),this.torque.set(0,0,0),this.force.add(this.extForce),this.torque.add(this.extTorque),this.addForce(x.clone().negate(),this.riderW);{const mt=Me.set(1,0,0).applyQuaternion(this.quat),Q=-x.dot(mt);this.legLatAvg+=(Q-this.legLatAvg)*Math.min(1,t/i.kickTime);const yt=Q-this.legLatAvg;this.kickForce=yt,this.pointVel(this.riderW,Tn);const Nt=this.riderVel.dot(mt)-Tn.dot(mt),z=-yt*Nt>0?i.kickYawArm:-i.kickHandArm,ht=an.set(0,1,0).applyQuaternion(this.quat);this.torque.addScaledVector(ht,-yt*z),this.rollDiagOn&&this.diagYaw&&(this.rollDiag.蹴り=-yt*z)}this.roll("選手",x.clone().negate(),this.riderW),this.roll("船体の重さ",new A(0,-ur*Si,0),this.comW);const y=OM.set(-1,0,0).applyQuaternion(this.quat).clone(),v=this.vel.length(),P=v>.1?this.vel.clone().multiplyScalar(1/v):new A,E=this.diag;E.planing=E.friction=E.lateral=E.heave=E.fin=E.air=0;const S=Math.max(0,Math.min(1,(v-i.stepVentSpeed+2)/4)),C=this.edgeY,b=this.edgeK;for(let mt=0;mt<uf.length;mt++){const Q=this.toWorld(uf[mt],an),yt=o.height(Q.x,Q.z,n)-Q.y;C[mt]=Q.y,b[mt]=S*Math.max(0,Math.min(1,yt/.01))}const w=Bi.set(0,1,0).applyQuaternion(this.quat).clone();let D=0;const F=new A,k=new A,B=new A,V=new A,$=y.clone().negate();this.cellT.fill(0),this.wakeMom.fill(0);const st=this.hull.length;let H=0,ft=0;for(let mt=0;mt<this.hull.length;mt++){const Q=this.hull[mt];this.toWorld(Q.p,F);const yt=mt*4;this.pressure[yt]=F.x,this.pressure[yt+1]=F.z,this.pressure[yt+2]=0,this.pressure[yt+3]=i.wakeSmooth,this.spray[mt*7+6]=0;let Nt=o.height(F.x,F.z,n);const Xt=Q.aft>0?this.traceStep(Q.p.x,Q.aft,F,Q.col):0;if(Xt>0){const xe=Math.min(Nt,this.cavY);Nt+=(xe-Nt)*Xt}const z=Nt-F.y,ht=mt*ks.FX_STRIDE,Z=this.hullFx;if(Z[ht]=F.x,Z[ht+1]=F.y,Z[ht+2]=F.z,Z[ht+9]=z,z<=0){Z[ht+10]=Z[ht+11]=0,this.wasWet[mt]=0;continue}D++;const ct=mt/fn|0;!Q.wall&&z>this.cellT[ct]&&(this.cellT[ct]=Math.min(z,Q.depthMax),this.cellX[ct]=Q.p.x);const St=Math.min(1,z/i.wetSmooth),G=Math.min(z,Q.depthMax),bt=this.sampleFlow(o,F);Q.wall?ie.copy(Q.n).applyQuaternion(this.quat).multiplyScalar(-En*bt*Si*Q.area*G):ie.set(0,En*bt*Si*Q.area*G,0),this.roll("浮力",ie,F),this.waterVel(F,B),B.y-=o.verticalVelocity(F.x,F.z,n);const lt=B.length();k.copy(Q.n).applyQuaternion(this.quat);const Lt=B.dot(k),Vt=this.sprayDyn.set(0,0,0);if(Z[ht+3]=B.x,Z[ht+4]=B.y,Z[ht+5]=B.z,Z[ht+6]=k.x,Z[ht+7]=k.y,Z[ht+8]=k.z,Z[ht+10]=Lt,Z[ht+11]=St,!this.wasWet[mt]&&Lt>0&&(this.impact[mt]=Math.max(this.impact[mt],Lt)),this.wasWet[mt]=1,Lt>0){Me.copy(B).addScaledVector(k,-Lt);const xe=Me.length();let Rt=10,ee=0,me=0;if(xe>.5&&!Q.wall){Me.multiplyScalar(1/xe);const _e=Me.y+i.stepRise*Xt;_e>.001&&(Rt=z/_e);const gn=Me.dot($);ee=Math.abs(gn),me=Br(Q.p.z)-Math.sign(gn)*Q.p.x}const Ce=Q.area/Q.len;let Fe=Q.wall?i.wallPlaning:0;if(!Q.wall)for(let _e=0;_e<4;_e++){let gn=Rt;ee>.001&&(gn=Math.min(gn,Math.max(0,me+((_e+.5)/4-.5)*Ce)/ee)),Fe+=Math.min(i.pressurePeak,Math.sqrt(i.pressureFetch/Math.max(.005,gn)))/4}if(V.copy(k).multiplyScalar(-i.planing*Fe*En*bt*Q.area*lt*Lt*St),E.planing+=V.dot(P),this.roll("滑走揚力",V,F),!Q.wall){const _e=V.dot(w);H+=_e,ft+=_e*Q.p.x}if(ie.add(V),Vt.add(V),ee>.001&&!Q.wall){const _e=Math.asin(Math.min(1,ee)),gn=Q.aft>0,xi=gn&&i.yawSideStallAft>0?i.yawSideStallAft:i.yawSideStall,zc=gn&&i.yawSideAft>=0?i.yawSideAft:i.yawSide,R=i.stallDrop?_e<=xi?_e:Math.max(xi*.5,xi-.8*(_e-xi)):xi*Math.tanh(_e/xi),q=V.length(),et=i.yawSideNormal?Tn.copy($).addScaledVector(k,-$.dot(k)).normalize():Tn.copy($).addScaledVector(Me,-$.dot(Me)).normalize(),nt=Math.sign(Me.dot($)),Y=i.chineVent?Math.min(1,(1-bt)/i.propAirFull):0;V.copy(et).multiplyScalar(-nt*zc*R*q*(1-Y)),E.lateral+=V.dot(P),this.roll("横滑りの横力",V,F),ie.add(V),Vt.add(V)}}const ae=-i.heaveDamp*Q.area*B.y*St;ie.y+=ae,E.heave+=ae*P.y,this.roll("上下の減衰",new A(0,ae,0),F),Me.copy(B).addScaledVector(k,-Lt);const Te=Me.length();V.copy(Me).multiplyScalar(-.5*En*bt*i.friction*Q.area*Te*St),E.friction+=V.dot(P),this.roll("摩擦",V,F),ie.add(V);let Ie=0,Ue=0;if(Q.side!==0&&!i.sideWalls){const xe=Q.side>0?$:y,Rt=B.dot(xe);if(Rt>0){const ee=Math.min(z,Q.depthMax);V.copy(xe).multiplyScalar(-.5*En*i.chineCd*Q.len*ee*Rt*Rt);const me=this.chineAt.copy(F).addScaledVector(w,ee*.5);E.lateral+=V.dot(P),this.roll("舷側",V,me),this.addForce(V,me),Ie+=V.x,Ue+=V.z}}this.pressure[yt+2]=Math.max(0,ie.y);let Zt=0,Be=0;if(i.spray&&lt>1){Me.copy(B).addScaledVector(k,-Lt);const xe=Me.length();if(xe>.001){Me.multiplyScalar(lt/xe).add(B);const Rt=Me.x*Me.x+Me.z*Me.z,ee=Rt>.25?(-Vt.x*Me.x-Vt.z*Me.z)/Rt:0;if(ee>0){const me=mt*7;this.spray[me]=F.x,this.spray[me+1]=F.y,this.spray[me+2]=F.z,this.spray[me+3]=Me.x+this.fl.x,this.spray[me+4]=Me.y+o.verticalVelocity(F.x,F.z,n),this.spray[me+5]=Me.z+this.fl.z,this.spray[me+6]=ee,Zt=ee*(Me.x+this.fl.x),Be=ee*(Me.z+this.fl.z)}}}this.setMom(mt,F.x,F.z,-ie.x-Ie-Zt,-ie.z-Ue-Be,0),this.addForce(ie,F)}if(this.wetPoints=D,i.planeCop&&H>1){const mt=Bi.set(0,0,1).applyQuaternion(this.quat),Q=this.vel.dot(mt),yt=this.vel.dot($),Nt=Math.atan2(Math.abs(yt),Math.max(.5,Math.abs(Q))),Xt=Math.sign(yt)*i.planeCopK*Math.tanh(Nt/i.planeCopPsi)*2*Gs,z=ft/H;ie.copy(mt).multiplyScalar(H*i.planeCopMix*(Xt-z)),this.torque.add(ie),this.rollDiagOn&&!this.diagDrag&&!this.diagLat&&(this.rollDiag.滑走の横の中心=ie.dot(this.rollAxis))}{const mt=Bi.set(0,0,1).applyQuaternion(this.quat).clone(),Q=Math.max(0,this.vel.dot(mt));let yt=0,Nt=0,Xt=0;const z=this.cellT.length;for(let ht=z-1;ht>=0;ht--){const Z=this.cellT[ht],ct=Math.PI/2*En*Z*Z,St=ct-yt;if(St<=0||Q<1)continue;yt=ct;const G=this.hull[ht*fn];this.toWorld(an.set(this.cellX[ht],G.p.y+Z*.5,G.p.z),F);const bt=this.sampleFlow(o,F);this.waterVel(F,B);const lt=B.dot($);V.copy($).multiplyScalar(-i.sideLift*Q*St*lt*bt),E.lateral+=V.dot(P),this.roll("サイド",V,F),this.addForce(V,F),Nt-=V.x,Xt-=V.z}this.setMom(st+4,this.comW.x,this.comW.z,Nt,Xt,0)}{const mt=i.keelFinZ??df.z,Q=this.toWorld(Bi.copy(df).setZ(mt),an).clone();let yt=o.height(Q.x,Q.z,n);const Nt=this.traceStep(0,kn-mt,Q,(fn-1)/2);if(Nt>0){const Z=Math.min(yt,this.cavY);yt+=(Z-yt)*Nt}const Xt=w.y,z=Q.y-Eo*Xt,ht=Xt>.2?Math.max(0,Math.min(Eo,(yt-z)/Xt)):0;if(this.keelFinImmersion=ht/Eo,this.keelFinForce=0,ht>.002){const Z=Q.addScaledVector(w,-(Eo-ht/2)),ct=this.sampleFlow(o,Z);this.waterVel(Z,B);const St=Bi.set(0,0,1).applyQuaternion(this.quat).clone(),G=B.dot(St),bt=B.dot($);if(G>.5){const lt=Math.atan2(bt,G),Lt=Math.abs(lt),Vt=i.keelFinStall,ae=i.keelFinSlope*Vt,Te=Math.sin(Math.min(Lt,1.2)),Ie=Math.cos(Math.min(Lt,1.2));let Ue=i.keelFinVortex>0?Math.sign(lt)*(i.keelFinSlope*Te*Ie*Ie+i.keelFinVortex*Te*Te*Ie):Math.sign(lt)*(i.stallDrop?Lt<=Vt?i.keelFinSlope*Lt:Math.max(ae*.5,ae-1.2*(Lt-Vt)):ae*Math.tanh(i.keelFinSlope*Lt/ae));i.ventSpeedGear>0&&(Ue*=Math.min(1,i.ventSpeedGear**2/Math.max(1e-6,G*G+bt*bt)));const Zt=ht*Ml,Be=2*ht*ht/Zt;let xe=i.keelFinCd0+Ue*Ue/(Math.PI*.8*Be);if(i.finPlateCn>0){const Fe=Math.sin(Lt),_e=i.finPlateCn*Fe;_e*Math.cos(Lt)>Math.abs(Ue)&&(Ue=Math.sign(lt)*_e*Math.cos(Lt)),xe=Math.max(xe,i.keelFinCd0+_e*Fe)}if(i.foilVent){const Fe=Aa(Math.hypot(G,bt),ht*.5*Xt,i.foilVentA0,i.foilVentK),_e=Math.max(0,Math.min(1,(Lt-Fe)/.12),Math.min(1,(1-ct)/i.propAirFull));this.keelVent+=(_e-this.keelVent)*Math.min(1,t*(_e>this.keelVent?12:1.5));const gn=Ta(Lt,i.keelFinSlope,Math.abs(Ue)/Math.max(.1,Math.cos(Lt)));Ue=Ue*(1-this.keelVent)+Math.sign(lt)*gn*Math.cos(Lt)*this.keelVent,xe=xe*(1-this.keelVent)+(i.keelFinCd0+gn*Math.sin(Lt))*this.keelVent}const Rt=G*G+bt*bt,ee=.5*En*ct*Zt*Rt,me=Me.copy(St).multiplyScalar(G).addScaledVector($,bt).normalize(),Ce=Tn.copy($).multiplyScalar(G).addScaledVector(St,-bt).normalize();V.copy(Ce).multiplyScalar(-ee*Ue).addScaledVector(me,-ee*xe),E.lateral+=V.dot(P),this.roll("中央フィン",V,Z),this.setMom(st+3,Z.x,Z.z,-V.x,-V.z,0),this.addForce(V,Z),this.keelFinForce=V.dot($)}else if(i.plateBack&&Math.abs(bt)>.3){const lt=Math.atan2(Math.abs(bt),G),Lt=Math.sin(lt),Vt=.5*En*ct*ht*Ml*(G*G+bt*bt);let ae=Math.max(1,i.finPlateCn)*Lt;if(i.foilVent){const Te=Aa(Math.hypot(G,bt),ht*.5*Xt,i.foilVentA0,i.foilVentK),Ie=Math.max(0,Math.min(1,(lt-Te)/.12),Math.min(1,(1-ct)/i.propAirFull));this.keelVent+=(Ie-this.keelVent)*Math.min(1,t*(Ie>this.keelVent?12:1.5)),ae=ae*(1-this.keelVent)+Ta(lt,i.keelFinSlope,ae)*this.keelVent}V.copy($).multiplyScalar(-Math.sign(bt)*Vt*ae).addScaledVector(St,-.5*En*ct*ht*Ml*i.keelFinCd0*G*Math.abs(G)),E.lateral+=V.dot(P),this.roll("中央フィン",V,Z),this.setMom(st+3,Z.x,Z.z,-V.x,-V.z,0),this.addForce(V,Z),this.keelFinForce=V.dot($)}}}const vt=new bn().setFromAxisAngle(BM,(this.tilt-_c)*Math.PI/180).premultiply(this.quat);We.setFromAxisAngle(yl,this.steerAngle).premultiply(vt);const Mt=new A(0,0,1).applyQuaternion(We),at=new A(1,0,0).applyQuaternion(We),xt=new A(0,1,0).applyQuaternion(We),K=Me.copy(Wo).setY(Wo.y+i.motorHeight),L=this.toWorld(K,new A).add(Su.clone().applyQuaternion(vt)),N=new A().copy(PM).applyQuaternion(We).add(L),O=r.height(N.x,N.z,n)-N.y;if(this.gearSteerMoment=0,O>0){const mt=this.sampleFlow(o,N);this.waterVel(N,B);const Q=B.dot(Mt),yt=B.dot(at);if(Q>.5){const Nt=Math.atan2(yt,Q),Xt=Math.abs(Nt);let z=Math.sign(Nt)*(Xt<=.3?Ea*Xt:Math.max(.35,Ea*.3-1.2*(Xt-.3)));const ht=Math.max(0,Math.min(1,(.32-O)/.2)),Z=Aa(Math.hypot(Q,yt),O,i.foilVentA0,i.foilVentK),ct=Math.min(1,(1-mt)/i.propAirFull),St=i.foilVent?Math.max(Math.max(0,Math.min(1,(Xt-Z)/.12)),this.propState.vent*.3,ct):Math.max(ht*Math.max(0,Math.min(1,(Xt-.3)/.25)),this.propState.vent*.3);this.finVent+=(St-this.finVent)*Math.min(1,t*(St>this.finVent?12:1.5)),i.plateCn>0&&(z=Math.sign(Nt)*Math.max(Math.abs(z),i.plateCn*Math.sin(Xt))),i.foilVent?z=z*(1-this.finVent)+Math.sign(Nt)*Ta(Xt,Ea,Math.abs(z))*this.finVent:z*=1-.6*this.finVent,i.ventSpeed>0&&(z*=Math.min(1,i.ventSpeed**2/Math.max(1e-6,Q*Q+yt*yt)));const G=.5*En*mt*i.finArea*(Q*Q+yt*yt)*Math.min(1,O/.2);ie.copy(at).multiplyScalar(-G*z),ie.addScaledVector(Mt,-.5*En*mt*i.finDrag*Q*Q),E.fin+=ie.dot(P),this.addForce(ie,N),this.roll("ギアケース",ie,N),this.setMom(st+1,N.x,N.z,-ie.x,-ie.z,0),this.gearSteerMoment=new A().subVectors(N,L).cross(ie).dot(xt)}else if(i.plateBack&&Math.abs(yt)>.3){const Nt=Math.atan2(Math.abs(yt),Q),Xt=Math.sin(Nt);let z=Math.max(1,i.plateCn)*Xt;if(i.foilVent){const Z=Aa(Math.hypot(Q,yt),O,i.foilVentA0,i.foilVentK),ct=Math.max(0,Math.min(1,(Nt-Z)/.12),Math.min(1,(1-mt)/i.propAirFull));this.finVent+=(ct-this.finVent)*Math.min(1,t*(ct>this.finVent?12:1.5)),z=z*(1-this.finVent)+Ta(Nt,Ea,z)*this.finVent}i.ventSpeed>0&&(z*=Math.min(1,i.ventSpeed**2/Math.max(1e-6,Q*Q+yt*yt)));const ht=.5*En*mt*i.finArea*(Q*Q+yt*yt)*Math.min(1,O/.2);ie.copy(at).multiplyScalar(-Math.sign(yt)*ht*z),ie.addScaledVector(Mt,-.5*En*mt*i.finDrag*Q*Math.abs(Q)),E.fin+=ie.dot(P),this.addForce(ie,N),this.roll("ギアケース",ie,N),this.setMom(st+1,N.x,N.z,-ie.x,-ie.z,0),this.gearSteerMoment=new A().subVectors(N,L).cross(ie).dot(xt)}}const X=new A().copy(LM).applyQuaternion(We).add(L),ot=r.height(X.x,X.z,n)-X.y;if(this.plateImmersion=Math.max(0,Math.min(1,(ot+.02)/.05)),this.plateImmersion>0){const mt=this.sampleFlow(o,X);this.waterVel(X,B);const Q=B.dot(Mt);if(Q>.5){const yt=B.dot(xt),Nt=Math.atan2(yt,Q),Xt=i.plateLift*DM*Math.max(-.35,Math.min(.35,Nt)),z=.5*En*mt*IM*(Q*Q+yt*yt)*this.plateImmersion;ie.copy(xt).multiplyScalar(-z*Xt),ie.addScaledVector(Mt,-z*.008),this.plateForce=ie.dot(yl),E.fin+=ie.dot(P),this.addForce(ie,X),this.roll("プレート",ie,X),this.setMom(st+2,X.x,X.z,-ie.x,-ie.z,0)}}else this.plateForce=0;const rt=new A().copy(CM).applyQuaternion(We).add(L),ut=r.height(rt.x,rt.z,n)-rt.y;this.propDepth=ut;const tt=this.prop.diameter/2;this.propImmersion=Math.max(0,Math.min(1,(ut+tt)/(2*tt)));const wt=this.engineOmega/(2*Math.PI),U=this.sampleFlow(o,rt);this.waterVel(rt,B);const Et=Math.max(0,B.dot(Mt))*.97,Wt=Math.max(i.obliqueFloor,Math.abs(Et)),$t=(.8*Math.abs(B.dot(xt))+1*Math.abs(B.dot(at)))/Wt,Bt=yM(this.prop,this.propState,wt,Et,ut,this.propImmersion,Math.min(i.obliqueMax,$t),t,(1-U)/i.propAirFull);this.propPos.copy(rt),this.propAxis.copy(Mt);let oe=0;for(const mt of this.propState.u)oe+=mt;this.propJet=oe/this.propState.u.length;const Ut=Bt.thrust*U,I=(i.windmill?Bt.torque:Math.max(0,Bt.torque))*U,T=this.rpm,j=T<Xi.idleRpm?Math.min(.25,(Xi.idleRpm-T)/200*.25):0,pt=T>Xi.limitRpm?0:Math.max(this.throttle,j),gt=1+8e-4*T,dt=kM(T)*pt-gt;this.engineOmega=Math.max(0,this.engineOmega+(dt-I)/Xi.inertia*t),this.propThrust=Ut,E.thrust=Mt.dot(P)*Ut,this.addForce(ie.copy(Mt).multiplyScalar(Ut),rt),this.roll("推力",ie,rt);const Ft=i.propAir*Math.max(0,Ut)*Math.max(0,this.propJet)/2/(En*Si*Cn.depth),Tt=this.propImmersion>0;Tt&&No.emit(this.jetId,rt,-Mt.x,-Mt.z,Math.max(0,Ut)*t,t,tt),this.setMom(st,rt.x-Mt.x*i.jetReach,rt.z-Mt.z*i.jetReach,Tt?0:-ie.x,Tt?0:-ie.z,Ft+this.propState.vent*Math.PI*tt*tt*Math.max(1,Et)*this.propImmersion),this.torque.addScaledVector(Mt,-I),ie.copy(this.vel).multiplyScalar(-.5*SM*i.airDrag*v),E.air=ie.dot(P),this.force.add(ie),this.riderVel.addScaledVector(x,t/Li),this.riderVel.y-=Si*t,this.riderW.addScaledVector(this.riderVel,t),this.vel.addScaledVector(this.force,t/ur),this.comW.addScaledVector(this.vel,t),We.copy(this.quat).invert();const At=an.copy(this.angVel).applyQuaternion(We),Jt=Bi.copy(this.torque).applyQuaternion(We),_t=i.yawInertia,It=Me.set(go.x*At.x,_t*At.y,go.z*At.z);if(Jt.sub(Tn.crossVectors(At,It)),Jt.x-=i.pitchDamp*At.x,Jt.y-=i.yawDamp*At.y+i.yawDamp2*Math.abs(At.y)*At.y,i.driftStiff>0){const mt=Tn.copy(this.vel).setY(0).applyQuaternion(We),Q=Math.hypot(mt.x,mt.z),yt=Math.atan2(mt.x,mt.z),Nt=Math.max(0,Math.abs(yt)-i.driftStiff0),Xt=Math.min(1,Math.max(0,(Q-2)/2));if(Jt.y+=Math.sign(yt)*i.driftStiff*Nt*Xt,i.driftDamp>0){let z=isNaN(this.prevBeta)?0:yt-this.prevBeta;z-=2*Math.PI*Math.round(z/(2*Math.PI));const ht=(Math.abs(yt)-i.driftDamp0)/Math.max(.05,i.driftStiff0+.3-i.driftDamp0),Z=ht<=0?0:ht>=1?1:ht*ht*(3-2*ht);Jt.y+=i.driftDamp*Z*(z/t)*Xt}this.prevBeta=yt}Jt.z-=i.rollDamp*At.z,At.x+=Jt.x/go.x*t,At.y+=Jt.y/_t*t,At.z+=Jt.z/go.z*t,this.angVel.copy(At).applyQuaternion(this.quat);const Gt=this.angVel;We.set(Gt.x*t*.5,Gt.y*t*.5,Gt.z*t*.5,0).multiply(this.quat),this.quat.set(this.quat.x+We.x,this.quat.y+We.y,this.quat.z+We.z,this.quat.w+We.w).normalize(),this.origin.copy(this.comB).applyQuaternion(this.quat).negate().add(this.comW),We.copy(this.quat).invert(),this.riderB.copy(this.riderW).sub(this.origin).applyQuaternion(We)}attitude(){const t=new A(0,0,1).applyQuaternion(this.quat),e=new A(-1,0,0).applyQuaternion(this.quat);return{trim:Math.asin(Math.max(-1,Math.min(1,t.y)))*180/Math.PI,heel:Math.asin(Math.max(-1,Math.min(1,-e.y)))*180/Math.PI}}};M(ks,"nextId",1),M(ks,"FX_STRIDE",12);let xs=ks;const dr=new A;function Jn(s,t,e,n,i,o){const r=2*Math.PI*i/4,a=Math.max(o-2*i,0),c=Math.PI/4;dr.copy(t),dr[n]=0,dr.normalize();const l=.5*r/(r+a),h=1-dr.angleTo(s)/c;return Math.sign(dr[e])===1?h*l:a/(r+a)+l+l*(1-h)}class VM extends re{constructor(t=1,e=1,n=1,i=2,o=.1){if(i=i*2+1,o=Math.min(t/2,e/2,n/2,o),super(1,1,1,i,i,i),i===1)return;const r=this.toNonIndexed();this.index=null,this.attributes.position=r.attributes.position,this.attributes.normal=r.attributes.normal,this.attributes.uv=r.attributes.uv;const a=new A,c=new A,l=new A(t,e,n).divideScalar(2).subScalar(o),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,p=new A,x=.5/i;for(let g=0,m=0;g<h.length;g+=3,m+=2)switch(a.fromArray(h,g),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[g+0]=l.x*Math.sign(a.x)+c.x*o,h[g+1]=l.y*Math.sign(a.y)+c.y*o,h[g+2]=l.z*Math.sign(a.z)+c.z*o,u[g+0]=c.x,u[g+1]=c.y,u[g+2]=c.z,Math.floor(g/f)){case 0:p.set(1,0,0),d[m+0]=Jn(p,c,"z","y",o,n),d[m+1]=1-Jn(p,c,"y","z",o,e);break;case 1:p.set(-1,0,0),d[m+0]=1-Jn(p,c,"z","y",o,n),d[m+1]=1-Jn(p,c,"y","z",o,e);break;case 2:p.set(0,1,0),d[m+0]=1-Jn(p,c,"x","z",o,t),d[m+1]=Jn(p,c,"z","x",o,n);break;case 3:p.set(0,-1,0),d[m+0]=1-Jn(p,c,"x","z",o,t),d[m+1]=1-Jn(p,c,"z","x",o,n);break;case 4:p.set(0,0,1),d[m+0]=1-Jn(p,c,"x","y",o,t),d[m+1]=1-Jn(p,c,"y","x",o,e);break;case 5:p.set(0,0,-1),d[m+0]=Jn(p,c,"x","y",o,t),d[m+1]=1-Jn(p,c,"y","x",o,e);break}}}const Ee=(s,t,e)=>new A(s,t,e);function Vi(s){const t=s[0].length,e=[],n=[];for(const o of s)for(const r of o)e.push(r.x,r.y,r.z);for(let o=0;o<s.length-1;o++)for(let r=0;r<t-1;r++){const a=o*t+r,c=a+t;n.push(a,c,a+1,a+1,c,c+1)}const i=new ze;return i.setAttribute("position",new fe(e,3)),i.setIndex(n),i.computeVertexNormals(),i}function Sl(s){const t=new A;for(const o of s)t.add(o);t.multiplyScalar(1/s.length);const e=[t.x,t.y,t.z];for(const o of s)e.push(o.x,o.y,o.z);const n=[];for(let o=0;o<s.length;o++)n.push(0,1+o,1+(o+1)%s.length);const i=new ze;return i.setAttribute("position",new fe(e,3)),i.setIndex(n),i.computeVertexNormals(),i}function xo(s,t,e){const n=[];for(let i=0;i<=e;i++){const o=i/e;n.push(s+(t-s)*(t>=Bn-1e-6?1-(1-o)**1.6:o))}return n}const HM=.13,pf=6;function Xo(s,t,e,n,i){const o=[];for(let r=0;r<=pf;r++){const a=vc(s,t+(e-t)*r/pf,i);o.push(Ee(n*a.x,a.y,s))}return o}const wu=(s,t)=>Math.min(1,HM/Ko(s,t));function wr(s,t=gi(s)){const e=Br(s,t),n=wu(s,t);return[...Xo(s,n,0,1,t),Ee(e*.5,t,s),Ee(0,t,s),Ee(-e*.5,t,s),...Xo(s,0,n,-1,t)]}function GM(s,t){const e=gi(s),n=wu(s,e);return t>0?Xo(s,1,n,1,e):Xo(s,n,1,-1,e)}function mf(s){const t=gi(s),e=wu(s,t);return[...Xo(s,1,e,1,t).slice(0,-1),...wr(s),...Xo(s,e,1,-1,t).slice(1)]}function WM(){const s=document.createElement("canvas");s.width=s.height=256;const t=s.getContext("2d");t.fillStyle="#f4f4f2",t.fillRect(0,0,256,256),t.fillStyle="#1f5fbf",t.beginPath(),t.moveTo(40,30),t.lineTo(216,30),t.quadraticCurveTo(200,190,128,236),t.quadraticCurveTo(56,190,40,30),t.fill(),t.fillStyle="#d8262b",t.beginPath(),t.moveTo(84,60),t.lineTo(172,60),t.quadraticCurveTo(160,150,128,180),t.quadraticCurveTo(96,150,84,60),t.fill();const e=new es(s);return e.colorSpace=Xe,e.anisotropy=4,e}function gf(s){const t=ts(s),e=[];for(let n=0;n<=16;n++){const i=t-2*t*n/16;e.push(Ee(i,rp(s,i),s))}return e}function xf(s){const t=s.getAttribute("position"),e=[];for(let n=0;n<t.count;n++)e.push(.5-t.getX(n)/(2*Gs),(t.getZ(n)-Lr)/(Bn-Lr));return s.setAttribute("uv",new fe(e,2)),s}const XM=-.2;function As(s,t,e,n){const i=new A().subVectors(t,s),o=new zt(new mu(e,Math.max(.001,i.length()),4,10),n);return o.position.copy(s).add(t).multiplyScalar(.5),o.quaternion.setFromUnitVectors(new A(0,1,0),i.normalize()),o.castShadow=!0,o}function vf(s,t,e){const n=document.createElement("canvas");n.width=n.height=128;const i=n.getContext("2d");i.fillStyle=t,i.fillRect(0,0,128,128),i.fillStyle=e,i.font="bold 100px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(s,64,70);const o=new es(n);return o.colorSpace=Xe,o}const Ic=["#f4f4f4","#222222","#d8262b","#1f5fbf","#f2c230","#1d9a4a"];function bu(s=3){const t=new Ge,e=Ic[s-1],n=new Qt({color:15856110,roughness:.35,side:ke}),i=new Qt({color:13208394,roughness:.45,side:ke}),o=new Qt({map:WM(),roughness:.4,side:ke}),r=new Qt({color:14165547,roughness:.4,side:ke}),a=new Qt({color:10134445,roughness:.8,side:ke}),c=new Qt({color:1781596,roughness:.4,side:ke}),l=new Qt({color:2302755,roughness:.5,metalness:.2}),h=new Qt({color:13164006,transparent:!0,opacity:.3,roughness:.05,metalness:.1,side:ke,depthWrite:!1}),u=new Qt({map:vf(String(s),e,s===1||s===5?"#111":"#fff"),roughness:.4}),d=new Qt({color:8948880,roughness:.3,metalness:.8}),f=(N,O)=>{const X=new zt(N,O);return X.castShadow=!0,X.receiveShadow=!0,t.add(X),X},p=xo(Vs,kn,16),x=xo(kn,Bn,28),g=N=>gi(Math.min(N,kn-1e-6));f(Vi(p.map(N=>wr(N,g(N)))),i),f(Vi(x.map(N=>wr(N))),i),f(Vi([wr(kn,mc),wr(kn,0)]),i);for(const N of[1,-1])f(Vi([...p,...x.slice(1)].map(O=>GM(O,N))),n);f(Sl([...mf(Vs)]),n),f(Sl([...mf(Bn),...gf(Bn).reverse()]),n);const m=new zt(new re(uM,Eo,xc-gc),new Qt({color:3815994,roughness:.5}));m.position.set(0,mc-Eo/2,(gc+xc)/2),t.add(m);const _=xo($n,Do,48);for(const N of[1,-1]){const O=(Et,Wt)=>f(Vi(_.map($t=>N>0?Et($t):Et($t).reverse())),Wt),X=(Et,Wt,$t)=>{const Bt=[],oe=Mn(Et),Ut=vl(Et);for(let I=0;I<=4;I++){const T=$t-($t-Wt)*I/4,j=_i(Et)+(af(Et)-_i(Et))*T**1.6;Bt.push(Ee(N*j,oe+(Ut-oe)*Math.sqrt(T),Et))}return N>0?Bt:Bt.reverse()},ot=Et=>Et>=XM?.18:1;O(Et=>X(Et,0,ot(Et)),n),O(Et=>X(Et,ot(Et),.82),h),O(Et=>X(Et,.82,1),n),O(Et=>[Ee(N*lr(Et),yo,Et),Ee(N*lr(Et),vl(Et),Et),Ee(N*af(Et),vl(Et),Et)],n),O(Et=>[Ee(N*lr(Et),Mn(Et)+.002,Et),Ee(N*_i(Et),Mn(Et)+.002,Et)].reverse(),n),f(xf(Vi(xo(Vs,Do,40).map(Et=>N>0?[Ee(ts(Et),Mn(Et),Et),Ee(_i(Et),Mn(Et),Et)]:[Ee(-_i(Et),Mn(Et),Et),Ee(-ts(Et),Mn(Et),Et)]))),o);const rt=-1.2,ut=-.92,tt=Mn(rt)+.03,wt=gs-.03,U=new zt(new je(ut-rt,wt-tt),u);U.position.set(N*(_i((rt+ut)/2)+.004),(tt+wt)/2,(rt+ut)/2),U.rotation.y=N*Math.PI/2,t.add(U)}f(xf(Vi(xo(Do-.02,Bn,16).map(gf))),o),f(Sl([Ee(_i($n),Mn($n),$n),Ee(_i($n),gs,$n),Ee(-_i($n),gs,$n),Ee(-_i($n),Mn($n),$n)]),n),f(Vi(_.map(N=>[Ee(lr(N),yo,N),Ee(-lr(N),yo,N)])),a);const y=xo(Vs,1.3,30);for(const[N,O,X]of[[c,.004,.05],[r,.058,.07]])for(const ot of[1,-1])f(Vi(y.map(rt=>{const ut=Mn(rt),tt=gi(rt),wt=Ko(rt,tt),U=vc(rt,1-O/wt,tt).x*1.004+.002,Et=vc(rt,1-X/wt,tt).x*1.004+.002;return ot>0?[Ee(U,ut-O,rt),Ee(Et,ut-X,rt)]:[Ee(-Et,ut-X,rt),Ee(-U,ut-O,rt)]})),N);const v=new Ge;v.position.set(0,.56,-.02),v.rotation.x=-.9;const P=new zt(new Pc(.13,.016,8,24),l);v.add(P);const E=new zt(new re(.24,.02,.012),l);v.add(E),t.add(v),t.add(As(Ee(0,rp(hM,0)-.02,.06),Ee(0,.55,-.01),.018,l));const S=new Ge;S.position.copy(Wo),t.add(S);const C=new zt(new re(.2,.12,.08),d);C.position.set(0,-.02,0),S.add(C);const b=new zt(new Sn(.018,.018,.26,10),d);b.rotation.z=Math.PI/2,S.add(b);const w=new Ge;w.position.copy(Su),S.add(w);const D=new zt(new re(.16,.16,.08),d);D.position.set(0,-.02,.05),w.add(D);const F=new zt(new VM(.36,.43,.33,4,.07),l);F.position.set(0,.235,-.165),F.castShadow=!0,w.add(F);const k=new Qt({map:vf(String(s),e,s===1||s===5?"#111":"#fff"),roughness:.4});for(const N of[1,-1]){const O=new zt(new je(.2,.2),k);O.position.set(N*.182,.25,-.165),O.rotation.y=N*Math.PI/2,w.add(O)}const B=new zt(new re(.07,.6,.12),l);B.position.set(0,-.27,-.13),w.add(B);const V=new zt(new re(.22,.01,.26),l);V.position.set(0,-.44,-.14),w.add(V);const $=As(Ee(0,-.57,0),Ee(0,-.57,-.24),.045,l);w.add($);const st=new zt(new re(.014,.12,.12),l);st.position.set(0,-.66,-.1),w.add(st);const H=new Ge;H.position.set(0,-.57,-.29);for(let N=0;N<3;N++){const O=new zt(new re(.06,.12,.008),d);O.position.y=.07;const X=new Ge;X.rotation.z=N*Math.PI*2/3,O.rotation.y=.5,X.add(O),H.add(X)}w.add(H);const ft=new Ge;ft.position.set(0,yo,-.5),t.add(ft);const vt=new Qt({color:e,roughness:.7}),Mt=new Qt({color:2764602,roughness:.8}),at=new Qt({color:16185078,roughness:.25}),xt=(N,O,X)=>Ee(N,O-yo,X+.5);for(const N of[1,-1])ft.add(As(xt(N*.12,.17,-.33),xt(N*.12,.16,-.82),.055,Mt)),ft.add(As(xt(N*.12,.19,-.33),xt(N*.11,.5,-.66),.075,Mt)),ft.add(As(xt(N*.19,.9,-.5),xt(N*.22,.72,-.27),.045,vt)),ft.add(As(xt(N*.22,.72,-.27),xt(N*.11,.6,-.06),.04,vt));ft.add(As(xt(0,.52,-.68),xt(0,.9,-.5),.16,vt));const K=new zt(new qs(.135,20,14),at);K.position.copy(xt(0,1.08,-.4)),K.castShadow=!0,ft.add(K);const L=new zt(new qs(.137,20,10,Math.PI/2-.9,1.8,1.2,.5),new Qt({color:1118481,roughness:.1,metalness:.5}));return L.position.copy(K.position),ft.add(L),{root:t,tilt:S,motor:w,prop:H,rider:ft,wheel:v}}function Eu(s,t,e){s.root.position.copy(t.origin),s.root.quaternion.copy(t.quat),s.tilt.rotation.x=(t.tilt-_c)*Math.PI/180,s.tilt.position.y=Wo.y+$e.motorHeight,s.motor.rotation.y=t.steerAngle,s.prop.rotation.z+=t.engineOmega*e*.06;for(const r of s.wheel.children)r.rotation.z=-t.steerAngle*2.5;const n=t.riderB.x-qn.x,i=t.riderB.y-qn.y,o=t.riderB.z-qn.z;s.rider.position.set(n*.6,yo+i*.5,-.5+o*.5),s.rider.rotation.set(o*.9,0,-n*.9)}function dp(s,t=new Uint16Array(s.n*s.n*2)){var r;const e=s.n,n=s.h,i=(r=s.layer)==null?void 0:r.air,o=1/Cn.depth;for(let a=0;a<e*e;a++)t[2*a]=ld.toHalfFloat(n[a]),t[2*a+1]=ld.toHalfFloat(i?Math.min(Cn.maxVoid,Math.max(0,i[a]*o)):0);return t}const oc=220,zh=352,Ra=oc/zh,fp=new te(6989532),Tu=new te(13624306),$r=new A(-.4,.55,.75).normalize(),_f=`
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
`,$M=new A(.95,.38,.32),qM=new te(2382170),Mf=.5,pp="boatgame.waterFx";function YM(){try{return localStorage.getItem(pp)!=="0"}catch{return!0}}class Au{constructor(t){M(this,"mesh");M(this,"uniforms");M(this,"reflTarget",new Ii(1,1,{type:Zi}));M(this,"refrTarget",new Ii(1,1,{type:Zi,depthTexture:new lu(1,1)}));M(this,"mirror",new Fn);M(this,"hidden",[]);M(this,"hiddenRefr",[]);M(this,"size",new Pt);M(this,"passFrame",0);M(this,"passes",YM());M(this,"waves");M(this,"wakeTex",null);M(this,"wakeHalf",null);this.waves=t;const e=t.waves.length,n=new je(oc,oc,zh,zh);n.rotateX(-Math.PI/2);const i=new Ch(new Uint16Array(4),2,2,bc,Zi);i.needsUpdate=!0,this.uniforms={uTime:{value:0},uA:{value:Array.from({length:e},()=>new Oe)},uB:{value:Array.from({length:e},()=>new Oe)},uSun:{value:$r},uSkyTop:{value:fp},uSkyHorizon:{value:Tu},uFogFar:{value:oc*.48},uWake:{value:i},uWakeOrigin:{value:new Pt(-1e6,-1e6)},uWakeDx:{value:1},uWakeN:{value:2},uRefl:{value:this.reflTarget.texture},uReflMat:{value:new ce},uReflOn:{value:0},uRefr:{value:this.refrTarget.texture},uRefrDepth:{value:this.refrTarget.depthTexture},uRefrOn:{value:0},uRes:{value:new Pt(1,1)},uNear:{value:.1},uFar:{value:1e3},uAbsorb:{value:$M},uScatter:{value:qM}};const o=new si({uniforms:this.uniforms,defines:{NW:e},vertexShader:`
        uniform float uTime;
        uniform vec4 uA[NW]; // dirX, dirZ, amp, k
        uniform vec4 uB[NW]; // omega, phase
        ${_f}
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
        ${_f}
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
      `});this.mesh=new zt(n,o),this.mesh.frustumCulled=!1}updateWake(t){this.wakeBuffer(t.n,t.dx),dp(t,this.wakeHalf),this.wakeTex.needsUpdate=!0,this.uniforms.uWakeOrigin.value.set(t.originX,t.originZ)}updateWakeHalf(t,e,n,i,o){this.wakeBuffer(e,n),this.wakeHalf.set(t),this.wakeTex.needsUpdate=!0,this.uniforms.uWakeOrigin.value.set(i,o)}wakeBuffer(t,e){this.wakeTex&&this.wakeHalf&&this.wakeHalf.length===t*t*2||(this.wakeHalf=new Uint16Array(t*t*2),this.wakeTex=new Ch(this.wakeHalf,t,t,ou,Zi),this.wakeTex.magFilter=On,this.wakeTex.minFilter=On,this.uniforms.uWake.value=this.wakeTex,this.uniforms.uWakeDx.value=e,this.uniforms.uWakeN.value=t)}hide(...t){this.hidden.push(...t)}hideFromRefraction(...t){this.hiddenRefr.push(...t)}renderPasses(t,e,n){const i=this.uniforms;if(!this.passes){i.uReflOn.value=i.uRefrOn.value=0;return}t.getDrawingBufferSize(this.size),i.uRes.value.copy(this.size);const o=Math.max(1,Math.floor(this.size.x*Mf)),r=Math.max(1,Math.floor(this.size.y*Mf));let a=this.passFrame===0;(this.reflTarget.width!==o||this.reflTarget.height!==r)&&(this.reflTarget.setSize(o,r),this.refrTarget.setSize(o,r),a=!0);const c=a||this.passFrame%2===0,l=a||this.passFrame%2===1;this.passFrame++;const h=this.hidden.map(p=>p.visible);this.mesh.visible=!1;for(const p of this.hidden)p.visible=!1;const u=t.shadowMap.autoUpdate;t.shadowMap.autoUpdate=!1;const d=t.getRenderTarget();if(n.updateMatrixWorld(),c){const p=this.hiddenRefr.map(x=>x.visible);for(const x of this.hiddenRefr)x.visible=!1;t.setRenderTarget(this.refrTarget),t.clear(),t.render(e,n),this.hiddenRefr.forEach((x,g)=>x.visible=p[g]),i.uNear.value=n.near,i.uFar.value=n.far,i.uRefrOn.value=1}const f=n.position;if(l)if(f.y>.05){const p=this.mirror;p.copy(n,!1),p.position.set(f.x,-f.y,f.z);const x=new A(0,0,-1).applyQuaternion(n.quaternion),g=new A(0,1,0).applyQuaternion(n.quaternion);x.y=-x.y,g.y=-g.y,p.up.copy(g),p.lookAt(p.position.clone().add(x)),p.projectionMatrix.copy(n.projectionMatrix),p.updateMatrixWorld(),p.matrixWorldInverse.copy(p.matrixWorld).invert(),i.uReflMat.value.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse);const m=t.clippingPlanes;t.clippingPlanes=[new Wi(new A(0,1,0),.05)],t.setRenderTarget(this.reflTarget),t.clear();const _=e.userData.sky,y=_==null?void 0:_.position.clone();_==null||_.position.copy(p.position),t.render(e,p),_&&y&&_.position.copy(y),t.clippingPlanes=m,i.uReflOn.value=1}else i.uReflOn.value=0;t.setRenderTarget(d),t.shadowMap.autoUpdate=u,this.mesh.visible=!0,this.hidden.forEach((p,x)=>p.visible=h[x])}update(t,e){this.uniforms.uTime.value=t;const n=this.uniforms.uA.value,i=this.uniforms.uB.value;this.waves.waves.forEach((o,r)=>{n[r].set(o.dirX,o.dirZ,o.amp*this.waves.scale,o.k),i[r].set(o.omega,o.phase,0,0)}),this.mesh.position.set(Math.round(e.x/Ra)*Ra,0,Math.round(e.z/Ra)*Ra)}}function Ru(){const s=new Go(1500,48);s.rotateX(-Math.PI/2);const t=new Ri({color:new te(10470612),fog:!0}),e=new zt(s,t);return e.position.y=-1.6,e}function mp(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),o={},r={},a=s[0].morphTargetsRelative,c=new ze;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(const h in o){const u=yf(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in r){const u=r[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<r[h].length;++x)f.push(r[h][x][d]);const p=yf(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}return c}function yf(s){let t,e,n,i=-1,o=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new nn(r,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){const x=h.getComponent(d,p);a.setComponent(d+u,p,x)}}else r.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}class gp{constructor(){M(this,"parts",new Map);M(this,"m",new ce)}add(t,e,n){const i=e.index?e.toNonIndexed():e.clone();n&&i.applyMatrix4(n);for(const r of Object.keys(i.attributes))r!=="position"&&r!=="normal"&&r!=="uv"&&i.deleteAttribute(r);i.attributes.uv||i.setAttribute("uv",new fe(new Float32Array(i.attributes.position.count*2),2)),i.attributes.normal||i.computeVertexNormals();let o=this.parts.get(t);o||this.parts.set(t,o=[]),o.push(i)}box(t,e,n,i,o,r,a){const c=Math.abs(n-e),l=Math.abs(o-i),h=Math.abs(a-r);c<1e-4||l<1e-4||h<1e-4||(this.m.makeTranslation((e+n)/2,(i+o)/2,(r+a)/2),this.add(t,new re(c,l,h),this.m))}boxAt(t,e,n,i,o,r,a,c=0,l=0){const h=new mi(l,c,0,"YXZ");this.m.makeRotationFromEuler(h).setPosition(e,n,i),this.add(t,new re(o,r,a),this.m)}bar(t,e,n,i){const o=e.distanceTo(n),r=e.clone().add(n).multiplyScalar(.5),a=new bn().setFromUnitVectors(new A(0,0,1),n.clone().sub(e).normalize());this.m.compose(r,a,new A(1,1,1)),this.add(t,new re(i,i,o),this.m)}build(t,e={}){const n=[];for(const[i,o]of this.parts){const r=mp(o,!1);if(!r)continue;const a=i.userData.uvScale;a&&jM(r,a[0],a[1]),r.computeBoundingSphere();const c=new zt(r,i);c.castShadow=e.cast??!0,c.receiveShadow=e.receive??!0,e.name&&(c.name=`${e.name}:${i.name}`),c.matrixAutoUpdate=!1,c.updateMatrix(),t.add(c),n.push(c);for(const l of o)l.dispose()}return this.parts.clear(),n}}function jM(s,t,e){const n=s.attributes.position,i=s.attributes.normal,o=s.attributes.uv;for(let r=0;r<n.count;r++){const a=Math.abs(i.getX(r)),c=Math.abs(i.getY(r)),l=Math.abs(i.getZ(r)),h=n.getX(r),u=n.getY(r),d=n.getZ(r);c>=a&&c>=l?o.setXY(r,h/t,d/t):a>=l?o.setXY(r,d/t,u/e):o.setXY(r,h/t,u/e)}o.needsUpdate=!0}function wi(s,t,e,n=!0){const i=document.createElement("canvas");i.width=s,i.height=t,e(i.getContext("2d"));const o=new es(i);return o.colorSpace=Xe,o.anisotropy=4,n&&(o.wrapS=o.wrapT=lc),o}function To(s,t,e,n=1024,i=128,o){return wi(n,i,r=>{r.fillStyle=t,r.fillRect(0,0,n,i),r.fillStyle=e,r.textAlign="center",r.textBaseline="middle";const a=Math.floor(i*(o?.5:.66));r.font=`bold ${a}px sans-serif`,r.fillText(s,n/2,o?i*.36:i*.54,n*.94),o&&(r.font=`${Math.floor(i*.26)}px sans-serif`,r.fillText(o,n/2,i*.78,n*.94))},!1)}function un(s,t={}){const{uv:e,name:n,...i}=t,o=new Qt({color:s,roughness:.85,...i});return e&&(o.userData.uvScale=e),n&&(o.name=n),o}function ZM(){const s=wi(256,256,c=>{c.fillStyle="#a7774a",c.fillRect(0,0,256,256);for(let l=0;l<8;l++){const h=l*32,u=.88+l*37%7*.03;c.fillStyle=`rgba(${Math.round(167*u)},${Math.round(119*u)},${Math.round(74*u)},1)`,c.fillRect(h+1,0,30,256),c.fillStyle="rgba(60,35,15,0.55)",c.fillRect(h,0,1.5,256),c.fillRect(h,l*97%256,32,1.5)}}),t=wi(256,256,c=>{c.fillStyle="#d9d6cf",c.fillRect(0,0,256,256),c.fillStyle="rgba(0,0,0,0.12)";for(let l=0;l<=4;l++)c.fillRect(l*64-1,0,2,256),c.fillRect(0,l*64-1,256,2)}),e=wi(256,256,c=>{c.fillStyle="#b9ada0",c.fillRect(0,0,256,256);for(let l=0;l<8;l++)for(let h=0;h<5;h++){const u=h*64+l%2*32;c.fillStyle=["#c2b4a4","#b3a493","#bcae9d"][(l*3+h)%3],c.fillRect(u+1,l*32+1,62,30),c.fillRect(u-256+1,l*32+1,62,30)}}),n=wi(128,256,c=>{const l=c.createLinearGradient(0,0,0,256);l.addColorStop(0,"#6f97b8"),l.addColorStop(1,"#3d6585"),c.fillStyle=l,c.fillRect(0,0,128,256),c.fillStyle="rgba(255,255,255,0.08)",c.beginPath(),c.moveTo(20,0),c.lineTo(70,0),c.lineTo(30,256),c.lineTo(0,256),c.fill(),c.fillStyle="#c9ccd0",c.fillRect(0,0,4,256),c.fillRect(63,0,2,256),c.fillRect(0,116,128,4)}),i=wi(256,192,c=>{c.fillStyle="#e6e4de",c.fillRect(0,0,256,192),c.fillStyle="rgba(0,0,0,0.10)",c.fillRect(0,0,256,2),c.fillRect(0,0,2,192)}),o=wi(256,256,c=>{c.fillStyle="#efefec",c.fillRect(0,0,256,256),c.fillStyle="#5f7f97",c.fillRect(20,90,216,90),c.fillStyle="rgba(255,255,255,0.18)",c.fillRect(20,90,216,14),c.fillStyle="#d8d8d4",c.fillRect(126,90,4,90)}),r=wi(256,256,c=>{c.fillStyle="#e9ecef",c.fillRect(0,0,256,256),c.strokeStyle="#3a4a6a",c.lineWidth=6,c.strokeRect(0,0,256,256),c.lineWidth=3,c.beginPath(),c.moveTo(0,0),c.lineTo(256,256),c.moveTo(256,0),c.lineTo(0,256),c.stroke()}),a=wi(64,64,c=>{c.fillStyle="#c9c6bf",c.fillRect(0,0,64,64),c.fillStyle="rgba(0,0,0,0.08)",c.fillRect(0,0,64,2)});return{wood:un(16777215,{map:s,uv:[2.4,2.4],roughness:.9,name:"wood"}),tile:un(16777215,{map:t,uv:[2.4,2.4],roughness:.5,name:"tile"}),paving:un(16777215,{map:e,uv:[3.2,3.2],name:"paving"}),curtain:un(16777215,{map:n,uv:[3,6],roughness:.25,metalness:.15,name:"curtain"}),panel:un(16777215,{map:i,uv:[4,3],name:"panel"}),windows:un(16777215,{map:o,uv:[4,4],name:"windows"}),lattice:un(16777215,{map:r,uv:[3,3],side:ke,name:"lattice"}),step:un(16777215,{map:a,uv:[1,1],name:"step"}),concrete:un(12433841,{name:"concrete"}),ceiling:un(14210768,{name:"ceiling"}),roof:un(5006936,{roughness:.7,name:"roof"}),navy:un(1912661,{roughness:.5,metalness:.3,name:"navy"}),steel:un(12896460,{roughness:.45,name:"steel"}),dark:un(2764083,{roughness:.6,name:"dark"}),seat:un(15760666,{roughness:.55,name:"seat"}),glass:new Qt({name:"glass",color:10473702,transparent:!0,opacity:.22,roughness:.05,metalness:.1,depthWrite:!1,side:ke}),light:new Qt({name:"light",color:16777215,emissive:16773840,emissiveIntensity:1.2,roughness:.4}),station:un(12041410,{name:"station"}),tower:un(4610414,{roughness:.3,metalness:.3,name:"tower"})}}let KM=null;function xp(){return KM??(KM=ZM())}const Mc="水都",JM=`ボートレース${Mc}`,Uh=`BOAT RACE ${Mc}`,J=.8,Ca=6,Ot=[J,J+Ca,J+2*Ca,J+3*Ca,J+4*Ca],Ds=.5,it={fence:-45.6,front2:-50.2,rows2:-51.6,col:-55.5,deckBack:-58,upperS:-62,concBack:-86,buildS:-92,plazaW:-100,c2:-60,c3:-63,c4:-66,cTop:-74,buildC:-125,buildN:-105,frontN:-50},W={stationN:262,plazaS:250,gate:238,gateLine:232,standS:205,seat2S:201,seat2N:118,wingN:112,concN:60,deckN:-20,centralN:-70,northN:-262},zn={n:11,depth:(it.rows2-it.upperS)/11,rise:.42},Yi=[-54.6,-50.6],vp=[{name:"南階段",zBottom:219,zTop:W.seat2S+6},{name:"北階段",zBottom:100,zTop:W.seat2N-6}],rc=35,vo={rows:[-48.6,-49.6,-50.6,-51.6,-52.6],z0:W.wingN+1.5,z1:W.standS-1,pitch:.52,block:24,aisle:1.4},pn={xs:[-65,-79],z0:66,dz:12,n:12,size:.8},ni={x:it.col,z0:W.wingN+6,dz:12,n:8,size:.6},br=.95,_p=[{kind:"sell",z:76.5,n:8},{kind:"payout",z:90,n:6},{kind:"sell",z:131,n:8},{kind:"payout",z:145,n:6},{kind:"sell",z:167,n:8},{kind:"sell",z:184,n:8},{kind:"payout",z:199,n:4}],pi={w:.86,d:.7},pe={x:-72,zs:[84,108,132,156,180],len:3.2,w:.9,h:1.05},Fh=[68,96,124,150,176,198],Sf=[[-47.4,128],[-80,134],[-56.5,140],[-51.3,22],[-75,W.plazaS-3]];function QM(){const s=new Ge;s.name="stand";const t=xp(),e=new gp,n=Ot[1]-Ds;e.box(t.wood,it.deckBack,it.fence,J-.3,J+.03,W.deckN,W.standS),e.box(t.paving,it.plazaW,it.fence,J-.3,J+.02,W.standS,W.plazaS+12),e.box(t.tile,it.concBack,it.deckBack,J-.3,J+.02,W.concN,W.standS),e.box(t.glass,it.fence-.04,it.fence+.04,J,J+1.05,W.deckN,W.plazaS),e.box(t.steel,it.fence-.05,it.fence+.05,J+1.05,J+1.12,W.deckN,W.plazaS);for(let r=W.deckN;r<=W.plazaS;r+=3)e.box(t.steel,it.fence-.04,it.fence+.04,J,J+1.05,r-.03,r+.03);e.box(t.glass,it.deckBack,it.fence,J,J+1.05,W.deckN-.04,W.deckN+.04),e.box(t.steel,it.deckBack,it.fence,J+1.05,J+1.12,W.deckN-.05,W.deckN+.05),e.box(t.panel,it.buildS,it.concBack,J,n,W.wingN,W.standS),e.box(t.panel,it.buildS,-82,J,n,W.standS,W.standS+.4),e.box(t.panel,-62,it.deckBack,J,n,W.standS,W.standS+.4),e.box(t.panel,-82,-62,J+4.2,n,W.standS,W.standS+.4),e.box(t.ceiling,it.buildS,it.front2,n,Ot[1],W.wingN,W.seat2S+6);for(let r=0;r<zn.n;r++){const a=it.rows2-(r+1)*zn.depth;e.box(t.step,a,a+zn.depth,Ot[1],Ot[1]+(r+1)*zn.rise,W.seat2N,W.seat2S)}e.box(t.glass,it.front2,it.front2+.08,Ot[1],Ot[1]+1.05,W.wingN,W.seat2S+6),e.box(t.steel,it.front2-.02,it.front2+.1,Ot[1]+1.05,Ot[1]+1.12,W.wingN,W.seat2S+6),e.box(t.panel,it.front2-.02,it.front2+.1,n-.6,Ot[1],W.wingN,W.seat2S+6);for(const r of[W.seat2S+6,W.wingN])e.box(t.glass,it.upperS,Yi[0],Ot[1],Ot[1]+1.05,r-.04,r+.04),e.box(t.steel,it.upperS,Yi[0],Ot[1]+1.05,Ot[1]+1.12,r-.05,r+.05);e.box(t.panel,it.buildS,it.upperS,Ot[1],Ot[2]-Ds,W.wingN,W.seat2S+6);for(let r=W.seat2N+8;r<W.seat2S;r+=16)e.box(t.dark,it.upperS+.01,it.upperS+.05,Ot[1]+zn.n*zn.rise,Ot[1]+zn.n*zn.rise+2.2,r-1.2,r+1.2);e.box(t.panel,it.buildS,it.upperS-.4,Ot[2]-Ds,Ot[4],W.wingN,W.standS),e.box(t.curtain,it.upperS-.4,it.upperS,Ot[2],Ot[4],W.wingN+.3,W.standS-.3);for(const r of[Ot[2],Ot[3]])e.box(t.panel,it.buildS,it.upperS+.4,r-Ds,r+.2,W.wingN,W.standS);e.box(t.curtain,it.buildS+2,it.upperS-1,Ot[2],Ot[4]-.4,W.standS,W.standS+.3);for(const r of[Ot[3]])e.box(t.panel,it.buildS+2,it.upperS-1,r-Ds,r+.2,W.standS+.25,W.standS+.45);e.box(t.roof,-84,-60,J+4.3,J+4.6,W.standS,W.standS+4),e.box(t.roof,it.buildS,-53,Ot[4]-.6,Ot[4],W.wingN-1,W.standS+1),e.box(t.panel,-53.4,-53,Ot[4]-1.3,Ot[4]+.3,W.wingN-1,W.standS+1);for(let r=W.wingN+2;r<=W.standS;r+=12)e.box(t.dark,it.upperS-.2,-53.4,Ot[4]-1.5,Ot[4]-.6,r-.25,r+.25);for(let r=W.wingN+4;r<W.standS;r+=8)e.box(t.dark,-53.6,-53,Ot[4]+.3,Ot[4]+2.2,r-.1,r+.1),e.box(t.light,-53.7,-53.2,Ot[4]+1.4,Ot[4]+2.2,r-.7,r+.7);for(let r=0;r<ni.n;r++){const a=ni.z0+r*ni.dz,c=ni.size/2;e.box(t.panel,ni.x-c,ni.x+c,J,n,a-c,a+c)}{let r=W.standS;for(const a of[...Fh].sort((c,l)=>l-c))e.box(t.glass,it.deckBack-.05,it.deckBack+.05,J,n,a+2,r),e.box(t.panel,it.deckBack-.15,it.deckBack+.15,J+3.2,n,a-2,a+2),r=a-2;e.box(t.glass,it.deckBack-.05,it.deckBack+.05,J,n,W.concN,r);for(let a=W.concN;a<=W.standS;a+=4)Fh.some(c=>Math.abs(c-a)<2.1)||e.box(t.steel,it.deckBack-.08,it.deckBack+.08,J,n,a-.06,a+.06);e.box(t.steel,it.deckBack-.08,it.deckBack+.08,J+3.1,J+3.2,W.concN,W.standS)}for(const r of pn.xs)for(let a=0;a<pn.n;a++){const c=pn.z0+a*pn.dz,l=pn.size/2;e.box(t.panel,r-l,r+l,J,n,c-l,c+l),e.box(t.dark,r-l-.02,r+l+.02,J,J+.12,c-l-.02,c+l+.02)}e.box(t.panel,it.buildC,it.deckBack-.4,J,n,W.centralN,W.concN),e.box(t.panel,it.buildC,it.concBack,J,n,W.concN,W.wingN),e.box(t.curtain,it.deckBack-.4,it.deckBack,J,n,W.centralN+.3,W.concN),e.box(t.ceiling,it.buildC,it.deckBack,n,Ot[1],W.centralN,W.wingN);const i=[it.c2,it.c3,it.c4];for(let r=0;r<3;r++){const a=Ot[r+1],c=Ot[r+2]-Ds,l=i[r];e.box(t.panel,it.buildC,l-.4,a,c,W.centralN,W.wingN),e.box(t.curtain,l-.4,l,a,c,W.centralN+.3,W.wingN-.3),e.box(t.panel,it.buildC,l+.4,c,Ot[r+2]+.2,W.centralN,W.wingN)}e.box(t.panel,it.buildC,it.c2+.4,Ot[1]-.1,Ot[1]+1,W.centralN,W.wingN),e.box(t.roof,it.buildC,it.upperS,Ot[4]-.6,Ot[4],W.centralN-1,W.wingN),e.box(t.panel,it.upperS-.4,it.upperS,Ot[4]-1.3,Ot[4]+.3,W.centralN-1,W.wingN);for(let r=W.centralN+4;r<W.wingN;r+=8)e.box(t.dark,it.upperS-.6,it.upperS,Ot[4]+.3,Ot[4]+2.2,r-.1,r+.1),e.box(t.light,it.upperS-.7,it.upperS-.2,Ot[4]+1.4,Ot[4]+2.2,r-.7,r+.7);const o=J+34;e.box(t.panel,it.buildC+7,it.cTop,Ot[4],o,W.centralN+20,W.wingN-20),e.box(t.roof,it.buildC+6,it.cTop+1,o,o+.5,W.centralN+19,W.wingN-19);for(let r=W.centralN+24;r<W.wingN-20;r+=10)e.box(t.light,it.cTop+.1,it.cTop+.6,o+.5,o+1.3,r-.6,r+.6);e.box(t.windows,it.buildN,it.frontN,J,J+22,W.northN,W.centralN),e.box(t.roof,it.buildN-.5,it.frontN+.5,J+22,J+22.6,W.northN-.5,W.centralN+.5),e.box(t.panel,it.frontN-.6,it.frontN,J,J+4,W.northN+10,W.centralN-10);for(const r of vp){const a=Math.sign(r.zTop-r.zBottom),c=Math.abs(r.zTop-r.zBottom)/rc,l=(Ot[1]-J)/rc;for(let h=0;h<rc;h++){const u=r.zBottom+a*h*c,d=u+a*c;e.box(t.concrete,Yi[0],Yi[1],Math.max(J,J+(h+1)*l-.6),J+(h+1)*l,Math.min(u,d),Math.max(u,d))}for(const h of Yi){const u=new A(h,J+1,r.zBottom),d=new A(h,Ot[1]+1,r.zTop);e.bar(t.steel,u,d,.06);for(let f=0;f<=6;f++){const p=f/6,x=r.zBottom+(r.zTop-r.zBottom)*p,g=J+(Ot[1]-J)*p;e.box(t.steel,h-.03,h+.03,g,g+1,x-.03,x+.03)}e.add(t.glass,ty(h,r.zBottom,r.zTop))}}for(let r=0;r<11;r++){const a=-61-r*2.6;e.box(t.steel,a-.15,a+.15,J,J+1,W.gateLine-.6,W.gateLine+.6),e.box(t.dark,a-.16,a+.16,J+1,J+1.06,W.gateLine-.6,W.gateLine+.6)}for(const[r,a]of[[-60,it.fence],[it.plazaW,-89.5]]){e.box(t.steel,Math.min(r,a),Math.max(r,a),J+1,J+1.08,W.gateLine-.04,W.gateLine+.04);for(let c=Math.min(r,a);c<=Math.max(r,a);c+=1.5)e.box(t.steel,c-.03,c+.03,J,J+1,W.gateLine-.03,W.gateLine+.03)}e.box(t.panel,it.plazaW-.6,it.plazaW,J,J+1.2,W.standS,W.plazaS);{const c=41.285714285714285,l=J+15-c,h=-75,u=Math.asin(23/c),d=new Sn(c,c,16,32,1,!0,Math.PI-u,2*u);d.rotateX(Math.PI/2),e.add(t.lattice,d,new ce().makeTranslation(h,l,W.gate));for(const f of[-8,8]){const p=new Pc(c,.5,6,40,2*u);p.rotateZ(Math.PI/2-u),e.add(t.navy,p,new ce().makeTranslation(h,l,W.gate+f));for(const x of[-23,23])e.box(t.navy,h+x-.5,h+x+.5,J,l+Math.sqrt(c*c-23*23),W.gate+f-.5,W.gate+f+.5)}}e.box(t.roof,-80,-70,J+3.6,J+3.9,W.gate+8,W.stationN);for(let r=W.gate+10;r<W.stationN;r+=6)for(const a of[-79.7,-70.3])e.box(t.steel,a-.1,a+.1,J,J+3.6,r-.1,r+.1);e.box(t.station,-140,-55,J,J+12,W.stationN,W.stationN+38),e.box(t.station,-320,220,J+7,J+8.2,W.stationN+14,W.stationN+20);for(let r=-300;r<=200;r+=30)e.box(t.station,r-.8,r+.8,J,J+7,W.stationN+15.5,W.stationN+18.5);e.box(t.tower,-185,-155,J,J+86,340,370),e.box(t.dark,-183,-157,J+86,J+89,342,368),e.build(s,{name:"stand"}),s.add(ey(t.seat));{const r=new zt(new je(72,6.5),new Qt({map:To(Uh,"#1d2f55","#ffffff",2048,180),emissive:16777215,emissiveIntensity:.25,roughness:.5}));r.material.emissiveMap=r.material.map,r.rotation.y=Math.PI/2,r.position.set(it.cTop+.06,Ot[4]+6,(W.centralN+W.wingN)/2),r.name="sign:roof",s.add(r);const a=new zt(new je(24,2.6),new Qt({map:To(Uh,"#1d2f55","#ffffff",1024,112),emissive:16777215,emissiveIntensity:.35,roughness:.5}));a.material.emissiveMap=a.material.map,a.position.set(-75,J+12.6,W.gate+8.6),a.name="sign:gate",s.add(a);const c=a.clone();c.rotation.y=Math.PI,c.position.z=W.gate-8.6,s.add(c);const l=a.clone();l.scale.setScalar(.9),l.position.set(-76,Ot[1]+2.6,W.standS+.06),s.add(l)}return s}function ty(s,t,e){const n=J,i=Ot[1],o=.95,r=new ze,a=[s,n+.05,t,s,i+.05,e,s,i+o,e,s,n+o,t];return r.setAttribute("position",new fe(a,3)),r.setIndex([0,1,2,0,2,3]),r.computeVertexNormals(),r}function Mp(){const s=[],t=(e,n,i)=>{let o=e;for(;o<n;){for(let r=0;r<vo.block&&o<n;r++,o+=vo.pitch)i(o);o+=vo.aisle}};for(const e of vo.rows)t(vo.z0,vo.z1,n=>s.push({x:e,y:J,z:n}));for(let e=0;e<zn.n;e++){const n=it.rows2-(e+.62)*zn.depth,i=Ot[1]+(e+1)*zn.rise;t(W.seat2N+.6,W.seat2S-.3,o=>s.push({x:n,y:i,z:o}))}return s}function ey(s){const t=[],e=(a,c,l,h,u,d,f=0)=>{const p=new re(a,c,l).toNonIndexed();p.applyMatrix4(new ce().makeRotationZ(f).setPosition(h,u,d)),t.push(p)};e(.42,.06,.44,.02,.43,0),e(.06,.46,.44,-.2,.7,0,-.18),e(.08,.4,.08,-.02,.2,0);const n=Vr(t),i=Mp(),o=new Pi(n,s,i.length),r=new ce;return i.forEach((a,c)=>{r.makeTranslation(a.x,a.y+.02,a.z),o.setMatrixAt(c,r)}),o.castShadow=!0,o.receiveShadow=!0,o.name="seats",o.computeBoundingSphere(),o}function Vr(s){let t=0;for(const r of s)t+=r.attributes.position.count;const e=new Float32Array(t*3),n=new Float32Array(t*3);let i=0;for(const r of s)e.set(r.attributes.position.array,i*3),n.set(r.attributes.normal.array,i*3),i+=r.attributes.position.count;const o=new ze;return o.setAttribute("position",new nn(e,3)),o.setAttribute("normal",new nn(n,3)),o}const ny={big:"中継・出走表・オッズ",board:"オッズ・払戻",odds:"オッズ",deck:"中継"};function Ao(s,t,e,n,i,o){const r=new Ri({map:sy(t,ny[e],o),toneMapped:!1}),a=new zt(new je(n,i),r);return a.name=`screen:${s}`,{id:s,name:t,kind:e,mesh:a,size:{w:n,h:i},px:o}}function iy(s,t){const e=s.mesh.material.map;s.mesh.material.map=t,s.mesh.material.needsUpdate=!0,e&&e!==t&&e.userData.placeholder&&e.dispose()}function sy(s,t,e){const n=Math.min(512,e.w),i=Math.max(32,Math.round(n*e.h/e.w)),o=document.createElement("canvas");o.width=n,o.height=i;const r=o.getContext("2d"),a=r.createLinearGradient(0,0,0,i);a.addColorStop(0,"#13304f"),a.addColorStop(1,"#0a1a2c"),r.fillStyle=a,r.fillRect(0,0,n,i),r.strokeStyle="#2f6db5",r.lineWidth=Math.max(2,i*.03),r.strokeRect(0,0,n,i),r.fillStyle="#fff",r.textAlign="center",r.textBaseline="middle",r.font=`bold ${Math.floor(i*.2)}px sans-serif`,r.fillText(JM,n/2,i*.3,n*.9),r.fillStyle="#ffd34d",r.font=`${Math.floor(i*.15)}px sans-serif`,r.fillText(`${s}（${t}）`,n/2,i*.62,n*.92);const c=new es(o);return c.colorSpace=Xe,c.userData.placeholder=!0,c}const hn=[new A(0,0,150),new A(0,0,-150)],Yn=0,Ht={x0:-45,x1:85,z0:hn[1].z-120,z1:hn[0].z+70},Xn=.8,oy=W.deckN,wf=3,ry=Ht.z0,Cu=-18,Ir=6,Hs=4.5,ti=7,ay=Ir*Hs+1,Hr=ry+ti-2.5;function cy(s){return{x:Cu+Ir*Hs/2-(s-.5)*Hs,z:Hr+2.3,heading:0}}const ly=[16053492,2236962,14165547,2056127,15909424,1940042],hy=["#f4f4f4","#222222","#d8262b","#1f5fbf","#f2c230","#1d9a4a"];function uy(s,t,e,n,i){const o=document.createElement("canvas");o.width=n,o.height=i;const r=o.getContext("2d");r.fillStyle=t,r.fillRect(0,0,n,i),r.fillStyle=e,r.font=`bold ${Math.floor(i*.72)}px sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(s,n/2,i*.54,n*.94);const a=new es(o);return a.colorSpace=Xe,a.anisotropy=4,a}function dy(s,t,e){const n=document.createElement("canvas");n.width=256,n.height=256;const i=n.getContext("2d");i.fillStyle=t,i.fillRect(0,0,256,256),i.fillStyle=e,i.font="bold 120px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(s,128,80);const o=new es(n);return o.colorSpace=Xe,o}function fy(){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d");e.fillStyle="#111",e.fillRect(0,0,512,512),e.translate(512/2,512/2),e.fillStyle="#f2c230";for(let l=0;l<12;l++)e.save(),e.rotate(l/12*Math.PI*2),e.beginPath(),e.moveTo(0,-512*.46),e.lineTo(-512*.035,-512*.38),e.lineTo(512*.035,-512*.38),e.closePath(),e.fill(),e.restore();e.fillStyle="#fff",e.font=`bold ${512*.11}px sans-serif`,e.textAlign="center",e.textBaseline="middle";const n=(l,h)=>[Math.sin((12-l)/12*Math.PI*2)*h,-Math.cos((12-l)/12*Math.PI*2)*h],[i,o]=n(5,512*.27),[r,a]=n(10,512*.27);e.fillText("5",i,o),e.fillText("10",r,a);const c=new es(t);return c.colorSpace=Xe,c}class Pu{constructor(t){M(this,"group",new Ge);M(this,"floaters",[]);M(this,"floorTime",{value:0});M(this,"clockHand",null);M(this,"waves");M(this,"screens",[]);this.waves=t;for(const x of hn)this.addMark(x.x,x.z);const e=new Qt({color:11117980,roughness:1}),n=new Q0;n.moveTo(-1400,-1400),n.lineTo(1400,-1400),n.lineTo(1400,1400),n.lineTo(-1400,1400),n.lineTo(-1400,-1400);const i=new pc;i.moveTo(Ht.x0,Ht.z0),i.lineTo(Ht.x0,Ht.z1),i.lineTo(Ht.x1,Ht.z1),i.lineTo(Ht.x1,Ht.z0),i.lineTo(Ht.x0,Ht.z0),n.holes.push(i);const o=new xu(n);o.rotateX(Math.PI/2);const r=new zt(o,new Qt({color:9210498,roughness:1,side:ke}));r.position.y=Xn,r.receiveShadow=!0,this.group.add(r);const a=Xn+wf,c=[[Ht.x0-.3,(Ht.z0+Ht.z1)/2,.6,Ht.z1-Ht.z0],[Ht.x1+.3,(Ht.z0+Ht.z1)/2,.6,Ht.z1-Ht.z0],[(Ht.x0+Ht.x1)/2,Ht.z0-.3,Ht.x1-Ht.x0,.6],[(Ht.x0+Ht.x1)/2,Ht.z1+.3,Ht.x1-Ht.x0,.6]];for(const[x,g,m,_]of c){const y=new zt(new re(m,a,_),e);y.position.set(x,Xn-a/2,g),this.group.add(y)}const l=new Qt({color:9081227,roughness:1});l.onBeforeCompile=x=>{x.uniforms.uTime=this.floorTime,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
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
          gl_FragColor.rgb *= 0.8 + 1.1 * causticAt(vFloorW.xz, uTime);`)};const h=new zt(new je(Ht.x1-Ht.x0,Ht.z1-Ht.z0),l);h.rotation.x=-Math.PI/2,h.position.set((Ht.x0+Ht.x1)/2,-wf,(Ht.z0+Ht.z1)/2),this.group.add(h);const u=new Qt({color:15263976,roughness:.6}),d=oy-Ht.z0,f=new zt(new re(.08,.08,d),u);f.position.set(Ht.x0-.5,Xn+1.1,Ht.z0+d/2),this.group.add(f);const p=new Pi(new re(.06,1.1,.06),u,Math.floor(d/3));for(let x=0;x<p.count;x++)p.setMatrixAt(x,new ce().makeTranslation(Ht.x0-.5,Xn+.55,Ht.z0+1.5+x*3));this.group.add(p),this.addStand(),this.addPit(),this.addClock(),this.addDistanceSigns(),this.addBoard(),this.addCity()}get aboveWater(){return["stand","city"].map(t=>this.group.getObjectByName(t)).filter(t=>!!t)}simplifySeats(){const t=this.group.getObjectByName("seats");if(!t)return;const e=t.geometry;e.computeBoundingBox();const n=e.boundingBox,i=new re(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z);i.translate((n.min.x+n.max.x)/2,(n.min.y+n.max.y)/2,(n.min.z+n.max.z)/2),t.geometry=i,e.dispose()}addStand(){this.group.add(QM())}addPit(){const t=new Ge,e=new Qt({color:10131600,roughness:1}),n=0,i=0,o=Ir*Hs,r=new zt(new re(ti,.5,o+1),e);r.position.set(n+ti/2-2.5,.05,i),t.add(r);for(let h=0;h<=Ir;h++){const u=new zt(new re(4,.35,.5),e);u.position.set(n+ti-.5,.05,i-o/2+h*Hs),t.add(u)}for(let h=0;h<Ir;h++){const u=h+1,d=ly[u-1],f=new Qt({color:d,roughness:.55}),p=i-o/2+(h+.5)*Hs,x=new Ge,g=Hs-.6;for(const v of[-1,1]){const P=new zt(new re(ti-2,1.6,.25),f);P.position.set(0,1.1,v*g/2),x.add(P)}const m=new zt(new Sn(g/2,g/2,ti-2,20,1,!0,0,Math.PI),f);m.rotation.set(0,0,Math.PI/2),m.rotation.order="ZYX",m.position.set(0,1.9,0),m.material.side=ke,x.add(m);const _=u===1||u===5?"#111":"#fff",y=new zt(new Go(g/2,24,0,Math.PI),new Qt({map:dy(String(u),hy[u-1],_),roughness:.6}));y.rotation.y=Math.PI/2,y.position.set((ti-2)/2+.01,1.9,0),x.add(y),x.position.set(n+ti/2-2,.3,p),t.add(x)}const a=new zt(new re(ti+1,.3,o+2),new Qt({color:4020858,roughness:.6}));a.position.set(n+ti/2-2.5,4.6,i),t.add(a);const c=new zt(new je(o,1.4),new Qt({map:uy(`${Uh}　ピット`,"#3d5a7a","#fff",1024,64),roughness:.6}));c.rotation.y=Math.PI/2,c.position.set(n+ti-1.99,5.3,i),t.add(c);const l=new zt(new re(.2,1.4,o),new Qt({color:2901344}));l.position.set(n+ti-2.1,5.3,i),t.add(l);for(const h of t.children)h.castShadow=!0;t.rotation.y=-Math.PI/2,t.position.set(Cu,0,Ht.z0),this.group.add(t)}addClock(){const t=new Ge,e=new Qt({color:1973790,roughness:.7}),n=new Qt({color:5593695,roughness:.6,metalness:.3});for(const h of[-2.6,2.6]){const u=new zt(new re(.5,6,.5),n);u.position.set(0,3,h),t.add(u)}const i=new zt(new re(.5,6,6),e);i.position.set(0,8,0),t.add(i);const o=new zt(new Go(2.5,48),new Qt({map:fy(),roughness:.5}));o.rotation.y=-Math.PI/2,o.position.set(-.26,8,0),t.add(o);const r=new Ge,a=new zt(new re(.05,2.2,.18),new Qt({color:16777215,roughness:.4,emissive:2236962}));a.position.y=1,r.add(a);const c=new zt(new Sn(.2,.2,.08,16),new Qt({color:14540253}));c.rotation.z=Math.PI/2,r.add(c),r.position.set(-.32,8,0),t.add(r),this.clockHand=r;const l=new zt(new re(.4,2,1.5),new Qt({color:14540253,roughness:.4}));l.position.set(0,7.5,4.2),t.add(l),t.position.set(Ht.x1+3,Xn,Yn+6);for(const h of t.children)h.castShadow=!0;this.group.add(t)}addDistanceSigns(){const t=new Qt({color:9080724,roughness:.6,metalness:.3}),e=12,n=3,i=1.5,o=new ze;o.setAttribute("position",new fe([-.35,0,0,.35,0,0,0,-.75,0],3)),o.setIndex([0,2,1]),o.computeVertexNormals();const r=new Qt({roughness:.8,side:ke}),a=Ht.x0-.8,c=Ht.x1+.8,l=Xn+e,h=x=>{const g=(x-a)/(c-a);return l-.3-n*4*g*(1-g)},u=Math.floor((c-a)/i)-1,d=new ce,f=new te(14165547),p=new te(16053492);for(const x of[50,100,150]){const g=Yn-x;for(const y of[a,c]){const v=new zt(new Sn(.12,.16,e,10),t);v.position.set(y,Xn+e/2,g),v.castShadow=!0,this.group.add(v)}const m=[];for(let y=0;y<=40;y++){const v=a+(c-a)*y/40;m.push(new A(v,h(v),g))}this.group.add(new Y0(new ze().setFromPoints(m),new uu({color:3355443})));const _=new Pi(o,r,u);for(let y=0;y<u;y++){const v=a+i*(y+1),P=(h(v+.1)-h(v-.1))/.2;d.makeRotationZ(Math.atan(P)).setPosition(v,h(v),g),_.setMatrixAt(y,d),_.setColorAt(y,y%2?p:f)}_.castShadow=!0,this.group.add(_)}}setClock(t){if(!this.clockHand)return;const e=(t%12+12)%12/12;this.clockHand.rotation.x=e*Math.PI*2}addBoard(){const t=Ht.x1+8,e=new Qt({color:2369325,roughness:.7}),n=new zt(new re(2,28,96),e);n.position.set(t+1,Xn+14,0),n.castShadow=!0,this.group.add(n);const i=new zt(new re(6,1.2,96),e);i.position.set(t+3,Xn+.6,0),this.group.add(i);const o=Ao("big","対岸大型映像","big",58,14.5,{w:2048,h:512});o.mesh.rotation.y=-Math.PI/2,o.mesh.position.set(t-.02,Xn+12+7.25,0),this.group.add(o.mesh),this.screens.push(o);for(const[r,a,c]of[["board-s","表示盤（南）",39],["board-n","表示盤（北）",-39]]){const l=Ao(r,a,"board",16,10,{w:1024,h:640});l.mesh.rotation.y=-Math.PI/2,l.mesh.position.set(t-.02,Xn+12+7.25,c),this.group.add(l.mesh),this.screens.push(l)}}addCity(){const t=[12040637,13222840,10462893,14079698].map(a=>new Qt({color:a,roughness:.9})),e=t.map(()=>[]);let n=12345;const i=()=>(n=n*16807%2147483647)%1e4/1e4,o=new ce;for(let a=0;a<140;a++){const c=i()*Math.PI*2,l=330+i()*700,h=Math.cos(c)*l,u=Math.sin(c)*l,d=12+i()**2*90,f=20+i()*40,p=new re(f,d,20+i()*40);o.makeRotationY(i()*Math.PI).setPosition(h,Xn+d/2,u),p.applyMatrix4(o),!(Math.hypot(h+170,u-355)<60||u>250&&u<330&&h>-350&&h<250)&&e[a%t.length].push(p)}const r=new Ge;r.name="city",e.forEach((a,c)=>{const l=mp(a,!1);l&&r.add(new zt(l,t[c]))}),this.group.add(r)}addMark(t,e){const n=new Ge,i=new Qt({color:15895070,roughness:.5}),o=new Qt({color:16119285,roughness:.5}),r=new zt(new Sn(.7,.8,1.8,24),i);r.position.y=.6,n.add(r);const a=new zt(new Sn(.71,.75,.35,24),o);a.position.y=.7,n.add(a);const c=new zt(new gu(.7,.5,24),i);c.position.y=1.75,n.add(c);for(const l of n.children)l.castShadow=!0;this.group.add(n),this.floaters.push({obj:n,x:t,z:e,draft:.2})}update(t){this.floorTime.value=t;for(const e of this.floaters)e.obj.position.set(e.x,this.waves.height(e.x,e.z,t)-e.draft,e.z)}}const fr=160,bf=5,py=.035;class Lu{constructor(t){M(this,"mesh");M(this,"points",[]);M(this,"lastAdd",-1);M(this,"pos");M(this,"across");M(this,"waves");this.waves=t,this.pos=new Float32Array(fr*2*3),this.across=new Float32Array(fr*2*3);const e=[];for(let o=0;o<fr-1;o++){const r=o*2;e.push(r,r+2,r+1,r+1,r+2,r+3)}const n=new ze;n.setAttribute("position",new nn(this.pos,3).setUsage(Ar)),n.setAttribute("aWake",new nn(this.across,3).setUsage(Ar)),n.setIndex(e);const i=new si({transparent:!0,depthWrite:!1,side:ke,vertexShader:`
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
      `});this.mesh=new zt(n,i),this.mesh.frustumCulled=!1}add(t,e,n,i){if(t-this.lastAdd<py)return;this.lastAdd=t;const o=Math.hypot(n.x,n.z)||1;this.points.unshift({x:e.x,z:e.z,sx:n.x/o,sz:n.z/o,born:t,strength:i}),this.points.length>fr&&this.points.pop()}clear(){this.points=[]}update(t){for(;this.points.length&&t-this.points[this.points.length-1].born>bf;)this.points.pop();const e=this.points.length;for(let i=0;i<fr;i++){const o=i*6;if(e===0){this.across[o+2]=this.across[o+5]=0;continue}const r=this.points[Math.min(i,e-1)],a=Math.min(1,(t-r.born)/bf),c=.45+Math.sqrt(a)*4.5,l=this.waves.height(r.x,r.z,t)+.03;this.pos[o]=r.x+r.sx*c,this.pos[o+1]=l,this.pos[o+2]=r.z+r.sz*c,this.pos[o+3]=r.x-r.sx*c,this.pos[o+4]=l,this.pos[o+5]=r.z-r.sz*c;const h=i<e?r.strength:0;this.across.set([1,a,h,-1,a,h],o)}const n=this.mesh.geometry;n.attributes.position.needsUpdate=!0,n.attributes.aWake.needsUpdate=!0}}const Pa=60,Ef=70,my=30,gy=1.5,La=90,xy=.6,vy=16;class yp{constructor(t){M(this,"input",{steer:0,throttle:0,leanX:0,leanZ:0});M(this,"lever",0);M(this,"tiltActive",!1);M(this,"layout","std");M(this,"tiltDeg",0);M(this,"touches",new Map);M(this,"keys",new Set);M(this,"layer");M(this,"leanPad");M(this,"leanKnob");M(this,"leverTrack");M(this,"steerPad");M(this,"steerKnob");M(this,"tiltAngle",0);M(this,"tiltZero",0);M(this,"tiltSmoothed",0);M(this,"lastMotion",0);M(this,"wheelDeg",0);M(this,"wheelPrev",null);M(this,"wheelEl");this.layer=t,this.leanPad=document.getElementById("lean-pad"),this.leanKnob=this.leanPad.querySelector(".knob"),this.leverTrack=document.getElementById("lever"),this.steerPad=document.getElementById("steer-pad"),this.steerKnob=this.steerPad.querySelector(".knob"),this.wheelEl=document.getElementById("wheel"),t.addEventListener("pointerdown",e=>this.down(e)),t.addEventListener("pointermove",e=>this.move(e)),t.addEventListener("pointerup",e=>this.up(e)),t.addEventListener("pointercancel",e=>this.up(e)),window.addEventListener("keydown",e=>this.keys.add(e.code)),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),window.addEventListener("devicemotion",e=>this.onMotion(e))}async enableTilt(){const t=window.DeviceMotionEvent;if(t!=null&&t.requestPermission)try{if(await t.requestPermission()!=="granted")return!1}catch{return!1}for(let e=0;e<15;e++){if(performance.now()-this.lastMotion<500)return this.recenter(),!0;await new Promise(n=>setTimeout(n,100))}return!1}get swap(){return this.layout!=="std"}recenter(){this.tiltZero=this.tiltAngle,this.tiltSmoothed=0}onMotion(t){var r;const e=t.accelerationIncludingGravity;if(!e||e.x==null||e.y==null)return;const n=(((r=screen.orientation)==null?void 0:r.angle)??window.orientation??0)*Math.PI/180,i=e.x*Math.cos(n)-e.y*Math.sin(n),o=e.x*Math.sin(n)+e.y*Math.cos(n);Math.hypot(i,o)<2||(this.tiltAngle=Math.atan2(-i,o)*180/Math.PI,this.lastMotion=performance.now())}zoneOf(t){const e=window.innerWidth;return t<e*.38?"lever":this.swap?!this.tiltActive&&t<e*.68?"lean":"steer":!this.tiltActive&&t<e*.68?"steer":"lean"}down(t){t.preventDefault();const e=this.zoneOf(t.clientX);for(const n of this.touches.values())if(n.role===e)return;try{this.layer.setPointerCapture(t.pointerId)}catch{}this.touches.set(t.pointerId,{id:t.pointerId,role:e,x0:t.clientX,y0:t.clientY,x:t.clientX,y:t.clientY,lever0:this.lever}),e==="lean"&&this.placePad(this.leanPad,t.clientX,t.clientY),e==="steer"&&this.layout==="wheel"?(this.wheelPrev=this.wheelAngleOf(t.clientX,t.clientY),this.wheelEl.classList.add("active")):e==="steer"&&this.placePad(this.steerPad,t.clientX,t.clientY),e==="lever"&&this.leverTrack.classList.add("active")}placePad(t,e,n){t.style.left=`${e}px`,t.style.top=`${n}px`,t.classList.add("active")}wheelAngleOf(t,e){const n=this.wheelEl.querySelector("svg").getBoundingClientRect(),i=t-(n.left+n.width/2),o=e-(n.top+n.height/2);return Math.hypot(i,o)<vy?null:Math.atan2(i,-o)*180/Math.PI}move(t){const e=this.touches.get(t.pointerId);if(e){if(e.x=t.clientX,e.y=t.clientY,e.role==="steer"&&this.layout==="wheel"){const n=this.wheelAngleOf(e.x,e.y);if(n!=null&&this.wheelPrev!=null){const i=(n-this.wheelPrev+540)%360-180;this.wheelDeg=Math.max(-La,Math.min(La,this.wheelDeg+i))}this.wheelPrev=n}if(e.role==="lever"){const n=this.leverTrack.getBoundingClientRect().height||200;this.lever=Math.max(0,Math.min(1,e.lever0-(e.y-e.y0)/n))}}}up(t){const e=this.touches.get(t.pointerId);e&&(this.touches.delete(t.pointerId),e.role==="lean"&&this.resetPad(this.leanPad,this.leanKnob),e.role==="steer"&&this.resetPad(this.steerPad,this.steerKnob),e.role==="steer"&&this.wheelEl.classList.remove("active"),e.role==="lever"&&this.leverTrack.classList.remove("active"))}resetPad(t,e){t.classList.remove("active"),t.style.left=t.style.top="",e.style.transform=""}update(t){const e=d=>this.keys.has(d),n=Math.exp(-t/.25);let i=this.input.leanX*n,o=this.input.leanZ*n,r=0,a=!1;for(const d of this.touches.values()){const f=d.x-d.x0,p=d.y-d.y0;d.role==="lean"?(i=Math.max(-1,Math.min(1,f/Pa)),o=Math.max(-1,Math.min(1,-p/Pa)),this.leanKnob.style.transform=`translate(${i*Pa}px, ${-o*Pa}px)`):d.role==="steer"&&this.layout==="wheel"?a=!0:d.role==="steer"&&(r=Math.max(-1,Math.min(1,f/Ef)),this.steerKnob.style.transform=`translateX(${r*Ef}px)`)}if(this.layout==="wheel"&&(a||(this.wheelDeg*=Math.exp(-t/xy)),r=this.wheelDeg/La),this.tiltActive){let d=this.tiltAngle-this.tiltZero;d=(d+540)%360-180,this.tiltDeg=d,d=Math.sign(d)*Math.max(0,Math.abs(d)-gy);const f=Math.max(-1,Math.min(1,d/my));this.tiltSmoothed+=(f-this.tiltSmoothed)*(1-Math.exp(-t*20)),this.swap?i=this.tiltSmoothed:r=this.tiltSmoothed}const c=(e("ArrowRight")||e("KeyD")?1:0)-(e("ArrowLeft")||e("KeyA")?1:0),l=(e("KeyE")?1:0)-(e("KeyQ")?1:0),h=(e("KeyR")?1:0)-(e("KeyF")?1:0),u=1-Math.exp(-t*8);c&&(r=this.input.steer+(c-this.input.steer)*u),c&&this.layout==="wheel"&&(this.wheelDeg=r*La),(l||h)&&(i=this.input.leanX+(l-this.input.leanX)*u,o=this.input.leanZ+(h-this.input.leanZ)*u),(e("ArrowUp")||e("KeyW"))&&(this.lever=Math.min(1,this.lever+t*1.5)),(e("ArrowDown")||e("KeyS"))&&(this.lever=Math.max(0,this.lever-t*1.5)),this.input.steer=r,this.input.leanX=i,this.input.leanZ=o,this.input.throttle=this.lever,this.leverTrack.querySelector(".fill").style.height=`${this.lever*100}%`,this.leverTrack.querySelector(".knob").style.bottom=`${this.lever*100}%`}}function Sp(s){const t=s.swap,e=document.getElementById("steer-pad"),n=document.getElementById("lean-pad");e.classList.toggle("swap",t),n.classList.toggle("swap",t);const i=s.layout==="wheel";e.hidden=i||(t?!1:s.tiltActive),n.hidden=t&&s.tiltActive;const o=document.getElementById("wheel");o.hidden=t&&!i,o.classList.toggle("grab",i)}function wp(s,t){const e=document.getElementById("wheel"),n=t*90;document.getElementById("wheel-rot").setAttribute("transform",`rotate(${n.toFixed(1)} 60 60)`);const i=n*Math.PI/180,o=60+54*Math.sin(i),r=60-54*Math.cos(i);document.getElementById("wheel-fill").setAttribute("d",`M 60 6 A 54 54 0 0 ${n>=0?1:0} ${o.toFixed(2)} ${r.toFixed(2)}`),e.classList.toggle("full",Math.abs(t)>.98);const a=t>.02?"右":t<-.02?"左":"";document.getElementById("wheel-label").textContent=s.layout==="wheel"?`${a} ${Math.abs(n).toFixed(0)}°`.trim():s.tiltActive?`${a} ${Math.abs(s.tiltDeg).toFixed(0)}°`.trim():`${a} ${Math.round(Math.abs(t)*100)}%`.trim()}function bp(s){const t=s.comW,e=s.vel,n=1.2;t.z<Hr+n&&Math.abs(t.x-Cu)<ay/2&&(s.shift(0,Hr+n-t.z),e.z=Math.abs(e.z)*.3,e.multiplyScalar(.6)),t.x<Ht.x0+n&&(s.shift(Ht.x0+n-t.x,0),e.x=Math.abs(e.x)*.3,e.multiplyScalar(.6)),t.x>Ht.x1-n&&(s.shift(Ht.x1-n-t.x,0),e.x=-Math.abs(e.x)*.3,e.multiplyScalar(.6)),t.z<Ht.z0+n&&(s.shift(0,Ht.z0+n-t.z),e.z=Math.abs(e.z)*.3,e.multiplyScalar(.6)),t.z>Ht.z1-n&&(s.shift(0,Ht.z1-n-t.z),e.z=-Math.abs(e.z)*.3,e.multiplyScalar(.6))}const kh="boatgame.prop",Oh="boatgame.tilt";function Ep(s){try{Object.assign(s.prop,JSON.parse(localStorage.getItem(kh)??"{}"));const t=Number(localStorage.getItem(Oh));Sr.includes(t)&&(s.tilt=t)}catch{}}const Mi=5e3,Tf=9.81,dn={Spray:0,Mist:1,Foam:2,Boil:3};class Iu{constructor(t){M(this,"points");M(this,"pos",new Float32Array(Mi*3));M(this,"vel",new Float32Array(Mi*3));M(this,"size",new Float32Array(Mi));M(this,"alpha",new Float32Array(Mi));M(this,"size0",new Float32Array(Mi));M(this,"life",new Float32Array(Mi));M(this,"maxLife",new Float32Array(Mi));M(this,"kind",new Uint8Array(Mi));M(this,"next",0);M(this,"material");M(this,"surface");M(this,"budget",0);M(this,"left",new A);M(this,"tmp",new A);this.surface=t;const e=new ze;e.setAttribute("position",new nn(this.pos,3).setUsage(Ar)),e.setAttribute("aSize",new nn(this.size,1).setUsage(Ar)),e.setAttribute("aAlpha",new nn(this.alpha,1).setUsage(Ar)),this.material=new si({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:400}},vertexShader:`
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
      `}),this.points=new h2(e,this.material),this.points.frustumCulled=!1}resize(t,e,n){this.material.uniforms.uScale.value=t*n/(2*Math.tan(e*Math.PI/360))}clear(){this.alpha.fill(0),this.life.fill(0)}spawn(t,e,n,i,o,r,a,c,l){if(this.budget<=0)return;this.budget--;const h=this.next;this.next=(this.next+1)%Mi;const u=h*3;this.pos[u]=e,this.pos[u+1]=n,this.pos[u+2]=i,this.vel[u]=o,this.vel[u+1]=r,this.vel[u+2]=a,this.kind[h]=t,this.size0[h]=c,this.size[h]=c,this.life[h]=l,this.maxLife[h]=l,this.alpha[h]=1}count(t){if(!(t>0))return 0;const e=Math.floor(Math.min(t,this.budget));return e+(e<this.budget&&Math.random()<t-e?1:0)}update(t,e,n){this.emit(t,e,n,600),this.step(t,e)}emit(t,e,n,i){this.budget=i,this.emitHull(t,e,n),this.emitProp(t,e,n)}emitHull(t,e,n){const i=n.hullFx,o=xs.FX_STRIDE;this.left.set(1,0,0).applyQuaternion(n.quat);const r=this.left.x,a=this.left.z,c=Math.hypot(r,a)||1,l=n.vel;for(let h=0;h<n.hull.length;h++){const u=n.hull[h],d=h*o,f=i[d],p=i[d+1],x=i[d+2],g=n.impact[h];g>0&&(n.impact[h]=0,g>.7&&this.splash(f,x,e,g,u.area,l));const m=i[d+11];if(m<=0)continue;const _=i[d+3],y=i[d+4],v=i[d+5],P=i[d+10],E=i[d+6],S=i[d+7],C=i[d+8],b=_-P*E,w=y-P*S,D=v-P*C,F=Math.hypot(b,w,D),k=Math.max(0,P),B=this.surface.height(f,x,e);if(u.side!==0){const V=r/c*u.side,$=a/c*u.side,st=Math.max(0,_*V+v*$);if(F<2.5&&st<.8&&k<.6)continue;const H=1+1.5*(1-m),ft=u.area*m*H*(.35*F+3*st+5*k),vt=.16*F+1.1*st+.6*k,Mt=.09*F+.9*st+1.4*k,at=this.count(ft*t*90),xt=l.x*.04,K=l.z*.04;for(let L=0;L<at;L++){const N=.7+Math.random()*.6,O=(Math.random()-.5)*.2;this.spawn(dn.Spray,f+V*.04+this.left.z*O,Math.max(p,B)+.02,x+$*.04-this.left.x*O,V*vt*N+xt+(Math.random()-.5)*.3*vt,Mt*(.6+Math.random()*.8),$*vt*N+K+(Math.random()-.5)*.3*vt,.035+Math.random()*.07,1.5),Math.random()<.2&&this.spawn(dn.Mist,f+V*.1,Math.max(p,B)+.05,x+$*.1,V*vt*.6,Mt*.5,$*vt*.6,.35+Math.random()*.4,.9+Math.random()*.6)}}else if(k>.8){const V=this.count(u.area*k*k*t*40);for(let $=0;$<V;$++){const st=Math.random()*Math.PI*2,H=k*(.3+Math.random()*.5);this.spawn(dn.Spray,f,Math.max(p,B)+.02,x,Math.cos(st)*H+l.x*.1,k*(.8+Math.random()*.8),Math.sin(st)*H+l.z*.1,.05+Math.random()*.08,1.5)}}}}splash(t,e,n,i,o,r){const a=this.surface.height(t,e,n),c=Math.min(70,Math.round(i*i*o*45));for(let h=0;h<c;h++){const u=Math.random()*Math.PI*2,d=i*(.35+Math.random()*.75);this.spawn(dn.Spray,t+Math.cos(u)*.15,a+.03,e+Math.sin(u)*.15,Math.cos(u)*d+r.x*.15,i*(.5+Math.random()*.8),Math.sin(u)*d+r.z*.15,.05+Math.random()*.1,1.5)}const l=Math.min(8,Math.round(i*o*6));for(let h=0;h<l;h++){const u=Math.random()*Math.PI*2;this.spawn(dn.Mist,t,a+.1,e,Math.cos(u)*i*.4+r.x*.1,i*.35,Math.sin(u)*i*.4+r.z*.1,.5+Math.random()*.5,.8+Math.random()*.5)}for(let h=0;h<4;h++){const u=Math.random()*Math.PI*2;this.spawn(dn.Foam,t+Math.cos(u)*.3,a,e+Math.sin(u)*.3,Math.cos(u)*.4,0,Math.sin(u)*.4,.35+Math.random()*.3,2+Math.random())}}emitProp(t,e,n){const i=n.propState,o=n.engineOmega/(2*Math.PI);if(o<5)return;const r=n.prop.diameter,a=n.propPos,c=n.propAxis,l=n.vel,h=this.surface.height(a.x,a.z,e),u=Math.PI*o*r,d=Math.max(0,Math.min(1,(.9-i.tipRatio)/.9)),f=n.propJet,p=d*d*o*4*(1+2*i.vent)*Math.min(1,n.throttle+.2),x=this.count(p*t);for(let _=0;_<x;_++){const y=u*.12*d*(.6+Math.random()*.7),v=(Math.random()-.5)*u*.08*d;this.spawn(dn.Spray,a.x-c.x*.2,h+.03,a.z-c.z*.2,l.x*.15-c.x*f+c.z*v,y,l.z*.15-c.z*f-c.x*v,.06+Math.random()*.1,2),Math.random()<.15&&this.spawn(dn.Mist,a.x-c.x*.4,h+.2,a.z-c.z*.4,l.x*.1,y*.5,l.z*.1,.5+Math.random()*.5,1+Math.random()*.5)}const g=i.cav*70+i.vent*140,m=this.count(g*t*Math.min(1,o/60));for(let _=0;_<m;_++){const y=.3+Math.random()*.6,v=(Math.random()-.5)*.35,P=a.x-c.x*y+c.z*v,E=a.z-c.z*y-c.x*v;this.spawn(dn.Boil,P,this.surface.height(P,E,e)+.02,E,-c.x*f*.4,0,-c.z*f*.4,.22+Math.random()*.25,.5+Math.random()*.6)}}step(t,e){const{pos:n,vel:i,life:o,maxLife:r,kind:a,alpha:c,size:l,size0:h}=this;for(let d=0;d<Mi;d++){if(o[d]<=0)continue;o[d]-=t;const f=d*3,p=1-o[d]/r[d];if(o[d]<=0){c[d]=0;continue}const x=a[d];if(x===dn.Spray||x===dn.Mist){const g=x===dn.Spray?.5:2.5,m=Math.exp(-g*t);if(i[f]*=m,i[f+2]*=m,i[f+1]=i[f+1]*m-(x===dn.Spray?Tf:Tf*.15)*t,n[f]+=i[f]*t,n[f+1]+=i[f+1]*t,n[f+2]+=i[f+2]*t,x===dn.Spray){if(c[d]=.85*Math.min(1,o[d]/.2),i[f+1]<0){const _=this.surface.height(n[f],n[f+2],e);if(n[f+1]<_){o[d]=0,c[d]=0,Math.random()<.18&&this.spawnFoam(n[f],_,n[f+2]);continue}}}else c[d]=.22*(1-p),l[d]=h[d]*(1+p*1.5)}else{const g=Math.exp(-2*t);i[f]*=g,i[f+2]*=g,n[f]+=i[f]*t,n[f+2]+=i[f+2]*t,n[f+1]=this.surface.height(n[f],n[f+2],e)+.02,l[d]=h[d]*(1+p*(x===dn.Boil?1.2:.8)),c[d]=(x===dn.Boil?.9:.55)*(1-p)**1.3}}const u=this.points.geometry;u.attributes.position.needsUpdate=!0,u.attributes.aSize.needsUpdate=!0,u.attributes.aAlpha.needsUpdate=!0}spawnFoam(t,e,n){this.budget++,this.spawn(dn.Foam,t,e+.02,n,0,0,0,.2+Math.random()*.25,1.5+Math.random()*1.5)}}const Tp=32,Ia=48,Da=32,ac=4,Af=.1;function _y(s,t,e,n,i){const o=new Float32Array(Ia),r=new Float32Array(Da);let a=0;for(let l=0;l<Ia;l++){let h=0;for(let u=0;u<Tp;u++)h+=s[a++]*t[u];o[l]=h}for(let l=0;l<Ia;l++)o[l]=Math.tanh(o[l]+s[a++]);for(let l=0;l<Da;l++){let h=0;for(let u=0;u<Ia;u++)h+=s[a++]*o[u];r[l]=h}for(let l=0;l<Da;l++)r[l]=Math.tanh(r[l]+s[a++]);const c=new Array(ac);for(let l=0;l<ac;l++){let h=0;for(let u=0;u<Da;u++)h+=s[a++]*r[u];c[l]=h}for(let l=0;l<ac;l++){const h=c[l]+s[a++];i&&(i[l]=h),c[l]=Math.tanh(h)}return c}const My=2.5;function yy(s){let t=0;for(let e=0;e<ac;e++){const n=Math.abs(s[e])-My;n>0&&(t+=n*n)}return t}function Sy(s){return{steer:s[0],throttle:.5+.5*s[1],leanX:s[2],leanZ:s[3]}}const wy=26,Na=24,wl=9,by=["逃げ","差し","まくり","まくり差し"];function Ey(s){const t=[s.mark,s.turn/6,s.lat/30,s.speed/25,s.toMark/60,s.rank/5],e=[...s.rivals].sort((n,i)=>n.dLat-i.dLat).slice(0,5);for(let n=0;n<5;n++){const i=e[n];i?t.push(i.ahead/25,i.dLat/20,i.dSpeed/10,1):t.push(0,0,0,0)}return t}function Ty(s,t){let e=0;const n=new Array(Na);for(let o=0;o<Na;o++){let r=0;for(let a=0;a<wy;a++)r+=s[e++]*t[a];n[o]=r}for(let o=0;o<Na;o++)n[o]=Math.tanh(n[o]+s[e++]);const i=new Array(wl);for(let o=0;o<wl;o++){let r=0;for(let a=0;a<Na;a++)r+=s[e++]*n[a];i[o]=r}for(let o=0;o<wl;o++)i[o]+=s[e++];return i}const za=s=>1/(1+Math.exp(-s));function Ay(s,t){const e=Ty(s,Ey(t));let n=0;for(let i=1;i<4;i++)e[i]>e[n]&&(n=i);return{tactic:by[n],R:12+12*za(e[4]),clear:1.8+5*za(e[5]),dv:16*Math.tanh(e[6]),brake:.15+.6*za(e[7]),wait:2*za(e[8]-2)}}const Gr={t:[-2,-1.7,-1.5,-1.2,-1,-.7,-.5,-.2,0,.3,.5,.8,1,1.3,1.5,1.8,2,2.3,2.5,2.8,3,3.3,3.5,3.8,4,4.3,4.5,4.8,5,5.3,5.5,5.8,6,6.3,6.5,6.8,7,7.3,7.5,7.8,8,8.3,8.5,8.8,9,9.3,9.5,9.8,10,10.3,10.5,10.8,11],x:[-82.5,-77.2,-71.9,-66.4,-61,-55.5,-49.8,-44.6,-39.2,-34,-29.1,-24.6,-20.3,-16.4,-12.8,-9.5,-6.8,-4.1,-2,0,1.7,3,3.7,4.3,4.8,4.6,4,3,1.8,.2,-1.5,-3.7,-5.7,-7.9,-10.7,-13.3,-16.1,-19.6,-22.9,-26.7,-30.7,-34.9,-39.6,-44.6,-49.6,-54.9,-60,-65.1,-70.4,-75.6,-80.6,-86,-91.7],y:[-35.4,-35.2,-35.1,-35,-34.8,-34.5,-34,-33.4,-32.3,-31.4,-30.3,-29.2,-28,-27,-26,-24.8,-23.3,-21.4,-19.8,-17.6,-15.4,-13.2,-10.7,-8.1,-5.5,-2.6,.7,3.7,6.3,8.7,11.1,13.7,16.3,18.5,20.7,23,25.1,27.2,28.7,30,31.1,32,32.7,33.5,34.1,35.3,35.8,36.2,36.3,36.5,36.7,37,37.3],th:[0,.5,.8,1.2,1,1.5,1.5,2.5,3.4,5.4,7.9,9.7,12,13.6,17.5,20.9,25.5,30.1,36.1,42.6,50.6,59,68.5,77.5,87.5,96.6,103.7,109.3,113.9,118.6,123.6,126.6,130.4,135.1,139,143.6,148.1,153,156.7,159.8,161.6,163.5,164.7,166,166.8,168.2,168.9,169.7,170.5,170.7,172,172.2,172.2]},$i=32,Ap=27,Ry=hn[0],Cy=hn[1],Bh=Ry.z-Ap,Ws=Cy.z+Ap,Pn=Bh-Ws,Ci=Math.PI*$i,yc=hn[0].x,Wr=yc-$i,Rp=yc+$i,Ti=2*Pn+2*Ci,Vh=Yn,$o=3,Cp=Vh-Ws;function Ns(s,t){if(s<0)return t.x=Wr,t.z=Ws+s,t.ox=-1,t.oz=0,t.tx=0,t.tz=1,t.turn=!1,t;let e=s%Ti;if(e<Pn)return t.x=Wr,t.z=Ws+e,t.ox=-1,t.oz=0,t.tx=0,t.tz=1,t.turn=!1,t;if(e-=Pn,e<Ci){const i=e/$i;return t.ox=-Math.cos(i),t.oz=Math.sin(i),t.x=yc+$i*t.ox,t.z=Bh+$i*t.oz,t.tx=Math.sin(i),t.tz=Math.cos(i),t.turn=!0,t}if(e-=Ci,e<Pn)return t.x=Rp,t.z=Bh-e,t.ox=1,t.oz=0,t.tx=0,t.tz=-1,t.turn=!1,t;e-=Pn;const n=e/$i;return t.ox=Math.cos(n),t.oz=-Math.sin(n),t.x=yc+$i*t.ox,t.z=Ws+$i*t.oz,t.tx=-Math.sin(n),t.tz=-Math.cos(n),t.turn=!0,t}function Py(s,t,e){const n={x:0,z:0,ox:0,oz:0,tx:0,tz:0,turn:!1};let i=e,o=1/0;for(let r=-2;r<=40;r+=.5){Ns(e+r,n);const a=(n.x-s)**2+(n.z-t)**2;a<o&&(o=a,i=e+r)}return i}function Ly(s){if(s<0)return-s+Pn;const t=s%Ti,e=[Pn,Pn+Ci+Pn,Ti+Pn];for(const n of e)if(n>t)return n-t;return 0}const bl=4.5,Iy={逃げ:{R:17,clear:2.2,dv:0,brake:.3,hold:1,aim:3,exit:0},差し:{R:15,clear:3.2,dv:-4,brake:.2,hold:1,aim:bl,exit:-6},まくり:{R:22,clear:5.5,dv:4,brake:.5,hold:1,aim:bl,exit:6},まくり差し:{R:15,clear:3.2,dv:0,brake:.3,hold:1,aim:bl,exit:-3}},Rf=1.8,Dy=4,Ny=-19.3,Cf=-10,El=37,zy=6,Uy=1.2,Fy=2,Qe=()=>globalThis.__raceTune??{},Hh=()=>Qe().lane??Dy,Er=s=>(Qe().laneBase??Ny)+(s-1)*Hh(),Ua=s=>Wr+1-Er(s),ky={R:19,exit:3},Oy={逃げ:-3.5,差し:1,まくり:-2.5,まくり差し:-.5},By=9.5,Vy=14,Hy=45*Math.PI/180,Pf=3.5,Ye={x:0,z:0,ox:0,oz:0,tx:0,tz:0,turn:!1},Lf=Gr.t.length,If=Gr.t.findIndex(s=>s>=0);function Fa(s,t,e){const n=Gr.y[t];return e.x=Gr.x[t]+s.rxs,e.y=n<0?n*s.rys:n*s.rye,e}function Gy(s,t){const i=a=>28*a-(28-t)*5.5*(1-Math.exp(-a/5.5));let o=0,r=30;for(let a=0;a<30;a++){const c=(o+r)/2;i(c)<s?o=c:r=c}return r}function Df(s){return Gh(s)===1?Rp+Wr:0}function Gh(s){return s<0||s%Ti<Pn+Ci?0:1}class Wy{constructor(t,e){M(this,"lane");M(this,"course");M(this,"skill");M(this,"s",0);M(this,"laps",0);M(this,"finished",!1);M(this,"finishTime",0);M(this,"flying",!1);M(this,"capsized",!1);M(this,"tactics",[]);M(this,"tactic",null);M(this,"lat",0);M(this,"policy",null);M(this,"control",null);M(this,"ctrlPre",[0,0,0,0]);M(this,"ctrlSat",0);M(this,"ctrlN",0);M(this,"ctrlT",0);M(this,"rounded",[!0,!0]);M(this,"ctrlHold",{steer:0,throttle:1,leanX:0,leanZ:0});M(this,"apexAt",null);M(this,"apexInside",[]);M(this,"dMin",1/0);M(this,"dMinTime",0);M(this,"labelPending",!1);M(this,"lastPlanS",-1/0);M(this,"bias",0);M(this,"upsideTime",0);M(this,"offset");M(this,"turnTime",0);M(this,"steerTime",0);M(this,"leanX",0);M(this,"plan",null);M(this,"armed",!0);M(this,"launched",!1);M(this,"input",{steer:0,throttle:0,leanX:0,leanZ:0});this.lane=t,this.course=t,this.skill=e,this.offset=Er(t)}startPos(){return{x:Wr+1-Er(this.lane),z:Vh-85}}beginRace(t,e,n){this.course=n,this.s=e-Ws,Ns(this.s,Ye),this.offset=(t-Ye.x)*Ye.ox+(e-Ye.z)*Ye.oz,this.launched=!0}get progress(){return this.s-Cp}get turnPlan(){return this.plan}reset(){const t=this.startPos();this.s=t.z-Ws,this.laps=0,this.finished=!1,this.flying=!1,this.capsized=!1,this.upsideTime=0,this.turnTime=this.steerTime=this.leanX=0,this.course=this.lane,this.offset=Er(this.course),this.plan=null,this.armed=!0,this.launched=!1,this.tactics=[],this.tactic=null,this.apexAt=null,this.labelPending=!1,this.lastPlanS=-1/0,this.dMin=1/0}makePlan(t,e,n,i,o){const r=hn[t],a=0,c=t===0?1:-1,l=c,h=0,u=(at,xt)=>-((at-r.x)*l+(xt-r.z)*h),d=u(e.x,e.z),f=[];for(const at of o){if(at.cpu===this||at.cpu.capsized||at.cpu.finished)continue;const xt=at.ph.comW,K=(xt.x-e.x)*a+(xt.z-e.z)*c;if(Math.abs(K)>25)continue;const L=u(xt.x,xt.z);L<d-1&&f.push({lat:L,ahead:K})}const p=this.skill;let x;if(f.length===0)x="逃げ";else{const at=Math.max(...f.map(L=>L.ahead)),xt=f.reduce((L,N)=>N.lat>L.lat?N:L),K=7-p.aggression*3;at<-K-3?x="逃げ":at<-K?x="まくり":f.length>=2&&xt.ahead<-K*.6?x="まくり差し":x="差し",this.tactics.length===0&&t===0&&(this.course===3||this.course===5)&&x==="差し"&&at<4&&(x=at<-K*.5?"まくり":"まくり差し")}globalThis.__cpuDebug&&console.log(`[${this.lane}] mark${t} lat${d.toFixed(1)} inside:${f.map(at=>at.lat.toFixed(1)+"/"+at.ahead.toFixed(1)).join(" ")} → ${x}`);const g={...Iy[x]};if(x==="逃げ"&&o.some(xt=>{if(xt.cpu===this||xt.cpu.capsized||xt.cpu.finished)return!1;const K=xt.ph.comW,L=(K.x-e.x)*a+(K.z-e.z)*c,N=u(K.x,K.z)-d;return L>-1&&L<10&&N>0&&N<12})&&Object.assign(g,ky),x==="逃げ"){const at=Qe();at.nigeDv!==void 0&&(g.dv=at.nigeDv),at.nigeAim!==void 0&&(g.aim=at.nigeAim),at.nigeBrake!==void 0&&(g.brake=at.nigeBrake),at.nigeR!==void 0&&(g.R=at.nigeR)}const m=Qe().aimScale??(An?0:1);g.aim*=m;let _=null;if(this.policy){const at=[];let xt=0;for(const K of o){if(K.cpu===this||K.cpu.capsized||K.cpu.finished)continue;const L=K.ph.comW;K.cpu.s>this.s&&xt++,at.push({ahead:(L.x-e.x)*a+(L.z-e.z)*c,dLat:u(L.x,L.z)-d,dSpeed:K.ph.speed()-n})}_=Ay(this.policy,{mark:t,turn:this.tactics.length,lat:d,speed:n,toMark:(r.x-e.x)*a+(r.z-e.z)*c,rank:xt,rivals:at}),x=_.tactic,Object.assign(g,{R:_.R,clear:_.clear,dv:_.dv,brake:_.brake,aim:0})}p.seed=p.seed*16807%2147483647;const y=!_&&p.seed%1e3/1e3<p.slip?2.5+(p.seed>>10)%1e3/250:0;let v=_?_.clear:Math.max(2,g.clear-(p.tight-.5)*1.6)+y+(An?Qe().v2Clear??1:0);const P=(r.x-e.x)*a+(r.z-e.z)*c,E=i+Math.max(0,P)/Math.max(8,n),S=o.filter(at=>{var xt;return at.cpu!==this&&((xt=at.cpu.turnPlan)==null?void 0:xt.mark)===t});let C=_?_.wait:0;if(!_&&x==="差し"){let at=null,xt=-1/0;for(const K of S){const L=u(K.ph.comW.x,K.ph.comW.z);L<d&&L>xt&&(at=K,xt=L)}at&&(C=Math.max(0,at.cpu.turnPlan.apexTime+1.6-E))}if(_){const at=[];for(const L of o){if(L.cpu===this||L.cpu.capsized||L.cpu.finished)continue;const N=L.ph.comW,O=(N.x-e.x)*a+(N.z-e.z)*c;if(Math.abs(O)>25||u(N.x,N.z)>=d-1)continue;const X=L.cpu.turnPlan,ot=(r.x-N.x)*a+(r.z-N.z)*c;at.push(X&&X.mark===t?X.apexTime:i+Math.max(0,ot)/Math.max(8,L.ph.speed()))}const xt=E+C;this.apexInside=o.filter(L=>{if(L.cpu===this||L.cpu.capsized||L.cpu.finished)return!1;const N=L.ph.comW;return Math.abs((N.x-e.x)*a+(N.z-e.z)*c)<=25&&u(N.x,N.z)<d-1}).map(L=>L.cpu),this.labelPending=!0;const K=at.filter(L=>L<xt-.3).length;x=at.length===0?"逃げ":K===0?Math.max(...f.map(L=>L.ahead))<-10?"逃げ":"まくり":K===at.length?"差し":"まくり差し",globalThis.__cpuDebug&&console.log(`[${this.lane}] ${t+1}M ${x} R${_.R.toFixed(1)} 間隔${_.clear.toFixed(1)} 速さ${_.dv.toFixed(1)} レバー${_.brake.toFixed(2)} 待つ${_.wait.toFixed(2)} 頂点${(xt-i).toFixed(2)}s 内の艇${at.map(L=>(L-i).toFixed(2)).join(",")}`)}if(!_)for(const at of S){const xt=at.cpu.turnPlan;Math.abs(E+C-xt.apexTime)<.9&&u(at.ph.comW.x,at.ph.comW.z)<d+1&&(v=Math.max(v,xt.clear+2.8))}const b=Math.max(.5,d);let w=v-g.aim;const D=An&&!_&&this.tactics.length>0;let F=g.R,k=0;for(let at=0;at<2;at++){F=D?Math.max(12,(b+El+g.exit)/2,(b+w)/2+.5):Math.max(g.R,(b+w)/2+.5),k=Math.acos(Math.max(-1,Math.min(1,(F-b)/(F-w))));const xt=g.aim-(g.aim-1.5)*Math.max(0,Math.min(1,(k-Math.PI/3)/(Math.PI/3)));w=v-xt}const B=-Math.cos(k)*l+Math.sin(k)*a,V=-Math.cos(k)*h+Math.sin(k)*c,$=D?60+(p.entrySpeed-49)+g.dv-Math.min(10,C*12):Math.sqrt((Qe().turnAcc??(An?Vy:By))*F)*3.6+(_?0:p.entrySpeed-49)+g.dv-Math.min(10,C*12);this.tactics.push(x),this.tactic=_?null:x;const st=_?_.brake:g.brake+(.8-g.brake)*p.grip*.6,H=x==="逃げ"?(Qe().nigeEarly??Fy)*m:0,ft=Math.max(.15,b/32),vt=Math.max(.3,Math.min(El,Math.max(Qe().exitMin??25,b+El-32))+g.exit)/37,Mt=Oy[x]+Math.min(4,v-3.2)+Math.min(4,C*3);return{mark:t,tactic:x,cx:r.x-(F-w)*B-H*a,cz:r.z-(F-w)*V-H*c,R:F,dx:a,dz:c,lx:l,lz:h,entry:$,clear:v,apexTime:E+C,brake:st,hold:g.hold,real:D,rys:ft,rye:vt,rxs:Mt,ri:0}}planTarget(t,e,n,i,o){if(t.real)return this.realTarget(t,e,n,i*(Qe().realLook??1),o);const r=Math.max(6,t.R+this.bias),a=e-t.cx,c=n-t.cz,l=a*t.dx+c*t.dz,h=-(a*t.lx+c*t.lz);let u,d;l<0&&h>0?(u=l,d=l/r):(d=Math.atan2(l,h),d<-Math.PI/2&&(d+=2*Math.PI),u=d*r);const f=u+i;if(f<=0)o.x=t.cx-r*t.lx+f*t.dx,o.z=t.cz-r*t.lz+f*t.dz;else if(f<=Math.PI*r){const p=f/r;o.x=t.cx+r*(-Math.cos(p)*t.lx+Math.sin(p)*t.dx),o.z=t.cz+r*(-Math.cos(p)*t.lz+Math.sin(p)*t.dz)}else{const p=f-Math.PI*r;o.x=t.cx+r*t.lx-p*t.dx,o.z=t.cz+r*t.lz-p*t.dz}return d}realTarget(t,e,n,i,o){const r=hn[t.mark],a=(e-r.x)*t.dx+(n-r.z)*t.dz,c=(e-r.x)*t.lx+(n-r.z)*t.lz,l={...t,rys:t.rys+this.bias/32,rye:t.rye+this.bias/37},h={x:0,y:0},u={x:0,y:0};let d=t.ri,f=1/0;for(let _=t.ri;_<Math.min(Lf,t.ri+12);_++){Fa(l,_,h);const y=(h.x-a)**2+(h.y-c)**2;y<f&&(f=y,d=_)}t.ri=d;let p=i,x=d;Fa(l,x,h);let g=h.x,m=h.y;for(;p>0&&x<Lf-1;){Fa(l,x+1,u);const _=Math.hypot(u.x-g,u.y-m);_>=p?(g+=(u.x-g)*p/_,m+=(u.y-m)*p/_,p=0):(p-=_,g=u.x,m=u.y,x++)}return p>0&&(g-=p),o.x=r.x+g*t.dx+m*t.lx,o.z=r.z+g*t.dz+m*t.lz,d<If?(Fa(l,If,u),-Math.hypot(u.x-a,u.y-c)/30):Gr.th[d]*Math.PI/180}squeezed(t,e,n){for(const i of n){if(i.cpu===this||i.cpu.capsized)continue;const o=i.ph.comW.x-t.x,r=i.ph.comW.z-t.z,a=o*e.x+r*e.z,c=o*e.z-r*e.x;if(Math.abs(a)<4&&c>.5&&c<3.2)return!0}return!1}controlObs(t,e){const n=new Array(Tp).fill(0),i=t.forward(new A),o=i.x,r=i.z,a=Math.hypot(o,r)||1,c=o/a,l=r/a,h=(S,C)=>[S*c+C*l,S*l-C*c],u=t.comW,[d,f]=h(t.vel.x,t.vel.z),p=t.attitude();n[0]=d/25,n[1]=f/10,n[2]=t.angVel.y/2,n[3]=p.heel/30,n[4]=p.trim/10,n[5]=t.rpm/6600,n[6]=t.throttle,n[7]=t.steerAngle/.5,n[8]=(t.riderB.x-qn.x)/.55,n[9]=(t.riderB.z-qn.z)/.3;const x={x:0,z:0,ox:0,oz:0,tx:0,tz:0,turn:!1};let g=10;for(const S of[10,25,50]){Ns(this.s+S,x);const[C,b]=h(x.x-u.x,x.z-u.z);n[g++]=C/50,n[g++]=b/50}Ns(this.s+25,x);const[m,_]=h(x.tx,x.tz);n[16]=m,n[17]=_;const y=hn[Gh(this.s)],[v,P]=h(y.x-u.x,y.z-u.z);n[18]=v/100,n[19]=P/100,n[20]=Math.hypot(v,P)/100,n[21]=this.lat/30;const E=e.filter(S=>S.cpu!==this&&!S.cpu.capsized).map(S=>({o:S,d:Math.hypot(S.ph.comW.x-u.x,S.ph.comW.z-u.z)})).filter(S=>S.d<40).sort((S,C)=>S.d-C.d).slice(0,2);g=22;for(let S=0;S<2;S++){const C=E[S];if(C){const[b,w]=h(C.o.ph.comW.x-u.x,C.o.ph.comW.z-u.z),[D]=h(C.o.ph.vel.x-t.vel.x,C.o.ph.vel.z-t.vel.z);n[g++]=b/30,n[g++]=w/30,n[g++]=D/10,n[g++]=1}else g+=4}return n[30]=this.s%Ti/Ti,n[31]=1,n}update(t,e,n,i=[]){var K;const o=this.skill,r=this.input,a=1-2*(e.quat.x*e.quat.x+e.quat.z*e.quat.z);if(this.upsideTime=a<.15?this.upsideTime+t:0,this.upsideTime>1&&(this.capsized=!0),this.capsized){r.steer=r.throttle=r.leanX=r.leanZ=0;return}const c=e.comW;if(this.s=Py(c.x,c.z,this.s),this.s>=0){const L=this.s%Ti,N=this.s-L;for(const[O,X]of[[0,Pn],[1,2*Pn+Ci]]){const ot=hn[O],rt=O===0?c.z>=ot.z:c.z<=ot.z;L>=X-30&&L<X&&(this.rounded[O]=!1),rt&&(this.rounded[O]=!0);const ut=N+X+Ci/2;L>=X+Ci/2&&L<X+Ci+Pn*.5&&!this.rounded[O]&&(this.s=Math.min(this.s,ut))}}Ns(this.s,Ye),this.lat=(c.x-Ye.x)*Ye.ox+(c.z-Ye.z)*Ye.oz;const l=e.speed()*3.6;if(n<0&&this.progress>0&&(this.flying=!0),this.laps=Math.max(0,Math.floor(this.progress/Ti)),!this.finished&&this.progress>=$o*Ti&&(this.finished=!0,this.finishTime=n),!this.launched&&n<0){r.throttle=.12;const L=Vh-c.z;-n+o.st<=Gy(L,e.speed())&&(this.launched=!0)}n>=0&&(this.launched=!0);const h=Ly(this.s);if(h>60&&this.s>this.lastPlanS+150&&(this.armed=!0),!this.plan&&this.armed&&h<50&&n>0&&!this.finished&&(this.dMin=1/0,this.labelPending=!1,this.plan=this.makePlan(Gh(this.s),c,e.speed(),n,i),this.lastPlanS=this.s,this.armed=!1,this.turnTime=0),this.plan){const L=hn[this.plan.mark],N=Math.hypot(c.x-L.x,c.z-L.z);if(N<this.dMin)this.dMin=N,this.dMinTime=n;else if(N>this.dMin+1&&((!this.apexAt||this.apexAt.time!==this.dMinTime)&&(this.apexAt={mark:this.plan.mark,time:this.dMinTime}),this.labelPending)){this.labelPending=!1;const O=this.apexInside.filter(rt=>!rt.capsized),X=O.filter(rt=>rt.apexAt&&rt.apexAt.mark===this.plan.mark&&Math.abs(rt.apexAt.time-this.dMinTime)<8&&rt.apexAt.time<this.dMinTime-.2).length,ot=O.length===0?"逃げ":X===0?"まくり":X===O.length?"差し":"まくり差し";this.tactic=ot,this.tactics[this.tactics.length-1]=ot}}const u=6+e.speed()*.35,d={x:0,z:0};let f=-1;const p=this.plan;if(p){f=this.planTarget(p,c.x,c.z,u,d);const L=Math.abs(Math.atan2(-(e.vel.x*p.lx+e.vel.z*p.lz),e.vel.x*p.dx+e.vel.z*p.dz));(f>165*Math.PI/180||e.speed()>3&&L>165*Math.PI/180)&&(Ns(this.s,Ye),this.offset=Math.max(Cf-Df(this.s),(c.x-Ye.x)*Ye.ox+(c.z-Ye.z)*Ye.oz),this.plan=null,this.tactic=null)}if(!this.plan){let L=this.tactics.length===0?Er(this.course):this.offset;const N=Df(this.s);if(n>3){let O=null,X=35;for(const ot of i){if(ot.cpu===this||ot.cpu.capsized)continue;const rt=ot.cpu.s-this.s;rt>2&&rt<X&&Math.abs(ot.cpu.lat-this.lat)<2.5&&(O=ot,X=rt)}if(!O&&h<300)L=-N;else if(O){const ot=O.cpu.lat-Hh(),rt=O.cpu.lat+Hh(),ut=tt=>i.some(wt=>wt.cpu!==this&&!wt.cpu.capsized&&Math.abs(wt.cpu.s-this.s)<10&&Math.abs(wt.cpu.lat-tt)<3);L=ot>Cf-N&&!ut(ot)?ot:ut(rt)?this.lat:rt}}for(const O of i){const X=O.cpu.s-this.s;O.cpu===this||O.cpu.capsized||X>8||X<-4||(L<this.lat&&O.cpu.lat<this.lat&&O.cpu.lat>L-3.5&&(L=Math.max(L,O.cpu.lat+3.5)),L>this.lat&&O.cpu.lat>this.lat&&O.cpu.lat<L+3.5&&(L=Math.min(L,O.cpu.lat-3.5)))}this.offset+=(L-this.offset)*Math.min(1,t*.3),Ns(this.s+u,Ye),d.x=Ye.x+Ye.ox*this.offset,d.z=Ye.z+Ye.oz*this.offset}const x=!!this.plan&&f>=0,g=this.plan&&f<0?-f*(this.plan.real?30:this.plan.R):0,m=e.forward(new A);let _=0,y=0,v=!1;if(this.plan){const L=[];for(const O of i){if(O.cpu===this||O.cpu.capsized)continue;const X=O.ph.comW.x-c.x,ot=O.ph.comW.z-c.z,rt=X*m.x+ot*m.z,ut=X*m.z-ot*m.x;Math.abs(rt)<14&&Math.abs(ut)<6&&L.push({o:O,a:rt,l:ut})}const N=!L.some(O=>O.l>.5&&O.l<4&&Math.abs(O.a)<6);for(const{o:O,a:X,l:ot}of L){const rt=(e.vel.x-O.ph.vel.x)*m.x+(e.vel.z-O.ph.vel.z)*m.z;if(X>1&&X<12&&Math.abs(ot)<2.6&&(x?_=N?Math.min(_,-2):Math.max(_,2.8):y=Math.max(y,(rt>0?1:.3)*(1-X/12))),x&&Math.abs(X)<3.5&&ot>.5&&ot<4.5)if(this.plan.real)_=Math.max(_,3);else{const ut=Math.hypot(O.ph.comW.x-this.plan.cx,O.ph.comW.z-this.plan.cz);_=Math.max(_,ut+2.8-this.plan.R)}X>.5&&X<4&&ot<-.5&&ot>-4.5&&(v=!0)}}_=Math.max(-3,Math.min(6,_)),this.bias+=(_-this.bias)*Math.min(1,t*2),this.plan||(this.bias=0),this.plan&&!x&&this.squeezed(c,m,i)&&(d.x=c.x+this.plan.dx*u,d.z=c.z+this.plan.dz*u);for(const L of hn){const N=d.x-c.x,O=d.z-c.z,X=Math.hypot(N,O),ot=L.x-c.x,rt=L.z-c.z,ut=Math.hypot(ot,rt),tt=An?Qe().v2ClearM??Rf:Rf;if(tt<=0||X<.001||ut<.001||ut>X+tt)continue;const wt=Math.atan2(N,O),U=Math.atan2(ot,rt);let Et=wt-U;if(Et>Math.PI&&(Et-=2*Math.PI),Et<-Math.PI&&(Et+=2*Math.PI),Math.abs(Et)>Math.PI/2)continue;const Wt=ut<=tt?Math.PI/2:Math.asin(tt/ut);if(Et>-Wt){const $t=U-Wt;d.x=c.x+Math.sin($t)*X,d.z=c.z+Math.cos($t)*X}}const P=e.forward(new A),E=d.x-c.x,S=d.z-c.z;let b=Math.atan2(P.x*S-P.z*E,P.x*E+P.z*S)/.4+.3*e.angVel.y;const w=e.vel,D=An&&e.speed()>5?Math.atan2(P.x*w.z-P.z*w.x,P.x*w.x+P.z*w.z):0,F=An&&e.speed()>5&&(!!this.plan||D>.26);if(F){const L=Math.atan2(w.x*S-w.z*E,w.x*E+w.z*S),N=!!((K=this.plan)!=null&&K.real);b=L/(Qe().slideGain??(N?.55:.4))+(Qe().slideDamp??(N?.4:.15))*e.angVel.y,b=Math.max(b,-((Qe().driftMax??Hy*(180/Math.PI))*(Math.PI/180)-D)/.2)}if(x&&this.plan&&!this.plan.real){const L=Math.hypot(c.x-this.plan.cx,c.z-this.plan.cz)-(this.plan.R+this.bias);(!An||L>0)&&(b-=.15*L)}if(b=Math.max(-1,Math.min(1,b)),An&&this.plan&&l>this.plan.entry+6){const L=Math.max(.3,1-(l-this.plan.entry-6)/12);b=Math.max(-L,Math.min(L,b))}let k=0,B=0;for(const L of i){if(L.ph===e||L.cpu.capsized)continue;const N=L.ph.comW.x-c.x,O=L.ph.comW.z-c.z,X=Math.hypot(N,O);if(X>8||X<.1||(N*P.x+O*P.z)/X<Math.cos(.6))continue;const rt=(P.x*O-P.z*N)/X;k=Math.max(k,1-X/8),B+=rt>0?-1:1}k>0&&!x&&(b=Math.max(-1,Math.min(1,b+Math.sign(B)*.35*k))),!this.plan&&!F&&(b=Math.max(-.45,Math.min(.45,b)));const V=b<0||F?e.attitude().heel:-e.attitude().heel,$=An?Math.max(0,Math.min(1,(V-5)/10)):Math.max(0,Math.min(1,(V-8)/12));$>0&&(b*=1-.7*$);const st=Math.max(0,Math.min(1,(-V-(Qe().rescueInHeel??6))/10));st>0&&(b*=1-.5*st),An&&(this.plan||F)&&(b=Math.min(b,.4));const H=2.5*t;if(r.steer=this.launched?r.steer+Math.max(-H,Math.min(H,b-r.steer)):0,this.launched){x&&(this.turnTime+=t);let L=1;const N=e.speed(),O=p?p.entry/3.6:0,X=p?An&&!this.policy?Math.min(p.brake,.3):p.brake:1,ot=p?Pf*Math.max(.25,(1-X)/.65):Pf,rt=(N*N-O*O)/(2*ot)+o.brakeMargin;if(p!=null&&p.real){const ut=(Qe().liftThr??.2)+.25*o.grip;!x&&g<(Qe().liftLead??zy)*(l/80)+o.brakeMargin&&(L=ut);const tt=Math.atan2(-(w.x*p.lx+w.z*p.lz),w.x*p.dx+w.z*p.dz);x&&(L=Math.abs(tt)<(Qe().liftPsi??Uy)&&this.turnTime<4?ut:p.hold)}else p&&!x&&g<rt&&l>p.entry&&(L=X),p&&x&&(L=Qe().fullTurn||this.turnTime>=o.regrip*(1-.5*o.grip)?p.hold:.55+.3*o.grip);p&&!x&&y>0&&(L=Math.min(L,1-.7*y)),p&&x&&v&&this.turnTime>o.regrip*.5&&(L=Math.max(L,.75)),k>0&&(L=Math.min(L,1-.6*k)),$>0&&!(An&&Qe().rescueKeep!==0)&&(L=Math.min(L,1-.6*$)),r.throttle=L}const ft=(Math.abs(b)>.45||F&&D>.26)&&l>25;this.steerTime=ft?this.steerTime+t:0;const vt=Math.max(0,Math.min(1,(l-25)/25));let Mt=ft&&this.steerTime>o.leanDelay?(F&&D>.26?-1:Math.sign(b))*vt:0;An&&this.plan&&(Mt=Math.min(0,Mt));const at=t/Math.max(.05,Mt!==0?o.leanSpeed:.8);this.leanX+=Math.max(-at,Math.min(at,Mt-this.leanX)),st>0&&(this.leanX*=1-Math.min(1,t*8*st)),r.leanX=this.leanX,r.leanZ=!ft&&l<50&&this.launched?.4:0;const xt=globalThis.__ctrlRecord;if((this.control||xt)&&this.launched&&n>0&&!this.finished){if(this.ctrlT+=t,this.ctrlT>=Af){this.ctrlT-=Af;const L=this.controlObs(e,i);xt&&xt(this,L,r),this.control&&(Object.assign(this.ctrlHold,Sy(_y(this.control,L,void 0,void 0,this.ctrlPre))),this.ctrlSat+=yy(this.ctrlPre),this.ctrlN++)}this.control&&(r.steer=this.ctrlHold.steer,r.throttle=this.ctrlHold.throttle,r.leanX=this.ctrlHold.leanX,r.leanZ=this.ctrlHold.leanZ)}this.finished&&(r.throttle=.25,r.leanX=this.leanX=0)}}function Wh(s){let t=s;const e=()=>(t=t*16807%2147483647,t%1e4/1e4);return["白","黒","赤","青","黄","緑"].map(i=>({name:i,entrySpeed:46+e()*6,brakeMargin:-2+e()*6,leanDelay:.15+e()*.3,leanSpeed:.15+e()*.3,tight:e(),aggression:e(),regrip:.3+e()*.6,grip:e(),slip:.08+e()*.17,seed:1+Math.floor(e()*1e5),st:.05+e()*.15+(e()<.15?.1+e()*.15:0)}))}function Pp(s,t){return t?s.tactics[0]??"逃げ":"抜き"}const Nf=Pn+Ci+40-Cp,fs=di.map(()=>new A),ka=di.map(()=>new A),Xh=new A;function Xy(s,t){for(let a=0;a<di.length;a++)s.toWorld(Xh.set(0,0,di[a].z),fs[a]),t.toWorld(Xh.set(0,0,di[a].z),ka[a]);let e=-1/0,n=0,i=0,o=0,r=0;for(let a=0;a<fs.length;a++)for(let c=0;c<ka.length;c++){const l=ka[c].x-fs[a].x,h=ka[c].z-fs[a].z,u=Math.hypot(l,h),d=di[a].r+di[c].r-u;d>e&&u>1e-4&&(e=d,n=a,i=c,o=l/u,r=h/u)}return{pen:e,ia:n,ib:i,nx:o,nz:r}}const $y=.3,qy=.15,Rs=new A,yi=new A,Yy=new A,jy=new A,Tl=new A,_o=new A,Oa=new A;function Zy(s){for(let t=0;t<s.length;t++)for(let e=t+1;e<s.length;e++){const n=s[t],i=s[e];if((i.comW.x-n.comW.x)**2+(i.comW.z-n.comW.z)**2>16)continue;const{pen:o,ia:r,nx:a,nz:c}=Xy(n,i);if(o<=0)continue;n.shift(-a*o/2,-c*o/2),i.shift(a*o/2,c*o/2),Rs.set(a,0,c),yi.copy(fs[r]).addScaledVector(Rs,di[r].r-o/2),yi.y=(n.comW.y+i.comW.y)/2+qy;const l=n.velocityAt(yi,Yy),h=i.velocityAt(yi,jy);Tl.subVectors(h,l).setY(0);const u=Tl.dot(Rs);if(u<0){const d=-1.1*u/(n.impulseResponse(Rs,yi)+i.impulseResponse(Rs,yi));_o.copy(Tl).addScaledVector(Rs,-u);const f=_o.length();if(Oa.copy(Rs).multiplyScalar(d),f>1e-4){_o.multiplyScalar(1/f);const p=Math.min(f/(n.impulseResponse(_o,yi)+i.impulseResponse(_o,yi)),$y*d);Oa.addScaledVector(_o,-p)}i.applyImpulse(Oa,yi),n.applyImpulse(Oa.negate(),yi)}}}const Ky=.8;function Lp(s,t){let e=0;return s.forEach((n,i)=>{for(const o of hn){if((n.comW.x-o.x)**2+(n.comW.z-o.z)**2>16)continue;let r=0,a=0,c=0;for(let h=0;h<di.length;h++){n.toWorld(Xh.set(0,0,di[h].z),fs[h]);const u=fs[h].x-o.x,d=fs[h].z-o.z,f=Math.hypot(u,d),p=di[h].r+Ky-f;p>r&&f>1e-4&&(r=p,a=u/f,c=d/f)}if(r<=0)continue;e++,n.shift(a*r,c*r);const l=n.vel.x*a+n.vel.z*c;l<0&&(n.vel.x-=1.3*l*a,n.vel.z-=1.3*l*c),n.vel.x*=.97,n.vel.z*=.97}}),e}const Du={hforce:!0},Al=9.81,Rl=1e3;class $h{constructor(t={}){M(this,"n");M(this,"dx");M(this,"size");M(this,"dt");M(this,"depth");M(this,"originX",0);M(this,"originZ",0);M(this,"layer",null);M(this,"h");M(this,"q");M(this,"dhdt");M(this,"computeVelocity",!1);M(this,"ux");M(this,"uz");M(this,"modePhi");M(this,"dk",0);M(this,"velRe");M(this,"velIm");M(this,"p");M(this,"pImpact");M(this,"src");M(this,"pSmooth");M(this,"fhx");M(this,"fhz");M(this,"hasH",!1);M(this,"modeHF");M(this,"hRe");M(this,"hIm");M(this,"sRe");M(this,"sIm");M(this,"re");M(this,"im");M(this,"pre");M(this,"pim");M(this,"outRe");M(this,"outIm");M(this,"rowRe");M(this,"rowIm");M(this,"cosT");M(this,"sinT");M(this,"rev");M(this,"modeC");M(this,"modeS");M(this,"modeDamp");M(this,"sponge");const e=this.n=t.n??128;this.dx=t.dx??.5,this.size=e*this.dx,this.dt=t.dt??1/60,this.depth=t.depth??3;const n=e*e;this.h=new Float32Array(n),this.q=new Float32Array(n),this.dhdt=new Float32Array(n),this.ux=new Float32Array(n),this.uz=new Float32Array(n),this.modePhi=new Float32Array(n),this.velRe=new Float32Array(n),this.velIm=new Float32Array(n),this.p=new Float32Array(n),this.pImpact=new Float32Array(n),this.src=new Float32Array(n),this.pSmooth=new Float32Array(n),this.fhx=new Float32Array(n),this.fhz=new Float32Array(n),this.modeHF=new Float32Array(n),this.hRe=new Float32Array(n),this.hIm=new Float32Array(n),this.sRe=new Float32Array(n),this.sIm=new Float32Array(n),this.re=new Float32Array(n),this.im=new Float32Array(n),this.pre=new Float32Array(n),this.pim=new Float32Array(n),this.outRe=new Float32Array(n),this.outIm=new Float32Array(n),this.rowRe=new Float32Array(e),this.rowIm=new Float32Array(e),this.cosT=new Float32Array(e/2),this.sinT=new Float32Array(e/2);for(let c=0;c<e/2;c++)this.cosT[c]=Math.cos(2*Math.PI*c/e),this.sinT[c]=-Math.sin(2*Math.PI*c/e);const i=Math.log2(e);this.rev=new Uint32Array(e);for(let c=0;c<e;c++){let l=0;for(let h=0;h<i;h++)l|=(c>>h&1)<<i-1-h;this.rev[c]=l}this.modeC=new Float32Array(n),this.modeS=new Float32Array(n),this.modeDamp=new Float32Array(n);const o=this.dk=2*Math.PI/this.size,r=Math.PI/this.dx;for(let c=0;c<e;c++){const l=(c<e/2?c:c-e)*o;for(let h=0;h<e;h++){const u=(h<e/2?h:h-e)*o,d=Math.hypot(u,l),f=Math.sqrt(Al*d*Math.tanh(d*this.depth)),p=c*e+h;this.modeC[p]=Math.cos(f*this.dt),this.modeS[p]=Math.sin(f*this.dt);const x=d/r;this.modeDamp[p]=Math.exp(-(.03+2.5*x**4)*this.dt),this.modePhi[p]=d>0?f/(d*Math.tanh(d*this.depth)):0;const g=Math.min(Cn.depth,this.depth);this.modeHF[p]=d>0?(Math.sinh(d*this.depth)-Math.sinh(d*(this.depth-g)))/(d*g*Math.cosh(d*this.depth))*(d/Math.tanh(d*this.depth)):0}}this.sponge=new Float32Array(n);const a=Math.max(4,Math.round(e*.12));for(let c=0;c<e;c++)for(let l=0;l<e;l++){const h=Math.min(l,c,e-1-l,e-1-c),u=Math.max(0,1-h/a);this.sponge[c*e+l]=Math.exp(-6*u*u*this.dt)}}clearPressure(){this.p.fill(0),this.pImpact.fill(0),this.src.fill(0),this.hasH&&(this.fhx.fill(0),this.fhz.fill(0),this.hasH=!1)}addHForce(t,e,n,i){n===0&&i===0||(this.splat(this.fhx,t,e,n,0),this.splat(this.fhz,t,e,i,0),this.hasH=!0)}addForce(t,e,n,i){n>0&&this.splat(this.p,t,e,n,i)}addForceSigned(t,e,n,i){n!==0&&this.splat(this.p,t,e,n,i)}addImpactSigned(t,e,n,i){n!==0&&this.splat(this.pImpact,t,e,n,i)}splatTo(t,e,n,i,o){this.splat(t,e,n,i,o)}sampleArr(t,e,n){return this.sample(t,e,n)}inside(t,e){const n=(t-this.originX)/this.dx,i=(e-this.originZ)/this.dx,o=Math.max(4,Math.round(this.n*.12));return n>=o&&i>=o&&n<this.n-o&&i<this.n-o}addImpact(t,e,n,i){n>0&&this.splat(this.pImpact,t,e,n,i)}addSource(t,e,n,i){n!==0&&this.splat(this.src,t,e,n,i)}splat(t,e,n,i,o){const r=this.n,a=(e-this.originX)/this.dx,c=(n-this.originZ)/this.dx;if(o<=0){if(a<1||c<1||a>=r-2||c>=r-2)return;const m=a|0,_=c|0,y=a-m,v=c-_,P=i/(this.dx*this.dx),E=_*r+m;t[E]+=P*(1-y)*(1-v),t[E+1]+=P*y*(1-v),t[E+r]+=P*(1-y)*v,t[E+r+1]+=P*y*v;return}const l=Math.max(o/this.dx,.7),h=Math.ceil(l*2),u=Math.max(1,Math.floor(a-h)),d=Math.min(r-2,Math.ceil(a+h)),f=Math.max(1,Math.floor(c-h)),p=Math.min(r-2,Math.ceil(c+h));if(u>d||f>p)return;let x=0;for(let m=f;m<=p;m++)for(let _=u;_<=d;_++)x+=Math.exp(-((_-a)**2+(m-c)**2)/(2*l*l));if(x<=0)return;const g=i/(x*this.dx*this.dx);for(let m=f;m<=p;m++)for(let _=u;_<=d;_++)t[m*r+_]+=g*Math.exp(-((_-a)**2+(m-c)**2)/(2*l*l))}step(){const t=this.n,e=t*t,{re:n,im:i,pre:o,pim:r,outRe:a,outIm:c,h:l,q:h}=this;n.set(l),i.set(h),this.fft2(n,i,!1);const u=this.pImpact;for(let g=0;g<e;g++)o[g]=this.p[g]+u[g];r.fill(0),this.fft2(o,r,!1),this.hasH&&this.splitHForce();const d=1/(Rl*Al);for(let g=0;g<t;g++){const m=g===0?0:t-g;for(let _=0;_<t;_++){const y=_===0?0:t-_,v=g*t+_,P=m*t+y;if(v===0){a[0]=0,this.velRe[0]=0,this.velIm[0]=0,c[0]=0;continue}const E=.5*(n[v]+n[P]),S=.5*(i[v]-i[P]),C=.5*(i[v]+i[P]),b=-.5*(n[v]-n[P]),w=-o[v]*d,D=-r[v]*d,F=this.modeC[v],k=this.modeS[v],B=this.modeDamp[v],V=E-w,$=S-D,st=(V*F+C*k)*B,H=($*F+b*k)*B,ft=(-V*k+C*F)*B,vt=(-$*k+b*F)*B,Mt=st+w,at=H+D;if(a[v]=Mt-vt,c[v]=at+ft,this.computeVelocity){const xt=this.modePhi[v],K=ft*xt,L=vt*xt,N=(_<t/2?_:_-t)*this.dk,O=(g<t/2?g:g-t)*this.dk;this.velRe[v]=-N*L-O*K,this.velIm[v]=N*K-O*L}}}this.fft2(a,c,!0),this.computeVelocity&&(this.fft2(this.velRe,this.velIm,!0),this.ux.set(this.velRe),this.uz.set(this.velIm));const f=this.sponge,p=1/this.dt,x=this.src;for(let g=0;g<e;g++){const m=(a[g]+x[g]*this.dt)*f[g];this.dhdt[g]=(m-l[g])*p,l[g]=m,h[g]=c[g]*f[g]}this.pSmooth.set(this.p)}splitHForce(){const t=this.n,{hRe:e,hIm:n,sRe:i,sIm:o,pre:r,pim:a}=this;e.set(this.fhx),n.set(this.fhz),this.fft2(e,n,!1);const c=Du.hforce;for(let u=0;u<t;u++){const d=u===0?0:t-u,f=(u<t/2?u:u-t)*this.dk;for(let p=0;p<t;p++){const x=p===0?0:t-p,g=u*t+p,m=d*t+x,_=(p<t/2?p:p-t)*this.dk,y=_*_+f*f;if(!c||y===0){i[g]=e[g],o[g]=n[g];continue}const v=.5*(e[g]+e[m]),P=.5*(n[g]-n[m]),E=.5*(n[g]+n[m]),S=-.5*(e[g]-e[m]),C=(_*v+f*E)/y,b=(_*P+f*S)/y,w=this.modeHF[g];r[g]+=-b*w,a[g]+=C*w;const D=v-_*C,F=P-_*b,k=E-f*C,B=S-f*b;i[g]=D-B,o[g]=F+k}}const l=this.layer;if(!l)return;this.fft2(i,o,!0);const h=this.dt/(Rl*Cn.depth);for(let u=0;u<t*t;u++)l.ux[u]+=i[u]*h,l.uz[u]+=o[u]*h}recenter(t,e){var a;const n=this.n,i=this.size/2,o=Math.round((t-i-this.originX)/this.dx),r=Math.round((e-i-this.originZ)/this.dx);if(!(o===0&&r===0)){for(const c of[this.h,this.q,this.dhdt,this.pSmooth]){const l=c.slice();c.fill(0);for(let h=0;h<n;h++){const u=h+r;if(!(u<0||u>=n))for(let d=0;d<n;d++){const f=d+o;f<0||f>=n||(c[h*n+d]=l[u*n+f])}}}this.originX+=o*this.dx,this.originZ+=r*this.dx,(a=this.layer)==null||a.shift(o,r)}}waveForce(t,e,n,i=1/0){const o=i*i,r=this.n,{p:a,h:c}=this,l=1/(2*this.dx),h=this.dx*this.dx;let u=0,d=0,f=0;for(let p=1;p<r-1;p++){const x=p*r;for(let g=1;g<r-1;g++){const m=x+g,_=a[m];if(_<=0)continue;const y=(c[m+1]-c[m-1])*l,v=(c[m+r]-c[m-r])*l,P=-_*y*h,E=-_*v*h,S=this.originX+g*this.dx-t,C=this.originZ+p*this.dx-e;S*S+C*C>o||(u+=P,d+=E,f+=C*P-S*E)}}n[0]=u,n[1]=d,n[2]=f}sample(t,e,n){const i=this.n,o=(e-this.originX)/this.dx,r=(n-this.originZ)/this.dx;if(o<0||r<0||o>=i-1||r>=i-1)return 0;const a=o|0,c=r|0,l=o-a,h=r-c,u=c*i+a;return(t[u]*(1-l)+t[u+1]*l)*(1-h)+(t[u+i]*(1-l)+t[u+i+1]*l)*h}height(t,e){return this.sample(this.h,t,e)}surfaceVelocity(t,e,n){n.x=this.sample(this.ux,t,e),n.z=this.sample(this.uz,t,e)}verticalVelocity(t,e){return this.sample(this.dhdt,t,e)}staticDepression(t,e){const n=this.sample(this.pSmooth,t,e)/(Rl*Al);return n>0?Math.min(n,Math.max(0,-this.sample(this.h,t,e))):0}fft2(t,e,n){const i=this.n,{rowRe:o,rowIm:r}=this;for(let a=0;a<i;a++){const c=a*i;for(let l=0;l<i;l++)o[l]=t[c+l],r[l]=e[c+l];this.fft1(o,r,n);for(let l=0;l<i;l++)t[c+l]=o[l],e[c+l]=r[l]}for(let a=0;a<i;a++){for(let c=0;c<i;c++)o[c]=t[c*i+a],r[c]=e[c*i+a];this.fft1(o,r,n);for(let c=0;c<i;c++)t[c*i+a]=o[c],e[c*i+a]=r[c]}if(n){const a=1/(i*i);for(let c=0;c<i*i;c++)t[c]*=a,e[c]*=a}}fft1(t,e,n){const i=this.n,o=this.rev;for(let a=0;a<i;a++){const c=o[a];if(c>a){let l=t[a];t[a]=t[c],t[c]=l,l=e[a],e[a]=e[c],e[c]=l}}const r=n?-1:1;for(let a=2;a<=i;a<<=1){const c=a>>1,l=i/a;for(let h=0;h<i;h+=a)for(let u=0;u<c;u++){const d=this.cosT[u*l],f=r*this.sinT[u*l],p=h+u,x=p+c,g=t[x]*d-e[x]*f,m=t[x]*f+e[x]*d;t[x]=t[p]-g,e[x]=e[p]-m,t[p]+=g,e[p]+=m}}}}class Nu{constructor(t,e){M(this,"waves");M(this,"felt");M(this,"self",null);M(this,"wv",{x:0,z:0});this.waves=t,this.felt=e}height(t,e,n){const i=this.self;if(i){const o=this.felt.height(t,e)-i.height(t,e);return this.waves.height(t,e,n)+o+i.staticDepression(t,e,o)}return this.waves.height(t,e,n)+this.felt.height(t,e)+this.felt.staticDepression(t,e)}verticalVelocity(t,e,n){return this.waves.verticalVelocity(t,e,n)+this.felt.verticalVelocity(t,e)-(this.self?this.self.verticalVelocity(t,e):0)}flowAt(t,e,n){var i;this.felt.layer?this.felt.layer.sample(t,e,n):n.x=n.z=n.w=0,this.felt.surfaceVelocity(t,e,this.wv),n.x+=this.wv.x,n.z+=this.wv.z,(i=this.self)==null||i.subtractFlow(t,e,n)}}class Jy{constructor(t,e){M(this,"waves");M(this,"sims");M(this,"selfs");M(this,"tmp",{x:0,z:0,w:0});M(this,"one",{x:0,z:0,w:0});this.waves=t,this.sims=e,this.selfs=e.map(()=>null)}height(t,e,n){let i=this.waves.height(t,e,n);for(let o=0;o<this.sims.length;o++){const r=this.sims[o],a=this.selfs[o];if(a){const c=r.height(t,e)-a.height(t,e);i+=c+a.staticDepression(t,e,c)}else i+=r.height(t,e)+r.staticDepression(t,e)}return i}verticalVelocity(t,e,n){var o;let i=this.waves.verticalVelocity(t,e,n);for(let r=0;r<this.sims.length;r++)i+=this.sims[r].verticalVelocity(t,e)-(((o=this.selfs[r])==null?void 0:o.verticalVelocity(t,e))??0);return i}flowAt(t,e,n){var o;n.x=n.z=n.w=0;const i=this.one;for(let r=0;r<this.sims.length;r++){const a=this.sims[r];i.x=i.z=i.w=0,a.layer&&a.layer.sample(t,e,i),a.surfaceVelocity(t,e,this.tmp),i.x+=this.tmp.x,i.z+=this.tmp.z,(o=this.selfs[r])==null||o.subtractFlow(t,e,i),n.x+=i.x,n.z+=i.z,n.w+=i.w}}}class Ip{constructor(t,e){M(this,"waves");M(this,"render");this.waves=t,this.render=e}height(t,e,n){return this.waves.height(t,e,n)+this.render.height(t,e)}verticalVelocity(t,e,n){return this.waves.verticalVelocity(t,e,n)+this.render.verticalVelocity(t,e)}}const zf=.3,Qy=1e3,tS=9.81;class eS{constructor(t,e=32){M(this,"sim");M(this,"layer");M(this,"hist",[]);M(this,"pd");M(this,"host");M(this,"tmp",{x:0,z:0,w:0});M(this,"wv",{x:0,z:0});this.host=t,this.sim=new $h({n:e,dx:t.dx,dt:t.dt,depth:t.depth}),this.sim.computeVelocity=!0,this.layer=new Dh(e,t.dx),this.sim.layer=this.layer,this.pd=new Float32Array(e*e)}reset(){this.hist.length=0,this.sim.h.fill(0),this.sim.q.fill(0),this.sim.dhdt.fill(0),this.layer.clear(),this.pd.fill(0)}step(t,e,n,i,o,r,a,c,l){const h=this.sim,u=this.host,d=h.size/2,f=u.originX+Math.round((e-i*3-d-u.originX)/u.dx)*u.dx,p=u.originZ+Math.round((n-o*3-d-u.originZ)/u.dx)*u.dx;for((this.hist.length===0||Math.abs(f-h.originX)>2||Math.abs(p-h.originZ)>2)&&(this.hist.length===0?(h.originX=this.layer.originX=f,h.originZ=this.layer.originZ=p):h.recenter(f+d,p+d)),this.hist.push({t,pressure:r.slice(),mom:a?a.slice():null,events:c.slice()});this.hist.length>1&&this.hist[1].t<=t-zf;)this.hist.shift();const x=this.hist[0].t<=t-zf?this.hist[0]:null,g=this.hist[this.hist.length-1];h.clearPressure(),this.pd.fill(0);const m=h.dt,_=(y,v)=>{const P=y.pressure;for(let S=0;S<P.length;S+=4)P[S+2]<=0||!u.inside(P[S],P[S+1])||(h.addForceSigned(P[S],P[S+1],v*P[S+2],P[S+3]),v<0&&h.splatTo(this.pd,P[S],P[S+1],P[S+2],P[S+3]));const E=y.mom;if(E)for(let S=0;S<E.length;S+=5)u.inside(E[S],E[S+1])&&((E[S+2]!==0||E[S+3]!==0)&&h.addHForce(E[S],E[S+1],v*E[S+2],v*E[S+3]),E[S+4]>0&&this.layer.addAirSigned(E[S],E[S+1],v*E[S+4]*m));for(const S of y.events)u.inside(S.x,S.z)&&(h.addSource(S.x,S.z,v*S.vol/m,l),S.imp>0&&h.addImpactSigned(S.x,S.z,v*S.imp/m,l),(S.ix!==0||S.iz!==0)&&h.addHForce(S.x,S.z,v*S.ix/m,v*S.iz/m))};_(g,1),x&&_(x,-1),h.step(),this.layer.step(m)}height(t,e){return this.sim.height(t,e)}verticalVelocity(t,e){return this.sim.verticalVelocity(t,e)}staticDepression(t,e,n){const i=this.sim.sampleArr(this.pd,t,e)/(Qy*tS);return i>0?Math.min(i,Math.max(0,-n)):0}subtractFlow(t,e,n){this.layer.sampleRaw(t,e,this.tmp),n.x-=this.tmp.x,n.z-=this.tmp.z,n.w=Math.min(Cn.maxVoid,Math.max(0,n.w-this.tmp.w)),this.sim.surfaceVelocity(t,e,this.wv),n.x-=this.wv.x,n.z-=this.wv.z}}const Cl=.3,nS=128,iS=.5,Ba=1e3,sS=1.2,oS=.45,rS=2e4;class Dp{constructor(t=nS,e=iS){M(this,"render");M(this,"felt");M(this,"history",[]);M(this,"drops",[]);M(this,"hitBoats",null);M(this,"selves",null);M(this,"attached",[]);M(this,"pList",[]);M(this,"mList",[]);M(this,"sprayOwner",[]);M(this,"events",[]);M(this,"stepEvents",[]);M(this,"jetSeq",No.seq);M(this,"sprayOut",0);M(this,"sprayIn",0);M(this,"acc",0);M(this,"time",0);M(this,"stepCount",0);M(this,"lastStepMs",0);M(this,"feltOnly",!1);this.render=new $h({n:t,dx:e,dt:1/60}),this.felt=new $h({n:t,dx:e,dt:1/30}),this.felt.layer=new Dh(t,e),this.felt.computeVelocity=!0,this.render.layer=new Dh(t,e)}attach(t){this.hitBoats=t,this.attached=t;const e=t.map(()=>new eS(this.felt));this.selves=e,t.forEach((n,i)=>{const o=n.surface;if(o instanceof Nu&&o.felt===this.felt)o.self=e[i];else if(o instanceof Jy){const r=o.sims.indexOf(this.felt);r>=0&&(o.selfs[r]=e[i])}})}reset(t,e){for(const n of this.selves??[])n.reset();for(const n of[this.render,this.felt])n.h.fill(0),n.q.fill(0),n.dhdt.fill(0),n.originX=t-n.size/2,n.originZ=e-n.size/2;for(const n of[this.felt,this.render])n.layer&&(n.layer.clear(),n.layer.originX=n.originX,n.layer.originZ=n.originZ);this.history=[],this.drops.length=0,this.events=[]}update(t,e,n,i,o,r,a,c){var f,p;const l=Array.isArray(r)?Ll(r):r,h=a&&(Array.isArray(a)?Ll(a):a);if(this.sprayOwner.length=0,Array.isArray(a))for(const[x,g]of a.entries())this.sprayOwner.push(x,g.length);else a&&this.sprayOwner.push(0,a.length);const u=c?Array.isArray(c)?Ll(c):c.slice():null;this.selves&&(this.pList=Array.isArray(r)?r:[r],this.mList=c?Array.isArray(c)?c:[c]:[]),this.acc+=t;let d=!1;for(this.acc>.1&&(this.acc=.1);this.acc>=this.render.dt;){this.acc-=this.render.dt,this.time+=this.render.dt;const x=performance.now();this.selves||this.history.push({t:this.time,data:l.slice(),mom:u});const g=e-i*10,m=n-o*10;for(const y of this.feltOnly?[this.felt]:[this.render,this.felt]){const v=y.originX+y.size/2,P=y.originZ+y.size/2;Math.hypot(g-v,m-P)>4&&y.recenter(g,m)}this.stepEvents.length=0,h&&this.flySpray(h);for(const y of No.retired){if(y.seq<=this.jetSeq)continue;const v={t:this.time,x:y.x,z:y.z,vol:0,imp:0,ix:y.ix,iz:y.iz,src:-1};this.stepEvents.push(v),this.events.push(v)}this.jetSeq=No.seq;const _=$e.wakeSmooth;if(!this.feltOnly){Il(this.render,l);for(const v of this.stepEvents)Pl(this.render,v,_);const y=this.render.layer;if(u&&y)for(let v=0;v<u.length;v+=5)(u[v+2]!==0||u[v+3]!==0)&&this.render.addHForce(u[v],u[v+1],u[v+2],u[v+3]),u[v+4]>0&&y.addAir(u[v],u[v+1],u[v+4]*this.render.dt);this.render.step()}if(++this.stepCount%2===0&&this.selves){const y=this.felt.layer,v=this.felt.dt;if(Il(this.felt,l),u&&y)for(let E=0;E<u.length;E+=5)(u[E+2]!==0||u[E+3]!==0)&&this.felt.addHForce(u[E],u[E+1],u[E+2],u[E+3]),u[E+4]>0&&y.addAir(u[E],u[E+1],u[E+4]*v);const P=this.selves.map(()=>[]);for(const E of this.events)Pl(this.felt,E,_),E.src>=0&&E.src<P.length&&P[E.src].push(E);this.events.length=0,this.felt.step(),y==null||y.step(v),this.feltOnly||(f=this.render.layer)==null||f.step(v);for(let E=0;E<this.selves.length;E++){const S=this.attached[E],C=S.quat,b=2*(C.x*C.z+C.w*C.y),w=1-2*(C.x*C.x+C.y*C.y);this.selves[E].step(this.time,S.comW.x,S.comW.z,b,w,this.pList[E]??cS,this.mList[E]??null,P[E],_)}}else if(this.stepCount%2===0){for(;this.history.length>1&&this.history[1].t<=this.time-Cl;)this.history.shift();const y=this.history[0],v=this.felt.layer,P=this.felt.dt;if(y&&y.t<=this.time-Cl){Il(this.felt,y.data);const S=y.mom;if(S&&v)for(let C=0;C<S.length;C+=5)(S[C+2]!==0||S[C+3]!==0)&&this.felt.addHForce(S[C],S[C+1],S[C+2],S[C+3]),S[C+4]>0&&v.addAir(S[C],S[C+1],S[C+4]*P)}else this.felt.clearPressure();let E=0;for(;E<this.events.length&&this.events[E].t<=this.time-Cl;)Pl(this.felt,this.events[E++],_);E&&this.events.splice(0,E),this.felt.step(),v==null||v.step(P),this.feltOnly||(p=this.render.layer)==null||p.step(P)}this.lastStepMs=performance.now()-x,d=!0}return d}flySpray(t){const e=this.render.dt,n=this.feltOnly?this.felt:this.render;let i=0,o=0,r=0,a=this.sprayOwner[1]??t.length;for(let u=0;u<t.length;u+=7){for(;u>=a&&r+2<this.sprayOwner.length;)r+=2,a+=this.sprayOwner[r+1];const d=t[u+6];if(d<=0)continue;const f=d*e;i+=d;const p=this.sprayOwner.length?this.sprayOwner[r]:-1;this.addEvent(t[u],t[u+2],-f/Ba,0,0,0,p),this.drops.length<rS&&this.drops.push({x:t[u],y:t[u+1],z:t[u+2],vx:t[u+3],vy:t[u+4],vz:t[u+5],m:f,age:0,src:this.sprayOwner.length?this.sprayOwner[r]:-1})}const c=this.hitBoats;if(c)for(let u=0;u<c.length;u++){const d=c[u];zo[u*3]=d.comW.x,zo[u*3+1]=d.comW.y,zo[u*3+2]=d.comW.z,Np[u]=d.quat.clone().invert()}const l=.75*(sS/Ba)*oS/$e.sprayDrop;let h=0;for(let u=0;u<this.drops.length;u++){const d=this.drops[u],f=Math.hypot(d.vx,d.vy,d.vz),p=l*f;if(d.vx-=p*d.vx*e,d.vy-=(p*d.vy+9.81)*e,d.vz-=p*d.vz*e,d.x+=d.vx*e,d.y+=d.vy*e,d.z+=d.vz*e,d.age+=e,c&&aS(d,c,e)){this.addEvent(d.x,d.z,d.m/Ba,0,0,0,d.src),o+=d.m/e;continue}if(d.vy<0&&d.y<=n.height(d.x,d.z)){this.addEvent(d.x,d.z,d.m/Ba,d.m*-d.vy,d.m*d.vx,d.m*d.vz,d.src),o+=d.m/e;continue}d.age<5&&(this.drops[h++]=d)}this.drops.length=h,this.sprayOut=i,this.sprayIn=o}addEvent(t,e,n,i,o,r,a=-1){const c={t:this.time,x:t,z:e,vol:n,imp:i,ix:o,iz:r,src:a};this.stepEvents.push(c),this.events.push(c)}}function Pl(s,t,e){s.addSource(t.x,t.z,t.vol/s.dt,e),t.imp>0&&s.addImpact(t.x,t.z,t.imp/s.dt,e),(t.ix!==0||t.iz!==0)&&s.addHForce(t.x,t.z,t.ix/s.dt,t.iz/s.dt),s.layer&&t.vol>0&&s.layer.addAir(t.x,t.z,t.vol*Cn.sprayAir)}const zo=new Float64Array(64*3),Np=[],pr=new A,Va=new A,Uf=new A;function aS(s,t,e){for(let n=0;n<t.length;n++){if(n===s.src&&s.age<.4)continue;const i=zo[n*3],o=zo[n*3+1],r=zo[n*3+2];if(Math.abs(s.x-i)>2.5||Math.abs(s.z-r)>2.5||s.y-o>1.5)continue;const a=t[n];pr.set(s.x,s.y,s.z).sub(a.origin).applyQuaternion(Np[n]);const{x:c,y:l,z:h}=pr,u=h>Vs&&h<Bn&&l>-.05&&l<gs&&Math.abs(c)<ts(h),d=h>-1.25&&h<-.05&&l>=gs&&l<1.15&&Math.abs(c)<.38;if(!(!u&&!d))return pr.set(s.x-s.vx*e,s.y-s.vy*e,s.z-s.vz*e),a.velocityAt(pr,Va),Uf.set(s.vx-Va.x,s.vy-Va.y,s.vz-Va.z).multiplyScalar(s.m),a.applyImpulse(Uf,pr),a.sprayHit+=s.m,!0}return!1}const cS=new Float32Array(0);function Ll(s){let t=0;for(const i of s)t+=i.length;const e=new Float32Array(t);let n=0;for(const i of s)e.set(i,n),n+=i.length;return e}function Il(s,t){s.clearPressure();for(let e=0;e<t.length;e+=4)t[e+2]>0&&s.addForce(t[e],t[e+1],t[e+2],t[e+3])}const Un=hn[1],be=Math.sign(hn[0].z-Un.z),zu=-105,zp=-112,Ff=-110,Dl=-60,mr=-15,Sc=1,ji={x:Un.x,z:Un.z+be*20},gr=Yn-be*150,cc=Yn-be*200,Up=3,lS=2*Up,hS=Un.x-12,uS=4.5,li=7,Nl=5,dS=2.6,Tr=2.75,kf=-29,Of=1.5,Bf=-17,Vf=1,fS=18,Uo=[0,3.4,11,22.6,37.3,54.5,73.5,93.8,114.9,136.7,158.8,181.1,203.6],zl=[2.8,5.2,9.75,13.3,16,18.2,19.75,20.8,21.5,21.9,22.25,22.4,22.5],Fp=22.6;function Uu(s,t,e){if(e<=s[0])return t[0];for(let n=1;n<s.length;n++)if(e<=s[n])return t[n-1]+(t[n]-t[n-1])*(e-s[n-1])/(s[n]-s[n-1]);return NaN}const Fu=Uo.map((s,t)=>t),pS=s=>s<=12?Uu(Fu,Uo,s):Uo[12]+Fp*(s-12),mS=s=>s<=Uo[12]?Uu(Uo,Fu,s):12+(s-Uo[12])/Fp,gS=s=>s>=zl[12]?12:Uu(zl,Fu,Math.max(zl[0],s));function Ul(s,t){const e=gS(t);return mS(pS(e)+Math.max(0,s))-e}function kp(s){let t=(Math.abs(Math.floor(s))*7919+104729)%2147483647||1;return()=>(t=t*16807%2147483647,t%1000003/1000003)}function Hf(s){return Math.sqrt(-2*Math.log(Math.max(1e-9,s())))*Math.cos(2*Math.PI*s())}function Gf(s){const t=kp(s*31+7);return Array.from({length:6},()=>({react:.15+t()*.35+(t()<.1?.4+t()*.5:0),maeduke:t()**3,deep:t(),stMean:.125+t()*.08,stSd:.03+t()*.03,adjust:.4+t()*.6}))}class Wf{constructor(){M(this,"segs",[]);M(this,"len",0)}line(t,e,n,i){const o=Math.hypot(n-t,i-e);return this.segs.push({line:!0,x0:t,z0:e,x1:n,z1:i,len:o}),this.len+=o,this}arc(t,e,n,i,o){const r=n*(o-i);return this.segs.push({line:!1,cx:t,cz:e,r:n,a0:i,a1:o,len:r}),this.len+=r,this}at(t,e){let n=0;for(;n<this.segs.length-1&&t>this.segs[n].len;)t-=this.segs[n++].len;const i=this.segs[n];if(i.line){const o=i.len>0?t/i.len:0;e.x=i.x0+(i.x1-i.x0)*o,e.z=i.z0+(i.z1-i.z0)*o}else{const o=i.a0+t/i.r;e.x=i.cx+i.r*Math.sin(o),e.z=i.cz+i.r*Math.cos(o)}return e}project(t,e,n){let i=n,o=1/0;const r={x:0,z:0};for(let a=Math.max(0,n-3);a<=Math.min(this.len,n+30);a+=.5){this.at(a,r);const c=(r.x-t)**2+(r.z-e)**2;c<o&&(o=c,i=a)}return i}}const Dr=new A,Fl=new A(0,0,Bn);function xS(s,t,e,n,i=0){const o=s.ph,r=o.forward(Dr),a=o.comW,c=Math.cos(i),l=Math.sin(i),h=t-a.x,u=e-a.z,d=h*c+u*l,f=u*c-h*l;let p;if(o.speed()>6){const y=o.vel,v=Math.atan2(y.x*f-y.z*d,y.x*d+y.z*f),P=o.speed(),E=Math.max(.35,Math.min(1,1-(P-6)/12));p=Math.max(-E,Math.min(E,v/.6+.2*o.angVel.y))}else p=Math.atan2(r.x*f-r.z*d,r.x*d+r.z*f)/.4+.3*o.angVel.y;p=Math.max(-1,Math.min(1,p));const x=2.5*n;s.input.steer+=Math.max(-x,Math.min(x,p-s.input.steer));const g=o.speed()*3.6,m=Math.max(0,Math.min(1,(g-25)/25)),_=s.input.steer<-.4?-m:0;s.input.leanX+=Math.max(-n*3,Math.min(n*3,_-s.input.leanX)),s.input.leanZ=0}function vS(s,t){return t<=Tr+.1||s>t+.3?0:Math.max(.3,Math.min(1,.3+(t-s)*.25+t*.03))}class _S{constructor(t,e,n=zu){M(this,"boats");M(this,"mode");M(this,"pitOut");M(this,"nSlow",3);M(this,"violations",[]);M(this,"finalCourse",null);M(this,"negotiated",0);M(this,"retreated",new Set);M(this,"slowT0",kf);M(this,"slowDt",Of);M(this,"dashT0",Bf);M(this,"dashDt",Vf);M(this,"order",[]);M(this,"humanIdx",5);M(this,"humanIdxCand",5);M(this,"humanIdxT",0);M(this,"rnd",Math.random);this.mode=e,this.pitOut=n,this.boats=t.map(i=>({lane:i.lane,ph:i.ph,human:i.human,skill:Gf(1)[i.lane-1],input:{steer:0,throttle:0,leanX:0,leanZ:0},phase:"moored",course:i.lane,slow:i.lane<=3,want:i.lane,stTarget:.15,launched:!1,zTurn:Un.z-be*40,path:null,u:0,visitedBack:!1,cross150:null,st:null,flying:!1,late:!1,rightAcc:0,rightTurns:0,rightArmed:!0,prevBowZ:0,weave:0,need:Tr,waitD:.5}))}reset(t){const e=Gf(t);this.rnd=kp(t*131+17),this.violations=[],this.finalCourse=null,this.negotiated=0,this.retreated.clear(),this.nSlow=3,this.order=this.boats.map(n=>n.lane),this.humanIdx=this.humanIdxCand=-1,this.slowT0=kf-2+this.rnd()*4,this.slowDt=Of*(.7+this.rnd()*.8),this.dashT0=Bf-2+this.rnd()*4,this.dashDt=Vf*(.7+this.rnd()*.8),this.humanIdxT=0;for(const n of this.boats){const i=cy(n.lane);n.ph.reset(i.x,i.z,i.heading,0),n.skill=e[n.lane-1],Object.assign(n.input,{steer:0,throttle:0,leanX:0,leanZ:0}),n.phase="moored",n.course=n.lane,n.slow=n.lane<=3,n.launched=!1,n.path=null,n.u=0,n.visitedBack=!1,n.cross150=null,n.st=null,n.flying=n.late=!1,n.rightAcc=0,n.rightTurns=0,n.rightArmed=!0,n.weave=0,n.prevBowZ=n.ph.toWorld(Fl,Dr).z;const o=n.skill;n.waitD=this.rnd(),n.stTarget=o.stMean+o.stSd*Hf(this.rnd)+(this.rnd()<.025?.11*Hf(this.rnd):0);let r=0;this.mode==="free"&&n.lane>1&&!n.human&&(this.rnd()<o.maeduke*.6&&(r=1),r&&this.rnd()<o.maeduke*.5&&r++,r===2&&n.lane>=5&&this.rnd()<o.maeduke*.4&&r++),n.want=Math.max(1,n.lane-r)}this.assign()}get(t){return this.boats[t-1]}moored(t){return t<this.pitOut}humanIndexNow(t,e){const n=this.order.filter(r=>!this.get(r).human),i=t.ph.comW;if(e<this.pitOut+1||(i.z-Hr)*be<8)return n.length;if(!t.visitedBack)return n.filter(r=>r<t.lane).length;let o=0;return n.forEach((r,a)=>{const c=a+1,l=this.get(r),h=l.phase==="uturn"||l.phase==="approach"?l.course:c;i.x>Un.x?o+=xr(h)<i.x?1:0:o+=Ua(h)>i.x?1:0}),o}assign(){this.order.forEach((t,e)=>{const n=this.get(t);n.phase==="uturn"||n.phase==="approach"||n.phase==="race"||(n.course=e+1,n.slow=e+1<=this.nSlow)})}negotiate(){if(this.negotiated++,this.mode!=="free")return;const t=[...this.order],e=i=>this.get(i).ph.comW.z*be;for(const i of[...t]){const o=this.get(i);if(o.human)continue;let r=t.indexOf(i);for(;r>o.want-1&&r>0;){const a=this.get(t[r-1]);if(a.human||e(i)-e(a.lane)<(a.lane===1?3:1)*Up)break;t[r]=a.lane,t[r-1]=i,r--}}if(t.some((i,o)=>i!==this.order[o])){for(const o of[...t]){const r=this.get(o);if(r.human||r.lane>3||this.retreated.has(o))continue;const a=t.indexOf(o);a>r.lane-1&&r.skill.deep>.7&&(t.splice(a,1),t.push(o),this.retreated.add(o))}const i=this.get(t[3]);t.slice(0,3).some(o=>o>=4)&&!i.human&&i.lane<=3&&i.skill.deep<.3&&(this.nSlow=4)}this.order=t,this.assign()}control(t,e){if(e<this.pitOut)return;this.negotiated<3&&e>=this.pitOut+3.5+1.5*this.negotiated&&this.negotiate();const n=this.boats.find(r=>r.human);if(n){const r=this.humanIndexNow(n,e);if(r!==this.humanIdxCand?(this.humanIdxCand=r,this.humanIdxT=0):this.humanIdxT+=t,this.humanIdxT>1&&r!==this.humanIdx&&(this.humanIdx=r,this.mode==="free")){const a=this.order.filter(c=>c!==n.lane);a.splice(Math.min(r,a.length),0,n.lane),this.order=a,this.assign()}this.mode==="fixed"&&(n.course=this.humanIdx+1)}let i=1/0;const o=[...this.boats].sort((r,a)=>r.course-a.course);for(const r of o)r.human||(i=this.planTurn(r,e,i));for(const r of this.boats)r.human||this.drive(r,t,e)}planTurn(t,e,n){const i=t.course,o=t.slow?this.slowT0+this.slowDt*(i-1):this.dashT0+this.dashDt*(i-this.nSlow-1),r=Math.max(.1,o-e);if(t.phase==="uturn"||t.phase==="approach"||t.phase==="race"){const _=t.phase==="uturn"&&t.path?t.path.len-t.u+(t.slow?Math.max(0,(gr-t.zTurn)*be):0):t.slow?Math.max(0,(gr-t.ph.comW.z)*be):0;return t.need=o-e>.5?_/r:_>0?8:0,(t.zTurn-be*Nl)*be}const a=xr(i),c=Ua(i),l=Math.PI*li+Math.max(0,a-c-2*li),h=t.ph.comW;let u=0,d=h.z*be;if(t.phase==="rush"||t.phase==="buoy"||t.phase==="moored"){const _=(a-Xf(i))/2;u=Math.max(0,(ji.z-h.z)*be)+Math.PI*_,d=ji.z*be}const f=_=>u+Math.max(0,d-_)+l+(t.slow?Math.max(0,gr*be-_):0),p=Hr*be+fS+li+Nl*(6-i),x=Math.min(t.slow?Un.z*be+3:cc*be-5,n,d),g=dS*r;let m;if(f(x)>=g)m=x;else if(f(p)<=g)m=p;else{let _=p,y=x;for(let v=0;v<30;v++){const P=(_+y)/2;f(P)>g?_=P:y=P}m=(_+y)/2}return m=Math.max(p,Math.min(x,m)),t.zTurn=m*be,t.need=f(m)/r,m-Nl}drive(t,e,n){const i=t.ph,o=i.comW,r=i.speed(),a=t.input,c=t.course,l=5+r*.4,h={x:0,z:0};let u=Tr,d=0;if(t.phase==="moored"&&(t.phase="rush"),t.phase==="rush"){const f=Xf(c),p=(xr(c)-f)/2,x=Math.max(l,10);h.x=o.x+Math.max(-x/4,Math.min(x/4,f-o.x)),h.z=o.z+be*x;const g=Math.sqrt(5*p),m=(ji.z-o.z)*be;u=n<this.pitOut+t.skill.react?0:m<(r*r-g*g)/(2*2.2)+5?g:30,m<=.5&&(t.phase="buoy",t.path=new Wf().arc((f+xr(c))/2,ji.z,p,-Math.PI/2,Math.PI/2),t.u=0)}if(t.phase==="buoy"&&t.path){t.u=t.path.project(o.x,o.z,t.u),t.path.at(t.u+3+r*.3,h);const f=t.path.segs[0].r;u=Math.sqrt(5*f),t.u>=t.path.len-1.5&&(t.phase="back")}if(t.phase==="back"){const f=xr(c);if(h.x=f,h.z=o.z-be*l,u=t.need,d=Math.max(0,Math.min(1,(Tr-.1-t.need)/.5)),(o.z-t.zTurn)*be<=.5){const p=Ua(c),g=t.zTurn;t.path=new Wf().arc(f-li,g,li,Math.PI/2,Math.PI).line(f-li,g-be*li,p+li,g-be*li).arc(p+li,g,li,Math.PI,1.5*Math.PI),t.u=0,t.phase="uturn"}}if(t.phase==="uturn"&&t.path&&(t.u=t.path.project(o.x,o.z,t.u),t.path.at(t.u+Math.max(4,l),h),u=Math.min(7,t.need),t.u>=t.path.len-1&&(t.phase="approach")),t.phase==="approach"){const f=Ua(c),p=i.toWorld(Fl,Dr).z,x=(Yn-p)*be;u=t.slow&&t.cross150===null?Math.min(6,t.need):Tr;const g=t.stTarget-(!t.slow&&c===this.nSlow+1?.03:0);if(!t.launched){const m=t.slow?92+18*t.waitD+2.3*Math.max(0,-8-n):200+20*t.waitD+2.3*Math.max(0,-12-n);d=Math.max(0,Math.min(1,(m-x)/6)),g-n-Ul(x,r)<2.5&&(d=0),h.x=f,h.z=o.z+be*Math.max(l,8),(Ul(x,r)>=g-n||n>-2.5)&&(t.launched=!0)}if(t.launched){h.x=f,h.z=o.z+be*l,u=40;const m=g-n-Ul(x,r);m>.02?a.throttle=Math.max(.35,1-t.skill.adjust*m*3):a.throttle=1}}d>0&&(t.weave+=e*2*Math.PI/5),xS(t,h.x,h.z,e,d*(25*Math.PI/180)*Math.sin(t.weave)),t.phase==="approach"&&t.launched||(a.throttle=vS(r,u))}observe(t,e,n){for(const i of this.boats){if(e<this.pitOut)continue;const o=i.ph.comW,r=i.ph.toWorld(Fl,Dr).z,a=l=>(i.prevBowZ-l)*be<0&&(r-l)*be>=0,c=l=>t+(e-t)*(l-i.prevBowZ)/(r-i.prevBowZ||1e-6);if(!i.visitedBack&&o.x>Un.x+2&&(i.visitedBack=!0,(o.z-ji.z)*be<-1&&e<0&&this.violations.push({lane:i.lane,kind:"小回り防止ブイの内側を通過",clock:e})),i.visitedBack&&i.cross150===null&&o.x<Un.x&&a(gr)&&e<0&&(i.cross150=c(gr),this.boats.some(h=>h!==i&&h.cross150!==null&&h.cross150<i.cross150-1&&h.ph.comW.x<o.x-2)&&this.violations.push({lane:i.lane,kind:"150m見透し線の割り込み",clock:e})),i.st===null&&o.x<Un.x+10&&a(Yn)&&e>this.pitOut+5&&e<-5?this.violations.push({lane:i.lane,kind:"スタートラインを早く越えた",clock:e}):i.st===null&&o.x<Un.x+10&&a(Yn)&&e>this.pitOut+5&&e<10&&(i.st=Math.round(c(Yn)*100)/100,i.st===0&&c(Yn)<0&&(i.st=-.01),i.st<0?i.flying=!0:i.st>=Sc&&(i.late=!0)),i.st===null&&e>=Sc&&!i.flying&&(i.late=!0),i.visitedBack&&e<0){const l=i.ph.angVel.y;l<-.17&&i.ph.speed()<30/3.6?i.rightAcc+=-l*n:l>.17&&(i.rightAcc=0,i.rightArmed=!0),i.rightArmed&&i.rightAcc>Math.PI/3&&(i.rightArmed=!1,i.rightTurns++,i.rightTurns>1&&this.violations.push({lane:i.lane,kind:"右転舵",clock:e}))}i.prevBowZ=r}}decideCourses(){const t=n=>n.visitedBack&&n.ph.comW.x<Un.x,e=[...this.boats].sort((n,i)=>t(n)!==t(i)?t(n)?-1:1:t(n)?i.ph.comW.x-n.ph.comW.x:n.lane-i.lane);if(e.forEach((n,i)=>{n.course=i+1,n.phase="race"}),this.finalCourse=e.map(n=>n.lane),this.mode==="fixed")for(const n of e)n.human&&n.course!==n.lane&&this.violations.push({lane:n.lane,kind:"進入固定違反（枠番と違うコース）",clock:0});return this.finalCourse}}function Xf(s){return hS-uS*(s-1)}function xr(s){return Un.x+lS*s}function MS(s,t,e){const n=s.comW,i=s.forward(Dr),r=n.x>Un.x?Ht.x1-8:Ht.x0+8,a=n.z+(i.z>=0?12:-12),c=r-n.x,l=a-n.z,h=Math.atan2(i.x*l-i.z*c,i.x*c+i.z*l),u=Math.max(-.5,Math.min(.5,h/.4+.3*s.angVel.y));t.steer+=Math.max(-2.5*e,Math.min(2.5*e,u-t.steer)),t.throttle=0,t.leanX*=1-Math.min(1,e*3),t.leanZ=0}function kl(s,t=!1){return s==null?t?"L":"":s<0?"F"+(-s).toFixed(2).replace(/^0/,""):s>=Sc?"L"+s.toFixed(2):s.toFixed(2).replace(/^0/,"")}const Ha=hn[0],qh=-14,Ga=1/240,yS={steer:0,throttle:0,leanX:0,leanZ:0},SS=10;class wS{constructor(t,e={}){M(this,"wake",new Dp);M(this,"visual");M(this,"boats",[]);M(this,"prestart");M(this,"entry");M(this,"humanInput",null);M(this,"clock",qh);M(this,"t",0);M(this,"result",null);M(this,"onFinish",null);M(this,"st",{});M(this,"acc",0);M(this,"firstTurnLeader",null);M(this,"buf",new Float32Array(3));M(this,"started",!1);M(this,"withdrawT",new Map);M(this,"prevBow",new Map);M(this,"useWake");this.visual=new Ip(t,this.wake.render),this.useWake=e.wake??!0,this.entry=e.entry??"free";const n=Wh(1);for(let i=0;i<6;i++){const o=new xs(new Nu(t,this.wake.felt),this.visual),r=e.humanLane===i+1;r&&Ep(o),this.boats.push({lane:i+1,ph:o,cpu:new Wy(i+1,n[i]),human:r,retired:!1,removed:!1})}this.prestart=e.prestart??!0?new _S(this.boats,this.entry,e.pitOut??zu):null,this.wake.attach(this.boats.map(i=>i.ph)),this.reset()}get me(){return this.boats.find(t=>t.human)??null}setPolicy(t){for(const e of this.boats)e.cpu.policy=t}setControl(t){for(const e of this.boats)e.cpu.control=t}reset(t=Math.floor(Math.random()*1e5)+1){const e=Wh(t);this.boats.forEach((n,i)=>{n.cpu.skill=e[i],n.cpu.reset(),n.retired=n.removed=!1;const o=n.cpu.startPos();n.ph.reset(o.x,o.z,0,this.t)}),this.prestart&&this.prestart.reset(t),this.wake.reset(Ha.x,Ha.z+5),this.clock=this.prestart?Math.min(zp,this.prestart.pitOut-7):qh,this.acc=0,this.result=null,this.firstTurnLeader=null,this.started=!this.prestart,this.st={},this.withdrawT.clear(),this.prevBow.clear()}get inPrestart(){return!!this.prestart&&!this.started}order(){return this.inPrestart?[...this.boats].sort((t,e)=>this.prestart.get(t.lane).course-this.prestart.get(e.lane).course):[...this.boats].sort((t,e)=>{const n=t.cpu.capsized||t.retired,i=e.cpu.capsized||e.retired;return n!==i?n?1:-1:t.cpu.finished&&e.cpu.finished?t.cpu.finishTime-e.cpu.finishTime:t.cpu.finished?-1:e.cpu.finished?1:e.cpu.progress-t.cpu.progress})}step(t){var f;const e=this.boats,n=this.prestart,i=this.clock;if(n&&!this.started&&this.clock>=0){this.started=!0,n.decideCourses();for(const p of e)p.cpu.beginRace(p.ph.comW.x,p.ph.comW.z,n.get(p.lane).course)}const o=!!n&&n.moored(this.clock),r=e.filter(p=>!p.cpu.capsized&&!p.removed);if(!this.started)n.control(t,this.clock);else for(const p of e){if(p.removed)continue;const x=this.withdrawT.get(p);p.retired&&!p.human&&(x!==void 0||p.cpu.progress>Nf)?(x===void 0&&this.withdrawT.set(p,this.clock),MS(p.ph,p.cpu.input,t),this.clock-(x??this.clock)>SS&&(p.removed=!0)):p.cpu.update(t,p.ph,this.clock,r)}const a=p=>p.human&&!(this.started&&p.cpu.finished)?this.humanInput??yS:this.started?p.cpu.input:n.get(p.lane).input;for(const p of e)this.prevBow.set(p,p.ph.toWorld(qf,$f).z);this.acc+=t;let c=0;for(;this.acc>=Ga&&c<16;){if(!o)for(const p of e)!p.cpu.capsized&&!p.removed&&p.ph.step(Ga,a(p),this.t);this.t+=Ga,this.acc-=Ga,c++}c>=16&&(this.acc=0);const l=e.filter(p=>!p.cpu.capsized&&!p.removed);Zy(l.map(p=>p.ph)),Lp(l.map(p=>p.ph));for(const p of e)p.human&&bp(p.ph);if(this.clock+=t,n){n.observe(i,this.clock,t);for(const p of e){const x=n.get(p.lane);x.st!==null&&(this.st[p.lane]=x.st),(x.flying||x.late)&&!p.retired&&(p.retired=!0,x.flying&&(p.cpu.flying=!0))}}else for(const p of e){if(this.st[p.lane]!==void 0)continue;const x=this.prevBow.get(p),g=p.ph.toWorld(qf,$f).z;x<Yn&&g>=Yn&&(this.st[p.lane]=i+(this.clock-i)*(Yn-x)/(g-x))}const h=this.useWake&&this.wake.update(t,Ha.x,Ha.z+5,0,0,e.map(p=>p.ph.pressure),e.map(p=>p.ph.spray),e.map(p=>p.ph.wakeMom));if(h)for(const p of e)this.wake.render.waveForce(p.ph.comW.x,p.ph.comW.z,this.buf,3.5),p.ph.extForce.set(this.buf[0],0,this.buf[1]),p.ph.extTorque.set(0,this.buf[2],0);if(!this.started)return h;const u=this.order();!this.firstTurnLeader&&u[0].cpu.progress>Nf&&!u[0].retired&&(this.firstTurnLeader=u[0]);const d=!n||this.clock>=Sc;if(!this.result&&d&&e.every(p=>p.cpu.finished||p.cpu.capsized||p.retired||p.removed)){const p=u.filter(m=>m.cpu.finished&&!m.retired),x=n?n.boats:[],g=x.filter(m=>m.flying||m.late).length;this.result={order:p.map(m=>m.lane),move:p.length?Pp(p[0].cpu,p[0]===this.firstTurnLeader):"",flying:e.filter(m=>m.cpu.flying).map(m=>m.lane),capsized:e.filter(m=>m.cpu.capsized).map(m=>m.lane),late:x.filter(m=>m.late&&!m.flying).map(m=>m.lane),st:{...this.st},course:Object.fromEntries(e.map(m=>[m.lane,m.cpu.course])),cancelled:g>=5,violations:n?[...n.violations]:[]},(f=this.onFinish)==null||f.call(this,this.result)}return h}}const $f=new A,qf=new A(0,0,Bn),hs=1/60,bS=.1,he={origin:0,quat:3,comW:7,vel:10,angVel:13,riderB:16,legForce:19,propPos:22,propAxis:25,tilt:28,steer:29,omega:30,cav:31,vent:32,tipRatio:33,propImm:34,throttle:35,propJet:36,diameter:37},Nr=38;class ES{constructor(t,e){M(this,"session");M(this,"epoch",0);M(this,"simT",0);M(this,"rt",0);M(this,"ffs",[]);M(this,"impact");M(this,"hullN");M(this,"wakeDirty",!0);M(this,"dirty",!0);M(this,"workMs",0);M(this,"workTicks",0);M(this,"pool",new Map);Xr(t.physicsMode),Object.assign($e,t.tuning),Object.assign(Du,t.waveOpts),e||(e=new op,e.scale=t.waveScale),this.session=new wS(e,t.opts);const n=this.session.me;n&&t.human&&(Object.assign(n.ph.prop,t.human.prop),n.ph.tilt=t.human.tilt),this.hullN=this.session.boats[0].ph.hull.length,this.impact=new Float32Array(this.session.boats.length*this.hullN)}handle(t){const e=this.session;switch(t.type){case"advance":this.rt=Math.min(this.rt+t.dt,bS);break;case"input":e.humanInput=t.input;break;case"reset":e.reset(t.seed),this.epoch=t.epoch,this.simT=0,this.rt=0,this.ffs.length=0,this.impact.fill(0),this.wakeDirty=this.dirty=!0;break;case"policy":e.setPolicy(t.w);break;case"control":e.setControl(t.w);break;case"ff":this.ffs.push({...t.ff});break;case"recycle":for(const n of t.bufs){const i=this.pool.get(n.byteLength)??[];i.length<8&&i.push(n),this.pool.set(n.byteLength,i)}break}}tick(){const t=performance.now(),e=this.session;e.step(hs)&&(this.wakeDirty=!0);const n=this.hullN;e.boats.forEach((i,o)=>{const r=i.ph.impact;for(let a=0;a<n;a++)r[a]>this.impact[o*n+a]&&(this.impact[o*n+a]=r[a]),r[a]=0}),this.simT+=hs,this.dirty=!0,this.workMs+=performance.now()-t,this.workTicks++}ffDone(t){const e=this.session;return t.sec!==void 0?t.sec<=1e-9:t.toClock!==void 0?e.clock>=t.toClock:t.untilResult!==void 0?!!e.result||e.clock>t.untilResult:!0}pump(t=1/0){const e=performance.now();for(;;){const n=this.ffs[0];if(n){if(this.ffDone(n)){this.ffs.shift();continue}this.tick(),n.sec!==void 0&&(n.sec-=hs)}else if(this.rt>=hs-1e-9)this.rt-=hs,this.tick();else return!1;if(performance.now()-e>t)return this.ffs.length>0||this.rt>=hs-1e-9}}get changed(){return this.dirty}buf(t){var e;return((e=this.pool.get(t))==null?void 0:e.pop())??new ArrayBuffer(t)}snapshot(){const t=this.session,e=t.boats.length,n=this.hullN,i=new Float32Array(this.buf(e*Nr*4)),o=new Float32Array(this.buf(t.boats[0].ph.hullFx.length*e*4)),r=new Float32Array(this.buf(e*n*4));r.set(this.impact),this.impact.fill(0),t.boats.forEach((h,u)=>{const d=h.ph,f=u*Nr;d.origin.toArray(i,f+he.origin),d.quat.toArray(i,f+he.quat),d.comW.toArray(i,f+he.comW),d.vel.toArray(i,f+he.vel),d.angVel.toArray(i,f+he.angVel),d.riderB.toArray(i,f+he.riderB),d.legForce.toArray(i,f+he.legForce),d.propPos.toArray(i,f+he.propPos),d.propAxis.toArray(i,f+he.propAxis),i[f+he.tilt]=d.tilt,i[f+he.steer]=d.steerAngle,i[f+he.omega]=d.engineOmega,i[f+he.cav]=d.propState.cav,i[f+he.vent]=d.propState.vent,i[f+he.tipRatio]=d.propState.tipRatio,i[f+he.propImm]=d.propImmersion,i[f+he.throttle]=d.throttle,i[f+he.propJet]=d.propJet,i[f+he.diameter]=d.prop.diameter,o.set(d.hullFx,u*d.hullFx.length)});let a=null;if(this.wakeDirty){const h=t.wake.render,u=new Float32Array(this.buf(h.h.byteLength));u.set(h.h),a={h:u,half:dp(h,new Uint16Array(this.buf(h.n*h.n*4))),n:h.n,dx:h.dx,originX:h.originX,originZ:h.originZ},this.wakeDirty=!1}const c=t.prestart,l={type:"snap",epoch:this.epoch,simT:this.simT,t:t.t,clock:t.clock,inPrestart:t.inPrestart,result:t.result,st:{...t.st},boats:t.boats.map(h=>({retired:h.retired,removed:h.removed,cpu:{progress:h.cpu.progress,laps:h.cpu.laps,finished:h.cpu.finished,finishTime:h.cpu.finishTime,flying:h.cpu.flying,capsized:h.cpu.capsized,tactic:h.cpu.tactic,tactics:[...h.cpu.tactics],course:h.cpu.course}})),prestart:c?{mode:c.mode,pitOut:c.pitOut,nSlow:c.nSlow,finalCourse:c.finalCourse?[...c.finalCourse]:null,violations:[...c.violations],boats:c.boats.map(h=>({lane:h.lane,course:h.course,slow:h.slow,flying:h.flying,late:h.late,st:h.st,phase:h.phase,launched:h.launched}))}:null,dyn:i,fx:o,impact:r,wake:a,work:{ms:this.workMs,ticks:this.workTicks}};return this.workMs=0,this.workTicks=0,this.dirty=!1,l}}class TS{constructor(t){M(this,"h",null);M(this,"n",0);M(this,"dx",.5);M(this,"originX",0);M(this,"originZ",0);M(this,"waves");this.waves=t}wakeHeight(t,e){const n=this.h;if(!n)return 0;const i=this.n,o=(t-this.originX)/this.dx,r=(e-this.originZ)/this.dx;if(o<0||r<0||o>=i-1||r>=i-1)return 0;const a=o|0,c=r|0,l=o-a,h=r-c,u=c*i+a;return(n[u]*(1-l)+n[u+1]*l)*(1-h)+(n[u+i]*(1-l)+n[u+i+1]*l)*h}height(t,e,n){return this.waves.height(t,e,n)+this.wakeHeight(t,e)}verticalVelocity(t,e,n){return this.waves.verticalVelocity(t,e,n)}}class AS{constructor(t,e){M(this,"mode");M(this,"pitOut");M(this,"nSlow",3);M(this,"finalCourse",null);M(this,"violations",[]);M(this,"boats");this.mode=t,this.pitOut=e,this.boats=Array.from({length:6},(n,i)=>({lane:i+1,course:i+1,slow:!0,flying:!1,late:!1,st:null,phase:"moored",launched:!1}))}get(t){return this.boats[t-1]}}const Yf=8e3;class Op{constructor(t,e={},n=!0){M(this,"visual");M(this,"boats",[]);M(this,"prestart");M(this,"entry");M(this,"humanInput",null);M(this,"clock");M(this,"t",0);M(this,"result",null);M(this,"inPrestart");M(this,"st",{});M(this,"onFinish",null);M(this,"mode","starting");M(this,"stats",{workMsPerSec:0,ticksPerSec:0,snapsPerSec:0,kbPerSec:0});M(this,"acc",{ms:0,ticks:0,snaps:0,bytes:0,since:0});M(this,"init");M(this,"waves");M(this,"worker",null);M(this,"core",null);M(this,"queue",[]);M(this,"log",[]);M(this,"flushing",!1);M(this,"epoch",0);M(this,"frames",[]);M(this,"rT",-1);M(this,"lag",hs);M(this,"lastNewWall",0);M(this,"fx",null);M(this,"fxDyn",null);M(this,"wake",null);M(this,"wakeFresh",!1);M(this,"recycleBufs",[]);M(this,"lastInput","");M(this,"readyTimer",0);M(this,"startedAt",0);M(this,"hullN");M(this,"initClock");this.waves=t,this.visual=new TS(t),this.entry=e.entry??"free";const i=e.prestart??!0,o=e.pitOut??zu;this.prestart=i?new AS(this.entry,o):null,this.initClock=i?Math.min(zp,o-7):qh,this.clock=this.initClock,this.inPrestart=i;for(let c=0;c<6;c++){const l=new xs(this.visual),h=e.humanLane===c+1;h&&Ep(l);const u={lane:c+1,progress:0,laps:0,finished:!1,finishTime:0,flying:!1,capsized:!1,tactic:null,tactics:[],course:c+1};this.boats.push({lane:c+1,ph:l,cpu:u,human:h,retired:!1,removed:!0})}this.hullN=this.boats[0].ph.hull.length;const r=this.me;this.init={opts:e,waveScale:t.scale,physicsMode:ds,tuning:{...$e},waveOpts:{...Du},human:r?{prop:{...r.ph.prop},tilt:r.ph.tilt}:null};const a=typeof location<"u"&&new URLSearchParams(location.search).has("noworker");n&&!a&&typeof Worker<"u"?this.startWorker():this.startLocal()}get me(){return this.boats.find(t=>t.human)??null}get async(){return this.mode!=="local"}setPolicy(t){this.send({type:"policy",w:t})}setControl(t){this.send({type:"control",w:t})}reset(t=Math.floor(Math.random()*1e5)+1){this.epoch++,this.result=null,this.st={},this.clock=this.initClock,this.inPrestart=!!this.prestart,this.dropFrames(),this.rT=-1;for(const e of this.boats)e.ph.impact.fill(0);this.send({type:"reset",seed:t,epoch:this.epoch})}step(t){const e=this.humanInput,n=e?`${e.steer},${e.throttle},${e.leanX},${e.leanZ}`:"";return n!==this.lastInput&&(this.lastInput=n,this.send({type:"input",input:e?{...e}:null})),this.send({type:"advance",dt:t}),!1}fastForward(t){this.send({type:"ff",ff:t})}order(){const t=this.prestart;return this.inPrestart&&t?[...this.boats].sort((e,n)=>t.get(e.lane).course-t.get(n.lane).course):[...this.boats].sort((e,n)=>{const i=e.cpu.capsized||e.retired,o=n.cpu.capsized||n.retired;return i!==o?i?1:-1:e.cpu.finished&&n.cpu.finished?e.cpu.finishTime-n.cpu.finishTime:e.cpu.finished?-1:n.cpu.finished?1:n.cpu.progress-e.cpu.progress})}get wakeTexture(){return this.wake}frame(t){const e=this.frames;if(e.length){const i=e[e.length-1].simT,o=performance.now();this.rT<0&&(this.rT=i-this.lag),this.rT+=t;const r=i-this.lag,a=r-this.rT;Math.abs(a)>.25?this.rT=r:this.rT+=a*Math.min(1,t*4);const c=o-this.lastNewWall<200;c&&this.rT>i?this.lag=Math.min(.1,this.lag+.003):c&&(this.lag=Math.max(hs*.75,this.lag-t*.004)),this.rT=Math.max(e[0].simT,Math.min(i,this.rT));let l=0;for(;l<e.length-2&&e[l+1].simT<this.rT;)l++;const h=e[l],u=e[Math.min(l+1,e.length-1)],d=u.simT>h.simT?Math.max(0,Math.min(1,(this.rT-h.simT)/(u.simT-h.simT))):1;for(let f=0;f<this.boats.length;f++)this.pose(f,h.dyn,u.dyn,d);this.t=h.t+(u.t-h.t)*d,this.clock=h.clock+(u.clock-h.clock)*d,this.placeFx()}const n=this.wakeFresh;return this.wakeFresh=!1,n}dispose(){var t;(t=this.worker)==null||t.terminate(),this.worker=null,clearTimeout(this.readyTimer)}send(t){if(this.mode==="local"){this.core.handle(t),this.pumpLocal();return}this.mode==="starting"&&this.log.push(t);const e=this.queue[this.queue.length-1];t.type==="advance"&&(e==null?void 0:e.type)==="advance"?e.dt+=t.dt:this.queue.push(t.type==="advance"?{...t}:t),this.flushing||(this.flushing=!0,queueMicrotask(()=>this.flush()))}flush(){this.flushing=!1,this.worker&&(this.recycleBufs.length&&this.mode==="worker"?(this.queue.push({type:"recycle",bufs:this.recycleBufs}),this.worker.postMessage({cmds:this.queue},this.recycleBufs),this.recycleBufs=[]):this.worker.postMessage({cmds:this.queue}),this.queue=[])}startWorker(){try{const t=new Worker(new URL(""+new URL("simWorker-YK0ZXjeh.js",import.meta.url).href,import.meta.url),{type:"module"});this.worker=t,t.onmessage=e=>this.onMessage(e.data),t.onerror=e=>{this.mode==="starting"?(e.preventDefault(),this.fallback(`Worker を読み込めない: ${e.message||"error"}`)):console.error("[sim] Worker のエラー",e.message)},this.startedAt=performance.now(),this.readyTimer=window.setTimeout(()=>this.fallback(`Worker の返事がない（${Yf}ms）`),Yf),this.queue.push({type:"init",init:this.init}),this.flush()}catch(t){this.fallback(`Worker を作れない: ${String(t)}`)}}fallback(t){var n;if(this.mode!=="starting")return;console.warn(`[sim] ${t}。物理はメインスレッドで回します`),(n=this.worker)==null||n.terminate(),this.worker=null,this.queue=[];const e=this.log;this.log=[],this.startLocal(e)}startLocal(t=[]){clearTimeout(this.readyTimer),this.mode="local",this.core=new ES(this.init,this.waves);for(const e of t)this.core.handle(e);this.pumpLocal()}pumpLocal(){const t=this.core;t.pump(),t.changed&&this.receive(t.snapshot())}onMessage(t){if(t.type==="ready"){if(clearTimeout(this.readyTimer),this.mode!=="starting")return;this.mode="worker",this.log=[],console.info(`[sim] 物理は Worker で回します（準備 ${Math.round(performance.now()-this.startedAt)}ms）`)}else t.type==="error"?console.error("[sim] Worker:",t.message):this.receive(t)}give(...t){for(const e of t)e&&e.byteLength&&this.recycleBufs.push(e);this.mode==="local"&&this.recycleBufs.length&&(this.core.handle({type:"recycle",bufs:this.recycleBufs}),this.recycleBufs=[])}dropFrames(){for(const t of this.frames)t.dyn!==this.fxDyn&&this.give(t.dyn.buffer);this.frames=[]}receive(t){var c,l,h,u,d,f;const e=this.acc,n=performance.now();if(e.ms+=t.work.ms,e.ticks+=t.work.ticks,e.snaps++,e.bytes+=t.dyn.byteLength+t.fx.byteLength+t.impact.byteLength+(t.wake?t.wake.h.byteLength+t.wake.half.byteLength:0)+2e3,e.since||(e.since=n),n-e.since>=1e3){const p=1e3/(n-e.since);Object.assign(this.stats,{workMsPerSec:e.ms*p,ticksPerSec:e.ticks*p,snapsPerSec:e.snaps*p,kbPerSec:e.bytes*p/1024}),Object.assign(e,{ms:0,ticks:0,snaps:0,bytes:0,since:n})}if(t.epoch!==this.epoch){this.give(t.dyn.buffer,t.fx.buffer,t.impact.buffer,(c=t.wake)==null?void 0:c.h.buffer,(l=t.wake)==null?void 0:l.half.buffer);return}const i=this.frames,o=i[i.length-1];for(o&&(t.simT-o.simT>.25||t.simT<=o.simT)&&(this.dropFrames(),this.rT=-1),i.length&&t.simT>i[i.length-1].simT&&(this.lastNewWall=n),this.frames.push({simT:t.simT,t:t.t,clock:t.clock,dyn:t.dyn});this.frames.length>6;){const p=this.frames.shift();p.dyn!==this.fxDyn&&this.give(p.dyn.buffer)}this.frames.length===1&&(this.clock=t.clock,this.t=t.t);const r=this.fxDyn;this.give((h=this.fx)==null?void 0:h.buffer),this.fx=t.fx,this.fxDyn=t.dyn,r&&!this.frames.some(p=>p.dyn===r)&&this.give(r.buffer);const a=this.hullN;if(this.boats.forEach((p,x)=>{const g=p.ph.impact;for(let m=0;m<a;m++)t.impact[x*a+m]>g[m]&&(g[m]=t.impact[x*a+m])}),this.give(t.impact.buffer),t.wake){const p=this.visual;this.give((u=p.h)==null?void 0:u.buffer,(d=this.wake)==null?void 0:d.half.buffer),p.h=t.wake.h,p.n=t.wake.n,p.dx=t.wake.dx,p.originX=t.wake.originX,p.originZ=t.wake.originZ,this.wake=t.wake,this.wakeFresh=!0}if(t.boats.forEach((p,x)=>{const g=this.boats[x];g.retired=p.retired,g.removed=p.removed,Object.assign(g.cpu,p.cpu)}),this.prestart&&t.prestart){const p=this.prestart;p.mode=t.prestart.mode,p.pitOut=t.prestart.pitOut,p.nSlow=t.prestart.nSlow,p.finalCourse=t.prestart.finalCourse,p.violations=t.prestart.violations,t.prestart.boats.forEach((x,g)=>Object.assign(p.boats[g],x))}this.inPrestart=t.inPrestart,this.st=t.st,t.result&&!this.result&&(this.result=t.result,(f=this.onFinish)==null||f.call(this,t.result))}pose(t,e,n,i){const o=this.boats[t].ph,r=t*Nr,a=(l,h)=>l.set(e[r+h]+(n[r+h]-e[r+h])*i,e[r+h+1]+(n[r+h+1]-e[r+h+1])*i,e[r+h+2]+(n[r+h+2]-e[r+h+2])*i),c=l=>e[r+l]+(n[r+l]-e[r+l])*i;a(o.origin,he.origin),a(o.comW,he.comW),a(o.vel,he.vel),a(o.angVel,he.angVel),a(o.riderB,he.riderB),a(o.legForce,he.legForce),a(o.propPos,he.propPos),a(o.propAxis,he.propAxis),Wa.fromArray(e,r+he.quat),jf.fromArray(n,r+he.quat),o.quat.slerpQuaternions(Wa,jf,i),o.tilt=c(he.tilt),o.steerAngle=c(he.steer),o.engineOmega=c(he.omega),o.propState.cav=c(he.cav),o.propState.vent=c(he.vent),o.propState.tipRatio=c(he.tipRatio),o.propImmersion=c(he.propImm),o.throttle=c(he.throttle),o.propJet=c(he.propJet),o.prop.diameter=n[r+he.diameter]}placeFx(){const t=this.fx,e=this.fxDyn;!t||!e||this.boats.forEach((n,i)=>{const o=n.ph,r=o.hullFx,a=r.length,c=i*a,l=i*Nr+he.origin;Wa.fromArray(e,i*Nr+he.quat),Xa.copy(o.quat).multiply(Wa.invert());const h=e[l],u=e[l+1],d=e[l+2];for(let f=0;f<a;f+=xs.FX_STRIDE){const p=c+f;Qn.set(t[p]-h,t[p+1]-u,t[p+2]-d).applyQuaternion(Xa).add(o.origin),r[f]=Qn.x,r[f+1]=Qn.y,r[f+2]=Qn.z,Qn.set(t[p+3],t[p+4],t[p+5]).applyQuaternion(Xa),r[f+3]=Qn.x,r[f+4]=Qn.y,r[f+5]=Qn.z,Qn.set(t[p+6],t[p+7],t[p+8]).applyQuaternion(Xa),r[f+6]=Qn.x,r[f+7]=Qn.y,r[f+8]=Qn.z;for(let x=9;x<xs.FX_STRIDE;x++)r[f+x]=t[p+x]}})}}const Wa=new bn,jf=new bn,Xa=new bn,Qn=new A,Ol=.8;function RS(s){const t=document.createElement("canvas");t.width=256,t.height=128;const e=t.getContext("2d");e.fillStyle="#f6f6f2",e.fillRect(0,0,256,128),e.strokeStyle="#d8262b",e.lineWidth=10,e.strokeRect(5,5,246,118),e.fillStyle="#d8262b",e.font="bold 84px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(s,128,70);const n=new es(t);return n.colorSpace=Xe,n}class CS{constructor(t){M(this,"group",new Ge);M(this,"buoy",new Ge);M(this,"surface");this.surface=t;const e=new Qt({color:16742930,roughness:.45}),n=new Qt({color:16119285,roughness:.5}),i=new zt(new qs(.6,24,16),e);i.scale.set(1,.85,1),i.position.y=.3,this.buoy.add(i);const o=new zt(new Sn(.61,.61,.14,24,1,!0),n);o.position.y=.3,this.buoy.add(o);const r=new zt(new Sn(.03,.03,1.1,8),n);r.position.y=1.2,this.buoy.add(r);const a=new zt(new je(.45,.3),new Qt({color:16742930,roughness:.7,side:ke}));a.position.set(0,1.6,.24),a.rotation.y=Math.PI/2,this.buoy.add(a);for(const h of this.buoy.children)h.castShadow=!0;this.group.add(this.buoy);const c=new Qt({color:9080724,roughness:.6,metalness:.3}),l=new Qt({map:RS("200"),roughness:.6});for(const[h,u]of[[Ht.x0-1.2,1],[Ht.x1+1.2,-1]]){const d=new zt(new Sn(.1,.12,4,8),c);d.position.set(h,Ol+2,cc),this.group.add(d);const f=new zt(new je(3,1.5),l);f.position.set(h+u*.06,Ol+3.6,cc),f.rotation.y=u*Math.PI/2,this.group.add(f);const p=new zt(new re(.08,1.5,3),new Qt({color:4473924}));p.position.set(h,Ol+3.6,cc),this.group.add(p)}}update(t){this.buoy.position.set(ji.x,this.surface.height(ji.x,ji.z,t)-.15,ji.z)}}const Bp=null,Ro=[.1926,.2475,.3958,-.0365,-.2572,.5981,-.5127,.2167,-.1253,.7864,-.2382,.6256,-.1895,-.538,.0042,-.4416,-.2519,-.1609,-.0839,-.1875,-.1231,-.3436,-.2907,-.1585,-.3531,.7549,-.4632,-.2659,-.2104,.2827,.1559,-.0482,.0826,.379,.4887,.048,-.1186,.2618,-.5639,-.3165,.3033,-.3015,.3639,-.2459,.0921,-.3817,.629,.0833,-.0908,-.3968,-.2557,.0248,-.8002,-.0592,.3144,.3755,-.5335,-.1592,.2774,.4657,.2748,.1749,-.3148,-.1609,-.0643,.3156,.7927,.572,.4398,-.1234,.6946,.214,.4851,-.9385,.1782,-.1884,-.5706,.5964,.6151,.3132,.2685,-.1505,-.0616,-.495,.0761,.2878,.304,-.4671,.1447,.5234,-.6087,.499,-.2566,.0591,.6205,-.4037,.2236,.3584,-.6405,-.1046,-.3055,-.4507,-.2857,-.4908,-.3457,.1718,-.4723,.5592,-.3801,-.2347,.5275,-.489,.1944,-.3196,-.1317,.0828,.2161,.2946,.1367,.5033,.0633,-.3003,.1434,-.1548,.1983,-.4028,.5206,-.159,-.6197,-.3606,.2883,-.2155,.4667,.0251,-.3401,-.091,-.3421,-.6866,-.628,.1666,.2681,-.2416,-.1728,.8375,-.0596,-.346,-.5292,-.2168,.3115,.3433,.5408,-.0577,-.4568,-.366,-.0042,-.1521,.1408,.0712,-.1106,.7307,.1406,.0518,-.0312,.2592,.0396,-.2841,1.1935,-.1283,.1336,-.9055,-.2929,.249,.4381,.1847,-.1144,-.6688,.0946,.3593,-.3604,.018,.0818,-.1878,-.1188,-.454,-.6132,-.2481,-.3937,-.019,.2418,-.4469,.5181,-.1782,.3925,-.0864,-.1779,.209,-.0037,-.0537,-.7041,-.2946,.8541,.366,.0974,-.1737,-.0033,-.5754,-.0272,-.4194,.07,-.7096,.5684,-.1516,-.1963,-.0996,-.2349,-.6181,-.0366,.0183,.0344,.4203,.2164,-.0699,-.275,-.242,.0706,-.2304,-.4037,.7062,-.0501,-.3534,-1.1271,-.0515,-.0179,1.9032,.2256,.0955,.0068,-.0353,-.2996,-.262,.0639,.3983,.6716,.5455,.5984,-.6258,.028,.3849,-.1492,.0485,-.1258,.2095,.5319,.1571,-.1748,-.0351,-.0803,-1.2504,-.1379,-.2362,-.5518,-.2644,-.0487,-.7956,.3743,-.4582,-.3795,.4308,-.2719,.1212,.2463,-.5269,.2481,.2324,.2949,.3366,.2885,.4984,-.7163,.6494,.0263,-.0661,-.2302,.0279,.3141,-.2677,.3577,-.6856,.4555,-.1063,.2348,-.3819,.0667,-.0387,.9776,.0845,-.4936,-.1086,-.0609,.2128,-.3529,-.3862,-.0913,-.7422,.4414,-.4794,-.387,.8473,.8417,-.1105,-.1776,-.0877,-.3581,.6348,.0455,-.0783,.016,.532,-.633,.0145,-.6966,-.1101,-.3415,.6965,-.3076,.1439,-.1865,.2627,-.2998,-.2293,-.2798,.2397,-.4845,.2172,.1968,.6763,.1152,.1884,-.3561,-.228,-.5158,.7741,-.4396,-.0585,-.2197,.0471,-.1506,.3963,-.505,-.0988,.0482,.2237,-.0017,-.436,-.4899,-.1424,-.3918,.8841,-.2184,.3719,.6781,-.2916,-.3497,-.8868,.7952,-1.2691,.2713,-.2798,-.2984,-.1478,-.0595,-.4342,-.1691,-.272,.0206,.2745,-.1412,.3179,.3106,.0537,-.1637,-.4499,.2091,-.1376,-.2254,-.117,.1607,.1429,.1661,.4858,-.5135,.3308,.2191,-.2718,-.3185,.3741,-.3394,.106,-.0507,.3919,.2595,.1951,.0169,-.6853,-.1708,-.7582,.3967,-.1162,.2419,-.1347,-.5115,-.4024,.7988,-.5299,.5859,-.1071,.5337,.6482,.013,-.1973,.754,.4439,-.1583,.1593,.2251,-.2271,-.305,-.4851,-.7047,.082,-.8398,.3343,-.17,-.5593,-.7378,.0048,.6797,.3209,.314,-.0521,.0589,-.1331,.648,-.0448,.5033,.0457,.2871,-.1768,-.2181,-.5854,-.087,.3955,.2119,-.0349,.8322,.3652,-.248,-.1407,-.2691,.3489,.1432,.0848,.3472,-.6344,.8399,.3579,.4591,-.2067,.0396,-.057,.0503,-.001,-.1774,.1871,.0011,.3773,.362,.1548,-.5564,-.0772,.0353,.3973,-.7495,-1.2501,-.3222,.003,.2195,-.2293,-.3852,1.4179,-.5029,-.2569,.3343,-.0087,.384,-.0616,.5047,.1381,-.1871,-.0445,.1661,.1678,.2667,.0271,.1391,.1339,.3506,-.293,.0544,.0649,.5209,.421,-.1955,.0363,-.2823,-1.042,.0139,.3633,-.2015,-.5312,.1583,-.6263,1.0048,.7316,.1523,-.3017,-.7055,.2694,.0812,-.3342,-.2113,.0066,.0422,-.1913,-.1212,.1537,-.4261,.3542,.0258,-.1199,-.163,.1229,.0494,.3339,.0675,.1774,.4066,-.5915,-.4164,.0825,-.0115,-.5966,-.4073,-.0081,-.7083,-.2876,-.3135,-.1109,.4601,.5168,.0355,.1256,-.5357,.2457,.3886,.2836,.089,-.3963,.2312,-.1426,-.1087,-.1215,-.4417,-.1813,.2975,.1221,.0821,.4186,-.0664,.1401,.2922,-.5342,.6149,.8267,.1602,-1.1714,.511,.7984,-.1892,.4295,.3511,.0255,-.0161,.1502,.153,-.1182,.3027,-.1779,.3003,.3962,.0332,-.2247,-.0534,.1318,-.152,-.3576,-.3135,-.0422,-.3814,.3139,.0928,-.1492,-.3936,-.2898,-.3604,.4168,.1377,-.0621,-.6037,-.2567,-.0897,.212,-.0956,.2568,-.4566,.0056,.2237,-.7469,.1717,-.1122,-.0833,.1364,-.0813,-.3121,.2355,-.2432,-.2519,-.0485,-.4755,.4377,.3329,-.2856,-.1861,-.4055,.0114,.1514,.8139,.0256,-.4904,-.4048,-.3544,-.0192,.8189,.0875,-.0437,-.4289,.2445,-.4159,.4555,.2087,.1472,-.1403,-.1924,-.4454,-.7106,-.2748,-.1207,-.1032,-.6894,.2102,-.3202,.217,.1088,.13,-.3038,-.663,-.4837,.6594,.0561,.2925,.0248,-1.2579,-.0305,.2473,.1597,-.216,-.305,.2028,-.1262,-.7836,-.0283,.2277,-.087,.0387,-.1829,.3786,.0998,.3565,.5727,.264,-.5854,-.2696,-.2452,-.3749,-.0656,.0871,.1948,.4457,.3036,.1604,.2312,.1963,.1498,-.269,.1912,-.178,.1183,-.0177,.0892,-.7496,-.0305,-.476,-.1886,.2132,-.0873,.3105,-.1913,.2085,-.335,.0358,-.3014,.3241,.0427,-.2894,-.2042,-.2211,-.1306,.4414,.1906,.3479,.0471,.0335,.0878,.3812,.1744,-.4121,-.0294,-.2145,.0442,-.113,-.2574,.0953,.191,.4187,.1427,-1.1088,-.4798,.413,-.2242,.051,-.1666,-.062,.2249,.0981,-.1819,-.1916,.1515,.2581,-.5288,-.4493,.7167,-.1661,-.161,-.4353,-.849,-.4939,-.3702,-1.0686,.6962,-.1787,-.2873,-.5587,.084,.3317,.4555,.1283,-.7863,-.9666,-.6706,-.2516,.2873,.5213,-.2361,-.2466,.1684,.032,.2722,-.0171,-.1159,.126,.3069,-.1887,.1962,-.431,-.1054,.164,-.7266,-.3382,.2862,.4753,-.1465,-.0604,-.2797,.2558,.0969,.7225,-.0798,.6075,-.0182,-.1691,-.4607,-.0341,-8e-4,.0632,-.3941,-.2545,-.0707,.7188,-.1298,.392,-.2834,.0464,.2524,.052,.4527,.2373,.2037,-.3034,-.4336,-.2658,.0378,.8915,.2706,-1.0539,.2869,-.706,-.5988,-.2911,-.0421,.1295,.2198,-.4073,-.4652,-1.06,.3596,-.0052,.3761,.0424,.1035,.5735,.3022,.1833,-.2224,-.2203,-.0138,-.3125,-.1923,.1706,.3564,-.4929,1.1718,.404,-.2487,.6754,.3363,.4634,.2331,.455,-.1848,-.1674,.4168,-.4969,-.1924,-.2828,-.2698,-1.0828,-.5994,-.1473,.0551,-.1114,-.3236,-.1119,-.4805,-.099,-.1897,-.2508,-.245,.1547,.2867,-1.8584,.6136,.4061,.0596,.0143,-1.1586,-.7161,.2113,-.4367,.1544,-.5879,.034,-.1171,-.2247,-.0153,.5743,-.2371,.0413,.3963,.2372,-.0632,-.0084,.0172,-.3339,-.5514,-.3831,-.1164,-.4217,.1663,.3896,-.2325,.003,-.981,-.7472,-.1893,.0624,-.2728,-.702,-.2235,.3033,-.5312,-.0155,.2736,.1633,-.6142,.5662,-.5356,.24,-.2961,.3029,.3685,-.0942,.0532,.0994,.1237,-.4577,-.2407,-.1662,-.0928,-.2542,.5863,-.2796,.3662,.1856,.1993,-.5949,-.3354,.414,-.1931,.0476,-.2071,.2012,-.0293,-.4,.176,.0956,.7806,.187,.1751,-.3921,.304,-.3642,.1886,.0014,.5775,-.3394,.1649,-.3332,.4738,.1135,-.0954,-.2328,-.0821,-.1514,.3145,-.0429,-1.3036,-.0063,-.4561,.2877,.3535,-.5044,-.6909,-.1066,.3287,.1411,1.107,.3315,.037,.09,-.1822,.5708,.6858,1.0984,.281,.0375,-.5877,.1386,.0109,.3019,-.0965,.2735,-.2349,.0108,-.8195,-.0161,-.1629,.9249,.2268,.0428,.0592,.7611,-.3646,.0268,-.142,.2117,-.2999,.4276,-.1375,-.5445,-.4558,.027,-.4114,.1417,-.0229,-.0602,.5467,-.0102,.8445,-.0659,-.2259,.0109,.3819,-.1452,-.0086,-.3986,.4129,-.4419,.6694,-.4611,.286,-.6972,.7143,-.6479,-.1264,-.3225,-.4815,.4848,.0766,.2708,-.2738,-.1124,.4253,.2537,-.7203,.007,-.2881,.3078,-.1626,-.2383,-.2972,-.2281,-.1747,.1167,-.0019,-.3437,.3729,-.2855,.0716,.5474,-.0184,-.1578,.7428,.0672,-.2001,.8689,.3778,.282,-.4128,.5792,-.1211,-.3448,.5938,.4345,-.5728,-.0221,.2411,.5192,.0167,.5256,-.0677,.061,.4223,.1655,-.1685,.0609,-.1446,-.4344,-.452,-.3674,.4524,.2586,-.6482,-.3518,.7277,-.0733,.177,-.3041,.4752,.4556,-.4361,-.1756,-.2774,-.212,-.301,.5038,.9394,.4026,.1319,.4192,-.0234,-.0441,-.317,-.0027,.3564,.1352,-.507,.1681,.2864,.2744,.011,.1777,.1971,.3197,-.0995,.4958,.0932,-.2035,-.0142,1.2311,.0434,-.1432,-.0333,-.0714,.2595,.1349,.0853,-.29,-.3958,-.2202,.3907,-.1153,-.1605,-.0146,.2949,.286,-.5023,.2682,.0326,-.0485,.04,.2446,-.0638,-.0297,.0239,.5179,-.7128,-.3707,-.4634,.0932,.4289,.5767,.3206,-.1263,.1468,.1195,.0306,.3402,-.2591,-.4491,.3821,-.3308,.4018,.3726,.1323,-.2141,.0797,.2158,.1543,-.617,-.1596,-.0972,.0681,.4388,.3405,-.1199,-.4964,-.2058,-.5899,-.0565,.3484,.5301,.3615,-.5615,.6084,-.1681,.0985,.2594,.2366,.3042,-.4059,-.0525,-.3552,-.024,-.4546,.5478,.1555,.2456,.0842,.1475,-.1899,-.202,.1082,-.4309,-.2074,-.1461,.4141,.1106,.4674,.3064,-.3592,-1.0415,.1118,-.5369,.8134,-.2451,.403,.031,3.4503,-.038,-.6357,-.126,-.4996,-.4169,.5092,.0467,.3464,.2901,-.0342,1.4732,.5019,.3783,.4464,-.1417,-.146,-.0579,-.2849,-.0949,-.2131,.0942,-.8076,.4623,.7612,.517,-1.4679,.1769,.7836,1.0074,.7617,-1.0471,-.5752,-.1134,.485,-.083,-.6045,.3596,-.1747,-.7103,-.1472,-.1881,.6658,.2505,-.3855,-.2772,-1.1963,.0759,.0946,.0887,-.0167,-.2828,.1019,-.1193,.3624,.012,-.3718,-.2146,.2789,.1125,.1328,.5797,-.583,.3505,.3137,-.0701,-.2329,.6359,.0721,.3848,.0022,-.1202,-.2909,.0837,.4375,-.5639,-.2246,.1207,.1659,-.3693,.0497,-.4423,-.0538,.4375,.3036,-.5449,-.0079,-.6507,.6142,.7367,1.205,-.237,.1567,.5243,-.1592,-.3043,-.1935,.1762,.6893,.4235,.1055,-.0267,-.0213,-.1348,-.3787,-.4331,.3948,-.1848,-.6453,-.7235,-.0172,-.2343,-.2,-.1812,-.0718,.3001,.2445,-.0796,.0302,.0109,.135,-.0327,1.2388,-.0652,.2862,.3029,-.5381,-.498,.7529,-.0517,-.2166,-.2978,-.1522,.0561,-.1277,-.1352,-.4569,.311,.0707,-.2567,-.9227,-.2051,-.2324,.1352,-.3634,-.0894,.0515,-.3218,.1678,.5432,-.7799,-.394,-.5218,-.0444,-.0837,.0195,.2092,-.6606,-.1691,-.0897,-.1283,-.112,-.0349,.3694,-.3709,.17,-.284,-.3461,-.0163,.0948,.0821,-.0196,.1326,-.1527,-.2975,-.4385,.0063,.2929,.247,.4168,-.0978,.1889,-.3298,.7582,-.2682,.5952,-.0403,-.3997,-.0963,-.6237,-.0164,-1.0297,.6065,-.6269,-.0258,-.3262,-.1499,.0568,-.3389,.209,.4284,.1628,-.1197,-.5565,.1697,-.0227,.4582,-.0017,.2114,.0544,.0547,.1069,.1819,-.0314,-.223,.6771,.3835,.2646,.4061,.2277,-1.1028,-.448,-.4066,-.6764,-1.861,-.3736,.0865,.8165,.0761,.2475,-.0153,-.2349,.4931,-.3257,.3844,-.1608,.0602,-.4008,-.0222,-.1008,-.1692,.333,.0456,.1997,-.1456,-.0777,-.1587,-.1795,-.3144,.0191,-.6508,.0995,.9085,-.1707,.7038,-.0344,-.1863,.6568,-.2578,.0443,-.7926,-.1585,.2667,-.6062,-.0621,.5798,-.0056,.1532,.2533,.3781,.0058,.1877,-.2119,.3178,-.1664,-.4032,.3533,-.3024,.5593,-.2904,.1628,-.1875,.6545,-.1816,-.2758,.9743,.6606,-.4717,-.3352,.1749,.1067,.0962,.135,.5337,.0722,-.5763,-.1814,-.2929,-.2529,.2021,.0016,-.6083,-.5783,-.1142,.1526,-.2229,-.1394,.1929,.657,-.0738,-.7511,.1887,-.2312,.212,.1235,.1551,-.0203,.4434,.0569,.2508,-.0537,.2353,-.2267,.627,-.0491,-.0532,-.1651,.1868,.69,.6928,.4979,-.0656,.3089,.2612,.1675,-.8645,.0905,-.9127,.3493,.1969,.2539,.6245,-.1248,.205,-.1771,-.0792,.2636,.2293,.3631,.1963,-.0033,-.4392,-.226,-.0494,.3726,.0135,-.3187,-.2354,-.083,-.0095,-.2619,.2922,.2458,-.2311,-.1212,.1115,-.2871,-.1264,.2747,-.524,-.1695,.11,-.1036,-.6203,.0217,-.1379,-.4147,-.0606,.1805,-.2586,.004,-.1373,.706,.081,.1911,-.3103,.3426,-.5149,-.0549,.3131,.0295,.3468,-.6508,-.452,.0762,.0456,-.0343,.9831,.0806,.1281,-.0808,.3771,.0274,.0028,-.5034,-.1527,-.1585,.1091,.1931,.1573,.1469,-.5332,.0613,-.6107,.3339,.3069,-.3335,-.2928,-.2182,-.0685,.1092,.1197,.8586,-.6382,-.215,.7445,-.1393,.1993,.7685,.0714,-.1587,1e-4,.1328,-.0406,.4436,-.3154,.1324,-.1152,.1406,-.2383,-.2719,-.2771,-.3539,.7615,-.1067,-.0761,.0116,-.3591,-.6107,-.2919,.0971,.3256,.824,.2692,-.124,-.1036,-.2907,-.0374,-.0893,.2496,.3192,-.9818,-.3789,.3981,.4108,-.5211,-.4366,-.0816,.1392,-.461,-.0532,.0547,.5177,.1128,-.027,.3189,-.5806,-.12,.0644,.0469,.4507,-.0778,-.3602,-.0967,-.4566,-.3211,.289,.085,.6039,-.0808,.1152,-.0662,.0693,-.1652,.3812,.5198,.0436,-.6508,-.2761,-.366,-.7279,-.6226,-.49,-.3549,-.9382,-.0814,.3822,.1095,.0261,-.017,.0862,-.1101,-.4176,-.0623,-.6667,-.3762,-.4372,-.0322,-.803,.0166,.4243,-.7144,-.2852,-.0871,.4955,.4903,.1433,.4025,.6017,-.0655,.1438,.4608,-.8714,.25,.3637,-.2127,-.1694,-.1507,-.3908,.3346,-.0626,-.2063,.0911,-.7042,.1103,.2696,.5973,.3836,-.1532,-.2276,.5203,.0272,-.0281,-.3972,.2169,-.0611,.1097,.2962,.1151,.0198,-.1429,.1771,.2584,-.0548,.1924,-.1507,.9154,-.0691,-.5718,.0456,-.1206,.4524,-.0753,.2384,-.144,.0131,.1877,-.3735,-.3967,-.1106,-.4219,.3794,-.3282,.1111,-.177,-.2397,-.4933,-.0095,-.5753,-.0914,.1735,-.0045,-.4791,-.1998,.3935,-.3098,-.361,.2427,.156,-.3492,.1362,.2462,.1757,.3627,-.0739,.0338,-.102,-.2246,.1598,-.0059,.3356,-.3056,-.7197,.1868,.1721,-.3128,.0559,-.3815,.4242,-.0417,-.1339,.7578,.9097,-.035,-.3094,-.0285,.3821,-.0488,.3007,.2873,-.485,.6347,.6159,.0513,-.5078,-.4846,-.1025,-.6246,.2686,.009,.3707,-.3663,-.2047,.5243,.1042,-.1006,-.5771,.041,.0614,-.7732,.1621,-1.5022,-.5863,.8165,.0613,.2094,-.4513,-.3372,-.135,.5218,.2155,.257,.315,.6361,.4009,.9241,-.0621,.1111,-.2889,.1467,.0413,.0514,-.5488,.2494,-.4605,.0024,.4375,.0229,-.7428,.3475,.0671,.2058,.0749,-.1469,-.2886,-.0852,-.4146,-.1736,.1508,.0023,.1078,-.0255,-.6645,-.105,.1731,.3548,-.0068,-.1633,-.0513,-.1384,-.3016,-.0072,.0086,-.5932,.5493,-.4389,.6919,-.2991,.1286,.0505,.2658,.1575,-.2268,-.2604,-.2693,.1269,.2382,-.3644,-.3715,-.1639,.1567,.3849,.0158,.5191,.5599,.7913,.2868,-.2695,.2735,.1738,-.0156,-.2769,-.1999,-.2188,-.9151,-.2139,.4783,-.6132,.113,-.1221,-.5552,-.079,.0043,-.1404,.1101,.2411,-.3172,-.0966,.0959,.4003,-.1056,.3885,.2056,-.331,.1449,-.1539,-.3236,-.2525,-.5761,-.5549,-.5898,-.1526,-.4198,-.6573,.1196,.1633,1.0574,.271,.3314,.0357,-.5741,-.8825,-.324,-.0013,.3175,-.3264,-.0248,-.8356,-.3436,.5652,-.8705,-.0688,-.3917,-.298,-.2249,-.0127,-.4281,-.253,-.0621,-.2058,.1648,.3852,.18,-.071,-.4095,-.2425,-.0601,-.37,.2101,-.7815,-1.15,-.5716,.1594,-.4841,-.2816,.0675,.1456,.4663,.5766,-.3287,-.1231,.5154,-.1325,.2429,-.2138,.0466,-.4683,-.2479,.5409,.2228,-.0723,.0272,-.3346,-.4794,.0653,-.4283,-.0908,-.2195,.0977,.2536,.5029,.5861,.2054,.2351,-.2726,.1133,-.3471,-.0244,-.087,.2511,.0776,-.0437,.3933,-.2139,.0838,.7492,.3966,-.0147,.2016,.0643,-.297,-.2579,-.6276,-.331,.1673,-.1603,.5384,-.4595,-.1448,-.0726,.0141,-.1312,-.2737,-.5027,.1253,.1837,-.2896,-.2685,.3682,.3217,.2097,.3765,-.2975,-.0637,.0401,-.0764,-.0868,-.2438,.5537,-.3818,-.2757,.284,-.368,.5555,-.1394,-.3641,.3009,-.1334,-.1002,.0756,-.5065,.424,-.0657,-.5551,.2089,-.305,-.0905,.6513,.3899,-.5689,.0099,-.0635,-.3676,.1733,-.1916,.1739,-.7918,-.5439,.3277,-.2641,-.4165,-.4693,.3243,.2081,.1121,.0604,.1268,.2433,.0993,-.478,-.0535,.1647,-.013,.7883,-.1452,.4898,.1576,-.2182,-.2146,-.2072,-.4627,-.3567,-.0484,.052,-.1428,-.598,-.2322,.1402,.2257,.331,.4763,.1085,.752,-.0787,-.0699,-.327,.2543,-.269,.2287,.0539,-.4903,-.2266,1.105,-1.5208,1.2024,1.0661,-.9582,.4394,.6147,-.4451,.0438,.6351,.6118,.7654,.9778,-.3181,.1413,-.5347,1.1742,-.4406,.4764,-2.0942,.0846,-.7529,-.0259,.0608,.561,.2962,-1.2888,.2517,-.0655,-.5222,-.8045,.0908,.0581,-1.3421,.7,-.8703,-.3352,2.1704,-.0547,.5568,-.9577,.1494,-1.0358,1.6003,-.7899,.7528,.9012,.4219,.0343,.1941,-.0165,-.099,.124,-.5893,-.819,-.0373,-.3527,.2006,.621,.2275,.3756,-.2869,.0508,.3087,.2586,.8968,-.1255,.1482,.2654,.2976,.1748,.3493,.379,.3097,-.1434,-.0573,-.4375,-.2711,.3497,.0882,-.1791,-.1944,.4393,-.0705,-.4641,-.8921,-.5432,-.0101,.4849,.5384,.6494,-.6616,-.3618,.1001,-.2613,.4139,-.0645,-.1692,.4313,-.0156,-.1698,-.1406,.1297,.3661,.003,.4869,.7734,-.2311,.2251,.0127,.204,.7098,-.0768,-.3334,.0248,-.972,.0471,-.0224,.6119,-.0491,.3463,-.1677,.0578,.1551,-.1371,.1315,-.1096,-.385,-.593,-.0018,.1155,-.7331,.4315,.123,.8326,.3866,.8322,-.0859,9e-4,-4e-4,.1262,-.8206,-.1641,.1529,-.2328,1.1272,-.0845,.2786,-.0044,.8035,.0681,.2933,-.0416,-1.0503,.0485,.7254,.7123,.1382,-1.6855,.7591,-.9822,.5557,.4741,.2944,-.1982,1.6724,-.3014,-1.0518,.626,-.2328,-.1735,-.1509,-1.1309,.1063,.0536,-.7214,.4232,-.0927,-.2081,.0712,-.6159,-.2639,.9288,-.484,1.0202,-.9905,-.4079,-.104,-1.562,-.7518,.2939,-.1353,-.3446,-.4273,-.3723,-.0144,-.3165,.2372,.084,-.7163,-.23,.0309,-.1358,-.6573,.126,.1985,.5621,.1822,.3633,-.2947,-.414,-.3485,.1432,.1001,.3155,.094,.0718,.1243,-.1109,-.0299,.2219,.2164,-.4025,-.1538,-.1666,.1244,.2409,-.5251,.1734,-.1453,-.2658,-.0608,.0687,.2036,.1458,-.5073,.0059,.1704,.2613,-.1225,-.2481,-.1632,-.0835,.1164,-.1064,-.3722,.5048,-.07,.2317,-.0721,-.5318,.1812,-.2114,.105,-.0556,.2278,.1627,.1641,-.0128,-.1566,8e-4,-.451,-.5724,-.2533,.0775,-.1472,-.5154,.02,-.4052,-.3,-.0739,-.0146,-.4565,-.1233,.3137,-.0621,.725,-.6261,-.0943,-.1233,-.6623,.1927,.3376,-.9355,.3893,-.2556,-.1556,-.276,-.1588,-.1441,-.2082,.2026,1.0178,-.0647,.3367,.3721,-.2819,.2326,-.1087,-.21,-.8889,.5986,.5748,.1325,-.2326,-.0698,-.2766,.57,-.1384,.8199,-.6773,.1198,-.2293,-.1605,-.6675,-.321,.4718,-.1799,-.3579,.2695,-.3156,.4302,-.1437,.6951,.2717,.2641,-.2567,.4516,-.3527,.0284,.8441,-.5918,-.0933,-.2387,-.4369,-.3579,.1757,-.6463,.2575,.0215,.2866,-.3275,-.3722,-.3273,-.2798,-.0682,.4088,-1e-4,-.2742,.4626,-.0747,-.2243,-.2095,-.2595,.3106,-.2891,-.2015,.3951,.2051,.1526,.0258,-.4555,.4581,.2175,.4508,.1867,-.3748,.2019,.659,-.0371,-.0382,.337,.0919,.4111,.0844,-.365,.5072,.2242,.2018,-.0674,.025,-.0433,.4558,-.2447,-.3222,.4536,-.1783,.5216,.391,-.0075,1.0836,.3157,-.0561,.4836,-.366,-.5364,-.1153,.3579,-.3187,.2953,-.4842,-.0908,-.2396,.2869,.1951,.4063,.1492,.5759,-.0485,-.1341,.2865,-.0087,-.102,-.2923,.0125,.4518,-.2056,.3029,.2494,-.5558,.2071,-.2901,.0416,-.25,.0415,-.2781,-.1367,-.1359,.454,.2315,-.0025,.3459,-.7325,-.5013,.0117,-.2027,-.6052,.2679,.4523,.2686,.0478,.3374,.2534,-.5036,-.0724,-.114,-.264,.0758,.1185,-.0587,.1454,.4691,-.1845,.2193,-.637,-.3595,.0529,.2315,.0022,.2205,.1891,.0176,-.4923,.2349,.1491,-.521,-.3759,.1861,.3488,-.0697,.4725,.03,-.109,-.3869,-.0484,.2155,-.2398,.2933,.2471,.8867,-.6179,-.5041,.203,.106,-.2118,-.0665,1.0232,.1865,-.5909,.2457,1.4541,.1457,.498,-.8565,-.3708,.0658,.1955,-.4636,-.1959,-.8103,-.0191,-.8327,-.7868,-.7403,.5691,-.4162,.3017,-.3618,-.0799,-.8945,.0388,-.2797,-.3194,.1755,-.3088,-.8997,.4066,.5559,1.8128,.2424,.2241,-.7899,.5065,.8202,.3164,-.6339,.1189,-.1153,-.4027,-.0324,.4949,-.0326,.3196,-.1275,-.7986,.0591,-.0137,.0182,-.4206,-.7866,.4294,-.442,-.5663,.1414,.0243,-.1411,.5978,.0648,.4914,.4477,.0726,-.2305,-.2179,-.1984,-.1701,.5574,.7266,-.1396,-.1009,-.146,-.265,.5229,.0589,.5582,-.2155,-.1459,.1857,-.0132,.1411,-.4238,-.1271,.3795,.0303,-.3079,-.6837,.9238,.753,-.3092,.3589,.5147,-.1046,.4624,.5516,.1703,-.4508,-.3313,.3625,-.0404,.1348,-.4002,.0593,.0646,.1561,-.5373,.0734,-.7353,-.5148,-.2603,.4337,.1395,.4007,.0051,-.6281,-.366,-.0379,-.3919,-.3747,-.2707,.2904,-.0522,-.3971,-.5975,-.525,-.0409,.1536,-.0937,.1041,.234,.1326,.4826,-.0535,.3921,-.2294,-.0855,-.2957,.1071,-.2964,.516,-.0391,-.2646,-.2027,.3388,-.4591,.3179,.3039,.4811,-.5649,-.4603,.115,-.2382,-.3524,.2545,-.0118,.1249,-.1676,-.4102,-.204,.2179,.0621,-.2133,-.2028,.2466,.218,.1147,.3233,.1754,.1864,.2237,.2265,.1259,-.0973,-.4751,.0528,-.0144,.4271,-.0575,-.1351,.0848,-1.0556,-.3097,-.1491,.1708,.371,-.2062,.2032,.7526,-.7977,1.8257,.0955,.0578,.5295,.2033,1.0166,.3842,.2789,-.1628,.6157,-.0708,.3471,-1.0523,-.2007,-1.3354,.0953,-1.6954,.198,-.0191,.8803,-.319,-1.5881,.4175,-.3691,-.6246,-.8504,.4534,-.0239,-.7446,.2146,-1.5084,.137,1.2666,-.1231,-.1744,-.628,-.2316,-.5928,1.139,-.0625,-.5286,.5515,-.2933,-.1764,.0341,.0171,-.5567,-.6349,-.3949,.6153,-.3111,.2789,.6941,.3238,.3628,.1413,-.2799,-.2535,-.3468,-.1132,-.2345,.0067,-1.4025,.542,-.7501,.1225,.039,.5184,-.1071,-.1634,-.4627,.2859,-.5639,.3289,-.3089,-.0975,-.1729,.3345,-.2498,.3006,.8324,.2811,.6607,.1956,-.0611,.1034,.5553,-.0886,-.1665,-.4693,.8885,.5204,.2576,-.1128,.2275,-.0273,.4272,.4236,1.0396,-.2787,.6715,-.1081,.2584,1.3154,-.1859,-.7429,.8372,.628,.6562,-.1123,-.976,.0404,.7069,.0391,.5511,.3194,.1524,.3253,.374,-.694,.7069,.0255,-.4635,.1947,-.765,-.802,-.5443,.6284,-2.0096,.6105,-.7178,.5992,-.1078,-.4921,-.3037,-.2268,-.0932,-.6183,-.2884,.2004,.2379,.073,.7489,-.0146,.6255,.2511,.3163,-.2191,-.0979,.4346,-.0722,-.3019,-.2898,-.2911,.7886,.812,.2957,.376,-.2636,.5882,.3308,.1134,.4247,-.1747,.4298,.0888,-.6024,-.2518,.0256,.0838,.1722,.6553,-.1107,-.273,-.8034,-.258,.1179,-.3137,-.386,.1157,.4281,-.0417,-.1316,.6293,-.1372,-.4141,.1576,-.1621,.1086,.2046,-.871,.0554,.1841,.0551,.0469,-.461,.1178,.0473,-.4183,.5529,.0974,-.1465,-.8143,-.3667,.0114,-.1963,-.6889,.1374,-.0606,.1687,.1744,-.1768,-.4677,.8199,-.0406,-.5801,-.0568,-.0109,-.1707,-.2756,-.325,-.1675,-.1398,.7167,.5174,-.0056,.745,.1266,.4518,-.0644,-.0048,-.1053,.1507,.0675,-.2681,-.0172,.7235,.3107,-.4754,-.1106,-.2816,-.0406,-.244,.0594,.6339,-.3147,-.0425,.1197,.0203,-.2998,-.3685,-.522,.4677,-.6487,-.3495,-.0122,.3717,.07,-.1576,-.0596,-.0686,.0864,-.2314,-.1405,.1097,-.0185,-.1564,-.0537,-.1872,.0991,.0792,-.2714,.1616,-.1828,-.6893,.0133,.2305,-.0563,-.0255,-.1717,.1192,-.0267,-.3332,-1.0032,-.459,-.4137,.1813,-.2044,.5077,-.0891,-.0025,-.4601,-.1482,-.0994,-.1188,-.9361,-.1879,-.1633,-.5769,.1527,.5053,-.1199,.6254,-.2397,-.2838,-.2348,.0087,.5657,-.2211,-.3118,-.0998,-.6288,-.1172,-.1858,-.2573,-.3898,-.45,.346,-.2503,-.3795,.0349,-.713,-.3614,-.6269,-.042,-.6833,-.7002,-.1695,-.3145,.0936,-.2023,.0082,.0326,-.2186,-.2581,-.2195,-.2193,-.3044,.0619,-.1817,.2398,.1864,.1015,-.094,.2397,-.0751,-.5772,-.1388,-.2731,-.0943,-.314,-.4623,.3135,.2738,-.263,.421,-.3777,.3466,.1908,.068,.4232,-.0638,-.1402,.4474,-.2075,.1579,.176,-.6835,.2276,-.3453,-.2269,.3037,.1512,.2513,.3304,-.362,.2351,-.3813,.0417,.1803,-.4679,-.1121,-.0822,-.2514,.4332,-.6788,-.031,.3673,-.176,-.3971,-.1611,-.3268,-.08,.5196,-.7364,.3834,-.3485,-.2544],hi=[1,2,3,4,5,6];function ei(s,t){return s.ordered?t.join("-"):[...t].sort((e,n)=>e-n).join("=")}function Ks(s){return s.split(/[-=]/).map(Number)}function PS(s,t=hi){const e=[],n=i=>{if(i.length===s.picks){e.push(ei(s,i));return}for(const o of t)i.includes(o)||!s.ordered&&i.length&&o<i[i.length-1]||n([...i,o])};return n([]),e}function LS(s,t){const e=new Set,n=(i,o)=>{if(i===s.picks){e.add(ei(s,o));return}for(const r of t[i]??[])o.includes(r)||n(i+1,[...o,r])};return n(0,[]),[...e]}const IS=s=>{const t=[];for(let e=0;e<s.length;e++)for(let n=e+1;n<s.length;n++)t.push([s[e],s[n]]);return t},Cs=(s,t)=>{const e={...s};return e.winners=n=>n.length<e.need?[]:t(n,e),e},yn={win:Cs({id:"win",name:"単勝式",short:"単勝",picks:1,ordered:!0,need:1,enabled:!0},(s,t)=>[ei(t,[s[0]])]),exacta:Cs({id:"exacta",name:"2連勝単式",short:"2連単",picks:2,ordered:!0,need:2,enabled:!0},(s,t)=>[ei(t,s.slice(0,2))]),trifecta:Cs({id:"trifecta",name:"3連勝単式",short:"3連単",picks:3,ordered:!0,need:3,enabled:!0},(s,t)=>[ei(t,s.slice(0,3))]),quinella:Cs({id:"quinella",name:"2連勝複式",short:"2連複",picks:2,ordered:!1,need:2,enabled:!1},(s,t)=>[ei(t,s.slice(0,2))]),trio:Cs({id:"trio",name:"3連勝複式",short:"3連複",picks:3,ordered:!1,need:3,enabled:!1},(s,t)=>[ei(t,s.slice(0,3))]),wide:Cs({id:"wide",name:"拡大2連勝複式",short:"拡連複",picks:2,ordered:!1,need:2,enabled:!1},(s,t)=>IS(s.slice(0,3)).map(e=>ei(t,e))),place:Cs({id:"place",name:"複勝式",short:"複勝",picks:1,ordered:!0,need:1,enabled:!1},(s,t)=>s.slice(0,2).map(e=>ei(t,[e])))},DS=Object.keys(yn).filter(s=>yn[s].enabled),Ve=100,Vp=.75,NS=.7;function Yh(s){return Number.isFinite(s)?Math.max(Ve,Math.floor(s/10+1e-9)*10):Ve}function Hp(s,t=()=>!0){let e=0;for(const[n,i]of s)t(n)&&(e+=i);return e}function zS(s,t,e=[]){const n=r=>!Ks(r).some(a=>e.includes(a)),i=Hp(t,n)*Ve*Vp,o=new Map;for(const[r,a]of t)o.set(r,n(r)&&a>0?Yh(i/a/Ve*Ve)/Ve:null);return o}function US(s,t,e){const n=yn[s],i={type:s,winners:[],specialPer100:0,returned:e.returned};if(e.order.length<n.need)return{...i,status:"void",netVotes:0};const o=f=>!Ks(f).some(p=>e.returned.includes(p)),r=Hp(t,o),a=r*Ve*Vp,c=n.winners(e.order).filter(o),l=c.map(f=>t.get(f)??0),h=l.reduce((f,p)=>f+p,0);if(h===0)return{...i,status:"special",specialPer100:NS*Ve,netVotes:r};const u=c.map((f,p)=>({key:f,votes:l[p]})).filter(f=>f.votes>0);let d;if(u.length===1)d=[{...u[0],per100:Yh(a/h/Ve*Ve)}];else{const f=a-h*Ve;d=u.map(p=>({...p,per100:Yh(Ve+f/u.length/p.votes)}))}return{...i,status:"ok",winners:d,netVotes:r}}function FS(s,t){if(s.status==="void"||Ks(t).some(n=>s.returned.includes(n)))return{kind:"refund",per100:Ve};if(s.status==="special")return{kind:"special",per100:s.specialPer100};const e=s.winners.find(n=>n.key===t);return e?{kind:"hit",per100:e.per100}:{kind:"miss",per100:0}}const Gp=100,ku=120;function kS(s,t=[]){const e=[...new Set([...s.flying,...s.late??[],...t])].sort((n,i)=>n-i);return s.cancelled?{order:[],returned:e}:{order:s.order.filter(n=>!e.includes(n)),returned:e}}class OS{constructor(t){M(this,"id");M(this,"title");M(this,"types");M(this,"pool");M(this,"closeAt");M(this,"state","open");M(this,"tickets",[]);M(this,"settlement",null);M(this,"nextId",1);M(this,"listeners",new Set);this.id=t.id,this.title=t.title,this.pool=t.pool,this.types=t.types??DS,this.closeAt=t.closeAt??null}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}changed(){for(const t of this.listeners)t(this)}tick(t,e){if(!(this.state!=="open"||this.closeAt==null)){if(t>=this.closeAt){this.close();return}e!=null&&this.pool.setProgress&&(this.pool.setProgress((t-e)/Math.max(1,this.closeAt-e)),this.changed())}}remaining(t){return this.state==="open"&&this.closeAt!=null?Math.max(0,this.closeAt-t):null}odds(t){var e;return zS(t,this.pool.votes(t),((e=this.settlement)==null?void 0:e.outcome.returned)??[])}buy(t,e,n,i){if(this.state!=="open")return"closed";if(!this.types.includes(e)||!yn[e])return"type";const o=[...new Set(n)];if(!o.length)return"empty";if(o.length>ku)return"too-many";if(!Number.isInteger(i)||i<1||i>Gp)return"units";const r=o.length*i*Ve;if(!t.spendFree(r))return"funds";for(const c of o)this.pool.add(e,c,i);const a={id:this.nextId++,type:e,picks:o.map(c=>({key:c,units:i})),cost:r,payout:0,claimed:!1};return this.tickets.push(a),this.changed(),a}close(){var t,e;this.state==="open"&&((e=(t=this.pool).setProgress)==null||e.call(t,1),this.state="closed",this.changed())}settle(t,e=[]){if(this.state==="open"&&this.close(),this.settlement)return this.settlement;const n=kS(t,e),i={};for(const o of this.types)i[o]=US(o,this.pool.votes(o),n);for(const o of this.tickets){const r=i[o.type];o.payout=0;for(const a of o.picks){const c=FS(r,a.key);a.kind=c.kind,a.payout=c.per100*a.units,o.payout+=a.payout}}return this.settlement={outcome:n,result:t,types:i},this.state="settled",this.changed(),this.settlement}unclaimed(){return this.tickets.reduce((t,e)=>t+(e.claimed?0:e.payout),0)}claim(t){if(this.state!=="settled")return 0;let e=0;for(const n of this.tickets)n.claimed||(n.claimed=!0,e+=n.payout);return e>0&&t.addFree(e),this.changed(),e}}const jh=[.55,.14,.12,.11,.06,.02],vr=s=>Math.min(1,Math.max(0,s));function BS(s,t){const e=1-vr((s.st-.05)/.4),n=vr((s.entrySpeed-46)/6),i=1-vr((s.brakeMargin+2)/6),o=1-vr((s.leanDelay+s.leanSpeed-.3)/.6),r=1-vr((s.slip-.08)/.17),a=t>=3?s.aggression:.5;return .3*e+.15*n+.1*i+.1*o+.1*s.tight+.1*s.grip+.1*r+.05*a-.5}function VS(s,t=6){const e=s.slice(0,6).map((i,o)=>jh[o]*Math.exp(t*BS(i,o+1))),n=e.reduce((i,o)=>i+o,0);return e.map(i=>i/n)}function Bl(s,t){let e=1,n=1;for(const i of t){const o=s[i-1];if(e<=1e-12)return 0;n*=o/e,e-=o}return n}function Wp(s){let t=s>>>0||1;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const HS=s=>Math.sqrt(-2*Math.log(s()+1e-12))*Math.cos(2*Math.PI*s()),GS={win:1500,exacta:5e3,trifecta:25e3,quinella:1500,trio:3e3,wide:1500,place:800},$a={read:.7,lane:.27,flat:.03};function WS(s,t){const e=yn[s],n=PS(e),i=jh.map(l=>l/jh.reduce((h,u)=>h+u,0)),o=(l,h)=>{const u=Ks(h);if(e.ordered&&e.picks===u.length&&s!=="place")return Bl(l,u);if(s==="place"){const p=u[0];let x=l[p-1];for(let g=1;g<=6;g++)g!==p&&(x+=Bl(l,[g,p]));return x}let d=0;const f=(p,x)=>{x.length||(d+=Bl(l,p));for(const g of x)f([...p,g],x.filter(m=>m!==g))};return f([],u),d},r=n.map(l=>$a.read*o(t,l)**.85+$a.lane*o(i,l)**.85),a=r.reduce((l,h)=>l+h,0),c=new Map;return n.forEach((l,h)=>c.set(l,(1-$a.flat)*(r[h]/a)+$a.flat/n.length)),c}function Zf(s,t,e){var a;const n=Wp(e.seed*7919+s.length*104729+s.charCodeAt(0)),i=((a=e.total)==null?void 0:a[s])??GS[s],o=e.noise??.3,r=new Map;for(const[c,l]of WS(s,t))r.set(c,Math.max(1,Math.round(i*l*Math.exp(o*HS(n)-o*o/2))));return r}class XS{constructor(t,e){M(this,"chances");M(this,"early",new Map);M(this,"late",new Map);M(this,"mine",new Map);M(this,"progress",.35);M(this,"opts");this.chances=VS(t),this.opts=e}setProgress(t){this.progress=Math.min(1,Math.max(this.progress,t))}crowd(t){return this.early.has(t)||(this.early.set(t,Zf(t,this.chances,{...this.opts,seed:this.opts.seed*2+1})),this.late.set(t,Zf(t,this.chances,{...this.opts,seed:this.opts.seed*2+2}))),{a:this.early.get(t),b:this.late.get(t)}}votes(t){const{a:e,b:n}=this.crowd(t),i=this.progress,o=Math.min(1,i/.6)*.5,r=i*i*.5,a=this.mine.get(t),c=new Map;for(const[l,h]of e)c.set(l,Math.max(1,Math.round(h*o+(n.get(l)??0)*r))+((a==null?void 0:a.get(l))??0));return c}add(t,e,n){let i=this.mine.get(t);i||this.mine.set(t,i=new Map),i.set(e,(i.get(e)??0)+n)}}const Kf=12,$S=180,qS=30,YS=10,jS=40,ZS=60,Jf=300,KS=2,Qf=["山田","佐藤","鈴木","高橋","田中","渡辺","伊藤","中村","小林","加藤","吉田","山本","松本","井上","木村","林","清水","森","池田","橋本","石川","前田","藤田","岡田","後藤","長谷川","村上","近藤","坂本","遠藤"],t0=["翔太","大輔","健太","拓也","直樹","和也","誠","亮","剛","隆","浩二","慎吾","雄一","勇気","蓮","颯","陸","優","学","修"];function JS(s){const t=Wp(s*7919+13),e=new Set,n=[];for(;n.length<6;){const i=`${Qf[Math.floor(t()*Qf.length)]} ${t0[Math.floor(t()*t0.length)]}`;e.has(i)||(e.add(i),n.push(i))}return n}class Xp{constructor(t,e={}){M(this,"session");M(this,"daySeed");M(this,"phase","open");M(this,"raceNo");M(this,"day",1);M(this,"sale");M(this,"seed",0);M(this,"skills",[]);M(this,"racers",[]);M(this,"result",null);M(this,"scratched",[]);M(this,"history",[]);M(this,"t",0);M(this,"phaseAt",0);M(this,"opensAt",0);M(this,"closeAt",0);M(this,"oddsVer",0);M(this,"oddsT",0);M(this,"firstFinishAt",-1);M(this,"listeners",new Set);M(this,"saleSec");M(this,"closeToPitOut");M(this,"judgeSec");M(this,"resultSec");M(this,"grade");M(this,"now",()=>this.nowMs);this.session=t,this.daySeed=e.seed??Math.floor(Math.random()*1e6)+1,this.saleSec=e.saleSec??$S,this.closeToPitOut=e.closeToPitOut??qS,this.judgeSec=e.judgeSec??YS,this.resultSec=e.resultSec??jS,this.grade=e.grade??"一般戦",this.raceNo=Math.min(Kf,Math.max(1,e.firstRace??1)),this.beginRace()}on(t){return this.listeners.add(t),()=>this.listeners.delete(t)}emit(t){for(const e of this.listeners)e(t)}get nowMs(){return Math.round(this.t*1e3)}get title(){return`第${this.raceNo}R ${this.grade}`}get toClose(){return this.phase==="open"?Math.max(0,this.closeAt-this.t):null}get inPhase(){return this.t-this.phaseAt}get phaseLeft(){return this.phase==="open"?this.toClose:this.phase==="closed"?Math.max(0,this.holdSec-this.inPhase):this.phase==="judging"?Math.max(0,this.judgeSec-this.inPhase):this.phase==="settled"?Math.max(0,this.resultSec-this.inPhase):null}get holdSec(){const t=this.session.prestart,e=t?t.pitOut-this.session.clock:0;return Math.max(0,this.closeToPitOut-e)}statusText(){const t=`第${this.raceNo}R`;switch(this.phase){case"open":{const e=Math.max(0,Math.ceil((this.toClose??0)-.001));return`${t} 締切まで ${Math.floor(e/60)}分${String(e%60).padStart(2,"0")}秒`}case"closed":return`${t} 発売締切`;case"race":{const e=this.session.clock,n=this.session.prestart;return n&&e<n.pitOut?`${t} 発売締切 まもなくピットアウト`:this.session.inPrestart?`${t} 待機行動`:`${t} レース中`}case"judging":return`${t} 確定待ち`;case"settled":return`${t} 確定 ${this.orderText()}`}}orderText(){const t=this.sale.settlement;return t?t.result.cancelled?"レース不成立":t.outcome.order.slice(0,3).join("-")||"ゴール艇なし":""}update(t){this.t+=t;let e=!1;switch(this.phase){case"open":this.oddsT+=t,(this.oddsT>=KS||this.t>=this.closeAt)&&(this.oddsT=0,this.sale.tick(this.nowMs,Math.round(this.opensAt*1e3)),this.sale.state==="open"&&(this.oddsVer++,this.emit({type:"odds"}))),this.sale.state!=="open"&&this.setPhase("closed");break;case"closed":this.inPhase>=this.holdSec&&this.setPhase("race");break;case"race":{e=this.session.step(t);const n=this.session;if(n.inPrestart)for(const i of n.boats)i.cpu.capsized&&!this.scratched.includes(i.lane)&&this.scratched.push(i.lane);this.firstFinishAt<0&&n.boats.some(i=>i.cpu.finished)&&(this.firstFinishAt=this.t),n.result?this.result=n.result:(this.firstFinishAt>=0&&this.t-this.firstFinishAt>ZS||n.clock>Jf)&&(this.result=this.cutOff()),this.result&&this.setPhase("judging");break}case"judging":if(e=this.session.step(t),this.inPhase>=this.judgeSec){const n=this.sale.settle(this.result,this.scratched);this.history.unshift(this.sale),this.history.length>24&&this.history.pop(),this.setPhase("settled"),this.emit({type:"result",settlement:n})}break;case"settled":e=this.session.step(t),this.inPhase>=this.resultSec&&this.nextRace();break}return e}skip(t){let e=!1;const n=1/30;for(let i=0;i<t;i+=n){if(this.phase==="race"&&this.session.fastForward){this.session.fastForward({sec:t-i});break}e=this.update(n)||e}return e}next(){const t=this.phase,e=this.phaseLeft;if(e!=null)return this.skip(e+1/30);if(this.phase==="race"&&this.session.fastForward)return this.session.fastForward({untilResult:Jf}),!1;let n=!1;for(let i=0;i<30*600&&this.phase===t;i++)n=this.update(1/30)||n;return n}closeNow(){this.phase==="open"&&(this.sale.close(),this.setPhase("closed"))}unclaimed(){return this.history.reduce((t,e)=>t+e.unclaimed(),0)}claimAll(t){return this.history.reduce((e,n)=>e+n.claim(t),0)}pendingTickets(){return this.sale.state==="settled"?[]:this.sale.tickets}setPhase(t){if(t===this.phase)return;const e=this.phase;this.phase=t,this.phaseAt=this.t,this.emit({type:"phase",phase:t,prev:e})}nextRace(){this.raceNo++,this.raceNo>Kf&&(this.raceNo=1,this.day++);const t=this.phase;this.phase="open",this.phaseAt=this.t,this.beginRace(),this.emit({type:"phase",phase:"open",prev:t})}beginRace(){this.seed=(this.daySeed*131+this.day*977+this.raceNo*7919)%99991+1,this.skills=Wh(this.seed),this.racers=JS(this.seed),this.session.reset(this.seed),this.result=null,this.scratched=[],this.firstFinishAt=-1,this.opensAt=this.t,this.closeAt=this.t+this.saleSec,this.oddsT=0,this.sale=new OS({id:`d${this.daySeed}-${this.day}-${this.raceNo}`,title:this.title,pool:new XS(this.skills,{seed:this.seed}),closeAt:this.nowMs+this.saleSec*1e3}),this.oddsVer++,this.emit({type:"race",raceNo:this.raceNo})}cutOff(){const t=this.session,e=t.prestart?t.prestart.boats:[],n=t.boats.filter(o=>o.cpu.finished&&!o.retired).sort((o,r)=>o.cpu.finishTime-r.cpu.finishTime),i=e.filter(o=>o.flying||o.late).length;return{order:n.map(o=>o.lane),move:n.length?Pp(n[0].cpu,!0):"",flying:t.boats.filter(o=>o.cpu.flying).map(o=>o.lane),capsized:t.boats.filter(o=>o.cpu.capsized).map(o=>o.lane),late:e.filter(o=>o.late&&!o.flying).map(o=>o.lane),st:{...t.st},course:Object.fromEntries(t.boats.map(o=>[o.lane,o.cpu.course])),cancelled:i>=5,violations:t.prestart?[...t.prestart.violations]:[]}}}const e0={small:[512,288],big:[1024,256],odds:[1024,576],odds3:[768,480],card:[768,480]},$p=25.78/58,QS="#0b1c2e",Zh="#123a58",Vn="#ffd34d",Kh="#ff5a4d",ln="#8fb3cc",tw=s=>s===1||s===5?"#111":"#fff";class _r{constructor(t){M(this,"kind");M(this,"canvas");M(this,"texture");M(this,"g");M(this,"key","");M(this,"draws",0);this.kind=t;const[e,n]=e0[t];this.canvas=document.createElement("canvas"),this.canvas.width=e,this.canvas.height=n,this.g=this.canvas.getContext("2d"),this.texture=new es(this.canvas),this.texture.colorSpace=Xe,this.texture.anisotropy=4}update(t,e,n){const i=ew(this.kind,t,e,n);if(i===this.key)return;this.key=i,this.draws++;const o=this.g,[r,a]=e0[this.kind];o.setTransform(1,0,0,1,0,0),o.fillStyle=QS,o.fillRect(0,0,r,a),o.textBaseline="middle",this.kind==="small"?nw(o,r,a,t,e):this.kind==="big"?iw(o,r,a,t,e,n):this.kind==="odds"?sw(o,r,a,t):this.kind==="odds3"?ow(o,r,a,t):rw(o,r,a,t),this.texture.needsUpdate=!0}dispose(){this.texture.dispose()}}function ew(s,t,e,n){const i=t.phaseLeft,o=i==null?"":Math.ceil(i-.001);let r="";if((s==="big"||s==="small")&&(t.phase==="race"||t.phase==="judging")){const c=t.session;r=`${c.inPrestart?"pre":"run"}|${Math.floor(c.clock)}|${c.order().map(l=>l.lane).join("")}`}const a=t.phase==="open"||s==="odds"||s==="odds3"?t.oddsVer:0;return`${t.raceNo}|${t.phase}|${a}|${o}|${e}|${n}|${r}`}function ii(s,t,e,n,i){s.fillStyle=Ic[t-1],s.fillRect(e,n-i/2,i,i),s.strokeStyle="rgba(255,255,255,.55)",s.lineWidth=Math.max(1,i*.05),s.strokeRect(e+.5,n-i/2+.5,i-1,i-1),s.fillStyle=tw(t),s.font=`900 ${Math.round(i*.72)}px sans-serif`,s.textAlign="center",s.fillText(String(t),e+i/2,n+i*.03),s.textAlign="left"}function Dc(s,t,e,n,i){const o=t.split(/[-=]/).map(Number);return o.forEach((r,a)=>ii(s,r,e+a*(i+i*.18),n,i)),o.length*(i+i*.18)}function ne(s,t,e,n,i,o="#fff",r="left",a=700,c){s.font=`${a} ${Math.round(i)}px sans-serif`,s.fillStyle=o,s.textAlign=r,s.fillText(t,e,n,c),s.textAlign="left"}const vs=s=>s==null?"欠":s>=1e3?String(Math.floor(s)):s.toFixed(1),n0=s=>s.toLocaleString("ja-JP"),Jh=s=>{const t=Math.max(0,Math.ceil(s-.001));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`};function qr(s,t,e){return[...s.sale.odds(t).entries()].filter(n=>n[1]!=null).sort((n,i)=>n[1]-i[1]).slice(0,e)}function Nc(s,t,e){const i=qr(s,t,999).findIndex(o=>o[0]===e);return i<0?null:i+1}function qo(s,t,e,n,i){s.fillStyle=Zh,s.fillRect(0,0,t,e),ne(s,`${n.raceNo}R`,e*.25,e/2,e*.62,"#fff","left",900);const[o,r]=Qh(n);ne(s,o,e*1.6,e/2,e*.5,r,"left",900),ne(s,i,t-e*.25,e/2,e*.42,ln,"right",700)}function Qh(s){switch(s.phase){case"open":{const t=s.toClose??0;return[`締切まで ${Jh(t)}`,t<60?Kh:Vn]}case"closed":return["発売締切",Kh];case"race":return[s.session.inPrestart?"待機行動":"レース中","#7fe0ff"];case"judging":return["確定待ち",Vn];case"settled":return["確定",Vn]}}function nw(s,t,e,n,i){if(n.phase==="settled"){qo(s,t,48,n,"確定・払戻金"),Ou(s,0,48,t,e-48,n,!1);return}const r=i%3;qo(s,t,48,n,["単勝オッズ","2連単 人気順","出走表"][r]);const a=56,c=(e-a-6)/6;if(r===0){const l=n.sale.odds("win");for(let h=1;h<=6;h++){const u=a+c*(h-.5);ii(s,h,14,u,c*.78),ne(s,n.racers[h-1]??"",14+c,u,c*.5,"#fff","left",700,220);const d=Nc(n,"win",String(h));ne(s,vs(l.get(String(h))),t-110,u,c*.62,d===1?Vn:"#fff","right",900),ne(s,d?`${d}番人気`:"",t-14,u,c*.4,ln,"right")}}else if(r===1)qr(n,"exacta",10).forEach(([h,u],d)=>{const f=d<5?0:1,p=a+c*(d%5+.5)*1.18,x=14+f*(t/2);ne(s,`${d+1}`,x+18,p,c*.48,ln,"right"),Dc(s,h,x+28,p,c*.7),ne(s,vs(u),x+t/2-34,p,c*.62,d===0?Vn:"#fff","right",900)});else for(let l=1;l<=6;l++){const h=a+c*(l-.5);ii(s,l,14,h,c*.78),ne(s,n.racers[l-1]??"",14+c,h,c*.6,"#fff","left",800)}}function Ou(s,t,e,n,i,o,r){const a=o.sale.settlement;if(!a)return;const c=a.outcome;if(a.result.cancelled||!c.order.length){ne(s,a.result.cancelled?"レース不成立 全舟券返還":"ゴール艇なし 全舟券返還",t+n/2,e+i/2,i*.14,Vn,"center",900);return}const l=[a.result.move?`決まり手 ${a.result.move}`:"",c.returned.length?`返還 ${c.returned.join("・")}号艇`:""].filter(Boolean).join("　"),h=r?n*.45:n,u=r?i*.34:i*.17,d=e+(r?i*.36:u*.72),f=(h-28)/3;for(let P=0;P<Math.min(3,c.order.length);P++){const E=t+14+P*f;ne(s,`${P+1}着`,E,d,u*.4,ln,"left",800),ii(s,c.order[P],E+u*.85,d,u)}r&&l&&ne(s,l,t+14,e+i*.8,i*.13,"#fff","left",800,h-28);const p=["win","exacta","trifecta"],x=r?e+i*.04:d+u*.7,g=r?t+h+10:t+14,m=r?n-h-24:n-28,_=p.length+(!r&&l?1:0),y=(e+i-x-(r?i*.04:4))/_;!r&&l&&ne(s,l,g,x+y*.5,y*.48,"#fff","left",800,m);const v=Math.min(y*.62,m*.075);p.forEach((P,E)=>{const S=a.types[P];if(!S)return;const C=x+y*(E+(!r&&l?1:0)+.5);if(ne(s,yn[P].short,g,C,v*.72,ln,"left",800),S.status==="void")return void ne(s,"不成立（返還）",g+m,C,v*.8,Vn,"right",800);if(S.status==="special")return void ne(s,`特払い ${n0(S.specialPer100)}`,g+m,C,v*.8,Vn,"right",800);const b=S.winners[0];if(!b)return;Dc(s,b.key,g+v*2.3,C,v*.85);const w=Nc(o,P,b.key);ne(s,n0(b.per100),g+m-v*3.4,C,v,Vn,"right",900),ne(s,w?`${w}番人気`:"",g+m,C,v*.55,ln,"right",700)})}function iw(s,t,e,n,i,o){if(n.phase==="settled"){s.fillStyle=Zh,s.fillRect(0,0,t,e*.2),ne(s,`${Mc} 第${n.raceNo}R 確定`,16,e*.1,e*.13,"#fff","left",900),ne(s,"払戻金（100コインあたり）",t-16,e*.1,e*.1,ln,"right"),Ou(s,0,e*.2,t,e*.8,n,!0);return}if(o){const d=Math.ceil(t*$p)+12,f=t-d-12,[p,x]=Qh(n);ne(s,`第${n.raceNo}R`,d,e*.14,e*.15,"#fff","left",900),ne(s,p,d+e*.62,e*.14,e*.13,x,"left",900);const g=n.session,m=g.clock,_=g.prestart;let y="";if(_&&m<_.pitOut)y=`ピットアウトまで ${Math.ceil(_.pitOut-m)}秒`;else if(g.inPrestart)y=m>-60?`スタートまで ${Math.ceil(-m)}秒`:`スタートまで ${Jh(-m)}`;else if(n.phase==="judging")y="全艇ゴール";else{const S=g.order()[0];y=S.cpu.finished?"ゴール":`${Math.min($o,Math.max(1,S.cpu.laps+1))}周目 / ${$o}周`}ne(s,y,d+f,e*.14,e*.11,"#fff","right",800);const v=g.order(),P=Math.min((f-e*.3)/6.9,e*.36);ne(s,g.inPrestart?"進入":"順位",d,e*.5,e*.09,ln,"left",800),v.forEach((S,C)=>{const b=d+e*.3+C*P*1.12;ii(s,S.lane,b,e*.5,P);const w=_==null?void 0:_.get(S.lane),D=S.cpu.capsized?"転":w!=null&&w.flying?"F":w!=null&&w.late?"L":"";D&&ne(s,D,b+P/2,e*.5+P*.7,P*.34,Kh,"center",900)});const E=n.sale.odds("win");ne(s,"単勝",d,e*.86,e*.09,ln,"left",800);for(let S=1;S<=6;S++){const C=d+e*.3+(S-1)*P*1.12;ii(s,S,C,e*.86,P*.42),ne(s,vs(E.get(String(S))),C+P*.48,e*.86,P*.3,"#fff","left",800)}return}const r=t*.27;s.fillStyle=Zh,s.fillRect(0,0,r,e),ne(s,Mc,r/2,e*.13,e*.1,ln,"center",800),ne(s,`第${n.raceNo}R`,r/2,e*.36,e*.22,"#fff","center",900);const[a,c]=Qh(n);n.phase==="open"?(ne(s,"締切まで",r/2,e*.6,e*.1,"#fff","center",800),ne(s,Jh(n.toClose??0),r/2,e*.8,e*.24,c,"center",900)):ne(s,a,r/2,e*.7,e*.16,c,"center",900);const l=r+16,h=t-l-16,u=i%3;if(u===0){ne(s,"出走表",l,e*.1,e*.09,ln,"left",800);for(let d=1;d<=6;d++){const f=(d-1)%2,p=Math.floor((d-1)/2),x=l+f*(h/2),g=e*(.32+p*.27);ii(s,d,x,g,e*.2),ne(s,n.racers[d-1]??"",x+e*.26,g,e*.15,"#fff","left",800,h/2-e*.3)}}else if(u===1){ne(s,"単勝オッズ",l,e*.1,e*.09,ln,"left",800);const d=n.sale.odds("win");for(let f=1;f<=6;f++){const p=(f-1)%3,x=Math.floor((f-1)/3),g=l+p*(h/3),m=e*(.4+x*.38);ii(s,f,g,m,e*.24);const _=Nc(n,"win",String(f));ne(s,vs(d.get(String(f))),g+h/3-24,m,e*.22,_===1?Vn:"#fff","right",900)}}else ne(s,"2連単 人気順",l,e*.1,e*.09,ln,"left",800),qr(n,"exacta",6).forEach(([d,f],p)=>{const x=p%3,g=Math.floor(p/3),m=l+x*(h/3),_=e*(.4+g*.38);ne(s,`${p+1}`,m+14,_,e*.12,ln,"right",800),Dc(s,d,m+22,_,e*.2),ne(s,vs(f),m+h/3-24,_,e*.2,p===0?Vn:"#fff","right",900)})}function sw(s,t,e,n){qo(s,t,64,n,n.phase==="open"?"オッズ":n.phase==="settled"?"確定時のオッズ":"締切時のオッズ");const o=78,r=250,a=(e-o-50)/6;ne(s,"単勝",20,o+14,26,ln,"left",800);const c=n.sale.odds("win");for(let f=1;f<=6;f++){const p=o+50+a*(f-.5);ii(s,f,20,p,a*.7),ne(s,vs(c.get(String(f))),r-10,p,a*.55,Nc(n,"win",String(f))===1?Vn:"#fff","right",900)}const l=n.sale.odds("exacta"),h=new Set(qr(n,"exacta",3).map(f=>f[0])),u=r+40,d=(t-u-20)/7;ne(s,"2連単（縦 1着 × 横 2着）",u,o+14,26,ln,"left",800);for(let f=1;f<=6;f++)ii(s,f,u+d*f+d/2-18,o+50+a*.5-4,36);for(let f=1;f<=6;f++){const p=o+50+a*(f+.5)-a*.15;if(p>e-10)break;ii(s,f,u+d/2-18,p,36);for(let x=1;x<=6;x++){if(f===x)continue;const g=`${f}-${x}`;ne(s,vs(l.get(g)),u+d*(x+1)-12,p,30,h.has(g)?Vn:"#fff","right",800)}}}function ow(s,t,e,n){qo(s,t,60,n,"3連単 人気順");const o=qr(n,"trifecta",10),r=(e-60-16)/5;o.forEach(([a,c],l)=>{const u=16+(l<5?0:1)*(t/2),d=68+r*(l%5+.5);ne(s,String(l+1),u+26,d,r*.42,ln,"right",800),Dc(s,a,u+36,d,r*.56),ne(s,vs(c),u+t/2-30,d,r*.5,l===0?Vn:"#fff","right",900)})}function rw(s,t,e,n){var r;if(n.phase==="settled"){qo(s,t,60,n,"払戻金"),Ou(s,0,60,t,e-60,n,!1);return}qo(s,t,60,n,"出走表");const o=(e-60-12)/6;for(let a=1;a<=6;a++){const c=66+o*(a-.5);ii(s,a,20,c,o*.8),ne(s,n.racers[a-1]??"",30+o,c,o*.55,"#fff","left",800);const l=n.session.st[a],h=(r=n.session.prestart)==null?void 0:r.get(a).course,u=n.phase==="race"||n.phase==="judging"?`${h??""}コース${l!=null?`  ST ${l<0?"F":""}.${String(Math.round(Math.abs(l)*100)).padStart(2,"0")}`:""}`:"";ne(s,u,t-20,c,o*.4,ln,"right",800)}}const i0=512,s0=288,o0=15,aw=["closed","race","judging"],qa=220/352,cw=.22,lw=8;class hw{constructor(){M(this,"camera",new Fn(30,i0/s0,1,2500));M(this,"target");M(this,"hidden",[]);M(this,"users",[]);M(this,"stats",{calls:0,triangles:0,frames:0});M(this,"acc",1);M(this,"first",!0);M(this,"pos",new A);M(this,"look",new A);M(this,"lookNow",new A);M(this,"goalPos",new A);M(this,"center",new A);M(this,"fov",30);M(this,"waterHorizon",new te);this.target=new Ii(i0,s0,{depthBuffer:!0,generateMipmaps:!1,minFilter:On,magFilter:On}),this.target.texture.name="live"}hideSmall(t,e){t.updateMatrixWorld(!0);const n=new A;t.traverse(i=>{const o=i;!o.isMesh||!o.geometry||(o.geometry.boundingSphere||o.geometry.computeBoundingSphere(),o.getWorldScale(n),o.geometry.boundingSphere.radius*Math.max(n.x,n.y,n.z)<e&&this.hidden.push(o))})}get texture(){return this.target.texture}aim(t,e){const n=e.boats.filter(u=>!u.removed);this.center.set(0,0,0);for(const u of n)this.center.add(u.ph.origin);this.center.multiplyScalar(1/Math.max(1,n.length));const i=Math.max(12,...n.map(u=>Math.hypot(u.ph.origin.x-this.center.x,u.ph.origin.z-this.center.z)+6)),o=e.inPrestart||e.clock<3,r=o?this.center:e.order()[0].ph.origin;o?this.goalPos.set(-44,38,Math.max(-230,Math.min(150,r.z+45))):this.goalPos.set(-55,31,Math.max(-150,Math.min(150,r.z*.75)));const a=this.goalPos.distanceTo(r),l=Math.max(5,Math.min(60,2*Math.atan((o?i:10)/Math.max(1,a))*180/Math.PI)),h=this.first?1:1-Math.exp(-t*3);this.pos.lerp(this.goalPos,h),this.look.copy(r),this.lookNow.lerp(this.look,this.first?1:1-Math.exp(-t*5)),this.fov+=(l-this.fov)*(this.first?1:1-Math.exp(-t*4)),this.first=!1}cut(){this.first=!0}render(t,e,n,i){var E,S,C;if(this.acc+=t,this.acc<1/o0)return!1;this.acc%=1/o0;const o=this.camera;o.position.copy(this.pos),o.lookAt(this.lookNow),Math.abs(o.fov-this.fov)>.01&&(o.fov=this.fov,o.updateProjectionMatrix()),o.updateMatrixWorld();const r=[...this.hidden,...this.users].map(b=>b.visible);for(const b of this.hidden)b.visible=!1;for(const b of this.users)b.visible=!1;const a=i.uniforms,c=(E=a==null?void 0:a.uReflOn)==null?void 0:E.value,l=(S=a==null?void 0:a.uRefrOn)==null?void 0:S.value;a!=null&&a.uReflOn&&(a.uReflOn.value=0),a!=null&&a.uRefrOn&&(a.uRefrOn.value=0);const h=(C=a==null?void 0:a.uSkyHorizon)==null?void 0:C.value;a!=null&&a.uSkyHorizon&&h instanceof te&&(a.uSkyHorizon.value=this.waterHorizon.copy(h).multiplyScalar(cw));const u=i.mesh,d=u==null?void 0:u.position.clone();u&&u.position.set(Math.round(this.lookNow.x/qa)*qa,0,Math.round(this.lookNow.z/qa)*qa);const f=e.shadowMap.autoUpdate;e.shadowMap.autoUpdate=!1;const p=n.userData.sky,x=p==null?void 0:p.position.clone();p==null||p.position.copy(o.position);const g=e.getRenderTarget(),m=e.info,_=m.render.calls,y=m.render.triangles,v=m.autoReset;return m.autoReset=!1,e.setRenderTarget(this.target),e.clear(),e.render(n,o),this.stats={calls:m.render.calls-_,triangles:m.render.triangles-y,frames:this.stats.frames+1},m.autoReset=v,e.setRenderTarget(g),e.shadowMap.autoUpdate=f,x&&p.position.copy(x),u&&d&&u.position.copy(d),a!=null&&a.uReflOn&&(a.uReflOn.value=c),a!=null&&a.uRefrOn&&(a.uRefrOn.value=l),a!=null&&a.uSkyHorizon&&h&&(a.uSkyHorizon.value=h),[...this.hidden,...this.users].forEach((b,w)=>b.visible=r[w]),!0}dispose(){this.target.dispose()}}class qp{constructor(t,e,n){M(this,"broadcast");M(this,"boards",[]);M(this,"slots",[]);M(this,"bigOverlay",null);M(this,"bigBoard",null);M(this,"program");M(this,"t",0);M(this,"paintT",0);M(this,"frustum",new Ac);M(this,"m",new ce);M(this,"box",new Ms);M(this,"liveShown",!1);this.program=t,this.broadcast=n;const i=new _r("small"),o=new _r("odds");this.boards.push(i,o);let r=0;for(const a of e)if(a.kind==="big"){const c=new _r("big");if(this.boards.push(c),this.bigBoard=c,this.slots.push({screen:a,board:c,live:!1,current:null}),n){const l=a.size.w*$p,h=new Ri({map:n.texture,toneMapped:!0}),u=new zt(new je(l,a.size.h),h);u.name="screen:big-live",u.position.set(-a.size.w/2+l/2,0,.03),u.visible=!1,a.mesh.add(u),this.bigOverlay=u,n.users.push(u)}}else if(a.id==="board-s"){const c=new _r("odds3");this.boards.push(c),this.slots.push({screen:a,board:c,live:!1,current:null})}else if(a.id==="board-n"){const c=new _r("card");this.boards.push(c),this.slots.push({screen:a,board:c,live:!1,current:null})}else a.kind==="deck"?this.slots.push({screen:a,board:i,live:!!n,current:null}):a.kind==="odds"&&(a.px.w>=1024?this.slots.push({screen:a,board:o,live:!1,current:null}):this.slots.push({screen:a,board:i,live:!!n&&r++%2===1,current:null}));if(n)for(const a of this.slots)a.live&&n.users.push(a.screen.mesh);this.apply(!0)}get isLive(){return!!this.broadcast&&aw.includes(this.program.phase)}apply(t=!1){var n;const e=this.isLive;for(const i of this.slots){const o=i.live&&e?this.broadcast.texture:i.board.texture;if(o===i.current&&!t)continue;i.current=o,iy(i.screen,o);const r=i.screen.mesh.material,a=o===((n=this.broadcast)==null?void 0:n.texture);r.toneMapped!==a&&(r.toneMapped=a,r.needsUpdate=!0)}this.bigOverlay&&(this.bigOverlay.visible=e)}update(t,e,n,i,o){this.t+=t,this.apply();const r=this.isLive;if(this.paintT-=t,this.paintT<=0){this.paintT=.25;const a=Math.floor(this.t/lw);for(const c of this.boards)c.update(this.program,a,c===this.bigBoard&&r)}this.liveShown=!1,!(!this.broadcast||!r)&&(this.broadcast.aim(t,this.program.session),this.anyLiveVisible(i)&&(this.liveShown=this.broadcast.render(t,e,n,o)||this.liveShown))}cut(){var t;(t=this.broadcast)==null||t.cut()}anyLiveVisible(t){t.updateMatrixWorld(),this.m.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.m);for(const e of this.broadcast.users)if(!(!e.visible&&e!==this.bigOverlay)&&(this.box.setFromObject(e),this.frustum.intersectsBox(this.box)))return!0;return!1}dispose(){var t;for(const e of this.boards)e.dispose();(t=this.broadcast)==null||t.dispose()}}const cn="コイン",r0=1e4,Yp="boatgame.wallet.v1";function uw(){var s;try{const t=(s=globalThis.localStorage)==null?void 0:s.getItem(Yp);if(!t)return null;const e=JSON.parse(t);return typeof e.free!="number"||typeof e.paid!="number"?null:{free:Math.max(0,Math.floor(e.free)),paid:Math.max(0,Math.floor(e.paid))}}catch{return null}}class jp{constructor(t={}){M(this,"_free");M(this,"_paid");M(this,"persist");M(this,"listeners",new Set);this.persist=t.persist??!0;const e=this.persist?uw():null;this._free=(e==null?void 0:e.free)??t.free??r0,this._paid=(e==null?void 0:e.paid)??t.paid??0}get free(){return this._free}get paid(){return this._paid}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}spendFree(t){return!(t>0)||!Number.isInteger(t)||t>this._free?!1:(this._free-=t,this.changed(),!0)}addFree(t){!(t>0)||!Number.isInteger(t)||(this._free+=t,this.changed())}addPaid(t){!(t>0)||!Number.isInteger(t)||(this._paid+=t,this.changed())}spendPaid(t){return!(t>0)||!Number.isInteger(t)||t>this._paid?!1:(this._paid-=t,this.changed(),!0)}reset(){this._free=r0,this._paid=0,this.changed()}changed(){var t;if(this.persist)try{(t=globalThis.localStorage)==null||t.setItem(Yp,JSON.stringify({free:this._free,paid:this._paid}))}catch{}for(const e of this.listeners)e(this)}}const a0=[{id:"type",label:"式別"},{id:"lanes",label:"艇番"},{id:"amount",label:"金額"},{id:"confirm",label:"確認"},{id:"issued",label:"発券"}],dw=["1着","2着","3着"],fw=[1,2,5,10,50],Vl={closed:"締切ました",empty:"艇番を選んでください",units:"金額が正しくありません","too-many":`1枚 ${ku}点までです`,funds:"残高が足りません",type:"この式別は発売していません"},Je=s=>s.toLocaleString("ja-JP"),c0=s=>s==null?"-":s>=1e3?String(Math.floor(s)):s.toFixed(1),Gi=(s,t="")=>`<span class="tm-lane l${s}${t}">${s}</span>`,Ya=s=>{const t=s.includes("=")?"=":"-";return Ks(s).map(e=>Gi(e)).join(`<i class="tm-sep">${t}</i>`)},pw=s=>{const t=Math.ceil(s/1e3);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`};function Zp(s){var K;const{sale:t,wallet:e}=s,n=s.now??Date.now,i=document.createElement("div");i.className="tm-overlay",i.innerHTML=`
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
    </div>`,(s.parent??document.body).appendChild(i);const o=L=>i.querySelector(L);let r="type",a=t.types[0],c=[new Set,new Set,new Set],l=1,h="odds",u=1,d=a,f=null,p="";const x=()=>yn[a],g=()=>LS(x(),c.slice(0,x().picks).map(L=>[...L].sort((N,O)=>N-O))),m=()=>{c=[new Set,new Set,new Set],p=""};function _(){o(".tm-title").textContent=t.title;const L=t.remaining(n()),N=o(".tm-state");N.className=`tm-state s-${t.state}`,N.textContent=t.state==="open"?L==null?"発売中":`発売中 締切まで ${pw(L)}`:t.state==="closed"?"締切":"確定",N.classList.toggle("soon",L!=null&&L<6e4),o(".tm-bal").innerHTML=`残高 <b>${Je(e.free)}</b> ${cn}`}function y(){const L=a0.findIndex(N=>N.id===r);return`<ol class="tm-steps">${a0.map((N,O)=>`<li class="${O===L?"on":O<L?"done":""}">${N.label}</li>`).join("")}</ol>`}function v(){const L=o(".tm-main");if(t.state==="settled")return void(L.innerHTML=S());if(t.state==="closed"){L.innerHTML=`<div class="tm-closed"><b>締切ました</b><p>レースの結果が確定すると、ここで払戻を受け取れます。</p><p>購入した舟券 ${t.tickets.length}枚 ／ ${Je(t.tickets.reduce((ot,rt)=>ot+rt.cost,0))} ${cn}</p></div>`;return}const N=g().length;let O="",X="";if(r==="type")O=`<p class="tm-ask">式別を選んでください</p><div class="tm-types">${t.types.map(ot=>`<button data-act="type" data-v="${ot}" class="${ot===a?"on":""}"><b>${yn[ot].short}</b><small>${yn[ot].name}</small><small>${P(ot)}</small></button>`).join("")}</div>`;else if(r==="lanes"){const ot=x();O=`<p class="tm-ask"><b>${ot.short}</b> 艇番を選んでください<small>（複数選ぶとフォーメーション）</small></p><div class="tm-grid">${Array.from({length:ot.picks},(rt,ut)=>{const tt=c[ut].size===6;return`<div class="tm-row"><span class="tm-place">${ot.ordered?dw[ut]:""}</span>${hi.map(wt=>`<button data-act="lane" data-r="${ut}" data-v="${wt}" class="tm-lane l${wt} ${c[ut].has(wt)?"on":""}">${wt}</button>`).join("")}<button data-act="all" data-r="${ut}" class="tm-all ${tt?"on":""}">全</button></div>`}).join("")}</div>`,X=`<span class="tm-pts">${N}点</span><button data-act="back">戻る</button><button data-act="next" class="tm-go" ${N?"":"disabled"}>金額へ</button>`}else if(r==="amount")O=`<p class="tm-ask">1点あたりの金額</p>
        <div class="tm-amount"><button data-act="units" data-v="-1" aria-label="減らす">−</button><output><b>${Je(l*Ve)}</b> ${cn}</output><button data-act="units" data-v="1" aria-label="増やす">＋</button></div>
        <div class="tm-chips">${fw.map(ot=>`<button data-act="setunits" data-v="${ot}" class="${ot===l?"on":""}">${Je(ot*Ve)}</button>`).join("")}</div>
        <p class="tm-sum">${N}点 × ${Je(l*Ve)} ＝ <b>${Je(N*l*Ve)}</b> ${cn}</p>`,X='<button data-act="back">戻る</button><button data-act="next" class="tm-go">確認へ</button>';else if(r==="confirm"){const ot=g(),rt=t.odds(a),ut=ot.length*l*Ve;O=`<p class="tm-ask">この内容で発券します</p>
        <div class="tm-confirm"><div class="tm-ctype">${x().name}</div>${ot.map(tt=>`<div class="tm-cline">${Ya(tt)}<span class="tm-codds">${c0(rt.get(tt))}倍</span><span>${Je(l*Ve)}</span></div>`).join("")}</div>`,X=`<span class="tm-pts tm-total">${ot.length}点 合計 <b>${Je(ut)}</b><small>購入後の残高 ${Je(e.free-ut)}</small></span><button data-act="back">戻る</button><button data-act="buy" class="tm-go" ${ut>e.free?"disabled":""}>発券</button>`}else O=f?`<p class="tm-ask">お取りください</p><div class="tm-slot"></div>${E(f)}`:"",X='<button data-act="again" class="tm-go">続けて買う</button>';L.innerHTML=`${y()}<div class="tm-step tm-scroll">${O}</div>${p?`<p class="tm-msg">${p}</p>`:""}${X?`<div class="tm-foot">${X}</div>`:""}`}const P=L=>{const N=yn[L];return N.picks===1?"1着を当てる":N.ordered?`1〜${N.picks}着を順番どおり`:`1〜${N.picks}着の組（順不同）`};function E(L){return`<div class="tm-paper"><div class="tm-ph"><b>舟券</b><span>${t.title}</span></div><div class="tm-pt">${yn[L.type].name}</div><div class="tm-pk">${L.picks.slice(0,4).map(N=>`<div>${Ya(N.key)}<span>${Je(N.units*Ve)}</span></div>`).join("")}${L.picks.length>4?`<div class="tm-more">ほか ${L.picks.length-4}点</div>`:""}</div><div class="tm-pf">${L.picks.length}点 合計 ${Je(L.cost)} ${cn}<small>No.${String(L.id).padStart(4,"0")}</small></div></div>`}function S(){const L=t.settlement,N=L.outcome,O=t.unclaimed(),X=t.types.map(ut=>{const tt=L.types[ut];if(!tt)return"";const wt=tt.status==="void"?'<span class="tm-void">不成立（返還）</span>':tt.status==="special"?`<span class="tm-void">特払い ${Je(tt.specialPer100)}</span>`:tt.winners.map(U=>`<span class="tm-win">${Ya(U.key)}<b>${Je(U.per100)}</b></span>`).join("");return`<div class="tm-rrow"><span class="tm-rt">${yn[ut].short}</span>${wt}</div>`}).join(""),ot=N.order.length?N.order.map((ut,tt)=>`<span class="tm-ord"><small>${tt+1}着</small>${Gi(ut)}</span>`).join(""):'<span class="tm-void">ゴール艇なし（レース不成立）</span>',rt=[N.returned.length?`返還: ${N.returned.map(ut=>Gi(ut," sm")).join("")}（フライング・出遅れ・欠場）`:"",L.result.capsized.length?`転覆: ${L.result.capsized.map(ut=>Gi(ut," sm")).join("")}（失格・返還なし）`:"",L.result.move?`決まり手: ${L.result.move}`:""].filter(Boolean);return`<div class="tm-result tm-scroll">
      <p class="tm-ask">レース結果（確定）</p>
      <div class="tm-orders">${ot}</div>
      ${rt.map(ut=>`<p class="tm-note">${ut}</p>`).join("")}
      <div class="tm-rtable"><div class="tm-rhead">払戻金（100${cn}あたり）</div>${X}</div>
      </div>
      <div class="tm-foot">${O>0?`<button data-act="claim" class="tm-go tm-claim">払戻を受け取る <b>${Je(O)}</b> ${cn}</button>`:`<span class="tm-pts">${t.tickets.some(ut=>ut.payout>0)?"払戻を受け取りました":t.tickets.length?"的中した舟券はありません":""}</span>`}</div>`}function C(){const L=t.tickets.length;o(".tm-tabs").innerHTML=`<button data-act="tab" data-v="odds" class="${h==="odds"?"on":""}">オッズ</button><button data-act="tab" data-v="tickets" class="${h==="tickets"?"on":""}">購入した舟券${L?` <i>${L}</i>`:""}</button>`,o(".tm-sidebody").innerHTML=h==="odds"?D():F()}function b(L){const N=new Map;return[...L.entries()].filter(O=>O[1]!=null).sort((O,X)=>O[1]-X[1]).forEach(([O],X)=>N.set(O,X+1)),N}const w=(L,N,O)=>{const X=O.get(L)??999,ot=X<=3?"hot":X<=10?"warm":"",rt=d===a&&g().includes(L)?" sel":"";return`<button data-act="pick" data-v="${L}" class="tm-odd ${ot}${rt}">${c0(N.get(L))}</button>`};function D(){const L=`<div class="tm-otypes">${t.types.map(ut=>`<button data-act="otype" data-v="${ut}" class="${ut===d?"on":""}">${yn[ut].short}</button>`).join("")}</div>`,N=yn[d],O=t.odds(d),X=b(O);let ot="";if(N.picks===1)ot=`<table class="tm-otable tm-win"><tr><th>艇</th><th>選手</th><th>オッズ</th><th>人気</th></tr>${hi.map(ut=>{var wt;const tt=ei(N,[ut]);return`<tr><td>${Gi(ut)}</td><td class="tm-name">${((wt=s.racers)==null?void 0:wt[ut-1])??""}</td><td>${w(tt,O,X)}</td><td class="tm-rank">${X.get(tt)??"-"}</td></tr>`}).join("")}</table>`;else if(N.picks===2)ot=`<table class="tm-otable"><tr><th class="tm-corner">1着＼2着</th>${hi.map(ut=>`<th>${Gi(ut)}</th>`).join("")}</tr>${hi.map(ut=>`<tr><th>${Gi(ut)}</th>${hi.map(tt=>ut===tt?'<td class="tm-x"></td>':N.ordered||ut<tt?`<td>${w(ei(N,[ut,tt]),O,X)}</td>`:'<td class="tm-x"></td>').join("")}</tr>`).join("")}</table>`;else{const ut=u;ot=`<div class="tm-firsts"><span>1着</span>${hi.map(tt=>`<button data-act="first" data-v="${tt}" class="tm-lane l${tt} ${tt===ut?"on":""}">${tt}</button>`).join("")}</div>
        <table class="tm-otable"><tr><th class="tm-corner">2着＼3着</th>${hi.map(tt=>`<th>${Gi(tt)}</th>`).join("")}</tr>${hi.filter(tt=>tt!==ut).map(tt=>`<tr><th>${Gi(tt)}</th>${hi.map(wt=>wt===ut||wt===tt?'<td class="tm-x"></td>':`<td>${w(ei(N,[ut,tt,wt]),O,X)}</td>`).join("")}</tr>`).join("")}</table>`}const rt=t.state==="open"?"締切まで変わります。数字を押すとその買い目を選びます":t.state==="closed"?"締切時のオッズ":"確定時のオッズ";return`${L}${ot}<p class="tm-onote">${rt}</p>`}function F(){if(!t.tickets.length)return'<p class="tm-empty">まだ購入していません</p>';const L=t.state==="settled",N={hit:"的中",miss:"",refund:"返還",special:"特払い"},O=[...t.tickets].reverse().map(rt=>`<div class="tm-tk ${L?rt.payout>0?"win":"lose":""}">
        <div class="tm-tkh"><b>${yn[rt.type].short}</b><span>No.${String(rt.id).padStart(4,"0")}</span><span>${rt.picks.length}点 ${Je(rt.cost)}</span>${L?`<b class="tm-tkp">${rt.payout?`払戻 ${Je(rt.payout)}`:"はずれ"}${rt.claimed&&rt.payout?"（受取済）":""}</b>`:""}</div>
        <div class="tm-tkb">${rt.picks.map(ut=>`<span class="tm-tkk ${ut.kind??""}">${Ya(ut.key)}<small>${Je(ut.units*Ve)}</small>${ut.kind&&N[ut.kind]?`<em>${N[ut.kind]}</em>`:""}</span>`).join("")}</div></div>`).join(""),X=t.tickets.reduce((rt,ut)=>rt+ut.cost,0),ot=t.tickets.reduce((rt,ut)=>rt+ut.payout,0);return`<p class="tm-tsum">購入 ${Je(X)} ${cn}${L?` ／ 払戻 ${Je(ot)} ${cn}`:""}</p>${O}`}function k(){_(),v(),C()}function B(L,N,O){switch(p="",L){case"close":return xt();case"type":a!==N&&m(),a=N,d=a,r="lanes";break;case"lane":{const X=Number(N);c[O].has(X)?c[O].delete(X):c[O].add(X);break}case"all":c[O]=c[O].size===6?new Set:new Set(hi);break;case"units":l=Math.min(Gp,Math.max(1,l+Number(N)));break;case"setunits":l=Number(N);break;case"next":if(r==="lanes"){const X=g().length;X?X>ku?p=Vl["too-many"]:r="amount":p=Vl.empty}else r==="amount"&&(r="confirm");break;case"back":r=r==="confirm"?"amount":r==="amount"?"lanes":"type";break;case"buy":{t.tick(n());const X=t.buy(e,a,g(),l);typeof X=="string"?p=Vl[X]:(f=X,r="issued");break}case"again":m(),f=null,r="type";break;case"claim":t.claim(e),h="tickets";break;case"tab":h=N;break;case"otype":d=N;break;case"first":u=Number(N);break;case"pick":{if(t.state!=="open"||!N)break;a=d,m(),Ks(N).forEach((X,ot)=>c[ot].add(X)),r="amount";break}}k()}i.addEventListener("click",L=>{const N=L.target.closest("[data-act]");!N||!i.contains(N)||N.disabled||B(N.dataset.act,N.dataset.v,Number(N.dataset.r??0))}),i.addEventListener("pointerdown",L=>{L.target===i&&xt()});const V=L=>{L.key==="Escape"&&xt()};window.addEventListener("keydown",V);let $=t.state,st=!1,H=0;const ft=t.onChange(()=>{t.state!==$?($=t.state,t.state!=="open"&&(r="type"),k()):st=!0}),vt=(K=e.onChange)==null?void 0:K.call(e,()=>_()),Mt=window.setInterval(()=>{t.tick(n()),_();const L=n();st&&L-H>2e3&&(st=!1,H=L,C())},250);let at=!1;function xt(){var L;at||(at=!0,window.clearInterval(Mt),window.removeEventListener("keydown",V),ft(),vt==null||vt(),i.remove(),(L=s.onClose)==null||L.call(s))}return k(),{el:i,close:xt,refresh:k}}const Ps=s=>s.toLocaleString("ja-JP"),mw=s=>`<span class="tm-lane l${s}">${s}</span>`,gw=s=>{const t=s.includes("=")?"=":"-";return Ks(s).map(e=>mw(e)).join(`<i class="tm-sep">${t}</i>`)};function Kp(s){var p;const{wallet:t}=s,e=document.createElement("div");e.className="tm-overlay",e.innerHTML=`
    <div class="tm pm" role="dialog" aria-label="払戻機">
      <header class="tm-head">
        <b class="tm-title">払戻機${s.machineId?` ${s.machineId}`:""}</b>
        <span class="tm-state s-settled">払戻</span>
        <span class="tm-bal"></span>
        <button class="tm-close" data-act="close" aria-label="閉じる">閉じる</button>
      </header>
      <div class="pm-body tm-scroll"></div>
      <div class="tm-foot pm-foot"></div>
    </div>`,(s.parent??document.body).appendChild(e);const n=x=>e.querySelector(x);let i="insert",o=0;function r(){const x=[];for(const g of s.sales())for(const m of g.tickets)(!m.claimed||m.payout===0)&&x.push({sale:g,t:m});return x}function a(){var P;n(".tm-bal").innerHTML=`残高 <b>${Ps(t.free)}</b> ${cn}`;const x=r(),g=x.reduce((E,S)=>E+(S.t.claimed?0:S.t.payout),0),m=(((P=s.pending)==null?void 0:P.call(s))??[]).filter(E=>E.tickets.length),_=m.length?`<p class="pm-pend">未確定の舟券: ${m.map(E=>`${E.title} ${E.tickets.length}枚`).join("、")}（確定してから払い戻せます）</p>`:"";let y="",v="";if(i==="insert")y=`<div class="tm-closed pm-insert"><b>舟券を入れてください</b><p>的中した舟券・返還の舟券を払い戻します</p>${_}</div>`,v='<button data-act="insert" class="tm-go">舟券を入れる</button>';else if(i==="show"){const E=x.filter(C=>C.t.payout>0&&!C.t.claimed),S=x.filter(C=>C.t.payout===0);y=E.length?`<p class="tm-ask">払戻金額</p>${E.map(C=>c(C.sale,C.t)).join("")}`:`<div class="tm-closed pm-insert"><b>払戻はありません</b><p>${S.length?`はずれの舟券 ${S.length}枚`:"確定した舟券がありません"}</p>${_}</div>`,E.length&&S.length&&(y+=`<p class="tm-tsum">はずれ ${S.length}枚</p>`),E.length&&(y+=_),v=g>0?`<span class="tm-pts">合計 <b>${Ps(g)}</b> ${cn}</span><button data-act="pay" class="tm-go tm-claim">支払 <b>${Ps(g)}</b> ${cn}</button>`:'<button data-act="close" class="tm-go">閉じる</button>'}else y=`<div class="tm-closed pm-insert"><b>お受け取りください</b><p>${Ps(o)} ${cn} を残高に入れました</p></div>`,v='<button data-act="close" class="tm-go">閉じる</button>';n(".pm-body").innerHTML=y,n(".pm-foot").innerHTML=v}function c(x,g){const m={hit:"的中",miss:"",refund:"返還",special:"特払い"};return`<div class="tm-tk win"><div class="tm-tkh"><b>${yn[g.type].short}</b><span>${x.title}</span><span>No.${String(g.id).padStart(4,"0")}</span><b class="tm-tkp">払戻 ${Ps(g.payout)}</b></div>
      <div class="tm-tkb">${g.picks.filter(_=>(_.payout??0)>0).map(_=>`<span class="tm-tkk ${_.kind??""}">${gw(_.key)}<small>${Ps(_.units*Ve)}</small>${_.kind&&m[_.kind]?`<em>${m[_.kind]}</em>`:""}</span>`).join("")}</div></div>`}function l(x){if(x==="close")return f();x==="insert"&&(i="show"),x==="pay"&&(o=s.sales().reduce((g,m)=>g+m.claim(t),0),i="paid"),a()}e.addEventListener("click",x=>{const g=x.target.closest("[data-act]");!g||!e.contains(g)||g.disabled||l(g.dataset.act)}),e.addEventListener("pointerdown",x=>{x.target===e&&f()});const h=x=>{x.key==="Escape"&&f()};window.addEventListener("keydown",h);const u=(p=t.onChange)==null?void 0:p.call(t,()=>n(".tm-bal").innerHTML=`残高 <b>${Ps(t.free)}</b> ${cn}`);let d=!1;function f(){var x;d||(d=!0,window.removeEventListener("keydown",h),u==null||u(),e.remove(),(x=s.onClose)==null||x.call(s))}return a(),{el:e,close:f,refresh:a}}const Ls=hn[0],ja=hn[1],xw={moored:"ピット",rush:"ピット離れ",buoy:"ブイ",back:"バック",uturn:"回り込み",approach:"進入",race:""},vw=`
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
`;function _w(){let s="";for(let t=0;t<12;t++){const e=t/12*Math.PI*2;s+=`<line x1="${(50+Math.sin(e)*36).toFixed(1)}" y1="${(50-Math.cos(e)*36).toFixed(1)}" x2="${(50+Math.sin(e)*42).toFixed(1)}" y2="${(50-Math.cos(e)*42).toFixed(1)}" stroke="#f2c230" stroke-width="${t%3?2:4}"/>`}return`<svg class="r-dial" viewBox="0 0 100 112" aria-hidden="true">
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
</svg>`}const Mw=60;let Za=null;function Jp({renderer:s,scene:t,camera:e,sun:n,waves:i,player:o}){var St;ds!=="drift"&&Xr("drift");const r=o?["hud","start","b-prop","b-wave","prop-panel","rotate"]:["hud","lever","lean-pad","steer-pad","wheel","start","touch","b-prop","b-wave","b-center","prop-panel","rotate"];for(const G of r)(St=document.getElementById(G))==null||St.setAttribute("hidden","");const a=document.createElement("style");a.textContent=vw,document.head.appendChild(a);const c=document.createElement("div");c.id="race-hud",c.innerHTML=`<div class="r-prog" id="r-prog" hidden></div><div class="r-top">${_w()}<div><div class="r-clock" id="r-clock"></div><div class="r-pre" id="r-pre"></div></div></div><div class="r-me" id="r-me" hidden></div><div class="r-warn" id="r-warn" hidden></div><div class="r-entry" id="r-entry"></div><div class="r-lap" id="r-lap"></div><div class="r-speed" id="r-speed" hidden></div><ol class="r-order" id="r-order"></ol>`,document.body.appendChild(c);const l=document.createElement("div");l.id="r-announce",document.body.appendChild(l);const h=document.getElementById("r-clock"),u=document.getElementById("r-prog"),d=document.getElementById("r-pre"),f=document.getElementById("r-me"),p=document.getElementById("r-warn"),x=document.getElementById("r-entry"),g=document.getElementById("r-lap"),m=document.getElementById("r-speed"),_=document.getElementById("r-order"),y=c.querySelector(".r-dial"),v=y.querySelector(".h60"),P=y.querySelector(".h12"),E=y.querySelectorAll(".lamp2"),S=y.querySelector(".sigw"),C=y.querySelector(".sigb"),b=document.getElementById("banner"),w=o==null?void 0:o.controls;w&&(c.classList.add("playing"),m.hidden=!1,f.hidden=!1,document.getElementById("touch").hidden=!1,document.getElementById("lever").hidden=!1,document.getElementById("b-center").hidden=!w.tiltActive,document.getElementById("b-center").onclick=()=>w.recenter(),Sp(w));const D=new URLSearchParams(location.search),F=D.get("entry")==="fixed"?"fixed":"free",k=D.get("pitout")?Number(D.get("pitout")):void 0,B=new Op(i,{humanLane:o==null?void 0:o.lane,entry:F,pitOut:k}),V=B.prestart,$=B.visual,st=D.get("seed")?Number(D.get("seed")):void 0,H=o?null:new Xp(B,{saleSec:Mw,seed:st}),ft=H?new jp:null,vt=new Au(i),Mt=Ru();t.add(vt.mesh,Mt);const at=new Pu($);t.add(at.group),vt.hideFromRefraction(...at.aboveWater),at.simplifySeats();const xt=H?new qp(H,at.screens,null):null,K=new CS($);t.add(K.group);const L=new Iu($);t.add(L.points),vt.hide(Mt,L.points);const N=()=>L.resize(window.innerHeight,e.fov,s.getPixelRatio());window.addEventListener("resize",N);const O=B.boats.map(G=>{const bt=bu(G.lane);t.add(bt.root);const lt=new Lu($);return t.add(lt.mesh),vt.hide(lt.mesh),Object.assign(G,{view:bt,foam:lt})}),X=O.find(G=>G.human)??null;let ot=new Set,rt=0;function ut(G){l.textContent=G,l.classList.add("show"),rt=4}function tt(){H||B.reset();for(const G of O)G.foam.clear();L.clear(),b.classList.remove("show"),l.classList.remove("show"),ot=new Set,w&&(w.lever=0)}tt(),B.onFinish=G=>{const bt=G.late??[],lt=X?X.cpu.flying?"　あなた: F（返還欠場）":bt.includes(X.lane)?"　あなた: L（返還欠場）":X.cpu.capsized?"　あなた: 転覆":`　あなた: ${G.order.indexOf(X.lane)+1}着`:"",Lt=[...G.flying.map(Vt=>`F${Vt}`),...bt.map(Vt=>`L${Vt}`)].join(" ");b.textContent=G.cancelled?`レース不成立（${Lt}）${lt}`:`${G.order.join("-")}　${G.move}${Lt?`　${Lt}`:""}${lt}`,b.classList.add("show"),b.classList.toggle("small",!!X||!!Lt)};const wt=X?["追従","低い追従","1マーク観客席","中継","上空","2マーク上空"]:["オート","1マーク観客席","中継","上空","2マーク上空","先頭追従"];let U=0;const Et=document.getElementById("b-cam"),Wt=()=>Et.textContent=`視点:${wt[U]}`;Wt(),Et.onclick=()=>{U=(U+1)%wt.length,Wt()};const $t=document.getElementById("b-reset");if($t.textContent="もう一度",$t.onclick=tt,H){H.on(Lt=>{if(Lt.type==="race"&&tt(),Lt.type==="result"){const Vt=H.sale.unclaimed();H.sale.tickets.length&&ut(Vt>0?`的中！ 払戻 ${Vt.toLocaleString()} ${cn}（「払戻」で受け取り）`:"舟券ははずれ")}}),$t.onclick=()=>{H.phase==="open"?H.closeNow():(H.phase==="closed"||H.phase==="judging"||H.phase==="settled")&&H.next()};let G=null;const bt=document.createElement("button");bt.textContent="舟券",bt.onclick=()=>{G==null||G.close(),G=Zp({sale:H.sale,wallet:ft,racers:H.racers,now:H.now,onClose:()=>G=null})};const lt=document.createElement("button");lt.textContent="払戻",lt.hidden=!0,lt.onclick=()=>{G==null||G.close(),G=Kp({sales:()=>H.history,pending:()=>H.sale.state==="settled"?[]:[H.sale],wallet:ft,onClose:()=>G=null})},document.getElementById("buttons").append(bt,lt),Za=()=>{const Lt=H.unclaimed();lt.hidden=Lt<=0,lt.textContent=`払戻 ${Lt.toLocaleString()}`;const Vt=H.phase;$t.textContent=Vt==="open"?"締切へ":Vt==="closed"?"ピットアウトへ":Vt==="settled"||Vt==="judging"?"次のレースへ":"レース中",$t.disabled=Vt==="race";const ae=H.pendingTickets().length;u.hidden=!1,u.innerHTML=`${H.statusText()}<small>残高 ${ft.free.toLocaleString()} ${cn}${ae?`　舟券 ${ae}枚`:""}</small>`}}const Bt="boatgame.cpuBrain";let oe=!1;try{localStorage.getItem(Bt)==="rule"&&(oe=!1)}catch{}const Ut=document.createElement("button");(()=>{B.setPolicy(oe?Bp:null),Ut.textContent=`CPU:${oe?"学習":"ルール"}`})(),Ut.onclick=()=>{};const T="boatgame.cpuControl";let j=!!Ro;try{localStorage.getItem(T)==="rule"&&(j=!1)}catch{}const pt=document.createElement("button"),gt=()=>{B.setControl(j?Ro:null),pt.textContent=`操作:${j?"学習":"ルール"}`};gt(),pt.onclick=()=>{if(Ro){j=!j;try{localStorage.setItem(T,j?"learned":"rule")}catch{}gt(),tt()}},Ro&&document.getElementById("buttons").appendChild(pt);const dt=document.createElement("button");dt.textContent=X?"メニュー":"自分で走る",dt.onclick=()=>{location.hash="",location.reload()},document.getElementById("buttons").appendChild(dt);for(const G of document.querySelectorAll("#buttons button"))G.addEventListener("pointerdown",bt=>bt.stopPropagation());const Ft=new A,Tt=new A,At=new A,Jt=new A(0,0,1),_t=new A,It=new A(0,0,-1.75),Gt=new A,mt=new A,Q=new vu;let yt=!0;const Nt=Number(D.get("ff")??NaN);Number.isFinite(Nt)&&(H&&(H.closeNow(),H.next()),B.fastForward({toClock:Nt})),s.setAnimationLoop(()=>{const G=Math.min(Q.getDelta(),.05);w==null||w.update(G),Xt(G),ct(G)});function Xt(G){B.humanInput=(w==null?void 0:w.input)??null,H?H.update(G):B.step(G)}const z=G=>`<span class="lane" style="background:${Ic[G-1]};color:${G===1||G===5?"#111":"#fff"}">${G}</span>`,ht=G=>`${Math.floor(G/60)}:${(G%60).toFixed(1).padStart(4,"0")}`;function Z(G,bt){const lt=G<Dl?0:Math.min(1,(G-Dl)/60)*360;v.setAttribute("transform",`rotate(${lt.toFixed(1)} 50 50)`),v.style.display=G>mr||G>0?"none":"";const Lt=Math.min(0,Math.max(G,mr));P.setAttribute("transform",`rotate(${((Lt%12+12)%12/12*360).toFixed(1)} 50 50)`);for(const Zt of E)Zt.setAttribute("fill",G<Dl?"#ff5a3d":"#444");const Vt=G>=mr&&G<0&&G*2%1>-.5;if(S.setAttribute("fill",Vt?"#fff":"#333"),C.setAttribute("fill",Vt?"#3d8bff":"#333"),at.setClock(Lt),H&&(H.phase==="open"||H.phase==="closed")){const Zt=H.phaseLeft??0;h.textContent=H.phase==="open"?`締切まで ${Math.floor(Math.ceil(Zt-.001)/60)}:${String(Math.ceil(Zt-.001)%60).padStart(2,"0")}`:`ピットアウトまで ${(Zt+V.pitOut-G).toFixed(0)}`,h.classList.toggle("near",H.phase==="open"&&Zt<60),d.textContent=H.phase==="open"?"発売中（係留中）":"発売締切",d.classList.toggle("hot",H.phase==="closed")}else G<V.pitOut?(h.textContent=`ピットアウトまで ${(V.pitOut-G).toFixed(1)}`,h.classList.toggle("near",G>V.pitOut-5),d.textContent=G>=Ff?"♪ ファンファーレ":"係留中",d.classList.toggle("hot",G>=Ff)):G<0?(h.textContent=G<-15?`スタートまで ${ht(-G)}`:`大時計 ${(-G).toFixed(1)}`,h.classList.toggle("near",G>-5),d.textContent=G<V.pitOut+4?"ピットアウト！":G<mr?"待機行動":"起こし",d.classList.toggle("hot",G<V.pitOut+4||G>=mr)):(h.textContent=ht(G),h.classList.remove("near"),d.textContent="");const ae=[...V.boats].sort((Zt,Be)=>Zt.course-Be.course),Te=G<0?ae.filter(Zt=>Zt.slow).length:V.nSlow,Ie=V.finalCourse,Ue=Ie??ae.map(Zt=>Zt.lane);if(x.innerHTML=G>=V.pitOut+4&&G<25?`進入${Ie?"":"（予定）"}&nbsp;`+Ue.map((Zt,Be)=>(Be===Te?"<i>/</i>":"")+z(Zt)).join(""):"",X){const Zt=V.get(X.lane),Be=Ie?Ie.indexOf(X.lane)+1:Zt.course,xe=!Ie&&G>V.pitOut?Zt.course<=Te?"スロー":"ダッシュ":"",Rt=Zt.st!==null||Zt.late?`　ST ${kl(Zt.st,Zt.late)}`:"";f.innerHTML=G<V.pitOut?`あなた: ${X.lane}号艇 <small>合図まで動けません</small>`:`あなた: ${Be}コース${Ie?"":"（予定）"}<small>${xe?" "+xe:""}</small>${Rt}${Zt.flying||Zt.late?" <small>返還欠場</small>":""}`;const ee=V.violations.filter(me=>me.lane===X.lane&&G-me.clock<4).at(-1);p.hidden=!ee,ee&&(p.textContent=`待機行動違反: ${ee.kind}`)}for(const Zt of V.boats){const Be=`${Zt.lane}${Zt.flying?"F":Zt.late?"L":""}`;if((Zt.flying||Zt.late)&&!ot.has(Be)){ot.add(Be);const xe=V.boats.filter(Rt=>Rt.flying||Rt.late);ut(xe.map(Rt=>`${Rt.lane}号艇 ${Rt.flying?"フライング":"出遅れ"}`).join("・")+"　返還欠場"+(xe.length>=5?"　レース不成立":""))}}rt>0&&(rt-=bt)<=0&&l.classList.remove("show")}function ct(G){var xe;if(B.frame(G)){const Rt=B.wakeTexture;Rt&&vt.updateWakeHalf(Rt.half,Rt.n,Rt.dx,Rt.originX,Rt.originZ)}const bt=B.t,lt=B.clock;for(const Rt of O){if(Rt.view.root.visible=Rt.foam.mesh.visible=!Rt.removed,Rt.removed)continue;Eu(Rt.view,Rt.ph,G),_t.set(-1,0,0).applyQuaternion(Rt.ph.quat),Rt.ph.toWorld(It,Gt);const ee=Rt.ph.speed(),me=1+.8*Math.max(Rt.ph.propState.cav,Rt.ph.propState.vent);Rt.ph.propImmersion>.2&&ee>1&&Rt.foam.add(bt,Gt,_t,Math.min(1,ee/8)*me),Rt.foam.update(bt),L.emit(G,bt,Rt.ph,110)}L.step(G,bt),vt.update(bt,e.position),at.update(bt),K.update(bt),Z(lt,G),Za==null||Za(),xt==null||xt.update(G,s,t,e,vt);const Lt=B.order(),Vt=Lt[0];if(g.textContent=B.inPrestart?"":Vt.cpu.finished?"ゴール":`${Math.min($o,Math.max(1,Vt.cpu.laps+1))}周目 / ${$o}周`,_.innerHTML=Lt.map((Rt,ee)=>{const me=Rt.lane,Ce=V.get(me);let Fe;return B.inPrestart?Fe=`<small>${Ce.course}コース ${lt>V.pitOut?xw[Ce.phase]+(Ce.launched?" 起こし":""):""}</small>`:Rt.cpu.capsized?Fe="<em>転覆</em>":Ce.flying||Ce.late?Fe=`<em>${kl(Ce.st,Ce.late).slice(0,1)} 欠場</em>`:Rt.cpu.finished?Fe=`<small>${Rt.cpu.finishTime.toFixed(1)}s</small>`:lt<12&&Ce.st!==null?Fe=`<small class="st">ST ${kl(Ce.st)}</small>`:Fe=`<small>${Math.max(0,Rt.cpu.progress/Ti).toFixed(1)}周${Rt.cpu.tactic?" "+Rt.cpu.tactic:""}</small>`,`<li${Rt===X?' class="me"':""}><b>${B.inPrestart?Ce.course:ee+1}</b>${z(me)}${Fe}</li>`}).join(""),X&&w){m.textContent=`${(X.ph.speed()*3.6).toFixed(0)} km/h`,wp(w,w.input.steer);const Rt=X.ph.legForce,ee=Math.min(1,Math.hypot(Rt.x,Rt.y-Li*9.81,Rt.z)/(Li*9.81*2));document.getElementById("lean-pad").style.setProperty("--kick",ee.toFixed(2))}let ae=40;const Te=Vt.ph.origin,Ie=O.filter(Rt=>!Rt.removed);mt.set(0,0,0);for(const Rt of Ie)mt.add(Rt.ph.origin);mt.multiplyScalar(1/Math.max(1,Ie.length));const Ue=Math.max(12,...Ie.map(Rt=>Math.hypot(Rt.ph.origin.x-mt.x,Rt.ph.origin.z-mt.z)+6));let Zt=wt[U];if(Zt==="オート"&&(Zt=lt<-14?"2マーク上空":lt<6?"中継":"1マーク観客席"),X&&(Zt==="追従"||Zt==="低い追従")){const Rt=X.ph.vel,ee=Math.hypot(Rt.x,Rt.z);X.ph.forward(_t);const me=new A(_t.x,0,_t.z).normalize(),Ce=Math.min(.7,Math.max(0,(ee-2)/4)*.7);ee>.1&&me.multiplyScalar(1-Ce).add(new A(Rt.x/ee,0,Rt.z/ee).multiplyScalar(Ce)).normalize(),Jt.lerp(me,yt?1:1-Math.exp(-G*3)).normalize();const Fe=Zt==="低い追従",_e=X.ph.origin;Ft.copy(_e).addScaledVector(Jt,Fe?-4.2:-7).add(new A(0,Fe?1.5:3.2,0)),Tt.copy(_e).addScaledVector(Jt,2.5).add(new A(0,.6,0)),ae=window.innerWidth<window.innerHeight?75:60}else if(Zt==="1マーク観客席")ae=30,Ft.set(-58,16,Ls.z-22),Tt.set(Ls.x-4,0,Ls.z+4);else if(Zt==="中継"){const Rt=B.inPrestart||lt<3,ee=Rt?mt:Te;Rt?Ft.set(-44,38,Math.max(-230,Math.min(150,ee.z+45))):Ft.set(-55,31,Math.max(-150,Math.min(150,ee.z*.75))),Tt.copy(ee);const me=e.position.distanceTo(ee);ae=Math.max(5,Math.min(60,2*Math.atan((Rt?Ue:10)/Math.max(1,me))*180/Math.PI))}else if(Zt==="上空")Ft.set(Ls.x,120,Ls.z-60),Tt.set(Ls.x,0,Ls.z-12),ae=50;else if(Zt==="2マーク上空"){const Rt=Math.max(ja.z-75,Math.min(ja.z+30,mt.z));Ft.set(ja.x-48,70,Rt+50),Tt.set(ja.x+8,0,Rt-8),ae=50}else{const Rt=Vt.ph.vel,ee=Math.hypot(Rt.x,Rt.z);ee>2&&Jt.lerp(new A(Rt.x/ee,0,Rt.z/ee),1-Math.exp(-G*3)).normalize(),Ft.copy(Te).addScaledVector(Jt,-9).add(new A(0,3.2,0)),Tt.copy(Te).addScaledVector(Jt,3),ae=window.innerWidth<window.innerHeight?75:60}const Be=yt?1:1-Math.exp(-G*3);e.position.lerp(Ft,Be),At.lerp(Tt,yt?1:1-Math.exp(-G*5)),e.lookAt(At),Math.abs(e.fov-ae)>.01&&(e.fov+=(ae-e.fov)*(yt?1:1-Math.exp(-G*4)),e.updateProjectionMatrix(),N()),yt=!1,n.position.copy(At).addScaledVector($r,30),n.target.position.copy(At),n.shadow.camera.left=n.shadow.camera.bottom=-14,n.shadow.camera.right=n.shadow.camera.top=14,n.shadow.camera.updateProjectionMatrix(),(xe=t.userData.sky)==null||xe.position.copy(e.position),vt.renderPasses(s,t,e),s.render(t,e)}}class yw{constructor(t,e,n){M(this,"water");M(this,"farWater");M(this,"course");M(this,"effects");M(this,"boats");M(this,"session");M(this,"right",new A);M(this,"stern",new A(0,0,-1.75));M(this,"sternW",new A);M(this,"center",new A);M(this,"fwd",new A);this.session=e;const i=e.visual;this.water=new Au(n),this.farWater=Ru(),t.add(this.water.mesh,this.farWater),this.course=new Pu(i),t.add(this.course.group),this.water.hideFromRefraction(...this.course.aboveWater),this.effects=new Iu(i),t.add(this.effects.points),this.water.hide(this.farWater,this.effects.points),this.boats=e.boats.map(o=>{const r=bu(o.lane);t.add(r.root);const a=new Lu(i);return t.add(a.mesh),this.water.hide(a.mesh),{race:o,view:r,foam:a}})}resize(t,e,n){this.effects.resize(t,e,n)}clear(){for(const t of this.boats)t.foam.clear();this.effects.clear()}wakeUpdated(){const t=this.session.wakeTexture;t&&this.water.updateWakeHalf(t.half,t.n,t.dx,t.originX,t.originZ)}update(t,e){this.session.frame(t)&&this.wakeUpdated();const n=this.session.t;for(const o of this.boats){if(o.view.root.visible=o.foam.mesh.visible=!o.race.removed,o.race.removed)continue;const r=o.race.ph;Eu(o.view,r,t),this.right.set(-1,0,0).applyQuaternion(r.quat),r.toWorld(this.stern,this.sternW);const a=r.speed(),c=1+.8*Math.max(r.propState.cav,r.propState.vent);r.propImmersion>.2&&a>1&&o.foam.add(n,this.sternW,this.right,Math.min(1,a/8)*c),o.foam.update(n),this.effects.emit(t,n,r,110)}this.effects.step(t,n),e.getWorldDirection(this.fwd);const i=Math.hypot(this.fwd.x,this.fwd.z)||1;this.center.set(e.position.x+this.fwd.x/i*60,0,e.position.z+this.fwd.z/i*60),this.center.x=Math.max(Ht.x0+40,Math.min(Ht.x1-20,this.center.x)),this.center.z=Math.max(Ht.z0+20,Math.min(Ht.z1-20,this.center.z)),this.water.update(n,this.center),this.course.update(n),this.course.setClock(this.session.clock)}aimSun(t,e,n,i=80){t.position.copy(e).addScaledVector($r,i),t.target.position.copy(e);const o=t.shadow.camera;(o.right!==n||o.far!==i*2)&&(o.left=o.bottom=-n,o.right=o.top=n,o.far=i*2,o.updateProjectionMatrix())}render(t,e,n){this.water.renderPasses(t,e,n),t.render(e,n)}}const l0=1.6,h0=1.4,Sw=3,ww=.3,u0=1.8;class bw{constructor(t,e){M(this,"pos",new A);M(this,"yaw",0);M(this,"pitch",0);M(this,"enabled",!0);M(this,"speed",0);M(this,"eyeY",0);M(this,"bob",0);M(this,"vel",new Pt);M(this,"keys",new Set);M(this,"stick",{id:-1,ox:0,oy:0,x:0,y:0});M(this,"look",{id:-1,x:0,y:0,moved:0,mouse:!1});M(this,"el");M(this,"stickBase");M(this,"stickKnob");M(this,"world");M(this,"off",[]);this.el=t,this.world=e,t.style.touchAction="none",this.stickBase=document.createElement("div"),this.stickBase.className="av-stick",this.stickKnob=document.createElement("div"),this.stickKnob.className="av-knob",this.stickBase.appendChild(this.stickKnob),t.appendChild(this.stickBase),this.showStick(!1);const n=(i,o,r,a)=>{i.addEventListener(o,r,a),this.off.push(()=>i.removeEventListener(o,r,a))};n(t,"pointerdown",i=>this.down(i)),n(window,"pointermove",i=>this.moveP(i)),n(window,"pointerup",i=>this.up(i)),n(window,"pointercancel",i=>this.up(i)),n(document,"mousemove",i=>{document.pointerLockElement!==t||!this.enabled||this.turn(i.movementX*.0025,i.movementY*.0025)}),n(window,"keydown",i=>{Ew(i)||(this.keys.add(i.code),(i.code.startsWith("Arrow")||i.code==="Space")&&i.preventDefault())}),n(window,"keyup",i=>this.keys.delete(i.code)),n(window,"blur",()=>this.keys.clear())}dispose(){for(const t of this.off)t();this.stickBase.remove(),document.pointerLockElement===this.el&&document.exitPointerLock()}place(t,e,n,i,o=0){this.pos.set(t,e,n),this.yaw=i,this.pitch=o,this.eyeY=e+l0,this.vel.set(0,0)}update(t){let e=0,n=0,i=!1;if(this.enabled){const m=this.keys;(m.has("KeyW")||m.has("ArrowUp"))&&(e+=1),(m.has("KeyS")||m.has("ArrowDown"))&&(e-=1),m.has("KeyD")&&(n+=1),m.has("KeyA")&&(n-=1),m.has("ArrowLeft")&&(this.yaw+=u0*t),m.has("ArrowRight")&&(this.yaw-=u0*t),i=m.has("ShiftLeft")||m.has("ShiftRight");const _=Math.hypot(e,n);if(_>1&&(e/=_,n/=_),this.stick.id>=0){const v=this.stick.x/55,P=-this.stick.y/55,E=Math.hypot(v,P);if(E>.12){const S=Math.min(1,E);n=v/E*S,e=P/E*S,i=E>1.5}}}const o=i?Sw:h0,r=Math.sin(this.yaw),a=Math.cos(this.yaw),c=(-r*e+a*n)*o,l=(-a*e-r*n)*o,h=1-Math.exp(-t/.15);this.vel.x+=(c-this.vel.x)*h,this.vel.y+=(l-this.vel.y)*h;let u=this.vel.x*t,d=this.vel.y*t;const f=this.pos.clone(),p=Math.max(1,Math.ceil(Math.hypot(u,d)/.2));u/=p,d/=p;for(let m=0;m<p;m++)this.world.move(this.pos,u,d,ww);const x=Math.hypot(this.pos.x-f.x,this.pos.z-f.z);this.speed=x/Math.max(t,1e-4),x<Math.hypot(u*p,d*p)*.5&&this.vel.multiplyScalar(.5),this.bob+=x*1.6*Math.PI;const g=this.pos.y+l0+Math.sin(this.bob)*.018*Math.min(1,this.speed/h0);this.eyeY+=(g-this.eyeY)*(1-Math.exp(-t*14))}apply(t){t.position.set(this.pos.x,this.eyeY,this.pos.z),t.rotation.set(this.pitch,this.yaw,0,"YXZ")}turn(t,e){this.yaw-=t,this.pitch=Math.max(-1.35,Math.min(1.35,this.pitch-e))}showStick(t,e=0,n=0){this.stickBase.style.display=t?"block":"none",t&&(this.stickBase.style.left=`${e}px`,this.stickBase.style.top=`${n}px`,this.stickKnob.style.transform="translate(-50%, -50%)")}down(t){if(!this.enabled)return;const e=window.innerWidth,n=window.innerHeight,i=t.pointerType!=="mouse";if(i&&this.stick.id<0&&t.clientX<e*.45&&t.clientY>n*.3)this.stick={id:t.pointerId,ox:t.clientX,oy:t.clientY,x:0,y:0},this.showStick(!0,t.clientX,t.clientY);else if(this.look.id<0){if(!i&&t.button!==0)return;this.look={id:t.pointerId,x:t.clientX,y:t.clientY,moved:0,mouse:!i}}t.preventDefault()}moveP(t){if(t.pointerId===this.stick.id){this.stick.x=t.clientX-this.stick.ox,this.stick.y=t.clientY-this.stick.oy;const e=55,n=Math.hypot(this.stick.x,this.stick.y),i=n>e?e/n:1;this.stickKnob.style.transform=`translate(calc(-50% + ${this.stick.x*i}px), calc(-50% + ${this.stick.y*i}px))`,this.stickBase.classList.toggle("run",n>e*1.5)}else if(t.pointerId===this.look.id){const e=t.clientX-this.look.x,n=t.clientY-this.look.y;this.look.x=t.clientX,this.look.y=t.clientY,this.look.moved+=Math.abs(e)+Math.abs(n),this.enabled&&this.turn(e*(this.look.mouse?.004:.006),n*(this.look.mouse?.004:.006))}}up(t){var e,n;if(t.pointerId===this.stick.id)this.stick.id=-1,this.stick.x=this.stick.y=0,this.showStick(!1);else if(t.pointerId===this.look.id){if(this.look.mouse&&this.look.moved<4&&this.enabled&&document.pointerLockElement!==this.el)try{(n=(e=this.el.requestPointerLock())==null?void 0:e.catch)==null||n.call(e,()=>{})}catch{}this.look.id=-1}}}function Ew(s){const t=s.target;return!!t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable)}const Tw=`
.av-stick { position: absolute; width: 110px; height: 110px; margin: -55px 0 0 -55px; border-radius: 50%;
  background: rgba(255,255,255,.12); border: 2px solid rgba(255,255,255,.45); pointer-events: none; }
.av-stick.run { border-color: #ffd34d; }
.av-knob { position: absolute; left: 50%; top: 50%; width: 46px; height: 46px; border-radius: 50%;
  background: rgba(255,255,255,.55); transform: translate(-50%, -50%); }
`;function Aw(){const s=new Ge;s.name="venue-interior";const t=xp(),e=new gp,n=[],i=[],o=Ot[1]-Ds,r=[];let a=0,c=0;for(const u of _p){for(let g=0;g<u.n;g++){const m=u.z+g*br,_=u.kind==="sell"?`S${String(++a).padStart(2,"0")}`:`P${String(++c).padStart(2,"0")}`,y=it.concBack+pi.d;r.push({id:_,kind:u.kind,pos:new A(y,J,m),stand:new A(y+.55,J,m),normal:new A(1,0,0),lookYaw:Math.PI/2})}const d=(u.n-1)*br+pi.w,f=u.kind==="sell"?"舟券発売":"払戻",p=u.kind==="sell"?"#1f5fbf":"#1d8a4a",x=new zt(new je(d,.55),new Ri({map:To(f,p,"#fff",512,64),toneMapped:!1}));x.rotation.y=Math.PI/2,x.position.set(it.concBack+.03,J+2.25,u.z+(u.n-1)*br/2),s.add(x);for(let g=0;g<2;g++){const m=u.z+(u.n-1)*br*(g===0?.25:.75),_=Ao(`odds-${String(n.length+1).padStart(2,"0")}`,`コンコース吊りモニター ${n.length+1}`,"odds",1.6,.9,{w:512,h:288});_.mesh.rotation.y=Math.PI/2,_.mesh.position.set(it.concBack+1.06,J+3.5,m),s.add(_.mesh),n.push(_),e.box(t.dark,it.concBack+.94,it.concBack+1.04,J+2.98,J+4.02,m-.86,m+.86);for(const y of[-.5,.5])e.box(t.steel,it.concBack+.97,it.concBack+1.01,J+4.02,o,m+y-.02,m+y+.02)}}s.add(...Pw(r));for(const u of[108,168]){const d=Ao(`odds-${String(n.length+1).padStart(2,"0")}`,`コンコース大型オッズ板 ${u===108?"北":"南"}`,"odds",3.2,1.8,{w:1024,h:576});d.mesh.rotation.y=-Math.PI/2,d.mesh.position.set(pn.xs[0]-.12,J+3.6,u),s.add(d.mesh),n.push(d),e.box(t.dark,pn.xs[0]-.1,pn.xs[0]+.05,J+2.6,J+4.6,u-1.7,u+1.7);for(const p of[-1.2,1.2])e.box(t.steel,pn.xs[0]-.05,pn.xs[0],J+4.6,o,u+p-.02,u+p+.02);const f=Ao(`odds-${String(n.length+1).padStart(2,"0")}`,`コンコース大型オッズ板 ${u===108?"北":"南"}（裏）`,"odds",3.2,1.8,{w:1024,h:576});f.mesh.rotation.y=Math.PI/2,f.mesh.position.set(pn.xs[0]+.07,J+3.6,u),s.add(f.mesh),n.push(f)}for(const u of[125,145,165,185]){const d=Ao(`deck-${String(n.filter(f=>f.kind==="deck").length+1).padStart(2,"0")}`,`デッキ吊りモニター z${u}`,"deck",1.8,1,{w:512,h:288});d.mesh.rotation.y=-Math.PI/2,d.mesh.position.set(it.front2-.42,J+4.5,u),s.add(d.mesh),n.push(d),e.box(t.dark,it.front2-.4,it.front2-.25,J+3.92,J+5.08,u-.96,u+.96);for(const f of[-.5,.5])e.box(t.steel,it.front2-.34,it.front2-.3,J+5.08,o,u+f-.02,u+f+.02)}for(const u of pe.zs){const d=pe.x-pe.w/2,f=pe.x+pe.w/2;e.box(t.panel,d+.1,f-.1,J,J+pe.h-.1,u-pe.len/2+.1,u+pe.len/2-.1),e.boxAt(t.wood,pe.x,J+pe.h-.05,u,pe.w,.05,pe.len,0,0),e.box(t.dark,pe.x-.08,pe.x+.08,J+pe.h,J+pe.h+.32,u-pe.len/2+.2,u+pe.len/2-.2),e.box(t.light,pe.x-.06,pe.x+.06,J+pe.h+.32,J+pe.h+.36,u-pe.len/2+.2,u+pe.len/2-.2)}e.box(t.wood,-69,-64,J,J+1.1,196,201),e.box(t.panel,-68.8,-64.2,J+1.1,J+1.15,196.2,200.8);{const u=new zt(new je(3,.6),new Ri({map:To("総合案内","#c9a227","#1a1a1a",256,52),toneMapped:!1}));u.rotation.y=Math.PI/2,u.position.set(-63.95,J+2.6,198.5),s.add(u)}const l=(u,d,f,p,x=4,g="#1d2f55")=>{const m=new zt(new je(x,.6),new Ri({map:To(u,g,"#fff",512,64),toneMapped:!1,side:ke}));m.rotation.y=p,m.position.set(d,J+3.9,f),s.add(m),e.box(t.steel,d-.02,d+.02,J+4.2,o,f-.02,f+.02)};l("← 1マーク 水際デッキ",-60.5,140,Math.PI/2,4.4),l("← ふらっとデッキ",-60.5,80,Math.PI/2,4.4),l("南入場門 →",-72,203,0,4),l("2F 屋外席は外の階段から",-72,62,Math.PI,5);{const u=new zt(new je(10,1.2),new Ri({map:To("中央ホール","#1d2f55","#fff",512,64,"イベント開催時のみ"),toneMapped:!1}));u.position.set(-72,J+3.2,W.concN+.03),s.add(u)}for(const u of[-62.5,-70,-77,-83])for(let d=W.concN+3;d<W.standS-1;d+=6)e.box(t.light,u-.15,u+.15,o-.04,o,d-2,d+2);for(let u=W.wingN+3;u<W.standS;u+=6)e.box(t.light,-54.3,-53.9,o-.04,o,u-1.5,u+1.5);const h=[];for(let u=W.deckN+4;u<=96;u+=4)for(const d of[-49,-53.5])h.push({x:d,z:u});{const u=new Sn(.42,.42,.04,20).toNonIndexed().translate(0,.74,0),d=new Sn(.04,.04,.72,8).toNonIndexed().translate(0,.37,0),f=new Sn(.25,.28,.03,16).toNonIndexed().translate(0,.015,0),p=new Pi(Vr([u,d,f]),t.dark,h.length),x=[new re(.4,.04,.4).toNonIndexed().translate(0,.45,0),new re(.04,.42,.4).toNonIndexed().translate(-.19,.68,0),new re(.04,.45,.04).toNonIndexed().translate(.16,.22,.16),new re(.04,.45,.04).toNonIndexed().translate(.16,.22,-.16),new re(.04,.45,.04).toNonIndexed().translate(-.16,.22,.16),new re(.04,.45,.04).toNonIndexed().translate(-.16,.22,-.16)],g=new Pi(Vr(x),t.dark,h.length*3),m=new ce,_=new bn,y=new A(1,1,1);h.forEach((v,P)=>{p.setMatrixAt(P,m.makeTranslation(v.x,J,v.z));for(let E=0;E<3;E++){const S=Math.PI+(E-1)*1.1,C=v.x+Math.cos(S)*.72,b=v.z+Math.sin(S)*.72;_.setFromAxisAngle(new A(0,1,0),-S+Math.PI),g.setMatrixAt(P*3+E,m.compose(new A(C,J,b),_,y))}i.push({x0:v.x-.45,x1:v.x+.45,z0:v.z-.45,z1:v.z+.45,y0:J,y1:J+.78})});for(const v of[p,g])v.castShadow=v.receiveShadow=!0,v.computeBoundingSphere(),s.add(v)}return s.add(...Lw(r)),e.build(s,{name:"interior"}),{group:s,machines:r,screens:n,walls:i}}function Rw(s){const t=[],e=[],n=(l,h,u,d,f,p,x,g=0)=>{const m=new re(u,h,l).toNonIndexed();m.applyMatrix4(new ce().makeRotationZ(g).setPosition(d,f,p)),t.push(m);for(let _=0;_<m.attributes.position.count;_++)e.push(x.r,x.g,x.b)},i=new te(14278114),o=new te(2369582),r=pi.w,a=pi.d;n(r,1.15,a,0,.575,0,i),n(r,.45,a*.55,-a*.22,1.37,0,i),n(r*.96,.05,.42,a*.18,1.3,0,o,-.9),n(r,.1,a+.02,0,1,0,s),n(r*.5,.04,.02,a/2+.005,.86,0,o),n(r*.3,.06,.02,a/2+.005,.74,-r*.2,o),n(r*.12,.08,.02,a/2+.005,.74,r*.25,o),n(r*.4,.06,.02,a/2+.005,.6,0,s),n(r*.3,.14,.06,a/2+.02,.35,0,o),n(r,.1,a,0,.05,0,o),n(r,.12,a*.55,-a*.22,1.66,0,s);const c=Vr(t);return c.setAttribute("color",new fe(e,3)),c}function Cw(s){return wi(256,192,t=>{t.fillStyle=s==="sell"?"#0f3a75":"#0f5a35",t.fillRect(0,0,256,192),t.fillStyle="#fff",t.font="bold 30px sans-serif",t.textAlign="center",t.fillText(s==="sell"?"舟券 発売":"払 戻",128,44),t.font="16px sans-serif",t.fillText(s==="sell"?"マークカードを入れてください":"舟券を入れてください",128,76);for(let e=0;e<6;e++)t.fillStyle=["#f4f4f4","#222","#d8262b","#1f5fbf","#f2c230","#1d9a4a"][e],t.fillRect(20+e*38,100,32,32),t.fillStyle=e===0||e===4?"#111":"#fff",t.font="bold 22px sans-serif",t.fillText(String(e+1),36+e*38,124);t.fillStyle="#ffd34d",t.fillRect(70,148,116,30),t.fillStyle="#111",t.font="bold 18px sans-serif",t.fillText(s==="sell"?"発 行":"支払い",128,169)},!1)}function Pw(s){const t=[],e=new ce;for(const n of["sell","payout"]){const i=s.filter(l=>l.kind===n);if(!i.length)continue;const o=Rw(new te(n==="sell"?2056127:1935946)),r=new Pi(o,new Qt({vertexColors:!0,roughness:.5,metalness:.1}),i.length),a=new je(pi.w*.8,.34);a.rotateY(Math.PI/2),a.rotateZ(Math.PI/2-.9);const c=new Pi(a,new Ri({map:Cw(n),toneMapped:!1}),i.length);i.forEach((l,h)=>{e.makeTranslation(l.pos.x-pi.d/2,J,l.pos.z),r.setMatrixAt(h,e),e.makeTranslation(l.pos.x-pi.d/2+pi.d*.18+.024,J+1.32,l.pos.z),c.setMatrixAt(h,e)}),r.castShadow=r.receiveShadow=!0,r.name=`machines:${n}`;for(const l of[r,c])l.computeBoundingSphere();t.push(r,c)}return t}function Lw(s){let t=2024;const e=()=>(t=t*16807%2147483647)%1e5/1e5,n=[2832981,4868682,9055019,3104570,14209732,2039586,7035450,3891082,11053224,8011626].map(S=>new te(S)),i=[],o=[];for(const S of Mp()){if(!Sf.every(([w,D])=>Math.hypot(S.x-w,S.z-D)>1.5))continue;const C=(S.z-W.wingN)/(W.standS-W.wingN),b=(S.y<J+1?.18:.1)+.18*C;e()<b&&i.push({x:S.x,y:S.y,z:S.z,yaw:0})}const r=(S,C)=>Sf.every(([b,w])=>Math.hypot(S-b,C-w)>4);for(const S of s)e()<.2&&r(S.stand.x,S.stand.z)&&o.push({x:S.stand.x+1.6+e()*1.2,y:J,z:S.pos.z+(e()-.5),yaw:Math.PI+(e()-.5)*.6});for(const S of pe.zs)for(const C of[-1,1])e()<.7&&r(pe.x+C*.85,S)&&o.push({x:pe.x+C*.85,y:J,z:S+(e()-.5)*2.4,yaw:C>0?Math.PI:0});for(let S=0;S<70;S++){const C=W.deckN+10+e()*(W.standS-W.deckN-12),b=it.fence-.5-e()*1.2;r(b,C)&&o.push({x:b,y:J,z:C,yaw:(e()-.5)*.8})}for(let S=0;S<40;S++){const C=-60-e()*22,b=W.concN+4+e()*(W.standS-W.concN-8);!pn.xs.some(D=>Math.abs(D-C)<.9)&&r(C,b)&&o.push({x:C,y:J,z:b,yaw:e()*Math.PI*2})}for(let S=0;S<25;S++){const C=-50-e()*45,b=W.standS+3+e()*24;r(C,b)&&o.push({x:C,y:J,z:b,yaw:e()*Math.PI*2})}const a=S=>{const C=[],b=[];for(const[D,F,k,B,V,$,st]of S){const H=new re(k,F,D).toNonIndexed().translate(B,V,$);C.push(H);for(let ft=0;ft<H.attributes.position.count;ft++)b.push(st,st,st)}const w=Vr(C);return w.setAttribute("color",new fe(b,3)),w},c=a([[.4,.56,.24,-.1,.76,0,1],[.34,.14,.42,.1,.5,0,.35],[.3,.46,.12,.3,.24,0,.3]]),l=a([[.32,.84,.2,0,.42,0,.3],[.42,.6,.26,0,1.14,0,1]]),h=new qs(.11,7,5).toNonIndexed();{const S=h.attributes.position,C=[],b=new te(1907224),w=new te(14266508);for(let D=0;D<S.count;D++){const k=S.getX(D)>.02&&S.getY(D)<.05?w:b;C.push(k.r,k.g,k.b)}h.setAttribute("color",new fe(C,3)),h.deleteAttribute("uv")}const u=new Qt({vertexColors:!0,roughness:.9}),d=new Qt({vertexColors:!0,roughness:.8}),f=[...i.map(S=>({...S,sit:!0})),...o.map(S=>({...S,sit:!1}))],p=new Pi(c,u,Math.max(1,i.length)),x=new Pi(l,u,Math.max(1,o.length)),g=new Pi(h,d,Math.max(1,f.length));p.count=i.length,x.count=o.length,g.count=f.length;const m=new ce,_=new bn,y=new A(1,1,1),v=new A(0,1,0);let P=0,E=0;f.forEach((S,C)=>{const b=S.yaw;_.setFromAxisAngle(v,b);const w=n[Math.floor(e()*n.length)],D=.94+e()*.12,F=new A(D,D,D);if(S.sit){p.setMatrixAt(P,m.compose(new A(S.x,S.y+.06,S.z),_,F)),p.setColorAt(P++,w);const k=new A(-.1,1.17,0).multiplyScalar(D).applyQuaternion(_).add(new A(S.x,S.y+.06,S.z));g.setMatrixAt(C,m.compose(k,_,y))}else x.setMatrixAt(E,m.compose(new A(S.x,S.y,S.z),_,F)),x.setColorAt(E++,w),g.setMatrixAt(C,m.compose(new A(S.x,S.y+1.58*D,S.z),_,y))});for(const S of[p,x,g])S.castShadow=!0,S.computeBoundingSphere(),S.name="crowd";return[p,x,g]}const Iw=.55,d0=.6;class Dw{constructor(){M(this,"floors",[]);M(this,"walls",[])}heightAt(t,e,n){let i=null;for(const o of this.floors){if(t<o.x0||t>o.x1||e<o.z0||e>o.z1)continue;const r=Nw(o,t,e);r>n+Iw||(i===null||r>i)&&(i=r)}return i}move(t,e,n,i){const o=(r,a)=>{let c=t.x+r,l=t.z+a;for(let u=0;u<2;u++)for(const d of this.walls){if(d.y1<t.y+.3||d.y0>t.y+1.8)continue;const f=Math.max(d.x0,Math.min(d.x1,c)),p=Math.max(d.z0,Math.min(d.z1,l)),x=c-f,g=l-p,m=x*x+g*g;if(!(m>=i*i))if(m>1e-10){const _=Math.sqrt(m);c=f+x/_*i,l=p+g/_*i}else{const _=[[d.x0-i-c,0],[d.x1+i-c,0],[0,d.z0-i-l],[0,d.z1+i-l]];_.sort((y,v)=>Math.abs(y[0])+Math.abs(y[1])-Math.abs(v[0])-Math.abs(v[1])),c+=_[0][0],l+=_[0][1]}}const h=this.heightAt(c,l,t.y);if(h===null||h<t.y-d0)return!1;for(const[u,d]of[[i,0],[-i,0],[0,i],[0,-i]]){const f=this.heightAt(c+u,l+d,h);if(f===null||f<h-d0)return!1}return t.x=c,t.z=l,t.y=h,!0};o(e,n)||Math.abs(e)>1e-6&&o(e,0)||Math.abs(n)>1e-6&&o(0,n)}settle(t){const e=this.heightAt(t.x,t.z,t.y+.3);e!==null&&(t.y=e)}}function Nw(s,t,e){if(s.kind==="flat")return s.y;const i=((s.axis==="x"?t:e)-s.a0)/(s.a1-s.a0);if(i<=0)return s.y0;const o=Math.min(s.n,Math.floor(i*s.n)+1);return s.y0+(s.y1-s.y0)*o/s.n}const Mo=(s,t,e,n,i)=>({kind:"flat",x0:Math.min(s,t),x1:Math.max(s,t),z0:Math.min(e,n),z1:Math.max(e,n),y:i}),_n=(s,t,e,n,i,o)=>({x0:Math.min(s,t),x1:Math.max(s,t),z0:Math.min(e,n),z1:Math.max(e,n),y0:i,y1:o});function zw(s=[]){const t=new Dw,e=t.floors,n=t.walls,i=Ot[1]-.5;e.push(Mo(it.deckBack,it.fence,W.deckN,W.standS,J)),e.push(Mo(it.plazaW,it.fence,W.standS,W.plazaS,J)),e.push(Mo(it.concBack,it.deckBack,W.concN,W.standS,J)),e.push(Mo(it.rows2,it.front2,W.wingN,W.seat2S+6,Ot[1])),e.push(Mo(it.upperS,it.front2,W.seat2S,W.seat2S+6,Ot[1])),e.push(Mo(it.upperS,it.front2,W.wingN,W.seat2N,Ot[1])),e.push({kind:"steps",x0:it.upperS,x1:it.rows2,z0:W.seat2N,z1:W.seat2S,axis:"x",a0:it.rows2,a1:it.upperS,y0:Ot[1],y1:Ot[1]+zn.n*zn.rise,n:zn.n});for(const r of vp){e.push({kind:"steps",x0:Yi[0],x1:Yi[1],z0:Math.min(r.zBottom,r.zTop),z1:Math.max(r.zBottom,r.zTop),axis:"z",a0:r.zBottom,a1:r.zTop,y0:J,y1:Ot[1],n:rc});const a=Math.sign(r.zTop-r.zBottom),c=r.zBottom+a*Math.abs(r.zTop-r.zBottom)*(1.4/(Ot[1]-J));n.push(_n(Yi[0],Yi[1],c,r.zTop,J,J+1.4))}let o=W.standS;for(const r of[...Fh].sort((a,c)=>c-a))n.push(_n(it.deckBack-.1,it.deckBack+.1,r+2,o,J,i)),o=r-2;n.push(_n(it.deckBack-.1,it.deckBack+.1,W.concN,o,J,i)),n.push(_n(it.concBack,-82,W.standS-.2,W.standS+.4,J,i)),n.push(_n(-62,it.deckBack,W.standS-.2,W.standS+.4,J,i));for(const r of pn.xs)for(let a=0;a<pn.n;a++){const c=pn.z0+a*pn.dz,l=pn.size/2;n.push(_n(r-l,r+l,c-l,c+l,J,i))}for(let r=0;r<ni.n;r++){const a=ni.z0+r*ni.dz,c=ni.size/2;n.push(_n(ni.x-c,ni.x+c,a-c,a+c,J,i))}for(const r of _p)n.push(_n(it.concBack,it.concBack+pi.d,r.z-pi.w/2,r.z+(r.n-1)*br+pi.w/2,J,J+2));for(const r of pe.zs)n.push(_n(pe.x-pe.w/2,pe.x+pe.w/2,r-pe.len/2,r+pe.len/2,J,J+pe.h));n.push(_n(-69,-64,196,201,J,J+1.1));for(let r=0;r<11;r++){const a=-61-r*2.6;n.push(_n(a-.15,a+.15,W.gateLine-.6,W.gateLine+.6,J,J+1))}n.push(_n(-60,it.fence,W.gateLine-.05,W.gateLine+.05,J,J+1.1)),n.push(_n(it.plazaW,-89.5,W.gateLine-.05,W.gateLine+.05,J,J+1.1));for(const r of[-8,8])for(const a of[-98,-52])n.push(_n(a-.5,a+.5,W.gate+r-.5,W.gate+r+.5,J,J+8));for(let r=W.gate+10;r<W.plazaS;r+=6)for(const a of[-79.7,-70.3])n.push(_n(a-.12,a+.12,r-.12,r+.12,J,J+3.6));return n.push(_n(it.upperS-.3,it.upperS,W.wingN,W.seat2S+6,Ot[1],Ot[2])),n.push(...s),t}const Hl=(s,t,e,n)=>Math.atan2(-(e-s),-(n-t));function Uw(s){const t=Aw(),e=zw(t.walls),n={deck1m:{name:"1マーク前デッキ",x:-47.4,y:J,z:128,yaw:Hl(-47.4,128,0,150),pitch:-.04},machines:{name:"券売機",x:-80,y:J,z:134,yaw:Math.PI/2,pitch:-.08},seats2f:{name:"2F 屋外席",x:-56.5,y:Ot[1]+3,z:140,yaw:Hl(-56.5,140,0,150),pitch:-.18},flat:{name:"ふらっとデッキ",x:-51.3,y:J,z:22,yaw:Hl(-51.3,22,90,0),pitch:.06},gate:{name:"南入場門",x:-75,y:J,z:W.plazaS-3,yaw:0,pitch:.05}};for(const i of Object.values(n)){const o={x:i.x,y:i.y+.5,z:i.z};e.settle(o),i.y=o.y}return{group:t.group,world:e,machines:t.machines,screens:[...s.screens,...t.screens],spots:n}}const Fw=1.3;function kw(s){var ut;const{renderer:t,scene:e,camera:n,sun:i,waves:o}=s;ds!=="drift"&&Xr("drift");for(const tt of["hud","lever","lean-pad","steer-pad","wheel","start","touch","buttons","prop-panel","rotate","banner"])(ut=document.getElementById(tt))==null||ut.setAttribute("hidden","");const r=document.createElement("style");r.textContent=Ow+Tw,document.head.appendChild(r);const a=new Op(o);let c=!1,l=!!Ro;try{localStorage.getItem("boatgame.cpuBrain")==="rule"&&(c=!1),localStorage.getItem("boatgame.cpuControl")==="rule"&&(l=!1)}catch{}a.setPolicy(c?Bp:null),a.setControl(l?Ro:null);const h=new yw(e,a,o),u=Uw(h.course);e.add(u.group),h.water.hide(u.group);const d=h.course.group.getObjectByName("seats");d&&h.water.hide(d);const f=new Xp(a),p=new jp,x=new hw;x.hidden.push(u.group),d&&x.hidden.push(d);for(const tt of h.boats)x.hideSmall(tt.view.root,.35);const g=new qp(f,u.screens,x),m=ot("div","vn-touch"),_=ot("div","vn-hud");_.innerHTML='<div class="vn-race"><b id="vn-rno"></b><span id="vn-clock"></span><span id="vn-lap"></span></div><div class="vn-wallet" id="vn-wallet"></div><ol class="vn-order" id="vn-order"></ol>';const y=ot("div","vn-bar"),v=rt("移動",y),P=rt("メニュー",y),E=ot("div","vn-menu");E.hidden=!0;const S=ot("button","vn-use");S.hidden=!0;const C=ot("div","vn-toast"),b=ot("div","vn-help"),w=matchMedia("(pointer: coarse)").matches;b.textContent=w?"左下を触って動かすと歩く（端まで引くと早歩き）・右側をドラッグで見回す":"WASD / ↑↓ で歩く・← → で向き・Shift で早歩き・ドラッグで見回す（クリックでマウス視点、Esc で解除）",setTimeout(()=>b.classList.add("fade"),6e3);for(const tt of[v,P,S,...E.querySelectorAll("button")])tt.addEventListener("pointerdown",wt=>wt.stopPropagation());const D=new bw(m,u.world),F=u.spots.deck1m;D.place(F.x,F.y,F.z,F.yaw,F.pitch);for(const tt of Object.values(u.spots)){const wt=rt(tt.name,E);wt.addEventListener("pointerdown",U=>U.stopPropagation()),wt.onclick=()=>{D.place(tt.x,tt.y,tt.z,tt.yaw,tt.pitch),E.hidden=!0}}v.onclick=()=>E.hidden=!E.hidden,P.onclick=()=>{location.hash="",location.reload()};const k={session:a,program:f,wallet:p,feed:g,venue:u,avatar:D,render:h,onUseTicketMachine:s.onUseTicketMachine??null,setInputEnabled(tt){D.enabled=tt},nearMachine:()=>B,stop(){t.setAnimationLoop(null),D.dispose(),V==null||V.close();for(const tt of[m,_,y,E,S,C,b,r])tt.remove();g.dispose(),a.dispose(),window.removeEventListener("resize",Mt)}};let B=null;S.addEventListener("pointerdown",tt=>tt.stopPropagation()),S.onclick=()=>{B&&(document.pointerLockElement&&document.exitPointerLock(),k.onUseTicketMachine?k.onUseTicketMachine(B.id,B):$(B))};let V=null;function $(tt){V==null||V.close(),k.setInputEnabled(!1),S.hidden=!0;const wt=()=>{V=null,k.setInputEnabled(!0),B=null},U=tt.kind==="sell"?Zp({sale:f.sale,wallet:p,racers:f.racers,now:f.now,onClose:wt}):Kp({sales:()=>f.history,pending:()=>f.sale.state==="settled"?[]:[f.sale],wallet:p,machineId:tt.id,onClose:wt});V={close:()=>U.close(),spot:tt}}let st=0;function H(tt,wt=2.5){C.textContent=tt,C.classList.add("show"),clearTimeout(st),st=window.setTimeout(()=>C.classList.remove("show"),wt*1e3)}const ft=new A;function vt(){if(!D.enabled||Math.abs(D.pos.y-J)>.3)return null;n.getWorldDirection(ft);let tt=null,wt=Fw;for(const U of u.machines){const Et=Math.hypot(D.pos.x-U.stand.x,D.pos.z-U.stand.z);if(Et>=wt)continue;const Wt=Math.hypot(ft.x,ft.z)||1;-ft.x/Wt*U.normal.x+-ft.z/Wt*U.normal.z<.2||(tt=U,wt=Et)}return tt}function Mt(){n.fov=window.innerWidth<window.innerHeight?72:55,n.near=.08,n.far=3e3,n.updateProjectionMatrix(),h.resize(window.innerHeight,n.fov,t.getPixelRatio())}window.addEventListener("resize",Mt),Mt(),f.on(tt=>{if(tt.type==="race"){if(h.clear(),g.cut(),(V==null?void 0:V.spot.kind)==="sell"){const wt=V.spot;V.close(),$(wt)}H(`${f.title} 発売開始`)}else if(tt.type==="phase"&&tt.phase==="closed")H(`第${f.raceNo}R 発売締切`);else if(tt.type==="result"){const wt=f.sale.unclaimed(),U=f.sale.tickets.length?wt>0?`　払戻 ${wt.toLocaleString()} ${cn}（払戻機へ）`:"　はずれ":"";H(`第${f.raceNo}R 確定 ${f.orderText()}${tt.settlement.result.move?"　"+tt.settlement.result.move:""}${U}`,6)}});const at=new vu,xt=_.querySelector("#vn-clock"),K=_.querySelector("#vn-lap"),L=_.querySelector("#vn-order"),N=_.querySelector("#vn-rno"),O=_.querySelector("#vn-wallet");let X=0;return t.setAnimationLoop(()=>{var U,Et;const tt=Math.min(at.getDelta(),.05);f.update(tt),D.update(tt),D.apply(n),n.updateMatrixWorld(),h.update(tt,n),g.update(tt,t,e,n,h.water),h.aimSun(i,D.pos,32),(U=e.userData.sky)==null||U.position.copy(n.position);const wt=vt();if(wt!==B&&!V&&(B=wt,S.hidden=!wt,wt&&(S.textContent=wt.kind==="sell"?`券売機を使う（${wt.id}）`:`払戻機を使う（${wt.id}）${f.unclaimed()>0?" 払戻あり":""}`)),X-=tt,X<=0){X=.2,N.textContent=f.statusText();const Wt=a.clock,$t=f.phase==="race"||f.phase==="judging",Bt=((Et=a.prestart)==null?void 0:Et.pitOut)??-1/0;xt.textContent=!$t||Wt<Bt?"":Wt<0?`スタートまで ${(-Wt).toFixed(0)}秒`:`${Math.floor(Wt/60)}:${String(Math.floor(Wt%60)).padStart(2,"0")}`;const oe=a.order(),Ut=oe[0];K.textContent=!$t||Wt<0?"":Ut.cpu.finished?"ゴール":`${Math.min($o,Math.max(1,Ut.cpu.laps+1))}周目`;const I=f.pendingTickets().length,T=f.unclaimed();O.textContent=`残高 ${p.free.toLocaleString()} ${cn}${I?`　舟券 ${I}枚`:""}${T?`　払戻 ${T.toLocaleString()}`:""}`,L.innerHTML=oe.map(j=>{const pt=j.lane===1||j.lane===5?"#111":"#fff",gt=j.cpu.capsized?"<em>転</em>":j.cpu.flying?"<em>F</em>":"";return`<li style="background:${Ic[j.lane-1]};color:${pt}">${j.lane}${gt}</li>`}).join("")}h.render(t,e,n)}),k;function ot(tt,wt){const U=document.createElement(tt);return U.className=wt,document.body.appendChild(U),U}function rt(tt,wt){const U=document.createElement("button");return U.textContent=tt,wt.appendChild(U),U}}const Ow=`
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
`,zs=new URLSearchParams(location.search),Bw=zs.get("view")==="model",Ze=new o2({antialias:!0});Ze.setPixelRatio(Math.min(window.devicePixelRatio,matchMedia("(pointer: coarse)").matches?1.5:2));Ze.toneMapping=M0;Ze.toneMappingExposure=1;Ze.shadowMap.enabled=!0;Ze.shadowMap.type=v0;document.getElementById("app").appendChild(Ze.domElement);const Le=new r2;Le.fog=new hu(Tu,250,1500);const ye=new Fn(60,1,.1,3e3);{const s=new zt(new qs(2e3,32,16),new si({side:Ln,depthWrite:!1,fog:!1,uniforms:{uTop:{value:fp},uHorizon:{value:Tu},uSun:{value:$r}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 uTop; uniform vec3 uHorizon; uniform vec3 uSun; varying vec3 vDir;
        void main(){ float h = clamp(vDir.y, 0.0, 1.0); vec3 c = mix(uHorizon, uTop, pow(h, 0.45));
          c += vec3(1.0, 0.93, 0.8) * pow(max(dot(normalize(vDir), uSun), 0.0), 64.0) * 0.6;
          gl_FragColor = vec4(c, 1.0);
          #include <colorspace_fragment>
        }`}));s.renderOrder=-1,Le.add(s),Le.userData.sky=s}Le.add(new H2(14478591,2905440,1.1));const mn=new X2(16774112,2.4);mn.castShadow=!0;mn.shadow.mapSize.set(1024,1024);mn.shadow.camera.left=mn.shadow.camera.bottom=-4;mn.shadow.camera.right=mn.shadow.camera.top=4;mn.shadow.camera.near=1;mn.shadow.camera.far=40;mn.shadow.bias=-5e-4;Le.add(mn,mn.target);for(const s of Le.children)s.userData.keep=!0;const bi=new op,zr=bu(3);Le.add(zr.root);function Qp(){const s=window.innerWidth,t=window.innerHeight;Ze.setSize(s,t),ye.aspect=s/t,ye.fov=s<t?75:60,ye.updateProjectionMatrix()}window.addEventListener("resize",Qp);Qp();Bw?Vw():location.hash==="#race"?p0():location.hash.startsWith("#match")?tm(Number(location.hash.slice(6)),new yp(document.getElementById("touch"))):location.hash==="#venue"?f0():(Hw(),document.getElementById("b-watch").onclick=()=>{location.hash="race",p0()},document.getElementById("b-venue").onclick=()=>{location.hash="venue",f0()});function f0(){Ze.setAnimationLoop(null);for(const s of[...Le.children])s.userData.keep||Le.remove(s);kw({renderer:Ze,scene:Le,camera:ye,sun:mn,waves:bi})}function p0(){Ze.setAnimationLoop(null);for(const s of[...Le.children])s.userData.keep||Le.remove(s);Jp({renderer:Ze,scene:Le,camera:ye,sun:mn,waves:bi})}function tm(s,t){const e=s>=1&&s<=6?s:1+Math.floor(Math.random()*6);Ze.setAnimationLoop(null);for(const n of[...Le.children])n.userData.keep||Le.remove(n);Jp({renderer:Ze,scene:Le,camera:ye,sun:mn,waves:bi,player:{lane:e,controls:t}})}function Vw(){document.body.classList.add("model-view");for(const o of["hud","buttons","touch","start","lean-pad","lever","wheel"])document.getElementById(o).hidden=!0;const s=new zt(new Go(8,48),new Qt({color:6262691,roughness:.9}));s.rotation.x=-Math.PI/2,s.position.y=-.7,s.receiveShadow=!0,Le.add(s);const t=new $2(6,12,16777215,10470356);t.position.y=-.69,Le.add(t);const e=new j2(ye,Ze.domElement);e.target.set(0,.35,-.2);const n={persp:[3.2,2,3.6],side:[5.5,.4,-.2],front:[0,.5,5.5],back:[0,.8,-5.5],top:[.001,6,-.2],rear34:[-3.2,1.6,-3.8],under:[2.6,-1.6,1.8]};zs.get("cam")==="under"&&(s.visible=t.visible=!1);const i=n[zs.get("cam")??"persp"]??n.persp;ye.position.set(...i),zs.get("ortho")!==null&&(ye.fov=20,ye.position.multiplyScalar(3),ye.updateProjectionMatrix()),ye.position.multiplyScalar(Number(zs.get("d")??1)),e.update(),mn.position.set(4,8,6),zr.motor.rotation.y=Number(zs.get("steer")??0),zr.tilt.rotation.x=(Number(zs.get("tilt")??_c)-_c)*Math.PI/180,zr.tilt.position.y=Wo.y+$e.motorHeight,Ze.setAnimationLoop(()=>{e.update(),Ze.render(Le,ye)})}function Hw(){const s=new Dp,t=new Ip(bi,s.render),e=new xs(new Nu(bi,s.felt),t),n=new Float32Array(3),i=new Au(bi),o=Ru();Le.add(i.mesh,o);const r=new Pu(t);Le.add(r.group),i.hideFromRefraction(...r.aboveWater),r.simplifySeats();const a=new Lu(t);Le.add(a.mesh);const c=new Iu(t);Le.add(c.points),i.hide(o,a.mesh,c.points);const l=document.getElementById("wfx"),h=()=>l.textContent=i.passes?"オン":"オフ";h(),l.onclick=()=>{i.passes=!i.passes;try{localStorage.setItem(pp,i.passes?"1":"0")}catch{}h()};const u=document.getElementById("tphys"),d={v1:"従来",v2:"標準",drift:"ドリフト"},f=()=>u.textContent=d[ds];f(),u.onclick=()=>{Xr(ds==="v1"?"v2":ds==="v2"?"drift":"v1");try{localStorage.setItem(hp,ds)}catch{}f()};const p=()=>c.resize(window.innerHeight,ye.fov,Ze.getPixelRatio());p(),window.addEventListener("resize",p);const x=new yp(document.getElementById("touch")),g=document.getElementById("banner");function m(lt){g.textContent=lt,g.classList.toggle("show",!!lt),g.classList.toggle("small",lt.length>6)}let _=0;const y={x:-18,z:-100,heading:0},v=()=>{s.reset(y.x,y.z),e.reset(y.x,y.z,y.heading,_),a.clear(),c.clear(),P=0,m("")};let P=0;v();const E=["追従","低い追従","真横","上から","中継"];let S=0;const C=document.getElementById("b-cam");C.onclick=()=>{S=(S+1)%E.length,C.textContent=`視点:${E[S]}`},C.textContent=`視点:${E[S]}`;const b=[1,3,5,10,0];let w=1;const D=document.getElementById("b-wave"),F=()=>D.textContent=bi.heightCm>0?`波高 ${bi.heightCm}cm`:"波なし";bi.setHeightCm(b[w]),F(),D.onclick=()=>{w=(w+1)%b.length,bi.setHeightCm(b[w]),F()},document.getElementById("b-reset").onclick=()=>{x.lever=0,v()};const k=document.getElementById("prop-panel");document.getElementById("b-prop").onclick=()=>k.hidden=!k.hidden,document.getElementById("pp-close").onclick=()=>k.hidden=!0;const B=[{key:"diameter",id:"diameter",scale:100,fmt:lt=>`${lt.toFixed(1)} cm`},{key:"pitch",id:"pitch",scale:100,fmt:lt=>`${lt.toFixed(1)} cm`},{key:"ear",id:"ear",scale:1,fmt:lt=>lt.toFixed(2)},{key:"cup",id:"cup",scale:1,fmt:lt=>`${lt.toFixed(2)} mm`}];try{Object.assign(e.prop,JSON.parse(localStorage.getItem(kh)??"{}"))}catch{}const V=document.getElementById("pp-note");function $(){for(const lt of B){const Lt=e.prop[lt.key]*lt.scale;document.getElementById(`s-${lt.id}`).value=String(Lt),document.getElementById(`o-${lt.id}`).textContent=lt.fmt(Lt)}V.textContent=`ピッチ比 ${(e.prop.pitch/e.prop.diameter).toFixed(2)}　${e.prop.blades}枚羽根`;try{localStorage.setItem(kh,JSON.stringify(e.prop))}catch{}}for(const lt of B)document.getElementById(`s-${lt.id}`).addEventListener("input",Lt=>{e.prop[lt.key]=Number(Lt.target.value)/lt.scale,$()});document.getElementById("pp-reset").onclick=()=>{Object.assign(e.prop,ap),$()},$();let st=0;try{const lt=Number(localStorage.getItem(Oh));Sr.includes(lt)&&(st=lt)}catch{}e.tilt=st;const H=document.getElementById("o-tilt"),ft=document.getElementById("tilt-note"),vt=ft.textContent??"";function Mt(){H.textContent=`${st.toFixed(1)}°`;const lt=st!==e.tilt;ft.textContent=lt?`走行中は変えられません。止まると ${st.toFixed(1)}° になります`:vt,ft.classList.toggle("pending",lt)}function at(lt){const Lt=Sr.indexOf(st);st=Sr[Math.max(0,Math.min(Sr.length-1,Lt+lt))];try{localStorage.setItem(Oh,String(st))}catch{}Mt()}const xt="boatgame.motorHeight",K=.05;let L=$e.motorHeight;try{const lt=Number(localStorage.getItem(xt));localStorage.getItem(xt)!==null&&lt>=0&&lt<=.1&&(L=lt)}catch{}$e.motorHeight=L;const N=document.getElementById("o-mh"),O=document.getElementById("mh-note"),X=O.textContent??"";function ot(){const lt=Math.round((L-K)*100);N.textContent=lt===0?"±0 cm":`${lt>0?"+":""}${lt} cm`;const Lt=Math.abs(L-$e.motorHeight)>1e-4;O.textContent=Lt?"走行中は変えられません。止まると反映されます":X,O.classList.toggle("pending",Lt)}function rt(lt){L=Math.max(0,Math.min(.1,Math.round((L+lt*.01)*100)/100));try{localStorage.setItem(xt,String(L))}catch{}ot()}document.getElementById("mh-dn").onclick=()=>rt(-1),document.getElementById("mh-up").onclick=()=>rt(1),ot(),document.getElementById("tilt-dn").onclick=()=>at(-1),document.getElementById("tilt-up").onclick=()=>at(1),Mt();const ut=document.getElementById("b-center");ut.onclick=()=>x.recenter();for(const lt of document.querySelectorAll("button"))lt.addEventListener("pointerdown",Lt=>Lt.stopPropagation());let tt=!1;const wt=document.getElementById("start"),U=document.getElementById("b-start");U.onclick=async()=>{U.disabled=!0,U.textContent="準備中…",x.tiltActive=await x.enableTilt(),ut.hidden=!x.tiltActive,_t(),wt.hidden=!0,tt=!0,v(),x.tiltActive||m(x.swap?"傾きが使えないので、中央のパッドで体重":"傾きが使えないので、下のスライダーでハンドル"),x.tiltActive||setTimeout(()=>m(""),2500)};let Et=0;const $t=[...document.getElementById("lane-pick").querySelectorAll("button")];for(const lt of $t)lt.onclick=()=>{Et=Number(lt.dataset.lane);for(const Lt of $t)Lt.classList.toggle("on",Lt===lt)};const Bt=document.getElementById("b-match");Bt.onclick=async()=>{Bt.disabled=!0,Bt.textContent="準備中…",x.tiltActive=await x.enableTilt(),tm(Et,x)};const oe=document.getElementById("speed"),Ut=document.getElementById("rpm"),I=document.getElementById("m-rpm"),T=document.getElementById("tach"),j=document.getElementById("chip-cav"),pt=document.getElementById("lean-pad"),gt=document.getElementById("chip-vent"),dt=document.getElementById("meta"),Ft="boatgame.ctrlSwap",Tt=["std","swap","wheel"],At={std:"標準",swap:"入れ替え",wheel:"回すハンドル"};try{const lt=localStorage.getItem(Ft);x.layout=lt==="1"?"swap":lt==="wheel"?"wheel":"std"}catch{}const Jt=document.getElementById("ctrlswap");function _t(){Sp(x),Jt.textContent=At[x.layout]}_t(),Jt.onclick=()=>{x.layout=Tt[(Tt.indexOf(x.layout)+1)%Tt.length];try{localStorage.setItem(Ft,x.layout==="swap"?"1":x.layout==="wheel"?"wheel":"0")}catch{}_t()};const It=new A,Gt=new A(0,0,1),mt=new A,Q=new A,yt=new A,Nt=new A,Xt=new A,z=new A,ht=new A(0,0,-1.75),Z=new A,ct=new vu,St=1/240;let G=0,bt=!0;Ze.setAnimationLoop(()=>{const lt=Math.min(ct.getDelta(),.05);x.update(lt);const Lt=tt?x.input:{steer:0,throttle:0,leanX:0,leanZ:0};G+=lt;let Vt=0;for(;G>=St&&Vt<16;)e.step(St,P>0?{steer:0,throttle:0,leanX:0,leanZ:0}:Lt,_),_+=St,G-=St,Vt++;Vt>=16&&(G=0),Lp([e]),bp(e),e.forward(yt),s.update(lt,e.origin.x,e.origin.z,yt.x,yt.z,e.pressure,e.spray,e.wakeMom)&&(i.updateWake(s.render),s.render.waveForce(e.comW.x,e.comW.z,n),e.extForce.set(n[0],0,n[1]),e.extTorque.set(0,n[2],0)),Xt.set(0,1,0).applyQuaternion(e.quat),Xt.y<.15&&(P===0&&m("転覆"),P+=lt,P>2.5&&v());const ae=zr;e.tilt!==st&&e.speed()<1&&(e.tilt=st,Mt()),Math.abs($e.motorHeight-L)>1e-4&&e.speed()<1&&($e.motorHeight=L,ot()),Eu(ae,e,lt),Nt.set(-1,0,0).applyQuaternion(e.quat),e.toWorld(ht,Z);const Te=e.speed(),Ie=1+.8*Math.max(e.propState.cav,e.propState.vent);e.propImmersion>.2&&Te>1&&a.add(_,Z,Nt,Math.min(1,Te/8)*Ie),a.update(_),i.update(_,ye.position),r.update(_),r.setClock(_),c.update(lt,_,e),z.set(yt.x,0,yt.z).normalize();const Ue=Math.hypot(e.vel.x,e.vel.z),Zt=Math.min(.7,Math.max(0,(Ue-2)/4)*.7);mt.copy(z).multiplyScalar(1-Zt),Ue>.1&&mt.add(new A(e.vel.x/Ue,0,e.vel.z/Ue).multiplyScalar(Zt)),mt.normalize(),bt?Gt.copy(mt):Gt.lerp(mt,1-Math.exp(-lt*3)).normalize(),It.copy(e.origin).add(new A(0,.6,0));let Be=1-Math.exp(-lt*4),xe=window.innerWidth<window.innerHeight?75:60;if(S===0)Q.copy(It).addScaledVector(Gt,-7).add(new A(0,2.6,0));else if(S===1)Q.copy(It).addScaledVector(Gt,-4.2).add(new A(0,.9,0));else if(S===2)Q.copy(It).add(new A(-Gt.z,0,Gt.x).multiplyScalar(-7)).add(new A(0,1.2,0));else if(S===3)Q.copy(It).add(new A(0,22,0)).addScaledVector(Gt,-6),Be=1-Math.exp(-lt*3);else{Q.set(-55,31,Math.max(-150,Math.min(150,e.origin.z*.75))),Be=1-Math.exp(-lt*2);const xi=ye.position.distanceTo(It);xe=Math.max(5,Math.min(50,2*Math.atan(5.5/Math.max(1,xi))*180/Math.PI))}Math.abs(ye.fov-xe)>.01&&(ye.fov+=(xe-ye.fov)*(1-Math.exp(-lt*4)),ye.updateProjectionMatrix(),p()),bt?(ye.position.copy(Q),bt=!1):ye.position.lerp(Q,Be);const Rt=t.height(ye.position.x,ye.position.z,_)+.4;ye.position.y<Rt&&(ye.position.y=Rt),S===4?ye.lookAt(It):ye.lookAt(z.copy(Gt).multiplyScalar(S===3?4:2.5).add(It)),mn.position.copy(e.origin).addScaledVector($r,20),mn.target.position.copy(e.origin),Le.userData.sky.position.copy(ye.position),oe.textContent=(Te*3.6).toFixed(0);const ee=e.rpm;Ut.textContent=(Math.round(ee/50)*50).toFixed(0),I.style.width=`${Math.min(100,ee/7500*100)}%`,T.classList.toggle("limit",ee>Xi.limitRpm-150);const me=e.propState.cav,Ce=e.propState.vent;j.textContent=`キャビ ${Math.round(me*100)}%`,gt.textContent=`吸い込み ${Math.round(Ce*100)}%`,j.classList.toggle("on",me>.08),gt.classList.toggle("on",Ce>.08);const Fe=e.attitude();dt.textContent=`トリム ${Fe.trim.toFixed(1)}°　傾き ${Fe.heel.toFixed(1)}°　チルト ${e.tilt.toFixed(1)}°`,wp(x,Lt.steer);const _e=e.legForce,gn=Math.min(1,Math.hypot(_e.x,_e.y-Li*9.81,_e.z)/(Li*9.81*2));pt.style.setProperty("--kick",gn.toFixed(2)),i.renderPasses(Ze,Le,ye),Ze.render(Le,ye)})}
