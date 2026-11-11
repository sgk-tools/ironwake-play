(()=>{var ec="170";var hd=0,Ch=1,ud=2;var Zu=1,nc=2,Zn=3,Fn=0,en=1,ln=2,Si=0,ms=1,Ri=2,Ih=3,Ph=4,dd=5,Wi=100,fd=101,pd=102,md=103,gd=104,xd=200,_d=201,vd=202,yd=203,Go=204,Wo=205,Md=206,Sd=207,bd=208,Rd=209,Ed=210,wd=211,Ad=212,Td=213,Ld=214,Yo=0,Xo=1,qo=2,vs=3,Zo=4,Ko=5,$o=6,Jo=7,Ku=0,Cd=1,Id=2,bi=0,Pd=1,Dd=2,Nd=3,ic=4,Ud=5,Od=6,Fd=7,Dh="attached",kd="detached",$u=300,ys=301,Ms=302,or=303,jo=304,Ga=306,Qn=1e3,$n=1001,lr=1002,Ge=1003,sc=1004;var fs=1005;var Qe=1006,ir=1007;var On=1008;var ti=1009,Ju=1010,ju=1011,cr=1012,rc=1013,qi=1014,In=1015,Mr=1016,ac=1017,oc=1018,Ss=1020,Qu=35902,t0=1021,e0=1022,_n=1023,n0=1024,i0=1025,gs=1026,bs=1027,lc=1028,cc=1029,s0=1030,hc=1031;var uc=1033,la=33776,ca=33777,ha=33778,ua=33779,Qo=35840,tl=35841,el=35842,nl=35843,il=36196,sl=37492,rl=37496,al=37808,ol=37809,ll=37810,cl=37811,hl=37812,ul=37813,dl=37814,fl=37815,pl=37816,ml=37817,gl=37818,xl=37819,_l=37820,vl=37821,da=36492,yl=36494,Ml=36495,r0=36283,Sl=36284,bl=36285,Rl=36286;var Rs=2300,Es=2301,ho=2302,Nh=2400,Uh=2401,Oh=2402,Bd=2500;var a0=0,Wa=1,Sr=2,zd=3200,Hd=3201;var o0=0,Vd=1,yi="",Re="srgb",Ye="srgb-linear",Ya="linear",le="srgb";var ji=7680;var Fh=519,Gd=512,Wd=513,Yd=514,l0=515,Xd=516,qd=517,Zd=518,Kd=519,El=35044,dc=35048;var kh="300 es",Jn=2e3,fa=2001,Ei=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bh=1234567,sr=Math.PI/180,ws=180/Math.PI;function Pn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Ve(i,t,e){return Math.max(t,Math.min(e,i))}function fc(i,t){return(i%t+t)%t}function $d(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Jd(i,t,e){return i!==t?(e-i)/(t-i):0}function rr(i,t,e){return(1-e)*i+e*t}function jd(i,t,e,n){return rr(i,t,1-Math.exp(-e*n))}function Qd(i,t=1){return t-Math.abs(fc(i,t*2)-t)}function tf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ef(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function nf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function sf(i,t){return i+Math.random()*(t-i)}function rf(i){return i*(.5-Math.random())}function af(i){i!==void 0&&(Bh=i);let t=Bh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function of(i){return i*sr}function lf(i){return i*ws}function cf(i){return(i&i-1)===0&&i!==0}function hf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function df(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var c0={DEG2RAD:sr,RAD2DEG:ws,generateUUID:Pn,clamp:Ve,euclideanModulo:fc,mapLinear:$d,inverseLerp:Jd,lerp:rr,damp:jd,pingpong:Qd,smoothstep:tf,smootherstep:ef,randInt:nf,randFloat:sf,randFloatSpread:rf,seededRandom:af,degToRad:of,radToDeg:lf,isPowerOfTwo:cf,ceilPowerOfTwo:hf,floorPowerOfTwo:uf,setQuaternionFromProperEuler:df,normalize:re,denormalize:Cn},Ot=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],v=s[1],M=s[4],_=s[7],I=s[2],w=s[5],A=s[8];return r[0]=a*x+o*v+l*I,r[3]=a*m+o*M+l*w,r[6]=a*p+o*_+l*A,r[1]=c*x+h*v+u*I,r[4]=c*m+h*M+u*w,r[7]=c*p+h*_+u*A,r[2]=d*x+f*v+g*I,r[5]=d*m+f*M+g*w,r[8]=d*p+f*_+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(uo.makeScale(t,e)),this}rotate(t){return this.premultiply(uo.makeRotation(-t)),this}translate(t,e){return this.premultiply(uo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},uo=new zt;function h0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ff(){let i=hr("canvas");return i.style.display="block",i}var zh={};function er(i){i in zh||(zh[i]=!0,console.warn(i))}function pf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function mf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Zt={enabled:!0,workingColorSpace:Ye,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(i.r=jn(i.r),i.g=jn(i.g),i.b=jn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(i.r=xs(i.r),i.g=xs(i.g),i.b=xs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yi?Ya:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hh=[.64,.33,.3,.6,.15,.06],Vh=[.2126,.7152,.0722],Gh=[.3127,.329],Wh=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yh=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[Ye]:{primaries:Hh,whitePoint:Gh,transfer:Ya,toXYZ:Wh,fromXYZ:Yh,luminanceCoefficients:Vh,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:Hh,whitePoint:Gh,transfer:le,toXYZ:Wh,fromXYZ:Yh,luminanceCoefficients:Vh,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}});var Qi,wl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qi===void 0&&(Qi=hr("canvas")),Qi.width=t.width,Qi.height=t.height;let n=Qi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=hr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},xf=0,pa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Pn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(fo(s[a].image)):r.push(fo(s[a]))}else r=fo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function fo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _f=0,Ne=class i extends Ei{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=$n,s=$n,r=Qe,a=On,o=_n,l=ti,c=i.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Pn(),this.name="",this.source=new pa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$u)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qn:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case lr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qn:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case lr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=$u;Ne.DEFAULT_ANISOTROPY=1;var ee=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,_=(f+1)/2,I=(p+1)/2,w=(h+d)/4,A=(u+x)/4,L=(g+m)/4;return M>_&&M>I?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=A/n):_>I?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=L/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=A/r,s=L/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Al=class extends Ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ne(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new pa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends Al{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ma=class extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Tl=class extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*x,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let I=Math.sqrt(M),w=Math.atan2(I,p*v);m=Math.sin(m*w)/I,o=Math.sin(o*w)/I}let _=o*v;if(l=l*m+d*_,c=c*m+f*_,h=h*m+g*_,u=u*m+x*_,m===1-o){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return po.copy(this).projectOnVector(t),this.sub(po)}reflect(t){return this.sub(po.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},po=new T,Xh=new Fe,vn=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox)),Ur.applyMatrix4(t.matrixWorld),this.union(Ur)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qs),Or.subVectors(this.max,qs),ts.subVectors(t.a,qs),es.subVectors(t.b,qs),ns.subVectors(t.c,qs),pi.subVectors(es,ts),mi.subVectors(ns,es),Fi.subVectors(ts,ns);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Fi.z,Fi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Fi.z,0,-Fi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Fi.y,Fi.x,0];return!mo(e,ts,es,ns,Or)||(e=[1,0,0,0,1,0,0,0,1],!mo(e,ts,es,ns,Or))?!1:(Fr.crossVectors(pi,mi),e=[Fr.x,Fr.y,Fr.z],mo(e,ts,es,ns,Or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Vn=[new T,new T,new T,new T,new T,new T,new T,new T],An=new T,Ur=new vn,ts=new T,es=new T,ns=new T,pi=new T,mi=new T,Fi=new T,qs=new T,Or=new T,Fr=new T,ki=new T;function mo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ki.fromArray(i,r);let o=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),l=t.dot(ki),c=e.dot(ki),h=n.dot(ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var vf=new vn,Zs=new T,go=new T,cn=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):vf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);let e=Zs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(go.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(go)),this.expandByPoint(Zs.copy(t.center).sub(go))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gn=new T,xo=new T,kr=new T,gi=new T,_o=new T,Br=new T,vo=new T,As=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xo.copy(t).add(e).multiplyScalar(.5),kr.copy(e).sub(t).normalize(),gi.copy(this.origin).sub(xo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(kr),o=gi.dot(this.direction),l=-gi.dot(kr),c=gi.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xo).addScaledVector(kr,d),f}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);let n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,s,r){_o.subVectors(e,t),Br.subVectors(n,t),vo.crossVectors(_o,Br);let a=this.direction.dot(vo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gi.subVectors(this.origin,t);let l=o*this.direction.dot(Br.crossVectors(gi,Br));if(l<0)return null;let c=o*this.direction.dot(_o.cross(gi));if(c<0||l+c>a)return null;let h=-o*gi.dot(vo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ct=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/is.setFromMatrixColumn(t,0).length(),r=1/is.setFromMatrixColumn(t,1).length(),a=1/is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yf,t,Mf)}lookAt(t,e,n){let s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),xi.crossVectors(n,an),xi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),xi.crossVectors(n,an)),xi.normalize(),zr.crossVectors(an,xi),s[0]=xi.x,s[4]=zr.x,s[8]=an.x,s[1]=xi.y,s[5]=zr.y,s[9]=an.y,s[2]=xi.z,s[6]=zr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],M=n[7],_=n[11],I=n[15],w=s[0],A=s[4],L=s[8],R=s[12],S=s[1],C=s[5],V=s[9],B=s[13],Y=s[2],j=s[6],X=s[10],nt=s[14],W=s[3],ot=s[7],ft=s[11],Et=s[15];return r[0]=a*w+o*S+l*Y+c*W,r[4]=a*A+o*C+l*j+c*ot,r[8]=a*L+o*V+l*X+c*ft,r[12]=a*R+o*B+l*nt+c*Et,r[1]=h*w+u*S+d*Y+f*W,r[5]=h*A+u*C+d*j+f*ot,r[9]=h*L+u*V+d*X+f*ft,r[13]=h*R+u*B+d*nt+f*Et,r[2]=g*w+x*S+m*Y+p*W,r[6]=g*A+x*C+m*j+p*ot,r[10]=g*L+x*V+m*X+p*ft,r[14]=g*R+x*B+m*nt+p*Et,r[3]=v*w+M*S+_*Y+I*W,r[7]=v*A+M*C+_*j+I*ot,r[11]=v*L+M*V+_*X+I*ft,r[15]=v*R+M*B+_*nt+I*Et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+x*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,M=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,_=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,I=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,w=e*v+n*M+s*_+r*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return t[0]=v*A,t[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*A,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*A,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*A,t[4]=M*A,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*A,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*A,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*A,t[8]=_*A,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*p-e*u*p)*A,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*p+e*o*p)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*A,t[12]=I*A,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*m+e*u*m)*A,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*A,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,v=l*c,M=l*h,_=l*u,I=n.x,w=n.y,A=n.z;return s[0]=(1-(x+p))*I,s[1]=(f+_)*I,s[2]=(g-M)*I,s[3]=0,s[4]=(f-_)*w,s[5]=(1-(d+p))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+M)*A,s[9]=(m-v)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=is.set(s[0],s[1],s[2]).length(),a=is.set(s[4],s[5],s[6]).length(),o=is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Tn.copy(this);let c=1/r,h=1/a,u=1/o;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,e.setFromRotationMatrix(Tn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Jn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(o===Jn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===fa)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Jn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h,g,x;if(o===Jn)g=(a+r)*u,x=-2*u;else if(o===fa)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},is=new T,Tn=new Ct,yf=new T(0,0,0),Mf=new T(1,1,1),xi=new T,zr=new T,an=new T,qh=new Ct,Zh=new Fe,Ze=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ze.DEFAULT_ORDER="XYZ";var ga=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Sf=0,Kh=new T,ss=new Fe,Wn=new Ct,Hr=new T,Ks=new T,bf=new T,Rf=new Fe,$h=new T(1,0,0),Jh=new T(0,1,0),jh=new T(0,0,1),Qh={type:"added"},Ef={type:"removed"},rs={type:"childadded",child:null},yo={type:"childremoved",child:null},ye=class i extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new T,e=new Ze,n=new Fe,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new zt}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis($h,t)}rotateY(t){return this.rotateOnAxis(Jh,t)}rotateZ(t){return this.rotateOnAxis(jh,t)}translateOnAxis(t,e){return Kh.copy(t).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($h,t)}translateY(t){return this.translateOnAxis(Jh,t)}translateZ(t){return this.translateOnAxis(jh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hr.copy(t):Hr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Ks,Hr,this.up):Wn.lookAt(Hr,Ks,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(Wn),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qh),rs.child=t,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ef),yo.child=t,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qh),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,bf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,Rf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ye.DEFAULT_UP=new T(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ln=new T,Yn=new T,Mo=new T,Xn=new T,as=new T,os=new T,tu=new T,So=new T,bo=new T,Ro=new T,Eo=new ee,wo=new ee,Ao=new ee,Yi=class i{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ln.subVectors(t,e),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ln.subVectors(s,e),Yn.subVectors(n,e),Mo.subVectors(t,e);let a=Ln.dot(Ln),o=Ln.dot(Yn),l=Ln.dot(Mo),c=Yn.dot(Yn),h=Yn.dot(Mo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Eo.setScalar(0),wo.setScalar(0),Ao.setScalar(0),Eo.fromBufferAttribute(t,e),wo.fromBufferAttribute(t,n),Ao.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Eo,r.x),a.addScaledVector(wo,r.y),a.addScaledVector(Ao,r.z),a}static isFrontFacing(t,e,n,s){return Ln.subVectors(n,e),Yn.subVectors(t,e),Ln.cross(Yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Ln.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;as.subVectors(s,n),os.subVectors(r,n),So.subVectors(t,n);let l=as.dot(So),c=os.dot(So);if(l<=0&&c<=0)return e.copy(n);bo.subVectors(t,s);let h=as.dot(bo),u=os.dot(bo);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(as,a);Ro.subVectors(t,r);let f=as.dot(Ro),g=os.dot(Ro);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(os,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return tu.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(tu,o);let p=1/(m+x+d);return a=x*p,o=d*p,e.copy(n).addScaledVector(as,a).addScaledVector(os,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},u0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function To(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=fc(t,1),e=Ve(e,0,1),n=Ve(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=To(a,r,t+1/3),this.g=To(a,r,t),this.b=To(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){let n=u0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return Zt.fromWorkingColorSpace(He.copy(this),t),Math.round(Ve(He.r*255,0,255))*65536+Math.round(Ve(He.g*255,0,255))*256+Math.round(Ve(He.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(He.copy(this),e);let n=He.r,s=He.g,r=He.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Re){Zt.fromWorkingColorSpace(He.copy(this),t);let e=He.r,n=He.g,s=He.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(Vr);let n=rr(_i.h,Vr.h,e),s=rr(_i.s,Vr.s,e),r=rr(_i.l,Vr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new bt;bt.NAMES=u0;var wf=0,hn=class extends Ei{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Pn(),this.name="",this.blending=ms,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Wo,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Go&&(n.blendSrc=this.blendSrc),this.blendDst!==Wo&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},We=class extends hn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=Ku,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Te=new T,Gr=new Ot,Ee=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=El,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==El&&(t.usage=this.usage),t}};var xa=class extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var _a=class extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ue=class extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}},Af=0,xn=new Ct,Lo=new ye,ls=new T,on=new vn,$s=new vn,De=new T,Ce=class i extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(h0(t)?_a:xa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return Lo.lookAt(t),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ue(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];$s.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(on.min,$s.min),on.expandByPoint(De),De.addVectors(on.max,$s.max),on.expandByPoint(De)):(on.expandByPoint($s.min),on.expandByPoint($s.max))}on.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)De.fromBufferAttribute(o,c),l&&(ls.fromBufferAttribute(t,c),De.add(ls)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new T,l[L]=new T;let c=new T,h=new T,u=new T,d=new Ot,f=new Ot,g=new Ot,x=new T,m=new T;function p(L,R,S){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,R),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),o[L].add(x),o[R].add(x),o[S].add(x),l[L].add(m),l[R].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let L=0,R=v.length;L<R;++L){let S=v[L],C=S.start,V=S.count;for(let B=C,Y=C+V;B<Y;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let M=new T,_=new T,I=new T,w=new T;function A(L){I.fromBufferAttribute(s,L),w.copy(I);let R=o[L];M.copy(R),M.sub(I.multiplyScalar(I.dot(R))).normalize(),_.crossVectors(w,R);let C=_.dot(l[L])<0?-1:1;a.setXYZW(L,M.x,M.y,M.z,C)}for(let L=0,R=v.length;L<R;++L){let S=v[L],C=S.start,V=S.count;for(let B=C,Y=C+V;B<Y;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ee(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},eu=new Ct,Bi=new As,Wr=new cn,nu=new T,Yr=new T,Xr=new T,qr=new T,Co=new T,Zr=new T,iu=new T,Kr=new T,he=class extends ye{constructor(t=new Ce,e=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Zr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Co.fromBufferAttribute(u,t),a?Zr.addScaledVector(Co,h):Zr.addScaledVector(Co.sub(e),h))}e.add(Zr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(r),Bi.copy(t.ray).recast(t.near),!(Wr.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Wr,nu)===null||Bi.origin.distanceToSquared(nu)>(t.far-t.near)**2))&&(eu.copy(r).invert(),Bi.copy(t.ray).applyMatrix4(eu),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,I=M;_<I;_+=3){let w=o.getX(_),A=o.getX(_+1),L=o.getX(_+2);s=$r(this,p,t,n,c,h,u,w,A,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=o.getX(m),M=o.getX(m+1),_=o.getX(m+2);s=$r(this,a,t,n,c,h,u,v,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,I=M;_<I;_+=3){let w=_,A=_+1,L=_+2;s=$r(this,p,t,n,c,h,u,w,A,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=m,M=m+1,_=m+2;s=$r(this,a,t,n,c,h,u,v,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Tf(i,t,e,n,s,r,a,o){let l;if(t.side===en?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Fn,o),l===null)return null;Kr.copy(o),Kr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Kr);return c<e.near||c>e.far?null:{distance:c,point:Kr.clone(),object:i}}function $r(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Yr),i.getVertexPosition(l,Xr),i.getVertexPosition(c,qr);let h=Tf(i,t,e,n,Yr,Xr,qr,iu);if(h){let u=new T;Yi.getBarycoord(iu,Yr,Xr,qr,u),s&&(h.uv=Yi.getInterpolatedAttribute(s,o,l,c,u,new Ot)),r&&(h.uv1=Yi.getInterpolatedAttribute(r,o,l,c,u,new Ot)),a&&(h.normal=Yi.getInterpolatedAttribute(a,o,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new T,materialIndex:0};Yi.getNormal(Yr,Xr,qr,d.normal),h.face=d,h.barycoord=u}return h}var ur=class i extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(u,2));function g(x,m,p,v,M,_,I,w,A,L,R){let S=_/A,C=I/L,V=_/2,B=I/2,Y=w/2,j=A+1,X=L+1,nt=0,W=0,ot=new T;for(let ft=0;ft<X;ft++){let Et=ft*C-B;for(let Yt=0;Yt<j;Yt++){let ce=Yt*S-V;ot[x]=ce*v,ot[m]=Et*M,ot[p]=Y,c.push(ot.x,ot.y,ot.z),ot[x]=0,ot[m]=0,ot[p]=w>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Yt/A),u.push(1-ft/L),nt+=1}}for(let ft=0;ft<L;ft++)for(let Et=0;Et<A;Et++){let Yt=d+Et+j*ft,ce=d+Et+j*(ft+1),Z=d+(Et+1)+j*(ft+1),it=d+(Et+1)+j*ft;l.push(Yt,ce,it),l.push(ce,Z,it),W+=6}o.addGroup(f,W,R),f+=W,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ts(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function qe(i){let t={};for(let e=0;e<i.length;e++){let n=Ts(i[e]);for(let s in n)t[s]=n[s]}return t}function Lf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function d0(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var Cf={clone:Ts,merge:qe},If=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends hn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=If,this.fragmentShader=Pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=Lf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},va=class extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vi=new T,su=new Ot,ru=new Ot,Le=class extends va{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,su,ru),e.subVectors(ru,su)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(sr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},cs=-90,hs=1,Ll=class extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Le(cs,hs,t,e);s.layers=this.layers,this.add(s);let r=new Le(cs,hs,t,e);r.layers=this.layers,this.add(r);let a=new Le(cs,hs,t,e);a.layers=this.layers,this.add(a);let o=new Le(cs,hs,t,e);o.layers=this.layers,this.add(o);let l=new Le(cs,hs,t,e);l.layers=this.layers,this.add(l);let c=new Le(cs,hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ya=class extends Ne{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ys,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cl=class extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ya(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ur(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Si});r.uniforms.tEquirect.value=e;let a=new he(s,r),o=e.minFilter;return e.minFilter===On&&(e.minFilter=Qe),new Ll(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Io=new T,Df=new T,Nf=new zt,Kn=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Io.subVectors(n,e).cross(Df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Io),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Nf.getNormalMatrix(t),s=this.coplanarPoint(Io).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},zi=new cn,Jr=new T,dr=class{constructor(t=new Kn,e=new Kn,n=new Kn,s=new Kn,r=new Kn,a=new Kn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],v=s[13],M=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,m-f,_-p).normalize(),n[1].setComponents(l+r,d+c,m+f,_+p).normalize(),n[2].setComponents(l+a,d+h,m+g,_+v).normalize(),n[3].setComponents(l-a,d-h,m-g,_-v).normalize(),n[4].setComponents(l-o,d-u,m-x,_-M).normalize(),e===Jn)n[5].setComponents(l+o,d+u,m+x,_+M).normalize();else if(e===fa)n[5].setComponents(o,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Jr.x=s.normal.x>0?t.max.x:t.min.x,Jr.y=s.normal.y>0?t.max.y:t.min.y,Jr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function f0(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Uf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var kn=class i extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let v=p*d-a;for(let M=0;M<c;M++){let _=M*u-r;g.push(_,-v,0),x.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let M=v+c*p,_=v+c*(p+1),I=v+1+c*(p+1),w=v+1+c*p;f.push(M,_,w),f.push(_,I,w)}this.setIndex(f),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Of=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ff=`#ifdef USE_ALPHAHASH
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
#endif`,kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vf=`#ifdef USE_AOMAP
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
#endif`,Gf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wf=`#ifdef USE_BATCHING
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
#endif`,Yf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kf=`#ifdef USE_IRIDESCENCE
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
#endif`,$f=`#ifdef USE_BUMPMAP
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
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rp=`#define PI 3.141592653589793
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
} // validated`,ap=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,op=`vec3 transformedNormal = objectNormal;
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
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",fp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gp=`#ifdef USE_ENVMAP
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
#endif`,xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
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
#endif`,vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bp=`#ifdef USE_GRADIENTMAP
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
}`,Rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ap=`uniform bool receiveShadow;
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
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dp=`PhysicalMaterial material;
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
#endif`,Np=`struct PhysicalMaterial {
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
}`,Up=`
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
#endif`,Op=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yp=`#if defined( USE_POINTS_UV )
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
#endif`,Xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jp=`#ifdef USE_MORPHTARGETS
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
#endif`,jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sm=`#ifdef USE_NORMALMAP
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
#endif`,rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ym=`float getShadowMask() {
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
}`,Mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sm=`#ifdef USE_SKINNING
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
#endif`,bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rm=`#ifdef USE_SKINNING
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
#endif`,Em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lm=`#ifdef USE_TRANSMISSION
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
#endif`,Cm=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Om=`uniform sampler2D t2D;
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
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`#include <common>
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
}`,Vm=`#if DEPTH_PACKING == 3200
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
}`,Gm=`#define DISTANCE
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
}`,Wm=`#define DISTANCE
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`uniform float scale;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Km=`#include <common>
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
}`,$m=`uniform vec3 diffuse;
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
}`,Jm=`#define LAMBERT
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
}`,jm=`#define LAMBERT
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
}`,Qm=`#define MATCAP
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
}`,tg=`#define MATCAP
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
}`,eg=`#define NORMAL
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
}`,ng=`#define NORMAL
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
}`,ig=`#define PHONG
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
}`,sg=`#define PHONG
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
}`,rg=`#define STANDARD
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
}`,ag=`#define STANDARD
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
}`,og=`#define TOON
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
}`,lg=`#define TOON
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
}`,cg=`uniform float size;
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
}`,hg=`uniform vec3 diffuse;
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
}`,ug=`#include <common>
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
}`,dg=`uniform vec3 color;
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
}`,fg=`uniform float rotation;
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
}`,pg=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Of,alphahash_pars_fragment:Ff,alphamap_fragment:kf,alphamap_pars_fragment:Bf,alphatest_fragment:zf,alphatest_pars_fragment:Hf,aomap_fragment:Vf,aomap_pars_fragment:Gf,batching_pars_vertex:Wf,batching_vertex:Yf,begin_vertex:Xf,beginnormal_vertex:qf,bsdfs:Zf,iridescence_fragment:Kf,bumpmap_pars_fragment:$f,clipping_planes_fragment:Jf,clipping_planes_pars_fragment:jf,clipping_planes_pars_vertex:Qf,clipping_planes_vertex:tp,color_fragment:ep,color_pars_fragment:np,color_pars_vertex:ip,color_vertex:sp,common:rp,cube_uv_reflection_fragment:ap,defaultnormal_vertex:op,displacementmap_pars_vertex:lp,displacementmap_vertex:cp,emissivemap_fragment:hp,emissivemap_pars_fragment:up,colorspace_fragment:dp,colorspace_pars_fragment:fp,envmap_fragment:pp,envmap_common_pars_fragment:mp,envmap_pars_fragment:gp,envmap_pars_vertex:xp,envmap_physical_pars_fragment:Tp,envmap_vertex:_p,fog_vertex:vp,fog_pars_vertex:yp,fog_fragment:Mp,fog_pars_fragment:Sp,gradientmap_pars_fragment:bp,lightmap_pars_fragment:Rp,lights_lambert_fragment:Ep,lights_lambert_pars_fragment:wp,lights_pars_begin:Ap,lights_toon_fragment:Lp,lights_toon_pars_fragment:Cp,lights_phong_fragment:Ip,lights_phong_pars_fragment:Pp,lights_physical_fragment:Dp,lights_physical_pars_fragment:Np,lights_fragment_begin:Up,lights_fragment_maps:Op,lights_fragment_end:Fp,logdepthbuf_fragment:kp,logdepthbuf_pars_fragment:Bp,logdepthbuf_pars_vertex:zp,logdepthbuf_vertex:Hp,map_fragment:Vp,map_pars_fragment:Gp,map_particle_fragment:Wp,map_particle_pars_fragment:Yp,metalnessmap_fragment:Xp,metalnessmap_pars_fragment:qp,morphinstance_vertex:Zp,morphcolor_vertex:Kp,morphnormal_vertex:$p,morphtarget_pars_vertex:Jp,morphtarget_vertex:jp,normal_fragment_begin:Qp,normal_fragment_maps:tm,normal_pars_fragment:em,normal_pars_vertex:nm,normal_vertex:im,normalmap_pars_fragment:sm,clearcoat_normal_fragment_begin:rm,clearcoat_normal_fragment_maps:am,clearcoat_pars_fragment:om,iridescence_pars_fragment:lm,opaque_fragment:cm,packing:hm,premultiplied_alpha_fragment:um,project_vertex:dm,dithering_fragment:fm,dithering_pars_fragment:pm,roughnessmap_fragment:mm,roughnessmap_pars_fragment:gm,shadowmap_pars_fragment:xm,shadowmap_pars_vertex:_m,shadowmap_vertex:vm,shadowmask_pars_fragment:ym,skinbase_vertex:Mm,skinning_pars_vertex:Sm,skinning_vertex:bm,skinnormal_vertex:Rm,specularmap_fragment:Em,specularmap_pars_fragment:wm,tonemapping_fragment:Am,tonemapping_pars_fragment:Tm,transmission_fragment:Lm,transmission_pars_fragment:Cm,uv_pars_fragment:Im,uv_pars_vertex:Pm,uv_vertex:Dm,worldpos_vertex:Nm,background_vert:Um,background_frag:Om,backgroundCube_vert:Fm,backgroundCube_frag:km,cube_vert:Bm,cube_frag:zm,depth_vert:Hm,depth_frag:Vm,distanceRGBA_vert:Gm,distanceRGBA_frag:Wm,equirect_vert:Ym,equirect_frag:Xm,linedashed_vert:qm,linedashed_frag:Zm,meshbasic_vert:Km,meshbasic_frag:$m,meshlambert_vert:Jm,meshlambert_frag:jm,meshmatcap_vert:Qm,meshmatcap_frag:tg,meshnormal_vert:eg,meshnormal_frag:ng,meshphong_vert:ig,meshphong_frag:sg,meshphysical_vert:rg,meshphysical_frag:ag,meshtoon_vert:og,meshtoon_frag:lg,points_vert:cg,points_frag:hg,shadow_vert:ug,shadow_frag:dg,sprite_vert:fg,sprite_frag:pg},st={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Un={basic:{uniforms:qe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:qe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new bt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:qe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:qe([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:qe([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new bt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:qe([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:qe([st.points,st.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:qe([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:qe([st.common,st.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:qe([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:qe([st.sprite,st.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:qe([st.common,st.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:qe([st.lights,st.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Un.physical={uniforms:qe([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var jr={r:0,b:0,g:0},Hi=new Ze,mg=new Ct;function gg(i,t,e,n,s,r,a){let o=new bt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function x(v){let M=!1,_=g(v);_===null?p(o,l):_&&_.isColor&&(p(_,1),M=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,M){let _=g(M);_&&(_.isCubeTexture||_.mapping===Ga)?(h===void 0&&(h=new he(new ur(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Ts(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Hi.copy(M.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mg.makeRotationFromEuler(Hi)),h.material.toneMapped=Zt.getTransfer(_.colorSpace)!==le,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new he(new kn(2,2),new yn({name:"BackgroundMaterial",uniforms:Ts(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(_.colorSpace)!==le,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,M){v.getRGB(jr,d0(i)),n.buffers.color.setClear(jr.r,jr.g,jr.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:x,addToRenderList:m}}function xg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(S,C,V,B,Y){let j=!1,X=u(B,V,C);r!==X&&(r=X,c(r.object)),j=f(S,B,V,Y),j&&g(S,B,V,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,_(S,C,V,B),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,C,V){let B=V.wireframe===!0,Y=n[S.id];Y===void 0&&(Y={},n[S.id]=Y);let j=Y[C.id];j===void 0&&(j={},Y[C.id]=j);let X=j[B];return X===void 0&&(X=d(l()),j[B]=X),X}function d(S){let C=[],V=[],B=[];for(let Y=0;Y<e;Y++)C[Y]=0,V[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:V,attributeDivisors:B,object:S,attributes:{},index:null}}function f(S,C,V,B){let Y=r.attributes,j=C.attributes,X=0,nt=V.getAttributes();for(let W in nt)if(nt[W].location>=0){let ft=Y[W],Et=j[W];if(Et===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(Et=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(Et=S.instanceColor)),ft===void 0||ft.attribute!==Et||Et&&ft.data!==Et.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function g(S,C,V,B){let Y={},j=C.attributes,X=0,nt=V.getAttributes();for(let W in nt)if(nt[W].location>=0){let ft=j[W];ft===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(ft=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(ft=S.instanceColor));let Et={};Et.attribute=ft,ft&&ft.data&&(Et.data=ft.data),Y[W]=Et,X++}r.attributes=Y,r.attributesNum=X,r.index=B}function x(){let S=r.newAttributes;for(let C=0,V=S.length;C<V;C++)S[C]=0}function m(S){p(S,0)}function p(S,C){let V=r.newAttributes,B=r.enabledAttributes,Y=r.attributeDivisors;V[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),Y[S]!==C&&(i.vertexAttribDivisor(S,C),Y[S]=C)}function v(){let S=r.newAttributes,C=r.enabledAttributes;for(let V=0,B=C.length;V<B;V++)C[V]!==S[V]&&(i.disableVertexAttribArray(V),C[V]=0)}function M(S,C,V,B,Y,j,X){X===!0?i.vertexAttribIPointer(S,C,V,Y,j):i.vertexAttribPointer(S,C,V,B,Y,j)}function _(S,C,V,B){x();let Y=B.attributes,j=V.getAttributes(),X=C.defaultAttributeValues;for(let nt in j){let W=j[nt];if(W.location>=0){let ot=Y[nt];if(ot===void 0&&(nt==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),nt==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor)),ot!==void 0){let ft=ot.normalized,Et=ot.itemSize,Yt=t.get(ot);if(Yt===void 0)continue;let ce=Yt.buffer,Z=Yt.type,it=Yt.bytesPerElement,yt=Z===i.INT||Z===i.UNSIGNED_INT||ot.gpuType===rc;if(ot.isInterleavedBufferAttribute){let lt=ot.data,Dt=lt.stride,Ft=ot.offset;if(lt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<W.locationSize;Xt++)p(W.location+Xt,lt.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Xt=0;Xt<W.locationSize;Xt++)m(W.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let Xt=0;Xt<W.locationSize;Xt++)M(W.location+Xt,Et/W.locationSize,Z,ft,Dt*it,(Ft+Et/W.locationSize*Xt)*it,yt)}else{if(ot.isInstancedBufferAttribute){for(let lt=0;lt<W.locationSize;lt++)p(W.location+lt,ot.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let lt=0;lt<W.locationSize;lt++)m(W.location+lt);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let lt=0;lt<W.locationSize;lt++)M(W.location+lt,Et/W.locationSize,Z,ft,Et*it,Et/W.locationSize*lt*it,yt)}}else if(X!==void 0){let ft=X[nt];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(W.location,ft);break;case 3:i.vertexAttrib3fv(W.location,ft);break;case 4:i.vertexAttrib4fv(W.location,ft);break;default:i.vertexAttrib1fv(W.location,ft)}}}}v()}function I(){L();for(let S in n){let C=n[S];for(let V in C){let B=C[V];for(let Y in B)h(B[Y].object),delete B[Y];delete C[V]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;let C=n[S.id];for(let V in C){let B=C[V];for(let Y in B)h(B[Y].object),delete B[Y];delete C[V]}delete n[S.id]}function A(S){for(let C in n){let V=n[C];if(V[S.id]===void 0)continue;let B=V[S.id];for(let Y in B)h(B[Y].object),delete B[Y];delete V[S.id]}}function L(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:R,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function _g(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function vg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==_n&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let L=A===Mr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ti&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==In&&!L)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:I,maxSamples:w}}function yg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Kn,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,M=v*4,_=p.clippingState||null;l.value=_,_=h(g,d,M,f);for(let I=0;I!==M;++I)_[I]=e[I];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=f;M!==x;++M,_+=4)a.copy(u[M]).applyMatrix4(v,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Mg(i){let t=new WeakMap;function e(a,o){return o===or?a.mapping=ys:o===jo&&(a.mapping=Ms),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===or||o===jo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Cl(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ls=class extends va{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ps=4,au=[.125,.215,.35,.446,.526,.582],Xi=20,Po=new Ls,ou=new bt,Do=null,No=0,Uo=0,Oo=!1,Gi=(1+Math.sqrt(5))/2,us=1/Gi,lu=[new T(-Gi,us,0),new T(Gi,us,0),new T(-us,0,Gi),new T(us,0,Gi),new T(0,Gi,-us),new T(0,Gi,us),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],Cs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Do=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Do,No,Uo),this._renderer.xr.enabled=Oo,t.scissorTest=!1,Qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Do=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Mr,format:_n,colorSpace:Ye,depthBuffer:!1},s=cu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sg(r)),this._blurMaterial=bg(r,t,e)}return s}_compileMaterial(t){let e=new he(this._lodPlanes[0],t);this._renderer.compile(e,Po)}_sceneToCubeUV(t,e,n,s){let o=new Le(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ou),h.toneMapping=bi,h.autoClear=!1;let f=new We({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new he(new ur,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(ou),x=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let M=this._cubeSize;Qr(s,v*M,p>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ys||t.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new he(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Qr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Po)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=lu[(s-r-1)%lu.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new he(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Xi;m>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);let p=[],v=0;for(let A=0;A<Xi;++A){let L=A/x,R=Math.exp(-L*L/2);p.push(R),A===0?v+=R:A<m&&(v+=2*R)}for(let A=0;A<p.length;A++)p[A]=p[A]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;let _=this._sizeLods[s],I=3*_*(s>M-ps?s-M+ps:0),w=4*(this._cubeSize-_);Qr(e,I,w,3*_,2*_),l.setRenderTarget(e),l.render(u,Po)}};function Sg(i){let t=[],e=[],n=[],s=i,r=i-ps+1+au.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ps?l=au[a-i+ps-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*f),M=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let w=0;w<f;w++){let A=w%3*2/3-1,L=w>2?0:-1,R=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];v.set(R,x*g*w),M.set(d,m*g*w);let S=[w,w,w,w,w,w];_.set(S,p*g*w)}let I=new Ce;I.setAttribute("position",new Ee(v,x)),I.setAttribute("uv",new Ee(M,m)),I.setAttribute("faceIndex",new Ee(_,p)),t.push(I),s>ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function cu(i,t,e){let n=new ei(i,t,e);return n.texture.mapping=Ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function bg(i,t,e){let n=new Float32Array(Xi),s=new T(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function hu(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function uu(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function pc(){return`

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
	`}function Rg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===or||l===jo,h=l===ys||l===Ms;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Cs(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Cs(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Eg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&er("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wg(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let M=0,_=v.length;M<_;M+=3){let I=v[M+0],w=v[M+1],A=v[M+2];d.push(I,w,w,A,A,I)}}else if(g!==void 0){let v=g.array;x=g.version;for(let M=0,_=v.length/3-1;M<_;M+=3){let I=M+0,w=M+1,A=M+2;d.push(I,w,w,A,A,I)}}else return;let m=new(h0(d)?_a:xa)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Ag(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*x[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Tg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Lg(i,t,e){let n=new WeakMap,s=new ee;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let R=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let _=o.attributes.position.count*M,I=1;_>t.maxTextureSize&&(I=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*I*4*u),A=new ma(w,_,I,u);A.type=In,A.needsUpdate=!0;let L=M*4;for(let S=0;S<u;S++){let C=m[S],V=p[S],B=v[S],Y=_*I*4*S;for(let j=0;j<C.count;j++){let X=j*L;f===!0&&(s.fromBufferAttribute(C,j),w[Y+X+0]=s.x,w[Y+X+1]=s.y,w[Y+X+2]=s.z,w[Y+X+3]=0),g===!0&&(s.fromBufferAttribute(V,j),w[Y+X+4]=s.x,w[Y+X+5]=s.y,w[Y+X+6]=s.z,w[Y+X+7]=0),x===!0&&(s.fromBufferAttribute(B,j),w[Y+X+8]=s.x,w[Y+X+9]=s.y,w[Y+X+10]=s.z,w[Y+X+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new Ot(_,I)},n.set(o,d),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Cg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ma=class extends Ne{constructor(t,e,n,s,r,a,o,l,c,h=gs){if(h!==gs&&h!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gs&&(n=qi),n===void 0&&h===bs&&(n=Ss),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},p0=new Ne,du=new Ma(1,1),m0=new ma,g0=new Tl,x0=new ya,fu=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),xu=new Float32Array(4);function Us(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=fu[s];if(r===void 0&&(r=new Float32Array(s),fu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xa(i,t){let e=pu[t];e===void 0&&(e=new Int32Array(t),pu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ig(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function Ug(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ie(e,n))return;xu.set(n),i.uniformMatrix2fv(this.addr,!1,xu),Pe(e,n)}}function Og(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ie(e,n))return;gu.set(n),i.uniformMatrix3fv(this.addr,!1,gu),Pe(e,n)}}function Fg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ie(e,n))return;mu.set(n),i.uniformMatrix4fv(this.addr,!1,mu),Pe(e,n)}}function kg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function Vg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function Xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(du.compareFunction=l0,r=du):r=p0,e.setTexture2D(t||r,s)}function qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||g0,s)}function Zg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||x0,s)}function Kg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||m0,s)}function $g(i){switch(i){case 5126:return Ig;case 35664:return Pg;case 35665:return Dg;case 35666:return Ng;case 35674:return Ug;case 35675:return Og;case 35676:return Fg;case 5124:case 35670:return kg;case 35667:case 35671:return Bg;case 35668:case 35672:return zg;case 35669:case 35673:return Hg;case 5125:return Vg;case 36294:return Gg;case 36295:return Wg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Kg}}function Jg(i,t){i.uniform1fv(this.addr,t)}function jg(i,t){let e=Us(t,this.size,2);i.uniform2fv(this.addr,e)}function Qg(i,t){let e=Us(t,this.size,3);i.uniform3fv(this.addr,e)}function t1(i,t){let e=Us(t,this.size,4);i.uniform4fv(this.addr,e)}function e1(i,t){let e=Us(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function n1(i,t){let e=Us(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function i1(i,t){let e=Us(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function s1(i,t){i.uniform1iv(this.addr,t)}function r1(i,t){i.uniform2iv(this.addr,t)}function a1(i,t){i.uniform3iv(this.addr,t)}function o1(i,t){i.uniform4iv(this.addr,t)}function l1(i,t){i.uniform1uiv(this.addr,t)}function c1(i,t){i.uniform2uiv(this.addr,t)}function h1(i,t){i.uniform3uiv(this.addr,t)}function u1(i,t){i.uniform4uiv(this.addr,t)}function d1(i,t,e){let n=this.cache,s=t.length,r=Xa(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||p0,r[a])}function f1(i,t,e){let n=this.cache,s=t.length,r=Xa(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||g0,r[a])}function p1(i,t,e){let n=this.cache,s=t.length,r=Xa(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||x0,r[a])}function m1(i,t,e){let n=this.cache,s=t.length,r=Xa(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||m0,r[a])}function g1(i){switch(i){case 5126:return Jg;case 35664:return jg;case 35665:return Qg;case 35666:return t1;case 35674:return e1;case 35675:return n1;case 35676:return i1;case 5124:case 35670:return s1;case 35667:case 35671:return r1;case 35668:case 35672:return a1;case 35669:case 35673:return o1;case 5125:return l1;case 36294:return c1;case 36295:return h1;case 36296:return u1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return p1;case 36289:case 36303:case 36311:case 36292:return m1}}var Il=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$g(e.type)}},Pl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=g1(e.type)}},Dl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Fo=/(\w+)(\])?(\[|\.)?/g;function _u(i,t){i.seq.push(t),i.map[t.id]=t}function x1(i,t,e){let n=i.name,s=n.length;for(Fo.lastIndex=0;;){let r=Fo.exec(n),a=Fo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){_u(e,c===void 0?new Il(o,i,t):new Pl(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Dl(o),_u(e,u)),e=u}}}var _s=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);x1(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function vu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var _1=37297,v1=0;function y1(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var yu=new zt;function M1(i){Zt._getMatrix(yu,Zt.workingColorSpace,i);let t=`mat3( ${yu.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case Ya:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Mu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+y1(i.getShaderSource(t),a)}else return s}function S1(i,t){let e=M1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function b1(i,t){let e;switch(t){case Pd:e="Linear";break;case Dd:e="Reinhard";break;case Nd:e="Cineon";break;case ic:e="ACESFilmic";break;case Od:e="AgX";break;case Fd:e="Neutral";break;case Ud:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ta=new T;function R1(){Zt.getLuminanceCoefficients(ta);let i=ta.x.toFixed(4),t=ta.y.toFixed(4),e=ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function w1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function A1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function nr(i){return i!==""}function Su(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var T1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(i){return i.replace(T1,C1)}var L1=new Map;function C1(i,t){let e=Vt[t];if(e===void 0){let n=L1.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Nl(e)}var I1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ru(i){return i.replace(I1,P1)}function P1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function D1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===nc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function N1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ys:case Ms:t="ENVMAP_TYPE_CUBE";break;case Ga:t="ENVMAP_TYPE_CUBE_UV";break}return t}function U1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ms:t="ENVMAP_MODE_REFRACTION";break}return t}function O1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ku:t="ENVMAP_BLENDING_MULTIPLY";break;case Cd:t="ENVMAP_BLENDING_MIX";break;case Id:t="ENVMAP_BLENDING_ADD";break}return t}function F1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function k1(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=D1(e),c=N1(e),h=U1(e),u=O1(e),d=F1(e),f=E1(e),g=w1(r),x=s.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(nr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(nr).join(`
`),p.length>0&&(p+=`
`)):(m=[Eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),p=[Eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?Vt.tonemapping_pars_fragment:"",e.toneMapping!==bi?b1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,S1("linearToOutputTexel",e.outputColorSpace),R1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(nr).join(`
`)),a=Nl(a),a=Su(a,e),a=bu(a,e),o=Nl(o),o=Su(o,e),o=bu(o,e),a=Ru(a),o=Ru(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=v+m+a,_=v+p+o,I=vu(s,s.VERTEX_SHADER,M),w=vu(s,s.FRAGMENT_SHADER,_);s.attachShader(x,I),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(C){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(I).trim(),Y=s.getShaderInfoLog(w).trim(),j=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,w);else{let nt=Mu(s,I,"vertex"),W=Mu(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+nt+`
`+W)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||Y==="")&&(X=!1);X&&(C.diagnostics={runnable:j,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(I),s.deleteShader(w),L=new _s(s,x),R=A1(s,x)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let R;this.getAttributes=function(){return R===void 0&&A(this),R};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,_1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=v1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=w,this}var B1=0,Ul=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ol(t),e.set(t,n)),n}},Ol=class{constructor(t){this.id=B1++,this.code=t,this.usedTimes=0}};function z1(i,t,e,n,s,r,a){let o=new ga,l=new Ul,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(R){return c.add(R),R===0?"uv":`uv${R}`}function m(R,S,C,V,B){let Y=V.fog,j=B.geometry,X=R.isMeshStandardMaterial?V.environment:null,nt=(R.isMeshStandardMaterial?e:t).get(R.envMap||X),W=nt&&nt.mapping===Ga?nt.image.height:null,ot=g[R.type];R.precision!==null&&(f=s.getMaxPrecision(R.precision),f!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",f,"instead."));let ft=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Et=ft!==void 0?ft.length:0,Yt=0;j.morphAttributes.position!==void 0&&(Yt=1),j.morphAttributes.normal!==void 0&&(Yt=2),j.morphAttributes.color!==void 0&&(Yt=3);let ce,Z,it,yt;if(ot){let se=Un[ot];ce=se.vertexShader,Z=se.fragmentShader}else ce=R.vertexShader,Z=R.fragmentShader,l.update(R),it=l.getVertexShaderID(R),yt=l.getFragmentShaderID(R);let lt=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),Ft=B.isInstancedMesh===!0,Xt=B.isBatchedMesh===!0,ve=!!R.map,jt=!!R.matcap,we=!!nt,U=!!R.aoMap,mn=!!R.lightMap,Kt=!!R.bumpMap,$t=!!R.normalMap,Lt=!!R.displacementMap,ge=!!R.emissiveMap,Tt=!!R.metalnessMap,E=!!R.roughnessMap,y=R.anisotropy>0,O=R.clearcoat>0,K=R.dispersion>0,Q=R.iridescence>0,q=R.sheen>0,Mt=R.transmission>0,ct=y&&!!R.anisotropyMap,pt=O&&!!R.clearcoatMap,Qt=O&&!!R.clearcoatNormalMap,tt=O&&!!R.clearcoatRoughnessMap,mt=Q&&!!R.iridescenceMap,It=Q&&!!R.iridescenceThicknessMap,Nt=q&&!!R.sheenColorMap,gt=q&&!!R.sheenRoughnessMap,Jt=!!R.specularMap,Ht=!!R.specularColorMap,fe=!!R.specularIntensityMap,P=Mt&&!!R.transmissionMap,at=Mt&&!!R.thicknessMap,G=!!R.gradientMap,$=!!R.alphaMap,dt=R.alphaTest>0,ht=!!R.alphaHash,kt=!!R.extensions,be=bi;R.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(be=i.toneMapping);let Be={shaderID:ot,shaderType:R.type,shaderName:R.name,vertexShader:ce,fragmentShader:Z,defines:R.defines,customVertexShaderID:it,customFragmentShaderID:yt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:f,batching:Xt,batchingColor:Xt&&B._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&B.instanceColor!==null,instancingMorph:Ft&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Ye,alphaToCoverage:!!R.alphaToCoverage,map:ve,matcap:jt,envMap:we,envMapMode:we&&nt.mapping,envMapCubeUVHeight:W,aoMap:U,lightMap:mn,bumpMap:Kt,normalMap:$t,displacementMap:d&&Lt,emissiveMap:ge,normalMapObjectSpace:$t&&R.normalMapType===Vd,normalMapTangentSpace:$t&&R.normalMapType===o0,metalnessMap:Tt,roughnessMap:E,anisotropy:y,anisotropyMap:ct,clearcoat:O,clearcoatMap:pt,clearcoatNormalMap:Qt,clearcoatRoughnessMap:tt,dispersion:K,iridescence:Q,iridescenceMap:mt,iridescenceThicknessMap:It,sheen:q,sheenColorMap:Nt,sheenRoughnessMap:gt,specularMap:Jt,specularColorMap:Ht,specularIntensityMap:fe,transmission:Mt,transmissionMap:P,thicknessMap:at,gradientMap:G,opaque:R.transparent===!1&&R.blending===ms&&R.alphaToCoverage===!1,alphaMap:$,alphaTest:dt,alphaHash:ht,combine:R.combine,mapUv:ve&&x(R.map.channel),aoMapUv:U&&x(R.aoMap.channel),lightMapUv:mn&&x(R.lightMap.channel),bumpMapUv:Kt&&x(R.bumpMap.channel),normalMapUv:$t&&x(R.normalMap.channel),displacementMapUv:Lt&&x(R.displacementMap.channel),emissiveMapUv:ge&&x(R.emissiveMap.channel),metalnessMapUv:Tt&&x(R.metalnessMap.channel),roughnessMapUv:E&&x(R.roughnessMap.channel),anisotropyMapUv:ct&&x(R.anisotropyMap.channel),clearcoatMapUv:pt&&x(R.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&x(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&x(R.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&x(R.iridescenceMap.channel),iridescenceThicknessMapUv:It&&x(R.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&x(R.sheenColorMap.channel),sheenRoughnessMapUv:gt&&x(R.sheenRoughnessMap.channel),specularMapUv:Jt&&x(R.specularMap.channel),specularColorMapUv:Ht&&x(R.specularColorMap.channel),specularIntensityMapUv:fe&&x(R.specularIntensityMap.channel),transmissionMapUv:P&&x(R.transmissionMap.channel),thicknessMapUv:at&&x(R.thicknessMap.channel),alphaMapUv:$&&x(R.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&($t||y),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(ve||$),fog:!!Y,useFog:R.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Dt,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Yt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:R.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:ve&&R.map.isVideoTexture===!0&&Zt.getTransfer(R.map.colorSpace)===le,decodeVideoTextureEmissive:ge&&R.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(R.emissiveMap.colorSpace)===le,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ln,flipSided:R.side===en,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:kt&&R.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&R.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function p(R){let S=[];if(R.shaderID?S.push(R.shaderID):(S.push(R.customVertexShaderID),S.push(R.customFragmentShaderID)),R.defines!==void 0)for(let C in R.defines)S.push(C),S.push(R.defines[C]);return R.isRawShaderMaterial===!1&&(v(S,R),M(S,R),S.push(i.outputColorSpace)),S.push(R.customProgramCacheKey),S.join()}function v(R,S){R.push(S.precision),R.push(S.outputColorSpace),R.push(S.envMapMode),R.push(S.envMapCubeUVHeight),R.push(S.mapUv),R.push(S.alphaMapUv),R.push(S.lightMapUv),R.push(S.aoMapUv),R.push(S.bumpMapUv),R.push(S.normalMapUv),R.push(S.displacementMapUv),R.push(S.emissiveMapUv),R.push(S.metalnessMapUv),R.push(S.roughnessMapUv),R.push(S.anisotropyMapUv),R.push(S.clearcoatMapUv),R.push(S.clearcoatNormalMapUv),R.push(S.clearcoatRoughnessMapUv),R.push(S.iridescenceMapUv),R.push(S.iridescenceThicknessMapUv),R.push(S.sheenColorMapUv),R.push(S.sheenRoughnessMapUv),R.push(S.specularMapUv),R.push(S.specularColorMapUv),R.push(S.specularIntensityMapUv),R.push(S.transmissionMapUv),R.push(S.thicknessMapUv),R.push(S.combine),R.push(S.fogExp2),R.push(S.sizeAttenuation),R.push(S.morphTargetsCount),R.push(S.morphAttributeCount),R.push(S.numDirLights),R.push(S.numPointLights),R.push(S.numSpotLights),R.push(S.numSpotLightMaps),R.push(S.numHemiLights),R.push(S.numRectAreaLights),R.push(S.numDirLightShadows),R.push(S.numPointLightShadows),R.push(S.numSpotLightShadows),R.push(S.numSpotLightShadowsWithMaps),R.push(S.numLightProbes),R.push(S.shadowMapType),R.push(S.toneMapping),R.push(S.numClippingPlanes),R.push(S.numClipIntersection),R.push(S.depthPacking)}function M(R,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),R.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),R.push(o.mask)}function _(R){let S=g[R.type],C;if(S){let V=Un[S];C=Cf.clone(V.uniforms)}else C=R.uniforms;return C}function I(R,S){let C;for(let V=0,B=h.length;V<B;V++){let Y=h[V];if(Y.cacheKey===S){C=Y,++C.usedTimes;break}}return C===void 0&&(C=new k1(i,S,R,r),h.push(C)),C}function w(R){if(--R.usedTimes===0){let S=h.indexOf(R);h[S]=h[h.length-1],h.pop(),R.destroy()}}function A(R){l.remove(R)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:I,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:L}}function H1(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function V1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function wu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Au(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||V1),n.length>1&&n.sort(d||wu),s.length>1&&s.sort(d||wu)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function G1(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Au,i.set(n,[a])):s>=r.length?(a=new Au,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function W1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new bt};break;case"SpotLight":e={position:new T,direction:new T,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function Y1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var X1=0;function q1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Z1(i){let t=new W1,e=Y1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);let s=new T,r=new Ct,a=new Ct;function o(c){let h=0,u=0,d=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,v=0,M=0,_=0,I=0,w=0,A=0;c.sort(q1);for(let R=0,S=c.length;R<S;R++){let C=c[R],V=C.color,B=C.intensity,Y=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=V.r*B,u+=V.g*B,d+=V.b*B;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],B);A++}else if(C.isDirectionalLight){let X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let nt=C.shadow,W=e.get(C);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=C.shadow.matrix,v++}n.directional[f]=X,f++}else if(C.isSpotLight){let X=t.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(V).multiplyScalar(B),X.distance=Y,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[x]=X;let nt=C.shadow;if(C.map&&(n.spotLightMap[I]=C.map,I++,nt.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[x]=nt.matrix,C.castShadow){let W=e.get(C);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=j,_++}x++}else if(C.isRectAreaLight){let X=t.get(C);X.color.copy(V).multiplyScalar(B),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=X,m++}else if(C.isPointLight){let X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){let nt=C.shadow,W=e.get(C);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,W.shadowCameraNear=nt.camera.near,W.shadowCameraFar=nt.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=C.shadow.matrix,M++}n.point[g]=X,g++}else if(C.isHemisphereLight){let X=t.get(C);X.skyColor.copy(C.color).multiplyScalar(B),X.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==v||L.numPointShadows!==M||L.numSpotShadows!==_||L.numSpotMaps!==I||L.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+I-w,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,L.directionalLength=f,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=v,L.numPointShadows=M,L.numSpotShadows=_,L.numSpotMaps=I,L.numLightProbes=A,n.version=X1++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let M=c[p];if(M.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(M.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Tu(i){let t=new Z1(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function K1(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Tu(i),t.set(s,[o])):r>=a.length?(o=new Tu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Fl=class extends hn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},kl=class extends hn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},$1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J1=`uniform sampler2D shadow_pass;
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
}`;function j1(i,t,e){let n=new dr,s=new Ot,r=new Ot,a=new ee,o=new Fl({depthPacking:Hd}),l=new kl,c={},h=e.maxTextureSize,u={[Fn]:en,[en]:Fn,[ln]:ln},d=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:$1,fragmentShader:J1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ce;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new he(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zu;let p=this.type;this.render=function(w,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let R=i.getRenderTarget(),S=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Si),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let B=p!==Zn&&this.type===Zn,Y=p===Zn&&this.type!==Zn;for(let j=0,X=w.length;j<X;j++){let nt=w[j],W=nt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ot=W.getFrameExtents();if(s.multiply(ot),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,W.mapSize.y=r.y)),W.map===null||B===!0||Y===!0){let Et=this.type!==Zn?{minFilter:Ge,magFilter:Ge}:{};W.map!==null&&W.map.dispose(),W.map=new ei(s.x,s.y,Et),W.map.texture.name=nt.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let ft=W.getViewportCount();for(let Et=0;Et<ft;Et++){let Yt=W.getViewport(Et);a.set(r.x*Yt.x,r.y*Yt.y,r.x*Yt.z,r.y*Yt.w),V.viewport(a),W.updateMatrices(nt,Et),n=W.getFrustum(),_(A,L,W.camera,nt,this.type)}W.isPointLightShadow!==!0&&this.type===Zn&&v(W,L),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(R,S,C)};function v(w,A){let L=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ei(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,L,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,L,f,x,null)}function M(w,A,L,R){let S=null,C=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)S=C;else if(S=L.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let V=S.uuid,B=A.uuid,Y=c[V];Y===void 0&&(Y={},c[V]=Y);let j=Y[B];j===void 0&&(j=S.clone(),Y[B]=j,A.addEventListener("dispose",I)),S=j}if(S.visible=A.visible,S.wireframe=A.wireframe,R===Zn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let V=i.properties.get(S);V.light=L}return S}function _(w,A,L,R,S){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Zn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);let B=t.update(w),Y=w.material;if(Array.isArray(Y)){let j=B.groups;for(let X=0,nt=j.length;X<nt;X++){let W=j[X],ot=Y[W.materialIndex];if(ot&&ot.visible){let ft=M(w,ot,R,S);w.onBeforeShadow(i,w,A,L,B,ft,W),i.renderBufferDirect(L,null,B,ft,w,W),w.onAfterShadow(i,w,A,L,B,ft,W)}}}else if(Y.visible){let j=M(w,Y,R,S);w.onBeforeShadow(i,w,A,L,B,j,null),i.renderBufferDirect(L,null,B,j,w,null),w.onAfterShadow(i,w,A,L,B,j,null)}}let V=w.children;for(let B=0,Y=V.length;B<Y;B++)_(V[B],A,L,R,S)}function I(w){w.target.removeEventListener("dispose",I);for(let L in c){let R=c[L],S=w.target.uuid;S in R&&(R[S].dispose(),delete R[S])}}}var Q1={[Yo]:Xo,[qo]:$o,[Zo]:Jo,[vs]:Ko,[Xo]:Yo,[$o]:qo,[Jo]:Zo,[Ko]:vs};function tx(i,t){function e(){let P=!1,at=new ee,G=null,$=new ee(0,0,0,0);return{setMask:function(dt){G!==dt&&!P&&(i.colorMask(dt,dt,dt,dt),G=dt)},setLocked:function(dt){P=dt},setClear:function(dt,ht,kt,be,Be){Be===!0&&(dt*=be,ht*=be,kt*=be),at.set(dt,ht,kt,be),$.equals(at)===!1&&(i.clearColor(dt,ht,kt,be),$.copy(at))},reset:function(){P=!1,G=null,$.set(-1,0,0,0)}}}function n(){let P=!1,at=!1,G=null,$=null,dt=null;return{setReversed:function(ht){if(at!==ht){let kt=t.get("EXT_clip_control");at?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);let be=dt;dt=null,this.setClear(be)}at=ht},getReversed:function(){return at},setTest:function(ht){ht?lt(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(ht){G!==ht&&!P&&(i.depthMask(ht),G=ht)},setFunc:function(ht){if(at&&(ht=Q1[ht]),$!==ht){switch(ht){case Yo:i.depthFunc(i.NEVER);break;case Xo:i.depthFunc(i.ALWAYS);break;case qo:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case Zo:i.depthFunc(i.EQUAL);break;case Ko:i.depthFunc(i.GEQUAL);break;case $o:i.depthFunc(i.GREATER);break;case Jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ht}},setLocked:function(ht){P=ht},setClear:function(ht){dt!==ht&&(at&&(ht=1-ht),i.clearDepth(ht),dt=ht)},reset:function(){P=!1,G=null,$=null,dt=null,at=!1}}}function s(){let P=!1,at=null,G=null,$=null,dt=null,ht=null,kt=null,be=null,Be=null;return{setTest:function(se){P||(se?lt(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(se){at!==se&&!P&&(i.stencilMask(se),at=se)},setFunc:function(se,En,zn){(G!==se||$!==En||dt!==zn)&&(i.stencilFunc(se,En,zn),G=se,$=En,dt=zn)},setOp:function(se,En,zn){(ht!==se||kt!==En||be!==zn)&&(i.stencilOp(se,En,zn),ht=se,kt=En,be=zn)},setLocked:function(se){P=se},setClear:function(se){Be!==se&&(i.clearStencil(se),Be=se)},reset:function(){P=!1,at=null,G=null,$=null,dt=null,ht=null,kt=null,be=null,Be=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,v=null,M=null,_=null,I=null,w=null,A=new bt(0,0,0),L=0,R=!1,S=null,C=null,V=null,B=null,Y=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,nt=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=nt>=1):W.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=nt>=2);let ot=null,ft={},Et=i.getParameter(i.SCISSOR_BOX),Yt=i.getParameter(i.VIEWPORT),ce=new ee().fromArray(Et),Z=new ee().fromArray(Yt);function it(P,at,G,$){let dt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(P,ht),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<G;kt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(at+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return ht}let yt={};yt[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc(vs),Kt(!1),$t(Ch),lt(i.CULL_FACE),U(Si);function lt(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Dt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Ft(P,at){return u[P]!==at?(i.bindFramebuffer(P,at),u[P]=at,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=at),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=at),!0):!1}function Xt(P,at){let G=f,$=!1;if(P){G=d.get(at),G===void 0&&(G=[],d.set(at,G));let dt=P.textures;if(G.length!==dt.length||G[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,kt=dt.length;ht<kt;ht++)G[ht]=i.COLOR_ATTACHMENT0+ht;G.length=dt.length,$=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,$=!0);$&&i.drawBuffers(G)}function ve(P){return g!==P?(i.useProgram(P),g=P,!0):!1}let jt={[Wi]:i.FUNC_ADD,[fd]:i.FUNC_SUBTRACT,[pd]:i.FUNC_REVERSE_SUBTRACT};jt[md]=i.MIN,jt[gd]=i.MAX;let we={[xd]:i.ZERO,[_d]:i.ONE,[vd]:i.SRC_COLOR,[Go]:i.SRC_ALPHA,[Ed]:i.SRC_ALPHA_SATURATE,[bd]:i.DST_COLOR,[Md]:i.DST_ALPHA,[yd]:i.ONE_MINUS_SRC_COLOR,[Wo]:i.ONE_MINUS_SRC_ALPHA,[Rd]:i.ONE_MINUS_DST_COLOR,[Sd]:i.ONE_MINUS_DST_ALPHA,[wd]:i.CONSTANT_COLOR,[Ad]:i.ONE_MINUS_CONSTANT_COLOR,[Td]:i.CONSTANT_ALPHA,[Ld]:i.ONE_MINUS_CONSTANT_ALPHA};function U(P,at,G,$,dt,ht,kt,be,Be,se){if(P===Si){x===!0&&(Dt(i.BLEND),x=!1);return}if(x===!1&&(lt(i.BLEND),x=!0),P!==dd){if(P!==m||se!==R){if((p!==Wi||_!==Wi)&&(i.blendEquation(i.FUNC_ADD),p=Wi,_=Wi),se)switch(P){case ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ri:i.blendFunc(i.ONE,i.ONE);break;case Ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ph:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ri:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ph:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}v=null,M=null,I=null,w=null,A.set(0,0,0),L=0,m=P,R=se}return}dt=dt||at,ht=ht||G,kt=kt||$,(at!==p||dt!==_)&&(i.blendEquationSeparate(jt[at],jt[dt]),p=at,_=dt),(G!==v||$!==M||ht!==I||kt!==w)&&(i.blendFuncSeparate(we[G],we[$],we[ht],we[kt]),v=G,M=$,I=ht,w=kt),(be.equals(A)===!1||Be!==L)&&(i.blendColor(be.r,be.g,be.b,Be),A.copy(be),L=Be),m=P,R=!1}function mn(P,at){P.side===ln?Dt(i.CULL_FACE):lt(i.CULL_FACE);let G=P.side===en;at&&(G=!G),Kt(G),P.blending===ms&&P.transparent===!1?U(Si):U(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let $=P.stencilWrite;o.setTest($),$&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ge(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(P){S!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),S=P)}function $t(P){P!==hd?(lt(i.CULL_FACE),P!==C&&(P===Ch?i.cullFace(i.BACK):P===ud?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),C=P}function Lt(P){P!==V&&(X&&i.lineWidth(P),V=P)}function ge(P,at,G){P?(lt(i.POLYGON_OFFSET_FILL),(B!==at||Y!==G)&&(i.polygonOffset(at,G),B=at,Y=G)):Dt(i.POLYGON_OFFSET_FILL)}function Tt(P){P?lt(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function E(P){P===void 0&&(P=i.TEXTURE0+j-1),ot!==P&&(i.activeTexture(P),ot=P)}function y(P,at,G){G===void 0&&(ot===null?G=i.TEXTURE0+j-1:G=ot);let $=ft[G];$===void 0&&($={type:void 0,texture:void 0},ft[G]=$),($.type!==P||$.texture!==at)&&(ot!==G&&(i.activeTexture(G),ot=G),i.bindTexture(P,at||yt[P]),$.type=P,$.texture=at)}function O(){let P=ft[ot];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Qt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function It(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Nt(P){ce.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ce.copy(P))}function gt(P){Z.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Z.copy(P))}function Jt(P,at){let G=c.get(at);G===void 0&&(G=new WeakMap,c.set(at,G));let $=G.get(P);$===void 0&&($=i.getUniformBlockIndex(at,P.name),G.set(P,$))}function Ht(P,at){let $=c.get(at).get(P);l.get(at)!==$&&(i.uniformBlockBinding(at,$,P.__bindingPointIndex),l.set(at,$))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ot=null,ft={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,v=null,M=null,_=null,I=null,w=null,A=new bt(0,0,0),L=0,R=!1,S=null,C=null,V=null,B=null,Y=null,ce.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Dt,bindFramebuffer:Ft,drawBuffers:Xt,useProgram:ve,setBlending:U,setMaterial:mn,setFlipSided:Kt,setCullFace:$t,setLineWidth:Lt,setPolygonOffset:ge,setScissorTest:Tt,activeTexture:E,bindTexture:y,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:mt,texImage3D:It,updateUBOMapping:Jt,uniformBlockBinding:Ht,texStorage2D:Qt,texStorage3D:tt,texSubImage2D:q,texSubImage3D:Mt,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:Nt,viewport:gt,reset:fe}}function Lu(i,t,e,n){let s=ex(n);switch(e){case t0:return i*t;case n0:return i*t;case i0:return i*t*2;case lc:return i*t/s.components*s.byteLength;case cc:return i*t/s.components*s.byteLength;case s0:return i*t*2/s.components*s.byteLength;case hc:return i*t*2/s.components*s.byteLength;case e0:return i*t*3/s.components*s.byteLength;case _n:return i*t*4/s.components*s.byteLength;case uc:return i*t*4/s.components*s.byteLength;case la:case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ha:case ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:case nl:return Math.max(i,16)*Math.max(t,8)/4;case Qo:case el:return Math.max(i,8)*Math.max(t,8)/2;case il:case sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ul:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case dl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case pl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ml:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case xl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case _l:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case vl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case da:case yl:case Ml:return Math.ceil(i/4)*Math.ceil(t/4)*16;case r0:case Sl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case bl:case Rl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ex(i){switch(i){case ti:case Ju:return{byteLength:1,components:1};case cr:case ju:case Mr:return{byteLength:2,components:1};case ac:case oc:return{byteLength:2,components:4};case qi:case rc:case In:return{byteLength:4,components:1};case Qu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function nx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return f?new OffscreenCanvas(E,y):hr("canvas")}function x(E,y,O){let K=1,Q=Tt(E);if((Q.width>O||Q.height>O)&&(K=O/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let q=Math.floor(K*Q.width),Mt=Math.floor(K*Q.height);u===void 0&&(u=g(q,Mt));let ct=y?g(q,Mt):u;return ct.width=q,ct.height=Mt,ct.getContext("2d").drawImage(E,0,0,q,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Mt+")."),ct}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function v(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(E,y,O,K,Q=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=y;if(y===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),y===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),y===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),y===i.RGBA){let Mt=Q?Ya:Zt.getTransfer(K);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=Mt===le?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(E,y){let O;return E?y===null||y===qi||y===Ss?O=i.DEPTH24_STENCIL8:y===In?O=i.DEPTH32F_STENCIL8:y===cr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===qi||y===Ss?O=i.DEPTH_COMPONENT24:y===In?O=i.DEPTH_COMPONENT32F:y===cr&&(O=i.DEPTH_COMPONENT16),O}function I(E,y){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ge&&E.minFilter!==Qe?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function w(E){let y=E.target;y.removeEventListener("dispose",w),L(y),y.isVideoTexture&&h.delete(y)}function A(E){let y=E.target;y.removeEventListener("dispose",A),S(y)}function L(E){let y=n.get(E);if(y.__webglInit===void 0)return;let O=E.source,K=d.get(O);if(K){let Q=K[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(E),Object.keys(K).length===0&&d.delete(O)}n.remove(E)}function R(E){let y=n.get(E);i.deleteTexture(y.__webglTexture);let O=E.source,K=d.get(O);delete K[y.__cacheKey],a.memory.textures--}function S(E){let y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let Q=0;Q<y.__webglFramebuffer[K].length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[K][Q]);else i.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)i.deleteFramebuffer(y.__webglFramebuffer[K]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let O=E.textures;for(let K=0,Q=O.length;K<Q;K++){let q=n.get(O[K]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(O[K])}n.remove(E)}let C=0;function V(){C=0}function B(){let E=C;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),C+=1,E}function Y(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function j(E,y){let O=n.get(E);if(E.isVideoTexture&&Lt(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){let K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(O,E,y);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function X(E,y){let O=n.get(E);if(E.version>0&&O.__version!==E.version){Z(O,E,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function nt(E,y){let O=n.get(E);if(E.version>0&&O.__version!==E.version){Z(O,E,y);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function W(E,y){let O=n.get(E);if(E.version>0&&O.__version!==E.version){it(O,E,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}let ot={[Qn]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[lr]:i.MIRRORED_REPEAT},ft={[Ge]:i.NEAREST,[sc]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[ir]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},Et={[Gd]:i.NEVER,[Kd]:i.ALWAYS,[Wd]:i.LESS,[l0]:i.LEQUAL,[Yd]:i.EQUAL,[Zd]:i.GEQUAL,[Xd]:i.GREATER,[qd]:i.NOTEQUAL};function Yt(E,y){if(y.type===In&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Qe||y.magFilter===ir||y.magFilter===fs||y.magFilter===On||y.minFilter===Qe||y.minFilter===ir||y.minFilter===fs||y.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ot[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ot[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ot[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ft[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ft[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Et[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ge||y.minFilter!==fs&&y.minFilter!==On||y.type===In&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ce(E,y){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",w));let K=y.source,Q=d.get(K);Q===void 0&&(Q={},d.set(K,Q));let q=Y(y);if(q!==E.__cacheKey){Q[q]===void 0&&(Q[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[q].usedTimes++;let Mt=Q[E.__cacheKey];Mt!==void 0&&(Q[E.__cacheKey].usedTimes--,Mt.usedTimes===0&&R(y)),E.__cacheKey=q,E.__webglTexture=Q[q].texture}return O}function Z(E,y,O){let K=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=i.TEXTURE_3D);let Q=ce(E,y),q=y.source;e.bindTexture(K,E.__webglTexture,i.TEXTURE0+O);let Mt=n.get(q);if(q.version!==Mt.__version||Q===!0){e.activeTexture(i.TEXTURE0+O);let ct=Zt.getPrimaries(Zt.workingColorSpace),pt=y.colorSpace===yi?null:Zt.getPrimaries(y.colorSpace),Qt=y.colorSpace===yi||ct===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let tt=x(y.image,!1,s.maxTextureSize);tt=ge(y,tt);let mt=r.convert(y.format,y.colorSpace),It=r.convert(y.type),Nt=M(y.internalFormat,mt,It,y.colorSpace,y.isVideoTexture);Yt(K,y);let gt,Jt=y.mipmaps,Ht=y.isVideoTexture!==!0,fe=Mt.__version===void 0||Q===!0,P=q.dataReady,at=I(y,tt);if(y.isDepthTexture)Nt=_(y.format===bs,y.type),fe&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Nt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Nt,tt.width,tt.height,0,mt,It,null));else if(y.isDataTexture)if(Jt.length>0){Ht&&fe&&e.texStorage2D(i.TEXTURE_2D,at,Nt,Jt[0].width,Jt[0].height);for(let G=0,$=Jt.length;G<$;G++)gt=Jt[G],Ht?P&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,gt.width,gt.height,mt,It,gt.data):e.texImage2D(i.TEXTURE_2D,G,Nt,gt.width,gt.height,0,mt,It,gt.data);y.generateMipmaps=!1}else Ht?(fe&&e.texStorage2D(i.TEXTURE_2D,at,Nt,tt.width,tt.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,mt,It,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,tt.width,tt.height,0,mt,It,tt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ht&&fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Nt,Jt[0].width,Jt[0].height,tt.depth);for(let G=0,$=Jt.length;G<$;G++)if(gt=Jt[G],y.format!==_n)if(mt!==null)if(Ht){if(P)if(y.layerUpdates.size>0){let dt=Lu(gt.width,gt.height,y.format,y.type);for(let ht of y.layerUpdates){let kt=gt.data.subarray(ht*dt/gt.data.BYTES_PER_ELEMENT,(ht+1)*dt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,ht,gt.width,gt.height,1,mt,kt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,gt.width,gt.height,tt.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Nt,gt.width,gt.height,tt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,gt.width,gt.height,tt.depth,mt,It,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Nt,gt.width,gt.height,tt.depth,0,mt,It,gt.data)}else{Ht&&fe&&e.texStorage2D(i.TEXTURE_2D,at,Nt,Jt[0].width,Jt[0].height);for(let G=0,$=Jt.length;G<$;G++)gt=Jt[G],y.format!==_n?mt!==null?Ht?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Nt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?P&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,gt.width,gt.height,mt,It,gt.data):e.texImage2D(i.TEXTURE_2D,G,Nt,gt.width,gt.height,0,mt,It,gt.data)}else if(y.isDataArrayTexture)if(Ht){if(fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Nt,tt.width,tt.height,tt.depth),P)if(y.layerUpdates.size>0){let G=Lu(tt.width,tt.height,y.format,y.type);for(let $ of y.layerUpdates){let dt=tt.data.subarray($*G/tt.data.BYTES_PER_ELEMENT,($+1)*G/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,tt.width,tt.height,1,mt,It,dt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,mt,It,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,tt.width,tt.height,tt.depth,0,mt,It,tt.data);else if(y.isData3DTexture)Ht?(fe&&e.texStorage3D(i.TEXTURE_3D,at,Nt,tt.width,tt.height,tt.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,mt,It,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,tt.width,tt.height,tt.depth,0,mt,It,tt.data);else if(y.isFramebufferTexture){if(fe)if(Ht)e.texStorage2D(i.TEXTURE_2D,at,Nt,tt.width,tt.height);else{let G=tt.width,$=tt.height;for(let dt=0;dt<at;dt++)e.texImage2D(i.TEXTURE_2D,dt,Nt,G,$,0,mt,It,null),G>>=1,$>>=1}}else if(Jt.length>0){if(Ht&&fe){let G=Tt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,at,Nt,G.width,G.height)}for(let G=0,$=Jt.length;G<$;G++)gt=Jt[G],Ht?P&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,mt,It,gt):e.texImage2D(i.TEXTURE_2D,G,Nt,mt,It,gt);y.generateMipmaps=!1}else if(Ht){if(fe){let G=Tt(tt);e.texStorage2D(i.TEXTURE_2D,at,Nt,G.width,G.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,It,tt)}else e.texImage2D(i.TEXTURE_2D,0,Nt,mt,It,tt);m(y)&&p(K),Mt.__version=q.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function it(E,y,O){if(y.image.length!==6)return;let K=ce(E,y),Q=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);let q=n.get(Q);if(Q.version!==q.__version||K===!0){e.activeTexture(i.TEXTURE0+O);let Mt=Zt.getPrimaries(Zt.workingColorSpace),ct=y.colorSpace===yi?null:Zt.getPrimaries(y.colorSpace),pt=y.colorSpace===yi||Mt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Qt=y.isCompressedTexture||y.image[0].isCompressedTexture,tt=y.image[0]&&y.image[0].isDataTexture,mt=[];for(let $=0;$<6;$++)!Qt&&!tt?mt[$]=x(y.image[$],!0,s.maxCubemapSize):mt[$]=tt?y.image[$].image:y.image[$],mt[$]=ge(y,mt[$]);let It=mt[0],Nt=r.convert(y.format,y.colorSpace),gt=r.convert(y.type),Jt=M(y.internalFormat,Nt,gt,y.colorSpace),Ht=y.isVideoTexture!==!0,fe=q.__version===void 0||K===!0,P=Q.dataReady,at=I(y,It);Yt(i.TEXTURE_CUBE_MAP,y);let G;if(Qt){Ht&&fe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Jt,It.width,It.height);for(let $=0;$<6;$++){G=mt[$].mipmaps;for(let dt=0;dt<G.length;dt++){let ht=G[dt];y.format!==_n?Nt!==null?Ht?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt,0,0,ht.width,ht.height,Nt,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt,Jt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt,0,0,ht.width,ht.height,Nt,gt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt,Jt,ht.width,ht.height,0,Nt,gt,ht.data)}}}else{if(G=y.mipmaps,Ht&&fe){G.length>0&&at++;let $=Tt(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Jt,$.width,$.height)}for(let $=0;$<6;$++)if(tt){Ht?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,mt[$].width,mt[$].height,Nt,gt,mt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Jt,mt[$].width,mt[$].height,0,Nt,gt,mt[$].data);for(let dt=0;dt<G.length;dt++){let kt=G[dt].image[$].image;Ht?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt+1,0,0,kt.width,kt.height,Nt,gt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt+1,Jt,kt.width,kt.height,0,Nt,gt,kt.data)}}else{Ht?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Nt,gt,mt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Jt,Nt,gt,mt[$]);for(let dt=0;dt<G.length;dt++){let ht=G[dt];Ht?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt+1,0,0,Nt,gt,ht.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt+1,Jt,Nt,gt,ht.image[$])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),q.__version=Q.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function yt(E,y,O,K,Q,q){let Mt=r.convert(O.format,O.colorSpace),ct=r.convert(O.type),pt=M(O.internalFormat,Mt,ct,O.colorSpace),Qt=n.get(y),tt=n.get(O);if(tt.__renderTarget=y,!Qt.__hasExternalTextures){let mt=Math.max(1,y.width>>q),It=Math.max(1,y.height>>q);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,q,pt,mt,It,y.depth,0,Mt,ct,null):e.texImage2D(Q,q,pt,mt,It,0,Mt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),$t(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Q,tt.__webglTexture,0,Kt(y)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Q,tt.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(E,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){let K=y.depthTexture,Q=K&&K.isDepthTexture?K.type:null,q=_(y.stencilBuffer,Q),Mt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Kt(y);$t(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,q,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,q,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,q,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,E)}else{let K=y.textures;for(let Q=0;Q<K.length;Q++){let q=K[Q],Mt=r.convert(q.format,q.colorSpace),ct=r.convert(q.type),pt=M(q.internalFormat,Mt,ct,q.colorSpace),Qt=Kt(y);O&&$t(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,pt,y.width,y.height):$t(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt,pt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,pt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j(y.depthTexture,0);let Q=K.__webglTexture,q=Kt(y);if(y.depthTexture.format===gs)$t(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(y.depthTexture.format===bs)$t(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ft(E){let y=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let K=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=K}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Dt(y.__webglFramebuffer,E)}else if(O){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=i.createRenderbuffer(),lt(y.__webglDepthbuffer[K],E,!1);else{let Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),lt(y.__webglDepthbuffer,E,!1);else{let K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(E,y,O){let K=n.get(E);y!==void 0&&yt(K.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ft(E)}function ve(E){let y=E.texture,O=n.get(E),K=n.get(y);E.addEventListener("dispose",A);let Q=E.textures,q=E.isWebGLCubeRenderTarget===!0,Mt=Q.length>1;if(Mt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=y.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ct]=[];for(let pt=0;pt<y.mipmaps.length;pt++)O.__webglFramebuffer[ct][pt]=i.createFramebuffer()}else O.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ct=0;ct<y.mipmaps.length;ct++)O.__webglFramebuffer[ct]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let ct=0,pt=Q.length;ct<pt;ct++){let Qt=n.get(Q[ct]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&$t(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ct=0;ct<Q.length;ct++){let pt=Q[ct];O.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ct]);let Qt=r.convert(pt.format,pt.colorSpace),tt=r.convert(pt.type),mt=M(pt.internalFormat,Qt,tt,pt.colorSpace,E.isXRRenderTarget===!0),It=Kt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,mt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,O.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,y);for(let ct=0;ct<6;ct++)if(y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)yt(O.__webglFramebuffer[ct][pt],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else yt(O.__webglFramebuffer[ct],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ct=0,pt=Q.length;ct<pt;ct++){let Qt=Q[ct],tt=n.get(Qt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),Yt(i.TEXTURE_2D,Qt),yt(O.__webglFramebuffer,E,Qt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(Qt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ct=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,K.__webglTexture),Yt(ct,y),y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)yt(O.__webglFramebuffer[pt],E,y,i.COLOR_ATTACHMENT0,ct,pt);else yt(O.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,ct,0);m(y)&&p(ct),e.unbindTexture()}E.depthBuffer&&Ft(E)}function jt(E){let y=E.textures;for(let O=0,K=y.length;O<K;O++){let Q=y[O];if(m(Q)){let q=v(E),Mt=n.get(Q).__webglTexture;e.bindTexture(q,Mt),p(q),e.unbindTexture()}}}let we=[],U=[];function mn(E){if(E.samples>0){if($t(E)===!1){let y=E.textures,O=E.width,K=E.height,Q=i.COLOR_BUFFER_BIT,q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(E),ct=y.length>1;if(ct)for(let pt=0;pt<y.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let pt=0;pt<y.length;pt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);let Qt=n.get(y[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qt,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,Q,i.NEAREST),l===!0&&(we.length=0,U.length=0,we.push(i.COLOR_ATTACHMENT0+pt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(we.push(q),U.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,we))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<y.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);let Qt=n.get(y[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Kt(E){return Math.min(s.maxSamples,E.samples)}function $t(E){let y=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Lt(E){let y=a.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function ge(E,y){let O=E.colorSpace,K=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==Ye&&O!==yi&&(Zt.getTransfer(O)===le?(K!==_n||Q!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Tt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=nt,this.setTextureCube=W,this.rebindTextures=Xt,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=$t}function ix(i,t){function e(n,s=yi){let r,a=Zt.getTransfer(s);if(n===ti)return i.UNSIGNED_BYTE;if(n===ac)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ju)return i.BYTE;if(n===ju)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===rc)return i.INT;if(n===qi)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===Mr)return i.HALF_FLOAT;if(n===t0)return i.ALPHA;if(n===e0)return i.RGB;if(n===_n)return i.RGBA;if(n===n0)return i.LUMINANCE;if(n===i0)return i.LUMINANCE_ALPHA;if(n===gs)return i.DEPTH_COMPONENT;if(n===bs)return i.DEPTH_STENCIL;if(n===lc)return i.RED;if(n===cc)return i.RED_INTEGER;if(n===s0)return i.RG;if(n===hc)return i.RG_INTEGER;if(n===uc)return i.RGBA_INTEGER;if(n===la||n===ca||n===ha||n===ua)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qo||n===tl||n===el||n===nl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===il||n===sl||n===rl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===il||n===sl)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rl)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl||n===_l||n===vl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===al)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ol)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ll)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cl)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hl)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ul)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dl)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fl)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pl)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ml)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gl)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_l)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vl)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===da||n===yl||n===Ml)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===da)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===r0||n===Sl||n===bl||n===Rl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===da)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Bl=class extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},tn=class extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},sx={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},rx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ax=`
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

}`,zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ne,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new yn({vertexShader:rx,fragmentShader:ax,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new he(new kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hl=class extends Ei{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new zl,m=e.getContextAttributes(),p=null,v=null,M=[],_=[],I=new Ot,w=null,A=new Le;A.viewport=new ee;let L=new Le;L.viewport=new ee;let R=[A,L],S=new Bl,C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=M[Z];return it===void 0&&(it=new ar,M[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=M[Z];return it===void 0&&(it=new ar,M[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=M[Z];return it===void 0&&(it=new ar,M[Z]=it),it.getHandSpace()};function B(Z){let it=_.indexOf(Z.inputSource);if(it===-1)return;let yt=M[it];yt!==void 0&&(yt.update(Z.inputSource,Z.frame,c||a),yt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",j);for(let Z=0;Z<M.length;Z++){let it=_[Z];it!==null&&(_[Z]=null,M[Z].disconnect(it))}C=null,V=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,v=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){let it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ei(f.framebufferWidth,f.framebufferHeight,{format:_n,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,yt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?bs:gs,yt=m.stencil?Ss:qi);let Dt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new ei(d.textureWidth,d.textureHeight,{format:_n,type:ti,depthTexture:new Ma(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ce.setContext(s),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(Z){for(let it=0;it<Z.removed.length;it++){let yt=Z.removed[it],lt=_.indexOf(yt);lt>=0&&(_[lt]=null,M[lt].disconnect(yt))}for(let it=0;it<Z.added.length;it++){let yt=Z.added[it],lt=_.indexOf(yt);if(lt===-1){for(let Ft=0;Ft<M.length;Ft++)if(Ft>=_.length){_.push(yt),lt=Ft;break}else if(_[Ft]===null){_[Ft]=yt,lt=Ft;break}if(lt===-1)break}let Dt=M[lt];Dt&&Dt.connect(yt)}}let X=new T,nt=new T;function W(Z,it,yt){X.setFromMatrixPosition(it.matrixWorld),nt.setFromMatrixPosition(yt.matrixWorld);let lt=X.distanceTo(nt),Dt=it.projectionMatrix.elements,Ft=yt.projectionMatrix.elements,Xt=Dt[14]/(Dt[10]-1),ve=Dt[14]/(Dt[10]+1),jt=(Dt[9]+1)/Dt[5],we=(Dt[9]-1)/Dt[5],U=(Dt[8]-1)/Dt[0],mn=(Ft[8]+1)/Ft[0],Kt=Xt*U,$t=Xt*mn,Lt=lt/(-U+mn),ge=Lt*-U;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ge),Z.translateZ(Lt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Dt[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let Tt=Xt+Lt,E=ve+Lt,y=Kt-ge,O=$t+(lt-ge),K=jt*ve/E*Tt,Q=we*ve/E*Tt;Z.projectionMatrix.makePerspective(y,O,K,Q,Tt,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ot(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let it=Z.near,yt=Z.far;x.texture!==null&&(x.depthNear>0&&(it=x.depthNear),x.depthFar>0&&(yt=x.depthFar)),S.near=L.near=A.near=it,S.far=L.far=A.far=yt,(C!==S.near||V!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,V=S.far),A.layers.mask=Z.layers.mask|2,L.layers.mask=Z.layers.mask|4,S.layers.mask=A.layers.mask|L.layers.mask;let lt=Z.parent,Dt=S.cameras;ot(S,lt);for(let Ft=0;Ft<Dt.length;Ft++)ot(Dt[Ft],lt);Dt.length===2?W(S,A,L):S.projectionMatrix.copy(A.projectionMatrix),ft(Z,S,lt)};function ft(Z,it,yt){yt===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(yt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ws*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Et=null;function Yt(Z,it){if(h=it.getViewerPose(c||a),g=it,h!==null){let yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let lt=!1;yt.length!==S.cameras.length&&(S.cameras.length=0,lt=!0);for(let Ft=0;Ft<yt.length;Ft++){let Xt=yt[Ft],ve=null;if(f!==null)ve=f.getViewport(Xt);else{let we=u.getViewSubImage(d,Xt);ve=we.viewport,Ft===0&&(t.setRenderTargetTextures(v,we.colorTexture,d.ignoreDepthValues?void 0:we.depthStencilTexture),t.setRenderTarget(v))}let jt=R[Ft];jt===void 0&&(jt=new Le,jt.layers.enable(Ft),jt.viewport=new ee,R[Ft]=jt),jt.matrix.fromArray(Xt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Xt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(ve.x,ve.y,ve.width,ve.height),Ft===0&&(S.matrix.copy(jt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),lt===!0&&S.cameras.push(jt)}let Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){let Ft=u.getDepthInformation(yt[0]);Ft&&Ft.isValid&&Ft.texture&&x.init(t,Ft,s.renderState)}}for(let yt=0;yt<M.length;yt++){let lt=_[yt],Dt=M[yt];lt!==null&&Dt!==void 0&&Dt.update(lt,it,c||a)}Et&&Et(Z,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}let ce=new f0;ce.setAnimationLoop(Yt),this.setAnimationLoop=function(Z){Et=Z},this.dispose=function(){}}},Vi=new Ze,ox=new Ct;function lx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,d0(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),M=v.envMap,_=v.envMapRotation;M&&(m.envMap.value=M,Vi.copy(_),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),m.envMapRotation.value.setFromMatrix4(ox.makeRotationFromEuler(Vi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let _=M.program;n.uniformBlockBinding(v,_)}function c(v,M){let _=s[v.id];_===void 0&&(g(v),_=h(v),s[v.id]=_,v.addEventListener("dispose",m));let I=M.program;n.updateUBOMapping(v,I);let w=t.render.frame;r[v.id]!==w&&(d(v),r[v.id]=w)}function h(v){let M=u();v.__bindingPointIndex=M;let _=i.createBuffer(),I=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,I,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let M=s[v.id],_=v.uniforms,I=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,A=_.length;w<A;w++){let L=Array.isArray(_[w])?_[w]:[_[w]];for(let R=0,S=L.length;R<S;R++){let C=L[R];if(f(C,w,R,I)===!0){let V=C.__offset,B=Array.isArray(C.value)?C.value:[C.value],Y=0;for(let j=0;j<B.length;j++){let X=B[j],nt=x(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,V+Y,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,Y),Y+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,M,_,I){let w=v.value,A=M+"_"+_;if(I[A]===void 0)return typeof w=="number"||typeof w=="boolean"?I[A]=w:I[A]=w.clone(),!0;{let L=I[A];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return I[A]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(v){let M=v.uniforms,_=0,I=16;for(let A=0,L=M.length;A<L;A++){let R=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,C=R.length;S<C;S++){let V=R[S],B=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,j=B.length;Y<j;Y++){let X=B[Y],nt=x(X),W=_%I,ot=W%nt.boundary,ft=W+ot;_+=ot,ft!==0&&I-ft<nt.storage&&(_+=I-ft),V.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=nt.storage}}}let w=_%I;return w>0&&(_+=I-w),v.__size=_,v.__cache={},this}function x(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){let M=v.target;M.removeEventListener("dispose",m);let _=a.indexOf(M.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Sa=class{constructor(t={}){let{canvas:e=ff(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this.toneMapping=bi,this.toneMappingExposure=1;let _=this,I=!1,w=0,A=0,L=null,R=-1,S=null,C=new ee,V=new ee,B=null,Y=new bt(0),j=0,X=e.width,nt=e.height,W=1,ot=null,ft=null,Et=new ee(0,0,X,nt),Yt=new ee(0,0,X,nt),ce=!1,Z=new dr,it=!1,yt=!1,lt=new Ct,Dt=new Ct,Ft=new T,Xt=new ee,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jt=!1;function we(){return L===null?W:1}let U=n;function mn(b,D){return e.getContext(b,D)}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ec}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),U===null){let D="webgl2";if(U=mn(D,b),U===null)throw mn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Kt,$t,Lt,ge,Tt,E,y,O,K,Q,q,Mt,ct,pt,Qt,tt,mt,It,Nt,gt,Jt,Ht,fe,P;function at(){Kt=new Eg(U),Kt.init(),Ht=new ix(U,Kt),$t=new vg(U,Kt,t,Ht),Lt=new tx(U,Kt),$t.reverseDepthBuffer&&d&&Lt.buffers.depth.setReversed(!0),ge=new Tg(U),Tt=new H1,E=new nx(U,Kt,Lt,Tt,$t,Ht,ge),y=new Mg(_),O=new Rg(_),K=new Uf(U),fe=new xg(U,K),Q=new wg(U,K,ge,fe),q=new Cg(U,Q,K,ge),Nt=new Lg(U,$t,E),tt=new yg(Tt),Mt=new z1(_,y,O,Kt,$t,fe,tt),ct=new lx(_,Tt),pt=new G1,Qt=new K1(Kt),It=new gg(_,y,O,Lt,q,f,l),mt=new j1(_,q,$t),P=new cx(U,ge,$t,Lt),gt=new _g(U,Kt,ge),Jt=new Ag(U,Kt,ge),ge.programs=Mt.programs,_.capabilities=$t,_.extensions=Kt,_.properties=Tt,_.renderLists=pt,_.shadowMap=mt,_.state=Lt,_.info=ge}at();let G=new Hl(_,U);this.xr=G,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=Kt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Kt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(X,nt,!1))},this.getSize=function(b){return b.set(X,nt)},this.setSize=function(b,D,F=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,nt=D,e.width=Math.floor(b*W),e.height=Math.floor(D*W),F===!0&&(e.style.width=b+"px",e.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(X*W,nt*W).floor()},this.setDrawingBufferSize=function(b,D,F){X=b,nt=D,W=F,e.width=Math.floor(b*F),e.height=Math.floor(D*F),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(Et)},this.setViewport=function(b,D,F,k){b.isVector4?Et.set(b.x,b.y,b.z,b.w):Et.set(b,D,F,k),Lt.viewport(C.copy(Et).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(Yt)},this.setScissor=function(b,D,F,k){b.isVector4?Yt.set(b.x,b.y,b.z,b.w):Yt.set(b,D,F,k),Lt.scissor(V.copy(Yt).multiplyScalar(W).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(b){Lt.setScissorTest(ce=b)},this.setOpaqueSort=function(b){ot=b},this.setTransparentSort=function(b){ft=b},this.getClearColor=function(b){return b.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(b=!0,D=!0,F=!0){let k=0;if(b){let N=!1;if(L!==null){let et=L.texture.format;N=et===uc||et===hc||et===cc}if(N){let et=L.texture.type,ut=et===ti||et===qi||et===cr||et===Ss||et===ac||et===oc,xt=It.getClearColor(),_t=It.getClearAlpha(),Ut=xt.r,Bt=xt.g,vt=xt.b;ut?(g[0]=Ut,g[1]=Bt,g[2]=vt,g[3]=_t,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=Ut,x[1]=Bt,x[2]=vt,x[3]=_t,U.clearBufferiv(U.COLOR,0,x))}else k|=U.COLOR_BUFFER_BIT}D&&(k|=U.DEPTH_BUFFER_BIT),F&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),pt.dispose(),Qt.dispose(),Tt.dispose(),y.dispose(),O.dispose(),q.dispose(),fe.dispose(),P.dispose(),Mt.dispose(),G.dispose(),G.removeEventListener("sessionstart",Sh),G.removeEventListener("sessionend",bh),Oi.stop()};function $(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let b=ge.autoReset,D=mt.enabled,F=mt.autoUpdate,k=mt.needsUpdate,N=mt.type;at(),ge.autoReset=b,mt.enabled=D,mt.autoUpdate=F,mt.needsUpdate=k,mt.type=N}function ht(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function kt(b){let D=b.target;D.removeEventListener("dispose",kt),be(D)}function be(b){Be(b),Tt.remove(b)}function Be(b){let D=Tt.get(b).programs;D!==void 0&&(D.forEach(function(F){Mt.releaseProgram(F)}),b.isShaderMaterial&&Mt.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,F,k,N,et){D===null&&(D=ve);let ut=N.isMesh&&N.matrixWorld.determinant()<0,xt=od(b,D,F,k,N);Lt.setMaterial(k,ut);let _t=F.index,Ut=1;if(k.wireframe===!0){if(_t=Q.getWireframeAttribute(F),_t===void 0)return;Ut=2}let Bt=F.drawRange,vt=F.attributes.position,te=Bt.start*Ut,pe=(Bt.start+Bt.count)*Ut;et!==null&&(te=Math.max(te,et.start*Ut),pe=Math.min(pe,(et.start+et.count)*Ut)),_t!==null?(te=Math.max(te,0),pe=Math.min(pe,_t.count)):vt!=null&&(te=Math.max(te,0),pe=Math.min(pe,vt.count));let xe=pe-te;if(xe<0||xe===1/0)return;fe.setup(N,k,xt,F,_t);let je,ne=gt;if(_t!==null&&(je=K.get(_t),ne=Jt,ne.setIndex(je)),N.isMesh)k.wireframe===!0?(Lt.setLineWidth(k.wireframeLinewidth*we()),ne.setMode(U.LINES)):ne.setMode(U.TRIANGLES);else if(N.isLine){let St=k.linewidth;St===void 0&&(St=1),Lt.setLineWidth(St*we()),N.isLineSegments?ne.setMode(U.LINES):N.isLineLoop?ne.setMode(U.LINE_LOOP):ne.setMode(U.LINE_STRIP)}else N.isPoints?ne.setMode(U.POINTS):N.isSprite&&ne.setMode(U.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ne.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))ne.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let St=N._multiDrawStarts,Hn=N._multiDrawCounts,ie=N._multiDrawCount,wn=_t?K.get(_t).bytesPerElement:1,Ji=Tt.get(k).currentProgram.getUniforms();for(let rn=0;rn<ie;rn++)Ji.setValue(U,"_gl_DrawID",rn),ne.render(St[rn]/wn,Hn[rn])}else if(N.isInstancedMesh)ne.renderInstances(te,xe,N.count);else if(F.isInstancedBufferGeometry){let St=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Hn=Math.min(F.instanceCount,St);ne.renderInstances(te,xe,Hn)}else ne.render(te,xe)};function se(b,D,F){b.transparent===!0&&b.side===ln&&b.forceSinglePass===!1?(b.side=en,b.needsUpdate=!0,Nr(b,D,F),b.side=Fn,b.needsUpdate=!0,Nr(b,D,F),b.side=ln):Nr(b,D,F)}this.compile=function(b,D,F=null){F===null&&(F=b),p=Qt.get(F),p.init(D),M.push(p),F.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==F&&b.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let k=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let et=N.material;if(et)if(Array.isArray(et))for(let ut=0;ut<et.length;ut++){let xt=et[ut];se(xt,F,N),k.add(xt)}else se(et,F,N),k.add(et)}),M.pop(),p=null,k},this.compileAsync=function(b,D,F=null){let k=this.compile(b,D,F);return new Promise(N=>{function et(){if(k.forEach(function(ut){Tt.get(ut).currentProgram.isReady()&&k.delete(ut)}),k.size===0){N(b);return}setTimeout(et,10)}Kt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let En=null;function zn(b){En&&En(b)}function Sh(){Oi.stop()}function bh(){Oi.start()}let Oi=new f0;Oi.setAnimationLoop(zn),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(b){En=b,G.setAnimationLoop(b),b===null?Oi.stop():Oi.start()},G.addEventListener("sessionstart",Sh),G.addEventListener("sessionend",bh),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(D),D=G.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,D,L),p=Qt.get(b,M.length),p.init(D),M.push(p),Dt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Z.setFromProjectionMatrix(Dt),yt=this.localClippingEnabled,it=tt.init(this.clippingPlanes,yt),m=pt.get(b,v.length),m.init(),v.push(m),G.enabled===!0&&G.isPresenting===!0){let et=_.xr.getDepthSensingMesh();et!==null&&co(et,D,-1/0,_.sortObjects)}co(b,D,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ot,ft),jt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,jt&&It.addToRenderList(m,b),this.info.render.frame++,it===!0&&tt.beginShadows();let F=p.state.shadowsArray;mt.render(F,b,D),it===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=m.opaque,N=m.transmissive;if(p.setupLights(),D.isArrayCamera){let et=D.cameras;if(N.length>0)for(let ut=0,xt=et.length;ut<xt;ut++){let _t=et[ut];Eh(k,N,b,_t)}jt&&It.render(b);for(let ut=0,xt=et.length;ut<xt;ut++){let _t=et[ut];Rh(m,b,_t,_t.viewport)}}else N.length>0&&Eh(k,N,b,D),jt&&It.render(b),Rh(m,b,D);L!==null&&(E.updateMultisampleRenderTarget(L),E.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(_,b,D),fe.resetDefaultState(),R=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],it===!0&&tt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function co(b,D,F,k){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)F=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){k&&Xt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Dt);let ut=q.update(b),xt=b.material;xt.visible&&m.push(b,ut,xt,F,Xt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){let ut=q.update(b),xt=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Xt.copy(b.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Xt.copy(ut.boundingSphere.center)),Xt.applyMatrix4(b.matrixWorld).applyMatrix4(Dt)),Array.isArray(xt)){let _t=ut.groups;for(let Ut=0,Bt=_t.length;Ut<Bt;Ut++){let vt=_t[Ut],te=xt[vt.materialIndex];te&&te.visible&&m.push(b,ut,te,F,Xt.z,vt)}}else xt.visible&&m.push(b,ut,xt,F,Xt.z,null)}}let et=b.children;for(let ut=0,xt=et.length;ut<xt;ut++)co(et[ut],D,F,k)}function Rh(b,D,F,k){let N=b.opaque,et=b.transmissive,ut=b.transparent;p.setupLightsView(F),it===!0&&tt.setGlobalState(_.clippingPlanes,F),k&&Lt.viewport(C.copy(k)),N.length>0&&Dr(N,D,F),et.length>0&&Dr(et,D,F),ut.length>0&&Dr(ut,D,F),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function Eh(b,D,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new ei(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?Mr:ti,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let et=p.state.transmissionRenderTarget[k.id],ut=k.viewport||C;et.setSize(ut.z,ut.w);let xt=_.getRenderTarget();_.setRenderTarget(et),_.getClearColor(Y),j=_.getClearAlpha(),j<1&&_.setClearColor(16777215,.5),_.clear(),jt&&It.render(F);let _t=_.toneMapping;_.toneMapping=bi;let Ut=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),it===!0&&tt.setGlobalState(_.clippingPlanes,k),Dr(b,F,k),E.updateMultisampleRenderTarget(et),E.updateRenderTargetMipmap(et),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let vt=0,te=D.length;vt<te;vt++){let pe=D[vt],xe=pe.object,je=pe.geometry,ne=pe.material,St=pe.group;if(ne.side===ln&&xe.layers.test(k.layers)){let Hn=ne.side;ne.side=en,ne.needsUpdate=!0,wh(xe,F,k,je,ne,St),ne.side=Hn,ne.needsUpdate=!0,Bt=!0}}Bt===!0&&(E.updateMultisampleRenderTarget(et),E.updateRenderTargetMipmap(et))}_.setRenderTarget(xt),_.setClearColor(Y,j),Ut!==void 0&&(k.viewport=Ut),_.toneMapping=_t}function Dr(b,D,F){let k=D.isScene===!0?D.overrideMaterial:null;for(let N=0,et=b.length;N<et;N++){let ut=b[N],xt=ut.object,_t=ut.geometry,Ut=k===null?ut.material:k,Bt=ut.group;xt.layers.test(F.layers)&&wh(xt,D,F,_t,Ut,Bt)}}function wh(b,D,F,k,N,et){b.onBeforeRender(_,D,F,k,N,et),b.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(_,D,F,k,b,et),N.transparent===!0&&N.side===ln&&N.forceSinglePass===!1?(N.side=en,N.needsUpdate=!0,_.renderBufferDirect(F,D,k,N,b,et),N.side=Fn,N.needsUpdate=!0,_.renderBufferDirect(F,D,k,N,b,et),N.side=ln):_.renderBufferDirect(F,D,k,N,b,et),b.onAfterRender(_,D,F,k,N,et)}function Nr(b,D,F){D.isScene!==!0&&(D=ve);let k=Tt.get(b),N=p.state.lights,et=p.state.shadowsArray,ut=N.state.version,xt=Mt.getParameters(b,N.state,et,D,F),_t=Mt.getProgramCacheKey(xt),Ut=k.programs;k.environment=b.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(b.isMeshStandardMaterial?O:y).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Ut===void 0&&(b.addEventListener("dispose",kt),Ut=new Map,k.programs=Ut);let Bt=Ut.get(_t);if(Bt!==void 0){if(k.currentProgram===Bt&&k.lightsStateVersion===ut)return Th(b,xt),Bt}else xt.uniforms=Mt.getUniforms(b),b.onBeforeCompile(xt,_),Bt=Mt.acquireProgram(xt,_t),Ut.set(_t,Bt),k.uniforms=xt.uniforms;let vt=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(vt.clippingPlanes=tt.uniform),Th(b,xt),k.needsLights=cd(b),k.lightsStateVersion=ut,k.needsLights&&(vt.ambientLightColor.value=N.state.ambient,vt.lightProbe.value=N.state.probe,vt.directionalLights.value=N.state.directional,vt.directionalLightShadows.value=N.state.directionalShadow,vt.spotLights.value=N.state.spot,vt.spotLightShadows.value=N.state.spotShadow,vt.rectAreaLights.value=N.state.rectArea,vt.ltc_1.value=N.state.rectAreaLTC1,vt.ltc_2.value=N.state.rectAreaLTC2,vt.pointLights.value=N.state.point,vt.pointLightShadows.value=N.state.pointShadow,vt.hemisphereLights.value=N.state.hemi,vt.directionalShadowMap.value=N.state.directionalShadowMap,vt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,vt.spotShadowMap.value=N.state.spotShadowMap,vt.spotLightMatrix.value=N.state.spotLightMatrix,vt.spotLightMap.value=N.state.spotLightMap,vt.pointShadowMap.value=N.state.pointShadowMap,vt.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Bt,k.uniformsList=null,Bt}function Ah(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=_s.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function Th(b,D){let F=Tt.get(b);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function od(b,D,F,k,N){D.isScene!==!0&&(D=ve),E.resetTextureUnits();let et=D.fog,ut=k.isMeshStandardMaterial?D.environment:null,xt=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ye,_t=(k.isMeshStandardMaterial?O:y).get(k.envMap||ut),Ut=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Bt=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),vt=!!F.morphAttributes.position,te=!!F.morphAttributes.normal,pe=!!F.morphAttributes.color,xe=bi;k.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(xe=_.toneMapping);let je=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ne=je!==void 0?je.length:0,St=Tt.get(k),Hn=p.state.lights;if(it===!0&&(yt===!0||b!==S)){let gn=b===S&&k.id===R;tt.setState(k,b,gn)}let ie=!1;k.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Hn.state.version||St.outputColorSpace!==xt||N.isBatchedMesh&&St.batching===!1||!N.isBatchedMesh&&St.batching===!0||N.isBatchedMesh&&St.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&St.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&St.instancing===!1||!N.isInstancedMesh&&St.instancing===!0||N.isSkinnedMesh&&St.skinning===!1||!N.isSkinnedMesh&&St.skinning===!0||N.isInstancedMesh&&St.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&St.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&St.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&St.instancingMorph===!1&&N.morphTexture!==null||St.envMap!==_t||k.fog===!0&&St.fog!==et||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==tt.numPlanes||St.numIntersection!==tt.numIntersection)||St.vertexAlphas!==Ut||St.vertexTangents!==Bt||St.morphTargets!==vt||St.morphNormals!==te||St.morphColors!==pe||St.toneMapping!==xe||St.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,St.__version=k.version);let wn=St.currentProgram;ie===!0&&(wn=Nr(k,D,N));let Ji=!1,rn=!1,Ys=!1,_e=wn.getUniforms(),Nn=St.uniforms;if(Lt.useProgram(wn.program)&&(Ji=!0,rn=!0,Ys=!0),k.id!==R&&(R=k.id,rn=!0),Ji||S!==b){Lt.buffers.depth.getReversed()?(lt.copy(b.projectionMatrix),mf(lt),gf(lt),_e.setValue(U,"projectionMatrix",lt)):_e.setValue(U,"projectionMatrix",b.projectionMatrix),_e.setValue(U,"viewMatrix",b.matrixWorldInverse);let di=_e.map.cameraPosition;di!==void 0&&di.setValue(U,Ft.setFromMatrixPosition(b.matrixWorld)),$t.logarithmicDepthBuffer&&_e.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&_e.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,rn=!0,Ys=!0)}if(N.isSkinnedMesh){_e.setOptional(U,N,"bindMatrix"),_e.setOptional(U,N,"bindMatrixInverse");let gn=N.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),_e.setValue(U,"boneTexture",gn.boneTexture,E))}N.isBatchedMesh&&(_e.setOptional(U,N,"batchingTexture"),_e.setValue(U,"batchingTexture",N._matricesTexture,E),_e.setOptional(U,N,"batchingIdTexture"),_e.setValue(U,"batchingIdTexture",N._indirectTexture,E),_e.setOptional(U,N,"batchingColorTexture"),N._colorsTexture!==null&&_e.setValue(U,"batchingColorTexture",N._colorsTexture,E));let Xs=F.morphAttributes;if((Xs.position!==void 0||Xs.normal!==void 0||Xs.color!==void 0)&&Nt.update(N,F,wn),(rn||St.receiveShadow!==N.receiveShadow)&&(St.receiveShadow=N.receiveShadow,_e.setValue(U,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Nn.envMap.value=_t,Nn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(Nn.envMapIntensity.value=D.environmentIntensity),rn&&(_e.setValue(U,"toneMappingExposure",_.toneMappingExposure),St.needsLights&&ld(Nn,Ys),et&&k.fog===!0&&ct.refreshFogUniforms(Nn,et),ct.refreshMaterialUniforms(Nn,k,W,nt,p.state.transmissionRenderTarget[b.id]),_s.upload(U,Ah(St),Nn,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(_s.upload(U,Ah(St),Nn,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&_e.setValue(U,"center",N.center),_e.setValue(U,"modelViewMatrix",N.modelViewMatrix),_e.setValue(U,"normalMatrix",N.normalMatrix),_e.setValue(U,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let gn=k.uniformsGroups;for(let di=0,fi=gn.length;di<fi;di++){let Lh=gn[di];P.update(Lh,wn),P.bind(Lh,wn)}}return wn}function ld(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function cd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,D,F){Tt.get(b.texture).__webglTexture=D,Tt.get(b.depthTexture).__webglTexture=F;let k=Tt.get(b);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=F===void 0,k.__autoAllocateDepthBuffer||Kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,D){let F=Tt.get(b);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,F=0){L=b,w=D,A=F;let k=!0,N=null,et=!1,ut=!1;if(b){let _t=Tt.get(b);if(_t.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(U.FRAMEBUFFER,null),k=!1;else if(_t.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(_t.__hasExternalTextures)E.rebindTextures(b,Tt.get(b.texture).__webglTexture,Tt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let vt=b.depthTexture;if(_t.__boundDepthTexture!==vt){if(vt!==null&&Tt.has(vt)&&(b.width!==vt.image.width||b.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}let Ut=b.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ut=!0);let Bt=Tt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Bt[D])?N=Bt[D][F]:N=Bt[D],et=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?N=Tt.get(b).__webglMultisampledFramebuffer:Array.isArray(Bt)?N=Bt[F]:N=Bt,C.copy(b.viewport),V.copy(b.scissor),B=b.scissorTest}else C.copy(Et).multiplyScalar(W).floor(),V.copy(Yt).multiplyScalar(W).floor(),B=ce;if(Lt.bindFramebuffer(U.FRAMEBUFFER,N)&&k&&Lt.drawBuffers(b,N),Lt.viewport(C),Lt.scissor(V),Lt.setScissorTest(B),et){let _t=Tt.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,_t.__webglTexture,F)}else if(ut){let _t=Tt.get(b.texture),Ut=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,_t.__webglTexture,F||0,Ut)}R=-1},this.readRenderTargetPixels=function(b,D,F,k,N,et,ut){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){Lt.bindFramebuffer(U.FRAMEBUFFER,xt);try{let _t=b.texture,Ut=_t.format,Bt=_t.type;if(!$t.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-k&&F>=0&&F<=b.height-N&&U.readPixels(D,F,k,N,Ht.convert(Ut),Ht.convert(Bt),et)}finally{let _t=L!==null?Tt.get(L).__webglFramebuffer:null;Lt.bindFramebuffer(U.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(b,D,F,k,N,et,ut){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){let _t=b.texture,Ut=_t.format,Bt=_t.type;if(!$t.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=b.width-k&&F>=0&&F<=b.height-N){Lt.bindFramebuffer(U.FRAMEBUFFER,xt);let vt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,vt),U.bufferData(U.PIXEL_PACK_BUFFER,et.byteLength,U.STREAM_READ),U.readPixels(D,F,k,N,Ht.convert(Ut),Ht.convert(Bt),0);let te=L!==null?Tt.get(L).__webglFramebuffer:null;Lt.bindFramebuffer(U.FRAMEBUFFER,te);let pe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await pf(U,pe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,vt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,et),U.deleteBuffer(vt),U.deleteSync(pe),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,D=null,F=0){b.isTexture!==!0&&(er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,b=arguments[1]);let k=Math.pow(2,-F),N=Math.floor(b.image.width*k),et=Math.floor(b.image.height*k),ut=D!==null?D.x:0,xt=D!==null?D.y:0;E.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,ut,xt,N,et),Lt.unbindTexture()},this.copyTextureToTexture=function(b,D,F=null,k=null,N=0){b.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1],D=arguments[2],N=arguments[3]||0,F=null);let et,ut,xt,_t,Ut,Bt,vt,te,pe,xe=b.isCompressedTexture?b.mipmaps[N]:b.image;F!==null?(et=F.max.x-F.min.x,ut=F.max.y-F.min.y,xt=F.isBox3?F.max.z-F.min.z:1,_t=F.min.x,Ut=F.min.y,Bt=F.isBox3?F.min.z:0):(et=xe.width,ut=xe.height,xt=xe.depth||1,_t=0,Ut=0,Bt=0),k!==null?(vt=k.x,te=k.y,pe=k.z):(vt=0,te=0,pe=0);let je=Ht.convert(D.format),ne=Ht.convert(D.type),St;D.isData3DTexture?(E.setTexture3D(D,0),St=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(E.setTexture2DArray(D,0),St=U.TEXTURE_2D_ARRAY):(E.setTexture2D(D,0),St=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let Hn=U.getParameter(U.UNPACK_ROW_LENGTH),ie=U.getParameter(U.UNPACK_IMAGE_HEIGHT),wn=U.getParameter(U.UNPACK_SKIP_PIXELS),Ji=U.getParameter(U.UNPACK_SKIP_ROWS),rn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,xe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,_t),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ut),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Bt);let Ys=b.isDataArrayTexture||b.isData3DTexture,_e=D.isDataArrayTexture||D.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let Nn=Tt.get(b),Xs=Tt.get(D),gn=Tt.get(Nn.__renderTarget),di=Tt.get(Xs.__renderTarget);Lt.bindFramebuffer(U.READ_FRAMEBUFFER,gn.__webglFramebuffer),Lt.bindFramebuffer(U.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let fi=0;fi<xt;fi++)Ys&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Tt.get(b).__webglTexture,N,Bt+fi),b.isDepthTexture?(_e&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Tt.get(D).__webglTexture,N,pe+fi),U.blitFramebuffer(_t,Ut,et,ut,vt,te,et,ut,U.DEPTH_BUFFER_BIT,U.NEAREST)):_e?U.copyTexSubImage3D(St,N,vt,te,pe+fi,_t,Ut,et,ut):U.copyTexSubImage2D(St,N,vt,te,pe+fi,_t,Ut,et,ut);Lt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else _e?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(St,N,vt,te,pe,et,ut,xt,je,ne,xe.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(St,N,vt,te,pe,et,ut,xt,je,xe.data):U.texSubImage3D(St,N,vt,te,pe,et,ut,xt,je,ne,xe):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,N,vt,te,et,ut,je,ne,xe.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,N,vt,te,xe.width,xe.height,je,xe.data):U.texSubImage2D(U.TEXTURE_2D,N,vt,te,et,ut,je,ne,xe);U.pixelStorei(U.UNPACK_ROW_LENGTH,Hn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ie),U.pixelStorei(U.UNPACK_SKIP_PIXELS,wn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ji),U.pixelStorei(U.UNPACK_SKIP_IMAGES,rn),N===0&&D.generateMipmaps&&U.generateMipmap(St),Lt.unbindTexture()},this.copyTextureToTexture3D=function(b,D,F=null,k=null,N=0){return b.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,k=arguments[1]||null,b=arguments[2],D=arguments[3],N=arguments[4]||0),er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,D,F,k,N)},this.initRenderTarget=function(b){Tt.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),Lt.unbindTexture()},this.resetState=function(){w=0,A=0,L=null,Lt.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}},ba=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ra=class extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ze,this.environmentIntensity=1,this.environmentRotation=new Ze,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},fr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=El,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Xe=new T,pr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Cu=new T,Iu=new ee,Pu=new ee,hx=new T,Du=new Ct,ea=new T,ko=new cn,Nu=new Ct,Bo=new As,Ea=class extends he{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dh,this.bindMatrix=new Ct,this.bindMatrixInverse=new Ct,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new vn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ea),this.boundingBox.expandByPoint(ea)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new cn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ea),this.boundingSphere.expandByPoint(ea)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ko.copy(this.boundingSphere),ko.applyMatrix4(s),t.ray.intersectsSphere(ko)!==!1&&(Nu.copy(s).invert(),Bo.copy(t.ray).applyMatrix4(Nu),!(this.boundingBox!==null&&Bo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Bo)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ee,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Dh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===kd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;Iu.fromBufferAttribute(s.attributes.skinIndex,t),Pu.fromBufferAttribute(s.attributes.skinWeight,t),Cu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let a=Pu.getComponent(r);if(a!==0){let o=Iu.getComponent(r);Du.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(hx.copy(Cu).applyMatrix4(Du),a)}}return e.applyMatrix4(this.bindMatrixInverse)}},mr=class extends ye{constructor(){super(),this.isBone=!0,this.type="Bone"}},wa=class extends Ne{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ge,h=Ge,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Uu=new Ct,ux=new Ct,Aa=class i{constructor(t=[],e=[]){this.uuid=Pn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ct)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Ct;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){let o=t[r]?t[r].matrixWorld:ux;Uu.multiplyMatrices(o,e[r]),Uu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new wa(e,t,t,_n,In);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new mr),this.bones.push(a),this.boneInverses.push(new Ct().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let a=e[s];t.bones.push(a.uuid);let o=n[s];t.boneInverses.push(o.toArray())}return t}},ni=class extends Ee{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ds=new Ct,Ou=new Ct,na=[],Fu=new vn,dx=new Ct,Js=new he,js=new cn,un=class extends he{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ni(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),Fu.copy(t.boundingBox).applyMatrix4(ds),this.boundingBox.union(Fu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new cn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),js.copy(t.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),js.copy(this.boundingSphere),js.applyMatrix4(n),t.ray.intersectsSphere(js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ds),Ou.multiplyMatrices(n,ds),Js.matrixWorld=Ou,Js.raycast(t,na);for(let a=0,o=na.length;a<o;a++){let l=na[a];l.instanceId=r,l.object=this,e.push(l)}na.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ni(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wa(new Float32Array(s*this.count),s,this.count,lc,In));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var gr=class extends hn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ta=new T,La=new T,ku=new Ct,Qs=new As,ia=new cn,zo=new T,Bu=new T,Is=class extends ye{constructor(t=new Ce,e=new gr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ta.fromBufferAttribute(e,s-1),La.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ta.distanceTo(La);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(s),ia.radius+=r,t.ray.intersectsSphere(ia)===!1)return;ku.copy(s).invert(),Qs.copy(t.ray).applyMatrix4(ku);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),v=h.getX(x+1),M=sa(this,t,Qs,l,p,v);M&&e.push(M)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=sa(this,t,Qs,l,x,m);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=sa(this,t,Qs,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=sa(this,t,Qs,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function sa(i,t,e,n,s,r){let a=i.geometry.attributes.position;if(Ta.fromBufferAttribute(a,s),La.fromBufferAttribute(a,r),e.distanceSqToSegment(Ta,La,zo,Bu)>n)return;zo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(zo);if(!(l<t.near||l>t.far))return{distance:l,point:Bu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var zu=new T,Hu=new T,Ca=class extends Is{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)zu.fromBufferAttribute(e,s),Hu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zu.distanceTo(Hu);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ia=class extends Is{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},xr=class extends hn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vu=new Ct,Vl=new As,ra=new cn,aa=new T,Pa=class extends ye{constructor(t=new Ce,e=new xr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(s),ra.radius+=r,t.ray.intersectsSphere(ra)===!1)return;Vu.copy(s).invert(),Vl.copy(t.ray).applyMatrix4(Vu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);aa.fromBufferAttribute(u,m),Gu(aa,m,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)aa.fromBufferAttribute(u,g),Gu(aa,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Gu(i,t,e,n,s,r,a){let o=Vl.distanceSqToPoint(i);if(o<e){let l=new T;Vl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Zi=class extends Ne{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Da=class i extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new T,h=new Ot;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(o,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Gl=class i extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;v(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(f,2));function v(){let _=new T,I=new T,w=0,A=(e-t)/n;for(let L=0;L<=r;L++){let R=[],S=L/r,C=S*(e-t)+t;for(let V=0;V<=s;V++){let B=V/s,Y=B*l+o,j=Math.sin(Y),X=Math.cos(Y);I.x=C*j,I.y=-S*n+m,I.z=C*X,u.push(I.x,I.y,I.z),_.set(j,A,X).normalize(),d.push(_.x,_.y,_.z),f.push(B,1-S),R.push(g++)}x.push(R)}for(let L=0;L<s;L++)for(let R=0;R<r;R++){let S=x[R][L],C=x[R+1][L],V=x[R+1][L+1],B=x[R][L+1];(t>0||R!==0)&&(h.push(S,C,B),w+=3),(e>0||R!==r-1)&&(h.push(C,V,B),w+=3)}c.addGroup(p,w,0),p+=w}function M(_){let I=g,w=new Ot,A=new T,L=0,R=_===!0?t:e,S=_===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let C=g;for(let V=0;V<=s;V++){let Y=V/s*l+o,j=Math.cos(Y),X=Math.sin(Y);A.x=R*X,A.y=m*S,A.z=R*j,u.push(A.x,A.y,A.z),d.push(0,S,0),w.x=j*.5+.5,w.y=X*.5*S+.5,f.push(w.x,w.y),g++}for(let V=0;V<s;V++){let B=I+V,Y=C+V;_===!0?h.push(Y,Y+1,B):h.push(Y+1,Y,B),L+=3}c.addGroup(p,L,_===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Na=class i extends Gl{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wl=class i extends Ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(r.slice(),3)),this.setAttribute("uv",new ue(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let M=new T,_=new T,I=new T;for(let w=0;w<e.length;w+=3)f(e[w+0],M),f(e[w+1],_),f(e[w+2],I),l(M,_,I,v)}function l(v,M,_,I){let w=I+1,A=[];for(let L=0;L<=w;L++){A[L]=[];let R=v.clone().lerp(_,L/w),S=M.clone().lerp(_,L/w),C=w-L;for(let V=0;V<=C;V++)V===0&&L===w?A[L][V]=R:A[L][V]=R.clone().lerp(S,V/C)}for(let L=0;L<w;L++)for(let R=0;R<2*(w-L)-1;R++){let S=Math.floor(R/2);R%2===0?(d(A[L][S+1]),d(A[L+1][S]),d(A[L][S])):(d(A[L][S+1]),d(A[L+1][S+1]),d(A[L+1][S]))}}function c(v){let M=new T;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(v),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function h(){let v=new T;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];let _=m(v)/2/Math.PI+.5,I=p(v)/Math.PI+.5;a.push(_,1-I)}g(),u()}function u(){for(let v=0;v<a.length;v+=6){let M=a[v+0],_=a[v+2],I=a[v+4],w=Math.max(M,_,I),A=Math.min(M,_,I);w>.9&&A<.1&&(M<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),I<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,M){let _=v*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){let v=new T,M=new T,_=new T,I=new T,w=new Ot,A=new Ot,L=new Ot;for(let R=0,S=0;R<r.length;R+=9,S+=6){v.set(r[R+0],r[R+1],r[R+2]),M.set(r[R+3],r[R+4],r[R+5]),_.set(r[R+6],r[R+7],r[R+8]),w.set(a[S+0],a[S+1]),A.set(a[S+2],a[S+3]),L.set(a[S+4],a[S+5]),I.copy(v).add(M).add(_).divideScalar(3);let C=m(I);x(w,S+0,v,C),x(A,S+2,M,C),x(L,S+4,_,C)}}function x(v,M,_,I){I<0&&v.x===1&&(a[M]=v.x-1),_.x===0&&_.z===0&&(a[M]=I/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Ua=class i extends Wl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Oa=class i extends Ce{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new T,g=new Ot;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let v=p+m,M=v,_=v+n+1,I=v+n+2,w=v+1;o.push(M,_,w),o.push(_,I,w)}}this.setIndex(o),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Fa=class i extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new T,d=new T,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let v=[],M=p/n,_=0;p===0&&a===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let I=0;I<=e;I++){let w=I/e;u.x=-t*Math.cos(s+w*r)*Math.sin(a+M*o),u.y=t*Math.cos(a+M*o),u.z=t*Math.sin(s+w*r)*Math.sin(a+M*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(w+_,1-M),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let M=h[p][v+1],_=h[p][v],I=h[p+1][v],w=h[p+1][v+1];(p!==0||a>0)&&f.push(M,_,w),(p!==n-1||l<Math.PI)&&f.push(_,I,w)}this.setIndex(f),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Mn=class extends hn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=o0,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},dn=class extends Mn{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function oa(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function fx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function px(i){function t(s,r){return i[s]-i[r]}let e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Wu(i,t,e){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=e[r]*t;for(let l=0;l!==t;++l)s[a++]=i[o+l]}return s}function _0(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=i[s++];while(r!==void 0)}var wi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yl=class extends wi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nh,endingEnd:Nh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Uh:r=t,o=2*e-n;break;case Oh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uh:a=t,l=2*n-e;break;case Oh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let I=0;I!==o;++I)r[I]=p*a[h+I]+v*a[c+I]+M*a[l+I]+_*a[u+I];return r}},Xl=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},ql=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=oa(e,this.TimeBufferType),this.values=oa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:oa(t.times,Array),values:oa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ql(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Rs:e=this.InterpolantFactoryMethodDiscrete;break;case Es:e=this.InterpolantFactoryMethodLinear;break;case ho:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rs;case this.InterpolantFactoryMethodLinear:return Es;case this.InterpolantFactoryMethodSmooth:return ho}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&fx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ho,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Es;var Ai=class extends Sn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Rs;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends Sn{};ka.prototype.ValueTypeName="color";var ii=class extends Sn{};ii.prototype.ValueTypeName="number";var Zl=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Fe.slerpFlat(r,0,a,c-o,a,c,l);return r}},si=class extends Sn{InterpolantFactoryMethodLinear(t){return new Zl(this.times,this.values,this.getValueSize(),t)}};si.prototype.ValueTypeName="quaternion";si.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends Sn{constructor(t,e,n){super(t,e,n)}};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Rs;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var ri=class extends Sn{};ri.prototype.ValueTypeName="vector";var Ba=class{constructor(t="",e=-1,n=[],s=Bd){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Pn(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,s=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(gx(n[a]).scale(s));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(Sn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){let r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=px(l);l=Wu(l,1,h),c=Wu(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ii(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){let c=t[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,x){if(f.length!==0){let m=[],p=[];_0(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},s=[],r=t.name||"default",a=t.fps||30,o=t.blendMode,l=t.length||-1,c=t.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){let M=d[g];m.push(M.time),p.push(M.morphTarget===x?1:0)}s.push(new ii(".morphTargetInfluence["+x+"]",m,p))}l=f.length*a}else{let f=".bones["+e[u].name+"]";n(ri,f+".position",d,"pos",s),n(si,f+".quaternion",d,"rot",s),n(ri,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let t=this.tracks,e=0;for(let n=0,s=t.length;n!==s;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function mx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ii;case"vector":case"vector2":case"vector3":case"vector4":return ri;case"color":return ka;case"quaternion":return si;case"bool":case"boolean":return Ai;case"string":return Ti}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function gx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=mx(i.type);if(i.times===void 0){let e=[],n=[];_0(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}var Mi={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},_r=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},xx=new _r,ai=class{constructor(t){this.manager=t!==void 0?t:xx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ai.DEFAULT_MATERIAL_NAME="__DEFAULT";var qn={},Kl=class extends Error{constructor(t,e){super(t),this.response=e}},vr=class extends ai{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Mi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(qn[t]!==void 0){qn[t].push({onLoad:e,onProgress:n,onError:s});return}qn[t]=[],qn[t].push({onLoad:e,onProgress:n,onError:s});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=qn[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){v();function v(){u.read().then(({done:M,value:_})=>{if(M)p.close();else{x+=_.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let w=0,A=h.length;w<A;w++){let L=h[w];L.onProgress&&L.onProgress(I)}p.enqueue(_),v()}},M=>{p.error(M)})}}});return new Response(m)}else throw new Kl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Mi.add(t,c);let h=qn[t];delete qn[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=qn[t];if(h===void 0)throw this.manager.itemError(t),c;delete qn[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var $l=class extends ai{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Mi.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=hr("img");function l(){h(),Mi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var Ps=class extends ai{constructor(t){super(t)}load(t,e,n,s){let r=new Ne,a=new $l(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Ds=class extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},za=class extends Ds{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ho=new Ct,Yu=new T,Xu=new T,yr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Yu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yu),Xu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xu),e.updateMatrixWorld(),Ho.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ho),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ho)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Jl=class extends yr{constructor(){super(new Le(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=ws*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Ha=class extends Ds{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Jl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},qu=new Ct,tr=new T,Vo=new T,jl=class extends yr{constructor(){super(new Le(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ot(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),tr.setFromMatrixPosition(t.matrixWorld),n.position.copy(tr),Vo.copy(n.position),Vo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Vo),n.updateMatrixWorld(),s.makeTranslation(-tr.x,-tr.y,-tr.z),qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qu)}},Ns=class extends Ds{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ql=class extends yr{constructor(){super(new Ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Li=class extends Ds{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new Ql}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ci=class{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var Va=class extends ai{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Mi.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Mi.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),Mi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Mi.add(t,l),r.manager.itemStart(t)}};var mc="\\[\\]\\.:\\/",_x=new RegExp("["+mc+"]","g"),gc="[^"+mc+"]",vx="[^"+mc.replace("\\.","")+"]",yx=/((?:WC+[\/:])*)/.source.replace("WC",gc),Mx=/(WCOD+)?/.source.replace("WCOD",vx),Sx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gc),bx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gc),Rx=new RegExp("^"+yx+Mx+Sx+bx+"$"),Ex=["material","materials","bones","map"],tc=class{constructor(t,e,n){let s=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_x,"")}static parseTrackName(t){let e=Rx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ex.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=tc;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var R_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ec);function xc(i,t){if(t===a0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===Sr||t===Wa){let e=i.getIndex();if(e===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=e.count-2,s=[];if(t===Sr)for(let a=1;a<=n;a++)s.push(e.getX(0)),s.push(e.getX(a)),s.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(e.getX(a)),s.push(e.getX(a+1)),s.push(e.getX(a+2))):(s.push(e.getX(a+2)),s.push(e.getX(a+1)),s.push(e.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}var qa=class extends ai{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Rc(e)}),this.register(function(e){return new Ec(e)}),this.register(function(e){return new Nc(e)}),this.register(function(e){return new Uc(e)}),this.register(function(e){return new Oc(e)}),this.register(function(e){return new Ac(e)}),this.register(function(e){return new Tc(e)}),this.register(function(e){return new Lc(e)}),this.register(function(e){return new Cc(e)}),this.register(function(e){return new bc(e)}),this.register(function(e){return new Ic(e)}),this.register(function(e){return new wc(e)}),this.register(function(e){return new Dc(e)}),this.register(function(e){return new Pc(e)}),this.register(function(e){return new Mc(e)}),this.register(function(e){return new Fc(e)}),this.register(function(e){return new kc(e)})}load(t,e,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Ci.extractUrlBase(t);a=Ci.resolveURL(c,this.path)}else a=Ci.extractUrlBase(t);this.manager.itemStart(t);let o=function(c){s?s(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new vr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,a,function(h){e(h),r.manager.itemEnd(t)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r,a={},o={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===b0){try{a[qt.KHR_BINARY_GLTF]=new Bc(t)}catch(u){s&&s(u);return}r=JSON.parse(a[qt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Xc(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case qt.KHR_MATERIALS_UNLIT:a[u]=new Sc;break;case qt.KHR_DRACO_MESH_COMPRESSION:a[u]=new zc(r,this.dracoLoader);break;case qt.KHR_TEXTURE_TRANSFORM:a[u]=new Hc;break;case qt.KHR_MESH_QUANTIZATION:a[u]=new Vc;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(t,e){let n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}};function Ax(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}var qt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Mc=class{constructor(t){this.parser=t,this.name=qt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,s=e.cache.get(n);if(s)return s;let r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],c,h=new bt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ye);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Li(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ns(h),c.distance=u;break;case"spot":c=new Ha(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,oi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),s=Promise.resolve(c),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(e.cache,o,l)})}},Sc=class{constructor(){this.name=qt.KHR_MATERIALS_UNLIT}getMaterialType(){return We}extendParams(t,e,n){let s=[];t.color=new bt(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],Ye),t.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,Re))}return Promise.all(s)}},bc=class{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}},Rc=class{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Ot(o,o)}return Promise.all(r)}},Ec=class{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_DISPERSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},wc=class{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Ac=class{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];e.sheenColor=new bt(0,0,0),e.sheenRoughness=0,e.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],Ye)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,Re)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Tc=class{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Lc=class{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return e.attenuationColor=new bt().setRGB(o[0],o[1],o[2],Ye),Promise.all(r)}},Cc=class{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Ic=class{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return e.specularColor=new bt().setRGB(o[0],o[1],o[2],Ye),a.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,Re)),Promise.all(r)}},Pc=class{constructor(t){this.parser=t,this.name=qt.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(r)}},Dc=class{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Nc=class{constructor(t){this.parser=t,this.name=qt.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}},Uc=class{constructor(t){this.parser=t,this.name=qt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let a=r.extensions[e],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Oc=class{constructor(t){this.parser=t,this.name=qt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let a=r.extensions[e],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Fc=class{constructor(t){this.name=qt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},kc=class{constructor(t){this.name=qt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=e.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==bn.TRIANGLES&&c.mode!==bn.TRIANGLE_STRIP&&c.mode!==bn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let x=new Ct,m=new T,p=new Fe,v=new T(1,1,1),M=new un(g.geometry,g.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&v.fromBufferAttribute(l.SCALE,_),M.setMatrixAt(_,x.compose(m,p,v));for(let _ in l)if(_==="_COLOR_0"){let I=l[_];M.instanceColor=new ni(I.array,I.itemSize,I.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);ye.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},b0="glTF",br=12,v0={JSON:1313821514,BIN:5130562},Bc=class{constructor(t){this.name=qt.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,br),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==b0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-br,r=new DataView(t,br),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===v0.JSON){let c=new Uint8Array(t,br+a,o);this.content=n.decode(c)}else if(l===v0.BIN){let c=br+a;this.body=t.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},zc=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Wc[h]||h.toLowerCase();o[u]=a[h]}for(let h in t.attributes){let u=Wc[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[t.attributes[h]],f=Os[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(f)},o,c,Ye,d)})})}},Hc=class{constructor(){this.name=qt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},Vc=class{constructor(){this.name=qt.KHR_MESH_QUANTIZATION}},Za=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let a=0;a!==s;a++)e[a]=n[r+a];return e}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-e,u=(n-e)/h,d=u*u,f=d*u,g=t*c,x=g-c,m=-2*f+3*d,p=f-d,v=1-m,M=p-d+u;for(let _=0;_!==o;_++){let I=a[x+_+o],w=a[x+_+l]*h,A=a[g+_+o],L=a[g+_]*h;r[_]=v*I+M*w+m*A+p*L}return r}},Tx=new Fe,Gc=class extends Za{interpolate_(t,e,n,s){let r=super.interpolate_(t,e,n,s);return Tx.fromArray(r).normalize().toArray(r),r}},bn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Os={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},y0={9728:Ge,9729:Qe,9984:sc,9985:ir,9986:fs,9987:On},M0={33071:$n,33648:lr,10497:Qn},_c={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Lx={CUBICSPLINE:void 0,LINEAR:Es,STEP:Rs},vc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Cx(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Mn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fn})),i.DefaultMaterial}function Ki(i,t,e){for(let n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function oi(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Ix(i,t,e){let n=!1,s=!1,r=!1;for(let c=0,h=t.length;c<h;c++){let u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=t.length;c<h;c++){let u=t[c];if(n){let d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Px(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Dx(i){let t,e=i.extensions&&i.extensions[qt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+yc(e.attributes):t=i.indices+":"+yc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+yc(i.targets[n]);return t}function yc(i){let t="",e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function Yc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Nx(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Ux=new Ct,Xc=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Ax,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Ps(this.options.manager):this.textureLoader=new Va(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new vr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ki(r,o,s),oi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){let a=e[s].joints;for(let o=0,l=a.length;o<l;o++)t[a[o]].isBone=!0}for(let s=0,r=t.length;s<r;s++){let a=t[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let s=t(e[n]);if(s)return s}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let s=0;s<e.length;s++){let r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[qt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Ci.resolveURL(e.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){let e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){let a=_c[s.type],o=Os[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Ee(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=_c[s.type],c=Os[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,M=e.cache.get(v);M||(x=new c(o,p*f,s.count*f/h),M=new fr(x,f/h),e.cache.add(v,M)),m=new pr(M,l,d%f/h,g)}else o===null?x=new c(s.count*l):x=new c(o,d,s.count*l),m=new Ee(x,l,g);if(s.sparse!==void 0){let p=_c.SCALAR,v=Os[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,I=new v(a[1],M,s.sparse.count*p),w=new c(a[2],_,s.sparse.count*l);o!==null&&(m=new Ee(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,L=I.length;A<L;A++){let R=I[A];if(m.setX(R,w[A*l]),l>=2&&m.setY(R,w[A*l+1]),l>=3&&m.setZ(R,w[A*l+2]),l>=4&&m.setW(R,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,a=e.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(t,r,o)}loadTextureImage(t,e,n){let s=this,r=this.json,a=r.textures[t],o=r.images[e],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=y0[d.magFilter]||Qe,h.minFilter=y0[d.minFilter]||On,h.wrapS=M0[d.wrapS]||Qn,h.wrapT=M0[d.wrapT]||Qn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ge&&h.minFilter!==Qe,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){let n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let a=s.images[t],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(x){let m=new Ne(x);m.needsUpdate=!0,d(m)}),e.load(Ci.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),oi(u,a),u.userData.mimeType=a.mimeType||Nx(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[qt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[qt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[qt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),t[e]=a,a})}assignFinalMaterial(t){let e=t.geometry,n=t.material,s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new xr,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(t.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new gr,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return Mn}loadMaterial(t){let e=this,n=this.json,s=this.extensions,r=n.materials[t],a,o={},l=r.extensions||{},c=[];if(l[qt.KHR_MATERIALS_UNLIT]){let u=s[qt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,e))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new bt(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ye),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(o,"map",u.baseColorTexture,Re)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}r.doubleSided===!0&&(o.side=ln);let h=r.alphaMode||vc.OPAQUE;if(h===vc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===vc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==We&&(c.push(e.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ot(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==We&&(c.push(e.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==We){let u=r.emissiveFactor;o.emissive=new bt().setRGB(u[0],u[1],u[2],Ye)}return r.emissiveTexture!==void 0&&a!==We&&c.push(e.assignTexture(o,"emissiveMap",r.emissiveTexture,Re)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),oi(u,r),e.associations.set(u,{materials:t}),r.extensions&&Ki(s,u,r),u})}createUniqueName(t){let e=me.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[qt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(l){return S0(l,o,e)})}let a=[];for(let o=0,l=t.length;o<l;o++){let c=t[o],h=Dx(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[qt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=S0(new Ce,c,e),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){let e=this,n=this.json,s=this.extensions,r=n.meshes[t],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?Cx(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=a[f],p,v=c[f];if(m.mode===bn.TRIANGLES||m.mode===bn.TRIANGLE_STRIP||m.mode===bn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Ea(x,v):new he(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===bn.TRIANGLE_STRIP?p.geometry=xc(p.geometry,Wa):m.mode===bn.TRIANGLE_FAN&&(p.geometry=xc(p.geometry,Sr));else if(m.mode===bn.LINES)p=new Ca(x,v);else if(m.mode===bn.LINE_STRIP)p=new Is(x,v);else if(m.mode===bn.LINE_LOOP)p=new Ia(x,v);else if(m.mode===bn.POINTS)p=new Pa(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Px(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),oi(p,r),m.extensions&&Ki(s,p,m),e.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&Ki(s,u[0],r),u[0];let d=new tn;r.extensions&&Ki(s,d,r),e.associations.set(d,{meshes:t});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(t){let e,n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Le(c0.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new Ls(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),oi(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Ct;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Aa(o,l)})}loadAnimation(t){let e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let v=0,M=d.length;v<M;v++){let _=d[v],I=f[v],w=g[v],A=x[v],L=m[v];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let R=n._createAnimationTracks(_,I,w,A,L);if(R)for(let S=0;S<R.length;S++)p.push(R[S])}return new Ba(r,void 0,p)})}createNodeMesh(t){let e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(t){let e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Ux)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){o.push(c)}),this.nodeCache[t]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new mr:c.length>1?h=new tn:c.length===1?h=c[0]:h=new ye,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),oi(h,r),r.extensions&&Ki(n,h,r),r.matrix!==void 0){let u=new Ct;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],s=this,r=new tn;n.name&&(r.name=s.createUniqueName(n.name)),oi(r,n),n.extensions&&Ki(e,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof hn||d instanceof Ne)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(t,e,n,s,r){let a=[],o=t.name?t.name:t.uuid,l=[];Ii[r.path]===Ii.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Ii[r.path]){case Ii.weights:c=ii;break;case Ii.rotation:c=si;break;case Ii.position:case Ii.scale:c=ri;break;default:switch(n.itemSize){case 1:c=ii;break;case 2:case 3:default:c=ri;break}break}let h=s.interpolation!==void 0?Lx[s.interpolation]:Es,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+Ii[r.path],e.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=Yc(e.constructor),s=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let s=this instanceof si?Gc:Za;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Ox(i,t,e){let n=t.attributes,s=new vn;if(n.POSITION!==void 0){let o=e.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new T(l[0],l[1],l[2]),new T(c[0],c[1],c[2])),o.normalized){let h=Yc(Os[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let o=new T,l=new T;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=e.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Yc(Os[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new cn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function S0(i,t,e){let n=t.attributes,s=[];function r(a,o){return e.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Wc[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(t.indices!==void 0&&!i.index){let a=e.getDependency("accessor",t.indices).then(function(o){i.setIndex(o)});s.push(a)}return Zt.workingColorSpace!==Ye&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Zt.workingColorSpace}" not supported.`),oi(i,t),Ox(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?Ix(i,t.targets,e):i})}var Ka=class{constructor(t,e){this.mx=0,this.my=0,this.pressed=new Set,this.held=new Set,this.stickId=null,this.zone=t,this.base=t.querySelector(".stick-base"),this.knob=t.querySelector(".stick-knob"),this.keys=new Set,this.radius=56,t.addEventListener("pointerdown",s=>this.stickStart(s)),window.addEventListener("pointermove",s=>this.stickMove(s),{passive:!1}),window.addEventListener("pointerup",s=>this.stickEnd(s)),window.addEventListener("pointercancel",s=>this.stickEnd(s));for(let[s,r]of Object.entries(e)){r.addEventListener("pointerdown",o=>{o.preventDefault();try{r.setPointerCapture?.(o.pointerId)}catch{}this.press(s),r.classList.add("down")});let a=()=>{this.held.delete(s),r.classList.remove("down")};r.addEventListener("pointerup",a),r.addEventListener("pointercancel",a),r.addEventListener("lostpointercapture",a),r.addEventListener("contextmenu",o=>o.preventDefault())}let n={KeyJ:"attack",KeyK:"heavy",Space:"dodge",KeyL:"dodge",KeyU:"rage",KeyI:"rage",KeyP:"pause",Escape:"pause"};window.addEventListener("keydown",s=>{if(s.repeat)return;this.keys.add(s.code);let r=n[s.code];r&&(this.press(r),s.preventDefault())}),window.addEventListener("keyup",s=>{this.keys.delete(s.code);let r=n[s.code];r&&this.held.delete(r)}),window.addEventListener("blur",()=>{this.keys.clear(),this.held.clear(),this.resetStick()}),document.addEventListener("gesturestart",s=>s.preventDefault()),document.addEventListener("dblclick",s=>s.preventDefault())}press(t){this.pressed.add(t),this.held.add(t)}consume(t){return this.pressed.has(t)?(this.pressed.delete(t),!0):!1}clear(){this.pressed.clear()}stickStart(t){if(this.stickId!==null)return;t.preventDefault(),this.stickId=t.pointerId;let e=this.zone.getBoundingClientRect();this.ox=t.clientX,this.oy=t.clientY,this.base.style.transform=`translate(${t.clientX-e.left}px, ${t.clientY-e.top}px)`,this.knob.style.transform=`translate(${t.clientX-e.left}px, ${t.clientY-e.top}px)`,this.zone.classList.add("active")}stickMove(t){if(t.pointerId!==this.stickId)return;t.preventDefault();let e=t.clientX-this.ox,n=t.clientY-this.oy,s=Math.hypot(e,n),r=this.radius;s>r&&(e*=r/s,n*=r/s);let a=this.zone.getBoundingClientRect();this.knob.style.transform=`translate(${this.ox-a.left+e}px, ${this.oy-a.top+n}px)`;let o=Math.min(1,s/r),l=.15,c=Math.hypot(e,n)||1,h=o<l?0:(o-l)/(1-l);this.mx=e/c*h,this.my=-n/c*h}stickEnd(t){t.pointerId===this.stickId&&this.resetStick()}resetStick(){this.stickId=null,this.mx=0,this.my=0,this.zone.classList.remove("active")}move(){let t=this.mx,e=this.my,n=this.keys,s=(n.has("KeyD")||n.has("ArrowRight")?1:0)-(n.has("KeyA")||n.has("ArrowLeft")?1:0),r=(n.has("KeyW")||n.has("ArrowUp")?1:0)-(n.has("KeyS")||n.has("ArrowDown")?1:0);if(s||r){let a=Math.hypot(s,r);t=s/a,e=r/a}return[t,e]}};var $a=class{constructor(){this.ctx=null,this.muted=!1,this.musicOn=!1}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.8;let e=this.ctx.createDynamicsCompressor();this.master.connect(e),e.connect(this.ctx.destination),this.sfxBus=this.ctx.createGain(),this.sfxBus.connect(this.master),this.musBus=this.ctx.createGain(),this.musBus.gain.value=.35,this.musBus.connect(this.master);let n=this.ctx.sampleRate;this.noise=this.ctx.createBuffer(1,n,this.ctx.sampleRate);let s=this.noise.getChannelData(0);for(let r=0;r<n;r++)s[r]=Math.random()*2-1}this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.8)}_noise(t,e,n,s,r,a,o="bandpass",l=this.sfxBus){let c=this.ctx,h=c.createBufferSource();h.buffer=this.noise,h.playbackRate.value=.7+Math.random()*.6;let u=c.createBiquadFilter();u.type=o,u.Q.value=r,u.frequency.setValueAtTime(n,t),u.frequency.exponentialRampToValueAtTime(s,t+e);let d=c.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(a,t+Math.min(.03,e*.3)),d.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u),u.connect(d),d.connect(l),h.start(t,Math.random()*.5),h.stop(t+e+.05)}_tone(t,e,n,s,r,a="sine",o=this.sfxBus){let l=this.ctx,c=l.createOscillator();c.type=a,c.frequency.setValueAtTime(n,t),c.frequency.exponentialRampToValueAtTime(Math.max(20,s),t+e);let h=l.createGain();h.gain.setValueAtTime(r,t),h.gain.exponentialRampToValueAtTime(1e-4,t+e),c.connect(h),h.connect(o),c.start(t),c.stop(t+e+.05)}play(t,e=1){if(!this.ctx||this.muted)return;let n=this.ctx.currentTime;switch(t){case"swing":this._noise(n,.28,500,2600,1.2,.35*e);break;case"swingHeavy":this._noise(n,.45,300,1800,1,.5*e),this._tone(n,.3,90,50,.2*e);break;case"hit":this._noise(n,.12,2400,600,.8,.45*e),this._tone(n,.16,140,50,.5*e,"triangle"),this._noise(n+.01,.2,900,200,2,.25*e,"lowpass");break;case"slam":this._tone(n,.6,80,30,.9*e),this._noise(n,.5,1200,100,.7,.6*e,"lowpass");break;case"hurt":this._tone(n,.25,220,90,.35*e,"sawtooth"),this._noise(n,.15,1500,400,1,.3*e);break;case"dodge":this._noise(n,.22,800,300,.8,.25*e);break;case"clang":this._tone(n,.4,1800,1700,.15*e,"square"),this._tone(n,.5,2700,2600,.1*e),this._noise(n,.08,4e3,2e3,1,.3*e);break;case"rage":this._tone(n,1.2,60,120,.6*e,"sawtooth"),this._noise(n,1,200,3e3,.6,.4*e),this._tone(n,1.4,45,30,.8*e);break;case"roar":for(let s=0;s<3;s++)this._tone(n+s*.02,1.6,70+s*13,40,.35*e,"sawtooth");this._noise(n,1.6,400,150,.7,.5*e,"lowpass");break;case"parry":this._tone(n,.7,2400,2300,.22*e,"square"),this._tone(n,.9,3600,3500,.14*e),this._noise(n,.12,6e3,2500,1,.5*e),this._tone(n,.3,120,50,.4*e);break;case"glint":this._tone(n,.18,3200,3e3,.08*e,"triangle"),this._tone(n,.25,4800,4700,.05*e);break;case"heal":this._tone(n,.35,520,880,.15*e,"triangle");break;case"ui":this._tone(n,.09,660,520,.12*e,"triangle");break;case"wave":this._tone(n,1.2,110,108,.4*e,"sawtooth"),this._tone(n,1.2,165,163,.25*e,"sawtooth");break}}startMusic(){if(!this.ctx||this.musicOn)return;this.musicOn=!0;let t=this.ctx;this.drone=[];for(let[o,l]of[[55,.12],[82.4,.06],[55.4,.08]]){let c=t.createOscillator();c.type="sawtooth",c.frequency.value=o;let h=t.createBiquadFilter();h.type="lowpass",h.frequency.value=260;let u=t.createGain();u.gain.value=l,c.connect(h),h.connect(u),u.connect(this.musBus),c.start(),this.drone.push(c)}let e=60/96,n=t.currentTime+.1,s=0,r=[1,0,.5,0,1,.4,.6,0,1,0,.5,.3,1,0,.8,.6],a=()=>{if(this.musicOn){for(;n<t.currentTime+.3;){let o=r[s%16];o&&(this._tone(n,.45,95,42,.55*o,"sine",this.musBus),this._noise(n,.12,600,200,.7,.12*o,"lowpass",this.musBus)),n+=e/2,s++}this.musTimer=setTimeout(a,100)}};a()}stopMusic(){this.musicOn=!1,clearTimeout(this.musTimer),(this.drone||[]).forEach(t=>{try{t.stop()}catch{}}),this.drone=[]}};var Ja=[];var qc={R2L:[[0,{pelvis:[0,-.338,0],torso:[.1,-.413,0],head:[-.05,.338,0],cloak:[.637,0,.15],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-.766,.648,.001],farmR:[-1.778,0,0],handR:[-.6,-.171,.9],uarmL:[-.093,-.327,1.999],farmL:[-2.095,0,0]},null,null],[.025,{pelvis:[0,-.351,0],torso:[.112,-.428,0],head:[-.056,.351,0],cloak:[.645,0,.156],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-.627,.583,.186],farmR:[-1.63,0,0],handR:[-.6,-.24,.704],uarmL:[-.163,-.43,1.53],farmL:[-1.851,0,0]},"lin",null],[.05,{pelvis:[0,-.357,0],torso:[.117,-.437,0],head:[-.059,.357,0],cloak:[.648,0,.159],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-.588,.535,.196],farmR:[-1.617,0,0],handR:[-.6,-.258,.719],uarmL:[-.158,-.509,1.328],farmL:[-1.76,0,0]},"lin",null],[.075,{pelvis:[0,-.36,0],torso:[.12,-.44,0],head:[-.06,.36,0],cloak:[.65,0,.16],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-.575,.517,.191],farmR:[-1.619,0,0],handR:[-.6,-.263,.736],uarmL:[-.157,-.533,1.269],farmL:[-1.736,0,0]},"lin",null],[.1,{pelvis:[0,-.36,0],torso:[.12,-.44,0],head:[-.06,.36,0],cloak:[.65,0,.16],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-.63,.705,.3],farmR:[-1.765,0,0],handR:[-.544,-.848,-.9],uarmL:[-.155,-.614,1.168],farmL:[-1.608,0,0]},"lin",null],[.11,{pelvis:[0,-.347,0],torso:[.122,-.425,0],head:[-.061,.347,0],cloak:[.643,0,.154],thighR:[.259,0,-.122],shinR:[.409,0,0],thighL:[-.472,0,.122],shinL:[.472,0,0],rootY:-.129,footL:[.009,0,0],uarmR:[-.7,.797,.428],farmR:[-1.756,0,0],handR:[-.442,-.689,-.9],uarmL:[-.109,-.536,1.227],farmL:[-1.722,0,0]},"lin",null],[.12,{pelvis:[0,-.309,0],torso:[.128,-.378,0],head:[-.064,.309,0],cloak:[.622,0,.138],thighR:[.287,0,-.128],shinR:[.438,0,0],thighL:[-.537,0,.128],shinL:[.537,0,0],rootY:-.155,footL:[.037,0,0],uarmR:[-.739,.899,.428],farmR:[-1.767,0,0],handR:[-.319,-.653,-.9],uarmL:[-.001,-.403,1.273],farmL:[-1.953,0,0]},"lin",null],[.13,{pelvis:[0,-.246,0],torso:[.137,-.301,0],head:[-.068,.246,0],cloak:[.587,0,.109],thighR:[.334,0,-.137],shinR:[.484,0,0],thighL:[-.647,0,.137],shinL:[.647,0,0],rootY:-.199,footL:[.084,0,0],uarmR:[-.713,.962,.428],farmR:[-1.887,0,0],handR:[.007,-.577,-.9],uarmL:[.153,-.261,1.27],farmL:[-2.295,0,0]},"lin",null],[.14,{pelvis:[0,-.158,0],torso:[.15,-.193,0],head:[-.075,.158,0],cloak:[.537,0,.07],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],rootY:-.26,footL:[.15,0,0],uarmR:[-.573,.664,.3],farmR:[-2.204,0,0],handR:[.611,-.75,-.9],uarmL:[-.028,-.56,1.176],farmL:[-2.332,0,0]},"lin",null],[.15,{pelvis:[0,-.096,0],torso:[.163,-.117,0],head:[-.081,.096,0],cloak:[.528,0,.042],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.467,.798,.3],farmR:[-2.3,0,0],handR:[.681,-.724,-.9],uarmL:[.158,-.884,.896],farmL:[-2.472,0,0]},"lin",null],[.16,{pelvis:[0,-.034,0],torso:[.175,-.041,0],head:[-.087,.034,0],cloak:[.519,0,.015],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.274,.905,.265],farmR:[-2.414,0,0],handR:[.718,-.784,-.876],uarmL:[.422,-1.6,.223],farmL:[-2.471,0,0]},"lin",null],[.17,{pelvis:[0,.028,0],torso:[.188,.034,0],head:[-.094,-.028,0],cloak:[.509,0,-.013],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.137,.834,.197],farmR:[-2.557,0,0],handR:[.923,-.902,-.9],uarmL:[.29,-1.65,-.358],farmL:[-2.3,0,0]},"lin",null],[.18,{pelvis:[0,.09,0],torso:[.2,.11,0],head:[-.1,-.09,0],cloak:[.5,0,-.04],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.223,.432,.294],farmR:[-2.569,0,0],handR:[1.534,-.96,-.9],uarmL:[-.002,-1.682,-.4],farmL:[-2.218,0,0]},"lin",null],[.195,{pelvis:[0,.233,0],torso:[.2,.285,0],head:[-.1,-.233,0],cloak:[.579,0,-.104],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.07,.083,.123],farmR:[-2.631,0,0],handR:[2.226,-1.349,-.9],uarmL:[-.604,-1.786,-.154],farmL:[-1.405,0,0]},"lin",null],[.21,{pelvis:[0,.307,0],torso:[.2,.375,0],head:[-.1,-.307,0],cloak:[.62,0,-.136],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.425,-.127,.183],farmR:[-2.283,0,0],handR:[2.871,-1.309,-.9],uarmL:[-1.048,-1.515,-.13],farmL:[-.764,0,0]},"lin",null],[.225,{pelvis:[0,.334,0],torso:[.2,.408,0],head:[-.1,-.334,0],cloak:[.635,0,-.148],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.661,-.075,.137],farmR:[-2.034,0,0],handR:[2.928,-1.342,-.9],uarmL:[-1.304,-1.396,-.128],farmL:[-.418,0,0]},"lin",null],[.24,{pelvis:[0,.338,0],torso:[.2,.412,0],head:[-.1,-.338,0],cloak:[.637,0,-.15],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.552,-.118,.3],farmR:[-1.821,0,0],handR:[2.992,-1.321,-.9],uarmL:[-1.371,-1.319,-.121],farmL:[-.186,0,0]},"lin",null],[.2625,{pelvis:[0,.377,0],torso:[.154,.46,0],head:[-.077,-.377,0],cloak:[.659,0,-.167],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.656,.047,.3],farmR:[-1.753,0,0],handR:[3.151,-1.386,-.994],uarmL:[-1.432,-1.195,-.112],farmL:[-.1,0,0]},"lin",null],[.285,{pelvis:[0,.397,0],torso:[.13,.485,0],head:[-.065,-.397,0],cloak:[.67,0,-.176],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.768,.203,.378],farmR:[-1.702,0,0],handR:[3.27,-1.273,-1.076],uarmL:[-1.465,-1.116,-.109],farmL:[-.1,0,0]},"lin",null],[.3075,{pelvis:[0,.404,0],torso:[.121,.494,0],head:[-.061,-.404,0],cloak:[.674,0,-.18],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.865,.266,.378],farmR:[-1.714,0,0],handR:[3.301,-1.249,-1.076],uarmL:[-1.503,-1.106,-.109],farmL:[-.1,0,0]},"lin",null],[.33,{pelvis:[0,.405,0],torso:[.12,.495,0],head:[-.06,-.405,0],cloak:[.675,0,-.18],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.875,.278,.378],farmR:[-1.707,0,0],handR:[3.296,-1.252,-1.076],uarmL:[-1.507,-1.102,-.109],farmL:[-.1,0,0]},"lin",null]],L2R:[[0,{pelvis:[0,.338,0],torso:[.1,.413,0],head:[-.05,-.338,0],cloak:[.637,0,-.15],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[.25,1.539,-1.731],farmR:[-1.869,0,0],handR:[1.213,-1.012,.142],uarmL:[-3,.625,1.665],farmL:[-.101,0,0]},null,null],[.025,{pelvis:[0,.351,0],torso:[.112,.428,0],head:[-.056,-.351,0],cloak:[.645,0,-.156],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[.213,1.539,-1.746],farmR:[-1.84,0,0],handR:[1.206,-1.068,.13],uarmL:[-2.984,.628,1.672],farmL:[-.12,0,0]},"lin",null],[.05,{pelvis:[0,.357,0],torso:[.117,.437,0],head:[-.059,-.357,0],cloak:[.648,0,-.159],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[.187,1.544,-1.756],farmR:[-1.812,0,0],handR:[1.201,-1.095,.128],uarmL:[-2.962,.63,1.673],farmL:[-.149,0,0]},"lin",null],[.075,{pelvis:[0,.36,0],torso:[.12,.44,0],head:[-.06,-.36,0],cloak:[.65,0,-.16],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[.171,1.545,-1.756],farmR:[-1.792,0,0],handR:[1.194,-1.088,.126],uarmL:[-2.936,.639,1.675],farmL:[-.199,0,0]},"lin",null],[.1,{pelvis:[0,.36,0],torso:[.12,.44,0],head:[-.06,-.36,0],cloak:[.65,0,-.16],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[.146,1.536,-1.655],farmR:[-1.876,0,0],handR:[1.313,-.196,-.18],uarmL:[-2.9,.643,1.619],farmL:[-.237,0,0]},"lin",null],[.11,{pelvis:[0,.347,0],torso:[.122,.425,0],head:[-.061,-.347,0],cloak:[.643,0,-.154],thighR:[.259,0,-.122],shinR:[.409,0,0],thighL:[-.472,0,.122],shinL:[.472,0,0],rootY:-.129,footL:[.009,0,0],uarmR:[.162,1.536,-1.576],farmR:[-1.932,0,0],handR:[1.42,-.061,-.192],uarmL:[-2.907,.643,1.649],farmL:[-.305,0,0]},"lin",null],[.12,{pelvis:[0,.309,0],torso:[.128,.378,0],head:[-.064,-.309,0],cloak:[.622,0,-.138],thighR:[.287,0,-.128],shinR:[.438,0,0],thighL:[-.537,0,.128],shinL:[.537,0,0],rootY:-.155,footL:[.037,0,0],uarmR:[.159,1.492,-1.597],farmR:[-2.076,0,0],handR:[1.71,-.011,-.192],uarmL:[-2.943,.609,1.637],farmL:[-.421,0,0]},"lin",null],[.13,{pelvis:[0,.246,0],torso:[.137,.301,0],head:[-.068,-.246,0],cloak:[.587,0,-.109],thighR:[.334,0,-.137],shinR:[.484,0,0],thighL:[-.647,0,.137],shinL:[.647,0,0],rootY:-.199,footL:[.084,0,0],uarmR:[.116,1.538,-1.681],farmR:[-2.126,0,0],handR:[2.141,-.029,-.19],uarmL:[-2.944,.622,1.606],farmL:[-.744,0,0]},"lin",null],[.14,{pelvis:[0,.158,0],torso:[.15,.193,0],head:[-.075,-.158,0],cloak:[.537,0,-.07],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],rootY:-.26,footL:[.15,0,0],uarmR:[-.211,1.698,-1.836],farmR:[-1.77,0,0],handR:[2.685,-.1,-.083],uarmL:[-2.816,.753,1.496],farmL:[-1.653,0,0]},"lin",null],[.15,{pelvis:[0,.096,0],torso:[.163,.117,0],head:[-.081,-.096,0],cloak:[.528,0,-.042],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.425,1.754,-1.888],farmR:[-1.745,0,0],handR:[3.151,-.131,-.112],uarmL:[-2.922,.662,1.517],farmL:[-1.971,0,0]},"lin",null],[.16,{pelvis:[0,.034,0],torso:[.175,.041,0],head:[-.087,-.034,0],cloak:[.519,0,-.015],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.526,1.738,-1.901],farmR:[-1.703,0,0],handR:[3.4,-.131,-.123],uarmL:[-3,.57,1.565],farmL:[-2.069,0,0]},"lin",null],[.17,{pelvis:[0,-.028,0],torso:[.188,-.034,0],head:[-.094,.028,0],cloak:[.509,0,.013],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.585,1.651,-1.897],farmR:[-1.529,0,0],handR:[3.4,-.131,-.115],uarmL:[-2.973,.594,1.575],farmL:[-2.279,0,0]},"lin",null],[.18,{pelvis:[0,-.09,0],torso:[.2,-.11,0],head:[-.1,.09,0],cloak:[.5,0,.04],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.59,1.538,-1.88],farmR:[-1.453,0,0],handR:[3.4,-.113,-.105],uarmL:[-2.931,.631,1.582],farmL:[-2.3,0,0]},"lin",null],[.195,{pelvis:[0,-.233,0],torso:[.2,-.285,0],head:[-.1,.233,0],cloak:[.579,0,.104],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.241,1.507,-1.778],farmR:[-.152,0,0],handR:[3.521,-.036,-.052],uarmL:[-.413,1.6,1.642],farmL:[-2.317,0,0]},"lin",null],[.21,{pelvis:[0,-.307,0],torso:[.2,-.375,0],head:[-.1,.307,0],cloak:[.62,0,.136],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.159,1.414,-1.702],farmR:[-.088,0,0],handR:[3.605,.028,-.075],uarmL:[-.533,1.485,1.662],farmL:[-2.463,0,0]},"lin",null],[.225,{pelvis:[0,-.334,0],torso:[.2,-.408,0],head:[-.1,.334,0],cloak:[.635,0,.148],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.08,1.417,-1.697],farmR:[-.12,0,0],handR:[3.682,.031,-.08],uarmL:[-.61,1.404,1.618],farmL:[-2.519,0,0]},"lin",null],[.24,{pelvis:[0,-.338,0],torso:[.2,-.412,0],head:[-.1,.338,0],cloak:[.637,0,.15],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.117,1.386,-1.533],farmR:[-.209,0,0],handR:[3.821,-.039,.182],uarmL:[-.633,1.384,1.632],farmL:[-2.3,0,0]},"lin",null],[.2625,{pelvis:[0,-.377,0],torso:[.154,-.46,0],head:[-.077,.377,0],cloak:[.659,0,.167],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.948,1.28,-1.589],farmR:[-.12,0,0],handR:[3.821,.011,.231],uarmL:[-1.044,.978,1.665],farmL:[-2.031,0,0]},"lin",null],[.285,{pelvis:[0,-.397,0],torso:[.13,-.485,0],head:[-.065,.397,0],cloak:[.67,0,.176],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.959,1.185,-1.613],farmR:[-.12,0,0],handR:[3.958,.003,.278],uarmL:[-1.193,.819,1.686],farmL:[-1.74,0,0]},"lin",null],[.3075,{pelvis:[0,-.404,0],torso:[.121,-.494,0],head:[-.061,.404,0],cloak:[.674,0,.18],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.034,1.243,-1.923],farmR:[-.042,0,0],handR:[3.995,.156,.055],uarmL:[-1.146,.888,1.536],farmL:[-1.749,0,0]},"lin",null],[.33,{pelvis:[0,-.405,0],torso:[.12,-.495,0],head:[-.06,.405,0],cloak:[.675,0,.18],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.036,1.383,-1.789],farmR:[.091,0,0],handR:[4.028,.106,.169],uarmL:[-1.077,.943,1.554],farmL:[-1.787,0,0]},"lin",null]],HIGH_R_LOW_L:[[0,{pelvis:[0,-.27,0],torso:[-.05,-.33,0],head:[.025,.27,0],cloak:[.6,0,.12],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.657,-.136,-1.136],farmR:[-1.18,0,0],handR:[-.6,-1.18,.261],uarmL:[-1.029,-.056,.234],farmL:[-1.232,0,0]},null,null],[.025,{pelvis:[0,-.283,0],torso:[-.067,-.346,0],head:[.034,.283,0],cloak:[.607,0,.126],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.716,-.16,-1.114],farmR:[-1.154,0,0],handR:[-.561,-1.18,.342],uarmL:[-1.01,-.036,.233],farmL:[-1.299,0,0]},"lin",null],[.05,{pelvis:[0,-.29,0],torso:[-.076,-.354,0],head:[.038,.29,0],cloak:[.611,0,.129],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.75,-.18,-1.103],farmR:[-1.154,0,0],handR:[-.537,-1.188,.382],uarmL:[-.988,-.027,.231],farmL:[-1.361,0,0]},"lin",null],[.075,{pelvis:[0,-.292,0],torso:[-.08,-.357,0],head:[.04,.292,0],cloak:[.612,0,.13],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.766,-.188,-1.095],farmR:[-1.154,0,0],handR:[-.526,-1.188,.406],uarmL:[-.974,-.021,.231],farmL:[-1.401,0,0]},"lin",null],[.1,{pelvis:[0,-.293,0],torso:[-.08,-.358,0],head:[.04,.293,0],cloak:[.613,0,.13],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.792,-.174,-1.05],farmR:[-1.418,0,0],handR:[-.6,-.883,.9],uarmL:[-.655,.002,.238],farmL:[-1.986,0,0]},"lin",null],[.1125,{pelvis:[0,-.281,0],torso:[-.069,-.344,0],head:[.034,.281,0],cloak:[.606,0,.125],thighR:[.259,0,-.122],shinR:[.409,0,0],thighL:[-.472,0,.122],shinL:[.472,0,0],rootY:-.129,footL:[.009,0,0],uarmR:[-1.769,-.074,-1.047],farmR:[-1.486,0,0],handR:[-.6,-.866,.9],uarmL:[-.504,.076,.231],farmL:[-2.251,0,0]},"lin",null],[.125,{pelvis:[0,-.248,0],torso:[-.035,-.303,0],head:[.018,.248,0],cloak:[.588,0,.11],thighR:[.287,0,-.128],shinR:[.438,0,0],thighL:[-.537,0,.128],shinL:[.537,0,0],rootY:-.155,footL:[.037,0,0],uarmR:[-1.667,.224,-.935],farmR:[-1.485,0,0],handR:[-.6,-.82,.998],uarmL:[-.589,.277,.156],farmL:[-2.384,0,0]},"lin",null],[.1375,{pelvis:[0,-.191,0],torso:[.021,-.234,0],head:[-.011,.191,0],cloak:[.556,0,.085],thighR:[.334,0,-.137],shinR:[.484,0,0],thighL:[-.647,0,.137],shinL:[.647,0,0],rootY:-.199,footL:[.084,0,0],uarmR:[-1.722,.463,-.763],farmR:[-1.531,0,0],handR:[-.6,-.92,1.126],uarmL:[-1.526,.402,-.081],farmL:[-2.527,0,0]},"lin",null],[.15,{pelvis:[0,-.112,0],torso:[.1,-.138,0],head:[-.05,.112,0],cloak:[.512,0,.05],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],rootY:-.26,footL:[.15,0,0],uarmR:[-1.599,.34,-.719],farmR:[-1.802,0,0],handR:[-.6,-1.424,1.126],uarmL:[-2.172,.319,.554],farmL:[-2.527,0,0]},"lin",null],[.1625,{pelvis:[0,-.056,0],torso:[.15,-.069,0],head:[-.075,.056,0],cloak:[.512,0,.025],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.414,.563,-.716],farmR:[-2.017,0,0],handR:[-.711,-1.285,1.032],uarmL:[-2.571,.192,.928],farmL:[-2.3,0,0]},"lin",null],[.175,{pelvis:[0,0,0],torso:[.2,0,0],head:[-.1,0,0],cloak:[.512,0,0],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.109,.855,-.686],farmR:[-2.144,0,0],handR:[-.795,-1.124,1.064],uarmL:[-2.688,.18,1.185],farmL:[-2.267,0,0]},"lin",null],[.1875,{pelvis:[0,.056,0],torso:[.25,.069,0],head:[-.125,-.056,0],cloak:[.512,0,-.025],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.8,.977,-.607],farmR:[-2.277,0,0],handR:[-.929,-1.063,1.193],uarmL:[-2.703,.201,1.411],farmL:[-2.116,0,0]},"lin",null],[.2,{pelvis:[0,.113,0],torso:[.3,.138,0],head:[-.15,-.113,0],cloak:[.512,0,-.05],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.84,.916,-.384],farmR:[-2.3,0,0],handR:[-.887,-1.277,1.301],uarmL:[-2.682,.205,1.351],farmL:[-1.928,0,0]},"lin",null],[.215,{pelvis:[0,.23,0],torso:[.358,.281,0],head:[-.179,-.23,0],cloak:[.578,0,-.102],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.476,1.662,-.191],farmR:[-2.3,0,0],handR:[-.935,-.945,1.388],uarmL:[-2.84,.053,1.455],farmL:[-1.642,0,0]},"lin",null],[.23,{pelvis:[0,.29,0],torso:[.388,.354,0],head:[-.194,-.29,0],cloak:[.611,0,-.129],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.394,1.733,-.137],farmR:[-2.3,0,0],handR:[-.911,-1.115,1.419],uarmL:[-2.831,.051,1.443],farmL:[-1.515,0,0]},"lin",null],[.245,{pelvis:[0,.312,0],torso:[.398,.381,0],head:[-.199,-.312,0],cloak:[.623,0,-.139],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[.291,1.98,-.427],farmR:[-2.3,0,0],handR:[-.905,-1.264,1.488],uarmL:[-2.812,.067,1.661],farmL:[-1.432,0,0]},"lin",null],[.26,{pelvis:[0,.315,0],torso:[.4,.385,0],head:[-.2,-.315,0],cloak:[.625,0,-.14],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.347,1.511,-.048],farmR:[-2.407,0,0],handR:[-.839,-1.463,1.579],uarmL:[-2.771,.104,1.479],farmL:[-1.392,0,0]},"lin",null],[.2825,{pelvis:[0,.341,0],torso:[.342,.417,0],head:[-.171,-.341,0],cloak:[.639,0,-.152],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.249,1.765,-.027],farmR:[-2.459,0,0],handR:[-.831,-1.7,1.6],uarmL:[-2.746,.125,1.475],farmL:[-1.205,0,0]},"lin",null],[.305,{pelvis:[0,.354,0],torso:[.313,.433,0],head:[-.156,-.354,0],cloak:[.647,0,-.158],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.018,2.023,.01],farmR:[-2.603,0,0],handR:[-.834,-1.7,1.699],uarmL:[-2.775,.089,1.518],farmL:[-.937,0,0]},"lin",null],[.3275,{pelvis:[0,.359,0],torso:[.302,.439,0],head:[-.151,-.359,0],cloak:[.65,0,-.16],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[.031,2.03,-.09],farmR:[-2.662,0,0],handR:[-.975,-1.7,1.635],uarmL:[-2.775,.097,1.499],farmL:[-.836,0,0]},"lin",null],[.35,{pelvis:[0,.36,0],torso:[.3,.44,0],head:[-.15,-.36,0],cloak:[.65,0,-.16],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[.159,1.943,-.234],farmR:[-2.687,0,0],handR:[-1.097,-1.751,1.735],uarmL:[-2.775,.128,1.508],farmL:[-.79,0,0]},"lin",null]],HIGH_L_LOW_R:[[0,{pelvis:[0,.27,0],torso:[-.05,.33,0],head:[.025,-.27,0],cloak:[.6,0,-.12],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.536,.418,.026],farmR:[-1.163,0,0],handR:[2.471,-1.429,.773],uarmL:[-1.572,-.724,-.224],farmL:[-.1,0,0]},null,null],[.025,{pelvis:[0,.283,0],torso:[-.067,.346,0],head:[.034,-.283,0],cloak:[.607,0,-.126],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.572,.408,.037],farmR:[-1.17,0,0],handR:[2.47,-1.432,.694],uarmL:[-1.59,-.757,-.222],farmL:[-.1,0,0]},"lin",null],[.05,{pelvis:[0,.29,0],torso:[-.076,.354,0],head:[.038,-.29,0],cloak:[.611,0,-.129],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.602,.404,.036],farmR:[-1.166,0,0],handR:[2.464,-1.432,.645],uarmL:[-1.599,-.777,-.22],farmL:[-.109,0,0]},"lin",null],[.075,{pelvis:[0,.292,0],torso:[-.08,.357,0],head:[.04,-.292,0],cloak:[.612,0,-.13],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.612,.399,.036],farmR:[-1.16,0,0],handR:[2.462,-1.432,.635],uarmL:[-1.606,-.783,-.221],farmL:[-.105,0,0]},"lin",null],[.1,{pelvis:[0,.293,0],torso:[-.08,.358,0],head:[.04,-.293,0],cloak:[.613,0,-.13],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.467,.417,-.01],farmR:[-1.723,0,0],handR:[1.926,-.412,.9],uarmL:[-1.653,-.895,-.205],farmL:[-.103,0,0]},"lin",null],[.1125,{pelvis:[0,.281,0],torso:[-.069,.344,0],head:[.034,-.281,0],cloak:[.606,0,-.125],thighR:[.259,0,-.122],shinR:[.409,0,0],thighL:[-.472,0,.122],shinL:[.472,0,0],rootY:-.129,footL:[.009,0,0],uarmR:[-1.397,.421,-.048],farmR:[-1.779,0,0],handR:[1.758,-.156,.9],uarmL:[-1.635,-.906,-.204],farmL:[-.1,0,0]},"lin",null],[.125,{pelvis:[0,.248,0],torso:[-.035,.303,0],head:[.018,-.248,0],cloak:[.588,0,-.11],thighR:[.287,0,-.128],shinR:[.438,0,0],thighL:[-.537,0,.128],shinL:[.537,0,0],rootY:-.155,footL:[.037,0,0],uarmR:[-1.377,.36,-.126],farmR:[-1.914,0,0],handR:[1.844,-.012,.885],uarmL:[-1.64,-1.024,-.187],farmL:[-.1,0,0]},"lin",null],[.1375,{pelvis:[0,.191,0],torso:[.021,.234,0],head:[-.011,-.191,0],cloak:[.556,0,-.085],thighR:[.334,0,-.137],shinR:[.484,0,0],thighL:[-.647,0,.137],shinL:[.647,0,0],rootY:-.199,footL:[.084,0,0],uarmR:[-1.497,.329,-.299],farmR:[-2.052,0,0],handR:[2.321,.023,.9],uarmL:[-1.654,-1.26,-.144],farmL:[-.161,0,0]},"lin",null],[.15,{pelvis:[0,.112,0],torso:[.1,.138,0],head:[-.05,-.112,0],cloak:[.512,0,-.05],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],rootY:-.26,footL:[.15,0,0],uarmR:[-1.759,.605,-.569],farmR:[-1.661,0,0],handR:[2.862,.286,.529],uarmL:[-1.111,-1.571,-.055],farmL:[-1.46,0,0]},"lin",null],[.1625,{pelvis:[0,.056,0],torso:[.15,.069,0],head:[-.075,-.056,0],cloak:[.512,0,-.025],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.754,.73,-.793],farmR:[-1.624,0,0],handR:[3.172,.388,.42],uarmL:[-.938,-1.6,.565],farmL:[-1.904,0,0]},"lin",null],[.175,{pelvis:[0,0,0],torso:[.2,0,0],head:[-.1,0,0],cloak:[.512,0,0],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.764,.73,-.979],farmR:[-1.569,0,0],handR:[3.4,.401,.266],uarmL:[-1.013,-1.6,1.052],farmL:[-2.083,0,0]},"lin",null],[.1875,{pelvis:[0,-.056,0],torso:[.25,-.069,0],head:[-.125,.056,0],cloak:[.512,0,.025],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.686,.733,-1.113],farmR:[-1.498,0,0],handR:[3.5,.427,.091],uarmL:[-1.025,-1.6,1.285],farmL:[-2.265,0,0]},"lin",null],[.2,{pelvis:[0,-.113,0],torso:[.3,-.138,0],head:[-.15,.113,0],cloak:[.512,0,.05],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.593,.711,-1.246],farmR:[-1.432,0,0],handR:[3.55,.32,.065],uarmL:[-1.026,-1.6,1.365],farmL:[-2.3,0,0]},"lin",null],[.215,{pelvis:[0,-.23,0],torso:[.358,-.281,0],head:[-.179,.23,0],cloak:[.578,0,.102],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.99,1.483,-.402],farmR:[-1.161,0,0],handR:[3.604,1.34,.123],uarmL:[-1.849,-1.6,1.778],farmL:[-2.3,0,0]},"lin",null],[.23,{pelvis:[0,-.29,0],torso:[.388,-.354,0],head:[-.194,.29,0],cloak:[.611,0,.129],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.902,1.427,-.181],farmR:[-1.119,0,0],handR:[3.658,1.566,-.031],uarmL:[-2.184,-1.6,2],farmL:[-2.326,0,0]},"lin",null],[.245,{pelvis:[0,-.312,0],torso:[.398,-.381,0],head:[-.199,.312,0],cloak:[.623,0,.139],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.923,1.357,-.234],farmR:[-1.087,0,0],handR:[3.71,1.493,-.069],uarmL:[-2.312,-1.6,2],farmL:[-2.466,0,0]},"lin",null],[.26,{pelvis:[0,-.315,0],torso:[.4,-.385,0],head:[-.2,.315,0],cloak:[.625,0,.14],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.929,1.354,-.239],farmR:[-.994,0,0],handR:[3.71,1.348,.059],uarmL:[-2.367,-1.6,2],farmL:[-2.466,0,0]},"lin",null],[.2825,{pelvis:[0,-.341,0],torso:[.342,-.417,0],head:[-.171,.341,0],cloak:[.639,0,.152],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.937,1.096,.214],farmR:[-1.057,0,0],handR:[3.8,1.7,.109],uarmL:[-3,-1.6,2],farmL:[-2.489,0,0]},"lin",null],[.305,{pelvis:[0,-.354,0],torso:[.313,-.433,0],head:[-.156,.354,0],cloak:[.647,0,.158],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.785,.977,.282],farmR:[-1.276,0,0],handR:[3.907,1.7,.197],uarmL:[-3,-1.6,2.062],farmL:[-2.411,0,0]},"lin",null],[.3275,{pelvis:[0,-.359,0],torso:[.302,-.439,0],head:[-.151,.359,0],cloak:[.65,0,.16],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.677,.868,.3],farmR:[-1.457,0,0],handR:[3.879,1.7,.281],uarmL:[-3,-1.6,2.056],farmL:[-2.517,0,0]},"lin",null],[.35,{pelvis:[0,-.36,0],torso:[.3,-.44,0],head:[-.15,.36,0],cloak:[.65,0,.16],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.831,.978,.34],farmR:[-1.375,0,0],handR:[3.994,1.7,.345],uarmL:[-3,-1.646,.321],farmL:[-2.386,0,0]},"lin",null]],LOW_R_HIGH_L:[[0,{pelvis:[0,-.248,0],torso:[.3,-.303,0],head:[-.15,.248,0],cloak:[.588,0,.11],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.232,.593,-2.4],farmR:[-2.22,0,0],handR:[-.545,.456,-.469],uarmL:[-.976,-.124,.747],farmL:[-1.951,0,0]},null,null],[.025,{pelvis:[0,-.261,0],torso:[.312,-.318,0],head:[-.156,.261,0],cloak:[.595,0,.116],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.201,.555,-2.398],farmR:[-2.241,0,0],handR:[-.545,.515,-.467],uarmL:[-1,-.152,.757],farmL:[-1.928,0,0]},"lin",null],[.05,{pelvis:[0,-.267,0],torso:[.318,-.327,0],head:[-.159,.267,0],cloak:[.598,0,.119],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.194,.516,-2.383],farmR:[-2.257,0,0],handR:[-.545,.562,-.468],uarmL:[-1.009,-.179,.772],farmL:[-1.911,0,0]},"lin",null],[.075,{pelvis:[0,-.27,0],torso:[.32,-.33,0],head:[-.16,.27,0],cloak:[.6,0,.12],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.213,.485,-2.338],farmR:[-2.264,0,0],handR:[-.543,.629,-.405],uarmL:[-.993,-.201,.799],farmL:[-1.889,0,0]},"lin",null],[.1,{pelvis:[0,-.27,0],torso:[.32,-.33,0],head:[-.16,.27,0],cloak:[.6,0,.12],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.489,.36,-2.347],farmR:[-2.236,0,0],handR:[-.6,.426,-.891],uarmL:[-.936,-.182,.811],farmL:[-2.021,0,0]},"lin",null],[.1125,{pelvis:[0,-.259,0],torso:[.313,-.316,0],head:[-.156,.259,0],cloak:[.594,0,.115],thighR:[-.819,0,-.216],shinR:[1.441,0,0],thighL:[.184,0,.291],shinL:[1.081,0,0],rootY:-.485,footL:[.009,0,0],uarmR:[-.613,.417,-2.371],farmR:[-2.149,0,0],handR:[-.6,.412,-.9],uarmL:[-.81,-.116,.827],farmL:[-2.134,0,0]},"lin",null],[.125,{pelvis:[0,-.225,0],torso:[.29,-.275,0],head:[-.145,.225,0],cloak:[.575,0,.1],thighR:[-.575,0,-.203],shinR:[1.262,0,0],thighL:[-.013,0,.263],shinL:[1.025,0,0],rootY:-.44,footL:[.037,0,0],uarmR:[-.838,.576,-2.4],farmR:[-2.008,0,0],handR:[-.6,.436,-.859],uarmL:[-.512,-.003,.863],farmL:[-2.3,0,0]},"lin",null],[.1375,{pelvis:[0,-.169,0],torso:[.253,-.206,0],head:[-.126,.169,0],cloak:[.544,0,.075],thighR:[-.169,0,-.181],shinR:[.966,0,0],thighL:[-.341,0,.216],shinL:[.931,0,0],rootY:-.365,footL:[.084,0,0],uarmR:[-1.242,.687,-2.4],farmR:[-1.907,0,0],handR:[-.6,.637,-.692],uarmL:[.778,.112,.324],farmL:[-2.369,0,0]},"lin",null],[.15,{pelvis:[0,-.09,0],torso:[.2,-.11,0],head:[-.1,.09,0],cloak:[.5,0,.04],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],rootY:-.26,footL:[.15,0,0],uarmR:[-1.185,.795,-2.523],farmR:[-2.07,0,0],handR:[-.6,1.059,-.583],uarmL:[1,1.6,.548],farmL:[-2.3,0,0]},"lin",null],[.1625,{pelvis:[0,-.034,0],torso:[.15,-.041,0],head:[-.075,.034,0],cloak:[.506,0,.015],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.237,1.042,-2.511],farmR:[-2.294,0,0],handR:[-.6,.927,-.371],uarmL:[1.077,1.674,.904],farmL:[-1.74,0,0]},"lin",null],[.175,{pelvis:[0,.023,0],torso:[.1,.027,0],head:[-.05,-.023,0],cloak:[.512,0,-.01],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.231,1.109,-2.643],farmR:[-2.3,0,0],handR:[-.693,.95,-.442],uarmL:[1.135,1.715,.871],farmL:[-1.465,0,0]},"lin",null],[.1875,{pelvis:[0,.079,0],torso:[.05,.096,0],head:[-.025,-.079,0],cloak:[.519,0,-.035],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.307,1.354,-2.733],farmR:[-2.368,0,0],handR:[-.6,.94,-.335],uarmL:[1.051,1.743,.897],farmL:[-1.016,0,0]},"lin",null],[.2,{pelvis:[0,.135,0],torso:[0,.165,0],head:[0,-.135,0],cloak:[.525,0,-.06],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-1.308,1.49,-2.814],farmR:[-2.43,0,0],handR:[-.6,.969,-.294],uarmL:[1.054,1.871,.936],farmL:[-.923,0,0]},"lin",null],[.215,{pelvis:[0,.239,0],torso:[-.087,.292,0],head:[.043,-.239,0],cloak:[.583,0,-.106],thighR:[.313,0,-.133],shinR:[.463,0,0],thighL:[-.598,0,.133],shinL:[.598,0,0],footL:[.063,0,0],rootY:-.179,uarmR:[-.164,.457,-2.035],farmR:[-2.3,0,0],handR:[1.817,-.519,-.899],uarmL:[-1.008,-1.358,.494],farmL:[-.747,0,0]},"lin",null],[.23,{pelvis:[0,.292,0],torso:[-.131,.358,0],head:[.066,-.292,0],cloak:[.613,0,-.13],thighR:[.269,0,-.124],shinR:[.419,0,0],thighL:[-.494,0,.124],shinL:[.494,0,0],footL:[.019,0,0],rootY:-.138,uarmR:[-.135,.647,-1.956],farmR:[-2.256,0,0],handR:[1.577,-.577,-.855],uarmL:[-1.161,-1.313,.522],farmL:[-.409,0,0]},"lin",null],[.245,{pelvis:[0,.312,0],torso:[-.148,.382,0],head:[.074,-.312,0],cloak:[.623,0,-.139],thighR:[.252,0,-.12],shinR:[.402,0,0],thighL:[-.455,0,.12],shinL:[.455,0,0],footL:[.002,0,0],rootY:-.122,uarmR:[-.199,.654,-1.971],farmR:[-2.027,0,0],handR:[1.381,-.555,-.779],uarmL:[-1.309,-1.176,.563],farmL:[-.206,0,0]},"lin",null],[.26,{pelvis:[0,.315,0],torso:[-.15,.385,0],head:[.075,-.315,0],cloak:[.625,0,-.14],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],footL:[0,0,0],rootY:-.12,uarmR:[-.173,.692,-1.961],farmR:[-1.972,0,0],handR:[1.255,-.681,-.72],uarmL:[-1.369,-1.148,.575],farmL:[-.1,0,0]},"lin",null],[.2825,{pelvis:[0,.328,0],torso:[-.121,.401,0],head:[.061,-.328,0],cloak:[.632,0,-.146],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-.083,.808,-1.986],farmR:[-1.993,0,0],handR:[.995,-.754,-.702],uarmL:[-1.388,-1.047,.594],farmL:[-.1,0,0]},"lin",null],[.305,{pelvis:[0,.335,0],torso:[-.106,.409,0],head:[.053,-.335,0],cloak:[.636,0,-.149],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[0,.925,-2.033],farmR:[-1.935,0,0],handR:[.821,-.852,-.628],uarmL:[-1.435,-.953,.606],farmL:[-.1,0,0]},"lin",null],[.3275,{pelvis:[0,.337,0],torso:[-.101,.412,0],head:[.05,-.337,0],cloak:[.637,0,-.15],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[.065,.996,-2.061],farmR:[-1.909,0,0],handR:[.798,-.832,-.621],uarmL:[-1.479,-.908,.609],farmL:[-.1,0,0]},"lin",null],[.35,{pelvis:[0,.338,0],torso:[-.1,.413,0],head:[.05,-.338,0],cloak:[.637,0,-.15],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[.056,.998,-2.067],farmR:[-1.899,0,0],handR:[.798,-.824,-.632],uarmL:[-1.485,-.897,.61],farmL:[-.1,0,0]},"lin",null]],LOW_L_HIGH_R:[[0,{pelvis:[0,.248,0],torso:[.3,.303,0],head:[-.15,-.248,0],cloak:[.588,0,-.11],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.161,.906,-.673],farmR:[-1.263,0,0],handR:[2.783,-1.523,-.25],uarmL:[-.125,-1.406,2],farmL:[-1.496,0,0]},null,null],[.025,{pelvis:[0,.261,0],torso:[.312,.318,0],head:[-.156,-.261,0],cloak:[.595,0,-.116],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.168,.936,-.671],farmR:[-1.181,0,0],handR:[2.767,-1.507,-.237],uarmL:[-.099,-1.386,1.999],farmL:[-1.546,0,0]},"lin",null],[.05,{pelvis:[0,.267,0],torso:[.318,.327,0],head:[-.159,-.267,0],cloak:[.598,0,-.119],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.163,.951,-.679],farmR:[-1.151,0,0],handR:[2.748,-1.507,-.233],uarmL:[-.089,-1.377,1.99],farmL:[-1.575,0,0]},"lin",null],[.075,{pelvis:[0,.27,0],torso:[.32,.33,0],head:[-.16,-.27,0],cloak:[.6,0,-.12],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.161,.957,-.679],farmR:[-1.134,0,0],handR:[2.744,-1.507,-.23],uarmL:[-.082,-1.371,1.985],farmL:[-1.589,0,0]},"lin",null],[.1,{pelvis:[0,.27,0],torso:[.32,.33,0],head:[-.16,-.27,0],cloak:[.6,0,-.12],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.14,.96,-.675],farmR:[-1.007,0,0],handR:[2.687,-1.693,-.477],uarmL:[-.063,-1.363,1.97],farmL:[-1.591,0,0]},"lin",null],[.1125,{pelvis:[0,.259,0],torso:[.313,.316,0],head:[-.156,-.259,0],cloak:[.594,0,-.115],thighR:[-.819,0,-.216],shinR:[1.441,0,0],thighL:[.184,0,.291],shinL:[1.081,0,0],rootY:-.485,footL:[.009,0,0],uarmR:[-1.03,.91,-.643],farmR:[-1.206,0,0],handR:[2.647,-1.7,-.587],uarmL:[-.146,-1.419,1.929],farmL:[-1.512,0,0]},"lin",null],[.125,{pelvis:[0,.225,0],torso:[.29,.275,0],head:[-.145,-.225,0],cloak:[.575,0,-.1],thighR:[-.575,0,-.203],shinR:[1.262,0,0],thighL:[-.013,0,.263],shinL:[1.025,0,0],rootY:-.44,footL:[.037,0,0],uarmR:[-.845,.753,-.546],farmR:[-1.521,0,0],handR:[2.584,-1.679,-.726],uarmL:[-.335,-1.545,1.809],farmL:[-1.279,0,0]},"lin",null],[.1375,{pelvis:[0,.169,0],torso:[.253,.206,0],head:[-.126,-.169,0],cloak:[.544,0,-.075],thighR:[-.169,0,-.181],shinR:[.966,0,0],thighL:[-.341,0,.216],shinL:[.931,0,0],rootY:-.365,footL:[.084,0,0],uarmR:[-.636,.555,-.432],farmR:[-1.772,0,0],handR:[2.417,-1.669,-.79],uarmL:[-.602,-1.6,1.617],farmL:[-1.065,0,0]},"lin",null],[.15,{pelvis:[0,.09,0],torso:[.2,.11,0],head:[-.1,-.09,0],cloak:[.5,0,-.04],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],rootY:-.26,footL:[.15,0,0],uarmR:[-.605,.641,-.492],farmR:[-1.723,0,0],handR:[2,-1.452,-.701],uarmL:[-.483,-1.6,1.239],farmL:[-1.469,0,0]},"lin",null],[.1625,{pelvis:[0,.034,0],torso:[.15,.041,0],head:[-.075,-.034,0],cloak:[.506,0,-.015],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.459,.751,-.461],farmR:[-2.018,0,0],handR:[1.685,-1.455,-.9],uarmL:[-.458,-1.6,.742],farmL:[-1.705,0,0]},"lin",null],[.175,{pelvis:[0,-.023,0],torso:[.1,-.027,0],head:[-.05,.023,0],cloak:[.512,0,.01],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.301,.915,-.378],farmR:[-2.134,0,0],handR:[1.365,-1.337,-.9],uarmL:[-.177,-1.6,-.02],farmL:[-1.846,0,0]},"lin",null],[.1875,{pelvis:[0,-.079,0],torso:[.05,-.096,0],head:[-.025,.079,0],cloak:[.519,0,.035],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.404,1.003,-.143],farmR:[-2.051,0,0],handR:[1.34,-.911,-.9],uarmL:[.215,-1.6,-.295],farmL:[-2.136,0,0]},"lin",null],[.2,{pelvis:[0,-.135,0],torso:[0,-.165,0],head:[0,.135,0],cloak:[.525,0,.06],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.608,.963,-.079],farmR:[-1.854,0,0],handR:[1.26,-.746,-.88],uarmL:[.52,-1.543,-.171],farmL:[-2.3,0,0]},"lin",null],[.215,{pelvis:[0,-.239,0],torso:[-.087,-.292,0],head:[.043,.239,0],cloak:[.583,0,.106],thighR:[.313,0,-.133],shinR:[.463,0,0],thighL:[-.598,0,.133],shinL:[.598,0,0],footL:[.063,0,0],rootY:-.179,uarmR:[-.876,1.122,.3],farmR:[-1.355,0,0],handR:[.332,-.469,-.9],uarmL:[1,-.54,.679],farmL:[-2.3,0,0]},"lin",null],[.23,{pelvis:[0,-.292,0],torso:[-.131,-.358,0],head:[.066,.292,0],cloak:[.613,0,.13],thighR:[.269,0,-.124],shinR:[.419,0,0],thighL:[-.494,0,.124],shinL:[.494,0,0],footL:[.019,0,0],rootY:-.138,uarmR:[-1.179,1.004,.3],farmR:[-.913,0,0],handR:[-.148,-.653,-.915],uarmL:[.767,-.691,1.16],farmL:[-2.001,0,0]},"lin",null],[.245,{pelvis:[0,-.312,0],torso:[-.148,-.382,0],head:[.074,.312,0],cloak:[.623,0,.139],thighR:[.252,0,-.12],shinR:[.402,0,0],thighL:[-.455,0,.12],shinL:[.455,0,0],footL:[.002,0,0],rootY:-.122,uarmR:[-1.318,.957,.299],farmR:[-.757,0,0],handR:[-.233,-.657,-.798],uarmL:[.643,-.793,1.347],farmL:[-1.814,0,0]},"lin",null],[.26,{pelvis:[0,-.315,0],torso:[-.15,-.385,0],head:[.075,.315,0],cloak:[.625,0,.14],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],footL:[0,0,0],rootY:-.12,uarmR:[-1.34,.936,.285],farmR:[-.723,0,0],handR:[-.266,-.699,-.875],uarmL:[.604,-.83,1.351],farmL:[-1.752,0,0]},"lin",null],[.2825,{pelvis:[0,-.328,0],torso:[-.121,-.401,0],head:[.061,.328,0],cloak:[.632,0,.146],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.457,.945,.3],farmR:[-.6,0,0],handR:[-.6,-.739,-.9],uarmL:[.474,-.936,1.463],farmL:[-1.52,0,0]},"lin",null],[.305,{pelvis:[0,-.335,0],torso:[-.106,-.409,0],head:[.053,.335,0],cloak:[.636,0,.149],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.532,.915,.3],farmR:[-.531,0,0],handR:[-.731,-.745,-.9],uarmL:[.377,-1.04,1.537],farmL:[-1.319,0,0]},"lin",null],[.3275,{pelvis:[0,-.337,0],torso:[-.101,-.412,0],head:[.05,.337,0],cloak:[.637,0,.15],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.556,.915,.219],farmR:[-.531,0,0],handR:[-.731,-.745,-.871],uarmL:[.342,-1.04,1.593],farmL:[-1.261,0,0]},"lin",null],[.35,{pelvis:[0,-.338,0],torso:[-.1,-.413,0],head:[.05,.338,0],cloak:[.637,0,.15],thighR:[.25,0,-.12],shinR:[.4,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],rootY:-.12,uarmR:[-1.556,.914,.217],farmR:[-.542,0,0],handR:[-.731,-.745,-.885],uarmL:[.328,-1.043,1.599],farmL:[-1.243,0,0]},"lin",null]],LOW_SWEEP:[[0,{pelvis:[0,-.315,0],torso:[.4,-.385,0],head:[-.2,.315,0],cloak:[.625,0,.14],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.041,.268,-2.342],farmR:[-2.214,0,0],handR:[-.548,.981,-.094],uarmL:[.285,-.144,-.399],farmL:[-2.3,0,0]},null,null],[.025,{pelvis:[0,-.328,0],torso:[.412,-.401,0],head:[-.206,.328,0],cloak:[.632,0,.146],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.986,.286,-2.376],farmR:[-2.21,0,0],handR:[-.544,.959,-.214],uarmL:[.267,-.188,-.4],farmL:[-2.352,0,0]},"lin",null],[.05,{pelvis:[0,-.335,0],torso:[.417,-.409,0],head:[-.209,.335,0],cloak:[.636,0,.149],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.96,.286,-2.382],farmR:[-2.215,0,0],handR:[-.544,.977,-.223],uarmL:[.237,-.219,-.4],farmL:[-2.352,0,0]},"lin",null],[.075,{pelvis:[0,-.337,0],torso:[.42,-.412,0],head:[-.21,.337,0],cloak:[.637,0,.15],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.914,.317,-2.373],farmR:[-2.234,0,0],handR:[-.557,.933,-.278],uarmL:[.247,-.263,-.4],farmL:[-2.442,0,0]},"lin",null],[.1,{pelvis:[0,-.338,0],torso:[.42,-.413,0],head:[-.21,.338,0],cloak:[.637,0,.15],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.138,.21,-2.4],farmR:[-2.203,0,0],handR:[-.6,.768,-.63],uarmL:[.362,-.313,-.4],farmL:[-2.442,0,0]},"lin",null],[.1125,{pelvis:[0,-.325,0],torso:[.42,-.397,0],head:[-.21,.325,0],cloak:[.63,0,.144],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.167,.278,-2.4],farmR:[-2.182,0,0],handR:[-.6,.74,-.62],uarmL:[.547,-.311,-.346],farmL:[-2.568,0,0]},"lin",null],[.125,{pelvis:[0,-.287,0],torso:[.42,-.351,0],head:[-.21,.287,0],cloak:[.609,0,.128],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.23,.43,-2.464],farmR:[-2.11,0,0],handR:[-.6,.719,-.627],uarmL:[.885,-.323,-.234],farmL:[-2.558,0,0]},"lin",null],[.1375,{pelvis:[0,-.224,0],torso:[.42,-.273,0],head:[-.21,.224,0],cloak:[.574,0,.099],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.205,.595,-2.523],farmR:[-2.17,0,0],handR:[-.642,.733,-.626],uarmL:[1,-.786,-.385],farmL:[-2.567,0,0]},"lin",null],[.15,{pelvis:[0,-.135,0],torso:[.42,-.165,0],head:[-.21,.135,0],cloak:[.525,0,.06],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.33,.69,-2.484],farmR:[-2.3,0,0],handR:[-.703,.79,-.428],uarmL:[.691,-1.6,-.4],farmL:[-2.293,0,0]},"lin",null],[.1625,{pelvis:[0,-.073,0],torso:[.42,-.089,0],head:[-.21,.073,0],cloak:[.522,0,.033],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.379,.737,-2.4],farmR:[-2.436,0,0],handR:[-.756,.756,-.288],uarmL:[.411,-1.613,-.456],farmL:[-2.097,0,0]},"lin",null],[.175,{pelvis:[0,-.011,0],torso:[.42,-.014,0],head:[-.21,.011,0],cloak:[.519,0,.005],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.402,.772,-2.4],farmR:[-2.469,0,0],handR:[-.876,.753,-.273],uarmL:[.127,-1.72,-.4],farmL:[-1.898,0,0]},"lin",null],[.1875,{pelvis:[0,.051,0],torso:[.42,.062,0],head:[-.21,-.051,0],cloak:[.516,0,-.023],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-1.506,.917,-2.4],farmR:[-2.3,0,0],handR:[-.979,.691,-.301],uarmL:[-.007,-1.836,-.4],farmL:[-1.67,0,0]},"lin",null],[.2,{pelvis:[0,.112,0],torso:[.42,.137,0],head:[-.21,-.112,0],cloak:[.512,0,-.05],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[.328,.995,-.337],farmR:[-2.145,0,0],handR:[.294,-1.613,-.129],uarmL:[.294,-1.6,-.171],farmL:[-1.867,0,0]},"lin",null],[.2175,{pelvis:[0,.256,0],torso:[.408,.312,0],head:[-.204,-.256,0],cloak:[.592,0,-.114],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[.859,1.379,-.441],farmR:[-2.3,0,0],handR:[.711,-1.676,.121],uarmL:[-.409,-1.6,-.377],farmL:[-1.114,0,0]},"lin",null],[.235,{pelvis:[0,.329,0],torso:[.403,.402,0],head:[-.201,-.329,0],cloak:[.633,0,-.146],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[.737,1.289,-.555],farmR:[-2.233,0,0],handR:[1.128,-1.712,.081],uarmL:[-.71,-1.491,-.38],farmL:[-.685,0,0]},"lin",null],[.2525,{pelvis:[0,.356,0],torso:[.4,.435,0],head:[-.2,-.356,0],cloak:[.648,0,-.158],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[.333,.858,-.649],farmR:[-2.104,0,0],handR:[1.609,-1.836,-.01],uarmL:[-.889,-1.377,-.353],farmL:[-.484,0,0]},"lin",null],[.27,{pelvis:[0,.36,0],torso:[.4,.44,0],head:[-.2,-.36,0],cloak:[.65,0,-.16],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.181,.185,-.218],farmR:[-1.921,0,0],handR:[2.326,-1.836,-.408],uarmL:[-1.086,-1.306,-.349],farmL:[-.347,0,0]},"lin",null],[.2925,{pelvis:[0,.386,0],torso:[.371,.472,0],head:[-.186,-.386,0],cloak:[.664,0,-.172],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.313,.165,-.179],farmR:[-1.927,0,0],handR:[2.664,-1.836,-.591],uarmL:[-1.274,-1.233,-.342],farmL:[-.175,0,0]},"lin",null],[.315,{pelvis:[0,.399,0],torso:[.356,.488,0],head:[-.178,-.399,0],cloak:[.672,0,-.178],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.393,.239,-.179],farmR:[-1.894,0,0],handR:[2.75,-1.848,-.656],uarmL:[-1.348,-1.169,-.336],farmL:[-.1,0,0]},"lin",null],[.3375,{pelvis:[0,.404,0],torso:[.351,.494,0],head:[-.175,-.404,0],cloak:[.675,0,-.18],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.437,.27,-.182],farmR:[-1.873,0,0],handR:[2.779,-1.848,-.666],uarmL:[-1.363,-1.142,-.328],farmL:[-.1,0,0]},"lin",null],[.36,{pelvis:[0,.405,0],torso:[.35,.495,0],head:[-.175,-.405,0],cloak:[.675,0,-.18],thighR:[-.9,0,-.22],shinR:[1.5,0,0],thighL:[.25,0,.3],shinL:[1.1,0,0],rootY:-.5,uarmR:[-.449,.282,-.182],farmR:[-1.86,0,0],handR:[2.779,-1.848,-.667],uarmL:[-1.364,-1.131,-.335],farmL:[-.1,0,0]},"lin",null]],SPIN:[[0,{pelvis:[0,-.068,0],torso:[.08,-.083,0],head:[-.04,.068,0],cloak:[.487,0,.03],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-.639,.099,-.113],farmR:[-2.028,0,0],handR:[2.696,1.7,.9],uarmL:[-.182,-1.156,.141],farmL:[-2.142,0,0]},null,null]],SPIN_REV:[[0,{pelvis:[0,.068,0],torso:[.08,.083,0],head:[-.04,-.068,0],cloak:[.487,0,-.03],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[-2.441,.046,-1.468],farmR:[-.863,0,0],handR:[2.218,.163,-.001],uarmL:[-1.521,.07,1.516],farmL:[-2.3,0,0]},null,null]],RELEASE:[[.06,{pelvis:[0,-.248,0],torso:[.25,-.303,0],head:[-.125,.248,0],cloak:[.588,0,.11],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[1,-1.199,.3],farmR:[-2.3,0,0],handR:[1.893,1.204,-.463],uarmL:[.466,-1.159,-.24],farmL:[-2.057,0,0]},null,null],[.075,{pelvis:[0,-.23,0],torso:[.234,-.281,0],head:[-.117,.23,0],cloak:[.578,0,.102],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[1,-1.075,.3],farmR:[-2.425,0,0],handR:[1.995,1.259,-.411],uarmL:[.456,-1.206,-.302],farmL:[-2.108,0,0]},"lin",null],[.09,{pelvis:[0,-.191,0],torso:[.2,-.234,0],head:[-.1,.191,0],cloak:[.556,0,.085],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[1,-.92,.441],farmR:[-2.408,0,0],handR:[2.042,1.511,-.54],uarmL:[.512,-1.21,-.282],farmL:[-2.086,0,0]},"lin",null],[.105,{pelvis:[0,-.153,0],torso:[.166,-.186,0],head:[-.083,.153,0],cloak:[.535,0,.068],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[.932,-.777,.482],farmR:[-2.457,0,0],handR:[2.061,1.66,-.496],uarmL:[.477,-1.241,-.343],farmL:[-2.032,0,0]},"lin",null],[.12,{pelvis:[0,-.135,0],torso:[.15,-.165,0],head:[-.075,.135,0],cloak:[.525,0,.06],thighR:[.4,0,-.15],shinR:[.55,0,0],thighL:[-.8,0,.15],shinL:[.8,0,0],footL:[.15,0,0],rootY:-.26,uarmR:[.874,-.742,.529],farmR:[-2.594,0,0],handR:[2.005,1.7,-.309],uarmL:[.393,-1.313,-.4],farmL:[-2.06,0,0]},"lin",null]],HEAVY_FOLLOW:[[.06,{pelvis:[0,.27,0],torso:[.35,.33,0],head:[-.175,-.27,0],cloak:[.6,0,-.12],thighR:[-.65,0,-.38],shinR:[.95,0,0],thighL:[.45,0,.38],shinL:[.85,0,0],footR:[-.25,0,0],rootY:-.42,uarmR:[-1.458,1.734,-.206],farmR:[-2.3,0,0],handR:[-.493,-1.527,.864],uarmL:[-1.7,-1.595,.858],farmL:[-.585,0,0]},null,null],[.09,{pelvis:[0,.335,0],torso:[.35,.409,0],head:[-.175,-.335,0],cloak:[.636,0,-.149],thighR:[-.65,0,-.38],shinR:[.95,0,0],thighL:[.45,0,.38],shinL:[.85,0,0],footR:[-.25,0,0],rootY:-.42,uarmR:[-1.56,2.053,-.243],farmR:[-2.393,0,0],handR:[-.6,-1.474,.597],uarmL:[-1.795,-1.527,.775],farmL:[-.284,0,0]},"lin",null],[.12,{pelvis:[0,.368,0],torso:[.35,.45,0],head:[-.175,-.368,0],cloak:[.655,0,-.164],thighR:[-.65,0,-.38],shinR:[.95,0,0],thighL:[.45,0,.38],shinL:[.85,0,0],footR:[-.25,0,0],rootY:-.42,uarmR:[-1.719,2.153,-.052],farmR:[-2.432,0,0],handR:[-.6,-1.681,.374],uarmL:[-1.878,-1.403,.675],farmL:[-.133,0,0]},"lin",null],[.15,{pelvis:[0,.381,0],torso:[.35,.465,0],head:[-.175,-.381,0],cloak:[.662,0,-.169],thighR:[-.65,0,-.38],shinR:[.95,0,0],thighL:[.45,0,.38],shinL:[.85,0,0],footR:[-.25,0,0],rootY:-.42,uarmR:[-1.879,2.184,.157],farmR:[-2.521,0,0],handR:[-.71,-1.642,.471],uarmL:[-1.792,-1.353,.671],farmL:[-.1,0,0]},"lin",null],[.18,{pelvis:[0,.383,0],torso:[.35,.468,0],head:[-.175,-.383,0],cloak:[.662,0,-.17],thighR:[-.65,0,-.38],shinR:[.95,0,0],thighL:[.45,0,.38],shinL:[.85,0,0],footR:[-.25,0,0],rootY:-.42,uarmR:[-1.92,2.212,.2],farmR:[-2.521,0,0],handR:[-.71,-1.639,.488],uarmL:[-1.777,-1.346,.665],farmL:[-.1,0,0]},"lin",null]]};var Rr=["pelvis","torso","head","cloak","uarmR","uarmL","farmR","farmL","handR","handL","thighR","thighL","shinR","shinL","footR","footL"],Qa={uarmR:"YZX",uarmL:"YZX",torso:"YXZ",pelvis:"YXZ",handR:"YZX",handL:"YZX"},A0=["rootY","rootPitch","rootYaw","rootRoll"],Dn={lin:i=>i,io:i=>i*i*(3-2*i),out:i=>1-Math.pow(1-i,3),in:i=>i*i};function Ae(i,t,e,n={}){for(let s of Rr){let r=i[s],a=t[s];if(!r&&!a){delete n[s];continue}let o=r||R0,l=a||R0,c=n[s]||(n[s]=[0,0,0]);c[0]=o[0]+(l[0]-o[0])*e,c[1]=o[1]+(l[1]-o[1])*e,c[2]=o[2]+(l[2]-o[2])*e}for(let s of A0)n[s]=(i[s]||0)+((t[s]||0)-(i[s]||0))*e;return n}var R0=[0,0,0];function to(i,t,e={}){if(t<=i[0][0])return Ae(i[0][1],i[0][1],0,e);for(let s=1;s<i.length;s++)if(t<=i[s][0]){let[r,a]=i[s-1],[o,l,c]=i[s],h=(t-r)/(o-r||1);return Ae(a,l,(Dn[c]||Dn.io)(h),e)}let n=i[i.length-1][1];return Ae(n,n,0,e)}function Fs(i,t,e){for(let n of Rr){let s=t[n];if(!s){i[n]&&(i[n][0]*=1-e,i[n][1]*=1-e,i[n][2]*=1-e);continue}let r=i[n]||(i[n]=[s[0],s[1],s[2]]);r[0]+=(s[0]-r[0])*e,r[1]+=(s[1]-r[1])*e,r[2]+=(s[2]-r[2])*e}for(let n of A0)i[n]=(i[n]||0)+((t[n]||0)-(i[n]||0))*e;return i}var Fx=i=>i,wt={idle:Fx({pelvis:[0,.35,0],torso:[.12,-.25,0],head:[-.05,-.1,0],uarmR:[-.55,.15,-.2],farmR:[-.75,0,0],handR:[1.55,0,0],uarmL:[-.75,.25,.25],farmL:[-.95,0,0],handL:[.3,0,0],thighR:[.25,0,-.08],shinR:[.35,0,0],footR:[-.2,0,0],thighL:[-.45,0,.12],shinL:[.45,0,0],footL:[0,0,0],cloak:[.12,0,0],rootY:-.07})};function Er(i,t,e={}){let n=Math.sin(i),s=Math.cos(i),r={pelvis:[0,.15*n,0],torso:[.32,-.2*n,0],head:[-.2,.1*n,0],uarmR:[.45+.1*n,0,-.25],farmR:[-.35,0,0],handR:[2.45,0,0],uarmL:[-.7*n,0,.18],farmL:[-.7-.3*Math.max(0,n),0,0],thighR:[-.95*n-.15,0,0],thighL:[.95*n-.15,0,0],shinR:[.35+.95*Math.max(0,-s),0,0],shinL:[.35+.95*Math.max(0,s),0,0],footR:[.25*n,0,0],footL:[-.25*n,0,0],cloak:[.65+.12*Math.sin(i*2),0,.06*n],rootY:-.05+.07*Math.abs(s)};return Ae(wt.idle,r,t,e)}var Me=(i,t,e=.15,n=-1.25)=>({pelvis:[0,t*.4,0],torso:[e,t*.6,0],head:[0,-t*.5,0],uarmR:[-.1,i,n],farmR:[-.15,0,0],handR:[1.45,0,0],uarmL:[-.4,i*.6,.6],farmL:[-.9,0,0],thighR:[-.35,0,-.15],shinR:[.4,0,0],thighL:[.15,0,.15],shinL:[.25,0,0],cloak:[.5,0,-t*.2],rootY:-.15}),ke=(i,t,e=-.3)=>({...Me(i,t,0,-1.78),farmR:[0,0,0],handR:[1.57,0,0],rootY:e}),ja={pelvis:[.05,-.45,0],torso:[.25,-.95,0],head:[-.05,.75,0],uarmR:[.1,-.2,-.9],farmR:[-1,0,0],handR:[2.15,0,0],uarmL:[-.35,-.9,.35],farmL:[-1.3,0,0],handL:[.3,0,0],thighR:[-.5,0,-.25],shinR:[.95,0,0],thighL:[.35,0,.3],shinL:[.75,0,0],footR:[-.2,0,0],cloak:[.4,0,.25],rootY:-.38},E0={...ke(.5,-.1),torso:[.35,.05,0],head:[-.25,0,0],thighR:[-.65,0,-.38],shinR:[.95,0,0],thighL:[.45,0,.38],shinL:[.85,0,0],footR:[-.25,0,0],footL:[.1,0,0],cloak:[1,0,.4],rootY:-.42},rt={L1:{dur:.46,active:[.1,.24],chainAt:.26,dmg:24,kb:5,lunge:[.04,.22,5.5],sound:"swing",type:"sweep",keys:[[0,Me(.15,-.45)],[.1,Me(-.1,-.5),"out"],[.24,{...Me(2.3,.6),rootYaw:.4},"out"],[.46,wt.idle,"io"]]},L2:{dur:.48,active:[.11,.25],chainAt:.28,dmg:26,kb:5,lunge:[.05,.23,5.5],sound:"swing",type:"sweep",keys:[[0,{...Me(1.8,.45),rootYaw:.3}],[.11,{...Me(2,.5),rootYaw:.38},"out"],[.25,{...Me(-.1,-.4),rootYaw:-.22},"out"],[.48,wt.idle,"io"]]},L3:{dur:.7,heavy:!0,active:[.28,.36],impact:.34,chainAt:.5,dmg:42,kb:7,up:6,radius:2.6,lunge:[.1,.32,6],sound:"swingHeavy",type:"slam",keys:[[0,wt.idle],[.2,{pelvis:[0,0,0],torso:[-.35,0,0],head:[.1,0,0],uarmR:[-2.9,0,-.15],farmR:[-.6,0,0],handR:[.05,0,0],uarmL:[-2.7,0,.2],farmL:[-.7,0,0],thighR:[-.5,0,0],shinR:[.4,0,0],thighL:[.2,0,0],shinL:[.2,0,0],cloak:[.3,0,0],rootY:.05},"out"],[.34,{pelvis:[.2,0,0],torso:[.65,0,0],head:[-.4,0,0],uarmR:[-.75,0,-.1],farmR:[-.15,0,0],handR:[.35,0,0],uarmL:[-.85,0,.15],farmL:[-.3,0,0],thighR:[-.9,0,0],shinR:[.9,0,0],thighL:[.5,0,0],shinL:[.6,0,0],cloak:[.5,0,0],rootY:-.38},"in"],[.52,{pelvis:[.2,0,0],torso:[.6,0,0],head:[-.4,0,0],uarmR:[-.75,0,-.1],farmR:[-.15,0,0],handR:[.35,0,0],uarmL:[-.85,0,.15],farmL:[-.3,0,0],thighR:[-.9,0,0],shinR:[.9,0,0],thighL:[.5,0,0],shinL:[.6,0,0],cloak:[.3,0,0],rootY:-.36}],[.7,wt.idle,"io"]]},SPIN:{dur:.78,active:[.2,.52],chainAt:.62,dmg:36,kb:9,lunge:[.2,.5,3],sound:"swingHeavy",type:"sweep",keys:[[0,wt.idle],[.2,{...Me(-.2,-.6,.3),rootY:-.3},"out"],[.52,{...Me(.6,.3,.25),rootYaw:2*Math.PI,rootY:-.25},"lin"],[.78,{...wt.idle,rootYaw:2*Math.PI},"io"]]},DASH:{dur:.56,active:[.15,.32],chainAt:.34,dmg:30,kb:7,lunge:[.06,.32,11],sound:"swing",type:"thrust",reach:.35,keys:[[0,wt.idle],[.13,{pelvis:[0,-.4,0],torso:[.1,-.5,0],head:[0,.4,0],uarmR:[.55,0,-.25],farmR:[-1.6,0,0],handR:[1.05,0,0],uarmL:[-.6,0,.3],farmL:[-1,0,0],thighR:[.4,0,0],shinR:[.6,0,0],thighL:[-.7,0,0],shinL:[.4,0,0],cloak:[.5,0,0],rootY:-.25},"out"],[.3,{pelvis:[.15,.3,0],torso:[.45,.3,0],head:[-.3,-.2,0],uarmR:[-1.55,0,-.05],farmR:[0,0,0],handR:[1,0,0],uarmL:[.4,0,.3],farmL:[-.3,0,0],thighR:[-1,0,0],shinR:[.8,0,0],thighL:[.7,0,0],shinL:[.3,0,0],cloak:[1.1,0,0],rootY:-.35},"out"],[.56,wt.idle,"io"]]},UPPER:{dur:.62,active:[.15,.3],chainAt:.36,dmg:28,kb:2,up:9,heavy:!0,sound:"swingHeavy",type:"sweep",keys:[[0,{...wt.idle,uarmR:[.5,0,-.3],farmR:[-.3,0,0],handR:[2.3,0,0],torso:[.45,0,0],rootY:-.32}],[.13,{...wt.idle,uarmR:[.6,0,-.3],farmR:[-.3,0,0],handR:[2.3,0,0],torso:[.5,0,0],thighR:[-.8,0,0],shinR:[1.2,0,0],rootY:-.4},"out"],[.3,{pelvis:[-.15,0,0],torso:[-.35,0,0],head:[-.3,0,0],uarmR:[-2.7,0,-.2],farmR:[-.2,0,0],handR:[1.7,0,0],uarmL:[-2.2,0,.3],farmL:[-.5,0,0],thighR:[.1,0,0],thighL:[-.3,0,0],shinL:[.2,0,0],cloak:[.8,0,0],rootY:.12},"out"],[.62,wt.idle,"io"]]},CROSS:{dur:.5,active:[.1,.25],chainAt:.3,dmg:30,kb:5,lunge:[.05,.22,5],sound:"swing",type:"sweep",keys:[[0,{...Me(.2,-.5,-.2,-2.3),rootRoll:.15}],[.1,{...Me(0,-.55,-.2,-2.4),rootRoll:.2},"out"],[.25,{...Me(1.5,.45,.25,-1),rootYaw:.25,rootRoll:-.1,rootY:-.25},"out"],[.5,wt.idle,"io"]]},CHARGE:{dur:99,keys:[[0,wt.idle],[.25,ja,"out"]]},SPIN_IN:{dur:.18,active:[.08,.18],chainAt:99,dmg:24,kb:7,heavy:!0,sound:"swingHeavy",type:"sweep",keys:[[0,ja],[.06,{...ja,pelvis:[.1,.35,0],torso:[.25,-.65,0],uarmR:[.05,-.85,-1.1],farmR:[-.85,0,0],handR:[2.2,0,0],thighR:[-.95,0,-.2],shinR:[.9,0,0],thighL:[.55,0,.3],shinL:[.6,0,0],rootY:-.34},"out"],[.12,{...ke(-.55,-.6),farmR:[-.4,0,0],handR:[2,0,0],pelvis:[0,.1,0],torso:[.1,-.45,0],thighR:[-.7,0,-.2],shinR:[.7,0,0],thighL:[.4,0,.3],shinL:[.5,0,0],rootY:-.32},"io"],[.18,{...ke(-.2,-.6)},"out"]]},SPIN_LOOP:{dur:.3,active:[0,.3],chainAt:99,dmg:24,kb:7,heavy:!0,sound:"swingHeavy",type:"sweep",keys:[[0,{...ke(-.2,-.6),rootYaw:0}],[.3,{...ke(-.2,-.6),rootYaw:2*Math.PI},"lin"]]},SPIN_OUT:{dur:.48,active:[-1,-1],chainAt:.18,type:"spin",keys:[[0,{...ke(-.2,-.6),rootYaw:0}],[.04,E0,"out"],[.16,E0],[.48,wt.idle,"io"]]},RFLIP:{dur:.74,active:[.14,.52],chainAt:.5,dmg:38,kb:6,up:4,heavy:!0,lunge:[.1,.5,6.5],sound:"swingHeavy",type:"sweep",keys:[[0,wt.idle],[.12,{torso:[.5,0,0],uarmR:[-1.5,0,-.1],farmR:[0,0,0],handR:[1.5,0,0],uarmL:[-1.4,0,.2],farmL:[-.3,0,0],thighR:[-.6,0,0],shinR:[.9,0,0],thighL:[-.6,0,0],shinL:[.9,0,0],cloak:[.6,0,0],rootY:-.2},"out"],[.32,{torso:[.6,0,0],uarmR:[-1.5,0,-.1],farmR:[0,0,0],handR:[1.5,0,0],uarmL:[-1.4,0,.2],farmL:[-.3,0,0],thighR:[-1.4,0,0],shinR:[1.9,0,0],thighL:[-1.4,0,0],shinL:[1.9,0,0],cloak:[1.2,0,0],rootY:1,rootPitch:Math.PI},"lin"],[.52,{torso:[.5,0,0],uarmR:[-1.5,0,-.1],farmR:[0,0,0],handR:[1.5,0,0],uarmL:[-1.4,0,.2],farmL:[-.3,0,0],thighR:[-.9,0,0],shinR:[1,0,0],thighL:[-.5,0,0],shinL:[.8,0,0],cloak:[.6,0,0],rootY:-.25,rootPitch:2*Math.PI},"lin"],[.74,{...wt.idle,rootPitch:2*Math.PI},"io"]]},RSPIN2:{dur:.8,active:[.14,.6],chainAt:.62,dmg:30,kb:8,heavy:!0,lunge:[.14,.6,4],sound:"swingHeavy",type:"sweep",multi:2,keys:[[0,wt.idle],[.14,{...ke(-.2,-.6),rootYaw:0},"out"],[.6,{...ke(.2,-.2),rootYaw:2*Math.PI},"lin"],[.8,{...wt.idle,rootYaw:2*Math.PI},"io"]]},RLEAP:{dur:.95,active:[.4,.5],impact:.5,chainAt:.72,dmg:60,kb:11,up:8,radius:4.6,heavy:!0,lunge:[.08,.46,8],sound:"swingHeavy",type:"slam",keys:[[0,wt.idle],[.12,{...wt.idle,thighR:[-.9,0,0],shinR:[1.4,0,0],thighL:[-.9,0,0],shinL:[1.4,0,0],torso:[.5,0,0],rootY:-.4},"out"],[.34,{pelvis:[0,0,0],torso:[-.4,0,0],head:[.1,0,0],uarmR:[-2.9,0,-.15],farmR:[-.6,0,0],handR:[.05,0,0],uarmL:[-2.7,0,.2],farmL:[-.7,0,0],thighR:[-1,0,0],shinR:[1.2,0,0],thighL:[-.4,0,0],shinL:[.8,0,0],cloak:[0,0,0],rootY:1.5},"out"],[.5,{pelvis:[.2,0,0],torso:[.7,0,0],head:[-.4,0,0],uarmR:[-.75,0,-.1],farmR:[-.15,0,0],handR:[.35,0,0],uarmL:[-.85,0,.15],farmL:[-.3,0,0],thighR:[-1,0,0],shinR:[1.1,0,0],thighL:[.5,0,0],shinL:[.7,0,0],cloak:[1,0,0],rootY:-.42},"in"],[.95,wt.idle,"io"]]},L4:{dur:.56,active:[.08,.38],chainAt:.4,dmg:30,kb:7,heavy:!0,lunge:[.08,.38,3.5],sound:"swingHeavy",type:"sweep",keys:[[0,{...ke(-.2,-.6),rootYaw:0}],[.08,{...ke(-.25,-.65),rootYaw:0},"out"],[.38,{...ke(.2,-.2),rootYaw:2*Math.PI},"lin"],[.56,{...wt.idle,rootYaw:2*Math.PI},"io"]]},L5:{dur:.64,active:[.1,.44],chainAt:.46,dmg:26,kb:6,multi:2,lunge:[.05,.42,6],sound:"swing",type:"thrust",reach:.35,keys:[[0,wt.idle],[.1,{pelvis:[0,-.4,0],torso:[.1,-.5,0],uarmR:[.55,0,-.25],farmR:[-1.6,0,0],handR:[1.05,0,0],uarmL:[-.6,0,.3],farmL:[-1,0,0],thighR:[.4,0,0],shinR:[.6,0,0],thighL:[-.7,0,0],shinL:[.4,0,0],cloak:[.5,0,0],rootY:-.25},"out"],[.2,{pelvis:[.15,.3,0],torso:[.45,.3,0],uarmR:[-1.55,0,-.05],farmR:[0,0,0],handR:[1,0,0],uarmL:[.4,0,.3],farmL:[-.3,0,0],thighR:[-1,0,0],shinR:[.8,0,0],thighL:[.7,0,0],shinL:[.3,0,0],cloak:[1.1,0,0],rootY:-.35},"out"],[.3,{pelvis:[0,-.3,0],torso:[.2,-.4,0],uarmR:[.4,0,-.25],farmR:[-1.5,0,0],handR:[1.05,0,0],uarmL:[-.5,0,.3],farmL:[-1,0,0],thighR:[-.6,0,0],shinR:[.7,0,0],thighL:[.4,0,0],shinL:[.4,0,0],cloak:[.7,0,0],rootY:-.3},"io"],[.42,{pelvis:[.2,.35,0],torso:[.5,.35,0],uarmR:[-1.6,0,-.05],farmR:[0,0,0],handR:[1,0,0],uarmL:[.4,0,.3],farmL:[-.3,0,0],thighR:[-1.1,0,0],shinR:[.8,0,0],thighL:[.8,0,0],shinL:[.3,0,0],cloak:[1.2,0,0],rootY:-.38},"out"],[.64,wt.idle,"io"]]},DODGE:{dur:.5,iframes:[0,.36],lunge:[0,.42,12],keys:[[0,{...wt.idle,rootY:-.3}],[.08,{torso:[.6,0,0],uarmR:[.6,0,-.2],farmR:[-.6,0,0],handR:[2.4,0,0],thighR:[-1.6,0,0],shinR:[2,0,0],thighL:[-1.4,0,0],shinL:[2,0,0],uarmL:[-.6,0,.3],farmL:[-1.4,0,0],head:[.4,0,0],cloak:[1.2,0,0],rootY:-.4,rootPitch:.6},"out"],[.34,{torso:[.6,0,0],uarmR:[.6,0,-.2],farmR:[-.6,0,0],handR:[2.4,0,0],thighR:[-1.6,0,0],shinR:[2,0,0],thighL:[-1.4,0,0],shinL:[2,0,0],uarmL:[-.6,0,.3],farmL:[-1.4,0,0],head:[.4,0,0],cloak:[.6,0,0],rootY:-.4,rootPitch:2*Math.PI-.3},"lin"],[.5,{...wt.idle,rootPitch:2*Math.PI},"io"]]},HURT:{dur:.36,keys:[[0,wt.idle],[.08,{...wt.idle,torso:[-.45,.3,0],head:[-.4,0,0],rootY:-.12,rootPitch:-.15},"out"],[.36,wt.idle,"io"]]},RAGE:{dur:1,iframes:[0,1],impact:.55,radius:6,dmg:60,kb:12,up:7,keys:[[0,wt.idle],[.45,{torso:[-.5,0,0],head:[-.6,0,0],uarmR:[-.5,0,-1.2],farmR:[-.3,0,0],handR:[1.4,0,0],uarmL:[-.4,0,1.3],farmL:[-.4,0,0],thighR:[0,0,-.25],thighL:[0,0,.25],cloak:[.9,0,0],rootY:0},"out"],[.6,{torso:[.5,0,0],head:[.2,0,0],uarmR:[-.7,0,-.5],farmR:[-.3,0,0],handR:[1.4,0,0],uarmL:[-.6,0,.5],farmL:[-.4,0,0],thighR:[-.6,0,-.2],shinR:[.8,0,0],thighL:[.3,0,.2],shinL:[.5,0,0],cloak:[1.1,0,0],rootY:-.3},"out"],[1,wt.idle,"io"]]},DEATH:{dur:1.4,keys:[[0,wt.idle],[.4,{...wt.idle,torso:[.6,0,0],thighR:[-1.4,0,0],shinR:[2,0,0],thighL:[-1.2,0,0],shinL:[2.1,0,0],rootY:-.5},"out"],[1,{...wt.idle,torso:[.3,0,0],head:[.5,0,0],uarmR:[-.2,0,-.6],uarmL:[-.2,0,.6],rootY:-.62,rootPitch:1.45},"in"],[1.4,{...wt.idle,torso:[.3,0,0],head:[.5,0,0],uarmR:[-.2,0,-.6],uarmL:[-.2,0,.6],rootY:-.62,rootPitch:1.45}]]}},$i={torso:[.25,0,0],head:[.15,0,.1],uarmR:[-.25,0,-.15],farmR:[-.6,0,0],handR:[.85,0,0],uarmL:[.1,0,.12],farmL:[-.3,0,0],thighR:[-.2,0,0],shinR:[.3,0,0],thighL:[.1,0,0],shinL:[.25,0,0],rootY:-.05};function Kc(i,t,e,n){switch(i){case"walk":{let s=Math.sin(e),r=Math.cos(e);return Ae($i,{torso:[.4,.15*s,0],head:[.2,-.1*s,.15],uarmR:[-.3+.2*s,0,-.2],farmR:[-.6,0,0],handR:[.85,0,0],uarmL:[.6*s,0,.15],farmL:[-.4,0,0],thighR:[-.75*s-.1,0,0],thighL:[.75*s-.1,0,0],shinR:[.3+.8*Math.max(0,-r),0,0],shinL:[.3+.8*Math.max(0,r),0,0],rootY:-.04+.05*Math.abs(r)},1,n)}case"windup":{let s=Dn.out(Math.min(1,t));return Ae($i,{torso:[-.25,-.3,0],head:[-.1,0,0],uarmR:[-2.7,0,-.3],farmR:[-.5,0,0],handR:[.2,0,0],uarmL:[-.4,0,.4],farmL:[-.5,0,0],thighR:[.2,0,0],shinR:[.2,0,0],thighL:[-.4,0,0],shinL:[.3,0,0],rootY:0},s,n)}case"strike":{let s=Dn.out(Math.min(1,t));return Ae({torso:[-.25,-.3,0],uarmR:[-2.7,0,-.3],farmR:[-.5,0,0],handR:[.2,0,0],uarmL:[-.4,0,.4],farmL:[-.5,0,0],thighR:[.2,0,0],thighL:[-.4,0,0],shinL:[.3,0,0]},{torso:[.55,.25,0],head:[-.3,0,0],uarmR:[-.7,0,-.1],farmR:[-.1,0,0],handR:[1.2,0,0],uarmL:[.4,0,.3],farmL:[-.3,0,0],thighR:[.3,0,0],shinR:[.4,0,0],thighL:[-.7,0,0],shinL:[.6,0,0],rootY:-.2},s,n)}case"hit":{let s=Math.sin(Math.min(1,t)*Math.PI);return Ae($i,{...$i,torso:[-.6,.3,.2],head:[-.6,0,0],uarmR:[.4,0,-.6],uarmL:[.4,0,.6],rootPitch:-.25,rootY:-.1},s,n)}case"dead":{let s=Dn.out(Math.min(1,t));return Ae($i,{torso:[-.5,.4,.2],head:[-.7,.3,0],uarmR:[-.3,0,-1.3],uarmL:[-.2,0,1.4],farmR:[-.4,0,0],thighR:[-.4,0,-.2],shinR:[.8,0,0],thighL:[.1,0,.2],rootPitch:-1.52,rootY:-.4},s,n)}default:{let s=Math.sin(e*.5)*.04;return Ae($i,{...$i,torso:[.25+s,0,0],head:[.15-s,0,.1]},1,n)}}}var Ke={torso:[.1,-.2,0],head:[-.05,.1,0],uarmR:[-.5,.1,-.25],farmR:[-.9,0,0],handR:[1.1,0,0],uarmL:[-.6,.3,.35],farmL:[-1,0,0],thighR:[.2,0,-.12],shinR:[.3,0,0],thighL:[-.35,0,.12],shinL:[.35,0,0],rootY:-.05};function $c(i,t,e,n){switch(i){case"walk":{let s=Math.sin(e),r=Math.cos(e);return Ae(Ke,{...Ke,torso:[.2,.12*s,0],thighR:[-.6*s-.1,0,-.1],thighL:[.6*s-.1,0,.1],shinR:[.3+.7*Math.max(0,-r),0,0],shinL:[.3+.7*Math.max(0,r),0,0],rootY:-.03+.05*Math.abs(r)},1,n)}case"roar":{let s=Math.sin(Math.min(1,t)*Math.PI);return Ae(Ke,{...Ke,torso:[-.5,0,0],head:[-.6,0,0],uarmR:[-.3,0,-1.2],uarmL:[-.3,0,1.2],farmR:[-.6,0,0],farmL:[-.6,0,0]},s,n)}case"cleaveWind":return Ae(Ke,{...Me(-1.2,-.8,.1),handR:[1.45,0,0]},Dn.out(Math.min(1,t)),n);case"cleave":return Ae({...Me(-1.2,-.8,.1)},{...Me(2.4,.8,.3),rootYaw:.4},Dn.out(Math.min(1,t)),n);case"slamWind":return Ae(Ke,rt.L3.keys[1][1],Dn.out(Math.min(1,t)),n);case"slam":return Ae(rt.L3.keys[1][1],rt.L3.keys[2][1],Dn.in(Math.min(1,t)),n);case"chargeWind":return Ae(Ke,{...Ke,torso:[.6,0,0],head:[-.4,0,0],thighR:[-.8,0,0],shinR:[1,0,0],thighL:[.5,0,0],rootY:-.3},Dn.out(Math.min(1,t)),n);case"charge":{let s=Math.sin(e*1.6),r=Math.cos(e*1.6);return Ae(Ke,{...Ke,torso:[.7,0,0],head:[-.5,0,0],uarmR:[-1.4,0,-.3],farmR:[-.3,0,0],handR:[1.4,0,0],thighR:[-1*s-.2,0,0],thighL:[1*s-.2,0,0],shinR:[.4+Math.max(0,-r),0,0],shinL:[.4+Math.max(0,r),0,0],rootY:-.1},1,n)}case"stagger":{let s=Math.sin(Math.min(1,t)*Math.PI);return Ae(Ke,{...Ke,torso:[.9,.3,.2],head:[.5,0,0],uarmR:[.3,0,-.5],uarmL:[.3,0,.5],thighR:[-1.2,0,0],shinR:[1.8,0,0],rootY:-.45},s,n)}case"dead":return Ae(Ke,{torso:[.8,0,.2],head:[.6,0,0],uarmR:[-.2,0,-.9],uarmL:[-.2,0,.9],thighR:[-1.5,0,0],shinR:[2.1,0,0],thighL:[-1.4,0,0],shinL:[2.1,0,0],rootY:-.55,rootPitch:.3},Dn.out(Math.min(1,t)),n);default:return Ae(Ke,Ke,0,n)}}rt.L6={...rt.RLEAP,dmg:50,radius:3.8};rt.FIN2={...rt.L3,dmg:52,radius:3.8,kb:9,up:5};rt.L1B={dur:.46,active:[.1,.24],chainAt:.26,dmg:24,kb:5,up:3,lunge:[.04,.22,5],sound:"swing",type:"sweep",keys:[[0,{...Me(.2,-.45,.2,-1.05),rootY:-.3}],[.1,{...Me(0,-.5,.2,-1.05),rootY:-.32},"out"],[.24,{...Me(2.2,.6,-.15,-2.3),rootYaw:.35,rootY:-.05},"out"],[.46,wt.idle,"io"]]};rt.VCUT={dur:.5,active:[.15,.25],chainAt:.28,dmg:30,kb:5,lunge:[.05,.24,5],sound:"swing",type:"sweep",keys:[[0,wt.idle],[.14,rt.L3.keys[1][1],"out"],[.25,{...rt.L3.keys[2][1],handR:[.3,0,0],rootY:-.2},"in"],[.5,wt.idle,"io"]]};rt.XCUT={dur:.64,active:[.1,.44],chainAt:.46,dmg:22,kb:4,multi:2,lunge:[.05,.4,4],sound:"swing",type:"sweep",keys:[[0,{...Me(.2,-.5,-.2,-2.3)}],[.1,{...Me(0,-.55,-.2,-2.4)},"out"],[.22,{...Me(1.6,.45,.15,-1.3),rootYaw:.25,rootY:-.2},"out"],[.32,{...Me(2.1,.55,-.15,-2.3),rootYaw:.3},"io"],[.44,{...Me(.1,-.45,.15,-1.3),rootYaw:-.15,rootY:-.2},"out"],[.64,wt.idle,"io"]]};rt.SPIN1={...rt.L4,dur:.48,chainAt:.36,lunge:[.05,.3,2.5],dmg:26};rt.STAB={...rt.DASH,lunge:[.08,.3,4],dmg:28};rt.LOWSWEEP={dur:.5,active:[.1,.27],chainAt:.3,dmg:24,kb:3,up:4,lunge:[.04,.22,3],sound:"swing",type:"sweep",keys:[[0,{...ke(.1,-.5,-.55),torso:[.35,-.3,0],thighR:[-.9,0,-.2],shinR:[1.5,0,0],thighL:[.2,0,.3],shinL:[1.1,0,0]}],[.1,{...ke(-.1,-.55,-.55),torso:[.35,-.33,0],thighR:[-.9,0,-.2],shinR:[1.5,0,0],thighL:[.2,0,.3],shinL:[1.1,0,0]},"out"],[.27,{...ke(2.3,.6,-.55),torso:[.35,.36,0],thighR:[-.9,0,-.2],shinR:[1.5,0,0],thighL:[.2,0,.3],shinL:[1.1,0,0],rootYaw:.4},"out"],[.5,wt.idle,"io"]]};rt.REVSPIN={dur:.52,active:[.08,.36],chainAt:.38,dmg:28,kb:7,heavy:!0,lunge:[.08,.36,3],sound:"swingHeavy",type:"sweep",keys:[[0,{...ke(1.6,.5),rootYaw:0}],[.08,{...ke(1.7,.55),rootYaw:0},"out"],[.36,{...ke(1.2,.2),rootYaw:-2*Math.PI},"lin"],[.52,{...wt.idle,rootYaw:-2*Math.PI},"io"]]};rt.BACKCUT={...rt.L1,dmg:24,lunge:[.02,.3,-6],keys:rt.L1.keys.map(([i,t,e])=>[i,{...t,torso:[-(t.torso?.15:0),(t.torso||[0,0,0])[1],0],cloak:[.9,0,0]},e])};rt.SHOULDER={dur:.5,active:[.08,.3],chainAt:.32,dmg:20,kb:12,up:2,body:1.5,lunge:[.05,.3,12],sound:"swing",type:"thrust",keys:[[0,wt.idle],[.08,{pelvis:[0,1,0],torso:[.45,.4,0],head:[0,-1,0],uarmR:[.45,0,-.25],farmR:[-.35,0,0],handR:[2.45,0,0],uarmL:[-.9,.6,.6],farmL:[-1.6,0,0],thighR:[-.9,0,0],shinR:[.8,0,0],thighL:[.5,0,0],shinL:[.6,0,0],cloak:[1.2,0,0],rootY:-.25},"out"],[.3,{pelvis:[0,1,0],torso:[.5,.4,0],head:[0,-1,0],uarmR:[.45,0,-.25],farmR:[-.35,0,0],handR:[2.45,0,0],uarmL:[-.9,.6,.6],farmL:[-1.6,0,0],thighR:[.4,0,0],shinR:[.4,0,0],thighL:[-.8,0,0],shinL:[.7,0,0],cloak:[1.3,0,0],rootY:-.3}],[.5,wt.idle,"io"]]};rt.WHEEL={...rt.RFLIP,dmg:30,up:3,keys:rt.RFLIP.keys.map(([i,t,e])=>[i,{...t,rootY:t.rootY>.5?.55:t.rootY},e])};var w0={pelvis:[.1,0,0],torso:[.45,0,0],head:[-.2,0,0],uarmR:[-1.6,0,-.08],farmR:[-.8,0,0],handR:[3.15,0,0],uarmL:[-1.6,0,.12],farmL:[-.85,0,0],thighR:[-.2,0,-.2],shinR:[.3,0,0],thighL:[.1,0,.2],shinL:[.2,0,0],cloak:[.5,0,0],rootY:0};rt.VAULT={dur:1,active:[.62,.72],impact:.7,chainAt:.8,dmg:48,kb:10,up:7,radius:3.4,heavy:!0,ground:!0,lunge:[.1,.62,7],sound:"swingHeavy",type:"slam",keys:[[0,wt.idle],[.14,{...w0,rootY:-.05},"out"],[.38,{...w0,uarmR:[-2.4,0,-.1],uarmL:[-2.4,0,.1],farmR:[-.1,0,0],handR:[2.9,0,0],thighR:[-1.6,0,0],shinR:[2,0,0],thighL:[-1.4,0,0],shinL:[1.9,0,0],cloak:[.2,0,0],rootY:1.7,rootPitch:-.4},"out"],[.55,{pelvis:[0,0,0],torso:[-.4,0,0],head:[.1,0,0],uarmR:[-2.9,0,-.15],farmR:[-.6,0,0],handR:[.05,0,0],uarmL:[-2.7,0,.2],farmL:[-.7,0,0],thighR:[-1,0,0],shinR:[1.2,0,0],thighL:[-.4,0,0],shinL:[.8,0,0],rootY:1.3},"io"],[.7,{pelvis:[.2,0,0],torso:[.7,0,0],head:[-.4,0,0],uarmR:[-.75,0,-.1],farmR:[-.15,0,0],handR:[.35,0,0],uarmL:[-.85,0,.15],farmL:[-.3,0,0],thighR:[-1,0,0],shinR:[1.1,0,0],thighL:[.5,0,0],shinL:[.7,0,0],cloak:[1,0,0],rootY:-.42},"in"],[1,wt.idle,"io"]]};var Zc=i=>({pelvis:[0,.15*i,0],torso:[.45,-.25,0],head:[-.25,.2,0],uarmR:[.55,0,-.35],farmR:[-.25,0,0],handR:[2,0,0],uarmL:[-.7*i,0,.2],farmL:[-.8,0,0],thighR:[-.9*i-.2,0,0],thighL:[.9*i-.2,0,0],shinR:[.5+.6*Math.max(0,i),0,0],shinL:[.5+.6*Math.max(0,-i),0,0],cloak:[1.1,0,0],rootY:-.12});rt.DRAG={dur:.75,active:[.38,.52],chainAt:.54,dmg:34,kb:4,up:8,heavy:!0,ground:!0,lunge:[.04,.4,9],sound:"swingHeavy",type:"sweep",keys:[[0,wt.idle],[.1,Zc(1),"out"],[.22,Zc(-1)],[.34,Zc(1)],[.52,rt.UPPER.keys[2][1],"out"],[.75,wt.idle,"io"]]};var li=(i,t=0,e={})=>qc[i].map(([n,s,r])=>[t+n,{...s,...e},r||"io"]),fn=(i,t,e={})=>({...qc[i][t][1],...e}),Pi=(i,t,e=wt.idle)=>[...i,[t,e,"io"]];rt.L1={...rt.L1,dur:.5,active:[.12,.26],chainAt:.28,keys:Pi(li("R2L"),.5)};rt.L2={...rt.L2,dur:.5,active:[.12,.26],chainAt:.28,keys:Pi(li("L2R"),.5)};rt.CROSS={...rt.CROSS,dur:.52,active:[.13,.28],chainAt:.3,keys:Pi(li("HIGH_R_LOW_L"),.52)};rt.CROSS2={...rt.CROSS,keys:Pi(li("HIGH_L_LOW_R"),.52)};rt.L1B={...rt.L1B,dur:.52,active:[.13,.28],chainAt:.3,keys:Pi(li("LOW_R_HIGH_L"),.52)};rt.L2B={...rt.L1B,keys:Pi(li("LOW_L_HIGH_R"),.52)};rt.LOWSWEEP={...rt.LOWSWEEP,dur:.55,active:[.13,.29],chainAt:.32,keys:Pi(li("LOW_SWEEP"),.55)};rt.XCUT={...rt.XCUT,dur:.78,active:[.12,.54],chainAt:.56,keys:Pi([...li("HIGH_R_LOW_L"),...li("HIGH_L_LOW_R",.27).slice(1)],.78)};rt.BACKCUT={...rt.L1,dmg:24,lunge:[.02,.3,-6]};var eo=(i,t,e,n,s,r)=>({...i,dur:r+.24,active:[.08,r],chainAt:r+.04,keys:[[0,fn(t,0)],[.08,fn(e,0,{rootYaw:0}),"out"],[r,fn(e,0,{rootYaw:s}),"lin"],[r+.08,fn(n,4,{rootYaw:s}),"out"],[r+.24,{...wt.idle,rootYaw:s},"io"]]});rt.L4=eo(rt.L4,"R2L","SPIN","R2L",2*Math.PI,.38);rt.SPIN1=eo(rt.SPIN1,"R2L","SPIN","R2L",2*Math.PI,.34);rt.REVSPIN=eo(rt.REVSPIN,"L2R","SPIN_REV","L2R",-2*Math.PI,.36);rt.RSPIN2=eo(rt.RSPIN2,"R2L","SPIN","R2L",2*Math.PI,.5);rt.SPIN_IN={...rt.SPIN_IN,dur:.18,keys:[[0,ja],[.06,fn("RELEASE",0),"out"],[.12,fn("RELEASE",1),"io"],[.18,fn("SPIN",0,{rootYaw:0}),"out"]]};rt.SPIN_LOOP={...rt.SPIN_LOOP,keys:[[0,fn("SPIN",0,{rootYaw:0})],[.3,fn("SPIN",0,{rootYaw:2*Math.PI}),"lin"]]};rt.SPIN_OUT={...rt.SPIN_OUT,dur:.62,chainAt:.32,keys:[[0,fn("SPIN",0,{rootYaw:0})],[.06,fn("HEAVY_FOLLOW",0),"out"],[.18,fn("HEAVY_FOLLOW",1),"out"],[.3,fn("HEAVY_FOLLOW",1)],[.62,wt.idle,"io"]]};var Rt=i=>document.querySelector(i),kx=Rt("#game"),k0=matchMedia("(pointer: coarse)").matches,pn=new Sa({canvas:kx,antialias:!k0,powerPreference:"high-performance"});pn.toneMapping=ic;pn.toneMappingExposure=1.75;pn.shadowMap.enabled=!0;pn.shadowMap.type=nc;var Di={ratio:Math.min(window.devicePixelRatio||1,k0?2:1.5),shadows:!0};pn.setPixelRatio(Di.ratio);var Gt=new Ra,B0=new bt(1379339);Gt.fog=new ba(B0,.026);Gt.background=B0;var Oe=new Le(48,1,.1,220),so=new za(9076358,2759188,1.1);Gt.add(so);var sn=new Li(16760728,3.2);sn.castShadow=!0;sn.shadow.mapSize.set(1024,1024);var Gs=sn.shadow.camera;Gs.left=-16;Gs.right=16;Gs.top=16;Gs.bottom=-16;Gs.near=1;Gs.far=70;sn.shadow.bias=-6e-4;sn.shadow.normalBias=.03;Gt.add(sn,sn.target);var hh=new Li(10135295,.35);hh.position.set(-10,6,-12);Gt.add(hh);var Tr=new Li(16773606,1.6);Gt.add(Tr,Tr.target);var Ar=new Ns(16722448,0,9,1.6);Gt.add(Ar);function uh(){let i=window.innerWidth,t=window.innerHeight;pn.setSize(i,t,!1),Oe.aspect=i/t,Oe.fov=i<t?62:46,Oe.updateProjectionMatrix()}window.addEventListener("resize",uh);uh();var Pt={loadBar:Rt("#load-bar"),loadText:Rt("#load-text"),title:Rt("#title"),start:Rt("#btn-start"),hud:Rt("#hud"),hp:Rt("#hp-fill"),hpLag:Rt("#hp-lag"),rage:Rt("#rage-fill"),rageBtn:Rt("#btn-rage"),ko:Rt("#ko"),combo:Rt("#combo"),comboN:Rt("#combo-n"),wave:Rt("#wave-banner"),waveLabel:Rt("#wave-label"),bossBar:Rt("#boss"),bossFill:Rt("#boss-fill"),result:Rt("#result"),pause:Rt("#pause"),hurt:Rt("#hurt"),objective:Rt("#objective")},Lr=new _r;Lr.onProgress=(i,t,e)=>{let n=Math.round(t/e*100);Pt.loadBar.style.width=n+"%",Pt.loadText.textContent=`\u88C5\u5099\u3092\u6574\u3048\u3066\u3044\u308B\u2026 ${n}%`};var Bx=new qa(Lr),zx=new Ps(Lr);function Hx(i){let t=i.buffers[0].uri,e=t.slice(t.indexOf(",")+1),n=Uint8Array.from(atob(e),h=>h.charCodeAt(0));delete i.buffers[0].uri;let s=new TextEncoder().encode(JSON.stringify(i)),r=Math.ceil(s.length/4)*4,a=Math.ceil(n.length/4)*4,o=new Uint8Array(20+r+8+a),l=new DataView(o.buffer);l.setUint32(0,1179937895,!0),l.setUint32(4,2,!0),l.setUint32(8,o.length,!0),l.setUint32(12,r,!0),l.setUint32(16,1313821514,!0),o.fill(32,20,20+r),o.set(s,20);let c=20+r;return l.setUint32(c,a,!0),l.setUint32(c+4,5130562,!0),o.set(n,c+8),o.buffer}var dh=window.ASSET_V?`?v=${window.ASSET_V}`:"",ks=i=>(Lr.itemStart(i),fetch(`assets/${i}.gltf.json${dh}`).then(t=>{if(!t.ok)throw new Error(`${i}: HTTP ${t.status}`);return t.json()}).then(t=>new Promise((e,n)=>{let s=window.createImageBitmap;try{window.createImageBitmap=void 0,Bx.parse(Hx(t),"",e,n)}finally{window.createImageBitmap=s}})).finally(()=>Lr.itemEnd(i))),no=i=>new Promise((t,e)=>zx.load(`assets/${i}${dh}`,t,void 0,e)),oe=null;async function Vx(){let[i,t,e,n,s,r,a,o,l,c,h]=await Promise.all([ks("hero"),ks("grunt"),ks("boss"),ks("sword"),ks("weapons"),ks("props"),fetch(`assets/skeleton.json${dh}`).then(d=>d.json()),no("ground_col.jpg"),no("ground_nrm.jpg"),no("ground_rough.jpg"),no("sky.jpg")]),u=d=>{let f={};return d.scene.traverse(g=>{g.isMesh&&(f[g.name]=g)}),f};oe={hero:u(i),grunt:u(t),boss:u(e),sword:u(n),weapons:u(s),props:u(r),skel:a,gcol:o,gnrm:l,grough:c,sky:h}}var Cr=.55;function z0(i,t,e={}){let n=new tn,s=new tn;s.position.y=Cr,n.add(s);let r={};for(let a of Rr){let o=t[a];if(!o)continue;let l=a.replace(/[RL]$/,""),c=i[l];if(!c)continue;let h=new tn;h.position.fromArray(o[1]),Qa[a]&&(h.rotation.order=Qa[a]);let u=new he(c.geometry,e.material||c.material);u.castShadow=!0,u.receiveShadow=!1,h.add(u),r[a]=h}for(let a of Object.keys(r)){let o=t[a][0];o?r[o].add(r[a]):(r[a].position.y-=Cr,s.add(r[a]))}return{root:n,inner:s,j:r}}function zs(i,t){for(let e in i.j){let n=t[e];n?i.j[e].rotation.set(n[0],n[1],n[2]):i.j[e].rotation.set(0,0,0)}i.inner.position.y=Cr+(t.rootY||0),i.inner.rotation.set(t.rootPitch||0,t.rootYaw||0,t.rootRoll||0,"YXZ")}var nh=class{constructor(t,e,n,s){this.cap=s,this.joints=Rr.filter(r=>e[r]&&t[r.replace(/[RL]$/,"")]),this.offsets=this.joints.map(r=>new T().fromArray(e[r][1])),this.parent=this.joints.map(r=>this.joints.indexOf(e[r][0])),this.meshes=this.joints.map(r=>{let a=t[r.replace(/[RL]$/,"")],o=new un(a.geometry,a.material,s);return o.instanceMatrix.setUsage(dc),o.castShadow=!0,o.frustumCulled=!1,o.count=0,Gt.add(o),o}),this.weapons={};for(let[r,a]of Object.entries(n)){let o=new un(a.geometry,a.material,s);o.instanceMatrix.setUsage(dc),o.castShadow=!0,o.frustumCulled=!1,o.count=0,Gt.add(o),this.weapons[r]=o}this.tint=new bt,this.world=this.joints.map(()=>new Ct),this._m=new Ct,this._q=new Fe,this._e=new Ze,this._s=new T(1,1,1),this._p=new T,this.wOff=new Ct().makeRotationFromEuler(new Ze(Math.PI/2,Math.PI/2,0)),this.wOff.setPosition(0,-.085,0),this.handR=this.joints.indexOf("handR")}begin(){this.n=0,this.wn={};for(let t in this.weapons)this.wn[t]=0}add(t,e,n,s){let r=this.n++,{_m:a,_q:o,_e:l,_p:c,_s:h}=this,u=a.compose(c.set(0,Cr+(e.rootY||0),0),o.setFromEuler(l.set(e.rootPitch||0,e.rootYaw||0,0,"YXZ")),h),d=new Ct().multiplyMatrices(t,u);for(let f=0;f<this.joints.length;f++){let g=this.joints[f],x=e[g];l.set(x?x[0]:0,x?x[1]:0,x?x[2]:0,Qa[g]||"XYZ");let m=this.offsets[f];c.copy(m),this.parent[f]<0&&(c.y-=Cr),a.compose(c,o.setFromEuler(l),h),this.world[f].multiplyMatrices(this.parent[f]<0?d:this.world[this.parent[f]],a),this.meshes[f].setMatrixAt(r,this.world[f]),s&&this.meshes[f].setColorAt(r,s)}if(n&&this.weapons[n]){let f=this.weapons[n],g=this.wn[n]++;a.multiplyMatrices(this.world[this.handR],this.wOff),f.setMatrixAt(g,a),s&&f.setColorAt(g,s)}}end(){for(let t of this.meshes)t.count=this.n,t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0);for(let t in this.weapons){let e=this.weapons[t];e.count=this.wn[t],e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}}},de=46,ih=null,H0=[];function Gx(){for(let l of[oe.gcol,oe.gnrm,oe.grough])l.wrapS=l.wrapT=Qn,l.repeat.set(26,26),l.anisotropy=pn.capabilities.getMaxAnisotropy();oe.gcol.colorSpace=Re;let i=ih=new Mn({map:oe.gcol,normalMap:oe.gnrm,roughnessMap:oe.grough,roughness:1,metalness:0,color:11840166,normalScale:new Ot(1.4,1.4)}),t=new he(new kn(160,160),i);t.rotation.x=-Math.PI/2,t.receiveShadow=!0,Gt.add(t),oe.sky.mapping=or,oe.sky.colorSpace=Re;let e=new Cs(pn);Gt.environment=e.fromEquirectangular(oe.sky).texture,Gt.environmentIntensity=1.6,e.dispose();let n=V0(42),s=(l,c)=>{let h=oe.props[l];if(!h)return;let u=new un(h.geometry,h.material,c.length),d=new Ct,f=new Fe,g=new Ze;c.forEach((x,m)=>{g.set(x.rx||0,x.ry||0,x.rz||0),d.compose(new T(x.x,x.y||0,x.z),f.setFromEuler(g),new T(x.s,x.s,x.s)),u.setMatrixAt(m,d),x.col&&H0.push({x:x.x,z:x.z,r:x.col*x.s})}),u.castShadow=!0,u.receiveShadow=!0,Gt.add(u)},r=(l,c,h,u)=>Array.from({length:l},(d,f)=>{let g=f/l*Math.PI*2+n()*.3,x=c+n()*(h-c);return u(Math.cos(g)*x,Math.sin(g)*x,n)}),a=(l,c)=>Array.from({length:l},()=>{let h,u;do h=(n()*2-1)*de*.9,u=(n()*2-1)*de*.9;while(Math.hypot(h,u)<8||Math.hypot(h,u)>de*.92);return c(h,u,n)});s("rock3",r(26,de+1,de+6,(l,c,h)=>({x:l,z:c,s:1.2+h()*1.3,ry:h()*6,col:1.8}))),s("rock1",[...r(30,de+3,de+14,(l,c,h)=>({x:l,z:c,s:1+h()*1.5,ry:h()*6})),...a(10,(l,c,h)=>({x:l,z:c,s:.7+h()*.7,ry:h()*6,col:1.1}))]),s("rock2",a(26,(l,c,h)=>({x:l,z:c,s:.4+h()*.6,ry:h()*6}))),s("tree4",r(12,de+2,de+12,(l,c,h)=>({x:l,z:c,s:1+h()*.6,ry:h()*6,rz:(h()-.5)*.2}))),s("tree9",[...r(12,de+4,de+16,(l,c,h)=>({x:l,z:c,s:1+h()*.7,ry:h()*6})),...a(4,(l,c,h)=>({x:l,z:c,s:.9+h()*.3,ry:h()*6,col:.4}))]),s("spear",a(70,(l,c,h)=>({x:l,z:c,s:1,ry:h()*6,rx:(h()-.5)*.9,rz:(h()-.5)*.9,y:-.3}))),s("banner",a(9,(l,c,h)=>({x:l,z:c,s:1,ry:h()*6,rz:(h()-.5)*.25,y:-.2}))),s("pillar",a(7,(l,c,h)=>({x:l,z:c,s:1+h()*.3,ry:h()*6,rz:(h()-.5)*.1,col:.6})));let o=new Mn({color:1182217,roughness:1});for(let l=0;l<18;l++){let c=l/18*Math.PI*2,h=new he(new Na(14+n()*10,12+n()*14,5),o);h.position.set(Math.cos(c)*85,3,Math.sin(c)*85),h.rotation.y=n()*6,Gt.add(h)}}function V0(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var sh=class{constructor(){this.dropMax=360;let t=new Ua(.045,0);this.dropMat=new Mn({color:3801602,roughness:.45,metalness:0,envMapIntensity:.25}),this.drops=new un(t,this.dropMat,this.dropMax),this.drops.frustumCulled=!1,this.drops.count=0,Gt.add(this.drops),this.dp=[],this.decMax=140;let e=new Zi(Wx());e.colorSpace=Re,this.decMat=new Mn({map:e,transparent:!0,depthWrite:!1,roughness:.6,metalness:0,envMapIntensity:.15,color:2753026,polygonOffset:!0,polygonOffsetFactor:-2});let n=new kn(1,1);n.rotateX(-Math.PI/2),this.decals=new un(n,this.decMat,this.decMax),this.decals.frustumCulled=!1,this.decals.count=0,this.decals.receiveShadow=!0,Gt.add(this.decals),this.dec=[],this.decI=0,this.sparkMax=220;let s=new kn(.12,.12);this.sparkMat=new We({color:16756848,transparent:!0,blending:Ri,depthWrite:!1,map:new Zi(qx())}),this.sparks=new un(s,this.sparkMat,this.sparkMax),this.sparks.frustumCulled=!1,this.sparks.count=0,Gt.add(this.sparks),this.sp=[],this.flMax=80,this.flMat=new We({color:16777215,transparent:!0,blending:Ri,depthWrite:!1,map:new Zi(Yx())}),this.flashMesh=new un(new kn(1,1),this.flMat,this.flMax),this.flashMesh.instanceColor=new ni(new Float32Array(this.flMax*3),3),this.flashMesh.frustumCulled=!1,this.flashMesh.count=0,Gt.add(this.flashMesh),this.fl=[],this.miMax=90,this.miMat=new We({color:5899782,transparent:!0,depthWrite:!1,opacity:.55,map:new Zi(Xx())}),this.mistMesh=new un(new kn(1,1),this.miMat,this.miMax),this.mistMesh.frustumCulled=!1,this.mistMesh.count=0,Gt.add(this.mistMesh),this.mi=[],this._rq=new Fe,this._fwd=new T(0,0,1),this.rings=[],this.ringGeo=new Oa(.8,1,48),this.ringGeo.rotateX(-Math.PI/2),this.trailN=14,this.trailGeo=new Ce,this.trailPos=new Float32Array(this.trailN*2*3),this.trailA=new Float32Array(this.trailN*2),this.trailGeo.setAttribute("position",new Ee(this.trailPos,3)),this.trailGeo.setAttribute("alpha",new Ee(this.trailA,1));let r=[];for(let a=0;a<this.trailN-1;a++){let o=a*2;r.push(o,o+1,o+2,o+1,o+3,o+2)}this.trailGeo.setIndex(r),this.trailMat=new yn({transparent:!0,depthWrite:!1,blending:Ri,side:ln,uniforms:{color:{value:new bt(16751200)}},vertexShader:"attribute float alpha; varying float vA; void main(){ vA = alpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 color; varying float vA; void main(){ gl_FragColor = vec4(color * vA, vA); }"}),this.trail=new he(this.trailGeo,this.trailMat),this.trail.frustumCulled=!1,Gt.add(this.trail),this.trailHist=[],this.trailOn=0,this.teleMat=new We({color:16722448,transparent:!0,opacity:.35,depthWrite:!1,blending:Ri}),this.tele=[],this.orbs=[],this.orbGeo=new Fa(.22,16,10),this.orbMat=new Mn({color:3145728,emissive:16724e3,emissiveIntensity:2.2,roughness:.2}),this._m=new Ct,this._q=new Fe,this._v=new T,this._s=new T}blood(t,e,n,s,r,a=14,o=1){for(let l=0;l<a;l++){this.dp.length>=this.dropMax&&this.dp.shift();let c=(2+Math.random()*4)*o;this.dp.push({x:t,y:e,z:n,vx:s*c+(Math.random()-.5)*3,vy:1.5+Math.random()*4*o,vz:r*c+(Math.random()-.5)*3,life:1.2,s:.6+Math.random()*1.4})}}hitFlash(t,e,n,s=!1,r=!1){let a=l=>{this.fl.length>=this.flMax&&this.fl.shift(),this.fl.push(l)},o=r?[1,.55,.3]:[1,.85,.7];a({x:t,y:e,z:n,w:s?2.2:1.5,h:s?2.2:1.5,rot:Math.random()*6,life:.14,max:.14,col:o}),a({x:t,y:e,z:n,w:s?4.2:3,h:.22,rot:Math.random()*6,life:.16,max:.16,col:[1,.95,.85]}),r&&a({x:t,y:e,z:n,w:3.4,h:.16,rot:Math.random()*6,life:.2,max:.2,col:[1,.4,.2]})}mist(t,e,n,s,r,a=3){for(let o=0;o<a;o++)this.mi.length>=this.miMax&&this.mi.shift(),this.mi.push({x:t+(Math.random()-.5)*.3,y:e+(Math.random()-.5)*.3,z:n+(Math.random()-.5)*.3,vx:s*(1+Math.random()*2),vy:.3+Math.random()*.6,vz:r*(1+Math.random()*2),life:.7,max:.7,s:.4+Math.random()*.4})}decal(t,e,n){let s=this.decI++%this.decMax;this.dec[s]={x:t,z:e,s:n,r:Math.random()*6,life:22}}spark(t,e,n,s=8,r){for(let a=0;a<s;a++)this.sp.length>=this.sparkMax&&this.sp.shift(),this.sp.push({x:t,y:e,z:n,vx:(Math.random()-.5)*9,vy:Math.random()*6,vz:(Math.random()-.5)*9,life:.35+Math.random()*.3,max:.6})}ember(t,e,n){this.sp.length>=this.sparkMax&&this.sp.shift(),this.sp.push({x:t+(Math.random()-.5)*.8,y:e+Math.random()*1.6,z:n+(Math.random()-.5)*.8,vx:Math.random()-.5,vy:1.5+Math.random()*2,vz:Math.random()-.5,life:.8,max:.8,g:-1})}ring(t,e,n,s=16744512,r=.45){let a=new he(this.ringGeo,new We({color:s,transparent:!0,blending:Ri,depthWrite:!1}));a.position.set(t,.05,e),Gt.add(a),this.rings.push({m:a,r:n,t:0,life:r})}telegraph(t,e,n,s){let r=new Da(1,40);r.rotateX(-Math.PI/2);let a=new he(r,this.teleMat.clone());a.position.set(t,.04,e),a.scale.setScalar(n),Gt.add(a);let o=new he(r,this.teleMat.clone());o.position.set(t,.05,e),o.scale.setScalar(.01),Gt.add(o),this.tele.push({m:a,inner:o,r:n,t:0,dur:s})}orb(t,e){let n=new he(this.orbGeo,this.orbMat);n.position.set(t,.5,e),Gt.add(n),this.orbs.push({m:n,x:t,z:e,t:0})}trailPush(t,e,n){this.trailHist.unshift([t.clone(),e.clone()]),this.trailHist.length>this.trailN&&this.trailHist.pop(),this.trailOn+=((n?1:0)-this.trailOn)*(n?.6:.25)}update(t){let{_m:e,_q:n,_v:s,_s:r}=this,a=0;for(let l=this.dp.length-1;l>=0;l--){let c=this.dp[l];if(c.vy-=18*t,c.x+=c.vx*t,c.y+=c.vy*t,c.z+=c.vz*t,c.life-=t,c.y<=.02){Math.random()<.35&&this.decal(c.x,c.z,.3+Math.random()*.6*c.s),this.dp.splice(l,1);continue}if(c.life<=0){this.dp.splice(l,1);continue}}for(let l of this.dp)r.set(l.s,l.s*(1+Math.abs(l.vy)*.15),l.s),e.compose(s.set(l.x,l.y,l.z),n.identity(),r),this.drops.setMatrixAt(a++,e);this.drops.count=a,this.drops.instanceMatrix.needsUpdate=!0,a=0;for(let l of this.dec){if(!l||l.life<=0)continue;l.life-=t;let c=l.s*Math.min(1,l.life/3);e.compose(s.set(l.x,.012+a%7*.0015,l.z),n.setFromAxisAngle(G0,l.r),r.set(c,1,c)),this.decals.setMatrixAt(a++,e)}this.decals.count=a,this.decals.instanceMatrix.needsUpdate=!0,a=0;for(let l=this.sp.length-1;l>=0;l--){let c=this.sp[l];if(c.life-=t,c.life<=0){this.sp.splice(l,1);continue}c.vy-=(c.g??14)*t,c.x+=c.vx*t,c.y+=c.vy*t,c.z+=c.vz*t}for(let l of this.sp){let c=Math.max(.05,l.life/l.max)*(l.g?.8:1.2);e.compose(s.set(l.x,l.y,l.z),Oe.quaternion,r.set(c,c,c)),this.sparks.setMatrixAt(a++,e)}this.sparks.count=a,this.sparks.instanceMatrix.needsUpdate=!0,a=0;for(let l=this.fl.length-1;l>=0;l--){let c=this.fl[l];c.life-=t,c.life<=0&&this.fl.splice(l,1)}for(let l of this.fl){let c=l.life/l.max,h=c*c;n.copy(Oe.quaternion).multiply(this._rq.setFromAxisAngle(this._fwd,l.rot)),e.compose(s.set(l.x,l.y,l.z),n,r.set(l.w*(.6+.4*(1-c)),l.h*(.5+.5*c),1)),this.flashMesh.setMatrixAt(a,e),this.flashMesh.instanceColor.setXYZ(a++,l.col[0]*h*2,l.col[1]*h*2,l.col[2]*h*2)}this.flashMesh.count=a,this.flashMesh.instanceMatrix.needsUpdate=!0,this.flashMesh.instanceColor.needsUpdate=!0,a=0;for(let l=this.mi.length-1;l>=0;l--){let c=this.mi[l];if(c.life-=t,c.life<=0){this.mi.splice(l,1);continue}c.x+=c.vx*t,c.y+=c.vy*t,c.z+=c.vz*t,c.vx*=.92,c.vz*=.92}for(let l of this.mi){let c=1-l.life/l.max,h=l.s*(1+c*2.2)*(1-c*.3);e.compose(s.set(l.x,l.y,l.z),Oe.quaternion,r.set(h,h,h)),this.mistMesh.setMatrixAt(a++,e)}this.mistMesh.count=a,this.mistMesh.instanceMatrix.needsUpdate=!0,this.miMat.opacity=.5;for(let l=this.rings.length-1;l>=0;l--){let c=this.rings[l];c.t+=t;let h=c.t/c.life;c.m.scale.setScalar(.3+c.r*Math.sqrt(h)),c.m.material.opacity=1-h,h>=1&&(Gt.remove(c.m),c.m.material.dispose(),this.rings.splice(l,1))}for(let l=this.tele.length-1;l>=0;l--){let c=this.tele[l];c.t+=t;let h=Math.min(1,c.t/c.dur);c.inner.scale.setScalar(Math.max(.01,c.r*h)),c.m.material.opacity=.18+.12*Math.sin(c.t*20),c.t>=c.dur&&(Gt.remove(c.m,c.inner),c.m.material.dispose(),c.inner.material.dispose(),this.tele.splice(l,1))}for(let l of this.orbs)l.t+=t,l.m.position.y=.45+Math.sin(l.t*4)*.12;let o=this.trailHist;for(let l=0;l<this.trailN;l++){let c=o[Math.min(l,o.length-1)];if(!c)break;this.trailPos.set([c[0].x,c[0].y,c[0].z],l*6),this.trailPos.set([c[1].x,c[1].y,c[1].z],l*6+3);let h=Math.pow(1-l/this.trailN,1.6)*this.trailOn;this.trailA[l*2]=0,this.trailA[l*2+1]=h*.55}this.trailGeo.attributes.position.needsUpdate=!0,this.trailGeo.attributes.alpha.needsUpdate=!0,this.trail.visible=this.trailOn>.02}clear(){this.fl.length=0,this.mi.length=0,this.dp.length=0,this.dec.length=0,this.sp.length=0,this.trailHist.length=0;for(let t of this.rings)Gt.remove(t.m);this.rings.length=0;for(let t of this.tele)Gt.remove(t.m,t.inner);this.tele.length=0;for(let t of this.orbs)Gt.remove(t.m);this.orbs.length=0}},G0=new T(0,1,0);function Wx(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=V0(7);t.fillStyle="#fff";for(let n=0;n<26;n++){let s=e()*6.28,r=e()*(n<6?10:46),a=n<6?22+e()*18:2+e()*8;t.globalAlpha=.7+e()*.3,t.beginPath(),t.ellipse(64+Math.cos(s)*r,64+Math.sin(s)*r,a,a*(.6+e()*.4),s,0,6.28),t.fill()}return i}function Yx(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.18,"rgba(255,230,200,0.9)"),e.addColorStop(.5,"rgba(255,140,60,0.25)"),e.addColorStop(1,"rgba(255,80,20,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),t.globalCompositeOperation="lighter";for(let[n,s]of[[128,10],[10,128]]){let r=t.createLinearGradient(64-n/2,64-s/2,64+n/2,64+s/2);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.5,"rgba(255,255,255,0.9)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(64-n/2,64-s/2,n,s)}return i}function Xx(){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.9)"),e.addColorStop(.5,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),i}function qx(){let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d"),e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,200,140,0.6)"),e.addColorStop(1,"rgba(255,120,40,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),i}var Ue=new Ka(Rt("#stick-zone"),{attack:Rt("#btn-attack"),heavy:Rt("#btn-heavy"),dodge:Rt("#btn-dodge"),rage:Rt("#btn-rage")}),Wt=new $a,At,ui,z,J,H={substeps:1,stageIdx:0,introT:0,state:"loading",time:0,ko:0,combo:0,maxCombo:0,comboT:0,hitstop:0,shake:0,slowmo:1,waveIdx:-1,spawnLeft:0,alive:0,waveDelay:0,result:null},Hs=[{name:"\u7B2C\u4E00\u6226\u5834",place:"\u4EA1\u8005\u306E\u8352\u91CE",boss:{name:"\u89D2\u306E\u9B54\u9A0E\u58EB",hp:3200,speed:1,dmg:1,tint:[1,1,1],enrage:!1},env:{fog:3811878,density:.018,sky:12102320,gnd:4864560,hemi:1.7,sun:16763046,sunI:3.4,ground:12892852,envI:2,rim:10135295,fill:1.6},waves:[{label:"\u7B2C\u4E00\u6CE2",sub:"\u4EA1\u8005\u306E\u7FA4\u308C\u3092\u65AC\u308A\u6255\u3048",total:40,max:22,mix:{grunt:1},rate:.35},{label:"\u7B2C\u4E8C\u6CE2",sub:"\u91CD\u88C5\u306E\u4EA1\u8005\u304C\u6DF7\u3058\u3063\u3066\u3044\u308B",total:60,max:28,mix:{grunt:.86,brute:.14},rate:.28},{label:"\u7B2C\u4E09\u6CE2",sub:"\u6226\u5834\u304C\u4EA1\u8005\u3067\u57CB\u3081\u5C3D\u304F\u3055\u308C\u308B",total:80,max:34,mix:{grunt:.78,brute:.22},rate:.22},{label:"\u6C7A\u6226",sub:"\u89D2\u306E\u9B54\u9A0E\u58EB\u3092\u8A0E\u3066",total:9999,max:12,mix:{grunt:.8,brute:.2},rate:1.2,boss:!0}]},{name:"\u7B2C\u4E8C\u6226\u5834",place:"\u7070\u306E\u57CE\u585E\u8DE1",boss:{name:"\u7070\u306E\u51E6\u5211\u4EBA",hp:4600,speed:1.22,dmg:1.15,tint:[.62,.7,.85],enrage:!1},env:{fog:2634304,density:.02,sky:11188436,gnd:3422790,hemi:1.8,sun:12570623,sunI:3,ground:10923708,envI:1.7,rim:16756864,fill:1.8},waves:[{label:"\u7B2C\u4E00\u6CE2",sub:"\u69CD\u3092\u69CB\u3048\u305F\u4EA1\u8005\u304C\u99C6\u3051\u3066\u304F\u308B",total:55,max:26,mix:{grunt:.6,lancer:.4},rate:.3},{label:"\u7B2C\u4E8C\u6CE2",sub:"\u91CD\u88C5\u306E\u4EA1\u8005\u304C\u968A\u5217\u3092\u7D44\u3080",total:75,max:30,mix:{grunt:.45,lancer:.3,brute:.25},rate:.25},{label:"\u7B2C\u4E09\u6CE2",sub:"\u57CE\u585E\u306E\u6B8B\u5175\u304C\u3059\u3079\u3066\u62BC\u3057\u5BC4\u305B\u308B",total:95,max:36,mix:{grunt:.4,lancer:.35,brute:.25},rate:.2},{label:"\u6C7A\u6226",sub:"\u7070\u306E\u51E6\u5211\u4EBA\u3092\u8A0E\u3066",total:9999,max:14,mix:{grunt:.5,lancer:.5},rate:1,boss:!0}]},{name:"\u7B2C\u4E09\u6226\u5834",place:"\u8840\u306E\u6CBC\u5730",boss:{name:"\u53CC\u89D2\u306E\u9B54\u5C06",hp:6200,speed:1.3,dmg:1.3,tint:[1,.5,.45],enrage:!0},env:{fog:4856342,density:.021,sky:13145232,gnd:4858912,hemi:1.8,sun:16751230,sunI:3.2,ground:11569794,envI:1.8,rim:16732208,fill:1.8},waves:[{label:"\u7B2C\u4E00\u6CE2",sub:"\u6CBC\u304B\u3089\u4EA1\u8005\u304C\u9019\u3044\u4E0A\u304C\u308B",total:70,max:30,mix:{grunt:.55,lancer:.3,brute:.15},rate:.26},{label:"\u7B2C\u4E8C\u6CE2",sub:"\u91CD\u88C5\u306E\u4EA1\u8005\u304C\u7FA4\u308C\u3092\u306A\u3059",total:90,max:34,mix:{grunt:.35,lancer:.3,brute:.35},rate:.22},{label:"\u7B2C\u4E09\u6CE2",sub:"\u6700\u5F8C\u306E\u8ECD\u52E2\u304C\u62BC\u3057\u5BC4\u305B\u308B",total:120,max:40,mix:{grunt:.4,lancer:.35,brute:.25},rate:.18},{label:"\u6C7A\u6226",sub:"\u53CC\u89D2\u306E\u9B54\u5C06\u3092\u8A0E\u3066",total:9999,max:16,mix:{grunt:.4,lancer:.4,brute:.2},rate:.9,boss:!0}]},{name:"\u7B2C\u56DB\u6226\u5834",place:"\u51CD\u3066\u3064\u304F\u5CE0",boss:{name:"\u9396\u65A7\u306E\u5DE8\u4EBA",hp:8200,speed:1.3,dmg:1.4,tint:[.72,.86,.95],scale:2.6,enrage:!1,attacks:["cleave","slam","charge","combo","leap"]},env:{fog:3819090,density:.019,sky:13162214,gnd:4608606,hemi:1.9,sun:15003391,sunI:3.3,ground:13818080,envI:1.9,rim:8433919,fill:1.8},waves:[{label:"\u7B2C\u4E00\u6CE2",sub:"\u9ED2\u9244\u306E\u9A0E\u58EB\u304C\u5CE0\u3092\u585E\u3050",total:70,max:30,mix:{grunt:.55,lancer:.25,knight:.2},rate:.26},{label:"\u7B2C\u4E8C\u6CE2",sub:"\u9A0E\u58EB\u3068\u91CD\u88C5\u306E\u4EA1\u8005\u304C\u62BC\u3057\u5BC4\u305B\u308B",total:95,max:34,mix:{grunt:.35,lancer:.25,brute:.15,knight:.25},rate:.22},{label:"\u7B2C\u4E09\u6CE2",sub:"\u5439\u96EA\u306E\u4E2D\u304B\u3089\u8ECD\u52E2\u304C\u6E67\u304D\u51FA\u308B",total:120,max:40,mix:{grunt:.35,lancer:.25,brute:.15,knight:.25},rate:.18},{label:"\u6C7A\u6226",sub:"\u9396\u65A7\u306E\u5DE8\u4EBA\u3092\u8A0E\u3066",total:9999,max:14,mix:{grunt:.5,knight:.3,lancer:.2},rate:1,boss:!0}]},{name:"\u6700\u7D42\u6226\u5834",place:"\u9ED2\u9244\u306E\u9B54\u57CE",boss:{name:"\u9ED2\u9244\u306E\u9B54\u738B",hp:10800,speed:1.36,dmg:1.5,tint:[.52,.46,.58],scale:2.85,enrage:!0,glow:[.07,0,.03],attacks:["cleave","slam","charge","combo","leap","sweep"]},env:{fog:3154490,density:.02,sky:12232396,gnd:3944004,hemi:1.85,sun:16762024,sunI:3.3,ground:11839672,envI:1.8,rim:16728160,fill:1.9},waves:[{label:"\u7B2C\u4E00\u6CE2",sub:"\u9B54\u57CE\u306E\u9580\u3092\u5B88\u308B\u4EA1\u8005\u3092\u65AC\u308C",total:80,max:32,mix:{grunt:.45,lancer:.25,brute:.1,knight:.2},rate:.24},{label:"\u7B2C\u4E8C\u6CE2",sub:"\u8FD1\u885B\u306E\u9A0E\u58EB\u304C\u968A\u5217\u3092\u7D44\u3080",total:105,max:36,mix:{grunt:.3,lancer:.25,brute:.15,knight:.3},rate:.2},{label:"\u7B2C\u4E09\u6CE2",sub:"\u9B54\u57CE\u306E\u5168\u8ECD\u304C\u62BC\u3057\u5BC4\u305B\u308B",total:140,max:42,mix:{grunt:.3,lancer:.25,brute:.2,knight:.25},rate:.16},{label:"\u6C7A\u6226",sub:"\u9ED2\u9244\u306E\u9B54\u738B\u3092\u8A0E\u3066",total:9999,max:16,mix:{grunt:.4,knight:.35,lancer:.25},rate:.9,boss:!0}]}],Ui=()=>Hs[H.stageIdx],lo=()=>Ui().waves[H.waveIdx];function Zx(i){let t=Math.random(),e="grunt";for(let[n,s]of Object.entries(i))if(e=n,(t-=s)<=0)return n;return e}var Bn={grunt:{hp:40,speed:3.1,dmg:45,range:1.65,wind:.62,scale:.97,radius:.42,weapon:"gsword",armor:!1,color:new bt(1,1,1)},brute:{hp:190,speed:2.3,dmg:85,range:2.2,wind:.9,scale:1.38,radius:.6,weapon:"club",armor:!0,color:new bt(.72,.62,.58),exp:5},lancer:{hp:32,speed:4.3,dmg:55,range:2.7,wind:.5,scale:.95,radius:.42,weapon:"spear",armor:!1,color:new bt(.74,.8,.92),lunge:7,exp:2},knight:{hp:120,speed:3.6,dmg:70,range:1.95,wind:.5,scale:1.12,radius:.48,weapon:"gsword",armor:!0,color:new bt(.46,.48,.56),exp:4}};Bn.grunt.exp=1;var Se=[];function Kx(){let i=z0(oe.hero,oe.skel),t=oe.hero.torso.material.clone();t.color.setRGB(.78,.8,.86),t.envMapIntensity=.9,t.metalness=.75,t.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
  roughnessFactor = clamp(roughnessFactor * 1.25 + 0.18, 0.0, 1.0);`)},i.root.traverse(s=>{s.isMesh&&(s.material=t)});let e=new he(oe.sword.sword.geometry,oe.sword.sword.material);e.castShadow=!0,e.rotation.set(Math.PI/2,Math.PI/2,0),e.position.set(0,-.085,0),i.j.handR.add(e);let n={standard:{mesh:e,blade:T0}};for(let s of Ja){let r=s.make();r.position.copy(e.position),r.rotation.copy(e.rotation),r.visible=!1,i.j.handR.add(r),n[s.id]={mesh:r,blade:s.blade}}return Gt.add(i.root),{rig:i,mat:t,sword:e,weapons:n,blade:T0,x:0,z:0,vx:0,vz:0,face:0,hp:1e3,maxHp:1e3,hpLag:1e3,rage:0,rageT:0,act:null,queued:null,iframe:0,phase:0,speedAmt:0,pose:{},target:{},lastBase:new T,lastTip:new T,base:new T,tip:new T,attackId:0,dead:!1,level:1,exp:0,comboIdx:0,spinLoops:0}}function W0(){let i=oe.boss.torso.material.clone();i.envMapIntensity=1.5;let t=z0(oe.boss,oe.skel,{material:i}),e=new he(oe.weapons.bossaxe.geometry,oe.weapons.bossaxe.material);return e.castShadow=!0,e.rotation.x=Math.PI/2,e.position.set(0,-.085,0),t.j.handR.add(e),t.root.scale.setScalar(2.3),Gt.add(t.root),{rig:t,axe:e,mat:i,speed:1,dmgMul:1,enraged:!1,x:0,z:30,face:Math.PI,hp:3200,maxHp:3200,state:"roar",t:0,phase:0,poise:0,pose:{},target:{},cd:2,lastHit:-1,dead:!1,deadT:0,hitDone:!1,tx:0,tz:0,y:0,scale:2.3,attacks:new Set(["cleave","slam","charge"]),strikeIn:null,glinted:!1,hitN:0}}var Jc=new T,io=new T,T0={hilt:new T(0,.45,0),trail:new T(0,1.15,0),tip:new T(0,2.1,0)};function $e(i){let t=z,e=rt[i];i!=="SPIN_LOOP"&&i!=="SPIN_OUT"&&(t.pose.rootYaw=Ir(t.pose.rootYaw||0),t.pose.rootPitch=Ir(t.pose.rootPitch||0)),t.act={name:i,t:0,def:e,hitDone:!1,swung:!1,startT:H.time},t.attackId++;let n=t.aimNext!==!1;if(t.aimNext=!0,n&&e.type&&i!=="SPIN_LOOP"&&i!=="SPIN_OUT"){let[s,r]=Ue.move();if(Math.hypot(s,r)>.2)t.face=Math.atan2(-s,r);else{let a=null,o=6;for(let l of Se)if(!l.dead){let c=Math.hypot(l.x-t.x,l.z-t.z);c<o&&(o=c,a=l)}if(J&&!J.dead&&J.state!=="hidden"){let l=Math.hypot(J.x-t.x,J.z-t.z);l<7&&l<o+2&&(a=J)}a&&(t.face=Math.atan2(a.x-t.x,a.z-t.z))}}if(i==="DODGE"){let[s,r]=Ue.move();Math.hypot(s,r)>.2&&(t.face=Math.atan2(-s,r)),t.iframe=e.iframes[1],Wt.play("dodge")}}function rh(){let i=z.level;return z.rageT>0?[["L1","L1B","LOWSWEEP","CROSS"],["RFLIP","WHEEL"],["L2","XCUT","REVSPIN","L2B"],["RSPIN2","SPIN1"],...i>=3?[["L4","SPIN1","REVSPIN"]]:[],...i>=5?[["RFLIP"]]:[],["RLEAP"]]:[["L1","L1B","VCUT","LOWSWEEP","CROSS"],["L2","XCUT","SPIN1","REVSPIN","BACKCUT","L2B"],["L3","VCUT","STAB","SHOULDER","WHEEL","DRAG"],...i>=2?[["L4","SPIN1","REVSPIN","L1B","CROSS2"]]:[],...i>=4?[["L5","XCUT","LOWSWEEP","DRAG","L2B"]]:[],...i>=6?[["L6","VAULT"]]:[]]}function ah(i,t){let e=i.filter(s=>s!==t),n=e.length?e:i;return n[Math.floor(Math.random()*n.length)]}function oh(){let[i,t]=Ue.move();if(Math.hypot(i,t)<.3)return null;let e=Je(z.face,Math.atan2(-i,t),1)-z.face;return Math.abs(e)<.8?"fwd":Math.abs(e)>2.3?"back":e<0?"right":"left"}function lh(i,t=oh()){if(z.aimNext=!0,!i)return z.comboIdx=0,z.lightCount=1,t?"DASH":ah(rh()[0],null);if(z.lightCount=(z.lightCount||0)+1,t==="back")return"UPPER";if(t==="left"||t==="right")return t==="left"?"CROSS":"CROSS2";let e=rh();return z.comboIdx=(z.comboIdx+1)%e.length,ah(e[z.comboIdx],i)}var Y0={1:["UPPER","DRAG"],2:["FIN2"],3:["RSPIN2","REVSPIN"],4:["L5"],5:["RLEAP","VAULT"]},ro=10,ch=i=>14+i*10,X0=()=>1+.07*(z.level-1),$x={2:"\u9023\u6483\u304C4\u6BB5\u306B\uFF08\u56DE\u8EE2\u8FD4\u3057\u65AC\u308A\uFF09",3:"\u899A\u9192\u9023\u6483\u306B\u56DE\u8EE2\u8FD4\u3057\u65AC\u308A\u304C\u52A0\u308F\u308B",4:"\u9023\u6483\u304C5\u6BB5\u306B\uFF08\u4E8C\u6BB5\u7A81\u304D\uFF09",5:"\u899A\u9192\u9023\u6483\u306B\u7E26\u56DE\u8EE2\u65AC\u308A\u304C\u3082\u3046\u4E00\u5EA6\u52A0\u308F\u308B",6:"\u9023\u6483\u304C6\u6BB5\u306B\uFF08\u5927\u8DF3\u8E8D\u53E9\u304D\u3064\u3051\uFF09"};function fh(i){let t=z;if(!(t.level>=ro)){for(t.exp+=i;t.level<ro&&t.exp>=ch(t.level);){t.exp-=ch(t.level),t.level++,t.maxHp+=90,t.hp=Math.min(t.maxHp,t.hp+90+t.maxHp*.25);let e=$x[t.level]||"\u653B\u6483\u529B\u3068\u4F53\u529B\u304C\u4E0A\u304C\u3063\u305F\u30FB\u56DE\u8EE2\u65AC\u308A\u306E\u56DE\u8EE2\u6570\u304C\u5897\u3048\u305F";Jx(t.level,e),Wt.play("heal"),At.ring(t.x,t.z,3,16765056,.6)}t.level>=ro&&(t.exp=0)}}var L0=0;function Jx(i,t){let e=Rt("#levelup");Rt("#lu-lv").textContent=`Lv ${i}`,Rt("#lu-perk").textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show"),clearTimeout(L0),L0=setTimeout(()=>e.classList.remove("show"),2600)}function Ir(i){return((i+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI}function jx(){return z.rageT>0?1.35:1}var q0={SPIN:"rootYaw",SPIN_LOOP:"rootYaw",L4:"rootYaw",SPIN1:"rootYaw",REVSPIN:"rootYaw",RSPIN2:"rootYaw",SPIN_IN:"rootYaw",RFLIP:"rootPitch",WHEEL:"rootPitch"},Qx=new Set(["SPIN_IN","SPIN_LOOP"]),t_=3;function e_(i){let t=z;if(t.dead){t.act.t+=i,to(t.act.def.keys,t.act.t,t.target),Fs(t.pose,t.target,Math.min(1,i*14)),zs(t.rig,t.pose);return}t.iframe=Math.max(0,t.iframe-i),t.rageT>0&&(t.rageT-=i,t.mat.emissive.setRGB(.1+.05*Math.sin(H.time*12),.008,0),Ar.intensity=14+Math.sin(H.time*20)*4,Math.random()<.9&&At.ember(t.x,.2,t.z),t.rageT<=0&&(t.mat.emissive.setRGB(0,0,0),Ar.intensity=0));let e=!1;Ue.consume("rage")&&!e&&t.rage>=100&&t.rageT<=0&&(!t.act||t.act.name!=="RAGE")&&(t.rage=0,t.rageT=12,$e("RAGE"),Wt.play("rage"),H.shake=.8);let n=Ue.consume("attack")||Ue.held.has("attack")&&!t.act,s=Ue.consume("heavy"),r=Ue.consume("dodge"),a=t.act,o=a&&a.name==="CLASH",l=!o&&n&&!r&&(!a||a.name==="HURT"||a.def.type&&!a.name.startsWith("MIKIRI")&&a.t>(a.def.active?.[1]??0))?$0():null;l?d_(l):o||(r&&!e&&(!a||a.name!=="DODGE"&&a.name!=="RAGE"&&(a.name==="HURT"||a.t>(a.def.active?.[1]??0)))?$e("DODGE"):a?a.name==="DODGE"?n&&(a.queued="counter"):a.def.type&&(n&&(a.queued="light",a.queuedDir=oh()),s&&(a.queued="heavy"),Ue.held.has("attack")&&!a.queued&&a.t>a.def.active[1]&&(a.queued="light",a.queuedDir=oh())):s?(t.charge=0,t.chargeLv=0,$e("CHARGE")):n&&$e(lh(null)));let c=jx(),[h,u]=Ue.move(),d=Math.hypot(h,u),f,g=!1;if(t.act){let v=t.act,M=v.def;if(f=q0[v.name],v.t+=i*(M.type?c:1),to(M.keys,v.t,t.target),M.mikiri&&f_(v),M.clash&&u_(v),!e&&!g&&M.lunge&&v.t>=M.lunge[0]&&v.t<=M.lunge[1]){let _=M.lunge[2];t.x+=Math.sin(t.face)*_*i*(M.type?c:1),t.z+=Math.cos(t.face)*_*i*(M.type?c:1)}if(M.sound&&!v.swung&&v.t>=M.active[0]-.06&&(v.swung=!0,Wt.play(M.sound)),M.multi&&!v.multiDone&&v.t>(M.active[0]+M.active[1])/2&&(v.multiDone=!0,t.attackId++),v.name==="SPIN_LOOP"&&!e&&!g&&d>.2){let _=Math.atan2(-h,u);t.x+=Math.sin(_)*3.5*i,t.z+=Math.cos(_)*3.5*i}if(!(e||g))if(v.name==="CHARGE"){t.charge+=i;let _=t.charge>=2?3:t.charge>=1.2?2:t.charge>=.5?1:0;_>t.chargeLv&&(t.chargeLv=_,Wt.play("clang",.5+_*.2),At.ring(t.x,t.z,1.2+_*.7,_===3?16728096:16756848,.4),At.spark(t.tip.x,t.tip.y,t.tip.z,6+_*4)),t.chargeLv>0&&Math.random()<.3*t.chargeLv&&At.ember(t.x,.1,t.z),t.mat.emissive.setRGB(.04*t.chargeLv*(.7+.3*Math.sin(H.time*30)),.012*t.chargeLv,0),(!Ue.held.has("heavy")||t.charge>3.5)&&(t.spinTarget=1,t.chargeMul=1+.25*t.chargeLv,t.spinLoops=0,t.rageT<=0&&t.mat.emissive.setRGB(0,0,0),$e("SPIN_IN"))}else if(v.name==="SPIN_IN"&&v.t>=M.dur)$e("SPIN_LOOP");else if(v.name==="SPIN_LOOP"&&v.t>=M.dur)t.pose.rootYaw=t.target.rootYaw=0,t.spinLoops++,$e(t.spinLoops<(t.spinTarget||1)?"SPIN_LOOP":"SPIN_OUT");else if(M.type&&v.t>=M.chainAt&&v.queued)if(v.queued==="heavy"){let _=t.lightCount||0;_<=0?(t.charge=0,t.chargeLv=0,$e("CHARGE")):($e(ah(Y0[Math.min(_,5)],null)),t.lightCount=0)}else $e(lh(v.name,v.queuedDir));else v.t>=M.dur&&v.queued==="counter"?(t.lightCount=1,$e("L4")):v.t>=M.dur&&(t.act=null,t.pose.rootYaw=Ir(t.pose.rootYaw||0),t.pose.rootPitch=Ir(t.pose.rootPitch||0))}if(!t.act){if(d>.05){let v=Math.atan2(-h,u);t.face=Je(t.face,v,Math.min(1,i*14));let M=7*d*(t.rageT>0?1.2:1);t.x+=Math.sin(v)*M*i,t.z+=Math.cos(v)*M*i}t.speedAmt+=((d>.05?1:0)-t.speedAmt)*Math.min(1,i*10),t.phase+=i*(6+5*d),Er(t.phase,t.speedAmt,t.target),t.speedAmt<.5&&(t.target.torso[0]+=Math.sin(H.time*2)*.02)}!e&&!g&&ph(t,.45);let x=Math.hypot(t.x,t.z);x>de&&(t.x*=de/x,t.z*=de/x),e||Fs(t.pose,t.target,Math.min(1,i*30)),f&&t.act&&(t.pose[f]=t.target[f]||0),zs(t.rig,t.pose),t.rig.root.position.set(t.x,0,t.z),t.rig.root.rotation.y=t.face,t.rig.root.updateMatrixWorld(!0),t.lastBase.copy(t.base),t.lastTip.copy(t.tip),t.base.copy(t.blade.hilt),t.sword.localToWorld(t.base),t.tip.copy(t.blade.tip),t.sword.localToWorld(t.tip);let m=t.act,p=!e&&m&&m.def.type&&m.t>=m.def.active[0]-.05&&m.t<=m.def.active[1]+.05;Jc.copy(t.blade.trail),t.sword.localToWorld(Jc),At.trailPush(Jc,t.tip,p),!e&&m&&m.def.ground&&t.tip.y<.25&&Math.random()<.7&&At.spark(t.tip.x,.05,t.tip.z,3),!e&&m&&m.def.type&&m.t>=m.def.active[0]&&m.t<=m.def.active[1]&&i_(m),m&&m.def.impact&&!m.hitDone&&m.t>=m.def.impact&&(m.hitDone=!0,s_(m));for(let v=At.orbs.length-1;v>=0;v--){let M=At.orbs[v];Math.hypot(M.x-t.x,M.z-t.z)<1.3&&(t.hp=Math.min(t.maxHp,t.hp+150),Wt.play("heal"),At.spark(M.x,.6,M.z,10),Gt.remove(M.m),At.orbs.splice(v,1))}Ar.position.set(t.x,1.4,t.z)}function Je(i,t,e){let n=((t-i+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return i+n*e}function ph(i,t){for(let e of H0){let n=i.x-e.x,s=i.z-e.z,r=Math.hypot(n,s),a=e.r+t;r<a&&r>1e-4&&(i.x=e.x+n/r*a,i.z=e.z+s/r*a)}}function n_(i,t,e,n,s,r){let a=s-e,o=r-n,l=a*a+o*o,c=l?((i-e)*a+(t-n)*o)/l:0;return c=Math.max(0,Math.min(1,c)),Math.hypot(i-(e+a*c),t-(n+o*c))}function C0(i,t,e,n=0,s=2){let r=z;for(let a=0;a<=4;a++){let o=a/4,l=r.lastBase.x+(r.base.x-r.lastBase.x)*o,c=r.lastBase.z+(r.base.z-r.lastBase.z)*o,h=r.lastTip.x+(r.tip.x-r.lastTip.x)*o,u=r.lastTip.z+(r.tip.z-r.lastTip.z)*o,d=r.lastTip.y+(r.tip.y-r.lastTip.y)*o,f=r.lastBase.y+(r.base.y-r.lastBase.y)*o;if(!(Math.max(f,d)<n-.4||Math.min(f,d)>s+.4)&&n_(i,t,l,c,h,u)<e)return!0}return!1}function i_(i){if(i.def.clash)return;let t=i.def,e=z,n=(e.rageT>0?1.6:1)*X0()*(i.name==="SPIN_LOOP"&&e.chargeMul||1),s=!!q0[i.name],r=t.kb*(s?1.6:1)*(Qx.has(i.name)?t_*(1+.05*(e.chargeLv||0)):1),a=s?1.5:0,o=!1,l=(c,h,u)=>{if(!t.body)return!1;let d=c-e.x,f=h-e.z;return Math.hypot(d,f)<t.body+u&&(t.bodyAll||Math.abs(Je(e.face,Math.atan2(d,f),1)-e.face)<1.1)};for(let c of Se){if(c.dead||c.lastHit===e.attackId)continue;let h=Bn[c.type];if(l(c.x,c.z,h.radius)){c.lastHit=e.attackId,o=!0,ao(c,t.dmg*n,r,t.up||0,!0,void 0,void 0,a);continue}C0(c.x,c.z,h.radius+.25+(t.reach||0),c.y,c.y+1.8*h.scale)&&(c.lastHit=e.attackId,o=!0,ao(c,t.dmg*n,r,t.up||0,!!t.heavy,void 0,void 0,a))}if(J&&!J.dead&&J.state!=="hidden"&&(J.y||0)<1.5&&J.lastHit!==e.attackId&&C0(J.x,J.z,c_()+(t.mikiri?.6:0),0,4)){J.lastHit=e.attackId,o=!0;let c=J.state==="parried"||J.state==="stagger";ed(t.dmg*n*(t.mikiri?2.5:c?1.5:1)),t.mikiri&&!J.dead&&(ae("stagger"),J.poise=0,H.mikiriHits=(H.mikiriHits||0)+1,H.hitstop=Math.max(H.hitstop,.12),H.slowmo=Math.min(H.slowmo,.3),H.shake=Math.max(H.shake,.7),At.hitFlash(J.x,2.2*Ws()/2.3,J.z,!0,!0),At.spark(J.x,2,J.z,30),xh("\u898B\u5207\u308A","#ffd27a"))}o&&(H.hitstop=Math.max(H.hitstop,i.name==="SPIN_LOOP"||i.name==="RSPIN2"||i.name==="SPIN1"||i.name==="L4"?.025:.055),Wt.play("hit"))}function s_(i){let t=i.def,e=z,n=(e.rageT>0?1.6:1)*X0(),s=i.name==="RAGE"?e.x:e.tip.x,r=i.name==="RAGE"?e.z:e.tip.z;At.ring(s,r,t.radius*1.2,i.name==="RAGE"?16723984:16752736,.5),At.spark(s,.2,r,26),H.shake=Math.max(H.shake,i.name==="RAGE"?1:.55),Wt.play("slam");for(let a of Se){if(a.dead)continue;let o=Math.hypot(a.x-s,a.z-r);o<t.radius+Bn[a.type].radius&&a.lastHit!==e.attackId+.5&&(a.lastHit=e.attackId+.5,ao(a,t.dmg*n*(1-o/(t.radius*2)),t.kb,t.up,!0,s,r))}J&&!J.dead&&J.state!=="hidden"&&Math.hypot(J.x-s,J.z-r)<t.radius+1.2&&ed(t.dmg*n*.8)}function Z0(){H.combo++,H.comboT=2.6,H.maxCombo=Math.max(H.maxCombo,H.combo),z.rageT<=0&&(z.rage=Math.min(100,z.rage+1.4))}function ao(i,t,e,n,s,r,a,o=0){let l=Bn[i.type];i.hp-=t,Z0();let c=r??z.x,h=a??z.z,u=i.x-c,d=i.z-h,f=Math.hypot(u,d)||1;u/=f,d/=f;let g=l.armor&&!s?.3:1,x=i.hp<=0,m=e*g*(x?2.6:1.7);i.vx+=u*m,i.vz+=d*m;let p=i.y+1.1*l.scale,v=i.x-u*.35,M=i.z-d*.35;At.hitFlash(v,p,M,s,x),At.blood(v,p,M,u,d,x?30:s?22:14,x?1.6:1.2),At.mist(v,p,M,u,d,x?5:3),At.spark(v,p,M,s?10:5),At.decal(i.x+u*.6,i.z+d*.6,1+Math.random()*1),x?(i.dead=!0,i.state="dead",i.t=0,i.vy=Math.max(i.vy,0)+(n||3)+o+4+Math.random()*4*(s?1.5:1),i.tumble=(Math.random()<.5?-1:1)*(6+Math.random()*8),i.tumbleA=0,i.spin=(Math.random()-.5)*10,H.ko++,fh(l.exp||1),H.shake=Math.max(H.shake,s?.35:.2),i.face=Math.atan2(-u,-d),Math.random()<(i.type==="brute"?.4:.06)&&At.orb(i.x,i.z)):(!l.armor||s)&&(i.state="hit",i.t=0,i.vy=Math.max(i.vy,(n?n*.8:0)+o+(s?3.5:1.8)))}var r_=new Set(["SPIN_IN","SPIN_LOOP","SPIN_OUT","L4","SPIN1","RSPIN2","REVSPIN"]);function mh(i,t,e){let n=z;if(n.iframe>0||n.dead||H.state!=="play"||n.act&&r_.has(n.act.name))return;n.hp-=i*(n.rageT>0?.6:1),n.iframe=.6,Wt.play("hurt"),H.shake=Math.max(H.shake,.35),Pt.hurt.classList.remove("on"),Pt.hurt.offsetWidth,Pt.hurt.classList.add("on");let s=n.x-t,r=n.z-e,a=Math.hypot(s,r)||1;if(At.blood(n.x,1.2,n.z,s/a,r/a,8,.7),n.hp<=0){n.hp=0,n.dead=!0,n.act={name:"DEATH",t:0,def:rt.DEATH},H.slowmo=.35,setTimeout(()=>rd(!1),1800);return}if(n.act&&n.act.name==="CHARGE"){H.shake=Math.max(H.shake,.25);return}n.rageT<=0&&(!n.act||n.act.name!=="RAGE")&&$e("HURT")}var K0=.4,a_=.55,o_=.5,l_=new Set(["CHARGE","HURT","DODGE","RAGE","DEATH","MIKIRI_L","MIKIRI_R","MIKIRI_B","CLASH"]),Ws=()=>J?.scale||2.3,c_=()=>1.2*Ws()/2.3;function gh(i,t){let e=rt[i];return{...e,mikiri:!0,lunge:void 0,multi:!1,lead:t,dur:e.dur+t,active:[e.active[0]+t,e.active[1]+t],chainAt:e.dur+t,dmg:64,kb:7,iframes:[0,t+.35],keys:[[0,rt.DODGE.keys[1]?.[1]||e.keys[0][1]],[t*.85,e.keys[0][1],"out"],...e.keys.slice(1).map(([n,s,r])=>[n+t,s,r])]}}rt.MIKIRI_L=gh("L2",.26);rt.MIKIRI_R=gh("L1",.26);rt.MIKIRI_B=gh("XCUT",.32);var nn=.36,Ni=4;rt.CLASH=(()=>{let i=[];for(let t=0;t<Ni;t++){let e=rt[t%2?"L2":"L1"],n=nn/e.dur;for(let[s,r,a]of e.keys)s<=.3&&i.push([t*nn+s*n+(i.length?.001:0),r,a])}return i.push([Ni*nn+.3,wt.idle,"io"]),{dur:Ni*nn+.3,keys:i,type:"sweep",clash:!0,active:[0,Ni*nn],chainAt:99,dmg:0,kb:0}})();var hi=rt.L1.active.reduce((i,t)=>i+t)/2*(nn/rt.L1.dur);function h_(){let i=z,t=J;$e("CLASH"),i.act.beat=0,i.iframe=rt.CLASH.dur+.3,i.act.a0=Math.atan2(i.x-t.x,i.z-t.z),i.act.a1=Math.sin(i.act.a0)>=0?Math.PI/2:-Math.PI/2,i.face=Math.atan2(t.x-i.x,t.z-i.z),t.face=Math.atan2(i.x-t.x,i.z-t.z),ae("clash"),xh("\u9354\u8FEB\u308A\u5408\u3044","#fff2c8")}function u_(i){let t=z,e=J;if(!e||e.dead||e.state!=="clash"){t.act.t=Math.max(t.act.t,Ni*nn);return}let n=Math.min(Ni-1,Math.floor(i.t/nn)),s=i.t-n*nn,r=2.7*Ws()/2.3+(s<hi?.25-.4*(s/hi):-.15+.4*((s-hi)/(nn-hi))),a=Math.min(1,i.t/.3),o=Je(i.a0,i.a1,a*a*(3-2*a));if(t.x=e.x+Math.sin(o)*r,t.z=e.z+Math.cos(o)*r,t.face=Math.atan2(e.x-t.x,e.z-t.z),e.face=o,i.beat<Ni&&i.t>=i.beat*nn+hi){let l=i.beat===Ni-1;i.beat++;let c=t.x+Math.sin(t.face)*1.5,h=t.z+Math.cos(t.face)*1.5,u=1.5+.3*(i.beat%2);At.hitFlash(c,u,h,!0,!1),At.spark(c,u,h,l?50:26),l&&(At.hitFlash(c,u,h,!0,!1),At.ring(c,h,3.4,16773312,.45)),Wt.play(l?"parry":"clang",l?1:.9),H.hitstop=Math.max(H.hitstop,l?.14:.06),H.shake=Math.max(H.shake,l?.8:.4),H.clashHits=(H.clashHits||0)+1,l&&(e.poise=0,ae("parried"),xh("\u5F3E\u304D","#fff2c8"))}}function $0(){let i=J;if(!i||i.dead||i.state==="hidden"||i.strikeIn==null||i.strikeIn>o_||i.strikeIn<-.05)return null;let t=z;if(Math.hypot(i.x-t.x,i.z-t.z)>9)return null;let[n,s]=Ue.move();if(Math.hypot(n,s)<.3)return null;let r=Math.atan2(i.x-t.x,i.z-t.z),a=Je(r,Math.atan2(-n,s),1)-r;return Math.abs(a)>2.3?"B":Math.abs(a)>.8?a<0?"R":"L":null}function d_(i){let t=z,e=J;$e("MIKIRI_"+i);let n=t.act.def;t.iframe=n.iframes[1];let[s,r]=Ue.move(),a=e.state==="leap"||e.state==="leapWind",o=e.state==="charge"||e.state==="chargeWind";o&&(e.stopX=t.x,e.stopZ=t.z);let l=a||o,c=a?e.tx:o?t.x:e.x,h=a?e.tz:o?t.z:e.z;if(t.mk={dir:i,cx:l?c:void 0,cz:l?h:void 0,a0:Math.atan2(t.x-c,t.z-h),d0:Math.max(.5,Math.hypot(t.x-c,t.z-h)),mx:-s,mz:r},i!=="B"){let u=t.mk.d0,d=t.mk.a0+.5,f=Math.sin(d)*u-Math.sin(t.mk.a0)*u,g=Math.cos(d)*u-Math.cos(t.mk.a0)*u;t.mk.sign=f*t.mk.mx+g*t.mk.mz>=0?1:-1}H.slowmo=Math.min(H.slowmo,.45),H.mikiris=(H.mikiris||0)+1,Wt.play("dodge"),At.ring(t.x,t.z,1.6,13689087,.3)}function f_(i){let t=z,e=J,n=t.mk,s=i.def.lead;if(!e||!n||i.t>s){e&&!e.dead&&(t.face=Je(t.face,Math.atan2(e.x-t.x,e.z-t.z),.5));return}let r=Math.min(1,i.t/s),a=1-(1-r)*(1-r),o=2.4*Ws()/2.3+.3,l=n.a0,c;n.dir==="B"?c=r<.5?n.d0+2.2*(r/.5):n.d0+2.2+(o-n.d0-2.2)*((r-.5)/.5)**2:(l=n.a0+n.sign*1.35*a,c=n.d0+(o-n.d0)*a);let h=n.cx??e.x,u=n.cz??e.z;t.x=h+Math.sin(l)*c,t.z=u+Math.cos(l)*c,t.face=Math.atan2(h-t.x,u-t.z),Math.random()<.6&&At.ember(t.x,.1,t.z)}function p_(){let i=z,t=i.act,e=J;if(!t||!t.def.type||l_.has(t.name)||H.time-t.startT>K0)return!1;let n=e.state==="leap"?e.lx:e.x,s=e.state==="leap"?e.lz:e.z,r=Math.atan2(n-i.x,s-i.z);if(Math.hypot(n-i.x,s-i.z)>.3&&Math.abs(Je(i.face,r,1)-i.face)>1.3)return!1;let a=(e.x+i.x)/2,o=(e.z+i.z)/2;return At.hitFlash(a,1.9,o,!0,!1),At.hitFlash(a,1.9,o,!0,!1),At.spark(a,1.9,o,44),At.ring(a,o,3.2,16773312,.4),At.ring(e.x,e.z,5,16765056,.6),Wt.play("parry"),H.hitstop=Math.max(H.hitstop,.16),H.slowmo=Math.min(H.slowmo,.35),H.shake=Math.max(H.shake,.75),i.rage=Math.min(100,i.rage+12),i.iframe=Math.max(i.iframe,.25),e.tele=!1,e.poise=0,e.y=0,H.parries=(H.parries||0)+1,h_(),!0}function Bs(i,t,e,n){return J.glinted=!1,t?p_()?!0:(mh(i,e,n),!1):!1}var I0=0;function xh(i,t){let e=Rt("#callout");e&&(e.textContent=i,e.style.color=t||"",e.classList.remove("show"),e.offsetWidth,e.classList.add("show"),clearTimeout(I0),I0=setTimeout(()=>e.classList.remove("show"),900))}function J0(i){let t=Math.random()*Math.PI*2,e=20+Math.random()*8,n=z.x+Math.cos(t)*e,s=z.z+Math.sin(t)*e,r=Math.hypot(n,s);r>de-1&&(n*=(de-1)/r,s*=(de-1)/r);let a=Bn[i];Se.push({type:i,x:n,z:s,y:0,vx:0,vz:0,vy:0,face:Math.atan2(z.x-n,z.z-s),hp:a.hp,state:"walk",t:0,cd:1+Math.random()*2,phase:Math.random()*6,dead:!1,lastHit:-1,pose:{},spin:0,slot:Math.random()*Math.PI*2})}var oo=new Ct,j0=new Fe,Q0=new T,td=new T,V_=new Ze;function m_(i){let t=0;for(let e of Se)!e.dead&&(e.state==="windup"||e.state==="strike")&&t++;ui.begin();for(let e=Se.length-1;e>=0;e--){let n=Se[e],s=Bn[n.type];n.t+=i;let r=z.x-n.x,a=z.z-n.z,o=Math.hypot(r,a);if(n.dead){if(n.vy-=22*i,n.y=Math.max(0,n.y+n.vy*i),n.y<=0&&(n.vy<-6&&!n.bounced?(n.bounced=!0,n.vy=-n.vy*.35,At.mist(n.x,.2,n.z,0,0,2),At.decal(n.x,n.z,1.4)):(n.vy=0,n.spin*=.8,n.tumble=0)),n.face+=n.spin*i,n.tumbleA=(n.tumbleA||0)+(n.tumble||0)*i,n.t>2.2&&(n.y-=(n.t-2.2)*.8*i*4),n.t>3.2){Se.splice(e,1);continue}}else switch(n.y=Math.max(0,n.y+n.vy*i),n.vy=n.y>0?n.vy-22*i:0,n.state){case"walk":{let c=t<5||n.type==="brute"?s.range*.85:3.2+n.slot%1.5,h=r,u=a;if(o<c+.4&&t>=5){let g=Math.sign(Math.sin(n.slot))||1;h=-a*g,u=r*g}let d=Math.hypot(h,u)||1,f=o>c?s.speed:t>=5?s.speed*.35:0;n.x+=h/d*f*i,n.z+=u/d*f*i,n.face=Je(n.face,Math.atan2(r,a),Math.min(1,i*6)),n.phase+=i*(f>.1?8*(s.speed/3):2),n.cd-=i,o<s.range&&n.cd<=0&&t<5&&!z.dead&&(n.state="windup",n.t=0,t++);break}case"windup":n.face=Je(n.face,Math.atan2(r,a),Math.min(1,i*4)),n.t>=s.wind&&(n.state="strike",n.t=0,n.struck=!1);break;case"strike":if(s.lunge&&n.t<.22&&(n.x+=Math.sin(n.face)*s.lunge*i,n.z+=Math.cos(n.face)*s.lunge*i),!n.struck&&n.t>.06){n.struck=!0;let c=Math.abs(Je(n.face,Math.atan2(r,a),1)-n.face);o<s.range+.35&&c<1&&mh(s.dmg,n.x,n.z)}n.t>.55&&(n.state="walk",n.t=0,n.cd=1.2+Math.random()*2.2);break;case"hit":n.t>.42&&n.y<=0&&(n.state="walk",n.t=0,n.cd=.6+Math.random());break}n.x+=n.vx*i,n.z+=n.vz*i;let l=Math.exp(-i*(n.y>0?1:7));if(n.vx*=l,n.vz*=l,!n.dead){let c=s.radius+.5;o<c&&o>.001&&(n.x=z.x-r/o*c,n.z=z.z-a/o*c),ph(n,s.radius);let h=Math.hypot(n.x,n.z);h>de+2&&(n.x*=(de+2)/h,n.z*=(de+2)/h)}}for(let e=0;e<Se.length;e++){let n=Se[e];if(n.dead)continue;let s=Bn[n.type].radius;for(let r=e+1;r<Se.length;r++){let a=Se[r];if(a.dead)continue;let o=s+Bn[a.type].radius,l=a.x-n.x,c=a.z-n.z,h=l*l+c*c;if(h<o*o&&h>1e-6){let u=Math.sqrt(h),d=(o-u)*.5;n.x-=l/u*d,n.z-=c/u*d,a.x+=l/u*d,a.z+=c/u*d}}}for(let e of Se){let n=Bn[e.type],s=e.state,r=s==="windup"?e.t/n.wind:s==="strike"?e.t/.18:s==="hit"?e.t/.42:s==="dead"?e.t/.5:e.t,a=Kc(s,r,e.phase,e.target||(e.target={}));Fs(e.pose,a,Math.min(1,i*(s==="strike"?40:16)));let o=n.scale;oo.compose(Q0.set(e.x,e.y,e.z),j0.setFromAxisAngle(G0,e.face),td.set(o,o,o));let l=e.dead&&e.y>.05&&e.tumbleA?{...e.pose,rootPitch:(e.pose.rootPitch||0)+e.tumbleA}:e.pose;ui.add(oo,l,n.weapon,n.color)}ui.end()}function g_(i){let t=J;if(!t||t.state==="hidden")return;i*=t.speed,t.t+=i;let e=z.x-t.x,n=z.z-t.z,s=Math.hypot(e,n),r=Math.atan2(e,n),a=h=>{t.face=Je(t.face,r,Math.min(1,i*h))},o=Ws()/2.3;switch(t.strikeIn=x_(t,s),t.strikeIn!=null&&t.strikeIn<=a_&&t.strikeIn>0&&!t.glinted&&(t.glinted=!0,t.axe.getWorldPosition(io),At.hitFlash(io.x,io.y+.6,io.z,!0,!1),At.ring(t.x,t.z,2.2*o,16774352,.35),Wt.play("glint")),t.state){case"roar":t.t>2.2&&ae("walk");break;case"walk":if(a(3),s>4.2&&(t.x+=Math.sin(t.face)*3.4*i,t.z+=Math.cos(t.face)*3.4*i),t.phase+=i*5,t.cd-=i,t.cd<=0){let h=g=>t.attacks.has(g),u=["combo","sweep"].filter(h),d=["leap"].filter(h),f=g=>g[Math.floor(Math.random()*g.length)];s<6?ae(u.length&&Math.random()<.45?f(u)+"Wind":Math.random()<.6?"cleaveWind":"slamWind"):s>10?ae(d.length&&Math.random()<.5?"leapWind":"chargeWind"):Math.random()<.5&&ae(d.length&&Math.random()<.4?"leapWind":"slamWind")}break;case"cleaveWind":a(2.5),t.t>.85&&ae("cleave");break;case"cleave":if(!t.hitDone&&t.t>.12){t.hitDone=!0,Wt.play("swingHeavy");let h=Math.abs(Je(t.face,r,1)-t.face);if(Bs(160*t.dmgMul,s<6.2*o&&h<1.4,t.x,t.z))break}t.t>1&&ae("walk",.8+Math.random());break;case"comboWind":a(3),t.t>.5&&(ae("combo"),t.hitN=0);break;case"combo":{let h=Math.min(2,Math.floor(t.t/.5)),u=t.t-h*.5;if(u<.3&&(a(4),s>3.4*o&&(t.x+=Math.sin(t.face)*3*i,t.z+=Math.cos(t.face)*3*i)),t.hitN===h&&u>=.32){t.hitN++,Wt.play("swingHeavy");let d=Math.abs(Je(t.face,r,1)-t.face);if(Bs(120*t.dmgMul,s<6*o&&d<1.4,t.x,t.z))break}t.t>1.85&&ae("walk",1+Math.random());break}case"leapWind":a(5),t.tele||(t.tele=!0,t.tx=z.x,t.tz=z.z,At.telegraph(t.tx,t.tz,4.3,(.6+.9)/t.speed)),t.t>.6&&(ae("leap"),t.lx=t.x,t.lz=t.z,Wt.play("roar",.4));break;case"leap":{let h=Math.min(1,t.t/.9);if(t.x=t.lx+(t.tx-t.lx)*h,t.z=t.lz+(t.tz-t.lz)*h,t.y=4*5.5*h*(1-h),t.face=Je(t.face,Math.atan2(t.tx-t.lx,t.tz-t.lz),Math.min(1,i*6)),h>=1&&!t.hitDone){t.hitDone=!0,t.tele=!1,t.y=0,Wt.play("slam"),H.shake=1,At.ring(t.tx,t.tz,5.6,16732192,.6),At.spark(t.tx,.3,t.tz,36);for(let u of Se)!u.dead&&Math.hypot(u.x-t.tx,u.z-t.tz)<4&&(u.vx+=(u.x-t.tx)*3,u.vz+=(u.z-t.tz)*3);if(Bs(240*t.dmgMul,Math.hypot(z.x-t.tx,z.z-t.tz)<4.3,t.tx,t.tz))break;ae("leapLand")}break}case"leapLand":t.t>1.1&&ae("walk",1+Math.random());break;case"chargeStop":t.t>.9&&ae("walk",.8);break;case"sweepWind":a(2),t.tele||(t.tele=!0,At.telegraph(t.x,t.z,5.6,.9/t.speed)),t.t>.9&&(ae("sweep"),t.face0=t.face);break;case"sweep":if(t.face=t.face0+Math.min(1,t.t/.55)*Math.PI*2,!t.hitDone&&t.t>.28&&(t.hitDone=!0,t.tele=!1,Wt.play("swingHeavy"),Wt.play("slam",.4),At.ring(t.x,t.z,6,16752704,.45),Bs(190*t.dmgMul,s<5.6,t.x,t.z)))break;t.t>1.1&&(t.face=Ir(t.face),ae("walk",1+Math.random()));break;case"clash":(!z.act||z.act.name!=="CLASH")&&ae("parried");break;case"parried":t.t<.3&&(t.x-=Math.sin(t.face)*5*i,t.z-=Math.cos(t.face)*5*i),t.t>1.9&&ae("walk",.5);break;case"slamWind":t.t<.05&&!t.tele&&(t.tele=!0,t.tx=z.x,t.tz=z.z,At.telegraph(t.tx,t.tz,4,1.15)),t.face=Je(t.face,Math.atan2(t.tx-t.x,t.tz-t.z),Math.min(1,i*4)),Math.hypot(t.tx-t.x,t.tz-t.z)>3.2&&(t.x+=Math.sin(t.face)*4.5*i,t.z+=Math.cos(t.face)*4.5*i),t.t>1.15&&ae("slam");break;case"slam":if(!t.hitDone&&t.t>.14&&(t.hitDone=!0,t.tele=!1,Wt.play("slam"),H.shake=.9,At.ring(t.tx,t.tz,5.2,16732192,.6),At.spark(t.tx,.3,t.tz,30),Bs(220*t.dmgMul,Math.hypot(z.x-t.tx,z.z-t.tz)<4.1,t.tx,t.tz)))break;t.t>1.2&&ae("walk",1+Math.random());break;case"chargeWind":a(5),t.t>.7&&(ae("charge"),Wt.play("roar",.5));break;case"charge":if(t.x+=Math.sin(t.face)*15*i,t.z+=Math.cos(t.face)*15*i,t.phase+=i*12,t.stopX!=null&&(t.stopX-t.x)*Math.sin(t.face)+(t.stopZ-t.z)*Math.cos(t.face)<=0){ae("chargeStop");break}if(!t.hitDone&&s<2.3*o&&(t.hitDone=!0,Bs(140*t.dmgMul,!0,t.x,t.z)))break;for(let h of Se)!h.dead&&Math.hypot(h.x-t.x,h.z-t.z)<2&&(h.vx+=Math.sin(t.face)*6,h.vz+=Math.cos(t.face)*6);(t.t>.95||Math.hypot(t.x,t.z)>de)&&ae("walk",1.2);break;case"stagger":t.t>1.6&&ae("walk",.4);break;case"dead":t.deadT+=i,t.deadT>3.2&&!H.result&&rd(!0);break}if(t.state!=="dead"){ph(t,1);let h=Math.hypot(t.x,t.z);h>de&&(t.x*=de/h,t.z*=de/h);let u=Math.hypot(z.x-t.x,z.z-t.z),d=1.6*o;t.y<1.5&&u<d&&u>.001&&(z.x=t.x+(z.x-t.x)/u*d,z.z=t.z+(z.z-t.z)/u*d)}let l=t.state,c;if(l==="combo"){let h=Math.min(2,Math.floor(t.t/.5)),u=t.t-h*.5;u<.32&&t.t<1.5?(l="cleaveWind",c=u/.3):(l="cleave",c=(u-.32)/.2)}else if(l==="comboWind"||l==="sweepWind")l="cleaveWind",c=t.t/(t.state==="comboWind"?.5:.9);else if(l==="sweep")l="cleave",c=t.t/.3;else if(l==="leapWind")l="chargeWind",c=t.t/.6;else if(l==="leap"){let h=t.t/.9;h<.7?(l="slamWind",c=h/.5):(l="slam",c=(h-.7)/.3)}else if(l==="leapLand")l="slam",c=1;else if(l==="chargeStop")l="chargeWind",c=1;else if(l==="parried")l="stagger",c=t.t/1.9;else if(l==="clash"){let h=z.act?.name==="CLASH"?z.act.t:0,u=Math.floor(h/nn),d=h-u*nn;d<hi-.04?(l="cleaveWind",c=.6+.4*d/(hi-.04)):(l="cleave",c=.35*(d-hi+.04)/(nn-hi))}else c={cleaveWind:t.t/.85,cleave:t.t/.3,slamWind:t.t/.9,slam:t.t/.18,chargeWind:t.t/.6,roar:t.t/2.2,stagger:t.t/1.6,dead:t.t/1.4}[t.state]??t.t;$c(l,c,t.phase,t.target),Fs(t.pose,t.target,Math.min(1,i*(t.state==="clash"?34:l==="cleave"||l==="slam"?30:12))),zs(t.rig,t.pose),t.rig.root.position.set(t.x,t.y||0,t.z),t.rig.root.rotation.y=t.face,t.state==="roar"&&Math.random()<.5&&At.ember(t.x,1.5,t.z)}function ae(i,t){J.state=i,J.t=0,J.hitDone=!1,t!==void 0&&(J.cd=t),i.endsWith("Wind")&&(J.glinted=!1),i!=="leap"&&(J.y=0),(i==="chargeWind"||i==="walk")&&(J.stopX=J.stopZ=null)}function x_(i,t){let e=i.speed,n=Ws()/2.3;switch(i.state){case"cleaveWind":return(.85-i.t+.12)/e;case"cleave":return i.hitDone?null:(.12-i.t)/e;case"slamWind":return(1.15-i.t+.14)/e;case"slam":return i.hitDone?null:(.14-i.t)/e;case"chargeWind":return(.7-i.t)/e+Math.max(0,t-2.3*n)/(15*e);case"charge":return i.hitDone?null:Math.max(0,t-2.3*n)/(15*e);case"comboWind":return(.5-i.t+.32)/e;case"combo":return i.hitN>2?null:(i.hitN*.5+.32-i.t)/e;case"leapWind":return(.6-i.t+.9)/e;case"leap":return i.hitDone?null:(.9-i.t)/e;case"sweepWind":return(.9-i.t+.28)/e;case"sweep":return i.hitDone?null:(.28-i.t)/e;default:return null}}function ed(i){let t=J;t.hp-=i,t.poise+=i,Z0();let e=t.x-z.x,n=t.z-z.z,s=Math.hypot(e,n)||1;if(At.blood(t.x-e/s*.8,2.4,t.z-n/s*.8,-e/s,-n/s,16,1.2),At.spark(t.x-e/s,2.2,t.z-n/s,6),t.hp<=0&&!t.dead){t.hp=0,t.dead=!0,ae("dead"),t.deadT=0,H.slowmo=.25,H.ko++,H.shake=1,fh(40),Wt.play("roar",.8);for(let r of Se)r.dead||(r.hp=0,ao(r,1,8,4,!0,t.x,t.z));return}if(t.poise>420&&t.state!=="stagger"&&t.state!=="parried"&&t.state!=="leap"&&(t.poise=0,ae("stagger"),Wt.play("clang")),t.enrageOn&&!t.enraged&&t.hp<t.maxHp*.5){t.enraged=!0,t.speed*=1.25,t.dmgMul*=1.15,t.mat.emissive.setRGB(.25,.02,0),_h("\u6FC0\u6602",`${Ui().boss.name}\u304C\u6012\u308A\u72C2\u3046`),Wt.play("roar"),H.shake=.8;for(let r=0;r<8;r++)J0(r%2?"lancer":"grunt")}}function P0(){H.waveIdx++;let i=lo();if(H.spawnLeft=i.total,H.spawnT=1.5,_h(i.label,i.sub),Wt.play("wave"),i.boss){J=J||W0();let t=Ui().boss;J.maxHp=J.hp=t.hp,J.speed=t.speed,J.dmgMul=t.dmg,J.enrageOn=t.enrage,J.enraged=!1,J.dead=!1,J.poise=0,J.mat.color.setRGB(...t.tint).multiplyScalar(2),J.mat.emissive.setRGB(...t.glow||[0,0,0]),J.scale=t.scale||2.3,J.rig.root.scale.setScalar(J.scale),J.y=0,J.tele=!1,J.attacks=new Set(t.attacks||["cleave","slam","charge"]),Rt("#boss .name").textContent=t.name,J.x=z.x*.6,J.z=z.z+14;let e=Math.hypot(J.x,J.z);e>de-4&&(J.x*=(de-4)/e,J.z*=(de-4)/e),Math.hypot(J.x-z.x,J.z-z.z)<9&&(J.x=z.x*.3,J.z=z.z*.3-Math.sign(z.z||1)*6),J.face=Math.atan2(z.x-J.x,z.z-J.z),ae("roar"),J.cd=2,J.rig.root.visible=!0,setTimeout(()=>Wt.play("roar"),400),Pt.bossBar.hidden=!1;{let n=window.matchMedia?.("(pointer: fine)").matches?"J":"\u65AC";v_(`\u6B66\u5668\u304C\u5149\u3063\u305F\u3089 ${n} \u3067\u5F3E\u304F \uFF0F \u6A2A\u304B\u5F8C\u308D\uFF0B${n} \u3067\u898B\u5207\u308A\u65AC\u308A`)}}}function __(i){if(H.waveIdx<0){H.introT-=i,H.introT<=0&&P0();return}let t=lo();if(!t)return;let e=Se.filter(n=>!n.dead).length;H.spawnT-=i,H.spawnLeft>0&&e<t.max&&H.spawnT<=0&&((!t.boss||J.state!=="roar")&&(J0(Zx(t.mix)),H.spawnLeft--),H.spawnT=t.rate*(e<6?.3:1)),!t.boss&&H.spawnLeft<=0&&e===0&&(H.waveDelay+=i,H.waveDelay>1.4&&(H.waveDelay=0,P0())),Pt.objective.textContent=t.boss?`${Ui().boss.name}\u3092\u8A0E\u3066`:`\u6B8B\u308A ${H.spawnLeft+e} \u4F53`}var D0=0;function v_(i){let t=Rt("#tip");t&&(t.textContent=i,t.classList.add("show"),clearTimeout(D0),D0=setTimeout(()=>t.classList.remove("show"),6e3))}var N0=0;function _h(i,t){Pt.waveLabel.textContent=i,Rt("#wave-sub").textContent=t,Pt.wave.classList.remove("show"),Pt.wave.offsetWidth,Pt.wave.classList.add("show"),clearTimeout(N0),N0=setTimeout(()=>Pt.wave.classList.remove("show"),2600)}var ci=new T(0,9,-10),U0=new T;function y_(i){let t=window.innerWidth<window.innerHeight,e=t?11:8.6,n=t?9.6:7,s=z.x,r=z.z;J&&!J.dead&&J.state!=="hidden"&&lo()?.boss&&Math.hypot(J.x-z.x,J.z-z.z)<16&&(s+=(J.x-z.x)*.25,r+=(J.z-z.z)*.25);let a=s,o=r-e,l=1-Math.exp(-i*6);if(ci.x+=(a-ci.x)*l,ci.z+=(o-ci.z)*l,ci.y+=(n-ci.y)*l,U0.set(ci.x,1.1,ci.z+e+1.6),Oe.position.copy(ci),H.shake>0){let c=H.shake*H.shake*.35;Oe.position.x+=(Math.random()-.5)*c,Oe.position.y+=(Math.random()-.5)*c,H.shake=Math.max(0,H.shake-i*2.2)}Oe.lookAt(U0),sn.position.set(z.x+14,20,z.z+22),sn.target.position.set(z.x,0,z.z),Tr.position.set(Oe.position.x-3,Oe.position.y+6,Oe.position.z-4),Tr.target.position.set(z.x,.8,z.z)}var Rn={};function wr(i,t,e){Rn[t]!==e&&(Rn[t]=e,i.style.transform=e)}function jc(i,t,e){Rn[t]!==e&&(Rn[t]=e,i.textContent=e)}function M_(i){let t=z;t.hpLag+=(t.hp-t.hpLag)*Math.min(1,i*3),wr(Pt.hp,"hp",`scaleX(${(t.hp/t.maxHp).toFixed(3)})`),wr(Pt.hpLag,"hpl",`scaleX(${(t.hpLag/t.maxHp).toFixed(3)})`);let e=t.rageT>0?t.rageT/12:t.rage/100;wr(Pt.rage,"rg",`scaleX(${e.toFixed(3)})`);let n=t.rage>=100&&t.rageT<=0;Rn.ready!==n&&(Rn.ready=n,Pt.rageBtn.classList.toggle("ready",n),document.body.classList.toggle("rage-ready",n));let s=t.rageT>0;Rn.raging!==s&&(Rn.raging=s,document.body.classList.toggle("raging",s)),jc(Pt.ko,"ko",String(H.ko)),jc(Rt("#lv"),"lv",`Lv${t.level}`),wr(Rt("#exp-fill"),"exp",`scaleX(${t.level>=ro?1:(t.exp/ch(t.level)).toFixed(3)})`),H.comboT>0&&(H.comboT-=i,jc(Pt.comboN,"cn",String(H.combo)),Rn.combo!==H.combo&&(Rn.combo=H.combo,Pt.combo.classList.remove("pop"),Pt.combo.offsetWidth,Pt.combo.classList.add("pop")),Pt.combo.hidden=H.combo<2,H.comboT<=0&&(H.combo=0,Pt.combo.hidden=!0)),J&&!Pt.bossBar.hidden&&wr(Pt.bossFill,"boss",`scaleX(${(J.hp/J.maxHp).toFixed(3)})`)}function nd(i){Gt.fog.color.setHex(i.fog),Gt.fog.density=i.density,Gt.background=Gt.fog.color,so.color.setHex(i.sky),so.groundColor.setHex(i.gnd),so.intensity=i.hemi,sn.color.setHex(i.sun),sn.intensity=i.sunI,hh.color.setHex(i.rim),Tr.intensity=i.fill??1.6,ih&&ih.color.setHex(i.ground),Gt.environmentIntensity=i.envI}var id="ironwake-save-v1";function sd(){try{return JSON.parse(localStorage.getItem(id)||"null")}catch{return null}}function O0(i){try{localStorage.setItem(id,JSON.stringify(i))}catch{}}function vh(){let i=sd(),t=Rt("#btn-continue");i&&Hs[i.stage]?(t.hidden=!1,t.textContent=`\u7D9A\u304D\u304B\u3089\uFF08${Hs[i.stage].name}\u30FBLv${i.level}\uFF09`):t.hidden=!0}function yh(i=!1){for(let t of Se)t.dead=!0;Se.length=0,At.clear(),ui.begin(),ui.end(),i||(z.level=1,z.exp=0),z.maxHp=1e3+90*(z.level-1),z.comboIdx=0,z.x=0,z.z=0,z.face=0,z.hp=z.maxHp,z.hpLag=z.maxHp,z.rage=0,z.rageT=0,z.act=null,z.dead=!1,z.iframe=0,z.mat.emissive.setRGB(0,0,0),Ar.intensity=0,J&&(J.rig.root.visible=!1,J.state="hidden",J.hp=J.maxHp,J.dead=!1,J.poise=0),Object.assign(H,{time:0,ko:0,combo:0,maxCombo:0,comboT:0,hitstop:0,shake:0,slowmo:1,waveIdx:-1,spawnLeft:0,waveDelay:0,result:null,playTime:0}),Pt.bossBar.hidden=!0,Pt.combo.hidden=!0,document.body.classList.remove("raging","rage-ready");for(let t in Rn)delete Rn[t]}function Pr(i=0,t=1,e=0){let n=z.weapons[Rt("#weapon-select").value]||z.weapons.standard;for(let s of Object.values(z.weapons))s.mesh.visible=s===n;z.sword=n.mesh,z.blade=n.blade,Wt.unlock(),Wt.play("ui"),Wt.startMusic(),z.level=t,z.exp=e,yh(!0),H.stageIdx=i,nd(Ui().env),Pt.title.hidden=!0,Pt.result.hidden=!0,Pt.pause.hidden=!0,Pt.hud.hidden=!1,H.state="play",Ue.clear(),_h(Ui().name,Ui().place),H.introT=2.6,Pt.objective.textContent=""}function rd(i){if(H.result)return;H.result=i?"win":"lose",H.state="over",Wt.stopMusic();let t=H.playTime,e=H.ko*100+H.maxCombo*40+(i?2e4:0)-Math.floor(t)*10,n=i?e>38e3?"S":e>32e3?"A":e>26e3?"B":"C":"\u2014",s=Ui(),r=Hs[H.stageIdx+1],a=i&&!r;Rt("#result-title").textContent=a?"\u5168\u6226\u5834\u5236\u8987":i?`${s.name} \u7A81\u7834`:"\u529B\u5C3D\u304D\u305F",Rt("#result-sub").textContent=i?`${s.boss.name}\u306F\u9244\u584A\u306E\u524D\u306B\u5012\u308C\u305F`:`${s.name}\u30FB${lo()?.label??""}\u3067\u5012\u308C\u305F`,Rt("#r-lv").textContent=z.level;let o=Rt("#btn-next");o.hidden=!i||!r,i&&r&&(o.textContent=`\u6B21\u306E\u6226\u5834\u3078\uFF08${r.name}\uFF09`,O0({stage:H.stageIdx+1,level:z.level,exp:z.exp})),a&&O0({stage:H.stageIdx,level:z.level,exp:z.exp,cleared:!0}),Rt("#r-ko").textContent=H.ko,Rt("#r-combo").textContent=H.maxCombo,Rt("#r-time").textContent=`${Math.floor(t/60)}:${String(Math.floor(t%60)).padStart(2,"0")}`,Rt("#r-rank").textContent=n,Pt.result.classList.toggle("win",i),setTimeout(()=>{Pt.result.hidden=!1,Pt.hud.hidden=!0},i?200:600)}function Vs(i){H.state!=="play"&&H.state!=="pause"||(H.state=i?"pause":"play",Pt.pause.hidden=!i,Wt.ctx&&(i?Wt.ctx.suspend():Wt.ctx.resume()),Ue.clear())}var F0=performance.now(),Qc=0,th=0,eh=0;function ad(i){requestAnimationFrame(ad);let t=Math.min(.05,(i-F0)/1e3);if(F0=i,Qc+=t,th++,eh+=t,eh>2.5&&H.state==="play"){let e=Qc/th;Qc=0,th=0,eh=0,e>1/45&&Di.ratio>1?(Di.ratio=Math.max(1,Di.ratio-.25),pn.setPixelRatio(Di.ratio),uh()):e>1/40&&Di.shadows&&(Di.shadows=!1,sn.castShadow=!1)}if(H.state==="play"||H.state==="over")if(Ue.consume("pause")&&H.state==="play")Vs(!0);else{H.hitstop>0&&(H.hitstop-=t,t*=.08),H.slowmo+=(1-H.slowmo)*Math.min(1,t*.8),t*=H.slowmo;for(let e=0;e<(H.substeps||1);e++)H.time+=t,H.state==="play"&&(H.playTime+=t),e_(t),m_(t),g_(t),H.state==="play"&&__(t),At.update(t);M_(t)}else H.state==="pause"?Ue.consume("pause")&&Vs(!1):H.state==="title"&&z&&(H.time+=t,Er(H.time*2,0,z.target),Fs(z.pose,z.target,.2),zs(z.rig,z.pose),z.face=Math.PI+Math.sin(H.time*.3)*.25,z.rig.root.rotation.y=z.face,At.update(t));H.state!=="debug"&&(z&&y_(t),pn.render(Gt,Oe))}function S_(i,t,e=.6,n=5,s="hero"){H.state="debug",Pt.title.hidden=!0,Pt.hud.hidden=!0;let r={};if(s==="hero")typeof i=="object"?Object.assign(r,i):i==="idle"?Er(0,0,r):i==="run"?Er(t,1,r):to(rt[i].keys,t,r),z.pose=r,zs(z.rig,r),z.x=0,z.z=0,z.face=0,z.rig.root.position.set(0,0,0),z.rig.root.rotation.y=0;else if(s==="boss")J.rig.root.visible=!0,J.state=i,$c(i,t,t*6,r),zs(J.rig,r),J.rig.root.position.set(0,0,0),J.rig.root.rotation.y=0,z.rig.root.position.set(50,0,50);else{Se.length=0,Se.push({type:s,x:0,z:0,y:0,vx:0,vz:0,vy:0,face:0,hp:1,state:i,t,phase:t*6,dead:!1,pose:Kc(i,t,t*6,{})}),z.rig.root.position.set(50,0,50),ui.begin();let o=Bn[s],l=o.scale;oo.compose(Q0.set(0,0,0),j0.identity(),td.set(l,l,l)),ui.add(oo,Se[0].pose,o.weapon,o.color),ui.end()}let a=s==="boss"?2.3:1;Oe.position.set(Math.sin(e)*n*a,1.4*a,Math.cos(e)*n*a),Oe.lookAt(0,1*a,0),sn.position.set(14,20,22),sn.target.position.set(0,0,0),pn.render(Gt,Oe)}function Mh(i){H.state==="loading"&&(Pt.loadText.textContent=`\u8D77\u52D5\u306B\u5931\u6557\u3057\u305F\uFF08${i}\uFF09\u3002\u3053\u306E\u8868\u793A\u3092\u4F1D\u3048\u3066\u307B\u3057\u3044\u3002`)}window.addEventListener("error",i=>Mh(i.message||"error"));window.addEventListener("unhandledrejection",i=>Mh(i.reason&&i.reason.message||String(i.reason)));setTimeout(()=>Mh("60\u79D2\u4EE5\u5185\u306B\u8D77\u52D5\u3057\u306A\u304B\u3063\u305F"),6e4);async function b_(){try{await Vx()}catch(i){Pt.loadText.textContent=`\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u305F\uFF08${i&&i.message||i}\uFF09\u3002\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u3066\u307B\u3057\u3044\u3002`,console.error(i);return}try{Gx(),At=new sh;for(let i of[oe.grunt.torso.material,oe.weapons.gsword.material])i.color.setScalar(1.6),i.envMapIntensity=1.4;ui=new nh(oe.grunt,oe.skel,{gsword:oe.weapons.gsword,club:oe.weapons.club,spear:oe.props.spear},72),z=Kx(),J=W0(),J.rig.root.visible=!1,J.state="hidden",pn.compile(Gt,Oe)}catch(i){Pt.loadText.textContent=`\u8D77\u52D5\u306B\u5931\u6557\u3057\u305F\uFF08${i&&i.message||i}\uFF09\u3002\u3053\u306E\u8868\u793A\u3092\u4F1D\u3048\u3066\u307B\u3057\u3044\u3002`,console.error(i);return}{let i=Rt("#weapon-select");for(let t of Ja){let e=document.createElement("option");e.value=t.id,e.textContent=t.label,i.appendChild(e)}i.value="standard",Rt(".weapon-choice").hidden=Ja.length===0}H.state="title",nd(Hs[0].env),vh(),Rt("#loading").hidden=!0,Pt.title.hidden=!1,window.__game={G:H,hero:()=>z,enemies:Se,boss:()=>J,input:Ue,startGame:Pr,QUALITY:Di,renderer:pn,debugPose:S_,gainExp:fh,STAGES:Hs,hurtHero:mh,startAction:$e,comboChain:rh,FINISHERS:Y0,pickLight:lh,HERO_ACTIONS:rt,setBoss:ae,mikiriDir:$0,PARRY_WIN:K0}}Pt.start.addEventListener("click",()=>Pr(0,1,0));Rt("#btn-continue").addEventListener("click",()=>{let i=sd();i&&Pr(i.stage,i.level,i.exp||0)});Rt("#btn-retry").addEventListener("click",()=>Pr(H.stageIdx,z.level,z.exp));Rt("#btn-next").addEventListener("click",()=>Pr(H.stageIdx+1,z.level,z.exp));Rt("#btn-title").addEventListener("click",()=>{Pt.result.hidden=!0,Pt.title.hidden=!1,yh(),H.state="title",vh()});Rt("#btn-pause").addEventListener("click",()=>Vs(!0));Rt("#btn-resume").addEventListener("click",()=>Vs(!1));Rt("#btn-quit").addEventListener("click",()=>{Vs(!1),H.state="title",Wt.stopMusic(),yh(),Pt.pause.hidden=!0,Pt.hud.hidden=!0,Pt.title.hidden=!1,vh()});Rt("#btn-sound").addEventListener("click",i=>{Wt.unlock(),Wt.setMuted(!Wt.muted),i.currentTarget.classList.toggle("off",Wt.muted),i.currentTarget.setAttribute("aria-pressed",String(Wt.muted))});document.addEventListener("visibilitychange",()=>{document.hidden&&H.state==="play"&&Vs(!0)});requestAnimationFrame(ad);b_();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
