var L0=Object.defineProperty;var D0=(i,t,e)=>t in i?L0(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var O=(i,t,e)=>D0(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wc="170",ys={ROTATE:0,DOLLY:1,PAN:2},ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},I0=0,xl=1,U0=2,_u=1,xu=2,jn=3,Ei=0,Ze=1,Te=2,Mi=0,Ss=1,vl=2,Ml=3,yl=4,N0=5,Fi=100,F0=101,O0=102,z0=103,B0=104,k0=200,V0=201,H0=202,G0=203,Wa=204,Xa=205,W0=206,X0=207,q0=208,Y0=209,Z0=210,K0=211,$0=212,j0=213,J0=214,qa=0,Ya=1,Za=2,Cs=3,Ka=4,$a=5,ja=6,Ja=7,vu=0,Q0=1,td=2,yi=0,ed=1,nd=2,id=3,Mu=4,sd=5,rd=6,od=7,yu=300,Ps=301,Ls=302,Qa=303,tc=304,Go=306,ec=1e3,zi=1001,nc=1002,pn=1003,ad=1004,Cr=1005,vn=1006,jo=1007,Bi=1008,ai=1009,Su=1010,Eu=1011,_r=1012,Xc=1013,Vi=1014,On=1015,si=1016,qc=1017,Yc=1018,Ds=1020,Tu=35902,wu=1021,bu=1022,Rn=1023,Au=1024,Ru=1025,Es=1026,Is=1027,xr=1028,Zc=1029,Cu=1030,Kc=1031,$c=1033,So=33776,Eo=33777,To=33778,wo=33779,ic=35840,sc=35841,rc=35842,oc=35843,ac=36196,cc=37492,lc=37496,hc=37808,uc=37809,dc=37810,fc=37811,pc=37812,mc=37813,gc=37814,_c=37815,xc=37816,vc=37817,Mc=37818,yc=37819,Sc=37820,Ec=37821,bo=36492,Tc=36494,wc=36495,Pu=36283,bc=36284,Ac=36285,Rc=36286,cd=3200,ld=3201,Lu=0,hd=1,vi="",Oe="srgb",zs="srgb-linear",Wo="linear",ue="srgb",Ki=7680,Sl=519,ud=512,dd=513,fd=514,Du=515,pd=516,md=517,gd=518,_d=519,El=35044,hr=35048,Tl="300 es",ri=2e3,Lo=2001;class Gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ao=Math.PI/180,Cc=180/Math.PI;function Bs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Ae(i,t,e){return Math.max(t,Math.min(e,i))}function xd(i,t){return(i%t+t)%t}function Jo(i,t,e){return(1-e)*i+e*t}function Ys(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const vd={DEG2RAD:Ao};class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,s,r,o,a,c,l){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],v=s[1],S=s[4],x=s[7],L=s[2],R=s[5],A=s[8];return r[0]=o*_+a*v+c*L,r[3]=o*m+a*S+c*R,r[6]=o*p+a*x+c*A,r[1]=l*_+h*v+u*L,r[4]=l*m+h*S+u*R,r[7]=l*p+h*x+u*A,r[2]=d*_+f*v+g*L,r[5]=d*m+f*S+g*R,r[8]=d*p+f*x+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Qo.makeScale(t,e)),this}rotate(t){return this.premultiply(Qo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qo=new jt;function Iu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Do(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Md(){const i=Do("canvas");return i.style.display="block",i}const wl={};function rr(i){i in wl||(wl[i]=!0,console.warn(i))}function yd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Sd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ed(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qt={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(i.r=oi(i.r),i.g=oi(i.g),i.b=oi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(i.r=Ts(i.r),i.g=Ts(i.g),i.b=Ts(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vi?Wo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const bl=[.64,.33,.3,.6,.15,.06],Al=[.2126,.7152,.0722],Rl=[.3127,.329],Cl=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pl=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[zs]:{primaries:bl,whitePoint:Rl,transfer:Wo,toXYZ:Cl,fromXYZ:Pl,luminanceCoefficients:Al,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:bl,whitePoint:Rl,transfer:ue,toXYZ:Cl,fromXYZ:Pl,luminanceCoefficients:Al,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}});let $i;class Td{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$i===void 0&&($i=Do("canvas")),$i.width=t.width,$i.height=t.height;const n=$i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Do("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=oi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(oi(e[n]/255)*255):e[n]=oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wd=0;class Uu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Bs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ta(s[o].image)):r.push(ta(s[o]))}else r=ta(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ta(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Td.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bd=0;class He extends Gi{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=zi,s=zi,r=vn,o=Bi,a=Rn,c=ai,l=He.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Bs(),this.name="",this.source=new Uu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ec:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case nc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ec:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case nc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=yu;He.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,x=(f+1)/2,L=(p+1)/2,R=(h+d)/4,A=(u+_)/4,P=(g+m)/4;return S>x&&S>L?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=R/n,r=A/n):x>L?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=R/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=P/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ad extends Gi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new He(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Uu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends Ad{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Nu extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rd extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,v=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const L=Math.sqrt(S),R=Math.atan2(L,p*v);m=Math.sin(m*R)/L,a=Math.sin(a*R)/L}const x=a*v;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,n=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ll.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ll.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ea.copy(this).projectOnVector(t),this.sub(ea)}reflect(t){return this.sub(ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ea=new w,Ll=new kn;class Wi{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)),Pr.applyMatrix4(t.matrixWorld),this.union(Pr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),Lr.subVectors(this.max,Zs),ji.subVectors(t.a,Zs),Ji.subVectors(t.b,Zs),Qi.subVectors(t.c,Zs),di.subVectors(Ji,ji),fi.subVectors(Qi,Ji),wi.subVectors(ji,Qi);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-wi.z,wi.y,di.z,0,-di.x,fi.z,0,-fi.x,wi.z,0,-wi.x,-di.y,di.x,0,-fi.y,fi.x,0,-wi.y,wi.x,0];return!na(e,ji,Ji,Qi,Lr)||(e=[1,0,0,0,1,0,0,0,1],!na(e,ji,Ji,Qi,Lr))?!1:(Dr.crossVectors(di,fi),e=[Dr.x,Dr.y,Dr.z],na(e,ji,Ji,Qi,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Xn=[new w,new w,new w,new w,new w,new w,new w,new w],En=new w,Pr=new Wi,ji=new w,Ji=new w,Qi=new w,di=new w,fi=new w,wi=new w,Zs=new w,Lr=new w,Dr=new w,bi=new w;function na(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){bi.fromArray(i,r);const a=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),c=t.dot(bi),l=e.dot(bi),h=n.dot(bi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Cd=new Wi,Ks=new w,ia=new w;class Xi{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Cd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);const e=Ks.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ks,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(ia)),this.expandByPoint(Ks.copy(t.center).sub(ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new w,sa=new w,Ir=new w,pi=new w,ra=new w,Ur=new w,oa=new w;class Xo{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){sa.copy(t).add(e).multiplyScalar(.5),Ir.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(sa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ir),a=pi.dot(this.direction),c=-pi.dot(Ir),l=pi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(sa).addScaledVector(Ir,d),f}intersectSphere(t,e){qn.subVectors(t.center,this.origin);const n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,s,r){ra.subVectors(e,t),Ur.subVectors(n,t),oa.crossVectors(ra,Ur);let o=this.direction.dot(oa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,t);const c=a*this.direction.dot(Ur.crossVectors(pi,Ur));if(c<0)return null;const l=a*this.direction.dot(ra.cross(pi));if(l<0||c+l>o)return null;const h=-a*pi.dot(oa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ts.setFromMatrixColumn(t,0).length(),r=1/ts.setFromMatrixColumn(t,1).length(),o=1/ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pd,t,Ld)}lookAt(t,e,n){const s=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),mi.crossVectors(n,sn),mi.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),mi.crossVectors(n,sn)),mi.normalize(),Nr.crossVectors(sn,mi),s[0]=mi.x,s[4]=Nr.x,s[8]=sn.x,s[1]=mi.y,s[5]=Nr.y,s[9]=sn.y,s[2]=mi.z,s[6]=Nr.z,s[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],S=n[7],x=n[11],L=n[15],R=s[0],A=s[4],P=s[8],E=s[12],M=s[1],C=s[5],N=s[9],F=s[13],W=s[2],X=s[6],Y=s[10],tt=s[14],Z=s[3],at=s[7],ct=s[11],Et=s[15];return r[0]=o*R+a*M+c*W+l*Z,r[4]=o*A+a*C+c*X+l*at,r[8]=o*P+a*N+c*Y+l*ct,r[12]=o*E+a*F+c*tt+l*Et,r[1]=h*R+u*M+d*W+f*Z,r[5]=h*A+u*C+d*X+f*at,r[9]=h*P+u*N+d*Y+f*ct,r[13]=h*E+u*F+d*tt+f*Et,r[2]=g*R+_*M+m*W+p*Z,r[6]=g*A+_*C+m*X+p*at,r[10]=g*P+_*N+m*Y+p*ct,r[14]=g*E+_*F+m*tt+p*Et,r[3]=v*R+S*M+x*W+L*Z,r[7]=v*A+S*C+x*X+L*at,r[11]=v*P+S*N+x*Y+L*ct,r[15]=v*E+S*F+x*tt+L*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,S=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,x=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,L=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,R=e*v+n*S+s*x+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=v*A,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*A,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*A,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*A,t[4]=S*A,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*A,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*A,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*A,t[8]=x*A,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*A,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*A,t[12]=L*A,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*A,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*A,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,v=c*l,S=c*h,x=c*u,L=n.x,R=n.y,A=n.z;return s[0]=(1-(_+p))*L,s[1]=(f+x)*L,s[2]=(g-S)*L,s[3]=0,s[4]=(f-x)*R,s[5]=(1-(d+p))*R,s[6]=(m+v)*R,s[7]=0,s[8]=(g+S)*A,s[9]=(m-v)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ts.set(s[0],s[1],s[2]).length();const o=ts.set(s[4],s[5],s[6]).length(),a=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Tn.copy(this);const l=1/r,h=1/o,u=1/a;return Tn.elements[0]*=l,Tn.elements[1]*=l,Tn.elements[2]*=l,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,e.setFromRotationMatrix(Tn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ri){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===ri)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Lo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ri){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let g,_;if(a===ri)g=(o+r)*u,_=-2*u;else if(a===Lo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ts=new w,Tn=new ce,Pd=new w(0,0,0),Ld=new w(1,1,1),mi=new w,Nr=new w,sn=new w,Dl=new ce,Il=new kn;class Vn{constructor(t=0,e=0,n=0,s=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Il.setFromEuler(this),this.setFromQuaternion(Il,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class Fu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Dd=0;const Ul=new w,es=new kn,Yn=new ce,Fr=new w,$s=new w,Id=new w,Ud=new kn,Nl=new w(1,0,0),Fl=new w(0,1,0),Ol=new w(0,0,1),zl={type:"added"},Nd={type:"removed"},ns={type:"childadded",child:null},aa={type:"childremoved",child:null};class Re extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new w,e=new Vn,n=new kn,s=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new jt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(Nl,t)}rotateY(t){return this.rotateOnAxis(Fl,t)}rotateZ(t){return this.rotateOnAxis(Ol,t)}translateOnAxis(t,e){return Ul.copy(t).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nl,t)}translateY(t){return this.translateOnAxis(Fl,t)}translateZ(t){return this.translateOnAxis(Ol,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fr.copy(t):Fr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt($s,Fr,this.up):Yn.lookAt(Fr,$s,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Yn),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zl),ns.child=t,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nd),aa.child=t,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zl),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,Id),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Ud,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Re.DEFAULT_UP=new w(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new w,Zn=new w,ca=new w,Kn=new w,is=new w,ss=new w,Bl=new w,la=new w,ha=new w,ua=new w,da=new ve,fa=new ve,pa=new ve;class An{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),Zn.subVectors(n,e),ca.subVectors(t,e);const o=wn.dot(wn),a=wn.dot(Zn),c=wn.dot(ca),l=Zn.dot(Zn),h=Zn.dot(ca),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Kn.x),c.addScaledVector(o,Kn.y),c.addScaledVector(a,Kn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return da.setScalar(0),fa.setScalar(0),pa.setScalar(0),da.fromBufferAttribute(t,e),fa.fromBufferAttribute(t,n),pa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(da,r.x),o.addScaledVector(fa,r.y),o.addScaledVector(pa,r.z),o}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),Zn.subVectors(t,e),wn.cross(Zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),wn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return An.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;is.subVectors(s,n),ss.subVectors(r,n),la.subVectors(t,n);const c=is.dot(la),l=ss.dot(la);if(c<=0&&l<=0)return e.copy(n);ha.subVectors(t,s);const h=is.dot(ha),u=ss.dot(ha);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(is,o);ua.subVectors(t,r);const f=is.dot(ua),g=ss.dot(ua);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ss,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Bl.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Bl,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(is,o).addScaledVector(ss,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Or={h:0,s:0,l:0};function ma(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=xd(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ma(o,r,t+1/3),this.g=ma(o,r,t),this.b=ma(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=Ou[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return Qt.fromWorkingColorSpace(Be.copy(this),t),Math.round(Ae(Be.r*255,0,255))*65536+Math.round(Ae(Be.g*255,0,255))*256+Math.round(Ae(Be.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,s=Be.g,r=Be.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Oe){Qt.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,s=Be.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(Or);const n=Jo(gi.h,Or.h,e),s=Jo(gi.s,Or.s,e),r=Jo(gi.l,Or.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Yt;Yt.NAMES=Ou;let Fd=0;class qi extends Gi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Bs(),this.name="",this.blending=Ss,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Xa&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jc extends qi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ni=Od();function Od(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function zd(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Ae(i,-65504,65504),ni.floatView[0]=i;const t=ni.uint32View[0],e=t>>23&511;return ni.baseTable[e]+((t&8388607)>>ni.shiftTable[e])}function Bd(i){const t=i>>10;return ni.uint32View[0]=ni.mantissaTable[ni.offsetTable[t]+(i&1023)]+ni.exponentTable[t],ni.floatView[0]}const kd={toHalfFloat:zd,fromHalfFloat:Bd},Ee=new w,zr=new Tt;class Ge{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=El,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ys(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ys(e,this.array)),e}setX(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ys(e,this.array)),e}setY(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ys(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ys(e,this.array)),e}setW(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),s=Je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==El&&(t.usage=this.usage),t}}class zu extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Bu extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vd=0;const gn=new ce,ga=new Re,rs=new w,rn=new Wi,js=new Wi,Le=new w;class ye extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Iu(t)?Bu:zu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return ga.lookAt(t),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(rn.min,js.min),rn.expandByPoint(Le),Le.addVectors(rn.max,js.max),rn.expandByPoint(Le)):(rn.expandByPoint(js.min),rn.expandByPoint(js.max))}rn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Le.fromBufferAttribute(a,l),c&&(rs.fromBufferAttribute(t,l),Le.add(rs)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new w,c[P]=new w;const l=new w,h=new w,u=new w,d=new Tt,f=new Tt,g=new Tt,_=new w,m=new w;function p(P,E,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[P].add(_),a[E].add(_),a[M].add(_),c[P].add(m),c[E].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,E=v.length;P<E;++P){const M=v[P],C=M.start,N=M.count;for(let F=C,W=C+N;F<W;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const S=new w,x=new w,L=new w,R=new w;function A(P){L.fromBufferAttribute(s,P),R.copy(L);const E=a[P];S.copy(E),S.sub(L.multiplyScalar(L.dot(E))).normalize(),x.crossVectors(R,E);const C=x.dot(c[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,C)}for(let P=0,E=v.length;P<E;++P){const M=v[P],C=M.start,N=M.count;for(let F=C,W=C+N;F<W;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new w,r=new w,o=new w,a=new w,c=new w,l=new w,h=new w,u=new w;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Ge(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kl=new ce,Ai=new Xo,Br=new Xi,Vl=new w,kr=new w,Vr=new w,Hr=new w,_a=new w,Gr=new w,Hl=new w,Wr=new w;class Ut extends Re{constructor(t=new ye,e=new jc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Gr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(_a.fromBufferAttribute(u,t),o?Gr.addScaledVector(_a,h):Gr.addScaledVector(_a.sub(e),h))}e.add(Gr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(Br.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Br,Vl)===null||Ai.origin.distanceToSquared(Vl)>(t.far-t.near)**2))&&(kl.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(kl),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,L=S;x<L;x+=3){const R=a.getX(x),A=a.getX(x+1),P=a.getX(x+2);s=Xr(this,p,t,n,l,h,u,R,A,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);s=Xr(this,o,t,n,l,h,u,v,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,L=S;x<L;x+=3){const R=x,A=x+1,P=x+2;s=Xr(this,p,t,n,l,h,u,R,A,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,S=m+1,x=m+2;s=Xr(this,o,t,n,l,h,u,v,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Hd(i,t,e,n,s,r,o,a){let c;if(t.side===Ze?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ei,a),c===null)return null;Wr.copy(a),Wr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Wr);return l<e.near||l>e.far?null:{distance:l,point:Wr.clone(),object:i}}function Xr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,kr),i.getVertexPosition(c,Vr),i.getVertexPosition(l,Hr);const h=Hd(i,t,e,n,kr,Vr,Hr,Hl);if(h){const u=new w;An.getBarycoord(Hl,kr,Vr,Hr,u),s&&(h.uv=An.getInterpolatedAttribute(s,a,c,l,u,new Tt)),r&&(h.uv1=An.getInterpolatedAttribute(r,a,c,l,u,new Tt)),o&&(h.normal=An.getInterpolatedAttribute(o,a,c,l,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new w,materialIndex:0};An.getNormal(kr,Vr,Hr,d.normal),h.face=d,h.barycoord=u}return h}class se extends ye{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function g(_,m,p,v,S,x,L,R,A,P,E){const M=x/A,C=L/P,N=x/2,F=L/2,W=R/2,X=A+1,Y=P+1;let tt=0,Z=0;const at=new w;for(let ct=0;ct<Y;ct++){const Et=ct*C-F;for(let lt=0;lt<X;lt++){const ut=lt*M-N;at[_]=ut*v,at[m]=Et*S,at[p]=W,l.push(at.x,at.y,at.z),at[_]=0,at[m]=0,at[p]=R>0?1:-1,h.push(at.x,at.y,at.z),u.push(lt/A),u.push(1-ct/P),tt+=1}}for(let ct=0;ct<P;ct++)for(let Et=0;Et<A;Et++){const lt=d+Et+X*ct,ut=d+Et+X*(ct+1),G=d+(Et+1)+X*(ct+1),D=d+(Et+1)+X*ct;c.push(lt,ut,D),c.push(ut,G,D),Z+=6}a.addGroup(f,Z,E),f+=Z,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new se(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Us(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function qe(i){const t={};for(let e=0;e<i.length;e++){const n=Us(i[e]);for(const s in n)t[s]=n[s]}return t}function Gd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ku(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Wd={clone:Us,merge:qe};var Xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends qi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xd,this.fragmentShader=qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=Gd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Vu extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new w,Gl=new Tt,Wl=new Tt;class un extends Vu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cc*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,Gl,Wl),e.subVectors(Wl,Gl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ao*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const os=-90,as=1;class Yd extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(os,as,t,e);s.layers=this.layers,this.add(s);const r=new un(os,as,t,e);r.layers=this.layers,this.add(r);const o=new un(os,as,t,e);o.layers=this.layers,this.add(o);const a=new un(os,as,t,e);a.layers=this.layers,this.add(a);const c=new un(os,as,t,e);c.layers=this.layers,this.add(c);const l=new un(os,as,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Hu extends He{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ps,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zd extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Hu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new se(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Mi});r.uniforms.tEquirect.value=e;const o=new Ut(s,r),a=e.minFilter;return e.minFilter===Bi&&(e.minFilter=vn),new Yd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const xa=new w,Kd=new w,$d=new jt;class Qn{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=xa.subVectors(n,e).cross(Kd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(xa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||$d.getNormalMatrix(t),s=this.coplanarPoint(xa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Xi,qr=new w;class Jc{constructor(t=new Qn,e=new Qn,n=new Qn,s=new Qn,r=new Qn,o=new Qn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ri){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],v=s[13],S=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+o,d+h,m+g,x+v).normalize(),n[3].setComponents(c-o,d-h,m-g,x-v).normalize(),n[4].setComponents(c-a,d-u,m-_,x-S).normalize(),e===ri)n[5].setComponents(c+a,d+u,m+_,x+S).normalize();else if(e===Lo)n[5].setComponents(a,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(qr.x=s.normal.x>0?t.max.x:t.min.x,qr.y=s.normal.y>0?t.max.y:t.min.y,qr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function jd(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Bn extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*d-o;for(let S=0;S<l;S++){const x=S*u-r;g.push(x,-v,0),_.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const S=v+l*p,x=v+l*(p+1),L=v+1+l*(p+1),R=v+1+l*p;f.push(S,x,R),f.push(x,L,R)}this.setIndex(f),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qd=`#ifdef USE_ALPHAHASH
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
#endif`,tf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rf=`#ifdef USE_AOMAP
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
#endif`,of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,af=`#ifdef USE_BATCHING
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
#endif`,cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,df=`#ifdef USE_IRIDESCENCE
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
#endif`,ff=`#ifdef USE_BUMPMAP
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
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sf=`#define PI 3.141592653589793
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
} // validated`,Ef=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tf=`vec3 transformedNormal = objectNormal;
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
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lf=`#ifdef USE_ENVMAP
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
#endif`,Df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Ff=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Of=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kf=`#ifdef USE_GRADIENTMAP
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
}`,Vf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wf=`uniform bool receiveShadow;
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
#endif`,Xf=`#ifdef USE_ENVMAP
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
#endif`,qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$f=`PhysicalMaterial material;
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
#endif`,jf=`struct PhysicalMaterial {
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
}`,Jf=`
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
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
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
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ep=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,np=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cp=`#if defined( USE_POINTS_UV )
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
#endif`,lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,up=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`#ifdef USE_MORPHTARGETS
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
#endif`,mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_p=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yp=`#ifdef USE_NORMALMAP
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
#endif`,Sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ap=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ip=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Op=`float getShadowMask() {
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
}`,zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bp=`#ifdef USE_SKINNING
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
#endif`,kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vp=`#ifdef USE_SKINNING
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
#endif`,Hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qp=`#ifdef USE_TRANSMISSION
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
#endif`,Yp=`#ifdef USE_TRANSMISSION
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qp=`uniform sampler2D t2D;
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`#include <common>
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
}`,rm=`#if DEPTH_PACKING == 3200
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
}`,om=`#define DISTANCE
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
}`,am=`#define DISTANCE
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`uniform float scale;
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
}`,um=`uniform vec3 diffuse;
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
}`,dm=`#include <common>
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
}`,fm=`uniform vec3 diffuse;
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
}`,pm=`#define LAMBERT
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
}`,mm=`#define LAMBERT
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
}`,gm=`#define MATCAP
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
}`,_m=`#define MATCAP
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
}`,xm=`#define NORMAL
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
}`,vm=`#define NORMAL
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
}`,Mm=`#define PHONG
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
}`,ym=`#define PHONG
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
}`,Sm=`#define STANDARD
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
}`,Em=`#define STANDARD
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
}`,Tm=`#define TOON
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
}`,wm=`#define TOON
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
}`,bm=`uniform float size;
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
}`,Am=`uniform vec3 diffuse;
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
}`,Rm=`#include <common>
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
}`,Cm=`uniform vec3 color;
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
}`,Pm=`uniform float rotation;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Jd,alphahash_pars_fragment:Qd,alphamap_fragment:tf,alphamap_pars_fragment:ef,alphatest_fragment:nf,alphatest_pars_fragment:sf,aomap_fragment:rf,aomap_pars_fragment:of,batching_pars_vertex:af,batching_vertex:cf,begin_vertex:lf,beginnormal_vertex:hf,bsdfs:uf,iridescence_fragment:df,bumpmap_pars_fragment:ff,clipping_planes_fragment:pf,clipping_planes_pars_fragment:mf,clipping_planes_pars_vertex:gf,clipping_planes_vertex:_f,color_fragment:xf,color_pars_fragment:vf,color_pars_vertex:Mf,color_vertex:yf,common:Sf,cube_uv_reflection_fragment:Ef,defaultnormal_vertex:Tf,displacementmap_pars_vertex:wf,displacementmap_vertex:bf,emissivemap_fragment:Af,emissivemap_pars_fragment:Rf,colorspace_fragment:Cf,colorspace_pars_fragment:Pf,envmap_fragment:Lf,envmap_common_pars_fragment:Df,envmap_pars_fragment:If,envmap_pars_vertex:Uf,envmap_physical_pars_fragment:Xf,envmap_vertex:Nf,fog_vertex:Ff,fog_pars_vertex:Of,fog_fragment:zf,fog_pars_fragment:Bf,gradientmap_pars_fragment:kf,lightmap_pars_fragment:Vf,lights_lambert_fragment:Hf,lights_lambert_pars_fragment:Gf,lights_pars_begin:Wf,lights_toon_fragment:qf,lights_toon_pars_fragment:Yf,lights_phong_fragment:Zf,lights_phong_pars_fragment:Kf,lights_physical_fragment:$f,lights_physical_pars_fragment:jf,lights_fragment_begin:Jf,lights_fragment_maps:Qf,lights_fragment_end:tp,logdepthbuf_fragment:ep,logdepthbuf_pars_fragment:np,logdepthbuf_pars_vertex:ip,logdepthbuf_vertex:sp,map_fragment:rp,map_pars_fragment:op,map_particle_fragment:ap,map_particle_pars_fragment:cp,metalnessmap_fragment:lp,metalnessmap_pars_fragment:hp,morphinstance_vertex:up,morphcolor_vertex:dp,morphnormal_vertex:fp,morphtarget_pars_vertex:pp,morphtarget_vertex:mp,normal_fragment_begin:gp,normal_fragment_maps:_p,normal_pars_fragment:xp,normal_pars_vertex:vp,normal_vertex:Mp,normalmap_pars_fragment:yp,clearcoat_normal_fragment_begin:Sp,clearcoat_normal_fragment_maps:Ep,clearcoat_pars_fragment:Tp,iridescence_pars_fragment:wp,opaque_fragment:bp,packing:Ap,premultiplied_alpha_fragment:Rp,project_vertex:Cp,dithering_fragment:Pp,dithering_pars_fragment:Lp,roughnessmap_fragment:Dp,roughnessmap_pars_fragment:Ip,shadowmap_pars_fragment:Up,shadowmap_pars_vertex:Np,shadowmap_vertex:Fp,shadowmask_pars_fragment:Op,skinbase_vertex:zp,skinning_pars_vertex:Bp,skinning_vertex:kp,skinnormal_vertex:Vp,specularmap_fragment:Hp,specularmap_pars_fragment:Gp,tonemapping_fragment:Wp,tonemapping_pars_fragment:Xp,transmission_fragment:qp,transmission_pars_fragment:Yp,uv_pars_fragment:Zp,uv_pars_vertex:Kp,uv_vertex:$p,worldpos_vertex:jp,background_vert:Jp,background_frag:Qp,backgroundCube_vert:tm,backgroundCube_frag:em,cube_vert:nm,cube_frag:im,depth_vert:sm,depth_frag:rm,distanceRGBA_vert:om,distanceRGBA_frag:am,equirect_vert:cm,equirect_frag:lm,linedashed_vert:hm,linedashed_frag:um,meshbasic_vert:dm,meshbasic_frag:fm,meshlambert_vert:pm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:_m,meshnormal_vert:xm,meshnormal_frag:vm,meshphong_vert:Mm,meshphong_frag:ym,meshphysical_vert:Sm,meshphysical_frag:Em,meshtoon_vert:Tm,meshtoon_frag:wm,points_vert:bm,points_frag:Am,shadow_vert:Rm,shadow_frag:Cm,sprite_vert:Pm,sprite_frag:Lm},wt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Un={basic:{uniforms:qe([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:qe([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:qe([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:qe([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:qe([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:qe([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:qe([wt.points,wt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:qe([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:qe([wt.common,wt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:qe([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:qe([wt.sprite,wt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:qe([wt.common,wt.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:qe([wt.lights,wt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Un.physical={uniforms:qe([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Yr={r:0,b:0,g:0},Ci=new Vn,Dm=new ce;function Im(i,t,e,n,s,r,o){const a=new Yt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(v){let S=v.isScene===!0?v.background:null;return S&&S.isTexture&&(S=(v.backgroundBlurriness>0?e:t).get(S)),S}function _(v){let S=!1;const x=g(v);x===null?p(a,c):x&&x.isColor&&(p(x,1),S=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,S){const x=g(S);x&&(x.isCubeTexture||x.mapping===Go)?(h===void 0&&(h=new Ut(new se(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Us(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ci.copy(S.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dm.makeRotationFromEuler(Ci)),h.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ue,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ut(new Bn(2,2),new Mn({name:"BackgroundMaterial",uniforms:Us(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ue,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,S){v.getRGB(Yr,ku(i)),n.buffers.color.setClear(Yr.r,Yr.g,Yr.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),c=S,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:_,addToRenderList:m}}function Um(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,C,N,F,W){let X=!1;const Y=u(F,N,C);r!==Y&&(r=Y,l(r.object)),X=f(M,F,N,W),X&&g(M,F,N,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(M,C,N,F),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,C,N){const F=N.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let X=W[C.id];X===void 0&&(X={},W[C.id]=X);let Y=X[F];return Y===void 0&&(Y=d(c()),X[F]=Y),Y}function d(M){const C=[],N=[],F=[];for(let W=0;W<e;W++)C[W]=0,N[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,C,N,F){const W=r.attributes,X=C.attributes;let Y=0;const tt=N.getAttributes();for(const Z in tt)if(tt[Z].location>=0){const ct=W[Z];let Et=X[Z];if(Et===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(Et=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(Et=M.instanceColor)),ct===void 0||ct.attribute!==Et||Et&&ct.data!==Et.data)return!0;Y++}return r.attributesNum!==Y||r.index!==F}function g(M,C,N,F){const W={},X=C.attributes;let Y=0;const tt=N.getAttributes();for(const Z in tt)if(tt[Z].location>=0){let ct=X[Z];ct===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor));const Et={};Et.attribute=ct,ct&&ct.data&&(Et.data=ct.data),W[Z]=Et,Y++}r.attributes=W,r.attributesNum=Y,r.index=F}function _(){const M=r.newAttributes;for(let C=0,N=M.length;C<N;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){const N=r.newAttributes,F=r.enabledAttributes,W=r.attributeDivisors;N[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),W[M]!==C&&(i.vertexAttribDivisor(M,C),W[M]=C)}function v(){const M=r.newAttributes,C=r.enabledAttributes;for(let N=0,F=C.length;N<F;N++)C[N]!==M[N]&&(i.disableVertexAttribArray(N),C[N]=0)}function S(M,C,N,F,W,X,Y){Y===!0?i.vertexAttribIPointer(M,C,N,W,X):i.vertexAttribPointer(M,C,N,F,W,X)}function x(M,C,N,F){_();const W=F.attributes,X=N.getAttributes(),Y=C.defaultAttributeValues;for(const tt in X){const Z=X[tt];if(Z.location>=0){let at=W[tt];if(at===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(at=M.instanceColor)),at!==void 0){const ct=at.normalized,Et=at.itemSize,lt=t.get(at);if(lt===void 0)continue;const ut=lt.buffer,G=lt.type,D=lt.bytesPerElement,q=G===i.INT||G===i.UNSIGNED_INT||at.gpuType===Xc;if(at.isInterleavedBufferAttribute){const z=at.data,it=z.stride,mt=at.offset;if(z.isInstancedInterleavedBuffer){for(let gt=0;gt<Z.locationSize;gt++)p(Z.location+gt,z.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let gt=0;gt<Z.locationSize;gt++)m(Z.location+gt);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let gt=0;gt<Z.locationSize;gt++)S(Z.location+gt,Et/Z.locationSize,G,ct,it*D,(mt+Et/Z.locationSize*gt)*D,q)}else{if(at.isInstancedBufferAttribute){for(let z=0;z<Z.locationSize;z++)p(Z.location+z,at.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let z=0;z<Z.locationSize;z++)m(Z.location+z);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let z=0;z<Z.locationSize;z++)S(Z.location+z,Et/Z.locationSize,G,ct,Et*D,Et/Z.locationSize*z*D,q)}}else if(Y!==void 0){const ct=Y[tt];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(Z.location,ct);break;case 3:i.vertexAttrib3fv(Z.location,ct);break;case 4:i.vertexAttrib4fv(Z.location,ct);break;default:i.vertexAttrib1fv(Z.location,ct)}}}}v()}function L(){P();for(const M in n){const C=n[M];for(const N in C){const F=C[N];for(const W in F)h(F[W].object),delete F[W];delete C[N]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const N in C){const F=C[N];for(const W in F)h(F[W].object),delete F[W];delete C[N]}delete n[M.id]}function A(M){for(const C in n){const N=n[C];if(N[M.id]===void 0)continue;const F=N[M.id];for(const W in F)h(F[W].object),delete F[W];delete N[M.id]}}function P(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Nm(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Fm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Rn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ai&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==On&&!P)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:L,maxSamples:R}}function Om(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Qn,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const v=r?0:n,S=v*4;let x=p.clippingState||null;c.value=x,x=h(g,d,S,f);for(let L=0;L!==S;++L)x[L]=e[L];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==_;++S,x+=4)o.copy(u[S]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function zm(i){let t=new WeakMap;function e(o,a){return a===Qa?o.mapping=Ps:a===tc&&(o.mapping=Ls),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qa||a===tc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Zd(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Wu extends Vu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gs=4,Xl=[.125,.215,.35,.446,.526,.582],Oi=20,va=new Wu,ql=new Yt;let Ma=null,ya=0,Sa=0,Ea=!1;const Ii=(1+Math.sqrt(5))/2,cs=1/Ii,Yl=[new w(-Ii,cs,0),new w(Ii,cs,0),new w(-cs,0,Ii),new w(cs,0,Ii),new w(0,Ii,-cs),new w(0,Ii,cs),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)];class Zl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ma=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ma,ya,Sa),this._renderer.xr.enabled=Ea,t.scissorTest=!1,Zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ps||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ma=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:si,format:Rn,colorSpace:zs,depthBuffer:!1},s=Kl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bm(r)),this._blurMaterial=km(r,t,e)}return s}_compileMaterial(t){const e=new Ut(this._lodPlanes[0],t);this._renderer.compile(e,va)}_sceneToCubeUV(t,e,n,s){const a=new un(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ql),h.toneMapping=yi,h.autoClear=!1;const f=new jc({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),g=new Ut(new se,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(ql),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const S=this._cubeSize;Zr(s,v*S,p>2?S:0,S,S),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ps||t.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$l());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Zr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,va)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Yl[(s-r-1)%Yl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ut(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Oi;m>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const p=[];let v=0;for(let A=0;A<Oi;++A){const P=A/_,E=Math.exp(-P*P/2);p.push(E),A===0?v+=E:A<m&&(v+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const x=this._sizeLods[s],L=3*x*(s>S-gs?s-S+gs:0),R=4*(this._cubeSize-x);Zr(e,L,R,3*x,2*x),c.setRenderTarget(e),c.render(u,va)}}function Bm(i){const t=[],e=[],n=[];let s=i;const r=i-gs+1+Xl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-gs?c=Xl[o-i+gs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),S=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let R=0;R<f;R++){const A=R%3*2/3-1,P=R>2?0:-1,E=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];v.set(E,_*g*R),S.set(d,m*g*R);const M=[R,R,R,R,R,R];x.set(M,p*g*R)}const L=new ye;L.setAttribute("position",new Ge(v,_)),L.setAttribute("uv",new Ge(S,m)),L.setAttribute("faceIndex",new Ge(x,p)),t.push(L),s>gs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kl(i,t,e){const n=new ci(i,t,e);return n.texture.mapping=Go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function km(i,t,e){const n=new Float32Array(Oi),s=new w(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function $l(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function jl(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Qc(){return`

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
	`}function Vm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Qa||c===tc,h=c===Ps||c===Ls;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Zl(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Zl(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Hm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&rr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Gm(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let S=0,x=v.length;S<x;S+=3){const L=v[S+0],R=v[S+1],A=v[S+2];d.push(L,R,R,A,A,L)}}else if(g!==void 0){const v=g.array;_=g.version;for(let S=0,x=v.length/3-1;S<x;S+=3){const L=S+0,R=S+1,A=S+2;d.push(L,R,R,A,A,L)}}else return;const m=new(Iu(d)?Bu:zu)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Wm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Xm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function qm(i,t,e){const n=new WeakMap,s=new ve;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let L=a.attributes.position.count*x,R=1;L>t.maxTextureSize&&(R=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const A=new Float32Array(L*R*4*u),P=new Nu(A,L,R,u);P.type=On,P.needsUpdate=!0;const E=x*4;for(let C=0;C<u;C++){const N=p[C],F=v[C],W=S[C],X=L*R*4*C;for(let Y=0;Y<N.count;Y++){const tt=Y*E;g===!0&&(s.fromBufferAttribute(N,Y),A[X+tt+0]=s.x,A[X+tt+1]=s.y,A[X+tt+2]=s.z,A[X+tt+3]=0),_===!0&&(s.fromBufferAttribute(F,Y),A[X+tt+4]=s.x,A[X+tt+5]=s.y,A[X+tt+6]=s.z,A[X+tt+7]=0),m===!0&&(s.fromBufferAttribute(W,Y),A[X+tt+8]=s.x,A[X+tt+9]=s.y,A[X+tt+10]=s.z,A[X+tt+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new Tt(L,R)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ym(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class tl extends He{constructor(t,e,n,s,r,o,a,c,l,h=Es){if(h!==Es&&h!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Es&&(n=Vi),n===void 0&&h===Is&&(n=Ds),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:pn,this.minFilter=c!==void 0?c:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xu=new He,Jl=new tl(1,1),qu=new Nu,Yu=new Rd,Zu=new Hu,Ql=[],th=[],eh=new Float32Array(16),nh=new Float32Array(9),ih=new Float32Array(4);function ks(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ql[s];if(r===void 0&&(r=new Float32Array(s),Ql[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qo(i,t){let e=th[t];e===void 0&&(e=new Int32Array(t),th[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function $m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function Jm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;ih.set(n),i.uniformMatrix2fv(this.addr,!1,ih),Pe(e,n)}}function Qm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;nh.set(n),i.uniformMatrix3fv(this.addr,!1,nh),Pe(e,n)}}function tg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;eh.set(n),i.uniformMatrix4fv(this.addr,!1,eh),Pe(e,n)}}function eg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function rg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function lg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Jl.compareFunction=Du,r=Jl):r=Xu,e.setTexture2D(t||r,s)}function hg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Yu,s)}function ug(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Zu,s)}function dg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qu,s)}function fg(i){switch(i){case 5126:return Zm;case 35664:return Km;case 35665:return $m;case 35666:return jm;case 35674:return Jm;case 35675:return Qm;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return og;case 36295:return ag;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return dg}}function pg(i,t){i.uniform1fv(this.addr,t)}function mg(i,t){const e=ks(t,this.size,2);i.uniform2fv(this.addr,e)}function gg(i,t){const e=ks(t,this.size,3);i.uniform3fv(this.addr,e)}function _g(i,t){const e=ks(t,this.size,4);i.uniform4fv(this.addr,e)}function xg(i,t){const e=ks(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function vg(i,t){const e=ks(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Mg(i,t){const e=ks(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yg(i,t){i.uniform1iv(this.addr,t)}function Sg(i,t){i.uniform2iv(this.addr,t)}function Eg(i,t){i.uniform3iv(this.addr,t)}function Tg(i,t){i.uniform4iv(this.addr,t)}function wg(i,t){i.uniform1uiv(this.addr,t)}function bg(i,t){i.uniform2uiv(this.addr,t)}function Ag(i,t){i.uniform3uiv(this.addr,t)}function Rg(i,t){i.uniform4uiv(this.addr,t)}function Cg(i,t,e){const n=this.cache,s=t.length,r=qo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Xu,r[o])}function Pg(i,t,e){const n=this.cache,s=t.length,r=qo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Yu,r[o])}function Lg(i,t,e){const n=this.cache,s=t.length,r=qo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Zu,r[o])}function Dg(i,t,e){const n=this.cache,s=t.length,r=qo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||qu,r[o])}function Ig(i){switch(i){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return _g;case 35674:return xg;case 35675:return vg;case 35676:return Mg;case 5124:case 35670:return yg;case 35667:case 35671:return Sg;case 35668:case 35672:return Eg;case 35669:case 35673:return Tg;case 5125:return wg;case 36294:return bg;case 36295:return Ag;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Dg}}class Ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fg(e.type)}}class Ng{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ig(e.type)}}class Fg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function sh(i,t){i.seq.push(t),i.map[t.id]=t}function Og(i,t,e){const n=i.name,s=n.length;for(Ta.lastIndex=0;;){const r=Ta.exec(n),o=Ta.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){sh(e,l===void 0?new Ug(a,i,t):new Ng(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Fg(a),sh(e,u)),e=u}}}class Ro{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Og(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function rh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const zg=37297;let Bg=0;function kg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const oh=new jt;function Vg(i){Qt._getMatrix(oh,Qt.workingColorSpace,i);const t=`mat3( ${oh.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case Wo:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ah(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+kg(i.getShaderSource(t),o)}else return s}function Hg(i,t){const e=Vg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Gg(i,t){let e;switch(t){case ed:e="Linear";break;case nd:e="Reinhard";break;case id:e="Cineon";break;case Mu:e="ACESFilmic";break;case rd:e="AgX";break;case od:e="Neutral";break;case sd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Kr=new w;function Wg(){Qt.getLuminanceCoefficients(Kr);const i=Kr.x.toFixed(4),t=Kr.y.toFixed(4),e=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function qg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function or(i){return i!==""}function ch(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(i){return i.replace(Zg,$g)}const Kg=new Map;function $g(i,t){let e=Jt[t];if(e===void 0){const n=Kg.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pc(e)}const jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hh(i){return i.replace(jg,Jg)}function Jg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Qg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_u?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===xu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(t="SHADOWMAP_TYPE_VSM"),t}function t1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ps:case Ls:t="ENVMAP_TYPE_CUBE";break;case Go:t="ENVMAP_TYPE_CUBE_UV";break}return t}function e1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ls:t="ENVMAP_MODE_REFRACTION";break}return t}function n1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vu:t="ENVMAP_BLENDING_MULTIPLY";break;case Q0:t="ENVMAP_BLENDING_MIX";break;case td:t="ENVMAP_BLENDING_ADD";break}return t}function i1(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function s1(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Qg(e),l=t1(e),h=e1(e),u=n1(e),d=i1(e),f=Xg(e),g=qg(r),_=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),p.length>0&&(p+=`
`)):(m=[uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),p=[uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==yi?Gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Hg("linearToOutputTexel",e.outputColorSpace),Wg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),o=Pc(o),o=ch(o,e),o=lh(o,e),a=Pc(a),a=ch(a,e),a=lh(a,e),o=hh(o),a=hh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=v+m+o,x=v+p+a,L=rh(s,s.VERTEX_SHADER,S),R=rh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,L),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(L).trim(),W=s.getShaderInfoLog(R).trim();let X=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,R);else{const tt=ah(s,L,"vertex"),Z=ah(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+tt+`
`+Z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||W==="")&&(Y=!1);Y&&(C.diagnostics={runnable:X,programLog:N,vertexShader:{log:F,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(L),s.deleteShader(R),P=new Ro(s,_),E=Yg(s,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,zg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=R,this}let r1=0;class o1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new a1(t),e.set(t,n)),n}}class a1{constructor(t){this.id=r1++,this.code=t,this.usedTimes=0}}function c1(i,t,e,n,s,r,o){const a=new Fu,c=new o1,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,C,N,F){const W=N.fog,X=F.geometry,Y=E.isMeshStandardMaterial?N.environment:null,tt=(E.isMeshStandardMaterial?e:t).get(E.envMap||Y),Z=tt&&tt.mapping===Go?tt.image.height:null,at=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const ct=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Et=ct!==void 0?ct.length:0;let lt=0;X.morphAttributes.position!==void 0&&(lt=1),X.morphAttributes.normal!==void 0&&(lt=2),X.morphAttributes.color!==void 0&&(lt=3);let ut,G,D,q;if(at){const ot=Un[at];ut=ot.vertexShader,G=ot.fragmentShader}else ut=E.vertexShader,G=E.fragmentShader,c.update(E),D=c.getVertexShaderID(E),q=c.getFragmentShaderID(E);const z=i.getRenderTarget(),it=i.state.buffers.depth.getReversed(),mt=F.isInstancedMesh===!0,gt=F.isBatchedMesh===!0,It=!!E.map,Ft=!!E.matcap,Wt=!!tt,U=!!E.aoMap,yt=!!E.lightMap,_t=!!E.bumpMap,Dt=!!E.normalMap,bt=!!E.displacementMap,Kt=!!E.emissiveMap,Pt=!!E.metalnessMap,b=!!E.roughnessMap,y=E.anisotropy>0,V=E.clearcoat>0,st=E.dispersion>0,H=E.iridescence>0,et=E.sheen>0,Rt=E.transmission>0,Q=y&&!!E.anisotropyMap,K=V&&!!E.clearcoatMap,At=V&&!!E.clearcoatNormalMap,rt=V&&!!E.clearcoatRoughnessMap,ht=H&&!!E.iridescenceMap,St=H&&!!E.iridescenceThicknessMap,dt=et&&!!E.sheenColorMap,ft=et&&!!E.sheenRoughnessMap,Ht=!!E.specularMap,Lt=!!E.specularColorMap,Gt=!!E.specularIntensityMap,I=Rt&&!!E.transmissionMap,pt=Rt&&!!E.thicknessMap,J=!!E.gradientMap,nt=!!E.alphaMap,vt=E.alphaTest>0,xt=!!E.alphaHash,Nt=!!E.extensions;let ee=yi;E.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(ee=i.toneMapping);const me={shaderID:at,shaderType:E.type,shaderName:E.name,vertexShader:ut,fragmentShader:G,defines:E.defines,customVertexShaderID:D,customFragmentShaderID:q,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:gt,batchingColor:gt&&F._colorsTexture!==null,instancing:mt,instancingColor:mt&&F.instanceColor!==null,instancingMorph:mt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:z===null?i.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:zs,alphaToCoverage:!!E.alphaToCoverage,map:It,matcap:Ft,envMap:Wt,envMapMode:Wt&&tt.mapping,envMapCubeUVHeight:Z,aoMap:U,lightMap:yt,bumpMap:_t,normalMap:Dt,displacementMap:d&&bt,emissiveMap:Kt,normalMapObjectSpace:Dt&&E.normalMapType===hd,normalMapTangentSpace:Dt&&E.normalMapType===Lu,metalnessMap:Pt,roughnessMap:b,anisotropy:y,anisotropyMap:Q,clearcoat:V,clearcoatMap:K,clearcoatNormalMap:At,clearcoatRoughnessMap:rt,dispersion:st,iridescence:H,iridescenceMap:ht,iridescenceThicknessMap:St,sheen:et,sheenColorMap:dt,sheenRoughnessMap:ft,specularMap:Ht,specularColorMap:Lt,specularIntensityMap:Gt,transmission:Rt,transmissionMap:I,thicknessMap:pt,gradientMap:J,opaque:E.transparent===!1&&E.blending===Ss&&E.alphaToCoverage===!1,alphaMap:nt,alphaTest:vt,alphaHash:xt,combine:E.combine,mapUv:It&&_(E.map.channel),aoMapUv:U&&_(E.aoMap.channel),lightMapUv:yt&&_(E.lightMap.channel),bumpMapUv:_t&&_(E.bumpMap.channel),normalMapUv:Dt&&_(E.normalMap.channel),displacementMapUv:bt&&_(E.displacementMap.channel),emissiveMapUv:Kt&&_(E.emissiveMap.channel),metalnessMapUv:Pt&&_(E.metalnessMap.channel),roughnessMapUv:b&&_(E.roughnessMap.channel),anisotropyMapUv:Q&&_(E.anisotropyMap.channel),clearcoatMapUv:K&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:At&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:St&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:ft&&_(E.sheenRoughnessMap.channel),specularMapUv:Ht&&_(E.specularMap.channel),specularColorMapUv:Lt&&_(E.specularColorMap.channel),specularIntensityMapUv:Gt&&_(E.specularIntensityMap.channel),transmissionMapUv:I&&_(E.transmissionMap.channel),thicknessMapUv:pt&&_(E.thicknessMap.channel),alphaMapUv:nt&&_(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Dt||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(It||nt),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:it,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:lt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,decodeVideoTexture:It&&E.map.isVideoTexture===!0&&Qt.getTransfer(E.map.colorSpace)===ue,decodeVideoTextureEmissive:Kt&&E.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(E.emissiveMap.colorSpace)===ue,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Te,flipSided:E.side===Ze,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Nt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&E.extensions.multiDraw===!0||gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return me.vertexUv1s=l.has(1),me.vertexUv2s=l.has(2),me.vertexUv3s=l.has(3),l.clear(),me}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)M.push(C),M.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(v(M,E),S(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function v(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function S(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const M=g[E.type];let C;if(M){const N=Un[M];C=Wd.clone(N.uniforms)}else C=E.uniforms;return C}function L(E,M){let C;for(let N=0,F=h.length;N<F;N++){const W=h[N];if(W.cacheKey===M){C=W,++C.usedTimes;break}}return C===void 0&&(C=new s1(i,M,E,r),h.push(C)),C}function R(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function A(E){c.remove(E)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:L,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:P}}function l1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function h1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function dh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||h1),n.length>1&&n.sort(d||dh),s.length>1&&s.sort(d||dh)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function u1(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new fh,i.set(n,[o])):s>=r.length?(o=new fh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function d1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new Yt};break;case"SpotLight":e={position:new w,direction:new w,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new w,halfWidth:new w,halfHeight:new w};break}return i[t.id]=e,e}}}function f1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let p1=0;function m1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function g1(i){const t=new d1,e=f1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new w);const s=new w,r=new ce,o=new ce;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,S=0,x=0,L=0,R=0,A=0;l.sort(m1);for(let E=0,M=l.length;E<M;E++){const C=l[E],N=C.color,F=C.intensity,W=C.distance,X=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=N.r*F,u+=N.g*F,d+=N.b*F;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(C.sh.coefficients[Y],F);A++}else if(C.isDirectionalLight){const Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const tt=C.shadow,Z=e.get(C);Z.shadowIntensity=tt.intensity,Z.shadowBias=tt.bias,Z.shadowNormalBias=tt.normalBias,Z.shadowRadius=tt.radius,Z.shadowMapSize=tt.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=C.shadow.matrix,v++}n.directional[f]=Y,f++}else if(C.isSpotLight){const Y=t.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(N).multiplyScalar(F),Y.distance=W,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,n.spot[_]=Y;const tt=C.shadow;if(C.map&&(n.spotLightMap[L]=C.map,L++,tt.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[_]=tt.matrix,C.castShadow){const Z=e.get(C);Z.shadowIntensity=tt.intensity,Z.shadowBias=tt.bias,Z.shadowNormalBias=tt.normalBias,Z.shadowRadius=tt.radius,Z.shadowMapSize=tt.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=X,x++}_++}else if(C.isRectAreaLight){const Y=t.get(C);Y.color.copy(N).multiplyScalar(F),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=Y,m++}else if(C.isPointLight){const Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const tt=C.shadow,Z=e.get(C);Z.shadowIntensity=tt.intensity,Z.shadowBias=tt.bias,Z.shadowNormalBias=tt.normalBias,Z.shadowRadius=tt.radius,Z.shadowMapSize=tt.mapSize,Z.shadowCameraNear=tt.camera.near,Z.shadowCameraFar=tt.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=Y,g++}else if(C.isHemisphereLight){const Y=t.get(C);Y.skyColor.copy(C.color).multiplyScalar(F),Y.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[p]=Y,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==S||P.numSpotShadows!==x||P.numSpotMaps!==L||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=S,P.numSpotShadows=x,P.numSpotMaps=L,P.numLightProbes=A,n.version=p1++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const S=l[p];if(S.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(S.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function ph(i){const t=new g1(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function _1(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ph(i),t.set(s,[a])):r>=o.length?(a=new ph(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class x1 extends qi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class v1 extends qi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const M1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y1=`uniform sampler2D shadow_pass;
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
}`;function S1(i,t,e){let n=new Jc;const s=new Tt,r=new Tt,o=new ve,a=new x1({depthPacking:ld}),c=new v1,l={},h=e.maxTextureSize,u={[Ei]:Ze,[Ze]:Ei,[Te]:Te},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:M1,fragmentShader:y1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ut(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_u;let p=this.type;this.render=function(R,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Mi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=p!==jn&&this.type===jn,W=p===jn&&this.type!==jn;for(let X=0,Y=R.length;X<Y;X++){const tt=R[X],Z=tt.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const at=Z.getFrameExtents();if(s.multiply(at),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,Z.mapSize.y=r.y)),Z.map===null||F===!0||W===!0){const Et=this.type!==jn?{minFilter:pn,magFilter:pn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ci(s.x,s.y,Et),Z.map.texture.name=tt.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();const ct=Z.getViewportCount();for(let Et=0;Et<ct;Et++){const lt=Z.getViewport(Et);o.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),N.viewport(o),Z.updateMatrices(tt,Et),n=Z.getFrustum(),x(A,P,Z.camera,tt,this.type)}Z.isPointLightShadow!==!0&&this.type===jn&&v(Z,P),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,C)};function v(R,A){const P=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ci(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,P,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,P,f,_,null)}function S(R,A,P,E){let M=null;const C=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)M=C;else if(M=P.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=M.uuid,F=A.uuid;let W=l[N];W===void 0&&(W={},l[N]=W);let X=W[F];X===void 0&&(X=M.clone(),W[F]=X,A.addEventListener("dispose",L)),M=X}if(M.visible=A.visible,M.wireframe=A.wireframe,E===jn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=i.properties.get(M);N.light=P}return M}function x(R,A,P,E,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===jn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const F=t.update(R),W=R.material;if(Array.isArray(W)){const X=F.groups;for(let Y=0,tt=X.length;Y<tt;Y++){const Z=X[Y],at=W[Z.materialIndex];if(at&&at.visible){const ct=S(R,at,E,M);R.onBeforeShadow(i,R,A,P,F,ct,Z),i.renderBufferDirect(P,null,F,ct,R,Z),R.onAfterShadow(i,R,A,P,F,ct,Z)}}}else if(W.visible){const X=S(R,W,E,M);R.onBeforeShadow(i,R,A,P,F,X,null),i.renderBufferDirect(P,null,F,X,R,null),R.onAfterShadow(i,R,A,P,F,X,null)}}const N=R.children;for(let F=0,W=N.length;F<W;F++)x(N[F],A,P,E,M)}function L(R){R.target.removeEventListener("dispose",L);for(const P in l){const E=l[P],M=R.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const E1={[qa]:Ya,[Za]:ja,[Ka]:Ja,[Cs]:$a,[Ya]:qa,[ja]:Za,[Ja]:Ka,[$a]:Cs};function T1(i,t){function e(){let I=!1;const pt=new ve;let J=null;const nt=new ve(0,0,0,0);return{setMask:function(vt){J!==vt&&!I&&(i.colorMask(vt,vt,vt,vt),J=vt)},setLocked:function(vt){I=vt},setClear:function(vt,xt,Nt,ee,me){me===!0&&(vt*=ee,xt*=ee,Nt*=ee),pt.set(vt,xt,Nt,ee),nt.equals(pt)===!1&&(i.clearColor(vt,xt,Nt,ee),nt.copy(pt))},reset:function(){I=!1,J=null,nt.set(-1,0,0,0)}}}function n(){let I=!1,pt=!1,J=null,nt=null,vt=null;return{setReversed:function(xt){if(pt!==xt){const Nt=t.get("EXT_clip_control");pt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const ee=vt;vt=null,this.setClear(ee)}pt=xt},getReversed:function(){return pt},setTest:function(xt){xt?z(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(xt){J!==xt&&!I&&(i.depthMask(xt),J=xt)},setFunc:function(xt){if(pt&&(xt=E1[xt]),nt!==xt){switch(xt){case qa:i.depthFunc(i.NEVER);break;case Ya:i.depthFunc(i.ALWAYS);break;case Za:i.depthFunc(i.LESS);break;case Cs:i.depthFunc(i.LEQUAL);break;case Ka:i.depthFunc(i.EQUAL);break;case $a:i.depthFunc(i.GEQUAL);break;case ja:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=xt}},setLocked:function(xt){I=xt},setClear:function(xt){vt!==xt&&(pt&&(xt=1-xt),i.clearDepth(xt),vt=xt)},reset:function(){I=!1,J=null,nt=null,vt=null,pt=!1}}}function s(){let I=!1,pt=null,J=null,nt=null,vt=null,xt=null,Nt=null,ee=null,me=null;return{setTest:function(ot){I||(ot?z(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(ot){pt!==ot&&!I&&(i.stencilMask(ot),pt=ot)},setFunc:function(ot,Zt,fe){(J!==ot||nt!==Zt||vt!==fe)&&(i.stencilFunc(ot,Zt,fe),J=ot,nt=Zt,vt=fe)},setOp:function(ot,Zt,fe){(xt!==ot||Nt!==Zt||ee!==fe)&&(i.stencilOp(ot,Zt,fe),xt=ot,Nt=Zt,ee=fe)},setLocked:function(ot){I=ot},setClear:function(ot){me!==ot&&(i.clearStencil(ot),me=ot)},reset:function(){I=!1,pt=null,J=null,nt=null,vt=null,xt=null,Nt=null,ee=null,me=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,S=null,x=null,L=null,R=null,A=new Yt(0,0,0),P=0,E=!1,M=null,C=null,N=null,F=null,W=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,tt=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=tt>=1):Z.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=tt>=2);let at=null,ct={};const Et=i.getParameter(i.SCISSOR_BOX),lt=i.getParameter(i.VIEWPORT),ut=new ve().fromArray(Et),G=new ve().fromArray(lt);function D(I,pt,J,nt){const vt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(I,xt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<J;Nt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(pt+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return xt}const q={};q[i.TEXTURE_2D]=D(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=D(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=D(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=D(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),z(i.DEPTH_TEST),o.setFunc(Cs),_t(!1),Dt(xl),z(i.CULL_FACE),U(Mi);function z(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function it(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function mt(I,pt){return u[I]!==pt?(i.bindFramebuffer(I,pt),u[I]=pt,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function gt(I,pt){let J=f,nt=!1;if(I){J=d.get(pt),J===void 0&&(J=[],d.set(pt,J));const vt=I.textures;if(J.length!==vt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,Nt=vt.length;xt<Nt;xt++)J[xt]=i.COLOR_ATTACHMENT0+xt;J.length=vt.length,nt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,nt=!0);nt&&i.drawBuffers(J)}function It(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Ft={[Fi]:i.FUNC_ADD,[F0]:i.FUNC_SUBTRACT,[O0]:i.FUNC_REVERSE_SUBTRACT};Ft[z0]=i.MIN,Ft[B0]=i.MAX;const Wt={[k0]:i.ZERO,[V0]:i.ONE,[H0]:i.SRC_COLOR,[Wa]:i.SRC_ALPHA,[Z0]:i.SRC_ALPHA_SATURATE,[q0]:i.DST_COLOR,[W0]:i.DST_ALPHA,[G0]:i.ONE_MINUS_SRC_COLOR,[Xa]:i.ONE_MINUS_SRC_ALPHA,[Y0]:i.ONE_MINUS_DST_COLOR,[X0]:i.ONE_MINUS_DST_ALPHA,[K0]:i.CONSTANT_COLOR,[$0]:i.ONE_MINUS_CONSTANT_COLOR,[j0]:i.CONSTANT_ALPHA,[J0]:i.ONE_MINUS_CONSTANT_ALPHA};function U(I,pt,J,nt,vt,xt,Nt,ee,me,ot){if(I===Mi){_===!0&&(it(i.BLEND),_=!1);return}if(_===!1&&(z(i.BLEND),_=!0),I!==N0){if(I!==m||ot!==E){if((p!==Fi||x!==Fi)&&(i.blendEquation(i.FUNC_ADD),p=Fi,x=Fi),ot)switch(I){case Ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vl:i.blendFunc(i.ONE,i.ONE);break;case Ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,S=null,L=null,R=null,A.set(0,0,0),P=0,m=I,E=ot}return}vt=vt||pt,xt=xt||J,Nt=Nt||nt,(pt!==p||vt!==x)&&(i.blendEquationSeparate(Ft[pt],Ft[vt]),p=pt,x=vt),(J!==v||nt!==S||xt!==L||Nt!==R)&&(i.blendFuncSeparate(Wt[J],Wt[nt],Wt[xt],Wt[Nt]),v=J,S=nt,L=xt,R=Nt),(ee.equals(A)===!1||me!==P)&&(i.blendColor(ee.r,ee.g,ee.b,me),A.copy(ee),P=me),m=I,E=!1}function yt(I,pt){I.side===Te?it(i.CULL_FACE):z(i.CULL_FACE);let J=I.side===Ze;pt&&(J=!J),_t(J),I.blending===Ss&&I.transparent===!1?U(Mi):U(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const nt=I.stencilWrite;a.setTest(nt),nt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Kt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?z(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function Dt(I){I!==I0?(z(i.CULL_FACE),I!==C&&(I===xl?i.cullFace(i.BACK):I===U0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),C=I}function bt(I){I!==N&&(Y&&i.lineWidth(I),N=I)}function Kt(I,pt,J){I?(z(i.POLYGON_OFFSET_FILL),(F!==pt||W!==J)&&(i.polygonOffset(pt,J),F=pt,W=J)):it(i.POLYGON_OFFSET_FILL)}function Pt(I){I?z(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function b(I){I===void 0&&(I=i.TEXTURE0+X-1),at!==I&&(i.activeTexture(I),at=I)}function y(I,pt,J){J===void 0&&(at===null?J=i.TEXTURE0+X-1:J=at);let nt=ct[J];nt===void 0&&(nt={type:void 0,texture:void 0},ct[J]=nt),(nt.type!==I||nt.texture!==pt)&&(at!==J&&(i.activeTexture(J),at=J),i.bindTexture(I,pt||q[I]),nt.type=I,nt.texture=pt)}function V(){const I=ct[at];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(I){ut.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ut.copy(I))}function ft(I){G.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),G.copy(I))}function Ht(I,pt){let J=l.get(pt);J===void 0&&(J=new WeakMap,l.set(pt,J));let nt=J.get(I);nt===void 0&&(nt=i.getUniformBlockIndex(pt,I.name),J.set(I,nt))}function Lt(I,pt){const nt=l.get(pt).get(I);c.get(pt)!==nt&&(i.uniformBlockBinding(pt,nt,I.__bindingPointIndex),c.set(pt,nt))}function Gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},at=null,ct={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,S=null,x=null,L=null,R=null,A=new Yt(0,0,0),P=0,E=!1,M=null,C=null,N=null,F=null,W=null,ut.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:z,disable:it,bindFramebuffer:mt,drawBuffers:gt,useProgram:It,setBlending:U,setMaterial:yt,setFlipSided:_t,setCullFace:Dt,setLineWidth:bt,setPolygonOffset:Kt,setScissorTest:Pt,activeTexture:b,bindTexture:y,unbindTexture:V,compressedTexImage2D:st,compressedTexImage3D:H,texImage2D:ht,texImage3D:St,updateUBOMapping:Ht,uniformBlockBinding:Lt,texStorage2D:At,texStorage3D:rt,texSubImage2D:et,texSubImage3D:Rt,compressedTexSubImage2D:Q,compressedTexSubImage3D:K,scissor:dt,viewport:ft,reset:Gt}}function mh(i,t,e,n){const s=w1(n);switch(e){case wu:return i*t;case Au:return i*t;case Ru:return i*t*2;case xr:return i*t/s.components*s.byteLength;case Zc:return i*t/s.components*s.byteLength;case Cu:return i*t*2/s.components*s.byteLength;case Kc:return i*t*2/s.components*s.byteLength;case bu:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case $c:return i*t*4/s.components*s.byteLength;case So:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case To:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sc:case oc:return Math.max(i,16)*Math.max(t,8)/4;case ic:case rc:return Math.max(i,8)*Math.max(t,8)/2;case ac:case cc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case fc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case pc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case mc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case gc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _c:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case xc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case vc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Sc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ec:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case bo:case Tc:case wc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Pu:case bc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ac:case Rc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function w1(i){switch(i){case ai:case Su:return{byteLength:1,components:1};case _r:case Eu:case si:return{byteLength:2,components:1};case qc:case Yc:return{byteLength:2,components:4};case Vi:case Xc:case On:return{byteLength:4,components:1};case Tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function b1(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Tt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return f?new OffscreenCanvas(b,y):Do("canvas")}function _(b,y,V){let st=1;const H=Pt(b);if((H.width>V||H.height>V)&&(st=V/Math.max(H.width,H.height)),st<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const et=Math.floor(st*H.width),Rt=Math.floor(st*H.height);u===void 0&&(u=g(et,Rt));const Q=y?g(et,Rt):u;return Q.width=et,Q.height=Rt,Q.getContext("2d").drawImage(b,0,0,et,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+et+"x"+Rt+")."),Q}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function v(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(b,y,V,st,H=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let et=y;if(y===i.RED&&(V===i.FLOAT&&(et=i.R32F),V===i.HALF_FLOAT&&(et=i.R16F),V===i.UNSIGNED_BYTE&&(et=i.R8)),y===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.R8UI),V===i.UNSIGNED_SHORT&&(et=i.R16UI),V===i.UNSIGNED_INT&&(et=i.R32UI),V===i.BYTE&&(et=i.R8I),V===i.SHORT&&(et=i.R16I),V===i.INT&&(et=i.R32I)),y===i.RG&&(V===i.FLOAT&&(et=i.RG32F),V===i.HALF_FLOAT&&(et=i.RG16F),V===i.UNSIGNED_BYTE&&(et=i.RG8)),y===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.RG8UI),V===i.UNSIGNED_SHORT&&(et=i.RG16UI),V===i.UNSIGNED_INT&&(et=i.RG32UI),V===i.BYTE&&(et=i.RG8I),V===i.SHORT&&(et=i.RG16I),V===i.INT&&(et=i.RG32I)),y===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.RGB8UI),V===i.UNSIGNED_SHORT&&(et=i.RGB16UI),V===i.UNSIGNED_INT&&(et=i.RGB32UI),V===i.BYTE&&(et=i.RGB8I),V===i.SHORT&&(et=i.RGB16I),V===i.INT&&(et=i.RGB32I)),y===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),V===i.UNSIGNED_INT&&(et=i.RGBA32UI),V===i.BYTE&&(et=i.RGBA8I),V===i.SHORT&&(et=i.RGBA16I),V===i.INT&&(et=i.RGBA32I)),y===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),y===i.RGBA){const Rt=H?Wo:Qt.getTransfer(st);V===i.FLOAT&&(et=i.RGBA32F),V===i.HALF_FLOAT&&(et=i.RGBA16F),V===i.UNSIGNED_BYTE&&(et=Rt===ue?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function x(b,y){let V;return b?y===null||y===Vi||y===Ds?V=i.DEPTH24_STENCIL8:y===On?V=i.DEPTH32F_STENCIL8:y===_r&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Vi||y===Ds?V=i.DEPTH_COMPONENT24:y===On?V=i.DEPTH_COMPONENT32F:y===_r&&(V=i.DEPTH_COMPONENT16),V}function L(b,y){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==pn&&b.minFilter!==vn?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function R(b){const y=b.target;y.removeEventListener("dispose",R),P(y),y.isVideoTexture&&h.delete(y)}function A(b){const y=b.target;y.removeEventListener("dispose",A),M(y)}function P(b){const y=n.get(b);if(y.__webglInit===void 0)return;const V=b.source,st=d.get(V);if(st){const H=st[y.__cacheKey];H.usedTimes--,H.usedTimes===0&&E(b),Object.keys(st).length===0&&d.delete(V)}n.remove(b)}function E(b){const y=n.get(b);i.deleteTexture(y.__webglTexture);const V=b.source,st=d.get(V);delete st[y.__cacheKey],o.memory.textures--}function M(b){const y=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(y.__webglFramebuffer[st]))for(let H=0;H<y.__webglFramebuffer[st].length;H++)i.deleteFramebuffer(y.__webglFramebuffer[st][H]);else i.deleteFramebuffer(y.__webglFramebuffer[st]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[st])}else{if(Array.isArray(y.__webglFramebuffer))for(let st=0;st<y.__webglFramebuffer.length;st++)i.deleteFramebuffer(y.__webglFramebuffer[st]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let st=0;st<y.__webglColorRenderbuffer.length;st++)y.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[st]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=b.textures;for(let st=0,H=V.length;st<H;st++){const et=n.get(V[st]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(V[st])}n.remove(b)}let C=0;function N(){C=0}function F(){const b=C;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),C+=1,b}function W(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function X(b,y){const V=n.get(b);if(b.isVideoTexture&&bt(b),b.isRenderTargetTexture===!1&&b.version>0&&V.__version!==b.version){const st=b.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(V,b,y);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+y)}function Y(b,y){const V=n.get(b);if(b.version>0&&V.__version!==b.version){G(V,b,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+y)}function tt(b,y){const V=n.get(b);if(b.version>0&&V.__version!==b.version){G(V,b,y);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+y)}function Z(b,y){const V=n.get(b);if(b.version>0&&V.__version!==b.version){D(V,b,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+y)}const at={[ec]:i.REPEAT,[zi]:i.CLAMP_TO_EDGE,[nc]:i.MIRRORED_REPEAT},ct={[pn]:i.NEAREST,[ad]:i.NEAREST_MIPMAP_NEAREST,[Cr]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[jo]:i.LINEAR_MIPMAP_NEAREST,[Bi]:i.LINEAR_MIPMAP_LINEAR},Et={[ud]:i.NEVER,[_d]:i.ALWAYS,[dd]:i.LESS,[Du]:i.LEQUAL,[fd]:i.EQUAL,[gd]:i.GEQUAL,[pd]:i.GREATER,[md]:i.NOTEQUAL};function lt(b,y){if(y.type===On&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===vn||y.magFilter===jo||y.magFilter===Cr||y.magFilter===Bi||y.minFilter===vn||y.minFilter===jo||y.minFilter===Cr||y.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,at[y.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,at[y.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,at[y.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ct[y.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ct[y.minFilter]),y.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Et[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===pn||y.minFilter!==Cr&&y.minFilter!==Bi||y.type===On&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ut(b,y){let V=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",R));const st=y.source;let H=d.get(st);H===void 0&&(H={},d.set(st,H));const et=W(y);if(et!==b.__cacheKey){H[et]===void 0&&(H[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),H[et].usedTimes++;const Rt=H[b.__cacheKey];Rt!==void 0&&(H[b.__cacheKey].usedTimes--,Rt.usedTimes===0&&E(y)),b.__cacheKey=et,b.__webglTexture=H[et].texture}return V}function G(b,y,V){let st=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(st=i.TEXTURE_3D);const H=ut(b,y),et=y.source;e.bindTexture(st,b.__webglTexture,i.TEXTURE0+V);const Rt=n.get(et);if(et.version!==Rt.__version||H===!0){e.activeTexture(i.TEXTURE0+V);const Q=Qt.getPrimaries(Qt.workingColorSpace),K=y.colorSpace===vi?null:Qt.getPrimaries(y.colorSpace),At=y.colorSpace===vi||Q===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let rt=_(y.image,!1,s.maxTextureSize);rt=Kt(y,rt);const ht=r.convert(y.format,y.colorSpace),St=r.convert(y.type);let dt=S(y.internalFormat,ht,St,y.colorSpace,y.isVideoTexture);lt(st,y);let ft;const Ht=y.mipmaps,Lt=y.isVideoTexture!==!0,Gt=Rt.__version===void 0||H===!0,I=et.dataReady,pt=L(y,rt);if(y.isDepthTexture)dt=x(y.format===Is,y.type),Gt&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,dt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,dt,rt.width,rt.height,0,ht,St,null));else if(y.isDataTexture)if(Ht.length>0){Lt&&Gt&&e.texStorage2D(i.TEXTURE_2D,pt,dt,Ht[0].width,Ht[0].height);for(let J=0,nt=Ht.length;J<nt;J++)ft=Ht[J],Lt?I&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ft.width,ft.height,ht,St,ft.data):e.texImage2D(i.TEXTURE_2D,J,dt,ft.width,ft.height,0,ht,St,ft.data);y.generateMipmaps=!1}else Lt?(Gt&&e.texStorage2D(i.TEXTURE_2D,pt,dt,rt.width,rt.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,ht,St,rt.data)):e.texImage2D(i.TEXTURE_2D,0,dt,rt.width,rt.height,0,ht,St,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Lt&&Gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,dt,Ht[0].width,Ht[0].height,rt.depth);for(let J=0,nt=Ht.length;J<nt;J++)if(ft=Ht[J],y.format!==Rn)if(ht!==null)if(Lt){if(I)if(y.layerUpdates.size>0){const vt=mh(ft.width,ft.height,y.format,y.type);for(const xt of y.layerUpdates){const Nt=ft.data.subarray(xt*vt/ft.data.BYTES_PER_ELEMENT,(xt+1)*vt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,xt,ft.width,ft.height,1,ht,Nt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ft.width,ft.height,rt.depth,ht,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,dt,ft.width,ft.height,rt.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ft.width,ft.height,rt.depth,ht,St,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,dt,ft.width,ft.height,rt.depth,0,ht,St,ft.data)}else{Lt&&Gt&&e.texStorage2D(i.TEXTURE_2D,pt,dt,Ht[0].width,Ht[0].height);for(let J=0,nt=Ht.length;J<nt;J++)ft=Ht[J],y.format!==Rn?ht!==null?Lt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ft.width,ft.height,ht,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,J,dt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?I&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ft.width,ft.height,ht,St,ft.data):e.texImage2D(i.TEXTURE_2D,J,dt,ft.width,ft.height,0,ht,St,ft.data)}else if(y.isDataArrayTexture)if(Lt){if(Gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,dt,rt.width,rt.height,rt.depth),I)if(y.layerUpdates.size>0){const J=mh(rt.width,rt.height,y.format,y.type);for(const nt of y.layerUpdates){const vt=rt.data.subarray(nt*J/rt.data.BYTES_PER_ELEMENT,(nt+1)*J/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,rt.width,rt.height,1,ht,St,vt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ht,St,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,dt,rt.width,rt.height,rt.depth,0,ht,St,rt.data);else if(y.isData3DTexture)Lt?(Gt&&e.texStorage3D(i.TEXTURE_3D,pt,dt,rt.width,rt.height,rt.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ht,St,rt.data)):e.texImage3D(i.TEXTURE_3D,0,dt,rt.width,rt.height,rt.depth,0,ht,St,rt.data);else if(y.isFramebufferTexture){if(Gt)if(Lt)e.texStorage2D(i.TEXTURE_2D,pt,dt,rt.width,rt.height);else{let J=rt.width,nt=rt.height;for(let vt=0;vt<pt;vt++)e.texImage2D(i.TEXTURE_2D,vt,dt,J,nt,0,ht,St,null),J>>=1,nt>>=1}}else if(Ht.length>0){if(Lt&&Gt){const J=Pt(Ht[0]);e.texStorage2D(i.TEXTURE_2D,pt,dt,J.width,J.height)}for(let J=0,nt=Ht.length;J<nt;J++)ft=Ht[J],Lt?I&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ht,St,ft):e.texImage2D(i.TEXTURE_2D,J,dt,ht,St,ft);y.generateMipmaps=!1}else if(Lt){if(Gt){const J=Pt(rt);e.texStorage2D(i.TEXTURE_2D,pt,dt,J.width,J.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,St,rt)}else e.texImage2D(i.TEXTURE_2D,0,dt,ht,St,rt);m(y)&&p(st),Rt.__version=et.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function D(b,y,V){if(y.image.length!==6)return;const st=ut(b,y),H=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+V);const et=n.get(H);if(H.version!==et.__version||st===!0){e.activeTexture(i.TEXTURE0+V);const Rt=Qt.getPrimaries(Qt.workingColorSpace),Q=y.colorSpace===vi?null:Qt.getPrimaries(y.colorSpace),K=y.colorSpace===vi||Rt===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const At=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,ht=[];for(let nt=0;nt<6;nt++)!At&&!rt?ht[nt]=_(y.image[nt],!0,s.maxCubemapSize):ht[nt]=rt?y.image[nt].image:y.image[nt],ht[nt]=Kt(y,ht[nt]);const St=ht[0],dt=r.convert(y.format,y.colorSpace),ft=r.convert(y.type),Ht=S(y.internalFormat,dt,ft,y.colorSpace),Lt=y.isVideoTexture!==!0,Gt=et.__version===void 0||st===!0,I=H.dataReady;let pt=L(y,St);lt(i.TEXTURE_CUBE_MAP,y);let J;if(At){Lt&&Gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Ht,St.width,St.height);for(let nt=0;nt<6;nt++){J=ht[nt].mipmaps;for(let vt=0;vt<J.length;vt++){const xt=J[vt];y.format!==Rn?dt!==null?Lt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,0,0,xt.width,xt.height,dt,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,Ht,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,0,0,xt.width,xt.height,dt,ft,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,Ht,xt.width,xt.height,0,dt,ft,xt.data)}}}else{if(J=y.mipmaps,Lt&&Gt){J.length>0&&pt++;const nt=Pt(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Ht,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(rt){Lt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ht[nt].width,ht[nt].height,dt,ft,ht[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ht,ht[nt].width,ht[nt].height,0,dt,ft,ht[nt].data);for(let vt=0;vt<J.length;vt++){const Nt=J[vt].image[nt].image;Lt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,0,0,Nt.width,Nt.height,dt,ft,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,Ht,Nt.width,Nt.height,0,dt,ft,Nt.data)}}else{Lt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,dt,ft,ht[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ht,dt,ft,ht[nt]);for(let vt=0;vt<J.length;vt++){const xt=J[vt];Lt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,0,0,dt,ft,xt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,Ht,dt,ft,xt.image[nt])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),et.__version=H.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function q(b,y,V,st,H,et){const Rt=r.convert(V.format,V.colorSpace),Q=r.convert(V.type),K=S(V.internalFormat,Rt,Q,V.colorSpace),At=n.get(y),rt=n.get(V);if(rt.__renderTarget=y,!At.__hasExternalTextures){const ht=Math.max(1,y.width>>et),St=Math.max(1,y.height>>et);H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?e.texImage3D(H,et,K,ht,St,y.depth,0,Rt,Q,null):e.texImage2D(H,et,K,ht,St,0,Rt,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),Dt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,H,rt.__webglTexture,0,_t(y)):(H===i.TEXTURE_2D||H>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,H,rt.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function z(b,y,V){if(i.bindRenderbuffer(i.RENDERBUFFER,b),y.depthBuffer){const st=y.depthTexture,H=st&&st.isDepthTexture?st.type:null,et=x(y.stencilBuffer,H),Rt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=_t(y);Dt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,et,y.width,y.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,et,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,et,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,b)}else{const st=y.textures;for(let H=0;H<st.length;H++){const et=st[H],Rt=r.convert(et.format,et.colorSpace),Q=r.convert(et.type),K=S(et.internalFormat,Rt,Q,et.colorSpace),At=_t(y);V&&Dt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,K,y.width,y.height):Dt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,K,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,K,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function it(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=n.get(y.depthTexture);st.__renderTarget=y,(!st.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);const H=st.__webglTexture,et=_t(y);if(y.depthTexture.format===Es)Dt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0);else if(y.depthTexture.format===Is)Dt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function mt(b){const y=n.get(b),V=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){const st=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),st){const H=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,st.removeEventListener("dispose",H)};st.addEventListener("dispose",H),y.__depthDisposeCallback=H}y.__boundDepthTexture=st}if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");it(y.__webglFramebuffer,b)}else if(V){y.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[st]),y.__webglDepthbuffer[st]===void 0)y.__webglDepthbuffer[st]=i.createRenderbuffer(),z(y.__webglDepthbuffer[st],b,!1);else{const H=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),z(y.__webglDepthbuffer,b,!1);else{const st=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,H)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(b,y,V){const st=n.get(b);y!==void 0&&q(st.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&mt(b)}function It(b){const y=b.texture,V=n.get(b),st=n.get(y);b.addEventListener("dispose",A);const H=b.textures,et=b.isWebGLCubeRenderTarget===!0,Rt=H.length>1;if(Rt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=y.version,o.memory.textures++),et){V.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[Q]=[];for(let K=0;K<y.mipmaps.length;K++)V.__webglFramebuffer[Q][K]=i.createFramebuffer()}else V.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let Q=0;Q<y.mipmaps.length;Q++)V.__webglFramebuffer[Q]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let Q=0,K=H.length;Q<K;Q++){const At=n.get(H[Q]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&Dt(b)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Q=0;Q<H.length;Q++){const K=H[Q];V.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[Q]);const At=r.convert(K.format,K.colorSpace),rt=r.convert(K.type),ht=S(K.internalFormat,At,rt,K.colorSpace,b.isXRRenderTarget===!0),St=_t(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,ht,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,V.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),z(V.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),lt(i.TEXTURE_CUBE_MAP,y);for(let Q=0;Q<6;Q++)if(y.mipmaps&&y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)q(V.__webglFramebuffer[Q][K],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,K);else q(V.__webglFramebuffer[Q],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let Q=0,K=H.length;Q<K;Q++){const At=H[Q],rt=n.get(At);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),lt(i.TEXTURE_2D,At),q(V.__webglFramebuffer,b,At,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D,0),m(At)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Q=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,st.__webglTexture),lt(Q,y),y.mipmaps&&y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)q(V.__webglFramebuffer[K],b,y,i.COLOR_ATTACHMENT0,Q,K);else q(V.__webglFramebuffer,b,y,i.COLOR_ATTACHMENT0,Q,0);m(y)&&p(Q),e.unbindTexture()}b.depthBuffer&&mt(b)}function Ft(b){const y=b.textures;for(let V=0,st=y.length;V<st;V++){const H=y[V];if(m(H)){const et=v(b),Rt=n.get(H).__webglTexture;e.bindTexture(et,Rt),p(et),e.unbindTexture()}}}const Wt=[],U=[];function yt(b){if(b.samples>0){if(Dt(b)===!1){const y=b.textures,V=b.width,st=b.height;let H=i.COLOR_BUFFER_BIT;const et=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(b),Q=y.length>1;if(Q)for(let K=0;K<y.length;K++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let K=0;K<y.length;K++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(H|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(H|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[K]);const At=n.get(y[K]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,At,0)}i.blitFramebuffer(0,0,V,st,0,0,V,st,H,i.NEAREST),c===!0&&(Wt.length=0,U.length=0,Wt.push(i.COLOR_ATTACHMENT0+K),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Wt.push(et),U.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let K=0;K<y.length;K++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[K]);const At=n.get(y[K]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,At,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function _t(b){return Math.min(s.maxSamples,b.samples)}function Dt(b){const y=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function bt(b){const y=o.render.frame;h.get(b)!==y&&(h.set(b,y),b.update())}function Kt(b,y){const V=b.colorSpace,st=b.format,H=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||V!==zs&&V!==vi&&(Qt.getTransfer(V)===ue?(st!==Rn||H!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function Pt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=tt,this.setTextureCube=Z,this.rebindTextures=gt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=q,this.useMultisampledRTT=Dt}function A1(i,t){function e(n,s=vi){let r;const o=Qt.getTransfer(s);if(n===ai)return i.UNSIGNED_BYTE;if(n===qc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Su)return i.BYTE;if(n===Eu)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===Xc)return i.INT;if(n===Vi)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===si)return i.HALF_FLOAT;if(n===wu)return i.ALPHA;if(n===bu)return i.RGB;if(n===Rn)return i.RGBA;if(n===Au)return i.LUMINANCE;if(n===Ru)return i.LUMINANCE_ALPHA;if(n===Es)return i.DEPTH_COMPONENT;if(n===Is)return i.DEPTH_STENCIL;if(n===xr)return i.RED;if(n===Zc)return i.RED_INTEGER;if(n===Cu)return i.RG;if(n===Kc)return i.RG_INTEGER;if(n===$c)return i.RGBA_INTEGER;if(n===So||n===Eo||n===To||n===wo)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===So)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===So)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ic||n===sc||n===rc||n===oc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ac||n===cc||n===lc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ac||n===cc)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===xc||n===vc||n===Mc||n===yc||n===Sc||n===Ec)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_c)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ec)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bo||n===Tc||n===wc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===bo)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pu||n===bc||n===Ac||n===Rc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===bo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ac)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class R1 extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ue extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const C1={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(C1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const P1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L1=`
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

}`;class D1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new He,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Mn({vertexShader:P1,fragmentShader:L1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ut(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I1 extends Gi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new D1,m=e.getContextAttributes();let p=null,v=null;const S=[],x=[],L=new Tt;let R=null;const A=new un;A.viewport=new ve;const P=new un;P.viewport=new ve;const E=[A,P],M=new R1;let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let D=S[G];return D===void 0&&(D=new wa,S[G]=D),D.getTargetRaySpace()},this.getControllerGrip=function(G){let D=S[G];return D===void 0&&(D=new wa,S[G]=D),D.getGripSpace()},this.getHand=function(G){let D=S[G];return D===void 0&&(D=new wa,S[G]=D),D.getHandSpace()};function F(G){const D=x.indexOf(G.inputSource);if(D===-1)return;const q=S[D];q!==void 0&&(q.update(G.inputSource,G.frame,l||o),q.dispatchEvent({type:G.type,data:G.inputSource}))}function W(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",X);for(let G=0;G<S.length;G++){const D=x[G];D!==null&&(x[G]=null,S[G].disconnect(D))}C=null,N=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,v=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",W),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const D={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,D),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ci(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let D=null,q=null,z=null;m.depth&&(z=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,D=m.stencil?Is:Es,q=m.stencil?Ds:Vi);const it={colorFormat:e.RGBA8,depthFormat:z,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(it),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new ci(d.textureWidth,d.textureHeight,{format:Rn,type:ai,depthTexture:new tl(d.textureWidth,d.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(G){for(let D=0;D<G.removed.length;D++){const q=G.removed[D],z=x.indexOf(q);z>=0&&(x[z]=null,S[z].disconnect(q))}for(let D=0;D<G.added.length;D++){const q=G.added[D];let z=x.indexOf(q);if(z===-1){for(let mt=0;mt<S.length;mt++)if(mt>=x.length){x.push(q),z=mt;break}else if(x[mt]===null){x[mt]=q,z=mt;break}if(z===-1)break}const it=S[z];it&&it.connect(q)}}const Y=new w,tt=new w;function Z(G,D,q){Y.setFromMatrixPosition(D.matrixWorld),tt.setFromMatrixPosition(q.matrixWorld);const z=Y.distanceTo(tt),it=D.projectionMatrix.elements,mt=q.projectionMatrix.elements,gt=it[14]/(it[10]-1),It=it[14]/(it[10]+1),Ft=(it[9]+1)/it[5],Wt=(it[9]-1)/it[5],U=(it[8]-1)/it[0],yt=(mt[8]+1)/mt[0],_t=gt*U,Dt=gt*yt,bt=z/(-U+yt),Kt=bt*-U;if(D.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Kt),G.translateZ(bt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),it[10]===-1)G.projectionMatrix.copy(D.projectionMatrix),G.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{const Pt=gt+bt,b=It+bt,y=_t-Kt,V=Dt+(z-Kt),st=Ft*It/b*Pt,H=Wt*It/b*Pt;G.projectionMatrix.makePerspective(y,V,st,H,Pt,b),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function at(G,D){D===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(D.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let D=G.near,q=G.far;_.texture!==null&&(_.depthNear>0&&(D=_.depthNear),_.depthFar>0&&(q=_.depthFar)),M.near=P.near=A.near=D,M.far=P.far=A.far=q,(C!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,N=M.far),A.layers.mask=G.layers.mask|2,P.layers.mask=G.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;const z=G.parent,it=M.cameras;at(M,z);for(let mt=0;mt<it.length;mt++)at(it[mt],z);it.length===2?Z(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),ct(G,M,z)};function ct(G,D,q){q===null?G.matrix.copy(D.matrixWorld):(G.matrix.copy(q.matrixWorld),G.matrix.invert(),G.matrix.multiply(D.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(D.projectionMatrix),G.projectionMatrixInverse.copy(D.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Cc*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Et=null;function lt(G,D){if(h=D.getViewerPose(l||o),g=D,h!==null){const q=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let z=!1;q.length!==M.cameras.length&&(M.cameras.length=0,z=!0);for(let mt=0;mt<q.length;mt++){const gt=q[mt];let It=null;if(f!==null)It=f.getViewport(gt);else{const Wt=u.getViewSubImage(d,gt);It=Wt.viewport,mt===0&&(t.setRenderTargetTextures(v,Wt.colorTexture,d.ignoreDepthValues?void 0:Wt.depthStencilTexture),t.setRenderTarget(v))}let Ft=E[mt];Ft===void 0&&(Ft=new un,Ft.layers.enable(mt),Ft.viewport=new ve,E[mt]=Ft),Ft.matrix.fromArray(gt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(gt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(It.x,It.y,It.width,It.height),mt===0&&(M.matrix.copy(Ft.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),z===!0&&M.cameras.push(Ft)}const it=s.enabledFeatures;if(it&&it.includes("depth-sensing")){const mt=u.getDepthInformation(q[0]);mt&&mt.isValid&&mt.texture&&_.init(t,mt,s.renderState)}}for(let q=0;q<S.length;q++){const z=x[q],it=S[q];z!==null&&it!==void 0&&it.update(z,D,l||o)}Et&&Et(G,D),D.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:D}),g=null}const ut=new Gu;ut.setAnimationLoop(lt),this.setAnimationLoop=function(G){Et=G},this.dispose=function(){}}}const Pi=new Vn,U1=new ce;function N1(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ku(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),S=v.envMap,x=v.envMapRotation;S&&(m.envMap.value=S,Pi.copy(x),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),m.envMapRotation.value.setFromMatrix4(U1.makeRotationFromEuler(Pi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function F1(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,S){const x=S.program;n.uniformBlockBinding(v,x)}function l(v,S){let x=s[v.id];x===void 0&&(g(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",m));const L=S.program;n.updateUBOMapping(v,L);const R=t.render.frame;r[v.id]!==R&&(d(v),r[v.id]=R)}function h(v){const S=u();v.__bindingPointIndex=S;const x=i.createBuffer(),L=v.__size,R=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,L,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const S=s[v.id],x=v.uniforms,L=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,A=x.length;R<A;R++){const P=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,M=P.length;E<M;E++){const C=P[E];if(f(C,R,E,L)===!0){const N=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let X=0;X<F.length;X++){const Y=F[X],tt=_(Y);typeof Y=="number"||typeof Y=="boolean"?(C.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,N+W,C.__data)):Y.isMatrix3?(C.__data[0]=Y.elements[0],C.__data[1]=Y.elements[1],C.__data[2]=Y.elements[2],C.__data[3]=0,C.__data[4]=Y.elements[3],C.__data[5]=Y.elements[4],C.__data[6]=Y.elements[5],C.__data[7]=0,C.__data[8]=Y.elements[6],C.__data[9]=Y.elements[7],C.__data[10]=Y.elements[8],C.__data[11]=0):(Y.toArray(C.__data,W),W+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,S,x,L){const R=v.value,A=S+"_"+x;if(L[A]===void 0)return typeof R=="number"||typeof R=="boolean"?L[A]=R:L[A]=R.clone(),!0;{const P=L[A];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return L[A]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(v){const S=v.uniforms;let x=0;const L=16;for(let A=0,P=S.length;A<P;A++){const E=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,C=E.length;M<C;M++){const N=E[M],F=Array.isArray(N.value)?N.value:[N.value];for(let W=0,X=F.length;W<X;W++){const Y=F[W],tt=_(Y),Z=x%L,at=Z%tt.boundary,ct=Z+at;x+=at,ct!==0&&L-ct<tt.storage&&(x+=L-ct),N.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=tt.storage}}}const R=x%L;return R>0&&(x+=L-R),v.__size=x,v.__cache={},this}function _(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),S}function m(v){const S=v.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class O1{constructor(t={}){const{canvas:e=Md(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=yi,this.toneMappingExposure=1;const x=this;let L=!1,R=0,A=0,P=null,E=-1,M=null;const C=new ve,N=new ve;let F=null;const W=new Yt(0);let X=0,Y=e.width,tt=e.height,Z=1,at=null,ct=null;const Et=new ve(0,0,Y,tt),lt=new ve(0,0,Y,tt);let ut=!1;const G=new Jc;let D=!1,q=!1;const z=new ce,it=new ce,mt=new w,gt=new ve,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function Wt(){return P===null?Z:1}let U=n;function yt(T,B){return e.getContext(T,B)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wc}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),U===null){const B="webgl2";if(U=yt(B,T),U===null)throw yt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let _t,Dt,bt,Kt,Pt,b,y,V,st,H,et,Rt,Q,K,At,rt,ht,St,dt,ft,Ht,Lt,Gt,I;function pt(){_t=new Hm(U),_t.init(),Lt=new A1(U,_t),Dt=new Fm(U,_t,t,Lt),bt=new T1(U,_t),Dt.reverseDepthBuffer&&d&&bt.buffers.depth.setReversed(!0),Kt=new Xm(U),Pt=new l1,b=new b1(U,_t,bt,Pt,Dt,Lt,Kt),y=new zm(x),V=new Vm(x),st=new jd(U),Gt=new Um(U,st),H=new Gm(U,st,Kt,Gt),et=new Ym(U,H,st,Kt),dt=new qm(U,Dt,b),rt=new Om(Pt),Rt=new c1(x,y,V,_t,Dt,Gt,rt),Q=new N1(x,Pt),K=new u1,At=new _1(_t),St=new Im(x,y,V,bt,et,f,c),ht=new S1(x,et,Dt),I=new F1(U,Kt,Dt,bt),ft=new Nm(U,_t,Kt),Ht=new Wm(U,_t,Kt),Kt.programs=Rt.programs,x.capabilities=Dt,x.extensions=_t,x.properties=Pt,x.renderLists=K,x.shadowMap=ht,x.state=bt,x.info=Kt}pt();const J=new I1(x,U);this.xr=J,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=_t.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=_t.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(Y,tt,!1))},this.getSize=function(T){return T.set(Y,tt)},this.setSize=function(T,B,$=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,tt=B,e.width=Math.floor(T*Z),e.height=Math.floor(B*Z),$===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(Y*Z,tt*Z).floor()},this.setDrawingBufferSize=function(T,B,$){Y=T,tt=B,Z=$,e.width=Math.floor(T*$),e.height=Math.floor(B*$),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(Et)},this.setViewport=function(T,B,$,j){T.isVector4?Et.set(T.x,T.y,T.z,T.w):Et.set(T,B,$,j),bt.viewport(C.copy(Et).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(lt)},this.setScissor=function(T,B,$,j){T.isVector4?lt.set(T.x,T.y,T.z,T.w):lt.set(T,B,$,j),bt.scissor(N.copy(lt).multiplyScalar(Z).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(T){bt.setScissorTest(ut=T)},this.setOpaqueSort=function(T){at=T},this.setTransparentSort=function(T){ct=T},this.getClearColor=function(T){return T.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(T=!0,B=!0,$=!0){let j=0;if(T){let k=!1;if(P!==null){const Mt=P.texture.format;k=Mt===$c||Mt===Kc||Mt===Zc}if(k){const Mt=P.texture.type,Ct=Mt===ai||Mt===Vi||Mt===_r||Mt===Ds||Mt===qc||Mt===Yc,zt=St.getClearColor(),Bt=St.getClearAlpha(),Xt=zt.r,$t=zt.g,kt=zt.b;Ct?(g[0]=Xt,g[1]=$t,g[2]=kt,g[3]=Bt,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Xt,_[1]=$t,_[2]=kt,_[3]=Bt,U.clearBufferiv(U.COLOR,0,_))}else j|=U.COLOR_BUFFER_BIT}B&&(j|=U.DEPTH_BUFFER_BIT),$&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),K.dispose(),At.dispose(),Pt.dispose(),y.dispose(),V.dispose(),et.dispose(),Gt.dispose(),I.dispose(),Rt.dispose(),J.dispose(),J.removeEventListener("sessionstart",Se),J.removeEventListener("sessionend",xe),he.stop()};function nt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const T=Kt.autoReset,B=ht.enabled,$=ht.autoUpdate,j=ht.needsUpdate,k=ht.type;pt(),Kt.autoReset=T,ht.enabled=B,ht.autoUpdate=$,ht.needsUpdate=j,ht.type=k}function xt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Nt(T){const B=T.target;B.removeEventListener("dispose",Nt),ee(B)}function ee(T){me(T),Pt.remove(T)}function me(T){const B=Pt.get(T).programs;B!==void 0&&(B.forEach(function($){Rt.releaseProgram($)}),T.isShaderMaterial&&Rt.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,$,j,k,Mt){B===null&&(B=It);const Ct=k.isMesh&&k.matrixWorld.determinant()<0,zt=Ws(T,B,$,j,k);bt.setMaterial(j,Ct);let Bt=$.index,Xt=1;if(j.wireframe===!0){if(Bt=H.getWireframeAttribute($),Bt===void 0)return;Xt=2}const $t=$.drawRange,kt=$.attributes.position;let ne=$t.start*Xt,pe=($t.start+$t.count)*Xt;Mt!==null&&(ne=Math.max(ne,Mt.start*Xt),pe=Math.min(pe,(Mt.start+Mt.count)*Xt)),Bt!==null?(ne=Math.max(ne,0),pe=Math.min(pe,Bt.count)):kt!=null&&(ne=Math.max(ne,0),pe=Math.min(pe,kt.count));const ge=pe-ne;if(ge<0||ge===1/0)return;Gt.setup(k,j,zt,$,Bt);let je,re=ft;if(Bt!==null&&(je=st.get(Bt),re=Ht,re.setIndex(je)),k.isMesh)j.wireframe===!0?(bt.setLineWidth(j.wireframeLinewidth*Wt()),re.setMode(U.LINES)):re.setMode(U.TRIANGLES);else if(k.isLine){let Vt=j.linewidth;Vt===void 0&&(Vt=1),bt.setLineWidth(Vt*Wt()),k.isLineSegments?re.setMode(U.LINES):k.isLineLoop?re.setMode(U.LINE_LOOP):re.setMode(U.LINE_STRIP)}else k.isPoints?re.setMode(U.POINTS):k.isSprite&&re.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)re.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))re.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Vt=k._multiDrawStarts,Wn=k._multiDrawCounts,oe=k._multiDrawCount,Sn=Bt?st.get(Bt).bytesPerElement:1,Zi=Pt.get(j).currentProgram.getUniforms();for(let nn=0;nn<oe;nn++)Zi.setValue(U,"_gl_DrawID",nn),re.render(Vt[nn]/Sn,Wn[nn])}else if(k.isInstancedMesh)re.renderInstances(ne,ge,k.count);else if($.isInstancedBufferGeometry){const Vt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Wn=Math.min($.instanceCount,Vt);re.renderInstances(ne,ge,Wn)}else re.render(ne,ge)};function ot(T,B,$){T.transparent===!0&&T.side===Te&&T.forceSinglePass===!1?(T.side=Ze,T.needsUpdate=!0,li(T,B,$),T.side=Ei,T.needsUpdate=!0,li(T,B,$),T.side=Te):li(T,B,$)}this.compile=function(T,B,$=null){$===null&&($=T),p=At.get($),p.init(B),S.push(p),$.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==$&&T.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const j=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const Mt=k.material;if(Mt)if(Array.isArray(Mt))for(let Ct=0;Ct<Mt.length;Ct++){const zt=Mt[Ct];ot(zt,$,k),j.add(zt)}else ot(Mt,$,k),j.add(Mt)}),S.pop(),p=null,j},this.compileAsync=function(T,B,$=null){const j=this.compile(T,B,$);return new Promise(k=>{function Mt(){if(j.forEach(function(Ct){Pt.get(Ct).currentProgram.isReady()&&j.delete(Ct)}),j.size===0){k(T);return}setTimeout(Mt,10)}_t.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Zt=null;function fe(T){Zt&&Zt(T)}function Se(){he.stop()}function xe(){he.start()}const he=new Gu;he.setAnimationLoop(fe),typeof self<"u"&&he.setContext(self),this.setAnimationLoop=function(T){Zt=T,J.setAnimationLoop(T),T===null?he.stop():he.start()},J.addEventListener("sessionstart",Se),J.addEventListener("sessionend",xe),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(B),B=J.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,B,P),p=At.get(T,S.length),p.init(B),S.push(p),it.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),G.setFromProjectionMatrix(it),q=this.localClippingEnabled,D=rt.init(this.clippingPlanes,q),m=K.get(T,v.length),m.init(),v.push(m),J.enabled===!0&&J.isPresenting===!0){const Mt=x.xr.getDepthSensingMesh();Mt!==null&&$e(Mt,B,-1/0,x.sortObjects)}$e(T,B,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(at,ct),Ft=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Ft&&St.addToRenderList(m,T),this.info.render.frame++,D===!0&&rt.beginShadows();const $=p.state.shadowsArray;ht.render($,T,B),D===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,k=m.transmissive;if(p.setupLights(),B.isArrayCamera){const Mt=B.cameras;if(k.length>0)for(let Ct=0,zt=Mt.length;Ct<zt;Ct++){const Bt=Mt[Ct];br(j,k,T,Bt)}Ft&&St.render(T);for(let Ct=0,zt=Mt.length;Ct<zt;Ct++){const Bt=Mt[Ct];yn(m,T,Bt,Bt.viewport)}}else k.length>0&&br(j,k,T,B),Ft&&St.render(T),yn(m,T,B);P!==null&&(b.updateMultisampleRenderTarget(P),b.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(x,T,B),Gt.resetDefaultState(),E=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],D===!0&&rt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function $e(T,B,$,j){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||G.intersectsSprite(T)){j&&gt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(it);const Ct=et.update(T),zt=T.material;zt.visible&&m.push(T,Ct,zt,$,gt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||G.intersectsObject(T))){const Ct=et.update(T),zt=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),gt.copy(T.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),gt.copy(Ct.boundingSphere.center)),gt.applyMatrix4(T.matrixWorld).applyMatrix4(it)),Array.isArray(zt)){const Bt=Ct.groups;for(let Xt=0,$t=Bt.length;Xt<$t;Xt++){const kt=Bt[Xt],ne=zt[kt.materialIndex];ne&&ne.visible&&m.push(T,Ct,ne,$,gt.z,kt)}}else zt.visible&&m.push(T,Ct,zt,$,gt.z,null)}}const Mt=T.children;for(let Ct=0,zt=Mt.length;Ct<zt;Ct++)$e(Mt[Ct],B,$,j)}function yn(T,B,$,j){const k=T.opaque,Mt=T.transmissive,Ct=T.transparent;p.setupLightsView($),D===!0&&rt.setGlobalState(x.clippingPlanes,$),j&&bt.viewport(C.copy(j)),k.length>0&&Gn(k,B,$),Mt.length>0&&Gn(Mt,B,$),Ct.length>0&&Gn(Ct,B,$),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function br(T,B,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new ci(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?si:ai,minFilter:Bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const Mt=p.state.transmissionRenderTarget[j.id],Ct=j.viewport||C;Mt.setSize(Ct.z,Ct.w);const zt=x.getRenderTarget();x.setRenderTarget(Mt),x.getClearColor(W),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),Ft&&St.render($);const Bt=x.toneMapping;x.toneMapping=yi;const Xt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),D===!0&&rt.setGlobalState(x.clippingPlanes,j),Gn(T,$,j),b.updateMultisampleRenderTarget(Mt),b.updateRenderTargetMipmap(Mt),_t.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let kt=0,ne=B.length;kt<ne;kt++){const pe=B[kt],ge=pe.object,je=pe.geometry,re=pe.material,Vt=pe.group;if(re.side===Te&&ge.layers.test(j.layers)){const Wn=re.side;re.side=Ze,re.needsUpdate=!0,Hs(ge,$,j,je,re,Vt),re.side=Wn,re.needsUpdate=!0,$t=!0}}$t===!0&&(b.updateMultisampleRenderTarget(Mt),b.updateRenderTargetMipmap(Mt))}x.setRenderTarget(zt),x.setClearColor(W,X),Xt!==void 0&&(j.viewport=Xt),x.toneMapping=Bt}function Gn(T,B,$){const j=B.isScene===!0?B.overrideMaterial:null;for(let k=0,Mt=T.length;k<Mt;k++){const Ct=T[k],zt=Ct.object,Bt=Ct.geometry,Xt=j===null?Ct.material:j,$t=Ct.group;zt.layers.test($.layers)&&Hs(zt,B,$,Bt,Xt,$t)}}function Hs(T,B,$,j,k,Mt){T.onBeforeRender(x,B,$,j,k,Mt),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(x,B,$,j,T,Mt),k.transparent===!0&&k.side===Te&&k.forceSinglePass===!1?(k.side=Ze,k.needsUpdate=!0,x.renderBufferDirect($,B,j,k,T,Mt),k.side=Ei,k.needsUpdate=!0,x.renderBufferDirect($,B,j,k,T,Mt),k.side=Te):x.renderBufferDirect($,B,j,k,T,Mt),T.onAfterRender(x,B,$,j,k,Mt)}function li(T,B,$){B.isScene!==!0&&(B=It);const j=Pt.get(T),k=p.state.lights,Mt=p.state.shadowsArray,Ct=k.state.version,zt=Rt.getParameters(T,k.state,Mt,B,$),Bt=Rt.getProgramCacheKey(zt);let Xt=j.programs;j.environment=T.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(T.isMeshStandardMaterial?V:y).get(T.envMap||j.environment),j.envMapRotation=j.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Xt===void 0&&(T.addEventListener("dispose",Nt),Xt=new Map,j.programs=Xt);let $t=Xt.get(Bt);if($t!==void 0){if(j.currentProgram===$t&&j.lightsStateVersion===Ct)return Gs(T,zt),$t}else zt.uniforms=Rt.getUniforms(T),T.onBeforeCompile(zt,x),$t=Rt.acquireProgram(zt,Bt),Xt.set(Bt,$t),j.uniforms=zt.uniforms;const kt=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(kt.clippingPlanes=rt.uniform),Gs(T,zt),j.needsLights=Rr(T),j.lightsStateVersion=Ct,j.needsLights&&(kt.ambientLightColor.value=k.state.ambient,kt.lightProbe.value=k.state.probe,kt.directionalLights.value=k.state.directional,kt.directionalLightShadows.value=k.state.directionalShadow,kt.spotLights.value=k.state.spot,kt.spotLightShadows.value=k.state.spotShadow,kt.rectAreaLights.value=k.state.rectArea,kt.ltc_1.value=k.state.rectAreaLTC1,kt.ltc_2.value=k.state.rectAreaLTC2,kt.pointLights.value=k.state.point,kt.pointLightShadows.value=k.state.pointShadow,kt.hemisphereLights.value=k.state.hemi,kt.directionalShadowMap.value=k.state.directionalShadowMap,kt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,kt.spotShadowMap.value=k.state.spotShadowMap,kt.spotLightMatrix.value=k.state.spotLightMatrix,kt.spotLightMap.value=k.state.spotLightMap,kt.pointShadowMap.value=k.state.pointShadowMap,kt.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=$t,j.uniformsList=null,$t}function Yi(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Ro.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Gs(T,B){const $=Pt.get(T);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function Ws(T,B,$,j,k){B.isScene!==!0&&(B=It),b.resetTextureUnits();const Mt=B.fog,Ct=j.isMeshStandardMaterial?B.environment:null,zt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:zs,Bt=(j.isMeshStandardMaterial?V:y).get(j.envMap||Ct),Xt=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,$t=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),kt=!!$.morphAttributes.position,ne=!!$.morphAttributes.normal,pe=!!$.morphAttributes.color;let ge=yi;j.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ge=x.toneMapping);const je=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,re=je!==void 0?je.length:0,Vt=Pt.get(j),Wn=p.state.lights;if(D===!0&&(q===!0||T!==M)){const mn=T===M&&j.id===E;rt.setState(j,T,mn)}let oe=!1;j.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Wn.state.version||Vt.outputColorSpace!==zt||k.isBatchedMesh&&Vt.batching===!1||!k.isBatchedMesh&&Vt.batching===!0||k.isBatchedMesh&&Vt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Vt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Vt.instancing===!1||!k.isInstancedMesh&&Vt.instancing===!0||k.isSkinnedMesh&&Vt.skinning===!1||!k.isSkinnedMesh&&Vt.skinning===!0||k.isInstancedMesh&&Vt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Vt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Vt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Vt.instancingMorph===!1&&k.morphTexture!==null||Vt.envMap!==Bt||j.fog===!0&&Vt.fog!==Mt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==rt.numPlanes||Vt.numIntersection!==rt.numIntersection)||Vt.vertexAlphas!==Xt||Vt.vertexTangents!==$t||Vt.morphTargets!==kt||Vt.morphNormals!==ne||Vt.morphColors!==pe||Vt.toneMapping!==ge||Vt.morphTargetsCount!==re)&&(oe=!0):(oe=!0,Vt.__version=j.version);let Sn=Vt.currentProgram;oe===!0&&(Sn=li(j,B,k));let Zi=!1,nn=!1,Xs=!1;const _e=Sn.getUniforms(),Ln=Vt.uniforms;if(bt.useProgram(Sn.program)&&(Zi=!0,nn=!0,Xs=!0),j.id!==E&&(E=j.id,nn=!0),Zi||M!==T){bt.buffers.depth.getReversed()?(z.copy(T.projectionMatrix),Sd(z),Ed(z),_e.setValue(U,"projectionMatrix",z)):_e.setValue(U,"projectionMatrix",T.projectionMatrix),_e.setValue(U,"viewMatrix",T.matrixWorldInverse);const hi=_e.map.cameraPosition;hi!==void 0&&hi.setValue(U,mt.setFromMatrixPosition(T.matrixWorld)),Dt.logarithmicDepthBuffer&&_e.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&_e.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,nn=!0,Xs=!0)}if(k.isSkinnedMesh){_e.setOptional(U,k,"bindMatrix"),_e.setOptional(U,k,"bindMatrixInverse");const mn=k.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),_e.setValue(U,"boneTexture",mn.boneTexture,b))}k.isBatchedMesh&&(_e.setOptional(U,k,"batchingTexture"),_e.setValue(U,"batchingTexture",k._matricesTexture,b),_e.setOptional(U,k,"batchingIdTexture"),_e.setValue(U,"batchingIdTexture",k._indirectTexture,b),_e.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&_e.setValue(U,"batchingColorTexture",k._colorsTexture,b));const qs=$.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&dt.update(k,$,Sn),(nn||Vt.receiveShadow!==k.receiveShadow)&&(Vt.receiveShadow=k.receiveShadow,_e.setValue(U,"receiveShadow",k.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Ln.envMap.value=Bt,Ln.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&B.environment!==null&&(Ln.envMapIntensity.value=B.environmentIntensity),nn&&(_e.setValue(U,"toneMappingExposure",x.toneMappingExposure),Vt.needsLights&&Ar(Ln,Xs),Mt&&j.fog===!0&&Q.refreshFogUniforms(Ln,Mt),Q.refreshMaterialUniforms(Ln,j,Z,tt,p.state.transmissionRenderTarget[T.id]),Ro.upload(U,Yi(Vt),Ln,b)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ro.upload(U,Yi(Vt),Ln,b),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&_e.setValue(U,"center",k.center),_e.setValue(U,"modelViewMatrix",k.modelViewMatrix),_e.setValue(U,"normalMatrix",k.normalMatrix),_e.setValue(U,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const mn=j.uniformsGroups;for(let hi=0,ui=mn.length;hi<ui;hi++){const _l=mn[hi];I.update(_l,Sn),I.bind(_l,Sn)}}return Sn}function Ar(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Rr(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,B,$){Pt.get(T.texture).__webglTexture=B,Pt.get(T.depthTexture).__webglTexture=$;const j=Pt.get(T);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=$===void 0,j.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const $=Pt.get(T);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,$=0){P=T,R=B,A=$;let j=!0,k=null,Mt=!1,Ct=!1;if(T){const Bt=Pt.get(T);if(Bt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(U.FRAMEBUFFER,null),j=!1;else if(Bt.__webglFramebuffer===void 0)b.setupRenderTarget(T);else if(Bt.__hasExternalTextures)b.rebindTextures(T,Pt.get(T.texture).__webglTexture,Pt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const kt=T.depthTexture;if(Bt.__boundDepthTexture!==kt){if(kt!==null&&Pt.has(kt)&&(T.width!==kt.image.width||T.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(T)}}const Xt=T.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ct=!0);const $t=Pt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray($t[B])?k=$t[B][$]:k=$t[B],Mt=!0):T.samples>0&&b.useMultisampledRTT(T)===!1?k=Pt.get(T).__webglMultisampledFramebuffer:Array.isArray($t)?k=$t[$]:k=$t,C.copy(T.viewport),N.copy(T.scissor),F=T.scissorTest}else C.copy(Et).multiplyScalar(Z).floor(),N.copy(lt).multiplyScalar(Z).floor(),F=ut;if(bt.bindFramebuffer(U.FRAMEBUFFER,k)&&j&&bt.drawBuffers(T,k),bt.viewport(C),bt.scissor(N),bt.setScissorTest(F),Mt){const Bt=Pt.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Bt.__webglTexture,$)}else if(Ct){const Bt=Pt.get(T.texture),Xt=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Bt.__webglTexture,$||0,Xt)}E=-1},this.readRenderTargetPixels=function(T,B,$,j,k,Mt,Ct){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(zt=zt[Ct]),zt){bt.bindFramebuffer(U.FRAMEBUFFER,zt);try{const Bt=T.texture,Xt=Bt.format,$t=Bt.type;if(!Dt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-j&&$>=0&&$<=T.height-k&&U.readPixels(B,$,j,k,Lt.convert(Xt),Lt.convert($t),Mt)}finally{const Bt=P!==null?Pt.get(P).__webglFramebuffer:null;bt.bindFramebuffer(U.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(T,B,$,j,k,Mt,Ct){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(zt=zt[Ct]),zt){const Bt=T.texture,Xt=Bt.format,$t=Bt.type;if(!Dt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-j&&$>=0&&$<=T.height-k){bt.bindFramebuffer(U.FRAMEBUFFER,zt);const kt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,kt),U.bufferData(U.PIXEL_PACK_BUFFER,Mt.byteLength,U.STREAM_READ),U.readPixels(B,$,j,k,Lt.convert(Xt),Lt.convert($t),0);const ne=P!==null?Pt.get(P).__webglFramebuffer:null;bt.bindFramebuffer(U.FRAMEBUFFER,ne);const pe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await yd(U,pe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,kt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Mt),U.deleteBuffer(kt),U.deleteSync(pe),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,$=0){T.isTexture!==!0&&(rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const j=Math.pow(2,-$),k=Math.floor(T.image.width*j),Mt=Math.floor(T.image.height*j),Ct=B!==null?B.x:0,zt=B!==null?B.y:0;b.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,Ct,zt,k,Mt),bt.unbindTexture()},this.copyTextureToTexture=function(T,B,$=null,j=null,k=0){T.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,T=arguments[1],B=arguments[2],k=arguments[3]||0,$=null);let Mt,Ct,zt,Bt,Xt,$t,kt,ne,pe;const ge=T.isCompressedTexture?T.mipmaps[k]:T.image;$!==null?(Mt=$.max.x-$.min.x,Ct=$.max.y-$.min.y,zt=$.isBox3?$.max.z-$.min.z:1,Bt=$.min.x,Xt=$.min.y,$t=$.isBox3?$.min.z:0):(Mt=ge.width,Ct=ge.height,zt=ge.depth||1,Bt=0,Xt=0,$t=0),j!==null?(kt=j.x,ne=j.y,pe=j.z):(kt=0,ne=0,pe=0);const je=Lt.convert(B.format),re=Lt.convert(B.type);let Vt;B.isData3DTexture?(b.setTexture3D(B,0),Vt=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(b.setTexture2DArray(B,0),Vt=U.TEXTURE_2D_ARRAY):(b.setTexture2D(B,0),Vt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const Wn=U.getParameter(U.UNPACK_ROW_LENGTH),oe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Sn=U.getParameter(U.UNPACK_SKIP_PIXELS),Zi=U.getParameter(U.UNPACK_SKIP_ROWS),nn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ge.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ge.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Bt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Xt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,$t);const Xs=T.isDataArrayTexture||T.isData3DTexture,_e=B.isDataArrayTexture||B.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Ln=Pt.get(T),qs=Pt.get(B),mn=Pt.get(Ln.__renderTarget),hi=Pt.get(qs.__renderTarget);bt.bindFramebuffer(U.READ_FRAMEBUFFER,mn.__webglFramebuffer),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let ui=0;ui<zt;ui++)Xs&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.get(T).__webglTexture,k,$t+ui),T.isDepthTexture?(_e&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.get(B).__webglTexture,k,pe+ui),U.blitFramebuffer(Bt,Xt,Mt,Ct,kt,ne,Mt,Ct,U.DEPTH_BUFFER_BIT,U.NEAREST)):_e?U.copyTexSubImage3D(Vt,k,kt,ne,pe+ui,Bt,Xt,Mt,Ct):U.copyTexSubImage2D(Vt,k,kt,ne,pe+ui,Bt,Xt,Mt,Ct);bt.bindFramebuffer(U.READ_FRAMEBUFFER,null),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else _e?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Vt,k,kt,ne,pe,Mt,Ct,zt,je,re,ge.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Vt,k,kt,ne,pe,Mt,Ct,zt,je,ge.data):U.texSubImage3D(Vt,k,kt,ne,pe,Mt,Ct,zt,je,re,ge):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,k,kt,ne,Mt,Ct,je,re,ge.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,k,kt,ne,ge.width,ge.height,je,ge.data):U.texSubImage2D(U.TEXTURE_2D,k,kt,ne,Mt,Ct,je,re,ge);U.pixelStorei(U.UNPACK_ROW_LENGTH,Wn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,oe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Sn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Zi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,nn),k===0&&B.generateMipmaps&&U.generateMipmap(Vt),bt.unbindTexture()},this.copyTextureToTexture3D=function(T,B,$=null,j=null,k=0){return T.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,j=arguments[1]||null,T=arguments[2],B=arguments[3],k=arguments[4]||0),rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,B,$,j,k)},this.initRenderTarget=function(T){Pt.get(T).__webglFramebuffer===void 0&&b.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),bt.unbindTexture()},this.resetState=function(){R=0,A=0,P=null,bt.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class el{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new el(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class z1 extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Lc extends He{constructor(t=null,e=1,n=1,s,r,o,a,c,l=pn,h=pn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gh extends Ge{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ls=new ce,_h=new ce,$r=[],xh=new Wi,B1=new ce,Js=new Ut,Qs=new Xi;class k1 extends Ut{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,B1)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),xh.copy(t.boundingBox).applyMatrix4(ls),this.boundingBox.union(xh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),Qs.copy(t.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(Qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(n),t.ray.intersectsSphere(Qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ls),_h.multiplyMatrices(n,ls),Js.matrixWorld=_h,Js.raycast(t,$r);for(let o=0,a=$r.length;o<a;o++){const c=$r[o];c.instanceId=r,c.object=this,e.push(c)}$r.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new gh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Lc(new Float32Array(s*this.count),s,this.count,xr,On));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class nl extends qi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Io=new w,Uo=new w,vh=new ce,tr=new Xo,jr=new Xi,ba=new w,Mh=new w;class Ku extends Re{constructor(t=new ye,e=new nl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Io.fromBufferAttribute(e,s-1),Uo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Io.distanceTo(Uo);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(s),jr.radius+=r,t.ray.intersectsSphere(jr)===!1)return;vh.copy(s).invert(),tr.copy(t.ray).applyMatrix4(vh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),v=h.getX(_+1),S=Jr(this,t,tr,c,p,v);S&&e.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Jr(this,t,tr,c,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=Jr(this,t,tr,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Jr(this,t,tr,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Jr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Io.fromBufferAttribute(o,s),Uo.fromBufferAttribute(o,r),e.distanceSqToSegment(Io,Uo,ba,Mh)>n)return;ba.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ba);if(!(c<t.near||c>t.far))return{distance:c,point:Mh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const yh=new w,Sh=new w;class V1 extends Ku{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)yh.fromBufferAttribute(e,s),Sh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+yh.distanceTo(Sh);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class H1 extends qi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Eh=new ce,Dc=new Xo,Qr=new Xi,to=new w;class G1 extends Re{constructor(t=new ye,e=new H1){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,t.ray.intersectsSphere(Qr)===!1)return;Eh.copy(s).invert(),Dc.copy(t.ray).applyMatrix4(Eh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);to.fromBufferAttribute(u,m),Th(to,m,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)to.fromBufferAttribute(u,g),Th(to,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Th(i,t,e,n,s,r,o){const a=Dc.distanceSqToPoint(i);if(a<e){const c=new w;Dc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class wr extends He{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Tt:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new w,s=[],r=[],o=[],a=new w,c=new ce;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new w)}r[0]=new w,o[0]=new w;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ae(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ae(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class il extends Hn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Tt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class W1 extends il{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function sl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const eo=new w,Aa=new sl,Ra=new sl,Ca=new sl;class X1 extends Hn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new w){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(eo.subVectors(s[0],s[1]).add(s[0]),l=eo);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(eo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=eo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Aa.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),Ra.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),Ca.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Aa.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ra.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ca.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Aa.calc(c),Ra.calc(c),Ca.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new w().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function wh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function q1(i,t){const e=1-i;return e*e*t}function Y1(i,t){return 2*(1-i)*i*t}function Z1(i,t){return i*i*t}function ur(i,t,e,n){return q1(i,t)+Y1(i,e)+Z1(i,n)}function K1(i,t){const e=1-i;return e*e*e*t}function $1(i,t){const e=1-i;return 3*e*e*i*t}function j1(i,t){return 3*(1-i)*i*i*t}function J1(i,t){return i*i*i*t}function dr(i,t,e,n,s){return K1(i,t)+$1(i,e)+j1(i,n)+J1(i,s)}class $u extends Hn{constructor(t=new Tt,e=new Tt,n=new Tt,s=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Tt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(dr(t,s.x,r.x,o.x,a.x),dr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Q1 extends Hn{constructor(t=new w,e=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new w){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(dr(t,s.x,r.x,o.x,a.x),dr(t,s.y,r.y,o.y,a.y),dr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ju extends Hn{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class t_ extends Hn{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ju extends Hn{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ur(t,s.x,r.x,o.x),ur(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class e_ extends Hn{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ur(t,s.x,r.x,o.x),ur(t,s.y,r.y,o.y),ur(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qu extends Hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(wh(a,c.x,l.x,h.x,u.x),wh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Tt().fromArray(s))}return this}}var bh=Object.freeze({__proto__:null,ArcCurve:W1,CatmullRomCurve3:X1,CubicBezierCurve:$u,CubicBezierCurve3:Q1,EllipseCurve:il,LineCurve:ju,LineCurve3:t_,QuadraticBezierCurve:Ju,QuadraticBezierCurve3:e_,SplineCurve:Qu});class n_ extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new bh[s.type]().fromJSON(s))}return this}}class No extends n_{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ju(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Ju(this.currentPoint.clone(),new Tt(t,e),new Tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new $u(this.currentPoint.clone(),new Tt(t,e),new Tt(n,s),new Tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Qu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new il(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class rl extends ye{constructor(t=[new Tt(0,-.5),new Tt(.5,0),new Tt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ae(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new w,d=new Tt,f=new w,g=new w,_=new w;let m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let v=0;v<=e;v++){const S=n+v*h*s,x=Math.sin(S),L=Math.cos(S);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*x,u.y=t[R].y,u.z=t[R].x*L,o.push(u.x,u.y,u.z),d.x=v/e,d.y=R/(t.length-1),a.push(d.x,d.y);const A=c[3*R+0]*x,P=c[3*R+1],E=c[3*R+0]*L;l.push(A,P,E)}}for(let v=0;v<e;v++)for(let S=0;S<t.length-1;S++){const x=S+v*t.length,L=x,R=x+t.length,A=x+t.length+1,P=x+1;r.push(L,R,P),r.push(A,P,R)}this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("uv",new te(a,2)),this.setAttribute("normal",new te(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.points,t.segments,t.phiStart,t.phiLength)}}class ol extends rl{constructor(t=1,e=1,n=4,s=8){const r=new No;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new ol(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ns extends ye{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new w,h=new Tt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ns(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ii extends ye{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function v(){const x=new w,L=new w;let R=0;const A=(e-t)/n;for(let P=0;P<=r;P++){const E=[],M=P/r,C=M*(e-t)+t;for(let N=0;N<=s;N++){const F=N/s,W=F*c+a,X=Math.sin(W),Y=Math.cos(W);L.x=C*X,L.y=-M*n+m,L.z=C*Y,u.push(L.x,L.y,L.z),x.set(X,A,Y).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-M),E.push(g++)}_.push(E)}for(let P=0;P<s;P++)for(let E=0;E<r;E++){const M=_[E][P],C=_[E+1][P],N=_[E+1][P+1],F=_[E][P+1];(t>0||E!==0)&&(h.push(M,C,F),R+=3),(e>0||E!==r-1)&&(h.push(C,N,F),R+=3)}l.addGroup(p,R,0),p+=R}function S(x){const L=g,R=new Tt,A=new w;let P=0;const E=x===!0?t:e,M=x===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const C=g;for(let N=0;N<=s;N++){const W=N/s*c+a,X=Math.cos(W),Y=Math.sin(W);A.x=E*Y,A.y=m*M,A.z=E*X,u.push(A.x,A.y,A.z),d.push(0,M,0),R.x=X*.5+.5,R.y=Y*.5*M+.5,f.push(R.x,R.y),g++}for(let N=0;N<s;N++){const F=L+N,W=C+N;x===!0?h.push(W,W+1,F):h.push(W+1,W,F),P+=3}l.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class al extends ii{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new al(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class t0 extends No{constructor(t){super(t),this.uuid=Bs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new No().fromJSON(s))}return this}}const i_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=e0(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=c_(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return vr(r,o,e,a,c,f,0),o}};function e0(i,t,e,n,s){let r,o;if(s===v_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Ah(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Ah(r,i[r],i[r+1],o);return o&&Yo(o,o.next)&&(yr(o),o=o.next),o}function Hi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Yo(e,e.next)||Me(e.prev,e,e.next)===0)){if(yr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function vr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&f_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?r_(i,n,s,r):s_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),yr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=o_(Hi(i),t,e),vr(i,t,e,n,s,r,2)):o===2&&a_(i,t,e,n,s,r):vr(Hi(i),t,e,n,s,r,1);break}}}function s_(i){const t=i.prev,e=i,n=i.next;if(Me(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&_s(s,a,r,c,o,l,g.x,g.y)&&Me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function r_(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Me(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Ic(f,g,t,e,n),v=Ic(_,m,t,e,n);let S=i.prevZ,x=i.nextZ;for(;S&&S.z>=p&&x&&x.z<=v;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&_s(a,h,c,u,l,d,S.x,S.y)&&Me(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&_s(a,h,c,u,l,d,x.x,x.y)&&Me(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&_s(a,h,c,u,l,d,S.x,S.y)&&Me(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&_s(a,h,c,u,l,d,x.x,x.y)&&Me(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function o_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Yo(s,r)&&n0(s,n,n.next,r)&&Mr(s,r)&&Mr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),yr(n),yr(n.next),n=i=r),n=n.next}while(n!==i);return Hi(n)}function a_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&g_(o,a)){let c=i0(o,a);o=Hi(o,o.next),c=Hi(c,c.next),vr(o,t,e,n,s,r,0),vr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function c_(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=e0(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(m_(l));for(s.sort(l_),r=0;r<s.length;r++)e=h_(s[r],e);return e}function l_(i,t){return i.x-t.x}function h_(i,t){const e=u_(i,t);if(!e)return t;const n=i0(e,i);return Hi(n,n.next),Hi(e,e.next)}function u_(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&_s(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Mr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&d_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function d_(i,t){return Me(i.prev,i,t.prev)<0&&Me(t.next,i,i.next)<0}function f_(i,t,e,n){let s=i;do s.z===0&&(s.z=Ic(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,p_(s)}function p_(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Ic(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function m_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function _s(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function g_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!__(i,t)&&(Mr(i,t)&&Mr(t,i)&&x_(i,t)&&(Me(i.prev,i,t.prev)||Me(i,t.prev,t))||Yo(i,t)&&Me(i.prev,i,i.next)>0&&Me(t.prev,t,t.next)>0)}function Me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Yo(i,t){return i.x===t.x&&i.y===t.y}function n0(i,t,e,n){const s=io(Me(i,t,e)),r=io(Me(i,t,n)),o=io(Me(e,n,i)),a=io(Me(e,n,t));return!!(s!==r&&o!==a||s===0&&no(i,e,t)||r===0&&no(i,n,t)||o===0&&no(e,i,n)||a===0&&no(e,t,n))}function no(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function io(i){return i>0?1:i<0?-1:0}function __(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&n0(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Mr(i,t){return Me(i.prev,i,i.next)<0?Me(i,t,i.next)>=0&&Me(i,i.prev,t)>=0:Me(i,t,i.prev)<0||Me(i,i.next,t)<0}function x_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function i0(i,t){const e=new Uc(i.i,i.x,i.y),n=new Uc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ah(i,t,e,n){const s=new Uc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function yr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Uc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function v_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class fr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return fr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Rh(t),Ch(n,t);let o=t.length;e.forEach(Rh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Ch(n,e[c]);const a=i_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Rh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ch(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class cl extends ye{constructor(t=new t0([new Tt(0,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(o,2));function l(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;fr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const v=g[m];fr.isClockWise(v)===!0&&(g[m]=v.reverse())}const _=fr.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){const v=f[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=_.length;m<p;m++){const v=_[m],S=v[0]+u,x=v[1]+u,L=v[2]+u;n.push(S,x,L),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return M_(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new cl(n,t.curveSegments)}}function M_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Sr extends ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new w,d=new w,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],S=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){const R=L/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(R+x,1-S),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const S=h[p][v+1],x=h[p][v],L=h[p+1][v],R=h[p+1][v+1];(p!==0||o>0)&&f.push(S,x,R),(p!==n-1||c<Math.PI)&&f.push(x,L,R)}this.setIndex(f),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ll extends ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new w,u=new w,d=new w;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class qt extends qi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lu,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class s0 extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class y_ extends s0{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Pa=new ce,Ph=new w,Lh=new w;class S_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jc,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ph.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ph),Lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lh),e.updateMatrixWorld(),Pa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class E_ extends S_{constructor(){super(new Wu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class T_ extends s0{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new E_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class r0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Dh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Dh(){return performance.now()}class Ih{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class w_ extends V1{constructor(t=10,e=10,n=4473924,s=8947848){n=new Yt(n),s=new Yt(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let d=0,f=0,g=-a;d<=e;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=d===r?n:s;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const h=new ye;h.setAttribute("position",new te(c,3)),h.setAttribute("color",new te(l,3));const u=new nl({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}let b_=class extends Gi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wc);const Uh={type:"change"},hl={type:"start"},o0={type:"end"},so=new Xo,Nh=new Qn,A_=Math.cos(70*vd.DEG2RAD),be=new w,Qe=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},La=1e-6;class R_ extends b_{constructor(t,e=null){super(t,e),this.state=de.NONE,this.enabled=!0,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ys.ROTATE,MIDDLE:ys.DOLLY,RIGHT:ys.PAN},this.touches={ONE:ms.ROTATE,TWO:ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new kn,this._lastTargetPosition=new w,this._quat=new kn().setFromUnitVectors(t.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ih,this._sphericalDelta=new Ih,this._scale=1,this._panOffset=new w,this._rotateStart=new Tt,this._rotateEnd=new Tt,this._rotateDelta=new Tt,this._panStart=new Tt,this._panEnd=new Tt,this._panDelta=new Tt,this._dollyStart=new Tt,this._dollyEnd=new Tt,this._dollyDelta=new Tt,this._dollyDirection=new w,this._mouse=new Tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=P_.bind(this),this._onPointerDown=C_.bind(this),this._onPointerUp=L_.bind(this),this._onContextMenu=z_.bind(this),this._onMouseWheel=U_.bind(this),this._onKeyDown=N_.bind(this),this._onTouchStart=F_.bind(this),this._onTouchMove=O_.bind(this),this._onMouseDown=D_.bind(this),this._onMouseMove=I_.bind(this),this._interceptControlDown=B_.bind(this),this._interceptControlUp=k_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Uh),this.update(),this.state=de.NONE}update(t=null){const e=this.object.position;be.copy(e).sub(this.target),be.applyQuaternion(this._quat),this._spherical.setFromVector3(be),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Qe:n>Math.PI&&(n-=Qe),s<-Math.PI?s+=Qe:s>Math.PI&&(s-=Qe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(be.setFromSpherical(this._spherical),be.applyQuaternion(this._quatInverse),e.copy(this.target).add(be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=be.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new w(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new w(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(so.origin.copy(this.object.position),so.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(so.direction))<A_?this.object.lookAt(this.target):(Nh.setFromNormalAndCoplanarPoint(this.object.up,this.target),so.intersectPlane(Nh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>La||8*(1-this._lastQuaternion.dot(this.object.quaternion))>La||this._lastTargetPosition.distanceToSquared(this.target)>La?(this.dispatchEvent(Uh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Qe/60*this.autoRotateSpeed*t:Qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){be.setFromMatrixColumn(e,0),be.multiplyScalar(-t),this._panOffset.add(be)}_panUp(t,e){this.screenSpacePanning===!0?be.setFromMatrixColumn(e,1):(be.setFromMatrixColumn(e,0),be.crossVectors(this.object.up,be)),be.multiplyScalar(t),this._panOffset.add(be)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;be.copy(s).sub(this.target);let r=be.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Tt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function C_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function P_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function L_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(o0),this.state=de.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function D_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=de.DOLLY;break;case ys.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}break;case ys.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(hl)}function I_(i){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function U_(i){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(i.preventDefault(),this.dispatchEvent(hl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(o0))}function N_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function F_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ms.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=de.TOUCH_ROTATE;break;case ms.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case ms.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=de.TOUCH_DOLLY_PAN;break;case ms.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(hl)}function O_(i){switch(this._trackPointer(i),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=de.NONE}}function z_(i){this.enabled!==!1&&i.preventDefault()}function B_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function k_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const V_=9.81;function hs(i,t,e,n){const s=i*Math.PI/180,r=2*Math.PI/t;return{dirX:Math.sin(s),dirZ:Math.cos(s),amp:e,k:r,omega:Math.sqrt(V_*r),phase:n}}const Da=3;class H_{constructor(){O(this,"waves",[hs(10,7,1,0),hs(40,5,.8,1.3),hs(-30,3.6,.6,2.1),hs(65,2.6,.45,4),hs(-55,2,.32,.7),hs(20,1.6,.22,5.2)]);O(this,"scale",1);let t=0;for(const s of this.waves)t+=s.amp*s.amp;const e=Math.sqrt(t/2),n=Da/100/4/e;for(const s of this.waves)s.amp*=n}setHeightCm(t){this.scale=t/Da}get heightCm(){return this.scale*Da}height(t,e,n){let s=0;for(const r of this.waves)s+=r.amp*Math.sin(r.k*(r.dirX*t+r.dirZ*e)-r.omega*n+r.phase);return s*this.scale}verticalVelocity(t,e,n){let s=0;for(const r of this.waves)s-=r.amp*r.omega*Math.cos(r.k*(r.dirX*t+r.dirZ*e)-r.omega*n+r.phase);return s*this.scale}}const xs=-1.5,Cn=1.5,G_=.05,fs=.12,fn=.05,Fo=.04,Oo=-.91,zo=-.65,vs=.073,W_=.012,ws=.63,er=.06,X_=.04;function Ti(i){if(i<=er)return ws-.005*(er-i)/(er-xs);const t=Math.min(1,(i-er)/(Cn-er));return ws-(ws-X_)*t**2.3}const q_=.12;function Vs(i,t=Pn(i)){return Math.max(.02,ke(i)-t)}const Zo=(i,t=Pn(i))=>Math.min(Vs(i,t),q_);function ul(i,t=Pn(i)){return Math.min(1,Math.max(0,Ti(i)-.01)/(Zo(i,t)/2))}function Ko(i,t=Pn(i)){return Ti(i)-ul(i,t)*Zo(i,t)/2}function Bo(i,t,e=Pn(i)){const n=Vs(i,e),s=Zo(i,e),r=t*n;return{x:r>=s?Ti(i):Ti(i)-ul(i,e)*s*(1-r/s)**2/2,y:e+r}}function Y_(i,t){const e=Zo(i),n=t*Vs(i);return n>=e?0:ul(i)*(1-n/e)}const Nn=[{z:-.95,r:ws},{z:0,r:ws},{z:.75,r:.5},{z:1.2,r:.27},{z:1.4,r:.1}];function Pn(i){return i<fn?Fo:i<.5?0:.12*((i-.5)/(Cn-.5))**2}function Z_(i){return i<.5?0:.24*(i-.5)/(Cn-.5)**2}function ke(i){return i<.4?.2:.2-.07*((i-.4)/(Cn-.4))**1.5}function a0(i,t){const e=Math.max(Ti(i),1e-4),n=Math.min(1,Math.abs(t)/e);return ke(i)+.025*(1-n*n)}const cn=-1.38,pr=.15,bs=.57,As=.42,dl=(i,t,e,n)=>{if(i<=e)return t;const s=Math.min(1,(i-e)/(n-e));return t*Math.max(0,1-s**2.2)**.55};function Dn(i){return dl(i,.44-.02*Math.max(0,Math.min(1,(i-cn)/(0-cn))),0,bs)}function Fh(i){return dl(i,.3,-.05,.48)}function nr(i){return dl(i,.24,-.1,.3)}function Ia(i){if(i<=pr)return As;const t=Math.min(1,(i-pr)/(bs-pr));return As+(ke(bs)-As)*Math.sin(t*Math.PI/2)}const ro=1e3,K_=9.81,$_=101325,j_=2340,Co=8,Ua=.2,c0={diameter:.14,pitch:.235,ear:.5,blades:3,cup:.6};function J_(){return{u:new Float32Array(Co),cav:0,vent:0,loading:0,sigma:10,tipRatio:1,ventLimit:0}}function Oh(i){return Math.sqrt(Math.max(0,(i-.12)*(1.03-i)))}function Q_(i){const t=2*Math.PI*.72,e=.2,n=Math.abs(i);if(n<=e)return t*i;const s=t*e-1.4*(n-e);return Math.sign(i)*Math.max(.55,s)}function tx(i,t,e,n,s,r,o,a){const c=i.diameter/2,l=i.blades,h=2*Math.PI*e,u=(1-Ua)/Co;let d=0;for(let ct=0;ct<Co;ct++)d+=Oh(Ua+(ct+.5)*u)*u*c;const f=i.ear*Math.PI*c*c/(l*d),g=.017*i.cup,_=.003*i.cup;let m=0,p=0;for(let ct=0;ct<Co;ct++){const Et=Ua+(ct+.5)*u,lt=Et*c,ut=u*c,G=f*Oh(Et),D=h*lt,q=Math.atan(i.pitch/(2*Math.PI*lt))+g;let z=t.u[ct],it=0,mt=0;for(let gt=0;gt<4;gt++){const It=n+z,Ft=Math.atan2(It,Math.max(D,.001)),Wt=It*It+D*D,U=Q_(q-Ft),yt=.01+.008*U*U+_,_t=.5*ro*Wt*G*l*ut,Dt=Math.cos(Ft),bt=Math.sin(Ft);it=_t*(U*Dt-yt*bt),mt=_t*(U*bt+yt*Dt)*lt;const Kt=l*(1-Et)/(2*Et*Math.max(.05,bt)),Pt=Math.max(.05,2/Math.PI*Math.acos(Math.min(1,Math.exp(-Kt)))),b=Math.max(0,it)/(4*Math.PI*lt*ro*Pt*ut),y=(-n+Math.sqrt(Math.max(0,n*n+4*b)))/2;z=.5*z+.5*y}t.u[ct]=Number.isFinite(z)?z:0,m+=it,p+=mt}const v=i.pitch/i.diameter,S=i.ear*Math.PI*c*c*(1.067-.229*v),x=n*n+(.7*Math.PI*e*i.diameter)**2,L=.5*ro*Math.max(x,1),R=Math.max(.02,($_+ro*K_*Math.max(0,s)-j_)/L),A=Math.max(0,m)/(L*S),P=.5*R**.5,E=Math.max(0,Math.min(1,(A/P-1)/3));t.cav+=(E-t.cav)*Math.min(1,a*20),t.loading=A,t.sigma=R;const C=(s-c)/i.diameter,N=Math.min(2,A/.5),F=.05-.08*i.cup+Math.min(.6,o),W=Math.max(-.2,F+.25*N),X=Math.max(-.2,F+.25*N*(1-.6*t.vent)+.05);if(t.tipRatio=C,t.ventLimit=W,C<W){const ct=Math.min(1,(W-C)/.15);t.vent+=ct*(1-t.vent)*Math.min(1,a*10)}else if(C>X){const ct=1.5+8*(C-X)+Math.max(0,1-N/.7)*4;t.vent=Math.max(0,t.vent-ct*a)}t.vent=Math.max(t.vent,1-r);const Y=t.cav,tt=t.vent,Z=(1-.55*Y*Y)*(1-.75*tt)*r,at=(1-.3*Y*Y)*(1-.8*tt)*r;return{thrust:m*Z,torque:p*at+.002*h*(1-r)}}const Jn=9.81,tn=1e3,ex=1.2,Na=115,Si=52,nx=new w(0,.2,-.55),oo=new w(140,140,22),hn=new w(0,.55,-.25),ix=.3,sx=-.2,rx=Si*(2*Math.PI*3)**2,ox=2*.7*Si*2*Math.PI*3,zh=Si*Jn*3.2,ax=.03,Fs=new w(0,.38,-1.52),fl=new w(0,.04,-.1);Fs.clone().add(fl);const cx=new w(0,-.57,-.16),lx=new w(0,-.47,-.12),hx=new w(0,-.44,-.14),ux=.057,Bh=2.4,dx=1.9,ao=[-.5,0,.5,1,1.5,2,3],ko=1,ti={peakTorque:37,peakRpm:5400,idleRpm:1300,limitRpm:6600,inertia:.015},xn={planing:.35,friction:.0022,wetSmooth:.008,pressureFetch:.2,pressurePeak:3,stepRise:.035,stepVentSpeed:6,chineCd:1,yawSide:2.5,yawSideStall:.35,yawSideAft:-1,yawSideStallAft:-1,stallDrop:1,sideLift:.4,keelFinSlope:1.8,keelFinStall:.45,keelFinCd0:.008,keelFinVortex:0,sideWalls:!0,wallPlaning:1,windmill:!0,ventSpeed:0,ventSpeedGear:0,plateCn:0,finPlateCn:0,driftStiff:0,driftStiff0:1.45,driftDamp:0,driftDamp0:.9,yawSideNormal:!1,foilVent:!1,foilVentA0:.15,foilVentK:6,plateBack:!1,obliqueFloor:3,obliqueMax:.6,keelFinZ:void 0,heaveDamp:450,airDrag:.62,finDrag:6e-4,finArea:.02,rollDamp:110,pitchDamp:150,yawDamp:30,yawDamp2:0,maxSteer:.42,steerRate:2.2,steerTorque:0,steerFullSpeed:16,yawInertia:140,kickYawArm:.4,kickHandArm:.5,kickTime:.25,leanUp:void 0,leanSide:.55,hullComZ:-.7,plateLift:.5,motorHeight:.05},l0={maxSteer:.5,foilVent:!0,steerTorque:55,yawDamp2:40,plateCn:2,chineCd:.3,obliqueFloor:14,obliqueMax:.15,plateBack:!0},fx={...xn},h0="boatgame.turnPhys",px={...l0,yawSide:1.5,keelFinSlope:1};let Xe=!1,Ms="v2";function pl(i){Ms=i,Xe=i!=="v1";const t=xn.motorHeight;Object.assign(xn,fx,i==="v2"?l0:i==="drift"?px:{},{motorHeight:t})}let Nc=null;try{typeof localStorage<"u"&&(Nc=localStorage.getItem(h0))}catch{}var mu,gu;const mx=!!((gu=(mu=globalThis.process)==null?void 0:mu.env)!=null&&gu.V1);pl(mx||Nc==="v1"?"v1":Nc==="drift"?"drift":"v2");const en=7;function u0(i,t){return(i-(en-1)/2)*2*Ko(t)/en}function gx(){const i=[],t=(s,r,o)=>{for(let a=0;a<o;a++)i.push([s+(r-s)*a/o,s+(r-s)*(a+1)/o])};t(xs,fn,6),t(fn,Cn,11);const e=[],n=[];for(const[s,r]of i){const o=(s+r)/2,a=Ko(o),c=Pn(o),l=new w(0,-1,Z_(o)).normalize();for(let d=0;d<en;d++){const f=d===0?-1:d===en-1?1:0;e.push({p:new w(u0(d,o),c,o),n:l,area:(r-s)*2*a/en,len:r-s,depthMax:ke(o)-c,side:f,col:d,aft:o<fn?fn-o:-1,wall:!1})}const h=c,u=Vs(o,h);for(const d of[1,-1])for(const f of[.25,.75]){const g=Bo(o,f,h),_=Y_(o,f);n.push({p:new w(d*g.x,g.y,o),n:new w(d,-_,0).normalize(),area:(r-s)*(u/2)*Math.hypot(1,_),len:r-s,depthMax:ke(o)-g.y,side:0,col:-1,aft:-1,wall:!0})}}return[...e,...n]}const kh=Array.from({length:en},(i,t)=>new w(u0(t,fn),0,fn)),Fa=zo-Oo,Vh=new w(0,Fo,(Oo+zo)/2);function _x(i){const t=(i-ti.peakRpm)/3200;return Math.max(16,ti.peakTorque*(1-.55*t*t))}function co(i){const t=Math.sin(Math.min(Math.PI/2,i));return 2*Math.PI*t/(4+Math.PI*t)}function lo(i,t,e,n){return e+n*2*Jn*Math.max(.005,t)/Math.max(1,i*i)}const Ne=new w,on=new w,ie=new w,xx=new w,Li=new w,us=new w,De=new kn,Oa=new w(0,1,0),vx=new w(1,0,0),gr=class gr{constructor(t,e=t){O(this,"prevBeta",NaN);O(this,"gearSteerMoment",0);O(this,"comW",new w);O(this,"vel",new w);O(this,"quat",new kn);O(this,"angVel",new w);O(this,"origin",new w);O(this,"riderB",hn.clone());O(this,"riderW",new w);O(this,"riderVel",new w);O(this,"legForce",new w);O(this,"legLoad",1);O(this,"kickForce",0);O(this,"legLatAvg",0);O(this,"riderTarget",hn.clone());O(this,"riderTargetVel",new w);O(this,"comB",new w);O(this,"steerAngle",0);O(this,"throttle",0);O(this,"engineOmega",ti.idleRpm/60*2*Math.PI);O(this,"propThrust",0);O(this,"propImmersion",1);O(this,"tilt",0);O(this,"plateImmersion",0);O(this,"finVent",0);O(this,"keelVent",0);O(this,"propDepth",0);O(this,"plateForce",0);O(this,"prop",{...c0});O(this,"propState",J_());O(this,"wetPoints",0);O(this,"keelFinImmersion",0);O(this,"keelFinForce",0);O(this,"edgeY",new Float32Array(en));O(this,"cellT");O(this,"cellX");O(this,"chineAt",new w);O(this,"edgeK",new Float32Array(en));O(this,"hull",gx());O(this,"pressure",new Float32Array(this.hull.length*4));O(this,"hullFx",new Float32Array(this.hull.length*gr.FX_STRIDE));O(this,"impact",new Float32Array(this.hull.length));O(this,"wasWet",new Uint8Array(this.hull.length));O(this,"propPos",new w);O(this,"propAxis",new w(0,0,1));O(this,"propJet",0);O(this,"diag",{planing:0,friction:0,lateral:0,heave:0,fin:0,air:0,thrust:0});O(this,"rollDiag",{});O(this,"rollAxis",new w);O(this,"diagLat",!1);O(this,"diagDrag",!1);O(this,"diagYaw",!1);O(this,"rollDiagOn",!1);O(this,"force",new w);O(this,"torque",new w);O(this,"surface");O(this,"motorSurface");O(this,"extForce",new w);O(this,"extTorque",new w);this.motorSurface=e;const n=this.hull.filter(s=>!s.wall).length;this.cellT=new Float32Array(n/en),this.cellX=new Float32Array(n/en),this.surface=t,this.updateComB()}roll(t,e,n){this.rollDiagOn&&(on.subVectors(n,this.comW),this.rollDiag[t]=(this.rollDiag[t]??0)+(this.diagDrag||this.diagLat?(this.diagDrag?-1:1)*e.dot(this.rollAxis):Li.crossVectors(on,e).dot(this.rollAxis)))}get rpm(){return this.engineOmega*60/(2*Math.PI)}reset(t,e,n,s){this.quat.setFromAxisAngle(Oa,n),this.vel.set(0,0,0),this.angVel.set(0,0,0),this.riderB.copy(hn),this.riderTarget.copy(hn),this.riderTargetVel.set(0,0,0),this.riderVel.set(0,0,0),this.steerAngle=0,this.throttle=0,this.engineOmega=ti.idleRpm/60*2*Math.PI,this.propState.cav=this.propState.vent=0,this.finVent=0,this.keelVent=0,this.legLatAvg=this.kickForce=0,this.propState.u.fill(0),this.extForce.set(0,0,0),this.extTorque.set(0,0,0),this.updateComB();const r=this.surface.height(t,e,s);this.origin.set(t,r-.05,e),this.comW.copy(this.comB).applyQuaternion(this.quat).add(this.origin),this.toWorld(hn,this.riderW)}updateComB(){this.comB.copy(nx).setZ(xn.hullComZ)}shift(t,e){this.comW.x+=t,this.comW.z+=e,this.riderW.x+=t,this.riderW.z+=e,this.origin.x+=t,this.origin.z+=e}forward(t){return t.set(0,0,1).applyQuaternion(this.quat)}speed(){return this.vel.length()}toWorld(t,e){return e.copy(t).applyQuaternion(this.quat).add(this.origin)}pointVel(t,e){return on.subVectors(t,this.comW),e.crossVectors(this.angVel,on).add(this.vel)}addForce(t,e){this.force.add(t),on.subVectors(e,this.comW),this.torque.add(Li.crossVectors(on,t))}step(t,e,n){const s=xn,r=this.surface,o=this.motorSurface,a=Math.max(1,this.vel.length()),c=s.steerTorque>0?1:Math.min(1,(s.steerFullSpeed/a)**2);let h=e.steer*s.maxSteer*c-this.steerAngle;if(s.steerTorque>0){const Q=this.gearSteerMoment,K=Q*Math.sign(this.steerAngle)<0?Math.abs(Q)-s.steerTorque:0;K>0&&(Math.sign(h)===Math.sign(this.steerAngle)&&(h=0),this.steerAngle-=Math.sign(this.steerAngle)*s.steerRate*t*Math.min(1,K/s.steerTorque))}this.steerAngle+=Math.sign(h)*Math.min(Math.abs(h),s.steerRate*t),this.throttle+=(e.throttle-this.throttle)*Math.min(1,t*10),this.updateComB(),this.origin.copy(this.comB).applyQuaternion(this.quat).negate().add(this.comW);const u=us.set(hn.x-e.leanX*s.leanSide,hn.y+Math.abs(e.leanX)*(s.leanUp??sx),hn.z+e.leanZ*ix),d=1-Math.exp(-t/ax);this.riderTargetVel.copy(u).sub(this.riderTarget).multiplyScalar(d/t),this.riderTarget.lerp(u,d);const f=this.toWorld(this.riderTarget,new w),g=this.pointVel(f,new w).add(Ne.copy(this.riderTargetVel).applyQuaternion(this.quat));this.riderW.distanceToSquared(f)>.8*.8&&(this.riderW.copy(f),this.riderVel.copy(g));const _=this.legForce;_.subVectors(f,this.riderW).multiplyScalar(rx),_.addScaledVector(g.sub(this.riderVel),ox),_.y+=Si*Jn;const m=Ne.set(0,1,0).applyQuaternion(this.quat),p=_.dot(m);p<-408.096&&_.addScaledVector(m,-408.096-p);const v=_.length();v>zh&&_.multiplyScalar(zh/v),this.legLoad=Math.max(0,_.dot(m))/(Si*Jn),this.diagDrag?this.rollAxis.copy(this.vel).normalize():this.diagLat?this.rollAxis.set(this.vel.z,0,-this.vel.x).normalize():this.rollAxis.set(0,this.diagYaw?1:0,this.diagYaw?0:1).applyQuaternion(this.quat);for(const Q in this.rollDiag)this.rollDiag[Q]=0;this.force.set(0,-Na*Jn,0),this.torque.set(0,0,0),this.force.add(this.extForce),this.torque.add(this.extTorque),this.addForce(_.clone().negate(),this.riderW);{const Q=Ne.set(1,0,0).applyQuaternion(this.quat),K=-_.dot(Q);this.legLatAvg+=(K-this.legLatAvg)*Math.min(1,t/s.kickTime);const At=K-this.legLatAvg;this.kickForce=At,this.pointVel(this.riderW,on);const rt=this.riderVel.dot(Q)-on.dot(Q),St=-At*rt>0?s.kickYawArm:-s.kickHandArm,dt=Li.set(0,1,0).applyQuaternion(this.quat);this.torque.addScaledVector(dt,-At*St),this.rollDiagOn&&this.diagYaw&&(this.rollDiag.蹴り=-At*St)}this.roll("選手",_.clone().negate(),this.riderW),this.roll("船体の重さ",new w(0,-Na*Jn,0),this.comW);const S=xx.set(-1,0,0).applyQuaternion(this.quat).clone(),x=this.vel.length(),L=x>.1?this.vel.clone().multiplyScalar(1/x):new w,R=this.diag;R.planing=R.friction=R.lateral=R.heave=R.fin=R.air=0;const A=Math.max(0,Math.min(1,(x-s.stepVentSpeed+2)/4)),P=this.edgeY,E=this.edgeK;for(let Q=0;Q<kh.length;Q++){const K=this.toWorld(kh[Q],Li),At=r.height(K.x,K.z,n)-K.y;P[Q]=K.y,E[Q]=A*Math.max(0,Math.min(1,At/.01))}const M=us.set(0,1,0).applyQuaternion(this.quat).clone();let C=0;const N=new w,F=new w,W=new w,X=new w,Y=S.clone().negate();this.cellT.fill(0);for(let Q=0;Q<this.hull.length;Q++){const K=this.hull[Q];this.toWorld(K.p,N);const At=Q*4;this.pressure[At]=N.x,this.pressure[At+1]=N.z,this.pressure[At+2]=0,this.pressure[At+3]=Math.sqrt(K.area)*.5;let rt=r.height(N.x,N.z,n);if(K.aft>0&&E[K.col]>0){const nt=Math.min(rt,P[K.col]+s.stepRise*K.aft);rt+=(nt-rt)*E[K.col]}const ht=rt-N.y,St=Q*gr.FX_STRIDE,dt=this.hullFx;if(dt[St]=N.x,dt[St+1]=N.y,dt[St+2]=N.z,dt[St+9]=ht,ht<=0){dt[St+10]=dt[St+11]=0,this.wasWet[Q]=0;continue}C++;const ft=Q/en|0;!K.wall&&ht>this.cellT[ft]&&(this.cellT[ft]=Math.min(ht,K.depthMax),this.cellX[ft]=K.p.x);const Ht=Math.min(1,ht/s.wetSmooth),Lt=Math.min(ht,K.depthMax);K.wall?ie.copy(K.n).applyQuaternion(this.quat).multiplyScalar(-tn*Jn*K.area*Lt):ie.set(0,tn*Jn*K.area*Lt,0),this.roll("浮力",ie,N),this.pointVel(N,W),W.y-=r.verticalVelocity(N.x,N.z,n);const Gt=W.length();F.copy(K.n).applyQuaternion(this.quat);const I=W.dot(F);if(dt[St+3]=W.x,dt[St+4]=W.y,dt[St+5]=W.z,dt[St+6]=F.x,dt[St+7]=F.y,dt[St+8]=F.z,dt[St+10]=I,dt[St+11]=Ht,!this.wasWet[Q]&&I>0&&(this.impact[Q]=Math.max(this.impact[Q],I)),this.wasWet[Q]=1,I>0){Ne.copy(W).addScaledVector(F,-I);const nt=Ne.length();let vt=10,xt=0,Nt=0;if(nt>.5&&!K.wall){Ne.multiplyScalar(1/nt);const ot=Ne.y+(K.aft>0?s.stepRise*E[K.col]:0);ot>.001&&(vt=ht/ot);const Zt=Ne.dot(Y);xt=Math.abs(Zt),Nt=Ko(K.p.z)-Math.sign(Zt)*K.p.x}const ee=K.area/K.len;let me=K.wall?s.wallPlaning:0;if(!K.wall)for(let ot=0;ot<4;ot++){let Zt=vt;xt>.001&&(Zt=Math.min(Zt,Math.max(0,Nt+((ot+.5)/4-.5)*ee)/xt)),me+=Math.min(s.pressurePeak,Math.sqrt(s.pressureFetch/Math.max(.005,Zt)))/4}if(X.copy(F).multiplyScalar(-s.planing*me*tn*K.area*Gt*I*Ht),R.planing+=X.dot(L),this.roll("滑走揚力",X,N),ie.add(X),xt>.001&&!K.wall){const ot=Math.asin(Math.min(1,xt)),Zt=K.aft>0,fe=Zt&&s.yawSideStallAft>0?s.yawSideStallAft:s.yawSideStall,Se=Zt&&s.yawSideAft>=0?s.yawSideAft:s.yawSide,xe=s.stallDrop?ot<=fe?ot:Math.max(fe*.5,fe-.8*(ot-fe)):fe*Math.tanh(ot/fe),he=X.length(),$e=s.yawSideNormal?on.copy(Y).addScaledVector(F,-Y.dot(F)).normalize():on.copy(Y).addScaledVector(Ne,-Y.dot(Ne)).normalize(),yn=Math.sign(Ne.dot(Y));X.copy($e).multiplyScalar(-yn*Se*xe*he),R.lateral+=X.dot(L),this.roll("横滑りの横力",X,N),ie.add(X)}}const pt=-s.heaveDamp*K.area*W.y*Ht;ie.y+=pt,R.heave+=pt*L.y,this.roll("上下の減衰",new w(0,pt,0),N),Ne.copy(W).addScaledVector(F,-I);const J=Ne.length();if(X.copy(Ne).multiplyScalar(-.5*tn*s.friction*K.area*J*Ht),R.friction+=X.dot(L),this.roll("摩擦",X,N),ie.add(X),K.side!==0&&!s.sideWalls){const nt=K.side>0?Y:S,vt=W.dot(nt);if(vt>0){const xt=Math.min(ht,K.depthMax);X.copy(nt).multiplyScalar(-.5*tn*s.chineCd*K.len*xt*vt*vt);const Nt=this.chineAt.copy(N).addScaledVector(M,xt*.5);R.lateral+=X.dot(L),this.roll("舷側",X,Nt),this.addForce(X,Nt)}}this.pressure[At+2]=Math.max(0,ie.y),this.addForce(ie,N)}this.wetPoints=C;{const Q=us.set(0,0,1).applyQuaternion(this.quat).clone(),K=Math.max(0,this.vel.dot(Q));let At=0;const rt=this.cellT.length;for(let ht=rt-1;ht>=0;ht--){const St=this.cellT[ht],dt=Math.PI/2*tn*St*St,ft=dt-At;if(ft<=0||K<1)continue;At=dt;const Ht=this.hull[ht*en];this.toWorld(Li.set(this.cellX[ht],Ht.p.y+St*.5,Ht.p.z),N),this.pointVel(N,W);const Lt=W.dot(Y);X.copy(Y).multiplyScalar(-s.sideLift*K*ft*Lt),R.lateral+=X.dot(L),this.roll("サイド",X,N),this.addForce(X,N)}}{const Q=s.keelFinZ??Vh.z,K=this.toWorld(us.copy(Vh).setZ(Q),Li).clone();let At=r.height(K.x,K.z,n);const rt=E[(en-1)/2];if(rt>0){const ft=Math.min(At,P[(en-1)/2]+s.stepRise*(fn-Q));At+=(ft-At)*rt}const ht=M.y,St=K.y-vs*ht,dt=ht>.2?Math.max(0,Math.min(vs,(At-St)/ht)):0;if(this.keelFinImmersion=dt/vs,this.keelFinForce=0,dt>.002){const ft=K.addScaledVector(M,-(vs-dt/2));this.pointVel(ft,W);const Ht=us.set(0,0,1).applyQuaternion(this.quat).clone(),Lt=W.dot(Ht),Gt=W.dot(Y);if(Lt>.5){const I=Math.atan2(Gt,Lt),pt=Math.abs(I),J=s.keelFinStall,nt=s.keelFinSlope*J,vt=Math.sin(Math.min(pt,1.2)),xt=Math.cos(Math.min(pt,1.2));let Nt=s.keelFinVortex>0?Math.sign(I)*(s.keelFinSlope*vt*xt*xt+s.keelFinVortex*vt*vt*xt):Math.sign(I)*(s.stallDrop?pt<=J?s.keelFinSlope*pt:Math.max(nt*.5,nt-1.2*(pt-J)):nt*Math.tanh(s.keelFinSlope*pt/nt));s.ventSpeedGear>0&&(Nt*=Math.min(1,s.ventSpeedGear**2/Math.max(1e-6,Lt*Lt+Gt*Gt)));const ee=dt*Fa,me=2*dt*dt/ee;let ot=s.keelFinCd0+Nt*Nt/(Math.PI*.8*me);if(s.finPlateCn>0){const he=Math.sin(pt),$e=s.finPlateCn*he;$e*Math.cos(pt)>Math.abs(Nt)&&(Nt=Math.sign(I)*$e*Math.cos(pt)),ot=Math.max(ot,s.keelFinCd0+$e*he)}if(s.foilVent){const he=lo(Math.hypot(Lt,Gt),dt*.5*ht,s.foilVentA0,s.foilVentK),$e=Math.max(0,Math.min(1,(pt-he)/.12));this.keelVent+=($e-this.keelVent)*Math.min(1,t*($e>this.keelVent?12:1.5));const yn=co(pt);Nt=Nt*(1-this.keelVent)+Math.sign(I)*yn*Math.cos(pt)*this.keelVent,ot=ot*(1-this.keelVent)+(s.keelFinCd0+yn*Math.sin(pt))*this.keelVent}const Zt=Lt*Lt+Gt*Gt,fe=.5*tn*ee*Zt,Se=Ne.copy(Ht).multiplyScalar(Lt).addScaledVector(Y,Gt).normalize(),xe=on.copy(Y).multiplyScalar(Lt).addScaledVector(Ht,-Gt).normalize();X.copy(xe).multiplyScalar(-fe*Nt).addScaledVector(Se,-fe*ot),R.lateral+=X.dot(L),this.roll("中央フィン",X,ft),this.addForce(X,ft),this.keelFinForce=X.dot(Y)}else if(s.plateBack&&Math.abs(Gt)>.3){const I=Math.atan2(Math.abs(Gt),Lt),pt=Math.sin(I),J=.5*tn*dt*Fa*(Lt*Lt+Gt*Gt);let nt=Math.max(1,s.finPlateCn)*pt;if(s.foilVent){const vt=lo(Math.hypot(Lt,Gt),dt*.5*ht,s.foilVentA0,s.foilVentK),xt=Math.max(0,Math.min(1,(I-vt)/.12));this.keelVent+=(xt-this.keelVent)*Math.min(1,t*(xt>this.keelVent?12:1.5)),nt=nt*(1-this.keelVent)+co(I)*this.keelVent}X.copy(Y).multiplyScalar(-Math.sign(Gt)*J*nt).addScaledVector(Ht,-.5*tn*dt*Fa*s.keelFinCd0*Lt*Math.abs(Lt)),R.lateral+=X.dot(L),this.roll("中央フィン",X,ft),this.addForce(X,ft),this.keelFinForce=X.dot(Y)}}}const tt=new kn().setFromAxisAngle(vx,(this.tilt-ko)*Math.PI/180).premultiply(this.quat);De.setFromAxisAngle(Oa,this.steerAngle).premultiply(tt);const Z=new w(0,0,1).applyQuaternion(De),at=new w(1,0,0).applyQuaternion(De),ct=new w(0,1,0).applyQuaternion(De),Et=Ne.copy(Fs).setY(Fs.y+s.motorHeight),lt=this.toWorld(Et,new w).add(fl.clone().applyQuaternion(tt)),ut=new w().copy(lx).applyQuaternion(De).add(lt),G=o.height(ut.x,ut.z,n)-ut.y;if(this.gearSteerMoment=0,G>0){this.pointVel(ut,W);const Q=W.dot(Z),K=W.dot(at);if(Q>.5){const At=Math.atan2(K,Q),rt=Math.abs(At);let ht=Math.sign(At)*(rt<=.3?Bh*rt:Math.max(.35,Bh*.3-1.2*(rt-.3)));const St=Math.max(0,Math.min(1,(.32-G)/.2)),dt=lo(Math.hypot(Q,K),G,s.foilVentA0,s.foilVentK),ft=s.foilVent?Math.max(Math.max(0,Math.min(1,(rt-dt)/.12)),this.propState.vent*.3):Math.max(St*Math.max(0,Math.min(1,(rt-.3)/.25)),this.propState.vent*.3);this.finVent+=(ft-this.finVent)*Math.min(1,t*(ft>this.finVent?12:1.5)),s.plateCn>0&&(ht=Math.sign(At)*Math.max(Math.abs(ht),s.plateCn*Math.sin(rt))),s.foilVent?ht=ht*(1-this.finVent)+Math.sign(At)*co(rt)*this.finVent:ht*=1-.6*this.finVent,s.ventSpeed>0&&(ht*=Math.min(1,s.ventSpeed**2/Math.max(1e-6,Q*Q+K*K)));const Ht=.5*tn*s.finArea*(Q*Q+K*K)*Math.min(1,G/.2);ie.copy(at).multiplyScalar(-Ht*ht),ie.addScaledVector(Z,-.5*tn*s.finDrag*Q*Q),R.fin+=ie.dot(L),this.addForce(ie,ut),this.roll("ギアケース",ie,ut),this.gearSteerMoment=new w().subVectors(ut,lt).cross(ie).dot(ct)}else if(s.plateBack&&Math.abs(K)>.3){const At=Math.atan2(Math.abs(K),Q),rt=Math.sin(At);let ht=Math.max(1,s.plateCn)*rt;if(s.foilVent){const dt=lo(Math.hypot(Q,K),G,s.foilVentA0,s.foilVentK),ft=Math.max(0,Math.min(1,(At-dt)/.12));this.finVent+=(ft-this.finVent)*Math.min(1,t*(ft>this.finVent?12:1.5)),ht=ht*(1-this.finVent)+co(At)*this.finVent}s.ventSpeed>0&&(ht*=Math.min(1,s.ventSpeed**2/Math.max(1e-6,Q*Q+K*K)));const St=.5*tn*s.finArea*(Q*Q+K*K)*Math.min(1,G/.2);ie.copy(at).multiplyScalar(-Math.sign(K)*St*ht),ie.addScaledVector(Z,-.5*tn*s.finDrag*Q*Math.abs(Q)),R.fin+=ie.dot(L),this.addForce(ie,ut),this.roll("ギアケース",ie,ut),this.gearSteerMoment=new w().subVectors(ut,lt).cross(ie).dot(ct)}}const D=new w().copy(hx).applyQuaternion(De).add(lt),q=o.height(D.x,D.z,n)-D.y;if(this.plateImmersion=Math.max(0,Math.min(1,(q+.02)/.05)),this.plateImmersion>0){this.pointVel(D,W);const Q=W.dot(Z);if(Q>.5){const K=W.dot(ct),At=Math.atan2(K,Q),rt=s.plateLift*dx*Math.max(-.35,Math.min(.35,At)),ht=.5*tn*ux*(Q*Q+K*K)*this.plateImmersion;ie.copy(ct).multiplyScalar(-ht*rt),ie.addScaledVector(Z,-ht*.008),this.plateForce=ie.dot(Oa),R.fin+=ie.dot(L),this.addForce(ie,D),this.roll("プレート",ie,D)}}else this.plateForce=0;const z=new w().copy(cx).applyQuaternion(De).add(lt),it=o.height(z.x,z.z,n)-z.y;this.propDepth=it;const mt=this.prop.diameter/2;this.propImmersion=Math.max(0,Math.min(1,(it+mt)/(2*mt)));const gt=this.engineOmega/(2*Math.PI);this.pointVel(z,W);const It=Math.max(0,W.dot(Z))*.97,Ft=Math.max(s.obliqueFloor,Math.abs(It)),Wt=(.8*Math.abs(W.dot(ct))+1*Math.abs(W.dot(at)))/Ft,U=tx(this.prop,this.propState,gt,It,it,this.propImmersion,Math.min(s.obliqueMax,Wt),t);this.propPos.copy(z),this.propAxis.copy(Z);let yt=0;for(const Q of this.propState.u)yt+=Q;this.propJet=yt/this.propState.u.length;const _t=U.thrust,Dt=s.windmill?U.torque:Math.max(0,U.torque),bt=this.rpm,Kt=bt<ti.idleRpm?Math.min(.25,(ti.idleRpm-bt)/200*.25):0,Pt=bt>ti.limitRpm?0:Math.max(this.throttle,Kt),b=1+8e-4*bt,y=_x(bt)*Pt-b;this.engineOmega=Math.max(0,this.engineOmega+(y-Dt)/ti.inertia*t),this.propThrust=_t,R.thrust=Z.dot(L)*_t,this.addForce(ie.copy(Z).multiplyScalar(_t),z),this.roll("推力",ie,z),this.torque.addScaledVector(Z,-Dt),ie.copy(this.vel).multiplyScalar(-.5*ex*s.airDrag*x),R.air=ie.dot(L),this.force.add(ie),this.riderVel.addScaledVector(_,t/Si),this.riderVel.y-=Jn*t,this.riderW.addScaledVector(this.riderVel,t),this.vel.addScaledVector(this.force,t/Na),this.comW.addScaledVector(this.vel,t),De.copy(this.quat).invert();const V=Li.copy(this.angVel).applyQuaternion(De),st=us.copy(this.torque).applyQuaternion(De),H=s.yawInertia,et=Ne.set(oo.x*V.x,H*V.y,oo.z*V.z);if(st.sub(on.crossVectors(V,et)),st.x-=s.pitchDamp*V.x,st.y-=s.yawDamp*V.y+s.yawDamp2*Math.abs(V.y)*V.y,s.driftStiff>0){const Q=on.copy(this.vel).setY(0).applyQuaternion(De),K=Math.hypot(Q.x,Q.z),At=Math.atan2(Q.x,Q.z),rt=Math.max(0,Math.abs(At)-s.driftStiff0),ht=Math.min(1,Math.max(0,(K-2)/2));if(st.y+=Math.sign(At)*s.driftStiff*rt*ht,s.driftDamp>0){let St=isNaN(this.prevBeta)?0:At-this.prevBeta;St-=2*Math.PI*Math.round(St/(2*Math.PI));const dt=(Math.abs(At)-s.driftDamp0)/Math.max(.05,s.driftStiff0+.3-s.driftDamp0),ft=dt<=0?0:dt>=1?1:dt*dt*(3-2*dt);st.y+=s.driftDamp*ft*(St/t)*ht}this.prevBeta=At}st.z-=s.rollDamp*V.z,V.x+=st.x/oo.x*t,V.y+=st.y/H*t,V.z+=st.z/oo.z*t,this.angVel.copy(V).applyQuaternion(this.quat);const Rt=this.angVel;De.set(Rt.x*t*.5,Rt.y*t*.5,Rt.z*t*.5,0).multiply(this.quat),this.quat.set(this.quat.x+De.x,this.quat.y+De.y,this.quat.z+De.z,this.quat.w+De.w).normalize(),this.origin.copy(this.comB).applyQuaternion(this.quat).negate().add(this.comW),De.copy(this.quat).invert(),this.riderB.copy(this.riderW).sub(this.origin).applyQuaternion(De)}attitude(){const t=new w(0,0,1).applyQuaternion(this.quat),e=new w(-1,0,0).applyQuaternion(this.quat);return{trim:Math.asin(Math.max(-1,Math.min(1,t.y)))*180/Math.PI,heel:Math.asin(Math.max(-1,Math.min(1,-e.y)))*180/Math.PI}}};O(gr,"FX_STRIDE",12);let Er=gr;const ir=new w;function _n(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;ir.copy(t),ir[n]=0,ir.normalize();const l=.5*o/(o+a),h=1-ir.angleTo(i)/c;return Math.sign(ir[e])===1?h*l:a/(o+a)+l+l*(1-h)}class Mx extends se{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new w,c=new w,l=new w(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new w,_=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=_n(g,c,"z","y",r,n),d[p+1]=1-_n(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-_n(g,c,"z","y",r,n),d[p+1]=1-_n(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-_n(g,c,"x","z",r,t),d[p+1]=_n(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-_n(g,c,"x","z",r,t),d[p+1]=1-_n(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-_n(g,c,"x","y",r,t),d[p+1]=1-_n(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=_n(g,c,"x","y",r,t),d[p+1]=1-_n(g,c,"y","x",r,e);break}}}const ae=(i,t,e)=>new w(i,t,e);function $n(i){const t=i[0].length,e=[],n=[];for(const r of i)for(const o of r)e.push(o.x,o.y,o.z);for(let r=0;r<i.length-1;r++)for(let o=0;o<t-1;o++){const a=r*t+o,c=a+t;n.push(a,c,a+1,a+1,c,c+1)}const s=new ye;return s.setAttribute("position",new te(e,3)),s.setIndex(n),s.computeVertexNormals(),s}function za(i){const t=new w;for(const r of i)t.add(r);t.multiplyScalar(1/i.length);const e=[t.x,t.y,t.z];for(const r of i)e.push(r.x,r.y,r.z);const n=[];for(let r=0;r<i.length;r++)n.push(0,1+r,1+(r+1)%i.length);const s=new ye;return s.setAttribute("position",new te(e,3)),s.setIndex(n),s.computeVertexNormals(),s}function ds(i,t,e){const n=[];for(let s=0;s<=e;s++){const r=s/e;n.push(i+(t-i)*(t>=Cn-1e-6?1-(1-r)**1.6:r))}return n}const yx=.13,Hh=6;function Os(i,t,e,n,s){const r=[];for(let o=0;o<=Hh;o++){const a=Bo(i,t+(e-t)*o/Hh,s);r.push(ae(n*a.x,a.y,i))}return r}const ml=(i,t)=>Math.min(1,yx/Vs(i,t));function ar(i,t=Pn(i)){const e=Ko(i,t),n=ml(i,t);return[...Os(i,n,0,1,t),ae(e*.5,t,i),ae(0,t,i),ae(-e*.5,t,i),...Os(i,0,n,-1,t)]}function Sx(i,t){const e=Pn(i),n=ml(i,e);return t>0?Os(i,1,n,1,e):Os(i,n,1,-1,e)}function Gh(i){const t=Pn(i),e=ml(i,t);return[...Os(i,1,e,1,t).slice(0,-1),...ar(i),...Os(i,e,1,-1,t).slice(1)]}function Ex(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#f4f4f2",t.fillRect(0,0,256,256),t.fillStyle="#1f5fbf",t.beginPath(),t.moveTo(40,30),t.lineTo(216,30),t.quadraticCurveTo(200,190,128,236),t.quadraticCurveTo(56,190,40,30),t.fill(),t.fillStyle="#d8262b",t.beginPath(),t.moveTo(84,60),t.lineTo(172,60),t.quadraticCurveTo(160,150,128,180),t.quadraticCurveTo(96,150,84,60),t.fill();const e=new wr(i);return e.colorSpace=Oe,e.anisotropy=4,e}function Wh(i){const t=Ti(i),e=[];for(let n=0;n<=16;n++){const s=t-2*t*n/16;e.push(ae(s,a0(i,s),i))}return e}function Xh(i){const t=i.getAttribute("position"),e=[];for(let n=0;n<t.count;n++)e.push(.5-t.getX(n)/(2*ws),(t.getZ(n)-pr)/(Cn-pr));return i.setAttribute("uv",new te(e,2)),i}const Tx=-.2;function Di(i,t,e,n){const s=new w().subVectors(t,i),r=new Ut(new ol(e,Math.max(.001,s.length()),4,10),n);return r.position.copy(i).add(t).multiplyScalar(.5),r.quaternion.setFromUnitVectors(new w(0,1,0),s.normalize()),r.castShadow=!0,r}function qh(i,t,e){const n=document.createElement("canvas");n.width=n.height=128;const s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,128,128),s.fillStyle=e,s.font="bold 100px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,64,70);const r=new wr(n);return r.colorSpace=Oe,r}const d0=["#f4f4f4","#222222","#d8262b","#1f5fbf","#f2c230","#1d9a4a"];function f0(i=3){const t=new Ue,e=d0[i-1],n=new qt({color:15856110,roughness:.35,side:Te}),s=new qt({color:13208394,roughness:.45,side:Te}),r=new qt({map:Ex(),roughness:.4,side:Te}),o=new qt({color:14165547,roughness:.4,side:Te}),a=new qt({color:10134445,roughness:.8,side:Te}),c=new qt({color:1781596,roughness:.4,side:Te}),l=new qt({color:2302755,roughness:.5,metalness:.2}),h=new qt({color:13164006,transparent:!0,opacity:.3,roughness:.05,metalness:.1,side:Te,depthWrite:!1}),u=new qt({map:qh(String(i),e,i===1||i===5?"#111":"#fff"),roughness:.4}),d=new qt({color:8948880,roughness:.3,metalness:.8}),f=(q,z)=>{const it=new Ut(q,z);return it.castShadow=!0,it.receiveShadow=!0,t.add(it),it},g=ds(xs,fn,16),_=ds(fn,Cn,28),m=q=>Pn(Math.min(q,fn-1e-6));f($n(g.map(q=>ar(q,m(q)))),s),f($n(_.map(q=>ar(q))),s),f($n([ar(fn,Fo),ar(fn,0)]),s);for(const q of[1,-1])f($n([...g,..._.slice(1)].map(z=>Sx(z,q))),n);f(za([...Gh(xs)]),n),f(za([...Gh(Cn),...Wh(Cn).reverse()]),n);const p=new Ut(new se(W_,vs,zo-Oo),new qt({color:3815994,roughness:.5}));p.position.set(0,Fo-vs/2,(Oo+zo)/2),t.add(p);const v=ds(cn,bs,48);for(const q of[1,-1]){const z=(yt,_t)=>f($n(v.map(Dt=>q>0?yt(Dt):yt(Dt).reverse())),_t),it=(yt,_t,Dt)=>{const bt=[],Kt=ke(yt),Pt=Ia(yt);for(let b=0;b<=4;b++){const y=Dt-(Dt-_t)*b/4,V=Dn(yt)+(Fh(yt)-Dn(yt))*y**1.6;bt.push(ae(q*V,Kt+(Pt-Kt)*Math.sqrt(y),yt))}return q>0?bt:bt.reverse()},mt=yt=>yt>=Tx?.18:1;z(yt=>it(yt,0,mt(yt)),n),z(yt=>it(yt,mt(yt),.82),h),z(yt=>it(yt,.82,1),n),z(yt=>[ae(q*nr(yt),fs,yt),ae(q*nr(yt),Ia(yt),yt),ae(q*Fh(yt),Ia(yt),yt)],n),z(yt=>[ae(q*nr(yt),ke(yt)+.002,yt),ae(q*Dn(yt),ke(yt)+.002,yt)].reverse(),n),f(Xh($n(ds(xs,bs,40).map(yt=>q>0?[ae(Ti(yt),ke(yt),yt),ae(Dn(yt),ke(yt),yt)]:[ae(-Dn(yt),ke(yt),yt),ae(-Ti(yt),ke(yt),yt)]))),r);const gt=-1.2,It=-.92,Ft=ke(gt)+.03,Wt=As-.03,U=new Ut(new Bn(It-gt,Wt-Ft),u);U.position.set(q*(Dn((gt+It)/2)+.004),(Ft+Wt)/2,(gt+It)/2),U.rotation.y=q*Math.PI/2,t.add(U)}f(Xh($n(ds(bs-.02,Cn,16).map(Wh))),r),f(za([ae(Dn(cn),ke(cn),cn),ae(Dn(cn),As,cn),ae(-Dn(cn),As,cn),ae(-Dn(cn),ke(cn),cn)]),n),f($n(v.map(q=>[ae(nr(q),fs,q),ae(-nr(q),fs,q)])),a);const S=ds(xs,1.3,30);for(const[q,z,it]of[[c,.004,.05],[o,.058,.07]])for(const mt of[1,-1])f($n(S.map(gt=>{const It=ke(gt),Ft=Pn(gt),Wt=Vs(gt,Ft),U=Bo(gt,1-z/Wt,Ft).x*1.004+.002,yt=Bo(gt,1-it/Wt,Ft).x*1.004+.002;return mt>0?[ae(U,It-z,gt),ae(yt,It-it,gt)]:[ae(-yt,It-it,gt),ae(-U,It-z,gt)]})),q);const x=new Ue;x.position.set(0,.56,-.02),x.rotation.x=-.9;const L=new Ut(new ll(.13,.016,8,24),l);x.add(L);const R=new Ut(new se(.24,.02,.012),l);x.add(R),t.add(x),t.add(Di(ae(0,a0(G_,0)-.02,.06),ae(0,.55,-.01),.018,l));const A=new Ue;A.position.copy(Fs),t.add(A);const P=new Ut(new se(.2,.12,.08),d);P.position.set(0,-.02,0),A.add(P);const E=new Ut(new ii(.018,.018,.26,10),d);E.rotation.z=Math.PI/2,A.add(E);const M=new Ue;M.position.copy(fl),A.add(M);const C=new Ut(new se(.16,.16,.08),d);C.position.set(0,-.02,.05),M.add(C);const N=new Ut(new Mx(.36,.43,.33,4,.07),l);N.position.set(0,.235,-.165),N.castShadow=!0,M.add(N);const F=new qt({map:qh(String(i),e,i===1||i===5?"#111":"#fff"),roughness:.4});for(const q of[1,-1]){const z=new Ut(new Bn(.2,.2),F);z.position.set(q*.182,.25,-.165),z.rotation.y=q*Math.PI/2,M.add(z)}const W=new Ut(new se(.07,.6,.12),l);W.position.set(0,-.27,-.13),M.add(W);const X=new Ut(new se(.22,.01,.26),l);X.position.set(0,-.44,-.14),M.add(X);const Y=Di(ae(0,-.57,0),ae(0,-.57,-.24),.045,l);M.add(Y);const tt=new Ut(new se(.014,.12,.12),l);tt.position.set(0,-.66,-.1),M.add(tt);const Z=new Ue;Z.position.set(0,-.57,-.29);for(let q=0;q<3;q++){const z=new Ut(new se(.06,.12,.008),d);z.position.y=.07;const it=new Ue;it.rotation.z=q*Math.PI*2/3,z.rotation.y=.5,it.add(z),Z.add(it)}M.add(Z);const at=new Ue;at.position.set(0,fs,-.5),t.add(at);const ct=new qt({color:e,roughness:.7}),Et=new qt({color:2764602,roughness:.8}),lt=new qt({color:16185078,roughness:.25}),ut=(q,z,it)=>ae(q,z-fs,it+.5);for(const q of[1,-1])at.add(Di(ut(q*.12,.17,-.33),ut(q*.12,.16,-.82),.055,Et)),at.add(Di(ut(q*.12,.19,-.33),ut(q*.11,.5,-.66),.075,Et)),at.add(Di(ut(q*.19,.9,-.5),ut(q*.22,.72,-.27),.045,ct)),at.add(Di(ut(q*.22,.72,-.27),ut(q*.11,.6,-.06),.04,ct));at.add(Di(ut(0,.52,-.68),ut(0,.9,-.5),.16,ct));const G=new Ut(new Sr(.135,20,14),lt);G.position.copy(ut(0,1.08,-.4)),G.castShadow=!0,at.add(G);const D=new Ut(new Sr(.137,20,10,Math.PI/2-.9,1.8,1.2,.5),new qt({color:1118481,roughness:.1,metalness:.5}));return D.position.copy(G.position),at.add(D),{root:t,tilt:A,motor:M,prop:Z,rider:at,wheel:x}}function p0(i,t,e){i.root.position.copy(t.origin),i.root.quaternion.copy(t.quat),i.tilt.rotation.x=(t.tilt-ko)*Math.PI/180,i.tilt.position.y=Fs.y+xn.motorHeight,i.motor.rotation.y=t.steerAngle,i.prop.rotation.z+=t.engineOmega*e*.06;for(const o of i.wheel.children)o.rotation.z=-t.steerAngle*2.5;const n=t.riderB.x-hn.x,s=t.riderB.y-hn.y,r=t.riderB.z-hn.z;i.rider.position.set(n*.6,fs+s*.5,-.5+r*.5),i.rider.rotation.set(r*.9,0,-n*.9)}const Po=220,Fc=352,ho=Po/Fc,m0=new Yt(6989532),gl=new Yt(13624306),$o=new w(-.4,.55,.75).normalize(),Yh=`
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
`,wx=new w(.95,.38,.32),bx=new Yt(2382170),Zh=.5,g0="boatgame.waterFx";function Ax(){try{return localStorage.getItem(g0)!=="0"}catch{return!0}}class _0{constructor(t){O(this,"mesh");O(this,"uniforms");O(this,"reflTarget",new ci(1,1,{type:si}));O(this,"refrTarget",new ci(1,1,{type:si,depthTexture:new tl(1,1)}));O(this,"mirror",new un);O(this,"hidden",[]);O(this,"size",new Tt);O(this,"passes",Ax());O(this,"waves");O(this,"wakeTex",null);O(this,"wakeHalf",null);this.waves=t;const e=t.waves.length,n=new Bn(Po,Po,Fc,Fc);n.rotateX(-Math.PI/2);const s=new Lc(new Uint16Array(4),2,2,xr,si);s.needsUpdate=!0,this.uniforms={uTime:{value:0},uA:{value:Array.from({length:e},()=>new ve)},uB:{value:Array.from({length:e},()=>new ve)},uSun:{value:$o},uSkyTop:{value:m0},uSkyHorizon:{value:gl},uFogFar:{value:Po*.48},uWake:{value:s},uWakeOrigin:{value:new Tt(-1e6,-1e6)},uWakeDx:{value:1},uWakeN:{value:2},uRefl:{value:this.reflTarget.texture},uReflMat:{value:new ce},uReflOn:{value:0},uRefr:{value:this.refrTarget.texture},uRefrDepth:{value:this.refrTarget.depthTexture},uRefrOn:{value:0},uRes:{value:new Tt(1,1)},uNear:{value:.1},uFar:{value:1e3},uAbsorb:{value:wx},uScatter:{value:bx}};const r=new Mn({uniforms:this.uniforms,defines:{NW:e},vertexShader:`
        uniform float uTime;
        uniform vec4 uA[NW]; // dirX, dirZ, amp, k
        uniform vec4 uB[NW]; // omega, phase
        ${Yh}
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
        ${Yh}
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
      `});this.mesh=new Ut(n,r),this.mesh.frustumCulled=!1}updateWake(t){const e=t.n;(!this.wakeTex||!this.wakeHalf||this.wakeHalf.length!==e*e)&&(this.wakeHalf=new Uint16Array(e*e),this.wakeTex=new Lc(this.wakeHalf,e,e,xr,si),this.wakeTex.magFilter=vn,this.wakeTex.minFilter=vn,this.uniforms.uWake.value=this.wakeTex,this.uniforms.uWakeDx.value=t.dx,this.uniforms.uWakeN.value=e);const n=t.h,s=this.wakeHalf;for(let r=0;r<s.length;r++)s[r]=kd.toHalfFloat(n[r]);this.wakeTex.needsUpdate=!0,this.uniforms.uWakeOrigin.value.set(t.originX,t.originZ)}hide(...t){this.hidden.push(...t)}renderPasses(t,e,n){const s=this.uniforms;if(!this.passes){s.uReflOn.value=s.uRefrOn.value=0;return}t.getDrawingBufferSize(this.size),s.uRes.value.copy(this.size);const r=Math.max(1,Math.floor(this.size.x*Zh)),o=Math.max(1,Math.floor(this.size.y*Zh));(this.reflTarget.width!==r||this.reflTarget.height!==o)&&(this.reflTarget.setSize(r,o),this.refrTarget.setSize(r,o));const a=this.hidden.map(u=>u.visible);this.mesh.visible=!1;for(const u of this.hidden)u.visible=!1;const c=t.shadowMap.autoUpdate;t.shadowMap.autoUpdate=!1;const l=t.getRenderTarget();n.updateMatrixWorld(),t.setRenderTarget(this.refrTarget),t.clear(),t.render(e,n),s.uNear.value=n.near,s.uFar.value=n.far,s.uRefrOn.value=1;const h=n.position;if(h.y>.05){const u=this.mirror;u.copy(n,!1),u.position.set(h.x,-h.y,h.z);const d=new w(0,0,-1).applyQuaternion(n.quaternion),f=new w(0,1,0).applyQuaternion(n.quaternion);d.y=-d.y,f.y=-f.y,u.up.copy(f),u.lookAt(u.position.clone().add(d)),u.projectionMatrix.copy(n.projectionMatrix),u.updateMatrixWorld(),u.matrixWorldInverse.copy(u.matrixWorld).invert(),s.uReflMat.value.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse);const g=t.clippingPlanes;t.clippingPlanes=[new Qn(new w(0,1,0),.05)],t.setRenderTarget(this.reflTarget),t.clear();const _=e.userData.sky,m=_==null?void 0:_.position.clone();_==null||_.position.copy(u.position),t.render(e,u),_&&m&&_.position.copy(m),t.clippingPlanes=g,s.uReflOn.value=1}else s.uReflOn.value=0;t.setRenderTarget(l),t.shadowMap.autoUpdate=c,this.mesh.visible=!0,this.hidden.forEach((u,d)=>u.visible=a[d])}update(t,e){this.uniforms.uTime.value=t;const n=this.uniforms.uA.value,s=this.uniforms.uB.value;this.waves.waves.forEach((r,o)=>{n[o].set(r.dirX,r.dirZ,r.amp*this.waves.scale,r.k),s[o].set(r.omega,r.phase,0,0)}),this.mesh.position.set(Math.round(e.x/ho)*ho,0,Math.round(e.z/ho)*ho)}}function x0(){const i=new Ns(1500,48);i.rotateX(-Math.PI/2);const t=new jc({color:new Yt(10470612),fog:!0}),e=new Ut(i,t);return e.position.y=-1.6,e}const dn=[new w(0,0,150),new w(0,0,-150)],Oc=0,Ot={x0:-45,x1:85,z0:-215,z1:200},an=.8,Kh=3,Ui=dn[1].z+120,cr=6,lr=4.5,ln=7,Rx=cr*lr+1,Cx=[16053492,2236962,14165547,2056127,15909424,1940042],Px=["#f4f4f4","#222222","#d8262b","#1f5fbf","#f2c230","#1d9a4a"];function Lx(i,t,e,n,s){const r=document.createElement("canvas");r.width=n,r.height=s;const o=r.getContext("2d");o.fillStyle=t,o.fillRect(0,0,n,s),o.fillStyle=e,o.font=`bold ${Math.floor(s*.72)}px sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillText(i,n/2,s*.54,n*.94);const a=new wr(r);return a.colorSpace=Oe,a.anisotropy=4,a}function Dx(i,t,e){const n=document.createElement("canvas");n.width=256,n.height=256;const s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,256,256),s.fillStyle=e,s.font="bold 120px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,128,80);const r=new wr(n);return r.colorSpace=Oe,r}function Ix(){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d");e.fillStyle="#111",e.fillRect(0,0,512,512),e.translate(512/2,512/2),e.fillStyle="#f2c230";for(let l=0;l<12;l++)e.save(),e.rotate(l/12*Math.PI*2),e.beginPath(),e.moveTo(0,-512*.46),e.lineTo(-512*.035,-512*.38),e.lineTo(512*.035,-512*.38),e.closePath(),e.fill(),e.restore();e.fillStyle="#fff",e.font=`bold ${512*.11}px sans-serif`,e.textAlign="center",e.textBaseline="middle";const n=(l,h)=>[Math.sin((12-l)/12*Math.PI*2)*h,-Math.cos((12-l)/12*Math.PI*2)*h],[s,r]=n(5,512*.27),[o,a]=n(10,512*.27);e.fillText("5",s,r),e.fillText("10",o,a);const c=new wr(t);return c.colorSpace=Oe,c}class v0{constructor(t){O(this,"group",new Ue);O(this,"floaters",[]);O(this,"floorTime",{value:0});O(this,"clockHand",null);O(this,"waves");this.waves=t;for(const f of dn)this.addMark(f.x,f.z);const e=new qt({color:11117980,roughness:1}),n=new t0;n.moveTo(-1400,-1400),n.lineTo(1400,-1400),n.lineTo(1400,1400),n.lineTo(-1400,1400),n.lineTo(-1400,-1400);const s=new No;s.moveTo(Ot.x0,Ot.z0),s.lineTo(Ot.x0,Ot.z1),s.lineTo(Ot.x1,Ot.z1),s.lineTo(Ot.x1,Ot.z0),s.lineTo(Ot.x0,Ot.z0),n.holes.push(s);const r=new cl(n);r.rotateX(Math.PI/2);const o=new Ut(r,new qt({color:9210498,roughness:1,side:Te}));o.position.y=an,o.receiveShadow=!0,this.group.add(o);const a=an+Kh,c=[[Ot.x0-.3,(Ot.z0+Ot.z1)/2,.6,Ot.z1-Ot.z0],[Ot.x1+.3,(Ot.z0+Ot.z1)/2,.6,Ot.z1-Ot.z0],[(Ot.x0+Ot.x1)/2,Ot.z0-.3,Ot.x1-Ot.x0,.6],[(Ot.x0+Ot.x1)/2,Ot.z1+.3,Ot.x1-Ot.x0,.6]];for(const[f,g,_,m]of c){const p=new Ut(new se(_,a,m),e);p.position.set(f,an-a/2,g),this.group.add(p)}const l=new qt({color:9081227,roughness:1});l.onBeforeCompile=f=>{f.uniforms.uTime=this.floorTime,f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
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
          gl_FragColor.rgb *= 0.8 + 1.1 * causticAt(vFloorW.xz, uTime);`)};const h=new Ut(new Bn(Ot.x1-Ot.x0,Ot.z1-Ot.z0),l);h.rotation.x=-Math.PI/2,h.position.set((Ot.x0+Ot.x1)/2,-Kh,(Ot.z0+Ot.z1)/2),this.group.add(h);const u=new qt({color:15263976,roughness:.6}),d=new Ut(new se(.08,.08,Ot.z1-Ot.z0),u);d.position.set(Ot.x0-.5,an+1.1,(Ot.z0+Ot.z1)/2),this.group.add(d),this.addStand(),this.addPit(),this.addClock(),this.addDistanceSigns(),this.addBoard(),this.addCity()}addStand(){const t=new Ue,e=new qt({color:15000284,roughness:.8}),n=new qt({color:6127513,roughness:.15,metalness:.4}),s=new qt({color:5204874,roughness:.9}),r=new qt({color:13225168,roughness:.6}),o=260;for(let l=0;l<5;l++){const h=new Ut(new se(1.6,.45,o),l%2?e:s);h.position.set(-48-l*1.6,an+.22+l*.45,0),t.add(h)}[{x:-58,w:8,h:6},{x:-61,w:14,h:6},{x:-64,w:20,h:6},{x:-67,w:26,h:6}].forEach((l,h)=>{const u=an+2.2+h*6,d=new Ut(new se(l.w,l.h,o),e);d.position.set(l.x-l.w/2+4,u+l.h/2,0),d.castShadow=!0,t.add(d);const f=new Ut(new se(.1,l.h*.6,o-4),n);f.position.set(l.x+4.06,u+l.h*.55,0),t.add(f)});const c=new Ut(new se(34,.8,o+6),r);c.position.set(-76,an+2.2+24.4,0),t.add(c),this.group.add(t)}addPit(){const t=new Ue,e=new qt({color:10131600,roughness:1}),n=Ot.x0,s=cr*lr,r=new Ut(new se(ln,.5,s+1),e);r.position.set(n+ln/2-2.5,.05,Ui),t.add(r);for(let l=0;l<=cr;l++){const h=new Ut(new se(4,.35,.5),e);h.position.set(n+ln-.5,.05,Ui-s/2+l*lr),t.add(h)}for(let l=0;l<cr;l++){const h=cr-l,u=Cx[h-1],d=new qt({color:u,roughness:.55}),f=Ui-s/2+(l+.5)*lr,g=new Ue,_=lr-.6;for(const S of[-1,1]){const x=new Ut(new se(ln-2,1.6,.25),d);x.position.set(0,1.1,S*_/2),g.add(x)}const m=new Ut(new ii(_/2,_/2,ln-2,20,1,!0,0,Math.PI),d);m.rotation.set(0,0,Math.PI/2),m.rotation.order="ZYX",m.position.set(0,1.9,0),m.material.side=Te,g.add(m);const p=h===1||h===5?"#111":"#fff",v=new Ut(new Ns(_/2,24,0,Math.PI),new qt({map:Dx(String(h),Px[h-1],p),roughness:.6}));v.rotation.y=Math.PI/2,v.position.set((ln-2)/2+.01,1.9,0),g.add(v),g.position.set(n+ln/2-2,.3,f),t.add(g)}const o=new Ut(new se(ln+1,.3,s+2),new qt({color:4020858,roughness:.6}));o.position.set(n+ln/2-2.5,4.6,Ui),t.add(o);const a=new Ut(new Bn(s,1.4),new qt({map:Lx("BOAT RACE 住之江　ピット","#3d5a7a","#fff",1024,64),roughness:.6}));a.rotation.y=Math.PI/2,a.position.set(n+ln-1.99,5.3,Ui),t.add(a);const c=new Ut(new se(.2,1.4,s),new qt({color:2901344}));c.position.set(n+ln-2.1,5.3,Ui),t.add(c);for(const l of t.children)l.castShadow=!0;this.group.add(t)}addClock(){const t=new Ue,e=new qt({color:1973790,roughness:.7}),n=new qt({color:5593695,roughness:.6,metalness:.3});for(const h of[-2.6,2.6]){const u=new Ut(new se(.5,6,.5),n);u.position.set(0,3,h),t.add(u)}const s=new Ut(new se(.5,6,6),e);s.position.set(0,8,0),t.add(s);const r=new Ut(new Ns(2.5,48),new qt({map:Ix(),roughness:.5}));r.rotation.y=-Math.PI/2,r.position.set(-.26,8,0),t.add(r);const o=new Ue,a=new Ut(new se(.05,2.2,.18),new qt({color:16777215,roughness:.4,emissive:2236962}));a.position.y=1,o.add(a);const c=new Ut(new ii(.2,.2,.08,16),new qt({color:14540253}));c.rotation.z=Math.PI/2,o.add(c),o.position.set(-.32,8,0),t.add(o),this.clockHand=o;const l=new Ut(new se(.4,2,1.5),new qt({color:14540253,roughness:.4}));l.position.set(0,7.5,4.2),t.add(l),t.position.set(Ot.x1+3,an,Oc+6);for(const h of t.children)h.castShadow=!0;this.group.add(t)}addDistanceSigns(){const t=new qt({color:9080724,roughness:.6,metalness:.3}),e=12,n=3,s=1.5,r=new ye;r.setAttribute("position",new te([-.35,0,0,.35,0,0,0,-.75,0],3)),r.setIndex([0,2,1]),r.computeVertexNormals();const o=new qt({roughness:.8,side:Te}),a=Ot.x0-.8,c=Ot.x1+.8,l=an+e,h=_=>{const m=(_-a)/(c-a);return l-.3-n*4*m*(1-m)},u=Math.floor((c-a)/s)-1,d=new ce,f=new Yt(14165547),g=new Yt(16053492);for(const _ of[50,100,150]){const m=Oc-_;for(const S of[a,c]){const x=new Ut(new ii(.12,.16,e,10),t);x.position.set(S,an+e/2,m),x.castShadow=!0,this.group.add(x)}const p=[];for(let S=0;S<=40;S++){const x=a+(c-a)*S/40;p.push(new w(x,h(x),m))}this.group.add(new Ku(new ye().setFromPoints(p),new nl({color:3355443})));const v=new k1(r,o,u);for(let S=0;S<u;S++){const x=a+s*(S+1),L=(h(x+.1)-h(x-.1))/.2;d.makeRotationZ(Math.atan(L)).setPosition(x,h(x),m),v.setMatrixAt(S,d),v.setColorAt(S,S%2?g:f)}v.castShadow=!0,this.group.add(v)}}setClock(t){if(!this.clockHand)return;const e=(t%12+12)%12/12;this.clockHand.rotation.x=e*Math.PI*2}addBoard(){const t=new Ut(new se(1.2,14,70),new qt({color:2764083,roughness:.7}));t.position.set(Ot.x1+8,an+9,0),this.group.add(t);const e=new Ut(new Bn(66,11),new qt({color:1318958,emissive:1914192,roughness:.4}));e.rotation.y=-Math.PI/2,e.position.set(Ot.x1+7.35,an+9.5,0),this.group.add(e)}addCity(){const t=[12040637,13222840,10462893,14079698].map(s=>new qt({color:s,roughness:.9}));let e=12345;const n=()=>(e=e*16807%2147483647)%1e4/1e4;for(let s=0;s<140;s++){const r=n()*Math.PI*2,o=330+n()*700,a=Math.cos(r)*o,c=Math.sin(r)*o,l=12+n()**2*90,h=20+n()*40,u=new Ut(new se(h,l,20+n()*40),t[s%t.length]);u.position.set(a,an+l/2,c),u.rotation.y=n()*Math.PI,this.group.add(u)}}addMark(t,e){const n=new Ue,s=new qt({color:15895070,roughness:.5}),r=new qt({color:16119285,roughness:.5}),o=new Ut(new ii(.7,.8,1.8,24),s);o.position.y=.6,n.add(o);const a=new Ut(new ii(.71,.75,.35,24),r);a.position.y=.7,n.add(a);const c=new Ut(new al(.7,.5,24),s);c.position.y=1.75,n.add(c);for(const l of n.children)l.castShadow=!0;this.group.add(n),this.floaters.push({obj:n,x:t,z:e,draft:.2})}update(t){this.floorTime.value=t;for(const e of this.floaters)e.obj.position.set(e.x,this.waves.height(e.x,e.z,t)-e.draft,e.z)}}const sr=160,$h=5,Ux=.035;class M0{constructor(t){O(this,"mesh");O(this,"points",[]);O(this,"lastAdd",-1);O(this,"pos");O(this,"across");O(this,"waves");this.waves=t,this.pos=new Float32Array(sr*2*3),this.across=new Float32Array(sr*2*3);const e=[];for(let r=0;r<sr-1;r++){const o=r*2;e.push(o,o+2,o+1,o+1,o+2,o+3)}const n=new ye;n.setAttribute("position",new Ge(this.pos,3).setUsage(hr)),n.setAttribute("aWake",new Ge(this.across,3).setUsage(hr)),n.setIndex(e);const s=new Mn({transparent:!0,depthWrite:!1,side:Te,vertexShader:`
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
      `});this.mesh=new Ut(n,s),this.mesh.frustumCulled=!1}add(t,e,n,s){if(t-this.lastAdd<Ux)return;this.lastAdd=t;const r=Math.hypot(n.x,n.z)||1;this.points.unshift({x:e.x,z:e.z,sx:n.x/r,sz:n.z/r,born:t,strength:s}),this.points.length>sr&&this.points.pop()}clear(){this.points=[]}update(t){for(;this.points.length&&t-this.points[this.points.length-1].born>$h;)this.points.pop();const e=this.points.length;for(let s=0;s<sr;s++){const r=s*6;if(e===0){this.across[r+2]=this.across[r+5]=0;continue}const o=this.points[Math.min(s,e-1)],a=Math.min(1,(t-o.born)/$h),c=.45+Math.sqrt(a)*4.5,l=this.waves.height(o.x,o.z,t)+.03;this.pos[r]=o.x+o.sx*c,this.pos[r+1]=l,this.pos[r+2]=o.z+o.sz*c,this.pos[r+3]=o.x-o.sx*c,this.pos[r+4]=l,this.pos[r+5]=o.z-o.sz*c;const h=s<e?o.strength:0;this.across.set([1,a,h,-1,a,h],r)}const n=this.mesh.geometry;n.attributes.position.needsUpdate=!0,n.attributes.aWake.needsUpdate=!0}}const uo=60,jh=70,Nx=30,Fx=1.5;class Ox{constructor(t){O(this,"input",{steer:0,throttle:0,leanX:0,leanZ:0});O(this,"lever",0);O(this,"tiltActive",!1);O(this,"swap",!1);O(this,"tiltDeg",0);O(this,"touches",new Map);O(this,"keys",new Set);O(this,"layer");O(this,"leanPad");O(this,"leanKnob");O(this,"leverTrack");O(this,"steerPad");O(this,"steerKnob");O(this,"tiltAngle",0);O(this,"tiltZero",0);O(this,"tiltSmoothed",0);O(this,"lastMotion",0);this.layer=t,this.leanPad=document.getElementById("lean-pad"),this.leanKnob=this.leanPad.querySelector(".knob"),this.leverTrack=document.getElementById("lever"),this.steerPad=document.getElementById("steer-pad"),this.steerKnob=this.steerPad.querySelector(".knob"),t.addEventListener("pointerdown",e=>this.down(e)),t.addEventListener("pointermove",e=>this.move(e)),t.addEventListener("pointerup",e=>this.up(e)),t.addEventListener("pointercancel",e=>this.up(e)),window.addEventListener("keydown",e=>this.keys.add(e.code)),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),window.addEventListener("devicemotion",e=>this.onMotion(e))}async enableTilt(){const t=window.DeviceMotionEvent;if(t!=null&&t.requestPermission)try{if(await t.requestPermission()!=="granted")return!1}catch{return!1}for(let e=0;e<15;e++){if(performance.now()-this.lastMotion<500)return this.recenter(),!0;await new Promise(n=>setTimeout(n,100))}return!1}recenter(){this.tiltZero=this.tiltAngle,this.tiltSmoothed=0}onMotion(t){var o;const e=t.accelerationIncludingGravity;if(!e||e.x==null||e.y==null)return;const n=(((o=screen.orientation)==null?void 0:o.angle)??window.orientation??0)*Math.PI/180,s=e.x*Math.cos(n)-e.y*Math.sin(n),r=e.x*Math.sin(n)+e.y*Math.cos(n);Math.hypot(s,r)<2||(this.tiltAngle=Math.atan2(-s,r)*180/Math.PI,this.lastMotion=performance.now())}zoneOf(t){const e=window.innerWidth;return t<e*.38?"lever":this.swap?!this.tiltActive&&t<e*.68?"lean":"steer":!this.tiltActive&&t<e*.68?"steer":"lean"}down(t){t.preventDefault();const e=this.zoneOf(t.clientX);for(const n of this.touches.values())if(n.role===e)return;try{this.layer.setPointerCapture(t.pointerId)}catch{}this.touches.set(t.pointerId,{id:t.pointerId,role:e,x0:t.clientX,y0:t.clientY,x:t.clientX,y:t.clientY,lever0:this.lever}),e==="lean"&&this.placePad(this.leanPad,t.clientX,t.clientY),e==="steer"&&this.placePad(this.steerPad,t.clientX,t.clientY),e==="lever"&&this.leverTrack.classList.add("active")}placePad(t,e,n){t.style.left=`${e}px`,t.style.top=`${n}px`,t.classList.add("active")}move(t){const e=this.touches.get(t.pointerId);if(e&&(e.x=t.clientX,e.y=t.clientY,e.role==="lever")){const n=this.leverTrack.getBoundingClientRect().height||200;this.lever=Math.max(0,Math.min(1,e.lever0-(e.y-e.y0)/n))}}up(t){const e=this.touches.get(t.pointerId);e&&(this.touches.delete(t.pointerId),e.role==="lean"&&this.resetPad(this.leanPad,this.leanKnob),e.role==="steer"&&this.resetPad(this.steerPad,this.steerKnob),e.role==="lever"&&this.leverTrack.classList.remove("active"))}resetPad(t,e){t.classList.remove("active"),t.style.left=t.style.top="",e.style.transform=""}update(t){const e=u=>this.keys.has(u),n=Math.exp(-t/.25);let s=this.input.leanX*n,r=this.input.leanZ*n,o=0;for(const u of this.touches.values()){const d=u.x-u.x0,f=u.y-u.y0;u.role==="lean"?(s=Math.max(-1,Math.min(1,d/uo)),r=Math.max(-1,Math.min(1,-f/uo)),this.leanKnob.style.transform=`translate(${s*uo}px, ${-r*uo}px)`):u.role==="steer"&&(o=Math.max(-1,Math.min(1,d/jh)),this.steerKnob.style.transform=`translateX(${o*jh}px)`)}if(this.tiltActive){let u=this.tiltAngle-this.tiltZero;u=(u+540)%360-180,this.tiltDeg=u,u=Math.sign(u)*Math.max(0,Math.abs(u)-Fx);const d=Math.max(-1,Math.min(1,u/Nx));this.tiltSmoothed+=(d-this.tiltSmoothed)*(1-Math.exp(-t*20)),this.swap?s=this.tiltSmoothed:o=this.tiltSmoothed}const a=(e("ArrowRight")||e("KeyD")?1:0)-(e("ArrowLeft")||e("KeyA")?1:0),c=(e("KeyE")?1:0)-(e("KeyQ")?1:0),l=(e("KeyR")?1:0)-(e("KeyF")?1:0),h=1-Math.exp(-t*8);a&&(o=this.input.steer+(a-this.input.steer)*h),(c||l)&&(s=this.input.leanX+(c-this.input.leanX)*h,r=this.input.leanZ+(l-this.input.leanZ)*h),(e("ArrowUp")||e("KeyW"))&&(this.lever=Math.min(1,this.lever+t*1.5)),(e("ArrowDown")||e("KeyS"))&&(this.lever=Math.max(0,this.lever-t*1.5)),this.input.steer=o,this.input.leanX=s,this.input.leanZ=r,this.input.throttle=this.lever,this.leverTrack.querySelector(".fill").style.height=`${this.lever*100}%`,this.leverTrack.querySelector(".knob").style.bottom=`${this.lever*100}%`}}const In=5e3,Jh=9.81,Fe={Spray:0,Mist:1,Foam:2,Boil:3};class y0{constructor(t){O(this,"points");O(this,"pos",new Float32Array(In*3));O(this,"vel",new Float32Array(In*3));O(this,"size",new Float32Array(In));O(this,"alpha",new Float32Array(In));O(this,"size0",new Float32Array(In));O(this,"life",new Float32Array(In));O(this,"maxLife",new Float32Array(In));O(this,"kind",new Uint8Array(In));O(this,"next",0);O(this,"material");O(this,"surface");O(this,"budget",0);O(this,"left",new w);O(this,"tmp",new w);this.surface=t;const e=new ye;e.setAttribute("position",new Ge(this.pos,3).setUsage(hr)),e.setAttribute("aSize",new Ge(this.size,1).setUsage(hr)),e.setAttribute("aAlpha",new Ge(this.alpha,1).setUsage(hr)),this.material=new Mn({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:400}},vertexShader:`
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
      `}),this.points=new G1(e,this.material),this.points.frustumCulled=!1}resize(t,e,n){this.material.uniforms.uScale.value=t*n/(2*Math.tan(e*Math.PI/360))}clear(){this.alpha.fill(0),this.life.fill(0)}spawn(t,e,n,s,r,o,a,c,l){if(this.budget<=0)return;this.budget--;const h=this.next;this.next=(this.next+1)%In;const u=h*3;this.pos[u]=e,this.pos[u+1]=n,this.pos[u+2]=s,this.vel[u]=r,this.vel[u+1]=o,this.vel[u+2]=a,this.kind[h]=t,this.size0[h]=c,this.size[h]=c,this.life[h]=l,this.maxLife[h]=l,this.alpha[h]=1}count(t){if(!(t>0))return 0;const e=Math.floor(Math.min(t,this.budget));return e+(e<this.budget&&Math.random()<t-e?1:0)}update(t,e,n){this.emit(t,e,n,600),this.step(t,e)}emit(t,e,n,s){this.budget=s,this.emitHull(t,e,n),this.emitProp(t,e,n)}emitHull(t,e,n){const s=n.hullFx,r=Er.FX_STRIDE;this.left.set(1,0,0).applyQuaternion(n.quat);const o=this.left.x,a=this.left.z,c=Math.hypot(o,a)||1,l=n.vel;for(let h=0;h<n.hull.length;h++){const u=n.hull[h],d=h*r,f=s[d],g=s[d+1],_=s[d+2],m=n.impact[h];m>0&&(n.impact[h]=0,m>.7&&this.splash(f,_,e,m,u.area,l));const p=s[d+11];if(p<=0)continue;const v=s[d+3],S=s[d+4],x=s[d+5],L=s[d+10],R=s[d+6],A=s[d+7],P=s[d+8],E=v-L*R,M=S-L*A,C=x-L*P,N=Math.hypot(E,M,C),F=Math.max(0,L),W=this.surface.height(f,_,e);if(u.side!==0){const X=o/c*u.side,Y=a/c*u.side,tt=Math.max(0,v*X+x*Y);if(N<2.5&&tt<.8&&F<.6)continue;const Z=1+1.5*(1-p),at=u.area*p*Z*(.35*N+3*tt+5*F),ct=.16*N+1.1*tt+.6*F,Et=.09*N+.9*tt+1.4*F,lt=this.count(at*t*90),ut=l.x*.04,G=l.z*.04;for(let D=0;D<lt;D++){const q=.7+Math.random()*.6,z=(Math.random()-.5)*.2;this.spawn(Fe.Spray,f+X*.04+this.left.z*z,Math.max(g,W)+.02,_+Y*.04-this.left.x*z,X*ct*q+ut+(Math.random()-.5)*.3*ct,Et*(.6+Math.random()*.8),Y*ct*q+G+(Math.random()-.5)*.3*ct,.035+Math.random()*.07,1.5),Math.random()<.2&&this.spawn(Fe.Mist,f+X*.1,Math.max(g,W)+.05,_+Y*.1,X*ct*.6,Et*.5,Y*ct*.6,.35+Math.random()*.4,.9+Math.random()*.6)}}else if(F>.8){const X=this.count(u.area*F*F*t*40);for(let Y=0;Y<X;Y++){const tt=Math.random()*Math.PI*2,Z=F*(.3+Math.random()*.5);this.spawn(Fe.Spray,f,Math.max(g,W)+.02,_,Math.cos(tt)*Z+l.x*.1,F*(.8+Math.random()*.8),Math.sin(tt)*Z+l.z*.1,.05+Math.random()*.08,1.5)}}}}splash(t,e,n,s,r,o){const a=this.surface.height(t,e,n),c=Math.min(70,Math.round(s*s*r*45));for(let h=0;h<c;h++){const u=Math.random()*Math.PI*2,d=s*(.35+Math.random()*.75);this.spawn(Fe.Spray,t+Math.cos(u)*.15,a+.03,e+Math.sin(u)*.15,Math.cos(u)*d+o.x*.15,s*(.5+Math.random()*.8),Math.sin(u)*d+o.z*.15,.05+Math.random()*.1,1.5)}const l=Math.min(8,Math.round(s*r*6));for(let h=0;h<l;h++){const u=Math.random()*Math.PI*2;this.spawn(Fe.Mist,t,a+.1,e,Math.cos(u)*s*.4+o.x*.1,s*.35,Math.sin(u)*s*.4+o.z*.1,.5+Math.random()*.5,.8+Math.random()*.5)}for(let h=0;h<4;h++){const u=Math.random()*Math.PI*2;this.spawn(Fe.Foam,t+Math.cos(u)*.3,a,e+Math.sin(u)*.3,Math.cos(u)*.4,0,Math.sin(u)*.4,.35+Math.random()*.3,2+Math.random())}}emitProp(t,e,n){const s=n.propState,r=n.engineOmega/(2*Math.PI);if(r<5)return;const o=n.prop.diameter,a=n.propPos,c=n.propAxis,l=n.vel,h=this.surface.height(a.x,a.z,e),u=Math.PI*r*o,d=Math.max(0,Math.min(1,(.9-s.tipRatio)/.9)),f=n.propJet,g=d*d*r*4*(1+2*s.vent)*Math.min(1,n.throttle+.2),_=this.count(g*t);for(let v=0;v<_;v++){const S=u*.12*d*(.6+Math.random()*.7),x=(Math.random()-.5)*u*.08*d;this.spawn(Fe.Spray,a.x-c.x*.2,h+.03,a.z-c.z*.2,l.x*.15-c.x*f+c.z*x,S,l.z*.15-c.z*f-c.x*x,.06+Math.random()*.1,2),Math.random()<.15&&this.spawn(Fe.Mist,a.x-c.x*.4,h+.2,a.z-c.z*.4,l.x*.1,S*.5,l.z*.1,.5+Math.random()*.5,1+Math.random()*.5)}const m=s.cav*70+s.vent*140,p=this.count(m*t*Math.min(1,r/60));for(let v=0;v<p;v++){const S=.3+Math.random()*.6,x=(Math.random()-.5)*.35,L=a.x-c.x*S+c.z*x,R=a.z-c.z*S-c.x*x;this.spawn(Fe.Boil,L,this.surface.height(L,R,e)+.02,R,-c.x*f*.4,0,-c.z*f*.4,.22+Math.random()*.25,.5+Math.random()*.6)}}step(t,e){const{pos:n,vel:s,life:r,maxLife:o,kind:a,alpha:c,size:l,size0:h}=this;for(let d=0;d<In;d++){if(r[d]<=0)continue;r[d]-=t;const f=d*3,g=1-r[d]/o[d];if(r[d]<=0){c[d]=0;continue}const _=a[d];if(_===Fe.Spray||_===Fe.Mist){const m=_===Fe.Spray?.5:2.5,p=Math.exp(-m*t);if(s[f]*=p,s[f+2]*=p,s[f+1]=s[f+1]*p-(_===Fe.Spray?Jh:Jh*.15)*t,n[f]+=s[f]*t,n[f+1]+=s[f+1]*t,n[f+2]+=s[f+2]*t,_===Fe.Spray){if(c[d]=.85*Math.min(1,r[d]/.2),s[f+1]<0){const v=this.surface.height(n[f],n[f+2],e);if(n[f+1]<v){r[d]=0,c[d]=0,Math.random()<.18&&this.spawnFoam(n[f],v,n[f+2]);continue}}}else c[d]=.22*(1-g),l[d]=h[d]*(1+g*1.5)}else{const m=Math.exp(-2*t);s[f]*=m,s[f+2]*=m,n[f]+=s[f]*t,n[f+2]+=s[f+2]*t,n[f+1]=this.surface.height(n[f],n[f+2],e)+.02,l[d]=h[d]*(1+g*(_===Fe.Boil?1.2:.8)),c[d]=(_===Fe.Boil?.9:.55)*(1-g)**1.3}}const u=this.points.geometry;u.attributes.position.needsUpdate=!0,u.attributes.aSize.needsUpdate=!0,u.attributes.aAlpha.needsUpdate=!0}spawnFoam(t,e,n){this.budget++,this.spawn(Fe.Foam,t,e+.02,n,0,0,0,.2+Math.random()*.25,1.5+Math.random()*1.5)}}const Ba=9.81,Qh=1e3;class tu{constructor(t={}){O(this,"n");O(this,"dx");O(this,"size");O(this,"dt");O(this,"depth");O(this,"originX",0);O(this,"originZ",0);O(this,"h");O(this,"q");O(this,"dhdt");O(this,"p");O(this,"pSmooth");O(this,"re");O(this,"im");O(this,"pre");O(this,"pim");O(this,"outRe");O(this,"outIm");O(this,"rowRe");O(this,"rowIm");O(this,"cosT");O(this,"sinT");O(this,"rev");O(this,"modeC");O(this,"modeS");O(this,"modeDamp");O(this,"sponge");const e=this.n=t.n??128;this.dx=t.dx??.5,this.size=e*this.dx,this.dt=t.dt??1/60,this.depth=t.depth??3;const n=e*e;this.h=new Float32Array(n),this.q=new Float32Array(n),this.dhdt=new Float32Array(n),this.p=new Float32Array(n),this.pSmooth=new Float32Array(n),this.re=new Float32Array(n),this.im=new Float32Array(n),this.pre=new Float32Array(n),this.pim=new Float32Array(n),this.outRe=new Float32Array(n),this.outIm=new Float32Array(n),this.rowRe=new Float32Array(e),this.rowIm=new Float32Array(e),this.cosT=new Float32Array(e/2),this.sinT=new Float32Array(e/2);for(let c=0;c<e/2;c++)this.cosT[c]=Math.cos(2*Math.PI*c/e),this.sinT[c]=-Math.sin(2*Math.PI*c/e);const s=Math.log2(e);this.rev=new Uint32Array(e);for(let c=0;c<e;c++){let l=0;for(let h=0;h<s;h++)l|=(c>>h&1)<<s-1-h;this.rev[c]=l}this.modeC=new Float32Array(n),this.modeS=new Float32Array(n),this.modeDamp=new Float32Array(n);const r=2*Math.PI/this.size,o=Math.PI/this.dx;for(let c=0;c<e;c++){const l=(c<e/2?c:c-e)*r;for(let h=0;h<e;h++){const u=(h<e/2?h:h-e)*r,d=Math.hypot(u,l),f=Math.sqrt(Ba*d*Math.tanh(d*this.depth)),g=c*e+h;this.modeC[g]=Math.cos(f*this.dt),this.modeS[g]=Math.sin(f*this.dt);const _=d/o;this.modeDamp[g]=Math.exp(-(.03+2.5*_**4)*this.dt)}}this.sponge=new Float32Array(n);const a=Math.max(4,Math.round(e*.12));for(let c=0;c<e;c++)for(let l=0;l<e;l++){const h=Math.min(l,c,e-1-l,e-1-c),u=Math.max(0,1-h/a);this.sponge[c*e+l]=Math.exp(-6*u*u*this.dt)}}clearPressure(){this.p.fill(0)}addForce(t,e,n,s){if(n<=0)return;const r=this.n,o=(t-this.originX)/this.dx,a=(e-this.originZ)/this.dx,c=Math.max(s/this.dx,.7),l=Math.ceil(c*2),h=Math.max(1,Math.floor(o-l)),u=Math.min(r-2,Math.ceil(o+l)),d=Math.max(1,Math.floor(a-l)),f=Math.min(r-2,Math.ceil(a+l));if(h>u||d>f)return;let g=0;for(let m=d;m<=f;m++)for(let p=h;p<=u;p++)g+=Math.exp(-((p-o)**2+(m-a)**2)/(2*c*c));if(g<=0)return;const _=n/(g*this.dx*this.dx);for(let m=d;m<=f;m++)for(let p=h;p<=u;p++)this.p[m*r+p]+=_*Math.exp(-((p-o)**2+(m-a)**2)/(2*c*c))}step(){const t=this.n,e=t*t,{re:n,im:s,pre:r,pim:o,outRe:a,outIm:c,h:l,q:h}=this;n.set(l),s.set(h),this.fft2(n,s,!1),r.set(this.p),o.fill(0),this.fft2(r,o,!1);const u=1/(Qh*Ba);for(let g=0;g<t;g++){const _=g===0?0:t-g;for(let m=0;m<t;m++){const p=m===0?0:t-m,v=g*t+m,S=_*t+p;if(v===0){a[0]=0,c[0]=0;continue}const x=.5*(n[v]+n[S]),L=.5*(s[v]-s[S]),R=.5*(s[v]+s[S]),A=-.5*(n[v]-n[S]),P=-r[v]*u,E=-o[v]*u,M=this.modeC[v],C=this.modeS[v],N=this.modeDamp[v],F=x-P,W=L-E,X=(F*M+R*C)*N,Y=(W*M+A*C)*N,tt=(-F*C+R*M)*N,Z=(-W*C+A*M)*N,at=X+P,ct=Y+E;a[v]=at-Z,c[v]=ct+tt}}this.fft2(a,c,!0);const d=this.sponge,f=1/this.dt;for(let g=0;g<e;g++){const _=a[g]*d[g];this.dhdt[g]=(_-l[g])*f,l[g]=_,h[g]=c[g]*d[g]}this.pSmooth.set(this.p)}recenter(t,e){const n=this.n,s=this.size/2,r=Math.round((t-s-this.originX)/this.dx),o=Math.round((e-s-this.originZ)/this.dx);if(!(r===0&&o===0)){for(const a of[this.h,this.q,this.dhdt,this.pSmooth]){const c=a.slice();a.fill(0);for(let l=0;l<n;l++){const h=l+o;if(!(h<0||h>=n))for(let u=0;u<n;u++){const d=u+r;d<0||d>=n||(a[l*n+u]=c[h*n+d])}}}this.originX+=r*this.dx,this.originZ+=o*this.dx}}waveForce(t,e,n,s=1/0){const r=s*s,o=this.n,{p:a,h:c}=this,l=1/(2*this.dx),h=this.dx*this.dx;let u=0,d=0,f=0;for(let g=1;g<o-1;g++){const _=g*o;for(let m=1;m<o-1;m++){const p=_+m,v=a[p];if(v<=0)continue;const S=(c[p+1]-c[p-1])*l,x=(c[p+o]-c[p-o])*l,L=-v*S*h,R=-v*x*h,A=this.originX+m*this.dx-t,P=this.originZ+g*this.dx-e;A*A+P*P>r||(u+=L,d+=R,f+=P*L-A*R)}}n[0]=u,n[1]=d,n[2]=f}sample(t,e,n){const s=this.n,r=(e-this.originX)/this.dx,o=(n-this.originZ)/this.dx;if(r<0||o<0||r>=s-1||o>=s-1)return 0;const a=r|0,c=o|0,l=r-a,h=o-c,u=c*s+a;return(t[u]*(1-l)+t[u+1]*l)*(1-h)+(t[u+s]*(1-l)+t[u+s+1]*l)*h}height(t,e){return this.sample(this.h,t,e)}verticalVelocity(t,e){return this.sample(this.dhdt,t,e)}staticDepression(t,e){return this.sample(this.pSmooth,t,e)/(Qh*Ba)}fft2(t,e,n){const s=this.n,{rowRe:r,rowIm:o}=this;for(let a=0;a<s;a++){const c=a*s;for(let l=0;l<s;l++)r[l]=t[c+l],o[l]=e[c+l];this.fft1(r,o,n);for(let l=0;l<s;l++)t[c+l]=r[l],e[c+l]=o[l]}for(let a=0;a<s;a++){for(let c=0;c<s;c++)r[c]=t[c*s+a],o[c]=e[c*s+a];this.fft1(r,o,n);for(let c=0;c<s;c++)t[c*s+a]=r[c],e[c*s+a]=o[c]}if(n){const a=1/(s*s);for(let c=0;c<s*s;c++)t[c]*=a,e[c]*=a}}fft1(t,e,n){const s=this.n,r=this.rev;for(let a=0;a<s;a++){const c=r[a];if(c>a){let l=t[a];t[a]=t[c],t[c]=l,l=e[a],e[a]=e[c],e[c]=l}}const o=n?-1:1;for(let a=2;a<=s;a<<=1){const c=a>>1,l=s/a;for(let h=0;h<s;h+=a)for(let u=0;u<c;u++){const d=this.cosT[u*l],f=o*this.sinT[u*l],g=h+u,_=g+c,m=t[_]*d-e[_]*f,p=t[_]*f+e[_]*d;t[_]=t[g]-m,e[_]=e[g]-p,t[g]+=m,e[g]+=p}}}}class S0{constructor(t,e){O(this,"waves");O(this,"felt");this.waves=t,this.felt=e}height(t,e,n){return this.waves.height(t,e,n)+this.felt.height(t,e)+this.felt.staticDepression(t,e)}verticalVelocity(t,e,n){return this.waves.verticalVelocity(t,e,n)+this.felt.verticalVelocity(t,e)}}class E0{constructor(t,e){O(this,"waves");O(this,"render");this.waves=t,this.render=e}height(t,e,n){return this.waves.height(t,e,n)+this.render.height(t,e)}verticalVelocity(t,e,n){return this.waves.verticalVelocity(t,e,n)+this.render.verticalVelocity(t,e)}}const eu=.3,nu=128,iu=.5;class T0{constructor(){O(this,"render",new tu({n:nu,dx:iu,dt:1/60}));O(this,"felt",new tu({n:nu,dx:iu,dt:1/30}));O(this,"history",[]);O(this,"acc",0);O(this,"time",0);O(this,"stepCount",0);O(this,"lastStepMs",0)}reset(t,e){for(const n of[this.render,this.felt])n.h.fill(0),n.q.fill(0),n.dhdt.fill(0),n.originX=t-n.size/2,n.originZ=e-n.size/2;this.history=[]}update(t,e,n,s,r,o){const a=Array.isArray(o)?zx(o):o;this.acc+=t;let c=!1;for(this.acc>.1&&(this.acc=.1);this.acc>=this.render.dt;){this.acc-=this.render.dt,this.time+=this.render.dt;const l=performance.now();this.history.push({t:this.time,data:a.slice()});const h=e-s*10,u=n-r*10;for(const d of[this.render,this.felt]){const f=d.originX+d.size/2,g=d.originZ+d.size/2;Math.hypot(h-f,u-g)>4&&d.recenter(h,u)}if(su(this.render,a),this.render.step(),++this.stepCount%2===0){for(;this.history.length>1&&this.history[1].t<=this.time-eu;)this.history.shift();const d=this.history[0];d&&d.t<=this.time-eu?su(this.felt,d.data):this.felt.clearPressure(),this.felt.step()}this.lastStepMs=performance.now()-l,c=!0}return c}}function zx(i){let t=0;for(const s of i)t+=s.length;const e=new Float32Array(t);let n=0;for(const s of i)e.set(s,n),n+=s.length;return e}function su(i,t){i.clearPressure();for(let e=0;e<t.length;e+=4)t[e+2]>0&&i.addForce(t[e],t[e+1],t[e+2],t[e+3])}const w0=32,fo=48,po=32,ka=4,ru=.1;function Bx(i,t,e,n){const s=new Float32Array(fo),r=new Float32Array(po);let o=0;for(let c=0;c<fo;c++){let l=0;for(let h=0;h<w0;h++)l+=i[o++]*t[h];s[c]=l}for(let c=0;c<fo;c++)s[c]=Math.tanh(s[c]+i[o++]);for(let c=0;c<po;c++){let l=0;for(let h=0;h<fo;h++)l+=i[o++]*s[h];r[c]=l}for(let c=0;c<po;c++)r[c]=Math.tanh(r[c]+i[o++]);const a=new Array(ka);for(let c=0;c<ka;c++){let l=0;for(let h=0;h<po;h++)l+=i[o++]*r[h];a[c]=l}for(let c=0;c<ka;c++)a[c]=Math.tanh(a[c]+i[o++]);return a}function kx(i){return{steer:i[0],throttle:.5+.5*i[1],leanX:i[2],leanZ:i[3]}}const Vx=26,mo=24,Va=9,Hx=["逃げ","差し","まくり","まくり差し"];function Gx(i){const t=[i.mark,i.turn/6,i.lat/30,i.speed/25,i.toMark/60,i.rank/5],e=[...i.rivals].sort((n,s)=>n.dLat-s.dLat).slice(0,5);for(let n=0;n<5;n++){const s=e[n];s?t.push(s.ahead/25,s.dLat/20,s.dSpeed/10,1):t.push(0,0,0,0)}return t}function Wx(i,t){let e=0;const n=new Array(mo);for(let r=0;r<mo;r++){let o=0;for(let a=0;a<Vx;a++)o+=i[e++]*t[a];n[r]=o}for(let r=0;r<mo;r++)n[r]=Math.tanh(n[r]+i[e++]);const s=new Array(Va);for(let r=0;r<Va;r++){let o=0;for(let a=0;a<mo;a++)o+=i[e++]*n[a];s[r]=o}for(let r=0;r<Va;r++)s[r]+=i[e++];return s}const go=i=>1/(1+Math.exp(-i));function Xx(i,t){const e=Wx(i,Gx(t));let n=0;for(let s=1;s<4;s++)e[s]>e[n]&&(n=s);return{tactic:Hx[n],R:12+12*go(e[4]),clear:1.8+5*go(e[5]),dv:16*Math.tanh(e[6]),brake:.15+.6*go(e[7]),wait:2*go(e[8]-2)}}const Tr={t:[-2,-1.7,-1.5,-1.2,-1,-.7,-.5,-.2,0,.3,.5,.8,1,1.3,1.5,1.8,2,2.3,2.5,2.8,3,3.3,3.5,3.8,4,4.3,4.5,4.8,5,5.3,5.5,5.8,6,6.3,6.5,6.8,7,7.3,7.5,7.8,8,8.3,8.5,8.8,9,9.3,9.5,9.8,10,10.3,10.5,10.8,11],x:[-82.5,-77.2,-71.9,-66.4,-61,-55.5,-49.8,-44.6,-39.2,-34,-29.1,-24.6,-20.3,-16.4,-12.8,-9.5,-6.8,-4.1,-2,0,1.7,3,3.7,4.3,4.8,4.6,4,3,1.8,.2,-1.5,-3.7,-5.7,-7.9,-10.7,-13.3,-16.1,-19.6,-22.9,-26.7,-30.7,-34.9,-39.6,-44.6,-49.6,-54.9,-60,-65.1,-70.4,-75.6,-80.6,-86,-91.7],y:[-35.4,-35.2,-35.1,-35,-34.8,-34.5,-34,-33.4,-32.3,-31.4,-30.3,-29.2,-28,-27,-26,-24.8,-23.3,-21.4,-19.8,-17.6,-15.4,-13.2,-10.7,-8.1,-5.5,-2.6,.7,3.7,6.3,8.7,11.1,13.7,16.3,18.5,20.7,23,25.1,27.2,28.7,30,31.1,32,32.7,33.5,34.1,35.3,35.8,36.2,36.3,36.5,36.7,37,37.3],th:[0,.5,.8,1.2,1,1.5,1.5,2.5,3.4,5.4,7.9,9.7,12,13.6,17.5,20.9,25.5,30.1,36.1,42.6,50.6,59,68.5,77.5,87.5,96.6,103.7,109.3,113.9,118.6,123.6,126.6,130.4,135.1,139,143.6,148.1,153,156.7,159.8,161.6,163.5,164.7,166,166.8,168.2,168.9,169.7,170.5,170.7,172,172.2,172.2]},ei=32,b0=27,qx=dn[0],Yx=dn[1],zc=qx.z-b0,Rs=Yx.z+b0,Ye=zc-Rs,zn=Math.PI*ei,Vo=dn[0].x,Ho=Vo-ei,A0=Vo+ei,Fn=2*Ye+2*zn,Bc=Oc,kc=3,R0=Bc-Rs;function ps(i,t){if(i<0)return t.x=Ho,t.z=Rs+i,t.ox=-1,t.oz=0,t.tx=0,t.tz=1,t.turn=!1,t;let e=i%Fn;if(e<Ye)return t.x=Ho,t.z=Rs+e,t.ox=-1,t.oz=0,t.tx=0,t.tz=1,t.turn=!1,t;if(e-=Ye,e<zn){const s=e/ei;return t.ox=-Math.cos(s),t.oz=Math.sin(s),t.x=Vo+ei*t.ox,t.z=zc+ei*t.oz,t.tx=Math.sin(s),t.tz=Math.cos(s),t.turn=!0,t}if(e-=zn,e<Ye)return t.x=A0,t.z=zc-e,t.ox=1,t.oz=0,t.tx=0,t.tz=-1,t.turn=!1,t;e-=Ye;const n=e/ei;return t.ox=Math.cos(n),t.oz=-Math.sin(n),t.x=Vo+ei*t.ox,t.z=Rs+ei*t.oz,t.tx=-Math.sin(n),t.tz=-Math.cos(n),t.turn=!0,t}function Zx(i,t,e){const n={x:0,z:0,ox:0,oz:0,tx:0,tz:0,turn:!1};let s=e,r=1/0;for(let o=-2;o<=40;o+=.5){ps(e+o,n);const a=(n.x-i)**2+(n.z-t)**2;a<r&&(r=a,s=e+o)}return s}function Kx(i){if(i<0)return-i+Ye;const t=i%Fn,e=[Ye,Ye+zn+Ye,Fn+Ye];for(const n of e)if(n>t)return n-t;return 0}const Ha=4.5,$x={逃げ:{R:17,clear:2.2,dv:0,brake:.3,hold:1,aim:3,exit:0},差し:{R:15,clear:3.2,dv:-4,brake:.2,hold:1,aim:Ha,exit:-6},まくり:{R:22,clear:5.5,dv:4,brake:.5,hold:1,aim:Ha,exit:6},まくり差し:{R:15,clear:3.2,dv:0,brake:.3,hold:1,aim:Ha,exit:-3}},ou=1.8,jx=4,Jx=-19.3,au=-10,Ga=37,Qx=6,tv=1.2,ev=2,Ie=()=>globalThis.__raceTune??{},Vc=()=>Ie().lane??jx,_o=i=>(Ie().laneBase??Jx)+(i-1)*Vc(),nv={R:19,exit:3},iv={逃げ:-3.5,差し:1,まくり:-2.5,まくり差し:-.5},sv=9.5,rv=14,ov=45*Math.PI/180,cu=3.5,We={x:0,z:0,ox:0,oz:0,tx:0,tz:0,turn:!1},lu=Tr.t.length,hu=Tr.t.findIndex(i=>i>=0);function xo(i,t,e){const n=Tr.y[t];return e.x=Tr.x[t]+i.rxs,e.y=n<0?n*i.rys:n*i.rye,e}function av(i,t){const s=a=>28*a-(28-t)*5.5*(1-Math.exp(-a/5.5));let r=0,o=30;for(let a=0;a<30;a++){const c=(r+o)/2;s(c)<i?r=c:o=c}return o}function uu(i){return Hc(i)===1?A0+Ho:0}function Hc(i){return i<0||i%Fn<Ye+zn?0:1}class cv{constructor(t,e){O(this,"lane");O(this,"skill");O(this,"s",0);O(this,"laps",0);O(this,"finished",!1);O(this,"finishTime",0);O(this,"flying",!1);O(this,"capsized",!1);O(this,"tactics",[]);O(this,"tactic",null);O(this,"lat",0);O(this,"policy",null);O(this,"control",null);O(this,"ctrlT",0);O(this,"rounded",[!0,!0]);O(this,"ctrlHold",{steer:0,throttle:1,leanX:0,leanZ:0});O(this,"apexAt",null);O(this,"apexInside",[]);O(this,"dMin",1/0);O(this,"dMinTime",0);O(this,"labelPending",!1);O(this,"lastPlanS",-1/0);O(this,"bias",0);O(this,"upsideTime",0);O(this,"offset");O(this,"turnTime",0);O(this,"steerTime",0);O(this,"leanX",0);O(this,"plan",null);O(this,"armed",!0);O(this,"launched",!1);O(this,"input",{steer:0,throttle:0,leanX:0,leanZ:0});this.lane=t,this.skill=e,this.offset=_o(t)}startPos(){return{x:Ho+1-_o(this.lane),z:Bc-85}}get progress(){return this.s-R0}get turnPlan(){return this.plan}reset(){const t=this.startPos();this.s=t.z-Rs,this.laps=0,this.finished=!1,this.flying=!1,this.capsized=!1,this.upsideTime=0,this.turnTime=this.steerTime=this.leanX=0,this.offset=_o(this.lane),this.plan=null,this.armed=!0,this.launched=!1,this.tactics=[],this.tactic=null,this.apexAt=null,this.labelPending=!1,this.lastPlanS=-1/0,this.dMin=1/0}makePlan(t,e,n,s,r){const o=dn[t],a=0,c=t===0?1:-1,l=c,h=0,u=(lt,ut)=>-((lt-o.x)*l+(ut-o.z)*h),d=u(e.x,e.z),f=[];for(const lt of r){if(lt.cpu===this||lt.cpu.capsized||lt.cpu.finished)continue;const ut=lt.ph.comW,G=(ut.x-e.x)*a+(ut.z-e.z)*c;if(Math.abs(G)>25)continue;const D=u(ut.x,ut.z);D<d-1&&f.push({lat:D,ahead:G})}const g=this.skill;let _;if(f.length===0)_="逃げ";else{const lt=Math.max(...f.map(D=>D.ahead)),ut=f.reduce((D,q)=>q.lat>D.lat?q:D),G=7-g.aggression*3;lt<-G-3?_="逃げ":lt<-G?_="まくり":f.length>=2&&ut.ahead<-G*.6?_="まくり差し":_="差し",this.tactics.length===0&&t===0&&(this.lane===3||this.lane===5)&&_==="差し"&&lt<4&&(_=lt<-G*.5?"まくり":"まくり差し")}globalThis.__cpuDebug&&console.log(`[${this.lane}] mark${t} lat${d.toFixed(1)} inside:${f.map(lt=>lt.lat.toFixed(1)+"/"+lt.ahead.toFixed(1)).join(" ")} → ${_}`);const m={...$x[_]};if(_==="逃げ"&&r.some(ut=>{if(ut.cpu===this||ut.cpu.capsized||ut.cpu.finished)return!1;const G=ut.ph.comW,D=(G.x-e.x)*a+(G.z-e.z)*c,q=u(G.x,G.z)-d;return D>-1&&D<10&&q>0&&q<12})&&Object.assign(m,nv),_==="逃げ"){const lt=Ie();lt.nigeDv!==void 0&&(m.dv=lt.nigeDv),lt.nigeAim!==void 0&&(m.aim=lt.nigeAim),lt.nigeBrake!==void 0&&(m.brake=lt.nigeBrake),lt.nigeR!==void 0&&(m.R=lt.nigeR)}const p=Ie().aimScale??(Xe?0:1);m.aim*=p;let v=null;if(this.policy){const lt=[];let ut=0;for(const G of r){if(G.cpu===this||G.cpu.capsized||G.cpu.finished)continue;const D=G.ph.comW;G.cpu.s>this.s&&ut++,lt.push({ahead:(D.x-e.x)*a+(D.z-e.z)*c,dLat:u(D.x,D.z)-d,dSpeed:G.ph.speed()-n})}v=Xx(this.policy,{mark:t,turn:this.tactics.length,lat:d,speed:n,toMark:(o.x-e.x)*a+(o.z-e.z)*c,rank:ut,rivals:lt}),_=v.tactic,Object.assign(m,{R:v.R,clear:v.clear,dv:v.dv,brake:v.brake,aim:0})}g.seed=g.seed*16807%2147483647;const S=!v&&g.seed%1e3/1e3<g.slip?2.5+(g.seed>>10)%1e3/250:0;let x=v?v.clear:Math.max(2,m.clear-(g.tight-.5)*1.6)+S+(Xe?Ie().v2Clear??1:0);const L=(o.x-e.x)*a+(o.z-e.z)*c,R=s+Math.max(0,L)/Math.max(8,n),A=r.filter(lt=>{var ut;return lt.cpu!==this&&((ut=lt.cpu.turnPlan)==null?void 0:ut.mark)===t});let P=v?v.wait:0;if(!v&&_==="差し"){let lt=null,ut=-1/0;for(const G of A){const D=u(G.ph.comW.x,G.ph.comW.z);D<d&&D>ut&&(lt=G,ut=D)}lt&&(P=Math.max(0,lt.cpu.turnPlan.apexTime+1.6-R))}if(v){const lt=[];for(const D of r){if(D.cpu===this||D.cpu.capsized||D.cpu.finished)continue;const q=D.ph.comW,z=(q.x-e.x)*a+(q.z-e.z)*c;if(Math.abs(z)>25||u(q.x,q.z)>=d-1)continue;const it=D.cpu.turnPlan,mt=(o.x-q.x)*a+(o.z-q.z)*c;lt.push(it&&it.mark===t?it.apexTime:s+Math.max(0,mt)/Math.max(8,D.ph.speed()))}const ut=R+P;this.apexInside=r.filter(D=>{if(D.cpu===this||D.cpu.capsized||D.cpu.finished)return!1;const q=D.ph.comW;return Math.abs((q.x-e.x)*a+(q.z-e.z)*c)<=25&&u(q.x,q.z)<d-1}).map(D=>D.cpu),this.labelPending=!0;const G=lt.filter(D=>D<ut-.3).length;_=lt.length===0?"逃げ":G===0?Math.max(...f.map(D=>D.ahead))<-10?"逃げ":"まくり":G===lt.length?"差し":"まくり差し",globalThis.__cpuDebug&&console.log(`[${this.lane}] ${t+1}M ${_} R${v.R.toFixed(1)} 間隔${v.clear.toFixed(1)} 速さ${v.dv.toFixed(1)} レバー${v.brake.toFixed(2)} 待つ${v.wait.toFixed(2)} 頂点${(ut-s).toFixed(2)}s 内の艇${lt.map(D=>(D-s).toFixed(2)).join(",")}`)}if(!v)for(const lt of A){const ut=lt.cpu.turnPlan;Math.abs(R+P-ut.apexTime)<.9&&u(lt.ph.comW.x,lt.ph.comW.z)<d+1&&(x=Math.max(x,ut.clear+2.8))}const E=Math.max(.5,d);let M=x-m.aim;const C=Xe&&!v&&this.tactics.length>0;let N=m.R,F=0;for(let lt=0;lt<2;lt++){N=C?Math.max(12,(E+Ga+m.exit)/2,(E+M)/2+.5):Math.max(m.R,(E+M)/2+.5),F=Math.acos(Math.max(-1,Math.min(1,(N-E)/(N-M))));const ut=m.aim-(m.aim-1.5)*Math.max(0,Math.min(1,(F-Math.PI/3)/(Math.PI/3)));M=x-ut}const W=-Math.cos(F)*l+Math.sin(F)*a,X=-Math.cos(F)*h+Math.sin(F)*c,Y=C?60+(g.entrySpeed-49)+m.dv-Math.min(10,P*12):Math.sqrt((Ie().turnAcc??(Xe?rv:sv))*N)*3.6+(v?0:g.entrySpeed-49)+m.dv-Math.min(10,P*12);this.tactics.push(_),this.tactic=v?null:_;const tt=v?v.brake:m.brake+(.8-m.brake)*g.grip*.6,Z=_==="逃げ"?(Ie().nigeEarly??ev)*p:0,at=Math.max(.15,E/32),ct=Math.max(.3,Math.min(Ga,Math.max(Ie().exitMin??25,E+Ga-32))+m.exit)/37,Et=iv[_]+Math.min(4,x-3.2)+Math.min(4,P*3);return{mark:t,tactic:_,cx:o.x-(N-M)*W-Z*a,cz:o.z-(N-M)*X-Z*c,R:N,dx:a,dz:c,lx:l,lz:h,entry:Y,clear:x,apexTime:R+P,brake:tt,hold:m.hold,real:C,rys:at,rye:ct,rxs:Et,ri:0}}planTarget(t,e,n,s,r){if(t.real)return this.realTarget(t,e,n,s*(Ie().realLook??1),r);const o=Math.max(6,t.R+this.bias),a=e-t.cx,c=n-t.cz,l=a*t.dx+c*t.dz,h=-(a*t.lx+c*t.lz);let u,d;l<0&&h>0?(u=l,d=l/o):(d=Math.atan2(l,h),d<-Math.PI/2&&(d+=2*Math.PI),u=d*o);const f=u+s;if(f<=0)r.x=t.cx-o*t.lx+f*t.dx,r.z=t.cz-o*t.lz+f*t.dz;else if(f<=Math.PI*o){const g=f/o;r.x=t.cx+o*(-Math.cos(g)*t.lx+Math.sin(g)*t.dx),r.z=t.cz+o*(-Math.cos(g)*t.lz+Math.sin(g)*t.dz)}else{const g=f-Math.PI*o;r.x=t.cx+o*t.lx-g*t.dx,r.z=t.cz+o*t.lz-g*t.dz}return d}realTarget(t,e,n,s,r){const o=dn[t.mark],a=(e-o.x)*t.dx+(n-o.z)*t.dz,c=(e-o.x)*t.lx+(n-o.z)*t.lz,l={...t,rys:t.rys+this.bias/32,rye:t.rye+this.bias/37},h={x:0,y:0},u={x:0,y:0};let d=t.ri,f=1/0;for(let v=t.ri;v<Math.min(lu,t.ri+12);v++){xo(l,v,h);const S=(h.x-a)**2+(h.y-c)**2;S<f&&(f=S,d=v)}t.ri=d;let g=s,_=d;xo(l,_,h);let m=h.x,p=h.y;for(;g>0&&_<lu-1;){xo(l,_+1,u);const v=Math.hypot(u.x-m,u.y-p);v>=g?(m+=(u.x-m)*g/v,p+=(u.y-p)*g/v,g=0):(g-=v,m=u.x,p=u.y,_++)}return g>0&&(m-=g),r.x=o.x+m*t.dx+p*t.lx,r.z=o.z+m*t.dz+p*t.lz,d<hu?(xo(l,hu,u),-Math.hypot(u.x-a,u.y-c)/30):Tr.th[d]*Math.PI/180}squeezed(t,e,n){for(const s of n){if(s.cpu===this||s.cpu.capsized)continue;const r=s.ph.comW.x-t.x,o=s.ph.comW.z-t.z,a=r*e.x+o*e.z,c=r*e.z-o*e.x;if(Math.abs(a)<4&&c>.5&&c<3.2)return!0}return!1}controlObs(t,e){const n=new Array(w0).fill(0),s=t.forward(new w),r=s.x,o=s.z,a=Math.hypot(r,o)||1,c=r/a,l=o/a,h=(A,P)=>[A*c+P*l,A*l-P*c],u=t.comW,[d,f]=h(t.vel.x,t.vel.z),g=t.attitude();n[0]=d/25,n[1]=f/10,n[2]=t.angVel.y/2,n[3]=g.heel/30,n[4]=g.trim/10,n[5]=t.rpm/6600,n[6]=t.throttle,n[7]=t.steerAngle/.5,n[8]=(t.riderB.x-hn.x)/.55,n[9]=(t.riderB.z-hn.z)/.3;const _={x:0,z:0,ox:0,oz:0,tx:0,tz:0,turn:!1};let m=10;for(const A of[10,25,50]){ps(this.s+A,_);const[P,E]=h(_.x-u.x,_.z-u.z);n[m++]=P/50,n[m++]=E/50}ps(this.s+25,_);const[p,v]=h(_.tx,_.tz);n[16]=p,n[17]=v;const S=dn[Hc(this.s)],[x,L]=h(S.x-u.x,S.z-u.z);n[18]=x/100,n[19]=L/100,n[20]=Math.hypot(x,L)/100,n[21]=this.lat/30;const R=e.filter(A=>A.cpu!==this&&!A.cpu.capsized).map(A=>({o:A,d:Math.hypot(A.ph.comW.x-u.x,A.ph.comW.z-u.z)})).filter(A=>A.d<40).sort((A,P)=>A.d-P.d).slice(0,2);m=22;for(let A=0;A<2;A++){const P=R[A];if(P){const[E,M]=h(P.o.ph.comW.x-u.x,P.o.ph.comW.z-u.z),[C]=h(P.o.ph.vel.x-t.vel.x,P.o.ph.vel.z-t.vel.z);n[m++]=E/30,n[m++]=M/30,n[m++]=C/10,n[m++]=1}else m+=4}return n[30]=this.s%Fn/Fn,n[31]=1,n}update(t,e,n,s=[]){var G;const r=this.skill,o=this.input,a=1-2*(e.quat.x*e.quat.x+e.quat.z*e.quat.z);if(this.upsideTime=a<.15?this.upsideTime+t:0,this.upsideTime>1&&(this.capsized=!0),this.capsized){o.steer=o.throttle=o.leanX=o.leanZ=0;return}const c=e.comW;if(this.s=Zx(c.x,c.z,this.s),this.s>=0){const D=this.s%Fn,q=this.s-D;for(const[z,it]of[[0,Ye],[1,2*Ye+zn]]){const mt=dn[z],gt=z===0?c.z>=mt.z:c.z<=mt.z;D>=it-30&&D<it&&(this.rounded[z]=!1),gt&&(this.rounded[z]=!0);const It=q+it+zn/2;D>=it+zn/2&&D<it+zn+Ye*.5&&!this.rounded[z]&&(this.s=Math.min(this.s,It))}}ps(this.s,We),this.lat=(c.x-We.x)*We.ox+(c.z-We.z)*We.oz;const l=e.speed()*3.6;if(n<0&&this.progress>0&&(this.flying=!0),this.laps=Math.max(0,Math.floor(this.progress/Fn)),!this.finished&&this.progress>=kc*Fn&&(this.finished=!0,this.finishTime=n),!this.launched&&n<0){o.throttle=.12;const D=Bc-c.z;-n+r.st<=av(D,e.speed())&&(this.launched=!0)}n>=0&&(this.launched=!0);const h=Kx(this.s);if(h>60&&this.s>this.lastPlanS+150&&(this.armed=!0),!this.plan&&this.armed&&h<50&&n>0&&!this.finished&&(this.dMin=1/0,this.labelPending=!1,this.plan=this.makePlan(Hc(this.s),c,e.speed(),n,s),this.lastPlanS=this.s,this.armed=!1,this.turnTime=0),this.plan){const D=dn[this.plan.mark],q=Math.hypot(c.x-D.x,c.z-D.z);if(q<this.dMin)this.dMin=q,this.dMinTime=n;else if(q>this.dMin+1&&((!this.apexAt||this.apexAt.time!==this.dMinTime)&&(this.apexAt={mark:this.plan.mark,time:this.dMinTime}),this.labelPending)){this.labelPending=!1;const z=this.apexInside.filter(gt=>!gt.capsized),it=z.filter(gt=>gt.apexAt&&gt.apexAt.mark===this.plan.mark&&Math.abs(gt.apexAt.time-this.dMinTime)<8&&gt.apexAt.time<this.dMinTime-.2).length,mt=z.length===0?"逃げ":it===0?"まくり":it===z.length?"差し":"まくり差し";this.tactic=mt,this.tactics[this.tactics.length-1]=mt}}const u=6+e.speed()*.35,d={x:0,z:0};let f=-1;const g=this.plan;if(g){f=this.planTarget(g,c.x,c.z,u,d);const D=Math.abs(Math.atan2(-(e.vel.x*g.lx+e.vel.z*g.lz),e.vel.x*g.dx+e.vel.z*g.dz));(f>165*Math.PI/180||e.speed()>3&&D>165*Math.PI/180)&&(ps(this.s,We),this.offset=Math.max(au-uu(this.s),(c.x-We.x)*We.ox+(c.z-We.z)*We.oz),this.plan=null,this.tactic=null)}if(!this.plan){let D=this.tactics.length===0?_o(this.lane):this.offset;const q=uu(this.s);if(n>3){let z=null,it=35;for(const mt of s){if(mt.cpu===this||mt.cpu.capsized)continue;const gt=mt.cpu.s-this.s;gt>2&&gt<it&&Math.abs(mt.cpu.lat-this.lat)<2.5&&(z=mt,it=gt)}if(!z&&h<300)D=-q;else if(z){const mt=z.cpu.lat-Vc(),gt=z.cpu.lat+Vc(),It=Ft=>s.some(Wt=>Wt.cpu!==this&&!Wt.cpu.capsized&&Math.abs(Wt.cpu.s-this.s)<10&&Math.abs(Wt.cpu.lat-Ft)<3);D=mt>au-q&&!It(mt)?mt:It(gt)?this.lat:gt}}for(const z of s){const it=z.cpu.s-this.s;z.cpu===this||z.cpu.capsized||it>8||it<-4||(D<this.lat&&z.cpu.lat<this.lat&&z.cpu.lat>D-3.5&&(D=Math.max(D,z.cpu.lat+3.5)),D>this.lat&&z.cpu.lat>this.lat&&z.cpu.lat<D+3.5&&(D=Math.min(D,z.cpu.lat-3.5)))}this.offset+=(D-this.offset)*Math.min(1,t*.3),ps(this.s+u,We),d.x=We.x+We.ox*this.offset,d.z=We.z+We.oz*this.offset}const _=!!this.plan&&f>=0,m=this.plan&&f<0?-f*(this.plan.real?30:this.plan.R):0,p=e.forward(new w);let v=0,S=0,x=!1;if(this.plan){const D=[];for(const z of s){if(z.cpu===this||z.cpu.capsized)continue;const it=z.ph.comW.x-c.x,mt=z.ph.comW.z-c.z,gt=it*p.x+mt*p.z,It=it*p.z-mt*p.x;Math.abs(gt)<14&&Math.abs(It)<6&&D.push({o:z,a:gt,l:It})}const q=!D.some(z=>z.l>.5&&z.l<4&&Math.abs(z.a)<6);for(const{o:z,a:it,l:mt}of D){const gt=(e.vel.x-z.ph.vel.x)*p.x+(e.vel.z-z.ph.vel.z)*p.z;if(it>1&&it<12&&Math.abs(mt)<2.6&&(_?v=q?Math.min(v,-2):Math.max(v,2.8):S=Math.max(S,(gt>0?1:.3)*(1-it/12))),_&&Math.abs(it)<3.5&&mt>.5&&mt<4.5)if(this.plan.real)v=Math.max(v,3);else{const It=Math.hypot(z.ph.comW.x-this.plan.cx,z.ph.comW.z-this.plan.cz);v=Math.max(v,It+2.8-this.plan.R)}it>.5&&it<4&&mt<-.5&&mt>-4.5&&(x=!0)}}v=Math.max(-3,Math.min(6,v)),this.bias+=(v-this.bias)*Math.min(1,t*2),this.plan||(this.bias=0),this.plan&&!_&&this.squeezed(c,p,s)&&(d.x=c.x+this.plan.dx*u,d.z=c.z+this.plan.dz*u);for(const D of dn){const q=d.x-c.x,z=d.z-c.z,it=Math.hypot(q,z),mt=D.x-c.x,gt=D.z-c.z,It=Math.hypot(mt,gt),Ft=Xe?Ie().v2ClearM??ou:ou;if(Ft<=0||it<.001||It<.001||It>it+Ft)continue;const Wt=Math.atan2(q,z),U=Math.atan2(mt,gt);let yt=Wt-U;if(yt>Math.PI&&(yt-=2*Math.PI),yt<-Math.PI&&(yt+=2*Math.PI),Math.abs(yt)>Math.PI/2)continue;const _t=It<=Ft?Math.PI/2:Math.asin(Ft/It);if(yt>-_t){const Dt=U-_t;d.x=c.x+Math.sin(Dt)*it,d.z=c.z+Math.cos(Dt)*it}}const L=e.forward(new w),R=d.x-c.x,A=d.z-c.z;let E=Math.atan2(L.x*A-L.z*R,L.x*R+L.z*A)/.4+.3*e.angVel.y;const M=e.vel,C=Xe&&e.speed()>5?Math.atan2(L.x*M.z-L.z*M.x,L.x*M.x+L.z*M.z):0,N=Xe&&e.speed()>5&&(!!this.plan||C>.26);if(N){const D=Math.atan2(M.x*A-M.z*R,M.x*R+M.z*A),q=!!((G=this.plan)!=null&&G.real);E=D/(Ie().slideGain??(q?.55:.4))+(Ie().slideDamp??(q?.4:.15))*e.angVel.y,E=Math.max(E,-((Ie().driftMax??ov*(180/Math.PI))*(Math.PI/180)-C)/.2)}if(_&&this.plan&&!this.plan.real){const D=Math.hypot(c.x-this.plan.cx,c.z-this.plan.cz)-(this.plan.R+this.bias);(!Xe||D>0)&&(E-=.15*D)}if(E=Math.max(-1,Math.min(1,E)),Xe&&this.plan&&l>this.plan.entry+6){const D=Math.max(.3,1-(l-this.plan.entry-6)/12);E=Math.max(-D,Math.min(D,E))}let F=0,W=0;for(const D of s){if(D.ph===e||D.cpu.capsized)continue;const q=D.ph.comW.x-c.x,z=D.ph.comW.z-c.z,it=Math.hypot(q,z);if(it>8||it<.1||(q*L.x+z*L.z)/it<Math.cos(.6))continue;const gt=(L.x*z-L.z*q)/it;F=Math.max(F,1-it/8),W+=gt>0?-1:1}F>0&&!_&&(E=Math.max(-1,Math.min(1,E+Math.sign(W)*.35*F))),!this.plan&&!N&&(E=Math.max(-.45,Math.min(.45,E)));const X=E<0||N?e.attitude().heel:-e.attitude().heel,Y=Xe?Math.max(0,Math.min(1,(X-5)/10)):Math.max(0,Math.min(1,(X-8)/12));Y>0&&(E*=1-.7*Y);const tt=Math.max(0,Math.min(1,(-X-6)/10));tt>0&&(E*=1-.5*tt),Xe&&(this.plan||N)&&(E=Math.min(E,.4));const Z=2.5*t;if(o.steer=this.launched?o.steer+Math.max(-Z,Math.min(Z,E-o.steer)):0,this.launched){_&&(this.turnTime+=t);let D=1;const q=e.speed(),z=g?g.entry/3.6:0,it=g?Xe&&!this.policy?Math.min(g.brake,.3):g.brake:1,mt=g?cu*Math.max(.25,(1-it)/.65):cu,gt=(q*q-z*z)/(2*mt)+r.brakeMargin;if(g!=null&&g.real){const It=(Ie().liftThr??.2)+.25*r.grip;!_&&m<(Ie().liftLead??Qx)*(l/80)+r.brakeMargin&&(D=It);const Ft=Math.atan2(-(M.x*g.lx+M.z*g.lz),M.x*g.dx+M.z*g.dz);_&&(D=Math.abs(Ft)<(Ie().liftPsi??tv)&&this.turnTime<4?It:g.hold)}else g&&!_&&m<gt&&l>g.entry&&(D=it),g&&_&&(D=Ie().fullTurn||this.turnTime>=r.regrip*(1-.5*r.grip)?g.hold:.55+.3*r.grip);g&&!_&&S>0&&(D=Math.min(D,1-.7*S)),g&&_&&x&&this.turnTime>r.regrip*.5&&(D=Math.max(D,.75)),F>0&&(D=Math.min(D,1-.6*F)),Y>0&&!(Xe&&Ie().rescueKeep!==0)&&(D=Math.min(D,1-.6*Y)),o.throttle=D}const at=(Math.abs(E)>.45||N&&C>.26)&&l>25;this.steerTime=at?this.steerTime+t:0;const ct=Math.max(0,Math.min(1,(l-25)/25));let Et=at&&this.steerTime>r.leanDelay?(N&&C>.26?-1:Math.sign(E))*ct:0;Xe&&this.plan&&(Et=Math.min(0,Et));const lt=t/Math.max(.05,Et!==0?r.leanSpeed:.8);this.leanX+=Math.max(-lt,Math.min(lt,Et-this.leanX)),tt>0&&(this.leanX*=1-Math.min(1,t*8*tt)),o.leanX=this.leanX,o.leanZ=!at&&l<50&&this.launched?.4:0;const ut=globalThis.__ctrlRecord;if((this.control||ut)&&this.launched&&n>0&&!this.finished){if(this.ctrlT+=t,this.ctrlT>=ru){this.ctrlT-=ru;const D=this.controlObs(e,s);ut&&ut(this,D,o),this.control&&Object.assign(this.ctrlHold,kx(Bx(this.control,D)))}this.control&&(o.steer=this.ctrlHold.steer,o.throttle=this.ctrlHold.throttle,o.leanX=this.ctrlHold.leanX,o.leanZ=this.ctrlHold.leanZ)}this.finished&&(o.throttle=.25,o.leanX=this.leanX=0)}}function du(i){let t=i;const e=()=>(t=t*16807%2147483647,t%1e4/1e4);return["白","黒","赤","青","黄","緑"].map(s=>({name:s,entrySpeed:46+e()*6,brakeMargin:-2+e()*6,leanDelay:.15+e()*.3,leanSpeed:.15+e()*.3,tight:e(),aggression:e(),regrip:.3+e()*.6,grip:e(),slip:.08+e()*.17,seed:1+Math.floor(e()*1e5),st:.05+e()*.15+(e()<.15?.1+e()*.15:0)}))}function lv(i,t){return t?i.tactics[0]??"逃げ":"抜き"}const hv=Ye+zn+40-R0,ki=Nn.map(()=>new w),vo=Nn.map(()=>new w),Gc=new w;function uv(i,t){for(let a=0;a<Nn.length;a++)i.toWorld(Gc.set(0,0,Nn[a].z),ki[a]),t.toWorld(Gc.set(0,0,Nn[a].z),vo[a]);let e=-1/0,n=0,s=0,r=0,o=0;for(let a=0;a<ki.length;a++)for(let c=0;c<vo.length;c++){const l=vo[c].x-ki[a].x,h=vo[c].z-ki[a].z,u=Math.hypot(l,h),d=Nn[a].r+Nn[c].r-u;d>e&&u>1e-4&&(e=d,n=a,s=c,r=l/u,o=h/u)}return{pen:e,ia:n,ib:s,nx:r,nz:o}}function dv(i){for(let t=0;t<i.length;t++)for(let e=t+1;e<i.length;e++){const n=i[t],s=i[e];if((s.comW.x-n.comW.x)**2+(s.comW.z-n.comW.z)**2>16)continue;const{pen:r,nx:o,nz:a}=uv(n,s);if(r<=0)continue;n.shift(-o*r/2,-a*r/2),s.shift(o*r/2,a*r/2);const c=(s.vel.x-n.vel.x)*o+(s.vel.z-n.vel.z)*a;if(c<0){const l=-c/2;n.vel.x-=l*o,n.vel.z-=l*a,s.vel.x+=l*o,s.vel.z+=l*a}}}const fv=.8;function C0(i,t){let e=0;return i.forEach((n,s)=>{for(const r of dn){if((n.comW.x-r.x)**2+(n.comW.z-r.z)**2>16)continue;let o=0,a=0,c=0;for(let h=0;h<Nn.length;h++){n.toWorld(Gc.set(0,0,Nn[h].z),ki[h]);const u=ki[h].x-r.x,d=ki[h].z-r.z,f=Math.hypot(u,d),g=Nn[h].r+fv-f;g>o&&f>1e-4&&(o=g,a=u/f,c=d/f)}if(o<=0)continue;e++,n.shift(a*o,c*o);const l=n.vel.x*a+n.vel.z*c;l<0&&(n.vel.x-=1.3*l*a,n.vel.z-=1.3*l*c),n.vel.x*=.97,n.vel.z*=.97}}),e}const pv=null,Mo=[.0126,-.0094,-.2177,.0866,-.1994,.362,-.6611,-.373,.0563,.781,-.1686,.3893,-.2814,.042,.0295,-.0335,-.1323,-.0349,.2031,.0876,.3663,-.1868,-.0936,-.1521,.0483,.1637,-.0606,-.0156,.058,.0525,-.1774,-.067,.0769,.3721,.2763,.0525,-.0507,-.0329,-.4435,-.131,.1422,-.5861,.1004,-.1572,-.1108,-.2392,.1798,.3646,.1644,-.3775,-.0666,.051,-.2588,-.1528,.155,.0746,-.2378,-.2084,.1948,-.0104,.2259,.1241,-.0365,.035,-.05,.0436,-.0366,.3708,.0925,-.0903,.5542,.1461,.2549,-.9206,-.0212,-.3614,-.3109,.0767,.3028,.0545,.2096,-.0593,-.0474,-.1627,.1377,.0801,.0565,-.2698,.2171,.2446,-.1536,.236,.1234,.0263,-.098,-.4329,-.2664,.1211,-.0289,-.1639,.1199,.1993,-.4942,-.2159,-.2169,.4511,-.3651,.2373,.0446,-.3742,-.026,-.1536,.2874,-.2597,.0147,.097,.1015,.1317,.0392,.1456,.1137,-.1302,.0459,.0934,.0891,-.0181,.2264,-.1746,-.3601,-.178,-.033,.0914,.2893,.2921,-.3077,-.0866,-.316,-.5393,-.1127,.1172,-.0118,-.3384,-.2149,.2805,.0421,-.3009,-.1675,-.0939,.0146,.0694,.0902,-1e-4,-.2205,-.0834,-.0246,.1542,-.0334,.1774,.1312,.2899,.0397,-.0718,.0775,-.1149,.0282,-.0264,.6686,-.0891,.0701,-.4809,-.1793,.0309,-.091,.2909,.1639,-.4672,-.0682,.1536,-.1793,.1959,-.0244,.0479,-.073,-.1867,-.2927,-.1278,-.0096,.0737,.0719,-.1618,.1383,-.0589,.2766,-.2537,-.0227,.1558,.0829,.1092,-.6693,-.2112,.6683,.1551,-.1354,-.1097,.133,-.4416,.0722,-.4727,-.0883,-.3845,.1298,-.202,.114,-.0175,-.1112,-.0107,-.0659,.0205,-.0325,.1208,.0863,.0258,.073,.0628,.0751,-.0913,-.4839,.6559,-.3277,.0108,-.983,.0206,.0038,2.1045,.0253,-.0111,.0071,.1915,-.3055,.4254,-.0425,.2698,.3099,.0172,.4213,-.5499,.2858,-.12,-.2054,.0913,.1178,-.0353,.1372,.1629,.0067,.0744,-.0475,-.6087,.2331,-.0728,-.4084,-.3174,-.1199,-.6577,.1498,-.4081,-.0257,.1006,.0026,.1283,.005,-.204,.0543,.2406,.3247,.1758,.1148,.2363,-.043,.2011,-.1091,-.0764,-.0519,.0909,.0672,-.1548,.0837,-.4732,.2348,-.5313,.2082,-.4565,-.0798,.1748,1.0051,.0037,-.1936,.0164,-.0217,.2774,.2514,-.467,-.2084,-.2702,.1165,-.3382,-.2435,.5794,.6016,.3745,.0442,.0528,-.0713,.109,-.0628,-.0735,.2354,.1654,-.3269,.2241,-.0432,-.0365,.0027,.5814,.0936,.3605,-.5494,-.4091,-.4032,-.4933,-.3911,.0947,-.2031,-.23,-.0023,.4124,-.0455,.1792,-.0226,-.3317,-.0889,.3741,-.0741,-.0901,-.0162,-.0752,-.1339,.2727,-.0788,-.0343,.0643,.3471,.0798,-.2993,-.1076,-.0993,-.3205,.4928,-.284,.4202,.2892,-.2163,-.445,-.8268,.1889,-.964,.1317,-.2214,-.4529,-.0114,-.3473,-.2787,.1133,-.1777,-.1345,.4811,-.4642,-.1089,-.0093,.2208,-.0866,-.1141,.0739,.001,-.2125,.0594,.3613,-.0151,.0645,.4162,-.619,.19,.1659,-.4413,.0526,-.199,-.1204,-.0687,.1593,.4155,.0787,-.1037,-.0359,-.2336,.0535,-.4765,-.1729,.0396,-.0094,-.0913,-.1774,-.0556,.3017,-.2674,.3222,-.2402,.1278,.4503,-.0598,-.1685,.2813,.3842,-.2589,-.1976,-.013,-.3252,-.1151,.2816,-.2555,-.025,-.2439,.1946,.0913,-.3149,-.3414,-.1833,.0456,.3609,.0178,-.316,.044,-2e-4,.1415,-.0707,.0931,-.1089,-.0936,-.201,.3795,-.547,-.0936,.1753,.1813,-.0069,.5468,.0245,-.035,-.1068,.0411,.1285,.1488,-.1774,.377,-.5618,.2848,.0232,5e-4,.3907,.0115,-.0043,-.1694,.0472,-.0783,.0775,-.049,.1386,.1729,.1831,-.2919,.0765,-.1245,.1519,-.5138,-1.0548,-.0235,-.1804,.2615,-.0903,-.6642,1.5911,-.2397,.1517,.228,.0939,.2676,-.0135,.1276,.0715,-.1179,-.2742,-.0222,.0146,.1801,-.2161,.071,-.0376,.1114,-.1435,.0501,-.0573,.0273,.3954,.0469,.0517,-.1674,-.7552,-.0904,.4103,-.5041,-.3103,-.0883,-.3689,.5224,-.2087,.1218,-.032,-.2786,.1409,-.3272,-.0795,.0427,-.199,-.01,.0151,-.1238,.2056,-.0761,.2267,-.0127,-.1431,1e-4,.0366,.1124,-.0417,-.0777,.1081,.0133,-.4624,.0347,.2835,-.2263,-.262,-.3518,-.2254,-.1082,-.092,-.2817,-.2348,.1234,.4517,.1272,-.0348,-.2715,.079,.3547,.074,.1687,.2238,-.0108,-.0734,.1348,.0123,-.1907,-.2243,.2628,.0445,.1746,.3936,-.0198,.3023,.1291,-.4784,.6512,.1944,.0678,-1.5355,.3692,.366,-.0522,.2754,.0842,-.2543,-.0233,.1702,-.1498,-.0875,-.0054,-.1539,.0015,.1184,-.096,.0358,-.0557,-.1546,-.0249,-.0316,-.3015,-.0193,-.471,.282,.0173,.2488,-.0985,-.1177,-.4107,.2549,-.0809,-.1229,-.3158,-.2251,-.0274,.0571,.0167,.1026,-.3244,.0726,-.0244,-.1908,.0848,-.0885,-.1687,.3141,-.153,-.4347,.1395,-.0737,-.2359,-.318,-.0419,-.2746,.225,-.0367,.1966,.0041,-.1199,-.308,.7913,.2859,.0795,-.3288,-.091,-.1473,.1915,.2843,-.2798,-.5518,.1847,-.0558,.2242,-.0132,.0078,-.0132,.0538,.2012,-.0663,-.0027,-.091,-.0503,-.2407,.1911,-.2703,.1182,.016,-.01,.1815,-.3128,-.0646,.4504,-.0614,-.0476,-.1015,-1.3232,-.019,.19,.0863,-.3157,-.0841,.0295,.0931,-.3331,.1318,-.0902,-.0524,-.3158,-.1926,.1942,.2456,.0706,.1793,.2732,-.2778,-.0878,.0119,-.1222,.0262,.2041,.1019,.4251,.1938,-.3317,.297,.2033,.0941,-.433,-.0141,-.0944,.048,.057,.1285,-.4776,.0142,-.0338,-.1186,.0922,-.0463,.2623,-.0703,-.0114,-.3047,.1789,.0515,.2186,-.0446,-.2364,.1023,-.2446,-.4948,.4267,-.1119,.5381,-.004,-.185,.1666,.4073,.0141,-.3871,.3563,.068,-.1709,.1118,-.1072,.3258,.0163,.1555,-.1445,-.5811,-.4481,.3175,-.0167,.0441,.3204,-.047,-.0536,-.1695,.0308,.1197,.0974,.3913,-.3562,-.0676,-.0679,.5407,-.2946,-.4267,-.7755,-.325,-.0823,-.9835,.1459,-.2678,.0617,-.2513,.2151,.3371,.4169,.004,-.2737,-1.0145,-.6952,-.051,.0619,.2286,-.072,-.0284,-.01,.2263,.3324,.0788,-.0856,.2233,-.0204,-.4354,.2244,-.033,-.0895,.1967,-.768,-.2648,.0215,.4094,-.0139,-.0784,.1848,.243,.1824,.3057,-.0732,.5311,-.2123,-.0869,-.0718,-.0119,-.0522,-.2491,-.0929,-.1562,.0338,-.0318,-.0422,-.091,-.0449,-.1092,.1002,.1456,.1516,.2073,.0194,-.0772,-.0599,-.108,.3335,.958,-.1554,-1.1769,.2379,-.3546,-.2295,-.0917,-.0557,.2091,-.2037,-.0211,-.2496,-.8792,-.0283,.0999,.191,.0654,-.0414,.4605,.2572,.166,-.0095,-.0461,-.2156,-.2731,.01,-.0524,.1576,-.0277,.742,.0385,-.6957,.6136,.2814,.2544,.3169,.2053,-.0323,-.2241,.0213,-.1236,.1297,-.0801,.0263,-.3803,-.0252,-.0651,-.1059,.1007,.0307,.0402,-.1685,-.2616,-.1535,-.283,-.0787,.1867,.0151,-1.9867,.2525,.2822,.1881,.2018,-.9404,-1.102,-.0264,.0399,.181,-.59,-.128,.154,.1114,-.0719,.0525,-.4211,.1816,.3484,.0585,-.1428,.1732,-.2183,-.0847,-.463,.0964,-.0487,-.0315,.2466,.2117,-.3713,-.1946,-.4962,.0028,-.3895,.1978,.0414,-.301,.0696,.052,-.2029,-.1351,-.1568,.1479,-.5325,.4706,-.0612,-.137,.1388,.131,.3997,.0357,-.0352,.0486,.0101,-.2229,-.355,.0581,-.0066,-.3546,.2556,-.13,.0378,-.0818,.0312,.0112,-.4367,.3002,-.0609,-.048,.0911,.2333,.0012,-.3743,-.0475,.2785,.2396,.1447,.2011,.0728,-.1576,-.0664,.0338,-.1424,.1364,-.2865,-.0327,.062,.1109,-.084,-.1637,-.3557,.2225,-.1691,.9453,-.1735,-.6417,.0846,.0233,.601,.3778,-.2972,-1.3075,-.2528,.6196,-.1056,.8576,.1807,-.2446,.2153,-.1827,.8188,.7567,.8581,-.0906,.1709,-.1736,.278,-.0853,-.0666,.1056,.2751,.0976,-.2647,-.4263,-.1387,-.305,.5555,-.1473,.0994,-.1553,.4034,-.2484,-.0963,-.1029,-.062,-.0441,.0936,-.1167,-.1391,.0205,.1921,-.1926,.2241,.2627,-.0371,.1545,.0824,.1273,-.0367,-.125,-.0196,.0716,-.1718,-.2618,-.0954,.3069,-.3049,.3925,.1526,-.0131,-.3354,.0238,-.6213,-.0701,-.0982,-.2875,.0966,.0439,.1249,-.1916,-.3575,.108,.1494,-.1596,.1564,-.2195,-.0183,-.4146,-.0182,-.016,.0823,-.0147,.304,-.2394,-.0411,.1764,.0635,.1706,.4128,-.0947,-.067,.6374,-.0167,-.0329,.6091,.6217,.0786,-.0895,.2344,.3618,-.2746,.1929,.1262,-.178,-.086,-.0535,.1371,-.0818,.2722,-.0809,-.0104,.1428,-.1047,-.3194,-.0518,.029,-.1134,-.2172,-.1165,-.2076,.163,-.1346,-.1545,.4864,.1849,.5379,-.438,.7917,.2156,-.1218,-.1092,-.0377,-.0131,-.4685,.3399,.2449,.1341,.04,.1468,-.2469,.1123,-.0463,.0339,.208,.0611,.0186,-.0168,-.0729,-.0974,.1132,-.0485,.3133,-.0497,-.0796,-.11,-.07,-.2769,-.1512,.8484,.2571,-.1023,.0916,.2527,.0879,.2358,.1699,-.0163,-.1247,-.0949,.0407,-.0484,-.2132,-.3095,-.1756,.1317,-.0493,-.1494,.0762,.0722,.1736,-.0239,.2364,.0095,-.0111,.1275,-.4306,-.0301,-.258,-.095,.3406,.5959,-.3538,-.2405,.1807,.0941,-.359,.2381,-.0563,.0051,.035,-.3093,-.033,.0754,-.1053,-.1222,.0724,9e-4,.1014,-.2783,-.2598,.0648,.1571,.1583,.1906,-.1033,-.1421,-.0062,-.5954,.0229,.5324,.3382,.3955,-.6794,.5306,-.0105,-.123,.0178,-.2711,.1116,-.3491,.2991,-.1619,-.1219,-.2529,.073,.0199,.1458,-.1895,.0033,.0798,-.1488,-.0965,-.1599,.1605,-.1168,.0736,.0924,.2495,.1593,-.3619,-.582,.4457,-.1708,.784,-.2861,.2392,.1936,3.4973,-.2725,-.499,.0083,-.0563,-.2519,.2107,.074,.3026,.4653,-.03,.9389,.3884,-.0381,.2057,-.1362,-.0558,-.0689,-.0414,-.1898,-.2818,-.1256,-.4644,.3016,.7764,-.0034,-1.5766,-.1783,.8942,.8364,.6014,-1.0269,-.1675,-.378,.2399,-.0804,-.4415,-.0147,-.0445,-.1369,-.4294,.0243,.2554,.459,-.0286,-.2012,-1.327,.3686,.2354,-.0033,-.3202,-.0671,.2476,.1971,.2171,-.0938,.027,.1337,.3596,.1217,.1456,.629,-.575,.1981,.078,-.0162,-6e-4,-.0843,.4078,.0063,-.1956,-.0843,-.2466,-.0613,.1715,-.2495,.1513,-.056,-.0288,-.2376,-.088,-.0444,-.1467,-.0546,.3641,-.0465,-.2956,-.0953,.425,.6964,1.3897,-.4623,.0841,.2753,-.063,-.2225,-.4556,-.002,.1428,.3303,.4085,.1861,-.0469,.1192,-.4579,-.1519,.1294,-.2463,-.5206,-.1427,-.0681,-.1124,-.1719,-.0284,.0412,-.0688,.0024,-.2072,-.0965,.2759,.0819,.2461,.9977,.2681,.2809,.4387,-.3092,-.0821,.8503,-.1361,-.2717,-.0734,.4364,-.0362,-.0536,-.4082,.0753,.1434,.1532,-.0945,-.5854,-.0177,.0819,.2147,.1104,-.1743,-.0571,.0888,.1279,.1423,-.3249,-.301,-.2525,-.1281,-.1906,.0542,.3693,-.6497,.232,-.1076,-.2935,.0647,-.3444,.0532,-.3105,.1133,-.1328,-.1523,-.1916,.0981,-.1143,-.0978,.1958,-.0243,.0038,-.1106,-.2245,.0794,.0813,.0988,.1347,-.0874,-.0407,.5118,-.1564,.4408,-.0312,-.4812,.0423,.1485,.3338,-.6566,.4914,-.1346,.1138,-.4142,-.0299,-.1287,-.2677,.0473,.1787,.2215,.0387,-.1083,-.0415,.1439,.2754,-.086,.0337,-.1185,-.299,-.143,-.143,-.0679,.0012,.2911,.2591,.0404,.5955,.148,-.6108,-.3156,-.3448,-.7179,-1.9706,-.1135,-.0772,.3436,-.091,-.0624,.142,.1394,.1534,-.2892,.3524,.1353,-.0571,-.0188,-.1929,-.0231,.0114,.0601,-.1516,-.0669,.094,.0413,.1144,-.0617,.0657,.0318,-.2696,.2695,.4606,-.2958,.4598,.0432,-.7004,.1011,.3416,.1415,-.3965,-.2745,.132,-.1552,-.1674,.1396,.2191,.0928,.3512,.1096,.0526,.0703,-.0166,.2218,-.1996,-.1013,.1653,-.2619,.4096,-.2555,-.1388,-.0537,.1055,.0882,-.0301,.272,.0768,-.4394,-.1889,.0704,.1121,.1381,.0018,.3094,.4252,-.1651,-.2666,-.2045,-.2405,-.0517,-.1886,.055,-.0568,.1254,.1794,-.1514,-.1357,.3296,.2376,-.1362,-.646,.1288,-.0327,-.0936,.4182,-.1064,.0851,.4056,-.1362,.2887,-.2287,-.1282,-.3151,.2289,-.0042,.4515,.0447,.1106,.2326,.4796,-.1131,.0507,.0611,.1637,-.2019,-.2137,-.0231,-.582,.1846,.1541,-.0172,.1122,-.1751,.1855,-.0526,.1362,.0943,.0754,.09,.3799,-.2464,-.2124,-.0672,-.0335,-.0584,-.1551,-.4463,.1881,-.0396,-.1851,-.1099,.0416,.0871,.0624,-.0593,.1561,-.1153,.0711,.648,-.1679,.3119,.1828,-.1278,-.3345,-.1277,.1418,.0839,-.2139,-.0216,-.1518,.1132,-.0631,.4237,.0379,.0619,.1665,.1661,-.1525,.0907,.102,.168,.1783,-.119,.1099,.0737,.1295,.1494,.3685,.0401,.3745,-.1405,.1586,.0626,-.0548,.0607,-.1904,-.0249,-.1182,-.0315,-.1918,-.0306,-.2909,-.0154,-.2621,.0786,.1008,-.3964,-.1425,-.0866,.0954,.0876,.3563,.2849,-.4763,-.0716,.3748,-.3255,-.2262,.3798,-.1856,-.7789,.112,.4227,-.0226,.2027,-.5464,.1464,.1314,.2614,-.0304,-.042,.0255,-.1482,.5057,-.1837,.0253,.3662,-.0468,-.3535,-.1275,.2653,.1642,.5346,.5075,-.1261,.2074,-.1274,.1736,-.3203,.2394,.2846,-.3114,-.3326,.4249,.0599,-.3535,-.072,-.2462,-.0474,-.3495,-.2533,-.1787,.1323,-.0282,.0345,.0079,-.2913,-.0135,-.0024,-.0847,.302,-.2795,-.21,-.0772,-.302,-.1303,.2165,-.2091,.1306,-.1477,-.1622,-.1237,-.0453,.0457,.1458,.0066,.2617,-.07,-.297,-.1289,-.1639,-.0108,-.1507,-.0835,-.3654,-.2652,.1269,.2297,-.0998,.0507,.0997,.1176,-.1511,.0782,-.4266,-.4604,-.309,-.0319,-.2376,.2541,.2149,-.1319,-.4061,.0351,.2687,.4848,-.1089,.0933,.3575,.2892,.3443,.2295,-.4087,.2231,.0396,-.1348,.0616,.0159,-.3952,.0306,.0649,.1683,-.0261,-.5778,.073,.1423,-.0504,.0734,-.1188,-.0821,.2711,.107,-.1892,-.222,.1912,-.1335,.0053,.3075,.1068,.0496,-.1737,.0272,-.1908,-.1256,.2492,.0887,.3964,.1311,-.0259,.0716,-.0837,.142,-.1585,.2271,-.1294,.0402,-.1221,.0655,-.1534,-.2731,.0047,.0975,-.2235,.3077,.155,-.1164,-.1746,-.0274,-.4251,.0421,-.0535,-.0081,.0372,.0487,.0803,-.1791,-.2026,.3386,.081,-.0881,.0455,-.0419,.1094,.2182,-.3125,.1085,.0646,-.0226,-.087,-.1248,.1371,-.2386,-.3273,-.1774,.0657,.0669,.2837,-.4594,.2463,.2658,-.3434,.318,.9893,-.1088,.0647,.3058,.3568,.1989,.3957,8e-4,-.1819,.2723,.5369,-.3447,-.3784,-.7537,-.3404,-.7644,-.1378,.0458,.4654,-.108,-.5133,.289,.0697,-.4698,-.5945,.1152,-.1119,-.3622,.3574,-1.2622,-.4462,.8225,.1727,.3636,-.4985,-.2279,-.0318,1.0259,.0364,-.0058,.4688,.2006,.242,.3453,-.0016,.0622,.0365,.4304,-.2696,.244,-.219,-.0104,-.277,.0788,.2248,-.1164,-.6413,.0556,.2065,.1098,.2278,-.3435,-.0908,.0586,-.2886,.0901,.3184,.1355,-.0643,-.2107,-.4163,.1479,.2346,.0961,.083,-.1731,.0483,-.0088,-.1848,-.0524,.0849,-.1612,.5764,-.0697,.4639,-.1252,-.3955,-.1345,-.0921,.0712,.0759,-.2445,-.3508,-.0053,.066,-.0575,.0811,-.0027,-.0421,.3104,-.0838,.3386,.1097,.0425,.2857,-.0015,.0651,-.0419,-.139,-.359,-.1824,-.3908,-.2621,-.0601,.4353,-.2316,-.1738,-.0898,-.0818,8e-4,.1608,.0781,-.0205,-.2558,-.1751,-.3315,.1381,.0898,-.2058,.2424,.4696,.2043,-.1369,.1104,-.231,-.152,-.2907,.2046,-.3061,-.3175,.0158,-.3983,-.2711,.0615,1.1969,.1012,.0133,.1019,-.3258,-.3023,-.4915,-.1132,.3868,-.1356,.0253,-.5258,-.2069,.2309,-.7165,.089,-.071,-.1852,.2776,.2994,-.3998,-.1886,.1502,-.0168,.0091,.0901,.1201,-.335,-.2427,-.1906,-.2255,-.1771,.8186,-.4066,-.9367,-.2819,-.3164,-.3683,-.2071,-.1885,-.0342,-.0181,.5101,-.5937,.0251,.5624,-.3541,.1473,-.1129,.0328,-.2535,-.0764,.5966,.618,.1153,-.0564,-.198,-.4037,.2664,-.3292,.0551,-.2382,.54,.168,.4653,.2377,.0231,-.0447,.106,.0524,-.1689,-.2911,.17,.1105,-.0476,.0967,.5145,-.1783,.0567,.7653,.1356,.303,-.2548,-.1216,-.1488,.2229,-.2529,.1752,.4654,.0302,.1482,-.4345,.0896,.1469,.2284,-.2553,-.1125,.0574,-.0445,.513,-.0766,-.3663,.1652,.1505,.231,.1289,.2756,-.2059,-.1398,-.2492,-.1597,-.0275,.0312,.0681,.0024,-.0443,-.0113,.2314,-.1534,.0624,.038,-.0722,-.1417,.1033,-.1826,.0745,.0367,-.2082,.1037,-.2499,-.2989,.0529,.0917,-.0906,-.073,-1e-4,-.2027,.1449,-.2535,.2994,-.4071,-.222,.3236,.0639,-.348,-.287,.1677,.2042,.3961,-.042,-.06,.0176,.1735,-.1899,-.3383,-.0292,.2664,.5289,-.3143,.2015,.0253,-.2533,-.2866,.0186,-.1661,-.0921,.0846,-.1246,.0717,-.6553,-.1559,-.0978,.0624,.3998,-8e-4,4e-4,.3639,.2074,.1592,-.1731,.0028,-.2788,-.1651,-.1348,.0447,-.2704,.749,-1.419,.8068,1.0834,-1.0365,.3472,.7049,-.376,.0207,.5919,.1684,.299,.6192,-.3338,.3372,-.1988,1.0451,-.2908,-.1789,-1.6456,.2803,-.8512,.2581,-.022,.5633,.396,-.9836,.0745,.0992,-.7278,-.6609,.1538,-.0937,-1.2554,.5285,-1.073,-.3714,1.485,-.0999,.4689,-1.1827,-.0965,-1.0637,1.4644,-.4083,.7929,.8198,.25,.0071,.2055,.0881,.1635,-.1875,-.4324,-.6364,-.1147,-.3173,.2007,.3052,.3613,.318,-.2625,.1187,.1628,.0946,.4977,.1657,-.1508,.1043,-.0173,.1827,.2715,-.067,.1938,.295,.1776,-.3823,.0769,.0902,.0822,.1153,-.0484,.0596,.0821,.0845,-.6561,-.2967,-.025,.4915,.2537,.1086,-.4362,-.251,.0111,-.2965,.4314,-.0994,-.0311,.3057,.0266,-.2462,.1054,.1404,.1132,.143,.1865,.5534,.2943,.2736,-.1049,.0707,.313,.0234,-.5402,.0045,-1.0753,.0325,-.5999,.3147,-.4163,.3041,-.4175,.288,.4162,-.2793,-.2718,.0197,-.473,-.4008,.0245,.0104,-.3859,.289,.0408,.8979,.1819,.3949,.131,.1972,.1159,.0463,-.1146,-.0865,.5625,.0456,1.0359,-.2321,-.4421,-.3547,.9009,-.0189,.0334,-.263,-1.0477,.1681,.5078,.5318,-.0895,-1.5388,.7491,-.7308,.3824,.3751,.3735,-.2801,1.4305,-.1048,-.7322,.3264,.0445,-.497,-.3879,-1.1796,.0965,.1686,-.8422,.1246,-.4755,-.1734,.3649,-.6336,-.0428,.7492,-.5566,1.0619,-.2548,-.4101,-.0649,-1.1034,-.6527,.1397,.109,-.0012,.0838,-.1429,-.1471,-.0813,.3187,.0447,-.1752,.2404,.3386,-.1696,-.232,.1108,.1445,.1812,-.0256,.1581,-.1812,-.2811,-.2597,.1719,-.0215,.4435,.1754,.1245,-.1402,-.1609,-.3016,-.0179,-.1492,-.1538,.0265,-.1545,-.029,.1427,-.1883,-.0482,-.1996,-.1757,.1134,.1409,.1936,.0495,-.1039,.0534,.0419,.0068,-.0424,-.1068,.0374,-.1511,-.0622,.0747,-.1526,.1993,.0979,.2076,.175,-.3295,-.1157,-.2363,.0244,-.1465,.4109,.1523,.1063,-.227,-.0946,.1829,-.3703,-.1647,-.2562,-.2416,-.1396,-.1543,.1723,-.2449,.0736,-.1469,-.2764,-.3858,-.1774,.0125,-.0182,.3002,-.354,.122,.0909,-.1888,-.0119,.1523,-.3036,.3721,-.2392,-.1507,-.3182,-.3513,.236,-.3137,.0725,.6089,-.3407,-.3501,-.0216,.1053,.0594,.1189,-.0216,-.3998,.453,.2826,.3052,-.0998,-.0674,-.4532,.5754,.0784,.3975,-.3422,-.2421,-.2587,-.1599,-.4907,.0775,.0744,-.1263,-.0441,-.0427,-.4923,.2861,-.0923,.4662,.3094,-.0017,.0279,.5449,.1291,.1658,.4068,-.48,.1155,-.1734,-.1275,.0691,-.0066,-.2346,.1393,.3803,.2903,-.1842,-.1911,-.0045,-.1229,-.2971,.2187,.2593,.2426,.1147,-.1958,-.2506,-.3335,-.0684,.0576,-.1694,-.0289,.0262,-.0826,.0276,.0379,-.4629,.3225,.0085,.2479,-.0225,-.0736,-.0648,.5232,-.1648,.2916,-.0313,.2238,.4072,.1054,-.0314,.3971,-.0623,.0377,.3403,.0143,-.0962,.289,-.0044,.0233,-.0264,-.1856,-.0447,.1484,.196,.5682,.2477,.0726,.2502,-.1718,-.3843,-.0213,.1307,-.2348,.1263,-.2228,.0938,-.1149,-.006,-.1587,-.1484,.0583,.162,.088,.1348,-.0754,.055,.0543,.046,-.1654,.1187,.0391,.1444,.1788,-.122,.0793,-.1661,-.0072,-.3527,-.1665,-.1598,.0615,-.1275,.1084,.1817,-.2223,.0761,-.1377,-.1565,.0691,-.0169,-.2046,.192,.1899,.2651,.4175,.0834,.258,-.0846,-.2937,-.0697,-.2456,-.0301,-.0328,.0181,.0747,.2761,.0592,.1303,-.4279,-.3836,.1262,.0839,.0038,.2358,.1804,-.1777,-.13,.2712,-.1186,-.219,-.0065,-.1452,.1049,-.0075,.3312,.118,-.0132,.1092,-.0104,.1507,.1681,.5171,.2872,.9958,-.3058,-.8083,.1084,-.0795,.0114,-.0456,.4504,-.0196,-.1599,.0803,1.03,.3939,.0984,-.5045,-.489,.4654,.129,-.5338,-.1802,-.961,.2969,-.5342,-.5029,-.7716,.3854,-.3821,.1027,-.1644,-.0778,-1.1519,.0785,-.4737,.0063,-.0952,.0859,-.9578,.4946,.5977,2.1404,.3011,.1138,-.5344,.3099,.9817,.3231,-.4227,-.1921,-.1154,-.0284,-.152,.2624,-.0633,.0566,.0067,-.291,-.0449,-.052,.1255,.1171,-.29,.2935,-.2445,.085,-.1842,.0741,-.0581,.166,-.3038,.2364,.0285,.1993,-.0424,-.0997,-.15,-.1358,.338,.2706,-.1066,.1062,-.1137,-.1014,-.0946,.05,.1613,-.0817,.1177,.0963,.3806,.285,-.1925,-.1502,.3153,.1842,-.3207,-.3938,.3609,.1626,-.3515,.1408,.136,-.3132,.3362,.734,.3714,-.3128,-.1119,-.0107,.2701,.1565,-.4432,-.1102,.0391,.0398,-.1718,-.0394,-.5081,-.1188,-.1904,-.2331,.3351,.325,-.001,-.1269,-.1134,-.3073,-.1102,.0347,-.2121,.3382,-.1425,-.2564,-.3581,-.1709,-.0155,.3841,-.4987,.1013,.0411,.0534,.1218,-.1874,.04,.2478,-.1424,.0294,.067,-.1926,.1418,.0817,-.0127,-.2311,-.0117,-.3803,-.0224,-.0688,.2309,.0263,-.0215,.0345,-.1085,-.2432,.1008,-.0982,-.1352,.18,.0126,.0576,.0892,.0116,-.2844,-.1148,.0844,-.036,.206,-.0462,.1014,.0793,-1e-4,.1051,.0378,-.0924,-.0675,-.175,-.0445,.3311,-.1675,-.0185,-.0665,-.3749,.0816,-.1418,.1428,.4236,-.7429,.2961,.9343,-.6731,1.2335,.2039,-.2031,-.0072,.345,.7357,.3755,.1136,-.1244,.3739,-.1366,.7084,-.8093,-.4394,-1.3794,-.3848,-1.2308,-.1354,-.1499,.7225,-.0512,-1.8231,-.0412,-.2898,-.6021,-1.0956,.3097,-.052,-1.0951,.3693,-1.434,-.268,1.604,.355,.0451,-.6439,-.2263,-.6052,.8178,-.0718,.2872,.5954,-.0068,-.2446,-.2217,.2274,-.1304,-.4872,.1845,.653,-.0168,.0825,.3888,.2805,.4939,.203,-.2401,.0901,.076,.1927,-.1573,-.024,-1.4705,.1838,-.403,.0932,-.2359,.2111,-.2236,-.2878,-.0593,-.0551,-.4782,.2045,.0505,.0138,.1469,.0223,-.4424,.26,.7486,.6693,.5895,-.0329,-.1816,.2428,.3267,-.0418,-.2997,.0232,.7361,.3557,.1267,-.0969,.0136,-.0085,.1372,.0535,1.3356,-.0837,.3631,.0947,-.069,1.1472,.1729,-.6499,.7352,.5045,.6109,.1304,-1.0433,.1236,.1383,-.5836,.0427,.279,.016,.5189,.4959,-.2556,.4267,.1444,-.2498,.3787,-.4327,-1.1821,-.5243,.8957,-1.8411,.1624,-.3003,.8824,-.0941,.0567,-.3778,.0125,-.0829,-.971,-.1047,.0751,-.1099,.1341,.2003,.1753,.2922,-.0283,.1572,-.2803,.061,.2723,.1947,.3378,.044,-.4416,.3152,.2707,.1669,.2763,-.4889,.3924,.1634,.1303,.3807,-.0489,.37,.2688,.0263,-.2621,.0244,-.1359,.2445,.5166,.0657,.0048,-.5556,-.1855,.0209,-.337,-.5758,.0289,.4955,-.0817,.1031,.1186,-.1006,-.3999,.0153,-.0834,.0737,.2608,-.2832,-.1746,.1462,-.2351,-.3416,-.0742,-.0853,.0012,-.1062,.1853,-.064,.1235,-.2931,.0462,-.1143,-.0337,-.1503,.3298,-.1733,.2216,.383,.0115,-.172,.4261,.2007,-.0631,-.0237,.1245,-.1643,-.07,-.0527,-.128,.0551,.2211,.1701,-.1134,.3178,-.0582,.2166,-.2968,.2317,.0508,-.073,-.043,-.185,-.0147,.1516,.2151,-.0294,.1657,-.0236,-.111,.013,.2777,.177,.0168,.2267,.3222,-.067,.0601,-.3789,-.2959,.1958,.0289,-.1879,.026,.083,-.0399,-.0249,.0077,.0807,.2922,.1145,-.429,-.0054,-.2073,.3154,.0643,-.2272,.0499,-.2922,-.4399,.1896,-.1996,-.2639,-.0377,-.0379,-.298,-.0611,.2687,-.0265,-.1105,-.2096,-.3633,-.4287,-.3774,.0811,-.142,.2716,-.1622,.0808,-.082,-.2732,.1392,.0191,-.7292,.1742,-.0482,-.1643,-.0022,.5582,.2257,.3651,.03,-.2644,.0102,.0259,.5458,-.27,-.2309,.1803,-.5709,-.3028,-.1394,.0249,.1248,.0669,.2389,-.3082,-.0961,.3626,-.4879,-.271,-.1868,-.2363,-.2108,-.3263,-.0926,-.2396,.0274,-.4592,-.0445,-.1442,-.315,-.2208,-.1831,-.2632,-.3827,-.0805,-.2143,.1571,.3017,-.3844,.012,.5416,-.0966,-.5632,-.0632,-.2737,-.3134,-.0516,-.2557,.1944,.2327,.0377,.1759,-.3207,.0354,-.099,-.1573,.3527,-.0186,-.1234,.1651,-.0118,.32,.2086,.0651,-.0102,-.0642,-.2563,.1431,.0303,.1082,.1321,-.2409,-.0071,-.2079,-.1317,.153,-.2299,-.0707,.1525,-.1993,-.0798,.0182,-.0525,.0492,.1329,-6e-4,.0387,-.0756,.1338,.0723,-.096,.0059,-.1367,.0087],bn=dn[0],fu=-14,yo=1/240;function mv({renderer:i,scene:t,camera:e,sun:n,waves:s}){var yt;Ms==="drift"&&pl("v2");for(const _t of["hud","lever","lean-pad","steer-pad","wheel","start","touch","b-prop","b-center","prop-panel","rotate"])(yt=document.getElementById(_t))==null||yt.setAttribute("hidden","");const r=document.createElement("div");r.id="race-hud",r.innerHTML='<div class="r-clock" id="r-clock"></div><div class="r-lap" id="r-lap"></div><ol class="r-order" id="r-order"></ol>',document.body.appendChild(r);const o=document.getElementById("r-clock"),a=document.getElementById("r-lap"),c=document.getElementById("r-order"),l=document.getElementById("banner"),h=new T0,u=new E0(s,h.render),d=new _0(s),f=x0();t.add(d.mesh,f);const g=new v0(u);t.add(g.group);const _=new y0(u);t.add(_.points),d.hide(f,_.points);const m=()=>_.resize(window.innerHeight,e.fov,i.getPixelRatio());window.addEventListener("resize",m);let p=Math.floor(Math.random()*1e5)+1,v=du(p);const S=[];for(let _t=0;_t<6;_t++){const Dt=new Er(new S0(s,h.felt),u),bt=new cv(_t+1,v[_t]),Kt=f0(_t+1);t.add(Kt.root);const Pt=new M0(u);t.add(Pt.mesh),d.hide(Pt.mesh),S.push({ph:Dt,cpu:bt,view:Kt,foam:Pt})}let x=0,L=fu,R=0,A=!1,P=null;function E(){p=Math.floor(Math.random()*1e5)+1,v=du(p),S.forEach((_t,Dt)=>{_t.cpu.skill=v[Dt],_t.cpu.reset();const bt=_t.cpu.startPos();_t.ph.reset(bt.x,bt.z,0,x),_t.foam.clear()}),h.reset(bn.x,bn.z+5),_.clear(),L=fu,A=!1,P=null,l.classList.remove("show")}E();const M=["1マーク観客席","中継","上空","先頭追従"];let C=0;const N=document.getElementById("b-cam"),F=()=>N.textContent=`視点:${M[C]}`;F(),N.onclick=()=>{C=(C+1)%M.length,F()};const W=document.getElementById("b-reset");W.textContent="もう一度",W.onclick=E;const X="boatgame.cpuBrain";let Y=!1;try{localStorage.getItem(X)==="rule"&&(Y=!1)}catch{}const tt=document.createElement("button");(()=>{const _t=Y?pv:null;S.forEach(Dt=>Dt.cpu.policy=_t),tt.textContent=`CPU:${Y?"学習":"ルール"}`})(),tt.onclick=()=>{};const at="boatgame.cpuControl";let ct=!!Mo;try{localStorage.getItem(at)==="rule"&&(ct=!1)}catch{}const Et=document.createElement("button"),lt=()=>{const _t=ct?Mo:null;S.forEach(Dt=>Dt.cpu.control=_t),Et.textContent=`操作:${ct?"学習":"ルール"}`};lt(),Et.onclick=()=>{if(Mo){ct=!ct;try{localStorage.setItem(at,ct?"learned":"rule")}catch{}lt(),E()}},Mo&&document.getElementById("buttons").appendChild(Et);const ut=document.createElement("button");ut.textContent="自分で走る",ut.onclick=()=>{location.hash="",location.reload()},document.getElementById("buttons").appendChild(ut);const G=new Float32Array(3),D=new w,q=new w,z=new w,it=new w(0,0,1),mt=new w,gt=new w(0,0,-1.75),It=new w,Ft=new r0;let Wt=!0;function U(){return[...S].sort((_t,Dt)=>_t.cpu.capsized!==Dt.cpu.capsized?_t.cpu.capsized?1:-1:_t.cpu.finished&&Dt.cpu.finished?_t.cpu.finishTime-Dt.cpu.finishTime:_t.cpu.finished?-1:Dt.cpu.finished?1:Dt.cpu.progress-_t.cpu.progress)}i.setAnimationLoop(()=>{var st;const _t=Math.min(Ft.getDelta(),.05),Dt=S.filter(H=>!H.cpu.capsized);for(const H of S)H.cpu.update(_t,H.ph,L,Dt);R+=_t;let bt=0;for(;R>=yo&&bt<16;){for(const H of S)H.cpu.capsized||H.ph.step(yo,H.cpu.input,x);x+=yo,R-=yo,bt++}if(bt>=16&&(R=0),dv(S.filter(H=>!H.cpu.capsized).map(H=>H.ph)),C0(S.filter(H=>!H.cpu.capsized).map(H=>H.ph)),L+=_t,h.update(_t,bn.x,bn.z+5,0,0,S.map(H=>H.ph.pressure))){d.updateWake(h.render);for(const H of S)h.render.waveForce(H.ph.comW.x,H.ph.comW.z,G,3.5),H.ph.extForce.set(G[0],0,G[1]),H.ph.extTorque.set(0,G[2],0)}for(const H of S){p0(H.view,H.ph,_t),mt.set(-1,0,0).applyQuaternion(H.ph.quat),H.ph.toWorld(gt,It);const et=H.ph.speed(),Rt=1+.8*Math.max(H.ph.propState.cav,H.ph.propState.vent);H.ph.propImmersion>.2&&et>1&&H.foam.add(x,It,mt,Math.min(1,et/8)*Rt),H.foam.update(x),_.emit(_t,x,H.ph,110)}_.step(_t,x),d.update(x,e.position),g.update(x),g.setClock(L);const Kt=U(),Pt=Kt[0];if(!P&&Pt.cpu.progress>hv&&(P=Pt),L<0)o.textContent=`大時計 ${(-L).toFixed(1)}`,o.classList.toggle("near",L>-5);else{const H=Math.floor(L/60),et=L-H*60;o.textContent=`${H}:${et.toFixed(1).padStart(4,"0")}`,o.classList.remove("near")}if(a.textContent=Pt.cpu.finished?"ゴール":`${Math.min(kc,Math.max(1,Pt.cpu.laps+1))}周目 / ${kc}周`,c.innerHTML=Kt.map((H,et)=>{const Rt=H.cpu.lane,Q=Rt===1||Rt===5?"#111":"#fff",K=H.cpu.capsized?"<em>転覆</em>":H.cpu.flying?"<em>F</em>":H.cpu.finished?`<small>${H.cpu.finishTime.toFixed(1)}s</small>`:`<small>${Math.max(0,H.cpu.progress/Fn).toFixed(1)}周${H.cpu.tactic?" "+H.cpu.tactic:""}</small>`;return`<li><b>${et+1}</b><span class="lane" style="background:${d0[Rt-1]};color:${Q}">${Rt}</span>${K}</li>`}).join(""),!A&&S.every(H=>H.cpu.finished||H.cpu.capsized)){A=!0;const H=Kt.filter(Rt=>Rt.cpu.finished),et=H.length?lv(H[0].cpu,H[0]===P):"";l.textContent=`${H.map(Rt=>Rt.cpu.lane).join("-")}　${et}`,l.classList.add("show"),l.classList.remove("small")}let b=40;const y=Pt.ph.origin;if(C===0)b=30,D.set(-58,16,bn.z-22),q.set(bn.x-4,0,bn.z+4);else if(C===1){D.set(-55,31,Math.max(-150,Math.min(150,y.z*.75))),q.copy(y);const H=e.position.distanceTo(y);b=Math.max(5,Math.min(50,2*Math.atan(10/Math.max(1,H))*180/Math.PI))}else if(C===2)D.set(bn.x,120,bn.z-60),q.set(bn.x,0,bn.z-12),b=50;else{const H=Pt.ph.vel,et=Math.hypot(H.x,H.z);et>2&&it.lerp(new w(H.x/et,0,H.z/et),1-Math.exp(-_t*3)).normalize(),D.copy(y).addScaledVector(it,-9).add(new w(0,3.2,0)),q.copy(y).addScaledVector(it,3),b=window.innerWidth<window.innerHeight?75:60}const V=Wt?1:1-Math.exp(-_t*3);e.position.lerp(D,V),z.lerp(q,Wt?1:1-Math.exp(-_t*5)),e.lookAt(z),Math.abs(e.fov-b)>.01&&(e.fov+=(b-e.fov)*(Wt?1:1-Math.exp(-_t*4)),e.updateProjectionMatrix(),m()),Wt=!1,n.position.copy(z).addScaledVector($o,30),n.target.position.copy(z),n.shadow.camera.left=n.shadow.camera.bottom=-14,n.shadow.camera.right=n.shadow.camera.top=14,n.shadow.camera.updateProjectionMatrix(),(st=t.userData.sky)==null||st.position.copy(e.position),d.renderPasses(i,t,e),i.render(t,e)})}const Ni=new URLSearchParams(location.search),gv=Ni.get("view")==="model",Ve=new O1({antialias:!0});Ve.setPixelRatio(Math.min(window.devicePixelRatio,2));Ve.toneMapping=Mu;Ve.toneMappingExposure=1;Ve.shadowMap.enabled=!0;Ve.shadowMap.type=xu;document.getElementById("app").appendChild(Ve.domElement);const we=new z1;we.fog=new el(gl,250,1500);const le=new un(60,1,.1,3e3);{const i=new Ut(new Sr(2e3,32,16),new Mn({side:Ze,depthWrite:!1,fog:!1,uniforms:{uTop:{value:m0},uHorizon:{value:gl},uSun:{value:$o}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 uTop; uniform vec3 uHorizon; uniform vec3 uSun; varying vec3 vDir;
        void main(){ float h = clamp(vDir.y, 0.0, 1.0); vec3 c = mix(uHorizon, uTop, pow(h, 0.45));
          c += vec3(1.0, 0.93, 0.8) * pow(max(dot(normalize(vDir), uSun), 0.0), 64.0) * 0.6;
          gl_FragColor = vec4(c, 1.0);
          #include <colorspace_fragment>
        }`}));i.renderOrder=-1,we.add(i),we.userData.sky=i}we.add(new y_(14478591,2905440,1.1));const Ke=new T_(16774112,2.4);Ke.castShadow=!0;Ke.shadow.mapSize.set(1024,1024);Ke.shadow.camera.left=Ke.shadow.camera.bottom=-4;Ke.shadow.camera.right=Ke.shadow.camera.top=4;Ke.shadow.camera.near=1;Ke.shadow.camera.far=40;Ke.shadow.bias=-5e-4;we.add(Ke,Ke.target);for(const i of we.children)i.userData.keep=!0;const xi=new H_,mr=f0(3);we.add(mr.root);function P0(){const i=window.innerWidth,t=window.innerHeight;Ve.setSize(i,t),le.aspect=i/t,le.fov=i<t?75:60,le.updateProjectionMatrix()}window.addEventListener("resize",P0);P0();gv?_v():location.hash==="#race"?pu():(xv(),document.getElementById("b-watch").onclick=()=>{location.hash="race",pu()});function pu(){Ve.setAnimationLoop(null);for(const i of[...we.children])i.userData.keep||we.remove(i);mv({renderer:Ve,scene:we,camera:le,sun:Ke,waves:xi})}function _v(){document.body.classList.add("model-view");for(const r of["hud","buttons","touch","start","lean-pad","lever","wheel"])document.getElementById(r).hidden=!0;const i=new Ut(new Ns(8,48),new qt({color:6262691,roughness:.9}));i.rotation.x=-Math.PI/2,i.position.y=-.7,i.receiveShadow=!0,we.add(i);const t=new w_(6,12,16777215,10470356);t.position.y=-.69,we.add(t);const e=new R_(le,Ve.domElement);e.target.set(0,.35,-.2);const n={persp:[3.2,2,3.6],side:[5.5,.4,-.2],front:[0,.5,5.5],back:[0,.8,-5.5],top:[.001,6,-.2],rear34:[-3.2,1.6,-3.8],under:[2.6,-1.6,1.8]};Ni.get("cam")==="under"&&(i.visible=t.visible=!1);const s=n[Ni.get("cam")??"persp"]??n.persp;le.position.set(...s),Ni.get("ortho")!==null&&(le.fov=20,le.position.multiplyScalar(3),le.updateProjectionMatrix()),le.position.multiplyScalar(Number(Ni.get("d")??1)),e.update(),Ke.position.set(4,8,6),mr.motor.rotation.y=Number(Ni.get("steer")??0),mr.tilt.rotation.x=(Number(Ni.get("tilt")??ko)-ko)*Math.PI/180,mr.tilt.position.y=Fs.y+xn.motorHeight,Ve.setAnimationLoop(()=>{e.update(),Ve.render(we,le)})}function xv(){const i=new T0,t=new E0(xi,i.render),e=new Er(new S0(xi,i.felt),t),n=new Float32Array(3),s=new _0(xi),r=x0();we.add(s.mesh,r);const o=new v0(t);we.add(o.group);const a=new M0(t);we.add(a.mesh);const c=new y0(t);we.add(c.points),s.hide(r,a.mesh,c.points);const l=document.getElementById("wfx"),h=()=>l.textContent=s.passes?"オン":"オフ";h(),l.onclick=()=>{s.passes=!s.passes;try{localStorage.setItem(g0,s.passes?"1":"0")}catch{}h()};const u=document.getElementById("tphys"),d={v1:"従来",v2:"標準",drift:"ドリフト"},f=()=>u.textContent=d[Ms];f(),u.onclick=()=>{pl(Ms==="v1"?"v2":Ms==="v2"?"drift":"v1");try{localStorage.setItem(h0,Ms)}catch{}f()};const g=()=>c.resize(window.innerHeight,le.fov,Ve.getPixelRatio());g(),window.addEventListener("resize",g);const _=new Ox(document.getElementById("touch")),m=document.getElementById("banner");function p(ot){m.textContent=ot,m.classList.toggle("show",!!ot),m.classList.toggle("small",ot.length>6)}let v=0;const S={x:-18,z:-100,heading:0},x=()=>{i.reset(S.x,S.z),e.reset(S.x,S.z,S.heading,v),a.clear(),c.clear(),L=0,p("")};let L=0;x();const R=["追従","低い追従","真横","上から","中継"];let A=0;const P=document.getElementById("b-cam");P.onclick=()=>{A=(A+1)%R.length,P.textContent=`視点:${R[A]}`},P.textContent=`視点:${R[A]}`;const E=[1,3,5,10,0];let M=1;const C=document.getElementById("b-wave"),N=()=>C.textContent=xi.heightCm>0?`波高 ${xi.heightCm}cm`:"波なし";xi.setHeightCm(E[M]),N(),C.onclick=()=>{M=(M+1)%E.length,xi.setHeightCm(E[M]),N()},document.getElementById("b-reset").onclick=()=>{_.lever=0,x()};const F=document.getElementById("prop-panel");document.getElementById("b-prop").onclick=()=>F.hidden=!F.hidden,document.getElementById("pp-close").onclick=()=>F.hidden=!0;const W=[{key:"diameter",id:"diameter",scale:100,fmt:ot=>`${ot.toFixed(1)} cm`},{key:"pitch",id:"pitch",scale:100,fmt:ot=>`${ot.toFixed(1)} cm`},{key:"ear",id:"ear",scale:1,fmt:ot=>ot.toFixed(2)},{key:"cup",id:"cup",scale:1,fmt:ot=>`${ot.toFixed(2)} mm`}],X="boatgame.prop";try{Object.assign(e.prop,JSON.parse(localStorage.getItem(X)??"{}"))}catch{}const Y=document.getElementById("pp-note");function tt(){for(const ot of W){const Zt=e.prop[ot.key]*ot.scale;document.getElementById(`s-${ot.id}`).value=String(Zt),document.getElementById(`o-${ot.id}`).textContent=ot.fmt(Zt)}Y.textContent=`ピッチ比 ${(e.prop.pitch/e.prop.diameter).toFixed(2)}　${e.prop.blades}枚羽根`;try{localStorage.setItem(X,JSON.stringify(e.prop))}catch{}}for(const ot of W)document.getElementById(`s-${ot.id}`).addEventListener("input",Zt=>{e.prop[ot.key]=Number(Zt.target.value)/ot.scale,tt()});document.getElementById("pp-reset").onclick=()=>{Object.assign(e.prop,c0),tt()},tt();const Z="boatgame.tilt";let at=0;try{const ot=Number(localStorage.getItem(Z));ao.includes(ot)&&(at=ot)}catch{}e.tilt=at;const ct=document.getElementById("o-tilt"),Et=document.getElementById("tilt-note"),lt=Et.textContent??"";function ut(){ct.textContent=`${at.toFixed(1)}°`;const ot=at!==e.tilt;Et.textContent=ot?`走行中は変えられません。止まると ${at.toFixed(1)}° になります`:lt,Et.classList.toggle("pending",ot)}function G(ot){const Zt=ao.indexOf(at);at=ao[Math.max(0,Math.min(ao.length-1,Zt+ot))];try{localStorage.setItem(Z,String(at))}catch{}ut()}const D="boatgame.motorHeight",q=.05;let z=xn.motorHeight;try{const ot=Number(localStorage.getItem(D));localStorage.getItem(D)!==null&&ot>=0&&ot<=.1&&(z=ot)}catch{}xn.motorHeight=z;const it=document.getElementById("o-mh"),mt=document.getElementById("mh-note"),gt=mt.textContent??"";function It(){const ot=Math.round((z-q)*100);it.textContent=ot===0?"±0 cm":`${ot>0?"+":""}${ot} cm`;const Zt=Math.abs(z-xn.motorHeight)>1e-4;mt.textContent=Zt?"走行中は変えられません。止まると反映されます":gt,mt.classList.toggle("pending",Zt)}function Ft(ot){z=Math.max(0,Math.min(.1,Math.round((z+ot*.01)*100)/100));try{localStorage.setItem(D,String(z))}catch{}It()}document.getElementById("mh-dn").onclick=()=>Ft(-1),document.getElementById("mh-up").onclick=()=>Ft(1),It(),document.getElementById("tilt-dn").onclick=()=>G(-1),document.getElementById("tilt-up").onclick=()=>G(1),ut();const Wt=document.getElementById("b-center");Wt.onclick=()=>_.recenter();for(const ot of document.querySelectorAll("button"))ot.addEventListener("pointerdown",Zt=>Zt.stopPropagation());let U=!1;const yt=document.getElementById("start"),_t=document.getElementById("b-start");_t.onclick=async()=>{_t.disabled=!0,_t.textContent="準備中…",_.tiltActive=await _.enableTilt(),Wt.hidden=!_.tiltActive,ht(),yt.hidden=!0,U=!0,x(),_.tiltActive||p(_.swap?"傾きが使えないので、中央のパッドで体重":"傾きが使えないので、下のスライダーでハンドル"),_.tiltActive||setTimeout(()=>p(""),2500)};const Dt=document.getElementById("speed"),bt=document.getElementById("rpm"),Kt=document.getElementById("m-rpm"),Pt=document.getElementById("tach"),b=document.getElementById("chip-cav"),y=document.getElementById("lean-pad"),V=document.getElementById("chip-vent"),st=document.getElementById("meta"),H=document.getElementById("wheel"),et=document.getElementById("wheel-rot"),Rt=document.getElementById("wheel-fill"),Q=document.getElementById("wheel-label"),K="boatgame.ctrlSwap";try{_.swap=localStorage.getItem(K)==="1"}catch{}const At=document.getElementById("steer-pad"),rt=document.getElementById("ctrlswap");function ht(){const ot=_.swap;At.classList.toggle("swap",ot),y.classList.toggle("swap",ot),At.hidden=ot?!1:_.tiltActive,y.hidden=ot&&_.tiltActive,H.hidden=ot,rt.textContent=ot?"入れ替え":"標準"}ht(),rt.onclick=()=>{_.swap=!_.swap;try{localStorage.setItem(K,_.swap?"1":"0")}catch{}ht()};function St(ot){const Zt=ot*90;et.setAttribute("transform",`rotate(${Zt.toFixed(1)} 60 60)`);const fe=Zt*Math.PI/180,Se=60+54*Math.sin(fe),xe=60-54*Math.cos(fe);Rt.setAttribute("d",`M 60 6 A 54 54 0 0 ${Zt>=0?1:0} ${Se.toFixed(2)} ${xe.toFixed(2)}`),H.classList.toggle("full",Math.abs(ot)>.98);const he=ot>.02?"右":ot<-.02?"左":"";Q.textContent=_.tiltActive?`${he} ${Math.abs(_.tiltDeg).toFixed(0)}°`.trim():`${he} ${Math.round(Math.abs(ot)*100)}%`.trim()}const dt=new w,ft=new w(0,0,1),Ht=new w,Lt=new w,Gt=new w,I=new w,pt=new w,J=new w,nt=new w(0,0,-1.75),vt=new w,xt=new r0,Nt=1/240;let ee=0,me=!0;Ve.setAnimationLoop(()=>{const ot=Math.min(xt.getDelta(),.05);_.update(ot);const Zt=U?_.input:{steer:0,throttle:0,leanX:0,leanZ:0};ee+=ot;let fe=0;for(;ee>=Nt&&fe<16;)e.step(Nt,L>0?{steer:0,throttle:0,leanX:0,leanZ:0}:Zt,v),v+=Nt,ee-=Nt,fe++;fe>=16&&(ee=0);const Se=e.comW,xe=e.vel,he=1.2;C0([e]),Se.x<Ot.x0+ln-2+he&&Math.abs(Se.z-Ui)<Rx/2&&(e.shift(Ot.x0+ln-2+he-Se.x,0),xe.x=Math.abs(xe.x)*.3,xe.multiplyScalar(.6)),Se.x<Ot.x0+he&&(e.shift(Ot.x0+he-Se.x,0),xe.x=Math.abs(xe.x)*.3,xe.multiplyScalar(.6)),Se.x>Ot.x1-he&&(e.shift(Ot.x1-he-Se.x,0),xe.x=-Math.abs(xe.x)*.3,xe.multiplyScalar(.6)),Se.z<Ot.z0+he&&(e.shift(0,Ot.z0+he-Se.z),xe.z=Math.abs(xe.z)*.3,xe.multiplyScalar(.6)),Se.z>Ot.z1-he&&(e.shift(0,Ot.z1-he-Se.z),xe.z=-Math.abs(xe.z)*.3,xe.multiplyScalar(.6)),e.forward(Gt),i.update(ot,e.origin.x,e.origin.z,Gt.x,Gt.z,e.pressure)&&(s.updateWake(i.render),i.render.waveForce(e.comW.x,e.comW.z,n),e.extForce.set(n[0],0,n[1]),e.extTorque.set(0,n[2],0)),pt.set(0,1,0).applyQuaternion(e.quat),pt.y<.15&&(L===0&&p("転覆"),L+=ot,L>2.5&&x());const $e=mr;e.tilt!==at&&e.speed()<1&&(e.tilt=at,ut()),Math.abs(xn.motorHeight-z)>1e-4&&e.speed()<1&&(xn.motorHeight=z,It()),p0($e,e,ot),I.set(-1,0,0).applyQuaternion(e.quat),e.toWorld(nt,vt);const yn=e.speed(),br=1+.8*Math.max(e.propState.cav,e.propState.vent);e.propImmersion>.2&&yn>1&&a.add(v,vt,I,Math.min(1,yn/8)*br),a.update(v),s.update(v,le.position),o.update(v),o.setClock(v),c.update(ot,v,e),J.set(Gt.x,0,Gt.z).normalize();const Gn=Math.hypot(e.vel.x,e.vel.z),Hs=Math.min(.7,Math.max(0,(Gn-2)/4)*.7);Ht.copy(J).multiplyScalar(1-Hs),Gn>.1&&Ht.add(new w(e.vel.x/Gn,0,e.vel.z/Gn).multiplyScalar(Hs)),Ht.normalize(),me?ft.copy(Ht):ft.lerp(Ht,1-Math.exp(-ot*3)).normalize(),dt.copy(e.origin).add(new w(0,.6,0));let li=1-Math.exp(-ot*4),Yi=window.innerWidth<window.innerHeight?75:60;if(A===0)Lt.copy(dt).addScaledVector(ft,-7).add(new w(0,2.6,0));else if(A===1)Lt.copy(dt).addScaledVector(ft,-4.2).add(new w(0,.9,0));else if(A===2)Lt.copy(dt).add(new w(-ft.z,0,ft.x).multiplyScalar(-7)).add(new w(0,1.2,0));else if(A===3)Lt.copy(dt).add(new w(0,22,0)).addScaledVector(ft,-6),li=1-Math.exp(-ot*3);else{Lt.set(-55,31,Math.max(-150,Math.min(150,e.origin.z*.75))),li=1-Math.exp(-ot*2);const j=le.position.distanceTo(dt);Yi=Math.max(5,Math.min(50,2*Math.atan(5.5/Math.max(1,j))*180/Math.PI))}Math.abs(le.fov-Yi)>.01&&(le.fov+=(Yi-le.fov)*(1-Math.exp(-ot*4)),le.updateProjectionMatrix(),g()),me?(le.position.copy(Lt),me=!1):le.position.lerp(Lt,li);const Gs=t.height(le.position.x,le.position.z,v)+.4;le.position.y<Gs&&(le.position.y=Gs),A===4?le.lookAt(dt):le.lookAt(J.copy(ft).multiplyScalar(A===3?4:2.5).add(dt)),Ke.position.copy(e.origin).addScaledVector($o,20),Ke.target.position.copy(e.origin),we.userData.sky.position.copy(le.position),Dt.textContent=(yn*3.6).toFixed(0);const Ws=e.rpm;bt.textContent=(Math.round(Ws/50)*50).toFixed(0),Kt.style.width=`${Math.min(100,Ws/7500*100)}%`,Pt.classList.toggle("limit",Ws>ti.limitRpm-150);const Ar=e.propState.cav,Rr=e.propState.vent;b.textContent=`キャビ ${Math.round(Ar*100)}%`,V.textContent=`吸い込み ${Math.round(Rr*100)}%`,b.classList.toggle("on",Ar>.08),V.classList.toggle("on",Rr>.08);const T=e.attitude();st.textContent=`トリム ${T.trim.toFixed(1)}°　傾き ${T.heel.toFixed(1)}°　チルト ${e.tilt.toFixed(1)}°`,St(Zt.steer);const B=e.legForce,$=Math.min(1,Math.hypot(B.x,B.y-Si*9.81,B.z)/(Si*9.81*2));y.style.setProperty("--kick",$.toFixed(2)),s.renderPasses(Ve,we,le),Ve.render(we,le)})}
