var Li={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tu=0,jl=1,eu=2;var kr=1,nu=2,Gs=3,Ni=0,en=1,vn=2,ji=0,Hs=1,Vs=2,Ql=3,tc=4,iu=5;var Qi=100,su=101,ru=102,au=103,ou=104,lu=200,cu=201,hu=202,uu=203,ec=204,nc=205,du=206,fu=207,pu=208,mu=209,gu=210,_u=211,xu=212,yu=213,vu=214,Fa=0,Oa=1,Ba=2,ws=3,za=4,ka=5,Ga=6,Ha=7,ic=0,Mu=1,Su=2,Zn=0,sc=1,rc=2,ac=3,Gr=4,oc=5,lc=6,cc=7;var hc=300,ts=301,Ws=302,ho=303,uo=304,As=1e3,Vn=1001,Va=1002,De=1003,bu=1004;var Hr=1005;var Qe=1006,fo=1007;var ui=1008;var ln=1009,uc=1010,dc=1011,Xs=1012,po=1013,Bn=1014,Pn=1015,zn=1016,mo=1017,go=1018,es=1020,fc=35902,pc=35899,mc=1021,gc=1022,kn=1023,li=1026,di=1027,_o=1028,xo=1029,Ui=1030,yo=1031;var vo=1033,Vr=33776,Wr=33777,Xr=33778,qr=33779,Mo=35840,So=35841,bo=35842,Eo=35843,To=36196,wo=37492,Ao=37496,Ro=37488,Co=37489,Yr=37490,Po=37491,Io=37808,Lo=37809,Do=37810,No=37811,Uo=37812,Fo=37813,Oo=37814,Bo=37815,zo=37816,ko=37817,Go=37818,Ho=37819,Vo=37820,Wo=37821,Xo=36492,qo=36494,Yo=36495,Zo=36283,Jo=36284,Zr=36285,$o=36286;var hr=2300,Wa=2301,Na=2302,Hl=2303,Vl=2400,Wl=2401,Xl=2402;var Eu=3200;var Ko=0,Tu=1,fi="",ke="srgb",ur="srgb-linear",dr="linear",te="srgb";var Ua=7680;var wu=519,Au=512,Ru=513,Cu=514,_c=515,Pu=516,Iu=517,xc=518,yc=519,vc=35044;var Mc="300 es",Rn=2e3,Rs=2001;function ef(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function nf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lu(){let i=fr("canvas");return i.style.display="block",i}var Mh={},Cs=null;function pr(...i){let t="THREE."+i.shift();Cs?Cs("log",t,...i):console.log(t,...i)}function Du(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function It(...i){i=Du(i);let t="THREE."+i.shift();if(Cs)Cs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Dt(...i){i=Du(i);let t="THREE."+i.shift();if(Cs)Cs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function or(...i){let t=i.join(" ");t in Mh||(Mh[t]=!0,It(...i))}function Nu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Uu={[Fa]:Fa,[Ba]:Ga,[za]:za,[ws]:ka,[Oa]:Oa,[Ga]:Ba,[Ha]:Ha,[ka]:ws},On=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sh=1234567,lr=Math.PI/180,Ps=180/Math.PI;function Fi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Vt(i,t,e){return Math.max(t,Math.min(e,i))}function Sc(i,t){return(i%t+t)%t}function sf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function rf(i,t,e){return i!==t?(e-i)/(t-i):0}function cr(i,t,e){return(1-e)*i+e*t}function af(i,t,e,n){return cr(i,t,1-Math.exp(-e*n))}function of(i,t=1){return t-Math.abs(Sc(i,t*2)-t)}function lf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function cf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function hf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function uf(i,t){return i+Math.random()*(t-i)}function df(i){return i*(.5-Math.random())}function ff(i){i!==void 0&&(Sh=i);let t=Sh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pf(i){return i*lr}function mf(i){return i*Ps}function gf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function _f(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xf(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),g=r((t-n)/2),u=a((t-n)/2),m=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*g,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*g,o*c);break;case"ZXZ":i.set(l*g,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*_,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*_,o*c);break;case"ZYZ":i.set(l*_,l*m,o*h,o*c);break;default:It("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ec(i,t){if(t.constructor===Float32Array)return i;let e=jo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Tc(i,t){if(t.constructor===Float32Array)return i;let e=jo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var wc={DEG2RAD:lr,RAD2DEG:Ps,generateUUID:Fi,clamp:Vt,euclideanModulo:Sc,mapLinear:sf,inverseLerp:rf,lerp:cr,damp:af,pingpong:of,smoothstep:lf,smootherstep:cf,randInt:hf,randFloat:uf,randFloatSpread:df,seededRandom:ff,degToRad:pf,radToDeg:mf,isPowerOfTwo:gf,ceilPowerOfTwo:_f,floorPowerOfTwo:bc,setQuaternionFromProperEuler:xf,normalize:Tc,denormalize:Ec},Et=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],g=n[s+3],u=r[a+0],m=r[a+1],_=r[a+2],S=r[a+3];if(g!==S||l!==u||c!==m||h!==_){let p=l*u+c*m+h*_+g*S;p<0&&(u=-u,m=-m,_=-_,S=-S,p=-p);let f=1-o;if(p<.9995){let M=Math.acos(p),w=Math.sin(M);f=Math.sin(f*M)/w,o=Math.sin(o*M)/w,l=l*f+u*o,c=c*f+m*o,h=h*f+_*o,g=g*f+S*o}else{l=l*f+u*o,c=c*f+m*o,h=h*f+_*o,g=g*f+S*o;let M=1/Math.sqrt(l*l+c*c+h*h+g*g);l*=M,c*=M,h*=M,g*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=g}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],g=r[a],u=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+h*g+l*m-c*u,t[e+1]=l*_+h*u+c*g-o*m,t[e+2]=c*_+h*m+o*u-l*g,t[e+3]=h*_-o*g-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),g=o(r/2),u=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*g+c*m*_,this._y=c*m*g-u*h*_,this._z=c*h*_+u*m*g,this._w=c*h*g-u*m*_;break;case"YXZ":this._x=u*h*g+c*m*_,this._y=c*m*g-u*h*_,this._z=c*h*_-u*m*g,this._w=c*h*g+u*m*_;break;case"ZXY":this._x=u*h*g-c*m*_,this._y=c*m*g+u*h*_,this._z=c*h*_+u*m*g,this._w=c*h*g-u*m*_;break;case"ZYX":this._x=u*h*g-c*m*_,this._y=c*m*g+u*h*_,this._z=c*h*_-u*m*g,this._w=c*h*g+u*m*_;break;case"YZX":this._x=u*h*g+c*m*_,this._y=c*m*g+u*h*_,this._z=c*h*_-u*m*g,this._w=c*h*g-u*m*_;break;case"XZY":this._x=u*h*g-c*m*_,this._y=c*m*g-u*h*_,this._z=c*h*_+u*m*g,this._w=c*h*g+u*m*_;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],g=e[10],u=n+o+g;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>g){let m=2*Math.sqrt(1+n-o-g);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>g){let m=2*Math.sqrt(1+o-n-g);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+g-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),g=2*(r*n-a*e);return this.x=e+l*c+a*g-o*h,this.y=n+l*h+o*c-r*g,this.z=s+l*g+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ml.copy(this).projectOnVector(t),this.sub(Ml)}reflect(t){return this.sub(Ml.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ml=new D,bh=new Ge,Nt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],g=n[7],u=n[2],m=n[5],_=n[8],S=s[0],p=s[3],f=s[6],M=s[1],w=s[4],b=s[7],A=s[2],T=s[5],d=s[8];return r[0]=a*S+o*M+l*A,r[3]=a*p+o*w+l*T,r[6]=a*f+o*b+l*d,r[1]=c*S+h*M+g*A,r[4]=c*p+h*w+g*T,r[7]=c*f+h*b+g*d,r[2]=u*S+m*M+_*A,r[5]=u*p+m*w+_*T,r[8]=u*f+m*b+_*d,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],g=h*a-o*c,u=o*l-h*r,m=c*r-a*l,_=e*g+n*u+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return t[0]=g*S,t[1]=(s*c-h*n)*S,t[2]=(o*n-s*a)*S,t[3]=u*S,t[4]=(h*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=m*S,t[7]=(n*l-c*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return or("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sl.makeScale(t,e)),this}rotate(t){return or("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sl.makeRotation(-t)),this}translate(t,e){return or("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Sl=new Nt,Eh=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Th=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yf(){let i={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===te&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(s.r=Ts(s.r),s.g=Ts(s.g),s.b=Ts(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ur]:{primaries:t,whitePoint:n,transfer:dr,toXYZ:Eh,fromXYZ:Th,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:n,transfer:te,toXYZ:Eh,fromXYZ:Th,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),i}var Jt=yf();function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var os,Xa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{os===void 0&&(os=fr("canvas")),os.width=t.width,os.height=t.height;let s=os.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=os}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=fr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(oi(e[n]/255)*255):e[n]=oi(e[n]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},vf=0,Is=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Fi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bl(s[a].image)):r.push(bl(s[a]))}else r=bl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function bl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}var Mf=0,El=new D,tn=class i extends On{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Vn,s=Vn,r=Qe,a=ui,o=kn,l=ln,c=i.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Fi(),this.name="",this.source=new Is(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(El).x}get height(){return this.source.getSize(El).y}get depth(){return this.source.getSize(El).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){It(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){It(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case As:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case Va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case As:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case Va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=hc;tn.DEFAULT_ANISOTROPY=1;var ue=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],g=l[8],u=l[1],m=l[5],_=l[9],S=l[2],p=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(g-S)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(g+S)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,b=(m+1)/2,A=(f+1)/2,T=(h+u)/4,d=(g+S)/4,v=(_+p)/4;return w>b&&w>A?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=d/n):b>A?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=T/s,r=v/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=d/r,s=v/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-_)*(p-_)+(g-S)*(g-S)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(g-S)/M,this.z=(u-h)/M,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qa=class extends On{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new tn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Is(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends qa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},mr=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ya=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Wt=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,g,u,m,_,S,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,g,u,m,_,S,p)}set(t,e,n,s,r,a,o,l,c,h,g,u,m,_,S,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=g,f[14]=u,f[3]=m,f[7]=_,f[11]=S,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ls.setFromMatrixColumn(t,0).length(),r=1/ls.setFromMatrixColumn(t,1).length(),a=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),g=Math.sin(r);if(t.order==="XYZ"){let u=a*h,m=a*g,_=o*h,S=o*g;e[0]=l*h,e[4]=-l*g,e[8]=c,e[1]=m+_*c,e[5]=u-S*c,e[9]=-o*l,e[2]=S-u*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,m=l*g,_=c*h,S=c*g;e[0]=u+S*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*g,e[5]=a*h,e[9]=-o,e[2]=m*o-_,e[6]=S+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,m=l*g,_=c*h,S=c*g;e[0]=u-S*o,e[4]=-a*g,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*h,e[9]=S-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,m=a*g,_=o*h,S=o*g;e[0]=l*h,e[4]=_*c-m,e[8]=u*c+S,e[1]=l*g,e[5]=S*c+u,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,m=a*c,_=o*l,S=o*c;e[0]=l*h,e[4]=S-u*g,e[8]=_*g+m,e[1]=g,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*g+_,e[10]=u-S*g}else if(t.order==="XZY"){let u=a*l,m=a*c,_=o*l,S=o*c;e[0]=l*h,e[4]=-g,e[8]=c*h,e[1]=u*g+S,e[5]=a*h,e[9]=m*g-_,e[2]=_*g-m,e[6]=o*h,e[10]=S*g+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sf,t,bf)}lookAt(t,e,n){let s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),xi.crossVectors(n,fn),xi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),xi.crossVectors(n,fn)),xi.normalize(),la.crossVectors(fn,xi),s[0]=xi.x,s[4]=la.x,s[8]=fn.x,s[1]=xi.y,s[5]=la.y,s[9]=fn.y,s[2]=xi.z,s[6]=la.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],g=n[5],u=n[9],m=n[13],_=n[2],S=n[6],p=n[10],f=n[14],M=n[3],w=n[7],b=n[11],A=n[15],T=s[0],d=s[4],v=s[8],L=s[12],R=s[1],N=s[5],O=s[9],X=s[13],P=s[2],W=s[6],Z=s[10],V=s[14],nt=s[3],q=s[7],Q=s[11],G=s[15];return r[0]=a*T+o*R+l*P+c*nt,r[4]=a*d+o*N+l*W+c*q,r[8]=a*v+o*O+l*Z+c*Q,r[12]=a*L+o*X+l*V+c*G,r[1]=h*T+g*R+u*P+m*nt,r[5]=h*d+g*N+u*W+m*q,r[9]=h*v+g*O+u*Z+m*Q,r[13]=h*L+g*X+u*V+m*G,r[2]=_*T+S*R+p*P+f*nt,r[6]=_*d+S*N+p*W+f*q,r[10]=_*v+S*O+p*Z+f*Q,r[14]=_*L+S*X+p*V+f*G,r[3]=M*T+w*R+b*P+A*nt,r[7]=M*d+w*N+b*W+A*q,r[11]=M*v+w*O+b*Z+A*Q,r[15]=M*L+w*X+b*V+A*G,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],g=t[6],u=t[10],m=t[14],_=t[3],S=t[7],p=t[11],f=t[15],M=l*m-c*u,w=o*m-c*g,b=o*u-l*g,A=a*m-c*h,T=a*u-l*h,d=a*g-o*h;return e*(S*M-p*w+f*b)-n*(_*M-p*A+f*T)+s*(_*w-S*A+f*d)-r*(_*b-S*T+p*d)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],g=t[9],u=t[10],m=t[11],_=t[12],S=t[13],p=t[14],f=t[15],M=e*o-n*a,w=e*l-s*a,b=e*c-r*a,A=n*l-s*o,T=n*c-r*o,d=s*c-r*l,v=h*S-g*_,L=h*p-u*_,R=h*f-m*_,N=g*p-u*S,O=g*f-m*S,X=u*f-m*p,P=M*X-w*O+b*N+A*R-T*L+d*v;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/P;return t[0]=(o*X-l*O+c*N)*W,t[1]=(s*O-n*X-r*N)*W,t[2]=(S*d-p*T+f*A)*W,t[3]=(u*T-g*d-m*A)*W,t[4]=(l*R-a*X-c*L)*W,t[5]=(e*X-s*R+r*L)*W,t[6]=(p*b-_*d-f*w)*W,t[7]=(h*d-u*b+m*w)*W,t[8]=(a*O-o*R+c*v)*W,t[9]=(n*R-e*O-r*v)*W,t[10]=(_*T-S*b+f*M)*W,t[11]=(g*b-h*T-m*M)*W,t[12]=(o*L-a*N-l*v)*W,t[13]=(e*N-n*L+s*v)*W,t[14]=(S*w-_*A-p*M)*W,t[15]=(h*A-g*w+u*M)*W,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,g=o+o,u=r*c,m=r*h,_=r*g,S=a*h,p=a*g,f=o*g,M=l*c,w=l*h,b=l*g,A=n.x,T=n.y,d=n.z;return s[0]=(1-(S+f))*A,s[1]=(m+b)*A,s[2]=(_-w)*A,s[3]=0,s[4]=(m-b)*T,s[5]=(1-(u+f))*T,s[6]=(p+M)*T,s[7]=0,s[8]=(_+w)*d,s[9]=(p-M)*d,s[10]=(1-(u+S))*d,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ls.set(s[0],s[1],s[2]).length(),o=ls.set(s[4],s[5],s[6]).length(),l=ls.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Nn.copy(this);let c=1/a,h=1/o,g=1/l;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=g,Nn.elements[9]*=g,Nn.elements[10]*=g,e.setFromRotationMatrix(Nn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Rn,l=!1){let c=this.elements,h=2*r/(e-t),g=2*r/(n-s),u=(e+t)/(e-t),m=(n+s)/(n-s),_,S;if(l)_=r/(a-r),S=a*r/(a-r);else if(o===Rn)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Rs)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=g,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Rn,l=!1){let c=this.elements,h=2/(e-t),g=2/(n-s),u=-(e+t)/(e-t),m=-(n+s)/(n-s),_,S;if(l)_=1/(a-r),S=a/(a-r);else if(o===Rn)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===Rs)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=g,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ls=new D,Nn=new Wt,Sf=new D(0,0,0),bf=new D(1,1,1),xi=new D,la=new D,fn=new D,wh=new Wt,Ah=new Ge,xn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],g=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-g,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER="XYZ";var Ls=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ef=0,Rh=new D,cs=new Ge,ei=new Wt,ca=new D,js=new D,Tf=new D,wf=new Ge,Ch=new D(1,0,0),Ph=new D(0,1,0),Ih=new D(0,0,1),Lh={type:"added"},Af={type:"removed"},hs={type:"childadded",child:null},Tl={type:"childremoved",child:null},Ne=class i extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new xn,n=new Ge,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Wt},normalMatrix:{value:new Nt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(Ch,t)}rotateY(t){return this.rotateOnAxis(Ph,t)}rotateZ(t){return this.rotateOnAxis(Ih,t)}translateOnAxis(t,e){return Rh.copy(t).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ch,t)}translateY(t){return this.translateOnAxis(Ph,t)}translateZ(t){return this.translateOnAxis(Ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ca.copy(t):ca.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(js,ca,this.up):ei.lookAt(ca,js,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(ei),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Dt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lh),hs.child=t,this.dispatchEvent(hs),hs.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Af),Tl.child=t,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lh),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,t,Tf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,wf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let g=l[c];r(t.shapes,g)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),g=a(t.shapes),u=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),g.length>0&&(n.shapes=g),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ne.DEFAULT_UP=new D(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gn=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rf={type:"move"},Ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let S of t.hand.values()){let p=e.getJointPose(S,n),f=this._getHandJoint(c,S);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],g=c.joints["thumb-tip"],u=h.position.distanceTo(g.position),m=.02,_=.005;c.inputState.pinching&&u>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},ha={h:0,s:0,l:0};function wl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=Sc(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=wl(a,r,t+1/3),this.g=wl(a,r,t),this.b=wl(a,r,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){let n=Fu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return Jt.workingToColorSpace(qe.copy(this),t),Math.round(Vt(qe.r*255,0,255))*65536+Math.round(Vt(qe.g*255,0,255))*256+Math.round(Vt(qe.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(qe.copy(this),e);let n=qe.r,s=qe.g,r=qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let g=a-o;switch(c=h<=.5?g/(a+o):g/(2-a-o),a){case n:l=(s-r)/g+(s<r?6:0);break;case s:l=(r-n)/g+2;break;case r:l=(n-s)/g+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=ke){Jt.workingToColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,s=qe.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(ha);let n=cr(yi.h,ha.h,e),s=cr(yi.s,ha.s,e),r=cr(yi.l,ha.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new zt;zt.NAMES=Fu;var gr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},_r=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Un=new D,ni=new D,Al=new D,ii=new D,us=new D,ds=new D,Dh=new D,Rl=new D,Cl=new D,Pl=new D,Il=new ue,Ll=new ue,Dl=new ue,ai=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Un.subVectors(t,e),s.cross(Un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Un.subVectors(s,e),ni.subVectors(n,e),Al.subVectors(t,e);let a=Un.dot(Un),o=Un.dot(ni),l=Un.dot(Al),c=ni.dot(ni),h=ni.dot(Al),g=a*c-o*o;if(g===0)return r.set(0,0,0),null;let u=1/g,m=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Il.setScalar(0),Ll.setScalar(0),Dl.setScalar(0),Il.fromBufferAttribute(t,e),Ll.fromBufferAttribute(t,n),Dl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Il,r.x),a.addScaledVector(Ll,r.y),a.addScaledVector(Dl,r.z),a}static isFrontFacing(t,e,n,s){return Un.subVectors(n,e),ni.subVectors(t,e),Un.cross(ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Un.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;us.subVectors(s,n),ds.subVectors(r,n),Rl.subVectors(t,n);let l=us.dot(Rl),c=ds.dot(Rl);if(l<=0&&c<=0)return e.copy(n);Cl.subVectors(t,s);let h=us.dot(Cl),g=ds.dot(Cl);if(h>=0&&g<=h)return e.copy(s);let u=l*g-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(us,a);Pl.subVectors(t,r);let m=us.dot(Pl),_=ds.dot(Pl);if(_>=0&&m<=_)return e.copy(r);let S=m*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(ds,o);let p=h*_-m*g;if(p<=0&&g-h>=0&&m-_>=0)return Dh.subVectors(r,s),o=(g-h)/(g-h+(m-_)),e.copy(s).addScaledVector(Dh,o);let f=1/(p+S+u);return a=S*f,o=u*f,e.copy(n).addScaledVector(us,a).addScaledVector(ds,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Fn):Fn.fromBufferAttribute(r,a),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ua.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ua.copy(n.boundingBox)),ua.applyMatrix4(t.matrixWorld),this.union(ua)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),da.subVectors(this.max,Qs),fs.subVectors(t.a,Qs),ps.subVectors(t.b,Qs),ms.subVectors(t.c,Qs),vi.subVectors(ps,fs),Mi.subVectors(ms,ps),Xi.subVectors(fs,ms);let e=[0,-vi.z,vi.y,0,-Mi.z,Mi.y,0,-Xi.z,Xi.y,vi.z,0,-vi.x,Mi.z,0,-Mi.x,Xi.z,0,-Xi.x,-vi.y,vi.x,0,-Mi.y,Mi.x,0,-Xi.y,Xi.x,0];return!Nl(e,fs,ps,ms,da)||(e=[1,0,0,0,1,0,0,0,1],!Nl(e,fs,ps,ms,da))?!1:(fa.crossVectors(vi,Mi),e=[fa.x,fa.y,fa.z],Nl(e,fs,ps,ms,da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},si=[new D,new D,new D,new D,new D,new D,new D,new D],Fn=new D,ua=new Wn,fs=new D,ps=new D,ms=new D,vi=new D,Mi=new D,Xi=new D,Qs=new D,da=new D,fa=new D,qi=new D;function Nl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qi.fromArray(i,r);let o=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=t.dot(qi),c=e.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ve=new D,pa=new Et,Cf=0,an=class extends On{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vc,this.updateRanges=[],this.gpuType=Pn,this.version=0,this._normalizationScale=t!==void 0?jo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pa.fromBufferAttribute(this,e),pa.applyMatrix3(t),this.setXY(e,pa.x,pa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ec(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Tc(t,this.array)}};var xr=class extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var yr=class extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ee=class extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}},Pf=new Wn,tr=new D,Ul=new D,ci=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Pf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);let e=tr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(tr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ul.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(Ul)),this.expandByPoint(tr.copy(t.center).sub(Ul))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},If=0,An=new Wt,Fl=new Ne,gs=new D,pn=new Wn,er=new Wn,Le=new D,Ue=class i extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ef(t)?yr:xr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,n){return An.makeTranslation(t,e,n),this.applyMatrix4(An),this}scale(t,e,n){return An.makeScale(t,e,n),this.applyMatrix4(An),this}lookAt(t){return Fl.lookAt(t),Fl.updateMatrix(),this.applyMatrix4(Fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ee(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];er.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(pn.min,er.min),pn.expandByPoint(Le),Le.addVectors(pn.max,er.max),pn.expandByPoint(Le)):(pn.expandByPoint(er.min),pn.expandByPoint(er.max))}pn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Le.fromBufferAttribute(o,c),l&&(gs.fromBufferAttribute(t,c),Le.add(gs)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new an(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new D,l[L]=new D;let h=new D,g=new D,u=new D,m=new Et,_=new Et,S=new Et,p=new D,f=new D;function M(L,R,N){c[L]=c[R]=c[N]=1,h.fromBufferAttribute(n,L),g.fromBufferAttribute(n,R),u.fromBufferAttribute(n,N),m.fromBufferAttribute(r,L),_.fromBufferAttribute(r,R),S.fromBufferAttribute(r,N),g.sub(h),u.sub(h),_.sub(m),S.sub(m);let O=1/(_.x*S.y-S.x*_.y);isFinite(O)&&(p.copy(g).multiplyScalar(S.y).addScaledVector(u,-_.y).multiplyScalar(O),f.copy(u).multiplyScalar(_.x).addScaledVector(g,-S.x).multiplyScalar(O),o[L].add(p),o[R].add(p),o[N].add(p),l[L].add(f),l[R].add(f),l[N].add(f))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let L=0,R=w.length;L<R;++L){let N=w[L],O=N.start,X=N.count;for(let P=O,W=O+X;P<W;P+=3)M(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let b=new D,A=new D,T=new D,d=new D;function v(L){T.fromBufferAttribute(s,L),d.copy(T);let R=o[L];b.copy(R),b.sub(T.multiplyScalar(T.dot(R))).normalize(),A.crossVectors(d,R);let O=A.dot(l[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,O)}for(let L=0,R=n.count;L<R;++L)c[L]&&v(L);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,g=new D;if(t)for(let u=0,m=t.count;u<m;u+=3){let _=t.getX(u+0),S=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,p),h.subVectors(a,r),g.subVectors(s,r),h.cross(g),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),g.subVectors(s,r),h.cross(g),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,g=o.normalized,u=new c.constructor(l.length*h),m=0,_=0;for(let S=0,p=l.length;S<p;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*h;for(let f=0;f<h;f++)u[_++]=c[m++]}return new an(u,h,g)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,g=c.length;h<g;h++){let u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let g=0,u=c.length;g<u;g++){let m=c[g];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],g=r[c];for(let u=0,m=g.length;u<m;u++)h.push(g[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let g=a[c];this.addGroup(g.start,g.count,g.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Za=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=vc,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Nh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Nh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Nh(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Fi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var je=new D,vr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?jo(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){pr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new an(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){pr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ec(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Tc(t,this.data.array)}},Ol=new D,Lf=new D,Df=new Nt,mn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ol.subVectors(n,e).cross(Lf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ol),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Df.getNormalMatrix(t),s=this.coplanarPoint(Ol).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Nf=0,Xn=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Hs,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ec,this.blendDst=nc,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ua,this.stencilZFail=Ua,this.stencilZPass=Ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new mn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Et().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Et().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ji=class extends Xn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_s,nr=new D,xs=new D,ys=new D,vs=new Et,ir=new Et,Ou=new Wt,ma=new D,sr=new D,ga=new D,Uh=new Et,Bl=new Et,Fh=new Et,Ns=class extends Ne{constructor(t=new Ji){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new Ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Za(e,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new vr(n,3,0,!1)),_s.setAttribute("uv",new vr(n,2,3,!1))}this.geometry=_s,this.material=t,this.center=new Et(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Dt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),Ou.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-ys.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;_a(ma.set(-.5,-.5,0),ys,a,xs,s,r),_a(sr.set(.5,-.5,0),ys,a,xs,s,r),_a(ga.set(.5,.5,0),ys,a,xs,s,r),Uh.set(0,0),Bl.set(1,0),Fh.set(1,1);let o=t.ray.intersectTriangle(ma,sr,ga,!1,nr);if(o===null&&(_a(sr.set(-.5,.5,0),ys,a,xs,s,r),Bl.set(0,1),o=t.ray.intersectTriangle(ma,ga,sr,!1,nr),o===null))return;let l=t.ray.origin.distanceTo(nr);l<t.near||l>t.far||e.push({distance:l,point:nr.clone(),uv:ai.getInterpolation(nr,ma,sr,ga,Uh,Bl,Fh,new Et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function _a(i,t,e,n,s,r){vs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ir.x=r*vs.x-s*vs.y,ir.y=s*vs.x+r*vs.y):ir.copy(vs),i.copy(t),i.x+=ir.x,i.y+=ir.y,i.applyMatrix4(Ou)}var ri=new D,zl=new D,xa=new D,ya=new D,bi=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){zl.copy(t).add(e).multiplyScalar(.5),xa.copy(e).sub(t).normalize(),ya.copy(this.origin).sub(zl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(xa),o=ya.dot(this.direction),l=-ya.dot(xa),c=ya.lengthSq(),h=Math.abs(1-a*a),g,u,m,_;if(h>0)if(g=a*l-o,u=a*o-l,_=r*h,g>=0)if(u>=-_)if(u<=_){let S=1/h;g*=S,u*=S,m=g*(g+a*u+2*o)+u*(a*g+u+2*l)+c}else u=r,g=Math.max(0,-(a*u+o)),m=-g*g+u*(u+2*l)+c;else u=-r,g=Math.max(0,-(a*u+o)),m=-g*g+u*(u+2*l)+c;else u<=-_?(g=Math.max(0,-(-a*r+o)),u=g>0?-r:Math.min(Math.max(-r,-l),r),m=-g*g+u*(u+2*l)+c):u<=_?(g=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(g=Math.max(0,-(a*r+o)),u=g>0?r:Math.min(Math.max(-r,-l),r),m=-g*g+u*(u+2*l)+c);else u=a>0?-r:r,g=Math.max(0,-(a*u+o)),m=-g*g+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(zl).addScaledVector(xa,u),m}intersectSphere(t,e){if(t.radius<0)return null;ri.subVectors(t.center,this.origin);let n=ri.dot(this.direction),s=ri.dot(ri)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,g=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),g>=0?(o=(t.min.z-u.z)*g,l=(t.max.z-u.z)*g):(o=(t.max.z-u.z)*g,l=(t.min.z-u.z)*g),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,g=t.x-a.x,u=t.y-a.y,m=t.z-a.z,_=e.x-a.x,S=e.y-a.y,p=e.z-a.z,f=n.x-a.x,M=n.y-a.y,w=n.z-a.z,b=Math.abs(l),A=Math.abs(c),T=Math.abs(h),d,v,L,R,N,O,X,P,W,Z,V,nt;if(b>=A&&b>=T?(L=l,O=g,W=_,nt=f,l>=0?(d=c,v=h,R=u,N=m,X=S,P=p,Z=M,V=w):(d=h,v=c,R=m,N=u,X=p,P=S,Z=w,V=M)):A>=T?(L=c,O=u,W=S,nt=M,c>=0?(d=h,v=l,R=m,N=g,X=p,P=_,Z=w,V=f):(d=l,v=h,R=g,N=m,X=_,P=p,Z=f,V=w)):(L=h,O=m,W=p,nt=w,h>=0?(d=l,v=c,R=g,N=u,X=_,P=S,Z=f,V=M):(d=c,v=l,R=u,N=g,X=S,P=_,Z=M,V=f)),L===0)return null;let q=d/L,Q=v/L,G=1/L,tt=R-q*O,pt=N-Q*O,F=X-q*W,et=P-Q*W,yt=Z-q*nt,Rt=V-Q*nt,_t=yt*et-Rt*F,Bt=tt*Rt-pt*yt,xe=F*pt-et*tt;if(s){if(_t<0||Bt<0||xe<0)return null}else if((_t<0||Bt<0||xe<0)&&(_t>0||Bt>0||xe>0))return null;let Lt=_t+Bt+xe;if(Lt===0)return null;let ie=G*(_t*O+Bt*W+xe*nt);return(Lt>0?ie<0:ie>0)?null:this.at(ie/Lt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ei=class extends Xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Oh=new Wt,Yi=new bi,va=new ci,Bh=new D,Ma=new D,Sa=new D,ba=new D,kl=new D,Ea=new D,zh=new D,Ta=new D,on=class extends Ne{constructor(t=new Ue,e=new Ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],g=r[l];h!==0&&(kl.fromBufferAttribute(g,t),a?Ea.addScaledVector(kl,h):Ea.addScaledVector(kl.sub(e),h))}e.add(Ea)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),Yi.copy(t.ray).recast(t.near),!(va.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(va,Bh)===null||Yi.origin.distanceToSquared(Bh)>(t.far-t.near)**2))&&(Oh.copy(r).invert(),Yi.copy(t.ray).applyMatrix4(Oh),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,g=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){let p=u[_],f=a[p.materialIndex],M=Math.max(p.start,m.start),w=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=M,A=w;b<A;b+=3){let T=o.getX(b),d=o.getX(b+1),v=o.getX(b+2);s=wa(this,f,t,n,c,h,g,T,d,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let p=_,f=S;p<f;p+=3){let M=o.getX(p),w=o.getX(p+1),b=o.getX(p+2);s=wa(this,a,t,n,c,h,g,M,w,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){let p=u[_],f=a[p.materialIndex],M=Math.max(p.start,m.start),w=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=M,A=w;b<A;b+=3){let T=b,d=b+1,v=b+2;s=wa(this,f,t,n,c,h,g,T,d,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=_,f=S;p<f;p+=3){let M=p,w=p+1,b=p+2;s=wa(this,a,t,n,c,h,g,M,w,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Uf(i,t,e,n,s,r,a,o){let l;if(t.side===en?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ni,o),l===null)return null;Ta.copy(o),Ta.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ta);return c<e.near||c>e.far?null:{distance:c,point:Ta.clone(),object:i}}function wa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ma),i.getVertexPosition(l,Sa),i.getVertexPosition(c,ba);let h=Uf(i,t,e,n,Ma,Sa,ba,zh);if(h){let g=new D;ai.getBarycoord(zh,Ma,Sa,ba,g),s&&(h.uv=ai.getInterpolatedAttribute(s,o,l,c,g,new Et)),r&&(h.uv1=ai.getInterpolatedAttribute(r,o,l,c,g,new Et)),a&&(h.normal=ai.getInterpolatedAttribute(a,o,l,c,g,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};ai.getNormal(Ma,Sa,ba,u.normal),h.face=u,h.barycoord=g}return h}var Mr=class extends tn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=De,h=De,g,u){super(null,a,o,l,c,h,s,r,g,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sr=class extends an{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ms=new Wt,kh=new Wt,Aa=[],Gh=new Wn,Ff=new Wt,rr=new on,ar=new ci,br=class extends on{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Sr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ff)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),Gh.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(Gh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),ar.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),t.ray.intersectsSphere(ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ms),kh.multiplyMatrices(n,Ms),rr.matrixWorld=kh,rr.raycast(t,Aa);for(let a=0,o=Aa.length;a<o;a++){let l=Aa[a];l.instanceId=r,l.object=this,e.push(l)}Aa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Sr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mr(new Float32Array(s*this.count),s,this.count,_o,Pn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Zi=new ci,Of=new Et(.5,.5),Ra=new D,Ti=class{constructor(t=new mn,e=new mn,n=new mn,s=new mn,r=new mn,a=new mn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],g=r[5],u=r[6],m=r[7],_=r[8],S=r[9],p=r[10],f=r[11],M=r[12],w=r[13],b=r[14],A=r[15];if(s[0].setComponents(c-a,m-h,f-_,A-M).normalize(),s[1].setComponents(c+a,m+h,f+_,A+M).normalize(),s[2].setComponents(c+o,m+g,f+S,A+w).normalize(),s[3].setComponents(c-o,m-g,f-S,A-w).normalize(),n)s[4].setComponents(l,u,p,b).normalize(),s[5].setComponents(c-l,m-u,f-p,A-b).normalize();else if(s[4].setComponents(c-l,m-u,f-p,A-b).normalize(),e===Rn)s[5].setComponents(c+l,m+u,f+p,A+b).normalize();else if(e===Rs)s[5].setComponents(l,u,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(t){Zi.center.set(0,0,0);let e=Of.distanceTo(t.center);return Zi.radius=.7071067811865476+e,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ra.x=s.normal.x>0?t.max.x:t.min.x,Ra.y=s.normal.y>0?t.max.y:t.min.y,Ra.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Hh=new Wt,Ja=class i{constructor(){this.coordinateSystem=Rn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Hh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ti),n[s].setFromProjectionMatrix(Hh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ti),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Us=class extends Xn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vh=new Wt,ql=new bi,Ca=new ci,Pa=new D,Er=class extends Ne{constructor(t=new Ue,e=new Us){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(s),Ca.radius+=r,t.ray.intersectsSphere(Ca)===!1)return;Vh.copy(s).invert(),ql.copy(t.ray).applyMatrix4(Vh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,g=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=u,S=m;_<S;_++){let p=c.getX(_);Pa.fromBufferAttribute(g,p),Wh(Pa,p,l,s,t,e,this)}}else{let u=Math.max(0,a.start),m=Math.min(g.count,a.start+a.count);for(let _=u,S=m;_<S;_++)Pa.fromBufferAttribute(g,_),Wh(Pa,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Wh(i,t,e,n,s,r,a){let o=ql.distanceSqToPoint(i);if(o<e){let l=new D;ql.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Tr=class extends tn{constructor(t=[],e=ts,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},$i=class extends tn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hi=class extends tn{constructor(t,e,n=Bn,s,r,a,o=De,l=De,c,h=li,g=1){if(h!==li&&h!==di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:g};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Is(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},wr=class extends hi{constructor(t,e=Bn,n=ts,s,r,a=De,o=De,l,c=li){let h={width:t,height:t,depth:1},g=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ar=class extends tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},me=class i extends Ue{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],g=[],u=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(g,2));function _(S,p,f,M,w,b,A,T,d,v,L){let R=b/d,N=A/v,O=b/2,X=A/2,P=T/2,W=d+1,Z=v+1,V=0,nt=0,q=new D;for(let Q=0;Q<Z;Q++){let G=Q*N-X;for(let tt=0;tt<W;tt++){let pt=tt*R-O;q[S]=pt*M,q[p]=G*w,q[f]=P,c.push(q.x,q.y,q.z),q[S]=0,q[p]=0,q[f]=T>0?1:-1,h.push(q.x,q.y,q.z),g.push(tt/d),g.push(1-Q/v),V+=1}}for(let Q=0;Q<v;Q++)for(let G=0;G<d;G++){let tt=u+G+W*Q,pt=u+G+W*(Q+1),F=u+(G+1)+W*(Q+1),et=u+(G+1)+W*Q;l.push(tt,pt,et),l.push(pt,F,et),nt+=6}o.addGroup(m,nt,L),m+=nt,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Rr=class i extends Ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new D,h=new Et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let g=0,u=3;g<=e;g++,u+=3){let m=n+g/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let g=1;g<=e;g++)r.push(g,g+1,0);this.setIndex(r),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(o,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},wi=class i extends Ue{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],g=[],u=[],m=[],_=0,S=[],p=n/2,f=0;M(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(m,2));function M(){let b=new D,A=new D,T=0,d=(e-t)/n;for(let v=0;v<=r;v++){let L=[],R=v/r,N=R*(e-t)+t;for(let O=0;O<=s;O++){let X=O/s,P=X*l+o,W=Math.sin(P),Z=Math.cos(P);A.x=N*W,A.y=-R*n+p,A.z=N*Z,g.push(A.x,A.y,A.z),b.set(W,d,Z).normalize(),u.push(b.x,b.y,b.z),m.push(X,1-R),L.push(_++)}S.push(L)}for(let v=0;v<s;v++)for(let L=0;L<r;L++){let R=S[L][v],N=S[L+1][v],O=S[L+1][v+1],X=S[L][v+1];(t>0||L!==0)&&(h.push(R,N,X),T+=3),(e>0||L!==r-1)&&(h.push(N,O,X),T+=3)}c.addGroup(f,T,0),f+=T}function w(b){let A=_,T=new Et,d=new D,v=0,L=b===!0?t:e,R=b===!0?1:-1;for(let O=1;O<=s;O++)g.push(0,p*R,0),u.push(0,R,0),m.push(.5,.5),_++;let N=_;for(let O=0;O<=s;O++){let P=O/s*l+o,W=Math.cos(P),Z=Math.sin(P);d.x=L*Z,d.y=p*R,d.z=L*W,g.push(d.x,d.y,d.z),u.push(0,R,0),T.x=W*.5+.5,T.y=Z*.5*R+.5,m.push(T.x,T.y),_++}for(let O=0;O<s;O++){let X=A+O,P=N+O;b===!0?h.push(P,P+1,X):h.push(P+1,P,X),v+=3}c.addGroup(f,v,b===!0?1:2),f+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ki=class i extends wi{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cr=class i extends Ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(r.slice(),3)),this.setAttribute("uv",new ee(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let w=new D,b=new D,A=new D;for(let T=0;T<e.length;T+=3)m(e[T+0],w),m(e[T+1],b),m(e[T+2],A),l(w,b,A,M)}function l(M,w,b,A){let T=A+1,d=[];for(let v=0;v<=T;v++){d[v]=[];let L=M.clone().lerp(b,v/T),R=w.clone().lerp(b,v/T),N=T-v;for(let O=0;O<=N;O++)O===0&&v===T?d[v][O]=L:d[v][O]=L.clone().lerp(R,O/N)}for(let v=0;v<T;v++)for(let L=0;L<2*(T-v)-1;L++){let R=Math.floor(L/2);L%2===0?(u(d[v][R+1]),u(d[v+1][R]),u(d[v][R])):(u(d[v][R+1]),u(d[v+1][R+1]),u(d[v+1][R]))}}function c(M){let w=new D;for(let b=0;b<r.length;b+=3)w.x=r[b+0],w.y=r[b+1],w.z=r[b+2],w.normalize().multiplyScalar(M),r[b+0]=w.x,r[b+1]=w.y,r[b+2]=w.z}function h(){let M=new D;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];let b=p(M)/2/Math.PI+.5,A=f(M)/Math.PI+.5;a.push(b,1-A)}_(),g()}function g(){for(let M=0;M<a.length;M+=6){let w=a[M+0],b=a[M+2],A=a[M+4],T=Math.max(w,b,A),d=Math.min(w,b,A);T>.9&&d<.1&&(w<.2&&(a[M+0]+=1),b<.2&&(a[M+2]+=1),A<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function m(M,w){let b=M*3;w.x=t[b+0],w.y=t[b+1],w.z=t[b+2]}function _(){let M=new D,w=new D,b=new D,A=new D,T=new Et,d=new Et,v=new Et;for(let L=0,R=0;L<r.length;L+=9,R+=6){M.set(r[L+0],r[L+1],r[L+2]),w.set(r[L+3],r[L+4],r[L+5]),b.set(r[L+6],r[L+7],r[L+8]),T.set(a[R+0],a[R+1]),d.set(a[R+2],a[R+3]),v.set(a[R+4],a[R+5]),A.copy(M).add(w).add(b).divideScalar(3);let N=p(A);S(T,R+0,M,N),S(d,R+2,w,N),S(v,R+4,b,N)}}function S(M,w,b,A){A<0&&M.x===1&&(a[w]=M.x-1),b.x===0&&b.z===0&&(a[w]=A/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Fs=class i extends Cr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Os=class i extends Cr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ai=class i extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,g=t/o,u=e/l,m=[],_=[],S=[],p=[];for(let f=0;f<h;f++){let M=f*u-a;for(let w=0;w<c;w++){let b=w*g-r;_.push(b,-M,0),S.push(0,0,1),p.push(w/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){let w=M+c*f,b=M+c*(f+1),A=M+1+c*(f+1),T=M+1+c*f;m.push(w,b,T),m.push(b,A,T)}this.setIndex(m),this.setAttribute("position",new ee(_,3)),this.setAttribute("normal",new ee(S,3)),this.setAttribute("uv",new ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Pr=class i extends Ue{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],g=t,u=(e-t)/s,m=new D,_=new Et;for(let S=0;S<=s;S++){for(let p=0;p<=n;p++){let f=r+p/n*a;m.x=g*Math.cos(f),m.y=g*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/e+1)/2,_.y=(m.y/e+1)/2,h.push(_.x,_.y)}g+=u}for(let S=0;S<s;S++){let p=S*(n+1);for(let f=0;f<n;f++){let M=f+p,w=M,b=M+n+1,A=M+n+2,T=M+1;o.push(w,b,T),o.push(b,A,T)}}this.setIndex(o),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var qn=class i extends Ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],g=new D,u=new D,m=[],_=[],S=[],p=[];for(let f=0;f<=n;f++){let M=[],w=f/n,b=a+w*o,A=t*Math.cos(b),T=Math.sqrt(t*t-A*A),d=0;f===0&&a===0?d=.5/e:f===n&&l===Math.PI&&(d=-.5/e);for(let v=0;v<=e;v++){let L=v/e,R=s+L*r;g.x=-T*Math.cos(R),g.y=A,g.z=T*Math.sin(R),_.push(g.x,g.y,g.z),u.copy(g).normalize(),S.push(u.x,u.y,u.z),p.push(L+d,1-w),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){let w=h[f][M+1],b=h[f][M],A=h[f+1][M],T=h[f+1][M+1];(f!==0||a>0)&&m.push(w,b,T),(f!==n-1||l<Math.PI)&&m.push(b,A,T)}this.setIndex(m),this.setAttribute("position",new ee(_,3)),this.setAttribute("normal",new ee(S,3)),this.setAttribute("uv",new ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Cn=class i extends Ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],g=[],u=new D,m=new D,_=new D;for(let S=0;S<=n;S++){let p=a+S/n*o;for(let f=0;f<=s;f++){let M=f/s*r;m.x=(t+e*Math.cos(p))*Math.cos(M),m.y=(t+e*Math.cos(p))*Math.sin(M),m.z=e*Math.sin(p),c.push(m.x,m.y,m.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),_.subVectors(m,u).normalize(),h.push(_.x,_.y,_.z),g.push(f/s),g.push(S/n)}}for(let S=1;S<=n;S++)for(let p=1;p<=s;p++){let f=(s+1)*S+p-1,M=(s+1)*(S-1)+p-1,w=(s+1)*(S-1)+p,b=(s+1)*S+p;l.push(f,M,b),l.push(M,w,b)}this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ns(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Xh(s))s.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Xh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ze(i){let t={};for(let e=0;e<i.length;e++){let n=ns(i[e]);for(let s in n)t[s]=n[s]}return t}function Xh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Bf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ac(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var Bu={clone:ns,merge:Ze},zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yn=class extends Xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zf,this.fragmentShader=kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ns(t.uniforms),this.uniformsGroups=Bf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new zt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Et().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ue().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Wt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$a=class extends Yn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ri=class extends Xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ka=class extends Xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ja=class extends Xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ss(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ia(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ci=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qa=class extends Ci{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vl,endingEnd:Vl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wl:r=t,o=2*e-n;break;case Xl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wl:a=t,l=2*n-e;break;case Xl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,g=this._offsetNext,u=this._weightPrev,m=this._weightNext,_=(n-e)/(s-e),S=_*_,p=S*_,f=-u*p+2*u*S-u*_,M=(1+u)*p+(-1.5-2*u)*S+(-.5+u)*_+1,w=(-1-m)*p+(1.5+m)*S+.5*_,b=m*p-m*S;for(let A=0;A!==o;++A)r[A]=f*a[h+A]+M*a[c+A]+w*a[l+A]+b*a[g+A];return r}},to=class extends Ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),g=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*g+a[l+u]*h;return r}},eo=class extends Ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},no=class extends Ci{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,g=this.outTangents;if(!h||!g){let _=(n-e)/(s-e),S=1-_;for(let p=0;p!==o;++p)r[p]=a[c+p]*S+a[l+p]*_;return r}let u=o*2,m=t-1;for(let _=0;_!==o;++_){let S=a[c+_],p=a[l+_],f=m*u+_*2,M=g[f],w=g[f+1],b=t*u+_*2,A=h[b],T=h[b+1],d=Hf(n,e,M,A,s);r[_]=zu(d,S,w,T,p)}return r}};function zu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Gf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Hf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=zu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Gf(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var yn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ss(e,this.TimeBufferType),this.values=Ss(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ss(t.times,Array),values:Ss(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ia(t.settings)&&(n.settings={inTangents:Ss(t.settings.inTangents,Array),outTangents:Ss(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new to(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new no(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case hr:e=this.InterpolantFactoryMethodDiscrete;break;case Wa:e=this.InterpolantFactoryMethodLinear;break;case Na:e=this.InterpolantFactoryMethodSmooth;break;case Hl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return It("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hr;case this.InterpolantFactoryMethodLinear:return Wa;case this.InterpolantFactoryMethodSmooth:return Na;case this.InterpolantFactoryMethodBezier:return Hl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Ia(this.settings)&&(qh(this.settings.inTangents,t),qh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ia(this.settings)&&(Yh(this.settings.inTangents,t),Yh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Dt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Dt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Dt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Dt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&nf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Dt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Na,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let g=o*n,u=g-n,m=g+n;for(let _=0;_!==n;++_){let S=e[g+_];if(S!==e[u+_]||S!==e[m+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let g=o*n,u=a*n;for(let m=0;m!==n;++m)e[u+m]=e[g+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ia(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function qh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Yh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Wa;var Pi=class extends yn{constructor(t,e,n){super(t,e,n)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=hr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};io.prototype.ValueTypeName="color";var so=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};so.prototype.ValueTypeName="number";var ro=class extends Ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ge.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ir=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ro(this.times,this.values,this.getValueSize(),t)}};Ir.prototype.ValueTypeName="quaternion";Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends yn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=hr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};ao.prototype.ValueTypeName="vector";var oo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,g){return c.push(h,g),this},this.removeHandler=function(h){let g=c.indexOf(h);return g!==-1&&c.splice(g,2),this},this.getHandler=function(h){for(let g=0,u=c.length;g<u;g+=2){let m=c[g],_=c[g+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ku=new oo,lo=class{constructor(t){this.manager=t!==void 0?t:ku,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};lo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bs=class extends Ne{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Lr=class extends Bs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Gl=new Wt,Zh=new D,Jh=new D,Dr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ti,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Zh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zh),Jh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Gl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Rs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Gl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},La=new D,Da=new Ge,Hn=new D,Nr=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(La,Da,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Da,Hn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(La,Da,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Da,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Si=new D,$h=new Et,Kh=new Et,Ye=class extends Nr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,$h,Kh),e.subVectors(Kh,$h)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(lr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Yl=class extends Dr{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0}},Ur=class extends Bs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Fr=class extends Nr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Zl=class extends Dr{constructor(){super(new Fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Or=class extends Bs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Zl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var bs=-90,Es=1,zs=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ye(bs,Es,t,e);s.layers=this.layers,this.add(s);let r=new Ye(bs,Es,t,e);r.layers=this.layers,this.add(r);let a=new Ye(bs,Es,t,e);a.layers=this.layers,this.add(a);let o=new Ye(bs,Es,t,e);o.layers=this.layers,this.add(o);let l=new Ye(bs,Es,t,e);l.layers=this.layers,this.add(l);let c=new Ye(bs,Es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,g=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=S,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(g,u,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},co=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Rc="\\[\\]\\.:\\/",Vf=new RegExp("["+Rc+"]","g"),Cc="[^"+Rc+"]",Wf="[^"+Rc.replace("\\.","")+"]",Xf=/((?:WC+[\/:])*)/.source.replace("WC",Cc),qf=/(WCOD+)?/.source.replace("WCOD",Wf),Yf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cc),Zf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cc),Jf=new RegExp("^"+Xf+qf+Yf+Zf+"$"),$f=["material","materials","bones","map"],Jl=class{constructor(t,e,n){let s=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vf,"")}static parseTrackName(t){let e=Jf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$f.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){It("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Dt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=Jl;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ux=new Float32Array(1);var jh=new Wt,Br=class{constructor(t,e,n=0,s=1/0){this.ray=new bi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ls,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Dt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jh),this}intersectObject(t,e=!0,n=[]){return $l(t,this,n,e),n.sort(Qh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)$l(t[s],this,n,e);return n.sort(Qh),n}};function Qh(i,t){return i.distance-t.distance}function $l(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)$l(r[a],t,e,!0)}}var ks=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Vt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Kl=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var zr=class extends On{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Pc(i,t,e,n){let s=Kf(n);switch(e){case mc:return i*t;case _o:return i*t/s.components*s.byteLength;case xo:return i*t/s.components*s.byteLength;case Ui:return i*t*2/s.components*s.byteLength;case yo:return i*t*2/s.components*s.byteLength;case gc:return i*t*3/s.components*s.byteLength;case kn:return i*t*4/s.components*s.byteLength;case vo:return i*t*4/s.components*s.byteLength;case Vr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xr:case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:case Eo:return Math.max(i,16)*Math.max(t,8)/4;case Mo:case bo:return Math.max(i,8)*Math.max(t,8)/2;case To:case wo:case Ro:case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ao:case Yr:case Po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Do:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Vo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xo:case qo:case Yo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Zo:case Jo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Zr:case $o:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kf(i){switch(i){case ln:case uc:return{byteLength:1,components:1};case Xs:case dc:case zn:return{byteLength:2,components:1};case mo:case go:return{byteLength:2,components:4};case Bn:case po:case Pn:return{byteLength:4,components:1};case fc:case pc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ld(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Qf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,g=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:g}}function n(o,l,c){let h=l.array,g=l.updateRanges;if(i.bindBuffer(c,o),g.length===0)i.bufferSubData(c,0,h);else{g.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<g.length;m++){let _=g[u],S=g[m];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++u,g[u]=S)}g.length=u+1;for(let m=0,_=g.length;m<_;m++){let S=g[m];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ep=`#ifdef USE_ALPHAHASH
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
#endif`,np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ap=`#ifdef USE_AOMAP
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
#endif`,op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lp=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fp=`#ifdef USE_IRIDESCENCE
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
#endif`,pp=`#ifdef USE_BUMPMAP
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bp=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Ep=`vec3 transformedNormal = objectNormal;
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
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kp=`#ifdef USE_GRADIENTMAP
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
}`,Gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wp=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Xp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$p=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Kp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jp=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,em=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cm=`#if defined( USE_POINTS_UV )
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
#endif`,hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mm=`#ifdef USE_MORPHTARGETS
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
#endif`,gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sm=`#ifdef USE_NORMALMAP
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
#endif`,bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Bm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,zm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,km=`#ifdef USE_SKINNING
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
#endif`,Gm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,Vm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ym=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zm=`#ifdef USE_TRANSMISSION
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t0=`uniform sampler2D t2D;
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`#include <common>
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
}`,a0=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,o0=`#define DISTANCE
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
}`,l0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`uniform float scale;
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
}`,d0=`uniform vec3 diffuse;
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
}`,f0=`#include <common>
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#define LAMBERT
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
}`,g0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,_0=`#define MATCAP
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
}`,x0=`#define MATCAP
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
}`,y0=`#define NORMAL
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
}`,v0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,M0=`#define PHONG
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
}`,S0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,b0=`#define STANDARD
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
}`,E0=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,T0=`#define TOON
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
}`,w0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,A0=`uniform float size;
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
}`,R0=`uniform vec3 diffuse;
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
}`,C0=`#include <common>
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
}`,P0=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,I0=`uniform float rotation;
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
}`,L0=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:tp,alphahash_pars_fragment:ep,alphamap_fragment:np,alphamap_pars_fragment:ip,alphatest_fragment:sp,alphatest_pars_fragment:rp,aomap_fragment:ap,aomap_pars_fragment:op,batching_pars_vertex:lp,batching_vertex:cp,begin_vertex:hp,beginnormal_vertex:up,bsdfs:dp,iridescence_fragment:fp,bumpmap_pars_fragment:pp,clipping_planes_fragment:mp,clipping_planes_pars_fragment:gp,clipping_planes_pars_vertex:_p,clipping_planes_vertex:xp,color_fragment:yp,color_pars_fragment:vp,color_pars_vertex:Mp,color_vertex:Sp,common:bp,defaultnormal_vertex:Ep,displacementmap_pars_vertex:Tp,displacementmap_vertex:wp,emissivemap_fragment:Ap,emissivemap_pars_fragment:Rp,colorspace_fragment:Cp,colorspace_pars_fragment:Pp,envmap_fragment:Ip,envmap_common_pars_fragment:Lp,envmap_pars_fragment:Dp,envmap_pars_vertex:Np,envmap_physical_pars_fragment:Xp,envmap_vertex:Up,fog_vertex:Fp,fog_pars_vertex:Op,fog_fragment:Bp,fog_pars_fragment:zp,gradientmap_pars_fragment:kp,lightmap_pars_fragment:Gp,lights_lambert_fragment:Hp,lights_lambert_pars_fragment:Vp,lights_pars_begin:Wp,lights_toon_fragment:qp,lights_toon_pars_fragment:Yp,lights_phong_fragment:Zp,lights_phong_pars_fragment:Jp,lights_physical_fragment:$p,lights_physical_pars_fragment:Kp,lights_fragment_begin:jp,lights_fragment_maps:Qp,lights_fragment_end:tm,lightprobes_pars_fragment:em,logdepthbuf_fragment:nm,logdepthbuf_pars_fragment:im,logdepthbuf_pars_vertex:sm,logdepthbuf_vertex:rm,map_fragment:am,map_pars_fragment:om,map_particle_fragment:lm,map_particle_pars_fragment:cm,metalnessmap_fragment:hm,metalnessmap_pars_fragment:um,morphinstance_vertex:dm,morphcolor_vertex:fm,morphnormal_vertex:pm,morphtarget_pars_vertex:mm,morphtarget_vertex:gm,normal_fragment_begin:_m,normal_fragment_maps:xm,normal_pars_fragment:ym,normal_pars_vertex:vm,normal_vertex:Mm,normalmap_pars_fragment:Sm,clearcoat_normal_fragment_begin:bm,clearcoat_normal_fragment_maps:Em,clearcoat_pars_fragment:Tm,iridescence_pars_fragment:wm,opaque_fragment:Am,packing:Rm,premultiplied_alpha_fragment:Cm,project_vertex:Pm,dithering_fragment:Im,dithering_pars_fragment:Lm,roughnessmap_fragment:Dm,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Fm,shadowmap_vertex:Om,shadowmask_pars_fragment:Bm,skinbase_vertex:zm,skinning_pars_vertex:km,skinning_vertex:Gm,skinnormal_vertex:Hm,specularmap_fragment:Vm,specularmap_pars_fragment:Wm,tonemapping_fragment:Xm,tonemapping_pars_fragment:qm,transmission_fragment:Ym,transmission_pars_fragment:Zm,uv_pars_fragment:Jm,uv_pars_vertex:$m,uv_vertex:Km,worldpos_vertex:jm,background_vert:Qm,background_frag:t0,backgroundCube_vert:e0,backgroundCube_frag:n0,cube_vert:i0,cube_frag:s0,depth_vert:r0,depth_frag:a0,distance_vert:o0,distance_frag:l0,equirect_vert:c0,equirect_frag:h0,linedashed_vert:u0,linedashed_frag:d0,meshbasic_vert:f0,meshbasic_frag:p0,meshlambert_vert:m0,meshlambert_frag:g0,meshmatcap_vert:_0,meshmatcap_frag:x0,meshnormal_vert:y0,meshnormal_frag:v0,meshphong_vert:M0,meshphong_frag:S0,meshphysical_vert:b0,meshphysical_frag:E0,meshtoon_vert:T0,meshtoon_frag:w0,points_vert:A0,points_frag:R0,shadow_vert:C0,shadow_frag:P0,sprite_vert:I0,sprite_frag:L0},gt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},$n={basic:{uniforms:Ze([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ze([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ze([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ze([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ze([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ze([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ze([gt.points,gt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ze([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ze([gt.common,gt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ze([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ze([gt.sprite,gt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:Ze([gt.common,gt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:Ze([gt.lights,gt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};$n.physical={uniforms:Ze([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Qo={r:0,b:0,g:0},D0=new Wt,cd=new Nt;cd.set(-1,0,0,0,1,0,0,0,1);function N0(i,t,e,n,s,r){let a=new zt(0),o=s===!0?0:1,l,c,h=null,g=0,u=null;function m(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let b=M.backgroundBlurriness>0;w=t.get(w,b)}return w}function _(M){let w=!1,b=m(M);b===null?p(a,o):b&&b.isColor&&(p(b,1),w=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,w){let b=m(w);b&&b.isCubeTexture?(c===void 0&&(c=new on(new me(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:ns($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,d){this.matrixWorld.copyPosition(d.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(D0.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(cd),c.material.toneMapped=Jt.getTransfer(b.colorSpace)!==te,(h!==b||g!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,g=b.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new on(new Ai(2,2),new Yn({name:"BackgroundMaterial",uniforms:ns($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(b.colorSpace)!==te,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||g!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,g=b.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,w){M.getRGB(Qo,Ac(i)),e.buffers.color.setClear(Qo.r,Qo.g,Qo.b,w,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:_,addToRenderList:S,dispose:f}}function U0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(N,O,X,P,W){let Z=!1,V=g(N,P,X,O);r!==V&&(r=V,c(r.object)),Z=m(N,P,X,W),Z&&_(N,P,X,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,b(N,O,X,P),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function g(N,O,X,P){let W=P.wireframe===!0,Z=n[O.id];Z===void 0&&(Z={},n[O.id]=Z);let V=N.isInstancedMesh===!0?N.id:0,nt=Z[V];nt===void 0&&(nt={},Z[V]=nt);let q=nt[X.id];q===void 0&&(q={},nt[X.id]=q);let Q=q[W];return Q===void 0&&(Q=u(l()),q[W]=Q),Q}function u(N){let O=[],X=[],P=[];for(let W=0;W<e;W++)O[W]=0,X[W]=0,P[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:P,object:N,attributes:{},index:null}}function m(N,O,X,P){let W=r.attributes,Z=O.attributes,V=0,nt=X.getAttributes();for(let q in nt)if(nt[q].location>=0){let G=W[q],tt=Z[q];if(tt===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor)),G===void 0||G.attribute!==tt||tt&&G.data!==tt.data)return!0;V++}return r.attributesNum!==V||r.index!==P}function _(N,O,X,P){let W={},Z=O.attributes,V=0,nt=X.getAttributes();for(let q in nt)if(nt[q].location>=0){let G=Z[q];G===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(G=N.instanceColor));let tt={};tt.attribute=G,G&&G.data&&(tt.data=G.data),W[q]=tt,V++}r.attributes=W,r.attributesNum=V,r.index=P}function S(){let N=r.newAttributes;for(let O=0,X=N.length;O<X;O++)N[O]=0}function p(N){f(N,0)}function f(N,O){let X=r.newAttributes,P=r.enabledAttributes,W=r.attributeDivisors;X[N]=1,P[N]===0&&(i.enableVertexAttribArray(N),P[N]=1),W[N]!==O&&(i.vertexAttribDivisor(N,O),W[N]=O)}function M(){let N=r.newAttributes,O=r.enabledAttributes;for(let X=0,P=O.length;X<P;X++)O[X]!==N[X]&&(i.disableVertexAttribArray(X),O[X]=0)}function w(N,O,X,P,W,Z,V){V===!0?i.vertexAttribIPointer(N,O,X,W,Z):i.vertexAttribPointer(N,O,X,P,W,Z)}function b(N,O,X,P){S();let W=P.attributes,Z=X.getAttributes(),V=O.defaultAttributeValues;for(let nt in Z){let q=Z[nt];if(q.location>=0){let Q=W[nt];if(Q===void 0&&(nt==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),nt==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){let G=Q.normalized,tt=Q.itemSize,pt=t.get(Q);if(pt===void 0)continue;let F=pt.buffer,et=pt.type,yt=pt.bytesPerElement,Rt=et===i.INT||et===i.UNSIGNED_INT||Q.gpuType===po;if(Q.isInterleavedBufferAttribute){let _t=Q.data,Bt=_t.isInterleavedBuffer===!0?_t.stride:_t.itemSize,xe=Q.offset;if(_t.isInstancedInterleavedBuffer||_t.isInstancedBufferAttribute){for(let Lt=0;Lt<q.locationSize;Lt++)f(q.location+Lt,_t.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Lt=0;Lt<q.locationSize;Lt++)p(q.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,F);for(let Lt=0;Lt<q.locationSize;Lt++)w(q.location+Lt,tt/q.locationSize,et,G,Bt*yt,(xe+tt/q.locationSize*Lt)*yt,Rt)}else{if(Q.isInstancedBufferAttribute){for(let _t=0;_t<q.locationSize;_t++)f(q.location+_t,Q.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let _t=0;_t<q.locationSize;_t++)p(q.location+_t);i.bindBuffer(i.ARRAY_BUFFER,F);for(let _t=0;_t<q.locationSize;_t++)w(q.location+_t,tt/q.locationSize,et,G,tt*yt,tt/q.locationSize*_t*yt,Rt)}}else if(V!==void 0){let G=V[nt];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(q.location,G);break;case 3:i.vertexAttrib3fv(q.location,G);break;case 4:i.vertexAttrib4fv(q.location,G);break;default:i.vertexAttrib1fv(q.location,G)}}}}M()}function A(){L();for(let N in n){let O=n[N];for(let X in O){let P=O[X];for(let W in P){let Z=P[W];for(let V in Z)h(Z[V].object),delete Z[V];delete P[W]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;let O=n[N.id];for(let X in O){let P=O[X];for(let W in P){let Z=P[W];for(let V in Z)h(Z[V].object),delete Z[V];delete P[W]}}delete n[N.id]}function d(N){for(let O in n){let X=n[O];for(let P in X){let W=X[P];if(W[N.id]===void 0)continue;let Z=W[N.id];for(let V in Z)h(Z[V].object),delete Z[V];delete W[N.id]}}}function v(N){for(let O in n){let X=n[O],P=N.isInstancedMesh===!0?N.id:0,W=X[P];if(W!==void 0){for(let Z in W){let V=W[Z];for(let nt in V)h(V[nt].object),delete V[nt];delete W[Z]}delete X[P],Object.keys(X).length===0&&delete n[O]}}}function L(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:d,initAttributes:S,enableAttribute:p,disableUnusedAttributes:M}}function F0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function O0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let d=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(d){return!(d!==kn&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(d){let v=d===zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(d!==ln&&d!==Pn&&!v&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(d){if(d==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(It("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&g===!1;e.reversedDepthBuffer===!0&&g===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&g===!0&&It("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:g,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:b,maxSamples:A,samples:T}}function B0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new mn,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,u){let m=g.length!==0||u||n!==0||s;return s=u,n=g.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,u){e=h(g,u,0)},this.setState=function(g,u,m){let _=g.clippingPlanes,S=g.clipIntersection,p=g.clipShadows,f=i.get(g);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,w=M*4,b=f.clippingState||null;l.value=b,b=h(_,u,w,m);for(let A=0;A!==w;++A)b[A]=e[A];f.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(g,u,m,_){let S=g!==null?g.length:0,p=null;if(S!==0){if(p=l.value,_!==!0||p===null){let f=m+S*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<f)&&(p=new Float32Array(f));for(let w=0,b=m;w!==S;++w,b+=4)a.copy(g[w]).applyMatrix4(M,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,p}}var Kr=class extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Tr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new me(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:ji});r.uniforms.tEquirect.value=e;let a=new on(s,r),o=e.minFilter;return e.minFilter===ui&&(e.minFilter=Qe),new zs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Gu=256,z0=3,k0=20,hd=256,ud=16,G0=3,H0=new D,V0=new zt,el=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new zs(1,10,null),this._boxMesh=new on(new me(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=H0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let g=l.autoClear,u=l.autoClearColor,m=l.autoClearDepth,_=l.autoClearStencil,S=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(t.background=l.getClearColor(V0));let p=new zs(n,s,h);return p.position.copy(o),p.update(l,t),l.autoClear=g,l.autoClearColor=u,l.autoClearDepth=m,l.autoClearStencil=_,t.background=S,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Gu,bc(t))}_fromTexture(t,e){t.mapping===ts||t.mapping===Ws?this._setSize(t.image.length===0?Gu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Hu(t,!1,!1),n=Math.log2(t)-z0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Hu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ts||t.mapping===Ws?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Vu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=W0(),this._integrationMaterial=X0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/ud);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-G0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(hd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=q0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Hu(i,t,e){return new Kr(i,{minFilter:ui,generateMipmaps:t,type:zn,colorSpace:ur,depthBuffer:e})}function jr(i,t,e){return new Yn({name:i,uniforms:t,vertexShader:Ht.cube_vert,fragmentShader:e,side:en,blending:ji,depthTest:!1,depthWrite:!1})}function W0(){return jr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${hd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function X0(){return jr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ud}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function q0(){return jr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${k0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Vu(){return jr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Wu(){return jr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Y0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===ho||m===uo)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let S=new Kr(_.height);return S.fromEquirectangularTexture(i,u),t.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let m=u.mapping,_=m===ho||m===uo,S=m===ts||m===Ws;if(_||S){let p=e.get(u),f=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new el(i)),p=_?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let M=u.image;return _&&M&&M.height>0||S&&M&&l(M)?(n===null&&(n=new el(i)),p=_?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,m){return m===ho?u.mapping=ts:m===uo&&(u.mapping=Ws),u}function l(u){let m=0,_=6;for(let S=0;S<_;S++)u[S]!==void 0&&m++;return m===_}function c(u){let m=u.target;m.removeEventListener("dispose",c);let _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function g(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function Z0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&or("WebGLRenderer: "+n+" extension not supported."),s}}}function J0(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(let p in _.attributes)t.remove(_.attributes[p]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let S=r.get(_);S&&(t.remove(S),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),e.memory.geometries++),S}function h(_){let S=_.attributes;for(let p in S)t.update(S[p],i.ARRAY_BUFFER)}function g(_){let S=_.index,p=_.attributes.position,f=0;if(p===void 0)return;let M=S!==null?S.array.length:p.array.length/3-1,w=p.count>=65535?yr:xr,b=new w(Math.ceil(M/3)*6,1),A=b.array;if(S!==null){let d=S.array;f=S.version;for(let v=0,L=0;v<M;v+=3){let R=d[v+0],N=d[v+1],O=d[v+2];A[L++]=R,A[L++]=N,A[L++]=N,A[L++]=O,A[L++]=O,A[L++]=R}}else{f=p.version;for(let d=0,v=0;d<M;d+=3){let L=d+0,R=d+1,N=d+2;A[v++]=L,A[v++]=R,A[v++]=R,A[v++]=N,A[v++]=N,A[v++]=L}}b.version=f;let T=r.get(_);T&&t.remove(T),r.set(_,b)}function u(_){let S=r.get(_);if(S){let p=_.index;p!==null&&S.version<p.version&&g(_)}else g(_);return r.get(_)}function m(){for(let _ in s){let S=s[_].deref();S!==void 0&&l(S)}}return{get:c,update:h,getWireframeAttribute:u,dispose:m}}function $0(i,t,e){let n;function s(g){n=g}let r,a;function o(g){r=g.type,a=g.bytesPerElement}function l(g,u){i.drawElements(n,u,r,g*a),e.update(u,n,1)}function c(g,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,g*a,m),e.update(u,n,m))}function h(g,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,g,0,m);let S=0;for(let p=0;p<m;p++)S+=u[p];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function K0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Dt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function j0(i,t,e){let n=new WeakMap,s=new ue;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==g){let L=function(){d.dispose(),n.delete(o),o.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],w=0;m===!0&&(w=1),_===!0&&(w=2),S===!0&&(w=3);let b=o.attributes.position.count*w,A=1;b>t.maxTextureSize&&(A=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let T=new Float32Array(b*A*4*g),d=new mr(T,b,A,g);d.type=Pn,d.needsUpdate=!0;let v=w*4;for(let R=0;R<g;R++){let N=p[R],O=f[R],X=M[R],P=b*A*4*R;for(let W=0;W<N.count;W++){let Z=W*v;m===!0&&(s.fromBufferAttribute(N,W),T[P+Z+0]=s.x,T[P+Z+1]=s.y,T[P+Z+2]=s.z,T[P+Z+3]=0),_===!0&&(s.fromBufferAttribute(O,W),T[P+Z+4]=s.x,T[P+Z+5]=s.y,T[P+Z+6]=s.z,T[P+Z+7]=0),S===!0&&(s.fromBufferAttribute(X,W),T[P+Z+8]=s.x,T[P+Z+9]=s.y,T[P+Z+10]=s.z,T[P+Z+11]=X.itemSize===4?s.w:1)}}u={count:g,texture:d,size:new Et(b,A)},n.set(o,u),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let S=0;S<c.length;S++)m+=c[S];let _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Q0(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,g=c.geometry,u=t.get(c,g);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var tg={[sc]:"LINEAR_TONE_MAPPING",[rc]:"REINHARD_TONE_MAPPING",[ac]:"CINEON_TONE_MAPPING",[Gr]:"ACES_FILMIC_TONE_MAPPING",[lc]:"AGX_TONE_MAPPING",[cc]:"NEUTRAL_TONE_MAPPING",[oc]:"CUSTOM_TONE_MAPPING"};function eg(i,t,e,n,s,r){let a=new _n(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ue;h.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ee([0,2,0,0,2,0],2));let g=new $a({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new on(h,g),m=new Fr(-1,1,1,-1,0,1),_=null,S=null,p=!1,f,M=null,w=[],b=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let d=0;d<w.length;d++){let v=w[d];v.setSize&&v.setSize(A,T)}},this.setEffects=function(A){w=A,b=w.length>0&&w[0].isRenderPass===!0;let T=a.width,d=a.height;w.length>0&&o===null&&(o=new _n(T,d,{type:zn,depthBuffer:!1,stencilBuffer:!1}),l=new _n(T,d,{type:zn,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&w.some(L=>L.needsDepthTexture===!0);v!==(a.depthTexture!==null)&&(v===!0&&c===null&&(c=new hi(T,d),r===!0&&(c.format=di,c.type=es)),a.dispose(),a.depthTexture=v?c:null,a.resolveDepthBuffer=v,a.storeMultisampledDepthBuffer=v);for(let L=0;L<w.length;L++){let R=w[L];R.setSize&&R.setSize(T,d),v&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(A,T){if(p||A.toneMapping===Zn&&w.length===0)return!1;if(M=T,T!==null){let d=T.width,v=T.height;(a.width!==d||a.height!==v)&&this.setSize(d,v)}return b===!1&&A.setRenderTarget(a),f=A.toneMapping,A.toneMapping=Zn,!0},this.hasRenderPass=function(){return b},this.end=function(A,T){A.toneMapping=f,p=!0;let d=a,v=o;for(let L=0;L<w.length;L++){let R=w[L];R.enabled!==!1&&(R.render(A,v,d,T),R.needsSwap!==!1&&(d=v,v=v===o?l:o))}if(_!==A.outputColorSpace||S!==A.toneMapping){_=A.outputColorSpace,S=A.toneMapping,g.defines={},Jt.getTransfer(_)===te&&(g.defines.SRGB_TRANSFER="");let L=tg[S];L&&(g.defines[L]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=d.texture,A.setRenderTarget(M),A.render(u,m),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),g.dispose()}}var dd=new tn,fd=new hi(1,1),pd=new wr(1),md=new mr,gd=new Ya,_d=new Tr,Xu=[],qu=[],Yu=new Float32Array(16),Zu=new Float32Array(9),Ju=new Float32Array(4);function Ys(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Xu[s];if(r===void 0&&(r=new Float32Array(s),Xu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function il(i,t){let e=qu[t];e===void 0&&(e=new Int32Array(t),qu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ng(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function ag(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Te(e,n))return;Ju.set(n),i.uniformMatrix2fv(this.addr,!1,Ju),we(e,n)}}function og(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Te(e,n))return;Zu.set(n),i.uniformMatrix3fv(this.addr,!1,Zu),we(e,n)}}function lg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Te(e,n))return;Yu.set(n),i.uniformMatrix4fv(this.addr,!1,Yu),we(e,n)}}function cg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function fg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function sl(i){return i.version===0&&(i.compareFunction=yc,i.needsUpdate=!0),i}function _g(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=sl(fd):r=dd,e.setTexture2D(t||r,s)}function xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gd,s)}function yg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=sl(pd):r=_d,e.setTextureCube(t||r,s)}function vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||md,s)}function Mg(i){switch(i){case 5126:return ng;case 35664:return ig;case 35665:return sg;case 35666:return rg;case 35674:return ag;case 35675:return og;case 35676:return lg;case 5124:case 35670:return cg;case 35667:case 35671:return hg;case 35668:case 35672:return ug;case 35669:case 35673:return dg;case 5125:return fg;case 36294:return pg;case 36295:return mg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return vg}}function Sg(i,t){i.uniform1fv(this.addr,t)}function bg(i,t){let e=Ys(t,this.size,2);i.uniform2fv(this.addr,e)}function Eg(i,t){let e=Ys(t,this.size,3);i.uniform3fv(this.addr,e)}function Tg(i,t){let e=Ys(t,this.size,4);i.uniform4fv(this.addr,e)}function wg(i,t){let e=Ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ag(i,t){let e=Ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Rg(i,t){let e=Ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Cg(i,t){i.uniform1iv(this.addr,t)}function Pg(i,t){i.uniform2iv(this.addr,t)}function Ig(i,t){i.uniform3iv(this.addr,t)}function Lg(i,t){i.uniform4iv(this.addr,t)}function Dg(i,t){i.uniform1uiv(this.addr,t)}function Ng(i,t){i.uniform2uiv(this.addr,t)}function Ug(i,t){i.uniform3uiv(this.addr,t)}function Fg(i,t){i.uniform4uiv(this.addr,t)}function Og(i,t,e){let n=this.cache,s=t.length,r=il(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),we(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=sl(fd):a=dd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Bg(i,t,e){let n=this.cache,s=t.length,r=il(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||gd,r[a])}function zg(i,t,e){let n=this.cache,s=t.length,r=il(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),we(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=sl(pd):a=_d;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function kg(i,t,e){let n=this.cache,s=t.length,r=il(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||md,r[a])}function Gg(i){switch(i){case 5126:return Sg;case 35664:return bg;case 35665:return Eg;case 35666:return Tg;case 35674:return wg;case 35675:return Ag;case 35676:return Rg;case 5124:case 35670:return Cg;case 35667:case 35671:return Pg;case 35668:case 35672:return Ig;case 35669:case 35673:return Lg;case 5125:return Dg;case 36294:return Ng;case 36295:return Ug;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return kg}}var Dc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Mg(e.type)}},Nc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gg(e.type)}},Uc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ic=/(\w+)(\])?(\[|\.)?/g;function $u(i,t){i.seq.push(t),i.map[t.id]=t}function Hg(i,t,e){let n=i.name,s=n.length;for(Ic.lastIndex=0;;){let r=Ic.exec(n),a=Ic.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){$u(e,c===void 0?new Dc(o,i,t):new Nc(o,i,t));break}else{let g=e.map[o];g===void 0&&(g=new Uc(o),$u(e,g)),e=g}}}var qs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Hg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Ku(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Vg=37297,Wg=0;function Xg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var ju=new Nt;function qg(i){Jt._getMatrix(ju,Jt.workingColorSpace,i);let t=`mat3( ${ju.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case dr:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Qu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Xg(i.getShaderSource(t),o)}else return r}function Yg(i,t){let e=qg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Zg={[sc]:"Linear",[rc]:"Reinhard",[ac]:"Cineon",[Gr]:"ACESFilmic",[lc]:"AgX",[cc]:"Neutral",[oc]:"Custom"};function Jg(i,t){let e=Zg[t];return e===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var tl=new D;function $g(){Jt.getLuminanceCoefficients(tl);let i=tl.x.toFixed(4),t=tl.y.toFixed(4),e=tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function jg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function $r(i){return i!==""}function td(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ed(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var t_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(i){return i.replace(t_,e_)}function e_(i,t){let e=Ht[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Fc(e)}var n_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nd(i){return i.replace(n_,i_)}function i_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function id(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var s_={[kr]:"SHADOWMAP_TYPE_PCF",[Gs]:"SHADOWMAP_TYPE_VSM"};function r_(i){return s_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var a_={[Ws]:"ENVMAP_MODE_REFRACTION"};function o_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":a_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var l_={[ic]:"ENVMAP_BLENDING_MULTIPLY",[Mu]:"ENVMAP_BLENDING_MIX",[Su]:"ENVMAP_BLENDING_ADD"};function c_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":l_[i.combine]||"ENVMAP_BLENDING_NONE"}function h_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=r_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=o_(e),g=c_(e),u=Kg(e),m=jg(r),_=s.createProgram(),S,p,f=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter($r).join(`
`),S.length>0&&(S+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter($r).join(`
`),p.length>0&&(p+=`
`)):(S=[id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),p=[id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+g:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Zn?Jg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Yg("linearToOutputTexel",e.outputColorSpace),$g(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($r).join(`
`)),a=Fc(a),a=td(a,e),a=ed(a,e),o=Fc(o),o=td(o,e),o=ed(o,e),a=nd(a),o=nd(o),e.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,S=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,p=["#define varying in",e.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=f+S+a,w=f+p+o,b=Ku(s,s.VERTEX_SHADER,M),A=Ku(s,s.FRAGMENT_SHADER,w);s.attachShader(_,b),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(R){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(b)||"",X=s.getShaderInfoLog(A)||"",P=N.trim(),W=O.trim(),Z=X.trim(),V=!0,nt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,A);else{let q=Qu(s,b,"vertex"),Q=Qu(s,A,"fragment");Dt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+q+`
`+Q)}else P!==""?It("WebGLProgram: Program Info Log:",P):(W===""||Z==="")&&(nt=!1);nt&&(R.diagnostics={runnable:V,programLog:P,vertexShader:{log:W,prefix:S},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(b),s.deleteShader(A),d=new qs(s,_),v=Qg(s,_)}let d;this.getUniforms=function(){return d===void 0&&T(this),d};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(_,Vg)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=A,this}var u_=0,Oc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Bc(t),e.set(t,n)),n}},Bc=class{constructor(t){this.id=u_++,this.code=t,this.usedTimes=0}};function d_(i){return i===Ui||i===Yr||i===Zr}function f_(i,t,e,n,s,r){let a=new Ls,o=new Oc,l=new Set,c=[],h=new Map,g=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(d){return l.add(d),d===0?"uv":`uv${d}`}function _(d,v,L,R,N,O){let X=R.fog,P=N.geometry,W=d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial?R.environment:null,Z=d.isMeshStandardMaterial||d.isMeshLambertMaterial&&!d.envMap||d.isMeshPhongMaterial&&!d.envMap,V=t.get(d.envMap||W,Z),nt=u[d.type],q=n.precision;d.precision!==null&&(q=n.getMaxPrecision(d.precision),q!==d.precision&&It("WebGLProgram.getParameters:",d.precision,"not supported, using",q,"instead."));let Q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,G=Q!==void 0?Q.length:0,tt=0;P.morphAttributes.position!==void 0&&(tt=1),P.morphAttributes.normal!==void 0&&(tt=2),P.morphAttributes.color!==void 0&&(tt=3);let pt,F,et,yt;if(nt){let mt=$n[nt];pt=mt.vertexShader,F=mt.fragmentShader}else{pt=d.vertexShader,F=d.fragmentShader;let mt=o.getVertexShaderStage(d),se=o.getFragmentShaderStage(d);o.update(d,mt,se),et=mt.id,yt=se.id}let Rt=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Bt=N.isInstancedMesh===!0,xe=N.isBatchedMesh===!0,Lt=!!d.map,ie=!!d.matcap,re=!!V,qt=re&&V.isPMREMTexture===!0,Be=!!d.aoMap,be=!!d.lightMap,rn=!!d.bumpMap&&d.wireframe===!1,fe=!!d.normalMap,Gn=!!d.displacementMap,Ce=!!d.emissiveMap,bn=!!d.metalnessMap,En=!!d.roughnessMap,Tn=d.anisotropy>0,U=d.clearcoat>0,wn=d.diffuseRoughness>0,ce=d.dispersion>0,he=d.retroreflectivity>0,ft=d.iridescence>0,Ee=d.sheen>0,Ct=d.transmission>0,Ut=Tn&&!!d.anisotropyMap,E=U&&!!d.clearcoatMap,x=U&&!!d.clearcoatNormalMap,z=U&&!!d.clearcoatRoughnessMap,it=wn&&!!d.diffuseRoughnessMap,j=ft&&!!d.iridescenceMap,at=ft&&!!d.iridescenceThicknessMap,ut=Ee&&!!d.sheenColorMap,J=Ee&&!!d.sheenRoughnessMap,$=!!d.specularMap,lt=!!d.specularColorMap,C=!!d.specularIntensityMap,K=Ct&&!!d.transmissionMap,Y=Ct&&!!d.thicknessMap,ct=!!d.gradientMap,rt=!!d.alphaMap,ot=d.alphaTest>0,wt=!!d.alphaHash,Gt=!!d.extensions,st=Zn;d.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(st=i.toneMapping);let At=qt?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,kt={shaderID:nt,shaderType:d.type,shaderName:d.name,vertexShader:pt,fragmentShader:F,defines:d.defines,customVertexShaderID:et,customFragmentShaderID:yt,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:q,batching:xe,batchingColor:xe&&N._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&N.instanceColor!==null,instancingMorph:Bt&&N.morphTexture!==null,outputColorSpace:Rt===null?i.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!d.alphaToCoverage,map:Lt,matcap:ie,envMap:re,envMapMode:re&&V.mapping,envMapPMREM:qt,envMapMaxLod:qt?At.length-1:null,envMapSize:qt?At[0].width:null,aoMap:Be,lightMap:be,bumpMap:rn,normalMap:fe,displacementMap:Gn,emissiveMap:Ce,normalMapObjectSpace:fe&&d.normalMapType===Tu,normalMapTangentSpace:fe&&d.normalMapType===Ko,packedNormalMap:fe&&d.normalMapType===Ko&&d_(d.normalMap.format),metalnessMap:bn,roughnessMap:En,anisotropy:Tn,anisotropyMap:Ut,clearcoat:U,clearcoatMap:E,clearcoatNormalMap:x,clearcoatRoughnessMap:z,diffuseRoughness:wn,diffuseRoughnessMap:it,dispersion:ce,retroreflection:he,iridescence:ft,iridescenceMap:j,iridescenceThicknessMap:at,sheen:Ee,sheenColorMap:ut,sheenRoughnessMap:J,specularMap:$,specularColorMap:lt,specularIntensityMap:C,transmission:Ct,transmissionMap:K,thicknessMap:Y,gradientMap:ct,opaque:d.transparent===!1&&d.blending===Hs&&d.alphaToCoverage===!1,alphaMap:rt,alphaTest:ot,alphaHash:wt,combine:d.combine,mapUv:Lt&&m(d.map.channel),aoMapUv:Be&&m(d.aoMap.channel),lightMapUv:be&&m(d.lightMap.channel),bumpMapUv:rn&&m(d.bumpMap.channel),normalMapUv:fe&&m(d.normalMap.channel),displacementMapUv:Gn&&m(d.displacementMap.channel),emissiveMapUv:Ce&&m(d.emissiveMap.channel),metalnessMapUv:bn&&m(d.metalnessMap.channel),roughnessMapUv:En&&m(d.roughnessMap.channel),anisotropyMapUv:Ut&&m(d.anisotropyMap.channel),clearcoatMapUv:E&&m(d.clearcoatMap.channel),clearcoatNormalMapUv:x&&m(d.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&m(d.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&m(d.diffuseRoughnessMap.channel),iridescenceMapUv:j&&m(d.iridescenceMap.channel),iridescenceThicknessMapUv:at&&m(d.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&m(d.sheenColorMap.channel),sheenRoughnessMapUv:J&&m(d.sheenRoughnessMap.channel),specularMapUv:$&&m(d.specularMap.channel),specularColorMapUv:lt&&m(d.specularColorMap.channel),specularIntensityMapUv:C&&m(d.specularIntensityMap.channel),transmissionMapUv:K&&m(d.transmissionMap.channel),thicknessMapUv:Y&&m(d.thicknessMap.channel),alphaMapUv:rt&&m(d.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(fe||Tn),vertexNormals:!!P.attributes.normal,vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(Lt||rt),fog:!!X,useFog:d.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:d.wireframe===!1&&(d.flatShading===!0||P.attributes.normal===void 0&&fe===!1&&(d.isMeshLambertMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isMeshPhysicalMaterial)),sizeAttenuation:d.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:_t,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:tt,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:O.filter(mt=>mt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:d.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:Lt&&d.map.isVideoTexture===!0&&Jt.getTransfer(d.map.colorSpace)===te,decodeVideoTextureEmissive:Ce&&d.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(d.emissiveMap.colorSpace)===te,premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===vn,flipSided:d.side===en,useDepthPacking:d.depthPacking>=0,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionClipCullDistance:Gt&&d.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&d.extensions.multiDraw===!0||xe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:d.customProgramCacheKey()};return kt.vertexUv1s=l.has(1),kt.vertexUv2s=l.has(2),kt.vertexUv3s=l.has(3),l.clear(),kt}function S(d){let v=[];if(d.shaderID?v.push(d.shaderID):(v.push(d.customVertexShaderID),v.push(d.customFragmentShaderID)),d.defines!==void 0)for(let L in d.defines)v.push(L),v.push(d.defines[L]);return d.isRawShaderMaterial===!1&&(p(v,d),f(v,d),v.push(i.outputColorSpace)),v.push(d.customProgramCacheKey),v.join()}function p(d,v){d.push(v.precision),d.push(v.outputColorSpace),d.push(v.envMapMode),d.push(v.envMapPMREM),d.push(v.envMapMaxLod),d.push(v.envMapSize),d.push(v.mapUv),d.push(v.alphaMapUv),d.push(v.lightMapUv),d.push(v.aoMapUv),d.push(v.bumpMapUv),d.push(v.normalMapUv),d.push(v.displacementMapUv),d.push(v.emissiveMapUv),d.push(v.metalnessMapUv),d.push(v.roughnessMapUv),d.push(v.anisotropyMapUv),d.push(v.clearcoatMapUv),d.push(v.clearcoatNormalMapUv),d.push(v.clearcoatRoughnessMapUv),d.push(v.diffuseRoughnessMapUv),d.push(v.iridescenceMapUv),d.push(v.iridescenceThicknessMapUv),d.push(v.sheenColorMapUv),d.push(v.sheenRoughnessMapUv),d.push(v.specularMapUv),d.push(v.specularColorMapUv),d.push(v.specularIntensityMapUv),d.push(v.transmissionMapUv),d.push(v.thicknessMapUv),d.push(v.combine),d.push(v.fogExp2),d.push(v.sizeAttenuation),d.push(v.morphTargetsCount),d.push(v.numSunLights),d.push(v.numDirLights),d.push(v.numPointLights),d.push(v.numSpotLights),d.push(v.numSpotLightMaps),d.push(v.numHemiLights),d.push(v.numRectAreaLights),d.push(v.numSunLightShadows),d.push(v.numDirLightShadows),d.push(v.numPointLightShadows),d.push(v.numSpotLightShadows),d.push(v.numSpotLightShadowsWithMaps),d.push(v.numLightProbes),d.push(v.numLightProbeGrids),d.push(v.shadowMapType),d.push(v.toneMapping),d.push(v.numClippingPlanes),d.push(v.numClipIntersection),d.push(v.depthPacking)}function f(d,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.retroreflection&&a.enable(24),v.diffuseRoughness&&a.enable(25),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),v.packedNormalMap&&a.enable(22),v.vertexNormals&&a.enable(23),d.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),v.numLightProbeGrids>0&&a.enable(22),v.hasPositionAttribute&&a.enable(23),d.push(a.mask)}function M(d){let v=u[d.type],L;if(v){let R=$n[v];L=Bu.clone(R.uniforms)}else L=d.uniforms;return L}function w(d,v){let L=h.get(v);return L!==void 0?++L.usedTimes:(L=new h_(i,v,d,s),c.push(L),h.set(v,L)),L}function b(d){if(--d.usedTimes===0){let v=c.indexOf(d);c[v]=c[c.length-1],c.pop(),h.delete(d.cacheKey),d.destroy()}}function A(d){o.remove(d)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:S,getUniforms:M,acquireProgram:w,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:T}}function p_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function m_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function sd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,_,S,p,f){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:m,material:_,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:p,group:f},i[t]=M):(M.id=u.id,M.object=u,M.geometry=m,M.material=_,M.materialVariant=a(u),M.groupOrder=S,M.renderOrder=u.renderOrder,M.z=p,M.group=f),t++,M}function l(u,m,_,S,p,f,M){M.reversedDepth===!0&&(p=-p);let w=o(u,m,_,S,p,f);_.transmission>0?n.push(w):_.transparent===!0?s.push(w):e.push(w)}function c(u,m,_,S,p,f){let M=o(u,m,_,S,p,f);_.transmission>0?n.unshift(M):_.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,m){e.length>1&&e.sort(u||m_),n.length>1&&n.sort(m||sd),s.length>1&&s.sort(m||sd)}function g(){for(let u=t,m=i.length;u<m;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:g,sort:h}}function g_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new rd,i.set(n,[a])):s>=r.length?(a=new rd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function __(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new zt};break;case"SpotLight":e={position:new D,direction:new D,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function x_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var y_=0;function v_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function M_(i){let t=new __,e=x_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new Wt,a=new Wt;function o(c){let h=0,g=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let m=0,_=0,S=0,p=0,f=0,M=0,w=0,b=0,A=0,T=0,d=0,v=0,L=0,R=0;c.sort(v_);for(let O=0,X=c.length;O<X;O++){let P=c[O],W=P.color,Z=P.intensity,V=P.distance,nt=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ui?nt=P.shadow.map.texture:nt=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=W.r*Z,g+=W.g*Z,u+=W.b*Z;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],Z);R++}else if(P.isSunLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,G=e.get(P);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[_]=G,n.sunShadowMap[_]=nt;let tt=Q.getViewportCount();for(let pt=0;pt<tt;pt++)n.sunShadowMatrix[S+pt]=Q.getMatrix(pt),n.sunShadowCascade[S+pt]=Q._cascadeData[pt];S+=tt,_++}n.sun[m]=q,m++}else if(P.isDirectionalLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,G=e.get(P);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=nt,n.directionalShadowMatrix[p]=P.shadow.matrix,A++}n.directional[p]=q,p++}else if(P.isSpotLight){let q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(W).multiplyScalar(Z),q.distance=V,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[M]=q;let Q=P.shadow;if(P.map&&(n.spotLightMap[v]=P.map,v++,Q.updateMatrices(P),P.castShadow&&L++),n.spotLightMatrix[M]=Q.matrix,P.castShadow){let G=e.get(P);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.spotShadow[M]=G,n.spotShadowMap[M]=nt,d++}M++}else if(P.isRectAreaLight){let q=t.get(P);q.color.copy(W).multiplyScalar(Z),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[w]=q,w++}else if(P.isPointLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){let Q=P.shadow,G=e.get(P);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,G.shadowCameraNear=Q.camera.near,G.shadowCameraFar=Q.camera.far,n.pointShadow[f]=G,n.pointShadowMap[f]=nt,n.pointShadowMatrix[f]=P.shadow.matrix,T++}n.point[f]=q,f++}else if(P.isHemisphereLight){let q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(Z),q.groundColor.copy(P.groundColor).multiplyScalar(Z),n.hemi[b]=q,b++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=g,n.ambient[2]=u;let N=n.hash;(N.sunLength!==m||N.directionalLength!==p||N.pointLength!==f||N.spotLength!==M||N.rectAreaLength!==w||N.hemiLength!==b||N.numSunShadows!==_||N.numDirectionalShadows!==A||N.numPointShadows!==T||N.numSpotShadows!==d||N.numSpotMaps!==v||N.numLightProbes!==R)&&(n.sun.length=m,n.directional.length=p,n.spot.length=M,n.rectArea.length=w,n.point.length=f,n.hemi.length=b,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=d,n.spotShadowMap.length=d,n.spotLightMatrix.length=d+v-L,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=R,N.sunLength=m,N.directionalLength=p,N.pointLength=f,N.spotLength=M,N.rectAreaLength=w,N.hemiLength=b,N.numSunShadows=_,N.numDirectionalShadows=A,N.numPointShadows=T,N.numSpotShadows=d,N.numSpotMaps=v,N.numLightProbes=R,n.version=y_++)}function l(c,h){let g=0,u=0,m=0,_=0,S=0,p=0,f=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){let b=c[M];if(b.isSunLight){let A=n.sun[g];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(f),g++}else if(b.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),u++}else if(b.isSpotLight){let A=n.spot[_];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),_++}else if(b.isRectAreaLight){let A=n.rectArea[S];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(f),a.identity(),r.copy(b.matrixWorld),r.premultiply(f),a.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),S++}else if(b.isPointLight){let A=n.point[m];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(f),m++}else if(b.isHemisphereLight){let A=n.hemi[p];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(f),p++}}}return{setup:o,setupView:l,state:n}}function ad(i){let t=new M_(i),e=[],n=[],s=[];function r(g){h.camera=g,e.length=0,n.length=0,s.length=0}function a(g){g.isLightProbeGrid?s.push(g):e.push(g)}function o(g){n.push(g)}function l(){t.setup(e),s.sort((g,u)=>g.priority-u.priority||g.id-u.id)}function c(g){t.setupView(e,g)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function S_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ad(i),t.set(s,[o])):r>=a.length?(o=new ad(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var b_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,T_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],w_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],od=new Wt,Jr=new D,Lc=new D;function A_(i,t,e){let n=new Ti,s=new Et,r=new Et,a=new ue,o=new Ka,l=new ja,c={},h=e.maxTextureSize,g={[Ni]:en,[en]:Ni,[vn]:vn},u=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:b_,fragmentShader:E_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let _=new Ue;_.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new on(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kr;let f=this.type;this.render=function(T,d,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===nu&&(It("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=kr);let L=i.getRenderTarget(),R=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(ji),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let X=f!==this.type;X&&d.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(W=>W.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,W=T.length;P<W;P++){let Z=T[P],V=Z.shadow;if(V===void 0){It("WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let nt=V.getFrameExtents();s.multiply(nt),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,V.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=q,V.map===null||X===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Gs){if(Z.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new _n(s.x,s.y,{format:Ui,type:zn,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),V.map.texture.name=Z.name+".shadowMap",V.map.depthTexture=new hi(s.x,s.y,Pn),V.map.depthTexture.name=Z.name+".shadowMapDepth",V.map.depthTexture.format=li,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=De,V.map.depthTexture.magFilter=De}else Z.isPointLight?(V.map=new Kr(s.x),V.map.depthTexture=new wr(s.x,Bn)):(V.map=new _n(s.x,s.y),V.map.depthTexture=new hi(s.x,s.y,Bn)),V.map.depthTexture.name=Z.name+".shadowMap",V.map.depthTexture.format=li,this.type===kr?(V.map.depthTexture.compareFunction=q?xc:_c,V.map.depthTexture.minFilter=Qe,V.map.depthTexture.magFilter=Qe):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=De,V.map.depthTexture.magFilter=De);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let Q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Z.isPointLight!==!0&&V.updateMatrices(Z,v);let G=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:v.layers;for(let tt=0;tt<Q;tt++){let pt=V.getCamera(tt);if(Z.isPointLight){let F=V.camera,et=V.matrix,yt=Z.distance||F.far;yt!==F.far&&(F.far=yt,F.updateProjectionMatrix()),Jr.setFromMatrixPosition(Z.matrixWorld),F.position.copy(Jr),Lc.copy(F.position),Lc.add(T_[tt]),F.up.copy(w_[tt]),F.lookAt(Lc),F.updateMatrixWorld(),et.makeTranslation(-Jr.x,-Jr.y,-Jr.z),od.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),V._frustum.setFromProjectionMatrix(od,F.coordinateSystem,F.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,tt),i.clear();else{tt===0&&(i.setRenderTarget(V.map),i.clear());let F=V.getViewport(tt);a.set(r.x*F.x,r.y*F.y,r.x*F.z,r.y*F.w),O.viewport(a)}n=V.getFrustum(tt),b(d,v,pt,Z,G,this.type)}V.isPointLightShadow!==!0&&this.type===Gs&&M(V,v),V.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(L,R,N)};function M(T,d){let v=t.update(S);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new _n(s.x,s.y,{format:Ui,type:zn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(d,null,v,u,S,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(d,null,v,m,S,null)}function w(T,d,v,L){let R=null,N=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)R=N;else if(R=v.isPointLight===!0?l:o,i.localClippingEnabled&&d.clipShadows===!0&&Array.isArray(d.clippingPlanes)&&d.clippingPlanes.length!==0||d.displacementMap&&d.displacementScale!==0||d.alphaMap&&d.alphaTest>0||d.map&&d.alphaTest>0||d.alphaToCoverage===!0){let O=R.uuid,X=d.uuid,P=c[O];P===void 0&&(P={},c[O]=P);let W=P[X];W===void 0&&(W=R.clone(),P[X]=W,d.addEventListener("dispose",A)),R=W}if(R.visible=d.visible,R.wireframe=d.wireframe,L===Gs?R.side=d.shadowSide!==null?d.shadowSide:d.side:R.side=d.shadowSide!==null?d.shadowSide:g[d.side],R.alphaMap=d.alphaMap,R.alphaTest=d.alphaToCoverage===!0?.5:d.alphaTest,R.map=d.map,R.clipShadows=d.clipShadows,R.clippingPlanes=d.clippingPlanes,R.clipIntersection=d.clipIntersection,R.displacementMap=d.displacementMap,R.displacementScale=d.displacementScale,R.displacementBias=d.displacementBias,R.wireframeLinewidth=d.wireframeLinewidth,R.linewidth=d.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=i.properties.get(R);O.light=v}return R}function b(T,d,v,L,R,N){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===Gs)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let P=t.update(T),W=T.material;if(Array.isArray(W)){let Z=P.groups;for(let V=0,nt=Z.length;V<nt;V++){let q=Z[V],Q=W[q.materialIndex];if(Q&&Q.visible){let G=w(T,Q,L,N);T.onBeforeShadow(i,T,d,v,P,G,q),i.renderBufferDirect(v,null,P,G,T,q),T.onAfterShadow(i,T,d,v,P,G,q)}}}else if(W.visible){let Z=w(T,W,L,N);T.onBeforeShadow(i,T,d,v,P,Z,null),i.renderBufferDirect(v,null,P,Z,T,null),T.onAfterShadow(i,T,d,v,P,Z,null)}}let X=T.children;for(let P=0,W=X.length;P<W;P++)b(X[P],d,v,L,R,N)}function A(T){T.target.removeEventListener("dispose",A);for(let v in c){let L=c[v],R=T.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function R_(i,t){function e(){let C=!1,K=new ue,Y=null,ct=new ue(0,0,0,0);return{setMask:function(rt){Y!==rt&&!C&&(i.colorMask(rt,rt,rt,rt),Y=rt)},setLocked:function(rt){C=rt},setClear:function(rt,ot,wt,Gt,st){st===!0&&(rt*=Gt,ot*=Gt,wt*=Gt),K.set(rt,ot,wt,Gt),ct.equals(K)===!1&&(i.clearColor(rt,ot,wt,Gt),ct.copy(K))},reset:function(){C=!1,Y=null,ct.set(-1,0,0,0)}}}function n(){let C=!1,K=!1,Y=null,ct=null,rt=null;return{setReversed:function(ot){if(K!==ot){let wt=t.get("EXT_clip_control");ot?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),K=ot;let Gt=rt;rt=null,this.setClear(Gt)}},getReversed:function(){return K},setTest:function(ot){ot?_t(i.DEPTH_TEST):Bt(i.DEPTH_TEST)},setMask:function(ot){Y!==ot&&!C&&(i.depthMask(ot),Y=ot)},setFunc:function(ot){if(K&&(ot=Uu[ot]),ct!==ot){switch(ot){case Fa:i.depthFunc(i.NEVER);break;case Oa:i.depthFunc(i.ALWAYS);break;case Ba:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case za:i.depthFunc(i.EQUAL);break;case ka:i.depthFunc(i.GEQUAL);break;case Ga:i.depthFunc(i.GREATER);break;case Ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=ot}},setLocked:function(ot){C=ot},setClear:function(ot){rt!==ot&&(rt=ot,K&&(ot=1-ot),i.clearDepth(ot))},reset:function(){C=!1,Y=null,ct=null,rt=null,K=!1}}}function s(){let C=!1,K=null,Y=null,ct=null,rt=null,ot=null,wt=null,Gt=null,st=null;return{setTest:function(At){C||(At?_t(i.STENCIL_TEST):Bt(i.STENCIL_TEST))},setMask:function(At){K!==At&&!C&&(i.stencilMask(At),K=At)},setFunc:function(At,kt,mt){(Y!==At||ct!==kt||rt!==mt)&&(i.stencilFunc(At,kt,mt),Y=At,ct=kt,rt=mt)},setOp:function(At,kt,mt){(ot!==At||wt!==kt||Gt!==mt)&&(i.stencilOp(At,kt,mt),ot=At,wt=kt,Gt=mt)},setLocked:function(At){C=At},setClear:function(At){st!==At&&(i.clearStencil(At),st=At)},reset:function(){C=!1,K=null,Y=null,ct=null,rt=null,ot=null,wt=null,Gt=null,st=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},g={},u={},m=new WeakMap,_=[],S=null,p=!1,f=null,M=null,w=null,b=null,A=null,T=null,d=null,v=new zt(0,0,0),L=0,R=!1,N=null,O=null,X=null,P=null,W=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,nt=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=nt>=1):q.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=nt>=2);let Q=null,G={},tt=i.getParameter(i.SCISSOR_BOX),pt=i.getParameter(i.VIEWPORT),F=new ue().fromArray(tt),et=new ue().fromArray(pt);function yt(C,K,Y,ct){let rt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(C,ot),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<Y;wt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(K+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return ot}let Rt={};Rt[i.TEXTURE_2D]=yt(i.TEXTURE_2D,i.TEXTURE_2D,1),Rt[i.TEXTURE_CUBE_MAP]=yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[i.TEXTURE_2D_ARRAY]=yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Rt[i.TEXTURE_3D]=yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(i.DEPTH_TEST),a.setFunc(ws),rn(!1),fe(jl),_t(i.CULL_FACE),Be(ji);function _t(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function Bt(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function xe(C,K){return u[C]!==K?(i.bindFramebuffer(C,K),u[C]=K,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=K),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=K),!0):!1}function Lt(C,K){let Y=_,ct=!1;if(C){Y=m.get(K),Y===void 0&&(Y=[],m.set(K,Y));let rt=C.textures;if(Y.length!==rt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,wt=rt.length;ot<wt;ot++)Y[ot]=i.COLOR_ATTACHMENT0+ot;Y.length=rt.length,ct=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,ct=!0);ct&&i.drawBuffers(Y)}function ie(C){return S!==C?(i.useProgram(C),S=C,!0):!1}let re={[Qi]:i.FUNC_ADD,[su]:i.FUNC_SUBTRACT,[ru]:i.FUNC_REVERSE_SUBTRACT};re[au]=i.MIN,re[ou]=i.MAX;let qt={[lu]:i.ZERO,[cu]:i.ONE,[hu]:i.SRC_COLOR,[ec]:i.SRC_ALPHA,[gu]:i.SRC_ALPHA_SATURATE,[pu]:i.DST_COLOR,[du]:i.DST_ALPHA,[uu]:i.ONE_MINUS_SRC_COLOR,[nc]:i.ONE_MINUS_SRC_ALPHA,[mu]:i.ONE_MINUS_DST_COLOR,[fu]:i.ONE_MINUS_DST_ALPHA,[_u]:i.CONSTANT_COLOR,[xu]:i.ONE_MINUS_CONSTANT_COLOR,[yu]:i.CONSTANT_ALPHA,[vu]:i.ONE_MINUS_CONSTANT_ALPHA};function Be(C,K,Y,ct,rt,ot,wt,Gt,st,At){if(C===ji){p===!0&&(Bt(i.BLEND),p=!1);return}if(p===!1&&(_t(i.BLEND),p=!0),C!==iu){if(C!==f||At!==R){if((M!==Qi||A!==Qi)&&(i.blendEquation(i.FUNC_ADD),M=Qi,A=Qi),At)switch(C){case Hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vs:i.blendFunc(i.ONE,i.ONE);break;case Ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Dt("WebGLState: Invalid blending: ",C);break}else switch(C){case Hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ql:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tc:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",C);break}w=null,b=null,T=null,d=null,v.set(0,0,0),L=0,f=C,R=At}return}rt=rt||K,ot=ot||Y,wt=wt||ct,(K!==M||rt!==A)&&(i.blendEquationSeparate(re[K],re[rt]),M=K,A=rt),(Y!==w||ct!==b||ot!==T||wt!==d)&&(i.blendFuncSeparate(qt[Y],qt[ct],qt[ot],qt[wt]),w=Y,b=ct,T=ot,d=wt),(Gt.equals(v)===!1||st!==L)&&(i.blendColor(Gt.r,Gt.g,Gt.b,st),v.copy(Gt),L=st),f=C,R=!1}function be(C,K){C.side===vn?Bt(i.CULL_FACE):_t(i.CULL_FACE);let Y=C.side===en;K&&(Y=!Y),rn(Y),C.blending===Hs&&C.transparent===!1?Be(ji):Be(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let ct=C.stencilWrite;o.setTest(ct),ct&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ce(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):Bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function rn(C){N!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),N=C)}function fe(C){C!==tu?(_t(i.CULL_FACE),C!==O&&(C===jl?i.cullFace(i.BACK):C===eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Bt(i.CULL_FACE),O=C}function Gn(C){C!==X&&(V&&i.lineWidth(C),X=C)}function Ce(C,K,Y){C?(_t(i.POLYGON_OFFSET_FILL),(P!==K||W!==Y)&&(P=K,W=Y,a.getReversed()&&(K=-K,Y=-Y),i.polygonOffset(K,Y))):Bt(i.POLYGON_OFFSET_FILL)}function bn(C){C?_t(i.SCISSOR_TEST):Bt(i.SCISSOR_TEST)}function En(C){C===void 0&&(C=i.TEXTURE0+Z-1),Q!==C&&(i.activeTexture(C),Q=C)}function Tn(C,K,Y){Y===void 0&&(Q===null?Y=i.TEXTURE0+Z-1:Y=Q);let ct=G[Y];ct===void 0&&(ct={type:void 0,texture:void 0},G[Y]=ct),(ct.type!==C||ct.texture!==K)&&(Q!==Y&&(i.activeTexture(Y),Q=Y),i.bindTexture(C,K||Rt[C]),ct.type=C,ct.texture=K)}function U(){let C=G[Q];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function wn(){try{i.compressedTexImage2D(...arguments)}catch(C){Dt("WebGLState:",C)}}function ce(){try{i.compressedTexImage3D(...arguments)}catch(C){Dt("WebGLState:",C)}}function he(){try{i.texSubImage2D(...arguments)}catch(C){Dt("WebGLState:",C)}}function ft(){try{i.texSubImage3D(...arguments)}catch(C){Dt("WebGLState:",C)}}function Ee(){try{i.compressedTexSubImage2D(...arguments)}catch(C){Dt("WebGLState:",C)}}function Ct(){try{i.compressedTexSubImage3D(...arguments)}catch(C){Dt("WebGLState:",C)}}function Ut(){try{i.texStorage2D(...arguments)}catch(C){Dt("WebGLState:",C)}}function E(){try{i.texStorage3D(...arguments)}catch(C){Dt("WebGLState:",C)}}function x(){try{i.texImage2D(...arguments)}catch(C){Dt("WebGLState:",C)}}function z(){try{i.texImage3D(...arguments)}catch(C){Dt("WebGLState:",C)}}function it(C){return g[C]!==void 0?g[C]:i.getParameter(C)}function j(C,K){g[C]!==K&&(i.pixelStorei(C,K),g[C]=K)}function at(C){F.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),F.copy(C))}function ut(C){et.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),et.copy(C))}function J(C,K){let Y=c.get(K);Y===void 0&&(Y=new WeakMap,c.set(K,Y));let ct=Y.get(C);ct===void 0&&(ct=i.getUniformBlockIndex(K,C.name),i.uniformBlockBinding(K,ct,ct),Y.set(C,ct))}function $(C,K,Y){let rt=c.get(K).get(C);l[rt]!==Y&&(i.bindBufferBase(i.UNIFORM_BUFFER,rt,Y),l[rt]=Y)}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},g={},Q=null,G={},u={},l={},m=new WeakMap,_=[],S=null,p=!1,f=null,M=null,w=null,b=null,A=null,T=null,d=null,v=new zt(0,0,0),L=0,R=!1,N=null,O=null,X=null,P=null,W=null,F.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_t,disable:Bt,bindFramebuffer:xe,drawBuffers:Lt,useProgram:ie,setBlending:Be,setMaterial:be,setFlipSided:rn,setCullFace:fe,setLineWidth:Gn,setPolygonOffset:Ce,setScissorTest:bn,activeTexture:En,bindTexture:Tn,unbindTexture:U,compressedTexImage2D:wn,compressedTexImage3D:ce,texImage2D:x,texImage3D:z,pixelStorei:j,getParameter:it,updateUBOMapping:J,uniformBlockBinding:$,texStorage2D:Ut,texStorage3D:E,texSubImage2D:he,texSubImage3D:ft,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Ct,scissor:at,viewport:ut,reset:lt}}function C_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,h=new WeakMap,g=new Set,u,m=new WeakMap,_=new Set,S=new FinalizationRegistry(E=>_.delete(E)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(E,x){return p?new OffscreenCanvas(E,x):fr("canvas")}function M(E,x,z){let it=1,j=Ut(E);if((j.width>z||j.height>z)&&(it=z/Math.max(j.width,j.height)),it<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let at=Math.floor(it*j.width),ut=Math.floor(it*j.height);u===void 0&&(u=f(at,ut));let J=x?f(at,ut):u;return J.width=at,J.height=ut,J.getContext("2d").drawImage(E,0,0,at,ut),It("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+at+"x"+ut+")."),J}else return"data"in E&&It("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function w(E){return E.generateMipmaps}function b(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(E,x,z,it,j,at=!1){if(E!==null){if(i[E]!==void 0)return i[E];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ut;it&&(ut=t.get("EXT_texture_norm16"),ut||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8),z===i.UNSIGNED_SHORT&&ut&&(J=ut.R16_EXT),z===i.SHORT&&ut&&(J=ut.R16_SNORM_EXT)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),x===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8),z===i.UNSIGNED_SHORT&&ut&&(J=ut.RG16_EXT),z===i.SHORT&&ut&&(J=ut.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),x===i.RGB&&(z===i.UNSIGNED_SHORT&&ut&&(J=ut.RGB16_EXT),z===i.SHORT&&ut&&(J=ut.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),x===i.RGBA){let $=at?dr:Jt.getTransfer(j);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=$===te?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&ut&&(J=ut.RGBA16_EXT),z===i.SHORT&&ut&&(J=ut.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function d(E,x){let z;return E?x===null||x===Bn||x===es?z=i.DEPTH24_STENCIL8:x===Pn?z=i.DEPTH32F_STENCIL8:x===Xs&&(z=i.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Bn||x===es?z=i.DEPTH_COMPONENT24:x===Pn?z=i.DEPTH_COMPONENT32F:x===Xs&&(z=i.DEPTH_COMPONENT16),z}function v(E,x){return w(E)===!0||E.isFramebufferTexture&&E.minFilter!==De&&E.minFilter!==Qe?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function L(E){let x=new WeakRef(E);n.get(E).__ref=x,_.add(x),S.register(E,x,x)}function R(E){let x=n.get(E).__ref;x!==void 0&&(_.delete(x),S.unregister(x))}function N(E){X(E.target)}function O(E){P(E.target)}function X(E){E.removeEventListener("dispose",N),R(E),Z(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&g.delete(E)}function P(E){E.removeEventListener("dispose",O),R(E),nt(E)}function W(){for(let E of _){let x=E.deref();x!==void 0&&(x.isRenderTarget===!0?P(x):X(x))}_.clear(),g.clear()}function Z(E){let x=n.get(E);if(x.__webglInit===void 0)return;let z=E.source,it=m.get(z);if(it){let j=it[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&V(E),Object.keys(it).length===0&&m.delete(z)}n.remove(E)}function V(E){let x=n.get(E);i.deleteTexture(x.__webglTexture);let z=E.source,it=m.get(z);delete it[x.__cacheKey],a.memory.textures--}function nt(E){let x=n.get(E);x.__depthDisposeCallback&&x.__depthDisposeCallback();let z=E.depthTexture;if(z&&z.renderTarget===E&&X(z),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let at=0;at<x.__webglFramebuffer[j].length;at++)i.deleteFramebuffer(x.__webglFramebuffer[j][at]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let it=E.textures;for(let j=0,at=it.length;j<at;j++){let ut=n.get(it[j]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(it[j])}n.remove(E)}let q=0;function Q(){q=0}function G(){return q}function tt(E){q=E}function pt(){let E=q;return E>=s.maxTextures&&It("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,E}function F(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.mipmapsAutoUpdate),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function et(E,x){let z=n.get(E);if(E.isVideoTexture&&Ee(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&z.__version!==E.version){let it=E.image;if(it===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{be(z,E,x);return}}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function yt(E,x){let z=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){be(z,E,x);return}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function Rt(E,x){let z=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){be(z,E,x);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function _t(E,x){let z=n.get(E);if(E.version>0&&z.__version!==E.version){rn(z,E,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}let Bt={[As]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[Va]:i.MIRRORED_REPEAT},xe={[De]:i.NEAREST,[bu]:i.NEAREST_MIPMAP_NEAREST,[Hr]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[fo]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},Lt={[Au]:i.NEVER,[yc]:i.ALWAYS,[Ru]:i.LESS,[_c]:i.LEQUAL,[Cu]:i.EQUAL,[xc]:i.GEQUAL,[Pu]:i.GREATER,[Iu]:i.NOTEQUAL};function ie(E,x){if(x.type===Pn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Qe||x.magFilter===fo||x.magFilter===Hr||x.magFilter===ui||x.minFilter===Qe||x.minFilter===fo||x.minFilter===Hr||x.minFilter===ui)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Bt[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Bt[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Bt[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,xe[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,xe[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Lt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===De||x.minFilter!==Hr&&x.minFilter!==ui||x.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function re(E,x){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",N),L(x));let it=x.source,j=m.get(it);j===void 0&&(j={},m.set(it,j));let at=F(x);if(at!==E.__cacheKey){j[at]===void 0&&(j[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),j[at].usedTimes++;let ut=j[E.__cacheKey];ut!==void 0&&(j[E.__cacheKey].usedTimes--,ut.usedTimes===0&&V(x)),E.__cacheKey=at,E.__webglTexture=j[at].texture}return z}function qt(E,x,z){return Math.floor(Math.floor(E/z)/x)}function Be(E,x,z,it){let at=E.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,z,it,x.data);else{at.sort((C,K)=>C.start-K.start);let ut=0;for(let C=1;C<at.length;C++){let K=at[ut],Y=at[C],ct=K.start+K.count,rt=qt(Y.start,x.width,4),ot=qt(K.start,x.width,4);Y.start<=ct+1&&rt===ot&&qt(Y.start+Y.count-1,x.width,4)===rt?K.count=Math.max(K.count,Y.start+Y.count-K.start):(++ut,at[ut]=Y)}at.length=ut+1;let J=e.getParameter(i.UNPACK_ROW_LENGTH),$=e.getParameter(i.UNPACK_SKIP_PIXELS),lt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let C=0,K=at.length;C<K;C++){let Y=at[C],ct=Math.floor(Y.start/4),rt=Math.ceil(Y.count/4),ot=ct%x.width,wt=Math.floor(ct/x.width),Gt=rt,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,wt),e.texSubImage2D(i.TEXTURE_2D,0,ot,wt,Gt,st,z,it,x.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,$),e.pixelStorei(i.UNPACK_SKIP_ROWS,lt)}}function be(E,x,z){let it=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(it=i.TEXTURE_3D);let j=re(E,x),at=x.source;e.bindTexture(it,E.__webglTexture,i.TEXTURE0+z);let ut=n.get(at);if(at.version!==ut.__version||j===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let st=Jt.getPrimaries(Jt.workingColorSpace),At=x.colorSpace===fi?null:Jt.getPrimaries(x.colorSpace),kt=x.colorSpace===fi||st===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let $=M(x.image,!1,s.maxTextureSize);$=Ct(x,$);let lt=r.convert(x.format,x.colorSpace),C=r.convert(x.type),K=T(x.internalFormat,lt,C,x.normalized,x.colorSpace,x.isVideoTexture);ie(it,x);let Y,ct=x.mipmaps,rt=x.isVideoTexture!==!0,ot=ut.__version===void 0||j===!0,wt=at.dataReady,Gt=v(x,$);if(x.isDepthTexture)K=d(x.format===di,x.type),ot&&(rt?e.texStorage2D(i.TEXTURE_2D,1,K,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,K,$.width,$.height,0,lt,C,null));else if(x.isDataTexture)if(ct.length>0){rt&&ot&&e.texStorage2D(i.TEXTURE_2D,Gt,K,ct[0].width,ct[0].height);for(let st=0,At=ct.length;st<At;st++)Y=ct[st],rt?wt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Y.width,Y.height,lt,C,Y.data):e.texImage2D(i.TEXTURE_2D,st,K,Y.width,Y.height,0,lt,C,Y.data);x.generateMipmaps=!1}else rt?(ot&&e.texStorage2D(i.TEXTURE_2D,Gt,K,$.width,$.height),wt&&Be(x,$,lt,C)):e.texImage2D(i.TEXTURE_2D,0,K,$.width,$.height,0,lt,C,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){rt&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,K,ct[0].width,ct[0].height,$.depth);for(let st=0,At=ct.length;st<At;st++)if(Y=ct[st],x.format!==kn)if(lt!==null)if(rt){if(wt)if(x.layerUpdates.size>0){let kt=Pc(Y.width,Y.height,x.format,x.type);for(let mt of x.layerUpdates){let se=Y.data.subarray(mt*kt/Y.data.BYTES_PER_ELEMENT,(mt+1)*kt/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,mt,Y.width,Y.height,1,lt,se)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,Y.width,Y.height,$.depth,lt,Y.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,K,Y.width,Y.height,$.depth,0,Y.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?wt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,Y.width,Y.height,$.depth,lt,C,Y.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,K,Y.width,Y.height,$.depth,0,lt,C,Y.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{rt&&ot&&e.texStorage2D(i.TEXTURE_2D,Gt,K,ct[0].width,ct[0].height);for(let st=0,At=ct.length;st<At;st++)Y=ct[st],x.format!==kn?lt!==null?rt?wt&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,Y.width,Y.height,lt,Y.data):e.compressedTexImage2D(i.TEXTURE_2D,st,K,Y.width,Y.height,0,Y.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?wt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Y.width,Y.height,lt,C,Y.data):e.texImage2D(i.TEXTURE_2D,st,K,Y.width,Y.height,0,lt,C,Y.data)}else if(x.isDataArrayTexture)if(rt){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,K,$.width,$.height,$.depth),wt)if(x.layerUpdates.size>0){let st=Pc($.width,$.height,x.format,x.type);for(let At of x.layerUpdates){let kt=$.data.subarray(At*st/$.data.BYTES_PER_ELEMENT,(At+1)*st/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,At,$.width,$.height,1,lt,C,kt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,lt,C,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,K,$.width,$.height,$.depth,0,lt,C,$.data);else if(x.isData3DTexture)rt?(ot&&e.texStorage3D(i.TEXTURE_3D,Gt,K,$.width,$.height,$.depth),wt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,lt,C,$.data)):e.texImage3D(i.TEXTURE_3D,0,K,$.width,$.height,$.depth,0,lt,C,$.data);else if(x.isFramebufferTexture){if(ot)if(rt)e.texStorage2D(i.TEXTURE_2D,Gt,K,$.width,$.height);else{let st=$.width,At=$.height;for(let kt=0;kt<Gt;kt++)e.texImage2D(i.TEXTURE_2D,kt,K,st,At,0,lt,C,null),st>>=1,At>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),$.parentNode!==st){st.appendChild($),g.add(x),st.onpaint=At=>{let kt=At.changedElements;for(let mt of g)kt.includes(mt.image)&&(mt.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let kt=i.RGBA,mt=i.RGBA,se=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,kt,mt,se,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ct.length>0){if(rt&&ot){let st=Ut(ct[0]);e.texStorage2D(i.TEXTURE_2D,Gt,K,st.width,st.height)}for(let st=0,At=ct.length;st<At;st++)Y=ct[st],rt?wt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,lt,C,Y):e.texImage2D(i.TEXTURE_2D,st,K,lt,C,Y);x.generateMipmaps=!1}else if(rt){if(ot){let st=Ut($);e.texStorage2D(i.TEXTURE_2D,Gt,K,st.width,st.height)}wt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt,C,$)}else e.texImage2D(i.TEXTURE_2D,0,K,lt,C,$);w(x)&&x.mipmapsAutoUpdate===!0&&b(it),ut.__version=at.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function rn(E,x,z){if(x.image.length!==6)return;let it=re(E,x),j=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+z);let at=n.get(j);if(j.version!==at.__version||it===!0){e.activeTexture(i.TEXTURE0+z);let ut=Jt.getPrimaries(Jt.workingColorSpace),J=x.colorSpace===fi?null:Jt.getPrimaries(x.colorSpace),$=x.colorSpace===fi||ut===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let lt=x.isCompressedTexture||x.image[0].isCompressedTexture,C=x.image[0]&&x.image[0].isDataTexture,K=[];for(let mt=0;mt<6;mt++)!lt&&!C?K[mt]=M(x.image[mt],!0,s.maxCubemapSize):K[mt]=C?x.image[mt].image:x.image[mt],K[mt]=Ct(x,K[mt]);let Y=K[0],ct=r.convert(x.format,x.colorSpace),rt=r.convert(x.type),ot=T(x.internalFormat,ct,rt,x.normalized,x.colorSpace),wt=x.isVideoTexture!==!0,Gt=at.__version===void 0||it===!0,st=j.dataReady,At=v(x,Y);ie(i.TEXTURE_CUBE_MAP,x);let kt;if(x.isDepthTexture){if(ot=d(x.format===di,x.type),Gt)if(wt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ot,Y.width,Y.height);else for(let mt=0;mt<6;mt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ot,Y.width,Y.height,0,ct,rt,null)}else if(lt){wt&&Gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,ot,Y.width,Y.height);for(let mt=0;mt<6;mt++){kt=K[mt].mipmaps;for(let se=0;se<kt.length;se++){let Pe=kt[se];x.format!==kn?ct!==null?wt?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,se,0,0,Pe.width,Pe.height,ct,Pe.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,se,ot,Pe.width,Pe.height,0,Pe.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,se,0,0,Pe.width,Pe.height,ct,rt,Pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,se,ot,Pe.width,Pe.height,0,ct,rt,Pe.data)}}}else{if(kt=x.mipmaps,wt&&Gt){kt.length>0&&At++;let mt=Ut(K[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,ot,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(C){wt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,K[mt].width,K[mt].height,ct,rt,K[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ot,K[mt].width,K[mt].height,0,ct,rt,K[mt].data);for(let se=0;se<kt.length;se++){let gi=kt[se].image[mt].image;wt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,se+1,0,0,gi.width,gi.height,ct,rt,gi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,se+1,ot,gi.width,gi.height,0,ct,rt,gi.data)}}else{wt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,ct,rt,K[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ot,ct,rt,K[mt]);for(let se=0;se<kt.length;se++){let Pe=kt[se];wt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,se+1,0,0,ct,rt,Pe.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,se+1,ot,ct,rt,Pe.image[mt])}}}w(x)&&x.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),at.__version=j.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function fe(E,x,z,it,j,at){let ut=r.convert(z.format,z.colorSpace),J=r.convert(z.type),$=T(z.internalFormat,ut,J,z.normalized,z.colorSpace),lt=n.get(x),C=n.get(z);if(C.__renderTarget=x,!lt.__hasExternalTextures){let K=Math.max(1,x.width>>at),Y=Math.max(1,x.height>>at);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,at,$,K,Y,x.depth,0,ut,J,null):e.texImage2D(j,at,$,K,Y,0,ut,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),ft(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,j,C.__webglTexture,0,he(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,j,C.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gn(E,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){let it=x.depthTexture,j=it&&it.isDepthTexture?it.type:null,at=d(x.stencilBuffer,j),ut=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ft(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(x),at,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(x),at,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,at,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,E)}else{let it=x.textures;for(let j=0;j<it.length;j++){let at=it[j],ut=r.convert(at.format,at.colorSpace),J=r.convert(at.type),$=T(at.internalFormat,ut,J,at.normalized,at.colorSpace);ft(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(x),$,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(x),$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(E,x,z){let it=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(x.depthTexture);j.__renderTarget=x;let at=it?x.depthTexture.image[0]:x.depthTexture.image;(!j.__webglTexture||at.width!==x.width||at.height!==x.height)&&(at.width=x.width,at.height=x.height,x.depthTexture.needsUpdate=!0),it?_t(x.depthTexture,0):et(x.depthTexture,0);let ut=j.__webglTexture,J=he(x),$=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,lt=x.depthTexture.format===di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===li)ft(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,$,ut,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,lt,$,ut,0);else if(x.depthTexture.format===di)ft(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,$,ut,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,lt,$,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function bn(E){let x=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let it=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),it){let j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,it.removeEventListener("dispose",j)};it.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=it}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let it=0;it<6;it++)Ce(x.__webglFramebuffer[it],E,it);else E.texture.mipmaps.length>0?Ce(x.__webglFramebuffer[0],E,0):Ce(x.__webglFramebuffer,E,0);else if(z){x.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[it]),x.__webglDepthbuffer[it]===void 0)x.__webglDepthbuffer[it]=i.createRenderbuffer(),Gn(x.__webglDepthbuffer[it],E,!1);else{let j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,at)}}else if(E.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Gn(x.__webglDepthbuffer,E,!1);else{let j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function En(E,x,z){let it=n.get(E);x!==void 0&&fe(it.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&bn(E)}function Tn(E){let x=E.texture,z=n.get(E),it=n.get(x);E.addEventListener("dispose",O),L(E);let j=E.textures,at=E.isWebGLCubeRenderTarget===!0,ut=j.length>1;if(ut||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=x.version,a.memory.textures++),at){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let $=0;$<x.mipmaps.length;$++)z.__webglFramebuffer[J][$]=i.createFramebuffer()}else z.__webglFramebuffer[J]=i.createFramebuffer()}else{if(x.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)z.__webglFramebuffer[J]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ut)for(let J=0,$=j.length;J<$;J++){let lt=n.get(j[J]);lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&ft(E)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<j.length;J++){let $=j[J];z.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[J]);let lt=r.convert($.format,$.colorSpace),C=r.convert($.type),K=T($.internalFormat,lt,C,$.normalized,$.colorSpace,E.isXRRenderTarget===!0),Y=he(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,K,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,z.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Gn(z.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),ie(i.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)fe(z.__webglFramebuffer[J][$],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,$);else fe(z.__webglFramebuffer[J],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);w(x)?b(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(ut){for(let J=0,$=j.length;J<$;J++){let lt=j[J],C=n.get(lt),K=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(K=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,C.__webglTexture),ie(K,lt),fe(z.__webglFramebuffer,E,lt,i.COLOR_ATTACHMENT0+J,K,0),w(lt)&&b(K)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(J=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,it.__webglTexture),ie(J,x),x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)fe(z.__webglFramebuffer[$],E,x,i.COLOR_ATTACHMENT0,J,$);else fe(z.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,J,0);w(x)?b(J):x.mipmaps.length>0&&i.texParameteri(J,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}E.depthBuffer&&bn(E)}function U(E){let x=E.textures;for(let z=0,it=x.length;z<it;z++){let j=x[z];if(w(j)&&j.mipmapsAutoUpdate===!0){let at=A(E),ut=n.get(j).__webglTexture;e.bindTexture(at,ut),b(at),e.unbindTexture()}}}let wn=[];function ce(E){if(E.samples>0){if(ft(E)===!1){let x=E.textures,z=E.width,it=E.height,j=i.COLOR_BUFFER_BIT,at=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(E),J=x.length>1;if(J)for(let lt=0;lt<x.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let lt=0;lt<x.length;lt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[lt]);let C=n.get(x[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,z,it,0,0,z,it,j,i.NEAREST),l===!0&&(wn.length=0,wn.push(i.COLOR_ATTACHMENT0+lt),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&wn.push(at),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let lt=0;lt<x.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,ut.__webglColorRenderbuffer[lt]);let C=n.get(x[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,C,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function he(E){return Math.min(s.maxSamples,E.samples)}function ft(E){let x=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ee(E){let x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function Ct(E,x){let z=E.colorSpace,it=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==ur&&z!==fi&&(Jt.getTransfer(z)===te?(it!==kn||j!==ln)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",z)),x}function Ut(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=pt,this.resetTextureUnits=Q,this.getTextureUnits=G,this.setTextureUnits=tt,this.setTexture2D=et,this.setTexture2DArray=yt,this.setTexture3D=Rt,this.setTextureCube=_t,this.rebindTextures=En,this.setupRenderTarget=Tn,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=bn,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ft,this.dispose=W}function P_(i,t){function e(n,s=fi){let r,a=Jt.getTransfer(s);if(n===ln)return i.UNSIGNED_BYTE;if(n===mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===go)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===uc)return i.BYTE;if(n===dc)return i.SHORT;if(n===Xs)return i.UNSIGNED_SHORT;if(n===po)return i.INT;if(n===Bn)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===zn)return i.HALF_FLOAT;if(n===mc)return i.ALPHA;if(n===gc)return i.RGB;if(n===kn)return i.RGBA;if(n===li)return i.DEPTH_COMPONENT;if(n===di)return i.DEPTH_STENCIL;if(n===_o)return i.RED;if(n===xo)return i.RED_INTEGER;if(n===Ui)return i.RG;if(n===yo)return i.RG_INTEGER;if(n===vo)return i.RGBA_INTEGER;if(n===Vr||n===Wr||n===Xr||n===qr)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mo||n===So||n===bo||n===Eo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===To||n===wo||n===Ao||n===Ro||n===Co||n===Yr||n===Po)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===To||n===wo)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ao)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ro)return r.COMPRESSED_R11_EAC;if(n===Co)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Yr)return r.COMPRESSED_RG11_EAC;if(n===Po)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Io||n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Go||n===Ho||n===Vo||n===Wo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Io)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Do)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===No)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Uo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ko)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Go)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ho)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xo||n===qo||n===Yo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xo)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zo||n===Jo||n===Zr||n===$o)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$o)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var I_=`
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

}`,zc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ar(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Yn({vertexShader:I_,fragmentShader:L_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new on(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kc=class extends On{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,g=null,u=null,m=null,_=null,S=typeof XRWebGLBinding<"u",p=new zc,f={},M=e.getContextAttributes(),w=null,b=null,A=[],T=[],d=new Et,v=null,L=null,R=new Ye;R.viewport=new ue;let N=new Ye;N.viewport=new ue;let O=[R,N],X=new co,P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let et=A[F];return et===void 0&&(et=new Ds,A[F]=et),et.getTargetRaySpace()},this.getControllerGrip=function(F){let et=A[F];return et===void 0&&(et=new Ds,A[F]=et),et.getGripSpace()},this.getHand=function(F){let et=A[F];return et===void 0&&(et=new Ds,A[F]=et),et.getHandSpace()};function Z(F){let et=T.indexOf(F.inputSource);if(et===-1)return;let yt=A[et];yt!==void 0&&(yt.update(F.inputSource,F.frame,c||a),yt.dispatchEvent({type:F.type,data:F.inputSource}))}function V(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",nt);for(let F=0;F<A.length;F++){let et=T[F];et!==null&&(T[F]=null,A[F].disconnect(et))}P=null,W=null,p.reset();for(let F in f)delete f[F];if(t.setRenderTarget(w),m=null,u=null,g=null,s=null,b=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(d.width,d.height,!1),L!==null){let F=L.camera;F.fov=L.fov,F.zoom=L.zoom,F.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return g===null&&S&&(g=new XRWebGLBinding(s,e)),g},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",V),s.addEventListener("inputsourceschange",nt),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(d),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Rt=null,_t=null;M.depth&&(_t=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=M.stencil?di:li,Rt=M.stencil?es:Bn);let Bt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};g=this.getBinding(),u=g.createProjectionLayer(Bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new _n(u.textureWidth,u.textureHeight,{format:kn,type:ln,depthTexture:new hi(u.textureWidth,u.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let yt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new _n(m.framebufferWidth,m.framebufferHeight,{format:kn,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),pt.setContext(s),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function nt(F){for(let et=0;et<F.removed.length;et++){let yt=F.removed[et],Rt=T.indexOf(yt);Rt>=0&&(T[Rt]=null,A[Rt].disconnect(yt))}for(let et=0;et<F.added.length;et++){let yt=F.added[et],Rt=T.indexOf(yt);if(Rt===-1){for(let Bt=0;Bt<A.length;Bt++)if(Bt>=T.length){T.push(yt),Rt=Bt;break}else if(T[Bt]===null){T[Bt]=yt,Rt=Bt;break}if(Rt===-1)break}let _t=A[Rt];_t&&_t.connect(yt)}}function q(F,et){et===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(et.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let et=F.near,yt=F.far;p.texture!==null&&(p.depthNear>0&&(et=p.depthNear),p.depthFar>0&&(yt=p.depthFar)),X.near=N.near=R.near=et,X.far=N.far=R.far=yt,(P!==X.near||W!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),P=X.near,W=X.far),X.layers.mask=F.layers.mask|6,R.layers.mask=X.layers.mask&-5,N.layers.mask=X.layers.mask&-3;let Rt=F.parent,_t=X.cameras;q(X,Rt);for(let Bt=0;Bt<_t.length;Bt++)q(_t[Bt],Rt);X.projectionMatrix.copy(R.projectionMatrix),X.projectionMatrixInverse.copy(R.projectionMatrixInverse),L===null&&F.isPerspectiveCamera&&(L={camera:F,fov:F.fov,zoom:F.zoom}),Q(F,X,Rt)};function Q(F,et,yt){yt===null?F.matrix.copy(et.matrixWorld):(F.matrix.copy(yt.matrixWorld),F.matrix.invert(),F.matrix.multiply(et.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(et.projectionMatrix),F.projectionMatrixInverse.copy(et.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Ps*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(F){l=F,u!==null&&(u.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(X)},this.getCameraTexture=function(F){return f[F]};let G=null;function tt(F,et){if(h=et.getViewerPose(c||a),_=et,h!==null){let yt=h.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let Rt=!1;yt.length!==X.cameras.length&&(X.cameras.length=0,Rt=!0);for(let Lt=0;Lt<yt.length;Lt++){let ie=yt[Lt],re=null;if(m!==null)re=m.getViewport(ie);else{let Be=g.getViewSubImage(u,ie);re=Be.viewport,Lt===0&&(t.setRenderTargetTextures(b,Be.colorTexture,Be.depthStencilTexture),t.setRenderTarget(b))}let qt=O[Lt];qt===void 0&&(qt=new Ye,qt.layers.enable(Lt),qt.viewport=new ue,O[Lt]=qt),qt.matrix.fromArray(ie.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(ie.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(re.x,re.y,re.width,re.height),Lt===0&&(X.matrix.copy(qt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Rt===!0&&X.cameras.push(qt)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){g=n.getBinding();let Lt=g.getDepthInformation(yt[0]);Lt&&Lt.isValid&&Lt.texture&&p.init(Lt,s.renderState)}if(_t&&_t.includes("camera-access")&&S){t.state.unbindTexture(),g=n.getBinding();for(let Lt=0;Lt<yt.length;Lt++){let ie=yt[Lt].camera;if(ie){let re=f[ie];re||(re=new Ar,f[ie]=re);let qt=g.getCameraImage(ie);re.sourceTexture=qt}}}}for(let yt=0;yt<A.length;yt++){let Rt=T[yt],_t=A[yt];Rt!==null&&_t!==void 0&&_t.update(Rt,et,c||a)}G&&G(F,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}let pt=new ld;pt.setAnimationLoop(tt),this.setAnimationLoop=function(F){G=F},this.dispose=function(){}}},D_=new Wt,xd=new Nt;xd.set(-1,0,0,0,1,0,0,0,1);function N_(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Ac(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,M,w,b){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),g(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,b)):f.isMeshMatcapMaterial?(r(p,f),_(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),S(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,M,w):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===en&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===en&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let M=t.get(f),w=M.envMap,b=M.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(D_.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(xd),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,M,w){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*M,p.scale.value=w*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function g(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,M){p.ior.value=f.ior,f.diffuseRoughness>0&&(p.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=f.diffuseRoughnessMap,e(f.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===en&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function S(p,f){let M=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function U_(i,t,e,n){let s={},r={};function a(M,w){let b=w.program;n.uniformBlockBinding(M,b,s[M.id])}function o(M,w){let b=s[M.id];b===void 0&&(_(M),b=l(M),s[M.id]=b,M.addEventListener("dispose",p));let A=w.program;n.updateUBOMapping(M,A);let T=t.render.frame;r[M.id]!==T&&(c(M),r[M.id]=T)}function l(M){let w=i.createBuffer(),b=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,b,A),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(M){let w=s[M.id],b=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,d=b.length;T<d;T++){let v=b[T];if(Array.isArray(v))for(let L=0,R=v.length;L<R;L++)h(v[L],T,L,A);else h(v,T,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,w,b,A){if(u(M,w,b,A)===!0){let T=M.__offset,d=M.value;if(Array.isArray(d)){let v=0;for(let L=0;L<d.length;L++){let R=d[L],N=S(R,!0);g(R,M.__data,v),v+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else g(d,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,M.__data)}}function g(M,w,b){typeof M=="number"||typeof M=="boolean"?w[b]=M:M.isMatrix3?(w[b]=M.elements[0],w[b+1]=M.elements[1],w[b+2]=M.elements[2],w[b+3]=0,w[b+4]=M.elements[3],w[b+5]=M.elements[4],w[b+6]=M.elements[5],w[b+7]=0,w[b+8]=M.elements[6],w[b+9]=M.elements[7],w[b+10]=M.elements[8],w[b+11]=0):ArrayBuffer.isView(M)?w.set(M.subarray(0,w.length-b),b):M.toArray(w,b)}function u(M,w,b,A){let T=M.value,d=w+"_"+b;if(Array.isArray(T)){A[d]===void 0&&(A[d]=[]);let v=A[d],L=!1;for(let R=0;R<T.length;R++)m(T[R],v,R)===!0&&(L=!0);return L}return m(T,A,d)}function m(M,w,b){if(w[b]===void 0)return typeof M=="number"||typeof M=="boolean"?w[b]=M:ArrayBuffer.isView(M)?w[b]=M.slice():w[b]=M.clone(),!0;{let A=w[b];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return w[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function _(M){let w=M.uniforms,b=0,A=16;for(let d=0,v=w.length;d<v;d++){let L=Array.isArray(w[d])?w[d]:[w[d]];for(let R=0,N=L.length;R<N;R++){let O=L[R],X=Array.isArray(O.value)?O.value:[O.value],P=Array.isArray(w[d])||Array.isArray(O.value),W=b;for(let V=0,nt=X.length;V<nt;V++){let q=X[V],Q=S(q,P),G=b%A,tt=G%Q.boundary,pt=G+tt;b+=tt,pt!==0&&A-pt<Q.storage&&(b+=A-pt),V===0&&(W=b),b+=Q.storage}let Z=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new Z((b-W)/Float32Array.BYTES_PER_ELEMENT),O.__offset=W}}let T=b%A;return T>0&&(b+=A-T),M.__size=b,M.__cache={},this}function S(M,w){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=16,b.storage=48):M.isMatrix4?(b.boundary=16,b.storage=64):M.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):It("WebGLRenderer: Unsupported uniform value type.",M),w===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(M){let w=M.target;w.removeEventListener("dispose",p),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function f(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:f}}var F_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Jn=null;function O_(){return Jn===null&&(Jn=new Mr(F_,16,16,Ui,zn),Jn.name="DFG_LUT",Jn.minFilter=Qe,Jn.magFilter=Qe,Jn.wrapS=Vn,Jn.wrapT=Vn,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}var nl=class{constructor(t={}){let{canvas:e=Lu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:u=!1,outputBufferType:m=ln}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let S=m,p=new Set([vo,yo,xo]),f=new Set([ln,Bn,Xs,es,mo,go]),M=new Uint32Array(4),w=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},A=null,T=null,d=[],v=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,O=null,X=null,P=null,W=null;this._outputColorSpace=ke;let Z=0,V=0,nt=null,q=-1,Q=null,G=new ue,tt=new ue,pt=null,F=new zt(0),et=0,yt=e.width,Rt=e.height,_t=1,Bt=null,xe=null,Lt=new ue(0,0,yt,Rt),ie=new ue(0,0,yt,Rt),re=!1,qt=new Ti,Be=new Ja,be=!1,rn=!1,fe=new Wt,Gn=new D,Ce=new ue,bn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},En=!1;function Tn(){return nt===null?_t:1}let U=n;function wn(y,I){return e.getContext(y,I)}let ce,he,ft,Ee,Ct,Ut,E,x,z,it,j,at,ut,J,$,lt,C,K,Y,ct,rt,ot,wt;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",At,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),U===null){let I="webgl2";if(U=wn(I,y),U===null)throw wn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(y){throw e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Dt("WebGLRenderer: "+y.message),y}function Gt(){ce=new Z0(U),ce.init(),rt=new P_(U,ce),he=new O0(U,ce,t,rt),ft=new R_(U,ce),he.reversedDepthBuffer&&u&&ft.buffers.depth.setReversed(!0),X=U.createFramebuffer(),P=U.createFramebuffer(),W=U.createFramebuffer(),Ee=new K0(U),Ct=new p_,Ut=new C_(U,ce,ft,Ct,he,rt,Ee),E=new Y0(R),x=new Qf(U),ot=new U0(U,x),z=new J0(U,x,Ee,ot),it=new Q0(U,z,x,ot,Ee),K=new j0(U,he,Ut),$=new B0(Ct),j=new f_(R,E,ce,he,ot,$),at=new N_(R,Ct),ut=new g_,J=new S_(ce),C=new N0(R,E,ft,it,_,l),lt=new A_(R,it,he),wt=new U_(U,Ee,he,ft),Y=new F0(U,ce,Ee),ct=new $0(U,ce,Ee),Ee.programs=j.programs,R.capabilities=he,R.extensions=ce,R.properties=Ct,R.renderLists=ut,R.shadowMap=lt,R.state=ft,R.info=Ee}S!==ln&&(L=new eg(S,e.width,e.height,o,s,r));let st=new kc(R,U);this.xr=st,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let y=ce.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ce.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(y){y!==void 0&&(_t=y,this.setSize(yt,Rt,!1))},this.getSize=function(y){return y.set(yt,Rt)},this.setSize=function(y,I,H=!0){if(st.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=y,Rt=I,e.width=Math.floor(y*_t),e.height=Math.floor(I*_t),H===!0&&(e.style.width=y+"px",e.style.height=I+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(yt*_t,Rt*_t).floor()},this.setDrawingBufferSize=function(y,I,H){yt=y,Rt=I,_t=H,e.width=Math.floor(y*H),e.height=Math.floor(I*H),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(S===ln){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(G)},this.getViewport=function(y){return y.copy(Lt)},this.setViewport=function(y,I,H,B){y.isVector4?Lt.set(y.x,y.y,y.z,y.w):Lt.set(y,I,H,B),ft.viewport(G.copy(Lt).multiplyScalar(Tn()).round())},this.getScissor=function(y){return y.copy(ie)},this.setScissor=function(y,I,H,B){y.isVector4?ie.set(y.x,y.y,y.z,y.w):ie.set(y,I,H,B),ft.scissor(tt.copy(ie).multiplyScalar(Tn()).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(y){ft.setScissorTest(re=y)},this.setOpaqueSort=function(y){Bt=y},this.setTransparentSort=function(y){xe=y},this.getClearColor=function(y){return y.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,H=!0){let B=0;if(y){let k=!1;if(nt!==null){let dt=nt.texture.format;k=p.has(dt)}if(k){let dt=nt.texture.type,vt=f.has(dt),ht=C.getClearColor(),xt=C.getClearAlpha(),Tt=ht.r,Ft=ht.g,Yt=ht.b;vt?(M[0]=Tt,M[1]=Ft,M[2]=Yt,M[3]=xt,U.clearBufferuiv(U.COLOR,0,M)):(w[0]=Tt,w[1]=Ft,w[2]=Yt,w[3]=xt,U.clearBufferiv(U.COLOR,0,w))}else B|=U.COLOR_BUFFER_BIT}I&&(B|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),O=y},this.dispose=function(){e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),C.dispose(),ut.dispose(),J.dispose(),Ut.dispose(),Ct.dispose(),E.dispose(),it.dispose(),z.dispose(),ot.dispose(),wt.dispose(),j.dispose(),st.dispose(),st.removeEventListener("sessionstart",uh),st.removeEventListener("sessionend",dh),Hi.stop()};function At(y){y.preventDefault(),pr("WebGLRenderer: Context Lost."),N=!0}function kt(){pr("WebGLRenderer: Context Restored."),N=!1;let y=Ee.autoReset,I=lt.enabled,H=lt.autoUpdate,B=lt.needsUpdate,k=lt.type;Gt(),Ee.autoReset=y,lt.enabled=I,lt.autoUpdate=H,lt.needsUpdate=B,lt.type=k}function mt(y){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function se(y){let I=y.target;I.removeEventListener("dispose",se),Pe(I)}function Pe(y){gi(y),Ct.remove(y)}function gi(y){let I=Ct.get(y).programs;I!==void 0&&(I.forEach(function(H){j.releaseProgram(H)}),y.isShaderMaterial&&j.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,H,B,k,dt){I===null&&(I=bn);let vt=k.isMesh&&k.matrixWorld.determinantAffine()<0,ht=jd(y,I,H,B,k);ft.setMaterial(B,vt);let xt=H.index,Tt=1;if(B.wireframe===!0){if(xt=z.getWireframeAttribute(H),xt===void 0)return;Tt=2}let Ft=H.drawRange,Yt=H.attributes.position,Mt=Ft.start*Tt,Zt=(Ft.start+Ft.count)*Tt;dt!==null&&(Mt=Math.max(Mt,dt.start*Tt),Zt=Math.min(Zt,(dt.start+dt.count)*Tt)),xt!==null?(Mt=Math.max(Mt,0),Zt=Math.min(Zt,xt.count)):Yt!=null&&(Mt=Math.max(Mt,0),Zt=Math.min(Zt,Yt.count));let ye=Zt-Mt;if(ye<0||ye===1/0)return;ot.setup(k,B,ht,H,xt);let oe,ae=Y;if(xt!==null&&(oe=x.get(xt),ae=ct,ae.setIndex(oe)),k.isMesh)B.wireframe===!0?(ft.setLineWidth(B.wireframeLinewidth*Tn()),ae.setMode(U.LINES)):ae.setMode(U.TRIANGLES);else if(k.isLine){let Ve=B.linewidth;Ve===void 0&&(Ve=1),ft.setLineWidth(Ve*Tn()),k.isLineSegments?ae.setMode(U.LINES):k.isLineLoop?ae.setMode(U.LINE_LOOP):ae.setMode(U.LINE_STRIP)}else k.isPoints?ae.setMode(U.POINTS):k.isSprite&&ae.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))ae.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ve=k._multiDrawStarts,St=k._multiDrawCounts,Ke=k._multiDrawCount,jt=xt?x.get(xt).bytesPerElement:1,Vi=Ct.get(B).currentProgram.getUniforms();for(let We=0;We<Ke;We++)Vi.setValue(U,"_gl_DrawID",We),ae.render(Ve[We]/jt,St[We])}else if(k.isInstancedMesh)ae.renderInstances(Mt,ye,k.count);else if(H.isInstancedBufferGeometry){let Ve=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,St=Math.min(H.instanceCount,Ve);ae.renderInstances(Mt,ye,St)}else ae.render(Mt,ye)};function hh(y,I,H,B){O!==null&&y.isNodeMaterial&&O.setObject(B,y),be===!0&&$.setState(y,H,!1),y.transparent===!0&&y.side===vn&&y.forceSinglePass===!1?(y.side=en,y.needsUpdate=!0,Ks(y,I,B),y.side=Ni,y.needsUpdate=!0,Ks(y,I,B),y.side=vn):Ks(y,I,B)}this.compile=function(y,I,H=null){H===null&&(H=y),O!==null&&O.renderStart(y,I,H),T=J.get(H),T.init(I),v.push(T),H.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),y!==H&&y.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),rn=this.localClippingEnabled,be=$.init(this.clippingPlanes,rn),be===!0&&$.setGlobalState(this.clippingPlanes,I),O!==null&&lt.render(T.state.shadowsArray,H,I);let B=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let dt=k.material;if(dt)if(Array.isArray(dt))for(let vt=0;vt<dt.length;vt++){let ht=dt[vt];hh(ht,H,I,k),B.add(ht)}else hh(dt,H,I,k),B.add(dt)}),T=v.pop(),O!==null&&O.renderEnd(),B},this.compileAsync=function(y,I,H=null){let B=this.compile(y,I,H);return new Promise(k=>{function dt(){if(B.forEach(function(vt){let xt=Ct.get(vt).currentProgram;(xt===void 0||xt.isReady())&&B.delete(vt)}),B.size===0){k(y);return}setTimeout(dt,10)}ce.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let yl=null;function $d(y){yl&&yl(y)}function uh(){Hi.stop()}function dh(){Hi.start()}let Hi=new ld;Hi.setAnimationLoop($d),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(y){yl=y,st.setAnimationLoop(y),y===null?Hi.stop():Hi.start()},st.addEventListener("sessionstart",uh),st.addEventListener("sessionend",dh),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(y,I);let H=st.enabled===!0&&st.isPresenting===!0,B=L!==null&&(nt===null||H)&&L.begin(R,nt);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(I),I=st.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,I,nt),T=J.get(y,v.length),T.init(I),T.state.textureUnits=Ut.getTextureUnits(),v.push(T),fe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?Be.setFromArrayCamera(I):qt.setFromProjectionMatrix(fe,Rn,I.reversedDepth),rn=this.localClippingEnabled,be=$.init(this.clippingPlanes,rn),A=ut.get(y,d.length),A.init(),d.push(A),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let vt=R.xr.getDepthSensingMesh();vt!==null&&vl(vt,I,-1/0,R.sortObjects)}vl(y,I,0,R.sortObjects),A.finish(),O!==null&&O.updateLights(T.state.lightsArray),R.sortObjects===!0&&A.sort(Bt,xe),En=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,En&&C.addToRenderList(A,y),this.info.autoReset===!0&&this.info.reset(),be===!0&&$.beginShadows();let k=T.state.shadowsArray;if(lt.render(k,y,I),be===!0&&$.endShadows(),(B&&L.hasRenderPass())===!1){let vt=A.opaque,ht=A.transmissive;if(T.setupLights(),I.isArrayCamera){let xt=I.cameras;if(ht.length>0)for(let Tt=0,Ft=xt.length;Tt<Ft;Tt++){let Yt=xt[Tt];ph(vt,ht,y,Yt)}En&&C.render(y);for(let Tt=0,Ft=xt.length;Tt<Ft;Tt++){let Yt=xt[Tt];fh(A,y,Yt,Yt.viewport)}}else ht.length>0&&ph(vt,ht,y,I),En&&C.render(y),fh(A,y,I)}nt!==null&&V===0&&(Ut.updateMultisampleRenderTarget(nt),Ut.updateRenderTargetMipmap(nt)),B&&L.end(R),y.isScene===!0&&y.onAfterRender(R,y,I),ot.resetDefaultState(),q=-1,Q=null,v.pop(),v.length>0?(T=v[v.length-1],Ut.setTextureUnits(T.state.textureUnits),be===!0&&$.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,d.pop(),d.length>0?A=d[d.length-1]:A=null,O!==null&&O.renderEnd()};function vl(y,I,H,B){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){let vt=I.isArrayCamera?Be:qt;if(!y.frustumCulled||y.intersectsFrustum(vt)){B&&Ce.setFromMatrixPosition(y.matrixWorld).applyMatrix4(fe);let ht=it.update(y),xt=y.material;xt.visible&&A.push(y,ht,xt,H,Ce.z,null,I)}}else if(y.isMesh||y.isLine||y.isPoints){let vt=I.isArrayCamera?Be:qt;if(!y.frustumCulled||y.intersectsFrustum(vt)){let ht=it.update(y),xt=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ce.copy(y.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Ce.copy(ht.boundingSphere.center)),Ce.applyMatrix4(y.matrixWorld).applyMatrix4(fe)),Array.isArray(xt)){let Tt=ht.groups;for(let Ft=0,Yt=Tt.length;Ft<Yt;Ft++){let Mt=Tt[Ft],Zt=xt[Mt.materialIndex];Zt&&Zt.visible&&A.push(y,ht,Zt,H,Ce.z,Mt,I)}}else xt.visible&&A.push(y,ht,xt,H,Ce.z,null,I)}}}let dt=y.children;for(let vt=0,ht=dt.length;vt<ht;vt++)vl(dt[vt],I,H,B)}function fh(y,I,H,B){let{opaque:k,transmissive:dt,transparent:vt}=y;T.setupLightsView(H),be===!0&&$.setGlobalState(R.clippingPlanes,H),B&&ft.viewport(G.copy(B)),k.length>0&&aa(k,I,H),dt.length>0&&aa(dt,I,H),vt.length>0&&aa(vt,I,H),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function ph(y,I,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){let Mt=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new _n(1,1,{generateMipmaps:!0,type:Mt?zn:ln,minFilter:ui,samples:Math.max(4,he.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let dt=T.state.transmissionRenderTarget[B.id],vt=B.viewport||G;dt.setSize(vt.z*R.transmissionResolutionScale,vt.w*R.transmissionResolutionScale);let ht=R.getRenderTarget(),xt=R.getActiveCubeFace(),Tt=R.getActiveMipmapLevel();R.setRenderTarget(dt),R.getClearColor(F),et=R.getClearAlpha(),et<1&&R.setClearColor(16777215,.5),R.clear(),En&&C.render(H);let Ft=R.toneMapping;R.toneMapping=Zn;let Yt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),be===!0&&$.setGlobalState(R.clippingPlanes,B),aa(y,H,B),Ut.updateMultisampleRenderTarget(dt),Ut.updateRenderTargetMipmap(dt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let Zt=0,ye=I.length;Zt<ye;Zt++){let oe=I[Zt],{object:ae,geometry:Ve,material:St,group:Ke}=oe;if(St.side===vn&&ae.layers.test(B.layers)){let jt=St.side;St.side=en,St.needsUpdate=!0,mh(ae,H,B,Ve,St,Ke),St.side=jt,St.needsUpdate=!0,Mt=!0}}Mt===!0&&(Ut.updateMultisampleRenderTarget(dt),Ut.updateRenderTargetMipmap(dt))}R.setRenderTarget(ht,xt,Tt),R.setClearColor(F,et),Yt!==void 0&&(B.viewport=Yt),R.toneMapping=Ft}function aa(y,I,H){let B=I.isScene===!0?I.overrideMaterial:null;for(let k=0,dt=y.length;k<dt;k++){let vt=y[k],{object:ht,geometry:xt,group:Tt}=vt,Ft=vt.material;Ft.allowOverride===!0&&B!==null&&(Ft=B),ht.layers.test(H.layers)&&mh(ht,I,H,xt,Ft,Tt)}}function mh(y,I,H,B,k,dt){O!==null&&k.isNodeMaterial&&O.setObject(y,k),y.onBeforeRender(R,I,H,B,k,dt),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(R,I,H,B,y,dt),k.transparent===!0&&k.side===vn&&k.forceSinglePass===!1?(k.side=en,k.needsUpdate=!0,R.renderBufferDirect(H,I,B,k,y,dt),k.side=Ni,k.needsUpdate=!0,R.renderBufferDirect(H,I,B,k,y,dt),k.side=vn):R.renderBufferDirect(H,I,B,k,y,dt),y.onAfterRender(R,I,H,B,k,dt)}function gh(y){let I=0;for(let H of y)H.texture!==null&&I++;return I}function Ks(y,I,H){I.isScene!==!0&&(I=bn);let B=Ct.get(y),k=T.state.lights,dt=T.state.shadowsArray,vt=k.state.version,ht=j.getParameters(y,k.state,dt,I,H,T.state.lightProbeGridArray),xt=j.getProgramCacheKey(ht),Tt=B.programs;B.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,B.fog=I.fog;let Ft=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;B.envMap=E.get(y.envMap||B.environment,Ft),B.envMapRotation=B.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Tt===void 0&&(y.addEventListener("dispose",se),Tt=new Map,B.programs=Tt,B.programVariants=new Map);let Yt=Tt.get(xt);if(Yt!==void 0){if(B.currentProgram===Yt&&B.lightsStateVersion===vt)return xh(y,ht),Yt}else ht.uniforms=j.getUniforms(y),O!==null&&y.isNodeMaterial&&O.build(y,H,ht),y.onBeforeCompile(ht,R),Yt=j.acquireProgram(ht,xt),Tt.set(xt,Yt),B.uniforms=ht.uniforms;let Mt=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Mt.clippingPlanes=$.uniform),xh(y,ht),B.needsLights=tf(y),B.lightsStateVersion=vt,B.needsLights&&(Mt.ambientLightColor.value=k.state.ambient,Mt.lightProbe.value=k.state.probe,Mt.sunLights.value=k.state.sun,Mt.sunLightShadows.value=k.state.sunShadow,Mt.directionalLights.value=k.state.directional,Mt.directionalLightShadows.value=k.state.directionalShadow,Mt.spotLights.value=k.state.spot,Mt.spotLightShadows.value=k.state.spotShadow,Mt.rectAreaLights.value=k.state.rectArea,Mt.ltc_1.value=k.state.rectAreaLTC1,Mt.ltc_2.value=k.state.rectAreaLTC2,Mt.pointLights.value=k.state.point,Mt.pointLightShadows.value=k.state.pointShadow,Mt.hemisphereLights.value=k.state.hemi,Mt.sunShadowMatrix.value=k.state.sunShadowMatrix,Mt.sunShadowCascade.value=k.state.sunShadowCascade,Mt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Mt.spotLightMatrix.value=k.state.spotLightMatrix,Mt.spotLightMap.value=k.state.spotLightMap,Mt.pointShadowMatrix.value=k.state.pointShadowMatrix),B.numLightProbeGrids=gh(T.state.lightProbeGridArray),B.currentProgram=Yt,B.uniformsList=null,Yt}function Kd(y,I,H,B,k){let dt=Ct.get(y),vt=dt.currentProgram.id+","+B+","+k,ht=dt.programVariants.get(vt);return ht===void 0?(ht=Ks(y,I,H),dt.programVariants.set(vt,ht)):(dt.currentProgram=ht,dt.uniformsList=null,dt.outputColorSpace=B,dt.toneMapping=k),ht}function _h(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=qs.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function xh(y,I){let H=Ct.get(y);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function jd(y,I,H,B,k){I.isScene!==!0&&(I=bn),Ut.resetTextureUnits();let dt=I.fog,vt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?I.environment:null,ht=nt===null?R.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Jt.workingColorSpace,xt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Tt=E.get(B.envMap||vt,xt),Ft=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Yt=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Mt=!!H.morphAttributes.position,Zt=!!H.morphAttributes.normal,ye=!!H.morphAttributes.color,oe=Zn;B.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(oe=R.toneMapping);let ae=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ve=ae!==void 0?ae.length:0,St=Ct.get(B),Ke=T.state.lights;if(be===!0&&(rn===!0||y!==Q)){let pe=y===Q&&B.id===q;$.setState(B,y,pe)}let jt=!1,Vi=!1;B.version===St.__version?St.needsLights&&St.lightsStateVersion!==Ke.state.version||k.isBatchedMesh&&St.batching===!1||!k.isBatchedMesh&&St.batching===!0||k.isBatchedMesh&&St.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&St.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&St.instancing===!1||!k.isInstancedMesh&&St.instancing===!0||k.isSkinnedMesh&&St.skinning===!1||!k.isSkinnedMesh&&St.skinning===!0||k.isInstancedMesh&&St.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&St.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&St.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&St.instancingMorph===!1&&k.morphTexture!==null||St.envMap!==Tt||B.fog===!0&&St.fog!==dt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==$.numPlanes||St.numIntersection!==$.numIntersection)||St.vertexAlphas!==Ft||St.vertexTangents!==Yt||St.morphTargets!==Mt||St.morphNormals!==Zt||St.morphColors!==ye||St.morphTargetsCount!==Ve||St.numLightProbeGrids!==gh(T.state.lightProbeGridArray)?jt=!0:(St.outputColorSpace!==ht||St.toneMapping!==oe)&&(Vi=!0):(jt=!0,St.__version=B.version);let We=St.currentProgram;(jt===!0||Vi===!0)&&(We=Vi===!0?Kd(B,I,k,ht,oe):Ks(B,I,k),O&&B.isNodeMaterial&&O.onUpdateProgram(B,We,St));let oa=!1,_i=!1,Wi=!1,$t=We.getUniforms(),ze=St.uniforms;if(ft.useProgram(We.program)&&(oa=!0,_i=!0,Wi=!0),B.id!==q&&(q=B.id,_i=!0),oa||Q!==y){ft.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),$t.setValue(U,"projectionMatrix",y.projectionMatrix),$t.setValue(U,"viewMatrix",y.matrixWorldInverse);let Ie=$t.map.cameraPosition;Ie!==void 0&&Ie.setValue(U,Gn.setFromMatrixPosition(y.matrixWorld)),he.logarithmicDepthBuffer&&$t.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&$t.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),Q!==y&&(Q=y,_i=!0,Wi=!0)}if(St.needsLights&&(Ke.state.sunShadowMap.length>0&&$t.setValue(U,"sunShadowMap",Ke.state.sunShadowMap,Ut),Ke.state.directionalShadowMap.length>0&&$t.setValue(U,"directionalShadowMap",Ke.state.directionalShadowMap,Ut),Ke.state.spotShadowMap.length>0&&$t.setValue(U,"spotShadowMap",Ke.state.spotShadowMap,Ut),Ke.state.pointShadowMap.length>0&&$t.setValue(U,"pointShadowMap",Ke.state.pointShadowMap,Ut)),k.isSkinnedMesh){$t.setOptional(U,k,"bindMatrix"),$t.setOptional(U,k,"bindMatrixInverse");let pe=k.skeleton;pe&&(pe.boneTexture===null&&pe.computeBoneTexture(),$t.setValue(U,"boneTexture",pe.boneTexture,Ut))}k.isBatchedMesh&&($t.setOptional(U,k,"batchingTexture"),$t.setValue(U,"batchingTexture",k._matricesTexture,Ut),$t.setOptional(U,k,"batchingIdTexture"),$t.setValue(U,"batchingIdTexture",k._indirectTexture,Ut),$t.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&$t.setValue(U,"batchingColorTexture",k._colorsTexture,Ut));let Dn=H.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&K.update(k,H,We),(_i||St.receiveShadow!==k.receiveShadow)&&(St.receiveShadow=k.receiveShadow,$t.setValue(U,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&I.environment!==null&&(ze.envMapIntensity.value=I.environmentIntensity),ze.dfgLUT!==void 0&&(ze.dfgLUT.value=O_()),_i){if($t.setValue(U,"toneMappingExposure",R.toneMappingExposure),St.needsLights&&Qd(ze,Wi),dt&&B.fog===!0&&at.refreshFogUniforms(ze,dt),at.refreshMaterialUniforms(ze,B,_t,Rt,T.state.transmissionRenderTarget[y.id]),St.needsLights&&St.numLightProbeGrids>0){let pe=b,Ie=0;for(let ti of T.state.lightProbeGridArray)ti.texture!==null&&(pe.textures[Ie]=ti.texture,pe.min[Ie]=ti.boundingBox.min,pe.max[Ie]=ti.boundingBox.max,pe.resolution[Ie]=ti.resolution,Ie++);for(let ti in pe)pe[ti].length=Ie;ze.probesSH.value=pe.textures,ze.probesMin.value=pe.min,ze.probesMax.value=pe.max,ze.probesResolution.value=pe.resolution}qs.upload(U,_h(St),ze,Ut)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(qs.upload(U,_h(St),ze,Ut),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&$t.setValue(U,"center",k.center),$t.setValue(U,"modelViewMatrix",k.modelViewMatrix),$t.setValue(U,"normalMatrix",k.normalMatrix),$t.setValue(U,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let pe=B.uniformsGroups;for(let Ie=0,ti=pe.length;Ie<ti;Ie++){let vh=pe[Ie];wt.update(vh,We),wt.bind(vh,We)}}return We}function Qd(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.sunLights.needsUpdate=I,y.sunLightShadows.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function tf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(y,I,H){let B=Ct.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Ct.get(y.texture).__webglTexture=I,Ct.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){let H=Ct.get(y);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,H=0){nt=y,Z=I,V=H;let B=null,k=!1,dt=!1;if(y){let ht=Ct.get(y);if(ht.__useDefaultFramebuffer!==void 0){ft.bindFramebuffer(U.FRAMEBUFFER,ht.__webglFramebuffer),G.copy(y.viewport),tt.copy(y.scissor),pt=y.scissorTest,ft.viewport(G),ft.scissor(tt),ft.setScissorTest(pt),q=-1;return}else if(ht.__webglFramebuffer===void 0)Ut.setupRenderTarget(y);else if(ht.__hasExternalTextures)Ut.rebindTextures(y,Ct.get(y.texture).__webglTexture,Ct.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ft=y.depthTexture;if(ht.__boundDepthTexture!==Ft){if(Ft!==null&&Ct.has(Ft)&&(y.width!==Ft.image.width||y.height!==Ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ut.setupDepthRenderbuffer(y)}}let xt=y.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(dt=!0);let Tt=Ct.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Tt[I])?B=Tt[I][H]:B=Tt[I],k=!0):y.samples>0&&Ut.useMultisampledRTT(y)===!1?B=Ct.get(y).__webglMultisampledFramebuffer:Array.isArray(Tt)?B=Tt[H]:B=Tt,G.copy(y.viewport),tt.copy(y.scissor),pt=y.scissorTest}else G.copy(Lt).multiplyScalar(_t).floor(),tt.copy(ie).multiplyScalar(_t).floor(),pt=re;if(H!==0&&(B=X),ft.bindFramebuffer(U.FRAMEBUFFER,B)&&ft.drawBuffers(y,B),ft.viewport(G),ft.scissor(tt),ft.setScissorTest(pt),k){let ht=Ct.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,ht.__webglTexture,H)}else if(dt){let ht=I;for(let xt=0;xt<y.textures.length;xt++){let Tt=Ct.get(y.textures[xt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+xt,Tt.__webglTexture,H,ht)}}else if(y!==null&&H!==0){let ht=Ct.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ht.__webglTexture,H)}q=-1};function yh(y){let I=Ct.get(y);return(I.__readFormat!==y.format||I.__readType!==y.type)&&(I.__readFormat=y.format,I.__readType=y.type,I.__formatReadable=he.textureFormatReadable(y.format),I.__typeReadable=he.textureTypeReadable(y.type)),I}this.readRenderTargetPixels=function(y,I,H,B,k,dt,vt,ht=0){if(!(y&&y.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Ct.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&vt!==void 0&&(xt=xt[vt],Array.isArray(xt)&&(xt=xt[0])),xt){ft.bindFramebuffer(U.FRAMEBUFFER,xt);try{let Tt=y.textures[ht],Ft=Tt.format,Yt=Tt.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ht);let Mt=yh(Tt);if(Mt.__formatReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Mt.__typeReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-B&&H>=0&&H<=y.height-k&&U.readPixels(I,H,B,k,rt.convert(Ft),rt.convert(Yt),dt)}finally{let Tt=nt!==null?Ct.get(nt).__webglFramebuffer:null;ft.bindFramebuffer(U.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(y,I,H,B,k,dt,vt,ht=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Ct.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&vt!==void 0&&(xt=xt[vt],Array.isArray(xt)&&(xt=xt[0])),xt)if(I>=0&&I<=y.width-B&&H>=0&&H<=y.height-k){ft.bindFramebuffer(U.FRAMEBUFFER,xt);let Tt=y.textures[ht],Ft=Tt.format,Yt=Tt.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ht);let Mt=yh(Tt);if(Mt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Mt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Zt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Zt),U.bufferData(U.PIXEL_PACK_BUFFER,dt.byteLength,U.STREAM_READ),U.readPixels(I,H,B,k,rt.convert(Ft),rt.convert(Yt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let ye=nt!==null?Ct.get(nt).__webglFramebuffer:null;ft.bindFramebuffer(U.FRAMEBUFFER,ye);let oe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Nu(U,oe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Zt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,dt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Zt),U.deleteSync(oe),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,H=0){let B=Math.pow(2,-H),k=Math.floor(y.image.width*B),dt=Math.floor(y.image.height*B),vt=I!==null?I.x:0,ht=I!==null?I.y:0;Ut.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,vt,ht,k,dt),ft.unbindTexture()},this.copyTextureToTexture=function(y,I,H=null,B=null,k=0,dt=0){let vt,ht,xt,Tt,Ft,Yt,Mt,Zt,ye,oe=y.isCompressedTexture?y.mipmaps[dt]:y.image;if(H!==null)vt=H.max.x-H.min.x,ht=H.max.y-H.min.y,xt=H.isBox3?H.max.z-H.min.z:1,Tt=H.min.x,Ft=H.min.y,Yt=H.isBox3?H.min.z:0;else{let $t=Math.pow(2,-k);vt=Math.floor(oe.width*$t),ht=Math.floor(oe.height*$t),y.isDataArrayTexture?xt=oe.depth:y.isData3DTexture?xt=Math.floor(oe.depth*$t):xt=1,Tt=0,Ft=0,Yt=0}B!==null?(Mt=B.x,Zt=B.y,ye=B.z):(Mt=0,Zt=0,ye=0);let ae=rt.convert(I.format),Ve=rt.convert(I.type),St;I.isData3DTexture?(Ut.setTexture3D(I,0),St=U.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ut.setTexture2DArray(I,0),St=U.TEXTURE_2D_ARRAY):(Ut.setTexture2D(I,0),St=U.TEXTURE_2D),ft.activeTexture(U.TEXTURE0),ft.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,I.flipY),ft.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),ft.pixelStorei(U.UNPACK_ALIGNMENT,I.unpackAlignment);let Ke=ft.getParameter(U.UNPACK_ROW_LENGTH),jt=ft.getParameter(U.UNPACK_IMAGE_HEIGHT),Vi=ft.getParameter(U.UNPACK_SKIP_PIXELS),We=ft.getParameter(U.UNPACK_SKIP_ROWS),oa=ft.getParameter(U.UNPACK_SKIP_IMAGES);ft.pixelStorei(U.UNPACK_ROW_LENGTH,oe.width),ft.pixelStorei(U.UNPACK_IMAGE_HEIGHT,oe.height),ft.pixelStorei(U.UNPACK_SKIP_PIXELS,Tt),ft.pixelStorei(U.UNPACK_SKIP_ROWS,Ft),ft.pixelStorei(U.UNPACK_SKIP_IMAGES,Yt);let _i=y.isDataArrayTexture||y.isData3DTexture,Wi=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){let $t=Ct.get(y),ze=Ct.get(I),Dn=Ct.get($t.__renderTarget),pe=Ct.get(ze.__renderTarget);ft.bindFramebuffer(U.READ_FRAMEBUFFER,Dn.__webglFramebuffer),ft.bindFramebuffer(U.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Ie=0;Ie<xt;Ie++)_i&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(y).__webglTexture,k,Yt+Ie),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(I).__webglTexture,dt,ye+Ie)),U.blitFramebuffer(Tt,Ft,Tt+vt,Ft+ht,Mt,Zt,Mt+vt,Zt+ht,U.DEPTH_BUFFER_BIT,U.NEAREST);ft.bindFramebuffer(U.READ_FRAMEBUFFER,null),ft.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||Ct.has(y)){let $t=Ct.get(y),ze=Ct.get(I);ft.bindFramebuffer(U.READ_FRAMEBUFFER,P),ft.bindFramebuffer(U.DRAW_FRAMEBUFFER,W);for(let Dn=0;Dn<xt;Dn++)_i?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,$t.__webglTexture,k,Yt+Dn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,$t.__webglTexture,k),Wi?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ze.__webglTexture,dt,ye+Dn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ze.__webglTexture,dt),k!==0?U.blitFramebuffer(Tt,Ft,Tt+vt,Ft+ht,Mt,Zt,Mt+vt,Zt+ht,U.COLOR_BUFFER_BIT,U.NEAREST):Wi?U.copyTexSubImage3D(St,dt,Mt,Zt,ye+Dn,Tt,Ft,vt,ht):U.copyTexSubImage2D(St,dt,Mt,Zt,Tt,Ft,vt,ht);ft.bindFramebuffer(U.READ_FRAMEBUFFER,null),ft.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Wi?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(St,dt,Mt,Zt,ye,vt,ht,xt,ae,Ve,oe.data):I.isCompressedArrayTexture?U.compressedTexSubImage3D(St,dt,Mt,Zt,ye,vt,ht,xt,ae,oe.data):U.texSubImage3D(St,dt,Mt,Zt,ye,vt,ht,xt,ae,Ve,oe):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,dt,Mt,Zt,vt,ht,ae,Ve,oe.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,dt,Mt,Zt,oe.width,oe.height,ae,oe.data):U.texSubImage2D(U.TEXTURE_2D,dt,Mt,Zt,vt,ht,ae,Ve,oe);ft.pixelStorei(U.UNPACK_ROW_LENGTH,Ke),ft.pixelStorei(U.UNPACK_IMAGE_HEIGHT,jt),ft.pixelStorei(U.UNPACK_SKIP_PIXELS,Vi),ft.pixelStorei(U.UNPACK_SKIP_ROWS,We),ft.pixelStorei(U.UNPACK_SKIP_IMAGES,oa),dt===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&U.generateMipmap(St),ft.unbindTexture()},this.initRenderTarget=function(y){Ct.get(y).__webglFramebuffer===void 0&&Ut.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ut.setTextureCube(y,0):y.isData3DTexture?Ut.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ut.setTexture2DArray(y,0):Ut.setTexture2D(y,0),ft.unbindTexture()},this.resetState=function(){Z=0,V=0,nt=null,ft.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}};var yd={type:"change"},Hc={type:"start"},Md={type:"end"},rl=new bi,vd=new mn,z_=Math.cos(70*wc.DEG2RAD),Ae=new D,cn=2*Math.PI,Qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gc=1e-6,al=class extends zr{constructor(t,e=null){super(t,e),this.state=Qt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Di.ROTATE,TWO:Di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Ge,this._lastTargetPosition=new D,this._quat=new Ge().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ks,this._sphericalDelta=new ks,this._scale=1,this._panOffset=new D,this._rotateStart=new Et,this._rotateEnd=new Et,this._rotateDelta=new Et,this._panStart=new Et,this._panEnd=new Et,this._panDelta=new Et,this._dollyStart=new Et,this._dollyEnd=new Et,this._dollyDelta=new Et,this._dollyDirection=new D,this._mouse=new Et,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=G_.bind(this),this._onPointerDown=k_.bind(this),this._onPointerUp=H_.bind(this),this._onContextMenu=J_.bind(this),this._onMouseWheel=X_.bind(this),this._onKeyDown=q_.bind(this),this._onTouchStart=Y_.bind(this),this._onTouchMove=Z_.bind(this),this._onMouseDown=V_.bind(this),this._onMouseMove=W_.bind(this),this._interceptControlDown=$_.bind(this),this._interceptControlUp=K_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Qt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(yd),this.update(),this.state=Qt.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ae.copy(e).sub(this.target),Ae.applyQuaternion(this._quat),this._spherical.setFromVector3(Ae),this.autoRotate&&this.state===Qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=cn:n>Math.PI&&(n-=cn),s<-Math.PI?s+=cn:s>Math.PI&&(s-=cn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ae.setFromSpherical(this._spherical),Ae.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ae),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ae.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ae.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(rl.origin.copy(this.object.position),rl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(rl.direction))<z_?this.object.lookAt(this.target):(vd.setFromNormalAndCoplanarPoint(this.object.up,this.target),rl.intersectPlane(vd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Gc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gc||this._lastTargetPosition.distanceToSquared(this.target)>Gc?(this.dispatchEvent(yd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?cn/60*this.autoRotateSpeed*t:cn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ae.setFromMatrixColumn(e,0),Ae.multiplyScalar(-t),this._panOffset.add(Ae)}_panUp(t,e){this.screenSpacePanning===!0?Ae.setFromMatrixColumn(e,1):(Ae.setFromMatrixColumn(e,0),Ae.crossVectors(this.object.up,Ae)),Ae.multiplyScalar(t),this._panOffset.add(Ae)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ae.copy(s).sub(this.target);let r=Ae.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Et,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function k_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function G_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function H_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Md),this.state=Qt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function V_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Qt.DOLLY;break;case Li.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qt.ROTATE}break;case Li.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qt.PAN}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(Hc)}function W_(i){switch(this.state){case Qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function X_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Qt.NONE||(i.preventDefault(),this.dispatchEvent(Hc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Md))}function q_(i){this.enabled!==!1&&this._handleKeyDown(i)}function Y_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Di.ROTATE:if(this.enableRotate===!1){this.state=Qt.NONE;break}this._handleTouchStartRotate(i),this.state=Qt.TOUCH_ROTATE;break;case Di.PAN:if(this.enablePan===!1){this.state=Qt.NONE;break}this._handleTouchStartPan(i),this.state=Qt.TOUCH_PAN;break;default:this.state=Qt.NONE}break;case 2:switch(this.touches.TWO){case Di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Qt.TOUCH_DOLLY_PAN;break;case Di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Qt.TOUCH_DOLLY_ROTATE;break;default:this.state=Qt.NONE}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(Hc)}function Z_(i){switch(this._trackPointer(i),this.state){case Qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Qt.NONE}}function J_(i){this.enabled!==!1&&i.preventDefault()}function $_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function K_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Kc="\uC6B0\uAC00\uC6B0\uAC00\uB9C8\uC744",Sd="",j_="\uC54C",is="\uC6B0\uAC00",ul=[{name:"\uB3D9\uAD74",at:0},{name:"\uC6C0\uB9C9",at:100},{name:"\uB3CC\uC9D1",at:1e3}],jc=100,ge=i=>document.getElementById(i),pi=new URLSearchParams(location.search),ea=60,bd=86,cl=[[16,14],[23,20],[30,26]];function Id(i){if(!i)return{x:0,z:0};let t=1;for(;i>3*t*(t+1);)t++;let e=i-3*t*(t-1)-1,n=Math.floor(e/t),s=e%t,r=n*Math.PI/3,a=r+2*Math.PI/3,o=l=>Math.sin(i*12.9898+l)*43758.5453%1*4;return{x:(Math.cos(r)*t+Math.cos(a)*s)*bd+o(1),z:(Math.sin(r)*t+Math.sin(a)*s)*bd+o(2)}}function Qc(i){let t=Math.floor(i/ea),e=Id(t),n=i%ea,s=0;for(;n>=cl[s][1];)n-=cl[s++][1];let[r,a]=cl[s],o=n/a*2*Math.PI+s*.5+t;return{x:e.x+Math.cos(o)*r,z:e.z+Math.sin(o)*r,cx:e.x,cz:e.z}}if(pi.has("test")){let i=1/0,t=Array.from({length:1500},(e,n)=>Qc(n));for(let e=0;e<t.length;e++)for(let n=0;n<e;n++)i=Math.min(i,Math.hypot(t[e].x-t[n].x,t[e].z-t[n].z));console.assert(i>5,"plots overlap",i),document.title=`plot test ${i>5?"OK":"FAIL"} min=${i.toFixed(2)}`}var th=await fetch("./residents.json",{cache:"no-store"}).then(i=>i.json()).catch(()=>({followers:0,residents:[]})),dl=+pi.get("demo")||0,Gi=dl?Array.from({length:dl},(i,t)=>"sample_"+(t+1)):th.residents,rs=Gi.length,Ld=dl||Math.max(th.followers||0,rs),zi=pi.has("era")?Math.min(ul.length-1,Math.max(0,+pi.get("era")||0)):ul.findLastIndex(i=>Ld>=i.at),Dd=Math.floor(rs/ea)+1,$s=Array.from({length:Dd},(i,t)=>Id(t)),de=Math.max(...$s.map(i=>Math.hypot(i.x,i.z)))+48;ge("vname").textContent=Kc;ge("vstat").textContent=`${ul[zi].name} \uC2DC\uB300 \xB7 \uC9D1 ${rs.toLocaleString()}\uCC44`+(rs>ea?` \xB7 \uB3D9\uB124 ${Math.ceil(rs/ea)}\uACF3`:"");var Vc=ul[zi+1];ge("vnext").textContent=Vc?`${Vc.name} \uC2DC\uB300\uAE4C\uC9C0 \uD314\uB85C\uC6CC ${Math.max(0,Vc.at-Ld).toLocaleString()}\uBA85`:"";ge("kw").textContent=`\u300C${j_}\u300D`;Sd?ge("iglink").href=`https://instagram.com/${Sd}`:ge("iglink").hidden=!0;ge("join").onclick=()=>ge("how").showModal();ge("howx").onclick=()=>ge("how").close();var Qn=matchMedia("(pointer:coarse)").matches||innerWidth<700||pi.has("lite"),Q_=15776138,$e=new nl({canvas:ge("c"),antialias:!0,powerPreference:"high-performance"});$e.setPixelRatio(Math.min(devicePixelRatio,Qn?1.5:2));$e.toneMapping=Gr;$e.toneMappingExposure=.95;$e.shadowMap.enabled=!0;var Se=new _r;Se.fog=new gr(Q_,160,720+de*2);var Ln=new Ye(50,1,.5,2500);Ln.position.set(0,de*.9+15,de*1.3+25);var sn=new al(Ln,$e.domElement);sn.enableDamping=!0;sn.maxPolarAngle=1.45;sn.minDistance=8;sn.maxDistance=de*3+80;sn.autoRotate=!0;sn.autoRotateSpeed=.3;var In=null;sn.addEventListener("start",()=>{sn.autoRotate=!1,In=null});Se.add(new Lr(16773336,6969920,.95));var Nd=new D(-80,110,60),ol=Math.min(de+12,95),un=new Or(16765600,2.7);un.castShadow=!0;un.shadow.mapSize.setScalar(Qn?1024:2048);Object.assign(un.shadow.camera,{left:-ol,right:ol,top:ol,bottom:-ol,near:1,far:420});un.shadow.bias=-5e-4;un.shadow.normalBias=.35;un.shadow.autoUpdate=!1;Se.add(un,un.target);function Ud(){$e.setSize(innerWidth,innerHeight,!1),Ln.aspect=innerWidth/innerHeight,Ln.updateProjectionMatrix()}addEventListener("resize",Ud);Ud();var Zs=7,Xt=()=>{Zs|=0,Zs=Zs+1831565813|0;let i=Math.imul(Zs^Zs>>>15,1|Zs);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296},Oi=(i,t=0)=>{let e=Math.sin(i*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)},Fd=$e.capabilities.getMaxAnisotropy();function hn(i,t,e=1,n=1){let s=document.createElement("canvas");s.width=s.height=i,t(s.getContext("2d"),i);let r=new $i(s);return r.colorSpace=ke,r.wrapS=r.wrapT=As,r.repeat.set(e,n),r.anisotropy=Fd,r}var na=(i,t,e)=>{let n=i.clone();return n.repeat.set(t,e),n.needsUpdate=!0,n},fl=[-1,0,1],Sn=(i,t,e)=>{i.globalAlpha=1,i.fillStyle=e,i.fillRect(0,0,t,t)};function He(i,t,e,n,s,r,a){for(let o=0;o<e;o++){let l=s+Xt()*(r-s),c=l*(.6+Xt()*.6),h=Xt()*t,g=Xt()*t,u=Xt()*3.14;i.globalAlpha=a*(.4+Xt()*.6),i.fillStyle=n[o%n.length];for(let m of fl)for(let _ of fl)i.beginPath(),i.ellipse(h+m*t,g+_*t,l,c,u,0,6.283),i.fill()}}function Mn(i,t,e,n,s,r,a,o,l){i.lineCap="round";for(let c=0;c<e;c++){let h=Xt()*t,g=Xt()*t,u=a+(Xt()-.5)*o,m=s*(.5+Xt());i.globalAlpha=l*(.4+Xt()*.6),i.strokeStyle=n[c%n.length],i.lineWidth=r*(.5+Xt());for(let _ of fl)for(let S of fl)i.beginPath(),i.moveTo(h+_*t,g+S*t),i.lineTo(h+_*t+Math.cos(u)*m,g+S*t+Math.sin(u)*m),i.stroke()}}var Pt=Math.PI/2,Re={grass:hn(1024,(i,t)=>{Sn(i,t,"#6f8246"),He(i,t,260,["#5f7a3a","#83924c","#566e36","#8f9652"],12,70,.35),Mn(i,t,2600,["#4c6630","#93a25a","#62803c"],10,1.6,-Pt,1.2,.5),He(i,t,70,["#9a8452","#b39a62"],3,12,.4)},120,120),dirt:hn(512,(i,t)=>{Sn(i,t,"#b39262"),He(i,t,200,["#a08052","#c4a674","#8f7046"],6,40,.4),He(i,t,600,["#7a6648","#d8c193"],1,3,.7),Mn(i,t,120,["#8a6c44"],16,1.2,0,6.28,.4)},3,3),rock:hn(512,(i,t)=>{Sn(i,t,"#8f877b"),He(i,t,180,["#7b7469","#a39c90","#6e675d","#b0a898"],8,50,.45),Mn(i,t,70,["#4d473f"],60,1.8,0,6.28,.6),He(i,t,700,["#5c554c","#c2bbac"],.8,2.2,.6),He(i,t,30,["#6f7a4e"],6,18,.35)}),hide:hn(512,(i,t)=>{Sn(i,t,"#b07d4c"),He(i,t,120,["#9c6a3c","#c4925e","#8a5c33"],15,60,.4),Mn(i,t,1500,["#7c5430","#c99a66"],7,1,Pt,.5,.35),Mn(i,t,12,["#5e3d22"],700,3.5,Pt,.04,.8),Mn(i,t,260,["#ecd6ae"],8,1.6,0,.3,.7)},3,1),thatch:hn(512,(i,t)=>{Sn(i,t,"#c9a352"),Mn(i,t,3200,["#a8823a","#e0c070","#8e6c2e","#d6b25e"],42,2,Pt,.25,.6),Mn(i,t,5,["#6e5220"],700,6,0,.02,.5)},4,1),wood:hn(256,(i,t)=>{Sn(i,t,"#6e4f33"),Mn(i,t,700,["#553a24","#86633f","#4a321e"],60,2,Pt,.12,.6),He(i,t,10,["#3c2a18"],3,7,.7)}),leaf:hn(256,(i,t)=>{Sn(i,t,"#4f7f3a"),Mn(i,t,420,["#3d6a2c","#74a04d","#8db85e"],60,2,Pt,.2,.5)}),egg:hn(256,(i,t)=>{Sn(i,t,"#fbf3df"),He(i,t,150,["#b89a6a","#8d7350","#d9c29a"],2,9,.6)}),eggCrack:hn(256,(i,t)=>{Sn(i,t,"#fbf3df"),He(i,t,150,["#b89a6a","#8d7350","#d9c29a"],2,9,.6);for(let e=0;e<9;e++){let n=Xt()*t,s=Xt()*t,r=Xt()*6.28;i.globalAlpha=1,i.strokeStyle="#2e2014",i.lineWidth=5,i.lineJoin="miter",i.beginPath(),i.moveTo(n,s);for(let a=0;a<7;a++)r+=(Xt()-.5)*2.2,n+=Math.cos(r)*20,s+=Math.sin(r)*20,i.lineTo(n,s);i.stroke()}}),fur:hn(256,(i,t)=>{Sn(i,t,"#d39a3e"),Mn(i,t,1100,["#b07a2c","#e6b860"],6,1,Pt,.6,.4),He(i,t,60,["#3a2614"],5,12,.85)}),bone:hn(256,(i,t)=>{Sn(i,t,"#efe6d0"),He(i,t,90,["#d6c9aa","#fff8e8"],3,20,.4),Mn(i,t,60,["#b8a986"],30,1,Pt,.5,.5)}),soft:hn(128,(i,t)=>{let e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)})},Qr=(i,t,e)=>hn(256,(n,s)=>{Sn(n,s,i),He(n,s,340,t,3,9,.5),e&&Mn(n,s,26,[e],130,13,Pt,.35,.5),He(n,s,500,["#00000022"],1,2,.5)},2,2);{let i=document.createElement("canvas");i.width=4,i.height=256;let t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,256);[[0,"#4f95c0"],[.3,"#9cc7d3"],[.5,"#f3cf9f"],[.62,"#f0b98a"],[1,"#f0b98a"]].forEach(([s,r])=>e.addColorStop(s,r)),t.fillStyle=e,t.fillRect(0,0,4,256);let n=new $i(i);n.colorSpace=ke,Se.background=n}var nn=(i,t={})=>new Ri({color:i,flatShading:!0,roughness:1,...t}),Me=(i,t={})=>new Ri({map:i,bumpMap:i,bumpScale:2.5,flatShading:!0,roughness:.95,...t}),ki=(i,t={})=>new Ei({color:i,fog:!1,...t}),bt=(i,t,e=[0,0,0],n,s)=>{let r=new on(i,t);return r.position.set(...e),n&&r.scale.set(...n),s&&r.rotation.set(...s),r},mi=(...i)=>{i.forEach(t=>{t.traverse(e=>{e.isMesh&&e.material.isMeshStandardMaterial&&(e.castShadow=!0,e.receiveShadow=!0)}),Se.add(t)})},Kt=(i,t,e=5)=>new Ki(i,t,e),Ot=(i,t,e,n=5)=>new wi(i,t,e,n),Fe=new qn(1,9,7),dn=new Os(1,0),as=new Fs(1,0),Od=new Fs(1,1),Kn=nn(1840144),$c=nn(16183522),jn=Me(Re.rock),ne=Me(Re.wood),Wc=Me(Re.hide),Ed=Me(Re.thatch),hl=Me(Re.leaf,{side:vn}),_e=Me(Re.bone,{bumpScale:1}),tx=new Wt,_l=new zt;function Oe(i,t,{vary:e=.16,cast:n=!0,recv:s=!0}={}){return t.length?i.filter(r=>!(r[5]&&t.length>(Qn?300:700))).map(([r,a,o=[0,0,0],l=[1,1,1],c=[0,0,0],h],g)=>{let u=new br(r,a,t.length),m=new Wt().compose(new D(...o),new Ge().setFromEuler(new xn(...c)),new D(...l));return t.forEach((_,S)=>{if(u.setMatrixAt(S,tx.multiplyMatrices(_,m)),e){let p=1-e*Oi(S,g);u.setColorAt(S,_l.setRGB(p,p*(.97+.03*Oi(S,9)),p*(.94+.06*Oi(S,5))))}}),u.castShadow=n&&!h,u.receiveShadow=s,Se.add(u),u}):[]}var eh=(i,t,e=0,n=1)=>new Wt().compose(new D(i,0,t),new Ge().setFromEuler(new xn(0,e,0)),new D(n,n,n)),nh=(i,t,e,n,s,r,a=0)=>new Wt().compose(new D(i,t,e),new Ge().setFromEuler(new xn(0,a,0)),new D(n,s,r)),pl=i=>new Rr(i,48).rotateX(-Pt),ih=bt(pl(1500),Me(Re.grass,{flatShading:!1,bumpScale:1.5}));ih.receiveShadow=!0;Se.add(ih);var Bd=$s.map(i=>eh(i.x,i.z));Oe([[pl(12.5),Me(Re.dirt,{flatShading:!1}),[0,.06,0]],...cl.map(([i])=>[new Pr(i+2.75,i+4.25,72).rotateX(-Pt),Me(na(Re.dirt,(i+4.25)/3,(i+4.25)/3),{flatShading:!1}),[0,.04,0]])],Bd,{vary:0,cast:!1});var zd=[];for(let i=1;i<Dd;i++){let t=$s[i],e=$s.slice(0,i).reduce((r,a)=>Math.hypot(a.x-t.x,a.z-t.z)<Math.hypot(r.x-t.x,r.z-t.z)?a:r),n=Math.hypot(e.x-t.x,e.z-t.z),s=bt(new Ai(n,3.2).rotateX(-Pt),Me(na(Re.dirt,n/6,.5),{flatShading:!1}),[(t.x+e.x)/2,.035,(t.z+e.z)/2],null,[0,-Math.atan2(e.z-t.z,e.x-t.x),0]);s.receiveShadow=!0,Se.add(s),zd.push([t,e])}var ex=(i,t,e)=>$s.every(n=>(i-n.x)**2+(t-n.z)**2>e*e)&&zd.every(([n,s])=>{let r=s.x-n.x,a=s.z-n.z,o=Math.max(0,Math.min(1,((i-n.x)*r+(t-n.z)*a)/(r*r+a*a)));return Math.hypot(i-n.x-r*o,t-n.z-a*o)>4});Oe([[new Cn(1.5,.32,4,9),jn,[0,.2,0],,[Pt,0,0]],[Kt(.7,1.9,6),ki(16747050),[0,1.1,0]],[Kt(.35,1.2,6),ki(16769162),[0,.9,0]],...[0,2.1,4.2].map(i=>[Ot(.13,.16,1.9,5),ne,[Math.cos(i)*.4,.8,Math.sin(i)*.4],,[Math.sin(i)*.5,0,-Math.cos(i)*.5]]),...[.6,2.7,4.8].map(i=>[Ot(.34,.38,2.4,7),ne,[Math.cos(i)*5,.38,Math.sin(i)*5],,[Pt,0,-i]])],Bd.slice(1),{vary:0});$s.slice(1).forEach((i,t)=>xl("\uB3D9\uB124",`${t+2}\uBC88 \uB3D9\uB124`,!0).position.set(i.x,7,i.z));{let i=[];for(let n=0;n<70;n++){let s=Xt()*6.283,r=Xt()*(de+260),a=30+Xt()*70;i.push(nh(Math.cos(s)*r,.02,Math.sin(s)*r,a,1,a))}let[t]=Oe([[new Ai(1,1).rotateX(-Pt),new Ei({map:Re.soft,transparent:!0,opacity:.28,depthWrite:!1})]],i,{vary:0,cast:!1,recv:!1}),e=[5205550,11972186,6193208,10259018];i.forEach((n,s)=>t.setColorAt(s,_l.setHex(e[s%4]))),t.instanceColor.needsUpdate=!0,t.renderOrder=1}var Td=(i,t,e,n=.6)=>Array.from({length:t},(s,r)=>{let a=n+r*(6.283-2*n)/(t-1);return[as,jn,[Math.sin(a)*i,e*.5,Math.cos(a)*i],[e,e*.7,e*1.1],[0,a,0],1]}),nx=[[[Od,jn,[0,1.2,0],[2.5,1.9,2.3]],[as,jn,[-2,.6,.6],[1.1,.95,1]],[as,jn,[1.9,.5,-.5],[1,.75,1.1]],[as,jn,[.3,2.6,-.4],[1,.55,.9]],[Fe,Kn,[0,.65,1.95],[.85,.95,.5]],[Ot(.12,.12,2.1),ne,[0,1.62,2.3],,[0,0,Pt],1],[Ot(.11,.14,1.6),ne,[-.95,.8,2.3],,[0,0,-.1],1],[Ot(.11,.14,1.6),ne,[.95,.8,2.3],,[0,0,.1],1],[dn,_e,[-1.3,.2,2.6],[.24,.2,.22],,1],[Ot(.05,.05,.7),_e,[-1.05,.08,2.9],,[Pt,0,.6],1]],[[new Ki(2.1,3.2,10),Wc,[0,1.6,0]],[Kt(.75,1.7,3),Kn,[0,.85,1.5],[1,1,.45]],[Ot(.06,.06,1.7,4),ne,[0,3.3,0],,[.38,0,0],1],[Ot(.06,.06,1.7,4),ne,[0,3.3,0],,[-.2,0,.36],1],[Ot(.06,.06,1.7,4),ne,[0,3.3,0],,[-.2,0,-.36],1],[Ot(.07,.07,2,4),ne,[-.52,.92,1.66],,[-.58,0,-.28],1],[Ot(.07,.07,2,4),ne,[.52,.92,1.66],,[-.58,0,.28],1],[new Cn(1.46,.07,4,12),ne,[0,1,0],,[Pt,0,0],1],[new Cn(.69,.06,4,9),ne,[0,2.2,0],,[Pt,0,0],1],...Td(2.15,5,.38),[Ot(.06,.06,1.5,4),ne,[2.5,.75,-.9],,,1],[Ot(.06,.06,1.5,4),ne,[2.5,.75,.3],,,1],[Ot(.05,.05,1.5,4),ne,[2.5,1.5,-.3],,[Pt,0,0],1],[new me(.05,.6,.42),Wc,[2.5,1.15,-.6],,,1],[new me(.05,.5,.36),Wc,[2.5,1.2,0],,,1]],[[Ot(1.9,2.05,1.7,12),Me(na(Re.rock,3,1)),[0,.85,0]],[new Ki(2.7,2.3,12),Ed,[0,2.85,0]],[new Cn(2.55,.13,4,14),Ed,[0,1.76,0],,[Pt,0,0],1],[new me(.85,1.25,.3),Kn,[0,.63,1.95]],[new me(.14,1.4,.2),ne,[-.55,.7,2.06],,,1],[new me(.14,1.4,.2),ne,[.55,.7,2.06],,,1],[new me(1.36,.16,.24),ne,[0,1.44,2.06],,,1],[new me(.46,.4,.2),Kn,[1.69,1.05,.98],,[0,1.047,0],1],[Ot(.08,.08,.8,4),ne,[0,4.25,0],,,1],...Td(2.2,4,.42,1),[Ot(.13,.13,.95),ne,[2.6,.13,-.75],,[Pt,0,0],1],[Ot(.13,.13,.95),ne,[2.87,.13,-.75],,[Pt,0,0],1],[Ot(.13,.13,.95),ne,[2.73,.36,-.75],,[Pt,0,0],1]]],sh=Gi.map((i,t)=>Qc(t)),ss=sh.map((i,t)=>eh(i.x,i.z,Math.atan2(i.cx-i.x,i.cz-i.z)+(Oi(t,1)-.5)*.3,.92+Oi(t,2)*.2)),ix=Oe(nx[zi],ss),rh=i=>{let t=0;for(let e of i)t=t*31+e.charCodeAt(0)>>>0;return(Math.imul(t,2654435761)>>>0)/4294967296},Xc=(i,t,e)=>{i&&(Gi.forEach((n,s)=>i.setColorAt(s,_l.setHSL(rh(n),t,e))),i.instanceColor.needsUpdate=!0)},Js=Me(zi===1?Re.eggCrack:Re.egg,{roughness:.6,flatShading:!1,bumpScale:.6,side:vn});Oe([[new Cn(.5,.15,4,8),ne,[1.9,.13,1.6],,[Pt,0,0],1]],ss);var kd=["\uD2F0\uB77C\uB178\uC0AC\uC6B0\uB8E8\uC2A4","\uD0C0\uB974\uBCF4\uC0AC\uC6B0\uB8E8\uC2A4","\uC2A4\uD53C\uB178\uC0AC\uC6B0\uB8E8\uC2A4","\uD2B8\uB9AC\uCF00\uB77C\uD1B1\uC2A4","\uD504\uD14C\uB77C\uB178\uB3C8","\uBE0C\uB77C\uD0A4\uC624\uC0AC\uC6B0\uB8E8\uC2A4","\uC2A4\uD14C\uACE0\uC0AC\uC6B0\uB8E8\uC2A4","\uC548\uD0AC\uB85C\uC0AC\uC6B0\uB8E8\uC2A4","\uD30C\uB77C\uC0AC\uC6B0\uB864\uB85C\uD478\uC2A4","\uBCA8\uB85C\uD0A4\uB78D\uD1A0\uB974"],Gd=Gi.map(i=>Math.floor(rh(i+"!")*kd.length)),wd=i=>new qn(1,9,4,0,6.283,i?0:Pt,Pt);if(zi===0)Xc(Oe([[Fe,Js,[1.9,.66,1.6],[.45,.6,.45]]],ss,{vary:0})[0],.62,.76);else if(zi===1)Oe([[Fe,Kn,[1.9,.68,1.6],[.4,.55,.4]]],ss,{vary:0,cast:!1}),Oe([[wd(0),Js,[1.9,.66,1.6],[.45,.6,.45]],[wd(1).translate(0,.2,0).rotateZ(.24),Js,[1.9,.66,1.6],[.45,.6,.45]]],ss,{vary:0}).forEach(i=>Xc(i,.62,.76));else{let i=new Wt().makeTranslation(1.9,0,1.6).multiply(new Wt().makeScale(1.5,1.5,1.5)).multiply(new Wt().makeTranslation(-1.9,0,-1.6)),t=ss.map(G=>G.clone().multiply(i)),e=(()=>{let G=new qn(1,16,6,0,6.283,Pt-.12,Pt+.12),tt=G.attributes.position;for(let pt=0;pt<=16;pt++)tt.setY(pt,tt.getY(pt)+(pt%2?.2:-.03));return G.computeVertexNormals(),G})(),n=new qn(1,5,2,0,2.2,.4,.8);Oe([[e,Js,[1.9,.72,1.6],[.58,.68,.58]],[n,Js,[1.1,.03,2],[.22,.22,.22],[.5,1,2.6],1],[n,Js,[2.55,.03,2.3],[.16,.16,.16],[2.4,2,.3],1]],t,{vary:0}).forEach(G=>Xc(G,.62,.76));let s=hn(256,(G,tt)=>{Sn(G,tt,"#ffffff"),He(G,tt,520,["#d0d0d0","#ececec","#bcbcbc"],3,8,.55),He(G,tt,28,["#8c8c8c"],8,16,.5)},2,2),r=(G,tt)=>new Ri({color:G,map:s,bumpMap:s,bumpScale:.8,roughness:.75,flatShading:tt}),a=r(16777215,!1),o=r(10921638,!1),l=r(16777215,!0),c=r(10132122,!0),h=new Set([a,o,l,c]),g=nn(16773584,{flatShading:!1,roughness:.8}),u=nn(15983292,{roughness:.8}),m=nn(16748444,{flatShading:!1,roughness:.9}),_=nn(16777215,{flatShading:!1,roughness:.25}),S=nn(16767050,{flatShading:!1,roughness:.25,emissive:4862464}),p=nn(1577228,{flatShading:!1,roughness:.15}),f=ki(16777215),M=new qn(1,Qn?10:16,Qn?8:12),w=new qn(1,8,6),b=new Os(1,1),A=new me(1,1,1),T=new wi(.6,1,1,4).rotateY(Math.PI/4),d=1.9,v=1.6,L=[[M,a,[d,.74,v],[.38,.44,.38]],[M,g,[d,.7,v+.09],[.29,.37,.32]]],R=[[b,l,[d,.74,v],[.39,.45,.39]],[b,u,[d,.7,v+.1],[.28,.36,.32]]],N=(G,tt,pt,F=.06)=>[-1,1].flatMap(et=>[[w,_,[d+et*G,tt,v+pt],[F*1.5,F*1.7,F]],[w,p,[d+et*G,tt-F*.1,v+pt+F*.5],[F,F*1.2,F*.7]],[dn,f,[d+et*G+F*.35,tt+F*.45,v+pt+F*1.1],[F*.32,F*.32,F*.2]],[w,m,[d+et*G*1.25,tt-F*2.6,v+pt-F*.1],[F*1.1,F*.6,F*.5]]]),O=(G,tt,pt,F=.06)=>[-1,1].flatMap(et=>[[w,S,[d+et*G,tt,v+pt],[F*1.4,F*1.05,F*.8]],[w,p,[d+et*G,tt,v+pt+F*.45],[F*.38,F*.95,F*.5]],[dn,f,[d+et*G+F*.4,tt+F*.4,v+pt+F*.9],[F*.25,F*.25,F*.15]],[A,c,[d+et*G,tt+F*1.35,v+pt+F*.35],[F*3,F*.7,F*1.6],[.25,0,et*.42]]]),X=(G,tt,pt)=>[-1,1].map(F=>[dn,p,[d+F*G,tt,v+pt],[.022,.022,.016]]),P=(G,tt,pt,F=1.24,et=.18)=>[M,a,[d,F,v+et],[G,tt,pt]],W=(G,tt,pt,F=1.26,et=.1)=>[b,l,[d,F,v+et],[G,tt,pt]],Z=(G,tt,pt,F,et)=>[T,l,[d,F,v+et],[G,pt,tt],[Pt,0,0]],V=(G,tt,pt)=>G.map(F=>[Kt(.03,.12,4),_e,[d+F,tt,v+pt-Math.abs(F)*.5],,[Math.PI,0,0]]),nt=G=>[-1,1].map(tt=>[Ot(.04,.03,.24,G===l?4:6),G,[d+tt*.26,.98,v+.34],,[1,0,0]]),q=(G,tt=.07,pt=.16)=>G.map(([F,et])=>[Kt(tt,pt,4),c,[d,F,v+et]]);[[...R,W(.33,.3,.32,1.3),Z(.28,.18,.44,1.22,.5),[A,l,[d,1.04,v+.46],[.32,.06,.44],[.2,0,0]],...nt(l),...V([-.11,-.04,.04,.11],1.1,.7),...q([[1.64,.12],[1.6,-.08],[1.48,-.26]]),...X(.05,1.32,.68),...O(.2,1.43,.3,.065)],[...R,W(.29,.27,.3),Z(.22,.15,.5,1.22,.52),[A,l,[d,1.07,v+.48],[.26,.05,.46],[.1,0,0]],...nt(l),...V([-.08,0,.08],1.12,.74),...q([[1.37,.4],[1.35,.54],[1.32,.66]],.04,.1),...X(.04,1.3,.75),...O(.17,1.4,.3)],[...R,W(.23,.22,.26,1.24,.14),Z(.15,.11,.62,1.2,.62),...V([-.05,.05],1.15,.9),[new wi(1,1,.08,5,1,!1,0,Math.PI).rotateZ(Pt),c,[d,1,v-.16],[1,.66,.44]],...X(.03,1.25,.9),...O(.13,1.36,.3,.05)],[...L,P(.38,.33,.4,1.22,.16),[Ot(.44,.44,.06,14),o,[d,1.42,v-.1],,[Pt-.3,0,0]],[Kt(.05,.32,8),_e,[d-.15,1.55,v+.36],,[.8,0,0]],[Kt(.05,.32,8),_e,[d+.15,1.55,v+.36],,[.8,0,0]],[Kt(.05,.2,8),_e,[d,1.24,v+.6],,[Pt,0,0]],...N(.19,1.3,.48)],[...R,W(.25,.23,.27,1.24,.14),[Kt(.11,.56,4),_e,[d,1.2,v+.62],,[Pt,0,0]],[Kt(.09,.5,4),c,[d,1.54,v-.14],,[-1,0,0]],[new me(.55,.04,.32),c,[d-.5,.98,v],,[0,0,-.5]],[new me(.55,.04,.32),c,[d+.5,.98,v],,[0,0,.5]],...O(.15,1.34,.32,.05)],[...L,[Ot(.1,.14,.7,12),a,[d,1.35,v+.08],,[.25,0,0]],P(.2,.17,.27,1.76,.26),...X(.05,1.82,.5),...N(.12,1.8,.44,.05)],[...L,P(.3,.26,.34,1.2),...[[1.55,.1],[1.5,-.14],[1.3,-.36]].map(([G,tt])=>[M,o,[d,G-.06,v+tt],[.04,.17,.13]]),...X(.07,1.24,.5),...N(.15,1.28,.46)],[...L,P(.36,.22,.34,1.16),...[[-.14,.05],[.14,.05],[0,-.14],[-.2,-.2],[.2,-.2]].map(([G,tt])=>[M,o,[d+G,1.37,v+.18+tt],[.07,.06,.07]]),[Kt(.05,.2,8),_e,[d-.38,1.2,v+.1],,[0,0,Pt]],[Kt(.05,.2,8),_e,[d+.38,1.2,v+.1],,[0,0,-Pt]],...N(.17,1.22,.48)],[...L,P(.26,.24,.36,1.24),[M,g,[d,1.16,v+.52],[.17,.08,.16]],[Ot(.07,.05,.6,10),o,[d,1.56,v-.08],,[-1.1,0,0]],...N(.14,1.32,.46)],[...R,W(.21,.2,.24,1.25,.14),Z(.14,.1,.38,1.21,.5),...V([-.04,.04],1.16,.67),...[[-.4,-.08],[0,0],[.4,.08]].map(([G,tt])=>[Kt(.05,.34,4),c,[d+tt,1.52,v+.04],,[-.4,0,-G]]),[new me(.34,.03,.16),c,[d-.42,.98,v+.1],,[0,0,-.6]],[new me(.34,.03,.16),c,[d+.42,.98,v+.1],,[0,0,.6]],...X(.03,1.25,.66),...O(.13,1.36,.3,.055)]].forEach((G,tt)=>{let pt=Gd.flatMap((F,et)=>F===tt?[et]:[]);Oe(G,pt.map(F=>t[F]),{vary:0}).forEach(F=>{h.has(F.material)&&(pt.forEach((et,yt)=>F.setColorAt(yt,_l.setHSL(rh(Gi[et]),.6,.6))),F.instanceColor.needsUpdate=!0)})})}Oe([[Ot(.05,.06,3.2,4),ne,[-2.2,1.6,1.3]],[new me(.9,.55,.05),nn(15906354,{emissive:7031296}),[-1.72,2.9,1.3]]],ss.slice(0,jc),{vary:0});var ml=Qc(rs),Hd=bt(new Cn(2.2,.14,6,24),ki(16766042),[ml.x,.25,ml.z],null,[Pt,0,0]);Se.add(Hd);var ia=(i,t,e,n,s,r=0)=>Array.from({length:i},()=>{let a,o,l=0;do{let c=Xt()*6.283,h=t+Xt()*(e-t);a=Math.cos(c)*h,o=Math.sin(c)*h}while(r&&!ex(a,o,r)&&++l<30);return eh(a,o,Xt()*6.283,n+Xt()*(s-n))}),Vd=(i,t)=>Array.from({length:i},(e,n)=>[t(n).rotateY(n*6.283/i+.3),hl]);Oe([[Ot(.32,.46,2.7,6),ne,[0,1.35,0]],[Ot(.24,.32,2.7,6),ne,[.2,3.9,0],,[0,0,-.15]],[dn,nn(4862496),[.55,5,.2],[.22,.22,.22],,1],[dn,nn(4862496),[.2,4.95,-.35],[.22,.22,.22],,1],...Vd(7,i=>Kt(.62,3.8,4).scale(1,1,.2).translate(0,1.9,0).rotateZ(-1.2-i%2*.25).translate(.4,5.1,0))],ia(Qn?130:230,38,de+240,.7,1.6,38));Oe([[Ot(.28,.5,7,6),ne,[0,3.5,0]],[Kt(2.4,3,7),hl,[0,5,0]],[Kt(1.8,2.8,7),hl,[0,7,0]],[Kt(1.1,2.6,7),hl,[0,8.9,0]]],ia(Qn?60:120,40,de+260,.8,1.7,39));Oe(Vd(5,()=>Kt(.3,1.9,4).scale(1,1,.3).translate(0,.95,0).rotateZ(-1)),ia(Qn?120:320,35,de+150,.6,1.5,35),{cast:!1});Oe([-.3,0,.3].map((i,t)=>[Kt(.1,.8,3).translate(0,.4,0).rotateZ(i).rotateY(t*2),nn(8824906)]),ia(Qn?700:2600,13,de+70,.6,1.5),{cast:!1,vary:.3});Oe([[Od,jn,[0,.45,0],[1.3,.8,1]],[as,jn,[1.1,.25,.5],[.5,.4,.5],,1]],ia(110,36,de+250,.4,2,36));Oe([[Kt(1,1,7),nn(9073768),[0,.5,0]]],Array.from({length:16},(i,t)=>{let e=t*.393+Xt()*.2,n=de+480+Xt()*220,s=70+Xt()*110,r=s*(1.1+Xt()*.6);return nh(Math.cos(e)*n,-2,Math.sin(e)*n,r,s,r,Xt()*3)}),{cast:!1,recv:!1});var ah=(i,t,e,n={})=>{let s=new Ns(new Ji({map:Re.soft,color:i,fog:!1,transparent:!0,depthWrite:!1,...n}));return s.scale.setScalar(t),s.position.set(...e),Se.add(s),s};ah(16773568,420,Nd.clone().normalize().multiplyScalar(1600).toArray(),{opacity:.9});{let i=[];for(let t=0;t<9;t++){let e=Xt()*6.283,n=500+Xt()*500,s=190+Xt()*90;for(let r=0;r<4;r++)i.push(nh(Math.cos(e)*n+(r*22-33)*Math.sin(e),s+Xt()*6,Math.sin(e)*n-(r*22-33)*Math.cos(e),22+Xt()*14,8+Xt()*5,22+Xt()*14))}Oe([[Fe,ki(16774372,{transparent:!0,opacity:.85})]],i,{vary:0,cast:!1,recv:!1})}var sa=-(de+170),ra=-(de+90);mi(bt(Ot(14,80,85,16),Me(na(Re.rock,6,3),{color:10126452}),[sa,42.5,ra]));Se.add(bt(Ot(13,13,1,16),ki(16738842),[sa,85.2,ra]));for(let[i,t,e]of[[.4,62,2.4],[1.9,40,1.8],[3.3,70,2.8],[4.7,34,1.6],[5.6,52,2]]){let n=new gn;n.position.set(sa,0,ra),n.rotation.y=i;let s=t/107.6/2;n.add(bt(new me(e,t,.5),ki(16734740),[14.6+66*s,85-85*s,0],null,[0,0,.66])),Se.add(n)}ah(16742954,90,[sa,90,ra],{blending:Vs,opacity:.7});var sx=Array.from({length:8},()=>ah(6971480,1,[0,0,0]));{let t=de+34,e=Math.cos(5.3)*t,n=Math.sin(5.3)*t,s=bt(pl(19),Me(na(Re.dirt,5,5),{flatShading:!1}),[e,.03,n],[1,1,.75]);s.receiveShadow=!0,Se.add(s,bt(pl(16),new Ri({color:5218224,roughness:.12,metalness:.2,transparent:!0,opacity:.88}),[e,.08,n],[1,1,.72]));for(let r=0;r<9;r++)mi(bt(as,jn,[e+Math.cos(r*.7)*17,.4,n+Math.sin(r*.7)*12.6],[.9+Xt(),.7,.9+Xt()],[0,Xt()*3,0]))}{let i=new gn,t=2.2,e=de+22;i.position.set(Math.cos(t)*e,0,Math.sin(t)*e),i.rotation.y=.9,i.add(bt(Ot(.2,.36,17,6),_e,[-.5,4.2,0],null,[0,0,Pt]),bt(Fe,_e,[9.6,4.5,0],[1.6,1.15,1.05]),bt(Kt(.7,2.2,5),_e,[11.2,3.9,0],null,[0,0,-Pt-.2]),bt(dn,Kn,[9.9,4.8,.85],[.32,.32,.2]),bt(dn,Kn,[9.9,4.8,-.85],[.32,.32,.2]));for(let n=0;n<8;n++)i.add(bt(new Cn(2.7-n*.2,.16,5,12,Math.PI).rotateZ(Math.PI).rotateY(Pt),_e,[6-n*1.5,4.2,0]));for(let[n,s]of[[5,1.6],[5,-1.6],[-3,1.4],[-3,-1.4]])i.add(bt(Ot(.22,.3,4.2,5),_e,[n,2.1,s],null,[s>0?.25:-.25,0,0]));mi(i)}for(let i=0;i<6;i++)mi(bt(Ot(.16,.2,2.6,6),ne,[Math.cos(i*1.047)*.55,1.05,Math.sin(i*1.047)*.55],null,[Math.sin(i*1.047)*.5,0,-Math.cos(i*1.047)*.5]));for(let i=0;i<12;i++)mi(bt(as,jn,[Math.cos(i*.5236)*2.4,.28,Math.sin(i*.5236)*2.4],[.5+Oi(i)*.2,.42,.5],[0,i,0]));for(let i=0;i<5;i++){let t=i*1.2566+.5;mi(bt(Ot(.38,.42,2.6,7),ne,[Math.cos(t)*5.4,.4,Math.sin(t)*5.4],null,[Pt,0,-t]))}var rx=[[1,2.8,16742938,.85],[.62,2.1,16756778,.9],[.32,1.4,16773280,1]].map(([i,t,e,n])=>{let s=bt(Kt(i,t,7),ki(e,{transparent:!0,opacity:n}),[0,.6+t/2,0]);return Se.add(s),s}),oh=new Ur(16747066,110,70);oh.position.set(0,3,0);Se.add(oh);var Wd=48,lh=new Ue;lh.setAttribute("position",new an(new Float32Array(Wd*3),3));Se.add(new Er(lh,new Us({map:Re.soft,color:16756832,size:.35,transparent:!0,depthWrite:!1,blending:Vs,fog:!1})));var Bi=new gn;Bi.position.set(0,0,11);Bi.scale.setScalar(1.3);{let i=nn(14723192),t=Me(Re.fur,{flatShading:!1}),e=nn(2759698),n=(r,a)=>bt(Ot(.16,.14,.9).translate(0,-.45,0),i,[r,2.05,0],null,[0,0,a]),s=n(.85,2.4);s.add(bt(Ot(.1,.32,1.4,7),ne,[0,-1.5,0])),Bi.add(bt(Ot(.22,.2,.8),i,[.3,.4,0]),bt(Ot(.22,.2,.8),i,[-.3,.4,0]),bt(Fe,t,[0,1.5,0],[.85,.95,.7]),bt(Fe,i,[0,2.75,0],[.55,.55,.55]),bt(Fe,e,[0,3.05,-.08],[.62,.45,.6]),bt(Kt(.42,.7),e,[0,2.35,.3],null,[Math.PI,0,0]),bt(dn,$c,[.2,2.85,.47],[.1,.1,.07]),bt(dn,$c,[-.2,2.85,.47],[.1,.1,.07]),bt(dn,Kn,[.2,2.85,.53],[.055,.055,.04]),bt(dn,Kn,[-.2,2.85,.53],[.055,.055,.04]),bt(Fe,i,[0,2.68,.55],[.11,.09,.1]),bt(Ot(.06,.06,.9),_e,[0,3.5,0],null,[0,0,Pt]),bt(Fe,_e,[.45,3.5,0],[.12,.12,.12]),bt(Fe,_e,[-.45,3.5,0],[.12,.12,.12]),bt(new Cn(.45,.05,4,10),_e,[0,2.25,.05],null,[Pt+.3,0,0]),n(-.85,-.3),s,bt(Fe,new Ei({visible:!1}),[0,2,0],[2.4,3,2.4])),Bi.userData.club=s,mi(Bi)}function qc(i,t,e,n,s){return bt(Ot(e,e*.85,t,6).translate(0,-t/2,0),i,[n,t,s])}var Yc=(i,t,e,n,s)=>{for(let r of[1,-1])i.add(bt(dn,$c,[t,e,n*r],[s,s,s*.6]),bt(dn,Kn,[t+s*.3,e,n*r+r*s*.35],[s*.55,s*.55,s*.4]))},Xd={long:Me(Qr("#7f9a6a",["#62804f","#9db487","#55724a"]),{flatShading:!1}),horn:Me(Qr("#b07a52",["#8f5e3b","#c9966c"],"#6e4428"),{flatShading:!1}),run:Me(Qr("#d08a3c",["#b8732c","#e6a85a"],"#5a3214"),{flatShading:!1}),rex:Me(Qr("#66784f",["#4e6040","#7f9164"],"#2f3b26"),{flatShading:!1}),fly:Me(Qr("#8a6a8a",["#6e5270","#a888a6"]),{flatShading:!1})};function ax(i){let t=new gn,e=Xd[i],n;if(i==="long"){t.add(bt(Fe,e,[0,3.4,0],[3,1.8,1.6]),bt(Ot(.45,.7,5.4,8),e,[3.4,5.9,0],null,[0,0,-.55]),bt(Fe,e,[5.2,8.2,0],[.95,.55,.55]),bt(Kt(.9,5.5,7),e,[-5.2,3.2,0],null,[0,0,Pt]));for(let s=0;s<6;s++)t.add(bt(Kt(.22,.6,4),e,[-2+s*.8,5.25-Math.abs(s-2.5)*.12,0]));Yc(t,5.6,8.35,.4,.14),n=[[1.6,.9],[1.6,-.9],[-1.6,.9],[-1.6,-.9]].map(([s,r])=>qc(e,2.6,.45,s,r))}else if(i==="horn")t.add(bt(Fe,e,[0,1.9,0],[2.2,1.3,1.3]),bt(Fe,e,[2.6,1.8,0],[1,.75,.85]),bt(Ot(1.3,1.3,.15,9),e,[2,2.5,0],null,[0,0,Pt-.3]),bt(Kt(.12,1.1),_e,[3.4,2.4,.35],null,[0,0,-Pt]),bt(Kt(.12,1.1),_e,[3.4,2.4,-.35],null,[0,0,-Pt]),bt(Kt(.1,.5),_e,[3.7,1.9,0],null,[0,0,-Pt+.5]),bt(Kt(.6,2.6,7),e,[-3,1.8,0],null,[0,0,Pt])),Yc(t,3.15,2.05,.68,.13),n=[[1.2,.7],[1.2,-.7],[-1.2,.7],[-1.2,-.7]].map(([s,r])=>qc(e,1.4,.35,s,r));else{let s=i==="rex"?1.7:1;t.add(bt(Fe,e,[0,1.5,0],[1.1,.6,.5]),bt(Ot(.18,.25,.9,6),e,[1.1,2,0],null,[0,0,-.6]),bt(Fe,e,[1.6+.15*s,2.45,0],[.5*s,.28*s,.25*s]),bt(Kt(.3,2.4,6),e,[-2.1,1.6,0],null,[0,0,Pt]),bt(Ot(.05,.04,.45,4),e,[.8,1.25,.32],null,[0,0,-1]),bt(Ot(.05,.04,.45,4),e,[.8,1.25,-.32],null,[0,0,-1])),Yc(t,1.75+.2*s,2.55+.05*s,.2*s,.07*s),n=[[0,.3],[0,-.3]].map(([r,a])=>qc(e,1.2,.14,r,a))}return n.forEach(s=>t.add(s)),t.userData.legs=n,mi(t),t}var qd=[["long",de+28,.03,0,1],["long",de+50,-.025,3,1.25],["long",de+44,-.025,3.25,.5],["horn",de+12,.06,1,1],["horn",de+16,-.05,4,.85],["rex",de+78,.022,4.4,3.2],["run",8,.35,0,1],["run",9.5,.33,.5,.8],["run",7,-.3,3,.9]].map(([i,t,e,n,s])=>{let r=ax(i);return r.scale.setScalar(s),{o:r,R:t,w:e,a0:n,y:0,gait:i==="run"?12:3}});for(let[i,t,e,n]of[[de*.7,.22,0,30],[de*.9+20,-.17,2,40]]){let s=new gn,r=Xd.fly,a=bt(new me(1.4,.08,3.4).translate(0,0,1.7),r),o=bt(new me(1.4,.08,3.4).translate(0,0,-1.7),r);s.add(bt(Kt(.4,3,6),r,[0,0,0],null,[0,0,-Pt]),bt(Kt(.16,1.1,4),r,[1.3,.35,0],null,[0,0,.9]),a,o),s.userData.wings=[a,o],mi(s),qd.push({o:s,R:i,w:t,a0:e,y:n,gait:0})}var ta=[];function xl(i,t,e){let n=document.createElement("canvas");n.width=256,n.height=96;let s=n.getContext("2d");s.fillStyle=e?"#f6cf5a":"#e4d9c4",s.strokeStyle="#6b5a45",s.lineWidth=5,s.beginPath(),s.roundRect(4,4,248,88,14),s.fill(),s.stroke(),s.fillStyle="#2e2418",s.textAlign="center";let r='Pretendard,"Apple SD Gothic Neo","Malgun Gothic",sans-serif';s.font=`600 20px ${r}`,s.fillText(i,128,34);let a=30;do s.font=`800 ${a}px ${r}`;while(s.measureText(t).width>232&&--a>12);s.fillText(t,128,72);let o=new $i(n);o.colorSpace=ke,o.anisotropy=Fd;let l=new Ns(new Ji({map:o,toneMapped:!1,fog:!1}));return l.scale.set(3.6,1.35,1),Se.add(l),l}var Yd=i=>(i<jc?"\uCCAB \uC8FC\uBBFC ":"")+(i+1)+"\uBC88\uC9C0",ox=xl("\uB2E4\uC74C \uC9D1 \uC790\uB9AC","\uC5EC\uAE30\uC608\uC694",!0);ox.position.set(ml.x,3,ml.z);xl("\uC871\uC7A5",is,!0).position.set(0,5.9,11);function lx(){let i=Ln.position;for(let t=0;t<rs;t++){let e=sh[t],n=(e.x-i.x)**2+i.y**2+(e.z-i.z)**2,s=n<2025&&n>81;s&&!ta[t]&&(ta[t]=xl(Yd(t),Gi[t],t<jc),ta[t].position.set(e.x,4.9,e.z)),ta[t]&&(ta[t].visible=s)}}function ch(i){let t=sh[i],e=Math.hypot(t.x-t.cx,t.z-t.cz),n=(t.x-t.cx)/e,s=(t.z-t.cz)/e;In={t:new D(t.x-n*1.5,1.6,t.z-s*1.5),p:new D(t.x-n*7,12,t.z-s*7)},sn.autoRotate=!1;let r=Gi[i],a=["\uC54C \uD488\uB294 \uC911","\uC54C\uC5D0 \uAE08\uC774 \uAC14\uC5B4\uC694",`\uC544\uAE30 ${kd[Gd[i]]}`][zi];Zd("@"+r,`${Kc} ${Yd(i)} \xB7 ${a}`,/^[\w.]{1,30}$/.test(r)&&!dl?"https://instagram.com/"+r:"")}function Zd(i,t,e){ge("cid").textContent=i,ge("cinfo").textContent=t,ge("clink").hidden=!e,e&&(ge("clink").href=e),ge("card").hidden=!1}var Ad=[th.notice,`\uC6B0\uAC00! \uB098 \uC871\uC7A5 ${is}. \uC5EC\uAE30 ${Kc}.`,"\uD314\uB85C\uC6B0 \uD558\uBA74 \uC9D1 \uC900\uB2E4. \uC54C\uB3C4 \uC900\uB2E4. \uC6B0\uAC00.",[`\uC54C \uAC74\uB4DC\uB9AC\uC9C0 \uB9C8\uB77C. \uC5B8\uC820\uAC00 \uAE6C\uB2E4. \uBB50 \uB098\uC62C\uC9C0 ${is}\uB3C4 \uBAA8\uB978\uB2E4.`,`\uC54C\uC5D0 \uAE08 \uAC14\uB2E4. \uACE7 \uB098\uC628\uB2E4. ${is} \uC7A0 \uBABB \uC794\uB2E4.`,"\uC54C \uAE7C\uB2E4. \uC544\uAE30 \uACF5\uB8E1 \uB098\uC654\uB2E4. \uBB3C\uBA74 \uC544\uD504\uB2E4. \uC6B0\uAC00."][zi],`\uC0AC\uB78C \uB9CE\uC544\uC9C0\uBA74 \uB9C8\uC744 \uCEE4\uC9C4\uB2E4. ${is} \uBC14\uBE60\uC9C4\uB2E4. \uC6B0\uAC00\uC6B0\uAC00.`,`\uBC24\uC5D0 \uACF5\uB8E1 \uC6B4\uB2E4. \uBB34\uC11C\uC6CC \uB9C8\uB77C. ${is}\uB3C4 \uBB34\uC12D\uB2E4.`].filter(Boolean),cx=0;function hx(){In={t:new D(0,3.2,11),p:new D(0,5.5,20.5)},sn.autoRotate=!1,Zd(`\uC871\uC7A5 ${is}`,Ad[cx++%Ad.length],"")}ge("card").querySelector(".x").onclick=()=>{ge("card").hidden=!0};var Jd=i=>Gi.findIndex(t=>t.toLowerCase()===i.trim().replace(/^@/,"").toLowerCase());ge("find").onsubmit=i=>{i.preventDefault();let t=Jd(ge("q").value);t>=0?(ch(t),ge("q").blur()):(ge("q").value="",ge("q").placeholder="\uC544\uC9C1 \uADF8 \uC544\uC774\uB514 \uC9D1\uC740 \uC5C6\uC5B4\uC694")};var Zc=new Br,gl={x:0,y:0};$e.domElement.addEventListener("pointerdown",i=>{gl.x=i.clientX,gl.y=i.clientY});$e.domElement.addEventListener("pointerup",i=>{if(Math.hypot(i.clientX-gl.x,i.clientY-gl.y)>6)return;if(Zc.setFromCamera(new Et(i.clientX/innerWidth*2-1,-(i.clientY/innerHeight)*2+1),Ln),Zc.intersectObject(Bi,!0).length)return hx();let t=Zc.intersectObjects(ix)[0];t&&ch(t.instanceId)});if(pi.get("id")){let i=Jd(pi.get("id"));i>=0&&ch(i)}pi.has("fps")&&(window.dbg={renderer:$e,scene:Se,sun:un,ground:ih,camera:Ln,jump:()=>{In&&(Ln.position.copy(In.p),sn.target.copy(In.t),In=null)}},window.bench=(i=30)=>{let t=$e.getContext(),e=new Uint8Array(4),n=performance.now();for(let s=0;s<i;s++)un.shadow.needsUpdate=s%2===0,$e.render(Se,Ln),t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,e);return+((performance.now()-n)/i).toFixed(1)});var Rd=0,Cd=0,ll=0,Jc=0,Pd=performance.now(),Je=0;$e.setAnimationLoop(i=>{let t=Math.min((i-Pd)/1e3,.1);Pd=i,Je+=t,un.shadow.needsUpdate=Rd%(Qn?4:2)===0;for(let n of qd){let s=n.a0+Je*n.w,r=Math.sign(n.w);n.o.position.set(Math.cos(s)*n.R,n.y,Math.sin(s)*n.R),n.o.rotation.y=Math.atan2(-Math.cos(s)*r,-Math.sin(s)*r),n.o.userData.legs?.forEach((a,o)=>{a.rotation.z=Math.sin(Je*n.gait+(o===1||o===2?Math.PI:0))*.45}),n.o.userData.wings?.forEach((a,o)=>{a.rotation.x=Math.sin(Je*5)*.5*(o?1:-1)})}sx.forEach((n,s)=>{let r=(Je*.06+s/8)%1;n.position.set(sa+r*40,90+r*90,ra),n.scale.setScalar(26+r*70),n.material.opacity=.75*(1-r)}),rx.forEach((n,s)=>{n.scale.set(1+Math.sin(Je*9+s)*.08,.85+Math.sin(Je*13+s*2)*.12+Math.sin(Je*7.3+s)*.08,1),n.rotation.y=Je*(s+1)}),oh.intensity=110+Math.sin(Je*11)*25;let e=lh.attributes.position;for(let n=0;n<Wd;n++){let s=(Je*(.25+Oi(n)*.3)+Oi(n,1))%1;e.setXYZ(n,Math.sin(n*2.4+Je)*(.3+s*1.2),1+s*6,Math.cos(n*1.7+Je*.8)*(.3+s*1.2))}if(e.needsUpdate=!0,Hd.scale.setScalar(1+Math.sin(Je*3)*.08),Bi.position.y=Math.abs(Math.sin(Je*2.5))*.15,Bi.userData.club.rotation.z=2.4+Math.sin(Je*2.5)*.3,In){let n=1-Math.exp(-t*4);Ln.position.lerp(In.p,n),sn.target.lerp(In.t,n),Ln.position.distanceTo(In.p)<.1&&(In=null)}sn.update(),un.target.position.set(Math.round(sn.target.x/4)*4,0,Math.round(sn.target.z/4)*4),un.position.copy(un.target.position).add(Nd),Rd++%10===0&&lx(),$e.render(Se,Ln),Jc++,ll+=t,ll>1&&(Cd=Math.round(Jc/ll),Jc=ll=0,pi.has("fps")&&(document.title=`${Cd}fps \xB7 ${$e.info.render.calls} calls \xB7 ${Math.round($e.info.render.triangles/1e3)}k tris`))});
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
