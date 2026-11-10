(()=>{var Dc="170";var Xd=0,au=1,qd=2;var L0=1,Nc=2,Zn=3,Fn=0,en=1,ln=2,bi=0,_s=1,Ei=2,lu=3,cu=4,Zd=5,Yi=100,Kd=101,$d=102,Jd=103,jd=104,Qd=200,tf=201,ef=202,nf=203,gl=204,_l=205,sf=206,rf=207,of=208,af=209,lf=210,cf=211,hf=212,uf=213,df=214,xl=0,vl=1,yl=2,Ms=3,Ml=4,Sl=5,bl=6,Rl=7,C0=0,ff=1,pf=2,Ri=0,mf=1,gf=2,_f=3,Uc=4,xf=5,vf=6,yf=7,hu="attached",Mf="detached",I0=300,Ss=301,bs=302,dr=303,El=304,fa=306,Qn=1e3,$n=1001,fr=1002,Ye=1003,Oc=1004;var ps=1005;var tn=1006,rr=1007;var On=1008;var ti=1009,P0=1010,D0=1011,pr=1012,Fc=1013,Zi=1014,Pn=1015,Ir=1016,Bc=1017,kc=1018,Rs=1020,N0=35902,U0=1021,O0=1022,xn=1023,F0=1024,B0=1025,xs=1026,Es=1027,zc=1028,Hc=1029,k0=1030,Vc=1031;var Gc=1033,So=33776,bo=33777,Ro=33778,Eo=33779,wl=35840,Tl=35841,Al=35842,Ll=35843,Cl=36196,Il=37492,Pl=37496,Dl=37808,Nl=37809,Ul=37810,Ol=37811,Fl=37812,Bl=37813,kl=37814,zl=37815,Hl=37816,Vl=37817,Gl=37818,Wl=37819,Yl=37820,Xl=37821,wo=36492,ql=36494,Zl=36495,z0=36283,Kl=36284,$l=36285,Jl=36286;var ws=2300,Ts=2301,Ua=2302,uu=2400,du=2401,fu=2402,Sf=2500;var H0=0,pa=1,Pr=2,bf=3200,Rf=3201;var V0=0,Ef=1,Mi="",Me="srgb",qe="srgb-linear",ma="linear",pe="srgb";var Qi=7680;var pu=519,wf=512,Tf=513,Af=514,G0=515,Lf=516,Cf=517,If=518,Pf=519,jl=35044,Wc=35048;var mu="300 es",Jn=2e3,To=2001,wi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gu=1234567,or=Math.PI/180,As=180/Math.PI;function vn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Ie(i,t,e){return Math.max(t,Math.min(e,i))}function Yc(i,t){return(i%t+t)%t}function Df(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Nf(i,t,e){return i!==t?(e-i)/(t-i):0}function ar(i,t,e){return(1-e)*i+e*t}function Uf(i,t,e,n){return ar(i,t,1-Math.exp(-e*n))}function Of(i,t=1){return t-Math.abs(Yc(i,t*2)-t)}function Ff(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Bf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function kf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function zf(i,t){return i+Math.random()*(t-i)}function Hf(i){return i*(.5-Math.random())}function Vf(i){i!==void 0&&(gu=i);let t=gu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gf(i){return i*or}function Wf(i){return i*As}function Yf(i){return(i&i-1)===0&&i!==0}function Xf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function qf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Bs={DEG2RAD:or,RAD2DEG:As,generateUUID:vn,clamp:Ie,euclideanModulo:Yc,mapLinear:Df,inverseLerp:Nf,lerp:ar,damp:Uf,pingpong:Of,smoothstep:Ff,smootherstep:Bf,randInt:kf,randFloat:zf,randFloatSpread:Hf,seededRandom:Vf,degToRad:Gf,radToDeg:Wf,isPowerOfTwo:Yf,ceilPowerOfTwo:Xf,floorPowerOfTwo:qf,setQuaternionFromProperEuler:Zf,normalize:ue,denormalize:In},tt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],v=s[4],x=s[7],P=s[2],w=s[5],A=s[8];return r[0]=o*_+a*y+l*P,r[3]=o*m+a*v+l*w,r[6]=o*p+a*x+l*A,r[1]=c*_+h*y+u*P,r[4]=c*m+h*v+u*w,r[7]=c*p+h*x+u*A,r[2]=d*_+f*y+g*P,r[5]=d*m+f*v+g*w,r[8]=d*p+f*x+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Oa.makeScale(t,e)),this}rotate(t){return this.premultiply(Oa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Oa=new qt;function W0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kf(){let i=mr("canvas");return i.style.display="block",i}var _u={};function ir(i){i in _u||(_u[i]=!0,console.warn(i))}function $f(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Jf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function jf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var te={enabled:!0,workingColorSpace:qe,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(i.r=jn(i.r),i.g=jn(i.g),i.b=jn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(i.r=vs(i.r),i.g=vs(i.g),i.b=vs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mi?ma:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var xu=[.64,.33,.3,.6,.15,.06],vu=[.2126,.7152,.0722],yu=[.3127,.329],Mu=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Su=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[qe]:{primaries:xu,whitePoint:yu,transfer:ma,toXYZ:Mu,fromXYZ:Su,luminanceCoefficients:vu,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:xu,whitePoint:yu,transfer:pe,toXYZ:Mu,fromXYZ:Su,luminanceCoefficients:vu,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}});var ts,Ql=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ts===void 0&&(ts=mr("canvas")),ts.width=t.width,ts.height=t.height;let n=ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=mr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=jn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qf=0,Ao=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fa(s[o].image)):r.push(Fa(s[o]))}else r=Fa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Fa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ql.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var tp=0,Oe=class i extends wi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=$n,s=$n,r=tn,o=On,a=xn,l=ti,c=i.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=vn(),this.name="",this.source=new Ao(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==I0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qn:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case fr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qn:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case fr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=I0;Oe.DEFAULT_ANISOTROPY=1;var re=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,x=(f+1)/2,P=(p+1)/2,w=(h+d)/4,A=(u+_)/4,C=(g+m)/4;return v>x&&v>P?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=w/n,r=A/n):x>P?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=C/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=A/r,s=C/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tc=class extends wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Oe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ao(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends tc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Lo=class extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ec=class extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Be=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let P=Math.sqrt(v),w=Math.atan2(P,p*y);m=Math.sin(m*w)/P,a=Math.sin(a*w)/P}let x=a*y;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ba.copy(this).projectOnVector(t),this.sub(Ba)}reflect(t){return this.sub(Ba.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ba=new T,bu=new Be,yn=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(t.matrixWorld),this.union(Yr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ks),Xr.subVectors(this.max,Ks),es.subVectors(t.a,Ks),ns.subVectors(t.b,Ks),is.subVectors(t.c,Ks),mi.subVectors(ns,es),gi.subVectors(is,ns),Bi.subVectors(es,is);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Bi.z,Bi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Bi.z,0,-Bi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Bi.y,Bi.x,0];return!ka(e,es,ns,is,Xr)||(e=[1,0,0,0,1,0,0,0,1],!ka(e,es,ns,is,Xr))?!1:(qr.crossVectors(mi,gi),e=[qr.x,qr.y,qr.z],ka(e,es,ns,is,Xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Vn=[new T,new T,new T,new T,new T,new T,new T,new T],An=new T,Yr=new yn,es=new T,ns=new T,is=new T,mi=new T,gi=new T,Bi=new T,Ks=new T,Xr=new T,qr=new T,ki=new T;function ka(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ki.fromArray(i,r);let a=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),l=t.dot(ki),c=e.dot(ki),h=n.dot(ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ep=new yn,$s=new T,za=new T,cn=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ep.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$s.subVectors(t,this.center);let e=$s.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($s.copy(t.center).add(za)),this.expandByPoint($s.copy(t.center).sub(za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gn=new T,Ha=new T,Zr=new T,_i=new T,Va=new T,Kr=new T,Ga=new T,Ls=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ha.copy(t).add(e).multiplyScalar(.5),Zr.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(Ha);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Zr),a=_i.dot(this.direction),l=-_i.dot(Zr),c=_i.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ha).addScaledVector(Zr,d),f}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);let n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,s,r){Va.subVectors(e,t),Kr.subVectors(n,t),Ga.crossVectors(Va,Kr);let o=this.direction.dot(Ga),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,t);let l=a*this.direction.dot(Kr.crossVectors(_i,Kr));if(l<0)return null;let c=a*this.direction.dot(Va.cross(_i));if(c<0||l+c>o)return null;let h=-a*_i.dot(Ga);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ot=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),o=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(np,t,ip)}lookAt(t,e,n){let s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),xi.crossVectors(n,on),xi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),xi.crossVectors(n,on)),xi.normalize(),$r.crossVectors(on,xi),s[0]=xi.x,s[4]=$r.x,s[8]=on.x,s[1]=xi.y,s[5]=$r.y,s[9]=on.y,s[2]=xi.z,s[6]=$r.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],v=n[7],x=n[11],P=n[15],w=s[0],A=s[4],C=s[8],R=s[12],S=s[1],I=s[5],z=s[9],F=s[13],H=s[2],$=s[6],V=s[10],it=s[14],G=s[3],ht=s[7],_t=s[11],Rt=s[15];return r[0]=o*w+a*S+l*H+c*G,r[4]=o*A+a*I+l*$+c*ht,r[8]=o*C+a*z+l*V+c*_t,r[12]=o*R+a*F+l*it+c*Rt,r[1]=h*w+u*S+d*H+f*G,r[5]=h*A+u*I+d*$+f*ht,r[9]=h*C+u*z+d*V+f*_t,r[13]=h*R+u*F+d*it+f*Rt,r[2]=g*w+_*S+m*H+p*G,r[6]=g*A+_*I+m*$+p*ht,r[10]=g*C+_*z+m*V+p*_t,r[14]=g*R+_*F+m*it+p*Rt,r[3]=y*w+v*S+x*H+P*G,r[7]=y*A+v*I+x*$+P*ht,r[11]=y*C+v*z+x*V+P*_t,r[15]=y*R+v*F+x*it+P*Rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,v=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,P=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,w=e*y+n*v+s*x+r*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return t[0]=y*A,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*A,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*A,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*A,t[4]=v*A,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*A,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*A,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*A,t[8]=x*A,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*A,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*A,t[12]=P*A,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*A,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*A,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,y=l*c,v=l*h,x=l*u,P=n.x,w=n.y,A=n.z;return s[0]=(1-(_+p))*P,s[1]=(f+x)*P,s[2]=(g-v)*P,s[3]=0,s[4]=(f-x)*w,s[5]=(1-(d+p))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(g+v)*A,s[9]=(m-y)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ss.set(s[0],s[1],s[2]).length(),o=ss.set(s[4],s[5],s[6]).length(),a=ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ln.copy(this);let c=1/r,h=1/o,u=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,e.setFromRotationMatrix(Ln),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Jn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(a===Jn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===To)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Jn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h,g,_;if(a===Jn)g=(o+r)*u,_=-2*u;else if(a===To)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ss=new T,Ln=new Ot,np=new T(0,0,0),ip=new T(1,1,1),xi=new T,$r=new T,on=new T,Ru=new Ot,Eu=new Be,Je=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ru,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Eu.setFromEuler(this),this.setFromQuaternion(Eu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Je.DEFAULT_ORDER="XYZ";var Co=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sp=0,wu=new T,rs=new Be,Wn=new Ot,Jr=new T,Js=new T,rp=new T,op=new Be,Tu=new T(1,0,0),Au=new T(0,1,0),Lu=new T(0,0,1),Cu={type:"added"},ap={type:"removed"},os={type:"childadded",child:null},Wa={type:"childremoved",child:null},Re=class i extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new T,e=new Je,n=new Be,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ot},normalMatrix:{value:new qt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(Tu,t)}rotateY(t){return this.rotateOnAxis(Au,t)}rotateZ(t){return this.rotateOnAxis(Lu,t)}translateOnAxis(t,e){return wu.copy(t).applyQuaternion(this.quaternion),this.position.add(wu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tu,t)}translateY(t){return this.translateOnAxis(Au,t)}translateZ(t){return this.translateOnAxis(Lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jr.copy(t):Jr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Js,Jr,this.up):Wn.lookAt(Jr,Js,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(Wn),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cu),os.child=t,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ap),Wa.child=t,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cu),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,rp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Re.DEFAULT_UP=new T(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Cn=new T,Yn=new T,Ya=new T,Xn=new T,as=new T,ls=new T,Iu=new T,Xa=new T,qa=new T,Za=new T,Ka=new re,$a=new re,Ja=new re,Xi=class i{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),Yn.subVectors(n,e),Ya.subVectors(t,e);let o=Cn.dot(Cn),a=Cn.dot(Yn),l=Cn.dot(Ya),c=Yn.dot(Yn),h=Yn.dot(Ya),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ka.setScalar(0),$a.setScalar(0),Ja.setScalar(0),Ka.fromBufferAttribute(t,e),$a.fromBufferAttribute(t,n),Ja.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ka,r.x),o.addScaledVector($a,r.y),o.addScaledVector(Ja,r.z),o}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),Yn.subVectors(t,e),Cn.cross(Yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Cn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;as.subVectors(s,n),ls.subVectors(r,n),Xa.subVectors(t,n);let l=as.dot(Xa),c=ls.dot(Xa);if(l<=0&&c<=0)return e.copy(n);qa.subVectors(t,s);let h=as.dot(qa),u=ls.dot(qa);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(as,o);Za.subVectors(t,r);let f=as.dot(Za),g=ls.dot(Za);if(g>=0&&f<=g)return e.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ls,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Iu.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Iu,a);let p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(as,o).addScaledVector(ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Y0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},jr={h:0,s:0,l:0};function ja(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Yc(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ja(o,r,t+1/3),this.g=ja(o,r,t),this.b=ja(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=Me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){let n=Y0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return te.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Ie(Ge.r*255,0,255))*65536+Math.round(Ie(Ge.g*255,0,255))*256+Math.round(Ie(Ge.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ge.copy(this),e);let n=Ge.r,s=Ge.g,r=Ge.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Me){te.fromWorkingColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,s=Ge.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(jr);let n=ar(vi.h,jr.h,e),s=ar(vi.s,jr.s,e),r=ar(vi.l,jr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new Pt;Pt.NAMES=Y0;var lp=0,hn=class extends wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=vn(),this.name="",this.blending=_s,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=_l,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gl&&(n.blendSrc=this.blendSrc),this.blendDst!==_l&&(n.blendDst=this.blendDst),this.blendEquation!==Yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Xe=class extends hn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=C0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ce=new T,Qr=new tt,Te=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jl,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qr.fromBufferAttribute(this,e),Qr.applyMatrix3(t),this.setXY(e,Qr.x,Qr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jl&&(t.usage=this.usage),t}};var Io=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Po=class extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Jt=class extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}},cp=0,_n=new Ot,Qa=new Re,cs=new T,an=new yn,js=new yn,Ue=new T,Se=class i extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(W0(t)?Po:Io)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return Qa.lookAt(t),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(an.min,js.min),an.expandByPoint(Ue),Ue.addVectors(an.max,js.max),an.expandByPoint(Ue)):(an.expandByPoint(js.min),an.expandByPoint(js.max))}an.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ue.fromBufferAttribute(a,c),l&&(cs.fromBufferAttribute(t,c),Ue.add(cs)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new T,l[C]=new T;let c=new T,h=new T,u=new T,d=new tt,f=new tt,g=new tt,_=new T,m=new T;function p(C,R,S){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,R),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[C].add(_),a[R].add(_),a[S].add(_),l[C].add(m),l[R].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,R=y.length;C<R;++C){let S=y[C],I=S.start,z=S.count;for(let F=I,H=I+z;F<H;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let v=new T,x=new T,P=new T,w=new T;function A(C){P.fromBufferAttribute(s,C),w.copy(P);let R=a[C];v.copy(R),v.sub(P.multiplyScalar(P.dot(R))).normalize(),x.crossVectors(w,R);let I=x.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,I)}for(let C=0,R=y.length;C<R;++C){let S=y[C],I=S.start,z=S.count;for(let F=I,H=I+z;F<H;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new T,r=new T,o=new T,a=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Te(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pu=new Ot,zi=new Ls,to=new cn,Du=new T,eo=new T,no=new T,io=new T,tl=new T,so=new T,Nu=new T,ro=new T,de=class extends Re{constructor(t=new Se,e=new Xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){so.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(tl.fromBufferAttribute(u,t),o?so.addScaledVector(tl,h):so.addScaledVector(tl.sub(e),h))}e.add(so)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(to.containsPoint(zi.origin)===!1&&(zi.intersectSphere(to,Du)===null||zi.origin.distanceToSquared(Du)>(t.far-t.near)**2))&&(Pu.copy(r).invert(),zi.copy(t.ray).applyMatrix4(Pu),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,P=v;x<P;x+=3){let w=a.getX(x),A=a.getX(x+1),C=a.getX(x+2);s=oo(this,p,t,n,c,h,u,w,A,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let y=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);s=oo(this,o,t,n,c,h,u,y,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,P=v;x<P;x+=3){let w=x,A=x+1,C=x+2;s=oo(this,p,t,n,c,h,u,w,A,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let y=m,v=m+1,x=m+2;s=oo(this,o,t,n,c,h,u,y,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function hp(i,t,e,n,s,r,o,a){let l;if(t.side===en?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Fn,a),l===null)return null;ro.copy(a),ro.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ro);return c<e.near||c>e.far?null:{distance:c,point:ro.clone(),object:i}}function oo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,eo),i.getVertexPosition(l,no),i.getVertexPosition(c,io);let h=hp(i,t,e,n,eo,no,io,Nu);if(h){let u=new T;Xi.getBarycoord(Nu,eo,no,io,u),s&&(h.uv=Xi.getInterpolatedAttribute(s,a,l,c,u,new tt)),r&&(h.uv1=Xi.getInterpolatedAttribute(r,a,l,c,u,new tt)),o&&(h.normal=Xi.getInterpolatedAttribute(o,a,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new T,materialIndex:0};Xi.getNormal(eo,no,io,d.normal),h.face=d,h.barycoord=u}return h}var Ti=class i extends Se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function g(_,m,p,y,v,x,P,w,A,C,R){let S=x/A,I=P/C,z=x/2,F=P/2,H=w/2,$=A+1,V=C+1,it=0,G=0,ht=new T;for(let _t=0;_t<V;_t++){let Rt=_t*I-F;for(let Wt=0;Wt<$;Wt++){let oe=Wt*S-z;ht[_]=oe*y,ht[m]=Rt*v,ht[p]=H,c.push(ht.x,ht.y,ht.z),ht[_]=0,ht[m]=0,ht[p]=w>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(Wt/A),u.push(1-_t/C),it+=1}}for(let _t=0;_t<C;_t++)for(let Rt=0;Rt<A;Rt++){let Wt=d+Rt+$*_t,oe=d+Rt+$*(_t+1),Z=d+(Rt+1)+$*(_t+1),rt=d+(Rt+1)+$*_t;l.push(Wt,oe,rt),l.push(oe,Z,rt),G+=6}a.addGroup(f,G,R),f+=G,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Cs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function $e(i){let t={};for(let e=0;e<i.length;e++){let n=Cs(i[e]);for(let s in n)t[s]=n[s]}return t}function up(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function X0(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var dp={clone:Cs,merge:$e},fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends hn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fp,this.fragmentShader=pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=up(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Do=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yi=new T,Uu=new tt,Ou=new tt,Pe=class extends Do{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=As*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return As*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,Uu,Ou),e.subVectors(Ou,Uu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(or*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},hs=-90,us=1,nc=class extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pe(hs,us,t,e);s.layers=this.layers,this.add(s);let r=new Pe(hs,us,t,e);r.layers=this.layers,this.add(r);let o=new Pe(hs,us,t,e);o.layers=this.layers,this.add(o);let a=new Pe(hs,us,t,e);a.layers=this.layers,this.add(a);let l=new Pe(hs,us,t,e);l.layers=this.layers,this.add(l);let c=new Pe(hs,us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===To)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},No=class extends Oe{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ss,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ic=class extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new No(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ti(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:bi});r.uniforms.tEquirect.value=e;let o=new de(s,r),a=e.minFilter;return e.minFilter===On&&(e.minFilter=tn),new nc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},el=new T,mp=new T,gp=new qt,Kn=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=el.subVectors(n,e).cross(mp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(el),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||gp.getNormalMatrix(t),s=this.coplanarPoint(el).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hi=new cn,ao=new T,gr=class{constructor(t=new Kn,e=new Kn,n=new Kn,s=new Kn,r=new Kn,o=new Kn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],y=s[13],v=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-f,x-p).normalize(),n[1].setComponents(l+r,d+c,m+f,x+p).normalize(),n[2].setComponents(l+o,d+h,m+g,x+y).normalize(),n[3].setComponents(l-o,d-h,m-g,x-y).normalize(),n[4].setComponents(l-a,d-u,m-_,x-v).normalize(),e===Jn)n[5].setComponents(l+a,d+u,m+_,x+v).normalize();else if(e===To)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ao.x=s.normal.x>0?t.max.x:t.min.x,ao.y=s.normal.y>0?t.max.y:t.min.y,ao.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ao)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function q0(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _p(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Bn=class i extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let y=p*d-o;for(let v=0;v<c;v++){let x=v*u-r;g.push(x,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let v=y+c*p,x=y+c*(p+1),P=y+1+c*(p+1),w=y+1+c*p;f.push(v,x,w),f.push(x,P,w)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vp=`#ifdef USE_ALPHAHASH
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
#endif`,yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
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
#endif`,Ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wp=`#ifdef USE_BATCHING
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
#endif`,Tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ip=`#ifdef USE_IRIDESCENCE
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
#endif`,Pp=`#ifdef USE_BUMPMAP
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
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hp=`#define PI 3.141592653589793
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
} // validated`,Vp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gp=`vec3 transformedNormal = objectNormal;
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
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$p=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rm=`#ifdef USE_GRADIENTMAP
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
}`,om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cm=`uniform bool receiveShadow;
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
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mm=`PhysicalMaterial material;
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
#endif`,gm=`struct PhysicalMaterial {
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
}`,_m=`
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
#endif`,xm=`#if defined( RE_IndirectDiffuse )
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
#endif`,vm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ym=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tm=`#if defined( USE_POINTS_UV )
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
#endif`,Am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`#ifdef USE_MORPHTARGETS
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
#endif`,Nm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Um=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zm=`#ifdef USE_NORMALMAP
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
#endif`,Hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ng=`float getShadowMask() {
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
}`,ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sg=`#ifdef USE_SKINNING
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
#endif`,rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,og=`#ifdef USE_SKINNING
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
#endif`,ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ug=`#ifdef USE_TRANSMISSION
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
#endif`,dg=`#ifdef USE_TRANSMISSION
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
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xg=`uniform sampler2D t2D;
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`#include <common>
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
}`,Rg=`#if DEPTH_PACKING == 3200
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
}`,Eg=`#define DISTANCE
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
}`,wg=`#define DISTANCE
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
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`uniform float scale;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Dg=`#define LAMBERT
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
}`,Ng=`#define LAMBERT
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
}`,Ug=`#define MATCAP
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
}`,Og=`#define MATCAP
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
}`,Fg=`#define NORMAL
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
}`,Bg=`#define NORMAL
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
}`,kg=`#define PHONG
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
}`,zg=`#define PHONG
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
}`,Hg=`#define STANDARD
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
}`,Vg=`#define STANDARD
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
}`,Gg=`#define TOON
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
}`,Wg=`#define TOON
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
}`,Yg=`uniform float size;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,qg=`#include <common>
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
}`,Zg=`uniform vec3 color;
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
}`,Kg=`uniform float rotation;
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
}`,$g=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:xp,alphahash_pars_fragment:vp,alphamap_fragment:yp,alphamap_pars_fragment:Mp,alphatest_fragment:Sp,alphatest_pars_fragment:bp,aomap_fragment:Rp,aomap_pars_fragment:Ep,batching_pars_vertex:wp,batching_vertex:Tp,begin_vertex:Ap,beginnormal_vertex:Lp,bsdfs:Cp,iridescence_fragment:Ip,bumpmap_pars_fragment:Pp,clipping_planes_fragment:Dp,clipping_planes_pars_fragment:Np,clipping_planes_pars_vertex:Up,clipping_planes_vertex:Op,color_fragment:Fp,color_pars_fragment:Bp,color_pars_vertex:kp,color_vertex:zp,common:Hp,cube_uv_reflection_fragment:Vp,defaultnormal_vertex:Gp,displacementmap_pars_vertex:Wp,displacementmap_vertex:Yp,emissivemap_fragment:Xp,emissivemap_pars_fragment:qp,colorspace_fragment:Zp,colorspace_pars_fragment:Kp,envmap_fragment:$p,envmap_common_pars_fragment:Jp,envmap_pars_fragment:jp,envmap_pars_vertex:Qp,envmap_physical_pars_fragment:hm,envmap_vertex:tm,fog_vertex:em,fog_pars_vertex:nm,fog_fragment:im,fog_pars_fragment:sm,gradientmap_pars_fragment:rm,lightmap_pars_fragment:om,lights_lambert_fragment:am,lights_lambert_pars_fragment:lm,lights_pars_begin:cm,lights_toon_fragment:um,lights_toon_pars_fragment:dm,lights_phong_fragment:fm,lights_phong_pars_fragment:pm,lights_physical_fragment:mm,lights_physical_pars_fragment:gm,lights_fragment_begin:_m,lights_fragment_maps:xm,lights_fragment_end:vm,logdepthbuf_fragment:ym,logdepthbuf_pars_fragment:Mm,logdepthbuf_pars_vertex:Sm,logdepthbuf_vertex:bm,map_fragment:Rm,map_pars_fragment:Em,map_particle_fragment:wm,map_particle_pars_fragment:Tm,metalnessmap_fragment:Am,metalnessmap_pars_fragment:Lm,morphinstance_vertex:Cm,morphcolor_vertex:Im,morphnormal_vertex:Pm,morphtarget_pars_vertex:Dm,morphtarget_vertex:Nm,normal_fragment_begin:Um,normal_fragment_maps:Om,normal_pars_fragment:Fm,normal_pars_vertex:Bm,normal_vertex:km,normalmap_pars_fragment:zm,clearcoat_normal_fragment_begin:Hm,clearcoat_normal_fragment_maps:Vm,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:Wm,opaque_fragment:Ym,packing:Xm,premultiplied_alpha_fragment:qm,project_vertex:Zm,dithering_fragment:Km,dithering_pars_fragment:$m,roughnessmap_fragment:Jm,roughnessmap_pars_fragment:jm,shadowmap_pars_fragment:Qm,shadowmap_pars_vertex:tg,shadowmap_vertex:eg,shadowmask_pars_fragment:ng,skinbase_vertex:ig,skinning_pars_vertex:sg,skinning_vertex:rg,skinnormal_vertex:og,specularmap_fragment:ag,specularmap_pars_fragment:lg,tonemapping_fragment:cg,tonemapping_pars_fragment:hg,transmission_fragment:ug,transmission_pars_fragment:dg,uv_pars_fragment:fg,uv_pars_vertex:pg,uv_vertex:mg,worldpos_vertex:gg,background_vert:_g,background_frag:xg,backgroundCube_vert:vg,backgroundCube_frag:yg,cube_vert:Mg,cube_frag:Sg,depth_vert:bg,depth_frag:Rg,distanceRGBA_vert:Eg,distanceRGBA_frag:wg,equirect_vert:Tg,equirect_frag:Ag,linedashed_vert:Lg,linedashed_frag:Cg,meshbasic_vert:Ig,meshbasic_frag:Pg,meshlambert_vert:Dg,meshlambert_frag:Ng,meshmatcap_vert:Ug,meshmatcap_frag:Og,meshnormal_vert:Fg,meshnormal_frag:Bg,meshphong_vert:kg,meshphong_frag:zg,meshphysical_vert:Hg,meshphysical_frag:Vg,meshtoon_vert:Gg,meshtoon_frag:Wg,points_vert:Yg,points_frag:Xg,shadow_vert:qg,shadow_frag:Zg,sprite_vert:Kg,sprite_frag:$g},ut={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Un={basic:{uniforms:$e([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:$e([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:$e([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:$e([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:$e([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:$e([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:$e([ut.points,ut.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:$e([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:$e([ut.common,ut.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:$e([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:$e([ut.sprite,ut.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:$e([ut.common,ut.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:$e([ut.lights,ut.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Un.physical={uniforms:$e([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var lo={r:0,b:0,g:0},Vi=new Je,Jg=new Ot;function jg(i,t,e,n,s,r,o){let a=new Pt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1,x=g(y);x===null?p(a,l):x&&x.isColor&&(p(x,1),v=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){let x=g(v);x&&(x.isCubeTexture||x.mapping===fa)?(h===void 0&&(h=new de(new Ti(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Cs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Vi.copy(v.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jg.makeRotationFromEuler(Vi)),h.material.toneMapped=te.getTransfer(x.colorSpace)!==pe,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new de(new Bn(2,2),new Mn({name:"BackgroundMaterial",uniforms:Cs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=te.getTransfer(x.colorSpace)!==pe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(lo,X0(i)),n.buffers.color.setClear(lo.r,lo.g,lo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m}}function Qg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(S,I,z,F,H){let $=!1,V=u(F,z,I);r!==V&&(r=V,c(r.object)),$=f(S,F,z,H),$&&g(S,F,z,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(S,I,z,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,I,z){let F=z.wireframe===!0,H=n[S.id];H===void 0&&(H={},n[S.id]=H);let $=H[I.id];$===void 0&&($={},H[I.id]=$);let V=$[F];return V===void 0&&(V=d(l()),$[F]=V),V}function d(S){let I=[],z=[],F=[];for(let H=0;H<e;H++)I[H]=0,z[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:F,object:S,attributes:{},index:null}}function f(S,I,z,F){let H=r.attributes,$=I.attributes,V=0,it=z.getAttributes();for(let G in it)if(it[G].location>=0){let _t=H[G],Rt=$[G];if(Rt===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(Rt=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(Rt=S.instanceColor)),_t===void 0||_t.attribute!==Rt||Rt&&_t.data!==Rt.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function g(S,I,z,F){let H={},$=I.attributes,V=0,it=z.getAttributes();for(let G in it)if(it[G].location>=0){let _t=$[G];_t===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(_t=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(_t=S.instanceColor));let Rt={};Rt.attribute=_t,_t&&_t.data&&(Rt.data=_t.data),H[G]=Rt,V++}r.attributes=H,r.attributesNum=V,r.index=F}function _(){let S=r.newAttributes;for(let I=0,z=S.length;I<z;I++)S[I]=0}function m(S){p(S,0)}function p(S,I){let z=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;z[S]=1,F[S]===0&&(i.enableVertexAttribArray(S),F[S]=1),H[S]!==I&&(i.vertexAttribDivisor(S,I),H[S]=I)}function y(){let S=r.newAttributes,I=r.enabledAttributes;for(let z=0,F=I.length;z<F;z++)I[z]!==S[z]&&(i.disableVertexAttribArray(z),I[z]=0)}function v(S,I,z,F,H,$,V){V===!0?i.vertexAttribIPointer(S,I,z,H,$):i.vertexAttribPointer(S,I,z,F,H,$)}function x(S,I,z,F){_();let H=F.attributes,$=z.getAttributes(),V=I.defaultAttributeValues;for(let it in $){let G=$[it];if(G.location>=0){let ht=H[it];if(ht===void 0&&(it==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),it==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor)),ht!==void 0){let _t=ht.normalized,Rt=ht.itemSize,Wt=t.get(ht);if(Wt===void 0)continue;let oe=Wt.buffer,Z=Wt.type,rt=Wt.bytesPerElement,Et=Z===i.INT||Z===i.UNSIGNED_INT||ht.gpuType===Fc;if(ht.isInterleavedBufferAttribute){let at=ht.data,Nt=at.stride,Vt=ht.offset;if(at.isInstancedInterleavedBuffer){for(let kt=0;kt<G.locationSize;kt++)p(G.location+kt,at.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let kt=0;kt<G.locationSize;kt++)m(G.location+kt);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let kt=0;kt<G.locationSize;kt++)v(G.location+kt,Rt/G.locationSize,Z,_t,Nt*rt,(Vt+Rt/G.locationSize*kt)*rt,Et)}else{if(ht.isInstancedBufferAttribute){for(let at=0;at<G.locationSize;at++)p(G.location+at,ht.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let at=0;at<G.locationSize;at++)m(G.location+at);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let at=0;at<G.locationSize;at++)v(G.location+at,Rt/G.locationSize,Z,_t,Rt*rt,Rt/G.locationSize*at*rt,Et)}}else if(V!==void 0){let _t=V[it];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(G.location,_t);break;case 3:i.vertexAttrib3fv(G.location,_t);break;case 4:i.vertexAttrib4fv(G.location,_t);break;default:i.vertexAttrib1fv(G.location,_t)}}}}y()}function P(){C();for(let S in n){let I=n[S];for(let z in I){let F=I[z];for(let H in F)h(F[H].object),delete F[H];delete I[z]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;let I=n[S.id];for(let z in I){let F=I[z];for(let H in F)h(F[H].object),delete F[H];delete I[z]}delete n[S.id]}function A(S){for(let I in n){let z=n[I];if(z[S.id]===void 0)continue;let F=z[S.id];for(let H in F)h(F[H].object),delete F[H];delete z[S.id]}}function C(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:R,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function t1(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function e1(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let C=A===Ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ti&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Pn&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:P,maxSamples:w}}function n1(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Kn,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,v=y*4,x=p.clippingState||null;l.value=x,x=h(g,d,v,f);for(let P=0;P!==v;++P)x[P]=e[P];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function i1(i){let t=new WeakMap;function e(o,a){return a===dr?o.mapping=Ss:a===El&&(o.mapping=bs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===dr||a===El)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ic(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Is=class extends Do{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ms=4,Fu=[.125,.215,.35,.446,.526,.582],qi=20,nl=new Is,Bu=new Pt,il=null,sl=0,rl=0,ol=!1,Wi=(1+Math.sqrt(5))/2,ds=1/Wi,ku=[new T(-Wi,ds,0),new T(Wi,ds,0),new T(-ds,0,Wi),new T(ds,0,Wi),new T(0,Wi,-ds),new T(0,Wi,ds),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],Ps=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(il,sl,rl),this._renderer.xr.enabled=ol,t.scissorTest=!1,co(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ss||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Ir,format:xn,colorSpace:qe,depthBuffer:!1},s=zu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s1(r)),this._blurMaterial=r1(r,t,e)}return s}_compileMaterial(t){let e=new de(this._lodPlanes[0],t);this._renderer.compile(e,nl)}_sceneToCubeUV(t,e,n,s){let a=new Pe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Bu),h.toneMapping=Ri,h.autoClear=!1;let f=new Xe({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new de(new Ti,f),_=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Bu),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;co(s,y*v,p>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ss||t.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;co(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,nl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ku[(s-r-1)%ku.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new de(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*qi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):qi;m>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);let p=[],y=0;for(let A=0;A<qi;++A){let C=A/_,R=Math.exp(-C*C/2);p.push(R),A===0?y+=R:A<m&&(y+=2*R)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let x=this._sizeLods[s],P=3*x*(s>v-ms?s-v+ms:0),w=4*(this._cubeSize-x);co(e,P,w,3*x,2*x),l.setRenderTarget(e),l.render(u,nl)}};function s1(i){let t=[],e=[],n=[],s=i,r=i-ms+1+Fu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ms?l=Fu[o-i+ms-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),v=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let w=0;w<f;w++){let A=w%3*2/3-1,C=w>2?0:-1,R=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];y.set(R,_*g*w),v.set(d,m*g*w);let S=[w,w,w,w,w,w];x.set(S,p*g*w)}let P=new Se;P.setAttribute("position",new Te(y,_)),P.setAttribute("uv",new Te(v,m)),P.setAttribute("faceIndex",new Te(x,p)),t.push(P),s>ms&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zu(i,t,e){let n=new ei(i,t,e);return n.texture.mapping=fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function r1(i,t,e){let n=new Float32Array(qi),s=new T(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Hu(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Vu(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Xc(){return`

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
	`}function o1(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===dr||l===El,h=l===Ss||l===bs;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ps(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Ps(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function a1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ir("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function l1(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let y=f.array;_=f.version;for(let v=0,x=y.length;v<x;v+=3){let P=y[v+0],w=y[v+1],A=y[v+2];d.push(P,w,w,A,A,P)}}else if(g!==void 0){let y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){let P=v+0,w=v+1,A=v+2;d.push(P,w,w,A,A,P)}}else return;let m=new(W0(d)?Po:Io)(d,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function c1(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function h1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function u1(i,t,e){let n=new WeakMap,s=new re;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let R=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=a.attributes.position.count*v,P=1;x>t.maxTextureSize&&(P=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let w=new Float32Array(x*P*4*u),A=new Lo(w,x,P,u);A.type=Pn,A.needsUpdate=!0;let C=v*4;for(let S=0;S<u;S++){let I=m[S],z=p[S],F=y[S],H=x*P*4*S;for(let $=0;$<I.count;$++){let V=$*C;f===!0&&(s.fromBufferAttribute(I,$),w[H+V+0]=s.x,w[H+V+1]=s.y,w[H+V+2]=s.z,w[H+V+3]=0),g===!0&&(s.fromBufferAttribute(z,$),w[H+V+4]=s.x,w[H+V+5]=s.y,w[H+V+6]=s.z,w[H+V+7]=0),_===!0&&(s.fromBufferAttribute(F,$),w[H+V+8]=s.x,w[H+V+9]=s.y,w[H+V+10]=s.z,w[H+V+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new tt(x,P)},n.set(a,d),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function d1(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Uo=class extends Oe{constructor(t,e,n,s,r,o,a,l,c,h=xs){if(h!==xs&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xs&&(n=Zi),n===void 0&&h===Es&&(n=Rs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ye,this.minFilter=l!==void 0?l:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Z0=new Oe,Gu=new Uo(1,1),K0=new Lo,$0=new ec,J0=new No,Wu=[],Yu=[],Xu=new Float32Array(16),qu=new Float32Array(9),Zu=new Float32Array(4);function ks(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Wu[s];if(r===void 0&&(r=new Float32Array(s),Wu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ga(i,t){let e=Yu[t];e===void 0&&(e=new Int32Array(t),Yu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function f1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function p1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function m1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function g1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function _1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;Zu.set(n),i.uniformMatrix2fv(this.addr,!1,Zu),Ne(e,n)}}function x1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;qu.set(n),i.uniformMatrix3fv(this.addr,!1,qu),Ne(e,n)}}function v1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;Xu.set(n),i.uniformMatrix4fv(this.addr,!1,Xu),Ne(e,n)}}function y1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function M1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function S1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function b1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function R1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function E1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function w1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function T1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function A1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gu.compareFunction=G0,r=Gu):r=Z0,e.setTexture2D(t||r,s)}function L1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$0,s)}function C1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||J0,s)}function I1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||K0,s)}function P1(i){switch(i){case 5126:return f1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return _1;case 35675:return x1;case 35676:return v1;case 5124:case 35670:return y1;case 35667:case 35671:return M1;case 35668:case 35672:return S1;case 35669:case 35673:return b1;case 5125:return R1;case 36294:return E1;case 36295:return w1;case 36296:return T1;case 35678:case 36198:case 36298:case 36306:case 35682:return A1;case 35679:case 36299:case 36307:return L1;case 35680:case 36300:case 36308:case 36293:return C1;case 36289:case 36303:case 36311:case 36292:return I1}}function D1(i,t){i.uniform1fv(this.addr,t)}function N1(i,t){let e=ks(t,this.size,2);i.uniform2fv(this.addr,e)}function U1(i,t){let e=ks(t,this.size,3);i.uniform3fv(this.addr,e)}function O1(i,t){let e=ks(t,this.size,4);i.uniform4fv(this.addr,e)}function F1(i,t){let e=ks(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function B1(i,t){let e=ks(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function k1(i,t){let e=ks(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function z1(i,t){i.uniform1iv(this.addr,t)}function H1(i,t){i.uniform2iv(this.addr,t)}function V1(i,t){i.uniform3iv(this.addr,t)}function G1(i,t){i.uniform4iv(this.addr,t)}function W1(i,t){i.uniform1uiv(this.addr,t)}function Y1(i,t){i.uniform2uiv(this.addr,t)}function X1(i,t){i.uniform3uiv(this.addr,t)}function q1(i,t){i.uniform4uiv(this.addr,t)}function Z1(i,t,e){let n=this.cache,s=t.length,r=ga(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Z0,r[o])}function K1(i,t,e){let n=this.cache,s=t.length,r=ga(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||$0,r[o])}function $1(i,t,e){let n=this.cache,s=t.length,r=ga(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||J0,r[o])}function J1(i,t,e){let n=this.cache,s=t.length,r=ga(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||K0,r[o])}function j1(i){switch(i){case 5126:return D1;case 35664:return N1;case 35665:return U1;case 35666:return O1;case 35674:return F1;case 35675:return B1;case 35676:return k1;case 5124:case 35670:return z1;case 35667:case 35671:return H1;case 35668:case 35672:return V1;case 35669:case 35673:return G1;case 5125:return W1;case 36294:return Y1;case 36295:return X1;case 36296:return q1;case 35678:case 36198:case 36298:case 36306:case 35682:return Z1;case 35679:case 36299:case 36307:return K1;case 35680:case 36300:case 36308:case 36293:return $1;case 36289:case 36303:case 36311:case 36292:return J1}}var sc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=P1(e.type)}},rc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=j1(e.type)}},oc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},al=/(\w+)(\])?(\[|\.)?/g;function Ku(i,t){i.seq.push(t),i.map[t.id]=t}function Q1(i,t,e){let n=i.name,s=n.length;for(al.lastIndex=0;;){let r=al.exec(n),o=al.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ku(e,c===void 0?new sc(a,i,t):new rc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new oc(a),Ku(e,u)),e=u}}}var ys=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Q1(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function $u(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var t_=37297,e_=0;function n_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Ju=new qt;function i_(i){te._getMatrix(Ju,te.workingColorSpace,i);let t=`mat3( ${Ju.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case ma:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ju(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+n_(i.getShaderSource(t),o)}else return s}function s_(i,t){let e=i_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function r_(i,t){let e;switch(t){case mf:e="Linear";break;case gf:e="Reinhard";break;case _f:e="Cineon";break;case Uc:e="ACESFilmic";break;case vf:e="AgX";break;case yf:e="Neutral";break;case xf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ho=new T;function o_(){te.getLuminanceCoefficients(ho);let i=ho.x.toFixed(4),t=ho.y.toFixed(4),e=ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function l_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function c_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function sr(i){return i!==""}function Qu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function t0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var h_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(i){return i.replace(h_,d_)}var u_=new Map;function d_(i,t){let e=Kt[t];if(e===void 0){let n=u_.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ac(e)}var f_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e0(i){return i.replace(f_,p_)}function p_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function n0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function m_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===L0?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function g_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ss:case bs:t="ENVMAP_TYPE_CUBE";break;case fa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function __(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case bs:t="ENVMAP_MODE_REFRACTION";break}return t}function x_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case C0:t="ENVMAP_BLENDING_MULTIPLY";break;case ff:t="ENVMAP_BLENDING_MIX";break;case pf:t="ENVMAP_BLENDING_ADD";break}return t}function v_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function y_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=m_(e),c=g_(e),h=__(e),u=x_(e),d=v_(e),f=a_(e),g=l_(r),_=s.createProgram(),m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),p.length>0&&(p+=`
`)):(m=[n0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),p=[n0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ri?"#define TONE_MAPPING":"",e.toneMapping!==Ri?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Ri?r_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,s_("linearToOutputTexel",e.outputColorSpace),o_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),o=ac(o),o=Qu(o,e),o=t0(o,e),a=ac(a),a=Qu(a,e),a=t0(a,e),o=e0(o),a=e0(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=y+m+o,x=y+p+a,P=$u(s,s.VERTEX_SHADER,v),w=$u(s,s.FRAGMENT_SHADER,x);s.attachShader(_,P),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(I){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(P).trim(),H=s.getShaderInfoLog(w).trim(),$=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,w);else{let it=ju(s,P,"vertex"),G=ju(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+it+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||H==="")&&(V=!1);V&&(I.diagnostics={runnable:$,programLog:z,vertexShader:{log:F,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(P),s.deleteShader(w),C=new ys(s,_),R=c_(s,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let R;this.getAttributes=function(){return R===void 0&&A(this),R};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,t_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=e_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=w,this}var M_=0,lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new cc(t),e.set(t,n)),n}},cc=class{constructor(t){this.id=M_++,this.code=t,this.usedTimes=0}};function S_(i,t,e,n,s,r,o){let a=new Co,l=new lc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(R){return c.add(R),R===0?"uv":`uv${R}`}function m(R,S,I,z,F){let H=z.fog,$=F.geometry,V=R.isMeshStandardMaterial?z.environment:null,it=(R.isMeshStandardMaterial?e:t).get(R.envMap||V),G=it&&it.mapping===fa?it.image.height:null,ht=g[R.type];R.precision!==null&&(f=s.getMaxPrecision(R.precision),f!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",f,"instead."));let _t=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Rt=_t!==void 0?_t.length:0,Wt=0;$.morphAttributes.position!==void 0&&(Wt=1),$.morphAttributes.normal!==void 0&&(Wt=2),$.morphAttributes.color!==void 0&&(Wt=3);let oe,Z,rt,Et;if(ht){let he=Un[ht];oe=he.vertexShader,Z=he.fragmentShader}else oe=R.vertexShader,Z=R.fragmentShader,l.update(R),rt=l.getVertexShaderID(R),Et=l.getFragmentShaderID(R);let at=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),Vt=F.isInstancedMesh===!0,kt=F.isBatchedMesh===!0,ne=!!R.map,j=!!R.matcap,st=!!it,L=!!R.aoMap,Ct=!!R.lightMap,et=!!R.bumpMap,yt=!!R.normalMap,lt=!!R.displacementMap,Ft=!!R.emissiveMap,xt=!!R.metalnessMap,E=!!R.roughnessMap,M=R.anisotropy>0,O=R.clearcoat>0,X=R.dispersion>0,Q=R.iridescence>0,q=R.sheen>0,wt=R.transmission>0,dt=M&&!!R.anisotropyMap,vt=O&&!!R.clearcoatMap,Qt=O&&!!R.clearcoatNormalMap,nt=O&&!!R.clearcoatRoughnessMap,St=Q&&!!R.iridescenceMap,Bt=Q&&!!R.iridescenceThicknessMap,Ht=q&&!!R.sheenColorMap,bt=q&&!!R.sheenRoughnessMap,ee=!!R.specularMap,Zt=!!R.specularColorMap,ge=!!R.specularIntensityMap,D=wt&&!!R.transmissionMap,ft=wt&&!!R.thicknessMap,W=!!R.gradientMap,J=!!R.alphaMap,gt=R.alphaTest>0,pt=!!R.alphaHash,Yt=!!R.extensions,we=Ri;R.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(we=i.toneMapping);let He={shaderID:ht,shaderType:R.type,shaderName:R.name,vertexShader:oe,fragmentShader:Z,defines:R.defines,customVertexShaderID:rt,customFragmentShaderID:Et,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:f,batching:kt,batchingColor:kt&&F._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&F.instanceColor!==null,instancingMorph:Vt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:qe,alphaToCoverage:!!R.alphaToCoverage,map:ne,matcap:j,envMap:st,envMapMode:st&&it.mapping,envMapCubeUVHeight:G,aoMap:L,lightMap:Ct,bumpMap:et,normalMap:yt,displacementMap:d&&lt,emissiveMap:Ft,normalMapObjectSpace:yt&&R.normalMapType===Ef,normalMapTangentSpace:yt&&R.normalMapType===V0,metalnessMap:xt,roughnessMap:E,anisotropy:M,anisotropyMap:dt,clearcoat:O,clearcoatMap:vt,clearcoatNormalMap:Qt,clearcoatRoughnessMap:nt,dispersion:X,iridescence:Q,iridescenceMap:St,iridescenceThicknessMap:Bt,sheen:q,sheenColorMap:Ht,sheenRoughnessMap:bt,specularMap:ee,specularColorMap:Zt,specularIntensityMap:ge,transmission:wt,transmissionMap:D,thicknessMap:ft,gradientMap:W,opaque:R.transparent===!1&&R.blending===_s&&R.alphaToCoverage===!1,alphaMap:J,alphaTest:gt,alphaHash:pt,combine:R.combine,mapUv:ne&&_(R.map.channel),aoMapUv:L&&_(R.aoMap.channel),lightMapUv:Ct&&_(R.lightMap.channel),bumpMapUv:et&&_(R.bumpMap.channel),normalMapUv:yt&&_(R.normalMap.channel),displacementMapUv:lt&&_(R.displacementMap.channel),emissiveMapUv:Ft&&_(R.emissiveMap.channel),metalnessMapUv:xt&&_(R.metalnessMap.channel),roughnessMapUv:E&&_(R.roughnessMap.channel),anisotropyMapUv:dt&&_(R.anisotropyMap.channel),clearcoatMapUv:vt&&_(R.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&_(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(R.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&_(R.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&_(R.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&_(R.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(R.sheenRoughnessMap.channel),specularMapUv:ee&&_(R.specularMap.channel),specularColorMapUv:Zt&&_(R.specularColorMap.channel),specularIntensityMapUv:ge&&_(R.specularIntensityMap.channel),transmissionMapUv:D&&_(R.transmissionMap.channel),thicknessMapUv:ft&&_(R.thicknessMap.channel),alphaMapUv:J&&_(R.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(yt||M),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!$.attributes.uv&&(ne||J),fog:!!H,useFog:R.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Nt,skinning:F.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Wt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:R.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:ne&&R.map.isVideoTexture===!0&&te.getTransfer(R.map.colorSpace)===pe,decodeVideoTextureEmissive:Ft&&R.emissiveMap.isVideoTexture===!0&&te.getTransfer(R.emissiveMap.colorSpace)===pe,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ln,flipSided:R.side===en,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Yt&&R.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&R.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function p(R){let S=[];if(R.shaderID?S.push(R.shaderID):(S.push(R.customVertexShaderID),S.push(R.customFragmentShaderID)),R.defines!==void 0)for(let I in R.defines)S.push(I),S.push(R.defines[I]);return R.isRawShaderMaterial===!1&&(y(S,R),v(S,R),S.push(i.outputColorSpace)),S.push(R.customProgramCacheKey),S.join()}function y(R,S){R.push(S.precision),R.push(S.outputColorSpace),R.push(S.envMapMode),R.push(S.envMapCubeUVHeight),R.push(S.mapUv),R.push(S.alphaMapUv),R.push(S.lightMapUv),R.push(S.aoMapUv),R.push(S.bumpMapUv),R.push(S.normalMapUv),R.push(S.displacementMapUv),R.push(S.emissiveMapUv),R.push(S.metalnessMapUv),R.push(S.roughnessMapUv),R.push(S.anisotropyMapUv),R.push(S.clearcoatMapUv),R.push(S.clearcoatNormalMapUv),R.push(S.clearcoatRoughnessMapUv),R.push(S.iridescenceMapUv),R.push(S.iridescenceThicknessMapUv),R.push(S.sheenColorMapUv),R.push(S.sheenRoughnessMapUv),R.push(S.specularMapUv),R.push(S.specularColorMapUv),R.push(S.specularIntensityMapUv),R.push(S.transmissionMapUv),R.push(S.thicknessMapUv),R.push(S.combine),R.push(S.fogExp2),R.push(S.sizeAttenuation),R.push(S.morphTargetsCount),R.push(S.morphAttributeCount),R.push(S.numDirLights),R.push(S.numPointLights),R.push(S.numSpotLights),R.push(S.numSpotLightMaps),R.push(S.numHemiLights),R.push(S.numRectAreaLights),R.push(S.numDirLightShadows),R.push(S.numPointLightShadows),R.push(S.numSpotLightShadows),R.push(S.numSpotLightShadowsWithMaps),R.push(S.numLightProbes),R.push(S.shadowMapType),R.push(S.toneMapping),R.push(S.numClippingPlanes),R.push(S.numClipIntersection),R.push(S.depthPacking)}function v(R,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),R.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),R.push(a.mask)}function x(R){let S=g[R.type],I;if(S){let z=Un[S];I=dp.clone(z.uniforms)}else I=R.uniforms;return I}function P(R,S){let I;for(let z=0,F=h.length;z<F;z++){let H=h[z];if(H.cacheKey===S){I=H,++I.usedTimes;break}}return I===void 0&&(I=new y_(i,S,R,r),h.push(I)),I}function w(R){if(--R.usedTimes===0){let S=h.indexOf(R);h[S]=h[h.length-1],h.pop(),R.destroy()}}function A(R){l.remove(R)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:C}}function b_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function R_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function i0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function s0(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||R_),n.length>1&&n.sort(d||i0),s.length>1&&s.sort(d||i0)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function E_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new s0,i.set(n,[o])):s>=r.length?(o=new s0,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function w_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Pt};break;case"SpotLight":e={position:new T,direction:new T,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function T_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var A_=0;function L_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function C_(i){let t=new w_,e=T_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);let s=new T,r=new Ot,o=new Ot;function a(c){let h=0,u=0,d=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,v=0,x=0,P=0,w=0,A=0;c.sort(L_);for(let R=0,S=c.length;R<S;R++){let I=c[R],z=I.color,F=I.intensity,H=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=z.r*F,u+=z.g*F,d+=z.b*F;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],F);A++}else if(I.isDirectionalLight){let V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let it=I.shadow,G=e.get(I);G.shadowIntensity=it.intensity,G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=I.shadow.matrix,y++}n.directional[f]=V,f++}else if(I.isSpotLight){let V=t.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(z).multiplyScalar(F),V.distance=H,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[_]=V;let it=I.shadow;if(I.map&&(n.spotLightMap[P]=I.map,P++,it.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[_]=it.matrix,I.castShadow){let G=e.get(I);G.shadowIntensity=it.intensity,G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=$,x++}_++}else if(I.isRectAreaLight){let V=t.get(I);V.color.copy(z).multiplyScalar(F),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=V,m++}else if(I.isPointLight){let V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){let it=I.shadow,G=e.get(I);G.shadowIntensity=it.intensity,G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,G.shadowCameraNear=it.camera.near,G.shadowCameraFar=it.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=I.shadow.matrix,v++}n.point[g]=V,g++}else if(I.isHemisphereLight){let V=t.get(I);V.skyColor.copy(I.color).multiplyScalar(F),V.groundColor.copy(I.groundColor).multiplyScalar(F),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==v||C.numSpotShadows!==x||C.numSpotMaps!==P||C.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+P-w,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=v,C.numSpotShadows=x,C.numSpotMaps=P,C.numLightProbes=A,n.version=A_++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let v=c[p];if(v.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(v.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function r0(i){let t=new C_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function I_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new r0(i),t.set(s,[a])):r>=o.length?(a=new r0(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var hc=class extends hn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},uc=class extends hn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},P_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D_=`uniform sampler2D shadow_pass;
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
}`;function N_(i,t,e){let n=new gr,s=new tt,r=new tt,o=new re,a=new hc({depthPacking:Rf}),l=new uc,c={},h=e.maxTextureSize,u={[Fn]:en,[en]:Fn,[ln]:ln},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:P_,fragmentShader:D_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Se;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new de(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=L0;let p=this.type;this.render=function(w,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let R=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),z=i.state;z.setBlending(bi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let F=p!==Zn&&this.type===Zn,H=p===Zn&&this.type!==Zn;for(let $=0,V=w.length;$<V;$++){let it=w[$],G=it.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ht=G.getFrameExtents();if(s.multiply(ht),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,G.mapSize.y=r.y)),G.map===null||F===!0||H===!0){let Rt=this.type!==Zn?{minFilter:Ye,magFilter:Ye}:{};G.map!==null&&G.map.dispose(),G.map=new ei(s.x,s.y,Rt),G.map.texture.name=it.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let _t=G.getViewportCount();for(let Rt=0;Rt<_t;Rt++){let Wt=G.getViewport(Rt);o.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),z.viewport(o),G.updateMatrices(it,Rt),n=G.getFrustum(),x(A,C,G.camera,it,this.type)}G.isPointLightShadow!==!0&&this.type===Zn&&y(G,C),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(R,S,I)};function y(w,A){let C=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ei(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,C,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,C,f,_,null)}function v(w,A,C,R){let S=null,I=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)S=I;else if(S=C.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let z=S.uuid,F=A.uuid,H=c[z];H===void 0&&(H={},c[z]=H);let $=H[F];$===void 0&&($=S.clone(),H[F]=$,A.addEventListener("dispose",P)),S=$}if(S.visible=A.visible,S.wireframe=A.wireframe,R===Zn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let z=i.properties.get(S);z.light=C}return S}function x(w,A,C,R,S){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Zn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);let F=t.update(w),H=w.material;if(Array.isArray(H)){let $=F.groups;for(let V=0,it=$.length;V<it;V++){let G=$[V],ht=H[G.materialIndex];if(ht&&ht.visible){let _t=v(w,ht,R,S);w.onBeforeShadow(i,w,A,C,F,_t,G),i.renderBufferDirect(C,null,F,_t,w,G),w.onAfterShadow(i,w,A,C,F,_t,G)}}}else if(H.visible){let $=v(w,H,R,S);w.onBeforeShadow(i,w,A,C,F,$,null),i.renderBufferDirect(C,null,F,$,w,null),w.onAfterShadow(i,w,A,C,F,$,null)}}let z=w.children;for(let F=0,H=z.length;F<H;F++)x(z[F],A,C,R,S)}function P(w){w.target.removeEventListener("dispose",P);for(let C in c){let R=c[C],S=w.target.uuid;S in R&&(R[S].dispose(),delete R[S])}}}var U_={[xl]:vl,[yl]:bl,[Ml]:Rl,[Ms]:Sl,[vl]:xl,[bl]:yl,[Rl]:Ml,[Sl]:Ms};function O_(i,t){function e(){let D=!1,ft=new re,W=null,J=new re(0,0,0,0);return{setMask:function(gt){W!==gt&&!D&&(i.colorMask(gt,gt,gt,gt),W=gt)},setLocked:function(gt){D=gt},setClear:function(gt,pt,Yt,we,He){He===!0&&(gt*=we,pt*=we,Yt*=we),ft.set(gt,pt,Yt,we),J.equals(ft)===!1&&(i.clearColor(gt,pt,Yt,we),J.copy(ft))},reset:function(){D=!1,W=null,J.set(-1,0,0,0)}}}function n(){let D=!1,ft=!1,W=null,J=null,gt=null;return{setReversed:function(pt){if(ft!==pt){let Yt=t.get("EXT_clip_control");ft?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);let we=gt;gt=null,this.setClear(we)}ft=pt},getReversed:function(){return ft},setTest:function(pt){pt?at(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(pt){W!==pt&&!D&&(i.depthMask(pt),W=pt)},setFunc:function(pt){if(ft&&(pt=U_[pt]),J!==pt){switch(pt){case xl:i.depthFunc(i.NEVER);break;case vl:i.depthFunc(i.ALWAYS);break;case yl:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case Ml:i.depthFunc(i.EQUAL);break;case Sl:i.depthFunc(i.GEQUAL);break;case bl:i.depthFunc(i.GREATER);break;case Rl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=pt}},setLocked:function(pt){D=pt},setClear:function(pt){gt!==pt&&(ft&&(pt=1-pt),i.clearDepth(pt),gt=pt)},reset:function(){D=!1,W=null,J=null,gt=null,ft=!1}}}function s(){let D=!1,ft=null,W=null,J=null,gt=null,pt=null,Yt=null,we=null,He=null;return{setTest:function(he){D||(he?at(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(he){ft!==he&&!D&&(i.stencilMask(he),ft=he)},setFunc:function(he,wn,zn){(W!==he||J!==wn||gt!==zn)&&(i.stencilFunc(he,wn,zn),W=he,J=wn,gt=zn)},setOp:function(he,wn,zn){(pt!==he||Yt!==wn||we!==zn)&&(i.stencilOp(he,wn,zn),pt=he,Yt=wn,we=zn)},setLocked:function(he){D=he},setClear:function(he){He!==he&&(i.clearStencil(he),He=he)},reset:function(){D=!1,ft=null,W=null,J=null,gt=null,pt=null,Yt=null,we=null,He=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,v=null,x=null,P=null,w=null,A=new Pt(0,0,0),C=0,R=!1,S=null,I=null,z=null,F=null,H=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,it=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=it>=1):G.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=it>=2);let ht=null,_t={},Rt=i.getParameter(i.SCISSOR_BOX),Wt=i.getParameter(i.VIEWPORT),oe=new re().fromArray(Rt),Z=new re().fromArray(Wt);function rt(D,ft,W,J){let gt=new Uint8Array(4),pt=i.createTexture();i.bindTexture(D,pt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<W;Yt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(ft+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return pt}let Et={};Et[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(Ms),et(!1),yt(au),at(i.CULL_FACE),L(bi);function at(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Nt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Vt(D,ft){return u[D]!==ft?(i.bindFramebuffer(D,ft),u[D]=ft,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function kt(D,ft){let W=f,J=!1;if(D){W=d.get(ft),W===void 0&&(W=[],d.set(ft,W));let gt=D.textures;if(W.length!==gt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,Yt=gt.length;pt<Yt;pt++)W[pt]=i.COLOR_ATTACHMENT0+pt;W.length=gt.length,J=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,J=!0);J&&i.drawBuffers(W)}function ne(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let j={[Yi]:i.FUNC_ADD,[Kd]:i.FUNC_SUBTRACT,[$d]:i.FUNC_REVERSE_SUBTRACT};j[Jd]=i.MIN,j[jd]=i.MAX;let st={[Qd]:i.ZERO,[tf]:i.ONE,[ef]:i.SRC_COLOR,[gl]:i.SRC_ALPHA,[lf]:i.SRC_ALPHA_SATURATE,[of]:i.DST_COLOR,[sf]:i.DST_ALPHA,[nf]:i.ONE_MINUS_SRC_COLOR,[_l]:i.ONE_MINUS_SRC_ALPHA,[af]:i.ONE_MINUS_DST_COLOR,[rf]:i.ONE_MINUS_DST_ALPHA,[cf]:i.CONSTANT_COLOR,[hf]:i.ONE_MINUS_CONSTANT_COLOR,[uf]:i.CONSTANT_ALPHA,[df]:i.ONE_MINUS_CONSTANT_ALPHA};function L(D,ft,W,J,gt,pt,Yt,we,He,he){if(D===bi){_===!0&&(Nt(i.BLEND),_=!1);return}if(_===!1&&(at(i.BLEND),_=!0),D!==Zd){if(D!==m||he!==R){if((p!==Yi||x!==Yi)&&(i.blendEquation(i.FUNC_ADD),p=Yi,x=Yi),he)switch(D){case _s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ei:i.blendFunc(i.ONE,i.ONE);break;case lu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case _s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ei:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case lu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,v=null,P=null,w=null,A.set(0,0,0),C=0,m=D,R=he}return}gt=gt||ft,pt=pt||W,Yt=Yt||J,(ft!==p||gt!==x)&&(i.blendEquationSeparate(j[ft],j[gt]),p=ft,x=gt),(W!==y||J!==v||pt!==P||Yt!==w)&&(i.blendFuncSeparate(st[W],st[J],st[pt],st[Yt]),y=W,v=J,P=pt,w=Yt),(we.equals(A)===!1||He!==C)&&(i.blendColor(we.r,we.g,we.b,He),A.copy(we),C=He),m=D,R=!1}function Ct(D,ft){D.side===ln?Nt(i.CULL_FACE):at(i.CULL_FACE);let W=D.side===en;ft&&(W=!W),et(W),D.blending===_s&&D.transparent===!1?L(bi):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ft(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(D){S!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),S=D)}function yt(D){D!==Xd?(at(i.CULL_FACE),D!==I&&(D===au?i.cullFace(i.BACK):D===qd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),I=D}function lt(D){D!==z&&(V&&i.lineWidth(D),z=D)}function Ft(D,ft,W){D?(at(i.POLYGON_OFFSET_FILL),(F!==ft||H!==W)&&(i.polygonOffset(ft,W),F=ft,H=W)):Nt(i.POLYGON_OFFSET_FILL)}function xt(D){D?at(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function E(D){D===void 0&&(D=i.TEXTURE0+$-1),ht!==D&&(i.activeTexture(D),ht=D)}function M(D,ft,W){W===void 0&&(ht===null?W=i.TEXTURE0+$-1:W=ht);let J=_t[W];J===void 0&&(J={type:void 0,texture:void 0},_t[W]=J),(J.type!==D||J.texture!==ft)&&(ht!==W&&(i.activeTexture(W),ht=W),i.bindTexture(D,ft||Et[D]),J.type=D,J.texture=ft)}function O(){let D=_t[ht];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Qt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Bt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ht(D){oe.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),oe.copy(D))}function bt(D){Z.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Z.copy(D))}function ee(D,ft){let W=c.get(ft);W===void 0&&(W=new WeakMap,c.set(ft,W));let J=W.get(D);J===void 0&&(J=i.getUniformBlockIndex(ft,D.name),W.set(D,J))}function Zt(D,ft){let J=c.get(ft).get(D);l.get(ft)!==J&&(i.uniformBlockBinding(ft,J,D.__bindingPointIndex),l.set(ft,J))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ht=null,_t={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,v=null,x=null,P=null,w=null,A=new Pt(0,0,0),C=0,R=!1,S=null,I=null,z=null,F=null,H=null,oe.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Nt,bindFramebuffer:Vt,drawBuffers:kt,useProgram:ne,setBlending:L,setMaterial:Ct,setFlipSided:et,setCullFace:yt,setLineWidth:lt,setPolygonOffset:Ft,setScissorTest:xt,activeTexture:E,bindTexture:M,unbindTexture:O,compressedTexImage2D:X,compressedTexImage3D:Q,texImage2D:St,texImage3D:Bt,updateUBOMapping:ee,uniformBlockBinding:Zt,texStorage2D:Qt,texStorage3D:nt,texSubImage2D:q,texSubImage3D:wt,compressedTexSubImage2D:dt,compressedTexSubImage3D:vt,scissor:Ht,viewport:bt,reset:ge}}function o0(i,t,e,n){let s=F_(n);switch(e){case U0:return i*t;case F0:return i*t;case B0:return i*t*2;case zc:return i*t/s.components*s.byteLength;case Hc:return i*t/s.components*s.byteLength;case k0:return i*t*2/s.components*s.byteLength;case Vc:return i*t*2/s.components*s.byteLength;case O0:return i*t*3/s.components*s.byteLength;case xn:return i*t*4/s.components*s.byteLength;case Gc:return i*t*4/s.components*s.byteLength;case So:case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ro:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tl:case Ll:return Math.max(i,16)*Math.max(t,8)/4;case wl:case Al:return Math.max(i,8)*Math.max(t,8)/2;case Cl:case Il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case wo:case ql:case Zl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case z0:case Kl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $l:case Jl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function F_(i){switch(i){case ti:case P0:return{byteLength:1,components:1};case pr:case D0:case Ir:return{byteLength:2,components:1};case Bc:case kc:return{byteLength:2,components:4};case Zi:case Fc:case Pn:return{byteLength:4,components:1};case N0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function B_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return f?new OffscreenCanvas(E,M):mr("canvas")}function _(E,M,O){let X=1,Q=xt(E);if((Q.width>O||Q.height>O)&&(X=O/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let q=Math.floor(X*Q.width),wt=Math.floor(X*Q.height);u===void 0&&(u=g(q,wt));let dt=M?g(q,wt):u;return dt.width=q,dt.height=wt,dt.getContext("2d").drawImage(E,0,0,q,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+wt+")."),dt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(E,M,O,X,Q=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=M;if(M===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8)),M===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),M===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8)),M===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),M===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),M===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),M===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),M===i.RGBA){let wt=Q?ma:te.getTransfer(X);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=wt===pe?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(E,M){let O;return E?M===null||M===Zi||M===Rs?O=i.DEPTH24_STENCIL8:M===Pn?O=i.DEPTH32F_STENCIL8:M===pr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Zi||M===Rs?O=i.DEPTH_COMPONENT24:M===Pn?O=i.DEPTH_COMPONENT32F:M===pr&&(O=i.DEPTH_COMPONENT16),O}function P(E,M){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ye&&E.minFilter!==tn?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function w(E){let M=E.target;M.removeEventListener("dispose",w),C(M),M.isVideoTexture&&h.delete(M)}function A(E){let M=E.target;M.removeEventListener("dispose",A),S(M)}function C(E){let M=n.get(E);if(M.__webglInit===void 0)return;let O=E.source,X=d.get(O);if(X){let Q=X[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(E),Object.keys(X).length===0&&d.delete(O)}n.remove(E)}function R(E){let M=n.get(E);i.deleteTexture(M.__webglTexture);let O=E.source,X=d.get(O);delete X[M.__cacheKey],o.memory.textures--}function S(E){let M=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(M.__webglFramebuffer[X]))for(let Q=0;Q<M.__webglFramebuffer[X].length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[X][Q]);else i.deleteFramebuffer(M.__webglFramebuffer[X]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[X])}else{if(Array.isArray(M.__webglFramebuffer))for(let X=0;X<M.__webglFramebuffer.length;X++)i.deleteFramebuffer(M.__webglFramebuffer[X]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let X=0;X<M.__webglColorRenderbuffer.length;X++)M.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let O=E.textures;for(let X=0,Q=O.length;X<Q;X++){let q=n.get(O[X]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(O[X])}n.remove(E)}let I=0;function z(){I=0}function F(){let E=I;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),I+=1,E}function H(E){let M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function $(E,M){let O=n.get(E);if(E.isVideoTexture&&lt(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){let X=E.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(O,E,M);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+M)}function V(E,M){let O=n.get(E);if(E.version>0&&O.__version!==E.version){Z(O,E,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+M)}function it(E,M){let O=n.get(E);if(E.version>0&&O.__version!==E.version){Z(O,E,M);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+M)}function G(E,M){let O=n.get(E);if(E.version>0&&O.__version!==E.version){rt(O,E,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+M)}let ht={[Qn]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[fr]:i.MIRRORED_REPEAT},_t={[Ye]:i.NEAREST,[Oc]:i.NEAREST_MIPMAP_NEAREST,[ps]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[rr]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},Rt={[wf]:i.NEVER,[Pf]:i.ALWAYS,[Tf]:i.LESS,[G0]:i.LEQUAL,[Af]:i.EQUAL,[If]:i.GEQUAL,[Lf]:i.GREATER,[Cf]:i.NOTEQUAL};function Wt(E,M){if(M.type===Pn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===tn||M.magFilter===rr||M.magFilter===ps||M.magFilter===On||M.minFilter===tn||M.minFilter===rr||M.minFilter===ps||M.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ht[M.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ht[M.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ht[M.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,_t[M.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,_t[M.minFilter]),M.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Rt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ye||M.minFilter!==ps&&M.minFilter!==On||M.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function oe(E,M){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",w));let X=M.source,Q=d.get(X);Q===void 0&&(Q={},d.set(X,Q));let q=H(M);if(q!==E.__cacheKey){Q[q]===void 0&&(Q[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[q].usedTimes++;let wt=Q[E.__cacheKey];wt!==void 0&&(Q[E.__cacheKey].usedTimes--,wt.usedTimes===0&&R(M)),E.__cacheKey=q,E.__webglTexture=Q[q].texture}return O}function Z(E,M,O){let X=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=i.TEXTURE_3D);let Q=oe(E,M),q=M.source;e.bindTexture(X,E.__webglTexture,i.TEXTURE0+O);let wt=n.get(q);if(q.version!==wt.__version||Q===!0){e.activeTexture(i.TEXTURE0+O);let dt=te.getPrimaries(te.workingColorSpace),vt=M.colorSpace===Mi?null:te.getPrimaries(M.colorSpace),Qt=M.colorSpace===Mi||dt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let nt=_(M.image,!1,s.maxTextureSize);nt=Ft(M,nt);let St=r.convert(M.format,M.colorSpace),Bt=r.convert(M.type),Ht=v(M.internalFormat,St,Bt,M.colorSpace,M.isVideoTexture);Wt(X,M);let bt,ee=M.mipmaps,Zt=M.isVideoTexture!==!0,ge=wt.__version===void 0||Q===!0,D=q.dataReady,ft=P(M,nt);if(M.isDepthTexture)Ht=x(M.format===Es,M.type),ge&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Ht,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Ht,nt.width,nt.height,0,St,Bt,null));else if(M.isDataTexture)if(ee.length>0){Zt&&ge&&e.texStorage2D(i.TEXTURE_2D,ft,Ht,ee[0].width,ee[0].height);for(let W=0,J=ee.length;W<J;W++)bt=ee[W],Zt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,bt.width,bt.height,St,Bt,bt.data):e.texImage2D(i.TEXTURE_2D,W,Ht,bt.width,bt.height,0,St,Bt,bt.data);M.generateMipmaps=!1}else Zt?(ge&&e.texStorage2D(i.TEXTURE_2D,ft,Ht,nt.width,nt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,St,Bt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Ht,nt.width,nt.height,0,St,Bt,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Zt&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Ht,ee[0].width,ee[0].height,nt.depth);for(let W=0,J=ee.length;W<J;W++)if(bt=ee[W],M.format!==xn)if(St!==null)if(Zt){if(D)if(M.layerUpdates.size>0){let gt=o0(bt.width,bt.height,M.format,M.type);for(let pt of M.layerUpdates){let Yt=bt.data.subarray(pt*gt/bt.data.BYTES_PER_ELEMENT,(pt+1)*gt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,pt,bt.width,bt.height,1,St,Yt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,bt.width,bt.height,nt.depth,St,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ht,bt.width,bt.height,nt.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,bt.width,bt.height,nt.depth,St,Bt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Ht,bt.width,bt.height,nt.depth,0,St,Bt,bt.data)}else{Zt&&ge&&e.texStorage2D(i.TEXTURE_2D,ft,Ht,ee[0].width,ee[0].height);for(let W=0,J=ee.length;W<J;W++)bt=ee[W],M.format!==xn?St!==null?Zt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,bt.width,bt.height,St,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Ht,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,bt.width,bt.height,St,Bt,bt.data):e.texImage2D(i.TEXTURE_2D,W,Ht,bt.width,bt.height,0,St,Bt,bt.data)}else if(M.isDataArrayTexture)if(Zt){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Ht,nt.width,nt.height,nt.depth),D)if(M.layerUpdates.size>0){let W=o0(nt.width,nt.height,M.format,M.type);for(let J of M.layerUpdates){let gt=nt.data.subarray(J*W/nt.data.BYTES_PER_ELEMENT,(J+1)*W/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,St,Bt,gt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,St,Bt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ht,nt.width,nt.height,nt.depth,0,St,Bt,nt.data);else if(M.isData3DTexture)Zt?(ge&&e.texStorage3D(i.TEXTURE_3D,ft,Ht,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,St,Bt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Ht,nt.width,nt.height,nt.depth,0,St,Bt,nt.data);else if(M.isFramebufferTexture){if(ge)if(Zt)e.texStorage2D(i.TEXTURE_2D,ft,Ht,nt.width,nt.height);else{let W=nt.width,J=nt.height;for(let gt=0;gt<ft;gt++)e.texImage2D(i.TEXTURE_2D,gt,Ht,W,J,0,St,Bt,null),W>>=1,J>>=1}}else if(ee.length>0){if(Zt&&ge){let W=xt(ee[0]);e.texStorage2D(i.TEXTURE_2D,ft,Ht,W.width,W.height)}for(let W=0,J=ee.length;W<J;W++)bt=ee[W],Zt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,St,Bt,bt):e.texImage2D(i.TEXTURE_2D,W,Ht,St,Bt,bt);M.generateMipmaps=!1}else if(Zt){if(ge){let W=xt(nt);e.texStorage2D(i.TEXTURE_2D,ft,Ht,W.width,W.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Bt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Ht,St,Bt,nt);m(M)&&p(X),wt.__version=q.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function rt(E,M,O){if(M.image.length!==6)return;let X=oe(E,M),Q=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);let q=n.get(Q);if(Q.version!==q.__version||X===!0){e.activeTexture(i.TEXTURE0+O);let wt=te.getPrimaries(te.workingColorSpace),dt=M.colorSpace===Mi?null:te.getPrimaries(M.colorSpace),vt=M.colorSpace===Mi||wt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Qt=M.isCompressedTexture||M.image[0].isCompressedTexture,nt=M.image[0]&&M.image[0].isDataTexture,St=[];for(let J=0;J<6;J++)!Qt&&!nt?St[J]=_(M.image[J],!0,s.maxCubemapSize):St[J]=nt?M.image[J].image:M.image[J],St[J]=Ft(M,St[J]);let Bt=St[0],Ht=r.convert(M.format,M.colorSpace),bt=r.convert(M.type),ee=v(M.internalFormat,Ht,bt,M.colorSpace),Zt=M.isVideoTexture!==!0,ge=q.__version===void 0||X===!0,D=Q.dataReady,ft=P(M,Bt);Wt(i.TEXTURE_CUBE_MAP,M);let W;if(Qt){Zt&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,ee,Bt.width,Bt.height);for(let J=0;J<6;J++){W=St[J].mipmaps;for(let gt=0;gt<W.length;gt++){let pt=W[gt];M.format!==xn?Ht!==null?Zt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,0,0,pt.width,pt.height,Ht,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,ee,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,0,0,pt.width,pt.height,Ht,bt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,ee,pt.width,pt.height,0,Ht,bt,pt.data)}}}else{if(W=M.mipmaps,Zt&&ge){W.length>0&&ft++;let J=xt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,ee,J.width,J.height)}for(let J=0;J<6;J++)if(nt){Zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,St[J].width,St[J].height,Ht,bt,St[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ee,St[J].width,St[J].height,0,Ht,bt,St[J].data);for(let gt=0;gt<W.length;gt++){let Yt=W[gt].image[J].image;Zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,0,0,Yt.width,Yt.height,Ht,bt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,ee,Yt.width,Yt.height,0,Ht,bt,Yt.data)}}else{Zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ht,bt,St[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ee,Ht,bt,St[J]);for(let gt=0;gt<W.length;gt++){let pt=W[gt];Zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,0,0,Ht,bt,pt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,ee,Ht,bt,pt.image[J])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),q.__version=Q.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function Et(E,M,O,X,Q,q){let wt=r.convert(O.format,O.colorSpace),dt=r.convert(O.type),vt=v(O.internalFormat,wt,dt,O.colorSpace),Qt=n.get(M),nt=n.get(O);if(nt.__renderTarget=M,!Qt.__hasExternalTextures){let St=Math.max(1,M.width>>q),Bt=Math.max(1,M.height>>q);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,q,vt,St,Bt,M.depth,0,wt,dt,null):e.texImage2D(Q,q,vt,St,Bt,0,wt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),yt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Q,nt.__webglTexture,0,et(M)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Q,nt.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(E,M,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),M.depthBuffer){let X=M.depthTexture,Q=X&&X.isDepthTexture?X.type:null,q=x(M.stencilBuffer,Q),wt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=et(M);yt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,q,M.width,M.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,q,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,q,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,E)}else{let X=M.textures;for(let Q=0;Q<X.length;Q++){let q=X[Q],wt=r.convert(q.format,q.colorSpace),dt=r.convert(q.type),vt=v(q.internalFormat,wt,dt,q.colorSpace),Qt=et(M);O&&yt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,vt,M.width,M.height):yt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt,vt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,vt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=n.get(M.depthTexture);X.__renderTarget=M,(!X.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);let Q=X.__webglTexture,q=et(M);if(M.depthTexture.format===xs)yt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Es)yt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Vt(E){let M=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){let X=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),X){let Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=X}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Nt(M.__webglFramebuffer,E)}else if(O){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]===void 0)M.__webglDepthbuffer[X]=i.createRenderbuffer(),at(M.__webglDepthbuffer[X],E,!1);else{let Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),at(M.__webglDepthbuffer,E,!1);else{let X=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(E,M,O){let X=n.get(E);M!==void 0&&Et(X.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Vt(E)}function ne(E){let M=E.texture,O=n.get(E),X=n.get(M);E.addEventListener("dispose",A);let Q=E.textures,q=E.isWebGLCubeRenderTarget===!0,wt=Q.length>1;if(wt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=M.version,o.memory.textures++),q){O.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[dt]=[];for(let vt=0;vt<M.mipmaps.length;vt++)O.__webglFramebuffer[dt][vt]=i.createFramebuffer()}else O.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let dt=0;dt<M.mipmaps.length;dt++)O.__webglFramebuffer[dt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(wt)for(let dt=0,vt=Q.length;dt<vt;dt++){let Qt=n.get(Q[dt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&yt(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let dt=0;dt<Q.length;dt++){let vt=Q[dt];O.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[dt]);let Qt=r.convert(vt.format,vt.colorSpace),nt=r.convert(vt.type),St=v(vt.internalFormat,Qt,nt,vt.colorSpace,E.isXRRenderTarget===!0),Bt=et(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,St,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,O.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),at(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,M);for(let dt=0;dt<6;dt++)if(M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)Et(O.__webglFramebuffer[dt][vt],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt);else Et(O.__webglFramebuffer[dt],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let dt=0,vt=Q.length;dt<vt;dt++){let Qt=Q[dt],nt=n.get(Qt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),Wt(i.TEXTURE_2D,Qt),Et(O.__webglFramebuffer,E,Qt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),m(Qt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(dt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,X.__webglTexture),Wt(dt,M),M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)Et(O.__webglFramebuffer[vt],E,M,i.COLOR_ATTACHMENT0,dt,vt);else Et(O.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0,dt,0);m(M)&&p(dt),e.unbindTexture()}E.depthBuffer&&Vt(E)}function j(E){let M=E.textures;for(let O=0,X=M.length;O<X;O++){let Q=M[O];if(m(Q)){let q=y(E),wt=n.get(Q).__webglTexture;e.bindTexture(q,wt),p(q),e.unbindTexture()}}}let st=[],L=[];function Ct(E){if(E.samples>0){if(yt(E)===!1){let M=E.textures,O=E.width,X=E.height,Q=i.COLOR_BUFFER_BIT,q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(E),dt=M.length>1;if(dt)for(let vt=0;vt<M.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let vt=0;vt<M.length;vt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[vt]);let Qt=n.get(M[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qt,0)}i.blitFramebuffer(0,0,O,X,0,0,O,X,Q,i.NEAREST),l===!0&&(st.length=0,L.length=0,st.push(i.COLOR_ATTACHMENT0+vt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(st.push(q),L.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let vt=0;vt<M.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[vt]);let Qt=n.get(M[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let M=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function et(E){return Math.min(s.maxSamples,E.samples)}function yt(E){let M=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function lt(E){let M=o.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function Ft(E,M){let O=E.colorSpace,X=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==qe&&O!==Mi&&(te.getTransfer(O)===pe?(X!==xn||Q!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function xt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=$,this.setTexture2DArray=V,this.setTexture3D=it,this.setTextureCube=G,this.rebindTextures=kt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=yt}function k_(i,t){function e(n,s=Mi){let r,o=te.getTransfer(s);if(n===ti)return i.UNSIGNED_BYTE;if(n===Bc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===kc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===N0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===P0)return i.BYTE;if(n===D0)return i.SHORT;if(n===pr)return i.UNSIGNED_SHORT;if(n===Fc)return i.INT;if(n===Zi)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Ir)return i.HALF_FLOAT;if(n===U0)return i.ALPHA;if(n===O0)return i.RGB;if(n===xn)return i.RGBA;if(n===F0)return i.LUMINANCE;if(n===B0)return i.LUMINANCE_ALPHA;if(n===xs)return i.DEPTH_COMPONENT;if(n===Es)return i.DEPTH_STENCIL;if(n===zc)return i.RED;if(n===Hc)return i.RED_INTEGER;if(n===k0)return i.RG;if(n===Vc)return i.RG_INTEGER;if(n===Gc)return i.RGBA_INTEGER;if(n===So||n===bo||n===Ro||n===Eo)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===So)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===So)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wl||n===Tl||n===Al||n===Ll)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cl||n===Il||n===Pl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Cl||n===Il)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dl||n===Nl||n===Ul||n===Ol||n===Fl||n===Bl||n===kl||n===zl||n===Hl||n===Vl||n===Gl||n===Wl||n===Yl||n===Xl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ul)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ol)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wo||n===ql||n===Zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===wo)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===z0||n===Kl||n===$l||n===Jl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var dc=class extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},We=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},z_={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(z_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new We;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},H_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V_=`
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

}`,fc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Oe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Mn({vertexShader:H_,fragmentShader:V_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},pc=class extends wi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=new fc,m=e.getContextAttributes(),p=null,y=null,v=[],x=[],P=new tt,w=null,A=new Pe;A.viewport=new re;let C=new Pe;C.viewport=new re;let R=[A,C],S=new dc,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let rt=v[Z];return rt===void 0&&(rt=new lr,v[Z]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Z){let rt=v[Z];return rt===void 0&&(rt=new lr,v[Z]=rt),rt.getGripSpace()},this.getHand=function(Z){let rt=v[Z];return rt===void 0&&(rt=new lr,v[Z]=rt),rt.getHandSpace()};function F(Z){let rt=x.indexOf(Z.inputSource);if(rt===-1)return;let Et=v[rt];Et!==void 0&&(Et.update(Z.inputSource,Z.frame,c||o),Et.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",$);for(let Z=0;Z<v.length;Z++){let rt=x[Z];rt!==null&&(x[Z]=null,v[Z].disconnect(rt))}I=null,z=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,oe.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",H),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){let rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ei(f.framebufferWidth,f.framebufferHeight,{format:xn,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,Et=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?Es:xs,Et=m.stencil?Rs:Zi);let Nt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Nt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new ei(d.textureWidth,d.textureHeight,{format:xn,type:ti,depthTexture:new Uo(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(Z){for(let rt=0;rt<Z.removed.length;rt++){let Et=Z.removed[rt],at=x.indexOf(Et);at>=0&&(x[at]=null,v[at].disconnect(Et))}for(let rt=0;rt<Z.added.length;rt++){let Et=Z.added[rt],at=x.indexOf(Et);if(at===-1){for(let Vt=0;Vt<v.length;Vt++)if(Vt>=x.length){x.push(Et),at=Vt;break}else if(x[Vt]===null){x[Vt]=Et,at=Vt;break}if(at===-1)break}let Nt=v[at];Nt&&Nt.connect(Et)}}let V=new T,it=new T;function G(Z,rt,Et){V.setFromMatrixPosition(rt.matrixWorld),it.setFromMatrixPosition(Et.matrixWorld);let at=V.distanceTo(it),Nt=rt.projectionMatrix.elements,Vt=Et.projectionMatrix.elements,kt=Nt[14]/(Nt[10]-1),ne=Nt[14]/(Nt[10]+1),j=(Nt[9]+1)/Nt[5],st=(Nt[9]-1)/Nt[5],L=(Nt[8]-1)/Nt[0],Ct=(Vt[8]+1)/Vt[0],et=kt*L,yt=kt*Ct,lt=at/(-L+Ct),Ft=lt*-L;if(rt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ft),Z.translateZ(lt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Nt[10]===-1)Z.projectionMatrix.copy(rt.projectionMatrix),Z.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let xt=kt+lt,E=ne+lt,M=et-Ft,O=yt+(at-Ft),X=j*ne/E*xt,Q=st*ne/E*xt;Z.projectionMatrix.makePerspective(M,O,X,Q,xt,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ht(Z,rt){rt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(rt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let rt=Z.near,Et=Z.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(Et=_.depthFar)),S.near=C.near=A.near=rt,S.far=C.far=A.far=Et,(I!==S.near||z!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,z=S.far),A.layers.mask=Z.layers.mask|2,C.layers.mask=Z.layers.mask|4,S.layers.mask=A.layers.mask|C.layers.mask;let at=Z.parent,Nt=S.cameras;ht(S,at);for(let Vt=0;Vt<Nt.length;Vt++)ht(Nt[Vt],at);Nt.length===2?G(S,A,C):S.projectionMatrix.copy(A.projectionMatrix),_t(Z,S,at)};function _t(Z,rt,Et){Et===null?Z.matrix.copy(rt.matrixWorld):(Z.matrix.copy(Et.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(rt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(rt.projectionMatrix),Z.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=As*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Rt=null;function Wt(Z,rt){if(h=rt.getViewerPose(c||o),g=rt,h!==null){let Et=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let at=!1;Et.length!==S.cameras.length&&(S.cameras.length=0,at=!0);for(let Vt=0;Vt<Et.length;Vt++){let kt=Et[Vt],ne=null;if(f!==null)ne=f.getViewport(kt);else{let st=u.getViewSubImage(d,kt);ne=st.viewport,Vt===0&&(t.setRenderTargetTextures(y,st.colorTexture,d.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(y))}let j=R[Vt];j===void 0&&(j=new Pe,j.layers.enable(Vt),j.viewport=new re,R[Vt]=j),j.matrix.fromArray(kt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(kt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ne.x,ne.y,ne.width,ne.height),Vt===0&&(S.matrix.copy(j.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),at===!0&&S.cameras.push(j)}let Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){let Vt=u.getDepthInformation(Et[0]);Vt&&Vt.isValid&&Vt.texture&&_.init(t,Vt,s.renderState)}}for(let Et=0;Et<v.length;Et++){let at=x[Et],Nt=v[Et];at!==null&&Nt!==void 0&&Nt.update(at,rt,c||o)}Rt&&Rt(Z,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}let oe=new q0;oe.setAnimationLoop(Wt),this.setAnimationLoop=function(Z){Rt=Z},this.dispose=function(){}}},Gi=new Je,G_=new Ot;function W_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,X0(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),v=y.envMap,x=y.envMapRotation;v&&(m.envMap.value=v,Gi.copy(x),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),m.envMapRotation.value.setFromMatrix4(G_.makeRotationFromEuler(Gi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Y_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let x=v.program;n.uniformBlockBinding(y,x)}function c(y,v){let x=s[y.id];x===void 0&&(g(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",m));let P=v.program;n.updateUBOMapping(y,P);let w=t.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function h(y){let v=u();y.__bindingPointIndex=v;let x=i.createBuffer(),P=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=s[y.id],x=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,A=x.length;w<A;w++){let C=Array.isArray(x[w])?x[w]:[x[w]];for(let R=0,S=C.length;R<S;R++){let I=C[R];if(f(I,w,R,P)===!0){let z=I.__offset,F=Array.isArray(I.value)?I.value:[I.value],H=0;for(let $=0;$<F.length;$++){let V=F[$],it=_(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,z+H,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,H),H+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,v,x,P){let w=y.value,A=v+"_"+x;if(P[A]===void 0)return typeof w=="number"||typeof w=="boolean"?P[A]=w:P[A]=w.clone(),!0;{let C=P[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return P[A]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(y){let v=y.uniforms,x=0,P=16;for(let A=0,C=v.length;A<C;A++){let R=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,I=R.length;S<I;S++){let z=R[S],F=Array.isArray(z.value)?z.value:[z.value];for(let H=0,$=F.length;H<$;H++){let V=F[H],it=_(V),G=x%P,ht=G%it.boundary,_t=G+ht;x+=ht,_t!==0&&P-_t<it.storage&&(x+=P-_t),z.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=it.storage}}}let w=x%P;return w>0&&(x+=P-w),y.__size=x,y.__cache={},this}function _(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Oo=class{constructor(t={}){let{canvas:e=Kf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Me,this.toneMapping=Ri,this.toneMappingExposure=1;let x=this,P=!1,w=0,A=0,C=null,R=-1,S=null,I=new re,z=new re,F=null,H=new Pt(0),$=0,V=e.width,it=e.height,G=1,ht=null,_t=null,Rt=new re(0,0,V,it),Wt=new re(0,0,V,it),oe=!1,Z=new gr,rt=!1,Et=!1,at=new Ot,Nt=new Ot,Vt=new T,kt=new re,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function st(){return C===null?G:1}let L=n;function Ct(b,N){return e.getContext(b,N)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dc}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),L===null){let N="webgl2";if(L=Ct(N,b),L===null)throw Ct(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let et,yt,lt,Ft,xt,E,M,O,X,Q,q,wt,dt,vt,Qt,nt,St,Bt,Ht,bt,ee,Zt,ge,D;function ft(){et=new a1(L),et.init(),Zt=new k_(L,et),yt=new e1(L,et,t,Zt),lt=new O_(L,et),yt.reverseDepthBuffer&&d&&lt.buffers.depth.setReversed(!0),Ft=new h1(L),xt=new b_,E=new B_(L,et,lt,xt,yt,Zt,Ft),M=new i1(x),O=new o1(x),X=new _p(L),ge=new Qg(L,X),Q=new l1(L,X,Ft,ge),q=new d1(L,Q,X,Ft),Ht=new u1(L,yt,E),nt=new n1(xt),wt=new S_(x,M,O,et,yt,ge,nt),dt=new W_(x,xt),vt=new E_,Qt=new I_(et),Bt=new jg(x,M,O,lt,q,f,l),St=new N_(x,q,yt),D=new Y_(L,Ft,yt,lt),bt=new t1(L,et,Ft),ee=new c1(L,et,Ft),Ft.programs=wt.programs,x.capabilities=yt,x.extensions=et,x.properties=xt,x.renderLists=vt,x.shadowMap=St,x.state=lt,x.info=Ft}ft();let W=new pc(x,L);this.xr=W,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let b=et.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=et.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(V,it,!1))},this.getSize=function(b){return b.set(V,it)},this.setSize=function(b,N,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=b,it=N,e.width=Math.floor(b*G),e.height=Math.floor(N*G),B===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(V*G,it*G).floor()},this.setDrawingBufferSize=function(b,N,B){V=b,it=N,G=B,e.width=Math.floor(b*B),e.height=Math.floor(N*B),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(Rt)},this.setViewport=function(b,N,B,k){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,N,B,k),lt.viewport(I.copy(Rt).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(Wt)},this.setScissor=function(b,N,B,k){b.isVector4?Wt.set(b.x,b.y,b.z,b.w):Wt.set(b,N,B,k),lt.scissor(z.copy(Wt).multiplyScalar(G).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(b){lt.setScissorTest(oe=b)},this.setOpaqueSort=function(b){ht=b},this.setTransparentSort=function(b){_t=b},this.getClearColor=function(b){return b.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(b=!0,N=!0,B=!0){let k=0;if(b){let U=!1;if(C!==null){let ot=C.texture.format;U=ot===Gc||ot===Vc||ot===Hc}if(U){let ot=C.texture.type,mt=ot===ti||ot===Zi||ot===pr||ot===Rs||ot===Bc||ot===kc,Tt=Bt.getClearColor(),At=Bt.getClearAlpha(),Gt=Tt.r,Xt=Tt.g,Lt=Tt.b;mt?(g[0]=Gt,g[1]=Xt,g[2]=Lt,g[3]=At,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Gt,_[1]=Xt,_[2]=Lt,_[3]=At,L.clearBufferiv(L.COLOR,0,_))}else k|=L.COLOR_BUFFER_BIT}N&&(k|=L.DEPTH_BUFFER_BIT),B&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),vt.dispose(),Qt.dispose(),xt.dispose(),M.dispose(),O.dispose(),q.dispose(),ge.dispose(),D.dispose(),wt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Qh),W.removeEventListener("sessionend",tu),Fi.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let b=Ft.autoReset,N=St.enabled,B=St.autoUpdate,k=St.needsUpdate,U=St.type;ft(),Ft.autoReset=b,St.enabled=N,St.autoUpdate=B,St.needsUpdate=k,St.type=U}function pt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Yt(b){let N=b.target;N.removeEventListener("dispose",Yt),we(N)}function we(b){He(b),xt.remove(b)}function He(b){let N=xt.get(b).programs;N!==void 0&&(N.forEach(function(B){wt.releaseProgram(B)}),b.isShaderMaterial&&wt.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,B,k,U,ot){N===null&&(N=ne);let mt=U.isMesh&&U.matrixWorld.determinant()<0,Tt=Gd(b,N,B,k,U);lt.setMaterial(k,mt);let At=B.index,Gt=1;if(k.wireframe===!0){if(At=Q.getWireframeAttribute(B),At===void 0)return;Gt=2}let Xt=B.drawRange,Lt=B.attributes.position,ie=Xt.start*Gt,_e=(Xt.start+Xt.count)*Gt;ot!==null&&(ie=Math.max(ie,ot.start*Gt),_e=Math.min(_e,(ot.start+ot.count)*Gt)),At!==null?(ie=Math.max(ie,0),_e=Math.min(_e,At.count)):Lt!=null&&(ie=Math.max(ie,0),_e=Math.min(_e,Lt.count));let ve=_e-ie;if(ve<0||ve===1/0)return;ge.setup(U,k,Tt,B,At);let Qe,ae=bt;if(At!==null&&(Qe=X.get(At),ae=ee,ae.setIndex(Qe)),U.isMesh)k.wireframe===!0?(lt.setLineWidth(k.wireframeLinewidth*st()),ae.setMode(L.LINES)):ae.setMode(L.TRIANGLES);else if(U.isLine){let It=k.linewidth;It===void 0&&(It=1),lt.setLineWidth(It*st()),U.isLineSegments?ae.setMode(L.LINES):U.isLineLoop?ae.setMode(L.LINE_LOOP):ae.setMode(L.LINE_STRIP)}else U.isPoints?ae.setMode(L.POINTS):U.isSprite&&ae.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ae.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ae.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let It=U._multiDrawStarts,Hn=U._multiDrawCounts,le=U._multiDrawCount,Tn=At?X.get(At).bytesPerElement:1,ji=xt.get(k).currentProgram.getUniforms();for(let rn=0;rn<le;rn++)ji.setValue(L,"_gl_DrawID",rn),ae.render(It[rn]/Tn,Hn[rn])}else if(U.isInstancedMesh)ae.renderInstances(ie,ve,U.count);else if(B.isInstancedBufferGeometry){let It=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Hn=Math.min(B.instanceCount,It);ae.renderInstances(ie,ve,Hn)}else ae.render(ie,ve)};function he(b,N,B){b.transparent===!0&&b.side===ln&&b.forceSinglePass===!1?(b.side=en,b.needsUpdate=!0,Wr(b,N,B),b.side=Fn,b.needsUpdate=!0,Wr(b,N,B),b.side=ln):Wr(b,N,B)}this.compile=function(b,N,B=null){B===null&&(B=b),p=Qt.get(B),p.init(N),v.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),b!==B&&b.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let k=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ot=U.material;if(ot)if(Array.isArray(ot))for(let mt=0;mt<ot.length;mt++){let Tt=ot[mt];he(Tt,B,U),k.add(Tt)}else he(ot,B,U),k.add(ot)}),v.pop(),p=null,k},this.compileAsync=function(b,N,B=null){let k=this.compile(b,N,B);return new Promise(U=>{function ot(){if(k.forEach(function(mt){xt.get(mt).currentProgram.isReady()&&k.delete(mt)}),k.size===0){U(b);return}setTimeout(ot,10)}et.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let wn=null;function zn(b){wn&&wn(b)}function Qh(){Fi.stop()}function tu(){Fi.start()}let Fi=new q0;Fi.setAnimationLoop(zn),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(b){wn=b,W.setAnimationLoop(b),b===null?Fi.stop():Fi.start()},W.addEventListener("sessionstart",Qh),W.addEventListener("sessionend",tu),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(N),N=W.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,N,C),p=Qt.get(b,v.length),p.init(N),v.push(p),Nt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(Nt),Et=this.localClippingEnabled,rt=nt.init(this.clippingPlanes,Et),m=vt.get(b,y.length),m.init(),y.push(m),W.enabled===!0&&W.isPresenting===!0){let ot=x.xr.getDepthSensingMesh();ot!==null&&Na(ot,N,-1/0,x.sortObjects)}Na(b,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ht,_t),j=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,j&&Bt.addToRenderList(m,b),this.info.render.frame++,rt===!0&&nt.beginShadows();let B=p.state.shadowsArray;St.render(B,b,N),rt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=m.opaque,U=m.transmissive;if(p.setupLights(),N.isArrayCamera){let ot=N.cameras;if(U.length>0)for(let mt=0,Tt=ot.length;mt<Tt;mt++){let At=ot[mt];nu(k,U,b,At)}j&&Bt.render(b);for(let mt=0,Tt=ot.length;mt<Tt;mt++){let At=ot[mt];eu(m,b,At,At.viewport)}}else U.length>0&&nu(k,U,b,N),j&&Bt.render(b),eu(m,b,N);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(x,b,N),ge.resetDefaultState(),R=-1,S=null,v.pop(),v.length>0?(p=v[v.length-1],rt===!0&&nt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Na(b,N,B,k){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){k&&kt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Nt);let mt=q.update(b),Tt=b.material;Tt.visible&&m.push(b,mt,Tt,B,kt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){let mt=q.update(b),Tt=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),kt.copy(b.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),kt.copy(mt.boundingSphere.center)),kt.applyMatrix4(b.matrixWorld).applyMatrix4(Nt)),Array.isArray(Tt)){let At=mt.groups;for(let Gt=0,Xt=At.length;Gt<Xt;Gt++){let Lt=At[Gt],ie=Tt[Lt.materialIndex];ie&&ie.visible&&m.push(b,mt,ie,B,kt.z,Lt)}}else Tt.visible&&m.push(b,mt,Tt,B,kt.z,null)}}let ot=b.children;for(let mt=0,Tt=ot.length;mt<Tt;mt++)Na(ot[mt],N,B,k)}function eu(b,N,B,k){let U=b.opaque,ot=b.transmissive,mt=b.transparent;p.setupLightsView(B),rt===!0&&nt.setGlobalState(x.clippingPlanes,B),k&&lt.viewport(I.copy(k)),U.length>0&&Gr(U,N,B),ot.length>0&&Gr(ot,N,B),mt.length>0&&Gr(mt,N,B),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function nu(b,N,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new ei(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Ir:ti,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let ot=p.state.transmissionRenderTarget[k.id],mt=k.viewport||I;ot.setSize(mt.z,mt.w);let Tt=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(H),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),j&&Bt.render(B);let At=x.toneMapping;x.toneMapping=Ri;let Gt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),rt===!0&&nt.setGlobalState(x.clippingPlanes,k),Gr(b,B,k),E.updateMultisampleRenderTarget(ot),E.updateRenderTargetMipmap(ot),et.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Lt=0,ie=N.length;Lt<ie;Lt++){let _e=N[Lt],ve=_e.object,Qe=_e.geometry,ae=_e.material,It=_e.group;if(ae.side===ln&&ve.layers.test(k.layers)){let Hn=ae.side;ae.side=en,ae.needsUpdate=!0,iu(ve,B,k,Qe,ae,It),ae.side=Hn,ae.needsUpdate=!0,Xt=!0}}Xt===!0&&(E.updateMultisampleRenderTarget(ot),E.updateRenderTargetMipmap(ot))}x.setRenderTarget(Tt),x.setClearColor(H,$),Gt!==void 0&&(k.viewport=Gt),x.toneMapping=At}function Gr(b,N,B){let k=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ot=b.length;U<ot;U++){let mt=b[U],Tt=mt.object,At=mt.geometry,Gt=k===null?mt.material:k,Xt=mt.group;Tt.layers.test(B.layers)&&iu(Tt,N,B,At,Gt,Xt)}}function iu(b,N,B,k,U,ot){b.onBeforeRender(x,N,B,k,U,ot),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(x,N,B,k,b,ot),U.transparent===!0&&U.side===ln&&U.forceSinglePass===!1?(U.side=en,U.needsUpdate=!0,x.renderBufferDirect(B,N,k,U,b,ot),U.side=Fn,U.needsUpdate=!0,x.renderBufferDirect(B,N,k,U,b,ot),U.side=ln):x.renderBufferDirect(B,N,k,U,b,ot),b.onAfterRender(x,N,B,k,U,ot)}function Wr(b,N,B){N.isScene!==!0&&(N=ne);let k=xt.get(b),U=p.state.lights,ot=p.state.shadowsArray,mt=U.state.version,Tt=wt.getParameters(b,U.state,ot,N,B),At=wt.getProgramCacheKey(Tt),Gt=k.programs;k.environment=b.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(b.isMeshStandardMaterial?O:M).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Gt===void 0&&(b.addEventListener("dispose",Yt),Gt=new Map,k.programs=Gt);let Xt=Gt.get(At);if(Xt!==void 0){if(k.currentProgram===Xt&&k.lightsStateVersion===mt)return ru(b,Tt),Xt}else Tt.uniforms=wt.getUniforms(b),b.onBeforeCompile(Tt,x),Xt=wt.acquireProgram(Tt,At),Gt.set(At,Xt),k.uniforms=Tt.uniforms;let Lt=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Lt.clippingPlanes=nt.uniform),ru(b,Tt),k.needsLights=Yd(b),k.lightsStateVersion=mt,k.needsLights&&(Lt.ambientLightColor.value=U.state.ambient,Lt.lightProbe.value=U.state.probe,Lt.directionalLights.value=U.state.directional,Lt.directionalLightShadows.value=U.state.directionalShadow,Lt.spotLights.value=U.state.spot,Lt.spotLightShadows.value=U.state.spotShadow,Lt.rectAreaLights.value=U.state.rectArea,Lt.ltc_1.value=U.state.rectAreaLTC1,Lt.ltc_2.value=U.state.rectAreaLTC2,Lt.pointLights.value=U.state.point,Lt.pointLightShadows.value=U.state.pointShadow,Lt.hemisphereLights.value=U.state.hemi,Lt.directionalShadowMap.value=U.state.directionalShadowMap,Lt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Lt.spotShadowMap.value=U.state.spotShadowMap,Lt.spotLightMatrix.value=U.state.spotLightMatrix,Lt.spotLightMap.value=U.state.spotLightMap,Lt.pointShadowMap.value=U.state.pointShadowMap,Lt.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Xt,k.uniformsList=null,Xt}function su(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=ys.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function ru(b,N){let B=xt.get(b);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Gd(b,N,B,k,U){N.isScene!==!0&&(N=ne),E.resetTextureUnits();let ot=N.fog,mt=k.isMeshStandardMaterial?N.environment:null,Tt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:qe,At=(k.isMeshStandardMaterial?O:M).get(k.envMap||mt),Gt=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Xt=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Lt=!!B.morphAttributes.position,ie=!!B.morphAttributes.normal,_e=!!B.morphAttributes.color,ve=Ri;k.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ve=x.toneMapping);let Qe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ae=Qe!==void 0?Qe.length:0,It=xt.get(k),Hn=p.state.lights;if(rt===!0&&(Et===!0||b!==S)){let gn=b===S&&k.id===R;nt.setState(k,b,gn)}let le=!1;k.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Hn.state.version||It.outputColorSpace!==Tt||U.isBatchedMesh&&It.batching===!1||!U.isBatchedMesh&&It.batching===!0||U.isBatchedMesh&&It.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&It.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&It.instancing===!1||!U.isInstancedMesh&&It.instancing===!0||U.isSkinnedMesh&&It.skinning===!1||!U.isSkinnedMesh&&It.skinning===!0||U.isInstancedMesh&&It.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&It.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&It.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&It.instancingMorph===!1&&U.morphTexture!==null||It.envMap!==At||k.fog===!0&&It.fog!==ot||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==nt.numPlanes||It.numIntersection!==nt.numIntersection)||It.vertexAlphas!==Gt||It.vertexTangents!==Xt||It.morphTargets!==Lt||It.morphNormals!==ie||It.morphColors!==_e||It.toneMapping!==ve||It.morphTargetsCount!==ae)&&(le=!0):(le=!0,It.__version=k.version);let Tn=It.currentProgram;le===!0&&(Tn=Wr(k,N,U));let ji=!1,rn=!1,qs=!1,ye=Tn.getUniforms(),Nn=It.uniforms;if(lt.useProgram(Tn.program)&&(ji=!0,rn=!0,qs=!0),k.id!==R&&(R=k.id,rn=!0),ji||S!==b){lt.buffers.depth.getReversed()?(at.copy(b.projectionMatrix),Jf(at),jf(at),ye.setValue(L,"projectionMatrix",at)):ye.setValue(L,"projectionMatrix",b.projectionMatrix),ye.setValue(L,"viewMatrix",b.matrixWorldInverse);let fi=ye.map.cameraPosition;fi!==void 0&&fi.setValue(L,Vt.setFromMatrixPosition(b.matrixWorld)),yt.logarithmicDepthBuffer&&ye.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ye.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,rn=!0,qs=!0)}if(U.isSkinnedMesh){ye.setOptional(L,U,"bindMatrix"),ye.setOptional(L,U,"bindMatrixInverse");let gn=U.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),ye.setValue(L,"boneTexture",gn.boneTexture,E))}U.isBatchedMesh&&(ye.setOptional(L,U,"batchingTexture"),ye.setValue(L,"batchingTexture",U._matricesTexture,E),ye.setOptional(L,U,"batchingIdTexture"),ye.setValue(L,"batchingIdTexture",U._indirectTexture,E),ye.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&ye.setValue(L,"batchingColorTexture",U._colorsTexture,E));let Zs=B.morphAttributes;if((Zs.position!==void 0||Zs.normal!==void 0||Zs.color!==void 0)&&Ht.update(U,B,Tn),(rn||It.receiveShadow!==U.receiveShadow)&&(It.receiveShadow=U.receiveShadow,ye.setValue(L,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Nn.envMap.value=At,Nn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(Nn.envMapIntensity.value=N.environmentIntensity),rn&&(ye.setValue(L,"toneMappingExposure",x.toneMappingExposure),It.needsLights&&Wd(Nn,qs),ot&&k.fog===!0&&dt.refreshFogUniforms(Nn,ot),dt.refreshMaterialUniforms(Nn,k,G,it,p.state.transmissionRenderTarget[b.id]),ys.upload(L,su(It),Nn,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ys.upload(L,su(It),Nn,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ye.setValue(L,"center",U.center),ye.setValue(L,"modelViewMatrix",U.modelViewMatrix),ye.setValue(L,"normalMatrix",U.normalMatrix),ye.setValue(L,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let gn=k.uniformsGroups;for(let fi=0,pi=gn.length;fi<pi;fi++){let ou=gn[fi];D.update(ou,Tn),D.bind(ou,Tn)}}return Tn}function Wd(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Yd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,N,B){xt.get(b.texture).__webglTexture=N,xt.get(b.depthTexture).__webglTexture=B;let k=xt.get(b);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){let B=xt.get(b);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,B=0){C=b,w=N,A=B;let k=!0,U=null,ot=!1,mt=!1;if(b){let At=xt.get(b);if(At.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(L.FRAMEBUFFER,null),k=!1;else if(At.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(At.__hasExternalTextures)E.rebindTextures(b,xt.get(b.texture).__webglTexture,xt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Lt=b.depthTexture;if(At.__boundDepthTexture!==Lt){if(Lt!==null&&xt.has(Lt)&&(b.width!==Lt.image.width||b.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}let Gt=b.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(mt=!0);let Xt=xt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Xt[N])?U=Xt[N][B]:U=Xt[N],ot=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?U=xt.get(b).__webglMultisampledFramebuffer:Array.isArray(Xt)?U=Xt[B]:U=Xt,I.copy(b.viewport),z.copy(b.scissor),F=b.scissorTest}else I.copy(Rt).multiplyScalar(G).floor(),z.copy(Wt).multiplyScalar(G).floor(),F=oe;if(lt.bindFramebuffer(L.FRAMEBUFFER,U)&&k&&lt.drawBuffers(b,U),lt.viewport(I),lt.scissor(z),lt.setScissorTest(F),ot){let At=xt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,At.__webglTexture,B)}else if(mt){let At=xt.get(b.texture),Gt=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,At.__webglTexture,B||0,Gt)}R=-1},this.readRenderTargetPixels=function(b,N,B,k,U,ot,mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=xt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(Tt=Tt[mt]),Tt){lt.bindFramebuffer(L.FRAMEBUFFER,Tt);try{let At=b.texture,Gt=At.format,Xt=At.type;if(!yt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-k&&B>=0&&B<=b.height-U&&L.readPixels(N,B,k,U,Zt.convert(Gt),Zt.convert(Xt),ot)}finally{let At=C!==null?xt.get(C).__webglFramebuffer:null;lt.bindFramebuffer(L.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(b,N,B,k,U,ot,mt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=xt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(Tt=Tt[mt]),Tt){let At=b.texture,Gt=At.format,Xt=At.type;if(!yt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-k&&B>=0&&B<=b.height-U){lt.bindFramebuffer(L.FRAMEBUFFER,Tt);let Lt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Lt),L.bufferData(L.PIXEL_PACK_BUFFER,ot.byteLength,L.STREAM_READ),L.readPixels(N,B,k,U,Zt.convert(Gt),Zt.convert(Xt),0);let ie=C!==null?xt.get(C).__webglFramebuffer:null;lt.bindFramebuffer(L.FRAMEBUFFER,ie);let _e=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await $f(L,_e,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Lt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ot),L.deleteBuffer(Lt),L.deleteSync(_e),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,B=0){b.isTexture!==!0&&(ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);let k=Math.pow(2,-B),U=Math.floor(b.image.width*k),ot=Math.floor(b.image.height*k),mt=N!==null?N.x:0,Tt=N!==null?N.y:0;E.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,mt,Tt,U,ot),lt.unbindTexture()},this.copyTextureToTexture=function(b,N,B=null,k=null,U=0){b.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1],N=arguments[2],U=arguments[3]||0,B=null);let ot,mt,Tt,At,Gt,Xt,Lt,ie,_e,ve=b.isCompressedTexture?b.mipmaps[U]:b.image;B!==null?(ot=B.max.x-B.min.x,mt=B.max.y-B.min.y,Tt=B.isBox3?B.max.z-B.min.z:1,At=B.min.x,Gt=B.min.y,Xt=B.isBox3?B.min.z:0):(ot=ve.width,mt=ve.height,Tt=ve.depth||1,At=0,Gt=0,Xt=0),k!==null?(Lt=k.x,ie=k.y,_e=k.z):(Lt=0,ie=0,_e=0);let Qe=Zt.convert(N.format),ae=Zt.convert(N.type),It;N.isData3DTexture?(E.setTexture3D(N,0),It=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(E.setTexture2DArray(N,0),It=L.TEXTURE_2D_ARRAY):(E.setTexture2D(N,0),It=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let Hn=L.getParameter(L.UNPACK_ROW_LENGTH),le=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Tn=L.getParameter(L.UNPACK_SKIP_PIXELS),ji=L.getParameter(L.UNPACK_SKIP_ROWS),rn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ve.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ve.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,At),L.pixelStorei(L.UNPACK_SKIP_ROWS,Gt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Xt);let qs=b.isDataArrayTexture||b.isData3DTexture,ye=N.isDataArrayTexture||N.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let Nn=xt.get(b),Zs=xt.get(N),gn=xt.get(Nn.__renderTarget),fi=xt.get(Zs.__renderTarget);lt.bindFramebuffer(L.READ_FRAMEBUFFER,gn.__webglFramebuffer),lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let pi=0;pi<Tt;pi++)qs&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xt.get(b).__webglTexture,U,Xt+pi),b.isDepthTexture?(ye&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xt.get(N).__webglTexture,U,_e+pi),L.blitFramebuffer(At,Gt,ot,mt,Lt,ie,ot,mt,L.DEPTH_BUFFER_BIT,L.NEAREST)):ye?L.copyTexSubImage3D(It,U,Lt,ie,_e+pi,At,Gt,ot,mt):L.copyTexSubImage2D(It,U,Lt,ie,_e+pi,At,Gt,ot,mt);lt.bindFramebuffer(L.READ_FRAMEBUFFER,null),lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ye?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(It,U,Lt,ie,_e,ot,mt,Tt,Qe,ae,ve.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(It,U,Lt,ie,_e,ot,mt,Tt,Qe,ve.data):L.texSubImage3D(It,U,Lt,ie,_e,ot,mt,Tt,Qe,ae,ve):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,Lt,ie,ot,mt,Qe,ae,ve.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,Lt,ie,ve.width,ve.height,Qe,ve.data):L.texSubImage2D(L.TEXTURE_2D,U,Lt,ie,ot,mt,Qe,ae,ve);L.pixelStorei(L.UNPACK_ROW_LENGTH,Hn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,le),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Tn),L.pixelStorei(L.UNPACK_SKIP_ROWS,ji),L.pixelStorei(L.UNPACK_SKIP_IMAGES,rn),U===0&&N.generateMipmaps&&L.generateMipmap(It),lt.unbindTexture()},this.copyTextureToTexture3D=function(b,N,B=null,k=null,U=0){return b.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,b=arguments[2],N=arguments[3],U=arguments[4]||0),ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,N,B,k,U)},this.initRenderTarget=function(b){xt.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),lt.unbindTexture()},this.resetState=function(){w=0,A=0,C=null,lt.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}},Fo=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Bo=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Je,this.environmentIntensity=1,this.environmentRotation=new Je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},_r=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=jl,this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ke=new T,xr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var a0=new T,l0=new re,c0=new re,X_=new T,h0=new Ot,uo=new T,ll=new cn,u0=new Ot,cl=new Ls,ko=class extends de{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hu,this.bindMatrix=new Ot,this.bindMatrixInverse=new Ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new yn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,uo),this.boundingBox.expandByPoint(uo)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new cn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,uo),this.boundingSphere.expandByPoint(uo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ll.copy(this.boundingSphere),ll.applyMatrix4(s),t.ray.intersectsSphere(ll)!==!1&&(u0.copy(s).invert(),cl.copy(t.ray).applyMatrix4(u0),!(this.boundingBox!==null&&cl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,cl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new re,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===hu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Mf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;l0.fromBufferAttribute(s.attributes.skinIndex,t),c0.fromBufferAttribute(s.attributes.skinWeight,t),a0.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=c0.getComponent(r);if(o!==0){let a=l0.getComponent(r);h0.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(X_.copy(a0).applyMatrix4(h0),o)}}return e.applyMatrix4(this.bindMatrixInverse)}},vr=class extends Re{constructor(){super(),this.isBone=!0,this.type="Bone"}},zo=class extends Oe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ye,h=Ye,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},d0=new Ot,q_=new Ot,Ho=class i{constructor(t=[],e=[]){this.uuid=vn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ot)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Ot;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:q_;d0.multiplyMatrices(a,e[r]),d0.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new zo(e,t,t,xn,Pn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new vr),this.bones.push(o),this.boneInverses.push(new Ot().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let o=e[s];t.bones.push(o.uuid);let a=n[s];t.boneInverses.push(a.toArray())}return t}},ni=class extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},fs=new Ot,f0=new Ot,fo=[],p0=new yn,Z_=new Ot,Qs=new de,tr=new cn,un=class extends de{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ni(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Z_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fs),p0.copy(t.boundingBox).applyMatrix4(fs),this.boundingBox.union(p0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new cn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fs),tr.copy(t.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),t.ray.intersectsSphere(tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fs),f0.multiplyMatrices(n,fs),Qs.matrixWorld=f0,Qs.raycast(t,fo);for(let o=0,a=fo.length;o<a;o++){let l=fo[o];l.instanceId=r,l.object=this,e.push(l)}fo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ni(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zo(new Float32Array(s*this.count),s,this.count,zc,Pn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var yr=class extends hn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Vo=new T,Go=new T,m0=new Ot,er=new Ls,po=new cn,hl=new T,g0=new T,Ds=class extends Re{constructor(t=new Se,e=new yr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Vo.fromBufferAttribute(e,s-1),Go.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Vo.distanceTo(Go);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(s),po.radius+=r,t.ray.intersectsSphere(po)===!1)return;m0.copy(s).invert(),er.copy(t.ray).applyMatrix4(m0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){let p=h.getX(_),y=h.getX(_+1),v=mo(this,t,er,l,p,y);v&&e.push(v)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(f),p=mo(this,t,er,l,_,m);p&&e.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){let p=mo(this,t,er,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){let _=mo(this,t,er,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function mo(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Vo.fromBufferAttribute(o,s),Go.fromBufferAttribute(o,r),e.distanceSqToSegment(Vo,Go,hl,g0)>n)return;hl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(hl);if(!(l<t.near||l>t.far))return{distance:l,point:g0.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var _0=new T,x0=new T,Wo=class extends Ds{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)_0.fromBufferAttribute(e,s),x0.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_0.distanceTo(x0);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Yo=class extends Ds{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Mr=class extends hn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},v0=new Ot,mc=new Ls,go=new cn,_o=new T,Xo=class extends Re{constructor(t=new Se,e=new Mr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(s),go.radius+=r,t.ray.intersectsSphere(go)===!1)return;v0.copy(s).invert(),mc.copy(t.ray).applyMatrix4(v0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){let m=c.getX(g);_o.fromBufferAttribute(u,m),y0(_o,m,l,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)_o.fromBufferAttribute(u,g),y0(_o,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function y0(i,t,e,n,s,r,o){let a=mc.distanceSqToPoint(i);if(a<e){let l=new T;mc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ii=class extends Oe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new tt:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new T,s=[],r=[],o=[],a=new T,l=new Ot;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ie(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ie(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Sr=class extends Sn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new tt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},gc=class extends Sr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function qc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var xo=new T,ul=new qc,dl=new qc,fl=new qc,br=class extends Sn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(xo.subVectors(s[0],s[1]).add(s[0]),c=xo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(xo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=xo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ul.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),dl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),fl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ul.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),dl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),fl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ul.calc(l),dl.calc(l),fl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function M0(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function K_(i,t){let e=1-i;return e*e*t}function $_(i,t){return 2*(1-i)*i*t}function J_(i,t){return i*i*t}function cr(i,t,e,n){return K_(i,t)+$_(i,e)+J_(i,n)}function j_(i,t){let e=1-i;return e*e*e*t}function Q_(i,t){let e=1-i;return 3*e*e*i*t}function tx(i,t){return 3*(1-i)*i*i*t}function ex(i,t){return i*i*i*t}function hr(i,t,e,n,s){return j_(i,t)+Q_(i,e)+tx(i,n)+ex(i,s)}var qo=class extends Sn{constructor(t=new tt,e=new tt,n=new tt,s=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new tt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hr(t,s.x,r.x,o.x,a.x),hr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},_c=class extends Sn{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hr(t,s.x,r.x,o.x,a.x),hr(t,s.y,r.y,o.y,a.y),hr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zo=class extends Sn{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xc=class extends Sn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ko=class extends Sn{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(cr(t,s.x,r.x,o.x),cr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$o=class extends Sn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(cr(t,s.x,r.x,o.x),cr(t,s.y,r.y,o.y),cr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jo=class extends Sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(M0(a,l.x,c.x,h.x,u.x),M0(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new tt().fromArray(s))}return this}},jo=Object.freeze({__proto__:null,ArcCurve:gc,CatmullRomCurve3:br,CubicBezierCurve:qo,CubicBezierCurve3:_c,EllipseCurve:Sr,LineCurve:Zo,LineCurve3:xc,QuadraticBezierCurve:Ko,QuadraticBezierCurve3:$o,SplineCurve:Jo}),vc=class extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new jo[s.type]().fromJSON(s))}return this}},Qo=class extends vc{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Zo(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ko(this.currentPoint.clone(),new tt(t,e),new tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new qo(this.currentPoint.clone(),new tt(t,e),new tt(n,s),new tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Jo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Sr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ta=class i extends Se{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ie(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new T,d=new tt,f=new T,g=new T,_=new T,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let y=0;y<=e;y++){let v=n+y*h*s,x=Math.sin(v),P=Math.cos(v);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*x,u.y=t[w].y,u.z=t[w].x*P,o.push(u.x,u.y,u.z),d.x=y/e,d.y=w/(t.length-1),a.push(d.x,d.y);let A=l[3*w+0]*x,C=l[3*w+1],R=l[3*w+0]*P;c.push(A,C,R)}}for(let y=0;y<e;y++)for(let v=0;v<t.length-1;v++){let x=v+y*t.length,P=x,w=x+t.length,A=x+t.length+1,C=x+1;r.push(P,w,C),r.push(A,C,w)}this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("uv",new Jt(a,2)),this.setAttribute("normal",new Jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ea=class i extends Se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new T,h=new tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ns=class i extends Se{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2));function y(){let x=new T,P=new T,w=0,A=(e-t)/n;for(let C=0;C<=r;C++){let R=[],S=C/r,I=S*(e-t)+t;for(let z=0;z<=s;z++){let F=z/s,H=F*l+a,$=Math.sin(H),V=Math.cos(H);P.x=I*$,P.y=-S*n+m,P.z=I*V,u.push(P.x,P.y,P.z),x.set($,A,V).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-S),R.push(g++)}_.push(R)}for(let C=0;C<s;C++)for(let R=0;R<r;R++){let S=_[R][C],I=_[R+1][C],z=_[R+1][C+1],F=_[R][C+1];(t>0||R!==0)&&(h.push(S,I,F),w+=3),(e>0||R!==r-1)&&(h.push(I,z,F),w+=3)}c.addGroup(p,w,0),p+=w}function v(x){let P=g,w=new tt,A=new T,C=0,R=x===!0?t:e,S=x===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let I=g;for(let z=0;z<=s;z++){let H=z/s*l+a,$=Math.cos(H),V=Math.sin(H);A.x=R*V,A.y=m*S,A.z=R*$,u.push(A.x,A.y,A.z),d.push(0,S,0),w.x=$*.5+.5,w.y=V*.5*S+.5,f.push(w.x,w.y),g++}for(let z=0;z<s;z++){let F=P+z,H=I+z;x===!0?h.push(H,H+1,F):h.push(H+1,H,F),C+=3}c.addGroup(p,C,x===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},na=class i extends Ns{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},yc=class i extends Se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new T,x=new T,P=new T;for(let w=0;w<e.length;w+=3)f(e[w+0],v),f(e[w+1],x),f(e[w+2],P),l(v,x,P,y)}function l(y,v,x,P){let w=P+1,A=[];for(let C=0;C<=w;C++){A[C]=[];let R=y.clone().lerp(x,C/w),S=v.clone().lerp(x,C/w),I=w-C;for(let z=0;z<=I;z++)z===0&&C===w?A[C][z]=R:A[C][z]=R.clone().lerp(S,z/I)}for(let C=0;C<w;C++)for(let R=0;R<2*(w-C)-1;R++){let S=Math.floor(R/2);R%2===0?(d(A[C][S+1]),d(A[C+1][S]),d(A[C][S])):(d(A[C][S+1]),d(A[C+1][S+1]),d(A[C+1][S]))}}function c(y){let v=new T;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(y),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){let y=new T;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let x=m(y)/2/Math.PI+.5,P=p(y)/Math.PI+.5;o.push(x,1-P)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let v=o[y+0],x=o[y+2],P=o[y+4],w=Math.max(v,x,P),A=Math.min(v,x,P);w>.9&&A<.1&&(v<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),P<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,v){let x=y*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function g(){let y=new T,v=new T,x=new T,P=new T,w=new tt,A=new tt,C=new tt;for(let R=0,S=0;R<r.length;R+=9,S+=6){y.set(r[R+0],r[R+1],r[R+2]),v.set(r[R+3],r[R+4],r[R+5]),x.set(r[R+6],r[R+7],r[R+8]),w.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),C.set(o[S+4],o[S+5]),P.copy(y).add(v).add(x).divideScalar(3);let I=m(P);_(w,S+0,y,I),_(A,S+2,v,I),_(C,S+4,x,I)}}function _(y,v,x,P){P<0&&y.x===1&&(o[v]=y.x-1),x.x===0&&x.z===0&&(o[v]=P/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Rr=class extends Qo{constructor(t){super(t),this.uuid=vn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Qo().fromJSON(s))}return this}},nx={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=j0(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=ax(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Er(r,o,e,a,l,f,0),o}};function j0(i,t,e,n,s){let r,o;if(s===xx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=S0(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=S0(r,i[r],i[r+1],o);return o&&_a(o,o.next)&&(Tr(o),o=o.next),o}function Ki(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(_a(e,e.next)||be(e.prev,e,e.next)===0)){if(Tr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Er(i,t,e,n,s,r,o){if(!i)return;!o&&r&&dx(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?sx(i,n,s,r):ix(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Tr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=rx(Ki(i),t,e),Er(i,t,e,n,s,r,2)):o===2&&ox(i,t,e,n,s,r):Er(Ki(i),t,e,n,s,r,1);break}}}function ix(i){let t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&gs(s,a,r,l,o,c,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function sx(i,t,e,n){let s=i.prev,r=i,o=i.next;if(be(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Mc(f,g,t,e,n),y=Mc(_,m,t,e,n),v=i.prevZ,x=i.nextZ;for(;v&&v.z>=p&&x&&x.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&gs(a,h,l,u,c,d,v.x,v.y)&&be(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&gs(a,h,l,u,c,d,x.x,x.y)&&be(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&gs(a,h,l,u,c,d,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&gs(a,h,l,u,c,d,x.x,x.y)&&be(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function rx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!_a(s,r)&&Q0(s,n,n.next,r)&&wr(s,r)&&wr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Tr(n),Tr(n.next),n=i=r),n=n.next}while(n!==i);return Ki(n)}function ox(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&mx(o,a)){let l=td(o,a);o=Ki(o,o.next),l=Ki(l,l.next),Er(o,t,e,n,s,r,0),Er(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ax(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=j0(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(px(c));for(s.sort(lx),r=0;r<s.length;r++)e=cx(s[r],e);return e}function lx(i,t){return i.x-t.x}function cx(i,t){let e=hx(i,t);if(!e)return t;let n=td(e,i);return Ki(n,n.next),Ki(e,e.next)}function hx(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&gs(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),wr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&ux(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function ux(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function dx(i,t,e,n){let s=i;do s.z===0&&(s.z=Mc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fx(s)}function fx(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Mc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function px(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function gs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function mx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!gx(i,t)&&(wr(i,t)&&wr(t,i)&&_x(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||_a(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function _a(i,t){return i.x===t.x&&i.y===t.y}function Q0(i,t,e,n){let s=yo(be(i,t,e)),r=yo(be(i,t,n)),o=yo(be(e,n,i)),a=yo(be(e,n,t));return!!(s!==r&&o!==a||s===0&&vo(i,e,t)||r===0&&vo(i,n,t)||o===0&&vo(e,i,n)||a===0&&vo(e,t,n))}function vo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function yo(i){return i>0?1:i<0?-1:0}function gx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Q0(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function wr(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function _x(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function td(i,t){let e=new Sc(i.i,i.x,i.y),n=new Sc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function S0(i,t,e,n){let s=new Sc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Tr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Sc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ur=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];b0(t),R0(n,t);let o=t.length;e.forEach(b0);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,R0(n,e[l]);let a=nx.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function b0(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function R0(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ia=class i extends Se{constructor(t=new Rr([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:vx,v,x=!1,P,w,A,C;p&&(v=p.getSpacedPoints(h),x=!0,d=!1,P=p.computeFrenetFrames(h,!1),w=new T,A=new T,C=new T),d||(m=0,f=0,g=0,_=0);let R=a.extractPoints(c),S=R.shape,I=R.holes;if(!ur.isClockWise(S)){S=S.reverse();for(let j=0,st=I.length;j<st;j++){let L=I[j];ur.isClockWise(L)&&(I[j]=L.reverse())}}let F=ur.triangulateShape(S,I),H=S;for(let j=0,st=I.length;j<st;j++){let L=I[j];S=S.concat(L)}function $(j,st,L){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(st,L)}let V=S.length,it=F.length;function G(j,st,L){let Ct,et,yt,lt=j.x-st.x,Ft=j.y-st.y,xt=L.x-j.x,E=L.y-j.y,M=lt*lt+Ft*Ft,O=lt*E-Ft*xt;if(Math.abs(O)>Number.EPSILON){let X=Math.sqrt(M),Q=Math.sqrt(xt*xt+E*E),q=st.x-Ft/X,wt=st.y+lt/X,dt=L.x-E/Q,vt=L.y+xt/Q,Qt=((dt-q)*E-(vt-wt)*xt)/(lt*E-Ft*xt);Ct=q+lt*Qt-j.x,et=wt+Ft*Qt-j.y;let nt=Ct*Ct+et*et;if(nt<=2)return new tt(Ct,et);yt=Math.sqrt(nt/2)}else{let X=!1;lt>Number.EPSILON?xt>Number.EPSILON&&(X=!0):lt<-Number.EPSILON?xt<-Number.EPSILON&&(X=!0):Math.sign(Ft)===Math.sign(E)&&(X=!0),X?(Ct=-Ft,et=lt,yt=Math.sqrt(M)):(Ct=lt,et=Ft,yt=Math.sqrt(M/2))}return new tt(Ct/yt,et/yt)}let ht=[];for(let j=0,st=H.length,L=st-1,Ct=j+1;j<st;j++,L++,Ct++)L===st&&(L=0),Ct===st&&(Ct=0),ht[j]=G(H[j],H[L],H[Ct]);let _t=[],Rt,Wt=ht.concat();for(let j=0,st=I.length;j<st;j++){let L=I[j];Rt=[];for(let Ct=0,et=L.length,yt=et-1,lt=Ct+1;Ct<et;Ct++,yt++,lt++)yt===et&&(yt=0),lt===et&&(lt=0),Rt[Ct]=G(L[Ct],L[yt],L[lt]);_t.push(Rt),Wt=Wt.concat(Rt)}for(let j=0;j<m;j++){let st=j/m,L=f*Math.cos(st*Math.PI/2),Ct=g*Math.sin(st*Math.PI/2)+_;for(let et=0,yt=H.length;et<yt;et++){let lt=$(H[et],ht[et],Ct);at(lt.x,lt.y,-L)}for(let et=0,yt=I.length;et<yt;et++){let lt=I[et];Rt=_t[et];for(let Ft=0,xt=lt.length;Ft<xt;Ft++){let E=$(lt[Ft],Rt[Ft],Ct);at(E.x,E.y,-L)}}}let oe=g+_;for(let j=0;j<V;j++){let st=d?$(S[j],Wt[j],oe):S[j];x?(A.copy(P.normals[0]).multiplyScalar(st.x),w.copy(P.binormals[0]).multiplyScalar(st.y),C.copy(v[0]).add(A).add(w),at(C.x,C.y,C.z)):at(st.x,st.y,0)}for(let j=1;j<=h;j++)for(let st=0;st<V;st++){let L=d?$(S[st],Wt[st],oe):S[st];x?(A.copy(P.normals[j]).multiplyScalar(L.x),w.copy(P.binormals[j]).multiplyScalar(L.y),C.copy(v[j]).add(A).add(w),at(C.x,C.y,C.z)):at(L.x,L.y,u/h*j)}for(let j=m-1;j>=0;j--){let st=j/m,L=f*Math.cos(st*Math.PI/2),Ct=g*Math.sin(st*Math.PI/2)+_;for(let et=0,yt=H.length;et<yt;et++){let lt=$(H[et],ht[et],Ct);at(lt.x,lt.y,u+L)}for(let et=0,yt=I.length;et<yt;et++){let lt=I[et];Rt=_t[et];for(let Ft=0,xt=lt.length;Ft<xt;Ft++){let E=$(lt[Ft],Rt[Ft],Ct);x?at(E.x,E.y+v[h-1].y,v[h-1].x+L):at(E.x,E.y,u+L)}}}Z(),rt();function Z(){let j=s.length/3;if(d){let st=0,L=V*st;for(let Ct=0;Ct<it;Ct++){let et=F[Ct];Nt(et[2]+L,et[1]+L,et[0]+L)}st=h+m*2,L=V*st;for(let Ct=0;Ct<it;Ct++){let et=F[Ct];Nt(et[0]+L,et[1]+L,et[2]+L)}}else{for(let st=0;st<it;st++){let L=F[st];Nt(L[2],L[1],L[0])}for(let st=0;st<it;st++){let L=F[st];Nt(L[0]+V*h,L[1]+V*h,L[2]+V*h)}}n.addGroup(j,s.length/3-j,0)}function rt(){let j=s.length/3,st=0;Et(H,st),st+=H.length;for(let L=0,Ct=I.length;L<Ct;L++){let et=I[L];Et(et,st),st+=et.length}n.addGroup(j,s.length/3-j,1)}function Et(j,st){let L=j.length;for(;--L>=0;){let Ct=L,et=L-1;et<0&&(et=j.length-1);for(let yt=0,lt=h+m*2;yt<lt;yt++){let Ft=V*yt,xt=V*(yt+1),E=st+Ct+Ft,M=st+et+Ft,O=st+et+xt,X=st+Ct+xt;Vt(E,M,O,X)}}}function at(j,st,L){l.push(j),l.push(st),l.push(L)}function Nt(j,st,L){kt(j),kt(st),kt(L);let Ct=s.length/3,et=y.generateTopUV(n,s,Ct-3,Ct-2,Ct-1);ne(et[0]),ne(et[1]),ne(et[2])}function Vt(j,st,L,Ct){kt(j),kt(st),kt(Ct),kt(st),kt(L),kt(Ct);let et=s.length/3,yt=y.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);ne(yt[0]),ne(yt[1]),ne(yt[3]),ne(yt[1]),ne(yt[2]),ne(yt[3])}function kt(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function ne(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return yx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new jo[s.type]().fromJSON(s)),new i(n,t.options)}},vx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new tt(r,o),new tt(a,l),new tt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new tt(o,1-l),new tt(c,1-u),new tt(d,1-g),new tt(_,1-p)]:[new tt(a,1-l),new tt(h,1-u),new tt(f,1-g),new tt(m,1-p)]}};function yx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var sa=class i extends yc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ra=class i extends Se{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new T,g=new tt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){let m=_*(n+1);for(let p=0;p<n;p++){let y=p+m,v=y,x=y+n+1,P=y+n+2,w=y+1;a.push(v,x,w),a.push(x,P,w)}}this.setIndex(a),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var oa=class i extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new T,d=new T,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let y=[],v=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let P=0;P<=e;P++){let w=P/e;u.x=-t*Math.cos(s+w*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+x,1-v),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let v=h[p][y+1],x=h[p][y],P=h[p+1][y],w=h[p+1][y+1];(p!==0||o>0)&&f.push(v,x,w),(p!==n-1||l<Math.PI)&&f.push(x,P,w)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var aa=class i extends Se{constructor(t=new $o(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new T,l=new T,c=new tt,h=new T,u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2));function _(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),y(),p()}function m(v){h=t.getPointAt(v/e,h);let x=o.normals[v],P=o.binormals[v];for(let w=0;w<=s;w++){let A=w/s*Math.PI*2,C=Math.sin(A),R=-Math.cos(A);l.x=R*x.x+C*P.x,l.y=R*x.y+C*P.y,l.z=R*x.z+C*P.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let x=1;x<=s;x++){let P=(s+1)*(v-1)+(x-1),w=(s+1)*v+(x-1),A=(s+1)*v+x,C=(s+1)*(v-1)+x;g.push(P,w,C),g.push(w,A,C)}}function y(){for(let v=0;v<=e;v++)for(let x=0;x<=s;x++)c.x=v/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new jo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ke=class extends hn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=V0,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},dn=class extends ke{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Mo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Mx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Sx(i){function t(s,r){return i[s]-i[r]}let e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function E0(i,t,e){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let l=0;l!==t;++l)s[o++]=i[a+l]}return s}function ed(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}var Ai=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bc=class extends Ai{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uu,endingEnd:uu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case du:r=t,a=2*e-n;break;case fu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case du:o=t,l=2*n-e;break;case fu:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let P=0;P!==a;++P)r[P]=p*o[h+P]+y*o[c+P]+v*o[l+P]+x*o[u+P];return r}},Rc=class extends Ai{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Ec=class extends Ai{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},bn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Mo(e,this.TimeBufferType),this.values=Mo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Mo(t.times,Array),values:Mo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new bc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ws:e=this.InterpolantFactoryMethodDiscrete;break;case Ts:e=this.InterpolantFactoryMethodLinear;break;case Ua:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ws;case this.InterpolantFactoryMethodLinear:return Ts;case this.InterpolantFactoryMethodSmooth:return Ua}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Mx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ua,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Ts;var Li=class extends bn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=ws;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var la=class extends bn{};la.prototype.ValueTypeName="color";var si=class extends bn{};si.prototype.ValueTypeName="number";var wc=class extends Ai{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Be.slerpFlat(r,0,o,c-a,o,c,l);return r}},ri=class extends bn{InterpolantFactoryMethodLinear(t){return new wc(this.times,this.values,this.getValueSize(),t)}};ri.prototype.ValueTypeName="quaternion";ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends bn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=ws;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends bn{};oi.prototype.ValueTypeName="vector";var ca=class{constructor(t="",e=-1,n=[],s=Sf){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=vn(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Rx(n[o]).scale(s));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(bn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){let r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Sx(l);l=E0(l,1,h),c=E0(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new si(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){let c=t[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,_){if(f.length!==0){let m=[],p=[];ed(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode,l=t.length||-1,c=t.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(let _ in f){let m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){let v=d[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}s.push(new si(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{let f=".bones["+e[u].name+"]";n(oi,f+".position",d,"pos",s),n(ri,f+".quaternion",d,"rot",s),n(oi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let t=this.tracks,e=0;for(let n=0,s=t.length;n!==s;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function bx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return si;case"vector":case"vector2":case"vector3":case"vector4":return oi;case"color":return la;case"quaternion":return ri;case"bool":case"boolean":return Li;case"string":return Ci}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Rx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=bx(i.type);if(i.times===void 0){let e=[],n=[];ed(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}var Si={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ar=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Ex=new Ar,ai=class{constructor(t){this.manager=t!==void 0?t:Ex,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ai.DEFAULT_MATERIAL_NAME="__DEFAULT";var qn={},Tc=class extends Error{constructor(t,e){super(t),this.response=e}},Lr=class extends ai{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Si.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(qn[t]!==void 0){qn[t].push({onLoad:e,onProgress:n,onError:s});return}qn[t]=[],qn[t].push({onLoad:e,onProgress:n,onError:s});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=qn[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,_=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:v,value:x})=>{if(v)p.close();else{_+=x.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let w=0,A=h.length;w<A;w++){let C=h[w];C.onProgress&&C.onProgress(P)}p.enqueue(x),y()}},v=>{p.error(v)})}}});return new Response(m)}else throw new Tc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Si.add(t,c);let h=qn[t];delete qn[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=qn[t];if(h===void 0)throw this.manager.itemError(t),c;delete qn[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Ac=class extends ai{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Si.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=mr("img");function l(){h(),Si.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var Us=class extends ai{constructor(t){super(t)}load(t,e,n,s){let r=new Oe,o=new Ac(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Os=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ha=class extends Os{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},pl=new Ot,w0=new T,T0=new T,Cr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gr,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;w0.setFromMatrixPosition(t.matrixWorld),e.position.copy(w0),T0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(T0),e.updateMatrixWorld(),pl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Lc=class extends Cr{constructor(){super(new Pe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=As*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},ua=class extends Os{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Lc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},A0=new Ot,nr=new T,ml=new T,Cc=class extends Cr{constructor(){super(new Pe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),nr.setFromMatrixPosition(t.matrixWorld),n.position.copy(nr),ml.copy(n.position),ml.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ml),n.updateMatrixWorld(),s.makeTranslation(-nr.x,-nr.y,-nr.z),A0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(A0)}},Fs=class extends Os{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Cc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ic=class extends Cr{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ii=class extends Os{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Ic}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Pi=class{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var da=class extends ai{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Si.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Si.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),Si.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Si.add(t,l),r.manager.itemStart(t)}};var Zc="\\[\\]\\.:\\/",wx=new RegExp("["+Zc+"]","g"),Kc="[^"+Zc+"]",Tx="[^"+Zc.replace("\\.","")+"]",Ax=/((?:WC+[\/:])*)/.source.replace("WC",Kc),Lx=/(WCOD+)?/.source.replace("WCOD",Tx),Cx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kc),Ix=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kc),Px=new RegExp("^"+Ax+Lx+Cx+Ix+"$"),Dx=["material","materials","bones","map"],Pc=class{constructor(t,e,n){let s=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(wx,"")}static parseTrackName(t){let e=Px.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Dx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=Pc;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Mv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dc);function $c(i,t){if(t===H0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===Pr||t===pa){let e=i.getIndex();if(e===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=e.count-2,s=[];if(t===Pr)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}var xa=class extends ai{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new ih(e)}),this.register(function(e){return new sh(e)}),this.register(function(e){return new fh(e)}),this.register(function(e){return new ph(e)}),this.register(function(e){return new mh(e)}),this.register(function(e){return new oh(e)}),this.register(function(e){return new ah(e)}),this.register(function(e){return new lh(e)}),this.register(function(e){return new ch(e)}),this.register(function(e){return new nh(e)}),this.register(function(e){return new hh(e)}),this.register(function(e){return new rh(e)}),this.register(function(e){return new dh(e)}),this.register(function(e){return new uh(e)}),this.register(function(e){return new th(e)}),this.register(function(e){return new gh(e)}),this.register(function(e){return new _h(e)})}load(t,e,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Pi.extractUrlBase(t);o=Pi.resolveURL(c,this.path)}else o=Pi.extractUrlBase(t);this.manager.itemStart(t);let a=function(c){s?s(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new Lr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r,o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===ad){try{o[jt.KHR_BINARY_GLTF]=new xh(t)}catch(u){s&&s(u);return}r=JSON.parse(o[jt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Eh(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case jt.KHR_MATERIALS_UNLIT:o[u]=new eh;break;case jt.KHR_DRACO_MESH_COMPRESSION:o[u]=new vh(r,this.dracoLoader);break;case jt.KHR_TEXTURE_TRANSFORM:o[u]=new yh;break;case jt.KHR_MESH_QUANTIZATION:o[u]=new Mh;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(t,e){let n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}};function Nx(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}var jt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},th=class{constructor(t){this.parser=t,this.name=jt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,s=e.cache.get(n);if(s)return s;let r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],c,h=new Pt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],qe);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ii(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Fs(h),c.distance=u;break;case"spot":c=new ua(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,li(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),s=Promise.resolve(c),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}},eh=class{constructor(){this.name=jt.KHR_MATERIALS_UNLIT}getMaterialType(){return Xe}extendParams(t,e,n){let s=[];t.color=new Pt(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],qe),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,Me))}return Promise.all(s)}},nh=class{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}},ih=class{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new tt(a,a)}return Promise.all(r)}},sh=class{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_DISPERSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},rh=class{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},oh=class{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];e.sheenColor=new Pt(0,0,0),e.sheenRoughness=0,e.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],qe)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Me)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},ah=class{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},lh=class{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return e.attenuationColor=new Pt().setRGB(a[0],a[1],a[2],qe),Promise.all(r)}},ch=class{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},hh=class{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return e.specularColor=new Pt().setRGB(a[0],a[1],a[2],qe),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Me)),Promise.all(r)}},uh=class{constructor(t){this.parser=t,this.name=jt.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}},dh=class{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},fh=class{constructor(t){this.parser=t,this.name=jt.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}},ph=class{constructor(t){this.parser=t,this.name=jt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},mh=class{constructor(t){this.parser=t,this.name=jt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},gh=class{constructor(t){this.name=jt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},_h=class{constructor(t){this.name=jt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=e.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Rn.TRIANGLES&&c.mode!==Rn.TRIANGLE_STRIP&&c.mode!==Rn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let _=new Ot,m=new T,p=new Be,y=new T(1,1,1),v=new un(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),v.setMatrixAt(x,_.compose(m,p,y));for(let x in l)if(x==="_COLOR_0"){let P=l[x];v.instanceColor=new ni(P.array,P.itemSize,P.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);Re.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},ad="glTF",Dr=12,id={JSON:1313821514,BIN:5130562},xh=class{constructor(t){this.name=jt.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Dr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==ad)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Dr,r=new DataView(t,Dr),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===id.JSON){let c=new Uint8Array(t,Dr+o,a);this.content=n.decode(c)}else if(l===id.BIN){let c=Dr+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},vh=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=jt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=bh[h]||h.toLowerCase();a[u]=o[h]}for(let h in t.attributes){let u=bh[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[t.attributes[h]],f=zs[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},a,c,qe,d)})})}},yh=class{constructor(){this.name=jt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},Mh=class{constructor(){this.name=jt.KHR_MESH_QUANTIZATION}},va=class extends Ai{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-e,u=(n-e)/h,d=u*u,f=d*u,g=t*c,_=g-c,m=-2*f+3*d,p=f-d,y=1-m,v=p-d+u;for(let x=0;x!==a;x++){let P=o[_+x+a],w=o[_+x+l]*h,A=o[g+x+a],C=o[g+x]*h;r[x]=y*P+v*w+m*A+p*C}return r}},Ux=new Be,Sh=class extends va{interpolate_(t,e,n,s){let r=super.interpolate_(t,e,n,s);return Ux.fromArray(r).normalize().toArray(r),r}},Rn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},zs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sd={9728:Ye,9729:tn,9984:Oc,9985:rr,9986:ps,9987:On},rd={33071:$n,33648:fr,10497:Qn},Jc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},bh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ox={CUBICSPLINE:void 0,LINEAR:Ts,STEP:ws},jc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Fx(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ke({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fn})),i.DefaultMaterial}function $i(i,t,e){for(let n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function li(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Bx(i,t,e){let n=!1,s=!1,r=!1;for(let c=0,h=t.length;c<h;c++){let u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){let u=t[c];if(n){let d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function kx(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function zx(i){let t,e=i.extensions&&i.extensions[jt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Qc(e.attributes):t=i.indices+":"+Qc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+Qc(i.targets[n]);return t}function Qc(i){let t="",e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function Rh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Hx(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Vx=new Ot,Eh=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Nx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Us(this.options.manager):this.textureLoader=new da(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Lr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return $i(r,a,s),li(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){let o=e[s].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){let o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let s=t(e[n]);if(s)return s}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let s=0;s<e.length;s++){let r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[jt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Pi.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){let e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){let o=Jc[s.type],a=zs[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Te(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Jc[s.type],c=zs[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,m;if(f&&f!==u){let p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,v=e.cache.get(y);v||(_=new c(a,p*f,s.count*f/h),v=new _r(_,f/h),e.cache.add(y,v)),m=new xr(v,l,d%f/h,g)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),m=new Te(_,l,g);if(s.sparse!==void 0){let p=Jc.SCALAR,y=zs[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,P=new y(o[1],v,s.sparse.count*p),w=new c(o[2],x,s.sparse.count*l);a!==null&&(m=new Te(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,C=P.length;A<C;A++){let R=P[A];if(m.setX(R,w[A*l]),l>=2&&m.setY(R,w[A*l+1]),l>=3&&m.setZ(R,w[A*l+2]),l>=4&&m.setW(R,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){let s=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=sd[d.magFilter]||tn,h.minFilter=sd[d.minFilter]||On,h.wrapS=rd[d.wrapS]||Qn,h.wrapT=rd[d.wrapT]||Qn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ye&&h.minFilter!==tn,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){let n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let o=s.images[t],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(_){let m=new Oe(_);m.needsUpdate=!0,d(m)}),e.load(Pi.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),li(u,o),u.userData.mimeType=o.mimeType||Hx(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[jt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[jt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[jt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){let e=t.geometry,n=t.material,s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Mr,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new yr,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return ke}loadMaterial(t){let e=this,n=this.json,s=this.extensions,r=n.materials[t],o,a={},l=r.extensions||{},c=[];if(l[jt.KHR_MATERIALS_UNLIT]){let u=s[jt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,e))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Pt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],qe),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,Me)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=ln);let h=r.alphaMode||jc.OPAQUE;if(h===jc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===jc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Xe&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new tt(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Xe&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Xe){let u=r.emissiveFactor;a.emissive=new Pt().setRGB(u[0],u[1],u[2],qe)}return r.emissiveTexture!==void 0&&o!==Xe&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Me)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),li(u,r),e.associations.set(u,{materials:t}),r.extensions&&$i(s,u,r),u})}createUniqueName(t){let e=xe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[jt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return od(l,a,e)})}let o=[];for(let a=0,l=t.length;a<l;a++){let c=t[a],h=zx(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[jt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=od(new Se,c,e),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){let e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?Fx(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let _=h[f],m=o[f],p,y=c[f];if(m.mode===Rn.TRIANGLES||m.mode===Rn.TRIANGLE_STRIP||m.mode===Rn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new ko(_,y):new de(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Rn.TRIANGLE_STRIP?p.geometry=$c(p.geometry,pa):m.mode===Rn.TRIANGLE_FAN&&(p.geometry=$c(p.geometry,Pr));else if(m.mode===Rn.LINES)p=new Wo(_,y);else if(m.mode===Rn.LINE_STRIP)p=new Ds(_,y);else if(m.mode===Rn.LINE_LOOP)p=new Yo(_,y);else if(m.mode===Rn.POINTS)p=new Xo(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&kx(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),li(p,r),m.extensions&&$i(s,p,m),e.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&$i(s,u[0],r),u[0];let d=new We;r.extensions&&$i(s,d,r),e.associations.set(d,{meshes:t});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(t){let e,n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Pe(Bs.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new Is(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),li(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new Ot;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Ho(a,l)})}loadAnimation(t){let e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let y=0,v=d.length;y<v;y++){let x=d[y],P=f[y],w=g[y],A=_[y],C=m[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let R=n._createAnimationTracks(x,P,w,A,C);if(R)for(let S=0;S<R.length;S++)p.push(R[S])}return new ca(r,void 0,p)})}createNodeMesh(t){let e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(t){let e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Vx)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new vr:c.length>1?h=new We:c.length===1?h=c[0]:h=new Re,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),li(h,r),r.extensions&&$i(n,h,r),r.matrix!==void 0){let u=new Ot;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],s=this,r=new We;n.name&&(r.name=s.createUniqueName(n.name)),li(r,n),n.extensions&&$i(e,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof hn||d instanceof Oe)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(t,e,n,s,r){let o=[],a=t.name?t.name:t.uuid,l=[];Di[r.path]===Di.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Di[r.path]){case Di.weights:c=si;break;case Di.rotation:c=ri;break;case Di.position:case Di.scale:c=oi;break;default:switch(n.itemSize){case 1:c=si;break;case 2:case 3:default:c=oi;break}break}let h=s.interpolation!==void 0?Ox[s.interpolation]:Ts,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+Di[r.path],e.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=Rh(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let s=this instanceof ri?Sh:va;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Gx(i,t,e){let n=t.attributes,s=new yn;if(n.POSITION!==void 0){let a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new T(l[0],l[1],l[2]),new T(c[0],c[1],c[2])),a.normalized){let h=Rh(zs[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let a=new T,l=new T;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=e.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let _=Rh(zs[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new cn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function od(i,t,e){let n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=bh[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){let o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return te.workingColorSpace!==qe&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${te.workingColorSpace}" not supported.`),li(i,t),Gx(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?Bx(i,t.targets,e):i})}var ya=class{constructor(t,e){this.mx=0,this.my=0,this.pressed=new Set,this.held=new Set,this.stickId=null,this.zone=t,this.base=t.querySelector(".stick-base"),this.knob=t.querySelector(".stick-knob"),this.keys=new Set,this.radius=56,t.addEventListener("pointerdown",s=>this.stickStart(s)),window.addEventListener("pointermove",s=>this.stickMove(s),{passive:!1}),window.addEventListener("pointerup",s=>this.stickEnd(s)),window.addEventListener("pointercancel",s=>this.stickEnd(s));for(let[s,r]of Object.entries(e)){r.addEventListener("pointerdown",a=>{a.preventDefault();try{r.setPointerCapture?.(a.pointerId)}catch{}this.press(s),r.classList.add("down")});let o=()=>{this.held.delete(s),r.classList.remove("down")};r.addEventListener("pointerup",o),r.addEventListener("pointercancel",o),r.addEventListener("lostpointercapture",o),r.addEventListener("contextmenu",a=>a.preventDefault())}let n={KeyJ:"attack",KeyK:"heavy",Space:"dodge",KeyL:"dodge",KeyU:"rage",KeyI:"rage",KeyP:"pause",Escape:"pause"};window.addEventListener("keydown",s=>{if(s.repeat)return;this.keys.add(s.code);let r=n[s.code];r&&(this.press(r),s.preventDefault())}),window.addEventListener("keyup",s=>{this.keys.delete(s.code);let r=n[s.code];r&&this.held.delete(r)}),window.addEventListener("blur",()=>{this.keys.clear(),this.held.clear(),this.resetStick()}),document.addEventListener("gesturestart",s=>s.preventDefault()),document.addEventListener("dblclick",s=>s.preventDefault())}press(t){this.pressed.add(t),this.held.add(t)}consume(t){return this.pressed.has(t)?(this.pressed.delete(t),!0):!1}clear(){this.pressed.clear()}stickStart(t){if(this.stickId!==null)return;t.preventDefault(),this.stickId=t.pointerId;let e=this.zone.getBoundingClientRect();this.ox=t.clientX,this.oy=t.clientY,this.base.style.transform=`translate(${t.clientX-e.left}px, ${t.clientY-e.top}px)`,this.knob.style.transform=`translate(${t.clientX-e.left}px, ${t.clientY-e.top}px)`,this.zone.classList.add("active")}stickMove(t){if(t.pointerId!==this.stickId)return;t.preventDefault();let e=t.clientX-this.ox,n=t.clientY-this.oy,s=Math.hypot(e,n),r=this.radius;s>r&&(e*=r/s,n*=r/s);let o=this.zone.getBoundingClientRect();this.knob.style.transform=`translate(${this.ox-o.left+e}px, ${this.oy-o.top+n}px)`;let a=Math.min(1,s/r),l=.15,c=Math.hypot(e,n)||1,h=a<l?0:(a-l)/(1-l);this.mx=e/c*h,this.my=-n/c*h}stickEnd(t){t.pointerId===this.stickId&&this.resetStick()}resetStick(){this.stickId=null,this.mx=0,this.my=0,this.zone.classList.remove("active")}move(){let t=this.mx,e=this.my,n=this.keys,s=(n.has("KeyD")||n.has("ArrowRight")?1:0)-(n.has("KeyA")||n.has("ArrowLeft")?1:0),r=(n.has("KeyW")||n.has("ArrowUp")?1:0)-(n.has("KeyS")||n.has("ArrowDown")?1:0);if(s||r){let o=Math.hypot(s,r);t=s/o,e=r/o}return[t,e]}};var Ma=class{constructor(){this.ctx=null,this.muted=!1,this.musicOn=!1}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.8;let e=this.ctx.createDynamicsCompressor();this.master.connect(e),e.connect(this.ctx.destination),this.sfxBus=this.ctx.createGain(),this.sfxBus.connect(this.master),this.musBus=this.ctx.createGain(),this.musBus.gain.value=.35,this.musBus.connect(this.master);let n=this.ctx.sampleRate;this.noise=this.ctx.createBuffer(1,n,this.ctx.sampleRate);let s=this.noise.getChannelData(0);for(let r=0;r<n;r++)s[r]=Math.random()*2-1}this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.8)}_noise(t,e,n,s,r,o,a="bandpass",l=this.sfxBus){let c=this.ctx,h=c.createBufferSource();h.buffer=this.noise,h.playbackRate.value=.7+Math.random()*.6;let u=c.createBiquadFilter();u.type=a,u.Q.value=r,u.frequency.setValueAtTime(n,t),u.frequency.exponentialRampToValueAtTime(s,t+e);let d=c.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(o,t+Math.min(.03,e*.3)),d.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u),u.connect(d),d.connect(l),h.start(t,Math.random()*.5),h.stop(t+e+.05)}_tone(t,e,n,s,r,o="sine",a=this.sfxBus){let l=this.ctx,c=l.createOscillator();c.type=o,c.frequency.setValueAtTime(n,t),c.frequency.exponentialRampToValueAtTime(Math.max(20,s),t+e);let h=l.createGain();h.gain.setValueAtTime(r,t),h.gain.exponentialRampToValueAtTime(1e-4,t+e),c.connect(h),h.connect(a),c.start(t),c.stop(t+e+.05)}play(t,e=1){if(!this.ctx||this.muted)return;let n=this.ctx.currentTime;switch(t){case"swing":this._noise(n,.28,500,2600,1.2,.35*e);break;case"swingHeavy":this._noise(n,.45,300,1800,1,.5*e),this._tone(n,.3,90,50,.2*e);break;case"hit":this._noise(n,.12,2400,600,.8,.45*e),this._tone(n,.16,140,50,.5*e,"triangle"),this._noise(n+.01,.2,900,200,2,.25*e,"lowpass");break;case"slam":this._tone(n,.6,80,30,.9*e),this._noise(n,.5,1200,100,.7,.6*e,"lowpass");break;case"hurt":this._tone(n,.25,220,90,.35*e,"sawtooth"),this._noise(n,.15,1500,400,1,.3*e);break;case"dodge":this._noise(n,.22,800,300,.8,.25*e);break;case"clang":this._tone(n,.4,1800,1700,.15*e,"square"),this._tone(n,.5,2700,2600,.1*e),this._noise(n,.08,4e3,2e3,1,.3*e);break;case"rage":this._tone(n,1.2,60,120,.6*e,"sawtooth"),this._noise(n,1,200,3e3,.6,.4*e),this._tone(n,1.4,45,30,.8*e);break;case"roar":for(let s=0;s<3;s++)this._tone(n+s*.02,1.6,70+s*13,40,.35*e,"sawtooth");this._noise(n,1.6,400,150,.7,.5*e,"lowpass");break;case"heal":this._tone(n,.35,520,880,.15*e,"triangle");break;case"ui":this._tone(n,.09,660,520,.12*e,"triangle");break;case"wave":this._tone(n,1.2,110,108,.4*e,"sawtooth"),this._tone(n,1.2,165,163,.25*e,"sawtooth");break}}startMusic(){if(!this.ctx||this.musicOn)return;this.musicOn=!0;let t=this.ctx;this.drone=[];for(let[a,l]of[[55,.12],[82.4,.06],[55.4,.08]]){let c=t.createOscillator();c.type="sawtooth",c.frequency.value=a;let h=t.createBiquadFilter();h.type="lowpass",h.frequency.value=260;let u=t.createGain();u.gain.value=l,c.connect(h),h.connect(u),u.connect(this.musBus),c.start(),this.drone.push(c)}let e=60/96,n=t.currentTime+.1,s=0,r=[1,0,.5,0,1,.4,.6,0,1,0,.5,.3,1,0,.8,.6],o=()=>{if(this.musicOn){for(;n<t.currentTime+.3;){let a=r[s%16];a&&(this._tone(n,.45,95,42,.55*a,"sine",this.musBus),this._noise(n,.12,600,200,.7,.12*a,"lowpass",this.musBus)),n+=e/2,s++}this.musTimer=setTimeout(o,100)}};o()}stopMusic(){this.musicOn=!1,clearTimeout(this.musTimer),(this.drone||[]).forEach(t=>{try{t.stop()}catch{}}),this.drone=[]}};var ld={hilt:new T(0,.54,0),trail:new T(0,1.14,0),tip:new T(0,2.6,0)};function wh(i,t=!1){let e=document.createElement("canvas");e.width=256,e.height=512;let n=e.getContext("2d"),s=713,r=()=>(s=Math.imul(1664525,s)+1013904223>>>0,s/4294967296);function o(c,h,u){let d=c/u,f=h/u,g=Math.floor(d),_=Math.floor(f),m=w=>w*w*(3-2*w),p=m(d-g),y=m(f-_),v=(w,A)=>{let C=Math.imul(w+541,374761393)+Math.imul(A+307,668265263);return(Math.imul(C^C>>>13,1274126177)>>>0)/4294967296},x=Bs.lerp(v(g,_),v(g+1,_),p),P=Bs.lerp(v(g,_+1),v(g+1,_+1),p);return Bs.lerp(x,P,y)-.5}let a=n.createImageData(e.width,e.height);for(let c=0;c<e.height;c++)for(let h=0;h<e.width;h++){let u=4*(c*e.width+h),d=o(h,c,31)*18+o(h,c,9)*11+o(h,c,3)*8,f=t?(h%3===0?-11:3)+(c%4===0?-8:2):0,g=d+(r()-.5)*15+f;for(let _=0;_<3;_++)a.data[u+_]=i[_]+g;a.data[u+3]=255}if(n.putImageData(a,0,0),!t)for(let c=0;c<470;c++){let h=r()*256,u=r()*512,d=2+24*r();n.strokeStyle=c%3?"rgba(200,195,186,0.12)":"rgba(14,15,16,0.24)",n.lineWidth=.4+r()*1.3,n.beginPath(),n.moveTo(h,u),n.lineTo(h+d*.62,u-d),n.stroke()}let l=new ii(e);return l.colorSpace=Me,l.anisotropy=4,l}function Wx(){let t=[[.47,.185,.13,.067,.014],[.62,.185,.13,.075,.015],[.66,.275,.183,.091,.018],[2.39,.275,.183,.091,.018],[2.6,0,0,0,0]].map(([l,c,h,u,d])=>[[-c,l,d],[-h,l,u],[h,l,u],[c,l,d],[c,l,-d],[h,l,-u],[-h,l,-u],[-c,l,-d]]),e=new Se,n=[],s=[];function r(l,c,h,u){e.addGroup(n.length/3,3,u);for(let d of[l,c,h])n.push(...d),s.push(d[0]/.55+.5,(d[1]-.47)/2.13)}for(let l=1;l<t.length;l++)for(let c=0;c<8;c++){let h=(c+1)%8,u=t[l-1][c],d=t[l-1][h],f=t[l][h],g=t[l][c],_=c===1||c===5?0:1;r(u,d,f,_),l<t.length-1&&r(u,f,g,_)}for(let l=1;l<7;l++)r(t[0][0],t[0][l+1],t[0][l],0);e.setAttribute("position",new Jt(n,3)),e.setAttribute("uv",new Jt(s,2)),e.computeVertexNormals();let o=e.groups.slice().sort((l,c)=>l.materialIndex-c.materialIndex),a=[];e.clearGroups();for(let l of[0,1]){let c=a.length;for(let h of o)h.materialIndex===l&&a.push(h.start,h.start+1,h.start+2);e.addGroup(c,a.length-c,l)}return e.setIndex(a),e}function cd(){let i=new We;i.name="forge-core-sword";let t=new ke({map:wh([54,56,60]),metalness:.6,roughness:.77,envMapIntensity:.7}),e=new ke({map:wh([94,100,108]),metalness:.69,roughness:.63}),n=new ke({map:wh([106,92,72],!0),roughness:.96}),s=new ke({color:9723714,metalness:.58,roughness:.64});function r(c,h,u=0,d=0,f=0){let g=new de(c,h);g.castShadow=!0,g.position.set(u,d,f),i.add(g)}r(Wx(),[t,e]);let o=new Rr;o.moveTo(-.29,.39),o.lineTo(.29,.39),o.lineTo(.32,.42),o.lineTo(.32,.51),o.lineTo(-.32,.51),o.lineTo(-.32,.42),o.closePath();let a=new ia(o,{depth:.17,bevelSize:.012,bevelThickness:.012,bevelSegments:1});a.translate(0,0,-.085),r(a,[t,e]);for(let c of[-1,1])r(new Ti(.211,.079,.019),e,0,.452,c*.091),r(new Ti(.165,.049,.009),s,0,.452,c*.103);r(new Ns(.058,.049,.74,16),n,0,.009);let l=[];for(let c=0;c<=192;c++){let h=c/192,u=h*24*Math.PI,d=.051+.008*h;l.push(new T(d*Math.cos(u),-.347+.716*h,d*Math.sin(u)))}return r(new aa(new br(l),192,.004,4,!1),n),r(new Ns(.061,.066,.056,8),t,0,.378),r(new ta([new tt(0,-.525),new tt(.065,-.525),new tt(.098,-.473),new tt(.082,-.387),new tt(.056,-.359),new tt(0,-.359)],8),t),i}var Sa=[{id:"forge",label:"\u7089\u5FC3\u306E\u5927\u5263",make:cd,blade:ld}];var Th={R2L:[[0,{pelvis:[0,-.338,0],torso:[.1,-.413,0],head:[-.05,.338,0],cloak:[.637,0,.15],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-.766,.648,.001],farmR:[-1.778,0,0],handR:[-.6,-.171,.9],uarmL:[-.093,-.327,1.999],farmL:[-2.095,0,0]},null,null],[.025,{pelvis:[0,-.351,0],torso:[.112,-.428,0],head:[-.056,.351,0],cloak:[.645,0,.156],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-.627,.583,.186],farmR:[-1.63,0,0],handR:[-.6,-.24,.704],uarmL:[-.163,-.43,1.53],farmL:[-1.851,0,0]},"lin",null],[.05,{pelvis:[0,-.357,0],torso:[.117,-.437,0],head:[-.059,.357,0],cloak:[.648,0,.159],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-.588,.535,.196],farmR:[-1.617,0,0],handR:[-.6,-.258,.719],uarmL:[-.158,-.509,1.328],farmL:[-1.76,0,0]},"lin",null],[.075,{pelvis:[0,-.36,0],torso:[.12,-.44,0],head:[-.06,.36,0],cloak:[.65,0,.16],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-.575,.517,.191],farmR:[-1.619,0,0],handR:[-.6,-.263,.736],uarmL:[-.157,-.533,1.269],farmL:[-1.736,0,0]},"lin",null],[.1,{pelvis:[0,-.36,0],torso:[.12,-.44,0],head:[-.06,.36,0],cloak:[.65,0,.16],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-.63,.705,.3],farmR:[-1.765,0,0],handR:[-.544,-.848,-.9],uarmL:[-.155,-.614,1.168],farmL:[-1.608,0,0]},"lin",null],[.11,{pelvis:[0,-.347,0],torso:[.122,-.425,0],head:[-.061,.347,0],cloak:[.643,0,.154],thighR:[.259,0,-.122],shinR:[.409,0,0],thighL:[-.472,0,.122],shinL:[.472,0,0],rootY:-.129,footL:[.009,0,0],uarmR:[-.7,.797,.428],farmR:[-1.756,0,0],handR:[-.442,-.689,-.9],uarmL:[-.109,-.536,1.227],farmL:[-1.722,0,0]},"lin",null],[.12,{pelvis:[0,-.309,0],torso:[.128,-.378,0],head:[-.064,.309,0],cloak:[.622,0,.138],thighR:[.287,0,-.128],shinR:[.438,0,0],thighL:[-.537,0,.128],shinL:[.537,0,0],rootY:-.155,footL:[.037,0,0],uarmR:[-.739,.899,.428],farmR:[-1.767,0,0],handR:[-.319,-.653,-.9],uarmL:[-.001,-.403,1.273],farmL:[-1.953,0,0]},"lin",null],[.13,{pelvis:[0,-.246,0],torso:[.137,-.301,0],head:[-.068,.246,0],cloak:[.587,0,.109],thighR:[.334,0,-.137],shinR:[.484,0,0],thighL:[-.647,0,.137],shinL:[.647,0,0],rootY:-.199,footL:[.084,0,0],uarmR:[-.713,.962,.428],farmR:[-1.887,0,0],handR:[.007,-.577,-.9],uarmL:[.153,-.261,1.27],farmL:[-2.295,0,0]},"lin",null],[.14,{pelvis:[0,-.158,0],torso:[.15,-.193,0],head:[-.075,.158,0],cloak:[.537,0,.07],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],rootY:-.26,footL:[.15,0,0],uarmR:[-.573,.664,.3],farmR:[-2.204,0,0],handR:[.611,-.75,-.9],uarmL:[-.028,-.56,1.176],farmL:[-2.332,0,0]},"lin",null],[.15,{pelvis:[0,-.096,0],torso:[.163,-.117,0],head:[-.081,.096,0],cloak:[.528,0,.042],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.467,.798,.3],farmR:[-2.3,0,0],handR:[.681,-.724,-.9],uarmL:[.158,-.884,.896],farmL:[-2.472,0,0]},"lin",null],[.16,{pelvis:[0,-.034,0],torso:[.175,-.041,0],head:[-.087,.034,0],cloak:[.519,0,.015],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.274,.905,.265],farmR:[-2.414,0,0],handR:[.718,-.784,-.876],uarmL:[.422,-1.6,.223],farmL:[-2.471,0,0]},"lin",null],[.17,{pelvis:[0,.028,0],torso:[.188,.034,0],head:[-.094,-.028,0],cloak:[.509,0,-.013],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.137,.834,.197],farmR:[-2.557,0,0],handR:[.923,-.902,-.9],uarmL:[.29,-1.65,-.358],farmL:[-2.3,0,0]},"lin",null],[.18,{pelvis:[0,.09,0],torso:[.2,.11,0],head:[-.1,-.09,0],cloak:[.5,0,-.04],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.223,.432,.294],farmR:[-2.569,0,0],handR:[1.534,-.96,-.9],uarmL:[-.002,-1.682,-.4],farmL:[-2.218,0,0]},"lin",null],[.195,{pelvis:[0,.233,0],torso:[.2,.285,0],head:[-.1,-.233,0],cloak:[.579,0,-.104],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.07,.083,.123],farmR:[-2.631,0,0],handR:[2.226,-1.349,-.9],uarmL:[-.604,-1.786,-.154],farmL:[-1.405,0,0]},"lin",null],[.21,{pelvis:[0,.307,0],torso:[.2,.375,0],head:[-.1,-.307,0],cloak:[.62,0,-.136],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.425,-.127,.183],farmR:[-2.283,0,0],handR:[2.871,-1.309,-.9],uarmL:[-1.048,-1.515,-.13],farmL:[-.764,0,0]},"lin",null],[.225,{pelvis:[0,.334,0],torso:[.2,.408,0],head:[-.1,-.334,0],cloak:[.635,0,-.148],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.661,-.075,.137],farmR:[-2.034,0,0],handR:[2.928,-1.342,-.9],uarmL:[-1.304,-1.396,-.128],farmL:[-.418,0,0]},"lin",null],[.24,{pelvis:[0,.338,0],torso:[.2,.412,0],head:[-.1,-.338,0],cloak:[.637,0,-.15],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.552,-.118,.3],farmR:[-1.821,0,0],handR:[2.992,-1.321,-.9],uarmL:[-1.371,-1.319,-.121],farmL:[-.186,0,0]},"lin",null],[.2625,{pelvis:[0,.377,0],torso:[.154,.46,0],head:[-.077,-.377,0],cloak:[.659,0,-.167],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.656,.047,.3],farmR:[-1.753,0,0],handR:[3.151,-1.386,-.994],uarmL:[-1.432,-1.195,-.112],farmL:[-.1,0,0]},"lin",null],[.285,{pelvis:[0,.397,0],torso:[.13,.485,0],head:[-.065,-.397,0],cloak:[.67,0,-.176],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.768,.203,.378],farmR:[-1.702,0,0],handR:[3.27,-1.273,-1.076],uarmL:[-1.465,-1.116,-.109],farmL:[-.1,0,0]},"lin",null],[.3075,{pelvis:[0,.404,0],torso:[.121,.494,0],head:[-.061,-.404,0],cloak:[.674,0,-.18],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.865,.266,.378],farmR:[-1.714,0,0],handR:[3.301,-1.249,-1.076],uarmL:[-1.503,-1.106,-.109],farmL:[-.1,0,0]},"lin",null],[.33,{pelvis:[0,.405,0],torso:[.12,.495,0],head:[-.06,-.405,0],cloak:[.675,0,-.18],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.875,.278,.378],farmR:[-1.707,0,0],handR:[3.296,-1.252,-1.076],uarmL:[-1.507,-1.102,-.109],farmL:[-.1,0,0]},"lin",null]],L2R:[[0,{pelvis:[0,.338,0],torso:[.1,.413,0],head:[-.05,-.338,0],cloak:[.637,0,-.15],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[.25,1.539,-1.731],farmR:[-1.869,0,0],handR:[1.213,-1.012,.142],uarmL:[-3,.625,1.665],farmL:[-.101,0,0]},null,null],[.025,{pelvis:[0,.351,0],torso:[.112,.428,0],head:[-.056,-.351,0],cloak:[.645,0,-.156],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[.213,1.539,-1.746],farmR:[-1.84,0,0],handR:[1.206,-1.068,.13],uarmL:[-2.984,.628,1.672],farmL:[-.12,0,0]},"lin",null],[.05,{pelvis:[0,.357,0],torso:[.117,.437,0],head:[-.059,-.357,0],cloak:[.648,0,-.159],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[.187,1.544,-1.756],farmR:[-1.812,0,0],handR:[1.201,-1.095,.128],uarmL:[-2.962,.63,1.673],farmL:[-.149,0,0]},"lin",null],[.075,{pelvis:[0,.36,0],torso:[.12,.44,0],head:[-.06,-.36,0],cloak:[.65,0,-.16],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[.171,1.545,-1.756],farmR:[-1.792,0,0],handR:[1.194,-1.088,.126],uarmL:[-2.936,.639,1.675],farmL:[-.199,0,0]},"lin",null],[.1,{pelvis:[0,.36,0],torso:[.12,.44,0],head:[-.06,-.36,0],cloak:[.65,0,-.16],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[.146,1.536,-1.655],farmR:[-1.876,0,0],handR:[1.313,-.196,-.18],uarmL:[-2.9,.643,1.619],farmL:[-.237,0,0]},"lin",null],[.11,{pelvis:[0,.347,0],torso:[.122,.425,0],head:[-.061,-.347,0],cloak:[.643,0,-.154],thighR:[.259,0,-.122],shinR:[.409,0,0],thighL:[-.472,0,.122],shinL:[.472,0,0],rootY:-.129,footL:[.009,0,0],uarmR:[.162,1.536,-1.576],farmR:[-1.932,0,0],handR:[1.42,-.061,-.192],uarmL:[-2.907,.643,1.649],farmL:[-.305,0,0]},"lin",null],[.12,{pelvis:[0,.309,0],torso:[.128,.378,0],head:[-.064,-.309,0],cloak:[.622,0,-.138],thighR:[.287,0,-.128],shinR:[.438,0,0],thighL:[-.537,0,.128],shinL:[.537,0,0],rootY:-.155,footL:[.037,0,0],uarmR:[.159,1.492,-1.597],farmR:[-2.076,0,0],handR:[1.71,-.011,-.192],uarmL:[-2.943,.609,1.637],farmL:[-.421,0,0]},"lin",null],[.13,{pelvis:[0,.246,0],torso:[.137,.301,0],head:[-.068,-.246,0],cloak:[.587,0,-.109],thighR:[.334,0,-.137],shinR:[.484,0,0],thighL:[-.647,0,.137],shinL:[.647,0,0],rootY:-.199,footL:[.084,0,0],uarmR:[.116,1.538,-1.681],farmR:[-2.126,0,0],handR:[2.141,-.029,-.19],uarmL:[-2.944,.622,1.606],farmL:[-.744,0,0]},"lin",null],[.14,{pelvis:[0,.158,0],torso:[.15,.193,0],head:[-.075,-.158,0],cloak:[.537,0,-.07],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],rootY:-.26,footL:[.15,0,0],uarmR:[-.211,1.698,-1.836],farmR:[-1.77,0,0],handR:[2.685,-.1,-.083],uarmL:[-2.816,.753,1.496],farmL:[-1.653,0,0]},"lin",null],[.15,{pelvis:[0,.096,0],torso:[.163,.117,0],head:[-.081,-.096,0],cloak:[.528,0,-.042],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.425,1.754,-1.888],farmR:[-1.745,0,0],handR:[3.151,-.131,-.112],uarmL:[-2.922,.662,1.517],farmL:[-1.971,0,0]},"lin",null],[.16,{pelvis:[0,.034,0],torso:[.175,.041,0],head:[-.087,-.034,0],cloak:[.519,0,-.015],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.526,1.738,-1.901],farmR:[-1.703,0,0],handR:[3.4,-.131,-.123],uarmL:[-3,.57,1.565],farmL:[-2.069,0,0]},"lin",null],[.17,{pelvis:[0,-.028,0],torso:[.188,-.034,0],head:[-.094,.028,0],cloak:[.509,0,.013],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.585,1.651,-1.897],farmR:[-1.529,0,0],handR:[3.4,-.131,-.115],uarmL:[-2.973,.594,1.575],farmL:[-2.279,0,0]},"lin",null],[.18,{pelvis:[0,-.09,0],torso:[.2,-.11,0],head:[-.1,.09,0],cloak:[.5,0,.04],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.59,1.538,-1.88],farmR:[-1.453,0,0],handR:[3.4,-.113,-.105],uarmL:[-2.931,.631,1.582],farmL:[-2.3,0,0]},"lin",null],[.195,{pelvis:[0,-.233,0],torso:[.2,-.285,0],head:[-.1,.233,0],cloak:[.579,0,.104],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.241,1.507,-1.778],farmR:[-.152,0,0],handR:[3.521,-.036,-.052],uarmL:[-.413,1.6,1.642],farmL:[-2.317,0,0]},"lin",null],[.21,{pelvis:[0,-.307,0],torso:[.2,-.375,0],head:[-.1,.307,0],cloak:[.62,0,.136],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.159,1.414,-1.702],farmR:[-.088,0,0],handR:[3.605,.028,-.075],uarmL:[-.533,1.485,1.662],farmL:[-2.463,0,0]},"lin",null],[.225,{pelvis:[0,-.334,0],torso:[.2,-.408,0],head:[-.1,.334,0],cloak:[.635,0,.148],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.08,1.417,-1.697],farmR:[-.12,0,0],handR:[3.682,.031,-.08],uarmL:[-.61,1.404,1.618],farmL:[-2.519,0,0]},"lin",null],[.24,{pelvis:[0,-.338,0],torso:[.2,-.412,0],head:[-.1,.338,0],cloak:[.637,0,.15],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.117,1.386,-1.533],farmR:[-.209,0,0],handR:[3.821,-.039,.182],uarmL:[-.633,1.384,1.632],farmL:[-2.3,0,0]},"lin",null],[.2625,{pelvis:[0,-.377,0],torso:[.154,-.46,0],head:[-.077,.377,0],cloak:[.659,0,.167],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.948,1.28,-1.589],farmR:[-.12,0,0],handR:[3.821,.011,.231],uarmL:[-1.044,.978,1.665],farmL:[-2.031,0,0]},"lin",null],[.285,{pelvis:[0,-.397,0],torso:[.13,-.485,0],head:[-.065,.397,0],cloak:[.67,0,.176],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.959,1.185,-1.613],farmR:[-.12,0,0],handR:[3.958,.003,.278],uarmL:[-1.193,.819,1.686],farmL:[-1.74,0,0]},"lin",null],[.3075,{pelvis:[0,-.404,0],torso:[.121,-.494,0],head:[-.061,.404,0],cloak:[.674,0,.18],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.034,1.243,-1.923],farmR:[-.042,0,0],handR:[3.995,.156,.055],uarmL:[-1.146,.888,1.536],farmL:[-1.749,0,0]},"lin",null],[.33,{pelvis:[0,-.405,0],torso:[.12,-.495,0],head:[-.06,.405,0],cloak:[.675,0,.18],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.036,1.383,-1.789],farmR:[.091,0,0],handR:[4.028,.106,.169],uarmL:[-1.077,.943,1.554],farmL:[-1.787,0,0]},"lin",null]],HIGH_R_LOW_L:[[0,{pelvis:[0,-.27,0],torso:[-.05,-.33,0],head:[.025,.27,0],cloak:[.6,0,.12],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.657,-.136,-1.136],farmR:[-1.18,0,0],handR:[-.6,-1.18,.261],uarmL:[-1.029,-.056,.234],farmL:[-1.232,0,0]},null,null],[.025,{pelvis:[0,-.283,0],torso:[-.067,-.346,0],head:[.034,.283,0],cloak:[.607,0,.126],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.716,-.16,-1.114],farmR:[-1.154,0,0],handR:[-.561,-1.18,.342],uarmL:[-1.01,-.036,.233],farmL:[-1.299,0,0]},"lin",null],[.05,{pelvis:[0,-.29,0],torso:[-.076,-.354,0],head:[.038,.29,0],cloak:[.611,0,.129],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.75,-.18,-1.103],farmR:[-1.154,0,0],handR:[-.537,-1.188,.382],uarmL:[-.988,-.027,.231],farmL:[-1.361,0,0]},"lin",null],[.075,{pelvis:[0,-.292,0],torso:[-.08,-.357,0],head:[.04,.292,0],cloak:[.612,0,.13],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.766,-.188,-1.095],farmR:[-1.154,0,0],handR:[-.526,-1.188,.406],uarmL:[-.974,-.021,.231],farmL:[-1.401,0,0]},"lin",null],[.1,{pelvis:[0,-.293,0],torso:[-.08,-.358,0],head:[.04,.293,0],cloak:[.613,0,.13],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.792,-.174,-1.05],farmR:[-1.418,0,0],handR:[-.6,-.883,.9],uarmL:[-.655,.002,.238],farmL:[-1.986,0,0]},"lin",null],[.1125,{pelvis:[0,-.281,0],torso:[-.069,-.344,0],head:[.034,.281,0],cloak:[.606,0,.125],thighR:[.259,0,-.122],shinR:[.409,0,0],thighL:[-.472,0,.122],shinL:[.472,0,0],rootY:-.129,footL:[.009,0,0],uarmR:[-1.769,-.074,-1.047],farmR:[-1.486,0,0],handR:[-.6,-.866,.9],uarmL:[-.504,.076,.231],farmL:[-2.251,0,0]},"lin",null],[.125,{pelvis:[0,-.248,0],torso:[-.035,-.303,0],head:[.018,.248,0],cloak:[.588,0,.11],thighR:[.287,0,-.128],shinR:[.438,0,0],thighL:[-.537,0,.128],shinL:[.537,0,0],rootY:-.155,footL:[.037,0,0],uarmR:[-1.667,.224,-.935],farmR:[-1.485,0,0],handR:[-.6,-.82,.998],uarmL:[-.589,.277,.156],farmL:[-2.384,0,0]},"lin",null],[.1375,{pelvis:[0,-.191,0],torso:[.021,-.234,0],head:[-.011,.191,0],cloak:[.556,0,.085],thighR:[.334,0,-.137],shinR:[.484,0,0],thighL:[-.647,0,.137],shinL:[.647,0,0],rootY:-.199,footL:[.084,0,0],uarmR:[-1.722,.463,-.763],farmR:[-1.531,0,0],handR:[-.6,-.92,1.126],uarmL:[-1.526,.402,-.081],farmL:[-2.527,0,0]},"lin",null],[.15,{pelvis:[0,-.112,0],torso:[.1,-.138,0],head:[-.05,.112,0],cloak:[.512,0,.05],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],rootY:-.26,footL:[.15,0,0],uarmR:[-1.599,.34,-.719],farmR:[-1.802,0,0],handR:[-.6,-1.424,1.126],uarmL:[-2.172,.319,.554],farmL:[-2.527,0,0]},"lin",null],[.1625,{pelvis:[0,-.056,0],torso:[.15,-.069,0],head:[-.075,.056,0],cloak:[.512,0,.025],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.414,.563,-.716],farmR:[-2.017,0,0],handR:[-.711,-1.285,1.032],uarmL:[-2.571,.192,.928],farmL:[-2.3,0,0]},"lin",null],[.175,{pelvis:[0,0,0],torso:[.2,0,0],head:[-.1,0,0],cloak:[.512,0,0],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.109,.855,-.686],farmR:[-2.144,0,0],handR:[-.795,-1.124,1.064],uarmL:[-2.688,.18,1.185],farmL:[-2.267,0,0]},"lin",null],[.1875,{pelvis:[0,.056,0],torso:[.25,.069,0],head:[-.125,-.056,0],cloak:[.512,0,-.025],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.8,.977,-.607],farmR:[-2.277,0,0],handR:[-.929,-1.063,1.193],uarmL:[-2.703,.201,1.411],farmL:[-2.116,0,0]},"lin",null],[.2,{pelvis:[0,.113,0],torso:[.3,.138,0],head:[-.15,-.113,0],cloak:[.512,0,-.05],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.84,.916,-.384],farmR:[-2.3,0,0],handR:[-.887,-1.277,1.301],uarmL:[-2.682,.205,1.351],farmL:[-1.928,0,0]},"lin",null],[.215,{pelvis:[0,.23,0],torso:[.358,.281,0],head:[-.179,-.23,0],cloak:[.578,0,-.102],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.476,1.662,-.191],farmR:[-2.3,0,0],handR:[-.935,-.945,1.388],uarmL:[-2.84,.053,1.455],farmL:[-1.642,0,0]},"lin",null],[.23,{pelvis:[0,.29,0],torso:[.388,.354,0],head:[-.194,-.29,0],cloak:[.611,0,-.129],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.394,1.733,-.137],farmR:[-2.3,0,0],handR:[-.911,-1.115,1.419],uarmL:[-2.831,.051,1.443],farmL:[-1.515,0,0]},"lin",null],[.245,{pelvis:[0,.312,0],torso:[.398,.381,0],head:[-.199,-.312,0],cloak:[.623,0,-.139],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[.291,1.98,-.427],farmR:[-2.3,0,0],handR:[-.905,-1.264,1.488],uarmL:[-2.812,.067,1.661],farmL:[-1.432,0,0]},"lin",null],[.26,{pelvis:[0,.315,0],torso:[.4,.385,0],head:[-.2,-.315,0],cloak:[.625,0,-.14],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.347,1.511,-.048],farmR:[-2.407,0,0],handR:[-.839,-1.463,1.579],uarmL:[-2.771,.104,1.479],farmL:[-1.392,0,0]},"lin",null],[.2825,{pelvis:[0,.341,0],torso:[.342,.417,0],head:[-.171,-.341,0],cloak:[.639,0,-.152],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.249,1.765,-.027],farmR:[-2.459,0,0],handR:[-.831,-1.7,1.6],uarmL:[-2.746,.125,1.475],farmL:[-1.205,0,0]},"lin",null],[.305,{pelvis:[0,.354,0],torso:[.313,.433,0],head:[-.156,-.354,0],cloak:[.647,0,-.158],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.018,2.023,.01],farmR:[-2.603,0,0],handR:[-.834,-1.7,1.699],uarmL:[-2.775,.089,1.518],farmL:[-.937,0,0]},"lin",null],[.3275,{pelvis:[0,.359,0],torso:[.302,.439,0],head:[-.151,-.359,0],cloak:[.65,0,-.16],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[.031,2.03,-.09],farmR:[-2.662,0,0],handR:[-.975,-1.7,1.635],uarmL:[-2.775,.097,1.499],farmL:[-.836,0,0]},"lin",null],[.35,{pelvis:[0,.36,0],torso:[.3,.44,0],head:[-.15,-.36,0],cloak:[.65,0,-.16],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[.159,1.943,-.234],farmR:[-2.687,0,0],handR:[-1.097,-1.751,1.735],uarmL:[-2.775,.128,1.508],farmL:[-.79,0,0]},"lin",null]],HIGH_L_LOW_R:[[0,{pelvis:[0,.27,0],torso:[-.05,.33,0],head:[.025,-.27,0],cloak:[.6,0,-.12],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.536,.418,.026],farmR:[-1.163,0,0],handR:[2.471,-1.429,.773],uarmL:[-1.572,-.724,-.224],farmL:[-.1,0,0]},null,null],[.025,{pelvis:[0,.283,0],torso:[-.067,.346,0],head:[.034,-.283,0],cloak:[.607,0,-.126],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.572,.408,.037],farmR:[-1.17,0,0],handR:[2.47,-1.432,.694],uarmL:[-1.59,-.757,-.222],farmL:[-.1,0,0]},"lin",null],[.05,{pelvis:[0,.29,0],torso:[-.076,.354,0],head:[.038,-.29,0],cloak:[.611,0,-.129],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.602,.404,.036],farmR:[-1.166,0,0],handR:[2.464,-1.432,.645],uarmL:[-1.599,-.777,-.22],farmL:[-.109,0,0]},"lin",null],[.075,{pelvis:[0,.292,0],torso:[-.08,.357,0],head:[.04,-.292,0],cloak:[.612,0,-.13],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.612,.399,.036],farmR:[-1.16,0,0],handR:[2.462,-1.432,.635],uarmL:[-1.606,-.783,-.221],farmL:[-.105,0,0]},"lin",null],[.1,{pelvis:[0,.293,0],torso:[-.08,.358,0],head:[.04,-.293,0],cloak:[.613,0,-.13],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.467,.417,-.01],farmR:[-1.723,0,0],handR:[1.926,-.412,.9],uarmL:[-1.653,-.895,-.205],farmL:[-.103,0,0]},"lin",null],[.1125,{pelvis:[0,.281,0],torso:[-.069,.344,0],head:[.034,-.281,0],cloak:[.606,0,-.125],thighR:[.259,0,-.122],shinR:[.409,0,0],thighL:[-.472,0,.122],shinL:[.472,0,0],rootY:-.129,footL:[.009,0,0],uarmR:[-1.397,.421,-.048],farmR:[-1.779,0,0],handR:[1.758,-.156,.9],uarmL:[-1.635,-.906,-.204],farmL:[-.1,0,0]},"lin",null],[.125,{pelvis:[0,.248,0],torso:[-.035,.303,0],head:[.018,-.248,0],cloak:[.588,0,-.11],thighR:[.287,0,-.128],shinR:[.438,0,0],thighL:[-.537,0,.128],shinL:[.537,0,0],rootY:-.155,footL:[.037,0,0],uarmR:[-1.377,.36,-.126],farmR:[-1.914,0,0],handR:[1.844,-.012,.885],uarmL:[-1.64,-1.024,-.187],farmL:[-.1,0,0]},"lin",null],[.1375,{pelvis:[0,.191,0],torso:[.021,.234,0],head:[-.011,-.191,0],cloak:[.556,0,-.085],thighR:[.334,0,-.137],shinR:[.484,0,0],thighL:[-.647,0,.137],shinL:[.647,0,0],rootY:-.199,footL:[.084,0,0],uarmR:[-1.497,.329,-.299],farmR:[-2.052,0,0],handR:[2.321,.023,.9],uarmL:[-1.654,-1.26,-.144],farmL:[-.161,0,0]},"lin",null],[.15,{pelvis:[0,.112,0],torso:[.1,.138,0],head:[-.05,-.112,0],cloak:[.512,0,-.05],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],rootY:-.26,footL:[.15,0,0],uarmR:[-1.759,.605,-.569],farmR:[-1.661,0,0],handR:[2.862,.286,.529],uarmL:[-1.111,-1.571,-.055],farmL:[-1.46,0,0]},"lin",null],[.1625,{pelvis:[0,.056,0],torso:[.15,.069,0],head:[-.075,-.056,0],cloak:[.512,0,-.025],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.754,.73,-.793],farmR:[-1.624,0,0],handR:[3.172,.388,.42],uarmL:[-.938,-1.6,.565],farmL:[-1.904,0,0]},"lin",null],[.175,{pelvis:[0,0,0],torso:[.2,0,0],head:[-.1,0,0],cloak:[.512,0,0],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.764,.73,-.979],farmR:[-1.569,0,0],handR:[3.4,.401,.266],uarmL:[-1.013,-1.6,1.052],farmL:[-2.083,0,0]},"lin",null],[.1875,{pelvis:[0,-.056,0],torso:[.25,-.069,0],head:[-.125,.056,0],cloak:[.512,0,.025],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.686,.733,-1.113],farmR:[-1.498,0,0],handR:[3.5,.427,.091],uarmL:[-1.025,-1.6,1.285],farmL:[-2.265,0,0]},"lin",null],[.2,{pelvis:[0,-.113,0],torso:[.3,-.138,0],head:[-.15,.113,0],cloak:[.512,0,.05],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.593,.711,-1.246],farmR:[-1.432,0,0],handR:[3.55,.32,.065],uarmL:[-1.026,-1.6,1.365],farmL:[-2.3,0,0]},"lin",null],[.215,{pelvis:[0,-.23,0],torso:[.358,-.281,0],head:[-.179,.23,0],cloak:[.578,0,.102],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.99,1.483,-.402],farmR:[-1.161,0,0],handR:[3.604,1.34,.123],uarmL:[-1.849,-1.6,1.778],farmL:[-2.3,0,0]},"lin",null],[.23,{pelvis:[0,-.29,0],torso:[.388,-.354,0],head:[-.194,.29,0],cloak:[.611,0,.129],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.902,1.427,-.181],farmR:[-1.119,0,0],handR:[3.658,1.566,-.031],uarmL:[-2.184,-1.6,2],farmL:[-2.326,0,0]},"lin",null],[.245,{pelvis:[0,-.312,0],torso:[.398,-.381,0],head:[-.199,.312,0],cloak:[.623,0,.139],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.923,1.357,-.234],farmR:[-1.087,0,0],handR:[3.71,1.493,-.069],uarmL:[-2.312,-1.6,2],farmL:[-2.466,0,0]},"lin",null],[.26,{pelvis:[0,-.315,0],torso:[.4,-.385,0],head:[-.2,.315,0],cloak:[.625,0,.14],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.929,1.354,-.239],farmR:[-.994,0,0],handR:[3.71,1.348,.059],uarmL:[-2.367,-1.6,2],farmL:[-2.466,0,0]},"lin",null],[.2825,{pelvis:[0,-.341,0],torso:[.342,-.417,0],head:[-.171,.341,0],cloak:[.639,0,.152],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.937,1.096,.214],farmR:[-1.057,0,0],handR:[3.8,1.7,.109],uarmL:[-3,-1.6,2],farmL:[-2.489,0,0]},"lin",null],[.305,{pelvis:[0,-.354,0],torso:[.313,-.433,0],head:[-.156,.354,0],cloak:[.647,0,.158],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.785,.977,.282],farmR:[-1.276,0,0],handR:[3.907,1.7,.197],uarmL:[-3,-1.6,2.062],farmL:[-2.411,0,0]},"lin",null],[.3275,{pelvis:[0,-.359,0],torso:[.302,-.439,0],head:[-.151,.359,0],cloak:[.65,0,.16],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.677,.868,.3],farmR:[-1.457,0,0],handR:[3.879,1.7,.281],uarmL:[-3,-1.6,2.056],farmL:[-2.517,0,0]},"lin",null],[.35,{pelvis:[0,-.36,0],torso:[.3,-.44,0],head:[-.15,.36,0],cloak:[.65,0,.16],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.831,.978,.34],farmR:[-1.375,0,0],handR:[3.994,1.7,.345],uarmL:[-3,-1.646,.321],farmL:[-2.386,0,0]},"lin",null]],LOW_R_HIGH_L:[[0,{pelvis:[0,-.248,0],torso:[.3,-.303,0],head:[-.15,.248,0],cloak:[.588,0,.11],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.232,.593,-2.4],farmR:[-2.22,0,0],handR:[-.545,.456,-.469],uarmL:[-.976,-.124,.747],farmL:[-1.951,0,0]},null,null],[.025,{pelvis:[0,-.261,0],torso:[.312,-.318,0],head:[-.156,.261,0],cloak:[.595,0,.116],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.201,.555,-2.398],farmR:[-2.241,0,0],handR:[-.545,.515,-.467],uarmL:[-1,-.152,.757],farmL:[-1.928,0,0]},"lin",null],[.05,{pelvis:[0,-.267,0],torso:[.318,-.327,0],head:[-.159,.267,0],cloak:[.598,0,.119],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.194,.516,-2.383],farmR:[-2.257,0,0],handR:[-.545,.562,-.468],uarmL:[-1.009,-.179,.772],farmL:[-1.911,0,0]},"lin",null],[.075,{pelvis:[0,-.27,0],torso:[.32,-.33,0],head:[-.16,.27,0],cloak:[.6,0,.12],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.213,.485,-2.338],farmR:[-2.264,0,0],handR:[-.543,.629,-.405],uarmL:[-.993,-.201,.799],farmL:[-1.889,0,0]},"lin",null],[.1,{pelvis:[0,-.27,0],torso:[.32,-.33,0],head:[-.16,.27,0],cloak:[.6,0,.12],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.489,.36,-2.347],farmR:[-2.236,0,0],handR:[-.6,.426,-.891],uarmL:[-.936,-.182,.811],farmL:[-2.021,0,0]},"lin",null],[.1125,{pelvis:[0,-.259,0],torso:[.313,-.316,0],head:[-.156,.259,0],cloak:[.594,0,.115],thighR:[-.819,0,-.216],shinR:[1.441,0,0],thighL:[.184,0,.291],shinL:[1.081,0,0],rootY:-.485,footL:[.009,0,0],uarmR:[-.613,.417,-2.371],farmR:[-2.149,0,0],handR:[-.6,.412,-.9],uarmL:[-.81,-.116,.827],farmL:[-2.134,0,0]},"lin",null],[.125,{pelvis:[0,-.225,0],torso:[.29,-.275,0],head:[-.145,.225,0],cloak:[.575,0,.1],thighR:[-.575,0,-.203],shinR:[1.262,0,0],thighL:[-.013,0,.263],shinL:[1.025,0,0],rootY:-.44,footL:[.037,0,0],uarmR:[-.838,.576,-2.4],farmR:[-2.008,0,0],handR:[-.6,.436,-.859],uarmL:[-.512,-.003,.863],farmL:[-2.3,0,0]},"lin",null],[.1375,{pelvis:[0,-.169,0],torso:[.253,-.206,0],head:[-.126,.169,0],cloak:[.544,0,.075],thighR:[-.169,0,-.181],shinR:[.966,0,0],thighL:[-.341,0,.216],shinL:[.931,0,0],rootY:-.365,footL:[.084,0,0],uarmR:[-1.242,.687,-2.4],farmR:[-1.907,0,0],handR:[-.6,.637,-.692],uarmL:[.778,.112,.324],farmL:[-2.369,0,0]},"lin",null],[.15,{pelvis:[0,-.09,0],torso:[.2,-.11,0],head:[-.1,.09,0],cloak:[.5,0,.04],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],rootY:-.26,footL:[.15,0,0],uarmR:[-1.185,.795,-2.523],farmR:[-2.07,0,0],handR:[-.6,1.059,-.583],uarmL:[1,1.6,.548],farmL:[-2.3,0,0]},"lin",null],[.1625,{pelvis:[0,-.034,0],torso:[.15,-.041,0],head:[-.075,.034,0],cloak:[.506,0,.015],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.237,1.042,-2.511],farmR:[-2.294,0,0],handR:[-.6,.927,-.371],uarmL:[1.077,1.674,.904],farmL:[-1.74,0,0]},"lin",null],[.175,{pelvis:[0,.023,0],torso:[.1,.027,0],head:[-.05,-.023,0],cloak:[.512,0,-.01],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.231,1.109,-2.643],farmR:[-2.3,0,0],handR:[-.693,.95,-.442],uarmL:[1.135,1.715,.871],farmL:[-1.465,0,0]},"lin",null],[.1875,{pelvis:[0,.079,0],torso:[.05,.096,0],head:[-.025,-.079,0],cloak:[.519,0,-.035],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.307,1.354,-2.733],farmR:[-2.368,0,0],handR:[-.6,.94,-.335],uarmL:[1.051,1.743,.897],farmL:[-1.016,0,0]},"lin",null],[.2,{pelvis:[0,.135,0],torso:[0,.165,0],head:[0,-.135,0],cloak:[.525,0,-.06],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.308,1.49,-2.814],farmR:[-2.43,0,0],handR:[-.6,.969,-.294],uarmL:[1.054,1.871,.936],farmL:[-.923,0,0]},"lin",null],[.215,{pelvis:[0,.239,0],torso:[-.087,.292,0],head:[.043,-.239,0],cloak:[.583,0,-.106],thighR:[.313,0,-.133],shinR:[.463,0,0],thighL:[-.598,0,.133],shinL:[.598,0,0],footL:[.063,0,0],rootY:-.179,uarmR:[-.164,.457,-2.035],farmR:[-2.3,0,0],handR:[1.817,-.519,-.899],uarmL:[-1.008,-1.358,.494],farmL:[-.747,0,0]},"lin",null],[.23,{pelvis:[0,.292,0],torso:[-.131,.358,0],head:[.066,-.292,0],cloak:[.613,0,-.13],thighR:[.269,0,-.124],shinR:[.419,0,0],thighL:[-.494,0,.124],shinL:[.494,0,0],footL:[.019,0,0],rootY:-.138,uarmR:[-.135,.647,-1.956],farmR:[-2.256,0,0],handR:[1.577,-.577,-.855],uarmL:[-1.161,-1.313,.522],farmL:[-.409,0,0]},"lin",null],[.245,{pelvis:[0,.312,0],torso:[-.148,.382,0],head:[.074,-.312,0],cloak:[.623,0,-.139],thighR:[.252,0,-.12],shinR:[.402,0,0],thighL:[-.455,0,.12],shinL:[.455,0,0],footL:[.002,0,0],rootY:-.122,uarmR:[-.199,.654,-1.971],farmR:[-2.027,0,0],handR:[1.381,-.555,-.779],uarmL:[-1.309,-1.176,.563],farmL:[-.206,0,0]},"lin",null],[.26,{pelvis:[0,.315,0],torso:[-.15,.385,0],head:[.075,-.315,0],cloak:[.625,0,-.14],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],footL:[0,0,0],rootY:-.12,uarmR:[-.173,.692,-1.961],farmR:[-1.972,0,0],handR:[1.255,-.681,-.72],uarmL:[-1.369,-1.148,.575],farmL:[-.1,0,0]},"lin",null],[.2825,{pelvis:[0,.328,0],torso:[-.121,.401,0],head:[.061,-.328,0],cloak:[.632,0,-.146],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-.083,.808,-1.986],farmR:[-1.993,0,0],handR:[.995,-.754,-.702],uarmL:[-1.388,-1.047,.594],farmL:[-.1,0,0]},"lin",null],[.305,{pelvis:[0,.335,0],torso:[-.106,.409,0],head:[.053,-.335,0],cloak:[.636,0,-.149],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[0,.925,-2.033],farmR:[-1.935,0,0],handR:[.821,-.852,-.628],uarmL:[-1.435,-.953,.606],farmL:[-.1,0,0]},"lin",null],[.3275,{pelvis:[0,.337,0],torso:[-.101,.412,0],head:[.05,-.337,0],cloak:[.637,0,-.15],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[.065,.996,-2.061],farmR:[-1.909,0,0],handR:[.798,-.832,-.621],uarmL:[-1.479,-.908,.609],farmL:[-.1,0,0]},"lin",null],[.35,{pelvis:[0,.338,0],torso:[-.1,.413,0],head:[.05,-.338,0],cloak:[.637,0,-.15],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[.056,.998,-2.067],farmR:[-1.899,0,0],handR:[.798,-.824,-.632],uarmL:[-1.485,-.897,.61],farmL:[-.1,0,0]},"lin",null]],LOW_L_HIGH_R:[[0,{pelvis:[0,.248,0],torso:[.3,.303,0],head:[-.15,-.248,0],cloak:[.588,0,-.11],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.161,.906,-.673],farmR:[-1.263,0,0],handR:[2.783,-1.523,-.25],uarmL:[-.125,-1.406,2],farmL:[-1.496,0,0]},null,null],[.025,{pelvis:[0,.261,0],torso:[.312,.318,0],head:[-.156,-.261,0],cloak:[.595,0,-.116],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.168,.936,-.671],farmR:[-1.181,0,0],handR:[2.767,-1.507,-.237],uarmL:[-.099,-1.386,1.999],farmL:[-1.546,0,0]},"lin",null],[.05,{pelvis:[0,.267,0],torso:[.318,.327,0],head:[-.159,-.267,0],cloak:[.598,0,-.119],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.163,.951,-.679],farmR:[-1.151,0,0],handR:[2.748,-1.507,-.233],uarmL:[-.089,-1.377,1.99],farmL:[-1.575,0,0]},"lin",null],[.075,{pelvis:[0,.27,0],torso:[.32,.33,0],head:[-.16,-.27,0],cloak:[.6,0,-.12],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.161,.957,-.679],farmR:[-1.134,0,0],handR:[2.744,-1.507,-.23],uarmL:[-.082,-1.371,1.985],farmL:[-1.589,0,0]},"lin",null],[.1,{pelvis:[0,.27,0],torso:[.32,.33,0],head:[-.16,-.27,0],cloak:[.6,0,-.12],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.14,.96,-.675],farmR:[-1.007,0,0],handR:[2.687,-1.693,-.477],uarmL:[-.063,-1.363,1.97],farmL:[-1.591,0,0]},"lin",null],[.1125,{pelvis:[0,.259,0],torso:[.313,.316,0],head:[-.156,-.259,0],cloak:[.594,0,-.115],thighR:[-.819,0,-.216],shinR:[1.441,0,0],thighL:[.184,0,.291],shinL:[1.081,0,0],rootY:-.485,footL:[.009,0,0],uarmR:[-1.03,.91,-.643],farmR:[-1.206,0,0],handR:[2.647,-1.7,-.587],uarmL:[-.146,-1.419,1.929],farmL:[-1.512,0,0]},"lin",null],[.125,{pelvis:[0,.225,0],torso:[.29,.275,0],head:[-.145,-.225,0],cloak:[.575,0,-.1],thighR:[-.575,0,-.203],shinR:[1.262,0,0],thighL:[-.013,0,.263],shinL:[1.025,0,0],rootY:-.44,footL:[.037,0,0],uarmR:[-.845,.753,-.546],farmR:[-1.521,0,0],handR:[2.584,-1.679,-.726],uarmL:[-.335,-1.545,1.809],farmL:[-1.279,0,0]},"lin",null],[.1375,{pelvis:[0,.169,0],torso:[.253,.206,0],head:[-.126,-.169,0],cloak:[.544,0,-.075],thighR:[-.169,0,-.181],shinR:[.966,0,0],thighL:[-.341,0,.216],shinL:[.931,0,0],rootY:-.365,footL:[.084,0,0],uarmR:[-.636,.555,-.432],farmR:[-1.772,0,0],handR:[2.417,-1.669,-.79],uarmL:[-.602,-1.6,1.617],farmL:[-1.065,0,0]},"lin",null],[.15,{pelvis:[0,.09,0],torso:[.2,.11,0],head:[-.1,-.09,0],cloak:[.5,0,-.04],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],rootY:-.26,footL:[.15,0,0],uarmR:[-.605,.641,-.492],farmR:[-1.723,0,0],handR:[2,-1.452,-.701],uarmL:[-.483,-1.6,1.239],farmL:[-1.469,0,0]},"lin",null],[.1625,{pelvis:[0,.034,0],torso:[.15,.041,0],head:[-.075,-.034,0],cloak:[.506,0,-.015],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.459,.751,-.461],farmR:[-2.018,0,0],handR:[1.685,-1.455,-.9],uarmL:[-.458,-1.6,.742],farmL:[-1.705,0,0]},"lin",null],[.175,{pelvis:[0,-.023,0],torso:[.1,-.027,0],head:[-.05,.023,0],cloak:[.512,0,.01],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.301,.915,-.378],farmR:[-2.134,0,0],handR:[1.365,-1.337,-.9],uarmL:[-.177,-1.6,-.02],farmL:[-1.846,0,0]},"lin",null],[.1875,{pelvis:[0,-.079,0],torso:[.05,-.096,0],head:[-.025,.079,0],cloak:[.519,0,.035],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.404,1.003,-.143],farmR:[-2.051,0,0],handR:[1.34,-.911,-.9],uarmL:[.215,-1.6,-.295],farmL:[-2.136,0,0]},"lin",null],[.2,{pelvis:[0,-.135,0],torso:[0,-.165,0],head:[0,.135,0],cloak:[.525,0,.06],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.608,.963,-.079],farmR:[-1.854,0,0],handR:[1.26,-.746,-.88],uarmL:[.52,-1.543,-.171],farmL:[-2.3,0,0]},"lin",null],[.215,{pelvis:[0,-.239,0],torso:[-.087,-.292,0],head:[.043,.239,0],cloak:[.583,0,.106],thighR:[.313,0,-.133],shinR:[.463,0,0],thighL:[-.598,0,.133],shinL:[.598,0,0],footL:[.063,0,0],rootY:-.179,uarmR:[-.876,1.122,.3],farmR:[-1.355,0,0],handR:[.332,-.469,-.9],uarmL:[1,-.54,.679],farmL:[-2.3,0,0]},"lin",null],[.23,{pelvis:[0,-.292,0],torso:[-.131,-.358,0],head:[.066,.292,0],cloak:[.613,0,.13],thighR:[.269,0,-.124],shinR:[.419,0,0],thighL:[-.494,0,.124],shinL:[.494,0,0],footL:[.019,0,0],rootY:-.138,uarmR:[-1.179,1.004,.3],farmR:[-.913,0,0],handR:[-.148,-.653,-.915],uarmL:[.767,-.691,1.16],farmL:[-2.001,0,0]},"lin",null],[.245,{pelvis:[0,-.312,0],torso:[-.148,-.382,0],head:[.074,.312,0],cloak:[.623,0,.139],thighR:[.252,0,-.12],shinR:[.402,0,0],thighL:[-.455,0,.12],shinL:[.455,0,0],footL:[.002,0,0],rootY:-.122,uarmR:[-1.318,.957,.299],farmR:[-.757,0,0],handR:[-.233,-.657,-.798],uarmL:[.643,-.793,1.347],farmL:[-1.814,0,0]},"lin",null],[.26,{pelvis:[0,-.315,0],torso:[-.15,-.385,0],head:[.075,.315,0],cloak:[.625,0,.14],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],footL:[0,0,0],rootY:-.12,uarmR:[-1.34,.936,.285],farmR:[-.723,0,0],handR:[-.266,-.699,-.875],uarmL:[.604,-.83,1.351],farmL:[-1.752,0,0]},"lin",null],[.2825,{pelvis:[0,-.328,0],torso:[-.121,-.401,0],head:[.061,.328,0],cloak:[.632,0,.146],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.457,.945,.3],farmR:[-.6,0,0],handR:[-.6,-.739,-.9],uarmL:[.474,-.936,1.463],farmL:[-1.52,0,0]},"lin",null],[.305,{pelvis:[0,-.335,0],torso:[-.106,-.409,0],head:[.053,.335,0],cloak:[.636,0,.149],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.532,.915,.3],farmR:[-.531,0,0],handR:[-.731,-.745,-.9],uarmL:[.377,-1.04,1.537],farmL:[-1.319,0,0]},"lin",null],[.3275,{pelvis:[0,-.337,0],torso:[-.101,-.412,0],head:[.05,.337,0],cloak:[.637,0,.15],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.556,.915,.219],farmR:[-.531,0,0],handR:[-.731,-.745,-.871],uarmL:[.342,-1.04,1.593],farmL:[-1.261,0,0]},"lin",null],[.35,{pelvis:[0,-.338,0],torso:[-.1,-.413,0],head:[.05,.338,0],cloak:[.637,0,.15],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.556,.914,.217],farmR:[-.542,0,0],handR:[-.731,-.745,-.885],uarmL:[.328,-1.043,1.599],farmL:[-1.243,0,0]},"lin",null]],LOW_SWEEP:[[0,{pelvis:[0,-.315,0],torso:[.4,-.385,0],head:[-.2,.315,0],cloak:[.625,0,.14],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.041,.268,-2.342],farmR:[-2.214,0,0],handR:[-.548,.981,-.094],uarmL:[.285,-.144,-.399],farmL:[-2.3,0,0]},null,null],[.025,{pelvis:[0,-.328,0],torso:[.412,-.401,0],head:[-.206,.328,0],cloak:[.632,0,.146],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.986,.286,-2.376],farmR:[-2.21,0,0],handR:[-.544,.959,-.214],uarmL:[.267,-.188,-.4],farmL:[-2.352,0,0]},"lin",null],[.05,{pelvis:[0,-.335,0],torso:[.417,-.409,0],head:[-.209,.335,0],cloak:[.636,0,.149],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.96,.286,-2.382],farmR:[-2.215,0,0],handR:[-.544,.977,-.223],uarmL:[.237,-.219,-.4],farmL:[-2.352,0,0]},"lin",null],[.075,{pelvis:[0,-.337,0],torso:[.42,-.412,0],head:[-.21,.337,0],cloak:[.637,0,.15],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.914,.317,-2.373],farmR:[-2.234,0,0],handR:[-.557,.933,-.278],uarmL:[.247,-.263,-.4],farmL:[-2.442,0,0]},"lin",null],[.1,{pelvis:[0,-.338,0],torso:[.42,-.413,0],head:[-.21,.338,0],cloak:[.637,0,.15],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.138,.21,-2.4],farmR:[-2.203,0,0],handR:[-.6,.768,-.63],uarmL:[.362,-.313,-.4],farmL:[-2.442,0,0]},"lin",null],[.1125,{pelvis:[0,-.325,0],torso:[.42,-.397,0],head:[-.21,.325,0],cloak:[.63,0,.144],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.167,.278,-2.4],farmR:[-2.182,0,0],handR:[-.6,.74,-.62],uarmL:[.547,-.311,-.346],farmL:[-2.568,0,0]},"lin",null],[.125,{pelvis:[0,-.287,0],torso:[.42,-.351,0],head:[-.21,.287,0],cloak:[.609,0,.128],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.23,.43,-2.464],farmR:[-2.11,0,0],handR:[-.6,.719,-.627],uarmL:[.885,-.323,-.234],farmL:[-2.558,0,0]},"lin",null],[.1375,{pelvis:[0,-.224,0],torso:[.42,-.273,0],head:[-.21,.224,0],cloak:[.574,0,.099],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.205,.595,-2.523],farmR:[-2.17,0,0],handR:[-.642,.733,-.626],uarmL:[1,-.786,-.385],farmL:[-2.567,0,0]},"lin",null],[.15,{pelvis:[0,-.135,0],torso:[.42,-.165,0],head:[-.21,.135,0],cloak:[.525,0,.06],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.33,.69,-2.484],farmR:[-2.3,0,0],handR:[-.703,.79,-.428],uarmL:[.691,-1.6,-.4],farmL:[-2.293,0,0]},"lin",null],[.1625,{pelvis:[0,-.073,0],torso:[.42,-.089,0],head:[-.21,.073,0],cloak:[.522,0,.033],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.379,.737,-2.4],farmR:[-2.436,0,0],handR:[-.756,.756,-.288],uarmL:[.411,-1.613,-.456],farmL:[-2.097,0,0]},"lin",null],[.175,{pelvis:[0,-.011,0],torso:[.42,-.014,0],head:[-.21,.011,0],cloak:[.519,0,.005],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.402,.772,-2.4],farmR:[-2.469,0,0],handR:[-.876,.753,-.273],uarmL:[.127,-1.72,-.4],farmL:[-1.898,0,0]},"lin",null],[.1875,{pelvis:[0,.051,0],torso:[.42,.062,0],head:[-.21,-.051,0],cloak:[.516,0,-.023],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.506,.917,-2.4],farmR:[-2.3,0,0],handR:[-.979,.691,-.301],uarmL:[-.007,-1.836,-.4],farmL:[-1.67,0,0]},"lin",null],[.2,{pelvis:[0,.112,0],torso:[.42,.137,0],head:[-.21,-.112,0],cloak:[.512,0,-.05],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[.328,.995,-.337],farmR:[-2.145,0,0],handR:[.294,-1.613,-.129],uarmL:[.294,-1.6,-.171],farmL:[-1.867,0,0]},"lin",null],[.2175,{pelvis:[0,.256,0],torso:[.408,.312,0],head:[-.204,-.256,0],cloak:[.592,0,-.114],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[.859,1.379,-.441],farmR:[-2.3,0,0],handR:[.711,-1.676,.121],uarmL:[-.409,-1.6,-.377],farmL:[-1.114,0,0]},"lin",null],[.235,{pelvis:[0,.329,0],torso:[.403,.402,0],head:[-.201,-.329,0],cloak:[.633,0,-.146],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[.737,1.289,-.555],farmR:[-2.233,0,0],handR:[1.128,-1.712,.081],uarmL:[-.71,-1.491,-.38],farmL:[-.685,0,0]},"lin",null],[.2525,{pelvis:[0,.356,0],torso:[.4,.435,0],head:[-.2,-.356,0],cloak:[.648,0,-.158],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[.333,.858,-.649],farmR:[-2.104,0,0],handR:[1.609,-1.836,-.01],uarmL:[-.889,-1.377,-.353],farmL:[-.484,0,0]},"lin",null],[.27,{pelvis:[0,.36,0],torso:[.4,.44,0],head:[-.2,-.36,0],cloak:[.65,0,-.16],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.181,.185,-.218],farmR:[-1.921,0,0],handR:[2.326,-1.836,-.408],uarmL:[-1.086,-1.306,-.349],farmL:[-.347,0,0]},"lin",null],[.2925,{pelvis:[0,.386,0],torso:[.371,.472,0],head:[-.186,-.386,0],cloak:[.664,0,-.172],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.313,.165,-.179],farmR:[-1.927,0,0],handR:[2.664,-1.836,-.591],uarmL:[-1.274,-1.233,-.342],farmL:[-.175,0,0]},"lin",null],[.315,{pelvis:[0,.399,0],torso:[.356,.488,0],head:[-.178,-.399,0],cloak:[.672,0,-.178],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.393,.239,-.179],farmR:[-1.894,0,0],handR:[2.75,-1.848,-.656],uarmL:[-1.348,-1.169,-.336],farmL:[-.1,0,0]},"lin",null],[.3375,{pelvis:[0,.404,0],torso:[.351,.494,0],head:[-.175,-.404,0],cloak:[.675,0,-.18],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.437,.27,-.182],farmR:[-1.873,0,0],handR:[2.779,-1.848,-.666],uarmL:[-1.363,-1.142,-.328],farmL:[-.1,0,0]},"lin",null],[.36,{pelvis:[0,.405,0],torso:[.35,.495,0],head:[-.175,-.405,0],cloak:[.675,0,-.18],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.449,.282,-.182],farmR:[-1.86,0,0],handR:[2.779,-1.848,-.667],uarmL:[-1.364,-1.131,-.335],farmL:[-.1,0,0]},"lin",null]],SPIN:[[0,{pelvis:[0,-.068,0],torso:[.08,-.083,0],head:[-.04,.068,0],cloak:[.487,0,.03],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.639,.099,-.113],farmR:[-2.028,0,0],handR:[2.696,1.7,.9],uarmL:[-.182,-1.156,.141],farmL:[-2.142,0,0]},null,null]],SPIN_REV:[[0,{pelvis:[0,.068,0],torso:[.08,.083,0],head:[-.04,-.068,0],cloak:[.487,0,-.03],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-2.441,.046,-1.468],farmR:[-.863,0,0],handR:[2.218,.163,-.001],uarmL:[-1.521,.07,1.516],farmL:[-2.3,0,0]},null,null]],RELEASE:[[.06,{pelvis:[0,-.248,0],torso:[.25,-.303,0],head:[-.125,.248,0],cloak:[.588,0,.11],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[1,-1.199,.3],farmR:[-2.3,0,0],handR:[1.893,1.204,-.463],uarmL:[.466,-1.159,-.24],farmL:[-2.057,0,0]},null,null],[.075,{pelvis:[0,-.23,0],torso:[.234,-.281,0],head:[-.117,.23,0],cloak:[.578,0,.102],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[1,-1.075,.3],farmR:[-2.425,0,0],handR:[1.995,1.259,-.411],uarmL:[.456,-1.206,-.302],farmL:[-2.108,0,0]},"lin",null],[.09,{pelvis:[0,-.191,0],torso:[.2,-.234,0],head:[-.1,.191,0],cloak:[.556,0,.085],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[1,-.92,.441],farmR:[-2.408,0,0],handR:[2.042,1.511,-.54],uarmL:[.512,-1.21,-.282],farmL:[-2.086,0,0]},"lin",null],[.105,{pelvis:[0,-.153,0],torso:[.166,-.186,0],head:[-.083,.153,0],cloak:[.535,0,.068],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[.932,-.777,.482],farmR:[-2.457,0,0],handR:[2.061,1.66,-.496],uarmL:[.477,-1.241,-.343],farmL:[-2.032,0,0]},"lin",null],[.12,{pelvis:[0,-.135,0],torso:[.15,-.165,0],head:[-.075,.135,0],cloak:[.525,0,.06],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[.874,-.742,.529],farmR:[-2.594,0,0],handR:[2.005,1.7,-.309],uarmL:[.393,-1.313,-.4],farmL:[-2.06,0,0]},"lin",null]],HEAVY_FOLLOW:[[.06,{pelvis:[0,.27,0],torso:[.35,.33,0],head:[-.175,-.27,0],cloak:[.6,0,-.12],thighR:[-.65,0,-.38],shinR:[.95,0,0],thighL:[.45,0,.38],shinL:[.85,0,0],footR:[-.25,0,0],rootY:-.42,uarmR:[-1.458,1.734,-.206],farmR:[-2.3,0,0],handR:[-.493,-1.527,.864],uarmL:[-1.7,-1.595,.858],farmL:[-.585,0,0]},null,null],[.09,{pelvis:[0,.335,0],torso:[.35,.409,0],head:[-.175,-.335,0],cloak:[.636,0,-.149],thighR:[-.65,0,-.38],shinR:[.95,0,0],thighL:[.45,0,.38],shinL:[.85,0,0],footR:[-.25,0,0],rootY:-.42,uarmR:[-1.56,2.053,-.243],farmR:[-2.393,0,0],handR:[-.6,-1.474,.597],uarmL:[-1.795,-1.527,.775],farmL:[-.284,0,0]},"lin",null],[.12,{pelvis:[0,.368,0],torso:[.35,.45,0],head:[-.175,-.368,0],cloak:[.655,0,-.164],thighR:[-.65,0,-.38],shinR:[.95,0,0],thighL:[.45,0,.38],shinL:[.85,0,0],footR:[-.25,0,0],rootY:-.42,uarmR:[-1.719,2.153,-.052],farmR:[-2.432,0,0],handR:[-.6,-1.681,.374],uarmL:[-1.878,-1.403,.675],farmL:[-.133,0,0]},"lin",null],[.15,{pelvis:[0,.381,0],torso:[.35,.465,0],head:[-.175,-.381,0],cloak:[.662,0,-.169],thighR:[-.65,0,-.38],shinR:[.95,0,0],thighL:[.45,0,.38],shinL:[.85,0,0],footR:[-.25,0,0],rootY:-.42,uarmR:[-1.879,2.184,.157],farmR:[-2.521,0,0],handR:[-.71,-1.642,.471],uarmL:[-1.792,-1.353,.671],farmL:[-.1,0,0]},"lin",null],[.18,{pelvis:[0,.383,0],torso:[.35,.468,0],head:[-.175,-.383,0],cloak:[.662,0,-.17],thighR:[-.65,0,-.38],shinR:[.95,0,0],thighL:[.45,0,.38],shinL:[.85,0,0],footR:[-.25,0,0],rootY:-.42,uarmR:[-1.92,2.212,.2],farmR:[-2.521,0,0],handR:[-.71,-1.639,.488],uarmL:[-1.777,-1.346,.665],farmL:[-.1,0,0]},"lin",null]]};var Nr=["pelvis","torso","head","cloak","uarmR","uarmL","farmR","farmL","handR","handL","thighR","thighL","shinR","shinL","footR","footL"],Ra={uarmR:"YZX",uarmL:"YZX",torso:"YXZ",pelvis:"YXZ",handR:"YZX",handL:"YZX"},fd=["rootY","rootPitch","rootYaw","rootRoll"],Dn={lin:i=>i,io:i=>i*i*(3-2*i),out:i=>1-Math.pow(1-i,3),in:i=>i*i};function Le(i,t,e,n={}){for(let s of Nr){let r=i[s],o=t[s];if(!r&&!o){delete n[s];continue}let a=r||hd,l=o||hd,c=n[s]||(n[s]=[0,0,0]);c[0]=a[0]+(l[0]-a[0])*e,c[1]=a[1]+(l[1]-a[1])*e,c[2]=a[2]+(l[2]-a[2])*e}for(let s of fd)n[s]=(i[s]||0)+((t[s]||0)-(i[s]||0))*e;return n}var hd=[0,0,0];function Ea(i,t,e={}){if(t<=i[0][0])return Le(i[0][1],i[0][1],0,e);for(let s=1;s<i.length;s++)if(t<=i[s][0]){let[r,o]=i[s-1],[a,l,c]=i[s],h=(t-r)/(a-r||1);return Le(o,l,(Dn[c]||Dn.io)(h),e)}let n=i[i.length-1][1];return Le(n,n,0,e)}function Hs(i,t,e){for(let n of Nr){let s=t[n];if(!s){i[n]&&(i[n][0]*=1-e,i[n][1]*=1-e,i[n][2]*=1-e);continue}let r=i[n]||(i[n]=[s[0],s[1],s[2]]);r[0]+=(s[0]-r[0])*e,r[1]+=(s[1]-r[1])*e,r[2]+=(s[2]-r[2])*e}for(let n of fd)i[n]=(i[n]||0)+((t[n]||0)-(i[n]||0))*e;return i}var Yx=i=>i,Ut={idle:Yx({pelvis:[0,.35,0],torso:[.12,-.25,0],head:[-.05,-.1,0],uarmR:[-.55,.15,-.2],farmR:[-.75,0,0],handR:[1.55,0,0],uarmL:[-.75,.25,.25],farmL:[-.95,0,0],handL:[.3,0,0],thighR:[.25,0,-.08],shinR:[.35,0,0],footR:[-.2,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],footL:[0,0,0],cloak:[.12,0,0],rootY:-.07})};function Ur(i,t,e={}){let n=Math.sin(i),s=Math.cos(i),r={pelvis:[0,.15*n,0],torso:[.32,-.2*n,0],head:[-.2,.1*n,0],uarmR:[.45+.1*n,0,-.25],farmR:[-.35,0,0],handR:[2.45,0,0],uarmL:[-.7*n,0,.18],farmL:[-.7-.3*Math.max(0,n),0,0],thighR:[-.95*n-.15,0,0],thighL:[.95*n-.15,0,0],shinR:[.35+.95*Math.max(0,-s),0,0],shinL:[.35+.95*Math.max(0,s),0,0],footR:[.25*n,0,0],footL:[-.25*n,0,0],cloak:[.65+.12*Math.sin(i*2),0,.06*n],rootY:-.05+.07*Math.abs(s)};return Le(Ut.idle,r,t,e)}var Ee=(i,t,e=.15,n=-1.25)=>({pelvis:[0,t*.4,0],torso:[e,t*.6,0],head:[0,-t*.5,0],uarmR:[-.1,i,n],farmR:[-.15,0,0],handR:[1.45,0,0],uarmL:[-.4,i*.6,.6],farmL:[-.9,0,0],thighR:[-.35,0,-.15],shinR:[.4,0,0],thighL:[.15,0,.15],shinL:[.25,0,0],cloak:[.5,0,-t*.2],rootY:-.15}),ze=(i,t,e=-.3)=>({...Ee(i,t,0,-1.78),farmR:[0,0,0],handR:[1.57,0,0],rootY:e}),ba={pelvis:[.05,-.45,0],torso:[.25,-.95,0],head:[-.05,.75,0],uarmR:[.1,-.2,-.9],farmR:[-1,0,0],handR:[2.15,0,0],uarmL:[-.35,-.9,.35],farmL:[-1.3,0,0],handL:[.3,0,0],thighR:[-.5,0,-.25],shinR:[.95,0,0],thighL:[.35,0,.3],shinL:[.75,0,0],footR:[-.2,0,0],cloak:[.4,0,.25],rootY:-.38},ud={...ze(.5,-.1),torso:[.35,.05,0],head:[-.25,0,0],thighR:[-.65,0,-.38],shinR:[.95,0,0],thighL:[.45,0,.38],shinL:[.85,0,0],footR:[-.25,0,0],footL:[.1,0,0],cloak:[1,0,.4],rootY:-.42},Mt={L1:{dur:.46,active:[.1,.24],chainAt:.26,dmg:24,kb:5,lunge:[.04,.22,5.5],sound:"swing",type:"sweep",keys:[[0,Ee(.15,-.45)],[.1,Ee(-.1,-.5),"out"],[.24,{...Ee(2.3,.6),rootYaw:.4},"out"],[.46,Ut.idle,"io"]]},L2:{dur:.48,active:[.11,.25],chainAt:.28,dmg:26,kb:5,lunge:[.05,.23,5.5],sound:"swing",type:"sweep",keys:[[0,{...Ee(1.8,.45),rootYaw:.3}],[.11,{...Ee(2,.5),rootYaw:.38},"out"],[.25,{...Ee(-.1,-.4),rootYaw:-.22},"out"],[.48,Ut.idle,"io"]]},L3:{dur:.7,heavy:!0,active:[.28,.36],impact:.34,chainAt:.5,dmg:42,kb:7,up:6,radius:2.6,lunge:[.1,.32,6],sound:"swingHeavy",type:"slam",keys:[[0,Ut.idle],[.2,{pelvis:[0,0,0],torso:[-.35,0,0],head:[.1,0,0],uarmR:[-2.9,0,-.15],farmR:[-.6,0,0],handR:[.05,0,0],uarmL:[-2.7,0,.2],farmL:[-.7,0,0],thighR:[-.5,0,0],shinR:[.4,0,0],thighL:[.2,0,0],shinL:[.2,0,0],cloak:[.3,0,0],rootY:.05},"out"],[.34,{pelvis:[.2,0,0],torso:[.65,0,0],head:[-.4,0,0],uarmR:[-.75,0,-.1],farmR:[-.15,0,0],handR:[.35,0,0],uarmL:[-.85,0,.15],farmL:[-.3,0,0],thighR:[-.9,0,0],shinR:[.9,0,0],thighL:[.5,0,0],shinL:[.6,0,0],cloak:[.5,0,0],rootY:-.38},"in"],[.52,{pelvis:[.2,0,0],torso:[.6,0,0],head:[-.4,0,0],uarmR:[-.75,0,-.1],farmR:[-.15,0,0],handR:[.35,0,0],uarmL:[-.85,0,.15],farmL:[-.3,0,0],thighR:[-.9,0,0],shinR:[.9,0,0],thighL:[.5,0,0],shinL:[.6,0,0],cloak:[.3,0,0],rootY:-.36}],[.7,Ut.idle,"io"]]},SPIN:{dur:.78,active:[.2,.52],chainAt:.62,dmg:36,kb:9,lunge:[.2,.5,3],sound:"swingHeavy",type:"sweep",keys:[[0,Ut.idle],[.2,{...Ee(-.2,-.6,.3),rootY:-.3},"out"],[.52,{...Ee(.6,.3,.25),rootYaw:2*Math.PI,rootY:-.25},"lin"],[.78,{...Ut.idle,rootYaw:2*Math.PI},"io"]]},DASH:{dur:.56,active:[.15,.32],chainAt:.34,dmg:30,kb:7,lunge:[.06,.32,11],sound:"swing",type:"thrust",reach:.35,keys:[[0,Ut.idle],[.13,{pelvis:[0,-.4,0],torso:[.1,-.5,0],head:[0,.4,0],uarmR:[.55,0,-.25],farmR:[-1.6,0,0],handR:[1.05,0,0],uarmL:[-.6,0,.3],farmL:[-1,0,0],thighR:[.4,0,0],shinR:[.6,0,0],thighL:[-.7,0,0],shinL:[.4,0,0],cloak:[.5,0,0],rootY:-.25},"out"],[.3,{pelvis:[.15,.3,0],torso:[.45,.3,0],head:[-.3,-.2,0],uarmR:[-1.55,0,-.05],farmR:[0,0,0],handR:[1,0,0],uarmL:[.4,0,.3],farmL:[-.3,0,0],thighR:[-1,0,0],shinR:[.8,0,0],thighL:[.7,0,0],shinL:[.3,0,0],cloak:[1.1,0,0],rootY:-.35},"out"],[.56,Ut.idle,"io"]]},UPPER:{dur:.62,active:[.15,.3],chainAt:.36,dmg:28,kb:2,up:9,heavy:!0,sound:"swingHeavy",type:"sweep",keys:[[0,{...Ut.idle,uarmR:[.5,0,-.3],farmR:[-.3,0,0],handR:[2.3,0,0],torso:[.45,0,0],rootY:-.32}],[.13,{...Ut.idle,uarmR:[.6,0,-.3],farmR:[-.3,0,0],handR:[2.3,0,0],torso:[.5,0,0],thighR:[-.8,0,0],shinR:[1.2,0,0],rootY:-.4},"out"],[.3,{pelvis:[-.15,0,0],torso:[-.35,0,0],head:[-.3,0,0],uarmR:[-2.7,0,-.2],farmR:[-.2,0,0],handR:[1.7,0,0],uarmL:[-2.2,0,.3],farmL:[-.5,0,0],thighR:[.1,0,0],thighL:[-.3,0,0],shinL:[.2,0,0],cloak:[.8,0,0],rootY:.12},"out"],[.62,Ut.idle,"io"]]},CROSS:{dur:.5,active:[.1,.25],chainAt:.3,dmg:30,kb:5,lunge:[.05,.22,5],sound:"swing",type:"sweep",keys:[[0,{...Ee(.2,-.5,-.2,-2.3),rootRoll:.15}],[.1,{...Ee(0,-.55,-.2,-2.4),rootRoll:.2},"out"],[.25,{...Ee(1.5,.45,.25,-1),rootYaw:.25,rootRoll:-.1,rootY:-.25},"out"],[.5,Ut.idle,"io"]]},CHARGE:{dur:99,keys:[[0,Ut.idle],[.25,ba,"out"]]},SPIN_IN:{dur:.18,active:[.08,.18],chainAt:99,dmg:24,kb:7,heavy:!0,sound:"swingHeavy",type:"sweep",keys:[[0,ba],[.06,{...ba,pelvis:[.1,.35,0],torso:[.25,-.65,0],uarmR:[.05,-.85,-1.1],farmR:[-.85,0,0],handR:[2.2,0,0],thighR:[-.95,0,-.2],shinR:[.9,0,0],thighL:[.55,0,.3],shinL:[.6,0,0],rootY:-.34},"out"],[.12,{...ze(-.55,-.6),farmR:[-.4,0,0],handR:[2,0,0],pelvis:[0,.1,0],torso:[.1,-.45,0],thighR:[-.7,0,-.2],shinR:[.7,0,0],thighL:[.4,0,.3],shinL:[.5,0,0],rootY:-.32},"io"],[.18,{...ze(-.2,-.6)},"out"]]},SPIN_LOOP:{dur:.3,active:[0,.3],chainAt:99,dmg:24,kb:7,heavy:!0,sound:"swingHeavy",type:"sweep",keys:[[0,{...ze(-.2,-.6),rootYaw:0}],[.3,{...ze(-.2,-.6),rootYaw:2*Math.PI},"lin"]]},SPIN_OUT:{dur:.48,active:[-1,-1],chainAt:.18,type:"spin",keys:[[0,{...ze(-.2,-.6),rootYaw:0}],[.04,ud,"out"],[.16,ud],[.48,Ut.idle,"io"]]},RFLIP:{dur:.74,active:[.14,.52],chainAt:.5,dmg:38,kb:6,up:4,heavy:!0,lunge:[.1,.5,6.5],sound:"swingHeavy",type:"sweep",keys:[[0,Ut.idle],[.12,{torso:[.5,0,0],uarmR:[-1.5,0,-.1],farmR:[0,0,0],handR:[1.5,0,0],uarmL:[-1.4,0,.2],farmL:[-.3,0,0],thighR:[-.6,0,0],shinR:[.9,0,0],thighL:[-.6,0,0],shinL:[.9,0,0],cloak:[.6,0,0],rootY:-.2},"out"],[.32,{torso:[.6,0,0],uarmR:[-1.5,0,-.1],farmR:[0,0,0],handR:[1.5,0,0],uarmL:[-1.4,0,.2],farmL:[-.3,0,0],thighR:[-1.4,0,0],shinR:[1.9,0,0],thighL:[-1.4,0,0],shinL:[1.9,0,0],cloak:[1.2,0,0],rootY:1,rootPitch:Math.PI},"lin"],[.52,{torso:[.5,0,0],uarmR:[-1.5,0,-.1],farmR:[0,0,0],handR:[1.5,0,0],uarmL:[-1.4,0,.2],farmL:[-.3,0,0],thighR:[-.9,0,0],shinR:[1,0,0],thighL:[-.5,0,0],shinL:[.8,0,0],cloak:[.6,0,0],rootY:-.25,rootPitch:2*Math.PI},"lin"],[.74,{...Ut.idle,rootPitch:2*Math.PI},"io"]]},RSPIN2:{dur:.8,active:[.14,.6],chainAt:.62,dmg:30,kb:8,heavy:!0,lunge:[.14,.6,4],sound:"swingHeavy",type:"sweep",multi:2,keys:[[0,Ut.idle],[.14,{...ze(-.2,-.6),rootYaw:0},"out"],[.6,{...ze(.2,-.2),rootYaw:2*Math.PI},"lin"],[.8,{...Ut.idle,rootYaw:2*Math.PI},"io"]]},RLEAP:{dur:.95,active:[.4,.5],impact:.5,chainAt:.72,dmg:60,kb:11,up:8,radius:4.6,heavy:!0,lunge:[.08,.46,8],sound:"swingHeavy",type:"slam",keys:[[0,Ut.idle],[.12,{...Ut.idle,thighR:[-.9,0,0],shinR:[1.4,0,0],thighL:[-.9,0,0],shinL:[1.4,0,0],torso:[.5,0,0],rootY:-.4},"out"],[.34,{pelvis:[0,0,0],torso:[-.4,0,0],head:[.1,0,0],uarmR:[-2.9,0,-.15],farmR:[-.6,0,0],handR:[.05,0,0],uarmL:[-2.7,0,.2],farmL:[-.7,0,0],thighR:[-1,0,0],shinR:[1.2,0,0],thighL:[-.4,0,0],shinL:[.8,0,0],cloak:[0,0,0],rootY:1.5},"out"],[.5,{pelvis:[.2,0,0],torso:[.7,0,0],head:[-.4,0,0],uarmR:[-.75,0,-.1],farmR:[-.15,0,0],handR:[.35,0,0],uarmL:[-.85,0,.15],farmL:[-.3,0,0],thighR:[-1,0,0],shinR:[1.1,0,0],thighL:[.5,0,0],shinL:[.7,0,0],cloak:[1,0,0],rootY:-.42},"in"],[.95,Ut.idle,"io"]]},L4:{dur:.56,active:[.08,.38],chainAt:.4,dmg:30,kb:7,heavy:!0,lunge:[.08,.38,3.5],sound:"swingHeavy",type:"sweep",keys:[[0,{...ze(-.2,-.6),rootYaw:0}],[.08,{...ze(-.25,-.65),rootYaw:0},"out"],[.38,{...ze(.2,-.2),rootYaw:2*Math.PI},"lin"],[.56,{...Ut.idle,rootYaw:2*Math.PI},"io"]]},L5:{dur:.64,active:[.1,.44],chainAt:.46,dmg:26,kb:6,multi:2,lunge:[.05,.42,6],sound:"swing",type:"thrust",reach:.35,keys:[[0,Ut.idle],[.1,{pelvis:[0,-.4,0],torso:[.1,-.5,0],uarmR:[.55,0,-.25],farmR:[-1.6,0,0],handR:[1.05,0,0],uarmL:[-.6,0,.3],farmL:[-1,0,0],thighR:[.4,0,0],shinR:[.6,0,0],thighL:[-.7,0,0],shinL:[.4,0,0],cloak:[.5,0,0],rootY:-.25},"out"],[.2,{pelvis:[.15,.3,0],torso:[.45,.3,0],uarmR:[-1.55,0,-.05],farmR:[0,0,0],handR:[1,0,0],uarmL:[.4,0,.3],farmL:[-.3,0,0],thighR:[-1,0,0],shinR:[.8,0,0],thighL:[.7,0,0],shinL:[.3,0,0],cloak:[1.1,0,0],rootY:-.35},"out"],[.3,{pelvis:[0,-.3,0],torso:[.2,-.4,0],uarmR:[.4,0,-.25],farmR:[-1.5,0,0],handR:[1.05,0,0],uarmL:[-.5,0,.3],farmL:[-1,0,0],thighR:[-.6,0,0],shinR:[.7,0,0],thighL:[.4,0,0],shinL:[.4,0,0],cloak:[.7,0,0],rootY:-.3},"io"],[.42,{pelvis:[.2,.35,0],torso:[.5,.35,0],uarmR:[-1.6,0,-.05],farmR:[0,0,0],handR:[1,0,0],uarmL:[.4,0,.3],farmL:[-.3,0,0],thighR:[-1.1,0,0],shinR:[.8,0,0],thighL:[.8,0,0],shinL:[.3,0,0],cloak:[1.2,0,0],rootY:-.38},"out"],[.64,Ut.idle,"io"]]},DODGE:{dur:.5,iframes:[0,.36],lunge:[0,.42,12],keys:[[0,{...Ut.idle,rootY:-.3}],[.08,{torso:[.6,0,0],uarmR:[.6,0,-.2],farmR:[-.6,0,0],handR:[2.4,0,0],thighR:[-1.6,0,0],shinR:[2,0,0],thighL:[-1.4,0,0],shinL:[2,0,0],uarmL:[-.6,0,.3],farmL:[-1.4,0,0],head:[.4,0,0],cloak:[1.2,0,0],rootY:-.4,rootPitch:.6},"out"],[.34,{torso:[.6,0,0],uarmR:[.6,0,-.2],farmR:[-.6,0,0],handR:[2.4,0,0],thighR:[-1.6,0,0],shinR:[2,0,0],thighL:[-1.4,0,0],shinL:[2,0,0],uarmL:[-.6,0,.3],farmL:[-1.4,0,0],head:[.4,0,0],cloak:[.6,0,0],rootY:-.4,rootPitch:2*Math.PI-.3},"lin"],[.5,{...Ut.idle,rootPitch:2*Math.PI},"io"]]},HURT:{dur:.36,keys:[[0,Ut.idle],[.08,{...Ut.idle,torso:[-.45,.3,0],head:[-.4,0,0],rootY:-.12,rootPitch:-.15},"out"],[.36,Ut.idle,"io"]]},RAGE:{dur:1,iframes:[0,1],impact:.55,radius:6,dmg:60,kb:12,up:7,keys:[[0,Ut.idle],[.45,{torso:[-.5,0,0],head:[-.6,0,0],uarmR:[-.5,0,-1.2],farmR:[-.3,0,0],handR:[1.4,0,0],uarmL:[-.4,0,1.3],farmL:[-.4,0,0],thighR:[0,0,-.25],thighL:[0,0,.25],cloak:[.9,0,0],rootY:0},"out"],[.6,{torso:[.5,0,0],head:[.2,0,0],uarmR:[-.7,0,-.5],farmR:[-.3,0,0],handR:[1.4,0,0],uarmL:[-.6,0,.5],farmL:[-.4,0,0],thighR:[-.6,0,-.2],shinR:[.8,0,0],thighL:[.3,0,.2],shinL:[.5,0,0],cloak:[1.1,0,0],rootY:-.3},"out"],[1,Ut.idle,"io"]]},DEATH:{dur:1.4,keys:[[0,Ut.idle],[.4,{...Ut.idle,torso:[.6,0,0],thighR:[-1.4,0,0],shinR:[2,0,0],thighL:[-1.2,0,0],shinL:[2.1,0,0],rootY:-.5},"out"],[1,{...Ut.idle,torso:[.3,0,0],head:[.5,0,0],uarmR:[-.2,0,-.6],uarmL:[-.2,0,.6],rootY:-.62,rootPitch:1.45},"in"],[1.4,{...Ut.idle,torso:[.3,0,0],head:[.5,0,0],uarmR:[-.2,0,-.6],uarmL:[-.2,0,.6],rootY:-.62,rootPitch:1.45}]]}},Ji={torso:[.25,0,0],head:[.15,0,.1],uarmR:[-.25,0,-.15],farmR:[-.6,0,0],handR:[.85,0,0],uarmL:[.1,0,.12],farmL:[-.3,0,0],thighR:[-.2,0,0],shinR:[.3,0,0],thighL:[.1,0,0],shinL:[.25,0,0],rootY:-.05};function Lh(i,t,e,n){switch(i){case"walk":{let s=Math.sin(e),r=Math.cos(e);return Le(Ji,{torso:[.4,.15*s,0],head:[.2,-.1*s,.15],uarmR:[-.3+.2*s,0,-.2],farmR:[-.6,0,0],handR:[.85,0,0],uarmL:[.6*s,0,.15],farmL:[-.4,0,0],thighR:[-.75*s-.1,0,0],thighL:[.75*s-.1,0,0],shinR:[.3+.8*Math.max(0,-r),0,0],shinL:[.3+.8*Math.max(0,r),0,0],rootY:-.04+.05*Math.abs(r)},1,n)}case"windup":{let s=Dn.out(Math.min(1,t));return Le(Ji,{torso:[-.25,-.3,0],head:[-.1,0,0],uarmR:[-2.7,0,-.3],farmR:[-.5,0,0],handR:[.2,0,0],uarmL:[-.4,0,.4],farmL:[-.5,0,0],thighR:[.2,0,0],shinR:[.2,0,0],thighL:[-.4,0,0],shinL:[.3,0,0],rootY:0},s,n)}case"strike":{let s=Dn.out(Math.min(1,t));return Le({torso:[-.25,-.3,0],uarmR:[-2.7,0,-.3],farmR:[-.5,0,0],handR:[.2,0,0],uarmL:[-.4,0,.4],farmL:[-.5,0,0],thighR:[.2,0,0],thighL:[-.4,0,0],shinL:[.3,0,0]},{torso:[.55,.25,0],head:[-.3,0,0],uarmR:[-.7,0,-.1],farmR:[-.1,0,0],handR:[1.2,0,0],uarmL:[.4,0,.3],farmL:[-.3,0,0],thighR:[.3,0,0],shinR:[.4,0,0],thighL:[-.7,0,0],shinL:[.6,0,0],rootY:-.2},s,n)}case"hit":{let s=Math.sin(Math.min(1,t)*Math.PI);return Le(Ji,{...Ji,torso:[-.6,.3,.2],head:[-.6,0,0],uarmR:[.4,0,-.6],uarmL:[.4,0,.6],rootPitch:-.25,rootY:-.1},s,n)}case"dead":{let s=Dn.out(Math.min(1,t));return Le(Ji,{torso:[-.5,.4,.2],head:[-.7,.3,0],uarmR:[-.3,0,-1.3],uarmL:[-.2,0,1.4],farmR:[-.4,0,0],thighR:[-.4,0,-.2],shinR:[.8,0,0],thighL:[.1,0,.2],rootPitch:-1.52,rootY:-.4},s,n)}default:{let s=Math.sin(e*.5)*.04;return Le(Ji,{...Ji,torso:[.25+s,0,0],head:[.15-s,0,.1]},1,n)}}}var je={torso:[.1,-.2,0],head:[-.05,.1,0],uarmR:[-.5,.1,-.25],farmR:[-.9,0,0],handR:[1.1,0,0],uarmL:[-.6,.3,.35],farmL:[-1,0,0],thighR:[.2,0,-.12],shinR:[.3,0,0],thighL:[-.35,0,.12],shinL:[.35,0,0],rootY:-.05};function Ch(i,t,e,n){switch(i){case"walk":{let s=Math.sin(e),r=Math.cos(e);return Le(je,{...je,torso:[.2,.12*s,0],thighR:[-.6*s-.1,0,-.1],thighL:[.6*s-.1,0,.1],shinR:[.3+.7*Math.max(0,-r),0,0],shinL:[.3+.7*Math.max(0,r),0,0],rootY:-.03+.05*Math.abs(r)},1,n)}case"roar":{let s=Math.sin(Math.min(1,t)*Math.PI);return Le(je,{...je,torso:[-.5,0,0],head:[-.6,0,0],uarmR:[-.3,0,-1.2],uarmL:[-.3,0,1.2],farmR:[-.6,0,0],farmL:[-.6,0,0]},s,n)}case"cleaveWind":return Le(je,{...Ee(-1.2,-.8,.1),handR:[1.45,0,0]},Dn.out(Math.min(1,t)),n);case"cleave":return Le({...Ee(-1.2,-.8,.1)},{...Ee(2.4,.8,.3),rootYaw:.4},Dn.out(Math.min(1,t)),n);case"slamWind":return Le(je,Mt.L3.keys[1][1],Dn.out(Math.min(1,t)),n);case"slam":return Le(Mt.L3.keys[1][1],Mt.L3.keys[2][1],Dn.in(Math.min(1,t)),n);case"chargeWind":return Le(je,{...je,torso:[.6,0,0],head:[-.4,0,0],thighR:[-.8,0,0],shinR:[1,0,0],thighL:[.5,0,0],rootY:-.3},Dn.out(Math.min(1,t)),n);case"charge":{let s=Math.sin(e*1.6),r=Math.cos(e*1.6);return Le(je,{...je,torso:[.7,0,0],head:[-.5,0,0],uarmR:[-1.4,0,-.3],farmR:[-.3,0,0],handR:[1.4,0,0],thighR:[-1*s-.2,0,0],thighL:[1*s-.2,0,0],shinR:[.4+Math.max(0,-r),0,0],shinL:[.4+Math.max(0,r),0,0],rootY:-.1},1,n)}case"stagger":{let s=Math.sin(Math.min(1,t)*Math.PI);return Le(je,{...je,torso:[.9,.3,.2],head:[.5,0,0],uarmR:[.3,0,-.5],uarmL:[.3,0,.5],thighR:[-1.2,0,0],shinR:[1.8,0,0],rootY:-.45},s,n)}case"dead":return Le(je,{torso:[.8,0,.2],head:[.6,0,0],uarmR:[-.2,0,-.9],uarmL:[-.2,0,.9],thighR:[-1.5,0,0],shinR:[2.1,0,0],thighL:[-1.4,0,0],shinL:[2.1,0,0],rootY:-.55,rootPitch:.3},Dn.out(Math.min(1,t)),n);default:return Le(je,je,0,n)}}Mt.L6={...Mt.RLEAP,dmg:50,radius:3.8};Mt.FIN2={...Mt.L3,dmg:52,radius:3.8,kb:9,up:5};Mt.L1B={dur:.46,active:[.1,.24],chainAt:.26,dmg:24,kb:5,up:3,lunge:[.04,.22,5],sound:"swing",type:"sweep",keys:[[0,{...Ee(.2,-.45,.2,-1.05),rootY:-.3}],[.1,{...Ee(0,-.5,.2,-1.05),rootY:-.32},"out"],[.24,{...Ee(2.2,.6,-.15,-2.3),rootYaw:.35,rootY:-.05},"out"],[.46,Ut.idle,"io"]]};Mt.VCUT={dur:.5,active:[.15,.25],chainAt:.28,dmg:30,kb:5,lunge:[.05,.24,5],sound:"swing",type:"sweep",keys:[[0,Ut.idle],[.14,Mt.L3.keys[1][1],"out"],[.25,{...Mt.L3.keys[2][1],handR:[.3,0,0],rootY:-.2},"in"],[.5,Ut.idle,"io"]]};Mt.XCUT={dur:.64,active:[.1,.44],chainAt:.46,dmg:22,kb:4,multi:2,lunge:[.05,.4,4],sound:"swing",type:"sweep",keys:[[0,{...Ee(.2,-.5,-.2,-2.3)}],[.1,{...Ee(0,-.55,-.2,-2.4)},"out"],[.22,{...Ee(1.6,.45,.15,-1.3),rootYaw:.25,rootY:-.2},"out"],[.32,{...Ee(2.1,.55,-.15,-2.3),rootYaw:.3},"io"],[.44,{...Ee(.1,-.45,.15,-1.3),rootYaw:-.15,rootY:-.2},"out"],[.64,Ut.idle,"io"]]};Mt.SPIN1={...Mt.L4,dur:.48,chainAt:.36,lunge:[.05,.3,2.5],dmg:26};Mt.STAB={...Mt.DASH,lunge:[.08,.3,4],dmg:28};Mt.LOWSWEEP={dur:.5,active:[.1,.27],chainAt:.3,dmg:24,kb:3,up:4,lunge:[.04,.22,3],sound:"swing",type:"sweep",keys:[[0,{...ze(.1,-.5,-.55),torso:[.35,-.3,0],thighR:[-.9,0,-.2],shinR:[1.5,0,0],thighL:[.2,0,.3],shinL:[1.1,0,0]}],[.1,{...ze(-.1,-.55,-.55),torso:[.35,-.33,0],thighR:[-.9,0,-.2],shinR:[1.5,0,0],thighL:[.2,0,.3],shinL:[1.1,0,0]},"out"],[.27,{...ze(2.3,.6,-.55),torso:[.35,.36,0],thighR:[-.9,0,-.2],shinR:[1.5,0,0],thighL:[.2,0,.3],shinL:[1.1,0,0],rootYaw:.4},"out"],[.5,Ut.idle,"io"]]};Mt.REVSPIN={dur:.52,active:[.08,.36],chainAt:.38,dmg:28,kb:7,heavy:!0,lunge:[.08,.36,3],sound:"swingHeavy",type:"sweep",keys:[[0,{...ze(1.6,.5),rootYaw:0}],[.08,{...ze(1.7,.55),rootYaw:0},"out"],[.36,{...ze(1.2,.2),rootYaw:-2*Math.PI},"lin"],[.52,{...Ut.idle,rootYaw:-2*Math.PI},"io"]]};Mt.BACKCUT={...Mt.L1,dmg:24,lunge:[.02,.3,-6],keys:Mt.L1.keys.map(([i,t,e])=>[i,{...t,torso:[-(t.torso?.15:0),(t.torso||[0,0,0])[1],0],cloak:[.9,0,0]},e])};Mt.SHOULDER={dur:.5,active:[.08,.3],chainAt:.32,dmg:20,kb:12,up:2,body:1.5,lunge:[.05,.3,12],sound:"swing",type:"thrust",keys:[[0,Ut.idle],[.08,{pelvis:[0,1,0],torso:[.45,.4,0],head:[0,-1,0],uarmR:[.45,0,-.25],farmR:[-.35,0,0],handR:[2.45,0,0],uarmL:[-.9,.6,.6],farmL:[-1.6,0,0],thighR:[-.9,0,0],shinR:[.8,0,0],thighL:[.5,0,0],shinL:[.6,0,0],cloak:[1.2,0,0],rootY:-.25},"out"],[.3,{pelvis:[0,1,0],torso:[.5,.4,0],head:[0,-1,0],uarmR:[.45,0,-.25],farmR:[-.35,0,0],handR:[2.45,0,0],uarmL:[-.9,.6,.6],farmL:[-1.6,0,0],thighR:[.4,0,0],shinR:[.4,0,0],thighL:[-.8,0,0],shinL:[.7,0,0],cloak:[1.3,0,0],rootY:-.3}],[.5,Ut.idle,"io"]]};Mt.WHEEL={...Mt.RFLIP,dmg:30,up:3,keys:Mt.RFLIP.keys.map(([i,t,e])=>[i,{...t,rootY:t.rootY>.5?.55:t.rootY},e])};var dd={pelvis:[.1,0,0],torso:[.45,0,0],head:[-.2,0,0],uarmR:[-1.6,0,-.08],farmR:[-.8,0,0],handR:[3.15,0,0],uarmL:[-1.6,0,.12],farmL:[-.85,0,0],thighR:[-.2,0,-.2],shinR:[.3,0,0],thighL:[.1,0,.2],shinL:[.2,0,0],cloak:[.5,0,0],rootY:0};Mt.VAULT={dur:1,active:[.62,.72],impact:.7,chainAt:.8,dmg:48,kb:10,up:7,radius:3.4,heavy:!0,ground:!0,lunge:[.1,.62,7],sound:"swingHeavy",type:"slam",keys:[[0,Ut.idle],[.14,{...dd,rootY:-.05},"out"],[.38,{...dd,uarmR:[-2.4,0,-.1],uarmL:[-2.4,0,.1],farmR:[-.1,0,0],handR:[2.9,0,0],thighR:[-1.6,0,0],shinR:[2,0,0],thighL:[-1.4,0,0],shinL:[1.9,0,0],cloak:[.2,0,0],rootY:1.7,rootPitch:-.4},"out"],[.55,{pelvis:[0,0,0],torso:[-.4,0,0],head:[.1,0,0],uarmR:[-2.9,0,-.15],farmR:[-.6,0,0],handR:[.05,0,0],uarmL:[-2.7,0,.2],farmL:[-.7,0,0],thighR:[-1,0,0],shinR:[1.2,0,0],thighL:[-.4,0,0],shinL:[.8,0,0],rootY:1.3},"io"],[.7,{pelvis:[.2,0,0],torso:[.7,0,0],head:[-.4,0,0],uarmR:[-.75,0,-.1],farmR:[-.15,0,0],handR:[.35,0,0],uarmL:[-.85,0,.15],farmL:[-.3,0,0],thighR:[-1,0,0],shinR:[1.1,0,0],thighL:[.5,0,0],shinL:[.7,0,0],cloak:[1,0,0],rootY:-.42},"in"],[1,Ut.idle,"io"]]};var Ah=i=>({pelvis:[0,.15*i,0],torso:[.45,-.25,0],head:[-.25,.2,0],uarmR:[.55,0,-.35],farmR:[-.25,0,0],handR:[2,0,0],uarmL:[-.7*i,0,.2],farmL:[-.8,0,0],thighR:[-.9*i-.2,0,0],thighL:[.9*i-.2,0,0],shinR:[.5+.6*Math.max(0,i),0,0],shinL:[.5+.6*Math.max(0,-i),0,0],cloak:[1.1,0,0],rootY:-.12});Mt.DRAG={dur:.75,active:[.38,.52],chainAt:.54,dmg:34,kb:4,up:8,heavy:!0,ground:!0,lunge:[.04,.4,9],sound:"swingHeavy",type:"sweep",keys:[[0,Ut.idle],[.1,Ah(1),"out"],[.22,Ah(-1)],[.34,Ah(1)],[.52,Mt.UPPER.keys[2][1],"out"],[.75,Ut.idle,"io"]]};var ci=(i,t=0,e={})=>Th[i].map(([n,s,r])=>[t+n,{...s,...e},r||"io"]),fn=(i,t,e={})=>({...Th[i][t][1],...e}),Ni=(i,t,e=Ut.idle)=>[...i,[t,e,"io"]];Mt.L1={...Mt.L1,dur:.5,active:[.12,.26],chainAt:.28,keys:Ni(ci("R2L"),.5)};Mt.L2={...Mt.L2,dur:.5,active:[.12,.26],chainAt:.28,keys:Ni(ci("L2R"),.5)};Mt.CROSS={...Mt.CROSS,dur:.52,active:[.13,.28],chainAt:.3,keys:Ni(ci("HIGH_R_LOW_L"),.52)};Mt.CROSS2={...Mt.CROSS,keys:Ni(ci("HIGH_L_LOW_R"),.52)};Mt.L1B={...Mt.L1B,dur:.52,active:[.13,.28],chainAt:.3,keys:Ni(ci("LOW_R_HIGH_L"),.52)};Mt.L2B={...Mt.L1B,keys:Ni(ci("LOW_L_HIGH_R"),.52)};Mt.LOWSWEEP={...Mt.LOWSWEEP,dur:.55,active:[.13,.29],chainAt:.32,keys:Ni(ci("LOW_SWEEP"),.55)};Mt.XCUT={...Mt.XCUT,dur:.78,active:[.12,.54],chainAt:.56,keys:Ni([...ci("HIGH_R_LOW_L"),...ci("HIGH_L_LOW_R",.27).slice(1)],.78)};Mt.BACKCUT={...Mt.L1,dmg:24,lunge:[.02,.3,-6]};var wa=(i,t,e,n,s,r)=>({...i,dur:r+.24,active:[.08,r],chainAt:r+.04,keys:[[0,fn(t,0)],[.08,fn(e,0,{rootYaw:0}),"out"],[r,fn(e,0,{rootYaw:s}),"lin"],[r+.08,fn(n,4,{rootYaw:s}),"out"],[r+.24,{...Ut.idle,rootYaw:s},"io"]]});Mt.L4=wa(Mt.L4,"R2L","SPIN","R2L",2*Math.PI,.38);Mt.SPIN1=wa(Mt.SPIN1,"R2L","SPIN","R2L",2*Math.PI,.34);Mt.REVSPIN=wa(Mt.REVSPIN,"L2R","SPIN_REV","L2R",-2*Math.PI,.36);Mt.RSPIN2=wa(Mt.RSPIN2,"R2L","SPIN","R2L",2*Math.PI,.5);Mt.SPIN_IN={...Mt.SPIN_IN,dur:.18,keys:[[0,ba],[.06,fn("RELEASE",0),"out"],[.12,fn("RELEASE",1),"io"],[.18,fn("SPIN",0,{rootYaw:0}),"out"]]};Mt.SPIN_LOOP={...Mt.SPIN_LOOP,keys:[[0,fn("SPIN",0,{rootYaw:0})],[.3,fn("SPIN",0,{rootYaw:2*Math.PI}),"lin"]]};Mt.SPIN_OUT={...Mt.SPIN_OUT,dur:.62,chainAt:.32,keys:[[0,fn("SPIN",0,{rootYaw:0})],[.06,fn("HEAVY_FOLLOW",0),"out"],[.18,fn("HEAVY_FOLLOW",1),"out"],[.3,fn("HEAVY_FOLLOW",1)],[.62,Ut.idle,"io"]]};var Dt=i=>document.querySelector(i),Xx=Dt("#game"),Sd=matchMedia("(pointer: coarse)").matches,mn=new Oo({canvas:Xx,antialias:!Sd,powerPreference:"high-performance"});mn.toneMapping=Uc;mn.toneMappingExposure=1.75;mn.shadowMap.enabled=!0;mn.shadowMap.type=Nc;var Ui={ratio:Math.min(window.devicePixelRatio||1,Sd?2:1.5),shadows:!0};mn.setPixelRatio(Ui.ratio);var $t=new Bo,bd=new Pt(1379339);$t.fog=new Fo(bd,.026);$t.background=bd;var Fe=new Pe(48,1,.1,220),Aa=new ha(9076358,2759188,1.1);$t.add(Aa);var sn=new Ii(16760728,3.2);sn.castShadow=!0;sn.shadow.mapSize.set(1024,1024);var Xs=sn.shadow.camera;Xs.left=-16;Xs.right=16;Xs.top=16;Xs.bottom=-16;Xs.near=1;Xs.far=70;sn.shadow.bias=-6e-4;sn.shadow.normalBias=.03;$t.add(sn,sn.target);var Wh=new Ii(10135295,.35);Wh.position.set(-10,6,-12);$t.add(Wh);var kr=new Ii(16773606,1.6);$t.add(kr,kr.target);var Fr=new Fs(16722448,0,9,1.6);$t.add(Fr);function Yh(){let i=window.innerWidth,t=window.innerHeight;mn.setSize(i,t,!1),Fe.aspect=i/t,Fe.fov=i<t?62:46,Fe.updateProjectionMatrix()}window.addEventListener("resize",Yh);Yh();var zt={loadBar:Dt("#load-bar"),loadText:Dt("#load-text"),title:Dt("#title"),start:Dt("#btn-start"),hud:Dt("#hud"),hp:Dt("#hp-fill"),hpLag:Dt("#hp-lag"),rage:Dt("#rage-fill"),rageBtn:Dt("#btn-rage"),ko:Dt("#ko"),combo:Dt("#combo"),comboN:Dt("#combo-n"),wave:Dt("#wave-banner"),waveLabel:Dt("#wave-label"),bossBar:Dt("#boss"),bossFill:Dt("#boss-fill"),result:Dt("#result"),pause:Dt("#pause"),hurt:Dt("#hurt"),objective:Dt("#objective")},zr=new Ar;zr.onProgress=(i,t,e)=>{let n=Math.round(t/e*100);zt.loadBar.style.width=n+"%",zt.loadText.textContent=`\u88C5\u5099\u3092\u6574\u3048\u3066\u3044\u308B\u2026 ${n}%`};var qx=new xa(zr),Zx=new Us(zr);function Kx(i){let t=i.buffers[0].uri,e=t.slice(t.indexOf(",")+1),n=Uint8Array.from(atob(e),h=>h.charCodeAt(0));delete i.buffers[0].uri;let s=new TextEncoder().encode(JSON.stringify(i)),r=Math.ceil(s.length/4)*4,o=Math.ceil(n.length/4)*4,a=new Uint8Array(20+r+8+o),l=new DataView(a.buffer);l.setUint32(0,1179937895,!0),l.setUint32(4,2,!0),l.setUint32(8,a.length,!0),l.setUint32(12,r,!0),l.setUint32(16,1313821514,!0),a.fill(32,20,20+r),a.set(s,20);let c=20+r;return l.setUint32(c,o,!0),l.setUint32(c+4,5130562,!0),a.set(n,c+8),a.buffer}var Xh=window.ASSET_V?`?v=${window.ASSET_V}`:"",Vs=i=>(zr.itemStart(i),fetch(`assets/${i}.gltf.json${Xh}`).then(t=>{if(!t.ok)throw new Error(`${i}: HTTP ${t.status}`);return t.json()}).then(t=>new Promise((e,n)=>{let s=window.createImageBitmap;try{window.createImageBitmap=void 0,qx.parse(Kx(t),"",e,n)}finally{window.createImageBitmap=s}})).finally(()=>zr.itemEnd(i))),Ta=i=>new Promise((t,e)=>Zx.load(`assets/${i}${Xh}`,t,void 0,e)),fe=null;async function $x(){let[i,t,e,n,s,r,o,a,l,c,h]=await Promise.all([Vs("hero"),Vs("grunt"),Vs("boss"),Vs("sword"),Vs("weapons"),Vs("props"),fetch(`assets/skeleton.json${Xh}`).then(d=>d.json()),Ta("ground_col.jpg"),Ta("ground_nrm.jpg"),Ta("ground_rough.jpg"),Ta("sky.jpg")]),u=d=>{let f={};return d.scene.traverse(g=>{g.isMesh&&(f[g.name]=g)}),f};fe={hero:u(i),grunt:u(t),boss:u(e),sword:u(n),weapons:u(s),props:u(r),skel:o,gcol:a,gnrm:l,grough:c,sky:h}}var Hr=.55;function Rd(i,t,e={}){let n=new We,s=new We;s.position.y=Hr,n.add(s);let r={};for(let o of Nr){let a=t[o];if(!a)continue;let l=o.replace(/[RL]$/,""),c=i[l];if(!c)continue;let h=new We;h.position.fromArray(a[1]),Ra[o]&&(h.rotation.order=Ra[o]);let u=new de(c.geometry,e.material||c.material);u.castShadow=!0,u.receiveShadow=!1,h.add(u),r[o]=h}for(let o of Object.keys(r)){let a=t[o][0];a?r[a].add(r[o]):(r[o].position.y-=Hr,s.add(r[o]))}return{root:n,inner:s,j:r}}function Gs(i,t){for(let e in i.j){let n=t[e];n?i.j[e].rotation.set(n[0],n[1],n[2]):i.j[e].rotation.set(0,0,0)}i.inner.position.y=Hr+(t.rootY||0),i.inner.rotation.set(t.rootPitch||0,t.rootYaw||0,t.rootRoll||0,"YXZ")}var Oh=class{constructor(t,e,n,s){this.cap=s,this.joints=Nr.filter(r=>e[r]&&t[r.replace(/[RL]$/,"")]),this.offsets=this.joints.map(r=>new T().fromArray(e[r][1])),this.parent=this.joints.map(r=>this.joints.indexOf(e[r][0])),this.meshes=this.joints.map(r=>{let o=t[r.replace(/[RL]$/,"")],a=new un(o.geometry,o.material,s);return a.instanceMatrix.setUsage(Wc),a.castShadow=!0,a.frustumCulled=!1,a.count=0,$t.add(a),a}),this.weapons={};for(let[r,o]of Object.entries(n)){let a=new un(o.geometry,o.material,s);a.instanceMatrix.setUsage(Wc),a.castShadow=!0,a.frustumCulled=!1,a.count=0,$t.add(a),this.weapons[r]=a}this.tint=new Pt,this.world=this.joints.map(()=>new Ot),this._m=new Ot,this._q=new Be,this._e=new Je,this._s=new T(1,1,1),this._p=new T,this.wOff=new Ot().makeRotationFromEuler(new Je(Math.PI/2,Math.PI/2,0)),this.wOff.setPosition(0,-.085,0),this.handR=this.joints.indexOf("handR")}begin(){this.n=0,this.wn={};for(let t in this.weapons)this.wn[t]=0}add(t,e,n,s){let r=this.n++,{_m:o,_q:a,_e:l,_p:c,_s:h}=this,u=o.compose(c.set(0,Hr+(e.rootY||0),0),a.setFromEuler(l.set(e.rootPitch||0,e.rootYaw||0,0,"YXZ")),h),d=new Ot().multiplyMatrices(t,u);for(let f=0;f<this.joints.length;f++){let g=this.joints[f],_=e[g];l.set(_?_[0]:0,_?_[1]:0,_?_[2]:0,Ra[g]||"XYZ");let m=this.offsets[f];c.copy(m),this.parent[f]<0&&(c.y-=Hr),o.compose(c,a.setFromEuler(l),h),this.world[f].multiplyMatrices(this.parent[f]<0?d:this.world[this.parent[f]],o),this.meshes[f].setMatrixAt(r,this.world[f]),s&&this.meshes[f].setColorAt(r,s)}if(n&&this.weapons[n]){let f=this.weapons[n],g=this.wn[n]++;o.multiplyMatrices(this.world[this.handR],this.wOff),f.setMatrixAt(g,o),s&&f.setColorAt(g,s)}}end(){for(let t of this.meshes)t.count=this.n,t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0);for(let t in this.weapons){let e=this.weapons[t];e.count=this.wn[t],e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}}},me=46,Fh=null,Ed=[];function Jx(){for(let l of[fe.gcol,fe.gnrm,fe.grough])l.wrapS=l.wrapT=Qn,l.repeat.set(26,26),l.anisotropy=mn.capabilities.getMaxAnisotropy();fe.gcol.colorSpace=Me;let i=Fh=new ke({map:fe.gcol,normalMap:fe.gnrm,roughnessMap:fe.grough,roughness:1,metalness:0,color:11840166,normalScale:new tt(1.4,1.4)}),t=new de(new Bn(160,160),i);t.rotation.x=-Math.PI/2,t.receiveShadow=!0,$t.add(t),fe.sky.mapping=dr,fe.sky.colorSpace=Me;let e=new Ps(mn);$t.environment=e.fromEquirectangular(fe.sky).texture,$t.environmentIntensity=1.6,e.dispose();let n=wd(42),s=(l,c)=>{let h=fe.props[l];if(!h)return;let u=new un(h.geometry,h.material,c.length),d=new Ot,f=new Be,g=new Je;c.forEach((_,m)=>{g.set(_.rx||0,_.ry||0,_.rz||0),d.compose(new T(_.x,_.y||0,_.z),f.setFromEuler(g),new T(_.s,_.s,_.s)),u.setMatrixAt(m,d),_.col&&Ed.push({x:_.x,z:_.z,r:_.col*_.s})}),u.castShadow=!0,u.receiveShadow=!0,$t.add(u)},r=(l,c,h,u)=>Array.from({length:l},(d,f)=>{let g=f/l*Math.PI*2+n()*.3,_=c+n()*(h-c);return u(Math.cos(g)*_,Math.sin(g)*_,n)}),o=(l,c)=>Array.from({length:l},()=>{let h,u;do h=(n()*2-1)*me*.9,u=(n()*2-1)*me*.9;while(Math.hypot(h,u)<8||Math.hypot(h,u)>me*.92);return c(h,u,n)});s("rock3",r(26,me+1,me+6,(l,c,h)=>({x:l,z:c,s:1.2+h()*1.3,ry:h()*6,col:1.8}))),s("rock1",[...r(30,me+3,me+14,(l,c,h)=>({x:l,z:c,s:1+h()*1.5,ry:h()*6})),...o(10,(l,c,h)=>({x:l,z:c,s:.7+h()*.7,ry:h()*6,col:1.1}))]),s("rock2",o(26,(l,c,h)=>({x:l,z:c,s:.4+h()*.6,ry:h()*6}))),s("tree4",r(12,me+2,me+12,(l,c,h)=>({x:l,z:c,s:1+h()*.6,ry:h()*6,rz:(h()-.5)*.2}))),s("tree9",[...r(12,me+4,me+16,(l,c,h)=>({x:l,z:c,s:1+h()*.7,ry:h()*6})),...o(4,(l,c,h)=>({x:l,z:c,s:.9+h()*.3,ry:h()*6,col:.4}))]),s("spear",o(70,(l,c,h)=>({x:l,z:c,s:1,ry:h()*6,rx:(h()-.5)*.9,rz:(h()-.5)*.9,y:-.3}))),s("banner",o(9,(l,c,h)=>({x:l,z:c,s:1,ry:h()*6,rz:(h()-.5)*.25,y:-.2}))),s("pillar",o(7,(l,c,h)=>({x:l,z:c,s:1+h()*.3,ry:h()*6,rz:(h()-.5)*.1,col:.6})));let a=new ke({color:1182217,roughness:1});for(let l=0;l<18;l++){let c=l/18*Math.PI*2,h=new de(new na(14+n()*10,12+n()*14,5),a);h.position.set(Math.cos(c)*85,3,Math.sin(c)*85),h.rotation.y=n()*6,$t.add(h)}}function wd(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Bh=class{constructor(){this.dropMax=360;let t=new sa(.045,0);this.dropMat=new ke({color:3801602,roughness:.45,metalness:0,envMapIntensity:.25}),this.drops=new un(t,this.dropMat,this.dropMax),this.drops.frustumCulled=!1,this.drops.count=0,$t.add(this.drops),this.dp=[],this.decMax=140;let e=new ii(jx());e.colorSpace=Me,this.decMat=new ke({map:e,transparent:!0,depthWrite:!1,roughness:.6,metalness:0,envMapIntensity:.15,color:2753026,polygonOffset:!0,polygonOffsetFactor:-2});let n=new Bn(1,1);n.rotateX(-Math.PI/2),this.decals=new un(n,this.decMat,this.decMax),this.decals.frustumCulled=!1,this.decals.count=0,this.decals.receiveShadow=!0,$t.add(this.decals),this.dec=[],this.decI=0,this.sparkMax=220;let s=new Bn(.12,.12);this.sparkMat=new Xe({color:16756848,transparent:!0,blending:Ei,depthWrite:!1,map:new ii(ev())}),this.sparks=new un(s,this.sparkMat,this.sparkMax),this.sparks.frustumCulled=!1,this.sparks.count=0,$t.add(this.sparks),this.sp=[],this.flMax=80,this.flMat=new Xe({color:16777215,transparent:!0,blending:Ei,depthWrite:!1,map:new ii(Qx())}),this.flashMesh=new un(new Bn(1,1),this.flMat,this.flMax),this.flashMesh.instanceColor=new ni(new Float32Array(this.flMax*3),3),this.flashMesh.frustumCulled=!1,this.flashMesh.count=0,$t.add(this.flashMesh),this.fl=[],this.miMax=90,this.miMat=new Xe({color:5899782,transparent:!0,depthWrite:!1,opacity:.55,map:new ii(tv())}),this.mistMesh=new un(new Bn(1,1),this.miMat,this.miMax),this.mistMesh.frustumCulled=!1,this.mistMesh.count=0,$t.add(this.mistMesh),this.mi=[],this._rq=new Be,this._fwd=new T(0,0,1),this.rings=[],this.ringGeo=new ra(.8,1,48),this.ringGeo.rotateX(-Math.PI/2),this.trailN=14,this.trailGeo=new Se,this.trailPos=new Float32Array(this.trailN*2*3),this.trailA=new Float32Array(this.trailN*2),this.trailGeo.setAttribute("position",new Te(this.trailPos,3)),this.trailGeo.setAttribute("alpha",new Te(this.trailA,1));let r=[];for(let o=0;o<this.trailN-1;o++){let a=o*2;r.push(a,a+1,a+2,a+1,a+3,a+2)}this.trailGeo.setIndex(r),this.trailMat=new Mn({transparent:!0,depthWrite:!1,blending:Ei,side:ln,uniforms:{color:{value:new Pt(16751200)}},vertexShader:"attribute float alpha; varying float vA; void main(){ vA = alpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 color; varying float vA; void main(){ gl_FragColor = vec4(color * vA, vA); }"}),this.trail=new de(this.trailGeo,this.trailMat),this.trail.frustumCulled=!1,$t.add(this.trail),this.trailHist=[],this.trailOn=0,this.teleMat=new Xe({color:16722448,transparent:!0,opacity:.35,depthWrite:!1,blending:Ei}),this.tele=[],this.orbs=[],this.orbGeo=new oa(.22,16,10),this.orbMat=new ke({color:3145728,emissive:16724e3,emissiveIntensity:2.2,roughness:.2}),this._m=new Ot,this._q=new Be,this._v=new T,this._s=new T}blood(t,e,n,s,r,o=14,a=1){for(let l=0;l<o;l++){this.dp.length>=this.dropMax&&this.dp.shift();let c=(2+Math.random()*4)*a;this.dp.push({x:t,y:e,z:n,vx:s*c+(Math.random()-.5)*3,vy:1.5+Math.random()*4*a,vz:r*c+(Math.random()-.5)*3,life:1.2,s:.6+Math.random()*1.4})}}hitFlash(t,e,n,s=!1,r=!1){let o=l=>{this.fl.length>=this.flMax&&this.fl.shift(),this.fl.push(l)},a=r?[1,.55,.3]:[1,.85,.7];o({x:t,y:e,z:n,w:s?2.2:1.5,h:s?2.2:1.5,rot:Math.random()*6,life:.14,max:.14,col:a}),o({x:t,y:e,z:n,w:s?4.2:3,h:.22,rot:Math.random()*6,life:.16,max:.16,col:[1,.95,.85]}),r&&o({x:t,y:e,z:n,w:3.4,h:.16,rot:Math.random()*6,life:.2,max:.2,col:[1,.4,.2]})}mist(t,e,n,s,r,o=3){for(let a=0;a<o;a++)this.mi.length>=this.miMax&&this.mi.shift(),this.mi.push({x:t+(Math.random()-.5)*.3,y:e+(Math.random()-.5)*.3,z:n+(Math.random()-.5)*.3,vx:s*(1+Math.random()*2),vy:.3+Math.random()*.6,vz:r*(1+Math.random()*2),life:.7,max:.7,s:.4+Math.random()*.4})}decal(t,e,n){let s=this.decI++%this.decMax;this.dec[s]={x:t,z:e,s:n,r:Math.random()*6,life:22}}spark(t,e,n,s=8,r){for(let o=0;o<s;o++)this.sp.length>=this.sparkMax&&this.sp.shift(),this.sp.push({x:t,y:e,z:n,vx:(Math.random()-.5)*9,vy:Math.random()*6,vz:(Math.random()-.5)*9,life:.35+Math.random()*.3,max:.6})}ember(t,e,n){this.sp.length>=this.sparkMax&&this.sp.shift(),this.sp.push({x:t+(Math.random()-.5)*.8,y:e+Math.random()*1.6,z:n+(Math.random()-.5)*.8,vx:Math.random()-.5,vy:1.5+Math.random()*2,vz:Math.random()-.5,life:.8,max:.8,g:-1})}ring(t,e,n,s=16744512,r=.45){let o=new de(this.ringGeo,new Xe({color:s,transparent:!0,blending:Ei,depthWrite:!1}));o.position.set(t,.05,e),$t.add(o),this.rings.push({m:o,r:n,t:0,life:r})}telegraph(t,e,n,s){let r=new ea(1,40);r.rotateX(-Math.PI/2);let o=new de(r,this.teleMat.clone());o.position.set(t,.04,e),o.scale.setScalar(n),$t.add(o);let a=new de(r,this.teleMat.clone());a.position.set(t,.05,e),a.scale.setScalar(.01),$t.add(a),this.tele.push({m:o,inner:a,r:n,t:0,dur:s})}orb(t,e){let n=new de(this.orbGeo,this.orbMat);n.position.set(t,.5,e),$t.add(n),this.orbs.push({m:n,x:t,z:e,t:0})}trailPush(t,e,n){this.trailHist.unshift([t.clone(),e.clone()]),this.trailHist.length>this.trailN&&this.trailHist.pop(),this.trailOn+=((n?1:0)-this.trailOn)*(n?.6:.25)}update(t){let{_m:e,_q:n,_v:s,_s:r}=this,o=0;for(let l=this.dp.length-1;l>=0;l--){let c=this.dp[l];if(c.vy-=18*t,c.x+=c.vx*t,c.y+=c.vy*t,c.z+=c.vz*t,c.life-=t,c.y<=.02){Math.random()<.35&&this.decal(c.x,c.z,.3+Math.random()*.6*c.s),this.dp.splice(l,1);continue}if(c.life<=0){this.dp.splice(l,1);continue}}for(let l of this.dp)r.set(l.s,l.s*(1+Math.abs(l.vy)*.15),l.s),e.compose(s.set(l.x,l.y,l.z),n.identity(),r),this.drops.setMatrixAt(o++,e);this.drops.count=o,this.drops.instanceMatrix.needsUpdate=!0,o=0;for(let l of this.dec){if(!l||l.life<=0)continue;l.life-=t;let c=l.s*Math.min(1,l.life/3);e.compose(s.set(l.x,.012+o%7*.0015,l.z),n.setFromAxisAngle(Td,l.r),r.set(c,1,c)),this.decals.setMatrixAt(o++,e)}this.decals.count=o,this.decals.instanceMatrix.needsUpdate=!0,o=0;for(let l=this.sp.length-1;l>=0;l--){let c=this.sp[l];if(c.life-=t,c.life<=0){this.sp.splice(l,1);continue}c.vy-=(c.g??14)*t,c.x+=c.vx*t,c.y+=c.vy*t,c.z+=c.vz*t}for(let l of this.sp){let c=Math.max(.05,l.life/l.max)*(l.g?.8:1.2);e.compose(s.set(l.x,l.y,l.z),Fe.quaternion,r.set(c,c,c)),this.sparks.setMatrixAt(o++,e)}this.sparks.count=o,this.sparks.instanceMatrix.needsUpdate=!0,o=0;for(let l=this.fl.length-1;l>=0;l--){let c=this.fl[l];c.life-=t,c.life<=0&&this.fl.splice(l,1)}for(let l of this.fl){let c=l.life/l.max,h=c*c;n.copy(Fe.quaternion).multiply(this._rq.setFromAxisAngle(this._fwd,l.rot)),e.compose(s.set(l.x,l.y,l.z),n,r.set(l.w*(.6+.4*(1-c)),l.h*(.5+.5*c),1)),this.flashMesh.setMatrixAt(o,e),this.flashMesh.instanceColor.setXYZ(o++,l.col[0]*h*2,l.col[1]*h*2,l.col[2]*h*2)}this.flashMesh.count=o,this.flashMesh.instanceMatrix.needsUpdate=!0,this.flashMesh.instanceColor.needsUpdate=!0,o=0;for(let l=this.mi.length-1;l>=0;l--){let c=this.mi[l];if(c.life-=t,c.life<=0){this.mi.splice(l,1);continue}c.x+=c.vx*t,c.y+=c.vy*t,c.z+=c.vz*t,c.vx*=.92,c.vz*=.92}for(let l of this.mi){let c=1-l.life/l.max,h=l.s*(1+c*2.2)*(1-c*.3);e.compose(s.set(l.x,l.y,l.z),Fe.quaternion,r.set(h,h,h)),this.mistMesh.setMatrixAt(o++,e)}this.mistMesh.count=o,this.mistMesh.instanceMatrix.needsUpdate=!0,this.miMat.opacity=.5;for(let l=this.rings.length-1;l>=0;l--){let c=this.rings[l];c.t+=t;let h=c.t/c.life;c.m.scale.setScalar(.3+c.r*Math.sqrt(h)),c.m.material.opacity=1-h,h>=1&&($t.remove(c.m),c.m.material.dispose(),this.rings.splice(l,1))}for(let l=this.tele.length-1;l>=0;l--){let c=this.tele[l];c.t+=t;let h=Math.min(1,c.t/c.dur);c.inner.scale.setScalar(Math.max(.01,c.r*h)),c.m.material.opacity=.18+.12*Math.sin(c.t*20),c.t>=c.dur&&($t.remove(c.m,c.inner),c.m.material.dispose(),c.inner.material.dispose(),this.tele.splice(l,1))}for(let l of this.orbs)l.t+=t,l.m.position.y=.45+Math.sin(l.t*4)*.12;let a=this.trailHist;for(let l=0;l<this.trailN;l++){let c=a[Math.min(l,a.length-1)];if(!c)break;this.trailPos.set([c[0].x,c[0].y,c[0].z],l*6),this.trailPos.set([c[1].x,c[1].y,c[1].z],l*6+3);let h=Math.pow(1-l/this.trailN,1.6)*this.trailOn;this.trailA[l*2]=0,this.trailA[l*2+1]=h*.55}this.trailGeo.attributes.position.needsUpdate=!0,this.trailGeo.attributes.alpha.needsUpdate=!0,this.trail.visible=this.trailOn>.02}clear(){this.fl.length=0,this.mi.length=0,this.dp.length=0,this.dec.length=0,this.sp.length=0,this.trailHist.length=0;for(let t of this.rings)$t.remove(t.m);this.rings.length=0;for(let t of this.tele)$t.remove(t.m,t.inner);this.tele.length=0;for(let t of this.orbs)$t.remove(t.m);this.orbs.length=0}},Td=new T(0,1,0);function jx(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=wd(7);t.fillStyle="#fff";for(let n=0;n<26;n++){let s=e()*6.28,r=e()*(n<6?10:46),o=n<6?22+e()*18:2+e()*8;t.globalAlpha=.7+e()*.3,t.beginPath(),t.ellipse(64+Math.cos(s)*r,64+Math.sin(s)*r,o,o*(.6+e()*.4),s,0,6.28),t.fill()}return i}function Qx(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.18,"rgba(255,230,200,0.9)"),e.addColorStop(.5,"rgba(255,140,60,0.25)"),e.addColorStop(1,"rgba(255,80,20,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),t.globalCompositeOperation="lighter";for(let[n,s]of[[128,10],[10,128]]){let r=t.createLinearGradient(64-n/2,64-s/2,64+n/2,64+s/2);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.5,"rgba(255,255,255,0.9)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(64-n/2,64-s/2,n,s)}return i}function tv(){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.9)"),e.addColorStop(.5,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),i}function ev(){let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d"),e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,200,140,0.6)"),e.addColorStop(1,"rgba(255,120,40,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),i}var Ze=new ya(Dt("#stick-zone"),{attack:Dt("#btn-attack"),heavy:Dt("#btn-heavy"),dodge:Dt("#btn-dodge"),rage:Dt("#btn-rage")}),ce=new Ma,se,ui,Y,ct,K={substeps:1,stageIdx:0,introT:0,state:"loading",time:0,ko:0,combo:0,maxCombo:0,comboT:0,hitstop:0,shake:0,slowmo:1,waveIdx:-1,spawnLeft:0,alive:0,waveDelay:0,result:null},Ws=[{name:"\u7B2C\u4E00\u6226\u5834",place:"\u4EA1\u8005\u306E\u8352\u91CE",boss:{name:"\u89D2\u306E\u9B54\u9A0E\u58EB",hp:3200,speed:1,dmg:1,tint:[1,1,1],enrage:!1},env:{fog:3811878,density:.018,sky:12102320,gnd:4864560,hemi:1.7,sun:16763046,sunI:3.4,ground:12892852,envI:2,rim:10135295,fill:1.6},waves:[{label:"\u7B2C\u4E00\u6CE2",sub:"\u4EA1\u8005\u306E\u7FA4\u308C\u3092\u65AC\u308A\u6255\u3048",total:40,max:22,mix:{grunt:1},rate:.35},{label:"\u7B2C\u4E8C\u6CE2",sub:"\u91CD\u88C5\u306E\u4EA1\u8005\u304C\u6DF7\u3058\u3063\u3066\u3044\u308B",total:60,max:28,mix:{grunt:.86,brute:.14},rate:.28},{label:"\u7B2C\u4E09\u6CE2",sub:"\u6226\u5834\u304C\u4EA1\u8005\u3067\u57CB\u3081\u5C3D\u304F\u3055\u308C\u308B",total:80,max:34,mix:{grunt:.78,brute:.22},rate:.22},{label:"\u6C7A\u6226",sub:"\u89D2\u306E\u9B54\u9A0E\u58EB\u3092\u8A0E\u3066",total:9999,max:12,mix:{grunt:.8,brute:.2},rate:1.2,boss:!0}]},{name:"\u7B2C\u4E8C\u6226\u5834",place:"\u7070\u306E\u57CE\u585E\u8DE1",boss:{name:"\u7070\u306E\u51E6\u5211\u4EBA",hp:4600,speed:1.22,dmg:1.15,tint:[.62,.7,.85],enrage:!1},env:{fog:2634304,density:.02,sky:11188436,gnd:3422790,hemi:1.8,sun:12570623,sunI:3,ground:10923708,envI:1.7,rim:16756864,fill:1.8},waves:[{label:"\u7B2C\u4E00\u6CE2",sub:"\u69CD\u3092\u69CB\u3048\u305F\u4EA1\u8005\u304C\u99C6\u3051\u3066\u304F\u308B",total:55,max:26,mix:{grunt:.6,lancer:.4},rate:.3},{label:"\u7B2C\u4E8C\u6CE2",sub:"\u91CD\u88C5\u306E\u4EA1\u8005\u304C\u968A\u5217\u3092\u7D44\u3080",total:75,max:30,mix:{grunt:.45,lancer:.3,brute:.25},rate:.25},{label:"\u7B2C\u4E09\u6CE2",sub:"\u57CE\u585E\u306E\u6B8B\u5175\u304C\u3059\u3079\u3066\u62BC\u3057\u5BC4\u305B\u308B",total:95,max:36,mix:{grunt:.4,lancer:.35,brute:.25},rate:.2},{label:"\u6C7A\u6226",sub:"\u7070\u306E\u51E6\u5211\u4EBA\u3092\u8A0E\u3066",total:9999,max:14,mix:{grunt:.5,lancer:.5},rate:1,boss:!0}]},{name:"\u7B2C\u4E09\u6226\u5834",place:"\u8840\u306E\u6CBC\u5730",boss:{name:"\u53CC\u89D2\u306E\u9B54\u5C06",hp:6200,speed:1.3,dmg:1.3,tint:[1,.5,.45],enrage:!0},env:{fog:4856342,density:.021,sky:13145232,gnd:4858912,hemi:1.8,sun:16751230,sunI:3.2,ground:11569794,envI:1.8,rim:16732208,fill:1.8},waves:[{label:"\u7B2C\u4E00\u6CE2",sub:"\u6CBC\u304B\u3089\u4EA1\u8005\u304C\u9019\u3044\u4E0A\u304C\u308B",total:70,max:30,mix:{grunt:.55,lancer:.3,brute:.15},rate:.26},{label:"\u7B2C\u4E8C\u6CE2",sub:"\u91CD\u88C5\u306E\u4EA1\u8005\u304C\u7FA4\u308C\u3092\u306A\u3059",total:90,max:34,mix:{grunt:.35,lancer:.3,brute:.35},rate:.22},{label:"\u7B2C\u4E09\u6CE2",sub:"\u6700\u5F8C\u306E\u8ECD\u52E2\u304C\u62BC\u3057\u5BC4\u305B\u308B",total:120,max:40,mix:{grunt:.4,lancer:.35,brute:.25},rate:.18},{label:"\u6C7A\u6226",sub:"\u53CC\u89D2\u306E\u9B54\u5C06\u3092\u8A0E\u3066",total:9999,max:16,mix:{grunt:.4,lancer:.4,brute:.2},rate:.9,boss:!0}]}],Oi=()=>Ws[K.stageIdx],Da=()=>Oi().waves[K.waveIdx];function nv(i){let t=Math.random(),e="grunt";for(let[n,s]of Object.entries(i))if(e=n,(t-=s)<=0)return n;return e}var kn={grunt:{hp:40,speed:3.1,dmg:45,range:1.65,wind:.62,scale:.97,radius:.42,weapon:"gsword",armor:!1,color:new Pt(1,1,1)},brute:{hp:190,speed:2.3,dmg:85,range:2.2,wind:.9,scale:1.38,radius:.6,weapon:"club",armor:!0,color:new Pt(.72,.62,.58),exp:5},lancer:{hp:32,speed:4.3,dmg:55,range:2.7,wind:.5,scale:.95,radius:.42,weapon:"spear",armor:!1,color:new Pt(.74,.8,.92),lunge:7,exp:2}};kn.grunt.exp=1;var Ae=[];function iv(){let i=Rd(fe.hero,fe.skel),t=fe.hero.torso.material.clone();t.color.setRGB(.78,.8,.86),t.envMapIntensity=.9,t.metalness=.75,t.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
  roughnessFactor = clamp(roughnessFactor * 1.25 + 0.18, 0.0, 1.0);`)},i.root.traverse(s=>{s.isMesh&&(s.material=t)});let e=new de(fe.sword.sword.geometry,fe.sword.sword.material);e.castShadow=!0,e.rotation.set(Math.PI/2,Math.PI/2,0),e.position.set(0,-.085,0),i.j.handR.add(e);let n={standard:{mesh:e,blade:pd}};for(let s of Sa){let r=s.make();r.position.copy(e.position),r.rotation.copy(e.rotation),r.visible=!1,i.j.handR.add(r),n[s.id]={mesh:r,blade:s.blade}}return $t.add(i.root),{rig:i,mat:t,sword:e,weapons:n,blade:pd,x:0,z:0,vx:0,vz:0,face:0,hp:1e3,maxHp:1e3,hpLag:1e3,rage:0,rageT:0,act:null,queued:null,iframe:0,phase:0,speedAmt:0,pose:{},target:{},lastBase:new T,lastTip:new T,base:new T,tip:new T,attackId:0,dead:!1,level:1,exp:0,comboIdx:0,spinLoops:0}}function Ad(){let i=fe.boss.torso.material.clone();i.envMapIntensity=1.5;let t=Rd(fe.boss,fe.skel,{material:i}),e=new de(fe.weapons.bossaxe.geometry,fe.weapons.bossaxe.material);return e.castShadow=!0,e.rotation.x=Math.PI/2,e.position.set(0,-.085,0),t.j.handR.add(e),t.root.scale.setScalar(2.3),$t.add(t.root),{rig:t,axe:e,mat:i,speed:1,dmgMul:1,enraged:!1,x:0,z:30,face:Math.PI,hp:3200,maxHp:3200,state:"roar",t:0,phase:0,poise:0,pose:{},target:{},cd:2,lastHit:-1,dead:!1,deadT:0,hitDone:!1,tx:0,tz:0}}var Ih=new T,Vv=new T,pd={hilt:new T(0,.45,0),trail:new T(0,1.15,0),tip:new T(0,2.1,0)};function pn(i){let t=Y,e=Mt[i];i!=="SPIN_LOOP"&&i!=="SPIN_OUT"&&(t.pose.rootYaw=Ca(t.pose.rootYaw||0),t.pose.rootPitch=Ca(t.pose.rootPitch||0)),t.act={name:i,t:0,def:e,hitDone:!1,swung:!1},t.attackId++;let n=t.aimNext!==!1;if(t.aimNext=!0,n&&e.type&&i!=="SPIN_LOOP"&&i!=="SPIN_OUT"){let[s,r]=Ze.move();if(Math.hypot(s,r)>.2)t.face=Math.atan2(-s,r);else{let o=null,a=6;for(let l of Ae)if(!l.dead){let c=Math.hypot(l.x-t.x,l.z-t.z);c<a&&(a=c,o=l)}if(ct&&!ct.dead&&ct.state!=="hidden"){let l=Math.hypot(ct.x-t.x,ct.z-t.z);l<7&&l<a+2&&(o=ct)}o&&(t.face=Math.atan2(o.x-t.x,o.z-t.z))}}if(i==="DODGE"){let[s,r]=Ze.move();Math.hypot(s,r)>.2&&(t.face=Math.atan2(-s,r)),t.iframe=e.iframes[1],ce.play("dodge")}}function kh(){let i=Y.level;return Y.rageT>0?[["L1","L1B","LOWSWEEP","CROSS"],["RFLIP","WHEEL"],["L2","XCUT","REVSPIN","L2B"],["RSPIN2","SPIN1"],...i>=3?[["L4","SPIN1","REVSPIN"]]:[],...i>=5?[["RFLIP"]]:[],["RLEAP"]]:[["L1","L1B","VCUT","LOWSWEEP","CROSS"],["L2","XCUT","SPIN1","REVSPIN","BACKCUT","L2B"],["L3","VCUT","STAB","SHOULDER","WHEEL","DRAG"],...i>=2?[["L4","SPIN1","REVSPIN","L1B","CROSS2"]]:[],...i>=4?[["L5","XCUT","LOWSWEEP","DRAG","L2B"]]:[],...i>=6?[["L6","VAULT"]]:[]]}function zh(i,t){let e=i.filter(s=>s!==t),n=e.length?e:i;return n[Math.floor(Math.random()*n.length)]}function Hh(){let[i,t]=Ze.move();if(Math.hypot(i,t)<.3)return null;let e=di(Y.face,Math.atan2(-i,t),1)-Y.face;return Math.abs(e)<.8?"fwd":Math.abs(e)>2.3?"back":e<0?"right":"left"}function Vh(i,t=Hh()){if(Y.aimNext=!0,!i)return Y.comboIdx=0,Y.lightCount=1,t?"DASH":zh(kh()[0],null);if(Y.lightCount=(Y.lightCount||0)+1,t==="back")return"UPPER";if(t==="left"||t==="right")return t==="left"?"CROSS":"CROSS2";let e=kh();return Y.comboIdx=(Y.comboIdx+1)%e.length,zh(e[Y.comboIdx],i)}var Ld={1:["UPPER","DRAG"],2:["FIN2"],3:["RSPIN2","REVSPIN"],4:["L5"],5:["RLEAP","VAULT"]},La=10,Gh=i=>14+i*10,Cd=()=>1+.07*(Y.level-1),sv={2:"\u9023\u6483\u304C4\u6BB5\u306B\uFF08\u56DE\u8EE2\u8FD4\u3057\u65AC\u308A\uFF09",3:"\u899A\u9192\u9023\u6483\u306B\u56DE\u8EE2\u8FD4\u3057\u65AC\u308A\u304C\u52A0\u308F\u308B",4:"\u9023\u6483\u304C5\u6BB5\u306B\uFF08\u4E8C\u6BB5\u7A81\u304D\uFF09",5:"\u899A\u9192\u9023\u6483\u306B\u7E26\u56DE\u8EE2\u65AC\u308A\u304C\u3082\u3046\u4E00\u5EA6\u52A0\u308F\u308B",6:"\u9023\u6483\u304C6\u6BB5\u306B\uFF08\u5927\u8DF3\u8E8D\u53E9\u304D\u3064\u3051\uFF09"};function qh(i){let t=Y;if(!(t.level>=La)){for(t.exp+=i;t.level<La&&t.exp>=Gh(t.level);){t.exp-=Gh(t.level),t.level++,t.maxHp+=90,t.hp=Math.min(t.maxHp,t.hp+90+t.maxHp*.25);let e=sv[t.level]||"\u653B\u6483\u529B\u3068\u4F53\u529B\u304C\u4E0A\u304C\u3063\u305F\u30FB\u56DE\u8EE2\u65AC\u308A\u306E\u56DE\u8EE2\u6570\u304C\u5897\u3048\u305F";rv(t.level,e),ce.play("heal"),se.ring(t.x,t.z,3,16765056,.6)}t.level>=La&&(t.exp=0)}}var md=0;function rv(i,t){let e=Dt("#levelup");Dt("#lu-lv").textContent=`Lv ${i}`,Dt("#lu-perk").textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show"),clearTimeout(md),md=setTimeout(()=>e.classList.remove("show"),2600)}function Ca(i){return((i+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI}function ov(){return Y.rageT>0?1.35:1}var Id={SPIN:"rootYaw",SPIN_LOOP:"rootYaw",L4:"rootYaw",SPIN1:"rootYaw",REVSPIN:"rootYaw",RSPIN2:"rootYaw",SPIN_IN:"rootYaw",RFLIP:"rootPitch",WHEEL:"rootPitch"},av=new Set(["SPIN_IN","SPIN_LOOP"]),lv=3;function cv(i){let t=Y;if(t.dead){t.act.t+=i,Ea(t.act.def.keys,t.act.t,t.target),Hs(t.pose,t.target,Math.min(1,i*14)),Gs(t.rig,t.pose);return}t.iframe=Math.max(0,t.iframe-i),t.rageT>0&&(t.rageT-=i,t.mat.emissive.setRGB(.1+.05*Math.sin(K.time*12),.008,0),Fr.intensity=14+Math.sin(K.time*20)*4,Math.random()<.9&&se.ember(t.x,.2,t.z),t.rageT<=0&&(t.mat.emissive.setRGB(0,0,0),Fr.intensity=0));let e=!1;Ze.consume("rage")&&!e&&t.rage>=100&&t.rageT<=0&&(!t.act||t.act.name!=="RAGE")&&(t.rage=0,t.rageT=12,pn("RAGE"),ce.play("rage"),K.shake=.8);let n=Ze.consume("attack")||Ze.held.has("attack")&&!t.act,s=Ze.consume("heavy"),r=Ze.consume("dodge"),o=t.act;r&&!e&&(!o||o.name!=="DODGE"&&o.name!=="RAGE"&&(o.name==="HURT"||o.t>(o.def.active?.[1]??0)))?pn("DODGE"):o?o.name==="DODGE"?n&&(o.queued="counter"):o.def.type&&(n&&(o.queued="light",o.queuedDir=Hh()),s&&(o.queued="heavy"),Ze.held.has("attack")&&!o.queued&&o.t>o.def.active[1]&&(o.queued="light",o.queuedDir=Hh())):s?(t.charge=0,t.chargeLv=0,pn("CHARGE")):n&&pn(Vh(null));let a=ov(),[l,c]=Ze.move(),h=Math.hypot(l,c),u,d=!1;if(t.act){let m=t.act,p=m.def;if(u=Id[m.name],m.t+=i*(p.type?a:1),Ea(p.keys,m.t,t.target),!e&&!d&&p.lunge&&m.t>=p.lunge[0]&&m.t<=p.lunge[1]){let y=p.lunge[2];t.x+=Math.sin(t.face)*y*i*(p.type?a:1),t.z+=Math.cos(t.face)*y*i*(p.type?a:1)}if(p.sound&&!m.swung&&m.t>=p.active[0]-.06&&(m.swung=!0,ce.play(p.sound)),p.multi&&!m.multiDone&&m.t>(p.active[0]+p.active[1])/2&&(m.multiDone=!0,t.attackId++),m.name==="SPIN_LOOP"&&!e&&!d&&h>.2){let y=Math.atan2(-l,c);t.x+=Math.sin(y)*3.5*i,t.z+=Math.cos(y)*3.5*i}if(!(e||d))if(m.name==="CHARGE"){t.charge+=i;let y=t.charge>=2?3:t.charge>=1.2?2:t.charge>=.5?1:0;y>t.chargeLv&&(t.chargeLv=y,ce.play("clang",.5+y*.2),se.ring(t.x,t.z,1.2+y*.7,y===3?16728096:16756848,.4),se.spark(t.tip.x,t.tip.y,t.tip.z,6+y*4)),t.chargeLv>0&&Math.random()<.3*t.chargeLv&&se.ember(t.x,.1,t.z),t.mat.emissive.setRGB(.04*t.chargeLv*(.7+.3*Math.sin(K.time*30)),.012*t.chargeLv,0),(!Ze.held.has("heavy")||t.charge>3.5)&&(t.spinTarget=1,t.chargeMul=1+.25*t.chargeLv,t.spinLoops=0,t.rageT<=0&&t.mat.emissive.setRGB(0,0,0),pn("SPIN_IN"))}else if(m.name==="SPIN_IN"&&m.t>=p.dur)pn("SPIN_LOOP");else if(m.name==="SPIN_LOOP"&&m.t>=p.dur)t.pose.rootYaw=t.target.rootYaw=0,t.spinLoops++,pn(t.spinLoops<(t.spinTarget||1)?"SPIN_LOOP":"SPIN_OUT");else if(p.type&&m.t>=p.chainAt&&m.queued)if(m.queued==="heavy"){let y=t.lightCount||0;y<=0?(t.charge=0,t.chargeLv=0,pn("CHARGE")):(pn(zh(Ld[Math.min(y,5)],null)),t.lightCount=0)}else pn(Vh(m.name,m.queuedDir));else m.t>=p.dur&&m.queued==="counter"?(t.lightCount=1,pn("L4")):m.t>=p.dur&&(t.act=null,t.pose.rootYaw=Ca(t.pose.rootYaw||0),t.pose.rootPitch=Ca(t.pose.rootPitch||0))}if(!t.act){if(h>.05){let m=Math.atan2(-l,c);t.face=di(t.face,m,Math.min(1,i*14));let p=7*h*(t.rageT>0?1.2:1);t.x+=Math.sin(m)*p*i,t.z+=Math.cos(m)*p*i}t.speedAmt+=((h>.05?1:0)-t.speedAmt)*Math.min(1,i*10),t.phase+=i*(6+5*h),Ur(t.phase,t.speedAmt,t.target),t.speedAmt<.5&&(t.target.torso[0]+=Math.sin(K.time*2)*.02)}!e&&!d&&Zh(t,.45);let f=Math.hypot(t.x,t.z);f>me&&(t.x*=me/f,t.z*=me/f),e||Hs(t.pose,t.target,Math.min(1,i*30)),u&&t.act&&(t.pose[u]=t.target[u]||0),Gs(t.rig,t.pose),t.rig.root.position.set(t.x,0,t.z),t.rig.root.rotation.y=t.face,t.rig.root.updateMatrixWorld(!0),t.lastBase.copy(t.base),t.lastTip.copy(t.tip),t.base.copy(t.blade.hilt),t.sword.localToWorld(t.base),t.tip.copy(t.blade.tip),t.sword.localToWorld(t.tip);let g=t.act,_=!e&&g&&g.def.type&&g.t>=g.def.active[0]-.05&&g.t<=g.def.active[1]+.05;Ih.copy(t.blade.trail),t.sword.localToWorld(Ih),se.trailPush(Ih,t.tip,_),!e&&g&&g.def.ground&&t.tip.y<.25&&Math.random()<.7&&se.spark(t.tip.x,.05,t.tip.z,3),!e&&g&&g.def.type&&g.t>=g.def.active[0]&&g.t<=g.def.active[1]&&uv(g),g&&g.def.impact&&!g.hitDone&&g.t>=g.def.impact&&(g.hitDone=!0,dv(g));for(let m=se.orbs.length-1;m>=0;m--){let p=se.orbs[m];Math.hypot(p.x-t.x,p.z-t.z)<1.3&&(t.hp=Math.min(t.maxHp,t.hp+150),ce.play("heal"),se.spark(p.x,.6,p.z,10),$t.remove(p.m),se.orbs.splice(m,1))}Fr.position.set(t.x,1.4,t.z)}function di(i,t,e){let n=((t-i+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return i+n*e}function Zh(i,t){for(let e of Ed){let n=i.x-e.x,s=i.z-e.z,r=Math.hypot(n,s),o=e.r+t;r<o&&r>1e-4&&(i.x=e.x+n/r*o,i.z=e.z+s/r*o)}}function hv(i,t,e,n,s,r){let o=s-e,a=r-n,l=o*o+a*a,c=l?((i-e)*o+(t-n)*a)/l:0;return c=Math.max(0,Math.min(1,c)),Math.hypot(i-(e+o*c),t-(n+a*c))}function gd(i,t,e,n=0,s=2){let r=Y;for(let o=0;o<=4;o++){let a=o/4,l=r.lastBase.x+(r.base.x-r.lastBase.x)*a,c=r.lastBase.z+(r.base.z-r.lastBase.z)*a,h=r.lastTip.x+(r.tip.x-r.lastTip.x)*a,u=r.lastTip.z+(r.tip.z-r.lastTip.z)*a,d=r.lastTip.y+(r.tip.y-r.lastTip.y)*a,f=r.lastBase.y+(r.base.y-r.lastBase.y)*a;if(!(Math.max(f,d)<n-.4||Math.min(f,d)>s+.4)&&hv(i,t,l,c,h,u)<e)return!0}return!1}function uv(i){let t=i.def,e=Y,n=(e.rageT>0?1.6:1)*Cd()*(i.name==="SPIN_LOOP"&&e.chargeMul||1),s=!!Id[i.name],r=t.kb*(s?1.6:1)*(av.has(i.name)?lv*(1+.05*(e.chargeLv||0)):1),o=s?1.5:0,a=!1,l=(c,h,u)=>{if(!t.body)return!1;let d=c-e.x,f=h-e.z;return Math.hypot(d,f)<t.body+u&&(t.bodyAll||Math.abs(di(e.face,Math.atan2(d,f),1)-e.face)<1.1)};for(let c of Ae){if(c.dead||c.lastHit===e.attackId)continue;let h=kn[c.type];if(l(c.x,c.z,h.radius)){c.lastHit=e.attackId,a=!0,Ia(c,t.dmg*n,r,t.up||0,!0,void 0,void 0,o);continue}gd(c.x,c.z,h.radius+.25+(t.reach||0),c.y,c.y+1.8*h.scale)&&(c.lastHit=e.attackId,a=!0,Ia(c,t.dmg*n,r,t.up||0,!!t.heavy,void 0,void 0,o))}ct&&!ct.dead&&ct.state!=="hidden"&&ct.lastHit!==e.attackId&&gd(ct.x,ct.z,1.2,0,4)&&(ct.lastHit=e.attackId,a=!0,Fd(t.dmg*n*1)),a&&(K.hitstop=Math.max(K.hitstop,i.name==="SPIN_LOOP"||i.name==="RSPIN2"||i.name==="SPIN1"||i.name==="L4"?.025:.055),ce.play("hit"))}function dv(i){let t=i.def,e=Y,n=(e.rageT>0?1.6:1)*Cd(),s=i.name==="RAGE"?e.x:e.tip.x,r=i.name==="RAGE"?e.z:e.tip.z;se.ring(s,r,t.radius*1.2,i.name==="RAGE"?16723984:16752736,.5),se.spark(s,.2,r,26),K.shake=Math.max(K.shake,i.name==="RAGE"?1:.55),ce.play("slam");for(let o of Ae){if(o.dead)continue;let a=Math.hypot(o.x-s,o.z-r);a<t.radius+kn[o.type].radius&&o.lastHit!==e.attackId+.5&&(o.lastHit=e.attackId+.5,Ia(o,t.dmg*n*(1-a/(t.radius*2)),t.kb,t.up,!0,s,r))}ct&&!ct.dead&&ct.state!=="hidden"&&Math.hypot(ct.x-s,ct.z-r)<t.radius+1.2&&Fd(t.dmg*n*.8)}function Pd(){K.combo++,K.comboT=2.6,K.maxCombo=Math.max(K.maxCombo,K.combo),Y.rageT<=0&&(Y.rage=Math.min(100,Y.rage+1.4))}function Ia(i,t,e,n,s,r,o,a=0){let l=kn[i.type];i.hp-=t,Pd();let c=r??Y.x,h=o??Y.z,u=i.x-c,d=i.z-h,f=Math.hypot(u,d)||1;u/=f,d/=f;let g=l.armor&&!s?.3:1,_=i.hp<=0,m=e*g*(_?2.6:1.7);i.vx+=u*m,i.vz+=d*m;let p=i.y+1.1*l.scale,y=i.x-u*.35,v=i.z-d*.35;se.hitFlash(y,p,v,s,_),se.blood(y,p,v,u,d,_?30:s?22:14,_?1.6:1.2),se.mist(y,p,v,u,d,_?5:3),se.spark(y,p,v,s?10:5),se.decal(i.x+u*.6,i.z+d*.6,1+Math.random()*1),_?(i.dead=!0,i.state="dead",i.t=0,i.vy=Math.max(i.vy,0)+(n||3)+a+4+Math.random()*4*(s?1.5:1),i.tumble=(Math.random()<.5?-1:1)*(6+Math.random()*8),i.tumbleA=0,i.spin=(Math.random()-.5)*10,K.ko++,qh(l.exp||1),K.shake=Math.max(K.shake,s?.35:.2),i.face=Math.atan2(-u,-d),Math.random()<(i.type==="brute"?.4:.06)&&se.orb(i.x,i.z)):(!l.armor||s)&&(i.state="hit",i.t=0,i.vy=Math.max(i.vy,(n?n*.8:0)+a+(s?3.5:1.8)))}var fv=new Set(["SPIN_IN","SPIN_LOOP","SPIN_OUT","L4","SPIN1","RSPIN2","REVSPIN"]);function Br(i,t,e){let n=Y;if(n.iframe>0||n.dead||K.state!=="play"||n.act&&fv.has(n.act.name))return;n.hp-=i*(n.rageT>0?.6:1),n.iframe=.6,ce.play("hurt"),K.shake=Math.max(K.shake,.35),zt.hurt.classList.remove("on"),zt.hurt.offsetWidth,zt.hurt.classList.add("on");let s=n.x-t,r=n.z-e,o=Math.hypot(s,r)||1;if(se.blood(n.x,1.2,n.z,s/o,r/o,8,.7),n.hp<=0){n.hp=0,n.dead=!0,n.act={name:"DEATH",t:0,def:Mt.DEATH},K.slowmo=.35,setTimeout(()=>Hd(!1),1800);return}if(n.act&&n.act.name==="CHARGE"){K.shake=Math.max(K.shake,.25);return}n.rageT<=0&&(!n.act||n.act.name!=="RAGE")&&pn("HURT")}function Dd(i){let t=Math.random()*Math.PI*2,e=20+Math.random()*8,n=Y.x+Math.cos(t)*e,s=Y.z+Math.sin(t)*e,r=Math.hypot(n,s);r>me-1&&(n*=(me-1)/r,s*=(me-1)/r);let o=kn[i];Ae.push({type:i,x:n,z:s,y:0,vx:0,vz:0,vy:0,face:Math.atan2(Y.x-n,Y.z-s),hp:o.hp,state:"walk",t:0,cd:1+Math.random()*2,phase:Math.random()*6,dead:!1,lastHit:-1,pose:{},spin:0,slot:Math.random()*Math.PI*2})}var Pa=new Ot,Nd=new Be,Ud=new T,Od=new T,Gv=new Je;function pv(i){let t=0;for(let e of Ae)!e.dead&&(e.state==="windup"||e.state==="strike")&&t++;ui.begin();for(let e=Ae.length-1;e>=0;e--){let n=Ae[e],s=kn[n.type];n.t+=i;let r=Y.x-n.x,o=Y.z-n.z,a=Math.hypot(r,o);if(n.dead){if(n.vy-=22*i,n.y=Math.max(0,n.y+n.vy*i),n.y<=0&&(n.vy<-6&&!n.bounced?(n.bounced=!0,n.vy=-n.vy*.35,se.mist(n.x,.2,n.z,0,0,2),se.decal(n.x,n.z,1.4)):(n.vy=0,n.spin*=.8,n.tumble=0)),n.face+=n.spin*i,n.tumbleA=(n.tumbleA||0)+(n.tumble||0)*i,n.t>2.2&&(n.y-=(n.t-2.2)*.8*i*4),n.t>3.2){Ae.splice(e,1);continue}}else switch(n.y=Math.max(0,n.y+n.vy*i),n.vy=n.y>0?n.vy-22*i:0,n.state){case"walk":{let c=t<5||n.type==="brute"?s.range*.85:3.2+n.slot%1.5,h=r,u=o;if(a<c+.4&&t>=5){let g=Math.sign(Math.sin(n.slot))||1;h=-o*g,u=r*g}let d=Math.hypot(h,u)||1,f=a>c?s.speed:t>=5?s.speed*.35:0;n.x+=h/d*f*i,n.z+=u/d*f*i,n.face=di(n.face,Math.atan2(r,o),Math.min(1,i*6)),n.phase+=i*(f>.1?8*(s.speed/3):2),n.cd-=i,a<s.range&&n.cd<=0&&t<5&&!Y.dead&&(n.state="windup",n.t=0,t++);break}case"windup":n.face=di(n.face,Math.atan2(r,o),Math.min(1,i*4)),n.t>=s.wind&&(n.state="strike",n.t=0,n.struck=!1);break;case"strike":if(s.lunge&&n.t<.22&&(n.x+=Math.sin(n.face)*s.lunge*i,n.z+=Math.cos(n.face)*s.lunge*i),!n.struck&&n.t>.06){n.struck=!0;let c=Math.abs(di(n.face,Math.atan2(r,o),1)-n.face);a<s.range+.35&&c<1&&Br(s.dmg,n.x,n.z)}n.t>.55&&(n.state="walk",n.t=0,n.cd=1.2+Math.random()*2.2);break;case"hit":n.t>.42&&n.y<=0&&(n.state="walk",n.t=0,n.cd=.6+Math.random());break}n.x+=n.vx*i,n.z+=n.vz*i;let l=Math.exp(-i*(n.y>0?1:7));if(n.vx*=l,n.vz*=l,!n.dead){let c=s.radius+.5;a<c&&a>.001&&(n.x=Y.x-r/a*c,n.z=Y.z-o/a*c),Zh(n,s.radius);let h=Math.hypot(n.x,n.z);h>me+2&&(n.x*=(me+2)/h,n.z*=(me+2)/h)}}for(let e=0;e<Ae.length;e++){let n=Ae[e];if(n.dead)continue;let s=kn[n.type].radius;for(let r=e+1;r<Ae.length;r++){let o=Ae[r];if(o.dead)continue;let a=s+kn[o.type].radius,l=o.x-n.x,c=o.z-n.z,h=l*l+c*c;if(h<a*a&&h>1e-6){let u=Math.sqrt(h),d=(a-u)*.5;n.x-=l/u*d,n.z-=c/u*d,o.x+=l/u*d,o.z+=c/u*d}}}for(let e of Ae){let n=kn[e.type],s=e.state,r=s==="windup"?e.t/n.wind:s==="strike"?e.t/.18:s==="hit"?e.t/.42:s==="dead"?e.t/.5:e.t,o=Lh(s,r,e.phase,e.target||(e.target={}));Hs(e.pose,o,Math.min(1,i*(s==="strike"?40:16)));let a=n.scale;Pa.compose(Ud.set(e.x,e.y,e.z),Nd.setFromAxisAngle(Td,e.face),Od.set(a,a,a));let l=e.dead&&e.y>.05&&e.tumbleA?{...e.pose,rootPitch:(e.pose.rootPitch||0)+e.tumbleA}:e.pose;ui.add(Pa,l,n.weapon,n.color)}ui.end()}function mv(i){let t=ct;if(!t||t.state==="hidden")return;i*=t.speed,t.t+=i;let e=Y.x-t.x,n=Y.z-t.z,s=Math.hypot(e,n),r=Math.atan2(e,n),o=l=>{t.face=di(t.face,r,Math.min(1,i*l))};switch(t.state){case"roar":t.t>2.2&&nn("walk");break;case"walk":o(3),s>4.2&&(t.x+=Math.sin(t.face)*3.4*i,t.z+=Math.cos(t.face)*3.4*i),t.phase+=i*5,t.cd-=i,t.cd<=0&&(s<6?nn(Math.random()<.6?"cleaveWind":"slamWind"):s>10?nn("chargeWind"):Math.random()<.5&&nn("slamWind"));break;case"cleaveWind":o(2.5),t.t>.85&&nn("cleave");break;case"cleave":if(!t.hitDone&&t.t>.12){t.hitDone=!0,ce.play("swingHeavy");let l=Math.abs(di(t.face,r,1)-t.face);s<6.2&&l<1.4&&Br(160*t.dmgMul,t.x,t.z)}t.t>1&&nn("walk",.8+Math.random());break;case"slamWind":t.t<.05&&!t.tele&&(t.tele=!0,t.tx=Y.x,t.tz=Y.z,se.telegraph(t.tx,t.tz,4,1.15)),t.face=di(t.face,Math.atan2(t.tx-t.x,t.tz-t.z),Math.min(1,i*4)),Math.hypot(t.tx-t.x,t.tz-t.z)>3.2&&(t.x+=Math.sin(t.face)*4.5*i,t.z+=Math.cos(t.face)*4.5*i),t.t>1.15&&nn("slam");break;case"slam":!t.hitDone&&t.t>.14&&(t.hitDone=!0,t.tele=!1,ce.play("slam"),K.shake=.9,se.ring(t.tx,t.tz,5.2,16732192,.6),se.spark(t.tx,.3,t.tz,30),Math.hypot(Y.x-t.tx,Y.z-t.tz)<4.1&&Br(220*t.dmgMul,t.tx,t.tz)),t.t>1.2&&nn("walk",1+Math.random());break;case"chargeWind":o(5),t.t>.7&&(nn("charge"),ce.play("roar",.5));break;case"charge":t.x+=Math.sin(t.face)*15*i,t.z+=Math.cos(t.face)*15*i,t.phase+=i*12,!t.hitDone&&s<2.3&&(t.hitDone=!0,Br(140*t.dmgMul,t.x,t.z));for(let l of Ae)!l.dead&&Math.hypot(l.x-t.x,l.z-t.z)<2&&(l.vx+=Math.sin(t.face)*6,l.vz+=Math.cos(t.face)*6);(t.t>.95||Math.hypot(t.x,t.z)>me)&&nn("walk",1.2);break;case"stagger":t.t>1.6&&nn("walk",.4);break;case"dead":t.deadT+=i,t.deadT>3.2&&!K.result&&Hd(!0);break}if(t.state!=="dead"){Zh(t,1);let l=Math.hypot(t.x,t.z);l>me&&(t.x*=me/l,t.z*=me/l);let c=Math.hypot(Y.x-t.x,Y.z-t.z);c<1.6&&c>.001&&(Y.x=t.x+(Y.x-t.x)/c*1.6,Y.z=t.z+(Y.z-t.z)/c*1.6)}let a={cleaveWind:t.t/.85,cleave:t.t/.3,slamWind:t.t/.9,slam:t.t/.18,chargeWind:t.t/.6,roar:t.t/2.2,stagger:t.t/1.6,dead:t.t/1.4}[t.state]??t.t;Ch(t.state,a,t.phase,t.target),Hs(t.pose,t.target,Math.min(1,i*(t.state==="cleave"||t.state==="slam"?30:12))),Gs(t.rig,t.pose),t.rig.root.position.set(t.x,0,t.z),t.rig.root.rotation.y=t.face,t.state==="roar"&&Math.random()<.5&&se.ember(t.x,1.5,t.z)}function nn(i,t){ct.state=i,ct.t=0,ct.hitDone=!1,t!==void 0&&(ct.cd=t)}function Fd(i){let t=ct;t.hp-=i,t.poise+=i,Pd();let e=t.x-Y.x,n=t.z-Y.z,s=Math.hypot(e,n)||1;if(se.blood(t.x-e/s*.8,2.4,t.z-n/s*.8,-e/s,-n/s,16,1.2),se.spark(t.x-e/s,2.2,t.z-n/s,6),t.hp<=0&&!t.dead){t.hp=0,t.dead=!0,nn("dead"),t.deadT=0,K.slowmo=.25,K.ko++,K.shake=1,qh(40),ce.play("roar",.8);for(let r of Ae)r.dead||(r.hp=0,Ia(r,1,8,4,!0,t.x,t.z));return}if(t.poise>420&&t.state!=="stagger"&&(t.poise=0,nn("stagger"),ce.play("clang")),t.enrageOn&&!t.enraged&&t.hp<t.maxHp*.5){t.enraged=!0,t.speed*=1.25,t.dmgMul*=1.15,t.mat.emissive.setRGB(.25,.02,0),Kh("\u6FC0\u6602",`${Oi().boss.name}\u304C\u6012\u308A\u72C2\u3046`),ce.play("roar"),K.shake=.8;for(let r=0;r<8;r++)Dd(r%2?"lancer":"grunt")}}function _d(){K.waveIdx++;let i=Da();if(K.spawnLeft=i.total,K.spawnT=1.5,Kh(i.label,i.sub),ce.play("wave"),i.boss){ct=ct||Ad();let t=Oi().boss;ct.maxHp=ct.hp=t.hp,ct.speed=t.speed,ct.dmgMul=t.dmg,ct.enrageOn=t.enrage,ct.enraged=!1,ct.dead=!1,ct.poise=0,ct.mat.color.setRGB(...t.tint).multiplyScalar(2),ct.mat.emissive.setRGB(0,0,0),Dt("#boss .name").textContent=t.name,ct.x=Y.x*.6,ct.z=Y.z+14;let e=Math.hypot(ct.x,ct.z);e>me-4&&(ct.x*=(me-4)/e,ct.z*=(me-4)/e),Math.hypot(ct.x-Y.x,ct.z-Y.z)<9&&(ct.x=Y.x*.3,ct.z=Y.z*.3-Math.sign(Y.z||1)*6),ct.face=Math.atan2(Y.x-ct.x,Y.z-ct.z),nn("roar"),ct.cd=2,ct.rig.root.visible=!0,setTimeout(()=>ce.play("roar"),400),zt.bossBar.hidden=!1}}function gv(i){if(K.waveIdx<0){K.introT-=i,K.introT<=0&&_d();return}let t=Da();if(!t)return;let e=Ae.filter(n=>!n.dead).length;K.spawnT-=i,K.spawnLeft>0&&e<t.max&&K.spawnT<=0&&((!t.boss||ct.state!=="roar")&&(Dd(nv(t.mix)),K.spawnLeft--),K.spawnT=t.rate*(e<6?.3:1)),!t.boss&&K.spawnLeft<=0&&e===0&&(K.waveDelay+=i,K.waveDelay>1.4&&(K.waveDelay=0,_d())),zt.objective.textContent=t.boss?`${Oi().boss.name}\u3092\u8A0E\u3066`:`\u6B8B\u308A ${K.spawnLeft+e} \u4F53`}var xd=0;function Kh(i,t){zt.waveLabel.textContent=i,Dt("#wave-sub").textContent=t,zt.wave.classList.remove("show"),zt.wave.offsetWidth,zt.wave.classList.add("show"),clearTimeout(xd),xd=setTimeout(()=>zt.wave.classList.remove("show"),2600)}var hi=new T(0,9,-10),vd=new T;function _v(i){let t=window.innerWidth<window.innerHeight,e=t?11:8.6,n=t?9.6:7,s=Y.x,r=Y.z;ct&&!ct.dead&&ct.state!=="hidden"&&Da()?.boss&&Math.hypot(ct.x-Y.x,ct.z-Y.z)<16&&(s+=(ct.x-Y.x)*.25,r+=(ct.z-Y.z)*.25);let o=s,a=r-e,l=1-Math.exp(-i*6);if(hi.x+=(o-hi.x)*l,hi.z+=(a-hi.z)*l,hi.y+=(n-hi.y)*l,vd.set(hi.x,1.1,hi.z+e+1.6),Fe.position.copy(hi),K.shake>0){let c=K.shake*K.shake*.35;Fe.position.x+=(Math.random()-.5)*c,Fe.position.y+=(Math.random()-.5)*c,K.shake=Math.max(0,K.shake-i*2.2)}Fe.lookAt(vd),sn.position.set(Y.x+14,20,Y.z+22),sn.target.position.set(Y.x,0,Y.z),kr.position.set(Fe.position.x-3,Fe.position.y+6,Fe.position.z-4),kr.target.position.set(Y.x,.8,Y.z)}var En={};function Or(i,t,e){En[t]!==e&&(En[t]=e,i.style.transform=e)}function Ph(i,t,e){En[t]!==e&&(En[t]=e,i.textContent=e)}function xv(i){let t=Y;t.hpLag+=(t.hp-t.hpLag)*Math.min(1,i*3),Or(zt.hp,"hp",`scaleX(${(t.hp/t.maxHp).toFixed(3)})`),Or(zt.hpLag,"hpl",`scaleX(${(t.hpLag/t.maxHp).toFixed(3)})`);let e=t.rageT>0?t.rageT/12:t.rage/100;Or(zt.rage,"rg",`scaleX(${e.toFixed(3)})`);let n=t.rage>=100&&t.rageT<=0;En.ready!==n&&(En.ready=n,zt.rageBtn.classList.toggle("ready",n),document.body.classList.toggle("rage-ready",n));let s=t.rageT>0;En.raging!==s&&(En.raging=s,document.body.classList.toggle("raging",s)),Ph(zt.ko,"ko",String(K.ko)),Ph(Dt("#lv"),"lv",`Lv${t.level}`),Or(Dt("#exp-fill"),"exp",`scaleX(${t.level>=La?1:(t.exp/Gh(t.level)).toFixed(3)})`),K.comboT>0&&(K.comboT-=i,Ph(zt.comboN,"cn",String(K.combo)),En.combo!==K.combo&&(En.combo=K.combo,zt.combo.classList.remove("pop"),zt.combo.offsetWidth,zt.combo.classList.add("pop")),zt.combo.hidden=K.combo<2,K.comboT<=0&&(K.combo=0,zt.combo.hidden=!0)),ct&&!zt.bossBar.hidden&&Or(zt.bossFill,"boss",`scaleX(${(ct.hp/ct.maxHp).toFixed(3)})`)}function Bd(i){$t.fog.color.setHex(i.fog),$t.fog.density=i.density,$t.background=$t.fog.color,Aa.color.setHex(i.sky),Aa.groundColor.setHex(i.gnd),Aa.intensity=i.hemi,sn.color.setHex(i.sun),sn.intensity=i.sunI,Wh.color.setHex(i.rim),kr.intensity=i.fill??1.6,Fh&&Fh.color.setHex(i.ground),$t.environmentIntensity=i.envI}var kd="ironwake-save-v1";function zd(){try{return JSON.parse(localStorage.getItem(kd)||"null")}catch{return null}}function yd(i){try{localStorage.setItem(kd,JSON.stringify(i))}catch{}}function $h(){let i=zd(),t=Dt("#btn-continue");i&&Ws[i.stage]?(t.hidden=!1,t.textContent=`\u7D9A\u304D\u304B\u3089\uFF08${Ws[i.stage].name}\u30FBLv${i.level}\uFF09`):t.hidden=!0}function Jh(i=!1){for(let t of Ae)t.dead=!0;Ae.length=0,se.clear(),ui.begin(),ui.end(),i||(Y.level=1,Y.exp=0),Y.maxHp=1e3+90*(Y.level-1),Y.comboIdx=0,Y.x=0,Y.z=0,Y.face=0,Y.hp=Y.maxHp,Y.hpLag=Y.maxHp,Y.rage=0,Y.rageT=0,Y.act=null,Y.dead=!1,Y.iframe=0,Y.mat.emissive.setRGB(0,0,0),Fr.intensity=0,ct&&(ct.rig.root.visible=!1,ct.state="hidden",ct.hp=ct.maxHp,ct.dead=!1,ct.poise=0),Object.assign(K,{time:0,ko:0,combo:0,maxCombo:0,comboT:0,hitstop:0,shake:0,slowmo:1,waveIdx:-1,spawnLeft:0,waveDelay:0,result:null,playTime:0}),zt.bossBar.hidden=!0,zt.combo.hidden=!0,document.body.classList.remove("raging","rage-ready");for(let t in En)delete En[t]}function Vr(i=0,t=1,e=0){let n=Y.weapons[Dt("#weapon-select").value]||Y.weapons.standard;for(let s of Object.values(Y.weapons))s.mesh.visible=s===n;Y.sword=n.mesh,Y.blade=n.blade,ce.unlock(),ce.play("ui"),ce.startMusic(),Y.level=t,Y.exp=e,Jh(!0),K.stageIdx=i,Bd(Oi().env),zt.title.hidden=!0,zt.result.hidden=!0,zt.pause.hidden=!0,zt.hud.hidden=!1,K.state="play",Ze.clear(),Kh(Oi().name,Oi().place),K.introT=2.6}function Hd(i){if(K.result)return;K.result=i?"win":"lose",K.state="over",ce.stopMusic();let t=K.playTime,e=K.ko*100+K.maxCombo*40+(i?2e4:0)-Math.floor(t)*10,n=i?e>38e3?"S":e>32e3?"A":e>26e3?"B":"C":"\u2014",s=Oi(),r=Ws[K.stageIdx+1],o=i&&!r;Dt("#result-title").textContent=o?"\u5168\u6226\u5834\u5236\u8987":i?`${s.name} \u7A81\u7834`:"\u529B\u5C3D\u304D\u305F",Dt("#result-sub").textContent=i?`${s.boss.name}\u306F\u9244\u584A\u306E\u524D\u306B\u5012\u308C\u305F`:`${s.name}\u30FB${Da()?.label??""}\u3067\u5012\u308C\u305F`,Dt("#r-lv").textContent=Y.level;let a=Dt("#btn-next");a.hidden=!i||!r,i&&r&&(a.textContent=`\u6B21\u306E\u6226\u5834\u3078\uFF08${r.name}\uFF09`,yd({stage:K.stageIdx+1,level:Y.level,exp:Y.exp})),o&&yd({stage:K.stageIdx,level:Y.level,exp:Y.exp,cleared:!0}),Dt("#r-ko").textContent=K.ko,Dt("#r-combo").textContent=K.maxCombo,Dt("#r-time").textContent=`${Math.floor(t/60)}:${String(Math.floor(t%60)).padStart(2,"0")}`,Dt("#r-rank").textContent=n,zt.result.classList.toggle("win",i),setTimeout(()=>{zt.result.hidden=!1,zt.hud.hidden=!0},i?200:600)}function Ys(i){K.state!=="play"&&K.state!=="pause"||(K.state=i?"pause":"play",zt.pause.hidden=!i,ce.ctx&&(i?ce.ctx.suspend():ce.ctx.resume()),Ze.clear())}var Md=performance.now(),Dh=0,Nh=0,Uh=0;function Vd(i){requestAnimationFrame(Vd);let t=Math.min(.05,(i-Md)/1e3);if(Md=i,Dh+=t,Nh++,Uh+=t,Uh>2.5&&K.state==="play"){let e=Dh/Nh;Dh=0,Nh=0,Uh=0,e>1/45&&Ui.ratio>1?(Ui.ratio=Math.max(1,Ui.ratio-.25),mn.setPixelRatio(Ui.ratio),Yh()):e>1/40&&Ui.shadows&&(Ui.shadows=!1,sn.castShadow=!1)}if(K.state==="play"||K.state==="over")if(Ze.consume("pause")&&K.state==="play")Ys(!0);else{K.hitstop>0&&(K.hitstop-=t,t*=.08),K.slowmo+=(1-K.slowmo)*Math.min(1,t*.8),t*=K.slowmo;for(let e=0;e<(K.substeps||1);e++)K.time+=t,K.state==="play"&&(K.playTime+=t),cv(t),pv(t),mv(t),K.state==="play"&&gv(t),se.update(t);xv(t)}else K.state==="pause"?Ze.consume("pause")&&Ys(!1):K.state==="title"&&Y&&(K.time+=t,Ur(K.time*2,0,Y.target),Hs(Y.pose,Y.target,.2),Gs(Y.rig,Y.pose),Y.face=Math.PI+Math.sin(K.time*.3)*.25,Y.rig.root.rotation.y=Y.face,se.update(t));K.state!=="debug"&&(Y&&_v(t),mn.render($t,Fe))}function vv(i,t,e=.6,n=5,s="hero"){K.state="debug",zt.title.hidden=!0,zt.hud.hidden=!0;let r={};if(s==="hero")typeof i=="object"?Object.assign(r,i):i==="idle"?Ur(0,0,r):i==="run"?Ur(t,1,r):Ea(Mt[i].keys,t,r),Y.pose=r,Gs(Y.rig,r),Y.x=0,Y.z=0,Y.face=0,Y.rig.root.position.set(0,0,0),Y.rig.root.rotation.y=0;else if(s==="boss")ct.rig.root.visible=!0,ct.state=i,Ch(i,t,t*6,r),Gs(ct.rig,r),ct.rig.root.position.set(0,0,0),ct.rig.root.rotation.y=0,Y.rig.root.position.set(50,0,50);else{Ae.length=0,Ae.push({type:s,x:0,z:0,y:0,vx:0,vz:0,vy:0,face:0,hp:1,state:i,t,phase:t*6,dead:!1,pose:Lh(i,t,t*6,{})}),Y.rig.root.position.set(50,0,50),ui.begin();let a=kn[s],l=a.scale;Pa.compose(Ud.set(0,0,0),Nd.identity(),Od.set(l,l,l)),ui.add(Pa,Ae[0].pose,a.weapon,a.color),ui.end()}let o=s==="boss"?2.3:1;Fe.position.set(Math.sin(e)*n*o,1.4*o,Math.cos(e)*n*o),Fe.lookAt(0,1*o,0),sn.position.set(14,20,22),sn.target.position.set(0,0,0),mn.render($t,Fe)}function jh(i){K.state==="loading"&&(zt.loadText.textContent=`\u8D77\u52D5\u306B\u5931\u6557\u3057\u305F\uFF08${i}\uFF09\u3002\u3053\u306E\u8868\u793A\u3092\u4F1D\u3048\u3066\u307B\u3057\u3044\u3002`)}window.addEventListener("error",i=>jh(i.message||"error"));window.addEventListener("unhandledrejection",i=>jh(i.reason&&i.reason.message||String(i.reason)));setTimeout(()=>jh("60\u79D2\u4EE5\u5185\u306B\u8D77\u52D5\u3057\u306A\u304B\u3063\u305F"),6e4);async function yv(){try{await $x()}catch(i){zt.loadText.textContent=`\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u305F\uFF08${i&&i.message||i}\uFF09\u3002\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u3066\u307B\u3057\u3044\u3002`,console.error(i);return}try{Jx(),se=new Bh;for(let i of[fe.grunt.torso.material,fe.weapons.gsword.material])i.color.setScalar(1.6),i.envMapIntensity=1.4;ui=new Oh(fe.grunt,fe.skel,{gsword:fe.weapons.gsword,club:fe.weapons.club,spear:fe.props.spear},72),Y=iv(),ct=Ad(),ct.rig.root.visible=!1,ct.state="hidden",mn.compile($t,Fe)}catch(i){zt.loadText.textContent=`\u8D77\u52D5\u306B\u5931\u6557\u3057\u305F\uFF08${i&&i.message||i}\uFF09\u3002\u3053\u306E\u8868\u793A\u3092\u4F1D\u3048\u3066\u307B\u3057\u3044\u3002`,console.error(i);return}{let i=Dt("#weapon-select");for(let t of Sa){let e=document.createElement("option");e.value=t.id,e.textContent=t.label,i.appendChild(e)}i.value="standard",Dt(".weapon-choice").hidden=Sa.length===0}K.state="title",Bd(Ws[0].env),$h(),Dt("#loading").hidden=!0,zt.title.hidden=!1,window.__game={G:K,hero:()=>Y,enemies:Ae,boss:()=>ct,input:Ze,startGame:Vr,QUALITY:Ui,renderer:mn,debugPose:vv,gainExp:qh,STAGES:Ws,hurtHero:Br,startAction:pn,comboChain:kh,FINISHERS:Ld,pickLight:Vh,HERO_ACTIONS:Mt}}zt.start.addEventListener("click",()=>Vr(0,1,0));Dt("#btn-continue").addEventListener("click",()=>{let i=zd();i&&Vr(i.stage,i.level,i.exp||0)});Dt("#btn-retry").addEventListener("click",()=>Vr(K.stageIdx,Y.level,Y.exp));Dt("#btn-next").addEventListener("click",()=>Vr(K.stageIdx+1,Y.level,Y.exp));Dt("#btn-title").addEventListener("click",()=>{zt.result.hidden=!0,zt.title.hidden=!1,Jh(),K.state="title",$h()});Dt("#btn-pause").addEventListener("click",()=>Ys(!0));Dt("#btn-resume").addEventListener("click",()=>Ys(!1));Dt("#btn-quit").addEventListener("click",()=>{Ys(!1),K.state="title",ce.stopMusic(),Jh(),zt.pause.hidden=!0,zt.hud.hidden=!0,zt.title.hidden=!1,$h()});Dt("#btn-sound").addEventListener("click",i=>{ce.unlock(),ce.setMuted(!ce.muted),i.currentTarget.classList.toggle("off",ce.muted),i.currentTarget.setAttribute("aria-pressed",String(ce.muted))});document.addEventListener("visibilitychange",()=>{document.hidden&&K.state==="play"&&Ys(!0)});requestAnimationFrame(Vd);yv();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
